"use client";
import React from "react";
import styles from "./Weapon.module.css";
import { WeaponDetection } from "@/components/ui/types/detection";


interface WeaponProps {
  detections: WeaponDetection[];
}

const Weapon: React.FC<WeaponProps> = ({ detections }) => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.dashboardTitle}>Weapon Detection Dashboard</h1>

      <div className={styles.cardGrid}>
        {detections.map((item, index) => {
          const { personImage, weaponName, detectedAt, hasWeapon } = item;
          const formattedDate = new Date(detectedAt).toLocaleString();
          const statusClass = hasWeapon ? styles.danger : styles.safe;

          return (
            <div key={index} className={`${styles.card} ${statusClass}`}>
              <img
                src={personImage}
                alt="Detected person"
                width={300}
                height={200}
                className={styles.personImage}
              />
              <div className={styles.cardContent}>
                <p className={styles.label}>
                  <strong>Status:</strong> {hasWeapon ? "Weapon Detected" : "No Weapon"}
                </p>
                <p className={styles.label}>
                  <strong>Weapon:</strong> {hasWeapon ? weaponName : "N/A"}
                </p>
                <p className={styles.label}>
                  <strong>Time:</strong> {formattedDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weapon;
