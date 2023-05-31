import React from 'react';
import './App.css';

import {Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import CarGallery from "./components/CarGallery";
import AddCar from "./components/AddCar";

export type Car = {
    id: string,
    brand: string,
    model: string,
}

function App() {


    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path={"/add-car"} element={<AddCar/>}/>
                    <Route path={"/cars"} element={<CarGallery/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
