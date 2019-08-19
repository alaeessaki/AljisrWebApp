const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroSectionImgSchema = new Schema({
    src:{
        type:String,
        required:true
    },
    alt:{
        type:String,
        required:true
    }
}, {collection: 'heroSectionImgs'})



const HeroSectionImgs = module.exports = mongoose.model('heroSectionImgs', heroSectionImgSchema);