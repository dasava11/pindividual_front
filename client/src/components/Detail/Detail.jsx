import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const { REACT_APP_GET_DOGS_BYID } = process.env;

const Detail = () => {
  const [dog, setDog] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get(REACT_APP_GET_DOGS_BYID + id)
        .then((response) => {
          const resDog = response.data;
          setDog(resDog);
        })
        .catch((res) => alert(res.message));
    } catch (error) {
      alert(error.message);
    }
  }, [id]);

  return (
    <div className={styles.containerDetail}>
      <div className={styles.containerD}>
        <div className={styles.info}>
          {dog && <h1>Name: {dog.name}</h1>}
          {dog && <h2>ID: {dog.id}</h2>}
          {dog && (
            <img
              className={styles.imageDetail}
              src={dog.image?.url ? dog.image.url : dog.image}
              alt={dog.name}
            />
          )}
          {dog && <h2>Height: {dog.height?.metric} cm</h2>}
          {dog && <h2>Weight: {dog.weight?.metric} Kg</h2>}
          {dog && <h2>life span: {dog.life_span}</h2>}
          {dog.temperament && (
            <h3 className={styles.tempersDetail}>
              Temperaments: {dog.temperament}
            </h3>
          )}
          {dog.temperaments && (
            <h3 className={styles.tempersDetail}>
              Temperaments:{" "}
              {dog.temperaments.map((temper) => (
                <span>{temper.name} </span>
              ))}
            </h3>
          )}
        </div>
      </div>
      <button className={styles.backHome} onClick={() => navigate(-1)}>
        Back to home
      </button>
    </div>
  );
};

export default Detail;
