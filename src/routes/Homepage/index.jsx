import React, { useEffect } from "react";
import rect from "assets/design/rect.svg";
import table from "assets/design/table.svg";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faCheckSquare,
  faTruckFast,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { usePreloadImages } from "hooks/PreloadImages";
const preload=[table,rect]
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ device }) => {
  const isMobile = device === "mobile";
  const isLaptop = device === "laptop";
  // usePreloadImages(preload)

//   useLayoutEffect(() => {
//     const imagesPreload = [rect, table];
//     imagesPreload.forEach((image) => {
//         const newImage = new Image();
//         newImage.src = image;
//         window[image] = newImage;
//   })
// },[])

useEffect(() => {
  for (const image of preload) {
    const imageElement = new Image();
    imageElement.src = image;
  }
}, [])


  function renderBadges(icon, title, description,index) {
    return (
      <div className={isMobile ? "badge__mob" : "badge"} key={title}>
        <div id="badgeSlide">
          <div
            className={
              device === "mobile" ? "homepage_bdg hpg_mob" : "homepage_bdg"
            }
          >
           {!isMobile && <FontAwesomeIcon icon={icon} />} 
            <span>
              <p>{title}</p>
              
              {!isMobile && <p>{description}</p>} 
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="homepage_container" id="homePage">
      <div className="homepage_wrapper">
        <span
          className={
            isMobile
              ? "homepage_subtitle hs_mob"
              : isLaptop
              ? "homepage_subtitle hs_lap"
              : "homepage_subtitle"
          }
        >
          <h3>Are you looking for wooden furniture for your place?</h3>
          <h1> This is the Right Place</h1>
      
              
        <Link className="homepage_explorebtn"
        to="customize"
      >Shop now</Link>
        </span>

        <span className="rect_design_container">
    {preload.map((img)=>(

      <img
      loading="eager"
      height='auto'
      width='auto'
        className={
          isMobile
            ? "rect_design rd_mob"
            : isLaptop
            ? "rect_design rd_lap"
            : "rect_design"
        }
        src={img}
        alt="Woodies! wood table design"
      />
  ))}
  
  
        </span>
      </div>
      <div
        className={isMobile ? "homepage_badges hpgs_mob" : "homepage_badges"}
      >
        <div className="badge-space">
          {renderBadges(faTrophy, "High quality", "Crafted from top materials",1)}

          {renderBadges(faCheckSquare, "Warranty protection", "Over 2 years",2)}

          {renderBadges(faTruckFast, "Free shipping", "Order over 150$",3)}

          {renderBadges(faHeadset, "24/7 support", "Dedicated support",4)}
        </div>
        <div className="ribbon color"></div>
      </div>
    </div>
  );
};
