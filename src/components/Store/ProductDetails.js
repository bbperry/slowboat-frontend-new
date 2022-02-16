import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Store.css';

function ProductDetails({price, setPrice}) {
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
//   const [price, setPrice] = useState('');

  const { id } = useParams();

  const token = localStorage.getItem('token');

  function handleChange(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({price: price}),
    })
      .then((r) => r.json())
      .then((price) => {
        setPrice(price);
        console.log(price)
    });
}




  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((r) => r.json())
      .then((product) => {
        setProduct(product);
      });
  }, [price]);



  return (
    <div>
      <div className="fish-card">
        <Card style={{ width: '18rem' }} className="fish-card">
          <Card.Img variant="top" src={product.image} className="product-image" />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <p>{product.desc}</p>
              <p>Price: {product.price} per pound</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Form onSubmit={handleChange}>

          <Form.Group className="mb-3" controlId="formBasicText">
            <FloatingLabel
              controlId="floatingTextarea"
              label="Change Price"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Change Price"
                onChange={handlePriceChange}
              />
            </FloatingLabel>
          </Form.Group>

          <Row>
            <Col></Col>
            <Col className="text-center">
              <Button variant="primary" type="submit">
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
      </div>
    </div>
  );
}

export default ProductDetails;
