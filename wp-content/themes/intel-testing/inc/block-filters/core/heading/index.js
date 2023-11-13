import {addFilter} from '@wordpress/hooks';
import {createHigherOrderComponent} from '@wordpress/compose';
import {InspectorControls} from '@wordpress/block-editor';
import {PanelBody, PanelRow, ToggleControl, SelectControl, RangeControl} from '@wordpress/components';
import {useState} from '@wordpress/element';
import {mobile} from '@wordpress/icons';
import AnimationControls from '../../animation';

const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (props.name !== 'core/heading') {
            return <BlockEdit {...props} />;
        }

        const {className} = props.attributes;

        const classes = (className || '').split(' ');

        const [centerOnDesktop, setCenterOnDesktop] = useState(classes.includes('t29-center-desktop'));
        const [centerOnTablet, setCenterOnTablet] = useState(classes.includes('t29-center-tablet'));
        const [centerOnMobile, setCenterOnMobile] = useState(classes.includes('t29-center-mobile'));

        const modifyCentering = (device, isHidden) => {
            const cssClass = `t29-center-${device}`;
            if (isHidden) {
                classes.push(cssClass);
            } else {
                classes.splice(classes.indexOf(cssClass), 1);
            }
            // Set the updated classes to the block
            props.setAttributes({className: classes.join(' ')});
        }

        const onChangeDesktopCentering = isHidden => {
            setCenterOnDesktop(isHidden);
            modifyCentering('desktop', isHidden);
        }

        const onChangeTabletCentering = isHidden => {
            setCenterOnTablet(isHidden);
            modifyCentering('tablet', isHidden);
        }

        const onChangeMobileCentering = isHidden => {
            setCenterOnMobile(isHidden);
            modifyCentering('mobile', isHidden);
        }

        const updateClass = (value) => {
            props.setAttributes({className: value});
        }

        return (
            <>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody title="Responsive Options" icon={mobile} initialOpen={false}>
                        <PanelRow>
                            <fieldset>
                                <ToggleControl
                                    label="Center on Desktop"
                                    checked={centerOnDesktop}
                                    onChange={onChangeDesktopCentering}
                                />
                            </fieldset>
                        </PanelRow>
                        <PanelRow>
                            <fieldset>
                                <ToggleControl
                                    label="Center on Tablet"
                                    checked={centerOnTablet}
                                    onChange={onChangeTabletCentering}
                                />
                            </fieldset>
                        </PanelRow>
                        <PanelRow>
                            <fieldset>
                                <ToggleControl
                                    label="Center on Mobile"
                                    checked={centerOnMobile}
                                    onChange={onChangeMobileCentering}
                                />
                            </fieldset>
                        </PanelRow>
                    </PanelBody>
                    <AnimationControls 
                        classes={classes}
                        updateClass={updateClass}
                    />
                </InspectorControls>
            </>
        );
    };
}, 'withInspectorControl');

addFilter(
    'editor.BlockEdit',
    'core/heading/center-on-breakpoint',
    withInspectorControls
);