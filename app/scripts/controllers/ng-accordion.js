'use strict';

/**
 * @ngdoc function
 * @name uiAccordion.controller:NgAccordionCtrl
 * @description
 * # NgAccordionCtrl
 * Controller of the uiAccordion
 */
angular.module('uiAccordion')
  .controller('NgAccordionCtrl', function (accordion) {
      this.accordion = accordion.createAccordion();
  });
