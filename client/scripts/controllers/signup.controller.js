
import { Controller } from 'angular-ecmascript/module-helpers';
import { Farmers } from '../../../lib/collections';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import Moment from 'moment';




export default class FarmerInputCtrl extends Controller {
  constructor($scope) {
    super();
    $scope.farmer = {}
    // $scope.farmer.firstname = {}
    // $scope.farmer.lastname = {}
    // $scope.farmer.image_url = {}
    // $scope.farmer.location = {}
    // $scope.farmer.products = {}
    // $scope.farmer.info = {}
    $scope.showMember = false
    $scope.showFarmer = true
    $scope.reveal = function () {
      $scope.showMember = !$scope.showMember
      $scope.showFarmer = !$scope.showFarmer
    }
  };

  submit(){
    console.log(this.farmer)
    Farmers.insert({firstName: this.firstName, lastName: this.lastName, imageUrl: this.imageUrl, location: this.location, info: this.info, products: this.products,  timestamp: Moment().subtract(1, 'hours').toDate()});
    this.reset();
  }
  reset(){
    this.farmer = "";
  }
}







//   constructor ($scope) {
//     super()
//   }
// }
