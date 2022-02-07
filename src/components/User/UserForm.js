import React from 'react';
import './User.css';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UserForm({handleLogin}) {


  return (
    
    <div className='login-container'>
          <Container className="form-tabs">
      <Row>
          <Col></Col>
          <Col xs={6} >
          
            <Tabs
              defaultActiveKey="login"
              className="mb-3"
              className="form-border"
            >
              <Tab eventKey="login" title="Login" className="form-body">
                <LoginForm
                  handleLogin={handleLogin}
                />
              </Tab>
              <Tab eventKey="signup" title="Sign up" className="form-body">
                <SignupForm
                  handleLogin={handleLogin}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col></Col>
        
      </Row>
      </Container>
    </div>
  );
}

export default UserForm;