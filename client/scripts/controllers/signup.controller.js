import { Controller } from 'angular-ecmascript/module-helpers';
export default class signup extends Controller {

  constructor ($scope) {
    super()
    $scope.showMember = true
    $scope.showFarmer = false
    $scope.reveal = function () {
      $scope.showMember = !$scope.showMember
      $scope.showFarmer = !$scope.showFarmer
    }
  }
}
