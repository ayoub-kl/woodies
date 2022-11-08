
import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { RotateSpinner } from "react-spinners-kit";


const Homepage = lazy(() => import("routes/Homepage"));
const AboutUs = lazy(() => import("routes/AboutUs"));
const HowToSteps = lazy(() => import("routes/HowToSteps"));
const Portfolio = lazy(() => import("routes/Portfolio"));
const Contact = lazy(() => import("routes/Contact"));
const CustomBuilder = lazy(() => import("components/customBuilder"));
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Suspense
      fallback={
        <div className="core_wrapper_fallback">
          <RotateSpinner size={80} color="#e89f71" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="how-it-works" element={<HowToSteps />} />
        <Route path="gallery" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="customize" element={<CustomBuilder />} />
      </Routes>
    </Suspense>
  );
};
