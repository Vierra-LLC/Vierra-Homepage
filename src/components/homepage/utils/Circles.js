import styles from "../css/utils/Circles.module.css";

function Circles({ left, right, top, bottom, color }) {
  const style = {
    // background: radial-gradient(
    //   50.11% 50.11% at 50% 49.89%,
    //   #7b13d080 0%,
    //   rgba(255, 255, 255, 0) 100%
    // );
    background:
      color == "purple"
        ? "radial-gradient(50.11% 50.11% at 50% 49.89%, #7b13d080 0%, rgba(255, 255, 255) 100%)"
        : "radial-gradient(50.11% 50.11% at 50% 49.89%, #E8178A80 0%, rgba(255, 255, 255) 100%)",
    zIndex: -211,
    left: left,
    right: right,
    top: top,
  };
  return <div style={style} className={styles.Circle}></div>;
}

export default Circles;
