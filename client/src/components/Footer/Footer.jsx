import React from "react";
import {useState} from "react"
import { Link } from "react-router-dom";
import Twitter from "./img/Twitter.png";
import Instagram from "./img/Instagram.png";
import Facebook from "./img/Facebook.png";
import styles from "./Footer.module.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div className={styles.footer}>
      <footer>
        <div className={styles.newsletter}>
        <h3>subscribe to newsletter</h3>
        <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digita tu correo electrónico..."
              value={email}
              onChange={handleChange}
            />
            <button type="submit">Suscribirse</button>
        </form>
      </div>
        <div >
          <p className={styles.footer_p}>APP DOGS © 2023</p>
          <Link className={styles.footer_l} to="/politica_de_privacidad">Políticas de privacidad</Link>
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
      </footer>
    </div>
  );
}

export default Footer;
