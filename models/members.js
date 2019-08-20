const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name:{
        en:{
            type:String,
            required:true
        },
        fr:{
            type:String,
            required:true
        }
    },
    lastname:{
        en:{
            type:String,
            required:true
        },
        fr:{
            type:String,
            required:true
        }
    },
    quote:{
        en:{
            type:String,
            required:true
        },
        fr:{
            type:String,
            required:true
        }
    },
    status:{
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
    collection: 'members'
})



const Members = module.exports = mongoose.model('members', memberSchema);