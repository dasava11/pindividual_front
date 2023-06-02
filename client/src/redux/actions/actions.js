import axios from "axios";
import {
  GET_ALL_DOGS,
  GET_DOGS_BY_NAMES,
  GET_ALL_TEMPERS,
  FILTER_DOGS_BY_TEMPERS,
} from "../actionstypes/actionsType";
const {
  REACT_APP_GET_ALL_DOGS,
  REACT_APP_GET_ALL_TEMPER,
  /* FILTER_DOGS_BY_TEMPERS, */
} = process.env;

export const getAllDogs = () => {
  return async (dispatch) => {
    const response = await axios.get(REACT_APP_GET_ALL_DOGS);
    dispatch({ type: GET_ALL_DOGS, payload: response.data });
  };
};

export const getDogsByName = (name) => {
  return async (dispatch) => {
    const responseF = await axios.get(
      `${REACT_APP_GET_ALL_DOGS}/name/?name=${name}`
    );
    dispatch({ type: GET_DOGS_BY_NAMES, payload: responseF.data });
  };
};

export const filterDogsByTempers = (payload) => {
  return {
    type: FILTER_DOGS_BY_TEMPERS,
    payload,
  };
};

export const getAllTempers = () => {
  return async (dispatch) => {
    const responseT = await axios.get(REACT_APP_GET_ALL_TEMPER);
    dispatch({ type: GET_ALL_TEMPERS, payload: responseT.data });
  };
};
