<?php
/**
 * This block is used for the recipe detail page to put the featured image in a
 * digital polaroid picture frame.
 *
 * @package Three29
 */

if(!function_exists('enqueue_threejs')){
    /**
     * Enqueue threejs library
     *
     * @return void
     */
    function enqueue_threejs() {
        wp_enqueue_script('three-js', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', array(), null, true);
    }
    add_action('wp_enqueue_scripts', 'enqueue_threejs');
}

// Support custom "anchor" values.
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'threejs';
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $class_name .= ' align' . $block['align'];
}

// Get ACF block data

$image = get_field('image');
$cubes = get_field('cubes');
$animation = get_field('animation');
$animation_reverse = get_field('animation_reverse');
$rotation = get_field('rotation');
$camera_rotate = get_field('camera_rotate');
$camera_rotate_sensitivity = get_field('camera_rotate_sensitivity');
$cube_color_palette = get_field('cube_color_palette');
$full_height = get_field('full_height');
$force_squared = get_field('force_squared');

if(!$full_height){
    $class_name .= ' --block-height';
}

$image = $image['url'];

?>
<div <?php echo $anchor; ?>class="<?php echo esc_attr( $class_name ); ?>" id="<?php echo $block['id'];?>">

    <div class="threejs-container"></div>
    <InnerBlocks />

    <script>
        (function($){

            let scope = '#<?php echo $block['id'];?>';

            let el = $(`${scope} .threejs-container`);
            let elTopInitial, elHeight;

            let animationType = '<?php echo $animation;?>';
            let animationReverse = <?php echo $animation_reverse ? 'true' : 'false';?>;

            let sensitivity = <?php echo $camera_rotate_sensitivity ? : 0;?>;

            let squareForced = <?php echo $force_squared ? 'true' : 'false';?>;

            const getScrollPercent = () => {
                let percent = -1;
                let blockToggle = <?php echo $full_height ? 'false' : 'true';?>;
                if(blockToggle){
                    let el = $(`${scope} .threejs-container`);
                    let middle = $(window).height() / 2;
                    let elTop = $(el).position().top;
                    let elBottom = elTop + $(el).innerHeight();

                    if(elTopInitial == undefined || $(window).scrollTop() < $(el).offset().top){
                        percent = 0;
                    }
                    else if($(window).scrollTop() !== $(el).offset().top){
                        percent = 1;
                    }
                    else{
                        percent = Math.min(($(window).scrollTop() - elTopInitial) / elHeight, 1);
                    }
                }
                else{
                    let h = $(document).height();
                    let w = $(window).height();
                    let s = $(window).scrollTop() + w;
                    percent = Math.max(Math.min((s - w) / (h - w), 1), 0);
                }
                return percent;
            }

            $(window).on('load', function () {

                $(window).scrollTop(0);

                // get canvas container
                var container = $(`${scope} .threejs-container`);
                let percent = getScrollPercent();
                let gridsize = <?php echo $cubes;?>;
                let numCubes = gridsize * gridsize;

                // create scene
                var scene = new THREE.Scene();
                var camera = new THREE.PerspectiveCamera(75, $(container).width() / $(container).height(), 0.1, 1000);
                let cameraRotate = <?php echo $camera_rotate ? 'true' : 'false';?>;
                var renderer = new THREE.WebGLRenderer({alpha: true});
                var cubes = [];

                let widthCubes, heightCubes;

                let timerPercent = 0;

                // Set background color to black
                renderer.setClearColor(0x000000, 0);


                const convertHex = (input) => {
                    let output = input.toString(16);
                    if(output.length != 2) output = '0' + output;
                    return output;
                }

                const generatePalette = (input) => {
                    let result = [];
                    let r = parseInt(input.substring(1, 3), 16);
                    let g = parseInt(input.substring(3, 5), 16);
                    let b = parseInt(input.substring(5, 7), 16);
                    for(let i = 0; i < 6; i++){
                        let r2 = Math.min(255, Math.max(0, r + (i - 3) * 10));
                        let g2 = Math.min(255, Math.max(0, g + (i - 3) * 10));
                        let b2 = Math.min(255, Math.max(0, b + (i - 3) * 10));
                        result.push(`#${convertHex(r2)}${convertHex(g2)}${convertHex(b2)}`);
                    }
                    return result;
                }

                // Set up the cube geometry with the array of materials
                const setupCubes = (texture) => {
                    var geometry = new THREE.BoxGeometry();
                    let aspect = texture.image.height / texture.image.width;

                    let colors = generatePalette('<?php echo $cube_color_palette;?>');

                    // Calculate the size of each tile in terms of texture coordinates
                    const tileWidth = 1 / widthCubes;
                    const tileHeight = 1 / heightCubes;

                    for (let i = 0; i < numCubes; i++) {
                        let materials = [];

                        // Clone the texture so that each cube has a unique instance and force reload
                        let textureClone = texture.clone();

                        // change boundary behavior for non-square images
                        /*textureClone.wrapS = THREE.RepeatWrapping;
                        textureClone.wrapT = THREE.RepeatWrapping;
                        textureClone.repeat.set(2, 2);*/
                        textureClone.magFilter = THREE.LinearFilter;

                        // force reload of texture
                        textureClone.needsUpdate = true;
                        
                        for(let j = 0; j < 6; j++){
                            let material;
                            if(j === 4){
                                // Set the texture coordinates to create a tiling effect
                                let row = Math.floor(i / widthCubes);
                                let col = i % widthCubes;

                                let offsetX = tileWidth * col;
                                let offsetY = tileHeight * row;

                                // Load a new instance of the texture for each cube
                                textureClone.repeat.set(tileWidth, tileHeight);
                                textureClone.offset.set(offsetX, (gridsize-1)/gridsize - offsetY);

                                // Create a material with the image texture
                                material = new THREE.MeshBasicMaterial({ map: textureClone });
                            } 
                            else{
                                let color = colors[j];
                                material = new THREE.MeshBasicMaterial({ color: `${color}`});
                            }

                            // Push material to the array
                            materials.push(material);
                        }

                        // Create a cube with the materials array
                        cubes.push(new THREE.Mesh(geometry, materials));

                        // Set position, rotation, etc.
                        cubes[i].position.set(0, 0, Math.random() * 5);
                        cubes[i].rotation.set(0, 0, 0);
                        cubes[i].randomX = Math.random() - 0.5;
                        cubes[i].randomY = Math.random() - 0.5;
                        cubes[i].randomZ = Math.random() - 0.5;
                        cubes[i].randomR = Math.random() - 0.5;

                        // Add the cube to the scene
                        scene.add(cubes[i]);
                    }
                };


                // Set up camera and renderer
                const setupRenderer = () => {
                    camera.position.z = gridsize + 5;
                    camera.position.x = widthCubes / 2;
                    camera.position.y = -heightCubes / 2;
                    camera.rotation.x = 0;
                    camera.rotation.y = 0;
                    camera.rotation.z = 0;
                    renderer.setSize($(container).width(), $(container).height());
                    container.append(renderer.domElement);
                }

                let log = true;

                const render = () => {
                    requestAnimationFrame(render);

                    for (let i = 0; i < numCubes; i++) {
                        let row = Math.floor(i / widthCubes);
                        let col = i % widthCubes;

                        let r = <?php echo $rotation ? 'true' : 'false';?>;

                        const imageFormExplode = (percent, r, dir) => {
                            let p = dir ? percent : 1 - percent;
                            if(r){
                                cubes[i].rotation.x = (gridsize) * cubes[i].randomR * p;
                                cubes[i].rotation.y = (gridsize) * cubes[i].randomR * p;
                                cubes[i].rotation.z = (gridsize) * cubes[i].randomR * p;
                            }
                            // Calculate the position based on the column and row indices
                            cubes[i].position.x = col; // Adjust the factor as needed
                            cubes[i].position.y = -row; // Adjust the factor as needed

                            cubes[i].position.x += (gridsize * 2) * cubes[i].randomX * p;
                            cubes[i].position.y += (gridsize * 2) * cubes[i].randomY * p;
                            cubes[i].position.z = (gridsize * 2) * cubes[i].randomZ * p;
                        }

                        const imageWave = (percent, dir) => {
                            let p = dir ? percent : 1 - percent;

                            let amp = 3;
                            let freq = 20;
                            let wavelength = 3;

                            cubes[i].position.x = col;
                            cubes[i].position.y = -row;

                            cubes[i].position.z = amp * Math.sin(p * freq + col/wavelength);
                        }

                        switch(animationType){
                            case 'explode':
                                imageFormExplode(percent, r, animationReverse);
                                break;
                            case 'wave':
                                imageWave(percent, animationReverse);
                                break;
                            case 'timed_explode':
                                imageFormExplode(timerPercent, r, animationReverse);
                                timerPercent = Math.min(timerPercent + 0.000005, 1);
                                break;
                        }                 
                    }

                    renderer.render(scene, camera);
                };


                var textureLoader = new THREE.TextureLoader();
                textureLoader.load('<?php echo $image;?>', function (texture) {

                    // allow for images that are not square
                    if(!squareForced){
                        widthCubes = Math.min(gridsize, Math.round(gridsize * texture.image.width / texture.image.height));
                        heightCubes = Math.min(gridsize, Math.round(gridsize * texture.image.height / texture.image.width));
                    }
                    else{
                        widthCubes = gridsize;
                        heightCubes = gridsize;
                    }
                    numCubes = widthCubes * heightCubes;

                    setupCubes(texture);
                    setupRenderer();
                    render();

                    $(`${scope} .threejs-container`).animate({
                        opacity: 1
                    }, 500);

                    // adjust block if it is set to block height
                    if($(`${scope}.threejs`).hasClass('--block-height')){

                        // without padding set on inner blocks, the canvas adjustment fails, so this adds 1px padding to each inner block
                        $(`${scope} .acf-innerblocks-container > .wp-block-group`).each(function(){
                            if($(this).css('padding-top') == '0px'){
                                $(this).css('padding-top', '1px');
                            }
                        });

                        // set the canvas to sticky, needs to be done after the canvas is rendered
                        $(`${scope} .threejs-container`).css('position', 'sticky');

                        // recalculate the initial top position of the block
                        elTopInitial = $(el).offset().top - $(el).position().top;

                        // add negative margin to canvas to offset for initial state of position: sticky
                        $(`${scope} canvas`).css('margin-bottom', -$(window).outerHeight());

                        // recalculate the height of the block
                        elHeight = $(`${scope} .acf-innerblocks-container`).outerHeight() - $(window).outerHeight();
                    }
                });

                // Handle window resize
                $(window).on('resize', function(){
                    camera.aspect = $(container).width() / $(container).height();
                    camera.updateProjectionMatrix();
                    renderer.setSize($(container).width(), $(container).height());
                });

                // get scrolling percentage
                $(window).on('scroll', function(){
                    percent = getScrollPercent();
                });

                $(window).on('mousemove', function (event) {
                    if(!cameraRotate) return;
                    // Rotate the camera based on the mouse horizontal position
                    let px = 1 - event.screenX / $(window).width();
                    let py = 1 - event.screenY / $(window).height();
                    camera.rotation.x = Math.max(-1, Math.min(py * 2 - 1, 1)) * sensitivity;
                    camera.rotation.y = Math.max(-1, Math.min(px * 2 - 1, 1)) * sensitivity;
                });
            });


            // handle potential memory leaks
            $(window).on('unload', function(){
                cubes.forEach(cube => {
                    cube.material.forEach(material => {
                        if(material.map){
                            material.map.dispose();
                        }
                        material.dispose();
                    });
                });
                renderer.dispose();
            });
        })(jQuery);
    </script>
</div>
