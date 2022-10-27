import React from "react"
import {Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Homepage from "./Homepage";
import HowToSteps from "./HowToSteps";


// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{

    return (

        <div>
        <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="about-us" element={<AboutUs/>} />
        <Route path="how-it-works" element={<HowToSteps/>} />
        <Route path="gallery" element={<HowToSteps/>} />
        <Route path="contact" element={<HowToSteps/>} />
        </Routes>
        </div>

    )

}