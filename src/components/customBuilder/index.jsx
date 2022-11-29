import React, { useEffect, useState } from 'react'
import './style.scss'
import StepWizard from "react-step-wizard";
import {Step1,Step2} from './steps';
import Logo from "assets/logo/woodies.svg";
import sliderTransitions from './transitions.scss'
// import CustomNav from './customNav';
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    // const [currentStep,setCurrentStep]=useState(1)
   const transitions= {
        enterRight: `${sliderTransitions.animated} ${sliderTransitions.enterRight}`,
        enterLeft: `${sliderTransitions.animated} ${sliderTransitions.enterLeft}`,
        exitRight: `${sliderTransitions.animated} ${sliderTransitions.exitRight}`,
        exitLeft: `${sliderTransitions.animated} ${sliderTransitions.exitLeft}`,
        intro: `${sliderTransitions.animated} ${sliderTransitions.intro}`,
    }

const CustomNav = ({goToStep,isActive,currentStep}) =>{

    const [selectedNav,setSelectedNav]=useState("nav_1")
    const handleSelectNav = (id) =>{
        setSelectedNav(id)
     
    }


    return (
        <div>
        <nav className="builder_progress_bar">
        <ul>
        <li className={currentStep>=1 ?  'button active':'button'} id="nav_1" onClick={()=>goToStep(1)}>
        <button >1.Choix du meuble</button>
        </li>
        <li className={currentStep>=2 ?'button active':'button'} id="nav_2" onClick={(e)=>handleSelectNav(e.currentTarget.id)}>
        <button > test</button>
        </li>
        <li className={currentStep>=3 ? 'button active':'button'} id="nav_3" onClick={(e)=>handleSelectNav(e.currentTarget.id)}>
        <button > test</button>
        </li>
        <li className={currentStep>=4  ? 'button active':'button'} id="nav_4" onClick={(e)=>handleSelectNav(e.currentTarget.id)}>
        <button > test</button>
        </li>
        </ul>
      </nav>
        </div>
    )
}

const renderArrFromText = (text) =>{
    const arrInput=Array.from(text)
    let arrSpanTitle=[]
    // console.log(arr)
    arrInput.forEach((elem,index) =>  (
      arrSpanTitle.push(<span key={index} className="builder_logo_wrapper" style={{"--i":index}}>{elem}</span>)
    ))
    return arrSpanTitle
    
    }

const handleStepChange = (stats) =>{
    // setCurrentStep(stats)
    console.log(stats)
}
return (
    <div className='builder_container'>

    <div className='builder_wrapper'>
    <nav className='builder_header'>
    <div className='builder_title_ribbon'>
 
    <img src={Logo} width="50px" alt="Woodies! logo" />

    {renderArrFromText("Woodies!")}
    
   
      <i className='rib_1'></i>
      <i className='rib_2'></i>
      <i className='rib_3'></i>
      <i className='rib_4'></i>
    </div>
  
    </nav>

    <StepWizard nav={<CustomNav />} isLazyMount={true} onStepChange={handleStepChange}  >
    <Step1/>
    <Step2/>
    </StepWizard>
    
    </div>

    </div>
)
    
}
