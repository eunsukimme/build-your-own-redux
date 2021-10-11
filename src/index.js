import ReactDOM from "react-dom";
import Provider from "./react-redux/Provider";
import store from "./redux";
import { App } from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
