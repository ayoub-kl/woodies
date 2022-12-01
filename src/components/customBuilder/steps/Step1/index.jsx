import React, { useEffect } from 'react'
import './style.scss'
import bkg_bed from 'assets/builder/bed.jpg'
import bkg_sofa from 'assets/builder/sofa.jpg'
import bkg_table from 'assets/builder/diner.jpg'
// eslint-disable-next-line import/no-anonymous-default-export
export default ({device,nextStep,goToStep}) =>{

  const isMobile = device === "mobile";

const renderFurnitureCards=(title,description,bkg_img)=>{
 
    return (
        <article className="card" onClick={()=>nextStep()} key={title}>

        <div className="card__img" ></div>
        <a href="#" className="card_link">
           <div className="card__img--hover" style={{backgroundImage:`url(${bkg_img})`}}></div>
         </a>
        <div className="card__info">
          <span className="card__category">{title}</span>
          <h3 className="card__title">{description}</h3>
    
        </div>
      </article>
    )
}

return (
    <div className={isMobile ? "step1_container__mob" : "step1_container"}>

{renderFurnitureCards("Beds","Modern and comfy beds to build up stamina after a long day.",bkg_bed)}
{renderFurnitureCards("Sofas","Modern and comfy sofas to build up stamina after a long day.",bkg_sofa)}
{renderFurnitureCards("Dining table sets","Modern and comfy beds to build up stamina after a long day.",bkg_table)}

    </div>
)
    
}
