import React, { PureComponent, useLayoutEffect } from 'react'
import './style.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Lazy, Pagination } from "swiper";
import modele1 from 'assets/portfolio/modele1.jpg'
import modele2 from 'assets/portfolio/modele2.jpg'
import modele3 from 'assets/portfolio/modele3.jpg'
import useWindowPosition from 'hooks/useWindowPosition';
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
//     const scrollPos=useWindowPosition()

// useLayoutEffect(() => {
// const getElemPosition =() =>{
//     const offset = document.getElementById('portfolio').getBoundingClientRect().top;
//     return offset
// }

// getElemPosition() === scrollPos 


// }, [])

    const renderModeleImg = (model) =>{
        return(
            <span className='portfolio_model_wrapper'>
            <SwiperSlide key={model}><img src={model} alt="model pic"/></SwiperSlide>
            </span>
        )
   
    }
return (
    <div className='portfolio_container' id='portfolio'>
    <div className='design_rect'>
        <Swiper
        lazy={true}
    pagination={{
      dynamicBullets: true,
    }}
    autoplay={{delay:2500}}
    modules={[Autoplay,Pagination,Lazy]}
    className="mySwiper"
  >
{renderModeleImg(modele1)}
{renderModeleImg(modele2)}
{renderModeleImg(modele3)}

  </Swiper>
    </div>

<span className='portfolio_window_container'>
<h1>High-Quality
Furniture Just
For You</h1>
<h3>Our furniture is made from selected and best quality materials that are suitable for your dream home</h3>
<button>Shop now</button>

</span>    
    
    </div>
)
    
}
