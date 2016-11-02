import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Farmers, Members, Products } from '../lib/collections';


  Meteor.startup(function() {
    if (Products.find().count() !== 0) return;

    Products.remove({});


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
     });
  });
