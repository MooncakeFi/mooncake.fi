(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{96540:function(e,t,r){"use strict";var n=r(64836);t.Z=void 0;var a=n(r(64938)),o=r(85893),i=(0,a.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},2548:function(e,t,r){"use strict";var n=r(64836);t.Z=void 0;var a=n(r(64938)),o=r(85893),i=(0,a.default)((0,o.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.Z=i},59248:function(e,t,r){"use strict";r.d(t,{ZP:function(){return re}});var n=r(63366),a=r(87462),o=r(67294),i=r(86010),s=r(1588),l=r(34867);function c(e){return(0,l.Z)("MuiSlider",e)}var u=(0,s.Z)("MuiSlider",["root","active","focusVisible","disabled","dragging","marked","vertical","trackInverted","trackFalse","rail","track","mark","markActive","markLabel","markLabelActive","thumb","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel"]),d=r(85893);function m(e){const{children:t,className:r,value:n}=e,a=(e=>{const{open:t}=e;return{offset:(0,i.default)(t&&u.valueLabelOpen),circle:u.valueLabelCircle,label:u.valueLabelLabel}})(e);return o.cloneElement(t,{className:(0,i.default)(t.props.className)},(0,d.jsxs)(o.Fragment,{children:[t.props.children,(0,d.jsx)("span",{className:(0,i.default)(a.offset,r),"aria-hidden":!0,children:(0,d.jsx)("span",{className:a.circle,children:(0,d.jsx)("span",{className:a.label,children:n})})})]}))}var p=r(28442),h=r(94780),v=r(57094),f=r(8925),b=r(99962),g=r(30067),Z=r(16600),y=r(73633);var x={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function k(e,t){return e-t}function w(e,t,r){return null==e?t:Math.min(Math.max(t,e),r)}function S(e,t){var r;const{index:n}=null!=(r=e.reduce(((e,r,n)=>{const a=Math.abs(t-r);return null===e||a<e.distance||a===e.distance?{distance:a,index:n}:e}),null))?r:{};return n}function $(e,t){if(void 0!==t.current&&e.changedTouches){const r=e;for(let e=0;e<r.changedTouches.length;e+=1){const n=r.changedTouches[e];if(n.identifier===t.current)return{x:n.clientX,y:n.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function R(e,t,r){return 100*(e-t)/(r-t)}function M(e,t,r){const n=Math.round((e-r)/t)*t+r;return Number(n.toFixed(function(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}(t)))}function C({values:e,newValue:t,index:r}){const n=e.slice();return n[r]=t,n.sort(k)}function z({sliderRef:e,activeIndex:t,setActive:r}){var n,a;const o=(0,v.Z)(e.current);var i;null!=(n=e.current)&&n.contains(o.activeElement)&&Number(null==o||null==(a=o.activeElement)?void 0:a.getAttribute("data-index"))===t||(null==(i=e.current)||i.querySelector(`[type="range"][data-index="${t}"]`).focus());r&&r(t)}const T={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},L=e=>e;let N;function P(){return void 0===N&&(N="undefined"===typeof CSS||"function"!==typeof CSS.supports||CSS.supports("touch-action","none")),N}function A(e){const{"aria-labelledby":t,defaultValue:r,disabled:n=!1,disableSwap:i=!1,isRtl:s=!1,marks:l=!1,max:c=100,min:u=0,name:d,onChange:m,onChangeCommitted:p,orientation:h="horizontal",ref:N,scale:A=L,step:j=1,tabIndex:H,value:O}=e,E=o.useRef(),[I,F]=o.useState(-1),[D,V]=o.useState(-1),[Y,B]=o.useState(!1),q=o.useRef(0),[W,X]=(0,f.Z)({controlled:O,default:null!=r?r:u,name:"Slider"}),_=m&&((e,t,r)=>{const n=e.nativeEvent||e,a=new n.constructor(n.type,n);Object.defineProperty(a,"target",{writable:!0,value:{value:t,name:d}}),m(a,t,r)}),J=Array.isArray(W);let U=J?W.slice().sort(k):[W];U=U.map((e=>w(e,u,c)));const G=!0===l&&null!==j?[...Array(Math.floor((c-u)/j)+1)].map(((e,t)=>({value:u+j*t}))):l||[],K=G.map((e=>e.value)),{isFocusVisibleRef:Q,onBlur:ee,onFocus:te,ref:re}=(0,b.Z)(),[ne,ae]=o.useState(-1),oe=o.useRef(),ie=(0,g.Z)(re,oe),se=(0,g.Z)(N,ie),le=e=>t=>{var r;const n=Number(t.currentTarget.getAttribute("data-index"));te(t),!0===Q.current&&ae(n),V(n),null==e||null==(r=e.onFocus)||r.call(e,t)},ce=e=>t=>{var r;ee(t),!1===Q.current&&ae(-1),V(-1),null==e||null==(r=e.onBlur)||r.call(e,t)};(0,Z.Z)((()=>{var e;n&&oe.current.contains(document.activeElement)&&(null==(e=document.activeElement)||e.blur())}),[n]),n&&-1!==I&&F(-1),n&&-1!==ne&&ae(-1);const ue=e=>t=>{var r;null==(r=e.onChange)||r.call(e,t);const n=Number(t.currentTarget.getAttribute("data-index")),a=U[n],o=K.indexOf(a);let s=t.target.valueAsNumber;if(G&&null==j&&(s=s<a?K[o-1]:K[o+1]),s=w(s,u,c),G&&null==j){const e=K.indexOf(U[n]);s=s<U[n]?K[e-1]:K[e+1]}if(J){i&&(s=w(s,U[n-1]||-1/0,U[n+1]||1/0));const e=s;s=C({values:U,newValue:s,index:n});let t=n;i||(t=s.indexOf(e)),z({sliderRef:oe,activeIndex:t})}X(s),ae(n),_&&_(t,s,n),p&&p(t,s)},de=o.useRef();let me=h;s&&"horizontal"===h&&(me+="-reverse");const pe=({finger:e,move:t=!1})=>{const{current:r}=oe,{width:n,height:a,bottom:o,left:s}=r.getBoundingClientRect();let l,d;if(l=0===me.indexOf("vertical")?(o-e.y)/a:(e.x-s)/n,-1!==me.indexOf("-reverse")&&(l=1-l),d=function(e,t,r){return(r-t)*e+t}(l,u,c),j)d=M(d,j,u);else{const e=S(K,d);d=K[e]}d=w(d,u,c);let m=0;if(J){m=t?de.current:S(U,d),i&&(d=w(d,U[m-1]||-1/0,U[m+1]||1/0));const e=d;d=C({values:U,newValue:d,index:m}),i&&t||(m=d.indexOf(e),de.current=m)}return{newValue:d,activeIndex:m}},he=(0,y.Z)((e=>{const t=$(e,E);if(!t)return;if(q.current+=1,"mousemove"===e.type&&0===e.buttons)return void ve(e);const{newValue:r,activeIndex:n}=pe({finger:t,move:!0});z({sliderRef:oe,activeIndex:n,setActive:F}),X(r),!Y&&q.current>2&&B(!0),_&&r!==W&&_(e,r,n)})),ve=(0,y.Z)((e=>{const t=$(e,E);if(B(!1),!t)return;const{newValue:r}=pe({finger:t,move:!0});F(-1),"touchend"===e.type&&V(-1),p&&p(e,r),E.current=void 0,be()})),fe=(0,y.Z)((e=>{if(n)return;P()||e.preventDefault();const t=e.changedTouches[0];null!=t&&(E.current=t.identifier);const r=$(e,E);if(!1!==r){const{newValue:t,activeIndex:n}=pe({finger:r});z({sliderRef:oe,activeIndex:n,setActive:F}),X(t),_&&_(e,t,n)}q.current=0;const a=(0,v.Z)(oe.current);a.addEventListener("touchmove",he),a.addEventListener("touchend",ve)})),be=o.useCallback((()=>{const e=(0,v.Z)(oe.current);e.removeEventListener("mousemove",he),e.removeEventListener("mouseup",ve),e.removeEventListener("touchmove",he),e.removeEventListener("touchend",ve)}),[ve,he]);o.useEffect((()=>{const{current:e}=oe;return e.addEventListener("touchstart",fe,{passive:P()}),()=>{e.removeEventListener("touchstart",fe,{passive:P()}),be()}}),[be,fe]),o.useEffect((()=>{n&&be()}),[n,be]);const ge=e=>t=>{var r;if(null==(r=e.onMouseDown)||r.call(e,t),n)return;if(t.defaultPrevented)return;if(0!==t.button)return;t.preventDefault();const a=$(t,E);if(!1!==a){const{newValue:e,activeIndex:r}=pe({finger:a});z({sliderRef:oe,activeIndex:r,setActive:F}),X(e),_&&_(t,e,r)}q.current=0;const o=(0,v.Z)(oe.current);o.addEventListener("mousemove",he),o.addEventListener("mouseup",ve)},Ze=R(J?U[0]:u,u,c),ye=R(U[U.length-1],u,c)-Ze,xe=e=>t=>{var r;null==(r=e.onMouseOver)||r.call(e,t);const n=Number(t.currentTarget.getAttribute("data-index"));V(n)},ke=e=>t=>{var r;null==(r=e.onMouseLeave)||r.call(e,t),V(-1)};return{active:I,axis:me,axisProps:T,dragging:Y,focusedThumbIndex:ne,getHiddenInputProps:(r={})=>{var o;const i={onChange:ue(r||{}),onFocus:le(r||{}),onBlur:ce(r||{})},l=(0,a.Z)({},r,i);return(0,a.Z)({tabIndex:H,"aria-labelledby":t,"aria-orientation":h,"aria-valuemax":A(c),"aria-valuemin":A(u),name:d,type:"range",min:e.min,max:e.max,step:null!=(o=e.step)?o:void 0,disabled:n},l,{style:(0,a.Z)({},x,{direction:s?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:(e={})=>{const t={onMouseDown:ge(e||{})},r=(0,a.Z)({},e,t);return(0,a.Z)({ref:se},r)},getThumbProps:(e={})=>{const t={onMouseOver:xe(e||{}),onMouseLeave:ke(e||{})};return(0,a.Z)({},e,t)},marks:G,open:D,range:J,trackLeap:ye,trackOffset:Ze,values:U}}var j=r(18793);const H=["aria-label","aria-valuetext","aria-labelledby","className","component","classes","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","scale","step","tabIndex","track","value","valueLabelDisplay","valueLabelFormat","isRtl","components","componentsProps"],O=e=>e,E=({children:e})=>e,I=o.forwardRef((function(e,t){var r,s,l,u,v,f,b;const{"aria-label":g,"aria-valuetext":Z,"aria-labelledby":y,className:x,component:k,classes:w,disableSwap:S=!1,disabled:$=!1,getAriaLabel:M,getAriaValueText:C,marks:z=!1,max:T=100,min:L=0,orientation:N="horizontal",scale:P=O,step:I=1,track:F="normal",valueLabelDisplay:D="off",valueLabelFormat:V=O,isRtl:Y=!1,components:B={},componentsProps:q={}}=e,W=(0,n.Z)(e,H),X=(0,a.Z)({},e,{marks:z,classes:w,disabled:$,isRtl:Y,max:T,min:L,orientation:N,scale:P,step:I,track:F,valueLabelDisplay:D,valueLabelFormat:V}),{axisProps:_,getRootProps:J,getHiddenInputProps:U,getThumbProps:G,open:K,active:Q,axis:ee,range:te,focusedThumbIndex:re,dragging:ne,marks:ae,values:oe,trackOffset:ie,trackLeap:se}=A((0,a.Z)({},X,{ref:t}));X.marked=ae.length>0&&ae.some((e=>e.label)),X.dragging=ne,X.focusedThumbIndex=re;const le=(e=>{const{disabled:t,dragging:r,marked:n,orientation:a,track:o,classes:i}=e,s={root:["root",t&&"disabled",r&&"dragging",n&&"marked","vertical"===a&&"vertical","inverted"===o&&"trackInverted",!1===o&&"trackFalse"],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled"],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return(0,h.Z)(s,c,i)})(X),ce=null!=(r=null!=k?k:B.Root)?r:"span",ue=(0,j.Z)({elementType:ce,getSlotProps:J,externalSlotProps:q.root,externalForwardedProps:W,ownerState:X,className:[le.root,x]}),de=null!=(s=B.Rail)?s:"span",me=(0,j.Z)({elementType:de,externalSlotProps:q.rail,ownerState:X,className:le.rail}),pe=null!=(l=B.Track)?l:"span",he=(0,j.Z)({elementType:pe,externalSlotProps:q.track,additionalProps:{style:(0,a.Z)({},_[ee].offset(ie),_[ee].leap(se))},ownerState:X,className:le.track}),ve=null!=(u=B.Thumb)?u:"span",fe=(0,j.Z)({elementType:ve,getSlotProps:G,externalSlotProps:q.thumb,ownerState:X}),be=null!=(v=B.ValueLabel)?v:m,ge=(0,j.Z)({elementType:be,externalSlotProps:q.valueLabel,ownerState:X}),Ze=null!=(f=B.Mark)?f:"span",ye=(0,j.Z)({elementType:Ze,externalSlotProps:q.mark,ownerState:X,className:le.mark}),xe=null!=(b=B.MarkLabel)?b:"span",ke=(0,j.Z)({elementType:xe,externalSlotProps:q.markLabel,ownerState:X}),we=B.Input||"input",Se=(0,j.Z)({elementType:we,getSlotProps:U,externalSlotProps:q.input,ownerState:X});return(0,d.jsxs)(ce,(0,a.Z)({},ue,{children:[(0,d.jsx)(de,(0,a.Z)({},me)),(0,d.jsx)(pe,(0,a.Z)({},he)),ae.filter((e=>e.value>=L&&e.value<=T)).map(((e,t)=>{const r=R(e.value,L,T),n=_[ee].offset(r);let s;return s=!1===F?-1!==oe.indexOf(e.value):"normal"===F&&(te?e.value>=oe[0]&&e.value<=oe[oe.length-1]:e.value<=oe[0])||"inverted"===F&&(te?e.value<=oe[0]||e.value>=oe[oe.length-1]:e.value>=oe[0]),(0,d.jsxs)(o.Fragment,{children:[(0,d.jsx)(Ze,(0,a.Z)({"data-index":t},ye,!(0,p.Z)(Ze)&&{markActive:s},{style:(0,a.Z)({},n,ye.style),className:(0,i.default)(ye.className,s&&le.markActive)})),null!=e.label?(0,d.jsx)(xe,(0,a.Z)({"aria-hidden":!0,"data-index":t},ke,!(0,p.Z)(xe)&&{markLabelActive:s},{style:(0,a.Z)({},n,ke.style),className:(0,i.default)(le.markLabel,ke.className,s&&le.markLabelActive),children:e.label})):null]},t)})),oe.map(((e,t)=>{const r=R(e,L,T),n=_[ee].offset(r),s="off"===D?E:be;return(0,d.jsx)(o.Fragment,{children:(0,d.jsx)(s,(0,a.Z)({},!(0,p.Z)(s)&&{valueLabelFormat:V,valueLabelDisplay:D,value:"function"===typeof V?V(P(e),t):V,index:t,open:K===t||Q===t||"on"===D,disabled:$},ge,{className:(0,i.default)(le.valueLabel,ge.className),children:(0,d.jsx)(ve,(0,a.Z)({"data-index":t,"data-focusvisible":re===t},fe,{className:(0,i.default)(le.thumb,fe.className,Q===t&&le.active,re===t&&le.focusVisible),style:(0,a.Z)({},n,{pointerEvents:S&&Q!==t?"none":void 0},fe.style),children:(0,d.jsx)(we,(0,a.Z)({"data-index":t,"aria-label":M?M(t):g,"aria-valuenow":P(e),"aria-labelledby":y,"aria-valuetext":C?C(P(e),t):Z,value:oe[t]},Se))}))}))},t)}))]}))}));var F=I,D=r(41796),V=r(78884),Y=r(81719),B=r(62097),q=r(69633),W=r(36622);const X=["component","components","componentsProps","color","size"],_=(0,a.Z)({},u,(0,s.Z)("MuiSlider",["colorPrimary","colorSecondary","thumbColorPrimary","thumbColorSecondary","sizeSmall","thumbSizeSmall"])),J=(0,Y.ZP)("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${(0,W.Z)(r.color)}`],"medium"!==r.size&&t[`size${(0,W.Z)(r.size)}`],r.marked&&t.marked,"vertical"===r.orientation&&t.vertical,"inverted"===r.track&&t.trackInverted,!1===r.track&&t.trackFalse]}})((({theme:e,ownerState:t})=>(0,a.Z)({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},"horizontal"===t.orientation&&(0,a.Z)({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},"small"===t.size&&{height:2},t.marked&&{marginBottom:20}),"vertical"===t.orientation&&(0,a.Z)({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},"small"===t.size&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${_.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${_.dragging}`]:{[`& .${_.thumb}, & .${_.track}`]:{transition:"none"}}}))),U=(0,Y.ZP)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})((({ownerState:e})=>(0,a.Z)({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},"horizontal"===e.orientation&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===e.orientation&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},"inverted"===e.track&&{opacity:1}))),G=(0,Y.ZP)("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e,ownerState:t})=>{const r="light"===e.palette.mode?(0,D.$n)(e.palette[t.color].main,.62):(0,D._j)(e.palette[t.color].main,.5);return(0,a.Z)({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},"small"===t.size&&{border:"none"},"horizontal"===t.orientation&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===t.orientation&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},!1===t.track&&{display:"none"},"inverted"===t.track&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:r,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:r})})),K=(0,Y.ZP)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.thumb,t[`thumbColor${(0,W.Z)(r.color)}`],"medium"!==r.size&&t[`thumbSize${(0,W.Z)(r.size)}`]]}})((({theme:e,ownerState:t})=>(0,a.Z)({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},"small"===t.size&&{width:12,height:12},"horizontal"===t.orientation&&{top:"50%",transform:"translate(-50%, -50%)"},"vertical"===t.orientation&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":(0,a.Z)({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"small"===t.size&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${_.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:(0,D.Fq)(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${_.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:(0,D.Fq)(e.palette[t.color].main,.16)}`},[`&.${_.disabled}`]:{"&:hover":{boxShadow:"none"}}}))),Q=(0,Y.ZP)(m,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})((({theme:e,ownerState:t})=>(0,a.Z)({[`&.${_.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},"horizontal"===t.orientation&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},"vertical"===t.orientation&&{right:"30px",top:"24px",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",right:"-20%",top:"25%"}},"small"===t.size&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}))),ee=(0,Y.ZP)("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>(0,Y.Dz)(e)&&"markActive"!==e,overridesResolver:(e,t)=>t.mark})((({theme:e,ownerState:t,markActive:r})=>(0,a.Z)({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},"horizontal"===t.orientation&&{top:"50%",transform:"translate(-1px, -50%)"},"vertical"===t.orientation&&{left:"50%",transform:"translate(-50%, 1px)"},r&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}))),te=(0,Y.ZP)("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>(0,Y.Dz)(e)&&"markLabelActive"!==e,overridesResolver:(e,t)=>t.markLabel})((({theme:e,ownerState:t,markLabelActive:r})=>(0,a.Z)({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},"horizontal"===t.orientation&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},"vertical"===t.orientation&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},r&&{color:(e.vars||e).palette.text.primary})));var re=o.forwardRef((function(e,t){var r,o,s,l;const u=(0,V.Z)({props:e,name:"MuiSlider"}),m="rtl"===(0,B.Z)().direction,{component:p="span",components:h={},componentsProps:v={},color:f="primary",size:b="medium"}=u,g=(0,n.Z)(u,X),Z=(e=>{const{color:t,size:r,classes:n={}}=e;return(0,a.Z)({},n,{root:(0,i.default)(n.root,c(`color${(0,W.Z)(t)}`),n[`color${(0,W.Z)(t)}`],r&&[c(`size${(0,W.Z)(r)}`),n[`size${(0,W.Z)(r)}`]]),thumb:(0,i.default)(n.thumb,c(`thumbColor${(0,W.Z)(t)}`),n[`thumbColor${(0,W.Z)(t)}`],r&&[c(`thumbSize${(0,W.Z)(r)}`),n[`thumbSize${(0,W.Z)(r)}`]])})})((0,a.Z)({},u,{color:f,size:b}));return(0,d.jsx)(F,(0,a.Z)({},g,{isRtl:m,components:(0,a.Z)({Root:J,Rail:U,Track:G,Thumb:K,ValueLabel:Q,Mark:ee,MarkLabel:te},h),componentsProps:(0,a.Z)({},v,{root:(0,a.Z)({},v.root,(0,q.Z)(h.Root)&&{as:p,ownerState:(0,a.Z)({},null==(r=v.root)?void 0:r.ownerState,{color:f,size:b})}),thumb:(0,a.Z)({},v.thumb,(0,q.Z)(h.Thumb)&&{ownerState:(0,a.Z)({},null==(o=v.thumb)?void 0:o.ownerState,{color:f,size:b})}),track:(0,a.Z)({},v.track,(0,q.Z)(h.Track)&&{ownerState:(0,a.Z)({},null==(s=v.track)?void 0:s.ownerState,{color:f,size:b})}),valueLabel:(0,a.Z)({},v.valueLabel,(0,q.Z)(h.ValueLabel)&&{ownerState:(0,a.Z)({},null==(l=v.valueLabel)?void 0:l.ownerState,{color:f,size:b})})}),classes:Z,ref:t}))}))},90244:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(63366),a=r(87462),o=r(67294),i=r(86010),s=r(94780),l=r(21109),c=r(78884),u=r(81719),d=r(34867);function m(e){return(0,d.Z)("MuiTable",e)}(0,r(1588).Z)("MuiTable",["root","stickyHeader"]);var p=r(85893);const h=["className","component","padding","size","stickyHeader"],v=(0,u.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,a.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,a.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),f="table";var b=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTable"}),{className:u,component:d=f,padding:b="normal",size:g="medium",stickyHeader:Z=!1}=r,y=(0,n.Z)(r,h),x=(0,a.Z)({},r,{component:d,padding:b,size:g,stickyHeader:Z}),k=(e=>{const{classes:t,stickyHeader:r}=e,n={root:["root",r&&"stickyHeader"]};return(0,s.Z)(n,m,t)})(x),w=o.useMemo((()=>({padding:b,size:g,stickyHeader:Z})),[b,g,Z]);return(0,p.jsx)(l.Z.Provider,{value:w,children:(0,p.jsx)(v,(0,a.Z)({as:d,role:d===f?null:"table",ref:t,className:(0,i.default)(k.root,u),ownerState:x},y))})}))},21109:function(e,t,r){"use strict";const n=r(67294).createContext();t.Z=n},80858:function(e,t,r){"use strict";const n=r(67294).createContext();t.Z=n},39807:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),a=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(80858),c=r(78884),u=r(81719),d=r(34867);function m(e){return(0,d.Z)("MuiTableBody",e)}(0,r(1588).Z)("MuiTableBody",["root"]);var p=r(85893);const h=["className","component"],v=(0,u.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),f={variant:"body"},b="tbody";var g=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:o,component:u=b}=r,d=(0,a.Z)(r,h),g=(0,n.Z)({},r,{component:u}),Z=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},m,t)})(g);return(0,p.jsx)(l.Z.Provider,{value:f,children:(0,p.jsx)(v,(0,n.Z)({className:(0,i.default)(Z.root,o),as:u,ref:t,role:u===b?null:"rowgroup",ownerState:g},d))})}))},7272:function(e,t,r){"use strict";var n=r(63366),a=r(87462),o=r(67294),i=r(86010),s=r(94780),l=r(41796),c=r(36622),u=r(21109),d=r(80858),m=r(78884),p=r(81719),h=r(84026),v=r(85893);const f=["align","className","component","padding","scope","size","sortDirection","variant"],b=(0,p.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,c.Z)(r.size)}`],"normal"!==r.padding&&t[`padding${(0,c.Z)(r.padding)}`],"inherit"!==r.align&&t[`align${(0,c.Z)(r.align)}`],r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,l.$n)((0,l.Fq)(e.palette.divider,1),.88):(0,l._j)((0,l.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${h.Z.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}))),g=o.forwardRef((function(e,t){const r=(0,m.Z)({props:e,name:"MuiTableCell"}),{align:l="inherit",className:p,component:g,padding:Z,scope:y,size:x,sortDirection:k,variant:w}=r,S=(0,n.Z)(r,f),$=o.useContext(u.Z),R=o.useContext(d.Z),M=R&&"head"===R.variant;let C;C=g||(M?"th":"td");let z=y;!z&&M&&(z="col");const T=w||R&&R.variant,L=(0,a.Z)({},r,{align:l,component:C,padding:Z||($&&$.padding?$.padding:"normal"),size:x||($&&$.size?$.size:"medium"),sortDirection:k,stickyHeader:"head"===T&&$&&$.stickyHeader,variant:T}),N=(e=>{const{classes:t,variant:r,align:n,padding:a,size:o,stickyHeader:i}=e,l={root:["root",r,i&&"stickyHeader","inherit"!==n&&`align${(0,c.Z)(n)}`,"normal"!==a&&`padding${(0,c.Z)(a)}`,`size${(0,c.Z)(o)}`]};return(0,s.Z)(l,h.U,t)})(L);let P=null;return k&&(P="asc"===k?"ascending":"descending"),(0,v.jsx)(b,(0,a.Z)({as:C,ref:t,className:(0,i.default)(N.root,p),"aria-sort":P,scope:z,ownerState:L},S))}));t.Z=g},84026:function(e,t,r){"use strict";r.d(t,{U:function(){return a}});var n=r(34867);function a(e){return(0,n.Z)("MuiTableCell",e)}const o=(0,r(1588).Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);t.Z=o},86777:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(87462),a=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(78884),c=r(81719),u=r(34867);function d(e){return(0,u.Z)("MuiTableContainer",e)}(0,r(1588).Z)("MuiTableContainer",["root"]);var m=r(85893);const p=["className","component"],h=(0,c.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var v=o.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiTableContainer"}),{className:o,component:c="div"}=r,u=(0,a.Z)(r,p),v=(0,n.Z)({},r,{component:c}),f=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},d,t)})(v);return(0,m.jsx)(h,(0,n.Z)({ref:t,as:c,className:(0,i.default)(f.root,o),ownerState:v},u))}))},93978:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),a=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(80858),c=r(78884),u=r(81719),d=r(34867);function m(e){return(0,d.Z)("MuiTableHead",e)}(0,r(1588).Z)("MuiTableHead",["root"]);var p=r(85893);const h=["className","component"],v=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),f={variant:"head"},b="thead";var g=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:o,component:u=b}=r,d=(0,a.Z)(r,h),g=(0,n.Z)({},r,{component:u}),Z=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},m,t)})(g);return(0,p.jsx)(l.Z.Provider,{value:f,children:(0,p.jsx)(v,(0,n.Z)({as:u,className:(0,i.default)(Z.root,o),ref:t,role:u===b?null:"rowgroup",ownerState:g},d))})}))},69417:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(87462),a=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(41796),c=r(80858),u=r(78884),d=r(81719),m=r(34867);function p(e){return(0,m.Z)("MuiTableRow",e)}var h=(0,r(1588).Z)("MuiTableRow",["root","selected","hover","head","footer"]),v=r(85893);const f=["className","component","hover","selected"],b=(0,d.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.head&&t.head,r.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${h.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${h.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),g="tr";var Z=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTableRow"}),{className:l,component:d=g,hover:m=!1,selected:h=!1}=r,Z=(0,a.Z)(r,f),y=o.useContext(c.Z),x=(0,n.Z)({},r,{component:d,hover:m,selected:h,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),k=(e=>{const{classes:t,selected:r,hover:n,head:a,footer:o}=e,i={root:["root",r&&"selected",n&&"hover",a&&"head",o&&"footer"]};return(0,s.Z)(i,p,t)})(x);return(0,v.jsx)(b,(0,n.Z)({as:d,ref:t,className:(0,i.default)(k.root,l),role:d===g?null:"row",ownerState:x},Z))}))},77274:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var n=r(63366),a=r(87462),o=r(67294),i=r(86010),s=r(59766),l=r(94780),c=r(34867),u=r(13264),d=r(29628),m=r(39707),p=r(66500),h=r(95408),v=r(98700),f=r(85893);const b=["component","direction","spacing","divider","children","className"],g=(0,p.Z)(),Z=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function y(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:g})}function x(e,t){const r=o.Children.toArray(e).filter(Boolean);return r.reduce(((e,n,a)=>(e.push(n),a<r.length-1&&e.push(o.cloneElement(t,{key:`separator-${a}`})),e)),[])}const k=({ownerState:e,theme:t})=>{let r=(0,a.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:t},(0,h.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const n=(0,v.hB)(t),a=Object.keys(t.breakpoints.values).reduce(((t,r)=>(("object"===typeof e.spacing&&null!=e.spacing[r]||"object"===typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t)),{}),o=(0,h.P$)({values:e.direction,base:a}),i=(0,h.P$)({values:e.spacing,base:a});"object"===typeof o&&Object.keys(o).forEach(((e,t,r)=>{if(!o[e]){const n=t>0?o[r[t-1]]:"column";o[e]=n}}));const l=(t,r)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${a=r?o[r]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]}`]:(0,v.NA)(n,t)}};var a};r=(0,s.Z)(r,(0,h.k9)({theme:t},i,l))}return r=(0,h.dt)(t.breakpoints,r),r};const w=function(e={}){const{createStyledComponent:t=Z,useThemeProps:r=y,componentName:s="MuiStack"}=e,u=t(k),d=o.forwardRef((function(e,t){const o=r(e),d=(0,m.Z)(o),{component:p="div",direction:h="column",spacing:v=0,divider:g,children:Z,className:y}=d,k=(0,n.Z)(d,b),w={direction:h,spacing:v},S=(0,l.Z)({root:["root"]},(e=>(0,c.Z)(s,e)),{});return(0,f.jsx)(u,(0,a.Z)({as:p,ownerState:w,ref:t,className:(0,i.default)(S.root,y)},k,{children:g?x(Z,g):Z}))}));return d}();var S=w},99857:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(67294),a=r(94184),o=r.n(a),i=r(99599),s=r(45125),l=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e){var t=e.className,r=e.top,a=e.left,u=e.data,d=void 0===u?[]:u,m=e.centroid,p=e.innerRadius,h=void 0===p?0:p,v=e.outerRadius,f=e.cornerRadius,b=e.startAngle,g=e.endAngle,Z=e.padAngle,y=e.padRadius,x=e.pieSort,k=e.pieSortValues,w=e.pieValue,S=e.children,$=e.fill,R=void 0===$?"":$,M=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,l),C=(0,s.Nb)({innerRadius:h,outerRadius:v,cornerRadius:f,padRadius:y}),z=(0,s.ve)({startAngle:b,endAngle:g,padAngle:Z,value:w,sort:x,sortValues:k}),T=z(d);return S?n.createElement(n.Fragment,null,S({arcs:T,path:C,pie:z})):n.createElement(i.Z,{className:"visx-pie-arcs-group",top:r,left:a},T.map((function(e,r){return n.createElement("g",{key:"pie-arc-"+r},n.createElement("path",c({className:o()("visx-pie-arc",t),d:C(e)||"",fill:null==R||"string"===typeof R?R:R(e)},M)),null==m?void 0:m(C.centroid(e),e))})))}},1646:function(e){e.exports=function(){"use strict";var e,t,r=1e3,n=6e4,a=36e5,o=864e5,i=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,s=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:s,months:l,days:o,hours:a,minutes:n,seconds:r,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof g},m=function(e,t,r){return new g(e,r,t.$l)},p=function(e){return t.p(e)+"s"},h=function(e){return e<0},v=function(e){return h(e)?Math.ceil(e):Math.floor(e)},f=function(e){return Math.abs(e)},b=function(e,t){return e?h(e)?{negative:!0,format:""+f(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},g=function(){function h(e,t,r){var n=this;if(this.$d={},this.$l=r,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return m(e*u[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){n.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var a=e.match(c);if(a){var o=a.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=o[0],this.$d.months=o[1],this.$d.weeks=o[2],this.$d.days=o[3],this.$d.hours=o[4],this.$d.minutes=o[5],this.$d.seconds=o[6],this.calMilliseconds(),this}}return this}var f=h.prototype;return f.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,r){return t+(e.$d[r]||0)*u[r]}),0)},f.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=v(e/s),e%=s,this.$d.months=v(e/l),e%=l,this.$d.days=v(e/o),e%=o,this.$d.hours=v(e/a),e%=a,this.$d.minutes=v(e/n),e%=n,this.$d.seconds=v(e/r),e%=r,this.$d.milliseconds=e},f.toISOString=function(){var e=b(this.$d.years,"Y"),t=b(this.$d.months,"M"),r=+this.$d.days||0;this.$d.weeks&&(r+=7*this.$d.weeks);var n=b(r,"D"),a=b(this.$d.hours,"H"),o=b(this.$d.minutes,"M"),i=this.$d.seconds||0;this.$d.milliseconds&&(i+=this.$d.milliseconds/1e3);var s=b(i,"S"),l=e.negative||t.negative||n.negative||a.negative||o.negative||s.negative,c=a.format||o.format||s.format?"T":"",u=(l?"-":"")+"P"+e.format+t.format+n.format+c+a.format+o.format+s.format;return"P"===u||"-P"===u?"P0D":u},f.toJSON=function(){return this.toISOString()},f.format=function(e){var r=e||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return r.replace(i,(function(e,t){return t||String(n[e])}))},f.as=function(e){return this.$ms/u[p(e)]},f.get=function(e){var t=this.$ms,r=p(e);return"milliseconds"===r?t%=1e3:t="weeks"===r?v(t/u[r]):this.$d[r],0===t?0:t},f.add=function(e,t,r){var n;return n=t?e*u[p(t)]:d(e)?e.$ms:m(e,this).$ms,m(this.$ms+n*(r?-1:1),this)},f.subtract=function(e,t){return this.add(e,t,!0)},f.locale=function(e){var t=this.clone();return t.$l=e,t},f.clone=function(){return m(this.$ms,this)},f.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},f.milliseconds=function(){return this.get("milliseconds")},f.asMilliseconds=function(){return this.as("milliseconds")},f.seconds=function(){return this.get("seconds")},f.asSeconds=function(){return this.as("seconds")},f.minutes=function(){return this.get("minutes")},f.asMinutes=function(){return this.as("minutes")},f.hours=function(){return this.get("hours")},f.asHours=function(){return this.as("hours")},f.days=function(){return this.get("days")},f.asDays=function(){return this.as("days")},f.weeks=function(){return this.get("weeks")},f.asWeeks=function(){return this.as("weeks")},f.months=function(){return this.get("months")},f.asMonths=function(){return this.as("months")},f.years=function(){return this.get("years")},f.asYears=function(){return this.as("years")},h}();return function(r,n,a){e=a,t=a().$utils(),a.duration=function(e,t){var r=a.locale();return m(e,{$l:r},t)},a.isDuration=d;var o=n.prototype.add,i=n.prototype.subtract;n.prototype.add=function(e,t){return d(e)&&(e=e.asMilliseconds()),o.bind(this)(e,t)},n.prototype.subtract=function(e,t){return d(e)&&(e=e.asMilliseconds()),i.bind(this)(e,t)}}}()}}]);