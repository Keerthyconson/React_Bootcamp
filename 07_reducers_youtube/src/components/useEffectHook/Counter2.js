import React from "react";
import { useEffect, useState } from "react";

function Counter2(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("Title Changed");
  }, [count]);
  return (
    <div>
      <h1>Counter 1 (with useEffect hook)</h1>
      <button onClick={() => setCount(count + 1)}>Click Here!!</button>
      <p>Clicked : {count} times</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

export default Counter2;
