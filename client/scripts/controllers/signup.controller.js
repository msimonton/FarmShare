import { Controller } from 'angular-ecmascript/module-helpers';

import { Farmers } from '../../../lib/collections';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import Moment from 'moment';



export default class signup extends Controller {

  constructor ($scope) {
    super()
    $scope.showMember = false
    $scope.showFarmer = true
    $scope.reveal = function () {
      $scope.showMember = !$scope.showMember
      $scope.showFarmer = !$scope.showFarmer
    }
  }

  submit(){
    console.log(this.firstName)
    Farmers.insert({firstName: this.firstName,lastName: this.lastName, timestamp: Moment().subtract(1, 'hours').toDate()});
    this.reset();
  }
  reset(){
    this.farmer = "";
  }
}
