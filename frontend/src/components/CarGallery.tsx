import React, {useEffect} from 'react';
import {Car} from "../App";
import CarCard from "./CarCard";
import {Link} from "react-router-dom";
import axios from "axios";

function CarGallery() {

    const [cars, setCars] = React.useState<Car[]>([]);

    const getData = () => {
        axios.get("/api/cars").then((response) => {
            setCars(response.data);
        })
    }

    useEffect(getData, [])

    return (
        <div>
            <Link to={"/"}>back</Link>
            {cars.map((car) => (<CarCard car={car} key={car.id}/>))}
        </div>
    );
}

export default CarGallery;