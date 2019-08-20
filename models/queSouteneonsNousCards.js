const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queSoutenonsNousCardsSchema = new Schema({
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
    icon:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        required:false,
        default:false
    },
    hoverId:{
        type:Number,
        required:true,
        unique:true
    }
}, {collection: 'queSoutenonsNousCards'})



const QueSoutenonsNousCards = module.exports = mongoose.model('queSoutenonsNousCards', queSoutenonsNousCardsSchema);