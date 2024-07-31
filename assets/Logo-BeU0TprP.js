import{r as ne,u as y,e as Ve,f as Xe,g as Je,j as i,i as Qe,a as Ze,b as et,t as we}from"./index-TktM6tT3.js";import{c as tt,w as Ce}from"./wheel-De3T1mCu.js";const nt=()=>{const[t,e]=ne.useState(!1);return{isModalOpen:t,openModal:()=>{e(!0)},closeModal:()=>{e(!1)}}},ot=y.div`
  position: relative;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`,rt=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,at=y.svg`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 14px;
  right: 14px;
  fill: ${t=>t.$clicked?"#3470ff":"transparent"};
  stroke: ${t=>t.$clicked?"#3470ff":"rgba(255, 255, 255, 0.8)"};
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    stroke: #3470ff;
    scale: 1.1;
  }
`,st=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,it=y.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,lt=y.span`
  color: #3470ff;
`,ct=y.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,ut=y.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 40px;
  overflow: hidden;
  margin-bottom: 28px;
  gap: 6px;

  span {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);

    &:not(:last-child) {
      border-right: 1px solid rgba(18, 20, 23, 0.1);
      padding-right: 6px;
    }
  }
`;var ve={exports:{}},B={},je={exports:{}},ft="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",pt=ft,dt=pt;function De(){}function Fe(){}Fe.resetWarningCache=De;var ht=function(){function t(r,s,u,v,a,x){if(x!==dt){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Fe,resetWarningCache:De};return o.PropTypes=o,o};je.exports=ht();var Le=je.exports,ye={exports:{}},j={},ge={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",s=/input|select|textarea|button|object|iframe/;function u(d,m){return m.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function v(d){var m=d.offsetWidth<=0&&d.offsetHeight<=0;if(m&&!d.innerHTML)return!0;try{var b=window.getComputedStyle(d),_=b.getPropertyValue("display");return m?_!==r&&u(d,b):_===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(d){for(var m=d,b=d.getRootNode&&d.getRootNode();m&&m!==document.body;){if(b&&m===b&&(m=b.host.parentNode),v(m))return!1;m=m.parentNode}return!0}function x(d,m){var b=d.nodeName.toLowerCase(),_=s.test(b)&&!d.disabled||b==="a"&&d.href||m;return _&&a(d)}function h(d){var m=d.getAttribute("tabindex");m===null&&(m=void 0);var b=isNaN(m);return(b||m>=0)&&x(d,!b)}function g(d){var m=[].slice.call(d.querySelectorAll("*"),0).reduce(function(b,_){return b.concat(_.shadowRoot?g(_.shadowRoot):[_])},[]);return m.filter(h)}t.exports=e.default})(ge,ge.exports);var ke=ge.exports;Object.defineProperty(j,"__esModule",{value:!0});j.resetState=gt;j.log=bt;j.handleBlur=oe;j.handleFocus=re;j.markForFocusLater=xt;j.returnFocus=Ot;j.popWithoutFocus=_t;j.setupScopedFocus=wt;j.teardownScopedFocus=Ct;var mt=ke,vt=yt(mt);function yt(t){return t&&t.__esModule?t:{default:t}}var G=[],Y=null,be=!1;function gt(){G=[]}function bt(){}function oe(){be=!0}function re(){if(be){if(be=!1,!Y)return;setTimeout(function(){if(!Y.contains(document.activeElement)){var t=(0,vt.default)(Y)[0]||Y;t.focus()}},0)}}function xt(){G.push(document.activeElement)}function Ot(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{G.length!==0&&(e=G.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function _t(){G.length>0&&G.pop()}function wt(t){Y=t,window.addEventListener?(window.addEventListener("blur",oe,!1),document.addEventListener("focus",re,!0)):(window.attachEvent("onBlur",oe),document.attachEvent("onFocus",re))}function Ct(){Y=null,window.addEventListener?(window.removeEventListener("blur",oe),document.removeEventListener("focus",re)):(window.detachEvent("onBlur",oe),document.detachEvent("onFocus",re))}var xe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=v;var o=ke,r=s(o);function s(a){return a&&a.__esModule?a:{default:a}}function u(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?u(a.activeElement.shadowRoot):a.activeElement}function v(a,x){var h=(0,r.default)(a);if(!h.length){x.preventDefault();return}var g=void 0,d=x.shiftKey,m=h[0],b=h[h.length-1],_=u();if(a===_){if(!d)return;g=b}if(b===_&&!d&&(g=m),m===_&&d&&(g=b),g){x.preventDefault(),g.focus();return}var T=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),F=T!=null&&T[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(F){var L=h.indexOf(_);if(L>-1&&(L+=d?-1:1),g=h[L],typeof g>"u"){x.preventDefault(),g=d?b:m,g.focus();return}x.preventDefault(),g.focus()}}t.exports=e.default})(xe,xe.exports);var Et=xe.exports,D={},St=function(){},Mt=St,A={},We={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(We);var Tt=We.exports;Object.defineProperty(A,"__esModule",{value:!0});A.canUseDOM=A.SafeNodeList=A.SafeHTMLCollection=void 0;var Rt=Tt,Pt=Nt(Rt);function Nt(t){return t&&t.__esModule?t:{default:t}}var de=Pt.default,At=de.canUseDOM?window.HTMLElement:{};A.SafeHTMLCollection=de.canUseDOM?window.HTMLCollection:{};A.SafeNodeList=de.canUseDOM?window.NodeList:{};A.canUseDOM=de.canUseDOM;A.default=At;Object.defineProperty(D,"__esModule",{value:!0});D.resetState=kt;D.log=Wt;D.assertNodeList=Ue;D.setElement=Ut;D.validateElement=Oe;D.hide=$t;D.show=It;D.documentNotReadyOrSSRTesting=Ht;var jt=Mt,Dt=Lt(jt),Ft=A;function Lt(t){return t&&t.__esModule?t:{default:t}}var R=null;function kt(){R&&(R.removeAttribute?R.removeAttribute("aria-hidden"):R.length!=null?R.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(R).forEach(function(t){return t.removeAttribute("aria-hidden")})),R=null}function Wt(){}function Ue(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Ut(t){var e=t;if(typeof e=="string"&&Ft.canUseDOM){var o=document.querySelectorAll(e);Ue(o,e),e=o}return R=e||R,R}function Oe(t){var e=t||R;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Dt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function $t(t){var e=!0,o=!1,r=void 0;try{for(var s=Oe(t)[Symbol.iterator](),u;!(e=(u=s.next()).done);e=!0){var v=u.value;v.setAttribute("aria-hidden","true")}}catch(a){o=!0,r=a}finally{try{!e&&s.return&&s.return()}finally{if(o)throw r}}}function It(t){var e=!0,o=!1,r=void 0;try{for(var s=Oe(t)[Symbol.iterator](),u;!(e=(u=s.next()).done);e=!0){var v=u.value;v.removeAttribute("aria-hidden")}}catch(a){o=!0,r=a}finally{try{!e&&s.return&&s.return()}finally{if(o)throw r}}}function Ht(){R=null}var V={};Object.defineProperty(V,"__esModule",{value:!0});V.resetState=qt;V.log=zt;var ee={},te={};function Ee(t,e){t.classList.remove(e)}function qt(){var t=document.getElementsByTagName("html")[0];for(var e in ee)Ee(t,ee[e]);var o=document.body;for(var r in te)Ee(o,te[r]);ee={},te={}}function zt(){}var Bt=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},Kt=function(e,o){return e[o]&&(e[o]-=1),o},Yt=function(e,o,r){r.forEach(function(s){Bt(o,s),e.add(s)})},Gt=function(e,o,r){r.forEach(function(s){Kt(o,s),o[s]===0&&e.remove(s)})};V.add=function(e,o){return Yt(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};V.remove=function(e,o){return Gt(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};var X={};Object.defineProperty(X,"__esModule",{value:!0});X.log=Xt;X.resetState=Jt;function Vt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var $e=function t(){var e=this;Vt(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var r=e.openInstances.indexOf(o);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(r){return r(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ue=new $e;function Xt(){console.log("portalOpenInstances ----------"),console.log(ue.openInstances.length),ue.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Jt(){ue=new $e}X.default=ue;var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.resetState=tn;_e.log=nn;var Qt=X,Zt=en(Qt);function en(t){return t&&t.__esModule?t:{default:t}}var E=void 0,N=void 0,z=[];function tn(){for(var t=[E,N],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}E=N=null,z=[]}function nn(){console.log("bodyTrap ----------"),console.log(z.length);for(var t=[E,N],e=0;e<t.length;e++){var o=t[e],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Se(){z.length!==0&&z[z.length-1].focusContent()}function on(t,e){!E&&!N&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",Se),N=E.cloneNode(),N.addEventListener("focus",Se)),z=e,z.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==N&&document.body.appendChild(N)):(E.parentElement&&E.parentElement.removeChild(E),N.parentElement&&N.parentElement.removeChild(N))}Zt.default.subscribe(on);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(p){for(var f=1;f<arguments.length;f++){var O=arguments[f];for(var n in O)Object.prototype.hasOwnProperty.call(O,n)&&(p[n]=O[n])}return p},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},s=function(){function p(f,O){for(var n=0;n<O.length;n++){var l=O[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(f,l.key,l)}}return function(f,O,n){return O&&p(f.prototype,O),n&&p(f,n),f}}(),u=ne,v=Le,a=U(v),x=j,h=W(x),g=Et,d=U(g),m=D,b=W(m),_=V,T=W(_),F=A,L=U(F),J=X,K=U(J);function W(p){if(p&&p.__esModule)return p;var f={};if(p!=null)for(var O in p)Object.prototype.hasOwnProperty.call(p,O)&&(f[O]=p[O]);return f.default=p,f}function U(p){return p&&p.__esModule?p:{default:p}}function Q(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")}function ie(p,f){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:p}function Z(p,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);p.prototype=Object.create(f&&f.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(p,f):p.__proto__=f)}var M={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},k=function(f){return f.code==="Tab"||f.keyCode===9},he=function(f){return f.code==="Escape"||f.keyCode===27},P=0,me=function(p){Z(f,p);function f(O){Q(this,f);var n=ie(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,O));return n.setOverlayRef=function(l){n.overlay=l,n.props.overlayRef&&n.props.overlayRef(l)},n.setContentRef=function(l){n.content=l,n.props.contentRef&&n.props.contentRef(l)},n.afterClose=function(){var l=n.props,C=l.appElement,S=l.ariaHideApp,w=l.htmlOpenClassName,I=l.bodyOpenClassName,H=l.parentSelector,le=H&&H().ownerDocument||document;I&&T.remove(le.body,I),w&&T.remove(le.getElementsByTagName("html")[0],w),S&&P>0&&(P-=1,P===0&&b.show(C)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(h.returnFocus(n.props.preventScroll),h.teardownScopedFocus()):h.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),K.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(h.setupScopedFocus(n.node),h.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var l=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:l},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(l){k(l)&&(0,d.default)(n.content,l),n.props.shouldCloseOnEsc&&he(l)&&(l.stopPropagation(),n.requestClose(l))},n.handleOverlayOnClick=function(l){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(l):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(l){!n.props.shouldCloseOnOverlayClick&&l.target==n.overlay&&l.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(l){return n.ownerHandlesClose()&&n.props.onRequestClose(l)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(l,C){var S=(typeof C>"u"?"undefined":r(C))==="object"?C:{base:M[l],afterOpen:M[l]+"--after-open",beforeClose:M[l]+"--before-close"},w=S.base;return n.state.afterOpen&&(w=w+" "+S.afterOpen),n.state.beforeClose&&(w=w+" "+S.beforeClose),typeof C=="string"&&C?w+" "+C:w},n.attributesFromObject=function(l,C){return Object.keys(C).reduce(function(S,w){return S[l+"-"+w]=C[w],S},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return s(f,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,l){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!l.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,l=n.appElement,C=n.ariaHideApp,S=n.htmlOpenClassName,w=n.bodyOpenClassName,I=n.parentSelector,H=I&&I().ownerDocument||document;w&&T.add(H.body,w),S&&T.add(H.getElementsByTagName("html")[0],S),C&&(P+=1,b.hide(l)),K.default.register(this)}},{key:"render",value:function(){var n=this.props,l=n.id,C=n.className,S=n.overlayClassName,w=n.defaultStyles,I=n.children,H=C?{}:w.content,le=S?{}:w.overlay;if(this.shouldBeClosed())return null;var Ke={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:o({},le,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ye=o({id:l,ref:this.setContentRef,style:o({},H,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ge=this.props.contentElement(Ye,I);return this.props.overlayElement(Ke,Ge)}}]),f}(u.Component);me.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},me.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(L.default),a.default.instanceOf(F.SafeHTMLCollection),a.default.instanceOf(F.SafeNodeList),a.default.arrayOf(a.default.instanceOf(L.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=me,t.exports=e.default})(ye,ye.exports);var rn=ye.exports;function Ie(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function He(t){function e(o){var r=this.constructor.getDerivedStateFromProps(t,o);return r??null}this.setState(e.bind(this))}function qe(t,e){try{var o=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}Ie.__suppressDeprecationWarning=!0;He.__suppressDeprecationWarning=!0;qe.__suppressDeprecationWarning=!0;function an(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,r=null,s=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?s="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),o!==null||r!==null||s!==null){var u=t.displayName||t.name,v=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+u+" uses "+v+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Ie,e.componentWillReceiveProps=He),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=qe;var a=e.componentDidUpdate;e.componentDidUpdate=function(h,g,d){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;a.call(this,h,g,m)}}return t}const sn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:an},Symbol.toStringTag,{value:"Module"})),ln=Ve(sn);Object.defineProperty(B,"__esModule",{value:!0});B.bodyOpenClassName=B.portalClassName=void 0;var Me=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},cn=function(){function t(e,o){for(var r=0;r<o.length;r++){var s=o[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),ze=ne,fe=ae(ze),un=Xe,pe=ae(un),fn=Le,c=ae(fn),pn=rn,Te=ae(pn),dn=D,hn=vn(dn),$=A,Re=ae($),mn=ln;function vn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function ae(t){return t&&t.__esModule?t:{default:t}}function yn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pe(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function gn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var bn=B.portalClassName="ReactModalPortal",xn=B.bodyOpenClassName="ReactModal__Body--open",q=$.canUseDOM&&pe.default.createPortal!==void 0,Ne=function(e){return document.createElement(e)},Ae=function(){return q?pe.default.createPortal:pe.default.unstable_renderSubtreeIntoContainer};function ce(t){return t()}var se=function(t){gn(e,t);function e(){var o,r,s,u;yn(this,e);for(var v=arguments.length,a=Array(v),x=0;x<v;x++)a[x]=arguments[x];return u=(r=(s=Pe(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(a))),s),s.removePortal=function(){!q&&pe.default.unmountComponentAtNode(s.node);var h=ce(s.props.parentSelector);h&&h.contains(s.node)?h.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(h){s.portal=h},s.renderPortal=function(h){var g=Ae(),d=g(s,fe.default.createElement(Te.default,Me({defaultStyles:e.defaultStyles},h)),s.node);s.portalRef(d)},r),Pe(s,u)}return cn(e,[{key:"componentDidMount",value:function(){if($.canUseDOM){q||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var r=ce(this.props.parentSelector);r.appendChild(this.node),!q&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var s=ce(r.parentSelector),u=ce(this.props.parentSelector);return{prevParent:s,nextParent:u}}},{key:"componentDidUpdate",value:function(r,s,u){if($.canUseDOM){var v=this.props,a=v.isOpen,x=v.portalClassName;r.portalClassName!==x&&(this.node.className=x);var h=u.prevParent,g=u.nextParent;g!==h&&(h.removeChild(this.node),g.appendChild(this.node)),!(!r.isOpen&&!a)&&!q&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!$.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,s=Date.now(),u=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||s+this.props.closeTimeoutMS);u?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,u-s)):this.removePortal()}}},{key:"render",value:function(){if(!$.canUseDOM||!q)return null;!this.node&&q&&(this.node=Ne("div"));var r=Ae();return r(fe.default.createElement(Te.default,Me({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){hn.setElement(r)}}]),e}(ze.Component);se.propTypes={isOpen:c.default.bool.isRequired,style:c.default.shape({content:c.default.object,overlay:c.default.object}),portalClassName:c.default.string,bodyOpenClassName:c.default.string,htmlOpenClassName:c.default.string,className:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),overlayClassName:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),appElement:c.default.oneOfType([c.default.instanceOf(Re.default),c.default.instanceOf($.SafeHTMLCollection),c.default.instanceOf($.SafeNodeList),c.default.arrayOf(c.default.instanceOf(Re.default))]),onAfterOpen:c.default.func,onRequestClose:c.default.func,closeTimeoutMS:c.default.number,ariaHideApp:c.default.bool,shouldFocusAfterRender:c.default.bool,shouldCloseOnOverlayClick:c.default.bool,shouldReturnFocusAfterClose:c.default.bool,preventScroll:c.default.bool,parentSelector:c.default.func,aria:c.default.object,data:c.default.object,role:c.default.string,contentLabel:c.default.string,shouldCloseOnEsc:c.default.bool,overlayRef:c.default.func,contentRef:c.default.func,id:c.default.string,overlayElement:c.default.func,contentElement:c.default.func};se.defaultProps={isOpen:!1,portalClassName:bn,bodyOpenClassName:xn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return fe.default.createElement("div",e,o)},contentElement:function(e,o){return fe.default.createElement("div",e,o)}};se.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,mn.polyfill)(se);B.default=se;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=B,r=s(o);function s(u){return u&&u.__esModule?u:{default:u}}e.default=r.default,t.exports=e.default})(ve,ve.exports);var On=ve.exports;const Be=Je(On),_n={overlay:{backgroundColor:"rgba(18, 20, 23, 0.5)"},content:{width:"541px",maxHeight:"752px",margin:"auto",padding:"40px",border:"none",borderRadius:"14px"}};Be.setAppElement("#root");const wn=({modalIsOpen:t,closeModal:e,children:o})=>i.jsx(Be,{isOpen:t,onRequestClose:e,style:_n,children:o}),Cn=y.div`
  position: relative;
  height: 248px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`,En=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Sn=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,Mn=y.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,Tn=y.span`
  color: #3470ff;
