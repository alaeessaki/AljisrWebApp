const express = require('express');
const router = express.Router();

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                      MODELS IMPORTS                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////

const Img = require('../models/heroSectionImgs');
const Slogons = require('../models/slogons');
const Cards = require('../models/queSouteneonsNousCards');
const Benevoles = require('../models/benevoles');
const Events = require('../models/events');
const Members = require('../models/members');
const News = require('../models/news');
const Subscribers = require('../models/subscribers');
const Temoins = require('../models/temoins');
const Trophies = require('../models/trophies');







////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
//                                                                                                //
//                                        GET ROUTES                                              //
//                                                                                                //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////

// get HeroSechtionImgs 
router.get('/heroSectionImgs', function (req, res, next) {
    Img.find((err, imgs) => {
        res.json(imgs)
    })
})

// get Slogons
router.get('/slogons', function (req, res, next) {
    Slogons.find((err, slogons) => {
        res.json(slogons)
    })
})

// get queSoutenons nous Cards
router.get('/qstnCards', function (req, res, next) {
    Cards.find((err, cards) => {
        res.json(cards)
    })
})

// get Benevoles
router.get('/benevoles', function (req, res, next) {
    Benevoles.find((err, benevoles) => {
        res.json(benevoles)
    })
})

// get Events
router.get('/events', function (req, res, next) {
    Events.find((err, events) => {
        res.json(events)
    })
})

// get Members
router.get('/members', function (req, res, next) {
    Members.find((err, members) => {
        res.json(members)
    })
})

// get News
router.get('/news', function (req, res, next) {
    News.find((err, news) => {
        res.json(news)
    })
})

// get Subscribers
router.get('/subscribers', function (req, res, next) {
    Subscribers.find((err, subscribers) => {
        res.json(subscribers)
    })
})

// get Temoins
router.get('/temoins', function (req, res, next) {
    Temoins.find((err, temoins) => {
        res.json(temoins)
    })
})

// get Trophies
router.get('/trophies', function (req, res, next) {
    Trophies.find((err, trophies) => {
        res.json(trophies)
    })
})






////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
//                                                                                                //
//                                        POST ROUTES                                             //
//                                                                                                //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////


// Add HeroSectionImg
router.post('/addHeroSectionImg', (req, res, next) => {
    let newImg = new Img({
        src: req.body.src,
        alt: req.body.alt
    })
    newImg.save((err, img) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!img) {
            res.status(404).end();
        } else {
            res.status(200).json({
                msg: "img added successfully",
                dataSent: img
            })
        }
    })
})

// Add SectionSlogons
router.post('/addSectionSlogon', (req, res, next) => {
    let newSlogon = new Slogons({
        section: req.body.section,
        slogons: req.body.slogons
    })
    newSlogon.save((err, slogon) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!slogon) {
            res.status(404).end();
        } else {
            res.status(200).json({
                msg: "slogonsSection added successfully",
                dataSent: slogon
            })
        }
    })
})

// Add Slogons to a section
router.post('/addSlogonToSection/:id', (req, res, next) => {
    Slogons.update({
        _id: req.params.id
    }, {
        $push: {
            slogons: {
                en: req.body.en,
                fr: req.body.fr
            }
        }
    }, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!result) {
            res.status(404).end();
        } else {
            res.status(200).json({
                msg: req.body.en + " and " + req.body.fr + " are added successfully to section with id: " + req.params.id,
                status: result
            })
        }
    })
})

// // add card
// router.post('/addcards', (req, res, next) => {
//     let newCard = new Cards({
//         title: {
//             en: req.body.title.en,
//             fr: req.body.title.fr
//         },
//         description: {
//             en: req.body.description.en,
//             fr: req.body.description.fr
//         },
//         icon: req.body.icon,
//         active:req.body.active ,
//         hoverId:req.body.hoverId ,
//     })
//     newCard.save((err, slogon) => {
//         if (err) {
//             res.status(500).send(err)
//         }
//         if (!slogon) {
//             res.status(404).end();
//         } else {
//             res.status(200).json({
//                 msg: "card added successfully",
//                 dataSent: slogon
//             })
//         }
//     })
// })





