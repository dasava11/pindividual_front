import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import img3 from "./images/dog_reading.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validate from "./validate";
const { REACT_APP_GET_ALL_TEMPER, REACT_APP_GET_ALL_DOGS } = process.env;

//
const Form = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    height: {},
    weight: {},
    life_span: "",
    image: "",
    temperament: [],
  });
  const [temperAdd, setTemperAdd] = useState([]);

  const [error, setError] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    image: "",
    temperament: "",
  });

  const handleChangeInput = (event) => {
    const { value, name } = event.target;

    setInput({
      ...input,
      [name]: value,
    });

    setError(
      validate({
        ...input,
        [name]: value,
      })
    );
  };

  const handleTemperAdd = (event) => {
    const { value } = event.target;

    if (!temperAdd.includes(value) && temperAdd.length <= 6) {
      setTemperAdd([...temperAdd, value]);
    }
    setInput({
      ...input,
      temperament: [...input.temperament, value],
    });
  };

  const handleTemperDelete = (event) => {
    const { value } = event.target;
    let auxT = temperAdd.filter((t) => t !== value);
    setTemperAdd(auxT);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(error).length) {
      alert("Verify that all fields are correct");
    } else {
      input.height = { metric: `${input.height_min} - ${input.height_max}` };
      input.weight = { metric: `${input.weight_min} - ${input.weight_max}` };
      input.temperament = temperAdd;
      console.log(input);
      axios
        .post(REACT_APP_GET_ALL_DOGS, input)
        .then((res) => alert(res.data.message))
        .catch((res) => alert(res.response.data.message));

      setInput({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        height: {},
        weight: {},
        life_span: "",
        image: "",
        temperament: [],
      });

      setError({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span: "",
        image: "",
        temperament: "",
      });
    }
  };

  const [tempers, setTempers] = useState([]);

  useEffect(() => {
    axios.get(REACT_APP_GET_ALL_TEMPER).then((response) => {
      const resTempers = response.data;
      setTempers(resTempers);
    });
  }, []);

  return (
    <div className={styles.containerForm}>
      <h1 className={styles.titleForm}>Create a new dog for your collection</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img
          src={!input.image ? img3 : input.image}
          alt="dog"
          className={styles.imageForm}
        />
        <div className={styles.styleImput}>
          <label className={styles.labelsForm}>Breed name:</label>
          <input
            name="name"
            value={input.name}
            className={styles.inputsForm}
            onChange={handleChangeInput}
            type="text"
            placeholder="Enter a name"
          />
          <div>
            {error.name && <span className={styles.danger}>{error.name}</span>}
          </div>
        </div>
        <div className={styles.inputsWeight}>
          <div>
            <label className={styles.labelsForm}>Weight minimun (kg):</label>
            <input
              name="weight_min"
              className={styles.inputsSize}
              onChange={handleChangeInput}
              type="number"
              placeholder="A number"
            />
            <label className={styles.labelsForm}>Weight maximun (kg):</label>
            <input
              name="weight_max"
              className={styles.inputsSize}
              onChange={handleChangeInput}
              type="number"
              placeholder="A number"
            />
          </div>
          <div className={styles.errorWeight}>
            {error.weight_min && (
              <p className={styles.danger}>{error.weight_min}</p>
            )}
            {error.weight_max && (
              <p className={styles.danger}>{error.weight_max}</p>
            )}
          </div>
        </div>
        <div>
          <div>
            <label className={styles.labelsForm}>Height minimun (cm):</label>
            <input
              name="height_min"
              className={styles.inputsSize}
              onChange={handleChangeInput}
              type="number"
              placeholder="A number"
            />

            <label className={styles.labelsForm}>Height maximun (cm):</label>
            <input
              name="height_max"
              className={styles.inputsSize}
              onChange={handleChangeInput}
              type="number"
              placeholder="A number"
            />
          </div>
          <div className={styles.errorHeight}>
            {error.height_min && (
              <p className={styles.danger}>{error.height_min}</p>
            )}
            {error.height_max && (
              <p className={styles.danger}>{error.height_max}</p>
            )}
          </div>
        </div>
        <div className={styles.styleImput}>
          <label className={styles.labelsForm}>Life span:</label>
          <input
            name="life_span"
            className={styles.inputsForm}
            onChange={handleChangeInput}
            type="number"
            placeholder="Enter a number"
          />
          {error.life_span && (
            <p className={styles.danger}>{error.life_span}</p>
          )}
        </div>
        <div className={styles.styleImput}>
          <label className={styles.labelsForm}>Image:</label>
          <input
            name="image"
            className={styles.inputsForm}
            onChange={handleChangeInput}
            type="url"
            placeholder="Enter a URL"
          />
          {error.image && <p className={styles.danger}>{error.image}</p>}
        </div>
        <div className={styles.styleImput}>
          <label className={styles.labelsForm}>Temperaments (max 7):</label>
          <select
            name={"temperament"}
            className={styles.inputsForm}
            onChange={handleChangeInput}
            multiple
          >
            <option>Select tempers</option>
            {tempers &&
              tempers.map((temper) => (
                <option
                  key={temper.id}
                  value={temper.name}
                  onClick={handleTemperAdd}
                >
                  {temper.name}
                </option>
              ))}
          </select>
          <div>
            {temperAdd &&
              temperAdd.map((t) => (
                <button
                  key={t}
                  name={t}
                  value={t}
                  className={styles.addTemper}
                  onClick={(e) => handleTemperDelete(e)}
                >
                  {t}
                </button>
              ))}
          </div>
        </div>
        <button className={styles.addButton} type="submit">
          Add Dog
        </button>
      </form>
      <button className={styles.backHome} onClick={() => navigate("/home")}>
        Back to home
      </button>
    </div>
  );
};

export default Form;
