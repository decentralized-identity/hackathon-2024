import React from "react";
import styles from "./SponsorDetails.module.css";
import { FaDiscord, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const SponsorDetails = ({ sponsor }) => {
  const { name, track, logo, link, eventId, discord, externalLink } = sponsor;

  // Function to generate Eventbrite registration link
  const getEventbriteLink = (id) => `https://www.eventbrite.com/e/${id}`;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt={`${name} Logo`} className={styles.logo} />
      </div>

      <div className={styles.details}>
        <p>
          <strong>Tracks:</strong> {track.join(", ")}
        </p>
        <p>
          <strong>Informational Session:</strong>{" "}
          {Array.isArray(eventId) ? (
            eventId.map((id, index) => (
              <span key={index}>
                <a
                  href={getEventbriteLink(id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.eventLink}
                >
                  Register Here <FaExternalLinkAlt className={styles.icon} />
                </a>
                {index < eventId.length - 1 && ", "}
              </span>
            ))
          ) : (
            <a
              href={getEventbriteLink(eventId)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.eventLink}
            >
              Register Here <FaExternalLinkAlt className={styles.icon} />
            </a>
          )}
        </p>
        <p>
          <strong>DIF Hackathon Discord Channel:</strong>{" "}
          <span className={styles.discord}>
            <FaDiscord className={styles.icon} aria-hidden="true" />
            {discord}
          </span>
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.websiteLink}
          >
            {name} <FaExternalLinkAlt className={styles.icon} />
          </a>
        </p>
      </div>
    </div>
  );
};

SponsorDetails.propTypes = {
  sponsor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    track: PropTypes.arrayOf(PropTypes.string).isRequired,
    logo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    eventId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    discord: PropTypes.string.isRequired,
  }).isRequired,
};

export default SponsorDetails;
