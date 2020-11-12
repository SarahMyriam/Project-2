const express = require("express");
const router = express.Router();

require('dotenv').config();
console.log(process.env.API_KEY);

const axios = require('axios');

//get stock info for IBM
router.get("/", (req, res, next) => {
    // console.log("I am here");
    const IBM = "IBM"
    axios
    .get(`https://cloud.iexapis.com/stable/stock/${IBM}/quote?token=${process.env.API_KEY}`
    ).then( ({ data }) => {
        //   console.log(data);
        //   res.redirect("/");
    //    optionally return data created
        console.log("IBM");
        res.json(data);
       console.log(data.companyName);
       console.log(data.iexRealtimePrice);
       console.log(data.change);
       console.log(data.changePercent);
       })
       .catch(err => {
            console.log(err);
          res.status(500);
          next(err);
       });
 });

 //get stock info for tesla
 router.get("/", (req, res, next) => {
    console.log("I am here");
    const TSLA = "TSLA"
    axios
    .get(`https://cloud.iexapis.com/stable/stock/${TSLA}/quote?token=${process.env.API_KEY}`
    ).then( ({ data }) => {
        //   console.log(data);
        //   res.redirect("/");
    //    optionally return data created
        console.log("Tesla");
        res.json(data);
       console.log(data.companyName);
       console.log(data.iexRealtimePrice);
       console.log(data.change);
       console.log(data.changePercent);
       })
       .catch(err => {
            console.log(err);
          res.status(500);
          next(err);
       });
 });

 //get stock infor for biogen
 router.get("/", (req, res, next) => {
    console.log("I am here");
    const BIIB = "BIIB"
    axios
    .get(`https://cloud.iexapis.com/stable/stock/${BIIB}/quote?token=${process.env.API_KEY}`
    ).then( ({ data }) => {
        //   console.log(data);
        //   res.redirect("/");
    //    optionally return data created
        console.log("Biogen");
        res.json(data);
       console.log(data.companyName);
       console.log(data.iexRealtimePrice);
       console.log(data.change);
       console.log(data.changePercent);
       })
       .catch(err => {
            console.log(err);
          res.status(500);
          next(err);
       });
 });



 module.exports = router;


