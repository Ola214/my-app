// import React, {Component} from "react";

// function user() {
//     return <h1>user</h1>;
// } -> inny sposób zapisu

import React from 'react';

const user = (props) => {

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();


    // return <h2>I am a user, current hour is {hour + ':' + minute + ':' + second}</h2>
    return <div>
            <h2>Username: {props.username}</h2>
            <h3>Role: {props.role}</h3>
            <p>State: {props.children}</p>
        </div>
} //nazwy komponentów funkcyjnych piszemy małą literą

export default user;