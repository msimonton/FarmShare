import { Controller } from 'angular-ecmascript/module-helpers';
import { Products } from '../../../lib/collections';




export default class ProductCtrl extends Controller {
  constructor($scope) {
    super();
    $scope.helpers({
          data() {
            return Products.find();
          }
    })

  }
}


// ProductCtrl.$inject = ['$stateParams'];
