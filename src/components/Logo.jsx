import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      {" "}
      <img src="../../tripTracker.png" alt="Trip Tracker logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
