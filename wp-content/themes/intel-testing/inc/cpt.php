<?php
function acidity_post_type_wines() {
  $supports = array(
    'title', // post title
    'editor', // post content
    //'author', // post author
    'thumbnail', // featured images
    //'excerpt', // post excerpt
    //'custom-fields', // custom fields
    //'comments', // post comments
    'revisions', // post revisions
    'post-formats', // post formats
  );
  $labels = array(
    'name' => _x('Wines', 'plural'),
    'singular_name' => _x('Wine', 'singular'),
    'menu_name' => _x('Wines', 'admin menu'),
    'name_admin_bar' => _x('Wines', 'admin bar'),
    'add_new' => _x('Add New', 'add new'),
    'add_new_item' => __('Add New Wine'),
    'new_item' => __('New Wine'),
    'edit_item' => __('Edit Wine'),
    'view_item' => __('View Wine'),
    'all_items' => __('All Wines'),
    'search_items' => __('Search Wines'),
    'not_found' => __('No wines found.'),
  );
  $args = array(
    'supports' => $supports,
    'labels' => $labels,
    'public' => true,
    'query_var' => true,
    'rewrite' => array('slug' => 'wines'),
    'has_archive' => true,
    'hierarchical' => true,
    'menu_icon' => 'dashicons-filter',
    'publicly_queryable' => true,
    'show_in_rest' => true,

  );
  register_post_type('wines', $args);
}

//add_action('init', 'three29_fse_post_type_wines');
