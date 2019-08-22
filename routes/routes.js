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

// add benevole
router.post('/addBenevoles', (req, res, next) => {
    let newBenevole = new Benevoles({
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        email: req.body.email,
        nom_etablissement: req.body.nom_etablissement,
        telephone: req.body.telephone,
        nom_association: req.body.nom_association,
        exp_domaine_association: req.body.exp_domaine_association
    })
    newBenevole.save((err, benevole) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!benevole) {
            res.status(404).end();
        } else {
            res.status(200).json({
                msg: "slogonsSection added successfully",
                dataSent: benevole
            })
        }
    })
})

// add Event 
router.post('/addEvent', (req, res, next) => {
    let newEvent = new Events({
        date: req.body.date,
        title: req.body.title,
        description: {
            en: req.body.description.en,
            fr: req.body.description.fr
        }
    })
    newEvent.save((err, event) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!event) {
            res.status(404).end();
        } else {
            res.status(200).json({
                msg: "event added successfully",
                dataSent: event
            })
        }
    })
})

// add participant to an event
router.post('/addParticipant/:id', (req, res, next) => {
    var id = req.params.id
    Events.update({
        _id: id
    }, {
        $push: {
            participants: {
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                tel: req.body.tel
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
                msg: req.body.name + " " + req.body.lastname + " is participant now to the event with id: " + req.params.id,
                status: result
            })
        }
    })
})

// add Subscriber
router.post('/addSubscriber', (req, res, next) => {
    let newSubscriber = new Subscribers({
        email: req.body.email,
    })
    newSubscriber.save((err, subscriber) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!subscriber) {
            res.status(404).end();
        } else {
            res.status(200).json(err)
        }
    })
})

// add Aljisr Memeber

router.post('/addAljisrMember', (req, res, next) => {
    let newMember = new Members({
        name: {
            en: req.body.name.en,
            fr: req.body.name.fr
        },
        lastname: {
            en: req.body.lastname.en,
            fr: req.body.lastname.fr
        },
        quote: {
            en: req.body.quote.en,
            fr: req.body.quote.fr
        },
        status: {
            en: req.body.status.en,
            fr: req.body.status.fr
        },
        img: {
            src: req.body.img.src,
            alt: req.body.img.alt
        }
    })
    newMember.save((err, member) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!member) {
            res.status(404).end();
        } else {
            res.status(200).json(member)
        }
    })
})

// add news 
router.post('/addNews', (req, res, next) => {
    let newNew = new News({
        title: {
            en: req.body.title.en,
            fr: req.body.title.fr
        },
        description: {
            en: req.body.description.en,
            fr: req.body.description.fr
        },
        img: {
            src: req.body.img.src,
            alt: req.body.img.alt,
        },
        auth: req.body.auth
    })
    newNew.save((err, New) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!New) {
            res.status(404).end();
        } else {
            res.status(200).json(New)
        }
    })
})


// add Temoin
router.post('/addTemoin', (req, res, next) => {
    let newTemoin = new Temoins({
        src:req.body.src,
        alt:req.body.alt,
        testimoin:{
            en:req.body.testimoin.en,
            fr:req.body.testimoin.fr
        },
        profile:{
            en:req.body.profile.en,
            fr:req.body.profile.fr
        },
        status:{
            en:req.body.status.en,
            fr:req.body.status.fr
        }
    })
    newTemoin.save((err, temoin) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!temoin) {
            res.status(404).end();
        } else {
            res.status(200).json(temoin)
        }
    })
})



// add Trophie
router.post('/addTrophie', (req, res, next) => {
    let newTrophie = new Trophies({
        title:{
            en:req.body.title.en,
            fr:req.body.title.fr
        },
        description:{
            en:req.body.description.en,
            fr:req.body.description.fr
        },
        img:{
            src:req.body.img.src,
            alt:req.body.img.alt
        }
    })
    newTrophie.save((err, trophie) => {
        if (err) {
            res.status(500).send(err)
        }
        if (!trophie) {
            res.status(404).end();
        } else {
            res.status(200).json(trophie)
        }
    })
})

// add Trophie




// add card
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

// Modify a Slogon of a section
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
            title: {
                en: req.body.title.en,
                fr: req.body.title.fr
            },
            description: {
                en: req.body.description.en,
                fr: req.body.description.fr
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

// delete benevole
router.delete('/deletebenevole/:id', (req, res, next) => {
    Benevoles.remove({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                msg: "benevole deleted successfully",
                status: result
            });
        }
    })
});

// delete aljisr memebre
router.delete('/deleteMember/:id', (req, res, next) => {
    Members.remove({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                msg: "member deleted successfully",
                status: result
            });
        }
    })
});


// delete new 
router.delete('/deleteNew/:id', (req, res, next) => {
    News.remove({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                msg: "new deleted successfully",
                status: result
            });
        }
    })
});

// delete Temoin
router.delete('/deleteTemoin/:id', (req, res, next) => {
    Temoins.remove({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                msg: "temoin deleted successfully",
                status: result
            });
        }
    })
});

// delete Trophie
router.delete('/deleteTrophie/:id', (req, res, next) => {
    Trophies.remove({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                msg: "trophie deleted successfully",
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

// delete event 
router.delete('/deleteEvent/:id', (req, res, next) => {
    Events.remove({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                msg: "event deleted successfully",
                status: result
            });
        }
    })
});

// delete participant of an event 
router.delete('/deleteEventParticipant/:eventid/:participantid', (req, res, next) => {
    Events.update({
        _id: req.params.eventid,
        "participants._id": req.params.participantid
    }, {
        $pull: {
            "participants": {
                _id: req.params.participantid
            }
        }
    }, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                msg: "participant deleted successfully",
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