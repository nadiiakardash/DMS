"use strict";window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var a=0;a<this.length;a++)t.call(e,this[a],a,this)});var objectFitImages=function(){function t(t,e,a){var n=function(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}(e||1,a||0);d.call(t,"src")!==n&&b.call(t,"src",n)}function e(t,a){t.naturalWidth?a(t):setTimeout(e,100,t,a)}function a(a){var i=function(t){for(var e,a=getComputedStyle(t).fontFamily,n={};null!==(e=c.exec(a));)n[e[1]]=e[2];return n}(a),l=a[s];if(i["object-fit"]=i["object-fit"]||"fill",!l.img){if("fill"===i["object-fit"])return;if(!l.skipTest&&o&&!i["object-position"])return}if(!l.img){l.img=new Image(a.width,a.height),l.img.srcset=d.call(a,"data-ofi-srcset")||a.srcset,l.img.src=d.call(a,"data-ofi-src")||a.src,b.call(a,"data-ofi-src",a.src),a.srcset&&b.call(a,"data-ofi-srcset",a.srcset),t(a,a.naturalWidth||a.width,a.naturalHeight||a.height),a.srcset&&(a.srcset="");try{n(a)}catch(a){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}(function(t){if(t.srcset&&!u&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}})(l.img),a.style.backgroundImage='url("'+(l.img.currentSrc||l.img.src).replace(/"/g,'\\"')+'")',a.style.backgroundPosition=i["object-position"]||"center",a.style.backgroundRepeat="no-repeat",a.style.backgroundOrigin="content-box",/scale-down/.test(i["object-fit"])?e(l.img,(function(){l.img.naturalWidth>a.width||l.img.naturalHeight>a.height?a.style.backgroundSize="contain":a.style.backgroundSize="auto"})):a.style.backgroundSize=i["object-fit"].replace("none","auto").replace("fill","100% 100%"),e(l.img,(function(e){t(a,e.naturalWidth,e.naturalHeight)}))}function n(t){var e={get:function(e){return t[s].img[e||"src"]},set:function(e,n){return t[s].img[n||"src"]=e,b.call(t,"data-ofi-"+n,e),a(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function i(t,e){var n=!p&&!t;if(e=e||{},t=t||"img",r&&!e.skipTest||!_)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var c=0;c<t.length;c++)t[c][s]=t[c][s]||{skipTest:e.skipTest},a(t[c]);n&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&i(t.target,{skipTest:e.skipTest})}),!0),p=!0,t="img"),e.watchMQ&&window.addEventListener("resize",i.bind(null,t,{skipTest:e.skipTest}))}var s="fregante:object-fit-images",c=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,l="undefined"==typeof Image?{style:{"object-position":1}}:new Image,o="object-fit"in l.style,r="object-position"in l.style,_="background-size"in l.style,u="string"==typeof l.currentSrc,d=l.getAttribute,b=l.setAttribute,p=!1;return i.supportsObjectFit=o,i.supportsObjectPosition=r,function(){function t(t,e){return t[s]&&t[s].img&&("src"===e||"srcset"===e)?t[s].img:t}r||(HTMLImageElement.prototype.getAttribute=function(e){return d.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,a){return b.call(t(this,e),e,String(a))})}(),i}();function closeModal(t){document.querySelectorAll(".".concat(t)).forEach((function(e){e.addEventListener("click",(function(a){a.preventDefault(),a.target.classList.contains(t)&&e.classList.add("".concat(t,"--closed"))}))}))}function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw i}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}closeModal("modal");var _step,anchors=document.querySelectorAll(".scroll"),_iterator=_createForOfIteratorHelper(anchors);try{var _loop=function(){var t=_step.value;t.addEventListener("click",(function(e){e.preventDefault();var a=t.getAttribute("href").substr(1);document.getElementById(a).scrollIntoView({behavior:"smooth",block:"start"})}))};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(t){_iterator.e(t)}finally{_iterator.f()}function toggleSelectors(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=function(){return a?o:l},s=document.querySelectorAll("."+e),c=document.querySelectorAll("."+t),l=e+"--closed",o="visually-hidden",r=i(),_=e+"--opened";n?c.forEach((function(t){t.onfocus=function(){s.forEach((function(t){var e=t.classList;e.contains(_)||e.add(_)}))},t.onblur=function(){s.forEach((function(t){t.classList.remove(_)}))}})):c.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),s.forEach((function(t){var e=t.classList;e.contains(r)?e.remove(r):e.add(r)}))}))}))}function initCarSlider(t){if(t)new Swiper(".".concat(t.containerClass),{pagination:{el:".".concat(t.container,"__pagination"),type:"bullets",currentClass:"".concat(t.container,"__current"),totalClass:"".concat(t.container,"__total"),bulletClass:"".concat(t.container,"__bullet"),bulletActiveClass:"".concat(t.container,"__bullet--active"),clickable:!0,renderBullet:function(e,a){return'<div class="'.concat(a,'"><img class="').concat(t.container,'__bullet-image" src="img/main/car/slider/photo-').concat(e+1,'.jpg"></div>')}},effect:"slide",fadeEffect:{crossFade:!0},navigation:{nextEl:".".concat(t.container,"__button--next"),prevEl:".".concat(t.container,"__button--prev"),disabledClass:"".concat(t.container,"__button--disabled")},loop:!1,noSwiping:!0,onlyExternal:!0,speed:500,autoHeight:!0,slidesPerView:1,wrapperClass:"".concat(t.container,"__list"),slideClass:"".concat(t.container,"__item"),slideActiveClass:"".concat(t.container,"__item--active"),slideDuplicateActiveClass:"".concat(t.container,"__item-duplicate--active"),slideVisibleClass:"".concat(t.container,"__item--visible"),slideDuplicateClass:"".concat(t.container,"__item-duplicate"),slideNextClass:"".concat(t.container,"__item--next"),slideDuplicateNextClass:"".concat(t.container,"__item-duplicate--next"),slidePrevClass:"".concat(t.container,"__item--prev"),slideDuplicatePrevClass:"".concat(t.container,"__item-duplicate--prev"),slideBlankClass:"".concat(t.container,"__invisible-blank"),modifierClass:"".concat(t.container,"__pagination"),hiddenClass:"".concat(t.container,"__hidden"),progressbarFillClass:"".concat(t.container,"__progressbar-fill"),clickableClass:"".concat(t.container,"__clickable"),lockClass:"".concat(t.container,"__lock"),progressbarOppositeClass:"".concat(t.container,"__progressbar-opposite")})}toggleSelectors("header__toggle-button","header"),toggleSelectors("header__toggle-button","main-body"),toggleSelectors("services__link--car","modal"),toggleSelectors("wish__link","modal"),toggleSelectors("modal__button","modal"),toggleSelectors("header__auto-link--modal","modal"),toggleSelectors("header__auto-link--modal","header"),toggleSelectors("header__auto-link--modal","main-body"),objectFitImages();var carSlider={container:"car-slider",containerClass:"car-slider"};function initGallery(t){if(t)new Swiper(".".concat(t.containerClass),{pagination:{el:".".concat(t.mainClass,"__pagination"),type:"fraction",currentClass:"".concat(t.mainClass,"__current"),totalClass:"".concat(t.mainClass,"__total"),bulletClass:"".concat(t.mainClass,"__bullet"),bulletActiveClass:"".concat(t.mainClass,"__bullet--active")},navigation:{nextEl:".".concat(t.mainClass,"__button--next"),prevEl:".".concat(t.mainClass,"__button--prev"),disabledClass:"".concat(t.mainClass,"__button--disabled")},loop:!1,speed:500,slidesPerView:1,wrapperClass:"".concat(t.mainClass,"__list"),slideClass:"".concat(t.mainClass,"__item"),slideActiveClass:"".concat(t.mainClass,"__item--active"),slideDuplicateActiveClass:"".concat(t.mainClass,"__item-duplicate--active"),slideVisibleClass:"".concat(t.mainClass,"__item--visible"),slideDuplicateClass:"".concat(t.mainClass,"__item-duplicate"),slideNextClass:"".concat(t.mainClass,"__item--next"),slideDuplicateNextClass:"".concat(t.mainClass,"__item-duplicate--next"),slidePrevClass:"".concat(t.mainClass,"__item--prev"),slideDuplicatePrevClass:"".concat(t.mainClass,"__item-duplicate--prev"),slideBlankClass:"".concat(t.mainClass,"__invisible-blank"),bulletClass:"".concat(t.mainClass,"__bullet"),bulletActiveClass:"".concat(t.mainClass,"__bullet--active"),modifierClass:"".concat(t.mainClass,"__pagination"),hiddenClass:"".concat(t.mainClass,"__hidden"),progressbarFillClass:"".concat(t.mainClass,"__progressbar-fill"),clickableClass:"".concat(t.mainClass,"__clickable"),lockClass:"".concat(t.mainClass,"__lock"),progressbarOppositeClass:"".concat(t.mainClass,"__progressbar-opposite"),breakpoints:{320:{spaceBetween:20,pagination:{type:"bullets",clickable:!0}},768:{spaceBetween:30}}})}initCarSlider(carSlider);var mainGallery={mainClass:"gallery",containerClass:"gallery"};function initServices(t){if(t&&!document.querySelector(".gallery"))new Swiper(".".concat(t.containerClass),{pagination:{el:".".concat(t.mainClass,"__pagination"),type:"fraction",currentClass:"".concat(t.mainClass,"__current"),totalClass:"".concat(t.mainClass,"__total"),bulletClass:"".concat(t.mainClass,"__bullet"),bulletActiveClass:"".concat(t.mainClass,"__bullet--active")},navigation:{nextEl:".".concat(t.mainClass,"__button--next"),prevEl:".".concat(t.mainClass,"__button--prev"),disabledClass:"".concat(t.mainClass,"__button--disabled")},loop:!1,speed:500,slidesPerView:1,wrapperClass:"".concat(t.mainClass,"__list"),slideClass:"".concat(t.mainClass,"__item"),slideActiveClass:"".concat(t.mainClass,"__item--active"),slideDuplicateActiveClass:"".concat(t.mainClass,"__item-duplicate--active"),slideVisibleClass:"".concat(t.mainClass,"__item--visible"),slideDuplicateClass:"".concat(t.mainClass,"__item-duplicate"),slideNextClass:"".concat(t.mainClass,"__item--next"),slideDuplicateNextClass:"".concat(t.mainClass,"__item-duplicate--next"),slidePrevClass:"".concat(t.mainClass,"__item--prev"),slideDuplicatePrevClass:"".concat(t.mainClass,"__item-duplicate--prev"),slideBlankClass:"".concat(t.mainClass,"__invisible-blank"),bulletClass:"".concat(t.mainClass,"__bullet"),bulletActiveClass:"".concat(t.mainClass,"__bullet--active"),modifierClass:"".concat(t.mainClass,"__pagination"),hiddenClass:"".concat(t.mainClass,"__hidden"),progressbarFillClass:"".concat(t.mainClass,"__progressbar-fill"),clickableClass:"".concat(t.mainClass,"__clickable"),lockClass:"".concat(t.mainClass,"__lock"),progressbarOppositeClass:"".concat(t.mainClass,"__progressbar-opposite"),breakpoints:{320:{spaceBetween:20,autoHeight:!0,pagination:{type:"bullets",clickable:!0}},768:{spaceBetween:60,autoHeight:!1,pagination:{type:"fraction"}}}})}initGallery(mainGallery);var services={mainClass:"services",containerClass:"services__wrapper"};function initMainSlider(t){if(t)new Swiper(".".concat(t.containerClass),{pagination:{el:".".concat(t.container,"__pagination"),type:"bullets",currentClass:"".concat(t.container,"__current"),totalClass:"".concat(t.container,"__total"),bulletClass:"".concat(t.container,"__bullet"),bulletActiveClass:"".concat(t.container,"__bullet--active"),clickable:!0},navigation:{nextEl:".".concat(t.container,"__button--next"),prevEl:".".concat(t.container,"__button--prev"),disabledClass:"".concat(t.container,"__button--disabled")},speed:500,slidesPerView:2,spaceBetween:30,wrapperClass:"".concat(t.container,"__list"),slideClass:"".concat(t.container,"__item"),slideActiveClass:"".concat(t.container,"__item--active"),slideDuplicateActiveClass:"".concat(t.container,"__item-duplicate--active"),slideVisibleClass:"".concat(t.container,"__item--visible"),slideDuplicateClass:"".concat(t.container,"__item-duplicate"),slideNextClass:"".concat(t.container,"__item--next"),slideDuplicateNextClass:"".concat(t.container,"__item-duplicate--next"),slidePrevClass:"".concat(t.container,"__item--prev"),slideDuplicatePrevClass:"".concat(t.container,"__item-duplicate--prev"),slideBlankClass:"".concat(t.container,"__invisible-blank"),bulletClass:"".concat(t.container,"__bullet"),bulletActiveClass:"".concat(t.container,"__bullet--active"),modifierClass:"".concat(t.container,"__pagination"),hiddenClass:"".concat(t.container,"__hidden"),progressbarFillClass:"".concat(t.container,"__progressbar-fill"),clickableClass:"".concat(t.container,"__clickable"),lockClass:"".concat(t.container,"__lock"),progressbarOppositeClass:"".concat(t.container,"__progressbar-opposite"),breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{spaceBetween:15},1200:{spaceBetween:30}}})}initServices(services);var mainSlider={container:"slider",containerClass:"slider__container"};function initBullets(t){if(t){var e=document.querySelectorAll(".".concat(t.textClass));new Swiper(".".concat(t.containerClass),{pagination:{el:".".concat(t.container,"__pagination"),type:"bullets",currentClass:"".concat(t.container,"__current"),totalClass:"".concat(t.container,"__total"),bulletClass:"".concat(t.container,"__bullet"),bulletActiveClass:"".concat(t.container,"__bullet--active"),clickable:!0,renderBullet:function(t,a){return'<span class="'+a+'">'+e[t].textContent+"</span>"}},effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".".concat(t.container,"__button--next"),prevEl:".".concat(t.container,"__button--prev"),disabledClass:"".concat(t.container,"__button--disabled")},loop:!1,noSwiping:!0,onlyExternal:!0,speed:500,autoHeight:!0,slidesPerView:1,wrapperClass:"".concat(t.container,"__list"),slideClass:"".concat(t.container,"__item"),slideActiveClass:"".concat(t.container,"__item--active"),slideDuplicateActiveClass:"".concat(t.container,"__item-duplicate--active"),slideVisibleClass:"".concat(t.container,"__item--visible"),slideDuplicateClass:"".concat(t.container,"__item-duplicate"),slideNextClass:"".concat(t.container,"__item--next"),slideDuplicateNextClass:"".concat(t.container,"__item-duplicate--next"),slidePrevClass:"".concat(t.container,"__item--prev"),slideDuplicatePrevClass:"".concat(t.container,"__item-duplicate--prev"),slideBlankClass:"".concat(t.container,"__invisible-blank"),modifierClass:"".concat(t.container,"__pagination"),hiddenClass:"".concat(t.container,"__hidden"),progressbarFillClass:"".concat(t.container,"__progressbar-fill"),clickableClass:"".concat(t.container,"__clickable"),lockClass:"".concat(t.container,"__lock"),progressbarOppositeClass:"".concat(t.container,"__progressbar-opposite")})}}initMainSlider(mainSlider);var tabMain={container:"tab",containerClass:"tab",textClass:"tab__text"},tabBlue={container:"tab",containerClass:"tab__box",textClass:"tab__text--blue"},tabAbout={container:"tab",containerClass:"tab--about",textClass:"tab__text--about"},tabContacts={container:"tab",containerClass:"tab__contacts",textClass:"tab__text--contacts"},tabStory={container:"tab",containerClass:"tab--story",textClass:"tab__text--story"},tabCopart={container:"tab",containerClass:"tab--copart",textClass:"tab__text--copart"},tabIaai={container:"tab",containerClass:"tab--iaai",textClass:"tab__text--iaai"},tabAdesa={container:"tab",containerClass:"tab--adesa",textClass:"tab__text--adesa"},tabManheim={container:"tab",containerClass:"tab--manheim",textClass:"tab__text--manheim"},tabPurchase={container:"tab",containerClass:"tab--purchase",textClass:"tab__text--purchase"},tabInfo={container:"tab",containerClass:"tab--info",textClass:"tab__text--info"},tabDelivery={container:"tab",containerClass:"tab--delivery",textClass:"tab__text--delivery"},tabSpeed={container:"tab",containerClass:"tab--speed",textClass:"tab__text--speed"},tabPort={container:"tab",containerClass:"tab--port",textClass:"tab__text--port"},personalArea={container:"personal-area",containerClass:"personal-area",textClass:"personal-area__subtitle"};initBullets(tabMain),initBullets(tabBlue),initBullets(tabAbout),initBullets(tabContacts),initBullets(tabStory),initBullets(tabCopart),initBullets(tabIaai),initBullets(tabAdesa),initBullets(tabManheim),initBullets(tabPurchase),initBullets(tabInfo),initBullets(tabDelivery),initBullets(tabSpeed),initBullets(tabPort),initBullets(personalArea);