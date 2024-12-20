import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

export default function Header(props) {
    return (
        <>
            <Navbar expand="lg" className="navbar-dark w-100  navi"  style={{
                backgroundColor:"rgb(66,45,80)"
            }}>
                <Container className="py-3">
                    <Navbar.Brand href="/" className="nav-font p-1  navbar-brands">NotePad</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-evenly nav-t">
                        <Nav variant="underline">
                            <Nav.Link className="nav-a " href="/">Today</Nav.Link>
                            <Nav.Link className="nav-a" href="/shop">Calender</Nav.Link>
                            <Nav.Link className="nav-a" href="/course">To-do</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>








        </>
    );
}

