'use strict';

describe('Service: objectUtil', function () {

  // load the service's module
  beforeEach(module('uiAccordion'));

  // instantiate service
  var objectUtil;
  beforeEach(inject(function (_objectUtil_) {
    objectUtil = _objectUtil_;
  }));

  it('should read obj property', function () {
    var obj={a:10};
    var val=objectUtil.fetchFromObject(obj,'a');
    expect(val).toBe(obj.a);
  });
  it('should read obj nested property', function () {
    var obj={a:{b:10}};
    var val=objectUtil.fetchFromObject(obj,'a.b');
    expect(val).toBe(obj.a.b);
  });
  it('should return undefined', function () {
    //var obj={a:{b:10}};
    var val=objectUtil.fetchFromObject(undefined,'a.b');
    expect(val).toBeUndefined();
  });
  it('should return undefined', function () {
    var obj={a:{b:10}};
    var val=objectUtil.fetchFromObject(obj);
    expect(val).toBeUndefined();
  });
});
