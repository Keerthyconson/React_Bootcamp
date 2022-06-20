import React from "react";
import Button from "./Button";
import ReactDOM from "react-dom";
import Card from "./Card";
import classes from "./errorModal.module.css";
// import { ReactDOM } from 'react-dom/client';

const Backdrop = (props) => {
  <div className={classes.backdrop} onClick={props.onhandleError} />;
};

const ModalOverlay = (props) => {
  const { title, message, onhandleError } = props;
  return (
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
  );
};
const ErrorModal = (props) => {
  const { title, message, onhandleError } = props;
  return (
    <React.Fragment>
      {/* <div className={classes.backdrop} onClick={onhandleError} />
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
      </Card> */}
      {ReactDOM.createPortal(
        <Backdrop onhandleError={onhandleError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onhandleError={onhandleError}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
