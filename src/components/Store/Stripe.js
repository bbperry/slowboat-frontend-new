import React from 'react';
import './Store.css';
// Stripe
import { Elements,  } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeCheckout from 'react-stripe-checkout';







function Stripe() {

    const stripePromise = loadStripe('pk_test_51KQlFUChjqqymPNXeXNtmIIkDHUOZszycjaqofN6C5ZbkGj2ZxZC2SN6YLtSjlpDstJg27vk7BkWgMKJKSaAx5OP003MpNWmgY');


    const price=25
    
    function handleToken(token) {
        const charge = {
            token: token.id
        }
    
        const config = {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ charge: charge, price: price * 100})
        }
        fetch('http://localhost:3000/charge_adapter', config)
            .then(res => res.json())
    }

//4242 4242 4242 4242

  return (
    <div>

        <StripeCheckout 
        stripeKey='pk_test_51KQlFUChjqqymPNXeXNtmIIkDHUOZszycjaqofN6C5ZbkGj2ZxZC2SN6YLtSjlpDstJg27vk7BkWgMKJKSaAx5OP003MpNWmgY'
        token={handleToken}
        // billingAddress
        amount={price * 100}
        />

        

   
    </div>
  );
}

export default Stripe;