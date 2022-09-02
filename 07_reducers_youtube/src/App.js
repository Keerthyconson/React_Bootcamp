import "./App.css";
import React, { useReducer } from "react";
import ComponentA from "./components/useReducerHook/useRedWithuseContext/ComponentA";
import ComponentB from "./components/useReducerHook/useRedWithuseContext/ComponentB";
import ComponentC from "./components/useReducerHook/useRedWithuseContext/ComponentC";

const initialState = 0;
export const CountContext = React.createContext();

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatchCount] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ count: count, dispatch: dispatchCount }}>
      <div className="App">
        <p>
          Count : <span className="count">{count}</span>
        </p>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
