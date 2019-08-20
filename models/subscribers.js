const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    subscribeDate:{
        type:Date,
        required:true
    }
}, {
    collection: 'subscribers'
})



const Subscribers = module.exports = mongoose.model('subscribers', subscriberSchema);