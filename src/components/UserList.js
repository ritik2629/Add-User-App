import React from "react";
import classes from "./UserList.module.css";
import Card from "./Card";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ( {user.age} Years old )
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
