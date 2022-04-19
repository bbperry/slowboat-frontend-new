import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import boat from './images/boat.jpg';
import boat1 from './images/boat1.jpg';
import boat2 from './images/boat2.jpg';
import boat3 from './images/boat3.jpg';
import boat4 from './images/boat4.jpg';
import boat5 from './images/boat5.jpg';
import boat6 from './images/boat6.jpg';
import boat7 from './images/boat7.jpg';
import boat8 from './images/boat8.jpg';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home({ currentUser }) {
  const images = [boat, boat1, boat2, boat3, boat4, boat5, boat6, boat7, boat8];

  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [update, setUpdate] = useState(false);
  // currentUser.username ? user_id=currentUser.id : null

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [update]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      text,
      rating,
      user_id: currentUser.id,
    };
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newReview) => handleAddReview(newReview));
    e.target.reset();
  }

  function handleAddReview(newReview) {
    setReviews([...reviews, newReview]);
  }

  function handleDeleteReview(deletedReview) {
    const updatedReviews = reviews.filter(
      (review) => review.id !== deletedReview.id
    );
    setReviews(updatedReviews);
  }

  return (
    <div className="home-container">
      <div className="back">
        <h1 className="hometitle">Slow Boat Fish Co.</h1>
        <h4>
          Bringing sustainably harvested, wild Alaskan salmon from the pristine
          waters of Southeast Alaska to Kitsap County and the greater Puget
          Sound
        </h4>
      </div>

      <div></div>

      <div>
        <Carousel className="carousel" variant="dark" fade pause="false">
          {images.map((img) => {
            return (
              <Carousel.Item interval={2000}>
                <img className="photo" src={img} alt="Fishing Boat Life" />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="home-body">
        <div className="outer-container">
          <div className="review-header">
            <h1>Customer Feedback</h1>
            <h3>share your review</h3>
          </div>
          <div className="inner-container">
            <div className="reviews-container">
              { reviews ? reviews.map((review) => (
                <Reviews
                  key={review.id}
                  review={review}
                  currentUser={currentUser}
                  handleDeleteReview={handleDeleteReview}
                  update={update}
                  setUpdate={setUpdate}
                />
              )) : null }
            </div>
          </div>
          <p className="love">we would love to hear from you!</p>
          {!currentUser.username ? (
            <>
              <LinkContainer to="/login">
                <Button variant="primary" type="submit">
                  Please Login to Review
                </Button>
              </LinkContainer>
            </>
          ) : (
            <>
              <Form onSubmit={handleSubmit} className="review-form">
                <Form.Group className="mb-3" controlId="formBasicText">
                  {/* <Form.Label>Review</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    placeholder="How was our product?..."
                    required
                    onChange={(event) => setText(event.target.value)}
                  />
                </Form.Group>
                <Form.Select
                  aria-label="Rating"
                  onChange={(event) => setRating(event.target.value)}
                >
                  <option >Rating out of 5 stars</option>
                  <option value="1">1 star</option>
                  <option value="2">2 stars</option>
                  <option value="3">3 stars</option>
                  <option value="4">4 stars</option>
                  <option value="5" selected>5 stars</option>
                </Form.Select>
                <Row>
                  <Col></Col>
                  <Col className="text-center">
                    <Button variant="primary" type="submit">
                      Add Review
                    </Button>
                  </Col>
                  <Col></Col>
                  <br />
                  <Container className="text-center">
                    <br />
                  </Container>
                </Row>
              </Form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
