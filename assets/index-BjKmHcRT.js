(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Bn=Object.freeze({Left:0,Middle:1,Right:2});class Ln{#t;#e;#n;constructor(t){this.#t=new Set,this.#e=new Set,this.#n=new Set,this.mouse={x:0,y:0,dx:0,dy:0},this.wheel={dx:0,dy:0},t.addEventListener("keydown",n=>{this.#t.add(n.code)}),t.addEventListener("keyup",n=>{this.#t.delete(n.code)}),t.addEventListener("mousedown",n=>{this.#t.add(n.button),this.mouse.x=n.clientX,this.mouse.y=n.clientY}),t.addEventListener("mouseup",n=>{this.#t.delete(n.button),this.mouse.x=n.clientX,this.mouse.y=n.clientY}),t.addEventListener("mousemove",n=>{this.mouse.x=n.clientX,this.mouse.y=n.clientY,this.mouse.dx=n.movementX,this.mouse.dy=n.movementY}),t.addEventListener("blur",()=>{this.#t.clear(),this.tick()})}down(t){return this.#t.has(t)}isUp(t){return!this.down(t)}pressed(t){return this.#e.has(t)}wentUp(t){return this.#n.has(t)}tick(){this.#e.clear(),this.#n.clear(),this.mouse.dx=0,this.mouse.dy=0,this.wheel.dx=0,this.wheel.dy=0}}function Fn(e,t,n){return Math.min(Math.max(e,t),n)}function D(e,t,n){return t*n+e*(1-n)}function At(e,t,n=1e-5){return Math.abs(e-t)<=n}function Wn(e,t=1e-5){return Math.abs(e)<=t}class tt{constructor(t=0,n=0,s=0){this.set(t,n,s)}new(){return new tt(this.x,this.y,this.z)}set(t,n,s){return arguments.length===1?(this.x=t.x,this.y=t.y,this.z=t.z):(this.x=t,this.y=n,this.z=s),this}zero(){return this.set(0,0,0)}splat(t){return this.set(t,t,t)}toArray(){return[this.x,this.y,this.z]}add(t){return t.isVec3?(this.x+=t.x,this.y+=t.y,this.z+=t.z):(this.x+=t,this.y+=t,this.z+=t),this}sub(t){return t.isVec3?(this.x-=t.x,this.y-=t.y,this.z-=t.z):(this.x-=t,this.y-=t,this.z-=t),this}mul(t){return t.isVec3?(this.x*=t.x,this.y*=t.y,this.z*=t.z):(this.x*=t,this.y*=t,this.z*=t),this}div(t){return t.isVec3?(this.x/=t.x,this.y/=t.y,this.z/=t.z):(this.x/=t,this.y/=t,this.z/=t),this}eq(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}nearEq(t){return At(this.x,t.x)&&At(this.y,t.y)&&At(this.z,t.z)}normalize(){let t=this.len2();return Wn(t)||(t=1/Math.sqrt(t)),this.mul(t)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lerp(t,n){return this.x=D(this.x,t.x,n),this.y=D(this.y,t.y,n),this.z=D(this.z,t.z,n),this}len(){return Math.sqrt(this.len2())}len2(){return this.dot(this)}dist(t){return Math.sqrt(this.dist2(t))}dist2(t){return t.new().sub(this).len2()}cross(t){return this.set(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}}tt.prototype.isVec3=!0;class J{constructor(){this.id()}new(){return new J().set(this.e00,this.e01,this.e02,this.e03,this.e10,this.e11,this.e12,this.e13,this.e20,this.e21,this.e22,this.e23,this.e30,this.e31,this.e32,this.e33)}id(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}toArray(){return[this.e00,this.e10,this.e20,this.e30,this.e01,this.e11,this.e21,this.e31,this.e02,this.e12,this.e22,this.e32,this.e03,this.e13,this.e23,this.e33]}set(t,n,s,r,i,o,a,c,u,p,h,v,m,T,g,M){return arguments.length===1?(this.e00=t.e00,this.e01=t.e01,this.e02=t.e02,this.e03=t.e03,this.e10=t.e10,this.e11=t.e11,this.e12=t.e12,this.e13=t.e13,this.e20=t.e20,this.e21=t.e21,this.e22=t.e22,this.e23=t.e23,this.e30=t.e30,this.e31=t.e31,this.e32=t.e32,this.e33=t.e33):(this.e00=t,this.e01=n,this.e02=s,this.e03=r,this.e10=i,this.e11=o,this.e12=a,this.e13=c,this.e20=u,this.e21=p,this.e22=h,this.e23=v,this.e30=m,this.e31=T,this.e32=g,this.e33=M),this}scale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1)}trans(t,n,s){return this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1)}rotX(t){let n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1)}rotY(t){let n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1)}rotZ(t){let n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1)}mul(t){return this.set(this.e00*t.e00+this.e01*t.e10+this.e02*t.e20+this.e03*t.e30,this.e00*t.e01+this.e01*t.e11+this.e02*t.e21+this.e03*t.e31,this.e00*t.e02+this.e01*t.e12+this.e02*t.e22+this.e03*t.e32,this.e00*t.e03+this.e01*t.e13+this.e02*t.e23+this.e03*t.e33,this.e10*t.e00+this.e11*t.e10+this.e12*t.e20+this.e13*t.e30,this.e10*t.e01+this.e11*t.e11+this.e12*t.e21+this.e13*t.e31,this.e10*t.e02+this.e11*t.e12+this.e12*t.e22+this.e13*t.e32,this.e10*t.e03+this.e11*t.e13+this.e12*t.e23+this.e13*t.e33,this.e20*t.e00+this.e21*t.e10+this.e22*t.e20+this.e23*t.e30,this.e20*t.e01+this.e21*t.e11+this.e22*t.e21+this.e23*t.e31,this.e20*t.e02+this.e21*t.e12+this.e22*t.e22+this.e23*t.e32,this.e20*t.e03+this.e21*t.e13+this.e22*t.e23+this.e23*t.e33,this.e30*t.e00+this.e31*t.e10+this.e32*t.e20+this.e33*t.e30,this.e30*t.e01+this.e31*t.e11+this.e32*t.e21+this.e33*t.e31,this.e30*t.e02+this.e31*t.e12+this.e32*t.e22+this.e33*t.e32,this.e30*t.e03+this.e31*t.e13+this.e32*t.e23+this.e33*t.e33)}xform(t){return t.set(this.e00*t.x+this.e01*t.y+this.e02*t.z+this.e03*t.w,this.e10*t.x+this.e11*t.y+this.e12*t.z+this.e13*t.w,this.e20*t.x+this.e21*t.y+this.e22*t.z+this.e23*t.w,this.e30*t.x+this.e31*t.y+this.e22*t.z+this.e23*t.w)}inv(){let t=this.e20*this.e11-this.e10*this.e21,n=this.e20*this.e01-this.e00*this.e21,s=this.e00*this.e11-this.e10*this.e01,r=this.e22*this.e13-this.e12*this.e23,i=this.e22*this.e03-this.e02*this.e23,o=this.e02*this.e13-this.e12*this.e03,a=this.e00*this.e31-this.e01*this.e30,c=this.e10*this.e31-this.e11*this.e30,u=this.e20*this.e31-this.e21*this.e30,p=this.e02*this.e33-this.e03*this.e32,h=this.e12*this.e33-this.e13*this.e32,v=this.e22*this.e33-this.e23*this.e32,m=1/(n*h-t*p+s*v-r*a+i*c+o*u);return this.set((this.e11*v-this.e21*h-this.e31*r)*m,(this.e21*p-this.e01*v+this.e31*i)*m,(this.e01*h-this.e11*p+this.e31*o)*m,(this.e01*r-this.e11*i-this.e21*o)*m,(this.e20*h-this.e10*v+this.e30*r)*m,(this.e00*v-this.e20*p-this.e30*i)*m,(this.e10*p-this.e00*h-this.e30*o)*m,(this.e10*i-this.e00*r+this.e20*o)*m,(this.e13*u-this.e23*c-this.e33*t)*m,(this.e23*a-this.e03*u+this.e33*n)*m,(this.e03*c-this.e13*a+this.e33*s)*m,(this.e03*t-this.e13*n-this.e23*s)*m,(this.e22*c-this.e12*u+this.e32*t)*m,(this.e02*u-this.e22*a-this.e32*n)*m,(this.e12*a-this.e02*c-this.e32*s)*m,(this.e12*n-this.e02*t+this.e22*s)*m)}transpose(){return this.set(this.e00,this.e10,this.e20,this.e30,this.e01,this.e11,this.e21,this.e31,this.e02,this.e12,this.e22,this.e32,this.e03,this.e13,this.e23,this.e33)}static perspective(t,n,s,r,i=new J){let o=Math.tan(t*.5),a=r/(s-r);return i.set(1/(o*n),0,0,0,0,1/o,0,0,0,0,a,a*s,0,0,-1,0)}static ortho(t,n,s,r,i,o,a=new J){let c=2/(n-t),u=2/(r-s),p=1/(i-o);return a.set(c,0,0,-c*t-1,0,u,0,-u*s-1,0,0,p,p*i,0,0,0,1)}}class Xt{constructor(t=1,n=0,s=0,r=0,i=0,o=1,a=0,c=0,u=0,p=0,h=1,v=0){this.set(t,n,s,r,i,o,a,c,u,p,h,v)}new(){return new Xt(this.e00,this.e01,this.e02,this.tx,this.e10,this.e11,this.e12,this.ty,this.e20,this.e21,this.e22,this.tz)}id(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0)}set(t,n,s,r,i,o,a,c,u,p,h,v){return arguments.length===1?(this.e00=t.e00,this.e01=t.e01,this.e02=t.e02,this.tx=t.tx,this.e10=t.e10,this.e11=t.e11,this.e12=t.e12,this.ty=t.ty,this.e20=t.e20,this.e21=t.e21,this.e22=t.e22,this.tz=t.tz):(this.e00=t,this.e01=n,this.e02=s,this.tx=r,this.e10=i,this.e11=o,this.e12=a,this.ty=c,this.e20=u,this.e21=p,this.e22=h,this.tz=v),this}setPos(t){return this.tx=t.x,this.ty=t.y,this.tz=t.z,this}setRot(t){return this.e00=1-2*(t.y*t.y+t.z*t.z),this.e01=2*(t.x*t.y-t.z*t.w),this.e02=2*(t.x*t.z+t.y*t.w),this.e10=2*(t.x*t.y+t.z*t.w),this.e11=1-2*(t.x*t.x+t.z*t.z),this.e12=2*(t.y*t.z-t.x*t.w),this.e20=2*(t.x*t.z-t.y*t.w),this.e21=2*(t.y*t.z+t.x*t.w),this.e22=1-2*(t.x*t.x+t.y*t.y),this}setPosRot(t,n){return this.setPos(t),this.setRot(n),this}mul(t){return this.set(this.e00*t.e00+this.e01*t.e10+this.e02*t.e20,this.e00*t.e01+this.e01*t.e11+this.e02*t.e21,this.e00*t.e02+this.e01*t.e12+this.e02*t.e22,this.e00*t.tx+this.e01*t.ty+this.e02*t.tz+this.tx,this.e10*t.e00+this.e11*t.e10+this.e12*t.e20,this.e10*t.e01+this.e11*t.e11+this.e12*t.e21,this.e10*t.e02+this.e11*t.e12+this.e12*t.e22,this.e10*t.tx+this.e11*t.ty+this.e12*t.tz+this.ty,this.e20*t.e00+this.e21*t.e10+this.e22*t.e20,this.e20*t.e01+this.e21*t.e11+this.e22*t.e21,this.e20*t.e02+this.e21*t.e12+this.e22*t.e22,this.e20*t.tx+this.e21*t.ty+this.e22*t.tz+this.tz)}xformP(t){return t.set(this.e00*t.x+this.e01*t.y+this.e02*t.z+this.tx,this.e10*t.x+this.e11*t.y+this.e12*t.z+this.ty,this.e20*t.x+this.e21*t.y+this.e22*t.z+this.tz)}xformV(t){return t.set(this.e00*t.x+this.e01*t.y+this.e02*t.z,this.e10*t.x+this.e11*t.y+this.e12*t.z,this.e20*t.x+this.e21*t.y+this.e22*t.z)}inv(){let t=this.e10*this.e21-this.e20*this.e11,n=this.e20*this.e01-this.e00*this.e21,s=this.e00*this.e11-this.e10*this.e01,r=this.e22*this.ty-this.e12*this.tz,i=this.e22*this.tx-this.e02*this.tz,o=this.e02*this.ty-this.e12*this.tx,a=1/(this.e02*t+this.e12*n+this.e22*s);return this.set((this.e11*this.e22-this.e21*this.e12)*a,(this.e21*this.e02-this.e01*this.e22)*a,(this.e01*this.e12-this.e11*this.e02)*a,(this.e01*r-this.e11*i-this.e21*o)*a,(this.e20*this.e12-this.e10*this.e22)*a,(this.e00*this.e22-this.e20*this.e02)*a,(this.e10*this.e02-this.e00*this.e12)*a,(this.e10*i-this.e00*r+this.e20*o)*a,t*a,n*a,s*a,(-this.tx*t-this.ty*n-this.tz*s)*a)}}class et{constructor(t=0,n=0,s=0,r=1){this.set(t,n,s,r)}new(){return new et(this.x,this.y,this.z,this.w)}id(){return this.set(0,0,0,1)}set(t,n,s,r){return arguments.length===1?(this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w):(this.x=t,this.y=n,this.z=s,this.w=r),this}setEuler(t,n,s){let r=Math.cos(t*.5),i=Math.sin(t*.5),o=Math.cos(n*.5),a=Math.sin(n*.5),c=Math.cos(s*.5),u=Math.sin(s*.5);return this.x=i*o*c-r*a*u,this.y=r*a*c+i*o*u,this.z=r*o*u-i*a*c,this.w=r*o*c+i*a*u,this}mul(t){return t.isQuat?this.set(this.w*t.x+this.x*t.w+this.y*t.z-this.z*t.y,this.w*t.y-this.x*t.z+this.y*t.w+this.z*t.x,this.w*t.z+this.x*t.y-this.y*t.x+this.z*t.w,this.w*t.w-this.x*t.x-this.y*t.y-this.z*t.z):(this.x*=t,this.y*=t,this.z*=t,this.w*=t,this)}xform(t){let n=(this.y*t.z-this.z*t.y)*2,s=(this.z*t.x-this.x*t.z)*2,r=(this.x*t.y-this.y*t.x)*2;return t.set(t.x+this.y*r-this.z*s+this.w*n,t.y+this.z*n-this.x*r+this.w*s,t.z+this.x*s-this.y*n+this.w*r)}len(){return Math.sqrt(this.len2())}len2(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}normalize(){let t=this.len2();return t>0&&(t=1/Math.sqrt(t)),this.mul(t)}lerp(t,n){return this.x=D(this.x,t.x,n),this.y=D(this.y,t.y,n),this.z=D(this.z,t.z,n),this.w=D(this.w,t.w,n),this.normalize()}}et.prototype.isQuat=!0;let Un=console.log;function $n(e,t,...n){Gn(Un,e,t,...n)}function Ne(e){return e?`'${e.replace(/\n/g,"\\n")}'`:""}function Gn(e,t,n,...s){if(typeof t=="string"){_e(e,t,n,...s);return}const{src:r,positions:i}=jn(t,n);_e(e,r.text,i,...s)}function jn(e,t){const n=e.mapPositions(...[t].flat()),{src:s}=n[0];let r;return n[1]?.src?.path===s.path&&n[1]?.src?.text===s.text?r=n.map(i=>i.position):r=n[0].position,{src:s,positions:r}}function _e(e,t,n,...s){e(...s);const{line:r,lineNum:i,linePos:o,linePos2:a}=Vn(t,n);e(r,`  Ln ${i}`),e(Xn(o,a))}function Xn(e,t){const n=" ".repeat(e),s=t?t-e:1;return n+"^".repeat(s)}const we=new Map;function Vn(e,t){let n,s;typeof t=="number"?n=t:[n,s]=t;const r=Hn(e);let i=0,o=r.length-1;for(n>=r[o]&&(i=o);i+1<o;){const u=i+o>>1;n>=r[u]?i=u:o=u}let a;s!==void 0&&s>=r[i]&&s<r[o]&&(a=s-r[i]);const c=e.slice(r[i],r[i+1]||e.length);return{line:c.slice(-1)===`
`?c.slice(0,-1):c,linePos:n-r[i],linePos2:a,lineNum:i+1}}function Hn(e){const t=we.get(e);if(t)return t;const n=[...e.matchAll(/\n/g)].map(s=>s.index+1);return n.unshift(0),we.set(e,n),n}function qn(e){const t=e.checkpoint(),n=e.nextToken();return e.reset(t),n}function nt(e,t){return B(`token '${e}' ${Ne(t)}`,function(s){s.stream.checkpoint();const r=s.stream.nextToken();return r===null||r.kind!==e||r.text!==t?null:{value:r}})}function ht(e,t){return B(`tokenOf '${e}'`,function(s){s.stream.checkpoint();const r=s.stream.nextToken();return r===null||r.kind!==e||!t.includes(r.text)?null:{value:r}})}function Ae(e){return B(`tokenKind '${e}'`,function(n){n.stream.checkpoint();const s=n.stream.nextToken();return s===null||s.kind!==e?null:{value:s}})}function Vt(e){return B(`kind '${e}'`,function(n){n.stream.checkpoint();const s=n.stream.nextToken();return s===null||s.kind!==e?null:{value:s.text}})}function _t(e){return B(`${Ne(e)}`,function(n){n.stream.checkpoint();const s=n.stream.nextToken();return s===null||s.text!==e?null:{value:s.text}})}function l(...e){const t=e.map(y);return k("seq",function(s){const r=[];for(const i of t){const o=i._run(s);if(o===null)return null;r.push(o.value)}return{value:r}})}function Yn(e){const t=Object.entries(e).map(([n,s])=>[n,y(s)]);return k("seqObj",function(s){const r={};for(const[i,o]of t){const a=o._run(s);if(a===null)return null;r[i]=a.value}return{value:r}})}function Kn(e){return e.collect({before:rs,after:is})}function S(e,t){const n=y(e),s=y(t);return k("preceded",function(i){return n._run(i)===null?null:s._run(i)})}function Bt(e,t){const n=y(e),s=y(t);return k("terminated",function(i){const o=n._run(i);return o===null||s._run(i)===null?null:o})}function O(e,t,n){const s=y(e),r=y(t),i=y(n);return k("delimited",function(a){if(s._run(a)===null)return null;const c=r._run(a);return c===null||i._run(a)===null?null:c})}function Zn(e,t,n){const s=y(e),r=y(t),i=y(n);return k("terminated",function(a){const c=s._run(a);if(c===null||r._run(a)===null)return null;const u=i._run(a);return u===null?null:{value:[c.value,u.value]}})}function d(...e){const t=e.map(y);return k("or",function(s){const r=s.stream.checkpoint();for(const i of t){const o=i._run(s);if(o!==null)return o;s.stream.reset(r)}return null})}function x(e){const t=y(e);return k("opt",function(s){const r=s.stream.checkpoint(),i=t._run(s);return i===null?(s.stream.reset(r),{value:null}):i})}function Jn(e){const t=y(e);return k("not",function(s){const r=s.stream.checkpoint();return t._run(s)===null?(s.stream.reset(r),{value:!0}):null})}function E(e){return k("repeat",Qn(y(e)))}function A(e){const t=y(e);return l(t,E(t)).map(n=>[n[0],...n[1]]).setTraceName("repeatPlus")}function Qn(e,t=()=>!0){return function(s){const r=[];for(;;){const i=s.stream.checkpoint(),o=e._run(s);if(o===null)return s.stream.reset(i),{value:r};if(!t(o))return{value:r};r.push(o.value)}}}function wt(e){const t=y(e);return k("span",function(s){const r=qn(s.stream)?.span?.[0]??null,i=t._run(s);if(i===null)return null;const o=s.stream.checkpoint();return{value:{value:i.value,span:[r??o,o]}}})}function ts(){return B("eof",function(t){return t.stream.nextToken()!==null?null:{value:!0}})}function f(e,t){const n=y(e);return k("req",function(r){const i=r.stream.checkpoint(),o=n._run(r);if(o===null)throw new j(t,[i,r.stream.checkpoint()]);return o})}function st(){return B("yes",function(){return{value:null}})}function V(e,t,n={}){const{trailing:s=!0,requireOne:r=!1}=n,i=y(t),o=y(e);return k("withSep",function(c){const u=[],p=c.stream.checkpoint(),h=i._run(c);if(h===null)return c.stream.reset(p),r?null:{value:u};for(u.push(h.value);;){const v=c.stream.checkpoint();if(o._run(c)===null){c.stream.reset(v);break}const m=c.stream.checkpoint(),T=i._run(c);if(T===null){s?c.stream.reset(m):c.stream.reset(v);break}u.push(T.value)}return{value:u}})}function kt(e,t){return V(e,t,{requireOne:!0}).setTraceName("withSepPlus")}function Oe(e){return B("withStreamAction",function(n){const s=e(n.stream);return s===null?null:{value:s}})}function y(e){return typeof e=="string"?_t(e):e instanceof Kt?e:R(e)}function R(e){const t=new Kt({fn:function(s){const r=e();if(!e){const i=s.stream.checkpoint();throw new j("fn parser called before definition",[i,i])}return t.fn=r.fn,t._run(s)},traceName:"fn()",terminal:!1});return t}function es(e,t,n){const s=t?.after??t,r=t?.before;let i=s;n&&(i=a=>{const c=s(a);return c!=null&&qt(a.tags,n,c),c});const o=n?`${e.debugName}-${n}`:`${e.debugName}`;return k("collect",function(c){const u=c.stream.checkpoint();return r&&St(c,u,r,`${o}.before`),Ht(e,c,i,o)})}function b(e){const t=y(e);return k("tagScope",function(s){const r=s.stream.checkpoint();let i;return St(s,r,o=>{i=ns(o.tags),o.tags={}},`scope.before ${t.debugName}`),Ht(t,s,o=>{o.tags=i},"tagScope")})}function ns(e){const t=Object.entries(e).map(([n,s])=>[n,[...s]]);return Object.fromEntries(t)}function ss(e,t){return k("ctag",function(s){return Ht(e,s,r=>{const i=Yt(r._values);qt(r.tags,t,i.value)},`ctag ${t}`)})}function Ht(e,t,n,s=""){const r=t.stream.checkpoint(),i=e._run(t);return i&&St(t,r,n,s),i}function St(e,t,n,s){const r=ls(e.stream,t);e._collect.push({srcPosition:r,collectFn:n,debugName:s})}function rs(e){e._values.push({value:null,openArray:[]})}function is(e){const t=Yt(e._values);t.openArray===void 0&&console.log("---closeArray: no open array"),e._values.pop(),De(e,t.openArray)}function os(e,t){return k("ptag",function(s){const r=s.stream.checkpoint(),i=e._run(s);return i&&St(s,r,a=>qt(a.tags,t,i.value),`ptag ${t}`),i})}function qt(e,t,n){e[t]===void 0&&(e[t]=[]),e[t].push(n)}function as(e,t,n){const s={},{src:r}=n,i={tags:s,src:r,start:-1,end:-1,app:t,_values:[{value:null,openArray:void 0}]};e.forEach(o=>{const{collectFn:a,srcPosition:c}=o;i.start=c.start,i.end=c.end,De(i,a(i))})}function De(e,t){if(t!==void 0){const n=Yt(e._values);n||console.log("----saveCollectValue: no valueEntry"),n&&(n.value=t),n?.openArray!==void 0&&n.openArray.push(t)}}function Yt(e){return e[e.length-1]}function ls(e,t){const n=e.checkpoint();e.reset(t);const s=cs(e);return e.reset(n),{start:s,end:n}}function cs(e){const t=e.nextToken();return t===null||e.reset(t.span[0]),e.checkpoint()}var j=class extends Error{span;constructor(e,t){super(e),this.span=t}},Kt=class{_traceInfo;fn;constructor(e){this.fn=e.fn}_run(e){{const t=e.app.context,n=e._collect.length,s=this.fn(e);return s===null&&(e.app.context=t,e._collect.length=n),s}}ptag(e){return os(this,e)}ctag(e){return ss(this,e)}setTraceName(e){return this}setTrace(e={}){return this}map(e){return us(this,e)}collect(e,t){return es(this,e,t)}toParser(e){return fs(this,e)}parse(e){const{stream:t,appState:n={context:{},stable:[]}}=e,s=[],r=this._run({stream:t,app:n,_collect:s});return r&&as(s,n,t),r}get debugName(){return"parser"}};function k(e,t,n){return new Kt({fn:t,traceName:e,terminal:n})}function B(e,t){return k(e,t,!0)}function us(e,t){return k("map",function(s){const r=e._run(s);return r===null?null:{value:t(r.value)}})}function fs(e,t){return k("toParser",function(s){const r=e._run(s);if(r===null)return null;const i=t(r);return i===null?r:i._run(s)})}var ps=class Re{entries;dest;constructor(t,n=[]){this.dest=t,this.entries=n}addEntries(t){this.entries.push(...t)}mapPositions(...t){return t.map(n=>this.destToSrc(n))}compact(){if(!this.entries.length)return;let t=this.entries[0];const n=[t];for(let s=1;s<this.entries.length;s++){const r=this.entries[s];r.src.path===t.src.path&&r.src.text===t.src.text&&t.destEnd===r.destStart&&t.srcEnd===r.srcStart?(t.destEnd=r.destEnd,t.srcEnd=r.srcEnd):(n.push(r),t=r)}this.entries=n}sort(){this.entries.sort((t,n)=>t.destStart-n.destStart)}merge(t){if(t===this)return this;const n=t.entries.filter(o=>o.src.path===this.dest.path&&o.src.text===this.dest.text);if(n.length===0)return console.log("other source map does not link to this one"),t;ds(n);const s=n.map(o=>{const{src:a,position:c}=this.destToSrc(o.srcStart),{src:u,position:p}=this.destToSrc(o.srcEnd);if(u!==a)throw new Error("NYI, need to split");return{src:a,srcStart:c,srcEnd:p,destStart:o.destStart,destEnd:o.destEnd}}),r=t.entries.filter(o=>o.src.path!==this.dest.path||o.src.text!==this.dest.text),i=new Re(t.dest,[...r,...s]);return i.sort(),i}destToSrc(t){const n=this.entries.find(s=>s.destStart<=t&&s.destEnd>=t);return n?{src:n.src,position:n.srcStart+t-n.destStart}:{src:this.dest,position:t}}};function ds(e){e.sort((t,n)=>t.srcStart-n.srcStart)}var pt=class{#t=[];#e=0;#n=[];source;constructor(e){this.source=e}add(e,t,n){const s=this.#e;this.#e+=e.length;const r=this.#e;this.#t.push(e),this.#n.push({src:this.source,srcStart:t,srcEnd:n,destStart:s,destEnd:r})}appendNext(e){const t=this.#n.at(-1)?.destEnd??0;this.add(e,t,t+e.length)}addSynthetic(e,t,n,s){const r=this.#e;this.#e+=e.length;const i=this.#e;this.#t.push(e),this.#n.push({src:{text:t},srcStart:n,srcEnd:s,destStart:r,destEnd:i})}addNl(){const{srcStart:e,srcEnd:t}=this.#n.at(-1)??{srcStart:0,srcEnd:0};this.add(`
`,e,t)}addCopy(e,t){const n=this.source.text.slice(e,t);this.add(n,e,t)}static build(e){const t=new ps({text:e.map(n=>n.#t.join("")).join("")},e.flatMap(n=>n.#n));return t.compact(),t}},hs=class{cache=new ms(5);inner;constructor(e){this.inner=e}checkpoint(){return this.inner.checkpoint()}reset(e){this.inner.reset(e)}nextToken(){const e=this.checkpoint(),t=this.cache.get(e);if(t!==void 0)return this.reset(t.checkpoint),t.token;{const n=this.inner.nextToken(),s=this.checkpoint();return this.cache.set(e,{token:n,checkpoint:s}),n}}get src(){return this.inner.src}},ms=class extends Map{max;constructor(e){super(),this.max=e}set(e,t){if(this.size>this.max){const n=this.keys().next().value;n&&this.delete(n)}return super.set(e,t)}};function xs(e){const[t,n]=e;if(typeof n=="string"){const s=`(${Be(n)})`;return ke(t,new RegExp(s)),s}else return ke(t,n),`(${n.source})`}function ke(e,t){if(new RegExp("|"+t.source).exec("").length>1)throw new Error(`match expression groups must be non-capturing: ${e}: /${t.source}/. Use (?:...) instead.`)}const vs=/[$+*.?|(){}[\]\\/^]/g;function Be(e){return e.replace(vs,"\\$&")}function Et(e){const t=e.split(/\s+/).sort((n,s)=>s.length-n.length).filter(n=>n).map(Be);return new RegExp(t.join("|"))}var gs=class{position=0;text;matchers;constructor(e,t){this.text=e,this.matchers=t}checkpoint(){return this.position}reset(e){this.position=e}nextToken(){const e=this.matchers.execAt(this.text,this.position);return e===null?null:(this.position=e.span[1],e)}get src(){return this.text}},bs=class{groups;exp;constructor(e){this.groups=Object.keys(e);const t=Object.entries(e).map(xs).join("|");this.exp=new RegExp(t,"dyu")}execAt(e,t){this.exp.lastIndex=t;const n=ys(this.exp.exec(e)?.indices);if(n){const{span:s,groupDex:r}=n;return{kind:this.groups[r],span:s,text:e.slice(s[0],s[1])}}else return null}};function ys(e){if(e!==void 0)for(let t=1;t<e.length;t++){const n=e[t];if(n!==void 0)return{span:n,groupDex:t-1}}}function H(e){throw new _s("Unreachable value",{data:e})}var _s=class extends Error{data;constructor(e,t){super(e,t),this.data=t?.data}};function ws(e){return e[e.length-1]}function ks(e,t){const n=[];for(const s of e){const r=t(s);r&&n.push(r)}return n}function Ss(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>[n,t(s)]))}function zt(e,t){const n=Math.min(t.length,Math.max(0,e));let s=0,r=1;for(;;){const i=t.indexOf(`
`,s);if(i===-1||n<=i){const o=1+(n-s);return[r,o]}else s=i+1,r+=1}}function Le(e,t){let n=e.lastIndexOf(`
`,t[0]);n===-1&&(n=0);let s=e.indexOf(`
`,t[0]);s===-1&&(s=e.length);const r=t[1]-t[0],i=Math.max(1,r),o=t[0]-n;return[e.slice(n,s)," ".repeat(o)+"^".repeat(i)]}const Fe={};"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").forEach((e,t)=>{Fe[t]=e});function Se(e){if(typeof e=="number")return Ee(e);let t="";for(let n=0;n<e.length;n+=1)t+=Ee(e[n]);return t}function Ee(e){let t="",n;e<0?n=-e<<1|1:n=e<<1;do{let s=n&31;n>>>=5,n>0&&(s|=32),t+=Fe[s]}while(n>0);return t}function We(e){const{url:t,text:n,lineNumber:s,lineColumn:r,length:i,error:o}=e,a=Se([0,0,Math.max(0,s-1),Math.max(0,r-1)])+","+Se([18,0,Math.max(0,s-1),Math.max(0,r-1)+i]),c={version:3,file:null,sources:[t],sourcesContent:[n??null],names:[],mappings:a};let u=`throw new Error(${JSON.stringify(o.message+"")})`;u+=`
//# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u+=`
//# sourceURL=`+c.sources[0];let p=0;"stackTraceLimit"in Error&&(p=Error.stackTraceLimit,Error.stackTraceLimit=1);try{(0,eval)(u)}catch(h){throw"stackTraceLimit"in Error&&(Error.stackTraceLimit=p),o.message="",h}}function Ue(e,t){const{refIdentElem:n,originalName:s}=e,r=t??`'${s}'`;if(n)$e(n,r);else throw new Error(r)}function $e(e,t=""){const{srcModule:n,start:s,end:r}=e,{debugFilePath:i,src:o}=n,a=`${t} in file: ${i}`;$n(o,[s,r],a);const[c,u]=zt(s,o);We({url:i,text:o,lineNumber:c,lineColumn:u,length:r-s,error:new Error(a)})}function Es(e,t){return L(e.param.expression,t)}function zs(e,t){return L(e.param.expression,t)}function L(e,t){const{kind:n}=e;if(n==="unary-expression")return e.operator.value,!L(e.expression,t);if(n==="binary-expression"){const s=e.operator.value,r=L(e.left,t);if(s==="||")return r||L(e.right,t);if(s==="&&")return r&&L(e.right,t);H(s)}else if(n==="literal"){const{value:s}=e;return s==="true"}else{if(n==="parenthesized-expression")return L(e.expression,t);if(n==="translate-time-feature")return t[e.name]??!1;throw new Error(`unexpected @if expression ${JSON.stringify(e)}`)}}function q(e,t){let n=!1;return e.flatMap(s=>{const r=s.attributes,{valid:i,nextElseState:o}=Ts(r,n,t);return n=o,i?[s]:[]})}function mt(e,t,n){if(!e)return{valid:!0,nextElseState:t};if(e.kind==="@if"){const s=Es(e,n);return{valid:s,nextElseState:!s}}else if(e.kind==="@elif"){if(!t)return{valid:!1,nextElseState:!1};const s=zs(e,n);return{valid:s,nextElseState:!s}}else return{valid:t,nextElseState:!1}}function Ts(e,t,n){return mt(xt(e),t,n)}function xt(e){if(e)for(const t of e){const n=t.attribute.kind;if(n==="@if"||n==="@elif"||n==="@else")return t.attribute}}function Lt(e,t){t&&(e.kind,t.kind,e.parent,t.parent,t.condAttribute,e.contents=e.contents.concat(t.contents))}function Ms(){Ge=0,je=0}let Ge=0,je=0;function Zt(){return je++}function Xe(e,t="scope"){return{id:Ge++,kind:t,parent:e,contents:[]}}function Ot(e){const{srcBuilder:t,rootElems:n,conditions:s}=e,{extracting:r=!0,skipConditionalFiltering:i=!1}=e,o={conditions:s,srcBuilder:t,extracting:r};(i?n:q(n,s)).forEach(a=>{Jt(a,o)})}function Jt(e,t){switch(e.kind){case"import":return;case"text":Ps(e,t);return;case"name":Is(e,t);return;case"synthetic":Os(e,t);return;case"ref":Ds(e,t);return;case"decl":Qt(e,t);return;case"param":case"var":case"typeDecl":case"let":case"module":case"member":case"memberRef":case"expression":case"type":case"statement":case"stuff":case"switch-clause":rt(e,t);return;case"override":case"const":case"assert":case"alias":case"gvar":Dt(t),rt(e,t);return;case"fn":Dt(t),Cs(e,t);return;case"struct":Dt(t),Ns(e,t);return;case"attribute":Ve(e,t);return;case"directive":Rs(e,t);return;default:H(e)}}function Dt(e){e.extracting&&(e.srcBuilder.addNl(),e.srcBuilder.addNl())}function Ps(e,t){t.srcBuilder.addCopy(e.start,e.end)}function Is(e,t){t.srcBuilder.add(e.name,e.start,e.end)}function Cs(e,t){const{attributes:n,name:s,params:r,returnAttributes:i,returnType:o,body:a}=e,{conditions:c,srcBuilder:u}=t;ze(n,t),u.add("fn ",s.start-3,s.start),Qt(s,t),u.appendNext("(");const p=q(r,c);p.forEach((h,v)=>{Ft(h,t),v<p.length-1&&u.appendNext(", ")}),u.appendNext(") "),o&&(u.appendNext("-> "),ze(i,t),rt(o,t),u.appendNext(" ")),rt(a,t)}function ze(e,t){e?.forEach(n=>{Ve(n,t),t.srcBuilder.add(" ",n.start,n.end)})}function Ns(e,t){const{name:n,members:s,start:r,end:i}=e,{srcBuilder:o,conditions:a}=t,c=q(s,a),u=c.length;if(u===0){As(e);return}o.add("struct ",r,n.start),Qt(n,t),u===1?(o.add(" { ",n.end,s[0].start),Ft(c[0],t),o.add(` }
`,i-1,i)):(o.add(` {
`,n.end,s[0].start),c.forEach(p=>{o.add("  ",p.start-1,p.start),Ft(p,t),o.add(",",p.end,p.end+1),o.addNl()}),o.add(`}
`,i-1,i))}function As(e){const{name:t,members:n}=e,s=n.length?"(with current conditions)":"";$e(t,`struct '${t.ident.originalName}' has no members ${s}`)}function Os(e,t){const{text:n}=e;t.srcBuilder.addSynthetic(n,n,0,n.length)}function rt(e,t){q(e.contents,t.conditions).forEach(n=>{Jt(n,t)})}function Ft(e,t){q(e.contents,t.conditions).forEach(n=>{if(n.kind==="text"){const{srcModule:s,start:r,end:i}=n;if(s.src.slice(r,i).trim()==="")return}Jt(n,t)})}function Ds(e,t){if(e.ident.std)t.srcBuilder.add(e.ident.originalName,e.start,e.end);else{const n=qe(Bs(e.ident));t.srcBuilder.add(n,e.start,e.end)}}function Qt(e,t){const n=qe(e.ident);t.srcBuilder.add(n,e.start,e.end)}function Ve(e,t){const{kind:n}=e.attribute;if(n==="@attribute"){const{params:s}=e.attribute;if(!s||s.length===0)t.srcBuilder.add("@"+e.attribute.name,e.start,e.end);else{t.srcBuilder.add("@"+e.attribute.name+"(",e.start,s[0].start);for(let r=0;r<s.length;r++)rt(s[r],t),r<s.length-1&&t.srcBuilder.add(",",s[r].end,s[r+1].start);t.srcBuilder.add(")",s[s.length-1].end,e.end)}}else n==="@builtin"?t.srcBuilder.add("@builtin("+e.attribute.param.name+")",e.start,e.end):n==="@diagnostic"?t.srcBuilder.add("@diagnostic"+He(e.attribute.severity,e.attribute.rule),e.start,e.end):n==="@if"||(n==="@interpolate"?t.srcBuilder.add(`@interpolate(${e.attribute.params.map(s=>s.name).join(", ")})`,e.start,e.end):n==="@elif"||n==="@else"||H(n))}function He(e,t){const n=t[0].name+(t[1]!==null?"."+t[1].name:"");return`(${e.name}, ${n})`}function Rs(e,t){const{directive:n}=e,{kind:s}=n;s==="diagnostic"?t.srcBuilder.add(`diagnostic${He(n.severity,n.rule)};`,e.start,e.end):s==="enable"?t.srcBuilder.add(`enable ${n.extensions.map(r=>r.name).join(", ")};`,e.start,e.end):s==="requires"?t.srcBuilder.add(`requires ${n.extensions.map(r=>r.name).join(", ")};`,e.start,e.end):H(s)}function qe(e){return ue(e)?(e.mangledName,`${te(e)}`,e.mangledName):e.mangledName||e.originalName}function Bs(e){let t=e;do{if(t.kind==="decl")return t;t=t.refersTo}while(t);throw new Error(`unresolved identifer: ${e.originalName}`)}function te(e){if(!e)return JSON.stringify(e);const{kind:t,originalName:n}=e,s=e.id?`#${e.id}`:"";if(t==="ref")return`${n} ${s} -> ${te(e.refersTo)}`;{const{mangledName:r}=e;return`%${n}${r?`(${r})`:""} ${s} `}}function Ye(e=null){return{decls:new Map,parent:e}}function Ls(e,t,n,s){return Fs(n,s)}function Fs(e,t){let n=e,s=0;for(;t.has(n);)n=e+s++;return n}function Ws(e){return t([],[],e.segments,e.finalSegment);function t(n,s,r,i){if(r.length>0){const[o,...a]=r;return t([...n,o.name],[...s,o.name],a,i)}else{if(i.kind==="import-collection")return i.subtrees.flatMap(o=>t(n,s,o.segments,o.finalSegment));if(i.kind==="import-item")return[{importPath:[...n,i.as??i.name],modulePath:[...s,i.name]}];H(i)}}}var Us=Gs(e=>" ".repeat(e)),$s=20;""+Us($s+3);function Gs(e){const t=new Map;return function(...n){const s=JSON.stringify(n);if(t.has(s))return t.get(s);{const r=e(...n);return t.set(s,r),r}}}typeof DOMRect>"u"&&(globalThis.DOMRect=function(){});function js(e){const t=e.tags.owo?.[0];for(const n of t)e.app.stable.imports.push(n.imports),Y(e,n)}function Y(e,t){const{openElems:n}=e.app.context;n?.length&&n[n.length-1].contents.push(t)}function at(e){const{src:t,start:n,end:s}=e,{srcModule:r}=e.app.stable,i=t.slice(n,s),o="ref",a={kind:o,originalName:i,ast:e.app.stable,id:Zt(),refIdentElem:null},c={kind:o,start:n,end:s,srcModule:r,ident:a};return a.refIdentElem=c,Je(e,c),Y(e,c),c}function Ke(e){return Ze(e,!1)}function Tt(e){return Ze(e,!0)}function Ze(e,t){const{src:n,start:s,end:r}=e,i=e.app,{scope:o}=i.context,{srcModule:a}=i.stable,c=n.slice(s,r),u="decl",p={kind:u,start:s,end:r,srcModule:a,ident:{declElem:null,kind:u,originalName:c,containingScope:o,isGlobal:t,id:Zt(),srcModule:a}};return Je(e,p),Y(e,p),p}const ee=z("typeDecl",(e,t)=>{const n=e.tags.decl_elem?.[0],s=e.tags.typeRefElem?.[0],r=e.tags.decl_type?.[0];return N({...t,decl:n,typeScope:r,typeRef:s},e)});function Je(e,t){const{ident:n}=t;n.id=Zt(),e.app.context.scope.contents.push(n)}function Qe(e){tn("scope",e)}function Xs(e){tn("partial",e)}function tn(e,t){const{scope:n}=t.app.context,s=Xe(n,e);n.contents.push(s),t.app.context.scope=s}function en(e){return nn(e,!0)}function Vs(e){return nn(e,!1)}function nn(e,t){const n=e.app.context,s=n.scope,{parent:r}=s;return r&&(n.scope=r),t&&(s.condAttribute=Hs(e,s)),s}function Hs(e,t){if(t.kind==="partial"&&e.tags.fn_name!==void 0){const s=e.tags.fn_attributes?.flat?.();return xt(s)}const n=e.tags.attribute;return xt(n)}function vt(e){return z(e,(t,n)=>{const s=t.tags.var_name?.[0],r=t.tags.decl_scope?.[0],i=t.tags.attribute,o=N({...n,name:s,attributes:i},t),a=s.decl.ident;return a.declElem=o,s.typeScope?(Lt(s.typeScope,r),a.dependentScope=s.typeScope):a.dependentScope=r,o})}const qs=z("alias",(e,t)=>{const n=e.tags.alias_name?.[0],s=e.tags.alias_scope?.[0],r=e.tags.typeRefElem?.[0],i=e.tags.attributes?.flat()??[],o=N({...t,name:n,attributes:i,typeRef:r},e);return n.ident.dependentScope=s,n.ident.declElem=o,o}),Ys=z("fn",(e,t)=>{const n=Ks(e),{name:s,headerScope:r,returnScope:i,bodyScope:o,body:a,params:c}=n,{attributes:u,returnAttributes:p,returnType:h,fnScope:v}=n,m={...t,name:s,attributes:u,params:c,returnAttributes:p,body:a,returnType:h},T=r;i&&Lt(T,i),Lt(T,o);const g=[];for(const M of v.contents)M===r||M===i||(M===o?g.push(T):g.push(M));return v.contents=g,s.ident.declElem=m,s.ident.dependentScope=T,m});function Ks(e){const{fn_attributes:t,fn_name:n,fn_param:s,return_attributes:r}=e.tags,{return_type:i}=e.tags,{header_scope:o,return_scope:a,body_scope:c,body_statement:u}=e.tags,{fn_partial_scope:p}=e.tags;return{name:n?.[0],headerScope:o?.[0],returnScope:a?.[0],bodyScope:c?.[0],body:u?.[0],params:s?.flat(3)??[],attributes:t?.flat(),returnAttributes:r?.flat(),returnType:i?.flat(3)[0],fnScope:p?.[0]}}const Zs=z("param",(e,t)=>{const n=e.tags.param_name?.[0],s=e.tags.attributes?.flat()??[],r=N({...t,name:n,attributes:s},e);return n.decl.ident.declElem=r,r}),Js=z("struct",(e,t)=>{const n=e.tags.type_name?.[0],s=e.tags.members,r=e.tags.attributes?.flat()??[];n.ident.dependentScope=e.tags.struct_scope?.[0];const i=N({...t,name:n,attributes:r,members:s},e);return n.ident.declElem=i,i}),Qs=z("member",(e,t)=>{const n=e.tags.nameElem?.[0],s=e.tags.typeRefElem?.[0],r=e.tags.attribute?.flat(3);return N({...t,name:n,attributes:r,typeRef:s},e)}),Mt=z("attribute",(e,t)=>{const n=e.tags.attr_variant?.[0];return{...t,attribute:n}}),tr=ne("assert"),it=ne("statement"),er=ne("switch-clause");function ne(e){return z(e,(t,n)=>{const s=t.tags.attribute?.flat(3);return N({...n,attributes:s},t)})}const nr=z("attribute",(e,t)=>{const n=e.tags.attrParam,s={kind:"@attribute",name:e.tags.name?.[0],params:n};return{...t,attribute:s}}),sr=z("type",(e,t)=>{const n=e.tags.templateParam?.flat(3),s=e.tags.typeRefName?.[0],r=typeof s=="string"?s:s.ident;return N({...t,name:r,templateParams:n},e)}),sn=z("expression",(e,t)=>N({...t},e));function rr(e){const t=e.tags.const_assert?.flat()[0],n=e.app.stable;n.moduleAsserts||(n.moduleAsserts=[]),n.moduleAsserts.push(t)}const ir=z("stuff",(e,t)=>N({...t},e)),or=z("memberRef",(e,t)=>{const{component:n,structRef:s,extra_components:r}=e.tags,i=n?.[0],o=s?.flat()[0],a=r?.flat()[0];return N({...t,name:o,member:i,extraComponents:a},e)});function rn(e){const{start:t,end:n,src:s}=e,r={kind:"name",start:t,end:n,name:s.slice(t,n)};return Y(e,r),r}const ar=z("module",(e,t)=>{const n=N(t,{...e,start:0,end:e.src.length}),s=e.app.stable;return s.moduleElem=n,n});function lr(e){const{start:t,end:n}=e,s=e.tags.directive?.flat()[0],r={kind:"directive",attributes:e.tags.attribute?.flat(),start:t,end:n,directive:s};return Y(e,r),r}const X={before:Qe,after:en},F={before:Qe,after:Vs},Pt={before:Xs,after:en};function z(e,t){return{before:n=>{const s={kind:e,contents:[]};n.app.context.openElems.push(s)},after:n=>{const s=n.app.context.openElems.pop();console.assert(s&&s.kind===e);const r=t(n,{...s,start:n.start,end:n.end});return r&&Y(n,r),r}}}function N(e,t){const n=cr(t,e);return{...e,contents:n}}function cr(e,t){let{start:n}=e;const s=e.app.stable,{contents:r,end:i}=t,o=r.sort((u,p)=>u.start-p.start),a=[];for(const u of o)n<u.start&&a.push(c(u.start)),a.push(u),n=u.end;return n<i&&a.push(c(i)),a;function c(u){return{kind:"text",start:n,end:u,srcModule:s.srcModule}}}const ur=`alias break case const const_assert continue continuing 
  default diagnostic discard else enable false fn for if 
  let loop override requires return struct switch true var while`.split(/\s+/),fr=`NULL Self abstract active alignas alignof as asm asm_fragment async attribute auto await 
  become binding_array cast catch class co_await co_return co_yield coherent column_major 
  common compile compile_fragment concept const_cast consteval constexpr constinit crate 
  debugger decltype delete demote demote_to_helper do dynamic_cast 
  enum explicit export extends extern external fallthrough filter final finally friend from fxgroup 
  get goto groupshared highp impl implements import inline instanceof interface layout lowp 
  macro macro_rules match mediump meta mod module move mut mutable 
  namespace new nil noexcept noinline nointerpolation non_coherent noncoherent noperspective null nullptr 
  of operator package packoffset partition pass patch pixelfragment precise precision premerge 
  priv protected pub public readonly ref regardless register reinterpret_cast require resource restrict 
  self set shared sizeof smooth snorm static static_assert static_cast std subroutine super 
  target template this thread_local throw trait try type typedef typeid typename typeof 
  union unless unorm unsafe unsized use using varying virtual volatile wgsl where with writeonly yield`.split(/\s+/),pr=/[ \t\n\v\f\r\u{0085}\u{200E}\u{200F}\u{2028}\u{2029}]+/u,dr="& && -> @ / ! [ ] { } :: : , == = != >>= >> >= > <<= << <= < % - -- . + ++ | || ( ) ; * ~ ^ // /* */ += -= *= /= %= &= |= ^= _",hr=/(?:(?:[_\p{XID_Start}][\p{XID_Continue}]+)|(?:[\p{XID_Start}]))/u,mr=new Set(ur.concat(fr)),xr=new bs({word:hr,number:new RegExp(/(?:0[fh])|(?:[1-9][0-9]*[fh])/.source+/|(?:[0-9]*\.[0-9]+(?:[eE][+-]?[0-9]+)?[fh]?)/.source+/|(?:[0-9]+\.[0-9]*(?:[eE][+-]?[0-9]+)?[fh]?)/.source+/|(?:[0-9]+[eE][+-]?[0-9]+[fh]?)/.source+/|(?:0[xX][0-9a-fA-F]*\.[0-9a-fA-F]+(?:[pP][+-]?[0-9]+[fh]?)?)/.source+/|(?:0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*(?:[pP][+-]?[0-9]+[fh]?)?)/.source+/|(?:0[xX][0-9a-fA-F]+[pP][+-]?[0-9]+[fh]?)/.source+/|(?:0[xX][0-9a-fA-F]+[iu]?)/.source+/|(?:0[iu]?)|(?:[1-9][0-9]*[iu]?)/.source),blankspaces:pr,commentStart:/\/\/|\/\*/,symbol:Et(dr),invalid:/[^]/});var vr=class{stream;eolPattern=/[\n\v\f\u{0085}\u{2028}\u{2029}]|\r\n?/gu;blockCommentPattern=/\/\*|\*\//g;src;constructor(e){this.src=e,this.stream=new hs(new gs(e,xr))}checkpoint(){return this.stream.checkpoint()}reset(e){this.stream.reset(e)}nextToken(){for(;;){const e=this.stream.nextToken();if(e===null)return null;const t=e.kind;if(t!=="blankspaces")if(t==="commentStart")e.text==="//"?this.stream.reset(this.skipToEol(e.span[1])):this.stream.reset(this.skipBlockComment(e.span[1]));else if(t==="word"){const n=e;return mr.has(e.text)&&(n.kind="keyword"),n}else{if(t==="invalid")throw new j("Invalid token "+e.text,e.span);return e}}}skipToEol(e){return this.eolPattern.lastIndex=e,this.eolPattern.exec(this.src)===null?this.src.length:this.eolPattern.lastIndex}skipBlockComment(e){let t=e;for(;;){this.blockCommentPattern.lastIndex=t;const n=this.blockCommentPattern.exec(this.src);if(n===null)throw new j("Unclosed block comment!",[t,t]);if(n[0]==="*/")return this.blockCommentPattern.lastIndex;if(n[0]==="/*")t=this.skipBlockComment(this.blockCommentPattern.lastIndex);else throw new Error("Unreachable, invalid block comment pattern")}}nextTemplateStartToken(){const e=this.stream.checkpoint(),t=this.nextToken();return this.stream.reset(e),t===null||t.kind!=="symbol"?null:t.text==="<"?this.isTemplateStart(t.span[1])?(this.stream.reset(t.span[1]),t):(this.stream.reset(e),null):null}nextTemplateEndToken(){const e=this.stream.checkpoint(),t=this.nextToken();if(this.stream.reset(e),t===null)return null;if(t.kind==="symbol"&&t.text[0]===">"){const n=t.span[0];return this.stream.reset(n+1),{kind:"symbol",span:[n,n+1],text:">"}}else return null}isTemplateStart(e){this.stream.reset(e);let t=1;for(;;){const n=this.stream.nextToken();if(n===null)return!1;if(n.kind==="symbol"){if(n.text==="<")t+=1;else if(n.text[0]===">"){if(n.text===">"||n.text===">=")t-=1;else if(n.text===">>="||n.text===">>")t-=2;else throw new Error("This case should never be reached, looks like we forgot one of the tokens that start with >");if(t<=0)return!0}else if(n.text==="(")this.skipBracketsTo(")");else if(n.text==="[")this.skipBracketsTo("]");else if(n.text==="=="||n.text==="!="||n.text===";"||n.text==="{"||n.text===":"||n.text==="&&"||n.text==="||")return!1}}}skipBracketsTo(e){for(;;){const t=this.stream.nextToken();if(t===null){const n=this.stream.checkpoint();throw new j("Unclosed bracket!",[n,n])}if(t.kind==="symbol"){if(t.text==="(")this.skipBracketsTo(")");else if(t.text==="[")this.skipBracketsTo("]");else if(t.text===e)return}}}};const on=Oe(e=>e.nextTemplateStartToken()),an=Oe(e=>e.nextTemplateEndToken()),gr=d(ht("keyword",["true","false"]).map(Er),O(nt("symbol","("),R(()=>se),nt("symbol",")")).map(Tr),Ae("word").map(zr)),dt=d(l(nt("symbol","!").map(Mr),R(()=>dt)).map(Pr),gr),se=l(dt,d(A(l(nt("symbol","||").map(Te),f(dt,"invalid expression, expected expression"))),A(l(nt("symbol","&&").map(Te),f(dt,"invalid expression, expected expression"))),st().map(()=>[]))).map(Ir),ln=S(l("@","if"),wt(O("(",R(()=>se),l(x(","),")"))).map(fn)).map(wr).ptag("attr_variant"),cn=S(l("@","elif"),wt(O("(",R(()=>se),l(x(","),")"))).map(fn)).map(kr).ptag("attr_variant"),un=S(l("@","else"),st).map(Sr).ptag("attr_variant"),br=b(ln.collect(Mt)),yr=b(cn.collect(Mt)),_r=b(un.collect(Mt));function wr(e){return{kind:"@if",param:e}}function kr(e){return{kind:"@elif",param:e}}function Sr(){return{kind:"@else"}}function fn(e){return{kind:"translate-time-expression",expression:e.value,span:e.span}}function Er(e){return{kind:"literal",value:e.text,span:e.span}}function zr(e){return{kind:"translate-time-feature",name:e.text,span:e.span}}function Tr(e){return{kind:"parenthesized-expression",expression:e}}function Mr(e){return{value:e.text,span:e.span}}function Te(e){return{value:e.text,span:e.span}}function Pr([e,t]){return{kind:"unary-expression",operator:e,expression:t}}function Ir([e,t]){let n=e;for(const[s,r]of t)n={kind:"binary-expression",operator:s,left:n,right:r};return n}const I=Vt("word"),pn=Vt("keyword"),lt=kt("::",d(I,pn,"package","super")),Cr=Vt("number");function Wt(e,t){return{kind:"import-statement",segments:e,finalSegment:t}}function gt(e){return{kind:"import-segment",name:e}}function Nr(e){return{kind:"import-collection",subtrees:e}}function Me(e,t){return{kind:"import-item",name:e,as:t}}function dn(e,t){return t.segments=e.concat(t.segments),t}let re=null;const ie=l(S(Jn(d("super","package","import","as")),d(I,pn)),d(S("::",f(d(R(()=>re),R(()=>ie)),"invalid import, expected '{' or name")),S("as",f(I,"invalid alias, expected name")).map(e=>Me("",e)),st().map(()=>Me("")))).map(([e,t])=>{if(t.kind==="import-collection")return Wt([gt(e)],t);if(t.kind==="import-statement")return dn([gt(e)],t);if(t.kind==="import-item")return t.name=e,Wt([],t);H(t)});re=O("{",kt(",",()=>ie).map(Nr),f("}","invalid import collection, expected }"));const Ar=d(Bt("package",f("::","invalid import, expected '::'")).map(e=>[gt(e)]),A(Bt("super",f("::","invalid import, expected '::'")).map(gt))),Or=O("import",Yn({relative:x(Ar),collection_or_statement:f(d(re,ie),"invalid import, expected { or name")}).map(({relative:e,collection_or_statement:t})=>t.kind==="import-statement"?dn(e??[],t):Wt(e??[],t)),f(";","invalid import, expected ';'"));function Dr(e){return e.map(t=>({kind:"attribute",attribute:t,contents:[],start:0,end:0}))}const Rr=wt(l(E(d(ln,cn,un)),Or)).map(({value:[e,t],span:n})=>{const s={kind:"import",imports:t,start:n[0],end:n[1]};return e.length>0?{...s,attributes:Dr(e)}:s}),Br=b(E(Rr).ptag("owo").collect(js)),oe=x(l(on,kt(",",()=>Yr),f(an,"invalid template, expected '>'"))),Lr=d("private","workgroup","uniform","function"),Fr=l("storage",x(l(",",d("read","read_write")))),hn=x(l(on,d(Fr,Lr),f(an,"invalid template, expected '>'"))),Wr=l(lt.collect(at),oe),Ur=d("true","false",Cr),$r=l("(",()=>_,f(")","invalid expression, expected ')'")),Gr=d(Ur,$r,l(Wr,x(R(()=>vn)))),bt=A(d(S(".",I),Kn(O("[",()=>_,f("]","invalid expression, expected ']'"))))),mn=b(l(lt.collect(at,"structRef"),l(".",I.collect(rn,"component")),x(bt.collect(ir,"extra_components"))).collect(or)),P=d(l(ht("symbol",["!","&","*","-","~"]),()=>P),d(mn,l(Gr,x(bt)))),jr=d(A(l("&",P)),A(l("^",P)),A(l("|",P))),Pe=d("%","*","/"),Xr=d("+","-"),Ie=e=>{const t=l("<<",P),n=l(">>",P),s=l(E(l(Pe,P)),E(l(Xr,P,E(l(Pe,P)))));return e?d(t,s):d(t,n,s)},Rt=e=>l(Ie(e),x(l(e?ht("symbol",["<","<=","!=","=="]):ht("symbol",[">",">=","<","<=","!=","=="]),P,Ie(e)))),xn=e=>l(P,d(jr,l(Rt(e),e?st():d(A(l("||",l(P,Rt(!1)))),A(l("&&",l(P,Rt(!1)))),st().map(()=>[]))))),Vr=!1,_=xn(Vr),Hr=xn(!0),qr=l(lt.collect(at,"typeRefName"),()=>oe).collect(sr),U=b(qr).ctag("typeRefElem"),Yr=d(U.ctag("templateParam"),Hr.collect(sn,"templateParam")),vn=l("(",V(",",_),f(")","invalid fn arguments, expected ')'")),ot=Ae("word").map(Ni),Kr=l(ot,x(S(".",f(ot,"invalid diagnostic rule name, expected name")))),gn=O("(",f(Zn(ot,",",Kr),"invalid diagnostic control, expected rule name"),l(x(","),f(")","invalid diagnostic control, expected ')'"))),Ut=V(",",ot,{requireOne:!0}),bn=b(S("@",d(d("compute","const","fragment","invariant","must_use","vertex").map(e=>Mi([e,[]])),S("interpolate",f(O("(",Ut,")"),"invalid @interpolate, expected '('")).map(Pi),S("builtin",f(O("(",ot,")"),"invalid @builtin, expected '('")).map(Ii),S("diagnostic",f(gn,"invalid @diagnostic, expected '('")).map(Ci)).ptag("attr_variant")).collect(Mt)),yn=b(S("@",d(l(d("workgroup_size","align","binding","blend_src","group","id","location","size").ptag("name"),f(()=>Ce,"invalid attribute, expected '('")),l(I.ptag("name"),x(()=>Ce)))).collect(nr)),Ce=O("(",V(",",wt(R(()=>_)).collect(sn,"attrParam")),f(")","invalid attribute arguments, expected ')'")),Zr=d(bn,yn).ctag("attribute"),Jr=d(br,yr,_r,bn,yn).ctag("attribute"),w=E(Jr),$t=E(Zr),Qr=f(I.collect(Tt,"type_name"),"invalid type name, expected a name"),ti=f(I.collect(Tt,"fn_name"),"missing fn name"),ei=b(l(I.collect(Ke,"decl_elem"),x(l(":",U))).collect(ee)).ctag("var_name"),Gt=f(ei,"invalid ident"),jt=b(f(l(I.collect(Tt,"decl_elem"),x(l(":",U.collect(F,"decl_type")))).collect(ee),"expected identifier")).ctag("var_name"),ni=b(l(w,I.collect(rn,"nameElem"),f(":","invalid struct member, expected ':'"),f(U,"invalid struct member, expected type specifier")).collect(Qs)).ctag("members"),si=l(w.collect(e=>e.tags.attribute,"attributes"),"struct",f(Qr,"invalid struct, expected name"),l(f("{","invalid struct, expected '{'"),kt(",",ni),f("}","invalid struct, expected '}'")).collect(X,"struct_scope")).collect(Js),ae=l(lt.collect(at),()=>oe,vn),ri=b(l(w.collect(e=>e.tags.attribute,"attributes"),I.collect(Ke,"decl_elem"),x(l(":",f(U,"invalid fn parameter, expected type specifier"))).collect(ee,"param_name")).collect(Zs)).ctag("fn_param"),ii=l("(",V(",",ri),")"),oi=l("var",()=>hn,Gt,x(l("=",()=>_))).collect(vt("var")),ai=l(w,"var",()=>hn,jt,x(l("=",()=>_.collect(F,"decl_scope"))),";").collect(vt("gvar")).collect(Pt),_n=l(w,_t("{"),E(()=>yt),f("}","invalid block, expected }")).collect(it),W=b(l(w,l(_t("{"),E(()=>yt),f("}","invalid block, expected '}'")).collect(X)).collect(it)),li=l(w,d(ae,()=>kn,()=>le)),ci=l(w,d(ae,()=>le)),ui=l("for",l(f("(","invalid for loop, expected '('"),x(li),f(";","invalid for loop, expected ';'"),x(_),f(";","invalid for loop, expected ';'"),x(ci),f(")","invalid for loop, expected ')'"),_n).collect(X)),fi=l("if",f(l(_,W),"invalid if statement"),E(l("else","if",f(l(_,W),"invalid else if branch"))),x(l("else",f(W,"invalid else branch, expected '{'")))),pi=l("loop",$t,f(l("{",E(()=>yt),x(b(l(w,"continuing",$t,"{",E(()=>yt),b(x(l(w,l("break","if",_,";")).collect(it))),"}").collect(it).collect(X))),"}"),"invalid loop statement")).collect(X),di=d("default",_),hi=b(l(w,d(l("case",V(",",di,{requireOne:!0}),x(":"),W),l("default",x(":"),W)).collect(er))),mi=l(w,"{",A(hi),"}"),xi=l("switch",_,mi),vi=l("while",_,W),wn=d(ui,fi,pi,xi,vi,l("break",";"),l("continue",f(";","invalid statement, expected ';'")),l(";"),()=>Sn,l("discard",f(";","invalid statement, expected ';'")),l("return",x(_),f(";","invalid statement, expected ';'")),l(ae,f(";","invalid statement, expected ';'")),l(()=>kn,f(";","invalid statement, expected ';'")),l(()=>le,f(";","invalid statement, expected ';'"))),gi=b(l(w,wn).collect(it).collect(Pt)),yt=d(W,b(l($t,wn)),gi),Q=d(mn,l(lt.collect(at),x(bt)),l("(",()=>Q,")",x(bt)),l("&",()=>Q),l("*",()=>Q)),kn=b(d(oi,l("const",Gt,f("=","invalid const declaration, expected '='"),_),l("let",Gt,f("=","invalid let declaration, expected '='"),_))),le=d(l(Q,d("=","<<=",">>=","%=","&=","*=","+=","-=","/=","^=","|="),_),l(Q,d("++","--")),l("_","=",_)),bi=l(b(w.collect(e=>e.tags.attribute||[])).ctag("fn_attributes"),_t("fn"),f(ti,"invalid fn, expected function name"),l(f(ii,"invalid fn, expected function parameters").collect(F,"header_scope"),x(l("->",w.collect(e=>e.tags.attribute,"return_attributes"),U.ctag("return_type").collect(F,"return_scope"))),f(_n,"invalid fn, expected function body").ctag("body_statement").collect(F,"body_scope"))).collect(Pt,"fn_partial_scope").collect(Ys),yi=d(l(w,"override",jt,l(x(l("=",_.collect(F,"decl_scope")))),";").collect(vt("override")),l(w,"const",jt,"=",l(_).collect(F,"decl_scope"),";").collect(vt("const"))).collect(Pt),_i=l(w.collect(e=>e.tags.attribute,"attributes"),"alias",f(I,"invalid alias, expected name").collect(Tt,"alias_name"),f("=","invalid alias, expected '='"),f(U,"invalid alias, expected type").collect(X,"alias_scope"),f(";","invalid alias, expected ';'")).collect(qs),Sn=b(l(w,"const_assert",f(_,"invalid const_assert, expected expression"),f(";","invalid statement, expected ';'")).collect(tr)).ctag("const_assert"),wi=b(l(w,Bt(d(S("diagnostic",gn).map(Ei),S("enable",Ut).map(zi),S("requires",Ut).map(Ti)).ptag("directive"),";")).collect(lr)),ki=b(d(bi,ai,yi,";",_i,Sn.collect(rr),si)),Si=l(Br,E(wi),E(ki),f(ts(),"invalid WESL, expected EOF")).collect(ar,"collectModule");function Ei([e,t]){return{kind:"diagnostic",severity:e,rule:t}}function zi(e){return{kind:"enable",extensions:e}}function Ti(e){return{kind:"requires",extensions:e}}function Mi([e,t]){return{kind:"@attribute",name:e,params:t}}function Pi(e){return{kind:"@interpolate",params:e}}function Ii(e){return{kind:"@builtin",param:e}}function Ci([e,t]){return{kind:"@diagnostic",severity:e,rule:t}}function Ni(e){return{kind:"name",name:e.text,start:e.span[0],end:e.span[1]}}var Ai=class extends Error{span;src;constructor(e){const t=e.src.src,[n,s]=zt(e.cause.span[0],t);let r=`${e.src.debugFilePath}:${n}:${s}`;r+=` error: ${e.cause.message}
`,r+=Le(t,e.cause.span).join(`
`),super(r,{cause:e.cause}),this.span=e.cause.span,this.src=e.src}};function En(e){const t=new vr(e.src),n=Oi(e),s={stream:t,appState:n};try{if(Si.parse(s)===null)throw new Error("parseWESL failed")}catch(r){if(r instanceof j){const[i,o]=zt(r.span[0],e.src),a=new Ai({cause:r,src:e});We({url:e.debugFilePath,text:e.src,error:a,lineNumber:i,lineColumn:o,length:r.span[1]-r.span[0]})}else throw r}return n.stable}function Oi(e){const t=Xe(null);return{context:{scope:t,openElems:[]},stable:{srcModule:e,imports:[],rootScope:t,moduleElem:null}}}function Di(e,t){if(e._flatImports&&!t)return e._flatImports;const n=e.moduleElem.contents.filter(r=>r.kind==="import"),s=(t?q(n,t):n).map(r=>r.imports).flatMap(Ws);return t||(e._flatImports=s),s}const Ri=`bitcast all any select arrayLength 
  abs acos acosh asin asinh atan atanh atan2 ceil clamp cos cosh 
  countLeadingZeros countOneBits countTrailingZeros cross 
  degrees determinant distance dot dot4U8Packed dot4I8Packed 
  exp exp2 extractBits faceForward firstLeadingBit firstTrailingBit 
  floor fma fract frexp insertBits inverseSqrt ldexp length log log2
  max min mix modf normalize pow quantizeToF16 radians reflect refract
  reverseBits round saturate sign sin sinh smoothstep sqrt step tan tanh
  transpose trunc
  dpdx dpdxCoarse dpdxFine dpdy dpdyCoarse dpdyFine fwidth 
  fwidthCoarse fwidthFine
  textureDimensions textureGather textureGatherCompare textureLoad
  textureNumLayers textureNumLevels textureNumSamples
  textureSample textureSampleBias textureSampleCompare textureSampleCompareLevel
  textureSampleGrad textureSampleLevel textureSampleBaseClampToEdge
  textureStore
  atomicLoad atomicStore atomicAdd atomicSub atomicMax atomicMin
  atomicAnd atomicOr atomicXor atomicExchange atomicCompareExchangeWeak
  pack4x8snorm pack4x8unorm pack4xI8 pack4xU8 pack4xI8Clamp pack4xU8Clamp
  pack2x16snorm pack2x16unorm pack2x16float
  unpack4x8snorm unpack4x8unorm unpack4xI8 unpack4xU8 
  unpack2x16snorm unpack2x16unorm unpack2x16float
  storageBarrier textureBarrier workgroupBarrier workgroupUniformLoad
  subgroupAdd subgroupAll subgroupAnd subgroupAny subgroupBallot 
  subgroupBroadcast subgroupBroadcastFirst subgroupElect 
  subgroupExclusiveAdd subgroupExclusiveMul subgroupInclusiveAdd 
  subgroupInclusiveMul subgroupMax subgroupMin subgroupMul subgroupOr 
  subgroupShuffle subgroupShuffleUp subgroupShuffleXor subgroupXor
  quadBroadcast quadSwapDiagonal quadSwapX quadSwapY`.split(/\s+/),zn=`
  texture_1d texture_2d texture_2d_array texture_3d 
  texture_cube texture_cube_array
`,Tn=`
  texture_multisampled_2d texture_depth_multisampled_2d
`,Mn=`
  texture_storage_1d texture_storage_2d texture_storage_2d_array 
  texture_storage_3d
`,Bi=`array atomic bool f16 f32 i32 
  mat2x2 mat2x3 mat2x4 mat3x2 mat3x3 mat3x4 mat4x2 mat4x3 mat4x4
  mat2x2f mat2x3f mat2x4f mat3x2f mat3x3f mat3x4f
  mat4x2f mat4x3f mat4x4f
  mat2x2h mat2x3h mat2x4h mat3x2h mat3x3h mat3x4h
  mat4x2h mat4x3h mat4x4h
  u32 vec2 vec3 vec4 ptr
  vec2i vec3i vec4i vec2u vec3u vec4u
  vec2f vec3f vec4f vec2h vec3h vec4h
  ${zn}
  ${Tn}
  texture_external
  ${Mn}
  texture_depth_2d texture_depth_2d_array texture_depth_cube
  texture_depth_cube_array
  sampler sampler_comparison
  rgba8unorm rgba8snorm rgba8uint rgba8sint
  rgba16uint rgba16sint rgba16float 
  r32uint r32sint r32float rg32uint rg32sint rg32float
  rgba32uint rgba32sint rgba32float
  bgra8unorm`.split(/\s+/),Li=`read write read_write 
  function private workgroup uniform storage
  rgba8unorm rgba8snorm rgba8uint rgba8sint 
  rgba16uint rgba16sint rgba16float 
  r32uint r32sint r32float rg32uint rg32sint rg32float
  rgba32uint rgba32sint rgba32float bgra8unorm`.split(/\s+/);function Pn(e){return Bi.includes(e)}function Fi(e){return Ri.includes(e)||Pn(e)}function Wi(e){return Li.includes(e)}function Ui(e){const{rootAst:t,registry:n,virtuals:s,accumulateUnbound:r}=e,{conditions:i={},mangler:o=Ls}=e,{rootScope:a}=t,c=new Set,u=new Set,p=ce(a,i);p.forEach(g=>{g.mangledName=g.originalName,c.add(g.originalName),u.add(g)});const h=r?[]:void 0,v=new Map,m={registry:n,conditions:i,knownDecls:u,foundScopes:new Set,globalNames:c,globalStatements:v,virtuals:s,mangler:o,unbound:h},T=p.map(g=>[g.originalName,g]);return{decls:fe(a,m,{decls:new Map(T),parent:null},!0),globalNames:c,newStatements:[...v.values()],unbound:h}}function ce(e,t){const n=[];let s=!1;for(const r of e.contents)if(r.kind==="decl"){r.declElem;const{valid:i,nextElseState:o}=mt(xt(r.declElem.attributes),s,t);s=o,i&&n.push(r)}else if(r.kind==="partial"){const{valid:i,nextElseState:o}=mt(r.condAttribute,s,t);s=o,i&&Cn(r,n)}return n}function $i(e,t,n){return Zi(e,n).find(s=>s.originalName===t)}function ue(e){const{declElem:t}=e;return t?["alias","const","override","fn","struct","gvar"].includes(t.kind):!1}function fe(e,t,n,s=!1){const{dontFollowDecls:r,foundScopes:i}=t;if(i.has(e))return[];i.add(e);const o=[],a=[];let c=!1;return e.contents.forEach(u=>{const{kind:p}=u;if(p==="decl")s||n.decls.set(u.originalName,u);else if(p==="ref"){const h=Gi(u,n,t);h&&o.push(h)}else{const h=ji(u,n,t,c);h&&(a.push(...h.decls),c=h.nextElseState)}}),[o,a,r?[]:Xi(o,t)].flat()}function Gi(e,t,n){const{registry:s,conditions:r,unbound:i,virtuals:o}=n;if(e.refersTo||e.std)return;const a=In(e,t)??Hi(e,s,r,o,i);if(a)return e.refersTo=a.decl,Vi(e,a,n);to(e.originalName)?e.std=!0:i||Ue(e,`unresolved identifier '${e.originalName}'`)}function ji(e,t,n,s){const{valid:r,nextElseState:i}=mt(e.condAttribute,s,n.conditions);return r?{decls:fe(e,n,e.kind==="scope"?Ye(t):t),nextElseState:i}:{decls:[],nextElseState:i}}function Xi(e,t){const{conditions:n}=t;return e.flatMap(s=>{const r=s.dependentScope;if(!r)return[];const i=Ji(s,n);return i?fe(r,t,Ye(i)):[]})}function Vi(e,t,n){const{decl:s,moduleAst:r}=t,{knownDecls:i,globalNames:o,mangler:a,globalStatements:c}=n;if(!i.has(s)&&(i.add(s),Qi(e.originalName,s,o,s.srcModule,a),ue(s)))return r.moduleAsserts?.forEach(u=>{c.set(u,{srcModule:s.srcModule,elem:u})}),s}function In(e,t){const n=t.decls.get(e.originalName);if(n)return{decl:n,moduleAst:e.ast};if(t.parent)return In(e,t.parent)}function Hi(e,t,n,s,r){const i=Di(e.ast,n),o=e.originalName.split("::"),a=qi(o,i)??eo(o);if(a){const c=Yi(a,e.ast.srcModule,t,n,s);return c||(r?r.push(a):Ue(e,`module not found for '${a.join("::")}'`)),c}else r&&r.push(o)}function qi(e,t){for(const n of t)if(n.importPath.at(-1)===e.at(0))return[...n.modulePath,...e.slice(1)]}function Yi(e,t,n,s={},r){const i=no(e,t).slice(0,-1).join("::"),o=n.modules[i]??Ki(e[0],s,r);if(!o)return;const a=ws(e),c=$i(o.rootScope,a,s);if(c)return{decl:c,moduleAst:o}}function Ki(e,t={},n){if(!n)return;const s=n[e];if(s)return s.ast||(s.ast=En({modulePath:e,debugFilePath:e,src:s.fn(t)})),s.ast}function Zi(e,t){const n=e;if(n._validRootDecls)return n._validRootDecls;const s=ce(e,t);return n._validRootDecls=s,s}function Ji(e,t){e.isGlobal,te(e);let n=e.containingScope;for(;n.parent;)n=n.parent;n.kind;const s=n;if(s._scopeDecls)return s._scopeDecls;const r=ce(n,t).map(o=>[o.originalName,o]),i={decls:new Map(r)};return s._scopeDecls=i,i}function Qi(e,t,n,s,r){if(t.mangledName)return;let i;if(ue(t)){const o=e.lastIndexOf("::");i=r(t,s,o===-1?e:e.slice(o+2),n)}else i=t.originalName;t.mangledName=i,n.add(i)}function to(e){return Pn(e)||Fi(e)||Wi(e)}function eo(e){if(e.length>1)return e}function no(e,t){const n=e.lastIndexOf("super");if(n===-1)return e;const s=t.modulePath.split("::").slice(0,-(n+1)),r=e.slice(n+1);return[...s,...r]}function Cn(e,t){for(const n of e.contents)n.kind==="decl"?t.push(n):n.kind==="partial"&&Cn(n,t)}var so=class{sourceMap;constructor(e){this.sourceMap=e}createShaderModule(e,t){if(!("injectError"in e))return e.createShaderModule({...t,code:this.dest});e.pushErrorScope("validation");const n=e.createShaderModule({...t,code:this.dest});e.popErrorScope();const{promise:s,resolve:r}=Promise.withResolvers();return e.injectError("validation",s),n.getCompilationInfo().then(i=>{if(i.messages.length===0){r(null);return}const o=this.mapGPUCompilationInfo(i),a=ro(o,n),c=new GPUValidationError(a);c.cause=new Error("createShaderModule failed"),c.compilationInfo=o,r(c)}),n}get dest(){return this.sourceMap.dest.text}mapGPUCompilationInfo(e){return{__brand:e.__brand,messages:e.messages.map(t=>this.mapGPUCompilationMessage(t))}}mapGPUCompilationMessage(e){const t=this.sourceMap,n=t.destToSrc(e.offset),s=(e.length>0?t.destToSrc(e.offset+e.length):n).position-n.position,[r,i]=zt(n.position,n.src.text);return{__brand:e.__brand,type:e.type,message:e.message,offset:n.position,length:s,lineNum:r,linePos:i,module:{url:n.src.path??"",text:n.src.text}}}};function ro(e,t){if(e.messages.length===0)return null;let n=`Compilation log for [Invalid ShaderModule (${t.label||"unlabled"})]:
`;const s=e.messages.filter(r=>r.type==="error").length;s>0&&(n+=`${s} error(s) generated while compiling the shader:
`);for(const r of e.messages){const{lineNum:i,linePos:o}=r;n+=`${r.module.url}:${i}:${o}`,n+=` ${r.type}: ${r.message}
`;const a=r.module.text;a&&(n+=Le(a,[r.offset,r.offset+r.length]).join(`
`))}return n}function io(e){const t=e.split("/").filter(s=>s!=="."),n=[];return t.forEach(s=>{s!==""&&(s===".."&&n.length&&n[n.length-1]!==".."?n.pop():n.push(s))}),n.join("/")}function oo(e){const t=e.lastIndexOf("/"),n=t===-1?0:t+1,s=e.indexOf(".",n),r=s===-1?e.length:s;return e.slice(0,r)}function ao(){return Ms(),{modules:{}}}function lo(e,t,n="package"){let s;return t.includes("::")?s=t:t.includes("/")||t.endsWith(".wesl")||t.endsWith(".wgsl")?s=On(t,n):s=n+"::"+t,e.modules[s]}function Nn(e,t,n="package",s){let r=s;r===void 0?r="":r.endsWith("/")||(r+="/"),Object.entries(e).map(([i,o])=>({modulePath:On(i,n),debugFilePath:r+i,src:o})).forEach(i=>{const o=En(i);t.modules[i.modulePath]||(t.modules[i.modulePath]=o)})}function An(e,t){e.forEach(({modules:n,name:s})=>{Nn(n,t,s)}),e.forEach(({dependencies:n})=>{An(n||[],t)})}const co=/^lib\.w[eg]sl$/i;function On(e,t){if(e.includes("::"))return e;if(t!=="package"&&co.test(e))return t;const n=oo(io(e)).replaceAll("/","::");return t+"::"+n}async function uo(e){const{weslSrc:t,debugWeslRoot:n,libs:s=[]}=e,r=ao();return Nn(t,r,"package",n),An(s,r),new so(fo({registry:r,...e}))}function fo(e){const{transformedAst:t,newDecls:n,newStatements:s}=po(e);return pt.build(vo(t.moduleElem,t.srcModule,n,s,e.conditions))}function po(e){const{registry:t,mangler:n}=e,{rootModuleName:s="main",conditions:r={}}=e,i=mo(t,s),{constants:o,config:a}=e;let{virtualLibs:c}=e;o&&(c={...c,constants:ho(o)});const{globalNames:u,decls:p,newStatements:h}=Ui({rootAst:i,registry:t,conditions:r,virtuals:c&&Ss(c,v=>({fn:v})),mangler:n});return{transformedAst:xo(i,u,a),newDecls:p,newStatements:h}}function ho(e){return()=>Object.entries(e).map(([t,n])=>`const ${t} = ${n};`).join(`
`)}function mo(e,t){const n=lo(e,t);if(!n)throw new Error(`Root module not found: ${t}`);return n}function xo(e,t,n){const{moduleElem:s,srcModule:r}=e,i={moduleElem:s,srcModule:r,globalNames:t,notableElems:{}};return ks(n?.plugins??[],o=>o.transform).reduce((o,a)=>a(o),i)}function vo(e,t,n,s,r={}){const i=s.map(c=>{const{elem:u,srcModule:p}=c,{src:h,debugFilePath:v}=p,m=new pt({text:h,path:v});return Ot({srcBuilder:m,rootElems:[u],conditions:r}),m.addNl(),m}),o=new pt({text:t.src,path:t.debugFilePath});Ot({srcBuilder:o,rootElems:[e],conditions:r,extracting:!1});const a=n.map(c=>{const u=new pt({text:c.srcModule.src,path:c.srcModule.debugFilePath});return Ot({srcBuilder:u,rootElems:[c.declElem],conditions:r,skipConditionalFiltering:!0}),u});return[...i,o,...a]}Et(Mn);Et(zn);Et(Tn);const go=`

const MAX_DIST = 1000;

struct Data {
  view: mat4x4f,
  t: f32,
}


@group(0) @binding(0) var<uniform> data: Data;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(2) var noiseTex: texture_2d<f32>;

struct VsOutput {
  @builtin(position)pos: vec4f,
  @location(0)uv: vec2f,
}


@vertex fn vs_main(@builtin(vertex_index)id: u32) -> VsOutput {
	let tri = fullscreenTri(id);
	let aspect = 1280.0 / 720.0;
	var uv = tri.uv - 0.5;
	uv.x *= aspect;
	uv.y = -uv.y;
	return VsOutput(tri.pos, uv);
}

var<private> blobPos: vec3f;
var<private> blobOffset1: vec3f;
var<private> blobOffset2: vec3f;

fn hash2(p: vec2f) -> f32 {
	let x = 50 * fract(p * 0.3183099);
	return fract(x.x * x.y * (x.x + x.y));
}

fn hash3(p: vec3f) -> f32 {
	let x = 50 * fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
	return -1 + 2 * fract(x.x * x.y * x.z * (x.x+ x.y + x.z));
}

fn noise2(x: vec2f) -> f32 {
	let p = floor(x);
	let f = fract(x);
	let u = f * f * (3 - 2 * f);
	let a = hash2(p);
	let b = hash2(p + vec2f(1, 0));
	let c = hash2(p + vec2f(0, 1));
	let d = hash2(p + vec2f(1, 1));

	return a + (b - a) * u.x + (c - a) * u.y + (a - b - c + d) * u.x * u.y;
}

fn noise3(x: vec3f) -> f32 {
	let p = floor(x);
	let w = fract(x);
	let u = w * w * w * (w * (w * 6 - 15) + 10);
	let a = hash3(p);
	let b = hash3(p + vec3(1, 0, 0));
	let c = hash3(p + vec3(0, 1, 0));
	let d = hash3(p + vec3(1, 1, 0));
	let e = hash3(p + vec3(0, 0, 1));
	let f = hash3(p + vec3(1, 0, 1));
	let g = hash3(p + vec3(0, 1, 1));
	let h = hash3(p + vec3(1, 1, 1));

	return -1 + 2 * (a + (b - a) * u.x + (c - a) * u.y + (e - a) * u.z + (a - b - c + d) * u.x * u.y + (a - c - e + g) * u.y * u.z + (a - b - e + f) * u.z * u.x + (-a + b + c - d + e - f - g + h) * u.x * u.y * u.z);
}

fn terrain(p: vec2f) -> f32 {
	return textureSampleLevel(noiseTex, samp, p * 0.0005 - 0.5, 0).x * 20;
}

fn cloudNoise(p: vec2f) -> f32 {
	var r = 0.0;
	var a = 5.0;
	var f = 1.0;

	for (var i = 0; i < 6; i++) {
		r += a * noise2(vec2(p.x, p.y - 12) * f);
		a *= 0.5;
		f *= 2;
	}

	return r;
}

fn clouds(p: vec2f) -> f32 {
	return cloudNoise(p * 0.001 + data.t * 0.05) * 0.1;
}

fn smin(a: f32, b: f32, k: f32) -> f32 {
	let h = 1 - min(abs(a - b) / (4 * k), 1);
	return min(a, b) - (h * h * k);
}

fn sub(a: f32, b: f32) -> f32 {
	return max(-a, b);
}

fn ssub(a: f32, b: f32, k: f32) -> f32 {
	return -smin(a, -b, k);
}

fn sphere(p: vec3f, r: f32) -> f32 {
	return length(p) - r;
}

fn box(p: vec3f, s: vec3f) -> f32 {
	let q = abs(p) - s;
	return length(max(q, vec3f(0))) + min(max(q.x, max(q.y, q.z)), 0);
}

fn cylinder(p: vec3f, r: f32, h: f32) -> f32 {
	let d = abs(vec2(length(p.xz), p.y)) - vec2(r, h);
	return min(max(d.x, d.y), 0) + length(max(d, vec2()));
}

fn ellipse(p: vec3f, r: vec3f) -> f32 {
	let k1 = length(p / r);
	let k2 = length(p / (r * r));
	return k1 * (k1 - 1) / k2;
}

fn grass(p: vec3f, cellSize: vec2f, id: vec2f, s: f32, toto: f32, terrain: f32, m: mat2x2f) -> f32 {
	var cell = id * s + s * 0.5;
	var n = 71 * cell.x + 283 * cell.y + 107;
	let offset = (fract(n * fract(n * 0.36787944)) * 2 - 1) * s * 0.2;
	cell.x += offset;
	cell.y += offset * 0.2;

	var radius = vec3f(0.06, 0.7, 0.06);
	radius.y += offset * 5;

	let pp = p - vec3f(cell.x, terrain, cell.y);

	return ellipse(vec3f(m * pp.xy, pp.z), mix(radius, vec3f(0.3, 0.7, 0.3), vec3f(toto)));
}

fn scene(p: vec3f, curT: f32) -> Hit {
	let ter = terrain(p.xz);

	var t = p.y + ter;
	var hit = Hit(t, ter, 0);

	if p.x > 16 || p.x < -16 || p.z > 16 || p.z < -16 {
		let toto = smoothstep(20, 100, curT);
		const s = 0.19;
		let cellId = floor(p.xz / s);

		var m = mat2x2f(1, 0, 0, 1);
		if curT <= 100 {
			let wind = noise2((p.xz * 0.8) + data.t) * 0.32 * (1 - toto);
			let co = cos((p.y + ter) * wind);
			let si = sin((p.y + ter) * wind);
			m = mat2x2f(co, -si, si, co);
		}

		t = min(t, grass(p, cellId, cellId, s, toto, -ter, m));

		if curT < 80 {
			t = min(t, grass(p, cellId, cellId + vec2f(1, 0), s, toto, -ter, m));
			t = min(t, grass(p, cellId, cellId + vec2f(-1, 0), s, toto, -ter, m));
		}

		if t < hit.t {
			hit = Hit(t, ter, 3);
		}
	}

	var blob: f32;
	{
		var pos = p + blobPos;

		var t = sphere(pos, 1.5);
		t = smin(t, sphere(pos + blobOffset1, 0.9), 0.2);
		t = smin(t, sphere(pos + blobOffset2.yzx, 0.3), 0.4);
		t = smin(t, sphere(pos + blobOffset1.zxy, 0.6), 0.6);

		if t < hit.t {
			hit = Hit(t, ter, 1);
		}

		blob = t;
	}

	{
		let t = ssub(blob, cylinder(p, 14, 2), 1.4);

		if t < hit.t {
			hit = Hit(t, ter, 2);
		}
	}

	{
		let t = sub(sphere(p, 14), box(vec3f(p.x, p.y + 0, p.z), vec3f(16, 2, 16)));

		if t < hit.t {
			hit = Hit(t, ter, 4);
		}
	}

	return hit;
}

fn sceneNormal(p: vec3f, t: f32) -> vec3f {
	let eps = vec2f(0.005 * t, 0);
	return normalize(vec3f(scene(p + eps.xyy, t).t, scene(p + eps.yxy, t).t, scene(p + eps.yyx, t).t) - scene(p, t).t);
}

struct Hit {
  t: f32,
  terrain: f32,
  m: u32,
}


fn raymarch(o: vec3f, d: vec3f) -> Hit {
	var hit = Hit(0, 0, 0);

	for (var i = 0; i < 200 && hit.t < MAX_DIST; i++) {
		let curHit = scene(o + d * hit.t, hit.t);
		hit.t += curHit.t * 0.5;
		hit.terrain = curHit.terrain;
		hit.m = curHit.m;

		if curHit.t < 0.01 {
			break;
		}
	}

	return hit;
}

fn grid(p: vec2f, spacing: f32, dpx: vec2f, dpy: vec2f) -> f32 {
	let uv = abs(p - spacing * round(p / spacing));
	let minW = vec2(length(dpx), length(dpy));
	let w = vec2f(0.015);
	let actualW = max(w, minW);
	var a = smoothstep(minW, -minW, uv - actualW);
	var a2 = smoothstep(actualW * 10, -actualW * 10, uv - actualW * 3);
	a *= saturate(w.x / actualW) * 7;
	a2 *= a2 * a2;
	return a.x + a.y + a2.x + a2.y;
}

fn findExit(o: vec3f, d: vec3f) -> vec3f {
	var t = 0.0;
	var p = o;

	for (var i = 0; i < 50; i++) {
		p = o + d * t;
		let curT = scene(p, t).t;
		t += 0.1;

		if curT > 0.01 {
			break;
		}
	}

	return p;
}

fn raymarchSpace(o: vec3f, d: vec3f) -> f32 {
	var t = 2.0;

	for (var i = 0; i < 100; i++) {
		var p = o + d * t;
		p.y -= data.t * 0.1;
		let density = noise3(p * 3);
		if density > 0.85 {
			return t;
		}
		t += 0.5;
	}

	return MAX_DIST + 10;
}

@fragment fn fs_main(input: VsOutput) -> @location(0) vec4f {
	blobPos = vec3f(cos(data.t * 0.4) * 6, -4, sin(data.t * 0.4) * 6);
	blobOffset1 = vec3f(cos(data.t * 1.5) * 0.5 * 3, sin(data.t) * 0.5 * 3, 0);
	blobOffset2 = vec3f(cos(data.t * 1.2 + 1.1) * 0.5 * 3, sin(data.t + 0.78) * 0.5 * 3, 0);

	var o = data.view[3].xyz;
	var col = vec3f(0, 0, 0);
	var bounces = 1;
	const terrainCol = vec3(0, 0.015, 0.004);
	let uvdx = dpdx(input.uv.x);
	let uvdy = dpdy(input.uv.y);
	var d = normalize((data.view * vec4f(input.uv, -1, 0)).xyz);
	let d1 = normalize((data.view * vec4f(input.uv + vec2(uvdx, 0), -1, 0)).xyz);
	let d2 = normalize((data.view * vec4f(input.uv + vec2(0, uvdy), -1, 0)).xyz);
	let l = normalize(vec3f(0.5, 0.5, 1));

	for (var i = 0; i < bounces; i++) {
		let hit = raymarch(o, d);
		var p = o + d * hit.t;
		var sun = max(0, dot(d, l));

		if hit.t < MAX_DIST {

			let n = sceneNormal(p, hit.t);
			let shadow = 1.0;
			var specular: vec3f;
			let nl = max(dot(n, l), 0);

			var emissive = vec3f();

			var albedo: vec3f;
			if hit.m == 0 {
				albedo = terrainCol;
			} else if hit.m == 1 {
				let rim = pow(1 - saturate(dot(-d, n)), 5);

				let c = mix(vec3f(0.0185, 0, 0.356), vec3f(0.116, 0, 0.356), nl);

				col += c * rim * 80;

				let h = normalize(l - d);
				specular = vec3f(pow(max(0, dot(n, h)), 130));

				d = refract(d, n, 0.96);
				o = findExit(p + d * 0.5, d);

				bounces = 3;
			} else if hit.m == 2 {
				let t = raymarchSpace(p, d);

				if t < MAX_DIST {
					col += mix(vec3f(0.2, 0.05, 0.9), vec3f(0.9, 0.6, 0.7), exp(-t * 0.05));
				}

				let dpxy = o.xz + d1.xz * dot(p - o, n) / dot(d1, n) - p.xz;
				let dpyy = o.xz + d2.xz * dot(p - o, n) / dot(d2, n) - p.xz;

				var dpx = vec2(dpxy.x, dpyy.x);
				var dpy = vec2(dpxy.y, dpyy.y);

				if i == 1 {
					dpx = vec2(0.01);
					dpy = vec2(0.01);
				} else if i == 2 {
					dpx *= 0.2;
					dpy *= 0.2;
				}

				albedo = grid(p.xz, 1.5, dpx, dpy) * vec3f(0.2, 0.2, 1) * 5;
			} else if hit.m == 3 {
				albedo = mix(terrainCol, vec3f(0.3, 0.9, 0.3), smoothstep(0.2, 0.8, p.y + hit.terrain));
				albedo *= max(0.3, smoothstep(0.75, 0.5, clouds(p.xz)));
			} else if hit.m == 4 {
				d = reflect(d, n);
				o = p + n * 0.01;
				bounces = max(bounces, 2);
			}

			col += albedo * nl + specular;
			col = mix(col, mix(vec3(0.1, 0.4, 0.6), vec3f(1, 0.9, 0.7), pow(sun, 8)), 1 - exp(-hit.t * 0.002));
		} else {
			col += mix(vec3f(0.1, 0.3, 0.9), vec3f(0.1, 0.2, 0.7), d.y);

			let t = (1500 - o.y) / d.y;
			if t > 0 {
				let c = clouds((o + d * t).xz);
				col = mix(col, vec3f(1), smoothstep(0.5, 0.75, c) * (1 - smoothstep(5000, 30000, t)));
			}

			col += pow(sun, 1024) * vec3f(1, 0.95, 0.1) * 2;
			col += pow(sun, 32) * vec3f(1, 0.2, 0) * 1;
		}

		let ssun = vec2(dot(l, data.view[0].xyz), dot(l, data.view[1].xyz));
		let suv = input.uv - ssun.xy;
		col += vec3f(1, 0, 0) * 50 * pow(sun, 8) * pow(max(0, 0.2 - length(suv + ssun.xy * 0.5)), 2);
		col += vec3f(1, 1, 0.3) * 30 * pow(sun, 8) * pow(max(0, 0.2 - length(suv + ssun.xy * 1.2)), 2);
		col += vec3f(0.7, 0.2, 0.9) * 30 * pow(sun, 8) * max(0, 0.1 - length(suv * pow(length(suv), 3) + ssun.xy));
	}

	return vec4(pow(col, vec3f(1 / 2.2)), 1);
}


fn fullscreenTri(vertexId: u32) -> FullscreenTri {
	let uv = vec2f(f32(vertexId >> 1), f32(vertexId & 1)) * 2;
	let pos = vec4f(uv * vec2f(2, -2) + vec2f(-1, 1), 0, 1);
	return FullscreenTri(pos, uv);
}

struct FullscreenTri {
  pos: vec4f,
  uv: vec2f,
}
`,bo={rootModuleName:"terrain",weslSrc:{"world.wgsl":`import package::util::fullscreen_tri::{FullscreenTri, fullscreenTri};

const MAX_DIST = 1000;

struct Data {
	view: mat4x4f,
	t: f32,
}

@group(0) @binding(0) var<uniform> data: Data;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(2) var noiseTex: texture_2d<f32>;

struct VsOutput {
	@builtin(position) pos: vec4f,
	@location(0) uv: vec2f,
}

@vertex
fn vs_main(@builtin(vertex_index) id: u32) -> VsOutput {
	let tri = fullscreenTri(id);
	let aspect = 1280.0 / 720.0;
	var uv = tri.uv - 0.5;
	uv.x *= aspect;
	uv.y = -uv.y;
	return VsOutput(tri.pos, uv);
}

var<private> blobPos: vec3f;
var<private> blobOffset1: vec3f;
var<private> blobOffset2: vec3f;

fn hash2(p: vec2f) -> f32 {
	let x = 50 * fract(p * 0.3183099);
	return fract(x.x * x.y * (x.x + x.y));
}

fn hash3(p: vec3f) -> f32 {
	let x = 50 * fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
	return -1 + 2 * fract(x.x * x.y * x.z * (x.x+ x.y + x.z));
}

fn noise2(x: vec2f) -> f32 {
	let p = floor(x);
	let f = fract(x);
	let u = f * f * (3 - 2 * f);
	let a = hash2(p);
	let b = hash2(p + vec2f(1, 0));
	let c = hash2(p + vec2f(0, 1));
	let d = hash2(p + vec2f(1, 1));

	return a + (b - a) * u.x + (c - a) * u.y + (a - b - c + d) * u.x * u.y;
}

fn noise3(x: vec3f) -> f32 {
	let p = floor(x);
	let w = fract(x);
	let u = w * w * w * (w * (w * 6 - 15) + 10);
	let a = hash3(p);
	let b = hash3(p + vec3(1, 0, 0));
	let c = hash3(p + vec3(0, 1, 0));
	let d = hash3(p + vec3(1, 1, 0));
	let e = hash3(p + vec3(0, 0, 1));
	let f = hash3(p + vec3(1, 0, 1));
	let g = hash3(p + vec3(0, 1, 1));
	let h = hash3(p + vec3(1, 1, 1));

	return -1 + 2 * (a + (b - a) * u.x + (c - a) * u.y + (e - a) * u.z + (a - b - c + d) * u.x * u.y + (a - c - e + g) * u.y * u.z + (a - b - e + f) * u.z * u.x + (-a + b + c - d + e - f - g + h) * u.x * u.y * u.z);
}

fn terrain(p: vec2f) -> f32 {
	return textureSampleLevel(noiseTex, samp, p * 0.0005 - 0.5, 0).x * 20;
}

fn cloudNoise(p: vec2f) -> f32 {
	var r = 0.0;
	var a = 5.0;
	var f = 1.0;

	for (var i = 0; i < 6; i++) {
		r += a * noise2(vec2(p.x, p.y - 12) * f);
		a *= 0.5;
		f *= 2;
	}

	return r;
}

fn clouds(p: vec2f) -> f32 {
	return cloudNoise(p * 0.001 + data.t * 0.05) * 0.1;
}

fn smin(a: f32, b: f32, k: f32) -> f32 {
	let h = 1 - min(abs(a - b) / (4 * k), 1);
	return min(a, b) - (h * h * k);
}

fn sub(a: f32, b: f32) -> f32 {
	return max(-a, b);
}

fn ssub(a: f32, b: f32, k: f32) -> f32 {
	return -smin(a, -b, k);
}

fn sphere(p: vec3f, r: f32) -> f32 {
	return length(p) - r;
}

fn box(p: vec3f, s: vec3f) -> f32 {
	let q = abs(p) - s;
	return length(max(q, vec3f(0))) + min(max(q.x, max(q.y, q.z)), 0);
}

fn cylinder(p: vec3f, r: f32, h: f32) -> f32 {
	let d = abs(vec2(length(p.xz), p.y)) - vec2(r, h);
	return min(max(d.x, d.y), 0) + length(max(d, vec2()));
}

fn ellipse(p: vec3f, r: vec3f) -> f32 {
	let k1 = length(p / r);
	let k2 = length(p / (r * r));
	return k1 * (k1 - 1) / k2;
}

fn grass(p: vec3f, cellSize: vec2f, id: vec2f, s: f32, toto: f32, terrain: f32, m: mat2x2f) -> f32 {
	var cell = id * s + s * 0.5;
	var n = 71 * cell.x + 283 * cell.y + 107;
	let offset = (fract(n * fract(n * 0.36787944)) * 2 - 1) * s * 0.2;
	cell.x += offset;
	cell.y += offset * 0.2;

	var radius = vec3f(0.06, 0.7, 0.06);
	radius.y += offset * 5;

	let pp = p - vec3f(cell.x, terrain, cell.y);

	return ellipse(vec3f(m * pp.xy, pp.z), mix(radius, vec3f(0.3, 0.7, 0.3), vec3f(toto)));
}

fn scene(p: vec3f, curT: f32) -> Hit {
	let ter = terrain(p.xz);

	var t = p.y + ter;
	var hit = Hit(t, ter, 0);

	if p.x > 16 || p.x < -16 || p.z > 16 || p.z < -16 {
		let toto = smoothstep(20, 100, curT);
		const s = 0.19;
		let cellId = floor(p.xz / s);

		var m = mat2x2f(1, 0, 0, 1);
		if curT <= 100 {
			let wind = noise2((p.xz * 0.8) + data.t) * 0.32 * (1 - toto);
			let co = cos((p.y + ter) * wind);
			let si = sin((p.y + ter) * wind);
			m = mat2x2f(co, -si, si, co);
		}

		t = min(t, grass(p, cellId, cellId, s, toto, -ter, m));

		if curT < 80 {
			t = min(t, grass(p, cellId, cellId + vec2f(1, 0), s, toto, -ter, m));
			t = min(t, grass(p, cellId, cellId + vec2f(-1, 0), s, toto, -ter, m));
		}

		if t < hit.t {
			hit = Hit(t, ter, 3);
		}
	}

	var blob: f32;
	{
		var pos = p + blobPos;

		var t = sphere(pos, 1.5);
		t = smin(t, sphere(pos + blobOffset1, 0.9), 0.2);
		t = smin(t, sphere(pos + blobOffset2.yzx, 0.3), 0.4);
		t = smin(t, sphere(pos + blobOffset1.zxy, 0.6), 0.6);

		if t < hit.t {
			hit = Hit(t, ter, 1);
		}

		blob = t;
	}

	{
		let t = ssub(blob, cylinder(p, 14, 2), 1.4);

		if t < hit.t {
			hit = Hit(t, ter, 2);
		}
	}

	{
		let t = sub(sphere(p, 14), box(vec3f(p.x, p.y + 0, p.z), vec3f(16, 2, 16)));

		if t < hit.t {
			hit = Hit(t, ter, 4);
		}
	}

	return hit;
}

fn sceneNormal(p: vec3f, t: f32) -> vec3f {
	let eps = vec2f(0.005 * t, 0);
	return normalize(vec3f(scene(p + eps.xyy, t).t, scene(p + eps.yxy, t).t, scene(p + eps.yyx, t).t) - scene(p, t).t);
}

struct Hit {
	t: f32,
	terrain: f32,
	m: u32,
}

fn raymarch(o: vec3f, d: vec3f) -> Hit {
	var hit = Hit(0, 0, 0);

	for (var i = 0; i < 200 && hit.t < MAX_DIST; i++) {
		let curHit = scene(o + d * hit.t, hit.t);
		hit.t += curHit.t * 0.5;
		hit.terrain = curHit.terrain;
		hit.m = curHit.m;

		if curHit.t < 0.01 {
			break;
		}
	}

	return hit;
}

fn grid(p: vec2f, spacing: f32, dpx: vec2f, dpy: vec2f) -> f32 {
	let uv = abs(p - spacing * round(p / spacing));
	let minW = vec2(length(dpx), length(dpy));
	let w = vec2f(0.015);
	let actualW = max(w, minW);
	var a = smoothstep(minW, -minW, uv - actualW);
	var a2 = smoothstep(actualW * 10, -actualW * 10, uv - actualW * 3);
	a *= saturate(w.x / actualW) * 7;
	a2 *= a2 * a2;
	return a.x + a.y + a2.x + a2.y;
}

fn findExit(o: vec3f, d: vec3f) -> vec3f {
	var t = 0.0;
	var p = o;

	for (var i = 0; i < 50; i++) {
		p = o + d * t;
		let curT = scene(p, t).t;
		t += 0.1;

		if curT > 0.01 {
			break;
		}
	}

	return p;
}

fn raymarchSpace(o: vec3f, d: vec3f) -> f32 {
	var t = 2.0;

	for (var i = 0; i < 100; i++) {
		var p = o + d * t;
		p.y -= data.t * 0.1;
		let density = noise3(p * 3);
		if density > 0.85 {
			return t;
		}
		t += 0.5;
	}

	return MAX_DIST + 10;
}

@fragment
fn fs_main(input: VsOutput) -> @location(0) vec4f {
	blobPos = vec3f(cos(data.t * 0.4) * 6, -4, sin(data.t * 0.4) * 6);
	blobOffset1 = vec3f(cos(data.t * 1.5) * 0.5 * 3, sin(data.t) * 0.5 * 3, 0);
	blobOffset2 = vec3f(cos(data.t * 1.2 + 1.1) * 0.5 * 3, sin(data.t + 0.78) * 0.5 * 3, 0);

	var o = data.view[3].xyz;
	var col = vec3f(0, 0, 0);
	var bounces = 1;
	const terrainCol = vec3(0, 0.015, 0.004);
	let uvdx = dpdx(input.uv.x);
	let uvdy = dpdy(input.uv.y);
	var d = normalize((data.view * vec4f(input.uv, -1, 0)).xyz);
	let d1 = normalize((data.view * vec4f(input.uv + vec2(uvdx, 0), -1, 0)).xyz);
	let d2 = normalize((data.view * vec4f(input.uv + vec2(0, uvdy), -1, 0)).xyz);
	let l = normalize(vec3f(0.5, 0.5, 1));

	for (var i = 0; i < bounces; i++) {
		let hit = raymarch(o, d);
		var p = o + d * hit.t;
		var sun = max(0, dot(d, l));

		if hit.t < MAX_DIST {

			let n = sceneNormal(p, hit.t);
			let shadow = 1.0;
			var specular: vec3f;
			let nl = max(dot(n, l), 0);

			var emissive = vec3f();

			var albedo: vec3f;
			if hit.m == 0 {
				albedo = terrainCol;
			} else if hit.m == 1 {
				let rim = pow(1 - saturate(dot(-d, n)), 5);

				let c = mix(vec3f(0.0185, 0, 0.356), vec3f(0.116, 0, 0.356), nl);

				col += c * rim * 80;

				let h = normalize(l - d);
				specular = vec3f(pow(max(0, dot(n, h)), 130));

				d = refract(d, n, 0.96);
				o = findExit(p + d * 0.5, d);

				bounces = 3;
			} else if hit.m == 2 {
				let t = raymarchSpace(p, d);

				if t < MAX_DIST {
					col += mix(vec3f(0.2, 0.05, 0.9), vec3f(0.9, 0.6, 0.7), exp(-t * 0.05));
				}

				let dpxy = o.xz + d1.xz * dot(p - o, n) / dot(d1, n) - p.xz;
				let dpyy = o.xz + d2.xz * dot(p - o, n) / dot(d2, n) - p.xz;

				var dpx = vec2(dpxy.x, dpyy.x);
				var dpy = vec2(dpxy.y, dpyy.y);

				if i == 1 {
					dpx = vec2(0.01);
					dpy = vec2(0.01);
				} else if i == 2 {
					dpx *= 0.2;
					dpy *= 0.2;
				}

				albedo = grid(p.xz, 1.5, dpx, dpy) * vec3f(0.2, 0.2, 1) * 5;
			} else if hit.m == 3 {
				albedo = mix(terrainCol, vec3f(0.3, 0.9, 0.3), smoothstep(0.2, 0.8, p.y + hit.terrain));
				albedo *= max(0.3, smoothstep(0.75, 0.5, clouds(p.xz)));
			} else if hit.m == 4 {
				d = reflect(d, n);
				o = p + n * 0.01;
				bounces = max(bounces, 2);
			}

			col += albedo * nl + specular;
			col = mix(col, mix(vec3(0.1, 0.4, 0.6), vec3f(1, 0.9, 0.7), pow(sun, 8)), 1 - exp(-hit.t * 0.002));
		} else {
			col += mix(vec3f(0.1, 0.3, 0.9), vec3f(0.1, 0.2, 0.7), d.y);

			let t = (1500 - o.y) / d.y;
			if t > 0 {
				let c = clouds((o + d * t).xz);
				col = mix(col, vec3f(1), smoothstep(0.5, 0.75, c) * (1 - smoothstep(5000, 30000, t)));
			}

			col += pow(sun, 1024) * vec3f(1, 0.95, 0.1) * 2;
			col += pow(sun, 32) * vec3f(1, 0.2, 0) * 1;
		}

		let ssun = vec2(dot(l, data.view[0].xyz), dot(l, data.view[1].xyz));
		let suv = input.uv - ssun.xy;
		col += vec3f(1, 0, 0) * 50 * pow(sun, 8) * pow(max(0, 0.2 - length(suv + ssun.xy * 0.5)), 2);
		col += vec3f(1, 1, 0.3) * 30 * pow(sun, 8) * pow(max(0, 0.2 - length(suv + ssun.xy * 1.2)), 2);
		col += vec3f(0.7, 0.2, 0.9) * 30 * pow(sun, 8) * max(0, 0.1 - length(suv * pow(length(suv), 3) + ssun.xy));
	}

	return vec4(pow(col, vec3f(1 / 2.2)), 1);
}
`,"toto.wgsl":`import vs_fullscreen;

struct VertexOut {
	@builtin(position) position: vec4f,
	@location(0) color: vec4f
}

struct SceneData {
	view: mat4x4f,
	proj: mat4x4f,
}

@group(0) @binding(0) var<uniform> sceneData: SceneData;

@vertex
fn vertex_main(
	@location(0) position: vec4f,
	@location(1) color: vec4f
) -> VertexOut {
	var output : VertexOut;
	output.position = sceneData.proj * sceneData.view * vec4f(position.x, position.y, position.z, 1);
	output.color = color;
	return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f {
	// @if(hey)
	// return vec4f(1, 1, 1, 1);

	// @if(!hey)
	return fragData.color;
}
`,"terrain.wgsl":`@group(0) @binding(0) var outputTex : texture_storage_2d<r32float, write>;

fn hash2(p: vec2f) -> f32 {
	return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

fn noise(x: vec2f) -> f32 {
	let p = floor(x);
	let f = fract(x);
	let u = f * f * (3 - 2 * f);
	let a = hash2(p);
	let b = hash2(p + vec2f(1, 0));
	let c = hash2(p + vec2f(0, 1));
	let d = hash2(p + vec2f(1, 1));
	let v = a + (b - a) * u.x + (c - a) * u.y + (a - b - c + d) * u.x * u.y;
	return v;
}

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) id: vec3u) {
	var p = vec2(f32(id.x) - constants::texSize * 0.5, f32(id.y) - constants::texSize * 0.5);
	p *= 0.05;
	let d = length(p);
	let s = min(d, 20);
	const m = mat2x2f(0.8, 0.6, -0.6, 0.8);
	let v = 0.1 + noise(p * 0.9) * 1.3 * smoothstep(0.5, 3, d) * smoothstep(15, 5, d) + (noise(m * p * 0.2) * 5 - 4) * smoothstep(10, 15, d) + (noise(m * m * p * 0.1) * 10 - 15) * smoothstep(20, 30, d);
	textureStore(outputTex, id.xy, vec4(v, 0, 0, 1));
}
`,"util/fullscreen_tri.wgsl":`struct FullscreenTri {
	pos: vec4f,
	uv: vec2f,
}

fn fullscreenTri(vertexId: u32) -> FullscreenTri {
	let uv = vec2f(f32(vertexId >> 1), f32(vertexId & 1)) * 2;
	let pos = vec4f(uv * vec2f(2, -2) + vec2f(-1, 1), 0, 1);
	return FullscreenTri(pos, uv);
}
`},debugWeslRoot:"shaders",libs:[]};async function yo(e){let n=e.createTexture({size:[1024,1024],format:"r32float",usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING}),s=await uo({...bo,constants:{texSize:1024}}),r=e.createComputePipeline({layout:"auto",compute:{module:s.createShaderModule(e,{})}}),i=e.createBindGroup({layout:r.getBindGroupLayout(0),entries:[{binding:0,resource:n}]}),o=e.createCommandEncoder(),a=o.beginComputePass();return a.setPipeline(r),a.setBindGroup(0,i),a.dispatchWorkgroups(1024/8,1024/8),a.end(),e.queue.submit([o.finish()]),await e.queue.onSubmittedWorkDone(),n}(async()=>{if(!navigator.gpu)throw Error("Your browser doesn't support WebGPU");let e=await navigator.gpu.requestAdapter();if(!e)throw Error("Couldn't request WebGPU adapter");let t=await e.requestDevice({requiredFeatures:["float32-filterable"]}),n=await yo(t);const s=1280,r=720;let i=document.getElementById("canvas");i.width=s,i.height=r;let o=i.getContext("webgpu");o.configure({device:t,format:navigator.gpu.getPreferredCanvasFormat(),alpha:"premultiplied"});let a=new J,c=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float"}}]}),u=t.createBuffer({size:80*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),p=t.createSampler({addressModeU:"mirror-repeat",addressModeV:"mirror-repeat",minFilter:"linear",magFilter:"linear"}),h=t.createBindGroup({layout:c,entries:[{binding:0,resource:u},{binding:1,resource:p},{binding:2,resource:n}]}),v=t.createShaderModule({code:go}),m=t.createPipelineLayout({bindGroupLayouts:[c]}),T=t.createRenderPipeline({vertex:{module:v,entryPoint:"vs_main"},fragment:{module:v,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:"none"},layout:m}),g=new Ln(window),M=0,ct=0,pe=M,de=ct,It=new tt(0,4.7,9),Ct=new et,he=It.new(),me=new Float32Array(2048),K=0;const Dn=(G,Nt)=>{let ut=K;Nt(),t.queue.writeBuffer(G,0,me,ut,K-ut)},xe=G=>{me.set(G,K),K+=G.length};let Z=performance.now()/1e3,ve=Z,$=1/60;function ge(){$=Z-ve,K=0,g.down(Bn.Left)&&(de-=g.mouse.dx*1*$,pe-=g.mouse.dy*1*$);let G=+g.down("KeyD")-+g.down("KeyA"),Nt=+g.down("KeyR")-+g.down("KeyF"),ut=+g.down("KeyS")-+g.down("KeyW"),Rn=new tt(G,Nt,ut).normalize().mul(4*Math.pow(4,+g.down("ShiftLeft"))*$);he.add(Ct.xform(Rn));let be=-Math.expm1(-10*$);M=D(M,pe,be),ct=D(ct,de,be),M=Fn(M,-Math.PI/2,Math.PI/2),Ct.set(new et().setEuler(M,ct,0)),It.lerp(he,-Math.expm1(-10*$));let C=new Xt().setPosRot(It,Ct);a.set(C.e00,C.e01,C.e02,C.tx,C.e10,C.e11,C.e12,C.ty,C.e20,C.e21,C.e22,C.tz,0,0,0,1),Dn(u,()=>{xe(a.toArray()),xe([Z])});let ye=t.createCommandEncoder(),ft=ye.beginRenderPass({colorAttachments:[{loadOp:"clear",storeOp:"store",view:o.getCurrentTexture()}]});ft.setPipeline(T),ft.setBindGroup(0,h),ft.draw(3),ft.end(),t.queue.submit([ye.finish()]),ve=Z,Z=performance.now()/1e3,g.tick(),requestAnimationFrame(ge)}requestAnimationFrame(ge)})();
