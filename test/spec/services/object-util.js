'use strict';

describe('Service: objectUtil', function () {

  // load the service's module
  beforeEach(module('uiAccordion'));

  // instantiate service
  var objectUtil;
  beforeEach(inject(function (_objectUtil_) {
    objectUtil = _objectUtil_;
  }));

  it('should do something', function () {
    expect(!!objectUtil).toBe(true);
  });

});
