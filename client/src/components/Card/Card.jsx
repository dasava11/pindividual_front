import React from "react";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";



const Card = ({id, image, name, weight, temperament})=>{
   return(
  <div className={styles.cardDogs}>
   <img src={image} className={styles.imageDog} alt={name} />
    <h2>{name}</h2>
    <h4>Weight: {weight}</h4>
    <h4>Temperaments:</h4>
    <h4>{temperament}</h4>
    <button>
      <Link to={`/detail/${id}`} className={styles.buttonCard} >Detail</Link>
    </button>
  </div>
)
   }

   export default Card;