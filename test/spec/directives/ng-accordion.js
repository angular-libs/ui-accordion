'use strict';

describe('Directive: ngAccordion', function () {

  // load the directive's module
  beforeEach(module('uiAccordion'));

    var compile, timeout, scope;

    beforeEach(inject(function ($rootScope, $compile, $timeout) {
    scope = $rootScope.$new();
        compile = $compile;
        timeout = $timeout;
  }));
    afterEach(function () {
        document.body.innerHTML = '';
        scope = null;
    });
    it('should work as simple accordion', function () {
        var el = angular.element('<div ng-accordion>' +
            '<div ng-accordion-group>' +
            '<div ng-accordion-heading>Heading 1</div>' +
            '<div ng-accordion-body>Body 1</div>' +
            '</div>' +
            '<div ng-accordion-group>' +
            '<div ng-accordion-heading>Heading 2</div>' +
            '<div ng-accordion-body>Body 2</div>' +
            '</div>' +
            '<div ng-accordion-group>' +
            '<div ng-accordion-heading>Heading 3</div>' +
            '<div ng-accordion-body>Body 3</div>' +
            '</div>' +
            '</div>');
        angular.element(document.body).append(el);
        compile(el)(scope);
        timeout.flush();

        var grps = angular.element(document.body).find('[ng-accordion-group]');
        grps.eq(0).find('[ng-accordion-heading]').click();
        scope.$digest();
        expect(grps.eq(0).find('[ng-accordion-body]').is(':visible')).toBe(true);
        expect(grps.eq(1).find('[ng-accordion-body]').is(':visible')).toBe(false);
        expect(grps.eq(2).find('[ng-accordion-body]').is(':visible')).toBe(false);
    });
    it('should work with accordion-options', function () {
        var el = angular.element('<div ng-accordion >' +
            '<div ng-accordion-group options="accordionOptionGrp1">' +
            '<div ng-accordion-heading>Heading 1</div>' +
            '<div ng-accordion-body>Body 1</div>' +
            '</div>' +
            '<div ng-accordion-group>' +
            '<div ng-accordion-heading>Heading 2</div>' +
            '<div ng-accordion-body>Body 2</div>' +
            '</div>' +
            '<div ng-accordion-group>' +
            '<div ng-accordion-heading>Heading 3</div>' +
            '<div ng-accordion-body>Body 3</div>' +
            '</div>' +
            '</div>');
        angular.element(document.body).append(el);
        scope.accordionOptionGrp1 = {open: true, disabled: true};


        compile(el)(scope);
        timeout.flush();

        var grps = angular.element(document.body).find('[ng-accordion-group]');
        expect(grps.eq(0).find('[ng-accordion-body]').is(':visible')).toBe(true);
        expect(grps.eq(1).find('[ng-accordion-body]').is(':visible')).toBe(false);
        expect(grps.eq(2).find('[ng-accordion-body]').is(':visible')).toBe(false);

        grps.eq(0).find('[ng-accordion-heading]').triggerHandler('click'); //expending first
        scope.$digest();
        expect(grps.eq(0).find('[ng-accordion-body]').is(':visible')).toBe(true);
        expect(grps.eq(1).find('[ng-accordion-body]').is(':visible')).toBe(false);
        expect(grps.eq(2).find('[ng-accordion-body]').is(':visible')).toBe(false);

    });
    it('should work with accordion-options', function () {
        var el = angular.element('<div ng-accordion options="accordionOption">' +
            '<div ng-accordion-group>' +
            '<div ng-accordion-heading>Heading 1</div>' +
            '<div ng-accordion-body>Body 1</div>' +
            '</div>' +
            '<div ng-accordion-group>' +
            '<div ng-accordion-heading>Heading 2</div>' +
            '<div ng-accordion-body>Body 2</div>' +
            '</div>' +
            '<div ng-accordion-group>' +
            '<div ng-accordion-heading>Heading 3</div>' +
            '<div ng-accordion-body>Body 3</div>' +
            '</div>' +
            '</div>');
        angular.element(document.body).append(el);
        scope.accordionOption = {closeOthers: false};
        compile(el)(scope);
        timeout.flush();

        var grps = angular.element(document.body).find('[ng-accordion-group]');
        expect(grps.eq(0).find('[ng-accordion-body]').is(':visible')).toBe(false);
        expect(grps.eq(1).find('[ng-accordion-body]').is(':visible')).toBe(false);
        expect(grps.eq(2).find('[ng-accordion-body]').is(':visible')).toBe(false);

        grps.eq(0).find('[ng-accordion-heading]').triggerHandler('click'); //expending first
        scope.$digest();
        expect(grps.eq(0).find('[ng-accordion-body]').is(':visible')).toBe(true);
        expect(grps.eq(1).find('[ng-accordion-body]').is(':visible')).toBe(false);
        expect(grps.eq(2).find('[ng-accordion-body]').is(':visible')).toBe(false);

        grps.eq(1).find('[ng-accordion-heading]').triggerHandler('click');//expending second
        scope.$digest();
        expect(grps.eq(0).find('[ng-accordion-body]').is(':visible')).toBe(true);
        expect(grps.eq(1).find('[ng-accordion-body]').is(':visible')).toBe(true);
        expect(grps.eq(2).find('[ng-accordion-body]').is(':visible')).toBe(false);

        scope.accordionOption.closeOthers = true;
        scope.$digest();

        grps.eq(2).find('[ng-accordion-heading]').triggerHandler('click');//expending third
        timeout.flush();
        scope.$digest();
        //TODO
        //expect(grps.eq(0).find('[ng-accordion-body]').is(':visible')).toBe(false);
        //expect(grps.eq(1).find('[ng-accordion-body]').is(':visible')).toBe(false);
        //expect(grps.eq(2).find('[ng-accordion-body]').is(':visible')).toBe(true);

    });
});
