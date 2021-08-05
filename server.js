const express = require('express')
const app = express()
const mongoose = require('mongoose')
const citiesController = require('./controllers/cities.js')
const cors = require('cors')




app.use(express.json())
app.use(cors())
app.use('/cities', citiesController)





app.listen(3000, ()=>{
  console.log("Listening...");
})

mongoose.connect(
    'mongodb://localhost:27017/merncrud',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)
mongoose.connection.once('open', () => {
    console.log('connected to mongod');
})