////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
//                                                                                                //
//                                        put ROUTES                                              //
//                                                                                                //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////

// Modify a heroSectionImg
router.put('/modifyHeroSectionImg/:id', (req, res, next) => {
    Img.update({
        _id: req.params.id
    }, {
        $set: {
            src: req.body.src,
            alt: req.body.alt
        }
    }, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!result) {
            res.status(404).end();
        } else {
            res.status(200).json({
                msg: "img modified successfully",
                status: result
            })
        }
    })
})

// Modify a Slogon to a section
router.put('/modifySlogon/:sectionid/:slogonid', (req, res, next) => {
    Slogons.update({
        _id: req.params.sectionid,
        "slogons._id": req.params.slogonid
    }, {
        $set: {
            "slogons.$": {
                en: req.body.en,
                fr: req.body.fr
            }
        }
    }, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!result) {
            res.status(404).end();
        } else {
            res.status(200).json({
                msg: req.body.en + " and " + req.body.fr + " are modifed successfully to section with id: " + req.params.sectionid,
                status: result
            })
        }
    })
})

// modify QueSoutenonsNous Cards
router.put('/modifyQstnCards/:id', (req, res, next) => {
    Cards.update({
        _id: req.params.id
    }, {
        $set: {
            title:{
                en:req.body.title.en,
                fr:req.body.title.fr
            },
            description:{
                en:req.body.description.en,
                fr:req.body.description.fr
            }
        }
    }, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!result) {
            res.status(404).end();
        } else {
            res.status(200).json({
                msg: "Card modified successfully",
                status: result
            })
        }
    })
})




////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
//                                                                                                //
//                                        DELETE ROUTES                                           //
//                                                                                                //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////

// delete a heroSectionImgs
router.delete('/deleteHeroSectionImg/:id', (req, res, next) => {
    Img.remove({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                msg: "img deleted successfully",
                status: result
            });
        }
    })
});

// delete a slogon from  section
router.delete('/deleteSlogon/:sectionid/:slogonid', (req, res, next) => {
    Slogons.update({
        _id: req.params.sectionid,
        "slogons._id": req.params.slogonid
    }, {
        $pull: {
            "slogons": {
                _id: req.params.slogonid
            }
        }
    }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                msg: "slogon deleted successfully",
                status: result
            });
        }
    })
});





// HeroSection
// const Quotes = require('../models/heroSection/quotes');
// const Imgs = require('../models/heroSection/imgs');
// const HomePage = require('../models/homePage/homePage');
// const ImgModel = require('../models/homePage/homePage');

// // Temoins
// const Temoin = require('../models/temoins/temoins');

// retrieving herosectiondata
// router.get('/quotes', (req,res, next)=>{
//     Quotes.find(function(err, quotes){
//         res.json(quotes);
//     })
// })

// router.get('/homePage', (req, res, next) => {
//     HomePage.find(function (err, data) {
//         res.json(data)
//     })
// })

// add slogon
// router.put('/addSlogon/:id', (req, res, next) => {
//     // let newImg = new ImgModel(
//     //     {
//     //         src:req.body.src,
//     //         alt:req.body.alt
//     //     }

//     // )
//     // newImg.save((err, img)=>{
//     //     if(err){
//     //         res.json(err)
//     //     }
//     //     else{
//     //         res.json(img)
//     //     }
//     // })
//     HomePage.insert({_id:req.params.id}, {"$push":{"name":req.body.name}},{safe:true, upsert:true}, (err, data)=>{
//         if(err){
//             res.status(500).send();
//         }
//         if(!data){
//             res.status(404).end();
//         }
//         else{
//             res.status(200).send(data)
//         }
//     });
// });

// delete contacts
// router.delete('/contact/:id', (req, res, next)=>{
//      Contact.remove({_id: req.params.id}, function(err, result){
//          if(err){
//              res.json(err);
//          }
//          else{
//              res.json(result);
//          }
//      })
// });



module.exports = router;