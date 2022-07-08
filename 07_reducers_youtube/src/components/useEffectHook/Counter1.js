import React from "react";
import { useEffect, useState } from "react";

function Counter1(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h1>Counter 1 (with useEffect hook)</h1>
      <button onClick={() => setCount(count + 1)}>Click Here!!</button>
      <p>Clicked : {count} times</p>
    </div>
  );
}

export default Counter1;
