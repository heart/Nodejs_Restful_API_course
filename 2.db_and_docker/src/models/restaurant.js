const mongoose = require('mongoose')
const User = require('./user')

const reviewSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    comment: String,
    score: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

const restaurantSchema = mongoose.Schema({
    name: String,
    reviews:[reviewSchema],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    create_at:{
        type: Date,
        default: Date.now
    }
})

const model = mongoose.model('Restaurant', restaurantSchema )

module.exports = model