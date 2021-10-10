function createStore(reducer, initialState, middlewares = []) {
  let currentReducer = reducer;
  let currentState = initialState;
  const listeners = [];

  function getState() {
    return currentState;
  }

  const dispatch = (action) => {
    currentState = currentReducer(currentState, action);
    listeners.forEach((listener) => listener());
    return action;
  };

  const lastDispatch = middlewares
    .reverse()
    .reduce(
      (accDispatch, middleware) =>
        middleware({ getState, dispatch })(accDispatch),
      dispatch
    );

  function subscribe(newListener) {
    listeners.push(newListener);
  }

  return {
    getState,
    dispatch: lastDispatch,
    subscribe,
  };
}

module.exports = { createStore };
