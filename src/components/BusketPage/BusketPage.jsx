import React from 'react';
import {useSelector} from "react-redux";
import {busSelect} from "../../redux/slices/busketSlice.js";

const BusketPage = () => {
    const { busket } = useSelector(busSelect)

    return (
        <div>
            {
                busket.map(i => <div className='box'>
                    <div>
                        <img src={i?.picture} alt=""/>
                    </div>
                    <p>{i?.price}</p>
                    <p>{ i?.name }</p>
                </div>)
            }
        </div>
    );
};

export default BusketPage;