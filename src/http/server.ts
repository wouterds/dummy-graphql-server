import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import schema from './graphql/schema';
import requestHandlers from './request-handlers';

const port = process.env.PORT || 3000;

// Init apollo graphql server
const apollo = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV !== 'production',
});

// Init express server
const app = express();

// Express middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Healthcheck
app.get('/ping', requestHandlers.ping);

// Link apollo with express
apollo.applyMiddleware({ app, path: '/' });

// Start server
app.listen(port, () => {
  console.log(
    `> Application is running on http://localhost:${port}${apollo.graphqlPath} 🚀`,
  );
});
