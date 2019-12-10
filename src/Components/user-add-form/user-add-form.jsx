import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GET_USERS from "../../Pages/users-page/queries";
import ADD_USER from "./mutations";
import "./user-add-form.css";

const AddTodo = () => {
  const [name, setName] = useState(null);
  const [addTodo] = useMutation(ADD_USER, {
    refetchQueries: [
      {
        query: GET_USERS
      }
    ]
  });
  /*   useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  }); */
  return (
    <div>
      <form
        onSubmit={useCallback(
          e => {
            e.preventDefault();
            addTodo({ variables: { name: name } }).then(res =>
              toast.success(
                `User ${res.data.insert_users.returning[0].name} Added`,
                { position: "bottom-right" }
              )
            );
          },
          [addTodo, name]
        )}
      >
        <input
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <button type="submit" className="add_user_button">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
