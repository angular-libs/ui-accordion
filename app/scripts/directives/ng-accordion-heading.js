'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordionHeading
 * @description
 * # ngAccordionHeading
 */
angular.module('uiAccordion')
  .directive('ngAccordionHeading', function () {
      return {
          require: '^ngAccordionGroup',
          restrict: 'EA',
          link: function (scope, element, attrs, accordionCtrl) {
              accordionCtrl.setHeaderElement(element);
          }
      };
  });
