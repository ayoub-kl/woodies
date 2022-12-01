import React from 'react'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import './style.scss'
// eslint-disable-next-line import/no-anonymous-default-export
export default ({device}) =>{
const {t}=useTranslation()
return (
    <Suspense fallback={<div/>}>

    <div className='contact_container' id='contact'>
    <span className="steps_title_divider" />
    <div className={device==="mobile" ? 'cw_mob' : 'contact_wrapper'}>
   
    <div className={device==="mobile" ? 'cew_mob' : "contact_elem_wrapper"}>
    <h3>{t('contact.infoGrp1.title')}</h3>
    <span>{t('contact.infoGrp1.sub1')}</span>
    <span>{t('contact.infoGrp1.sub2')}</span>
    <span>{t('contact.infoGrp1.sub3')}</span>
    </div>
    <div className={device==="mobile" ? 'cew_mob' : "contact_elem_wrapper"}>
    <h3>{t('contact.infoGrp2.title')}</h3>
    <span>{t('contact.infoGrp2.sub1')}</span>
    <span>{t('contact.infoGrp2.sub2')}</span>
    <span>{t('contact.infoGrp2.sub3')}</span>
    </div>
    <div className={device==="mobile" ? 'cew_mob' : "contact_elem_wrapper"}>
    <h3>{t('contact.infoGrp3.title')}</h3>
    <span>{t('contact.infoGrp3.sub1')}</span>
    <span>{t('contact.infoGrp3.sub2')}</span>
    <span>{t('contact.infoGrp3.sub3')}</span>
    </div>
    <div className={device==="mobile" ? 'cbg_mob' : "contact_bg"}/>
    </div>

    </div>
    </Suspense>
)
    
}
