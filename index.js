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

// store API 는 { subscribe, dispatch, getState } 이다.
let store = createStore(counterReducer);

// subscribe() 의 파라미터로 store의 state가 변경될 때 실행될 listener를 전달할 수 있다.
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "incremented" });
// {value: 1}
store.dispatch({ type: "incremented" });
// {value: 2}
store.dispatch({ type: "decremented" });
// {value: 1}
