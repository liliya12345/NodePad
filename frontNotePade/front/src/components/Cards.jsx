import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Form, Image, Modal} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
import pen from "../resource/pencil-png.webp";
import bin from "../resource/bin.png";
import pin from "../resource/pin.png";
import pil from "../resource/pil.png";


export default function Cards(props) {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-out-cubic",
        });
    }, []);


    const [newTime, setNewTime] = useState(Date.now().toString())
    const [text, setText] = useState()
    const [logo, setLogo] = useState(pen)
    const [id, setId] = useState(0)
    const [notes, setNotes] = useState([])
    const [event, setEvent] = useState('new note');
    const [time, setTime] = useState(Date.now().toString())
    // const colours = ['#6d828e','#81696f','#988a72','#949782','#70857b', '#9480f1', '#c1d39e', '#f879a3', '#9bd6af', '#dfaea3', '#bad6e9'];
    // const getColour = () => colours[Math.floor(Math.random() * colours.length)];
    const [colour, setColour] = useState('#6d828e');
    const [show, setShow] = useState(false);
    const handleChangeImg = () => {
        setLogo(logo === pen ? pil : pen)
    }


    const handleClose = () => setShow(false);
    useEffect(() => {
        axios.get("http://localhost:8080/getAllNote")
            .then((response) => {
                const notes = response.data
                setNotes(notes)
            }, [setNotes])


    });
    useEffect(() => {
        console.log("rendering..")
    }, [])

    function getColour() {
        const colours = ['#6d828e', '#dc8fa2', '#988a72', '#b5ec7f', '#70857b', '#9480f1', '#c1d39e', '#f879a3', '#9bd6af', '#dfaea3', '#bad6e9'];
        let color = Math.floor(Math.random() * colours.length)
        return setColour(colours[color])
    }

    // const handleShow = () => setShow(true);
    function handleAddNote(e) {
        e.preventDefault();
        return (

            setShow(true)
            // setColour(getColour())
        )
    }

    const getAllNote = () => {

        axios.get("http://localhost:8080/getAllNote")
            .then((response) => {
                const notes = response.data
                setNotes(notes)
            })


    }

    function getTodayNotes() {
        axios.get("http://localhost:8080/getAllNote")
            .then((response) => {
                const notes = response.data
                notes.map((note) => {
                    if (note.title === "122") {
                        setNotes(notes)
                        console.log(notes.title)
                    }
                })

                for (let i = 0; i < notes.length; i++) {
                    if (notes.time === Date.now().toString()) {
                        setNotes(notes)
                        console.log(notes.title)
                    }
                }

            })
    }


    function handleSave(e) {
        e.preventDefault();
        getColour();
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
        return axios.post("http://localhost:8080/delete/" + id, {}
        ).then((response) => {
            getAllNote()
        })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleChangeText(note) {
        let ns= notes
        notes.map(function (n) {
            if (n.id === note.id) {
                n.title = note.title

            }
        })
    }

    return (
        <div>
            <div>
                <div className="tab-content py-1 ">
                    <div id="tab-1" className="tab-pane fade show p-0 active py-5 ">
                        <div className="row g-4 py-5">
                            <div className="col-lg-12">
                                <div className="row g-3">
                                    <Card data-aos="fade-right" data-aos-delay="10" style={{
                                        width: '17rem',
                                        height: "200px",
                                        backgroundColor: '#bad6e5',
                                        color: "black"
                                    }} id="card" className="col-md-6 col-lg-4 col-xl-3  img-fluid">
                                        <Card.Body>
                                            <Card.Title data-aos="fade-up" data-aos-delay="20"
                                                        style={{color: "black"}}>NotePad</Card.Title>
                                            <Image src="https://pngimg.com/d/smiley_PNG63.png" alt="loading..."
                                                   style={{width: 20, height: 20}}/>
                                            <Card.Text data-aos="fade-down" data-aos-delay="50">
                                                Press the button to add a new note
                                            </Card.Text>
                                            <Button style={{backgroundColor: '#3f4c5a', width: 50, height: 40}}
                                                    variant="primary" onClick={handleAddNote}> + </Button>
                                        </Card.Body>
                                    </Card>

                                    {notes.map((note) => (

                                        <Card data-aos="fade-left" key={note.id}
                                              style={{width: '17rem', backgroundColor: colour}}
                                              id="card-new"
                                              className="col-md-6 col-lg-4 col-xl-3  fluid ">
                                            <Card.Body>
                                                <Card.Title className="" style={{color: "black"}}>
                                                    <div className="img-card">
                                                        <Image
                                                            src={pin}
                                                            alt="loading..." style={{width: 30, height: 30}}/>

                                                        <Button
                                                            style={{backgroundColor: colour, borderColor: colour[2]}}
                                                            variant="primary"
                                                            onClick={(e) => {
                                                                handleEdit(note.id)
                                                            }}>
                                                            <Image
                                                                src={logo}
                                                                style={{width: 20, height: 20}}/>

                                                        </Button>
                                                        <Button style={{backgroundColor: colour}} variant="primary"
                                                                onClick={(e) => handleDelete(note.id)}>
                                                            <Image
                                                                src={bin}
                                                                style={{width: 20, height: 20}}/>
                                                        </Button>

                                                    </div>


                                                    <Form.Control as="textarea" rows={2} style={{
                                                        backgroundColor: colour,
                                                        borderColor: colour,
                                                        color: "black"
                                                    }} type="text" placeholder={note.title}
                                                        onChange={(e) => setText(e.target.value)}>
                                                        {/*//           onChange={handleChangeText(note)}>*/}
                                                    </Form.Control>
                                                </Card.Title>
                                                <Card.Text className="m-1">
                                                    <Form.Control style={{
                                                        backgroundColor: colour,
                                                        borderColor: colour,
                                                        color: "black"
                                                    }} type="datetime-local" defaultValue={note.time}
                                                                  onChange={(e) => setNewTime(e.target.value)}>

                                                    </Form.Control>

                                                </Card.Text>


                                            </Card.Body>
                                        </Card>


                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Modal data-aos="fade-down" data-aos-delay="50" show={show} onHide={handleClose} claseName="note" size="xs">
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


