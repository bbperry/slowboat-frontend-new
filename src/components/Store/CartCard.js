import React, { useEffect, useState } from 'react';
import './Store.css';

function CartCard({ item }) {
  return (
    <div>
      <hr></hr>
        <h6>{item.product.name}</h6>
      <hr></hr>

    </div>
  );
}

export default CartCard;
