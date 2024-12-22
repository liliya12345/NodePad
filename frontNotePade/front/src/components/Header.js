import React from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";


export default function Header(props) {
    return (
        <>
            <Navbar expand="lg" className="navbar w-100  navi" >
                <Container className="py-3">
                    <Navbar.Brand href="/" className="nav-font p-1  navbar-brands" > NotePad
                        <Image src="https://www.freeiconspng.com/thumbs/notepad-icon/notepad-icon-4.png" style={{width: 50, height: 50}} alt="Loading..."></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-evenly nav-t">
                        <Nav variant="underline">
                            <Nav.Link className="nav-a " href="/">today</Nav.Link>
                            <Nav.Link className="nav-a" href="/">Calender</Nav.Link>
                            <Nav.Link className="nav-a" href="/">To-do</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>








        </>
    );
}

