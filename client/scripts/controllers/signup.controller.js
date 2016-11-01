import stuff from '../controllers/db.service';
import { Controller } from 'angular-ecmascript/module-helpers';
export default class signup extends Controller {

  constructor ($scope) {
    super()
    $scope.products = stuff.products
    $scope.showMember = false
    $scope.showFarmer = true
    $scope.reveal = function () {
      $scope.showMember = !$scope.showMember
      $scope.showFarmer = !$scope.showFarmer
    }
  }
}
