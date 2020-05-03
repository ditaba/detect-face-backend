const knex = require('knex');

let _db;

const initDB = () => {
  // [Heroku] Config for Heroku
  // _db = knex({
  //   client: 'pg',
  //   connection: {
  //     connectionString: process.env.DATABASE_URL,
  //     ssl: true,
  //   }
  // });

  // [localhost] Config to connect to localhost for start by docker or not
  console.log(process.env.POSTGRES_USER);
  console.log(process.env.POSTGRES_URI);
  _db = knex({
    client: 'pg',
    // connection: {
    // host : '127.0.0.1',
    // user : 'postgres',
    // password : 'root',
    // database : 'smart-brain'
    // host: process.env.POSTGRES_HOST,
    // user: process.env.POSTGRES_USER,
    // password: process.env.POSTGRES_PASSWORD,
    // database: process.env.POSTGRES_DB
    // }
    connection: process.env.POSTGRES_URI,
  });

  // [localhost] Check whether the connection is establish or not
  // console.log(db.select('*').from('users'));
  // console.log(db.select('*').from('login'));
  // db.select('*').from('users').then(data=>{console.log(data)});
  // db.select('*').from('login').then(date=>{console.log(data)});
};

const getDB = () => _db;

module.exports = {
  initDB: initDB,
  getDB: getDB,
};
