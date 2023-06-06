import React from 'react';
import {useDispatch} from "react-redux";
import {setBusket} from "../../redux/slices/busketSlice.js";

const Busket = ({ i }) => {
    const dispatch = useDispatch()
    const getBusket = () => dispatch(setBusket(i))

    return (
        <div className='box'>
            <div>
                <img src={i?.picture} alt=""/>
            </div>
            <p>{i?.price}</p>
            <p>{ i?.name }</p>
            <button onClick={getBusket}>busket</button>
        </div>
    );
};

export default Busket;