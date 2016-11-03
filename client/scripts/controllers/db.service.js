import Moment from 'moment';
import { Meteor } from 'meteor/meteor';

import { Products } from '../../../lib/collections';
const products = [
  {
    product: 'orange',
    timestamp: Moment().subtract(1, 'hours').toDate()
  },
  {
    product: 'meat',
    timestamp: Moment().subtract(2, 'hours').toDate()
  },
];

products.forEach((prod) => {
  Products.insert(prod);
})

import { Service } from 'angular-ecmascript/module-helpers'
export default class stuff extends Service {

  constructor ($scope) {
    super()
    var stuff={}
    stuff.products=Products.find().fetch()
    // $scope.find=function(){
    //   Products.find().fetch();
    // }
    //  Products.find().fetch()
    return stuff;
  }
}
console.log(Products.find().count())

// // import { Farmers, Members, Products } from '../lib/collections';

//
// Meteor.startup(function() {
//   // if (Products.find().count() !== 0) return;
//
// Products.remove({})
//
  // const products = [
  //   {
  //     product: 'orange',
  //     timestamp: Moment().subtract(1, 'hours').toDate()
  //   },
  //   {
  //     product: 'meat',
  //     timestamp: Moment().subtract(2, 'hours').toDate()
  //   },
  // ];

  // products.forEach((prod) => {
  //   Products.insert(prod);
  // });
// });
//
// console.log(Products.find().fetch())
