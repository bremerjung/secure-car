import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import CarGallery from "./components/CarGallery";

export type Car = {
    id: string,
    brand: string,
    model: string,
}

function App() {


    return (
        <div className="App">
            <header className="App-header">
                <h1>CARS</h1>
                <h2>ADDING CAR:</h2>
                <Routes>
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path={"/cars"} element={<CarGallery/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;

