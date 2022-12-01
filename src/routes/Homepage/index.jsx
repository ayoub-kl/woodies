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
import { useTranslation } from "react-i18next";
// import { usePreloadImages } from "hooks/PreloadImages";
const preload=[table,rect]
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ device }) => {
  const isMobile = device === "mobile";
  const isLaptop = device === "laptop";
  const { t } = useTranslation();
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
    const badges=t('homepage.badges',{returnObjects:true})
    console.log(badges)
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
              <p>{badges[index].sub1}</p>
              
              {!isMobile && <p>{badges[index].sub2}</p>} 
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
          <h3>{t('homepage.subtitles.sub1')}</h3>
          <h1> {t('homepage.subtitles.sub2')}</h1>
      
              
        <Link className="homepage_explorebtn"
        to="customize"
      >{t('homepage.button')}</Link>
        </span>

        <span className="rect_design_container">
    {preload.map((img)=>(

      <img
      key={img}
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
          {renderBadges(faTrophy, "High quality", "Crafted from top materials","badge1")}

          {renderBadges(faCheckSquare, "Warranty protection", "Over 2 years","badge2")}

          {renderBadges(faTruckFast, "Free shipping", "Order over 150$","badge3")}

          {renderBadges(faHeadset, "24/7 support", "Dedicated support","badge4")}
        </div>
        <div className="ribbon color"></div>
      </div>
    </div>
  );
};
