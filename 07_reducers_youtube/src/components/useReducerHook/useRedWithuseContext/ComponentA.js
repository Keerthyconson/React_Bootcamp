import React, { useContext } from "react";
import { CountContext } from "../../../App";

const ComponentA = () => {
  const countContext = useContext(CountContext);
  const { count, dispatch } = countContext;
  return (
    <div>
      <h1>Component A</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <p>
        Count: <span className="count">{count}</span>
      </p>
    </div>
  );
};

export default ComponentA;
