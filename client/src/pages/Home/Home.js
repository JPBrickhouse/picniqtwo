import React, { useEffect, useState } from "react"

// Importing the various components
import RestCard from "../../components/RestCard/RestaurantCard"

// Importing the container, row, and column from React Bootstrap
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"



const Home = () => {

    // State object holding the restaurant results
    const [restaurantResults, setRestaurantResults] = useState([]);

    // State object holding the park results
    // ---- TBD ----

    // ONE BIG ASYNC FUNCTION THAT SETS VARIOUS STATES AND USES THE DATA
    // await --> get geocoded data (and make sure that it's valid)
    // await --> use geocoded data to get the restaurants
    // await --> use geocoded data to get the parks
    // set state of the restaurant data and parks data

    async function searchForEverything(event) {
        event.preventDefault();

        // Initialize variables for the eventual latitude and longitude
        let latData = 0;
        let longData = 0;

        // Getting the address being searched from the input form text field
        let addressBeingSearched = document.getElementById("addressSearch").value;
        
        // Console logging the address for record keeping
        console.log(addressBeingSearched);

        // Making the Open Cage Geocoder API call
        await fetch("/api/externalRoutes/openCageSearch/" + addressBeingSearched)
            .then(response => response.json())
            .catch(error => console.log(error))
            .then(data => {
                // Setting the coordinates, to be used in the Zomato API search
                latData = data.geometry.lat;
                longData = data.geometry.lng;
            })

        // Making the Zomato API call
        await fetch("/api/externalRoutes/zomatoSearch/" + latData + "/" + longData)
            .then(response => response.json())
            .catch(error => console.log(error))
            .then(data => {

                // Making sure that nearby restaurants exists BEFORE setting the restaurantsResults array
                if (data.nearby_restaurants) {
                    setRestaurantResults(data.nearby_restaurants);
                }

                console.log(data.nearby_restaurants);
            })
    }

    // Making sure that there is information to render prior to rendering
    let restaurantsToRender;
    if (restaurantResults.length !== 0) {
        restaurantsToRender = restaurantResults.map((singleRest) => (<RestCard key={singleRest.restaurant.id} restData={singleRest.restaurant} />))
    }


    return (
        <div>
            <Container>
                {/* Placeholder text */}
                <p>Home</p>

                {/* MAKE RESPONSIVE GRIDS WITH COLUMNS AND ROWS */}



                {/* Hero Image */}

                {/* Instructions / Quick Description */}


                {/* Input Form */}
                <form onSubmit={searchForEverything}>
                    {/* Search Bar */}
                    <input type="text" id="addressSearch" placeholder="Input an address!"></input>
                    {/* Submit Button */}
                    <input type="submit" value="Search"></input>
                </form>

                {/* Individual Restaurant Cards
                Conditionally display the cards ONLY when results have been searched for and found
                Map over the results and pass them as props to the restaurant card */}
                <div>
                    {restaurantsToRender}
                </div>


                {/* Inidividual Parks Card will go here */}


            </Container>
        </div>
    );
}

export default Home;
