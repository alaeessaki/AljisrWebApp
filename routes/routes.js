const express = require('express');
const router = express.Router();

// HeroSection
// const Quotes = require('../models/heroSection/quotes');
// const Imgs = require('../models/heroSection/imgs');
const HomePage = require('../models/homePage/homePage');
// // Temoins
// const Temoin = require('../models/temoins/temoins');

// retrieving herosectiondata
// router.get('/quotes', (req,res, next)=>{
//     Quotes.find(function(err, quotes){
//         res.json(quotes);
//     })
// })

router.get('/homePage', (req,res, next)=>{
    HomePage.find(function(err, data){
        res.json(data)
    })
})

// add contact
// router.post('/contact', (req, res, next)=>{
//     let newContact = new Contact({
//         first_name : req.body.first_name,
//         last_name : req.body.last_name,
//         phone: req.body.phone
//     });

//     newContact.save((err, contact)=>{
//         if(err){
//             res.json({msg: 'failed to add contact'});
//         }
//         else{
//             res.json({msg: 'contact added successfully'});
//         }
//     })
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