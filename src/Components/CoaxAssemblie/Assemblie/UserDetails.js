import React, { useContext } from "react";
import { UsersContext } from "./context/index";

const UserDetails = () => {
  //get the selected user from the usersContext
  const { selectedUser } = useContext(UsersContext);

  return (
    <div>
      <h4>User Details: </h4>
      {selectedUser && selectedUser.name ? (
        <>
          <p>
            Selected User name: <strong>{selectedUser.name}</strong>
          </p>
          <p>
            Selected Last name: <strong>{selectedUser.lastname}</strong>
          </p>
          <p>
            Selected User id: <strong>{selectedUser.id}</strong>
          </p>
        </>
      ) : (
        <p>Please select a user in the list to see the details.</p>
      )}
    </div>
  );
};

export default UserDetails;
