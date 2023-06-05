import {
  GET_ALL_DOGS,
  GET_DOGS_BY_NAMES,
  FILTER_DOGS_BY_TEMPERS,
  ORDER_DOGS_BY_NAME,
  FILTER_BY_ORIGIN,
  ORDER_BY_WEIGHT,
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
      if (action.payload === "Order") {
        orderDogsByName = state.allDogs;
      } else if (action.payload === "A-Z") {
        orderDogsByName = state.allDogs?.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "Z-A") {
        orderDogsByName = state.allDogs.sort((b, a) =>
          a.name.localeCompare(b.name)
        );
      }

      orderDogsByName = [...state.allDogs];
      return {
        ...state,
        allDogs: orderDogsByName,
      };

    case ORDER_BY_WEIGHT:
      let orderWeight = [];

      if (action.payload === "OrderW") {
        orderWeight = state.allDogs;
      } else if (action.payload === "min") {
        state.allDogs.sort((a, b) =>
          Number(a.weight?.metric.split(" ")[0]) >
          Number(b.weight?.metric.split(" ")[0])
            ? 1
            : -1
        );
      } else if (action.payload === "max") {
        state.allDogs.sort((a, b) =>
          Number(a.weight?.metric.split(" ")[0]) >
          Number(b.weight?.metric.split(" ")[0])
            ? -1
            : 1
        );
      }
      let Nan = state.allDogs.filter((dog) =>
        isNaN(Number(dog.weight?.metric.split(" ")[0]))
      );
      orderWeight = state.allDogs.filter(
        (dog) => !isNaN(Number(dog.weight?.metric.split(" ")[0]))
      );

      orderWeight = [...orderWeight, ...Nan];

      return {
        ...state,
        allDogs: orderWeight,
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
