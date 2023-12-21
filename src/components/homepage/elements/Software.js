import styles from "../css/elements/Software.module.css";
import global from "../css/Glodal.module.css";

function Software() {
  return (
    <div className={styles.Container}>
      <div className={global.TinyTitle}>
        <span className={global.HighLightRed}>Softwares</span>
      </div>
      <div className={global.SectionTitle} style={{ width: "465px" }}>
        Launch your products with our{" "}
        <span className={global.HighLightRed}>
          <span className={global.HighLightPurple}>top</span> of the line
          software
        </span>
      </div>
      <div
        style={{ textAlign: "center", marginTop: "10px" }}
        className={global.Context}
      >
        Our state-of-the-art software is the perfect tool to help you
        successfulyl launch your products.
      </div>
      <div className={styles.Buttons}>
        <div className={styles.ButtonColored}>DASHBOARD</div>
        <div>FORMS</div>
        <div>TIME MANAGEMENT</div>
        <div>ONBOARDING</div>
        <div>REVENUE</div>
      </div>
      <div className={styles.Main}></div>
    </div>
  );
}

export default Software;
