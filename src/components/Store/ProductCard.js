import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './Store.css';

function ProductCard({ product, currentUser }) {
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate()
  
  const { id, name, desc, price, image, total_quantity } = product;

  const token = localStorage.getItem('token');

  function purchase(e) {
    e.preventDefault(); 
    navigate(`/stripe/${id}`)
    fetch("http://localhost:3000/cart_items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quantity: quantity,
      product_id: id,
      price: price,
    }),
  });
}

  return (
    <div>
      <div className="fish-card">
        <Card style={{ width: '18rem' }} className="fish-card">
          <Card.Img variant="top" src={image} className="product-image" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p>{desc}</p>
              <p>Price: {price} per pound</p>
              {/* <p>Total Quantity: {total_quantity}</p> */}
            </Card.Text>
            {/* <Button variant="primary">Add To Cart</Button> */}
            <Form onSubmit={purchase}>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control required type="number" min="5" placeholder="# of lbs or units if smoked" onChange={(event) => setQuantity(event.target.value)}/>
              </Form.Group>
              <Button variant="primary" type="submit" >
                Purchase
              </Button>
              { currentUser.admin ? <Link to={`/products/${id}`}>Update Price</Link> : null }
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProductCard;
