import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function AddEvent({handleAddEvent}) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [months, setMonths] = useState("");
  const [map, setMap] = useState("");

  const token = localStorage.getItem('token');

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      title,
      time,
      months,
      map,
    };
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newEvent) => handleAddEvent(newEvent));
      e.target.reset()
  }



  return (
    <div className="eventFormContainer">
      <h3>Add Event</h3>
      
        <Form onSubmit={handleSubmit} className="text-center">
          <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                type="text"
                placeholder="Event title..."
                required
                onChange={(event) => setTitle(event.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                type="text"
                placeholder="Event days and time..."
                required
                onChange={(event) => setTime(event.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                type="text"
                placeholder="Months you will be there..."
                required
                onChange={(event) => setMonths(event.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                type="text"
                placeholder="Google Map embed link..."
                required
                onChange={(event) => setMap(event.target.value)}
              />
          </Form.Group>
          <Row>
            <Col></Col>
            <Col className="text-center">
              <Button variant="primary" type="submit">
                Add Event
              </Button>
            </Col>
            <Col></Col>
            <br />
            <Container className="text-center">
              <br />
            </Container>
          </Row>
        </Form>
    </div>
  );
}

export default AddEvent;
