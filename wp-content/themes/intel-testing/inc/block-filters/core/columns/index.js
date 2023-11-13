import {addFilter} from '@wordpress/hooks';
import {createHigherOrderComponent} from '@wordpress/compose';
import {InspectorControls} from '@wordpress/block-editor';
import {PanelBody, PanelRow, ToggleControl} from '@wordpress/components';
import {useState} from '@wordpress/element';
import {mobile} from '@wordpress/icons';


const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (props.name !== 'core/columns') {
            return <BlockEdit {...props} />;
        }

        const cssClass = 't29-col-reverse-mobile';
        const {className} = props.attributes;
        const classes = (className || '').split(' ');
        const [reverseOnMobile, setReverseOnMobile] = useState(classes.includes(cssClass));

        const onChangeStackingOrder = isHidden => {
            setReverseOnMobile(isHidden);
            if (isHidden) {
                classes.push(cssClass);
            } else {
                classes.splice(classes.indexOf(cssClass), 1);
            }
            // Set the updated classes to the block
            props.setAttributes({className: classes.join(' ')});
        }

        return (
            <>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title="Responsive Options" icon={mobile} initialOpen={false}>
                        <PanelRow>
                            <fieldset>
                                <ToggleControl
                                    label="Reverse Columns on Mobile"
                                    checked={reverseOnMobile}
                                    onChange={onChangeStackingOrder}
                                />
                            </fieldset>
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'withInspectorControl');

addFilter(
    'editor.BlockEdit',
    'core/columns/add-responsive-controls',
    withInspectorControls
);