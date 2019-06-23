const route = require('express').Router()

route.post('/register', (req, res)=>{
    const data =  { success:true, message:"" }
    res.send(data)
})

route.post('/sign_in', (req, res)=>{
    const data =  { success:true, message:"" }
    res.send(data)
})

route.get('/sign_out', (req, res)=>{
    const data =  { success:true, message:"" }
    res.send(data)
})

module.exports = route