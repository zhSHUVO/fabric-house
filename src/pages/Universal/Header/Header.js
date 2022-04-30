import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../../images/fabric-house.png";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <Navbar
                collapseOnSelect
                className="nav-color"
                expand="lg"
                variant="light"
            >
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="" height="35px" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/blogs">
                                <Nav.Link>Blogs</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/user">
                                <Nav.Link>Dank memes</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
