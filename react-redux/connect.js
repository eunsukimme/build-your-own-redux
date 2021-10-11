import React from "react";
import store from "../redux";
import ReactReduxContext from "./Context";

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class extends React.Component {
      render() {
        return (
          <ReactReduxContext.Consumer>
            {(store) => (
              <WrappedComponent
                {...this.props}
                {...mapStateToProps(store.getState(), this.props)}
                {...mapDispatchToProps(store.dispatch, this.props)}
              />
            )}
          </ReactReduxContext.Consumer>
        );
      }

      componentDidMount() {
        // it remembers to subscribe to the store so it doesn't miss updates
        this.unsubscribe = store.subscribe(this.handleChange.bind(this));
      }

      componentWillUnmount() {
        // and unsubscribe later
        this.unsubscribe();
      }

      handleChange() {
        // and whenever the store state changes, it re-renders.
        this.forceUpdate();
      }
    };
  };
}
