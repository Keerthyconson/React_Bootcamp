import React from "react";
import { useState, useEffect } from "react";

export const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("Mouse Event");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("UseEffect Called!!");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmount");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h1>Hooks </h1>
      <p>X : {x}</p>
      <p>Y : {y}</p>
    </div>
  );
};
