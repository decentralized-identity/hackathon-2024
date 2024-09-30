// src/components/SponsorCard/SponsorCard.js

import React from "react";
import styles from "./SponsorCard.module.css";
import Link from "@docusaurus/Link";

const SponsorCard = ({ name, track, logo, link }) => {
  const trackValue = Array.isArray(track) ? track.join(", ") : track;

  return (
    <div className={styles.card}>
      <Link to={link} className={styles.link}>
        <img src={logo} alt={`${name} Logo`} className={styles.logo} />
        <h3 className={styles.name}>{name}</h3>
      </Link>
    </div>
  );
};

export default SponsorCard;
