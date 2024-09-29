import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./HackathonTimeline.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const events = [
  {
    title: "DIF Hackathon Official Announcement",
    date: "September 24, 2024",
    description: "Announcing the commencement of the DIF Hackathon.",
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Hacking Period Starts",
    date: "October 1, 2024 (6:00 am PT)",
    description: "The main hacking period starts.",
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "DevPost Site Go-Live",
    date: "October 1, 2024",
    description: "The DevPost site becomes active for project submissions.",
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Educational Sessions",
    date: "October 1, 2024 – October 10, 2024",
    description:
      "Attend various sessions to enhance your skills and knowledge.",
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Sponsor-Run Office Hours",
    date: "October 14, 2024 – November 1, 2024",
    description:
      "Get guidance and support from our sponsors during office hours.",
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Hacking Period Ends",
    date: "November 4, 2024 (3:00 pm PT)",
    description: "The main hacking period ends.",
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Judging Period",
    date: "November 7, 2024 - November 17, 2024",
    description: "Our panel of judges evaluates all submissions.",
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Winning Entries Announced",
    date: "November 20th, 2024 (9:00 am PT)",
    description: "Winners of the DIF Hackathon are announced.",
    icon: <FaRegCalendarAlt />,
  },
];

const HackathonTimeline = () => {
  return (
    <div className={styles.timelineContainer}>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.date}
            iconStyle={{ background: "#0070f3", color: "#fff" }}
            icon={event.icon}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default HackathonTimeline;
