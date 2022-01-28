import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Cards from "./UI/Cards";
import icon1 from "../assets/InnovativeIdeas-Icons/PNG/Icon (1).png";

const HowItWorks = () => {
    return (
        <>
            <Container>
                <h2 className="mb-3 mt-3">How it works</h2>

                <Cards styleClassName="shadow-sm text-center">
                    <Row>
                        <Col>
                            <img src={icon1} />
                            Submit your idea
                        </Col>
                        <Col>Like and Vote</Col>
                        <Col>Idea is approved</Col>
                        <Col>Nominate</Col>
                        <Col>Implement</Col>
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
