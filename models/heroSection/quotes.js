const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quote:{
        type: String,
        required: true
    }
}, { collection: 'quotes' } )

const Quote = module.exports = mongoose.model('quote', quoteSchema);