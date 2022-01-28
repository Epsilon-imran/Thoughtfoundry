import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Cards from "./UI/Cards";
import icon1 from "../assets/InnovativeIdeas-Icons/PNG/Icon (1).png";
import icon2 from "../assets/InnovativeIdeas-Icons/PNG/Icon (2).png";
import icon3 from "../assets/InnovativeIdeas-Icons/PNG/Icon (3).png";
import icon4 from "../assets/InnovativeIdeas-Icons/PNG/Icon (4).png";
import icon5 from "../assets/InnovativeIdeas-Icons/PNG/Icon (5).png";

const HowItWorks = () => {
    return (
        <>
            <Container>
                <h2 className="mb-3 mt-3">How it works</h2>

                <Cards styleClassName="shadow-sm text-center">
                    <Row>
                        <Col>
                            <img src={icon1} />
                            <h4>Submit your idea</h4>
                        </Col>
                        <Col>
                            <img src={icon2} />
                            <h4>Like and Vote</h4>
                        </Col>
                        <Col>
                            <img src={icon3} />
                            <h4>Idea is approved</h4>
                        </Col>
                        <Col>
                            <img src={icon4} />
                            <h4>Nominate</h4>
                        </Col>
                        <Col>
                            <img src={icon5} />
                            <h4>Implement</h4>
                        </Col>
                    </Row>
                    <div className="text-center mt-5">
                        <Button variant="warning">Submit your Idea</Button>
                    </div>
                </Cards>
            </Container>
        </>
    );
};

export default HowItWorks;
