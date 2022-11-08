import React from 'react'
import './style.scss'
import StepWizard from "react-step-wizard";
// import CustomNav from './customNav';
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{

const CustomNav = () =>{

    return (
        <div>
        <nav className="builder_progress_bar">
        <ul>
        <li>
        <button> Choix du meuble</button>
        </li>
        <li>
        <button> test</button>
        </li>
        <li>
        <button> test</button>
        </li>
        <li>
        <button> test</button>
        </li>
        </ul>
      </nav>
        </div>
    )
}


return (
    <div className='builder_container'>

    <StepWizard nav={<CustomNav />} isLazyMount={true}>
    
    
    </StepWizard>
    
    
    </div>
)
    
}
