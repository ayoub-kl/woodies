import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "assets/logo/wood-svgrepo-com.svg";
import useWindowPosition from "hooks/useWindowPosition";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
const scrollPos=useWindowPosition()

useLayoutEffect(() => {
console.log(scrollPos)
}, [scrollPos])

const handleLinkClick=(id) =>{
// ref.current?.scrollIntoView({behavior:'smooth'})
// window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
const element = document.getElementById(id);
if (element) {
  element.scrollIntoView({ behavior: 'smooth' });
}
}


  function renderSideBarOption(link, icon, text,id) {
    return (
      <Link
        to={link}
        onClick={(ref)=>handleLinkClick(id)}
        className="menubar_option"
        // className={({ isActive }) => (isActive ? cx("sidebar__option--selected") : cx("sidebar__option"))}
      >
        {icon && <img src={icon} width="50px" alt="Woodies! logo" />}

        <p>{text}</p>
      </Link>
    );
  }
  // menubar_wrapper
  return (
    <div className={scrollPos>0?'menubar_wrapper --active':'menubar_wrapper'}>
      <nav className="menubar_container">
        {renderSideBarOption("/", Logo, "Woodies!","homePage")}
        {renderSideBarOption("/", "", "Home","homePage")}
        {renderSideBarOption("about-us", "", "About us","aboutUs")}
        {renderSideBarOption("how-it-works", "", "How it works","steps")}
        {renderSideBarOption("/", "", "Categories")}
        {renderSideBarOption("/", "", "Testimony")}
      </nav>
    </div>
  );
};
