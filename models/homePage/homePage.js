const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homePageSchema = new Schema({
    heroSection: {
        type: Object,
        required: true
    },
    queSoutenonsNous:{
        type:Object,
        required:true
    }
}, {
    collection: 'homePage'
})

const HomePage = module.exports = mongoose.model('homePage', homePageSchema);