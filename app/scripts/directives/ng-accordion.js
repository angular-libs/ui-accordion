'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordion
 * @description
 * # ngAccordion
 */
angular.module('uiAccordion')
  .directive('ngAccordion', function (objectUtil) {
      return {
          restrict: 'A',
          link: function (scope, element, attrs, controller) {
              var options = objectUtil.fetchFromObject(scope, attrs.options);
              if (options) {
                  angular.extend(controller.accordion.options, options);
              }
              scope.$watchCollection(attrs.options, function (n, o) {
                  if (n && n !== o) {
                      angular.extend(controller.accordion.options, n);
                  }
              });
          },
          controller: 'NgAccordionCtrl'
      };
  });
