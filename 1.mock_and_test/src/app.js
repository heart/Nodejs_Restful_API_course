const express = require('express')

const resturant = require('./restaurant')
const review = require('./review')

const app = express()

app.use('/restaurant', resturant)
app.use('/review', review)

app.listen(3000, ()=>{
    
})

module.exports = app

