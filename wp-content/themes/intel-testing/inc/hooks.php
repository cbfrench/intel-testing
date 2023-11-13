<?php
/**
 * This hook allows SVG files to be uploaded.
 *
 * @package Three29
 */

/**
 * Allow SVG files to be uploaded
 *
 * @param  array  $mimes  Array of extension -> mime types
 *
 * @return array
 */
function three29_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';

    return $mimes;
}

add_filter('upload_mimes', 'three29_mime_types');

/**
 * Replace the default [...] post excerpt more with an ellipsis.
 *
 * @since 1.0.0
 */
add_filter(
  'excerpt_more',
  function ( $more ) {
      return '&hellip;';
  }
);