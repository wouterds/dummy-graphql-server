import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';
import Organization from './types/organization.graphql';
import Query from './types/query.graphql';

export default makeExecutableSchema({
  typeDefs: [Organization, Query],
  resolvers,
});
