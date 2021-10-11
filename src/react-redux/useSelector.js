import { useContext, useEffect, useReducer } from "react";
import ReactReduxContext from "./Context";

const useSelector = (selectorFn) => {
  const [_, forceRender] = useReducer((s) => s + 1, 0);
  const store = useContext(ReactReduxContext);

  useEffect(() => {
    const unsubscribe = store.subscribe(forceRender);

    return () => {
      unsubscribe();
    };
  }, [store]);

  return selectorFn(store.getState());
};

export default useSelector;
