import {Sequelize} from "sequelize";

const db = new Sequelize('upload_db', 'quizuser', 'quiz4567', {
    host: '3.0.176.31',
    port: 3306,
    dialect: 'mysql'
});

// Test the connection to the database
db.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database: ', err);
  });

export default db;
