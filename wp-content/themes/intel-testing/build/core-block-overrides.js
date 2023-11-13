/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/mobile.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/mobile.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const mobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobile);
//# sourceMappingURL=mobile.js.map

/***/ }),

/***/ "./assets/js/block-collection.js":
/*!***************************************!*\
  !*** ./assets/js/block-collection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */



/**
 * Register block collection.
 * See https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#registerblockcollection
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockCollection)('three29', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom Blocks', 'three29-fse')
});

/***/ }),

/***/ "./assets/js/unregister.js":
/*!*********************************!*\
  !*** ./assets/js/unregister.js ***!
  \*********************************/
/***/ (() => {

// wp.domReady( function () {
//     wp.blocks.unregisterBlockStyle( 'core/button', 'outline' );
//     wp.blocks.unregisterBlockStyle( 'core/button', 'fill' );
// } );

/***/ }),

/***/ "./inc/block-filters/animation.js":
/*!****************************************!*\
  !*** ./inc/block-filters/animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const AnimationControls = props => {
  /************************ OPTIONS ************************/

  // Animation Options
  const animationOptions = [{
    label: 'None',
    value: 'none'
  }, {
    label: 'Slide In',
    value: 'slideIn'
  }, {
    label: 'Fade In',
    value: 'fadeIn'
  }, {
    label: 'Zoom In',
    value: 'zoomIn'
  }, {
    label: 'Zoom Out',
    value: 'zoomOut'
  }, {
    label: 'Bounce In',
    value: 'bounceIn'
  }, {
    label: 'Back In',
    value: 'backIn'
  }, {
    label: 'Flip In',
    value: 'flipIn',
    directionDisabled: true,
    axisEnabled: true
  }, {
    label: 'Roll In',
    value: 'rollIn',
    directionDisabled: true
  }, {
    label: 'Rotate In',
    value: 'rotateIn',
    directionDisabled: true
  }, {
    label: 'Flash',
    value: 'flash',
    directionDisabled: true
  }];

  // options for animation cardinal directions
  const animationDirectionOptions = [{
    label: 'None',
    value: 'none'
  }, {
    label: 'Left',
    value: 'left'
  }, {
    label: 'Right',
    value: 'right'
  }, {
    label: 'Up',
    value: 'up'
  }, {
    label: 'Down',
    value: 'down'
  }];

  // options for animation axis where cardinal directions are not applicable
  const animationAxisOptions = [{
    label: 'None',
    value: 'none'
  }, {
    label: 'X',
    value: 'X'
  }, {
    label: 'Y',
    value: 'Y'
  }];

  // options for animation delay
  const animationDelayOptions = [{
    label: '0s',
    value: 0
  }, {
    label: '1s',
    value: 1
  }, {
    label: '2s',
    value: 2
  }, {
    label: '3s',
    value: 3
  }, {
    label: '4s',
    value: 4
  }, {
    label: '5s',
    value: 5
  }];

  /************************ HELPERS ************************/

  const formatAnimationSetting = value => {
    if (value === 'none') return '';
    return value[0].toUpperCase() + value.slice(1);
  };
  const checkDirectionDisabled = value => {
    const selectedType = animationOptions.find(option => option.value === value);
    return selectedType.directionDisabled;
  };
  const checkAxisEnabled = value => {
    const selectedType = animationOptions.find(option => option.value === value);
    return selectedType.axisEnabled;
  };

  /************************ INITIALIZATION ************************/

  // populate initial selected animation type in CMS
  const getInitialAnimationType = (classes, animationDirection) => {
    for (const animationOption of animationOptions) {
      let dir = animationOption.directionDisabled ? '' : formatAnimationSetting(animationDirection);
      let className = `animate__${animationOption.value}${dir}`;
      if (classes.includes(className)) {
        return animationOption.value;
      }
    }
    return 'none';
  };

  // populate initial selected animation direction in CMS
  const getInitialAnimationDirection = classes => {
    for (const animationOption of animationOptions) {
      for (const animationDirectionOption of animationDirectionOptions) {
        if (classes.includes(`animate__${animationOption.value}${formatAnimationSetting(animationDirectionOption.value)}`)) {
          return animationDirectionOption.value;
        }
      }
    }
    return 'none';
  };

  // populate initial selected animation axis in CMS
  const getInitialAnimationAxis = classes => {
    for (const animationOption of animationOptions) {
      for (const animationAxisOption of animationAxisOptions) {
        if (classes.includes(`animate__${animationOption.value}${formatAnimationSetting(animationAxisOption.value)}`)) {
          return animationAxisOption.value;
        }
      }
    }
    return 'none';
  };

  // populate initial selected animation delay in CMS
  const getInitialAnimationDelay = classes => {
    for (const animationDelayOption of animationDelayOptions) {
      if (classes.includes(`animate__delay-${animationDelayOption.value}s`)) {
        return animationDelayOption.value;
      }
    }
    return 0;
  };

  // populate initial selected animation scroll in CMS
  const getInitialScroll = classes => {
    return classes.includes('scroll__enabled');
  };

  // populate initial scroll repeat in CMS
  const getInitialRepeatScroll = classes => {
    return classes.includes('scroll__repeat');
  };

  // populate initial selected animation scroll in CMS
  const getInitialScrollHidden = classes => {
    return classes.includes('scroll__start-hidden');
  };

  // populate initial selected animation scroll offset in CMS
  const getInitialScrollOffset = classes => {
    for (const c of classes) {
      if (c.startsWith('scroll__offset__')) {
        return parseInt(c.replace('scroll__offset__', ''));
      }
    }
    return 0;
  };

  // populate initial selected animation scroll threshold in CMS
  const getInitialScrollThreshold = classes => {
    for (const c of classes) {
      if (c.startsWith('scroll__threshold__')) {
        return parseInt(c.replace('scroll__threshold__', ''));
      }
    }
    return 100;
  };

  /************************ CLASS FUNCTIONS ************************/

  // remove all animation classes from element
  const removeAnimationClasses = () => {
    for (const animationOption of animationOptions) {
      // clear animation classes
      props.classes.splice(props.classes.indexOf('animate__animated'), 1);
      for (const c of props.classes) {
        if (c.startsWith(`animate__${animationOption.value}`)) {
          props.classes.splice(props.classes.indexOf(c), 1);
        }
      }
    }
    props.updateClass(props.classes.join(' '));
  };

  // add selected animation class to element
  const addAnimationClass = (aType, aDirection = 'none', aAxis = 'none') => {
    const selectedType = animationOptions.find(option => option.value === aType);
    let cssClass = `animate__${aType}`;
    if (aType !== 'none') {
      if (!selectedType.directionDisabled) cssClass += formatAnimationSetting(aDirection);
      props.classes.push('animate__animated');
      props.classes.push(cssClass);
    }
    if (aAxis !== 'none') {
      if (selectedType.axisEnabled) cssClass += formatAnimationSetting(aAxis);
      props.classes.push('animate__animated');
      props.classes.push(cssClass);
    }
    props.updateClass(props.classes.join(' '));
  };

  // update the delay class on the element
  const updateDelayClass = delay => {
    for (const delayOption of animationDelayOptions) {
      if (props.classes.includes(`animate__delay-${delayOption.value}s`)) {
        props.classes.splice(props.classes.indexOf(`animate__delay-${delayOption.value}s`), 1);
      }
    }
    if (parseInt(delay) !== 0) {
      props.classes.push(`animate__delay-${delay}s`);
    }
    props.updateClass(props.classes.join(' '));
  };

  // update the scroll class on the element
  const updateScrollClass = scrollEnabled => {
    if (scrollEnabled) {
      props.classes.push('scroll__enabled');
    } else {
      props.classes.splice(props.classes.indexOf('scroll__enabled'), 1);
      for (const c of props.classes) {
        if (c.startsWith('scroll__')) {
          props.classes.splice(props.classes.indexOf(c), 1);
        }
      }
    }
    props.updateClass(props.classes.join(' '));
  };

  // update the scroll repeat class on the element
  const updateRepeatScrollClass = repeatScroll => {
    if (repeatScroll) {
      props.classes.push('scroll__repeat');
    } else {
      props.classes.splice(props.classes.indexOf('scroll__repeat'), 1);
    }
    props.updateClass(props.classes.join(' '));
  };

  // update the scroll start hidden class on the element
  const updateScrollStartHiddenClass = scrollStartHidden => {
    if (scrollStartHidden) {
      props.classes.push('scroll__start-hidden');
    } else {
      props.classes.splice(props.classes.indexOf('scroll__start-hidden'), 1);
    }
    props.updateClass(props.classes.join(' '));
  };

  // update the scroll offset class on the element
  const updateScrollOffsetClass = scrollOffset => {
    for (const c of props.classes) {
      if (c.startsWith('scroll__offset__')) {
        props.classes.splice(props.classes.indexOf(c), 1);
      }
    }
    if (scrollOffset !== 0) {
      props.classes.push(`scroll__offset__${scrollOffset}`);
    }
    props.updateClass(props.classes.join(' '));
  };

  // update the scroll threshold class on the element
  const updateScrollThresholdClass = scrollThreshold => {
    for (const c of props.classes) {
      if (c.startsWith('scroll__threshold__')) {
        props.classes.splice(props.classes.indexOf(c), 1);
      }
    }
    props.classes.push(`scroll__threshold__${scrollThreshold}`);
    props.updateClass(props.classes.join(' '));
  };

  /************************ EVENT HANDLERS ************************/

  const onChangeAnimationType = animationType => {
    setAnimationType(animationType);
    removeAnimationClasses();
    addAnimationClass(animationType, animationDirection, animationAxis);
  };
  const onChangeAnimationDirection = animationDirection => {
    setAnimationDirection(animationDirection);
    removeAnimationClasses();
    addAnimationClass(animationType, animationDirection);
  };
  const onChangeAnimationAxis = animationAxis => {
    setAnimationAxis(animationAxis);
    removeAnimationClasses();
    addAnimationClass(animationType, 'none', animationAxis);
  };
  const onChangeAnimationDelay = animationDelay => {
    setAnimationDelay(animationDelay);
    updateDelayClass(animationDelay);
  };
  const onChangeScroll = scrollEnabled => {
    setScrollEnabled(scrollEnabled);
    updateScrollClass(scrollEnabled);
  };
  const onChangeRepeatScroll = repeatScroll => {
    setRepeatScroll(repeatScroll);
    updateRepeatScrollClass(repeatScroll);
  };
  const onChangeScrollStartHidden = scrollStartHidden => {
    setScrollStartHidden(scrollStartHidden);
    updateScrollStartHiddenClass(scrollStartHidden);
  };
  const onChangeScrollOffset = scrollOffset => {
    setScrollOffset(scrollOffset);
    updateScrollOffsetClass(scrollOffset);
  };
  const onChangeScrollThreshold = scrollThreshold => {
    setScrollThreshold(scrollThreshold);
    updateScrollThresholdClass(scrollThreshold);
  };

  /************************ STATE CONTROLS ************************/

  // Animation
  const [animationDelay, setAnimationDelay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialAnimationDelay(props.classes));
  const [animationDirection, setAnimationDirection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialAnimationDirection(props.classes));
  const [animationAxis, setAnimationAxis] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialAnimationAxis(props.classes));
  const [animationType, setAnimationType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialAnimationType(props.classes, animationDirection));

  // Scroll
  const [scrollEnabled, setScrollEnabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialScroll(props.classes));
  const [repeatScroll, setRepeatScroll] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialRepeatScroll(props.classes));
  const [scrollStartHidden, setScrollStartHidden] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialScrollHidden(props.classes));
  const [scrollOffset, setScrollOffset] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialScrollOffset(props.classes));
  const [scrollThreshold, setScrollThreshold] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialScrollThreshold(props.classes));

  /************************ RENDER ************************/

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Animation Options",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Animation",
    value: animationType,
    onChange: onChangeAnimationType,
    options: animationOptions
  }), !checkDirectionDisabled(animationType) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Direction",
    value: animationDirection,
    onChange: onChangeAnimationDirection,
    options: animationDirectionOptions
  }), checkAxisEnabled(animationType) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Axis",
    value: animationAxis,
    onChange: onChangeAnimationAxis,
    options: animationAxisOptions
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Delay",
    value: animationDelay,
    onChange: onChangeAnimationDelay,
    options: animationDelayOptions
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Scroll Options",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Scroll Enabled",
    checked: scrollEnabled,
    onChange: onChangeScroll
  }), scrollEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Repeat Scroll",
    checked: repeatScroll,
    onChange: onChangeRepeatScroll,
    help: "Repeat animation every time the element becomes visible in the viewport."
  }), scrollEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Start Hidden",
    checked: scrollStartHidden,
    onChange: onChangeScrollStartHidden
  }), scrollEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Scroll Offset",
    value: scrollOffset,
    onChange: onChangeScrollOffset,
    min: -1000,
    max: 1000,
    help: "Offset from bottom of viewport in pixels. Negative numbers will hide content until further scrolled into view."
  }), scrollEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Scroll Threshold",
    value: scrollThreshold,
    onChange: onChangeScrollThreshold,
    min: 1,
    max: 100,
    help: "Percentage of element height that must be visible before animation is triggered."
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationControls);

