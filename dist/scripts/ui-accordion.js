'use strict';
angular.module('uiAccordion',[]);
function fetchFromObject(obj, prop) {

    if(typeof obj === 'undefined' || typeof prop === 'undefined') {
        return ;
    }

    var _index = prop.indexOf('.')
    if(_index > -1) {
        return fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
    }

    return obj[prop];
}


'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordion
 * @description
 * # ngAccordion
 */
function Accordion(){
    this.groups= [];
    this.options={
        closeOthers:true
    }
}
Accordion.prototype.addGroup = function(group) {
    this.groups.push(group);
}
Accordion.prototype.getGroups = function(group) {
    return this.groups;
}
Accordion.prototype.toggleState=function(group){
    if(group){
        if(group.options.open){
            group.up('slideUp');
        }else{
            group.down('slideDown');
            if(this.options.closeOthers) {
                for(var a=0;a<this.groups.length;a++){
                    if(group==this.groups[a]){
                        continue;
                    }else{
                        this.groups[a].up('slideUp');
                    }
                }
            }
        }
    }

}
Accordion.prototype.applyState=function(state){
    var method,group;
    method=(state)?'up':'down';
    for(var a=0;a<this.groups.length;a++){
        group=this.groups[a];
        group.options.open=state;
        group[method]();
    }
}
Accordion.prototype.allUp=function(){
    this.applyState(true);
}
Accordion.prototype.allDown=function(group){
    this.applyState(false);
}
function getDefaultAccordion(){
    return new Accordion();
}
angular.module('uiAccordion')
    .directive('ngAccordion',function ($q,$log) {
      return {
        restrict: 'A',
        link:function(scope,element,attrs,controller){
            var options=fetchFromObject(scope,attrs.options);
            if(options) {
                angular.extend(controller.accordion.options,options);
            }
            scope.$watchCollection(attrs.options,function(n,o){
                if(n && n!==o){
                    angular.extend( controller.accordion.options,n);
                }
            })
        },
        controller: function () {
          this.accordion=getDefaultAccordion();
        }
      };
    })

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
AccordionGroup.prototype.down=function(animationFn){
  var _self=this;
  _self.options.beforeOpen().then(function(){
    _self.body[animationFn]('slow');//slideDown
    _self.options.open=true;
  },function(error){
    getService('$log').error(error);
  })
};
AccordionGroup.prototype.up=function(animationFn){
  var _self=this;
  _self.options.beforeHide().then(function(){
    _self.options.open=false;
    _self.body[animationFn]();//slideUp
  },function(error){
    getService('$log').error(error);
  })
};
function defaultAccordionGroupOptions(){
  return {
      open:false,
      disabled:false,
      beforeOpen:noopPromise,
      beforeHide:noopPromise
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

'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordionHeading
 * @description
 * # ngAccordionHeading
 */
angular.module('uiAccordion')
    .directive('ngAccordionHeading', function() {
      return {
        require:'^ngAccordionGroup',
        restrict: 'EA',
        link: function(scope, element, attrs, accordionCtrl) {
          accordionCtrl.setHeaderElement(element);
        }
      };
    });

'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordionBody
 * @description
 * # ngAccordionBody
 */
angular.module('uiAccordion')
    .directive('ngAccordionBody', function() {
      return {
        require:'^ngAccordionGroup',
        restrict: 'EA',
        link: function(scope, element, attrs, accordionCtrl) {
          accordionCtrl.setBodyElement(element);
        }
      };
    });