const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt } = graphql;

const OrderType = new GraphQLObjectType({
  name: 'Order',
  fields: () => ({
    id: { type: GraphQLInt },
    number: { type: GraphQLInt },
    amount: { type: GraphQLInt }
  })
});

export default OrderType;
