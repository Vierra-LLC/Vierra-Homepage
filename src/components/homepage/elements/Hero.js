import Circles from "@/components/homepage/utils/Circles";
import styles from "../css/elements/Hero.module.css";
import global from "../css/Glodal.module.css";
import Image from "next/image";
// import FirstPic from "./img/Firstpic.png";
// import SecondPic from "./img/SecondPic.png";
// import Thirdpic from "./img/Thirdpic.png";
// import Fourthpic from "./img/Fourthpic.png";
// import Fifthpic from "./img/Fifthpic.png";
import Doctor from "./logos/Doctor.png";
import Glossy from "./logos/Glossy.png";
import Cloud from "./logos/Cloud.png";
import Hues from "./logos/Hues.png";
import Scale from "./logos/Scale.png";
import Invert from "./logos/Invert.png";
import Plus from "./addons/hero/Plus.png";
import Factor from "./addons/hero/Factor.png";

function Hero({ width }) {
  const list = [
    {
      name: "CRM",
      image: "test",
    },
    {
      name: "Sales",
      image: "test",
    },
    {
      name: "Marketing",
      image: "test",
    },
    {
      name: "Accounting",
      image: "test",
    },
    {
      name: "Outreach",
      image: "test",
    },
  ];
  const logos = [
    {
      image: Doctor,
    },
    {
      image: Glossy,
    },
    {
      image: Cloud,
    },
    {
      image: Hues,
    },
    {
      image: Scale,
    },
    {
      image: Invert,
    },
  ];
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
        entire{" "}
        <div className={styles.FactorPic}>
          <Image src={Factor} alt={"Factor"} />
        </div>
        <div className={styles.PlusPic}>
          <Image src={Plus} alt={"Plus"} />
        </div>
        business
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
      <div className={styles.SchemasContainer}>
        {list.map((container, i) => (
          <div className={styles.SchemaBox} key={i}>
            <div className={styles.SchemaDot}>
              <div className={styles.Dot}></div>
            </div>
            <div className={styles.SchemaTitle}>{container.name}</div>
            <div className={styles.SchemaPicture}>{container.image}</div>
          </div>
        ))}
      </div>
      <div className={styles.LogosContainer}>
        {logos.map((logos, i) => (
          <div key={i}>
            <Image src={logos.image} height={75} alt={"image"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
