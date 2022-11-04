import React, { useEffect,lazy,Suspense} from "react";
import "./style.scss";
import SEO from "components/seo";

// import Header from "components/Header";
// import Homepage from "routes/Homepage";
// import AboutUs from "routes/AboutUs";
// import HowToSteps from "routes/HowToSteps";
// import Portfolio from "routes/Portfolio";
// import Contact from "routes/Contact";
// import Aside from "./Aside";
import { useDevice } from "hooks/deviceProvider";
import { RotateSpinner } from "react-spinners-kit";

const Aside = lazy(()=> import ('./Aside'))
const Header = lazy(()=> import ('components/Header'))
const Homepage = lazy(()=> import ('routes/Homepage'))
const AboutUs = lazy(()=> import ('routes/AboutUs'))
const HowToSteps = lazy(()=> import ('routes/HowToSteps'))
const Portfolio = lazy(()=> import ('routes/Portfolio'))
const Contact = lazy(()=> import ('routes/Contact'))




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

    
      <Suspense fallback={      <div className="core_wrapper_fallback" >  <RotateSpinner size={80} color="#e89f71"/></div>}>
      <Aside/>
      <Header  device={device}/>
      <Homepage  device={device}/>
      <AboutUs  device={device}/>
      <HowToSteps  device={device}/>
      <Portfolio  device={device}/>
      <Contact  device={device}/>
      </Suspense>
 

    </div>
  );
};
