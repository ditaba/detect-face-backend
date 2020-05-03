const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const _db_ = require('./db');

_db_.initDB();
const db = _db_.getDB();

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const auth = require('./controllers/authorization');

const app = express();
const authRoutes = require('./routes/auth');
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);

dotenv.config();

console.log(process.env.POSTGRES_URI);
// app.get('/', (req, res)=> { res.send(database.users) });
app.get('/', (req, res) => {
  res.send('It is OK!!!!');
});

// app.post('/signin', signin.signinAuthentication(db, bcrypt));
// app.post('/register', (req, res) => {
//   register.handleRegister(req, res, db, bcrypt);
// });

app.get('/profile/:id', auth.requireAuth, (req, res) => {
  profile.handleProfileGet(req, res, db);
});
app.post('/profile/:id', auth.requireAuth, (req, res) => {
  profile.handleProfileUpdate(req, res, db);
});
app.put('/image', auth.requireAuth, (req, res) => {
  image.handleImage(req, res, db);
});
app.post('/imageurl', auth.requireAuth, (req, res) => {
  image.handleApiCall(req, res);
});
app.get('/test', (req, res) => {
  res.send('Hello alibaba');
});
// app.post('/signin', (req,res)=> {res.send('Signin')});
app.listen(process.env.PORT || 4000, () => {
  console.log('app is running on port ' + process.env.PORT);
});
