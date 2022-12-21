import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ device, selectedProduct, previousStep }) => {

  const nameRef=useRef("")
  const phoneRef=useRef("")
  const [isFormValid,setFormValid]=useState(false)
  useEffect(() => {
    console.log(isFormValid);
  }, [isFormValid]);

// const [info,setInfo] = useState({phoneNum:'',fullName:''})


const handleInfo = () =>{

if (nameRef.current.value.length > 0 & Number(phoneRef.current.value).length===10 ) {
  setFormValid(true)
}else{
  setFormValid(false)
}
    // setInfo({phoneNum:value})
    // console.log(info)
    // phoneRef.current=value
    console.log(phoneRef)
}



  const renderFeature = (title, description) => (
    <div className="step3_feature">
      <div className="step3_feature_icon" />
      <div className="step3_feature_text">
        <p>
          <strong>{title}</strong>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <div className="step3_container">
      <div className="step3_right_wrapper">
        <span>
          <p>Categorie</p>
          <h2>Salon</h2>
        </span>
        <span>
          <p>Type</p>
          <h2>{selectedProduct?.title}</h2>
        </span>
        <span>
        <p>Format</p>
        <h2>Salon simple</h2>
      </span>
      </div>
      <div className="step3_left_wrapper">
        <div
          className="step3_product_wrapper"
          style={{ backgroundImage: `url(${selectedProduct?.img_nobkg})` }}
        />

        <div className="step3_feature_wrapper">
        <h1>caractéristiques du produit</h1>
        <div className="step3_product_features">
          {renderFeature("dimensions",`${selectedProduct?.length}* ${selectedProduct?.width}*${selectedProduct?.height}`)}
          {renderFeature("siège", selectedProduct?.seating)}
          {renderFeature("garniture", selectedProduct?.filling)}
          {renderFeature("fermeté", selectedProduct?.filling_sub)}
        </div>

        <div className="step3_price_tag">
        1500 mad
        </div>

        <div className="step3_info_wrapper">
    <h2> Je souhaite etre contacté(e)</h2>
        <div className="step3_input_container">
        <div className="form__group field">
        <input type="input" className="form__field" placeholder="Name" name="name" id='name' ref={nameRef} defaultValue={nameRef.current} onChange={handleInfo}   required/>
        <label htmlFor="name" className="form__label">Full name</label>
      </div>
      <div className="form__group field">
      <input type="tel" className="form__field" placeholder="phone number" name="phone" id='phone' ref={phoneRef} defaultValue={phoneRef.current} onChange={handleInfo}  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength="10" required />
      <label htmlFor="phone" className="form__label">Phone number</label>
    </div>
        </div>
    

    <button className='step3_btn' disabled={!isFormValid && "disabled"}>
    <p>Send</p>
    <div className="buttonaction">

  <FontAwesomeIcon icon={faCircleRight}/>
    </div>
    </button>

        </div>

        </div>

      </div>

    </div>
  );
};
