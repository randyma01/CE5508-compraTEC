const graphql = require('graphql');

import OrderType from './order-type';
import Db from '../models/order';

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = graphql;


const Test = new GraphQLObjectType({
  name: 'Test',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(order) {
          return order.id
        }
      },
      number: {
        type: GraphQLInt,
        resolve(order) {
          return order.number
        }
      },
      amount: {
        type: GraphQLInt,
        resolve(order) {
          return order.amount
        }
      }
    }
  }
});


const RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Get all order in database',
  fields: () => {
    return {
      orders: {
        type: GraphQLList(Test),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          return Db.models.test.findAll({where: args});
        }
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
