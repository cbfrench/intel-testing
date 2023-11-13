/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockCollection } from '@wordpress/blocks';

/**
 * Register block collection.
 * See https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#registerblockcollection
 */
registerBlockCollection('three29', {
    title: __('Custom Blocks', 'three29-fse'),
});
