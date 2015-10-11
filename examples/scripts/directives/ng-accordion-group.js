'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordionGroup
 * @description
 * # ngAccordionGroup
 */
function getService(name){
  return angular.injector(['ng']).invoke([name,function(service) {
    return service;
  }]);
}
function noopPromise(){
  var def=getService('$q').defer();
  def.resolve();
  return def.promise;
}
function AccordionGroup(){

}
AccordionGroup.prototype.beforeOpen=noopPromise;
AccordionGroup.prototype.beforeHide=noopPromise;
AccordionGroup.prototype.down=function(animationFn){
  var _self=this;
  _self.beforeOpen().then(function(){
    _self.body[animationFn]('slow');//slideDown
    _self.options.open=true;
  },function(error){
    getService('$log').error(error);
  })
};
AccordionGroup.prototype.up=function(animationFn){
  var _self=this;
  _self.beforeHide().then(function(){
    _self.options.open=false;
    _self.body[animationFn]();//slideUp
  },function(error){
    getService('$log').error(error);
  })
};
function defaultAccordionGroupOptions(){
  return {
      open:false,
      disabled:false
    }
}
angular.module('uiAccordion')
    .directive('ngAccordionGroup', function($q) {
      return {
        require:['^ngAccordion','ngAccordionGroup'],
        restrict:'EA',
        controller:function(){
          var headerEl,bodyEl,headerDef,bodyDef;
          headerDef=$q.defer();
          bodyDef=$q.defer();
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
          var accordionCtrl,controller,accordion,accordionGroup,options;
          controller=controllers[1];
          accordionCtrl=controllers[0];
          accordion=accordionCtrl.accordion;
          accordionGroup=new AccordionGroup();
          options=fetchFromObject(scope,attrs.options);

          if(options) {
              accordionGroup.options=angular.extend(defaultAccordionGroupOptions(),options);
          }else{
              accordionGroup.options=defaultAccordionGroupOptions();
          }
            scope.$watchCollection(function(){
                return options;
            },function(n,o){
                accordionGroup.options=angular.extend(defaultAccordionGroupOptions(),n);
                if(n!==o && n.open!== o.open){
                    accordionGroup.options.open= !n.open;
                    accordion.toggleState(accordionGroup);
                }
            })

          $q.all([controller.getHeaderElement(),controller.getBodyElement()]).then(function(results){
            accordionGroup.header=results[0];
            accordionGroup.body=results[1];
            if(accordionGroup.options.open){
              accordionGroup.down('show');
            }else{
                accordionGroup.up('hide');
            }
            accordionGroup.header.on('click',function(){
              if(!accordionGroup.options.disabled){
                accordion.toggleState(accordionGroup);
              }
            });
            accordion.addGroup(accordionGroup);
          })

        }
      };
    })
