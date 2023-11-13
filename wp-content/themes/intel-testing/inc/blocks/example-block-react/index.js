/**
 * Example-block
 * Custom title block -- feel free to delete
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
// Dynamic blocks are preferred for ease of updating across entire site/prevent block breakage
// import save from './save';
import block from './block.json';

/**
 * Register block
 */
registerBlockType(block, {
	edit,
	// save,
});
