function createStore(reducer, initialState) {
  let currentReducer = reducer;
  let currentState = initialState;
  const listeners = [];

  return {
    getState() {
      return currentState;
    },
    dispatch(action) {
      currentState = currentReducer(currentState, action);
      listeners.forEach((listener) => listener()); // Note that we added this line!
      return action;
    },
    subscribe(newListener) {
      listeners.push(newListener);
    },
  };
}

module.exports = { createStore };
