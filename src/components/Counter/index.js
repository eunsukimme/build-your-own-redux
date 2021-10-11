import useSelector from "../../react-redux/useSelector";
import useDispatch from "../../react-redux/useDispatch";

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}

export default Counter;
