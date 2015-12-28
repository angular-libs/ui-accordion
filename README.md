
# ui-accordion
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/angular-libs/ui-accordion.svg?branch=master)](https://travis-ci.org/angular-libs/ui-accordion)
[![Dependency Status](https://gemnasium.com/angular-libs/ui-accordion.svg)](https://gemnasium.com/angular-libs/ui-accordion)
[![codecov.io](https://codecov.io/github/angular-libs/ui-accordion/coverage.svg?branch=master)](https://codecov.io/github/angular-libs/ui-accordion?branch=master)
<a href="https://codeclimate.com/github/angular-libs/ui-accordion"><img src="https://codeclimate.com/github/angular-libs/ui-accordion/badges/gpa.svg" /></a>
[![Coverage Status](https://coveralls.io/repos/angular-libs/ui-accordion/badge.svg?branch=master&service=github)](https://coveralls.io/github/angular-libs/ui-accordion?branch=master)
[![Bower version](https://badge.fury.io/bo/ui-accordion.svg)](https://badge.fury.io/bo/ui-accordion)
[![Issue Stats](http://issuestats.com/github/angular-libs/ui-accordion/badge/pr)](http://issuestats.com/github/angular-libs/ui-accordion)
[![Issue Stats](http://issuestats.com/github/angular-libs/ui-accordion/badge/issue)](http://issuestats.com/github/angular-libs/ui-accordion)

-![codecov.io](https://codecov.io/github/angular-libs/ui-accordion/branch.svg?branch=master)
## simple accordion in angular js

#Installing
#### Bower
```javascript
    bower install ui-accordion
    <script src="bower_components/ui-accordion/dist/scripts/ui-accordion.js"></script>
```
#### CDN

##### You can use rawgit.com's cdn url to access the files in the Bower repository. These files are hosted by MaxCDN. Just alter the version as you need.

* https://rawgit.com/angular-libs/ui-accordion/master/dist/scripts/ui-accordion.js
* https://rawgit.com/angular-libs/ui-accordion/master/dist/scripts/ui-accordion.min.js

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
### for more [Click me](http://angular-libs.github.io/ui-accordion)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/angular-libs/ui-accordion/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71806888-1', 'auto');
  ga('send', 'pageview');

</script>
