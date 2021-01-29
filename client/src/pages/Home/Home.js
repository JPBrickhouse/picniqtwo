import React, { useEffect, useState } from "react"

// Importing the various components
import RestCard from "../../components/RestCard/RestaurantCard"

// Importing the container, row, and column from React Bootstrap
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"



// TEST DATA FOR NOW
import testData from "../../test-data.json"


const Home = () => {

    // State objects holding the results

    // Move the Zomato call out of the useEffect and into a function
    // (The function will get called when the submit button is pushed)
    // For now, it exists in useEffect and only gets called once when the page loads
    // useEffect(() => {
    //     // Using fetch to call the Zomato API
    //     fetch("/api/externalRoutes/zomatoSearch")
    //         .then(response => response.json())
    //         .catch(error => console.log(error))
    //         .then(data => console.log(data))
    // }, [])



    // ONE BIG ASYNC FUNCTION THAT SETS VARIOUS STATES AND USES THE DATA
    // await --> get geocoded data (and make sure that it's valid)
    // await --> use geocoded data to get the restaurants
    // set state of the restaurant data


    // Making sure that there is information to render prior to rendering
    let restaurantsToRender;
    if(testData.nearby_restaurants) {
        restaurantsToRender = testData.nearby_restaurants.map((singleRest) => (<RestCard key={singleRest.restaurant.id} restData={singleRest.restaurant}/>))
    }


    return (
        <div>
            <Container>

                {/* MAKE RESPONSIVE GRIDS WITH COLUMNS AND ROWS */}



                {/* Hero Image */}

                {/* Instructions / Quick Description */}

                {/* Search Bar */}

                {/* Search Button */}




                {/* Placeholder text */}
                <p>Home</p>
                
                
                {/* Individual Restaurant Card
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
