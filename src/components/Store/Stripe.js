import React, { useEffect, useState } from 'react';
import './Store.css';
import { useParams } from 'react-router-dom';
// Stripe
// import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckout from 'react-stripe-checkout';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

function Stripe() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
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
      body: JSON.stringify({ charge: charge, price: cost * 100 }),
    };
    fetch('http://localhost:3000/charge_adapter', config).then((res) =>
      res.json(),
      setSuccess(!success),
    );
  }

  //4242 4242 4242 4242

  return (
    <div className="checkout-container">
      {!loading ? (
        <>
          <div className="outer-container">
            <h1>Checkout</h1>
            <div className="inner-container">
              <p>
                Would you like to purchase {cart.quantity} lbs of{' '}
                {cart.product ? <p>{cart.product.name}?</p> : null} for{' '}
                <span className="cost">${cost}</span>
              </p>

              <StripeCheckout
                stripeKey="pk_test_51KQlFUChjqqymPNXeXNtmIIkDHUOZszycjaqofN6C5ZbkGj2ZxZC2SN6YLtSjlpDstJg27vk7BkWgMKJKSaAx5OP003MpNWmgY"
                token={handleToken}
                amount={cost * 100}
              />
              {success ? (
                <>
                  <h1 className="rotate-center">Thank you for your purchase!</h1>
                  <LinkContainer to="/store"><Button className="success-button" variant="primary" type="submit">
                  Back to Store
                </Button></LinkContainer>
                </>
              ) : (
                null
              )}
            </div>
          </div>
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
