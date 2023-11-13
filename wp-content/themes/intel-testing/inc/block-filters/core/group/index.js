import {addFilter} from '@wordpress/hooks';
import {createHigherOrderComponent} from '@wordpress/compose';
import {InspectorControls} from '@wordpress/block-editor';
import {PanelBody, PanelRow, ToggleControl} from '@wordpress/components';
import {useState} from '@wordpress/element';
import {mobile} from '@wordpress/icons';
import AnimationControls from '../../animation';

const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (props.name !== 'core/group' && props.name !== 'core/column') {
            return <BlockEdit {...props} />;
        }

        const {className} = props.attributes;

        const classes = (className || '').split(' ');

        const [hideOnDesktop, setHideOnDesktop] = useState(classes.includes('t29-hide-desktop'));
        const [hideOnTablet, setHideOnTablet] = useState(classes.includes('t29-hide-tablet'));
        const [hideOnMobile, setHideOnMobile] = useState(classes.includes('t29-hide-mobile'));

        const modifyVisibility = (device, isHidden) => {
            const cssClass = `t29-hide-${device}`;
            if (isHidden) {
                classes.push(cssClass);
            } else {
                classes.splice(classes.indexOf(cssClass), 1);
            }
            // Set the updated classes to the block
            props.setAttributes({className: classes.join(' ')});
        }

        const onChangeDesktopVisibility = isHidden => {
            setHideOnDesktop(isHidden);
            modifyVisibility('desktop', isHidden);
        }

        const onChangeTabletVisibility = isHidden => {
            setHideOnTablet(isHidden);
            modifyVisibility('tablet', isHidden);
        }

        const onChangeMobileVisibility = isHidden => {
            setHideOnMobile(isHidden);
            modifyVisibility('mobile', isHidden);
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
                                    label="Hide on Desktop"
                                    checked={hideOnDesktop}
                                    onChange={onChangeDesktopVisibility}
                                />
                            </fieldset>
                        </PanelRow>
                        <PanelRow>
                            <fieldset>
                                <ToggleControl
                                    label="Hide on Tablet"
                                    checked={hideOnTablet}
                                    onChange={onChangeTabletVisibility}
                                />
                            </fieldset>
                        </PanelRow>
                        <PanelRow>
                            <fieldset>
                                <ToggleControl
                                    label="Hide on Mobile"
                                    checked={hideOnMobile}
                                    onChange={onChangeMobileVisibility}
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
    'core/group/add-responsive-controls',
    withInspectorControls
);