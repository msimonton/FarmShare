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


     if (Farmers.find().count() !== 0) return;

     Farmers.remove({});


      const farmers = [
        {
          firstName:'Jim',
          lastName:'Bob',
          image_url:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7lQ4h5J0NI_11yS9hGonV93fu7ktvNP6KPKXATBP_bx5XjNjOo3dG9G94',
          location:'Denver',
          info:'Goats n such',
          products:'Goat cheese',
          timestamp: Moment().subtract(1, 'hours').toDate()
        },
          {
            firstName:'Mary',
            lastName:'Sue',
            image_url:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7lQ4h5J0NI_11yS9hGonV93fu7ktvNP6KPKXATBP_bx5XjNjOo3dG9G94',
            location:'Denver',
            info:'Apples',
            products:'Apple sauce',
            timestamp: Moment().subtract(1, 'hours').toDate()
          },
      ];

      farmers.forEach((farmr) => {
        Farmers.insert(farmr);
      });
   });
