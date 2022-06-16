import React from "react";
import classes from "./button.module.css";

const Button = (props) => {
  const label = props.label;
  const type = props.type;
  return (
    <button className={classes.button} type={type || "button"}>
      {label}
    </button>
  );
};

export default Button;
