import React from 'react';
import './Events.css';

function Events() {
  return (
    <section className="events-container">
      <div>
        <h1>Farmers Markets</h1>
        <h4>Bainbridge Farmers Market</h4>
        <h5>Saturdays 10AM-2PM</h5>
        <h6>August-December</h6>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.005508879627!2d-122.52149484876576!3d47.6260241790838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54903eb0b2ad8697%3A0xcfd87a1db8399637!2sBainbridge%20Island%20Farmers%E2%80%99%20Market!5e0!3m2!1sen!2sus!4v1643936244012!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div>
        <h1>Pop-up Sales</h1>
      </div>
    </section>
  );
}

export default Events;
