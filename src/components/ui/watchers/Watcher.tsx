"use client";
import React from "react";
import styles from "./Watcher.module.css";


export const Watcher = () => {
  return (
    <>
     <h1 className={styles.dashboardTitle}>Weapon Detection Dashboard</h1>
    <div className={styles.watcherContainer}>
      <video
        className={styles.video}
        src="/videos/loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className={styles.overlay}>
        <div className={styles.personBox} style={{ top: "20%", left: "15%" }}>
          <span className={styles.label}>Person 01</span>
        </div>
        <div
          className={`${styles.personBox} ${styles.weapon}`}
          style={{ top: "45%", left: "60%" }}
        >
          <span className={styles.label}>⚠ Weapon Detected</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Watcher;

