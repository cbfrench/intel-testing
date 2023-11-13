import {addFilter} from '@wordpress/hooks';
import {createHigherOrderComponent} from '@wordpress/compose';
import {InspectorControls} from '@wordpress/block-editor';
import {PanelBody, ToggleControl} from '@wordpress/components';
import {useState} from '@wordpress/element';


const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (props.name !== 'core/column') {
            return <BlockEdit {...props} />;
        }

        const cssClass = 'three29-high-z-index';
        const {className} = props.attributes;
        const classes = (className || '').split(' ');
        const [highZIndex, setHighZIndex] = useState(classes.includes(cssClass));

        const onToggleHighZIndex = isHigh => {
            setHighZIndex(isHigh);
            if (isHigh) {
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
                    <PanelBody>
                        <ToggleControl
                            label="High Z-Index"
                            description="Use this to have the column appear above some floated elements such as the wave block"
                            checked={highZIndex}
                            onChange={onToggleHighZIndex}
                        />
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'withInspectorControl');

addFilter(
    'editor.BlockEdit',
    'core/column/add-high-z-index-control',
    withInspectorControls
);