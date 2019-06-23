const route = require('express').Router()
const User = require('./models/user')

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

route.post('/register', async (req, res)=>{
    const { name, username, password } = req.body
    if(name, username, password){

        const hashPassword = await bcrypt.hashSync(password, 5);
        
        const user = new User({
            name: name,
            username: username,
            password: hashPassword
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

/* var decoded = jwt.verify(token, 'shhhhh');
                    
                    // verify a token symmetric
                    jwt.verify(token, 'shhhhh', function(err, decoded) {
                    console.log(decoded.foo) // bar
                    });*/

route.post('/sign_in', (req, res)=>{

    const { username, password } = req.body

    if( username, password){
        User.find(  {username: username}   )
        .then( async user =>{
            if(user){
                const pass = await bcrypt.compareSync(  password  ,  user.password   )
                if(pass){

                    const userData = { user_id: user._id }

                    const token = await jwt.sign({
                        data: userData
                      }, 'nodejs', { expiresIn: '1h' });
                   
                    res.send( {
                        success: true,
                        message:'',
                        token:token
                    })
                }else{
                    res.send( {
                        success: false,
                        message:'Invalid username or password'
                    })
                }
            }
        })

    }

    // const data =  { success:true, message:"" }
    // res.send(data)
})

route.get('/sign_out', (req, res)=>{
    const data =  { success:true, message:"" }
    res.send(data)
})

module.exports = route