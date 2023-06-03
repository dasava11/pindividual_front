import {
  GET_ALL_DOGS,
  GET_DOGS_BY_NAMES,
  FILTER_DOGS_BY_TEMPERS,
  ORDER_DOGS_BY_NAME,
  FILTER_BY_ORIGIN,
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
      let filterByTempers = [];

      action.payload === "all"
        ? (filterByTempers = state.dogs)
        : (filterByTempers = state.dogs.filter(
            (dog) => dog.temperament && dog.temperament.includes(action.payload)
          ));

      return {
        ...state,
        allDogs: filterByTempers,
      };
    case ORDER_DOGS_BY_NAME:
      let orderDogsByName = [];
      /* console.log(action.payload); */
      if (action.payload === "Order") {
        orderDogsByName = state.dogs;
      } else if (action.payload === "A-Z") {
        orderDogsByName = state.dogs?.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "Z-A") {
        orderDogsByName = state.dogs.sort((b, a) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "Peso") {
        orderDogsByName = state.dogs.sort((a, b) =>
          a.weight?.metric > b.weight?.metric ? 1 : -1
        );
      }

      orderDogsByName = [...state.dogs];
      return {
        ...state,
        allDogs: orderDogsByName,
      };
    case FILTER_BY_ORIGIN:
      let filterDogsByOrigin = [];

      action.payload === "new"
        ? (filterDogsByOrigin = state.dogs.filter((dog) => dog.createInDb))
        : action.payload === "base"
        ? (filterDogsByOrigin = state.dogs.filter((dog) => !dog.createInDb))
        : (filterDogsByOrigin = state.dogs);
      console.log(filterDogsByOrigin);
      return {
        ...state,
        allDogs: filterDogsByOrigin,
      };
    default:
      return state;
  }
};

export default reducer;
