const route = require('express').Router()

route.get('/:id', (req, res)=>{
    const data = {
        success: true,
        error: ""
    }
    res.send(data)
})

route.post('/:resturant_id', (req, res)=>{
    res.send( { success:true, id:10 } )
})

route.delete('/:id', (req, res)=>{
    res.send( { success:true } )
})

route.patch('/:id', (req, res)=>{
    res.send( { success:true, id:10 } )
})

module.exports = route