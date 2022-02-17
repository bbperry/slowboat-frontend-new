import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import './User.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function LoginForm({handleLogin, currentUser, setCurrentUser }) {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setToken(localStorage.setItem('token', data.jwt));
        handleLogin(data.currentUser);
      });
    setUsername('');
    setPassword('');
    navigate('/#review')
  };

console.log(password)




  return (
    <div>
      <Container>
        <Row>&nbsp;</Row>
        <Row>
          <Col></Col>
          <Col className="text-center">
            <img src="branding.png" alt="logo" height="100px" />
            <h4>Login</h4>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    onChange={handleUsernameChange}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                  />
                </FloatingLabel>
              </Form.Group>

              <Row>
                <Col></Col>
                <Col className="text-center">
                  <Button variant="primary" type="submit" >
                    Login {/*{isLoading ? "Loading..." : "Login"}*/}
                  </Button>
                </Col>
                <Col></Col>
                <br />
                <Container className="text-center">
                  <br />
                </Container>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;
