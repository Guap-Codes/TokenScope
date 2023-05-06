import styles from "../styles/Footer.module.css";
import instagram from "../public/instagram.png";
import twitter from "../public/twitter.png";
import facebook from "../public/facebook.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img className={styles.tokenscope_logo}
          src="/tokenScope_logo.png"></img>
      </div>
      <div className={styles.about}>
        <h3>About Us</h3>
        <p>An NFT gallery to view the assets owned by an address. </p>
      </div>
      <div className={styles.links}>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className={styles.social}>
        <a href="#">
        <img src={instagram} alt="instagram"/>
        </a>
        <a href="#">
        <img src={facebook} alt="facebook"/>
        </a>
        <a href="#">
        <img src={twitter} alt="twitter"/>
        </a>
      </div>
    </footer>
  );
}
