import React from "react";
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png'

import "./main.css";

const Main = () => {
    return (
        <div className="main-page">

            <img src={logo} alt="SpaceX logo" width={500}/>
            <h1 className='main_header'>SpaceX GraphQL App </h1>
            <div className="buttons">
                <Link to={"/launches"}>
                    <button className="main_page_button"> Launches</button>
                </Link>
                <Link to={"/ships"}>
                    <button className="main_page_button"> Ships</button>
                </Link>
                <Link to={"/users"}>
                    <button className="main_page_button"> Users</button>
                </Link>
            </div>

        </div>
    );
};
export default Main;
