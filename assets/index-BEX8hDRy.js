var _c=Object.defineProperty;var vc=(i,t,e)=>t in i?_c(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var F=(i,t,e)=>vc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="186",xc=0,oo=1,Mc=2,Cs=1,Sc=2,Gi=3,Zn=0,ze=1,Be=2,Tn=0,Wi=1,lo=2,co=3,ho=4,yc=5,Mi=100,bc=101,wc=102,Ec=103,Tc=104,Ac=200,Rc=201,Cc=202,Pc=203,Sl=204,yl=205,Lc=206,Ic=207,Dc=208,Uc=209,Nc=210,Fc=211,Oc=212,Bc=213,zc=214,Or=0,Br=1,zr=2,Xi=3,kr=4,Hr=5,Gr=6,Vr=7,Ra=0,kc=1,Hc=2,pn=0,bl=1,wl=2,El=3,Tl=4,Al=5,Rl=6,Cl=7,Pl=300,Jn=301,Ei=302,Js=303,Qs=304,Ws=306,Wr=1e3,En=1001,Xr=1002,Te=1003,Gc=1004,ji=1005,Le=1006,js=1007,Yn=1008,We=1009,Ll=1010,Il=1011,qi=1012,Ca=1013,gn=1014,un=1015,_n=1016,Pa=1017,La=1018,$i=1020,Dl=35902,Ul=35899,Nl=1021,Fl=1022,tn=1023,Cn=1026,Kn=1027,Ol=1028,Ia=1029,Qn=1030,Da=1031,Ua=1033,Ps=33776,Ls=33777,Is=33778,Ds=33779,qr=35840,$r=35841,Yr=35842,Kr=35843,Zr=36196,Jr=37492,Qr=37496,jr=37488,ta=37489,Ns=37490,ea=37491,na=37808,ia=37809,sa=37810,ra=37811,aa=37812,oa=37813,la=37814,ca=37815,ha=37816,da=37817,ua=37818,fa=37819,pa=37820,ma=37821,ga=36492,_a=36494,va=36495,xa=36283,Ma=36284,Fs=36285,Sa=36286,Vc=3200,ya=0,Wc=1,zn="",Ye="srgb",Os="srgb-linear",Bs="linear",te="srgb",tr=7680,Xc=519,qc=512,$c=513,Yc=514,Na=515,Kc=516,Zc=517,Fa=518,Jc=519,Bl=35044,uo="300 es",fn=2e3,Yi=2001;function Qc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jc(){const i=zs("canvas");return i.style.display="block",i}const fo={};function ks(...i){const t="THREE."+i.shift();console.log(t,...i)}function zl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Lt(...i){i=zl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=zl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function bi(...i){const t=i.join(" ");t in fo||(fo[t]=!0,Lt(...i))}function th(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const eh={[Or]:Br,[zr]:Gr,[kr]:Vr,[Xi]:Hr,[Br]:Or,[Gr]:zr,[Vr]:kr,[Hr]:Xi};class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],er=Math.PI/180,ba=180/Math.PI;function kn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function nh(i,t){return(i%t+t)%t}function nr(i,t,e){return(1-e)*i+e*t}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qa=class qa{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qa.prototype.isVector2=!0;let Ut=qa;class Ai{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],m=r[a+1],_=r[a+2],S=r[a+3];if(f!==S||c!==h||l!==m||u!==_){let p=c*h+l*m+u*_+f*S;p<0&&(h=-h,m=-m,_=-_,S=-S,p=-p);let d=1-o;if(p<.9995){const y=Math.acos(p),R=Math.sin(y);d=Math.sin(d*y)/R,o=Math.sin(o*y)/R,c=c*d+h*o,l=l*d+m*o,u=u*d+_*o,f=f*d+S*o}else{c=c*d+h*o,l=l*d+m*o,u=u*d+_*o,f=f*d+S*o;const y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],h=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+u*f+c*m-l*h,t[e+1]=c*_+u*h+l*f-o*m,t[e+2]=l*_+u*m+o*h-c*f,t[e+3]=u*_-o*f-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),h=c(n/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f+h*m*_;break;case"YZX":this._x=h*u*f+l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f-h*m*_;break;case"XZY":this._x=h*u*f-l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f+h*m*_;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $a=class $a{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(po.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(po.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ir.copy(this).projectOnVector(t),this.sub(ir)}reflect(t){return this.sub(ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$a.prototype.isVector3=!0;let B=$a;const ir=new B,po=new Ai,Ya=class Ya{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],_=n[8],S=s[0],p=s[3],d=s[6],y=s[1],R=s[4],M=s[7],b=s[2],w=s[5],A=s[8];return r[0]=a*S+o*y+c*b,r[3]=a*p+o*R+c*w,r[6]=a*d+o*M+c*A,r[1]=l*S+u*y+f*b,r[4]=l*p+u*R+f*w,r[7]=l*d+u*M+f*A,r[2]=h*S+m*y+_*b,r[5]=h*p+m*R+_*w,r[8]=h*d+m*M+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,m=l*r-a*c,_=e*f+n*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=f*S,t[1]=(s*l-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*c)*S,t[5]=(s*r-o*e)*S,t[6]=m*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sr.makeScale(t,e)),this}rotate(t){return bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sr.makeRotation(-t)),this}translate(t,e){return bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ya.prototype.isMatrix3=!0;let Dt=Ya;const sr=new Dt,mo=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),go=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ih(){const i={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Os]:{primaries:t,whitePoint:n,transfer:Bs,toXYZ:mo,fromXYZ:go,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:te,toXYZ:mo,fromXYZ:go,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}const Wt=ih();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ii;class sh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ii===void 0&&(ii=zs("canvas")),ii.width=t.width,ii.height=t.height;const s=ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rh=0;class Oa{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rr(s[a].image)):r.push(rr(s[a]))}else r=rr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}let ah=0;const ar=new B;class Ie extends ti{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=En,s=En,r=Le,a=Yn,o=tn,c=We,l=Ie.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=kn(),this.name="",this.source=new Oa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ar).x}get height(){return this.source.getSize(ar).y}get depth(){return this.source.getSize(ar).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wr:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case Xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wr:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case Xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Pl;Ie.DEFAULT_ANISOTROPY=1;const Ka=class Ka{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],_=c[9],S=c[2],p=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(l+1)/2,M=(m+1)/2,b=(d+1)/2,w=(u+h)/4,A=(f+S)/4,v=(_+p)/4;return R>M&&R>b?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=A/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-S)/y,this.z=(h-u)/y,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ka.prototype.isVector4=!0;let fe=Ka;class oh extends ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ie(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Oa(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends oh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kl extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lh extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Vs=class Vs{constructor(t,e,n,s,r,a,o,c,l,u,f,h,m,_,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,f,h,m,_,S,p)}set(t,e,n,s,r,a,o,c,l,u,f,h,m,_,S,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vs().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),a=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,m=a*f,_=o*u,S=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=m+_*l,e[5]=h-S*l,e[9]=-o*c,e[2]=S-h*l,e[6]=_+m*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,m=c*f,_=l*u,S=l*f;e[0]=h+S*o,e[4]=_*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=S+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,m=c*f,_=l*u,S=l*f;e[0]=h-S*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,m=a*f,_=o*u,S=o*f;e[0]=c*u,e[4]=_*l-m,e[8]=h*l+S,e[1]=c*f,e[5]=S*l+h,e[9]=m*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,m=a*l,_=o*c,S=o*l;e[0]=c*u,e[4]=S-h*f,e[8]=_*f+m,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*f+_,e[10]=h-S*f}else if(t.order==="XZY"){const h=a*c,m=a*l,_=o*c,S=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+S,e[5]=a*u,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*u,e[10]=S*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ch,t,hh)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Dn.crossVectors(n,He),Dn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Dn.crossVectors(n,He)),Dn.normalize(),ts.crossVectors(He,Dn),s[0]=Dn.x,s[4]=ts.x,s[8]=He.x,s[1]=Dn.y,s[5]=ts.y,s[9]=He.y,s[2]=Dn.z,s[6]=ts.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],_=n[2],S=n[6],p=n[10],d=n[14],y=n[3],R=n[7],M=n[11],b=n[15],w=s[0],A=s[4],v=s[8],E=s[12],C=s[1],L=s[5],U=s[9],z=s[13],N=s[2],G=s[6],J=s[10],q=s[14],st=s[3],Y=s[7],et=s[11],it=s[15];return r[0]=a*w+o*C+c*N+l*st,r[4]=a*A+o*L+c*G+l*Y,r[8]=a*v+o*U+c*J+l*et,r[12]=a*E+o*z+c*q+l*it,r[1]=u*w+f*C+h*N+m*st,r[5]=u*A+f*L+h*G+m*Y,r[9]=u*v+f*U+h*J+m*et,r[13]=u*E+f*z+h*q+m*it,r[2]=_*w+S*C+p*N+d*st,r[6]=_*A+S*L+p*G+d*Y,r[10]=_*v+S*U+p*J+d*et,r[14]=_*E+S*z+p*q+d*it,r[3]=y*w+R*C+M*N+b*st,r[7]=y*A+R*L+M*G+b*Y,r[11]=y*v+R*U+M*J+b*et,r[15]=y*E+R*z+M*q+b*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],m=t[14],_=t[3],S=t[7],p=t[11],d=t[15],y=c*m-l*h,R=o*m-l*f,M=o*h-c*f,b=a*m-l*u,w=a*h-c*u,A=a*f-o*u;return e*(S*y-p*R+d*M)-n*(_*y-p*b+d*w)+s*(_*R-S*b+d*A)-r*(_*M-S*w+p*A)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],m=t[11],_=t[12],S=t[13],p=t[14],d=t[15],y=e*o-n*a,R=e*c-s*a,M=e*l-r*a,b=n*c-s*o,w=n*l-r*o,A=s*l-r*c,v=u*S-f*_,E=u*p-h*_,C=u*d-m*_,L=f*p-h*S,U=f*d-m*S,z=h*d-m*p,N=y*z-R*U+M*L+b*C-w*E+A*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/N;return t[0]=(o*z-c*U+l*L)*G,t[1]=(s*U-n*z-r*L)*G,t[2]=(S*A-p*w+d*b)*G,t[3]=(h*w-f*A-m*b)*G,t[4]=(c*C-a*z-l*E)*G,t[5]=(e*z-s*C+r*E)*G,t[6]=(p*M-_*A-d*R)*G,t[7]=(u*A-h*M+m*R)*G,t[8]=(a*U-o*C+l*v)*G,t[9]=(n*C-e*U-r*v)*G,t[10]=(_*w-S*M+d*y)*G,t[11]=(f*M-u*w-m*y)*G,t[12]=(o*E-a*L-c*v)*G,t[13]=(e*L-n*E+s*v)*G,t[14]=(S*R-_*b-p*y)*G,t[15]=(u*b-f*R+h*y)*G,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,m=r*u,_=r*f,S=a*u,p=a*f,d=o*f,y=c*l,R=c*u,M=c*f,b=n.x,w=n.y,A=n.z;return s[0]=(1-(S+d))*b,s[1]=(m+M)*b,s[2]=(_-R)*b,s[3]=0,s[4]=(m-M)*w,s[5]=(1-(h+d))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(_+R)*A,s[9]=(p-y)*A,s[10]=(1-(h+S))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=si.set(s[0],s[1],s[2]).length();const o=si.set(s[4],s[5],s[6]).length(),c=si.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Je.copy(this);const l=1/a,u=1/o,f=1/c;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=f,Je.elements[9]*=f,Je.elements[10]*=f,e.setFromRotationMatrix(Je),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=fn,c=!1){const l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),m=(n+s)/(n-s);let _,S;if(c)_=r/(a-r),S=a*r/(a-r);else if(o===fn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Yi)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn,c=!1){const l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),m=-(n+s)/(n-s);let _,S;if(c)_=1/(a-r),S=a/(a-r);else if(o===fn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Yi)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Vs.prototype.isMatrix4=!0;let pe=Vs;const si=new B,Je=new pe,ch=new B(0,0,0),hh=new B(1,1,1),Dn=new B,ts=new B,He=new B,_o=new pe,vo=new Ai;class Hn{constructor(t=0,e=0,n=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _o.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_o,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vo.setFromEuler(this),this.setFromQuaternion(vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dh=0;const xo=new B,ri=new Ai,xn=new pe,es=new B,Li=new B,uh=new B,fh=new Ai,Mo=new B(1,0,0),So=new B(0,1,0),yo=new B(0,0,1),bo={type:"added"},ph={type:"removed"},ai={type:"childadded",child:null},or={type:"childremoved",child:null};class Ee extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new B,e=new Hn,n=new Ai,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Dt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(Mo,t)}rotateY(t){return this.rotateOnAxis(So,t)}rotateZ(t){return this.rotateOnAxis(yo,t)}translateOnAxis(t,e){return xo.copy(t).applyQuaternion(this.quaternion),this.position.add(xo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mo,t)}translateY(t){return this.translateOnAxis(So,t)}translateZ(t){return this.translateOnAxis(yo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?es.copy(t):es.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Li,es,this.up):xn.lookAt(es,Li,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(xn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bo),ai.child=t,this.dispatchEvent(ai),ai.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ph),or.child=t,this.dispatchEvent(or),or.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bo),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,t,uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ee.DEFAULT_UP=new B(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gt extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mh={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const S of t.hand.values()){const p=e.getJointPose(S,n),d=this._getHandJoint(l,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},ns={h:0,s:0,l:0};function cr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=nh(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cr(a,r,t+1/3),this.g=cr(a,r,t),this.b=cr(a,r,t-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=Gl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return Wt.workingToColorSpace(Pe.copy(this),t),Math.round(Xt(Pe.r*255,0,255))*65536+Math.round(Xt(Pe.g*255,0,255))*256+Math.round(Xt(Pe.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Ye){Wt.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(ns);const n=nr(Un.h,ns.h,e),s=nr(Un.s,ns.s,e),r=nr(Un.l,ns.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Bt;Bt.NAMES=Gl;class Ba{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new Ba(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wo extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Qe=new B,Mn=new B,hr=new B,Sn=new B,oi=new B,li=new B,Eo=new B,dr=new B,ur=new B,fr=new B,pr=new fe,mr=new fe,gr=new fe;class Ke{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),Mn.subVectors(n,e),hr.subVectors(t,e);const a=Qe.dot(Qe),o=Qe.dot(Mn),c=Qe.dot(hr),l=Mn.dot(Mn),u=Mn.dot(hr),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(l*c-o*u)*h,_=(a*u-o*c)*h;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(a,Sn.y),c.addScaledVector(o,Sn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return pr.setScalar(0),mr.setScalar(0),gr.setScalar(0),pr.fromBufferAttribute(t,e),mr.fromBufferAttribute(t,n),gr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(pr,r.x),a.addScaledVector(mr,r.y),a.addScaledVector(gr,r.z),a}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),Mn.subVectors(t,e),Qe.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Qe.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;oi.subVectors(s,n),li.subVectors(r,n),dr.subVectors(t,n);const c=oi.dot(dr),l=li.dot(dr);if(c<=0&&l<=0)return e.copy(n);ur.subVectors(t,s);const u=oi.dot(ur),f=li.dot(ur);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(oi,a);fr.subVectors(t,r);const m=oi.dot(fr),_=li.dot(fr);if(_>=0&&m<=_)return e.copy(r);const S=m*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(li,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Eo.subVectors(r,s),o=(f-u)/(f-u+(m-_)),e.copy(s).addScaledVector(Eo,o);const d=1/(p+S+h);return a=S*d,o=h*d,e.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Zi{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(t.matrixWorld),this.union(is)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),ss.subVectors(this.max,Ii),ci.subVectors(t.a,Ii),hi.subVectors(t.b,Ii),di.subVectors(t.c,Ii),Nn.subVectors(hi,ci),Fn.subVectors(di,hi),Vn.subVectors(ci,di);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Vn.z,Vn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Vn.z,0,-Vn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Vn.y,Vn.x,0];return!_r(e,ci,hi,di,ss)||(e=[1,0,0,0,1,0,0,0,1],!_r(e,ci,hi,di,ss))?!1:(rs.crossVectors(Nn,Fn),e=[rs.x,rs.y,rs.z],_r(e,ci,hi,di,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const yn=[new B,new B,new B,new B,new B,new B,new B,new B],je=new B,is=new Zi,ci=new B,hi=new B,di=new B,Nn=new B,Fn=new B,Vn=new B,Ii=new B,ss=new B,rs=new B,Wn=new B;function _r(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wn.fromArray(i,r);const o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),c=t.dot(Wn),l=e.dot(Wn),u=n.dot(Wn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ve=new B,as=new Ut;let gh=0;class mn extends ti{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bl,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Vl extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wl extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const _h=new Zi,Di=new B,vr=new B;class za{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_h.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);const e=Di.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Di,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add(vr)),this.expandByPoint(Di.copy(t.center).sub(vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let vh=0;const qe=new pe,xr=new Ee,ui=new B,Ge=new Zi,Ui=new Zi,we=new B;class Fe extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qc(t)?Wl:Vl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return xr.lookAt(t),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Ge.min,Ui.min),Ge.expandByPoint(we),we.addVectors(Ge.max,Ui.max),Ge.expandByPoint(we)):(Ge.expandByPoint(Ui.min),Ge.expandByPoint(Ui.max))}Ge.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)we.fromBufferAttribute(o,l),c&&(ui.fromBufferAttribute(t,l),we.add(ui)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new B,c[v]=new B;const l=new B,u=new B,f=new B,h=new Ut,m=new Ut,_=new Ut,S=new B,p=new B;function d(v,E,C){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,C),h.fromBufferAttribute(r,v),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,C),u.sub(l),f.sub(l),m.sub(h),_.sub(h);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(L),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(L),o[v].add(S),o[E].add(S),o[C].add(S),c[v].add(p),c[E].add(p),c[C].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,E=y.length;v<E;++v){const C=y[v],L=C.start,U=C.count;for(let z=L,N=L+U;z<N;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const R=new B,M=new B,b=new B,w=new B;function A(v){b.fromBufferAttribute(s,v),w.copy(b);const E=o[v];R.copy(E),R.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(w,E);const L=M.dot(c[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,L)}for(let v=0,E=y.length;v<E;++v){const C=y[v],L=C.start,U=C.count;for(let z=L,N=L+U;z<N;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,u=new B,f=new B;if(t)for(let h=0,m=t.count;h<m;h+=3){const _=t.getX(h+0),S=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let m=0,_=0;for(let S=0,p=c.length;S<p;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*u;for(let d=0;d<u;d++)h[_++]=l[m++]}return new mn(h,u,f)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=t(h,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bl,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Ue=new B;class Hs{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ks("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ks("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mr=new B,Mh=new B,Sh=new Dt;class Bn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Mr.subVectors(n,e).cross(Mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Mr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sh.getNormalMatrix(t),s=this.coplanarPoint(Mr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let yh=0;class Ri extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Wi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=yl,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xl extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fi;const Ni=new B,pi=new B,mi=new B,gi=new Ut,Fi=new Ut,ql=new pe,os=new B,Oi=new B,ls=new B,To=new Ut,Sr=new Ut,Ao=new Ut;class bh extends Ee{constructor(t=new Xl){if(super(),this.isSprite=!0,this.type="Sprite",fi===void 0){fi=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xh(e,5);fi.setIndex([0,1,2,0,2,3]),fi.setAttribute("position",new Hs(n,3,0,!1)),fi.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=fi,this.material=t,this.center=new Ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pi.setFromMatrixScale(this.matrixWorld),ql.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pi.multiplyScalar(-mi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;cs(os.set(-.5,-.5,0),mi,a,pi,s,r),cs(Oi.set(.5,-.5,0),mi,a,pi,s,r),cs(ls.set(.5,.5,0),mi,a,pi,s,r),To.set(0,0),Sr.set(1,0),Ao.set(1,1);let o=t.ray.intersectTriangle(os,Oi,ls,!1,Ni);if(o===null&&(cs(Oi.set(-.5,.5,0),mi,a,pi,s,r),Sr.set(0,1),o=t.ray.intersectTriangle(os,ls,Oi,!1,Ni),o===null))return;const c=t.ray.origin.distanceTo(Ni);c<t.near||c>t.far||e.push({distance:c,point:Ni.clone(),uv:Ke.getInterpolation(Ni,os,Oi,ls,To,Sr,Ao,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function cs(i,t,e,n,s,r){gi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fi.x=r*gi.x-s*gi.y,Fi.y=s*gi.x+r*gi.y):Fi.copy(gi),i.copy(t),i.x+=Fi.x,i.y+=Fi.y,i.applyMatrix4(ql)}const bn=new B,yr=new B,hs=new B,ds=new B;class wh{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yr.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),ds.copy(this.origin).sub(yr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(hs),o=ds.dot(this.direction),c=-ds.dot(hs),l=ds.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*c-o,h=a*o-c,_=r*u,f>=0)if(h>=-_)if(h<=_){const S=1/u;f*=S,h*=S,m=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yr).addScaledVector(hs,h),m}intersectSphere(t,e){if(t.radius<0)return null;bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,m=t.z-a.z,_=e.x-a.x,S=e.y-a.y,p=e.z-a.z,d=n.x-a.x,y=n.y-a.y,R=n.z-a.z,M=Math.abs(c),b=Math.abs(l),w=Math.abs(u);let A,v,E,C,L,U,z,N,G,J,q,st;if(M>=b&&M>=w?(E=c,U=f,G=_,st=d,c>=0?(A=l,v=u,C=h,L=m,z=S,N=p,J=y,q=R):(A=u,v=l,C=m,L=h,z=p,N=S,J=R,q=y)):b>=w?(E=l,U=h,G=S,st=y,l>=0?(A=u,v=c,C=m,L=f,z=p,N=_,J=R,q=d):(A=c,v=u,C=f,L=m,z=_,N=p,J=d,q=R)):(E=u,U=m,G=p,st=R,u>=0?(A=c,v=l,C=f,L=h,z=_,N=S,J=d,q=y):(A=l,v=c,C=h,L=f,z=S,N=_,J=y,q=d)),E===0)return null;const Y=A/E,et=v/E,it=1/E,Ct=C-Y*U,At=L-et*U,se=z-Y*G,qt=N-et*G,Zt=J-Y*st,K=q-et*st,tt=Zt*qt-K*se,Mt=Ct*K-At*Zt,It=se*At-qt*Ct;if(s){if(tt<0||Mt<0||It<0)return null}else if((tt<0||Mt<0||It<0)&&(tt>0||Mt>0||It>0))return null;const vt=tt+Mt+It;if(vt===0)return null;const zt=it*(tt*U+Mt*G+It*st);return(vt>0?zt<0:zt>0)?null:this.at(zt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ro=new pe,Xn=new wh,us=new za,Co=new B,fs=new B,ps=new B,ms=new B,br=new B,gs=new B,Po=new B,_s=new B;class W extends Ee{constructor(t=new Fe,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){gs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(br.fromBufferAttribute(f,t),a?gs.addScaledVector(br,u):gs.addScaledVector(br.sub(e),u))}e.add(gs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(us.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(us,Co)===null||Xn.origin.distanceToSquared(Co)>(t.far-t.near)**2))&&(Ro.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(Ro),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const p=h[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),R=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,b=R;M<b;M+=3){const w=o.getX(M),A=o.getX(M+1),v=o.getX(M+2);s=vs(this,d,t,n,l,u,f,w,A,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=_,d=S;p<d;p+=3){const y=o.getX(p),R=o.getX(p+1),M=o.getX(p+2);s=vs(this,a,t,n,l,u,f,y,R,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const p=h[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),R=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,b=R;M<b;M+=3){const w=M,A=M+1,v=M+2;s=vs(this,d,t,n,l,u,f,w,A,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let p=_,d=S;p<d;p+=3){const y=p,R=p+1,M=p+2;s=vs(this,a,t,n,l,u,f,y,R,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Eh(i,t,e,n,s,r,a,o){let c;if(t.side===ze?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Zn,o),c===null)return null;_s.copy(o),_s.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_s);return l<e.near||l>e.far?null:{distance:l,point:_s.clone(),object:i}}function vs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,fs),i.getVertexPosition(c,ps),i.getVertexPosition(l,ms);const u=Eh(i,t,e,n,fs,ps,ms,Po);if(u){const f=new B;Ke.getBarycoord(Po,fs,ps,ms,f),s&&(u.uv=Ke.getInterpolatedAttribute(s,o,c,l,f,new Ut)),r&&(u.uv1=Ke.getInterpolatedAttribute(r,o,c,l,f,new Ut)),a&&(u.normal=Ke.getInterpolatedAttribute(a,o,c,l,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new B,materialIndex:0};Ke.getNormal(fs,ps,ms,h.normal),u.face=h,u.barycoord=f}return u}class Th extends Ie{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Te,u=Te,f,h){super(null,a,o,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qn=new za,Ah=new Ut(.5,.5),xs=new B;class ka{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],m=r[7],_=r[8],S=r[9],p=r[10],d=r[11],y=r[12],R=r[13],M=r[14],b=r[15];if(s[0].setComponents(l-a,m-u,d-_,b-y).normalize(),s[1].setComponents(l+a,m+u,d+_,b+y).normalize(),s[2].setComponents(l+o,m+f,d+S,b+R).normalize(),s[3].setComponents(l-o,m-f,d-S,b-R).normalize(),n)s[4].setComponents(c,h,p,M).normalize(),s[5].setComponents(l-c,m-h,d-p,b-M).normalize();else if(s[4].setComponents(l-c,m-h,d-p,b-M).normalize(),e===fn)s[5].setComponents(l+c,m+h,d+p,b+M).normalize();else if(e===Yi)s[5].setComponents(c,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){qn.center.set(0,0,0);const e=Ah.distanceTo(t.center);return qn.radius=.7071067811865476+e,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xs.x=s.normal.x>0?t.max.x:t.min.x,xs.y=s.normal.y>0?t.max.y:t.min.y,xs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $l extends Ie{constructor(t=[],e=Jn,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rh extends Ie{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ki extends Ie{constructor(t,e,n=gn,s,r,a,o=Te,c=Te,l,u=Cn,f=1){if(u!==Cn&&u!==Kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Oa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ch extends Ki{constructor(t,e=gn,n=Jn,s,r,a=Te,o=Te,c,l=Cn){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yl extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class dt extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(f,2));function _(S,p,d,y,R,M,b,w,A,v,E){const C=M/A,L=b/v,U=M/2,z=b/2,N=w/2,G=A+1,J=v+1;let q=0,st=0;const Y=new B;for(let et=0;et<J;et++){const it=et*L-z;for(let Ct=0;Ct<G;Ct++){const At=Ct*C-U;Y[S]=At*y,Y[p]=it*R,Y[d]=N,l.push(Y.x,Y.y,Y.z),Y[S]=0,Y[p]=0,Y[d]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Ct/A),f.push(1-et/v),q+=1}}for(let et=0;et<v;et++)for(let it=0;it<A;it++){const Ct=h+it+G*et,At=h+it+G*(et+1),se=h+(it+1)+G*(et+1),qt=h+(it+1)+G*et;c.push(Ct,At,qt),c.push(At,se,qt),st+=6}o.addGroup(m,st,E),m+=st,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class jn extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new B,u=new Ut;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const m=n+f/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ue extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],m=[];let _=0;const S=[],p=n/2;let d=0;y(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(m,2));function y(){const M=new B,b=new B;let w=0;const A=(e-t)/n;for(let v=0;v<=r;v++){const E=[],C=v/r,L=C*(e-t)+t;for(let U=0;U<=s;U++){const z=U/s,N=z*c+o,G=Math.sin(N),J=Math.cos(N);b.x=L*G,b.y=-C*n+p,b.z=L*J,f.push(b.x,b.y,b.z),M.set(G,A,J).normalize(),h.push(M.x,M.y,M.z),m.push(z,1-C),E.push(_++)}S.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){const C=S[E][v],L=S[E+1][v],U=S[E+1][v+1],z=S[E][v+1];(t>0||E!==0)&&(u.push(C,L,z),w+=3),(e>0||E!==r-1)&&(u.push(L,U,z),w+=3)}l.addGroup(d,w,0),d+=w}function R(M){const b=_,w=new Ut,A=new B;let v=0;const E=M===!0?t:e,C=M===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,p*C,0),h.push(0,C,0),m.push(.5,.5),_++;const L=_;for(let U=0;U<=s;U++){const N=U/s*c+o,G=Math.cos(N),J=Math.sin(N);A.x=E*J,A.y=p*C,A.z=E*G,f.push(A.x,A.y,A.z),h.push(0,C,0),w.x=G*.5+.5,w.y=J*.5*C+.5,m.push(w.x,w.y),_++}for(let U=0;U<s;U++){const z=b+U,N=L+U;M===!0?u.push(N,N+1,z):u.push(N+1,N,z),v+=3}l.addGroup(d,v,M===!0?1:2),d+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ke extends ue{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ke(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Me extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=t/o,h=e/c,m=[],_=[],S=[],p=[];for(let d=0;d<u;d++){const y=d*h-a;for(let R=0;R<l;R++){const M=R*f-r;_.push(M,-y,0),S.push(0,0,1),p.push(R/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){const R=y+l*d,M=y+l*(d+1),b=y+1+l*(d+1),w=y+1+l*d;m.push(R,M,w),m.push(M,b,w)}this.setIndex(m),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(S,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ci extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let f=t;const h=(e-t)/s,m=new B,_=new Ut;for(let S=0;S<=s;S++){for(let p=0;p<=n;p++){const d=r+p/n*a;m.x=f*Math.cos(d),m.y=f*Math.sin(d),c.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,u.push(_.x,_.y)}f+=h}for(let S=0;S<s;S++){const p=S*(n+1);for(let d=0;d<n;d++){const y=d+p,R=y,M=y+n+1,b=y+n+2,w=y+1;o.push(R,M,w),o.push(M,b,w)}}this.setIndex(o),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class nn extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new B,h=new B,m=[],_=[],S=[],p=[];for(let d=0;d<=n;d++){const y=[],R=d/n,M=a+R*o,b=t*Math.cos(M),w=Math.sqrt(t*t-b*b);let A=0;d===0&&a===0?A=.5/e:d===n&&c===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){const E=v/e,C=s+E*r;f.x=-w*Math.cos(C),f.y=b,f.z=w*Math.sin(C),_.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),p.push(E+A,1-R),y.push(l++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const R=u[d][y+1],M=u[d][y],b=u[d+1][y],w=u[d+1][y+1];(d!==0||a>0)&&m.push(R,M,w),(d!==n-1||c<Math.PI)&&m.push(M,b,w)}this.setIndex(m),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(S,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ha extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],f=[],h=new B,m=new B,_=new B;for(let S=0;S<=n;S++){const p=a+S/n*o;for(let d=0;d<=s;d++){const y=d/s*r;m.x=(t+e*Math.cos(p))*Math.cos(y),m.y=(t+e*Math.cos(p))*Math.sin(y),m.z=e*Math.sin(p),l.push(m.x,m.y,m.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),_.subVectors(m,h).normalize(),u.push(_.x,_.y,_.z),f.push(d/s),f.push(S/n)}}for(let S=1;S<=n;S++)for(let p=1;p<=s;p++){const d=(s+1)*S+p-1,y=(s+1)*(S-1)+p-1,R=(s+1)*(S-1)+p,M=(s+1)*S+p;c.push(d,y,M),c.push(y,R,M)}this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Ti(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Lo(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Lo(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=Ti(i[e]);for(const s in n)t[s]=n[s]}return t}function Lo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ph(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Lh={clone:Ti,merge:Ne};var Ih=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ih,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=Ph(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new fe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Uh extends vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bi extends Ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Ra,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nh extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fh extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ga extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Oh extends Ga{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const wr=new pe,Io=new B,Do=new B;class Bh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=We,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Io.setFromMatrixPosition(t.matrixWorld),e.position.copy(Io),Do.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Do),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(wr,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Yi||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ms=new B,Ss=new Ai,an=new B;class Zl extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ms,Ss,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ms,Ss,an.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ms,Ss,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ms,Ss,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const On=new B,Uo=new Ut,No=new Ut;class Ve extends Zl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Uo,No),e.subVectors(No,Uo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Va extends Zl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zh extends Bh{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kh extends Ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new zh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Hh extends Ga{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const _i=-90,vi=1;class Gh extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(_i,vi,t,e);s.layers=this.layers,this.add(s);const r=new Ve(_i,vi,t,e);r.layers=this.layers,this.add(r);const a=new Ve(_i,vi,t,e);a.layers=this.layers,this.add(a);const o=new Ve(_i,vi,t,e);o.layers=this.layers,this.add(o);const c=new Ve(_i,vi,t,e);c.layers=this.layers,this.add(c);const l=new Ve(_i,vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Vh extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Za=class Za{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Za.prototype.isMatrix2=!0;let Fo=Za;function Oo(i,t,e,n){const s=Wh(n);switch(e){case Nl:return i*t;case Ol:return i*t/s.components*s.byteLength;case Ia:return i*t/s.components*s.byteLength;case Qn:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Fl:return i*t*3/s.components*s.byteLength;case tn:return i*t*4/s.components*s.byteLength;case Ua:return i*t*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Is:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $r:case Kr:return Math.max(i,16)*Math.max(t,8)/4;case qr:case Yr:return Math.max(i,8)*Math.max(t,8)/2;case Zr:case Jr:case jr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:case Ns:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ga:case _a:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xa:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fs:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wh(i){switch(i){case We:case Ll:return{byteLength:1,components:1};case qi:case Il:case _n:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case gn:case Ca:case un:return{byteLength:4,components:1};case Dl:case Ul:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jl(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xh(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],S=f[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const S=f[m];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
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
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,td=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rd=`#ifdef USE_IRIDESCENCE
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
#endif`,ad=`#ifdef USE_BUMPMAP
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,md=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_d=`vec3 transformedNormal = objectNormal;
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
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Bd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Wd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Xd=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nu=`#if defined( USE_POINTS_UV )
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
#endif`,iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,su=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lu=`#ifdef USE_MORPHTARGETS
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
#endif`,cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,du=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mu=`#ifdef USE_NORMALMAP
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
#endif`,gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_u=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Su=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Au=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ru=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Pu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Lu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,Iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Du=`#ifdef USE_SKINNING
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
#endif`,Uu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nu=`#ifdef USE_SKINNING
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
#endif`,Fu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ku=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hu=`#ifdef USE_TRANSMISSION
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
#endif`,Gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$u=`uniform sampler2D t2D;
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
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ku=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`#include <common>
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
}`,ju=`#if DEPTH_PACKING == 3200
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
}`,tf=`#define DISTANCE
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
}`,ef=`#define DISTANCE
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
void main() {
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
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
}`,af=`uniform vec3 diffuse;
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
}`,of=`#include <common>
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
}`,lf=`uniform vec3 diffuse;
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
}`,cf=`#define LAMBERT
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
}`,hf=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,df=`#define MATCAP
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
}`,uf=`#define MATCAP
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
}`,ff=`#define NORMAL
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
}`,pf=`#define NORMAL
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
}`,mf=`#define PHONG
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
}`,gf=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_f=`#define STANDARD
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
}`,vf=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,xf=`#define TOON
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
}`,Mf=`#define TOON
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
}`,Sf=`uniform float size;
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
}`,yf=`uniform vec3 diffuse;
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
}`,bf=`#include <common>
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
}`,wf=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,Ef=`uniform float rotation;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:qh,alphahash_pars_fragment:$h,alphamap_fragment:Yh,alphamap_pars_fragment:Kh,alphatest_fragment:Zh,alphatest_pars_fragment:Jh,aomap_fragment:Qh,aomap_pars_fragment:jh,batching_pars_vertex:td,batching_vertex:ed,begin_vertex:nd,beginnormal_vertex:id,bsdfs:sd,iridescence_fragment:rd,bumpmap_pars_fragment:ad,clipping_planes_fragment:od,clipping_planes_pars_fragment:ld,clipping_planes_pars_vertex:cd,clipping_planes_vertex:hd,color_fragment:dd,color_pars_fragment:ud,color_pars_vertex:fd,color_vertex:pd,common:md,cube_uv_reflection_fragment:gd,defaultnormal_vertex:_d,displacementmap_pars_vertex:vd,displacementmap_vertex:xd,emissivemap_fragment:Md,emissivemap_pars_fragment:Sd,colorspace_fragment:yd,colorspace_pars_fragment:bd,envmap_fragment:wd,envmap_common_pars_fragment:Ed,envmap_pars_fragment:Td,envmap_pars_vertex:Ad,envmap_physical_pars_fragment:Bd,envmap_vertex:Rd,fog_vertex:Cd,fog_pars_vertex:Pd,fog_fragment:Ld,fog_pars_fragment:Id,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Ud,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Fd,lights_pars_begin:Od,lights_toon_fragment:zd,lights_toon_pars_fragment:kd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:qd,lights_fragment_end:$d,lightprobes_pars_fragment:Yd,logdepthbuf_fragment:Kd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:Jd,logdepthbuf_vertex:Qd,map_fragment:jd,map_pars_fragment:tu,map_particle_fragment:eu,map_particle_pars_fragment:nu,metalnessmap_fragment:iu,metalnessmap_pars_fragment:su,morphinstance_vertex:ru,morphcolor_vertex:au,morphnormal_vertex:ou,morphtarget_pars_vertex:lu,morphtarget_vertex:cu,normal_fragment_begin:hu,normal_fragment_maps:du,normal_pars_fragment:uu,normal_pars_vertex:fu,normal_vertex:pu,normalmap_pars_fragment:mu,clearcoat_normal_fragment_begin:gu,clearcoat_normal_fragment_maps:_u,clearcoat_pars_fragment:vu,iridescence_pars_fragment:xu,opaque_fragment:Mu,packing:Su,premultiplied_alpha_fragment:yu,project_vertex:bu,dithering_fragment:wu,dithering_pars_fragment:Eu,roughnessmap_fragment:Tu,roughnessmap_pars_fragment:Au,shadowmap_pars_fragment:Ru,shadowmap_pars_vertex:Cu,shadowmap_vertex:Pu,shadowmask_pars_fragment:Lu,skinbase_vertex:Iu,skinning_pars_vertex:Du,skinning_vertex:Uu,skinnormal_vertex:Nu,specularmap_fragment:Fu,specularmap_pars_fragment:Ou,tonemapping_fragment:Bu,tonemapping_pars_fragment:zu,transmission_fragment:ku,transmission_pars_fragment:Hu,uv_pars_fragment:Gu,uv_pars_vertex:Vu,uv_vertex:Wu,worldpos_vertex:Xu,background_vert:qu,background_frag:$u,backgroundCube_vert:Yu,backgroundCube_frag:Ku,cube_vert:Zu,cube_frag:Ju,depth_vert:Qu,depth_frag:ju,distance_vert:tf,distance_frag:ef,equirect_vert:nf,equirect_frag:sf,linedashed_vert:rf,linedashed_frag:af,meshbasic_vert:of,meshbasic_frag:lf,meshlambert_vert:cf,meshlambert_frag:hf,meshmatcap_vert:df,meshmatcap_frag:uf,meshnormal_vert:ff,meshnormal_frag:pf,meshphong_vert:mf,meshphong_frag:gf,meshphysical_vert:_f,meshphysical_frag:vf,meshtoon_vert:xf,meshtoon_frag:Mf,points_vert:Sf,points_frag:yf,shadow_vert:bf,shadow_frag:wf,sprite_vert:Ef,sprite_frag:Tf},ft={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},hn={basic:{uniforms:Ne([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ne([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ne([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ne([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ne([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ne([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ne([ft.points,ft.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ne([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ne([ft.common,ft.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ne([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ne([ft.sprite,ft.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:Ne([ft.common,ft.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:Ne([ft.lights,ft.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};hn.physical={uniforms:Ne([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ys={r:0,b:0,g:0},Af=new pe,Ql=new Dt;Ql.set(-1,0,0,0,1,0,0,0,1);function Rf(i,t,e,n,s,r){const a=new Bt(0);let o=s===!0?0:1,c,l,u=null,f=0,h=null;function m(y){let R=y.isScene===!0?y.background:null;if(R&&R.isTexture){const M=y.backgroundBlurriness>0;R=t.get(R,M)}return R}function _(y){let R=!1;const M=m(y);M===null?p(a,o):M&&M.isColor&&(p(M,1),R=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,R){const M=m(R);M&&(M.isCubeTexture||M.mapping===Ws)?(l===void 0&&(l=new W(new dt(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Ti(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Af.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ql),l.material.toneMapped=Wt.getTransfer(M.colorSpace)!==te,(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new W(new Me(2,2),new vn({name:"BackgroundMaterial",uniforms:Ti(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,R){y.getRGB(ys,Kl(i)),e.buffers.color.setClear(ys.r,ys.g,ys.b,R,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,R=1){a.set(y),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:_,addToRenderList:S,dispose:d}}function Cf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(L,U,z,N,G){let J=!1;const q=f(L,N,z,U);r!==q&&(r=q,l(r.object)),J=m(L,N,z,G),J&&_(L,N,z,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(L,U,z,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function f(L,U,z,N){const G=N.wireframe===!0;let J=n[U.id];J===void 0&&(J={},n[U.id]=J);const q=L.isInstancedMesh===!0?L.id:0;let st=J[q];st===void 0&&(st={},J[q]=st);let Y=st[z.id];Y===void 0&&(Y={},st[z.id]=Y);let et=Y[G];return et===void 0&&(et=h(c()),Y[G]=et),et}function h(L){const U=[],z=[],N=[];for(let G=0;G<e;G++)U[G]=0,z[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:N,object:L,attributes:{},index:null}}function m(L,U,z,N){const G=r.attributes,J=U.attributes;let q=0;const st=z.getAttributes();for(const Y in st)if(st[Y].location>=0){const it=G[Y];let Ct=J[Y];if(Ct===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Ct=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Ct=L.instanceColor)),it===void 0||it.attribute!==Ct||Ct&&it.data!==Ct.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function _(L,U,z,N){const G={},J=U.attributes;let q=0;const st=z.getAttributes();for(const Y in st)if(st[Y].location>=0){let it=J[Y];it===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));const Ct={};Ct.attribute=it,it&&it.data&&(Ct.data=it.data),G[Y]=Ct,q++}r.attributes=G,r.attributesNum=q,r.index=N}function S(){const L=r.newAttributes;for(let U=0,z=L.length;U<z;U++)L[U]=0}function p(L){d(L,0)}function d(L,U){const z=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;z[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),G[L]!==U&&(i.vertexAttribDivisor(L,U),G[L]=U)}function y(){const L=r.newAttributes,U=r.enabledAttributes;for(let z=0,N=U.length;z<N;z++)U[z]!==L[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function R(L,U,z,N,G,J,q){q===!0?i.vertexAttribIPointer(L,U,z,G,J):i.vertexAttribPointer(L,U,z,N,G,J)}function M(L,U,z,N){S();const G=N.attributes,J=z.getAttributes(),q=U.defaultAttributeValues;for(const st in J){const Y=J[st];if(Y.location>=0){let et=G[st];if(et===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(et=L.instanceColor)),et!==void 0){const it=et.normalized,Ct=et.itemSize,At=t.get(et);if(At===void 0)continue;const se=At.buffer,qt=At.type,Zt=At.bytesPerElement,K=qt===i.INT||qt===i.UNSIGNED_INT||et.gpuType===Ca;if(et.isInterleavedBufferAttribute){const tt=et.data,Mt=tt.stride,It=et.offset;if(tt.isInstancedInterleavedBuffer){for(let vt=0;vt<Y.locationSize;vt++)d(Y.location+vt,tt.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let vt=0;vt<Y.locationSize;vt++)p(Y.location+vt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let vt=0;vt<Y.locationSize;vt++)R(Y.location+vt,Ct/Y.locationSize,qt,it,Mt*Zt,(It+Ct/Y.locationSize*vt)*Zt,K)}else{if(et.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)d(Y.location+tt,et.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let tt=0;tt<Y.locationSize;tt++)p(Y.location+tt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let tt=0;tt<Y.locationSize;tt++)R(Y.location+tt,Ct/Y.locationSize,qt,it,Ct*Zt,Ct/Y.locationSize*tt*Zt,K)}}else if(q!==void 0){const it=q[st];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(Y.location,it);break;case 3:i.vertexAttrib3fv(Y.location,it);break;case 4:i.vertexAttrib4fv(Y.location,it);break;default:i.vertexAttrib1fv(Y.location,it)}}}}y()}function b(){E();for(const L in n){const U=n[L];for(const z in U){const N=U[z];for(const G in N){const J=N[G];for(const q in J)u(J[q].object),delete J[q];delete N[G]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const z in U){const N=U[z];for(const G in N){const J=N[G];for(const q in J)u(J[q].object),delete J[q];delete N[G]}}delete n[L.id]}function A(L){for(const U in n){const z=n[U];for(const N in z){const G=z[N];if(G[L.id]===void 0)continue;const J=G[L.id];for(const q in J)u(J[q].object),delete J[q];delete G[L.id]}}}function v(L){for(const U in n){const z=n[U],N=L.isInstancedMesh===!0?L.id:0,G=z[N];if(G!==void 0){for(const J in G){const q=G[J];for(const st in q)u(q[st].object),delete q[st];delete G[J]}delete z[N],Object.keys(z).length===0&&delete n[U]}}}function E(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:p,disableUnusedAttributes:y}}function Pf(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let m=0;m<u;m++)h+=l[m];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==We&&A!==un&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Lt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:y,maxVaryings:R,maxFragmentUniforms:M,maxSamples:b,samples:w}}function If(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Bn,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||s;return s=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?u(null):l();else{const y=r?0:n,R=y*4;let M=d.clippingState||null;c.value=M,M=u(_,h,R,m);for(let b=0;b!==R;++b)M[b]=e[b];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,m,_){const S=f!==null?f.length:0;let p=null;if(S!==0){if(p=c.value,_!==!0||p===null){const d=m+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let R=0,M=m;R!==S;++R,M+=4)a.copy(f[R]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}const Si=4,Df=6,Uf=20,Nf=256,zi=new Va,Bo=new Bt;let Er=null,Tr=0,Ar=0,Rr=!1;const Ff=new B,$n=new B;class zo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Ff}=r;Er=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Er,Tr,Ar),this._renderer.xr.enabled=Rr,t.scissorTest=!1,xi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jn||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Er=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:_n,format:tn,colorSpace:Os,depthBuffer:!1},s=ko(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ko(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Of(r)),this._blurMaterial=zf(r,t,e),this._ggxMaterial=Bf(r,t,e)}return s}_compileMaterial(t){const e=new W(new Fe,t);this._renderer.compile(e,zi)}_sceneToCubeUV(t,e,n,s,r){const c=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(Bo),f.toneMapping=pn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new dt,new Rn({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let d=!1;const y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,d=!0):(p.color.copy(Bo),d=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[R],r.y,r.z)):M===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[R]));const b=this._cubeSize;xi(s,M*b,R>2?b:0,b,b),f.setRenderTarget(s),d&&f.render(S,c),f.render(t,c)}f.toneMapping=m,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Jn||t.mapping===Ei;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;xi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,zi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,m=f*h,{_lodMax:_}=this,S=this._sizeLods[n],p=3*S*(n>_-Si?n-_+Si:0),d=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=_-e,xi(r,p,d,3*S,2*S),s.setRenderTarget(r),s.render(o,zi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,xi(t,p,d,3*S,2*S),s.setRenderTarget(t),s.render(o,zi)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-Si?s-this._lodMax+Si:0),h=4*(this._cubeSize-u);xi(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,zi)}}function Of(i){const t=[],e=[];let n=i;const s=i-Si+1+Df;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,m=3,_=new Float32Array(m*h*f),S=new Float32Array(m*h*f);for(let d=0;d<f;d++){const y=d%3*2/3-1,R=d>2?0:-1,M=[y,R,0,y+2/3,R,0,y+2/3,R+1,0,y,R,0,y+2/3,R+1,0,y,R+1,0];_.set(M,m*h*d);for(let b=0;b<h;b++){const w=u[b*2]*2-1,A=u[b*2+1]*2-1;d===0?$n.set(1,A,w):d===1?$n.set(-w,1,-A):d===2?$n.set(-w,A,1):d===3?$n.set(-1,A,-w):d===4?$n.set(-w,-1,A):$n.set(w,A,-1),$n.toArray(S,(d*h+b)*m)}}const p=new Fe;p.setAttribute("position",new mn(_,m)),p.setAttribute("outputDirection",new mn(S,m)),e.push(new W(p,null)),n>Si&&n--}return{lodMeshes:e,sizeLods:t}}function ko(i,t,e){const n=new en(i,t,e);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xi(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bf(i,t,e){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xs(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function zf(i,t,e){return new vn({name:"SphericalGaussianBlur",defines:{SAMPLES:Uf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ho(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Go(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Xs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class jl extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $l(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dt(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Tn});r.uniforms.tEquirect.value=e;const a=new W(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Le),new Gh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function kf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===Js||m===Qs)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new jl(_.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,_=m===Js||m===Qs,S=m===Jn||m===Ei;if(_||S){let p=e.get(h);const d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new zo(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return _&&y&&y.height>0||S&&y&&c(y)?(n===null&&(n=new zo(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===Js?h.mapping=Jn:m===Qs&&(h.mapping=Ei),h}function c(h){let m=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&m++;return m===_}function l(h){const m=h.target;m.removeEventListener("dispose",l);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Hf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bi("WebGLRenderer: "+n+" extension not supported."),s}}}function Gf(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const m in h)t.update(h[m],i.ARRAY_BUFFER)}function l(f){const h=[],m=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(m!==null){const y=m.array;S=m.version;for(let R=0,M=y.length;R<M;R+=3){const b=y[R+0],w=y[R+1],A=y[R+2];h.push(b,w,w,A,A,b)}}else{const y=_.array;S=_.version;for(let R=0,M=y.length/3-1;R<M;R+=3){const b=R+0,w=R+1,A=R+2;h.push(b,w,w,A,A,b)}}const p=new(_.count>=65535?Wl:Vl)(h,1);p.version=S;const d=r.get(f);d&&t.remove(d),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Vf(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function l(f,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,f*a,m),e.update(h,n,m))}function u(f,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,m);let S=0;for(let p=0;p<m;p++)S+=h[p];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Wf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xf(i,t,e){const n=new WeakMap,s=new fe;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let C=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var m=C;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),p===!0&&(M=3);let b=o.attributes.position.count*M,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*w*4*f),v=new kl(A,b,w,f);v.type=un,v.needsUpdate=!0;const E=M*4;for(let L=0;L<f;L++){const U=d[L],z=y[L],N=R[L],G=b*w*4*L;for(let J=0;J<U.count;J++){const q=J*E;_===!0&&(s.fromBufferAttribute(U,J),A[G+q+0]=s.x,A[G+q+1]=s.y,A[G+q+2]=s.z,A[G+q+3]=0),S===!0&&(s.fromBufferAttribute(z,J),A[G+q+4]=s.x,A[G+q+5]=s.y,A[G+q+6]=s.z,A[G+q+7]=0),p===!0&&(s.fromBufferAttribute(N,J),A[G+q+8]=s.x,A[G+q+9]=s.y,A[G+q+10]=s.z,A[G+q+11]=N.itemSize===4?s.w:1)}}h={count:f,texture:v,size:new Ut(b,w)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function qf(i,t,e,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const $f={[bl]:"LINEAR_TONE_MAPPING",[wl]:"REINHARD_TONE_MAPPING",[El]:"CINEON_TONE_MAPPING",[Tl]:"ACES_FILMIC_TONE_MAPPING",[Rl]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[Al]:"CUSTOM_TONE_MAPPING"};function Yf(i,t,e,n,s,r){const a=new en(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Fe;l.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new he([0,2,0,0,2,0],2));const u=new Uh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new W(l,u),h=new Va(-1,1,1,-1,0,1);let m=null,_=null,S=!1,p,d=null,y=[],R=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),c!==null&&c.setSize(M,b);for(let w=0;w<y.length;w++){const A=y[w];A.setSize&&A.setSize(M,b)}},this.setEffects=function(M){y=M,R=y.length>0&&y[0].isRenderPass===!0;const b=a.width,w=a.height;y.length>0&&o===null&&(o=new en(b,w,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new en(b,w,{type:_n,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){const v=y[A];v.setSize&&v.setSize(b,w)}},this.begin=function(M,b){if(S||M.toneMapping===pn&&y.length===0)return!1;if(d=b,b!==null){const w=b.width,A=b.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return R===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=pn,!0},this.hasRenderPass=function(){return R},this.end=function(M,b){M.toneMapping=p,S=!0;let w=a,A=o;for(let v=0;v<y.length;v++){const E=y[v];E.enabled!==!1&&(E.render(M,A,w,b),E.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(m!==M.outputColorSpace||_!==M.toneMapping){m=M.outputColorSpace,_=M.toneMapping,u.defines={},Wt.getTransfer(m)===te&&(u.defines.SRGB_TRANSFER="");const v=$f[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(d),M.render(f,h),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const tc=new Ie,wa=new Ki(1,1),ec=new kl,nc=new lh,ic=new $l,Vo=[],Wo=[],Xo=new Float32Array(16),qo=new Float32Array(9),$o=new Float32Array(4);function Pi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Vo[s];if(r===void 0&&(r=new Float32Array(s),Vo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qs(i,t){let e=Wo[t];e===void 0&&(e=new Int32Array(t),Wo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function jf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;$o.set(n),i.uniformMatrix2fv(this.addr,!1,$o),ye(e,n)}}function tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;qo.set(n),i.uniformMatrix3fv(this.addr,!1,qo),ye(e,n)}}function ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;Xo.set(n),i.uniformMatrix4fv(this.addr,!1,Xo),ye(e,n)}}function np(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function hp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wa.compareFunction=e.isReversedDepthBuffer()?Fa:Na,r=wa):r=tc,e.setTexture2D(t||r,s)}function dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nc,s)}function up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ic,s)}function fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ec,s)}function pp(i){switch(i){case 5126:return Kf;case 35664:return Zf;case 35665:return Jf;case 35666:return Qf;case 35674:return jf;case 35675:return tp;case 35676:return ep;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return sp;case 35669:case 35673:return rp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return fp}}function mp(i,t){i.uniform1fv(this.addr,t)}function gp(i,t){const e=Pi(t,this.size,2);i.uniform2fv(this.addr,e)}function _p(i,t){const e=Pi(t,this.size,3);i.uniform3fv(this.addr,e)}function vp(i,t){const e=Pi(t,this.size,4);i.uniform4fv(this.addr,e)}function xp(i,t){const e=Pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mp(i,t){const e=Pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sp(i,t){const e=Pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yp(i,t){i.uniform1iv(this.addr,t)}function bp(i,t){i.uniform2iv(this.addr,t)}function wp(i,t){i.uniform3iv(this.addr,t)}function Ep(i,t){i.uniform4iv(this.addr,t)}function Tp(i,t){i.uniform1uiv(this.addr,t)}function Ap(i,t){i.uniform2uiv(this.addr,t)}function Rp(i,t){i.uniform3uiv(this.addr,t)}function Cp(i,t){i.uniform4uiv(this.addr,t)}function Pp(i,t,e){const n=this.cache,s=t.length,r=qs(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wa:a=tc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Lp(i,t,e){const n=this.cache,s=t.length,r=qs(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nc,r[a])}function Ip(i,t,e){const n=this.cache,s=t.length,r=qs(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ic,r[a])}function Dp(i,t,e){const n=this.cache,s=t.length,r=qs(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ec,r[a])}function Up(i){switch(i){case 5126:return mp;case 35664:return gp;case 35665:return _p;case 35666:return vp;case 35674:return xp;case 35675:return Mp;case 35676:return Sp;case 5124:case 35670:return yp;case 35667:case 35671:return bp;case 35668:case 35672:return wp;case 35669:case 35673:return Ep;case 5125:return Tp;case 36294:return Ap;case 36295:return Rp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Dp}}class Np{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pp(e.type)}}class Fp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Up(e.type)}}class Op{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function Yo(i,t){i.seq.push(t),i.map[t.id]=t}function Bp(i,t,e){const n=i.name,s=n.length;for(Cr.lastIndex=0;;){const r=Cr.exec(n),a=Cr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Yo(e,l===void 0?new Np(o,i,t):new Fp(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Op(o),Yo(e,f)),e=f}}}class Us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Bp(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ko(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const zp=37297;let kp=0;function Hp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Zo=new Dt;function Gp(i){Wt._getMatrix(Zo,Wt.workingColorSpace,i);const t=`mat3( ${Zo.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Bs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hp(i.getShaderSource(t),o)}else return r}function Vp(i,t){const e=Gp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Wp={[bl]:"Linear",[wl]:"Reinhard",[El]:"Cineon",[Tl]:"ACESFilmic",[Rl]:"AgX",[Cl]:"Neutral",[Al]:"Custom"};function Xp(i,t){const e=Wp[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bs=new B;function qp(){Wt.getLuminanceCoefficients(bs);const i=bs.x.toFixed(4),t=bs.y.toFixed(4),e=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $p(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function Yp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vi(i){return i!==""}function Qo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(i){return i.replace(Zp,Qp)}const Jp=new Map;function Qp(i,t){let e=Ot[t];if(e===void 0){const n=Jp.get(t);if(n!==void 0)e=Ot[n],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ea(e)}const jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(i){return i.replace(jp,tm)}function tm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function el(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const em={[Cs]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function nm(i){return em[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const im={[Jn]:"ENVMAP_TYPE_CUBE",[Ei]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE_UV"};function sm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":im[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const rm={[Ei]:"ENVMAP_MODE_REFRACTION"};function am(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const om={[Ra]:"ENVMAP_BLENDING_MULTIPLY",[kc]:"ENVMAP_BLENDING_MIX",[Hc]:"ENVMAP_BLENDING_ADD"};function lm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":om[i.combine]||"ENVMAP_BLENDING_NONE"}function cm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=nm(e),l=sm(e),u=am(e),f=lm(e),h=cm(e),m=$p(e),_=Yp(r),S=s.createProgram();let p,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Vi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Vi).join(`
`),d.length>0&&(d+=`
`)):(p=[el(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),d=[el(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==pn?Xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Vp("linearToOutputTexel",e.outputColorSpace),qp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vi).join(`
`)),a=Ea(a),a=Qo(a,e),a=jo(a,e),o=Ea(o),o=Qo(o,e),o=jo(o,e),a=tl(a),o=tl(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=y+p+a,M=y+d+o,b=Ko(s,s.VERTEX_SHADER,R),w=Ko(s,s.FRAGMENT_SHADER,M);s.attachShader(S,b),s.attachShader(S,w),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function A(L){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(S)||"",z=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(w)||"",G=U.trim(),J=z.trim(),q=N.trim();let st=!0,Y=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,w);else{const et=Jo(s,b,"vertex"),it=Jo(s,w,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+et+`
`+it)}else G!==""?Lt("WebGLProgram: Program Info Log:",G):(J===""||q==="")&&(Y=!1);Y&&(L.diagnostics={runnable:st,programLog:G,vertexShader:{log:J,prefix:p},fragmentShader:{log:q,prefix:d}})}s.deleteShader(b),s.deleteShader(w),v=new Us(s,S),E=Kp(s,S)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(S,zp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kp++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=w,this}let dm=0;class um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fm(t),e.set(t,n)),n}}class fm{constructor(t){this.id=dm++,this.code=t,this.usedTimes=0}}function pm(i){return i===Qn||i===Ns||i===Fs}function mm(i,t,e,n,s,r){const a=new Hl,o=new um,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,E,C,L,U,z){const N=L.fog,G=U.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,st=t.get(v.envMap||J,q),Y=st&&st.mapping===Ws?st.image.height:null,et=m[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Lt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const it=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ct=it!==void 0?it.length:0;let At=0;G.morphAttributes.position!==void 0&&(At=1),G.morphAttributes.normal!==void 0&&(At=2),G.morphAttributes.color!==void 0&&(At=3);let se,qt,Zt,K;if(et){const ae=hn[et];se=ae.vertexShader,qt=ae.fragmentShader}else{se=v.vertexShader,qt=v.fragmentShader;const ae=o.getVertexShaderStage(v),Jt=o.getFragmentShaderStage(v);o.update(v,ae,Jt),Zt=ae.id,K=Jt.id}const tt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),It=U.isInstancedMesh===!0,vt=U.isBatchedMesh===!0,zt=!!v.map,xe=!!v.matcap,kt=!!st,Kt=!!v.aoMap,re=!!v.lightMap,Vt=!!v.bumpMap&&v.wireframe===!1,ce=!!v.normalMap,be=!!v.displacementMap,Oe=!!v.emissiveMap,de=!!v.metalnessMap,ge=!!v.roughnessMap,D=v.anisotropy>0,Ae=v.clearcoat>0,jt=v.dispersion>0,T=v.retroreflectivity>0,g=v.iridescence>0,O=v.sheen>0,V=v.transmission>0,$=D&&!!v.anisotropyMap,rt=Ae&&!!v.clearcoatMap,at=Ae&&!!v.clearcoatNormalMap,Z=Ae&&!!v.clearcoatRoughnessMap,j=g&&!!v.iridescenceMap,ot=g&&!!v.iridescenceThicknessMap,Et=O&&!!v.sheenColorMap,ut=O&&!!v.sheenRoughnessMap,lt=!!v.specularMap,Tt=!!v.specularColorMap,Pt=!!v.specularIntensityMap,Nt=V&&!!v.transmissionMap,I=V&&!!v.thicknessMap,ct=!!v.gradientMap,Q=!!v.alphaMap,ht=v.alphaTest>0,gt=!!v.alphaHash,nt=!!v.extensions;let Rt=pn;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Rt=i.toneMapping);const bt={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:se,fragmentShader:qt,defines:v.defines,customVertexShaderID:Zt,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:vt,batchingColor:vt&&U._colorsTexture!==null,instancing:It,instancingColor:It&&U.instanceColor!==null,instancingMorph:It&&U.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:zt,matcap:xe,envMap:kt,envMapMode:kt&&st.mapping,envMapCubeUVHeight:Y,aoMap:Kt,lightMap:re,bumpMap:Vt,normalMap:ce,displacementMap:be,emissiveMap:Oe,normalMapObjectSpace:ce&&v.normalMapType===Wc,normalMapTangentSpace:ce&&v.normalMapType===ya,packedNormalMap:ce&&v.normalMapType===ya&&pm(v.normalMap.format),metalnessMap:de,roughnessMap:ge,anisotropy:D,anisotropyMap:$,clearcoat:Ae,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:Z,dispersion:jt,retroreflection:T,iridescence:g,iridescenceMap:j,iridescenceThicknessMap:ot,sheen:O,sheenColorMap:Et,sheenRoughnessMap:ut,specularMap:lt,specularColorMap:Tt,specularIntensityMap:Pt,transmission:V,transmissionMap:Nt,thicknessMap:I,gradientMap:ct,opaque:v.transparent===!1&&v.blending===Wi&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:ht,alphaHash:gt,combine:v.combine,mapUv:zt&&_(v.map.channel),aoMapUv:Kt&&_(v.aoMap.channel),lightMapUv:re&&_(v.lightMap.channel),bumpMapUv:Vt&&_(v.bumpMap.channel),normalMapUv:ce&&_(v.normalMap.channel),displacementMapUv:be&&_(v.displacementMap.channel),emissiveMapUv:Oe&&_(v.emissiveMap.channel),metalnessMapUv:de&&_(v.metalnessMap.channel),roughnessMapUv:ge&&_(v.roughnessMap.channel),anisotropyMapUv:$&&_(v.anisotropyMap.channel),clearcoatMapUv:rt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(v.sheenRoughnessMap.channel),specularMapUv:lt&&_(v.specularMap.channel),specularColorMapUv:Tt&&_(v.specularColorMap.channel),specularIntensityMapUv:Pt&&_(v.specularIntensityMap.channel),transmissionMapUv:Nt&&_(v.transmissionMap.channel),thicknessMapUv:I&&_(v.thicknessMap.channel),alphaMapUv:Q&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ce||D),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(zt||Q),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&ce===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Mt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:At,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:zt&&v.map.isVideoTexture===!0&&Wt.getTransfer(v.map.colorSpace)===te,decodeVideoTextureEmissive:Oe&&v.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(v.emissiveMap.colorSpace)===te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Be,flipSided:v.side===ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:nt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&v.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)E.push(C),E.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(d(E,v),y(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function d(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){const E=m[v.type];let C;if(E){const L=hn[E];C=Lh.clone(L.uniforms)}else C=v.uniforms;return C}function M(v,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new hm(i,E,v,s),l.push(C),u.set(E,C)),C}function b(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function A(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:R,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:A}}function gm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _m(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function nl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function il(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,S,p,d){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:d},i[t]=y):(y.id=h.id,y.object=h,y.geometry=m,y.material=_,y.materialVariant=a(h),y.groupOrder=S,y.renderOrder=h.renderOrder,y.z=p,y.group=d),t++,y}function c(h,m,_,S,p,d,y){y.reversedDepth===!0&&(p=-p);const R=o(h,m,_,S,p,d);_.transmission>0?n.push(R):_.transparent===!0?s.push(R):e.push(R)}function l(h,m,_,S,p,d){const y=o(h,m,_,S,p,d);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,m){e.length>1&&e.sort(h||_m),n.length>1&&n.sort(m||nl),s.length>1&&s.sort(m||nl)}function f(){for(let h=t,m=i.length;h<m;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function vm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new il,i.set(n,[a])):s>=r.length?(a=new il,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Bt};break;case"SpotLight":e={position:new B,direction:new B,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function Mm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Sm=0;function ym(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bm(i){const t=new xm,e=Mm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const s=new B,r=new pe,a=new pe;function o(l){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,_=0,S=0,p=0,d=0,y=0,R=0,M=0,b=0,w=0,A=0,v=0,E=0,C=0;l.sort(ym);for(let U=0,z=l.length;U<z;U++){const N=l[U],G=N.color,J=N.intensity,q=N.distance;let st=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Qn?st=N.shadow.map.texture:st=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=G.r*J,f+=G.g*J,h+=G.b*J;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],J);C++}else if(N.isSunLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const et=N.shadow,it=e.get(N);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[_]=it,n.sunShadowMap[_]=st;const Ct=et.getViewportCount();for(let At=0;At<Ct;At++)n.sunShadowMatrix[S+At]=et.getMatrix(At),n.sunShadowCascade[S+At]=et._cascadeData[At];S+=Ct,_++}n.sun[m]=Y,m++}else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const et=N.shadow,it=e.get(N);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.directionalShadow[p]=it,n.directionalShadowMap[p]=st,n.directionalShadowMatrix[p]=N.shadow.matrix,b++}n.directional[p]=Y,p++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(G).multiplyScalar(J),Y.distance=q,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[y]=Y;const et=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,et.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[y]=et.matrix,N.castShadow){const it=e.get(N);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.spotShadow[y]=it,n.spotShadowMap[y]=st,A++}y++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(G).multiplyScalar(J),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[R]=Y,R++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const et=N.shadow,it=e.get(N);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,n.pointShadow[d]=it,n.pointShadowMap[d]=st,n.pointShadowMatrix[d]=N.shadow.matrix,w++}n.point[d]=Y,d++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(J),Y.groundColor.copy(N.groundColor).multiplyScalar(J),n.hemi[M]=Y,M++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.sunLength!==m||L.directionalLength!==p||L.pointLength!==d||L.spotLength!==y||L.rectAreaLength!==R||L.hemiLength!==M||L.numSunShadows!==_||L.numDirectionalShadows!==b||L.numPointShadows!==w||L.numSpotShadows!==A||L.numSpotMaps!==v||L.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=p,n.spot.length=y,n.rectArea.length=R,n.point.length=d,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,L.sunLength=m,L.directionalLength=p,L.pointLength=d,L.spotLength=y,L.rectAreaLength=R,L.hemiLength=M,L.numSunShadows=_,L.numDirectionalShadows=b,L.numPointShadows=w,L.numSpotShadows=A,L.numSpotMaps=v,L.numLightProbes=C,n.version=Sm++)}function c(l,u){let f=0,h=0,m=0,_=0,S=0,p=0;const d=u.matrixWorldInverse;for(let y=0,R=l.length;y<R;y++){const M=l[y];if(M.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),f++}else if(M.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(M.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const b=n.rectArea[S];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const b=n.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),p++}}}return{setup:o,setupView:c,state:n}}function sl(i){const t=new bm(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function wm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new sl(i),t.set(s,[o])):r>=a.length?(o=new sl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
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
}`,Am=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Rm=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],rl=new pe,ki=new B,Pr=new B;function Cm(i,t,e){let n=new ka;const s=new Ut,r=new Ut,a=new fe,o=new Nh,c=new Fh,l={},u=e.maxTextureSize,f={[Zn]:ze,[ze]:Zn,[Be]:Be},h=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Em,fragmentShader:Tm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Fe;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new W(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let d=this.type;this.render=function(w,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Sc&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);const E=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Tn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=d!==this.type;z&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=w.length;N<G;N++){const J=w[N],q=J.shadow;if(q===void 0){Lt("WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const st=q.getFrameExtents();s.multiply(st),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,q.mapSize.y=r.y));const Y=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Y,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Gi){if(J.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new en(s.x,s.y,{format:Qn,type:_n,minFilter:Le,magFilter:Le,generateMipmaps:!1}),q.map.texture.name=J.name+".shadowMap",q.map.depthTexture=new Ki(s.x,s.y,un),q.map.depthTexture.name=J.name+".shadowMapDepth",q.map.depthTexture.format=Cn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Te,q.map.depthTexture.magFilter=Te}else J.isPointLight?(q.map=new jl(s.x),q.map.depthTexture=new Ch(s.x,gn)):(q.map=new en(s.x,s.y),q.map.depthTexture=new Ki(s.x,s.y,gn)),q.map.depthTexture.name=J.name+".shadowMap",q.map.depthTexture.format=Cn,this.type===Cs?(q.map.depthTexture.compareFunction=Y?Fa:Na,q.map.depthTexture.minFilter=Le,q.map.depthTexture.magFilter=Le):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Te,q.map.depthTexture.magFilter=Te);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);const et=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();J.isPointLight!==!0&&q.updateMatrices(J,v);for(let it=0;it<et;it++){const Ct=q.getCamera(it);if(J.isPointLight){const At=q.camera,se=q.matrix,qt=J.distance||At.far;qt!==At.far&&(At.far=qt,At.updateProjectionMatrix()),ki.setFromMatrixPosition(J.matrixWorld),At.position.copy(ki),Pr.copy(At.position),Pr.add(Am[it]),At.up.copy(Rm[it]),At.lookAt(Pr),At.updateMatrixWorld(),se.makeTranslation(-ki.x,-ki.y,-ki.z),rl.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),q._frustum.setFromProjectionMatrix(rl,At.coordinateSystem,At.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,it),i.clear();else{it===0&&(i.setRenderTarget(q.map),i.clear());const At=q.getViewport(it);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),U.viewport(a)}n=q.getFrustum(it),M(A,v,Ct,J,this.type)}q.isPointLightShadow!==!0&&this.type===Gi&&y(q,v),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(E,C,L)};function y(w,A){const v=t.update(S);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new en(s.x,s.y,{format:Qn,type:_n}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,v,h,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,v,m,S,null)}function R(w,A,v,E){let C=null;const L=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)C=L;else if(C=v.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=C.uuid,z=A.uuid;let N=l[U];N===void 0&&(N={},l[U]=N);let G=N[z];G===void 0&&(G=C.clone(),N[z]=G,A.addEventListener("dispose",b)),C=G}if(C.visible=A.visible,C.wireframe=A.wireframe,E===Gi?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=i.properties.get(C);U.light=v}return C}function M(w,A,v,E,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Gi)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const z=t.update(w),N=w.material;if(Array.isArray(N)){const G=z.groups;for(let J=0,q=G.length;J<q;J++){const st=G[J],Y=N[st.materialIndex];if(Y&&Y.visible){const et=R(w,Y,E,C);w.onBeforeShadow(i,w,A,v,z,et,st),i.renderBufferDirect(v,null,z,et,w,st),w.onAfterShadow(i,w,A,v,z,et,st)}}}else if(N.visible){const G=R(w,N,E,C);w.onBeforeShadow(i,w,A,v,z,G,null),i.renderBufferDirect(v,null,z,G,w,null),w.onAfterShadow(i,w,A,v,z,G,null)}}const U=w.children;for(let z=0,N=U.length;z<N;z++)M(U[z],A,v,E,C)}function b(w){w.target.removeEventListener("dispose",b);for(const v in l){const E=l[v],C=w.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function Pm(i,t){function e(){let I=!1;const ct=new fe;let Q=null;const ht=new fe(0,0,0,0);return{setMask:function(gt){Q!==gt&&!I&&(i.colorMask(gt,gt,gt,gt),Q=gt)},setLocked:function(gt){I=gt},setClear:function(gt,nt,Rt,bt,ae){ae===!0&&(gt*=bt,nt*=bt,Rt*=bt),ct.set(gt,nt,Rt,bt),ht.equals(ct)===!1&&(i.clearColor(gt,nt,Rt,bt),ht.copy(ct))},reset:function(){I=!1,Q=null,ht.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,Q=null,ht=null,gt=null;return{setReversed:function(nt){if(ct!==nt){const Rt=t.get("EXT_clip_control");nt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ct=nt;const bt=gt;gt=null,this.setClear(bt)}},getReversed:function(){return ct},setTest:function(nt){nt?tt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(nt){Q!==nt&&!I&&(i.depthMask(nt),Q=nt)},setFunc:function(nt){if(ct&&(nt=eh[nt]),ht!==nt){switch(nt){case Or:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case kr:i.depthFunc(i.EQUAL);break;case Hr:i.depthFunc(i.GEQUAL);break;case Gr:i.depthFunc(i.GREATER);break;case Vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=nt}},setLocked:function(nt){I=nt},setClear:function(nt){gt!==nt&&(gt=nt,ct&&(nt=1-nt),i.clearDepth(nt))},reset:function(){I=!1,Q=null,ht=null,gt=null,ct=!1}}}function s(){let I=!1,ct=null,Q=null,ht=null,gt=null,nt=null,Rt=null,bt=null,ae=null;return{setTest:function(Jt){I||(Jt?tt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(Jt){ct!==Jt&&!I&&(i.stencilMask(Jt),ct=Jt)},setFunc:function(Jt,Ze,sn){(Q!==Jt||ht!==Ze||gt!==sn)&&(i.stencilFunc(Jt,Ze,sn),Q=Jt,ht=Ze,gt=sn)},setOp:function(Jt,Ze,sn){(nt!==Jt||Rt!==Ze||bt!==sn)&&(i.stencilOp(Jt,Ze,sn),nt=Jt,Rt=Ze,bt=sn)},setLocked:function(Jt){I=Jt},setClear:function(Jt){ae!==Jt&&(i.clearStencil(Jt),ae=Jt)},reset:function(){I=!1,ct=null,Q=null,ht=null,gt=null,nt=null,Rt=null,bt=null,ae=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h={},m=new WeakMap,_=[],S=null,p=!1,d=null,y=null,R=null,M=null,b=null,w=null,A=null,v=new Bt(0,0,0),E=0,C=!1,L=null,U=null,z=null,N=null,G=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,st=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=st>=2);let et=null,it={};const Ct=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),se=new fe().fromArray(Ct),qt=new fe().fromArray(At);function Zt(I,ct,Q,ht){const gt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(I,nt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<Q;Rt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ct+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return nt}const K={};K[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Xi),Vt(!1),ce(oo),tt(i.CULL_FACE),Kt(Tn);function tt(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Mt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function It(I,ct){return h[I]!==ct?(i.bindFramebuffer(I,ct),h[I]=ct,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function vt(I,ct){let Q=_,ht=!1;if(I){Q=m.get(ct),Q===void 0&&(Q=[],m.set(ct,Q));const gt=I.textures;if(Q.length!==gt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Rt=gt.length;nt<Rt;nt++)Q[nt]=i.COLOR_ATTACHMENT0+nt;Q.length=gt.length,ht=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ht=!0);ht&&i.drawBuffers(Q)}function zt(I){return S!==I?(i.useProgram(I),S=I,!0):!1}const xe={[Mi]:i.FUNC_ADD,[bc]:i.FUNC_SUBTRACT,[wc]:i.FUNC_REVERSE_SUBTRACT};xe[Ec]=i.MIN,xe[Tc]=i.MAX;const kt={[Ac]:i.ZERO,[Rc]:i.ONE,[Cc]:i.SRC_COLOR,[Sl]:i.SRC_ALPHA,[Nc]:i.SRC_ALPHA_SATURATE,[Dc]:i.DST_COLOR,[Lc]:i.DST_ALPHA,[Pc]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[Uc]:i.ONE_MINUS_DST_COLOR,[Ic]:i.ONE_MINUS_DST_ALPHA,[Fc]:i.CONSTANT_COLOR,[Oc]:i.ONE_MINUS_CONSTANT_COLOR,[Bc]:i.CONSTANT_ALPHA,[zc]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(I,ct,Q,ht,gt,nt,Rt,bt,ae,Jt){if(I===Tn){p===!0&&(Mt(i.BLEND),p=!1);return}if(p===!1&&(tt(i.BLEND),p=!0),I!==yc){if(I!==d||Jt!==C){if((y!==Mi||b!==Mi)&&(i.blendEquation(i.FUNC_ADD),y=Mi,b=Mi),Jt)switch(I){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFunc(i.ONE,i.ONE);break;case co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",I);break}else switch(I){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case co:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ho:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",I);break}R=null,M=null,w=null,A=null,v.set(0,0,0),E=0,d=I,C=Jt}return}gt=gt||ct,nt=nt||Q,Rt=Rt||ht,(ct!==y||gt!==b)&&(i.blendEquationSeparate(xe[ct],xe[gt]),y=ct,b=gt),(Q!==R||ht!==M||nt!==w||Rt!==A)&&(i.blendFuncSeparate(kt[Q],kt[ht],kt[nt],kt[Rt]),R=Q,M=ht,w=nt,A=Rt),(bt.equals(v)===!1||ae!==E)&&(i.blendColor(bt.r,bt.g,bt.b,ae),v.copy(bt),E=ae),d=I,C=!1}function re(I,ct){I.side===Be?Mt(i.CULL_FACE):tt(i.CULL_FACE);let Q=I.side===ze;ct&&(Q=!Q),Vt(Q),I.blending===Wi&&I.transparent===!1?Kt(Tn):Kt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ht=I.stencilWrite;o.setTest(ht),ht&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function ce(I){I!==xc?(tt(i.CULL_FACE),I!==U&&(I===oo?i.cullFace(i.BACK):I===Mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),U=I}function be(I){I!==z&&(q&&i.lineWidth(I),z=I)}function Oe(I,ct,Q){I?(tt(i.POLYGON_OFFSET_FILL),(N!==ct||G!==Q)&&(N=ct,G=Q,a.getReversed()&&(ct=-ct),i.polygonOffset(ct,Q))):Mt(i.POLYGON_OFFSET_FILL)}function de(I){I?tt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function ge(I){I===void 0&&(I=i.TEXTURE0+J-1),et!==I&&(i.activeTexture(I),et=I)}function D(I,ct,Q){Q===void 0&&(et===null?Q=i.TEXTURE0+J-1:Q=et);let ht=it[Q];ht===void 0&&(ht={type:void 0,texture:void 0},it[Q]=ht),(ht.type!==I||ht.texture!==ct)&&(et!==Q&&(i.activeTexture(Q),et=Q),i.bindTexture(I,ct||K[I]),ht.type=I,ht.texture=ct)}function Ae(){const I=it[et];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(I){Yt("WebGLState:",I)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(I){Yt("WebGLState:",I)}}function g(){try{i.texSubImage2D(...arguments)}catch(I){Yt("WebGLState:",I)}}function O(){try{i.texSubImage3D(...arguments)}catch(I){Yt("WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Yt("WebGLState:",I)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Yt("WebGLState:",I)}}function rt(){try{i.texStorage2D(...arguments)}catch(I){Yt("WebGLState:",I)}}function at(){try{i.texStorage3D(...arguments)}catch(I){Yt("WebGLState:",I)}}function Z(){try{i.texImage2D(...arguments)}catch(I){Yt("WebGLState:",I)}}function j(){try{i.texImage3D(...arguments)}catch(I){Yt("WebGLState:",I)}}function ot(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function Et(I,ct){f[I]!==ct&&(i.pixelStorei(I,ct),f[I]=ct)}function ut(I){se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function lt(I){qt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),qt.copy(I))}function Tt(I,ct){let Q=l.get(ct);Q===void 0&&(Q=new WeakMap,l.set(ct,Q));let ht=Q.get(I);ht===void 0&&(ht=i.getUniformBlockIndex(ct,I.name),Q.set(I,ht))}function Pt(I,ct){const ht=l.get(ct).get(I);c.get(ct)!==ht&&(i.uniformBlockBinding(ct,ht,I.__bindingPointIndex),c.set(ct,ht))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},et=null,it={},h={},m=new WeakMap,_=[],S=null,p=!1,d=null,y=null,R=null,M=null,b=null,w=null,A=null,v=new Bt(0,0,0),E=0,C=!1,L=null,U=null,z=null,N=null,G=null,se.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:Mt,bindFramebuffer:It,drawBuffers:vt,useProgram:zt,setBlending:Kt,setMaterial:re,setFlipSided:Vt,setCullFace:ce,setLineWidth:be,setPolygonOffset:Oe,setScissorTest:de,activeTexture:ge,bindTexture:D,unbindTexture:Ae,compressedTexImage2D:jt,compressedTexImage3D:T,texImage2D:Z,texImage3D:j,pixelStorei:Et,getParameter:ot,updateUBOMapping:Tt,uniformBlockBinding:Pt,texStorage2D:rt,texStorage3D:at,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:ut,viewport:lt,reset:Nt}}function Lm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,u=new WeakMap,f=new Set;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,g){return _?new OffscreenCanvas(T,g):zs("canvas")}function p(T,g,O){let V=1;const $=jt(T);if(($.width>O||$.height>O)&&(V=O/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const rt=Math.floor(V*$.width),at=Math.floor(V*$.height);h===void 0&&(h=S(rt,at));const Z=g?S(rt,at):h;return Z.width=rt,Z.height=at,Z.getContext("2d").drawImage(T,0,0,rt,at),Lt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+rt+"x"+at+")."),Z}else return"data"in T&&Lt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function d(T){return T.generateMipmaps}function y(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,g,O,V,$,rt=!1){if(T!==null){if(i[T]!==void 0)return i[T];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let at;V&&(at=t.get("EXT_texture_norm16"),at||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=g;if(g===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8),O===i.UNSIGNED_SHORT&&at&&(Z=at.R16_EXT),O===i.SHORT&&at&&(Z=at.R16_SNORM_EXT)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),g===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8),O===i.UNSIGNED_SHORT&&at&&(Z=at.RG16_EXT),O===i.SHORT&&at&&(Z=at.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_SHORT&&at&&(Z=at.RGB16_EXT),O===i.SHORT&&at&&(Z=at.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),g===i.RGBA){const j=rt?Bs:Wt.getTransfer($);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=j===te?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&at&&(Z=at.RGBA16_EXT),O===i.SHORT&&at&&(Z=at.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(T,g){let O;return T?g===null||g===gn||g===$i?O=i.DEPTH24_STENCIL8:g===un?O=i.DEPTH32F_STENCIL8:g===qi&&(O=i.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===gn||g===$i?O=i.DEPTH_COMPONENT24:g===un?O=i.DEPTH_COMPONENT32F:g===qi&&(O=i.DEPTH_COMPONENT16),O}function w(T,g){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Te&&T.minFilter!==Le?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){const g=T.target;g.removeEventListener("dispose",A),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function v(T){const g=T.target;g.removeEventListener("dispose",v),L(g)}function E(T){const g=n.get(T);if(g.__webglInit===void 0)return;const O=T.source,V=m.get(O);if(V){const $=V[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(T),Object.keys(V).length===0&&m.delete(O)}n.remove(T)}function C(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const O=T.source,V=m.get(O);delete V[g.__cacheKey],a.memory.textures--}function L(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let $=0;$<g.__webglFramebuffer[V].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[V][$]);else i.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)i.deleteFramebuffer(g.__webglFramebuffer[V]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=T.textures;for(let V=0,$=O.length;V<$;V++){const rt=n.get(O[V]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(T)}let U=0;function z(){U=0}function N(){return U}function G(T){U=T}function J(){const T=U;return T>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function q(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function st(T,g){const O=n.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const V=T.image;if(V===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function Y(T,g){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Mt(O,T,g);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function et(T,g){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Mt(O,T,g);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function it(T,g){const O=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){It(O,T,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const Ct={[Wr]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Xr]:i.MIRRORED_REPEAT},At={[Te]:i.NEAREST,[Gc]:i.NEAREST_MIPMAP_NEAREST,[ji]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},se={[qc]:i.NEVER,[Jc]:i.ALWAYS,[$c]:i.LESS,[Na]:i.LEQUAL,[Yc]:i.EQUAL,[Fa]:i.GEQUAL,[Kc]:i.GREATER,[Zc]:i.NOTEQUAL};function qt(T,g){if(g.type===un&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Le||g.magFilter===js||g.magFilter===ji||g.magFilter===Yn||g.minFilter===Le||g.minFilter===js||g.minFilter===ji||g.minFilter===Yn)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ct[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ct[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ct[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,At[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,At[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,se[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Te||g.minFilter!==ji&&g.minFilter!==Yn||g.type===un&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Zt(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",A));const V=g.source;let $=m.get(V);$===void 0&&($={},m.set(V,$));const rt=q(g);if(rt!==T.__cacheKey){$[rt]===void 0&&($[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[rt].usedTimes++;const at=$[T.__cacheKey];at!==void 0&&($[T.__cacheKey].usedTimes--,at.usedTimes===0&&C(g)),T.__cacheKey=rt,T.__webglTexture=$[rt].texture}return O}function K(T,g,O){return Math.floor(Math.floor(T/O)/g)}function tt(T,g,O,V){const rt=T.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,V,g.data);else{rt.sort((Et,ut)=>Et.start-ut.start);let at=0;for(let Et=1;Et<rt.length;Et++){const ut=rt[at],lt=rt[Et],Tt=ut.start+ut.count,Pt=K(lt.start,g.width,4),Nt=K(ut.start,g.width,4);lt.start<=Tt+1&&Pt===Nt&&K(lt.start+lt.count-1,g.width,4)===Pt?ut.count=Math.max(ut.count,lt.start+lt.count-ut.start):(++at,rt[at]=lt)}rt.length=at+1;const Z=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Et=0,ut=rt.length;Et<ut;Et++){const lt=rt[Et],Tt=Math.floor(lt.start/4),Pt=Math.ceil(lt.count/4),Nt=Tt%g.width,I=Math.floor(Tt/g.width),ct=Pt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Nt,I,ct,Q,O,V,g.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function Mt(T,g,O){let V=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=i.TEXTURE_3D);const $=Zt(T,g),rt=g.source;e.bindTexture(V,T.__webglTexture,i.TEXTURE0+O);const at=n.get(rt);if(rt.version!==at.__version||$===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Q=Wt.getPrimaries(Wt.workingColorSpace),ht=g.colorSpace===zn?null:Wt.getPrimaries(g.colorSpace),gt=g.colorSpace===zn||Q===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let j=p(g.image,!1,s.maxTextureSize);j=Ae(g,j);const ot=r.convert(g.format,g.colorSpace),Et=r.convert(g.type);let ut=M(g.internalFormat,ot,Et,g.normalized,g.colorSpace,g.isVideoTexture);qt(V,g);let lt;const Tt=g.mipmaps,Pt=g.isVideoTexture!==!0,Nt=at.__version===void 0||$===!0,I=rt.dataReady,ct=w(g,j);if(g.isDepthTexture)ut=b(g.format===Kn,g.type),Nt&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,ut,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,ut,j.width,j.height,0,ot,Et,null));else if(g.isDataTexture)if(Tt.length>0){Pt&&Nt&&e.texStorage2D(i.TEXTURE_2D,ct,ut,Tt[0].width,Tt[0].height);for(let Q=0,ht=Tt.length;Q<ht;Q++)lt=Tt[Q],Pt?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,ot,Et,lt.data):e.texImage2D(i.TEXTURE_2D,Q,ut,lt.width,lt.height,0,ot,Et,lt.data);g.generateMipmaps=!1}else Pt?(Nt&&e.texStorage2D(i.TEXTURE_2D,ct,ut,j.width,j.height),I&&tt(g,j,ot,Et)):e.texImage2D(i.TEXTURE_2D,0,ut,j.width,j.height,0,ot,Et,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pt&&Nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ut,Tt[0].width,Tt[0].height,j.depth);for(let Q=0,ht=Tt.length;Q<ht;Q++)if(lt=Tt[Q],g.format!==tn)if(ot!==null)if(Pt){if(I)if(g.layerUpdates.size>0){const gt=Oo(lt.width,lt.height,g.format,g.type);for(const nt of g.layerUpdates){const Rt=lt.data.subarray(nt*gt/lt.data.BYTES_PER_ELEMENT,(nt+1)*gt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,nt,lt.width,lt.height,1,ot,Rt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,j.depth,ot,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ut,lt.width,lt.height,j.depth,0,lt.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,j.depth,ot,Et,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,ut,lt.width,lt.height,j.depth,0,ot,Et,lt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Pt&&Nt&&e.texStorage2D(i.TEXTURE_2D,ct,ut,Tt[0].width,Tt[0].height);for(let Q=0,ht=Tt.length;Q<ht;Q++)lt=Tt[Q],g.format!==tn?ot!==null?Pt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,ut,lt.width,lt.height,0,lt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,ot,Et,lt.data):e.texImage2D(i.TEXTURE_2D,Q,ut,lt.width,lt.height,0,ot,Et,lt.data)}else if(g.isDataArrayTexture)if(Pt){if(Nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ut,j.width,j.height,j.depth),I)if(g.layerUpdates.size>0){const Q=Oo(j.width,j.height,g.format,g.type);for(const ht of g.layerUpdates){const gt=j.data.subarray(ht*Q/j.data.BYTES_PER_ELEMENT,(ht+1)*Q/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,j.width,j.height,1,ot,Et,gt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ot,Et,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,j.width,j.height,j.depth,0,ot,Et,j.data);else if(g.isData3DTexture)Pt?(Nt&&e.texStorage3D(i.TEXTURE_3D,ct,ut,j.width,j.height,j.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ot,Et,j.data)):e.texImage3D(i.TEXTURE_3D,0,ut,j.width,j.height,j.depth,0,ot,Et,j.data);else if(g.isFramebufferTexture){if(Nt)if(Pt)e.texStorage2D(i.TEXTURE_2D,ct,ut,j.width,j.height);else{let Q=j.width,ht=j.height;for(let gt=0;gt<ct;gt++)e.texImage2D(i.TEXTURE_2D,gt,ut,Q,ht,0,ot,Et,null),Q>>=1,ht>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),f.add(g),Q.onpaint=ht=>{const gt=ht.changedElements;for(const nt of f)gt.includes(nt.image)&&(nt.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const gt=i.RGBA,nt=i.RGBA,Rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,gt,nt,Rt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Pt&&Nt){const Q=jt(Tt[0]);e.texStorage2D(i.TEXTURE_2D,ct,ut,Q.width,Q.height)}for(let Q=0,ht=Tt.length;Q<ht;Q++)lt=Tt[Q],Pt?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ot,Et,lt):e.texImage2D(i.TEXTURE_2D,Q,ut,ot,Et,lt);g.generateMipmaps=!1}else if(Pt){if(Nt){const Q=jt(j);e.texStorage2D(i.TEXTURE_2D,ct,ut,Q.width,Q.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,Et,j)}else e.texImage2D(i.TEXTURE_2D,0,ut,ot,Et,j);d(g)&&y(V),at.__version=rt.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function It(T,g,O){if(g.image.length!==6)return;const V=Zt(T,g),$=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const rt=n.get($);if($.version!==rt.__version||V===!0){e.activeTexture(i.TEXTURE0+O);const at=Wt.getPrimaries(Wt.workingColorSpace),Z=g.colorSpace===zn?null:Wt.getPrimaries(g.colorSpace),j=g.colorSpace===zn||at===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ot=g.isCompressedTexture||g.image[0].isCompressedTexture,Et=g.image[0]&&g.image[0].isDataTexture,ut=[];for(let nt=0;nt<6;nt++)!ot&&!Et?ut[nt]=p(g.image[nt],!0,s.maxCubemapSize):ut[nt]=Et?g.image[nt].image:g.image[nt],ut[nt]=Ae(g,ut[nt]);const lt=ut[0],Tt=r.convert(g.format,g.colorSpace),Pt=r.convert(g.type),Nt=M(g.internalFormat,Tt,Pt,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,ct=rt.__version===void 0||V===!0,Q=$.dataReady;let ht=w(g,lt);qt(i.TEXTURE_CUBE_MAP,g);let gt;if(ot){I&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Nt,lt.width,lt.height);for(let nt=0;nt<6;nt++){gt=ut[nt].mipmaps;for(let Rt=0;Rt<gt.length;Rt++){const bt=gt[Rt];g.format!==tn?Tt!==null?I?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,0,0,bt.width,bt.height,Tt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,Nt,bt.width,bt.height,0,bt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,0,0,bt.width,bt.height,Tt,Pt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,Nt,bt.width,bt.height,0,Tt,Pt,bt.data)}}}else{if(gt=g.mipmaps,I&&ct){gt.length>0&&ht++;const nt=jt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Nt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Et){I?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ut[nt].width,ut[nt].height,Tt,Pt,ut[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Nt,ut[nt].width,ut[nt].height,0,Tt,Pt,ut[nt].data);for(let Rt=0;Rt<gt.length;Rt++){const ae=gt[Rt].image[nt].image;I?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,0,0,ae.width,ae.height,Tt,Pt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,Nt,ae.width,ae.height,0,Tt,Pt,ae.data)}}else{I?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Tt,Pt,ut[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Nt,Tt,Pt,ut[nt]);for(let Rt=0;Rt<gt.length;Rt++){const bt=gt[Rt];I?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,0,0,Tt,Pt,bt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,Nt,Tt,Pt,bt.image[nt])}}}d(g)&&y(i.TEXTURE_CUBE_MAP),rt.__version=$.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function vt(T,g,O,V,$,rt){const at=r.convert(O.format,O.colorSpace),Z=r.convert(O.type),j=M(O.internalFormat,at,Z,O.normalized,O.colorSpace),ot=n.get(g),Et=n.get(O);if(Et.__renderTarget=g,!ot.__hasExternalTextures){const ut=Math.max(1,g.width>>rt),lt=Math.max(1,g.height>>rt);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,rt,j,ut,lt,g.depth,0,at,Z,null):e.texImage2D($,rt,j,ut,lt,0,at,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,$,Et.__webglTexture,0,de(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,$,Et.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(T,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const V=g.depthTexture,$=V&&V.isDepthTexture?V.type:null,rt=b(g.stencilBuffer,$),at=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(g),rt,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(g),rt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,rt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,T)}else{const V=g.textures;for(let $=0;$<V.length;$++){const rt=V[$],at=r.convert(rt.format,rt.colorSpace),Z=r.convert(rt.type),j=M(rt.internalFormat,at,Z,rt.normalized,rt.colorSpace);ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(g),j,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(g),j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(T,g,O){const V=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(g.depthTexture);if($.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),qt(i.TEXTURE_CUBE_MAP,g.depthTexture);const ot=r.convert(g.depthTexture.format),Et=r.convert(g.depthTexture.type);let ut;g.depthTexture.format===Cn?ut=i.DEPTH_COMPONENT24:g.depthTexture.format===Kn&&(ut=i.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ut,g.width,g.height,0,ot,Et,null)}}else st(g.depthTexture,0);const rt=$.__webglTexture,at=de(g),Z=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,j=g.depthTexture.format===Kn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Cn)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,rt,0);else if(g.depthTexture.format===Kn)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(T){const g=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const V=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=V}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)xe(g.__webglFramebuffer[V],T,V);else{const V=T.texture.mipmaps;V&&V.length>0?xe(g.__webglFramebuffer[0],T,0):xe(g.__webglFramebuffer,T,0)}else if(O){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=i.createRenderbuffer(),zt(g.__webglDepthbuffer[V],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=g.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,rt)}}else{const V=T.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),zt(g.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(T,g,O){const V=n.get(T);g!==void 0&&vt(V.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&kt(T)}function re(T){const g=T.texture,O=n.get(T),V=n.get(g);T.addEventListener("dispose",v);const $=T.textures,rt=T.isWebGLCubeRenderTarget===!0,at=$.length>1;if(at||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=g.version,a.memory.textures++),rt){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let j=0;j<g.mipmaps.length;j++)O.__webglFramebuffer[Z][j]=i.createFramebuffer()}else O.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)O.__webglFramebuffer[Z]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(at)for(let Z=0,j=$.length;Z<j;Z++){const ot=n.get($[Z]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ge(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){const j=$[Z];O.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const ot=r.convert(j.format,j.colorSpace),Et=r.convert(j.type),ut=M(j.internalFormat,ot,Et,j.normalized,j.colorSpace,T.isXRRenderTarget===!0),lt=de(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),qt(i.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)vt(O.__webglFramebuffer[Z][j],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j);else vt(O.__webglFramebuffer[Z],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(g)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Z=0,j=$.length;Z<j;Z++){const ot=$[Z],Et=n.get(ot);let ut=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Et.__webglTexture),qt(ut,ot),vt(O.__webglFramebuffer,T,ot,i.COLOR_ATTACHMENT0+Z,ut,0),d(ot)&&y(ut)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),qt(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)vt(O.__webglFramebuffer[j],T,g,i.COLOR_ATTACHMENT0,Z,j);else vt(O.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,Z,0);d(g)&&y(Z),e.unbindTexture()}T.depthBuffer&&kt(T)}function Vt(T){const g=T.textures;for(let O=0,V=g.length;O<V;O++){const $=g[O];if(d($)){const rt=R(T),at=n.get($).__webglTexture;e.bindTexture(rt,at),y(rt),e.unbindTexture()}}}const ce=[],be=[];function Oe(T){if(T.samples>0){if(ge(T)===!1){const g=T.textures,O=T.width,V=T.height;let $=i.COLOR_BUFFER_BIT;const rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(T),Z=g.length>1;if(Z)for(let ot=0;ot<g.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const j=T.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<g.length;ot++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Et=n.get(g[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,$,i.NEAREST),c===!0&&(ce.length=0,be.length=0,ce.push(i.COLOR_ATTACHMENT0+ot),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ce.push(rt),be.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ot=0;ot<g.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Et=n.get(g[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function de(T){return Math.min(s.maxSamples,T.samples)}function ge(T){const g=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){const g=a.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Ae(T,g){const O=T.colorSpace,V=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Os&&O!==zn&&(Wt.getTransfer(O)===te?(V!==tn||$!==We)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",O)),g}function jt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=z,this.getTextureUnits=N,this.setTextureUnits=G,this.setTexture2D=st,this.setTexture2DArray=Y,this.setTexture3D=et,this.setTextureCube=it,this.rebindTextures=Kt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Im(i,t){function e(n,s=zn){let r;const a=Wt.getTransfer(s);if(n===We)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ll)return i.BYTE;if(n===Il)return i.SHORT;if(n===qi)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===Nl)return i.ALPHA;if(n===Fl)return i.RGB;if(n===tn)return i.RGBA;if(n===Cn)return i.DEPTH_COMPONENT;if(n===Kn)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===Qn)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Ua)return i.RGBA_INTEGER;if(n===Ps||n===Ls||n===Is||n===Ds)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qr||n===$r||n===Yr||n===Kr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zr||n===Jr||n===Qr||n===jr||n===ta||n===Ns||n===ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zr||n===Jr)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jr)return r.COMPRESSED_R11_EAC;if(n===ta)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ns)return r.COMPRESSED_RG11_EAC;if(n===ea)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===da||n===ua||n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===na)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===_a||n===va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ga)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xa||n===Ma||n===Fs||n===Sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Um=`
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

}`;class Nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Yl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:Dm,fragmentShader:Um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new Me(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fm extends ti{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",p=new Nm,d={},y=e.getContextAttributes();let R=null,M=null;const b=[],w=[],A=new Ut;let v=null,E=null;const C=new Ve;C.viewport=new fe;const L=new Ve;L.viewport=new fe;const U=[C,L],z=new Vh;let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=b[K];return tt===void 0&&(tt=new lr,b[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=b[K];return tt===void 0&&(tt=new lr,b[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=b[K];return tt===void 0&&(tt=new lr,b[K]=tt),tt.getHandSpace()};function J(K){const tt=w.indexOf(K.inputSource);if(tt===-1)return;const Mt=b[tt];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,l||a),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",st);for(let K=0;K<b.length;K++){const tt=w[K];tt!==null&&(w[K]=null,b[K].disconnect(tt))}N=null,G=null,p.reset();for(const K in d)delete d[K];if(t.setRenderTarget(R),m=null,h=null,f=null,s=null,M=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),E!==null){const K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",st),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,It=null,vt=null;y.depth&&(vt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=y.stencil?Kn:Cn,It=y.stencil?$i:gn);const zt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new en(h.textureWidth,h.textureHeight,{format:tn,type:We,depthTexture:new Ki(h.textureWidth,h.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new en(m.framebufferWidth,m.framebufferHeight,{format:tn,type:We,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function st(K){for(let tt=0;tt<K.removed.length;tt++){const Mt=K.removed[tt],It=w.indexOf(Mt);It>=0&&(w[It]=null,b[It].disconnect(Mt))}for(let tt=0;tt<K.added.length;tt++){const Mt=K.added[tt];let It=w.indexOf(Mt);if(It===-1){for(let zt=0;zt<b.length;zt++)if(zt>=w.length){w.push(Mt),It=zt;break}else if(w[zt]===null){w[zt]=Mt,It=zt;break}if(It===-1)break}const vt=b[It];vt&&vt.connect(Mt)}}const Y=new B,et=new B;function it(K,tt,Mt){Y.setFromMatrixPosition(tt.matrixWorld),et.setFromMatrixPosition(Mt.matrixWorld);const It=Y.distanceTo(et),vt=tt.projectionMatrix.elements,zt=Mt.projectionMatrix.elements,xe=vt[14]/(vt[10]-1),kt=vt[14]/(vt[10]+1),Kt=(vt[9]+1)/vt[5],re=(vt[9]-1)/vt[5],Vt=(vt[8]-1)/vt[0],ce=(zt[8]+1)/zt[0],be=xe*Vt,Oe=xe*ce,de=It/(-Vt+ce),ge=de*-Vt;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ge),K.translateZ(de),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),vt[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const D=xe+de,Ae=kt+de,jt=be-ge,T=Oe+(It-ge),g=Kt*kt/Ae*D,O=re*kt/Ae*D;K.projectionMatrix.makePerspective(jt,T,g,O,D,Ae),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ct(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let tt=K.near,Mt=K.far;p.texture!==null&&(p.depthNear>0&&(tt=p.depthNear),p.depthFar>0&&(Mt=p.depthFar)),z.near=L.near=C.near=tt,z.far=L.far=C.far=Mt,(N!==z.near||G!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,G=z.far),z.layers.mask=K.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const It=K.parent,vt=z.cameras;Ct(z,It);for(let zt=0;zt<vt.length;zt++)Ct(vt[zt],It);vt.length===2?it(z,C,L):z.projectionMatrix.copy(C.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),At(K,z,It)};function At(K,tt,Mt){Mt===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ba*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(K){return d[K]};let se=null;function qt(K,tt){if(u=tt.getViewerPose(l||a),_=tt,u!==null){const Mt=u.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let It=!1;Mt.length!==z.cameras.length&&(z.cameras.length=0,It=!0);for(let kt=0;kt<Mt.length;kt++){const Kt=Mt[kt];let re=null;if(m!==null)re=m.getViewport(Kt);else{const ce=f.getViewSubImage(h,Kt);re=ce.viewport,kt===0&&(t.setRenderTargetTextures(M,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(M))}let Vt=U[kt];Vt===void 0&&(Vt=new Ve,Vt.layers.enable(kt),Vt.viewport=new fe,U[kt]=Vt),Vt.matrix.fromArray(Kt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Kt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(re.x,re.y,re.width,re.height),kt===0&&(z.matrix.copy(Vt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),It===!0&&z.cameras.push(Vt)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const kt=f.getDepthInformation(Mt[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,s.renderState)}if(vt&&vt.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let kt=0;kt<Mt.length;kt++){const Kt=Mt[kt].camera;if(Kt){let re=d[Kt];re||(re=new Yl,d[Kt]=re);const Vt=f.getCameraImage(Kt);re.sourceTexture=Vt}}}}for(let Mt=0;Mt<b.length;Mt++){const It=w[Mt],vt=b[Mt];It!==null&&vt!==void 0&&vt.update(It,tt,l||a)}se&&se(K,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}const Zt=new Jl;Zt.setAnimationLoop(qt),this.setAnimationLoop=function(K){se=K},this.dispose=function(){}}}const Om=new pe,sc=new Dt;sc.set(-1,0,0,0,1,0,0,0,1);function Bm(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Kl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,R,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),S(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,y,R):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ze&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ze&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=t.get(d),R=y.envMap,M=y.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(Om.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(sc),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,y,R){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=R*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ze&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){const y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const w=b.program;n.uniformBlockBinding(M,w)}function l(M,b){let w=s[M.id];w===void 0&&(p(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",y));const A=b.program;n.updateUBOMapping(M,A);const v=t.render.frame;r[M.id]!==v&&(h(M),r[M.id]=v)}function u(M){const b=f();M.__bindingPointIndex=b;const w=i.createBuffer(),A=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=s[M.id],w=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,E=w.length;v<E;v++){const C=w[v];if(Array.isArray(C))for(let L=0,U=C.length;L<U;L++)m(C[L],v,L,A);else m(C,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,b,w,A){if(S(M,b,w,A)===!0){const v=M.__offset,E=M.value;if(Array.isArray(E)){let C=0;for(let L=0;L<E.length;L++){const U=E[L],z=d(U);_(U,M.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function _(M,b,w){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,w)}function S(M,b,w,A){const v=M.value,E=b+"_"+w;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{const C=A[E];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(M){const b=M.uniforms;let w=0;const A=16;for(let E=0,C=b.length;E<C;E++){const L=Array.isArray(b[E])?b[E]:[b[E]];for(let U=0,z=L.length;U<z;U++){const N=L[U],G=Array.isArray(N.value)?N.value:[N.value];for(let J=0,q=G.length;J<q;J++){const st=G[J],Y=d(st),et=w%A,it=et%Y.boundary,Ct=et+it;w+=it,Ct!==0&&A-Ct<Y.storage&&(w+=A-Ct),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=Y.storage}}}const v=w%A;return v>0&&(w+=A-v),M.__size=w,M.__cache={},this}function d(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",M),b}function y(M){const b=M.target;b.removeEventListener("dispose",y);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function R(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:R}}const km=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let on=null;function Hm(){return on===null&&(on=new Th(km,16,16,Qn,_n),on.name="DFG_LUT",on.minFilter=Le,on.magFilter=Le,on.wrapS=En,on.wrapT=En,on.generateMipmaps=!1,on.needsUpdate=!0),on}class Gm{constructor(t={}){const{canvas:e=jc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=We}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=m,p=new Set([Ua,Da,Ia]),d=new Set([We,gn,qi,$i,Pa,La]),y=new Uint32Array(4),R=new Int32Array(4),M=new B;let b=null,w=null;const A=[],v=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,U=null,z=null,N=null,G=null;this._outputColorSpace=Ye;let J=0,q=0,st=null,Y=-1,et=null;const it=new fe,Ct=new fe;let At=null;const se=new Bt(0);let qt=0,Zt=e.width,K=e.height,tt=1,Mt=null,It=null;const vt=new fe(0,0,Zt,K),zt=new fe(0,0,Zt,K);let xe=!1;const kt=new ka;let Kt=!1,re=!1;const Vt=new pe,ce=new B,be=new fe,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function ge(){return st===null?tt:1}let D=n;function Ae(x,P){return e.getContext(x,P)}let jt,T,g,O,V,$,rt,at,Z,j,ot,Et,ut,lt,Tt,Pt,Nt,I,ct,Q,ht,gt,nt;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Aa}`),e.addEventListener("webglcontextlost",ae,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",Ze,!1),D===null){const P="webgl2";if(D=Ae(P,x),D===null)throw Ae(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(x){throw e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",Ze,!1),Yt("WebGLRenderer: "+x.message),x}function Rt(){jt=new Hf(D),jt.init(),ht=new Im(D,jt),T=new Lf(D,jt,t,ht),g=new Pm(D,jt),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),z=D.createFramebuffer(),N=D.createFramebuffer(),G=D.createFramebuffer(),O=new Wf(D),V=new gm,$=new Lm(D,jt,g,V,T,ht,O),rt=new kf(C),at=new Xh(D),gt=new Cf(D,at),Z=new Gf(D,at,O,gt),j=new qf(D,Z,at,gt,O),I=new Xf(D,T,$),Tt=new If(V),ot=new mm(C,rt,jt,T,gt,Tt),Et=new Bm(C,V),ut=new vm,lt=new wm(jt),Nt=new Rf(C,rt,g,j,_,c),Pt=new Cm(C,j,T),nt=new zm(D,O,T,g),ct=new Pf(D,jt,O),Q=new Vf(D,jt,O),O.programs=ot.programs,C.capabilities=T,C.extensions=jt,C.properties=V,C.renderLists=ut,C.shadowMap=Pt,C.state=g,C.info=O}S!==We&&(E=new Yf(S,e.width,e.height,o,s,r));const bt=new Fm(C,D);this.xr=bt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=jt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=jt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(x){x!==void 0&&(tt=x,this.setSize(Zt,K,!1))},this.getSize=function(x){return x.set(Zt,K)},this.setSize=function(x,P,X=!0){if(bt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=x,K=P,e.width=Math.floor(x*tt),e.height=Math.floor(P*tt),X===!0&&(e.style.width=x+"px",e.style.height=P+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(Zt*tt,K*tt).floor()},this.setDrawingBufferSize=function(x,P,X){Zt=x,K=P,tt=X,e.width=Math.floor(x*X),e.height=Math.floor(P*X),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(S===We){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(it)},this.getViewport=function(x){return x.copy(vt)},this.setViewport=function(x,P,X,k){x.isVector4?vt.set(x.x,x.y,x.z,x.w):vt.set(x,P,X,k),g.viewport(it.copy(vt).multiplyScalar(tt).round())},this.getScissor=function(x){return x.copy(zt)},this.setScissor=function(x,P,X,k){x.isVector4?zt.set(x.x,x.y,x.z,x.w):zt.set(x,P,X,k),g.scissor(Ct.copy(zt).multiplyScalar(tt).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(x){g.setScissorTest(xe=x)},this.setOpaqueSort=function(x){Mt=x},this.setTransparentSort=function(x){It=x},this.getClearColor=function(x){return x.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,X=!0){let k=0;if(x){let H=!1;if(st!==null){const mt=st.texture.format;H=p.has(mt)}if(H){const mt=st.texture.type,xt=d.has(mt),pt=Nt.getClearColor(),St=Nt.getClearAlpha(),wt=pt.r,Ft=pt.g,Ht=pt.b;xt?(y[0]=wt,y[1]=Ft,y[2]=Ht,y[3]=St,D.clearBufferuiv(D.COLOR,0,y)):(R[0]=wt,R[1]=Ft,R[2]=Ht,R[3]=St,D.clearBufferiv(D.COLOR,0,R))}else k|=D.COLOR_BUFFER_BIT}P&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",Ze,!1),Nt.dispose(),ut.dispose(),lt.dispose(),V.dispose(),rt.dispose(),j.dispose(),gt.dispose(),nt.dispose(),ot.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Qa),bt.removeEventListener("sessionend",ja),Gn.stop()};function ae(x){x.preventDefault(),ks("WebGLRenderer: Context Lost."),L=!0}function Jt(){ks("WebGLRenderer: Context Restored."),L=!1;const x=O.autoReset,P=Pt.enabled,X=Pt.autoUpdate,k=Pt.needsUpdate,H=Pt.type;Rt(),O.autoReset=x,Pt.enabled=P,Pt.autoUpdate=X,Pt.needsUpdate=k,Pt.type=H}function Ze(x){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function sn(x){const P=x.target;P.removeEventListener("dispose",sn),hc(P)}function hc(x){dc(x),V.remove(x)}function dc(x){const P=V.get(x).programs;P!==void 0&&(P.forEach(function(X){ot.releaseProgram(X)}),x.isShaderMaterial&&ot.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,X,k,H,mt){P===null&&(P=Oe);const xt=H.isMesh&&H.matrixWorld.determinantAffine()<0,pt=pc(x,P,X,k,H);g.setMaterial(k,xt);let St=X.index,wt=1;if(k.wireframe===!0){if(St=Z.getWireframeAttribute(X),St===void 0)return;wt=2}const Ft=X.drawRange,Ht=X.attributes.position;let yt=Ft.start*wt,Qt=(Ft.start+Ft.count)*wt;mt!==null&&(yt=Math.max(yt,mt.start*wt),Qt=Math.min(Qt,(mt.start+mt.count)*wt)),St!==null?(yt=Math.max(yt,0),Qt=Math.min(Qt,St.count)):Ht!=null&&(yt=Math.max(yt,0),Qt=Math.min(Qt,Ht.count));const _e=Qt-yt;if(_e<0||_e===1/0)return;gt.setup(H,k,pt,X,St);let le,ie=ct;if(St!==null&&(le=at.get(St),ie=Q,ie.setIndex(le)),H.isMesh)k.wireframe===!0?(g.setLineWidth(k.wireframeLinewidth*ge()),ie.setMode(D.LINES)):ie.setMode(D.TRIANGLES);else if(H.isLine){let Re=k.linewidth;Re===void 0&&(Re=1),g.setLineWidth(Re*ge()),H.isLineSegments?ie.setMode(D.LINES):H.isLineLoop?ie.setMode(D.LINE_LOOP):ie.setMode(D.LINE_STRIP)}else H.isPoints?ie.setMode(D.POINTS):H.isSprite&&ie.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))ie.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Re=H._multiDrawStarts,_t=H._multiDrawCounts,De=H._multiDrawCount,$t=St?at.get(St).bytesPerElement:1,Xe=V.get(k).currentProgram.getUniforms();for(let rn=0;rn<De;rn++)Xe.setValue(D,"_gl_DrawID",rn),ie.render(Re[rn]/$t,_t[rn])}else if(H.isInstancedMesh)ie.renderInstances(yt,_e,H.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_t=Math.min(X.instanceCount,Re);ie.renderInstances(yt,_e,_t)}else ie.render(yt,_e)};function Ja(x,P,X,k){U!==null&&x.isNodeMaterial&&U.setObject(k,x),Kt===!0&&Tt.setState(x,X,!1),x.transparent===!0&&x.side===Be&&x.forceSinglePass===!1?(x.side=ze,x.needsUpdate=!0,Qi(x,P,k),x.side=Zn,x.needsUpdate=!0,Qi(x,P,k),x.side=Be):Qi(x,P,k)}this.compile=function(x,P,X=null){X===null&&(X=x),U!==null&&U.renderStart(x,P,X),w=lt.get(X),w.init(P),v.push(w),X.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),x!==X&&x.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),re=this.localClippingEnabled,Kt=Tt.init(this.clippingPlanes,re),Kt===!0&&Tt.setGlobalState(this.clippingPlanes,P),U!==null&&Pt.render(w.state.shadowsArray,X,P);const k=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const mt=H.material;if(mt)if(Array.isArray(mt))for(let xt=0;xt<mt.length;xt++){const pt=mt[xt];Ja(pt,X,P,H),k.add(pt)}else Ja(mt,X,P,H),k.add(mt)}),w=v.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(x,P,X=null){const k=this.compile(x,P,X);return new Promise(H=>{function mt(){if(k.forEach(function(xt){const St=V.get(xt).currentProgram;(St===void 0||St.isReady())&&k.delete(xt)}),k.size===0){H(x);return}setTimeout(mt,10)}jt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ks=null;function uc(x){Ks&&Ks(x)}function Qa(){Gn.stop()}function ja(){Gn.start()}const Gn=new Jl;Gn.setAnimationLoop(uc),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(x){Ks=x,bt.setAnimationLoop(x),x===null?Gn.stop():Gn.start()},bt.addEventListener("sessionstart",Qa),bt.addEventListener("sessionend",ja),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(x,P);const X=bt.enabled===!0&&bt.isPresenting===!0,k=E!==null&&(st===null||X)&&E.begin(C,st);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(P),P=bt.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,P,st),w=lt.get(x,v.length),w.init(P),w.state.textureUnits=$.getTextureUnits(),v.push(w),Vt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),kt.setFromProjectionMatrix(Vt,fn,P.reversedDepth),re=this.localClippingEnabled,Kt=Tt.init(this.clippingPlanes,re),b=ut.get(x,A.length),b.init(),A.push(b),bt.enabled===!0&&bt.isPresenting===!0){const xt=C.xr.getDepthSensingMesh();xt!==null&&Zs(xt,P,-1/0,C.sortObjects)}Zs(x,P,0,C.sortObjects),b.finish(),U!==null&&U.updateLights(w.state.lightsArray),C.sortObjects===!0&&b.sort(Mt,It),de=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,de&&Nt.addToRenderList(b,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Tt.beginShadows();const H=w.state.shadowsArray;if(Pt.render(H,x,P),Kt===!0&&Tt.endShadows(),(k&&E.hasRenderPass())===!1){const xt=b.opaque,pt=b.transmissive;if(w.setupLights(),P.isArrayCamera){const St=P.cameras;if(pt.length>0)for(let wt=0,Ft=St.length;wt<Ft;wt++){const Ht=St[wt];eo(xt,pt,x,Ht)}de&&Nt.render(x);for(let wt=0,Ft=St.length;wt<Ft;wt++){const Ht=St[wt];to(b,x,Ht,Ht.viewport)}}else pt.length>0&&eo(xt,pt,x,P),de&&Nt.render(x),to(b,x,P)}st!==null&&q===0&&($.updateMultisampleRenderTarget(st),$.updateRenderTargetMipmap(st)),k&&E.end(C),x.isScene===!0&&x.onAfterRender(C,x,P),gt.resetDefaultState(),Y=-1,et=null,v.pop(),v.length>0?(w=v[v.length-1],$.setTextureUnits(w.state.textureUnits),Kt===!0&&Tt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,U!==null&&U.renderEnd()};function Zs(x,P,X,k){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLightProbeGrid)w.pushLightProbeGrid(x);else if(x.isLight)w.pushLight(x),x.castShadow&&w.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(kt)){k&&be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Vt);const xt=j.update(x),pt=x.material;pt.visible&&b.push(x,xt,pt,X,be.z,null,P)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(kt))){const xt=j.update(x),pt=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),be.copy(x.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),be.copy(xt.boundingSphere.center)),be.applyMatrix4(x.matrixWorld).applyMatrix4(Vt)),Array.isArray(pt)){const St=xt.groups;for(let wt=0,Ft=St.length;wt<Ft;wt++){const Ht=St[wt],yt=pt[Ht.materialIndex];yt&&yt.visible&&b.push(x,xt,yt,X,be.z,Ht,P)}}else pt.visible&&b.push(x,xt,pt,X,be.z,null,P)}}const mt=x.children;for(let xt=0,pt=mt.length;xt<pt;xt++)Zs(mt[xt],P,X,k)}function to(x,P,X,k){const{opaque:H,transmissive:mt,transparent:xt}=x;w.setupLightsView(X),Kt===!0&&Tt.setGlobalState(C.clippingPlanes,X),k&&g.viewport(it.copy(k)),H.length>0&&Ji(H,P,X),mt.length>0&&Ji(mt,P,X),xt.length>0&&Ji(xt,P,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function eo(x,P,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const yt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new en(1,1,{generateMipmaps:!0,type:yt?_n:We,minFilter:Yn,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const mt=w.state.transmissionRenderTarget[k.id],xt=k.viewport||it;mt.setSize(xt.z*C.transmissionResolutionScale,xt.w*C.transmissionResolutionScale);const pt=C.getRenderTarget(),St=C.getActiveCubeFace(),wt=C.getActiveMipmapLevel();C.setRenderTarget(mt),C.getClearColor(se),qt=C.getClearAlpha(),qt<1&&C.setClearColor(16777215,.5),C.clear(),de&&Nt.render(X);const Ft=C.toneMapping;C.toneMapping=pn;const Ht=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Kt===!0&&Tt.setGlobalState(C.clippingPlanes,k),Ji(x,X,k),$.updateMultisampleRenderTarget(mt),$.updateRenderTargetMipmap(mt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Qt=0,_e=P.length;Qt<_e;Qt++){const le=P[Qt],{object:ie,geometry:Re,material:_t,group:De}=le;if(_t.side===Be&&ie.layers.test(k.layers)){const $t=_t.side;_t.side=ze,_t.needsUpdate=!0,no(ie,X,k,Re,_t,De),_t.side=$t,_t.needsUpdate=!0,yt=!0}}yt===!0&&($.updateMultisampleRenderTarget(mt),$.updateRenderTargetMipmap(mt))}C.setRenderTarget(pt,St,wt),C.setClearColor(se,qt),Ht!==void 0&&(k.viewport=Ht),C.toneMapping=Ft}function Ji(x,P,X){const k=P.isScene===!0?P.overrideMaterial:null;for(let H=0,mt=x.length;H<mt;H++){const xt=x[H],{object:pt,geometry:St,group:wt}=xt;let Ft=xt.material;Ft.allowOverride===!0&&k!==null&&(Ft=k),pt.layers.test(X.layers)&&no(pt,P,X,St,Ft,wt)}}function no(x,P,X,k,H,mt){U!==null&&H.isNodeMaterial&&U.setObject(x,H),x.onBeforeRender(C,P,X,k,H,mt),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(C,P,X,k,x,mt),H.transparent===!0&&H.side===Be&&H.forceSinglePass===!1?(H.side=ze,H.needsUpdate=!0,C.renderBufferDirect(X,P,k,H,x,mt),H.side=Zn,H.needsUpdate=!0,C.renderBufferDirect(X,P,k,H,x,mt),H.side=Be):C.renderBufferDirect(X,P,k,H,x,mt),x.onAfterRender(C,P,X,k,H,mt)}function Qi(x,P,X){P.isScene!==!0&&(P=Oe);const k=V.get(x),H=w.state.lights,mt=w.state.shadowsArray,xt=H.state.version,pt=ot.getParameters(x,H.state,mt,P,X,w.state.lightProbeGridArray),St=ot.getProgramCacheKey(pt);let wt=k.programs;k.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,k.fog=P.fog;const Ft=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;k.envMap=rt.get(x.envMap||k.environment,Ft),k.envMapRotation=k.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,wt===void 0&&(x.addEventListener("dispose",sn),wt=new Map,k.programs=wt);let Ht=wt.get(St);if(Ht!==void 0){if(k.currentProgram===Ht&&k.lightsStateVersion===xt)return so(x,pt),Ht}else pt.uniforms=ot.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,X,pt),x.onBeforeCompile(pt,C),Ht=ot.acquireProgram(pt,St),wt.set(St,Ht),k.uniforms=pt.uniforms;const yt=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(yt.clippingPlanes=Tt.uniform),so(x,pt),k.needsLights=gc(x),k.lightsStateVersion=xt,k.needsLights&&(yt.ambientLightColor.value=H.state.ambient,yt.lightProbe.value=H.state.probe,yt.sunLights.value=H.state.sun,yt.sunLightShadows.value=H.state.sunShadow,yt.directionalLights.value=H.state.directional,yt.directionalLightShadows.value=H.state.directionalShadow,yt.spotLights.value=H.state.spot,yt.spotLightShadows.value=H.state.spotShadow,yt.rectAreaLights.value=H.state.rectArea,yt.ltc_1.value=H.state.rectAreaLTC1,yt.ltc_2.value=H.state.rectAreaLTC2,yt.pointLights.value=H.state.point,yt.pointLightShadows.value=H.state.pointShadow,yt.hemisphereLights.value=H.state.hemi,yt.sunShadowMatrix.value=H.state.sunShadowMatrix,yt.sunShadowCascade.value=H.state.sunShadowCascade,yt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,yt.spotLightMatrix.value=H.state.spotLightMatrix,yt.spotLightMap.value=H.state.spotLightMap,yt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=Ht,k.uniformsList=null,Ht}function io(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=Us.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function so(x,P){const X=V.get(x);X.outputColorSpace=P.outputColorSpace,X.batching=P.batching,X.batchingColor=P.batchingColor,X.instancing=P.instancing,X.instancingColor=P.instancingColor,X.instancingMorph=P.instancingMorph,X.skinning=P.skinning,X.morphTargets=P.morphTargets,X.morphNormals=P.morphNormals,X.morphColors=P.morphColors,X.morphTargetsCount=P.morphTargetsCount,X.numClippingPlanes=P.numClippingPlanes,X.numIntersection=P.numClipIntersection,X.vertexAlphas=P.vertexAlphas,X.vertexTangents=P.vertexTangents,X.toneMapping=P.toneMapping}function fc(x,P){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let X=0,k=x.length;X<k;X++){const H=x[X];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function pc(x,P,X,k,H){P.isScene!==!0&&(P=Oe),$.resetTextureUnits();const mt=P.fog,xt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?P.environment:null,pt=st===null?C.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Wt.workingColorSpace,St=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,wt=rt.get(k.envMap||xt,St),Ft=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ht=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),yt=!!X.morphAttributes.position,Qt=!!X.morphAttributes.normal,_e=!!X.morphAttributes.color;let le=pn;k.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(le=C.toneMapping);const ie=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Re=ie!==void 0?ie.length:0,_t=V.get(k),De=w.state.lights;if(Kt===!0&&(re===!0||x!==et)){const oe=x===et&&k.id===Y;Tt.setState(k,x,oe)}let $t=!1;k.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==De.state.version||_t.outputColorSpace!==pt||H.isBatchedMesh&&_t.batching===!1||!H.isBatchedMesh&&_t.batching===!0||H.isBatchedMesh&&_t.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&_t.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&_t.instancing===!1||!H.isInstancedMesh&&_t.instancing===!0||H.isSkinnedMesh&&_t.skinning===!1||!H.isSkinnedMesh&&_t.skinning===!0||H.isInstancedMesh&&_t.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&_t.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&_t.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&_t.instancingMorph===!1&&H.morphTexture!==null||_t.envMap!==wt||k.fog===!0&&_t.fog!==mt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Tt.numPlanes||_t.numIntersection!==Tt.numIntersection)||_t.vertexAlphas!==Ft||_t.vertexTangents!==Ht||_t.morphTargets!==yt||_t.morphNormals!==Qt||_t.morphColors!==_e||_t.toneMapping!==le||_t.morphTargetsCount!==Re||!!_t.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,_t.__version=k.version);let Xe=_t.currentProgram;$t===!0&&(Xe=Qi(k,P,H),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Xe,_t));let rn=!1,Pn=!1,ei=!1;const ee=Xe.getUniforms(),me=_t.uniforms;if(g.useProgram(Xe.program)&&(rn=!0,Pn=!0,ei=!0),k.id!==Y&&(Y=k.id,Pn=!0),_t.needsLights){const oe=fc(w.state.lightProbeGridArray,H);_t.lightProbeGrid!==oe&&(_t.lightProbeGrid=oe,Pn=!0)}if(rn||et!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ee.setValue(D,"projectionMatrix",x.projectionMatrix),ee.setValue(D,"viewMatrix",x.matrixWorldInverse);const In=ee.map.cameraPosition;In!==void 0&&In.setValue(D,ce.setFromMatrixPosition(x.matrixWorld)),T.logarithmicDepthBuffer&&ee.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ee.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),et!==x&&(et=x,Pn=!0,ei=!0)}if(_t.needsLights&&(De.state.sunShadowMap.length>0&&ee.setValue(D,"sunShadowMap",De.state.sunShadowMap,$),De.state.directionalShadowMap.length>0&&ee.setValue(D,"directionalShadowMap",De.state.directionalShadowMap,$),De.state.spotShadowMap.length>0&&ee.setValue(D,"spotShadowMap",De.state.spotShadowMap,$),De.state.pointShadowMap.length>0&&ee.setValue(D,"pointShadowMap",De.state.pointShadowMap,$)),H.isSkinnedMesh){ee.setOptional(D,H,"bindMatrix"),ee.setOptional(D,H,"bindMatrixInverse");const oe=H.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),ee.setValue(D,"boneTexture",oe.boneTexture,$))}H.isBatchedMesh&&(ee.setOptional(D,H,"batchingTexture"),ee.setValue(D,"batchingTexture",H._matricesTexture,$),ee.setOptional(D,H,"batchingIdTexture"),ee.setValue(D,"batchingIdTexture",H._indirectTexture,$),ee.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&ee.setValue(D,"batchingColorTexture",H._colorsTexture,$));const Ln=X.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&I.update(H,X,Xe),(Pn||_t.receiveShadow!==H.receiveShadow)&&(_t.receiveShadow=H.receiveShadow,ee.setValue(D,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&P.environment!==null&&(me.envMapIntensity.value=P.environmentIntensity),me.dfgLUT!==void 0&&(me.dfgLUT.value=Hm()),Pn){if(ee.setValue(D,"toneMappingExposure",C.toneMappingExposure),_t.needsLights&&mc(me,ei),mt&&k.fog===!0&&Et.refreshFogUniforms(me,mt),Et.refreshMaterialUniforms(me,k,tt,K,w.state.transmissionRenderTarget[x.id]),_t.needsLights&&_t.lightProbeGrid){const oe=_t.lightProbeGrid;me.probesSH.value=oe.texture,me.probesMin.value.copy(oe.boundingBox.min),me.probesMax.value.copy(oe.boundingBox.max),me.probesResolution.value.copy(oe.resolution)}Us.upload(D,io(_t),me,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Us.upload(D,io(_t),me,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ee.setValue(D,"center",H.center),ee.setValue(D,"modelViewMatrix",H.modelViewMatrix),ee.setValue(D,"normalMatrix",H.normalMatrix),ee.setValue(D,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const oe=k.uniformsGroups;for(let In=0,ni=oe.length;In<ni;In++){const ao=oe[In];nt.update(ao,Xe),nt.bind(ao,Xe)}}return Xe}function mc(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function gc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(x,P,X){const k=V.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),V.get(x.texture).__webglTexture=P,V.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){const X=V.get(x);X.__webglFramebuffer=P,X.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,X=0){st=x,J=P,q=X;let k=null,H=!1,mt=!1;if(x){const pt=V.get(x);if(pt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,pt.__webglFramebuffer),it.copy(x.viewport),Ct.copy(x.scissor),At=x.scissorTest,g.viewport(it),g.scissor(Ct),g.setScissorTest(At),Y=-1;return}else if(pt.__webglFramebuffer===void 0)$.setupRenderTarget(x);else if(pt.__hasExternalTextures)$.rebindTextures(x,V.get(x.texture).__webglTexture,V.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ft=x.depthTexture;if(pt.__boundDepthTexture!==Ft){if(Ft!==null&&V.has(Ft)&&(x.width!==Ft.image.width||x.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(x)}}const St=x.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(mt=!0);const wt=V.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(wt[P])?k=wt[P][X]:k=wt[P],H=!0):x.samples>0&&$.useMultisampledRTT(x)===!1?k=V.get(x).__webglMultisampledFramebuffer:Array.isArray(wt)?k=wt[X]:k=wt,it.copy(x.viewport),Ct.copy(x.scissor),At=x.scissorTest}else it.copy(vt).multiplyScalar(tt).floor(),Ct.copy(zt).multiplyScalar(tt).floor(),At=xe;if(X!==0&&(k=z),g.bindFramebuffer(D.FRAMEBUFFER,k)&&g.drawBuffers(x,k),g.viewport(it),g.scissor(Ct),g.setScissorTest(At),H){const pt=V.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,pt.__webglTexture,X)}else if(mt){const pt=P;for(let St=0;St<x.textures.length;St++){const wt=V.get(x.textures[St]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+St,wt.__webglTexture,X,pt)}}else if(x!==null&&X!==0){const pt=V.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pt.__webglTexture,X)}Y=-1};function ro(x){const P=V.get(x);return(P.__readFormat!==x.format||P.__readType!==x.type)&&(P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=T.textureFormatReadable(x.format),P.__typeReadable=T.textureTypeReadable(x.type)),P}this.readRenderTargetPixels=function(x,P,X,k,H,mt,xt,pt=0){if(!(x&&x.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){g.bindFramebuffer(D.FRAMEBUFFER,St);try{const wt=x.textures[pt],Ft=wt.format,Ht=wt.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pt);const yt=ro(wt);if(yt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-k&&X>=0&&X<=x.height-H&&D.readPixels(P,X,k,H,ht.convert(Ft),ht.convert(Ht),mt)}finally{const wt=st!==null?V.get(st).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(x,P,X,k,H,mt,xt,pt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St)if(P>=0&&P<=x.width-k&&X>=0&&X<=x.height-H){g.bindFramebuffer(D.FRAMEBUFFER,St);const wt=x.textures[pt],Ft=wt.format,Ht=wt.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pt);const yt=ro(wt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qt),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),D.readPixels(P,X,k,H,ht.convert(Ft),ht.convert(Ht),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const _e=st!==null?V.get(st).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,_e);const le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await th(D,le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Qt),D.deleteSync(le),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,X=0){const k=Math.pow(2,-X),H=Math.floor(x.image.width*k),mt=Math.floor(x.image.height*k),xt=P!==null?P.x:0,pt=P!==null?P.y:0;$.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,xt,pt,H,mt),g.unbindTexture()},this.copyTextureToTexture=function(x,P,X=null,k=null,H=0,mt=0){let xt,pt,St,wt,Ft,Ht,yt,Qt,_e;const le=x.isCompressedTexture?x.mipmaps[mt]:x.image;if(X!==null)xt=X.max.x-X.min.x,pt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,wt=X.min.x,Ft=X.min.y,Ht=X.isBox3?X.min.z:0;else{const me=Math.pow(2,-H);xt=Math.floor(le.width*me),pt=Math.floor(le.height*me),x.isDataArrayTexture?St=le.depth:x.isData3DTexture?St=Math.floor(le.depth*me):St=1,wt=0,Ft=0,Ht=0}k!==null?(yt=k.x,Qt=k.y,_e=k.z):(yt=0,Qt=0,_e=0);const ie=ht.convert(P.format),Re=ht.convert(P.type);let _t;P.isData3DTexture?($.setTexture3D(P,0),_t=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?($.setTexture2DArray(P,0),_t=D.TEXTURE_2D_ARRAY):($.setTexture2D(P,0),_t=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const De=g.getParameter(D.UNPACK_ROW_LENGTH),$t=g.getParameter(D.UNPACK_IMAGE_HEIGHT),Xe=g.getParameter(D.UNPACK_SKIP_PIXELS),rn=g.getParameter(D.UNPACK_SKIP_ROWS),Pn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,le.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,wt),g.pixelStorei(D.UNPACK_SKIP_ROWS,Ft),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Ht);const ei=x.isDataArrayTexture||x.isData3DTexture,ee=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){const me=V.get(x),Ln=V.get(P),oe=V.get(me.__renderTarget),In=V.get(Ln.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,oe.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let ni=0;ni<St;ni++)ei&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(x).__webglTexture,H,Ht+ni),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(P).__webglTexture,mt,_e+ni)),D.blitFramebuffer(wt,Ft,xt,pt,yt,Qt,xt,pt,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||V.has(x)){const me=V.get(x),Ln=V.get(P);g.bindFramebuffer(D.READ_FRAMEBUFFER,N),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let oe=0;oe<St;oe++)ei?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,me.__webglTexture,H,Ht+oe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,H),ee?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ln.__webglTexture,mt,_e+oe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ln.__webglTexture,mt),H!==0?D.blitFramebuffer(wt,Ft,xt,pt,yt,Qt,xt,pt,D.COLOR_BUFFER_BIT,D.NEAREST):ee?D.copyTexSubImage3D(_t,mt,yt,Qt,_e+oe,wt,Ft,xt,pt):D.copyTexSubImage2D(_t,mt,yt,Qt,wt,Ft,xt,pt);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ee?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(_t,mt,yt,Qt,_e,xt,pt,St,ie,Re,le.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,mt,yt,Qt,_e,xt,pt,St,ie,le.data):D.texSubImage3D(_t,mt,yt,Qt,_e,xt,pt,St,ie,Re,le):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,yt,Qt,xt,pt,ie,Re,le.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,yt,Qt,le.width,le.height,ie,le.data):D.texSubImage2D(D.TEXTURE_2D,mt,yt,Qt,xt,pt,ie,Re,le);g.pixelStorei(D.UNPACK_ROW_LENGTH,De),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),g.pixelStorei(D.UNPACK_SKIP_ROWS,rn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Pn),mt===0&&P.generateMipmaps&&D.generateMipmap(_t),g.unbindTexture()},this.initRenderTarget=function(x){V.get(x).__webglFramebuffer===void 0&&$.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?$.setTextureCube(x,0):x.isData3DTexture?$.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?$.setTexture2DArray(x,0):$.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){J=0,q=0,st=null,g.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}const yi=10,Vm=.6,Wm=.42,Xm=12,qm=4.5,$m=14,Ym=.55,al=1.35,ol=25,ll=.8,Km=1.2,Zm=8,Jm=8,Qm=18,jm=2.8,cl=58*Math.PI/180,hl=50,dl=8e3,ul=3e3,fl=1500,tg=2,eg=2,ng=100/720,pl={1:"街角收集芽",2:"巷口记忆洞",3:"车流归档员",4:"公交收藏家",5:"民居博物生",6:"街区策展人",7:"城市讲解员",8:"天际线守护",9:"博物馆长"},ig={1:"街角收集芽",2:"巷口记忆洞",3:"车流归档员",4:"公交收藏家",5:"民居博物生",6:"街区策展人",7:"城市讲解员",8:"天际线守护",9:"博物馆长"},Gs=[10,35,70,140,260,520,1100,2200,4e3],Lr=[{level:1,name:"碎片",sizeThreshold:.55,massThreshold:8,massRewardMin:2,massRewardMax:4,color:7041664},{level:2,name:"市井小品",sizeThreshold:.85,massThreshold:18,massRewardMin:6,massRewardMax:10,color:16096779},{level:3,name:"小型载具",sizeThreshold:1.2,massThreshold:35,massRewardMin:15,massRewardMax:25,color:3900150},{level:4,name:"汽车",sizeThreshold:1.9,massThreshold:70,massRewardMin:40,massRewardMax:60,color:15680580},{level:5,name:"公交卡车",sizeThreshold:3.2,massThreshold:140,massRewardMin:90,massRewardMax:130,color:9133302},{level:6,name:"民居",sizeThreshold:4.5,massThreshold:260,massRewardMin:180,massRewardMax:250,color:14251782},{level:7,name:"公寓",sizeThreshold:7,massThreshold:520,massRewardMin:400,massRewardMax:550,color:366185},{level:8,name:"场馆",sizeThreshold:11,massThreshold:1100,massRewardMin:900,massRewardMax:1200,color:959977},{level:9,name:"天际线",sizeThreshold:16,massThreshold:2200,massRewardMin:2e3,massRewardMax:2800,color:6583435},{level:10,name:"地标",sizeThreshold:22,massThreshold:4e3,massRewardMin:5e3,massRewardMax:8e3,color:16498468}];function Ir(i){return Vm*Math.pow(i/yi,Wm)}function sg(i){const t=Xm/(1+Ym*Math.log10(Math.max(i/yi,1)));return Math.min($m,Math.max(qm,t))}function rc(i){let t=1;for(let e=0;e<Gs.length;e++)i>=Gs[e]&&(t=e+1);return Math.min(t,9)}const Dr="https://xiaojohn-eng.github.io/black-hole-city/";class rg{constructor(t){F(this,"mass",yi);F(this,"radius",Ir(yi));F(this,"level",1);F(this,"x",0);F(this,"z",-90);F(this,"dirX",0);F(this,"dirZ",1);F(this,"mesh");F(this,"disc");F(this,"rim");F(this,"rimMat");F(this,"speedBoost",0);F(this,"boostTimer",0);F(this,"velX",0);F(this,"velZ",0);F(this,"rimFlash",0);this.mesh=new Gt;const e=new jn(1,48),n=new Rn({color:328968});this.disc=new W(e,n),this.disc.rotation.x=-Math.PI/2,this.disc.position.y=.05,this.mesh.add(this.disc);const s=new Ci(.85,1.05,48);this.rimMat=new Rn({color:3003583,side:Be,transparent:!0,opacity:.9}),this.rim=new W(s,this.rimMat),this.rim.rotation.x=-Math.PI/2,this.rim.position.y=.06,this.mesh.add(this.rim);const r=new jn(.5,32),a=new Rn({color:1120295,transparent:!0,opacity:.95}),o=new W(r,a);o.rotation.x=-Math.PI/2,o.position.y=.07,this.mesh.add(o),t.add(this.mesh),this.syncVisual()}get speed(){return sg(this.mass)*(1+this.speedBoost)}addMass(t){const e=this.level;return this.mass+=t,this.radius=Ir(this.mass),this.level=rc(this.mass),this.syncVisual(),this.level>e?(this.speedBoost=.15,this.boostTimer=.4,this.rimFlash=.6,!0):!1}syncVisual(){this.mesh.scale.setScalar(this.radius),this.mesh.position.set(this.x,0,this.z)}update(t,e,n,s,r){this.boostTimer>0&&(this.boostTimer-=t,this.boostTimer<=0&&(this.speedBoost=0));const a=e*this.speed,o=n*this.speed,c=1-Math.exp(-10*t);this.velX+=(a-this.velX)*c,this.velZ+=(o-this.velZ)*c,this.x+=this.velX*t,this.z+=this.velZ*t;const l=Math.hypot(this.velX,this.velZ);l>.5&&(this.dirX=this.velX/l,this.dirZ=this.velZ/l);const u=s-r-this.radius;if(this.x=Math.max(-u,Math.min(u,this.x)),this.z=Math.max(-u,Math.min(u,this.z)),this.mesh.position.set(this.x,0,this.z),this.rimFlash>0){this.rimFlash-=t;const f=Math.max(0,this.rimFlash)/.6;this.rimMat.color.setHex(16498468),this.rimMat.opacity=.5+f*.5,this.rim.scale.setScalar(.9+(1-f)*.8),this.rimFlash<=0&&(this.rimMat.color.setHex(3003583),this.rimMat.opacity=.9)}else{const f=.85+Math.sin(performance.now()*.006)*.08;this.rim.scale.setScalar(f)}}reset(t=0,e=-90){this.mass=yi,this.radius=Ir(yi),this.level=1,this.x=t,this.z=e,this.dirX=0,this.dirZ=1,this.speedBoost=0,this.boostTimer=0,this.velX=0,this.velZ=0,this.rimFlash=0,this.rimMat.color.setHex(3003583),this.rimMat.opacity=.9,this.syncVisual()}}class ag{constructor(t=12){F(this,"cellSize");F(this,"cells",new Map);this.cellSize=t}clear(){this.cells.clear()}key(t,e){return`${t},${e}`}cellOf(t,e){return[Math.floor(t/this.cellSize),Math.floor(e/this.cellSize)]}insert(t){const[e,n]=this.cellOf(t.x,t.z),s=this.key(e,n);let r=this.cells.get(s);r||(r=[],this.cells.set(s,r)),r.push(t)}rebuild(t){this.clear();for(const e of t)e.state!=="digested"&&this.insert(e)}query(t,e,n){const s=n,[r,a]=this.cellOf(t-s,e-s),[o,c]=this.cellOf(t+s,e+s),l=[],u=new Set;for(let f=r;f<=o;f++)for(let h=a;h<=c;h++){const m=this.cells.get(this.key(f,h));if(m)for(const _ of m)u.has(_.id)||_.state==="digested"||(u.add(_.id),l.push(_))}return l}}function og(i,t){switch(i){case"tiananmen_gate":return hg(t);case"forbidden_city":return dg(t);case"temple_of_heaven":return ug(t);case"birds_nest":return fg(t);case"cbd_tower":return pg(t);case"monument_obelisk":return gg(t);case"bund_colonnade":return _g(t);case"oriental_pearl":return vg(t);case"lujiazui_tower":return xg(t);case"city_god_temple":return Mg(t);case"flood_monument":return Sg(t);case"onion_dome":return yg(t);case"central_street":return bg(t);case"ice_castle":return wg(t);case"dragon_tower":return Eg(t);case"canton_tower":return Tg(t);case"yellow_crane_tower":return Ag(t);case"yangtze_bridge":return Rg(t);case"bell_tower":return Cg(t);case"dayan_pagoda":return Pg(t);case"city_wall_gate":return Lg(t);case"qilou_arcade":return Ig(t);case"wide_alley":return Dg(t);case"panda_grove":return Ug(t);case"tv_tower":default:return cg(t)}}function lg(i){switch(i){case"tiananmen_gate":return{hw:16,hd:6,height:18,isCircle:!1};case"forbidden_city":return{hw:16,hd:22,height:16,isCircle:!1};case"temple_of_heaven":return{hw:8,hd:8,height:22,isCircle:!0};case"birds_nest":return{hw:12,hd:10,height:14,isCircle:!0};case"cbd_tower":return{hw:5,hd:5,height:44,isCircle:!1};case"monument_obelisk":return{hw:6,hd:6,height:28,isCircle:!1};case"bund_colonnade":return{hw:18,hd:6,height:18,isCircle:!1};case"oriental_pearl":return{hw:6,hd:6,height:46,isCircle:!0};case"lujiazui_tower":return{hw:5,hd:5,height:48,isCircle:!1};case"city_god_temple":return{hw:8,hd:8,height:14,isCircle:!1};case"flood_monument":return{hw:7,hd:7,height:26,isCircle:!1};case"onion_dome":return{hw:8,hd:8,height:24,isCircle:!1};case"central_street":return{hw:16,hd:5,height:12,isCircle:!1};case"ice_castle":return{hw:10,hd:10,height:18,isCircle:!1};case"dragon_tower":return{hw:4,hd:4,height:46,isCircle:!0};case"canton_tower":return{hw:5,hd:5,height:50,isCircle:!0};case"yellow_crane_tower":return{hw:8,hd:8,height:28,isCircle:!1};case"yangtze_bridge":return{hw:22,hd:6,height:18,isCircle:!1};case"bell_tower":return{hw:8,hd:8,height:22,isCircle:!1};case"dayan_pagoda":return{hw:8,hd:8,height:32,isCircle:!1};case"city_wall_gate":return{hw:14,hd:6,height:18,isCircle:!1};case"qilou_arcade":return{hw:16,hd:5,height:12,isCircle:!1};case"wide_alley":return{hw:16,hd:6,height:10,isCircle:!1};case"panda_grove":return{hw:10,hd:10,height:8,isCircle:!0};default:return{hw:3,hd:3,height:48,isCircle:!1}}}function cg(i){const t=new Gt,e=new W(new ue(1.2,2.2,36,8),i(13934615));e.position.y=18,t.add(e);const n=new W(new ue(3.5,3.5,3,8),i(16096779));n.position.y=30,t.add(n);const s=new W(new ke(.6,10,6),i(14870768));return s.position.y=40,t.add(s),t}function hg(i){const t=new Gt,e=new W(new dt(34,3.2,12),i(8330525));e.position.y=1.6,t.add(e);const n=new W(new dt(32,8,4.5),i(10424889));n.position.y=7.2,t.add(n);for(const c of[-12,-6,0,6,12]){const l=new W(new dt(c===0?3.2:2.4,4.2,1.2),i(1841431));l.position.set(c,5.2,2.2),t.add(l)}const s=new W(new dt(22,7,6),i(12131356));s.position.y=14.2,t.add(s);const r=new W(new dt(24,1.4,8),i(15381256));r.position.y=18.1,t.add(r);const a=new W(new dt(20,.6,1.2),i(13273604));a.position.y=19,t.add(a);const o=new W(new Ci(14,24,48),new Rn({color:16498468,transparent:!0,opacity:.35,side:Be}));return o.rotation.x=-Math.PI/2,o.position.y=.08,o.name="__guardRing",t.add(o),t}function dg(i){const t=new Gt,e=new W(new dt(30,.4,42),i(11817737));e.position.y=.2,t.add(e);const n=i(10424889),s=new W(new dt(32,4,1.2),n);s.position.set(0,2,20),t.add(s);const r=s.clone();r.position.set(0,2,-20),t.add(r);const a=new W(new dt(1.2,4,42),n);a.position.set(15.4,2,0),t.add(a);const o=a.clone();o.position.set(-15.4,2,0),t.add(o);const c=[{z:-10,w:14,h:6,d:8},{z:2,w:16,h:8,d:9},{z:13,w:12,h:7,d:8}];for(const l of c){const u=new W(new dt(l.w,l.h,l.d),i(12131356));u.position.set(0,l.h/2+.4,l.z),t.add(u);const f=new W(new dt(l.w+2,1.2,l.d+2),i(15381256));f.position.set(0,l.h+1.2,l.z),t.add(f)}return t}function ug(i){const t=new Gt,e=new W(new ue(10,10,.8,24),i(11051678));e.position.y=.4,t.add(e);const n=new W(new ue(5.5,6.2,4,16),i(12131356));n.position.y=2.8,t.add(n);const s=new W(new ue(7,7,.7,16),i(1920728));s.position.y=5.1,t.add(s);const r=new W(new ue(4.2,5,3.5,16),i(12131356));r.position.y=7.2,t.add(r);const a=new W(new ue(5.6,5.6,.6,16),i(1920728));a.position.y=9.1,t.add(a);const o=new W(new ue(2.8,3.6,3.2,16),i(12131356));o.position.y=11,t.add(o);const c=new W(new ke(4.2,5,16),i(1981066));c.position.y=15.2,t.add(c);const l=new W(new nn(.7,8,8),i(16498468));return l.position.y=18,t.add(l),t}function fg(i){const t=new Gt,e=new W(new nn(10,16,10,0,Math.PI*2,0,Math.PI*.55),i(4472892));e.scale.set(1.15,.55,1),e.position.y=4,t.add(e);for(let s=0;s<10;s++){const r=new W(new dt(.45,.45,20),i(2696484));r.position.y=6,r.rotation.y=s/10*Math.PI,r.rotation.z=.35,t.add(r)}const n=new W(new jn(7,16),i(1467700));return n.rotation.x=-Math.PI/2,n.position.y=2.2,t.add(n),t}function pg(i){const t=new Gt,e=new W(new dt(8,36,8),i(6583435));e.position.y=18,t.add(e);const n=new W(new dt(10,4,10),i(9741240));n.position.y=28,t.add(n);const s=new W(new dt(5,10,5),i(4674921));s.position.y=40,t.add(s);const r=new W(new dt(7.2,28,.2),i(9684477));return r.position.set(0,16,4.1),t.add(r),t}function mg(i){const t=new Gt,e=new W(new dt(10,.15,10),i(11051678));e.position.y=.08,t.add(e);const n=new W(new dt(9,3.2,2.2),i(10576391));n.position.set(0,1.6,4),t.add(n);const s=new W(new dt(9,2.4,2),i(9584654));s.position.set(0,1.2,-4),t.add(s);const r=new W(new dt(2,2.6,6),i(11817737));r.position.set(4,1.3,0),t.add(r);const a=r.clone();return a.position.set(-4,1.3,0),t.add(a),t}function ac(i,t,e){const n=new W(new Ci(t,e,48),new Rn({color:16498468,transparent:!0,opacity:.35,side:Be}));n.rotation.x=-Math.PI/2,n.position.y=.08,n.name="__guardRing",i.add(n)}function gg(i){const t=new Gt,e=new W(new dt(10,2.2,10),i(10265519));e.position.y=1.1,t.add(e);const n=new W(new dt(3.2,22,3.2),i(13751771));n.position.y=13,t.add(n);const s=new W(new ke(2.4,4,4),i(15067115));return s.position.y=26,t.add(s),ac(t,8,16),t}function _g(i){const t=new Gt;for(let e=-3;e<=3;e++){const n=new W(new dt(4.2,10+(e===0?4:0),8),i(e%2?14075824:12891290));n.position.set(e*5,5+(e===0?2:0),0),t.add(n);const s=new W(new dt(4.6,1.2,8.6),i(5722958));if(s.position.set(e*5,10.8+(e===0?4:0),0),t.add(s),e===0){const r=new W(new nn(2.4,10,8),i(11051678));r.position.set(0,16,0),t.add(r)}}return t}function vg(i){const t=new Gt,e=new W(new ue(.7,1.1,36,8),i(14870768));e.position.y=18,t.add(e);const n=new W(new nn(4.2,12,10),i(15680580));n.position.y=12,t.add(n);const s=new W(new nn(2.6,12,10),i(16281969));s.position.y=28,t.add(s);const r=new W(new ke(.5,8,6),i(16317180));return r.position.y=38,t.add(r),t}function xg(i){const t=new Gt,e=new W(new dt(7,40,7),i(6583435));e.position.y=20,t.add(e);const n=new W(new dt(4,12,4),i(9741240));n.position.y=42,t.add(n);const s=new W(new dt(6.2,32,.2),i(8246268));return s.position.set(0,18,3.6),t.add(s),t}function Mg(i){const t=new Gt,e=new W(new dt(16,.3,16),i(11817737));e.position.y=.15,t.add(e);const n=new W(new dt(10,6,8),i(10424889));n.position.y=3.2,t.add(n);const s=new W(new dt(12,1.4,10),i(15381256));s.position.y=7,t.add(s);const r=new W(new dt(8,.5,1),i(13273604));return r.position.y=7.8,t.add(r),t}function Sg(i){const t=new Gt,e=new W(new ue(6,7,2,10),i(10265519));e.position.y=1,t.add(e);const n=new W(new ue(1.4,1.8,18,8),i(14078929));n.position.y=11,t.add(n);const s=new W(new nn(2.2,10,8),i(15197668));return s.position.y=21,t.add(s),ac(t,9,17),t}function yg(i){const t=new Gt,e=new W(new dt(12,10,12),i(10424889));e.position.y=5,t.add(e);const n=new W(new ue(3.2,3.6,4,10),i(12131356));n.position.y=12,t.add(n);const s=new W(new nn(3.6,10,8),i(1483594));s.position.y=16,t.add(s);const r=new W(new ke(.6,4,6),i(15381256));return r.position.y=20,t.add(r),t}function bg(i){const t=new Gt,e=new W(new dt(32,.2,8),i(11051678));e.position.y=.1,t.add(e);for(let n=-2;n<=2;n++){const s=new W(new dt(5.5,9,3.5),i(n%2?14075824:12891290));s.position.set(n*6,4.5,-2),t.add(s)}return t}function wg(i){const t=new Gt,e=new W(new dt(12,8,12),i(12248829));e.position.y=4,t.add(e);for(const s of[-6,6]){const r=new W(new ue(2,2.4,14,8),i(8246268));r.position.set(s,7,s),t.add(r);const a=new W(new ke(2.6,5,8),i(14742270));a.position.set(s,16,s),t.add(a)}const n=new W(new dt(4,5,1),i(223649));return n.position.set(0,2.5,6),t.add(n),t}function Eg(i){const t=new Gt,e=new W(new ue(1.1,2,38,8),i(13358561));e.position.y=19,t.add(e);const n=new W(new ue(4,4,3,10),i(3718648));n.position.y=28,t.add(n);const s=new W(new ke(.5,8,6),i(16317180));return s.position.y=40,t.add(s),t}function Tg(i){const t=new Gt,e=new W(new ue(.9,3.2,40,8),i(14078929));e.position.y=20,t.add(e);const n=new W(new Ha(3.2,.55,8,16),i(16498468));n.rotation.x=Math.PI/2,n.position.y=22,t.add(n);const s=new W(new ue(3.6,3.2,3.2,10),i(16096779));s.position.y=36,t.add(s);const r=new W(new ke(.5,10,6),i(14870768));return r.position.y=44,t.add(r),t}function Ag(i){const t=new Gt,e=new W(new dt(14,2,14),i(10424889));e.position.y=1,t.add(e);const n=[{y:5,w:10,h:5},{y:11,w:8,h:4.5},{y:16.2,w:6,h:4}];for(const r of n){const a=new W(new dt(r.w,r.h,r.w),i(12131356));a.position.y=r.y,t.add(a);const o=new W(new dt(r.w+3,.7,r.w+3),i(15381256));o.position.y=r.y+r.h/2+.2,t.add(o)}const s=new W(new ke(3.2,4,4),i(16436245));return s.position.y=21,t.add(s),t}function Rg(i){const t=new Gt,e=new W(new dt(42,.8,8),i(7893356));e.position.y=6,t.add(e);for(const s of[-12,12]){const r=new W(new dt(2.2,16,2.2),i(14078929));r.position.set(s,8,0),t.add(r)}const n=new W(new dt(26,.25,.25),i(15067115));return n.position.set(0,14,0),t.add(n),t}function Cg(i){const t=new Gt,e=new W(new dt(14,4,14),i(11051678));e.position.y=2,t.add(e);const n=new W(new dt(9,7,9),i(10424889));n.position.y=8.5,t.add(n);const s=new W(new dt(12,1.2,12),i(15381256));s.position.y=12.6,t.add(s);const r=new W(new ke(3.4,4,4),i(13273604));return r.position.y=15.2,t.add(r),t}function Pg(i){const t=new Gt,e=[14,12,10,8.2,6.6,5.2,4];let n=0;for(let r=0;r<e.length;r++){const a=r===0?5:3.6,o=new W(new dt(e[r],a,e[r]),i(12034170));o.position.y=n+a/2,t.add(o),n+=a}const s=new W(new ke(2.2,3.2,4),i(10576391));return s.position.y=n+1.4,t.add(s),t}function Lg(i){const t=new Gt,e=new W(new dt(28,8,6),i(7893356));e.position.y=4,t.add(e);const n=new W(new dt(5,5,6.4),i(1841431));n.position.set(0,2.6,0),t.add(n);const s=new W(new dt(16,6,8),i(10424889));s.position.y=11,t.add(s);const r=new W(new dt(18,1.2,10),i(15381256));return r.position.y=14.4,t.add(r),t}function Ig(i){const t=new Gt,e=new W(new dt(32,.2,6),i(14075824));e.position.y=.1,t.add(e);for(let n=-3;n<=3;n++){const s=new W(new dt(.7,4.2,.7),i(14070922));s.position.set(n*4.4,2.1,2.2),t.add(s);const r=new W(new dt(4,6,4),i(15259061));r.position.set(n*4.4,7,0),t.add(r)}return t}function Dg(i){const t=new Gt,e=new W(new dt(8,.15,28),i(11051678));e.position.y=.08,t.add(e);for(const n of[-5,5])for(let s=-2;s<=2;s++){const r=new W(new dt(4.2,5.5,4.5),i(s%2?14075824:11817737));r.position.set(n,2.75,s*5),t.add(r);const a=new W(new dt(4.6,.5,4.8),i(2042167));a.position.set(n,5.7,s*5),t.add(a)}return t}function Ug(i){const t=new Gt,e=new W(new ue(9,9,.4,12),i(4153874));e.position.y=.2,t.add(e);for(const a of[-3,0,3.5]){const o=new W(new ue(.25,.3,6,6),i(3560212));o.position.set(a,3,a*.4),t.add(o)}const n=new W(new nn(1.6,10,8),i(16317180));n.position.set(0,1.8,3),t.add(n);const s=new W(new nn(.55,8,6),i(1841431));s.position.set(-.9,3.1,3),t.add(s);const r=s.clone();return r.position.set(.9,3.1,3),t.add(r),t}function wn(i,t){return i+Math.random()*(t-i)}function Ng(i){return wn(i.massRewardMin,i.massRewardMax)}function Ur(i){return Number.parseInt(i.replace("#",""),16)}function Nr(i,t){i.traverse(e=>{const n=e;if(n.isMesh&&(n.geometry?.dispose(),t&&n.material)){const r=Array.isArray(n.material)?n.material:[n.material];for(const a of r){const o=a;o.map&&o.map.dispose(),a.dispose()}}const s=e;s.isSprite&&(s.material.map?.dispose(),t&&s.material.dispose())})}class Fg{constructor(t,e){F(this,"group",new Gt);F(this,"objects",[]);F(this,"hash",new ag(12));F(this,"layout");F(this,"mapSize");F(this,"mapHalf");F(this,"packId");F(this,"variants",[]);F(this,"scene");F(this,"mats",{});F(this,"staticRoot",new Gt);F(this,"dynamicRoot",new Gt);F(this,"spotsRoot",new Gt);F(this,"nextId",1);F(this,"disposed",!1);this.scene=t,this.layout=e.layout,this.packId=e.city.packId,this.variants=[...e.layout.variants??[],...e.city.gameplayModifiers??[]],this.mapSize=e.layout.mapSize||e.city.mapSize||240,this.mapHalf=this.mapSize/2,this.group.add(this.staticRoot),this.group.add(this.dynamicRoot),this.group.add(this.spotsRoot),t.add(this.group),this.buildStaticCity(e),this.spawnObjects(),this.hash.rebuild(this.objects)}mat(t){const e=t.toString(16);return this.mats[e]||(this.mats[e]=new Bi({color:t})),this.mats[e]}buildStaticCity(t){const e=t.city.colorPalette,n=new W(new Me(this.mapSize+16,this.mapSize+16),new Bi({color:Ur(e.ground)}));n.rotation.x=-Math.PI/2,this.staticRoot.add(n);for(const u of this.layout.zones){const f=new W(new Me(u.w,u.d),new Bi({color:Ur(u.color)}));f.rotation.x=-Math.PI/2,f.position.set(u.x,.01,u.z),this.staticRoot.add(f)}const s=new Bi({color:Ur(e.road)}),r=this.layout.roads.style;r==="hutong_axis"?(this.buildBeijingRoads(s),this.buildHutongCompounds(),this.buildAxisRibbon()):r==="jiangnan_water"?(this.buildGridRoads(s),this.buildCanal(),this.scatterWhiteWalls()):r==="qilou_street"?(this.buildGridRoads(s),this.scatterQilou()):r==="oasis_court"?(this.buildSparseRoads(s),this.scatterFlatRoofs()):r==="northeast_grid"?(this.buildGridRoads(s),this.buildRiverBand(8036536,-70),this.scatterDecor()):(this.buildGridRoads(s),this.scatterDecor()),this.hasVariant("two_rivers_confluence")&&this.buildTwoRivers(),(this.hasVariant("pearl_river")||this.hasVariant("qilou_arcade"))&&this.buildPearlRiver(),this.hasVariant("citywall_ring")&&this.buildCityWallRing(),this.hasVariant("named_river")&&this.buildRiverBand(4955064,-40),this.hasVariant("coastal_band")&&this.buildRiverBand(3108746,-56),this.hasVariant("plateau_lake")&&this.buildRiverBand(3900072,52);const a=new Bi({color:1976635}),o=4,c=this.mapHalf,l=[{x:0,z:-c-2,w:this.mapSize+20,d:4},{x:0,z:c+2,w:this.mapSize+20,d:4},{x:-c-2,z:0,w:4,d:this.mapSize+20},{x:c+2,z:0,w:4,d:this.mapSize+20}];for(const u of l){const f=new W(new dt(u.w,o,u.d),a);f.position.set(u.x,o/2,u.z),this.staticRoot.add(f)}}buildGridRoads(t){const e=this.layout.roads.width,n=this.layout.roads.spacing;for(let s=-this.mapHalf+20;s<=this.mapHalf-20;s+=n){const r=new W(new Me(e,this.mapSize-16),t);r.rotation.x=-Math.PI/2,r.position.set(s,.02,0),this.staticRoot.add(r);const a=new W(new Me(this.mapSize-16,e),t);a.rotation.x=-Math.PI/2,a.position.set(0,.02,s),this.staticRoot.add(a)}}buildBeijingRoads(t){const e=new W(new Me(18,this.mapSize-24),this.mat(12891290));e.rotation.x=-Math.PI/2,e.position.set(0,.03,10),this.staticRoot.add(e);const n=new W(new Me(1.2,this.mapSize-28),this.mat(10424889));n.rotation.x=-Math.PI/2,n.position.set(-8.5,.04,10),this.staticRoot.add(n);const s=n.clone();s.position.set(8.5,.04,10),this.staticRoot.add(s);for(const o of[-90,-50,50,90]){const c=new W(new Me(8,this.mapSize-16),t);c.rotation.x=-Math.PI/2,c.position.set(o,.02,0),this.staticRoot.add(c)}for(const o of[-90,-50,10,50,90]){const c=new W(new Me(this.mapSize-16,8),t);c.rotation.x=-Math.PI/2,c.position.set(0,.02,o),this.staticRoot.add(c)}const r=this.layout.zones.find(o=>o.id==="hutong");if(r){for(let o=r.x-r.w/2+8;o<r.x+r.w/2-8;o+=16){const c=new W(new Me(3.2,r.d-8),this.mat(5722958));c.rotation.x=-Math.PI/2,c.position.set(o,.025,r.z),this.staticRoot.add(c)}for(let o=r.z-r.d/2+8;o<r.z+r.d/2-8;o+=16){const c=new W(new Me(r.w-8,3.2),this.mat(5722958));c.rotation.x=-Math.PI/2,c.position.set(r.x,.025,o),this.staticRoot.add(c)}}const a=new W(new jn(16,24),this.mat(7176018));a.rotation.x=-Math.PI/2,a.position.set(28,.03,-82),this.staticRoot.add(a)}buildAxisRibbon(){const t=this.mat(14075048);for(let e=-20;e<=110;e+=18){const n=new W(new dt(12,.25,14),t);n.position.set(0,.12,e),this.staticRoot.add(n)}}buildHutongCompounds(){const t=this.layout.zones.find(s=>s.id==="hutong");if(!t)return;const e=[t.x-28,t.x-10,t.x+10],n=[t.z-28,t.z-10,t.z+12,t.z+30];for(const s of e)for(const r of n){if(Math.abs(s)<22)continue;const a=mg(o=>this.mat(o));a.position.set(s,0,r),this.staticRoot.add(a)}}scatterDecor(){const t=this.mat(7031343),e=this.mat(3107642);let n=0;for(let s=0;s<400&&n<90;s++){const r=wn(-112,112),a=wn(-112,112);if(Math.hypot(r,a+90)<18||Math.abs(r%40)<8||Math.abs(a%40)<8)continue;const o=wn(1.6,2.6),c=new Gt,l=new W(new ue(.18,.24,o,6),t);l.position.y=o/2,c.add(l);const u=new W(new ke(wn(.9,1.4),o*1.6,7),e);u.position.y=o+o*.7,c.add(u),c.position.set(r,0,a),this.staticRoot.add(c),n++}}buildCanal(){const t=new W(new Me(22,this.mapSize-20),this.mat(3900072));t.rotation.x=-Math.PI/2,t.position.set(18,.04,0),this.staticRoot.add(t);for(const e of[-60,0,60]){const n=new W(new dt(26,.6,8),this.mat(11051678));n.position.set(18,.4,e),this.staticRoot.add(n)}}buildRiverBand(t,e){const n=new W(new Me(this.mapSize-24,28),this.mat(t));n.rotation.x=-Math.PI/2,n.position.set(0,.04,e),this.staticRoot.add(n)}scatterWhiteWalls(){const t=this.mat(16052714),e=this.mat(2042167);for(const n of[-90,-74,-58,-42])for(const s of[-20,-4,12,28,44]){const r=new W(new dt(10,4,8),t);r.position.set(n,2,s),this.staticRoot.add(r);const a=new W(new dt(11,.7,9),e);a.position.set(n,4.4,s),this.staticRoot.add(a)}}scatterQilou(){const t=this.mat(15259061),e=this.mat(14070922);for(let n=-80;n<=80;n+=12){const s=new W(new dt(10,7,6),t);s.position.set(n,3.5,-8),this.staticRoot.add(s);const r=new W(new dt(.6,3.2,.6),e);r.position.set(n-4,1.6,-4.2),this.staticRoot.add(r);const a=r.clone();a.position.set(n+4,1.6,-4.2),this.staticRoot.add(a)}}buildSparseRoads(t){const e=this.layout.roads.width,n=Math.max(this.layout.roads.spacing,48);for(let r=-this.mapHalf+28;r<=this.mapHalf-28;r+=n){const a=new W(new Me(e,this.mapSize-24),t);a.rotation.x=-Math.PI/2,a.position.set(r,.02,0),this.staticRoot.add(a)}const s=new W(new Me(this.mapSize-40,10),this.mat(947344));s.rotation.x=-Math.PI/2,s.position.set(0,.03,20),this.staticRoot.add(s)}scatterFlatRoofs(){const t=this.mat(14074016),e=this.mat(11569512);for(const n of[-70,-40,40,70])for(const s of[-30,0,40]){const r=new W(new dt(14,3.2,12),t);r.position.set(n,1.6,s),this.staticRoot.add(r);const a=new W(new dt(14.4,.35,12.4),e);a.position.set(n,3.35,s),this.staticRoot.add(a)}}hasVariant(t){return this.variants.includes(t)}buildTwoRivers(){this.buildRiverBand(3900072,-36);const t=new W(new Me(18,this.mapSize-40),this.mat(4955064));t.rotation.x=-Math.PI/2,t.position.set(-40,.045,10),this.staticRoot.add(t)}buildPearlRiver(){this.buildRiverBand(3108746,8)}buildCityWallRing(){const t=this.mat(7893356),e=5,n=72,s=[{x:0,z:-n,w:n*2+6,d:4},{x:0,z:n,w:n*2+6,d:4},{x:-n,z:0,w:4,d:n*2},{x:n,z:0,w:4,d:n*2}];for(const r of s){const a=new W(new dt(r.w,e,r.d),t);a.position.set(r.x,e/2,r.z),this.staticRoot.add(a)}}blockedByCivicAxis(t,e){const n=this.layout.roads.style;return!!(n==="hutong_axis"&&Math.abs(t)<12||n==="jiangnan_water"&&Math.abs(t-18)<12||n==="northeast_grid"&&Math.abs(e+70)<14||this.hasVariant("two_rivers_confluence")&&(Math.abs(e+36)<14||Math.abs(t+40)<12)||(this.hasVariant("pearl_river")||this.hasVariant("qilou_arcade"))&&Math.abs(e-8)<12||this.hasVariant("named_river")&&Math.abs(e+40)<14||this.hasVariant("coastal_band")&&Math.abs(e+56)<14||this.hasVariant("plateau_lake")&&Math.abs(e-52)<14)}zoneBounds(t){return{x0:t.x-t.w/2+4,x1:t.x+t.w/2-4,z0:t.z-t.d/2+4,z1:t.z+t.d/2-4}}spawnObjects(){const t=this.layout.zones.find(s=>s.spawn),e=t?.x??0,n=t?t.z-t.d/2+16:-90;for(const s of this.layout.zones){const r=s.quotas;for(const a of Object.keys(r)){const o=r[a]??0,c=Number(String(a).slice(1));if(!(!c||o<=0))for(let l=0;l<o;l++)this.spawnFill(s,c)}}for(const s of this.layout.landmarks)this.spawnLandmark(s);this.sprinkleNearSpawn(e,n);for(const s of this.objects)Math.hypot(s.x-e,s.z-n)<16&&s.tier.level>4&&s.interact==="swallow"&&!s.isLandmark&&(s.state="digested",s.mesh.visible=!1);this.objects=this.objects.filter(s=>s.state!=="digested")}sprinkleNearSpawn(t,e){for(let n=0;n<14;n++){const s=n/14*Math.PI*2,r=7+n%3*3,a=Lr[n%3===2?1:0],o=t+Math.cos(s)*r,c=e+Math.sin(s)*r,l=this.createFillMesh(a);this.cloneMeshMaterials(l);const u=this.dimsFor(a,!1);l.position.set(o,u.height/2,c),this.dynamicRoot.add(l),this.objects.push(this.makeEatable(a,o,c,u,l,!1,"swallow","记忆碎片",null,null))}}cloneMeshMaterials(t){t.traverse(e=>{const n=e;n.isMesh&&n.material&&(n.material=n.material.clone())})}spawnFill(t,e){const n=Lr[Math.min(10,Math.max(1,e))-1],s=this.zoneBounds(t),r=this.dimsFor(n,!1),a=Math.max(r.hw,r.hd);let o=wn(s.x0,s.x1),c=wn(s.z0,s.z1);for(let u=0;u<12;u++){const f=wn(s.x0,s.x1),h=wn(s.z0,s.z1);if(this.blockedByCivicAxis(f,h))continue;let m=!0;for(const _ of this.objects){const S=Math.max(_.hw,_.hd);if(Math.hypot(f-_.x,h-_.z)<(a+S)*.9+.4){m=!1;break}}if(o=f,c=h,m)break}if(this.blockedByCivicAxis(o,c))return;const l=this.createFillMesh(n);this.cloneMeshMaterials(l),l.position.set(o,r.height/2,c),this.dynamicRoot.add(l),this.objects.push(this.makeEatable(n,o,c,r,l,!1,"swallow",t.name,null,null))}spawnLandmark(t){const e=Lr[Math.min(10,Math.max(1,t.tier))-1],n=og(t.mesh,a=>this.mat(a)),s=lg(t.mesh);n.position.set(t.x,0,t.z),this.dynamicRoot.add(n);const r=this.makeEatable(e,t.x,t.z,s,n,!0,t.interact,t.name,t.knowledgeCardId??null,t.id);t.interact==="swallow"&&t.tier>=10&&(r.rewardMass=6500),this.objects.push(r)}makeEatable(t,e,n,s,r,a,o,c,l,u){return{id:this.nextId++,tier:t,x:e,z:n,hw:s.hw,hd:s.hd,height:s.height,isCircle:s.isCircle,isLandmark:a,rewardMass:a&&o==="swallow"?6500:Ng(t),state:"idle",attractTimer:0,swallowTimer:0,swallowDuration:.25+t.level*.03,mesh:r,baseScale:1,origX:e,origZ:n,velX:0,velZ:0,highlight:!1,interact:o,name:c,knowledgeCardId:l,landmarkId:u,guardAcc:0,lastGuardAngle:null,visitDone:!1,guardDone:!1}}dimsFor(t,e){if(e)return{hw:3,hd:3,height:48,isCircle:!1};switch(t.level){case 1:return{hw:.35,hd:.35,height:.5,isCircle:!0};case 2:return{hw:.4,hd:.4,height:.9,isCircle:!0};case 3:return{hw:.6,hd:1.2,height:.8,isCircle:!1};case 4:return{hw:1,hd:2.2,height:1,isCircle:!1};case 5:return{hw:1.4,hd:4,height:1.6,isCircle:!1};case 6:return{hw:3.5,hd:3.5,height:4,isCircle:!1};case 7:return{hw:5,hd:6,height:14,isCircle:!1};case 8:return{hw:10,hd:12,height:12,isCircle:!1};case 9:return{hw:8,hd:8,height:36,isCircle:!1};case 10:return{hw:4,hd:4,height:42,isCircle:!1};default:return{hw:1,hd:1,height:1,isCircle:!0}}}createFillMesh(t){const e=new Gt,n=this.mat(t.color),s=this.dimsFor(t,!1);if(t.level<=2){const r=new W(new dt(s.hw*2,s.height,s.hd*2),n);e.add(r)}else if(t.level<=5){const r=new W(new dt(s.hw*2,s.height*.7,s.hd*2),n);r.position.y=s.height*.15,e.add(r);const a=new W(new dt(s.hw*1.6,s.height*.5,s.hd*.8),this.mat(9741240));a.position.set(0,s.height*.55,-s.hd*.2),e.add(a)}else{const r=new W(new dt(s.hw*2,s.height,s.hd*2),n);if(e.add(r),t.level>=7){const a=new W(new dt(s.hw*1.7,s.height*.85,.15),this.mat(9684477));a.position.set(0,0,s.hd+.05),e.add(a)}}return e}leaveSpot(t,e=6220500){const n=Math.max(.7,Math.min(t.hw,t.hd)*.45),s=new W(new jn(n,16),new Rn({color:e,transparent:!0,opacity:.4,side:Be}));s.rotation.x=-Math.PI/2,s.position.set(t.origX,.05,t.origZ),this.spotsRoot.add(s)}rebuildHash(){this.hash.rebuild(this.objects)}reset(){if(!this.disposed){for(const t of this.objects)this.dynamicRoot.remove(t.mesh),Nr(t.mesh,!1),t.mesh.traverse(e=>{const n=e;if(!n.isMesh||!n.material)return;const s=Array.isArray(n.material)?n.material:[n.material];for(const r of s)if(r.type==="MeshBasicMaterial"){const a=r;a.map?.dispose(),a.dispose()}});for(this.objects=[];this.spotsRoot.children.length;){const t=this.spotsRoot.children[0];this.spotsRoot.remove(t),Nr(t,!0)}this.nextId=1,this.spawnObjects(),this.hash.rebuild(this.objects)}}meshCount(){let t=0;return this.group.traverse(e=>{e.isMesh&&t++}),t}dispose(){this.disposed||(this.disposed=!0,this.scene.remove(this.group),Nr(this.group,!0),this.mats={},this.objects=[],this.hash.clear(),this.group.clear())}resolveBlock(t,e,n,s){const r=Math.max(s.x-s.hw,Math.min(t,s.x+s.hw)),a=Math.max(s.z-s.hd,Math.min(e,s.z+s.hd));let o=t-r,c=e-a;const l=Math.hypot(o,c);if(l>=n||l<1e-6){if(t>=s.x-s.hw&&t<=s.x+s.hw&&e>=s.z-s.hd&&e<=s.z+s.hd){const f=t-(s.x-s.hw),h=s.x+s.hw-t,m=e-(s.z-s.hd),_=s.z+s.hd-e,S=Math.min(f,h,m,_);return S===f?{x:s.x-s.hw-n,z:e}:S===h?{x:s.x+s.hw+n,z:e}:S===m?{x:t,z:s.z-s.hd-n}:{x:t,z:s.z+s.hd+n}}return null}const u=(n-l)/l;return{x:t+o*u,z:e+c*u}}}class Og{constructor(t){F(this,"camera");F(this,"look",new B);F(this,"desired",new B);F(this,"current",new B);F(this,"pulse",0);F(this,"shake",0);F(this,"smoothDist",0);this.camera=new Ve(hl,t,.5,500),this.current.set(0,30,-20),this.camera.position.copy(this.current)}triggerPulse(){this.pulse=.3}triggerShake(t=.4){this.shake=t}update(t,e,n){const s=Qm+jm*e.radius;this.smoothDist<=0&&(this.smoothDist=s),this.smoothDist+=(s-this.smoothDist)*(1-Math.exp(-3.5*t));let r=this.smoothDist;this.pulse>0&&(this.pulse-=t,r*=1.08);const a=r*Math.sin(cl),o=r*Math.cos(cl),c=2,l=e.dirX*c,u=e.dirZ*c;this.look.x+=(e.x+l-this.look.x)*(1-Math.exp(-9*t)),this.look.z+=(e.z+u-this.look.z)*(1-Math.exp(-9*t)),this.look.y=0,this.desired.set(this.look.x,a,this.look.z-o);const f=1-Math.exp(-5.5*t);this.current.x+=(this.desired.x-this.current.x)*f,this.current.y+=(this.desired.y-this.current.y)*f,this.current.z+=(this.desired.z-this.current.z)*f;let h=0,m=0;n&&this.shake>0&&(h=(Math.random()-.5)*this.shake,m=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),this.camera.position.set(this.current.x+h,this.current.y,this.current.z+m),this.camera.lookAt(this.look)}resize(t){this.camera.aspect=t,this.camera.fov=t<1?55:hl,this.camera.updateProjectionMatrix()}}function ws(i,t,e,n=1){const s=e.sizeThreshold*n,r=e.massThreshold*n,a=i>=s,o=t>=r;return{sizeOk:a,massOk:o,can:a&&o,sizeNeed:s,massNeed:r,sizeHave:i,massHave:t}}function ml(i){return i.can?"":!i.sizeOk&&!i.massOk?"再长大一点：洞口和质量都还不够":i.sizeOk?"再沉一点：质量还不够":"再长大一点：洞口还不够大"}const Hi=Math.PI*2;function Bg(i,t,e,n,s,r,a){const o=t-n,c=e-s,l=Math.hypot(o,c),u=l>=r&&l<=a,f=Math.atan2(c,o);let h=0;if(u){for(h=f-i;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;h=Math.abs(h)}return{angle:f,delta:h,inRing:u,dist:l}}function zg(i,t){const e=Math.max(10,Math.max(i,t)+4),n=e+12;return{inner:e,outer:n}}class kg{constructor(t,e,n=1){F(this,"swallowing",0);F(this,"bumpCooldown",0);F(this,"events");F(this,"threshScale");F(this,"outlineHint");F(this,"lockIcon");F(this,"lockSprites",new Map);F(this,"rings",[]);F(this,"scene");F(this,"aimHint",null);this.scene=t,this.events=e,this.threshScale=n,this.outlineHint=!0,this.lockIcon=!0}setThreshScale(t){this.threshScale=t}update(t,e,n){this.bumpCooldown>0&&(this.bumpCooldown-=t),this.updateFx(t);const s=Math.max(e.radius*al,e.radius+.6),r=n.hash.query(e.x,e.z,Math.max(s,e.radius)+16);this.aimHint=this.pickAim(e,r);for(const a of r){if(a.state==="digested")continue;if(a.interact==="guard"){this.updateGuard(t,a,e,n);continue}if(a.interact==="visit"||a.interact==="eco"){this.updateVisit(a,e,n);continue}const o=a.x-e.x,c=a.z-e.z,l=Math.hypot(o,c),u=l-(a.isCircle?a.hw:Math.min(a.hw,a.hd)*.7),f=ws(e.radius,e.mass,a.tier,this.threshScale),h=f.can;if(a.highlight=h&&this.outlineHint,this.applyHighlight(a),a.state==="swallowing"){this.updateSwallowing(t,a,e);continue}if(a.state==="attracting"){this.updateAttracting(t,a,e,h);continue}h?u<s&&(u<e.radius*.15||l<e.radius*ll?this.beginSwallow(a):(a.state="attracting",a.attractTimer=0)):this.hitsPlayer(e,a,l)&&this.blockAndBump(e,a,n,f)}for(const a of n.objects)a.state==="swallowing"&&!r.includes(a)&&this.updateSwallowing(t,a,e),a.state==="attracting"&&!r.includes(a)&&(a.state="idle",a.attractTimer=0,a.mesh.position.x=a.origX,a.mesh.position.z=a.origZ,a.x=a.origX,a.z=a.origZ,a.mesh.scale.setScalar(a.baseScale))}pickAim(t,e){let n=null,s=1e9;for(const a of e){if(a.state==="digested")continue;const o=Math.hypot(a.x-t.x,a.z-t.z);o<s&&(s=o,n=a)}if(!n||s>t.radius*al+14)return null;const r=ws(t.radius,t.mass,n.tier,this.threshScale);return{name:n.name||n.tier.name,interact:n.interact,sizeOk:r.sizeOk,massOk:r.massOk,can:n.interact==="swallow"?r.can:!1,sizeHave:r.sizeHave,sizeNeed:r.sizeNeed,massHave:r.massHave,massNeed:r.massNeed,missing:n.interact==="guard"?n.guardDone?"守护已完成":"请绕行一周致敬（不可归档）":n.interact==="visit"||n.interact==="eco"?n.visitDone?"参观记忆已点亮":"走近即可参观（不可归档）":ml(r),guardProgress:n.interact==="guard"?Math.min(1,n.guardAcc/Hi):0}}hitsPlayer(t,e,n){return n<t.radius+(e.isCircle?e.hw:0)||!e.isCircle&&t.x+t.radius>e.x-e.hw&&t.x-t.radius<e.x+e.hw&&t.z+t.radius>e.z-e.hd&&t.z-t.radius<e.z+e.hd}blockAndBump(t,e,n,s){const r=n.resolveBlock(t.x,t.z,t.radius,e);if(r&&(t.x=r.x,t.z=r.z,t.mesh.position.set(t.x,0,t.z)),this.bumpCooldown<=0){this.bumpCooldown=.18;const a={name:e.name||e.tier.name,interact:e.interact,sizeOk:s.sizeOk,massOk:s.massOk,can:!1,sizeHave:s.sizeHave,sizeNeed:s.sizeNeed,massHave:s.massHave,massNeed:s.massNeed,missing:e.interact==="guard"?"这里不能归档，请绕行守护":e.interact==="visit"?"这里请参观，不要冲进去":ml(s),guardProgress:e.guardAcc/Hi};this.events.onBump(e,a),this.lockIcon&&e.interact==="swallow"&&this.showLock(e)}}updateGuard(t,e,n,s){e.highlight=!1,this.applyHighlight(e);const r=zg(e.hw,e.hd),a=e.lastGuardAngle??Math.atan2(n.z-e.z,n.x-e.x),o=Bg(a,n.x,n.z,e.x,e.z,r.inner,r.outer);e.lastGuardAngle=o.angle,!e.guardDone&&o.inRing&&(e.guardAcc+=o.delta,this.tintGuardRing(e,Math.min(1,e.guardAcc/Hi)),e.guardAcc>=Hi&&(e.guardDone=!0,e.guardAcc=Hi,this.events.onGuardComplete(e)));const c=Math.hypot(e.x-n.x,e.z-e.z);if(this.hitsPlayer(n,e,c)){const l=ws(n.radius,n.mass,e.tier,this.threshScale);this.blockAndBump(n,e,s,l)}}tintGuardRing(t,e){t.mesh.traverse(n=>{if(n.name!=="__guardRing")return;const r=n.material;r.color&&(r.opacity=.35+e*.5,r.color.setHex(e>=1?16639626:16498468))})}updateVisit(t,e,n){t.highlight=!t.visitDone&&this.outlineHint,this.applyHighlight(t);const s=Math.hypot(t.x-e.x,t.z-e.z);if(s<e.radius+Math.max(t.hw,t.hd)+6&&!t.visitDone&&(t.visitDone=!0,this.events.onVisit(t)),this.hitsPlayer(e,t,s)){const a=ws(e.radius,e.mass,t.tier,this.threshScale);this.blockAndBump(e,t,n,a)}}applyHighlight(t){t.mesh.traverse(e=>{const n=e;if(n.isMesh&&n.material&&n.material.emissive){const s=n.material;s.emissive.setHex(t.highlight?1265226:0),s.emissiveIntensity=t.highlight?.45:0}})}showLock(t){let e=this.lockSprites.get(t.id);if(!e){const n=document.createElement("canvas");n.width=64,n.height=64;const s=n.getContext("2d");s.fillStyle="#fb923c",s.font="bold 42px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText("!",32,34);const r=new Rh(n),a=new Xl({map:r,transparent:!0,depthTest:!1}),o=new bh(a);o.scale.set(2.5,2.5,1),e={sprite:o,ttl:0},this.lockSprites.set(t.id,e),this.scene.add(o)}e.sprite.position.set(t.x,t.height+2,t.z),e.sprite.visible=!0,e.ttl=.6}spawnRing(t,e,n){let s=this.rings.find(a=>a.ttl<=0)?.mesh;if(!s){const a=new Ci(.85,1,40),o=new Rn({color:3003583,side:Be,transparent:!0,opacity:.8,depthWrite:!1});s=new W(a,o),s.rotation.x=-Math.PI/2,this.scene.add(s),this.rings.push({mesh:s,ttl:0,dur:0})}s.position.set(t,.09,e),s.visible=!0;const r=this.rings.find(a=>a.mesh===s);r.ttl=.45,r.dur=.45,r.mesh.userData.maxR=Math.max(1.5,n*2.2)}updateFx(t){for(const e of this.lockSprites.values())e.ttl>0&&(e.ttl-=t,e.ttl<=0&&(e.sprite.visible=!1));for(const e of this.rings){if(e.ttl<=0)continue;if(e.ttl-=t,e.ttl<=0){e.mesh.visible=!1;continue}const n=1-e.ttl/e.dur,s=e.mesh.userData.maxR??2;e.mesh.scale.setScalar(.4+n*s),e.mesh.material.opacity=.8*(1-n)}}beginSwallow(t){t.interact==="swallow"&&(this.swallowing>=Zm||(t.state="swallowing",t.swallowTimer=0,this.swallowing++))}updateAttracting(t,e,n,s){if(!s){e.state="idle";return}e.attractTimer+=t;const r=n.x-e.x,a=n.z-e.z,o=Math.hypot(r,a)||1,c=r/o*ol,l=a/o*ol;e.velX+=c*t,e.velZ+=l*t;const u=Math.hypot(e.velX,e.velZ);u>18&&(e.velX=e.velX/u*18,e.velZ=e.velZ/u*18),e.x+=e.velX*t,e.z+=e.velZ*t;const f=Math.max(.7,1-e.attractTimer*.25);if(e.mesh.scale.setScalar(e.baseScale*f),e.mesh.position.x=e.x,e.mesh.position.z=e.z,o<n.radius*ll){this.beginSwallow(e);return}e.attractTimer>Km&&(e.state="idle",e.attractTimer=0,e.velX=0,e.velZ=0,e.x=e.origX,e.z=e.origZ,e.mesh.position.x=e.x,e.mesh.position.z=e.z,e.mesh.scale.setScalar(e.baseScale))}updateSwallowing(t,e,n){e.swallowTimer+=t;const s=Math.min(1,e.swallowTimer/e.swallowDuration),r=(1-s)*.7;e.mesh.scale.setScalar(e.baseScale*r),e.mesh.rotation.y+=t*8,e.x+=(n.x-e.x)*Math.min(1,10*t),e.z+=(n.z-e.z)*Math.min(1,10*t),e.mesh.position.x=e.x,e.mesh.position.z=e.z,e.mesh.position.y=e.height/2*(1-s),s>=1&&(e.state="digested",e.mesh.visible=!1,this.swallowing=Math.max(0,this.swallowing-1),this.spawnRing(e.x,e.z,n.radius),this.events.onDigested(e))}dispose(){for(const t of this.lockSprites.values())this.scene.remove(t.sprite),t.sprite.material.map?.dispose(),t.sprite.material.dispose();this.lockSprites.clear();for(const t of this.rings)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.rings=[],this.swallowing=0,this.aimHint=null}}class Hg{constructor(t){F(this,"keys",new Set);F(this,"moveX",0);F(this,"moveZ",0);F(this,"pausePressed",0);F(this,"joystickActive",!1);F(this,"joyOrigin",{x:0,y:0});F(this,"joyVec",{x:0,y:0});F(this,"pointerId",null);F(this,"el");F(this,"joyBase",null);F(this,"joyKnob",null);F(this,"forceJoystick",!1);F(this,"sensitivity",1);F(this,"mouseSteer",!1);F(this,"mouseDown",!1);F(this,"mouseNX",0);F(this,"mouseNY",0);F(this,"enabled",!0);F(this,"onKeyDown",t=>{this.keys.add(t.code),(t.code==="Escape"||t.code==="KeyP")&&this.pausePressed++});F(this,"onKeyUp",t=>{this.keys.delete(t.code)});F(this,"onPointerDown",t=>{if(!(!this.enabled||t.target.closest("[data-ui]")))if(this.isTouchLike(t)||this.forceJoystick&&t.pointerType==="mouse"){if(this.pointerId!=null||t.pointerType==="touch"&&t.clientX>window.innerWidth*.65)return;this.pointerId=t.pointerId,this.joystickActive=!0,this.joyOrigin={x:t.clientX,y:t.clientY},this.joyVec={x:0,y:0},this.joyBase&&(this.joyBase.style.display="block",this.joyBase.style.left=`${t.clientX}px`,this.joyBase.style.top=`${t.clientY}px`),this.el.setPointerCapture(t.pointerId)}else this.mouseSteer&&t.pointerType==="mouse"&&t.button===0&&(this.mouseDown=!0,this.updateMouseDir(t))});F(this,"onPointerMove",t=>{if(this.enabled)if(this.joystickActive&&t.pointerId===this.pointerId){const e=t.clientX-this.joyOrigin.x,n=t.clientY-this.joyOrigin.y,s=48,r=Math.hypot(e,n);if(r<12)this.joyVec={x:0,y:0};else{const o=Math.min(r,s),c=e/r*o,l=n/r*o;this.joyVec={x:c/s,y:l/s}}if(this.joyKnob){const o=this.joyVec.x*48,c=this.joyVec.y*48;this.joyKnob.style.transform=`translate(calc(-50% + ${o}px), calc(-50% + ${c}px))`}}else this.mouseDown&&this.mouseSteer&&this.updateMouseDir(t)});F(this,"onPointerUp",t=>{this.enabled&&(t.pointerId===this.pointerId&&(this.pointerId=null,this.joystickActive=!1,this.joyVec={x:0,y:0},this.joyBase&&(this.joyBase.style.display="none"),this.joyKnob&&(this.joyKnob.style.transform="translate(-50%,-50%)")),t.pointerType==="mouse"&&(this.mouseDown=!1))});this.el=t,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointermove",this.onPointerMove),t.addEventListener("pointerup",this.onPointerUp),t.addEventListener("pointercancel",this.onPointerUp),this.createJoystickDom()}createJoystickDom(){const t=document.createElement("div");t.id="virtual-joystick",t.style.cssText="display:none;position:absolute;width:128px;height:128px;border-radius:50%;background:rgba(255,255,255,0.12);border:2px solid rgba(255,255,255,0.25);pointer-events:none;z-index:40;transform:translate(-50%,-50%);";const e=document.createElement("div");e.style.cssText="position:absolute;width:56px;height:56px;border-radius:50%;left:50%;top:50%;transform:translate(-50%,-50%);background:rgba(45,212,191,0.7);border:2px solid rgba(255,255,255,0.5);",t.appendChild(e),this.el.appendChild(t),this.joyBase=t,this.joyKnob=e}isTouchLike(t){return t.pointerType==="touch"||this.forceJoystick}updateMouseDir(t){const e=window.innerWidth/2,n=window.innerHeight/2,s=t.clientX-e,r=t.clientY-n,a=Math.hypot(s,r)||1;this.mouseNX=s/a,this.mouseNY=r/a}consumePause(){return this.pausePressed>0?(this.pausePressed=0,!0):!1}update(){let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),this.joystickActive?(t=this.joyVec.x,e=-this.joyVec.y):this.mouseDown&&this.mouseSteer&&(t=this.mouseNX,e=-this.mouseNY);const n=Math.hypot(t,e);n>1&&(t/=n,e/=n),this.moveX=t*this.sensitivity,this.moveZ=e*this.sensitivity}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}}class Gg{constructor(t){F(this,"ctx",null);F(this,"master",null);F(this,"sfxGain",null);F(this,"bgmGain",null);F(this,"bgmTimer",null);F(this,"settings");F(this,"unlocked",!1);this.settings=t}updateSettings(t){this.settings=t,this.applyVolumes()}async unlock(){if(!this.unlocked)try{this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.sfxGain=this.ctx.createGain(),this.bgmGain=this.ctx.createGain(),this.sfxGain.connect(this.master),this.bgmGain.connect(this.master),this.master.connect(this.ctx.destination),this.applyVolumes(),this.ctx.state==="suspended"&&await this.ctx.resume(),this.unlocked=!0,this.startBgm()}catch{}}applyVolumes(){if(!this.master||!this.sfxGain||!this.bgmGain)return;const t=this.settings.muted?0:1;this.master.gain.value=this.settings.masterVolume/100*t,this.sfxGain.gain.value=this.settings.sfxVolume/100,this.bgmGain.gain.value=this.settings.bgmVolume/100}tone(t,e,n="sine",s=.15,r){if(!this.ctx||!this.sfxGain)return;const a=this.ctx.currentTime,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type=n,o.frequency.setValueAtTime(t,a),c.gain.setValueAtTime(s,a),c.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(c),c.connect(r??this.sfxGain),o.start(a),o.stop(a+e+.05)}playSwallow(t,e=1){const n=180+t*40,s=Math.min(6,e)*20;this.tone(n+s,.12,"triangle",.18),this.tone(n*1.5+s,.18,"sine",.1)}playBump(){this.tone(80,.08,"square",.08),this.tone(60,.12,"sawtooth",.05)}playLevelUp(){[440,554,659,880].forEach((t,e)=>{setTimeout(()=>this.tone(t,.2,"sine",.12),e*70)})}playUi(){this.tone(520,.06,"sine",.1)}playWarn(){this.tone(320,.15,"square",.08)}playLandmark(){[220,330,440,554,740].forEach((t,e)=>{setTimeout(()=>this.tone(t,.35,"triangle",.14),e*90)})}playGuard(){[196,247,294,392].forEach((t,e)=>{setTimeout(()=>this.tone(t,.45,"sine",.16),e*140)})}playVisit(){[392,494,587].forEach((t,e)=>{setTimeout(()=>this.tone(t,.28,"sine",.12),e*80)})}playArchive(){this.tone(262,.18,"sine",.12),this.tone(392,.22,"triangle",.08)}startBgm(){if(!this.ctx||!this.bgmGain)return;const t=()=>{if(!this.ctx||!this.bgmGain||this.settings.muted)return;const e=[130.81,164.81,196,246.94],n=this.ctx.currentTime;e.forEach((s,r)=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.value=s,o.gain.setValueAtTime(.025,n+r*.02),o.gain.exponentialRampToValueAtTime(.001,n+2.2),a.connect(o),o.connect(this.bgmGain),a.start(n),a.stop(n+2.4)})};t(),this.bgmTimer=window.setInterval(t,2400)}stopBgm(){this.bgmTimer!=null&&(clearInterval(this.bgmTimer),this.bgmTimer=null)}dispose(){this.stopBgm(),this.ctx?.close(),this.ctx=null}}const $s="bhc:v2:",Wa="bhc:v1:",oc={masterVolume:80,bgmVolume:70,sfxVolume:100,muted:!1,quality:"medium",particles:"normal",cameraShake:!0,mouseSteer:!1,forceJoystick:!1,difficulty:"normal",duration:180,outlineHint:!0,lockIcon:!0,sensitivity:1,ageBand:"9-12"},Ta={nickname:"记忆守护员",gamesPlayed:0,highScore:0,maxMass:10,tutorialDone:!1,encyclopedia:{},packSwitchCount:0};function gl(){return{cards:[],landmarks:{},quizAnswers:[],quizSkipped:!1,doctorStar:!1}}function lc(i,t){try{const e=localStorage.getItem($s+i)??localStorage.getItem(Wa+i);return e?{...t,...JSON.parse(e)}:{...t}}catch{return{...t}}}function cc(i,t){try{localStorage.setItem($s+i,JSON.stringify(t))}catch{}}function Vg(){const i=lc("settings",oc);return!localStorage.getItem($s+"settings")&&!localStorage.getItem(Wa+"settings")&&/Mobi|Android/i.test(navigator.userAgent)&&(i.quality="low"),i.ageBand!=="6-8"&&i.ageBand!=="9-12"&&i.ageBand!=="13+"&&(i.ageBand="9-12"),i}function _l(i){cc("settings",i)}function Wg(){const i=lc("profile",Ta);return i.encyclopedia||(i.encyclopedia={}),i.nickname||(i.nickname=Ta.nickname),i}function ln(i){cc("profile",i)}function Xg(){["settings","profile","unlocked"].forEach(i=>{localStorage.removeItem($s+i),localStorage.removeItem(Wa+i)})}function qg(i){switch(i){case"easy":return{massMul:1.25,threshScale:.9,durationHint:240};case"hard":return{massMul:.85,threshScale:1.1,durationHint:150};default:return{massMul:1,threshScale:1,durationHint:180}}}async function Es(i){const t=await fetch(i);if(!t.ok)throw new Error(`加载失败 ${i} (${t.status})`);return await t.json()}async function vl(i){const t=`/black-hole-city/packs/${i}`,[e,n,s,r]=await Promise.all([Es(`${t}/city.json`),Es(`${t}/layout.json`),Es(`${t}/knowledge.json`),Es(`${t}/quiz.json`)]);return{city:e,layout:n,knowledge:s,quiz:r}}function $g(i,t){return i.knowledge.cards.find(e=>e.id===t)??null}function Yg(i,t){return i.quiz.questions.filter(e=>e.ageBand===t)}function Kg(i,t,e=3){const n=Yg(i,t).slice();for(let s=n.length-1;s>0;s--){const r=Math.floor(Math.random()*(s+1)),a=n[s];n[s]=n[r],n[r]=a}return n.slice(0,Math.min(e,n.length))}let Ts=null;async function Zg(){if(Ts)return Ts;const t=await fetch("/black-hole-city/packs/_shared/province-abbr-quiz.json");if(!t.ok)throw new Error("省级题库加载失败");return Ts=await t.json(),Ts}function xl(i,t,e){const n=i.questions.filter(s=>s.ageBand===t).slice();if(n.length<e){const s=i.questions.filter(r=>r.ageBand!==t);n.push(...s)}for(let s=n.length-1;s>0;s--){const r=Math.floor(Math.random()*(s+1)),a=n[s];n[s]=n[r],n[r]=a}return n.slice(0,Math.min(e,n.length))}class Jg{constructor(t){F(this,"root");F(this,"renderer",null);F(this,"scene",null);F(this,"player",null);F(this,"world",null);F(this,"camera",null);F(this,"swallow",null);F(this,"input");F(this,"audio");F(this,"settings");F(this,"profile");F(this,"pack",null);F(this,"currentPackId",null);F(this,"catalogs",new Map);F(this,"sharedQuiz",null);F(this,"quizReturn","result");F(this,"screen","loading");F(this,"lastT",0);F(this,"raf",0);F(this,"timeLeft",180);F(this,"rift",100);F(this,"score",0);F(this,"massGained",0);F(this,"objectsEaten",0);F(this,"landmarkEaten",!1);F(this,"guarded",0);F(this,"visited",0);F(this,"combo",0);F(this,"comboTimer",0);F(this,"comboMult",1);F(this,"milestoneGiven",new Set);F(this,"toast",null);F(this,"toastTimer",0);F(this,"tutorialStep",0);F(this,"movedDist",0);F(this,"tutorialEaten",0);F(this,"massMul",1);F(this,"threshScale",1);F(this,"hashRebuildTimer",0);F(this,"resultData",null);F(this,"perfectAwarded",!1);F(this,"shownCards",new Set);F(this,"currentCard",null);F(this,"deferredCards",[]);F(this,"cardQueue",[]);F(this,"quizSet",[]);F(this,"quizIndex",0);F(this,"quizAnswers",[]);F(this,"quizSkipped",!1);F(this,"quizSink","city");F(this,"briefingPackId",null);F(this,"codexFocus","beijing");F(this,"hemi",null);F(this,"fog",null);F(this,"onScreenChange",null);F(this,"onHud",null);F(this,"onResize",()=>{!this.renderer||!this.camera||(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.resize(window.innerWidth/window.innerHeight))});F(this,"onVisibility",()=>{document.hidden&&this.screen==="playing"&&this.pause()});this.root=t,this.settings=Vg(),this.profile=Wg(),this.audio=new Gg(this.settings),this.input=new Hg(t),this.syncInputFromSettings()}syncInputFromSettings(){this.input.forceJoystick=this.settings.forceJoystick,this.input.sensitivity=this.settings.sensitivity,this.input.mouseSteer=this.settings.mouseSteer}setInputEnabled(t){this.input.enabled=t}async boot(){if(!this.detectWebGL()){this.setScreen("nowebgl");return}if(this.setScreen("loading"),await new Promise(t=>setTimeout(t,150)),!this.initThree()){this.setScreen("nowebgl");return}try{this.sharedQuiz=await Zg()}catch(t){console.warn("shared quiz unavailable",t)}this.setScreen("title"),this.startLoop()}detectWebGL(){const t=[{type:"webgl2",attrs:{failIfMajorPerformanceCaveat:!1,alpha:!0}},{type:"webgl2",attrs:{failIfMajorPerformanceCaveat:!1,alpha:!1}},{type:"webgl",attrs:{failIfMajorPerformanceCaveat:!1,alpha:!0}},{type:"webgl",attrs:{failIfMajorPerformanceCaveat:!1,alpha:!1}},{type:"webgl",attrs:{failIfMajorPerformanceCaveat:!1,depth:!1,stencil:!1}},{type:"experimental-webgl",attrs:{failIfMajorPerformanceCaveat:!1}}];for(const e of t)try{if(document.createElement("canvas").getContext(e.type,e.attrs))return!0}catch{}return!1}initThree(){const t=document.createElement("div");t.id="canvas-host",t.style.cssText="position:absolute;inset:0;z-index:0;",this.root.appendChild(t);const e=[{antialias:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1},{antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1},{antialias:!1,powerPreference:"default",failIfMajorPerformanceCaveat:!1},{antialias:!1,powerPreference:"default",failIfMajorPerformanceCaveat:!1,alpha:!0},{antialias:!1,powerPreference:"default",failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!0}];for(const s of e)try{const r=new Gm(s);r.render(new wo,new Ve),this.renderer=r;break}catch{}if(!this.renderer)return t.remove(),!1;this.applyQuality(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!1,t.appendChild(this.renderer.domElement),this.scene=new wo,this.scene.background=new Bt(8893908),this.fog=new Ba(8893908,90,240),this.scene.fog=this.fog,this.hemi=new Oh(16774630,3820090,.85),this.scene.add(this.hemi);const n=new kh(16773328,.75);return n.position.set(40,80,20),this.scene.add(n),this.scene.add(new Hh(16777215,.25)),this.camera=new Og(window.innerWidth/window.innerHeight),window.addEventListener("resize",this.onResize),document.addEventListener("visibilitychange",this.onVisibility),!0}applyQuality(){if(!this.renderer)return;const t=window.devicePixelRatio||1;let e=1.5;this.settings.quality==="low"&&(e=1),this.settings.quality==="high"&&(e=2),this.renderer.setPixelRatio(Math.min(t,e))}setScreen(t){this.screen=t,this.onScreenChange?.(t)}startLoop(){this.lastT=performance.now();const t=e=>{this.raf=requestAnimationFrame(t);const n=Math.min(.05,(e-this.lastT)/1e3);this.lastT=e,this.tick(n)};this.raf=requestAnimationFrame(t)}tick(t){this.input.update(),this.screen==="playing"?(this.input.consumePause()&&this.pause(),this.updatePlay(t)):this.screen==="paused"&&this.input.consumePause()&&this.resume(),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera.camera)}mode(){return this.pack?.city.mode==="career"?"career":"timed"}updatePlay(t){if(!this.player||!this.world||!this.camera||!this.swallow)return;if(this.currentCard){this.emitHud();return}const e=this.input.moveX,n=this.input.moveZ;if((e||n)&&(this.movedDist+=Math.hypot(e,n)*this.player.speed*t),this.player.update(t,e,n,this.world.mapHalf,Jm),this.swallow.outlineHint=this.settings.outlineHint,this.swallow.lockIcon=this.settings.lockIcon,this.swallow.update(t,this.player,this.world),this.hashRebuildTimer+=t,this.hashRebuildTimer>.25&&(this.hashRebuildTimer=0,this.world.rebuildHash()),this.camera.update(t,this.player,this.settings.cameraShake),this.mode()==="timed"){if(this.timeLeft-=t,this.timeLeft<=0){this.timeLeft=0,this.endRound();return}this.timeLeft<=10&&Math.floor(this.timeLeft*2)!==Math.floor((this.timeLeft+t)*2)&&this.audio.playWarn()}else if(this.rift=Math.max(0,this.rift-ng*t),this.rift<=0){this.rift=0,this.showToast("裂隙未合拢，记忆暂存口袋，下次再来"),this.endRound();return}this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=0,this.comboMult=1)),this.toastTimer>0&&(this.toastTimer-=t,this.toastTimer<=0&&(this.toast=null)),this.tutorialStep===1&&this.movedDist>3&&this.advanceTutorial(),this.tutorialStep===2&&this.tutorialEaten>=3&&this.advanceTutorial(),this.emitHud()}cityProg(){const t=this.quizSink==="province-abbr"?"province-abbr":this.pack?.city.packId??this.codexFocus;return this.profile.encyclopedia[t]||(this.profile.encyclopedia[t]=gl()),this.profile.encyclopedia[t]}unlockCard(t,e){if(!t||!this.pack||this.shownCards.has(t))return;this.shownCards.add(t);const n=$g(this.pack,t);if(!n)return;const s=this.cityProg();s.cards.includes(t)||s.cards.push(t),ln(this.profile),e&&(this.cardQueue.push(n),this.currentCard||(this.currentCard=this.cardQueue.shift()??null))}acknowledgeCard(t){t&&this.currentCard&&this.deferredCards.push(this.currentCard),this.currentCard=this.cardQueue.shift()??null,this.emitHud()}handleDigest(t){if(!this.player||!this.world)return;const e=t.rewardMass*this.massMul,n=this.player.addMass(e);this.massGained+=e,this.objectsEaten++,this.tutorialEaten++,this.world.leaveSpot(t,6220500),this.rift=Math.min(100,this.rift+1.4),this.comboTimer>0?(this.combo++,this.comboMult=Math.min(eg,1+(this.combo-1)*.1)):(this.combo=1,this.comboMult=1),this.comboTimer=tg;let s=(e+5)*this.comboMult;t.isLandmark&&t.interact==="swallow"?(this.landmarkEaten=!0,s+=dl,this.audio.playLandmark(),this.showToast(`${t.name}已入库`),this.camera?.triggerShake(.55),!this.perfectAwarded&&this.mode()==="timed"&&(this.perfectAwarded=!0,s+=this.timeLeft*2),t.landmarkId&&(this.cityProg().landmarks[t.landmarkId]="archived",ln(this.profile))):this.audio.playArchive();const r=this.player.level;if(r>=5&&!this.milestoneGiven.has(5)&&(this.milestoneGiven.add(5),s+=500,this.showToast("升级！民居博物生")),r>=7&&!this.milestoneGiven.has(7)&&(this.milestoneGiven.add(7),s+=1e3,this.showToast("升级！城市讲解员")),r>=9&&!this.milestoneGiven.has(9)&&(this.milestoneGiven.add(9),s+=2e3,this.showToast("升级！博物馆长")),this.score+=Math.floor(s),n){this.audio.playLevelUp(),this.camera?.triggerPulse(),this.settings.cameraShake&&this.camera?.triggerShake(.35);const a=pl[this.player.level]??"街头小洞";this.showToast(`升级！L${this.player.level} · ${a}`)}if(this.unlockCard(t.knowledgeCardId,!0),this.objectsEaten===1){const a=this.pack?.city.startCards?.[0];a&&this.unlockCard(a,!0)}if(this.objectsEaten===8&&this.showToast("再长大一点就能归档轿车了"),this.player.level===4&&this.pack?.city.fictional&&this.showToast("西侧是生活区，东北有训练地标"),this.player.level>=3&&this.guarded===0){const a=this.world?.objects.find(o=>o.interact==="guard");this.showToast(a?`去环绕${a.name}致敬`:"去环绕纪念地标致敬")}}handleGuard(t){this.guarded++,this.score+=ul,this.rift=Math.min(100,this.rift+10),this.audio.playGuard(),this.world?.leaveSpot(t,16498468),this.showToast("守护完成 · 致敬卡已点亮"),t.landmarkId&&(this.cityProg().landmarks[t.landmarkId]="guarded",ln(this.profile)),this.unlockCard(t.knowledgeCardId,!0);const e=this.pack?.city.startCards?.[0];e&&this.unlockCard(e,!1)}handleVisit(t){this.visited++,this.score+=fl,this.rift=Math.min(100,this.rift+6),this.audio.playVisit(),this.world?.leaveSpot(t,9684477),this.showToast(`参观记忆 · ${t.name}`),t.landmarkId&&(this.cityProg().landmarks[t.landmarkId]="visited",ln(this.profile)),this.unlockCard(t.knowledgeCardId,!0)}showToast(t){this.toast=t,this.toastTimer=3.2}emitHud(){if(!this.player)return;const t=this.swallow?.aimHint??null;this.onHud?.({level:this.player.level,levelLabel:pl[this.player.level]??"街角收集芽",mass:this.player.mass,progress:this.progressOf(this.player.mass),score:this.score,timeLeft:this.timeLeft,combo:this.combo,toast:this.tutorialStep>0?this.tutorialText():this.toast,mode:this.mode(),rift:this.rift,cityName:this.pack?.city.name??"",aim:t,card:this.currentCard,tutorial:this.tutorialStep>0})}progressOf(t){const e=this.player.level,n=Gs[e-1]??10,s=Gs[e]??n*2;return e>=9?1:Math.min(1,Math.max(0,(t-n)/(s-n)))}tutorialText(){const t=!!(this.pack&&!this.pack.city.fictional),e=this.pack?.city.storyBeats?.[0];switch(this.tutorialStep){case 1:return t&&e?`推动黑洞，${e}`:"推动黑洞，去碰比你小的碎片";case 2:return"把碎片归档进博物馆入口，让洞变大";case 3:return t?"纪念空间请绕行一周致敬，不要往里冲。文保建筑走近即可参观。":"洞口和质量都够了，才能归档更大的记忆。";default:return""}}advanceTutorial(){this.tutorialStep++,this.tutorialStep>3&&(this.tutorialStep=0,this.profile.tutorialDone=!0,ln(this.profile))}skipTutorial(){this.tutorialStep=0,this.profile.tutorialDone=!0,ln(this.profile)}async ensurePack(t){if(!this.scene)throw new Error("scene missing");this.currentPackId===t&&this.world&&this.pack||(this.swallow?.dispose(),this.world?.dispose(),this.swallow=null,this.world=null,this.pack=await vl(t),this.applyPalette(this.pack),this.world=new Fg(this.scene,this.pack),this.player||(this.player=new rg(this.scene)),this.swallow=new kg(this.scene,{onDigested:e=>this.handleDigest(e),onBump:(e,n)=>{this.audio.playBump(),n.missing&&this.showToast(n.missing),this.tutorialStep===3&&this.advanceTutorial()},onGuardComplete:e=>this.handleGuard(e),onVisit:e=>this.handleVisit(e)}),this.swallow.setThreshScale(this.threshScale),this.currentPackId=t,this.catalogs.set(t,this.pack),this.profile.packSwitchCount=(this.profile.packSwitchCount??0)+1,ln(this.profile))}applyPalette(t){if(!this.scene)return;const e=new Bt(t.city.colorPalette.sky),n=new Bt(t.city.colorPalette.fog);if(this.scene.background=e,this.fog){this.fog.color.copy(n);const s=t.city.gameplayModifiers??[];s.includes("basin_fog")?(this.fog.near=36,this.fog.far=160):s.includes("loess_dust")?(this.fog.near=55,this.fog.far=220):(this.fog.near=80,this.fog.far=320),this.scene.fog=this.fog}}openBriefing(t){this.audio.playUi();const e=()=>{if(this.catalogs.get(t)?.city?.draft){this.setScreen("lobby");return}this.briefingPackId=t,this.setScreen("briefing")};if(this.catalogs.has(t)){e();return}this.setScreen("loading"),this.prefetchPack(t).then(e)}getBriefing(){const t=this.briefingPackId??"xingwan-training",e=this.catalogs.get(t)?.city;return e?{title:e.fictional?`训练场·${e.name.replace(/训练场$/,"")}（虚构）`:`记忆博物馆·${e.name.replace(/市$/,"")}`,lines:e.briefing,packId:t}:t==="xingwan-training"?{title:"训练场·星湾（虚构）",lines:["这里是虚构训练场，不是中国任何一座真城。","限时冲分，练习双阈值手感。","练好了，再去记忆博物馆上真城课。"],packId:"xingwan-training"}:{title:"记忆博物馆",lines:["正在打开这座城的课前说明。"],packId:t}}async startGame(t){const e=t??this.briefingPackId??"xingwan-training";if(await this.audio.unlock(),this.audio.playUi(),await this.prefetchPack(e),this.catalogs.get(e)?.city.draft){this.setScreen("lobby");return}const n=qg(this.settings.difficulty);this.massMul=n.massMul,this.threshScale=n.threshScale,await this.ensurePack(e),this.swallow?.setThreshScale(this.threshScale),this.timeLeft=this.settings.duration,this.rift=100,this.score=0,this.massGained=0,this.objectsEaten=0,this.landmarkEaten=!1,this.guarded=0,this.visited=0,this.combo=0,this.comboTimer=0,this.comboMult=1,this.milestoneGiven.clear(),this.toast=null,this.perfectAwarded=!1,this.movedDist=0,this.tutorialEaten=0,this.resultData=null,this.shownCards=new Set,this.currentCard=null,this.deferredCards=[],this.cardQueue=[],this.quizSet=[],this.quizIndex=0,this.quizAnswers=[],this.quizSkipped=!1,this.quizSink="city",this.quizReturn="codex";const s=this.pack?.city.spawn??{x:0,z:-90};this.player?.reset(s.x,s.z),this.world?.reset(),this.tutorialStep=this.profile.tutorialDone?0:1,(this.pack?.city.startCards??[]).forEach((a,o)=>this.unlockCard(a,o===0)),this.setScreen("playing"),this.emitHud()}pause(){this.screen==="playing"&&(this.setScreen("paused"),this.audio.playUi())}resume(){this.screen==="paused"&&(this.setScreen("playing"),this.audio.playUi())}abandon(){this.endRound()}endRound(){if(!this.player)return;let t=Math.floor(this.massGained)+this.objectsEaten*5;this.landmarkEaten&&(t+=dl),t+=this.guarded*ul+this.visited*fl,this.landmarkEaten&&!this.perfectAwarded&&this.mode()==="timed"&&(t+=Math.floor(this.timeLeft*2)),this.score=Math.max(this.score,t);let e=ig[Math.min(9,this.player.level)]??"街角收集芽";this.guarded>0?e+=" · 守护员":this.landmarkEaten&&(e+=" · 镇馆入库");const n=this.score>this.profile.highScore;n&&(this.profile.highScore=this.score),this.player.mass>this.profile.maxMass&&(this.profile.maxMass=this.player.mass),this.profile.gamesPlayed++,ln(this.profile);const s=this.pack?.quiz.questions.length??0,r=this.sharedQuiz?.questions.length??0,a=!this.pack?.city.fictional&&s+r>=3;this.resultData={score:this.score,highScore:this.profile.highScore,isNewRecord:n,title:e,level:this.player.level,mass:Math.floor(this.player.mass),eaten:this.objectsEaten,landmarkEaten:this.landmarkEaten,perfect:this.landmarkEaten||this.guarded>0,archived:this.objectsEaten,guarded:this.guarded,visited:this.visited,rift:Math.round(this.rift),mode:this.mode(),cityName:this.pack?.city.name??"",deferredCards:this.deferredCards.slice(),hasQuiz:a},this.currentCard=null,this.setScreen("result")}beginQuiz(){if(!this.pack&&!this.sharedQuiz){this.goTitle();return}this.quizReturn="codex",this.quizSink="city";const t=this.pack&&!this.pack.city.fictional?Kg(this.pack,this.settings.ageBand,2):[],e=this.sharedQuiz?xl(this.sharedQuiz,this.settings.ageBand,3-t.length):[];if(this.quizSet=[...t,...e].slice(0,3),this.quizSet.length===0){this.goTitle();return}this.quizIndex=0,this.quizAnswers=[],this.quizSkipped=!1,this.audio.playUi(),this.setScreen("quiz")}beginProvinceQuiz(){this.sharedQuiz&&(this.quizReturn="lobby",this.quizSink="province-abbr",this.quizSet=xl(this.sharedQuiz,this.settings.ageBand,3),this.quizIndex=0,this.quizAnswers=[],this.quizSkipped=!1,this.briefingPackId=null,this.audio.playUi(),this.setScreen("quiz"))}answerQuiz(t){const e=this.quizSet[this.quizIndex];if(!e)return;const n=t===e.answer;this.quizAnswers.push({id:e.id,correct:n}),this.quizIndex++,this.quizIndex>=this.quizSet.length?this.finishQuiz(!1):this.setScreen("quiz")}skipQuiz(){this.finishQuiz(!0)}finishQuiz(t){this.quizSkipped=t;const e=this.cityProg();if(t)e.quizSkipped=!0;else{e.quizAnswers=this.quizAnswers.slice();const n=this.quizAnswers.filter(s=>s.correct).length;e.doctorStar=this.quizAnswers.length===3&&n>=2,e.quizSkipped=!1}ln(this.profile),this.quizReturn==="lobby"?this.codexFocus=this.pack?.city.packId??"beijing":this.codexFocus=this.pack?.city.packId??this.codexFocus,this.screen==="quiz"?this.onScreenChange?.("quiz"):this.setScreen("quiz")}getQuizView(){return{q:this.quizSet[this.quizIndex]??null,index:this.quizIndex,total:this.quizSet.length,done:this.quizIndex>=this.quizSet.length||this.quizSkipped,doctor:this.cityProg().doctorStar,skipped:this.quizSkipped}}getResult(){return this.resultData}goTitle(){this.setScreen("title"),this.audio.playUi()}openLobby(){this.audio.playUi(),this.prefetchPack("beijing"),this.setScreen("lobby")}openCodex(t){if(this.codexFocus=t??this.pack?.city.packId??"beijing",this.audio.playUi(),this.catalogs.has(this.codexFocus)){this.setScreen("codex");return}this.setScreen("loading"),this.prefetchPack(this.codexFocus).then(()=>this.setScreen("codex"))}async prefetchPack(t){if(!this.catalogs.has(t))try{const e=await vl(t);this.catalogs.set(t,e)}catch(e){console.warn("pack prefetch failed",t,e)}}getCodex(){const t=this.codexFocus,e=this.catalogs.get(t)??(this.pack?.city.packId===t?this.pack:null),n=this.profile.encyclopedia[t]??gl(),s=e?.knowledge.cards??[],r=e?.layout.landmarks??[],a=e?.city;return{packId:t,provinceName:a?.parentProvince??a?.name??t,shortName:a?.shortName??a?.alias?.find(o=>o.length<=2)??a?.alias?.[0]??"",capital:a?.name??"",region7:a?.region7??"",region4:a?.region4??"",climate:a?.climateBand??"",blurb:a?.storyLogline??"本切片不宣称全国地级已收录。",progress:n,cards:s.filter(o=>n.cards.includes(o.id)),landmarks:r.map(o=>({id:o.id,name:o.name,mark:n.landmarks[o.id]??"未点亮"}))}}hasSharedQuiz(){return(this.sharedQuiz?.questions.length??0)>=3}openSettings(t){this.setScreen("settings"),this.audio.playUi()}openHowto(){this.setScreen("howto"),this.audio.playUi()}closeOverlayTo(t){this.setScreen(t)}applySettings(t){this.settings={...this.settings,...t},_l(this.settings),this.audio.updateSettings(this.settings),this.syncInputFromSettings(),this.applyQuality()}getSettings(){return this.settings}getProfile(){return this.profile}getAgeBand(){return this.settings.ageBand}resetData(){Xg(),this.settings={...oc},this.profile={...Ta,encyclopedia:{}},_l(this.settings),ln(this.profile),this.audio.updateSettings(this.settings),this.syncInputFromSettings()}}const $e=2400,Ml=180,Qg={trash:{min:5,max:9,mass:1,value:5,colors:["#9ca3af","#6b7280","#d1d5db"]},car:{min:11,max:17,mass:3,value:15,colors:["#ef4444","#3b82f6","#f59e0b","#10b981","#e5e7eb"]},house:{min:22,max:44,mass:10,value:50,colors:["#a8a29e","#78716c","#c4b5fd","#93c5fd"]},tower:{min:55,max:85,mass:60,value:300,colors:["#64748b","#475569","#8b5cf6"]}};function cn(i,t){return i+Math.random()*(t-i)}function jg(i){return i[Math.floor(Math.random()*i.length)]}class t0{constructor(t,e){F(this,"root");F(this,"cb");F(this,"host");F(this,"canvas");F(this,"ctx");F(this,"overlay");F(this,"raf",0);F(this,"lastT",0);F(this,"running",!1);F(this,"px",$e/2);F(this,"py",$e/2);F(this,"pvx",0);F(this,"pvy",0);F(this,"pr",14);F(this,"pmass",10);F(this,"score",0);F(this,"eaten",0);F(this,"timeLeft",Ml);F(this,"entities",[]);F(this,"particles",[]);F(this,"pointer",null);F(this,"keys",new Set);F(this,"ended",!1);F(this,"onKeyDown",t=>{this.keys.add(t.code)});F(this,"onKeyUp",t=>{this.keys.delete(t.code)});F(this,"onResize",()=>{this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight});F(this,"onPointerDown",t=>{this.pointer={x:t.clientX,y:t.clientY},this.canvas.setPointerCapture(t.pointerId)});F(this,"onPointerMove",t=>{this.pointer&&(this.pointer={x:t.clientX,y:t.clientY})});F(this,"onPointerUp",()=>{this.pointer=null});this.root=t,this.cb=e,this.host=document.createElement("div"),this.host.style.cssText="position:absolute;inset:0;z-index:5;background:#0a0e14;",this.canvas=document.createElement("canvas"),this.canvas.style.cssText="display:block;width:100%;height:100%;touch-action:none;",this.host.appendChild(this.canvas);const n=this.canvas.getContext("2d");if(!n)throw new Error("Canvas 2D unavailable");this.ctx=n,t.appendChild(this.host),this.overlay=document.createElement("div"),this.overlay.setAttribute("data-ui","1"),this.overlay.style.cssText="position:absolute;top:10px;right:10px;z-index:6;display:flex;gap:8px;";const s=document.createElement("button");s.className="btn secondary",s.style.cssText="min-height:36px;padding:0.4rem 0.9rem;font-size:0.9rem;",s.textContent="退出 2D 版",s.addEventListener("click",r=>{r.stopPropagation(),this.cb.onQuit()}),this.overlay.appendChild(s),this.host.appendChild(this.overlay),this.canvas.addEventListener("pointerdown",this.onPointerDown),this.canvas.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("resize",this.onResize),this.onResize()}start(){this.spawnInitial(),this.running=!0,this.lastT=performance.now();const t=e=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const n=Math.min(.05,(e-this.lastT)/1e3);this.lastT=e,this.tick(n),this.draw()};this.raf=requestAnimationFrame(t)}destroy(){this.running=!1,cancelAnimationFrame(this.raf),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("resize",this.onResize),this.host.remove()}spawnInitial(){const t=[["trash",220],["car",130],["house",80],["tower",10]];for(const[e,n]of t)for(let s=0;s<n;s++)this.entities.push(this.makeEntity(e))}makeEntity(t){const e=Qg[t];return{x:cn(60,$e-60),y:cn(60,$e-60),size:cn(e.min,e.max),mass:e.mass,value:e.value,kind:t,color:jg(e.colors),angle:cn(0,Math.PI*2),vx:t==="car"?cn(-30,30):0,vy:t==="car"?cn(-30,30):0}}level(){return this.pr<18?1:this.pr<26?2:this.pr<38?3:this.pr<54?4:this.pr<74?5:this.pr<100?6:this.pr<132?7:8}tick(t){if(this.ended)return;if(this.timeLeft-=t,this.timeLeft<=0){this.timeLeft=0,this.endRound();return}const e=Math.max(120,300-this.pr*.8);let n=0,s=0;if(this.pointer){const r=window.innerWidth/2,a=window.innerHeight/2,o=this.pointer.x-r,c=this.pointer.y-a,l=Math.hypot(o,c);l>12&&(n=o/l*e,s=c/l*e)}(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(s-=e),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(s+=e),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(n-=e),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(n+=e),this.pvx+=(n-this.pvx)*Math.min(1,t*8),this.pvy+=(s-this.pvy)*Math.min(1,t*8),this.px=Math.min($e-20,Math.max(20,this.px+this.pvx*t)),this.py=Math.min($e-20,Math.max(20,this.py+this.pvy*t));for(const r of this.entities){r.kind==="car"&&(r.x+=r.vx*t,r.y+=r.vy*t,(r.x<40||r.x>$e-40)&&(r.vx*=-1),(r.y<40||r.y>$e-40)&&(r.vy*=-1));const a=Math.hypot(r.x-this.px,r.y-this.py);if(a<this.pr*1.6&&r.size<=this.pr*.95){const o=(this.pr*1.6-a)*6;r.x-=(r.x-this.px)/(a||1)*o*t,r.y-=(r.y-this.py)/(a||1)*o*t}a<this.pr*.7&&r.size<=this.pr*.95&&this.eat(r)}this.entities=this.entities.filter(r=>!("dead"in r&&r.dead));for(const r of this.particles)r.x+=r.vx*t,r.y+=r.vy*t,r.life-=t;this.particles=this.particles.filter(r=>r.life>0)}eat(t){t.dead=!0,this.pmass+=t.mass,this.pr=14*Math.cbrt(this.pmass/10),this.score+=t.value,this.eaten++;for(let e=0;e<6;e++){const n=cn(0,Math.PI*2);this.particles.push({x:t.x,y:t.y,vx:Math.cos(n)*cn(20,80),vy:Math.sin(n)*cn(20,80),life:cn(.2,.5),color:t.color})}this.entities.push(this.makeEntity(t.kind))}endRound(){this.ended=!0;const t=document.createElement("div");t.setAttribute("data-ui","1"),t.style.cssText="position:absolute;inset:0;z-index:7;display:flex;align-items:center;justify-content:center;background:rgba(4,10,20,0.8);",t.innerHTML=`
      <div class="modal" style="text-align:center;max-width:320px;padding:1.5rem;">
        <h2>时间到！</h2>
        <p style="font-size:1.2rem;margin:0.6rem 0;">分数：<b>${this.score}</b></p>
        <p>体型：L${this.level()} · 归档 ${this.eaten} 件</p>
        <p style="opacity:0.7;font-size:0.85rem;">这是无 WebGL 环境下的 2D 简化版</p>
        <div class="btn-col" style="margin:1rem auto 0;">
          <button class="btn primary" id="f2-again">再来一局</button>
          <button class="btn secondary" id="f2-quit">退出</button>
        </div>
      </div>`,this.host.appendChild(t),t.querySelector("#f2-again")?.addEventListener("click",e=>{e.stopPropagation(),t.remove(),this.restart()}),t.querySelector("#f2-quit")?.addEventListener("click",e=>{e.stopPropagation(),this.cb.onQuit()})}restart(){this.px=$e/2,this.py=$e/2,this.pvx=0,this.pvy=0,this.pr=14,this.pmass=10,this.score=0,this.eaten=0,this.timeLeft=Ml,this.ended=!1}draw(){const t=this.ctx,e=this.canvas.width,n=this.canvas.height,s=this.px-e/2,r=this.py-n/2;t.fillStyle="#0d1520",t.fillRect(0,0,e,n),t.strokeStyle="rgba(148,163,184,0.08)",t.lineWidth=1;const a=120,o=Math.floor(s/a)*a,c=Math.floor(r/a)*a;t.beginPath();for(let _=o;_<s+e;_+=a)t.moveTo(_-s,0),t.lineTo(_-s,n);for(let _=c;_<r+n;_+=a)t.moveTo(0,_-r),t.lineTo(e,_-r);t.stroke(),t.strokeStyle="rgba(45,212,191,0.5)",t.lineWidth=4,t.strokeRect(-s,-r,$e,$e);for(const _ of this.entities){const S=_.x-s,p=_.y-r;if(S<-100||S>e+100||p<-100||p>n+100)continue;const d=_.size<=this.pr*.95;if(t.globalAlpha=d?1:.45,t.fillStyle=_.color,_.kind==="trash")t.beginPath(),t.arc(S,p,_.size,0,Math.PI*2),t.fill();else{const y=_.size;if(t.save(),t.translate(S,p),_.kind==="car"&&t.rotate(Math.atan2(_.vy,_.vx)),t.fillRect(-y/2,-y/2,y,y),_.kind==="tower"){t.fillStyle="rgba(255,255,255,0.25)";const R=y/6;for(let M=-1;M<=1;M++)t.fillRect(M*R*2-R/2,-y/2,R,y)}t.restore()}t.globalAlpha=1}for(const _ of this.particles)t.globalAlpha=Math.max(0,_.life*2),t.fillStyle=_.color,t.fillRect(_.x-s-2,_.y-r-2,4,4);t.globalAlpha=1;const l=this.px-s,u=this.py-r,f=t.createRadialGradient(l,u,this.pr*.2,l,u,this.pr);f.addColorStop(0,"#000000"),f.addColorStop(.8,"#050508"),f.addColorStop(1,"rgba(139,92,246,0.9)"),t.fillStyle=f,t.beginPath(),t.arc(l,u,this.pr,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(45,212,191,0.35)",t.lineWidth=2,t.beginPath(),t.arc(l,u,this.pr*1.15,0,Math.PI*2),t.stroke();const h=Math.floor(this.timeLeft/60),m=Math.floor(this.timeLeft%60);t.fillStyle="rgba(15,23,42,0.7)",t.fillRect(10,10,220,64),t.fillStyle="#e2e8f0",t.font="bold 20px system-ui, sans-serif",t.fillText(`分数 ${this.score}`,22,36),t.font="16px system-ui, sans-serif",t.fillStyle=this.timeLeft<=20?"#f87171":"#2dd4bf",t.fillText(`时间 ${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`,22,60),t.fillStyle="#94a3b8",t.fillText(`L${this.level()} · 归档 ${this.eaten}`,130,60)}}let As=null;async function e0(){if(As)return As;const t=await fetch("/black-hole-city/data/admin_index.json");if(!t.ok)throw new Error("全国名录加载失败");return As=await t.json(),As}function n0(i,t){const e=t.trim().toLowerCase();return e?i.provinces.filter(n=>!!(n.name.toLowerCase().includes(e)||n.shortName.toLowerCase()===e||n.shortName.toLowerCase().includes(e)||n.aliases.some(s=>s.toLowerCase()===e||s.toLowerCase().includes(e))||e.length>=2&&n.capital.toLowerCase().includes(e))):i.provinces}function Fr(i){return Math.floor(i).toLocaleString("zh-CN")}function i0(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}const Rs=["华北","东北","华东","华中","华南","西南","西北"];class s0{constructor(t,e){F(this,"root");F(this,"game");F(this,"layer");F(this,"settingsBack","title");F(this,"admin",null);F(this,"searchQ","");F(this,"openProvince","110000");F(this,"regionFilter","");F(this,"previewCity",null);F(this,"lastHud",null);F(this,"fallback2d",null);F(this,"lastHudLevel",0);this.root=t,this.game=e,this.layer=document.createElement("div"),this.layer.id="ui-layer",this.layer.setAttribute("data-ui","1"),t.appendChild(this.layer),e.onScreenChange=n=>void this.render(n),e.onHud=n=>this.updateHud(n)}async render(t){switch(t){case"loading":this.layer.innerHTML='<div class="panel center"><div class="spinner"></div><p>正在打开记忆博物馆…</p></div>';break;case"nowebgl":this.renderNowebgl();break;case"title":this.renderTitle();break;case"howto":this.renderHowto();break;case"settings":this.renderSettings();break;case"lobby":await this.renderLobby();break;case"codex":this.renderCodex();break;case"briefing":this.renderBriefing();break;case"playing":this.renderHud();break;case"paused":this.renderPaused();break;case"result":this.renderResult();break;case"quiz":this.renderQuiz();break}}renderNowebgl(){const t=/iPhone|iPad|iPod/.test(navigator.userAgent);this.layer.innerHTML=`
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal nowebgl-modal">
          <h2>无法运行 3D 版</h2>
          <p>本游戏需要 <b>WebGL</b> 图形支持，<br>当前浏览器没有启用 WebGL，或被系统限制。</p>
          ${t?`
          <div class="tip-box">
            <b>iPhone / iPad 用户请尝试：</b><br>
            1. 关闭「锁定模式」：设置 → 隐私与安全性 → 锁定模式 → 关闭<br>
            2. 用系统 <b>Safari</b> 或 <b>Chrome</b> 打开本页面<br>
            3. 不要用 App 内置浏览器（如某些 App 的网页容器）
          </div>`:`
          <div class="tip-box">
            请换用最新版 Chrome / Edge / Safari，<br>并确认浏览器设置中没有禁用「硬件加速」。
          </div>`}
          <p>推荐从正式链接进入：</p>
          <div class="link-row">
            <code class="link-box">${Dr}</code>
            <button class="btn secondary" id="btn-copy-link">复制链接</button>
          </div>
          <p class="copy-tip" id="copy-tip" style="display:none">已复制到剪贴板 ✓</p>
          <div class="btn-col" style="margin:1rem auto 0;">
            <button class="btn primary" id="btn-try2d">试用 2D 简化版</button>
          </div>
          <p class="hint">2D 版不需要 WebGL，可直接玩一局（俯视视角，触控拖动）。</p>
        </div>
      </div>`,this.bind("btn-copy-link",()=>this.copyOfficialLink()),this.bind("btn-try2d",()=>this.startFallback2D())}copyOfficialLink(){const t=()=>{const e=document.getElementById("copy-tip");e&&(e.style.display="block",window.setTimeout(()=>{e.style.display="none"},2e3))};navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(Dr).then(t,()=>this.copyFallback(t)):this.copyFallback(t)}copyFallback(t){const e=document.createElement("textarea");e.value=Dr,e.style.cssText="position:fixed;opacity:0;",document.body.appendChild(e),e.select();try{document.execCommand("copy"),t()}catch{}e.remove()}startFallback2D(){if(!this.fallback2d){this.layer.style.display="none",this.game.setInputEnabled(!1);try{this.fallback2d=new t0(this.root,{onQuit:()=>{this.fallback2d?.destroy(),this.fallback2d=null,this.game.setInputEnabled(!0),this.layer.style.display="",this.render("nowebgl")}}),this.fallback2d.start()}catch{this.fallback2d=null,this.game.setInputEnabled(!0),this.layer.style.display="",this.render("nowebgl")}}}renderTitle(){const t=this.game.getProfile(),e=t.highScore>0?Fr(t.highScore):"—",n=rc(t.maxMass);this.layer.innerHTML=`
      <div class="overlay title-screen" data-ui="1">
        <div class="top-bar">
          <button class="icon-btn" id="btn-settings" title="设置">⚙</button>
          <button class="icon-btn" id="btn-mute" title="静音">${this.game.getSettings().muted?"🔇":"🔊"}</button>
        </div>
        <div class="title-block">
          <div class="hole-icon">●</div>
          <h1>记忆黑洞</h1>
          <p class="subtitle">中国城市博物馆</p>
          <p class="version">M3b11 每省非省会×10 · 收回散落的城市记忆</p>
        </div>
        <div class="btn-col wide">
          <button class="btn secondary" id="btn-train">训练场·星湾（虚构）</button>
          <button class="btn primary museum" id="btn-beijing">记忆博物馆·北京</button>
          <button class="btn secondary" id="btn-lobby">打开 34 省大厅</button>
          <button class="btn ghost" id="btn-howto">如何游玩</button>
        </div>
        <div class="stats-line">最高分：${e}　最大体型：L${n}　身份：${t.nickname}</div>
        <p class="footnote">不宣称全国地级已收录 · 34 省行政中心可玩 + 有地级市的省非省会 ≥10/省（豁免青海、海南、新疆、宁夏、贵州、西藏、吉林、云南、内蒙古、福建、陕西与非省会总数 <10 的省） / 管线 / prefecture 约 246/293 · 不是 333 完成 · 不是 293 完成</p>
      </div>`,this.bind("btn-train",()=>this.game.openBriefing("xingwan-training")),this.bind("btn-beijing",()=>this.game.openBriefing("beijing")),this.bind("btn-lobby",()=>this.game.openLobby()),this.bind("btn-howto",()=>this.game.openHowto()),this.bind("btn-settings",()=>{this.settingsBack="title",this.game.openSettings()}),this.bind("btn-mute",()=>{const s=!this.game.getSettings().muted;this.game.applySettings({muted:s}),this.renderTitle()})}renderHowto(){this.layer.innerHTML=`
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal">
          <h2>如何游玩</h2>
          <ol class="howto-list">
            <li>你是记忆守护员。吸入碎片 = 把记忆归档进博物馆。</li>
            <li>洞口够大、质量够沉，才能归档（双阈值）。</li>
            <li>训练场·星湾是虚构练习；真城课请从大厅选 34 省行政中心或非省会地级市 live。未 live 城显示「记忆修复中」，不可进 3D。不是 333 完成，也不是 293 完成。</li>
            <li>纪念空间不可归档，请绕行一周完成守护致敬。</li>
            <li>局后有 3 道小测验，可跳过，但跳过不会点亮「小博士」。</li>
          </ol>
          <p class="hint">桌面：WASD　移动端：左侧拖动摇杆　P/Esc 暂停</p>
          <button class="btn primary" id="btn-ok">知道了</button>
        </div>
      </div>`,this.bind("btn-ok",()=>this.game.goTitle())}renderBriefing(){const t=this.game.getBriefing();this.layer.innerHTML=`
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal">
          <h2>${t.title}</h2>
          ${t.lines.map(e=>`<p class="brief-line">${e}</p>`).join("")}
          <div class="btn-row" style="margin-top:1.2rem">
            <button class="btn primary" id="btn-go">${t.packId==="xingwan-training"?"开始练习":"开始守护"}</button>
            <button class="btn secondary" id="btn-back">返回</button>
          </div>
        </div>
      </div>`,this.bind("btn-go",()=>void this.game.startGame(t.packId)),this.bind("btn-back",()=>this.game.goTitle())}renderSettings(){const t=this.game.getSettings();this.layer.innerHTML=`
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal settings-modal">
          <h2>设置</h2>
          <div class="settings-grid">
            <p class="hint">学习年龄决定测验题目；操作难度只改变归档门槛。</p>
            <label>学习年龄
              <select id="s-age">
                <option value="6-8" ${t.ageBand==="6-8"?"selected":""}>6–8 岁</option>
                <option value="9-12" ${t.ageBand==="9-12"?"selected":""}>9–12 岁（默认）</option>
                <option value="13+" ${t.ageBand==="13+"?"selected":""}>13 岁以上</option>
              </select>
            </label>
            <label>操作难度
              <select id="s-diff">
                <option value="easy" ${t.difficulty==="easy"?"selected":""}>轻松</option>
                <option value="normal" ${t.difficulty==="normal"?"selected":""}>标准</option>
                <option value="hard" ${t.difficulty==="hard"?"selected":""}>困难</option>
              </select>
            </label>
            <label>主音量 <input type="range" id="s-master" min="0" max="100" value="${t.masterVolume}"/></label>
            <label>音乐 <input type="range" id="s-bgm" min="0" max="100" value="${t.bgmVolume}"/></label>
            <label>音效 <input type="range" id="s-sfx" min="0" max="100" value="${t.sfxVolume}"/></label>
            <label><input type="checkbox" id="s-mute" ${t.muted?"checked":""}/> 静音</label>
            <label>画质
              <select id="s-quality">
                <option value="low" ${t.quality==="low"?"selected":""}>低</option>
                <option value="medium" ${t.quality==="medium"?"selected":""}>中</option>
                <option value="high" ${t.quality==="high"?"selected":""}>高</option>
              </select>
            </label>
            <label>灵敏度 <input type="range" id="s-sens" min="50" max="150" value="${Math.round(t.sensitivity*100)}"/></label>
            <label>训练场时长
              <select id="s-dur">
                <option value="120" ${t.duration===120?"selected":""}>120 秒</option>
                <option value="180" ${t.duration===180?"selected":""}>180 秒</option>
                <option value="240" ${t.duration===240?"selected":""}>240 秒</option>
              </select>
            </label>
            <p class="hint">生涯模式（真城课）不使用倒计时，只看裂隙稳定度。</p>
            <label><input type="checkbox" id="s-shake" ${t.cameraShake?"checked":""}/> 镜头震动</label>
            <label><input type="checkbox" id="s-outline" ${t.outlineHint?"checked":""}/> 可归档物体描边</label>
            <label><input type="checkbox" id="s-lock" ${t.lockIcon?"checked":""}/> 门槛提示</label>
            <label><input type="checkbox" id="s-mouse" ${t.mouseSteer?"checked":""}/> 鼠标指向移动</label>
            <label><input type="checkbox" id="s-joy" ${t.forceJoystick?"checked":""}/> 始终显示摇杆</label>
          </div>
          <div class="btn-row">
            <button class="btn danger" id="btn-reset">重置本地数据</button>
            <button class="btn primary" id="btn-back">返回</button>
          </div>
        </div>
      </div>`;const e=()=>{const r={masterVolume:n("s-master"),bgmVolume:n("s-bgm"),sfxVolume:n("s-sfx"),muted:s("s-mute"),quality:document.getElementById("s-quality").value,sensitivity:n("s-sens")/100,duration:Number(document.getElementById("s-dur").value),difficulty:document.getElementById("s-diff").value,ageBand:document.getElementById("s-age").value,cameraShake:s("s-shake"),outlineHint:s("s-outline"),lockIcon:s("s-lock"),mouseSteer:s("s-mouse"),forceJoystick:s("s-joy")};this.game.applySettings(r)},n=r=>Number(document.getElementById(r).value),s=r=>document.getElementById(r).checked;this.layer.querySelectorAll("input, select").forEach(r=>{r.addEventListener("change",e),r.addEventListener("input",e)}),this.bind("btn-back",()=>{e(),this.settingsBack==="paused"?this.game.closeOverlayTo("paused"):this.game.goTitle()}),this.bind("btn-reset",()=>{confirm("将清除最高分、图鉴与设置，且不可恢复。确定吗？")&&(this.game.resetData(),this.renderSettings())})}async renderLobby(){if(!this.admin){this.layer.innerHTML='<div class="panel center"><div class="spinner"></div><p>正在展开 34 省大厅…</p></div>';try{this.admin=await e0()}catch{this.layer.innerHTML='<div class="panel center"><p>名录加载失败。</p><button class="btn" id="btn-back">返回</button></div>',this.bind("btn-back",()=>this.game.goTitle());return}}const t=this.searchQ,e=this.regionCoverage(),n=e.filter(d=>d.live>0).length,s=e.reduce((d,y)=>d+y.nonCapitalLive,0),r=e.reduce((d,y)=>d+y.pipeline,0),a=this.admin.provinces.filter(d=>this.provinceHasLiveCapital(d)).length,o=this.prefectureCoverage(),c=[`<button class="r7-chip ${this.regionFilter===""?"on":""}" data-region="">全部</button>`,...Rs.map(d=>{const y=e.find(w=>w.region===d),R=(y?.live??0)>0,M=y?.nonCapitalLive??0,b=M>0?` · 非省会${M}`:R?" · 可玩":" · 修复中";return`<button class="r7-chip ${this.regionFilter===d?"on":""} ${R?"has-live":""}" data-region="${d}">${d}${b}</button>`})].join("");let l=n0(this.admin,t);this.regionFilter&&(l=l.filter(d=>d.region7===this.regionFilter));const u=new Map;for(const d of l){const y=u.get(d.region7)??[];y.push(d),u.set(d.region7,y)}const f=Rs.filter(d=>u.has(d)).map(d=>{const y=u.get(d).map(R=>{const M=this.liveCitiesOf(R.adcode).length,b=this.draftCitiesOf(R.adcode).length,w=M>0||R.playable,A=w?"live":b>0?"draft":"repair",v=w?`可玩 · ${M} 座`:b>0?`草稿 · ${b} 座 · 记忆修复中`:"记忆修复中";return`<button class="prov-card ${A}" data-adcode="${R.adcode}">
              <span class="prov-name">${R.name}</span>
              <span class="prov-short">${R.shortName}</span>
              <span class="prov-cap">行政中心 ${R.capital}</span>
              <span class="prov-st">${v}</span>
            </button>`}).join("");return`<h3 class="region-h">${d}</h3><div class="prov-grid">${y}</div>`}).join(""),h=this.openProvince;let m="";if(h){const d=this.admin.provinces.find(R=>R.adcode===h),y=this.admin.prefectures.filter(R=>R.parentAdcode===h);if(d){const R=this.liveCitiesOf(h),M=this.draftCitiesOf(h),b=[...R,...M],w=Math.max(0,y.length-b.length),A=b.map(C=>{const L=C.playable_3d&&C.packId,U=C.status==="draft"&&!L;return`<li class="${L?"live":U?"draft":""}">
              ${C.name}${L?" · 可玩":" · 记忆修复中"}${U?"（草稿）":""}
              ${L?`<button class="btn tiny" data-pack="${C.packId}">进入</button>`:""}
              ${U?`<button class="btn tiny ghost" data-preview="${C.adcode}">预览说明</button>`:""}
            </li>`}).join(""),v=R.map(C=>`<button class="btn primary" data-pack="${C.packId}">进入 ${C.name.replace(/主城$/,"")}</button>`).join(""),E=R[0];m=`<div class="prov-detail">
          <h3>${d.name}（${d.shortName}）</h3>
          <p>${d.region7} / ${d.region4} · 行政中心 ${d.capital}</p>
          <p class="hint">${R.length?"本省已开放 live 真城 3D。草稿灰壳不可进游玩。":M.length?"本省有草稿进入管线，仍是「记忆修复中」，不可开 3D。":"本省入口可点，城包尚未制作，显示「记忆修复中」。不宣称全国地级已收录。"}</p>
          ${A?`<ul class="city-mini">${A}</ul>`:'<p class="hint">省级单位，见主城入口。</p>'}
          ${w?`<p class="hint">另有 ${w} 座地级名录占位，记忆修复中。不是 333 完成，也不是 293 完成。</p>`:""}
          <div class="btn-row wrap">
            ${v}
            ${E?`<button class="btn secondary" id="btn-codex" data-pack="${E.packId}">本城图鉴</button>`:""}
          </div>
        </div>`}}const _=this.previewCity,S=_?`<div class="overlay modal-wrap preview-wrap" data-ui="1">
          <div class="modal">
            <h2>${_.name} · 记忆修复中</h2>
            <p class="hint">这是 B 级草稿预览，不是 live，不能进入 3D。</p>
            <p class="brief-line">${_.preview||"套件草稿已进管线，尚未四审。"}</p>
            <button class="btn primary" id="btn-close-preview">知道了</button>
          </div>
        </div>`:"";this.layer.innerHTML=`
      <div class="overlay lobby-screen" data-ui="1">
        <div class="lobby-head">
          <button class="icon-btn" id="btn-back" title="返回">←</button>
          <div>
            <h2>全国大厅</h2>
            <p class="hint">34 省可点 · live 可进 3D · 草稿灰壳「记忆修复中」· 34 省行政中心可玩 + 有地级市的省非省会 ≥10/省（豁免青海、海南、新疆、宁夏、贵州、西藏、吉林、云南、内蒙古、福建、陕西与非省会总数 <10 的省） / prefecture 约 ${o.prefectureCityLive}/293 / 管线 · 不上未审中国全图</p>
          </div>
        </div>
        <div class="region-progress">
          <p>34 省行政中心可玩 ${a}/34 · 有地级市的省非省会 ≥10/省 ${o.covered10}/${o.need10}（豁免青海、海南、新疆、宁夏、贵州、西藏、吉林、云南、内蒙古、福建、陕西与非省会总数 <10 的省） · prefecture_city live ${o.prefectureCityLive}/293 · 七大区可玩 ${n}/7 · 非省会 live ${s}（≥21） · 管线 ${r} 座 · <b>不是 333 完成 · 不是 293 完成</b></p>
          <div class="r7-chips">${c}</div>
        </div>
        <input class="search" id="lobby-search" placeholder="搜索省名 / 简称（试试「京」「沪」「粤」「川」）" value="${t}"/>
        <p class="footnote">${this.admin.disclaimer}</p>
        <div class="lobby-body">
          <div class="lobby-list">${f||"<p>没有匹配的省。</p>"}</div>
          ${m}
        </div>
        ${this.game.hasSharedQuiz()?'<div class="btn-row" style="margin:0.8rem 1rem 1.2rem"><button class="btn secondary" id="btn-prov-quiz">抽 3 道 34 省简称题</button></div>':""}
        ${S}
      </div>`,this.bind("btn-back",()=>this.game.goTitle()),this.bind("btn-close-preview",()=>{this.previewCity=null,this.renderLobby()});const p=document.getElementById("lobby-search");p?.addEventListener("input",()=>{this.searchQ=p.value,this.renderLobby()}),p&&t&&(p.focus(),p.setSelectionRange(t.length,t.length)),this.layer.querySelectorAll(".prov-card").forEach(d=>{d.addEventListener("click",()=>{this.openProvince=d.dataset.adcode??null,this.renderLobby()})}),this.layer.querySelectorAll(".r7-chip").forEach(d=>{d.addEventListener("click",()=>{this.regionFilter=d.dataset.region??"",this.renderLobby()})}),this.layer.querySelectorAll("[data-pack]").forEach(d=>{d.addEventListener("click",y=>{y.stopPropagation();const R=d.dataset.pack;R&&(d.id==="btn-codex"?this.game.openCodex(R):this.game.openBriefing(R))})}),this.layer.querySelectorAll("[data-preview]").forEach(d=>{d.addEventListener("click",y=>{y.stopPropagation();const R=d.dataset.preview;this.previewCity=this.admin?.prefectures.find(M=>M.adcode===R)??null,this.renderLobby()})}),this.bind("btn-prov-quiz",()=>this.game.beginProvinceQuiz())}liveCitiesOf(t){return this.admin?this.admin.prefectures.filter(e=>e.parentAdcode===t&&e.playable_3d&&e.packId):[]}draftCitiesOf(t){return this.admin?this.admin.prefectures.filter(e=>e.parentAdcode===t&&e.status==="draft"&&e.packId&&!e.playable_3d):[]}isNonCapitalCity(t){const e=this.admin?.provinces.find(r=>r.adcode===t.parentAdcode);if(!e||e.unitType==="municipality"||e.unitType==="sar")return!1;const n=String(t.name||"").replace(/主城$/,"").replace(/教学包$/,""),s=e.capital;return!(n===s||n===`${s}市`||n.startsWith(s))}provinceHasLiveCapital(t){const e=t.capital;return this.liveCitiesOf(t.adcode).some(n=>{const s=String(n.name||"").replace(/主城$/,"").replace(/教学包$/,"");return s===e||s===`${e}市`||s.startsWith(e)})}prefectureCoverage(){if(!this.admin)return{need:0,covered:0,need2:0,covered2:0,need3:0,covered3:0,need4:0,covered4:0,need5:0,covered5:0,need6:0,covered6:0,need7:0,covered7:0,need8:0,covered8:0,need9:0,covered9:0,need10:0,covered10:0,prefectureCityLive:0};const t=new Set(["municipality","sar"]);let e=0,n=0,s=0,r=0,a=0,o=0,c=0,l=0,u=0,f=0,h=0,m=0,_=0,S=0,p=0,d=0,y=0,R=0,M=0,b=0;for(const A of this.admin.provinces){if(t.has(A.unitType))continue;const v=this.admin.prefectures.filter(z=>z.parentAdcode===A.adcode&&z.unitType==="prefecture_city");if(v.length===0)continue;const E=v.filter(z=>this.isNonCapitalCity(z));if(E.length===0)continue;const C=E.filter(z=>z.playable_3d&&z.packId);e+=1,C.length>=1&&(n+=1),E.length>=2&&(s+=1,C.length>=2&&(r+=1));const L=E.filter(z=>z.adcode!=="460300"&&z.name!=="三沙市"),U=L.filter(z=>z.playable_3d&&z.packId);L.length>=3&&(a+=1,U.length>=3&&(o+=1)),L.length>=4&&(c+=1,U.length>=4&&(l+=1)),L.length>=5&&(u+=1,U.length>=5&&(f+=1)),L.length>=6&&(h+=1,U.length>=6&&(m+=1)),L.length>=7&&(_+=1,U.length>=7&&(S+=1)),L.length>=8&&(p+=1,U.length>=8&&(d+=1)),L.length>=9&&(y+=1,U.length>=9&&(R+=1)),L.length>=10&&(M+=1,U.length>=10&&(b+=1))}const w=this.admin.prefectures.filter(A=>A.unitType==="prefecture_city"&&A.playable_3d&&A.packId).length;return{need:e,covered:n,need2:s,covered2:r,need3:a,covered3:o,need4:c,covered4:l,need5:u,covered5:f,need6:h,covered6:m,need7:_,covered7:S,need8:p,covered8:d,need9:y,covered9:R,need10:M,covered10:b,prefectureCityLive:w}}regionCoverage(){return this.admin?Rs.map(t=>{const e=this.admin.prefectures.filter(o=>o.region7===t),n=e.filter(o=>o.playable_3d&&o.packId),s=n.length,r=n.filter(o=>this.isNonCapitalCity(o)).length,a=e.filter(o=>o.packId&&(o.status==="live"||o.status==="draft"||o.playable_3d)).length;return{region:t,live:s,nonCapitalLive:r,pipeline:a}}):Rs.map(t=>({region:t,live:0,nonCapitalLive:0,pipeline:0}))}renderCodex(){const t=this.game.getCodex(),e=t.progress.doctorStar?"★ 小博士已点亮":"小博士未点亮（完成局后 3 题且答对至少 2 题）",n=t.cards.map(r=>`<article class="kcard"><h4>${r.title}</h4><p>${r.body}</p></article>`).join(""),s=t.landmarks.map(r=>`<li>${r.name} · ${r.mark==="未点亮"?"未点亮":r.mark==="guarded"?"已守护":r.mark==="visited"?"已参观":"已入库"}</li>`).join("");this.layer.innerHTML=`
      <div class="overlay lobby-screen" data-ui="1">
        <div class="lobby-head">
          <button class="icon-btn" id="btn-back">←</button>
          <h2>图鉴 · ${t.capital||t.provinceName}</h2>
        </div>
        <div class="codex">
          <section class="prov-hero">
            <h3>${t.provinceName}</h3>
            <p>简称 <b>${t.shortName}</b> · ${t.capital}</p>
            <p>${t.region7} / ${t.region4} · ${t.climate}</p>
            <p>${t.blurb}</p>
            <p class="doctor">${e}</p>
          </section>
          <section>
            <h3>本城地标</h3>
            <ul>${s||"<li>去 3D 课里点亮 GUARD / VISIT 地标。</li>"}</ul>
          </section>
          <section>
            <h3>已收知识卡 ${t.cards.length}</h3>
            ${n||'<p class="hint">玩一局真城课，归档或守护后会点亮卡片。也可从大厅直接打开本页。</p>'}
          </section>
        </div>
        <div class="btn-row" style="margin:1rem">
          <button class="btn primary" id="btn-play">进入 3D</button>
          <button class="btn secondary" id="btn-lobby">回大厅</button>
        </div>
      </div>`,this.bind("btn-back",()=>this.game.goTitle()),this.bind("btn-play",()=>this.game.openBriefing(t.packId)),this.bind("btn-lobby",()=>this.game.openLobby())}renderHud(){this.layer.innerHTML=`
      <div class="hud" data-ui="1">
        <div class="hud-top">
          <div class="hud-left">
            <div class="level-line"><span id="hud-city"></span> · <span id="hud-level">L1</span></div>
            <div class="bar"><div class="bar-fill" id="hud-bar" style="width:0%"></div></div>
            <div class="score-line">博物馆能量 <span id="hud-score">0</span></div>
            <div class="dual" id="hud-dual" style="display:none">
              <div class="dual-name" id="dual-name"></div>
              <div class="dual-row">洞口 <div class="bar mini"><div class="bar-fill" id="bar-size"></div></div></div>
              <div class="dual-row">质量 <div class="bar mini"><div class="bar-fill mass" id="bar-mass"></div></div></div>
              <div class="dual-miss" id="dual-miss"></div>
            </div>
          </div>
          <div class="hud-right">
            <div class="timer" id="hud-timer">03:00</div>
            <button class="icon-btn pause-btn" id="btn-pause" title="暂停">⏸</button>
          </div>
        </div>
        <div class="combo" id="hud-combo" style="display:none">连击 x2</div>
        <div class="toast" id="hud-toast" style="display:none"></div>
        <button class="skip-tut" id="btn-skip-tut" style="display:none">跳过引导</button>
        <div class="kmodal" id="kmodal" style="display:none">
          <div class="kmodal-card">
            <h3 id="k-title"></h3>
            <p id="k-body"></p>
            <div class="btn-row">
              <button class="btn primary" id="k-ok">知道了</button>
              <button class="btn secondary" id="k-later">稍后再读</button>
            </div>
          </div>
        </div>
      </div>`,this.bind("btn-pause",()=>this.game.pause()),this.bind("btn-skip-tut",()=>{this.game.skipTutorial();const t=document.getElementById("btn-skip-tut");t&&(t.style.display="none")}),this.bind("k-ok",()=>this.game.acknowledgeCard(!1)),this.bind("k-later",()=>this.game.acknowledgeCard(!0)),this.lastHud&&this.updateHud(this.lastHud)}updateHud(t){if(this.lastHud=t,this.game.screen!=="playing")return;const e=document.getElementById("hud-level"),n=document.getElementById("hud-city");e&&t.level!==this.lastHudLevel&&(this.lastHudLevel>0&&t.level>this.lastHudLevel&&(e.classList.remove("level-flash"),e.offsetWidth,e.classList.add("level-flash")),this.lastHudLevel=t.level);const s=document.getElementById("hud-bar"),r=document.getElementById("hud-score"),a=document.getElementById("hud-timer"),o=document.getElementById("hud-combo"),c=document.getElementById("hud-toast"),l=document.getElementById("btn-skip-tut");n&&(n.textContent=t.cityName),e&&(e.textContent=`L${t.level} ${t.levelLabel}`),s&&(s.style.width=`${Math.round(t.progress*100)}%`),r&&(r.textContent=Fr(t.score)),a&&(t.mode==="career"?(a.textContent=`裂隙 ${Math.round(t.rift)}`,a.classList.toggle("warn",t.rift<=30),a.classList.toggle("danger",t.rift<=12)):(a.textContent=i0(t.timeLeft),a.classList.toggle("warn",t.timeLeft<=30),a.classList.toggle("danger",t.timeLeft<=10))),o&&(t.combo>=2?(o.style.display="block",o.textContent=`连击 x${t.combo}`):o.style.display="none"),c&&(t.toast&&!t.card?(c.style.display="block",c.textContent=t.toast,l&&(l.style.display=t.tutorial?"block":"none")):(c.style.display="none",l&&(l.style.display="none")));const u=document.getElementById("hud-dual");if(u)if(t.aim){u.style.display="block";const h=document.getElementById("dual-name"),m=document.getElementById("dual-miss"),_=document.getElementById("bar-size"),S=document.getElementById("bar-mass");h&&(h.textContent=`瞄准：${t.aim.name}`),m&&(m.textContent=t.aim.missing),_&&(_.style.width=`${Math.min(100,Math.round(t.aim.sizeHave/Math.max(t.aim.sizeNeed,.01)*100))}%`),S&&(S.style.width=`${Math.min(100,Math.round(t.aim.massHave/Math.max(t.aim.massNeed,.01)*100))}%`)}else u.style.display="none";const f=document.getElementById("kmodal");if(f)if(t.card){f.style.display="flex";const h=document.getElementById("k-title"),m=document.getElementById("k-body");h&&(h.textContent=t.card.title),m&&(m.textContent=t.card.body)}else f.style.display="none"}renderPaused(){this.layer.innerHTML=`
      <div class="overlay modal-wrap dim" data-ui="1">
        <div class="modal">
          <h2>暂停</h2>
          <p class="hint">记忆还在口袋里，不会消失。</p>
          <div class="btn-col">
            <button class="btn primary" id="btn-resume">继续</button>
            <button class="btn secondary" id="btn-set">设置</button>
            <button class="btn danger" id="btn-quit">先离开（记忆暂存）</button>
          </div>
        </div>
      </div>`,this.bind("btn-resume",()=>this.game.resume()),this.bind("btn-set",()=>{this.settingsBack="paused",this.game.openSettings()}),this.bind("btn-quit",()=>{const t=document.getElementById("btn-quit");if(t){if(t.dataset.armed==="1"){this.game.abandon();return}t.dataset.armed="1",t.textContent="确认离开？",window.setTimeout(()=>{document.getElementById("btn-quit")&&(t.dataset.armed="0",t.textContent="先离开（记忆暂存）")},3e3)}})}renderResult(){const t=this.game.getResult();if(!t)return;const e=t.deferredCards.map(n=>`<p class="k-sum"><b>${n.title}</b>：${n.body}</p>`).join("");this.layer.innerHTML=`
      <div class="overlay modal-wrap dim" data-ui="1">
        <div class="modal">
          <h2>${t.mode==="career"?"裂隙暂合拢，记忆已入库":"训练场结算"}</h2>
          <p class="result-title">${t.title}</p>
          <p class="result-score">博物馆能量：${Fr(t.score)}${t.isNewRecord?' <span class="new-rec">新纪录！</span>':""}</p>
          <p>本局入库件数：${t.archived}　参观：${t.visited}　守护：${t.guarded}</p>
          <p>最终体型：L${t.level} · 质量 ${t.mass}${t.mode==="career"?` · 裂隙 ${t.rift}`:""}</p>
          ${e?`<div class="deferred"><h3>稍后再读</h3>${e}</div>`:""}
          <div class="btn-row" style="margin-top:1.2rem">
            ${t.hasQuiz?'<button class="btn primary" id="btn-quiz">局后 3 题</button>':""}
            <button class="btn ${t.hasQuiz?"secondary":"primary"}" id="btn-again">再来一局</button>
            <button class="btn secondary" id="btn-home">返回标题</button>
          </div>
        </div>
      </div>`,this.bind("btn-quiz",()=>this.game.beginQuiz()),this.bind("btn-again",()=>void this.game.startGame()),this.bind("btn-home",()=>this.game.goTitle())}renderQuiz(){const t=this.game.getQuizView();if(t.done){const s=this.game.quizAnswers.filter(a=>a.correct).length,r=t.skipped?"已跳过测验，本局不点亮小博士星。作答记录未写入。":`答对 ${s} / ${t.total}。${t.doctor?"点亮小博士星！":"再试一次也许能点亮小博士。"}`;this.layer.innerHTML=`
        <div class="overlay modal-wrap" data-ui="1">
          <div class="modal">
            <h2>测验结束</h2>
            <p>${r}</p>
            <button class="btn primary" id="btn-codex">${this.game.quizReturn==="lobby"?"回大厅":"查看图鉴"}</button>
          </div>
        </div>`,this.bind("btn-codex",()=>{this.game.quizReturn==="lobby"?this.game.openLobby():this.game.openCodex(this.game.codexFocus)});return}const e=t.q;if(!e)return;const n=e.choices.map((s,r)=>`<button class="btn secondary quiz-choice" data-i="${r}">${s}</button>`).join("");this.layer.innerHTML=`
      <div class="overlay modal-wrap" data-ui="1">
        <div class="modal">
          <p class="hint">第 ${t.index+1} / ${t.total} 题 · 可跳过（不点亮小博士）</p>
          <h2>${e.prompt}</h2>
          <div class="btn-col">${n}</div>
          <button class="btn ghost" id="btn-skip" style="margin-top:1rem">稍后再答（不点亮小博士）</button>
        </div>
      </div>`,this.layer.querySelectorAll(".quiz-choice").forEach(s=>{s.addEventListener("click",()=>this.game.answerQuiz(Number(s.dataset.i)))}),this.bind("btn-skip",()=>this.game.skipQuiz())}bind(t,e){document.getElementById(t)?.addEventListener("click",s=>{s.stopPropagation(),e()})}}const Ys=document.querySelector("#app");if(!Ys)throw new Error("#app missing");const Xa=new Jg(Ys);new s0(Ys,Xa);window.__game=Xa;Xa.boot().catch(i=>{console.error(i),Ys.innerHTML=`<div style="color:#fff;padding:2rem;font-family:sans-serif">
    <h2>加载失败</h2>
    <p>资源加载失败，请刷新页面重试。</p>
  </div>`});
//# sourceMappingURL=index-BEX8hDRy.js.map
