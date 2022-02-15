import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './Store.css';

function ProductCardSmoked({ product }) {
  const { id, name, desc, price, image, total_quantity } = product;

  return (
    <div>
      <div className="fish-card">
        <Card style={{ width: '18rem' }} className="fish-card">
          <Card.Img variant="top" src={image} className="product-image" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p>{desc}</p>
              <p>Price: ${price} per unit</p>
              <p>Total Quantity: {total_quantity}</p>
            </Card.Text>
            {/* <Button variant="primary">Add To Cart</Button> */}
            <Form>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="# of lbs" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add to Cart
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProductCardSmoked;
