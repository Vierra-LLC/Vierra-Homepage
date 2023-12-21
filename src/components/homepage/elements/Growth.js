import styles from "../css/elements/Growth.module.css";
import global from "../css/Glodal.module.css";

function Growth() {
  return (
    <div className={styles.Container}>
      <div className={styles.Text}>
        <div className={global.TinyTitle}>
          <span className={global.HighLightRed}>growth</span>
        </div>
        <div className={global.SectionTitle}>
          Business <span className={global.HighLightSemiPurple}>growth.</span>
        </div>
        <div className={global.Context}>
          According to a study by SCORE, a non-profit association for small
          businesses, the average revenue growth rate for small businesses with
          less than $5 million in annual{" "}
          <span className={global.Bolded}>revenue is 7.5% annually</span>.
          Additionally, they found that the average attention rate of growth for{" "}
          <span className={global.Bolded}>small businesses is 1% annually</span>
          . While growth rates vary widely depending on the industry and
          location of the business, these statistics provide a general overview
          of what small business owners can expect in terms of revenue and
          attention growth.
        </div>
      </div>
      <div className={styles.Helped}>
        <div className={styles.HelpedNumber}>
          <span className={styles.SilvedHighlight}>20,000+</span>
        </div>
        <div className={styles.HelpedWord}>Business helped</div>
      </div>
      <div className={styles.Gained}>
        <div className={styles.HelpedNumber}>
          <span className={styles.SilvedHighlight}>20M+</span>
        </div>
        <div className={styles.HelpedWord}>Business revenue gained</div>
      </div>
    </div>
  );
}

export default Growth;
