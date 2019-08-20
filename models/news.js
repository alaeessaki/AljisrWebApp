const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    title: {
        en: {
            type: String,
            required: true
        },
        fr: {
            type: String,
            required: true
        }
    },
    description: {
        en: {
            type: String,
            required: true
        },
        fr: {
            type: String,
            required: true
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
    },
    auth: {
        type:String,
        required:false
    }
}, {
    collection: 'news'
})



const News = module.exports = mongoose.model('news', newSchema);