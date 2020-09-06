const mongoose = require('mongoose');
require('dotenv').config();

let mongoDB = process.env.DB_URL;

mongoose.connect(mongoDB,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.Promise = global.promise;

let db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));