/***/ }),

/***/ "./inc/block-filters/core/column/index.js":
/*!************************************************!*\
  !*** ./inc/block-filters/core/column/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);






const withInspectorControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (props.name !== 'core/column') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const cssClass = 'three29-high-z-index';
    const {
      className
    } = props.attributes;
    const classes = (className || '').split(' ');
    const [highZIndex, setHighZIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(classes.includes(cssClass));
    const onToggleHighZIndex = isHigh => {
      setHighZIndex(isHigh);
      if (isHigh) {
        classes.push(cssClass);
      } else {
        classes.splice(classes.indexOf(cssClass), 1);
      }
      // Set the updated classes to the block
      props.setAttributes({
        className: classes.join(' ')
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "High Z-Index",
      description: "Use this to have the column appear above some floated elements such as the wave block",
      checked: highZIndex,
      onChange: onToggleHighZIndex
    }))));
  };
}, 'withInspectorControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'core/column/add-high-z-index-control', withInspectorControls);

/***/ }),

/***/ "./inc/block-filters/core/columns/index.js":
/*!*************************************************!*\
  !*** ./inc/block-filters/core/columns/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/mobile.js");







const withInspectorControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (props.name !== 'core/columns') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const cssClass = 't29-col-reverse-mobile';
    const {
      className
    } = props.attributes;
    const classes = (className || '').split(' ');
    const [reverseOnMobile, setReverseOnMobile] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(classes.includes(cssClass));
    const onChangeStackingOrder = isHidden => {
      setReverseOnMobile(isHidden);
      if (isHidden) {
        classes.push(cssClass);
      } else {
        classes.splice(classes.indexOf(cssClass), 1);
      }
      // Set the updated classes to the block
      props.setAttributes({
        className: classes.join(' ')
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Responsive Options",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Reverse Columns on Mobile",
      checked: reverseOnMobile,
      onChange: onChangeStackingOrder
    }))))));
  };
}, 'withInspectorControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'core/columns/add-responsive-controls', withInspectorControls);

/***/ }),

