const route = require('express').Router()
const Restaurant = require('./models/restaurant')
const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next){
    jwt.verify( req.body.token, 'nodejs', (err, decoded)=>{
        if(err){
            res.send( {
                success: false, 
                message:'You dont have permission to access.'
            })
        }else{
            req.user_id = decoded.data.user_id
            next()
        }
    });
}

route.get('/', (req, res)=>{

    Restaurant.find({}).then( data=>{
        
        var restaurants = []

        data.map( r =>{
            restaurants.push({
                id: r._id,
                name: r.name
            })
        } )

        const resData = {
            success: true,
            error: "",
            total: data.length,
            page: 1,
            count: data.length,
            restaurants: restaurants
        }

        res.send(resData)

    })

})

route.get('/:id', (req, res)=>{
    Restaurant.findOne({_id:req.params.id }).then( data=>{
        const resData = {
            success: true,
            error: "",
            restaurant: data
        }
        res.send(resData)
    })
})

route.post('/',verifyToken , (req, res)=>{
    const { name } = req.body
    if(name){

        const restaurant = new Restaurant({
            owner: req.user_id,
            name:name
        })

        restaurant.save().then( data =>{
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

route.get('/:resturant_id/reviews', (req, res)=>{
    Restaurant.findOne({_id:req.params.resturant_id})
    .then( data=>{
        res.send({
            success: true,
            cound: data.reviews.lenght || 0,
            reviews:data.reviews
        })
    })
})

route.delete('/:id', (req, res)=>{

    Restaurant.remove({_id:req.params.id }, (err, data)=>{
        if( err ){
            res.send( {success:false, message:err} )
        }else{
            res.send( {success:false, message:err} )
        }
    });

})

route.patch('/:id', (req, res)=>{
    const data = {
        success: true,
        error: ""
    }
    res.send(data)
})
module.exports = route