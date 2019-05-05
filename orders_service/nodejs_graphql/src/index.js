import hapi from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';
import mysql from 'mysql';
import createFlowersRoutes from './api/v1/order';
import schema from './graphql/schema';
const Sequelize = require('sequelize');

/*
const dbcompraTEC = mysql.createConnection({
  host: 'ctec.mysql.database.azure.com',
  user: 'usctec@ctec',
  password: 'pwctec1234*',
  database: 'compratec',
  port: 3306
});
*/


const init = async () => {
  const server = hapi.server({
    port: 8080,
    host: '0.0.0.0'
  });


  try {
    /*
    dbcompraTEC.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
    */
    createFlowersRoutes(server);
    /*
    sequelize.authenticate().then(() => {
      console.log('Connected!')
    }).catch(err => {
      console.log('Error in MySQL server!')
    })
    
    sequelize.query("SELECT * FROM compratec.order;").then(myTableRows => {
      console.log(myTableRows)
    })
    */

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
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
