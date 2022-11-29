import React from 'react'
import './style.scss'
// eslint-disable-next-line import/no-anonymous-default-export
export default ({device}) =>{

return (
    <div className='contact_container' id='contact'>
    <span className="steps_title_divider" />
    <div className={device==="mobile" ? 'cw_mob' : 'contact_wrapper'}>
   
    <div className={device==="mobile" ? 'cew_mob' : "contact_elem_wrapper"}>
    <h3>Woodies</h3>
    <span>06XXXXXXXX</span>
    <span>woodies@gmail.com</span>
    <span>Rabat,Morocco</span>
    </div>
    <div className={device==="mobile" ? 'cew_mob' : "contact_elem_wrapper"}>
    <h3>Product</h3>
    <span>Furniture</span>
    <span>Packages</span>
    <span>Services</span>
    </div>
    <div className={device==="mobile" ? 'cew_mob' : "contact_elem_wrapper"}>
    <h3>Ressources</h3>
    <span>Blog</span>
    <span>Faqs</span>
    <span>Contact us</span>
    </div>
    <div className={device==="mobile" ? 'cbg_mob' : "contact_bg"}/>
    </div>

    </div>
)
    
}
