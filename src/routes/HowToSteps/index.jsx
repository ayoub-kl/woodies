import React, { PureComponent } from "react";
import Logo from "assets/logo/woodies.svg";
import "./style.scss";
import bkg_prlx from "assets/images/bkg_prlx2.jpg";
import measure from "assets/design/measure.svg";
import choice from "assets/design/choice.svg";
import build from "assets/design/build.svg";
import invoice from "assets/design/invoice.svg";
import { memo } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import bkg_vid from 'assets/video/bkg_vid.mp4'
// eslint-disable-next-line import/no-anonymous-default-export
export default memo(({ device }) => {
  const isMobile = device === "mobile";
  const bkg_styles = {
    height: "700px",
    width: "100vw",
    objectFit: "cover",
  };

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
        <video loop autoPlay muted id="bg-video">
        <source src={bkg_vid}/>
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
    children: <div className="gradient inset" />,
  };


  function renderSteps(icon, text, width) {
    return (
      <span className="steps_wrapper">
        <img src={icon} width={width} alt="steps" />

        <p>{text}</p>
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
              layers={[background]}
              className="full"
            />
      
          </>
        ) : (
          <div>
            <img
              src={bkg_prlx}
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

        <div
          className={
            isMobile ? "steps_disp_choices__mob" : "steps_disp_choices"
          }
        >
          {renderSteps(choice, "Choose Design", 190)}
          {renderSteps(measure, "Area measuring", 235)}
          {renderSteps(invoice, "Budgeting", 290)}
          {renderSteps(build, "Production", 360)}
        </div>
      </div>
    </div>
  );
});
