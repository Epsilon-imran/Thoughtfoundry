import React from "react";
import classes from "./Header.module.scss";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
    return (
        <header>
            {/* // ToDo:
            1. Make the navigation transparent only in home page. In other page on scroll how the background show similar way it should be there in other pages.
            2. scroll down there should be background added.
            3. Should have the login and logout option.
            4. its should responsive.
            5. For animation effect and scroll background change refere 
            https://preview.themeforest.net/item/olympus-responsive-community-social-network-wordpress-theme/full_screen_preview/22788499?_ga=2.219493082.2130922415.1642943514-351465467.1642943514
            */}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
