const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temoinSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    src:{
        type: String,
        required: true
    },
    alt:{
        type: String,
        required: true
    },
    testimon:{
        type: String,
        required: true
    },
    profile:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
}, { collection: 'temoins' } )

const Temoin = module.exports = mongoose.model('temoins', temoinSchema);

