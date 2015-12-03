'use strict';

/**
 * @ngdoc service
 * @name uiAccordion.accordion
 * @description
 * # accordion
 * Service in the uiAccordion.
 */
angular.module('uiAccordion')
  .service('accordion', function () {
    function Accordion() {
      this.groups = [];
      this.options = {
        closeOthers: true
      };
    }
    Accordion.prototype.addGroup = function (group) {
      this.groups.push(group);
    };
    Accordion.prototype.getGroups = function () {
      return this.groups;
    };
    Accordion.prototype.applyState = function (group) {
      if (group) {
        if (group.options.open) {
          group.$animate('slideDown', 'beforeOpen', 'animateOpen');
          this.closeOthers(group);
        } else {
          group.$animate('slideUp', 'beforeHide', 'animateClose');
        }
      }

    };
    Accordion.prototype.closeOthers = function (group) {
      if (this.options.closeOthers) {
        for (var a = 0; a < this.groups.length; a++) {
          if (group === this.groups[a]) {

          } else {
            this.groups[a].hide('slideUp', 'beforeHide', 'animateClose');
          }
        }
      }
    };

      return {
          createAccordion:function(){
              return new Accordion();
          }
      };
  });
