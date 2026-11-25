(()=>{var wu=window.React;var{useEffect:$a,useRef:bl,useState:Nl,useMemo:Ig,useCallback:Eg,createElement:yg,Fragment:Ag}=wu;var rc=0,Oo=1,ac=2;var Us=1,sa=2,Zn=3,$i=0,_e=1,Xe=2,gn=0,Jn=1,Uo=2,Bo=3,jo=4,oc=5;var Mn=100,lc=101,cc=102,uc=103,hc=104,dc=200,fc=201,pc=202,mc=203,ko=204,Fo=205,gc=206,Mc=207,xc=208,Ic=209,Ec=210,yc=211,Ac=212,vc=213,Tc=214,br=0,Nr=1,wr=2,Bn=3,Cr=4,Lr=5,Dr=6,Pr=7,ra=0,Sc=1,Rc=2,Ai=0,Ho=1,Vo=2,Wo=3,Bs=4,Go=5,Xo=6,js=7;var qo=300,xn=301,Kn=302,aa=303,oa=304,jn=1e3,ei=1001,_r=1002,we=1003,bc=1004;var ks=1005;var Pe=1006,la=1007;var di=1008;var qe=1009,Qo=1010,Yo=1011,$n=1012,ca=1013,fi=1014,ri=1015,pi=1016,ua=1017,ha=1018,In=1020,Zo=35902,Jo=35899,Ko=1021,$o=1022,mi=1023,Di=1026,Oi=1027,da=1028,fa=1029,tn=1030,pa=1031;var ma=1033,Fs=33776,Hs=33777,Vs=33778,Ws=33779,ga=35840,Ma=35841,xa=35842,Ia=35843,Ea=36196,ya=37492,Aa=37496,va=37488,Ta=37489,Gs=37490,Sa=37491,Ra=37808,ba=37809,Na=37810,wa=37811,Ca=37812,La=37813,Da=37814,Pa=37815,_a=37816,za=37817,Oa=37818,Ua=37819,Ba=37820,ja=37821,ka=36492,Fa=36494,Ha=36495,Va=36283,Wa=36284,Xs=36285,Ga=36286;var ps=2300,zr=2301,Tr=2302,No=2303,wo=2400,Co=2401,Lo=2402;var Nc=3200;var qs=0,wc=1,gi="",Te="srgb",ms="srgb-linear",gs="linear",le="srgb";var Sr=7680;var Cc=519,Lc=512,Dc=513,Pc=514,tl=515,_c=516,zc=517,el=518,il=519,Oc=35044,Xa=35048;var nl="300 es",ii=2e3,kn=2001;function Cu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Lu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Fn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uc(){let n=Fn("canvas");return n.style.display="block",n}var wl={},Hn=null;function sl(...n){let t="THREE."+n.shift();Hn?Hn("log",t,...n):console.log(t,...n)}function Bc(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=Bc(n);let t="THREE."+n.shift();if(Hn)Hn("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Bt(...n){n=Bc(n);let t="THREE."+n.shift();if(Hn)Hn("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function hn(...n){let t=n.join(" ");t in wl||(wl[t]=!0,zt(...n))}function jc(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var kc={[br]:br,[wr]:Dr,[Cr]:Cr,[Bn]:Lr,[Nr]:Nr,[Dr]:wr,[Pr]:Pr,[Lr]:Bn},xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var to=Math.PI/180,Or=180/Math.PI;function Qs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function Du(n,t){return(n%t+t)%t}function eo(n,t,e){return(1-e)*n+e*t}function Fc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pu(n,t){if(t.constructor===Float32Array)return n;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function _u(n,t){if(t.constructor===Float32Array)return n;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var qt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],E=r[a+3];if(f!==E||c!==u||l!==d||h!==g){let p=c*u+l*d+h*g+f*E;p<0&&(u=-u,d=-d,g=-g,E=-E,p=-p);let m=1-o;if(p<.9995){let T=Math.acos(p),R=Math.sin(T);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R,c=c*m+u*o,l=l*m+d*o,h=h*m+g*o,f=f*m+E*o}else{c=c*m+u*o,l=l*m+d*o,h=h*m+g*o,f=f*m+E*o;let T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-o*d,t[e+2]=l*g+h*d+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new _,Cl=new Ge,kt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],E=s[0],p=s[3],m=s[6],T=s[1],R=s[4],y=s[7],b=s[2],A=s[5],M=s[8];return r[0]=a*E+o*T+c*b,r[3]=a*p+o*R+c*A,r[6]=a*m+o*y+c*M,r[1]=l*E+h*T+f*b,r[4]=l*p+h*R+f*A,r[7]=l*m+h*y+f*M,r[2]=u*E+d*T+g*b,r[5]=u*p+d*R+g*A,r[8]=u*m+d*y+g*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=f*E,t[1]=(s*l-h*i)*E,t[2]=(o*i-s*a)*E,t[3]=u*E,t[4]=(h*e-s*c)*E,t[5]=(s*r-o*e)*E,t[6]=d*E,t[7]=(i*c-l*e)*E,t[8]=(a*e-i*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return hn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(no.makeScale(t,e)),this}rotate(t){return hn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(no.makeRotation(-t)),this}translate(t,e){return hn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},no=new kt,Ll=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){let n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:t,whitePoint:i,transfer:gs,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),n}var te=zu();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Un(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var An,Ur=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{An===void 0&&(An=Fn("canvas")),An.width=t.width,An.height=t.height;let s=An.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=An}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fn("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ou=0,Vn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function so(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ur.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Uu=0,ro=new _,je=class n extends xi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ei,s=ei,r=Pe,a=di,o=mi,c=qe,l=n.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Qs(),this.name="",this.source=new Vn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=qo;je.DEFAULT_ANISOTROPY=1;var xe=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],E=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-E)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+E)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,y=(d+1)/2,b=(m+1)/2,A=(h+u)/4,M=(f+E)/4,S=(g+p)/4;return R>y&&R>b?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=A/i,r=M/i):y>b?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=S/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=M/r,s=S/r),this.set(i,s,r,e),this}let T=Math.sqrt((p-g)*(p-g)+(f-E)*(f-E)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-E)/T,this.z=(u-h)/T,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Br=class extends xi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new je({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vn(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ce=class extends Br{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ms=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jr=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,c,l,h,f,u,d,g,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,f,u,d,g,E,p)}set(t,e,i,s,r,a,o,c,l,h,f,u,d,g,E,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=E,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/vn.setFromMatrixColumn(t,0).length(),r=1/vn.setFromMatrixColumn(t,1).length(),a=1/vn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,E=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-E*l,e[9]=-o*c,e[2]=E-u*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=l*h,E=l*f;e[0]=u+E*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=E+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=l*h,E=l*f;e[0]=u-E*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=E-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,E=o*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+E,e[1]=c*f,e[5]=E*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,g=o*c,E=o*l;e[0]=c*h,e[4]=E-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-E*f}else if(t.order==="XZY"){let u=a*c,d=a*l,g=o*c,E=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+E,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=E*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bu,t,ju)}lookAt(t,e,i){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ki.crossVectors(i,Ze),ki.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ki.crossVectors(i,Ze)),ki.normalize(),er.crossVectors(Ze,ki),s[0]=ki.x,s[4]=er.x,s[8]=Ze.x,s[1]=ki.y,s[5]=er.y,s[9]=Ze.y,s[2]=ki.z,s[6]=er.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],E=i[6],p=i[10],m=i[14],T=i[3],R=i[7],y=i[11],b=i[15],A=s[0],M=s[4],S=s[8],z=s[12],C=s[1],L=s[5],B=s[9],F=s[13],w=s[2],H=s[6],Q=s[10],O=s[14],tt=s[3],V=s[7],G=s[11],$=s[15];return r[0]=a*A+o*C+c*w+l*tt,r[4]=a*M+o*L+c*H+l*V,r[8]=a*S+o*B+c*Q+l*G,r[12]=a*z+o*F+c*O+l*$,r[1]=h*A+f*C+u*w+d*tt,r[5]=h*M+f*L+u*H+d*V,r[9]=h*S+f*B+u*Q+d*G,r[13]=h*z+f*F+u*O+d*$,r[2]=g*A+E*C+p*w+m*tt,r[6]=g*M+E*L+p*H+m*V,r[10]=g*S+E*B+p*Q+m*G,r[14]=g*z+E*F+p*O+m*$,r[3]=T*A+R*C+y*w+b*tt,r[7]=T*M+R*L+y*H+b*V,r[11]=T*S+R*B+y*Q+b*G,r[15]=T*z+R*F+y*O+b*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],E=t[7],p=t[11],m=t[15],T=c*d-l*u,R=o*d-l*f,y=o*u-c*f,b=a*d-l*h,A=a*u-c*h,M=a*f-o*h;return e*(E*T-p*R+m*y)-i*(g*T-p*b+m*A)+s*(g*R-E*b+m*M)-r*(g*y-E*A+p*M)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],E=t[13],p=t[14],m=t[15],T=e*o-i*a,R=e*c-s*a,y=e*l-r*a,b=i*c-s*o,A=i*l-r*o,M=s*l-r*c,S=h*E-f*g,z=h*p-u*g,C=h*m-d*g,L=f*p-u*E,B=f*m-d*E,F=u*m-d*p,w=T*F-R*B+y*L+b*C-A*z+M*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/w;return t[0]=(o*F-c*B+l*L)*H,t[1]=(s*B-i*F-r*L)*H,t[2]=(E*M-p*A+m*b)*H,t[3]=(u*A-f*M-d*b)*H,t[4]=(c*C-a*F-l*z)*H,t[5]=(e*F-s*C+r*z)*H,t[6]=(p*y-g*M-m*R)*H,t[7]=(h*M-u*y+d*R)*H,t[8]=(a*B-o*C+l*S)*H,t[9]=(i*C-e*B-r*S)*H,t[10]=(g*A-E*y+m*T)*H,t[11]=(f*y-h*A-d*T)*H,t[12]=(o*z-a*L-c*S)*H,t[13]=(e*L-i*z+s*S)*H,t[14]=(E*R-g*b-p*T)*H,t[15]=(h*b-f*R+u*T)*H,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,g=r*f,E=a*h,p=a*f,m=o*f,T=c*l,R=c*h,y=c*f,b=i.x,A=i.y,M=i.z;return s[0]=(1-(E+m))*b,s[1]=(d+y)*b,s[2]=(g-R)*b,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(u+m))*A,s[6]=(p+T)*A,s[7]=0,s[8]=(g+R)*M,s[9]=(p-T)*M,s[10]=(1-(u+E))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=vn.set(s[0],s[1],s[2]).length(),o=vn.set(s[4],s[5],s[6]).length(),c=vn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let l=1/a,h=1/o,f=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=ii,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,E;if(c)g=r/(a-r),E=a*r/(a-r);else if(o===ii)g=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===kn)g=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ii,c=!1){let l=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,E;if(c)g=1/(a-r),E=a/(a-r);else if(o===ii)g=-2/(a-r),E=-(a+r)/(a-r);else if(o===kn)g=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},vn=new _,oi=new ue,Bu=new _(0,0,0),ju=new _(1,1,1),ki=new _,er=new _,Ze=new _,Pl=new ue,_l=new Ge,Ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ku=0,zl=new _,Tn=new Ge,Ri=new ue,ir=new _,os=new _,Fu=new _,Hu=new Ge,Ol=new _(1,0,0),Ul=new _(0,1,0),Bl=new _(0,0,1),jl={type:"added"},Vu={type:"removed"},Sn={type:"childadded",child:null},ao={type:"childremoved",child:null},Le=class n extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new _,e=new Ii,i=new Ge,s=new _(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new kt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Tn.setFromAxisAngle(t,e),this.quaternion.multiply(Tn),this}rotateOnWorldAxis(t,e){return Tn.setFromAxisAngle(t,e),this.quaternion.premultiply(Tn),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(os,ir,this.up):Ri.lookAt(ir,os,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Tn.setFromRotationMatrix(Ri),this.quaternion.premultiply(Tn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jl),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vu),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jl),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new _(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wu={type:"move"},Wn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let E of t.hand.values()){let p=e.getJointPose(E,i),m=this._getHandJoint(l,E);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},nr={h:0,s:0,l:0};function oo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Du(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=oo(a,r,t+1/3),this.g=oo(a,r,t),this.b=oo(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let i=Hc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.workingToColorSpace(Be.copy(this),t),Math.round(Zt(Be.r*255,0,255))*65536+Math.round(Zt(Be.g*255,0,255))*256+Math.round(Zt(Be.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Be.copy(this),e);let i=Be.r,s=Be.g,r=Be.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Te){te.workingToColorSpace(Be.copy(this),t);let e=Be.r,i=Be.g,s=Be.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(nr);let i=eo(Fi.h,nr.h,e),s=eo(Fi.s,nr.s,e),r=eo(Fi.l,nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Ht;Ht.NAMES=Hc;var Pi=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new _,bi=new _,lo=new _,Ni=new _,Rn=new _,bn=new _,kl=new _,co=new _,uo=new _,ho=new _,fo=new xe,po=new xe,mo=new xe,Gi=class n{constructor(t=new _,e=new _,i=new _){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),bi.subVectors(i,e),lo.subVectors(t,e);let a=li.dot(li),o=li.dot(bi),c=li.dot(lo),l=bi.dot(bi),h=bi.dot(lo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(a,Ni.y),c.addScaledVector(o,Ni.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,i),mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),bi.subVectors(t,e),li.cross(bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),li.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Rn.subVectors(s,i),bn.subVectors(r,i),co.subVectors(t,i);let c=Rn.dot(co),l=bn.dot(co);if(c<=0&&l<=0)return e.copy(i);uo.subVectors(t,s);let h=Rn.dot(uo),f=bn.dot(uo);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(Rn,a);ho.subVectors(t,r);let d=Rn.dot(ho),g=bn.dot(ho);if(g>=0&&d<=g)return e.copy(r);let E=d*l-c*g;if(E<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(bn,o);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return kl.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(kl,o);let m=1/(p+E+u);return a=E*m,o=u*m,e.copy(i).addScaledVector(Rn,a).addScaledVector(bn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ei=class{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),rr.subVectors(this.max,ls),Nn.subVectors(t.a,ls),wn.subVectors(t.b,ls),Cn.subVectors(t.c,ls),Hi.subVectors(wn,Nn),Vi.subVectors(Cn,wn),on.subVectors(Nn,Cn);let e=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-on.z,on.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,on.z,0,-on.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-on.y,on.x,0];return!go(e,Nn,wn,Cn,rr)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Nn,wn,Cn,rr))?!1:(ar.crossVectors(Hi,Vi),e=[ar.x,ar.y,ar.z],go(e,Nn,wn,Cn,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new _,new _,new _,new _,new _,new _,new _,new _],ci=new _,sr=new Ei,Nn=new _,wn=new _,Cn=new _,Hi=new _,Vi=new _,on=new _,ls=new _,rr=new _,ar=new _,ln=new _;function go(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ln.fromArray(n,r);let o=s.x*Math.abs(ln.x)+s.y*Math.abs(ln.y)+s.z*Math.abs(ln.z),c=t.dot(ln),l=e.dot(ln),h=i.dot(ln);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ve=new _,or=new qt,Gu=0,He=class extends xi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=t!==void 0?rl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_u(t,this.array)}};var Is=class extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Es=class extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ke=class extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xu=new Ei,cs=new _,Mo=new _,_i=class{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Xu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(cs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Mo)),this.expandByPoint(cs.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qu=0,ti=new ue,xo=new Le,Ln=new _,Je=new Ei,us=new Ei,Ne=new _,ni=class n extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?Es:Is)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(Je.min,us.min),Je.expandByPoint(Ne),Ne.addVectors(Je.max,us.max),Je.expandByPoint(Ne)):(Je.expandByPoint(us.min),Je.expandByPoint(us.max))}Je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(Ln.fromBufferAttribute(t,l),Ne.add(Ln)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new He(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let z=0;z<i.count;z++)o[z]=new _,c[z]=new _;let h=new _,f=new _,u=new _,d=new qt,g=new qt,E=new qt,p=new _,m=new _;function T(z,C,L){l[z]=l[C]=l[L]=1,h.fromBufferAttribute(i,z),f.fromBufferAttribute(i,C),u.fromBufferAttribute(i,L),d.fromBufferAttribute(r,z),g.fromBufferAttribute(r,C),E.fromBufferAttribute(r,L),f.sub(h),u.sub(h),g.sub(d),E.sub(d);let B=1/(g.x*E.y-E.x*g.y);isFinite(B)&&(p.copy(f).multiplyScalar(E.y).addScaledVector(u,-g.y).multiplyScalar(B),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-E.x).multiplyScalar(B),o[z].add(p),o[C].add(p),o[L].add(p),c[z].add(m),c[C].add(m),c[L].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let z=0,C=R.length;z<C;++z){let L=R[z],B=L.start,F=L.count;for(let w=B,H=B+F;w<H;w+=3)T(t.getX(w+0),t.getX(w+1),t.getX(w+2))}let y=new _,b=new _,A=new _,M=new _;function S(z){A.fromBufferAttribute(s,z),M.copy(A);let C=o[z];y.copy(C),y.sub(A.multiplyScalar(A.dot(C))).normalize(),b.crossVectors(M,C);let B=b.dot(c[z])<0?-1:1;a.setXYZW(z,y.x,y.y,y.z,B)}for(let z=0,C=i.count;z<C;++z)l[z]&&S(z);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new _,r=new _,a=new _,o=new _,c=new _,l=new _,h=new _,f=new _;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),E=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,E),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let E=0,p=c.length;E<p;E++){o.isInterleavedBufferAttribute?d=c[E]*o.data.stride+o.offset:d=c[E]*h;for(let m=0;m<h;m++)u[g++]=l[d++]}return new He(u,h,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=new _,Qu=new _,Yu=new kt,ui=class{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Io.subVectors(i,e).cross(Qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zu=0,yi=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Jn,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Fo,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Bn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ci=new _,Eo=new _,lr=new _,cr=new _,ys=class{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Eo.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(Eo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=cr.dot(this.direction),c=-cr.dot(lr),l=cr.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let E=1/h;f*=E,u*=E,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Eo).addScaledVector(lr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Ci.subVectors(t.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,E=e.y-a.y,p=e.z-a.z,m=i.x-a.x,T=i.y-a.y,R=i.z-a.z,y=Math.abs(c),b=Math.abs(l),A=Math.abs(h),M,S,z,C,L,B,F,w,H,Q,O,tt;if(y>=b&&y>=A?(z=c,B=f,H=g,tt=m,c>=0?(M=l,S=h,C=u,L=d,F=E,w=p,Q=T,O=R):(M=h,S=l,C=d,L=u,F=p,w=E,Q=R,O=T)):b>=A?(z=l,B=u,H=E,tt=T,l>=0?(M=h,S=c,C=d,L=f,F=p,w=g,Q=R,O=m):(M=c,S=h,C=f,L=d,F=g,w=p,Q=m,O=R)):(z=h,B=d,H=p,tt=R,h>=0?(M=c,S=l,C=f,L=u,F=g,w=E,Q=m,O=T):(M=l,S=c,C=u,L=f,F=E,w=g,Q=T,O=m)),z===0)return null;let V=M/z,G=S/z,$=1/z,ft=C-V*B,_t=L-G*B,k=F-V*H,ut=w-G*H,vt=Q-V*tt,Dt=O-G*tt,gt=vt*ut-Dt*k,ct=ft*Dt-_t*vt,Jt=k*_t-ut*ft;if(s){if(gt<0||ct<0||Jt<0)return null}else if((gt<0||ct<0||Jt<0)&&(gt>0||ct>0||Jt>0))return null;let at=gt+ct+Jt;if(at===0)return null;let At=$*(gt*B+ct*H+Jt*tt);return(at>0?At<0:At>0)?null:this.at(At/at,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xi=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fl=new ue,cn=new ys,ur=new _i,Hl=new _,hr=new _,dr=new _,fr=new _,yo=new _,pr=new _,Vl=new _,mr=new _,fe=class extends Le{constructor(t=new ni,e=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(yo.fromBufferAttribute(f,t),a?pr.addScaledVector(yo,h):pr.addScaledVector(yo.sub(e),h))}e.add(pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),cn.copy(t.ray).recast(t.near),!(ur.containsPoint(cn.origin)===!1&&(cn.intersectSphere(ur,Hl)===null||cn.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(Fl.copy(r).invert(),cn.copy(t.ray).applyMatrix4(Fl),!(i.boundingBox!==null&&cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){let p=u[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),R=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=T,b=R;y<b;y+=3){let A=o.getX(y),M=o.getX(y+1),S=o.getX(y+2);s=gr(this,m,t,i,l,h,f,A,M,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),E=Math.min(o.count,d.start+d.count);for(let p=g,m=E;p<m;p+=3){let T=o.getX(p),R=o.getX(p+1),y=o.getX(p+2);s=gr(this,a,t,i,l,h,f,T,R,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){let p=u[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),R=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=T,b=R;y<b;y+=3){let A=y,M=y+1,S=y+2;s=gr(this,m,t,i,l,h,f,A,M,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),E=Math.min(c.count,d.start+d.count);for(let p=g,m=E;p<m;p+=3){let T=p,R=p+1,y=p+2;s=gr(this,a,t,i,l,h,f,T,R,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ju(n,t,e,i,s,r,a,o){let c;if(t.side===_e?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===$i,o),c===null)return null;mr.copy(o),mr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(mr);return l<e.near||l>e.far?null:{distance:l,point:mr.clone(),object:n}}function gr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,hr),n.getVertexPosition(c,dr),n.getVertexPosition(l,fr);let h=Ju(n,t,e,i,hr,dr,fr,Vl);if(h){let f=new _;Gi.getBarycoord(Vl,hr,dr,fr,f),s&&(h.uv=Gi.getInterpolatedAttribute(s,o,c,l,f,new qt)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,o,c,l,f,new qt)),a&&(h.normal=Gi.getInterpolatedAttribute(a,o,c,l,f,new _),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new _,materialIndex:0};Gi.getNormal(hr,dr,fr,u.normal),h.face=u,h.barycoord=f}return h}var As=class extends je{constructor(t=null,e=1,i=1,s,r,a,o,c,l=we,h=we,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends He{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Dn=new ue,Wl=new ue,Mr=[],Gl=new Ei,Ku=new ue,hs=new fe,ds=new _i,Ts=class extends fe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ku)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),Gl.copy(t.boundingBox).applyMatrix4(Dn),this.boundingBox.union(Gl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),ds.copy(t.boundingSphere).applyMatrix4(Dn),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(i),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dn),Wl.multiplyMatrices(i,Dn),hs.matrixWorld=Wl,hs.raycast(t,Mr);for(let a=0,o=Mr.length;a<o;a++){let c=Mr[a];c.instanceId=r,c.object=this,e.push(c)}Mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(s*this.count),s,this.count,da,ri));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},un=new _i,$u=new qt(.5,.5),xr=new _,qi=class{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],E=r[9],p=r[10],m=r[11],T=r[12],R=r[13],y=r[14],b=r[15];if(s[0].setComponents(l-a,d-h,m-g,b-T).normalize(),s[1].setComponents(l+a,d+h,m+g,b+T).normalize(),s[2].setComponents(l+o,d+f,m+E,b+R).normalize(),s[3].setComponents(l-o,d-f,m-E,b-R).normalize(),i)s[4].setComponents(c,u,p,y).normalize(),s[5].setComponents(l-c,d-u,m-p,b-y).normalize();else if(s[4].setComponents(l-c,d-u,m-p,b-y).normalize(),e===ii)s[5].setComponents(l+c,d+u,m+p,b+y).normalize();else if(e===kn)s[5].setComponents(c,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(t){un.center.set(0,0,0);let e=$u.distanceTo(t.center);return un.radius=.7071067811865476+e,un.applyMatrix4(t.matrixWorld),this.intersectsSphere(un)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xl=new ue,kr=class n{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new qi),i[s].setFromProjectionMatrix(Xl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new qi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Gn=class extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fr=new _,Hr=new _,ql=new ue,fs=new ys,Ir=new _i,Ao=new _,Ql=new _,Vr=class extends Le{constructor(t=new ni,e=new Gn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Fr.fromBufferAttribute(e,s-1),Hr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Fr.distanceTo(Hr);t.setAttribute("lineDistance",new Ke(i,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;ql.copy(s).invert(),fs.copy(t.ray).applyMatrix4(ql);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let E=d,p=g-1;E<p;E+=l){let m=h.getX(E),T=h.getX(E+1),R=Er(this,t,fs,c,m,T,E);R&&e.push(R)}if(this.isLineLoop){let E=h.getX(g-1),p=h.getX(d),m=Er(this,t,fs,c,E,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let E=d,p=g-1;E<p;E+=l){let m=Er(this,t,fs,c,E,E+1,E);m&&e.push(m)}if(this.isLineLoop){let E=Er(this,t,fs,c,g-1,d,g-1);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Er(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Fr.fromBufferAttribute(o,s),Hr.fromBufferAttribute(o,r),e.distanceSqToSegment(Fr,Hr,Ao,Ql)>i)return;Ao.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ao);if(!(l<t.near||l>t.far))return{distance:l,point:Ql.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ss=class extends Vr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Rs=class extends je{constructor(t=[],e=xn,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dn=class extends je{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zi=class extends je{constructor(t,e,i=fi,s,r,a,o=we,c=we,l,h=Di,f=1){if(h!==Di&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},bs=class extends zi{constructor(t,e=fi,i=xn,s,r,a=we,o=we,c,l=Di){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ns=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qi=class n extends ni{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(f,2));function g(E,p,m,T,R,y,b,A,M,S,z){let C=y/M,L=b/S,B=y/2,F=b/2,w=A/2,H=M+1,Q=S+1,O=0,tt=0,V=new _;for(let G=0;G<Q;G++){let $=G*L-F;for(let ft=0;ft<H;ft++){let _t=ft*C-B;V[E]=_t*T,V[p]=$*R,V[m]=w,l.push(V.x,V.y,V.z),V[E]=0,V[p]=0,V[m]=A>0?1:-1,h.push(V.x,V.y,V.z),f.push(ft/M),f.push(1-G/S),O+=1}}for(let G=0;G<S;G++)for(let $=0;$<M;$++){let ft=u+$+H*G,_t=u+$+H*(G+1),k=u+($+1)+H*(G+1),ut=u+($+1)+H*G;c.push(ft,_t,ut),c.push(_t,k,ut),tt+=6}o.addGroup(d,tt,z),d+=tt,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new qt:new _);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new _,s=[],r=[],a=[],o=new _,c=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new _)}r[0]=new _,a[0]=new _;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Zt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Zt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function al(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Yl=new _,Zl=new _,vo=new al,To=new al,So=new al,ws=class extends fn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new _){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Zl.subVectors(s[0],s[1]).add(s[0]),l=Zl);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),E=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);E<1e-4&&(E=1),g<1e-4&&(g=E),p<1e-4&&(p=E),vo.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,E,p),To.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,E,p),So.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,E,p)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),To.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),So.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(vo.calc(c),To.calc(c),So.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new _().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function th(n,t){let e=1-n;return e*e*e*t}function eh(n,t){let e=1-n;return 3*e*e*n*t}function ih(n,t){return 3*(1-n)*n*n*t}function nh(n,t){return n*n*n*t}function Ro(n,t,e,i,s){return th(n,t)+eh(n,e)+ih(n,i)+nh(n,s)}var Xn=class extends fn{constructor(t=new _,e=new _,i=new _,s=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ro(t,s.x,r.x,a.x,o.x),Ro(t,s.y,r.y,a.y,o.y),Ro(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}};var si=class n extends ni{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],g=[],E=[],p=[];for(let m=0;m<h;m++){let T=m*u-a;for(let R=0;R<l;R++){let y=R*f-r;g.push(y,-T,0),E.push(0,0,1),p.push(R/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<o;T++){let R=T+l*m,y=T+l*(m+1),b=T+1+l*(m+1),A=T+1+l*m;d.push(R,y,A),d.push(y,b,A)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(E,3)),this.setAttribute("uv",new Ke(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function En(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Jl(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Jl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ke(n){let t={};for(let e=0;e<n.length;e++){let i=En(n[e]);for(let s in i)t[s]=i[s]}return t}function Jl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sh(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ol(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Vc={clone:En,merge:ke},rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=En(t.uniforms),this.uniformsGroups=sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new _().fromArray(s.value);break;case"v4":this.uniforms[i].value=new xe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ue().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wr=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cs=class extends pn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ls=class extends yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=ra,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gr=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xr=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pn(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function yr(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Yi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Co:r=t,o=2*e-i;break;case Lo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Co:a=t,c=2*i-e;break;case Lo:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),E=g*g,p=E*g,m=-u*p+2*u*E-u*g,T=(1+u)*p+(-1.5-2*u)*E+(-.5+u)*g+1,R=(-1-d)*p+(1.5+d)*E+.5*g,y=d*p-d*E;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+T*a[l+b]+R*a[c+b]+y*a[f+b];return r}},Qr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},Yr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zr=class extends Yi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-e)/(s-e),E=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*E+a[c+p]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let E=a[l+g],p=a[c+g],m=d*u+g*2,T=f[m],R=f[m+1],y=t*u+g*2,b=h[y],A=h[y+1],M=lh(i,e,T,b,s);r[g]=Wc(M,E,R,A,p)}return r}};function Wc(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function oh(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function lh(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Wc(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=oh(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var $e=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pn(e,this.TimeBufferType),this.values=Pn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pn(t.times,Array),values:Pn(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),yr(t.settings)&&(i.settings={inTangents:Pn(t.settings.inTangents,Array),outTangents:Pn(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ps:e=this.InterpolantFactoryMethodDiscrete;break;case zr:e=this.InterpolantFactoryMethodLinear;break;case Tr:e=this.InterpolantFactoryMethodSmooth;break;case No:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Tr;case this.InterpolantFactoryMethodBezier:return No}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;yr(this.settings)&&(Kl(this.settings.inTangents,t),Kl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;yr(this.settings)&&($l(this.settings.inTangents,t),$l(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Bt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Bt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Lu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let E=e[f+g];if(E!==e[u+g]||E!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,yr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kl(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function $l(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=zr;var Zi=class extends $e{constructor(t,e,i){super(t,e,i)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ps;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Jr.prototype.ValueTypeName="color";var Kr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Kr.prototype.ValueTypeName="number";var $r=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Ge.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ds=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends $e{constructor(t,e,i){super(t,e,i)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ps;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};ta.prototype.ValueTypeName="vector";var Rr={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(tc(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!tc(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function tc(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ea=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gc=new ea,qn=class{constructor(t){this.manager=t!==void 0?t:Gc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var _n=new WeakMap,ia=class extends qn{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Rr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=_n.get(a);f===void 0&&(f=[],_n.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=Fn("img");function c(){h(),e&&e(this);let f=_n.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}_n.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),Rr.remove(`image:${t}`);let u=_n.get(this)||[];for(let d=0;d<u.length;d++){let g=u[d];g.onError&&g.onError(f)}_n.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Rr.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Ps=class extends qn{constructor(t){super(t)}load(t,e,i,s){let r=new je,a=new ia(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},_s=class extends Le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var bo=new ue,ec=new _,ic=new _,zs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(ec),ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ic),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(bo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===kn||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ar=new _,vr=new Ge,Mi=new _,mn=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ar,vr,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,vr,Mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ar,vr,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,vr,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new _,nc=new qt,sc=new qt,We=class extends mn{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,nc,sc),e.subVectors(sc,nc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Do=class extends zs{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}},Os=class extends _s{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Do}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ki=class extends mn{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Po=class extends zs{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qn=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Po}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zn=-90,On=1,Yn=class extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(zn,On,t,e);s.layers=this.layers,this.add(s);let r=new We(zn,On,t,e);r.layers=this.layers,this.add(r);let a=new We(zn,On,t,e);a.layers=this.layers,this.add(a);let o=new We(zn,On,t,e);o.layers=this.layers,this.add(o);let c=new We(zn,On,t,e);c.layers=this.layers,this.add(c);let l=new We(zn,On,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===kn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=E,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},na=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ll="\\[\\]\\.:\\/",ch=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",uh="[^"+ll.replace("\\.","")+"]",hh=/((?:WC+[\/:])*)/.source.replace("WC",cl),dh=/(WCOD+)?/.source.replace("WCOD",uh),fh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),ph=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),mh=new RegExp("^"+hh+dh+fh+ph+"$"),gh=["material","materials","bones","map"],_o=class{constructor(t,e,i){let s=i||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ge=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ch,"")}static parseTrackName(t){let e=mh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);gh.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=_o;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tg=new Float32Array(1);var zo=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function ul(n,t,e,i){let s=Mh(i);switch(e){case Ko:return n*t;case da:return n*t/s.components*s.byteLength;case fa:return n*t/s.components*s.byteLength;case tn:return n*t*2/s.components*s.byteLength;case pa:return n*t*2/s.components*s.byteLength;case $o:return n*t*3/s.components*s.byteLength;case mi:return n*t*4/s.components*s.byteLength;case ma:return n*t*4/s.components*s.byteLength;case Fs:case Hs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Ws:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ma:case Ia:return Math.max(n,16)*Math.max(t,8)/4;case ga:case xa:return Math.max(n,8)*Math.max(t,8)/2;case Ea:case ya:case va:case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Aa:case Gs:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ka:case Fa:case Ha:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Va:case Wa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xs:case Ga:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mh(n){switch(n){case qe:case Qo:return{byteLength:1,components:1};case $n:case Yo:case pi:return{byteLength:2,components:1};case ua:case ha:return{byteLength:2,components:4};case fi:case ca:case ri:return{byteLength:4,components:1};case Zo:case Jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function fu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ih(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],E=f[d];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,f[u]=E)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let E=f[d];n.bufferSubData(l,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yh=`#ifdef USE_ALPHAHASH
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
#endif`,Ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
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
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nh=`#ifdef USE_BATCHING
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
#endif`,wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
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
#endif`,_h=`#ifdef USE_BUMPMAP
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vh=`#define PI 3.141592653589793
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
} // validated`,Wh=`vec3 transformedNormal = objectNormal;
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
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
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
}`,od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,Md=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,xd=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,Ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wd=`#if defined( USE_POINTS_UV )
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
#endif`,Cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
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
#endif`,Vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rf=`float getShadowMask() {
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
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#ifdef USE_TRANSMISSION
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,If=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`uniform sampler2D t2D;
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`#include <common>
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
}`,bf=`#if DEPTH_PACKING == 3200
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
}`,Nf=`#define DISTANCE
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
}`,wf=`#define DISTANCE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`uniform float scale;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,_f=`#include <common>
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
}`,zf=`uniform vec3 diffuse;
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
}`,Of=`#define LAMBERT
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
}`,Uf=`#define LAMBERT
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
}`,Bf=`#define MATCAP
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
}`,jf=`#define MATCAP
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
}`,kf=`#define NORMAL
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
}`,Ff=`#define NORMAL
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
}`,Hf=`#define PHONG
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
}`,Vf=`#define PHONG
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
}`,Wf=`#define STANDARD
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
}`,Gf=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,Xf=`#define TOON
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
}`,qf=`#define TOON
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
}`,Qf=`uniform float size;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Jf=`uniform vec3 color;
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
}`,Kf=`uniform float rotation;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Eh,alphahash_pars_fragment:yh,alphamap_fragment:Ah,alphamap_pars_fragment:vh,alphatest_fragment:Th,alphatest_pars_fragment:Sh,aomap_fragment:Rh,aomap_pars_fragment:bh,batching_pars_vertex:Nh,batching_vertex:wh,begin_vertex:Ch,beginnormal_vertex:Lh,bsdfs:Dh,iridescence_fragment:Ph,bumpmap_pars_fragment:_h,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Bh,color_fragment:jh,color_pars_fragment:kh,color_pars_vertex:Fh,color_vertex:Hh,common:Vh,defaultnormal_vertex:Wh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Xh,emissivemap_fragment:qh,emissivemap_pars_fragment:Qh,colorspace_fragment:Yh,colorspace_pars_fragment:Zh,envmap_fragment:Jh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:$h,envmap_pars_vertex:td,envmap_physical_pars_fragment:hd,envmap_vertex:ed,fog_vertex:id,fog_pars_vertex:nd,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:ud,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:Md,lights_fragment_begin:xd,lights_fragment_maps:Id,lights_fragment_end:Ed,lightprobes_pars_fragment:yd,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Sd,map_fragment:Rd,map_pars_fragment:bd,map_particle_fragment:Nd,map_particle_pars_fragment:wd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Dd,morphcolor_vertex:Pd,morphnormal_vertex:_d,morphtarget_pars_vertex:zd,morphtarget_vertex:Od,normal_fragment_begin:Ud,normal_fragment_maps:Bd,normal_pars_fragment:jd,normal_pars_vertex:kd,normal_vertex:Fd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Qd,premultiplied_alpha_fragment:Yd,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:Kd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:uf,specularmap_pars_fragment:hf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:Mf,uv_vertex:xf,worldpos_vertex:If,background_vert:Ef,background_frag:yf,backgroundCube_vert:Af,backgroundCube_frag:vf,cube_vert:Tf,cube_frag:Sf,depth_vert:Rf,depth_frag:bf,distance_vert:Nf,distance_frag:wf,equirect_vert:Cf,equirect_frag:Lf,linedashed_vert:Df,linedashed_frag:Pf,meshbasic_vert:_f,meshbasic_frag:zf,meshlambert_vert:Of,meshlambert_frag:Uf,meshmatcap_vert:Bf,meshmatcap_frag:jf,meshnormal_vert:kf,meshnormal_frag:Ff,meshphong_vert:Hf,meshphong_frag:Vf,meshphysical_vert:Wf,meshphysical_frag:Gf,meshtoon_vert:Xf,meshtoon_frag:qf,points_vert:Qf,points_frag:Yf,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:Kf,sprite_frag:$f},Tt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ti={basic:{uniforms:ke([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:ke([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:ke([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:ke([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:ke([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:ke([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:ke([Tt.points,Tt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:ke([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:ke([Tt.common,Tt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:ke([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:ke([Tt.sprite,Tt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:ke([Tt.common,Tt.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:ke([Tt.lights,Tt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Ti.physical={uniforms:ke([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var qa={r:0,b:0,g:0},tp=new ue,pu=new kt;pu.set(-1,0,0,0,1,0,0,0,1);function ep(n,t,e,i,s,r){let a=new Ht(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let y=T.backgroundBlurriness>0;R=t.get(R,y)}return R}function g(T){let R=!1,y=d(T);y===null?p(a,o):y&&y.isColor&&(p(y,1),R=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(T,R){let y=d(R);y&&y.isCubeTexture?(l===void 0&&(l=new fe(new Qi(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:En(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:_e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pu),l.material.toneMapped=te.getTransfer(y.colorSpace)!==le,(h!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new fe(new si(2,2),new Ve({name:"BackgroundMaterial",uniforms:En(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=te.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,R){T.getRGB(qa,ol(n)),e.buffers.color.setClear(qa.r,qa.g,qa.b,R,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,R=1){a.set(T),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:g,addToRenderList:E,dispose:m}}function ip(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,B,F,w,H){let Q=!1,O=f(L,w,F,B);r!==O&&(r=O,l(r.object)),Q=d(L,w,F,H),Q&&g(L,w,F,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,y(L,B,F,w),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function f(L,B,F,w){let H=w.wireframe===!0,Q=i[B.id];Q===void 0&&(Q={},i[B.id]=Q);let O=L.isInstancedMesh===!0?L.id:0,tt=Q[O];tt===void 0&&(tt={},Q[O]=tt);let V=tt[F.id];V===void 0&&(V={},tt[F.id]=V);let G=V[H];return G===void 0&&(G=u(c()),V[H]=G),G}function u(L){let B=[],F=[],w=[];for(let H=0;H<e;H++)B[H]=0,F[H]=0,w[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:w,object:L,attributes:{},index:null}}function d(L,B,F,w){let H=r.attributes,Q=B.attributes,O=0,tt=F.getAttributes();for(let V in tt)if(tt[V].location>=0){let $=H[V],ft=Q[V];if(ft===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),$===void 0||$.attribute!==ft||ft&&$.data!==ft.data)return!0;O++}return r.attributesNum!==O||r.index!==w}function g(L,B,F,w){let H={},Q=B.attributes,O=0,tt=F.getAttributes();for(let V in tt)if(tt[V].location>=0){let $=Q[V];$===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let ft={};ft.attribute=$,$&&$.data&&(ft.data=$.data),H[V]=ft,O++}r.attributes=H,r.attributesNum=O,r.index=w}function E(){let L=r.newAttributes;for(let B=0,F=L.length;B<F;B++)L[B]=0}function p(L){m(L,0)}function m(L,B){let F=r.newAttributes,w=r.enabledAttributes,H=r.attributeDivisors;F[L]=1,w[L]===0&&(n.enableVertexAttribArray(L),w[L]=1),H[L]!==B&&(n.vertexAttribDivisor(L,B),H[L]=B)}function T(){let L=r.newAttributes,B=r.enabledAttributes;for(let F=0,w=B.length;F<w;F++)B[F]!==L[F]&&(n.disableVertexAttribArray(F),B[F]=0)}function R(L,B,F,w,H,Q,O){O===!0?n.vertexAttribIPointer(L,B,F,H,Q):n.vertexAttribPointer(L,B,F,w,H,Q)}function y(L,B,F,w){E();let H=w.attributes,Q=F.getAttributes(),O=B.defaultAttributeValues;for(let tt in Q){let V=Q[tt];if(V.location>=0){let G=H[tt];if(G===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let $=G.normalized,ft=G.itemSize,_t=t.get(G);if(_t===void 0)continue;let k=_t.buffer,ut=_t.type,vt=_t.bytesPerElement,Dt=ut===n.INT||ut===n.UNSIGNED_INT||G.gpuType===ca;if(G.isInterleavedBufferAttribute){let gt=G.data,ct=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Jt=G.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)m(V.location+at,gt.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let at=0;at<V.locationSize;at++)p(V.location+at);n.bindBuffer(n.ARRAY_BUFFER,k);for(let at=0;at<V.locationSize;at++)R(V.location+at,ft/V.locationSize,ut,$,ct*vt,(Jt+ft/V.locationSize*at)*vt,Dt)}else{if(G.isInstancedBufferAttribute){for(let gt=0;gt<V.locationSize;gt++)m(V.location+gt,G.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let gt=0;gt<V.locationSize;gt++)p(V.location+gt);n.bindBuffer(n.ARRAY_BUFFER,k);for(let gt=0;gt<V.locationSize;gt++)R(V.location+gt,ft/V.locationSize,ut,$,ft*vt,ft/V.locationSize*gt*vt,Dt)}}else if(O!==void 0){let $=O[tt];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(V.location,$);break;case 3:n.vertexAttrib3fv(V.location,$);break;case 4:n.vertexAttrib4fv(V.location,$);break;default:n.vertexAttrib1fv(V.location,$)}}}}T()}function b(){z();for(let L in i){let B=i[L];for(let F in B){let w=B[F];for(let H in w){let Q=w[H];for(let O in Q)h(Q[O].object),delete Q[O];delete w[H]}}delete i[L]}}function A(L){if(i[L.id]===void 0)return;let B=i[L.id];for(let F in B){let w=B[F];for(let H in w){let Q=w[H];for(let O in Q)h(Q[O].object),delete Q[O];delete w[H]}}delete i[L.id]}function M(L){for(let B in i){let F=i[B];for(let w in F){let H=F[w];if(H[L.id]===void 0)continue;let Q=H[L.id];for(let O in Q)h(Q[O].object),delete Q[O];delete H[L.id]}}}function S(L){for(let B in i){let F=i[B],w=L.isInstancedMesh===!0?L.id:0,H=F[w];if(H!==void 0){for(let Q in H){let O=H[Q];for(let tt in O)h(O[tt].object),delete O[tt];delete H[Q]}delete F[w],Object.keys(F).length===0&&delete i[B]}}}function z(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:M,initAttributes:E,enableAttribute:p,disableUnusedAttributes:T}}function np(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==mi&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let S=M===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==qe&&M!==ri&&!S&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:y,maxSamples:b,samples:A}}function rp(n){let t=this,e=null,i=0,s=!1,r=!1,a=new ui,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,E=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let T=r?0:i,R=T*4,y=m.clippingState||null;c.value=y,y=h(g,u,R,d);for(let b=0;b!==R;++b)y[b]=e[b];m.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){let E=f!==null?f.length:0,p=null;if(E!==0){if(p=c.value,g!==!0||p===null){let m=d+E*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,y=d;R!==E;++R,y+=4)a.copy(f[R]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,p}}var Js=class extends Ce{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Rs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qi(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:En(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_e,blending:gn});r.uniforms.tEquirect.value=e;let a=new fe(s,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=Pe),new Yn(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Xc=256,ap=3,op=20,mu=256,gu=16,lp=3,cp=new _,up=new Ht,es=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yn(1,10,null),this._boxMesh=new fe(new Qi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=cp}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,E=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,E===null&&(t.background=c.getClearColor(up));let p=new Yn(i,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=g,t.background=E,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Xc,Fc(t))}_fromTexture(t,e){t.mapping===xn||t.mapping===Kn?this._setSize(t.image.length===0?Xc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=qc(t,!1,!1),i=Math.log2(t)-ap;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=qc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===xn||t.mapping===Kn?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=hp(),this._integrationMaterial=dp());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/gu);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-lp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(mu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=fp());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function qc(n,t,e){return new Js(n,{minFilter:di,generateMipmaps:t,type:pi,colorSpace:ms,depthBuffer:e})}function $s(n,t,e){return new Ve({name:n,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:_e,blending:gn,depthTest:!1,depthWrite:!1})}function hp(){return $s("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function dp(){return $s("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fp(){return $s("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${op}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Qc(){return $s("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Yc(){return $s("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function pp(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===aa||d===oa)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let E=new Js(g.height);return E.fromEquirectangularTexture(n,u),t.set(u,E),u.addEventListener("dispose",l),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===aa||d===oa,E=d===xn||d===Kn;if(g||E){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new es(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let T=u.image;return g&&T&&T.height>0||E&&T&&c(T)?(i===null&&(i=new es(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===aa?u.mapping=xn:d===oa&&(u.mapping=Kn),u}function c(u){let d=0,g=6;for(let E=0;E<g;E++)u[E]!==void 0&&d++;return d===g}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function mp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&hn("WebGLRenderer: "+i+" extension not supported."),s}}}function gp(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let E=r.get(g);E&&(t.remove(E),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,E){return s[E.id]!==void 0||(E.addEventListener("dispose",o),s[E.id]=new WeakRef(E),a.register(E,E.id,E),e.memory.geometries++),E}function h(g){let E=g.attributes;for(let p in E)t.update(E[p],n.ARRAY_BUFFER)}function f(g){let E=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let T=E!==null?E.array.length:p.array.length/3-1,R=p.count>=65535?Es:Is,y=new R(Math.ceil(T/3)*6,1),b=y.array;if(E!==null){let M=E.array;m=E.version;for(let S=0,z=0;S<T;S+=3){let C=M[S+0],L=M[S+1],B=M[S+2];b[z++]=C,b[z++]=L,b[z++]=L,b[z++]=B,b[z++]=B,b[z++]=C}}else{m=p.version;for(let M=0,S=0;M<T;M+=3){let z=M+0,C=M+1,L=M+2;b[S++]=z,b[S++]=C,b[S++]=C,b[S++]=L,b[S++]=L,b[S++]=z}}y.version=m;let A=r.get(g);A&&t.remove(A),r.set(g,y)}function u(g){let E=r.get(g);if(E){let p=g.index;p!==null&&E.version<p.version&&f(g)}else f(g);return r.get(g)}function d(){for(let g in s){let E=s[g].deref();E!==void 0&&c(E)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function Mp(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let E=0;for(let p=0;p<d;p++)E+=u[p];e.update(E,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function xp(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ip(n,t,e){let i=new WeakMap,s=new xe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let z=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",z)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],R=0;d===!0&&(R=1),g===!0&&(R=2),E===!0&&(R=3);let y=o.attributes.position.count*R,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*b*4*f),M=new Ms(A,y,b,f);M.type=ri,M.needsUpdate=!0;let S=R*4;for(let C=0;C<f;C++){let L=p[C],B=m[C],F=T[C],w=y*b*4*C;for(let H=0;H<L.count;H++){let Q=H*S;d===!0&&(s.fromBufferAttribute(L,H),A[w+Q+0]=s.x,A[w+Q+1]=s.y,A[w+Q+2]=s.z,A[w+Q+3]=0),g===!0&&(s.fromBufferAttribute(B,H),A[w+Q+4]=s.x,A[w+Q+5]=s.y,A[w+Q+6]=s.z,A[w+Q+7]=0),E===!0&&(s.fromBufferAttribute(F,H),A[w+Q+8]=s.x,A[w+Q+9]=s.y,A[w+Q+10]=s.z,A[w+Q+11]=F.itemSize===4?s.w:1)}}u={count:f,texture:M,size:new qt(y,b)},i.set(o,u),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let E=0;E<l.length;E++)d+=l[E];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Ep(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var yp={[Ho]:"LINEAR_TONE_MAPPING",[Vo]:"REINHARD_TONE_MAPPING",[Wo]:"CINEON_TONE_MAPPING",[Bs]:"ACES_FILMIC_TONE_MAPPING",[Xo]:"AGX_TONE_MAPPING",[js]:"NEUTRAL_TONE_MAPPING",[Go]:"CUSTOM_TONE_MAPPING"};function Ap(n,t,e,i,s,r){let a=new Ce(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new ni;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let f=new Wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new fe(h,f),d=new Ki(-1,1,1,-1,0,1),g=null,E=null,p=!1,m,T=null,R=[],y=!1;this.setSize=function(b,A){a.setSize(b,A),o!==null&&o.setSize(b,A),c!==null&&c.setSize(b,A);for(let M=0;M<R.length;M++){let S=R[M];S.setSize&&S.setSize(b,A)}},this.setEffects=function(b){R=b,y=R.length>0&&R[0].isRenderPass===!0;let A=a.width,M=a.height;R.length>0&&o===null&&(o=new Ce(A,M,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Ce(A,M,{type:pi,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&R.some(z=>z.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new zi(A,M),r===!0&&(l.format=Oi,l.type=In)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let z=0;z<R.length;z++){let C=R[z];C.setSize&&C.setSize(A,M),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(b,A){if(p||b.toneMapping===Ai&&R.length===0)return!1;if(T=A,A!==null){let M=A.width,S=A.height;(a.width!==M||a.height!==S)&&this.setSize(M,S)}return y===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Ai,!0},this.hasRenderPass=function(){return y},this.end=function(b,A){b.toneMapping=m,p=!0;let M=a,S=o;for(let z=0;z<R.length;z++){let C=R[z];C.enabled!==!1&&(C.render(b,S,M,A),C.needsSwap!==!1&&(M=S,S=S===o?c:o))}if(g!==b.outputColorSpace||E!==b.toneMapping){g=b.outputColorSpace,E=b.toneMapping,f.defines={},te.getTransfer(g)===le&&(f.defines.SRGB_TRANSFER="");let z=yp[E];z&&(f.defines[z]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(T),b.render(u,d),T=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Mu=new je,xu=new zi(1,1),Iu=new bs(1),Eu=new Ms,yu=new jr,Au=new Rs,Zc=[],Jc=[],Kc=new Float32Array(16),$c=new Float32Array(9),tu=new Float32Array(4);function is(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ya(n,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function Sp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function Rp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function bp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Se(e,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),Re(e,i)}}function Np(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Se(e,i))return;$c.set(i),n.uniformMatrix3fv(this.addr,!1,$c),Re(e,i)}}function wp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Se(e,i))return;Kc.set(i),n.uniformMatrix4fv(this.addr,!1,Kc),Re(e,i)}}function Cp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Lp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function Dp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function Pp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function _p(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function Op(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function Up(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function Za(n){return n.version===0&&(n.compareFunction=il,n.needsUpdate=!0),n}function Bp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Za(xu):r=Mu,e.setTexture2D(t||r,s)}function jp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||yu,s)}function kp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Za(Iu):r=Au,e.setTextureCube(t||r,s)}function Fp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Eu,s)}function Hp(n){switch(n){case 5126:return vp;case 35664:return Tp;case 35665:return Sp;case 35666:return Rp;case 35674:return bp;case 35675:return Np;case 35676:return wp;case 5124:case 35670:return Cp;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Pp;case 5125:return _p;case 36294:return zp;case 36295:return Op;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Fp}}function Vp(n,t){n.uniform1fv(this.addr,t)}function Wp(n,t){let e=is(t,this.size,2);n.uniform2fv(this.addr,e)}function Gp(n,t){let e=is(t,this.size,3);n.uniform3fv(this.addr,e)}function Xp(n,t){let e=is(t,this.size,4);n.uniform4fv(this.addr,e)}function qp(n,t){let e=is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qp(n,t){let e=is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Yp(n,t){let e=is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zp(n,t){n.uniform1iv(this.addr,t)}function Jp(n,t){n.uniform2iv(this.addr,t)}function Kp(n,t){n.uniform3iv(this.addr,t)}function $p(n,t){n.uniform4iv(this.addr,t)}function tm(n,t){n.uniform1uiv(this.addr,t)}function em(n,t){n.uniform2uiv(this.addr,t)}function im(n,t){n.uniform3uiv(this.addr,t)}function nm(n,t){n.uniform4uiv(this.addr,t)}function sm(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Za(xu):a=Mu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function rm(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yu,r[a])}function am(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Za(Iu):a=Au;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function om(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Eu,r[a])}function lm(n){switch(n){case 5126:return Vp;case 35664:return Wp;case 35665:return Gp;case 35666:return Xp;case 35674:return qp;case 35675:return Qp;case 35676:return Yp;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return $p;case 5125:return tm;case 36294:return em;case 36295:return im;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}var fl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Hp(e.type)}},pl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}},ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},hl=/(\w+)(\])?(\[|\.)?/g;function eu(n,t){n.seq.push(t),n.map[t.id]=t}function cm(n,t,e){let i=n.name,s=i.length;for(hl.lastIndex=0;;){let r=hl.exec(i),a=hl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){eu(e,l===void 0?new fl(o,n,t):new pl(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new ml(o),eu(e,f)),e=f}}}var ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);cm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function iu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var um=37297,hm=0;function dm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var nu=new kt;function fm(n){te._getMatrix(nu,te.workingColorSpace,n);let t=`mat3( ${nu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case gs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function su(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dm(n.getShaderSource(t),o)}else return r}function pm(n,t){let e=fm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var mm={[Ho]:"Linear",[Vo]:"Reinhard",[Wo]:"Cineon",[Bs]:"ACESFilmic",[Xo]:"AgX",[js]:"Neutral",[Go]:"Custom"};function gm(n,t){let e=mm[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qa=new _;function Mm(){te.getLuminanceCoefficients(Qa);let n=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Im(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Em(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Zs(n){return n!==""}function ru(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function au(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(ym,Am)}function Am(n,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return gl(e)}var vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(n){return n.replace(vm,Tm)}function Tm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Sm={[Us]:"SHADOWMAP_TYPE_PCF",[Zn]:"SHADOWMAP_TYPE_VSM"};function Rm(n){return Sm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bm={[Kn]:"ENVMAP_MODE_REFRACTION"};function Nm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":bm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wm={[ra]:"ENVMAP_BLENDING_MULTIPLY",[Sc]:"ENVMAP_BLENDING_MIX",[Rc]:"ENVMAP_BLENDING_ADD"};function Cm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wm[n.combine]||"ENVMAP_BLENDING_NONE"}function Lm(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Rm(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Nm(e),f=Cm(e),u=xm(e),d=Im(r),g=s.createProgram(),E,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(E=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Zs).join(`
`),E.length>0&&(E+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(E=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,pm("linearToOutputTexel",e.outputColorSpace),Mm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),a=gl(a),a=ru(a,e),a=au(a,e),o=gl(o),o=ru(o,e),o=au(o,e),a=ou(a),o=ou(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,E=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,p=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=m+E+a,R=m+p+o,y=iu(s,s.VERTEX_SHADER,T),b=iu(s,s.FRAGMENT_SHADER,R);s.attachShader(g,y),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(C){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(y)||"",F=s.getShaderInfoLog(b)||"",w=L.trim(),H=B.trim(),Q=F.trim(),O=!0,tt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,y,b);else{let V=su(s,y,"vertex"),G=su(s,b,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+w+`
`+V+`
`+G)}else w!==""?zt("WebGLProgram: Program Info Log:",w):(H===""||Q==="")&&(tt=!1);tt&&(C.diagnostics={runnable:O,programLog:w,vertexShader:{log:H,prefix:E},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(y),s.deleteShader(b),M=new ts(s,g),S=Em(s,g)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(g,um)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=b,this}var Dm=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xl(t),e.set(t,i)),i}},xl=class{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}};function Pm(n){return n===tn||n===Gs||n===Xs}function _m(n,t,e,i,s,r){let a=new xs,o=new Ml,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,z,C,L,B){let F=C.fog,w=L.geometry,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?C.environment:null,Q=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,O=t.get(M.envMap||H,Q),tt=u[M.type],V=i.precision;M.precision!==null&&(V=i.getMaxPrecision(M.precision),V!==M.precision&&zt("WebGLProgram.getParameters:",M.precision,"not supported, using",V,"instead."));let G=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,$=G!==void 0?G.length:0,ft=0;w.morphAttributes.position!==void 0&&(ft=1),w.morphAttributes.normal!==void 0&&(ft=2),w.morphAttributes.color!==void 0&&(ft=3);let _t,k,ut,vt;if(tt){let yt=Ti[tt];_t=yt.vertexShader,k=yt.fragmentShader}else{_t=M.vertexShader,k=M.fragmentShader;let yt=o.getVertexShaderStage(M),re=o.getFragmentShaderStage(M);o.update(M,yt,re),ut=yt.id,vt=re.id}let Dt=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),ct=L.isInstancedMesh===!0,Jt=L.isBatchedMesh===!0,at=!!M.map,At=!!M.matcap,Et=!!O,pt=Et&&O.isPMREMTexture===!0,Ot=!!M.aoMap,Ut=!!M.lightMap,ee=!!M.bumpMap&&M.wireframe===!1,Gt=!!M.normalMap,Ee=!!M.displacementMap,jt=!!M.emissiveMap,Me=!!M.metalnessMap,ne=!!M.roughnessMap,ae=M.anisotropy>0,P=M.clearcoat>0,ce=M.diffuseRoughness>0,ie=M.dispersion>0,Mt=M.retroreflectivity>0,it=M.iridescence>0,Xt=M.sheen>0,mt=M.transmission>0,Rt=ae&&!!M.anisotropyMap,v=P&&!!M.clearcoatMap,x=P&&!!M.clearcoatNormalMap,U=P&&!!M.clearcoatRoughnessMap,et=ce&&!!M.diffuseRoughnessMap,Z=it&&!!M.iridescenceMap,st=it&&!!M.iridescenceThicknessMap,lt=Xt&&!!M.sheenColorMap,Y=Xt&&!!M.sheenRoughnessMap,J=!!M.specularMap,dt=!!M.specularColorMap,N=!!M.specularIntensityMap,K=mt&&!!M.transmissionMap,q=mt&&!!M.thicknessMap,ot=!!M.gradientMap,rt=!!M.alphaMap,ht=M.alphaTest>0,Nt=!!M.alphaHash,Ft=!!M.extensions,nt=Ai;M.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(nt=n.toneMapping);let wt=pt?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Vt={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:_t,fragmentShader:k,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:V,batching:Jt,batchingColor:Jt&&L._colorsTexture!==null,instancing:ct,instancingColor:ct&&L.instanceColor!==null,instancingMorph:ct&&L.morphTexture!==null,outputColorSpace:Dt===null?n.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:At,envMap:Et,envMapMode:Et&&O.mapping,envMapPMREM:pt,envMapMaxLod:pt?wt.length-1:null,envMapSize:pt?wt[0].width:null,aoMap:Ot,lightMap:Ut,bumpMap:ee,normalMap:Gt,displacementMap:Ee,emissiveMap:jt,normalMapObjectSpace:Gt&&M.normalMapType===wc,normalMapTangentSpace:Gt&&M.normalMapType===qs,packedNormalMap:Gt&&M.normalMapType===qs&&Pm(M.normalMap.format),metalnessMap:Me,roughnessMap:ne,anisotropy:ae,anisotropyMap:Rt,clearcoat:P,clearcoatMap:v,clearcoatNormalMap:x,clearcoatRoughnessMap:U,diffuseRoughness:ce,diffuseRoughnessMap:et,dispersion:ie,retroreflection:Mt,iridescence:it,iridescenceMap:Z,iridescenceThicknessMap:st,sheen:Xt,sheenColorMap:lt,sheenRoughnessMap:Y,specularMap:J,specularColorMap:dt,specularIntensityMap:N,transmission:mt,transmissionMap:K,thicknessMap:q,gradientMap:ot,opaque:M.transparent===!1&&M.blending===Jn&&M.alphaToCoverage===!1,alphaMap:rt,alphaTest:ht,alphaHash:Nt,combine:M.combine,mapUv:at&&d(M.map.channel),aoMapUv:Ot&&d(M.aoMap.channel),lightMapUv:Ut&&d(M.lightMap.channel),bumpMapUv:ee&&d(M.bumpMap.channel),normalMapUv:Gt&&d(M.normalMap.channel),displacementMapUv:Ee&&d(M.displacementMap.channel),emissiveMapUv:jt&&d(M.emissiveMap.channel),metalnessMapUv:Me&&d(M.metalnessMap.channel),roughnessMapUv:ne&&d(M.roughnessMap.channel),anisotropyMapUv:Rt&&d(M.anisotropyMap.channel),clearcoatMapUv:v&&d(M.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&d(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&d(M.diffuseRoughnessMap.channel),iridescenceMapUv:Z&&d(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&d(M.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&d(M.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(M.sheenRoughnessMap.channel),specularMapUv:J&&d(M.specularMap.channel),specularColorMapUv:dt&&d(M.specularColorMap.channel),specularIntensityMapUv:N&&d(M.specularIntensityMap.channel),transmissionMapUv:K&&d(M.transmissionMap.channel),thicknessMapUv:q&&d(M.thicknessMap.channel),alphaMapUv:rt&&d(M.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(Gt||ae),vertexNormals:!!w.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!w.attributes.uv&&(at||rt),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||w.attributes.normal===void 0&&Gt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ft,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.filter(yt=>yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===le,decodeVideoTextureEmissive:jt&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xe,flipSided:M.side===_e,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||Jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function E(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let z in M.defines)S.push(z),S.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(p(S,M),m(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function p(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapPMREM),M.push(S.envMapMaxLod),M.push(S.envMapSize),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.diffuseRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.numSunLights),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numSunLightShadows),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.numLightProbeGrids),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function m(M,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function T(M){let S=u[M.type],z;if(S){let C=Ti[S];z=Vc.clone(C.uniforms)}else z=M.uniforms;return z}function R(M,S){let z=h.get(S);return z!==void 0?++z.usedTimes:(z=new Lm(n,S,M,s),l.push(z),h.set(S,z)),z}function y(M){if(--M.usedTimes===0){let S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function b(M){o.remove(M)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:E,getUniforms:T,acquireProgram:R,releaseProgram:y,releaseShaderCache:b,programs:l,dispose:A}}function zm(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Om(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function uu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,E,p,m){let T=n[t];return T===void 0?(T={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:p,group:m},n[t]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=g,T.materialVariant=a(u),T.groupOrder=E,T.renderOrder=u.renderOrder,T.z=p,T.group=m),t++,T}function c(u,d,g,E,p,m,T){T.reversedDepth===!0&&(p=-p);let R=o(u,d,g,E,p,m);g.transmission>0?i.push(R):g.transparent===!0?s.push(R):e.push(R)}function l(u,d,g,E,p,m){let T=o(u,d,g,E,p,m);g.transmission>0?i.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,d){e.length>1&&e.sort(u||Om),i.length>1&&i.sort(d||cu),s.length>1&&s.sort(d||cu)}function f(){for(let u=t,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Um(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new uu,n.set(i,[a])):s>=r.length?(a=new uu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Bm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new _,color:new Ht};break;case"SpotLight":e={position:new _,direction:new _,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new _,halfWidth:new _,halfHeight:new _};break}return n[t.id]=e,e}}}function jm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var km=0;function Fm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Hm(n){let t=new Bm,e=jm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new _);let s=new _,r=new ue,a=new ue;function o(l){let h=0,f=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,g=0,E=0,p=0,m=0,T=0,R=0,y=0,b=0,A=0,M=0,S=0,z=0,C=0;l.sort(Fm);for(let B=0,F=l.length;B<F;B++){let w=l[B],H=w.color,Q=w.intensity,O=w.distance,tt=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===tn?tt=w.shadow.map.texture:tt=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=H.r*Q,f+=H.g*Q,u+=H.b*Q;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],Q);C++}else if(w.isSunLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let G=w.shadow,$=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[g]=$,i.sunShadowMap[g]=tt;let ft=G.getViewportCount();for(let _t=0;_t<ft;_t++)i.sunShadowMatrix[E+_t]=G.getMatrix(_t),i.sunShadowCascade[E+_t]=G._cascadeData[_t];E+=ft,g++}i.sun[d]=V,d++}else if(w.isDirectionalLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let G=w.shadow,$=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=tt,i.directionalShadowMatrix[p]=w.shadow.matrix,b++}i.directional[p]=V,p++}else if(w.isSpotLight){let V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(H).multiplyScalar(Q),V.distance=O,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[T]=V;let G=w.shadow;if(w.map&&(i.spotLightMap[S]=w.map,S++,G.updateMatrices(w),w.castShadow&&z++),i.spotLightMatrix[T]=G.matrix,w.castShadow){let $=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.spotShadow[T]=$,i.spotShadowMap[T]=tt,M++}T++}else if(w.isRectAreaLight){let V=t.get(w);V.color.copy(H).multiplyScalar(Q),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[R]=V,R++}else if(w.isPointLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){let G=w.shadow,$=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=tt,i.pointShadowMatrix[m]=w.shadow.matrix,A++}i.point[m]=V,m++}else if(w.isHemisphereLight){let V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(Q),V.groundColor.copy(w.groundColor).multiplyScalar(Q),i.hemi[y]=V,y++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let L=i.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==T||L.rectAreaLength!==R||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==A||L.numSpotShadows!==M||L.numSpotMaps!==S||L.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=p,i.spot.length=T,i.rectArea.length=R,i.point.length=m,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.spotLightMatrix.length=M+S-z,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=C,L.sunLength=d,L.directionalLength=p,L.pointLength=m,L.spotLength=T,L.rectAreaLength=R,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=A,L.numSpotShadows=M,L.numSpotMaps=S,L.numLightProbes=C,i.version=km++)}function c(l,h){let f=0,u=0,d=0,g=0,E=0,p=0,m=h.matrixWorldInverse;for(let T=0,R=l.length;T<R;T++){let y=l[T];if(y.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(y.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let b=i.rectArea[E];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),E++}else if(y.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function hu(n){let t=new Hm(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function c(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Vm(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new hu(n),t.set(s,[o])):r>=a.length?(o=new hu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
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
}`,Xm=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)],qm=[new _(0,-1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1),new _(0,-1,0),new _(0,-1,0)],du=new ue,Ys=new _,dl=new _;function Qm(n,t,e){let i=new qi,s=new qt,r=new qt,a=new xe,o=new Gr,c=new Xr,l={},h=e.maxTextureSize,f={[$i]:_e,[_e]:$i,[Xe]:Xe},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Wm,fragmentShader:Gm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ni;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new fe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let m=this.type;this.render=function(A,M,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===sa&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let z=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(gn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=m!==this.type;F&&M.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(H=>H.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,H=A.length;w<H;w++){let Q=A[w],O=Q.shadow;if(O===void 0){zt("WebGLShadowMap:",Q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let tt=O.getFrameExtents();s.multiply(tt),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,O.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Zn){if(Q.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ce(s.x,s.y,{format:tn,type:pi,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),O.map.texture.name=Q.name+".shadowMap",O.map.depthTexture=new zi(s.x,s.y,ri),O.map.depthTexture.name=Q.name+".shadowMapDepth",O.map.depthTexture.format=Di,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=we,O.map.depthTexture.magFilter=we}else Q.isPointLight?(O.map=new Js(s.x),O.map.depthTexture=new bs(s.x,fi)):(O.map=new Ce(s.x,s.y),O.map.depthTexture=new zi(s.x,s.y,fi)),O.map.depthTexture.name=Q.name+".shadowMap",O.map.depthTexture.format=Di,this.type===Us?(O.map.depthTexture.compareFunction=V?el:tl,O.map.depthTexture.minFilter=Pe,O.map.depthTexture.magFilter=Pe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=we,O.map.depthTexture.magFilter=we);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();Q.isPointLight!==!0&&O.updateMatrices(Q,S);let $=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let ft=0;ft<G;ft++){let _t=O.getCamera(ft);if(Q.isPointLight){let k=O.camera,ut=O.matrix,vt=Q.distance||k.far;vt!==k.far&&(k.far=vt,k.updateProjectionMatrix()),Ys.setFromMatrixPosition(Q.matrixWorld),k.position.copy(Ys),dl.copy(k.position),dl.add(Xm[ft]),k.up.copy(qm[ft]),k.lookAt(dl),k.updateMatrixWorld(),ut.makeTranslation(-Ys.x,-Ys.y,-Ys.z),du.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),O._frustum.setFromProjectionMatrix(du,k.coordinateSystem,k.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ft),n.clear();else{ft===0&&(n.setRenderTarget(O.map),n.clear());let k=O.getViewport(ft);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),B.viewport(a)}i=O.getFrustum(ft),y(M,S,_t,Q,$,this.type)}O.isPointLightShadow!==!0&&this.type===Zn&&T(O,S),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(z,C,L)};function T(A,M){let S=t.update(E);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ce(s.x,s.y,{format:tn,type:pi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(M,null,S,u,E,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(M,null,S,d,E,null)}function R(A,M,S,z){let C=null,L=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)C=L;else if(C=S.isPointLight===!0?c:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let B=C.uuid,F=M.uuid,w=l[B];w===void 0&&(w={},l[B]=w);let H=w[F];H===void 0&&(H=C.clone(),w[F]=H,M.addEventListener("dispose",b)),C=H}if(C.visible=M.visible,C.wireframe=M.wireframe,z===Zn?C.side=M.shadowSide!==null?M.shadowSide:M.side:C.side=M.shadowSide!==null?M.shadowSide:f[M.side],C.alphaMap=M.alphaMap,C.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,C.map=M.map,C.clipShadows=M.clipShadows,C.clippingPlanes=M.clippingPlanes,C.clipIntersection=M.clipIntersection,C.displacementMap=M.displacementMap,C.displacementScale=M.displacementScale,C.displacementBias=M.displacementBias,C.wireframeLinewidth=M.wireframeLinewidth,C.linewidth=M.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=S}return C}function y(A,M,S,z,C,L){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===Zn)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let w=t.update(A),H=A.material;if(Array.isArray(H)){let Q=w.groups;for(let O=0,tt=Q.length;O<tt;O++){let V=Q[O],G=H[V.materialIndex];if(G&&G.visible){let $=R(A,G,z,L);A.onBeforeShadow(n,A,M,S,w,$,V),n.renderBufferDirect(S,null,w,$,A,V),A.onAfterShadow(n,A,M,S,w,$,V)}}}else if(H.visible){let Q=R(A,H,z,L);A.onBeforeShadow(n,A,M,S,w,Q,null),n.renderBufferDirect(S,null,w,Q,A,null),A.onAfterShadow(n,A,M,S,w,Q,null)}}let F=A.children;for(let w=0,H=F.length;w<H;w++)y(F[w],M,S,z,C,L)}function b(A){A.target.removeEventListener("dispose",b);for(let S in l){let z=l[S],C=A.target.uuid;C in z&&(z[C].dispose(),delete z[C])}}}function Ym(n,t){function e(){let N=!1,K=new xe,q=null,ot=new xe(0,0,0,0);return{setMask:function(rt){q!==rt&&!N&&(n.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){N=rt},setClear:function(rt,ht,Nt,Ft,nt){nt===!0&&(rt*=Ft,ht*=Ft,Nt*=Ft),K.set(rt,ht,Nt,Ft),ot.equals(K)===!1&&(n.clearColor(rt,ht,Nt,Ft),ot.copy(K))},reset:function(){N=!1,q=null,ot.set(-1,0,0,0)}}}function i(){let N=!1,K=!1,q=null,ot=null,rt=null;return{setReversed:function(ht){if(K!==ht){let Nt=t.get("EXT_clip_control");ht?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),K=ht;let Ft=rt;rt=null,this.setClear(Ft)}},getReversed:function(){return K},setTest:function(ht){ht?gt(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(ht){q!==ht&&!N&&(n.depthMask(ht),q=ht)},setFunc:function(ht){if(K&&(ht=kc[ht]),ot!==ht){switch(ht){case br:n.depthFunc(n.NEVER);break;case Nr:n.depthFunc(n.ALWAYS);break;case wr:n.depthFunc(n.LESS);break;case Bn:n.depthFunc(n.LEQUAL);break;case Cr:n.depthFunc(n.EQUAL);break;case Lr:n.depthFunc(n.GEQUAL);break;case Dr:n.depthFunc(n.GREATER);break;case Pr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=ht}},setLocked:function(ht){N=ht},setClear:function(ht){rt!==ht&&(rt=ht,K&&(ht=1-ht),n.clearDepth(ht))},reset:function(){N=!1,q=null,ot=null,rt=null,K=!1}}}function s(){let N=!1,K=null,q=null,ot=null,rt=null,ht=null,Nt=null,Ft=null,nt=null;return{setTest:function(wt){N||(wt?gt(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(wt){K!==wt&&!N&&(n.stencilMask(wt),K=wt)},setFunc:function(wt,Vt,yt){(q!==wt||ot!==Vt||rt!==yt)&&(n.stencilFunc(wt,Vt,yt),q=wt,ot=Vt,rt=yt)},setOp:function(wt,Vt,yt){(ht!==wt||Nt!==Vt||Ft!==yt)&&(n.stencilOp(wt,Vt,yt),ht=wt,Nt=Vt,Ft=yt)},setLocked:function(wt){N=wt},setClear:function(wt){nt!==wt&&(n.clearStencil(wt),nt=wt)},reset:function(){N=!1,K=null,q=null,ot=null,rt=null,ht=null,Nt=null,Ft=null,nt=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],E=null,p=!1,m=null,T=null,R=null,y=null,b=null,A=null,M=null,S=new Ht(0,0,0),z=0,C=!1,L=null,B=null,F=null,w=null,H=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,tt=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=tt>=2);let G=null,$={},ft=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),k=new xe().fromArray(ft),ut=new xe().fromArray(_t);function vt(N,K,q,ot){let rt=new Uint8Array(4),ht=n.createTexture();n.bindTexture(N,ht),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<q;Nt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(K+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return ht}let Dt={};Dt[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),a.setFunc(Bn),ee(!1),Gt(Oo),gt(n.CULL_FACE),Ot(gn);function gt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function ct(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Jt(N,K){return u[N]!==K?(n.bindFramebuffer(N,K),u[N]=K,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=K),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=K),!0):!1}function at(N,K){let q=g,ot=!1;if(N){q=d.get(K),q===void 0&&(q=[],d.set(K,q));let rt=N.textures;if(q.length!==rt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Nt=rt.length;ht<Nt;ht++)q[ht]=n.COLOR_ATTACHMENT0+ht;q.length=rt.length,ot=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ot=!0);ot&&n.drawBuffers(q)}function At(N){return E!==N?(n.useProgram(N),E=N,!0):!1}let Et={[Mn]:n.FUNC_ADD,[lc]:n.FUNC_SUBTRACT,[cc]:n.FUNC_REVERSE_SUBTRACT};Et[uc]=n.MIN,Et[hc]=n.MAX;let pt={[dc]:n.ZERO,[fc]:n.ONE,[pc]:n.SRC_COLOR,[ko]:n.SRC_ALPHA,[Ec]:n.SRC_ALPHA_SATURATE,[xc]:n.DST_COLOR,[gc]:n.DST_ALPHA,[mc]:n.ONE_MINUS_SRC_COLOR,[Fo]:n.ONE_MINUS_SRC_ALPHA,[Ic]:n.ONE_MINUS_DST_COLOR,[Mc]:n.ONE_MINUS_DST_ALPHA,[yc]:n.CONSTANT_COLOR,[Ac]:n.ONE_MINUS_CONSTANT_COLOR,[vc]:n.CONSTANT_ALPHA,[Tc]:n.ONE_MINUS_CONSTANT_ALPHA};function Ot(N,K,q,ot,rt,ht,Nt,Ft,nt,wt){if(N===gn){p===!0&&(ct(n.BLEND),p=!1);return}if(p===!1&&(gt(n.BLEND),p=!0),N!==oc){if(N!==m||wt!==C){if((T!==Mn||b!==Mn)&&(n.blendEquation(n.FUNC_ADD),T=Mn,b=Mn),wt)switch(N){case Jn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFunc(n.ONE,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",N);break}else switch(N){case Jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bo:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",N);break}R=null,y=null,A=null,M=null,S.set(0,0,0),z=0,m=N,C=wt}return}rt=rt||K,ht=ht||q,Nt=Nt||ot,(K!==T||rt!==b)&&(n.blendEquationSeparate(Et[K],Et[rt]),T=K,b=rt),(q!==R||ot!==y||ht!==A||Nt!==M)&&(n.blendFuncSeparate(pt[q],pt[ot],pt[ht],pt[Nt]),R=q,y=ot,A=ht,M=Nt),(Ft.equals(S)===!1||nt!==z)&&(n.blendColor(Ft.r,Ft.g,Ft.b,nt),S.copy(Ft),z=nt),m=N,C=!1}function Ut(N,K){N.side===Xe?ct(n.CULL_FACE):gt(n.CULL_FACE);let q=N.side===_e;K&&(q=!q),ee(q),N.blending===Jn&&N.transparent===!1?Ot(gn):Ot(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ot=N.stencilWrite;o.setTest(ot),ot&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),jt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function Gt(N){N!==rc?(gt(n.CULL_FACE),N!==B&&(N===Oo?n.cullFace(n.BACK):N===ac?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),B=N}function Ee(N){N!==F&&(O&&n.lineWidth(N),F=N)}function jt(N,K,q){N?(gt(n.POLYGON_OFFSET_FILL),(w!==K||H!==q)&&(w=K,H=q,a.getReversed()&&(K=-K,q=-q),n.polygonOffset(K,q))):ct(n.POLYGON_OFFSET_FILL)}function Me(N){N?gt(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function ne(N){N===void 0&&(N=n.TEXTURE0+Q-1),G!==N&&(n.activeTexture(N),G=N)}function ae(N,K,q){q===void 0&&(G===null?q=n.TEXTURE0+Q-1:q=G);let ot=$[q];ot===void 0&&(ot={type:void 0,texture:void 0},$[q]=ot),(ot.type!==N||ot.texture!==K)&&(G!==q&&(n.activeTexture(q),G=q),n.bindTexture(N,K||Dt[N]),ot.type=N,ot.texture=K)}function P(){let N=$[G];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ce(){try{n.compressedTexImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function ie(){try{n.compressedTexImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function Mt(){try{n.texSubImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function it(){try{n.texSubImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function Xt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function mt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function Rt(){try{n.texStorage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function v(){try{n.texStorage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function x(){try{n.texImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function U(){try{n.texImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function et(N){return f[N]!==void 0?f[N]:n.getParameter(N)}function Z(N,K){f[N]!==K&&(n.pixelStorei(N,K),f[N]=K)}function st(N){k.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),k.copy(N))}function lt(N){ut.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ut.copy(N))}function Y(N,K){let q=l.get(K);q===void 0&&(q=new WeakMap,l.set(K,q));let ot=q.get(N);ot===void 0&&(ot=n.getUniformBlockIndex(K,N.name),n.uniformBlockBinding(K,ot,ot),q.set(N,ot))}function J(N,K,q){let rt=l.get(K).get(N);c[rt]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,rt,q),c[rt]=q)}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},G=null,$={},u={},c={},d=new WeakMap,g=[],E=null,p=!1,m=null,T=null,R=null,y=null,b=null,A=null,M=null,S=new Ht(0,0,0),z=0,C=!1,L=null,B=null,F=null,w=null,H=null,k.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:ct,bindFramebuffer:Jt,drawBuffers:at,useProgram:At,setBlending:Ot,setMaterial:Ut,setFlipSided:ee,setCullFace:Gt,setLineWidth:Ee,setPolygonOffset:jt,setScissorTest:Me,activeTexture:ne,bindTexture:ae,unbindTexture:P,compressedTexImage2D:ce,compressedTexImage3D:ie,texImage2D:x,texImage3D:U,pixelStorei:Z,getParameter:et,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Rt,texStorage3D:v,texSubImage2D:Mt,texSubImage3D:it,compressedTexSubImage2D:Xt,compressedTexSubImage3D:mt,scissor:st,viewport:lt,reset:dt}}function Zm(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=new Set,E=new FinalizationRegistry(v=>g.delete(v)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(v,x){return p?new OffscreenCanvas(v,x):Fn("canvas")}function T(v,x,U){let et=1,Z=Rt(v);if((Z.width>U||Z.height>U)&&(et=U/Math.max(Z.width,Z.height)),et<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){let st=Math.floor(et*Z.width),lt=Math.floor(et*Z.height);u===void 0&&(u=m(st,lt));let Y=x?m(st,lt):u;return Y.width=st,Y.height=lt,Y.getContext("2d").drawImage(v,0,0,st,lt),zt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+st+"x"+lt+")."),Y}else return"data"in v&&zt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),v;return v}function R(v){return v.generateMipmaps}function y(v){n.generateMipmap(v)}function b(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(v,x,U,et,Z,st=!1){if(v!==null){if(n[v]!==void 0)return n[v];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let lt;et&&(lt=t.get("EXT_texture_norm16"),lt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8),U===n.UNSIGNED_SHORT&&lt&&(Y=lt.R16_EXT),U===n.SHORT&&lt&&(Y=lt.R16_SNORM_EXT)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),x===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8),U===n.UNSIGNED_SHORT&&lt&&(Y=lt.RG16_EXT),U===n.SHORT&&lt&&(Y=lt.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),U===n.UNSIGNED_INT&&(Y=n.RGB32UI),U===n.BYTE&&(Y=n.RGB8I),U===n.SHORT&&(Y=n.RGB16I),U===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),U===n.UNSIGNED_INT&&(Y=n.RGBA32UI),U===n.BYTE&&(Y=n.RGBA8I),U===n.SHORT&&(Y=n.RGBA16I),U===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGB16_EXT),U===n.SHORT&&lt&&(Y=lt.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){let J=st?gs:te.getTransfer(Z);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=J===le?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGBA16_EXT),U===n.SHORT&&lt&&(Y=lt.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(v,x){let U;return v?x===null||x===fi||x===In?U=n.DEPTH24_STENCIL8:x===ri?U=n.DEPTH32F_STENCIL8:x===$n&&(U=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fi||x===In?U=n.DEPTH_COMPONENT24:x===ri?U=n.DEPTH_COMPONENT32F:x===$n&&(U=n.DEPTH_COMPONENT16),U}function S(v,x){return R(v)===!0||v.isFramebufferTexture&&v.minFilter!==we&&v.minFilter!==Pe?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function z(v){let x=new WeakRef(v);i.get(v).__ref=x,g.add(x),E.register(v,x,x)}function C(v){let x=i.get(v).__ref;x!==void 0&&(g.delete(x),E.unregister(x))}function L(v){F(v.target)}function B(v){w(v.target)}function F(v){v.removeEventListener("dispose",L),C(v),Q(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function w(v){v.removeEventListener("dispose",B),C(v),tt(v)}function H(){for(let v of g){let x=v.deref();x!==void 0&&(x.isRenderTarget===!0?w(x):F(x))}g.clear(),f.clear()}function Q(v){let x=i.get(v);if(x.__webglInit===void 0)return;let U=v.source,et=d.get(U);if(et){let Z=et[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&O(v),Object.keys(et).length===0&&d.delete(U)}i.remove(v)}function O(v){let x=i.get(v);n.deleteTexture(x.__webglTexture);let U=v.source,et=d.get(U);delete et[x.__cacheKey],a.memory.textures--}function tt(v){let x=i.get(v);x.__depthDisposeCallback&&x.__depthDisposeCallback();let U=v.depthTexture;if(U&&U.renderTarget===v&&F(U),v.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let st=0;st<x.__webglFramebuffer[Z].length;st++)n.deleteFramebuffer(x.__webglFramebuffer[Z][st]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let et=v.textures;for(let Z=0,st=et.length;Z<st;Z++){let lt=i.get(et[Z]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),a.memory.textures--),i.remove(et[Z])}i.remove(v)}let V=0;function G(){V=0}function $(){return V}function ft(v){V=v}function _t(){let v=V;return v>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(v+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,v}function k(v){let x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.wrapR||0),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.mipmapsAutoUpdate),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.colorSpace),x.join()}function ut(v,x){let U=i.get(v);if(v.isVideoTexture&&Xt(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&U.__version!==v.version){let et=v.image;if(et===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(U,v,x);return}}else v.isExternalTexture&&(U.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function vt(v,x){let U=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){Ut(U,v,x);return}else v.isExternalTexture&&(U.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function Dt(v,x){let U=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){Ut(U,v,x);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function gt(v,x){let U=i.get(v);if(v.version>0&&U.__version!==v.version){ee(U,v,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}let ct={[jn]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[_r]:n.MIRRORED_REPEAT},Jt={[we]:n.NEAREST,[bc]:n.NEAREST_MIPMAP_NEAREST,[ks]:n.NEAREST_MIPMAP_LINEAR,[Pe]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},at={[Lc]:n.NEVER,[il]:n.ALWAYS,[Dc]:n.LESS,[tl]:n.LEQUAL,[Pc]:n.EQUAL,[el]:n.GEQUAL,[_c]:n.GREATER,[zc]:n.NOTEQUAL};function At(v,x){if(x.type===ri&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Pe||x.magFilter===la||x.magFilter===ks||x.magFilter===di||x.minFilter===Pe||x.minFilter===la||x.minFilter===ks||x.minFilter===di)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,ct[x.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ct[x.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ct[x.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,Jt[x.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,Jt[x.minFilter]),x.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===we||x.minFilter!==ks&&x.minFilter!==di||x.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(v,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Et(v,x){let U=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",L),z(x));let et=x.source,Z=d.get(et);Z===void 0&&(Z={},d.set(et,Z));let st=k(x);if(st!==v.__cacheKey){Z[st]===void 0&&(Z[st]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[st].usedTimes++;let lt=Z[v.__cacheKey];lt!==void 0&&(Z[v.__cacheKey].usedTimes--,lt.usedTimes===0&&O(x)),v.__cacheKey=st,v.__webglTexture=Z[st].texture}return U}function pt(v,x,U){return Math.floor(Math.floor(v/U)/x)}function Ot(v,x,U,et){let st=v.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,et,x.data);else{st.sort((N,K)=>N.start-K.start);let lt=0;for(let N=1;N<st.length;N++){let K=st[lt],q=st[N],ot=K.start+K.count,rt=pt(q.start,x.width,4),ht=pt(K.start,x.width,4);q.start<=ot+1&&rt===ht&&pt(q.start+q.count-1,x.width,4)===rt?K.count=Math.max(K.count,q.start+q.count-K.start):(++lt,st[lt]=q)}st.length=lt+1;let Y=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let N=0,K=st.length;N<K;N++){let q=st[N],ot=Math.floor(q.start/4),rt=Math.ceil(q.count/4),ht=ot%x.width,Nt=Math.floor(ot/x.width),Ft=rt,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Nt),e.texSubImage2D(n.TEXTURE_2D,0,ht,Nt,Ft,nt,U,et,x.data)}v.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function Ut(v,x,U){let et=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=n.TEXTURE_3D);let Z=Et(v,x),st=x.source;e.bindTexture(et,v.__webglTexture,n.TEXTURE0+U);let lt=i.get(st);if(st.version!==lt.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let nt=te.getPrimaries(te.workingColorSpace),wt=x.colorSpace===gi?null:te.getPrimaries(x.colorSpace),Vt=x.colorSpace===gi||nt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let J=T(x.image,!1,s.maxTextureSize);J=mt(x,J);let dt=r.convert(x.format,x.colorSpace),N=r.convert(x.type),K=A(x.internalFormat,dt,N,x.normalized,x.colorSpace,x.isVideoTexture);At(et,x);let q,ot=x.mipmaps,rt=x.isVideoTexture!==!0,ht=lt.__version===void 0||Z===!0,Nt=st.dataReady,Ft=S(x,J);if(x.isDepthTexture)K=M(x.format===Oi,x.type),ht&&(rt?e.texStorage2D(n.TEXTURE_2D,1,K,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,dt,N,null));else if(x.isDataTexture)if(ot.length>0){rt&&ht&&e.texStorage2D(n.TEXTURE_2D,Ft,K,ot[0].width,ot[0].height);for(let nt=0,wt=ot.length;nt<wt;nt++)q=ot[nt],rt?Nt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,N,q.data):e.texImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,dt,N,q.data);x.generateMipmaps=!1}else rt?(ht&&e.texStorage2D(n.TEXTURE_2D,Ft,K,J.width,J.height),Nt&&Ot(x,J,dt,N)):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,dt,N,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){rt&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,K,ot[0].width,ot[0].height,J.depth);for(let nt=0,wt=ot.length;nt<wt;nt++)if(q=ot[nt],x.format!==mi)if(dt!==null)if(rt){if(Nt)if(x.layerUpdates.size>0){let Vt=ul(q.width,q.height,x.format,x.type);for(let yt of x.layerUpdates){let re=q.data.subarray(yt*Vt/q.data.BYTES_PER_ELEMENT,(yt+1)*Vt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,yt,q.width,q.height,1,dt,re)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,J.depth,dt,q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,K,q.width,q.height,J.depth,0,q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Nt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,J.depth,dt,N,q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,K,q.width,q.height,J.depth,0,dt,N,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{rt&&ht&&e.texStorage2D(n.TEXTURE_2D,Ft,K,ot[0].width,ot[0].height);for(let nt=0,wt=ot.length;nt<wt;nt++)q=ot[nt],x.format!==mi?dt!==null?rt?Nt&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,q.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Nt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,N,q.data):e.texImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,dt,N,q.data)}else if(x.isDataArrayTexture)if(rt){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ft,K,J.width,J.height,J.depth),Nt)if(x.layerUpdates.size>0){let nt=ul(J.width,J.height,x.format,x.type);for(let wt of x.layerUpdates){let Vt=J.data.subarray(wt*nt/J.data.BYTES_PER_ELEMENT,(wt+1)*nt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,wt,J.width,J.height,1,dt,N,Vt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,N,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,dt,N,J.data);else if(x.isData3DTexture)rt?(ht&&e.texStorage3D(n.TEXTURE_3D,Ft,K,J.width,J.height,J.depth),Nt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,N,J.data)):e.texImage3D(n.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,dt,N,J.data);else if(x.isFramebufferTexture){if(ht)if(rt)e.texStorage2D(n.TEXTURE_2D,Ft,K,J.width,J.height);else{let nt=J.width,wt=J.height;for(let Vt=0;Vt<Ft;Vt++)e.texImage2D(n.TEXTURE_2D,Vt,K,nt,wt,0,dt,N,null),nt>>=1,wt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),J.parentNode!==nt){nt.appendChild(J),f.add(x),nt.onpaint=wt=>{let Vt=wt.changedElements;for(let yt of f)Vt.includes(yt.image)&&(yt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let Vt=n.RGBA,yt=n.RGBA,re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Vt,yt,re,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ot.length>0){if(rt&&ht){let nt=Rt(ot[0]);e.texStorage2D(n.TEXTURE_2D,Ft,K,nt.width,nt.height)}for(let nt=0,wt=ot.length;nt<wt;nt++)q=ot[nt],rt?Nt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,dt,N,q):e.texImage2D(n.TEXTURE_2D,nt,K,dt,N,q);x.generateMipmaps=!1}else if(rt){if(ht){let nt=Rt(J);e.texStorage2D(n.TEXTURE_2D,Ft,K,nt.width,nt.height)}Nt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,N,J)}else e.texImage2D(n.TEXTURE_2D,0,K,dt,N,J);R(x)&&x.mipmapsAutoUpdate===!0&&y(et),lt.__version=st.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function ee(v,x,U){if(x.image.length!==6)return;let et=Et(v,x),Z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+U);let st=i.get(Z);if(Z.version!==st.__version||et===!0){e.activeTexture(n.TEXTURE0+U);let lt=te.getPrimaries(te.workingColorSpace),Y=x.colorSpace===gi?null:te.getPrimaries(x.colorSpace),J=x.colorSpace===gi||lt===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let dt=x.isCompressedTexture||x.image[0].isCompressedTexture,N=x.image[0]&&x.image[0].isDataTexture,K=[];for(let yt=0;yt<6;yt++)!dt&&!N?K[yt]=T(x.image[yt],!0,s.maxCubemapSize):K[yt]=N?x.image[yt].image:x.image[yt],K[yt]=mt(x,K[yt]);let q=K[0],ot=r.convert(x.format,x.colorSpace),rt=r.convert(x.type),ht=A(x.internalFormat,ot,rt,x.normalized,x.colorSpace),Nt=x.isVideoTexture!==!0,Ft=st.__version===void 0||et===!0,nt=Z.dataReady,wt=S(x,q);At(n.TEXTURE_CUBE_MAP,x);let Vt;if(x.isDepthTexture){if(ht=M(x.format===Oi,x.type),Ft)if(Nt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ht,q.width,q.height);else for(let yt=0;yt<6;yt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ht,q.width,q.height,0,ot,rt,null)}else if(dt){Nt&&Ft&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,ht,q.width,q.height);for(let yt=0;yt<6;yt++){Vt=K[yt].mipmaps;for(let re=0;re<Vt.length;re++){let he=Vt[re];x.format!==mi?ot!==null?Nt?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re,0,0,he.width,he.height,ot,he.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re,ht,he.width,he.height,0,he.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re,0,0,he.width,he.height,ot,rt,he.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re,ht,he.width,he.height,0,ot,rt,he.data)}}}else{if(Vt=x.mipmaps,Nt&&Ft){Vt.length>0&&wt++;let yt=Rt(K[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,ht,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(N){Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,K[yt].width,K[yt].height,ot,rt,K[yt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ht,K[yt].width,K[yt].height,0,ot,rt,K[yt].data);for(let re=0;re<Vt.length;re++){let Qe=Vt[re].image[yt].image;Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re+1,0,0,Qe.width,Qe.height,ot,rt,Qe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re+1,ht,Qe.width,Qe.height,0,ot,rt,Qe.data)}}else{Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ot,rt,K[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ht,ot,rt,K[yt]);for(let re=0;re<Vt.length;re++){let he=Vt[re];Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re+1,0,0,ot,rt,he.image[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,re+1,ht,ot,rt,he.image[yt])}}}R(x)&&x.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),st.__version=Z.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function Gt(v,x,U,et,Z,st){let lt=r.convert(U.format,U.colorSpace),Y=r.convert(U.type),J=A(U.internalFormat,lt,Y,U.normalized,U.colorSpace),dt=i.get(x),N=i.get(U);if(N.__renderTarget=x,!dt.__hasExternalTextures){let K=Math.max(1,x.width>>st),q=Math.max(1,x.height>>st);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,st,J,K,q,x.depth,0,lt,Y,null):e.texImage2D(Z,st,J,K,q,0,lt,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,v),it(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Z,N.__webglTexture,0,Mt(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Z,N.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(v,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,v),x.depthBuffer){let et=x.depthTexture,Z=et&&et.isDepthTexture?et.type:null,st=M(x.stencilBuffer,Z),lt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;it(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(x),st,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(x),st,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,st,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,v)}else{let et=x.textures;for(let Z=0;Z<et.length;Z++){let st=et[Z],lt=r.convert(st.format,st.colorSpace),Y=r.convert(st.type),J=A(st.internalFormat,lt,Y,st.normalized,st.colorSpace);it(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(x),J,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(x),J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(v,x,U){let et=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(x.depthTexture);Z.__renderTarget=x;let st=et?x.depthTexture.image[0]:x.depthTexture.image;(!Z.__webglTexture||st.width!==x.width||st.height!==x.height)&&(st.width=x.width,st.height=x.height,x.depthTexture.needsUpdate=!0),et?gt(x.depthTexture,0):ut(x.depthTexture,0);let lt=Z.__webglTexture,Y=Mt(x),J=et?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,dt=x.depthTexture.format===Oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Di)it(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,J,lt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,dt,J,lt,0);else if(x.depthTexture.format===Oi)it(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,J,lt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,dt,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(v){let x=i.get(v),U=v.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==v.depthTexture){let et=v.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",Z)};et.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=et}if(v.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let et=0;et<6;et++)jt(x.__webglFramebuffer[et],v,et);else v.texture.mipmaps.length>0?jt(x.__webglFramebuffer[0],v,0):jt(x.__webglFramebuffer,v,0);else if(U){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=n.createRenderbuffer(),Ee(x.__webglDepthbuffer[et],v,!1);else{let Z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,st)}}else if(v.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ee(x.__webglDepthbuffer,v,!1);else{let Z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(v,x,U){let et=i.get(v);x!==void 0&&Gt(et.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Me(v)}function ae(v){let x=v.texture,U=i.get(v),et=i.get(x);v.addEventListener("dispose",B),z(v);let Z=v.textures,st=v.isWebGLCubeRenderTarget===!0,lt=Z.length>1;if(lt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=x.version,a.memory.textures++),st){U.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){U.__webglFramebuffer[Y]=[];for(let J=0;J<x.mipmaps.length;J++)U.__webglFramebuffer[Y][J]=n.createFramebuffer()}else U.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(x.mipmaps.length>0){U.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)U.__webglFramebuffer[Y]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(lt)for(let Y=0,J=Z.length;Y<J;Y++){let dt=i.get(Z[Y]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(v.samples>0&&it(v)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<Z.length;Y++){let J=Z[Y];U.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);let dt=r.convert(J.format,J.colorSpace),N=r.convert(J.type),K=A(J.internalFormat,dt,N,J.normalized,J.colorSpace,v.isXRRenderTarget===!0),q=Mt(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(U.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),At(n.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Gt(U.__webglFramebuffer[Y][J],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Gt(U.__webglFramebuffer[Y],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);R(x)?y(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(lt){for(let Y=0,J=Z.length;Y<J;Y++){let dt=Z[Y],N=i.get(dt),K=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(K=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,N.__webglTexture),At(K,dt),Gt(U.__webglFramebuffer,v,dt,n.COLOR_ATTACHMENT0+Y,K,0),R(dt)&&y(K)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(Y=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,et.__webglTexture),At(Y,x),x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Gt(U.__webglFramebuffer[J],v,x,n.COLOR_ATTACHMENT0,Y,J);else Gt(U.__webglFramebuffer,v,x,n.COLOR_ATTACHMENT0,Y,0);R(x)?y(Y):x.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}v.depthBuffer&&Me(v)}function P(v){let x=v.textures;for(let U=0,et=x.length;U<et;U++){let Z=x[U];if(R(Z)&&Z.mipmapsAutoUpdate===!0){let st=b(v),lt=i.get(Z).__webglTexture;e.bindTexture(st,lt),y(st),e.unbindTexture()}}}let ce=[];function ie(v){if(v.samples>0){if(it(v)===!1){let x=v.textures,U=v.width,et=v.height,Z=n.COLOR_BUFFER_BIT,st=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(v),Y=x.length>1;if(Y)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),v.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);let N=i.get(x[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,U,et,0,0,U,et,Z,n.NEAREST),c===!0&&(ce.length=0,ce.push(n.COLOR_ATTACHMENT0+dt),v.depthBuffer&&v.storeMultisampledDepthBuffer===!1&&ce.push(st),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);let N=i.get(x[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.storeMultisampledDepthBuffer===!1&&c){let x=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Mt(v){return Math.min(s.maxSamples,v.samples)}function it(v){let x=i.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xt(v){let x=a.render.frame;h.get(v)!==x&&(h.set(v,x),v.update())}function mt(v,x){let U=v.colorSpace,et=v.format,Z=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||U!==ms&&U!==gi&&(te.getTransfer(U)===le?(et!==mi||Z!==qe)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",U)),x}function Rt(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=_t,this.resetTextureUnits=G,this.getTextureUnits=$,this.setTextureUnits=ft,this.setTexture2D=ut,this.setTexture2DArray=vt,this.setTexture3D=Dt,this.setTextureCube=gt,this.rebindTextures=ne,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=it,this.dispose=H}function Jm(n,t){function e(i,s=gi){let r,a=te.getTransfer(s);if(i===qe)return n.UNSIGNED_BYTE;if(i===ua)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jo)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qo)return n.BYTE;if(i===Yo)return n.SHORT;if(i===$n)return n.UNSIGNED_SHORT;if(i===ca)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Ko)return n.ALPHA;if(i===$o)return n.RGB;if(i===mi)return n.RGBA;if(i===Di)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===da)return n.RED;if(i===fa)return n.RED_INTEGER;if(i===tn)return n.RG;if(i===pa)return n.RG_INTEGER;if(i===ma)return n.RGBA_INTEGER;if(i===Fs||i===Hs||i===Vs||i===Ws)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===Ma||i===xa||i===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ea||i===ya||i===Aa||i===va||i===Ta||i===Gs||i===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ea||i===ya)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Aa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===va)return r.COMPRESSED_R11_EAC;if(i===Ta)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gs)return r.COMPRESSED_RG11_EAC;if(i===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ra||i===ba||i===Na||i===wa||i===Ca||i===La||i===Da||i===Pa||i===_a||i===za||i===Oa||i===Ua||i===Ba||i===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ra)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ca)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===La)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ua)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ka||i===Fa||i===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ka)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Va||i===Wa||i===Xs||i===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===In?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
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

}`,Il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ns(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ve({vertexShader:Km,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},El=class extends xi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,E=typeof XRWebGLBinding<"u",p=new Il,m={},T=e.getContextAttributes(),R=null,y=null,b=[],A=[],M=new qt,S=null,z=null,C=new We;C.viewport=new xe;let L=new We;L.viewport=new xe;let B=[C,L],F=new na,w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ut=b[k];return ut===void 0&&(ut=new Wn,b[k]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(k){let ut=b[k];return ut===void 0&&(ut=new Wn,b[k]=ut),ut.getGripSpace()},this.getHand=function(k){let ut=b[k];return ut===void 0&&(ut=new Wn,b[k]=ut),ut.getHandSpace()};function Q(k){let ut=A.indexOf(k.inputSource);if(ut===-1)return;let vt=b[ut];vt!==void 0&&(vt.update(k.inputSource,k.frame,l||a),vt.dispatchEvent({type:k.type,data:k.inputSource}))}function O(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",tt);for(let k=0;k<b.length;k++){let ut=A[k];ut!==null&&(A[k]=null,b[k].disconnect(ut))}w=null,H=null,p.reset();for(let k in m)delete m[k];if(t.setRenderTarget(R),d=null,u=null,f=null,s=null,y=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(M.width,M.height,!1),z!==null){let k=z.camera;k.fov=z.fov,k.zoom=z.zoom,k.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",O),s.addEventListener("inputsourceschange",tt),T.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(M),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Dt=null,gt=null;T.depth&&(gt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=T.stencil?Oi:Di,Dt=T.stencil?In:fi);let ct={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Ce(u.textureWidth,u.textureHeight,{format:mi,type:qe,depthTexture:new zi(u.textureWidth,u.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ce(d.framebufferWidth,d.framebufferHeight,{format:mi,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(k){for(let ut=0;ut<k.removed.length;ut++){let vt=k.removed[ut],Dt=A.indexOf(vt);Dt>=0&&(A[Dt]=null,b[Dt].disconnect(vt))}for(let ut=0;ut<k.added.length;ut++){let vt=k.added[ut],Dt=A.indexOf(vt);if(Dt===-1){for(let ct=0;ct<b.length;ct++)if(ct>=A.length){A.push(vt),Dt=ct;break}else if(A[ct]===null){A[ct]=vt,Dt=ct;break}if(Dt===-1)break}let gt=b[Dt];gt&&gt.connect(vt)}}function V(k,ut){ut===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ut.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let ut=k.near,vt=k.far;p.texture!==null&&(p.depthNear>0&&(ut=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),F.near=L.near=C.near=ut,F.far=L.far=C.far=vt,(w!==F.near||H!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),w=F.near,H=F.far),F.layers.mask=k.layers.mask|6,C.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;let Dt=k.parent,gt=F.cameras;V(F,Dt);for(let ct=0;ct<gt.length;ct++)V(gt[ct],Dt);F.projectionMatrix.copy(C.projectionMatrix),F.projectionMatrixInverse.copy(C.projectionMatrixInverse),z===null&&k.isPerspectiveCamera&&(z={camera:k,fov:k.fov,zoom:k.zoom}),G(k,F,Dt)};function G(k,ut,vt){vt===null?k.matrix.copy(ut.matrixWorld):(k.matrix.copy(vt.matrixWorld),k.matrix.invert(),k.matrix.multiply(ut.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ut.projectionMatrix),k.projectionMatrixInverse.copy(ut.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Or*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(k){c=k,u!==null&&(u.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(k){return m[k]};let $=null;function ft(k,ut){if(h=ut.getViewerPose(l||a),g=ut,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Dt=!1;vt.length!==F.cameras.length&&(F.cameras.length=0,Dt=!0);for(let at=0;at<vt.length;at++){let At=vt[at],Et=null;if(d!==null)Et=d.getViewport(At);else{let Ot=f.getViewSubImage(u,At);Et=Ot.viewport,at===0&&(t.setRenderTargetTextures(y,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(y))}let pt=B[at];pt===void 0&&(pt=new We,pt.layers.enable(at),pt.viewport=new xe,B[at]=pt),pt.matrix.fromArray(At.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(At.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Et.x,Et.y,Et.width,Et.height),at===0&&(F.matrix.copy(pt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Dt===!0&&F.cameras.push(pt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){f=i.getBinding();let at=f.getDepthInformation(vt[0]);at&&at.isValid&&at.texture&&p.init(at,s.renderState)}if(gt&&gt.includes("camera-access")&&E){t.state.unbindTexture(),f=i.getBinding();for(let at=0;at<vt.length;at++){let At=vt[at].camera;if(At){let Et=m[At];Et||(Et=new Ns,m[At]=Et);let pt=f.getCameraImage(At);Et.sourceTexture=pt}}}}for(let vt=0;vt<b.length;vt++){let Dt=A[vt],gt=b[vt];Dt!==null&&gt!==void 0&&gt.update(Dt,ut,l||a)}$&&$(k,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}let _t=new fu;_t.setAnimationLoop(ft),this.setAnimationLoop=function(k){$=k},this.dispose=function(){}}},tg=new ue,vu=new kt;vu.set(-1,0,0,0,1,0,0,0,1);function eg(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ol(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,R,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),E(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,T,R):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=t.get(m),R=T.envMap,y=T.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(vu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,T,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=R*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_e&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function E(p,m){let T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ig(n,t,e,i){let s={},r={};function a(T,R){let y=R.program;i.uniformBlockBinding(T,y,s[T.id])}function o(T,R){let y=s[T.id];y===void 0&&(g(T),y=c(T),s[T.id]=y,T.addEventListener("dispose",p));let b=R.program;i.updateUBOMapping(T,b);let A=t.render.frame;r[T.id]!==A&&(l(T),r[T.id]=A)}function c(T){let R=n.createBuffer(),y=T.__size,b=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,y,b),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function l(T){let R=s[T.id],y=T.uniforms,b=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let A=0,M=y.length;A<M;A++){let S=y[A];if(Array.isArray(S))for(let z=0,C=S.length;z<C;z++)h(S[z],A,z,b);else h(S,A,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,R,y,b){if(u(T,R,y,b)===!0){let A=T.__offset,M=T.value;if(Array.isArray(M)){let S=0;for(let z=0;z<M.length;z++){let C=M[z],L=E(C,!0);f(C,T.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(M,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,T.__data)}}function f(T,R,y){typeof T=="number"||typeof T=="boolean"?R[y]=T:T.isMatrix3?(R[y]=T.elements[0],R[y+1]=T.elements[1],R[y+2]=T.elements[2],R[y+3]=0,R[y+4]=T.elements[3],R[y+5]=T.elements[4],R[y+6]=T.elements[5],R[y+7]=0,R[y+8]=T.elements[6],R[y+9]=T.elements[7],R[y+10]=T.elements[8],R[y+11]=0):ArrayBuffer.isView(T)?R.set(T.subarray(0,R.length-y),y):T.toArray(R,y)}function u(T,R,y,b){let A=T.value,M=R+"_"+y;if(Array.isArray(A)){b[M]===void 0&&(b[M]=[]);let S=b[M],z=!1;for(let C=0;C<A.length;C++)d(A[C],S,C)===!0&&(z=!0);return z}return d(A,b,M)}function d(T,R,y){if(R[y]===void 0)return typeof T=="number"||typeof T=="boolean"?R[y]=T:ArrayBuffer.isView(T)?R[y]=T.slice():R[y]=T.clone(),!0;{let b=R[y];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return R[y]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(b.equals(T)===!1)return b.copy(T),!0}}return!1}function g(T){let R=T.uniforms,y=0,b=16;for(let M=0,S=R.length;M<S;M++){let z=Array.isArray(R[M])?R[M]:[R[M]];for(let C=0,L=z.length;C<L;C++){let B=z[C],F=Array.isArray(B.value)?B.value:[B.value],w=Array.isArray(R[M])||Array.isArray(B.value),H=y;for(let O=0,tt=F.length;O<tt;O++){let V=F[O],G=E(V,w),$=y%b,ft=$%G.boundary,_t=$+ft;y+=ft,_t!==0&&b-_t<G.storage&&(y+=b-_t),O===0&&(H=y),y+=G.storage}let Q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Q((y-H)/Float32Array.BYTES_PER_ELEMENT),B.__offset=H}}let A=y%b;return A>0&&(y+=b-A),T.__size=y,T.__cache={},this}function E(T,R){let y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=16,y.storage=48):T.isMatrix4?(y.boundary=16,y.storage=64):T.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(y.boundary=16,y.storage=T.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",T),R===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(T){let R=T.target;R.removeEventListener("dispose",p),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function m(){for(let T in s)n.deleteBuffer(s[T]);s={},r={}}return{bind:a,update:o,dispose:m}}var ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function sg(){return vi===null&&(vi=new As(ng,16,16,tn,pi),vi.name="DFG_LUT",vi.minFilter=Pe,vi.magFilter=Pe,vi.wrapS=ei,vi.wrapT=ei,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Ks=class{constructor(t={}){let{canvas:e=Uc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=qe}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let E=d,p=new Set([ma,pa,fa]),m=new Set([qe,fi,$n,In,ua,ha]),T=new Uint32Array(4),R=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,A=null,M=[],S=[],z=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,B=null,F=null,w=null,H=null;this._outputColorSpace=Te;let Q=0,O=0,tt=null,V=-1,G=null,$=new xe,ft=new xe,_t=null,k=new Ht(0),ut=0,vt=e.width,Dt=e.height,gt=1,ct=null,Jt=null,at=new xe(0,0,vt,Dt),At=new xe(0,0,vt,Dt),Et=!1,pt=new qi,Ot=new kr,Ut=!1,ee=!1,Gt=new ue,Ee=new _,jt=new xe,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function ae(){return tt===null?gt:1}let P=i;function ce(I,D){return e.getContext(I,D)}let ie,Mt,it,Xt,mt,Rt,v,x,U,et,Z,st,lt,Y,J,dt,N,K,q,ot,rt,ht,Nt;try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),P===null){let D="webgl2";if(P=ce(D,I),P===null)throw ce(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(I){throw e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Bt("WebGLRenderer: "+I.message),I}function Ft(){ie=new mp(P),ie.init(),rt=new Jm(P,ie),Mt=new sp(P,ie,t,rt),it=new Ym(P,ie),Mt.reversedDepthBuffer&&u&&it.buffers.depth.setReversed(!0),F=P.createFramebuffer(),w=P.createFramebuffer(),H=P.createFramebuffer(),Xt=new xp(P),mt=new zm,Rt=new Zm(P,ie,it,mt,Mt,rt,Xt),v=new pp(C),x=new Ih(P),ht=new ip(P,x),U=new gp(P,x,Xt,ht),et=new Ep(P,U,x,ht,Xt),K=new Ip(P,Mt,Rt),J=new rp(mt),Z=new _m(C,v,ie,Mt,ht,J),st=new eg(C,mt),lt=new Um,Y=new Vm(ie),N=new ep(C,v,it,et,g,c),dt=new Qm(C,et,Mt),Nt=new ig(P,Xt,Mt,it),q=new np(P,ie,Xt),ot=new Mp(P,ie,Xt),Xt.programs=Z.programs,C.capabilities=Mt,C.extensions=ie,C.properties=mt,C.renderLists=lt,C.shadowMap=dt,C.state=it,C.info=Xt}E!==qe&&(z=new Ap(E,e.width,e.height,o,s,r));let nt=new El(C,P);this.xr=nt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let I=ie.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ie.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(I){I!==void 0&&(gt=I,this.setSize(vt,Dt,!1))},this.getSize=function(I){return I.set(vt,Dt)},this.setSize=function(I,D,X=!0){if(nt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=I,Dt=D,e.width=Math.floor(I*gt),e.height=Math.floor(D*gt),X===!0&&(e.style.width=I+"px",e.style.height=D+"px"),z!==null&&z.setSize(e.width,e.height),this.setViewport(0,0,I,D)},this.getDrawingBufferSize=function(I){return I.set(vt*gt,Dt*gt).floor()},this.setDrawingBufferSize=function(I,D,X){vt=I,Dt=D,gt=X,e.width=Math.floor(I*X),e.height=Math.floor(D*X),this.setViewport(0,0,I,D)},this.setEffects=function(I){if(E===qe){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let D=0;D<I.length;D++)if(I[D].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy($)},this.getViewport=function(I){return I.copy(at)},this.setViewport=function(I,D,X,j){I.isVector4?at.set(I.x,I.y,I.z,I.w):at.set(I,D,X,j),it.viewport($.copy(at).multiplyScalar(ae()).round())},this.getScissor=function(I){return I.copy(At)},this.setScissor=function(I,D,X,j){I.isVector4?At.set(I.x,I.y,I.z,I.w):At.set(I,D,X,j),it.scissor(ft.copy(At).multiplyScalar(ae()).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(I){it.setScissorTest(Et=I)},this.setOpaqueSort=function(I){ct=I},this.setTransparentSort=function(I){Jt=I},this.getClearColor=function(I){return I.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(I=!0,D=!0,X=!0){let j=0;if(I){let W=!1;if(tt!==null){let It=tt.texture.format;W=p.has(It)}if(W){let It=tt.texture.type,bt=m.has(It),xt=N.getClearColor(),St=N.getClearAlpha(),Pt=xt.r,Wt=xt.g,Kt=xt.b;bt?(T[0]=Pt,T[1]=Wt,T[2]=Kt,T[3]=St,P.clearBufferuiv(P.COLOR,0,T)):(R[0]=Pt,R[1]=Wt,R[2]=Kt,R[3]=St,P.clearBufferiv(P.COLOR,0,R))}else j|=P.COLOR_BUFFER_BIT}D&&(j|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),B=I},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),N.dispose(),lt.dispose(),Y.dispose(),Rt.dispose(),mt.dispose(),v.dispose(),et.dispose(),U.dispose(),ht.dispose(),Nt.dispose(),Z.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",nn),nt.removeEventListener("sessionend",Yt),de.stop()};function wt(I){I.preventDefault(),sl("WebGLRenderer: Context Lost."),L=!0}function Vt(){sl("WebGLRenderer: Context Restored."),L=!1;let I=Xt.autoReset,D=dt.enabled,X=dt.autoUpdate,j=dt.needsUpdate,W=dt.type;Ft(),Xt.autoReset=I,dt.enabled=D,dt.autoUpdate=X,dt.needsUpdate=j,dt.type=W}function yt(I){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function re(I){let D=I.target;D.removeEventListener("dispose",re),he(D)}function he(I){Qe(I),mt.remove(I)}function Qe(I){let D=mt.get(I).programs;D!==void 0&&(D.forEach(function(X){Z.releaseProgram(X)}),I.isShaderMaterial&&Z.releaseShaderCache(I))}this.renderBufferDirect=function(I,D,X,j,W,It){D===null&&(D=Me);let bt=W.isMesh&&W.matrixWorld.determinantAffine()<0,xt=Ru(I,D,X,j,W);it.setMaterial(j,bt);let St=X.index,Pt=1;if(j.wireframe===!0){if(St=U.getWireframeAttribute(X),St===void 0)return;Pt=2}let Wt=X.drawRange,Kt=X.attributes.position,Ct=Wt.start*Pt,$t=(Wt.start+Wt.count)*Pt;It!==null&&(Ct=Math.max(Ct,It.start*Pt),$t=Math.min($t,(It.start+It.count)*Pt)),St!==null?(Ct=Math.max(Ct,0),$t=Math.min($t,St.count)):Kt!=null&&(Ct=Math.max(Ct,0),$t=Math.min($t,Kt.count));let Ae=$t-Ct;if(Ae<0||Ae===1/0)return;ht.setup(W,j,xt,X,St);let me,pe=q;if(St!==null&&(me=x.get(St),pe=ot,pe.setIndex(me)),W.isMesh)j.wireframe===!0?(it.setLineWidth(j.wireframeLinewidth*ae()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(W.isLine){let ze=j.linewidth;ze===void 0&&(ze=1),it.setLineWidth(ze*ae()),W.isLineSegments?pe.setMode(P.LINES):W.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else W.isPoints?pe.setMode(P.POINTS):W.isSprite&&pe.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))pe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ze=W._multiDrawStarts,Lt=W._multiDrawCounts,Fe=W._multiDrawCount,oe=St?x.get(St).bytesPerElement:1,rn=mt.get(j).currentProgram.getUniforms();for(let Oe=0;Oe<Fe;Oe++)rn.setValue(P,"_gl_DrawID",Oe),pe.render(ze[Oe]/oe,Lt[Oe])}else if(W.isInstancedMesh)pe.renderInstances(Ct,Ae,W.count);else if(X.isInstancedBufferGeometry){let ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Lt=Math.min(X.instanceCount,ze);pe.renderInstances(Ct,Ae,Lt)}else pe.render(Ct,Ae)};function Ui(I,D,X,j){B!==null&&I.isNodeMaterial&&B.setObject(j,I),Ut===!0&&J.setState(I,X,!1),I.transparent===!0&&I.side===Xe&&I.forceSinglePass===!1?(I.side=_e,I.needsUpdate=!0,as(I,D,j),I.side=$i,I.needsUpdate=!0,as(I,D,j),I.side=Xe):as(I,D,j)}this.compile=function(I,D,X=null){X===null&&(X=I),B!==null&&B.renderStart(I,D,X),A=Y.get(X),A.init(D),S.push(A),X.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),I!==X&&I.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),ee=this.localClippingEnabled,Ut=J.init(this.clippingPlanes,ee),Ut===!0&&J.setGlobalState(this.clippingPlanes,D),B!==null&&dt.render(A.state.shadowsArray,X,D);let j=new Set;return I.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let It=W.material;if(It)if(Array.isArray(It))for(let bt=0;bt<It.length;bt++){let xt=It[bt];Ui(xt,X,D,W),j.add(xt)}else Ui(It,X,D,W),j.add(It)}),A=S.pop(),B!==null&&B.renderEnd(),j},this.compileAsync=function(I,D,X=null){let j=this.compile(I,D,X);return new Promise(W=>{function It(){if(j.forEach(function(bt){let St=mt.get(bt).currentProgram;(St===void 0||St.isReady())&&j.delete(bt)}),j.size===0){W(I);return}setTimeout(It,10)}ie.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let rs=null;function en(I){rs&&rs(I)}function nn(){de.stop()}function Yt(){de.start()}let de=new fu;de.setAnimationLoop(en),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(I){rs=I,nt.setAnimationLoop(I),I===null?de.stop():de.start()},nt.addEventListener("sessionstart",nn),nt.addEventListener("sessionend",Yt),this.render=function(I,D){if(D!==void 0&&D.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(I,D);let X=nt.enabled===!0&&nt.isPresenting===!0,j=z!==null&&(tt===null||X)&&z.begin(C,tt);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(D),D=nt.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,D,tt),A=Y.get(I,S.length),A.init(D),A.state.textureUnits=Rt.getTextureUnits(),S.push(A),Gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Ot.setFromArrayCamera(D):pt.setFromProjectionMatrix(Gt,ii,D.reversedDepth),ee=this.localClippingEnabled,Ut=J.init(this.clippingPlanes,ee),b=lt.get(I,M.length),b.init(),M.push(b),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let bt=C.xr.getDepthSensingMesh();bt!==null&&ye(bt,D,-1/0,C.sortObjects)}ye(I,D,0,C.sortObjects),b.finish(),B!==null&&B.updateLights(A.state.lightsArray),C.sortObjects===!0&&b.sort(ct,Jt),ne=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ne&&N.addToRenderList(b,I),this.info.autoReset===!0&&this.info.reset(),Ut===!0&&J.beginShadows();let W=A.state.shadowsArray;if(dt.render(W,I,D),Ut===!0&&J.endShadows(),(j&&z.hasRenderPass())===!1){let bt=b.opaque,xt=b.transmissive;if(A.setupLights(),D.isArrayCamera){let St=D.cameras;if(xt.length>0)for(let Pt=0,Wt=St.length;Pt<Wt;Pt++){let Kt=St[Pt];sn(bt,xt,I,Kt)}ne&&N.render(I);for(let Pt=0,Wt=St.length;Pt<Wt;Pt++){let Kt=St[Pt];Ye(b,I,Kt,Kt.viewport)}}else xt.length>0&&sn(bt,xt,I,D),ne&&N.render(I),Ye(b,I,D)}tt!==null&&O===0&&(Rt.updateMultisampleRenderTarget(tt),Rt.updateRenderTargetMipmap(tt)),j&&z.end(C),I.isScene===!0&&I.onAfterRender(C,I,D),ht.resetDefaultState(),V=-1,G=null,S.pop(),S.length>0?(A=S[S.length-1],Rt.setTextureUnits(A.state.textureUnits),Ut===!0&&J.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,M.pop(),M.length>0?b=M[M.length-1]:b=null,B!==null&&B.renderEnd()};function ye(I,D,X,j){if(I.visible===!1)return;if(I.layers.test(D.layers)){if(I.isGroup)X=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(D);else if(I.isLight)A.pushLight(I),I.castShadow&&A.pushShadow(I);else if(I.isSprite){let bt=D.isArrayCamera?Ot:pt;if(!I.frustumCulled||I.intersectsFrustum(bt)){j&&jt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Gt);let xt=et.update(I),St=I.material;St.visible&&b.push(I,xt,St,X,jt.z,null,D)}}else if(I.isMesh||I.isLine||I.isPoints){let bt=D.isArrayCamera?Ot:pt;if(!I.frustumCulled||I.intersectsFrustum(bt)){let xt=et.update(I),St=I.material;if(j&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),jt.copy(I.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),jt.copy(xt.boundingSphere.center)),jt.applyMatrix4(I.matrixWorld).applyMatrix4(Gt)),Array.isArray(St)){let Pt=xt.groups;for(let Wt=0,Kt=Pt.length;Wt<Kt;Wt++){let Ct=Pt[Wt],$t=St[Ct.materialIndex];$t&&$t.visible&&b.push(I,xt,$t,X,jt.z,Ct,D)}}else St.visible&&b.push(I,xt,St,X,jt.z,null,D)}}}let It=I.children;for(let bt=0,xt=It.length;bt<xt;bt++)ye(It[bt],D,X,j)}function Ye(I,D,X,j){let{opaque:W,transmissive:It,transparent:bt}=I;A.setupLightsView(X),Ut===!0&&J.setGlobalState(C.clippingPlanes,X),j&&it.viewport($.copy(j)),W.length>0&&Bi(W,D,X),It.length>0&&Bi(It,D,X),bt.length>0&&Bi(bt,D,X),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function sn(I,D,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[j.id]===void 0){let Ct=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[j.id]=new Ce(1,1,{generateMipmaps:!0,type:Ct?pi:qe,minFilter:di,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let It=A.state.transmissionRenderTarget[j.id],bt=j.viewport||$;It.setSize(bt.z*C.transmissionResolutionScale,bt.w*C.transmissionResolutionScale);let xt=C.getRenderTarget(),St=C.getActiveCubeFace(),Pt=C.getActiveMipmapLevel();C.setRenderTarget(It),C.getClearColor(k),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear(),ne&&N.render(X);let Wt=C.toneMapping;C.toneMapping=Ai;let Kt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),A.setupLightsView(j),Ut===!0&&J.setGlobalState(C.clippingPlanes,j),Bi(I,X,j),Rt.updateMultisampleRenderTarget(It),Rt.updateRenderTargetMipmap(It),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let $t=0,Ae=D.length;$t<Ae;$t++){let me=D[$t],{object:pe,geometry:ze,material:Lt,group:Fe}=me;if(Lt.side===Xe&&pe.layers.test(j.layers)){let oe=Lt.side;Lt.side=_e,Lt.needsUpdate=!0,yn(pe,X,j,ze,Lt,Fe),Lt.side=oe,Lt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Rt.updateMultisampleRenderTarget(It),Rt.updateRenderTargetMipmap(It))}C.setRenderTarget(xt,St,Pt),C.setClearColor(k,ut),Kt!==void 0&&(j.viewport=Kt),C.toneMapping=Wt}function Bi(I,D,X){let j=D.isScene===!0?D.overrideMaterial:null;for(let W=0,It=I.length;W<It;W++){let bt=I[W],{object:xt,geometry:St,group:Pt}=bt,Wt=bt.material;Wt.allowOverride===!0&&j!==null&&(Wt=j),xt.layers.test(X.layers)&&yn(xt,D,X,St,Wt,Pt)}}function yn(I,D,X,j,W,It){B!==null&&W.isNodeMaterial&&B.setObject(I,W),I.onBeforeRender(C,D,X,j,W,It),I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),W.onBeforeRender(C,D,X,j,I,It),W.transparent===!0&&W.side===Xe&&W.forceSinglePass===!1?(W.side=_e,W.needsUpdate=!0,C.renderBufferDirect(X,D,j,W,I,It),W.side=$i,W.needsUpdate=!0,C.renderBufferDirect(X,D,j,W,I,It),W.side=Xe):C.renderBufferDirect(X,D,j,W,I,It),I.onAfterRender(C,D,X,j,W,It)}function Al(I){let D=0;for(let X of I)X.texture!==null&&D++;return D}function as(I,D,X){D.isScene!==!0&&(D=Me);let j=mt.get(I),W=A.state.lights,It=A.state.shadowsArray,bt=W.state.version,xt=Z.getParameters(I,W.state,It,D,X,A.state.lightProbeGridArray),St=Z.getProgramCacheKey(xt),Pt=j.programs;j.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?D.environment:null,j.fog=D.fog;let Wt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;j.envMap=v.get(I.envMap||j.environment,Wt),j.envMapRotation=j.environment!==null&&I.envMap===null?D.environmentRotation:I.envMapRotation,Pt===void 0&&(I.addEventListener("dispose",re),Pt=new Map,j.programs=Pt,j.programVariants=new Map);let Kt=Pt.get(St);if(Kt!==void 0){if(j.currentProgram===Kt&&j.lightsStateVersion===bt)return Tl(I,xt),Kt}else xt.uniforms=Z.getUniforms(I),B!==null&&I.isNodeMaterial&&B.build(I,X,xt),I.onBeforeCompile(xt,C),Kt=Z.acquireProgram(xt,St),Pt.set(St,Kt),j.uniforms=xt.uniforms;let Ct=j.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ct.clippingPlanes=J.uniform),Tl(I,xt),j.needsLights=Nu(I),j.lightsStateVersion=bt,j.needsLights&&(Ct.ambientLightColor.value=W.state.ambient,Ct.lightProbe.value=W.state.probe,Ct.sunLights.value=W.state.sun,Ct.sunLightShadows.value=W.state.sunShadow,Ct.directionalLights.value=W.state.directional,Ct.directionalLightShadows.value=W.state.directionalShadow,Ct.spotLights.value=W.state.spot,Ct.spotLightShadows.value=W.state.spotShadow,Ct.rectAreaLights.value=W.state.rectArea,Ct.ltc_1.value=W.state.rectAreaLTC1,Ct.ltc_2.value=W.state.rectAreaLTC2,Ct.pointLights.value=W.state.point,Ct.pointLightShadows.value=W.state.pointShadow,Ct.hemisphereLights.value=W.state.hemi,Ct.sunShadowMatrix.value=W.state.sunShadowMatrix,Ct.sunShadowCascade.value=W.state.sunShadowCascade,Ct.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ct.spotLightMatrix.value=W.state.spotLightMatrix,Ct.spotLightMap.value=W.state.spotLightMap,Ct.pointShadowMatrix.value=W.state.pointShadowMatrix),j.numLightProbeGrids=Al(A.state.lightProbeGridArray),j.currentProgram=Kt,j.uniformsList=null,Kt}function Su(I,D,X,j,W){let It=mt.get(I),bt=It.currentProgram.id+","+j+","+W,xt=It.programVariants.get(bt);return xt===void 0?(xt=as(I,D,X),It.programVariants.set(bt,xt)):(It.currentProgram=xt,It.uniformsList=null,It.outputColorSpace=j,It.toneMapping=W),xt}function vl(I){if(I.uniformsList===null){let D=I.currentProgram.getUniforms();I.uniformsList=ts.seqWithValue(D.seq,I.uniforms)}return I.uniformsList}function Tl(I,D){let X=mt.get(I);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function Ru(I,D,X,j,W){D.isScene!==!0&&(D=Me),Rt.resetTextureUnits();let It=D.fog,bt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?D.environment:null,xt=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:te.workingColorSpace,St=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Pt=v.get(j.envMap||bt,St),Wt=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ct=!!X.morphAttributes.position,$t=!!X.morphAttributes.normal,Ae=!!X.morphAttributes.color,me=Ai;j.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(me=C.toneMapping);let pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ze=pe!==void 0?pe.length:0,Lt=mt.get(j),Fe=A.state.lights;if(Ut===!0&&(ee===!0||I!==G)){let Ie=I===G&&j.id===V;J.setState(j,I,Ie)}let oe=!1,rn=!1;j.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==Fe.state.version||W.isBatchedMesh&&Lt.batching===!1||!W.isBatchedMesh&&Lt.batching===!0||W.isBatchedMesh&&Lt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Lt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Lt.instancing===!1||!W.isInstancedMesh&&Lt.instancing===!0||W.isSkinnedMesh&&Lt.skinning===!1||!W.isSkinnedMesh&&Lt.skinning===!0||W.isInstancedMesh&&Lt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Lt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Lt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Lt.instancingMorph===!1&&W.morphTexture!==null||Lt.envMap!==Pt||j.fog===!0&&Lt.fog!==It||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==J.numPlanes||Lt.numIntersection!==J.numIntersection)||Lt.vertexAlphas!==Wt||Lt.vertexTangents!==Kt||Lt.morphTargets!==Ct||Lt.morphNormals!==$t||Lt.morphColors!==Ae||Lt.morphTargetsCount!==ze||Lt.numLightProbeGrids!==Al(A.state.lightProbeGridArray)?oe=!0:(Lt.outputColorSpace!==xt||Lt.toneMapping!==me)&&(rn=!0):(oe=!0,Lt.__version=j.version);let Oe=Lt.currentProgram;(oe===!0||rn===!0)&&(Oe=rn===!0?Su(j,D,W,xt,me):as(j,D,W),B&&j.isNodeMaterial&&B.onUpdateProgram(j,Oe,Lt));let tr=!1,ji=!1,an=!1,se=Oe.getUniforms(),De=Lt.uniforms;if(it.useProgram(Oe.program)&&(tr=!0,ji=!0,an=!0),j.id!==V&&(V=j.id,ji=!0),tr||G!==I){it.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),se.setValue(P,"projectionMatrix",I.projectionMatrix),se.setValue(P,"viewMatrix",I.matrixWorldInverse);let be=se.map.cameraPosition;be!==void 0&&be.setValue(P,Ee.setFromMatrixPosition(I.matrixWorld)),Mt.logarithmicDepthBuffer&&se.setValue(P,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&se.setValue(P,"isOrthographic",I.isOrthographicCamera===!0),G!==I&&(G=I,ji=!0,an=!0)}if(Lt.needsLights&&(Fe.state.sunShadowMap.length>0&&se.setValue(P,"sunShadowMap",Fe.state.sunShadowMap,Rt),Fe.state.directionalShadowMap.length>0&&se.setValue(P,"directionalShadowMap",Fe.state.directionalShadowMap,Rt),Fe.state.spotShadowMap.length>0&&se.setValue(P,"spotShadowMap",Fe.state.spotShadowMap,Rt),Fe.state.pointShadowMap.length>0&&se.setValue(P,"pointShadowMap",Fe.state.pointShadowMap,Rt)),W.isSkinnedMesh){se.setOptional(P,W,"bindMatrix"),se.setOptional(P,W,"bindMatrixInverse");let Ie=W.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),se.setValue(P,"boneTexture",Ie.boneTexture,Rt))}W.isBatchedMesh&&(se.setOptional(P,W,"batchingTexture"),se.setValue(P,"batchingTexture",W._matricesTexture,Rt),se.setOptional(P,W,"batchingIdTexture"),se.setValue(P,"batchingIdTexture",W._indirectTexture,Rt),se.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&se.setValue(P,"batchingColorTexture",W._colorsTexture,Rt));let ai=X.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&K.update(W,X,Oe),(ji||Lt.receiveShadow!==W.receiveShadow)&&(Lt.receiveShadow=W.receiveShadow,se.setValue(P,"receiveShadow",W.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&D.environment!==null&&(De.envMapIntensity.value=D.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=sg()),ji){if(se.setValue(P,"toneMappingExposure",C.toneMappingExposure),Lt.needsLights&&bu(De,an),It&&j.fog===!0&&st.refreshFogUniforms(De,It),st.refreshMaterialUniforms(De,j,gt,Dt,A.state.transmissionRenderTarget[I.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let Ie=y,be=0;for(let Si of A.state.lightProbeGridArray)Si.texture!==null&&(Ie.textures[be]=Si.texture,Ie.min[be]=Si.boundingBox.min,Ie.max[be]=Si.boundingBox.max,Ie.resolution[be]=Si.resolution,be++);for(let Si in Ie)Ie[Si].length=be;De.probesSH.value=Ie.textures,De.probesMin.value=Ie.min,De.probesMax.value=Ie.max,De.probesResolution.value=Ie.resolution}ts.upload(P,vl(Lt),De,Rt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ts.upload(P,vl(Lt),De,Rt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&se.setValue(P,"center",W.center),se.setValue(P,"modelViewMatrix",W.modelViewMatrix),se.setValue(P,"normalMatrix",W.normalMatrix),se.setValue(P,"modelMatrix",W.matrixWorld),j.uniformsGroups!==void 0){let Ie=j.uniformsGroups;for(let be=0,Si=Ie.length;be<Si;be++){let Rl=Ie[be];Nt.update(Rl,Oe),Nt.bind(Rl,Oe)}}return Oe}function bu(I,D){I.ambientLightColor.needsUpdate=D,I.lightProbe.needsUpdate=D,I.sunLights.needsUpdate=D,I.sunLightShadows.needsUpdate=D,I.directionalLights.needsUpdate=D,I.directionalLightShadows.needsUpdate=D,I.pointLights.needsUpdate=D,I.pointLightShadows.needsUpdate=D,I.spotLights.needsUpdate=D,I.spotLightShadows.needsUpdate=D,I.rectAreaLights.needsUpdate=D,I.hemisphereLights.needsUpdate=D}function Nu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(I,D,X){let j=mt.get(I);j.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),mt.get(I.texture).__webglTexture=D,mt.get(I.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:X,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,D){let X=mt.get(I);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(I,D=0,X=0){tt=I,Q=D,O=X;let j=null,W=!1,It=!1;if(I){let xt=mt.get(I);if(xt.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(P.FRAMEBUFFER,xt.__webglFramebuffer),$.copy(I.viewport),ft.copy(I.scissor),_t=I.scissorTest,it.viewport($),it.scissor(ft),it.setScissorTest(_t),V=-1;return}else if(xt.__webglFramebuffer===void 0)Rt.setupRenderTarget(I);else if(xt.__hasExternalTextures)Rt.rebindTextures(I,mt.get(I.texture).__webglTexture,mt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Wt=I.depthTexture;if(xt.__boundDepthTexture!==Wt){if(Wt!==null&&mt.has(Wt)&&(I.width!==Wt.image.width||I.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(I)}}let St=I.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(It=!0);let Pt=mt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?j=Pt[D][X]:j=Pt[D],W=!0):I.samples>0&&Rt.useMultisampledRTT(I)===!1?j=mt.get(I).__webglMultisampledFramebuffer:Array.isArray(Pt)?j=Pt[X]:j=Pt,$.copy(I.viewport),ft.copy(I.scissor),_t=I.scissorTest}else $.copy(at).multiplyScalar(gt).floor(),ft.copy(At).multiplyScalar(gt).floor(),_t=Et;if(X!==0&&(j=F),it.bindFramebuffer(P.FRAMEBUFFER,j)&&it.drawBuffers(I,j),it.viewport($),it.scissor(ft),it.setScissorTest(_t),W){let xt=mt.get(I.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,X)}else if(It){let xt=D;for(let St=0;St<I.textures.length;St++){let Pt=mt.get(I.textures[St]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+St,Pt.__webglTexture,X,xt)}}else if(I!==null&&X!==0){let xt=mt.get(I.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xt.__webglTexture,X)}V=-1};function Sl(I){let D=mt.get(I);return(D.__readFormat!==I.format||D.__readType!==I.type)&&(D.__readFormat=I.format,D.__readType=I.type,D.__formatReadable=Mt.textureFormatReadable(I.format),D.__typeReadable=Mt.textureTypeReadable(I.type)),D}this.readRenderTargetPixels=function(I,D,X,j,W,It,bt,xt=0){if(!(I&&I.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=mt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&bt!==void 0&&(St=St[bt],Array.isArray(St)&&(St=St[0])),St){it.bindFramebuffer(P.FRAMEBUFFER,St);try{let Pt=I.textures[xt],Wt=Pt.format,Kt=Pt.type;I.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt);let Ct=Sl(Pt);if(Ct.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=I.width-j&&X>=0&&X<=I.height-W&&P.readPixels(D,X,j,W,rt.convert(Wt),rt.convert(Kt),It)}finally{let Pt=tt!==null?mt.get(tt).__webglFramebuffer:null;it.bindFramebuffer(P.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(I,D,X,j,W,It,bt,xt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=mt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&bt!==void 0&&(St=St[bt],Array.isArray(St)&&(St=St[0])),St)if(D>=0&&D<=I.width-j&&X>=0&&X<=I.height-W){it.bindFramebuffer(P.FRAMEBUFFER,St);let Pt=I.textures[xt],Wt=Pt.format,Kt=Pt.type;I.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt);let Ct=Sl(Pt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.bufferData(P.PIXEL_PACK_BUFFER,It.byteLength,P.STREAM_READ),P.readPixels(D,X,j,W,rt.convert(Wt),rt.convert(Kt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ae=tt!==null?mt.get(tt).__webglFramebuffer:null;it.bindFramebuffer(P.FRAMEBUFFER,Ae);let me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await jc(P,me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,It),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer($t),P.deleteSync(me),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,D=null,X=0){let j=Math.pow(2,-X),W=Math.floor(I.image.width*j),It=Math.floor(I.image.height*j),bt=D!==null?D.x:0,xt=D!==null?D.y:0;Rt.setTexture2D(I,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,bt,xt,W,It),it.unbindTexture()},this.copyTextureToTexture=function(I,D,X=null,j=null,W=0,It=0){let bt,xt,St,Pt,Wt,Kt,Ct,$t,Ae,me=I.isCompressedTexture?I.mipmaps[It]:I.image;if(X!==null)bt=X.max.x-X.min.x,xt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Pt=X.min.x,Wt=X.min.y,Kt=X.isBox3?X.min.z:0;else{let se=Math.pow(2,-W);bt=Math.floor(me.width*se),xt=Math.floor(me.height*se),I.isDataArrayTexture?St=me.depth:I.isData3DTexture?St=Math.floor(me.depth*se):St=1,Pt=0,Wt=0,Kt=0}j!==null?(Ct=j.x,$t=j.y,Ae=j.z):(Ct=0,$t=0,Ae=0);let pe=rt.convert(D.format),ze=rt.convert(D.type),Lt;D.isData3DTexture?(Rt.setTexture3D(D,0),Lt=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Rt.setTexture2DArray(D,0),Lt=P.TEXTURE_2D_ARRAY):(Rt.setTexture2D(D,0),Lt=P.TEXTURE_2D),it.activeTexture(P.TEXTURE0),it.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),it.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),it.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let Fe=it.getParameter(P.UNPACK_ROW_LENGTH),oe=it.getParameter(P.UNPACK_IMAGE_HEIGHT),rn=it.getParameter(P.UNPACK_SKIP_PIXELS),Oe=it.getParameter(P.UNPACK_SKIP_ROWS),tr=it.getParameter(P.UNPACK_SKIP_IMAGES);it.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),it.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),it.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),it.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),it.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt);let ji=I.isDataArrayTexture||I.isData3DTexture,an=D.isDataArrayTexture||D.isData3DTexture;if(I.isDepthTexture){let se=mt.get(I),De=mt.get(D),ai=mt.get(se.__renderTarget),Ie=mt.get(De.__renderTarget);it.bindFramebuffer(P.READ_FRAMEBUFFER,ai.__webglFramebuffer),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let be=0;be<St;be++)ji&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.get(I).__webglTexture,W,Kt+be),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.get(D).__webglTexture,It,Ae+be)),P.blitFramebuffer(Pt,Wt,Pt+bt,Wt+xt,Ct,$t,Ct+bt,$t+xt,P.DEPTH_BUFFER_BIT,P.NEAREST);it.bindFramebuffer(P.READ_FRAMEBUFFER,null),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||I.isRenderTargetTexture||mt.has(I)){let se=mt.get(I),De=mt.get(D);it.bindFramebuffer(P.READ_FRAMEBUFFER,w),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,H);for(let ai=0;ai<St;ai++)ji?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,se.__webglTexture,W,Kt+ai):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,se.__webglTexture,W),an?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.__webglTexture,It,Ae+ai):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,De.__webglTexture,It),W!==0?P.blitFramebuffer(Pt,Wt,Pt+bt,Wt+xt,Ct,$t,Ct+bt,$t+xt,P.COLOR_BUFFER_BIT,P.NEAREST):an?P.copyTexSubImage3D(Lt,It,Ct,$t,Ae+ai,Pt,Wt,bt,xt):P.copyTexSubImage2D(Lt,It,Ct,$t,Pt,Wt,bt,xt);it.bindFramebuffer(P.READ_FRAMEBUFFER,null),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else an?I.isDataTexture||I.isData3DTexture?P.texSubImage3D(Lt,It,Ct,$t,Ae,bt,xt,St,pe,ze,me.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,It,Ct,$t,Ae,bt,xt,St,pe,me.data):P.texSubImage3D(Lt,It,Ct,$t,Ae,bt,xt,St,pe,ze,me):I.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,It,Ct,$t,bt,xt,pe,ze,me.data):I.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,It,Ct,$t,me.width,me.height,pe,me.data):P.texSubImage2D(P.TEXTURE_2D,It,Ct,$t,bt,xt,pe,ze,me);it.pixelStorei(P.UNPACK_ROW_LENGTH,Fe),it.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),it.pixelStorei(P.UNPACK_SKIP_PIXELS,rn),it.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),it.pixelStorei(P.UNPACK_SKIP_IMAGES,tr),It===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&P.generateMipmap(Lt),it.unbindTexture()},this.initRenderTarget=function(I){mt.get(I).__webglFramebuffer===void 0&&Rt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Rt.setTextureCube(I,0):I.isData3DTexture?Rt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Rt.setTexture2DArray(I,0):Rt.setTexture2D(I,0),it.unbindTexture()},this.resetState=function(){Q=0,O=0,tt=null,it.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ja=class extends Pi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Qi;t.deleteAttribute("uv");let e=new pn({side:_e}),i=new pn,s=new Os(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ts(t,i,6),o=new Le;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new fe(t,ns(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new fe(t,ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new fe(t,ns(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new fe(t,ns(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new fe(t,ns(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new fe(t,ns(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ns(n){return new Ls({color:0,emissive:16777215,emissiveIntensity:n})}var ss={silkNormal:"/assets/li/silkNormal.jpg",silkRoughness:"/assets/li/silkRoughness.jpg",silkColor:"/assets/li/silkColor.jpg",paperColor:"/assets/li/paperColor.jpg",paperBump:"/assets/li/paperBump.jpg",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTIyLjQiIGhlaWdodD0iMTQwNy40IiB2aWV3Qm94PSItMTE4LjIgLTk1Mi4yIDQ1MjIuNCAxNDA3LjQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTM2NSAxMTVRMTM1MCAxMTMgMTMyNC4wIDEwNy41UTEyOTggMTAyIDEyNzEuMCA4Ni4wUTEyNDQgNzAgMTIyNS4wIDM3LjVRMTIwNiA1IDEyMDYgLTQ5UTEyMDYgLTExMSAxMjMxLjUgLTE4NS41UTEyNTcgLTI2MCAxMjk0LjAgLTM0MS4wUTEzMzEgLTQyMiAxMzY1IC01MDFRMTM5MiAtNTY0IDEzOTIgLTU5N1ExMzkyIC02MzAgMTM2NyAtNjMwUTEzMzkgLTYzMCAxMjgzLjUgLTU4NS41UTEyMjggLTU0MSAxMTU1IC00NTFRMTEzNiAtNDI3IDExMDYuMCAtMzg0LjVRMTA3NiAtMzQyIDEwNDIuMCAtMjkwLjVRMTAwOCAtMjM5IDk3NS41IC0xODYuNVE5NDMgLTEzNCA5MTguNSAtOTAuMFE4OTQgLTQ2IDg4MyAtMjBRODcwIDExIDg1My4wIDIyLjVRODM2IDM0IDgyMSAzNFE4MDggMzQgNzk5IDI3UTc4OSAyMCA3ODkgMTBRNzg5IDQgNzkyIDBRNzk4IC0xMiA4MjIuMCAtNTUuMFE4NDYgLTk4IDg3OC4wIC0xNjkuMFE5MTAgLTI0MCA5MzkgLTMzNFE5NDggLTM2MyA5NTcuNSAtNDAxLjBROTY3IC00MzkgOTc1LjAgLTQ3OS41UTk4MyAtNTIwIDk4OC41IC01NTUuNVE5OTQgLTU5MSA5OTQgLTYxM1E5OTQgLTY0OCA5ODIuMCAtNjY0LjVROTcwIC02ODEgOTUwIC02ODFROTI4IC02ODEgOTAwLjAgLTY2Mi4wUTg3MiAtNjQzIDg0MyAtNjA3UTc5MyAtNTQ0IDc1NS4wIC00OTAuNVE3MTcgLTQzNyA2ODUuNSAtMzg0LjBRNjU0IC0zMzEgNjIzLjUgLTI3MS4wUTU5MyAtMjExIDU1OS4wIC0xMzYuNVE1MjUgLTYyIDQ4MSAzNlE0NzQgNTIgNDU3LjUgNTkuMFE0NDEgNjYgNDI3IDY2UTQxMyA2NiA0MDQuMCA2MC4wUTM5NSA1NCAzOTggNDNRNDIwIDggNDQ3LjAgLTQ0LjVRNDc0IC05NyA1MDIuMCAtMTYxLjBRNTMwIC0yMjUgNTU2LjAgLTI5NC4wUTU4MiAtMzYzIDYwMi41IC00MjkuMFE2MjMgLTQ5NSA2MzUuMCAtNTUzLjBRNjQ3IC02MTEgNjQ3IC02NTJRNjQ3IC03MjkgNjE0LjUgLTc2Mi4wUTU4MiAtNzk1IDUzMSAtNzk1UTQ4NiAtNzk1IDQzMi4wIC03NzMuMFEzNzggLTc1MSAzMjMuNSAtNzEzLjBRMjY5IC02NzUgMjIxIC02MjdRMTUyIC01NTggMTEyLjUgLTQ3Ny4wUTczIC0zOTYgNzMgLTMxM1E3MyAtMjU3IDk0LjAgLTIxOC4wUTExNSAtMTc5IDE0OS41IC0xNTkuMFExODQgLTEzOSAyMjYgLTEzOVEyNjkgLTEzOSAzMDYuNSAtMTYwLjVRMzQ0IC0xODIgMzcyLjUgLTIxNi41UTQwMSAtMjUxIDQxNy4wIC0yODkuNVE0MzMgLTMyOCA0MzMgLTM2MlE0MzMgLTM5MSA0MTcuMCAtNDEwLjBRNDAxIC00MjkgMzY2IC00MjlRMzYyIC00MjkgMzU3LjUgLTQyOC41UTM1MyAtNDI4IDM0OCAtNDI4SDM0NVEzMzggLTQyOCAzMzIuMCAtNDMwLjVRMzI2IC00MzMgMzI2IC00MzdRMzI2IC00NDEgMzM2LjUgLTQ0Ni4wUTM0NyAtNDUxIDM3NSAtNDUxUTQyMCAtNDUxIDQ0Mi41IC00MjQuNVE0NjUgLTM5OCA0NjUgLTM1N1E0NjUgLTMxNyA0NDQuNSAtMjc1LjBRNDI0IC0yMzMgMzg5LjAgLTE5Ny4wUTM1NCAtMTYxIDMxMC41IC0xMzkuMFEyNjcgLTExNyAyMjEgLTExN1ExNjcgLTExNyAxMjAuNSAtMTQyLjBRNzQgLTE2NyA0Ni4wIC0yMTQuNVExOCAtMjYyIDE4IC0zMjhRMTggLTM5MSA0NC4wIC00NTIuNVE3MCAtNTE0IDExMS41IC01NjguNVExNTMgLTYyMyAyMDAgLTY2NVEyNTIgLTcxMiAzMTAuMCAtNzQ1LjVRMzY4IC03NzkgNDI1LjUgLTc5Ny41UTQ4MyAtODE2IDUzMyAtODE2UTYwNyAtODE2IDY1NS41IC03NzIuMFE3MDQgLTcyOCA3MDQgLTYzMFE3MDQgLTU5MCA2OTMuMCAtNTM4LjVRNjgyIC00ODcgNjY3LjAgLTQzNS41UTY1MiAtMzg0IDYzOCAtMzQ0SDY0MFE2NzYgLTQwOSA3MDQuNSAtNDU1LjVRNzMzIC01MDIgNzYyLjAgLTU0Mi4wUTc5MSAtNTgyIDgyNyAtNjI2UTg1OCAtNjYzIDg5OC4wIC02ODUuMFE5MzggLTcwNyA5NzUgLTcwN1ExMDA4IC03MDcgMTAzMS4wIC02ODUuMFExMDU0IC02NjMgMTA1NCAtNjEwUTEwNTQgLTYwNCAxMDU0LjAgLTYwMC4wUTEwNTQgLTU5NiAxMDUzIC01ODhRMTA0NCAtNDkyIDEwMTUuMCAtMzk5LjVROTg2IC0zMDcgOTU1IC0yMTNROTg2IC0yNjEgMTAzOS4wIC0zMzUuMFExMDkyIC00MDkgMTE1NSAtNDg4UTEyMzIgLTU4NCAxMjk4LjAgLTYzMi4wUTEzNjQgLTY4MCAxNDA3IC02ODBRMTQ2MSAtNjgwIDE0NjEgLTYxNFExNDYxIC01ODkgMTQ1MS41IC01NTQuMFExNDQyIC01MTkgMTQyMiAtNDgwUTE0MDAgLTQzNiAxMzczLjUgLTM3OC41UTEzNDcgLTMyMSAxMzIzLjAgLTI1OC4wUTEyOTkgLTE5NSAxMjgzLjUgLTEzNC41UTEyNjggLTc0IDEyNjggLTIzUTEyNjggMzIgMTI5My41IDY1LjVRMTMxOSA5OSAxMzgyIDk5SDEzODhRMTQwMyA5OSAxNDAzIDEwNVExNDAzIDEwOSAxMzkzLjAgMTEzLjBRMTM4MyAxMTcgMTM2NSAxMTVaTTEyOTkgOFExMzM1IC02NSAxMzY4LjAgLTEzNi41UTE0MDEgLTIwOCAxNDM2IC0yNzNRMTQ1NiAtMzA5IDE0NzAuMCAtMzIzLjVRMTQ4NCAtMzM4IDE1MDcgLTMzOFExNTE1IC0zMzggMTUyNC4wIC0zMzUuNVExNTMzIC0zMzMgMTU0MiAtMzMzUTE1NDggLTMzMyAxNTUxIC0zMzRRMTUzNyAtMzI2IDE1MTQuNSAtMjk0LjVRMTQ5MiAtMjYzIDE0NjkuMCAtMjIyLjBRMTQ0NiAtMTgxIDE0MjggLTE0NVExNDQ3IC0xNjggMTQ2OC4wIC0xOTEuMFExNDg5IC0yMTQgMTUxNCAtMjM1UTE1MzggLTI1NiAxNTcxLjUgLTI3OC41UTE2MDUgLTMwMSAxNjM3LjAgLTMxNi4wUTE2NjkgLTMzMSAxNjg4IC0zMzFRMTY5NSAtMzMxIDE2OTggLTMzMFExNjk4IC0zMzAgMTY4Ny4wIC0zMTAuNVExNjc2IC0yOTEgMTY1OS41IC0yNTkuNVExNjQzIC0yMjggMTYyNi4wIC0xOTIuNVExNjA5IC0xNTcgMTU5NS41IC0xMjQuNVExNTgyIC05MiAxNTc4IC03MFExNTc1IC01NyAxNTc1IC00NlExNTc1IC0zMCAxNTgxLjAgLTI1LjBRMTU4NyAtMjAgMTU5NCAtMjBRMTYxMyAtMjAgMTYzMy4wIC0zNy4wUTE2NTMgLTU0IDE2NzEuNSAtODAuNVExNjkwIC0xMDcgMTcwNi4wIC0xMzcuMFExNzIyIC0xNjcgMTczMyAtMTkzUTE3NDUgLTE5MyAxNzQ1IC0xODRRMTczNCAtMTU3IDE3MTcuNSAtMTI0LjVRMTcwMSAtOTIgMTY4MC41IC02My4wUTE2NjAgLTM0IDE2MzUuMCAtMTUuMFExNjEwIDQgMTU4MSA0UTE1NjEgNCAxNTM5LjUgLTEwLjBRMTUxOCAtMjQgMTUxOCAtNjJRMTUxOCAtNzMgMTUyMC4wIC04NS41UTE1MjIgLTk4IDE1MjcgLTExM1ExNTM1IC0xMzMgMTU0Ni4wIC0xNTYuMFExNTU3IC0xNzkgMTU4MiAtMjE5UTE1ODkgLTIzMCAxNTkwLjUgLTIzNi4wUTE1OTIgLTI0MiAxNTkyIC0yNDZRMTU5MiAtMjU4IDE1ODEgLTI1OFExNTcyIC0yNTggMTU1NC41IC0yNDguMFExNTM3IC0yMzggMTUxMSAtMjEzUTE0ODYgLTE4OSAxNDUxLjUgLTE0NS4wUTE0MTcgLTEwMSAxMzcyIC0xNVExMzY1IC0yIDEzNTYuNSAtMS4wUTEzNDggMCAxMzMzIDFRMTMyMyAyIDEzMTQuMCAyLjVRMTMwNSAzIDEyOTkgOFpNMTM3MiAzMTlRMTMyMCAzMTkgMTI5OC41IDI5OC41UTEyNzcgMjc4IDEyNzcgMjUwUTEyNzcgMjIzIDEyOTIgMTk2UTEzMDYgMTY3IDEzMzEuMCAxNDYuNVExMzU2IDEyNiAxMzg2IDExMlExNDM3IDg4IDE1MDMuNSA3My4wUTE1NzAgNTggMTYzMSA0MFExNjM5IDI2IDE2NDcuNSAxMS4wUTE2NTYgLTQgMTY2MyAtMThRMTY4MyAtNTggMTcwMC4wIC05Ny41UTE3MTcgLTEzNyAxNzQyIC0xODNRMTczMyAtMTgzIDE3MzMgLTE5M0wxNzc3IC0yOTRRMTc3OCAtMjk2IDE3NzkuMCAtMjk5LjVRMTc4MCAtMzAzIDE3ODAgLTMwN1ExNzgwIC0zMTggMTc3NS4wIC0zMjUuNVExNzcwIC0zMzMgMTc2OCAtMzM2TDE4MjMgLTMzOEgxODI4UTE4NTAgLTMzOCAxODUwIC0zMjRRMTg1MCAtMzE3IDE4NDQgLTMwMkwxNzY0IC0xMTRRMTc1MCAtODEgMTczNC4wIC00OC4wUTE3MTggLTE1IDE3MDEgMTlRMTc3MSAtOCAxODEyLjUgLTQ3LjVRMTg1NCAtODcgMTg3Ni41IC0xMjYuNVExODk5IC0xNjYgMTkxMSAtMTkzUTE5MjMgLTE5MyAxOTIzIC0xODRRMTkxMyAtMTYyIDE4OTcuMCAtMTMxLjVRMTg4MSAtMTAxIDE4NTUuMCAtNjcuNVExODI5IC0zNCAxNzg4LjAgLTMuMFExNzQ3IDI4IDE2ODUgNTFRMTY2MSA5NCAxNjMwLjAgMTQwLjVRMTU5OSAxODcgMTU2MC4wIDIyNy41UTE1MjEgMjY4IDE0NzQuNSAyOTMuNVExNDI4IDMxOSAxMzcyIDMxOVpNMTM0OCAyOTlRMTM4MSAyOTkgMTQxNi41IDI3OS4wUTE0NTIgMjU5IDE0ODUuMCAyMjguNVExNTE4IDE5OCAxNTQ1LjUgMTY2LjBRMTU3MyAxMzQgMTU5MCAxMTBRMTU5NiAxMDIgMTYwMS4wIDkyLjBRMTYwNiA4MiAxNjExIDcyUTE1NjMgODUgMTUwNS4wIDEwMC41UTE0NDcgMTE2IDE0MDMgMTM1UTEzNTUgMTU1IDEzMjguMCAxOTEuNVExMzAxIDIyOCAxMzAxIDI1N1ExMzAxIDI3NiAxMzEyLjUgMjg3LjVRMTMyNCAyOTkgMTM0OCAyOTlaTTE4NTIgLTQwMFExODM5IC00MDAgMTgyOS41IC00MTAuMFExODIwIC00MjAgMTgyMCAtNDM0UTE4MjAgLTQ1MSAxODM0LjAgLTQ2NC41UTE4NDggLTQ3OCAxODY1IC00NzhRMTg3OSAtNDc4IDE4ODkuMCAtNDY5LjBRMTg5OSAtNDYwIDE4OTkgLTQ0NlExODk5IC00MjggMTg4NS4wIC00MTQuMFExODcxIC00MDAgMTg1MiAtNDAwWk0yMTI4IDNRMjEwNSAzIDIwODcuNSAtMTAuMFEyMDcwIC0yMyAyMDcwIC02M1EyMDcwIC04MCAyMDcyLjUgLTk1LjBRMjA3NSAtMTEwIDIwNzkgLTEyN1EyMDcwIC0xMTIgMjA1NC4wIC05MC4wUTIwMzggLTY4IDIwMTguNSAtNDcuMFExOTk5IC0yNiAxOTc4LjUgLTEyLjBRMTk1OCAyIDE5NDAgMlExOTE0IDIgMTg5OC4wIC0yMS41UTE4ODIgLTQ1IDE4ODIgLTgzUTE4ODIgLTEyNCAxOTAxLjAgLTE3MS4wUTE5MjAgLTIxOCAxOTUzLjAgLTI2MS4wUTE5ODYgLTMwNCAyMDI5LjAgLTMzMS4wUTIwNzIgLTM1OCAyMTE5IC0zNThRMjE0MiAtMzU4IDIxNjMuMCAtMzUwLjVRMjE4NCAtMzQzIDIyMDAgLTMyNlEyMjA3IC0zMTkgMjIwNyAtMzEwUTIyMDcgLTMwNCAyMjAyLjAgLTMwMC4wUTIxOTcgLTI5NiAyMTg5IC0yOThRMjE3OCAtMzMzIDIxNDIgLTMzM1EyMTI1IC0zMzMgMjEwMyAtMzIyUTIwNzYgLTMwOCAyMDQ1LjUgLTI3Ny41UTIwMTUgLTI0NyAxOTg4LjUgLTIwOC41UTE5NjIgLTE3MCAxOTQ1LjAgLTEzMS4wUTE5MjggLTkyIDE5MjggLTYwUTE5MjggLTI3IDE5NTMgLTI3UTE5NzUgLTI3IDE5OTguNSAtNDguMFEyMDIyIC02OSAyMDQzLjUgLTEwMC41UTIwNjUgLTEzMiAyMDgzLjAgLTE2My4wUTIxMDEgLTE5NCAyMTExIC0yMTNRMjEyNiAtMjQwIDIxMzkuMCAtMjU4LjBRMjE1MiAtMjc2IDIxNzYgLTI3NlEyMTg3IC0yNzYgMjE5OC4wIC0yNzMuMFEyMjA5IC0yNzAgMjIyMSAtMjcyUTIxOTEgLTI0MiAyMTY4LjUgLTIwMS4wUTIxNDYgLTE2MCAyMTM0LjAgLTEyMC41UTIxMjIgLTgxIDIxMjIgLTU0UTIxMjIgLTI0IDIxNDIgLTI0UTIxNTggLTI0IDIxNzYuNSAtNDIuMFEyMTk1IC02MCAyMjEyLjUgLTg3LjVRMjIzMCAtMTE1IDIyNDUuMCAtMTQzLjVRMjI2MCAtMTcyIDIyNjkgLTE5M1EyMjc0IC0xOTMgMjI3Ny41IC0xOTIuMFEyMjgxIC0xOTEgMjI4MSAtMTg0UTIyODAgLTE4MCAyMjc3LjUgLTE3NS41UTIyNzUgLTE3MSAyMjcwIC0xNjBRMjI2MiAtMTQ0IDIyNDguMCAtMTE3LjBRMjIzNCAtOTAgMjIxNS4wIC02Mi41UTIxOTYgLTM1IDIxNzQuMCAtMTYuMFEyMTUyIDMgMjEyOCAzWk0yMjk4IDBRMjI4NyAwIDIyNzEuNSAtNS4wUTIyNTYgLTEwIDIyNDQuNSAtMjMuNVEyMjMzIC0zNyAyMjMzIC02NFEyMjMzIC05MCAyMjUwLjAgLTEyNC4wUTIyNjcgLTE1OCAyMjgwIC0xODRRMjI2OSAtMTg0IDIyNjkgLTE5M1EyMjcwIC0xOTYgMjI3OC4wIC0yMTIuMFEyMjg2IC0yMjggMjI5Ny4wIC0yNTAuMFEyMzA4IC0yNzIgMjMxOC41IC0yOTIuNVEyMzI5IC0zMTMgMjMzNSAtMzI0UTIzNDcgLTM0NiAyMzczIC0zNDZIMjQzNVEyNDE4IC0zMzMgMjQwNC41IC0zMTcuNVEyMzkxIC0zMDIgMjM3MSAtMjYxUTIzNzEgLTI2MSAyMzY0LjAgLTI0Ny4wUTIzNTcgLTIzMyAyMzQ2LjUgLTIxMS41UTIzMzYgLTE5MCAyMzI1LjUgLTE2OC4wUTIzMTUgLTE0NiAyMzA4IC0xMzFRMjI5NSAtMTAzIDIyOTEuMCAtODYuNVEyMjg3IC03MCAyMjg3IC01NlEyMjg3IC0yMyAyMzA5IC0yM1EyMzMzIC0yMyAyMzY3IC02MlEyMzk1IC05NSAyNDIyLjAgLTE0MS4wUTI0NDkgLTE4NyAyNDczLjUgLTIzNi4wUTI0OTggLTI4NSAyNTE3IC0zMjRRMjUyOCAtMzQ2IDI1NTYgLTM0NkgyNjExUTI1ODkgLTMyOCAyNTY2LjUgLTI5Mi4wUTI1NDQgLTI1NiAyNTE3IC0yMDBRMjUxMCAtMTg1IDI0OTkuMCAtMTYyLjBRMjQ4OCAtMTM5IDI0NzkuNSAtMTEzLjBRMjQ3MSAtODcgMjQ3MSAtNjFRMjQ3MSAtMjYgMjQ5NiAtMjZRMjUzMCAtMjYgMjU2Mi4wIC03My4wUTI1OTQgLTEyMCAyNjI1IC0xOTNRMjYzMyAtMTkzIDI2MzQuNSAtMTkyLjBRMjYzNiAtMTkxIDI2MzcgLTE4NFEyNjI2IC0xNTcgMjYxMC41IC0xMjUuNVEyNTk1IC05NCAyNTc1LjUgLTY1LjBRMjU1NiAtMzYgMjUzMi41IC0xOC4wUTI1MDkgMCAyNDgxIDBRMjQ1NiAwIDI0NDAuMCAtMTguNVEyNDI0IC0zNyAyNDI0IC03MVEyNDI0IC05OCAyNDM0IC0xMjlRMjQxNyAtOTkgMjM5NS4wIC02OS4wUTIzNzMgLTM5IDIzNDguMCAtMTkuNVEyMzIzIDAgMjI5OCAwWk0yNDY4IDI3M1EyNDU2IDI3MyAyNDQzLjUgMjY5LjVRMjQzMSAyNjYgMjQxOCAyNjhRMjQyNCAyNjIgMjQ0MS4wIDIzMy41UTI0NTggMjA1IDI0ODEuMCAxNjIuNVEyNTA0IDEyMCAyNTI4LjUgNzAuNVEyNTUzIDIxIDI1NzYuMCAtMjcuNVEyNTk5IC03NiAyNjE1LjUgLTExNy41UTI2MzIgLTE1OSAyNjM3IC0xODRRMjYzMiAtMTg0IDI2MjguMCAtMTg2LjBRMjYyNCAtMTg4IDI2MjUgLTE5M1EyNjI1IC0xOTMgMjYzMS4wIC0yMTEuMFEyNjM3IC0yMjkgMjY0My4wIC0yNTQuNVEyNjQ5IC0yODAgMjY0OSAtMzAxUTI2NDkgLTMxNSAyNjQ2LjAgLTMyNS4wUTI2NDMgLTMzNSAyNjM1IC0zMzZMMjY4NSAtMzQ0UTI2OTEgLTM0NSAyNjk2LjAgLTM0NS41UTI3MDEgLTM0NiAyNzA1IC0zNDZRMjcxNCAtMzQ2IDI3MTcuNSAtMzM5LjVRMjcyMSAtMzMzIDI3MjEgLTMxM1EyNzIxIC0yODggMjcxMi41IC0yNDkuNVEyNzA0IC0yMTEgMjY5MyAtMTgyUTI3MDQgLTIwMCAyNzIxLjUgLTIyOC4wUTI3MzkgLTI1NiAyNzYyLjAgLTI4NS4wUTI3ODUgLTMxNCAyODEwLjAgLTMzMy41UTI4MzUgLTM1MyAyODU5IC0zNTNRMjg2NCAtMzUzIDI4NzIgLTM1MVEyOTAwIC0zNDQgMjkxMS41IC0zMjMuNVEyOTIzIC0zMDMgMjkyMyAtMjc1UTI5MjMgLTI0NSAyOTExLjUgLTIwOS4wUTI5MDAgLTE3MyAyODgxLjAgLTEzOC41UTI4NjIgLTEwNCAyODM5IC03NlEyODExIC00MSAyNzcyLjAgLTIwLjBRMjczMyAxIDI2OTIgMVEyNjU1IDEgMjYyMyAtMThMMjUyOCAyMjFRMjUxNCAyNTEgMjUwMS4wIDI2Mi4wUTI0ODggMjczIDI0NjggMjczWk0yNjYwIC0yMFEyNjg4IC0yMCAyNzIzLjAgLTQ2LjBRMjc1OCAtNzIgMjc5MC41IC0xMTIuNVEyODIzIC0xNTMgMjg0NSAtMTk0UTI4NjAgLTIyMiAyODY3LjAgLTI0NS41UTI4NzQgLTI2OSAyODc0IC0yODZRMjg3NCAtMzI1IDI4NDYgLTMyNVEyODMzIC0zMjUgMjgxMi41IC0zMTEuMFEyNzkyIC0yOTcgMjc2NSAtMjYwUTI3MzYgLTIyMCAyNzAxLjUgLTE1OS41UTI2NjcgLTk5IDI2MzEgLTMyUTI2NDMgLTIwIDI2NjAgLTIwWk0yOTYyIC0xOTZRMjk3MCAtMjEzIDI5ODMuMCAtMjUwLjVRMjk5NiAtMjg4IDMwMTAuMCAtMzM0LjBRMzAyNCAtMzgwIDMwMzEgLTQyMVEzMDM0IC00MzcgMzA0Mi4wIC00NDQuNVEzMDUwIC00NTIgMzA1OSAtNDUyUTMwNzIgLTQ1MiAzMDgzLjAgLTQzOS41UTMwOTQgLTQyNyAzMDk0IC00MDRRMzA5NCAtMzc2IDMwNzcuNSAtMzU2LjBRMzA2MSAtMzM2IDMwMzcgLTMxOFEzMDQ3IC0zMTcgMzA1OC4wIC0zMTYuNVEzMDY5IC0zMTYgMzA4MiAtMzE2UTMxMjkgLTMxNiAzMTc1IC0zMjJRMzE3NyAtMzE2IDMxNzcgLTMxM1EzMTc3IC0zMDAgMzE2OS41IC0yODAuMFEzMTYyIC0yNjAgMzE1NCAtMjQ0UTMxNTAgLTIzNSAzMTM4LjAgLTIxMS41UTMxMjYgLTE4OCAzMTEyLjAgLTE1OC41UTMwOTggLTEyOSAzMDg4LjUgLTEwMC41UTMwNzkgLTcyIDMwNzkgLTUyUTMwNzkgLTI2IDMwOTkgLTI2UTMxMTggLTI2IDMxNTIuMCAtNzAuNVEzMTg2IC0xMTUgMzIyMCAtMTkzUTMyMzIgLTE5MyAzMjMyIC0xODRRMzIyMSAtMTU3IDMyMDQuNSAtMTI1LjBRMzE4OCAtOTMgMzE2OC4wIC02NC41UTMxNDggLTM2IDMxMjUuMCAtMTcuNVEzMTAyIDEgMzA3NyAxUTMwNTggMSAzMDM5LjAgLTE0LjVRMzAyMCAtMzAgMzAyMCAtNjVRMzAyMCAtOTYgMzAzMi4wIC0xMjUuNVEzMDQ0IC0xNTUgMzA1OS4wIC0xODEuMFEzMDc0IC0yMDcgMzA4Ni4wIC0yMjcuMFEzMDk4IC0yNDcgMzA5OCAtMjU5UTMwOTggLTI3NyAzMDc1LjUgLTI4NS4wUTMwNTMgLTI5MyAzMDE3IC0yOTRRMjk5OSAtMjQ4IDI5OTAuMCAtMjI2LjBRMjk4MSAtMjA0IDI5NzMgLTE4NFEyOTU3IC0xODQgMjk2MiAtMTk2Wk0zMjIxIC0xOTZRMzIyOSAtMjEzIDMyNDIuMCAtMjUwLjVRMzI1NSAtMjg4IDMyNjkuMCAtMzM0LjBRMzI4MyAtMzgwIDMyOTAgLTQyMVEzMjkzIC00MzcgMzMwMS4wIC00NDQuNVEzMzA5IC00NTIgMzMxOCAtNDUyUTMzMzEgLTQ1MiAzMzQyLjAgLTQzOS41UTMzNTMgLTQyNyAzMzUzIC00MDRRMzM1MyAtMzc2IDMzMzYuNSAtMzU2LjBRMzMyMCAtMzM2IDMyOTYgLTMxOFEzMzA2IC0zMTcgMzMxNy4wIC0zMTYuNVEzMzI4IC0zMTYgMzM0MSAtMzE2UTMzODggLTMxNiAzNDM0IC0zMjJRMzQzNiAtMzE2IDM0MzYgLTMxM1EzNDM2IC0zMDAgMzQyOC41IC0yODAuMFEzNDIxIC0yNjAgMzQxMyAtMjQ0UTM0MDkgLTIzNSAzMzk3LjAgLTIxMS41UTMzODUgLTE4OCAzMzcxLjAgLTE1OC41UTMzNTcgLTEyOSAzMzQ3LjUgLTEwMC41UTMzMzggLTcyIDMzMzggLTUyUTMzMzggLTI2IDMzNTggLTI2UTMzNzcgLTI2IDM0MTEuMCAtNzAuNVEzNDQ1IC0xMTUgMzQ3OSAtMTkzUTM0OTEgLTE5MyAzNDkxIC0xODRRMzQ4MCAtMTU3IDM0NjMuNSAtMTI1LjBRMzQ0NyAtOTMgMzQyNy4wIC02NC41UTM0MDcgLTM2IDMzODQuMCAtMTcuNVEzMzYxIDEgMzMzNiAxUTMzMTcgMSAzMjk4LjAgLTE0LjVRMzI3OSAtMzAgMzI3OSAtNjVRMzI3OSAtOTYgMzI5MS4wIC0xMjUuNVEzMzAzIC0xNTUgMzMxOC4wIC0xODEuMFEzMzMzIC0yMDcgMzM0NS4wIC0yMjcuMFEzMzU3IC0yNDcgMzM1NyAtMjU5UTMzNTcgLTI3NyAzMzM0LjUgLTI4NS4wUTMzMTIgLTI5MyAzMjc2IC0yOTRRMzI1OCAtMjQ4IDMyNDkuMCAtMjI2LjBRMzI0MCAtMjA0IDMyMzIgLTE4NFEzMjE2IC0xODQgMzIyMSAtMTk2Wk0zNDgwIC0xOTZRMzQ4OCAtMjEzIDM1MDEuMCAtMjUwLjVRMzUxNCAtMjg4IDM1MjguMCAtMzM0LjBRMzU0MiAtMzgwIDM1NDkgLTQyMVEzNTUyIC00MzcgMzU2MC4wIC00NDQuNVEzNTY4IC00NTIgMzU3NyAtNDUyUTM1OTAgLTQ1MiAzNjAxLjAgLTQzOS41UTM2MTIgLTQyNyAzNjEyIC00MDRRMzYxMiAtMzc2IDM1OTUuNSAtMzU2LjBRMzU3OSAtMzM2IDM1NTUgLTMxOFEzNTY1IC0zMTcgMzU3Ni4wIC0zMTYuNVEzNTg3IC0zMTYgMzYwMCAtMzE2UTM2NDcgLTMxNiAzNjkzIC0zMjJRMzY5NSAtMzE2IDM2OTUgLTMxM1EzNjk1IC0zMDAgMzY4Ny41IC0yODAuMFEzNjgwIC0yNjAgMzY3MiAtMjQ0UTM2NjggLTIzNSAzNjU2LjAgLTIxMS41UTM2NDQgLTE4OCAzNjMwLjAgLTE1OC41UTM2MTYgLTEyOSAzNjA2LjUgLTEwMC41UTM1OTcgLTcyIDM1OTcgLTUyUTM1OTcgLTI2IDM2MTcgLTI2UTM2MzYgLTI2IDM2NzAuMCAtNzAuNVEzNzA0IC0xMTUgMzczOCAtMTkzUTM3NTAgLTE5MyAzNzUwIC0xODRRMzczOSAtMTU3IDM3MjIuNSAtMTI1LjBRMzcwNiAtOTMgMzY4Ni4wIC02NC41UTM2NjYgLTM2IDM2NDMuMCAtMTcuNVEzNjIwIDEgMzU5NSAxUTM1NzYgMSAzNTU3LjAgLTE0LjVRMzUzOCAtMzAgMzUzOCAtNjVRMzUzOCAtOTYgMzU1MC4wIC0xMjUuNVEzNTYyIC0xNTUgMzU3Ny4wIC0xODEuMFEzNTkyIC0yMDcgMzYwNC4wIC0yMjcuMFEzNjE2IC0yNDcgMzYxNiAtMjU5UTM2MTYgLTI3NyAzNTkzLjUgLTI4NS4wUTM1NzEgLTI5MyAzNTM1IC0yOTRRMzUxNyAtMjQ4IDM1MDguMCAtMjI2LjBRMzQ5OSAtMjA0IDM0OTEgLTE4NFEzNDc1IC0xODQgMzQ4MCAtMTk2Wk0zNzM5IC0xOTZRMzc0NyAtMjEzIDM3NjAuMCAtMjUwLjVRMzc3MyAtMjg4IDM3ODcuMCAtMzM0LjBRMzgwMSAtMzgwIDM4MDggLTQyMVEzODExIC00MzcgMzgxOS4wIC00NDQuNVEzODI3IC00NTIgMzgzNiAtNDUyUTM4NDkgLTQ1MiAzODYwLjAgLTQzOS41UTM4NzEgLTQyNyAzODcxIC00MDRRMzg3MSAtMzc2IDM4NTQuNSAtMzU2LjBRMzgzOCAtMzM2IDM4MTQgLTMxOFEzODI0IC0zMTcgMzgzNS4wIC0zMTYuNVEzODQ2IC0zMTYgMzg1OSAtMzE2UTM5MDYgLTMxNiAzOTUyIC0zMjJRMzk1NCAtMzE2IDM5NTQgLTMxM1EzOTU0IC0zMDAgMzk0Ni41IC0yODAuMFEzOTM5IC0yNjAgMzkzMSAtMjQ0UTM5MjcgLTIzNSAzOTE1LjAgLTIxMS41UTM5MDMgLTE4OCAzODg5LjAgLTE1OC41UTM4NzUgLTEyOSAzODY1LjUgLTEwMC41UTM4NTYgLTcyIDM4NTYgLTUyUTM4NTYgLTI2IDM4NzYgLTI2UTM4OTUgLTI2IDM5MjkuMCAtNzAuNVEzOTYzIC0xMTUgMzk5NyAtMTkzUTQwMDkgLTE5MyA0MDA5IC0xODRRMzk5OCAtMTU3IDM5ODEuNSAtMTI1LjBRMzk2NSAtOTMgMzk0NS4wIC02NC41UTM5MjUgLTM2IDM5MDIuMCAtMTcuNVEzODc5IDEgMzg1NCAxUTM4MzUgMSAzODE2LjAgLTE0LjVRMzc5NyAtMzAgMzc5NyAtNjVRMzc5NyAtOTYgMzgwOS4wIC0xMjUuNVEzODIxIC0xNTUgMzgzNi4wIC0xODEuMFEzODUxIC0yMDcgMzg2My4wIC0yMjcuMFEzODc1IC0yNDcgMzg3NSAtMjU5UTM4NzUgLTI3NyAzODUyLjUgLTI4NS4wUTM4MzAgLTI5MyAzNzk0IC0yOTRRMzc3NiAtMjQ4IDM3NjcuMCAtMjI2LjBRMzc1OCAtMjA0IDM3NTAgLTE4NFEzNzM0IC0xODQgMzczOSAtMTk2Wk0zOTk4IC0xOTZRNDAwNiAtMjEzIDQwMTkuMCAtMjUwLjVRNDAzMiAtMjg4IDQwNDYuMCAtMzM0LjBRNDA2MCAtMzgwIDQwNjcgLTQyMVE0MDcwIC00MzcgNDA3OC4wIC00NDQuNVE0MDg2IC00NTIgNDA5NSAtNDUyUTQxMDggLTQ1MiA0MTE5LjAgLTQzOS41UTQxMzAgLTQyNyA0MTMwIC00MDRRNDEzMCAtMzc2IDQxMTMuNSAtMzU2LjBRNDA5NyAtMzM2IDQwNzMgLTMxOFE0MDgzIC0zMTcgNDA5NC4wIC0zMTYuNVE0MTA1IC0zMTYgNDExOCAtMzE2UTQxNjUgLTMxNiA0MjExIC0zMjJRNDIxMyAtMzE2IDQyMTMgLTMxM1E0MjEzIC0zMDAgNDIwNS41IC0yODAuMFE0MTk4IC0yNjAgNDE5MCAtMjQ0UTQxODYgLTIzNSA0MTc0LjAgLTIxMS41UTQxNjIgLTE4OCA0MTQ4LjAgLTE1OC41UTQxMzQgLTEyOSA0MTI0LjUgLTEwMC41UTQxMTUgLTcyIDQxMTUgLTUyUTQxMTUgLTI2IDQxMzUgLTI2UTQxNTQgLTI2IDQxODguMCAtNzAuNVE0MjIyIC0xMTUgNDI1NiAtMTkzUTQyNjggLTE5MyA0MjY4IC0xODRRNDI1NyAtMTU3IDQyNDAuNSAtMTI1LjBRNDIyNCAtOTMgNDIwNC4wIC02NC41UTQxODQgLTM2IDQxNjEuMCAtMTcuNVE0MTM4IDEgNDExMyAxUTQwOTQgMSA0MDc1LjAgLTE0LjVRNDA1NiAtMzAgNDA1NiAtNjVRNDA1NiAtOTYgNDA2OC4wIC0xMjUuNVE0MDgwIC0xNTUgNDA5NS4wIC0xODEuMFE0MTEwIC0yMDcgNDEyMi4wIC0yMjcuMFE0MTM0IC0yNDcgNDEzNCAtMjU5UTQxMzQgLTI3NyA0MTExLjUgLTI4NS4wUTQwODkgLTI5MyA0MDUzIC0yOTRRNDAzNSAtMjQ4IDQwMjYuMCAtMjI2LjBRNDAxNyAtMjA0IDQwMDkgLTE4NFEzOTkzIC0xODQgMzk5OCAtMTk2WiIvPjwvc3ZnPg==",emboss:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMTguMiAtOTUyLjIgNDUyMi40IDE0MDcuNCI+PGRlZnM+PGZpbHRlciBpZD0icGFwZXItcmVsaWVmIiB4PSItMTAlIiB5PSItMjUlIiB3aWR0aD0iMTIwJSIgaGVpZ2h0PSIxNjAlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249Ii4zMiIgcmVzdWx0PSJzb2Z0Ii8+CjxmZU9mZnNldCBpbj0ic29mdCIgZHg9Ii41IiBkeT0iLjg1IiByZXN1bHQ9ImNhc3QiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiM4ZTgwNjYiIGZsb29kLW9wYWNpdHk9Ii41NSIgcmVzdWx0PSJzaGFkZSIvPgo8ZmVDb21wb3NpdGUgaW49InNoYWRlIiBpbjI9ImNhc3QiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJzaGFkb3ciLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii40NSIgZHk9Ii42NSIgcmVzdWx0PSJkb3duIi8+CjxmZUNvbXBvc2l0ZSBpbj0iU291cmNlQWxwaGEiIGluMj0iZG93biIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJ1cHBlckVkZ2UiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiNmZmZlZjciIGZsb29kLW9wYWNpdHk9IjEiIHJlc3VsdD0ibGlnaHQiLz4KPGZlQ29tcG9zaXRlIGluPSJsaWdodCIgaW4yPSJ1cHBlckVkZ2UiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJoaWdobGlnaHQiLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii0uNCIgZHk9Ii0uNiIgcmVzdWx0PSJ1cCIvPgo8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUFscGhhIiBpbjI9InVwIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9Imxvd2VyRWRnZSIvPgo8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2IyYTU4YiIgZmxvb2Qtb3BhY2l0eT0iLjY1IiByZXN1bHQ9Imxvd2VyU2hhZGUiLz4KPGZlQ29tcG9zaXRlIGluPSJsb3dlclNoYWRlIiBpbjI9Imxvd2VyRWRnZSIgb3BlcmF0b3I9ImluIiByZXN1bHQ9Imxvd2VyIi8+CjxmZU1lcmdlPjxmZU1lcmdlTm9kZSBpbj0ic2hhZG93Ii8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PGZlTWVyZ2VOb2RlIGluPSJoaWdobGlnaHQiLz48ZmVNZXJnZU5vZGUgaW49Imxvd2VyIi8+PC9mZU1lcmdlPgo8L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0iI2U4ZTFjZiIgZmlsdGVyPSJ1cmwoI3BhcGVyLXJlbGllZikiPjxwYXRoIGQ9Ik0xMzY1IDExNVExMzUwIDExMyAxMzI0LjAgMTA3LjVRMTI5OCAxMDIgMTI3MS4wIDg2LjBRMTI0NCA3MCAxMjI1LjAgMzcuNVExMjA2IDUgMTIwNiAtNDlRMTIwNiAtMTExIDEyMzEuNSAtMTg1LjVRMTI1NyAtMjYwIDEyOTQuMCAtMzQxLjBRMTMzMSAtNDIyIDEzNjUgLTUwMVExMzkyIC01NjQgMTM5MiAtNTk3UTEzOTIgLTYzMCAxMzY3IC02MzBRMTMzOSAtNjMwIDEyODMuNSAtNTg1LjVRMTIyOCAtNTQxIDExNTUgLTQ1MVExMTM2IC00MjcgMTEwNi4wIC0zODQuNVExMDc2IC0zNDIgMTA0Mi4wIC0yOTAuNVExMDA4IC0yMzkgOTc1LjUgLTE4Ni41UTk0MyAtMTM0IDkxOC41IC05MC4wUTg5NCAtNDYgODgzIC0yMFE4NzAgMTEgODUzLjAgMjIuNVE4MzYgMzQgODIxIDM0UTgwOCAzNCA3OTkgMjdRNzg5IDIwIDc4OSAxMFE3ODkgNCA3OTIgMFE3OTggLTEyIDgyMi4wIC01NS4wUTg0NiAtOTggODc4LjAgLTE2OS4wUTkxMCAtMjQwIDkzOSAtMzM0UTk0OCAtMzYzIDk1Ny41IC00MDEuMFE5NjcgLTQzOSA5NzUuMCAtNDc5LjVROTgzIC01MjAgOTg4LjUgLTU1NS41UTk5NCAtNTkxIDk5NCAtNjEzUTk5NCAtNjQ4IDk4Mi4wIC02NjQuNVE5NzAgLTY4MSA5NTAgLTY4MVE5MjggLTY4MSA5MDAuMCAtNjYyLjBRODcyIC02NDMgODQzIC02MDdRNzkzIC01NDQgNzU1LjAgLTQ5MC41UTcxNyAtNDM3IDY4NS41IC0zODQuMFE2NTQgLTMzMSA2MjMuNSAtMjcxLjBRNTkzIC0yMTEgNTU5LjAgLTEzNi41UTUyNSAtNjIgNDgxIDM2UTQ3NCA1MiA0NTcuNSA1OS4wUTQ0MSA2NiA0MjcgNjZRNDEzIDY2IDQwNC4wIDYwLjBRMzk1IDU0IDM5OCA0M1E0MjAgOCA0NDcuMCAtNDQuNVE0NzQgLTk3IDUwMi4wIC0xNjEuMFE1MzAgLTIyNSA1NTYuMCAtMjk0LjBRNTgyIC0zNjMgNjAyLjUgLTQyOS4wUTYyMyAtNDk1IDYzNS4wIC01NTMuMFE2NDcgLTYxMSA2NDcgLTY1MlE2NDcgLTcyOSA2MTQuNSAtNzYyLjBRNTgyIC03OTUgNTMxIC03OTVRNDg2IC03OTUgNDMyLjAgLTc3My4wUTM3OCAtNzUxIDMyMy41IC03MTMuMFEyNjkgLTY3NSAyMjEgLTYyN1ExNTIgLTU1OCAxMTIuNSAtNDc3LjBRNzMgLTM5NiA3MyAtMzEzUTczIC0yNTcgOTQuMCAtMjE4LjBRMTE1IC0xNzkgMTQ5LjUgLTE1OS4wUTE4NCAtMTM5IDIyNiAtMTM5UTI2OSAtMTM5IDMwNi41IC0xNjAuNVEzNDQgLTE4MiAzNzIuNSAtMjE2LjVRNDAxIC0yNTEgNDE3LjAgLTI4OS41UTQzMyAtMzI4IDQzMyAtMzYyUTQzMyAtMzkxIDQxNy4wIC00MTAuMFE0MDEgLTQyOSAzNjYgLTQyOVEzNjIgLTQyOSAzNTcuNSAtNDI4LjVRMzUzIC00MjggMzQ4IC00MjhIMzQ1UTMzOCAtNDI4IDMzMi4wIC00MzAuNVEzMjYgLTQzMyAzMjYgLTQzN1EzMjYgLTQ0MSAzMzYuNSAtNDQ2LjBRMzQ3IC00NTEgMzc1IC00NTFRNDIwIC00NTEgNDQyLjUgLTQyNC41UTQ2NSAtMzk4IDQ2NSAtMzU3UTQ2NSAtMzE3IDQ0NC41IC0yNzUuMFE0MjQgLTIzMyAzODkuMCAtMTk3LjBRMzU0IC0xNjEgMzEwLjUgLTEzOS4wUTI2NyAtMTE3IDIyMSAtMTE3UTE2NyAtMTE3IDEyMC41IC0xNDIuMFE3NCAtMTY3IDQ2LjAgLTIxNC41UTE4IC0yNjIgMTggLTMyOFExOCAtMzkxIDQ0LjAgLTQ1Mi41UTcwIC01MTQgMTExLjUgLTU2OC41UTE1MyAtNjIzIDIwMCAtNjY1UTI1MiAtNzEyIDMxMC4wIC03NDUuNVEzNjggLTc3OSA0MjUuNSAtNzk3LjVRNDgzIC04MTYgNTMzIC04MTZRNjA3IC04MTYgNjU1LjUgLTc3Mi4wUTcwNCAtNzI4IDcwNCAtNjMwUTcwNCAtNTkwIDY5My4wIC01MzguNVE2ODIgLTQ4NyA2NjcuMCAtNDM1LjVRNjUyIC0zODQgNjM4IC0zNDRINjQwUTY3NiAtNDA5IDcwNC41IC00NTUuNVE3MzMgLTUwMiA3NjIuMCAtNTQyLjBRNzkxIC01ODIgODI3IC02MjZRODU4IC02NjMgODk4LjAgLTY4NS4wUTkzOCAtNzA3IDk3NSAtNzA3UTEwMDggLTcwNyAxMDMxLjAgLTY4NS4wUTEwNTQgLTY2MyAxMDU0IC02MTBRMTA1NCAtNjA0IDEwNTQuMCAtNjAwLjBRMTA1NCAtNTk2IDEwNTMgLTU4OFExMDQ0IC00OTIgMTAxNS4wIC0zOTkuNVE5ODYgLTMwNyA5NTUgLTIxM1E5ODYgLTI2MSAxMDM5LjAgLTMzNS4wUTEwOTIgLTQwOSAxMTU1IC00ODhRMTIzMiAtNTg0IDEyOTguMCAtNjMyLjBRMTM2NCAtNjgwIDE0MDcgLTY4MFExNDYxIC02ODAgMTQ2MSAtNjE0UTE0NjEgLTU4OSAxNDUxLjUgLTU1NC4wUTE0NDIgLTUxOSAxNDIyIC00ODBRMTQwMCAtNDM2IDEzNzMuNSAtMzc4LjVRMTM0NyAtMzIxIDEzMjMuMCAtMjU4LjBRMTI5OSAtMTk1IDEyODMuNSAtMTM0LjVRMTI2OCAtNzQgMTI2OCAtMjNRMTI2OCAzMiAxMjkzLjUgNjUuNVExMzE5IDk5IDEzODIgOTlIMTM4OFExNDAzIDk5IDE0MDMgMTA1UTE0MDMgMTA5IDEzOTMuMCAxMTMuMFExMzgzIDExNyAxMzY1IDExNVpNMTI5OSA4UTEzMzUgLTY1IDEzNjguMCAtMTM2LjVRMTQwMSAtMjA4IDE0MzYgLTI3M1ExNDU2IC0zMDkgMTQ3MC4wIC0zMjMuNVExNDg0IC0zMzggMTUwNyAtMzM4UTE1MTUgLTMzOCAxNTI0LjAgLTMzNS41UTE1MzMgLTMzMyAxNTQyIC0zMzNRMTU0OCAtMzMzIDE1NTEgLTMzNFExNTM3IC0zMjYgMTUxNC41IC0yOTQuNVExNDkyIC0yNjMgMTQ2OS4wIC0yMjIuMFExNDQ2IC0xODEgMTQyOCAtMTQ1UTE0NDcgLTE2OCAxNDY4LjAgLTE5MS4wUTE0ODkgLTIxNCAxNTE0IC0yMzVRMTUzOCAtMjU2IDE1NzEuNSAtMjc4LjVRMTYwNSAtMzAxIDE2MzcuMCAtMzE2LjBRMTY2OSAtMzMxIDE2ODggLTMzMVExNjk1IC0zMzEgMTY5OCAtMzMwUTE2OTggLTMzMCAxNjg3LjAgLTMxMC41UTE2NzYgLTI5MSAxNjU5LjUgLTI1OS41UTE2NDMgLTIyOCAxNjI2LjAgLTE5Mi41UTE2MDkgLTE1NyAxNTk1LjUgLTEyNC41UTE1ODIgLTkyIDE1NzggLTcwUTE1NzUgLTU3IDE1NzUgLTQ2UTE1NzUgLTMwIDE1ODEuMCAtMjUuMFExNTg3IC0yMCAxNTk0IC0yMFExNjEzIC0yMCAxNjMzLjAgLTM3LjBRMTY1MyAtNTQgMTY3MS41IC04MC41UTE2OTAgLTEwNyAxNzA2LjAgLTEzNy4wUTE3MjIgLTE2NyAxNzMzIC0xOTNRMTc0NSAtMTkzIDE3NDUgLTE4NFExNzM0IC0xNTcgMTcxNy41IC0xMjQuNVExNzAxIC05MiAxNjgwLjUgLTYzLjBRMTY2MCAtMzQgMTYzNS4wIC0xNS4wUTE2MTAgNCAxNTgxIDRRMTU2MSA0IDE1MzkuNSAtMTAuMFExNTE4IC0yNCAxNTE4IC02MlExNTE4IC03MyAxNTIwLjAgLTg1LjVRMTUyMiAtOTggMTUyNyAtMTEzUTE1MzUgLTEzMyAxNTQ2LjAgLTE1Ni4wUTE1NTcgLTE3OSAxNTgyIC0yMTlRMTU4OSAtMjMwIDE1OTAuNSAtMjM2LjBRMTU5MiAtMjQyIDE1OTIgLTI0NlExNTkyIC0yNTggMTU4MSAtMjU4UTE1NzIgLTI1OCAxNTU0LjUgLTI0OC4wUTE1MzcgLTIzOCAxNTExIC0yMTNRMTQ4NiAtMTg5IDE0NTEuNSAtMTQ1LjBRMTQxNyAtMTAxIDEzNzIgLTE1UTEzNjUgLTIgMTM1Ni41IC0xLjBRMTM0OCAwIDEzMzMgMVExMzIzIDIgMTMxNC4wIDIuNVExMzA1IDMgMTI5OSA4Wk0xMzcyIDMxOVExMzIwIDMxOSAxMjk4LjUgMjk4LjVRMTI3NyAyNzggMTI3NyAyNTBRMTI3NyAyMjMgMTI5MiAxOTZRMTMwNiAxNjcgMTMzMS4wIDE0Ni41UTEzNTYgMTI2IDEzODYgMTEyUTE0MzcgODggMTUwMy41IDczLjBRMTU3MCA1OCAxNjMxIDQwUTE2MzkgMjYgMTY0Ny41IDExLjBRMTY1NiAtNCAxNjYzIC0xOFExNjgzIC01OCAxNzAwLjAgLTk3LjVRMTcxNyAtMTM3IDE3NDIgLTE4M1ExNzMzIC0xODMgMTczMyAtMTkzTDE3NzcgLTI5NFExNzc4IC0yOTYgMTc3OS4wIC0yOTkuNVExNzgwIC0zMDMgMTc4MCAtMzA3UTE3ODAgLTMxOCAxNzc1LjAgLTMyNS41UTE3NzAgLTMzMyAxNzY4IC0zMzZMMTgyMyAtMzM4SDE4MjhRMTg1MCAtMzM4IDE4NTAgLTMyNFExODUwIC0zMTcgMTg0NCAtMzAyTDE3NjQgLTExNFExNzUwIC04MSAxNzM0LjAgLTQ4LjBRMTcxOCAtMTUgMTcwMSAxOVExNzcxIC04IDE4MTIuNSAtNDcuNVExODU0IC04NyAxODc2LjUgLTEyNi41UTE4OTkgLTE2NiAxOTExIC0xOTNRMTkyMyAtMTkzIDE5MjMgLTE4NFExOTEzIC0xNjIgMTg5Ny4wIC0xMzEuNVExODgxIC0xMDEgMTg1NS4wIC02Ny41UTE4MjkgLTM0IDE3ODguMCAtMy4wUTE3NDcgMjggMTY4NSA1MVExNjYxIDk0IDE2MzAuMCAxNDAuNVExNTk5IDE4NyAxNTYwLjAgMjI3LjVRMTUyMSAyNjggMTQ3NC41IDI5My41UTE0MjggMzE5IDEzNzIgMzE5Wk0xMzQ4IDI5OVExMzgxIDI5OSAxNDE2LjUgMjc5LjBRMTQ1MiAyNTkgMTQ4NS4wIDIyOC41UTE1MTggMTk4IDE1NDUuNSAxNjYuMFExNTczIDEzNCAxNTkwIDExMFExNTk2IDEwMiAxNjAxLjAgOTIuMFExNjA2IDgyIDE2MTEgNzJRMTU2MyA4NSAxNTA1LjAgMTAwLjVRMTQ0NyAxMTYgMTQwMyAxMzVRMTM1NSAxNTUgMTMyOC4wIDE5MS41UTEzMDEgMjI4IDEzMDEgMjU3UTEzMDEgMjc2IDEzMTIuNSAyODcuNVExMzI0IDI5OSAxMzQ4IDI5OVpNMTg1MiAtNDAwUTE4MzkgLTQwMCAxODI5LjUgLTQxMC4wUTE4MjAgLTQyMCAxODIwIC00MzRRMTgyMCAtNDUxIDE4MzQuMCAtNDY0LjVRMTg0OCAtNDc4IDE4NjUgLTQ3OFExODc5IC00NzggMTg4OS4wIC00NjkuMFExODk5IC00NjAgMTg5OSAtNDQ2UTE4OTkgLTQyOCAxODg1LjAgLTQxNC4wUTE4NzEgLTQwMCAxODUyIC00MDBaTTIxMjggM1EyMTA1IDMgMjA4Ny41IC0xMC4wUTIwNzAgLTIzIDIwNzAgLTYzUTIwNzAgLTgwIDIwNzIuNSAtOTUuMFEyMDc1IC0xMTAgMjA3OSAtMTI3UTIwNzAgLTExMiAyMDU0LjAgLTkwLjBRMjAzOCAtNjggMjAxOC41IC00Ny4wUTE5OTkgLTI2IDE5NzguNSAtMTIuMFExOTU4IDIgMTk0MCAyUTE5MTQgMiAxODk4LjAgLTIxLjVRMTg4MiAtNDUgMTg4MiAtODNRMTg4MiAtMTI0IDE5MDEuMCAtMTcxLjBRMTkyMCAtMjE4IDE5NTMuMCAtMjYxLjBRMTk4NiAtMzA0IDIwMjkuMCAtMzMxLjBRMjA3MiAtMzU4IDIxMTkgLTM1OFEyMTQyIC0zNTggMjE2My4wIC0zNTAuNVEyMTg0IC0zNDMgMjIwMCAtMzI2UTIyMDcgLTMxOSAyMjA3IC0zMTBRMjIwNyAtMzA0IDIyMDIuMCAtMzAwLjBRMjE5NyAtMjk2IDIxODkgLTI5OFEyMTc4IC0zMzMgMjE0MiAtMzMzUTIxMjUgLTMzMyAyMTAzIC0zMjJRMjA3NiAtMzA4IDIwNDUuNSAtMjc3LjVRMjAxNSAtMjQ3IDE5ODguNSAtMjA4LjVRMTk2MiAtMTcwIDE5NDUuMCAtMTMxLjBRMTkyOCAtOTIgMTkyOCAtNjBRMTkyOCAtMjcgMTk1MyAtMjdRMTk3NSAtMjcgMTk5OC41IC00OC4wUTIwMjIgLTY5IDIwNDMuNSAtMTAwLjVRMjA2NSAtMTMyIDIwODMuMCAtMTYzLjBRMjEwMSAtMTk0IDIxMTEgLTIxM1EyMTI2IC0yNDAgMjEzOS4wIC0yNTguMFEyMTUyIC0yNzYgMjE3NiAtMjc2UTIxODcgLTI3NiAyMTk4LjAgLTI3My4wUTIyMDkgLTI3MCAyMjIxIC0yNzJRMjE5MSAtMjQyIDIxNjguNSAtMjAxLjBRMjE0NiAtMTYwIDIxMzQuMCAtMTIwLjVRMjEyMiAtODEgMjEyMiAtNTRRMjEyMiAtMjQgMjE0MiAtMjRRMjE1OCAtMjQgMjE3Ni41IC00Mi4wUTIxOTUgLTYwIDIyMTIuNSAtODcuNVEyMjMwIC0xMTUgMjI0NS4wIC0xNDMuNVEyMjYwIC0xNzIgMjI2OSAtMTkzUTIyNzQgLTE5MyAyMjc3LjUgLTE5Mi4wUTIyODEgLTE5MSAyMjgxIC0xODRRMjI4MCAtMTgwIDIyNzcuNSAtMTc1LjVRMjI3NSAtMTcxIDIyNzAgLTE2MFEyMjYyIC0xNDQgMjI0OC4wIC0xMTcuMFEyMjM0IC05MCAyMjE1LjAgLTYyLjVRMjE5NiAtMzUgMjE3NC4wIC0xNi4wUTIxNTIgMyAyMTI4IDNaTTIyOTggMFEyMjg3IDAgMjI3MS41IC01LjBRMjI1NiAtMTAgMjI0NC41IC0yMy41UTIyMzMgLTM3IDIyMzMgLTY0UTIyMzMgLTkwIDIyNTAuMCAtMTI0LjBRMjI2NyAtMTU4IDIyODAgLTE4NFEyMjY5IC0xODQgMjI2OSAtMTkzUTIyNzAgLTE5NiAyMjc4LjAgLTIxMi4wUTIyODYgLTIyOCAyMjk3LjAgLTI1MC4wUTIzMDggLTI3MiAyMzE4LjUgLTI5Mi41UTIzMjkgLTMxMyAyMzM1IC0zMjRRMjM0NyAtMzQ2IDIzNzMgLTM0NkgyNDM1UTI0MTggLTMzMyAyNDA0LjUgLTMxNy41UTIzOTEgLTMwMiAyMzcxIC0yNjFRMjM3MSAtMjYxIDIzNjQuMCAtMjQ3LjBRMjM1NyAtMjMzIDIzNDYuNSAtMjExLjVRMjMzNiAtMTkwIDIzMjUuNSAtMTY4LjBRMjMxNSAtMTQ2IDIzMDggLTEzMVEyMjk1IC0xMDMgMjI5MS4wIC04Ni41UTIyODcgLTcwIDIyODcgLTU2UTIyODcgLTIzIDIzMDkgLTIzUTIzMzMgLTIzIDIzNjcgLTYyUTIzOTUgLTk1IDI0MjIuMCAtMTQxLjBRMjQ0OSAtMTg3IDI0NzMuNSAtMjM2LjBRMjQ5OCAtMjg1IDI1MTcgLTMyNFEyNTI4IC0zNDYgMjU1NiAtMzQ2SDI2MTFRMjU4OSAtMzI4IDI1NjYuNSAtMjkyLjBRMjU0NCAtMjU2IDI1MTcgLTIwMFEyNTEwIC0xODUgMjQ5OS4wIC0xNjIuMFEyNDg4IC0xMzkgMjQ3OS41IC0xMTMuMFEyNDcxIC04NyAyNDcxIC02MVEyNDcxIC0yNiAyNDk2IC0yNlEyNTMwIC0yNiAyNTYyLjAgLTczLjBRMjU5NCAtMTIwIDI2MjUgLTE5M1EyNjMzIC0xOTMgMjYzNC41IC0xOTIuMFEyNjM2IC0xOTEgMjYzNyAtMTg0UTI2MjYgLTE1NyAyNjEwLjUgLTEyNS41UTI1OTUgLTk0IDI1NzUuNSAtNjUuMFEyNTU2IC0zNiAyNTMyLjUgLTE4LjBRMjUwOSAwIDI0ODEgMFEyNDU2IDAgMjQ0MC4wIC0xOC41UTI0MjQgLTM3IDI0MjQgLTcxUTI0MjQgLTk4IDI0MzQgLTEyOVEyNDE3IC05OSAyMzk1LjAgLTY5LjBRMjM3MyAtMzkgMjM0OC4wIC0xOS41UTIzMjMgMCAyMjk4IDBaTTI0NjggMjczUTI0NTYgMjczIDI0NDMuNSAyNjkuNVEyNDMxIDI2NiAyNDE4IDI2OFEyNDI0IDI2MiAyNDQxLjAgMjMzLjVRMjQ1OCAyMDUgMjQ4MS4wIDE2Mi41UTI1MDQgMTIwIDI1MjguNSA3MC41UTI1NTMgMjEgMjU3Ni4wIC0yNy41UTI1OTkgLTc2IDI2MTUuNSAtMTE3LjVRMjYzMiAtMTU5IDI2MzcgLTE4NFEyNjMyIC0xODQgMjYyOC4wIC0xODYuMFEyNjI0IC0xODggMjYyNSAtMTkzUTI2MjUgLTE5MyAyNjMxLjAgLTIxMS4wUTI2MzcgLTIyOSAyNjQzLjAgLTI1NC41UTI2NDkgLTI4MCAyNjQ5IC0zMDFRMjY0OSAtMzE1IDI2NDYuMCAtMzI1LjBRMjY0MyAtMzM1IDI2MzUgLTMzNkwyNjg1IC0zNDRRMjY5MSAtMzQ1IDI2OTYuMCAtMzQ1LjVRMjcwMSAtMzQ2IDI3MDUgLTM0NlEyNzE0IC0zNDYgMjcxNy41IC0zMzkuNVEyNzIxIC0zMzMgMjcyMSAtMzEzUTI3MjEgLTI4OCAyNzEyLjUgLTI0OS41UTI3MDQgLTIxMSAyNjkzIC0xODJRMjcwNCAtMjAwIDI3MjEuNSAtMjI4LjBRMjczOSAtMjU2IDI3NjIuMCAtMjg1LjBRMjc4NSAtMzE0IDI4MTAuMCAtMzMzLjVRMjgzNSAtMzUzIDI4NTkgLTM1M1EyODY0IC0zNTMgMjg3MiAtMzUxUTI5MDAgLTM0NCAyOTExLjUgLTMyMy41UTI5MjMgLTMwMyAyOTIzIC0yNzVRMjkyMyAtMjQ1IDI5MTEuNSAtMjA5LjBRMjkwMCAtMTczIDI4ODEuMCAtMTM4LjVRMjg2MiAtMTA0IDI4MzkgLTc2UTI4MTEgLTQxIDI3NzIuMCAtMjAuMFEyNzMzIDEgMjY5MiAxUTI2NTUgMSAyNjIzIC0xOEwyNTI4IDIyMVEyNTE0IDI1MSAyNTAxLjAgMjYyLjBRMjQ4OCAyNzMgMjQ2OCAyNzNaTTI2NjAgLTIwUTI2ODggLTIwIDI3MjMuMCAtNDYuMFEyNzU4IC03MiAyNzkwLjUgLTExMi41UTI4MjMgLTE1MyAyODQ1IC0xOTRRMjg2MCAtMjIyIDI4NjcuMCAtMjQ1LjVRMjg3NCAtMjY5IDI4NzQgLTI4NlEyODc0IC0zMjUgMjg0NiAtMzI1UTI4MzMgLTMyNSAyODEyLjUgLTMxMS4wUTI3OTIgLTI5NyAyNzY1IC0yNjBRMjczNiAtMjIwIDI3MDEuNSAtMTU5LjVRMjY2NyAtOTkgMjYzMSAtMzJRMjY0MyAtMjAgMjY2MCAtMjBaTTI5NjIgLTE5NlEyOTcwIC0yMTMgMjk4My4wIC0yNTAuNVEyOTk2IC0yODggMzAxMC4wIC0zMzQuMFEzMDI0IC0zODAgMzAzMSAtNDIxUTMwMzQgLTQzNyAzMDQyLjAgLTQ0NC41UTMwNTAgLTQ1MiAzMDU5IC00NTJRMzA3MiAtNDUyIDMwODMuMCAtNDM5LjVRMzA5NCAtNDI3IDMwOTQgLTQwNFEzMDk0IC0zNzYgMzA3Ny41IC0zNTYuMFEzMDYxIC0zMzYgMzAzNyAtMzE4UTMwNDcgLTMxNyAzMDU4LjAgLTMxNi41UTMwNjkgLTMxNiAzMDgyIC0zMTZRMzEyOSAtMzE2IDMxNzUgLTMyMlEzMTc3IC0zMTYgMzE3NyAtMzEzUTMxNzcgLTMwMCAzMTY5LjUgLTI4MC4wUTMxNjIgLTI2MCAzMTU0IC0yNDRRMzE1MCAtMjM1IDMxMzguMCAtMjExLjVRMzEyNiAtMTg4IDMxMTIuMCAtMTU4LjVRMzA5OCAtMTI5IDMwODguNSAtMTAwLjVRMzA3OSAtNzIgMzA3OSAtNTJRMzA3OSAtMjYgMzA5OSAtMjZRMzExOCAtMjYgMzE1Mi4wIC03MC41UTMxODYgLTExNSAzMjIwIC0xOTNRMzIzMiAtMTkzIDMyMzIgLTE4NFEzMjIxIC0xNTcgMzIwNC41IC0xMjUuMFEzMTg4IC05MyAzMTY4LjAgLTY0LjVRMzE0OCAtMzYgMzEyNS4wIC0xNy41UTMxMDIgMSAzMDc3IDFRMzA1OCAxIDMwMzkuMCAtMTQuNVEzMDIwIC0zMCAzMDIwIC02NVEzMDIwIC05NiAzMDMyLjAgLTEyNS41UTMwNDQgLTE1NSAzMDU5LjAgLTE4MS4wUTMwNzQgLTIwNyAzMDg2LjAgLTIyNy4wUTMwOTggLTI0NyAzMDk4IC0yNTlRMzA5OCAtMjc3IDMwNzUuNSAtMjg1LjBRMzA1MyAtMjkzIDMwMTcgLTI5NFEyOTk5IC0yNDggMjk5MC4wIC0yMjYuMFEyOTgxIC0yMDQgMjk3MyAtMTg0UTI5NTcgLTE4NCAyOTYyIC0xOTZaTTMyMjEgLTE5NlEzMjI5IC0yMTMgMzI0Mi4wIC0yNTAuNVEzMjU1IC0yODggMzI2OS4wIC0zMzQuMFEzMjgzIC0zODAgMzI5MCAtNDIxUTMyOTMgLTQzNyAzMzAxLjAgLTQ0NC41UTMzMDkgLTQ1MiAzMzE4IC00NTJRMzMzMSAtNDUyIDMzNDIuMCAtNDM5LjVRMzM1MyAtNDI3IDMzNTMgLTQwNFEzMzUzIC0zNzYgMzMzNi41IC0zNTYuMFEzMzIwIC0zMzYgMzI5NiAtMzE4UTMzMDYgLTMxNyAzMzE3LjAgLTMxNi41UTMzMjggLTMxNiAzMzQxIC0zMTZRMzM4OCAtMzE2IDM0MzQgLTMyMlEzNDM2IC0zMTYgMzQzNiAtMzEzUTM0MzYgLTMwMCAzNDI4LjUgLTI4MC4wUTM0MjEgLTI2MCAzNDEzIC0yNDRRMzQwOSAtMjM1IDMzOTcuMCAtMjExLjVRMzM4NSAtMTg4IDMzNzEuMCAtMTU4LjVRMzM1NyAtMTI5IDMzNDcuNSAtMTAwLjVRMzMzOCAtNzIgMzMzOCAtNTJRMzMzOCAtMjYgMzM1OCAtMjZRMzM3NyAtMjYgMzQxMS4wIC03MC41UTM0NDUgLTExNSAzNDc5IC0xOTNRMzQ5MSAtMTkzIDM0OTEgLTE4NFEzNDgwIC0xNTcgMzQ2My41IC0xMjUuMFEzNDQ3IC05MyAzNDI3LjAgLTY0LjVRMzQwNyAtMzYgMzM4NC4wIC0xNy41UTMzNjEgMSAzMzM2IDFRMzMxNyAxIDMyOTguMCAtMTQuNVEzMjc5IC0zMCAzMjc5IC02NVEzMjc5IC05NiAzMjkxLjAgLTEyNS41UTMzMDMgLTE1NSAzMzE4LjAgLTE4MS4wUTMzMzMgLTIwNyAzMzQ1LjAgLTIyNy4wUTMzNTcgLTI0NyAzMzU3IC0yNTlRMzM1NyAtMjc3IDMzMzQuNSAtMjg1LjBRMzMxMiAtMjkzIDMyNzYgLTI5NFEzMjU4IC0yNDggMzI0OS4wIC0yMjYuMFEzMjQwIC0yMDQgMzIzMiAtMTg0UTMyMTYgLTE4NCAzMjIxIC0xOTZaTTM0ODAgLTE5NlEzNDg4IC0yMTMgMzUwMS4wIC0yNTAuNVEzNTE0IC0yODggMzUyOC4wIC0zMzQuMFEzNTQyIC0zODAgMzU0OSAtNDIxUTM1NTIgLTQzNyAzNTYwLjAgLTQ0NC41UTM1NjggLTQ1MiAzNTc3IC00NTJRMzU5MCAtNDUyIDM2MDEuMCAtNDM5LjVRMzYxMiAtNDI3IDM2MTIgLTQwNFEzNjEyIC0zNzYgMzU5NS41IC0zNTYuMFEzNTc5IC0zMzYgMzU1NSAtMzE4UTM1NjUgLTMxNyAzNTc2LjAgLTMxNi41UTM1ODcgLTMxNiAzNjAwIC0zMTZRMzY0NyAtMzE2IDM2OTMgLTMyMlEzNjk1IC0zMTYgMzY5NSAtMzEzUTM2OTUgLTMwMCAzNjg3LjUgLTI4MC4wUTM2ODAgLTI2MCAzNjcyIC0yNDRRMzY2OCAtMjM1IDM2NTYuMCAtMjExLjVRMzY0NCAtMTg4IDM2MzAuMCAtMTU4LjVRMzYxNiAtMTI5IDM2MDYuNSAtMTAwLjVRMzU5NyAtNzIgMzU5NyAtNTJRMzU5NyAtMjYgMzYxNyAtMjZRMzYzNiAtMjYgMzY3MC4wIC03MC41UTM3MDQgLTExNSAzNzM4IC0xOTNRMzc1MCAtMTkzIDM3NTAgLTE4NFEzNzM5IC0xNTcgMzcyMi41IC0xMjUuMFEzNzA2IC05MyAzNjg2LjAgLTY0LjVRMzY2NiAtMzYgMzY0My4wIC0xNy41UTM2MjAgMSAzNTk1IDFRMzU3NiAxIDM1NTcuMCAtMTQuNVEzNTM4IC0zMCAzNTM4IC02NVEzNTM4IC05NiAzNTUwLjAgLTEyNS41UTM1NjIgLTE1NSAzNTc3LjAgLTE4MS4wUTM1OTIgLTIwNyAzNjA0LjAgLTIyNy4wUTM2MTYgLTI0NyAzNjE2IC0yNTlRMzYxNiAtMjc3IDM1OTMuNSAtMjg1LjBRMzU3MSAtMjkzIDM1MzUgLTI5NFEzNTE3IC0yNDggMzUwOC4wIC0yMjYuMFEzNDk5IC0yMDQgMzQ5MSAtMTg0UTM0NzUgLTE4NCAzNDgwIC0xOTZaTTM3MzkgLTE5NlEzNzQ3IC0yMTMgMzc2MC4wIC0yNTAuNVEzNzczIC0yODggMzc4Ny4wIC0zMzQuMFEzODAxIC0zODAgMzgwOCAtNDIxUTM4MTEgLTQzNyAzODE5LjAgLTQ0NC41UTM4MjcgLTQ1MiAzODM2IC00NTJRMzg0OSAtNDUyIDM4NjAuMCAtNDM5LjVRMzg3MSAtNDI3IDM4NzEgLTQwNFEzODcxIC0zNzYgMzg1NC41IC0zNTYuMFEzODM4IC0zMzYgMzgxNCAtMzE4UTM4MjQgLTMxNyAzODM1LjAgLTMxNi41UTM4NDYgLTMxNiAzODU5IC0zMTZRMzkwNiAtMzE2IDM5NTIgLTMyMlEzOTU0IC0zMTYgMzk1NCAtMzEzUTM5NTQgLTMwMCAzOTQ2LjUgLTI4MC4wUTM5MzkgLTI2MCAzOTMxIC0yNDRRMzkyNyAtMjM1IDM5MTUuMCAtMjExLjVRMzkwMyAtMTg4IDM4ODkuMCAtMTU4LjVRMzg3NSAtMTI5IDM4NjUuNSAtMTAwLjVRMzg1NiAtNzIgMzg1NiAtNTJRMzg1NiAtMjYgMzg3NiAtMjZRMzg5NSAtMjYgMzkyOS4wIC03MC41UTM5NjMgLTExNSAzOTk3IC0xOTNRNDAwOSAtMTkzIDQwMDkgLTE4NFEzOTk4IC0xNTcgMzk4MS41IC0xMjUuMFEzOTY1IC05MyAzOTQ1LjAgLTY0LjVRMzkyNSAtMzYgMzkwMi4wIC0xNy41UTM4NzkgMSAzODU0IDFRMzgzNSAxIDM4MTYuMCAtMTQuNVEzNzk3IC0zMCAzNzk3IC02NVEzNzk3IC05NiAzODA5LjAgLTEyNS41UTM4MjEgLTE1NSAzODM2LjAgLTE4MS4wUTM4NTEgLTIwNyAzODYzLjAgLTIyNy4wUTM4NzUgLTI0NyAzODc1IC0yNTlRMzg3NSAtMjc3IDM4NTIuNSAtMjg1LjBRMzgzMCAtMjkzIDM3OTQgLTI5NFEzNzc2IC0yNDggMzc2Ny4wIC0yMjYuMFEzNzU4IC0yMDQgMzc1MCAtMTg0UTM3MzQgLTE4NCAzNzM5IC0xOTZaTTM5OTggLTE5NlE0MDA2IC0yMTMgNDAxOS4wIC0yNTAuNVE0MDMyIC0yODggNDA0Ni4wIC0zMzQuMFE0MDYwIC0zODAgNDA2NyAtNDIxUTQwNzAgLTQzNyA0MDc4LjAgLTQ0NC41UTQwODYgLTQ1MiA0MDk1IC00NTJRNDEwOCAtNDUyIDQxMTkuMCAtNDM5LjVRNDEzMCAtNDI3IDQxMzAgLTQwNFE0MTMwIC0zNzYgNDExMy41IC0zNTYuMFE0MDk3IC0zMzYgNDA3MyAtMzE4UTQwODMgLTMxNyA0MDk0LjAgLTMxNi41UTQxMDUgLTMxNiA0MTE4IC0zMTZRNDE2NSAtMzE2IDQyMTEgLTMyMlE0MjEzIC0zMTYgNDIxMyAtMzEzUTQyMTMgLTMwMCA0MjA1LjUgLTI4MC4wUTQxOTggLTI2MCA0MTkwIC0yNDRRNDE4NiAtMjM1IDQxNzQuMCAtMjExLjVRNDE2MiAtMTg4IDQxNDguMCAtMTU4LjVRNDEzNCAtMTI5IDQxMjQuNSAtMTAwLjVRNDExNSAtNzIgNDExNSAtNTJRNDExNSAtMjYgNDEzNSAtMjZRNDE1NCAtMjYgNDE4OC4wIC03MC41UTQyMjIgLTExNSA0MjU2IC0xOTNRNDI2OCAtMTkzIDQyNjggLTE4NFE0MjU3IC0xNTcgNDI0MC41IC0xMjUuMFE0MjI0IC05MyA0MjA0LjAgLTY0LjVRNDE4NCAtMzYgNDE2MS4wIC0xNy41UTQxMzggMSA0MTEzIDFRNDA5NCAxIDQwNzUuMCAtMTQuNVE0MDU2IC0zMCA0MDU2IC02NVE0MDU2IC05NiA0MDY4LjAgLTEyNS41UTQwODAgLTE1NSA0MDk1LjAgLTE4MS4wUTQxMTAgLTIwNyA0MTIyLjAgLTIyNy4wUTQxMzQgLTI0NyA0MTM0IC0yNTlRNDEzNCAtMjc3IDQxMTEuNSAtMjg1LjBRNDA4OSAtMjkzIDQwNTMgLTI5NFE0MDM1IC0yNDggNDAyNi4wIC0yMjYuMFE0MDE3IC0yMDQgNDAwOSAtMTg0UTM5OTMgLTE4NCAzOTk4IC0xOTZaIi8+PC9nPjwvc3ZnPg=="},ag=`
/* Keep host-page resets from changing the approved stationery. */
.li-opening,.li-opening *,.li-opening *::before,.li-opening *::after{box-sizing:border-box}
.li-opening{font-size:16px;line-height:normal;text-align:left}
.li-opening button,.li-opening a{-webkit-tap-highlight-color:transparent}
.li-opening button{font:inherit}
.li-opening a{color:inherit}
.li-opening button:focus-visible,.li-opening a:focus-visible{outline:2px solid #65523e;outline-offset:8px}
.li-opening{font-family:var(--li-font-family,Arial,sans-serif);color:#343430;background:#f5f3e8;font-synthesis:none;font-weight:400}
.li-opening{--li-paper-texture:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIiB2aWV3Qm94PSIwIDAgMjQwIDI0MCI+PGZpbHRlciBpZD0iZ3JhaW4iIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuODIgLjQ1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjxmZUNvbXBvbmVudFRyYW5zZmVyPjxmZUZ1bmNSIHR5cGU9ImxpbmVhciIgc2xvcGU9Ii4yIiBpbnRlcmNlcHQ9Ii43OSIvPjxmZUZ1bmNHIHR5cGU9ImxpbmVhciIgc2xvcGU9Ii4yIiBpbnRlcmNlcHQ9Ii43OSIvPjxmZUZ1bmNCIHR5cGU9ImxpbmVhciIgc2xvcGU9Ii4yIiBpbnRlcmNlcHQ9Ii43OSIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48cGF0aCBmaWxsPSIjZjlmN2VmIiBkPSJNMCAwaDI0MHYyNDBIMHoiLz48cGF0aCBmaWx0ZXI9InVybCgjZ3JhaW4pIiBvcGFjaXR5PSIuNiIgZD0iTTAgMGgyNDB2MjQwSDB6Ii8+PC9zdmc+Cg==");height:380svh;position:relative;background:#f5f3e8}
.li-stage{height:100svh;min-height:480px;position:sticky;top:0;overflow:hidden;isolation:isolate;perspective:1600px;background:radial-gradient(ellipse at 50% 40%,var(--li-stage-center) 0%,var(--li-stage-edge) 70%)}
.li-stage:after{content:'';position:absolute;inset:0;z-index:10;background:var(--li-paper-texture);opacity:.16;pointer-events:none}
.li-stage-heading{position:absolute;left:6%;right:6%;top:32px;display:flex;justify-content:space-between;align-items:center;color:#7d796c;z-index:11;font-size:14px}
.li-stage-heading>span{font-size:20px;letter-spacing:-.04em}
.li-stage-heading p{margin:0}
.li-envelope{position:absolute;width:680px;height:440px;left:50%;top:56%;transform:translate(-50%,-50%);transform-origin:center;will-change:transform;pointer-events:none}
.li-paper:after{content:'';position:absolute;inset:0;background:var(--li-paper-texture);mix-blend-mode:multiply;opacity:.52;pointer-events:none}
.li-back{z-index:1;filter:drop-shadow(0 0 .7px #8a7248) drop-shadow(1px 3px 2px #50433024) drop-shadow(16px 25px 22px #53442b18)}
.li-envelope-paper{position:absolute;inset:0;background:linear-gradient(120deg,#e4ddca,#d8cdb6 100%);border-radius:3px;box-shadow:inset 0 1px 1px #fff9e6,inset 0 -1px 2px #93816944}
.li-liner{position:absolute;inset:5px 5px 1px;background:repeating-linear-gradient(90deg,transparent 0 3px,#877d6810 3px 4px),linear-gradient(120deg,#c8c1a9,#d7d0ba 64%,#c0b69d);border-radius:2px;box-shadow:inset 0 4px 7px #59493421}
.li-mouth{height:3px;position:absolute;top:1px;left:3px;right:3px;background:linear-gradient(#998d7170,#e8dfc9);border-radius:2px}
.li-flap-layer{z-index:6;perspective:1300px;filter:drop-shadow(0 3px 2px #71624523)}
.li-flap{width:680px;height:340px;position:absolute;top:0;left:0;transform-origin:50% 0;transform-style:preserve-3d;will-change:transform;transform:rotateX(0deg)}
.li-flap-face{position:absolute;inset:0;clip-path:polygon(0 0,100% 0,53% 96%,51% 98.3%,49% 98.3%,47% 96%);backface-visibility:hidden;-webkit-backface-visibility:hidden}
.li-flap-front{background:linear-gradient(160deg,#f0ebdc 1%,#e9e1d0 46%,#e3d8c2 100%);border-top:1px solid #fdf8eb}
.li-flap-inside{transform:rotateY(180deg);background:linear-gradient(180deg,#c5baa1,#e8dfc9 68%);box-shadow:inset 0 2px 4px #56493030}
.li-emboss{position:absolute;left:50%;top:79px;width:176px;transform:translateX(-50%);z-index:1}
.li-emboss img{display:block;width:100%;height:auto;overflow:visible}
.li-front{z-index:4;overflow:hidden;border-radius:3px;filter:drop-shadow(0 1px 1px #604c2c23)}
.li-side{position:absolute;inset:0}
.li-left{clip-path:polygon(0 0,54% 72%,0 100%);background:linear-gradient(100deg,#e7dfcd,#d4c8ae)}
.li-right{clip-path:polygon(100% 0,46% 72%,100% 100%);background:linear-gradient(260deg,#ede5d3,#d9ceb8)}
.li-pocket{position:absolute;inset:0;clip-path:polygon(0 100%,0 99%,45.4% 71%,47% 69.5%,49% 68.7%,51% 68.7%,53% 69.5%,54.6% 71%,100% 99%,100% 100%);background:linear-gradient(160deg,#f1e9d8,#e6dcc6 70%,#e0d4bb);box-shadow:inset 0 -2px 2px #9c8a6759}
.li-pocket-shadow{position:absolute;inset:0;clip-path:polygon(0 100%,0 97.5%,45.4% 69.5%,47% 68%,49% 67.2%,51% 67.2%,53% 68%,54.6% 69.5%,100% 97.5%,100% 100%);background:#85765b;opacity:.16}
.li-seams{position:absolute;inset:0;width:100%;height:100%}
.li-envelope-imprint{position:absolute;bottom:37px;left:0;right:0;text-align:center;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#a19379;text-shadow:0 1px #fdf6e5aa}
.li-table-shadow{position:absolute;left:50%;top:56%;width:640px;height:350px;transform:translate(-50%,-50%);background:#877c6144;border-radius:35%;filter:blur(28px);z-index:0;will-change:transform,opacity}
.li-card{position:absolute;width:400px;height:620px;left:50%;top:56%;margin:0;z-index:2;transform:translate(-50%,-50%) rotate(90deg);transform-origin:50% 50%;will-change:transform;box-shadow:0 2px 2px #65563820,2px 7px 10px #65563812,14px 26px 40px #65563817;border-radius:1px;background:#f9f6ed;color:#3c3a32}
.li-card-stock{position:absolute;inset:0;background:radial-gradient(ellipse at 10% 0%,#fffdf5aa,transparent 65%),linear-gradient(110deg,#f7f4e9,#fcfaf2 43%,#f3efe2);border-top:1px solid #fffef8;border-right:1px solid #e3dccb;border-bottom:2px solid #d9d0bc;box-shadow:inset 1px 0 1px #fffef7}
.li-card-rule{position:absolute;inset:15px;border:1px solid #d4c7ad77;box-shadow:0 1px 0 #fffdf4,inset 0 1px 0 #fffdf4;pointer-events:none}
.li-card-content{position:relative;height:100%;padding:49px 40px 40px;display:flex;flex-direction:column;text-align:center;justify-content:space-between}
.li-card-wordmark{font-size:26px;letter-spacing:-.06em;font-weight:400;color:#8f8168;text-shadow:0 1px #fffdf7}
.li-card-message{margin-top:12px}
.li-card h2{font-family:var(--li-font-family,Arial,sans-serif);font-size:45px;font-weight:400;letter-spacing:-.035em;line-height:1.08;margin:0}
.li-card-divider{height:1px;width:32px;background:#ad997677;margin:28px auto}
.li-card-message>p{font-size:15.5px;line-height:1.55;max-width:240px;margin:0 auto;color:#686254;font-weight:300;text-wrap:pretty}
.li-card-signature{font-size:14px;letter-spacing:.02em;color:#a38c6e;margin:20px 0 0;font-weight:400}
.li-stage-footer{position:absolute;left:6%;right:6%;bottom:34px;z-index:12;display:flex;justify-content:space-between;align-items:center;gap:16px;color:#756e5e;font-size:14px}
.li-scroll-cue{display:flex;align-items:center;gap:18px}
.li-cue-line{display:block;position:relative;width:46px;height:1px;background:#d4cebb;overflow:hidden}
.li-cue-line i{position:absolute;inset:0;background:#9b8a6c;transform:translateX(-100%);animation:li-pulse 2.6s ease-in-out infinite}
.li-stage-footer button{border:0;border-bottom:1px solid #b9ad9677;background:transparent;color:inherit;padding:8px 0;font-size:14px;cursor:pointer}
.li-stage-footer .li-replay{display:none}
.li-opening[data-complete="true"] .li-scroll-cue,.li-opening[data-complete="true"] .li-skip{display:none}
.li-opening[data-complete="true"] .li-stage-footer{justify-content:center}
.li-opening[data-complete="true"] .li-replay{display:block}
@keyframes li-pulse{0%,20%{transform:translateX(-100%)}70%,100%{transform:translateX(100%)}}
@media(max-width:700px){.li-stage-heading{left:24px;right:24px;top:24px}
.li-stage-heading p{font-size:13px}
.li-stage-footer{left:24px;right:24px;bottom:25px;font-size:13px}
.li-stage-footer button{font-size:13px}
.li-scroll-cue{gap:10px}
.li-cue-line{width:25px}}
@media(prefers-reduced-motion:reduce){.li-opening{height:auto}
.li-stage{position:relative;height:100svh;min-height:560px}
.li-envelope,.li-table-shadow,.li-stage-heading p,.li-scroll-cue,.li-skip,.li-replay{display:none!important}
.li-cue-line i{animation:none}}
.li-opening[data-complete="true"] .li-card{will-change:auto}
.li-paper:after{background-image:var(--li-paper-surface);background-size:680px 400px;background-repeat:repeat;opacity:.82;mix-blend-mode:multiply}
.li-flap-front{background:#f4f0e5;border-top:1px solid #fffdf4}
.li-left{background:linear-gradient(100deg,#e9e4d7,#ece7da)}
.li-right{background:linear-gradient(260deg,#f1ece0,#ece7db)}
.li-pocket{background:#f1ecdf;box-shadow:inset 0 -1px 0 #cfc6b5}
.li-back{filter:drop-shadow(0 1px 1px #554b3826) drop-shadow(4px 7px 8px #554b381c)}
.li-pocket-shadow{opacity:.07}
.li-seams{opacity:.35}
.li-front{filter:drop-shadow(0 0 .6px #7d6840) drop-shadow(0 1px 1px #604c2c33)}
.li-stage-heading,.li-envelope-imprint{visibility:hidden}
.li-card h2{font-size:36px;letter-spacing:0}
.li-card-message>p{font-size:15.5px;line-height:1.55;max-width:240px;margin:0 auto}
.li-card-signature{font-size:11px;letter-spacing:0}
.li-opening{height:460svh}
.li-vellum{position:absolute;left:-4px;top:-4px;width:408px;height:628px;z-index:9;perspective:1100px;transform-style:preserve-3d;pointer-events:none}
.li-vellum-flat,.li-vellum-strip{background:rgba(247,245,237,.88);backdrop-filter:blur(.6px);-webkit-backdrop-filter:blur(.6px)}
.li-vellum-flat{position:absolute;inset:0;box-shadow:0 1px 2px #6c61491a;border:1px solid #ddd8cb55}
.li-vellum-strip{position:absolute;top:0;left:0;height:628px;overflow:hidden;transform-origin:50% 50%;backface-visibility:visible;will-change:transform}
.li-vellum-art{position:absolute;top:0;width:408px;height:628px;color:#4b483f;text-align:center}
.li-vellum-art img{position:absolute;left:146px;top:298px;width:116px;height:auto;opacity:.8}
.li-vellum-art span{position:absolute;top:347px;left:0;width:100%;font-size:10.5px;line-height:1.4;font-weight:400;letter-spacing:0}
.li-vellum-fold-shadow{position:absolute;top:0;height:100%;width:70px;z-index:8;background:linear-gradient(90deg,transparent,#50483120,transparent);pointer-events:none}
@media(prefers-reduced-motion:reduce){.li-vellum,.li-vellum-fold-shadow{display:none}}
.li-paper:after{background-size:cover;background-repeat:no-repeat}
.li-card-stock:after{background-image:var(--li-paper-texture);opacity:.28}
.li-vellum-flat,.li-vellum-strip{backdrop-filter:none;-webkit-backdrop-filter:none}
.li-vellum-strip{background:#f4f1e9}
.li-card-wordmark{background:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwJSIgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTY1LjQzIDQ1LjkiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMy4zNiw1LjQ1aDMuODV2MjcuNDhsLTEuNDQtMS40MWgxNC4yNnYzLjA5SDMuMzZWNS40NVoiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNi4zOCwzMy42OXEtMi41MS0xLjQxLTMuOTMtMy45M3QtMS40Mi01LjczLDEuNC01LjYsMy44Ny0zLjg5LDUuNTQtMS40LDUuNDMsMS41LDMuNDksNC4wMywxLjA2LDUuNTJoLTE5LjE1di0yLjMyaDE2Ljk4bC0xLjQ0LDEuMzZxLjA0LTIuMi0uNjYtMy45Ni0uNy0xLjc3LTIuMTYtMi43OS0xLjQ2LTEuMDItMy41NS0xLjAyLTIuMDQsMC0zLjY4LDEuMDItMS42NCwxLjAyLTIuNTgsMi45My0uOTUsMS45LS45NSw0LjQ2LDAsMi40OSwxLjAzLDQuMzcsMS4wMiwxLjg4LDIuOCwyLjksMS43OCwxLjAzLDQuMDIsMS4wMiwyLjQ5LDAsNC40OS0xLjE2LDItMS4xNiwzLjI5LTMuMTZsMS42NC45MnEtLjYsMS41Mi0xLjk2LDIuOTgtMS4zNywxLjQ3LTMuNDMsMi40MS0yLjA2Ljk0LTQuNTUuOTRRMjguODgsMzUuMDksMjYuMzgsMzMuNjlaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTUuODQsNS40NWgzLjg0djI5LjE2aC0zLjg0VjUuNDVaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjUuODUsMTMuNjJoMy40NHY0LjMzbC0uNTYtLjg1cTEuMTItMS44NCwzLjA1LTIuOXQ0LjUyLTEuMDZxMi4yNSwwLDQuMDEuODQsMS43Ni44NCwyLjgyLDIuNzIsMS4wNiwxLjg5LDEuMDYsNC44NXYxMy4wNmgtMy42NHYtMTIuNjZxMC0yLS42LTMuMzItLjYtMS4zMy0xLjc0LTEuOTctMS4xNC0uNjQtMi43OS0uNjQtMS45MiwwLTMuMjQuODItMS4zMi44Mi0yLDIuMTctLjY5LDEuMzQtLjY5LDIuOTR2MTIuNjZoLTMuNjRWMTMuNjJaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNODcuMjgsMTMuNjJoMy44OWw3LjUzLDE5LjU5aC0yLjA5bDcuNTMtMTkuNTloMy4yMWwtOC40NSwyMC45OWgtMy4xN0w4Ny4yOCwxMy42MloiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMTEuNDEsOC43OXEtLjY2LS42Ni0uNjYtMS42MnQuNjYtMS42MiwxLjYyLS42NiwxLjYzLjY2LjY2LDEuNjItLjY2LDEuNjItMS42My42NlQxMTEuNDEsOC43OVpNMTExLjE5LDEzLjYyaDMuNjV2MjAuOTloLTMuNjVWMTMuNjJaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTIzLjcxLDMzLjM3cS0xLjYyLTEuNzItMS42Mi00LjYxdi0xNC4wNmwxLjY0LDEuNjRoLTUuMDl2LTEuODRsMS4zMi0uMjRxMS4zMy0uMjQsMi4wMS0xLjAydC45Mi0yLjQ2bC4zNi0yLjUzaDIuNDh2Ni42MWwtMS42NC0xLjI0aDguNjV2Mi43MmgtOC42NWwxLjY0LTEuMjR2MTMuNXEwLDEuODQuOTgsMi44Ni45OCwxLjAzLDIuNzEsMS4wMi44NCwwLDEuNzItLjE5Ljg4LS4yMSwxLjY4LS41M2wuMzIsMi4wOXEtLjkyLjU2LTIuMjYuOS0xLjM0LjM0LTIuNzUuMzRRMTI1LjMzLDM1LjA5LDEyMy43MSwzMy4zN1oiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDAuNDUsMzMuNjlxLTIuNS0xLjQxLTMuOTItMy45M3QtMS40My01LjczLDEuNDEtNS42LDMuODYtMy44OSw1LjU1LTEuNCw1LjQzLDEuNSwzLjQ4LDQuMDMsMS4wNiw1LjUyaC0xOS4xNHYtMi4zMmgxNi45OGwtMS40NCwxLjM2cS4wNC0yLjItLjY2LTMuOTYtLjctMS43Ny0yLjE3LTIuNzktMS40Ni0xLjAyLTMuNTQtMS4wMi0yLjA0LDAtMy42OSwxLjAyLTEuNjQsMS4wMi0yLjU4LDIuOTMtLjk0LDEuOS0uOTQsNC40NiwwLDIuNDksMS4wMiw0LjM3LDEuMDIsMS44OCwyLjgxLDIuOSwxLjc4LDEuMDMsNC4wMiwxLjAyLDIuNDgsMCw0LjQ5LTEuMTYsMi0xLjE2LDMuMjgtMy4xNmwxLjY0LjkycS0uNiwxLjUyLTEuOTYsMi45OC0xLjM2LDEuNDctMy40MiwyLjQxLTIuMDcuOTQtNC41NS45NFExNDIuOTYsMzUuMDksMTQwLjQ1LDMzLjY5WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2MC4xNCwzNC4zM3EtLjY4LS42OC0uNjgtMS42NHQuNjgtMS42MywxLjY0LS43LDEuNjQuNy42OCwxLjYzLS42OCwxLjY0LTEuNjQuNjhUMTYwLjE0LDM0LjMzWiIvPgo8L3N2Zz4=") center no-repeat;background-size:92px auto;color:transparent;text-shadow:none;opacity:.65}
/* Additional unwrap interval; the selected paper styles remain untouched. */
.li-opening{height:576.1svh}
@media(prefers-reduced-motion:no-preference){.li-opening{height:calc(400svh + 130svh)}}
.li-ribbon-canvas{position:absolute;inset:0;width:100%;height:100%;z-index:8;pointer-events:none}
@media(prefers-reduced-motion:reduce){.li-opening{height:auto}.li-ribbon-canvas{display:none}}

/* Only the tabletop and controls follow the host theme; the stationery stays ivory. */
.li-opening{--li-stage-center:#faf9f0;--li-stage-edge:#f5f3e8}
.li-opening[data-li-ready="false"] .li-stage > *{visibility:hidden}
.li-opening[data-li-theme="dark"]{--li-stage-center:#302e2a;--li-stage-edge:#1b1b19;background:#1b1b19;color:#e9e2d5}
.li-opening[data-li-theme="dark"] .li-stage-footer{color:#d6ccba}
.li-opening[data-li-theme="dark"] .li-stage-footer button{border-bottom-color:#8c806c}
.li-opening[data-li-theme="dark"] .li-cue-line{background:#605848}
.li-opening[data-li-theme="dark"] .li-cue-line i{background:#d0bea0}
.li-opening[data-li-theme="dark"] .li-stage:after{opacity:.06}
.li-opening[data-li-theme="dark"] button:focus-visible{outline-color:#d4bd96}
.li-card-photo{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover}
.li-shop{display:none;color:#6b5a3c;text-decoration:none;border-bottom:1px solid #C5A059;padding-bottom:2px;letter-spacing:.06em;font-size:14px}
.li-opening[data-complete="true"] .li-shop{display:inline-block}
.li-opening .li-stage{background:transparent!important}
.li-stage-heading,.li-stage-footer{display:none!important}
.li-envelope-imprint{visibility:visible!important;font-size:15px!important;letter-spacing:.14em!important;white-space:nowrap}
.li-opening .li-stage:after{display:none}
.li-opening{background:transparent!important}
.li-stage-heading>span{font-family:"Great Vibes",cursive;font-size:30px;letter-spacing:0;color:#8A6A28}
.li-envelope-paper{background:linear-gradient(120deg,#ead9bd,#dcc8a4 100%)!important}
.li-flap-front{background:linear-gradient(160deg,#f3e7d0 1%,#ecdcc0 46%,#e4d1b0 100%)!important}
.li-left{background:linear-gradient(100deg,#eadbc0,#d8c4a0)!important}
.li-right{background:linear-gradient(260deg,#f0e3cb,#ddcaa7)!important}
.li-pocket{background:linear-gradient(160deg,#f4e8d2,#e8d8bb 70%)!important}


.li-seal{position:absolute;left:50%;top:190px;width:122px;height:122px;transform:translateX(-50%) translateZ(1px);backface-visibility:hidden;-webkit-backface-visibility:hidden;z-index:3;filter:drop-shadow(0 3px 3px rgba(70,45,10,.4))}
.li-envelope-paper,.li-left,.li-right,.li-pocket,.li-flap-front{background:linear-gradient(rgba(255,250,240,.3),rgba(255,250,240,.3)),url("/assets/li/lace.jpg") 0 0/300px auto!important}
.li-envelope-paper:after,.li-left:after,.li-right:after,.li-pocket:after,.li-flap-front:after{opacity:.1!important}
.li-envelope-imprint{left:50%!important;right:auto!important;transform:translateX(-50%);bottom:30px!important;padding:7px 18px;background:#f8f1e2;border:1px solid #C5A059;color:#6b5230!important;text-shadow:none!important;font-size:13px!important}
.li-opening .li-stage{top:84px!important;height:calc(100svh - 84px)!important}
.li-opening{margin-bottom:0}
@media(max-width:860px){.li-opening .li-stage{top:62px!important;height:calc(100svh - 62px)!important}}

.li-envelope-imprint{display:none!important}
.li-flap-edge{position:absolute;left:0;top:0;width:680px;height:340px;overflow:visible;transform:translateZ(.5px);backface-visibility:hidden;-webkit-backface-visibility:hidden;pointer-events:none;z-index:2}
.li-sub{position:absolute;left:0;right:0;top:20px;text-align:center;z-index:12;pointer-events:none;font-family:'Great Vibes',cursive;font-weight:400;font-size:clamp(40px,5.4vw,78px);line-height:1.15;white-space:nowrap;padding:0 .1em;background-image:linear-gradient(100deg,#7d5c1f 0%,#b98f3d 24%,#efd48b 46%,#c5a059 60%,#8a6a28 80%,#c9a352 100%);background-size:260% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;will-change:opacity}
.li-seal{width:96px;height:96px;top:262px}
.li-envelope-paper,.li-left,.li-right,.li-pocket,.li-flap-front,.li-liner,.li-flap-inside{-webkit-mask:radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 100%/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-y,radial-gradient(circle,#000 13.4px,transparent 14px) 100% 0/27px 27px repeat-y,linear-gradient(#000,#000) 50% 50%/calc(100% - 22px) calc(100% - 22px) no-repeat;mask:radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 100%/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-y,radial-gradient(circle,#000 13.4px,transparent 14px) 100% 0/27px 27px repeat-y,linear-gradient(#000,#000) 50% 50%/calc(100% - 22px) calc(100% - 22px) no-repeat}
`,og='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2048" height="1201" viewBox="0 0 2048 1201"><defs><filter id="grain" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="2.4" intercept="-1.37"/><feFuncG type="linear" slope="2.4" intercept="-1.37"/><feFuncB type="linear" slope="2.4" intercept="-1.37"/></feComponentTransfer></filter></defs><image width="2048" height="1201" filter="url(#grain)" xlink:href="__PAPER_JPEG__"/></svg>',Ka;function lg(){return Ka||(Ka=(async()=>{let n=await fetch(ss.paperColor,{mode:"cors"});if(!n.ok)throw new Error(`Paper texture failed to load (${n.status}).`);let t=await n.arrayBuffer(),e=await new Promise((r,a)=>{let o=new FileReader;o.onload=()=>r(String(o.result)),o.onerror=()=>a(o.error||new Error("Paper texture could not be read.")),o.readAsDataURL(new Blob([t],{type:"image/jpeg"}))}),i=og.replace("__PAPER_JPEG__",e),s=URL.createObjectURL(new Blob([i],{type:"image/svg+xml"}));try{let r=new Image;return r.src=s,await r.decode(),s}catch(r){throw URL.revokeObjectURL(s),r}})().catch(n=>{throw Ka=void 0,n})),Ka}var{SCROLL_EXTENSION:yl,authoredClock:cg,scrollClock:ug}=(()=>{let t=.1637489716078054,e=.245,i=e-t,s=i+.035;function r(o){if(o<=t)return o;if(o>=e+.035)return o-.035;let c=(o-t)/s;return t+i*c+.035*c*(1-c)*(1-2*c)}function a(o){if(o<=t)return o;if(o>=e)return o+.035;let c=t,l=e+.035;for(let h=0;h<32;h++){let f=(c+l)/2;r(f)<o?c=f:l=f}return(c+l)/2}return{SCROLL_EXTENSION:.035,authoredClock:r,scrollClock:a}})(),{applyRibbonWithdrawal:hg}=(()=>{let n=h=>Math.max(0,Math.min(1,h)),t=(h,f,u)=>{let d=n((u-h)/(f-h));return d*d*(3-2*d)},e=new _,i=new _,s=new _,r=new _,a=new _,o=new Ge;function c(h,f,u){let d=h.x,g=h.y,E=h.z;if(u.set(0,0,0),f<=.72)return u;let p=n((d+1.38)/4.8);if(p<=0||p>=1)return u;let m=t(-.1,.025,E),T=1-t(.18,.45,Math.abs(g+.2)),R=t(.72,.88,f),y=-1.38+4.8*t(.725,.875,f),b=.35+.65*t(d-.85,d+.85,y),A=Math.pow(Math.sin(Math.PI*p),2)*m*T*R*b;return u.set(-.055*A,-.42*A,.46*A),u}function l(h,f,u,d){d<=.72||(e.copy(f),s.copy(h).addScaledVector(e,5e-4),r.copy(h).addScaledVector(e,-5e-4),c(s,d,s),c(r,d,r),i.copy(e).addScaledVector(s.sub(r),1e3).normalize(),c(h,d,a),h.add(a),o.setFromUnitVectors(e,i),u.applyQuaternion(o).normalize(),f.copy(i))}return{applyRibbonWithdrawal:l}})(),{createRibbonStrips:dg}=(()=>{let a=R=>Math.max(0,Math.min(1,R)),o=(R,y,b)=>{let A=a((b-R)/(y-R));return A*A*(3-2*A)},c=(R,y,b)=>R+(y-R)*b,l=[0,0,1],h=[0,0,-1],f=[];function u(R,y,b,A=0,M=0,S=l){f.push({p:new _(R,y,b),roll:A,fold:M,n:new _(...S)})}function d(R,y,b,A=0,M=0){u(-1.7+R,-.2+y,b,A,M)}d(-.43,-.95,.065,-.25),d(-.37,-.74,.065,-.15),d(-.24,-.48,.18,.15,.12),d(-.08,-.15,.19,.5,.6),d(.08,-.08,.15,.55,.65),d(.38,-.09,.14,.24,.12),d(.7,-.02,.2,.4),d(.84,.18,.3,1.15),d(.79,.37,.24,2.45),d(.56,.39,.18,2),d(.32,.24,.18,1.1,.12),d(.03,.01,.16,.5,.6),d(.04,-.015,.09,.15,.3),d(.32,0,.045),u(2.8,-.2,.043),u(3.25,-.2,.043),u(3.39,-.2,.043),u(3.411,-.2,.005,0,0,[.7,0,.7]),u(3.416,-.2,-.045,0,0,[1,0,0]),u(3.408,-.2,-.105,0,0,[.6,0,-.8]),u(3.28,-.2,-.13,0,0,h),u(2.9,-.2,-.13,0,0,h),u(1.8,.55,-.13,0,0,h),u(-.7,1.65,-.13,0,0,h),u(-1.7,1.94,-.13,0,0,h),u(-1.7,2.16,-.13,0,0,h),u(-1.7,2.208,-.1,0,0,[0,.6,-.8]),u(-1.7,2.216,-.045,0,0,[0,1,0]),u(-1.7,2.211,.015,0,0,[0,.6,.8]),u(-1.7,2.19,.036),u(-1.7,1.93,.036),u(-1.7,1.2,.036),u(-1.7,-.2,.036),u(-1.7,-1.4,.036),u(-1.7,-2.1,.036),u(-1.7,-2.19,.036),u(-1.7,-2.211,.015,0,0,[0,-.6,.8]),u(-1.7,-2.216,-.045,0,0,[0,-1,0]),u(-1.7,-2.208,-.1,0,0,[0,-.6,-.8]),u(-1.7,-2.16,-.13,0,0,h),u(-1.7,-1.93,-.13,0,0,h),u(-2.65,-1.05,-.13,0,0,h),u(-3.14,-.2,-.13,0,0,h),u(-3.32,-.2,-.13,0,0,h),u(-3.408,-.2,-.105,0,0,[-.6,0,-.8]),u(-3.416,-.2,-.045,0,0,[-1,0,0]),u(-3.411,-.2,.005,0,0,[-.7,0,.7]),u(-3.39,-.2,.043),u(-3.15,-.2,.043),u(-1.7-.4,-.2,.043),u(-1.7-.12,-.2-.01,.08,.2,.2),d(-.06,-.12,.1,.05,.3),d(-.04,-.16,.18,.05,.25),d(.015,-.11,.3,.06,.25),d(.025,.09,.3,.06,.22),d(-.01,.145,.2,.05,.2),d(-.045,.11,.085,.15,.35),d(-.12,0,.1,.35,.5),d(-.38,-.09,.22,.35,.1),d(-.68,-.04,.27,.75),d(-.86,.14,.25,1.6),d(-.79,.33,.18,2.55),d(-.58,.35,.14,2.85),d(-.31,.2,.12,2.95,.1),d(-.06,.02,.11,2.55,.55),d(.05,-.15,.15,1,.55),d(.19,-.37,.15,.2,.12),d(.38,-.69,.09,-.25),d(.46,-.92,.095,-.6);function g(R=0,y=0,b=0){let A=f.map(ct=>({...ct,p:ct.p.clone(),n:ct.n.clone()}));A[4].p.z=c(A[4].p.z,.12,b);for(let ct=5;ct<=10;ct++){let Jt=[.72,1,1,1,1,.75][ct-5],at=R*Jt;A[ct].p.x=-1.7+.12+(A[ct].p.x- -1.7-.12)*(1-.34*at),A[ct].p.y=-.2+.025+(A[ct].p.y- -.2-.025)*(1-.25*at),A[ct].p.z=.11+(A[ct].p.z-.11)*(1-.2*at),A[ct].fold*=1-.35*R}for(let ct=51;ct<=57;ct++){let Jt=Math.sin((ct-50)/8*Math.PI);A[ct].p.z+=.075*y*Jt,A[ct].p.y+=.045*y*Jt*(ct<54?-1:1),A[ct].fold*=1-.7*y}for(let ct=58;ct<=64;ct++){let Jt=Math.sin((ct-57)/8*Math.PI),at=y*Jt;A[ct].p.x=-1.7-.1+(A[ct].p.x- -1.7+.1)*(1-.21*at),A[ct].p.y=-.2+.015+(A[ct].p.y- -.2-.015)*(1-.3*at),A[ct].p.z=.065+(A[ct].p.z-.065)*(1-.55*at),A[ct].roll*=1-.25*at,A[ct].fold*=1-.55*at}let M=new ws(A.map(ct=>ct.p),!1,"centripetal");M.arcLengthDivisions=6e3;let S=M.getLength(),z=[],C=[],L=[],B=[],F=[],w=new _,H=new _,Q=new Ge,O=new _;for(let ct=0;ct<=3600;ct++){let Jt=ct/3600,at=M.getUtoTmapping(Jt),At=M.getPoint(at),Et=M.getTangent(at).normalize(),pt=at*(f.length-1),Ot=Math.min(f.length-2,Math.floor(pt)),Ut=pt-Ot,ee=A[Ot].n.clone().lerp(A[Ot+1].n,Ut).normalize(),Gt=new _().crossVectors(ee,Et);ct&&(Q.setFromUnitVectors(H,Et),O.copy(w).applyQuaternion(Q)),Gt.lengthSq()<.015&&Gt.copy(ct?O:new _(1,0,0)),Gt.normalize(),ct&&Gt.dot(O)<0&&Gt.negate(),w.copy(Gt),H.copy(Et),z.push(At),C.push(Gt),F.push(Et),L.push(c(A[Ot].roll,A[Ot+1].roll,Ut)),B.push(c(A[Ot].fold,A[Ot+1].fold,Ut))}let tt=z[0],V=F[0].clone().negate(),G=tt.clone().addScaledVector(V,2);G.z=Math.max(tt.z,G.z);let $=new Xn(tt.clone(),G,new _(-9,-5,.2),new _(-S-64,-14,.26));$.arcLengthDivisions=4e3;let ft=M.getLengths(),_t=ft[Math.round(M.arcLengthDivisions*13/(f.length-1))],k=ft[Math.round(M.arcLengthDivisions*4/(f.length-1))],ut=ft[Math.round(M.arcLengthDivisions*51/(f.length-1))],vt=ft[Math.round(M.arcLengthDivisions*57/(f.length-1))],Dt=ft[Math.round(M.arcLengthDivisions*57/(f.length-1))],gt=ft[Math.round(M.arcLengthDivisions*65/(f.length-1))];return{length:S,points:z,sides:C,rolls:L,folds:B,tangents:F,releaseLength:_t,bightStartLength:k,collarStartLength:ut,collarEndLength:vt,leftLoopStartLength:Dt,leftLoopEndLength:gt,exitCurve:$,exitLength:$.getLength()}}let E=g(),p=E.length;class m extends fn{constructor(y){super(),this.controls=y}getPoint(y,b=new _){let A=1-y,M=this.controls;return b.set(0,0,0).addScaledVector(M[0],A*A*A*A).addScaledVector(M[1],4*A*A*A*y).addScaledVector(M[2],6*A*A*y*y).addScaledVector(M[3],4*A*y*y*y).addScaledVector(M[4],y*y*y*y)}}function T(R){let y=new hi;y.name="one-continuous-cross-wrap";let b=new ni,A=new He(new Float32Array(1281*21*3),3),M=new He(new Float32Array(1281*21*2),2);A.setUsage(Xa),b.setAttribute("position",A),b.setAttribute("uv",M);let S=[];for(let at=0;at<1280;at++)for(let At=0;At<20;At++){let Et=at*21+At,pt=Et+20+1;S.push(Et,pt,Et+1,Et+1,pt,pt+1)}b.setIndex(S);for(let at=0;at<=1280;at++)for(let At=0;At<=20;At++)M.setXY(at*21+At,at/1280*p,At/20*.235);let z=new fe(b,R);z.name="single-material-ribbon",z.castShadow=!0,z.receiveShadow=!0,z.frustumCulled=!1,y.add(z);let C=new _,L=new _,B=new _,F=new _,w=new _,H=new Float64Array(21),Q=new Float64Array(21),O=-1,tt=-1,V=!1,G=E,$=0,ft=new _(-.9,-.435,0).normalize(),_t=.72,k=null,ut=0;function vt(at,At=G){let Et=a(at/At.length)*3600,pt=Math.min(3599,Math.floor(Et)),Ot=Et-pt;return{p:At.points[pt].clone().lerp(At.points[pt+1],Ot),t:At.tangents[pt].clone().lerp(At.tangents[pt+1],Ot).normalize(),s:At.sides[pt].clone().lerp(At.sides[pt+1],Ot).normalize(),roll:c(At.rolls[pt],At.rolls[pt+1],Ot),fold:c(At.folds[pt],At.folds[pt+1],Ot)}}function Dt(at,At,Et){if(at<1e-7)return null;let pt=vt(At),Ot=vt(G.bightStartLength),Ut=new _(-1.7-.03,-.2-.1,.11),ee=new _(-1.7-.15,-.2-.23,.12),Gt=new _(-.93,-.37,0).normalize(),Ee=new _(-.45,-.89,0).normalize(),jt=pt.p.distanceTo(Ut),Me=Ut.clone().sub(pt.p).normalize(),ne=o(-.1,.8,pt.t.dot(Me)),ae=Math.max(Math.min(.18,jt*.28),.24*ne);Et>.535&&pt.t.z<0&&(ae=Math.min(ae,.04/-pt.t.z));let P=pt.p.clone().addScaledVector(pt.t,-ae);P.z=Math.max(.07,P.z);let ce=pt.p.clone().lerp(Ut,.42);ce.z+=(.5-.25*o(.535,.565,Et))*ne;let ie=new m([pt.p.clone(),P,ce,Ut.clone().addScaledVector(Gt,-ae),Ut.clone()]);ie.arcLengthDivisions=500;let Mt=Ut.clone().addScaledVector(Gt,.05);Mt.z=.1;let it=ee.clone().addScaledVector(Ee,-.045);it.z=.1;let Xt=new Xn(Ut.clone(),Mt,it,ee.clone());Xt.arcLengthDivisions=300;let mt=jt<.003?0:ie.getLength(),Rt=Xt.getLength(),v=Math.max(.001,at-mt-Rt),x=G.points[0].clone();x.z+=.14*o(.02,.28,Et);let U=pt.p.clone().sub(x),et=U.dot(ft),Z=Math.max(0,U.lengthSq()-et*et),lt=Math.max(0,et+Math.sqrt(Math.max(0,at*at-Z)))*(.82+.12*o(.5,.66,Et)),Y=x.clone().addScaledVector(ft,lt),J=Math.min(.36,v*.2),dt=ee.clone().lerp(Y,.45);function N(Yt){let de=ee.clone().addScaledVector(Ee,J*Yt),ye=Y.clone().addScaledVector(ft,-J*Yt),Ye=dt.clone();Ye.z+=Math.min(.18,v*.12)*Yt;let sn=new m([ee.clone(),de,Ye,ye,Y.clone()]);return sn.arcLengthDivisions=180,sn}let K=Math.max(v,N(.12).getLength()),q=.12,ot=1,rt;for(;N(ot).getLength()<K&&ot<8;)ot*=1.5;for(let Yt=0;Yt<20;Yt++){let de=(q+ot)/2;rt=N(de),rt.getLength()<K?q=de:ot=de}rt=N((q+ot)/2),rt.arcLengthDivisions=800,rt.updateArcLengths();let ht=rt.getLength(),Nt=mt+Rt+ht,Ft=[],nt=[],wt=[],Vt=new Ge,yt=pt.t.clone(),re=pt.s.clone().applyAxisAngle(pt.t,pt.roll),he=640;for(let Yt=0;Yt<=he;Yt++){let de=Yt/he*Nt,ye,Ye;de<mt?(ye=ie,Ye=de/mt):de<mt+Rt?(ye=Xt,Ye=(de-mt)/Rt):(ye=rt,Ye=(de-mt-Rt)/ht);let sn=ye.getPointAt(a(Ye)),Bi=ye.getTangentAt(a(Ye)).negate().normalize(),yn=re.clone();Yt&&(Vt.setFromUnitVectors(yt,Bi),yn.applyQuaternion(Vt).normalize()),Ft.push(sn),nt.push(yn),wt.push(Bi),re=yn,yt=Bi}let Qe=null,Ui=new _,rs=new _;for(let Yt=0;Yt<=he;Yt++){if(Ui.crossVectors(new _(0,0,1),wt[Yt]),Ui.lengthSq()<1e-6)continue;Ui.normalize();let de=Math.atan2(wt[Yt].dot(rs.crossVectors(nt[Yt],Ui)),nt[Yt].dot(Ui));if(Qe!==null){for(;de-Qe>Math.PI;)de-=Math.PI*2;for(;de-Qe<-Math.PI;)de+=Math.PI*2}Qe=de;let ye=Yt/he*Nt;nt[Yt].applyAxisAngle(wt[Yt],de*o(0,Math.max(.02,mt*(.85-.25*o(.535,.565,Et))),ye))}let en=o(0,.08,Et),nn=[];for(let Yt=0;Yt<=he;Yt++){let de=Yt/he*Nt;if(nn[Yt]=pt.fold*(1-o(0,Math.max(.02,mt*.8),de)),en<1){let ye=vt(E.bightStartLength*(1-Yt/he),E);Ft[Yt].lerp(ye.p,1-en),wt[Yt].lerp(ye.t,1-en).normalize();let Ye=ye.s.applyAxisAngle(ye.t,ye.roll);nt[Yt].lerp(Ye,1-en),nt[Yt].addScaledVector(wt[Yt],-nt[Yt].dot(wt[Yt])).normalize(),nn[Yt]=c(ye.fold,nn[Yt],en)}}return{points:Ft,sides:nt,tangents:wt,folds:nn,N:he,length:at,fold:pt.fold,head:Ft[he].clone(),connectorLength:mt,throatLength:Rt,drawnLength:ht/Nt*at,actualLength:Nt,throatIn:Ut.toArray(),throatOut:ee.toArray()}}function gt(at){if(at<-$){let Et=k?k.head:G.points[0];return C.copy(Et).addScaledVector(ft,-$-at),L.copy(ft).negate(),B.copy(k?k.sides[k.N]:G.sides[0]),{roll:0,fold:0}}if(k&&at<ut){let Et=ut-at,pt=a(Et/k.length)*k.N,Ot=Math.min(k.N-1,Math.floor(pt)),Ut=pt-Ot;return C.copy(k.points[Ot]).lerp(k.points[Ot+1],Ut),L.copy(k.tangents[Ot]).lerp(k.tangents[Ot+1],Ut).normalize(),B.copy(k.sides[Ot]).lerp(k.sides[Ot+1],Ut).normalize(),{roll:0,fold:c(k.folds[Ot],k.folds[Ot+1],Ut)}}let At=vt(at);return C.copy(At.p),L.copy(At.t),B.copy(At.s),{roll:At.roll,fold:At.fold}}function ct(at){if(at>=.08)return;let At=21,Et=p/1280;function pt(Mt,it){let Xt=[],mt=Math.max(0,Math.floor(($+Mt)/Et)),Rt=Math.min(1280,Math.ceil(($+it)/Et));function v(et,Z,st){let lt=A.getX(et),Y=A.getY(et),J=A.getZ(et),dt=A.getX(Z),N=A.getY(Z),K=A.getZ(Z),q=A.getX(st),ot=A.getY(st),rt=A.getZ(st),ht=(N-ot)*(lt-q)+(q-dt)*(Y-ot);Math.abs(ht)<1e-10||Xt.push({ax:lt,ay:Y,az:J,bx:dt,by:N,bz:K,cx:q,cy:ot,cz:rt,den:ht,x0:Math.min(lt,dt,q),x1:Math.max(lt,dt,q),y0:Math.min(Y,N,ot),y1:Math.max(Y,N,ot)})}for(let et=mt;et<Rt;et++)for(let Z=0;Z<20;Z++){let st=et*At+Z,lt=st+At;v(st,lt,st+1),v(st+1,lt,lt+1)}let x=new Map,U=.12;for(let et of Xt)for(let Z=Math.floor(et.x0/U);Z<=Math.floor(et.x1/U);Z++)for(let st=Math.floor(et.y0/U);st<=Math.floor(et.y1/U);st++){let lt=Z+","+st,Y=x.get(lt);Y||(Y=[],x.set(lt,Y)),Y.push(et)}return x}let Ot=pt(G.leftLoopStartLength,G.leftLoopEndLength),Ut=pt(G.collarStartLength,G.collarEndLength);function ee(Mt,it,Xt){let mt=-1/0,Rt=Mt.get(Math.floor(it/.12)+","+Math.floor(Xt/.12))||[];for(let v of Rt){if(it<v.x0||it>v.x1||Xt<v.y0||Xt>v.y1)continue;let x=((v.by-v.cy)*(it-v.cx)+(v.cx-v.bx)*(Xt-v.cy))/v.den,U=((v.cy-v.ay)*(it-v.cx)+(v.ax-v.cx)*(Xt-v.cy))/v.den;x>=-1e-7&&U>=-1e-7&&x+U<=1.0000001&&(mt=Math.max(mt,x*v.az+U*v.bz+(1-x-U)*v.cz))}return mt}let Gt=Math.floor(.6/Et),Ee=Math.ceil(($+G.bightStartLength+.15)/Et),jt=[],Me=.05,ne=.006;for(let Mt=Gt;Mt<=Ee;Mt++){let it=[];for(let x=0;x<=20;x++)it.push(new _().fromBufferAttribute(A,Mt*At+x));let Xt=it[20/2].clone(),mt=it[20].clone().sub(it[0]),Rt=new _(-mt.y,mt.x,0).normalize(),v=Math.atan2(mt.z,Math.hypot(mt.x,mt.y));jt.push({row:Mt,points:it,centre:Xt,axis:Rt,angle:v,flatten:0,drop:0})}function ae(Mt,it,Xt=!1){let mt=0,Rt=1/0;for(let v=0;v<=20;v++){let x=Mt.points[v].clone().sub(Mt.centre).applyAxisAngle(Mt.axis,Mt.angle*it).add(Mt.centre);Rt=Math.min(Rt,x.z);let U=ee(Ot,x.x,x.y);U>-1/0&&ee(Ut,x.x,x.y)<=x.z+.002&&(mt=Math.max(mt,x.z-U+ne)),Xt&&A.setXYZ(Mt.row*At+v,x.x,x.y,x.z)}return{required:Math.max(0,mt),available:Math.max(0,Rt-Me)}}for(let Mt of jt){let it=ae(Mt,0);if(it.required>it.available){let Xt=0,mt=1;for(let Rt=0;Rt<12;Rt++){let v=(Xt+mt)/2,x=ae(Mt,v);x.required<=x.available?mt=v:Xt=v}Mt.flatten=Math.min(1,mt+.015)}}let P=Et/.1;for(let Mt=1;Mt<jt.length;Mt++)jt[Mt].flatten=Math.max(jt[Mt].flatten,jt[Mt-1].flatten-P);for(let Mt=jt.length-2;Mt>=0;Mt--)jt[Mt].flatten=Math.max(jt[Mt].flatten,jt[Mt+1].flatten-P);let ce=1-o(.06,.08,at);for(let Mt of jt){let it=ae(Mt,Mt.flatten*ce,!0);Mt.drop=it.required,Mt.available=it.available}let ie=Et*.8;for(let Mt=1;Mt<jt.length;Mt++)jt[Mt].drop=Math.max(jt[Mt].drop,jt[Mt-1].drop-ie);for(let Mt=jt.length-2;Mt>=0;Mt--)jt[Mt].drop=Math.max(jt[Mt].drop,jt[Mt+1].drop-ie);for(let Mt of jt){let it=Math.min(Mt.drop,Mt.available)*ce;if(!(it<=0))for(let Xt=0;Xt<=20;Xt++){let mt=Mt.row*At+Xt;A.setZ(mt,A.getZ(mt)-it)}}}function Jt(at=0,At=16){if(V)return;let Et=a(at);if(Et===O&&At===tt)return;O=Et,tt=At;let pt=o(.02,.46,Et),Ot=o(.48,.7,Et);G=Et===0?E:g(pt,Ot,o(0,.08,Et)),$=p-G.length,ut=c(G.bightStartLength,G.releaseLength,o(.34,.67,Et)),k=Et===0?null:Dt(Math.max(0,$+ut),ut,Et);let Ut=(p+At)*o(_t,1,Et);for(let ee=0;ee<=1280;ee++){let Gt=ee/1280,Ee=Gt*p-Ut,{roll:jt,fold:Me}=gt(Ee-$);hg(C,L,B,Et),B.applyAxisAngle(L,jt),F.crossVectors(L,B).normalize(),H[0]=0,Q[0]=0;for(let ne=1;ne<=20;ne++){let ae=(ne-.5)/20,P=.12*Math.sin(ae*Math.PI*2+Ee*.65)*(1-Me),ce=.86*Me*Math.sin(ae*Math.PI*4+.4)+P+.07*(ae-.5);H[ne]=H[ne-1]+Math.cos(ce)*.235/20,Q[ne]=Q[ne-1]+Math.sin(ce)*.235/20}for(let ne=0;ne<=20;ne++){let ae=ne/20,ce=45e-5*Math.pow(Math.abs(ae*2-1),8)*(Math.sin(Ee*48+ae*5)+.4*Math.sin(Ee*97));w.copy(C).addScaledVector(B,H[ne]-H[20/2]).addScaledVector(F,Q[ne]-Q[20/2]+ce),A.setXYZ(ee*21+ne,w.x,w.y,w.z)}}ct(Et),A.needsUpdate=!0,b.computeVertexNormals(),y.visible=Et<.9999,y.userData.ribbonMetrics={progress:Et,materialLength:p,width:.235,meshCount:1,freeEnds:2,pull:ut+Ut,tailDistance:p-Ut,guideLength:p,anchoredUntil:_t,bowReleased:ut>=G.releaseLength-1e-4,heldUntil:_t,bightStart:$+Math.max(ut,G.bightStartLength)+Ut,bightEnd:$+G.releaseLength+Ut,bightLength:Math.max(0,G.releaseLength-Math.max(ut,G.bightStartLength)),freeTailLength:Math.max(0,$+ut),contraction:pt,relaxation:Ot,connectorLength:k?.connectorLength||0,throatLength:k?.throatLength||0,drawnMaterialEnd:Ut+(k?.drawnLength||0),throatIn:k?.throatIn,throatOut:k?.throatOut}}return Jt(0),{group:y,update:Jt,dispose(){V||(V=!0,b.dispose(),y.clear())}}}return{createRibbonStrips:T}})(),{createRibbonContact:fg}=(()=>{function n(t,e,i,s){let a=new Ce(1536,1536),o=new Ce(1536,1536),c=new Ce(1536,1536,{depthBuffer:!1});for(let p of[a,o,c])p.texture.generateMipmaps=!1;let l=new mn,h=new Ve({uniforms:{castPass:{value:0}},vertexShader:`
      uniform float castPass;varying float height;
      void main(){
        vec4 p=modelMatrix*vec4(position,1.);height=p.z;
        vec2 direction=mix(vec2(.12,-.16),vec2(.90,-1.20),castPass);
        vec2 xy=p.xy+direction*max(0.,p.z);
        gl_Position=vec4(xy/vec2(3.4,2.2),clamp(p.z/4.,-.999,.999),1.);
      }`,fragmentShader:`
      uniform float castPass;varying float height;
      void main(){
        if(height<.001)discard;
        float closeShadow=.43*exp(-height*11.);
        float raisedShadow=.36*exp(-height*.90)*smoothstep(.005,.055,height);
        gl_FragColor=vec4(.20,.15,.10,mix(closeShadow,raisedShadow,castPass));
      }`,side:Xe}),f=new Pi,u=new Ve({uniforms:{source:{value:a.texture},direction:{value:new qt(1/1536,0)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D source;uniform vec2 direction;varying vec2 vUv;void main(){vec4 c=texture2D(source,vUv)*.227027;c+=texture2D(source,vUv+direction*1.384615)*.316216;c+=texture2D(source,vUv-direction*1.384615)*.316216;c+=texture2D(source,vUv+direction*3.230769)*.070270;c+=texture2D(source,vUv-direction*3.230769)*.070270;gl_FragColor=c;}",depthTest:!1,depthWrite:!1}),d=new fe(new si(2,2),u);f.add(d);let g=[o,a].map((p,m)=>{let T=new Xi({map:p.texture,transparent:!0,depthWrite:!1,toneMapped:!1}),R=new fe(new si(6.8,4.4),T);return R.position.z=.001+m*2e-4,R.renderOrder=m,i.add(R),R});function E(p,m,T){h.uniforms.castPass.value=m,e.overrideMaterial=h,t.setRenderTarget(p),t.render(e,l),e.overrideMaterial=null,u.uniforms.source.value=p.texture,u.uniforms.direction.value.set(T/1536,0),t.setRenderTarget(c),t.render(f,l),u.uniforms.source.value=c.texture,u.uniforms.direction.value.set(0,T/1536),t.setRenderTarget(p),t.render(f,l)}return{update(){let p=t.getRenderTarget(),m=e.overrideMaterial;for(let T of g)T.visible=!1;s.visible=!1;try{E(a,0,1.5),E(o,1,5.5)}finally{e.overrideMaterial=m;for(let T of g)T.visible=!0;s.visible=!0,t.setRenderTarget(p)}},dispose(){a.dispose(),o.dispose(),c.dispose(),h.dispose(),u.dispose(),d.geometry.dispose();for(let p of g)p.geometry.dispose(),p.material.dispose(),i.remove(p)}}}return{createRibbonContact:n}})(),{createVellum:pg}=(()=>{let i=a=>Math.max(0,Math.min(1,a)),s=(a,o,c)=>{let l=i((c-a)/(o-a));return l*l*(3-2*l)};function r({bumpMap:a=null,map:o=null,inkMap:c=null}={}){let l=new si(4.08,6.28,30,54),h=l.getAttribute("position"),f=new Float32Array(h.array);h.setUsage(Xa);let u=new Ve({uniforms:{tScene:{value:null},uResolution:{value:new qt(1,1)},uHasScene:{value:0},uPaperMap:{value:o},uBump:{value:a},uInkMap:{value:c},uHasPaperMap:{value:o?1:0},uHasBump:{value:a?1:0},uHasInkMap:{value:c?1:0},uPaperColor:{value:new Ht(16776437)},uPeel:{value:0}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vViewNormal;
      varying float vLift;

      void main() {
        vUv = uv;
        vViewNormal = normalize(normalMatrix * normal);
        vLift = max(position.z, 0.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tScene;
      uniform sampler2D uPaperMap;
      uniform sampler2D uBump;
      uniform sampler2D uInkMap;
      uniform vec2 uResolution;
      uniform vec3 uPaperColor;
      uniform float uHasScene;
      uniform float uHasPaperMap;
      uniform float uHasBump;
      uniform float uHasInkMap;
      uniform float uPeel;
      varying vec2 vUv;
      varying vec3 vViewNormal;
      varying float vLift;

      vec3 sceneSample(vec2 uv) {
        return texture2D(tScene, clamp(uv, vec2(0.001), vec2(0.999))).rgb;
      }

      void main() {
        vec2 screenUv = gl_FragCoord.xy / max(uResolution, vec2(1.0));
        float raised = clamp(vLift / 2.4, 0.0, 1.0);
        float blurPx = mix(0.35, 1.0, max(raised, uPeel * 0.35));
        vec2 stepUv = vec2(blurPx) / max(uResolution, vec2(1.0));
        vec3 underneath = uPaperColor;

        if (uHasScene > 0.5) {
          // Nine samples, separable-Gaussian weights summing to sixteen.
          underneath = sceneSample(screenUv) * 4.0;
          underneath += sceneSample(screenUv + vec2(stepUv.x, 0.0)) * 2.0;
          underneath += sceneSample(screenUv - vec2(stepUv.x, 0.0)) * 2.0;
          underneath += sceneSample(screenUv + vec2(0.0, stepUv.y)) * 2.0;
          underneath += sceneSample(screenUv - vec2(0.0, stepUv.y)) * 2.0;
          underneath += sceneSample(screenUv + stepUv);
          underneath += sceneSample(screenUv - stepUv);
          underneath += sceneSample(screenUv + vec2(stepUv.x, -stepUv.y));
          underneath += sceneSample(screenUv + vec2(-stepUv.x, stepUv.y));
          underneath /= 16.0;
        }

        float fibre = 0.0;
        if (uHasPaperMap > 0.5) {
          fibre += (dot(texture2D(uPaperMap, vUv).rgb, vec3(0.333333)) - 0.5) * 0.014;
        }
        if (uHasBump > 0.5) {
          fibre += (texture2D(uBump, vUv).r - 0.5) * 0.012;
        }

        vec3 n = normalize(vViewNormal);
        if (!gl_FrontFacing) n = -n;
        vec3 keyLight = normalize(vec3(-0.45, 0.68, 1.0));
        float diffuse = 0.90 + 0.10 * max(dot(n, keyLight), 0.0);
        float paperAmount = clamp(mix(0.76, 0.84, raised) + fibre, 0.74, 0.86);
        vec3 paper = uPaperColor * diffuse + vec3(fibre * 0.35);
        vec3 outgoing = mix(underneath, paper, paperAmount);
        // A gentle diffuse contour keeps the curl legible without glass glare.
        outgoing *= 0.97 + 0.03 * max(dot(n, keyLight), 0.0);
        if (uHasInkMap > 0.5) {
          // Printing belongs to the sheet's UVs, so it follows the curl and
          // stays crisp instead of going through the background blur pass.
          vec4 ink = texture2D(uInkMap, vUv);
          float inkLuma = dot(ink.rgb, vec3(0.2126, 0.7152, 0.0722));
          float inkAlpha = ink.a * (gl_FrontFacing ? 1.0 : 0.65);
          outgoing = mix(outgoing, vec3(inkLuma), clamp(inkAlpha, 0.0, 1.0));
        }
        gl_FragColor = vec4(max(outgoing, vec3(0.0)), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,transparent:!1,side:Xe,depthTest:!0,depthWrite:!0}),d=new fe(l,u);d.name="vellum-sheet",d.position.z=.016,d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!1;let g=[];for(let F=0;F<h.count;F++){let w=f[F*3],H=f[F*3+1];(Math.abs(Math.abs(w)-4.08/2)<1e-4||Math.abs(Math.abs(H)-6.28/2)<1e-4)&&g.push(F)}g.sort((F,w)=>Math.atan2(f[F*3+1],f[F*3])-Math.atan2(f[w*3+1],f[w*3]));let E=new ni,p=new He(new Float32Array(g.length*3),3);E.setAttribute("position",p);let m=new Gn({color:11970699,transparent:!0,opacity:.2,depthWrite:!1}),T=new Ss(E,m);T.frustumCulled=!1,d.add(T);let R=Math.cos(Math.PI/8),y=Math.sin(Math.PI/8),b=-y,A=R,M=4.08*.5*R+6.28*.5*y,S=-1,z=!1;function C(F=0,w=0){if(z)return;let H=i(Number.isFinite(F)?F:0);if(H===S)return;S=H,u.uniforms.uPeel.value=H;let Q=s(.015,.87,H),O=s(.49,.97,H),tt=M-(M*2+.12)*Q,V=.82+.2*s(.25,.85,H),G=2.55,$=V*G;for(let ft=0;ft<h.count;ft++){let _t=ft*3,k=f[_t],ut=f[_t+1],vt=k*R+ut*y,Dt=k*b+ut*A,gt=Math.max(0,vt-tt);if(gt===0){h.setXYZ(ft,k,ut,0);continue}let ct=Math.min(gt,$),Jt=ct/V,at=gt-ct,At=tt+V*Math.sin(Jt)+at*Math.cos(G),Et=V*(1-Math.cos(Jt))+at*Math.sin(G);h.setXYZ(ft,R*At+b*Dt,y*At+A*Dt,Et)}h.needsUpdate=!0,g.forEach((ft,_t)=>p.setXYZ(_t,h.getX(ft),h.getY(ft),h.getZ(ft)+.001)),p.needsUpdate=!0,l.computeVertexNormals(),d.position.set(5.6*O,6.6*O,.016+1.15*O),d.rotation.set(-.07*O,.1*O,-.1*O),d.visible=H<.995}function L(F,w,H){z||(u.uniforms.tScene.value=F,u.uniforms.uHasScene.value=F?1:0,u.uniforms.uResolution.value.set(Math.max(1,w),Math.max(1,H)))}function B(){z||(z=!0,l.dispose(),u.dispose(),E.dispose(),m.dispose())}return C(0,0),{mesh:d,update:C,setBackground:L,dispose:B}}return{createVellum:r}})(),{createVellumMaterials:mg}=(()=>{function t(l){return()=>{l|=0,l=l+1831565813|0;let h=Math.imul(l^l>>>15,1|l);return h=h+Math.imul(h^h>>>7,61|h)^h,((h^h>>>14)>>>0)/4294967296}}function e(l,h){let f=document.createElement("canvas");return f.width=l,f.height=h,{canvas:f,context:f.getContext("2d",{alpha:!0})}}async function i(){let l=await fetch(ss.logo);if(!l.ok)throw new Error(`Le Invite logo failed to load (${l.status}).`);let h=(await l.text()).replace(/width="100%"/,'width="165.43" height="45.9"').replaceAll("currentColor","#000000"),f=URL.createObjectURL(new Blob([h],{type:"image/svg+xml"}));try{let u=new Image;return u.src=f,await u.decode(),u}finally{URL.revokeObjectURL(f)}}function s(l,h){let{canvas:f,context:u}=e(660,Math.round(205.39632153860518));return u.drawImage(l,0,0,f.width,f.height),u.globalCompositeOperation="source-in",u.fillStyle=h,u.fillRect(0,0,f.width,f.height),f}function r(l,h,f,u,d){l.drawImage(h,f,u,d,d/3.2133)}function a(){let{canvas:l,context:h}=e(800,1240),f=t(67),u=h.createImageData(800,1240);for(let d=0;d<u.data.length;d+=4){let g=f()*4;u.data[d]=250+g,u.data[d+1]=247+g,u.data[d+2]=234+g,u.data[d+3]=255}h.putImageData(u,0,0);for(let d=0;d<3800;d++){let g=f()*800,E=f()*1240;h.strokeStyle=f()>.5?"rgba(255,255,249,.16)":"rgba(206,192,158,.085)",h.lineWidth=.4+f()*.65,h.beginPath(),h.moveTo(g,E),h.quadraticCurveTo(g+4,E+1,g+1+f()*11,E+(f()-.5)*7),h.stroke()}return l}function o(l,h){let{canvas:f,context:u}=e(1200,1860);return u.scale(3,3),r(u,s(l,"#2b2a26"),70,250,260),u.textAlign="center",u.textBaseline="alphabetic",u.font=`500 21px ${h}`,u.fillStyle="#2b2a26",u.fillText("Jak kao hirur\u0161ki \u010Delik.",200,380),f}async function c(l="Arial, sans-serif"){let[,h,f]=await Promise.all([document.fonts.load(`400 24px ${l}`),i(),(async()=>{let g=new Image;return g.crossOrigin="anonymous",g.src=ss.paperBump,await g.decode(),g})()]),u=[],d=(g,E=!1)=>{let p=new dn(g);return p.colorSpace=E?gi:Te,p.wrapS=p.wrapT=ei,p.magFilter=Pe,p.minFilter=di,p.generateMipmaps=!0,p.anisotropy=8,u.push(p),p};return{paperBump:d(f,!0),vellumMap:d(a()),vellumInkMap:d(o(h,l)),dispose(){u.forEach(g=>g.dispose())}}}return{createVellumMaterials:c}})(),{createVellumOverlay:gg}=(()=>{async function n(e){await document.fonts.ready;let i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],r=[i,...i.querySelectorAll("*")],a=(d,g,E)=>{let p=getComputedStyle(d,E),m=["display","position","width","height","top","right","bottom","left","box-sizing","margin","padding","border","border-top","border-right","border-bottom","border-left","border-radius","box-shadow","background","background-size","background-repeat","background-position","opacity","mix-blend-mode","z-index","overflow","font-family","font-size","font-weight","font-style","font-kerning","line-height","letter-spacing","color","text-align","text-shadow","text-transform","text-wrap","white-space","flex-direction","justify-content","align-items","gap","max-width","min-width","transform","transform-origin"];for(let T of m)g.style.setProperty(T,p.getPropertyValue(T));return p};s.forEach((d,g)=>{let E=r[g];a(d,E);for(let p of["::before","::after"]){let m=getComputedStyle(d,p);if(m.content==="none"||m.content==="normal")continue;let T=document.createElement("span");a(d,T,p),p==="::before"?E.prepend(T):E.append(T)}}),Object.assign(i.style,{position:"absolute",left:"0px",top:"0px",transform:"none",margin:"0",boxShadow:"none",willChange:"auto"});let o=[];for(let d of document.styleSheets)try{for(let g of d.cssRules)g.type===CSSRule.FONT_FACE_RULE&&o.push(g.cssText)}catch{}let c=new XMLSerializer().serializeToString(i),l=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1860" viewBox="0 0 400 620"><foreignObject width="400" height="620"><div xmlns="http://www.w3.org/1999/xhtml"><style>${o.join(`
`)}</style>${c}</div></foreignObject></svg>`,h=new Image;h.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(l),await h.decode();let f=document.createElement("canvas");f.width=1200,f.height=1860,f.getContext("2d").drawImage(h,0,0);let u=new dn(f);return u.colorSpace=Te,u.anisotropy=8,u}async function t(e){let i=e.querySelector(".li-stage"),s=e.querySelector(".li-card"),[r,a]=await Promise.all([mg(getComputedStyle(e).fontFamily),n(s)]),o;try{o=new Ks({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(C){throw r.dispose(),a.dispose(),C}o.setPixelRatio(Math.min(devicePixelRatio,2)),o.outputColorSpace=Te,o.toneMapping=js,o.toneMappingExposure=1.1,o.setClearColor(0,0);let c=o.domElement;c.className="li-webgl-vellum",c.setAttribute("aria-hidden","true"),Object.assign(c.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"2"}),s.after(c);let l=new Pi,h=new Ki(-8,8,4.5,-4.5,.1,60);h.position.z=22;let f=new hi;l.add(f);let u=new Xi({map:a,toneMapped:!1}),d=new fe(new si(4,6.2),u);f.add(d);let g=new Ve({uniforms:{peel:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float peel;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*vec2(4.,6.2);float t=smoothstep(.015,.87,peel);float edge=3.09-(6.18+.12)*t;float d=dot(p,vec2(.92388,.38268))-edge;float a=exp(-d*d/.22)*.18*sin(peel*3.14159265);gl_FragColor=vec4(.22,.17,.10,a);}",transparent:!0,depthWrite:!1}),E=new fe(new si(4,6.2),g);E.position.z=.007,f.add(E);let p=pg({bumpMap:r.paperBump,map:r.vellumMap,inkMap:r.vellumInkMap});f.add(p.mesh);let m=new Ce(1,1,{depthBuffer:!0}),T=0,R=0,y=null,b=!1;function A(C,L){T=C,R=L,h.left=-C/200,h.right=C/200,h.top=L/200,h.bottom=-L/200,h.updateProjectionMatrix(),o.setSize(C,L,!1);let B=o.getDrawingBufferSize(new qt);m.setSize(B.x,B.y),p.setBackground(m.texture,B.x,B.y),y?.dispose();let F=document.createElement("canvas");F.width=C,F.height=L;let w=F.getContext("2d");w.save(),w.translate(C*.5,L*.4),w.scale(C,L);let H=w.createRadialGradient(0,0,0,0,0,.6),Q=getComputedStyle(i);H.addColorStop(0,Q.getPropertyValue("--li-stage-center").trim()||"#faf9f0"),H.addColorStop(.7,Q.getPropertyValue("--li-stage-edge").trim()||"#f5f3e8"),w.fillStyle=H,w.fillRect(-.5,-.4,1,1),w.restore(),y=new dn(F),y.colorSpace=Te}function M(C){if(b)return;(C.width!==T||C.height!==R)&&A(C.width,C.height),f.position.set(C.cardX/100,(-R*.06-C.cardY)/100,0),f.rotation.z=-C.angle*Math.PI/180,f.scale.setScalar(C.cardScale),c.style.zIndex=String(C.zIndex),p.update(C.peel,0),g.uniforms.peel.value=C.peel;let L=p.mesh.visible;c.style.visibility=L?"visible":"hidden",L&&(p.mesh.visible=!1,d.visible=!0,l.background=y,o.setRenderTarget(m),o.render(l,h),o.setRenderTarget(null),d.visible=!1,l.background=null,p.mesh.visible=!0,o.render(l,h),e.dataset.vellum="ready")}function S(C){C.preventDefault(),z(),e.dataset.vellum="unavailable"}c.addEventListener("webglcontextlost",S);function z(){b||(b=!0,c.removeEventListener("webglcontextlost",S),p.dispose(),r.dispose(),a.dispose(),y?.dispose(),d.geometry.dispose(),u.dispose(),E.geometry.dispose(),g.dispose(),m.dispose(),o.dispose(),c.remove())}return{render:M,dispose:z}}return{createVellumOverlay:t}})(),{createRibbonOverlay:Mg}=(()=>{function n(e,i){let s=new Ps,r=l=>(l.wrapS=l.wrapT=jn,l.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),l),a=r(s.load(ss.silkNormal,i)),o=r(s.load(ss.silkRoughness,i)),c=r(s.load(ss.silkColor,i));return c.colorSpace=Te,a.repeat.set(.35,.35),o.repeat.copy(a.repeat),c.repeat.copy(a.repeat),{normal:a,rough:o,color:c,dispose(){a.dispose(),o.dispose(),c.dispose()}}}function t(e){let i=e.querySelector(".li-stage"),s=new Ks({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.outputColorSpace=Te,s.toneMapping=Bs,s.toneMappingExposure=.94,s.shadowMap.enabled=!0,s.shadowMap.type=sa,s.setClearColor(0,0);let r=s.domElement;r.className="li-ribbon-canvas",r.setAttribute("aria-hidden","true"),i.append(r);let a=new Pi,o=new hi;a.add(o);let c=new Ki(-8,8,4.5,-4.5,.1,80);c.position.set(0,0,24);let l=new Ja,h=new es(s),f=h.fromScene(l,.04);a.environment=f.texture,a.environmentIntensity=.38,a.environmentRotation.set(.1,.85,-.52),l.dispose(),h.dispose();let u=new Qn(16774633,1.36);u.position.set(-4.5,6,4.2),a.add(u),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),Object.assign(u.shadow.camera,{left:-4,right:4,top:3,bottom:-3,near:.1,far:24}),u.shadow.camera.updateProjectionMatrix(),u.shadow.bias=-1e-5,u.shadow.normalBias=.0015,u.shadow.radius=2;let d=new Qn(16054015,.17);d.position.set(4,-2,6),a.add(d);let g,E=!1,p=n(s,()=>{g&&!E&&S(g)}),m=new Cs({color:12887398,map:p.color,normalMap:p.normal,normalScale:new qt(.32,.32),roughnessMap:p.rough,roughness:.35,metalness:0,sheen:.48,sheenColor:new Ht(14261885),sheenRoughness:.46,anisotropy:.88,anisotropyRotation:Math.PI/2,specularIntensity:.66,side:Xe});m.onBeforeCompile=L=>{L.vertexShader=`varying vec2 silkUV;
`+L.vertexShader,L.vertexShader=L.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
silkUV=uv;`),L.fragmentShader=`varying vec2 silkUV;
`+L.fragmentShader,L.fragmentShader=L.fragmentShader.replace("#include <map_fragment>",`
#ifdef USE_MAP
vec4 sampledDiffuseColor=texture2D(map,vMapUv);
float fibreLuminance=dot(sampledDiffuseColor.rgb,vec3(.2126,.7152,.0722));
diffuseColor.rgb*=clamp(.91+fibreLuminance*.18+(fibreLuminance-.36)*.60,.90,1.06);
#endif
`),L.fragmentShader=L.fragmentShader.replace("#include <roughnessmap_fragment>",`
float roughnessFactor=roughness;
#ifdef USE_ROUGHNESSMAP
roughnessFactor=.34+.14*texture2D(roughnessMap,vRoughnessMapUv).g;
#endif
`)};let T=dg(m);T.group.position.y=0,o.add(T.group);let R=new fe(new si(6.8,4.4),new Xi({colorWrite:!1}));R.renderOrder=-1,o.add(R);let y=fg(s,a,o,R),b=0,A=0,M=-1;function S(L){if(E)return;g=L;let{width:B,height:F,scale:w,angle:H,y:Q,progress:O}=L,tt=O<1;r.style.visibility=tt?"visible":"hidden",tt&&((B!==b||F!==A)&&(b=B,A=F,s.setSize(B,F,!1),c.left=-B/200,c.right=B/200,c.top=F/200,c.bottom=-F/200,c.updateProjectionMatrix()),T.update(O,Math.max(16,B/(100*w)+4)),O!==M&&(o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.setScalar(1),y.update(),M=O),o.position.set(0,(-A*.06-Q)/100,0),o.rotation.z=-H*Math.PI/180,o.scale.setScalar(w),s.render(a,c),e.dataset.ribbon="ready")}function z(){E||(E=!0,T.dispose(),p.dispose(),m.dispose(),y.dispose(),R.geometry.dispose(),R.material.dispose(),f.dispose(),u.shadow.dispose(),s.dispose(),r.remove())}function C(L){L.preventDefault(),z(),e.dataset.ribbon="unavailable"}return r.addEventListener("webglcontextlost",C),{update:S,dispose(){r.removeEventListener("webglcontextlost",C),z()}}}return{createRibbonOverlay:t}})(),{mountEnvelope:xg}=(()=>{function n(t){let e=t.querySelector(".li-stage"),i=[...t.querySelectorAll(".li-envelope")],s=t.querySelector(".li-flap-layer"),r=t.querySelector(".li-flap"),a=t.querySelector(".li-card"),o=null,c=!1;gg(t).then(O=>{c?O.dispose():(o=O,L())}).catch(O=>{t.dataset.vellum="unavailable",console.error("Vellum could not start",O)});let l=t.querySelector(".li-table-shadow"),h=t.querySelector(".li-scroll-cue"),f=t.querySelector(".li-stage-heading p"),u=t.querySelector(".li-skip"),d=t.querySelector(".li-replay"),g=matchMedia("(prefers-reduced-motion: reduce)"),E=null;try{E=Mg(t)}catch(O){console.error("Ribbon could not start",O)}let p=t.querySelector(".li-sub"),m=()=>g.matches?0:window.innerHeight*1.3,T=0,R=0,y=0,b=0,A=1,M=(O,tt=0,V=1)=>Math.min(V,Math.max(tt,O)),S=(O,tt,V)=>{let G=M((V-O)/(tt-O));return G*G*(3-2*G)},z=(O,tt,V)=>O+(tt-O)*V;function C(){T=0;let O=g.matches?1:M(cg((window.scrollY-b)/A/.94)),tt=S(.012,.245,O),V=M((O-.19)/.81),G=S(.08,.28,V),$=S(.28,.48,V),ft=S(.48,.65,V),_t=S(.72,.91,V),k=Math.min(.88,R*(R<700?.88:.7)/680,y/820),ut=Math.min(1.04,(R-32)/400,(y-142)/620),vt=b+A*.94*(.9514+yl),Dt=b+A*(1+yl)+m(),gt=M((window.scrollY-vt)/(Dt-vt)),ct=S(0,.1,gt),Jt=S(.1,1,gt),at=Math.min(2.6,(R-40)/400),At=Math.max(0,38-(y*.56-560*k))*G,Et=At+(390*$+380*ft)*k,pt=z(-5,-1.5,G),Ot=`translate(-50%,-50%) translateY(${Et}px) rotate(${pt}deg) scale(${k})`,Ut=1-S(.48,.65,V);i.forEach(ce=>{ce.style.transform=Ot,ce.style.opacity=Ut}),E?.update({width:R,height:y,scale:k,angle:pt,y:Et,progress:tt}),r.style.transform=`rotateX(${-178*G}deg)`,p&&(p.style.opacity=String(1-S(0,.3,V))),s.style.zIndex=G<.505?"6":"1",s.style.filter=`drop-shadow(0 0 .7px #7d6840) drop-shadow(0 ${3+7*Math.sin(Math.PI*G)}px ${2+6*Math.sin(Math.PI*G)}px #716245${G<.6?"25":"08"})`;let ee=z(90+pt,0,ft),Gt=ee*Math.PI/180,Ee=Math.abs(Math.sin(Gt))*400+Math.abs(Math.cos(Gt))*620,jt=Math.abs(Math.cos(Gt))*400+Math.abs(Math.sin(Gt))*620,Me=Math.min(z(k,ut,ft),(y-124)/Ee,(R-30)/jt),ne=At-145*k*$,ae=z(ne,-y*.06,ft),P=z(-Math.sin(pt*Math.PI/180)*(-145*k*$),0,ft);if(a.style.transform=`translate(-50%,-50%) translate(${P}px,${ae}px) rotate(${ee}deg) scale(${Me})`,V>=.94){let ce=z(Me,Math.max(Me,at),ct),ie=620*ce,Mt=ie<=y-40?y/2:z(20+ie/2,y-20-ie/2,Jt);a.style.left=`${(R-400)/2}px`,a.style.top=`${(y-620)/2+(Mt-y/2)}px`,a.style.transform=`scale(${ce})`}else a.style.left="50%",a.style.top="56%";a.style.zIndex=$>.85?"7":"2",o?.render({width:R,height:y,cardScale:Me,cardX:P,cardY:ae,angle:ee,peel:_t,zIndex:$>.85?7:2}),l.style.transform=`translate(-50%,-50%) translateY(${Et+20*k}px) rotate(${pt}deg) scale(${k})`,l.style.opacity=Ut*(1-.35*$),h.style.opacity=1-S(.08,.23,V),f.style.opacity=1-S(.1,.3,V),t.dataset.complete=String(V>=.94),t.dataset.progress=V.toFixed(4),t.dataset.stageProgress=O.toFixed(4),t.dataset.ribbonProgress=tt.toFixed(4),h.firstChild&&(h.firstChild.textContent=(O<.245,"Skroluj polako da otvori\u0161"))}function L(){T||(T=requestAnimationFrame(C))}function B(){R=e.clientWidth,y=e.clientHeight,b=t.getBoundingClientRect().top+window.scrollY,A=Math.max(1,(t.offsetHeight-m()-y)/(1+yl)),L()}function F(O){window.scrollTo({top:b+A*ug(O),behavior:g.matches?"instant":"smooth"})}let w=()=>F(.965),H=()=>F(0);u.addEventListener("click",w),d.addEventListener("click",H),window.addEventListener("scroll",L,{passive:!0}),window.addEventListener("resize",B,{passive:!0}),g.addEventListener("change",B);let Q=new ResizeObserver(B);return Q.observe(t),Q.observe(e),B(),()=>{c=!0,o?.dispose(),E?.dispose(),cancelAnimationFrame(T),Q.disconnect(),window.removeEventListener("scroll",L),window.removeEventListener("resize",B),g.removeEventListener("change",B),u.removeEventListener("click",w),d.removeEventListener("click",H)}}return{mountEnvelope:n}})();function Tu({id:n="the-opening",className:t="",theme:e="auto",fontFamily:i="Arial, sans-serif"}){let s=bl(null),[r,a]=Nl(e==="dark"?"dark":"light");return $a(()=>{if(e!=="auto"){a(e);return}let o=matchMedia("(prefers-color-scheme: dark)"),c=()=>{let h=s.current?.parentElement?.closest('.dark, .light, [data-theme="dark"], [data-theme="light"]'),f=h?h.classList.contains("dark")||h.getAttribute("data-theme")==="dark"?"dark":"light":o.matches?"dark":"light";a(f)},l=new MutationObserver(c);return l.observe(document.documentElement,{attributes:!0,subtree:!0,attributeFilter:["class","data-theme"]}),o.addEventListener("change",c),c(),()=>{l.disconnect(),o.removeEventListener("change",c)}},[e]),$a(()=>{let o=s.current;if(!o)return;let c=!1,l,h=0;return o.dataset.liReady="false",(async()=>{let f=getComputedStyle(o).fontFamily,[u]=await Promise.all([lg(),document.fonts.load(`400 24px ${f}`)]);await document.fonts.ready,!c&&(o.style.setProperty("--li-paper-surface",`url("${u}")`),l=xg(o),h=requestAnimationFrame(()=>{c||(o.dataset.liReady="true")}))})().catch(f=>{c||console.error("Le Invite could not initialise",f)}),()=>{c=!0,cancelAnimationFrame(h),l?.()}},[i,r]),React.createElement("section",{ref:s,className:`li-opening ${t}`.trim(),id:n,"aria-label":"Otvori kovertu","data-li-theme":r,"data-li-ready":"false",style:{"--li-font-family":i}},React.createElement("style",null,ag),React.createElement("div",{className:"li-stage"},React.createElement("div",{className:"li-sub"},"Jak kao hirur\u0161ki \u010Delik"),React.createElement("div",{className:"li-stage-heading"},React.createElement("span",null,"Mnjauprrrrr"),React.createElement("p",null,"Malo i\u0161\u010Dekivanja.")),React.createElement("div",{className:"li-table-shadow","aria-hidden":"true"}),React.createElement("div",{className:"li-envelope li-back","aria-hidden":"true"},React.createElement("div",{className:"li-envelope-paper li-paper"}),React.createElement("div",{className:"li-liner li-paper"}),React.createElement("div",{className:"li-mouth"})),React.createElement("div",{className:"li-envelope li-flap-layer","aria-hidden":"true"},React.createElement("div",{className:"li-flap"},React.createElement("div",{className:"li-flap-face li-flap-front li-paper"}),React.createElement("div",{className:"li-flap-face li-flap-inside li-paper"}),React.createElement("svg",{className:"li-flap-edge",viewBox:"0 0 680 340","aria-hidden":"true"},React.createElement("path",{d:"M0 1 L320 326 Q333 334 340 334 Q347 334 360 326 L680 1",fill:"none",stroke:"rgba(70,48,18,.30)",strokeWidth:"7",style:{filter:"blur(3px)"},transform:"translate(0 4)"}),React.createElement("path",{d:"M0 1 L320 326 Q333 334 340 334 Q347 334 360 326 L680 1",fill:"none",stroke:"#9b835a",strokeWidth:"1.7",strokeLinejoin:"round"})),React.createElement("img",{className:"li-seal",src:"/assets/li/seal.png",alt:""}))),React.createElement("article",{className:"li-card","aria-label":"Hirur\u0161ki \u010Delik"},React.createElement("div",{className:"li-card-stock li-paper"}),React.createElement("img",{className:"li-card-photo",src:"data:image/jpeg;base64,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rucHZtkPHOfSeHPlOrMlfRs68YvMmwy6UY30x7P57QDobP3XN9Wjq4/GOQW/gjxL57xxnlTHaLZlFzdfsfutU7op5/MJ6ojIezXDbW99d2H9Ju7zyLFyrwtcLZJjb7dR4dRY/WtbuludnZ8PPTSD7rwWnT9H2dv9h0Rz/DVm2R5NiOT8f59UC45Dhtyks1ZWPPUayLbmse8n7xPQ8b9w0E7JKszMOScHwTFJsiyfJLfR0UcZe3czXPn7dmxMB29x9gNqovCpZb3U2zNuWb9b5LbJnV4dcqSkl7OZStLzG4/r81+vqGg+hCnOcr9TG/cP+H3GMZrsgv3HOHUNtoYXT1FRLbog1jGjZPp3PsAO5OgO6qDgLiexZzytLz7NhNBjGPxHysTslNTNg6o2kgVszW9i87PT6+ux2awn33y4jxQcyyYlRVwj4nxWqa67VTJOkX2tb3EDHb7xN9SR7fN+dGRpylfbaamhoqJ9LFDE1sUUMJa1rGgaDWtHoANAAJtkTtnjlL/CGcK/6Hcf3Eq0is3cpf4QzhX/AEO4/uJVduU5/hmE1dqpcsyOhtM12n+GoWVL+kzv7bA+gHU3ZOgOobPcKeXxUkREWVEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAXyqqWmrqGairaeKopp2OilhmYHskY4aLXNPYggkEFfVEFQWrwucEWXMYcnt2A08VfBMKiHqqqh8UcgOw5sTpCzse4GtD2CneV4DiWb1llqsntPx0tkrmXG3u8+WLyKhhBa/THDq0QOztj8FJEV2mCrHNvD1w9yFkDr9lGF0010fovraWeWkkkPpt5ie3rOu23bKs5ElzoVbB4cuFabB5MRp8Do4rVLUR1UrI6idssske+gvmD/McBs6BdrueymWb5QcL4+umUiy3K8/AQ+b8BbYvMnm7gfK38N7J9gCfZSBE39GdY+SPCFyiG36/vwd1wcAZf4xUcVNVMI/NeZWjq1+BcPoVA+Wciwrmb+Lfh74OpKOsoJLnFW3irs1KIqG30se+ru1oaSere29ttDQSXaGm73xhxtkte6uyHAMYulW47dUVlshlkP63uaS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AACKkaiHK/8AeDzj+r9f/ZnqXrm5DZaXJcRuuO10k0dLc6OaimfAQHtZIwscWkggHTjrYI37FSCtsR4ntlRx1YpHZlnzPMttOS2PJatgG4m+gD+w/UvHZcfbxJzTY7NabrW3a35nJUx1Zu7xU1sU8EDpmSfFEeZJH0tewtkLukub0kbIMgo+LL3b7dT0FHzPyBHT08bYYow21npY0aA2aHfoAurjvG9qsWTHJq673rIr6IXU0dyvVSJXwROILmRMY1kcQcWjZYwE6GydLWo4HLUzMfyzj/Pq7taLJd5IbjKfu00VVTSU7Z3H2a2R8YcfYPJ9AVaDXBzQ5pBBGwR7r5VdJS19BPQ11NDU0s8bopoJmB7JGOGi1zT2IIOiCq8g4gbaIvg8Q5FzXGbYOzLZR1VPUwQt/Ri+KhldG36Na4AewCivNzRURXWlxjj6icJLve77QzsiZ3fDTUlTHVT1B+jWthDd+7pGj3Vo7HUG7Gz3AUVxPjzH8Qrqu6Uprrleq1oZV3m61DqqrnaDsML3fdYPZjA1o+i+2XYRbMwbQz1FbcrXc7c90lDdbXP5NTTFwAeGkgtc1wADmPa5p0NjsNP4iL5z83iJ4qYO7hJdZCPfpFHon9W3NH7Qu9yv/eDzj+r9f/Znr5Y1xxSWPLH5VdsjvmT334Y0cVfeJIt00LnBzmRRwxxxs6i1pcQ3qPSNnQ0pFkNlpclxG647XSTR0tzo5qKZ8BAe1kjCxxaSCAdOOtgjfsU0eXCv72mO/wBGU37pq7i8lrt8NpsdFaqZ0joaSBlPG6QguLWNDQToAb0PovBjGO/xZtdTRfbl5u/n1k1X512qfPkj8x5d5THaGo2701vsFFdpERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBeG9Xm1Y7j1Zfb5Xw0NuoonT1FTMdNjY0bJP/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2OUwuNLK76teDpoP06nfrK0OisqMr3uh5N8TWY47br3x9csF44tFey51ovn83W3ORm+mMQ9i0aLh37DqJ2SA1aoREt0wX8c1rmlrgCD2IPuv6iivyxjI4wyNjWNHo1o0Av0iIPxJFFLrzY2P6TsdTQdH6r9oiAh3rt6oiDPJ5e50wO51Vv5G4UuOS0ome6mvOEg1TXxFxLQYD8w0NDbi309Pc8TMuUOXOYsTrcC414ayrHG3eJ1HV3/K4fgI6WB46ZC1p31EtJG2kkezSfTUKLXtPxMRjjrCqHjriqxYTbpTNBa6VsBmLekyv7ufJr26nlzte21JnNa9ha9oc09iCNgr+osq/LGMjjDI2NY0ejWjQC/SIg/MkccsZZLG17T+a4bC/QAAAA0B7IiAiIgIiIC/MkccrOiWNr2/ouGwv0iAAANAaCIiAiIgIiIC/DYomSOkbGxr3fecBon9ZX7RAX8DWhxcGgE+pA9V/UQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAXkrrrbbY+kZca6npXVlQ2lphM8N86VwJEbd+riGuOvwK9aqrm+5W60Hjy5XavpaCigzGkdLU1UrYo4x8PUjbnOIAH61ZNFqryQ3S21F5q7RBXU8lfSRxy1FM14MkLJOry3Ob6gO8t+j79J+ijX8rPFf/AIy8P/8ATNN/9eonx7f7Fkfi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BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEXinvFopbxS2mqutFBcKsONPSSTtbLMGjZLGE7doA70Oy9qAiIgIiICLxUV4tFyrayjt11oquponiOqhp52yPp3HemyNB209j2OvQr2oCIiAiIgIiICIvFPeLRS3iltNVdaKC4VYcaekkna2WYNGyWMJ27QB3odkHtREQEREBERAREQEREBF47pd7TY7c6vvV0o7bSNIaaisnbDGCfQdTiBsr1ghzQ5pBB7gj3Qf1EXlmudtp7pT22ouFLFW1Ic6CmfK1skob3cWtJ27Xvr0QepEXwra6ittvlr7jWQUlLC3rlnqJBHHG36ucewH60H3RfGlq6WvoYa2hqYammnYJIp4Xh7JGkbDmuHYgj3C+yAiIgIvFbbxaLzHNJaLrRXBkEpgmdSTtlEcg9WOLSdOGx2PfuvagIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICp7xTXS52XwkZhc7Pcau31sMdMYqqkmdFLHurhB6XNII2CR29iVcKpTxc/kaZr/AJul/tkKvj3EvSeYPd4KXgfGb5frpHDE2xUlRV11dOGtH8wwukkkcf1kklfL+WHiT/xpYV/6cpv/AK9fnBLXbr34dsWtF3oYK6gqseo4Z6aoYHxysNOwFrmnsQfooTyDx/4cuNOPLjmOTcaYnDQ0bNhjbbF1zyH7sTBru5x7D/adAEq8aLHs3IvH2RXZlrx/O8au1c8FzKWgukE8rgBskMY4kgDuey7lwuNvtNuluF0rqahpIh1SVFTK2KNg+pc4gBZx8M/C8Vru1fzVkmM0Fhvd9Bda7HRwiKK0UbgA1oaANSPaBs63r10XOC4dlxxnih8QmYXLOqmqnwLDbi602uwwzOihq6hhcHzS9JBPpv2OntG9NIc9ZprRlk5J47ya5/ZuOZ5jV3re/wDzagucM8h1/iscSuvRX6x3G8V1pt95t9XX28tFZSU9QySWlLgS0SMB2zYB1sDelWN/8MfCt7svwdLhVFY6qPTqa5WYGlqaaQd2yNe31cD3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IeK11wc7obSU12gklc76BjXkk/gsoY3xt/Kl44OXMfvlxrI8OgraatuttppTF9oysaRTxSObp3ljqmcQD3Ib76IvPKfCzwpkWHVFlpMIttlqTEW01xt0Zinp5NfK/qB+fR9nbBSyTs2rnXgu97s2P2x9yv13oLXRMOnVNdUMgjafxc8gBUx4Us4vWT+HI/xsrXVNwx24VFmqKyVxc6RsIa9rnH3IZI1u/U9Oz3JVf8T4XSeJu+3TmjlZk1zsja6WjxvHJJXNpaWBhAMj2tPzOJ0DvsS1xII6Q16/prSmP5/guW1L6fFszx+9zMG3RW24Q1D2j6kMcSApEqI5C8LfHd6xySuwGywYbltC0z2q62UmlMczRtoeGkAtJABOuoeoPrvv+HHku48qcB26/wB7a0XqllkttxLW9IfPFr59exc1zHEDsCTrslkzYathERZUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBUp4ufyNM1/wA3S/2yFXWuJl2I49neGVuKZXb/ALQtFcGCopvNfF1hr2vb80bmuGnNaexHorLl0rkce1lJbvD9ilwr6mKmpKfHqSaaeZwayNjaZhc5xPYAAEkqjcXafEzzHHyHkGoeMcZqXMx62VB6Rdqpp06rlYfVjSOwP4N9pAdC3HCcYu3G7sBr7Z5uPOo2W80XnyN3A1oa1nWHB/o0DfVv8VVv/I98Of8A4u//AMr13/t1ZYli7GVVNI8MjqInuPo1rwSsp45kkHhk8Q+Y2LPop6PCMxuLrxZ782Jz4IJ3kl8EpaDo9wPqAxpPZ2xbuG+G/hfj/M6TLMRw37OvFGHiCp+0aubo62OY75ZJXNO2ucO49/qubyBzhxdj3IdTxrypaKiit88EckNfd7d59tri4bcwHpcD09gSRrexsa7p+Qro5F4kOFsesLriM+s94lI/mKCzVLK2pnefusbHGSQ4nt82h37kKmvCHWX65c9c1XXJ7XNarrXVlHWT0EztvpfNfUyNiP4ta5o0e41ogHspqzPPCBx1C/KbJU8fU9ZE0vjdZaaGar3+iwRguaT6ew+ugv54XLJf66bPOX8htU9qkzi6tq6KiqBqRlJH1+U4j8fNIH1DQ70IV6lT68nKX+EM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0Pcv3fcc0M2/JlZJr16HA6VI/wDI98Of/i7/APyvXf8At1OeO+IOOuKGXFuAY99kC5GM1Y+LnqPM8vq6P7q92tdbvTW99/ZPKykVNwV+WTz7/plv/wCGZaRUbsWA4ljWZX/K7JafhbvkD45LnU+fK/4h0YIYelzi1mup33QPXupIpbpIzR4OaaKs4Zz2kmBMU2Y3GN4H0MFOD/vXP8MuW0HFpvHh85CrYLNf7PcJZbbJWPEUVyppT1NdE5x0XE7d072Q4aG2u1oPC8BxLjy011sw+0/ZtLXVslxqI/Plm8yd4a1z9yOcRsMb2Gh29F5M74t4/wCTbfFR5zi1FeGw78mWQOZLFv1DJWEPaD7gHR0Fq+Utpjl8qcyYXxXg1ZerxeKOSuETvgbZHM109ZLr5GNYDvROtu9AO5UC8O9obwt4TPt3kmsjsjqyplvdxdV/L8N5xYxjXD16i1sfy631O6dbUqw7w2cKYJfor3juC0jLjC7riqayaWrdE4ejmCV7g1w9iAD+KnmW4lj2dYZXYplVuZcLRXNDZ6ZznM6ulwc0hzSCCHNaQQQQQps6Hqsd7tGSY7R36w3CCvttZEJqeqgdtkjT7j/6nqPRdBcrG8bsmIYnQYzjlAyhtVBEIaamYS4MaPxcSSdkkkkkkkldVZUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF4rpaLTfLc+33q10VypH93U9ZA2aN362uBBXtRBDbdxFxVaLm242vjXEqKrY7qZPT2inY9h+rSGbb+xTJETQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBQ2/cX4lkl+mvF0dkIqpg0P+DyK4UkfytDRqKGdrG9gPRo2e57klTJEFB8RcZY1k/FcN4vtdltXWuuVzpzL/ABqujPkhuFRDGNNqQOzI2DetnWzsklWbyMZLTwJlrrdUVFPJSWCsMEzZnGWMspn9Lg8nq6hoHq3vffe1w+A/7x9P/TF5/wDorVLucr/3g84/q/X/ANmetXtJ0iuL8P4fX4PZrjUVmX/F1FDBNJOzLbq09bo2kuAFTodyfbS9mKVN8xPmefja4X2uv1qqrQ682uquTxJVUvlzMhmgkl0DK3csTmOd8w24Eu0CvBilz5tbxxZBR4ZgkjBbYPKfLkdU1zh5TekloodAnt26u3191++HmVWV1Fbydk9bHLlE0Zs1Ra4YTDHYhDITJRhpcXOf1kOdIT848stAb0p/6LUqamnoqKasq5mQ08DHSyyyHTWNaNlxPsAASqGw+/5TQZzZuTL/AHOvOO8gVT6KO2VLz5VqaRu2Oaw/cMsbHh/puSeMH0Uh53ul0rrLaeNses1Xeq/JJ/8An9FRTxQyi1ROaatwfI5rG9QcyH5iP7qdbI0vhm1XmGY8a3PEncLZLRsqafoppornawaWVhDoZWAVXYse1jh+LQkhVyKqc54qxKHDskv8E+UxV7KKqrGSR5Rc2NZKGOeCGCo6QAfzQNe2tKS8Y5fUZlxhQ3e7U4orzB10V3o3Ebpa2FxjnYdHQHW0kfVpafQr3cgyMi4jymWR4Yxloq3OcToACF+ypOKPnxvUVFXwziNXVzyTzzWWjkkllcXPe4wMJc4nuSSdklVBWZhluG+IvP8AKaiuqrjg1BUW+ku1uPVIbZG+jjeK2FvsxrifNaB3a7r79CtzjJj4uEsOjkaWvbY6Jrmn1BFOzso3hEUc3O/LcM0bZI31dta9jxsOBt8Y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AjrYSCA4b2NgjY9Cqwx/hKoxXHaexY/y9yBRUFP1eXCw2x3dzi5zi51ES5xcSS4kkkkklWuiaIbYcHvNmv0Nxq+UMyvcMYcHUFy+A8iTbSB1eVSxv7b2NOHcDex2XpzrBqXOrZbKae93azz2y4R3OlrLW6ISxzMY9g/uscjSNSO7Fv0UpRNFefyZ5D/47eRP9lr/APsFd2/4TRZRhlBjN9ulyrKSmmpZqiRzo2vuBge14bPpgaWvcxpeGBu/QaB0pMiaC4OSYlbcnrbHW1c9VTVdluDLjR1NI5rXteGuY5hJadxvY97HN9wexBAI7yKAuHiOK2/C8VZYLXNUzUzKmpqg+pc1z+qeokneNtAGg6VwHb0A3s9z3EQc3IbLS5LiN1x2ukmjpbnRzUUz4CA9rJGFji0kEA6cdbBG/YqD0fFF5oLdT0FHzRyHFT08bYYox9mHpa0aA70W+wAVlIro4GL45X47DUx1+Z3/ACQzOaWvvHw24db7M8iGIaO+/Vv0GtL62bHfsa/Xu5/bl5r/ALVqG1Hw1dU+bDR9LAzop26HlsOuojvskldpFAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARF4b1ebVjuPVl9vlfDQ26iidPUVMx02NjRsk//AFPU+yD3Is0UfNfNvLlTNPwXx9bKHGWSOijyXLHvYypIOi6KJhDtdvUB/wCOj2H3rMl8X2BwG7X/ABHCM7tkQ66imx2WaGra0evQHgdR/AMcfwWvWprSCKC8U8s4ny/hf2/jE0rJIX+TW2+pHTPRy6+49v8AucOx7+4IE6WbMURFQuM5VkdV/CG5piNRe62WxUmNQVMFtdKTDFKTT7e1voCep3f8SrJovpERQEREBERARFQvIuVZHbfHDxNjNBe62ns9ypa99bQRylsVQWQyFpe30OiAR+pWTRfSIigIiICKuuebvdLB4bMyvNlr56C4UttfLBVU7yySJwI0WkehXv4euVwvPh8wm7XWsmrK6rsdHPUVMzup8sjoWlznE+pJJKucaJsirXh3EeT8StF6g5OzyLLKmpr3T0UsbC3yItencDWz36BtrddidqH2/Ksjk/hF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muTVDemktVHbZmfzh9PMc5o00H1Ler/1jRa/DIooy4xxMYXHbi1oGz+KbL2Yp7w8cXXzAcDu90ziSOfLsqr5LteQ0hzYnv2RDsbDtdTiddtvIGwATVWJ3+7eEbIrzhmZ2K61/GdbXPrrLkVBCZxQ9euqGcDuPQfjsOIDg49OuUIBGiNhPb9MZyvXict+eW6XFOAbXdspyeuYYIq00UlPR2zqGjPPJIBrp3sDWiRrfoD4/A3RPtvh7vluke176bJ6uFzm+hLYoASP9i0vHFHCzoijZG39Fo0F+k2ZkMZu4K/LJ59/0y3/APDMnKX+EM4V/wBDuP7iVaRRPbnTHBze0V+QcY5HYLVUCmr7ha6mjppydeXJJE5jXb9tEgrNPCPO3HPD/EFu4y5Qhr8GyOy+bFU01XbZ3tqiZHO85jomO6uoEdz6+2xorWi/D4opdeZGx/SdjqG9FSX5TGLuT+SKvk7xC8L3ezY9caLDqXKIIqK6XGA077nM6WIvdFG75vKa1rQHEDZce3ZbUREt0kERFFEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFQ3PudZnS8gYHxLgt7hxyvy6eZs99kiEjqWGMAlsTT2L3bOvQ7DQCOrYsmlXyiz9J4cMwpofi7N4keT4rsBsS19f8AFUxd+MB0CPw2rZpqHOqDiBtAb5b7pmcVuLBcaqn8ummq+g6c6NmtM6temu3fXslkRKEWfIfD9yTf6cV+eeIvORdZB1OixmoFtpIXfotY0fMB9dNJ+gXj42yXkTjnxNHg3kDKpsuttztrrpYb1VM1VANLuqKU9+rsyTuST8rSOztC+v5TWj0RZ85MyXIuLfFhheV1V9uUmC5Q02GvoZql7qWiqzrypmsJ6WF2m7IHoyUn1Uk1a0GiLO/FWbXPN+VeSOYLlkdfBx7ZQ+1Wmk+IeKR7IG9dRWGMHpcdNBDtb08j81JNGiEWWMWj5d8TMc+auzy78c8f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bk6EstrhbY6Wit8h9ZvhYngSyBu2hznDXUffWrDyPi2qvfhlZxNRZXVWueO1UttbeaWItf8AzIjHV0B++l4j05vV6OI2lvGasWOijfH+LVGE8Y2TE6u91V7mttK2nfcKoafOR7kbOh7AbOgANlSRYUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBfGqpaWuoZqKtpoammnY6KWCZgeyRhGi1zT2IIOiCvsiCha7wk8cMu89yw6+5jg0s7uqSPGrs6nicf8AJc12h+AIA9l08P8ADFx3i+Z0+XXOsyHML9SkPpq/J681joHA7DmN6Wt2D3BIJB7jR7q50WvapkERFlRERAREQEREBERAREQEREBERAREQRHkDjHBuUcfbZ84sFPc4IyXQSOJZLA4juY5GkOb6DYB0dDYKqoeEnHYYvg6Dljlaith7fZ0F+AhDf0QPL9P17Wg0VnlYmITxtxNgvE1hmtmF2cUvxDg+qq5nmWoqnDejJIe51s6A0Bs6A2VNkRTtRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEUaZyBh8ttgrY73E5s9abbHCI3+eakHRh8np8wPGiS0t2GguOmjakqAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIi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D6ALRaLEvxcUPxrxHm9fy67mfmu4W+qyiOA0tps1u2aWzxOBB6XE/M8hzh766nHqcSOn1+IDActzfI+MKrGLT8dFZMpp7jcHefFF5FOxzS5+nuHVoA9m7P4K7UT250wVJXHActn8fFp5HitPVjNPizrdLX+fEOmoMsrujy+rrPZ7e4brv6q7USXFwVJcJ4DluI8zcv33IbT8Hb8hvbKu1zefFJ8REHTEu6WOJZ99vZwB7+iu1ElBERQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEXlobnbbpHK+2XClrGwyuhldTytkEcjfVjuknTh7g90HqREQEREBERAReW4XK3WmhNbdbhS0NMCGmaqlbEwEnQHU4gbJ7L1AgjYOwgIiICIiAiL8ySRwwvlle2ONgLnPcdBoHqSfYIP0i8ltulsvNtjuNnuNJcKOTYZU0kzZY36JB05pIOiCP1hetARF47pd7TY7c6vvV0o7bSNIaaisnbDGCfQdTiBsoPYi/gIc0OaQQe4I91/UBERAREQEREBERAREQEReKO8Wia+zWSK60UlzhjE0tC2dpmjYdac5m+oDuO5Gu4Qe1ERAREQEREBERAREQEREBF8K2uorbb5a+41kFJSwt65Z6iQRxxt+rnHsB+tf2lq6WvoYa2hqYammnYJIp4Xh7JGkbDmuHYgj3CD7IiICIvLcLlbrTQmtutwpaGmBDTNVStiYCToDqcQNk9kHqRAQRsHYRAREQEREBEXlrLnbbdJTsuFwpaR1TKIYGzytjM0h9GM2fmd+A7oPUiIgIiICIiAiIgIvjV1dJQUMtbXVUNLTQtL5Jp3hjGNHqXOPYD8Sv1T1EFXSR1VLPHPBK0PjlicHNe0jYII7EEe6D6IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAufeb9Y8ctTrpkN5t9poWuDHVVfUMp4g49gC95A2f1roLOvjc/JIuH9I0n7xWTbiVeV1y3FbHdKO2XrJbRbq6ue2KkpausjilqHud0tbGxxBeSToAA919r1kNgxu3/H5FfLbaKXevPuFSynj3/lPICqDjPw+YjR0luzvPKD+M2f1jorpW3e4PdIYak6eGws30sbGdBuhv5R6DQHRy3h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31WURwGltNmt2zS2eJwIPS4n5nkOcPfXU49TiR0+vPsBy29eMnjDObZafPsFkpq2O4VnnxN8h0kT2sHQ5we7ZcPug633WpfiLtWX+LbRb4/4SPmGtZTME0FBSCN2vu+dFA+Qj8SW/wC9agVJYJgOW2bxm8nZ3crT5GP3ukoorfWefE7z3RwxteOhri9ui0j5mjeuyzPq1djmtexzHtDmuGi0jYI+izd4JPk8PF1pW9oqbJKyGJv6LQ2I6/2krSSpHwu4Dl3HPEN3suY2n7Nr6i/VVbFCaiKbqie2MNd1RucBstPbe+3ok6p9Xciq3hOr5uq7PfTzXbbZRVba8i3ChdGeqHXf7jiOjeuku+Y99+ytJZsxRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVSUfF1/p/GfcOXX1ltNkqMdFoZTiR/xIlEkbuot6Ono0w9+rfp2VtorLgIiKAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICqTmri6/wDJF949rbHWW2njxzIoLvVitke0yRMc0lsfSx239joHQ/FW2isuAiIoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIudfb9ZsZx6rv2QXOmtttpGGSeqqXhjI2/iT7+wHqSQB3QdFeS5XW12agdXXe5UlvpW/enq5mxMH63OICznDzDyhzreqi08D22PH8WhkMNTnF6p+ouI9RSwHs53+Vv1HV5fZTvHPDrgVvrGXnMRW5/kHq+65TKa3R9dRwu3HG0H0Absdu50tZnaalFNy/xNWV4oaTk7Dp6knpbDHeadznH6AB/cqZse2SNr2ODmuGw5p2CPqFHrlgGDXiyvtF0w6xVVC9vQaeWhiLAPwHT2P4juFmCyX25eG3xjW3iVtzqqrjrKmxvtdJVyulNrlle6NrI3O7hvmt6SN66XtcdkElJvRuNgoi/EssUED555WRRMaXPe9wa1oHqST6BZV+0UYtPJHHl+vv2JY87xq5XLv/AMyo7nDNN29fka4nt79uyk6AiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg4+U5RY8Lw64ZRklfHQ2ugiM087/AGHsAPdxOgAO5JAHqsj41ZMv8Y2e/wAcc0FbZOJrXUkW2yseWOuT2kglxHqfUOePTZYzv1OHi5kvN08Sfi0t3BOOVssWKWGd0t5qYDsPfH2mef8AI35LN/nuJ7gjWzrJZbXjmO0VhslFFRW6hhbT09PENNjY0aAH/wBX3W/9Z/We30tdrttks1NabPQU9BQUsYigpqaMRxxNHoGtHYBetEWGhYV8a1V/+01xlTUh/wCexRRyjXr81WAz/tY5bqWBc6eeUv4Vqy2WE+fSWOspYSR3HRSMNVK0/QeZ5jVv/j71nybmyPIrNiWKV+SZBXR0VsoITNUTyejWj2A9SSdAAdySAO5UExWwXjPzHmnJFC+GmmImtGKVA3FQxerJalnpLUkad82xF2DQHBzjyIGHmjlo10385x/iNaWU0frHebrGdOlP6UNOflb7Ok2e4YFcyz0rFfj5tlBaqDBsvtcbaC/Q1ksEdbTfzcvQ1rXt+Yd/kcAW/TqOvVa0wS8VWQ8WY1f67/3VcbVS1k3bXzyQte7t7d3FYv8AH/dZbnn+B4ZRgyVEdNPVeU31e6eRkbP+2FwH6yttUMNvxPBaanqqqGmoLTQsjkqJXBjI44owC4k+gAbta8v9Yk7pk2TWLDsUrclyW5wW610UZknqZjoNHsAPUuJ0A0bJJAHcrNlbJzt4lqeSoxi6z8W8dS7FLVyxuNyujPaTpa5pbGR7BzQQfV49JBYrHV+I/N6fP8upZouNLXOX43YahpaLtI06+OqWH1j9fLYfUeo0T13XmeU2zBOOrxlt0IZRWqjfUvaDrq6R8rG/i46aPxIUnH/q9v8APjw1jKsA8fv8QG3uasiFZcLZc+h7vKqxDFKRIWk+odG1w33Hp7lf6SrCXgfxK55ZyzlvNV9Z1nrlp4ZSO0lXUO82Zw/yWkD/AMqt2rX/ACdp49CIi5tCKE4jy7xtnmV3PG8Qy2hu10toLqmngD+zQ4NLmuIDZGgkAuYXAbHfuFNkzAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBRPk/KnYPwzlGWxdPnWy2z1EAcNgyhh8sH8C/pCliq3xI22puvhQzqkpGudK21vn031LYiJHf/AILCrOyqR8A+JiPj3J+Q64GW4Xa4fBNmk+Z5jiaHuOz+k+U7+pYFsBZ28ElRTTeEe2xwOBkhuFXHMB7P8zqG/wDVc1aJV8/9qk6cLKsUosutLLfXXK90MbJPMElouc9BIe2tF8Lmkt7+h7KmmVmRcNeJXEcOky295Fh2aMqYIIb5VGsqbbVwtDwWTO+d0bw5relxOjs77LQSzre3u5M8fmPW237ltPHFBNW3Cdv3BW1TQ1kO/wBINbG7/UePZPEq9slv1Di2GXbJbm7po7ZRy1kx3r5I2FxA/HQX+cPhzOR5hyzk97ttQ6LK8pfLQQ1zRs0LJ3+dXVo+jo4w1je42+oj/FaR8c3IAxngODD6SforslqRE5oOiKaIh8h/a7ym/iHOX88EvE5w7h52d3anLbvkgEsAeO8NGPuAfTzCOs69R5f0WvHjx1LzWjscx604nidvxuw0jaS22+BtPTwt/Na0a7n3J9SfUkkn1XURcTMcmosM4+vWWXEj4W10UtY8b11dDS4NH4kgAfiQubTEl8pjy/8AwrcFCz+ftuO1MXmH1DGUTBI9p/A1G2f6yv7MaqbnDlubim1TPGE4/KybLayJxArpweqO2scPbY6pdemunYPrlDgTIshtFpybLbGxtdyTn1xdYbDsd4i4iesq3+uo2F8R36dTe+wHa3xxlx9auMeNaDE7W907ogZautk/ulZUv7yzPPqXOd9SdAAey6+fDM5SuCCClpYqWlhjhgiYI44o2hrWNA0GgDsAB20sd+OnPqua347wxj3XPcbzPHV1cER257Ovogi179cm3a+sbfqthVdXTUFvnrqyZkNNBG6WWV501jGjZcfwABKwXwDDUc/eOzIOXLrA99pszzWU0cg2Iz3io4yPYtY1z+350e/dZ8P0v42JxFx7R8XcM2LCqQMdJR04NVMwf3aod80r/wBRcTrfoAB7KbLOHi55zuHFmBUeN4lVGHK78S2GWMBz6SnB06Ro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oHdWpD9Sx591/oUt+VsyMznlDsI4p4643ie3CcQttofI3pfURML5nt/RdK8l5H4E6UxRFzafiaGGpppKeoiZLDI0sfHI0Oa9pGiCD2II9lAsU4R4rwi/SXnF8OpLfVvlM41LLJHFIRrrjje4sjdokbYAdEj0VgImgoLlnDfGmb5bR5RkuKwVV5pAGxV8U0tNLoegc6J7S8DZGnb7EqdIm4PNb7fQWm109ttdHBR0dOwRw09PGGRxtHoGtHYBcHOeOsJ5Kx9llzjHqW8UbH+ZG2UuY+J3ptj2EOYddj0kbUnRBxMXw/G8Ms5tmNWqKhp3EOeQ50kkpADQXyPJe8gAAFxJAAHoF2JoYammkp6iJksMjSx8cjQ5r2kaIIPYgj2X7RBX+KcI8V4RfpLzi+HUlvq3ymcallkjikI11xxvcWRu0SNsAOiR6KwERLdFfXbg/im959JmlywyjlvcrS2epZJJG2oB9RLG1wZLvQ31tO/fan8cccUTYomNZGwBrWNGg0D0AHsF+kTQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFRnh5ZarRac3q77W00GX1WTV01+bUyNbLHqVwhB2diLyulzD93Tzr1V5qMZNxvx/mlSypyzC7Deqhjelk9dQxyyNb9A8jqA/DasqKW5f8Vtix2U4bxNEM2zaqPkwRW5pqaemefdxZvzHD9Bu/T5iPQ8nw+eG292nMJOYeZ6k3XNqt5qIKWd4l+Ce7/vkhHYy67NDflYPTvrp0PjeDYXh0b2YnidlsgeNPNuoo4C//ACi0An9q76vtkyGfoiIsqIiICIiAqH8VGN8s5xxRFhXGFkZWRXCUG6zGsip3eS0gtib5jm76naLjv0brv1HV8IrLl0qj/C/wjU8LcVT0t8dA/I7tMKm4Ogd1NiDRqOEO/O6QXEn9J7tbGirwREt26QREUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z",alt:"Hirur\u0161ki \u010Delik"})),React.createElement("div",{className:"li-envelope li-front","aria-hidden":"true"},React.createElement("div",{className:"li-side li-left li-paper"}),React.createElement("div",{className:"li-side li-right li-paper"}),React.createElement("div",{className:"li-pocket-shadow"}),React.createElement("div",{className:"li-pocket li-paper"}),React.createElement("svg",{className:"li-seams",viewBox:"0 0 680 440",fill:"none"},React.createElement("path",{d:"M1 438 309 218Q340 199 371 218L679 438",stroke:"#fffdf7",strokeOpacity:".8"}),React.createElement("path",{d:"M1 435 309 215Q340 196 371 215L679 435",stroke:"#87745b",strokeOpacity:".16"})),React.createElement("div",{className:"li-envelope-imprint"},"Jak kao hirur\u0161ki \u010Delik")),React.createElement("div",{className:"li-stage-footer"},React.createElement("span",{className:"li-scroll-cue"},"Skroluj polako da otvori\u0161",React.createElement("span",{className:"li-cue-line","aria-hidden":"true"},React.createElement("i",null))),React.createElement("button",{className:"li-skip",type:"button"},"Presko\u010Di"),React.createElement("button",{className:"li-replay",type:"button"},"Otvori ponovo"),React.createElement("a",{className:"li-shop",href:"/nakit/prsten-riznica/"},"Pogledaj prsten"))))}window.MJKoverta={mount(n){let t=window.ReactDOM.createRoot(n);return t.render(window.React.createElement(Tu,{theme:"light",fontFamily:"Montserrat, Arial, sans-serif"})),t}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
