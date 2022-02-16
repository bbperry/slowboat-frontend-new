import React from 'react';
import { useEffect, useState } from 'react';
import AddEvent from './AddEvent';
import './Events.css';

function Events() {

  const token = localStorage.getItem('token');

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

 

  return (
    <section className="events-container">
      <div>
        <h1>Events</h1>
        { events.map((event) => (
        <div key={event.id}>
        <h4>{event.title}</h4>
        <h5>{event.time}</h5>
        <h6>{event.months}</h6>
        <iframe
          src={event.map}
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        </div>
        ))}
      </div>

      {token ? (
        <div className="blob">
          <AddEvent handleAddEvent={handleAddEvent}/>
        </div>
      ) : (
        <></>
      )}


      {/* <div>
        <h1>Pop-up Sales</h1>
        <p>Stay tuned for upcoming dates and locations!</p>
      </div> */}
    </section>
  );
}

export default Events;
