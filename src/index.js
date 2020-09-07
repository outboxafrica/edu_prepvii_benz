const express = require('express')

const mongoose = require('mongoose')

const app = express()


const bodyParser = require('body-parser')

const dotenv = require('dotenv')

dotenv.config()

const authRoute = require('./server/helpers/validation')
app.use(express.json())


//Route middleware
app.use('/api/user', authRoute)

app.get('/',(req,res)=>{
  res.send('home')
})

//MIDDLEWARE

app.listen(3002,()=>{
  console.log('running on port 3002')
})

//connect to DB
mongoose.connect(process.env.NODE_ENV,
  { useNewUrlParser: true, 
    useUnifiedTopology: true  },
  ()=>{console.log('connected to db'),
  {}})