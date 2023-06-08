import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ id, image, name, weight, temperament, setPages, pages }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/home/detail/${id}`, { pages: { setPages } });
  };

  return (
    <div className={styles.cardDogs}>
      <div className={styles.contentImg}>
        {image && <img src={image} className={styles.imageDog} alt={name} />}
      </div>
      <div>
        {name && <h2>{name}</h2>}
        {weight && <h4 className={styles.infodog}>Weight: {weight} Kg</h4>}
        <h4 className={styles.infodog}>Temperaments:</h4>
        {temperament && <h4 className={styles.infodogTemper}>{temperament}</h4>}
      </div>
      <div className={styles.divButton}>
        <button className={styles.buttonCard} onClick={handleNavigate}>
          More info
        </button>
      </div>
    </div>
  );
};

export default Card;
