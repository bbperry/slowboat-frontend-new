import React, { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import './Store.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [updateCart, setUpdateCart] = useState(false);




  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (prod) => {
    fetch(`http://localhost:9292/products/${prod.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ ...prod, inventory: (prod.inventory -= 1) }),
    });
    setUpdateCart(!updateCart);
  };


  return (
    <div>
      <h3>5% discount for orders of 10 lbs or more and 10% discount for orders of 20 lbs or more!</h3>
      <Container>
        <Row
          xs={1}
          md={3}
          className="g-4"
          className="d-flex justify-content-center"
        >
      {products.map((product) => (
      <ProductCard key={product.id} product={product} />
      ))}
      </Row>
      </Container>

    </div>
  );
}

export default ProductList;