angular.module('farmShareApp')
.controller('signup', function ($scope) {
  $scope.show = true
  $scope.reveal = function () {
    $scope.show = !$scope.show
  }
})
