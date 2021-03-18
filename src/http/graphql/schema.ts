import { mergeSchemas } from 'graphql-tools';

import organization from './organization/schema';
import person from './person/schema';

export default mergeSchemas({
  schemas: [person, organization],
});
