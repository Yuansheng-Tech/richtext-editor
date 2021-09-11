/*! For license information please see 9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"106":function(r,t,e){"use strict";e.d(t,"a",(function(){return s}));var s=function createCommonjsModule(r,t,e){return r(e={"path":t,"exports":{},"require":function(r,t){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}((function(r){!function(){var t={}.hasOwnProperty;function o(){for(var r=[],e=0;e<arguments.length;e++){var s=arguments[e];if(s){var i=typeof s;if("string"===i||"number"===i)r.push(s);else if(Array.isArray(s)){if(s.length){var u=o.apply(null,s);u&&r.push(u)}}else if("object"===i)if(s.toString===Object.prototype.toString)for(var a in s)t.call(s,a)&&s[a]&&r.push(a);else r.push(s.toString())}}return r.join(" ")}r.exports?(o.default=o,r.exports=o):window.classNames=o}()}))},"92":function(r,t,e){"use strict";e.r(t),e.d(t,"taro_scroll_view_core",(function(){return u}));var s=e(33),i=e(106);function easeOutScroll(r,t,e){if(r!==t&&"number"==typeof r){var s=t-r,i=Date.now(),u=t>=r;!function n(){r=function c(r,t,e,s){return e*r/s+t}(Date.now()-i,r,s,500),u&&r>=t||!u&&t>=r?e(t):(e(r),requestAnimationFrame(n))}()}}var u=function(){function l(r){var t=this;Object(s.g)(this,r),this.onScroll=Object(s.c)(this,"scroll",7),this.onScrollToUpper=Object(s.c)(this,"scrolltoupper",7),this.onScrollToLower=Object(s.c)(this,"scrolltolower",7),this.scrollX=!1,this.scrollY=!1,this.upperThreshold=50,this.lowerThreshold=50,this.scrollWithAnimation=!1,this.handleScroll=function(r){if(!(r instanceof CustomEvent)){var e=t.el,s=e.scrollLeft,i=e.scrollTop,u=e.scrollHeight,a=e.scrollWidth;t._scrollLeft=s,t._scrollTop=i,t.uperAndLower(),t.onScroll.emit({"scrollLeft":s,"scrollTop":i,"scrollHeight":u,"scrollWidth":a})}},this.uperAndLower=function debounce(r,t){var e;return function(){for(var s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];clearTimeout(e),e=setTimeout((function(){r.apply(void 0,s)}),t)}}((function(){var r=t.el,e=r.offsetWidth,s=r.offsetHeight,i=r.scrollLeft,u=r.scrollTop,a=r.scrollHeight,h=r.scrollWidth,p=Number(t.lowerThreshold),f=Number(t.upperThreshold);!isNaN(p)&&(t.scrollY&&s+u+p>=a||t.scrollX&&e+i+p>=h)&&t.onScrollToLower.emit({"direction":t.scrollX?"right":t.scrollY?"bottom":""}),!isNaN(f)&&(t.scrollY&&u<=f||t.scrollX&&i<=f)&&t.onScrollToUpper.emit({"direction":t.scrollX?"left":t.scrollY?"top":""})}),200)}return l.prototype.watchScrollLeft=function(r){var t=this,e=Number(r);this.scrollX&&!isNaN(e)&&e!==this._scrollLeft&&(this.scrollWithAnimation?easeOutScroll(this._scrollLeft,e,(function(r){return t.el.scrollLeft=r})):this.el.scrollLeft=e,this._scrollLeft=e)},l.prototype.watchScrollTop=function(r){var t=this,e=Number(r);this.scrollY&&!isNaN(e)&&e!==this._scrollTop&&(this.scrollWithAnimation?easeOutScroll(this._scrollTop,e,(function(r){return t.el.scrollTop=r})):this.el.scrollTop=e,this._scrollTop=e)},l.prototype.watchScrollIntoView=function(r){var t;"string"==typeof r&&r&&(null===(t=document.querySelector("#"+r))||void 0===t||t.scrollIntoView({"behavior":"smooth","block":"center","inline":"start"}))},l.prototype.componentDidLoad=function(){var r=this,t=this,e=t.scrollY,s=t.scrollX,i=t.scrollWithAnimation,u=Number(this.mpScrollTop),a=Number(this.mpScrollLeft);e&&!isNaN(u)&&(i?easeOutScroll(0,u,(function(t){return r.el.scrollTop=t})):this.el.scrollTop=u,this._scrollTop=u),s&&!isNaN(a)&&(i?easeOutScroll(0,a,(function(t){return r.el.scrollLeft=t})):this.el.scrollLeft=a,this._scrollLeft=a)},l.prototype.render=function(){var r=this.scrollX,t=this.scrollY,e=Object(i.a)({"taro-scroll-view__scroll-x":r,"taro-scroll-view__scroll-y":t});return Object(s.e)(s.a,{"class":e,"onScroll":this.handleScroll},Object(s.e)("slot",null))},Object.defineProperty(l.prototype,"el",{"get":function(){return Object(s.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(l,"watchers",{"get":function(){return{"mpScrollLeft":["watchScrollLeft"],"mpScrollTop":["watchScrollTop"],"mpScrollIntoView":["watchScrollIntoView"]}},"enumerable":!1,"configurable":!0}),l}();u.style="taro-scroll-view-core{display:block;width:100%;-webkit-overflow-scrolling:auto}taro-scroll-view-core::-webkit-scrollbar{display:none}.taro-scroll-view__scroll-x{overflow-x:scroll;overflow-y:hidden}.taro-scroll-view__scroll-y{overflow-x:hidden;overflow-y:scroll}"}}]);