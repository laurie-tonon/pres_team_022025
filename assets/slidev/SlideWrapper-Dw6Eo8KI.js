import{r as k,z as P,C as b,a0 as Jt,Y as dt,aI as Qt,y as Wt,P as Rt,p as te,E as ee,d as xt,f as B,i as st,o as O,aJ as se,a3 as ne,aK as F,k as et,g as T,j as Pt,F as re,e as gt,a9 as ie,t as ae,h as oe,ai as le,n as he,b as ue,a6 as ce}from"../modules/vue-CZpjC6kT.js";import{S as Ot,a as Ut,v as mt,a3 as ft,a4 as Et,a2 as de,a5 as fe,a6 as G,a7 as pe,a8 as ge,a9 as Mt,K as Ct,V as $t,W as kt,b as me,T as ve,aa as ye,_ as Vt,ab as _e,ac as xe,ad as we,ae as Se,af as be,ag as Pe,ah as Ee}from"../index-DIuqfVfl.js";import{d as Me}from"../modules/unplugin-icons-DkP5Nvpr.js";import{u as Ce}from"./context-Bq_7uCnR.js";function $e(t){var e;return{info:k(((e=Ot(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const pt={};function Ls(t){function e(s){return pt[s]??(pt[s]=$e(s))}return{info:P({get(){return e(b(t)).info.value},set(s){e(b(t)).info.value=s}}),update:async(s,n)=>{const r=e(n??b(t)),i=await r.update(s);return i&&(r.info.value=i),i}}}var ke=Object.defineProperty,Lt=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,Dt=(t,e,s)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,vt=(t,e)=>{for(var s in e||(e={}))Le.call(e,s)&&Dt(t,s,e[s]);if(Lt)for(var s of Lt(e))De.call(e,s)&&Dt(t,s,e[s]);return t},Ie=()=>({emit(t,...e){for(let s=this.events[t]||[],n=0,r=s.length;n<r;n++)s[n](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(r=>e!==r)}}});function nt(t,e){return t-e}function Ne(t){return t<0?-1:1}function rt(t){return[Math.abs(t),Ne(t)]}function Bt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Ae=2,L=Ae;function Gt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(r),s.appendChild(n),s}function Fe(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function Te(t,e,s){let n=e.x,r=e.y,i=s.x-n,o=s.y-r;if(i!==0||o!==0){const a=((t.x-n)*i+(t.y-r)*o)/(i*i+o*o);a>1?(n=s.x,r=s.y):a>0&&(n+=i*a,r+=o*a)}return i=t.x-n,o=t.y-r,i*i+o*o}function Ke(t,e){let s=t[0];const n=[s];let r;for(let i=1,o=t.length;i<o;i++)r=t[i],Fe(r,s)>e&&(n.push(r),s=r);return s!==r&&r&&n.push(r),n}function yt(t,e,s,n,r){let i=n,o=0;for(let a=e+1;a<s;a++){const l=Te(t[a],t[e],t[s]);l>i&&(o=a,i=l)}i>n&&(o-e>1&&yt(t,e,o,n,r),r.push(t[o]),s-o>1&&yt(t,o,s,n,r))}function ze(t,e){const s=t.length-1,n=[t[0]];return yt(t,0,s,e,n),n.push(t[s]),n}function It(t,e,s=!1){if(t.length<=2)return t;const n=e*e;return t=s?t:Ke(t,n),t=ze(t,n),t}var q=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n;const r=this.drauu.el,i=(e=this.drauu.options.coordinateScale)!=null?e:1,o=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-a.left+o.x)*i,y:(t.pageY-a.top+o.y)*i,pressure:t.pressure}}else{const a=this.drauu.svgPoint;a.x=t.clientX+o.x,a.y=t.clientY+o.y;const l=a.matrixTransform((n=r.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*i,y:l.y*i,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),r=e?vt(vt({},this.brush),e):this.brush;return n.setAttribute("fill",(s=r.fill)!=null?s:"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(L))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},je=class R extends q{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Bt();const s=Gt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=It(this.points,1,!0),this.count=0),this.attr("d",R.toSvgData(this.points)),!0}onEnd(){const e=this.el;if(this.el=null,!e)return!1;if(e.setAttribute("d",R.toSvgData(It(this.points,1,!0))),!e.getTotalLength()){const{x:s,y:n}=this.points[0],r=this.brush.size/2;e.setAttribute("d",`M ${s-r} ${n} a ${r},${r} 0 1,0 ${r*2},0 a ${r},${r} 0 1,0 ${-r*2},0`),e.setAttribute("fill",this.brush.color),e.setAttribute("stroke-width","0")}return!0}static line(e,s){const n=s.x-e.x,r=s.y-e.y;return{length:Math.sqrt(n**2+r**2),angle:Math.atan2(r,n)}}static controlPoint(e,s,n,r){const i=s||e,o=n||e,a=.2,l=R.line(i,o),p=l.angle+(r?Math.PI:0),v=l.length*a,y=e.x+Math.cos(p)*v,_=e.y+Math.sin(p)*v;return{x:y,y:_}}static bezierCommand(e,s,n){const r=R.controlPoint(n[s-1],n[s-2],e),i=R.controlPoint(e,n[s-1],n[s+1],!0);return`C ${r.x.toFixed(L)},${r.y.toFixed(L)} ${i.x.toFixed(L)},${i.y.toFixed(L)} ${e.x.toFixed(L)},${e.y.toFixed(L)}`}static toSvgData(e){return e.reduce((s,n,r,i)=>r===0?`M ${n.x.toFixed(L)},${n.y.toFixed(L)}`:`${s} ${R.bezierCommand(n,r,i)}`,"")}},Re=class extends q{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=rt(t.x-this.start.x),[n,r]=rt(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(nt),[a,l]=[this.start.y,this.start.y+n*r].sort(nt);this.attr("cx",(i+o)/2),this.attr("cy",(a+l)/2),this.attr("rx",(o-i)/2),this.attr("ry",(l-a)/2)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}},Oe=class extends q{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const i=s[r];if(i.getTotalLength){const o=i.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const l=i.getPointAtLength(o*a/this.pathSubFactor),p=i.getPointAtLength(o*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:p.x,y1:l.y,y2:p.y,segment:a,element:n||i})}}else i.children&&e(i.children,i)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t];if(this.svgPointPrevious&&this.svgPointCurrent){const s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,r=e.x1,i=e.x2,o=t.y1,a=t.y2,l=e.y1,p=e.y2,v=(s-n)*(l-p)-(o-a)*(r-i),y=(s*a-o*n)*(r-i)-(s-n)*(r*p-l*i),_=(s*a-o*n)*(l-p)-(o-a)*(r*p-l*i),d=(f,c,M)=>f>=c&&f<=M?!0:f>=M&&f<=c;if(v===0)return!1;{const f={x:y/v,y:_/v};return d(f.x,s,n)&&d(f.y,o,a)&&d(f.x,r,i)&&d(f.y,l,p)}}},Ue=class extends q{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Bt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Gt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,r=t.y-this.start.y;if(r!==0){let i=n/r;i=Math.round(i),Math.abs(i)<=1?(e=this.start.x+r*i,s=this.start.y+r):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(t.getTotalLength()<5)return!1}catch{return!1}return!0}},Ve=class extends q{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=rt(t.x-this.start.x),[n,r]=rt(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(nt),[a,l]=[this.start.y,this.start.y+n*r].sort(nt);this.attr("x",i),this.attr("y",a),this.attr("width",o-i),this.attr("height",l-a)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}};function Nt(t,e,s,n=r=>r){return t*n(.5-e*(.5-s))}function Be(t){return[-t[0],-t[1]]}function $(t,e){return[t[0]+e[0],t[1]+e[1]]}function E(t,e){return[t[0]-e[0],t[1]-e[1]]}function C(t,e){return[t[0]*e,t[1]*e]}function Ge(t,e){return[t[0]/e,t[1]/e]}function X(t){return[t[1],-t[0]]}function At(t,e){return t[0]*e[0]+t[1]*e[1]}function qe(t,e){return t[0]===e[0]&&t[1]===e[1]}function He(t){return Math.hypot(t[0],t[1])}function Ye(t){return t[0]*t[0]+t[1]*t[1]}function Ft(t,e){return Ye(E(t,e))}function qt(t){return Ge(t,He(t))}function Xe(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function Z(t,e,s){let n=Math.sin(s),r=Math.cos(s),i=t[0]-e[0],o=t[1]-e[1],a=i*r-o*n,l=i*n+o*r;return[a+e[0],l+e[1]]}function _t(t,e,s){return $(t,C(E(e,t),s))}function Tt(t,e,s){return $(t,C(e,s))}var{min:V,PI:Ze}=Math,Kt=.275,J=Ze+1e-4;function Je(t,e={}){let{size:s=16,smoothing:n=.5,thinning:r=.5,simulatePressure:i=!0,easing:o=u=>u,start:a={},end:l={},last:p=!1}=e,{cap:v=!0,easing:y=u=>u*(2-u)}=a,{cap:_=!0,easing:d=u=>--u*u*u+1}=l;if(t.length===0||s<=0)return[];let f=t[t.length-1].runningLength,c=a.taper===!1?0:a.taper===!0?Math.max(s,f):a.taper,M=l.taper===!1?0:l.taper===!0?Math.max(s,f):l.taper,U=Math.pow(s*n,2),D=[],h=[],x=t.slice(0,10).reduce((u,S)=>{let g=S.pressure;if(i){let m=V(1,S.distance/s),ht=V(1,1-m);g=V(1,u+(ht-u)*(m*Kt))}return(u+g)/2},t[0].pressure),w=Nt(s,r,t[t.length-1].pressure,o),it,at=t[0].vector,H=t[0].point,Q=H,z=H,j=Q,ot=!1;for(let u=0;u<t.length;u++){let{pressure:S}=t[u],{point:g,vector:m,distance:ht,runningLength:Y}=t[u];if(u<t.length-1&&f-Y<3)continue;if(r){if(i){let A=V(1,ht/s),ct=V(1,1-A);S=V(1,x+(ct-x)*(A*Kt))}w=Nt(s,r,S,o)}else w=s/2;it===void 0&&(it=w);let Yt=Y<c?y(Y/c):1,Xt=f-Y<M?d((f-Y)/M):1;w=Math.max(.01,w*Math.min(Yt,Xt));let wt=(u<t.length-1?t[u+1]:t[u]).vector,ut=u<t.length-1?At(m,wt):1,Zt=At(m,at)<0&&!ot,St=ut!==null&&ut<0;if(Zt||St){let A=C(X(at),w);for(let ct=1/13,tt=0;tt<=1;tt+=ct)z=Z(E(g,A),g,J*tt),D.push(z),j=Z($(g,A),g,J*-tt),h.push(j);H=z,Q=j,St&&(ot=!0);continue}if(ot=!1,u===t.length-1){let A=C(X(m),w);D.push(E(g,A)),h.push($(g,A));continue}let bt=C(X(_t(wt,m,ut)),w);z=E(g,bt),(u<=1||Ft(H,z)>U)&&(D.push(z),H=z),j=$(g,bt),(u<=1||Ft(Q,j)>U)&&(h.push(j),Q=j),x=S,at=m}let I=t[0].point.slice(0,2),N=t.length>1?t[t.length-1].point.slice(0,2):$(t[0].point,[1,1]),lt=[],W=[];if(t.length===1){if(!(c||M)||p){let u=Tt(I,qt(X(E(I,N))),-(it||w)),S=[];for(let g=1/13,m=g;m<=1;m+=g)S.push(Z(u,I,J*2*m));return S}}else{if(!(c||M&&t.length===1))if(v)for(let S=1/13,g=S;g<=1;g+=S){let m=Z(h[0],I,J*g);lt.push(m)}else{let S=E(D[0],h[0]),g=C(S,.5),m=C(S,.51);lt.push(E(I,g),E(I,m),$(I,m),$(I,g))}let u=X(Be(t[t.length-1].vector));if(M||c&&t.length===1)W.push(N);else if(_){let S=Tt(N,u,w);for(let g=1/29,m=g;m<1;m+=g)W.push(Z(S,N,J*3*m))}else W.push($(N,C(u,w)),$(N,C(u,w*.99)),E(N,C(u,w*.99)),E(N,C(u,w)))}return D.concat(W,h.reverse(),lt)}function Qe(t,e={}){var s;let{streamline:n=.5,size:r=16,last:i=!1}=e;if(t.length===0)return[];let o=.15+(1-n)*.85,a=Array.isArray(t[0])?t:t.map(({x:d,y:f,pressure:c=.5})=>[d,f,c]);if(a.length===2){let d=a[1];a=a.slice(0,-1);for(let f=1;f<5;f++)a.push(_t(a[0],d,f/4))}a.length===1&&(a=[...a,[...$(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,v=0,y=l[0],_=a.length-1;for(let d=1;d<a.length;d++){let f=i&&d===_?a[d].slice(0,2):_t(y.point,a[d],o);if(qe(y.point,f))continue;let c=Xe(f,y.point);if(v+=c,d<_&&!p){if(v<r)continue;p=!0}y={point:f,pressure:a[d][2]>=0?a[d][2]:.5,vector:qt(E(y.point,f)),distance:c,runningLength:v},l.push(y)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function We(t,e={}){return Je(Qe(t,e),e)}var ts=class Ht extends q{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return Ht.getSvgData(e,this.brush)}static getSvgData(e,s){const n=We(e,vt({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const r=n.reduce((i,[o,a],l,p)=>{const[v,y]=p[(l+1)%p.length];return i.push(o,a,(o+v)/2,(a+y)/2),i},["M",...n[0],"Q"]);return r.push("Z"),r.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}};function es(t){return{draw:new je(t),stylus:new ts(t),line:new Ue(t),rectangle:new Ve(t),ellipse:new Re(t),eraseLine:new Oe(t)}}var ss=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Ie(),this._originalPointerId=null,this._models=es(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,r=this.eventStart.bind(this),i=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",r,{passive:!1}),s.addEventListener("pointermove",i,{passive:!1}),s.addEventListener("pointerup",o,{passive:!1}),s.addEventListener("pointercancel",o,{passive:!1}),s.addEventListener("keydown",a,!1),s.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",r),s.removeEventListener("pointermove",i),s.removeEventListener("pointerup",o),s.removeEventListener("pointercancel",o),s.removeEventListener("keydown",a,!1),s.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;s&&(this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)}))}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this._elements=[],this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function ns(t){return new ss(t)}const rs=Jt(()=>{const{currentSlideNo:t,isPresenter:e}=Ut(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=dt("slidev-drawing-enabled",!1),r=dt("slidev-drawing-pinned",!1),i=Qt(dt("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),o=k(!1),a=k(!1),l=k(!1),p=k(!1),v=k("stylus"),y=P(()=>mt.drawings.syncAll||e.value);let _=!1;const d=P({get(){return v.value},set(h){v.value=h,h==="arrow"?(c.mode="line",i.arrowEnd=!0):(c.mode=h,i.arrowEnd=!1)}}),f=Rt({brush:i,acceptsInputTypes:P(()=>n.value&&(!mt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=Wt(ns(f));function M(){c.clear(),y.value&&Et(t.value,"")}function U(){var h;l.value=c.canRedo(),a.value=c.canUndo(),p.value=!!((h=c.el)!=null&&h.children.length)}function D(h){_=!0;const x=ft[h||t.value];x!=null?c.load(x):c.clear(),U(),_=!1}return c.on("changed",()=>{if(U(),!_){const h=c.dump(),x=t.value;(ft[x]||"")!==h&&y.value&&Et(x,c.dump())}}),fe(h=>{_=!0,h[t.value]!=null&&c.load(h[t.value]||""),_=!1,U()}),te(()=>{ee(t,()=>{c.mounted&&D()},{immediate:!0})}),c.on("start",()=>o.value=!0),c.on("end",()=>o.value=!1),window.addEventListener("keydown",h=>{if(!n.value||de.value)return;const x=!h.ctrlKey&&!h.altKey&&!h.shiftKey&&!h.metaKey;let w=!0;h.code==="KeyZ"&&(h.ctrlKey||h.metaKey)?h.shiftKey?c.redo():c.undo():h.code==="Escape"?n.value=!1:h.code==="KeyL"&&x?d.value="line":h.code==="KeyA"&&x?d.value="arrow":h.code==="KeyS"&&x?d.value="stylus":h.code==="KeyR"&&x?d.value="rectangle":h.code==="KeyE"&&x?d.value="ellipse":h.code==="KeyC"&&x?M():h.code.startsWith("Digit")&&x&&+h.code[5]<=s.length?i.color=s[+h.code[5]-1]:w=!1,w&&(h.preventDefault(),h.stopPropagation())},!1),{brush:i,brushColors:s,canClear:p,canRedo:l,canUndo:a,clear:M,drauu:c,drauuOptions:f,drawingEnabled:n,drawingMode:d,drawingPinned:r,drawingState:ft,isDrawing:o,loadCanvas:D}}),is=["innerHTML"],Ds=xt({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=rs();return(s,n)=>b(e)[s.page]?(O(),B("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(e)[s.page]},null,8,is)):st("v-if",!0)}}),K=Rt({});let as=[],os=[];G(K,"$syncUp",!0);G(K,"$syncDown",!0);G(K,"$paused",!1);G(K,"$onSet",t=>as.push(t));G(K,"$onPatch",t=>os.push(t));pe();G(K,"$patch",async()=>!1);const ls=ge(K,K,!0);var zt;(zt=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||zt[1];var jt;(jt=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||jt[1];class hs{constructor(){this._screenshotSession=null}getSnapshot(e,s){const n=e+(s?"-dark":"-light"),r=ls.state[n];if(!r)return;const i=Ot(e);if(i&&(r==null?void 0:r.revision)===(i==null?void 0:i.meta.slide.revision))return r.image}async saveSnapshot(e,s,n){return!1}async startCapturing(e){return!1}}const us=new hs,cs=["id"],ds=["id"],fs={class:"slidev-slide-container w-full h-full relative"},ps=["src"],gs=xt({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1},no:{type:Number,required:!1},useSnapshot:{type:Boolean,default:!1},contentStyle:{type:Object,default:()=>({})}},setup(t){const e=t,{isPrintMode:s}=Ut(),n=k(null),r=se(n),i=k(null),o=P(()=>e.width??r.width.value),a=P(()=>e.width?e.width/Mt.value:r.height.value),l=P(()=>Ct.value&&!s.value?+Ct.value:Math.min(o.value/$t.value,a.value/kt.value)),p=P(()=>({...e.contentStyle,height:`${kt.value}px`,width:`${$t.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),v=P(()=>e.width?{width:`${e.width}px`,height:`${e.width/Mt.value}px`}:{});e.isMain&&ne(P(()=>`:root { --slidev-slide-scale: ${l.value}; }`)),F(ve,l),F(ye,i);const y=P(()=>{if(!(e.no==null||!e.useSnapshot))return us.getSnapshot(e.no,me.value)});return(_,d)=>y.value?(O(),B(re,{key:1},[st(" Image Snapshot "),T("div",fs,[T("img",{src:y.value,class:"w-full h-full object-cover",style:et(v.value)},null,12,ps),d[0]||(d[0]=T("div",{absolute:"","bottom-1":"","right-1":"","p0.5":"","text-cyan:75":"","bg-cyan:10":"",rounded:"",title:"Snapshot"},[T("div",{class:"i-carbon-camera"})],-1))])],2112)):(O(),B("div",{key:0,id:t.isMain?"slide-container":void 0,ref_key:"container",ref:n,class:"slidev-slide-container",style:et(v.value)},[T("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:i,class:"slidev-slide-content",style:et(p.value)},[Pt(_.$slots,"default",{},void 0,!0)],12,ds),Pt(_.$slots,"controls",{},void 0,!0)],12,cs))}}),Is=Vt(gs,[["__scopeId","data-v-88ba53cf"]]),ms={key:0,class:"absolute bottom-0 p-4 mt-auto flex items-center w-full text-primary dark:text-white z-10"},vs={class:"mb-0 flex items-center"},ys=["href"],_s=["src"],xs=["href"],ws={__name:"global-top",setup(t){const{$slidev:e}=Ce();return(s,n)=>{const r=Me;return b(e).themeConfigs.eventLogo||b(e).themeConfigs.twitter?(O(),B("footer",ms,[T("div",vs,[T("a",{href:b(e).themeConfigs.eventUrl,target:"_blank"},[T("img",{src:b(e).themeConfigs.eventLogo,class:"h-8 mr-4",alt:"Event image"},null,8,_s)],8,ys)]),b(e).themeConfigs.twitter?(O(),B("a",{key:0,href:b(e).themeConfigs.twitterUrl,target:"_blank"},[gt(r),ie(ae(b(e).themeConfigs.twitter),1)],8,xs)):st("v-if",!0)])):st("v-if",!0)}}},Ns={render:()=>[oe(ws)]},As={render:()=>[]},Ss={render:()=>[]},bs={render:()=>[]},Ps=["data-slidev-no","lang"],Es=xt({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=P(()=>{var i,o;return((o=(i=e.route.meta)==null?void 0:i.slide)==null?void 0:o.frontmatter.zoom)??1});F(_e,e.route),F(xe,e.route.meta.slide.frontmatter),F(we,k(e.route.no)),F(Se,k(e.renderContext)),F(be,le(e,"clicksContext")),F(Pe,s);const n=P(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),r=P(()=>({...n.value,"user-select":mt.selectable?void 0:"none"}));return(i,o)=>(O(),B("div",{"data-slidev-no":e.route.no,class:he(b(Ee)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:et(r.value),lang:e.route.meta.slide.frontmatter.lang},[gt(b(bs)),(O(),ue(ce(e.route.component))),gt(b(Ss))],14,Ps))}}),Fs=Vt(Es,[["__scopeId","data-v-39c92b8a"]]);export{As as G,Fs as S,Ds as _,Is as a,$e as b,rs as c,Ns as d,Ls as u};
