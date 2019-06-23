const route = require('express').Router()

route.get('/', (req, res)=>{
    const data = {
        success: true,
        error: "",
        total: 100,
        page: 1,
        count: 5,
        restaurants:[
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" }
        ]
    }
    res.send(data)
})

route.get('/:id', (req, res)=>{
    const data = { 
        success:true,
        error:"",
        name:"ไก่ทอดป้าดา" , 
        id:"XXAACC", 
        photo:"a.jpg",
        totalReview:3,
        reviews:[
            { id:"22dd", name:"Heart", score:5, message:"อร่อยมาก"},
            { id:"22dd", name:"Heart", score:5, message:"อร่อยมาก"},
            { id:"22dd", name:"Heart", score:5, message:"อร่อยมาก"}
        ]
    }
    res.send(data)
})

route.post('/', (req, res)=>{
    const data = {
        success: true,
        error: ""
    }
    res.send(data)
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