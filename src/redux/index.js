import { createStore } from "./createStore";

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const logger1 = (store) => (next) => (action) => {
  console.log("LOGGER1: dispatching", action);
  return next(action);
};

const logger2 = (store) => (next) => (action) => {
  console.log("LOGGER2: dispatching", action);
  return next(action);
};

// store API 는 { subscribe, dispatch, getState } 이다.
const store = createStore(counterReducer, { value: 0 }, [logger1, logger2]);

export default store;
