import React from 'react';
import {useSelector} from "react-redux";
import {busketSelect} from "../../redux/slices/busketsSlice.js";
import Busket from "../Busket/Busket.jsx";

const MainPage = () => {

    const { buskets } = useSelector(busketSelect)


    return (
        <div>
            <div className="container">
                <ul>
                    {
                        buskets.map(i => <Busket key={i?._id} i={i}/>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default MainPage;