import React, {  Suspense, useEffect } from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Lazy, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useToken } from "hooks/assetsProvider";
// eslint-disable-next-line import/no-anonymous-default-export
export default memo(({ device }) => {

const {t}=useTranslation()
const {fetchFolderContent,portfolioData}=useToken()
const basePicUrl="https://hydrepoi.sirv.com/woodies/modeles/"


  //     const scrollPos=useWindowPosition()

  // useLayoutEffect(() => {
  // const getElemPosition =() =>{
  //     const offset = document.getElementById('portfolio').getBoundingClientRect().top;
  //     return offset
  // }

  // getElemPosition() === scrollPos

  // }, [])
useEffect(() => {
  fetchFolderContent("modeles")

}, [])


  const isMobile = device==="mobile"
  const isLaptop = device==="laptop"

  const renderModeleImg = (model) => {
    return (
      <span className="portfolio_model_wrapper" key={model?.filename}>
        <SwiperSlide key={model?.filename}>
          <img alt="model pic" className="Sirv" src={`${basePicUrl}${model?.filename}`}  />
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
      {portfolioData && portfolioData.map((model)=>(
        renderModeleImg(model)
      ))}
        </Swiper>
      </div>
      )
    }

  return (
    <Suspense fallback={<div/>}>
    <div  className={isMobile ?  'portfolio_container__mob' : 'portfolio_container'} id="portfolio">
    <span className={isMobile ?  'pwc_mob' : isLaptop ? 'pwc_lap' : 'portfolio_window_container'}>
      <h1>{t('portfolio.subtitles.sub1')}</h1>
      <h3>
      {t('portfolio.subtitles.sub2')}
      </h3>
  {isMobile && renderSlider()}
  
      <Link
      to="customize"
    >{t('portfolio.button')}</Link>
    </span>
    {!isMobile && renderSlider()}
  </div>
    </Suspense>

  );
})
// <button type="button" >Shop now</button>