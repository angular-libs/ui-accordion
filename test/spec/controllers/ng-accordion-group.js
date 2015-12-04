'use strict';

describe('Controller: NgAccordionGroupCtrl', function () {

  // load the controller's module
  beforeEach(module('uiAccordion'));

  var NgAccordionGroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgAccordionGroupCtrl = $controller('NgAccordionGroupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
    expect(NgAccordionGroupCtrl.awesomeThings.length).toBe(3);
  });
});
