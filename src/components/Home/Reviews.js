import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Home.css';

function Reviews({ review, handleDeleteReview, currentUser }) {
  
  function handleDeleteClick() {
    fetch(`http://localhost:3000/reviews/${review.id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => handleDeleteReview(review));
  }

  return (
    <div className="review-container">
      <div className="inside-review">
        <div className="review-title">
          <h3 className="review-name">
            {review.user.username} &nbsp;{' '}
            {review.rating == 5 ? (
              <span className="rating-number">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </span>
            ) : (
              <span className="rating-number">
                {review.rating}
                <span class="fa fa-star checked"></span>
                <span>'s</span>
              </span>
            )}
          </h3>
          <p>{review.created_at.slice(0, 10)}</p>
        </div>
        <p className="review-text">{review.text}</p>

        {currentUser.id === review.user_id ? (
          <button className="remove" onClick={handleDeleteClick}>
            X
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Reviews;
