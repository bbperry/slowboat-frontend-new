import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Admin({ products }) {

    const [ price, setPrice] = useState("")

    const token = localStorage.getItem("token");

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
      };

  function handleChange(e) {
    e.preventDefault();
      fetch(`http://localhost:3000/products/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({price: price}),
      })
        .then((r) => r.json())
        .then((price) => {
            setPrice(price);
        });
    }

  return (
    <div>
      <Form onSubmit={handleChange}>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="change" onChange={handlePriceChange}/>
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Admin;
