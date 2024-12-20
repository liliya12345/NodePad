import React from 'react';

import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import Cards from "./Cards";

export default function Home(props) {
    return (
        <>
            <Header/>

            <div className="m-0  w-100"
                 >
                <Container className="my-0  w-100">
                    <Row>
                        <Col lg={3} xs={6} className="justify-content-center  text-center note my-5">
                            <Cards/>
                        </Col>


                    </Row>

                </Container>
            </div>


        </>
    );
}

