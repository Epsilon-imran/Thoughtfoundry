import React from "react";
import { Card } from "react-bootstrap";
import "./Card.scss";

const Cards = (props) => {
    return (
        <Card className={`${props.styleClassName} customCards`}>
            {props.title && (
                <Card.Header>
                    <h3>{props.title}</h3>
                    {props.subTitle && (
                        <div className="card-options">{props.subTitle}</div>
                    )}
                </Card.Header>
            )}
            {props.children && <Card.Body>{props.children}</Card.Body>}
            {props.footer && <Card.Footer></Card.Footer>}
        </Card>
    );
};

export default Cards;
