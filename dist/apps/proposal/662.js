"use strict";(self.webpackChunkproposal=self.webpackChunkproposal||[]).push([[662,835],{7560:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:()=>n})},39185:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ne});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,s=String.fromCharCode,c=Object.assign;function o(e){return e.trim()}function i(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function d(e){return e.length}function h(e){return e.length}function p(e,t){return t.push(e),e}var v=1,y=1,m=0,g=0,b=0,w="";function x(e,t,r,n,a,s,c){return{value:e,root:t,parent:r,type:n,props:a,children:s,line:v,column:y,length:c,return:""}}function k(e,t){return c(x("",null,null,"",null,null,0),e,{length:-e.length},t)}function C(){return b=g>0?l(w,--g):0,y--,10===b&&(y=1,v--),b}function $(){return b=g<m?l(w,g++):0,y++,10===b&&(y=1,v++),b}function O(){return l(w,g)}function A(){return g}function E(e,t){return f(w,e,t)}function S(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _(e){return v=y=1,m=d(w=e),g=0,[]}function P(e){return w="",e}function j(e){return o(E(g-1,M(91===e?e+2:40===e?e+1:e)))}function N(e){for(;(b=O())&&b<33;)$();return S(e)>2||S(b)>3?"":" "}function T(e,t){for(;--t&&$()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return E(e,A()+(t<6&&32==O()&&32==$()))}function M(e){for(;$();)switch(b){case e:return g;case 34:case 39:34!==e&&39!==e&&M(b);break;case 40:41===e&&M(e);break;case 92:$()}return g}function R(e,t){for(;$()&&e+b!==57&&(e+b!==84||47!==O()););return"/*"+E(t,g-1)+"*"+s(47===e?e:$())}function z(e){for(;!S(O());)$();return E(e,g)}var I="-ms-",G="-moz-",L="-webkit-",D="comm",F="rule",W="decl",Z="@keyframes";function q(e,t){for(var r="",n=h(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function H(e,t,r,n){switch(e.type){case"@import":case W:return e.return=e.return||e.value;case D:return"";case Z:return e.return=e.value+"{"+q(e.children,n)+"}";case F:e.value=e.props.join(",")}return d(r=q(e.children,n))?e.return=e.value+"{"+r+"}":""}function B(e){return P(U("",null,null,null,[""],e=_(e),0,[0],e))}function U(e,t,r,n,a,c,o,f,h){for(var v=0,y=0,m=o,g=0,b=0,w=0,x=1,k=1,E=1,S=0,_="",P=a,M=c,I=n,G=_;k;)switch(w=S,S=$()){case 40:if(108!=w&&58==l(G,m-1)){-1!=u(G+=i(j(S),"&","&\f"),"&\f")&&(E=-1);break}case 34:case 39:case 91:G+=j(S);break;case 9:case 10:case 13:case 32:G+=N(w);break;case 92:G+=T(A()-1,7);continue;case 47:switch(O()){case 42:case 47:p(J(R($(),A()),t,r),h);break;default:G+="/"}break;case 123*x:f[v++]=d(G)*E;case 125*x:case 59:case 0:switch(S){case 0:case 125:k=0;case 59+y:b>0&&d(G)-m&&p(b>32?K(G+";",n,r,m-1):K(i(G," ","")+";",n,r,m-2),h);break;case 59:G+=";";default:if(p(I=Y(G,t,r,v,y,a,f,_,P=[],M=[],m),c),123===S)if(0===y)U(G,t,I,I,P,c,m,f,M);else switch(99===g&&110===l(G,3)?100:g){case 100:case 109:case 115:U(e,I,I,n&&p(Y(e,I,I,0,0,a,f,_,a,P=[],m),M),a,M,m,f,n?P:M);break;default:U(G,I,I,I,[""],M,0,f,M)}}v=y=b=0,x=E=1,_=G="",m=o;break;case 58:m=1+d(G),b=w;default:if(x<1)if(123==S)--x;else if(125==S&&0==x++&&125==C())continue;switch(G+=s(S),S*x){case 38:E=y>0?1:(G+="\f",-1);break;case 44:f[v++]=(d(G)-1)*E,E=1;break;case 64:45===O()&&(G+=j($())),g=O(),y=m=d(_=G+=z(A())),S++;break;case 45:45===w&&2==d(G)&&(x=0)}}return c}function Y(e,t,r,n,s,c,u,l,d,p,v){for(var y=s-1,m=0===s?c:[""],g=h(m),b=0,w=0,k=0;b<n;++b)for(var C=0,$=f(e,y+1,y=a(w=u[b])),O=e;C<g;++C)(O=o(w>0?m[C]+" "+$:i($,/&\f/g,m[C])))&&(d[k++]=O);return x(e,t,r,0===s?F:l,d,p,v)}function J(e,t,r){return x(e,t,r,D,s(b),f(e,2,-2),0)}function K(e,t,r,n){return x(e,t,r,W,f(e,0,n),f(e,n+1,-1),n)}var Q=function(e,t,r){for(var n=0,a=0;n=a,a=O(),38===n&&12===a&&(t[r]=1),!S(a);)$();return E(e,g)},V=new WeakMap,X=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||V.get(r))&&!n){V.set(e,!0);for(var a=[],c=function(e,t){return P(function(e,t){var r=-1,n=44;do{switch(S(n)){case 0:38===n&&12===O()&&(t[r]=1),e[r]+=Q(g-1,t,r);break;case 2:e[r]+=j(n);break;case 4:if(44===n){e[++r]=58===O()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=s(n)}}while(n=$());return e}(_(e),t))}(t,a),o=r.props,i=0,u=0;i<c.length;i++)for(var l=0;l<o.length;l++,u++)e.props[u]=a[i]?c[i].replace(/&\f/g,o[l]):o[l]+" "+c[i]}}},ee=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function te(e,t){switch(function(e,t){return 45^l(e,0)?(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3):0}(e,t)){case 5103:return L+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+G+e+I+e+e;case 6828:case 4268:return L+e+I+e+e;case 6165:return L+e+I+"flex-"+e+e;case 5187:return L+e+i(e,/(\w+).+(:[^]+)/,L+"box-$1$2"+I+"flex-$1$2")+e;case 5443:return L+e+I+"flex-item-"+i(e,/flex-|-self/,"")+e;case 4675:return L+e+I+"flex-line-pack"+i(e,/align-content|flex-|-self/,"")+e;case 5548:return L+e+I+i(e,"shrink","negative")+e;case 5292:return L+e+I+i(e,"basis","preferred-size")+e;case 6060:return L+"box-"+i(e,"-grow","")+L+e+I+i(e,"grow","positive")+e;case 4554:return L+i(e,/([^-])(transform)/g,"$1"+L+"$2")+e;case 6187:return i(i(i(e,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),e,"")+e;case 5495:case 3959:return i(e,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return i(i(e,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+I+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4095:case 3583:case 4068:case 2532:return i(e,/(.+)-inline(.+)/,L+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return i(e,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+G+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?te(i(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return i(e,":",":"+L)+e;case 101:return i(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+L+(45===l(e,14)?"inline-":"")+"box$3$1"+L+"$2$3$1"+I+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return L+e+I+i(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+I+i(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+I+i(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return L+e+I+e+e}return e}var re=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case W:e.return=te(e.value,e.length);break;case Z:return q([k(e,{value:i(e.value,"@","@"+L)})],n);case F:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return q([k(e,{props:[i(t,/:(read-\w+)/,":"+G+"$1")]})],n);case"::placeholder":return q([k(e,{props:[i(t,/:(plac\w+)/,":"+L+"input-$1")]}),k(e,{props:[i(t,/:(plac\w+)/,":"+G+"$1")]}),k(e,{props:[i(t,/:(plac\w+)/,I+"input-$1")]})],n)}return""}))}}];const ne=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a,s,c=e.stylisPlugins||re,o={},i=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;i.push(e)}));var u,l,f,d,p=[H,(d=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],v=(l=[X,ee].concat(c,p),f=h(l),function(e,t,r,n){for(var a="",s=0;s<f;s++)a+=l[s](e,t,r,n)||"";return a});s=function(e,t,r,n){u=r,q(B(e?e+"{"+t.styles+"}":t.styles),v),n&&(y.inserted[t.name]=!0)};var y={key:t,sheet:new n({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:s};return y.sheet.hydrate(i),y}},86894:(e,t,r)=>{r.d(t,{Z:()=>n});const n=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},28662:(e,t,r)=>{r.r(t),r.d(t,{CacheProvider:()=>v,ClassNames:()=>N,Global:()=>E,ThemeContext:()=>g,ThemeProvider:()=>x,__unsafe_useEmotionCache:()=>y,createElement:()=>A,css:()=>S,jsx:()=>A,keyframes:()=>_,useTheme:()=>b,withEmotionCache:()=>m,withTheme:()=>k});var n=r(17664),a=r(39185),s=r(7560);const c=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}};var o=r(73463),i=r.n(o);const u=function(e,t){return i()(e,t)};var l=r(82792),f=r(59617),d=r(82668),h={}.hasOwnProperty,p=(0,n.createContext)("undefined"!=typeof HTMLElement?(0,a.default)({key:"css"}):null),v=p.Provider,y=function(){return(0,n.useContext)(p)},m=function(e){return(0,n.forwardRef)((function(t,r){var a=(0,n.useContext)(p);return e(t,a,r)}))},g=(0,n.createContext)({}),b=function(){return(0,n.useContext)(g)},w=c((function(e){return c((function(t){return function(e,t){return"function"==typeof t?t(e):(0,s.Z)({},e,t)}(e,t)}))})),x=function(e){var t=(0,n.useContext)(g);return e.theme!==t&&(t=w(t)(e.theme)),(0,n.createElement)(g.Provider,{value:t},e.children)};function k(e){var t=e.displayName||e.name||"Component",r=function(t,r){var a=(0,n.useContext)(g);return(0,n.createElement)(e,(0,s.Z)({theme:a,ref:r},t))},a=(0,n.forwardRef)(r);return a.displayName="WithTheme("+t+")",u(a,e)}var C="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",$=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,l.hC)(t,r,n),(0,d.L)((function(){return(0,l.My)(t,r,n)})),null},O=m((function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var s=e[C],c=[a],o="";"string"==typeof e.className?o=(0,l.fp)(t.registered,c,e.className):null!=e.className&&(o=e.className+" ");var i=(0,f.O)(c,void 0,(0,n.useContext)(g));o+=t.key+"-"+i.name;var u={};for(var d in e)h.call(e,d)&&"css"!==d&&d!==C&&(u[d]=e[d]);return u.ref=r,u.className=o,(0,n.createElement)(n.Fragment,null,(0,n.createElement)($,{cache:t,serialized:i,isStringTag:"string"==typeof s}),(0,n.createElement)(s,u))})),A=function(e,t){var r=arguments;if(null==t||!h.call(t,"css"))return n.createElement.apply(void 0,r);var a=r.length,s=new Array(a);s[0]=O,s[1]=function(e,t){var r={};for(var n in t)h.call(t,n)&&(r[n]=t[n]);return r[C]=e,r}(e,t);for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)},E=m((function(e,t){var r=e.styles,a=(0,f.O)([r],void 0,(0,n.useContext)(g)),s=(0,n.useRef)();return(0,d.j)((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,c=document.querySelector('style[data-emotion="'+e+" "+a.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==c&&(n=!0,c.setAttribute("data-emotion",e),r.hydrate([c])),s.current=[r,n],function(){r.flush()}}),[t]),(0,d.j)((function(){var e=s.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==a.next&&(0,l.My)(t,a.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",a,r,!1)}}),[t,a.name]),null}));function S(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,f.O)(t)}var _=function(){var e=S.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},P=function e(t){for(var r=t.length,n=0,a="";n<r;n++){var s=t[n];if(null!=s){var c=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))c=e(s);else for(var o in c="",s)s[o]&&o&&(c&&(c+=" "),c+=o);break;default:c=s}c&&(a&&(a+=" "),a+=c)}}return a},j=function(e){var t=e.cache,r=e.serializedArr;return(0,d.L)((function(){for(var e=0;e<r.length;e++)(0,l.My)(t,r[e],!1)})),null},N=m((function(e,t){var r=[],a=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var s=(0,f.O)(n,t.registered);return r.push(s),(0,l.hC)(t,s,!1),t.key+"-"+s.name},s={css:a,cx:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(e,t,r){var n=[],a=(0,l.fp)(e,n,r);return n.length<2?r:a+t(n)}(t.registered,a,P(r))},theme:(0,n.useContext)(g)},c=e.children(s);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(j,{cache:t,serializedArr:r}),c)}))},59617:(e,t,r)=>{r.d(t,{O:()=>v});const n=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var s=r(86894),c=/[A-Z]|^ms/g,o=/_EMO_([^_]+?)_([^]*?)_EMO_/g,i=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!=typeof e},l=(0,s.Z)((function(e){return i(e)?e:e.replace(c,"-$&").toLowerCase()})),f=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(o,(function(e,t,r){return h={name:t,styles:r,next:h},t}))}return 1===a[e]||i(e)||"number"!=typeof t||0===t?t:t+"px"};function d(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return h={name:r.name,styles:r.styles,next:h},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)h={name:n.name,styles:n.styles,next:h},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=d(e,t,r[a])+";";else for(var s in r){var c=r[s];if("object"!=typeof c)null!=t&&void 0!==t[c]?n+=s+"{"+t[c]+"}":u(c)&&(n+=l(s)+":"+f(s,c)+";");else if(!Array.isArray(c)||"string"!=typeof c[0]||null!=t&&void 0!==t[c[0]]){var o=d(e,t,c);switch(s){case"animation":case"animationName":n+=l(s)+":"+o+";";break;default:n+=s+"{"+o+"}"}}else for(var i=0;i<c.length;i++)u(c[i])&&(n+=l(s)+":"+f(s,c[i])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=h,s=r(e);return h=a,d(e,t,s)}}if(null==t)return r;var c=t[r];return void 0!==c?c:r}var h,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g,v=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,s="";h=void 0;var c=e[0];null==c||void 0===c.raw?(a=!1,s+=d(r,t,c)):s+=c[0];for(var o=1;o<e.length;o++)s+=d(r,t,e[o]),a&&(s+=c[o]);p.lastIndex=0;for(var i,u="";null!==(i=p.exec(s));)u+="-"+i[1];return{name:n(s)+u,styles:s,next:h}}},82668:(e,t,r)=>{r.d(t,{L:()=>s,j:()=>c});var n=r(17664),a=!!n.useInsertionEffect&&n.useInsertionEffect,s=a||function(e){return e()},c=a||n.useLayoutEffect},82792:(e,t,r)=>{function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}r.d(t,{My:()=>s,fp:()=>n,hC:()=>a});var a=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},s=function(e,t,r){a(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s=t;do{e.insert(t===s?"."+n:"",s,e.sheet,!0),s=s.next}while(void 0!==s)}}},73463:(e,t,r)=>{var n=r(60720),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function i(e){return n.isMemo(e)?c:o[e.$$typeof]||a}o[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[n.Memo]=c;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var a=h(r);a&&a!==p&&e(t,a,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var o=i(t),v=i(r),y=0;y<c.length;++y){var m=c[y];if(!(s[m]||n&&n[m]||v&&v[m]||o&&o[m])){var g=d(r,m);try{u(t,m,g)}catch(e){}}}}return t}}}]);