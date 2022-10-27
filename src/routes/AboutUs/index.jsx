import React, { PureComponent, useRef } from 'react'
import { Parallax, Background } from 'react-parallax';
import bkg_prlx from 'assets/images/bkg_prlx.jpg'
import Logo from 'assets/logo/wood-svgrepo-com.svg'
import './style.scss'
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{

return (
    <div className='aboutus_container' id='aboutUs'>
    <div className='aboutus_title_wrapper'>
    <img src={Logo} width="30px" alt="Woodies! logo" />
    <h2>
    Who we are
    </h2>
    <span className='about_us_title_divider'/>
    <h1> About us</h1>
    </div>
    <Parallax bgImage={bkg_prlx} strength={600} lazy={true} bgImageAlt='woodies portfolio models' blur={{ min: -1, max: 2 }} >
    <div className='aboutus_subs_wrapper'>
      <div className='aboutus_subtitles'>
      <h1> WOODIES is the home of modern wooden furniture . </h1>

      </div>
      <h1 className='sd_child'>Customized furniture made just for you. </h1>
    </div>
  </Parallax>
  </div>
)
    
}
