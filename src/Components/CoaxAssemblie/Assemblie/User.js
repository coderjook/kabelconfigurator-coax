import React from "react";
import { UsersContextProvider } from "./context/index";
import UsersList from "./UsersList";
import UserDeails from "./UserDetails";
import AddUser from "./AddUser";

const User = () => {
  const users = [
    { id: 1, name: "John", lastname: "Doep" },
    { id: 2, name: "Joanna", lastname: "Dippe" },
  ];
  return (
    <div>
      <UsersContextProvider users={users}>
        <h2>Using context and hooks</h2>
        <p>
          'UsersList', 'UserDetails' and 'AddUser' are three different
          components which use the same shared state through a context called
          "UsersContext"
        </p>
        <div>
          <UsersList />
          <UserDeails />
        </div>
        <AddUser />
      </UsersContextProvider>
    </div>
  );
};

export default User;
