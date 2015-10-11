
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
### for more [Click me](http://kuldeepkeshwar.github.io/ui-accordion)
