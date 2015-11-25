
# ui-accordion
[![Build Status](https://travis-ci.org/kuldeepkeshwar/ui-accordion.svg?branch=master)](https://travis-ci.org/kuldeepkeshwar/ui-accordion)
[![Dependency Status](https://gemnasium.com/kuldeepkeshwar/ui-accordion.svg)](https://gemnasium.com/kuldeepkeshwar/ui-accordion)
[![codecov.io](https://codecov.io/github/kuldeepkeshwar/ui-accordion/coverage.svg?branch=master)](https://codecov.io/github/kuldeepkeshwar/ui-accordion?branch=master)
<a href="https://codeclimate.com/github/kuldeepkeshwar/ui-accordion"><img src="https://codeclimate.com/github/kuldeepkeshwar/ui-accordion/badges/gpa.svg" /></a>
<a href="https://codeclimate.com/github/kuldeepkeshwar/ui-accordion/coverage"><img src="https://codeclimate.com/github/kuldeepkeshwar/ui-accordion/badges/coverage.svg" /></a>
[![Bower version](https://badge.fury.io/bo/ui-accordion.svg)](https://badge.fury.io/bo/ui-accordion)
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


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/kuldeepkeshwar/ui-accordion/trend.png)](https://bitdeli.com/free "Bitdeli Badge")



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/angular-libs/ui-accordion/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

