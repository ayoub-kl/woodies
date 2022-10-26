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

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const scrollPos=useWindowPosition()
const [isActive,setIsActive]=useState(false)
// const offset = document.getElementById('portfolio').getBoundingClientRect().top;

useEffect(() => {
  console.log(isActive)

}, [isActive])


useLayoutEffect(() => {
  const offset = document.getElementById('portfolio')?.getBoundingClientRect()?.bottom;
  scrollPos >= offset ? setIsActive(true) : setIsActive(false)
  // console.log("scrol",scrollPos)
  // console.log("off",offset)
}, [scrollPos])
  // const aboutUsRef=useRef()
  return (
    <div className={isActive ? "core_wrapper active" : "core_wrapper" }>
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
      <Portfolio/>
    </div>
  );
};
