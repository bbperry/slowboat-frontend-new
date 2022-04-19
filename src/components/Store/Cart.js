import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import './Store.css';


function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/cart_items`)
      .then((r) => r.json())
      .then((items) => {
        setItems(items);
      });
  }, []);


  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.map((item) => (
      <CartCard key={item.id} item={item} />
      ))}

      <button>Checkout</button>
    </div>
  );
}

export default Cart;