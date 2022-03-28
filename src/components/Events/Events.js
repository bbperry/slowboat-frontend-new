import React from 'react';
import { useEffect, useState } from 'react';
import AddEvent from './AddEvent';
import EventCard from './EventCard';
import './Events.css';

function Events({ currentUser }) {
  const token = localStorage.getItem('token');

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }


  function handleDeleteEvent(deletedEvent) {
    const updatedEvents = events.filter(
      (event) => event.id !== deletedEvent.id
    );
    setEvents(updatedEvents);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/events/${events.id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => handleDeleteEvent(events));
  }

  return (
    <section className="events-container">
      <div>
        <h1>Events</h1>
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            handleDeleteEvent={handleDeleteEvent}
            currentUser={currentUser}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>

      {currentUser.admin ? (
        <div className="blob">
          <AddEvent handleAddEvent={handleAddEvent} />
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
