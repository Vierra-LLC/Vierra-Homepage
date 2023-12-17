import Circles from "@/components/homepage/utils/Circles";
import styles from "../css/elements/Hero.module.css";
import global from "../css/Glodal.module.css";

function Hero({ width }) {
  return (
    <div className={styles.Container}>
      <Circles
        right={
          !width ? "-50vw" : `clamp(-${width / 4}px,-${width / 4}px,600px)`
        }
        color={true}
        top={"-100px"}
        width={width}
      />
      <Circles
        left={!width ? "-50vw" : `clamp(-${width / 4}px,-${width / 4}px,600px)`}
        color={false}
        top={"50px"}
        width={width}
      />
      <div className={styles.HeroTitle}>
        Realtime <span className={global.HighLightPurple}>solution</span>{" "}
        <span className={global.HighLightSemiPurple}>tools</span> for your
        entire business
      </div>
      <div className={styles.HeroContext}>
        Our comprehensive tool offers small business owners a one-stop-shop
        solution <span className={global.Bolded}>to manage</span> their
        accounting, sales, marketing, outreach efforts, CRM, financial models,
        email campaigns, QuickBooks integration, record-keeping, and a range of
        other <span className={global.Bolded}>crucial business functions.</span>
      </div>
      <div className={styles.HeroButton}>
        <div className={styles.HeroButtonCircle}></div>
        <div className={styles.HeroButtonText}>TRY DEMO</div>
      </div>
      <div className={styles.SchemasContainer}></div>
      <div className={styles.LogosContainer}></div>
    </div>
  );
}

export default Hero;
