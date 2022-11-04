import React, { PureComponent } from "react";
import Logo from "assets/logo/woodies.svg";
import "./style.scss";
import { Parallax, Background } from "react-parallax";
import bkg_prlx from "assets/images/bkg_prlx2.jpg";
import measure from "assets/design/measure.svg";
import choice from "assets/design/choice.svg";
import build from "assets/design/build.svg";
import invoice from "assets/design/invoice.svg";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({device}) => {
  const bkg_styles = {
    height: "700px",
    width: "100vw",
    objectFit: "cover",
  };

  function renderSteps(icon, text, width) {
    return (
      <span className="steps_wrapper">
        <img src={icon} width={width} alt="steps" />

        <p>{text}</p>
      </span>
    );
  }
  return (
    <div className="steps_container" id="steps">
      
    {device !== 'mobile' && <div className="steps_title_wrapper">
        <img src={Logo} width="30px" alt="Woodies! logo" />
        <h2>How to custom</h2>
        <span className="steps_title_divider" />
        <h1> How it works</h1>
      </div> }

      <div>
        <Parallax
          bgImage={bkg_prlx}
          strength={300}
          lazy={true}
          bgImageAlt='woodies steps background'
          bgImageStyle={bkg_styles}
        >
          <div style={{ height: "600px" }}>
            <div className="steps_title_wrapper">
              <div className="steps_subtitles">
                <h1> 4 STEPS</h1>
              </div>
            </div>
          </div>
        </Parallax>

        <div className="steps_disp_choices">
          {renderSteps(choice, "Choose Design", 231)}
          {renderSteps(measure, "Area measuring", 288)}
          {renderSteps(invoice, "Budgeting", 345)}
          {renderSteps(build, "Production", 409)}
        </div>
      </div>
    </div>
  );
};
