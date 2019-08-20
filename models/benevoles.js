const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const benevoleSchema = new Schema({
    nom:{
        type:String,
        required:true
    },
    prenom:{
        type:String,
        required:true
    },
    adresse:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    nom_etablissement:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true,
        unique:true
    },
    nom_association:{
        type:String,
        required:true
    },
    exp_domaine_association:{
        type:String,
        required:true
    }
}, {collection: 'benevoles'})



const Benevoles = module.exports = mongoose.model('benevoles', benevoleSchema);