import React, { useEffect, useState } from 'react';
import './Store.css';

function CartCard({ item }) {

    let subtotal = item.quantity * item.price


  return (
    <div>
      <hr></hr>
        <h3>{item.product.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Subtotal: ${subtotal}</p>
      <hr></hr>

    </div>
  );
}

export default CartCard;
