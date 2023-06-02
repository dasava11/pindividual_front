import {
  GET_ALL_DOGS,
  GET_DOGS_BY_NAMES,
  FILTER_DOGS_BY_TEMPERS,
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
    case FILTER_DOGS_BY_TEMPERS:
      let filterByTempers;

      if (action.payload === "all") {
        filterByTempers = state.dogs;
      } else {
        filterByTempers = state.dogs.filter(
          (dog) =>
            (dog.temperament && dog.temperament.includes(action.payload)) ||
            (dog.temperaments &&
              dog.temperaments[0]?.name.includes(action.payload))
        );
      }
      return {
        ...state,
        allDogs: filterByTempers,
      };
    default:
      return state;
  }
};

export default reducer;
