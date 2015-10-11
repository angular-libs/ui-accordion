
# ui-accordion

## simple accordion in angular js

#Installing
#### Bower
```javascript
    bower install ui-accordion
    <script src="bower_components/ui-accordion/dist/scripts/ui-accordion.js"></script>
```
#### CDN

##### You can use rawgit.com's cdn url to access the files in the Bower repository. These files are hosted by MaxCDN. Just alter the version as you need.

* https://rawgit.com/kuldeepkeshwar/ui-accordion/master/dist/scripts/ui-accordion.js
* https://rawgit.com/kuldeepkeshwar/ui-accordion/master/dist/scripts/ui-accordion.min.js

## Usage :

* Simple Accordion
  
#### HTML
```html
<ul ng-accordion>
  <li ng-accordion-group>
    <h3 ng-accordion-heading> Heading1</h3>
    <div ng-accordion-body> Body1</div>
  </li>
  <li ng-accordion-group options="options">
    <h3 ng-accordion-heading> Heading2</h3>
    <div ng-accordion-body> Body2</div>
  </li>
  <li ng-accordion-group>
    <h3 ng-accordion-heading> Heading3</h3>
    <div ng-accordion-body> Body3</div>
  </li>
<ul>
```
##### CODE
```javascript
angular.module('myApp',['uiAccordion']);
```

* Simple Accordion with options
  
#### HTML
```html
<ul ng-accordion options="simpleAccordionOptions">
  <li ng-accordion-group options="accordionGroupOptions1">
    <h3 ng-accordion-heading> Heading1</h3>
    <div ng-accordion-body> Body1</div>
  </li>
  <li ng-accordion-group options="accordionGroupOptions2">
    <h3 ng-accordion-heading> Heading2</h3>
    <div ng-accordion-body> Body2</div>
  </li>
  <li ng-accordion-group options="accordionGroupOptions3">
    <h3 ng-accordion-heading> Heading3</h3>
    <div ng-accordion-body> Body3</div>
  </li>
<ul>
```

##### CODE
```javascript
angular.module('myApp',['uiAccordion']);
angular.module('myApp').controller("myCtrl",function($scope){
       
      $scope.simpleAccordionOptions={
        closeOthers:false               //Default: true) - Control whether expanding an item will cause the other items to close.
      }
      $scope.accordionGroupOptions1={
        open:true                       // (Default: false) - Whether accordion group is open or closed.
      }
      $scope.accordionGroupOptions2={
        open:false,
        disabled:true                   //(Default: false) - Whether the accordion group is disabled or not.
      }
      $scope.accordionGroupOptions3={
        open:true
      }
});
```

* Advance Accordion 
  
#### HTML
```html
<ul ng-accordion options="simpleAccordionOptions">
  <li ng-accordion-group options="accordionGroupOptions1">
    <h3 ng-accordion-heading> Heading1</h3>
    <div ng-accordion-body> Body1</div>
  </li>
  <li ng-accordion-group options="accordionGroupOptions2">
    <h3 ng-accordion-heading> Heading2</h3>
    <div ng-accordion-body> Body2</div>
  </li>
  <li ng-accordion-group options="accordionGroupOptions3">
    <h3 ng-accordion-heading> Heading3</h3>
    <div ng-accordion-body> Body3</div>
  </li>
<ul>
```

##### CODE
```javascript
angular.module('myApp',['uiAccordion']);
angular.module('myApp').controller("myCtrl",function($scope){
       
      $scope.simpleAccordionOptions={
        closeOthers:false               //Default: true) - Control whether expanding an item will cause the other items to close.
      }
      $scope.accordionGroupOptions1={
        open:true                           //(Default: false) - Whether accordion group is open or closed.
      }
      $scope.accordionGroupOptions2={
        open:false,
        disabled:true                       //(Default: false) - Whether the accordion group is disabled or not.
      }
      $scope.accordionGroupOptions3={
        open:true,
        beforeOpen:function(){              //promise which is resolved before showing accordion body
            var def=$q.defer();
            // busy doing some stuff 
            def.resolve();
            return def.promise;
        },
        beforeHide:function(){              //promise which is resolved before hidding accordion body
         var def=$q.defer();
         // busy doing some stuff 
         def.resolve()
         return def.promise;
        }
      }
});
```

* Nested Accordions 
  
#### HTML
```html
<ul ng-accordion>
  <li ng-accordion-group>
    <h3 ng-accordion-heading> Heading1</h3>
    <div ng-accordion-body>
        <h6>Nested Accordion</h6>
        <li ng-accordion-group>
          <h3 ng-accordion-heading> Heading11</h3>
          <div ng-accordion-body> Body11</div>
        </li>
        <li ng-accordion-group >
          <h3 ng-accordion-heading> Heading12</h3>
          <div ng-accordion-body> Body12</div>
        </li>
        <li ng-accordion-group >
          <h3 ng-accordion-heading> Heading13</h3>
          <div ng-accordion-body> Body13</div>
        </li>
    </div>
  </li>
  <li ng-accordion-group >
    <h3 ng-accordion-heading> Heading2</h3>
    <div ng-accordion-body> Body2</div>
  </li>
  <li ng-accordion-group >
    <h3 ng-accordion-heading> Heading3</h3>
    <div ng-accordion-body> Body3</div>
  </li>
<ul>
```


