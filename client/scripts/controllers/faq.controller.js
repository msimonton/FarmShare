import { Controller } from 'angular-ecmascript/module-helpers';
export default class faq extends Controller {

  constructor ($scope) {
    super()
    $scope.showAnswer = false
    $scope.toggleAnswerView = function () {
      $scope.showAnswer = !$scope.showAnswer;
      $scope.isClicked =  !$scope.isClicked;

    }
  }
}
