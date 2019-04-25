const graphql = require('graphql');

import StudentType from './student-type.js';
import Student from '../models/student';

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    student: {
      type: StudentType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Student.findById(args.id);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
