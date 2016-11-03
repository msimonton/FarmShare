// import { Controller } from 'angular-ecmascript/module-helpers';
// import { Products } from '../../../lib/collections';
// import { _ } from 'meteor/underscore';
// import { Meteor } from 'meteor/meteor';
// import Moment from 'moment';
//
//
//
//
//
// export default class ProductInputCtrl extends Controller {
//   constructor($scope) {
//     super();
//     $scope.product = {}
//     $scope.showProductForm = true
//     $scope.reveal = function () {
//       $scope.showProductForm = !$scope.showProductForm
//     }
//   };
//
//   submit(){
//     console.log(this.product)
//     Products.insert({productName: this.productName, description:this.description, price:this.price, timestamp: Moment().subtract(1, 'hours').toDate()});
//     this.reset();
//   }
//   reset(){
//     this.product = "";
//   }
// }




import { Controller } from 'angular-ecmascript/module-helpers';
import { Products } from '../../../lib/collections';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import Moment from 'moment';




export default class ProductInputCtrl extends Controller {
  constructor($scope) {
    super();
    $scope.product = {}
    // $scope.showProductForm = true
    // $scope.showFarmer = false
    // $scope.reveal = function () {
    //   $scope.showProductForm = !$scope.showProductForm
    //   $scope.showFarmer = !$scope.showFarmer
    // }
  };

  submit(){
    console.log(this.product)
    Products.insert({productName: this.productName, description: this.description, price:this.price, location: this.location, user_id:this.user_id, timestamp: Moment().subtract(1, 'hours').toDate()});
    this.reset();
  }
  reset(){
    this.product = "";
  }
}
