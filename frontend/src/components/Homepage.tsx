import React from 'react';
import {Link} from "react-router-dom";

function Homepage() {

    return (
        <div>
            <header><h1>HELLO AND WELCOME</h1></header>
            <Link to={"/cars"}>Car Gallery</Link>
            <Link to={"/add-car"}>Add Car</Link>
        </div>
    );
}

export default Homepage;