import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CardEvent(props) {
    return (
        <div>
            <Card style={{ width: '18rem',  backgroundColor:'yellowgreen'}}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>




        </div>
    );
}

