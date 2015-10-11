'use strict';

/**
 * @ngdoc function
 * @name uiAccordion.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiAccordion
 */
angular.module('uiAccordion')
  .controller('MainCtrl', function ($scope) {
  $scope.simpleAccordionOptions={
    closeOthers:false
  }
  $scope.accordionGroupOptions1={
    open:true
  }
  $scope.accordionGroupOptions2={
    open:false
  }
  $scope.accordionGroupOptions3={
    open:true
  }

    });
