import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import auth from "../../../firebaseinit";
import logo from "../../../images/fabric-house.png";
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

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

                            {user ? (
                                <LinkContainer to="/addnewitem">
                                    <Nav.Link>Add New Item</Nav.Link>
                                </LinkContainer>
                            ) : (
                                <></>
                            )}

                            {user ? (
                                <LinkContainer to="/myitems">
                                    <Nav.Link>My Items</Nav.Link>
                                </LinkContainer>
                            ) : (
                                <></>
                            )}

                            {user ? (
                                <LinkContainer to="/additem">
                                    <Nav.Link>Add Item</Nav.Link>
                                </LinkContainer>
                            ) : (
                                <></>
                            )}

                            {user ? (
                                <LinkContainer to="/manageitems">
                                    <Nav.Link>Manage Items</Nav.Link>
                                </LinkContainer>
                            ) : (
                                <></>
                            )}

                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/blogs">
                                <Nav.Link>Blogs</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            {user ? (
                                <button className="btn" onClick={logout}>
                                    Log Out
                                </button>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>Account</Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
