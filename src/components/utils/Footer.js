import styles from "../css/utils/Footer.module.css";
import global from "../css/Glodal.module.css";

function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.EndCredits}>
        <div className={global.SectionTitle}>
          We invite you to try our <br />
          <span className={global.HighLightRed}>
            innovative solutions tools.
          </span>
        </div>
        <div>NEED HELP OR HAVE A QUESTION?</div>
        <div>
          <div>SCHEDULE AN APPOINTMENT</div>
          <div>GET IN TOUCH</div>
        </div>
      </div>
      <div className={styles.Footer}></div>
    </div>
  );
}

export default Footer;
