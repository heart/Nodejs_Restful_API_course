const express = require('express')
const resturant = require('./restaurant')
const review = require('./review')
const auth = require('./auth')

const bodeParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodeParser.json())

app.use('/restaurant', resturant)
app.use('/review', review)
app.use('/auth', auth)

mongoose.connect( `${process.env.MONGO_SERVER}/resturant`, {useNewUrlParser: true}, ()=>{
    console.log('Connected to DB')
})

app.listen(3000, ()=>{
    console.log('App start at http://localhost:3000')
})

module.exports = app

