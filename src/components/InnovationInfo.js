import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import bgImg from "../../src/assets/bg.jpg";

const InnovationInfo = () => {
    return (
        <section>
            {/* Todo
            1. Use the innvoationInfo.module.scss file check the other component on how use it.
            2. Move the Image to scss file.
            3. Image should be background.
            4. Use font awesome for icon  (submitted, in progress, complete) .
            5. Good to have added animation for the icons eg: https://rendro.github.io/easy-pie-chart/
             */}
            <img src={bgImg} alt="" />
            <Container>
                <Row>
                    <Col md>Submitted</Col>
                    <Col md>In Progress</Col>
                    <Col md>Complete</Col>
                </Row>
            </Container>
        </section>
    );
};

export default InnovationInfo;
