import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import dummyImage from "../../assets/avatar1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHandPointRight,
    faEye,
} from "@fortawesome/free-solid-svg-icons";

const CardGrid = () => {
    return (
        <>
            <div className="cardGridImage">
                <Card.Img variant="top" src={dummyImage} className="mb-3 " />
            </div>

            <div className="content">
                <div className="card_action">
                    <a href="javascript:void(0)">
                        <FontAwesomeIcon icon={faEye} /> 122
                    </a>
                    <a href="javascript:void(0)">
                        <FontAwesomeIcon icon={faHandPointRight} />
                        <span>5</span>
                    </a>
                    <a href="javascript:void(0)">
                        <FontAwesomeIcon icon={faComment} /> <span>8</span>
                    </a>
                </div>
                <Card.Title>Ideam Name</Card.Title>
                <p>
                    <small>Jun 15, 2018</small>
                </p>
                <Card.Text>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem ipusm lorem ipsum lorem ipsum
                </Card.Text>
                <Card.Text className="text-end">
                    <b>-Submitted</b>
                </Card.Text>
            </div>
        </>
    );
};

export default CardGrid;
