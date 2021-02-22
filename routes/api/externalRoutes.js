const router = require("express").Router();
const axios = require('axios').default;

require('dotenv').config()
const zomatoKey = process.env.ZOMATO_API_KEY

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

// Exporting the router
module.exports = router;
