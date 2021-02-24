// Importing the router package from express
const router = require("express").Router();
// Importing the axios package
const axios = require('axios').default;
// Importing the opencage package
const opencage = require("opencage-api-client");
// ---------------------------------------------------------------
// Getting the associated API keys
require('dotenv').config()
const zomatoKey = process.env.ZOMATO_API_KEY
// ---------------------------------------------------------------
// ZOMATO API CALL
router.get("/zomatoSearch/:lat/:long", function (req, res) {

    // Getting the latitude and longitude
    let latData = req.params.lat;
    let longData = req.params.long;

    // Building the queryURL to pass to the API get request
    let zomatoQueryURL = "https://developers.zomato.com/api/v2.1/geocode?lat=" + latData + "&lon=" + longData;

    // Making the axios request to the Zomato API
    axios.get(zomatoQueryURL, {
        headers: {
            'user-key': zomatoKey
        }
    })
        .then(response => {
            // Promise
            // Actions with the response
            // NEED to send response.data
            // Otherwise, I was getting "TypeError: Converting circular structure to JSON"
            res.send(response.data)
            // console.log(response.data)
        })
        .catch(error => console.log(error))
})
// ---------------------------------------------------------------
// OPEN CAGE API CALL
router.get("/openCageSearch/:addressQuery", function (req, res) {

    // Getting the address being searched
    let addressBeingSearched = req.params.addressQuery;
    if (addressBeingSearched !== "") {
        // Making the API call to OpenCage using the installed package and the address being searched
        // https://opencagedata.com/tutorials/geocode-in-nodejs
        opencage.geocode({ q: addressBeingSearched, no_annotations: 1 }).then(data => {
            // console.log(JSON.stringify(data));
            if (data.status.code === 200) {
                if (data.results.length > 0) {
                    let place = data.results[0];
                    console.log(place.formatted);
                    console.log(place.geometry);
                    res.send(place);
                }
            } else if (data.status.code === 402) {
                console.log('hit free trial daily limit');
                console.log('become a customer: https://opencagedata.com/pricing');
            } else {
                // other possible response codes:
                // https://opencagedata.com/api#codes
                console.log('error', data.status.message);
            }
        }).catch(error => {
            console.log('error', error.message);
        });

    }
})
// ---------------------------------------------------------------
// Exporting the router
module.exports = router;
