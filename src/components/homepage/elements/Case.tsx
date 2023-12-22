import styles from "../css/elements/Case.module.css";
import global from "../css/Glodal.module.css";
import React from "react";
function Case() {
  return (
    <div className={styles.Container}>
      <div className={styles.TextContainer}>
        <div className={global.SectionTitle}>
          Case studies/
          <span className={global.HighLightSemiPurple}>articles.</span>
        </div>
        <div className={global.Context}>
          Our case studies showcase how our products and services have helped
          various businesses achieve their goals.
        </div>
        <div className={styles.TextButtons}>
          <div className={styles.CaseButton}>
            <div className={styles.CaseCircle}></div>
            <span className={styles.CaseButtonText}>CASE STUDIES</span>
          </div>
          <div className={styles.ArticleButton}>ARTICLES</div>
        </div>
      </div>
      <div className={styles.CardsContainer}>
        <div className={styles.Card}>
          <div className={styles.CardImage}></div>
          <div className={styles.CardTitle}>POLLU</div>
          <div className={styles.CardContext}>
            POLLUTION MONITORING SOLUTION
          </div>
        </div>
        <div className={styles.CardMain}>
          <div className={styles.CardImage}></div>
          <div className={styles.CardTitle}>POLLU</div>
          <div className={styles.CardContext}>
            POLLUTION MONITORING SOLUTION
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles.CardImage}></div>
          <div className={styles.CardTitle}>POLLU</div>
          <div className={styles.CardContext}>
            POLLUTION MONITORING SOLUTION
          </div>
        </div>
      </div>
      <div className={styles.AllCase}>VIEW ALL CASE STUDIES</div>
    </div>
  );
}

export default Case;
