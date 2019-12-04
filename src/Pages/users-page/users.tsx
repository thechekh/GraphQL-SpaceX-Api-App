import React from "react";
import { useQuery, useMutation, useSubscription } from "@apollo/react-hooks";

import GET_USERS from "./queries";
import UserAddForm from "../../Components/user-add-form";
import "./users.css";

import DELETE_USER from "./mutations";
import USERS_SUBSCRIBE from "./subscriptions";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Users = () => {
  const { error, loading, data } = useQuery(GET_USERS);
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [
      {
        query: GET_USERS
      }
    ]
  });
  const users = useSubscription(USERS_SUBSCRIBE);
  console.log("users", users);
  return (
    <div className="users_page">
      <h1>Users</h1>
      <UserAddForm />
      {error
        ? "Error!"
        : loading
        ? "Loading..."
        : data.users.map(({ id, name }: { id: string; name: string }) => (
            <div key={id}>
              <div className="users_details">
                <h2 className="user_name">
                  User name:{name}
                  <FontAwesomeIcon
                    className="delete_user_icon"
                    onClick={() =>
                      deleteUser({
                        variables: { userName: name }
                      })
                    }
                    icon={faUserMinus}
                  />
                </h2>
                <span className="user_id">User id {id}</span>
              </div>
            </div>
          ))}
    </div>
  );
};
export default Users;
