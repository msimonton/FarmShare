import { Controller } from 'angular-ecmascript/module-helpers';
import { Products } from '../../../lib/collections';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import Moment from 'moment';





export default class ProductInputCtrl extends Controller {
  constructor($scope) {
    super();
    $scope.product = {}
  };

  submit(){
    console.log(this.product)
    Products.insert({product: this.product, timestamp: Moment().subtract(1, 'hours').toDate()});
    this.reset();
  }
  reset(){
    this.product = "";
  }
}
