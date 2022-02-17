import React from 'react';
import './Events.css';


function EventCard({event, handleDeleteEvent, currentUser}) {

    function handleDeleteClick() {
        fetch(`http://localhost:3000/events/${event.id}`, {
          method: 'DELETE',
        })
          .then((r) => r.json())
          .then(() => handleDeleteEvent(event));
      }

  return (
    <div>
      <div >
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
        {currentUser.admin == true ? (
          <button className="remove" onClick={handleDeleteClick}>
            X
          </button>
        ) : null}
        </div>
    </div>
  );
}

export default EventCard;