import styles from "../css/utils/Footer.module.css";
import global from "../css/Glodal.module.css";

function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.EndCredits}>
        <div className={global.SectionTitle}>
          <div className={global.SectionTitle}>We invite you to try our</div>{" "}
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
            Whether it&apos;s software, hardware, or a combination of both,{" "}
            <span className={global.Bolded}>
              our aim is to provide solutions that help our clients streamline
              their operations and achieve their goals.
            </span>
          </div>
          <div className={styles.FooterSection}>
            <div className={styles.SectionChild}>
              <div className={styles.SectionTitle}>Support</div>
              <div className={styles.SectionButton}>Help Centre</div>
              <div className={styles.SectionButton}>FAQ</div>
              <div className={styles.SectionButton}>Contact</div>
              <div className={styles.SectionButton}>Press</div>
              <div className={styles.SectionButton}>Status</div>
            </div>
            <div className={styles.SectionChild}>
              <div className={styles.SectionTitle}>Legal</div>
              <div className={styles.SectionButton}>Legal Notice</div>
              <div className={styles.SectionButton}>Privacy Policy</div>
              <div className={styles.SectionButton}>Terms of Use</div>
            </div>
            <div className={styles.SectionChild}>
              <div className={styles.SectionTitle}>Social</div>
              <div className={styles.SectionButton}>Instagram</div>
              <div className={styles.SectionButton}>Twitter</div>
              <div className={styles.SectionButton}>Facebook</div>
              <div className={styles.SectionButton}>LinkedIn</div>
              <div className={styles.SectionButton}>Github</div>
            </div>
          </div>
          <div className={styles.FooterSection}>
            <div className={styles.SectionChild}>
              <div className={styles.SectionTitle}>Company</div>
              <div className={styles.SectionButton}>About</div>
              <div className={styles.SectionButton}>Leadership</div>
              <div className={styles.SectionButton}>Blog</div>
              <div className={styles.SectionButton}>Careers</div>
              <div className={styles.SectionButton}>Community</div>
              <div className={styles.SectionButton}>Referal Program</div>
            </div>
            <div className={styles.SectionChild}>
              <div className={styles.SectionTitle}>Product</div>
              <div className={styles.SectionButton}>Overview</div>
              <div className={styles.SectionButton}>Features</div>
              <div className={styles.SectionButton}>Pricing</div>
              <div className={styles.SectionButton}>Documentation</div>
            </div>
          </div>
          <div className={styles.FooterCopy}>
            &copy; 2023 Vierra, Inc. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
