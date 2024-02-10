(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))m(u);new MutationObserver(u=>{for(const a of u)if(a.type==="childList")for(const v of a.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&m(v)}).observe(document,{childList:!0,subtree:!0});function f(u){const a={};return u.integrity&&(a.integrity=u.integrity),u.referrerPolicy&&(a.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?a.credentials="include":u.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(u){if(u.ep)return;u.ep=!0;const a=f(u);fetch(u.href,a)}})();var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D={exports:{}};(function(q,z){(function(f,m){q.exports=m()})(typeof self<"u"?self:L,()=>(()=>{var f={d:(e,t)=>{for(var o in t)f.o(t,o)&&!f.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},m={};function u(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}function a(e,t){return e==null&&(e=0),t==null&&(t=1),Math.floor(e+Math.random()*(t-e+1))}f.r(m),f.d(m,{default:()=>s}),Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};const v=e=>.299*e.r+.587*e.g+.114*e.b;function g(e){for(;e.children&&e.children.length>0;)g(e.children[0]),e.remove(e.children[0]);e.geometry&&e.geometry.dispose(),e.material&&(Object.keys(e.material).forEach(t=>{e.material[t]&&e.material[t]!==null&&typeof e.material[t].dispose=="function"&&e.material[t].dispose()}),e.material.dispose())}const M=typeof window=="object";let E=M&&window.THREE||{};M&&!window.VANTA&&(window.VANTA={});const c=M&&window.VANTA||{};c.register=(e,t)=>c[e]=o=>new t(o),c.version="0.5.24";const O=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};c.VantaBase=class{constructor(e={}){if(!M)return!1;c.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const t=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},t),(e instanceof HTMLElement||typeof e=="string")&&(e={el:e}),Object.assign(this.options,e),this.options.THREE&&(E=this.options.THREE),this.el=this.options.el,this.el==null)O('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const p=this.el;if(this.el=(o=p,document.querySelector(o)),!this.el)return void O("Cannot find element",p)}var o,n;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(p){return O("Init error",p),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(n=this.options.backgroundColor,typeof n=="number"?"#"+("00000"+n.toString(16)).slice(-6):n)))}this.initMouse(),this.resize(),this.animationLoop();const h=window.addEventListener;h("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(h("scroll",this.windowMouseMoveWrapper),h("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(h("touchstart",this.windowTouchWrapper),h("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&h("deviceorientation",this.windowGyroWrapper)}setOptions(e={}){Object.assign(this.options,e),this.triggerMouseMove()}prepareEl(){let e,t;if(typeof Node<"u"&&Node.TEXT_NODE)for(e=0;e<this.el.childNodes.length;e++){const o=this.el.childNodes[e];if(o.nodeType===Node.TEXT_NODE){const n=document.createElement("span");n.textContent=o.textContent,o.parentElement.insertBefore(n,o),o.remove()}}for(e=0;e<this.el.children.length;e++)t=this.el.children[e],getComputedStyle(t).position==="static"&&(t.style.position="relative"),getComputedStyle(t).zIndex==="auto"&&(t.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(e,t={}){Object.assign(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(e.style,t),e.classList.add("vanta-canvas")}initThree(){E.WebGLRenderer?(this.renderer=new E.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new E.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const e=this.getCanvasElement();return!!e&&e.getBoundingClientRect()}windowMouseMoveWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const o=e.clientX-t.left,n=e.clientY-t.top;o>=0&&n>=0&&o<=t.width&&n<=t.height&&(this.mouseX=o,this.mouseY=n,this.options.mouseEase||this.triggerMouseMove(o,n))}windowTouchWrapper(e){const t=this.getCanvasRect();if(!t)return!1;if(e.touches.length===1){const o=e.touches[0].clientX-t.left,n=e.touches[0].clientY-t.top;o>=0&&n>=0&&o<=t.width&&n<=t.height&&(this.mouseX=o,this.mouseY=n,this.options.mouseEase||this.triggerMouseMove(o,n))}}windowGyroWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const o=Math.round(2*e.alpha)-t.left,n=Math.round(2*e.beta)-t.top;o>=0&&n>=0&&o<=t.width&&n<=t.height&&(this.mouseX=o,this.mouseY=n,this.options.mouseEase||this.triggerMouseMove(o,n))}triggerMouseMove(e,t){e===void 0&&t===void 0&&(this.options.mouseEase?(e=this.mouseEaseX,t=this.mouseEaseY):(e=this.mouseX,t=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=e/this.scale,this.uniforms.iMouse.value.y=t/this.scale);const o=e/this.width,n=t/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(o,n)}setSize(){this.scale||(this.scale=1),u()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),o=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,n=t.top+o;return n-window.innerHeight<=o&&o<=n+e}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const e=performance.now();if(this.prevNow){let t=(e-this.prevNow)/16.666666666666668;t=Math.max(.2,Math.min(t,5)),this.t+=t,this.t2+=(this.options.speed||1)*t,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=e,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("deviceorientation",this.windowGyroWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req);const t=this.scene;t&&t.children&&g(t),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),c.current===this&&(c.current=null)}};const A=c.VantaBase;let r=typeof window=="object"&&window.THREE;class i extends A{static initClass(){this.prototype.defaultOptions={color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}constructor(t){r=t.THREE||r,super(t)}genPoint(t,o,n){let h;if(this.points||(this.points=[]),this.options.showDots){const x=new r.SphereGeometry(.25,12,12),S=new r.MeshLambertMaterial({color:this.options.color});h=new r.Mesh(x,S)}else h=new r.Object3D;var p,d;return this.cont.add(h),h.ox=t,h.oy=o,h.oz=n,h.position.set(t,o,n),h.r=((p=-2)==null&&(p=0),(d=2)==null&&(d=1),p+Math.random()*(d-p)),this.points.push(h)}onInit(){this.cont=new r.Group,this.cont.position.set(0,0,0),this.scene.add(this.cont);let t=this.options.points,{spacing:o}=this.options;u()&&(t=~~(.75*t),o=~~(.65*o));const n=t*t*2;this.linePositions=new Float32Array(n*n*3),this.lineColors=new Float32Array(n*n*3);const h=v(new r.Color(this.options.color)),p=v(new r.Color(this.options.backgroundColor));this.blending=h>p?"additive":"subtractive";const d=new r.BufferGeometry;d.setAttribute("position",new r.BufferAttribute(this.linePositions,3).setUsage(r.DynamicDrawUsage)),d.setAttribute("color",new r.BufferAttribute(this.lineColors,3).setUsage(r.DynamicDrawUsage)),d.computeBoundingSphere(),d.setDrawRange(0,0);const x=new r.LineBasicMaterial({vertexColors:r.VertexColors,blending:this.blending==="additive"?r.AdditiveBlending:null,transparent:!0});this.linesMesh=new r.LineSegments(d,x),this.cont.add(this.linesMesh);for(let y=0;y<=t;y++)for(let w=0;w<=t;w++){const R=a(-3,3),l=(y-t/2)*o+a(-5,5);let W=(w-t/2)*o+a(-5,5);y%2&&(W+=.5*o),this.genPoint(l,R-a(5,15),W),this.genPoint(l+a(-5,5),R+a(5,15),W+a(-5,5))}this.camera=new r.PerspectiveCamera(25,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.scene.add(this.camera);const S=new r.AmbientLight(16777215,.75);return this.scene.add(S),this.spot=new r.SpotLight(16777215,1),this.spot.position.set(0,200,0),this.spot.distance=400,this.spot.target=this.cont,this.scene.add(this.spot)}onDestroy(){this.scene&&this.scene.remove(this.linesMesh),this.spot=this.points=this.linesMesh=this.lineColors=this.linePositions=null}setOptions(t){super.setOptions(t),t.color&&this.points.forEach(o=>{o.material.color=new r.Color(t.color)})}onUpdate(){let t;const o=this.camera;Math.abs(o.tx-o.position.x)>.01&&(t=o.tx-o.position.x,o.position.x+=.02*t),Math.abs(o.ty-o.position.y)>.01&&(t=o.ty-o.position.y,o.position.y+=.02*t),o.lookAt(new r.Vector3(0,0,0));let n=0,h=0,p=0;const d=new r.Color(this.options.backgroundColor),x=new r.Color(this.options.color),S=x.clone().sub(d);this.rayCaster&&this.rayCaster.setFromCamera(new r.Vector2(this.rcMouseX,this.rcMouseY),this.camera);for(let y=0;y<this.points.length;y++){let w,R;const l=this.points[y];R=this.rayCaster?this.rayCaster.ray.distanceToPoint(l.position):1e3;const W=R.clamp(5,15);if(l.scale.x=l.scale.y=l.scale.z=(.25*(15-W)).clamp(1,100),l.r!==0){let b=Math.atan2(l.position.z,l.position.x);w=Math.sqrt(l.position.z*l.position.z+l.position.x*l.position.x),b+=25e-5*l.r,l.position.x=w*Math.cos(b),l.position.z=w*Math.sin(b)}for(let b=y;b<this.points.length;b++){const T=this.points[b],X=l.position.x-T.position.x,P=l.position.y-T.position.y,N=l.position.z-T.position.z;if(w=Math.sqrt(X*X+P*P+N*N),w<this.options.maxDistance){let C;const Y=(2*(1-w/this.options.maxDistance)).clamp(0,1);C=this.blending==="additive"?new r.Color(0).lerp(S,Y):d.clone().lerp(x,Y),this.linePositions[n++]=l.position.x,this.linePositions[n++]=l.position.y,this.linePositions[n++]=l.position.z,this.linePositions[n++]=T.position.x,this.linePositions[n++]=T.position.y,this.linePositions[n++]=T.position.z,this.lineColors[h++]=C.r,this.lineColors[h++]=C.g,this.lineColors[h++]=C.b,this.lineColors[h++]=C.r,this.lineColors[h++]=C.g,this.lineColors[h++]=C.b,p++}}}return this.linesMesh.geometry.setDrawRange(0,2*p),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0,.001*this.t}onMouseMove(t,o){const n=this.camera;n.oy||(n.oy=n.position.y,n.ox=n.position.x,n.oz=n.position.z);const h=Math.atan2(n.oz,n.ox),p=Math.sqrt(n.oz*n.oz+n.ox*n.ox),d=h+2*(t-.5)*(this.options.mouseCoeffX||1);n.tz=p*Math.sin(d),n.tx=p*Math.cos(d),n.ty=n.oy+50*(o-.5)*(this.options.mouseCoeffY||1),this.rayCaster,this.rcMouseX=2*t-1,this.rcMouseY=2*-t+1}onRestart(){this.scene&&this.scene.remove(this.linesMesh),this.points=[]}}i.initClass();const s=c.register("NET",i);return m})())})(D);var H={exports:{}};(function(q,z){(function(f,m){q.exports=m()})(typeof self<"u"?self:L,()=>(()=>{var f={d:(i,s)=>{for(var e in s)f.o(s,e)&&!f.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:s[e]})},o:(i,s)=>Object.prototype.hasOwnProperty.call(i,s),r:i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})}},m={};f.r(m),f.d(m,{default:()=>r}),Number.prototype.clamp=function(i,s){return Math.min(Math.max(this,i),s)};function u(i){for(;i.children&&i.children.length>0;)u(i.children[0]),i.remove(i.children[0]);i.geometry&&i.geometry.dispose(),i.material&&(Object.keys(i.material).forEach(s=>{i.material[s]&&i.material[s]!==null&&typeof i.material[s].dispose=="function"&&i.material[s].dispose()}),i.material.dispose())}const a=typeof window=="object";let v=a&&window.THREE||{};a&&!window.VANTA&&(window.VANTA={});const g=a&&window.VANTA||{};g.register=(i,s)=>g[i]=e=>new s(e),g.version="0.5.24";const M=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};g.VantaBase=class{constructor(i={}){if(!a)return!1;g.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const s=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},s),(i instanceof HTMLElement||typeof i=="string")&&(i={el:i}),Object.assign(this.options,i),this.options.THREE&&(v=this.options.THREE),this.el=this.options.el,this.el==null)M('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const n=this.el;if(this.el=(e=n,document.querySelector(e)),!this.el)return void M("Cannot find element",n)}var e,t;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(n){return M("Init error",n),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(t=this.options.backgroundColor,typeof t=="number"?"#"+("00000"+t.toString(16)).slice(-6):t)))}this.initMouse(),this.resize(),this.animationLoop();const o=window.addEventListener;o("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(o("scroll",this.windowMouseMoveWrapper),o("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(o("touchstart",this.windowTouchWrapper),o("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&o("deviceorientation",this.windowGyroWrapper)}setOptions(i={}){Object.assign(this.options,i),this.triggerMouseMove()}prepareEl(){let i,s;if(typeof Node<"u"&&Node.TEXT_NODE)for(i=0;i<this.el.childNodes.length;i++){const e=this.el.childNodes[i];if(e.nodeType===Node.TEXT_NODE){const t=document.createElement("span");t.textContent=e.textContent,e.parentElement.insertBefore(t,e),e.remove()}}for(i=0;i<this.el.children.length;i++)s=this.el.children[i],getComputedStyle(s).position==="static"&&(s.style.position="relative"),getComputedStyle(s).zIndex==="auto"&&(s.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(i,s={}){Object.assign(i.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(i.style,s),i.classList.add("vanta-canvas")}initThree(){v.WebGLRenderer?(this.renderer=new v.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new v.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const i=this.getCanvasElement();return!!i&&i.getBoundingClientRect()}windowMouseMoveWrapper(i){const s=this.getCanvasRect();if(!s)return!1;const e=i.clientX-s.left,t=i.clientY-s.top;e>=0&&t>=0&&e<=s.width&&t<=s.height&&(this.mouseX=e,this.mouseY=t,this.options.mouseEase||this.triggerMouseMove(e,t))}windowTouchWrapper(i){const s=this.getCanvasRect();if(!s)return!1;if(i.touches.length===1){const e=i.touches[0].clientX-s.left,t=i.touches[0].clientY-s.top;e>=0&&t>=0&&e<=s.width&&t<=s.height&&(this.mouseX=e,this.mouseY=t,this.options.mouseEase||this.triggerMouseMove(e,t))}}windowGyroWrapper(i){const s=this.getCanvasRect();if(!s)return!1;const e=Math.round(2*i.alpha)-s.left,t=Math.round(2*i.beta)-s.top;e>=0&&t>=0&&e<=s.width&&t<=s.height&&(this.mouseX=e,this.mouseY=t,this.options.mouseEase||this.triggerMouseMove(e,t))}triggerMouseMove(i,s){i===void 0&&s===void 0&&(this.options.mouseEase?(i=this.mouseEaseX,s=this.mouseEaseY):(i=this.mouseX,s=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=i/this.scale,this.uniforms.iMouse.value.y=s/this.scale);const e=i/this.width,t=s/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(e,t)}setSize(){this.scale||(this.scale=1),typeof navigator<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600)&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const i=this.el.offsetHeight,s=this.el.getBoundingClientRect(),e=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,t=s.top+e;return t-window.innerHeight<=e&&e<=t+i}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const i=performance.now();if(this.prevNow){let s=(i-this.prevNow)/16.666666666666668;s=Math.max(.2,Math.min(s,5)),this.t+=s,this.t2+=(this.options.speed||1)*s,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=i,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const i=window.removeEventListener;i("touchstart",this.windowTouchWrapper),i("touchmove",this.windowTouchWrapper),i("scroll",this.windowMouseMoveWrapper),i("mousemove",this.windowMouseMoveWrapper),i("deviceorientation",this.windowGyroWrapper),i("resize",this.resize),window.cancelAnimationFrame(this.req);const s=this.scene;s&&s.children&&u(s),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),g.current===this&&(g.current=null)}};const E=g.VantaBase;let c=typeof window=="object"&&window.THREE;class O extends E{constructor(s){c=s.THREE||c,c.Color.prototype.toVector=function(){return new c.Vector3(this.r,this.g,this.b)},super(s),this.updateUniforms=this.updateUniforms.bind(this)}init(){this.mode="shader",this.uniforms={iTime:{type:"f",value:1},iResolution:{type:"v2",value:new c.Vector2(1,1)},iDpr:{type:"f",value:window.devicePixelRatio||1},iMouse:{type:"v2",value:new c.Vector2(this.mouseX||0,this.mouseY||0)}},super.init(),this.fragmentShader&&this.initBasicShader()}setOptions(s){super.setOptions(s),this.updateUniforms()}initBasicShader(s=this.fragmentShader,e=this.vertexShader){e||(e=`uniform float uTime;
uniform vec2 uResolution;
void main() {
  gl_Position = vec4( position, 1.0 );
}`),this.updateUniforms(),typeof this.valuesChanger=="function"&&this.valuesChanger();const t=new c.ShaderMaterial({uniforms:this.uniforms,vertexShader:e,fragmentShader:s}),o=this.options.texturePath;o&&(this.uniforms.iTex={type:"t",value:new c.TextureLoader().load(o)});const n=new c.Mesh(new c.PlaneGeometry(2,2),t);this.scene.add(n),this.camera=new c.Camera,this.camera.position.z=1}updateUniforms(){const s={};let e,t;for(e in this.options)t=this.options[e],e.toLowerCase().indexOf("color")!==-1?s[e]={type:"v3",value:new c.Color(t).toVector()}:typeof t=="number"&&(s[e]={type:"f",value:t});return Object.assign(this.uniforms,s)}resize(){super.resize(),this.uniforms.iResolution.value.x=this.width/this.scale,this.uniforms.iResolution.value.y=this.height/this.scale}}class A extends O{}const r=g.register("CLOUDS",A);return A.prototype.defaultOptions={backgroundColor:16777215,skyColor:6863063,cloudColor:11387358,cloudShadowColor:1586512,sunColor:16750873,sunGlareColor:16737843,sunlightColor:16750899,scale:3,scaleMobile:12,speed:1,mouseEase:!0},A.prototype.fragmentShader=`uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform sampler2D iTex;

uniform float speed;
uniform vec3 skyColor;
uniform vec3 cloudColor;
uniform vec3 cloudShadowColor;
uniform vec3 sunColor;
uniform vec3 sunlightColor;
uniform vec3 sunGlareColor;
uniform vec3 backgroundColor;

// uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
// uniform samplerXX iChannel0..3;          // input channel. XX = 2D/Cube


// Volumetric clouds. It performs level of detail (LOD) for faster rendering
float hash(float p) {
  p = fract(p * 0.011);
  p *= (p + 7.5);
  p *= (p + p);
  return fract(p);
}

float noise( vec3 x ){
    // The noise function returns a value in the range -1.0f -> 1.0f
    vec3 p = floor(x);
    vec3 f = fract(x);
    f       = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0 + 113.0*p.z;
    return mix(mix(mix( hash(n+0.0  ), hash(n+1.0  ),f.x),
                   mix( hash(n+57.0 ), hash(n+58.0 ),f.x),f.y),
               mix(mix( hash(n+113.0), hash(n+114.0),f.x),
                   mix( hash(n+170.0), hash(n+171.0),f.x),f.y),f.z);
}

const float constantTime = 1000.;
float map5( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q ); q = q*2.03;
    f += 0.12500*noise( q ); q = q*2.01;
    f += 0.06250*noise( q ); q = q*2.02;
    f += 0.03125*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}
float map4( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q ); q = q*2.03;
    f += 0.12500*noise( q ); q = q*2.01;
    f += 0.06250*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}
float map3( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q ); q = q*2.03;
    f += 0.12500*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}
float map2( in vec3 p ){
    vec3 speed1 = vec3(0.5,0.01,1.0) * 0.5 * speed;
    vec3 q = p - speed1*(iTime + constantTime);
    float f;
    f  = 0.50000*noise( q ); q = q*2.02;
    f += 0.25000*noise( q );
    return clamp( 1.5 - p.y - 2.0 + 1.75*f, 0.0, 1.0 );
}

vec3 sundir = normalize( vec3(-1.0,0.0,-1.0) );

vec4 integrate( in vec4 sum, in float dif, in float den, in vec3 bgcol, in float t ){
    // lighting
    vec3 lin = cloudColor*1.4 + sunlightColor*dif;
    vec4 col = vec4( mix( vec3(1.0,0.95,0.8), cloudShadowColor, den ), den );
    col.xyz *= lin;
    col.xyz = mix( col.xyz, bgcol, 1.0-exp(-0.003*t*t) );
    // front to back blending
    col.a *= 0.4;
    col.rgb *= col.a;
    return sum + col*(1.0-sum.a);
}

#define MARCH(STEPS,MAPLOD) for(int i=0; i<STEPS; i++) { vec3  pos = ro + t*rd; if( pos.y<-3.0 || pos.y>2.0 || sum.a > 0.99 ) break; float den = MAPLOD( pos ); if( den>0.01 ) { float dif = clamp((den - MAPLOD(pos+0.3*sundir))/0.6, 0.0, 1.0 ); sum = integrate( sum, dif, den, bgcol, t ); } t += max(0.075,0.02*t); }

vec4 raymarch( in vec3 ro, in vec3 rd, in vec3 bgcol, in ivec2 px ){
    vec4 sum = vec4(0.0);

    float t = 0.0;

    MARCH(20,map5);
    MARCH(25,map4);
    MARCH(30,map3);
    MARCH(40,map2);

    return clamp( sum, 0.0, 1.0 );
}

mat3 setCamera( in vec3 ro, in vec3 ta, float cr ){
    vec3 cw = normalize(ta-ro);
    vec3 cp = vec3(sin(cr), cos(cr),0.0);
    vec3 cu = normalize( cross(cw,cp) );
    vec3 cv = normalize( cross(cu,cw) );
    return mat3( cu, cv, cw );
}

vec4 render( in vec3 ro, in vec3 rd, in ivec2 px ){
    // background sky
    float sun = clamp( dot(sundir,rd), 0.0, 1.0 );
    vec3 col = skyColor - rd.y*0.2*vec3(1.0,0.5,1.0) + 0.15*0.5;
    col += 0.2*sunColor*pow( sun, 8.0 );

    // clouds
    vec4 res = raymarch( ro, rd, col, px );
    col = col*(1.0-res.w) + res.xyz;

    // sun glare
    col += 0.2*sunGlareColor*pow( sun, 3.0 );

    return vec4( col, 1.0 );
}

void main(){
    vec2 p = (-iResolution.xy + 2.0*gl_FragCoord.xy)/ iResolution.y;

    vec2 m = iMouse.xy/iResolution.xy;
    m.y = (1.0 - m.y) * 0.33 + 0.28; // camera height

    m.x *= 0.25;
    m.x += sin(iTime * 0.1 + 3.1415) * 0.25 + 0.25;

    // camera
    vec3 ro = 4.0*normalize(vec3(sin(3.0*m.x), 0.4*m.y, cos(3.0*m.x))); // origin
    vec3 ta = vec3(0.0, -1.0, 0.0);
    mat3 ca = setCamera( ro, ta, 0.0 );
    // ray
    vec3 rd = ca * normalize( vec3(p.xy,1.5));

    gl_FragColor = render( ro, rd, ivec2(gl_FragCoord-0.5) );
}
`,m})())})(H);VANTA.CLOUDS({el:".canvas-vanta",minHeight:200,minWidth:200,mouseControls:!0,touchControls:!0,gyroControls:!1,scale:1,scaleMobile:1});
