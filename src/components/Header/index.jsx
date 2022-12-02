import React, { Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "assets/logo/woodies.svg";
import {
  faHome,
  faIdBadge,
  faRectangleList,
  faImage,
  faContactCard
} from "@fortawesome/free-solid-svg-icons";
import useWindowPosition from "hooks/useWindowPosition";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation, Trans } from 'react-i18next';
import Switch from 'components/common/switch'
// eslint-disable-next-line import/no-anonymous-default-export
export default ({device}) => {
const scrollPos=useWindowPosition()
const [menubarCls,setMenuBarCls]=useState("")
const { t } = useTranslation();

const isMobile=device==="mobile"
const isLaptop=device==="laptop"
useEffect(() => {
let barCls="menubar_wrapper"
barCls=isMobile ? `${barCls} mw_mob --active` : barCls
barCls=scrollPos>0? `${barCls} --active` : barCls 
setMenuBarCls(barCls)
}, [scrollPos,device])


// useLayoutEffect(() => {
// console.log(scrollPos)
// }, [scrollPos])
// useEffect(() => {
//   i18n.changeLanguage('fr');
// console.log(i18n)
// }, [])



const handleLinkClick=(id) =>{
const element = document.getElementById(id);
if (element) {
  element.scrollIntoView({ behavior: 'smooth' });
}
}

const renderLogo = (id,icon)=>{

  return  id==="logo" ? <img src={icon} width="50px" alt="Woodies! logo" /> :   <FontAwesomeIcon icon={icon} />

}

const renderArrFromText = (text) =>{
const arrInput=Array.from(text)
let arrSpanTitle=[]
// console.log(arr)
arrInput.forEach((elem,index) =>  (
  arrSpanTitle.push(<span key={index} style={{"--i":index}}>{elem}</span>)
))
return arrSpanTitle

}

  function renderSideBarOption(link, icon, text,id) {
    return (
      <Link
        to={link}
        onClick={()=>handleLinkClick(id)}
        className={isMobile ? "menubar_option mo_mob "  : isLaptop ? "mo_lap" : "menubar_option"}
        // className={({ isActive }) => (isActive ? cx("sidebar__option--selected") : cx("sidebar__option"))}
      >
      
        {isMobile | (id==="logo" && device!=="mobile")  ?  renderLogo(id,icon)  : null}

      { (!isMobile && id==="logo") ? renderArrFromText(text) : !isMobile ? <p>{text}</p> : null } 
      </Link>
    );
  }
  // menubar_wrapper
  return (
    <Suspense fallback={<div />}>
    <div className={menubarCls}>
    <nav className={isMobile ? "menubar_container__mob" : "menubar_container"}>
 
    {!isMobile && <Switch />}
      {device!=="mobile" && renderSideBarOption("/", Logo, t('header.title'),"logo")}
      {renderSideBarOption("/", faHome, t('header.menu.menu1'),"homePage")}
      {renderSideBarOption("about-us", faIdBadge, t('header.menu.menu2'),"aboutUs")}
      {renderSideBarOption("how-it-works", faRectangleList, t('header.menu.menu3'),"steps")}
      {renderSideBarOption("gallery", faImage, t('header.menu.menu4'),"portfolio")}
      {renderSideBarOption("contact", faContactCard, t('header.menu.menu5'),'contact')}
    </nav>
  </div>
  </Suspense>


  );
};

// {!isMobile && <input type="checkbox" name="checkbox" className="menubar_lng_switch" aria-label="bar_language_switch" onClick={()=>handleLngSwitch()}/>}