(self.webpackChunkfurnitureshop=self.webpackChunkfurnitureshop||[]).push([[423],{9299:function(n,e,t){"use strict";t(2791);e.Z=t.p+"static/media/woodies.7e211afe8192132669c1ba103f66629f.svg"},1150:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var r=t(9439),a=t(2791),i=t(9362),s=t.n(i),o=t.p+"static/media/bed.ae2fc499220f39edf2ba.jpg",c=t.p+"static/media/sofa.9c3d72b16625df78c060.jpg",u=t.p+"static/media/diner.070c6dc4ab72352cc07a.jpg",f=t(3168),p=t(184),l=function(n){var e=n.device,t=n.nextStep,r=(n.goToStep,(0,f.$)().t),a="mobile"===e,i=function(n,e,r){return(0,p.jsxs)("article",{className:"card",onClick:function(){return t()},children:[(0,p.jsx)("div",{className:"card__img"}),(0,p.jsx)("a",{href:"#",className:"card_link",children:(0,p.jsx)("div",{className:"card__img--hover",style:{backgroundImage:"url(".concat(r,")")}})}),(0,p.jsxs)("div",{className:"card__info",children:[(0,p.jsx)("span",{className:"card__category",children:n}),(0,p.jsx)("h3",{className:"card__title",children:e})]})]},n)};return(0,p.jsxs)("div",{className:a?"step1_container__mob":"step1_container",children:[i(r("builder.furnitureCards.card1.title"),r("builder.furnitureCards.card1.sub"),o),i(r("builder.furnitureCards.card2.title"),r("builder.furnitureCards.card2.sub"),c),i(r("builder.furnitureCards.card3.title"),r("builder.furnitureCards.card3.sub"),u)]})},d=function(){return(0,p.jsx)("div",{children:"TESTTTTTTTTTTTTT 2"})},h=t(9299),m={},b=function(n){var e=n.device,t=(0,f.$)().t,i=("".concat(m.animated," ").concat(m.enterRight),"".concat(m.animated," ").concat(m.enterLeft),"".concat(m.animated," ").concat(m.exitRight),"".concat(m.animated," ").concat(m.exitLeft),"".concat(m.animated," ").concat(m.intro),function(n){var e=n.goToStep,i=(n.isActive,n.currentStep),s=(0,a.useState)("nav_1"),o=(0,r.Z)(s,2),c=(o[0],o[1]),u=function(n){c(n)};return(0,p.jsx)("div",{children:(0,p.jsx)("nav",{className:"builder_progress_bar",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{className:i>=1?"button active":"button",id:"nav_1",onClick:function(){return e(1)},children:(0,p.jsx)("button",{className:"builder_progress_btn",children:t("builder.progressBar.step1")})}),(0,p.jsx)("li",{className:i>=2?"button active":"button",id:"nav_2",onClick:function(n){return u(n.currentTarget.id)},children:(0,p.jsxs)("button",{className:"builder_progress_btn",children:[" ",t("builder.progressBar.step2")]})}),(0,p.jsx)("li",{className:i>=3?"button active":"button",id:"nav_3",onClick:function(n){return u(n.currentTarget.id)},children:(0,p.jsxs)("button",{className:"builder_progress_btn",children:[" ",t("builder.progressBar.step3")]})})]})})})});return(0,p.jsx)("div",{className:"builder_container",children:(0,p.jsxs)("div",{className:"builder_wrapper",children:[(0,p.jsx)("nav",{className:"builder_header",children:(0,p.jsxs)("div",{className:"builder_title_ribbon",children:[(0,p.jsx)("img",{src:h.Z,width:"50px",alt:"Woodies! logo"}),function(n){var e=Array.from(n),t=[];return e.forEach((function(n,e){return t.push((0,p.jsx)("span",{className:"builder_logo_wrapper",style:{"--i":e},children:n},e))})),t}("Woodies!"),(0,p.jsx)("i",{className:"rib_1"}),(0,p.jsx)("i",{className:"rib_2"}),(0,p.jsx)("i",{className:"rib_3"}),(0,p.jsx)("i",{className:"rib_4"})]})}),(0,p.jsxs)(s(),{nav:(0,p.jsx)(i,{}),isLazyMount:!0,onStepChange:function(n){console.log(n)},children:[(0,p.jsx)(l,{device:e}),(0,p.jsx)(d,{device:e})]})]})})}},3168:function(n,e,t){"use strict";t.d(e,{$:function(){return b}});var r=t(9439),a=t(4942),i=t(2791),s=t(8589);function o(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var c={};function u(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];"string"===typeof e[0]&&c[e[0]]||("string"===typeof e[0]&&(c[e[0]]=new Date),o.apply(void 0,e))}function f(n,e,t){n.loadNamespaces(e,(function(){if(n.isInitialized)t();else{n.on("initialized",(function e(){setTimeout((function(){n.off("initialized",e)}),0),t()}))}}))}function p(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.languages[0],a=!!e.options&&e.options.fallbackLng,i=e.languages[e.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(n,t){var r=e.services.backendConnector.state["".concat(n,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!s(e.isLanguageChangingTo,n))&&(!!e.hasResourceBundle(r,n)||(!(e.services.backendConnector.backend&&(!e.options.resources||e.options.partialBundledLanguages))||!(!s(r,n)||a&&!s(i,n))))}function l(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return u("i18n.languages were undefined or empty",e.languages),!0;var r=void 0!==e.options.ignoreJSONStructure;return r?e.hasLoadedNamespace(n,{precheck:function(e,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,n))return!1}}):p(n,e,t)}function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,a.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var m=function(n,e){var t=(0,i.useRef)();return(0,i.useEffect)((function(){t.current=e?t.current:n}),[n,e]),t.current};function b(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.i18n,a=(0,i.useContext)(s.OO)||{},o=a.i18n,c=a.defaultNS,p=t||o||(0,s.nI)();if(p&&!p.reportNamespaces&&(p.reportNamespaces=new s.zv),!p){u("You will need to pass in an i18next instance by using initReactI18next");var d=function(n){return Array.isArray(n)?n[n.length-1]:n},b=[d,{},!1];return b.t=d,b.i18n={},b.ready=!1,b}p.options.react&&void 0!==p.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=h(h(h({},(0,s.JP)()),p.options.react),e),v=g.useSuspense,y=g.keyPrefix,w=n||c||p.options&&p.options.defaultNS;w="string"===typeof w?[w]:w||["translation"],p.reportNamespaces.addUsedNamespaces&&p.reportNamespaces.addUsedNamespaces(w);var S=(p.isInitialized||p.initializedStoreOnce)&&w.every((function(n){return l(n,p,g)}));function _(){return p.getFixedT(null,"fallback"===g.nsMode?w:w[0],y)}var k=(0,i.useState)(_),j=(0,r.Z)(k,2),x=j[0],C=j[1],N=w.join(),O=m(N),T=(0,i.useRef)(!0);(0,i.useEffect)((function(){var n=g.bindI18n,e=g.bindI18nStore;function t(){T.current&&C(_)}return T.current=!0,S||v||f(p,w,(function(){T.current&&C(_)})),S&&O&&O!==N&&T.current&&C(_),n&&p&&p.on(n,t),e&&p&&p.store.on(e,t),function(){T.current=!1,n&&p&&n.split(" ").forEach((function(n){return p.off(n,t)})),e&&p&&e.split(" ").forEach((function(n){return p.store.off(n,t)}))}}),[p,N]);var E=(0,i.useRef)(!0);(0,i.useEffect)((function(){T.current&&!E.current&&C(_),E.current=!1}),[p,y]);var L=[x,p,S];if(L.t=x,L.i18n=p,L.ready=S,S)return L;if(!S&&!v)return L;throw new Promise((function(n){f(p,w,(function(){n()}))}))}},9362:function(n,e,t){!function(n,e){"use strict";var t="default"in e?e.default:e;function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function o(n,e){return(o=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var n,r=s(e);return n=t?(n=s(this).constructor,Reflect.construct(r,arguments,n)):r.apply(this,arguments),r=this,!n||"object"!=typeof n&&"function"!=typeof n?c(r):n}}function f(n,e){var t,r=(e=void 0===e?{}:e).insertAt;n&&"undefined"!=typeof document&&(t=document.head||document.getElementsByTagName("head")[0],(e=document.createElement("style")).type="text/css","top"===r&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)))}var p={animated:"rsw_1z",fadeInRight:"rsw_1M",fadeInLeft:"rsw_19",fadeOutRight:"rsw_3C",fadeOutLeft:"rsw_1u"};f("/**\n * Snippets from animate.css\n * Credit goes to https://github.com/daneden\n * github.com/daneden/animate.css\n*/\n.rsw_1z {\n  -webkit-animation-duration: .8192s;\n  animation-duration: .8192s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n\n/** fadeInRight */\n@-webkit-keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_1M {\n  -webkit-animation-name: rsw_1M;\n  animation-name: rsw_1M;\n}\n\n/** fadeInLeft */\n@-webkit-keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_19 {\n  -webkit-animation-name: rsw_19;\n  animation-name: rsw_19;\n}\n\n/** fadeOutRight */\n@-webkit-keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.rsw_3C {\n  -webkit-animation-name: rsw_3C;\n  animation-name: rsw_3C;\n}\n\n/** fadeOutLeft */\n@-webkit-keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.rsw_1u {\n  -webkit-animation-name: rsw_1u;\n  animation-name: rsw_1u;\n}\n");var l="rsw_2Y",d="rsw_2f",h="rsw_3G";f("/** Step Wizard */\n.rsw_2Y {\n    position: relative;\n}\n\n.rsw_2f {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n}\n\n.rsw_3G {\n    opacity: 1;\n    pointer-events: inherit;\n    position: relative;\n    z-index: 1;\n}\n");var m=function(){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&o(n,e)}(h,e.PureComponent);var n,s,f,d=u(h);function h(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),i(c(e=d.call(this,n)),"initialState",(function(){var n={activeStep:0,classes:{},hashKeys:{},namedSteps:{}},t="object"===("undefined"==typeof window?"undefined":r(window))?e.getHash():"",a=e.getSteps();a.forEach((function(e,t){n.hashKeys[t]=e.props&&e.props.hashKey||"step".concat(t+1),n.hashKeys[n.hashKeys[t]]=t,n.namedSteps[t]=e.props&&e.props.stepName||"step".concat(t+1),n.namedSteps[n.namedSteps[t]]=t}));var i=e.props.initialStep-1;return i&&a[i]&&(n.activeStep=i),e.props.isHashEnabled&&t&&void 0!==n.hashKeys[t]&&(n.activeStep=n.hashKeys[t]),e.props.transitions&&(n.classes[n.activeStep]=e.props.transitions.intro||""),n})),i(c(e),"getHash",(function(){return decodeURI(window.location.hash).replace(/^#/,"")})),i(c(e),"getTransitions",(function(){return e.props.transitions||{enterRight:"".concat(p.animated," ").concat(p.fadeInRight),enterLeft:"".concat(p.animated," ").concat(p.fadeInLeft),exitRight:"".concat(p.animated," ").concat(p.fadeOutRight),exitLeft:"".concat(p.animated," ").concat(p.fadeOutLeft)}})),i(c(e),"onHashChange",(function(){e.setActiveStep(e.state.hashKeys[e.getHash()]||0)})),i(c(e),"isInvalidStep",(function(n){return n<0||n>=e.totalSteps})),i(c(e),"setActiveStep",(function(n){var t,r,a=e.state.activeStep;a!==n&&!e.isInvalidStep(n)&&(t=e.state.classes,r=e.getTransitions(),a<n?(t[a]=r.exitLeft,t[n]=r.enterRight):(t[a]=r.exitRight,t[n]=r.enterLeft),e.setState({activeStep:n,classes:t},(function(){e.onStepChange({previousStep:a+1,activeStep:n+1})})))})),i(c(e),"onStepChange",(function(n){e.props.onStepChange(n),e.props.isHashEnabled&&e.updateHash(e.state.activeStep)})),i(c(e),"getSteps",(function(){return t.Children.toArray(e.props.children)})),i(c(e),"firstStep",(function(){return e.goToStep(1)})),i(c(e),"lastStep",(function(){return e.goToStep(e.totalSteps)})),i(c(e),"nextStep",(function(){return e.setActiveStep(e.state.activeStep+1)})),i(c(e),"previousStep",(function(){return e.setActiveStep(e.state.activeStep-1)})),i(c(e),"goToStep",(function(n){e.props.isHashEnabled&&"string"==typeof n&&void 0!==e.state.hashKeys[n]?e.setActiveStep(e.state.hashKeys[n]):e.setActiveStep(n-1)})),i(c(e),"goToNamedStep",(function(n){"string"==typeof n&&void 0!==e.state.namedSteps[n]?e.setActiveStep(e.state.namedSteps[n]):console.error('Cannot find step with name "'.concat(n,'"'))})),i(c(e),"updateHash",(function(n){window.location.hash=e.state.hashKeys[n]})),i(c(e),"isReactComponent",(function(n){return"function"==typeof(n=n.type)||"object"===r(n)})),e.state=e.initialState(),e}return n=h,(s=[{key:"componentDidMount",value:function(){this.props.isHashEnabled&&window.addEventListener("hashchange",this.onHashChange),this.props.instance(this)}},{key:"componentWillUnmount",value:function(){this.props.isHashEnabled&&window.removeEventListener("hashchange",this.onHashChange)}},{key:"currentStep",get:function(){return this.state.activeStep+1}},{key:"totalSteps",get:function(){return this.getSteps().length}},{key:"render",value:function(){var n=this,e={currentStep:this.currentStep,totalSteps:this.totalSteps,nextStep:this.nextStep,previousStep:this.previousStep,goToStep:this.goToStep,goToNamedStep:this.goToNamedStep,firstStep:this.firstStep,lastStep:this.lastStep},r=this.state.classes,a=t.Children.map(this.getSteps(),(function(a,i){return a?(e.isActive=i===n.state.activeStep,e.transitions=r[i],!n.props.isLazyMount||n.props.isLazyMount&&e.isActive?t.createElement(b,e,n.isReactComponent(a)?t.cloneElement(a,e):a):null):null}));return t.createElement("div",{className:this.props.className},this.props.nav&&t.cloneElement(this.props.nav,e),t.createElement("div",{className:l},a))}}])&&a(n.prototype,s),f&&a(n,f),h}();m.defaultProps={children:[],className:null,initialStep:1,instance:function(){},isHashEnabled:!1,isLazyMount:!1,nav:null,onStepChange:function(){},transitions:void 0};var b=function(n){var e=n.children,r=n.isActive;return n=n.transitions,t.createElement("div",{className:"".concat(d," ").concat(n," ").concat(r?h:"").trim()},e)};b.defaultProps={children:[],isActive:!1,transitions:""},n.Step=b,n.default=m,Object.defineProperty(n,"__esModule",{value:!0})}(e,t(2791))}}]);
//# sourceMappingURL=423.461c1b99.chunk.js.map