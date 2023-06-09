import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import img1 from "./images/dog_greeting.jpeg";
import img2 from "./images/working_dog.jpeg";

const LandingPage = () => {
  return (
    <div className={styles.containerLanding}>
      <div className={styles.frontPage}>
        <div className={styles.textTitle}>
          <h1 className={styles.title}>DOGS APP</h1>
          <br />
          <h1 className={styles.title}>Find your faithful friend</h1>
        </div>
        <button className={styles.buttonLanding}>
          <Link className={styles.linkToHome} to="/home">
            Home
          </Link>
        </button>
      </div>
      <div className={styles.complementFront}>
        <img className={styles.imageLanding} src={img1} alt="" />
        <img className={styles.imageLanding} src={img2} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