/***/ "./inc/block-filters/core/group/index.js":
/*!***********************************************!*\
  !*** ./inc/block-filters/core/group/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/mobile.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation */ "./inc/block-filters/animation.js");








const withInspectorControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (props.name !== 'core/group' && props.name !== 'core/column') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      className
    } = props.attributes;
    const classes = (className || '').split(' ');
    const [hideOnDesktop, setHideOnDesktop] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(classes.includes('t29-hide-desktop'));
    const [hideOnTablet, setHideOnTablet] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(classes.includes('t29-hide-tablet'));
    const [hideOnMobile, setHideOnMobile] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(classes.includes('t29-hide-mobile'));
    const modifyVisibility = (device, isHidden) => {
      const cssClass = `t29-hide-${device}`;
      if (isHidden) {
        classes.push(cssClass);
      } else {
        classes.splice(classes.indexOf(cssClass), 1);
      }
      // Set the updated classes to the block
      props.setAttributes({
        className: classes.join(' ')
      });
    };
    const onChangeDesktopVisibility = isHidden => {
      setHideOnDesktop(isHidden);
      modifyVisibility('desktop', isHidden);
    };
    const onChangeTabletVisibility = isHidden => {
      setHideOnTablet(isHidden);
      modifyVisibility('tablet', isHidden);
    };
    const onChangeMobileVisibility = isHidden => {
      setHideOnMobile(isHidden);
      modifyVisibility('mobile', isHidden);
    };
    const updateClass = value => {
      props.setAttributes({
        className: value
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Responsive Options",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Hide on Desktop",
      checked: hideOnDesktop,
      onChange: onChangeDesktopVisibility
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Hide on Tablet",
      checked: hideOnTablet,
      onChange: onChangeTabletVisibility
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Hide on Mobile",
      checked: hideOnMobile,
      onChange: onChangeMobileVisibility
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_animation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      classes: classes,
      updateClass: updateClass
    })));
  };
}, 'withInspectorControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'core/group/add-responsive-controls', withInspectorControls);

