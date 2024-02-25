import{r as ne,u as y,e as Ye,f as Ve,g as Je,j as i,h as Qe,a as Xe,b as Ze,t as _e}from"./index-CbDy6cDQ.js";const et=()=>{const[t,e]=ne.useState(!1);return{isModalOpen:t,openModal:()=>{e(!0)},closeModal:()=>{e(!1)}}},tt=y.div`
  position: relative;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`,nt=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ot=y.svg`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 14px;
  right: 14px;
  fill: ${t=>t.$clicked?"#3470ff":"transparent"};
  stroke: ${t=>t.$clicked?"#3470ff":"rgba(255, 255, 255, 0.8)"};
  cursor: pointer;

  transition: all 450ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    stroke: #3470ff;
    scale: 1.1;
  }
`,rt=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,at=y.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,st=y.span`
  color: #3470ff;
`,it=y.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,lt=y.div`
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
`;var ve={exports:{}},z={},Ae={exports:{}},ct="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ut=ct,ft=ut;function De(){}function je(){}je.resetWarningCache=De;var dt=function(){function t(r,s,u,v,a,x){if(x!==ft){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:je,resetWarningCache:De};return o.PropTypes=o,o};Ae.exports=dt();var Fe=Ae.exports,ye={exports:{}},D={},ge={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=g;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",s=/input|select|textarea|button|object|iframe/;function u(p,m){return m.getPropertyValue("overflow")!=="visible"||p.scrollWidth<=0&&p.scrollHeight<=0}function v(p){var m=p.offsetWidth<=0&&p.offsetHeight<=0;if(m&&!p.innerHTML)return!0;try{var b=window.getComputedStyle(p),w=b.getPropertyValue("display");return m?w!==r&&u(p,b):w===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(p){for(var m=p,b=p.getRootNode&&p.getRootNode();m&&m!==document.body;){if(b&&m===b&&(m=b.host.parentNode),v(m))return!1;m=m.parentNode}return!0}function x(p,m){var b=p.nodeName.toLowerCase(),w=s.test(b)&&!p.disabled||b==="a"&&p.href||m;return w&&a(p)}function h(p){var m=p.getAttribute("tabindex");m===null&&(m=void 0);var b=isNaN(m);return(b||m>=0)&&x(p,!b)}function g(p){var m=[].slice.call(p.querySelectorAll("*"),0).reduce(function(b,w){return b.concat(w.shadowRoot?g(w.shadowRoot):[w])},[]);return m.filter(h)}t.exports=e.default})(ge,ge.exports);var ke=ge.exports;Object.defineProperty(D,"__esModule",{value:!0});D.resetState=vt;D.log=yt;D.handleBlur=oe;D.handleFocus=re;D.markForFocusLater=gt;D.returnFocus=bt;D.popWithoutFocus=xt;D.setupScopedFocus=Ot;D.teardownScopedFocus=wt;var pt=ke,ht=mt(pt);function mt(t){return t&&t.__esModule?t:{default:t}}var Y=[],G=null,be=!1;function vt(){Y=[]}function yt(){}function oe(){be=!0}function re(){if(be){if(be=!1,!G)return;setTimeout(function(){if(!G.contains(document.activeElement)){var t=(0,ht.default)(G)[0]||G;t.focus()}},0)}}function gt(){Y.push(document.activeElement)}function bt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Y.length!==0&&(e=Y.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function xt(){Y.length>0&&Y.pop()}function Ot(t){G=t,window.addEventListener?(window.addEventListener("blur",oe,!1),document.addEventListener("focus",re,!0)):(window.attachEvent("onBlur",oe),document.attachEvent("onFocus",re))}function wt(){G=null,window.addEventListener?(window.removeEventListener("blur",oe),document.removeEventListener("focus",re)):(window.detachEvent("onBlur",oe),document.detachEvent("onFocus",re))}var xe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=v;var o=ke,r=s(o);function s(a){return a&&a.__esModule?a:{default:a}}function u(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?u(a.activeElement.shadowRoot):a.activeElement}function v(a,x){var h=(0,r.default)(a);if(!h.length){x.preventDefault();return}var g=void 0,p=x.shiftKey,m=h[0],b=h[h.length-1],w=u();if(a===w){if(!p)return;g=b}if(b===w&&!p&&(g=m),m===w&&p&&(g=b),g){x.preventDefault(),g.focus();return}var T=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),F=T!=null&&T[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(F){var k=h.indexOf(w);if(k>-1&&(k+=p?-1:1),g=h[k],typeof g>"u"){x.preventDefault(),g=p?b:m,g.focus();return}x.preventDefault(),g.focus()}}t.exports=e.default})(xe,xe.exports);var _t=xe.exports,j={},Ct=function(){},Et=Ct,A={},Le={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Le);var St=Le.exports;Object.defineProperty(A,"__esModule",{value:!0});A.canUseDOM=A.SafeNodeList=A.SafeHTMLCollection=void 0;var Mt=St,Tt=Rt(Mt);function Rt(t){return t&&t.__esModule?t:{default:t}}var pe=Tt.default,Pt=pe.canUseDOM?window.HTMLElement:{};A.SafeHTMLCollection=pe.canUseDOM?window.HTMLCollection:{};A.SafeNodeList=pe.canUseDOM?window.NodeList:{};A.canUseDOM=pe.canUseDOM;A.default=Pt;Object.defineProperty(j,"__esModule",{value:!0});j.resetState=Ft;j.log=kt;j.assertNodeList=We;j.setElement=Lt;j.validateElement=Oe;j.hide=Wt;j.show=Ut;j.documentNotReadyOrSSRTesting=$t;var Nt=Et,At=jt(Nt),Dt=A;function jt(t){return t&&t.__esModule?t:{default:t}}var R=null;function Ft(){R&&(R.removeAttribute?R.removeAttribute("aria-hidden"):R.length!=null?R.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(R).forEach(function(t){return t.removeAttribute("aria-hidden")})),R=null}function kt(){}function We(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Lt(t){var e=t;if(typeof e=="string"&&Dt.canUseDOM){var o=document.querySelectorAll(e);We(o,e),e=o}return R=e||R,R}function Oe(t){var e=t||R;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,At.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Wt(t){var e=!0,o=!1,r=void 0;try{for(var s=Oe(t)[Symbol.iterator](),u;!(e=(u=s.next()).done);e=!0){var v=u.value;v.setAttribute("aria-hidden","true")}}catch(a){o=!0,r=a}finally{try{!e&&s.return&&s.return()}finally{if(o)throw r}}}function Ut(t){var e=!0,o=!1,r=void 0;try{for(var s=Oe(t)[Symbol.iterator](),u;!(e=(u=s.next()).done);e=!0){var v=u.value;v.removeAttribute("aria-hidden")}}catch(a){o=!0,r=a}finally{try{!e&&s.return&&s.return()}finally{if(o)throw r}}}function $t(){R=null}var V={};Object.defineProperty(V,"__esModule",{value:!0});V.resetState=It;V.log=Ht;var ee={},te={};function Ce(t,e){t.classList.remove(e)}function It(){var t=document.getElementsByTagName("html")[0];for(var e in ee)Ce(t,ee[e]);var o=document.body;for(var r in te)Ce(o,te[r]);ee={},te={}}function Ht(){}var qt=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},Bt=function(e,o){return e[o]&&(e[o]-=1),o},zt=function(e,o,r){r.forEach(function(s){qt(o,s),e.add(s)})},Kt=function(e,o,r){r.forEach(function(s){Bt(o,s),o[s]===0&&e.remove(s)})};V.add=function(e,o){return zt(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};V.remove=function(e,o){return Kt(e.classList,e.nodeName.toLowerCase()=="html"?ee:te,o.split(" "))};var J={};Object.defineProperty(J,"__esModule",{value:!0});J.log=Yt;J.resetState=Vt;function Gt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ue=function t(){var e=this;Gt(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var r=e.openInstances.indexOf(o);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(r){return r(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ue=new Ue;function Yt(){console.log("portalOpenInstances ----------"),console.log(ue.openInstances.length),ue.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Vt(){ue=new Ue}J.default=ue;var we={};Object.defineProperty(we,"__esModule",{value:!0});we.resetState=Zt;we.log=en;var Jt=J,Qt=Xt(Jt);function Xt(t){return t&&t.__esModule?t:{default:t}}var E=void 0,N=void 0,B=[];function Zt(){for(var t=[E,N],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}E=N=null,B=[]}function en(){console.log("bodyTrap ----------"),console.log(B.length);for(var t=[E,N],e=0;e<t.length;e++){var o=t[e],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Ee(){B.length!==0&&B[B.length-1].focusContent()}function tn(t,e){!E&&!N&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",Ee),N=E.cloneNode(),N.addEventListener("focus",Ee)),B=e,B.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==N&&document.body.appendChild(N)):(E.parentElement&&E.parentElement.removeChild(E),N.parentElement&&N.parentElement.removeChild(N))}Qt.default.subscribe(tn);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(d){for(var f=1;f<arguments.length;f++){var O=arguments[f];for(var n in O)Object.prototype.hasOwnProperty.call(O,n)&&(d[n]=O[n])}return d},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},s=function(){function d(f,O){for(var n=0;n<O.length;n++){var l=O[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(f,l.key,l)}}return function(f,O,n){return O&&d(f.prototype,O),n&&d(f,n),f}}(),u=ne,v=Fe,a=U(v),x=D,h=W(x),g=_t,p=U(g),m=j,b=W(m),w=V,T=W(w),F=A,k=U(F),Q=J,K=U(Q);function W(d){if(d&&d.__esModule)return d;var f={};if(d!=null)for(var O in d)Object.prototype.hasOwnProperty.call(d,O)&&(f[O]=d[O]);return f.default=d,f}function U(d){return d&&d.__esModule?d:{default:d}}function X(d,f){if(!(d instanceof f))throw new TypeError("Cannot call a class as a function")}function ie(d,f){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:d}function Z(d,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);d.prototype=Object.create(f&&f.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(d,f):d.__proto__=f)}var M={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},L=function(f){return f.code==="Tab"||f.keyCode===9},he=function(f){return f.code==="Escape"||f.keyCode===27},P=0,me=function(d){Z(f,d);function f(O){X(this,f);var n=ie(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,O));return n.setOverlayRef=function(l){n.overlay=l,n.props.overlayRef&&n.props.overlayRef(l)},n.setContentRef=function(l){n.content=l,n.props.contentRef&&n.props.contentRef(l)},n.afterClose=function(){var l=n.props,C=l.appElement,S=l.ariaHideApp,_=l.htmlOpenClassName,I=l.bodyOpenClassName,H=l.parentSelector,le=H&&H().ownerDocument||document;I&&T.remove(le.body,I),_&&T.remove(le.getElementsByTagName("html")[0],_),S&&P>0&&(P-=1,P===0&&b.show(C)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(h.returnFocus(n.props.preventScroll),h.teardownScopedFocus()):h.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),K.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(h.setupScopedFocus(n.node),h.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var l=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:l},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(l){L(l)&&(0,p.default)(n.content,l),n.props.shouldCloseOnEsc&&he(l)&&(l.stopPropagation(),n.requestClose(l))},n.handleOverlayOnClick=function(l){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(l):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(l){!n.props.shouldCloseOnOverlayClick&&l.target==n.overlay&&l.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(l){return n.ownerHandlesClose()&&n.props.onRequestClose(l)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(l,C){var S=(typeof C>"u"?"undefined":r(C))==="object"?C:{base:M[l],afterOpen:M[l]+"--after-open",beforeClose:M[l]+"--before-close"},_=S.base;return n.state.afterOpen&&(_=_+" "+S.afterOpen),n.state.beforeClose&&(_=_+" "+S.beforeClose),typeof C=="string"&&C?_+" "+C:_},n.attributesFromObject=function(l,C){return Object.keys(C).reduce(function(S,_){return S[l+"-"+_]=C[_],S},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return s(f,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,l){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!l.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,l=n.appElement,C=n.ariaHideApp,S=n.htmlOpenClassName,_=n.bodyOpenClassName,I=n.parentSelector,H=I&&I().ownerDocument||document;_&&T.add(H.body,_),S&&T.add(H.getElementsByTagName("html")[0],S),C&&(P+=1,b.hide(l)),K.default.register(this)}},{key:"render",value:function(){var n=this.props,l=n.id,C=n.className,S=n.overlayClassName,_=n.defaultStyles,I=n.children,H=C?{}:_.content,le=S?{}:_.overlay;if(this.shouldBeClosed())return null;var ze={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:o({},le,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ke=o({id:l,ref:this.setContentRef,style:o({},H,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ge=this.props.contentElement(Ke,I);return this.props.overlayElement(ze,Ge)}}]),f}(u.Component);me.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},me.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(k.default),a.default.instanceOf(F.SafeHTMLCollection),a.default.instanceOf(F.SafeNodeList),a.default.arrayOf(a.default.instanceOf(k.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=me,t.exports=e.default})(ye,ye.exports);var nn=ye.exports;function $e(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Ie(t){function e(o){var r=this.constructor.getDerivedStateFromProps(t,o);return r??null}this.setState(e.bind(this))}function He(t,e){try{var o=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}$e.__suppressDeprecationWarning=!0;Ie.__suppressDeprecationWarning=!0;He.__suppressDeprecationWarning=!0;function on(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,r=null,s=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?s="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),o!==null||r!==null||s!==null){var u=t.displayName||t.name,v=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+u+" uses "+v+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=$e,e.componentWillReceiveProps=Ie),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=He;var a=e.componentDidUpdate;e.componentDidUpdate=function(h,g,p){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:p;a.call(this,h,g,m)}}return t}const rn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:on},Symbol.toStringTag,{value:"Module"})),an=Ye(rn);Object.defineProperty(z,"__esModule",{value:!0});z.bodyOpenClassName=z.portalClassName=void 0;var Se=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},sn=function(){function t(e,o){for(var r=0;r<o.length;r++){var s=o[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),qe=ne,fe=ae(qe),ln=Ve,de=ae(ln),cn=Fe,c=ae(cn),un=nn,Me=ae(un),fn=j,dn=hn(fn),$=A,Te=ae($),pn=an;function hn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function ae(t){return t&&t.__esModule?t:{default:t}}function mn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Re(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function vn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var yn=z.portalClassName="ReactModalPortal",gn=z.bodyOpenClassName="ReactModal__Body--open",q=$.canUseDOM&&de.default.createPortal!==void 0,Pe=function(e){return document.createElement(e)},Ne=function(){return q?de.default.createPortal:de.default.unstable_renderSubtreeIntoContainer};function ce(t){return t()}var se=function(t){vn(e,t);function e(){var o,r,s,u;mn(this,e);for(var v=arguments.length,a=Array(v),x=0;x<v;x++)a[x]=arguments[x];return u=(r=(s=Re(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(a))),s),s.removePortal=function(){!q&&de.default.unmountComponentAtNode(s.node);var h=ce(s.props.parentSelector);h&&h.contains(s.node)?h.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(h){s.portal=h},s.renderPortal=function(h){var g=Ne(),p=g(s,fe.default.createElement(Me.default,Se({defaultStyles:e.defaultStyles},h)),s.node);s.portalRef(p)},r),Re(s,u)}return sn(e,[{key:"componentDidMount",value:function(){if($.canUseDOM){q||(this.node=Pe("div")),this.node.className=this.props.portalClassName;var r=ce(this.props.parentSelector);r.appendChild(this.node),!q&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var s=ce(r.parentSelector),u=ce(this.props.parentSelector);return{prevParent:s,nextParent:u}}},{key:"componentDidUpdate",value:function(r,s,u){if($.canUseDOM){var v=this.props,a=v.isOpen,x=v.portalClassName;r.portalClassName!==x&&(this.node.className=x);var h=u.prevParent,g=u.nextParent;g!==h&&(h.removeChild(this.node),g.appendChild(this.node)),!(!r.isOpen&&!a)&&!q&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!$.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,s=Date.now(),u=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||s+this.props.closeTimeoutMS);u?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,u-s)):this.removePortal()}}},{key:"render",value:function(){if(!$.canUseDOM||!q)return null;!this.node&&q&&(this.node=Pe("div"));var r=Ne();return r(fe.default.createElement(Me.default,Se({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){dn.setElement(r)}}]),e}(qe.Component);se.propTypes={isOpen:c.default.bool.isRequired,style:c.default.shape({content:c.default.object,overlay:c.default.object}),portalClassName:c.default.string,bodyOpenClassName:c.default.string,htmlOpenClassName:c.default.string,className:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),overlayClassName:c.default.oneOfType([c.default.string,c.default.shape({base:c.default.string.isRequired,afterOpen:c.default.string.isRequired,beforeClose:c.default.string.isRequired})]),appElement:c.default.oneOfType([c.default.instanceOf(Te.default),c.default.instanceOf($.SafeHTMLCollection),c.default.instanceOf($.SafeNodeList),c.default.arrayOf(c.default.instanceOf(Te.default))]),onAfterOpen:c.default.func,onRequestClose:c.default.func,closeTimeoutMS:c.default.number,ariaHideApp:c.default.bool,shouldFocusAfterRender:c.default.bool,shouldCloseOnOverlayClick:c.default.bool,shouldReturnFocusAfterClose:c.default.bool,preventScroll:c.default.bool,parentSelector:c.default.func,aria:c.default.object,data:c.default.object,role:c.default.string,contentLabel:c.default.string,shouldCloseOnEsc:c.default.bool,overlayRef:c.default.func,contentRef:c.default.func,id:c.default.string,overlayElement:c.default.func,contentElement:c.default.func};se.defaultProps={isOpen:!1,portalClassName:yn,bodyOpenClassName:gn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return fe.default.createElement("div",e,o)},contentElement:function(e,o){return fe.default.createElement("div",e,o)}};se.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,pn.polyfill)(se);z.default=se;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=z,r=s(o);function s(u){return u&&u.__esModule?u:{default:u}}e.default=r.default,t.exports=e.default})(ve,ve.exports);var bn=ve.exports;const Be=Je(bn),xn={overlay:{backgroundColor:"rgba(18, 20, 23, 0.5)"},content:{width:"541px",maxHeight:"752px",margin:"auto",padding:"40px",border:"none",borderRadius:"14px"}};Be.setAppElement("#root");const On=({modalIsOpen:t,closeModal:e,children:o})=>i.jsx(Be,{isOpen:t,onRequestClose:e,style:xn,children:o}),wn=y.div`
  position: relative;
  height: 248px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`,_n=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Cn=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,En=y.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,Sn=y.span`
  color: #3470ff;
`,Mn=y.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`,Tn=y.ul`
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
`,Rn=y.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,Pn=y.h4`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,Nn=y.ul`
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
`,An=y.h4`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`,Dn=y.a`
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
`,jn=y.button`
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
`,Fn=y.ul`
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
`,kn=({modalIsOpen:t,closeModal:e,data:o})=>{const{id:r,img:s,photoLink:u,make:v,model:a,year:x,rentalPrice:h,address:g,type:p,accessories:m,functionalities:b,fuelConsumption:w,engineSize:T,description:F,rentalConditions:k,mileage:Q}=o,K=g.split(", "),W=K[1],U=K[2],X=k.split(`
`),ie=Q.toString().replace(/^(\d)(\d+)/,"$1,$2");let Z=h.slice(1)+h[0];return i.jsxs(On,{modalIsOpen:t,closeModal:e,children:[i.jsx(wn,{children:i.jsx(_n,{src:s||u,alt:`${v}, ${a}`})}),i.jsxs(Cn,{children:[i.jsxs(En,{children:[v," ",i.jsx(Sn,{children:a}),", ",x]}),i.jsx(Mn,{children:h})]}),i.jsxs(Tn,{children:[i.jsx("li",{children:W}),i.jsx("li",{children:U}),i.jsxs("li",{children:["Id: ",r]}),i.jsxs("li",{children:["Year: ",x]}),i.jsxs("li",{children:["Type: ",p]}),i.jsxs("li",{children:["Fuel Consumption: ",w]}),i.jsxs("li",{children:["Engine Size: ",T]})]}),i.jsx(Rn,{children:F}),i.jsx(Pn,{children:"Accessories and functionalities:"}),i.jsxs(Nn,{children:[m.map((M,L)=>i.jsx("li",{children:M},L)),b.map((M,L)=>i.jsx("li",{children:M},L))]}),i.jsx(An,{children:"Rental Conditions:"}),i.jsxs(Fn,{children:[X.map((M,L)=>i.jsxs("li",{children:[L===0?`${M.split(":")[0]}:`:M.split(":")[0],i.jsx("span",{children:M.split(":").slice(1).join(":")})]},L)),i.jsxs("li",{children:["Mileage: ",i.jsx("span",{children:ie})]}),i.jsxs("li",{children:["Price: ",i.jsx("span",{children:Z})]})]}),i.jsx(Dn,{href:"tel:+380730000000",children:"Rental car"}),i.jsx(jn,{onClick:e,children:"✕"})]})},Ln=y.button`
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
`,Wn=({type:t,title:e,width:o,height:r,onClick:s})=>i.jsx(Ln,{type:t,$width:o,$height:r,onClick:s,children:e}),Un="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-heart'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.6667'%20d='M27.787%206.148c-1.327-1.328-3.161-2.149-5.187-2.149s-3.859%200.821-5.187%202.149l-1.413%201.413-1.413-1.415c-1.327-1.327-3.161-2.148-5.187-2.148-4.051%200-7.336%203.284-7.336%207.336%200%202.026%200.821%203.86%202.149%205.188l11.787%2011.785%2011.787-11.787c1.327-1.328%202.148-3.161%202.148-5.187s-0.821-3.859-2.148-5.187l0%200z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",$n=t=>t.adverts.adverts,In=t=>t.filter,Hn=t=>t.favorites,Gn=Qe([$n,In],(t,e)=>{const{brand:o,price:r,mileageFrom:s,mileageTo:u}=e;return t.filter(v=>!(o&&v.make.toLowerCase()!==o.toLowerCase()||r&&parseFloat(v.rentalPrice.slice(1))!==parseFloat(r)||s&&v.mileage<parseInt(s)||u&&v.mileage>parseInt(u)))}),qn=({advert:t})=>{const e=Xe(),{id:o,img:r,photoLink:s,make:u,model:v,year:a,rentalPrice:x,address:h,rentalCompany:g,type:p,accessories:m}=t,{isModalOpen:b,openModal:w,closeModal:T}=et(),F=h.split(", "),k=F[1],Q=F[2],W=document.createElement("canvas").getContext("2d");W.font="16px Manrope";const U=`${u} ${v}`,X=W.measureText(U).width,Z=Ze(Hn).some(P=>P.id===t.id),[M,L]=ne.useState(Z);ne.useEffect(()=>{const P=localStorage.getItem("favorites");P&&e(_e(JSON.parse(P)))},[e]);const he=()=>{L(P=>!P),e(_e(t))};return i.jsxs("div",{children:[i.jsxs(tt,{children:[i.jsx(nt,{src:r||s,alt:`${u}, ${v}`}),i.jsx(ot,{$clicked:M,onClick:he,children:i.jsx("use",{href:Un+"#icon-heart"})})]}),i.jsxs(rt,{children:[i.jsx(at,{children:X>185?`${u}, ${a}`:i.jsxs(i.Fragment,{children:[u," ",i.jsx(st,{children:v}),", ",a]})}),i.jsx(it,{children:x})]}),i.jsxs(lt,{children:[i.jsx("span",{children:k}),i.jsx("span",{children:Q}),i.jsx("span",{children:g}),i.jsx("span",{children:p}),i.jsx("span",{children:u}),i.jsx("span",{children:o}),i.jsx("span",{children:m[2]})]}),i.jsx(Wn,{type:"button",title:"Learn more",width:"100%",height:"44px",onClick:w}),i.jsx(kn,{data:t,modalIsOpen:b,closeModal:T})]})},Bn=y.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`,zn=y.li`
  width: calc((100% - 29px * 3) / 4);
`,Yn=({visibleadverts:t})=>i.jsx(Bn,{children:t.map(e=>i.jsx(zn,{children:i.jsx(qn,{advert:e})},e.id))}),Vn=y.div`
  margin-left: auto;
  margin-right: auto;
  width: 1184px;
`,Jn=y.div`
  /* position: fixed; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 100%;
  margin-bottom: 50px;
  background-color: #3470ff;
`;export{Wn as B,Vn as G,Jn as H,Gn as a,In as b,Yn as c,Hn as d,$n as s};
