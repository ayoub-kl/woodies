import React, { useEffect, useState } from 'react'
import './style.scss'
import StepWizard from "react-step-wizard";
import {Step1,Step2,Step3} from './steps';
import Logo from "assets/logo/woodies.svg";
import { useTranslation } from 'react-i18next';
// import CustomNav from './customNav';
// eslint-disable-next-line import/no-anonymous-default-export
export default ({device}) =>{
    // const [currentStep,setCurrentStep]=useState(1)
    const {t}=useTranslation()
    const [selectedProduct,setSelectedProduct]=useState({    length:50,
        width:50,
        height:10,
        filling:'ressort',
        filling_sub:'mi-ferme',
        seating:'rounded',})
    const handleSelectProduct = (props) =>{
        setSelectedProduct({...selectedProduct,...props})
    }

useEffect(() => {
// console.log(selectedProduct)
}, [selectedProduct])

const CustomNav = ({goToStep,isActive,currentStep}) =>{
    return (
        <div>
        <nav className="builder_progress_bar">
        <ul>
        <li className={currentStep>=1 ?  'button active':'button'} id="nav_1" onClick={()=>goToStep(1)}>
        <button className='builder_progress_btn' >{(t('builder.progressBar.step1'))}</button>
        </li>
        <li className={currentStep>=2 ?'button active':'button'} id="nav_2" >
        <button className='builder_progress_btn' > {(t('builder.progressBar.step2'))}</button>
        </li>
        <li className={currentStep>=3 ? 'button active':'button'} id="nav_3">
        <button className='builder_progress_btn'> {(t('builder.progressBar.step3'))}</button>
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

    <StepWizard nav={<CustomNav />} isLazyMount={true} onStepChange={handleStepChange} >
    <Step1 device={device} handleSelectProduct={handleSelectProduct}/>
    <Step2 device={device} selectedProduct={selectedProduct} handleSelectProduct={handleSelectProduct}/>
    <Step3 device={device} selectedProduct={selectedProduct}/>
    </StepWizard>
    
    </div>

    </div>
)
    
}
// <li className={currentStep>=4  ? 'button active':'button'} id="nav_4" onClick={(e)=>handleSelectNav(e.currentTarget.id)}>
// <button className='builder_progress_btn'> test</button>
// </li>