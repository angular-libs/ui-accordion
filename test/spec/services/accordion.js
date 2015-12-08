'use strict';

describe('Service: accordion', function () {

  // load the service's module
  beforeEach(module('uiAccordion'));

  // instantiate service
  var accordionService, accordionGroupService;
  beforeEach(inject(function (_accordion_, _accordionGroup_) {
    accordionService = _accordion_;
    accordionGroupService = _accordionGroup_;
  }));

  it('should create accordion  object', function () {
    var accordion = accordionService.createAccordion();
    expect(accordion.constructor.name).toBe("Accordion");
    expect(accordion.groups.length).toBe(0);
    expect(accordion.options.closeOthers).toBe(true);
  });
  it('should add accordion  group', function () {
    var accordion = accordionService.createAccordion();
    var grp = accordionGroupService.createAccordionGrp();
    accordion.addGroup(grp);

    var grps = accordion.getGroups();
    expect(grps.length).toBe(1);
    expect(grps[0]).toBe(grp);

  });
  it('should close other groups', function () {
    var accordion = accordionService.createAccordion();
    var grp1 = accordionGroupService.createAccordionGrp();
    grp1.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp1);
    var grp2 = accordionGroupService.createAccordionGrp();
    grp2.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp2);
    var grp3 = accordionGroupService.createAccordionGrp();
    grp3.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp3);
    spyOn(grp1, '$animate');
    spyOn(grp3, '$animate');
    spyOn(grp2, '$animate');
    accordion.closeOthers(grp1);

    expect(grp2.$animate).toHaveBeenCalledWith('slideUp', 'beforeHide', 'animateClose');
    expect(grp3.$animate).toHaveBeenCalledWith('slideUp', 'beforeHide', 'animateClose');
    expect(grp1.$animate).not.toHaveBeenCalled();

  });
  it('should not close other groups', function () {
    var accordion = accordionService.createAccordion();
    accordion.options.closeOthers = false;
    var grp1 = accordionGroupService.createAccordionGrp();
    grp1.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp1);
    var grp2 = accordionGroupService.createAccordionGrp();
    grp2.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp2);
    var grp3 = accordionGroupService.createAccordionGrp();
    grp3.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp3);
    spyOn(grp1, '$animate');
    spyOn(grp3, '$animate');
    spyOn(grp2, '$animate');
    accordion.closeOthers(grp1);

    expect(grp2.$animate).not.toHaveBeenCalled();
    expect(grp3.$animate).not.toHaveBeenCalled();
    expect(grp1.$animate).not.toHaveBeenCalled();

  });
  it('should apply state', function () {
    var accordion = accordionService.createAccordion();
    var grp1 = accordionGroupService.createAccordionGrp();
    grp1.options = accordionGroupService.defaultAccordionGroupOptions();
    grp1.options.open = true;
    accordion.addGroup(grp1);
    var grp2 = accordionGroupService.createAccordionGrp();
    grp2.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp2);
    var grp3 = accordionGroupService.createAccordionGrp();
    grp3.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp3);
    spyOn(grp1, '$animate');
    spyOn(grp3, '$animate');
    spyOn(grp2, '$animate');
    accordion.applyState(grp1);

    expect(grp1.$animate).toHaveBeenCalledWith('slideDown', 'beforeOpen', 'animateOpen');
    expect(grp2.$animate).toHaveBeenCalledWith('slideUp', 'beforeHide', 'animateClose');
    expect(grp3.$animate).toHaveBeenCalledWith('slideUp', 'beforeHide', 'animateClose');
  });
  it('should not apply state', function () {
    var accordion = accordionService.createAccordion();
    var grp1 = accordionGroupService.createAccordionGrp();
    grp1.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp1);

    var grp2 = accordionGroupService.createAccordionGrp();
    grp2.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp2);

    var grp3 = accordionGroupService.createAccordionGrp();
    grp3.options = accordionGroupService.defaultAccordionGroupOptions();
    accordion.addGroup(grp3);

    spyOn(grp1, '$animate');
    spyOn(grp3, '$animate');
    spyOn(grp2, '$animate');

    accordion.applyState();
    accordion.applyState(grp1);

    expect(grp1.$animate).not.toHaveBeenCalledWith('slideDown', 'beforeOpen', 'animateOpen');
    expect(grp2.$animate).not.toHaveBeenCalledWith('slideUp', 'beforeHide', 'animateClose');
    expect(grp3.$animate).not.toHaveBeenCalledWith('slideUp', 'beforeHide', 'animateClose');
  });
});
