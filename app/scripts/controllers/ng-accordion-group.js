'use strict';

/**
 * @ngdoc function
 * @name uiAccordion.controller:NgAccordionGroupCtrl
 * @description
 * # NgAccordionGroupCtrl
 * Controller of the uiAccordion
 */
angular.module('uiAccordion')
  .controller('NgAccordionGroupCtrl', function ($q) {
      var headerDef, bodyDef;
      headerDef = $q.defer();
      bodyDef = $q.defer();
      this.setHeaderElement = function (element) {
          headerDef.resolve(element);
      };
      this.getHeaderElement = function () {
          return headerDef.promise;
      };
      this.setBodyElement = function (element) {
          bodyDef.resolve(element);
      };
      this.getBodyElement = function () {
          return bodyDef.promise;
      };
  });
