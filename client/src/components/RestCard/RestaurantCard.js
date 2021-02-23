import React, { useState } from "react";

// Importing the ExternalLink component
import ExternalLink from "../../components/ExternalLink/ExternalLink"

// Importing the card component from React Bootstrap
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"


const RestaurantCard = (props) => {

    let restaurantData = props.restData;
    
    // Need a SAVE button to display if the user is logged in or not

    return (
        <div>
            <Card style={{"width": '18rem', "display": "flex", "textAlign":"center"}}>
                {/* <Card.Img variant="top" src="https://picsum.photos/100x180" /> */}
                {/* <Image src="https://picsum.photos/180/100" fluid/> */}
                <Image src={restaurantData.thumb} fluid />
                <Card.Body>
                    <Card.Title>{restaurantData.name}</Card.Title>
                    <Card.Text>{restaurantData.cuisines}</Card.Text>
                    <hr />
                    <Card.Link href={restaurantData.menu_url} target="_blank" rel="noreferrer">Menu</Card.Link>
                    <hr />
                    <Card.Text>{restaurantData.location.address}</Card.Text>
                    <hr />
                    <Card.Link href={restaurantData.url} target="_blank" rel="noreferrer">Contact {restaurantData.name}</Card.Link>
                </Card.Body>
            </Card>
            <br/>
        </div>
    );
}

export default RestaurantCard;
