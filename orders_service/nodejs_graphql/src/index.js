import hapi from 'hapi';
//import mongoose from 'mongoose';
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';

import createFlowersRoutes from './api/v1/flowers';
import schema from './graphql/schema';

const init = async () => {
  const server = hapi.server({
    port: 8080,
    host: '0.0.0.0'
  });

  createFlowersRoutes(server);

  await server.register({
    plugin: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/graphql'
      },
      route: { cors: true }
    }
  });

  await server.register({
    plugin: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: { schema },
      route: { cors: true }
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