/***/ }),

/***/ "./inc/block-filters/core/heading/index.js":
/*!*************************************************!*\
  !*** ./inc/block-filters/core/heading/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/mobile.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation */ "./inc/block-filters/animation.js");








const withInspectorControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (props.name !== 'core/heading') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      className
    } = props.attributes;
    const classes = (className || '').split(' ');
    const [centerOnDesktop, setCenterOnDesktop] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(classes.includes('t29-center-desktop'));
    const [centerOnTablet, setCenterOnTablet] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(classes.includes('t29-center-tablet'));
    const [centerOnMobile, setCenterOnMobile] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(classes.includes('t29-center-mobile'));
    const modifyCentering = (device, isHidden) => {
      const cssClass = `t29-center-${device}`;
      if (isHidden) {
        classes.push(cssClass);
      } else {
        classes.splice(classes.indexOf(cssClass), 1);
      }
      // Set the updated classes to the block
      props.setAttributes({
        className: classes.join(' ')
      });
    };
    const onChangeDesktopCentering = isHidden => {
      setCenterOnDesktop(isHidden);
      modifyCentering('desktop', isHidden);
    };
    const onChangeTabletCentering = isHidden => {
      setCenterOnTablet(isHidden);
      modifyCentering('tablet', isHidden);
    };
    const onChangeMobileCentering = isHidden => {
      setCenterOnMobile(isHidden);
      modifyCentering('mobile', isHidden);
    };
    const updateClass = value => {
      props.setAttributes({
        className: value
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Responsive Options",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Center on Desktop",
      checked: centerOnDesktop,
      onChange: onChangeDesktopCentering
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Center on Tablet",
      checked: centerOnTablet,
      onChange: onChangeTabletCentering
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Center on Mobile",
      checked: centerOnMobile,
      onChange: onChangeMobileCentering
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_animation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      classes: classes,
      updateClass: updateClass
    })));
  };
}, 'withInspectorControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'core/heading/center-on-breakpoint', withInspectorControls);