`,Rn=y.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,Pn=y.ul`
  display: flex;
  flex-wrap: wrap;
  max-height: 40px;
  width: 300px;
  overflow: hidden;
  margin-bottom: 14px;
  gap: 6px;

  li {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);

    &:not(:last-child) {
      border-right: 1px solid rgba(18, 20, 23, 0.1);
      padding-right: 6px;
    }
  }
`,Nn=y.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,An=y.h4`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,jn=y.ul`
  display: flex;
  flex-wrap: wrap;
  max-height: 40px;
  width: 400px;
  margin-bottom: 24px;
  overflow: hidden;
  gap: 6px;

  li {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);

    &:not(:last-child) {
      border-right: 1px solid rgba(18, 20, 23, 0.1);
      padding-right: 6px;
    }
  }
`,Dn=y.h4`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,Fn=y.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 44px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  background-color: #3470ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`,Ln=y.button`
  background-color: transparent;
  color: #121417;
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  padding: 0;
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.3;
  }
`,kn=y.ul`
  display: flex;
  flex-wrap: wrap;
  /* width: 400px; */
  margin-bottom: 24px;
  gap: 8px;

  li {
    font-size: 12px;
    line-height: 1.5;
    color: #363535;

    border-radius: 35px;
    padding: 7px 14px;
    background: #f9f9f9;
  }

  span {
    font-weight: 600;
    color: #3470ff;
  }
`,Wn=({modalIsOpen:t,closeModal:e,data:o})=>{const{id:r,img:s,photoLink:u,make:v,model:a,year:x,rentalPrice:h,address:g,type:d,accessories:m,functionalities:b,fuelConsumption:_,engineSize:T,description:F,rentalConditions:L,mileage:J}=o,K=g.split(", "),W=K[1],U=K[2],Q=L.split(`
`),ie=J.toString().replace(/^(\d)(\d+)/,"$1,$2");let Z=h.slice(1)+h[0];return i.jsxs(wn,{modalIsOpen:t,closeModal:e,children:[i.jsx(Cn,{children:i.jsx(En,{src:s||u,alt:`${v}, ${a}`})}),i.jsxs(Sn,{children:[i.jsxs(Mn,{children:[v," ",i.jsx(Tn,{children:a}),", ",x]}),i.jsx(Rn,{children:h})]}),i.jsxs(Pn,{children:[i.jsx("li",{children:W}),i.jsx("li",{children:U}),i.jsxs("li",{children:["Id: ",r]}),i.jsxs("li",{children:["Year: ",x]}),i.jsxs("li",{children:["Type: ",d]}),i.jsxs("li",{children:["Fuel Consumption: ",_]}),i.jsxs("li",{children:["Engine Size: ",T]})]}),i.jsx(Nn,{children:F}),i.jsx(An,{children:"Accessories and functionalities:"}),i.jsxs(jn,{children:[m.map((M,k)=>i.jsx("li",{children:M},k)),b.map((M,k)=>i.jsx("li",{children:M},k))]}),i.jsx(Dn,{children:"Rental Conditions:"}),i.jsxs(kn,{children:[Q.map((M,k)=>i.jsxs("li",{children:[k===0?`${M.split(":")[0]}:`:M.split(":")[0],i.jsx("span",{children:M.split(":").slice(1).join(":")})]},k)),i.jsxs("li",{children:["Mileage: ",i.jsx("span",{children:ie})]}),i.jsxs("li",{children:["Price: ",i.jsx("span",{children:Z})]})]}),i.jsx(Fn,{href:"tel:+380730000000",children:"Rental car"}),i.jsx(Ln,{onClick:e,children:"✕"})]})},Un=y.button`
  width: ${t=>t.$width};
  height: ${t=>t.$height};
  border-radius: 12px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  background-color: #3470ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`,$n=({type:t,title:e,width:o,height:r,onClick:s})=>i.jsx(Un,{type:t,$width:o,$height:r,onClick:s,children:e}),In="/rent-car-app/icons.svg",Hn=t=>t.adverts.adverts,qn=t=>t.filter,zn=t=>t.favorites,Zn=t=>t.adverts.isLoading,eo=Qe([Hn,qn],(t,e)=>{const{brand:o,price:r,mileageFrom:s,mileageTo:u}=e;return t.filter(v=>!(o&&v.make.toLowerCase()!==o.toLowerCase()||r&&parseFloat(v.rentalPrice.slice(1))!==parseFloat(r)||s&&v.mileage<parseInt(s)||u&&v.mileage>parseInt(u)))}),Bn=({advert:t})=>{const e=Ze(),{id:o,img:r,photoLink:s,make:u,model:v,year:a,rentalPrice:x,address:h,rentalCompany:g,type:d,accessories:m}=t,{isModalOpen:b,openModal:_,closeModal:T}=nt(),F=h.split(", "),L=F[1],J=F[2],W=document.createElement("canvas").getContext("2d");W.font="16px Manrope";const U=`${u} ${v}`,Q=W.measureText(U).width,Z=et(zn).some(P=>P.id===t.id),[M,k]=ne.useState(Z);ne.useEffect(()=>{const P=localStorage.getItem("favorites");P&&e(we(JSON.parse(P)))},[e]);const he=()=>{k(P=>!P),e(we(t))};return i.jsxs("div",{children:[i.jsxs(ot,{children:[i.jsx(rt,{src:r||s,alt:`${u}, ${v}`}),i.jsx(at,{$clicked:M,onClick:he,children:i.jsx("use",{href:In+"#icon-heart"})})]}),i.jsxs(st,{children:[i.jsx(it,{children:Q>185?`${u}, ${a}`:i.jsxs(i.Fragment,{children:[u," ",i.jsx(lt,{children:v}),", ",a]})}),i.jsx(ct,{children:x})]}),i.jsxs(ut,{children:[i.jsx("span",{children:L}),i.jsx("span",{children:J}),i.jsx("span",{children:g}),i.jsx("span",{children:d}),i.jsx("span",{children:u}),i.jsx("span",{children:o}),i.jsx("span",{children:m[2]})]}),i.jsx($n,{type:"button",title:"Learn more",width:"100%",height:"44px",onClick:_}),i.jsx(Wn,{data:t,modalIsOpen:b,closeModal:T})]})},Kn=y.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`,Yn=y.li`
  width: calc((100% - 29px * 3) / 4);
`,to=({visibleadverts:t})=>i.jsx(Kn,{children:t.map(e=>i.jsx(Yn,{children:i.jsx(Bn,{advert:e})},e.id))}),no=y.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 100%;
  margin-bottom: 50px;
  background-color: #3470ff;
`,Gn=y.div`
  position: relative;
  width: 150px;
  height: 50px;
`,Vn=y.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  z-index: 2;
`,Xn=y.div`
  position: absolute;
  display: flex;
  top: 24px;
  right: 135px;
  width: 118px;
  justify-content: space-between;
  left: 52%;
  bottom: 105px;
  transform: translateX(-50%);
  z-index: 2;

  img {
    width: 25px;
    height: 25px;
  }
`,oo=()=>i.jsx(Gn,{children:i.jsxs(Vn,{children:[i.jsx("img",{src:tt,alt:"Car"}),i.jsxs(Xn,{children:[i.jsx("img",{src:Ce,alt:"Wheel"}),i.jsx("img",{src:Ce,alt:"Wheel"})]})]})});export{$n as B,to as G,no as H,oo as L,eo as a,Zn as b,qn as c,zn as d,Hn as s};
