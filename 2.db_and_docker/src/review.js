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

route.get('/:review_id', (req, res)=>{
    Restaurant.findOne({'reviews._id':req.params.review_id})
    .then( data=>{
        res.send({
            success: true,
            cound: data.reviews.lenght || 0,
            reviews:data.reviews.id(req.params.review_id)
        })
    })
})

route.post('/:resturant_id', (req, res)=>{

    const { comment, score } = req.body

    Restaurant.findOneAndUpdate(
        {_id: req.params.resturant_id },
        {$push: {'reviews': { 
            user: '5d0f1cc5ec64210036b8106e',
            comment: comment,
            score: score
        }}}
    ).then( data=>{
        res.send( { success:true, message:'' } )
    })
})

route.delete('/:review_id', (req, res)=>{
    Restaurant.findOne({'reviews._id':req.params.review_id})
    .then( data=>{
        if( data ){
            data.reviews.pull(req.params.review_id)
            data.save(  err=>{
                if (err){
                    res.send( { success:false, message:err })
                }else{
                    res.send( { success:true, message:'' })
                }
            });
        }else{
            res.send( { success:false, message:'review not found' })
        }
    })
})

route.patch('/:review_id', (req, res)=>{
    res.send( { success:true, id:10 } )
})

module.exports = route