/***/ }),

/***/ "./inc/block-filters/core/image/index.js":
/*!***********************************************!*\
  !*** ./inc/block-filters/core/image/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/mobile.js");







const withInspectorControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (props.name !== 'core/image') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const cssClass = 't29-img-center-mobile';
    const {
      className
    } = props.attributes;
    const classes = (className || '').split(' ');
    const [centerOnMobile, setCenterOnMobile] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(classes.includes(cssClass));
    const onChangeStackingOrder = isHidden => {
      setCenterOnMobile(isHidden);
      if (isHidden) {
        classes.push(cssClass);
      } else {
        classes.splice(classes.indexOf(cssClass), 1);
      }
      // Set the updated classes to the block
      props.setAttributes({
        className: classes.join(' ')
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Responsive Options",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Center Image on Mobile",
      checked: centerOnMobile,
      onChange: onChangeStackingOrder
    }))))));
  };
}, 'withInspectorControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'core/image/add-responsive-controls', withInspectorControls);

/***/ }),

/***/ "./inc/block-filters/index.js":
/*!************************************!*\
  !*** ./inc/block-filters/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_columns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/columns */ "./inc/block-filters/core/columns/index.js");
/* harmony import */ var _core_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/column */ "./inc/block-filters/core/column/index.js");
/* harmony import */ var _core_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/heading */ "./inc/block-filters/core/heading/index.js");
/* harmony import */ var _core_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/group */ "./inc/block-filters/core/group/index.js");
/* harmony import */ var _core_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/image */ "./inc/block-filters/core/image/index.js");
// Each block filter has its own file






/***/ }),

/***/ "./inc/block-styles/index.js":
/*!***********************************!*\
  !*** ./inc/block-styles/index.js ***!
  \***********************************/
/***/ (() => {

// Each block style has its own file
// import './core/button';

/***/ }),

/***/ "./inc/block-variations/index.js":
/*!***************************************!*\
  !*** ./inc/block-variations/index.js ***!
  \***************************************/
/***/ (() => {

// Each block variation has its own file
// import './core/button';

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./assets/js/core-block-overrides.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-collection */ "./assets/js/block-collection.js");
/* harmony import */ var _inc_block_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inc/block-filters */ "./inc/block-filters/index.js");
/* harmony import */ var _inc_block_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../inc/block-styles */ "./inc/block-styles/index.js");
/* harmony import */ var _inc_block_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inc_block_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inc_block_variations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../inc/block-variations */ "./inc/block-variations/index.js");
/* harmony import */ var _inc_block_variations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inc_block_variations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _unregister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unregister */ "./assets/js/unregister.js");
/* harmony import */ var _unregister__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_unregister__WEBPACK_IMPORTED_MODULE_4__);





})();

/******/ })()
;
//# sourceMappingURL=core-block-overrides.js.map