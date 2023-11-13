/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scss/frontend.scss":
/*!***********************************!*\
  !*** ./assets/scss/frontend.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./assets/js/frontend.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/frontend.scss */ "./assets/scss/frontend.scss");


// Scroll Animation Intersection Observer
jQuery(document).ready(function ($) {
  if (!$('body').hasClass('home')) return;
  /// Cleans up scroll-related classes on non-scrolling elements
  /// TODO: Maybe look at class generation in animation.js to prevent the need to do this?
  const cleanAnimatedElements = () => {
    $(".scroll__start-hidden:not(.scroll__enabled)").removeClass((index, className) => {
      return (className.match(/scroll__\S+/g) || []).join(" ");
    });
  };

  /// Removes an animation from an element
  const removeAnimationFromElement = element => {
    $(element).removeClass(function (index, className) {
      return (className.match(/animate__\S+/g) || []).join(" ");
    });
  };

  /// Starts an animation on an element immediately
  const startAnimationImmediatelyOnElement = (element, animationData, lifecycle) => {
    removeAnimationFromElement(element);
    $(element).addClass(animationData);
    $(element).attr("data-animation-state", lifecycle);
  };

  /// Pulls animation data out of classes into data attributes
  const prepareElement = element => {
    let animate_classes = [];
    const classes = $(element).attr("class").split(/\s+/);
    const data = {
      entrance: {
        rootMargin: "0px",
        threshold: 1
      }
    };
    let scrollHidden = false;

    // Loop over each class, trying to extract animation related data
    classes.forEach(c => {
      if (c.startsWith("animate__")) {
        animate_classes.push(c);
      } else if (c.startsWith("scroll__offset__")) {
        data.entrance.rootMargin = `0px 0px ${c.replace("scroll__offset__", "")}px 0px`;
      } else if (c.startsWith("scroll__threshold__")) {
        const threshold_val = c.replace("scroll__threshold__", "");
        data.entrance.threshold = parseFloat(threshold_val).toFixed(2);
      } else if (c.startsWith("scroll__start-hidden")) {
        scrollHidden = true;
      }
    });

    // Set up more attributes...
    $(element).attr("data-animation-entrance", animate_classes.join(" "));
    $(element).attr("data-animation-state", "hidden");
    $(element).attr("data-animation-start-hidden", scrollHidden ? "true" : "false");

    // Remove animation classes from element...
    $(element).removeClass([...animate_classes, "scroll__offset__", "scroll__threshold__"].join(" "));
    return data;
  };

  // Observer triggers
  // ------------------------------------------------------
  const onEntrance = element => {
    // Is this element already animating?
    if ($(element).attr("data-animation-state") != "hidden") return;
    startAnimationImmediatelyOnElement(element, $(element).attr("data-animation-entrance"), "entering");

    // Un-hide element
    if ($(element).attr("data-animation-start-hidden")) {
      $(element).removeClass("scroll__start-hidden");
    }
  };
  const onReset = element => {
    if ($(element).attr("data-animation-state") != "shown") return;
    removeAnimationFromElement(element);
    if ($(element).attr("data-animation-start-hidden") === "true") {
      $(element).addClass("scroll__start-hidden");
      $(element).removeAttr("data-animation-start-hidden");
    }
    $(element).attr("data-animation-state", "hidden");
  };
  const initScrollingElements = () => {
    cleanAnimatedElements();
    $(".scroll__enabled").each(function () {
      const data = prepareElement(this);

      // Sets up state transitions on end of animation
      $(this).on("animationend", event => {
        let animation_state = $(event.target).attr("data-animation-state");
        $(event.target).attr("data-animation-state", animation_state == "entering" ? "shown" : "hidden");
      });

      // Entrance Trigger
      new IntersectionObserver(ents => {
        ents.forEach(e => {
          if (e.isIntersecting) onEntrance(e.target);
        });
      }, data.entrance).observe(this);

      // Reset Trigger
      new IntersectionObserver(ents => {
        ents.forEach(e => {
          if (!e.isIntersecting && $(e.target).hasClass("scroll__repeat")) {
            onReset(e.target);
          }
        });
      }, {
        rootMargin: "0px",
        threshold: 0
      }).observe(this);
    });
  };
  initScrollingElements();

  /**
   * SITE-SPECIFIC CODE
   */

  // GLOBALS
  let percentage = 0;
  let totalHeight = $('.snap-slides__slide').length * $('.snap-slides').height();

  // DATA
  // TODO: potentially make ACF repeater field for this
  let moon = {
    class: 'moon',
    data: [{
      x: -20,
      y: -20,
      size: 1,
      rotate: 60
    }, {
      x: -10,
      y: 0,
      size: 1,
      rotate: 120
    }, {
      x: 75,
      y: 25,
      size: 3,
      rotate: 180
    }, {
      x: 78.35,
      y: 35.5,
      size: 0.18,
      rotate: 240
    }, {
      x: 100,
      y: 100,
      size: 1,
      rotate: 300
    }, {
      x: 110,
      y: 110,
      size: 1,
      rotate: 360
    }]
  };
  let earth = {
    class: 'earth',
    data: [{
      x: 50,
      y: 150,
      size: 20,
      brightness: 1,
      rotate: 0
    }, {
      x: 50,
      y: 170,
      size: 20,
      brightness: 0.75,
      rotate: 5
    }, {
      x: 50,
      y: 190,
      size: 20,
      brightness: 0.25,
      rotate: 10
    }, {
      x: 50,
      y: 200,
      size: 20,
      brightness: 0,
      rotate: 15
    }, {
      x: 50,
      y: 250
    }, {
      x: 250,
      y: 120
    }]
  };
  let trackedItems = [moon, earth];

  // FUNCTIONS
  const lerp = (a, b, p) => {
    return a + (b - a) * p;
  };
  const lerpValues = item => {
    // get which slides to lerp between
    let prev = Math.floor((item.data.length - 1) * percentage);
    let next = Math.min(Math.floor((item.data.length - 1) * percentage) + 1, item.data.length - 1);

    // get percentage elapsed relative to the two slides
    let slidePercentage = percentage * (item.data.length - 1) - prev;

    // get lerp values
    let x = lerp(item.data[prev].x, item.data[next].x, slidePercentage);
    let y = lerp(item.data[prev].y, item.data[next].y, slidePercentage);
    let size = item.data[prev].size !== undefined ? lerp(item.data[prev].size, item.data[next].size, slidePercentage) : 1;
    let rotate = item.data[prev].rotate !== undefined ? lerp(item.data[prev].rotate, item.data[next].rotate, slidePercentage) : 0;
    let brightness = item.data[prev].brightness !== undefined ? lerp(item.data[prev].brightness, item.data[next].brightness, slidePercentage) : 1;
    let opacity = item.data[prev].opacity !== undefined ? lerp(item.data[prev].opacity, item.data[next].opacity, slidePercentage) : 1;

    // translate lerp values to pixels
    // TODO: different browsers result in different height values
    let w = $(window).innerWidth();
    let c = $('.snap-slides__slide').innerWidth();
    let diff = (w - c) / 2;
    let x_coord = x / 100 * c + diff;
    let y_coord = y / 100 * $(window).innerHeight();
    $(`.${item.class}`).animate({
      top: y_coord,
      left: x_coord,
      opacity: opacity
    }, {
      duration: 5,
      step: function (now, fx) {
        $(this).css('filter', `brightness(${brightness})`);
        $(this).css('transform', `translate(-50%, -50%) scale(${size}) rotate(${rotate}deg)`);
      }
    });
  };
  const lerpMany = items => {
    console.log('running');
    totalHeight = $('.snap-slides__slide').length * $('.snap-slides').height();
    percentage = $('.snap-slides').scrollTop() / (totalHeight - $('.snap-slides').height());
    for (let i = 0; i < items.length; i++) {
      lerpValues(items[i]);
    }
  };

  // IMPLEMENTATION
  lerpMany(trackedItems);
  $('.moon').animate({
    opacity: 1
  }, 300);
  $('.earth').animate({
    opacity: 1
  }, 300);
  $('.snap-slides').on('scroll', function (e) {
    lerpMany(trackedItems);
    $('.star').each(function () {
      $(this).css('opacity', percentage * $(this).data('random'));
    });
  });

  // adjust grid column start values
  let col_count = 1;
  $('.snap-slides__slide').each(function () {
    if ($(this).hasClass('--horizontal-slide')) {
      col_count++;
    }
    $(this).css('grid-column-start', col_count);
  });
  $(window).resize(function () {
    lerpMany(trackedItems);
  });

  // generate stars
  for (let i = 0; i < 1000; i++) {
    $('.stars').append(`<div class="star" style="top: ${$(window).innerHeight() * Math.random()}px; left: ${$(window).innerWidth() * Math.random()}px; transform: scale(${Math.random() * 2}); background-color: rgb(${255 - Math.random() * 20}, ${255 - Math.random() * 20}, ${255 - Math.random() * 20});" data-random="${Math.random() * 0.25 + 0.75}"></div>`);
  }
  let active = 0;
  let scroll = true;
  let waiting = false;
  let scrollingTimer;
  $('body').on('mousewheel', function (e) {
    if (!scroll || waiting) return;
    clearTimeout($.data(this, 'timer'));
    $.data(this, 'timer', setTimeout(function () {
      waiting = false;
    }, 1500));
    scroll = false;
    let dir = e.originalEvent.deltaY > 0;
    active = dir ? Math.min(active + 1, $('.slides__slide').length - 1) : Math.max(active - 1, 0);
    let top = $(window).innerHeight() * active;
    $('.slides').animate({
      scrollTop: top
    }, {
      duration: 500,
      step: function (now, fx) {
        if (now == top) {
          scroll = true;
          waiting = true;
        }
      }
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map