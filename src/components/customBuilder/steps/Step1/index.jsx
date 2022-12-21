import React, { useEffect } from 'react'
import './style.scss'
import bkg_bed from 'assets/builder/bed.jpg'
import bkg_sofa from 'assets/builder/sofa.jpg'
import bkg_table from 'assets/builder/diner.jpg'
import bkg_salon_trad from 'assets/builder/sofa_trad.jpg'

import sofa_nobkg from 'assets/builder/sofa_nobkg.png'
import bed_nobkg from 'assets/builder/bed_nobkg.png'
import table_nobkg from 'assets/builder/diner_nobkg.png'
import salonTrad_nobkg from 'assets/builder/salonTrad_nobkg.png'

import { useTranslation } from 'react-i18next'
// eslint-disable-next-line import/no-anonymous-default-export
export default ({device,nextStep,goToStep,handleSelectProduct}) =>{

  //     useEffect(() => {
  //  console.log(handleSelectProduct)
  //   }, [])
    

  const {t}=useTranslation()
  const isMobile = device === "mobile";

const renderFurnitureCards=(title,description,bkg_img,img_nobkg)=>{

  const handleCardClick=({title,bkg_img,img_nobkg})=>{
    handleSelectProduct({title,bkg_img,img_nobkg});
    nextStep();
  }

    return (
        <article className="card" onClick={()=>handleCardClick({title,bkg_img,img_nobkg})} key={title}>

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

{renderFurnitureCards((t('builder.furnitureCards.card1.title')),(t('builder.furnitureCards.card1.sub')),bkg_bed,bed_nobkg)}
{renderFurnitureCards(t('builder.furnitureCards.card2.title'),t('builder.furnitureCards.card2.sub'),bkg_sofa,sofa_nobkg)}
{renderFurnitureCards(t('builder.furnitureCards.card4.title'),t('builder.furnitureCards.card4.sub'),bkg_salon_trad,salonTrad_nobkg)}
{renderFurnitureCards(t('builder.furnitureCards.card3.title'),t('builder.furnitureCards.card3.sub'),bkg_table,table_nobkg)}

    </div>
)
    
}
