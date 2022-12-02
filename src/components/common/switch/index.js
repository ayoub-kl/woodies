import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import './style.scss'
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{

    const { i18n } = useTranslation();
    const language=useRef('fr');

    const handleLngSwitch=()=>{
        if (language.current==="fr") {
          i18n.changeLanguage('en');
          language.current="en"
        } else {
          i18n.changeLanguage('fr');
          language.current="fr"
        }
      
      }


return (
    <input type="checkbox" name="checkbox" className="menubar_lng_switch" aria-label="bar_language_switch" onClick={()=>handleLngSwitch()}/>
)
    
}
