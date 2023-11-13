import {PanelBody, PanelRow, ToggleControl, SelectControl, RangeControl} from '@wordpress/components';
import {useState} from '@wordpress/element';

const AnimationControls = (props) => {

	/************************ OPTIONS ************************/

	// Animation Options
	const animationOptions = [
		{label: 'None', value: 'none'},
		{label: 'Slide In', value: 'slideIn'},
		{label: 'Fade In', value: 'fadeIn'},
		{label: 'Zoom In', value: 'zoomIn'},
		{label: 'Zoom Out', value: 'zoomOut'},
		{label: 'Bounce In', value: 'bounceIn'},
		{label: 'Back In', value: 'backIn'},
		{label: 'Flip In', value: 'flipIn', directionDisabled: true, axisEnabled: true},
		{label: 'Roll In', value: 'rollIn', directionDisabled: true},
		{label: 'Rotate In', value: 'rotateIn', directionDisabled: true},
		{label: 'Flash', value: 'flash', directionDisabled: true},
	];

	// options for animation cardinal directions
	const animationDirectionOptions = [
		{label: 'None', value: 'none'},
		{label: 'Left', value: 'left'},
		{label: 'Right', value: 'right'},
		{label: 'Up', value: 'up'},
		{label: 'Down', value: 'down'},
	];

	// options for animation axis where cardinal directions are not applicable
	const animationAxisOptions = [
		{label: 'None', value: 'none'},
		{label: 'X', value: 'X'},
		{label: 'Y', value: 'Y'},
	];

	// options for animation delay
	const animationDelayOptions = [
		{label: '0s', value: 0},
		{label: '1s', value: 1},
		{label: '2s', value: 2},
		{label: '3s', value: 3},
		{label: '4s', value: 4},
		{label: '5s', value: 5},
	];


	/************************ HELPERS ************************/

	const formatAnimationSetting = (value) => {
		if(value === 'none') return '';
		return value[0].toUpperCase() + value.slice(1);
	}

	const checkDirectionDisabled = (value) => {
		const selectedType = animationOptions.find(option => option.value === value);
		return selectedType.directionDisabled;
	}

	const checkAxisEnabled = (value) => {
		const selectedType = animationOptions.find(option => option.value === value);
		return selectedType.axisEnabled;
	}


	/************************ INITIALIZATION ************************/

	// populate initial selected animation type in CMS
	const getInitialAnimationType = (classes, animationDirection) => {
		for (const animationOption of animationOptions) {
			let dir = animationOption.directionDisabled ? '' : formatAnimationSetting(animationDirection);
			let className = `animate__${animationOption.value}${dir}`;
			if(classes.includes(className)) {
				return animationOption.value;
			}
		}
		return 'none';
	}

	// populate initial selected animation direction in CMS
	const getInitialAnimationDirection = (classes) => {
		for (const animationOption of animationOptions) {
			for(const animationDirectionOption of animationDirectionOptions) {
				if(classes.includes(`animate__${animationOption.value}${formatAnimationSetting(animationDirectionOption.value)}`)) {
					return animationDirectionOption.value;
				}
			}
		}
		return 'none';
	}

	// populate initial selected animation axis in CMS
	const getInitialAnimationAxis = (classes) => {
		for (const animationOption of animationOptions) {
			for(const animationAxisOption of animationAxisOptions) {
				if(classes.includes(`animate__${animationOption.value}${formatAnimationSetting(animationAxisOption.value)}`)) {
					return animationAxisOption.value;
				}
			}
		}
		return 'none';
	}

	// populate initial selected animation delay in CMS
	const getInitialAnimationDelay = (classes) => {
		for (const animationDelayOption of animationDelayOptions) {
			if(classes.includes(`animate__delay-${animationDelayOption.value}s`)) {
				return animationDelayOption.value;
			}
		}
		return 0;
	}

	// populate initial selected animation scroll in CMS
	const getInitialScroll = (classes) => {
		return classes.includes('scroll__enabled');
	}

	// populate initial scroll repeat in CMS
	const getInitialRepeatScroll = (classes) => {
		return classes.includes('scroll__repeat');
	}

	// populate initial selected animation scroll in CMS
	const getInitialScrollHidden = (classes) => {
		return classes.includes('scroll__start-hidden');
	}

	// populate initial selected animation scroll offset in CMS
	const getInitialScrollOffset = (classes) => {
		for(const c of classes){
			if(c.startsWith('scroll__offset__')){
				return parseInt(c.replace('scroll__offset__', ''));
			}
		}
		return 0;
	}

	// populate initial selected animation scroll threshold in CMS
	const getInitialScrollThreshold = (classes) => {
		for(const c of classes){
			if(c.startsWith('scroll__threshold__')){
				return parseInt(c.replace('scroll__threshold__', ''));
			}
		}
		return 100;
	}


	/************************ CLASS FUNCTIONS ************************/

	// remove all animation classes from element
	const removeAnimationClasses = () => {
		for (const animationOption of animationOptions) {
			// clear animation classes
			props.classes.splice(props.classes.indexOf('animate__animated'), 1);
			for (const c of props.classes) {
				if(c.startsWith(`animate__${animationOption.value}`)) {
					props.classes.splice(props.classes.indexOf(c), 1);
				}
			}
		}
		props.updateClass(props.classes.join(' '));
	}

	// add selected animation class to element
	const addAnimationClass = (aType, aDirection='none', aAxis='none') => {
		const selectedType = animationOptions.find(option => option.value === aType);
		let cssClass = `animate__${aType}`;
		if(aType !== 'none') {
			if(!selectedType.directionDisabled) cssClass += formatAnimationSetting(aDirection);
			props.classes.push('animate__animated');
			props.classes.push(cssClass);
		}
		if(aAxis !== 'none') {	
			if(selectedType.axisEnabled) cssClass += formatAnimationSetting(aAxis);
			props.classes.push('animate__animated');
			props.classes.push(cssClass);
		}
		props.updateClass(props.classes.join(' '));
	}

	// update the delay class on the element
	const updateDelayClass = (delay) => {
		for (const delayOption of animationDelayOptions) {
			if(props.classes.includes(`animate__delay-${delayOption.value}s`)) {
					props.classes.splice(props.classes.indexOf(`animate__delay-${delayOption.value}s`), 1);
			}
		}
		if(parseInt(delay) !== 0){ 
			props.classes.push(`animate__delay-${delay}s`);
		}
		props.updateClass(props.classes.join(' '));
	}

	// update the scroll class on the element
	const updateScrollClass = (scrollEnabled) => {
		if(scrollEnabled) {
			props.classes.push('scroll__enabled');
		} else {
			props.classes.splice(props.classes.indexOf('scroll__enabled'), 1);
			for(const c of props.classes){
				if(c.startsWith('scroll__')){
					props.classes.splice(props.classes.indexOf(c), 1);
				}
			}
		}
		props.updateClass(props.classes.join(' '));
	}

	// update the scroll repeat class on the element
	const updateRepeatScrollClass = (repeatScroll) => {
		if(repeatScroll) {
			props.classes.push('scroll__repeat');
		} else {
			props.classes.splice(props.classes.indexOf('scroll__repeat'), 1);
		}
		props.updateClass(props.classes.join(' '));
	}

	// update the scroll start hidden class on the element
	const updateScrollStartHiddenClass = (scrollStartHidden) => {
		if(scrollStartHidden) {
			props.classes.push('scroll__start-hidden');
		} else {
			props.classes.splice(props.classes.indexOf('scroll__start-hidden'), 1);
		}
		props.updateClass(props.classes.join(' '));
	}

	// update the scroll offset class on the element
	const updateScrollOffsetClass = (scrollOffset) => {
		for(const c of props.classes){
			if(c.startsWith('scroll__offset__')){
				props.classes.splice(props.classes.indexOf(c), 1);
			}
		}
		if(scrollOffset !== 0){
			props.classes.push(`scroll__offset__${scrollOffset}`);
		}
		props.updateClass(props.classes.join(' '));
	}

	// update the scroll threshold class on the element
	const updateScrollThresholdClass = (scrollThreshold) => {
        for(const c of props.classes){
			if(c.startsWith('scroll__threshold__')){
				props.classes.splice(props.classes.indexOf(c), 1);
			}
		}

        props.classes.push(`scroll__threshold__${scrollThreshold}`);
		props.updateClass(props.classes.join(' '));
	}


	/************************ EVENT HANDLERS ************************/

	const onChangeAnimationType = (animationType) => {
		setAnimationType(animationType);   
		removeAnimationClasses();
		addAnimationClass(animationType, animationDirection, animationAxis);   
	}

	const onChangeAnimationDirection = (animationDirection) => {
		setAnimationDirection(animationDirection);
		removeAnimationClasses();
		addAnimationClass(animationType, animationDirection);
	}

	const onChangeAnimationAxis = (animationAxis) => {
		setAnimationAxis(animationAxis);
		removeAnimationClasses();
		addAnimationClass(animationType, 'none', animationAxis);
	}

	const onChangeAnimationDelay = (animationDelay) => {
		setAnimationDelay(animationDelay);
		updateDelayClass(animationDelay);
	}

	const onChangeScroll = (scrollEnabled) => {
		setScrollEnabled(scrollEnabled);
		updateScrollClass(scrollEnabled);
	}

	const onChangeRepeatScroll = (repeatScroll) => {
		setRepeatScroll(repeatScroll);
		updateRepeatScrollClass(repeatScroll);
	}

	const onChangeScrollStartHidden = (scrollStartHidden) => {
		setScrollStartHidden(scrollStartHidden);
		updateScrollStartHiddenClass(scrollStartHidden);
	}

	const onChangeScrollOffset = (scrollOffset) => {
		setScrollOffset(scrollOffset);
		updateScrollOffsetClass(scrollOffset);
	}

	const onChangeScrollThreshold = (scrollThreshold) => {
		setScrollThreshold(scrollThreshold);
		updateScrollThresholdClass(scrollThreshold);
	}


	/************************ STATE CONTROLS ************************/

	// Animation
	const [animationDelay, setAnimationDelay] = useState(getInitialAnimationDelay(props.classes));
	const [animationDirection, setAnimationDirection] = useState(getInitialAnimationDirection(props.classes));
	const [animationAxis, setAnimationAxis] = useState(getInitialAnimationAxis(props.classes));
	const [animationType, setAnimationType] = useState(getInitialAnimationType(props.classes, animationDirection));

	// Scroll
	const [scrollEnabled, setScrollEnabled] = useState(getInitialScroll(props.classes));
	const [repeatScroll, setRepeatScroll] = useState(getInitialRepeatScroll(props.classes));
	const [scrollStartHidden, setScrollStartHidden] = useState(getInitialScrollHidden(props.classes));
	const [scrollOffset, setScrollOffset] = useState(getInitialScrollOffset(props.classes));
	const [scrollThreshold, setScrollThreshold] = useState(getInitialScrollThreshold(props.classes));


	/************************ RENDER ************************/

	return (
		<>
			<PanelBody title="Animation Options" initialOpen={false}>
				<PanelRow>
					<fieldset>
						<SelectControl
							label="Animation"
							value={ animationType }
							onChange={onChangeAnimationType}
							options={animationOptions}
						/>
						{ !checkDirectionDisabled(animationType) &&
						<SelectControl
							label="Direction"
							value={ animationDirection }
							onChange={onChangeAnimationDirection}
							options={ animationDirectionOptions }
						/>
						}
						{ checkAxisEnabled(animationType) &&
						<SelectControl
							label="Axis"
							value={ animationAxis }
							onChange={onChangeAnimationAxis}
							options={ animationAxisOptions }
						/>
						}
						<SelectControl
							label="Delay"
							value={ animationDelay }
							onChange={onChangeAnimationDelay}
							options={ animationDelayOptions }
						/>
					</fieldset>
				</PanelRow>
			</PanelBody>
			<PanelBody title="Scroll Options" initialOpen={false}>
				<PanelRow>
					<fieldset>
						<ToggleControl
							label="Scroll Enabled"
							checked={scrollEnabled}
							onChange={onChangeScroll}
						/>
						{scrollEnabled &&
						<ToggleControl
							label="Repeat Scroll"
							checked={repeatScroll}
							onChange={onChangeRepeatScroll}
							help="Repeat animation every time the element becomes visible in the viewport."
						/>
						}
						{scrollEnabled &&
						<ToggleControl
							label="Start Hidden"
							checked={scrollStartHidden}
							onChange={onChangeScrollStartHidden}
						/>
						}
						{scrollEnabled && 
						<RangeControl
							label="Scroll Offset"
							value={scrollOffset}
							onChange={onChangeScrollOffset}
							min={-1000}
							max={1000}
							help="Offset from bottom of viewport in pixels. Negative numbers will hide content until further scrolled into view."
						/>}
						{scrollEnabled && 
						<RangeControl
							label="Scroll Threshold"
							value={scrollThreshold}
							onChange={onChangeScrollThreshold}
							min={1}
							max={100}
							help="Percentage of element height that must be visible before animation is triggered."
						/>}
					</fieldset>
				</PanelRow>
			</PanelBody>
		</>
	);

}

export default AnimationControls;