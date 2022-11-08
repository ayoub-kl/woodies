import React from "react";
// import rect from '../../assets/design/rectDesign.svg'
// import rectDesign from "assets/design/group.svg";
import rect from "assets/design/rect.svg";
import table from "assets/design/table.svg";
import "./style.scss";
// import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faCheckSquare,
  faTruckFast,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({device}) => {

  const isMobile = device==="mobile"
  const isLaptop = device==="laptop"

  function renderBadges(icon, title, description) {
    return (
      <div className={device==="mobile" ? "homepage_bdg hpg_mob" : "homepage_bdg"}>
        <FontAwesomeIcon icon={icon} />
        <span>
          <p>{title}</p>
          <p>{description}</p>
        </span>
      </div>
    );
  }

  return (
    <div className="homepage_container" id='homePage'>
      <div className="homepage_wrapper">
       
          <span className={isMobile ? "homepage_subtitle hs_mob" : isLaptop ? "homepage_subtitle hs_lap" : "homepage_subtitle"}> 
            <h3>Are you looking for woodden furniture for your place?</h3>
            <h1> This is the Right Place</h1>
            <button className="homepage_explorebtn">Explore furniture</button>
          </span>


        <span className="rect_design_container">
          <img
          loading="lazy"
            className={isMobile ? "rect_design rd_mob"  :isLaptop ?  "rect_design rd_lap" :"rect_design" }
            src={table}
            alt="Woodies! wood table design"
          />
          <img
          loading="lazy"
          className={isMobile ? "rect_design rd_mob"  : "rect_design"}
            src={rect}
            alt="Woodies! wood table design"
          />
        </span>
      </div>
      <div className={isMobile ? "homepage_badges hpgs_mob" : "homepage_badges"}>
        {renderBadges(faTrophy, "High quality", "Crafted from top materials")}
        {renderBadges(faCheckSquare, "Warranty protection", "Over 2 years")}
        {renderBadges(faTruckFast, "Free shipping", "Order over 150$")}
        {renderBadges(faHeadset, "24/7 support", "Dedicated support")}
      </div>
    </div>
  );
};
