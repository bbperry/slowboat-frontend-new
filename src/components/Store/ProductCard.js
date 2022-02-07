import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './Store.css';


function ProductCard({product}) {

const { id, name, desc, price, image , total_quantity } = product 


  return (
    <div>
      <Card style={{ width: '18rem' }} className='fish-card'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>{desc}</p>
            <p>Price: {price} per pound</p>
            <p>Total Quantity: {total_quantity}</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;