import DeviceProvider from 'hooks/deviceProvider';
import TokenProvider from 'hooks/assetsProvider';
import React from 'react'
import { HelmetProvider } from 'react-helmet-async';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import CoreLayout from "./layout/CoreLayout"
import AppRoutes from "./routes/AppRoutes"

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{

return (
    <>
    <script src="https://scripts.sirv.com/sirv.js"/>
    <TokenProvider>
    <ParallaxProvider>
    <HelmetProvider>
    <DeviceProvider>
    <CoreLayout>
    <AppRoutes/>
    </CoreLayout>
    </DeviceProvider>
    </HelmetProvider>
    </ParallaxProvider>
    </TokenProvider>
    </>

)
}