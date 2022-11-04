import React, { useLayoutEffect } from "react";
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
import { useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({device}) => {
const scrollPos=useWindowPosition()
const [menubarCls,setMenuBarCls]=useState("")

useEffect(() => {
console.log("FIRED")
let barCls="menubar_wrapper"
barCls=device==="mobile" ? `${barCls} mw_mob --active` : barCls
barCls=scrollPos>0? `${barCls} --active` : barCls 
setMenuBarCls(barCls)
}, [scrollPos,device])


// useLayoutEffect(() => {
// console.log(scrollPos)
// }, [scrollPos])

const handleLinkClick=(id) =>{
const element = document.getElementById(id);
if (element) {
  element.scrollIntoView({ behavior: 'smooth' });
}
}

const renderLogo = (id,icon)=>{

  return  id==="logo" ? <img src={icon} width="50px" alt="Woodies! logo" /> :   <FontAwesomeIcon icon={icon} />

}


  function renderSideBarOption(link, icon, text,id) {
    return (
      <Link
        to={link}
        onClick={()=>handleLinkClick(id)}
        className={device==="mobile" ? "menubar_option mo_mob "  : "menubar_option"}
        // className={({ isActive }) => (isActive ? cx("sidebar__option--selected") : cx("sidebar__option"))}
      >
      
        {device === "mobile" | (id==="logo" && device!=="mobile")  ?  renderLogo(id,icon)  : null}

      { device!=="mobile" && <p>{text}</p> } 
      </Link>
    );
  }
  // menubar_wrapper
  return (
    <div className={menubarCls}>
      <nav className={device==="mobile" ? "menubar_container__mob" : "menubar_container"}>
        {device!=="mobile" && renderSideBarOption("/", Logo, "Woodies!","logo")}
        {renderSideBarOption("/", faHome, "Home","homePage")}
        {renderSideBarOption("about-us", faIdBadge, "About us","aboutUs")}
        {renderSideBarOption("how-it-works", faRectangleList, "How it works","steps")}
        {renderSideBarOption("gallery", faImage, "Gallery","portfolio")}
        {renderSideBarOption("contact", faContactCard, "Contact",'contact')}
      </nav>
    </div>
  );
};
