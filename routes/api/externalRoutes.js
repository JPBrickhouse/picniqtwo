const router = require("express").Router();
const axios = require('axios').default;

require('dotenv').config()
const zomatoKey = process.env.ZOMATO_API_KEY


router.get("/zomatoSearch", function (req, res) {

    // Eventually incorporate lat and long dynamically

    // Making the axios request to the Zomato API
    axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=41.891899&lon=-87.623772`, {
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
            console.log(response.data)
        })
        .catch(error => console.log(error))
})

// Exporting the router
module.exports = router;