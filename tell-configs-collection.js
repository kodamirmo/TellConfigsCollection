import { Mongo } from 'meteor/mongo';

class TellConfigsCollection extends Mongo.Collection {

}

export const TellConfigs = new TellConfigsCollection('tellConfigs');
TellConfigs.attachBehaviour('timestampable');
