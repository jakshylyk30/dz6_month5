import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {busSelect} from "../../redux/slices/busketSlice.js";

const NavBar = () => {
    const { busket } = useSelector(busSelect)
    return (
        <div className='nav'>
            <ul>
                <li>
                    <NavLink className='link' to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink className='link' to={'/busket'}>Busket {busket.length}</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;