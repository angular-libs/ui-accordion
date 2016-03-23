'use strict';
angular.module('uiAccordion', []);
'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordionHeading
 * @description
 * # ngAccordionHeading
 */
angular.module('uiAccordion')
  .directive('ngAccordionHeading', function () {
      return {
          require: '^ngAccordionGroup',
          restrict: 'EA',
          link: function (scope, element, attrs, accordionCtrl) {
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
  .directive('ngAccordionBody', function () {
      return {
          require: '^ngAccordionGroup',
          restrict: 'EA',
          link: function (scope, element, attrs, accordionCtrl) {
              accordionCtrl.setBodyElement(element);
          }
      };
  });

'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordionGroup
 * @description
 * # ngAccordionGroup
 */
angular.module('uiAccordion')
  .directive('ngAccordionGroup', function (accordionGroup,$q,$timeout) {
      return {
          require: ['^ngAccordion', 'ngAccordionGroup'],
          restrict: 'EA',
          controller: 'NgAccordionGroupCtrl',
          scope: {
              options: '=?'
          },
          link: function (scope, element, attrs, controllers) {
              var accordionCtrl, controller, accordion, _accordionGroup;
              controller = controllers[1];
              accordionCtrl = controllers[0];
              accordion = accordionCtrl.accordion;
              _accordionGroup = accordionGroup.createAccordionGrp();
              if (!scope.options) {
                  scope.options = accordionGroup.defaultAccordionGroupOptions();
              }
              _accordionGroup.options = angular.extend(accordionGroup.defaultAccordionGroupOptions(), scope.options);

              scope.$watchCollection('options', function (n) {
                  _accordionGroup.options = angular.extend(accordionGroup.defaultAccordionGroupOptions(), n);
                  if (n && !n.disabled) {
                      accordion.applyState(_accordionGroup);
                  }
              }, true);

              $q.all([controller.getHeaderElement(), controller.getBodyElement()]).then(function (results) {
                  _accordionGroup.header = results[0];
                  _accordionGroup.body = results[1];
                  if (scope.options.open) {
                      _accordionGroup.$animate('show', 'beforeOpen', 'animateOpen');
                  } else {
                      _accordionGroup.$animate('hide', 'beforeHide', 'animateClose');
                  }
                  _accordionGroup.header.on('click', function () {
                      if (!_accordionGroup.options.disabled) {
                          _accordionGroup.options.open = !_accordionGroup.options.open;
                          accordion.applyState(_accordionGroup);
                      }
                      $timeout(function () {
                          scope.$apply();
                      });
                  });
                  accordion.addGroup(_accordionGroup);
              });

          }
      };
  });

'use strict';

/**
 * @ngdoc directive
 * @name uiAccordion.directive:ngAccordion
 * @description
 * # ngAccordion
 */
angular.module('uiAccordion')
  .directive('ngAccordion', function (objectUtil) {
      return {
          restrict: 'A',
          link: function (scope, element, attrs, controller) {
              var options = objectUtil.fetchFromObject(scope, attrs.options);
              if (options) {
                  angular.extend(controller.accordion.options, options);
              }
              scope.$watchCollection(attrs.options, function (n, o) {
                  if (n && n !== o) {
                      angular.extend(controller.accordion.options, n);
                  }
              });
          },
          controller: 'NgAccordionCtrl'
      };
  });

'use strict';

/**
 * @ngdoc function
 * @name uiAccordion.controller:NgAccordionGroupCtrl
 * @description
 * # NgAccordionGroupCtrl
 * Controller of the uiAccordion
 */
angular.module('uiAccordion')
  .controller('NgAccordionGroupCtrl', function ($q) {
      var headerDef, bodyDef;
      headerDef = $q.defer();
      bodyDef = $q.defer();
      this.setHeaderElement = function (element) {
          headerDef.resolve(element);
      };
      this.getHeaderElement = function () {
          return headerDef.promise;
      };
      this.setBodyElement = function (element) {
          bodyDef.resolve(element);
      };
      this.getBodyElement = function () {
          return bodyDef.promise;
      };
  });

'use strict';

/**
 * @ngdoc function
 * @name uiAccordion.controller:NgAccordionCtrl
 * @description
 * # NgAccordionCtrl
 * Controller of the uiAccordion
 */
angular.module('uiAccordion')
  .controller('NgAccordionCtrl', function (accordion) {
      this.accordion = accordion.createAccordion();
  });

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
            this.body[animationFn]('slow');
          },
          animateClose: function (animationFn) {
            this.body[animationFn]();
          }
        };
      }
    };
  });

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
              this.groups[a].options.open = false;
              this.groups[a].$animate('slideUp', 'beforeHide', 'animateClose');
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

'use strict';

/**
 * @ngdoc service
 * @name uiAccordion.objectUtil
 * @description
 * # objectUtil
 * Service in the uiAccordion.
 */
angular.module('uiAccordion')
  .service('objectUtil', function () {
     this.fetchFromObject=function fetchFromObject(obj, prop) {
      if (typeof obj === 'undefined' || typeof prop === 'undefined') {
        return;
      }
      var _index = prop.indexOf('.');
      if (_index > -1) {
        return fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
      }
      return obj[prop];
    };
  });
