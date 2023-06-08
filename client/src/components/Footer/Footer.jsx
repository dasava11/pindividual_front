import React from "react";
import Twitter from "./img/Twitter.png";
import Instagram from "./img/Instagram.png";
import Facebook from "./img/Facebook.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <div className={styles.finaly}>
          <div>
            <p className={styles.footer_p}>APP DOGS © 2023</p>
          </div>
          <div className={styles.footer_links}>
            <div className={styles.footer_div}>
              <a href="https://twitter.com/contextdogs?s=20">
                <img src={Twitter} alt="not found" />
              </a>
            </div>
            <div className={styles.footer_div}>
              <a href="https://www.instagram.com/dogs/">
                <img src={Instagram} alt="not found" />
              </a>
            </div>
            <div className={styles.footer_div}>
              <a href="https://www.facebook.com/groups/2506890209/">
                <img src={Facebook} alt="not found" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
