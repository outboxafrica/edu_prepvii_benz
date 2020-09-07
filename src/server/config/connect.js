const mongoose = require('mongoose');
require('dotenv').config();

let mongoDB = process.env.NODE_ENV;

mongoose.connect(mongoDB,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.Promise = global.promise;

let db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));