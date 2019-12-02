import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {toast} from "react-toastify";

import ADD_USER from "./mutations";
import './user-add-form.css';
import 'react-toastify/dist/ReactToastify.css';

const AddTodo = () => {
    let input: {
        value: string
    } | any;
    const [addTodo] = useMutation(ADD_USER);

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo({variables: {name: input.value}})
                        .then(data =>
                            console.log('user',data));
                         /*   toast.success(`User ${user} added`, {position: "bottom-right"}));*/
                    input.value = '';
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
