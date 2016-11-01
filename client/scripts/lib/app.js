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
import RoutesConfig from '../routes';
const App = 'Farmshare';

// App
Angular.module(App, [
  'angular-meteor',
  'ionic'
])



.controller('MyController', function($scope, $ionicModal) {
  $scope.modalClasses = ['slide-in-up', 'slide-in-down', 'fade-in-scale', 'fade-in-right', 'fade-in-left', 'newspaper', 'jelly', 'road-runner', 'splat', 'spin', 'swoosh', 'fold-unfold'];

  $scope.openModal = function(animation) {
    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: animation
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
});







new Loader(App)
  .load(signup)
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
