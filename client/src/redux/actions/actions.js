import axios from "axios";
import {
  GET_ALL_DOGS,
  GET_DOGS_BY_NAMES,
  GET_ALL_TEMPERS,
  FILTER_DOGS_BY_TEMPERS,
  ORDER_DOGS_BY_NAME,
  FILTER_BY_ORIGIN,
  ORDER_BY_WEIGHT,
} from "../actionstypes/actionsType";
const { REACT_APP_GET_ALL_DOGS, REACT_APP_GET_ALL_TEMPER } = process.env;

export const getAllDogs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(REACT_APP_GET_ALL_DOGS);
      response.data.map((dog) =>
        dog.temperaments
          ? (dog.temperament = dog.temperaments
              .map((temper) => temper.name + " ")
              .toString())
          : null
      );

      dispatch({ type: GET_ALL_DOGS, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getDogsByName = (name) => {
  return async (dispatch) => {
    try {
      const responseF = await axios.get(
        `${REACT_APP_GET_ALL_DOGS}/name/?name=${name}`
      );
      dispatch({ type: GET_DOGS_BY_NAMES, payload: responseF.data });
    } catch (res) {
      alert(res.response.data.message);
    }
  };
};

export const filterDogsByTempers = (payload) => {
  return {
    type: FILTER_DOGS_BY_TEMPERS,
    payload,
  };
};

export const filterDogsByOrigin = (payload) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload,
  };
};

export const orderDogsByName = (payload) => {
  return {
    type: ORDER_DOGS_BY_NAME,
    payload,
  };
};

export const orderByWeight = (payload) => {
  console.log(payload);
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
};

export const getAllTempers = () => {
  return async (dispatch) => {
    const responseT = await axios.get(REACT_APP_GET_ALL_TEMPER);
    dispatch({ type: GET_ALL_TEMPERS, payload: responseT.data });
  };
};
