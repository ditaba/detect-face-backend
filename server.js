const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

// [Heroku] Config for Heroku
// const db = knex({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   }
// });

// [localhost] Config to connect to localhost
// console.log(process.env.POSTGRES_USER);
const db = knex({
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
  connection: process.env.POSTGRES_URI
});

// [localhost] Check whether the connection is establish or not
 console.log("Hello");
 // console.log(db.select('*').from('users'));
 // console.log(db.select('*').from('login'));
 // db.select('*').from('users').then(data=>{console.log(data)});
 // db.select('*').from('login').then(date=>{console.log(data)});

const app = express();

app.use(cors())
app.use(bodyParser.json());
dotenv.config();

console.log('Hello world');
// app.get('/', (req, res)=> { res.send(database.users) });
app.get('/', (req, res)=> { res.send('It is OK!') });
app.post('/signin', signin.handleSignin(db, bcrypt));
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)});
app.put('/image', (req, res) => { image.handleImage(req, res, db)});
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)});
app.get('/test', (req,res)=>{res.send('Hello alibaba')});
// app.post('/signin', (req,res)=> {res.send('Signin')});
app.listen(process.env.PORT || 4000, ()=> {
  console.log('app is running on port '+process.env.PORT);
})
