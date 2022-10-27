import React, { PureComponent } from 'react'
import './style.scss'
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{

return (
    <div className='contact_container' id='contact'>
    <span className="steps_title_divider" />
    <div className='contact_wrapper'>
   
    <div className='contact_elem_wrapper'>
    <h3>Woodies</h3>
    <text>0631839255</text>
    <text>woodies@gmail.com</text>
    <text>Rabat,Morocco</text>
    </div>
    <div className='contact_elem_wrapper'>
    <h3>Product</h3>
    <text>Furniture</text>
    <text>Packages</text>
    <text>Services</text>
    </div>
    <div className='contact_elem_wrapper'>
    <h3>Ressources</h3>
    <text>Blog</text>
    <text>Faqs</text>
    <text>Contact us</text>
    </div>
    <div className='contact_bg'/>
    </div>

    </div>
)
    
}
