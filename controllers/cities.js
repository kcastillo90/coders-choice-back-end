const express = require('express')
const router = express.Router()
const City = require('../models/cities.js')


router.get('/', (req, res)=>{
  City.find({}, (err, foundCity)=>{
    res.json(foundCity)
  })
})

router.post('/', (req, res)=>{
  City.create(req.body, (err, createdCity)=>{
    res.json(createdCity)
  })
})

router.delete('/:id', (req, res)=>{
  City.findByIdAndRemove(req.params.id, (err, deletedCity)=>{
    res.json(deletedCity)
  })
})

router.put('/:id', (req, res)=>{
  City.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCity)=>{
    res.json(updatedCity)
  })
})


module.exports = router
