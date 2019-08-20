const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    date:{
        type: Date,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        en:{
            type:String,
            required:true
        },
        fr:{
            type:String,
            required:true
        }
    },
    participants:[{
        name:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        tel:{
            type:String,
            required:true
        }
    }]
}, {
    collection: 'events'
})



const Events = module.exports = mongoose.model('events', eventSchema);