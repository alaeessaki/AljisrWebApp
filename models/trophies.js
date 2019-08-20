const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trophieSchema = new Schema({
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
    img:{
        src:{
            type:String,
            required:true
        },
        alt:{
            type:String,
            required:true
        }
    }
}, {
    collection: 'trophies'
})



const Trophies = module.exports = mongoose.model('trophies', trophieSchema);