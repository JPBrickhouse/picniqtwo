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
    // set state of the restaurant data

    async function searchForRestaurants(event) {
        event.preventDefault();

        // Getting the address being searched from the input form text field
        let addressBeingSearched = document.getElementById("addressSearch").value;
        // Console logging the address for record keeping
        console.log(addressBeingSearched);

        // Hardcoded coordinates for now...
        let latData = 41.891899;
        let longData = -87.623772;

        // Making the Zomato API call
        fetch("/api/externalRoutes/zomatoSearch/" + latData + "/" + longData)
            .then(response => response.json())
            .catch(error => console.log(error))
            .then(data => {

                // Making sure that nearby restaurants exists BEFORE setting the restaurantsResults array
                if (data.nearby_restaurants) {
                    setRestaurantResults(data.nearby_restaurants)
                }

                console.log(data.nearby_restaurants)
            })




    }

    // Making sure that there is information to render prior to rendering
    let restaurantsToRender;
    if (restaurantResults.length !== 0) {
        restaurantsToRender = testData.nearby_restaurants.map((singleRest) => (<RestCard key={singleRest.restaurant.id} restData={singleRest.restaurant} />))
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
                <form onSubmit={searchForRestaurants}>
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
