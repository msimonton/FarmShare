import { Mongo } from 'meteor/mongo';

export const Chats = new Mongo.Collection('farmers');
export const Messages = new Mongo.Collection('members');
