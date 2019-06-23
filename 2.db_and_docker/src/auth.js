const route = require('express').Router()
const User = require('./models/user')

route.post('/register', (req, res)=>{
    const { name, username, password } = req.body
    if(name, username, password){
        const user = new User({
            name: name,
            username: username,
            password: password
        })

        user.save().then( data =>{
            res.send({
                success: true,
                message: ''
            })
        })

    }else{
        res.send({
            success: false,
            message: 'invalid request data'
        })
    }
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