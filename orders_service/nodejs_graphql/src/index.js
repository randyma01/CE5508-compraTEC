import Hapi from 'hapi';
import mongoose from 'mongoose';
import statsRoutes from './api/v1/stats';
import usersRoutes from './api/v1/users';

const server = Hapi.server({
  host: 'localhost',
  port: 8000
});

statsRoutes(server);
usersRoutes(server);

const start = async function() {
  try {
    /* mongoose.connect(
    );
    mongoose.connection.once('open', () => {
      console.log('connected to database');
    }); */

    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
