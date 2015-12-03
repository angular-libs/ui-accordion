'use strict';

describe('Service: accordion', function () {

  // load the service's module
  beforeEach(module('uiAccordion'));

  // instantiate service
  var accordion;
  beforeEach(inject(function (_accordion_) {
    accordion = _accordion_;
  }));

  it('should do something', function () {
    expect(!!accordion).toBe(true);
  });

});
