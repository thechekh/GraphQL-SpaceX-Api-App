import React from "react";
import {useQuery, useMutation} from '@apollo/react-hooks';

import GET_USERS from "./queries";
import UserAddForm from "../../Components/user-add-form";
import './users.css'

import ADD_USER from "../../Components/user-add-form/mutations";
import DELETE_USER from "./mutations";
import {faSpaceShuttle, faUserMinus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Users = () => {

    // @ts-ignore
    const {errors, loading, data} = useQuery(GET_USERS);
    const [deleteUser] = useMutation(DELETE_USER);

    return (
        <div className='users_page'>
            <h1>Users</h1>
            <UserAddForm/>
            {
                errors
                    ? "Error!" : loading
                    ? "Loading..."
                    :
                    data.users.map(({id, name}: {
                        id: string, name: string,
                    }) => (
                        <div key={id}>
                            <div className="users_details">
                                <h2 className='user_name'>User name:{name}
                                    <FontAwesomeIcon className="delete_user_icon"
                                                     onClick={e =>
                                                         deleteUser({variables: {userName: name}})}
                                                     icon={faUserMinus}/>
                                </h2>
                                <span className="user_id">User id {id}</span>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
};
export default Users;
