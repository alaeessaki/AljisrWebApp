const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slogonSchema = new Schema({
    section:{
        type:String,
        required:true
    },
    slogons:[{
        en:{
            type:String,
            required:true
        },
        fr:{
            type:String,
            required:true
        }
    }]
}, {collection: 'slogons'})



const Slogons = module.exports = mongoose.model('slogons', slogonSchema);