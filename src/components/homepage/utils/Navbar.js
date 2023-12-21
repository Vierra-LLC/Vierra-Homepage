import styles from "../css/utils/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <div className={styles.Logo}>vierra</div>
        <div className={styles.Buttons}>
          <div>Features</div>
          <div>Demo</div>
          <div>Products</div>
          <div>Downloads</div>
          <div>About Us</div>
        </div>
      </div>
      <div className={styles.Right}>
        <div className={styles.Connect}>CONNECT WITH US</div>
        <div className={styles.Login}>
          <div className={styles.LoginCircle}></div>
          <div className={styles.LoginWord}>LOGIN</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
