<?php
/**
 * For all enqueued scripts and styles.
 *
 * @package Three29
 */


/**
 * The primary style enqueue function using `after_setup_theme`
 * hook. This will enqueue all styles for blocks as well as other
 * editor styles/theme support function calls.
 *
 * @return void
 */
function three29_theme_setup() {
    add_theme_support( 'wp-block-styles' );

    add_editor_style( 'build/shared.css' );
    //add_editor_style( 'build/editor.css' );
    add_editor_style( 'build/style-core-block-overrides.css' );
}

add_action( 'after_setup_theme', 'three29_theme_setup' );

function three29_admin_enqueue_scripts($hook) {
    if ( 'post.php' != $hook ) {
        return;
    }
    $theme_version = wp_get_theme()->get( 'Version' );
    $version_string = is_string( $theme_version ) ? $theme_version : false;
    wp_enqueue_style( 'three29-theme-admin', get_template_directory_uri() . '/build/admin.css', array(), $version_string );
}
add_action('admin_enqueue_scripts', 'three29_admin_enqueue_scripts' );

/**
 * Enqueue theme assets such as scripts and JS files on front end.
 *
 * @return void
 */
function three29_enqueue_theme_assets() {
    wp_enqueue_script( 'three29-theme-scripts', get_template_directory_uri() . '/build/frontend.js', array('jquery'), get_theme_asset_version(get_stylesheet_directory() . '/build/frontend.js' ), array( 'in_footer' => true ) );
    wp_enqueue_style( 'three29-theme-shared', get_template_directory_uri() . '/build/shared.css', array(), get_theme_asset_version(get_stylesheet_directory() . '/build/shared.css' ) );
    wp_enqueue_style( 'three29-theme-block-overrides', get_template_directory_uri() . '/build/style-core-block-overrides.css', array(), get_theme_asset_version(get_stylesheet_directory() . '/build/style-core-block-overrides.css' ) );
    wp_enqueue_style( 'three29-theme-frontend', get_template_directory_uri() . '/build/frontend.css', array(), get_theme_asset_version(get_stylesheet_directory() . '/build/frontend.css' ) );
}
add_action( 'wp_enqueue_scripts', 'three29_enqueue_theme_assets' );

/**
 * Alter the script tags for any enqueued scripts with
 * the 'three29-module-' prefix. This adds support for
 * script tags with type="module"
 *
 * @param string $tag the script tag HTML
 * @param string $handle the enqueued scripts handle/slug
 * @param string $src the URL of the script used for the script tags src attribute
 *
 * @return mixed|string
 */
function three29_support_script_module_enqueues( string $tag, string $handle, string $src ) {
    if (str_starts_with($handle, 'three29-module-')) {
        // phpcs:ignore WordPress.WP.EnqueuedResources
        $tag = '<script type="module" src="' . $src . '"></script>';
    }

    return $tag;
}

add_filter( 'script_loader_tag', 'three29_support_script_module_enqueues', 10, 3 );

/**
 * Suggested color that user agents should use to customize the
 * display of the page or of the surrounding user interface.
 *
 * @return void
 */
function three29_add_theme_tag() {
    ?>
    <meta name="theme-color" content="#67000E">
    <?php
}
add_action('wp_head', 'three29_add_theme_tag');
