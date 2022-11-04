import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "assets/logo/woodies.svg";
import Home from "assets/logo/home.svg";
import AboutUs from "assets/logo/aboutUs.svg";
import Steps from "assets/logo/steps.svg";
import Gallery from "assets/logo/gallery.svg";
import Contact from "assets/logo/contact.svg";
import useWindowPosition from "hooks/useWindowPosition";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
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


  function renderSideBarOption(link, icon, text,id) {
    return (
      <Link
        to={link}
        onClick={()=>handleLinkClick(id)}
        className={device==="mobile" ? "menubar_option mo_mob --active"  : "menubar_option"}
        // className={({ isActive }) => (isActive ? cx("sidebar__option--selected") : cx("sidebar__option"))}
      >
        {device === "mobile" | (id==="logo" && device!=="mobile")  ? <img src={icon} width="50px" alt="Woodies! logo" /> : null}

      { device!=="mobile" && <p>{text}</p> } 
      </Link>
    );
  }
  // menubar_wrapper
  return (
    <div className={menubarCls}>
      <nav className="menubar_container">
        {device!=="mobile" && renderSideBarOption("/", Logo, "Woodies!","logo")}
        {renderSideBarOption("/", Home, "Home","homePage")}
        {renderSideBarOption("about-us", AboutUs, "About us","aboutUs")}
        {renderSideBarOption("how-it-works", Steps, "How it works","steps")}
        {renderSideBarOption("gallery", Gallery, "Gallery","portfolio")}
        {renderSideBarOption("contact", Contact, "Contact",'contact')}
      </nav>
    </div>
  );
};
