import { Mongo } from 'meteor/mongo';
export const Farmers = new Mongo.Collection('farmers');
export const Members = new Mongo.Collection('members');
export const Products = new Mongo.Collection('products');
