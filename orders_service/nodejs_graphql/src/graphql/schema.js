const graphql = require('graphql');
const { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } = graphql;

import OrderType from './order-type';
import Db from '../models/order';

const RootQuery = new GraphQLObjectType({
  name: 'getAllOrder',
  description: 'Get all orders in database',
  fields: () => {
    return {
      orders: {
        type: GraphQLList(OrderType),
        resolve(root, args) {
          return Db.models.order.findAll();
        }
      }
    }
  }
});

const CreateOrder = {
  createOrder: {
    name: 'createOrder',
    description: 'Insert new order in database',
    type: OrderType,
    args: {
      flower: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(root, args) {
      return Db.models.order.create({ flower: args.flower })
    }
  }
};


const DeleteOrder = {
  deleteOrder: {
    name: 'deleteOrder',
    description: 'Delete order in database',
    type: OrderType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve(root, args) {
      return Db.models.order.destroy({ where: { id: args.id } })
    }
  }
};

const UpdateOrder = {
  updateOrder: {
    name: 'updateOrder',
    description: 'Update order in database',
    type: OrderType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
      flower: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(root, args) {
      return Db.models.order.update({ flower: args.flower },
        {
          where: { id: args.id }
        })
    }
  }
};

const ReadOrder = {
  readOrder: {
    name: 'readOrder',
    description: 'FindOne order in database',
    type: new GraphQLList(OrderType),
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve(root, args) {
      return Db.models.order.findAll({ where: { id: args.id } })
    }
  }
}

const RootMutation = new GraphQLObjectType({
  name: 'CRUD',
  description: 'CRUD: Create, Read,Update, Delete order in database',
  fields: () => ({
    ...CreateOrder,
    ...ReadOrder,
    ...UpdateOrder,
    ...DeleteOrder
  })
});


export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
}); 
