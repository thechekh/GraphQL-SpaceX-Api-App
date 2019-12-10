import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UserAddForm from "../../Components/user-add-form";
import GET_USERS from "./queries";
import DELETE_USER from "./mutations";
import "./users.css";

const Users = () => {
  const { error, loading, data } = useQuery(GET_USERS);

  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [
      {
        query: GET_USERS
      }
    ]
  });

  /*   if (error) return "Error";
  if (loading) return "Loading...";
  return (
    <div className="users_page">
      <h1>Users</h1>
      <UserAddForm />
      {data.users.map(({ id, name }: { id: string; name: string }) => (
        <div key={id}>
          <div className="users_details">
            <h2 className="user_name">
              User name:{name}
              <FontAwesomeIcon
                className="delete_user_icon"
                onClick={() =>
                  deleteUser({
                    variables: { name: name }
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
  ); */

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
                        variables: { name: name }
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
