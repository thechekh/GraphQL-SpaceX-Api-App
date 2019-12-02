import React from "react";
import {useQuery} from '@apollo/react-hooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWeightHanging, faTachometerAlt, faSpaceShuttle} from '@fortawesome/free-solid-svg-icons'

import GET_SHIPS from "./queries";
import './ships.css'


export default () => {
    const {error, loading, data} = useQuery(GET_SHIPS);
    return error
        ? "Error!" :
        loading
            ? "Loading..."
            :
            data.ships.map(({id, name, roles, speed_kn, weight_kg, type, year_built}: {
                id: string, name: string,
                roles: Array<string>, speed_kn: number,
                weight_kg: number, type: string,
                year_built: number
            }) => (
                <div key={id}>
                    <h1>
                        <FontAwesomeIcon icon={faSpaceShuttle}/>
                        Name: {name}</h1>
                    <div className="ships_details">
                        <span>Year:{year_built}</span><br/>
                        {speed_kn ? (
                            <span className="speed">
                             <FontAwesomeIcon icon={faTachometerAlt}/>
                            Speed:{speed_kn} kn</span>
                        ) : null
                        }
                        {weight_kg ? (
                            <span className="weight">
                            <FontAwesomeIcon icon={faWeightHanging}/>
                             Weight:{weight_kg} kg</span>
                        ) : null}
                        <div className="ships_about">
                            <h2 className="ships_type">Type:{type}</h2>
                            <span className="ships_roles">Ships Roles:{roles.map(role => `${role}`)}</span>
                        </div>
                    </div>
                </div>
            ));
};
