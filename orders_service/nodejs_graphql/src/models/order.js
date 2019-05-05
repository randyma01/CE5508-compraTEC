import {
  GraphQLSchema
} from 'graphql';
import Sequelize from 'sequelize';

const db = new Sequelize('compratec', 'usctec@ctec', 'pwctec1234*', {
  dialect: 'mysql',
  host: "ctec.mysql.database.azure.com",
  port: 3306,
})

const Test = db.define('test', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  number: Sequelize.INTEGER,
  amount: Sequelize.INTEGER
});

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Test.hasMany(Post);
Post.belongsTo(Test);
db.sync({ force: true })

export default db;

/*
let Order = new GraphQLSchema({
  id: Number,
  number: Number,
  amount: Number
});

export default Order;
*/
