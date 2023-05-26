import axios from "axios";
import { GET_ALL_DOGS } from "../actionstypes/actionsType";
const { REACT_APP_GET_ALL_DOGS } = process.env;

export const getAllDogs = () => {
  return async (dispatch) => {
    const response = await axios.get(REACT_APP_GET_ALL_DOGS);
    dispatch({ type: GET_ALL_DOGS, payload: response.data });
  };
};

/* export const getDogsById = () => {
  return async (dispatch) => {
    const response = await axios.get(REACT_APP_GET_DOGS_BYID);
    dispatch({ type: GET_DOGS_BYID, payload: response.data });
  };
}; */