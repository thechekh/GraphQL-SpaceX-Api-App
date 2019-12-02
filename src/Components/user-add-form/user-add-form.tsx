import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {toast} from "react-toastify";

import ADD_USER from "./mutations";
import './user-add-form.css';
import 'react-toastify/dist/ReactToastify.css';

const AddTodo = () => {
    let input: HTMLInputElement | null;
    const [addTodo] = useMutation(ADD_USER);
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo({variables: {name: input!.value}})
                        .then(res =>
                            toast.success(`User ${res.data.insert_users.returning[0].name} Added`,
                                {position: "bottom-right"}));
                    input!.value = '';
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit" className='add_user_button'>Add User</button>
            </form>
        </div>
    );
};

export default AddTodo;
