import DeviceProvider from 'hooks/deviceProvider';
import React from 'react'
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import CoreLayout from "./layout/CoreLayout"
import AppRoutes from "./routes/AppRoutes"

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{

return (
    <HelmetProvider>
    <DeviceProvider>
    <CoreLayout>
    <AppRoutes/>
    </CoreLayout>
    </DeviceProvider>
    </HelmetProvider>
)
}