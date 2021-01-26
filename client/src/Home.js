import React, {useEffect} from "react"

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

    return (
        <div>
            
            {/* Hero Image */}

            {/* Instructions / Quick Description */}

            {/* Search Bar */}
            
            {/* Search Button */}
            
            {/* Results will go here */}
            {/* Components for the restaurants */}
            {/* Components for the parks */}

            {/* Placeholder text */}
            <p>Home</p>
        </div>
    );
}

export default Home;
