<?php
/**
 * Title: Hidden No Results Content
 * Slug: three29-fse-child/hidden-no-results-content
 * Inserter: no
 */
?>
<!-- wp:paragraph -->
<p>
<?php echo esc_html_x( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'Message explaining that there are no results returned from a search', 'three29-fse-child' ); ?>
</p>
<!-- /wp:paragraph -->

<!-- wp:search {"label":"<?php echo esc_html_x( 'Search', 'label', 'three29-fse-child' ); ?>","placeholder":"<?php echo esc_attr_x( 'Search...', 'placeholder for search field', 'three29-fse-child' ); ?>","showLabel":false,"buttonText":"<?php esc_attr_e( 'Search', 'three29-fse-child' ); ?>","buttonUseIcon":true} /-->
