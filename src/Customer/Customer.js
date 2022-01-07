import React, { useState } from "react";

const Customer = () => {

    const [customerState, setCustomerState] = useState({
        pickedName: 'Martin'
    });

    const [namesState, setNamesState] = useState({
        names: ['Martin', 'Andrea', 'Carol']
    });

    const switchName = () => {
        const namePool = customerState.names;
        const number = Math.floor(Math.random()*3);// 0, 1, 2
        setCustomerState({pickedName: namePool[number]});

    }

    return(
        <div>
            <h2>Customer:</h2>
            <h3>{customerState.pickedName}</h3>
            <button onClick={switchName}>Change</button>
        </div>
    );
}

export default Customer;