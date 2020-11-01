/*! lozad.js - v1.16.0 - 2020-09-10
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.lozad = factory());
}(this, (function () { 'use strict';

  /**
   * Detect IE browser
   * @const {boolean}
   * @private
   */
  var isIE = typeof document !== 'undefined' && document.documentMode;

  /**
   *
   * @param {string} type
   *
   */
  var support = function support(type) {
    return window && window[type];
  };

  var validAttribute = ['data-iesrc', 'data-alt', 'data-src', 'data-srcset', 'data-background-image', 'data-toggle-class'];

  var defaultConfig = {
    rootMargin: '0px',
    threshold: 0,
    enableAutoReload: false,
    load: function load(element) {
      if (element.getAttribute('data-src')) {
        element.src = element.getAttribute('data-src');
      }
    },
    loaded: function loaded() {}
  };

  function markAsLoaded(element) {
    element.setAttribute('data-loaded', true);
  }

  function markAsNotloaded(element) {
    element.setAttribute('data-loaded', false);
  }

  function preLoad(element) {
    if (element.getAttribute('data-placeholder-background')) {
      element.style.background = element.getAttribute('data-placeholder-background');
    }
  }

  var isLoaded = function isLoaded(element) {
    return element.getAttribute('data-loaded') === 'true';
  };

  var onIntersection = function onIntersection(load, loaded, loadedElems) {
    return function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0 || entry.isIntersecting) {
          loadedElems[entry.target] = true;
          observer.unobserve(entry.target);

          if (!isLoaded(entry.target)) {
            load(entry.target);
            markAsLoaded(entry.target);
            loaded(entry.target);
          }
        } else {
          delete loadedElems[entry.target];
        }
      });
    };
  };

  var onMutation = function onMutation(load, loadedElems) {
    return function (entries) {
      entries.forEach(function (entry) {
        if (isLoaded(entry.target) && entry.type === 'attributes' && validAttribute.indexOf(entry.attributeName) > -1) {
          markAsNotloaded(entry.target);
        }
      });
    };
  };

  var getElements = function getElements(selector) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    if (selector instanceof Element) {
      return [selector];
    }

    if (selector instanceof NodeList) {
      return selector;
    }

    return root.querySelectorAll(selector);
  };

  function lozad () {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.lozad';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _Object$assign = Object.assign({}, defaultConfig, options),
        root = _Object$assign.root,
        rootMargin = _Object$assign.rootMargin,
        threshold = _Object$assign.threshold,
        enableAutoReload = _Object$assign.enableAutoReload,
        load = _Object$assign.load,
        loaded = _Object$assign.loaded;

    var observer = void 0;
    var mutationObserver = void 0;
    var loadedElems = {};
    if (support('IntersectionObserver')) {
      observer = new IntersectionObserver(onIntersection(load, loaded, loadedElems), {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold
      });
    }

    if (support('MutationObserver') && enableAutoReload) {
      mutationObserver = new MutationObserver(onMutation(load, loaded, loadedElems));
    }

    var elements = getElements(selector, root);
    for (var i = 0; i < elements.length; i++) {
      preLoad(elements[i]);
    }

    return {
      observe: function observe() {
        var elements = getElements(selector, root);

        for (var _i = 0; _i < elements.length; _i++) {
          if (isLoaded(elements[_i])) {
            continue;
          }

          if (observer) {
            if (mutationObserver && enableAutoReload) {
              mutationObserver.observe(elements[_i], { subtree: true, attributes: true, attributeFilter: validAttribute });
            }

            observer.observe(elements[_i]);
            continue;
          }

          load(elements[_i]);
          markAsLoaded(elements[_i]);
          loaded(elements[_i]);
        }
      },
      observer: observer,
      mutationObserver: mutationObserver
    };
  }

  return lozad;

})));
