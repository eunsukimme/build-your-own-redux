export function createStore(reducer, initialState, middlewares = []) {
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
    let isSubscribed = true;

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      isSubscribed = false;
      const index = listeners.indexOf(newListener);
      listeners.splice(index, 1);
    };
  }

  return {
    getState,
    dispatch: lastDispatch,
    subscribe,
  };
}
