import React from 'react'
import './style.scss'
// eslint-disable-next-line import/no-anonymous-default-export
export default ({totalSteps}) =>{

    let steps=[]
for (let i = 0; i < totalSteps; i++) {

 steps.push(
    <li className='progress_step' key={i}>
    <button type='button' />
    </li>
 )
    
}



return (
    <div>
    <nav className="app-progress-bar">
    <ul>{steps}</ul>
  </nav>
    </div>
)
    
}
