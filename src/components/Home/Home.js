import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import boat from './images/boat.jpg'
import boat1 from './images/boat1.jpg'
import boat2 from './images/boat2.jpg'
import boat3 from './images/boat3.jpg'
import boat4 from './images/boat4.jpg'
import boat5 from './images/boat5.jpg'
import boat6 from './images/boat6.jpg'
import boat7 from './images/boat7.jpg'
import boat8 from './images/boat8.jpg'
import watergif from './images/watergif.gif'



function Home() {
  

const images =[
  boat, boat1, boat2, boat3, boat4, boat5, boat6, boat7, boat8
]



  return (
    <div className='home-container'>
  

    <div className='back'>
      <h1 className='hometitle'>Slow Boat Fish Co.</h1>
      <h4>Bringing sustainably harvested, wild Alaskan salmon from the pristine waters of Southeast Alaska to Kitsap County and the greater Puget Sound</h4>
    </div>

    <div></div>

  <div>
    <Carousel className="carousel" variant='dark' fade pause="false">
        {images.map((img) => {
          return (
            
            <Carousel.Item interval={2000}>
              <img
                className='photo'
                src={img}
                alt='Fishing Boat Life'
              />
            </Carousel.Item>
            
          );
        })}
      </Carousel>
    </div>
    <div className='home-body'>
        <h1 className='greeting'>Home</h1>
        <p>Welcome to Slow Boat Fish Co. Please visit our shop to find some of the highest quality fish products you can find in the area!</p>
    </div>
    </div>
  );
}

export default Home;
