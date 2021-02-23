import React from "react";

// Importing the ExternalLink component
import ExternalLink from "../../components/ExternalLink/ExternalLink"

// Importing components from React Bootstrap
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"

// Importing the Font Awesome package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    // Class to help center / justify the page content
    const colCenterClassName = "d-flex justify-content-center";
    // Style to increase the font size of the <p> text
    const pTextSize = { "fontSize": "24px" };

    return (
        <div>
            <Container>
                <Row className={colCenterClassName}>
                    <h1>Meet the developer!</h1>
                </Row>
                <br />
                <Row>
                    <Col lg={3}>
                        <Row>
                            <Col className={colCenterClassName}>
                                <Image src={"https://avatars1.githubusercontent.com/u/63511774?s=400&u=399ed99b324c1fb9db704a3d130080e7f66b3924&v=4"} roundedCircle fluid />
                            </Col>
                        </Row>
                        <br />
                    </Col>
                    <Col lg={9}>
                        <Row>
                            <Col className={colCenterClassName}>
                                <p style={pTextSize}>
                                    I have built <span><ExternalLink urlContent={"https://www.mka.com/projects/featured/150-north-riverside"} linkContent={"office skyscrapers"} /></span> in Chicago,
                                    created <span><ExternalLink urlContent={"https://www.atlasobscura.com/places/epiccampus"} linkContent={"whimsical buildings"} /></span> for Epic Systems,
                                    and designed a space toilet – <span><ExternalLink urlContent={"https://www.nasa.gov/feature/nasa-names-lunar-loo-challenge-winners"} linkContent={"the THRONE"} /></span> – for NASA.
                                    <br />
                                    <br />
                                    <b> Now I build the future through code. </b>
                                    <br />
                                    <br />
                                    Visit my <span><ExternalLink urlContent={"https://jpbrickhouse.github.io/portfolio/"} linkContent={"portfolio"} /></span>,
                                    or reach and out connect!
                                    <br />
                                    <br />
                                    <b>Let's build something together!</b>
                                </p>
                            </Col>
                        </Row>
                        <br />
                    </Col>
                </Row>
                <Row className={colCenterClassName}>
                    <Col md={1}></Col>
                    <Col><ExternalLink urlContent={"https://www.linkedin.com/in/joshpbrickman/"} linkContent={<FontAwesomeIcon icon={faLinkedin} size="6x" color="#0e76a8" />} /></Col>
                    <Col><ExternalLink urlContent={"https://github.com/JPBrickhouse"} linkContent={<FontAwesomeIcon icon={faGithub} size="6x" color="black" />} /></Col>
                    <Col><ExternalLink urlContent={"mailto:joshpbrickman@gmail.com"} linkContent={<FontAwesomeIcon icon={faEnvelope} size="6x" color="#808080" />} /></Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
