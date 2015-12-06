'use strict';

describe('Service: accordionGroup', function () {

  // load the service's module
  beforeEach(module('uiAccordion'));

  // instantiate service
  var accordionGroup;
  beforeEach(inject(function (_accordionGroup_) {
    accordionGroup = _accordionGroup_;
  }));

  it('should create accordion group object', function () {
    var grp=accordionGroup.createAccordionGrp();
    expect(grp.constructor.name).toBe("AccordionGroup");
  });

});
