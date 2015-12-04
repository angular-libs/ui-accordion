'use strict';

describe('Directive: ngAccordionBody', function () {

  // load the directive's module
  beforeEach(module('uiAccordion'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  xit('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-accordion-body></ng-accordion-body>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngAccordionBody directive');
  }));
});
