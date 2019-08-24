const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const participantSchema = new Schema({
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
        required:true,
        index:true, 
        unique:true,
        sparse:true
    },
    tel:{
        type:String,
        required:true
    }
}
)



const eventSchema = new Schema({
    date:{
        type: Date,
        required:true
    },
    title:{
        en:{
            type:String,
            required:true
        },
        fr:{
            type:String,
            required:true
        }
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
    participants:{
        type:[participantSchema],
        required:false,
        unique:false
    }
}, {
    collection: 'events'
})

const Participant = mongoose.model('Participant', participantSchema)

const Events = module.exports = mongoose.model('events', eventSchema);