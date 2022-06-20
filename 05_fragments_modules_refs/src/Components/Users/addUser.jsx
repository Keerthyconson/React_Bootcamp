import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./addUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userName, setUserName] = useState("");
  const [age, setAge] = useState();
  const [error, setError] = useState();

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log("Name - InputRef", nameInputRef.current.value);
    console.log("Age - InputRef", ageInputRef.current.value);
    if (
      userName.trim().length === 0 ||
      age.trim().length === 0 ||
      parseInt(age) < 1
    ) {
      setError({
        title: "Error Occured",
        message: "Enter valid inputs",
      });
      return;
    }
    // console.log(userName);
    // console.log(age);

    props.onAddUser(userName, age);
    setAge("");
    setUserName("");
  };

  const handleUserNameChanged = (event) => {
    setUserName(event.target.value);
  };

  const handleAgeChanged = (event) => {
    setAge(event.target.value);
  };

  const handleError = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onhandleError={handleError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={handleUserNameChanged}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={handleAgeChanged}
            ref={ageInputRef}
          />
          <Button label="Add User" type="submit" />
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
