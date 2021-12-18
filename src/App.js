import "./index.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { useState } from "react";

const App = () => {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser ={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
};

export default App;
