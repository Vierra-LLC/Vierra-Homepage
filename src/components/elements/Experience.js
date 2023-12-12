import styles from "../css/elements/Experience.module.css";
import global from "../css/Glodal.module.css";

function Experience() {
  return (
    <div className={styles.Container}>
      <div className={styles.TextContainer}>
        <div className={global.T}>Solution Features</div>
        <div className={global.T}>
          Enhance Your <span>Experience</span> with Our
          <span>Unique Features</span>
        </div>
        <div className={global.T}></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Experience;
