import axios from "axios";
import { GET_ALL_DOGS, GET_ALL_TEMPERS } from "../actionstypes/actionsType";
const { REACT_APP_GET_ALL_DOGS, REACT_APP_GET_ALL_TEMPER } = process.env;

export const getAllDogs = () => {
  return async (dispatch) => {
    const response = await axios.get(REACT_APP_GET_ALL_DOGS);
    dispatch({ type: GET_ALL_DOGS, payload: response.data });
  };
};

export const getAllTempers =()=>{
  return async (dispatch)=>{
    const responseT = await axios.get(REACT_APP_GET_ALL_TEMPER);
    dispatch({type: GET_ALL_TEMPERS, payload: responseT.data})
  }
}
