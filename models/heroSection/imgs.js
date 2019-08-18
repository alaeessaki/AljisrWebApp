const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imgSchema = new Schema({
    source:{
        type: String,
        required: true
    },
    alt:{
        type: String,
        required: true
    }   
}, { collection: 'imgs' })


const Imgs = module.exports = mongoose.model('img', imgSchema);