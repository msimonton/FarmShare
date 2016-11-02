import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Modules
import signup from '../controllers/signup.controller';
import product from '../controllers/product.controller';

import productinput from '../controllers/productinput.controller';

import RoutesConfig from '../routes';
const App = 'Farmshare';

// App
Angular.module(App, [
  'angular-meteor',
  'ionic'
]);

new Loader(App)
  .load(signup)
  .load(product)
  .load(productinput)
  .load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}

function onReady() {
  Angular.bootstrap(document, [App]);
}

// Parallax for landing page
// var jumboHeight = $('.customJumbotron').outerHeight();
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('.bg').css('height', (jumboHeight-scrolled) + 'px');
// }
//
// $(window).scroll(function(e){
//     parallax();
// });
