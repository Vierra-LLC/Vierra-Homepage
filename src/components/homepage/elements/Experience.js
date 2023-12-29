import styles from "./css/Experience.module.css";
import global from "./css/Global.module.css";
import Circles from "./utils/Circles";

function Experience({ width }) {
  return (
    <div className={global.Container}>
      <div className={global.Side}>
        <Circles
          left={
            !width ? "-50vw" : `clamp(-${width / 4}px,-${width / 4}px,600px)`
          }
          color={true}
          top={"300px"}
        />
      </div>
      <div className={global.Main}>
        <div className={styles.TextContainer}>
          <div className={global.TinyTitle}>
            <span className={global.HighLightSemiPurple}>
              Solution Features
            </span>
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
              <div className={styles.FirstChild}>
                Scalability and flexibility
              </div>
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
          <div className={styles.RightSide}>
            <div className={styles.RightButtons}>
              <div className={styles.ButtonProgress}>Progress Tracker</div>
              <div className={styles.ButtonManagement}>Task Management</div>
              <div className={styles.ButtonReport}>Generate Report</div>
              <div className={styles.ButtonMeeting}>Schedule Meeting</div>
            </div>
            <div className={styles.PicturesContainer}>
              <div className={styles.Picture}></div>
              <div className={styles.Picture}></div>
              <div className={styles.Picture}></div>
              <div className={styles.Picture}></div>
              <div className={styles.Picture}></div>
              <div className={styles.Picture}></div>
              <div className={styles.Picture}>+</div>
            </div>
            <div className={styles.AnalysisContainer}>
              <div className={styles.AnalysisLeft}>
                <div className={styles.AnalysisClock}></div>
                <div className={styles.AnalysisTextContainer}>
                  <div className={styles.AnalysisUpperText}>
                    Competitive Analysis
                  </div>
                  <div className={styles.AnalysisDate}>
                    <div className={styles.AnalysisDateCalendar}></div>
                    <div className={styles.AnalysisDateDate}>Feb 12 - 26</div>
                  </div>
                </div>
              </div>
              <div className={styles.AnalysisRight}>
                <div className={styles.AnalysisRightPicture}></div>
                <div className={styles.AnalysisRightDots}>
                  <div className={styles.AnalysisRightDot}></div>
                  <div className={styles.AnalysisRightDot}></div>
                  <div className={styles.AnalysisRightDot}></div>
                </div>
              </div>
            </div>
            <div className={styles.UserFlowContainer}>
              <div className={styles.AnalysisLeft}>
                <div className={styles.AnalysisClock}></div>
                <div className={styles.AnalysisTextContainer}>
                  <div className={styles.AnalysisUpperText}>
                    User Flow & Personna&apos;s
                  </div>
                  <div className={styles.AnalysisDate}>
                    <div className={styles.AnalysisDateCalendar}></div>
                    <div className={styles.AnalysisDateDate}>Feb 12 - 26</div>
                  </div>
                </div>
              </div>
              <div className={styles.AnalysisRight}>
                <div className={styles.AnalysisRightPicture}></div>
                <div className={styles.AnalysisRightPicture}></div>
                <div className={styles.AnalysisRightDots}>
                  <div className={styles.AnalysisRightDot}></div>
                  <div className={styles.AnalysisRightDot}></div>
                  <div className={styles.AnalysisRightDot}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={global.Side}></div>
    </div>
  );
}

export default Experience;
