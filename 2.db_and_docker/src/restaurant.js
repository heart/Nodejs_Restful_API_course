const route = require('express').Router()
const Restaurant = require('./models/restaurant')

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

route.post('/', (req, res)=>{
    const { name } = req.body
    if(name){

        const restaurant = new Restaurant({
            owner: '5d0f1cc5ec64210036b8106e',
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
    const data = {
        success: true,
        error: ""
    }
    res.send(data)
})

route.patch('/:id', (req, res)=>{
    const data = {
        success: true,
        error: ""
    }
    res.send(data)
})
module.exports = route