<?php
/**
 * Title: Hidden 404
 * Slug: three29-fse-child/hidden-404
 * Inserter: no
 */
?>
<!-- wp:spacer {"height":"var(--wp--preset--spacing--30)"} -->
<div style="height:var(--wp--preset--spacing--30)" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":1,"align":"wide"} -->
<h1 class="alignwide"><?php echo esc_html_x( '404', 'Sorry but the page you are looking for cannot be found.', 'three29-fse-child' ); ?></h1>
<!-- /wp:heading -->

<!-- wp:group {"align":"wide","layout":{"type":"default"},"style":{"spacing":{"margin":{"top":"5px"}}}} -->
<div class="wp-block-group alignwide" style="margin-top:5px">
    <!-- wp:paragraph -->
    <p><?php echo esc_html_x( 'Sorry but the page you are looking for cannot be found.', 'Message to convey that a webpage could not be found', 'three29-fse-child' ); ?></p>
    <!-- /wp:paragraph -->

    <!-- wp:search {"label":"<?php echo esc_html_x( 'Search', 'label', 'three29-fse-child' ); ?>","placeholder":"<?php echo esc_attr_x( 'Search...', 'placeholder for search field', 'three29-fse-child' ); ?>","showLabel":false,"width":100,"widthUnit":"%","buttonText":"<?php esc_attr_e( 'Search', 'three29-fse-child' ); ?>","buttonUseIcon":true,"align":"center"} /-->
</div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"var(--wp--preset--spacing--70)"} -->
<div style="height:var(--wp--preset--spacing--70)" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->
