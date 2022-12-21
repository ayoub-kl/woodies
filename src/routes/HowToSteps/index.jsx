import React, {  Suspense, useEffect, useRef, useState } from "react";
import Logo from "assets/logo/woodies.svg";
import "./style.scss";
import measure from "assets/design/measure.svg";
import choice from "assets/design/choice.svg";
import build from "assets/design/build.svg";
import invoice from "assets/design/invoice.svg";
import deliver from "assets/design/delivery.svg";
import { memo } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";


// eslint-disable-next-line import/no-anonymous-default-export
export default memo(({ device }) => {
  const production ="https://hydrepoi.sirv.com/woodies/videos/production.mp4";
  const customize  ="https://hydrepoi.sirv.com/woodies/videos/customize.mp4";
const budget   ="https://hydrepoi.sirv.com/woodies/videos/budget.mp4";
const delivery   ="https://hydrepoi.sirv.com/woodies/videos/delivery.mp4";
const measurement  ="https://hydrepoi.sirv.com/woodies/videos/measure.mp4";
  const isMobile = device === "mobile";
  const stepArray=["step_1","step_2","step_3","step_4","step_5"]
  const [selectedStep,setSelectedStep]=useState(stepArray[0])
  const [selectedVideo,setSelectedVideo]=useState("")
  const videoPlayerRef=useRef()
  const vidRef=useRef(1)
  const {t}=useTranslation()
  // const bkg_styles = {
  //   height: "700px",
  //   width: "100vw",
  //   objectFit: "cover",
  // };
  useEffect(() => {
    const handleBgVidChoice=()=>{
      switch (selectedStep) {
        case "step_1":
          setSelectedVideo(customize); break;
          case "step_2":
            setSelectedVideo(measurement); break;
            case "step_3":
              setSelectedVideo(budget); break;
              case "step_4":
                setSelectedVideo(production); break;
                case "step_5":
                  setSelectedVideo(delivery); break;
            default:break
      }
      }
      // console.log(selectedStep)
    handleBgVidChoice()
  }, [selectedStep])


    useEffect(() => {
    const bgVidInterval=setInterval(() => {
      vidRef.current>4 ? vidRef.current=1 : vidRef.current=vidRef.current+1
      setSelectedStep(`step_${vidRef.current}`)
    }, 4000);

    
    return ()=>{clearInterval(bgVidInterval)}
    }, [])

  const background = {
    // image: "https://images.unsplash.com/photo-1570786240066-c0d753711cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
    // video:"../../assets/video/bkg_vid.mp4",
    translateY: [0, 0],
    opacity: [1, 0.5],
    scale: [1.1, 1, "easeInQuad"],
    shouldAlwaysCompleteAnimation: true,
    speed: -20,
    
    children: (
      <div
        className="bg_video"
      >
        <video loop autoPlay muted playsInline id="bg-video" key={selectedVideo} className="Sirv">
        <source src={selectedVideo} ref={videoPlayerRef} type="video/mp4"/>
        </video>
      </div>
    ),
  };

  // const headline = {
  //   translateY: [0, 30],
  //   scale: [1, 1.05, "easeInQuad"],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: (
  //     <div
  //       className={
  //         isMobile ? "aboutus_subtitles abssub_mob" : "aboutus_subtitles inset"
  //       }
  //     >
  //       <h2> IN JUST 4 STEPS</h2>
  //     </div>
  //   ),
  // };

  // const foreground = {
  //   image: bkg,
  //   translateY: [0, 15],
  //   scale: [1, 1, "easeOutCubic"],
  //   shouldAlwaysCompleteAnimation: true,
  //   speed: -10,
  // };

  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="steps_gradient inset" />,
  };

const handleStepClick=(id)=>{
setSelectedStep(id)
}

// ={selectedStep===id ? "step_wrapper _active" : isMobile ? "step_wrapper__mob"  : "step_wrapper" }

  function renderSteps(icon, text, width,id) {
    const steps=t('howtosteps.steps',{returnObjects:true})
    return (
      <span className={"step_wrapper" +  (selectedStep ===id ? " _active" : '') + (isMobile ? " _mob" : '') } onClick={()=>handleStepClick(id)} key={id} id={id}>
        <img src={icon} width={width} height="auto" loading="lazy" alt="steps" />
<Suspense fallback={<div/>}>
<p>{steps[id]}</p>
</Suspense>
      
      </span>
    );
  }

  //   {!isMobile && <div className="steps_title_wrapper">
  //   <img src={Logo} width="30px" alt="Woodies! logo" />
  //   <h2>How to custom</h2>
  //   <span className="steps_title_divider" />
  //   <h1> How it works</h1>
  // </div>

  // <Parallax
  //           bgImage={bkg_prlx}
  //           strength={isMobile ? 50 : 300}
  //           lazy={true}
  //           bgImageAlt='woodies steps background'
  //           bgImageStyle={bkg_styles}
  //         >
  //           <div style={{ height: "600px" }}>
  //             <div className="steps_title_wrapper">
  //               <div className={isMobile ? "steps_subtitles__mob" : "steps_subtitles"}>
  //                 <h1> 4 STEPS</h1>
  //               </div>
  //             </div>
  //           </div>
  //         </Parallax>

  // }

  return (
    <div className="steps_container" id="steps">
      <div>
        {true ? (
          <>
            {" "}
            <ParallaxBanner
              layers={[background,gradientOverlay]}
              className={isMobile ? "full_video_mob" : "full_video"}
            />
            <div className="steps_wrapper">
            <div
            className={
              isMobile ? "steps_disp_choices__mob" : "steps_disp_choices"
            }
          >
            {renderSteps(choice, "Choose Design", 80,"step_1")}
            {renderSteps(measure, "Area measuring", 100,"step_2")}
            {renderSteps(invoice, "Budgeting", 120,"step_3")}
            {renderSteps(build, "Production", 160,"step_4")}
            {renderSteps(deliver, "Delivery", 120,"step_5")}
          </div>
          </div>

   
          </>
          
        ) : (
          <div>
            <img
              src=""
              lazy="true"
              alt="woodies portfolio models"
              className="steps_noprlx_bkg"
            />
            <div style={{ height: "600px", position: "relative" }}>
              <div className="steps_title_wrapper">
                <div
                  className={
                    isMobile ? "steps_subtitles__mob" : "steps_subtitles"
                  }
                >
                  <h1> 4 STEPS</h1>
                </div>
              </div>
            </div>
          </div>
        )}

  
      </div>
    </div>
  );
});


// {renderSteps(choice, "Choose Design", 60,"step_1")}
// {renderSteps(measure, "Area measuring", 100,"step_2")}
// {renderSteps(invoice, "Budgeting", 140,"step_3")}
// {renderSteps(build, "Production", 180,"step_4")}
// {renderSteps(deliver, "Delivery", 170,"step_5")}