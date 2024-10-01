import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.container}>
        <img
          src="https://identity.foundation/hackathon-2024/img/dif-hackathon-banner.png"
          alt="DIF Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>
          <a href="docs/educational-sessions">DIF 2024 Hackathon</a>
        </h1>
      </div>
    </header>
  );
}

function HomepageLinks() {
  return (
    <section className={styles.linksSection}>
      <div className={styles.linksContainer}>
        <a href="docs" className={styles.linkCard}>
          <h2>Event Timeline</h2>
          <p>See an overview timeline of DIF's 2024 Hackathon</p>
        </a>
        <a href="docs/sponsors" className={styles.linkCard}>
          <h2>Sponsors and Challenges</h2>
          <p>Discover our sponsors and the challenges they've set for you.</p>
        </a>
        <a href="docs/educational-sessions" className={styles.linkCard}>
          <h2>Event Schedule</h2>
          <p>Stay updated with the hackathon schedule and activities.</p>
        </a>
        <a href="docs/resources" className={styles.linkCard}>
          <h2>Resources</h2>
          <p>Access tools and materials to aid your development process.</p>
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="DIF Hackathon"
      description="Join us for an exciting event of innovation and collaboration!"
    >
      <HomepageHeader />
      <main>
        <HomepageLinks />
      </main>
    </Layout>
  );
}
