'use strict';

/**
 * @ngdoc service
 * @name uiAccordion.accordionGroup
 * @description
 * # accordionGroup
 * Service in the uiAccordion.
 */
angular.module('uiAccordion')
  .service('accordionGroup', function ($q,$log,$timeout) {
    function AccordionGroup() {
    }
    function noopPromise() {
      var def = $q.defer();
      $timeout(function(){
        def.resolve('');
      });
      return def.promise;
    }

    AccordionGroup.prototype.$animate = function (animationFn, action, callback) {
      var _self = this;
      $q.when(_self.options[action]()).then(function () {
        _self.options[callback].call(_self, animationFn);
      }, errorlogger);
    };
    function errorlogger(error) {
      $log.error(error);
    }
    return {
      createAccordionGrp:function(){
        return new AccordionGroup();
      },
      defaultAccordionGroupOptions:function () {
        return {
          open: false,
          disabled: false,
          beforeOpen: noopPromise,
          beforeHide: noopPromise,
          animateOpen: function (animationFn) {
            if(this.body){
              this.body[animationFn]('slow');
            }
          },
          animateClose: function (animationFn) {
            this.body[animationFn]();
          }
        };
      }
    };
  });
