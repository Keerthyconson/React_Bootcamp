import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "increment2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
  // returns the newState;
};

function CounterTwo() {
  const [count, dispatchCount] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatchCount({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatchCount({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatchCount({ type: "increment2", value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatchCount({ type: "decrement2", value: 1 })}>
        Decrement Counter 2
      </button>
      <button onClick={() => dispatchCount({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatchCount({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatchCount({ type: "reset" })}>Reset</button>
      <p>First Counter : {count.firstCounter}</p>
      <p>Second Counter : {count.secondCounter}</p>
    </div>
  );
}

export default CounterTwo;
