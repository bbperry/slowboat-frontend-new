import React, { useEffect, useState } from 'react';
import './Store.css';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckout from 'react-stripe-checkout';

function Stripe() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const stripePromise = loadStripe(
    'pk_test_51KQlFUChjqqymPNXeXNtmIIkDHUOZszycjaqofN6C5ZbkGj2ZxZC2SN6YLtSjlpDstJg27vk7BkWgMKJKSaAx5OP003MpNWmgY'
  );

  useEffect(() => {
    fetch(`http://localhost:3000/cart_items`)
      .then((r) => r.json())
      .then((cart) => {
        setCart(cart);
        // setRender(!render)
      });
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  let cost;

  if (cart.quantity >= 10 && cart.quantity < 20) {
    cost = cart.price * cart.quantity * 0.95;
  } else if (cart.quantity >= 20) {
    cost = cart.price * cart.quantity * 0.9;
  } else {
    cost = cart.price * cart.quantity;
  }

  function handleToken(token) {
    const charge = {
      token: token.id,
    };

    const config = {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ charge: charge, cost: cost * 100 }),
    };
    fetch('http://localhost:3000/charge_adapter', config).then((res) =>
      res.json()
    );
  }

  //4242 4242 4242 4242

  return (
    <div className="checkout-container">
      {!loading ? (
        <>
          <p>
            {' '}
            Would you like to purchase {cart.quantity} lbs of{' '}
            {cart.product ? <p>{cart.product.name}?</p> : null} for ${cost}
          </p>

          <StripeCheckout
            stripeKey="pk_test_51KQlFUChjqqymPNXeXNtmIIkDHUOZszycjaqofN6C5ZbkGj2ZxZC2SN6YLtSjlpDstJg27vk7BkWgMKJKSaAx5OP003MpNWmgY"
            token={handleToken}
            amount={cost * 100}
          />
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
}

export default Stripe;
