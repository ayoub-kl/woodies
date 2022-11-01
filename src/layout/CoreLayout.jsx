import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
// import Header from '../components/Header'
import Header from "components/Header";
import Homepage from "../routes/Homepage";
import "./style.scss";
import SEO from "components/seo";
import AboutUs from "routes/AboutUs";
import HowToSteps from "routes/HowToSteps";
import Portfolio from "routes/Portfolio";
import useWindowPosition from "hooks/useWindowPosition";
import Contact from "routes/Contact";
import Aside from "./Aside";
import { useDevice } from "hooks/deviceProvider";


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
const {device} = useDevice()

useEffect(() => {
  console.log(device)

}, [device])

  return (
    <div className="core_wrapper">
      <SEO
        title="Woodies! building furniture made easier"
        description="is it made from wood ? then we can make it ! Woodies is a modern furniture showcasing website"
        name="Woodies!"
        type="furniture website"
      />
      <Aside/>
      <Header  device={device}/>
      <Homepage  device={device}/>
      <AboutUs  device={device}/>
      <HowToSteps  device={device}/>
      <Portfolio  device={device}/>
      <Contact  device={device}/>

    </div>
  );
};
