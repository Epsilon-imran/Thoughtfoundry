import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Footer.module.scss";
import epsilonLogo from "../assets/epsilon.png";

const Footer = () => {
    return (
        <footer className={`${classes.footer} py-4`}>
            <Container
                fluid
                className="justify-content-between d-flex align-items-center"
            >
                <small className="fs-8">
                    Copyright &copy; Lorem ipsum doloar sit amet. All rights
                    reserved.
                </small>
                <img src={epsilonLogo} alt="" className={classes.footerLogo} />
            </Container>
        </footer>
    );
};

export default Footer;
