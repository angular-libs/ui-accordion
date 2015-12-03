'use strict';

/**
 * @ngdoc service
 * @name uiAccordion.objectUtil
 * @description
 * # objectUtil
 * Service in the uiAccordion.
 */
angular.module('uiAccordion')
  .service('objectUtil', function () {
     this.fetchFromObject=function fetchFromObject(obj, prop) {
      if (typeof obj === 'undefined' || typeof prop === 'undefined') {
        return;
      }
      var _index = prop.indexOf('.');
      if (_index > -1) {
        return fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
      }
      return obj[prop];
    };
  });
