import styles from "./css/Box.module.css";

function Testimonialbox({ name, position, context }) {
  return (
    <div className={styles.Container}>
      <div className={styles.NameContainer}>
        <div className={styles.NameText}>
          <div className={styles.Name}>{name}</div>
          <div className={styles.Position}>{position}</div>
        </div>
        <div className={styles.Rating}>5</div>
      </div>
      <div className={styles.Context}>{context}</div>
    </div>
  );
}

export default Testimonialbox;
