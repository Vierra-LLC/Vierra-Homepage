import styles from "./css/Case.module.css";
import global from "./css/Global.module.css";
import Circles from "./utils/Circles";

function Case({ width }) {
  return (
    <div className={global.Container}>
      <div className={global.Side}></div>
      <div className={global.Main}>
        <div className={styles.TextContainer}>
          <div className={global.TinyTitle}>
            <span className={global.HighLightRed}>features</span>
          </div>
          <div className={global.SectionTitle} style={{ width: "max-content" }}>
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
        <div className={global.TextUnderline}>VIEW ALL CASE STUDIES</div>
      </div>
      <div className={global.Side}>
        <Circles
          right={
            !width ? "-50vw" : `clamp(-${width / 4}px,-${width / 4}px,600px)`
          }
          color={false}
          width={width}
          margintop={"-200px"}
        />
        <Circles
          right={
            !width ? "-50vw" : `clamp(-${width / 4}px,-${width / 4}px,600px)`
          }
          color={false}
          width={width}
          margintop={"200px"}
          marginright={"300px"}
        />
      </div>
    </div>
  );
}

export default Case;
