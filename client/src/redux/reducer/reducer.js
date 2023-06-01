import {
  GET_ALL_DOGS,
  GET_DOGS_BY_NAMES /* GET_ALL_TEMPERS */,
} from "../actionstypes/actionsType";

const initialState = {
  dogs: [],
  allDogs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case GET_DOGS_BY_NAMES:
      return {
        ...state,
        allDogs: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
