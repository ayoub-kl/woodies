import React, { PureComponent, useLayoutEffect } from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Lazy, Pagination } from "swiper";

import useWindowPosition from "hooks/useWindowPosition";
import { Link } from "react-router-dom";
import { memo } from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default memo(({ device }) => {

  const modele1 ="https://hydrepoi.sirv.com/woodies/modeles/modele1.jpg";
  const modele2 ="https://hydrepoi.sirv.com/woodies/modeles/modele2.jpg";
  const modele3 ="https://hydrepoi.sirv.com/woodies/modeles/modele3.jpg";

  //     const scrollPos=useWindowPosition()

  // useLayoutEffect(() => {
  // const getElemPosition =() =>{
  //     const offset = document.getElementById('portfolio').getBoundingClientRect().top;
  //     return offset
  // }

  // getElemPosition() === scrollPos

  // }, [])
  const isMobile = device==="mobile"
  const isLaptop = device==="laptop"

  const renderModeleImg = (model) => {
    return (
      <span className="portfolio_model_wrapper">
        <SwiperSlide key={model}>
          <img src={model} alt="model pic" lazy="true" />
        </SwiperSlide>
      </span>
    );
  };
    const renderSlider = () =>{
      return (
        <div className={device==="mobile" ?  'design_rect__mob' : 'design_rect'}>
        <Swiper
          lazy={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{ delay: 2500 }}
          modules={[Autoplay, Pagination, Lazy]}
          className="mySwiper"
        >
          {renderModeleImg(modele1)}
          {renderModeleImg(modele2)}
          {renderModeleImg(modele3)}
        </Swiper>
      </div>
      )
    }

  return (
    <div  className={isMobile ?  'portfolio_container__mob' : 'portfolio_container'} id="portfolio">
      <span className={isMobile ?  'pwc_mob' : isLaptop ? 'pwc_lap' : 'portfolio_window_container'}>
        <h1>High-Quality Furniture Just For You</h1>
        <h3>
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home
        </h3>
    {isMobile && renderSlider()}
    
        <Link
        to="customize"
      >Shop now</Link>
      </span>
      {!isMobile && renderSlider()}
    </div>
  );
})
// <button type="button" >Shop now</button>