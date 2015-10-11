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

