import React, { useContext } from "react";
import { CountContext } from "../../../App";

const ComponentF = () => {
  const { count, dispatch } = useContext(CountContext);
  return (
    <div>
      <h1>ComponentF</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <p>
        Count : <span className="count">{count}</span>
      </p>
    </div>
  );
};

export default ComponentF;
