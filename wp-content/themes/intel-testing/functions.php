<?php

const T29_THEME_ROOT = __DIR__;

/**
 * The theme version.
 *
 * @since 1.0.0
 */
define("T29_THEME_FSE_VERSION", wp_get_theme()->get('Version'));

require __DIR__ . '/inc/lib/helpers.php';
require __DIR__ . '/inc/blocks.php';
require __DIR__ . '/inc/enqueue.php';
require __DIR__ . '/inc/hooks.php';
require __DIR__ . '/inc/cpt.php';
require __DIR__ . '/inc/hotfixes.php';