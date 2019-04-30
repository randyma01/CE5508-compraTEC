const graphql = require('graphql');

import FlowerType from './flower-type';
import Flower from '../models/flower';

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    flower: {
      type: FlowerType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Flower.findById(args.id);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
