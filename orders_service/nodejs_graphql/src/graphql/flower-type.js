const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const FlowerType = new GraphQLObjectType({
  name: 'Flower',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    stock: { type: GraphQLString }
  })
});

export default FlowerType;
