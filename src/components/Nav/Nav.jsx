import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={styles.divNav}>
      <nav className={styles.nav}>
        <div className={styles.divBtn}>
          <Link to="/home">
            <button className={styles.btn}>Home</button>
          </Link>
          <Link to="/about">
            <button className={styles.btn}>About</button>
          </Link>
          <Link to="/favorites">
            <button className={styles.btn}>Favorites</button>
          </Link>
          <Link to="/">
            <button className={styles.btn}>Logout</button>
          </Link>

        </div>
        <SearchBar onSearch={props.onSearch} />
      </nav>
    </div>
  );
}
