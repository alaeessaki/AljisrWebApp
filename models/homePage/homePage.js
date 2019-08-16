const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const imgSchema = new Schema({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true
    }

})

const heroSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    slogons: {
        type: Array,
        required: true
    },
    imgs: [imgSchema]
});

const cardSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: false
    },
    icon: {
        type: String,
        required: true
    }

})

const queSoutenonsNousSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    cards: [cardSchema]
})

const testimoinsSchema = new Schema({
    id: {
        type:Number,
        required:true
    },
    src:{
        type:String,
        required:true
    }, 
    alt:{
        type:String,
        required:true
    },
    testimon:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const temoinSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    temoins: [testimoinsSchema]
})

const homePageSchema = new Schema({
    heroSection: heroSchema,
    queSoutenonsNous: queSoutenonsNousSchema,
    temoinSection:temoinSchema
}, {
    collection: 'homePage'
})

const ImgModel =  mongoose.model('img',imgSchema );
const HeroModel =  mongoose.model('heroSection',heroSchema );
const CardModel = mongoose.model('card',cardSchema );
const SueSoutenonsNousModel = mongoose.model('queSeoutenonNousSection', queSoutenonsNousSchema);
const TestimoinsModel = mongoose.model('testiSection',testimoinsSchema );
const TemoinModel = mongoose.model('temoinSection',temoinSchema )

const HomePage = module.exports = mongoose.model('homePage', homePageSchema);



