'use strict';

describe('Service: accordionGroup', function () {

  // load the service's module
  beforeEach(module('uiAccordion'));

  // instantiate service
  var accordionGroup;
  beforeEach(inject(function (_accordionGroup_) {
    accordionGroup = _accordionGroup_;
  }));

  it('should do something', function () {
    expect(!!accordionGroup).toBe(true);
  });

});
