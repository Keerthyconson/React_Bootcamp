import React from "react";
import Card from "../UI/Card";
import classes from "./userList.module.css";

const UsersList = (props) => {
  const { users } = props;
  console.log(users);
  console.log(users.map((user) => console.log(user)));
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
