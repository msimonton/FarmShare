import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


export const Farmers = new Mongo.Collection('farmers');
export const Members = new Mongo.Collection('members');
export const Products = new Meteor.Collection('products');
