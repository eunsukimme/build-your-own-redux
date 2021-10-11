import React from "react";
import ReactReduxContext from "./Context";

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class extends React.Component {
      static contextType = ReactReduxContext;
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState(), this.props)}
            {...mapDispatchToProps(this.context.dispatch, this.props)}
          />
        );
      }

      componentDidMount() {
        // it remembers to subscribe to the store so it doesn't miss updates
        this.unsubscribe = this.context.subscribe(this.handleChange.bind(this));
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
