import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardEvent from "./CardEvent";
import {Form, Modal, ModalTitle} from "react-bootstrap";
import axios from 'axios';



export default function Cards(props) {
    const [event, setEvent]= useState('new note');
    const [time,setTime]= useState(Date.now().toString())
    const colours = ['red', 'orange', 'yellow', 'blue', 'green', 'indigo', 'violet'];
    const getColour = () => colours[Math.floor(Math.random() * colours.length)];
    const [colour, setColour] = useState(getColour());
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
   function handleAddNote() {
       return(
        setColour(getColour()),
            setShow(true)
   )}


    function handleSave(e) {
       e.preventDefault();
       console.log(event);
           console.log(time);

       axios.post("http://localhost:8080/add",{
           "note":
        {
            "title":event,
            "time":time
        }
       }).then((response)=>{console.log(response)})
           .catch((err)=>{console.log(err)})

    }

    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor:colour}} id="card">
                <Card.Body>
                    <Card.Title>ADD</Card.Title>
                    <Card.Text>
                        Press the button to add a new note
                    </Card.Text>
                    <Button variant="primary"  onClick={handleAddNote}> ADD</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} claseName="note" size="xs" >
                <Modal.Header closeButton>
                    <Modal.Title>New note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Event</Form.Label>
                            <Form.Control as="textarea" rows={3}  style={{borderColor:'black'}} onChange={(e)=> setEvent(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="datetime-local" style={{borderColor:'black'}} onChange={(e)=> setTime(e.target.value)} />
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>







        </div>
    );
}


