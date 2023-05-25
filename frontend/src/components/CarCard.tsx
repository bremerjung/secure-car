import React from 'react';
import {Car} from "../App";

type Props = {
    car: Car;
}

function CarCard(props:Props) {
    return (
        <div>
            <h1>Brand: {props.car.brand}</h1>
            <h1>Model: {props.car.model}</h1>
        </div>
    );
}

export default CarCard;