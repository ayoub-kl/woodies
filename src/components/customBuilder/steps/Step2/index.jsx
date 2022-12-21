import React, { useEffect, useState } from 'react'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css"
import mousse from 'assets/builder/mousse.jpg'
import ressort from 'assets/builder/springs.jpg'
import straightCouch from 'assets/builder/straight_couch.jpg'
import roundedCouch from 'assets/builder/rounded_couch.jpg'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-anonymous-default-export
export default ({device,nextStep,selectedProduct,previousStep,handleSelectProduct}) =>{
// const [as1_config,setAs1Config]=useState({
//     length:50,
// width:50,
// height:10,
// filling:'ressort',
// filling_sub:'mi-ferme',
// seating:'rounded',

// })
    const isMobile = device === "mobile";
const foamArr=[
    {label:"HR dur",value:"hr_dur"},
    {label:"Moussé",value:"moussé"}
]
const springArr=[
    {label:"ferme",value:"ferme"},
    {label:"Mi-ferme",value:"mi_ferme"}
]
//     useEffect(() => {
//       console.log(as1_config)
// console.log(selectedProduct)
//     }, [as1_config])
    

const handleGarnChange = (value,state) =>{
    console.log(value)
    handleSelectProduct({...selectedProduct,[state]:value})

}

    const renderRadioBtns= (choiceArr) =>{
        console.log(choiceArr)
        return (
            <div className="step2_radio_choices">
            {choiceArr.map((choice,index)=>(
                
                <input key={index} label={choice?.label} type="radio" id={choice?.value} name="option" value={choice?.value} onChange={(e)=>handleGarnChange(e.target.value,"filling_sub")}/>
            ))}

</div>
        )
    }

    const renderSlider =(title,state,setState)=>{
        return (
            <div>
            <span className='step2_sliders_title'>{title}</span>
            <div className='step2_slider_wrapper'>
            <span>length</span>
            <InputRange
            key={title}
            formatLabel={value=>`${value}cm`}
            maxValue={1000}
            minValue={50}
            value={state.length}
            onChange={value => setState({...state,length:value})} />
            </div>
            <div className='step2_slider_wrapper'> 
            <span>width</span>
            <InputRange
            key={title}
            formatLabel={value=>`${value}cm`}
            maxValue={200}
            minValue={50}
            value={state.width}
            onChange={value =>  setState({...state,width:value})} />
            </div>
            <div className='step2_slider_wrapper'>
            <span>height</span>
            <InputRange
            key={title}
            formatLabel={value=>`${value}cm`}
            maxValue={40}
            minValue={10}
            value={state.height}
            onChange={value =>  setState({...state,height:value})} />
            </div>

            </div>
        )
    }

const renderFooter = (title,price) =>{

    return (
        <div className='step2_footer'>
        <h1>{title}</h1>
        <span>{price} MAD</span>

        <div className='step2_btn_grp'>
        <button className='step2_btn' onClick={()=>previousStep()}>
        <p>Back</p>
        <div className="buttonaction">

      <FontAwesomeIcon icon={faCircleLeft}/>
        </div>
        </button>

        
        <button className='step2_btn' onClick={()=>nextStep()}>
        <p>Next</p>
        <div className="buttonaction">

      <FontAwesomeIcon icon={faCircleRight}/>
        </div>
        </button>
  
        </div>
        </div>
    )
}

return (
    <div className={isMobile ? "step2_container__mob" : "step2_container"}>

<div className='step2_product_wrapper' style={{backgroundImage:`url(${selectedProduct?.bkg_img})`}}/>

<div className='step2_choices_wrapper'>
<div className='step2_sliders_container'>
{renderSlider("Assise 1",selectedProduct,handleSelectProduct)}
</div>

<div className='step2_multi_choice_container'>
<div className="step2_radio_choices header">
    <input key="mousse" id="mousse"  label="mousse" type="radio"  name="filling" value="mousse"   onChange={(e)=>handleGarnChange(e.target.value,"filling")}/>
    <input key="ressort" id="ressort" label="ressort" type="radio" name="filling" value="ressort" defaultChecked onChange={(e)=>handleGarnChange(e.target.value,"filling")}/>
</div>
<div className='step2_radio_choice_wrapper'>
<div  className="step2_choice_bkg" style={{backgroundImage:`url(${selectedProduct.filling==="mousse"? mousse : ressort })`}} />
{renderRadioBtns(selectedProduct.filling==="mousse"? foamArr : springArr)}
</div>

</div>


<div className='step2_multi_choice_container'>
<div className="step2_radio_choices header">
    <input key="straight" id="straight"  label="straight" type="radio"  name="seating" value="straight"    onChange={(e)=>handleGarnChange(e.target.value,"seating")}/>
    <input key="rounded" id="rounded" label="rounded" type="radio" name="seating" value="rounded" defaultChecked onChange={(e)=>handleGarnChange(e.target.value,"seating")}/>
</div>
<div className='step2_radio_choice_wrapper'>
<div  className="step2_choice_bkg" style={{backgroundImage:`url(${selectedProduct.seating==="straight"? straightCouch : roundedCouch })` ,width:'100%'}} />
</div>

</div>
</div>

  
{renderFooter(selectedProduct?.title,1200)}
    </div>
)
    
}
