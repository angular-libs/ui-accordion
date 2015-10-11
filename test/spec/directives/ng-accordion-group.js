'use strict';

describe('Directive: ngAccordionGroup', function () {

  // load the directive's module
  beforeEach(module('uiAccordion'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-accordion-group></ng-accordion-group>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngAccordionGroup directive');
  }));
});
