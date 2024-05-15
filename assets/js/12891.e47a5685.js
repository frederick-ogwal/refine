/*! For license information please see 12891.e47a5685.js.LICENSE.txt */
(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12891],{25418:function(e){e.exports=(()=>{"use strict";var e={511:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Explosion=void 0;var n=i(909);t.Explosion=class{constructor(e){var{x:t,y:i,ctx:s,hue:r,gravity:o,friction:a,brightness:u,flickering:c,lineWidth:l,explosionLength:h}=e;for(this._coordinates=[],this._alpha=1,this._x=t,this._y=i,this._ctx=s,this._gravity=o,this._friction=a,this._flickering=c,this._lineWidth=l,this._explosionLength=h;this._explosionLength--;)this._coordinates.push([t,i]);this._angle=(0,n.randomFloat)(0,2*Math.PI),this._speed=(0,n.randomInt)(1,10),this._hue=(0,n.randomInt)(r-20,r+20),this._brightness=(0,n.randomInt)(u.min,u.max),this._decay=(0,n.randomFloat)(u.decay.min,u.decay.max)}update(e){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._friction,this._x+=Math.cos(this._angle)*this._speed,this._y+=Math.sin(this._angle)*this._speed+this._gravity,this._alpha-=this._decay,this._alpha<=this._decay&&e()}draw(){var e=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.lineWidth=this._lineWidth,this._ctx.fillStyle=(0,n.hsla)(this._hue,this._brightness,this._alpha),this._ctx.moveTo(this._coordinates[e][0],this._coordinates[e][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,n.hsla)(this._hue,this._flickering?(0,n.randomFloat)(0,this._brightness):this._brightness,this._alpha),this._ctx.stroke()}}},909:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.hsla=t.getDistance=t.randomInt=t.randomFloat=void 0,t.randomFloat=function(e,t){return Math.random()*(t-e)+e},t.randomInt=function(e,t){return Math.floor(e+Math.random()*(t+1-e))},t.getDistance=function(e,t,i,n){var s=Math.pow;return Math.sqrt(s(e-i,2)+s(t-n,2))},t.hsla=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return"hsla(".concat(e,", 100%, ").concat(t,"%, ").concat(i,")")}},449:function(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(s,r){function o(e){try{u(n.next(e))}catch(e){r(e)}}function a(e){try{u(n.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Sound=void 0;var s=i(909);t.Sound=class{constructor(e){this._buffer=[],this.onInit=!0,this.options=Object.assign({enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},e),this.init()}init(){this.onInit&&this.options.enabled&&(this.onInit=!1,this._audioContext=new(window.AudioContext||window.webkitAudioContext),this.load())}load(){return n(this,void 0,void 0,(function*(){for(var e of this.options.files){var t=yield(yield fetch(e)).arrayBuffer();this._audioContext.decodeAudioData(t).then((e=>{this._buffer.push(e)})).catch((e=>{throw e}))}}))}play(){if(this.options.enabled&&this._buffer.length){var e=this._audioContext.createBufferSource(),t=this._buffer[(0,s.randomInt)(0,this._buffer.length-1)],i=this._audioContext.createGain();e.buffer=t,i.gain.value=(0,s.randomFloat)(this.options.volume.min/100,this.options.volume.max/100),i.connect(this._audioContext.destination),e.connect(i),e.start(0)}else this.init()}}},668:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Trace=void 0;var n=i(909);t.Trace=class{constructor(e){var{x:t,y:i,dx:s,dy:r,ctx:o,hue:a,speed:u,traceLength:c,acceleration:l}=e;for(this._coordinates=[],this._currentDistance=0,this._x=t,this._y=i,this._sx=t,this._sy=i,this._dx=s,this._dy=r,this._ctx=o,this._hue=a,this._speed=u,this._traceLength=c,this._acceleration=l,this._totalDistance=(0,n.getDistance)(t,i,s,r);this._traceLength--;)this._coordinates.push([t,i]);this._angle=Math.atan2(r-i,s-t),this._brightness=(0,n.randomInt)(50,70)}update(e){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._acceleration;var t=Math.cos(this._angle)*this._speed,i=Math.sin(this._angle)*this._speed;this._currentDistance=(0,n.getDistance)(this._sx,this._sy,this._x+t,this._y+i),this._currentDistance>=this._totalDistance?e(this._dx,this._dy,this._hue):(this._x+=t,this._y+=i)}draw(){var e=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[e][0],this._coordinates[e][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,n.hsla)(this._hue,this._brightness),this._ctx.stroke()}}}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}var n={};return(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.Fireworks=void 0;var t=i(668),s=i(449),r=i(511),o=i(909);e.Fireworks=class{constructor(e){var{autoresize:t=!0,boundaries:i,brightness:n,delay:r,hue:o,mouse:a,sound:u,rocketsPoint:c,lineWidth:l,lineStyle:h="round",flickering:d=50,trace:m=3,traceSpeed:f=10,intensity:p=30,explosion:v=5,gravity:_=1.5,opacity:g=.5,particles:x=50,friction:y=.95,acceleration:b=1.05}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._tick=0,this._timestamp=performance.now(),this._version="1.4.1",this._running=!1,this._m=!1,e instanceof HTMLCanvasElement?(this._container=e,this._canvas=e):(this._container=e,this._canvas=document.createElement("canvas"),this._container.appendChild(this._canvas)),this._ctx=this._canvas.getContext("2d"),this._sound=new s.Sound(u),this.setSize(),this.setBoundaries(Object.assign({visible:!1,x:50,y:50},i)),this.autoresize=t,this.trace=m,this.explosion=v,this.gravity=_,this.opacity=g,this.particles=x,this.friction=y,this.acceleration=b,this.flickering=d,this.intensity=p,this.traceSpeed=f,this.lineStyle=h,this.hue=Object.assign({min:0,max:360},o),this.rocketsPoint=Object.assign({min:50,max:50},c),this.lineWidth=Object.assign({explosion:{min:1,max:3},trace:{min:1,max:2}},l),this.mouse=Object.assign({click:!1,move:!1,max:1},a),this.delay=Object.assign({min:15,max:30},r),this.brightness=Object.assign({min:50,max:80,decay:{min:.015,max:.03}},n),this.autoresize&&window.addEventListener("resize",(()=>this.windowResize())),this._canvas.addEventListener("mousedown",(e=>{this.mouseDown(e)})),this._canvas.addEventListener("mouseup",(e=>{this.mouseUp(e)})),this._canvas.addEventListener("mousemove",(e=>{this.mouseMove(e)}))}get isRunning(){return this._running}get version(){return this._version}start(){this._running||(this._running=!0,this.clear(),this.render())}stop(){this._running&&(this._running=!1,this.clear())}unmount(){window.removeEventListener("resize",this.windowResize),this._canvas.removeEventListener("mousedown",this.mouseDown),this._canvas.removeEventListener("mouseup",this.mouseUp),this._canvas.removeEventListener("mousemove",this.mouseMove)}pause(){this._running=!this._running,this._running&&this.render()}clear(){this._ctx&&(this._traces=[],this._explosions=[],this._ctx.clearRect(0,0,this._width,this._height))}setOptions(e){for(var[t,i]of Object.entries(e)){var n=Object.prototype.hasOwnProperty.call(this,t);if("function"==typeof this[t])throw new Error("You cannot change the methods of the class!");n&&("object"==typeof this[t]?Object.assign(this[t],i):this[t]=i),"sound"===t&&Object.assign(this._sound.options,i)}}setSize(){var{width:e=(this._container instanceof HTMLCanvasElement?this._canvas.width:this._container.clientWidth),height:t=(this._container instanceof HTMLCanvasElement?this._canvas.height:this._container.clientHeight)}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._width=e,this._height=t,this._canvas.width=e,this._canvas.height=t,this.setBoundaries({width:e,height:t})}setBoundaries(e){this.boundaries=Object.assign(Object.assign({},this.boundaries),e)}useMouse(e,t){(this.mouse.click||this.mouse.move)&&(this._mx=e.pageX-this._canvas.offsetLeft,this._my=e.pageY-this._canvas.offsetTop,this._m=t)}windowResize(){this.setSize()}mouseDown(e){this.useMouse(e,this.mouse.click)}mouseUp(e){this.useMouse(e,!1)}mouseMove(e){this.useMouse(e,this._m)}render(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._timestamp;if(this._ctx&&this._running){requestAnimationFrame((e=>this.render(e))),this._ctx.globalCompositeOperation="destination-out",this._ctx.fillStyle="rgba(0, 0, 0, ".concat(this.opacity,")"),this._ctx.fillRect(0,0,this._width,this._height),this._ctx.globalCompositeOperation="lighter",this._ctx.lineCap=this.lineStyle,this._ctx.lineJoin="round",this.drawBoundaries(),this.initTrace(),this.drawTrace(),this.drawExplosion();var t=e-this._timestamp;this._timestamp=e,this._tick+=t*(this.intensity*Math.PI)/1e3}}drawBoundaries(){this.boundaries.visible&&(this._ctx.beginPath(),this._ctx.lineWidth=1,this._ctx.strokeStyle="red",this._ctx.rect(this.boundaries.x,this.boundaries.y,this.boundaries.width-2*this.boundaries.x,.5*this.boundaries.height),this._ctx.stroke())}initTrace(){this._ds=(0,o.randomInt)(this.delay.min,this.delay.max),(this._tick>this._ds||this._m&&this.mouse.max>this._traces.length)&&(this._traces.push(new t.Trace({x:this._width*(0,o.randomInt)(this.rocketsPoint.min,this.rocketsPoint.max)/100,y:this._height,dx:this._mx&&this.mouse.move||this._m?this._mx:(0,o.randomInt)(this.boundaries.x,this.boundaries.width-2*this.boundaries.x),dy:this._my&&this.mouse.move||this._m?this._my:(0,o.randomInt)(this.boundaries.y,.5*this.boundaries.height),ctx:this._ctx,hue:(0,o.randomInt)(this.hue.min,this.hue.max),speed:this.traceSpeed,acceleration:this.acceleration,traceLength:this.trace})),this._tick=0)}drawTrace(){var e=this._traces.length;for(this._ctx.lineWidth=(0,o.randomFloat)(this.lineWidth.trace.min,this.lineWidth.trace.max);e--;)this._traces[e].draw(),this._traces[e].update(((t,i,n)=>{this.initExplosion(t,i,n),this._sound.play(),this._traces.splice(e,1)}))}initExplosion(e,t,i){for(var n=this.particles;n--;)this._explosions.push(new r.Explosion({x:e,y:t,ctx:this._ctx,hue:i,friction:this.friction,gravity:this.gravity,flickering:(0,o.randomInt)(0,100)<=this.flickering,lineWidth:(0,o.randomFloat)(this.lineWidth.explosion.min,this.lineWidth.explosion.max),explosionLength:Math.round(this.explosion),brightness:this.brightness}))}drawExplosion(){for(var e=this._explosions.length;e--;)this._explosions[e].draw(),this._explosions[e].update((()=>{this._explosions.splice(e,1)}))}}})(),n})()},86260:(e,t,i)=>{"use strict";i.d(t,{W:()=>K});var n=i(37953),s=i(99151),r=i(41220),o=i(71519),a=i(31110),u=i(86585),c=i(24603),l=i(39334),h=i(26984);let d=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function m(e){var t,i;let n=null!=(t=e.innerText)?t:"",s=e.cloneNode(!0);if(!(s instanceof HTMLElement))return n;let r=!1;for(let a of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),r=!0;let o=r?null!=(i=s.innerText)?i:"":n;return d.test(o)&&(o=o.replace(d,"")),o}function f(e){let t=(0,n.useRef)(""),i=(0,n.useRef)("");return(0,r._)((()=>{let n=e.current;if(!n)return"";let s=n.innerText;if(t.current===s)return i.current;let r=function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let i=e.getAttribute("aria-labelledby");if(i){let e=i.split(" ").map((e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():m(t).trim()}return null})).filter(Boolean);if(e.length>0)return e.join(", ")}return m(e).trim()}(n).trim().toLowerCase();return t.current=s,i.current=r,r}))}function p(e){return[e.screenX,e.screenY]}function v(){let e=(0,n.useRef)([-1,-1]);return{wasMoved(t){let i=p(t);return(e.current[0]!==i[0]||e.current[1]!==i[1])&&(e.current=i,!0)},update(t){e.current=p(t)}}}var _=i(57464);var g=i(31004),x=i(59796);var y,b=((y=b||{})[y.First=0]="First",y[y.Previous=1]="Previous",y[y.Next=2]="Next",y[y.Last=3]="Last",y[y.Specific=4]="Specific",y[y.Nothing=5]="Nothing",y);function w(e,t){let i=t.resolveItems();if(i.length<=0)return null;let n=t.resolveActiveIndex(),s=null!=n?n:-1;switch(e.focus){case 0:for(let e=0;e<i.length;++e)if(!t.resolveDisabled(i[e],e,i))return e;return n;case 1:for(let e=s-1;e>=0;--e)if(!t.resolveDisabled(i[e],e,i))return e;return n;case 2:for(let e=s+1;e<i.length;++e)if(!t.resolveDisabled(i[e],e,i))return e;return n;case 3:for(let e=i.length-1;e>=0;--e)if(!t.resolveDisabled(i[e],e,i))return e;return n;case 4:for(let n=0;n<i.length;++n)if(t.resolveId(i[n],n,i)===e.id)return n;return n;case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}var I,E=i(58108),M=i(58383),D=i(4974),F=i(22227),S=i(91641),P=((I=P||{})[I.Open=0]="Open",I[I.Closed=1]="Closed",I),T=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(T||{}),R=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(R||{});function k(e,t=(e=>e)){let i=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,M.wl)(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),s=i?n.indexOf(i):null;return-1===s&&(s=null),{items:n,activeItemIndex:s}}let L={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,t)=>{var i;let n=k(e),s=w(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:s,activationTrigger:null!=(i=t.trigger)?i:1}},3:(e,t)=>{let i=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),s=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+i).concat(e.items.slice(0,e.activeItemIndex+i)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled})),r=s?e.items.indexOf(s):-1;return-1===r||r===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:r,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let i=k(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...i}},6:(e,t)=>{let i=k(e,(e=>{let i=e.findIndex((e=>e.id===t.id));return-1!==i&&e.splice(i,1),e}));return{...e,...i,activationTrigger:1}}},O=(0,n.createContext)(null);function C(e){let t=(0,n.useContext)(O);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}function N(e,t){return(0,D.Y)(t.type,L,e,t)}O.displayName="MenuContext";let A=n.Fragment;let j=F.O5.RenderStrategy|F.O5.Static;let B=n.Fragment;let W=(0,F.FX)((function(e,t){let{__demoMode:i=!1,...s}=e,o=(0,n.useReducer)(N,{__demoMode:i,menuState:i?0:1,buttonRef:(0,n.createRef)(),itemsRef:(0,n.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:c,buttonRef:l},d]=o,m=(0,h.P)(t);(0,u.j)([l,c],((e,t)=>{var i;d({type:1}),(0,M.Bm)(t,M.MZ.Loose)||(e.preventDefault(),null==(i=l.current)||i.focus())}),0===a);let f=(0,r._)((()=>{d({type:1})})),p=(0,n.useMemo)((()=>({open:0===a,close:f})),[a,f]),v={ref:m};return n.createElement(O.Provider,{value:o},n.createElement(g.El,{value:(0,D.Y)(a,{0:g.Uw.Open,1:g.Uw.Closed})},(0,F.XX)({ourProps:v,theirProps:s,slot:p,defaultTag:A,name:"Menu"})))})),U=(0,F.FX)((function(e,t){var i;let a=(0,o.B)(),{id:u=`headlessui-menu-button-${a}`,...c}=e,[d,m]=C("Menu.Button"),f=(0,h.P)(d.buttonRef,t),p=(0,s.L)(),v=(0,r._)((e=>{switch(e.key){case S.D.Space:case S.D.Enter:case S.D.ArrowDown:e.preventDefault(),e.stopPropagation(),m({type:0}),p.nextFrame((()=>m({type:2,focus:b.First})));break;case S.D.ArrowUp:e.preventDefault(),e.stopPropagation(),m({type:0}),p.nextFrame((()=>m({type:2,focus:b.Last})))}})),_=(0,r._)((e=>{if(e.key===S.D.Space)e.preventDefault()})),g=(0,r._)((t=>{if((0,x.l)(t.currentTarget))return t.preventDefault();e.disabled||(0===d.menuState?(m({type:1}),p.nextFrame((()=>{var e;return null==(e=d.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),m({type:0})))})),y=(0,n.useMemo)((()=>({open:0===d.menuState})),[d]),w={ref:f,id:u,type:(0,l.c)(e,d.buttonRef),"aria-haspopup":"menu","aria-controls":null==(i=d.itemsRef.current)?void 0:i.id,"aria-expanded":0===d.menuState,onKeyDown:v,onKeyUp:_,onClick:g};return(0,F.XX)({ourProps:w,theirProps:c,slot:y,defaultTag:"button",name:"Menu.Button"})})),X=(0,F.FX)((function(e,t){var i,u;let l=(0,o.B)(),{id:d=`headlessui-menu-items-${l}`,...m}=e,[f,p]=C("Menu.Items"),v=(0,h.P)(f.itemsRef,t),x=(0,c.g)(f.itemsRef),y=(0,s.L)(),w=(0,g.O_)(),I=null!==w?(w&g.Uw.Open)===g.Uw.Open:0===f.menuState;(0,n.useEffect)((()=>{let e=f.itemsRef.current;e&&0===f.menuState&&e!==(null==x?void 0:x.activeElement)&&e.focus({preventScroll:!0})}),[f.menuState,f.itemsRef,x]),function({container:e,accept:t,walk:i,enabled:s=!0}){let r=(0,n.useRef)(t),o=(0,n.useRef)(i);(0,n.useEffect)((()=>{r.current=t,o.current=i}),[t,i]),(0,a.s)((()=>{if(!e||!s)return;let t=(0,_.T)(e);if(!t)return;let i=r.current,n=o.current,a=Object.assign((e=>i(e)),{acceptNode:i}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,a,!1);for(;u.nextNode();)n(u.currentNode)}),[e,s,r,o])}({container:f.itemsRef.current,enabled:0===f.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let D=(0,r._)((e=>{var t,i;switch(y.dispose(),e.key){case S.D.Space:if(""!==f.searchQuery)return e.preventDefault(),e.stopPropagation(),p({type:3,value:e.key});case S.D.Enter:if(e.preventDefault(),e.stopPropagation(),p({type:1}),null!==f.activeItemIndex){let{dataRef:e}=f.items[f.activeItemIndex];null==(i=null==(t=e.current)?void 0:t.domRef.current)||i.click()}(0,M.Fh)(f.buttonRef.current);break;case S.D.ArrowDown:return e.preventDefault(),e.stopPropagation(),p({type:2,focus:b.Next});case S.D.ArrowUp:return e.preventDefault(),e.stopPropagation(),p({type:2,focus:b.Previous});case S.D.Home:case S.D.PageUp:return e.preventDefault(),e.stopPropagation(),p({type:2,focus:b.First});case S.D.End:case S.D.PageDown:return e.preventDefault(),e.stopPropagation(),p({type:2,focus:b.Last});case S.D.Escape:e.preventDefault(),e.stopPropagation(),p({type:1}),(0,E.e)().nextFrame((()=>{var e;return null==(e=f.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case S.D.Tab:e.preventDefault(),e.stopPropagation(),p({type:1}),(0,E.e)().nextFrame((()=>{(0,M.p9)(f.buttonRef.current,e.shiftKey?M.BD.Previous:M.BD.Next)}));break;default:1===e.key.length&&(p({type:3,value:e.key}),y.setTimeout((()=>p({type:4})),350))}})),P=(0,r._)((e=>{if(e.key===S.D.Space)e.preventDefault()})),T=(0,n.useMemo)((()=>({open:0===f.menuState})),[f]),R={"aria-activedescendant":null===f.activeItemIndex||null==(i=f.items[f.activeItemIndex])?void 0:i.id,"aria-labelledby":null==(u=f.buttonRef.current)?void 0:u.id,id:d,onKeyDown:D,onKeyUp:P,role:"menu",tabIndex:0,ref:v};return(0,F.XX)({ourProps:R,theirProps:m,slot:T,defaultTag:"div",features:j,visible:I,name:"Menu.Items"})})),z=(0,F.FX)((function(e,t){let i=(0,o.B)(),{id:s=`headlessui-menu-item-${i}`,disabled:u=!1,...c}=e,[l,d]=C("Menu.Item"),m=null!==l.activeItemIndex&&l.items[l.activeItemIndex].id===s,p=(0,n.useRef)(null),_=(0,h.P)(t,p);(0,a.s)((()=>{if(l.__demoMode||0!==l.menuState||!m||0===l.activationTrigger)return;let e=(0,E.e)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=p.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[l.__demoMode,p,m,l.menuState,l.activationTrigger,l.activeItemIndex]);let g=f(p),x=(0,n.useRef)({disabled:u,domRef:p,get textValue(){return g()}});(0,a.s)((()=>{x.current.disabled=u}),[x,u]),(0,a.s)((()=>(d({type:5,id:s,dataRef:x}),()=>d({type:6,id:s}))),[x,s]);let y=(0,r._)((()=>{d({type:1})})),w=(0,r._)((e=>{if(u)return e.preventDefault();d({type:1}),(0,M.Fh)(l.buttonRef.current)})),I=(0,r._)((()=>{if(u)return d({type:2,focus:b.Nothing});d({type:2,focus:b.Specific,id:s})})),D=v(),S=(0,r._)((e=>D.update(e))),P=(0,r._)((e=>{D.wasMoved(e)&&(u||m||d({type:2,focus:b.Specific,id:s,trigger:0}))})),T=(0,r._)((e=>{D.wasMoved(e)&&(u||m&&d({type:2,focus:b.Nothing}))})),R=(0,n.useMemo)((()=>({active:m,disabled:u,close:y})),[m,u,y]);return(0,F.XX)({ourProps:{id:s,ref:_,role:"menuitem",tabIndex:!0===u?void 0:-1,"aria-disabled":!0===u||void 0,disabled:void 0,onClick:w,onFocus:I,onPointerEnter:S,onMouseEnter:S,onPointerMove:P,onMouseMove:P,onPointerLeave:T,onMouseLeave:T},theirProps:c,slot:R,defaultTag:B,name:"Menu.Item"})})),K=Object.assign(W,{Button:U,Items:X,Item:z})},86585:(e,t,i)=>{"use strict";i.d(t,{j:()=>c});var n=i(37953),s=i(58383),r=i(30516),o=i(3177);function a(e,t,i){let s=(0,o.Y)(t);(0,n.useEffect)((()=>{function t(e){s.current(e)}return document.addEventListener(e,t,i),()=>document.removeEventListener(e,t,i)}),[e,i])}var u=i(90311);function c(e,t,i=!0){let o=(0,n.useRef)(!1);function c(i,n){if(!o.current||i.defaultPrevented)return;let r=n(i);if(null===r||!r.getRootNode().contains(r)||!r.isConnected)return;let a=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e);for(let e of a){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(r)||i.composed&&i.composedPath().includes(t))return}return!(0,s.Bm)(r,s.MZ.Loose)&&-1!==r.tabIndex&&i.preventDefault(),t(i,r)}(0,n.useEffect)((()=>{requestAnimationFrame((()=>{o.current=i}))}),[i]);let l=(0,n.useRef)(null);a("pointerdown",(e=>{var t,i;o.current&&(l.current=(null==(i=null==(t=e.composedPath)?void 0:t.call(e))?void 0:i[0])||e.target)}),!0),a("mousedown",(e=>{var t,i;o.current&&(l.current=(null==(i=null==(t=e.composedPath)?void 0:t.call(e))?void 0:i[0])||e.target)}),!0),a("click",(e=>{(0,r.Fr)()||l.current&&(c(e,(()=>l.current)),l.current=null)}),!0),a("touchend",(e=>c(e,(()=>e.target instanceof HTMLElement?e.target:null))),!0),(0,u.M)("blur",(e=>c(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},24603:(e,t,i)=>{"use strict";i.d(t,{g:()=>r});var n=i(37953),s=i(57464);function r(...e){return(0,n.useMemo)((()=>(0,s.T)(...e)),[...e])}},90311:(e,t,i)=>{"use strict";i.d(t,{M:()=>r});var n=i(37953),s=i(3177);function r(e,t,i){let r=(0,s.Y)(t);(0,n.useEffect)((()=>{function t(e){r.current(e)}return window.addEventListener(e,t,i),()=>window.removeEventListener(e,t,i)}),[e,i])}},58383:(e,t,i)=>{"use strict";i.d(t,{BD:()=>l,Bm:()=>p,CU:()=>w,Fh:()=>v,MZ:()=>f,Me:()=>h,iq:()=>m,p9:()=>b,pW:()=>g,wl:()=>y});var n=i(58108),s=i(4974),r=i(57464);let o=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var a,u,c,l=((c=l||{})[c.First=1]="First",c[c.Previous=2]="Previous",c[c.Next=4]="Next",c[c.Last=8]="Last",c[c.WrapAround=16]="WrapAround",c[c.NoScroll=32]="NoScroll",c),h=((u=h||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),d=((a=d||{})[a.Previous=-1]="Previous",a[a.Next=1]="Next",a);function m(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(o)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var f=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(f||{});function p(e,t=0){var i;return e!==(null==(i=(0,r.T)(e))?void 0:i.body)&&(0,s.Y)(t,{0:()=>e.matches(o),1(){let t=e;for(;null!==t;){if(t.matches(o))return!0;t=t.parentElement}return!1}})}function v(e){let t=(0,r.T)(e);(0,n.e)().nextFrame((()=>{t&&!p(t.activeElement,0)&&g(e)}))}var _=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(_||{});function g(e){null==e||e.focus({preventScroll:!0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));let x=["textarea","input"].join(",");function y(e,t=(e=>e)){return e.slice().sort(((e,i)=>{let n=t(e),s=t(i);if(null===n||null===s)return 0;let r=n.compareDocumentPosition(s);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function b(e,t){return w(m(),t,{relativeTo:e})}function w(e,t,{sorted:i=!0,relativeTo:n=null,skipElements:s=[]}={}){let r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?i?y(e):e:m(e);s.length>0&&o.length>1&&(o=o.filter((e=>!s.includes(e)))),n=null!=n?n:r.activeElement;let a,u=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,o.indexOf(n))-1;if(4&t)return Math.max(0,o.indexOf(n))+1;if(8&t)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=32&t?{preventScroll:!0}:{},h=0,d=o.length;do{if(h>=d||h+d<=0)return 0;let e=c+h;if(16&t)e=(e+d)%d;else{if(e<0)return 3;if(e>=d)return 1}a=o[e],null==a||a.focus(l),h+=u}while(a!==r.activeElement);return 6&t&&function(e){var t,i;return null!=(i=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,x))&&i}(a)&&a.select(),2}},30516:(e,t,i)=>{"use strict";function n(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function s(){return n()||/Android/gi.test(window.navigator.userAgent)}i.d(t,{Fr:()=>s,un:()=>n})}}]);