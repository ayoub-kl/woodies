import React, { createContext, useContext, useEffect, useState } from 'react'
import config from '../../config'
const sirvContext=createContext()
export const useToken = () => useContext(sirvContext);
// eslint-disable-next-line import/no-anonymous-default-export
export default ({children}) =>{
    const [tokenInfo,setTokenInfo]=useState()
    const [portfolioData,setPortfolioData]=useState()
const abortController= new AbortController();
const {sirv_api}=config

useEffect(() => {
console.log(portfolioData)
}, [portfolioData])


useEffect(() => {
    const fetchSirvAccessToken =async () =>{

        const dataBody={
            clientId:sirv_api.clientId,
            clientSecret:sirv_api.clientSecret

        }
        const options ={
            headers:{
                Authorization:'Bearer BEARER_TOKEN_HERE',
                'content-type' :"application/json"
            },
            method:'Post',
            body:JSON.stringify(dataBody),
            AbortSignal:abortController.signal
        }

        try {
            const data = await (
                await fetch(sirv_api.tokenUrl,options)
                
                ).json()  
                const expTimestamp = Math.floor(Date.now() / 1000 + data?.expiresIn);
                data.expTimestamp=expTimestamp
                setTokenInfo(data)
        } catch (error) {
            console.log(error)
        }
    }
    isTokenExpired() && fetchSirvAccessToken()

  return () => {
    abortController.abort()
  }
},[])




    const isTokenExpired=() =>{
        if (!tokenInfo || !tokenInfo?.expTimestamp) {
            return true
        } else {
            return Math.floor(Date.now() / 1000)>tokenInfo?.expTimestamp
        }
    }
    
    const fetchFolderContent=async (folderName)=>{
      
        const options ={
            headers:{
                Authorization:`Bearer ${tokenInfo?.token}`,
                'content-type' :"application/json"
            },
            method:'Get'
        }
    
        try {
    
            const folderContent= await (await fetch(`${sirv_api.foldersBaseUrl}${folderName}`,options)).json();
            setPortfolioData(folderContent?.contents)
            console.log(folderContent)  
        } catch (error) {
            console.log(error)
        }

        
    }

    return (
        <sirvContext.Provider value={{tokenInfo,fetchFolderContent,portfolioData}}>
        {children}
        </sirvContext.Provider>
    )



}


