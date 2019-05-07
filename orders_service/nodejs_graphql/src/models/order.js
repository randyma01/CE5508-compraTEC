import Sequelize, { DataTypes } from 'sequelize';

const db = new Sequelize('compratec', 'usctec@ctec', 'pwctec1234*', {
  dialect: 'mysql',
  host: "ctec.mysql.database.azure.com",
  port: 3306,
})

db.define('order', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  number: Sequelize.STRING,
  flower: Sequelize.STRING,
},
  {
    timestamps: false,
    freezeTableName: false,
    tableName: 'order'
  }
);

export default db;
