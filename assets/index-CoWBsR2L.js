(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Rh={exports:{}},ko={};var l_;function gy(){if(l_)return ko;l_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var u_;function _y(){return u_||(u_=1,Rh.exports=gy()),Rh.exports}var pe=_y(),Ch={exports:{}},re={};var c_;function vy(){if(c_)return re;c_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(B){return B===null||typeof B!="object"?null:(B=x&&B[x]||B["@@iterator"],typeof B=="function"?B:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(B,it,gt){this.props=B,this.context=it,this.refs=y,this.updater=gt||b}v.prototype.isReactComponent={},v.prototype.setState=function(B,it){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,it,"setState")},v.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function L(){}L.prototype=v.prototype;function D(B,it,gt){this.props=B,this.context=it,this.refs=y,this.updater=gt||b}var U=D.prototype=new L;U.constructor=D,T(U,v.prototype),U.isPureReactComponent=!0;var N=Array.isArray;function z(){}var O={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function C(B,it,gt){var Tt=gt.ref;return{$$typeof:o,type:B,key:it,ref:Tt!==void 0?Tt:null,props:gt}}function w(B,it){return C(B.type,it,B.props)}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function nt(B){var it={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(gt){return it[gt]})}var st=/\/+/g;function dt(B,it){return typeof B=="object"&&B!==null&&B.key!=null?nt(""+B.key):it.toString(36)}function ct(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(z,z):(B.status="pending",B.then(function(it){B.status==="pending"&&(B.status="fulfilled",B.value=it)},function(it){B.status==="pending"&&(B.status="rejected",B.reason=it)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function F(B,it,gt,Tt,Ft){var et=typeof B;(et==="undefined"||et==="boolean")&&(B=null);var ut=!1;if(B===null)ut=!0;else switch(et){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(B.$$typeof){case o:case t:ut=!0;break;case _:return ut=B._init,F(ut(B._payload),it,gt,Tt,Ft)}}if(ut)return Ft=Ft(B),ut=Tt===""?"."+dt(B,0):Tt,N(Ft)?(gt="",ut!=null&&(gt=ut.replace(st,"$&/")+"/"),F(Ft,it,gt,"",function(It){return It})):Ft!=null&&(G(Ft)&&(Ft=w(Ft,gt+(Ft.key==null||B&&B.key===Ft.key?"":(""+Ft.key).replace(st,"$&/")+"/")+ut)),it.push(Ft)),1;ut=0;var wt=Tt===""?".":Tt+":";if(N(B))for(var Gt=0;Gt<B.length;Gt++)Tt=B[Gt],et=wt+dt(Tt,Gt),ut+=F(Tt,it,gt,et,Ft);else if(Gt=M(B),typeof Gt=="function")for(B=Gt.call(B),Gt=0;!(Tt=B.next()).done;)Tt=Tt.value,et=wt+dt(Tt,Gt++),ut+=F(Tt,it,gt,et,Ft);else if(et==="object"){if(typeof B.then=="function")return F(ct(B),it,gt,Tt,Ft);throw it=String(B),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ut}function H(B,it,gt){if(B==null)return B;var Tt=[],Ft=0;return F(B,Tt,"","",function(et){return it.call(gt,et,Ft++)}),Tt}function at(B){if(B._status===-1){var it=B._result;it=it(),it.then(function(gt){(B._status===0||B._status===-1)&&(B._status=1,B._result=gt)},function(gt){(B._status===0||B._status===-1)&&(B._status=2,B._result=gt)}),B._status===-1&&(B._status=0,B._result=it)}if(B._status===1)return B._result.default;throw B._result}var yt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},xt={map:H,forEach:function(B,it,gt){H(B,function(){it.apply(this,arguments)},gt)},count:function(B){var it=0;return H(B,function(){it++}),it},toArray:function(B){return H(B,function(it){return it})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return re.Activity=g,re.Children=xt,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=D,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,re.__COMPILER_RUNTIME={__proto__:null,c:function(B){return O.H.useMemoCache(B)}},re.cache=function(B){return function(){return B.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(B,it,gt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Tt=T({},B.props),Ft=B.key;if(it!=null)for(et in it.key!==void 0&&(Ft=""+it.key),it)!q.call(it,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&it.ref===void 0||(Tt[et]=it[et]);var et=arguments.length-2;if(et===1)Tt.children=gt;else if(1<et){for(var ut=Array(et),wt=0;wt<et;wt++)ut[wt]=arguments[wt+2];Tt.children=ut}return C(B.type,Ft,Tt)},re.createContext=function(B){return B={$$typeof:h,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:u,_context:B},B},re.createElement=function(B,it,gt){var Tt,Ft={},et=null;if(it!=null)for(Tt in it.key!==void 0&&(et=""+it.key),it)q.call(it,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Ft[Tt]=it[Tt]);var ut=arguments.length-2;if(ut===1)Ft.children=gt;else if(1<ut){for(var wt=Array(ut),Gt=0;Gt<ut;Gt++)wt[Gt]=arguments[Gt+2];Ft.children=wt}if(B&&B.defaultProps)for(Tt in ut=B.defaultProps,ut)Ft[Tt]===void 0&&(Ft[Tt]=ut[Tt]);return C(B,et,Ft)},re.createRef=function(){return{current:null}},re.forwardRef=function(B){return{$$typeof:d,render:B}},re.isValidElement=G,re.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:at}},re.memo=function(B,it){return{$$typeof:p,type:B,compare:it===void 0?null:it}},re.startTransition=function(B){var it=O.T,gt={};O.T=gt;try{var Tt=B(),Ft=O.S;Ft!==null&&Ft(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(z,yt)}catch(et){yt(et)}finally{it!==null&&gt.types!==null&&(it.types=gt.types),O.T=it}},re.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},re.use=function(B){return O.H.use(B)},re.useActionState=function(B,it,gt){return O.H.useActionState(B,it,gt)},re.useCallback=function(B,it){return O.H.useCallback(B,it)},re.useContext=function(B){return O.H.useContext(B)},re.useDebugValue=function(){},re.useDeferredValue=function(B,it){return O.H.useDeferredValue(B,it)},re.useEffect=function(B,it){return O.H.useEffect(B,it)},re.useEffectEvent=function(B){return O.H.useEffectEvent(B)},re.useId=function(){return O.H.useId()},re.useImperativeHandle=function(B,it,gt){return O.H.useImperativeHandle(B,it,gt)},re.useInsertionEffect=function(B,it){return O.H.useInsertionEffect(B,it)},re.useLayoutEffect=function(B,it){return O.H.useLayoutEffect(B,it)},re.useMemo=function(B,it){return O.H.useMemo(B,it)},re.useOptimistic=function(B,it){return O.H.useOptimistic(B,it)},re.useReducer=function(B,it,gt){return O.H.useReducer(B,it,gt)},re.useRef=function(B){return O.H.useRef(B)},re.useState=function(B){return O.H.useState(B)},re.useSyncExternalStore=function(B,it,gt){return O.H.useSyncExternalStore(B,it,gt)},re.useTransition=function(){return O.H.useTransition()},re.version="19.2.3",re}var f_;function hp(){return f_||(f_=1,Ch.exports=vy()),Ch.exports}var Jt=hp(),wh={exports:{}},Wo={},Dh={exports:{}},Uh={};var h_;function xy(){return h_||(h_=1,(function(o){function t(F,H){var at=F.length;F.push(H);t:for(;0<at;){var yt=at-1>>>1,xt=F[yt];if(0<l(xt,H))F[yt]=H,F[at]=xt,at=yt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var H=F[0],at=F.pop();if(at!==H){F[0]=at;t:for(var yt=0,xt=F.length,B=xt>>>1;yt<B;){var it=2*(yt+1)-1,gt=F[it],Tt=it+1,Ft=F[Tt];if(0>l(gt,at))Tt<xt&&0>l(Ft,gt)?(F[yt]=Ft,F[Tt]=at,yt=Tt):(F[yt]=gt,F[it]=at,yt=it);else if(Tt<xt&&0>l(Ft,at))F[yt]=Ft,F[Tt]=at,yt=Tt;else break t}}return H}function l(F,H){var at=F.sortIndex-H.sortIndex;return at!==0?at:F.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,x=3,M=!1,b=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=F)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function N(F){if(T=!1,U(F),!b)if(i(m)!==null)b=!0,z||(z=!0,nt());else{var H=i(p);H!==null&&ct(N,H.startTime-F)}}var z=!1,O=-1,q=5,C=-1;function w(){return y?!0:!(o.unstable_now()-C<q)}function G(){if(y=!1,z){var F=o.unstable_now();C=F;var H=!0;try{t:{b=!1,T&&(T=!1,L(O),O=-1),M=!0;var at=x;try{e:{for(U(F),g=i(m);g!==null&&!(g.expirationTime>F&&w());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,x=g.priorityLevel;var xt=yt(g.expirationTime<=F);if(F=o.unstable_now(),typeof xt=="function"){g.callback=xt,U(F),H=!0;break e}g===i(m)&&s(m),U(F)}else s(m);g=i(m)}if(g!==null)H=!0;else{var B=i(p);B!==null&&ct(N,B.startTime-F),H=!1}}break t}finally{g=null,x=at,M=!1}H=void 0}}finally{H?nt():z=!1}}}var nt;if(typeof D=="function")nt=function(){D(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,dt=st.port2;st.port1.onmessage=G,nt=function(){dt.postMessage(null)}}else nt=function(){v(G,0)};function ct(F,H){O=v(function(){F(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(F){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var at=x;x=H;try{return F()}finally{x=at}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var at=x;x=F;try{return H()}finally{x=at}},o.unstable_scheduleCallback=function(F,H,at){var yt=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?yt+at:yt):at=yt,F){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=at+xt,F={id:_++,callback:H,priorityLevel:F,startTime:at,expirationTime:xt,sortIndex:-1},at>yt?(F.sortIndex=at,t(p,F),i(m)===null&&F===i(p)&&(T?(L(O),O=-1):T=!0,ct(N,at-yt))):(F.sortIndex=xt,t(m,F),b||M||(b=!0,z||(z=!0,nt()))),F},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(F){var H=x;return function(){var at=x;x=H;try{return F.apply(this,arguments)}finally{x=at}}}})(Uh)),Uh}var d_;function Sy(){return d_||(d_=1,Dh.exports=xy()),Dh.exports}var Lh={exports:{}},On={};var p_;function yy(){if(p_)return On;p_=1;var o=hp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},On.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.3",On}var m_;function My(){if(m_)return Lh.exports;m_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Lh.exports=yy(),Lh.exports}var g_;function Ey(){if(g_)return Wo;g_=1;var o=Sy(),t=hp(),i=My();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,r=f;break}if(A===r){S=!0,r=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,r=c;break}if(A===r){S=!0,r=f,a=c;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ct=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function B(e){return{current:e}}function it(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function gt(e,n){xt++,yt[xt]=e.current,e.current=n}var Tt=B(null),Ft=B(null),et=B(null),ut=B(null);function wt(e,n){switch(gt(et,n),gt(Ft,e),gt(Tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?U0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=U0(n),e=L0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Tt),gt(Tt,e)}function Gt(){it(Tt),it(Ft),it(et)}function It(e){e.memoizedState!==null&&gt(ut,e);var n=Tt.current,a=L0(n,e.type);n!==a&&(gt(Ft,e),gt(Tt,a))}function me(e){Ft.current===e&&(it(Tt),it(Ft)),ut.current===e&&(it(ut),Ho._currentValue=at)}var tn,Se;function ge(e){if(tn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);tn=n&&n[1]||"",Se=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+e+Se}var Ue=!1;function oe(e,n){if(!e||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){tt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var I=S.split(`
`),J=A.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===J.length)for(r=I.length-1,c=J.length-1;1<=r&&0<=c&&I[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==J[c]){var ft=`
`+I[r].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=r&&0<=c);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ge(a):""}function en(e,n){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return e.child!==n&&n!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return ge("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=en(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Qe=Object.prototype.hasOwnProperty,Te=o.unstable_scheduleCallback,Pe=o.unstable_cancelCallback,qt=o.unstable_shouldYield,P=o.unstable_requestPaint,E=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Xt=o.log,ne=o.unstable_setDisableYieldValue,Mt=null,Et=null;function zt(e){if(typeof Xt=="function"&&ne(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:k,Ct=Math.log,ce=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Ct(e)/ce|0)|0}var Ut=256,bt=262144,Pt=4194304;function St(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?c=St(r):(S&=A,S!==0?c=St(S):a||(a=A&~e,a!==0&&(c=St(a))))):(A=r&~f,A!==0?c=St(A):S!==0?c=St(S):a||(a=r&~e,a!==0&&(c=St(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ti(e,n,a,r,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-Ot(a),mt=1<<ft;A[ft]=0,I[ft]=-1;var tt=J[ft];if(tt!==null)for(J[ft]=null,ft=0;ft<tt.length;ft++){var ot=tt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}r!==0&&gl(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function gl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Qr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ot(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Hs(e,n){var a=n&-n;return a=(a&42)!==0?1:Jr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Jr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $r(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:e_(e.type))}function Fi(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var fi=Math.random().toString(36).slice(2),un="__reactFiber$"+fi,Mn="__reactProps$"+fi,Ai="__reactContainer$"+fi,Gs="__reactEvents$"+fi,Xs="__reactListeners$"+fi,_l="__reactHandles$"+fi,to="__reactResources$"+fi,ls="__reactMarker$"+fi;function eo(e){delete e[un],delete e[Mn],delete e[Gs],delete e[Xs],delete e[_l]}function Aa(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ai]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=I0(e);e!==null;){if(a=e[un])return a;e=I0(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[un]||e[Ai]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ca(e){var n=e[to];return n||(n=e[to]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[ls]=!0}var Y=new Set,rt={};function $(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(rt[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Lt={};function Ht(e){return Qe.call(Lt,e)?!0:Qe.call(Bt,e)?!1:Dt.test(e)?Lt[e]=!0:(Bt[e]=!0,!1)}function kt(e,n,a){if(Ht(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Qt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=Le(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function ze(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Le(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function se(e){return e.replace(Ne,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(e,n,a,r,c,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,$t(n)):a!=null?bn(e,S,$t(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+$t(A):e.removeAttribute("name")}function Ji(e,n,a,r,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ye(e)}function bn(e,n,a){n==="number"&&Zt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hi(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function Tn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ct(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ye(e)}function mn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ks(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Rn(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Rn(e,f,n[f])}function Ri(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(e){return dx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $i(){}var Ec=null;function bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,qs=null;function Dp(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[Mn]||null;if(!c)throw Error(s(90));En(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&ze(r)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hi(e,!!a.multiple,n,!1)}}}var Tc=!1;function Up(e,n,a){if(Tc)return e(n,a);Tc=!0;try{var r=e(n);return r}finally{if(Tc=!1,(Ws!==null||qs!==null)&&(su(),Ws&&(n=Ws,e=qs,qs=Ws=null,Dp(n),e)))for(n=0;n<e.length;n++)Dp(e[n])}}function no(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Mn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=!1;if(ta)try{var io={};Object.defineProperty(io,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Ac=!1}var wa=null,Rc=null,xl=null;function Lp(){if(xl)return xl;var e,n=Rc,a=n.length,r,c="value"in wa?wa.value:wa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(r=1;r<=S&&n[a-r]===c[f-r];r++);return xl=c.slice(e,1<r?1-r:void 0)}function Sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Np(){return!1}function kn(e){function n(a,r,c,f,S){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?yl:Np,this.isPropagationStopped=Np,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=kn(cs),ao=g({},cs,{view:0,detail:0}),px=kn(ao),Cc,wc,so,El=g({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Cc=e.screenX-so.screenX,wc=e.screenY-so.screenY):wc=Cc=0,so=e),Cc)},movementY:function(e){return"movementY"in e?e.movementY:wc}}),Op=kn(El),mx=g({},El,{dataTransfer:0}),gx=kn(mx),_x=g({},ao,{relatedTarget:0}),Dc=kn(_x),vx=g({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),xx=kn(vx),Sx=g({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yx=kn(Sx),Mx=g({},cs,{data:0}),Pp=kn(Mx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ax(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Tx[e])?!!n[e]:!1}function Uc(){return Ax}var Rx=g({},ao,{key:function(e){if(e.key){var n=Ex[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cx=kn(Rx),wx=g({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=kn(wx),Dx=g({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),Ux=kn(Dx),Lx=g({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nx=kn(Lx),Ox=g({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=kn(Ox),zx=g({},cs,{newState:0,oldState:0}),Bx=kn(zx),Fx=[9,13,27,32],Lc=ta&&"CompositionEvent"in window,ro=null;ta&&"documentMode"in document&&(ro=document.documentMode);var Ix=ta&&"TextEvent"in window&&!ro,Bp=ta&&(!Lc||ro&&8<ro&&11>=ro),Fp=" ",Ip=!1;function Hp(e,n){switch(e){case"keyup":return Fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Hx(e,n){switch(e){case"compositionend":return Vp(n);case"keypress":return n.which!==32?null:(Ip=!0,Fp);case"textInput":return e=n.data,e===Fp&&Ip?null:e;default:return null}}function Vx(e,n){if(Ys)return e==="compositionend"||!Lc&&Hp(e,n)?(e=Lp(),xl=Rc=wa=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bp&&n.locale!=="ko"?null:n.data;default:return null}}var Gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gx[e.type]:n==="textarea"}function Xp(e,n,a,r){Ws?qs?qs.push(r):qs=[r]:Ws=r,n=hu(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var oo=null,lo=null;function Xx(e){T0(e,0)}function bl(e){var n=us(e);if(ze(n))return e}function kp(e,n){if(e==="change")return n}var Wp=!1;if(ta){var Nc;if(ta){var Oc="oninput"in document;if(!Oc){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),Oc=typeof qp.oninput=="function"}Nc=Oc}else Nc=!1;Wp=Nc&&(!document.documentMode||9<document.documentMode)}function Yp(){oo&&(oo.detachEvent("onpropertychange",jp),lo=oo=null)}function jp(e){if(e.propertyName==="value"&&bl(lo)){var n=[];Xp(n,lo,e,bc(e)),Up(Xx,n)}}function kx(e,n,a){e==="focusin"?(Yp(),oo=n,lo=a,oo.attachEvent("onpropertychange",jp)):e==="focusout"&&Yp()}function Wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(lo)}function qx(e,n){if(e==="click")return bl(n)}function Yx(e,n){if(e==="input"||e==="change")return bl(n)}function jx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:jx;function uo(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Qe.call(n,c)||!Jn(e[c],n[c]))return!1}return!0}function Zp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kp(e,n){var a=Zp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Zp(a)}}function Qp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zt(e.document)}return n}function Pc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Zx=ta&&"documentMode"in document&&11>=document.documentMode,js=null,zc=null,co=null,Bc=!1;function $p(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||js==null||js!==Zt(r)||(r=js,"selectionStart"in r&&Pc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),co&&uo(co,r)||(co=r,r=hu(zc,"onSelect"),0<r.length&&(n=new Ml("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=js)))}function fs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zs={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Fc={},tm={};ta&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function hs(e){if(Fc[e])return Fc[e];if(!Zs[e])return e;var n=Zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in tm)return Fc[e]=n[a];return e}var em=hs("animationend"),nm=hs("animationiteration"),im=hs("animationstart"),Kx=hs("transitionrun"),Qx=hs("transitionstart"),Jx=hs("transitioncancel"),am=hs("transitionend"),sm=new Map,Ic="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ic.push("scrollEnd");function Ci(e,n){sm.set(e,n),$(n,[e])}var Tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],Ks=0,Hc=0;function Al(){for(var e=Ks,n=Hc=Ks=0;n<e;){var a=di[n];di[n++]=null;var r=di[n];di[n++]=null;var c=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,r!==null&&c!==null){var S=r.pending;S===null?c.next=c:(c.next=S.next,S.next=c),r.pending=c}f!==0&&rm(a,c,f)}}function Rl(e,n,a,r){di[Ks++]=e,di[Ks++]=n,di[Ks++]=a,di[Ks++]=r,Hc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Vc(e,n,a,r){return Rl(e,n,a,r),Cl(e)}function ds(e,n){return Rl(e,null,null,n),Cl(e)}function rm(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Cl(e){if(50<No)throw No=0,Qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function $x(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,r){return new $x(e,n,a,r)}function Gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function om(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function wl(e,n,a,r,c,f){var S=0;if(r=e,typeof e=="function")Gc(e)&&(S=1);else if(typeof e=="string")S=ay(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=$n(31,a,n,c),e.elementType=C,e.lanes=f,e;case T:return ps(a.children,c,f,n);case y:S=8,c|=24;break;case v:return e=$n(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case N:return e=$n(13,a,n,c),e.elementType=N,e.lanes=f,e;case z:return e=$n(19,a,n,c),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case L:S=9;break t;case U:S=11;break t;case O:S=14;break t;case q:S=16,r=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=$n(S,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ps(e,n,a,r){return e=$n(7,e,r,n),e.lanes=a,e}function Xc(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function lm(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function kc(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var um=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=um.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},um.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Js=[],$s=0,Dl=null,fo=0,mi=[],gi=0,Da=null,Ii=1,Hi="";function na(e,n){Js[$s++]=fo,Js[$s++]=Dl,Dl=e,fo=n}function cm(e,n,a){mi[gi++]=Ii,mi[gi++]=Hi,mi[gi++]=Da,Da=e;var r=Ii;e=Hi;var c=32-Ot(r)-1;r&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var S=c-c%5;f=(r&(1<<S)-1).toString(32),r>>=S,c-=S,Ii=1<<32-Ot(n)+c|a<<c|r,Hi=f+e}else Ii=1<<f|a<<c|r,Hi=e}function Wc(e){e.return!==null&&(na(e,1),cm(e,1,0))}function qc(e){for(;e===Dl;)Dl=Js[--$s],Js[$s]=null,fo=Js[--$s],Js[$s]=null;for(;e===Da;)Da=mi[--gi],mi[gi]=null,Hi=mi[--gi],mi[gi]=null,Ii=mi[--gi],mi[gi]=null}function fm(e,n){mi[gi++]=Ii,mi[gi++]=Hi,mi[gi++]=Da,Ii=n.id,Hi=n.overflow,Da=e}var Cn=null,je=null,Ee=!1,Ua=null,_i=!1,Yc=Error(s(519));function La(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(pi(n,e)),Yc}function hm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[un]=e,n[Mn]=r,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)ve(Po[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Ji(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Tn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||w0(n.textContent,a)?(r.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),r.onScroll!=null&&ve("scroll",n),r.onScrollEnd!=null&&ve("scrollend",n),r.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||La(e,!0)}function dm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Cn=Cn.return}}function tr(e){if(e!==Cn)return!1;if(!Ee)return dm(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hh(e.type,e.memoizedProps)),a=!a),a&&je&&La(e),dm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=F0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=F0(e)}else n===27?(n=je,qa(e.type)?(e=_h,_h=null,je=e):je=n):je=Cn?xi(e.stateNode.nextSibling):null;return!0}function ms(){je=Cn=null,Ee=!1}function jc(){var e=Ua;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Ua=null),e}function ho(e){Ua===null?Ua=[e]:Ua.push(e)}var Zc=B(null),gs=null,ia=null;function Na(e,n,a){gt(Zc,n._currentValue),n._currentValue=a}function aa(e){e._currentValue=Zc.current,it(Zc)}function Kc(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Qc(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Kc(f.return,a,e),r||(S=null);break t}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Kc(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function er(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=c.type;Jn(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===ut.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}c=c.return}e!==null&&Qc(n,e,a,r),n.flags|=262144}function Ul(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){gs=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return pm(gs,e)}function Ll(e,n){return gs===null&&_s(e),pm(e,n)}function pm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(e===null)throw Error(s(308));ia=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ia=ia.next=n;return a}var tS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},eS=o.unstable_scheduleCallback,nS=o.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new tS,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&eS(nS,function(){e.controller.abort()})}var mo=null,$c=0,nr=0,ir=null;function iS(e,n){if(mo===null){var a=mo=[];$c=0,nr=ih(),ir={status:"pending",value:void 0,then:function(r){a.push(r)}}}return $c++,n.then(mm,mm),n}function mm(){if(--$c===0&&mo!==null){ir!==null&&(ir.status="fulfilled");var e=mo;mo=null,nr=0,ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function aS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var gm=F.S;F.S=function(e,n){$g=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&iS(e,n),gm!==null&&gm(e,n)};var vs=B(null);function tf(){var e=vs.current;return e!==null?e:qe.pooledCache}function Nl(e,n){n===null?gt(vs,vs.current):gt(vs,n.pool)}function _m(){var e=tf();return e===null?null:{parent:cn._currentValue,pool:e}}var ar=Error(s(460)),ef=Error(s(474)),Ol=Error(s(542)),Pl={then:function(){}};function vm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ym(e),e;default:if(typeof n.status=="string")n.then($i,$i);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ym(e),e}throw Ss=n,ar}}function xs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,ar):a}}var Ss=null;function Sm(){if(Ss===null)throw Error(s(459));var e=Ss;return Ss=null,e}function ym(e){if(e===ar||e===Ol)throw Error(s(483))}var sr=null,go=0;function zl(e){var n=go;return go+=1,sr===null&&(sr=[]),xm(sr,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Bl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Mm(e){function n(Z,X){if(e){var Q=Z.deletions;Q===null?(Z.deletions=[X],Z.flags|=16):Q.push(X)}}function a(Z,X){if(!e)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function r(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function c(Z,X){return Z=ea(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,Q){return Z.index=Q,e?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<X?(Z.flags|=67108866,X):Q):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,Q,pt){return X===null||X.tag!==6?(X=Xc(Q,Z.mode,pt),X.return=Z,X):(X=c(X,Q),X.return=Z,X)}function I(Z,X,Q,pt){var Kt=Q.type;return Kt===T?ft(Z,X,Q.props.children,pt,Q.key):X!==null&&(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===q&&xs(Kt)===X.type)?(X=c(X,Q.props),_o(X,Q),X.return=Z,X):(X=wl(Q.type,Q.key,Q.props,null,Z.mode,pt),_o(X,Q),X.return=Z,X)}function J(Z,X,Q,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=kc(Q,Z.mode,pt),X.return=Z,X):(X=c(X,Q.children||[]),X.return=Z,X)}function ft(Z,X,Q,pt,Kt){return X===null||X.tag!==7?(X=ps(Q,Z.mode,pt,Kt),X.return=Z,X):(X=c(X,Q),X.return=Z,X)}function mt(Z,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Xc(""+X,Z.mode,Q),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return Q=wl(X.type,X.key,X.props,null,Z.mode,Q),_o(Q,X),Q.return=Z,Q;case b:return X=kc(X,Z.mode,Q),X.return=Z,X;case q:return X=xs(X),mt(Z,X,Q)}if(ct(X)||nt(X))return X=ps(X,Z.mode,Q,null),X.return=Z,X;if(typeof X.then=="function")return mt(Z,zl(X),Q);if(X.$$typeof===D)return mt(Z,Ll(Z,X),Q);Bl(Z,X)}return null}function tt(Z,X,Q,pt){var Kt=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Kt!==null?null:A(Z,X,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Kt?I(Z,X,Q,pt):null;case b:return Q.key===Kt?J(Z,X,Q,pt):null;case q:return Q=xs(Q),tt(Z,X,Q,pt)}if(ct(Q)||nt(Q))return Kt!==null?null:ft(Z,X,Q,pt,null);if(typeof Q.then=="function")return tt(Z,X,zl(Q),pt);if(Q.$$typeof===D)return tt(Z,X,Ll(Z,Q),pt);Bl(Z,Q)}return null}function ot(Z,X,Q,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(Q)||null,A(X,Z,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return Z=Z.get(pt.key===null?Q:pt.key)||null,I(X,Z,pt,Kt);case b:return Z=Z.get(pt.key===null?Q:pt.key)||null,J(X,Z,pt,Kt);case q:return pt=xs(pt),ot(Z,X,Q,pt,Kt)}if(ct(pt)||nt(pt))return Z=Z.get(Q)||null,ft(X,Z,pt,Kt,null);if(typeof pt.then=="function")return ot(Z,X,Q,zl(pt),Kt);if(pt.$$typeof===D)return ot(Z,X,Q,Ll(X,pt),Kt);Bl(X,pt)}return null}function Vt(Z,X,Q,pt){for(var Kt=null,we=null,Yt=X,fe=X=0,Me=null;Yt!==null&&fe<Q.length;fe++){Yt.index>fe?(Me=Yt,Yt=null):Me=Yt.sibling;var De=tt(Z,Yt,Q[fe],pt);if(De===null){Yt===null&&(Yt=Me);break}e&&Yt&&De.alternate===null&&n(Z,Yt),X=f(De,X,fe),we===null?Kt=De:we.sibling=De,we=De,Yt=Me}if(fe===Q.length)return a(Z,Yt),Ee&&na(Z,fe),Kt;if(Yt===null){for(;fe<Q.length;fe++)Yt=mt(Z,Q[fe],pt),Yt!==null&&(X=f(Yt,X,fe),we===null?Kt=Yt:we.sibling=Yt,we=Yt);return Ee&&na(Z,fe),Kt}for(Yt=r(Yt);fe<Q.length;fe++)Me=ot(Yt,Z,fe,Q[fe],pt),Me!==null&&(e&&Me.alternate!==null&&Yt.delete(Me.key===null?fe:Me.key),X=f(Me,X,fe),we===null?Kt=Me:we.sibling=Me,we=Me);return e&&Yt.forEach(function(Qa){return n(Z,Qa)}),Ee&&na(Z,fe),Kt}function te(Z,X,Q,pt){if(Q==null)throw Error(s(151));for(var Kt=null,we=null,Yt=X,fe=X=0,Me=null,De=Q.next();Yt!==null&&!De.done;fe++,De=Q.next()){Yt.index>fe?(Me=Yt,Yt=null):Me=Yt.sibling;var Qa=tt(Z,Yt,De.value,pt);if(Qa===null){Yt===null&&(Yt=Me);break}e&&Yt&&Qa.alternate===null&&n(Z,Yt),X=f(Qa,X,fe),we===null?Kt=Qa:we.sibling=Qa,we=Qa,Yt=Me}if(De.done)return a(Z,Yt),Ee&&na(Z,fe),Kt;if(Yt===null){for(;!De.done;fe++,De=Q.next())De=mt(Z,De.value,pt),De!==null&&(X=f(De,X,fe),we===null?Kt=De:we.sibling=De,we=De);return Ee&&na(Z,fe),Kt}for(Yt=r(Yt);!De.done;fe++,De=Q.next())De=ot(Yt,Z,fe,De.value,pt),De!==null&&(e&&De.alternate!==null&&Yt.delete(De.key===null?fe:De.key),X=f(De,X,fe),we===null?Kt=De:we.sibling=De,we=De);return e&&Yt.forEach(function(my){return n(Z,my)}),Ee&&na(Z,fe),Kt}function ke(Z,X,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var Kt=Q.key;X!==null;){if(X.key===Kt){if(Kt=Q.type,Kt===T){if(X.tag===7){a(Z,X.sibling),pt=c(X,Q.props.children),pt.return=Z,Z=pt;break t}}else if(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===q&&xs(Kt)===X.type){a(Z,X.sibling),pt=c(X,Q.props),_o(pt,Q),pt.return=Z,Z=pt;break t}a(Z,X);break}else n(Z,X);X=X.sibling}Q.type===T?(pt=ps(Q.props.children,Z.mode,pt,Q.key),pt.return=Z,Z=pt):(pt=wl(Q.type,Q.key,Q.props,null,Z.mode,pt),_o(pt,Q),pt.return=Z,Z=pt)}return S(Z);case b:t:{for(Kt=Q.key;X!==null;){if(X.key===Kt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Z,X.sibling),pt=c(X,Q.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}pt=kc(Q,Z.mode,pt),pt.return=Z,Z=pt}return S(Z);case q:return Q=xs(Q),ke(Z,X,Q,pt)}if(ct(Q))return Vt(Z,X,Q,pt);if(nt(Q)){if(Kt=nt(Q),typeof Kt!="function")throw Error(s(150));return Q=Kt.call(Q),te(Z,X,Q,pt)}if(typeof Q.then=="function")return ke(Z,X,zl(Q),pt);if(Q.$$typeof===D)return ke(Z,X,Ll(Z,Q),pt);Bl(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Z,X.sibling),pt=c(X,Q),pt.return=Z,Z=pt):(a(Z,X),pt=Xc(Q,Z.mode,pt),pt.return=Z,Z=pt),S(Z)):a(Z,X)}return function(Z,X,Q,pt){try{go=0;var Kt=ke(Z,X,Q,pt);return sr=null,Kt}catch(Yt){if(Yt===ar||Yt===Ol)throw Yt;var we=$n(29,Yt,null,Z.mode);return we.lanes=pt,we.return=Z,we}}}var ys=Mm(!0),Em=Mm(!1),Oa=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Oe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Cl(e),rm(e,null,a),n}return Rl(e,r,n,a),Cl(e)}function vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Qr(e,a)}}function sf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var rf=!1;function xo(){if(rf){var e=ir;if(e!==null)throw e}}function So(e,n,a,r){rf=!1;var c=e.updateQueue;Oa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var I=A,J=I.next;I.next=null,S===null?f=J:S.next=J,S=I;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==S&&(A===null?ft.firstBaseUpdate=J:A.next=J,ft.lastBaseUpdate=I))}if(f!==null){var mt=c.baseState;S=0,ft=J=I=null,A=f;do{var tt=A.lane&-536870913,ot=tt!==A.lane;if(ot?(ye&tt)===tt:(r&tt)===tt){tt!==0&&tt===nr&&(rf=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Vt=e,te=A;tt=n;var ke=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){mt=Vt.call(ke,mt,tt);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,tt=typeof Vt=="function"?Vt.call(ke,mt,tt):Vt,tt==null)break t;mt=g({},mt,tt);break t;case 2:Oa=!0}}tt=A.callback,tt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(J=ft=ot,I=mt):ft=ft.next=ot,S|=tt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ft===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=J,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Va|=S,e.lanes=S,e.memoizedState=mt}}function bm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Tm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)bm(a[e],n)}var rr=B(null),Fl=B(0);function Am(e,n){e=da,gt(Fl,e),gt(rr,n),da=e|n.baseLanes}function of(){gt(Fl,da),gt(rr,rr.current)}function lf(){da=Fl.current,it(rr),it(Fl)}var ti=B(null),vi=null;function Ba(e){var n=e.alternate;gt(on,on.current&1),gt(ti,e),vi===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(vi=e)}function uf(e){gt(on,on.current),gt(ti,e),vi===null&&(vi=e)}function Rm(e){e.tag===22?(gt(on,on.current),gt(ti,e),vi===null&&(vi=e)):Fa()}function Fa(){gt(on,on.current),gt(ti,ti.current)}function ei(e){it(ti),vi===e&&(vi=null),it(on)}var on=B(0);function Il(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mh(a)||gh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,ue=null,Ge=null,fn=null,Hl=!1,or=!1,Ms=!1,Vl=0,yo=0,lr=null,sS=0;function nn(){throw Error(s(321))}function cf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function ff(e,n,a,r,c,f){return sa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?cg:Af,Ms=!1,f=a(r,c),Ms=!1,or&&(f=wm(n,a,r,c)),Cm(e),f}function Cm(e){F.H=bo;var n=Ge!==null&&Ge.next!==null;if(sa=0,fn=Ge=ue=null,Hl=!1,yo=0,lr=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&Ul(e)&&(hn=!0))}function wm(e,n,a,r){ue=e;var c=0;do{if(or&&(lr=null),yo=0,or=!1,25<=c)throw Error(s(301));if(c+=1,fn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=fg,f=n(a,r)}while(or);return f}function rS(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Mo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ue.flags|=1024),n}function hf(){var e=Vl!==0;return Vl=0,e}function df(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pf(e){if(Hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Hl=!1}sa=0,fn=Ge=ue=null,or=!1,yo=Vl=0,lr=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ue.memoizedState=fn=e:fn=fn.next=e,fn}function ln(){if(Ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=fn===null?ue.memoizedState:fn.next;if(n!==null)fn=n,Ge=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},fn===null?ue.memoizedState=fn=e:fn=fn.next=e}return fn}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var n=yo;return yo+=1,lr===null&&(lr=[]),e=xm(lr,e,n),n=ue,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?cg:Af),e}function Xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===D)return wn(e)}throw Error(s(438,String(e)))}function mf(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=w;return n.index++,a}function ra(e,n){return typeof n=="function"?n(e):n}function kl(e){var n=ln();return gf(n,Ge,e)}function gf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=S=null,I=null,J=n,ft=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(ye&mt)===mt:(sa&mt)===mt){var tt=J.revertLane;if(tt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===nr&&(ft=!0);else if((sa&tt)===tt){J=J.next,tt===nr&&(ft=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=mt,S=f):I=I.next=mt,ue.lanes|=tt,Va|=tt;mt=J.action,Ms&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else tt={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=tt,S=f):I=I.next=tt,ue.lanes|=mt,Va|=mt;J=J.next}while(J!==null&&J!==n);if(I===null?S=f:I.next=A,!Jn(f,e.memoizedState)&&(hn=!0,ft&&(a=ir,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function _f(e){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Jn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Dm(e,n,a){var r=ue,c=ln(),f=Ee;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Jn((Ge||c).memoizedState,a);if(S&&(c.memoizedState=a,hn=!0),c=c.queue,Sf(Nm.bind(null,r,c,e),[e]),c.getSnapshot!==n||S||fn!==null&&fn.memoizedState.tag&1){if(r.flags|=2048,ur(9,{destroy:void 0},Lm.bind(null,r,c,a,n),null),qe===null)throw Error(s(349));f||(sa&127)!==0||Um(r,n,a)}return a}function Um(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Gl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Lm(e,n,a,r){n.value=a,n.getSnapshot=r,Om(n)&&Pm(e)}function Nm(e,n,a){return a(function(){Om(n)&&Pm(e)})}function Om(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function Pm(e){var n=ds(e,2);n!==null&&Zn(n,e,2)}function vf(e){var n=Vn();if(typeof e=="function"){var a=e;if(e=a(),Ms){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},n}function zm(e,n,a,r){return e.baseState=a,gf(e,Ge,typeof r=="function"?r:ra)}function oS(e,n,a,r,c){if(Yl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};F.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Bm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Bm(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=F.T,S={};F.T=S;try{var A=a(c,r),I=F.S;I!==null&&I(S,A),Fm(e,n,A)}catch(J){xf(e,n,J)}finally{f!==null&&S.types!==null&&(f.types=S.types),F.T=f}}else try{f=a(c,r),Fm(e,n,f)}catch(J){xf(e,n,J)}}function Fm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Im(e,n,r)},function(r){return xf(e,n,r)}):Im(e,n,a)}function Im(e,n,a){n.status="fulfilled",n.value=a,Hm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Bm(e,a)))}function xf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Hm(n),n=n.next;while(n!==r)}e.action=null}function Hm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vm(e,n){return n}function Gm(e,n){if(Ee){var a=qe.formState;if(a!==null){t:{var r=ue;if(Ee){if(je){e:{for(var c=je,f=_i;c.nodeType!==8;){if(!f){c=null;break e}if(c=xi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=xi(c.nextSibling),r=c.data==="F!";break t}}La(r)}r=!1}r&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:n},a.queue=r,a=og.bind(null,ue,r),r.dispatch=a,r=vf(!1),f=Tf.bind(null,ue,!1,r.queue),r=Vn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=oS.bind(null,ue,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Xm(e){var n=ln();return km(n,Ge,e)}function km(e,n,a){if(n=gf(e,n,Vm)[0],e=kl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Mo(n)}catch(S){throw S===ar?Ol:S}else r=n;n=ln();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,ur(9,{destroy:void 0},lS.bind(null,c,a),null)),[r,f,e]}function lS(e,n){e.action=n}function Wm(e){var n=ln(),a=Ge;if(a!==null)return km(n,a,e);ln(),n=n.memoizedState,a=ln();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function ur(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Gl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function qm(){return ln().memoizedState}function Wl(e,n,a,r){var c=Vn();ue.flags|=e,c.memoizedState=ur(1|n,{destroy:void 0},a,r===void 0?null:r)}function ql(e,n,a,r){var c=ln();r=r===void 0?null:r;var f=c.memoizedState.inst;Ge!==null&&r!==null&&cf(r,Ge.memoizedState.deps)?c.memoizedState=ur(n,f,a,r):(ue.flags|=e,c.memoizedState=ur(1|n,f,a,r))}function Ym(e,n){Wl(8390656,8,e,n)}function Sf(e,n){ql(2048,8,e,n)}function uS(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=Gl(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function jm(e){var n=ln().memoizedState;return uS({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Zm(e,n){return ql(4,2,e,n)}function Km(e,n){return ql(4,4,e,n)}function Qm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Jm(e,n,a){a=a!=null?a.concat([e]):null,ql(4,4,Qm.bind(null,n,e),a)}function yf(){}function $m(e,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&cf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function tg(e,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&cf(n,r[1]))return r[0];if(r=e(),Ms){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r}function Mf(e,n,a){return a===void 0||(sa&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=e0(),ue.lanes|=e,Va|=e,a)}function eg(e,n,a,r){return Jn(a,n)?a:rr.current!==null?(e=Mf(e,a,r),Jn(e,n)||(hn=!0),e):(sa&42)===0||(sa&1073741824)!==0&&(ye&261930)===0?(hn=!0,e.memoizedState=a):(e=e0(),ue.lanes|=e,Va|=e,n)}function ng(e,n,a,r,c){var f=H.p;H.p=f!==0&&8>f?f:8;var S=F.T,A={};F.T=A,Tf(e,!1,n,a);try{var I=c(),J=F.S;if(J!==null&&J(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=aS(I,r);Eo(e,n,ft,ai(e))}else Eo(e,n,r,ai(e))}catch(mt){Eo(e,n,{then:function(){},status:"rejected",reason:mt},ai())}finally{H.p=f,S!==null&&A.types!==null&&(S.types=A.types),F.T=S}}function cS(){}function Ef(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=ig(e).queue;ng(e,c,n,at,a===null?cS:function(){return ag(e),a(r)})}function ig(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ag(e){var n=ig(e);n.next===null&&(n=e.alternate.memoizedState),Eo(e,n.next.queue,{},ai())}function bf(){return wn(Ho)}function sg(){return ln().memoizedState}function rg(){return ln().memoizedState}function fS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=Pa(a);var r=za(n,e,a);r!==null&&(Zn(r,n,a),vo(r,n,a)),n={cache:Jc()},e.payload=n;return}n=n.return}}function hS(e,n,a){var r=ai();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(e)?lg(n,a):(a=Vc(e,n,a,r),a!==null&&(Zn(a,e,r),ug(a,n,r)))}function og(e,n,a){var r=ai();Eo(e,n,a,r)}function Eo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(e))lg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,Jn(A,S))return Rl(e,n,c,0),qe===null&&Al(),!1}catch{}if(a=Vc(e,n,c,r),a!==null)return Zn(a,e,r),ug(a,n,r),!0}return!1}function Tf(e,n,a,r){if(r={lane:2,revertLane:ih(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Yl(e)){if(n)throw Error(s(479))}else n=Vc(e,a,r,2),n!==null&&Zn(n,e,2)}function Yl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function lg(e,n){or=Hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ug(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Qr(e,a)}}var bo={readContext:wn,use:Xl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};bo.useEffectEvent=nn;var cg={readContext:wn,use:Xl,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Ym,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Wl(4194308,4,Qm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Wl(4194308,4,e,n)},useInsertionEffect:function(e,n){Wl(4,2,e,n)},useMemo:function(e,n){var a=Vn();n=n===void 0?null:n;var r=e();if(Ms){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Vn();if(a!==void 0){var c=a(n);if(Ms){zt(!0);try{a(n)}finally{zt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=hS.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:function(e){e=vf(e);var n=e.queue,a=og.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:yf,useDeferredValue:function(e,n){var a=Vn();return Mf(a,e,n)},useTransition:function(){var e=vf(!1);return e=ng.bind(null,ue,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ue,c=Vn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(ye&127)!==0||Um(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Ym(Nm.bind(null,r,f,e),[e]),r.flags|=2048,ur(9,{destroy:void 0},Lm.bind(null,r,f,a,n),null),a},useId:function(){var e=Vn(),n=qe.identifierPrefix;if(Ee){var a=Hi,r=Ii;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:bf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e){var n=Vn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:mf,useCacheRefresh:function(){return Vn().memoizedState=fS.bind(null,ue)},useEffectEvent:function(e){var n=Vn(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:wn,use:Xl,useCallback:$m,useContext:wn,useEffect:Sf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:tg,useReducer:kl,useRef:qm,useState:function(){return kl(ra)},useDebugValue:yf,useDeferredValue:function(e,n){var a=ln();return eg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=kl(ra)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Dm,useId:sg,useHostTransitionStatus:bf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,n){var a=ln();return zm(a,Ge,e,n)},useMemoCache:mf,useCacheRefresh:rg};Af.useEffectEvent=jm;var fg={readContext:wn,use:Xl,useCallback:$m,useContext:wn,useEffect:Sf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:tg,useReducer:_f,useRef:qm,useState:function(){return _f(ra)},useDebugValue:yf,useDeferredValue:function(e,n){var a=ln();return Ge===null?Mf(a,e,n):eg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=_f(ra)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Dm,useId:sg,useHostTransitionStatus:bf,useFormState:Wm,useActionState:Wm,useOptimistic:function(e,n){var a=ln();return Ge!==null?zm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:rg};fg.useEffectEvent=jm;function Rf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ai(),c=Pa(r);c.payload=n,a!=null&&(c.callback=a),n=za(e,c,r),n!==null&&(Zn(n,e,r),vo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ai(),c=Pa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=za(e,c,r),n!==null&&(Zn(n,e,r),vo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),r=Pa(a);r.tag=2,n!=null&&(r.callback=n),n=za(e,r,a),n!==null&&(Zn(n,e,a),vo(n,e,a))}};function hg(e,n,a,r,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,S):n.prototype&&n.prototype.isPureReactComponent?!uo(a,r)||!uo(c,f):!0}function dg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Cf.enqueueReplaceState(n,n.state,null)}function Es(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function pg(e){Tl(e)}function mg(e){console.error(e)}function gg(e){Tl(e)}function jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function _g(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function wf(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(e,n)},a}function vg(e){return e=Pa(e),e.tag=3,e}function xg(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){_g(n,a,r)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){_g(n,a,r),typeof c!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function dS(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&er(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?ru():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),th(e,r,c)),!1;case 22:return a.flags|=65536,r===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),th(e,r,c)),!1}throw Error(s(435,a.tag))}return th(e,r,c),ru(),!1}if(Ee)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Yc&&(e=Error(s(422),{cause:r}),ho(pi(e,a)))):(r!==Yc&&(n=Error(s(423),{cause:r}),ho(pi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=pi(r,a),c=wf(e.stateNode,r,c),sf(e,c),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:r});if(f=pi(f,a),Lo===null?Lo=[f]:Lo.push(f),an!==4&&(an=2),n===null)return!0;r=pi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=wf(a.stateNode,r,e),sf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=vg(c),xg(c,e,a,r),sf(a,c),!1}a=a.return}while(a!==null);return!1}var Df=Error(s(461)),hn=!1;function Dn(e,n,a,r){n.child=e===null?Em(n,null,a,r):ys(n,e.child,a,r)}function Sg(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var S={};for(var A in r)A!=="ref"&&(S[A]=r[A])}else S=r;return _s(n),r=ff(e,n,a,S,f,c),A=hf(),e!==null&&!hn?(df(e,n,c),oa(e,n,c)):(Ee&&A&&Wc(n),n.flags|=1,Dn(e,n,r,c),n.child)}function yg(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!Gc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Mg(e,n,f,r,c)):(e=wl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ff(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(S,r)&&e.ref===n.ref)return oa(e,n,c)}return n.flags|=1,e=ea(f,r),e.ref=n.ref,e.return=n,n.child=e}function Mg(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(uo(f,r)&&e.ref===n.ref)if(hn=!1,n.pendingProps=r=f,Ff(e,c))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,oa(e,n,c)}return Uf(e,n,a,r,c)}function Eg(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return bg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nl(n,f!==null?f.cachePool:null),f!==null?Am(n,f):of(),Rm(n);else return r=n.lanes=536870912,bg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Nl(n,f.cachePool),Am(n,f),Fa(),n.memoizedState=null):(e!==null&&Nl(n,null),of(),Fa());return Dn(e,n,c,a),n.child}function To(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function bg(e,n,a,r,c){var f=tf();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Nl(n,null),of(),Rm(n),e!==null&&er(e,n,r,!0),n.childLanes=c,null}function Zl(e,n){return n=Ql({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Tg(e,n,a){return ys(n,e.child,null,a),e=Zl(n,n.pendingProps),e.flags|=2,ei(n),n.memoizedState=null,e}function pS(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(r.mode==="hidden")return e=Zl(n,r),n.lanes=536870912,To(null,e);if(uf(n),(e=je)?(e=B0(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=lm(e),a.return=n,n.child=a,Cn=n,je=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return Zl(n,r)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(uf(n),c)if(n.flags&256)n.flags&=-257,n=Tg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||er(e,n,a,!1),c=(a&e.childLanes)!==0,hn||c){if(r=qe,r!==null&&(S=Hs(r,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,ds(e,S),Zn(r,e,S),Df;ru(),n=Tg(e,n,a)}else e=f.treeContext,je=xi(S.nextSibling),Cn=n,Ee=!0,Ua=null,_i=!1,e!==null&&fm(n,e),n=Zl(n,r),n.flags|=4096;return n}return e=ea(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uf(e,n,a,r,c){return _s(n),a=ff(e,n,a,r,void 0,c),r=hf(),e!==null&&!hn?(df(e,n,c),oa(e,n,c)):(Ee&&r&&Wc(n),n.flags|=1,Dn(e,n,a,c),n.child)}function Ag(e,n,a,r,c,f){return _s(n),n.updateQueue=null,a=wm(n,r,a,c),Cm(e),r=hf(),e!==null&&!hn?(df(e,n,f),oa(e,n,f)):(Ee&&r&&Wc(n),n.flags|=1,Dn(e,n,a,f),n.child)}function Rg(e,n,a,r,c){if(_s(n),n.stateNode===null){var f=Qs,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},nf(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Qs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Rf(n,a,S,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Cf.enqueueReplaceState(f,f.state,null),So(n,r,f,c),xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,I=Es(a,A);f.props=I;var J=f.context,ft=a.contextType;S=Qs,typeof ft=="object"&&ft!==null&&(S=wn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==S)&&dg(n,f,r,S),Oa=!1;var tt=n.memoizedState;f.state=tt,So(n,r,f,c),xo(),J=n.memoizedState,A||tt!==J||Oa?(typeof mt=="function"&&(Rf(n,a,mt,r),J=n.memoizedState),(I=Oa||hg(n,a,I,r,tt,J,S))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=S,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,af(e,n),S=n.memoizedProps,ft=Es(a,S),f.props=ft,mt=n.pendingProps,tt=f.context,J=a.contextType,I=Qs,typeof J=="object"&&J!==null&&(I=wn(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||tt!==I)&&dg(n,f,r,I),Oa=!1,tt=n.memoizedState,f.state=tt,So(n,r,f,c),xo();var ot=n.memoizedState;S!==mt||tt!==ot||Oa||e!==null&&e.dependencies!==null&&Ul(e.dependencies)?(typeof A=="function"&&(Rf(n,a,A,r),ot=n.memoizedState),(ft=Oa||hg(n,a,ft,r,tt,ot,I)||e!==null&&e.dependencies!==null&&Ul(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=I,r=ft):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Kl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ys(n,e.child,null,c),n.child=ys(n,null,a,c)):Dn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=oa(e,n,c),e}function Cg(e,n,a,r){return ms(),n.flags|=256,Dn(e,n,a,r),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(e){return{baseLanes:e,cachePool:_m()}}function Of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function wg(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(c?Ba(n):Fa(),(e=je)?(e=B0(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=lm(e),a.return=n,n.child=a,Cn=n,je=null)):e=null,e===null)throw La(n);return gh(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(Fa(),c=n.mode,A=Ql({mode:"hidden",children:A},c),r=ps(r,c,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=Nf(a),r.childLanes=Of(e,S,a),n.memoizedState=Lf,To(null,r)):(Ba(n),Pf(n,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=zf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),A=r.fallback,c=n.mode,r=Ql({mode:"visible",children:r.children},c),A=ps(A,c,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,ys(n,e.child,null,a),r=n.child,r.memoizedState=Nf(a),r.childLanes=Of(e,S,a),n.memoizedState=Lf,n=To(null,r));else if(Ba(n),gh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var J=S.dgst;S=J,r=Error(s(419)),r.stack="",r.digest=S,ho({value:r,source:null,stack:null}),n=zf(e,n,a)}else if(hn||er(e,n,a,!1),S=(a&e.childLanes)!==0,hn||S){if(S=qe,S!==null&&(r=Hs(S,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,ds(e,r),Zn(S,e,r),Df;mh(A)||ru(),n=zf(e,n,a)}else mh(A)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,je=xi(A.nextSibling),Cn=n,Ee=!0,Ua=null,_i=!1,e!==null&&fm(n,e),n=Pf(n,r.children),n.flags|=4096);return n}return c?(Fa(),A=r.fallback,c=n.mode,I=e.child,J=I.sibling,r=ea(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,J!==null?A=ea(J,A):(A=ps(A,c,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,To(null,r),r=n.child,A=e.child.memoizedState,A===null?A=Nf(a):(c=A.cachePool,c!==null?(I=cn._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=_m(),A={baseLanes:A.baseLanes|a,cachePool:c}),r.memoizedState=A,r.childLanes=Of(e,S,a),n.memoizedState=Lf,To(e.child,r)):(Ba(n),a=e.child,e=a.sibling,a=ea(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Pf(e,n){return n=Ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ql(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function zf(e,n,a){return ys(n,e.child,null,a),e=Pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Dg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Kc(e.return,n,a)}function Bf(e,n,a,r,c,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=r,S.tail=a,S.tailMode=c,S.treeForkCount=f)}function Ug(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var S=on.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,gt(on,S),Dn(e,n,r,a),r=Ee?fo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dg(e,a,n);else if(e.tag===19)Dg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Il(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Bf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Il(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Bf(n,!0,a,null,f,r);break;case"together":Bf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ul(e)))}function mS(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Na(n,cn,e.memoizedState.cache),ms();break;case 27:case 5:It(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uf(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?wg(e,n,a):(Ba(n),e=oa(e,n,a),e!==null?e.sibling:null);Ba(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(er(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Ug(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),gt(on,on.current),r)break;return null;case 22:return n.lanes=0,Eg(e,n,a,n.pendingProps);case 24:Na(n,cn,e.memoizedState.cache)}return oa(e,n,a)}function Lg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Ff(e,a)&&(n.flags&128)===0)return hn=!1,mS(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Ee&&(n.flags&1048576)!==0&&cm(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=xs(n.elementType),n.type=e,typeof e=="function")Gc(e)?(r=Es(e,r),n.tag=1,n=Rg(null,n,e,r,a)):(n.tag=0,n=Uf(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===U){n.tag=11,n=Sg(null,n,e,r,a);break t}else if(c===O){n.tag=14,n=yg(null,n,e,r,a);break t}}throw n=dt(e)||e,Error(s(306,n,""))}}return n;case 0:return Uf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Es(r,n.pendingProps),Rg(e,n,r,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,af(e,n),So(n,r,null,a);var S=n.memoizedState;if(r=S.cache,Na(n,cn,r),r!==f.cache&&Qc(n,[cn],a,!0),xo(),r=S.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Cg(e,n,r,a);break t}else if(r!==c){c=pi(Error(s(424)),n),ho(c),n=Cg(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=xi(e.firstChild),Cn=n,Ee=!0,Ua=null,_i=!0,a=Em(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),r===c){n=oa(e,n,a);break t}Dn(e,n,r,a)}n=n.child}return n;case 26:return Kl(e,n),e===null?(a=X0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,r=du(et.current).createElement(a),r[un]=n,r[Mn]=e,Un(r,a,e),R(r),n.stateNode=r):n.memoizedState=X0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return It(n),e===null&&Ee&&(r=n.stateNode=H0(n.type,n.pendingProps,et.current),Cn=n,_i=!0,c=je,qa(n.type)?(_h=c,je=xi(r.firstChild)):je=c),Dn(e,n,n.pendingProps.children,a),Kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((c=r=je)&&(r=WS(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,Cn=n,je=xi(r.firstChild),_i=!1,c=!0):c=!1),c||La(n)),It(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,r=f.children,hh(c,f)?r=null:S!==null&&hh(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ff(e,n,rS,null,null,a),Ho._currentValue=c),Kl(e,n),Dn(e,n,r,a),n.child;case 6:return e===null&&Ee&&((e=a=je)&&(a=qS(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Cn=n,je=null,e=!0):e=!1),e||La(n)),null;case 13:return wg(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ys(n,null,r,a):Dn(e,n,r,a),n.child;case 11:return Sg(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Na(n,n.type,r.value),Dn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,_s(n),c=wn(c),r=r(c),n.flags|=1,Dn(e,n,r,a),n.child;case 14:return yg(e,n,n.type,n.pendingProps,a);case 15:return Mg(e,n,n.type,n.pendingProps,a);case 19:return Ug(e,n,a);case 31:return pS(e,n,a);case 22:return Eg(e,n,a,n.pendingProps);case 24:return _s(n),r=wn(cn),e===null?(c=tf(),c===null&&(c=qe,f=Jc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},nf(n),Na(n,cn,c)):((e.lanes&a)!==0&&(af(e,n),So(n,null,null,a),xo()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Na(n,cn,r)):(r=f.cache,Na(n,cn,r),r!==c.cache&&Qc(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(e){e.flags|=4}function If(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(s0())e.flags|=8192;else throw Ss=Pl,ef}else e.flags&=-16777217}function Ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!j0(n))if(s0())e.flags|=8192;else throw Ss=Pl,ef}function Jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Be():536870912,e.lanes|=n,dr|=n)}function Ao(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function gS(e,n,a){var r=n.pendingProps;switch(qc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),aa(cn),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(n)?la(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jc())),Ze(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(la(n),f!==null?(Ze(n),Ng(n,f)):(Ze(n),If(n,c,null,r,a))):f?f!==e.memoizedState?(la(n),Ze(n),Ng(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&la(n),Ze(n),If(n,c,e,r,a)),null;case 27:if(me(n),a=et.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&la(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Tt.current,tr(n)?hm(n):(e=H0(c,r,a),n.stateNode=e,la(n))}return Ze(n),null;case 5:if(me(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&la(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=Tt.current,tr(n))hm(n);else{var S=du(et.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?S.createElement("select",{is:r.is}):S.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?S.createElement(c,{is:r.is}):S.createElement(c)}}f[un]=n,f[Mn]=r;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(Un(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&la(n)}}return Ze(n),If(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&la(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,tr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||w0(e.nodeValue,a)),e||La(n,!0)}else e=du(e).createTextNode(r),e[un]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=tr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=jc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=tr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[un]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=jc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),Ze(n),null);case 4:return Gt(),e===null&&oh(n.stateNode.containerInfo),Ze(n),null;case 10:return aa(n.type),Ze(n),null;case 19:if(it(on),r=n.memoizedState,r===null)return Ze(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Ao(r,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Il(e),f!==null){for(n.flags|=128,Ao(r,!1),e=f.updateQueue,n.updateQueue=e,Jl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)om(a,e),a=a.sibling;return gt(on,on.current&1|2),Ee&&na(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>iu&&(n.flags|=128,c=!0,Ao(r,!1),n.lanes=4194304)}else{if(!c)if(e=Il(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Jl(n,e),Ao(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ee)return Ze(n),null}else 2*E()-r.renderingStartTime>iu&&a!==536870912&&(n.flags|=128,c=!0,Ao(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=on.current,gt(on,c?a&1|2:a&1),Ee&&na(n,r.treeForkCount),e):(Ze(n),null);case 22:case 23:return ei(n),lf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&it(vs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function _S(e,n){switch(qc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return aa(cn),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return me(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return it(on),null;case 4:return Gt(),null;case 10:return aa(n.type),null;case 22:case 23:return ei(n),lf(),e!==null&&it(vs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return aa(cn),null;case 25:return null;default:return null}}function Og(e,n){switch(qc(n),n.tag){case 3:aa(cn),Gt();break;case 26:case 27:case 5:me(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:it(on);break;case 10:aa(n.type);break;case 22:case 23:ei(n),lf(),e!==null&&it(vs);break;case 24:aa(cn)}}function Ro(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,S=a.inst;r=f(),S.destroy=r}a=a.next}while(a!==c)}}catch(A){He(n,n.return,A)}}function Ia(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var S=r.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var I=a,J=A;try{J()}catch(ft){He(c,I,ft)}}}r=r.next}while(r!==f)}}catch(ft){He(n,n.return,ft)}}function Pg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Tm(n,a)}catch(r){He(e,e.return,r)}}}function zg(e,n,a){a.props=Es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){He(e,n,r)}}function Co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){He(e,n,c)}}function Vi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){He(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(e,n,c)}else a.current=null}function Bg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){He(e,e.return,c)}}function Hf(e,n,a){try{var r=e.stateNode;IS(r,e.type,a,n),r[Mn]=n}catch(c){He(e,e.return,c)}}function Fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function Vf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(r!==4&&(r===27&&qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Gf(e,n,a),e=e.sibling;e!==null;)Gf(e,n,a),e=e.sibling}function $l(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($l(e,n,a),e=e.sibling;e!==null;)$l(e,n,a),e=e.sibling}function Ig(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Un(n,r,a),n[un]=e,n[Mn]=a}catch(f){He(e,e.return,f)}}var ua=!1,dn=!1,Xf=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function vS(e,n){if(e=e.containerInfo,ch=Su,e=Jp(e),Pc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,I=-1,J=0,ft=0,mt=e,tt=null;e:for(;;){for(var ot;mt!==a||c!==0&&mt.nodeType!==3||(A=S+c),mt!==f||r!==0&&mt.nodeType!==3||(I=S+r),mt.nodeType===3&&(S+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===e)break e;if(tt===a&&++J===c&&(A=S),tt===f&&++ft===r&&(I=S),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:e,selectionRange:a},Su=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=Es(a.type,c);e=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(te){He(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ph(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ph(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function Vg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),r&4&&Ro(5,a);break;case 1:if(fa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){He(a,a.return,S)}else{var c=Es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(a,a.return,S)}}r&64&&Pg(a),r&512&&Co(a,a.return);break;case 3:if(fa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Tm(e,n)}catch(S){He(a,a.return,S)}}break;case 27:n===null&&r&4&&Ig(a);case 26:case 5:fa(e,a),n===null&&r&4&&Bg(a),r&512&&Co(a,a.return);break;case 12:fa(e,a);break;case 31:fa(e,a),r&4&&kg(e,a);break;case 13:fa(e,a),r&4&&Wg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=RS.bind(null,a),YS(e,a))));break;case 22:if(r=a.memoizedState!==null||ua,!r){n=n!==null&&n.memoizedState!==null||dn,c=ua;var f=dn;ua=r,(dn=n)&&!f?ha(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),ua=c,dn=f}break;case 30:break;default:fa(e,a)}}function Gg(e){var n=e.alternate;n!==null&&(e.alternate=null,Gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&eo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Wn=!1;function ca(e,n,a){for(a=a.child;a!==null;)Xg(e,n,a),a=a.sibling}function Xg(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:dn||Vi(a,n),ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Vi(a,n);var r=$e,c=Wn;qa(a.type)&&($e=a.stateNode,Wn=!1),ca(e,n,a),Bo(a.stateNode),$e=r,Wn=c;break;case 5:dn||Vi(a,n);case 6:if(r=$e,c=Wn,$e=null,ca(e,n,a),$e=r,Wn=c,$e!==null)if(Wn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:$e!==null&&(Wn?(e=$e,P0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):P0($e,a.stateNode));break;case 4:r=$e,c=Wn,$e=a.stateNode.containerInfo,Wn=!0,ca(e,n,a),$e=r,Wn=c;break;case 0:case 11:case 14:case 15:Ia(2,a,n),dn||Ia(4,a,n),ca(e,n,a);break;case 1:dn||(Vi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&zg(a,n,r)),ca(e,n,a);break;case 21:ca(e,n,a);break;case 22:dn=(r=dn)||a.memoizedState!==null,ca(e,n,a),dn=r;break;default:ca(e,n,a)}}function kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){He(n,n.return,a)}}}function Wg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){He(n,n.return,a)}}function xS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Hg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Hg),n;default:throw Error(s(435,e.tag))}}function tu(e,n){var a=xS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=CS.bind(null,e,r);r.then(c,c)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(qa(A.type)){$e=A.stateNode,Wn=!1;break t}break;case 5:$e=A.stateNode,Wn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Wn=!0;break t}A=A.return}if($e===null)throw Error(s(160));Xg(f,S,c),$e=null,Wn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)qg(n,e),n=n.sibling}var wi=null;function qg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),r&4&&(Ia(3,e,e.return),Ro(3,e),Ia(5,e,e.return));break;case 1:qn(n,e),Yn(e),r&512&&(dn||a===null||Vi(a,a.return)),r&64&&ua&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=wi;if(qn(n,e),Yn(e),r&512&&(dn||a===null||Vi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ls]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Un(f,r,a),f[un]=e,R(f),r=f;break t;case"link":var S=q0("link","href",c).get(r+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=c.createElement(r),Un(f,r,a),c.head.appendChild(f);break;case"meta":if(S=q0("meta","content",c).get(r+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=c.createElement(r),Un(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[un]=e,R(f),r=f}e.stateNode=r}else Y0(c,e.type,e.stateNode);else e.stateNode=W0(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Y0(c,e.type,e.stateNode):W0(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),r&512&&(dn||a===null||Vi(a,a.return)),a!==null&&r&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),r&512&&(dn||a===null||Vi(a,a.return)),e.flags&32){c=e.stateNode;try{mn(c,"")}catch(Vt){He(e,e.return,Vt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Hf(e,c,a!==null?a.memoizedProps:c)),r&1024&&(Xf=!0);break;case 6:if(qn(n,e),Yn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Vt){He(e,e.return,Vt)}}break;case 3:if(gu=null,c=wi,wi=pu(n.containerInfo),qn(n,e),wi=c,Yn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(Vt){He(e,e.return,Vt)}Xf&&(Xf=!1,Yg(e));break;case 4:r=wi,wi=pu(e.stateNode.containerInfo),qn(n,e),Yn(e),wi=r;break;case 12:qn(n,e),Yn(e);break;case 31:qn(n,e),Yn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,tu(e,r)));break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nu=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,tu(e,r)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,J=ua,ft=dn;if(ua=J||c,dn=ft||I,qn(n,e),dn=ft,ua=J,Yn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||ua||dn||bs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=I.stateNode;var mt=I.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Vt){He(I,I.return,Vt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Vt){He(I,I.return,Vt)}}}else if(n.tag===18){if(a===null){I=n;try{var ot=I.stateNode;c?z0(ot,!0):z0(I.stateNode,!1)}catch(Vt){He(I,I.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,tu(e,a))));break;case 19:qn(n,e),Yn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,tu(e,r)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Fg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Vf(e);$l(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(mn(S,""),a.flags&=-33);var A=Vf(e);$l(e,A,S);break;case 3:case 4:var I=a.stateNode.containerInfo,J=Vf(e);Gf(e,J,I);break;default:throw Error(s(161))}}catch(ft){He(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function fa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vg(e,n.alternate,n),n=n.sibling}function bs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),bs(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&zg(n,n.return,a),bs(n);break;case 27:Bo(n.stateNode);case 26:case 5:Vi(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}e=e.sibling}}function ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ha(c,f,a),Ro(4,f);break;case 1:if(ha(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){He(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var A=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)bm(I[c],A)}catch(J){He(r,r.return,J)}}a&&S&64&&Pg(f),Co(f,f.return);break;case 27:Ig(f);case 26:case 5:ha(c,f,a),a&&r===null&&S&4&&Bg(f),Co(f,f.return);break;case 12:ha(c,f,a);break;case 31:ha(c,f,a),a&&S&4&&kg(c,f);break;case 13:ha(c,f,a),a&&S&4&&Wg(c,f);break;case 22:f.memoizedState===null&&ha(c,f,a),Co(f,f.return);break;case 30:break;default:ha(c,f,a)}n=n.sibling}}function kf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function Wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function Di(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jg(e,n,a,r),n=n.sibling}function jg(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,r),c&2048&&Ro(9,n);break;case 1:Di(e,n,a,r);break;case 3:Di(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(c&2048){Di(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){He(n,n.return,I)}}else Di(e,n,a,r);break;case 31:Di(e,n,a,r);break;case 13:Di(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Di(e,n,a,r):wo(e,n):f._visibility&2?Di(e,n,a,r):(f._visibility|=2,cr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&kf(S,n);break;case 24:Di(e,n,a,r),c&2048&&Wf(n.alternate,n);break;default:Di(e,n,a,r)}}function cr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,A=a,I=r,J=S.flags;switch(S.tag){case 0:case 11:case 15:cr(f,S,A,I,c),Ro(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?cr(f,S,A,I,c):wo(f,S):(ft._visibility|=2,cr(f,S,A,I,c)),c&&J&2048&&kf(S.alternate,S);break;case 24:cr(f,S,A,I,c),c&&J&2048&&Wf(S.alternate,S);break;default:cr(f,S,A,I,c)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:wo(a,r),c&2048&&kf(r.alternate,r);break;case 24:wo(a,r),c&2048&&Wf(r.alternate,r);break;default:wo(a,r)}n=n.sibling}}var Do=8192;function fr(e,n,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)Zg(e,n,a),e=e.sibling}function Zg(e,n,a){switch(e.tag){case 26:fr(e,n,a),e.flags&Do&&e.memoizedState!==null&&sy(a,wi,e.memoizedState,e.memoizedProps);break;case 5:fr(e,n,a);break;case 3:case 4:var r=wi;wi=pu(e.stateNode.containerInfo),fr(e,n,a),wi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Do,Do=16777216,fr(e,n,a),Do=r):fr(e,n,a));break;default:fr(e,n,a)}}function Kg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,Jg(r,e)}Kg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qg(e),e=e.sibling}function Qg(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,eu(e)):Uo(e);break;default:Uo(e)}}function eu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,Jg(r,e)}Kg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),eu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,eu(n));break;default:eu(n)}e=e.sibling}}function Jg(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:po(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Sn=r;else t:for(a=e;Sn!==null;){r=Sn;var c=r.sibling,f=r.return;if(Gg(r),r===a){Sn=null;break t}if(c!==null){c.return=f,Sn=c;break t}Sn=f}}}var SS={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},yS=typeof WeakMap=="function"?WeakMap:Map,Oe=0,qe=null,_e=null,ye=0,Ie=0,ni=null,Ha=!1,hr=!1,qf=!1,da=0,an=0,Va=0,Ts=0,Yf=0,ii=0,dr=0,Lo=null,jn=null,jf=!1,nu=0,$g=0,iu=1/0,au=null,Ga=null,gn=0,Xa=null,pr=null,pa=0,Zf=0,Kf=null,t0=null,No=0,Qf=null;function ai(){return(Oe&2)!==0&&ye!==0?ye&-ye:F.T!==null?ih():$r()}function e0(){if(ii===0)if((ye&536870912)===0||Ee){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),ii=e}else ii=536870912;return e=ti.current,e!==null&&(e.flags|=32),ii}function Zn(e,n,a){(e===qe&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(mr(e,0),ka(e,ye,ii,!1)),Nn(e,a),((Oe&2)===0||e!==qe)&&(e===qe&&((Oe&2)===0&&(Ts|=a),an===4&&ka(e,ye,ii,!1)),Gi(e))}function n0(e,n,a){if((Oe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n),c=r?bS(e,n):$f(e,n,!0),f=r;do{if(c===0){hr&&!r&&ka(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!MS(a)){c=$f(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;c=Lo;var I=A.current.memoizedState.isDehydrated;if(I&&(mr(A,S).flags|=256),S=$f(A,S,!1),S!==2){if(qf&&!I){A.errorRecoveryDisabledLanes|=f,Ts|=f,c=4;break t}f=jn,jn=c,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){mr(e,0),ka(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(r,n,ii,!Ha);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=nu+300-E(),10<c)){if(ka(r,n,ii,!Ha),_t(r,0,!0)!==0)break t;pa=n,r.timeoutHandle=N0(i0.bind(null,r,a,jn,au,jf,n,ii,Ts,dr,Ha,f,"Throttled",-0,0),c);break t}i0(r,a,jn,au,jf,n,ii,Ts,dr,Ha,f,null,-0,0)}}break}while(!0);Gi(e)}function i0(e,n,a,r,c,f,S,A,I,J,ft,mt,tt,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},Zg(n,f,mt);var Vt=(f&62914560)===f?nu-E():(f&4194048)===f?$g-E():0;if(Vt=ry(mt,Vt),Vt!==null){pa=f,e.cancelPendingCommit=Vt(f0.bind(null,e,n,f,a,r,c,S,A,I,ft,mt,null,tt,ot)),ka(e,f,S,!J);return}}f0(e,n,f,a,r,c,S,A,I)}function MS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(e,n,a,r){n&=~Yf,n&=~Ts,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),S=1<<f;r[f]=-1,c&=~S}a!==0&&gl(e,a,n)}function su(){return(Oe&6)===0?(Oo(0),!1):!0}function Jf(){if(_e!==null){if(Ie===0)var e=_e.return;else e=_e,ia=gs=null,pf(e),sr=null,go=0,e=_e;for(;e!==null;)Og(e.alternate,e),e=e.return;_e=null}}function mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,GS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),pa=0,Jf(),qe=e,_e=a=ea(e.current,null),ye=n,Ie=0,ni=null,Ha=!1,hr=At(e,n),qf=!1,dr=ii=Yf=Ts=Va=an=0,jn=Lo=null,jf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Ot(r),f=1<<c;n|=e[c],r&=~f}return da=n,Al(),a}function a0(e,n){ue=null,F.H=bo,n===ar||n===Ol?(n=Sm(),Ie=3):n===ef?(n=Sm(),Ie=4):Ie=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,_e===null&&(an=1,jl(e,pi(n,e.current)))}function s0(){var e=ti.current;return e===null?!0:(ye&4194048)===ye?vi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===vi:!1}function r0(){var e=F.H;return F.H=bo,e===null?bo:e}function o0(){var e=F.A;return F.A=SS,e}function ru(){an=4,Ha||(ye&4194048)!==ye&&ti.current!==null||(hr=!0),(Va&134217727)===0&&(Ts&134217727)===0||qe===null||ka(qe,ye,ii,!1)}function $f(e,n,a){var r=Oe;Oe|=2;var c=r0(),f=o0();(qe!==e||ye!==n)&&(au=null,mr(e,n)),n=!1;var S=an;t:do try{if(Ie!==0&&_e!==null){var A=_e,I=ni;switch(Ie){case 8:Jf(),S=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var J=Ie;if(Ie=0,ni=null,gr(e,A,I,J),a&&hr){S=0;break t}break;default:J=Ie,Ie=0,ni=null,gr(e,A,I,J)}}ES(),S=an;break}catch(ft){a0(e,ft)}while(!0);return n&&e.shellSuspendCounter++,ia=gs=null,Oe=r,F.H=c,F.A=f,_e===null&&(qe=null,ye=0,Al()),S}function ES(){for(;_e!==null;)l0(_e)}function bS(e,n){var a=Oe;Oe|=2;var r=r0(),c=o0();qe!==e||ye!==n?(au=null,iu=E()+500,mr(e,n)):hr=At(e,n);t:do try{if(Ie!==0&&_e!==null){n=_e;var f=ni;e:switch(Ie){case 1:Ie=0,ni=null,gr(e,n,f,1);break;case 2:case 9:if(vm(f)){Ie=0,ni=null,u0(n);break}n=function(){Ie!==2&&Ie!==9||qe!==e||(Ie=7),Gi(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:vm(f)?(Ie=0,ni=null,u0(n)):(Ie=0,ni=null,gr(e,n,f,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var A=_e;if(S?j0(S):A.stateNode.complete){Ie=0,ni=null;var I=A.sibling;if(I!==null)_e=I;else{var J=A.return;J!==null?(_e=J,ou(J)):_e=null}break e}}Ie=0,ni=null,gr(e,n,f,5);break;case 6:Ie=0,ni=null,gr(e,n,f,6);break;case 8:Jf(),an=6;break t;default:throw Error(s(462))}}TS();break}catch(ft){a0(e,ft)}while(!0);return ia=gs=null,F.H=r,F.A=c,Oe=a,_e!==null?0:(qe=null,ye=0,Al(),an)}function TS(){for(;_e!==null&&!qt();)l0(_e)}function l0(e){var n=Lg(e.alternate,e,da);e.memoizedProps=e.pendingProps,n===null?ou(e):_e=n}function u0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ag(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Ag(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:pf(n);default:Og(a,n),n=_e=om(n,da),n=Lg(a,n,da)}e.memoizedProps=e.pendingProps,n===null?ou(e):_e=n}function gr(e,n,a,r){ia=gs=null,pf(n),sr=null,go=0;var c=n.return;try{if(dS(e,c,n,a,ye)){an=1,jl(e,pi(a,e.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;an=1,jl(e,pi(a,e.current)),_e=null;return}n.flags&32768?(Ee||r===1?e=!0:hr||(ye&536870912)!==0?e=!1:(Ha=e=!0,(r===2||r===9||r===3||r===6)&&(r=ti.current,r!==null&&r.tag===13&&(r.flags|=16384))),c0(n,e)):ou(n)}function ou(e){var n=e;do{if((n.flags&32768)!==0){c0(n,Ha);return}e=n.return;var a=gS(n.alternate,n,da);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);an===0&&(an=5)}function c0(e,n){do{var a=_S(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);an=6,_e=null}function f0(e,n,a,r,c,f,S,A,I){e.cancelPendingCommit=null;do lu();while(gn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Hc,Ti(e,a,f,S,A,I),e===qe&&(_e=qe=null,ye=0),pr=n,Xa=e,pa=a,Zf=f,Kf=c,t0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wS(lt,function(){return g0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,c=H.p,H.p=2,S=Oe,Oe|=4;try{vS(e,n,a)}finally{Oe=S,H.p=c,F.T=r}}gn=1,h0(),d0(),p0()}}function h0(){if(gn===1){gn=0;var e=Xa,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var r=H.p;H.p=2;var c=Oe;Oe|=4;try{qg(n,e);var f=fh,S=Jp(e.containerInfo),A=f.focusedElem,I=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Qp(A.ownerDocument.documentElement,A)){if(I!==null&&Pc(A)){var J=I.start,ft=I.end;if(ft===void 0&&(ft=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ft,A.value.length);else{var mt=A.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Vt=A.textContent.length,te=Math.min(I.start,Vt),ke=I.end===void 0?te:Math.min(I.end,Vt);!ot.extend&&te>ke&&(S=ke,ke=te,te=S);var Z=Kp(A,te),X=Kp(A,ke);if(Z&&X&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var Q=mt.createRange();Q.setStart(Z.node,Z.offset),ot.removeAllRanges(),te>ke?(ot.addRange(Q),ot.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),ot.addRange(Q))}}}}for(mt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Su=!!ch,fh=ch=null}finally{Oe=c,H.p=r,F.T=a}}e.current=n,gn=2}}function d0(){if(gn===2){gn=0;var e=Xa,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var r=H.p;H.p=2;var c=Oe;Oe|=4;try{Vg(e,n.alternate,n)}finally{Oe=c,H.p=r,F.T=a}}gn=3}}function p0(){if(gn===4||gn===3){gn=0,P();var e=Xa,n=pr,a=pa,r=t0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,pr=Xa=null,m0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ga=null),Vs(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=F.T,c=H.p,H.p=2,F.T=null;try{for(var f=e.onRecoverableError,S=0;S<r.length;S++){var A=r[S];f(A.value,{componentStack:A.stack})}}finally{F.T=n,H.p=c}}(pa&3)!==0&&lu(),Gi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Qf?No++:(No=0,Qf=e):No=0,Oo(0)}}function m0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function lu(){return h0(),d0(),p0(),g0()}function g0(){if(gn!==5)return!1;var e=Xa,n=Zf;Zf=0;var a=Vs(pa),r=F.T,c=H.p;try{H.p=32>a?32:a,F.T=null,a=Kf,Kf=null;var f=Xa,S=pa;if(gn=0,pr=Xa=null,pa=0,(Oe&6)!==0)throw Error(s(331));var A=Oe;if(Oe|=4,Qg(f.current),jg(f,f.current,S,a),Oe=A,Oo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{H.p=c,F.T=r,m0(e,n)}}function _0(e,n,a){n=pi(a,n),n=wf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(Nn(e,2),Gi(e))}function He(e,n,a){if(e.tag===3)_0(e,e,a);else for(;n!==null;){if(n.tag===3){_0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ga===null||!Ga.has(r))){e=pi(a,e),a=vg(2),r=za(n,a,2),r!==null&&(xg(a,r,n,e),Nn(r,2),Gi(r));break}}n=n.return}}function th(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new yS;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(qf=!0,c.add(a),e=AS.bind(null,e,n,a),n.then(e,e))}function AS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ye&a)===a&&(an===4||an===3&&(ye&62914560)===ye&&300>E()-nu?(Oe&2)===0&&mr(e,0):Yf|=a,dr===ye&&(dr=0)),Gi(e)}function v0(e,n){n===0&&(n=Be()),e=ds(e,n),e!==null&&(Nn(e,n),Gi(e))}function RS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),v0(e,a)}function CS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),v0(e,a)}function wS(e,n){return Te(e,n)}var uu=null,_r=null,eh=!1,cu=!1,nh=!1,Wa=0;function Gi(e){e!==_r&&e.next===null&&(_r===null?uu=_r=e:_r=_r.next=e),cu=!0,eh||(eh=!0,US())}function Oo(e,n){if(!nh&&cu){nh=!0;do for(var a=!1,r=uu;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var S=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,M0(r,f))}else f=ye,f=_t(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||At(r,f)||(a=!0,M0(r,f));r=r.next}while(a);nh=!1}}function DS(){x0()}function x0(){cu=eh=!1;var e=0;Wa!==0&&VS()&&(e=Wa);for(var n=E(),a=null,r=uu;r!==null;){var c=r.next,f=S0(r,n);f===0?(r.next=null,a===null?uu=c:a.next=c,c===null&&(_r=a)):(a=r,(e!==0||(f&3)!==0)&&(cu=!0)),r=c}gn!==0&&gn!==5||Oo(e),Wa!==0&&(Wa=0)}function S0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Ot(f),A=1<<S,I=c[S];I===-1?((A&a)===0||(A&r)!==0)&&(c[S]=ae(A,n)):I<=n&&(e.expiredLanes|=A),f&=~A}if(n=qe,a=ye,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Pe(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||At(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Pe(r),Vs(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Rt;break;default:a=lt}return r=y0.bind(null,e),a=Te(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Pe(r),e.callbackPriority=2,e.callbackNode=null,2}function y0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lu()&&e.callbackNode!==a)return null;var r=ye;return r=_t(e,e===qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(n0(e,r,n),S0(e,E()),e.callbackNode!=null&&e.callbackNode===a?y0.bind(null,e):null)}function M0(e,n){if(lu())return null;n0(e,n,!0)}function US(){XS(function(){(Oe&6)!==0?Te(ht,DS):x0()})}function ih(){if(Wa===0){var e=nr;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Wa=e}return Wa}function E0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vl(""+e)}function b0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function LS(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=E0((c[Mn]||null).action),S=r.submitter;S&&(n=(n=S[Mn]||null)?E0(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new Ml("action","action",null,r,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var I=S?b0(c,S):new FormData(c);Ef(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=S?b0(c,S):new FormData(c),Ef(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var ah=0;ah<Ic.length;ah++){var sh=Ic[ah],NS=sh.toLowerCase(),OS=sh[0].toUpperCase()+sh.slice(1);Ci(NS,"on"+OS)}Ci(em,"onAnimationEnd"),Ci(nm,"onAnimationIteration"),Ci(im,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(Kx,"onTransitionRun"),Ci(Qx,"onTransitionStart"),Ci(Jx,"onTransitionCancel"),Ci(am,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function T0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var S=r.length-1;0<=S;S--){var A=r[S],I=A.instance,J=A.currentTarget;if(A=A.listener,I!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=J;try{f(c)}catch(ft){Tl(ft)}c.currentTarget=null,f=I}else for(S=0;S<r.length;S++){if(A=r[S],I=A.instance,J=A.currentTarget,A=A.listener,I!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=J;try{f(c)}catch(ft){Tl(ft)}c.currentTarget=null,f=I}}}}function ve(e,n){var a=n[Gs];a===void 0&&(a=n[Gs]=new Set);var r=e+"__bubble";a.has(r)||(A0(n,e,2,!1),a.add(r))}function rh(e,n,a){var r=0;n&&(r|=4),A0(a,e,r,n)}var fu="_reactListening"+Math.random().toString(36).slice(2);function oh(e){if(!e[fu]){e[fu]=!0,Y.forEach(function(a){a!=="selectionchange"&&(PS.has(a)||rh(a,!1,e),rh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fu]||(n[fu]=!0,rh("selectionchange",!1,n))}}function A0(e,n,a,r){switch(e_(n)){case 2:var c=uy;break;case 8:c=cy;break;default:c=Mh}a=c.bind(null,n,a,e),c=void 0,!Ac||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function lh(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var A=r.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=r.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Aa(A),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){r=f=S;continue t}A=A.parentNode}}r=r.return}Up(function(){var J=f,ft=bc(a),mt=[];t:{var tt=sm.get(e);if(tt!==void 0){var ot=Ml,Vt=e;switch(e){case"keypress":if(Sl(a)===0)break t;case"keydown":case"keyup":ot=Cx;break;case"focusin":Vt="focus",ot=Dc;break;case"focusout":Vt="blur",ot=Dc;break;case"beforeblur":case"afterblur":ot=Dc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Ux;break;case em:case nm:case im:ot=xx;break;case am:ot=Nx;break;case"scroll":case"scrollend":ot=px;break;case"wheel":ot=Px;break;case"copy":case"cut":case"paste":ot=yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=zp;break;case"toggle":case"beforetoggle":ot=Bx}var te=(n&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),Z=te?tt!==null?tt+"Capture":null:tt;te=[];for(var X=J,Q;X!==null;){var pt=X;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Z===null||(pt=no(X,Z),pt!=null&&te.push(zo(X,pt,Q))),ke)break;X=X.return}0<te.length&&(tt=new ot(tt,Vt,null,a,ft),mt.push({event:tt,listeners:te}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",tt&&a!==Ec&&(Vt=a.relatedTarget||a.fromElement)&&(Aa(Vt)||Vt[Ai]))break t;if((ot||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=J,Vt=Vt?Aa(Vt):null,Vt!==null&&(ke=u(Vt),te=Vt.tag,Vt!==ke||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ot=null,Vt=J),ot!==Vt)){if(te=Op,pt="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(te=zp,pt="onPointerLeave",Z="onPointerEnter",X="pointer"),ke=ot==null?tt:us(ot),Q=Vt==null?tt:us(Vt),tt=new te(pt,X+"leave",ot,a,ft),tt.target=ke,tt.relatedTarget=Q,pt=null,Aa(ft)===J&&(te=new te(Z,X+"enter",Vt,a,ft),te.target=Q,te.relatedTarget=ke,pt=te),ke=pt,ot&&Vt)e:{for(te=zS,Z=ot,X=Vt,Q=0,pt=Z;pt;pt=te(pt))Q++;pt=0;for(var Kt=X;Kt;Kt=te(Kt))pt++;for(;0<Q-pt;)Z=te(Z),Q--;for(;0<pt-Q;)X=te(X),pt--;for(;Q--;){if(Z===X||X!==null&&Z===X.alternate){te=Z;break e}Z=te(Z),X=te(X)}te=null}else te=null;ot!==null&&R0(mt,tt,ot,te,!1),Vt!==null&&ke!==null&&R0(mt,ke,Vt,te,!0)}}t:{if(tt=J?us(J):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var we=kp;else if(Gp(tt))if(Wp)we=Yx;else{we=Wx;var Yt=kx}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&Ri(J.elementType)&&(we=kp):we=qx;if(we&&(we=we(e,J))){Xp(mt,we,a,ft);break t}Yt&&Yt(e,tt,J),e==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&bn(tt,"number",tt.value)}switch(Yt=J?us(J):window,e){case"focusin":(Gp(Yt)||Yt.contentEditable==="true")&&(js=Yt,zc=J,co=null);break;case"focusout":co=zc=js=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,$p(mt,a,ft);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":$p(mt,a,ft)}var fe;if(Lc)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Ys?Hp(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(Bp&&a.locale!=="ko"&&(Ys||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Ys&&(fe=Lp()):(wa=ft,Rc="value"in wa?wa.value:wa.textContent,Ys=!0)),Yt=hu(J,Me),0<Yt.length&&(Me=new Pp(Me,e,null,a,ft),mt.push({event:Me,listeners:Yt}),fe?Me.data=fe:(fe=Vp(a),fe!==null&&(Me.data=fe)))),(fe=Ix?Hx(e,a):Vx(e,a))&&(Me=hu(J,"onBeforeInput"),0<Me.length&&(Yt=new Pp("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Yt,listeners:Me}),Yt.data=fe)),LS(mt,e,J,a,ft)}T0(mt,n)})}function zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function hu(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=no(e,a),c!=null&&r.unshift(zo(e,c,f)),c=no(e,n),c!=null&&r.push(zo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function zS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function R0(e,n,a,r,c){for(var f=n._reactName,S=[];a!==null&&a!==r;){var A=a,I=A.alternate,J=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||J===null||(I=J,c?(J=no(a,f),J!=null&&S.unshift(zo(a,J,I))):c||(J=no(a,f),J!=null&&S.push(zo(a,J,I)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var BS=/\r\n?/g,FS=/\u0000|\uFFFD/g;function C0(e){return(typeof e=="string"?e:""+e).replace(BS,`
`).replace(FS,"")}function w0(e,n){return n=C0(n),C0(e)===n}function Xe(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||mn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&mn(e,""+r);break;case"className":Qt(e,"class",r);break;case"tabIndex":Qt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(e,a,r);break;case"style":ks(e,r,f);break;case"data":if(n!=="object"){Qt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=vl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",c.name,c,null),Xe(e,n,"formEncType",c.formEncType,c,null),Xe(e,n,"formMethod",c.formMethod,c,null),Xe(e,n,"formTarget",c.formTarget,c,null)):(Xe(e,n,"encType",c.encType,c,null),Xe(e,n,"method",c.method,c,null),Xe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=vl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=$i);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=vl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ve("beforetoggle",e),ve("toggle",e),kt(e,"popover",r);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":kt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hx.get(a)||a,kt(e,a,r))}}function uh(e,n,a,r,c,f){switch(a){case"style":ks(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?mn(e,r):(typeof r=="number"||typeof r=="bigint")&&mn(e,""+r);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"onClick":r!=null&&(e.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):kt(e,a,r)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,S,a,null)}}c&&Xe(e,n,"srcSet",a.srcSet,a,null),r&&Xe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var A=f=S=c=null,I=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":c=ft;break;case"type":S=ft;break;case"checked":I=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Xe(e,n,r,ft,a,null)}}Ji(e,f,A,I,J,S,c,!1);return;case"select":ve("invalid",e),r=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":r=A;default:Xe(e,n,c,A,a,null)}n=f,a=S,e.multiple=!!r,n!=null?hi(e,!!r,n,!1):a!=null&&hi(e,!!r,a,!0);return;case"textarea":ve("invalid",e),f=c=r=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":r=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(e,n,S,A,a,null)}Tn(e,r,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Xe(e,n,I,r,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(r=0;r<Po.length;r++)ve(Po[r],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,J,r,a,null)}return;default:if(Ri(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&uh(e,n,ft,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Xe(e,n,A,r,a,null))}function IS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,I=null,J=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=mt;default:r.hasOwnProperty(ot)||Xe(e,n,ot,null,r,mt)}}for(var tt in r){var ot=r[tt];if(mt=a[tt],r.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":f=ot;break;case"name":c=ot;break;case"checked":J=ot;break;case"defaultChecked":ft=ot;break;case"value":S=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Xe(e,n,tt,ot,r,mt)}}En(e,S,A,I,J,ft,f,c);return;case"select":ot=S=A=tt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ot=I;default:r.hasOwnProperty(f)||Xe(e,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":tt=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==I&&Xe(e,n,c,f,r,I)}n=A,a=S,r=ot,tt!=null?hi(e,!!a,tt,!1):!!r!=!!a&&(n!=null?hi(e,!!a,n,!0):hi(e,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,r,c)}for(S in r)if(c=r[S],f=a[S],r.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":tt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Xe(e,n,S,c,r,f)}Fe(e,tt,ot);return;case"option":for(var Vt in a)tt=a[Vt],a.hasOwnProperty(Vt)&&tt!=null&&!r.hasOwnProperty(Vt)&&(Vt==="selected"?e.selected=!1:Xe(e,n,Vt,null,r,tt));for(I in r)tt=r[I],ot=a[I],r.hasOwnProperty(I)&&tt!==ot&&(tt!=null||ot!=null)&&(I==="selected"?e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Xe(e,n,I,tt,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!r.hasOwnProperty(te)&&Xe(e,n,te,null,r,tt);for(J in r)if(tt=r[J],ot=a[J],r.hasOwnProperty(J)&&tt!==ot&&(tt!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Xe(e,n,J,tt,r,ot)}return;default:if(Ri(n)){for(var ke in a)tt=a[ke],a.hasOwnProperty(ke)&&tt!==void 0&&!r.hasOwnProperty(ke)&&uh(e,n,ke,void 0,r,tt);for(ft in r)tt=r[ft],ot=a[ft],!r.hasOwnProperty(ft)||tt===ot||tt===void 0&&ot===void 0||uh(e,n,ft,tt,r,ot);return}}for(var Z in a)tt=a[Z],a.hasOwnProperty(Z)&&tt!=null&&!r.hasOwnProperty(Z)&&Xe(e,n,Z,null,r,tt);for(mt in r)tt=r[mt],ot=a[mt],!r.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||Xe(e,n,mt,tt,r,ot)}function D0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function HS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,S=c.initiatorType,A=c.duration;if(f&&A&&D0(S)){for(S=0,A=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],J=I.startTime;if(J>A)break;var ft=I.transferSize,mt=I.initiatorType;ft&&D0(mt)&&(I=I.responseEnd,S+=ft*(I<A?1:(A-J)/(I-J)))}if(--r,n+=8*(f+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ch=null,fh=null;function du(e){return e.nodeType===9?e:e.ownerDocument}function U0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function hh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dh=null;function VS(){var e=window.event;return e&&e.type==="popstate"?e===dh?!1:(dh=e,!0):(dh=null,!1)}var N0=typeof setTimeout=="function"?setTimeout:void 0,GS=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,XS=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(e){return O0.resolve(null).then(e).catch(kS)}:N0;function kS(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function P0(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),yr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[ls]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Bo(e.ownerDocument.body);a=c}while(a);yr(n)}function z0(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function ph(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ph(a),eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function WS(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ls])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function qS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function B0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function mh(e){return e.data==="$?"||e.data==="$~"}function gh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function YS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _h=null;function F0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function I0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function H0(e,n,a){switch(n=du(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);eo(e)}var Si=new Map,V0=new Set;function pu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=H.d;H.d={f:jS,r:ZS,D:KS,C:QS,L:JS,m:$S,X:ey,S:ty,M:ny};function jS(){var e=ma.f(),n=su();return e||n}function ZS(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?ag(n):ma.r(e)}var vr=typeof document>"u"?null:document;function G0(e,n,a){var r=vr;if(r&&typeof n=="string"&&n){var c=se(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),V0.has(c)||(V0.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Un(n,"link",e),R(n),r.head.appendChild(n)))}}function KS(e){ma.D(e),G0("dns-prefetch",e,null)}function QS(e,n){ma.C(e,n),G0("preconnect",e,n)}function JS(e,n,a){ma.L(e,n,a);var r=vr;if(r&&e&&n){var c='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+se(a.imageSizes)+'"]')):c+='[href="'+se(e)+'"]';var f=c;switch(n){case"style":f=xr(e);break;case"script":f=Sr(e)}Si.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Fo(f))||n==="script"&&r.querySelector(Io(f))||(n=r.createElement("link"),Un(n,"link",e),R(n),r.head.appendChild(n)))}}function $S(e,n){ma.m(e,n);var a=vr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+se(r)+'"][href="'+se(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(e)}if(!Si.has(f)&&(e=g({rel:"modulepreload",href:e},n),Si.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}r=a.createElement("link"),Un(r,"link",e),R(r),a.head.appendChild(r)}}}function ty(e,n,a){ma.S(e,n,a);var r=vr;if(r&&e){var c=Ca(r).hoistableStyles,f=xr(e);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=r.querySelector(Fo(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(f))&&vh(e,a);var I=S=r.createElement("link");R(I),Un(I,"link",e),I._p=new Promise(function(J,ft){I.onload=J,I.onerror=ft}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,mu(S,n,r)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function ey(e,n){ma.X(e,n);var a=vr;if(a&&e){var r=Ca(a).hoistableScripts,c=Sr(e),f=r.get(c);f||(f=a.querySelector(Io(c)),f||(e=g({src:e,async:!0},n),(n=Si.get(c))&&xh(e,n),f=a.createElement("script"),R(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ny(e,n){ma.M(e,n);var a=vr;if(a&&e){var r=Ca(a).hoistableScripts,c=Sr(e),f=r.get(c);f||(f=a.querySelector(Io(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=Si.get(c))&&xh(e,n),f=a.createElement("script"),R(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function X0(e,n,a,r){var c=(c=et.current)?pu(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=Ca(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xr(a.href);var f=Ca(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(Fo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),f||iy(c,e,a,S.state))),n&&r===null)throw Error(s(528,""));return S}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=Ca(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xr(e){return'href="'+se(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function k0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function iy(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Un(n,"link",a),R(n),e.head.appendChild(n))}function Sr(e){return'[src="'+se(e)+'"]'}function Io(e){return"script[async]"+e}function W0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(r)return n.instance=r,R(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),R(r),Un(r,"style",c),mu(r,a.precedence,e),n.instance=r;case"stylesheet":c=xr(a.href);var f=e.querySelector(Fo(c));if(f)return n.state.loading|=4,n.instance=f,R(f),f;r=k0(a),(c=Si.get(c))&&vh(r,c),f=(e.ownerDocument||e).createElement("link"),R(f);var S=f;return S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),Un(f,"link",r),n.state.loading|=4,mu(f,a.precedence,e),n.instance=f;case"script":return f=Sr(a.src),(c=e.querySelector(Io(f)))?(n.instance=c,R(c),c):(r=a,(c=Si.get(f))&&(r=g({},a),xh(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),R(c),Un(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,mu(r,a.precedence,e));return n.instance}function mu(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,S=0;S<r.length;S++){var A=r[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function vh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var gu=null;function q0(e,n,a){if(gu===null){var r=new Map,c=gu=new Map;c.set(a,r)}else c=gu,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ls]||f[un]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=r.get(S);A?A.push(f):r.set(S,[f])}}return r}function Y0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ay(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function j0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=xr(r.href),f=n.querySelector(Fo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_u.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,r=k0(r),(c=Si.get(c))&&vh(r,c),f=f.createElement("link"),R(f);var S=f;S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),Un(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_u.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Sh=0;function ry(e,n){return e.stylesheets&&e.count===0&&xu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&xu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Sh===0&&(Sh=62500*HS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Sh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function _u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vu=null;function xu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vu=new Map,n.forEach(oy,e),vu=null,_u.call(e))}function oy(e,n){if(!(n.state.loading&4)){var a=vu.get(e);if(a)var r=a.get(null);else{a=new Map,vu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),r=S)}r&&a.set(null,r)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||r,f===r&&a.set(null,c),a.set(S,c),this.count++,r=_u.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ho={$$typeof:D,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function ly(e,n,a,r,c,f,S,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Z0(e,n,a,r,c,f,S,A,I,J,ft,mt){return e=new ly(e,n,a,S,I,J,ft,mt,A),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=Jc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},nf(f),e}function K0(e){return e?(e=Qs,e):Qs}function Q0(e,n,a,r,c,f){c=K0(c),r.context===null?r.context=c:r.pendingContext=c,r=Pa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=za(e,r,n),a!==null&&(Zn(a,e,n),vo(a,e,n))}function J0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function yh(e,n){J0(e,n),(e=e.alternate)&&J0(e,n)}function $0(e){if(e.tag===13||e.tag===31){var n=ds(e,67108864);n!==null&&Zn(n,e,67108864),yh(e,67108864)}}function t_(e){if(e.tag===13||e.tag===31){var n=ai();n=Jr(n);var a=ds(e,n);a!==null&&Zn(a,e,n),yh(e,n)}}var Su=!0;function uy(e,n,a,r){var c=F.T;F.T=null;var f=H.p;try{H.p=2,Mh(e,n,a,r)}finally{H.p=f,F.T=c}}function cy(e,n,a,r){var c=F.T;F.T=null;var f=H.p;try{H.p=8,Mh(e,n,a,r)}finally{H.p=f,F.T=c}}function Mh(e,n,a,r){if(Su){var c=Eh(r);if(c===null)lh(e,n,r,yu,a),n_(e,r);else if(hy(c,e,n,a,r))r.stopPropagation();else if(n_(e,r),n&4&&-1<fy.indexOf(e)){for(;c!==null;){var f=Ra(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=St(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var I=1<<31-Ot(S);A.entanglements[1]|=I,S&=~I}Gi(f),(Oe&6)===0&&(iu=E()+500,Oo(0))}}break;case 31:case 13:A=ds(f,2),A!==null&&Zn(A,f,2),su(),yh(f,2)}if(f=Eh(r),f===null&&lh(e,n,r,yu,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else lh(e,n,r,null,a)}}function Eh(e){return e=bc(e),bh(e)}var yu=null;function bh(e){if(yu=null,e=Aa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return yu=e,null}function e_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ht:return 2;case vt:return 8;case lt:case jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Th=!1,Ya=null,ja=null,Za=null,Vo=new Map,Go=new Map,Ka=[],fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n_(e,n){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Xo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ra(n),n!==null&&$0(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function hy(e,n,a,r,c){switch(n){case"focusin":return Ya=Xo(Ya,e,n,a,r,c),!0;case"dragenter":return ja=Xo(ja,e,n,a,r,c),!0;case"mouseover":return Za=Xo(Za,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Vo.set(f,Xo(Vo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Go.set(f,Xo(Go.get(f)||null,e,n,a,r,c)),!0}return!1}function i_(e){var n=Aa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Fi(e.priority,function(){t_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Fi(e.priority,function(){t_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ec=r,a.target.dispatchEvent(r),Ec=null}else return n=Ra(a),n!==null&&$0(n),e.blockedOn=a,!1;n.shift()}return!0}function a_(e,n,a){Mu(e)&&a.delete(n)}function dy(){Th=!1,Ya!==null&&Mu(Ya)&&(Ya=null),ja!==null&&Mu(ja)&&(ja=null),Za!==null&&Mu(Za)&&(Za=null),Vo.forEach(a_),Go.forEach(a_)}function Eu(e,n){e.blockedOn===n&&(e.blockedOn=null,Th||(Th=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dy)))}var bu=null;function s_(e){bu!==e&&(bu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){bu===e&&(bu=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(bh(r||a)===null)continue;break}var f=Ra(a);f!==null&&(e.splice(n,3),n-=3,Ef(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function yr(e){function n(I){return Eu(I,e)}Ya!==null&&Eu(Ya,e),ja!==null&&Eu(ja,e),Za!==null&&Eu(Za,e),Vo.forEach(n),Go.forEach(n);for(var a=0;a<Ka.length;a++){var r=Ka[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)i_(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],S=c[Mn]||null;if(typeof f=="function")S||s_(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Mn]||null)A=S.formAction;else if(bh(c)!==null)continue}else A=S.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),s_(a)}}}function r_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Ah(e){this._internalRoot=e}Tu.prototype.render=Ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ai();Q0(a,r,e,n,null,null)},Tu.prototype.unmount=Ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Q0(e.current,2,null,e,null,null),su(),n[Ai]=null}};function Tu(e){this._internalRoot=e}Tu.prototype.unstable_scheduleHydration=function(e){if(e){var n=$r();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&i_(e)}};var o_=t.version;if(o_!=="19.2.3")throw Error(s(527,o_,"19.2.3"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var py={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Mt=Au.inject(py),Et=Au}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=pg,f=mg,S=gg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Z0(e,1,!1,null,null,a,r,null,c,f,S,r_),e[Ai]=n.current,oh(e),new Ah(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=pg,S=mg,A=gg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Z0(e,1,!0,n,a??null,r,c,I,f,S,A,r_),n.context=K0(null),a=n.current,r=ai(),r=Jr(r),c=Pa(r),c.callback=null,za(a,c,r),a=r,n.current.lanes=a,Nn(n,a),Gi(n),e[Ai]=n.current,oh(e),new Tu(n)},Wo.version="19.2.3",Wo}var __;function by(){if(__)return wh.exports;__=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),wh.exports=Ey(),wh.exports}var Ty=by();const dp="182",Ay=0,v_=1,Ry=2,ec=1,Cy=2,nl=3,os=0,Kn=1,Ma=2,ji=0,Bs=1,md=2,x_=3,S_=4,wy=5,Ns=100,Dy=101,Uy=102,Ly=103,Ny=104,Oy=200,Py=201,zy=202,By=203,gd=204,_d=205,Fy=206,Iy=207,Hy=208,Vy=209,Gy=210,Xy=211,ky=212,Wy=213,qy=214,vd=0,xd=1,Sd=2,Xr=3,yd=4,Md=5,Ed=6,bd=7,pp=0,Yy=1,jy=2,Zi=0,Cv=1,mp=2,wv=3,Dv=4,Uv=5,Lv=6,Nv=7,Ov=300,Fs=301,kr=302,Td=303,Ad=304,_c=306,Rd=1e3,Ea=1001,Cd=1002,Ln=1003,Zy=1004,Ru=1005,Bn=1006,Nh=1007,Ps=1008,li=1009,Pv=1010,zv=1011,rl=1012,gp=1013,Ki=1014,qi=1015,ui=1016,_p=1017,vp=1018,ol=1020,Bv=35902,Fv=35899,Iv=1021,Hv=1022,Pi=1023,Ta=1026,zs=1027,Vv=1028,xp=1029,Wr=1030,Sp=1031,yp=1033,nc=33776,ic=33777,ac=33778,sc=33779,wd=35840,Dd=35841,Ud=35842,Ld=35843,Nd=36196,Od=37492,Pd=37496,zd=37488,Bd=37489,Fd=37490,Id=37491,Hd=37808,Vd=37809,Gd=37810,Xd=37811,kd=37812,Wd=37813,qd=37814,Yd=37815,jd=37816,Zd=37817,Kd=37818,Qd=37819,Jd=37820,$d=37821,tp=36492,ep=36494,np=36495,ip=36283,ap=36284,sp=36285,rp=36286,Ky=3200,Mp=0,Qy=1,as="",oi="srgb",qr="srgb-linear",uc="linear",Ve="srgb",Mr=7680,y_=519,Jy=512,$y=513,tM=514,Ep=515,eM=516,nM=517,bp=518,iM=519,op=35044,M_="300 es",Yi=2e3,cc=2001;function Gv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ll(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function aM(){const o=ll("canvas");return o.style.display="block",o}const E_={};function fc(...o){const t="THREE."+o.shift();console.log(t,...o)}function ie(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Re(...o){const t="THREE."+o.shift();console.error(t,...o)}function ul(...o){const t=o.join(" ");t in E_||(E_[t]=!0,ie(...o))}function sM(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Zr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=Math.PI/180,lp=180/Math.PI;function rs(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function be(o,t,i){return Math.max(t,Math.min(i,o))}function rM(o,t){return(o%t+t)%t}function Ph(o,t,i){return(1-i)*o+i*t}function Wi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function We(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ee{constructor(t=0,i=0){ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],x=u[h+0],M=u[h+1],b=u[h+2],T=u[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d>=1){t[i+0]=x,t[i+1]=M,t[i+2]=b,t[i+3]=T;return}if(g!==T||m!==x||p!==M||_!==b){let y=m*x+p*M+_*b+g*T;y<0&&(x=-x,M=-M,b=-b,T=-T,y=-y);let v=1-d;if(y<.9995){const L=Math.acos(y),D=Math.sin(L);v=Math.sin(v*L)/D,d=Math.sin(d*L)/D,m=m*v+x*d,p=p*v+M*d,_=_*v+b*d,g=g*v+T*d}else{m=m*v+x*d,p=p*v+M*d,_=_*v+b*d,g=g*v+T*d;const L=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=L,p*=L,_*=L,g*=L}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=u[h],x=u[h+1],M=u[h+2],b=u[h+3];return t[i]=d*b+_*g+m*M-p*x,t[i+1]=m*b+_*x+p*g-d*M,t[i+2]=p*b+_*M+d*x-m*g,t[i+3]=_*b-d*g-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(u/2),x=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=x*_*g+p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g-x*M*b;break;case"YXZ":this._x=x*_*g+p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g+x*M*b;break;case"ZXY":this._x=x*_*g-p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g-x*M*b;break;case"ZYX":this._x=x*_*g-p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g+x*M*b;break;case"YZX":this._x=x*_*g+p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g-x*M*b;break;case"XZY":this._x=x*_*g-p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g+x*M*b;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=s+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-s*p,this._z=u*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(b_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(b_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-u*l),g=2*(u*s-h*i);return this.x=i+m*p+h*g-d*_,this.y=s+m*_+d*p-u*g,this.z=l+m*g+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return zh.copy(this).projectOnVector(t),this.sub(zh)}reflect(t){return this.sub(zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zh=new j,b_=new fl;class he{constructor(t,i,s,l,u,h,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],x=s[2],M=s[5],b=s[8],T=l[0],y=l[3],v=l[6],L=l[1],D=l[4],U=l[7],N=l[2],z=l[5],O=l[8];return u[0]=h*T+d*L+m*N,u[3]=h*y+d*D+m*z,u[6]=h*v+d*U+m*O,u[1]=p*T+_*L+g*N,u[4]=p*y+_*D+g*z,u[7]=p*v+_*U+g*O,u[2]=x*T+M*L+b*N,u[5]=x*y+M*D+b*z,u[8]=x*v+M*U+b*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*u*_+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,x=d*m-_*u,M=p*u-h*m,b=i*g+s*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=g*T,t[1]=(l*p-_*s)*T,t[2]=(d*s-l*h)*T,t[3]=x*T,t[4]=(_*i-l*m)*T,t[5]=(l*u-d*i)*T,t[6]=M*T,t[7]=(s*m-p*i)*T,t[8]=(h*i-s*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Bh.makeScale(t,i)),this}rotate(t){return this.premultiply(Bh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Bh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new he,T_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oM(){const o={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ve&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?uc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ul("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ul("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[qr]:{primaries:t,whitePoint:s,transfer:uc,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),o}const Ce=oM();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Gr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Er;class lM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Er===void 0&&(Er=ll("canvas")),Er.width=t.width,Er.height=t.height;const l=Er.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ll("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ba(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uM=0;class Tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Fh(l[h].image)):u.push(Fh(l[h]))}else u=Fh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Fh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?lM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let cM=0;const Ih=new j;class In extends Zr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=Ea,l=Ea,u=Bn,h=Ps,d=Pi,m=li,p=In.DEFAULT_ANISOTROPY,_=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=rs(),this.name="",this.source=new Tp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ov)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rd:t.x=t.x-Math.floor(t.x);break;case Ea:t.x=t.x<0?0:1;break;case Cd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rd:t.y=t.y-Math.floor(t.y);break;case Ea:t.y=t.y<0?0:1;break;case Cd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Ov;In.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],M=m[5],b=m[9],T=m[2],y=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+T)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,U=(M+1)/2,N=(v+1)/2,z=(_+x)/4,O=(g+T)/4,q=(b+y)/4;return D>U&&D>N?D<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(D),l=z/s,u=O/s):U>N?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=z/l,u=q/l):N<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(N),s=O/u,l=q/u),this.set(s,l,u,i),this}let L=Math.sqrt((y-b)*(y-b)+(g-T)*(g-T)+(x-_)*(x-_));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(g-T)/L,this.z=(x-_)/L,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fM extends Zr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new In(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Tp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends fM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Xv extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hM extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ui):Ui.fromBufferAttribute(u,h),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cu.copy(s.boundingBox)),Cu.applyMatrix4(t.matrixWorld),this.union(Cu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),wu.subVectors(this.max,qo),br.subVectors(t.a,qo),Tr.subVectors(t.b,qo),Ar.subVectors(t.c,qo),Ja.subVectors(Tr,br),$a.subVectors(Ar,Tr),As.subVectors(br,Ar);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-As.z,As.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,As.z,0,-As.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-As.y,As.x,0];return!Hh(i,br,Tr,Ar,wu)||(i=[1,0,0,0,1,0,0,0,1],!Hh(i,br,Tr,Ar,wu))?!1:(Du.crossVectors(Ja,$a),i=[Du.x,Du.y,Du.z],Hh(i,br,Tr,Ar,wu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ga),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ga=[new j,new j,new j,new j,new j,new j,new j,new j],Ui=new j,Cu=new Is,br=new j,Tr=new j,Ar=new j,Ja=new j,$a=new j,As=new j,qo=new j,wu=new j,Du=new j,Rs=new j;function Hh(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Rs.fromArray(o,u);const d=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),m=t.dot(Rs),p=i.dot(Rs),_=s.dot(Rs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const dM=new Is,Yo=new j,Vh=new j;class hl{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):dM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Vh)),this.expandByPoint(Yo.copy(t.center).sub(Vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const _a=new j,Gh=new j,Uu=new j,ts=new j,Xh=new j,Lu=new j,kh=new j;class Ap{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_a)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=_a.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Gh.copy(t).add(i).multiplyScalar(.5),Uu.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(Gh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Uu),d=ts.dot(this.direction),m=-ts.dot(Uu),p=ts.lengthSq(),_=Math.abs(1-h*h);let g,x,M,b;if(_>0)if(g=h*m-d,x=h*d-m,b=u*_,g>=0)if(x>=-b)if(x<=b){const T=1/_;g*=T,x*=T,M=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=u,g=Math.max(0,-(h*x+d)),M=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(h*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-h*u+d)),x=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(g=Math.max(0,-(h*u+d)),x=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+x*(x+2*m)+p);else x=h>0?-u:u,g=Math.max(0,-(h*x+d)),M=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Gh).addScaledVector(Uu,x),M}intersectSphere(t,i){_a.subVectors(t.center,this.origin);const s=_a.dot(this.direction),l=_a.dot(_a)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(u=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,_a)!==null}intersectTriangle(t,i,s,l,u){Xh.subVectors(i,t),Lu.subVectors(s,t),kh.crossVectors(Xh,Lu);let h=this.direction.dot(kh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ts.subVectors(this.origin,t);const m=d*this.direction.dot(Lu.crossVectors(ts,Lu));if(m<0)return null;const p=d*this.direction.dot(Xh.cross(ts));if(p<0||m+p>h)return null;const _=-d*ts.dot(kh);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,s,l,u,h,d,m,p,_,g,x,M,b,T,y){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,_,g,x,M,b,T,y)}set(t,i,s,l,u,h,d,m,p,_,g,x,M,b,T,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=M,v[7]=b,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),u=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const x=h*_,M=h*g,b=d*_,T=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,M=m*g,b=p*_,T=p*g;i[0]=x+T*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=M*d-b,i[6]=T+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,M=m*g,b=p*_,T=p*g;i[0]=x-T*d,i[4]=-h*g,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*_,i[9]=T-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,M=h*g,b=d*_,T=d*g;i[0]=m*_,i[4]=b*p-M,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,b=d*m,T=d*p;i[0]=m*_,i[4]=T-x*g,i[8]=b*g+M,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*g+b,i[10]=x-T*g}else if(t.order==="XZY"){const x=h*m,M=h*p,b=d*m,T=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+T,i[5]=h*_,i[9]=M*g-b,i[2]=b*g-M,i[6]=d*_,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pM,t,mM)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),es.crossVectors(s,si),es.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),es.crossVectors(s,si)),es.normalize(),Nu.crossVectors(si,es),l[0]=es.x,l[4]=Nu.x,l[8]=si.x,l[1]=es.y,l[5]=Nu.y,l[9]=si.y,l[2]=es.z,l[6]=Nu.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],x=s[9],M=s[13],b=s[2],T=s[6],y=s[10],v=s[14],L=s[3],D=s[7],U=s[11],N=s[15],z=l[0],O=l[4],q=l[8],C=l[12],w=l[1],G=l[5],nt=l[9],st=l[13],dt=l[2],ct=l[6],F=l[10],H=l[14],at=l[3],yt=l[7],xt=l[11],B=l[15];return u[0]=h*z+d*w+m*dt+p*at,u[4]=h*O+d*G+m*ct+p*yt,u[8]=h*q+d*nt+m*F+p*xt,u[12]=h*C+d*st+m*H+p*B,u[1]=_*z+g*w+x*dt+M*at,u[5]=_*O+g*G+x*ct+M*yt,u[9]=_*q+g*nt+x*F+M*xt,u[13]=_*C+g*st+x*H+M*B,u[2]=b*z+T*w+y*dt+v*at,u[6]=b*O+T*G+y*ct+v*yt,u[10]=b*q+T*nt+y*F+v*xt,u[14]=b*C+T*st+y*H+v*B,u[3]=L*z+D*w+U*dt+N*at,u[7]=L*O+D*G+U*ct+N*yt,u[11]=L*q+D*nt+U*F+N*xt,u[15]=L*C+D*st+U*H+N*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],M=t[14],b=t[3],T=t[7],y=t[11],v=t[15],L=m*M-p*x,D=d*M-p*g,U=d*x-m*g,N=h*M-p*_,z=h*x-m*_,O=h*g-d*_;return i*(T*L-y*D+v*U)-s*(b*L-y*N+v*z)+l*(b*D-T*N+v*O)-u*(b*U-T*z+y*O)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],M=t[11],b=t[12],T=t[13],y=t[14],v=t[15],L=g*y*p-T*x*p+T*m*M-d*y*M-g*m*v+d*x*v,D=b*x*p-_*y*p-b*m*M+h*y*M+_*m*v-h*x*v,U=_*T*p-b*g*p+b*d*M-h*T*M-_*d*v+h*g*v,N=b*g*m-_*T*m-b*d*x+h*T*x+_*d*y-h*g*y,z=i*L+s*D+l*U+u*N;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return t[0]=L*O,t[1]=(T*x*u-g*y*u-T*l*M+s*y*M+g*l*v-s*x*v)*O,t[2]=(d*y*u-T*m*u+T*l*p-s*y*p-d*l*v+s*m*v)*O,t[3]=(g*m*u-d*x*u-g*l*p+s*x*p+d*l*M-s*m*M)*O,t[4]=D*O,t[5]=(_*y*u-b*x*u+b*l*M-i*y*M-_*l*v+i*x*v)*O,t[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*v-i*m*v)*O,t[7]=(h*x*u-_*m*u+_*l*p-i*x*p-h*l*M+i*m*M)*O,t[8]=U*O,t[9]=(b*g*u-_*T*u-b*s*M+i*T*M+_*s*v-i*g*v)*O,t[10]=(h*T*u-b*d*u+b*s*p-i*T*p-h*s*v+i*d*v)*O,t[11]=(_*d*u-h*g*u-_*s*p+i*g*p+h*s*M-i*d*M)*O,t[12]=N*O,t[13]=(_*T*l-b*g*l+b*s*x-i*T*x-_*s*y+i*g*y)*O,t[14]=(b*d*l-h*T*l-b*s*m+i*T*m+h*s*y-i*d*y)*O,t[15]=(h*g*l-_*d*l+_*s*m-i*g*m-h*s*x+i*d*x)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,g=d+d,x=u*p,M=u*_,b=u*g,T=h*_,y=h*g,v=d*g,L=m*p,D=m*_,U=m*g,N=s.x,z=s.y,O=s.z;return l[0]=(1-(T+v))*N,l[1]=(M+U)*N,l[2]=(b-D)*N,l[3]=0,l[4]=(M-U)*z,l[5]=(1-(x+v))*z,l[6]=(y+L)*z,l[7]=0,l[8]=(b+D)*O,l[9]=(y-L)*O,l[10]=(1-(x+T))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=Rr.set(l[0],l[1],l[2]).length();const h=Rr.set(l[4],l[5],l[6]).length(),d=Rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Li.copy(this);const p=1/u,_=1/h,g=1/d;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=_,Li.elements[5]*=_,Li.elements[6]*=_,Li.elements[8]*=g,Li.elements[9]*=g,Li.elements[10]*=g,i.setFromRotationMatrix(Li),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Yi,m=!1){const p=this.elements,_=2*u/(i-t),g=2*u/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let b,T;if(m)b=u/(h-u),T=h*u/(h-u);else if(d===Yi)b=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===cc)b=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Yi,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,T;if(m)b=1/(h-u),T=h/(h-u);else if(d===Yi)b=-2/(h-u),T=-(h+u)/(h-u);else if(d===cc)b=-1/(h-u),T=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Rr=new j,Li=new Ke,pM=new j(0,0,0),mM=new j(1,1,1),es=new j,Nu=new j,si=new j,R_=new Ke,C_=new fl;class Qi{constructor(t=0,i=0,s=0,l=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return R_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(R_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return C_.setFromEuler(this),this.setFromQuaternion(C_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class kv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gM=0;const w_=new j,Cr=new fl,va=new Ke,Ou=new j,jo=new j,_M=new j,vM=new fl,D_=new j(1,0,0),U_=new j(0,1,0),L_=new j(0,0,1),N_={type:"added"},xM={type:"removed"},wr={type:"childadded",child:null},Wh={type:"childremoved",child:null};class _n extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new j,i=new Qi,s=new fl,l=new j(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new he}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(D_,t)}rotateY(t){return this.rotateOnAxis(U_,t)}rotateZ(t){return this.rotateOnAxis(L_,t)}translateOnAxis(t,i){return w_.copy(t).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(D_,t)}translateY(t){return this.translateOnAxis(U_,t)}translateZ(t){return this.translateOnAxis(L_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ou.copy(t):Ou.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(jo,Ou,this.up):va.lookAt(Ou,jo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(va),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(N_),wr.child=t,this.dispatchEvent(wr),wr.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xM),Wh.child=t,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(N_),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,_M),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,vM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),x=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}_n.DEFAULT_UP=new j(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new j,xa=new j,qh=new j,Sa=new j,Dr=new j,Ur=new j,O_=new j,Yh=new j,jh=new j,Zh=new j,Kh=new rn,Qh=new rn,Jh=new rn;class bi{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ni.subVectors(l,i),xa.subVectors(s,i),qh.subVectors(t,i);const h=Ni.dot(Ni),d=Ni.dot(xa),m=Ni.dot(qh),p=xa.dot(xa),_=xa.dot(qh),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,M=(p*m-d*_)*x,b=(h*_-d*m)*x;return u.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Sa.x),m.addScaledVector(h,Sa.y),m.addScaledVector(d,Sa.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return Kh.setScalar(0),Qh.setScalar(0),Jh.setScalar(0),Kh.fromBufferAttribute(t,i),Qh.fromBufferAttribute(t,s),Jh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Kh,u.x),h.addScaledVector(Qh,u.y),h.addScaledVector(Jh,u.z),h}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),xa.subVectors(t,i),Ni.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ni.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return bi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;Dr.subVectors(l,s),Ur.subVectors(u,s),Yh.subVectors(t,s);const m=Dr.dot(Yh),p=Ur.dot(Yh);if(m<=0&&p<=0)return i.copy(s);jh.subVectors(t,l);const _=Dr.dot(jh),g=Ur.dot(jh);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Dr,h);Zh.subVectors(t,u);const M=Dr.dot(Zh),b=Ur.dot(Zh);if(b>=0&&M<=b)return i.copy(u);const T=M*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Ur,d);const y=_*b-M*g;if(y<=0&&g-_>=0&&M-b>=0)return O_.subVectors(u,l),d=(g-_)/(g-_+(M-b)),i.copy(l).addScaledVector(O_,d);const v=1/(y+T+x);return h=T*v,d=x*v,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Pu={h:0,s:0,l:0};function $h(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class le{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=rM(t,1),i=be(i,0,1),s=be(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=$h(h,u,t+1/3),this.g=$h(h,u,t),this.b=$h(h,u,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=oi){function s(u){u!==void 0&&parseFloat(u)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ie("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const s=Wv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Ce.workingToColorSpace(zn.copy(this),t),Math.round(be(zn.r*255,0,255))*65536+Math.round(be(zn.g*255,0,255))*256+Math.round(be(zn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,u=zn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=oi){Ce.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,l=zn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Pu);const s=Ph(ns.h,Pu.h,i),l=Ph(ns.s,Pu.s,i),u=Ph(ns.l,Pu.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new le;le.NAMES=Wv;let SM=0;class Bi extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Bs,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gd&&(s.blendSrc=this.blendSrc),this.blendDst!==_d&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Rp extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new j,zu=new ee;let yM=0;class zi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=op,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)zu.fromBufferAttribute(this,i),zu.applyMatrix3(t),this.setXY(i,zu.x,zu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Wi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=We(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Wi(i,this.array)),i}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Wi(i,this.array)),i}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Wi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Wi(i,this.array)),i}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),s=We(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array),u=We(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==op&&(t.usage=this.usage),t}}class qv extends zi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Yv extends zi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class sn extends zi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let MM=0;const yi=new Ke,td=new _n,Lr=new j,ri=new Is,Zo=new Is,yn=new j;class Hn extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gv(t)?Yv:qv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new he().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return td.lookAt(t),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new sn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ri.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ri.min,Zo.min),ri.expandByPoint(yn),yn.addVectors(ri.max,Zo.max),ri.expandByPoint(yn)):(ri.expandByPoint(Zo.min),ri.expandByPoint(Zo.max))}ri.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)yn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)yn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(t,p),yn.add(Lr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<s.count;q++)d[q]=new j,m[q]=new j;const p=new j,_=new j,g=new j,x=new ee,M=new ee,b=new ee,T=new j,y=new j;function v(q,C,w){p.fromBufferAttribute(s,q),_.fromBufferAttribute(s,C),g.fromBufferAttribute(s,w),x.fromBufferAttribute(u,q),M.fromBufferAttribute(u,C),b.fromBufferAttribute(u,w),_.sub(p),g.sub(p),M.sub(x),b.sub(x);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(G),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(G),d[q].add(T),d[C].add(T),d[w].add(T),m[q].add(y),m[C].add(y),m[w].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let q=0,C=L.length;q<C;++q){const w=L[q],G=w.start,nt=w.count;for(let st=G,dt=G+nt;st<dt;st+=3)v(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const D=new j,U=new j,N=new j,z=new j;function O(q){N.fromBufferAttribute(l,q),z.copy(N);const C=d[q];D.copy(C),D.sub(N.multiplyScalar(N.dot(C))).normalize(),U.crossVectors(z,C);const G=U.dot(m[q])<0?-1:1;h.setXYZW(q,D.x,D.y,D.z,G)}for(let q=0,C=L.length;q<C;++q){const w=L[q],G=w.start,nt=w.count;for(let st=G,dt=G+nt;st<dt;st+=3)O(t.getX(st+0)),O(t.getX(st+1)),O(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new j,u=new j,h=new j,d=new j,m=new j,p=new j,_=new j,g=new j;if(t)for(let x=0,M=t.count;x<M;x+=3){const b=t.getX(x+0),T=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let M=0,b=0;for(let T=0,y=m.length;T<y;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*_;for(let v=0;v<_;v++)x[b++]=p[M++]}return new zi(x,_,g)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let x=0,M=g.length;x<M;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const P_=new Ke,Cs=new Ap,Bu=new hl,z_=new j,Fu=new j,Iu=new j,Hu=new j,ed=new j,Vu=new j,B_=new j,Gu=new j;class ci extends _n{constructor(t=new Hn,i=new Rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Vu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],g=u[m];_!==0&&(ed.fromBufferAttribute(g,t),h?Vu.addScaledVector(ed,_):Vu.addScaledVector(ed.sub(i),_))}i.add(Vu)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bu.copy(s.boundingSphere),Bu.applyMatrix4(u),Cs.copy(t.ray).recast(t.near),!(Bu.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Bu,z_)===null||Cs.origin.distanceToSquared(z_)>(t.far-t.near)**2))&&(P_.copy(u).invert(),Cs.copy(t.ray).applyMatrix4(P_),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Cs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,T=x.length;b<T;b++){const y=x[b],v=h[y.materialIndex],L=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=L,N=D;U<N;U+=3){const z=d.getX(U),O=d.getX(U+1),q=d.getX(U+2);l=Xu(this,v,t,s,p,_,g,z,O,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const L=d.getX(y),D=d.getX(y+1),U=d.getX(y+2);l=Xu(this,h,t,s,p,_,g,L,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,T=x.length;b<T;b++){const y=x[b],v=h[y.materialIndex],L=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=L,N=D;U<N;U+=3){const z=U,O=U+1,q=U+2;l=Xu(this,v,t,s,p,_,g,z,O,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const L=y,D=y+1,U=y+2;l=Xu(this,h,t,s,p,_,g,L,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function EM(o,t,i,s,l,u,h,d){let m;if(t.side===Kn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===os,d),m===null)return null;Gu.copy(d),Gu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Gu);return p<i.near||p>i.far?null:{distance:p,point:Gu.clone(),object:o}}function Xu(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,Fu),o.getVertexPosition(m,Iu),o.getVertexPosition(p,Hu);const _=EM(o,t,i,s,Fu,Iu,Hu,B_);if(_){const g=new j;bi.getBarycoord(B_,Fu,Iu,Hu,g),l&&(_.uv=bi.getInterpolatedAttribute(l,d,m,p,g,new ee)),u&&(_.uv1=bi.getInterpolatedAttribute(u,d,m,p,g,new ee)),h&&(_.normal=bi.getInterpolatedAttribute(h,d,m,p,g,new j),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new j,materialIndex:0};bi.getNormal(Fu,Iu,Hu,x.normal),_.face=x,_.barycoord=g}return _}class dl extends Hn{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],g=[];let x=0,M=0;b("z","y","x",-1,-1,s,i,t,h,u,0),b("z","y","x",1,-1,s,i,-t,h,u,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,u,4),b("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(g,2));function b(T,y,v,L,D,U,N,z,O,q,C){const w=U/O,G=N/q,nt=U/2,st=N/2,dt=z/2,ct=O+1,F=q+1;let H=0,at=0;const yt=new j;for(let xt=0;xt<F;xt++){const B=xt*G-st;for(let it=0;it<ct;it++){const gt=it*w-nt;yt[T]=gt*L,yt[y]=B*D,yt[v]=dt,p.push(yt.x,yt.y,yt.z),yt[T]=0,yt[y]=0,yt[v]=z>0?1:-1,_.push(yt.x,yt.y,yt.z),g.push(it/O),g.push(1-xt/q),H+=1}}for(let xt=0;xt<q;xt++)for(let B=0;B<O;B++){const it=x+B+ct*xt,gt=x+B+ct*(xt+1),Tt=x+(B+1)+ct*(xt+1),Ft=x+(B+1)+ct*xt;m.push(it,gt,Ft),m.push(gt,Tt,Ft),at+=6}d.addGroup(M,at,C),M+=at,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Xn(o){const t={};for(let i=0;i<o.length;i++){const s=Yr(o[i]);for(const l in s)t[l]=s[l]}return t}function bM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function jv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const hc={clone:Yr,merge:Xn};var TM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=bM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Zv extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new j,F_=new ee,I_=new ee;class Ei extends Zv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=lp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lp*2*Math.atan(Math.tan(Oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,F_,I_),i.subVectors(I_,F_)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Oh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Nr=-90,Or=1;class RM extends _n{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Nr,Or,t,i);l.layers=this.layers,this.add(l);const u=new Ei(Nr,Or,t,i);u.layers=this.layers,this.add(u);const h=new Ei(Nr,Or,t,i);h.layers=this.layers,this.add(h);const d=new Ei(Nr,Or,t,i);d.layers=this.layers,this.add(d);const m=new Ei(Nr,Or,t,i);m.layers=this.layers,this.add(m);const p=new Ei(Nr,Or,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===cc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,x,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Kv extends In{constructor(t=[],i=Fs,s,l,u,h,d,m,p,_){super(t,i,s,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qv extends Qn{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Kv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new dl(5,5,5),u=new Fn({name:"CubemapFromEquirect",uniforms:Yr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:ji});u.uniforms.tEquirect.value=i;const h=new ci(l,u),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Bn),new RM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Vr extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,s),v=this._getHandJoint(p,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Vr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class wM extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class DM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=op,this.updateRanges=[],this.version=0,this.uuid=rs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new j;class dc{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Wi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=We(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Wi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Wi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Wi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Wi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),s=We(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array),u=We(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){fc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new zi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new dc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jv extends Bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pr;const Ko=new j,zr=new j,Br=new j,Fr=new ee,Qo=new ee,$v=new Ke,ku=new j,Jo=new j,Wu=new j,H_=new ee,id=new ee,V_=new ee;class UM extends _n{constructor(t=new Jv){if(super(),this.isSprite=!0,this.type="Sprite",Pr===void 0){Pr=new Hn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new DM(i,5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute("position",new dc(s,3,0,!1)),Pr.setAttribute("uv",new dc(s,2,3,!1))}this.geometry=Pr,this.material=t,this.center=new ee(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),$v.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Br.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Br.z);const s=this.material.rotation;let l,u;s!==0&&(u=Math.cos(s),l=Math.sin(s));const h=this.center;qu(ku.set(-.5,-.5,0),Br,h,zr,l,u),qu(Jo.set(.5,-.5,0),Br,h,zr,l,u),qu(Wu.set(.5,.5,0),Br,h,zr,l,u),H_.set(0,0),id.set(1,0),V_.set(1,1);let d=t.ray.intersectTriangle(ku,Jo,Wu,!1,Ko);if(d===null&&(qu(Jo.set(-.5,.5,0),Br,h,zr,l,u),id.set(0,1),d=t.ray.intersectTriangle(ku,Wu,Jo,!1,Ko),d===null))return;const m=t.ray.origin.distanceTo(Ko);m<t.near||m>t.far||i.push({distance:m,point:Ko.clone(),uv:bi.getInterpolation(Ko,ku,Jo,Wu,H_,id,V_,new ee),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qu(o,t,i,s,l,u){Fr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Qo.x=u*Fr.x-l*Fr.y,Qo.y=l*Fr.x+u*Fr.y):Qo.copy(Fr),o.copy(t),o.x+=Qo.x,o.y+=Qo.y,o.applyMatrix4($v)}class LM extends In{constructor(t=null,i=1,s=1,l,u,h,d,m,p=Ln,_=Ln,g,x){super(null,h,d,m,p,_,l,u,g,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ad=new j,NM=new j,OM=new he;class Ls{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=ad.subVectors(s,i).cross(NM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(ad),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||OM.getNormalMatrix(t),l=this.coplanarPoint(ad).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new hl,PM=new ee(.5,.5),Yu=new j;class Cp{constructor(t=new Ls,i=new Ls,s=new Ls,l=new Ls,u=new Ls,h=new Ls){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Yi,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],_=u[4],g=u[5],x=u[6],M=u[7],b=u[8],T=u[9],y=u[10],v=u[11],L=u[12],D=u[13],U=u[14],N=u[15];if(l[0].setComponents(p-h,M-_,v-b,N-L).normalize(),l[1].setComponents(p+h,M+_,v+b,N+L).normalize(),l[2].setComponents(p+d,M+g,v+T,N+D).normalize(),l[3].setComponents(p-d,M-g,v-T,N-D).normalize(),s)l[4].setComponents(m,x,y,U).normalize(),l[5].setComponents(p-m,M-x,v-y,N-U).normalize();else if(l[4].setComponents(p-m,M-x,v-y,N-U).normalize(),i===Yi)l[5].setComponents(p+m,M+x,v+y,N+U).normalize();else if(i===cc)l[5].setComponents(m,x,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const i=PM.distanceTo(t.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Yu.x=l.normal.x>0?t.max.x:t.min.x,Yu.y=l.normal.y>0?t.max.y:t.min.y,Yu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Yu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rc extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pc=new j,mc=new j,G_=new Ke,$o=new Ap,ju=new hl,sd=new j,X_=new j;class zM extends _n{constructor(t=new Hn,i=new rc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)pc.fromBufferAttribute(i,l-1),mc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=pc.distanceTo(mc);t.setAttribute("lineDistance",new sn(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ju.copy(s.boundingSphere),ju.applyMatrix4(l),ju.radius+=u,t.ray.intersectsSphere(ju)===!1)return;G_.copy(l).invert(),$o.copy(t.ray).applyMatrix4(G_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const M=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let T=M,y=b-1;T<y;T+=p){const v=_.getX(T),L=_.getX(T+1),D=Zu(this,t,$o,m,v,L,T);D&&i.push(D)}if(this.isLineLoop){const T=_.getX(b-1),y=_.getX(M),v=Zu(this,t,$o,m,T,y,b-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let T=M,y=b-1;T<y;T+=p){const v=Zu(this,t,$o,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Zu(this,t,$o,m,b-1,M,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Zu(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(pc.fromBufferAttribute(d,l),mc.fromBufferAttribute(d,u),i.distanceSqToSegment(pc,mc,sd,X_)>s)return;sd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(sd);if(!(p<t.near||p>t.far))return{distance:p,point:X_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const k_=new j,W_=new j;class q_ extends zM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)k_.fromBufferAttribute(i,l),W_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+k_.distanceTo(W_);t.setAttribute("lineDistance",new sn(s,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class il extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Y_=new Ke,up=new Ap,Ku=new hl,Qu=new j;class rd extends _n{constructor(t=new Hn,i=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ku.copy(s.boundingSphere),Ku.applyMatrix4(l),Ku.radius+=u,t.ray.intersectsSphere(Ku)===!1)return;Y_.copy(l).invert(),up.copy(t.ray).applyMatrix4(Y_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=x,T=M;b<T;b++){const y=p.getX(b);Qu.fromBufferAttribute(g,y),j_(Qu,y,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let b=x,T=M;b<T;b++)Qu.fromBufferAttribute(g,b),j_(Qu,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function j_(o,t,i,s,l,u,h){const d=up.distanceSqToPoint(o);if(d<i){const m=new j;up.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class cl extends In{constructor(t,i,s=Ki,l,u,h,d=Ln,m=Ln,p,_=Ta,g=1){if(_!==Ta&&_!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,u,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class BM extends cl{constructor(t,i=Ki,s=Fs,l,u,h=Ln,d=Ln,m,p=Ta){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,s,l,u,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class tx extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vc extends Hn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=t/d,x=i/m,M=[],b=[],T=[],y=[];for(let v=0;v<_;v++){const L=v*x-h;for(let D=0;D<p;D++){const U=D*g-u;b.push(U,-L,0),T.push(0,0,1),y.push(D/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const D=L+p*v,U=L+p*(v+1),N=L+1+p*(v+1),z=L+1+p*v;M.push(D,U,z),M.push(U,N,z)}this.setIndex(M),this.setAttribute("position",new sn(b,3)),this.setAttribute("normal",new sn(T,3)),this.setAttribute("uv",new sn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.width,t.height,t.widthSegments,t.heightSegments)}}class wp extends Hn{constructor(t=1,i=.4,s=64,l=8,u=2,h=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:s,radialSegments:l,p:u,q:h},s=Math.floor(s),l=Math.floor(l);const d=[],m=[],p=[],_=[],g=new j,x=new j,M=new j,b=new j,T=new j,y=new j,v=new j;for(let D=0;D<=s;++D){const U=D/s*u*Math.PI*2;L(U,u,h,t,M),L(U+.01,u,h,t,b),y.subVectors(b,M),v.addVectors(b,M),T.crossVectors(y,v),v.crossVectors(T,y),T.normalize(),v.normalize();for(let N=0;N<=l;++N){const z=N/l*Math.PI*2,O=-i*Math.cos(z),q=i*Math.sin(z);g.x=M.x+(O*v.x+q*T.x),g.y=M.y+(O*v.y+q*T.y),g.z=M.z+(O*v.z+q*T.z),m.push(g.x,g.y,g.z),x.subVectors(g,M).normalize(),p.push(x.x,x.y,x.z),_.push(D/s),_.push(N/l)}}for(let D=1;D<=s;D++)for(let U=1;U<=l;U++){const N=(l+1)*(D-1)+(U-1),z=(l+1)*D+(U-1),O=(l+1)*D+U,q=(l+1)*(D-1)+U;d.push(N,z,q),d.push(z,O,q)}this.setIndex(d),this.setAttribute("position",new sn(m,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(_,2));function L(D,U,N,z,O){const q=Math.cos(D),C=Math.sin(D),w=N/U*D,G=Math.cos(w);O.x=z*(2+G)*.5*q,O.y=z*(2+G)*C*.5,O.z=z*Math.sin(w)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wp(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class FM extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class IM extends Bi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new le(16777215),this.specular=new le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mp,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class HM extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VM extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class GM extends Bi{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new le(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mp,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}const sl={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class XM{constructor(t,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){d++,u===!1&&l.onStart!==void 0&&l.onStart(_,h,d),u=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=p.length;g<x;g+=2){const M=p[g],b=p[g+1];if(M.global&&(M.lastIndex=0),M.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kM=new XM;class pl{constructor(t){this.manager=t!==void 0?t:kM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,u){s.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}pl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ya={};class WM extends Error{constructor(t,i){super(t),this.response=i}}class qM extends pl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=sl.get(`file:${t}`);if(u!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(u),this.manager.itemEnd(t)},0),u;if(ya[t]!==void 0){ya[t].push({onLoad:i,onProgress:s,onError:l});return}ya[t]=[],ya[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const _=ya[t],g=p.body.getReader(),x=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=x?parseInt(x):0,b=M!==0;let T=0;const y=new ReadableStream({start(v){L();function L(){g.read().then(({done:D,value:U})=>{if(D)v.close();else{T+=U.byteLength;const N=new ProgressEvent("progress",{lengthComputable:b,loaded:T,total:M});for(let z=0,O=_.length;z<O;z++){const q=_[z];q.onProgress&&q.onProgress(N)}v.enqueue(U),L()}},D=>{v.error(D)})}}});return new Response(y)}else throw new WM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(_=>new DOMParser().parseFromString(_,d));case"json":return p.json();default:if(d==="")return p.text();{const g=/charset="?([^;"\s]*)"?/i.exec(d),x=g&&g[1]?g[1].toLowerCase():void 0,M=new TextDecoder(x);return p.arrayBuffer().then(b=>M.decode(b))}}}).then(p=>{sl.add(`file:${t}`,p);const _=ya[t];delete ya[t];for(let g=0,x=_.length;g<x;g++){const M=_[g];M.onLoad&&M.onLoad(p)}}).catch(p=>{const _=ya[t];if(_===void 0)throw this.manager.itemError(t),p;delete ya[t];for(let g=0,x=_.length;g<x;g++){const M=_[g];M.onError&&M.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ir=new WeakMap;class YM extends pl{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=sl.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0);else{let g=Ir.get(h);g===void 0&&(g=[],Ir.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=ll("img");function m(){_(),i&&i(this);const g=Ir.get(this)||[];for(let x=0;x<g.length;x++){const M=g[x];M.onLoad&&M.onLoad(this)}Ir.delete(this),u.manager.itemEnd(t)}function p(g){_(),l&&l(g),sl.remove(`image:${t}`);const x=Ir.get(this)||[];for(let M=0;M<x.length;M++){const b=x[M];b.onError&&b.onError(g)}Ir.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),sl.add(`image:${t}`,d),u.manager.itemStart(t),d.src=t,d}}class ex extends pl{constructor(t){super(t)}load(t,i,s,l){const u=new In,h=new YM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class nx extends _n{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const od=new Ke,Z_=new j,K_=new j;class jM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cp,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Z_.setFromMatrixPosition(t.matrixWorld),i.position.copy(Z_),K_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(K_),i.updateMatrixWorld(),od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(od)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xc extends Zv{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZM extends jM{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class KM extends nx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new ZM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class QM extends nx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class JM extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ix{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Q_(o,t,i,s){const l=$M(s);switch(i){case Iv:return o*t;case Vv:return o*t/l.components*l.byteLength;case xp:return o*t/l.components*l.byteLength;case Wr:return o*t*2/l.components*l.byteLength;case Sp:return o*t*2/l.components*l.byteLength;case Hv:return o*t*3/l.components*l.byteLength;case Pi:return o*t*4/l.components*l.byteLength;case yp:return o*t*4/l.components*l.byteLength;case nc:case ic:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ac:case sc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Dd:case Ld:return Math.max(o,16)*Math.max(t,8)/4;case wd:case Ud:return Math.max(o,8)*Math.max(t,8)/2;case Nd:case Od:case zd:case Bd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Pd:case Fd:case Id:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case kd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case qd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case jd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case $d:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case tp:case ep:case np:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ip:case ap:return Math.ceil(o/4)*Math.ceil(t/4)*8;case sp:case rp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $M(o){switch(o){case li:case Pv:return{byteLength:1,components:1};case rl:case zv:case ui:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case Ki:case gp:case qi:return{byteLength:4,components:1};case Bv:case Fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);function ax(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function tE(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<g.length;M++){const b=g[x],T=g[M];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,g[x]=T)}g.length=x+1;for(let M=0,b=g.length;M<b;M++){const T=g[M];o.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var eE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,TE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",LE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,YE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$E=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:eE,alphahash_pars_fragment:nE,alphamap_fragment:iE,alphamap_pars_fragment:aE,alphatest_fragment:sE,alphatest_pars_fragment:rE,aomap_fragment:oE,aomap_pars_fragment:lE,batching_pars_vertex:uE,batching_vertex:cE,begin_vertex:fE,beginnormal_vertex:hE,bsdfs:dE,iridescence_fragment:pE,bumpmap_pars_fragment:mE,clipping_planes_fragment:gE,clipping_planes_pars_fragment:_E,clipping_planes_pars_vertex:vE,clipping_planes_vertex:xE,color_fragment:SE,color_pars_fragment:yE,color_pars_vertex:ME,color_vertex:EE,common:bE,cube_uv_reflection_fragment:TE,defaultnormal_vertex:AE,displacementmap_pars_vertex:RE,displacementmap_vertex:CE,emissivemap_fragment:wE,emissivemap_pars_fragment:DE,colorspace_fragment:UE,colorspace_pars_fragment:LE,envmap_fragment:NE,envmap_common_pars_fragment:OE,envmap_pars_fragment:PE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:YE,envmap_vertex:BE,fog_vertex:FE,fog_pars_vertex:IE,fog_fragment:HE,fog_pars_fragment:VE,gradientmap_pars_fragment:GE,lightmap_pars_fragment:XE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:WE,lights_pars_begin:qE,lights_toon_fragment:jE,lights_toon_pars_fragment:ZE,lights_phong_fragment:KE,lights_phong_pars_fragment:QE,lights_physical_fragment:JE,lights_physical_pars_fragment:$E,lights_fragment_begin:tb,lights_fragment_maps:eb,lights_fragment_end:nb,logdepthbuf_fragment:ib,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:sb,logdepthbuf_vertex:rb,map_fragment:ob,map_pars_fragment:lb,map_particle_fragment:ub,map_particle_pars_fragment:cb,metalnessmap_fragment:fb,metalnessmap_pars_fragment:hb,morphinstance_vertex:db,morphcolor_vertex:pb,morphnormal_vertex:mb,morphtarget_pars_vertex:gb,morphtarget_vertex:_b,normal_fragment_begin:vb,normal_fragment_maps:xb,normal_pars_fragment:Sb,normal_pars_vertex:yb,normal_vertex:Mb,normalmap_pars_fragment:Eb,clearcoat_normal_fragment_begin:bb,clearcoat_normal_fragment_maps:Tb,clearcoat_pars_fragment:Ab,iridescence_pars_fragment:Rb,opaque_fragment:Cb,packing:wb,premultiplied_alpha_fragment:Db,project_vertex:Ub,dithering_fragment:Lb,dithering_pars_fragment:Nb,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:Pb,shadowmap_pars_fragment:zb,shadowmap_pars_vertex:Bb,shadowmap_vertex:Fb,shadowmask_pars_fragment:Ib,skinbase_vertex:Hb,skinning_pars_vertex:Vb,skinning_vertex:Gb,skinnormal_vertex:Xb,specularmap_fragment:kb,specularmap_pars_fragment:Wb,tonemapping_fragment:qb,tonemapping_pars_fragment:Yb,transmission_fragment:jb,transmission_pars_fragment:Zb,uv_pars_fragment:Kb,uv_pars_vertex:Qb,uv_vertex:Jb,worldpos_vertex:$b,background_vert:tT,background_frag:eT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:aT,cube_frag:sT,depth_vert:rT,depth_frag:oT,distance_vert:lT,distance_frag:uT,equirect_vert:cT,equirect_frag:fT,linedashed_vert:hT,linedashed_frag:dT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:_T,meshmatcap_vert:vT,meshmatcap_frag:xT,meshnormal_vert:ST,meshnormal_frag:yT,meshphong_vert:MT,meshphong_frag:ET,meshphysical_vert:bT,meshphysical_frag:TT,meshtoon_vert:AT,meshtoon_frag:RT,points_vert:CT,points_frag:wT,shadow_vert:DT,shadow_frag:UT,sprite_vert:LT,sprite_frag:NT},Nt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ki={basic:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new le(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Xn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Xn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new le(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Xn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Xn([Nt.points,Nt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Xn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Xn([Nt.common,Nt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Xn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Xn([Nt.sprite,Nt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Xn([Nt.common,Nt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Xn([Nt.lights,Nt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};ki.physical={uniforms:Xn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Ju={r:0,b:0,g:0},Ds=new Qi,OT=new Ke;function PT(o,t,i,s,l,u,h){const d=new le(0);let m=u===!0?0:1,p,_,g=null,x=0,M=null;function b(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?i:t).get(U)),U}function T(D){let U=!1;const N=b(D);N===null?v(d,m):N&&N.isColor&&(v(N,1),U=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(D,U){const N=b(U);N&&(N.isCubeTexture||N.mapping===_c)?(_===void 0&&(_=new ci(new dl(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Yr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ds.copy(U.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(Ds)),_.material.toneMapped=Ce.getTransfer(N.colorSpace)!==Ve,(g!==N||x!==N.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=N,x=N.version,M=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new ci(new vc(2,2),new Fn({name:"BackgroundMaterial",uniforms:Yr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(N.colorSpace)!==Ve,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||x!==N.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=N,x=N.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,U){D.getRGB(Ju,jv(o)),s.buffers.color.setClear(Ju.r,Ju.g,Ju.b,U,h)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,U=1){d.set(D),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(d,m)},render:T,addToRenderList:y,dispose:L}}function zT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(w,G,nt,st,dt){let ct=!1;const F=g(st,nt,G);u!==F&&(u=F,p(u.object)),ct=M(w,st,nt,dt),ct&&b(w,st,nt,dt),dt!==null&&t.update(dt,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,U(w,G,nt,st),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function g(w,G,nt){const st=nt.wireframe===!0;let dt=s[w.id];dt===void 0&&(dt={},s[w.id]=dt);let ct=dt[G.id];ct===void 0&&(ct={},dt[G.id]=ct);let F=ct[st];return F===void 0&&(F=x(m()),ct[st]=F),F}function x(w){const G=[],nt=[],st=[];for(let dt=0;dt<i;dt++)G[dt]=0,nt[dt]=0,st[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:st,object:w,attributes:{},index:null}}function M(w,G,nt,st){const dt=u.attributes,ct=G.attributes;let F=0;const H=nt.getAttributes();for(const at in H)if(H[at].location>=0){const xt=dt[at];let B=ct[at];if(B===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(B=w.instanceColor)),xt===void 0||xt.attribute!==B||B&&xt.data!==B.data)return!0;F++}return u.attributesNum!==F||u.index!==st}function b(w,G,nt,st){const dt={},ct=G.attributes;let F=0;const H=nt.getAttributes();for(const at in H)if(H[at].location>=0){let xt=ct[at];xt===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const B={};B.attribute=xt,xt&&xt.data&&(B.data=xt.data),dt[at]=B,F++}u.attributes=dt,u.attributesNum=F,u.index=st}function T(){const w=u.newAttributes;for(let G=0,nt=w.length;G<nt;G++)w[G]=0}function y(w){v(w,0)}function v(w,G){const nt=u.newAttributes,st=u.enabledAttributes,dt=u.attributeDivisors;nt[w]=1,st[w]===0&&(o.enableVertexAttribArray(w),st[w]=1),dt[w]!==G&&(o.vertexAttribDivisor(w,G),dt[w]=G)}function L(){const w=u.newAttributes,G=u.enabledAttributes;for(let nt=0,st=G.length;nt<st;nt++)G[nt]!==w[nt]&&(o.disableVertexAttribArray(nt),G[nt]=0)}function D(w,G,nt,st,dt,ct,F){F===!0?o.vertexAttribIPointer(w,G,nt,dt,ct):o.vertexAttribPointer(w,G,nt,st,dt,ct)}function U(w,G,nt,st){T();const dt=st.attributes,ct=nt.getAttributes(),F=G.defaultAttributeValues;for(const H in ct){const at=ct[H];if(at.location>=0){let yt=dt[H];if(yt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const xt=yt.normalized,B=yt.itemSize,it=t.get(yt);if(it===void 0)continue;const gt=it.buffer,Tt=it.type,Ft=it.bytesPerElement,et=Tt===o.INT||Tt===o.UNSIGNED_INT||yt.gpuType===gp;if(yt.isInterleavedBufferAttribute){const ut=yt.data,wt=ut.stride,Gt=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let It=0;It<at.locationSize;It++)v(at.location+It,ut.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let It=0;It<at.locationSize;It++)y(at.location+It);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let It=0;It<at.locationSize;It++)D(at.location+It,B/at.locationSize,Tt,xt,wt*Ft,(Gt+B/at.locationSize*It)*Ft,et)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<at.locationSize;ut++)v(at.location+ut,yt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<at.locationSize;ut++)y(at.location+ut);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ut=0;ut<at.locationSize;ut++)D(at.location+ut,B/at.locationSize,Tt,xt,B*Ft,B/at.locationSize*ut*Ft,et)}}else if(F!==void 0){const xt=F[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(at.location,xt);break;case 3:o.vertexAttrib3fv(at.location,xt);break;case 4:o.vertexAttrib4fv(at.location,xt);break;default:o.vertexAttrib1fv(at.location,xt)}}}}L()}function N(){q();for(const w in s){const G=s[w];for(const nt in G){const st=G[nt];for(const dt in st)_(st[dt].object),delete st[dt];delete G[nt]}delete s[w]}}function z(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const nt in G){const st=G[nt];for(const dt in st)_(st[dt].object),delete st[dt];delete G[nt]}delete s[w.id]}function O(w){for(const G in s){const nt=s[G];if(nt[w.id]===void 0)continue;const st=nt[w.id];for(const dt in st)_(st[dt].object),delete st[dt];delete nt[w.id]}}function q(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:L}}function BT(o,t,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];i.update(M,s,1)}function m(p,_,g,x){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],_[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,x,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*x[T];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function FT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Pi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const q=O===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==li&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==qi&&!q)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ie("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),z=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:U,maxSamples:N,samples:z}}function IT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ls,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||s!==0||l;return l=x,s=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,M){const b=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,v=o.get(g);if(!l||b===null||b.length===0||u&&!y)u?_(null):p();else{const L=u?0:s,D=L*4;let U=v.clippingState||null;m.value=U,U=_(b,x,D,M);for(let N=0;N!==D;++N)U[N]=i[N];v.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,x,M,b){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=m.value,b!==!0||y===null){const v=M+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,U=M;D!==T;++D,U+=4)h.copy(g[D]).applyMatrix4(L,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function HT(o){let t=new WeakMap;function i(h,d){return d===Td?h.mapping=Fs:d===Ad&&(h.mapping=kr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Td||d===Ad)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Qv(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const ss=4,J_=[.125,.215,.35,.446,.526,.582],Os=20,VT=256,tl=new xc,$_=new le;let ld=null,ud=0,cd=0,fd=!1;const GT=new j;class tv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=GT}=u;ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ld,ud,cd),this._renderer.xr.enabled=fd,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ui,format:Pi,colorSpace:qr,depthBuffer:!1},l=ev(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ev(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XT(u)),this._blurMaterial=WT(u,t,i),this._ggxMaterial=kT(u,t,i)}return l}_compileMaterial(t){const i=new ci(new Hn,t);this._renderer.compile(i,tl)}_sceneToCubeUV(t,i,s,l,u){const m=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor($_),g.toneMapping=Zi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new dl,new Rp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let v=!1;const L=t.background;L?L.isColor&&(y.color.copy(L),t.background=null,v=!0):(y.color.copy($_),v=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[D],u.y,u.z)):U===1?(m.up.set(0,0,p[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[D],u.z)):(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[D]));const N=this._cubeSize;Hr(l,U*N,D>2?N:0,N,N),g.setRenderTarget(l),v&&g.render(T,m),g.render(t,m)}g.toneMapping=M,g.autoClear=x,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Hr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,tl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=0+p*1.25,M=g*x,{_lodMax:b}=this,T=this._sizeLods[s],y=3*T*(s>b-ss?s-b+ss:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Hr(u,y,v,3*T,2*T),l.setRenderTarget(u),l.render(d,tl),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Hr(t,y,v,3*T,2*T),l.setRenderTarget(t),l.render(d,tl)}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Os-1),T=u/b,y=isFinite(u)?1+Math.floor(_*T):Os;y>Os&&ie(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Os}`);const v=[];let L=0;for(let O=0;O<Os;++O){const q=O/T,C=Math.exp(-q*q/2);v.push(C),O===0?L+=C:O<y&&(L+=2*C)}for(let O=0;O<v.length;O++)v[O]=v[O]/L;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-s;const U=this._sizeLods[l],N=3*U*(l>D-ss?l-D+ss:0),z=4*(this._cubeSize-U);Hr(i,N,z,3*U,2*U),m.setRenderTarget(i),m.render(g,tl)}}function XT(o){const t=[],i=[],s=[];let l=o;const u=o-ss+1+J_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-ss?m=J_[h-o+ss-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,T=3,y=2,v=1,L=new Float32Array(T*b*M),D=new Float32Array(y*b*M),U=new Float32Array(v*b*M);for(let z=0;z<M;z++){const O=z%3*2/3-1,q=z>2?0:-1,C=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];L.set(C,T*b*z),D.set(x,y*b*z);const w=[z,z,z,z,z,z];U.set(w,v*b*z)}const N=new Hn;N.setAttribute("position",new zi(L,T)),N.setAttribute("uv",new zi(D,y)),N.setAttribute("faceIndex",new zi(U,v)),s.push(new ci(N,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function ev(o,t,i){const s=new Qn(o,t,i);return s.texture.mapping=_c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function kT(o,t,i){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function WT(o,t,i){const s=new Float32Array(Os),l=new j(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function nv(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function iv(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Td||m===Ad,_=m===Fs||m===kr;if(p||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new tv(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new tv(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function YT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ul("WebGLRenderer: "+s+" extension not supported."),l}}}function jT(o,t,i,s){const l={},u=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,b=g.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let D=0,U=L.length;D<U;D+=3){const N=L[D+0],z=L[D+1],O=L[D+2];x.push(N,z,z,O,O,N)}}else if(b!==void 0){const L=b.array;T=b.version;for(let D=0,U=L.length/3-1;D<U;D+=3){const N=D+0,z=D+1,O=D+2;x.push(N,z,z,O,O,N)}}else return;const y=new(Gv(x)?Yv:qv)(x,1);y.version=T;const v=u.get(g);v&&t.remove(v),u.set(g,y)}function _(g){const x=u.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function ZT(o,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(s,M,u,x*h),i.update(M,s,1)}function p(x,M,b){b!==0&&(o.drawElementsInstanced(s,M,u,x*h,b),i.update(M,s,b))}function _(x,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,s,1)}function g(x,M,b,T){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/h,M[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,T,0,b);let v=0;for(let L=0;L<b;L++)v+=M[L]*T[L];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function KT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Re("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function QT(o,t,i){const s=new WeakMap,l=new rn;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let w=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),T===!0&&(U=2),y===!0&&(U=3);let N=d.attributes.position.count*U,z=1;N>t.maxTextureSize&&(z=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const O=new Float32Array(N*z*4*g),q=new Xv(O,N,z,g);q.type=qi,q.needsUpdate=!0;const C=U*4;for(let G=0;G<g;G++){const nt=v[G],st=L[G],dt=D[G],ct=N*z*4*G;for(let F=0;F<nt.count;F++){const H=F*C;b===!0&&(l.fromBufferAttribute(nt,F),O[ct+H+0]=l.x,O[ct+H+1]=l.y,O[ct+H+2]=l.z,O[ct+H+3]=0),T===!0&&(l.fromBufferAttribute(st,F),O[ct+H+4]=l.x,O[ct+H+5]=l.y,O[ct+H+6]=l.z,O[ct+H+7]=0),y===!0&&(l.fromBufferAttribute(dt,F),O[ct+H+8]=l.x,O[ct+H+9]=l.y,O[ct+H+10]=l.z,O[ct+H+11]=dt.itemSize===4?l.w:1)}}x={count:g,texture:q,size:new ee(N,z)},s.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function JT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const $T={[Cv]:"LINEAR_TONE_MAPPING",[mp]:"REINHARD_TONE_MAPPING",[wv]:"CINEON_TONE_MAPPING",[Dv]:"ACES_FILMIC_TONE_MAPPING",[Lv]:"AGX_TONE_MAPPING",[Nv]:"NEUTRAL_TONE_MAPPING",[Uv]:"CUSTOM_TONE_MAPPING"};function t1(o,t,i,s,l){const u=new Qn(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Qn(t,i,{type:ui,depthBuffer:!1,stencilBuffer:!1}),d=new Hn;d.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new sn([0,2,0,0,2,0],2));const m=new FM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ci(d,m),_=new xc(-1,1,1,-1,0,1);let g=null,x=null,M=!1,b,T=null,y=[],v=!1;this.setSize=function(L,D){u.setSize(L,D),h.setSize(L,D);for(let U=0;U<y.length;U++){const N=y[U];N.setSize&&N.setSize(L,D)}},this.setEffects=function(L){y=L,v=y.length>0&&y[0].isRenderPass===!0;const D=u.width,U=u.height;for(let N=0;N<y.length;N++){const z=y[N];z.setSize&&z.setSize(D,U)}},this.begin=function(L,D){if(M||L.toneMapping===Zi&&y.length===0)return!1;if(T=D,D!==null){const U=D.width,N=D.height;(u.width!==U||u.height!==N)&&this.setSize(U,N)}return v===!1&&L.setRenderTarget(u),b=L.toneMapping,L.toneMapping=Zi,!0},this.hasRenderPass=function(){return v},this.end=function(L,D){L.toneMapping=b,M=!0;let U=u,N=h;for(let z=0;z<y.length;z++){const O=y[z];if(O.enabled!==!1&&(O.render(L,N,U,D),O.needsSwap!==!1)){const q=U;U=N,N=q}}if(g!==L.outputColorSpace||x!==L.toneMapping){g=L.outputColorSpace,x=L.toneMapping,m.defines={},Ce.getTransfer(g)===Ve&&(m.defines.SRGB_TRANSFER="");const z=$T[x];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,L.setRenderTarget(T),L.render(p,_),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const sx=new In,cp=new cl(1,1),rx=new Xv,ox=new hM,lx=new Kv,av=[],sv=[],rv=new Float32Array(16),ov=new Float32Array(9),lv=new Float32Array(4);function Kr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=av[l];if(u===void 0&&(u=new Float32Array(l),av[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function vn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function xn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function yc(o,t){let i=sv[t];i===void 0&&(i=new Int32Array(t),sv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function e1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function n1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2fv(this.addr,t),xn(i,t)}}function i1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;o.uniform3fv(this.addr,t),xn(i,t)}}function a1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4fv(this.addr,t),xn(i,t)}}function s1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;lv.set(s),o.uniformMatrix2fv(this.addr,!1,lv),xn(i,s)}}function r1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;ov.set(s),o.uniformMatrix3fv(this.addr,!1,ov),xn(i,s)}}function o1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;rv.set(s),o.uniformMatrix4fv(this.addr,!1,rv),xn(i,s)}}function l1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function u1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2iv(this.addr,t),xn(i,t)}}function c1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3iv(this.addr,t),xn(i,t)}}function f1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4iv(this.addr,t),xn(i,t)}}function h1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function d1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2uiv(this.addr,t),xn(i,t)}}function p1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3uiv(this.addr,t),xn(i,t)}}function m1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4uiv(this.addr,t),xn(i,t)}}function g1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(cp.compareFunction=i.isReversedDepthBuffer()?bp:Ep,u=cp):u=sx,i.setTexture2D(t||u,l)}function _1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ox,l)}function v1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||lx,l)}function x1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||rx,l)}function S1(o){switch(o){case 5126:return e1;case 35664:return n1;case 35665:return i1;case 35666:return a1;case 35674:return s1;case 35675:return r1;case 35676:return o1;case 5124:case 35670:return l1;case 35667:case 35671:return u1;case 35668:case 35672:return c1;case 35669:case 35673:return f1;case 5125:return h1;case 36294:return d1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return x1}}function y1(o,t){o.uniform1fv(this.addr,t)}function M1(o,t){const i=Kr(t,this.size,2);o.uniform2fv(this.addr,i)}function E1(o,t){const i=Kr(t,this.size,3);o.uniform3fv(this.addr,i)}function b1(o,t){const i=Kr(t,this.size,4);o.uniform4fv(this.addr,i)}function T1(o,t){const i=Kr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function A1(o,t){const i=Kr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function R1(o,t){const i=Kr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function C1(o,t){o.uniform1iv(this.addr,t)}function w1(o,t){o.uniform2iv(this.addr,t)}function D1(o,t){o.uniform3iv(this.addr,t)}function U1(o,t){o.uniform4iv(this.addr,t)}function L1(o,t){o.uniform1uiv(this.addr,t)}function N1(o,t){o.uniform2uiv(this.addr,t)}function O1(o,t){o.uniform3uiv(this.addr,t)}function P1(o,t){o.uniform4uiv(this.addr,t)}function z1(o,t,i){const s=this.cache,l=t.length,u=yc(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=cp:h=sx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function B1(o,t,i){const s=this.cache,l=t.length,u=yc(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||ox,u[h])}function F1(o,t,i){const s=this.cache,l=t.length,u=yc(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||lx,u[h])}function I1(o,t,i){const s=this.cache,l=t.length,u=yc(i,l);vn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||rx,u[h])}function H1(o){switch(o){case 5126:return y1;case 35664:return M1;case 35665:return E1;case 35666:return b1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return w1;case 35668:case 35672:return D1;case 35669:case 35673:return U1;case 5125:return L1;case 36294:return N1;case 36295:return O1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return I1}}class V1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=S1(i.type)}}class G1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=H1(i.type)}}class X1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function uv(o,t){o.seq.push(t),o.map[t.id]=t}function k1(o,t,i){const s=o.name,l=s.length;for(hd.lastIndex=0;;){const u=hd.exec(s),h=hd.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){uv(i,p===void 0?new V1(d,o,t):new G1(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new X1(d),uv(i,g)),i=g}}}class oc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);k1(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function cv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const W1=37297;let q1=0;function Y1(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const fv=new he;function j1(o){Ce._getMatrix(fv,Ce.workingColorSpace,o);const t=`mat3( ${fv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case uc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function hv(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+Y1(o.getShaderSource(t),d)}else return u}function Z1(o,t){const i=j1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const K1={[Cv]:"Linear",[mp]:"Reinhard",[wv]:"Cineon",[Dv]:"ACESFilmic",[Lv]:"AgX",[Nv]:"Neutral",[Uv]:"Custom"};function Q1(o,t){const i=K1[t];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $u=new j;function J1(){Ce.getLuminanceCoefficients($u);const o=$u.x.toFixed(4),t=$u.y.toFixed(4),i=$u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function tA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function eA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function al(o){return o!==""}function dv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(o){return o.replace(nA,aA)}const iA=new Map;function aA(o,t){let i=de[t];if(i===void 0){const s=iA.get(t);if(s!==void 0)i=de[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return fp(i)}const sA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(o){return o.replace(sA,rA)}function rA(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function gv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const oA={[ec]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function lA(o){return oA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uA={[Fs]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[_c]:"ENVMAP_TYPE_CUBE_UV"};function cA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":uA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const fA={[kr]:"ENVMAP_MODE_REFRACTION"};function hA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":fA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dA={[pp]:"ENVMAP_BLENDING_MULTIPLY",[Yy]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function pA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":dA[o.combine]||"ENVMAP_BLENDING_NONE"}function mA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function gA(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=lA(i),p=cA(i),_=hA(i),g=pA(i),x=mA(i),M=$1(i),b=tA(u),T=l.createProgram();let y,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(al).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(al).join(`
`),v.length>0&&(v+=`
`)):(y=[gv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),v=[gv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Zi?"#define TONE_MAPPING":"",i.toneMapping!==Zi?de.tonemapping_pars_fragment:"",i.toneMapping!==Zi?Q1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Z1("linearToOutputTexel",i.outputColorSpace),J1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),h=fp(h),h=dv(h,i),h=pv(h,i),d=fp(d),d=dv(d,i),d=pv(d,i),h=mv(h),d=mv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===M_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=L+y+h,U=L+v+d,N=cv(l,l.VERTEX_SHADER,D),z=cv(l,l.FRAGMENT_SHADER,U);l.attachShader(T,N),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function O(G){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(T)||"",st=l.getShaderInfoLog(N)||"",dt=l.getShaderInfoLog(z)||"",ct=nt.trim(),F=st.trim(),H=dt.trim();let at=!0,yt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,N,z);else{const xt=hv(l,N,"vertex"),B=hv(l,z,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ct+`
`+xt+`
`+B)}else ct!==""?ie("WebGLProgram: Program Info Log:",ct):(F===""||H==="")&&(yt=!1);yt&&(G.diagnostics={runnable:at,programLog:ct,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:v}})}l.deleteShader(N),l.deleteShader(z),q=new oc(l,T),C=eA(l,T)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,W1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=q1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=z,this}let _A=0;class vA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new xA(t),i.set(t,s)),s}}class xA{constructor(t){this.id=_A++,this.code=t,this.usedTimes=0}}function SA(o,t,i,s,l,u,h){const d=new kv,m=new vA,p=new Set,_=[],g=new Map,x=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,w,G,nt,st){const dt=nt.fog,ct=st.geometry,F=C.isMeshStandardMaterial?nt.environment:null,H=(C.isMeshStandardMaterial?i:t).get(C.envMap||F),at=H&&H.mapping===_c?H.image.height:null,yt=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&ie("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const xt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,B=xt!==void 0?xt.length:0;let it=0;ct.morphAttributes.position!==void 0&&(it=1),ct.morphAttributes.normal!==void 0&&(it=2),ct.morphAttributes.color!==void 0&&(it=3);let gt,Tt,Ft,et;if(yt){const Ae=ki[yt];gt=Ae.vertexShader,Tt=Ae.fragmentShader}else gt=C.vertexShader,Tt=C.fragmentShader,m.update(C),Ft=m.getVertexShaderID(C),et=m.getFragmentShaderID(C);const ut=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Gt=st.isInstancedMesh===!0,It=st.isBatchedMesh===!0,me=!!C.map,tn=!!C.matcap,Se=!!H,ge=!!C.aoMap,Ue=!!C.lightMap,oe=!!C.bumpMap,en=!!C.normalMap,V=!!C.displacementMap,Qe=!!C.emissiveMap,Te=!!C.metalnessMap,Pe=!!C.roughnessMap,qt=C.anisotropy>0,P=C.clearcoat>0,E=C.dispersion>0,W=C.iridescence>0,ht=C.sheen>0,vt=C.transmission>0,lt=qt&&!!C.anisotropyMap,jt=P&&!!C.clearcoatMap,Rt=P&&!!C.clearcoatNormalMap,Xt=P&&!!C.clearcoatRoughnessMap,ne=W&&!!C.iridescenceMap,Mt=W&&!!C.iridescenceThicknessMap,Et=ht&&!!C.sheenColorMap,zt=ht&&!!C.sheenRoughnessMap,Ot=!!C.specularMap,Ct=!!C.specularColorMap,ce=!!C.specularIntensityMap,k=vt&&!!C.transmissionMap,Ut=vt&&!!C.thicknessMap,bt=!!C.gradientMap,Pt=!!C.alphaMap,St=C.alphaTest>0,_t=!!C.alphaHash,At=!!C.extensions;let ae=Zi;C.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Be={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:gt,fragmentShader:Tt,defines:C.defines,customVertexShaderID:Ft,customFragmentShaderID:et,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:It,batchingColor:It&&st._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&st.instanceColor!==null,instancingMorph:Gt&&st.morphTexture!==null,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:qr,alphaToCoverage:!!C.alphaToCoverage,map:me,matcap:tn,envMap:Se,envMapMode:Se&&H.mapping,envMapCubeUVHeight:at,aoMap:ge,lightMap:Ue,bumpMap:oe,normalMap:en,displacementMap:V,emissiveMap:Qe,normalMapObjectSpace:en&&C.normalMapType===Qy,normalMapTangentSpace:en&&C.normalMapType===Mp,metalnessMap:Te,roughnessMap:Pe,anisotropy:qt,anisotropyMap:lt,clearcoat:P,clearcoatMap:jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:W,iridescenceMap:ne,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:ce,transmission:vt,transmissionMap:k,thicknessMap:Ut,gradientMap:bt,opaque:C.transparent===!1&&C.blending===Bs&&C.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:_t,combine:C.combine,mapUv:me&&T(C.map.channel),aoMapUv:ge&&T(C.aoMap.channel),lightMapUv:Ue&&T(C.lightMap.channel),bumpMapUv:oe&&T(C.bumpMap.channel),normalMapUv:en&&T(C.normalMap.channel),displacementMapUv:V&&T(C.displacementMap.channel),emissiveMapUv:Qe&&T(C.emissiveMap.channel),metalnessMapUv:Te&&T(C.metalnessMap.channel),roughnessMapUv:Pe&&T(C.roughnessMap.channel),anisotropyMapUv:lt&&T(C.anisotropyMap.channel),clearcoatMapUv:jt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:zt&&T(C.sheenRoughnessMap.channel),specularMapUv:Ot&&T(C.specularMap.channel),specularColorMapUv:Ct&&T(C.specularColorMap.channel),specularIntensityMapUv:ce&&T(C.specularIntensityMap.channel),transmissionMapUv:k&&T(C.transmissionMap.channel),thicknessMapUv:Ut&&T(C.thicknessMap.channel),alphaMapUv:Pt&&T(C.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(en||qt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ct.attributes.uv&&(me||Pt),fog:!!dt,useFog:C.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:wt,skinning:st.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:me&&C.map.isVideoTexture===!0&&Ce.getTransfer(C.map.colorSpace)===Ve,decodeVideoTextureEmissive:Qe&&C.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(C.emissiveMap.colorSpace)===Ve,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ma,flipSided:C.side===Kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:At&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&C.extensions.multiDraw===!0||It)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)w.push(G),w.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(L(w,C),D(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function L(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function D(C,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const w=b[C.type];let G;if(w){const nt=ki[w];G=hc.clone(nt.uniforms)}else G=C.uniforms;return G}function N(C,w){let G=g.get(w);return G!==void 0?++G.usedTimes:(G=new gA(o,w,C,u),_.push(G),g.set(w,G)),G}function z(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function O(C){m.remove(C)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:U,acquireProgram:N,releaseProgram:z,releaseShaderCache:O,programs:_,dispose:q}}function yA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function MA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function _v(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function vv(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(g,x,M,b,T,y){let v=o[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:M,groupOrder:b,renderOrder:g.renderOrder,z:T,group:y},o[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=M,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=T,v.group=y),t++,v}function d(g,x,M,b,T,y){const v=h(g,x,M,b,T,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,x,M,b,T,y){const v=h(g,x,M,b,T,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,x){i.length>1&&i.sort(g||MA),s.length>1&&s.sort(x||_v),l.length>1&&l.sort(x||_v)}function _(){for(let g=t,x=o.length;g<x;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function EA(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new vv,o.set(s,[h])):l>=u.length?(h=new vv,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function bA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new le};break;case"SpotLight":i={position:new j,direction:new j,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new le,groundColor:new le};break;case"RectAreaLight":i={color:new le,position:new j,halfWidth:new j,halfHeight:new j};break}return o[t.id]=i,i}}}function TA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let AA=0;function RA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function CA(o){const t=new bA,i=TA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,u=new Ke,h=new Ke;function d(p){let _=0,g=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,b=0,T=0,y=0,v=0,L=0,D=0,U=0,N=0,z=0,O=0;p.sort(RA);for(let C=0,w=p.length;C<w;C++){const G=p[C],nt=G.color,st=G.intensity,dt=G.distance;let ct=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Wr?ct=G.shadow.map.texture:ct=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=nt.r*st,g+=nt.g*st,x+=nt.b*st;else if(G.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(G.sh.coefficients[F],st);O++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,at=i.get(G);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,s.directionalShadow[M]=at,s.directionalShadowMap[M]=ct,s.directionalShadowMatrix[M]=G.shadow.matrix,L++}s.directional[M]=F,M++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(nt).multiplyScalar(st),F.distance=dt,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,s.spot[T]=F;const H=G.shadow;if(G.map&&(s.spotLightMap[N]=G.map,N++,H.updateMatrices(G),G.castShadow&&z++),s.spotLightMatrix[T]=H.matrix,G.castShadow){const at=i.get(G);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,s.spotShadow[T]=at,s.spotShadowMap[T]=ct,U++}T++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(nt).multiplyScalar(st),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=F,y++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,at=i.get(G);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,at.shadowCameraNear=H.camera.near,at.shadowCameraFar=H.camera.far,s.pointShadow[b]=at,s.pointShadowMap[b]=ct,s.pointShadowMatrix[b]=G.shadow.matrix,D++}s.point[b]=F,b++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(st),F.groundColor.copy(G.groundColor).multiplyScalar(st),s.hemi[v]=F,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const q=s.hash;(q.directionalLength!==M||q.pointLength!==b||q.spotLength!==T||q.rectAreaLength!==y||q.hemiLength!==v||q.numDirectionalShadows!==L||q.numPointShadows!==D||q.numSpotShadows!==U||q.numSpotMaps!==N||q.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=y,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=U+N-z,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=O,q.directionalLength=M,q.pointLength=b,q.spotLength=T,q.rectAreaLength=y,q.hemiLength=v,q.numDirectionalShadows=L,q.numPointShadows=D,q.numSpotShadows=U,q.numSpotMaps=N,q.numLightProbes=O,s.version=AA++)}function m(p,_){let g=0,x=0,M=0,b=0,T=0;const y=_.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const D=p[v];if(D.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),g++}else if(D.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(D.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(D.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const U=s.hemi[T];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(y),T++}}}return{setup:d,setupView:m,state:s}}function xv(o){const t=new CA(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function wA(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new xv(o),t.set(l,[d])):u>=h.length?(d=new xv(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const DA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LA=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],NA=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Sv=new Ke,el=new j,dd=new j;function OA(o,t,i){let s=new Cp;const l=new ee,u=new ee,h=new rn,d=new HM,m=new VM,p={},_=i.maxTextureSize,g={[os]:Kn,[Kn]:os,[Ma]:Ma},x=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:DA,fragmentShader:UA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new Hn;b.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ci(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let v=this.type;this.render=function(z,O,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;z.type===Cy&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=ec);const C=o.getRenderTarget(),w=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(ji),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const st=v!==this.type;st&&O.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ct=>ct.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ct=z.length;dt<ct;dt++){const F=z[dt],H=F.shadow;if(H===void 0){ie("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const at=H.getFrameExtents();if(l.multiply(at),u.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/at.x),l.x=u.x*at.x,H.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/at.y),l.y=u.y*at.y,H.mapSize.y=u.y)),H.map===null||st===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===nl){if(F.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Qn(l.x,l.y,{format:Wr,type:ui,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new cl(l.x,l.y,qi),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Ta,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln}else{F.isPointLight?(H.map=new Qv(l.x),H.map.depthTexture=new BM(l.x,Ki)):(H.map=new Qn(l.x,l.y),H.map.depthTexture=new cl(l.x,l.y,Ki)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Ta;const xt=o.state.buffers.depth.getReversed();this.type===ec?(H.map.depthTexture.compareFunction=xt?bp:Ep,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln)}H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const B=H.getViewport(xt);h.set(u.x*B.x,u.y*B.y,u.x*B.z,u.y*B.w),nt.viewport(h)}if(F.isPointLight){const B=H.camera,it=H.matrix,gt=F.distance||B.far;gt!==B.far&&(B.far=gt,B.updateProjectionMatrix()),el.setFromMatrixPosition(F.matrixWorld),B.position.copy(el),dd.copy(B.position),dd.add(LA[xt]),B.up.copy(NA[xt]),B.lookAt(dd),B.updateMatrixWorld(),it.makeTranslation(-el.x,-el.y,-el.z),Sv.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Sv,B.coordinateSystem,B.reversedDepth)}else H.updateMatrices(F);s=H.getFrustum(),U(O,q,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===nl&&L(H,q),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(C,w,G)};function L(z,O){const q=t.update(T);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Qn(l.x,l.y,{format:Wr,type:ui})),x.uniforms.shadow_pass.value=z.map.depthTexture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(O,null,q,x,T,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(O,null,q,M,T,null)}function D(z,O,q,C){let w=null;const G=q.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)w=G;else if(w=q.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const nt=w.uuid,st=O.uuid;let dt=p[nt];dt===void 0&&(dt={},p[nt]=dt);let ct=dt[st];ct===void 0&&(ct=w.clone(),dt[st]=ct,O.addEventListener("dispose",N)),w=ct}if(w.visible=O.visible,w.wireframe=O.wireframe,C===nl?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:g[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const nt=o.properties.get(w);nt.light=q}return w}function U(z,O,q,C,w){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===nl)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,z.matrixWorld);const st=t.update(z),dt=z.material;if(Array.isArray(dt)){const ct=st.groups;for(let F=0,H=ct.length;F<H;F++){const at=ct[F],yt=dt[at.materialIndex];if(yt&&yt.visible){const xt=D(z,yt,C,w);z.onBeforeShadow(o,z,O,q,st,xt,at),o.renderBufferDirect(q,null,st,xt,z,at),z.onAfterShadow(o,z,O,q,st,xt,at)}}}else if(dt.visible){const ct=D(z,dt,C,w);z.onBeforeShadow(o,z,O,q,st,ct,null),o.renderBufferDirect(q,null,st,ct,z,null),z.onAfterShadow(o,z,O,q,st,ct,null)}}const nt=z.children;for(let st=0,dt=nt.length;st<dt;st++)U(nt[st],O,q,C,w)}function N(z){z.target.removeEventListener("dispose",N);for(const q in p){const C=p[q],w=z.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const PA={[vd]:xd,[Sd]:Ed,[yd]:bd,[Xr]:Md,[xd]:vd,[Ed]:Sd,[bd]:yd,[Md]:Xr};function zA(o,t){function i(){let k=!1;const Ut=new rn;let bt=null;const Pt=new rn(0,0,0,0);return{setMask:function(St){bt!==St&&!k&&(o.colorMask(St,St,St,St),bt=St)},setLocked:function(St){k=St},setClear:function(St,_t,At,ae,Be){Be===!0&&(St*=ae,_t*=ae,At*=ae),Ut.set(St,_t,At,ae),Pt.equals(Ut)===!1&&(o.clearColor(St,_t,At,ae),Pt.copy(Ut))},reset:function(){k=!1,bt=null,Pt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,bt=null,Pt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=t.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ae=St;St=null,this.setClear(ae)}},getReversed:function(){return Ut},setTest:function(_t){_t?ut(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!k&&(o.depthMask(_t),bt=_t)},setFunc:function(_t){if(Ut&&(_t=PA[_t]),Pt!==_t){switch(_t){case vd:o.depthFunc(o.NEVER);break;case xd:o.depthFunc(o.ALWAYS);break;case Sd:o.depthFunc(o.LESS);break;case Xr:o.depthFunc(o.LEQUAL);break;case yd:o.depthFunc(o.EQUAL);break;case Md:o.depthFunc(o.GEQUAL);break;case Ed:o.depthFunc(o.GREATER);break;case bd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),St=_t)},reset:function(){k=!1,bt=null,Pt=null,St=null,Ut=!1}}}function l(){let k=!1,Ut=null,bt=null,Pt=null,St=null,_t=null,At=null,ae=null,Be=null;return{setTest:function(Ae){k||(Ae?ut(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Ae){Ut!==Ae&&!k&&(o.stencilMask(Ae),Ut=Ae)},setFunc:function(Ae,Nn,Ti){(bt!==Ae||Pt!==Nn||St!==Ti)&&(o.stencilFunc(Ae,Nn,Ti),bt=Ae,Pt=Nn,St=Ti)},setOp:function(Ae,Nn,Ti){(_t!==Ae||At!==Nn||ae!==Ti)&&(o.stencilOp(Ae,Nn,Ti),_t=Ae,At=Nn,ae=Ti)},setLocked:function(Ae){k=Ae},setClear:function(Ae){Be!==Ae&&(o.clearStencil(Ae),Be=Ae)},reset:function(){k=!1,Ut=null,bt=null,Pt=null,St=null,_t=null,At=null,ae=null,Be=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,M=[],b=null,T=!1,y=null,v=null,L=null,D=null,U=null,N=null,z=null,O=new le(0,0,0),q=0,C=!1,w=null,G=null,nt=null,st=null,dt=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(at)[1]),F=H>=1):at.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),F=H>=2);let yt=null,xt={};const B=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),gt=new rn().fromArray(B),Tt=new rn().fromArray(it);function Ft(k,Ut,bt,Pt){const St=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let At=0;At<bt;At++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(Ut+At,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return _t}const et={};et[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(o.DEPTH_TEST),h.setFunc(Xr),oe(!1),en(v_),ut(o.CULL_FACE),ge(ji);function ut(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function wt(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function Gt(k,Ut){return g[k]!==Ut?(o.bindFramebuffer(k,Ut),g[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function It(k,Ut){let bt=M,Pt=!1;if(k){bt=x.get(Ut),bt===void 0&&(bt=[],x.set(Ut,bt));const St=k.textures;if(bt.length!==St.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)bt[_t]=o.COLOR_ATTACHMENT0+_t;bt.length=St.length,Pt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(bt)}function me(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const tn={[Ns]:o.FUNC_ADD,[Dy]:o.FUNC_SUBTRACT,[Uy]:o.FUNC_REVERSE_SUBTRACT};tn[Ly]=o.MIN,tn[Ny]=o.MAX;const Se={[Oy]:o.ZERO,[Py]:o.ONE,[zy]:o.SRC_COLOR,[gd]:o.SRC_ALPHA,[Gy]:o.SRC_ALPHA_SATURATE,[Hy]:o.DST_COLOR,[Fy]:o.DST_ALPHA,[By]:o.ONE_MINUS_SRC_COLOR,[_d]:o.ONE_MINUS_SRC_ALPHA,[Vy]:o.ONE_MINUS_DST_COLOR,[Iy]:o.ONE_MINUS_DST_ALPHA,[Xy]:o.CONSTANT_COLOR,[ky]:o.ONE_MINUS_CONSTANT_COLOR,[Wy]:o.CONSTANT_ALPHA,[qy]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(k,Ut,bt,Pt,St,_t,At,ae,Be,Ae){if(k===ji){T===!0&&(wt(o.BLEND),T=!1);return}if(T===!1&&(ut(o.BLEND),T=!0),k!==wy){if(k!==y||Ae!==C){if((v!==Ns||U!==Ns)&&(o.blendEquation(o.FUNC_ADD),v=Ns,U=Ns),Ae)switch(k){case Bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFunc(o.ONE,o.ONE);break;case x_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case S_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Re("WebGLState: Invalid blending: ",k);break}else switch(k){case Bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case md:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case x_:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",k);break}L=null,D=null,N=null,z=null,O.set(0,0,0),q=0,y=k,C=Ae}return}St=St||Ut,_t=_t||bt,At=At||Pt,(Ut!==v||St!==U)&&(o.blendEquationSeparate(tn[Ut],tn[St]),v=Ut,U=St),(bt!==L||Pt!==D||_t!==N||At!==z)&&(o.blendFuncSeparate(Se[bt],Se[Pt],Se[_t],Se[At]),L=bt,D=Pt,N=_t,z=At),(ae.equals(O)===!1||Be!==q)&&(o.blendColor(ae.r,ae.g,ae.b,Be),O.copy(ae),q=Be),y=k,C=!1}function Ue(k,Ut){k.side===Ma?wt(o.CULL_FACE):ut(o.CULL_FACE);let bt=k.side===Kn;Ut&&(bt=!bt),oe(bt),k.blending===Bs&&k.transparent===!1?ge(ji):ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Pt=k.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Qe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function en(k){k!==Ay?(ut(o.CULL_FACE),k!==G&&(k===v_?o.cullFace(o.BACK):k===Ry?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),G=k}function V(k){k!==nt&&(F&&o.lineWidth(k),nt=k)}function Qe(k,Ut,bt){k?(ut(o.POLYGON_OFFSET_FILL),(st!==Ut||dt!==bt)&&(o.polygonOffset(Ut,bt),st=Ut,dt=bt)):wt(o.POLYGON_OFFSET_FILL)}function Te(k){k?ut(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Pe(k){k===void 0&&(k=o.TEXTURE0+ct-1),yt!==k&&(o.activeTexture(k),yt=k)}function qt(k,Ut,bt){bt===void 0&&(yt===null?bt=o.TEXTURE0+ct-1:bt=yt);let Pt=xt[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[bt]=Pt),(Pt.type!==k||Pt.texture!==Ut)&&(yt!==bt&&(o.activeTexture(bt),yt=bt),o.bindTexture(k,Ut||et[k]),Pt.type=k,Pt.texture=Ut)}function P(){const k=xt[yt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function ht(){try{o.texSubImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function vt(){try{o.texSubImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function Rt(){try{o.texStorage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function Xt(){try{o.texStorage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function ne(){try{o.texImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function Mt(){try{o.texImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function Et(k){gt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function zt(k){Tt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Tt.copy(k))}function Ot(k,Ut){let bt=p.get(Ut);bt===void 0&&(bt=new WeakMap,p.set(Ut,bt));let Pt=bt.get(k);Pt===void 0&&(Pt=o.getUniformBlockIndex(Ut,k.name),bt.set(k,Pt))}function Ct(k,Ut){const Pt=p.get(Ut).get(k);m.get(Ut)!==Pt&&(o.uniformBlockBinding(Ut,Pt,k.__bindingPointIndex),m.set(Ut,Pt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},yt=null,xt={},g={},x=new WeakMap,M=[],b=null,T=!1,y=null,v=null,L=null,D=null,U=null,N=null,z=null,O=new le(0,0,0),q=0,C=!1,w=null,G=null,nt=null,st=null,dt=null,gt.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ut,disable:wt,bindFramebuffer:Gt,drawBuffers:It,useProgram:me,setBlending:ge,setMaterial:Ue,setFlipSided:oe,setCullFace:en,setLineWidth:V,setPolygonOffset:Qe,setScissorTest:Te,activeTexture:Pe,bindTexture:qt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:ne,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:jt,scissor:Et,viewport:zt,reset:ce}}function BA(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ee,_=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,E){return M?new OffscreenCanvas(P,E):ll("canvas")}function T(P,E,W){let ht=1;const vt=qt(P);if((vt.width>W||vt.height>W)&&(ht=W/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const lt=Math.floor(ht*vt.width),jt=Math.floor(ht*vt.height);g===void 0&&(g=b(lt,jt));const Rt=E?b(lt,jt):g;return Rt.width=lt,Rt.height=jt,Rt.getContext("2d").drawImage(P,0,0,lt,jt),ie("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+jt+")."),Rt}else return"data"in P&&ie("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),P;return P}function y(P){return P.generateMipmaps}function v(P){o.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(P,E,W,ht,vt=!1){if(P!==null){if(o[P]!==void 0)return o[P];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt=E;if(E===o.RED&&(W===o.FLOAT&&(lt=o.R32F),W===o.HALF_FLOAT&&(lt=o.R16F),W===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.R8UI),W===o.UNSIGNED_SHORT&&(lt=o.R16UI),W===o.UNSIGNED_INT&&(lt=o.R32UI),W===o.BYTE&&(lt=o.R8I),W===o.SHORT&&(lt=o.R16I),W===o.INT&&(lt=o.R32I)),E===o.RG&&(W===o.FLOAT&&(lt=o.RG32F),W===o.HALF_FLOAT&&(lt=o.RG16F),W===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RG8UI),W===o.UNSIGNED_SHORT&&(lt=o.RG16UI),W===o.UNSIGNED_INT&&(lt=o.RG32UI),W===o.BYTE&&(lt=o.RG8I),W===o.SHORT&&(lt=o.RG16I),W===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),W===o.UNSIGNED_INT&&(lt=o.RGB32UI),W===o.BYTE&&(lt=o.RGB8I),W===o.SHORT&&(lt=o.RGB16I),W===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),W===o.UNSIGNED_INT&&(lt=o.RGBA32UI),W===o.BYTE&&(lt=o.RGBA8I),W===o.SHORT&&(lt=o.RGBA16I),W===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),E===o.RGBA){const jt=vt?uc:Ce.getTransfer(ht);W===o.FLOAT&&(lt=o.RGBA32F),W===o.HALF_FLOAT&&(lt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(lt=jt===Ve?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function U(P,E){let W;return P?E===null||E===Ki||E===ol?W=o.DEPTH24_STENCIL8:E===qi?W=o.DEPTH32F_STENCIL8:E===rl&&(W=o.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===ol?W=o.DEPTH_COMPONENT24:E===qi?W=o.DEPTH_COMPONENT32F:E===rl&&(W=o.DEPTH_COMPONENT16),W}function N(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),q(E),E.isVideoTexture&&_.delete(E)}function O(P){const E=P.target;E.removeEventListener("dispose",O),w(E)}function q(P){const E=s.get(P);if(E.__webglInit===void 0)return;const W=P.source,ht=x.get(W);if(ht){const vt=ht[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(P),Object.keys(ht).length===0&&x.delete(W)}s.remove(P)}function C(P){const E=s.get(P);o.deleteTexture(E.__webglTexture);const W=P.source,ht=x.get(W);delete ht[E.__cacheKey],h.memory.textures--}function w(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let vt=0;vt<E.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=P.textures;for(let ht=0,vt=W.length;ht<vt;ht++){const lt=s.get(W[ht]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(W[ht])}s.remove(P)}let G=0;function nt(){G=0}function st(){const P=G;return P>=l.maxTextures&&ie("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),G+=1,P}function dt(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ct(P,E){const W=s.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const ht=P.image;if(ht===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,P,E);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+E)}function F(P,E){const W=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){et(W,P,E);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+E)}function H(P,E){const W=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){et(W,P,E);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+E)}function at(P,E){const W=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){ut(W,P,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+E)}const yt={[Rd]:o.REPEAT,[Ea]:o.CLAMP_TO_EDGE,[Cd]:o.MIRRORED_REPEAT},xt={[Ln]:o.NEAREST,[Zy]:o.NEAREST_MIPMAP_NEAREST,[Ru]:o.NEAREST_MIPMAP_LINEAR,[Bn]:o.LINEAR,[Nh]:o.LINEAR_MIPMAP_NEAREST,[Ps]:o.LINEAR_MIPMAP_LINEAR},B={[Jy]:o.NEVER,[iM]:o.ALWAYS,[$y]:o.LESS,[Ep]:o.LEQUAL,[tM]:o.EQUAL,[bp]:o.GEQUAL,[eM]:o.GREATER,[nM]:o.NOTEQUAL};function it(P,E){if(E.type===qi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===Nh||E.magFilter===Ru||E.magFilter===Ps||E.minFilter===Bn||E.minFilter===Nh||E.minFilter===Ru||E.minFilter===Ps)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,yt[E.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,yt[E.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,yt[E.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,xt[E.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==Ru&&E.minFilter!==Ps||E.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function gt(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const ht=E.source;let vt=x.get(ht);vt===void 0&&(vt={},x.set(ht,vt));const lt=dt(E);if(lt!==P.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),vt[lt].usedTimes++;const jt=vt[P.__cacheKey];jt!==void 0&&(vt[P.__cacheKey].usedTimes--,jt.usedTimes===0&&C(E)),P.__cacheKey=lt,P.__webglTexture=vt[lt].texture}return W}function Tt(P,E,W){return Math.floor(Math.floor(P/W)/E)}function Ft(P,E,W,ht){const lt=P.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,W,ht,E.data);else{lt.sort((Mt,Et)=>Mt.start-Et.start);let jt=0;for(let Mt=1;Mt<lt.length;Mt++){const Et=lt[jt],zt=lt[Mt],Ot=Et.start+Et.count,Ct=Tt(zt.start,E.width,4),ce=Tt(Et.start,E.width,4);zt.start<=Ot+1&&Ct===ce&&Tt(zt.start+zt.count-1,E.width,4)===Ct?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++jt,lt[jt]=zt)}lt.length=jt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ne=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Et=lt.length;Mt<Et;Mt++){const zt=lt[Mt],Ot=Math.floor(zt.start/4),Ct=Math.ceil(zt.count/4),ce=Ot%E.width,k=Math.floor(Ot/E.width),Ut=Ct,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ce,k,Ut,bt,W,ht,E.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ne)}}function et(P,E,W){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=gt(P,E),lt=E.source;i.bindTexture(ht,P.__webglTexture,o.TEXTURE0+W);const jt=s.get(lt);if(lt.version!==jt.__version||vt===!0){i.activeTexture(o.TEXTURE0+W);const Rt=Ce.getPrimaries(Ce.workingColorSpace),Xt=E.colorSpace===as?null:Ce.getPrimaries(E.colorSpace),ne=E.colorSpace===as||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Mt=T(E.image,!1,l.maxTextureSize);Mt=Pe(E,Mt);const Et=u.convert(E.format,E.colorSpace),zt=u.convert(E.type);let Ot=D(E.internalFormat,Et,zt,E.colorSpace,E.isVideoTexture);it(ht,E);let Ct;const ce=E.mipmaps,k=E.isVideoTexture!==!0,Ut=jt.__version===void 0||vt===!0,bt=lt.dataReady,Pt=N(E,Mt);if(E.isDepthTexture)Ot=U(E.format===zs,E.type),Ut&&(k?i.texStorage2D(o.TEXTURE_2D,1,Ot,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,null));else if(E.isDataTexture)if(ce.length>0){k&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,ce[0].width,ce[0].height);for(let St=0,_t=ce.length;St<_t;St++)Ct=ce[St],k?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data);E.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height),bt&&Ft(E,Mt,Et,zt)):i.texImage2D(o.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,ce[0].width,ce[0].height,Mt.depth);for(let St=0,_t=ce.length;St<_t;St++)if(Ct=ce[St],E.format!==Pi)if(Et!==null)if(k){if(bt)if(E.layerUpdates.size>0){const At=Q_(Ct.width,Ct.height,E.format,E.type);for(const ae of E.layerUpdates){const Be=Ct.data.subarray(ae*At/Ct.data.BYTES_PER_ELEMENT,(ae+1)*At/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ae,Ct.width,Ct.height,1,Et,Be)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Et,zt,Ct.data)}else{k&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,ce[0].width,ce[0].height);for(let St=0,_t=ce.length;St<_t;St++)Ct=ce[St],E.format!==Pi?Et!==null?k?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,Mt.width,Mt.height,Mt.depth),bt)if(E.layerUpdates.size>0){const St=Q_(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const At=Mt.data.subarray(_t*St/Mt.data.BYTES_PER_ELEMENT,(_t+1)*St/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,zt,At)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isData3DTexture)k?(Ut&&i.texStorage3D(o.TEXTURE_3D,Pt,Ot,Mt.width,Mt.height,Mt.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(o.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height);else{let St=Mt.width,_t=Mt.height;for(let At=0;At<Pt;At++)i.texImage2D(o.TEXTURE_2D,At,Ot,St,_t,0,Et,zt,null),St>>=1,_t>>=1}}else if(ce.length>0){if(k&&Ut){const St=qt(ce[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,_t=ce.length;St<_t;St++)Ct=ce[St],k?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Et,zt,Ct):i.texImage2D(o.TEXTURE_2D,St,Ot,Et,zt,Ct);E.generateMipmaps=!1}else if(k){if(Ut){const St=qt(Mt);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,zt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Ot,Et,zt,Mt);y(E)&&v(ht),jt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ut(P,E,W){if(E.image.length!==6)return;const ht=gt(P,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+W);const lt=s.get(vt);if(vt.version!==lt.__version||ht===!0){i.activeTexture(o.TEXTURE0+W);const jt=Ce.getPrimaries(Ce.workingColorSpace),Rt=E.colorSpace===as?null:Ce.getPrimaries(E.colorSpace),Xt=E.colorSpace===as||jt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ne=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ne&&!Mt?Et[_t]=T(E.image[_t],!0,l.maxCubemapSize):Et[_t]=Mt?E.image[_t].image:E.image[_t],Et[_t]=Pe(E,Et[_t]);const zt=Et[0],Ot=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),ce=D(E.internalFormat,Ot,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Ut=lt.__version===void 0||ht===!0,bt=vt.dataReady;let Pt=N(E,zt);it(o.TEXTURE_CUBE_MAP,E);let St;if(ne){k&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ce,zt.width,zt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ae=St[At];E.format!==Pi?Ot!==null?k?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ae.width,ae.height,Ot,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,ce,ae.width,ae.height,0,ae.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ae.width,ae.height,Ot,Ct,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,ce,ae.width,ae.height,0,Ot,Ct,ae.data)}}}else{if(St=E.mipmaps,k&&Ut){St.length>0&&Pt++;const _t=qt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ce,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Ct,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Et[_t].width,Et[_t].height,0,Ot,Ct,Et[_t].data);for(let At=0;At<St.length;At++){const Be=St[At].image[_t].image;k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Be.width,Be.height,Ot,Ct,Be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,ce,Be.width,Be.height,0,Ot,Ct,Be.data)}}else{k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Ct,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Ot,Ct,Et[_t]);for(let At=0;At<St.length;At++){const ae=St[At];k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Ct,ae.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,ce,Ot,Ct,ae.image[_t])}}}y(E)&&v(o.TEXTURE_CUBE_MAP),lt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function wt(P,E,W,ht,vt,lt){const jt=u.convert(W.format,W.colorSpace),Rt=u.convert(W.type),Xt=D(W.internalFormat,jt,Rt,W.colorSpace),ne=s.get(E),Mt=s.get(W);if(Mt.__renderTarget=E,!ne.__hasExternalTextures){const Et=Math.max(1,E.width>>lt),zt=Math.max(1,E.height>>lt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,Xt,Et,zt,E.depth,0,jt,Rt,null):i.texImage2D(vt,lt,Xt,Et,zt,0,jt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Qe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,Mt.__webglTexture,0,V(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,Mt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(P,E,W){if(o.bindRenderbuffer(o.RENDERBUFFER,P),E.depthBuffer){const ht=E.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,lt=U(E.stencilBuffer,vt),jt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Qe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),lt,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,P)}else{const ht=E.textures;for(let vt=0;vt<ht.length;vt++){const lt=ht[vt],jt=u.convert(lt.format,lt.colorSpace),Rt=u.convert(lt.type),Xt=D(lt.internalFormat,jt,Rt,lt.colorSpace);Qe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),Xt,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function It(P,E,W){const ht=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),it(o.TEXTURE_CUBE_MAP,E.depthTexture);const ne=u.convert(E.depthTexture.format),Mt=u.convert(E.depthTexture.type);let Et;E.depthTexture.format===Ta?Et=o.DEPTH_COMPONENT24:E.depthTexture.format===zs&&(Et=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,E.width,E.height,0,ne,Mt,null)}}else ct(E.depthTexture,0);const lt=vt.__webglTexture,jt=V(E),Rt=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xt=E.depthTexture.format===zs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ta)Qe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else if(E.depthTexture.format===zs)Qe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else throw new Error("Unknown depthTexture format")}function me(P){const E=s.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ht=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ht}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)It(E.__webglFramebuffer[ht],P,ht);else{const ht=P.texture.mipmaps;ht&&ht.length>0?It(E.__webglFramebuffer[0],P,0):It(E.__webglFramebuffer,P,0)}else if(W){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),Gt(E.__webglDepthbuffer[ht],P,!1);else{const vt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}else{const ht=P.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Gt(E.__webglDepthbuffer,P,!1);else{const vt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(P,E,W){const ht=s.get(P);E!==void 0&&wt(ht.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&me(P)}function Se(P){const E=P.texture,W=s.get(P),ht=s.get(E);P.addEventListener("dispose",O);const vt=P.textures,lt=P.isWebGLCubeRenderTarget===!0,jt=vt.length>1;if(jt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),lt){W.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)W.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else W.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)W.__webglFramebuffer[Rt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ne=s.get(vt[Rt]);ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture(),h.memory.textures++)}if(P.samples>0&&Qe(P)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];W.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Rt]);const ne=u.convert(Xt.format,Xt.colorSpace),Mt=u.convert(Xt.type),Et=D(Xt.internalFormat,ne,Mt,Xt.colorSpace,P.isXRRenderTarget===!0),zt=V(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Et,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,W.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Gt(W.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),it(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(W.__webglFramebuffer[Rt][Xt],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else wt(W.__webglFramebuffer[Rt],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ne=vt[Rt],Mt=s.get(ne);let Et=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Et=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),it(Et,ne),wt(W.__webglFramebuffer,P,ne,o.COLOR_ATTACHMENT0+Rt,Et,0),y(ne)&&v(Et)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),it(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(W.__webglFramebuffer[Xt],P,E,o.COLOR_ATTACHMENT0,Rt,Xt);else wt(W.__webglFramebuffer,P,E,o.COLOR_ATTACHMENT0,Rt,0);y(E)&&v(Rt),i.unbindTexture()}P.depthBuffer&&me(P)}function ge(P){const E=P.textures;for(let W=0,ht=E.length;W<ht;W++){const vt=E[W];if(y(vt)){const lt=L(P),jt=s.get(vt).__webglTexture;i.bindTexture(lt,jt),v(lt),i.unbindTexture()}}}const Ue=[],oe=[];function en(P){if(P.samples>0){if(Qe(P)===!1){const E=P.textures,W=P.width,ht=P.height;let vt=o.COLOR_BUFFER_BIT;const lt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=s.get(P),Rt=E.length>1;if(Rt)for(let ne=0;ne<E.length;ne++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Xt=P.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ne=0;ne<E.length;ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ne]);const Mt=s.get(E[ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,W,ht,0,0,W,ht,vt,o.NEAREST),m===!0&&(Ue.length=0,oe.length=0,Ue.push(o.COLOR_ATTACHMENT0+ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ue.push(lt),oe.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let ne=0;ne<E.length;ne++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ne]);const Mt=s.get(E[ne]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function V(P){return Math.min(l.maxSamples,P.samples)}function Qe(P){const E=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(P){const E=h.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function Pe(P,E){const W=P.colorSpace,ht=P.format,vt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==qr&&W!==as&&(Ce.getTransfer(W)===Ve?(ht!==Pi||vt!==li)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",W)),E}function qt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=nt,this.setTexture2D=ct,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=at,this.rebindTextures=tn,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function FA(o,t){function i(s,l=as){let u;const h=Ce.getTransfer(l);if(s===li)return o.UNSIGNED_BYTE;if(s===_p)return o.UNSIGNED_SHORT_4_4_4_4;if(s===vp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Bv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Fv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Pv)return o.BYTE;if(s===zv)return o.SHORT;if(s===rl)return o.UNSIGNED_SHORT;if(s===gp)return o.INT;if(s===Ki)return o.UNSIGNED_INT;if(s===qi)return o.FLOAT;if(s===ui)return o.HALF_FLOAT;if(s===Iv)return o.ALPHA;if(s===Hv)return o.RGB;if(s===Pi)return o.RGBA;if(s===Ta)return o.DEPTH_COMPONENT;if(s===zs)return o.DEPTH_STENCIL;if(s===Vv)return o.RED;if(s===xp)return o.RED_INTEGER;if(s===Wr)return o.RG;if(s===Sp)return o.RG_INTEGER;if(s===yp)return o.RGBA_INTEGER;if(s===nc||s===ic||s===ac||s===sc)if(h===Ve)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===nc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===nc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ic)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ac)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===sc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wd||s===Dd||s===Ud||s===Ld)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===wd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ud)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ld)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nd||s===Od||s===Pd||s===zd||s===Bd||s===Fd||s===Id)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Nd||s===Od)return h===Ve?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Pd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===zd)return u.COMPRESSED_R11_EAC;if(s===Bd)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Fd)return u.COMPRESSED_RG11_EAC;if(s===Id)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Hd||s===Vd||s===Gd||s===Xd||s===kd||s===Wd||s===qd||s===Yd||s===jd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Hd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$d)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tp||s===ep||s===np)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===tp)return h===Ve?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ep)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===np)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ip||s===ap||s===sp||s===rp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===ip)return u.COMPRESSED_RED_RGTC1_EXT;if(s===ap)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ol?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const IA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new tx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Fn({vertexShader:IA,fragmentShader:HA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new vc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GA extends Zr{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,M=null,b=null;const T=typeof XRWebGLBinding<"u",y=new VA,v={},L=i.getContextAttributes();let D=null,U=null;const N=[],z=[],O=new ee;let q=null;const C=new Ei;C.viewport=new rn;const w=new Ei;w.viewport=new rn;const G=[C,w],nt=new JM;let st=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=N[et];return ut===void 0&&(ut=new nd,N[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=N[et];return ut===void 0&&(ut=new nd,N[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=N[et];return ut===void 0&&(ut=new nd,N[et]=ut),ut.getHandSpace()};function ct(et){const ut=z.indexOf(et.inputSource);if(ut===-1)return;const wt=N[ut];wt!==void 0&&(wt.update(et.inputSource,et.frame,p||h),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",H);for(let et=0;et<N.length;et++){const ut=z[et];ut!==null&&(z[et]=null,N[et].disconnect(ut))}st=null,dt=null,y.reset();for(const et in v)delete v[et];t.setRenderTarget(D),M=null,x=null,g=null,l=null,U=null,Ft.stop(),s.isPresenting=!1,t.setPixelRatio(q),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",F),l.addEventListener("inputsourceschange",H),L.xrCompatible!==!0&&await i.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Gt=null,It=null;L.depth&&(It=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=L.stencil?zs:Ta,Gt=L.stencil?ol:Ki);const me={colorFormat:i.RGBA8,depthFormat:It,scaleFactor:u};g=this.getBinding(),x=g.createProjectionLayer(me),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Qn(x.textureWidth,x.textureHeight,{format:Pi,type:li,depthTexture:new cl(x.textureWidth,x.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const wt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Qn(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:li,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(et){for(let ut=0;ut<et.removed.length;ut++){const wt=et.removed[ut],Gt=z.indexOf(wt);Gt>=0&&(z[Gt]=null,N[Gt].disconnect(wt))}for(let ut=0;ut<et.added.length;ut++){const wt=et.added[ut];let Gt=z.indexOf(wt);if(Gt===-1){for(let me=0;me<N.length;me++)if(me>=z.length){z.push(wt),Gt=me;break}else if(z[me]===null){z[me]=wt,Gt=me;break}if(Gt===-1)break}const It=N[Gt];It&&It.connect(wt)}}const at=new j,yt=new j;function xt(et,ut,wt){at.setFromMatrixPosition(ut.matrixWorld),yt.setFromMatrixPosition(wt.matrixWorld);const Gt=at.distanceTo(yt),It=ut.projectionMatrix.elements,me=wt.projectionMatrix.elements,tn=It[14]/(It[10]-1),Se=It[14]/(It[10]+1),ge=(It[9]+1)/It[5],Ue=(It[9]-1)/It[5],oe=(It[8]-1)/It[0],en=(me[8]+1)/me[0],V=tn*oe,Qe=tn*en,Te=Gt/(-oe+en),Pe=Te*-oe;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Pe),et.translateZ(Te),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qt=tn+Te,P=Se+Te,E=V-Pe,W=Qe+(Gt-Pe),ht=ge*Se/P*qt,vt=Ue*Se/P*qt;et.projectionMatrix.makePerspective(E,W,ht,vt,qt,P),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function B(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ut=et.near,wt=et.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),nt.near=w.near=C.near=ut,nt.far=w.far=C.far=wt,(st!==nt.near||dt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),st=nt.near,dt=nt.far),nt.layers.mask=et.layers.mask|6,C.layers.mask=nt.layers.mask&3,w.layers.mask=nt.layers.mask&5;const Gt=et.parent,It=nt.cameras;B(nt,Gt);for(let me=0;me<It.length;me++)B(It[me],Gt);It.length===2?xt(nt,C,w):nt.projectionMatrix.copy(C.projectionMatrix),it(et,nt,Gt)};function it(et,ut,wt){wt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=lp*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(nt)},this.getCameraTexture=function(et){return v[et]};let gt=null;function Tt(et,ut){if(_=ut.getViewerPose(p||h),b=ut,_!==null){const wt=_.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Gt=!1;wt.length!==nt.cameras.length&&(nt.cameras.length=0,Gt=!0);for(let Se=0;Se<wt.length;Se++){const ge=wt[Se];let Ue=null;if(M!==null)Ue=M.getViewport(ge);else{const en=g.getViewSubImage(x,ge);Ue=en.viewport,Se===0&&(t.setRenderTargetTextures(U,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(U))}let oe=G[Se];oe===void 0&&(oe=new Ei,oe.layers.enable(Se),oe.viewport=new rn,G[Se]=oe),oe.matrix.fromArray(ge.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ge.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Se===0&&(nt.matrix.copy(oe.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Gt===!0&&nt.cameras.push(oe)}const It=l.enabledFeatures;if(It&&It.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const Se=g.getDepthInformation(wt[0]);Se&&Se.isValid&&Se.texture&&y.init(Se,l.renderState)}if(It&&It.includes("camera-access")&&T){t.state.unbindTexture(),g=s.getBinding();for(let Se=0;Se<wt.length;Se++){const ge=wt[Se].camera;if(ge){let Ue=v[ge];Ue||(Ue=new tx,v[ge]=Ue);const oe=g.getCameraImage(ge);Ue.sourceTexture=oe}}}}for(let wt=0;wt<N.length;wt++){const Gt=z[wt],It=N[wt];Gt!==null&&It!==void 0&&It.update(Gt,ut,p||h)}gt&&gt(et,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),b=null}const Ft=new ax;Ft.setAnimationLoop(Tt),this.setAnimationLoop=function(et){gt=et},this.dispose=function(){}}}const Us=new Qi,XA=new Ke;function kA(o,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,jv(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,L,D,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,U)):v.isMeshMatcapMaterial?(u(y,v),b(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),T(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,L,D):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=t.get(v),D=L.envMap,U=L.envMapRotation;D&&(y.envMap.value=D,Us.copy(U),Us.x*=-1,Us.y*=-1,Us.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),y.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(Us)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,L,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=D*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const L=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function WA(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const U=D.program;s.uniformBlockBinding(L,U)}function p(L,D){let U=l[L.id];U===void 0&&(b(L),U=_(L),l[L.id]=U,L.addEventListener("dispose",y));const N=D.program;s.updateUBOMapping(L,N);const z=t.render.frame;u[L.id]!==z&&(x(L),u[L.id]=z)}function _(L){const D=g();L.__bindingPointIndex=D;const U=o.createBuffer(),N=L.__size,z=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,N,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,U),U}function g(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=l[L.id],U=L.uniforms,N=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let z=0,O=U.length;z<O;z++){const q=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,w=q.length;C<w;C++){const G=q[C];if(M(G,z,C,N)===!0){const nt=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let dt=0;for(let ct=0;ct<st.length;ct++){const F=st[ct],H=T(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,nt+dt,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,D,U,N){const z=L.value,O=D+"_"+U;if(N[O]===void 0)return typeof z=="number"||typeof z=="boolean"?N[O]=z:N[O]=z.clone(),!0;{const q=N[O];if(typeof z=="number"||typeof z=="boolean"){if(q!==z)return N[O]=z,!0}else if(q.equals(z)===!1)return q.copy(z),!0}return!1}function b(L){const D=L.uniforms;let U=0;const N=16;for(let O=0,q=D.length;O<q;O++){const C=Array.isArray(D[O])?D[O]:[D[O]];for(let w=0,G=C.length;w<G;w++){const nt=C[w],st=Array.isArray(nt.value)?nt.value:[nt.value];for(let dt=0,ct=st.length;dt<ct;dt++){const F=st[dt],H=T(F),at=U%N,yt=at%H.boundary,xt=at+yt;U+=yt,xt!==0&&N-xt<H.storage&&(U+=N-xt),nt.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=U,U+=H.storage}}}const z=U%N;return z>0&&(U+=N-z),L.__size=U,L.__cache={},this}function T(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",L),D}function y(L){const D=L.target;D.removeEventListener("dispose",y);const U=h.indexOf(D.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function v(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}const qA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function YA(){return Xi===null&&(Xi=new LM(qA,16,16,Wr,ui),Xi.name="DFG_LUT",Xi.minFilter=Bn,Xi.magFilter=Bn,Xi.wrapS=Ea,Xi.wrapT=Ea,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class jA{constructor(t={}){const{canvas:i=aM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:M=li}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const T=M,y=new Set([yp,Sp,xp]),v=new Set([li,Ki,rl,ol,_p,vp]),L=new Uint32Array(4),D=new Int32Array(4);let U=null,N=null;const z=[],O=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=oi;let G=0,nt=0,st=null,dt=-1,ct=null;const F=new rn,H=new rn;let at=null;const yt=new le(0);let xt=0,B=i.width,it=i.height,gt=1,Tt=null,Ft=null;const et=new rn(0,0,B,it),ut=new rn(0,0,B,it);let wt=!1;const Gt=new Cp;let It=!1,me=!1;const tn=new Ke,Se=new j,ge=new rn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function en(){return st===null?gt:1}let V=s;function Qe(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${dp}`),i.addEventListener("webglcontextlost",ae,!1),i.addEventListener("webglcontextrestored",Be,!1),i.addEventListener("webglcontextcreationerror",Ae,!1),V===null){const Y="webgl2";if(V=Qe(Y,R),V===null)throw Qe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Re("WebGLRenderer: "+R.message),R}let Te,Pe,qt,P,E,W,ht,vt,lt,jt,Rt,Xt,ne,Mt,Et,zt,Ot,Ct,ce,k,Ut,bt,Pt,St;function _t(){Te=new YT(V),Te.init(),bt=new FA(V,Te),Pe=new FT(V,Te,t,bt),qt=new zA(V,Te),Pe.reversedDepthBuffer&&x&&qt.buffers.depth.setReversed(!0),P=new KT(V),E=new yA,W=new BA(V,Te,qt,E,Pe,bt,P),ht=new HT(C),vt=new qT(C),lt=new tE(V),Pt=new zT(V,lt),jt=new jT(V,lt,P,Pt),Rt=new JT(V,jt,lt,P),ce=new QT(V,Pe,W),zt=new IT(E),Xt=new SA(C,ht,vt,Te,Pe,Pt,zt),ne=new kA(C,E),Mt=new EA,Et=new wA(Te),Ct=new PT(C,ht,vt,qt,Rt,b,m),Ot=new OA(C,Rt,Pe),St=new WA(V,P,Pe,qt),k=new BT(V,Te,P),Ut=new ZT(V,Te,P),P.programs=Xt.programs,C.capabilities=Pe,C.extensions=Te,C.properties=E,C.renderLists=Mt,C.shadowMap=Ot,C.state=qt,C.info=P}_t(),T!==li&&(q=new t1(T,i.width,i.height,l,u));const At=new GA(C,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(B,it,!1))},this.getSize=function(R){return R.set(B,it)},this.setSize=function(R,Y,rt=!0){if(At.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,it=Y,i.width=Math.floor(R*gt),i.height=Math.floor(Y*gt),rt===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(B*gt,it*gt).floor()},this.setDrawingBufferSize=function(R,Y,rt){B=R,it=Y,gt=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(T===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,Y,rt,$){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,Y,rt,$),qt.viewport(F.copy(et).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(ut)},this.setScissor=function(R,Y,rt,$){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,Y,rt,$),qt.scissor(H.copy(ut).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(R){qt.setScissorTest(wt=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){Ft=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let $=0;if(R){let K=!1;if(st!==null){const Dt=st.texture.format;K=y.has(Dt)}if(K){const Dt=st.texture.type,Bt=v.has(Dt),Lt=Ct.getClearColor(),Ht=Ct.getClearAlpha(),kt=Lt.r,Qt=Lt.g,Wt=Lt.b;Bt?(L[0]=kt,L[1]=Qt,L[2]=Wt,L[3]=Ht,V.clearBufferuiv(V.COLOR,0,L)):(D[0]=kt,D[1]=Qt,D[2]=Wt,D[3]=Ht,V.clearBufferiv(V.COLOR,0,D))}else $|=V.COLOR_BUFFER_BIT}Y&&($|=V.DEPTH_BUFFER_BIT),rt&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ae,!1),i.removeEventListener("webglcontextrestored",Be,!1),i.removeEventListener("webglcontextcreationerror",Ae,!1),Ct.dispose(),Mt.dispose(),Et.dispose(),E.dispose(),ht.dispose(),vt.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),Xt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Vs),At.removeEventListener("sessionend",$r),Fi.stop()};function ae(R){R.preventDefault(),fc("WebGLRenderer: Context Lost."),w=!0}function Be(){fc("WebGLRenderer: Context Restored."),w=!1;const R=P.autoReset,Y=Ot.enabled,rt=Ot.autoUpdate,$=Ot.needsUpdate,K=Ot.type;_t(),P.autoReset=R,Ot.enabled=Y,Ot.autoUpdate=rt,Ot.needsUpdate=$,Ot.type=K}function Ae(R){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Nn(R){const Y=R.target;Y.removeEventListener("dispose",Nn),Ti(Y)}function Ti(R){gl(R),E.remove(R)}function gl(R){const Y=E.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){Xt.releaseProgram(rt)}),R.isShaderMaterial&&Xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,$,K,Dt){Y===null&&(Y=Ue);const Bt=K.isMesh&&K.matrixWorld.determinant()<0,Lt=ls(R,Y,rt,$,K);qt.setMaterial($,Bt);let Ht=rt.index,kt=1;if($.wireframe===!0){if(Ht=jt.getWireframeAttribute(rt),Ht===void 0)return;kt=2}const Qt=rt.drawRange,Wt=rt.attributes.position;let $t=Qt.start*kt,Le=(Qt.start+Qt.count)*kt;Dt!==null&&($t=Math.max($t,Dt.start*kt),Le=Math.min(Le,(Dt.start+Dt.count)*kt)),Ht!==null?($t=Math.max($t,0),Le=Math.min(Le,Ht.count)):Wt!=null&&($t=Math.max($t,0),Le=Math.min(Le,Wt.count));const Je=Le-$t;if(Je<0||Je===1/0)return;Pt.setup(K,$,Lt,rt,Ht);let Ye,ze=k;if(Ht!==null&&(Ye=lt.get(Ht),ze=Ut,ze.setIndex(Ye)),K.isMesh)$.wireframe===!0?(qt.setLineWidth($.wireframeLinewidth*en()),ze.setMode(V.LINES)):ze.setMode(V.TRIANGLES);else if(K.isLine){let Zt=$.linewidth;Zt===void 0&&(Zt=1),qt.setLineWidth(Zt*en()),K.isLineSegments?ze.setMode(V.LINES):K.isLineLoop?ze.setMode(V.LINE_LOOP):ze.setMode(V.LINE_STRIP)}else K.isPoints?ze.setMode(V.POINTS):K.isSprite&&ze.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ul("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))ze.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Zt=K._multiDrawStarts,Ne=K._multiDrawCounts,se=K._multiDrawCount,En=Ht?lt.get(Ht).bytesPerElement:1,Ji=E.get($).currentProgram.getUniforms();for(let bn=0;bn<se;bn++)Ji.setValue(V,"_gl_DrawID",bn),ze.render(Zt[bn]/En,Ne[bn])}else if(K.isInstancedMesh)ze.renderInstances($t,Je,K.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ne=Math.min(rt.instanceCount,Zt);ze.renderInstances($t,Je,Ne)}else ze.render($t,Je)};function Qr(R,Y,rt){R.transparent===!0&&R.side===Ma&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Xs(R,Y,rt),R.side=os,R.needsUpdate=!0,Xs(R,Y,rt),R.side=Ma):Xs(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),N=Et.get(rt),N.init(Y),O.push(N),rt.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(N.pushLight(K),K.castShadow&&N.pushShadow(K))}),R!==rt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(N.pushLight(K),K.castShadow&&N.pushShadow(K))}),N.setupLights();const $=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){const Lt=Dt[Bt];Qr(Lt,rt,K),$.add(Lt)}else Qr(Dt,rt,K),$.add(Dt)}),N=O.pop(),$},this.compileAsync=function(R,Y,rt=null){const $=this.compile(R,Y,rt);return new Promise(K=>{function Dt(){if($.forEach(function(Bt){E.get(Bt).currentProgram.isReady()&&$.delete(Bt)}),$.size===0){K(R);return}setTimeout(Dt,10)}Te.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Hs=null;function Jr(R){Hs&&Hs(R)}function Vs(){Fi.stop()}function $r(){Fi.start()}const Fi=new ax;Fi.setAnimationLoop(Jr),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(R){Hs=R,At.setAnimationLoop(R),R===null?Fi.stop():Fi.start()},At.addEventListener("sessionstart",Vs),At.addEventListener("sessionend",$r),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const rt=At.enabled===!0&&At.isPresenting===!0,$=q!==null&&(st===null||rt)&&q.begin(C,st);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,st),N=Et.get(R,O.length),N.init(Y),O.push(N),tn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Gt.setFromProjectionMatrix(tn,Yi,Y.reversedDepth),me=this.localClippingEnabled,It=zt.init(this.clippingPlanes,me),U=Mt.get(R,z.length),U.init(),z.push(U),At.enabled===!0&&At.isPresenting===!0){const Bt=C.xr.getDepthSensingMesh();Bt!==null&&fi(Bt,Y,-1/0,C.sortObjects)}fi(R,Y,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(Tt,Ft),oe=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,oe&&Ct.addToRenderList(U,R),this.info.render.frame++,It===!0&&zt.beginShadows();const K=N.state.shadowsArray;if(Ot.render(K,R,Y),It===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&q.hasRenderPass())===!1){const Bt=U.opaque,Lt=U.transmissive;if(N.setupLights(),Y.isArrayCamera){const Ht=Y.cameras;if(Lt.length>0)for(let kt=0,Qt=Ht.length;kt<Qt;kt++){const Wt=Ht[kt];Mn(Bt,Lt,R,Wt)}oe&&Ct.render(R);for(let kt=0,Qt=Ht.length;kt<Qt;kt++){const Wt=Ht[kt];un(U,R,Wt,Wt.viewport)}}else Lt.length>0&&Mn(Bt,Lt,R,Y),oe&&Ct.render(R),un(U,R,Y)}st!==null&&nt===0&&(W.updateMultisampleRenderTarget(st),W.updateRenderTargetMipmap(st)),$&&q.end(C),R.isScene===!0&&R.onAfterRender(C,R,Y),Pt.resetDefaultState(),dt=-1,ct=null,O.pop(),O.length>0?(N=O[O.length-1],It===!0&&zt.setGlobalState(C.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function fi(R,Y,rt,$){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Gt.intersectsSprite(R)){$&&ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(tn);const Bt=Rt.update(R),Lt=R.material;Lt.visible&&U.push(R,Bt,Lt,rt,ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Gt.intersectsObject(R))){const Bt=Rt.update(R),Lt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ge.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),ge.copy(Bt.boundingSphere.center)),ge.applyMatrix4(R.matrixWorld).applyMatrix4(tn)),Array.isArray(Lt)){const Ht=Bt.groups;for(let kt=0,Qt=Ht.length;kt<Qt;kt++){const Wt=Ht[kt],$t=Lt[Wt.materialIndex];$t&&$t.visible&&U.push(R,Bt,$t,rt,ge.z,Wt)}}else Lt.visible&&U.push(R,Bt,Lt,rt,ge.z,null)}}const Dt=R.children;for(let Bt=0,Lt=Dt.length;Bt<Lt;Bt++)fi(Dt[Bt],Y,rt,$)}function un(R,Y,rt,$){const{opaque:K,transmissive:Dt,transparent:Bt}=R;N.setupLightsView(rt),It===!0&&zt.setGlobalState(C.clippingPlanes,rt),$&&qt.viewport(F.copy($)),K.length>0&&Ai(K,Y,rt),Dt.length>0&&Ai(Dt,Y,rt),Bt.length>0&&Ai(Bt,Y,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Mn(R,Y,rt,$){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[$.id]===void 0){const $t=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[$.id]=new Qn(1,1,{generateMipmaps:!0,type:$t?ui:li,minFilter:Ps,samples:Pe.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Dt=N.state.transmissionRenderTarget[$.id],Bt=$.viewport||F;Dt.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);const Lt=C.getRenderTarget(),Ht=C.getActiveCubeFace(),kt=C.getActiveMipmapLevel();C.setRenderTarget(Dt),C.getClearColor(yt),xt=C.getClearAlpha(),xt<1&&C.setClearColor(16777215,.5),C.clear(),oe&&Ct.render(rt);const Qt=C.toneMapping;C.toneMapping=Zi;const Wt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),N.setupLightsView($),It===!0&&zt.setGlobalState(C.clippingPlanes,$),Ai(R,rt,$),W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Le=0,Je=Y.length;Le<Je;Le++){const Ye=Y[Le],{object:ze,geometry:Zt,material:Ne,group:se}=Ye;if(Ne.side===Ma&&ze.layers.test($.layers)){const En=Ne.side;Ne.side=Kn,Ne.needsUpdate=!0,Gs(ze,rt,$,Zt,Ne,se),Ne.side=En,Ne.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt))}C.setRenderTarget(Lt,Ht,kt),C.setClearColor(yt,xt),Wt!==void 0&&($.viewport=Wt),C.toneMapping=Qt}function Ai(R,Y,rt){const $=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Dt=R.length;K<Dt;K++){const Bt=R[K],{object:Lt,geometry:Ht,group:kt}=Bt;let Qt=Bt.material;Qt.allowOverride===!0&&$!==null&&(Qt=$),Lt.layers.test(rt.layers)&&Gs(Lt,Y,rt,Ht,Qt,kt)}}function Gs(R,Y,rt,$,K,Dt){R.onBeforeRender(C,Y,rt,$,K,Dt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,Y,rt,$,R,Dt),K.transparent===!0&&K.side===Ma&&K.forceSinglePass===!1?(K.side=Kn,K.needsUpdate=!0,C.renderBufferDirect(rt,Y,$,K,R,Dt),K.side=os,K.needsUpdate=!0,C.renderBufferDirect(rt,Y,$,K,R,Dt),K.side=Ma):C.renderBufferDirect(rt,Y,$,K,R,Dt),R.onAfterRender(C,Y,rt,$,K,Dt)}function Xs(R,Y,rt){Y.isScene!==!0&&(Y=Ue);const $=E.get(R),K=N.state.lights,Dt=N.state.shadowsArray,Bt=K.state.version,Lt=Xt.getParameters(R,K.state,Dt,Y,rt),Ht=Xt.getProgramCacheKey(Lt);let kt=$.programs;$.environment=R.isMeshStandardMaterial?Y.environment:null,$.fog=Y.fog,$.envMap=(R.isMeshStandardMaterial?vt:ht).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",Nn),kt=new Map,$.programs=kt);let Qt=kt.get(Ht);if(Qt!==void 0){if($.currentProgram===Qt&&$.lightsStateVersion===Bt)return to(R,Lt),Qt}else Lt.uniforms=Xt.getUniforms(R),R.onBeforeCompile(Lt,C),Qt=Xt.acquireProgram(Lt,Ht),kt.set(Ht,Qt),$.uniforms=Lt.uniforms;const Wt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=zt.uniform),to(R,Lt),$.needsLights=Aa(R),$.lightsStateVersion=Bt,$.needsLights&&(Wt.ambientLightColor.value=K.state.ambient,Wt.lightProbe.value=K.state.probe,Wt.directionalLights.value=K.state.directional,Wt.directionalLightShadows.value=K.state.directionalShadow,Wt.spotLights.value=K.state.spot,Wt.spotLightShadows.value=K.state.spotShadow,Wt.rectAreaLights.value=K.state.rectArea,Wt.ltc_1.value=K.state.rectAreaLTC1,Wt.ltc_2.value=K.state.rectAreaLTC2,Wt.pointLights.value=K.state.point,Wt.pointLightShadows.value=K.state.pointShadow,Wt.hemisphereLights.value=K.state.hemi,Wt.directionalShadowMap.value=K.state.directionalShadowMap,Wt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Wt.spotShadowMap.value=K.state.spotShadowMap,Wt.spotLightMatrix.value=K.state.spotLightMatrix,Wt.spotLightMap.value=K.state.spotLightMap,Wt.pointShadowMap.value=K.state.pointShadowMap,Wt.pointShadowMatrix.value=K.state.pointShadowMatrix),$.currentProgram=Qt,$.uniformsList=null,Qt}function _l(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=oc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function to(R,Y){const rt=E.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function ls(R,Y,rt,$,K){Y.isScene!==!0&&(Y=Ue),W.resetTextureUnits();const Dt=Y.fog,Bt=$.isMeshStandardMaterial?Y.environment:null,Lt=st===null?C.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:qr,Ht=($.isMeshStandardMaterial?vt:ht).get($.envMap||Bt),kt=$.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Wt=!!rt.morphAttributes.position,$t=!!rt.morphAttributes.normal,Le=!!rt.morphAttributes.color;let Je=Zi;$.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Je=C.toneMapping);const Ye=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ze=Ye!==void 0?Ye.length:0,Zt=E.get($),Ne=N.state.lights;if(It===!0&&(me===!0||R!==ct)){const An=R===ct&&$.id===dt;zt.setState($,R,An)}let se=!1;$.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ne.state.version||Zt.outputColorSpace!==Lt||K.isBatchedMesh&&Zt.batching===!1||!K.isBatchedMesh&&Zt.batching===!0||K.isBatchedMesh&&Zt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Zt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Zt.instancing===!1||!K.isInstancedMesh&&Zt.instancing===!0||K.isSkinnedMesh&&Zt.skinning===!1||!K.isSkinnedMesh&&Zt.skinning===!0||K.isInstancedMesh&&Zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Zt.instancingMorph===!1&&K.morphTexture!==null||Zt.envMap!==Ht||$.fog===!0&&Zt.fog!==Dt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==zt.numPlanes||Zt.numIntersection!==zt.numIntersection)||Zt.vertexAlphas!==kt||Zt.vertexTangents!==Qt||Zt.morphTargets!==Wt||Zt.morphNormals!==$t||Zt.morphColors!==Le||Zt.toneMapping!==Je||Zt.morphTargetsCount!==ze)&&(se=!0):(se=!0,Zt.__version=$.version);let En=Zt.currentProgram;se===!0&&(En=Xs($,Y,K));let Ji=!1,bn=!1,hi=!1;const Fe=En.getUniforms(),Tn=Zt.uniforms;if(qt.useProgram(En.program)&&(Ji=!0,bn=!0,hi=!0),$.id!==dt&&(dt=$.id,bn=!0),Ji||ct!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(V,"projectionMatrix",R.projectionMatrix),Fe.setValue(V,"viewMatrix",R.matrixWorldInverse);const Rn=Fe.map.cameraPosition;Rn!==void 0&&Rn.setValue(V,Se.setFromMatrixPosition(R.matrixWorld)),Pe.logarithmicDepthBuffer&&Fe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Fe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ct!==R&&(ct=R,bn=!0,hi=!0)}if(Zt.needsLights&&(Ne.state.directionalShadowMap.length>0&&Fe.setValue(V,"directionalShadowMap",Ne.state.directionalShadowMap,W),Ne.state.spotShadowMap.length>0&&Fe.setValue(V,"spotShadowMap",Ne.state.spotShadowMap,W),Ne.state.pointShadowMap.length>0&&Fe.setValue(V,"pointShadowMap",Ne.state.pointShadowMap,W)),K.isSkinnedMesh){Fe.setOptional(V,K,"bindMatrix"),Fe.setOptional(V,K,"bindMatrixInverse");const An=K.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Fe.setValue(V,"boneTexture",An.boneTexture,W))}K.isBatchedMesh&&(Fe.setOptional(V,K,"batchingTexture"),Fe.setValue(V,"batchingTexture",K._matricesTexture,W),Fe.setOptional(V,K,"batchingIdTexture"),Fe.setValue(V,"batchingIdTexture",K._indirectTexture,W),Fe.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Fe.setValue(V,"batchingColorTexture",K._colorsTexture,W));const mn=rt.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ce.update(K,rt,En),(bn||Zt.receiveShadow!==K.receiveShadow)&&(Zt.receiveShadow=K.receiveShadow,Fe.setValue(V,"receiveShadow",K.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Tn.envMap.value=Ht,Tn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=YA()),bn&&(Fe.setValue(V,"toneMappingExposure",C.toneMappingExposure),Zt.needsLights&&eo(Tn,hi),Dt&&$.fog===!0&&ne.refreshFogUniforms(Tn,Dt),ne.refreshMaterialUniforms(Tn,$,gt,it,N.state.transmissionRenderTarget[R.id]),oc.upload(V,_l(Zt),Tn,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(oc.upload(V,_l(Zt),Tn,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Fe.setValue(V,"center",K.center),Fe.setValue(V,"modelViewMatrix",K.modelViewMatrix),Fe.setValue(V,"normalMatrix",K.normalMatrix),Fe.setValue(V,"modelMatrix",K.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const An=$.uniformsGroups;for(let Rn=0,ks=An.length;Rn<ks;Rn++){const Ri=An[Rn];St.update(Ri,En),St.bind(Ri,En)}}return En}function eo(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(R,Y,rt){const $=E.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Y,E.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:rt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=E.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Ra=V.createFramebuffer();this.setRenderTarget=function(R,Y=0,rt=0){st=R,G=Y,nt=rt;let $=null,K=!1,Dt=!1;if(R){const Lt=E.get(R);if(Lt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),F.copy(R.viewport),H.copy(R.scissor),at=R.scissorTest,qt.viewport(F),qt.scissor(H),qt.setScissorTest(at),dt=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Lt.__hasExternalTextures)W.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(Lt.__boundDepthTexture!==Qt){if(Qt!==null&&E.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const kt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(kt[Y])?$=kt[Y][rt]:$=kt[Y],K=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?$=E.get(R).__webglMultisampledFramebuffer:Array.isArray(kt)?$=kt[rt]:$=kt,F.copy(R.viewport),H.copy(R.scissor),at=R.scissorTest}else F.copy(et).multiplyScalar(gt).floor(),H.copy(ut).multiplyScalar(gt).floor(),at=wt;if(rt!==0&&($=Ra),qt.bindFramebuffer(V.FRAMEBUFFER,$)&&qt.drawBuffers(R,$),qt.viewport(F),qt.scissor(H),qt.setScissorTest(at),K){const Lt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,rt)}else if(Dt){const Lt=Y;for(let Ht=0;Ht<R.textures.length;Ht++){const kt=E.get(R.textures[Ht]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ht,kt.__webglTexture,rt,Lt)}}else if(R!==null&&rt!==0){const Lt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,rt)}dt=-1},this.readRenderTargetPixels=function(R,Y,rt,$,K,Dt,Bt,Lt=0){if(!(R&&R.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht){qt.bindFramebuffer(V.FRAMEBUFFER,Ht);try{const kt=R.textures[Lt],Qt=kt.format,Wt=kt.type;if(!Pe.textureFormatReadable(Qt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Wt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-$&&rt>=0&&rt<=R.height-K&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(Y,rt,$,K,bt.convert(Qt),bt.convert(Wt),Dt))}finally{const kt=st!==null?E.get(st).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,$,K,Dt,Bt,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht)if(Y>=0&&Y<=R.width-$&&rt>=0&&rt<=R.height-K){qt.bindFramebuffer(V.FRAMEBUFFER,Ht);const kt=R.textures[Lt],Qt=kt.format,Wt=kt.type;if(!Pe.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(Y,rt,$,K,bt.convert(Qt),bt.convert(Wt),0);const Le=st!==null?E.get(st).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Le);const Je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await sM(V,Je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer($t),V.deleteSync(Je),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const $=Math.pow(2,-rt),K=Math.floor(R.image.width*$),Dt=Math.floor(R.image.height*$),Bt=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;W.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,Bt,Lt,K,Dt),qt.unbindTexture()};const us=V.createFramebuffer(),Ca=V.createFramebuffer();this.copyTextureToTexture=function(R,Y,rt=null,$=null,K=0,Dt=null){Dt===null&&(K!==0?(ul("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=K,K=0):Dt=0);let Bt,Lt,Ht,kt,Qt,Wt,$t,Le,Je;const Ye=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(rt!==null)Bt=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Ht=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,Qt=rt.min.y,Wt=rt.isBox3?rt.min.z:0;else{const mn=Math.pow(2,-K);Bt=Math.floor(Ye.width*mn),Lt=Math.floor(Ye.height*mn),R.isDataArrayTexture?Ht=Ye.depth:R.isData3DTexture?Ht=Math.floor(Ye.depth*mn):Ht=1,kt=0,Qt=0,Wt=0}$!==null?($t=$.x,Le=$.y,Je=$.z):($t=0,Le=0,Je=0);const ze=bt.convert(Y.format),Zt=bt.convert(Y.type);let Ne;Y.isData3DTexture?(W.setTexture3D(Y,0),Ne=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Ne=V.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Ne=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const se=V.getParameter(V.UNPACK_ROW_LENGTH),En=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ji=V.getParameter(V.UNPACK_SKIP_PIXELS),bn=V.getParameter(V.UNPACK_SKIP_ROWS),hi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ye.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,kt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wt);const Fe=R.isDataArrayTexture||R.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const mn=E.get(R),An=E.get(Y),Rn=E.get(mn.__renderTarget),ks=E.get(An.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,Rn.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let Ri=0;Ri<Ht;Ri++)Fe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,K,Wt+Ri),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Dt,Je+Ri)),V.blitFramebuffer(kt,Qt,Bt,Lt,$t,Le,Bt,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||E.has(R)){const mn=E.get(R),An=E.get(Y);qt.bindFramebuffer(V.READ_FRAMEBUFFER,us),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ca);for(let Rn=0;Rn<Ht;Rn++)Fe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mn.__webglTexture,K,Wt+Rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mn.__webglTexture,K),Tn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,Dt,Je+Rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,Dt),K!==0?V.blitFramebuffer(kt,Qt,Bt,Lt,$t,Le,Bt,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):Tn?V.copyTexSubImage3D(Ne,Dt,$t,Le,Je+Rn,kt,Qt,Bt,Lt):V.copyTexSubImage2D(Ne,Dt,$t,Le,kt,Qt,Bt,Lt);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ne,Dt,$t,Le,Je,Bt,Lt,Ht,ze,Zt,Ye.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Ne,Dt,$t,Le,Je,Bt,Lt,Ht,ze,Ye.data):V.texSubImage3D(Ne,Dt,$t,Le,Je,Bt,Lt,Ht,ze,Zt,Ye):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,$t,Le,Bt,Lt,ze,Zt,Ye.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,$t,Le,Ye.width,Ye.height,ze,Ye.data):V.texSubImage2D(V.TEXTURE_2D,Dt,$t,Le,Bt,Lt,ze,Zt,Ye);V.pixelStorei(V.UNPACK_ROW_LENGTH,se),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,En),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ji),V.pixelStorei(V.UNPACK_SKIP_ROWS,bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,hi),Dt===0&&Y.generateMipmaps&&V.generateMipmap(Ne),qt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){G=0,nt=0,st=null,qt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const ZA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),KA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),yv=o=>{const t=KA(o);return t.charAt(0).toUpperCase()+t.slice(1)},ux=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),QA=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var JA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $A=Jt.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>Jt.createElement("svg",{ref:m,...JA,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:ux("lucide",l),...!u&&!QA(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>Jt.createElement(p,_)),...Array.isArray(u)?u:[u]]));const cx=(o,t)=>{const i=Jt.forwardRef(({className:s,...l},u)=>Jt.createElement($A,{ref:u,iconNode:t,className:ux(`lucide-${ZA(yv(o))}`,`lucide-${o}`,s),...l}));return i.displayName=yv(o),i};const tR=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],eR=cx("pause",tR);const nR=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],iR=cx("play",nR),aR=/^[og]\s*(.+)?/,sR=/^mtllib /,rR=/^usemtl /,oR=/^usemap /,Mv=/\s+/,Ev=new j,pd=new j,bv=new j,Tv=new j,Mi=new j,tc=new le;function lR(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}const s=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(l,u){const h=this._finalize(!1);h&&(h.inherited||h.groupCount<=0)&&this.materials.splice(h.index,1);const d={index:this.materials.length,name:l||"",mtllib:Array.isArray(u)&&u.length>0?u[u.length-1]:"",smooth:h!==void 0?h.smooth:this.smooth,groupStart:h!==void 0?h.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(m){const p={index:typeof m=="number"?m:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(d),d},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(l){const u=this.currentMaterial();if(u&&u.groupEnd===-1&&(u.groupEnd=this.geometry.vertices.length/3,u.groupCount=u.groupEnd-u.groupStart,u.inherited=!1),l&&this.materials.length>1)for(let h=this.materials.length-1;h>=0;h--)this.materials[h].groupCount<=0&&this.materials.splice(h,1);return l&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),u}},s&&s.name&&typeof s.clone=="function"){const l=s.clone(0);l.inherited=!0,this.object.materials.push(l)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/3)*3},parseNormalIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/3)*3},parseUVIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/2)*2},addVertex:function(t,i,s){const l=this.vertices,u=this.object.geometry.vertices;u.push(l[t+0],l[t+1],l[t+2]),u.push(l[i+0],l[i+1],l[i+2]),u.push(l[s+0],l[s+1],l[s+2])},addVertexPoint:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,s){const l=this.normals,u=this.object.geometry.normals;u.push(l[t+0],l[t+1],l[t+2]),u.push(l[i+0],l[i+1],l[i+2]),u.push(l[s+0],l[s+1],l[s+2])},addFaceNormal:function(t,i,s){const l=this.vertices,u=this.object.geometry.normals;Ev.fromArray(l,t),pd.fromArray(l,i),bv.fromArray(l,s),Mi.subVectors(bv,pd),Tv.subVectors(Ev,pd),Mi.cross(Tv),Mi.normalize(),u.push(Mi.x,Mi.y,Mi.z),u.push(Mi.x,Mi.y,Mi.z),u.push(Mi.x,Mi.y,Mi.z)},addColor:function(t,i,s){const l=this.colors,u=this.object.geometry.colors;l[t]!==void 0&&u.push(l[t+0],l[t+1],l[t+2]),l[i]!==void 0&&u.push(l[i+0],l[i+1],l[i+2]),l[s]!==void 0&&u.push(l[s+0],l[s+1],l[s+2])},addUV:function(t,i,s){const l=this.uvs,u=this.object.geometry.uvs;u.push(l[t+0],l[t+1]),u.push(l[i+0],l[i+1]),u.push(l[s+0],l[s+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,s,l,u,h,d,m,p){const _=this.vertices.length;let g=this.parseVertexIndex(t,_),x=this.parseVertexIndex(i,_),M=this.parseVertexIndex(s,_);if(this.addVertex(g,x,M),this.addColor(g,x,M),d!==void 0&&d!==""){const b=this.normals.length;g=this.parseNormalIndex(d,b),x=this.parseNormalIndex(m,b),M=this.parseNormalIndex(p,b),this.addNormal(g,x,M)}else this.addFaceNormal(g,x,M);if(l!==void 0&&l!==""){const b=this.uvs.length;g=this.parseUVIndex(l,b),x=this.parseUVIndex(u,b),M=this.parseUVIndex(h,b),this.addUV(g,x,M),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const i=this.vertices.length;for(let s=0,l=t.length;s<l;s++){const u=this.parseVertexIndex(t[s],i);this.addVertexPoint(u),this.addColor(u)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";const s=this.vertices.length,l=this.uvs.length;for(let u=0,h=t.length;u<h;u++)this.addVertexLine(this.parseVertexIndex(t[u],s));for(let u=0,h=i.length;u<h;u++)this.addUVLine(this.parseUVIndex(i[u],l))}};return o.startObject("",!1),o}class uR extends pl{constructor(t){super(t),this.materials=null}load(t,i,s,l){const u=this,h=new qM(this.manager);h.setPath(this.path),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(u.parse(d))}catch(m){l?l(m):console.error(m),u.manager.itemError(t)}},s,l)}setMaterials(t){return this.materials=t,this}parse(t){const i=new lR;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const s=t.split(`
`);let l=[];for(let d=0,m=s.length;d<m;d++){const p=s[d].trimStart();if(p.length===0)continue;const _=p.charAt(0);if(_!=="#")if(_==="v"){const g=p.split(Mv);switch(g[0]){case"v":i.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(tc.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),oi),i.colors.push(tc.r,tc.g,tc.b)):i.colors.push(void 0,void 0,void 0);break;case"vn":i.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":i.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(_==="f"){const x=p.slice(1).trim().split(Mv),M=[];for(let T=0,y=x.length;T<y;T++){const v=x[T];if(v.length>0){const L=v.split("/");M.push(L)}}const b=M[0];for(let T=1,y=M.length-1;T<y;T++){const v=M[T],L=M[T+1];i.addFace(b[0],v[0],L[0],b[1],v[1],L[1],b[2],v[2],L[2])}}else if(_==="l"){const g=p.substring(1).trim().split(" ");let x=[];const M=[];if(p.indexOf("/")===-1)x=g;else for(let b=0,T=g.length;b<T;b++){const y=g[b].split("/");y[0]!==""&&x.push(y[0]),y[1]!==""&&M.push(y[1])}i.addLineGeometry(x,M)}else if(_==="p"){const x=p.slice(1).trim().split(" ");i.addPointGeometry(x)}else if((l=aR.exec(p))!==null){const g=(" "+l[0].slice(1).trim()).slice(1);i.startObject(g)}else if(rR.test(p))i.object.startMaterial(p.substring(7).trim(),i.materialLibraries);else if(sR.test(p))i.materialLibraries.push(p.substring(7).trim());else if(oR.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(_==="s"){if(l=p.split(" "),l.length>1){const x=l[1].trim().toLowerCase();i.object.smooth=x!=="0"&&x!=="off"}else i.object.smooth=!0;const g=i.object.currentMaterial();g&&(g.smooth=i.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}i.finalize();const u=new Vr;if(u.materialLibraries=[].concat(i.materialLibraries),!(i.objects.length===1&&i.objects[0].geometry.vertices.length===0)===!0)for(let d=0,m=i.objects.length;d<m;d++){const p=i.objects[d],_=p.geometry,g=p.materials,x=_.type==="Line",M=_.type==="Points";let b=!1;if(_.vertices.length===0)continue;const T=new Hn;T.setAttribute("position",new sn(_.vertices,3)),_.normals.length>0&&T.setAttribute("normal",new sn(_.normals,3)),_.colors.length>0&&(b=!0,T.setAttribute("color",new sn(_.colors,3))),_.hasUVIndices===!0&&T.setAttribute("uv",new sn(_.uvs,2));const y=[];for(let L=0,D=g.length;L<D;L++){const U=g[L],N=U.name+"_"+U.smooth+"_"+b;let z=i.materials[N];if(this.materials!==null){if(z=this.materials.create(U.name),x&&z&&!(z instanceof rc)){const O=new rc;Bi.prototype.copy.call(O,z),O.color.copy(z.color),z=O}else if(M&&z&&!(z instanceof il)){const O=new il({size:10,sizeAttenuation:!1});Bi.prototype.copy.call(O,z),O.color.copy(z.color),O.map=z.map,z=O}}z===void 0&&(x?z=new rc:M?z=new il({size:1,sizeAttenuation:!1}):z=new IM,z.name=U.name,z.flatShading=!U.smooth,z.vertexColors=b,i.materials[N]=z),y.push(z)}let v;if(y.length>1){for(let L=0,D=g.length;L<D;L++){const U=g[L];T.addGroup(U.groupStart,U.groupCount,L)}x?v=new q_(T,y):M?v=new rd(T,y):v=new ci(T,y)}else x?v=new q_(T,y[0]):M?v=new rd(T,y[0]):v=new ci(T,y[0]);v.name=p.name,u.add(v)}else if(i.vertices.length>0){const d=new il({size:1,sizeAttenuation:!1}),m=new Hn;m.setAttribute("position",new sn(i.vertices,3)),i.colors.length>0&&i.colors[0]!==void 0&&(m.setAttribute("color",new sn(i.colors,3)),d.vertexColors=!0);const p=new rd(m,d);u.add(p)}return u}}const lc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ml{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cR=new xc(-1,1,1,-1,0,1);class fR extends Hn{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}}const hR=new fR;class fx{constructor(t){this._mesh=new ci(hR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,cR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class dR extends ml{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Fn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hc.clone(t.uniforms),this.material=new Fn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new fx(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Av extends ml{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),u=t.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class pR extends ml{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class mR{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new ee);this._width=s.width,this._height=s.height,i=new Qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dR(lc),this.copyPass.material.blending=ji,this.clock=new ix}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),h.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Av!==void 0&&(h instanceof Av?s=!0:h instanceof pR&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class gR extends ml{constructor(t,i,s=null,l=null,u=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new le}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let u,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(u=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),t.autoClear=l}}const _R={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class jr extends ml{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new ee(t.x,t.y):new ee(256,256),this.clearColor=new le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Qn(u,h,{type:ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const g=new Qn(u,h,{type:ui});g.texture.name="UnrealBloomPass.h"+_,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const x=new Qn(u,h,{type:ui});x.texture.name="UnrealBloomPass.v"+_,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),u=Math.round(u/2),h=Math.round(h/2)}const d=_R;this.highPassUniforms=hc.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new ee(1/u,1/h),u=Math.round(u/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hc.clone(lc.uniforms),this.blendMaterial=new Fn({uniforms:this.copyUniforms,vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader,premultipliedAlpha:!0,blending:md,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new le,this._oldClearAlpha=1,this._basic=new Rp,this._fsQuad=new fx(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new ee(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,u){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const h=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),u&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=jr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=jr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=h}_getSeparableBlurMaterial(t){const i=[],s=t/3;for(let l=0;l<t;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Fn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Fn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}jr.BlurDirectionX=new ee(1,0);jr.BlurDirectionY=new ee(0,1);let gc=null;const Oi="/portfolio/",Rv=({fog:o=!0,hue:t=0,opacity:i=1,path:s=`${Oi}assets/images/rad-grad.png`,sat:l=.5,size:u=10,x:h=0,y:d=0,z:m=0})=>{let p=new le().setHSL(t,1,l);const _=new ex().load(s),g=new Jv({fog:o,map:_,color:p,opacity:i,transparent:!0,depthWrite:!1,blending:Bs}),x=new UM(g);return x.scale.set(u,u,u),x.position.set(h,d,m),x},xe={colors:{primary:"#fc2d2dff",secondary:"#ff5100ff",background:"#000000ff",text:"#f1f5f9",accent:"#ffd900ff"},loading:{duration:2500,messages:["Initializing Portfolio...","Requiring Libraries...","Loading Assets...","Here We Go..."]},animations:{logoFadeIn:300,delayBeforeElements:300,logoMoveUp:1200,contentFadeIn:1250},music:{playlist:["Dark Thoughts","Down With Me","TASTE","BAD TIME","NUMBER 2","NEVER LAST"].map(o=>o.includes(".wav")?`${Oi}assets/music/${o}`:`${Oi}assets/music/${o}.flac`),volume:.015,fadeDuration:250},socials:[{name:"x",url:"https://x.com",icon:`${Oi}assets/icons/x.svg`},{name:"instagram",url:"https://instagram.com",icon:`${Oi}assets/icons/instagram.svg`},{name:"github",url:"https://github.com",icon:`${Oi}assets/icons/github.svg`},{name:"linkedin",url:"https://linkedin.com",icon:`${Oi}assets/icons/linkedin.svg`}]},Mc=Jt.createContext({activeMagneticId:null,setActiveMagneticId:()=>{},followerPos:{current:{x:-100,y:-100}},musicButtonRect:{current:null}}),vR=()=>{const o=Jt.useRef(null),t=Jt.useRef({x:-100,y:-100}),i=Jt.useRef({x:-100,y:-100}),{activeMagneticId:s,followerPos:l,musicButtonRect:u}=Jt.useContext(Mc),h=s!==null,d=s==="music-button";return Jt.useEffect(()=>{const m=g=>{t.current={x:g.clientX,y:g.clientY}};window.addEventListener("mousemove",m);let p;const _=()=>{const g=h?.045:.1;let x=t.current.x,M=t.current.y;if(d&&u.current){const b=u.current,T=b.left+b.width/2,y=b.top+b.height/2;x=T,M=y}i.current.x+=(x-i.current.x)*g,i.current.y+=(M-i.current.y)*g,l.current.x=i.current.x,l.current.y=i.current.y,o.current&&(o.current.style.transform=`translate3d(${i.current.x}px, ${i.current.y}px, 0) translate(-50%, -50%)`),p=requestAnimationFrame(_)};return _(),()=>{window.removeEventListener("mousemove",m),cancelAnimationFrame(p)}},[h,d,l,u]),pe.jsx("div",{ref:o,className:"fixed pointer-events-none rounded-full bg-white z-[60] transition-all duration-200 ease-out",style:{backgroundColor:xe.colors.primary,top:0,left:0,width:d?"clamp(57px, 12vmin, 125px)":h?"clamp(32px, 8vmin, 75px)":"clamp(25px, 8vmin, 60px)",height:d?"clamp(57px, 12vmin, 125px)":h?"clamp(32px, 8vmin, 75px)":"clamp(25px, 8vmin, 60px)",opacity:1,mixBlendMode:"difference",willChange:"transform, width, height"}})},xR=({children:o,id:t})=>{const i=Jt.useRef(null),{activeMagneticId:s,setActiveMagneticId:l,followerPos:u}=Jt.useContext(Mc),h=Jt.useRef(null),d=Jt.useRef({x:0,y:0,scale:1});return Jt.useEffect(()=>{const m=()=>{i.current&&(h.current=i.current.getBoundingClientRect())};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),Jt.useEffect(()=>{let m;const p=()=>{if(!h.current){m=requestAnimationFrame(p);return}const _=u.current.x,g=u.current.y,{left:x,top:M,width:b,height:T}=h.current,y=x+b/2,v=M+T/2,L=Math.hypot(_-y,g-v),D=Math.min(window.innerWidth,window.innerHeight)*.025;let U=0,N=0,z=1;L<D&&(s===null||s===t)?(s!==t&&l(t),U=_-y,N=g-v,z=1.15):(s===t&&L>D+10&&l(null),U=0,N=0,z=1);const O=.1;d.current.x+=(U-d.current.x)*O,d.current.y+=(N-d.current.y)*O,d.current.scale+=(z-d.current.scale)*O,i.current&&(i.current.style.transform=`translate3d(${d.current.x}px, ${d.current.y}px, 0) scale(${d.current.scale})`),m=requestAnimationFrame(p)};return p(),()=>cancelAnimationFrame(m)},[t,s,l,u]),pe.jsx("div",{ref:i,className:"will-change-transform",children:o})},SR=({style:o,showBackground:t})=>{const i=Jt.useRef(null),s=Jt.useRef(null),l=Jt.useRef(t);return Jt.useEffect(()=>{l.current=t},[t]),Jt.useEffect(()=>{if(!i.current)return;for(;i.current.firstChild;)i.current.removeChild(i.current.firstChild);const u=new wM,h=new Ei(75,1,.1,1e3);h.position.z=75;const d=Math.min(Math.min(window.innerWidth,window.innerHeight)*.7,925),m=new jA({antialias:!0,alpha:!0});m.setPixelRatio(window.devicePixelRatio),m.setSize(d,d),m.setClearColor(0,0),m.toneMapping=mp,i.current.appendChild(m.domElement);const p=new gR(u,h),_=new jr(new ee(d,d),2,.1,.1025),g=new mR(m);g.addPass(p),g.addPass(_);const x=new Vr;u.add(x),s.current=x;const M=new GM({matcap:new ex().load(`${Oi}assets/textures/matcaps/Doku-Doku-no-Mi.png`),color:new le(12271423)}),b=new KM(16734553);b.position.y=2,u.add(b),u.add(new QM(16734553));const T=Rv({path:`${Oi}assets/images/rad-grad.png`,hue:.7,opacity:0,sat:.5,size:95,x:0,y:0,z:-25}),y=Rv({path:`${Oi}assets/images/halftone_7.png`,hue:1,opacity:0,sat:0,size:95,x:0,y:0,z:-20});T.userData.targetOpacity=.035,y.userData.targetOpacity=.8,u.add(T),u.add(y);const v=[T,y];new uR().load(`${Oi}assets/models/KidBuu.obj`,N=>{N.traverse(w=>{w.isMesh&&(w.material=M)});const z=new Is().setFromObject(N),O=new j;z.getCenter(O),N.position.set(-O.x,-O.y,-O.z),N.scale.set(.25,.25,.25),N.updateMatrixWorld(!0);const q=new Is().setFromObject(N),C=new j;q.getCenter(C),N.position.x-=C.x,N.position.y-=C.y+C.y*.04,N.position.z-=C.z,x.add(N),gc&&gc()},void 0,N=>{console.error("Failed to load Kid Buu model",N);const z=new ci(new wp(8,1.35,64,16,2,3),M);x.add(z)});const D=new ix,U=()=>{requestAnimationFrame(U);const N=s.current,z=D.getElapsedTime();N&&(N.rotation.y=Math.sin(z*.5)*(Math.PI/4),N.position.y=Math.sin(z*.25)*2);const O=l.current;v.forEach(q=>{if(q.material){const C=O?q.userData.targetOpacity:0;q.material.opacity+=(C-q.material.opacity)*.05,q.material.transparent=!0}}),g.render()};return U(),()=>{i.current&&m.domElement&&i.current.removeChild(m.domElement),m.dispose(),g.dispose()}},[]),pe.jsx("div",{ref:i,className:"flex items-center justify-center pointer-events-none",style:{width:"25vmax",height:"25vmax",maxWidth:"400px",maxHeight:"400px",...o}})},yR=({progress:o})=>{const i=Math.min(window.innerWidth,window.innerHeight)*.4,s=2,l=(i-s)/2,u=2*Math.PI*l,h=u-o/100*u;return pe.jsxs("svg",{width:i,height:i,className:"transform -rotate-90",children:[pe.jsx("circle",{cx:i/2,cy:i/2,r:l,fill:"none",stroke:xe.colors.background,strokeWidth:s,opacity:"0.3"}),pe.jsx("circle",{cx:i/2,cy:i/2,r:l,fill:"none",stroke:"url(#gradient)",strokeWidth:s,strokeLinecap:"round",strokeDasharray:u,strokeDashoffset:h,style:{transition:"stroke-dashoffset 0.3s ease"}}),pe.jsx("defs",{children:pe.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[pe.jsx("stop",{offset:"0%",stopColor:xe.colors.primary}),pe.jsx("stop",{offset:"50%",stopColor:xe.colors.secondary}),pe.jsx("stop",{offset:"100%",stopColor:xe.colors.accent})]})})]})},MR=({progress:o,message:t,onComplete:i,startLoading:s})=>{const[l,u]=Jt.useState(!1),[h,d]=Jt.useState(!1),[m,p]=Jt.useState(!1),[_,g]=Jt.useState(!1),[x,M]=Jt.useState("translateY(0)"),[b,T]=Jt.useState(!1);Jt.useEffect(()=>(gc=()=>{T(!0)},u(!0),()=>{gc=null}),[]),Jt.useEffect(()=>{b&&setTimeout(()=>{d(!0),s()},xe.animations.logoFadeIn+xe.animations.delayBeforeElements)},[b,s]),Jt.useEffect(()=>{o>=100&&setTimeout(()=>p(!0),700)},[o]);const y=()=>{g(!0),setTimeout(()=>{M("translateY(-150vh)"),setTimeout(()=>{i()},xe.animations.logoMoveUp)},200)};return pe.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 overflow-hidden",style:{backgroundColor:xe.colors.background},children:pe.jsxs("div",{className:"flex flex-col items-center gap-[2vmin] relative",children:[pe.jsxs("div",{className:"font-bold tracking-wider transition-all duration-500 relative z-20",style:{color:xe.colors.text,fontSize:"clamp(1rem, 4.5vmin, 2rem)",opacity:h&&!m&&!_?1:0,transform:m?"scale(0.8)":"scale(1)"},children:[o,"%"]}),pe.jsxs("div",{className:"relative flex items-center justify-center",children:[pe.jsx("div",{className:"absolute transition-all flex items-center justify-center z-0",style:{opacity:l?1:0,transform:`${x} ${m&&!_?"scale(1.1)":"scale(1)"}`,transition:_?`transform ${xe.animations.logoMoveUp}ms ease-in-out, opacity 500ms ease-out`:"opacity 500ms ease-in-out, transform 800ms cubic-bezier(0.4, 0, 0.2, 1)"},children:pe.jsx(SR,{showBackground:h})}),pe.jsx("div",{className:"transition-all duration-500 relative z-10",style:{opacity:h&&!m&&!_?1:0,transform:m?"scale(1.1)":"scale(1)"},children:pe.jsx(yR,{progress:o})})]}),pe.jsxs("div",{className:"relative w-full flex justify-center",style:{height:"4vmin",minHeight:"1vmin"},children:[pe.jsx("div",{className:"absolute font-medium tracking-wide transition-opacity duration-500 pointer-events-none",style:{color:xe.colors.text,fontSize:"clamp(0.75rem, 3.25vmin, 1.5rem)",opacity:h&&!m&&!_?1:0,animation:h&&!m&&!_?"pulse 2s infinite":"none"},children:t}),pe.jsx("button",{onClick:y,className:`
              absolute rounded-full font-bold uppercase tracking-[0.25em]
              transition-all duration-[3000ms] ease-out border-2
              hover:shadow-[0_0_25px_rgba(252,45,45,0.3)]
              group
            `,style:{fontSize:"clamp(0.1rem, 4vmin, 1.4rem)",padding:"clamp(0.35rem, 1.375vmin, 1.375rem) clamp(2rem, 7.75vmin, 7.75rem)",opacity:m&&!_?1:0,transform:m&&!_?"translateY(-0.75vmin)":"translateY(2vmin)",pointerEvents:m&&!_?"auto":"none",borderColor:xe.colors.primary,backgroundColor:"transparent",color:xe.colors.primary},onMouseEnter:v=>{v.currentTarget.style.transition="all 0.15s ease-out allow-discrete",v.currentTarget.style.backgroundColor=xe.colors.primary,v.currentTarget.style.color=xe.colors.background,v.currentTarget.style.borderColor="transparent"},onMouseLeave:v=>{v.currentTarget.style.transition="all 0.45s ease-out allow-discrete",v.currentTarget.style.backgroundColor="transparent",v.currentTarget.style.color=xe.colors.primary,v.currentTarget.style.borderColor=xe.colors.primary},children:"Start"})]})]})})},ER=({social:o})=>pe.jsx(xR,{id:o.name,children:pe.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"block p-2",title:o.name,children:pe.jsx("img",{src:o.icon,alt:o.name,className:"w-[1.625vmax] h-[1.625vmax] min-w-[5px] min-h-[5px] max-w-[26px] max-h-[26px] invert"})})}),bR=()=>pe.jsx("div",{className:"fixed bottom-[11.5vmin] left-[8vmin] flex flex-col gap-[4.75vmin] z-50",children:xe.socials.map(o=>pe.jsx(ER,{social:o},o.name))}),TR=({isVisible:o,onMusicToggle:t,isPlaying:i})=>{const s=Jt.useRef(null),l=Jt.useRef({x:-100,y:-100}),{activeMagneticId:u,setActiveMagneticId:h,followerPos:d,musicButtonRect:m}=Jt.useContext(Mc);return Jt.useEffect(()=>{const p=_=>{l.current={x:_.clientX,y:_.clientY}};return window.addEventListener("mousemove",p),()=>window.removeEventListener("mousemove",p)},[]),Jt.useEffect(()=>{const p=()=>{s.current&&(m.current=s.current.getBoundingClientRect())};return p(),window.addEventListener("resize",p),window.addEventListener("scroll",p),()=>{window.removeEventListener("resize",p),window.removeEventListener("scroll",p)}},[m,o]),Jt.useEffect(()=>{if(!s.current)return;let p;const _=()=>{if(!s.current){p=requestAnimationFrame(_);return}m.current=s.current.getBoundingClientRect();const g=m.current,x=g.left+g.width/2,M=g.top+g.height/2,b=l.current.x,T=l.current.y,y=Math.hypot(b-x,T-M),v=Math.min(window.innerWidth,window.innerHeight)*.05,L="music-button";y<v?u!==L&&h(L):u===L&&h(null),p=requestAnimationFrame(_)};return _(),()=>cancelAnimationFrame(p)},[u,h,m,o]),pe.jsxs("div",{className:"min-h-screen p-8 transition-opacity",style:{backgroundColor:xe.colors.background,opacity:o?1:0,transitionDuration:`${xe.animations.contentFadeIn}ms`},children:[pe.jsx(vR,{}),pe.jsx(bR,{}),o&&pe.jsx("button",{ref:s,onClick:t,className:"fixed top-[8vmin] right-[8vmin] rounded-full backdrop-blur-sm transition-all hover:scale-110 active:scale-95 z-50 shadow-lg flex items-center justify-center",style:{backgroundColor:`${xe.colors.primary}40`,border:`2px solid ${xe.colors.primary}`,width:"clamp(45px, 8vmin, 100px)",height:"clamp(45px, 8vmin, 100px)",padding:0},children:i?pe.jsx(eR,{size:"1.5vmax",style:{color:xe.colors.text,minWidth:"16px",minHeight:"20px"}}):pe.jsx(iR,{size:"1.5vmax",style:{color:xe.colors.text,minWidth:"16px",minHeight:"20px"}})})]})};function AR(){const[o,t]=Jt.useState(0),[i,s]=Jt.useState(0),[l,u]=Jt.useState(!0),[h,d]=Jt.useState(!1),[m,p]=Jt.useState(!1),[_,g]=Jt.useState(!1),[x,M]=Jt.useState(null),b=Jt.useRef({x:-100,y:-100}),T=Jt.useRef(null),y=Jt.useRef(null),v=Jt.useRef(-1),L=Jt.useRef(null),D=(N,z)=>{if(!y.current)return;L.current&&clearInterval(L.current);const O=N?xe.music.volume:0,q=y.current.volume,C=25,w=xe.music.fadeDuration/C,G=(O-q)/C;let nt=0;L.current=setInterval(()=>{nt++;const st=q+G*nt;y.current&&(y.current.volume=Math.max(0,Math.min(1,st))),nt>=C&&(clearInterval(L.current),L.current=null,z&&z())},w)},U=()=>{if(xe.music.playlist.length===0)return;let N;do N=Math.floor(Math.random()*xe.music.playlist.length);while(N===v.current&&xe.music.playlist.length>1);v.current=N,y.current&&(y.current.src=xe.music.playlist[N],y.current.load())};return Jt.useEffect(()=>(xe.music.playlist.length>0&&(y.current=new Audio,y.current.volume=0,y.current.addEventListener("ended",()=>{U(),y.current.volume=0,y.current.play().then(()=>D(!0)).catch(()=>g(!1))}),U()),()=>{L.current&&clearInterval(L.current),y.current&&(y.current.pause(),y.current=null)}),[]),Jt.useEffect(()=>{h&&y.current&&(y.current.volume=0,y.current.play().then(()=>{g(!0),D(!0)}).catch(N=>{console.log("Auto-play prevented:",N),g(!1)}))},[h]),Jt.useEffect(()=>{if(!m)return;const N=xe.loading.duration,z=50,q=100/(N/z),C=setInterval(()=>{t(w=>{const G=Math.min(w+q,100),nt=Math.floor(G/100*xe.loading.messages.length);return s(Math.min(nt,xe.loading.messages.length-1)),G>=100&&clearInterval(C),G})},z);return()=>clearInterval(C)},[m]),pe.jsx(Mc.Provider,{value:{activeMagneticId:x,setActiveMagneticId:M,followerPos:b,musicButtonRect:T},children:pe.jsxs("div",{className:"relative",style:{backgroundColor:xe.colors.background},children:[l&&pe.jsx(MR,{progress:Math.round(o),message:xe.loading.messages[i],onComplete:()=>{u(!1),d(!0)},startLoading:()=>p(!0)}),pe.jsx(TR,{isVisible:h,onMusicToggle:()=>{_?(D(!1,()=>y.current.pause()),g(!1)):(y.current.volume=0,y.current.play().then(()=>{D(!0),g(!0)}))},isPlaying:_})]})})}Ty.createRoot(document.getElementById("root")).render(pe.jsx(Jt.StrictMode,{children:pe.jsx(AR,{})}));
