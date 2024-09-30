// src/components/SponsorCard/SponsorCard.js

import React from "react";
import styles from "./SponsorCard.module.css";
import Link from "@docusaurus/Link";

const SponsorCard = ({ name, tracks, logo, link }) => {
  return (
    <div className={styles.card}>
      <Link to={link} className={styles.link}>
        <img src={logo} alt={`${name} Logo`} className={styles.logo} />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.tracks}>{tracks}</p>
      </Link>
    </div>
  );
};

export default SponsorCard;
