'use strict';
(function(){
  angular.module('uiAccordion')
  .directive('ngAccordion',function ($q,$log) {
    return {
      restrict: 'EA',
      controller: function () {
        var groups = [];
        this.addGroup = function(group) {
          groups.push(group);
        }
        this.getGroups=function(){
          return groups;
        }
        this.toggleState=function(group){
          for(var a=0;a<groups.length;a++){
            if(group==groups[a]){
              if(!group.open){
                group.beforeOpen().then(function(){
                  group.body.show();
                  group.open=!group.open;
                },function(error){
                  $log.error(error);
                })
              }else{
                group.beforeHide().then(function(){
                  group.open=false;
                  group.body.hide();
                },function(error){
                  $log.error(error);
                })
              }
            }else{
              (function(group){
                group.beforeHide().then(function(){
                  group.open=false;
                  group.body.hide();
                },function(error){
                  $log.error(error);
                })
              })(groups[a]);
            }
          }
        }
      }
    };
  })
  .directive('ngAccordionGroup', function($q) {
    function defaultOptions(){
      return {
        beforeOpen:function(){
          var def=$q.defer();
          def.resolve();
          return def.promise;
        },
        beforeHide:function(){
          var def=$q.defer();
          def.resolve();
          return def.promise;
        },
        open:false
      }
    }
    return {
      require:['^ngAccordion','ngAccordionGroup'],
      restrict:'EA',
      controller:function(){
        var headerEl;
        var bodyEl;
        var headerDef=$q.defer();
        var bodyDef=$q.defer();
        this.setHeaderElement=function(element){
          headerDef.resolve(element);
        }
        this.getHeaderElement=function(){
          return headerDef.promise;
        }
        this.setBodyElement=function(element){
          bodyDef.resolve(element);
        }
        this.getBodyElement=function(){
          return bodyDef.promise;
        }
      },
      link: function(scope, element, attrs, controllers) {
        var controller=controllers[1];
        var accordionCtrl=controllers[0];

        var accordion=angular.extend(defaultOptions(),scope.$eval(attrs.options))
        $q.all([controller.getHeaderElement(),controller.getBodyElement()]).then(function(results){
          accordion.header=results[0];
          accordion.body=results[1];
          accordion.body.hide();
          accordion.header.on('click',function(){
            accordionCtrl.toggleState(accordion);
          });
          accordionCtrl.addGroup(accordion);
        })

      }
    };
  })
  .directive('ngAccordionHeading', function() {
    return {
      require:'^ngAccordionGroup',
      restrict: 'EA',
      link: function(scope, element, attrs, accordionCtrl) {
        accordionCtrl.setHeaderElement(element);
      }
    };
  })
  .directive('ngAccordionBody', function() {
    return {
      require:'^ngAccordionGroup',
      restrict: 'EA',
      link: function(scope, element, attrs, accordionCtrl) {
        accordionCtrl.setBodyElement(element);
      }
    };
  })
})()

