import React, { useState, useContext } from "react";
// import clsx from "clsx";
import { UsersContext } from "./context/index";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const { addNewUser } = useContext(UsersContext);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <>
      <hr />
      <h3>Add new user:</h3>
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        type="text"
        value={lastName}
        onChange={handleChangeLastName}
        placeholder="Enter lastname"
      />
      <button
        // className={clsx("add-btn", {
        //   disabled: !userName
        // })}
        onClick={() => addNewUser(userName, lastName)}
        disabled={!userName}
      >
        Add
      </button>
    </>
  );
};

export default AddUser;
