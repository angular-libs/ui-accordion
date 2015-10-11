
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
  
#### HTML
```html
<ul ui-accordion>
  <li ui-accordion-group>
    <h3 ui-accordion-heading> Heading1</h3>
    <div ui-accordion-body> Body1</div>
  </li>
  <li ui-accordion-group options="options">
    <h3 ui-accordion-heading> Heading2</h3>
    <div ui-accordion-body> Body2</div>
  </li>
  <li ui-accordion-group>
    <h3 ui-accordion-heading> Heading3</h3>
    <div ui-accordion-body> Body3</div>
  </li>
<ul>
```
##### CODE
```javascript
angular.module('myApp',['uiAccordion']);
angular.module('myApp').controller("myCtrl",function($scope){
  //options(optional) for accordion group 
	$scope.options={
	    beforeOpen:function(){ // promise which is resolved before showing accordion body
        var def=$q.defer();
        // busy doing some stuff 
        def.resolve();
        return def.promise;
      },
      beforeHide:function(){// promise which is resolved before hidding accordion body
        var def=$q.defer();
        // busy doing some stuff 
        def.resolve()
        return def.promise;
      }
	}
});
```
