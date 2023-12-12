import { useMemo } from "react";
import styles from "../css/elements/Testimonials.module.css";
import global from "../css/Glodal.module.css";
import Testimonialbox from "./utils/Testimonialbox";

function Testimonials() {
  const list = useMemo(() => [
    {
      name: "Jaxon Easton",
      context:
        "The management software tool that I reviewed is highly effective in managing projects, tasks, and team communication. It has a user-friendly interface and provides excellent collaboration features. The customizable dashboard allows quick access to all the important information, and the auto-assignment and reminder features help keep everyone on track. The tool's analytics section offers insightful reports to track progress and performance. Overall, I think this management software tool is a great option for teams and businesses looking to streamline their workflows and improve productivity.",
      position: "Production Manager",
    },
    {
      name: "Jaxon Easton",
      context:
        "The management software tool that I reviewed is highly effective in managing projects, tasks, and team communication. It has a user-friendly interface and provides excellent collaboration features. The customizable dashboard allows quick access to all the important information, and the auto-assignment and reminder features help keep everyone on track. The tool's analytics section offers insightful reports to track progress and performance. Overall, I think this management software tool is a great option for teams and businesses looking to streamline their workflows and improve productivity.",
      position: "Production Manager",
    },
    {
      name: "Jaxon Easton",
      context:
        "The management software tool that I reviewed is highly effective in managing projects, tasks, and team communication. It has a user-friendly interface and provides excellent collaboration features. The customizable dashboard allows quick access to all the important information, and the auto-assignment and reminder features help keep everyone on track. The tool's analytics section offers insightful reports to track progress and performance. Overall, I think this management software tool is a great option for teams and businesses looking to streamline their workflows and improve productivity.",
      position: "Production Manager",
    },
  ]);

  return (
    <div className={styles.Container}>
      <div className={styles.Text}>
        <div className={global.HighLightRed}>features</div>
        <div className={styles.MainTitle}>
          <div className={styles.MainTitleBlack}>Our Client</div>
          <div className={styles.MainTitlePic}></div>
          <div className={global.HighLightSemiPurple}>Testimonials</div>
        </div>
        <div className={global.Context}>
          Our clients have praised our solution tools, describing them as
          incredibly useful and user-friendly. They appreciate the efficiency
          and accuracy they bring to their work, and the ability to save them
          time and effort.
        </div>
      </div>
      <div className={styles.Slider}>
        {list.map((bop, i) => (
          <Testimonialbox
            key={i}
            name={bop.name}
            context={bop.context}
            position={bop.position}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
