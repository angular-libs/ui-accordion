'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordionBody
 * @description
 * # ngAccordionBody
 */
angular.module('uiAccordion')
    .directive('ngAccordionBody', function() {
      return {
        require:'^ngAccordionGroup',
        restrict: 'EA',
        link: function(scope, element, attrs, accordionCtrl) {
          accordionCtrl.setBodyElement(element);
        }
      };
    });