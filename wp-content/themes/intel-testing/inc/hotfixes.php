<?php
/**
 * Contains various temporary hotfixes/patches
 *
 * @package Three29
 */

// Compare semver to see if greater than or equal to 16.3
if (defined('GUTENBERG_VERSION') && version_compare(GUTENBERG_VERSION, '16.2', '<=')) {
    // Gutenberg 16.2 and below have an issue with typekit fonts not being registered properly in the editor
    // see: https://github.com/WordPress/gutenberg/pull/52343
    if (
      ! has_action('admin_print_styles', 'wp_print_fonts') &&
      wp_theme_has_theme_json() &&
      function_exists('wp_print_fonts')
    ) {
        add_action('admin_print_styles', 'wp_print_fonts', 50);
    }
}
