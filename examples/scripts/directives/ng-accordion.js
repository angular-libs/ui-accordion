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
