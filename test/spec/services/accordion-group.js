'use strict';

describe('Service: accordionGroup', function () {

  // load the service's module
  beforeEach(module('uiAccordion'));

  // instantiate service
    var accordionGroup, _q, $rootScope;
    beforeEach(inject(function (_accordionGroup_, $q, _$rootScope_) {
    accordionGroup = _accordionGroup_;
        _q = $q;
        $rootScope = _$rootScope_;
  }));

  it('should create accordion group object', function () {
    var grp=accordionGroup.createAccordionGrp();
    expect(grp.constructor.name).toBe("AccordionGroup");
  });
    it('should create default accordion group options', function () {
        var opts = accordionGroup.defaultAccordionGroupOptions();
        var keys = Object.keys(opts);
        expect(keys.length).toBe(6);
        expect(opts.open).toBe(false);
        expect(opts.disabled).toBe(false);
        expect(typeof opts.beforeOpen).toBe('function');
        expect(typeof opts.beforeHide).toBe('function');
        expect(typeof opts.animateOpen).toBe('function');
        expect(typeof opts.animateClose).toBe('function');
    });
    it('should animate', function () {
        var grp = accordionGroup.createAccordionGrp();
        var opts = accordionGroup.defaultAccordionGroupOptions();

        grp.options = opts;
        spyOn(opts, 'animateOpen');
        function animateFn() {
        }

        grp.$animate(animateFn, 'beforeOpen', 'animateOpen');
        $rootScope.$apply();
        expect(opts.animateOpen).toHaveBeenCalledWith(animateFn);

    });
    it('should not animate', function () {
        var grp = accordionGroup.createAccordionGrp();
        var opts = accordionGroup.defaultAccordionGroupOptions();

        opts.beforeHide = function () {
            var def = _q.defer();
            def.reject();
            return def.promise;
        };
        grp.options = opts;
        spyOn(opts, 'animateClose');
        function animateFn() {
        }

        grp.$animate(animateFn, 'beforeHide', 'animateClose');
        $rootScope.$apply();
        expect(opts.animateClose).not.toHaveBeenCalled();
    });
    it('should hide div', function () {
        var grp = accordionGroup.createAccordionGrp();
        var opts = accordionGroup.defaultAccordionGroupOptions();
        grp.body = angular.element('<div>testing</div>');
        angular.element(document.body).append(grp.body);


        grp.options = opts;

        grp.$animate('hide', 'beforeHide', 'animateClose');
        $rootScope.$apply();
        expect(grp.body.is(':visible')).toBe(false);


        grp.$animate('show', 'beforeOpen', 'animateOpen');
        $rootScope.$apply();
        expect(grp.body.is(':visible')).toBe(true);
    });
});
