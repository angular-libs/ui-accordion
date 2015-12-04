'use strict';

describe('Controller: NgAccordionCtrl', function () {

  // load the controller's module
  beforeEach(module('uiAccordion'));

  var NgAccordionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgAccordionCtrl = $controller('NgAccordionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
    expect(NgAccordionCtrl.awesomeThings.length).toBe(3);
  });
});
