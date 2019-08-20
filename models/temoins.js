const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temoinSchema = new Schema({
    src:{
        type:String,
        required:true
    },
    alt:{
        type:String,
        required:true
    },
    testimoin:[{
        en:{
            type:String,
            required:true
        },
        fr:{
            type:String,
            required:true
        }
    }],
    profile:[{
        en:{
            type:String,
            required:true
        },
        fr:{
            type:String,
            required:true
        }
    }],
    status:[{
        en:{
            type:String,
            required:true
        },
        fr:{
            type:String,
            required:true
        }
    }]
}, {collection: 'temoins'})



const Temoins = module.exports = mongoose.model('temoins', temoinSchema);