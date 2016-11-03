import { Controller } from 'angular-ecmascript/module-helpers';
import { Products } from '../../../lib/collections';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import Moment from 'moment';

export default class ProductInputCtrl extends Controller {
  constructor($scope) {
    super();
    $scope.product = {}
    console.log(Meteor.userId());
  };
  submit(){
    Products.insert({product: this.product, timestamp: Moment().subtract(1, 'hours').toDate(), userId: Meteor.userId()});
    this.reset();
  }
  reset(){
    this.product = "";
  }
}
