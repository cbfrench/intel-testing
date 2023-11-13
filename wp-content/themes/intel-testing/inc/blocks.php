<?php
/**
 * Plugin Name:       Three29 Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       three29-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_three29_block_init() {
    foreach ( glob(T29_THEME_ROOT . '/build/**/') as $block_dir ) {
        register_block_type( $block_dir );
    }
}
add_action( 'init', 'create_block_three29_block_init' );


/**
 * Enqueue core block filters, styles and variations.
 *
 * @return void
 */
function t29_enqueue_core_block_overrides() {
    $overrides = T29_THEME_ROOT . '/build/core-block-overrides.asset.php';
    if ( file_exists( $overrides ) ) {
        $dep = require_once $overrides;
        wp_enqueue_script(
          'core-block-overrides',
          get_template_directory_uri() . '/build/core-block-overrides.js',
          $dep['dependencies'], // IDK if its correct that this is empty, in 329 theme I had to add dependencies in order to get this to work
          $dep['version'],
          array(
            'in_footer' => true
          )
        );
    }
}

add_action('enqueue_block_editor_assets', 't29_enqueue_core_block_overrides');



/**
 * This is an example of how to unregister a core block style.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 * @see https://github.com/WordPress/gutenberg/pull/37580
 *
 * @since 1.0.0
 *
 * @return void
 */
function three29_unregister_block_style() {
    $overrides = T29_THEME_ROOT . '/build/editor.asset.php';
    if ( file_exists( $overrides ) ) {
        $dep = require_once $overrides;
        wp_enqueue_script(
          'three29-editor-js',
          get_template_directory_uri() . '/build/editor.js',
          array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
          $dep['version'],
          array(
            'in_footer' => true
          )
        );
    }
}
add_action( 'enqueue_block_editor_assets', 'three29_unregister_block_style' );

/**
 * Register block pattern categories
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/
 *
 * @return void
 */
function three29_register_block_pattern_categories() {
    // Register a block pattern category
    register_block_pattern_category(
      'three29-theme',
      [ 'label' => __( 'Three29 Theme', 'three29-fse' ) ]
    );
}

add_action( 'init', 'three29_register_block_pattern_categories' );
