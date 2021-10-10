const { createStore } = require("./createStore");

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "incremented":
      return { value: state.value + 1 };
    case "decremented":
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
let store = createStore(counterReducer, undefined, [logger1, logger2]);

// subscribe() 의 파라미터로 store의 state가 변경될 때 실행될 listener를 전달할 수 있다.
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "incremented" });
// {value: 1}
store.dispatch({ type: "incremented" });
// {value: 2}
store.dispatch({ type: "decremented" });
// {value: 1}
