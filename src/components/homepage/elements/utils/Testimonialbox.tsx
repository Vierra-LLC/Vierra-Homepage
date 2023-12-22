import styles from "./css/Box.module.css";
import React from "react";

function Testimonialbox({ name, position, context }) {
  return (
    <div className={styles.Container}>
      <div className={styles.NameContainer}>
        <div className={styles.NameText}>
          <div className={styles.Name}>{name}</div>
          <div className={styles.Position}>{position}</div>
        </div>
        <div className={styles.Rating}>
          <div>5</div>
          <div>*</div>
        </div>
      </div>
      <div className={styles.Context}>{context}</div>
    </div>
  );
}

export default Testimonialbox;
