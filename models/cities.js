const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
  name:String,
  image: String,
  state: String,
  country: String,
  population: Number

})

const City = mongoose.model('City', citySchema)

module.exports = City
