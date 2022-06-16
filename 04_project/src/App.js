import React, { useState } from "react";
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
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
