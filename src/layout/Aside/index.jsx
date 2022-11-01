import useWindowPosition from 'hooks/useWindowPosition'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import './style.scss'
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{

    const scrollPos=useWindowPosition()
    const [isActive,setIsActive]=useState(false)
    // const [offset,setOffset]=useState()
    const offset = document.getElementById('portfolio')?.getBoundingClientRect()?.top;
    
    // useLayoutEffect(() => {
    //     const offsetVal = document.getElementById('portfolio')?.getBoundingClientRect()?.top;
    //     setOffset(offsetVal)
    // }, [])

    useEffect(() => {
        console.log("offset",offset)
         }, [offset])


    useLayoutEffect(() => {
        scrollPos >= offset ? setIsActive(true) : setIsActive(false)
        console.log("scrollpos",scrollPos)
      }, [scrollPos])


return (
    <aside className={isActive ? "all_bg_container active" : "all_bg_container" }/>
)
    
}
