import styles from "../css/utils/Footer.module.css";
import global from "../css/Glodal.module.css";

function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.EndCredits}>
        <div className={global.SectionTitle}>
          <div className={styles.SectionTitleUp}>We invite you to try our</div>{" "}
          <br />
          <span className={global.HighLightRed}>
            innovative solutions tools.
          </span>
        </div>
        <div className={styles.Help}>NEED HELP OR HAVE A QUESTION?</div>
        <div className={styles.Buttons}>
          <div className={styles.Schedule}>SCHEDULE AN APPOINTMENT</div>
          <div className={styles.Touch}>
            <div className={styles.TouchCircle}></div>
            <div>GET IN TOUCH</div>
          </div>
        </div>
      </div>
      <div className={styles.Footer}>
        <div className={styles.FooterLeft}></div>
        <div className={styles.FooterRight}>
          <div className={styles.FooterIntro}>
            Whether it's software, hardware, or a combination of both,{" "}
            <span className={global.Bolded}>
              our aim is to provide solutions that help our clients streamline
              their operations and achieve their goals.
            </span>
          </div>
          <div className={styles.FooterSection}></div>
          <div className={styles.FooterSection}></div>
          <div className={styles.FooterCopy}>
            &copy; 2023 Vierra, Inc. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
