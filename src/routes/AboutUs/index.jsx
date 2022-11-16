import React from "react";
// import { Parallax } from "react-parallax";
import bkg_prlx from "assets/images/bkg_prlx.jpg";
import bkg from "assets/design/bkg_foreground_table.png";
import Logo from "assets/logo/woodies.svg";
import "./style.scss";
import { memo } from "react";
import {
  ParallaxBanner,
} from "react-scroll-parallax";

// eslint-disable-next-line import/no-anonymous-default-export
export default memo(({ device }) => {
  const isMobile = device === "mobile";

  const background = {
  
    image: bkg_prlx,
    translateY: [0, 50],
    opacity: [1, 0.5],
    scale: [1.1, 1, "easeInQuad"],
    shouldAlwaysCompleteAnimation: true,
    speed: -20,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeInQuad"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div
        className={
          isMobile ? "aboutus_subtitles abssub_mob" : "aboutus_subtitles inset"
        }
      >
        <h2> <span className="flicker-fast">WOODIES</span> is the <span className="flicker-fast">home</span> of modern wooden <span className="flicker-fast">furniture</span> </h2>

      </div>
    ),
  };

  const foreground = {
    image: bkg,
    translateY: [0, 15],
    scale: [1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    speed: -10,
    
   
  };

  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };
  // {!isMobile && (
  //   <div className="aboutus_title_wrapper">
  //     <img src={Logo} width="30px" alt="Woodies! logo" />
  //     <h2>Who we are</h2>
  //     <span className="about_us_title_divider" />
  //     <h1> About us</h1>
  //   </div>
  // )}

  return (
    <div className="aboutus_container" id="aboutUs">
      {true ? (
        // <ParallaxBanner
        // layers={[{image:bkg_prlx,speed:-15}]}
        // className="aspect-[2/1]"
        // >
        //   <div
        //     className={
        //       isMobile ? "aboutus_subs_wrapper__mob" : "aboutus_subs_wrapper"
        //     }
        //   >
        //     <div
        //       className={
        //         isMobile ? "aboutus_subtitles abssub_mob" : "aboutus_subtitles"
        //       }
        //     >
        //       <h1> WOODIES is the home of modern wooden furniture . </h1>
        //     </div>
        //     <div className={isMobile ? "sd_child sd_child_mob" : "sd_child"}>
        //     <h1>
        //     Customized furniture made just for you.{" "}
        //   </h1>
        //     </div>

        //   </div>
        // </ParallaxBanner>
        <>
          {" "}
          <ParallaxBanner

            layers={[background, headline, foreground, gradientOverlay]}
            className="full"
          />
          <div
            className={
              isMobile
                ? "aboutus_subtitles abssub_mob"
                : "aboutus_subtitles full mask"
            }
          >
            <h1>Customized furniture made just for you</h1>
          </div>
          
        </>
      ) : (
        <div>
          <img
            src={bkg_prlx}
            lazy="true"
            alt="woodies portfolio models"
            className="portfolio_noprlx_bkg"
          />
          <div
            className={
              isMobile ? "aboutus_subs_wrapper__mob" : "aboutus_subs_wrapper"
            }
          >
            <div
              className={
                isMobile ? "aboutus_subtitles abssub_mob" : "aboutus_subtitles"
              }
            >
              <h1> WOODIES is the home of modern wooden furniture . </h1>
            </div>
            <div className={isMobile ? "sd_child sd_child_mob" : "sd_child"}>
              <h1>Customized furniture made just for you. </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
