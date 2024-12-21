import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardEvent from "./CardEvent";
import {Container, Form, Modal, ModalTitle} from "react-bootstrap";
import axios from 'axios';


export default function Cards(props) {
   const[newTime,setNewTime]=useState(Date.now())
    const[text,setText]=useState()
    const [id,setId]= useState(0)
    const [notes, setNotes] = useState([])
    const [event, setEvent] = useState('new note');
    const [time, setTime] = useState(Date.now().toString())
    const colours = ['red', 'orange', 'yellow', 'blue', 'green', 'indigo', 'violet'];
    const getColour = () => colours[Math.floor(Math.random() * colours.length)];
    const [colour, setColour] = useState(getColour());
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    useEffect(() => {
        axios.get("http://localhost:8080/getAllNote")
            .then((response) => {
                const notes = response.data
                setNotes(notes)
            },[setNotes])


    });
    // const handleShow = () => setShow(true);
    function handleAddNote() {
        return (
            setColour(getColour()),
                setShow(true)
        )
    }

    const getAllNote = () => {

        axios.get("http://localhost:8080/getAllNote")
            .then((response) => {
                const notes = response.data
                setNotes(notes)
            })

    }


    function handleSave(e) {
        e.preventDefault();
        console.log(event);
        console.log(time);

        axios.post("http://localhost:8080/add", {
                // "note":
                "id": id,
                "title": event,
                "time": time
            }
        ).then((response) => {
            handleClose()
            getAllNote()
        })
            .catch((err) => {
                console.log(err)
            })

    }


    function handleEdit(id) {


        return  axios.post("http://localhost:8080/edit", {
                // "note":
                "id": id,
                "title": text,
                "time": newTime
            }
        ).then((response) => {
            getAllNote()
        })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleDelete(id) {
        return  axios.post("http://localhost:8080/delete/"+id, {

            }
        ).then((response) => {
            getAllNote()
        })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <Card style={{width: '18rem', backgroundColor: colour}} id="card">
                <Card.Body>
                    <Card.Title>ADD</Card.Title>
                    <Card.Text>
                        Press the button to add a new note
                    </Card.Text>
                    <Button variant="primary" onClick={handleAddNote}> ADD</Button>
                </Card.Body>
            </Card>
            <div>
                <div className="tab-content py-5 ">
                    <div id="tab-1" className="tab-pane fade show p-0 active p-5 ">
                        <div className="row g-4 py-5">
                            <div className="col-lg-12">
                                <div className="row g-3 ">
                                    {notes.map((note) => (



                                        <Card  key ={note.id} style={{width: '18rem', backgroundColor: colour}} id="card" className="m-3">
                                            <Card.Body>
                                                <Card.Title>
                                                    <Form.Control type="text" placeholder={note.title}  onChange={(e) => setText(e.target.value)}>

                                                    </Form.Control>
                                                </Card.Title>
                                                <Card.Text>
                                                    <Form.Control type="datetime-local" defaultValue={note.time} onChange={(e) =>setNewTime(e.target.value)}>

                                                    </Form.Control>

                                                </Card.Text>
                                                <Button variant="primary" onClick={(e) => handleEdit(note.id)}> Edit</Button>
                                                <Button variant="primary" onClick={(e) => handleDelete(note.id)}> Delete</Button>
                                            </Card.Body>
                                        </Card>


                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} claseName="note" size="xs">
                <Modal.Header closeButton>
                    <Modal.Title>New note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Event</Form.Label>
                            <Form.Control as="textarea" rows={3} style={{borderColor: 'black'}}
                                          onChange={(e) => setEvent(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="datetime-local" style={{borderColor: 'black'}}
                                          onChange={(e) => setTime(e.target.value)}/>
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


