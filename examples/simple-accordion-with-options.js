angular.module('myApp',['uiAccordion']);
angular.module('myApp').controller("myCtrl",function($scope){

    $scope.simpleAccordionOptions={
        closeOthers:false  //Default: true) - Control whether expanding an item will cause the other items to close.
    };
    $scope.accordionGroupOptions1={
        open: true          // (Default: false) - Whether accordion group is open or closed.
    };
    $scope.accordionGroupOptions2={
        open:false,
        disabled: true      //(Default: false) - Whether the accordion group is disabled or not.
    };
    $scope.accordionGroupOptions3={
        open: true
    }
});