// src/components/EventCalendar/EventCalendar.js

import React from "react";
import events from "@site/src/data/events.json";
import styles from "./EventCalendar.module.css";
import { format } from "date-fns";

function EventCalendar() {
  // Sort the events by start date

  const sortedEvents = [...events].sort((a, b) => {
    return new Date(a.start.utc).getTime() - new Date(b.start.utc).getTime();
  });
  return (
    <div className={styles.calendar}>
      {sortedEvents.map((event) => {
        // Dynamically import the image
        /*let EventImage = null;
        if (event.localImagePath) {
          try {
            EventImage = require(`${event.localImagePath}`).default;
          } catch (error) {
            console.error(`Error loading image for event ${event.id}:`, error);
          }
        }*/
        const eventImg = event.localImagePath;

        return (
          <div key={event.id} className={styles.eventCard}>
            {eventImg && (
              <img
                src={eventImg}
                alt={`${event.name.text} logo`}
                className={styles.eventImage}
              />
            )}
            <h3>{event.name.text}</h3>
            <p>
              {format(
                new Date(event.start.local),
                "EEEE, MMMM do yyyy, h:mm a"
              )}
            </p>
            <p>{event.summary}</p>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default EventCalendar;
