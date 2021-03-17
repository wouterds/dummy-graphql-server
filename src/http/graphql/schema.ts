import { mergeSchemas } from 'graphql-tools';

import person from './person/schema';

export default mergeSchemas({
  schemas: [person],
});
