import React from "react";

export const ReactReduxContext = React.createContext(null);

if (process.env.NODE_ENV !== "production") {
  ReactReduxContext.displayName = "ReactRedux";
}

export default ReactReduxContext;
