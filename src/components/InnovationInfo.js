import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./InnovationInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMedal,
    faLightbulb,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import memebersImg from "../../src/assets/members-img-bottom.png";

const InnovationInfo = () => {
    return (
        <section className="innovationLayout">
            {/* Todo
            1. Use the innvoationInfo.module.scss file check the other component on how use it.
            2. Move the Image to scss file.
            3. Image should be background.
            4. Use font awesome for icon  (submitted, in progress, complete) .
            5. Good to have added animation for the icons eg: https://rendro.github.io/easy-pie-chart/
             */}
            <Container>
                <h1 className="text-center mb-5">Innovation Ideas</h1>
                <Row className="justify-content-md-center text-center">
                    <Col className="col-md-auto">
                        <FontAwesomeIcon icon={faLightbulb} />
                        <p>Submitted</p>
                        <p>120</p>
                    </Col>
                    <Col className="col-md-auto">
                        <FontAwesomeIcon icon={faMedal} />
                        <p>In-Progress</p>
                        <p>120</p>
                    </Col>
                    <Col className="col-md-auto">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <p>Completed</p>
                        <p>120</p>
                    </Col>
                </Row>
                <div className="text-center mt-5">
                    <img src={memebersImg} className="img-100" />
                </div>
            </Container>
        </section>
    );
};

export default InnovationInfo;
