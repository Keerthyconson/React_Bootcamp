import React, { useReducer } from "react";

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
  // returns the newState;
};

function CounterThree() {
  const [count, dispatchCount] = useReducer(reducer, initialState);
  const [count2, dispatchCount2] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <div>
        <button onClick={() => dispatchCount("increment")}>Increment</button>
        <button onClick={() => dispatchCount("decrement")}>Decrement</button>
        <button onClick={() => dispatchCount("reset")}>Reset</button>
        <p>Count {count}</p>
      </div>
      <div>
        <button onClick={() => dispatchCount2("increment")}>
          Increment counter 2
        </button>
        <button onClick={() => dispatchCount2("decrement")}>
          Decrement counter 2
        </button>
        <button onClick={() => dispatchCount2("reset")}>Reset counter2</button>
        <p>Count Two: {count2}</p>
      </div>
    </React.Fragment>
  );
}

export default CounterThree;
