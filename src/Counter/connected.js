import connect from "../../react-redux/connect";

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  count: state.value,
  ...props,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch({ type: "increment" }),
  decrement: () => dispatch({ type: "decrement" }),
  ...props,
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
