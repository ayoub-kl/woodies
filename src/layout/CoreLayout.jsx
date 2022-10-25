import React, { useRef } from "react";
// import Header from '../components/Header'
import Header from "components/Header";
import Homepage from "../routes/Homepage";
import "./style.scss";
import SEO from "components/seo";
import AboutUs from "routes/AboutUs";
import HowToSteps from "routes/HowToSteps";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  // const aboutUsRef=useRef()
  return (
    <div className="core_wrapper">
      <SEO
        title="Woodies! building furniture made easier"
        description="is it made from wood ? then we can make it ! Woodies is a modern furniture showcasing website"
        name="Woodies!"
        type="furniture website"
      />

      <Header />
      <Homepage/>
      <AboutUs/>
      <HowToSteps/>
  
    </div>
  );
};
