import {
  GET_ALL_DOGS,
  GET_DOGS_BY_NAMES,
  FILTER_DOGS_BY_TEMPERS,
  ORDER_DOGS,
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

    case ORDER_DOGS:
      let orderDogs = [];
      if (action.payload === "Order") {
        orderDogs = state.allDogs;
      } else if (action.payload === "A-Z") {
        orderDogs = state.allDogs?.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "Z-A") {
        orderDogs = state.allDogs.sort((b, a) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "min") {
        orderDogs = state.allDogs.sort((a, b) =>
          Number(a.weight?.metric.split(" ")[0]) >
          Number(b.weight?.metric.split(" ")[0])
            ? 1
            : -1
        );
      } else if (action.payload === "max") {
        orderDogs = state.allDogs.sort((a, b) =>
          Number(a.weight?.metric.split(" ")[0]) >
          Number(b.weight?.metric.split(" ")[0])
            ? -1
            : 1
        );
      }
      let Nan = orderDogs.filter((dog) =>
        isNaN(Number(dog.weight?.metric.split(" ")[0]))
      );
      orderDogs = state.allDogs.filter(
        (dog) => !isNaN(Number(dog.weight?.metric.split(" ")[0]))
      );

      orderDogs = [...orderDogs, ...Nan];
      return {
        ...state,
        allDogs: orderDogs,
      };

    case FILTER_BY_ORIGIN:
      let filterDogsByOrigin = [];

      action.payload === "new"
        ? (filterDogsByOrigin = state.dogs.filter((dog) => dog.createInDb))
        : action.payload === "base"
        ? (filterDogsByOrigin = state.dogs.filter((dog) => !dog.createInDb))
        : (filterDogsByOrigin = state.dogs);
      return {
        ...state,
        allDogs: filterDogsByOrigin,
      };
    default:
      return state;
  }
};

export default reducer;
