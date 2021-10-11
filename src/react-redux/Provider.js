import React from "react";
import { ReactReduxContext } from "./Context";

function Provider({ store, children }) {
  return (
    <ReactReduxContext.Provider value={store}>
      {children}
    </ReactReduxContext.Provider>
  );
}

export default Provider;
