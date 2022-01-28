import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../assets/user.png";
import { Animated } from "react-animated-css";

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, [scroll]);

    const Test = () => {
        return (
            <div className="d-inline-flex align-items-center">
                <img src={profilePic} className="avatar" />
                <span className="ml-2 d-none d-lg-block">
                    <span className="user_name">Jane Doe</span>
                </span>
            </div>
        );
    };

    return (
        <header className="header">
            <Navbar
                expand="lg"
                fixed="top"
                variant=""
                className={scroll ? "bg-black" : ""}
            >
                <Container fluid>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">
                                <FontAwesomeIcon icon={faHouse} /> Home
                            </Nav.Link>
                            <Nav.Link href="#home">
                                <FontAwesomeIcon icon={faLightbulb} />
                                Ideas
                            </Nav.Link>
                        </Nav>
                        <Button variant="outline-warning" size="sm">
                            Submit your idea
                        </Button>
                        <NavDropdown title={<Test />} id="basic-nav-dropdown">
                            <Animated
                                animationIn="flipInX"
                                animationOut="flipOutX"
                                isVisible={true}
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    My page
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Logout
                                </NavDropdown.Item>
                            </Animated>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
