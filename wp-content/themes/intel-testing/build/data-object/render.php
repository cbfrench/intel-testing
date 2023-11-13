<?php
/**
 * This block is used for the recipe detail page to put the featured image in a
 * digital polaroid picture frame.
 *
 * @package Three29
 */

// Support custom "anchor" values.
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'data-object';
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $class_name .= ' align' . $block['align'];
}

// Get ACF block data

?>
<div <?php echo $anchor; ?>class="<?php echo esc_attr( $class_name ); ?>">
    <p>yeet</p>
    <InnerBlocks />
</div>
