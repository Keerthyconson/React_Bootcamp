import React, { useState } from "react";
// import Wrapper from "./Components/Helpers/Wrapper";
import AddUser from "./Components/Users/addUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (userName, age) => {
    const user = {
      name: userName,
      age: age,
      id: Math.random().toString(),
    };
    setUsers((prev) => {
      return [...prev, user];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={handleAddUser} />
      <UsersList users={users} />
    </React.Fragment>
  );
}

export default App;
