import styles from "../css/elements/Experience.module.css";
import global from "../css/Glodal.module.css";

function Experience() {
  return (
    <div className={styles.Container}>
      <div className={styles.TextContainer}>
        <div className={global.TinyTitle}>
          <span className={global.HighLightSemiPurple}>Solution Features</span>
        </div>
        <div className={global.SectionTitle}>
          Enhance Your{" "}
          <span className={global.HighLightPurple}>Experience</span> with Our{" "}
          <span className={global.HighLightRed}>Unique Features</span>
        </div>
        <div className={global.Context}>
          Experience the power and convenience of our software, designed to
          streamline your operations and drive growth
        </div>
      </div>
      <div className={styles.Navbar}>
        <div className={styles.NavbarButton}>Startups</div>
        <div className={styles.NavbarButton}>Healthcare</div>
        <div className={styles.NavbarButton}>Accounting</div>
        <div className={styles.NavbarButton}>Marketing</div>
        <div className={styles.NavbarButton}>Enterprise</div>
      </div>
      <div className={styles.MainContent}>
        <div className={styles.LeftSide}>
          <div className={styles.LeftMiniTitle}>Top Features</div>
          <div className={styles.LeftTitle}>Startups</div>
          <div className={styles.LeftList}>
            <div className={styles.FirstChild}>Scalability and flexibility</div>
            <div>Easy and intuitive user interface</div>
            <div>Data security</div>
            <div>Reporting functionalities</div>
            <div>Track performance</div>
            <div>Data-driven decisions</div>
            <div>Real-time analytics</div>
            <div className={styles.LastChild}>Integration</div>
          </div>
          <div className={styles.LeftButtons}>
            <div className={styles.Case}>VIEW CASE STUDIES</div>
            <div className={styles.Demo}>
              <div className={styles.DemoCircle}></div>TRY DEMO
            </div>
          </div>
        </div>
        <div className={styles.RightSide}></div>
      </div>
    </div>
  );
}

export default Experience;
