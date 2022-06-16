import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./errorModal.module.css";

const ErrorModal = (props) => {
  const { title, message, onhandleError } = props;
  return (
    <div>
      <div className={classes.backdrop} onClick={onhandleError} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button label="Okay" onClick={onhandleError}></Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
