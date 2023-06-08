import axios from "axios";
import {
  GET_ALL_DOGS,
  GET_DOGS_BY_NAMES,
  FILTER_DOGS_BY_TEMPERS,
  ORDER_DOGS,
  FILTER_BY_ORIGIN,
} from "../actionstypes/actionsType";
const { REACT_APP_GET_ALL_DOGS } = process.env;

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

export const orderDogs = (payload) => {
  return {
    type: ORDER_DOGS,
    payload,
  };
};
