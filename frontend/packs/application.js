/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import "./application.css";
import "init";

var coreJS = require('core-js');
var zoneJS = require('zone.js');
var reflectMetadata = require('reflect-metadata');
var ng  = {
      core: require("@angular/core"),
      common: require("@angular/common"),
      compiler: require("@angular/compiler"),
      forms: require("@angular/forms"),
      platformBrowser: require("@angular/platform-browser"),
      platformBrowserDynamic: require("@angular/platform-browser-dynamic"),
      router: require("@angular/router")
};

var AngularTestComponent = ng.core.Component({
  selector: "shine-angular-test",
    template: '\
    <h2 *ngIf="name">Hello {{name}}!</h2> \
    <form> \
      <div class="form-group"> \
        <label for="name">Name</label> \
        <input type="text" id="name" class="form-control" \
              name="name" bindon-ngModel="name"> \
     </div> \
   </form> \
  '
}).Class({
  constructor: function() {
  this.name = null;
  }
});

var AngularTestAppModule = ng.core.NgModule({
  imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule ],
  declarations: [ AngularTestComponent ],
  bootstrap: [ AngularTestComponent ]
})
.Class({
  constructor: function() {}
});


document.addEventListener('DOMContentLoaded', function() {
  var shouldBootstrap = document.getElementById("angular-test");
  if (shouldBootstrap) {
    ng.platformBrowserDynamic.
      platformBrowserDynamic().
      bootstrapModule(AngularTestAppModule);
  }
});

document.body.insertAdjacentHTML("afterbegin", "Webpacker works!");

console.log("Hello World from Webpacker");
