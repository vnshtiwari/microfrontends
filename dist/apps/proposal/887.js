/*! For license information please see 887.js.LICENSE.txt */
"use strict";(self.webpackChunkproposal=self.webpackChunkproposal||[]).push([[887],{43459:(e,o)=>{var r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,f=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,S=r?Symbol.for("react.lazy"):60116,$=r?Symbol.for("react.block"):60121,d=r?Symbol.for("react.fundamental"):60117,C=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function M(e){if("object"==typeof e&&null!==e){var o=e.$$typeof;switch(o){case t:switch(e=e.type){case i:case l:case c:case s:case f:case p:return e;default:switch(e=e&&e.$$typeof){case u:case y:case S:case b:case a:return e;default:return o}}case n:return o}}}function h(e){return M(e)===l}o.AsyncMode=i,o.ConcurrentMode=l,o.ContextConsumer=u,o.ContextProvider=a,o.Element=t,o.ForwardRef=y,o.Fragment=c,o.Lazy=S,o.Memo=b,o.Portal=n,o.Profiler=s,o.StrictMode=f,o.Suspense=p,o.isAsyncMode=function(e){return h(e)||M(e)===i},o.isConcurrentMode=h,o.isContextConsumer=function(e){return M(e)===u},o.isContextProvider=function(e){return M(e)===a},o.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},o.isForwardRef=function(e){return M(e)===y},o.isFragment=function(e){return M(e)===c},o.isLazy=function(e){return M(e)===S},o.isMemo=function(e){return M(e)===b},o.isPortal=function(e){return M(e)===n},o.isProfiler=function(e){return M(e)===s},o.isStrictMode=function(e){return M(e)===f},o.isSuspense=function(e){return M(e)===p},o.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===l||e===s||e===f||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===S||e.$$typeof===b||e.$$typeof===a||e.$$typeof===u||e.$$typeof===y||e.$$typeof===d||e.$$typeof===C||e.$$typeof===w||e.$$typeof===$)},o.typeOf=M},73887:(e,o,r)=>{e.exports=r(43459)}}]);