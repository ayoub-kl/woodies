"use strict";(self.webpackChunkfurnitureshop=self.webpackChunkfurnitureshop||[]).push([[625],{9299:function(e,n,t){t(2791);n.Z=t.p+"static/media/woodies.7e211afe8192132669c1ba103f66629f.svg"},625:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var a=t(2791),r=(t(9299),t(8616)),i=t(3168),s=t(184),o=(0,a.memo)((function(e){var n="mobile"===e.device,t=(0,i.$)().t,a={image:"https://hydrepoi.sirv.com/woodies/images/bkg_prlx.jpg",translateY:[0,50],opacity:[1,.5],scale:[1.1,1,"easeInQuad"],shouldAlwaysCompleteAnimation:!0,speed:-20},o={translateY:[0,30],scale:[1,1.05,"easeInQuad"],shouldAlwaysCompleteAnimation:!0,expanded:!1,children:(0,s.jsx)("div",{className:n?"aboutus_subtitles abssub_mob":"aboutus_subtitles inset",children:(0,s.jsxs)("h2",{children:[" ",(0,s.jsx)("span",{className:"flicker-fast",children:t("aboutus.titles.title1.part1")}),t("aboutus.titles.title1.part2"),(0,s.jsx)("span",{className:"flicker-fast",children:t("aboutus.titles.title1.part3")}),t("aboutus.titles.title1.part4")," ",(0,s.jsx)("span",{className:"flicker-fast",children:t("aboutus.titles.title1.part5")})," "]})})},u={image:"https://hydrepoi.sirv.com/woodies/images/bkg_foreground_table.png",translateY:[0,15],scale:[1,1,"easeOutCubic"],shouldAlwaysCompleteAnimation:!0,speed:-10},c={opacity:[0,1,"easeOutCubic"],shouldAlwaysCompleteAnimation:!0,expanded:!1,children:(0,s.jsx)("div",{className:"gradient inset"})};return(0,s.jsx)("div",{className:n?"aboutus_container__mob":"aboutus_container",id:"aboutUs",children:(0,s.jsxs)(s.Fragment,{children:[" ",(0,s.jsx)(r.UG,{layers:[a,o,!n&&u,c],className:"full"}),(0,s.jsx)("div",{className:n?"aboutus_subtitles abssub_mob full_mob mask":"aboutus_subtitles full mask",style:{backgroundImage:"url(".concat("https://hydrepoi.sirv.com/woodies/images/bkg_prlx3.jpg",")")},children:(0,s.jsx)("h1",{children:t("aboutus.titles.title2")})})]})})}))},3168:function(e,n,t){t.d(n,{$:function(){return h}});var a=t(9439),r=t(4942),i=t(2791),s=t(8589);function o(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var u={};function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&u[n[0]]||("string"===typeof n[0]&&(u[n[0]]=new Date),o.apply(void 0,n))}function l(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.languages[0],r=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===a.toLowerCase())return!0;var s=function(e,t){var a=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===a||2===a};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(a,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!s(a,e)||r&&!s(i,e))))}function d(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return c("i18n.languages were undefined or empty",n.languages),!0;var a=void 0!==n.options.ignoreJSONStructure;return a?n.hasLoadedNamespace(e,{precheck:function(n,a){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))return!1}}):f(e,n,t)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e,n){var t=(0,i.useRef)();return(0,i.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function h(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,i.useContext)(s.OO)||{},o=r.i18n,u=r.defaultNS,f=t||o||(0,s.nI)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new s.zv),!f){c("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[p,{},!1];return h.t=p,h.i18n={},h.ready=!1,h}f.options.react&&void 0!==f.options.react.wait&&c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=g(g(g({},(0,s.JP)()),f.options.react),n),v=m.useSuspense,y=m.keyPrefix,w=e||u||f.options&&f.options.defaultNS;w="string"===typeof w?[w]:w||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(w);var j=(f.isInitialized||f.initializedStoreOnce)&&w.every((function(e){return d(e,f,m)}));function k(){return f.getFixedT(null,"fallback"===m.nsMode?w:w[0],y)}var O=(0,i.useState)(k),x=(0,a.Z)(O,2),C=x[0],N=x[1],_=w.join(),I=b(_),A=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=m.bindI18n,n=m.bindI18nStore;function t(){A.current&&N(k)}return A.current=!0,j||v||l(f,w,(function(){A.current&&N(k)})),j&&I&&I!==_&&A.current&&N(k),e&&f&&f.on(e,t),n&&f&&f.store.on(n,t),function(){A.current=!1,e&&f&&e.split(" ").forEach((function(e){return f.off(e,t)})),n&&f&&n.split(" ").forEach((function(e){return f.store.off(e,t)}))}}),[f,_]);var P=(0,i.useRef)(!0);(0,i.useEffect)((function(){A.current&&!P.current&&N(k),P.current=!1}),[f,y]);var S=[C,f,j];if(S.t=C,S.i18n=f,S.ready=j,j)return S;if(!j&&!v)return S;throw new Promise((function(e){l(f,w,(function(){e()}))}))}}}]);
//# sourceMappingURL=625.f91c07d0.chunk.js.map