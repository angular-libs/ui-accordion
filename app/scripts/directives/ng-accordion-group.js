'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordionGroup
 * @description
 * # ngAccordionGroup
 */
angular.module('uiAccordion')
  .directive('ngAccordionGroup', function (accordionGroup,$q,$timeout) {
      return {
          require: ['^ngAccordion', 'ngAccordionGroup'],
          restrict: 'EA',
          controller: 'NgAccordionGroupCtrl',
          scope: {
              options: '='
          },
          link: function (scope, element, attrs, controllers) {
              var accordionCtrl, controller, accordion, _accordionGroup;
              controller = controllers[1];
              accordionCtrl = controllers[0];
              accordion = accordionCtrl.accordion;
              _accordionGroup = accordionGroup.createAccordionGrp();
              if (!scope.options) {
                  scope.options = accordionGroup.defaultAccordionGroupOptions();
              }
              _accordionGroup.options = angular.extend(accordionGroup.defaultAccordionGroupOptions(), scope.options);

              scope.$watchCollection('options', function (n) {
                  _accordionGroup.options = angular.extend(accordionGroup.defaultAccordionGroupOptions(), n);
                  if (n && !n.disabled) {
                      accordion.applyState(_accordionGroup);
                  }
              }, true);

              $q.all([controller.getHeaderElement(), controller.getBodyElement()]).then(function (results) {
                  _accordionGroup.header = results[0];
                  _accordionGroup.body = results[1];
                  if (scope.options.open) {
                      _accordionGroup.$animate('show', 'beforeOpen', 'animateOpen');
                  } else {
                      _accordionGroup.$animate('hide', 'beforeHide', 'animateClose');
                  }
                  _accordionGroup.header.on('click', function () {
                      if (!scope.options.disabled) {
                          scope.options.open = !scope.options.open;
                      }
                      $timeout(function () {
                          scope.$apply();
                      });
                  });
                  accordion.addGroup(_accordionGroup);
              });

          }
      };
  });
