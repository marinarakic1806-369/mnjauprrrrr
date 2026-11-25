(()=>{var wu=window.React;var{useEffect:$a,useRef:bl,useState:Nl,useMemo:Ig,useCallback:yg,createElement:Ag,Fragment:Eg}=wu;var rc=0,zo=1,ac=2;var Us=1,sa=2,Zn=3,$i=0,_e=1,Xe=2,gn=0,Jn=1,Uo=2,Bo=3,jo=4,oc=5;var Mn=100,lc=101,cc=102,uc=103,hc=104,dc=200,fc=201,pc=202,mc=203,Fo=204,Ho=205,gc=206,Mc=207,xc=208,Ic=209,yc=210,Ac=211,Ec=212,vc=213,Tc=214,br=0,Nr=1,wr=2,Bn=3,Cr=4,Lr=5,Dr=6,Pr=7,ra=0,Sc=1,Rc=2,Ei=0,ko=1,Vo=2,Wo=3,Bs=4,Go=5,Xo=6,js=7;var qo=300,xn=301,Kn=302,aa=303,oa=304,jn=1e3,ei=1001,_r=1002,we=1003,bc=1004;var Fs=1005;var Pe=1006,la=1007;var di=1008;var qe=1009,Qo=1010,Yo=1011,$n=1012,ca=1013,fi=1014,ri=1015,pi=1016,ua=1017,ha=1018,In=1020,Zo=35902,Jo=35899,Ko=1021,$o=1022,mi=1023,Di=1026,zi=1027,da=1028,fa=1029,tn=1030,pa=1031;var ma=1033,Hs=33776,ks=33777,Vs=33778,Ws=33779,ga=35840,Ma=35841,xa=35842,Ia=35843,ya=36196,Aa=37492,Ea=37496,va=37488,Ta=37489,Gs=37490,Sa=37491,Ra=37808,ba=37809,Na=37810,wa=37811,Ca=37812,La=37813,Da=37814,Pa=37815,_a=37816,Oa=37817,za=37818,Ua=37819,Ba=37820,ja=37821,Fa=36492,Ha=36494,ka=36495,Va=36283,Wa=36284,Xs=36285,Ga=36286;var ps=2300,Or=2301,Tr=2302,No=2303,wo=2400,Co=2401,Lo=2402;var Nc=3200;var qs=0,wc=1,gi="",Te="srgb",ms="srgb-linear",gs="linear",le="srgb";var Sr=7680;var Cc=519,Lc=512,Dc=513,Pc=514,tl=515,_c=516,Oc=517,el=518,il=519,zc=35044,Xa=35048;var nl="300 es",ii=2e3,Fn=2001;function Cu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Lu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Hn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uc(){let n=Hn("canvas");return n.style.display="block",n}var wl={},kn=null;function sl(...n){let t="THREE."+n.shift();kn?kn("log",t,...n):console.log(t,...n)}function Bc(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ot(...n){n=Bc(n);let t="THREE."+n.shift();if(kn)kn("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Bt(...n){n=Bc(n);let t="THREE."+n.shift();if(kn)kn("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function hn(...n){let t=n.join(" ");t in wl||(wl[t]=!0,Ot(...n))}function jc(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Fc={[br]:br,[wr]:Dr,[Cr]:Cr,[Bn]:Lr,[Nr]:Nr,[Dr]:wr,[Pr]:Pr,[Lr]:Bn},xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var to=Math.PI/180,zr=180/Math.PI;function Qs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function Du(n,t){return(n%t+t)%t}function eo(n,t,e){return(1-e)*n+e*t}function Hc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pu(n,t){if(t.constructor===Float32Array)return n;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function _u(n,t){if(t.constructor===Float32Array)return n;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var qt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||c!==u||l!==d||h!==g){let p=c*u+l*d+h*g+f*y;p<0&&(u=-u,d=-d,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let T=Math.acos(p),R=Math.sin(T);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R,c=c*m+u*o,l=l*m+d*o,h=h*m+g*o,f=f*m+y*o}else{c=c*m+u*o,l=l*m+d*o,h=h*m+g*o,f=f*m+y*o;let T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-o*d,t[e+2]=l*g+h*d+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new _,Cl=new Ge,Ft=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],y=s[0],p=s[3],m=s[6],T=s[1],R=s[4],A=s[7],b=s[2],E=s[5],M=s[8];return r[0]=a*y+o*T+c*b,r[3]=a*p+o*R+c*E,r[6]=a*m+o*A+c*M,r[1]=l*y+h*T+f*b,r[4]=l*p+h*R+f*E,r[7]=l*m+h*A+f*M,r[2]=u*y+d*T+g*b,r[5]=u*p+d*R+g*E,r[8]=u*m+d*A+g*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*l-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return hn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(no.makeScale(t,e)),this}rotate(t){return hn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(no.makeRotation(-t)),this}translate(t,e){return hn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},no=new Ft,Ll=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ou(){let n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:t,whitePoint:i,transfer:gs,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),n}var te=Ou();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Un(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var En,Ur=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{En===void 0&&(En=Hn("canvas")),En.width=t.width,En.height=t.height;let s=En.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=En}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hn("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zu=0,Vn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function so(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ur.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Uu=0,ro=new _,je=class n extends xi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ei,s=ei,r=Pe,a=di,o=mi,c=qe,l=n.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Qs(),this.name="",this.source=new Vn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=qo;je.DEFAULT_ANISOTROPY=1;var xe=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,A=(d+1)/2,b=(m+1)/2,E=(h+u)/4,M=(f+y)/4,S=(g+p)/4;return R>A&&R>b?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=E/i,r=M/i):A>b?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=E/s,r=S/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=M/r,s=S/r),this.set(i,s,r,e),this}let T=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-y)/T,this.z=(u-h)/T,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Br=class extends xi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new je({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vn(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ce=class extends Br{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ms=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jr=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,c,l,h,f,u,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,f,u,d,g,y,p)}set(t,e,i,s,r,a,o,c,l,h,f,u,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/vn.setFromMatrixColumn(t,0).length(),r=1/vn.setFromMatrixColumn(t,1).length(),a=1/vn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,y=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-y*l,e[9]=-o*c,e[2]=y-u*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=l*h,y=l*f;e[0]=u+y*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=y+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=l*h,y=l*f;e[0]=u-y*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,y=o*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+y,e[1]=c*f,e[5]=y*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=y-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-y*f}else if(t.order==="XZY"){let u=a*c,d=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+y,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bu,t,ju)}lookAt(t,e,i){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Fi.crossVectors(i,Ze),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Fi.crossVectors(i,Ze)),Fi.normalize(),er.crossVectors(Ze,Fi),s[0]=Fi.x,s[4]=er.x,s[8]=Ze.x,s[1]=Fi.y,s[5]=er.y,s[9]=Ze.y,s[2]=Fi.z,s[6]=er.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],y=i[6],p=i[10],m=i[14],T=i[3],R=i[7],A=i[11],b=i[15],E=s[0],M=s[4],S=s[8],O=s[12],C=s[1],L=s[5],B=s[9],H=s[13],w=s[2],k=s[6],Q=s[10],z=s[14],tt=s[3],V=s[7],G=s[11],$=s[15];return r[0]=a*E+o*C+c*w+l*tt,r[4]=a*M+o*L+c*k+l*V,r[8]=a*S+o*B+c*Q+l*G,r[12]=a*O+o*H+c*z+l*$,r[1]=h*E+f*C+u*w+d*tt,r[5]=h*M+f*L+u*k+d*V,r[9]=h*S+f*B+u*Q+d*G,r[13]=h*O+f*H+u*z+d*$,r[2]=g*E+y*C+p*w+m*tt,r[6]=g*M+y*L+p*k+m*V,r[10]=g*S+y*B+p*Q+m*G,r[14]=g*O+y*H+p*z+m*$,r[3]=T*E+R*C+A*w+b*tt,r[7]=T*M+R*L+A*k+b*V,r[11]=T*S+R*B+A*Q+b*G,r[15]=T*O+R*H+A*z+b*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],T=c*d-l*u,R=o*d-l*f,A=o*u-c*f,b=a*d-l*h,E=a*u-c*h,M=a*f-o*h;return e*(y*T-p*R+m*A)-i*(g*T-p*b+m*E)+s*(g*R-y*b+m*M)-r*(g*A-y*E+p*M)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],T=e*o-i*a,R=e*c-s*a,A=e*l-r*a,b=i*c-s*o,E=i*l-r*o,M=s*l-r*c,S=h*y-f*g,O=h*p-u*g,C=h*m-d*g,L=f*p-u*y,B=f*m-d*y,H=u*m-d*p,w=T*H-R*B+A*L+b*C-E*O+M*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/w;return t[0]=(o*H-c*B+l*L)*k,t[1]=(s*B-i*H-r*L)*k,t[2]=(y*M-p*E+m*b)*k,t[3]=(u*E-f*M-d*b)*k,t[4]=(c*C-a*H-l*O)*k,t[5]=(e*H-s*C+r*O)*k,t[6]=(p*A-g*M-m*R)*k,t[7]=(h*M-u*A+d*R)*k,t[8]=(a*B-o*C+l*S)*k,t[9]=(i*C-e*B-r*S)*k,t[10]=(g*E-y*A+m*T)*k,t[11]=(f*A-h*E-d*T)*k,t[12]=(o*O-a*L-c*S)*k,t[13]=(e*L-i*O+s*S)*k,t[14]=(y*R-g*b-p*T)*k,t[15]=(h*b-f*R+u*T)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,g=r*f,y=a*h,p=a*f,m=o*f,T=c*l,R=c*h,A=c*f,b=i.x,E=i.y,M=i.z;return s[0]=(1-(y+m))*b,s[1]=(d+A)*b,s[2]=(g-R)*b,s[3]=0,s[4]=(d-A)*E,s[5]=(1-(u+m))*E,s[6]=(p+T)*E,s[7]=0,s[8]=(g+R)*M,s[9]=(p-T)*M,s[10]=(1-(u+y))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=vn.set(s[0],s[1],s[2]).length(),o=vn.set(s[4],s[5],s[6]).length(),c=vn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let l=1/a,h=1/o,f=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=ii,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===ii)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Fn)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ii,c=!1){let l=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===ii)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Fn)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},vn=new _,oi=new ue,Bu=new _(0,0,0),ju=new _(1,1,1),Fi=new _,er=new _,Ze=new _,Pl=new ue,_l=new Ge,Ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fu=0,Ol=new _,Tn=new Ge,Ri=new ue,ir=new _,os=new _,Hu=new _,ku=new Ge,zl=new _(1,0,0),Ul=new _(0,1,0),Bl=new _(0,0,1),jl={type:"added"},Vu={type:"removed"},Sn={type:"childadded",child:null},ao={type:"childremoved",child:null},Le=class n extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new _,e=new Ii,i=new Ge,s=new _(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ft}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Tn.setFromAxisAngle(t,e),this.quaternion.multiply(Tn),this}rotateOnWorldAxis(t,e){return Tn.setFromAxisAngle(t,e),this.quaternion.premultiply(Tn),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(os,ir,this.up):Ri.lookAt(ir,os,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Tn.setFromRotationMatrix(Ri),this.quaternion.premultiply(Tn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jl),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vu),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jl),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new _(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wu={type:"move"},Wn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},nr={h:0,s:0,l:0};function oo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Du(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=oo(a,r,t+1/3),this.g=oo(a,r,t),this.b=oo(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function i(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let i=kc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.workingToColorSpace(Be.copy(this),t),Math.round(Zt(Be.r*255,0,255))*65536+Math.round(Zt(Be.g*255,0,255))*256+Math.round(Zt(Be.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Be.copy(this),e);let i=Be.r,s=Be.g,r=Be.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Te){te.workingToColorSpace(Be.copy(this),t);let e=Be.r,i=Be.g,s=Be.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(nr);let i=eo(Hi.h,nr.h,e),s=eo(Hi.s,nr.s,e),r=eo(Hi.l,nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new kt;kt.NAMES=kc;var Pi=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new _,bi=new _,lo=new _,Ni=new _,Rn=new _,bn=new _,Fl=new _,co=new _,uo=new _,ho=new _,fo=new xe,po=new xe,mo=new xe,Gi=class n{constructor(t=new _,e=new _,i=new _){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),bi.subVectors(i,e),lo.subVectors(t,e);let a=li.dot(li),o=li.dot(bi),c=li.dot(lo),l=bi.dot(bi),h=bi.dot(lo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(a,Ni.y),c.addScaledVector(o,Ni.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,i),mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),bi.subVectors(t,e),li.cross(bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),li.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Rn.subVectors(s,i),bn.subVectors(r,i),co.subVectors(t,i);let c=Rn.dot(co),l=bn.dot(co);if(c<=0&&l<=0)return e.copy(i);uo.subVectors(t,s);let h=Rn.dot(uo),f=bn.dot(uo);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(Rn,a);ho.subVectors(t,r);let d=Rn.dot(ho),g=bn.dot(ho);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(bn,o);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return Fl.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Fl,o);let m=1/(p+y+u);return a=y*m,o=u*m,e.copy(i).addScaledVector(Rn,a).addScaledVector(bn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yi=class{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),rr.subVectors(this.max,ls),Nn.subVectors(t.a,ls),wn.subVectors(t.b,ls),Cn.subVectors(t.c,ls),ki.subVectors(wn,Nn),Vi.subVectors(Cn,wn),on.subVectors(Nn,Cn);let e=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-on.z,on.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,on.z,0,-on.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-on.y,on.x,0];return!go(e,Nn,wn,Cn,rr)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Nn,wn,Cn,rr))?!1:(ar.crossVectors(ki,Vi),e=[ar.x,ar.y,ar.z],go(e,Nn,wn,Cn,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new _,new _,new _,new _,new _,new _,new _,new _],ci=new _,sr=new yi,Nn=new _,wn=new _,Cn=new _,ki=new _,Vi=new _,on=new _,ls=new _,rr=new _,ar=new _,ln=new _;function go(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ln.fromArray(n,r);let o=s.x*Math.abs(ln.x)+s.y*Math.abs(ln.y)+s.z*Math.abs(ln.z),c=t.dot(ln),l=e.dot(ln),h=i.dot(ln);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ve=new _,or=new qt,Gu=0,ke=class extends xi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=t!==void 0?rl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_u(t,this.array)}};var Is=class extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ys=class extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ke=class extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xu=new yi,cs=new _,Mo=new _,_i=class{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Xu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(cs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Mo)),this.expandByPoint(cs.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qu=0,ti=new ue,xo=new Le,Ln=new _,Je=new yi,us=new yi,Ne=new _,ni=class n extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?ys:Is)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(Je.min,us.min),Je.expandByPoint(Ne),Ne.addVectors(Je.max,us.max),Je.expandByPoint(Ne)):(Je.expandByPoint(us.min),Je.expandByPoint(us.max))}Je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(Ln.fromBufferAttribute(t,l),Ne.add(Ln)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new _,c[O]=new _;let h=new _,f=new _,u=new _,d=new qt,g=new qt,y=new qt,p=new _,m=new _;function T(O,C,L){l[O]=l[C]=l[L]=1,h.fromBufferAttribute(i,O),f.fromBufferAttribute(i,C),u.fromBufferAttribute(i,L),d.fromBufferAttribute(r,O),g.fromBufferAttribute(r,C),y.fromBufferAttribute(r,L),f.sub(h),u.sub(h),g.sub(d),y.sub(d);let B=1/(g.x*y.y-y.x*g.y);isFinite(B)&&(p.copy(f).multiplyScalar(y.y).addScaledVector(u,-g.y).multiplyScalar(B),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(B),o[O].add(p),o[C].add(p),o[L].add(p),c[O].add(m),c[C].add(m),c[L].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let O=0,C=R.length;O<C;++O){let L=R[O],B=L.start,H=L.count;for(let w=B,k=B+H;w<k;w+=3)T(t.getX(w+0),t.getX(w+1),t.getX(w+2))}let A=new _,b=new _,E=new _,M=new _;function S(O){E.fromBufferAttribute(s,O),M.copy(E);let C=o[O];A.copy(C),A.sub(E.multiplyScalar(E.dot(C))).normalize(),b.crossVectors(M,C);let B=b.dot(c[O])<0?-1:1;a.setXYZW(O,A.x,A.y,A.z,B)}for(let O=0,C=i.count;O<C;++O)l[O]&&S(O);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new _,r=new _,a=new _,o=new _,c=new _,l=new _,h=new _,f=new _;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?d=c[y]*o.data.stride+o.offset:d=c[y]*h;for(let m=0;m<h;m++)u[g++]=l[d++]}return new ke(u,h,f)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=new _,Qu=new _,Yu=new Ft,ui=class{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Io.subVectors(i,e).cross(Qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zu=0,Ai=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Jn,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Ho,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Bn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ci=new _,yo=new _,lr=new _,cr=new _,As=class{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yo.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(yo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=cr.dot(this.direction),c=-cr.dot(lr),l=cr.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yo).addScaledVector(lr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Ci.subVectors(t.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=i.x-a.x,T=i.y-a.y,R=i.z-a.z,A=Math.abs(c),b=Math.abs(l),E=Math.abs(h),M,S,O,C,L,B,H,w,k,Q,z,tt;if(A>=b&&A>=E?(O=c,B=f,k=g,tt=m,c>=0?(M=l,S=h,C=u,L=d,H=y,w=p,Q=T,z=R):(M=h,S=l,C=d,L=u,H=p,w=y,Q=R,z=T)):b>=E?(O=l,B=u,k=y,tt=T,l>=0?(M=h,S=c,C=d,L=f,H=p,w=g,Q=R,z=m):(M=c,S=h,C=f,L=d,H=g,w=p,Q=m,z=R)):(O=h,B=d,k=p,tt=R,h>=0?(M=c,S=l,C=f,L=u,H=g,w=y,Q=m,z=T):(M=l,S=c,C=u,L=f,H=y,w=g,Q=T,z=m)),O===0)return null;let V=M/O,G=S/O,$=1/O,ft=C-V*B,_t=L-G*B,j=H-V*k,ut=w-G*k,vt=Q-V*tt,Dt=z-G*tt,gt=vt*ut-Dt*j,ct=ft*Dt-_t*vt,Jt=j*_t-ut*ft;if(s){if(gt<0||ct<0||Jt<0)return null}else if((gt<0||ct<0||Jt<0)&&(gt>0||ct>0||Jt>0))return null;let at=gt+ct+Jt;if(at===0)return null;let Et=$*(gt*B+ct*k+Jt*tt);return(at>0?Et<0:Et>0)?null:this.at(Et/at,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xi=class extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hl=new ue,cn=new As,ur=new _i,kl=new _,hr=new _,dr=new _,fr=new _,Ao=new _,pr=new _,Vl=new _,mr=new _,fe=class extends Le{constructor(t=new ni,e=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Ao.fromBufferAttribute(f,t),a?pr.addScaledVector(Ao,h):pr.addScaledVector(Ao.sub(e),h))}e.add(pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),cn.copy(t.ray).recast(t.near),!(ur.containsPoint(cn.origin)===!1&&(cn.intersectSphere(ur,kl)===null||cn.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),cn.copy(t.ray).applyMatrix4(Hl),!(i.boundingBox!==null&&cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),R=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let A=T,b=R;A<b;A+=3){let E=o.getX(A),M=o.getX(A+1),S=o.getX(A+2);s=gr(this,m,t,i,l,h,f,E,M,S),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let T=o.getX(p),R=o.getX(p+1),A=o.getX(p+2);s=gr(this,a,t,i,l,h,f,T,R,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),R=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let A=T,b=R;A<b;A+=3){let E=A,M=A+1,S=A+2;s=gr(this,m,t,i,l,h,f,E,M,S),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let T=p,R=p+1,A=p+2;s=gr(this,a,t,i,l,h,f,T,R,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ju(n,t,e,i,s,r,a,o){let c;if(t.side===_e?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===$i,o),c===null)return null;mr.copy(o),mr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(mr);return l<e.near||l>e.far?null:{distance:l,point:mr.clone(),object:n}}function gr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,hr),n.getVertexPosition(c,dr),n.getVertexPosition(l,fr);let h=Ju(n,t,e,i,hr,dr,fr,Vl);if(h){let f=new _;Gi.getBarycoord(Vl,hr,dr,fr,f),s&&(h.uv=Gi.getInterpolatedAttribute(s,o,c,l,f,new qt)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,o,c,l,f,new qt)),a&&(h.normal=Gi.getInterpolatedAttribute(a,o,c,l,f,new _),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new _,materialIndex:0};Gi.getNormal(hr,dr,fr,u.normal),h.face=u,h.barycoord=f}return h}var Es=class extends je{constructor(t=null,e=1,i=1,s,r,a,o,c,l=we,h=we,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends ke{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Dn=new ue,Wl=new ue,Mr=[],Gl=new yi,Ku=new ue,hs=new fe,ds=new _i,Ts=class extends fe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ku)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),Gl.copy(t.boundingBox).applyMatrix4(Dn),this.boundingBox.union(Gl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),ds.copy(t.boundingSphere).applyMatrix4(Dn),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(i),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dn),Wl.multiplyMatrices(i,Dn),hs.matrixWorld=Wl,hs.raycast(t,Mr);for(let a=0,o=Mr.length;a<o;a++){let c=Mr[a];c.instanceId=r,c.object=this,e.push(c)}Mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Es(new Float32Array(s*this.count),s,this.count,da,ri));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},un=new _i,$u=new qt(.5,.5),xr=new _,qi=class{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],T=r[12],R=r[13],A=r[14],b=r[15];if(s[0].setComponents(l-a,d-h,m-g,b-T).normalize(),s[1].setComponents(l+a,d+h,m+g,b+T).normalize(),s[2].setComponents(l+o,d+f,m+y,b+R).normalize(),s[3].setComponents(l-o,d-f,m-y,b-R).normalize(),i)s[4].setComponents(c,u,p,A).normalize(),s[5].setComponents(l-c,d-u,m-p,b-A).normalize();else if(s[4].setComponents(l-c,d-u,m-p,b-A).normalize(),e===ii)s[5].setComponents(l+c,d+u,m+p,b+A).normalize();else if(e===Fn)s[5].setComponents(c,u,p,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(t){un.center.set(0,0,0);let e=$u.distanceTo(t.center);return un.radius=.7071067811865476+e,un.applyMatrix4(t.matrixWorld),this.intersectsSphere(un)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xl=new ue,Fr=class n{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new qi),i[s].setFromProjectionMatrix(Xl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new qi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Gn=class extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Hr=new _,kr=new _,ql=new ue,fs=new As,Ir=new _i,Eo=new _,Ql=new _,Vr=class extends Le{constructor(t=new ni,e=new Gn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),kr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Hr.distanceTo(kr);t.setAttribute("lineDistance",new Ke(i,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;ql.copy(s).invert(),fs.copy(t.ray).applyMatrix4(ql);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=d,p=g-1;y<p;y+=l){let m=h.getX(y),T=h.getX(y+1),R=yr(this,t,fs,c,m,T,y);R&&e.push(R)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(d),m=yr(this,t,fs,c,y,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=d,p=g-1;y<p;y+=l){let m=yr(this,t,fs,c,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=yr(this,t,fs,c,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yr(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),kr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,kr,Eo,Ql)>i)return;Eo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Eo);if(!(l<t.near||l>t.far))return{distance:l,point:Ql.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ss=class extends Vr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Rs=class extends je{constructor(t=[],e=xn,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dn=class extends je{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends je{constructor(t,e,i=fi,s,r,a,o=we,c=we,l,h=Di,f=1){if(h!==Di&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},bs=class extends Oi{constructor(t,e=fi,i=xn,s,r,a=we,o=we,c,l=Di){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ns=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qi=class n extends ni{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(f,2));function g(y,p,m,T,R,A,b,E,M,S,O){let C=A/M,L=b/S,B=A/2,H=b/2,w=E/2,k=M+1,Q=S+1,z=0,tt=0,V=new _;for(let G=0;G<Q;G++){let $=G*L-H;for(let ft=0;ft<k;ft++){let _t=ft*C-B;V[y]=_t*T,V[p]=$*R,V[m]=w,l.push(V.x,V.y,V.z),V[y]=0,V[p]=0,V[m]=E>0?1:-1,h.push(V.x,V.y,V.z),f.push(ft/M),f.push(1-G/S),z+=1}}for(let G=0;G<S;G++)for(let $=0;$<M;$++){let ft=u+$+k*G,_t=u+$+k*(G+1),j=u+($+1)+k*(G+1),ut=u+($+1)+k*G;c.push(ft,_t,ut),c.push(_t,j,ut),tt+=6}o.addGroup(d,tt,O),d+=tt,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new qt:new _);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new _,s=[],r=[],a=[],o=new _,c=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new _)}r[0]=new _,a[0]=new _;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Zt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Zt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function al(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Yl=new _,Zl=new _,vo=new al,To=new al,So=new al,ws=class extends fn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new _){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Zl.subVectors(s[0],s[1]).add(s[0]),l=Zl);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),vo.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,y,p),To.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,y,p),So.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),To.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),So.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(vo.calc(c),To.calc(c),So.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new _().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function th(n,t){let e=1-n;return e*e*e*t}function eh(n,t){let e=1-n;return 3*e*e*n*t}function ih(n,t){return 3*(1-n)*n*n*t}function nh(n,t){return n*n*n*t}function Ro(n,t,e,i,s){return th(n,t)+eh(n,e)+ih(n,i)+nh(n,s)}var Xn=class extends fn{constructor(t=new _,e=new _,i=new _,s=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ro(t,s.x,r.x,a.x,o.x),Ro(t,s.y,r.y,a.y,o.y),Ro(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}};var si=class n extends ni{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let T=m*u-a;for(let R=0;R<l;R++){let A=R*f-r;g.push(A,-T,0),y.push(0,0,1),p.push(R/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<o;T++){let R=T+l*m,A=T+l*(m+1),b=T+1+l*(m+1),E=T+1+l*m;d.push(R,A,E),d.push(A,b,E)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function yn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Jl(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Jl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Fe(n){let t={};for(let e=0;e<n.length;e++){let i=yn(n[e]);for(let s in i)t[s]=i[s]}return t}function Jl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sh(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ol(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Vc={clone:yn,merge:Fe},rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yn(t.uniforms),this.uniformsGroups=sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new _().fromArray(s.value);break;case"v4":this.uniforms[i].value=new xe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ue().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wr=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cs=class extends pn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ls=class extends Ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=ra,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gr=class extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xr=class extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pn(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ar(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Yi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Co:r=t,o=2*e-i;break;case Lo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Co:a=t,c=2*i-e;break;case Lo:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-u*p+2*u*y-u*g,T=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,R=(-1-d)*p+(1.5+d)*y+.5*g,A=d*p-d*y;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+T*a[l+b]+R*a[c+b]+A*a[f+b];return r}},Qr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},Yr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zr=class extends Yi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-e)/(s-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*y+a[c+p]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[l+g],p=a[c+g],m=d*u+g*2,T=f[m],R=f[m+1],A=t*u+g*2,b=h[A],E=h[A+1],M=lh(i,e,T,b,s);r[g]=Wc(M,y,R,E,p)}return r}};function Wc(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function oh(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function lh(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Wc(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=oh(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var $e=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pn(e,this.TimeBufferType),this.values=Pn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pn(t.times,Array),values:Pn(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ar(t.settings)&&(i.settings={inTangents:Pn(t.settings.inTangents,Array),outTangents:Pn(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ps:e=this.InterpolantFactoryMethodDiscrete;break;case Or:e=this.InterpolantFactoryMethodLinear;break;case Tr:e=this.InterpolantFactoryMethodSmooth;break;case No:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ot("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return Tr;case this.InterpolantFactoryMethodBezier:return No}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Ar(this.settings)&&(Kl(this.settings.inTangents,t),Kl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ar(this.settings)&&($l(this.settings.inTangents,t),$l(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Bt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Bt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Lu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let y=e[f+g];if(y!==e[u+g]||y!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ar(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kl(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function $l(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=Or;var Zi=class extends $e{constructor(t,e,i){super(t,e,i)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ps;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Jr.prototype.ValueTypeName="color";var Kr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Kr.prototype.ValueTypeName="number";var $r=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Ge.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ds=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends $e{constructor(t,e,i){super(t,e,i)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ps;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};ta.prototype.ValueTypeName="vector";var Rr={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(tc(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!tc(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function tc(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ea=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gc=new ea,qn=class{constructor(t){this.manager=t!==void 0?t:Gc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var _n=new WeakMap,ia=class extends qn{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Rr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=_n.get(a);f===void 0&&(f=[],_n.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=Hn("img");function c(){h(),e&&e(this);let f=_n.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}_n.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),Rr.remove(`image:${t}`);let u=_n.get(this)||[];for(let d=0;d<u.length;d++){let g=u[d];g.onError&&g.onError(f)}_n.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Rr.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Ps=class extends qn{constructor(t){super(t)}load(t,e,i,s){let r=new je,a=new ia(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},_s=class extends Le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var bo=new ue,ec=new _,ic=new _,Os=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(ec),ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ic),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(bo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Fn||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Er=new _,vr=new Ge,Mi=new _,mn=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Er,vr,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Er,vr,Mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Er,vr,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Er,vr,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new _,nc=new qt,sc=new qt,We=class extends mn{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,nc,sc),e.subVectors(sc,nc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Do=class extends Os{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}},zs=class extends _s{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Do}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ki=class extends mn{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Po=class extends Os{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qn=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Po}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var On=-90,zn=1,Yn=class extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(On,zn,t,e);s.layers=this.layers,this.add(s);let r=new We(On,zn,t,e);r.layers=this.layers,this.add(r);let a=new We(On,zn,t,e);a.layers=this.layers,this.add(a);let o=new We(On,zn,t,e);o.layers=this.layers,this.add(o);let c=new We(On,zn,t,e);c.layers=this.layers,this.add(c);let l=new We(On,zn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},na=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ll="\\[\\]\\.:\\/",ch=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",uh="[^"+ll.replace("\\.","")+"]",hh=/((?:WC+[\/:])*)/.source.replace("WC",cl),dh=/(WCOD+)?/.source.replace("WCOD",uh),fh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),ph=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),mh=new RegExp("^"+hh+dh+fh+ph+"$"),gh=["material","materials","bones","map"],_o=class{constructor(t,e,i){let s=i||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ge=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ch,"")}static parseTrackName(t){let e=mh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);gh.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=_o;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tg=new Float32Array(1);var Oo=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function ul(n,t,e,i){let s=Mh(i);switch(e){case Ko:return n*t;case da:return n*t/s.components*s.byteLength;case fa:return n*t/s.components*s.byteLength;case tn:return n*t*2/s.components*s.byteLength;case pa:return n*t*2/s.components*s.byteLength;case $o:return n*t*3/s.components*s.byteLength;case mi:return n*t*4/s.components*s.byteLength;case ma:return n*t*4/s.components*s.byteLength;case Hs:case ks:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Ws:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ma:case Ia:return Math.max(n,16)*Math.max(t,8)/4;case ga:case xa:return Math.max(n,8)*Math.max(t,8)/2;case ya:case Aa:case va:case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Gs:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Ha:case ka:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Va:case Wa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xs:case Ga:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mh(n){switch(n){case qe:case Qo:return{byteLength:1,components:1};case $n:case Yo:case pi:return{byteLength:2,components:1};case ua:case ha:return{byteLength:2,components:4};case fi:case ca:case ri:return{byteLength:4,components:1};case Zo:case Jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function fu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ih(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let y=f[d];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var yh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ah=`#ifdef USE_ALPHAHASH
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
#endif`,Eh=`#ifdef USE_ALPHAMAP
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
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ed=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
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
#endif`,Od=`#ifdef USE_MORPHTARGETS
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
#endif`,zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
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
#endif`,yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`uniform sampler2D t2D;
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
}`,Ef=`varying vec3 vWorldDirection;
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
}`,Of=`uniform vec3 diffuse;
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
}`,zf=`#define LAMBERT
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
}`,Ff=`#define NORMAL
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
}`,Hf=`#define NORMAL
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
}`,kf=`#define PHONG
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
}`,Qt={alphahash_fragment:yh,alphahash_pars_fragment:Ah,alphamap_fragment:Eh,alphamap_pars_fragment:vh,alphatest_fragment:Th,alphatest_pars_fragment:Sh,aomap_fragment:Rh,aomap_pars_fragment:bh,batching_pars_vertex:Nh,batching_vertex:wh,begin_vertex:Ch,beginnormal_vertex:Lh,bsdfs:Dh,iridescence_fragment:Ph,bumpmap_pars_fragment:_h,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:zh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Bh,color_fragment:jh,color_pars_fragment:Fh,color_pars_vertex:Hh,color_vertex:kh,common:Vh,defaultnormal_vertex:Wh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Xh,emissivemap_fragment:qh,emissivemap_pars_fragment:Qh,colorspace_fragment:Yh,colorspace_pars_fragment:Zh,envmap_fragment:Jh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:$h,envmap_pars_vertex:td,envmap_physical_pars_fragment:hd,envmap_vertex:ed,fog_vertex:id,fog_pars_vertex:nd,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:ud,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:Md,lights_fragment_begin:xd,lights_fragment_maps:Id,lights_fragment_end:yd,lightprobes_pars_fragment:Ad,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Sd,map_fragment:Rd,map_pars_fragment:bd,map_particle_fragment:Nd,map_particle_pars_fragment:wd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Dd,morphcolor_vertex:Pd,morphnormal_vertex:_d,morphtarget_pars_vertex:Od,morphtarget_vertex:zd,normal_fragment_begin:Ud,normal_fragment_maps:Bd,normal_pars_fragment:jd,normal_pars_vertex:Fd,normal_vertex:Hd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Qd,premultiplied_alpha_fragment:Yd,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:Kd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:uf,specularmap_pars_fragment:hf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:Mf,uv_vertex:xf,worldpos_vertex:If,background_vert:yf,background_frag:Af,backgroundCube_vert:Ef,backgroundCube_frag:vf,cube_vert:Tf,cube_frag:Sf,depth_vert:Rf,depth_frag:bf,distance_vert:Nf,distance_frag:wf,equirect_vert:Cf,equirect_frag:Lf,linedashed_vert:Df,linedashed_frag:Pf,meshbasic_vert:_f,meshbasic_frag:Of,meshlambert_vert:zf,meshlambert_frag:Uf,meshmatcap_vert:Bf,meshmatcap_frag:jf,meshnormal_vert:Ff,meshnormal_frag:Hf,meshphong_vert:kf,meshphong_frag:Vf,meshphysical_vert:Wf,meshphysical_frag:Gf,meshtoon_vert:Xf,meshtoon_frag:qf,points_vert:Qf,points_frag:Yf,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:Kf,sprite_frag:$f},Tt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ti={basic:{uniforms:Fe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Fe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Fe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Fe([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Fe([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Fe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Fe([Tt.points,Tt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Fe([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Fe([Tt.common,Tt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Fe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Fe([Tt.sprite,Tt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Fe([Tt.common,Tt.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Fe([Tt.lights,Tt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Ti.physical={uniforms:Fe([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var qa={r:0,b:0,g:0},tp=new ue,pu=new Ft;pu.set(-1,0,0,0,1,0,0,0,1);function ep(n,t,e,i,s,r){let a=new kt(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let A=T.backgroundBlurriness>0;R=t.get(R,A)}return R}function g(T){let R=!1,A=d(T);A===null?p(a,o):A&&A.isColor&&(p(A,1),R=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,R){let A=d(R);A&&A.isCubeTexture?(l===void 0&&(l=new fe(new Qi(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:yn(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:_e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=A,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(R.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pu),l.material.toneMapped=te.getTransfer(A.colorSpace)!==le,(h!==A||f!==A.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new fe(new si(2,2),new Ve({name:"BackgroundMaterial",uniforms:yn(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=te.getTransfer(A.colorSpace)!==le,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,R){T.getRGB(qa,ol(n)),e.buffers.color.setClear(qa.r,qa.g,qa.b,R,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,R=1){a.set(T),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:g,addToRenderList:y,dispose:m}}function ip(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,B,H,w,k){let Q=!1,z=f(L,w,H,B);r!==z&&(r=z,l(r.object)),Q=d(L,w,H,k),Q&&g(L,w,H,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,A(L,B,H,w),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function f(L,B,H,w){let k=w.wireframe===!0,Q=i[B.id];Q===void 0&&(Q={},i[B.id]=Q);let z=L.isInstancedMesh===!0?L.id:0,tt=Q[z];tt===void 0&&(tt={},Q[z]=tt);let V=tt[H.id];V===void 0&&(V={},tt[H.id]=V);let G=V[k];return G===void 0&&(G=u(c()),V[k]=G),G}function u(L){let B=[],H=[],w=[];for(let k=0;k<e;k++)B[k]=0,H[k]=0,w[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:w,object:L,attributes:{},index:null}}function d(L,B,H,w){let k=r.attributes,Q=B.attributes,z=0,tt=H.getAttributes();for(let V in tt)if(tt[V].location>=0){let $=k[V],ft=Q[V];if(ft===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),$===void 0||$.attribute!==ft||ft&&$.data!==ft.data)return!0;z++}return r.attributesNum!==z||r.index!==w}function g(L,B,H,w){let k={},Q=B.attributes,z=0,tt=H.getAttributes();for(let V in tt)if(tt[V].location>=0){let $=Q[V];$===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let ft={};ft.attribute=$,$&&$.data&&(ft.data=$.data),k[V]=ft,z++}r.attributes=k,r.attributesNum=z,r.index=w}function y(){let L=r.newAttributes;for(let B=0,H=L.length;B<H;B++)L[B]=0}function p(L){m(L,0)}function m(L,B){let H=r.newAttributes,w=r.enabledAttributes,k=r.attributeDivisors;H[L]=1,w[L]===0&&(n.enableVertexAttribArray(L),w[L]=1),k[L]!==B&&(n.vertexAttribDivisor(L,B),k[L]=B)}function T(){let L=r.newAttributes,B=r.enabledAttributes;for(let H=0,w=B.length;H<w;H++)B[H]!==L[H]&&(n.disableVertexAttribArray(H),B[H]=0)}function R(L,B,H,w,k,Q,z){z===!0?n.vertexAttribIPointer(L,B,H,k,Q):n.vertexAttribPointer(L,B,H,w,k,Q)}function A(L,B,H,w){y();let k=w.attributes,Q=H.getAttributes(),z=B.defaultAttributeValues;for(let tt in Q){let V=Q[tt];if(V.location>=0){let G=k[tt];if(G===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let $=G.normalized,ft=G.itemSize,_t=t.get(G);if(_t===void 0)continue;let j=_t.buffer,ut=_t.type,vt=_t.bytesPerElement,Dt=ut===n.INT||ut===n.UNSIGNED_INT||G.gpuType===ca;if(G.isInterleavedBufferAttribute){let gt=G.data,ct=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Jt=G.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)m(V.location+at,gt.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let at=0;at<V.locationSize;at++)p(V.location+at);n.bindBuffer(n.ARRAY_BUFFER,j);for(let at=0;at<V.locationSize;at++)R(V.location+at,ft/V.locationSize,ut,$,ct*vt,(Jt+ft/V.locationSize*at)*vt,Dt)}else{if(G.isInstancedBufferAttribute){for(let gt=0;gt<V.locationSize;gt++)m(V.location+gt,G.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let gt=0;gt<V.locationSize;gt++)p(V.location+gt);n.bindBuffer(n.ARRAY_BUFFER,j);for(let gt=0;gt<V.locationSize;gt++)R(V.location+gt,ft/V.locationSize,ut,$,ft*vt,ft/V.locationSize*gt*vt,Dt)}}else if(z!==void 0){let $=z[tt];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(V.location,$);break;case 3:n.vertexAttrib3fv(V.location,$);break;case 4:n.vertexAttrib4fv(V.location,$);break;default:n.vertexAttrib1fv(V.location,$)}}}}T()}function b(){O();for(let L in i){let B=i[L];for(let H in B){let w=B[H];for(let k in w){let Q=w[k];for(let z in Q)h(Q[z].object),delete Q[z];delete w[k]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let B=i[L.id];for(let H in B){let w=B[H];for(let k in w){let Q=w[k];for(let z in Q)h(Q[z].object),delete Q[z];delete w[k]}}delete i[L.id]}function M(L){for(let B in i){let H=i[B];for(let w in H){let k=H[w];if(k[L.id]===void 0)continue;let Q=k[L.id];for(let z in Q)h(Q[z].object),delete Q[z];delete k[L.id]}}}function S(L){for(let B in i){let H=i[B],w=L.isInstancedMesh===!0?L.id:0,k=H[w];if(k!==void 0){for(let Q in k){let z=k[Q];for(let tt in z)h(z[tt].object),delete z[tt];delete k[Q]}delete H[w],Object.keys(H).length===0&&delete i[B]}}}function O(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:M,initAttributes:y,enableAttribute:p,disableUnusedAttributes:T}}function np(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==mi&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let S=M===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==qe&&M!==ri&&!S&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ot("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:A,maxSamples:b,samples:E}}function rp(n){let t=this,e=null,i=0,s=!1,r=!1,a=new ui,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let T=r?0:i,R=T*4,A=m.clippingState||null;c.value=A,A=h(g,u,R,d);for(let b=0;b!==R;++b)A[b]=e[b];m.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=d+y*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,A=d;R!==y;++R,A+=4)a.copy(f[R]).applyMatrix4(T,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Js=class extends Ce{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Rs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qi(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_e,blending:gn});r.uniforms.tEquirect.value=e;let a=new fe(s,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=Pe),new Yn(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Xc=256,ap=3,op=20,mu=256,gu=16,lp=3,cp=new _,up=new kt,es=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yn(1,10,null),this._boxMesh=new fe(new Qi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=cp}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,y=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(t.background=c.getClearColor(up));let p=new Yn(i,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Xc,Hc(t))}_fromTexture(t,e){t.mapping===xn||t.mapping===Kn?this._setSize(t.image.length===0?Xc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=qc(t,!1,!1),i=Math.log2(t)-ap;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=qc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===xn||t.mapping===Kn?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=hp(),this._integrationMaterial=dp());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/gu);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-lp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(mu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=fp());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function qc(n,t,e){return new Js(n,{minFilter:di,generateMipmaps:t,type:pi,colorSpace:ms,depthBuffer:e})}function $s(n,t,e){return new Ve({name:n,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:_e,blending:gn,depthTest:!1,depthWrite:!1})}function hp(){return $s("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function pp(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===aa||d===oa)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Js(g.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===aa||d===oa,y=d===xn||d===Kn;if(g||y){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new es(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let T=u.image;return g&&T&&T.height>0||y&&T&&c(T)?(i===null&&(i=new es(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===aa?u.mapping=xn:d===oa&&(u.mapping=Kn),u}function c(u){let d=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&d++;return d===g}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function mp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&hn("WebGLRenderer: "+i+" extension not supported."),s}}}function gp(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)t.update(y[p],n.ARRAY_BUFFER)}function f(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let T=y!==null?y.array.length:p.array.length/3-1,R=p.count>=65535?ys:Is,A=new R(Math.ceil(T/3)*6,1),b=A.array;if(y!==null){let M=y.array;m=y.version;for(let S=0,O=0;S<T;S+=3){let C=M[S+0],L=M[S+1],B=M[S+2];b[O++]=C,b[O++]=L,b[O++]=L,b[O++]=B,b[O++]=B,b[O++]=C}}else{m=p.version;for(let M=0,S=0;M<T;M+=3){let O=M+0,C=M+1,L=M+2;b[S++]=O,b[S++]=C,b[S++]=C,b[S++]=L,b[S++]=L,b[S++]=O}}A.version=m;let E=r.get(g);E&&t.remove(E),r.set(g,A)}function u(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&f(g)}else f(g);return r.get(g)}function d(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function Mp(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=u[p];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function xp(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ip(n,t,e){let i=new WeakMap,s=new xe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let O=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],R=0;d===!0&&(R=1),g===!0&&(R=2),y===!0&&(R=3);let A=o.attributes.position.count*R,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let E=new Float32Array(A*b*4*f),M=new Ms(E,A,b,f);M.type=ri,M.needsUpdate=!0;let S=R*4;for(let C=0;C<f;C++){let L=p[C],B=m[C],H=T[C],w=A*b*4*C;for(let k=0;k<L.count;k++){let Q=k*S;d===!0&&(s.fromBufferAttribute(L,k),E[w+Q+0]=s.x,E[w+Q+1]=s.y,E[w+Q+2]=s.z,E[w+Q+3]=0),g===!0&&(s.fromBufferAttribute(B,k),E[w+Q+4]=s.x,E[w+Q+5]=s.y,E[w+Q+6]=s.z,E[w+Q+7]=0),y===!0&&(s.fromBufferAttribute(H,k),E[w+Q+8]=s.x,E[w+Q+9]=s.y,E[w+Q+10]=s.z,E[w+Q+11]=H.itemSize===4?s.w:1)}}u={count:f,texture:M,size:new qt(A,b)},i.set(o,u),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function yp(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ap={[ko]:"LINEAR_TONE_MAPPING",[Vo]:"REINHARD_TONE_MAPPING",[Wo]:"CINEON_TONE_MAPPING",[Bs]:"ACES_FILMIC_TONE_MAPPING",[Xo]:"AGX_TONE_MAPPING",[js]:"NEUTRAL_TONE_MAPPING",[Go]:"CUSTOM_TONE_MAPPING"};function Ep(n,t,e,i,s,r){let a=new Ce(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new ni;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let f=new Wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new fe(h,f),d=new Ki(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,T=null,R=[],A=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),c!==null&&c.setSize(b,E);for(let M=0;M<R.length;M++){let S=R[M];S.setSize&&S.setSize(b,E)}},this.setEffects=function(b){R=b,A=R.length>0&&R[0].isRenderPass===!0;let E=a.width,M=a.height;R.length>0&&o===null&&(o=new Ce(E,M,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Ce(E,M,{type:pi,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&R.some(O=>O.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new Oi(E,M),r===!0&&(l.format=zi,l.type=In)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let O=0;O<R.length;O++){let C=R[O];C.setSize&&C.setSize(E,M),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(b,E){if(p||b.toneMapping===Ei&&R.length===0)return!1;if(T=E,E!==null){let M=E.width,S=E.height;(a.width!==M||a.height!==S)&&this.setSize(M,S)}return A===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Ei,!0},this.hasRenderPass=function(){return A},this.end=function(b,E){b.toneMapping=m,p=!0;let M=a,S=o;for(let O=0;O<R.length;O++){let C=R[O];C.enabled!==!1&&(C.render(b,S,M,E),C.needsSwap!==!1&&(M=S,S=S===o?c:o))}if(g!==b.outputColorSpace||y!==b.toneMapping){g=b.outputColorSpace,y=b.toneMapping,f.defines={},te.getTransfer(g)===le&&(f.defines.SRGB_TRANSFER="");let O=Ap[y];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(T),b.render(u,d),T=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Mu=new je,xu=new Oi(1,1),Iu=new bs(1),yu=new Ms,Au=new jr,Eu=new Rs,Zc=[],Jc=[],Kc=new Float32Array(16),$c=new Float32Array(9),tu=new Float32Array(4);function is(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ya(n,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function Sp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function Rp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function bp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Se(e,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),Re(e,i)}}function Np(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Se(e,i))return;$c.set(i),n.uniformMatrix3fv(this.addr,!1,$c),Re(e,i)}}function wp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Se(e,i))return;Kc.set(i),n.uniformMatrix4fv(this.addr,!1,Kc),Re(e,i)}}function Cp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Lp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function Dp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function Pp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function _p(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Op(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function zp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function Up(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function Za(n){return n.version===0&&(n.compareFunction=il,n.needsUpdate=!0),n}function Bp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Za(xu):r=Mu,e.setTexture2D(t||r,s)}function jp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Au,s)}function Fp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Za(Iu):r=Eu,e.setTextureCube(t||r,s)}function Hp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||yu,s)}function kp(n){switch(n){case 5126:return vp;case 35664:return Tp;case 35665:return Sp;case 35666:return Rp;case 35674:return bp;case 35675:return Np;case 35676:return wp;case 5124:case 35670:return Cp;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Pp;case 5125:return _p;case 36294:return Op;case 36295:return zp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Hp}}function Vp(n,t){n.uniform1fv(this.addr,t)}function Wp(n,t){let e=is(t,this.size,2);n.uniform2fv(this.addr,e)}function Gp(n,t){let e=is(t,this.size,3);n.uniform3fv(this.addr,e)}function Xp(n,t){let e=is(t,this.size,4);n.uniform4fv(this.addr,e)}function qp(n,t){let e=is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qp(n,t){let e=is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Yp(n,t){let e=is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zp(n,t){n.uniform1iv(this.addr,t)}function Jp(n,t){n.uniform2iv(this.addr,t)}function Kp(n,t){n.uniform3iv(this.addr,t)}function $p(n,t){n.uniform4iv(this.addr,t)}function tm(n,t){n.uniform1uiv(this.addr,t)}function em(n,t){n.uniform2uiv(this.addr,t)}function im(n,t){n.uniform3uiv(this.addr,t)}function nm(n,t){n.uniform4uiv(this.addr,t)}function sm(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Za(xu):a=Mu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function rm(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Au,r[a])}function am(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Za(Iu):a=Eu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function om(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yu,r[a])}function lm(n){switch(n){case 5126:return Vp;case 35664:return Wp;case 35665:return Gp;case 35666:return Xp;case 35674:return qp;case 35675:return Qp;case 35676:return Yp;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return $p;case 5125:return tm;case 36294:return em;case 36295:return im;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}var fl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kp(e.type)}},pl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}},ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},hl=/(\w+)(\])?(\[|\.)?/g;function eu(n,t){n.seq.push(t),n.map[t.id]=t}function cm(n,t,e){let i=n.name,s=i.length;for(hl.lastIndex=0;;){let r=hl.exec(i),a=hl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){eu(e,l===void 0?new fl(o,n,t):new pl(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new ml(o),eu(e,f)),e=f}}}var ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);cm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function iu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var um=37297,hm=0;function dm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var nu=new Ft;function fm(n){te._getMatrix(nu,te.workingColorSpace,n);let t=`mat3( ${nu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case gs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function su(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dm(n.getShaderSource(t),o)}else return r}function pm(n,t){let e=fm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var mm={[ko]:"Linear",[Vo]:"Reinhard",[Wo]:"Cineon",[Bs]:"ACESFilmic",[Xo]:"AgX",[js]:"Neutral",[Go]:"Custom"};function gm(n,t){let e=mm[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qa=new _;function Mm(){te.getLuminanceCoefficients(Qa);let n=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Im(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ym(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Zs(n){return n!==""}function ru(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function au(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(Am,Em)}function Em(n,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return gl(e)}var vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(n){return n.replace(vm,Tm)}function Tm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Sm={[Us]:"SHADOWMAP_TYPE_PCF",[Zn]:"SHADOWMAP_TYPE_VSM"};function Rm(n){return Sm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bm={[Kn]:"ENVMAP_MODE_REFRACTION"};function Nm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":bm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wm={[ra]:"ENVMAP_BLENDING_MULTIPLY",[Sc]:"ENVMAP_BLENDING_MIX",[Rc]:"ENVMAP_BLENDING_ADD"};function Cm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wm[n.combine]||"ENVMAP_BLENDING_NONE"}function Lm(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Rm(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Nm(e),f=Cm(e),u=xm(e),d=Im(r),g=s.createProgram(),y,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Zs).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(y=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ei?gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,pm("linearToOutputTexel",e.outputColorSpace),Mm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),a=gl(a),a=ru(a,e),a=au(a,e),o=gl(o),o=ru(o,e),o=au(o,e),a=ou(a),o=ou(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=m+y+a,R=m+p+o,A=iu(s,s.VERTEX_SHADER,T),b=iu(s,s.FRAGMENT_SHADER,R);s.attachShader(g,A),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(C){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(A)||"",H=s.getShaderInfoLog(b)||"",w=L.trim(),k=B.trim(),Q=H.trim(),z=!0,tt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,A,b);else{let V=su(s,A,"vertex"),G=su(s,b,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+w+`
`+V+`
`+G)}else w!==""?Ot("WebGLProgram: Program Info Log:",w):(k===""||Q==="")&&(tt=!1);tt&&(C.diagnostics={runnable:z,programLog:w,vertexShader:{log:k,prefix:y},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(A),s.deleteShader(b),M=new ts(s,g),S=ym(s,g)}let M;this.getUniforms=function(){return M===void 0&&E(this),M};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,um)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}var Dm=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xl(t),e.set(t,i)),i}},xl=class{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}};function Pm(n){return n===tn||n===Gs||n===Xs}function _m(n,t,e,i,s,r){let a=new xs,o=new Ml,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,O,C,L,B){let H=C.fog,w=L.geometry,k=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?C.environment:null,Q=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,z=t.get(M.envMap||k,Q),tt=u[M.type],V=i.precision;M.precision!==null&&(V=i.getMaxPrecision(M.precision),V!==M.precision&&Ot("WebGLProgram.getParameters:",M.precision,"not supported, using",V,"instead."));let G=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,$=G!==void 0?G.length:0,ft=0;w.morphAttributes.position!==void 0&&(ft=1),w.morphAttributes.normal!==void 0&&(ft=2),w.morphAttributes.color!==void 0&&(ft=3);let _t,j,ut,vt;if(tt){let At=Ti[tt];_t=At.vertexShader,j=At.fragmentShader}else{_t=M.vertexShader,j=M.fragmentShader;let At=o.getVertexShaderStage(M),re=o.getFragmentShaderStage(M);o.update(M,At,re),ut=At.id,vt=re.id}let Dt=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),ct=L.isInstancedMesh===!0,Jt=L.isBatchedMesh===!0,at=!!M.map,Et=!!M.matcap,yt=!!z,pt=yt&&z.isPMREMTexture===!0,zt=!!M.aoMap,Ut=!!M.lightMap,ee=!!M.bumpMap&&M.wireframe===!1,Gt=!!M.normalMap,ye=!!M.displacementMap,jt=!!M.emissiveMap,Me=!!M.metalnessMap,ne=!!M.roughnessMap,ae=M.anisotropy>0,P=M.clearcoat>0,ce=M.diffuseRoughness>0,ie=M.dispersion>0,Mt=M.retroreflectivity>0,it=M.iridescence>0,Xt=M.sheen>0,mt=M.transmission>0,Rt=ae&&!!M.anisotropyMap,v=P&&!!M.clearcoatMap,x=P&&!!M.clearcoatNormalMap,U=P&&!!M.clearcoatRoughnessMap,et=ce&&!!M.diffuseRoughnessMap,Z=it&&!!M.iridescenceMap,st=it&&!!M.iridescenceThicknessMap,lt=Xt&&!!M.sheenColorMap,Y=Xt&&!!M.sheenRoughnessMap,J=!!M.specularMap,dt=!!M.specularColorMap,N=!!M.specularIntensityMap,K=mt&&!!M.transmissionMap,q=mt&&!!M.thicknessMap,ot=!!M.gradientMap,rt=!!M.alphaMap,ht=M.alphaTest>0,Nt=!!M.alphaHash,Ht=!!M.extensions,nt=Ei;M.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(nt=n.toneMapping);let wt=pt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Vt={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:_t,fragmentShader:j,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:V,batching:Jt,batchingColor:Jt&&L._colorsTexture!==null,instancing:ct,instancingColor:ct&&L.instanceColor!==null,instancingMorph:ct&&L.morphTexture!==null,outputColorSpace:Dt===null?n.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:Et,envMap:yt,envMapMode:yt&&z.mapping,envMapPMREM:pt,envMapMaxLod:pt?wt.length-1:null,envMapSize:pt?wt[0].width:null,aoMap:zt,lightMap:Ut,bumpMap:ee,normalMap:Gt,displacementMap:ye,emissiveMap:jt,normalMapObjectSpace:Gt&&M.normalMapType===wc,normalMapTangentSpace:Gt&&M.normalMapType===qs,packedNormalMap:Gt&&M.normalMapType===qs&&Pm(M.normalMap.format),metalnessMap:Me,roughnessMap:ne,anisotropy:ae,anisotropyMap:Rt,clearcoat:P,clearcoatMap:v,clearcoatNormalMap:x,clearcoatRoughnessMap:U,diffuseRoughness:ce,diffuseRoughnessMap:et,dispersion:ie,retroreflection:Mt,iridescence:it,iridescenceMap:Z,iridescenceThicknessMap:st,sheen:Xt,sheenColorMap:lt,sheenRoughnessMap:Y,specularMap:J,specularColorMap:dt,specularIntensityMap:N,transmission:mt,transmissionMap:K,thicknessMap:q,gradientMap:ot,opaque:M.transparent===!1&&M.blending===Jn&&M.alphaToCoverage===!1,alphaMap:rt,alphaTest:ht,alphaHash:Nt,combine:M.combine,mapUv:at&&d(M.map.channel),aoMapUv:zt&&d(M.aoMap.channel),lightMapUv:Ut&&d(M.lightMap.channel),bumpMapUv:ee&&d(M.bumpMap.channel),normalMapUv:Gt&&d(M.normalMap.channel),displacementMapUv:ye&&d(M.displacementMap.channel),emissiveMapUv:jt&&d(M.emissiveMap.channel),metalnessMapUv:Me&&d(M.metalnessMap.channel),roughnessMapUv:ne&&d(M.roughnessMap.channel),anisotropyMapUv:Rt&&d(M.anisotropyMap.channel),clearcoatMapUv:v&&d(M.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&d(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&d(M.diffuseRoughnessMap.channel),iridescenceMapUv:Z&&d(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&d(M.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&d(M.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(M.sheenRoughnessMap.channel),specularMapUv:J&&d(M.specularMap.channel),specularColorMapUv:dt&&d(M.specularColorMap.channel),specularIntensityMapUv:N&&d(M.specularIntensityMap.channel),transmissionMapUv:K&&d(M.transmissionMap.channel),thicknessMapUv:q&&d(M.thicknessMap.channel),alphaMapUv:rt&&d(M.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(Gt||ae),vertexNormals:!!w.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!w.attributes.uv&&(at||rt),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||w.attributes.normal===void 0&&Gt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ft,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===le,decodeVideoTextureEmissive:jt&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xe,flipSided:M.side===_e,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ht&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&M.extensions.multiDraw===!0||Jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function y(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let O in M.defines)S.push(O),S.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(p(S,M),m(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function p(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapPMREM),M.push(S.envMapMaxLod),M.push(S.envMapSize),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.diffuseRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.numSunLights),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numSunLightShadows),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.numLightProbeGrids),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function m(M,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function T(M){let S=u[M.type],O;if(S){let C=Ti[S];O=Vc.clone(C.uniforms)}else O=M.uniforms;return O}function R(M,S){let O=h.get(S);return O!==void 0?++O.usedTimes:(O=new Lm(n,S,M,s),l.push(O),h.set(S,O)),O}function A(M){if(--M.usedTimes===0){let S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function b(M){o.remove(M)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:T,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:E}}function Om(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function zm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function uu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,y,p,m){let T=n[t];return T===void 0?(T={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},n[t]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=g,T.materialVariant=a(u),T.groupOrder=y,T.renderOrder=u.renderOrder,T.z=p,T.group=m),t++,T}function c(u,d,g,y,p,m,T){T.reversedDepth===!0&&(p=-p);let R=o(u,d,g,y,p,m);g.transmission>0?i.push(R):g.transparent===!0?s.push(R):e.push(R)}function l(u,d,g,y,p,m){let T=o(u,d,g,y,p,m);g.transmission>0?i.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,d){e.length>1&&e.sort(u||zm),i.length>1&&i.sort(d||cu),s.length>1&&s.sort(d||cu)}function f(){for(let u=t,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Um(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new uu,n.set(i,[a])):s>=r.length?(a=new uu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Bm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new _,color:new kt};break;case"SpotLight":e={position:new _,direction:new _,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new _,halfWidth:new _,halfHeight:new _};break}return n[t.id]=e,e}}}function jm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Fm=0;function Hm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function km(n){let t=new Bm,e=jm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new _);let s=new _,r=new ue,a=new ue;function o(l){let h=0,f=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,T=0,R=0,A=0,b=0,E=0,M=0,S=0,O=0,C=0;l.sort(Hm);for(let B=0,H=l.length;B<H;B++){let w=l[B],k=w.color,Q=w.intensity,z=w.distance,tt=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===tn?tt=w.shadow.map.texture:tt=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=k.r*Q,f+=k.g*Q,u+=k.b*Q;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],Q);C++}else if(w.isSunLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let G=w.shadow,$=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[g]=$,i.sunShadowMap[g]=tt;let ft=G.getViewportCount();for(let _t=0;_t<ft;_t++)i.sunShadowMatrix[y+_t]=G.getMatrix(_t),i.sunShadowCascade[y+_t]=G._cascadeData[_t];y+=ft,g++}i.sun[d]=V,d++}else if(w.isDirectionalLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let G=w.shadow,$=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=tt,i.directionalShadowMatrix[p]=w.shadow.matrix,b++}i.directional[p]=V,p++}else if(w.isSpotLight){let V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(k).multiplyScalar(Q),V.distance=z,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[T]=V;let G=w.shadow;if(w.map&&(i.spotLightMap[S]=w.map,S++,G.updateMatrices(w),w.castShadow&&O++),i.spotLightMatrix[T]=G.matrix,w.castShadow){let $=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.spotShadow[T]=$,i.spotShadowMap[T]=tt,M++}T++}else if(w.isRectAreaLight){let V=t.get(w);V.color.copy(k).multiplyScalar(Q),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[R]=V,R++}else if(w.isPointLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){let G=w.shadow,$=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=tt,i.pointShadowMatrix[m]=w.shadow.matrix,E++}i.point[m]=V,m++}else if(w.isHemisphereLight){let V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(Q),V.groundColor.copy(w.groundColor).multiplyScalar(Q),i.hemi[A]=V,A++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let L=i.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==T||L.rectAreaLength!==R||L.hemiLength!==A||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==M||L.numSpotMaps!==S||L.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=p,i.spot.length=T,i.rectArea.length=R,i.point.length=m,i.hemi.length=A,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.spotLightMatrix.length=M+S-O,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=C,L.sunLength=d,L.directionalLength=p,L.pointLength=m,L.spotLength=T,L.rectAreaLength=R,L.hemiLength=A,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=M,L.numSpotMaps=S,L.numLightProbes=C,i.version=Fm++)}function c(l,h){let f=0,u=0,d=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let T=0,R=l.length;T<R;T++){let A=l[T];if(A.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),f++}else if(A.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(A.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(A.isRectAreaLight){let b=i.rectArea[y];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(A.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function hu(n){let t=new km(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function c(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Vm(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new hu(n),t.set(s,[o])):r>=a.length?(o=new hu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Wm=`void main() {
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
}`,Xm=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)],qm=[new _(0,-1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1),new _(0,-1,0),new _(0,-1,0)],du=new ue,Ys=new _,dl=new _;function Qm(n,t,e){let i=new qi,s=new qt,r=new qt,a=new xe,o=new Gr,c=new Xr,l={},h=e.maxTextureSize,f={[$i]:_e,[_e]:$i,[Xe]:Xe},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Wm,fragmentShader:Gm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ni;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new fe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let m=this.type;this.render=function(E,M,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===sa&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let O=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(gn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=m!==this.type;H&&M.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(k=>k.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,k=E.length;w<k;w++){let Q=E[w],z=Q.shadow;if(z===void 0){Ot("WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let tt=z.getFrameExtents();s.multiply(tt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,z.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||H===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Zn){if(Q.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ce(s.x,s.y,{format:tn,type:pi,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),z.map.texture.name=Q.name+".shadowMap",z.map.depthTexture=new Oi(s.x,s.y,ri),z.map.depthTexture.name=Q.name+".shadowMapDepth",z.map.depthTexture.format=Di,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=we,z.map.depthTexture.magFilter=we}else Q.isPointLight?(z.map=new Js(s.x),z.map.depthTexture=new bs(s.x,fi)):(z.map=new Ce(s.x,s.y),z.map.depthTexture=new Oi(s.x,s.y,fi)),z.map.depthTexture.name=Q.name+".shadowMap",z.map.depthTexture.format=Di,this.type===Us?(z.map.depthTexture.compareFunction=V?el:tl,z.map.depthTexture.minFilter=Pe,z.map.depthTexture.magFilter=Pe):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=we,z.map.depthTexture.magFilter=we);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let G=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Q.isPointLight!==!0&&z.updateMatrices(Q,S);let $=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:S.layers;for(let ft=0;ft<G;ft++){let _t=z.getCamera(ft);if(Q.isPointLight){let j=z.camera,ut=z.matrix,vt=Q.distance||j.far;vt!==j.far&&(j.far=vt,j.updateProjectionMatrix()),Ys.setFromMatrixPosition(Q.matrixWorld),j.position.copy(Ys),dl.copy(j.position),dl.add(Xm[ft]),j.up.copy(qm[ft]),j.lookAt(dl),j.updateMatrixWorld(),ut.makeTranslation(-Ys.x,-Ys.y,-Ys.z),du.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(du,j.coordinateSystem,j.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ft),n.clear();else{ft===0&&(n.setRenderTarget(z.map),n.clear());let j=z.getViewport(ft);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),B.viewport(a)}i=z.getFrustum(ft),A(M,S,_t,Q,$,this.type)}z.isPointLightShadow!==!0&&this.type===Zn&&T(z,S),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(O,C,L)};function T(E,M){let S=t.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ce(s.x,s.y,{format:tn,type:pi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(M,null,S,u,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(M,null,S,d,y,null)}function R(E,M,S,O){let C=null,L=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)C=L;else if(C=S.isPointLight===!0?c:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let B=C.uuid,H=M.uuid,w=l[B];w===void 0&&(w={},l[B]=w);let k=w[H];k===void 0&&(k=C.clone(),w[H]=k,M.addEventListener("dispose",b)),C=k}if(C.visible=M.visible,C.wireframe=M.wireframe,O===Zn?C.side=M.shadowSide!==null?M.shadowSide:M.side:C.side=M.shadowSide!==null?M.shadowSide:f[M.side],C.alphaMap=M.alphaMap,C.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,C.map=M.map,C.clipShadows=M.clipShadows,C.clippingPlanes=M.clippingPlanes,C.clipIntersection=M.clipIntersection,C.displacementMap=M.displacementMap,C.displacementScale=M.displacementScale,C.displacementBias=M.displacementBias,C.wireframeLinewidth=M.wireframeLinewidth,C.linewidth=M.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=S}return C}function A(E,M,S,O,C,L){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Zn)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let w=t.update(E),k=E.material;if(Array.isArray(k)){let Q=w.groups;for(let z=0,tt=Q.length;z<tt;z++){let V=Q[z],G=k[V.materialIndex];if(G&&G.visible){let $=R(E,G,O,L);E.onBeforeShadow(n,E,M,S,w,$,V),n.renderBufferDirect(S,null,w,$,E,V),E.onAfterShadow(n,E,M,S,w,$,V)}}}else if(k.visible){let Q=R(E,k,O,L);E.onBeforeShadow(n,E,M,S,w,Q,null),n.renderBufferDirect(S,null,w,Q,E,null),E.onAfterShadow(n,E,M,S,w,Q,null)}}let H=E.children;for(let w=0,k=H.length;w<k;w++)A(H[w],M,S,O,C,L)}function b(E){E.target.removeEventListener("dispose",b);for(let S in l){let O=l[S],C=E.target.uuid;C in O&&(O[C].dispose(),delete O[C])}}}function Ym(n,t){function e(){let N=!1,K=new xe,q=null,ot=new xe(0,0,0,0);return{setMask:function(rt){q!==rt&&!N&&(n.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){N=rt},setClear:function(rt,ht,Nt,Ht,nt){nt===!0&&(rt*=Ht,ht*=Ht,Nt*=Ht),K.set(rt,ht,Nt,Ht),ot.equals(K)===!1&&(n.clearColor(rt,ht,Nt,Ht),ot.copy(K))},reset:function(){N=!1,q=null,ot.set(-1,0,0,0)}}}function i(){let N=!1,K=!1,q=null,ot=null,rt=null;return{setReversed:function(ht){if(K!==ht){let Nt=t.get("EXT_clip_control");ht?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),K=ht;let Ht=rt;rt=null,this.setClear(Ht)}},getReversed:function(){return K},setTest:function(ht){ht?gt(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(ht){q!==ht&&!N&&(n.depthMask(ht),q=ht)},setFunc:function(ht){if(K&&(ht=Fc[ht]),ot!==ht){switch(ht){case br:n.depthFunc(n.NEVER);break;case Nr:n.depthFunc(n.ALWAYS);break;case wr:n.depthFunc(n.LESS);break;case Bn:n.depthFunc(n.LEQUAL);break;case Cr:n.depthFunc(n.EQUAL);break;case Lr:n.depthFunc(n.GEQUAL);break;case Dr:n.depthFunc(n.GREATER);break;case Pr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=ht}},setLocked:function(ht){N=ht},setClear:function(ht){rt!==ht&&(rt=ht,K&&(ht=1-ht),n.clearDepth(ht))},reset:function(){N=!1,q=null,ot=null,rt=null,K=!1}}}function s(){let N=!1,K=null,q=null,ot=null,rt=null,ht=null,Nt=null,Ht=null,nt=null;return{setTest:function(wt){N||(wt?gt(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(wt){K!==wt&&!N&&(n.stencilMask(wt),K=wt)},setFunc:function(wt,Vt,At){(q!==wt||ot!==Vt||rt!==At)&&(n.stencilFunc(wt,Vt,At),q=wt,ot=Vt,rt=At)},setOp:function(wt,Vt,At){(ht!==wt||Nt!==Vt||Ht!==At)&&(n.stencilOp(wt,Vt,At),ht=wt,Nt=Vt,Ht=At)},setLocked:function(wt){N=wt},setClear:function(wt){nt!==wt&&(n.clearStencil(wt),nt=wt)},reset:function(){N=!1,K=null,q=null,ot=null,rt=null,ht=null,Nt=null,Ht=null,nt=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],y=null,p=!1,m=null,T=null,R=null,A=null,b=null,E=null,M=null,S=new kt(0,0,0),O=0,C=!1,L=null,B=null,H=null,w=null,k=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,tt=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=tt>=2);let G=null,$={},ft=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),j=new xe().fromArray(ft),ut=new xe().fromArray(_t);function vt(N,K,q,ot){let rt=new Uint8Array(4),ht=n.createTexture();n.bindTexture(N,ht),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<q;Nt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(K+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return ht}let Dt={};Dt[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),a.setFunc(Bn),ee(!1),Gt(zo),gt(n.CULL_FACE),zt(gn);function gt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function ct(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Jt(N,K){return u[N]!==K?(n.bindFramebuffer(N,K),u[N]=K,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=K),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=K),!0):!1}function at(N,K){let q=g,ot=!1;if(N){q=d.get(K),q===void 0&&(q=[],d.set(K,q));let rt=N.textures;if(q.length!==rt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Nt=rt.length;ht<Nt;ht++)q[ht]=n.COLOR_ATTACHMENT0+ht;q.length=rt.length,ot=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ot=!0);ot&&n.drawBuffers(q)}function Et(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let yt={[Mn]:n.FUNC_ADD,[lc]:n.FUNC_SUBTRACT,[cc]:n.FUNC_REVERSE_SUBTRACT};yt[uc]=n.MIN,yt[hc]=n.MAX;let pt={[dc]:n.ZERO,[fc]:n.ONE,[pc]:n.SRC_COLOR,[Fo]:n.SRC_ALPHA,[yc]:n.SRC_ALPHA_SATURATE,[xc]:n.DST_COLOR,[gc]:n.DST_ALPHA,[mc]:n.ONE_MINUS_SRC_COLOR,[Ho]:n.ONE_MINUS_SRC_ALPHA,[Ic]:n.ONE_MINUS_DST_COLOR,[Mc]:n.ONE_MINUS_DST_ALPHA,[Ac]:n.CONSTANT_COLOR,[Ec]:n.ONE_MINUS_CONSTANT_COLOR,[vc]:n.CONSTANT_ALPHA,[Tc]:n.ONE_MINUS_CONSTANT_ALPHA};function zt(N,K,q,ot,rt,ht,Nt,Ht,nt,wt){if(N===gn){p===!0&&(ct(n.BLEND),p=!1);return}if(p===!1&&(gt(n.BLEND),p=!0),N!==oc){if(N!==m||wt!==C){if((T!==Mn||b!==Mn)&&(n.blendEquation(n.FUNC_ADD),T=Mn,b=Mn),wt)switch(N){case Jn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFunc(n.ONE,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",N);break}else switch(N){case Jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bo:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",N);break}R=null,A=null,E=null,M=null,S.set(0,0,0),O=0,m=N,C=wt}return}rt=rt||K,ht=ht||q,Nt=Nt||ot,(K!==T||rt!==b)&&(n.blendEquationSeparate(yt[K],yt[rt]),T=K,b=rt),(q!==R||ot!==A||ht!==E||Nt!==M)&&(n.blendFuncSeparate(pt[q],pt[ot],pt[ht],pt[Nt]),R=q,A=ot,E=ht,M=Nt),(Ht.equals(S)===!1||nt!==O)&&(n.blendColor(Ht.r,Ht.g,Ht.b,nt),S.copy(Ht),O=nt),m=N,C=!1}function Ut(N,K){N.side===Xe?ct(n.CULL_FACE):gt(n.CULL_FACE);let q=N.side===_e;K&&(q=!q),ee(q),N.blending===Jn&&N.transparent===!1?zt(gn):zt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ot=N.stencilWrite;o.setTest(ot),ot&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),jt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function Gt(N){N!==rc?(gt(n.CULL_FACE),N!==B&&(N===zo?n.cullFace(n.BACK):N===ac?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),B=N}function ye(N){N!==H&&(z&&n.lineWidth(N),H=N)}function jt(N,K,q){N?(gt(n.POLYGON_OFFSET_FILL),(w!==K||k!==q)&&(w=K,k=q,a.getReversed()&&(K=-K,q=-q),n.polygonOffset(K,q))):ct(n.POLYGON_OFFSET_FILL)}function Me(N){N?gt(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function ne(N){N===void 0&&(N=n.TEXTURE0+Q-1),G!==N&&(n.activeTexture(N),G=N)}function ae(N,K,q){q===void 0&&(G===null?q=n.TEXTURE0+Q-1:q=G);let ot=$[q];ot===void 0&&(ot={type:void 0,texture:void 0},$[q]=ot),(ot.type!==N||ot.texture!==K)&&(G!==q&&(n.activeTexture(q),G=q),n.bindTexture(N,K||Dt[N]),ot.type=N,ot.texture=K)}function P(){let N=$[G];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ce(){try{n.compressedTexImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function ie(){try{n.compressedTexImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function Mt(){try{n.texSubImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function it(){try{n.texSubImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function Xt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function mt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function Rt(){try{n.texStorage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function v(){try{n.texStorage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function x(){try{n.texImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function U(){try{n.texImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function et(N){return f[N]!==void 0?f[N]:n.getParameter(N)}function Z(N,K){f[N]!==K&&(n.pixelStorei(N,K),f[N]=K)}function st(N){j.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function lt(N){ut.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ut.copy(N))}function Y(N,K){let q=l.get(K);q===void 0&&(q=new WeakMap,l.set(K,q));let ot=q.get(N);ot===void 0&&(ot=n.getUniformBlockIndex(K,N.name),n.uniformBlockBinding(K,ot,ot),q.set(N,ot))}function J(N,K,q){let rt=l.get(K).get(N);c[rt]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,rt,q),c[rt]=q)}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},G=null,$={},u={},c={},d=new WeakMap,g=[],y=null,p=!1,m=null,T=null,R=null,A=null,b=null,E=null,M=null,S=new kt(0,0,0),O=0,C=!1,L=null,B=null,H=null,w=null,k=null,j.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:ct,bindFramebuffer:Jt,drawBuffers:at,useProgram:Et,setBlending:zt,setMaterial:Ut,setFlipSided:ee,setCullFace:Gt,setLineWidth:ye,setPolygonOffset:jt,setScissorTest:Me,activeTexture:ne,bindTexture:ae,unbindTexture:P,compressedTexImage2D:ce,compressedTexImage3D:ie,texImage2D:x,texImage3D:U,pixelStorei:Z,getParameter:et,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Rt,texStorage3D:v,texSubImage2D:Mt,texSubImage3D:it,compressedTexSubImage2D:Xt,compressedTexSubImage3D:mt,scissor:st,viewport:lt,reset:dt}}function Zm(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=new Set,y=new FinalizationRegistry(v=>g.delete(v)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(v,x){return p?new OffscreenCanvas(v,x):Hn("canvas")}function T(v,x,U){let et=1,Z=Rt(v);if((Z.width>U||Z.height>U)&&(et=U/Math.max(Z.width,Z.height)),et<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){let st=Math.floor(et*Z.width),lt=Math.floor(et*Z.height);u===void 0&&(u=m(st,lt));let Y=x?m(st,lt):u;return Y.width=st,Y.height=lt,Y.getContext("2d").drawImage(v,0,0,st,lt),Ot("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+st+"x"+lt+")."),Y}else return"data"in v&&Ot("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),v;return v}function R(v){return v.generateMipmaps}function A(v){n.generateMipmap(v)}function b(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(v,x,U,et,Z,st=!1){if(v!==null){if(n[v]!==void 0)return n[v];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let lt;et&&(lt=t.get("EXT_texture_norm16"),lt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8),U===n.UNSIGNED_SHORT&&lt&&(Y=lt.R16_EXT),U===n.SHORT&&lt&&(Y=lt.R16_SNORM_EXT)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),x===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8),U===n.UNSIGNED_SHORT&&lt&&(Y=lt.RG16_EXT),U===n.SHORT&&lt&&(Y=lt.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),U===n.UNSIGNED_INT&&(Y=n.RGB32UI),U===n.BYTE&&(Y=n.RGB8I),U===n.SHORT&&(Y=n.RGB16I),U===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),U===n.UNSIGNED_INT&&(Y=n.RGBA32UI),U===n.BYTE&&(Y=n.RGBA8I),U===n.SHORT&&(Y=n.RGBA16I),U===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGB16_EXT),U===n.SHORT&&lt&&(Y=lt.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){let J=st?gs:te.getTransfer(Z);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=J===le?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGBA16_EXT),U===n.SHORT&&lt&&(Y=lt.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(v,x){let U;return v?x===null||x===fi||x===In?U=n.DEPTH24_STENCIL8:x===ri?U=n.DEPTH32F_STENCIL8:x===$n&&(U=n.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fi||x===In?U=n.DEPTH_COMPONENT24:x===ri?U=n.DEPTH_COMPONENT32F:x===$n&&(U=n.DEPTH_COMPONENT16),U}function S(v,x){return R(v)===!0||v.isFramebufferTexture&&v.minFilter!==we&&v.minFilter!==Pe?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function O(v){let x=new WeakRef(v);i.get(v).__ref=x,g.add(x),y.register(v,x,x)}function C(v){let x=i.get(v).__ref;x!==void 0&&(g.delete(x),y.unregister(x))}function L(v){H(v.target)}function B(v){w(v.target)}function H(v){v.removeEventListener("dispose",L),C(v),Q(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function w(v){v.removeEventListener("dispose",B),C(v),tt(v)}function k(){for(let v of g){let x=v.deref();x!==void 0&&(x.isRenderTarget===!0?w(x):H(x))}g.clear(),f.clear()}function Q(v){let x=i.get(v);if(x.__webglInit===void 0)return;let U=v.source,et=d.get(U);if(et){let Z=et[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&z(v),Object.keys(et).length===0&&d.delete(U)}i.remove(v)}function z(v){let x=i.get(v);n.deleteTexture(x.__webglTexture);let U=v.source,et=d.get(U);delete et[x.__cacheKey],a.memory.textures--}function tt(v){let x=i.get(v);x.__depthDisposeCallback&&x.__depthDisposeCallback();let U=v.depthTexture;if(U&&U.renderTarget===v&&H(U),v.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let st=0;st<x.__webglFramebuffer[Z].length;st++)n.deleteFramebuffer(x.__webglFramebuffer[Z][st]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let et=v.textures;for(let Z=0,st=et.length;Z<st;Z++){let lt=i.get(et[Z]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),a.memory.textures--),i.remove(et[Z])}i.remove(v)}let V=0;function G(){V=0}function $(){return V}function ft(v){V=v}function _t(){let v=V;return v>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(v+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,v}function j(v){let x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.wrapR||0),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.mipmapsAutoUpdate),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.colorSpace),x.join()}function ut(v,x){let U=i.get(v);if(v.isVideoTexture&&Xt(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&U.__version!==v.version){let et=v.image;if(et===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(U,v,x);return}}else v.isExternalTexture&&(U.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function vt(v,x){let U=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){Ut(U,v,x);return}else v.isExternalTexture&&(U.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function Dt(v,x){let U=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){Ut(U,v,x);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function gt(v,x){let U=i.get(v);if(v.version>0&&U.__version!==v.version){ee(U,v,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}let ct={[jn]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[_r]:n.MIRRORED_REPEAT},Jt={[we]:n.NEAREST,[bc]:n.NEAREST_MIPMAP_NEAREST,[Fs]:n.NEAREST_MIPMAP_LINEAR,[Pe]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},at={[Lc]:n.NEVER,[il]:n.ALWAYS,[Dc]:n.LESS,[tl]:n.LEQUAL,[Pc]:n.EQUAL,[el]:n.GEQUAL,[_c]:n.GREATER,[Oc]:n.NOTEQUAL};function Et(v,x){if(x.type===ri&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Pe||x.magFilter===la||x.magFilter===Fs||x.magFilter===di||x.minFilter===Pe||x.minFilter===la||x.minFilter===Fs||x.minFilter===di)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,ct[x.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ct[x.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ct[x.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,Jt[x.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,Jt[x.minFilter]),x.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===we||x.minFilter!==Fs&&x.minFilter!==di||x.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(v,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function yt(v,x){let U=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",L),O(x));let et=x.source,Z=d.get(et);Z===void 0&&(Z={},d.set(et,Z));let st=j(x);if(st!==v.__cacheKey){Z[st]===void 0&&(Z[st]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[st].usedTimes++;let lt=Z[v.__cacheKey];lt!==void 0&&(Z[v.__cacheKey].usedTimes--,lt.usedTimes===0&&z(x)),v.__cacheKey=st,v.__webglTexture=Z[st].texture}return U}function pt(v,x,U){return Math.floor(Math.floor(v/U)/x)}function zt(v,x,U,et){let st=v.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,et,x.data);else{st.sort((N,K)=>N.start-K.start);let lt=0;for(let N=1;N<st.length;N++){let K=st[lt],q=st[N],ot=K.start+K.count,rt=pt(q.start,x.width,4),ht=pt(K.start,x.width,4);q.start<=ot+1&&rt===ht&&pt(q.start+q.count-1,x.width,4)===rt?K.count=Math.max(K.count,q.start+q.count-K.start):(++lt,st[lt]=q)}st.length=lt+1;let Y=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let N=0,K=st.length;N<K;N++){let q=st[N],ot=Math.floor(q.start/4),rt=Math.ceil(q.count/4),ht=ot%x.width,Nt=Math.floor(ot/x.width),Ht=rt,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Nt),e.texSubImage2D(n.TEXTURE_2D,0,ht,Nt,Ht,nt,U,et,x.data)}v.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function Ut(v,x,U){let et=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=n.TEXTURE_3D);let Z=yt(v,x),st=x.source;e.bindTexture(et,v.__webglTexture,n.TEXTURE0+U);let lt=i.get(st);if(st.version!==lt.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let nt=te.getPrimaries(te.workingColorSpace),wt=x.colorSpace===gi?null:te.getPrimaries(x.colorSpace),Vt=x.colorSpace===gi||nt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let J=T(x.image,!1,s.maxTextureSize);J=mt(x,J);let dt=r.convert(x.format,x.colorSpace),N=r.convert(x.type),K=E(x.internalFormat,dt,N,x.normalized,x.colorSpace,x.isVideoTexture);Et(et,x);let q,ot=x.mipmaps,rt=x.isVideoTexture!==!0,ht=lt.__version===void 0||Z===!0,Nt=st.dataReady,Ht=S(x,J);if(x.isDepthTexture)K=M(x.format===zi,x.type),ht&&(rt?e.texStorage2D(n.TEXTURE_2D,1,K,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,dt,N,null));else if(x.isDataTexture)if(ot.length>0){rt&&ht&&e.texStorage2D(n.TEXTURE_2D,Ht,K,ot[0].width,ot[0].height);for(let nt=0,wt=ot.length;nt<wt;nt++)q=ot[nt],rt?Nt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,N,q.data):e.texImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,dt,N,q.data);x.generateMipmaps=!1}else rt?(ht&&e.texStorage2D(n.TEXTURE_2D,Ht,K,J.width,J.height),Nt&&zt(x,J,dt,N)):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,dt,N,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){rt&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,K,ot[0].width,ot[0].height,J.depth);for(let nt=0,wt=ot.length;nt<wt;nt++)if(q=ot[nt],x.format!==mi)if(dt!==null)if(rt){if(Nt)if(x.layerUpdates.size>0){let Vt=ul(q.width,q.height,x.format,x.type);for(let At of x.layerUpdates){let re=q.data.subarray(At*Vt/q.data.BYTES_PER_ELEMENT,(At+1)*Vt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,At,q.width,q.height,1,dt,re)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,J.depth,dt,q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,K,q.width,q.height,J.depth,0,q.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Nt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,J.depth,dt,N,q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,K,q.width,q.height,J.depth,0,dt,N,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{rt&&ht&&e.texStorage2D(n.TEXTURE_2D,Ht,K,ot[0].width,ot[0].height);for(let nt=0,wt=ot.length;nt<wt;nt++)q=ot[nt],x.format!==mi?dt!==null?rt?Nt&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,q.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,q.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Nt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,N,q.data):e.texImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,dt,N,q.data)}else if(x.isDataArrayTexture)if(rt){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,K,J.width,J.height,J.depth),Nt)if(x.layerUpdates.size>0){let nt=ul(J.width,J.height,x.format,x.type);for(let wt of x.layerUpdates){let Vt=J.data.subarray(wt*nt/J.data.BYTES_PER_ELEMENT,(wt+1)*nt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,wt,J.width,J.height,1,dt,N,Vt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,N,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,dt,N,J.data);else if(x.isData3DTexture)rt?(ht&&e.texStorage3D(n.TEXTURE_3D,Ht,K,J.width,J.height,J.depth),Nt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,N,J.data)):e.texImage3D(n.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,dt,N,J.data);else if(x.isFramebufferTexture){if(ht)if(rt)e.texStorage2D(n.TEXTURE_2D,Ht,K,J.width,J.height);else{let nt=J.width,wt=J.height;for(let Vt=0;Vt<Ht;Vt++)e.texImage2D(n.TEXTURE_2D,Vt,K,nt,wt,0,dt,N,null),nt>>=1,wt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),J.parentNode!==nt){nt.appendChild(J),f.add(x),nt.onpaint=wt=>{let Vt=wt.changedElements;for(let At of f)Vt.includes(At.image)&&(At.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let Vt=n.RGBA,At=n.RGBA,re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Vt,At,re,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ot.length>0){if(rt&&ht){let nt=Rt(ot[0]);e.texStorage2D(n.TEXTURE_2D,Ht,K,nt.width,nt.height)}for(let nt=0,wt=ot.length;nt<wt;nt++)q=ot[nt],rt?Nt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,dt,N,q):e.texImage2D(n.TEXTURE_2D,nt,K,dt,N,q);x.generateMipmaps=!1}else if(rt){if(ht){let nt=Rt(J);e.texStorage2D(n.TEXTURE_2D,Ht,K,nt.width,nt.height)}Nt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,N,J)}else e.texImage2D(n.TEXTURE_2D,0,K,dt,N,J);R(x)&&x.mipmapsAutoUpdate===!0&&A(et),lt.__version=st.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function ee(v,x,U){if(x.image.length!==6)return;let et=yt(v,x),Z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+U);let st=i.get(Z);if(Z.version!==st.__version||et===!0){e.activeTexture(n.TEXTURE0+U);let lt=te.getPrimaries(te.workingColorSpace),Y=x.colorSpace===gi?null:te.getPrimaries(x.colorSpace),J=x.colorSpace===gi||lt===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let dt=x.isCompressedTexture||x.image[0].isCompressedTexture,N=x.image[0]&&x.image[0].isDataTexture,K=[];for(let At=0;At<6;At++)!dt&&!N?K[At]=T(x.image[At],!0,s.maxCubemapSize):K[At]=N?x.image[At].image:x.image[At],K[At]=mt(x,K[At]);let q=K[0],ot=r.convert(x.format,x.colorSpace),rt=r.convert(x.type),ht=E(x.internalFormat,ot,rt,x.normalized,x.colorSpace),Nt=x.isVideoTexture!==!0,Ht=st.__version===void 0||et===!0,nt=Z.dataReady,wt=S(x,q);Et(n.TEXTURE_CUBE_MAP,x);let Vt;if(x.isDepthTexture){if(ht=M(x.format===zi,x.type),Ht)if(Nt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ht,q.width,q.height);else for(let At=0;At<6;At++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,q.width,q.height,0,ot,rt,null)}else if(dt){Nt&&Ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,ht,q.width,q.height);for(let At=0;At<6;At++){Vt=K[At].mipmaps;for(let re=0;re<Vt.length;re++){let he=Vt[re];x.format!==mi?ot!==null?Nt?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,0,0,he.width,he.height,ot,he.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,ht,he.width,he.height,0,he.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,0,0,he.width,he.height,ot,rt,he.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,ht,he.width,he.height,0,ot,rt,he.data)}}}else{if(Vt=x.mipmaps,Nt&&Ht){Vt.length>0&&wt++;let At=Rt(K[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,ht,At.width,At.height)}for(let At=0;At<6;At++)if(N){Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,K[At].width,K[At].height,ot,rt,K[At].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,K[At].width,K[At].height,0,ot,rt,K[At].data);for(let re=0;re<Vt.length;re++){let Qe=Vt[re].image[At].image;Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,0,0,Qe.width,Qe.height,ot,rt,Qe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,ht,Qe.width,Qe.height,0,ot,rt,Qe.data)}}else{Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ot,rt,K[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,ot,rt,K[At]);for(let re=0;re<Vt.length;re++){let he=Vt[re];Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,0,0,ot,rt,he.image[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,ht,ot,rt,he.image[At])}}}R(x)&&x.mipmapsAutoUpdate===!0&&A(n.TEXTURE_CUBE_MAP),st.__version=Z.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function Gt(v,x,U,et,Z,st){let lt=r.convert(U.format,U.colorSpace),Y=r.convert(U.type),J=E(U.internalFormat,lt,Y,U.normalized,U.colorSpace),dt=i.get(x),N=i.get(U);if(N.__renderTarget=x,!dt.__hasExternalTextures){let K=Math.max(1,x.width>>st),q=Math.max(1,x.height>>st);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,st,J,K,q,x.depth,0,lt,Y,null):e.texImage2D(Z,st,J,K,q,0,lt,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,v),it(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Z,N.__webglTexture,0,Mt(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Z,N.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(v,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,v),x.depthBuffer){let et=x.depthTexture,Z=et&&et.isDepthTexture?et.type:null,st=M(x.stencilBuffer,Z),lt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;it(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(x),st,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(x),st,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,st,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,v)}else{let et=x.textures;for(let Z=0;Z<et.length;Z++){let st=et[Z],lt=r.convert(st.format,st.colorSpace),Y=r.convert(st.type),J=E(st.internalFormat,lt,Y,st.normalized,st.colorSpace);it(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(x),J,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(x),J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(v,x,U){let et=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(x.depthTexture);Z.__renderTarget=x;let st=et?x.depthTexture.image[0]:x.depthTexture.image;(!Z.__webglTexture||st.width!==x.width||st.height!==x.height)&&(st.width=x.width,st.height=x.height,x.depthTexture.needsUpdate=!0),et?gt(x.depthTexture,0):ut(x.depthTexture,0);let lt=Z.__webglTexture,Y=Mt(x),J=et?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,dt=x.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Di)it(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,J,lt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,dt,J,lt,0);else if(x.depthTexture.format===zi)it(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,J,lt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,dt,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(v){let x=i.get(v),U=v.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==v.depthTexture){let et=v.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",Z)};et.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=et}if(v.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let et=0;et<6;et++)jt(x.__webglFramebuffer[et],v,et);else v.texture.mipmaps.length>0?jt(x.__webglFramebuffer[0],v,0):jt(x.__webglFramebuffer,v,0);else if(U){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=n.createRenderbuffer(),ye(x.__webglDepthbuffer[et],v,!1);else{let Z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,st)}}else if(v.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ye(x.__webglDepthbuffer,v,!1);else{let Z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(v,x,U){let et=i.get(v);x!==void 0&&Gt(et.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Me(v)}function ae(v){let x=v.texture,U=i.get(v),et=i.get(x);v.addEventListener("dispose",B),O(v);let Z=v.textures,st=v.isWebGLCubeRenderTarget===!0,lt=Z.length>1;if(lt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=x.version,a.memory.textures++),st){U.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){U.__webglFramebuffer[Y]=[];for(let J=0;J<x.mipmaps.length;J++)U.__webglFramebuffer[Y][J]=n.createFramebuffer()}else U.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(x.mipmaps.length>0){U.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)U.__webglFramebuffer[Y]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(lt)for(let Y=0,J=Z.length;Y<J;Y++){let dt=i.get(Z[Y]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(v.samples>0&&it(v)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<Z.length;Y++){let J=Z[Y];U.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);let dt=r.convert(J.format,J.colorSpace),N=r.convert(J.type),K=E(J.internalFormat,dt,N,J.normalized,J.colorSpace,v.isXRRenderTarget===!0),q=Mt(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(U.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),Et(n.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Gt(U.__webglFramebuffer[Y][J],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Gt(U.__webglFramebuffer[Y],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);R(x)?A(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(lt){for(let Y=0,J=Z.length;Y<J;Y++){let dt=Z[Y],N=i.get(dt),K=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(K=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,N.__webglTexture),Et(K,dt),Gt(U.__webglFramebuffer,v,dt,n.COLOR_ATTACHMENT0+Y,K,0),R(dt)&&A(K)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(Y=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,et.__webglTexture),Et(Y,x),x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Gt(U.__webglFramebuffer[J],v,x,n.COLOR_ATTACHMENT0,Y,J);else Gt(U.__webglFramebuffer,v,x,n.COLOR_ATTACHMENT0,Y,0);R(x)?A(Y):x.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}v.depthBuffer&&Me(v)}function P(v){let x=v.textures;for(let U=0,et=x.length;U<et;U++){let Z=x[U];if(R(Z)&&Z.mipmapsAutoUpdate===!0){let st=b(v),lt=i.get(Z).__webglTexture;e.bindTexture(st,lt),A(st),e.unbindTexture()}}}let ce=[];function ie(v){if(v.samples>0){if(it(v)===!1){let x=v.textures,U=v.width,et=v.height,Z=n.COLOR_BUFFER_BIT,st=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(v),Y=x.length>1;if(Y)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),v.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);let N=i.get(x[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,U,et,0,0,U,et,Z,n.NEAREST),c===!0&&(ce.length=0,ce.push(n.COLOR_ATTACHMENT0+dt),v.depthBuffer&&v.storeMultisampledDepthBuffer===!1&&ce.push(st),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);let N=i.get(x[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.storeMultisampledDepthBuffer===!1&&c){let x=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Mt(v){return Math.min(s.maxSamples,v.samples)}function it(v){let x=i.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xt(v){let x=a.render.frame;h.get(v)!==x&&(h.set(v,x),v.update())}function mt(v,x){let U=v.colorSpace,et=v.format,Z=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||U!==ms&&U!==gi&&(te.getTransfer(U)===le?(et!==mi||Z!==qe)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",U)),x}function Rt(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=_t,this.resetTextureUnits=G,this.getTextureUnits=$,this.setTextureUnits=ft,this.setTexture2D=ut,this.setTexture2DArray=vt,this.setTexture3D=Dt,this.setTextureCube=gt,this.rebindTextures=ne,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=it,this.dispose=k}function Jm(n,t){function e(i,s=gi){let r,a=te.getTransfer(s);if(i===qe)return n.UNSIGNED_BYTE;if(i===ua)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jo)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qo)return n.BYTE;if(i===Yo)return n.SHORT;if(i===$n)return n.UNSIGNED_SHORT;if(i===ca)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Ko)return n.ALPHA;if(i===$o)return n.RGB;if(i===mi)return n.RGBA;if(i===Di)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===da)return n.RED;if(i===fa)return n.RED_INTEGER;if(i===tn)return n.RG;if(i===pa)return n.RG_INTEGER;if(i===ma)return n.RGBA_INTEGER;if(i===Hs||i===ks||i===Vs||i===Ws)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===Ma||i===xa||i===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===Aa||i===Ea||i===va||i===Ta||i===Gs||i===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===Aa)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ea)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===va)return r.COMPRESSED_R11_EAC;if(i===Ta)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gs)return r.COMPRESSED_RG11_EAC;if(i===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ra||i===ba||i===Na||i===wa||i===Ca||i===La||i===Da||i===Pa||i===_a||i===Oa||i===za||i===Ua||i===Ba||i===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ra)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ca)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===La)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ua)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===Ha||i===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Fa)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Va||i===Wa||i===Xs||i===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===In?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Km=`
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

}`,Il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ns(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ve({vertexShader:Km,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends xi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new Il,m={},T=e.getContextAttributes(),R=null,A=null,b=[],E=[],M=new qt,S=null,O=null,C=new We;C.viewport=new xe;let L=new We;L.viewport=new xe;let B=[C,L],H=new na,w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ut=b[j];return ut===void 0&&(ut=new Wn,b[j]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(j){let ut=b[j];return ut===void 0&&(ut=new Wn,b[j]=ut),ut.getGripSpace()},this.getHand=function(j){let ut=b[j];return ut===void 0&&(ut=new Wn,b[j]=ut),ut.getHandSpace()};function Q(j){let ut=E.indexOf(j.inputSource);if(ut===-1)return;let vt=b[ut];vt!==void 0&&(vt.update(j.inputSource,j.frame,l||a),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",tt);for(let j=0;j<b.length;j++){let ut=E[j];ut!==null&&(E[j]=null,b[j].disconnect(ut))}w=null,k=null,p.reset();for(let j in m)delete m[j];if(t.setRenderTarget(R),d=null,u=null,f=null,s=null,A=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(M.width,M.height,!1),O!==null){let j=O.camera;j.fov=O.fov,j.zoom=O.zoom,j.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",tt),T.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(M),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Dt=null,gt=null;T.depth&&(gt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=T.stencil?zi:Di,Dt=T.stencil?In:fi);let ct={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new Ce(u.textureWidth,u.textureHeight,{format:mi,type:qe,depthTexture:new Oi(u.textureWidth,u.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Ce(d.framebufferWidth,d.framebufferHeight,{format:mi,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(j){for(let ut=0;ut<j.removed.length;ut++){let vt=j.removed[ut],Dt=E.indexOf(vt);Dt>=0&&(E[Dt]=null,b[Dt].disconnect(vt))}for(let ut=0;ut<j.added.length;ut++){let vt=j.added[ut],Dt=E.indexOf(vt);if(Dt===-1){for(let ct=0;ct<b.length;ct++)if(ct>=E.length){E.push(vt),Dt=ct;break}else if(E[ct]===null){E[ct]=vt,Dt=ct;break}if(Dt===-1)break}let gt=b[Dt];gt&&gt.connect(vt)}}function V(j,ut){ut===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ut.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ut=j.near,vt=j.far;p.texture!==null&&(p.depthNear>0&&(ut=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),H.near=L.near=C.near=ut,H.far=L.far=C.far=vt,(w!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),w=H.near,k=H.far),H.layers.mask=j.layers.mask|6,C.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let Dt=j.parent,gt=H.cameras;V(H,Dt);for(let ct=0;ct<gt.length;ct++)V(gt[ct],Dt);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),O===null&&j.isPerspectiveCamera&&(O={camera:j,fov:j.fov,zoom:j.zoom}),G(j,H,Dt)};function G(j,ut,vt){vt===null?j.matrix.copy(ut.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ut.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(j){return m[j]};let $=null;function ft(j,ut){if(h=ut.getViewerPose(l||a),g=ut,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(A,d.framebuffer),t.setRenderTarget(A));let Dt=!1;vt.length!==H.cameras.length&&(H.cameras.length=0,Dt=!0);for(let at=0;at<vt.length;at++){let Et=vt[at],yt=null;if(d!==null)yt=d.getViewport(Et);else{let zt=f.getViewSubImage(u,Et);yt=zt.viewport,at===0&&(t.setRenderTargetTextures(A,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(A))}let pt=B[at];pt===void 0&&(pt=new We,pt.layers.enable(at),pt.viewport=new xe,B[at]=pt),pt.matrix.fromArray(Et.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Et.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(yt.x,yt.y,yt.width,yt.height),at===0&&(H.matrix.copy(pt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Dt===!0&&H.cameras.push(pt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let at=f.getDepthInformation(vt[0]);at&&at.isValid&&at.texture&&p.init(at,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let at=0;at<vt.length;at++){let Et=vt[at].camera;if(Et){let yt=m[Et];yt||(yt=new Ns,m[Et]=yt);let pt=f.getCameraImage(Et);yt.sourceTexture=pt}}}}for(let vt=0;vt<b.length;vt++){let Dt=E[vt],gt=b[vt];Dt!==null&&gt!==void 0&&gt.update(Dt,ut,l||a)}$&&$(j,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}let _t=new fu;_t.setAnimationLoop(ft),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}},tg=new ue,vu=new Ft;vu.set(-1,0,0,0,1,0,0,0,1);function eg(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ol(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,R,A){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,A)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,T,R):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=t.get(m),R=T.envMap,A=T.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(A)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(vu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,T,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=R*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_e&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ig(n,t,e,i){let s={},r={};function a(T,R){let A=R.program;i.uniformBlockBinding(T,A,s[T.id])}function o(T,R){let A=s[T.id];A===void 0&&(g(T),A=c(T),s[T.id]=A,T.addEventListener("dispose",p));let b=R.program;i.updateUBOMapping(T,b);let E=t.render.frame;r[T.id]!==E&&(l(T),r[T.id]=E)}function c(T){let R=n.createBuffer(),A=T.__size,b=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,A,b),n.bindBuffer(n.UNIFORM_BUFFER,null),R}function l(T){let R=s[T.id],A=T.uniforms,b=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let E=0,M=A.length;E<M;E++){let S=A[E];if(Array.isArray(S))for(let O=0,C=S.length;O<C;O++)h(S[O],E,O,b);else h(S,E,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,R,A,b){if(u(T,R,A,b)===!0){let E=T.__offset,M=T.value;if(Array.isArray(M)){let S=0;for(let O=0;O<M.length;O++){let C=M[O],L=y(C,!0);f(C,T.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(M,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,T.__data)}}function f(T,R,A){typeof T=="number"||typeof T=="boolean"?R[A]=T:T.isMatrix3?(R[A]=T.elements[0],R[A+1]=T.elements[1],R[A+2]=T.elements[2],R[A+3]=0,R[A+4]=T.elements[3],R[A+5]=T.elements[4],R[A+6]=T.elements[5],R[A+7]=0,R[A+8]=T.elements[6],R[A+9]=T.elements[7],R[A+10]=T.elements[8],R[A+11]=0):ArrayBuffer.isView(T)?R.set(T.subarray(0,R.length-A),A):T.toArray(R,A)}function u(T,R,A,b){let E=T.value,M=R+"_"+A;if(Array.isArray(E)){b[M]===void 0&&(b[M]=[]);let S=b[M],O=!1;for(let C=0;C<E.length;C++)d(E[C],S,C)===!0&&(O=!0);return O}return d(E,b,M)}function d(T,R,A){if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:ArrayBuffer.isView(T)?R[A]=T.slice():R[A]=T.clone(),!0;{let b=R[A];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return R[A]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(b.equals(T)===!1)return b.copy(T),!0}}return!1}function g(T){let R=T.uniforms,A=0,b=16;for(let M=0,S=R.length;M<S;M++){let O=Array.isArray(R[M])?R[M]:[R[M]];for(let C=0,L=O.length;C<L;C++){let B=O[C],H=Array.isArray(B.value)?B.value:[B.value],w=Array.isArray(R[M])||Array.isArray(B.value),k=A;for(let z=0,tt=H.length;z<tt;z++){let V=H[z],G=y(V,w),$=A%b,ft=$%G.boundary,_t=$+ft;A+=ft,_t!==0&&b-_t<G.storage&&(A+=b-_t),z===0&&(k=A),A+=G.storage}let Q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Q((A-k)/Float32Array.BYTES_PER_ELEMENT),B.__offset=k}}let E=A%b;return E>0&&(A+=b-E),T.__size=A,T.__cache={},this}function y(T,R){let A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=16,A.storage=48):T.isMatrix4?(A.boundary=16,A.storage=64):T.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(A.boundary=16,A.storage=T.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",T),R===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function p(T){let R=T.target;R.removeEventListener("dispose",p),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function m(){for(let T in s)n.deleteBuffer(s[T]);s={},r={}}return{bind:a,update:o,dispose:m}}var ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function sg(){return vi===null&&(vi=new Es(ng,16,16,tn,pi),vi.name="DFG_LUT",vi.minFilter=Pe,vi.magFilter=Pe,vi.wrapS=ei,vi.wrapT=ei,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Ks=class{constructor(t={}){let{canvas:e=Uc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=qe}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=d,p=new Set([ma,pa,fa]),m=new Set([qe,fi,$n,In,ua,ha]),T=new Uint32Array(4),R=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},b=null,E=null,M=[],S=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,B=null,H=null,w=null,k=null;this._outputColorSpace=Te;let Q=0,z=0,tt=null,V=-1,G=null,$=new xe,ft=new xe,_t=null,j=new kt(0),ut=0,vt=e.width,Dt=e.height,gt=1,ct=null,Jt=null,at=new xe(0,0,vt,Dt),Et=new xe(0,0,vt,Dt),yt=!1,pt=new qi,zt=new Fr,Ut=!1,ee=!1,Gt=new ue,ye=new _,jt=new xe,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function ae(){return tt===null?gt:1}let P=i;function ce(I,D){return e.getContext(I,D)}let ie,Mt,it,Xt,mt,Rt,v,x,U,et,Z,st,lt,Y,J,dt,N,K,q,ot,rt,ht,Nt;try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",At,!1),P===null){let D="webgl2";if(P=ce(D,I),P===null)throw ce(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(I){throw e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Bt("WebGLRenderer: "+I.message),I}function Ht(){ie=new mp(P),ie.init(),rt=new Jm(P,ie),Mt=new sp(P,ie,t,rt),it=new Ym(P,ie),Mt.reversedDepthBuffer&&u&&it.buffers.depth.setReversed(!0),H=P.createFramebuffer(),w=P.createFramebuffer(),k=P.createFramebuffer(),Xt=new xp(P),mt=new Om,Rt=new Zm(P,ie,it,mt,Mt,rt,Xt),v=new pp(C),x=new Ih(P),ht=new ip(P,x),U=new gp(P,x,Xt,ht),et=new yp(P,U,x,ht,Xt),K=new Ip(P,Mt,Rt),J=new rp(mt),Z=new _m(C,v,ie,Mt,ht,J),st=new eg(C,mt),lt=new Um,Y=new Vm(ie),N=new ep(C,v,it,et,g,c),dt=new Qm(C,et,Mt),Nt=new ig(P,Xt,Mt,it),q=new np(P,ie,Xt),ot=new Mp(P,ie,Xt),Xt.programs=Z.programs,C.capabilities=Mt,C.extensions=ie,C.properties=mt,C.renderLists=lt,C.shadowMap=dt,C.state=it,C.info=Xt}y!==qe&&(O=new Ep(y,e.width,e.height,o,s,r));let nt=new yl(C,P);this.xr=nt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let I=ie.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ie.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(I){I!==void 0&&(gt=I,this.setSize(vt,Dt,!1))},this.getSize=function(I){return I.set(vt,Dt)},this.setSize=function(I,D,X=!0){if(nt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=I,Dt=D,e.width=Math.floor(I*gt),e.height=Math.floor(D*gt),X===!0&&(e.style.width=I+"px",e.style.height=D+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,I,D)},this.getDrawingBufferSize=function(I){return I.set(vt*gt,Dt*gt).floor()},this.setDrawingBufferSize=function(I,D,X){vt=I,Dt=D,gt=X,e.width=Math.floor(I*X),e.height=Math.floor(D*X),this.setViewport(0,0,I,D)},this.setEffects=function(I){if(y===qe){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let D=0;D<I.length;D++)if(I[D].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy($)},this.getViewport=function(I){return I.copy(at)},this.setViewport=function(I,D,X,F){I.isVector4?at.set(I.x,I.y,I.z,I.w):at.set(I,D,X,F),it.viewport($.copy(at).multiplyScalar(ae()).round())},this.getScissor=function(I){return I.copy(Et)},this.setScissor=function(I,D,X,F){I.isVector4?Et.set(I.x,I.y,I.z,I.w):Et.set(I,D,X,F),it.scissor(ft.copy(Et).multiplyScalar(ae()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(I){it.setScissorTest(yt=I)},this.setOpaqueSort=function(I){ct=I},this.setTransparentSort=function(I){Jt=I},this.getClearColor=function(I){return I.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(I=!0,D=!0,X=!0){let F=0;if(I){let W=!1;if(tt!==null){let It=tt.texture.format;W=p.has(It)}if(W){let It=tt.texture.type,bt=m.has(It),xt=N.getClearColor(),St=N.getClearAlpha(),Pt=xt.r,Wt=xt.g,Kt=xt.b;bt?(T[0]=Pt,T[1]=Wt,T[2]=Kt,T[3]=St,P.clearBufferuiv(P.COLOR,0,T)):(R[0]=Pt,R[1]=Wt,R[2]=Kt,R[3]=St,P.clearBufferiv(P.COLOR,0,R))}else F|=P.COLOR_BUFFER_BIT}D&&(F|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),B=I},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),N.dispose(),lt.dispose(),Y.dispose(),Rt.dispose(),mt.dispose(),v.dispose(),et.dispose(),U.dispose(),ht.dispose(),Nt.dispose(),Z.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",nn),nt.removeEventListener("sessionend",Yt),de.stop()};function wt(I){I.preventDefault(),sl("WebGLRenderer: Context Lost."),L=!0}function Vt(){sl("WebGLRenderer: Context Restored."),L=!1;let I=Xt.autoReset,D=dt.enabled,X=dt.autoUpdate,F=dt.needsUpdate,W=dt.type;Ht(),Xt.autoReset=I,dt.enabled=D,dt.autoUpdate=X,dt.needsUpdate=F,dt.type=W}function At(I){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function re(I){let D=I.target;D.removeEventListener("dispose",re),he(D)}function he(I){Qe(I),mt.remove(I)}function Qe(I){let D=mt.get(I).programs;D!==void 0&&(D.forEach(function(X){Z.releaseProgram(X)}),I.isShaderMaterial&&Z.releaseShaderCache(I))}this.renderBufferDirect=function(I,D,X,F,W,It){D===null&&(D=Me);let bt=W.isMesh&&W.matrixWorld.determinantAffine()<0,xt=Ru(I,D,X,F,W);it.setMaterial(F,bt);let St=X.index,Pt=1;if(F.wireframe===!0){if(St=U.getWireframeAttribute(X),St===void 0)return;Pt=2}let Wt=X.drawRange,Kt=X.attributes.position,Ct=Wt.start*Pt,$t=(Wt.start+Wt.count)*Pt;It!==null&&(Ct=Math.max(Ct,It.start*Pt),$t=Math.min($t,(It.start+It.count)*Pt)),St!==null?(Ct=Math.max(Ct,0),$t=Math.min($t,St.count)):Kt!=null&&(Ct=Math.max(Ct,0),$t=Math.min($t,Kt.count));let Ee=$t-Ct;if(Ee<0||Ee===1/0)return;ht.setup(W,F,xt,X,St);let me,pe=q;if(St!==null&&(me=x.get(St),pe=ot,pe.setIndex(me)),W.isMesh)F.wireframe===!0?(it.setLineWidth(F.wireframeLinewidth*ae()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(W.isLine){let Oe=F.linewidth;Oe===void 0&&(Oe=1),it.setLineWidth(Oe*ae()),W.isLineSegments?pe.setMode(P.LINES):W.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else W.isPoints?pe.setMode(P.POINTS):W.isSprite&&pe.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))pe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Oe=W._multiDrawStarts,Lt=W._multiDrawCounts,He=W._multiDrawCount,oe=St?x.get(St).bytesPerElement:1,rn=mt.get(F).currentProgram.getUniforms();for(let ze=0;ze<He;ze++)rn.setValue(P,"_gl_DrawID",ze),pe.render(Oe[ze]/oe,Lt[ze])}else if(W.isInstancedMesh)pe.renderInstances(Ct,Ee,W.count);else if(X.isInstancedBufferGeometry){let Oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Lt=Math.min(X.instanceCount,Oe);pe.renderInstances(Ct,Ee,Lt)}else pe.render(Ct,Ee)};function Ui(I,D,X,F){B!==null&&I.isNodeMaterial&&B.setObject(F,I),Ut===!0&&J.setState(I,X,!1),I.transparent===!0&&I.side===Xe&&I.forceSinglePass===!1?(I.side=_e,I.needsUpdate=!0,as(I,D,F),I.side=$i,I.needsUpdate=!0,as(I,D,F),I.side=Xe):as(I,D,F)}this.compile=function(I,D,X=null){X===null&&(X=I),B!==null&&B.renderStart(I,D,X),E=Y.get(X),E.init(D),S.push(E),X.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),I!==X&&I.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),ee=this.localClippingEnabled,Ut=J.init(this.clippingPlanes,ee),Ut===!0&&J.setGlobalState(this.clippingPlanes,D),B!==null&&dt.render(E.state.shadowsArray,X,D);let F=new Set;return I.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let It=W.material;if(It)if(Array.isArray(It))for(let bt=0;bt<It.length;bt++){let xt=It[bt];Ui(xt,X,D,W),F.add(xt)}else Ui(It,X,D,W),F.add(It)}),E=S.pop(),B!==null&&B.renderEnd(),F},this.compileAsync=function(I,D,X=null){let F=this.compile(I,D,X);return new Promise(W=>{function It(){if(F.forEach(function(bt){let St=mt.get(bt).currentProgram;(St===void 0||St.isReady())&&F.delete(bt)}),F.size===0){W(I);return}setTimeout(It,10)}ie.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let rs=null;function en(I){rs&&rs(I)}function nn(){de.stop()}function Yt(){de.start()}let de=new fu;de.setAnimationLoop(en),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(I){rs=I,nt.setAnimationLoop(I),I===null?de.stop():de.start()},nt.addEventListener("sessionstart",nn),nt.addEventListener("sessionend",Yt),this.render=function(I,D){if(D!==void 0&&D.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(I,D);let X=nt.enabled===!0&&nt.isPresenting===!0,F=O!==null&&(tt===null||X)&&O.begin(C,tt);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(D),D=nt.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,D,tt),E=Y.get(I,S.length),E.init(D),E.state.textureUnits=Rt.getTextureUnits(),S.push(E),Gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?zt.setFromArrayCamera(D):pt.setFromProjectionMatrix(Gt,ii,D.reversedDepth),ee=this.localClippingEnabled,Ut=J.init(this.clippingPlanes,ee),b=lt.get(I,M.length),b.init(),M.push(b),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let bt=C.xr.getDepthSensingMesh();bt!==null&&Ae(bt,D,-1/0,C.sortObjects)}Ae(I,D,0,C.sortObjects),b.finish(),B!==null&&B.updateLights(E.state.lightsArray),C.sortObjects===!0&&b.sort(ct,Jt),ne=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ne&&N.addToRenderList(b,I),this.info.autoReset===!0&&this.info.reset(),Ut===!0&&J.beginShadows();let W=E.state.shadowsArray;if(dt.render(W,I,D),Ut===!0&&J.endShadows(),(F&&O.hasRenderPass())===!1){let bt=b.opaque,xt=b.transmissive;if(E.setupLights(),D.isArrayCamera){let St=D.cameras;if(xt.length>0)for(let Pt=0,Wt=St.length;Pt<Wt;Pt++){let Kt=St[Pt];sn(bt,xt,I,Kt)}ne&&N.render(I);for(let Pt=0,Wt=St.length;Pt<Wt;Pt++){let Kt=St[Pt];Ye(b,I,Kt,Kt.viewport)}}else xt.length>0&&sn(bt,xt,I,D),ne&&N.render(I),Ye(b,I,D)}tt!==null&&z===0&&(Rt.updateMultisampleRenderTarget(tt),Rt.updateRenderTargetMipmap(tt)),F&&O.end(C),I.isScene===!0&&I.onAfterRender(C,I,D),ht.resetDefaultState(),V=-1,G=null,S.pop(),S.length>0?(E=S[S.length-1],Rt.setTextureUnits(E.state.textureUnits),Ut===!0&&J.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,M.pop(),M.length>0?b=M[M.length-1]:b=null,B!==null&&B.renderEnd()};function Ae(I,D,X,F){if(I.visible===!1)return;if(I.layers.test(D.layers)){if(I.isGroup)X=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(D);else if(I.isLight)E.pushLight(I),I.castShadow&&E.pushShadow(I);else if(I.isSprite){let bt=D.isArrayCamera?zt:pt;if(!I.frustumCulled||I.intersectsFrustum(bt)){F&&jt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Gt);let xt=et.update(I),St=I.material;St.visible&&b.push(I,xt,St,X,jt.z,null,D)}}else if(I.isMesh||I.isLine||I.isPoints){let bt=D.isArrayCamera?zt:pt;if(!I.frustumCulled||I.intersectsFrustum(bt)){let xt=et.update(I),St=I.material;if(F&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),jt.copy(I.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),jt.copy(xt.boundingSphere.center)),jt.applyMatrix4(I.matrixWorld).applyMatrix4(Gt)),Array.isArray(St)){let Pt=xt.groups;for(let Wt=0,Kt=Pt.length;Wt<Kt;Wt++){let Ct=Pt[Wt],$t=St[Ct.materialIndex];$t&&$t.visible&&b.push(I,xt,$t,X,jt.z,Ct,D)}}else St.visible&&b.push(I,xt,St,X,jt.z,null,D)}}}let It=I.children;for(let bt=0,xt=It.length;bt<xt;bt++)Ae(It[bt],D,X,F)}function Ye(I,D,X,F){let{opaque:W,transmissive:It,transparent:bt}=I;E.setupLightsView(X),Ut===!0&&J.setGlobalState(C.clippingPlanes,X),F&&it.viewport($.copy(F)),W.length>0&&Bi(W,D,X),It.length>0&&Bi(It,D,X),bt.length>0&&Bi(bt,D,X),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function sn(I,D,X,F){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){let Ct=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new Ce(1,1,{generateMipmaps:!0,type:Ct?pi:qe,minFilter:di,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let It=E.state.transmissionRenderTarget[F.id],bt=F.viewport||$;It.setSize(bt.z*C.transmissionResolutionScale,bt.w*C.transmissionResolutionScale);let xt=C.getRenderTarget(),St=C.getActiveCubeFace(),Pt=C.getActiveMipmapLevel();C.setRenderTarget(It),C.getClearColor(j),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear(),ne&&N.render(X);let Wt=C.toneMapping;C.toneMapping=Ei;let Kt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),Ut===!0&&J.setGlobalState(C.clippingPlanes,F),Bi(I,X,F),Rt.updateMultisampleRenderTarget(It),Rt.updateRenderTargetMipmap(It),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let $t=0,Ee=D.length;$t<Ee;$t++){let me=D[$t],{object:pe,geometry:Oe,material:Lt,group:He}=me;if(Lt.side===Xe&&pe.layers.test(F.layers)){let oe=Lt.side;Lt.side=_e,Lt.needsUpdate=!0,An(pe,X,F,Oe,Lt,He),Lt.side=oe,Lt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Rt.updateMultisampleRenderTarget(It),Rt.updateRenderTargetMipmap(It))}C.setRenderTarget(xt,St,Pt),C.setClearColor(j,ut),Kt!==void 0&&(F.viewport=Kt),C.toneMapping=Wt}function Bi(I,D,X){let F=D.isScene===!0?D.overrideMaterial:null;for(let W=0,It=I.length;W<It;W++){let bt=I[W],{object:xt,geometry:St,group:Pt}=bt,Wt=bt.material;Wt.allowOverride===!0&&F!==null&&(Wt=F),xt.layers.test(X.layers)&&An(xt,D,X,St,Wt,Pt)}}function An(I,D,X,F,W,It){B!==null&&W.isNodeMaterial&&B.setObject(I,W),I.onBeforeRender(C,D,X,F,W,It),I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),W.onBeforeRender(C,D,X,F,I,It),W.transparent===!0&&W.side===Xe&&W.forceSinglePass===!1?(W.side=_e,W.needsUpdate=!0,C.renderBufferDirect(X,D,F,W,I,It),W.side=$i,W.needsUpdate=!0,C.renderBufferDirect(X,D,F,W,I,It),W.side=Xe):C.renderBufferDirect(X,D,F,W,I,It),I.onAfterRender(C,D,X,F,W,It)}function El(I){let D=0;for(let X of I)X.texture!==null&&D++;return D}function as(I,D,X){D.isScene!==!0&&(D=Me);let F=mt.get(I),W=E.state.lights,It=E.state.shadowsArray,bt=W.state.version,xt=Z.getParameters(I,W.state,It,D,X,E.state.lightProbeGridArray),St=Z.getProgramCacheKey(xt),Pt=F.programs;F.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?D.environment:null,F.fog=D.fog;let Wt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;F.envMap=v.get(I.envMap||F.environment,Wt),F.envMapRotation=F.environment!==null&&I.envMap===null?D.environmentRotation:I.envMapRotation,Pt===void 0&&(I.addEventListener("dispose",re),Pt=new Map,F.programs=Pt,F.programVariants=new Map);let Kt=Pt.get(St);if(Kt!==void 0){if(F.currentProgram===Kt&&F.lightsStateVersion===bt)return Tl(I,xt),Kt}else xt.uniforms=Z.getUniforms(I),B!==null&&I.isNodeMaterial&&B.build(I,X,xt),I.onBeforeCompile(xt,C),Kt=Z.acquireProgram(xt,St),Pt.set(St,Kt),F.uniforms=xt.uniforms;let Ct=F.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ct.clippingPlanes=J.uniform),Tl(I,xt),F.needsLights=Nu(I),F.lightsStateVersion=bt,F.needsLights&&(Ct.ambientLightColor.value=W.state.ambient,Ct.lightProbe.value=W.state.probe,Ct.sunLights.value=W.state.sun,Ct.sunLightShadows.value=W.state.sunShadow,Ct.directionalLights.value=W.state.directional,Ct.directionalLightShadows.value=W.state.directionalShadow,Ct.spotLights.value=W.state.spot,Ct.spotLightShadows.value=W.state.spotShadow,Ct.rectAreaLights.value=W.state.rectArea,Ct.ltc_1.value=W.state.rectAreaLTC1,Ct.ltc_2.value=W.state.rectAreaLTC2,Ct.pointLights.value=W.state.point,Ct.pointLightShadows.value=W.state.pointShadow,Ct.hemisphereLights.value=W.state.hemi,Ct.sunShadowMatrix.value=W.state.sunShadowMatrix,Ct.sunShadowCascade.value=W.state.sunShadowCascade,Ct.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ct.spotLightMatrix.value=W.state.spotLightMatrix,Ct.spotLightMap.value=W.state.spotLightMap,Ct.pointShadowMatrix.value=W.state.pointShadowMatrix),F.numLightProbeGrids=El(E.state.lightProbeGridArray),F.currentProgram=Kt,F.uniformsList=null,Kt}function Su(I,D,X,F,W){let It=mt.get(I),bt=It.currentProgram.id+","+F+","+W,xt=It.programVariants.get(bt);return xt===void 0?(xt=as(I,D,X),It.programVariants.set(bt,xt)):(It.currentProgram=xt,It.uniformsList=null,It.outputColorSpace=F,It.toneMapping=W),xt}function vl(I){if(I.uniformsList===null){let D=I.currentProgram.getUniforms();I.uniformsList=ts.seqWithValue(D.seq,I.uniforms)}return I.uniformsList}function Tl(I,D){let X=mt.get(I);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function Ru(I,D,X,F,W){D.isScene!==!0&&(D=Me),Rt.resetTextureUnits();let It=D.fog,bt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?D.environment:null,xt=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:te.workingColorSpace,St=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Pt=v.get(F.envMap||bt,St),Wt=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ct=!!X.morphAttributes.position,$t=!!X.morphAttributes.normal,Ee=!!X.morphAttributes.color,me=Ei;F.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(me=C.toneMapping);let pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Oe=pe!==void 0?pe.length:0,Lt=mt.get(F),He=E.state.lights;if(Ut===!0&&(ee===!0||I!==G)){let Ie=I===G&&F.id===V;J.setState(F,I,Ie)}let oe=!1,rn=!1;F.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==He.state.version||W.isBatchedMesh&&Lt.batching===!1||!W.isBatchedMesh&&Lt.batching===!0||W.isBatchedMesh&&Lt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Lt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Lt.instancing===!1||!W.isInstancedMesh&&Lt.instancing===!0||W.isSkinnedMesh&&Lt.skinning===!1||!W.isSkinnedMesh&&Lt.skinning===!0||W.isInstancedMesh&&Lt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Lt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Lt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Lt.instancingMorph===!1&&W.morphTexture!==null||Lt.envMap!==Pt||F.fog===!0&&Lt.fog!==It||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==J.numPlanes||Lt.numIntersection!==J.numIntersection)||Lt.vertexAlphas!==Wt||Lt.vertexTangents!==Kt||Lt.morphTargets!==Ct||Lt.morphNormals!==$t||Lt.morphColors!==Ee||Lt.morphTargetsCount!==Oe||Lt.numLightProbeGrids!==El(E.state.lightProbeGridArray)?oe=!0:(Lt.outputColorSpace!==xt||Lt.toneMapping!==me)&&(rn=!0):(oe=!0,Lt.__version=F.version);let ze=Lt.currentProgram;(oe===!0||rn===!0)&&(ze=rn===!0?Su(F,D,W,xt,me):as(F,D,W),B&&F.isNodeMaterial&&B.onUpdateProgram(F,ze,Lt));let tr=!1,ji=!1,an=!1,se=ze.getUniforms(),De=Lt.uniforms;if(it.useProgram(ze.program)&&(tr=!0,ji=!0,an=!0),F.id!==V&&(V=F.id,ji=!0),tr||G!==I){it.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),se.setValue(P,"projectionMatrix",I.projectionMatrix),se.setValue(P,"viewMatrix",I.matrixWorldInverse);let be=se.map.cameraPosition;be!==void 0&&be.setValue(P,ye.setFromMatrixPosition(I.matrixWorld)),Mt.logarithmicDepthBuffer&&se.setValue(P,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&se.setValue(P,"isOrthographic",I.isOrthographicCamera===!0),G!==I&&(G=I,ji=!0,an=!0)}if(Lt.needsLights&&(He.state.sunShadowMap.length>0&&se.setValue(P,"sunShadowMap",He.state.sunShadowMap,Rt),He.state.directionalShadowMap.length>0&&se.setValue(P,"directionalShadowMap",He.state.directionalShadowMap,Rt),He.state.spotShadowMap.length>0&&se.setValue(P,"spotShadowMap",He.state.spotShadowMap,Rt),He.state.pointShadowMap.length>0&&se.setValue(P,"pointShadowMap",He.state.pointShadowMap,Rt)),W.isSkinnedMesh){se.setOptional(P,W,"bindMatrix"),se.setOptional(P,W,"bindMatrixInverse");let Ie=W.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),se.setValue(P,"boneTexture",Ie.boneTexture,Rt))}W.isBatchedMesh&&(se.setOptional(P,W,"batchingTexture"),se.setValue(P,"batchingTexture",W._matricesTexture,Rt),se.setOptional(P,W,"batchingIdTexture"),se.setValue(P,"batchingIdTexture",W._indirectTexture,Rt),se.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&se.setValue(P,"batchingColorTexture",W._colorsTexture,Rt));let ai=X.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&K.update(W,X,ze),(ji||Lt.receiveShadow!==W.receiveShadow)&&(Lt.receiveShadow=W.receiveShadow,se.setValue(P,"receiveShadow",W.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&D.environment!==null&&(De.envMapIntensity.value=D.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=sg()),ji){if(se.setValue(P,"toneMappingExposure",C.toneMappingExposure),Lt.needsLights&&bu(De,an),It&&F.fog===!0&&st.refreshFogUniforms(De,It),st.refreshMaterialUniforms(De,F,gt,Dt,E.state.transmissionRenderTarget[I.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let Ie=A,be=0;for(let Si of E.state.lightProbeGridArray)Si.texture!==null&&(Ie.textures[be]=Si.texture,Ie.min[be]=Si.boundingBox.min,Ie.max[be]=Si.boundingBox.max,Ie.resolution[be]=Si.resolution,be++);for(let Si in Ie)Ie[Si].length=be;De.probesSH.value=Ie.textures,De.probesMin.value=Ie.min,De.probesMax.value=Ie.max,De.probesResolution.value=Ie.resolution}ts.upload(P,vl(Lt),De,Rt)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ts.upload(P,vl(Lt),De,Rt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&se.setValue(P,"center",W.center),se.setValue(P,"modelViewMatrix",W.modelViewMatrix),se.setValue(P,"normalMatrix",W.normalMatrix),se.setValue(P,"modelMatrix",W.matrixWorld),F.uniformsGroups!==void 0){let Ie=F.uniformsGroups;for(let be=0,Si=Ie.length;be<Si;be++){let Rl=Ie[be];Nt.update(Rl,ze),Nt.bind(Rl,ze)}}return ze}function bu(I,D){I.ambientLightColor.needsUpdate=D,I.lightProbe.needsUpdate=D,I.sunLights.needsUpdate=D,I.sunLightShadows.needsUpdate=D,I.directionalLights.needsUpdate=D,I.directionalLightShadows.needsUpdate=D,I.pointLights.needsUpdate=D,I.pointLightShadows.needsUpdate=D,I.spotLights.needsUpdate=D,I.spotLightShadows.needsUpdate=D,I.rectAreaLights.needsUpdate=D,I.hemisphereLights.needsUpdate=D}function Nu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(I,D,X){let F=mt.get(I);F.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),mt.get(I.texture).__webglTexture=D,mt.get(I.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:X,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,D){let X=mt.get(I);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(I,D=0,X=0){tt=I,Q=D,z=X;let F=null,W=!1,It=!1;if(I){let xt=mt.get(I);if(xt.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(P.FRAMEBUFFER,xt.__webglFramebuffer),$.copy(I.viewport),ft.copy(I.scissor),_t=I.scissorTest,it.viewport($),it.scissor(ft),it.setScissorTest(_t),V=-1;return}else if(xt.__webglFramebuffer===void 0)Rt.setupRenderTarget(I);else if(xt.__hasExternalTextures)Rt.rebindTextures(I,mt.get(I.texture).__webglTexture,mt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Wt=I.depthTexture;if(xt.__boundDepthTexture!==Wt){if(Wt!==null&&mt.has(Wt)&&(I.width!==Wt.image.width||I.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(I)}}let St=I.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(It=!0);let Pt=mt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?F=Pt[D][X]:F=Pt[D],W=!0):I.samples>0&&Rt.useMultisampledRTT(I)===!1?F=mt.get(I).__webglMultisampledFramebuffer:Array.isArray(Pt)?F=Pt[X]:F=Pt,$.copy(I.viewport),ft.copy(I.scissor),_t=I.scissorTest}else $.copy(at).multiplyScalar(gt).floor(),ft.copy(Et).multiplyScalar(gt).floor(),_t=yt;if(X!==0&&(F=H),it.bindFramebuffer(P.FRAMEBUFFER,F)&&it.drawBuffers(I,F),it.viewport($),it.scissor(ft),it.setScissorTest(_t),W){let xt=mt.get(I.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,X)}else if(It){let xt=D;for(let St=0;St<I.textures.length;St++){let Pt=mt.get(I.textures[St]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+St,Pt.__webglTexture,X,xt)}}else if(I!==null&&X!==0){let xt=mt.get(I.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xt.__webglTexture,X)}V=-1};function Sl(I){let D=mt.get(I);return(D.__readFormat!==I.format||D.__readType!==I.type)&&(D.__readFormat=I.format,D.__readType=I.type,D.__formatReadable=Mt.textureFormatReadable(I.format),D.__typeReadable=Mt.textureTypeReadable(I.type)),D}this.readRenderTargetPixels=function(I,D,X,F,W,It,bt,xt=0){if(!(I&&I.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=mt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&bt!==void 0&&(St=St[bt],Array.isArray(St)&&(St=St[0])),St){it.bindFramebuffer(P.FRAMEBUFFER,St);try{let Pt=I.textures[xt],Wt=Pt.format,Kt=Pt.type;I.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt);let Ct=Sl(Pt);if(Ct.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=I.width-F&&X>=0&&X<=I.height-W&&P.readPixels(D,X,F,W,rt.convert(Wt),rt.convert(Kt),It)}finally{let Pt=tt!==null?mt.get(tt).__webglFramebuffer:null;it.bindFramebuffer(P.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(I,D,X,F,W,It,bt,xt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=mt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&bt!==void 0&&(St=St[bt],Array.isArray(St)&&(St=St[0])),St)if(D>=0&&D<=I.width-F&&X>=0&&X<=I.height-W){it.bindFramebuffer(P.FRAMEBUFFER,St);let Pt=I.textures[xt],Wt=Pt.format,Kt=Pt.type;I.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt);let Ct=Sl(Pt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.bufferData(P.PIXEL_PACK_BUFFER,It.byteLength,P.STREAM_READ),P.readPixels(D,X,F,W,rt.convert(Wt),rt.convert(Kt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ee=tt!==null?mt.get(tt).__webglFramebuffer:null;it.bindFramebuffer(P.FRAMEBUFFER,Ee);let me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await jc(P,me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,It),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer($t),P.deleteSync(me),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,D=null,X=0){let F=Math.pow(2,-X),W=Math.floor(I.image.width*F),It=Math.floor(I.image.height*F),bt=D!==null?D.x:0,xt=D!==null?D.y:0;Rt.setTexture2D(I,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,bt,xt,W,It),it.unbindTexture()},this.copyTextureToTexture=function(I,D,X=null,F=null,W=0,It=0){let bt,xt,St,Pt,Wt,Kt,Ct,$t,Ee,me=I.isCompressedTexture?I.mipmaps[It]:I.image;if(X!==null)bt=X.max.x-X.min.x,xt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Pt=X.min.x,Wt=X.min.y,Kt=X.isBox3?X.min.z:0;else{let se=Math.pow(2,-W);bt=Math.floor(me.width*se),xt=Math.floor(me.height*se),I.isDataArrayTexture?St=me.depth:I.isData3DTexture?St=Math.floor(me.depth*se):St=1,Pt=0,Wt=0,Kt=0}F!==null?(Ct=F.x,$t=F.y,Ee=F.z):(Ct=0,$t=0,Ee=0);let pe=rt.convert(D.format),Oe=rt.convert(D.type),Lt;D.isData3DTexture?(Rt.setTexture3D(D,0),Lt=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Rt.setTexture2DArray(D,0),Lt=P.TEXTURE_2D_ARRAY):(Rt.setTexture2D(D,0),Lt=P.TEXTURE_2D),it.activeTexture(P.TEXTURE0),it.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),it.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),it.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let He=it.getParameter(P.UNPACK_ROW_LENGTH),oe=it.getParameter(P.UNPACK_IMAGE_HEIGHT),rn=it.getParameter(P.UNPACK_SKIP_PIXELS),ze=it.getParameter(P.UNPACK_SKIP_ROWS),tr=it.getParameter(P.UNPACK_SKIP_IMAGES);it.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),it.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),it.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),it.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),it.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt);let ji=I.isDataArrayTexture||I.isData3DTexture,an=D.isDataArrayTexture||D.isData3DTexture;if(I.isDepthTexture){let se=mt.get(I),De=mt.get(D),ai=mt.get(se.__renderTarget),Ie=mt.get(De.__renderTarget);it.bindFramebuffer(P.READ_FRAMEBUFFER,ai.__webglFramebuffer),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let be=0;be<St;be++)ji&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.get(I).__webglTexture,W,Kt+be),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.get(D).__webglTexture,It,Ee+be)),P.blitFramebuffer(Pt,Wt,Pt+bt,Wt+xt,Ct,$t,Ct+bt,$t+xt,P.DEPTH_BUFFER_BIT,P.NEAREST);it.bindFramebuffer(P.READ_FRAMEBUFFER,null),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||I.isRenderTargetTexture||mt.has(I)){let se=mt.get(I),De=mt.get(D);it.bindFramebuffer(P.READ_FRAMEBUFFER,w),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let ai=0;ai<St;ai++)ji?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,se.__webglTexture,W,Kt+ai):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,se.__webglTexture,W),an?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.__webglTexture,It,Ee+ai):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,De.__webglTexture,It),W!==0?P.blitFramebuffer(Pt,Wt,Pt+bt,Wt+xt,Ct,$t,Ct+bt,$t+xt,P.COLOR_BUFFER_BIT,P.NEAREST):an?P.copyTexSubImage3D(Lt,It,Ct,$t,Ee+ai,Pt,Wt,bt,xt):P.copyTexSubImage2D(Lt,It,Ct,$t,Pt,Wt,bt,xt);it.bindFramebuffer(P.READ_FRAMEBUFFER,null),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else an?I.isDataTexture||I.isData3DTexture?P.texSubImage3D(Lt,It,Ct,$t,Ee,bt,xt,St,pe,Oe,me.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,It,Ct,$t,Ee,bt,xt,St,pe,me.data):P.texSubImage3D(Lt,It,Ct,$t,Ee,bt,xt,St,pe,Oe,me):I.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,It,Ct,$t,bt,xt,pe,Oe,me.data):I.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,It,Ct,$t,me.width,me.height,pe,me.data):P.texSubImage2D(P.TEXTURE_2D,It,Ct,$t,bt,xt,pe,Oe,me);it.pixelStorei(P.UNPACK_ROW_LENGTH,He),it.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),it.pixelStorei(P.UNPACK_SKIP_PIXELS,rn),it.pixelStorei(P.UNPACK_SKIP_ROWS,ze),it.pixelStorei(P.UNPACK_SKIP_IMAGES,tr),It===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&P.generateMipmap(Lt),it.unbindTexture()},this.initRenderTarget=function(I){mt.get(I).__webglFramebuffer===void 0&&Rt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Rt.setTextureCube(I,0):I.isData3DTexture?Rt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Rt.setTexture2DArray(I,0):Rt.setTexture2D(I,0),it.unbindTexture()},this.resetState=function(){Q=0,z=0,tt=null,it.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ja=class extends Pi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Qi;t.deleteAttribute("uv");let e=new pn({side:_e}),i=new pn,s=new zs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ts(t,i,6),o=new Le;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new fe(t,ns(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new fe(t,ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new fe(t,ns(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new fe(t,ns(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new fe(t,ns(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new fe(t,ns(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ns(n){return new Ls({color:0,emissive:16777215,emissiveIntensity:n})}var ss={silkNormal:"/assets/li/silkNormal.jpg",silkRoughness:"/assets/li/silkRoughness.jpg",silkColor:"/assets/li/silkColor.jpg",paperColor:"/assets/li/paperColor.jpg",paperBump:"/assets/li/paperBump.jpg",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTIyLjQiIGhlaWdodD0iMTQwNy40IiB2aWV3Qm94PSItMTE4LjIgLTk1Mi4yIDQ1MjIuNCAxNDA3LjQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTM2NSAxMTVRMTM1MCAxMTMgMTMyNC4wIDEwNy41UTEyOTggMTAyIDEyNzEuMCA4Ni4wUTEyNDQgNzAgMTIyNS4wIDM3LjVRMTIwNiA1IDEyMDYgLTQ5UTEyMDYgLTExMSAxMjMxLjUgLTE4NS41UTEyNTcgLTI2MCAxMjk0LjAgLTM0MS4wUTEzMzEgLTQyMiAxMzY1IC01MDFRMTM5MiAtNTY0IDEzOTIgLTU5N1ExMzkyIC02MzAgMTM2NyAtNjMwUTEzMzkgLTYzMCAxMjgzLjUgLTU4NS41UTEyMjggLTU0MSAxMTU1IC00NTFRMTEzNiAtNDI3IDExMDYuMCAtMzg0LjVRMTA3NiAtMzQyIDEwNDIuMCAtMjkwLjVRMTAwOCAtMjM5IDk3NS41IC0xODYuNVE5NDMgLTEzNCA5MTguNSAtOTAuMFE4OTQgLTQ2IDg4MyAtMjBRODcwIDExIDg1My4wIDIyLjVRODM2IDM0IDgyMSAzNFE4MDggMzQgNzk5IDI3UTc4OSAyMCA3ODkgMTBRNzg5IDQgNzkyIDBRNzk4IC0xMiA4MjIuMCAtNTUuMFE4NDYgLTk4IDg3OC4wIC0xNjkuMFE5MTAgLTI0MCA5MzkgLTMzNFE5NDggLTM2MyA5NTcuNSAtNDAxLjBROTY3IC00MzkgOTc1LjAgLTQ3OS41UTk4MyAtNTIwIDk4OC41IC01NTUuNVE5OTQgLTU5MSA5OTQgLTYxM1E5OTQgLTY0OCA5ODIuMCAtNjY0LjVROTcwIC02ODEgOTUwIC02ODFROTI4IC02ODEgOTAwLjAgLTY2Mi4wUTg3MiAtNjQzIDg0MyAtNjA3UTc5MyAtNTQ0IDc1NS4wIC00OTAuNVE3MTcgLTQzNyA2ODUuNSAtMzg0LjBRNjU0IC0zMzEgNjIzLjUgLTI3MS4wUTU5MyAtMjExIDU1OS4wIC0xMzYuNVE1MjUgLTYyIDQ4MSAzNlE0NzQgNTIgNDU3LjUgNTkuMFE0NDEgNjYgNDI3IDY2UTQxMyA2NiA0MDQuMCA2MC4wUTM5NSA1NCAzOTggNDNRNDIwIDggNDQ3LjAgLTQ0LjVRNDc0IC05NyA1MDIuMCAtMTYxLjBRNTMwIC0yMjUgNTU2LjAgLTI5NC4wUTU4MiAtMzYzIDYwMi41IC00MjkuMFE2MjMgLTQ5NSA2MzUuMCAtNTUzLjBRNjQ3IC02MTEgNjQ3IC02NTJRNjQ3IC03MjkgNjE0LjUgLTc2Mi4wUTU4MiAtNzk1IDUzMSAtNzk1UTQ4NiAtNzk1IDQzMi4wIC03NzMuMFEzNzggLTc1MSAzMjMuNSAtNzEzLjBRMjY5IC02NzUgMjIxIC02MjdRMTUyIC01NTggMTEyLjUgLTQ3Ny4wUTczIC0zOTYgNzMgLTMxM1E3MyAtMjU3IDk0LjAgLTIxOC4wUTExNSAtMTc5IDE0OS41IC0xNTkuMFExODQgLTEzOSAyMjYgLTEzOVEyNjkgLTEzOSAzMDYuNSAtMTYwLjVRMzQ0IC0xODIgMzcyLjUgLTIxNi41UTQwMSAtMjUxIDQxNy4wIC0yODkuNVE0MzMgLTMyOCA0MzMgLTM2MlE0MzMgLTM5MSA0MTcuMCAtNDEwLjBRNDAxIC00MjkgMzY2IC00MjlRMzYyIC00MjkgMzU3LjUgLTQyOC41UTM1MyAtNDI4IDM0OCAtNDI4SDM0NVEzMzggLTQyOCAzMzIuMCAtNDMwLjVRMzI2IC00MzMgMzI2IC00MzdRMzI2IC00NDEgMzM2LjUgLTQ0Ni4wUTM0NyAtNDUxIDM3NSAtNDUxUTQyMCAtNDUxIDQ0Mi41IC00MjQuNVE0NjUgLTM5OCA0NjUgLTM1N1E0NjUgLTMxNyA0NDQuNSAtMjc1LjBRNDI0IC0yMzMgMzg5LjAgLTE5Ny4wUTM1NCAtMTYxIDMxMC41IC0xMzkuMFEyNjcgLTExNyAyMjEgLTExN1ExNjcgLTExNyAxMjAuNSAtMTQyLjBRNzQgLTE2NyA0Ni4wIC0yMTQuNVExOCAtMjYyIDE4IC0zMjhRMTggLTM5MSA0NC4wIC00NTIuNVE3MCAtNTE0IDExMS41IC01NjguNVExNTMgLTYyMyAyMDAgLTY2NVEyNTIgLTcxMiAzMTAuMCAtNzQ1LjVRMzY4IC03NzkgNDI1LjUgLTc5Ny41UTQ4MyAtODE2IDUzMyAtODE2UTYwNyAtODE2IDY1NS41IC03NzIuMFE3MDQgLTcyOCA3MDQgLTYzMFE3MDQgLTU5MCA2OTMuMCAtNTM4LjVRNjgyIC00ODcgNjY3LjAgLTQzNS41UTY1MiAtMzg0IDYzOCAtMzQ0SDY0MFE2NzYgLTQwOSA3MDQuNSAtNDU1LjVRNzMzIC01MDIgNzYyLjAgLTU0Mi4wUTc5MSAtNTgyIDgyNyAtNjI2UTg1OCAtNjYzIDg5OC4wIC02ODUuMFE5MzggLTcwNyA5NzUgLTcwN1ExMDA4IC03MDcgMTAzMS4wIC02ODUuMFExMDU0IC02NjMgMTA1NCAtNjEwUTEwNTQgLTYwNCAxMDU0LjAgLTYwMC4wUTEwNTQgLTU5NiAxMDUzIC01ODhRMTA0NCAtNDkyIDEwMTUuMCAtMzk5LjVROTg2IC0zMDcgOTU1IC0yMTNROTg2IC0yNjEgMTAzOS4wIC0zMzUuMFExMDkyIC00MDkgMTE1NSAtNDg4UTEyMzIgLTU4NCAxMjk4LjAgLTYzMi4wUTEzNjQgLTY4MCAxNDA3IC02ODBRMTQ2MSAtNjgwIDE0NjEgLTYxNFExNDYxIC01ODkgMTQ1MS41IC01NTQuMFExNDQyIC01MTkgMTQyMiAtNDgwUTE0MDAgLTQzNiAxMzczLjUgLTM3OC41UTEzNDcgLTMyMSAxMzIzLjAgLTI1OC4wUTEyOTkgLTE5NSAxMjgzLjUgLTEzNC41UTEyNjggLTc0IDEyNjggLTIzUTEyNjggMzIgMTI5My41IDY1LjVRMTMxOSA5OSAxMzgyIDk5SDEzODhRMTQwMyA5OSAxNDAzIDEwNVExNDAzIDEwOSAxMzkzLjAgMTEzLjBRMTM4MyAxMTcgMTM2NSAxMTVaTTEyOTkgOFExMzM1IC02NSAxMzY4LjAgLTEzNi41UTE0MDEgLTIwOCAxNDM2IC0yNzNRMTQ1NiAtMzA5IDE0NzAuMCAtMzIzLjVRMTQ4NCAtMzM4IDE1MDcgLTMzOFExNTE1IC0zMzggMTUyNC4wIC0zMzUuNVExNTMzIC0zMzMgMTU0MiAtMzMzUTE1NDggLTMzMyAxNTUxIC0zMzRRMTUzNyAtMzI2IDE1MTQuNSAtMjk0LjVRMTQ5MiAtMjYzIDE0NjkuMCAtMjIyLjBRMTQ0NiAtMTgxIDE0MjggLTE0NVExNDQ3IC0xNjggMTQ2OC4wIC0xOTEuMFExNDg5IC0yMTQgMTUxNCAtMjM1UTE1MzggLTI1NiAxNTcxLjUgLTI3OC41UTE2MDUgLTMwMSAxNjM3LjAgLTMxNi4wUTE2NjkgLTMzMSAxNjg4IC0zMzFRMTY5NSAtMzMxIDE2OTggLTMzMFExNjk4IC0zMzAgMTY4Ny4wIC0zMTAuNVExNjc2IC0yOTEgMTY1OS41IC0yNTkuNVExNjQzIC0yMjggMTYyNi4wIC0xOTIuNVExNjA5IC0xNTcgMTU5NS41IC0xMjQuNVExNTgyIC05MiAxNTc4IC03MFExNTc1IC01NyAxNTc1IC00NlExNTc1IC0zMCAxNTgxLjAgLTI1LjBRMTU4NyAtMjAgMTU5NCAtMjBRMTYxMyAtMjAgMTYzMy4wIC0zNy4wUTE2NTMgLTU0IDE2NzEuNSAtODAuNVExNjkwIC0xMDcgMTcwNi4wIC0xMzcuMFExNzIyIC0xNjcgMTczMyAtMTkzUTE3NDUgLTE5MyAxNzQ1IC0xODRRMTczNCAtMTU3IDE3MTcuNSAtMTI0LjVRMTcwMSAtOTIgMTY4MC41IC02My4wUTE2NjAgLTM0IDE2MzUuMCAtMTUuMFExNjEwIDQgMTU4MSA0UTE1NjEgNCAxNTM5LjUgLTEwLjBRMTUxOCAtMjQgMTUxOCAtNjJRMTUxOCAtNzMgMTUyMC4wIC04NS41UTE1MjIgLTk4IDE1MjcgLTExM1ExNTM1IC0xMzMgMTU0Ni4wIC0xNTYuMFExNTU3IC0xNzkgMTU4MiAtMjE5UTE1ODkgLTIzMCAxNTkwLjUgLTIzNi4wUTE1OTIgLTI0MiAxNTkyIC0yNDZRMTU5MiAtMjU4IDE1ODEgLTI1OFExNTcyIC0yNTggMTU1NC41IC0yNDguMFExNTM3IC0yMzggMTUxMSAtMjEzUTE0ODYgLTE4OSAxNDUxLjUgLTE0NS4wUTE0MTcgLTEwMSAxMzcyIC0xNVExMzY1IC0yIDEzNTYuNSAtMS4wUTEzNDggMCAxMzMzIDFRMTMyMyAyIDEzMTQuMCAyLjVRMTMwNSAzIDEyOTkgOFpNMTM3MiAzMTlRMTMyMCAzMTkgMTI5OC41IDI5OC41UTEyNzcgMjc4IDEyNzcgMjUwUTEyNzcgMjIzIDEyOTIgMTk2UTEzMDYgMTY3IDEzMzEuMCAxNDYuNVExMzU2IDEyNiAxMzg2IDExMlExNDM3IDg4IDE1MDMuNSA3My4wUTE1NzAgNTggMTYzMSA0MFExNjM5IDI2IDE2NDcuNSAxMS4wUTE2NTYgLTQgMTY2MyAtMThRMTY4MyAtNTggMTcwMC4wIC05Ny41UTE3MTcgLTEzNyAxNzQyIC0xODNRMTczMyAtMTgzIDE3MzMgLTE5M0wxNzc3IC0yOTRRMTc3OCAtMjk2IDE3NzkuMCAtMjk5LjVRMTc4MCAtMzAzIDE3ODAgLTMwN1ExNzgwIC0zMTggMTc3NS4wIC0zMjUuNVExNzcwIC0zMzMgMTc2OCAtMzM2TDE4MjMgLTMzOEgxODI4UTE4NTAgLTMzOCAxODUwIC0zMjRRMTg1MCAtMzE3IDE4NDQgLTMwMkwxNzY0IC0xMTRRMTc1MCAtODEgMTczNC4wIC00OC4wUTE3MTggLTE1IDE3MDEgMTlRMTc3MSAtOCAxODEyLjUgLTQ3LjVRMTg1NCAtODcgMTg3Ni41IC0xMjYuNVExODk5IC0xNjYgMTkxMSAtMTkzUTE5MjMgLTE5MyAxOTIzIC0xODRRMTkxMyAtMTYyIDE4OTcuMCAtMTMxLjVRMTg4MSAtMTAxIDE4NTUuMCAtNjcuNVExODI5IC0zNCAxNzg4LjAgLTMuMFExNzQ3IDI4IDE2ODUgNTFRMTY2MSA5NCAxNjMwLjAgMTQwLjVRMTU5OSAxODcgMTU2MC4wIDIyNy41UTE1MjEgMjY4IDE0NzQuNSAyOTMuNVExNDI4IDMxOSAxMzcyIDMxOVpNMTM0OCAyOTlRMTM4MSAyOTkgMTQxNi41IDI3OS4wUTE0NTIgMjU5IDE0ODUuMCAyMjguNVExNTE4IDE5OCAxNTQ1LjUgMTY2LjBRMTU3MyAxMzQgMTU5MCAxMTBRMTU5NiAxMDIgMTYwMS4wIDkyLjBRMTYwNiA4MiAxNjExIDcyUTE1NjMgODUgMTUwNS4wIDEwMC41UTE0NDcgMTE2IDE0MDMgMTM1UTEzNTUgMTU1IDEzMjguMCAxOTEuNVExMzAxIDIyOCAxMzAxIDI1N1ExMzAxIDI3NiAxMzEyLjUgMjg3LjVRMTMyNCAyOTkgMTM0OCAyOTlaTTE4NTIgLTQwMFExODM5IC00MDAgMTgyOS41IC00MTAuMFExODIwIC00MjAgMTgyMCAtNDM0UTE4MjAgLTQ1MSAxODM0LjAgLTQ2NC41UTE4NDggLTQ3OCAxODY1IC00NzhRMTg3OSAtNDc4IDE4ODkuMCAtNDY5LjBRMTg5OSAtNDYwIDE4OTkgLTQ0NlExODk5IC00MjggMTg4NS4wIC00MTQuMFExODcxIC00MDAgMTg1MiAtNDAwWk0yMTI4IDNRMjEwNSAzIDIwODcuNSAtMTAuMFEyMDcwIC0yMyAyMDcwIC02M1EyMDcwIC04MCAyMDcyLjUgLTk1LjBRMjA3NSAtMTEwIDIwNzkgLTEyN1EyMDcwIC0xMTIgMjA1NC4wIC05MC4wUTIwMzggLTY4IDIwMTguNSAtNDcuMFExOTk5IC0yNiAxOTc4LjUgLTEyLjBRMTk1OCAyIDE5NDAgMlExOTE0IDIgMTg5OC4wIC0yMS41UTE4ODIgLTQ1IDE4ODIgLTgzUTE4ODIgLTEyNCAxOTAxLjAgLTE3MS4wUTE5MjAgLTIxOCAxOTUzLjAgLTI2MS4wUTE5ODYgLTMwNCAyMDI5LjAgLTMzMS4wUTIwNzIgLTM1OCAyMTE5IC0zNThRMjE0MiAtMzU4IDIxNjMuMCAtMzUwLjVRMjE4NCAtMzQzIDIyMDAgLTMyNlEyMjA3IC0zMTkgMjIwNyAtMzEwUTIyMDcgLTMwNCAyMjAyLjAgLTMwMC4wUTIxOTcgLTI5NiAyMTg5IC0yOThRMjE3OCAtMzMzIDIxNDIgLTMzM1EyMTI1IC0zMzMgMjEwMyAtMzIyUTIwNzYgLTMwOCAyMDQ1LjUgLTI3Ny41UTIwMTUgLTI0NyAxOTg4LjUgLTIwOC41UTE5NjIgLTE3MCAxOTQ1LjAgLTEzMS4wUTE5MjggLTkyIDE5MjggLTYwUTE5MjggLTI3IDE5NTMgLTI3UTE5NzUgLTI3IDE5OTguNSAtNDguMFEyMDIyIC02OSAyMDQzLjUgLTEwMC41UTIwNjUgLTEzMiAyMDgzLjAgLTE2My4wUTIxMDEgLTE5NCAyMTExIC0yMTNRMjEyNiAtMjQwIDIxMzkuMCAtMjU4LjBRMjE1MiAtMjc2IDIxNzYgLTI3NlEyMTg3IC0yNzYgMjE5OC4wIC0yNzMuMFEyMjA5IC0yNzAgMjIyMSAtMjcyUTIxOTEgLTI0MiAyMTY4LjUgLTIwMS4wUTIxNDYgLTE2MCAyMTM0LjAgLTEyMC41UTIxMjIgLTgxIDIxMjIgLTU0UTIxMjIgLTI0IDIxNDIgLTI0UTIxNTggLTI0IDIxNzYuNSAtNDIuMFEyMTk1IC02MCAyMjEyLjUgLTg3LjVRMjIzMCAtMTE1IDIyNDUuMCAtMTQzLjVRMjI2MCAtMTcyIDIyNjkgLTE5M1EyMjc0IC0xOTMgMjI3Ny41IC0xOTIuMFEyMjgxIC0xOTEgMjI4MSAtMTg0UTIyODAgLTE4MCAyMjc3LjUgLTE3NS41UTIyNzUgLTE3MSAyMjcwIC0xNjBRMjI2MiAtMTQ0IDIyNDguMCAtMTE3LjBRMjIzNCAtOTAgMjIxNS4wIC02Mi41UTIxOTYgLTM1IDIxNzQuMCAtMTYuMFEyMTUyIDMgMjEyOCAzWk0yMjk4IDBRMjI4NyAwIDIyNzEuNSAtNS4wUTIyNTYgLTEwIDIyNDQuNSAtMjMuNVEyMjMzIC0zNyAyMjMzIC02NFEyMjMzIC05MCAyMjUwLjAgLTEyNC4wUTIyNjcgLTE1OCAyMjgwIC0xODRRMjI2OSAtMTg0IDIyNjkgLTE5M1EyMjcwIC0xOTYgMjI3OC4wIC0yMTIuMFEyMjg2IC0yMjggMjI5Ny4wIC0yNTAuMFEyMzA4IC0yNzIgMjMxOC41IC0yOTIuNVEyMzI5IC0zMTMgMjMzNSAtMzI0UTIzNDcgLTM0NiAyMzczIC0zNDZIMjQzNVEyNDE4IC0zMzMgMjQwNC41IC0zMTcuNVEyMzkxIC0zMDIgMjM3MSAtMjYxUTIzNzEgLTI2MSAyMzY0LjAgLTI0Ny4wUTIzNTcgLTIzMyAyMzQ2LjUgLTIxMS41UTIzMzYgLTE5MCAyMzI1LjUgLTE2OC4wUTIzMTUgLTE0NiAyMzA4IC0xMzFRMjI5NSAtMTAzIDIyOTEuMCAtODYuNVEyMjg3IC03MCAyMjg3IC01NlEyMjg3IC0yMyAyMzA5IC0yM1EyMzMzIC0yMyAyMzY3IC02MlEyMzk1IC05NSAyNDIyLjAgLTE0MS4wUTI0NDkgLTE4NyAyNDczLjUgLTIzNi4wUTI0OTggLTI4NSAyNTE3IC0zMjRRMjUyOCAtMzQ2IDI1NTYgLTM0NkgyNjExUTI1ODkgLTMyOCAyNTY2LjUgLTI5Mi4wUTI1NDQgLTI1NiAyNTE3IC0yMDBRMjUxMCAtMTg1IDI0OTkuMCAtMTYyLjBRMjQ4OCAtMTM5IDI0NzkuNSAtMTEzLjBRMjQ3MSAtODcgMjQ3MSAtNjFRMjQ3MSAtMjYgMjQ5NiAtMjZRMjUzMCAtMjYgMjU2Mi4wIC03My4wUTI1OTQgLTEyMCAyNjI1IC0xOTNRMjYzMyAtMTkzIDI2MzQuNSAtMTkyLjBRMjYzNiAtMTkxIDI2MzcgLTE4NFEyNjI2IC0xNTcgMjYxMC41IC0xMjUuNVEyNTk1IC05NCAyNTc1LjUgLTY1LjBRMjU1NiAtMzYgMjUzMi41IC0xOC4wUTI1MDkgMCAyNDgxIDBRMjQ1NiAwIDI0NDAuMCAtMTguNVEyNDI0IC0zNyAyNDI0IC03MVEyNDI0IC05OCAyNDM0IC0xMjlRMjQxNyAtOTkgMjM5NS4wIC02OS4wUTIzNzMgLTM5IDIzNDguMCAtMTkuNVEyMzIzIDAgMjI5OCAwWk0yNDY4IDI3M1EyNDU2IDI3MyAyNDQzLjUgMjY5LjVRMjQzMSAyNjYgMjQxOCAyNjhRMjQyNCAyNjIgMjQ0MS4wIDIzMy41UTI0NTggMjA1IDI0ODEuMCAxNjIuNVEyNTA0IDEyMCAyNTI4LjUgNzAuNVEyNTUzIDIxIDI1NzYuMCAtMjcuNVEyNTk5IC03NiAyNjE1LjUgLTExNy41UTI2MzIgLTE1OSAyNjM3IC0xODRRMjYzMiAtMTg0IDI2MjguMCAtMTg2LjBRMjYyNCAtMTg4IDI2MjUgLTE5M1EyNjI1IC0xOTMgMjYzMS4wIC0yMTEuMFEyNjM3IC0yMjkgMjY0My4wIC0yNTQuNVEyNjQ5IC0yODAgMjY0OSAtMzAxUTI2NDkgLTMxNSAyNjQ2LjAgLTMyNS4wUTI2NDMgLTMzNSAyNjM1IC0zMzZMMjY4NSAtMzQ0UTI2OTEgLTM0NSAyNjk2LjAgLTM0NS41UTI3MDEgLTM0NiAyNzA1IC0zNDZRMjcxNCAtMzQ2IDI3MTcuNSAtMzM5LjVRMjcyMSAtMzMzIDI3MjEgLTMxM1EyNzIxIC0yODggMjcxMi41IC0yNDkuNVEyNzA0IC0yMTEgMjY5MyAtMTgyUTI3MDQgLTIwMCAyNzIxLjUgLTIyOC4wUTI3MzkgLTI1NiAyNzYyLjAgLTI4NS4wUTI3ODUgLTMxNCAyODEwLjAgLTMzMy41UTI4MzUgLTM1MyAyODU5IC0zNTNRMjg2NCAtMzUzIDI4NzIgLTM1MVEyOTAwIC0zNDQgMjkxMS41IC0zMjMuNVEyOTIzIC0zMDMgMjkyMyAtMjc1UTI5MjMgLTI0NSAyOTExLjUgLTIwOS4wUTI5MDAgLTE3MyAyODgxLjAgLTEzOC41UTI4NjIgLTEwNCAyODM5IC03NlEyODExIC00MSAyNzcyLjAgLTIwLjBRMjczMyAxIDI2OTIgMVEyNjU1IDEgMjYyMyAtMThMMjUyOCAyMjFRMjUxNCAyNTEgMjUwMS4wIDI2Mi4wUTI0ODggMjczIDI0NjggMjczWk0yNjYwIC0yMFEyNjg4IC0yMCAyNzIzLjAgLTQ2LjBRMjc1OCAtNzIgMjc5MC41IC0xMTIuNVEyODIzIC0xNTMgMjg0NSAtMTk0UTI4NjAgLTIyMiAyODY3LjAgLTI0NS41UTI4NzQgLTI2OSAyODc0IC0yODZRMjg3NCAtMzI1IDI4NDYgLTMyNVEyODMzIC0zMjUgMjgxMi41IC0zMTEuMFEyNzkyIC0yOTcgMjc2NSAtMjYwUTI3MzYgLTIyMCAyNzAxLjUgLTE1OS41UTI2NjcgLTk5IDI2MzEgLTMyUTI2NDMgLTIwIDI2NjAgLTIwWk0yOTYyIC0xOTZRMjk3MCAtMjEzIDI5ODMuMCAtMjUwLjVRMjk5NiAtMjg4IDMwMTAuMCAtMzM0LjBRMzAyNCAtMzgwIDMwMzEgLTQyMVEzMDM0IC00MzcgMzA0Mi4wIC00NDQuNVEzMDUwIC00NTIgMzA1OSAtNDUyUTMwNzIgLTQ1MiAzMDgzLjAgLTQzOS41UTMwOTQgLTQyNyAzMDk0IC00MDRRMzA5NCAtMzc2IDMwNzcuNSAtMzU2LjBRMzA2MSAtMzM2IDMwMzcgLTMxOFEzMDQ3IC0zMTcgMzA1OC4wIC0zMTYuNVEzMDY5IC0zMTYgMzA4MiAtMzE2UTMxMjkgLTMxNiAzMTc1IC0zMjJRMzE3NyAtMzE2IDMxNzcgLTMxM1EzMTc3IC0zMDAgMzE2OS41IC0yODAuMFEzMTYyIC0yNjAgMzE1NCAtMjQ0UTMxNTAgLTIzNSAzMTM4LjAgLTIxMS41UTMxMjYgLTE4OCAzMTEyLjAgLTE1OC41UTMwOTggLTEyOSAzMDg4LjUgLTEwMC41UTMwNzkgLTcyIDMwNzkgLTUyUTMwNzkgLTI2IDMwOTkgLTI2UTMxMTggLTI2IDMxNTIuMCAtNzAuNVEzMTg2IC0xMTUgMzIyMCAtMTkzUTMyMzIgLTE5MyAzMjMyIC0xODRRMzIyMSAtMTU3IDMyMDQuNSAtMTI1LjBRMzE4OCAtOTMgMzE2OC4wIC02NC41UTMxNDggLTM2IDMxMjUuMCAtMTcuNVEzMTAyIDEgMzA3NyAxUTMwNTggMSAzMDM5LjAgLTE0LjVRMzAyMCAtMzAgMzAyMCAtNjVRMzAyMCAtOTYgMzAzMi4wIC0xMjUuNVEzMDQ0IC0xNTUgMzA1OS4wIC0xODEuMFEzMDc0IC0yMDcgMzA4Ni4wIC0yMjcuMFEzMDk4IC0yNDcgMzA5OCAtMjU5UTMwOTggLTI3NyAzMDc1LjUgLTI4NS4wUTMwNTMgLTI5MyAzMDE3IC0yOTRRMjk5OSAtMjQ4IDI5OTAuMCAtMjI2LjBRMjk4MSAtMjA0IDI5NzMgLTE4NFEyOTU3IC0xODQgMjk2MiAtMTk2Wk0zMjIxIC0xOTZRMzIyOSAtMjEzIDMyNDIuMCAtMjUwLjVRMzI1NSAtMjg4IDMyNjkuMCAtMzM0LjBRMzI4MyAtMzgwIDMyOTAgLTQyMVEzMjkzIC00MzcgMzMwMS4wIC00NDQuNVEzMzA5IC00NTIgMzMxOCAtNDUyUTMzMzEgLTQ1MiAzMzQyLjAgLTQzOS41UTMzNTMgLTQyNyAzMzUzIC00MDRRMzM1MyAtMzc2IDMzMzYuNSAtMzU2LjBRMzMyMCAtMzM2IDMyOTYgLTMxOFEzMzA2IC0zMTcgMzMxNy4wIC0zMTYuNVEzMzI4IC0zMTYgMzM0MSAtMzE2UTMzODggLTMxNiAzNDM0IC0zMjJRMzQzNiAtMzE2IDM0MzYgLTMxM1EzNDM2IC0zMDAgMzQyOC41IC0yODAuMFEzNDIxIC0yNjAgMzQxMyAtMjQ0UTM0MDkgLTIzNSAzMzk3LjAgLTIxMS41UTMzODUgLTE4OCAzMzcxLjAgLTE1OC41UTMzNTcgLTEyOSAzMzQ3LjUgLTEwMC41UTMzMzggLTcyIDMzMzggLTUyUTMzMzggLTI2IDMzNTggLTI2UTMzNzcgLTI2IDM0MTEuMCAtNzAuNVEzNDQ1IC0xMTUgMzQ3OSAtMTkzUTM0OTEgLTE5MyAzNDkxIC0xODRRMzQ4MCAtMTU3IDM0NjMuNSAtMTI1LjBRMzQ0NyAtOTMgMzQyNy4wIC02NC41UTM0MDcgLTM2IDMzODQuMCAtMTcuNVEzMzYxIDEgMzMzNiAxUTMzMTcgMSAzMjk4LjAgLTE0LjVRMzI3OSAtMzAgMzI3OSAtNjVRMzI3OSAtOTYgMzI5MS4wIC0xMjUuNVEzMzAzIC0xNTUgMzMxOC4wIC0xODEuMFEzMzMzIC0yMDcgMzM0NS4wIC0yMjcuMFEzMzU3IC0yNDcgMzM1NyAtMjU5UTMzNTcgLTI3NyAzMzM0LjUgLTI4NS4wUTMzMTIgLTI5MyAzMjc2IC0yOTRRMzI1OCAtMjQ4IDMyNDkuMCAtMjI2LjBRMzI0MCAtMjA0IDMyMzIgLTE4NFEzMjE2IC0xODQgMzIyMSAtMTk2Wk0zNDgwIC0xOTZRMzQ4OCAtMjEzIDM1MDEuMCAtMjUwLjVRMzUxNCAtMjg4IDM1MjguMCAtMzM0LjBRMzU0MiAtMzgwIDM1NDkgLTQyMVEzNTUyIC00MzcgMzU2MC4wIC00NDQuNVEzNTY4IC00NTIgMzU3NyAtNDUyUTM1OTAgLTQ1MiAzNjAxLjAgLTQzOS41UTM2MTIgLTQyNyAzNjEyIC00MDRRMzYxMiAtMzc2IDM1OTUuNSAtMzU2LjBRMzU3OSAtMzM2IDM1NTUgLTMxOFEzNTY1IC0zMTcgMzU3Ni4wIC0zMTYuNVEzNTg3IC0zMTYgMzYwMCAtMzE2UTM2NDcgLTMxNiAzNjkzIC0zMjJRMzY5NSAtMzE2IDM2OTUgLTMxM1EzNjk1IC0zMDAgMzY4Ny41IC0yODAuMFEzNjgwIC0yNjAgMzY3MiAtMjQ0UTM2NjggLTIzNSAzNjU2LjAgLTIxMS41UTM2NDQgLTE4OCAzNjMwLjAgLTE1OC41UTM2MTYgLTEyOSAzNjA2LjUgLTEwMC41UTM1OTcgLTcyIDM1OTcgLTUyUTM1OTcgLTI2IDM2MTcgLTI2UTM2MzYgLTI2IDM2NzAuMCAtNzAuNVEzNzA0IC0xMTUgMzczOCAtMTkzUTM3NTAgLTE5MyAzNzUwIC0xODRRMzczOSAtMTU3IDM3MjIuNSAtMTI1LjBRMzcwNiAtOTMgMzY4Ni4wIC02NC41UTM2NjYgLTM2IDM2NDMuMCAtMTcuNVEzNjIwIDEgMzU5NSAxUTM1NzYgMSAzNTU3LjAgLTE0LjVRMzUzOCAtMzAgMzUzOCAtNjVRMzUzOCAtOTYgMzU1MC4wIC0xMjUuNVEzNTYyIC0xNTUgMzU3Ny4wIC0xODEuMFEzNTkyIC0yMDcgMzYwNC4wIC0yMjcuMFEzNjE2IC0yNDcgMzYxNiAtMjU5UTM2MTYgLTI3NyAzNTkzLjUgLTI4NS4wUTM1NzEgLTI5MyAzNTM1IC0yOTRRMzUxNyAtMjQ4IDM1MDguMCAtMjI2LjBRMzQ5OSAtMjA0IDM0OTEgLTE4NFEzNDc1IC0xODQgMzQ4MCAtMTk2Wk0zNzM5IC0xOTZRMzc0NyAtMjEzIDM3NjAuMCAtMjUwLjVRMzc3MyAtMjg4IDM3ODcuMCAtMzM0LjBRMzgwMSAtMzgwIDM4MDggLTQyMVEzODExIC00MzcgMzgxOS4wIC00NDQuNVEzODI3IC00NTIgMzgzNiAtNDUyUTM4NDkgLTQ1MiAzODYwLjAgLTQzOS41UTM4NzEgLTQyNyAzODcxIC00MDRRMzg3MSAtMzc2IDM4NTQuNSAtMzU2LjBRMzgzOCAtMzM2IDM4MTQgLTMxOFEzODI0IC0zMTcgMzgzNS4wIC0zMTYuNVEzODQ2IC0zMTYgMzg1OSAtMzE2UTM5MDYgLTMxNiAzOTUyIC0zMjJRMzk1NCAtMzE2IDM5NTQgLTMxM1EzOTU0IC0zMDAgMzk0Ni41IC0yODAuMFEzOTM5IC0yNjAgMzkzMSAtMjQ0UTM5MjcgLTIzNSAzOTE1LjAgLTIxMS41UTM5MDMgLTE4OCAzODg5LjAgLTE1OC41UTM4NzUgLTEyOSAzODY1LjUgLTEwMC41UTM4NTYgLTcyIDM4NTYgLTUyUTM4NTYgLTI2IDM4NzYgLTI2UTM4OTUgLTI2IDM5MjkuMCAtNzAuNVEzOTYzIC0xMTUgMzk5NyAtMTkzUTQwMDkgLTE5MyA0MDA5IC0xODRRMzk5OCAtMTU3IDM5ODEuNSAtMTI1LjBRMzk2NSAtOTMgMzk0NS4wIC02NC41UTM5MjUgLTM2IDM5MDIuMCAtMTcuNVEzODc5IDEgMzg1NCAxUTM4MzUgMSAzODE2LjAgLTE0LjVRMzc5NyAtMzAgMzc5NyAtNjVRMzc5NyAtOTYgMzgwOS4wIC0xMjUuNVEzODIxIC0xNTUgMzgzNi4wIC0xODEuMFEzODUxIC0yMDcgMzg2My4wIC0yMjcuMFEzODc1IC0yNDcgMzg3NSAtMjU5UTM4NzUgLTI3NyAzODUyLjUgLTI4NS4wUTM4MzAgLTI5MyAzNzk0IC0yOTRRMzc3NiAtMjQ4IDM3NjcuMCAtMjI2LjBRMzc1OCAtMjA0IDM3NTAgLTE4NFEzNzM0IC0xODQgMzczOSAtMTk2Wk0zOTk4IC0xOTZRNDAwNiAtMjEzIDQwMTkuMCAtMjUwLjVRNDAzMiAtMjg4IDQwNDYuMCAtMzM0LjBRNDA2MCAtMzgwIDQwNjcgLTQyMVE0MDcwIC00MzcgNDA3OC4wIC00NDQuNVE0MDg2IC00NTIgNDA5NSAtNDUyUTQxMDggLTQ1MiA0MTE5LjAgLTQzOS41UTQxMzAgLTQyNyA0MTMwIC00MDRRNDEzMCAtMzc2IDQxMTMuNSAtMzU2LjBRNDA5NyAtMzM2IDQwNzMgLTMxOFE0MDgzIC0zMTcgNDA5NC4wIC0zMTYuNVE0MTA1IC0zMTYgNDExOCAtMzE2UTQxNjUgLTMxNiA0MjExIC0zMjJRNDIxMyAtMzE2IDQyMTMgLTMxM1E0MjEzIC0zMDAgNDIwNS41IC0yODAuMFE0MTk4IC0yNjAgNDE5MCAtMjQ0UTQxODYgLTIzNSA0MTc0LjAgLTIxMS41UTQxNjIgLTE4OCA0MTQ4LjAgLTE1OC41UTQxMzQgLTEyOSA0MTI0LjUgLTEwMC41UTQxMTUgLTcyIDQxMTUgLTUyUTQxMTUgLTI2IDQxMzUgLTI2UTQxNTQgLTI2IDQxODguMCAtNzAuNVE0MjIyIC0xMTUgNDI1NiAtMTkzUTQyNjggLTE5MyA0MjY4IC0xODRRNDI1NyAtMTU3IDQyNDAuNSAtMTI1LjBRNDIyNCAtOTMgNDIwNC4wIC02NC41UTQxODQgLTM2IDQxNjEuMCAtMTcuNVE0MTM4IDEgNDExMyAxUTQwOTQgMSA0MDc1LjAgLTE0LjVRNDA1NiAtMzAgNDA1NiAtNjVRNDA1NiAtOTYgNDA2OC4wIC0xMjUuNVE0MDgwIC0xNTUgNDA5NS4wIC0xODEuMFE0MTEwIC0yMDcgNDEyMi4wIC0yMjcuMFE0MTM0IC0yNDcgNDEzNCAtMjU5UTQxMzQgLTI3NyA0MTExLjUgLTI4NS4wUTQwODkgLTI5MyA0MDUzIC0yOTRRNDAzNSAtMjQ4IDQwMjYuMCAtMjI2LjBRNDAxNyAtMjA0IDQwMDkgLTE4NFEzOTkzIC0xODQgMzk5OCAtMTk2WiIvPjwvc3ZnPg==",emboss:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMTguMiAtOTUyLjIgNDUyMi40IDE0MDcuNCI+PGRlZnM+PGZpbHRlciBpZD0icGFwZXItcmVsaWVmIiB4PSItMTAlIiB5PSItMjUlIiB3aWR0aD0iMTIwJSIgaGVpZ2h0PSIxNjAlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249Ii4zMiIgcmVzdWx0PSJzb2Z0Ii8+CjxmZU9mZnNldCBpbj0ic29mdCIgZHg9Ii41IiBkeT0iLjg1IiByZXN1bHQ9ImNhc3QiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiM4ZTgwNjYiIGZsb29kLW9wYWNpdHk9Ii41NSIgcmVzdWx0PSJzaGFkZSIvPgo8ZmVDb21wb3NpdGUgaW49InNoYWRlIiBpbjI9ImNhc3QiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJzaGFkb3ciLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii40NSIgZHk9Ii42NSIgcmVzdWx0PSJkb3duIi8+CjxmZUNvbXBvc2l0ZSBpbj0iU291cmNlQWxwaGEiIGluMj0iZG93biIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJ1cHBlckVkZ2UiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiNmZmZlZjciIGZsb29kLW9wYWNpdHk9IjEiIHJlc3VsdD0ibGlnaHQiLz4KPGZlQ29tcG9zaXRlIGluPSJsaWdodCIgaW4yPSJ1cHBlckVkZ2UiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJoaWdobGlnaHQiLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii0uNCIgZHk9Ii0uNiIgcmVzdWx0PSJ1cCIvPgo8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUFscGhhIiBpbjI9InVwIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9Imxvd2VyRWRnZSIvPgo8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2IyYTU4YiIgZmxvb2Qtb3BhY2l0eT0iLjY1IiByZXN1bHQ9Imxvd2VyU2hhZGUiLz4KPGZlQ29tcG9zaXRlIGluPSJsb3dlclNoYWRlIiBpbjI9Imxvd2VyRWRnZSIgb3BlcmF0b3I9ImluIiByZXN1bHQ9Imxvd2VyIi8+CjxmZU1lcmdlPjxmZU1lcmdlTm9kZSBpbj0ic2hhZG93Ii8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PGZlTWVyZ2VOb2RlIGluPSJoaWdobGlnaHQiLz48ZmVNZXJnZU5vZGUgaW49Imxvd2VyIi8+PC9mZU1lcmdlPgo8L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0iI2U4ZTFjZiIgZmlsdGVyPSJ1cmwoI3BhcGVyLXJlbGllZikiPjxwYXRoIGQ9Ik0xMzY1IDExNVExMzUwIDExMyAxMzI0LjAgMTA3LjVRMTI5OCAxMDIgMTI3MS4wIDg2LjBRMTI0NCA3MCAxMjI1LjAgMzcuNVExMjA2IDUgMTIwNiAtNDlRMTIwNiAtMTExIDEyMzEuNSAtMTg1LjVRMTI1NyAtMjYwIDEyOTQuMCAtMzQxLjBRMTMzMSAtNDIyIDEzNjUgLTUwMVExMzkyIC01NjQgMTM5MiAtNTk3UTEzOTIgLTYzMCAxMzY3IC02MzBRMTMzOSAtNjMwIDEyODMuNSAtNTg1LjVRMTIyOCAtNTQxIDExNTUgLTQ1MVExMTM2IC00MjcgMTEwNi4wIC0zODQuNVExMDc2IC0zNDIgMTA0Mi4wIC0yOTAuNVExMDA4IC0yMzkgOTc1LjUgLTE4Ni41UTk0MyAtMTM0IDkxOC41IC05MC4wUTg5NCAtNDYgODgzIC0yMFE4NzAgMTEgODUzLjAgMjIuNVE4MzYgMzQgODIxIDM0UTgwOCAzNCA3OTkgMjdRNzg5IDIwIDc4OSAxMFE3ODkgNCA3OTIgMFE3OTggLTEyIDgyMi4wIC01NS4wUTg0NiAtOTggODc4LjAgLTE2OS4wUTkxMCAtMjQwIDkzOSAtMzM0UTk0OCAtMzYzIDk1Ny41IC00MDEuMFE5NjcgLTQzOSA5NzUuMCAtNDc5LjVROTgzIC01MjAgOTg4LjUgLTU1NS41UTk5NCAtNTkxIDk5NCAtNjEzUTk5NCAtNjQ4IDk4Mi4wIC02NjQuNVE5NzAgLTY4MSA5NTAgLTY4MVE5MjggLTY4MSA5MDAuMCAtNjYyLjBRODcyIC02NDMgODQzIC02MDdRNzkzIC01NDQgNzU1LjAgLTQ5MC41UTcxNyAtNDM3IDY4NS41IC0zODQuMFE2NTQgLTMzMSA2MjMuNSAtMjcxLjBRNTkzIC0yMTEgNTU5LjAgLTEzNi41UTUyNSAtNjIgNDgxIDM2UTQ3NCA1MiA0NTcuNSA1OS4wUTQ0MSA2NiA0MjcgNjZRNDEzIDY2IDQwNC4wIDYwLjBRMzk1IDU0IDM5OCA0M1E0MjAgOCA0NDcuMCAtNDQuNVE0NzQgLTk3IDUwMi4wIC0xNjEuMFE1MzAgLTIyNSA1NTYuMCAtMjk0LjBRNTgyIC0zNjMgNjAyLjUgLTQyOS4wUTYyMyAtNDk1IDYzNS4wIC01NTMuMFE2NDcgLTYxMSA2NDcgLTY1MlE2NDcgLTcyOSA2MTQuNSAtNzYyLjBRNTgyIC03OTUgNTMxIC03OTVRNDg2IC03OTUgNDMyLjAgLTc3My4wUTM3OCAtNzUxIDMyMy41IC03MTMuMFEyNjkgLTY3NSAyMjEgLTYyN1ExNTIgLTU1OCAxMTIuNSAtNDc3LjBRNzMgLTM5NiA3MyAtMzEzUTczIC0yNTcgOTQuMCAtMjE4LjBRMTE1IC0xNzkgMTQ5LjUgLTE1OS4wUTE4NCAtMTM5IDIyNiAtMTM5UTI2OSAtMTM5IDMwNi41IC0xNjAuNVEzNDQgLTE4MiAzNzIuNSAtMjE2LjVRNDAxIC0yNTEgNDE3LjAgLTI4OS41UTQzMyAtMzI4IDQzMyAtMzYyUTQzMyAtMzkxIDQxNy4wIC00MTAuMFE0MDEgLTQyOSAzNjYgLTQyOVEzNjIgLTQyOSAzNTcuNSAtNDI4LjVRMzUzIC00MjggMzQ4IC00MjhIMzQ1UTMzOCAtNDI4IDMzMi4wIC00MzAuNVEzMjYgLTQzMyAzMjYgLTQzN1EzMjYgLTQ0MSAzMzYuNSAtNDQ2LjBRMzQ3IC00NTEgMzc1IC00NTFRNDIwIC00NTEgNDQyLjUgLTQyNC41UTQ2NSAtMzk4IDQ2NSAtMzU3UTQ2NSAtMzE3IDQ0NC41IC0yNzUuMFE0MjQgLTIzMyAzODkuMCAtMTk3LjBRMzU0IC0xNjEgMzEwLjUgLTEzOS4wUTI2NyAtMTE3IDIyMSAtMTE3UTE2NyAtMTE3IDEyMC41IC0xNDIuMFE3NCAtMTY3IDQ2LjAgLTIxNC41UTE4IC0yNjIgMTggLTMyOFExOCAtMzkxIDQ0LjAgLTQ1Mi41UTcwIC01MTQgMTExLjUgLTU2OC41UTE1MyAtNjIzIDIwMCAtNjY1UTI1MiAtNzEyIDMxMC4wIC03NDUuNVEzNjggLTc3OSA0MjUuNSAtNzk3LjVRNDgzIC04MTYgNTMzIC04MTZRNjA3IC04MTYgNjU1LjUgLTc3Mi4wUTcwNCAtNzI4IDcwNCAtNjMwUTcwNCAtNTkwIDY5My4wIC01MzguNVE2ODIgLTQ4NyA2NjcuMCAtNDM1LjVRNjUyIC0zODQgNjM4IC0zNDRINjQwUTY3NiAtNDA5IDcwNC41IC00NTUuNVE3MzMgLTUwMiA3NjIuMCAtNTQyLjBRNzkxIC01ODIgODI3IC02MjZRODU4IC02NjMgODk4LjAgLTY4NS4wUTkzOCAtNzA3IDk3NSAtNzA3UTEwMDggLTcwNyAxMDMxLjAgLTY4NS4wUTEwNTQgLTY2MyAxMDU0IC02MTBRMTA1NCAtNjA0IDEwNTQuMCAtNjAwLjBRMTA1NCAtNTk2IDEwNTMgLTU4OFExMDQ0IC00OTIgMTAxNS4wIC0zOTkuNVE5ODYgLTMwNyA5NTUgLTIxM1E5ODYgLTI2MSAxMDM5LjAgLTMzNS4wUTEwOTIgLTQwOSAxMTU1IC00ODhRMTIzMiAtNTg0IDEyOTguMCAtNjMyLjBRMTM2NCAtNjgwIDE0MDcgLTY4MFExNDYxIC02ODAgMTQ2MSAtNjE0UTE0NjEgLTU4OSAxNDUxLjUgLTU1NC4wUTE0NDIgLTUxOSAxNDIyIC00ODBRMTQwMCAtNDM2IDEzNzMuNSAtMzc4LjVRMTM0NyAtMzIxIDEzMjMuMCAtMjU4LjBRMTI5OSAtMTk1IDEyODMuNSAtMTM0LjVRMTI2OCAtNzQgMTI2OCAtMjNRMTI2OCAzMiAxMjkzLjUgNjUuNVExMzE5IDk5IDEzODIgOTlIMTM4OFExNDAzIDk5IDE0MDMgMTA1UTE0MDMgMTA5IDEzOTMuMCAxMTMuMFExMzgzIDExNyAxMzY1IDExNVpNMTI5OSA4UTEzMzUgLTY1IDEzNjguMCAtMTM2LjVRMTQwMSAtMjA4IDE0MzYgLTI3M1ExNDU2IC0zMDkgMTQ3MC4wIC0zMjMuNVExNDg0IC0zMzggMTUwNyAtMzM4UTE1MTUgLTMzOCAxNTI0LjAgLTMzNS41UTE1MzMgLTMzMyAxNTQyIC0zMzNRMTU0OCAtMzMzIDE1NTEgLTMzNFExNTM3IC0zMjYgMTUxNC41IC0yOTQuNVExNDkyIC0yNjMgMTQ2OS4wIC0yMjIuMFExNDQ2IC0xODEgMTQyOCAtMTQ1UTE0NDcgLTE2OCAxNDY4LjAgLTE5MS4wUTE0ODkgLTIxNCAxNTE0IC0yMzVRMTUzOCAtMjU2IDE1NzEuNSAtMjc4LjVRMTYwNSAtMzAxIDE2MzcuMCAtMzE2LjBRMTY2OSAtMzMxIDE2ODggLTMzMVExNjk1IC0zMzEgMTY5OCAtMzMwUTE2OTggLTMzMCAxNjg3LjAgLTMxMC41UTE2NzYgLTI5MSAxNjU5LjUgLTI1OS41UTE2NDMgLTIyOCAxNjI2LjAgLTE5Mi41UTE2MDkgLTE1NyAxNTk1LjUgLTEyNC41UTE1ODIgLTkyIDE1NzggLTcwUTE1NzUgLTU3IDE1NzUgLTQ2UTE1NzUgLTMwIDE1ODEuMCAtMjUuMFExNTg3IC0yMCAxNTk0IC0yMFExNjEzIC0yMCAxNjMzLjAgLTM3LjBRMTY1MyAtNTQgMTY3MS41IC04MC41UTE2OTAgLTEwNyAxNzA2LjAgLTEzNy4wUTE3MjIgLTE2NyAxNzMzIC0xOTNRMTc0NSAtMTkzIDE3NDUgLTE4NFExNzM0IC0xNTcgMTcxNy41IC0xMjQuNVExNzAxIC05MiAxNjgwLjUgLTYzLjBRMTY2MCAtMzQgMTYzNS4wIC0xNS4wUTE2MTAgNCAxNTgxIDRRMTU2MSA0IDE1MzkuNSAtMTAuMFExNTE4IC0yNCAxNTE4IC02MlExNTE4IC03MyAxNTIwLjAgLTg1LjVRMTUyMiAtOTggMTUyNyAtMTEzUTE1MzUgLTEzMyAxNTQ2LjAgLTE1Ni4wUTE1NTcgLTE3OSAxNTgyIC0yMTlRMTU4OSAtMjMwIDE1OTAuNSAtMjM2LjBRMTU5MiAtMjQyIDE1OTIgLTI0NlExNTkyIC0yNTggMTU4MSAtMjU4UTE1NzIgLTI1OCAxNTU0LjUgLTI0OC4wUTE1MzcgLTIzOCAxNTExIC0yMTNRMTQ4NiAtMTg5IDE0NTEuNSAtMTQ1LjBRMTQxNyAtMTAxIDEzNzIgLTE1UTEzNjUgLTIgMTM1Ni41IC0xLjBRMTM0OCAwIDEzMzMgMVExMzIzIDIgMTMxNC4wIDIuNVExMzA1IDMgMTI5OSA4Wk0xMzcyIDMxOVExMzIwIDMxOSAxMjk4LjUgMjk4LjVRMTI3NyAyNzggMTI3NyAyNTBRMTI3NyAyMjMgMTI5MiAxOTZRMTMwNiAxNjcgMTMzMS4wIDE0Ni41UTEzNTYgMTI2IDEzODYgMTEyUTE0MzcgODggMTUwMy41IDczLjBRMTU3MCA1OCAxNjMxIDQwUTE2MzkgMjYgMTY0Ny41IDExLjBRMTY1NiAtNCAxNjYzIC0xOFExNjgzIC01OCAxNzAwLjAgLTk3LjVRMTcxNyAtMTM3IDE3NDIgLTE4M1ExNzMzIC0xODMgMTczMyAtMTkzTDE3NzcgLTI5NFExNzc4IC0yOTYgMTc3OS4wIC0yOTkuNVExNzgwIC0zMDMgMTc4MCAtMzA3UTE3ODAgLTMxOCAxNzc1LjAgLTMyNS41UTE3NzAgLTMzMyAxNzY4IC0zMzZMMTgyMyAtMzM4SDE4MjhRMTg1MCAtMzM4IDE4NTAgLTMyNFExODUwIC0zMTcgMTg0NCAtMzAyTDE3NjQgLTExNFExNzUwIC04MSAxNzM0LjAgLTQ4LjBRMTcxOCAtMTUgMTcwMSAxOVExNzcxIC04IDE4MTIuNSAtNDcuNVExODU0IC04NyAxODc2LjUgLTEyNi41UTE4OTkgLTE2NiAxOTExIC0xOTNRMTkyMyAtMTkzIDE5MjMgLTE4NFExOTEzIC0xNjIgMTg5Ny4wIC0xMzEuNVExODgxIC0xMDEgMTg1NS4wIC02Ny41UTE4MjkgLTM0IDE3ODguMCAtMy4wUTE3NDcgMjggMTY4NSA1MVExNjYxIDk0IDE2MzAuMCAxNDAuNVExNTk5IDE4NyAxNTYwLjAgMjI3LjVRMTUyMSAyNjggMTQ3NC41IDI5My41UTE0MjggMzE5IDEzNzIgMzE5Wk0xMzQ4IDI5OVExMzgxIDI5OSAxNDE2LjUgMjc5LjBRMTQ1MiAyNTkgMTQ4NS4wIDIyOC41UTE1MTggMTk4IDE1NDUuNSAxNjYuMFExNTczIDEzNCAxNTkwIDExMFExNTk2IDEwMiAxNjAxLjAgOTIuMFExNjA2IDgyIDE2MTEgNzJRMTU2MyA4NSAxNTA1LjAgMTAwLjVRMTQ0NyAxMTYgMTQwMyAxMzVRMTM1NSAxNTUgMTMyOC4wIDE5MS41UTEzMDEgMjI4IDEzMDEgMjU3UTEzMDEgMjc2IDEzMTIuNSAyODcuNVExMzI0IDI5OSAxMzQ4IDI5OVpNMTg1MiAtNDAwUTE4MzkgLTQwMCAxODI5LjUgLTQxMC4wUTE4MjAgLTQyMCAxODIwIC00MzRRMTgyMCAtNDUxIDE4MzQuMCAtNDY0LjVRMTg0OCAtNDc4IDE4NjUgLTQ3OFExODc5IC00NzggMTg4OS4wIC00NjkuMFExODk5IC00NjAgMTg5OSAtNDQ2UTE4OTkgLTQyOCAxODg1LjAgLTQxNC4wUTE4NzEgLTQwMCAxODUyIC00MDBaTTIxMjggM1EyMTA1IDMgMjA4Ny41IC0xMC4wUTIwNzAgLTIzIDIwNzAgLTYzUTIwNzAgLTgwIDIwNzIuNSAtOTUuMFEyMDc1IC0xMTAgMjA3OSAtMTI3UTIwNzAgLTExMiAyMDU0LjAgLTkwLjBRMjAzOCAtNjggMjAxOC41IC00Ny4wUTE5OTkgLTI2IDE5NzguNSAtMTIuMFExOTU4IDIgMTk0MCAyUTE5MTQgMiAxODk4LjAgLTIxLjVRMTg4MiAtNDUgMTg4MiAtODNRMTg4MiAtMTI0IDE5MDEuMCAtMTcxLjBRMTkyMCAtMjE4IDE5NTMuMCAtMjYxLjBRMTk4NiAtMzA0IDIwMjkuMCAtMzMxLjBRMjA3MiAtMzU4IDIxMTkgLTM1OFEyMTQyIC0zNTggMjE2My4wIC0zNTAuNVEyMTg0IC0zNDMgMjIwMCAtMzI2UTIyMDcgLTMxOSAyMjA3IC0zMTBRMjIwNyAtMzA0IDIyMDIuMCAtMzAwLjBRMjE5NyAtMjk2IDIxODkgLTI5OFEyMTc4IC0zMzMgMjE0MiAtMzMzUTIxMjUgLTMzMyAyMTAzIC0zMjJRMjA3NiAtMzA4IDIwNDUuNSAtMjc3LjVRMjAxNSAtMjQ3IDE5ODguNSAtMjA4LjVRMTk2MiAtMTcwIDE5NDUuMCAtMTMxLjBRMTkyOCAtOTIgMTkyOCAtNjBRMTkyOCAtMjcgMTk1MyAtMjdRMTk3NSAtMjcgMTk5OC41IC00OC4wUTIwMjIgLTY5IDIwNDMuNSAtMTAwLjVRMjA2NSAtMTMyIDIwODMuMCAtMTYzLjBRMjEwMSAtMTk0IDIxMTEgLTIxM1EyMTI2IC0yNDAgMjEzOS4wIC0yNTguMFEyMTUyIC0yNzYgMjE3NiAtMjc2UTIxODcgLTI3NiAyMTk4LjAgLTI3My4wUTIyMDkgLTI3MCAyMjIxIC0yNzJRMjE5MSAtMjQyIDIxNjguNSAtMjAxLjBRMjE0NiAtMTYwIDIxMzQuMCAtMTIwLjVRMjEyMiAtODEgMjEyMiAtNTRRMjEyMiAtMjQgMjE0MiAtMjRRMjE1OCAtMjQgMjE3Ni41IC00Mi4wUTIxOTUgLTYwIDIyMTIuNSAtODcuNVEyMjMwIC0xMTUgMjI0NS4wIC0xNDMuNVEyMjYwIC0xNzIgMjI2OSAtMTkzUTIyNzQgLTE5MyAyMjc3LjUgLTE5Mi4wUTIyODEgLTE5MSAyMjgxIC0xODRRMjI4MCAtMTgwIDIyNzcuNSAtMTc1LjVRMjI3NSAtMTcxIDIyNzAgLTE2MFEyMjYyIC0xNDQgMjI0OC4wIC0xMTcuMFEyMjM0IC05MCAyMjE1LjAgLTYyLjVRMjE5NiAtMzUgMjE3NC4wIC0xNi4wUTIxNTIgMyAyMTI4IDNaTTIyOTggMFEyMjg3IDAgMjI3MS41IC01LjBRMjI1NiAtMTAgMjI0NC41IC0yMy41UTIyMzMgLTM3IDIyMzMgLTY0UTIyMzMgLTkwIDIyNTAuMCAtMTI0LjBRMjI2NyAtMTU4IDIyODAgLTE4NFEyMjY5IC0xODQgMjI2OSAtMTkzUTIyNzAgLTE5NiAyMjc4LjAgLTIxMi4wUTIyODYgLTIyOCAyMjk3LjAgLTI1MC4wUTIzMDggLTI3MiAyMzE4LjUgLTI5Mi41UTIzMjkgLTMxMyAyMzM1IC0zMjRRMjM0NyAtMzQ2IDIzNzMgLTM0NkgyNDM1UTI0MTggLTMzMyAyNDA0LjUgLTMxNy41UTIzOTEgLTMwMiAyMzcxIC0yNjFRMjM3MSAtMjYxIDIzNjQuMCAtMjQ3LjBRMjM1NyAtMjMzIDIzNDYuNSAtMjExLjVRMjMzNiAtMTkwIDIzMjUuNSAtMTY4LjBRMjMxNSAtMTQ2IDIzMDggLTEzMVEyMjk1IC0xMDMgMjI5MS4wIC04Ni41UTIyODcgLTcwIDIyODcgLTU2UTIyODcgLTIzIDIzMDkgLTIzUTIzMzMgLTIzIDIzNjcgLTYyUTIzOTUgLTk1IDI0MjIuMCAtMTQxLjBRMjQ0OSAtMTg3IDI0NzMuNSAtMjM2LjBRMjQ5OCAtMjg1IDI1MTcgLTMyNFEyNTI4IC0zNDYgMjU1NiAtMzQ2SDI2MTFRMjU4OSAtMzI4IDI1NjYuNSAtMjkyLjBRMjU0NCAtMjU2IDI1MTcgLTIwMFEyNTEwIC0xODUgMjQ5OS4wIC0xNjIuMFEyNDg4IC0xMzkgMjQ3OS41IC0xMTMuMFEyNDcxIC04NyAyNDcxIC02MVEyNDcxIC0yNiAyNDk2IC0yNlEyNTMwIC0yNiAyNTYyLjAgLTczLjBRMjU5NCAtMTIwIDI2MjUgLTE5M1EyNjMzIC0xOTMgMjYzNC41IC0xOTIuMFEyNjM2IC0xOTEgMjYzNyAtMTg0UTI2MjYgLTE1NyAyNjEwLjUgLTEyNS41UTI1OTUgLTk0IDI1NzUuNSAtNjUuMFEyNTU2IC0zNiAyNTMyLjUgLTE4LjBRMjUwOSAwIDI0ODEgMFEyNDU2IDAgMjQ0MC4wIC0xOC41UTI0MjQgLTM3IDI0MjQgLTcxUTI0MjQgLTk4IDI0MzQgLTEyOVEyNDE3IC05OSAyMzk1LjAgLTY5LjBRMjM3MyAtMzkgMjM0OC4wIC0xOS41UTIzMjMgMCAyMjk4IDBaTTI0NjggMjczUTI0NTYgMjczIDI0NDMuNSAyNjkuNVEyNDMxIDI2NiAyNDE4IDI2OFEyNDI0IDI2MiAyNDQxLjAgMjMzLjVRMjQ1OCAyMDUgMjQ4MS4wIDE2Mi41UTI1MDQgMTIwIDI1MjguNSA3MC41UTI1NTMgMjEgMjU3Ni4wIC0yNy41UTI1OTkgLTc2IDI2MTUuNSAtMTE3LjVRMjYzMiAtMTU5IDI2MzcgLTE4NFEyNjMyIC0xODQgMjYyOC4wIC0xODYuMFEyNjI0IC0xODggMjYyNSAtMTkzUTI2MjUgLTE5MyAyNjMxLjAgLTIxMS4wUTI2MzcgLTIyOSAyNjQzLjAgLTI1NC41UTI2NDkgLTI4MCAyNjQ5IC0zMDFRMjY0OSAtMzE1IDI2NDYuMCAtMzI1LjBRMjY0MyAtMzM1IDI2MzUgLTMzNkwyNjg1IC0zNDRRMjY5MSAtMzQ1IDI2OTYuMCAtMzQ1LjVRMjcwMSAtMzQ2IDI3MDUgLTM0NlEyNzE0IC0zNDYgMjcxNy41IC0zMzkuNVEyNzIxIC0zMzMgMjcyMSAtMzEzUTI3MjEgLTI4OCAyNzEyLjUgLTI0OS41UTI3MDQgLTIxMSAyNjkzIC0xODJRMjcwNCAtMjAwIDI3MjEuNSAtMjI4LjBRMjczOSAtMjU2IDI3NjIuMCAtMjg1LjBRMjc4NSAtMzE0IDI4MTAuMCAtMzMzLjVRMjgzNSAtMzUzIDI4NTkgLTM1M1EyODY0IC0zNTMgMjg3MiAtMzUxUTI5MDAgLTM0NCAyOTExLjUgLTMyMy41UTI5MjMgLTMwMyAyOTIzIC0yNzVRMjkyMyAtMjQ1IDI5MTEuNSAtMjA5LjBRMjkwMCAtMTczIDI4ODEuMCAtMTM4LjVRMjg2MiAtMTA0IDI4MzkgLTc2UTI4MTEgLTQxIDI3NzIuMCAtMjAuMFEyNzMzIDEgMjY5MiAxUTI2NTUgMSAyNjIzIC0xOEwyNTI4IDIyMVEyNTE0IDI1MSAyNTAxLjAgMjYyLjBRMjQ4OCAyNzMgMjQ2OCAyNzNaTTI2NjAgLTIwUTI2ODggLTIwIDI3MjMuMCAtNDYuMFEyNzU4IC03MiAyNzkwLjUgLTExMi41UTI4MjMgLTE1MyAyODQ1IC0xOTRRMjg2MCAtMjIyIDI4NjcuMCAtMjQ1LjVRMjg3NCAtMjY5IDI4NzQgLTI4NlEyODc0IC0zMjUgMjg0NiAtMzI1UTI4MzMgLTMyNSAyODEyLjUgLTMxMS4wUTI3OTIgLTI5NyAyNzY1IC0yNjBRMjczNiAtMjIwIDI3MDEuNSAtMTU5LjVRMjY2NyAtOTkgMjYzMSAtMzJRMjY0MyAtMjAgMjY2MCAtMjBaTTI5NjIgLTE5NlEyOTcwIC0yMTMgMjk4My4wIC0yNTAuNVEyOTk2IC0yODggMzAxMC4wIC0zMzQuMFEzMDI0IC0zODAgMzAzMSAtNDIxUTMwMzQgLTQzNyAzMDQyLjAgLTQ0NC41UTMwNTAgLTQ1MiAzMDU5IC00NTJRMzA3MiAtNDUyIDMwODMuMCAtNDM5LjVRMzA5NCAtNDI3IDMwOTQgLTQwNFEzMDk0IC0zNzYgMzA3Ny41IC0zNTYuMFEzMDYxIC0zMzYgMzAzNyAtMzE4UTMwNDcgLTMxNyAzMDU4LjAgLTMxNi41UTMwNjkgLTMxNiAzMDgyIC0zMTZRMzEyOSAtMzE2IDMxNzUgLTMyMlEzMTc3IC0zMTYgMzE3NyAtMzEzUTMxNzcgLTMwMCAzMTY5LjUgLTI4MC4wUTMxNjIgLTI2MCAzMTU0IC0yNDRRMzE1MCAtMjM1IDMxMzguMCAtMjExLjVRMzEyNiAtMTg4IDMxMTIuMCAtMTU4LjVRMzA5OCAtMTI5IDMwODguNSAtMTAwLjVRMzA3OSAtNzIgMzA3OSAtNTJRMzA3OSAtMjYgMzA5OSAtMjZRMzExOCAtMjYgMzE1Mi4wIC03MC41UTMxODYgLTExNSAzMjIwIC0xOTNRMzIzMiAtMTkzIDMyMzIgLTE4NFEzMjIxIC0xNTcgMzIwNC41IC0xMjUuMFEzMTg4IC05MyAzMTY4LjAgLTY0LjVRMzE0OCAtMzYgMzEyNS4wIC0xNy41UTMxMDIgMSAzMDc3IDFRMzA1OCAxIDMwMzkuMCAtMTQuNVEzMDIwIC0zMCAzMDIwIC02NVEzMDIwIC05NiAzMDMyLjAgLTEyNS41UTMwNDQgLTE1NSAzMDU5LjAgLTE4MS4wUTMwNzQgLTIwNyAzMDg2LjAgLTIyNy4wUTMwOTggLTI0NyAzMDk4IC0yNTlRMzA5OCAtMjc3IDMwNzUuNSAtMjg1LjBRMzA1MyAtMjkzIDMwMTcgLTI5NFEyOTk5IC0yNDggMjk5MC4wIC0yMjYuMFEyOTgxIC0yMDQgMjk3MyAtMTg0UTI5NTcgLTE4NCAyOTYyIC0xOTZaTTMyMjEgLTE5NlEzMjI5IC0yMTMgMzI0Mi4wIC0yNTAuNVEzMjU1IC0yODggMzI2OS4wIC0zMzQuMFEzMjgzIC0zODAgMzI5MCAtNDIxUTMyOTMgLTQzNyAzMzAxLjAgLTQ0NC41UTMzMDkgLTQ1MiAzMzE4IC00NTJRMzMzMSAtNDUyIDMzNDIuMCAtNDM5LjVRMzM1MyAtNDI3IDMzNTMgLTQwNFEzMzUzIC0zNzYgMzMzNi41IC0zNTYuMFEzMzIwIC0zMzYgMzI5NiAtMzE4UTMzMDYgLTMxNyAzMzE3LjAgLTMxNi41UTMzMjggLTMxNiAzMzQxIC0zMTZRMzM4OCAtMzE2IDM0MzQgLTMyMlEzNDM2IC0zMTYgMzQzNiAtMzEzUTM0MzYgLTMwMCAzNDI4LjUgLTI4MC4wUTM0MjEgLTI2MCAzNDEzIC0yNDRRMzQwOSAtMjM1IDMzOTcuMCAtMjExLjVRMzM4NSAtMTg4IDMzNzEuMCAtMTU4LjVRMzM1NyAtMTI5IDMzNDcuNSAtMTAwLjVRMzMzOCAtNzIgMzMzOCAtNTJRMzMzOCAtMjYgMzM1OCAtMjZRMzM3NyAtMjYgMzQxMS4wIC03MC41UTM0NDUgLTExNSAzNDc5IC0xOTNRMzQ5MSAtMTkzIDM0OTEgLTE4NFEzNDgwIC0xNTcgMzQ2My41IC0xMjUuMFEzNDQ3IC05MyAzNDI3LjAgLTY0LjVRMzQwNyAtMzYgMzM4NC4wIC0xNy41UTMzNjEgMSAzMzM2IDFRMzMxNyAxIDMyOTguMCAtMTQuNVEzMjc5IC0zMCAzMjc5IC02NVEzMjc5IC05NiAzMjkxLjAgLTEyNS41UTMzMDMgLTE1NSAzMzE4LjAgLTE4MS4wUTMzMzMgLTIwNyAzMzQ1LjAgLTIyNy4wUTMzNTcgLTI0NyAzMzU3IC0yNTlRMzM1NyAtMjc3IDMzMzQuNSAtMjg1LjBRMzMxMiAtMjkzIDMyNzYgLTI5NFEzMjU4IC0yNDggMzI0OS4wIC0yMjYuMFEzMjQwIC0yMDQgMzIzMiAtMTg0UTMyMTYgLTE4NCAzMjIxIC0xOTZaTTM0ODAgLTE5NlEzNDg4IC0yMTMgMzUwMS4wIC0yNTAuNVEzNTE0IC0yODggMzUyOC4wIC0zMzQuMFEzNTQyIC0zODAgMzU0OSAtNDIxUTM1NTIgLTQzNyAzNTYwLjAgLTQ0NC41UTM1NjggLTQ1MiAzNTc3IC00NTJRMzU5MCAtNDUyIDM2MDEuMCAtNDM5LjVRMzYxMiAtNDI3IDM2MTIgLTQwNFEzNjEyIC0zNzYgMzU5NS41IC0zNTYuMFEzNTc5IC0zMzYgMzU1NSAtMzE4UTM1NjUgLTMxNyAzNTc2LjAgLTMxNi41UTM1ODcgLTMxNiAzNjAwIC0zMTZRMzY0NyAtMzE2IDM2OTMgLTMyMlEzNjk1IC0zMTYgMzY5NSAtMzEzUTM2OTUgLTMwMCAzNjg3LjUgLTI4MC4wUTM2ODAgLTI2MCAzNjcyIC0yNDRRMzY2OCAtMjM1IDM2NTYuMCAtMjExLjVRMzY0NCAtMTg4IDM2MzAuMCAtMTU4LjVRMzYxNiAtMTI5IDM2MDYuNSAtMTAwLjVRMzU5NyAtNzIgMzU5NyAtNTJRMzU5NyAtMjYgMzYxNyAtMjZRMzYzNiAtMjYgMzY3MC4wIC03MC41UTM3MDQgLTExNSAzNzM4IC0xOTNRMzc1MCAtMTkzIDM3NTAgLTE4NFEzNzM5IC0xNTcgMzcyMi41IC0xMjUuMFEzNzA2IC05MyAzNjg2LjAgLTY0LjVRMzY2NiAtMzYgMzY0My4wIC0xNy41UTM2MjAgMSAzNTk1IDFRMzU3NiAxIDM1NTcuMCAtMTQuNVEzNTM4IC0zMCAzNTM4IC02NVEzNTM4IC05NiAzNTUwLjAgLTEyNS41UTM1NjIgLTE1NSAzNTc3LjAgLTE4MS4wUTM1OTIgLTIwNyAzNjA0LjAgLTIyNy4wUTM2MTYgLTI0NyAzNjE2IC0yNTlRMzYxNiAtMjc3IDM1OTMuNSAtMjg1LjBRMzU3MSAtMjkzIDM1MzUgLTI5NFEzNTE3IC0yNDggMzUwOC4wIC0yMjYuMFEzNDk5IC0yMDQgMzQ5MSAtMTg0UTM0NzUgLTE4NCAzNDgwIC0xOTZaTTM3MzkgLTE5NlEzNzQ3IC0yMTMgMzc2MC4wIC0yNTAuNVEzNzczIC0yODggMzc4Ny4wIC0zMzQuMFEzODAxIC0zODAgMzgwOCAtNDIxUTM4MTEgLTQzNyAzODE5LjAgLTQ0NC41UTM4MjcgLTQ1MiAzODM2IC00NTJRMzg0OSAtNDUyIDM4NjAuMCAtNDM5LjVRMzg3MSAtNDI3IDM4NzEgLTQwNFEzODcxIC0zNzYgMzg1NC41IC0zNTYuMFEzODM4IC0zMzYgMzgxNCAtMzE4UTM4MjQgLTMxNyAzODM1LjAgLTMxNi41UTM4NDYgLTMxNiAzODU5IC0zMTZRMzkwNiAtMzE2IDM5NTIgLTMyMlEzOTU0IC0zMTYgMzk1NCAtMzEzUTM5NTQgLTMwMCAzOTQ2LjUgLTI4MC4wUTM5MzkgLTI2MCAzOTMxIC0yNDRRMzkyNyAtMjM1IDM5MTUuMCAtMjExLjVRMzkwMyAtMTg4IDM4ODkuMCAtMTU4LjVRMzg3NSAtMTI5IDM4NjUuNSAtMTAwLjVRMzg1NiAtNzIgMzg1NiAtNTJRMzg1NiAtMjYgMzg3NiAtMjZRMzg5NSAtMjYgMzkyOS4wIC03MC41UTM5NjMgLTExNSAzOTk3IC0xOTNRNDAwOSAtMTkzIDQwMDkgLTE4NFEzOTk4IC0xNTcgMzk4MS41IC0xMjUuMFEzOTY1IC05MyAzOTQ1LjAgLTY0LjVRMzkyNSAtMzYgMzkwMi4wIC0xNy41UTM4NzkgMSAzODU0IDFRMzgzNSAxIDM4MTYuMCAtMTQuNVEzNzk3IC0zMCAzNzk3IC02NVEzNzk3IC05NiAzODA5LjAgLTEyNS41UTM4MjEgLTE1NSAzODM2LjAgLTE4MS4wUTM4NTEgLTIwNyAzODYzLjAgLTIyNy4wUTM4NzUgLTI0NyAzODc1IC0yNTlRMzg3NSAtMjc3IDM4NTIuNSAtMjg1LjBRMzgzMCAtMjkzIDM3OTQgLTI5NFEzNzc2IC0yNDggMzc2Ny4wIC0yMjYuMFEzNzU4IC0yMDQgMzc1MCAtMTg0UTM3MzQgLTE4NCAzNzM5IC0xOTZaTTM5OTggLTE5NlE0MDA2IC0yMTMgNDAxOS4wIC0yNTAuNVE0MDMyIC0yODggNDA0Ni4wIC0zMzQuMFE0MDYwIC0zODAgNDA2NyAtNDIxUTQwNzAgLTQzNyA0MDc4LjAgLTQ0NC41UTQwODYgLTQ1MiA0MDk1IC00NTJRNDEwOCAtNDUyIDQxMTkuMCAtNDM5LjVRNDEzMCAtNDI3IDQxMzAgLTQwNFE0MTMwIC0zNzYgNDExMy41IC0zNTYuMFE0MDk3IC0zMzYgNDA3MyAtMzE4UTQwODMgLTMxNyA0MDk0LjAgLTMxNi41UTQxMDUgLTMxNiA0MTE4IC0zMTZRNDE2NSAtMzE2IDQyMTEgLTMyMlE0MjEzIC0zMTYgNDIxMyAtMzEzUTQyMTMgLTMwMCA0MjA1LjUgLTI4MC4wUTQxOTggLTI2MCA0MTkwIC0yNDRRNDE4NiAtMjM1IDQxNzQuMCAtMjExLjVRNDE2MiAtMTg4IDQxNDguMCAtMTU4LjVRNDEzNCAtMTI5IDQxMjQuNSAtMTAwLjVRNDExNSAtNzIgNDExNSAtNTJRNDExNSAtMjYgNDEzNSAtMjZRNDE1NCAtMjYgNDE4OC4wIC03MC41UTQyMjIgLTExNSA0MjU2IC0xOTNRNDI2OCAtMTkzIDQyNjggLTE4NFE0MjU3IC0xNTcgNDI0MC41IC0xMjUuMFE0MjI0IC05MyA0MjA0LjAgLTY0LjVRNDE4NCAtMzYgNDE2MS4wIC0xNy41UTQxMzggMSA0MTEzIDFRNDA5NCAxIDQwNzUuMCAtMTQuNVE0MDU2IC0zMCA0MDU2IC02NVE0MDU2IC05NiA0MDY4LjAgLTEyNS41UTQwODAgLTE1NSA0MDk1LjAgLTE4MS4wUTQxMTAgLTIwNyA0MTIyLjAgLTIyNy4wUTQxMzQgLTI0NyA0MTM0IC0yNTlRNDEzNCAtMjc3IDQxMTEuNSAtMjg1LjBRNDA4OSAtMjkzIDQwNTMgLTI5NFE0MDM1IC0yNDggNDAyNi4wIC0yMjYuMFE0MDE3IC0yMDQgNDAwOSAtMTg0UTM5OTMgLTE4NCAzOTk4IC0xOTZaIi8+PC9nPjwvc3ZnPg=="},ag=`
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
.li-sub{position:absolute;left:0;right:0;top:20px;text-align:center;z-index:12;pointer-events:none;transform:translateY(-100%);will-change:opacity;line-height:1}
.li-sub .a{display:block;font-family:'Great Vibes',cursive;font-weight:400;font-size:clamp(46px,5.2vw,76px);line-height:1.1;padding:.1em .15em;background-image:linear-gradient(100deg,#7d5c1f 0%,#b98f3d 24%,#efd48b 46%,#c5a059 60%,#8a6a28 80%,#c9a352 100%);background-size:260% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}
.li-sub .b{display:block;margin-top:.1em;font-family:Montserrat,ui-sans-serif,system-ui,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#231d17;font-size:clamp(20px,2.3vw,32px)}
@media(max-width:860px){.li-sub .a{font-size:clamp(38px,11vw,56px)}.li-sub .b{font-size:clamp(17px,5vw,24px)}}
.li-seal{width:96px;height:96px;top:262px}
.li-envelope-paper,.li-left,.li-right,.li-pocket,.li-flap-front,.li-liner,.li-flap-inside{-webkit-mask:radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 100%/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-y,radial-gradient(circle,#000 13.4px,transparent 14px) 100% 0/27px 27px repeat-y,linear-gradient(#000,#000) 50% 50%/calc(100% - 22px) calc(100% - 22px) no-repeat;mask:radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 100%/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-y,radial-gradient(circle,#000 13.4px,transparent 14px) 100% 0/27px 27px repeat-y,linear-gradient(#000,#000) 50% 50%/calc(100% - 22px) calc(100% - 22px) no-repeat}
`,og='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2048" height="1201" viewBox="0 0 2048 1201"><defs><filter id="grain" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="2.4" intercept="-1.37"/><feFuncG type="linear" slope="2.4" intercept="-1.37"/><feFuncB type="linear" slope="2.4" intercept="-1.37"/></feComponentTransfer></filter></defs><image width="2048" height="1201" filter="url(#grain)" xlink:href="__PAPER_JPEG__"/></svg>',Ka;function lg(){return Ka||(Ka=(async()=>{let n=await fetch(ss.paperColor,{mode:"cors"});if(!n.ok)throw new Error(`Paper texture failed to load (${n.status}).`);let t=await n.arrayBuffer(),e=await new Promise((r,a)=>{let o=new FileReader;o.onload=()=>r(String(o.result)),o.onerror=()=>a(o.error||new Error("Paper texture could not be read.")),o.readAsDataURL(new Blob([t],{type:"image/jpeg"}))}),i=og.replace("__PAPER_JPEG__",e),s=URL.createObjectURL(new Blob([i],{type:"image/svg+xml"}));try{let r=new Image;return r.src=s,await r.decode(),s}catch(r){throw URL.revokeObjectURL(s),r}})().catch(n=>{throw Ka=void 0,n})),Ka}var{SCROLL_EXTENSION:Al,authoredClock:cg,scrollClock:ug}=(()=>{let t=.1637489716078054,e=.245,i=e-t,s=i+.035;function r(o){if(o<=t)return o;if(o>=e+.035)return o-.035;let c=(o-t)/s;return t+i*c+.035*c*(1-c)*(1-2*c)}function a(o){if(o<=t)return o;if(o>=e)return o+.035;let c=t,l=e+.035;for(let h=0;h<32;h++){let f=(c+l)/2;r(f)<o?c=f:l=f}return(c+l)/2}return{SCROLL_EXTENSION:.035,authoredClock:r,scrollClock:a}})(),{applyRibbonWithdrawal:hg}=(()=>{let n=h=>Math.max(0,Math.min(1,h)),t=(h,f,u)=>{let d=n((u-h)/(f-h));return d*d*(3-2*d)},e=new _,i=new _,s=new _,r=new _,a=new _,o=new Ge;function c(h,f,u){let d=h.x,g=h.y,y=h.z;if(u.set(0,0,0),f<=.72)return u;let p=n((d+1.38)/4.8);if(p<=0||p>=1)return u;let m=t(-.1,.025,y),T=1-t(.18,.45,Math.abs(g+.2)),R=t(.72,.88,f),A=-1.38+4.8*t(.725,.875,f),b=.35+.65*t(d-.85,d+.85,A),E=Math.pow(Math.sin(Math.PI*p),2)*m*T*R*b;return u.set(-.055*E,-.42*E,.46*E),u}function l(h,f,u,d){d<=.72||(e.copy(f),s.copy(h).addScaledVector(e,5e-4),r.copy(h).addScaledVector(e,-5e-4),c(s,d,s),c(r,d,r),i.copy(e).addScaledVector(s.sub(r),1e3).normalize(),c(h,d,a),h.add(a),o.setFromUnitVectors(e,i),u.applyQuaternion(o).normalize(),f.copy(i))}return{applyRibbonWithdrawal:l}})(),{createRibbonStrips:dg}=(()=>{let a=R=>Math.max(0,Math.min(1,R)),o=(R,A,b)=>{let E=a((b-R)/(A-R));return E*E*(3-2*E)},c=(R,A,b)=>R+(A-R)*b,l=[0,0,1],h=[0,0,-1],f=[];function u(R,A,b,E=0,M=0,S=l){f.push({p:new _(R,A,b),roll:E,fold:M,n:new _(...S)})}function d(R,A,b,E=0,M=0){u(-1.7+R,-.2+A,b,E,M)}d(-.43,-.95,.065,-.25),d(-.37,-.74,.065,-.15),d(-.24,-.48,.18,.15,.12),d(-.08,-.15,.19,.5,.6),d(.08,-.08,.15,.55,.65),d(.38,-.09,.14,.24,.12),d(.7,-.02,.2,.4),d(.84,.18,.3,1.15),d(.79,.37,.24,2.45),d(.56,.39,.18,2),d(.32,.24,.18,1.1,.12),d(.03,.01,.16,.5,.6),d(.04,-.015,.09,.15,.3),d(.32,0,.045),u(2.8,-.2,.043),u(3.25,-.2,.043),u(3.39,-.2,.043),u(3.411,-.2,.005,0,0,[.7,0,.7]),u(3.416,-.2,-.045,0,0,[1,0,0]),u(3.408,-.2,-.105,0,0,[.6,0,-.8]),u(3.28,-.2,-.13,0,0,h),u(2.9,-.2,-.13,0,0,h),u(1.8,.55,-.13,0,0,h),u(-.7,1.65,-.13,0,0,h),u(-1.7,1.94,-.13,0,0,h),u(-1.7,2.16,-.13,0,0,h),u(-1.7,2.208,-.1,0,0,[0,.6,-.8]),u(-1.7,2.216,-.045,0,0,[0,1,0]),u(-1.7,2.211,.015,0,0,[0,.6,.8]),u(-1.7,2.19,.036),u(-1.7,1.93,.036),u(-1.7,1.2,.036),u(-1.7,-.2,.036),u(-1.7,-1.4,.036),u(-1.7,-2.1,.036),u(-1.7,-2.19,.036),u(-1.7,-2.211,.015,0,0,[0,-.6,.8]),u(-1.7,-2.216,-.045,0,0,[0,-1,0]),u(-1.7,-2.208,-.1,0,0,[0,-.6,-.8]),u(-1.7,-2.16,-.13,0,0,h),u(-1.7,-1.93,-.13,0,0,h),u(-2.65,-1.05,-.13,0,0,h),u(-3.14,-.2,-.13,0,0,h),u(-3.32,-.2,-.13,0,0,h),u(-3.408,-.2,-.105,0,0,[-.6,0,-.8]),u(-3.416,-.2,-.045,0,0,[-1,0,0]),u(-3.411,-.2,.005,0,0,[-.7,0,.7]),u(-3.39,-.2,.043),u(-3.15,-.2,.043),u(-1.7-.4,-.2,.043),u(-1.7-.12,-.2-.01,.08,.2,.2),d(-.06,-.12,.1,.05,.3),d(-.04,-.16,.18,.05,.25),d(.015,-.11,.3,.06,.25),d(.025,.09,.3,.06,.22),d(-.01,.145,.2,.05,.2),d(-.045,.11,.085,.15,.35),d(-.12,0,.1,.35,.5),d(-.38,-.09,.22,.35,.1),d(-.68,-.04,.27,.75),d(-.86,.14,.25,1.6),d(-.79,.33,.18,2.55),d(-.58,.35,.14,2.85),d(-.31,.2,.12,2.95,.1),d(-.06,.02,.11,2.55,.55),d(.05,-.15,.15,1,.55),d(.19,-.37,.15,.2,.12),d(.38,-.69,.09,-.25),d(.46,-.92,.095,-.6);function g(R=0,A=0,b=0){let E=f.map(ct=>({...ct,p:ct.p.clone(),n:ct.n.clone()}));E[4].p.z=c(E[4].p.z,.12,b);for(let ct=5;ct<=10;ct++){let Jt=[.72,1,1,1,1,.75][ct-5],at=R*Jt;E[ct].p.x=-1.7+.12+(E[ct].p.x- -1.7-.12)*(1-.34*at),E[ct].p.y=-.2+.025+(E[ct].p.y- -.2-.025)*(1-.25*at),E[ct].p.z=.11+(E[ct].p.z-.11)*(1-.2*at),E[ct].fold*=1-.35*R}for(let ct=51;ct<=57;ct++){let Jt=Math.sin((ct-50)/8*Math.PI);E[ct].p.z+=.075*A*Jt,E[ct].p.y+=.045*A*Jt*(ct<54?-1:1),E[ct].fold*=1-.7*A}for(let ct=58;ct<=64;ct++){let Jt=Math.sin((ct-57)/8*Math.PI),at=A*Jt;E[ct].p.x=-1.7-.1+(E[ct].p.x- -1.7+.1)*(1-.21*at),E[ct].p.y=-.2+.015+(E[ct].p.y- -.2-.015)*(1-.3*at),E[ct].p.z=.065+(E[ct].p.z-.065)*(1-.55*at),E[ct].roll*=1-.25*at,E[ct].fold*=1-.55*at}let M=new ws(E.map(ct=>ct.p),!1,"centripetal");M.arcLengthDivisions=6e3;let S=M.getLength(),O=[],C=[],L=[],B=[],H=[],w=new _,k=new _,Q=new Ge,z=new _;for(let ct=0;ct<=3600;ct++){let Jt=ct/3600,at=M.getUtoTmapping(Jt),Et=M.getPoint(at),yt=M.getTangent(at).normalize(),pt=at*(f.length-1),zt=Math.min(f.length-2,Math.floor(pt)),Ut=pt-zt,ee=E[zt].n.clone().lerp(E[zt+1].n,Ut).normalize(),Gt=new _().crossVectors(ee,yt);ct&&(Q.setFromUnitVectors(k,yt),z.copy(w).applyQuaternion(Q)),Gt.lengthSq()<.015&&Gt.copy(ct?z:new _(1,0,0)),Gt.normalize(),ct&&Gt.dot(z)<0&&Gt.negate(),w.copy(Gt),k.copy(yt),O.push(Et),C.push(Gt),H.push(yt),L.push(c(E[zt].roll,E[zt+1].roll,Ut)),B.push(c(E[zt].fold,E[zt+1].fold,Ut))}let tt=O[0],V=H[0].clone().negate(),G=tt.clone().addScaledVector(V,2);G.z=Math.max(tt.z,G.z);let $=new Xn(tt.clone(),G,new _(-9,-5,.2),new _(-S-64,-14,.26));$.arcLengthDivisions=4e3;let ft=M.getLengths(),_t=ft[Math.round(M.arcLengthDivisions*13/(f.length-1))],j=ft[Math.round(M.arcLengthDivisions*4/(f.length-1))],ut=ft[Math.round(M.arcLengthDivisions*51/(f.length-1))],vt=ft[Math.round(M.arcLengthDivisions*57/(f.length-1))],Dt=ft[Math.round(M.arcLengthDivisions*57/(f.length-1))],gt=ft[Math.round(M.arcLengthDivisions*65/(f.length-1))];return{length:S,points:O,sides:C,rolls:L,folds:B,tangents:H,releaseLength:_t,bightStartLength:j,collarStartLength:ut,collarEndLength:vt,leftLoopStartLength:Dt,leftLoopEndLength:gt,exitCurve:$,exitLength:$.getLength()}}let y=g(),p=y.length;class m extends fn{constructor(A){super(),this.controls=A}getPoint(A,b=new _){let E=1-A,M=this.controls;return b.set(0,0,0).addScaledVector(M[0],E*E*E*E).addScaledVector(M[1],4*E*E*E*A).addScaledVector(M[2],6*E*E*A*A).addScaledVector(M[3],4*E*A*A*A).addScaledVector(M[4],A*A*A*A)}}function T(R){let A=new hi;A.name="one-continuous-cross-wrap";let b=new ni,E=new ke(new Float32Array(1281*21*3),3),M=new ke(new Float32Array(1281*21*2),2);E.setUsage(Xa),b.setAttribute("position",E),b.setAttribute("uv",M);let S=[];for(let at=0;at<1280;at++)for(let Et=0;Et<20;Et++){let yt=at*21+Et,pt=yt+20+1;S.push(yt,pt,yt+1,yt+1,pt,pt+1)}b.setIndex(S);for(let at=0;at<=1280;at++)for(let Et=0;Et<=20;Et++)M.setXY(at*21+Et,at/1280*p,Et/20*.235);let O=new fe(b,R);O.name="single-material-ribbon",O.castShadow=!0,O.receiveShadow=!0,O.frustumCulled=!1,A.add(O);let C=new _,L=new _,B=new _,H=new _,w=new _,k=new Float64Array(21),Q=new Float64Array(21),z=-1,tt=-1,V=!1,G=y,$=0,ft=new _(-.9,-.435,0).normalize(),_t=.72,j=null,ut=0;function vt(at,Et=G){let yt=a(at/Et.length)*3600,pt=Math.min(3599,Math.floor(yt)),zt=yt-pt;return{p:Et.points[pt].clone().lerp(Et.points[pt+1],zt),t:Et.tangents[pt].clone().lerp(Et.tangents[pt+1],zt).normalize(),s:Et.sides[pt].clone().lerp(Et.sides[pt+1],zt).normalize(),roll:c(Et.rolls[pt],Et.rolls[pt+1],zt),fold:c(Et.folds[pt],Et.folds[pt+1],zt)}}function Dt(at,Et,yt){if(at<1e-7)return null;let pt=vt(Et),zt=vt(G.bightStartLength),Ut=new _(-1.7-.03,-.2-.1,.11),ee=new _(-1.7-.15,-.2-.23,.12),Gt=new _(-.93,-.37,0).normalize(),ye=new _(-.45,-.89,0).normalize(),jt=pt.p.distanceTo(Ut),Me=Ut.clone().sub(pt.p).normalize(),ne=o(-.1,.8,pt.t.dot(Me)),ae=Math.max(Math.min(.18,jt*.28),.24*ne);yt>.535&&pt.t.z<0&&(ae=Math.min(ae,.04/-pt.t.z));let P=pt.p.clone().addScaledVector(pt.t,-ae);P.z=Math.max(.07,P.z);let ce=pt.p.clone().lerp(Ut,.42);ce.z+=(.5-.25*o(.535,.565,yt))*ne;let ie=new m([pt.p.clone(),P,ce,Ut.clone().addScaledVector(Gt,-ae),Ut.clone()]);ie.arcLengthDivisions=500;let Mt=Ut.clone().addScaledVector(Gt,.05);Mt.z=.1;let it=ee.clone().addScaledVector(ye,-.045);it.z=.1;let Xt=new Xn(Ut.clone(),Mt,it,ee.clone());Xt.arcLengthDivisions=300;let mt=jt<.003?0:ie.getLength(),Rt=Xt.getLength(),v=Math.max(.001,at-mt-Rt),x=G.points[0].clone();x.z+=.14*o(.02,.28,yt);let U=pt.p.clone().sub(x),et=U.dot(ft),Z=Math.max(0,U.lengthSq()-et*et),lt=Math.max(0,et+Math.sqrt(Math.max(0,at*at-Z)))*(.82+.12*o(.5,.66,yt)),Y=x.clone().addScaledVector(ft,lt),J=Math.min(.36,v*.2),dt=ee.clone().lerp(Y,.45);function N(Yt){let de=ee.clone().addScaledVector(ye,J*Yt),Ae=Y.clone().addScaledVector(ft,-J*Yt),Ye=dt.clone();Ye.z+=Math.min(.18,v*.12)*Yt;let sn=new m([ee.clone(),de,Ye,Ae,Y.clone()]);return sn.arcLengthDivisions=180,sn}let K=Math.max(v,N(.12).getLength()),q=.12,ot=1,rt;for(;N(ot).getLength()<K&&ot<8;)ot*=1.5;for(let Yt=0;Yt<20;Yt++){let de=(q+ot)/2;rt=N(de),rt.getLength()<K?q=de:ot=de}rt=N((q+ot)/2),rt.arcLengthDivisions=800,rt.updateArcLengths();let ht=rt.getLength(),Nt=mt+Rt+ht,Ht=[],nt=[],wt=[],Vt=new Ge,At=pt.t.clone(),re=pt.s.clone().applyAxisAngle(pt.t,pt.roll),he=640;for(let Yt=0;Yt<=he;Yt++){let de=Yt/he*Nt,Ae,Ye;de<mt?(Ae=ie,Ye=de/mt):de<mt+Rt?(Ae=Xt,Ye=(de-mt)/Rt):(Ae=rt,Ye=(de-mt-Rt)/ht);let sn=Ae.getPointAt(a(Ye)),Bi=Ae.getTangentAt(a(Ye)).negate().normalize(),An=re.clone();Yt&&(Vt.setFromUnitVectors(At,Bi),An.applyQuaternion(Vt).normalize()),Ht.push(sn),nt.push(An),wt.push(Bi),re=An,At=Bi}let Qe=null,Ui=new _,rs=new _;for(let Yt=0;Yt<=he;Yt++){if(Ui.crossVectors(new _(0,0,1),wt[Yt]),Ui.lengthSq()<1e-6)continue;Ui.normalize();let de=Math.atan2(wt[Yt].dot(rs.crossVectors(nt[Yt],Ui)),nt[Yt].dot(Ui));if(Qe!==null){for(;de-Qe>Math.PI;)de-=Math.PI*2;for(;de-Qe<-Math.PI;)de+=Math.PI*2}Qe=de;let Ae=Yt/he*Nt;nt[Yt].applyAxisAngle(wt[Yt],de*o(0,Math.max(.02,mt*(.85-.25*o(.535,.565,yt))),Ae))}let en=o(0,.08,yt),nn=[];for(let Yt=0;Yt<=he;Yt++){let de=Yt/he*Nt;if(nn[Yt]=pt.fold*(1-o(0,Math.max(.02,mt*.8),de)),en<1){let Ae=vt(y.bightStartLength*(1-Yt/he),y);Ht[Yt].lerp(Ae.p,1-en),wt[Yt].lerp(Ae.t,1-en).normalize();let Ye=Ae.s.applyAxisAngle(Ae.t,Ae.roll);nt[Yt].lerp(Ye,1-en),nt[Yt].addScaledVector(wt[Yt],-nt[Yt].dot(wt[Yt])).normalize(),nn[Yt]=c(Ae.fold,nn[Yt],en)}}return{points:Ht,sides:nt,tangents:wt,folds:nn,N:he,length:at,fold:pt.fold,head:Ht[he].clone(),connectorLength:mt,throatLength:Rt,drawnLength:ht/Nt*at,actualLength:Nt,throatIn:Ut.toArray(),throatOut:ee.toArray()}}function gt(at){if(at<-$){let yt=j?j.head:G.points[0];return C.copy(yt).addScaledVector(ft,-$-at),L.copy(ft).negate(),B.copy(j?j.sides[j.N]:G.sides[0]),{roll:0,fold:0}}if(j&&at<ut){let yt=ut-at,pt=a(yt/j.length)*j.N,zt=Math.min(j.N-1,Math.floor(pt)),Ut=pt-zt;return C.copy(j.points[zt]).lerp(j.points[zt+1],Ut),L.copy(j.tangents[zt]).lerp(j.tangents[zt+1],Ut).normalize(),B.copy(j.sides[zt]).lerp(j.sides[zt+1],Ut).normalize(),{roll:0,fold:c(j.folds[zt],j.folds[zt+1],Ut)}}let Et=vt(at);return C.copy(Et.p),L.copy(Et.t),B.copy(Et.s),{roll:Et.roll,fold:Et.fold}}function ct(at){if(at>=.08)return;let Et=21,yt=p/1280;function pt(Mt,it){let Xt=[],mt=Math.max(0,Math.floor(($+Mt)/yt)),Rt=Math.min(1280,Math.ceil(($+it)/yt));function v(et,Z,st){let lt=E.getX(et),Y=E.getY(et),J=E.getZ(et),dt=E.getX(Z),N=E.getY(Z),K=E.getZ(Z),q=E.getX(st),ot=E.getY(st),rt=E.getZ(st),ht=(N-ot)*(lt-q)+(q-dt)*(Y-ot);Math.abs(ht)<1e-10||Xt.push({ax:lt,ay:Y,az:J,bx:dt,by:N,bz:K,cx:q,cy:ot,cz:rt,den:ht,x0:Math.min(lt,dt,q),x1:Math.max(lt,dt,q),y0:Math.min(Y,N,ot),y1:Math.max(Y,N,ot)})}for(let et=mt;et<Rt;et++)for(let Z=0;Z<20;Z++){let st=et*Et+Z,lt=st+Et;v(st,lt,st+1),v(st+1,lt,lt+1)}let x=new Map,U=.12;for(let et of Xt)for(let Z=Math.floor(et.x0/U);Z<=Math.floor(et.x1/U);Z++)for(let st=Math.floor(et.y0/U);st<=Math.floor(et.y1/U);st++){let lt=Z+","+st,Y=x.get(lt);Y||(Y=[],x.set(lt,Y)),Y.push(et)}return x}let zt=pt(G.leftLoopStartLength,G.leftLoopEndLength),Ut=pt(G.collarStartLength,G.collarEndLength);function ee(Mt,it,Xt){let mt=-1/0,Rt=Mt.get(Math.floor(it/.12)+","+Math.floor(Xt/.12))||[];for(let v of Rt){if(it<v.x0||it>v.x1||Xt<v.y0||Xt>v.y1)continue;let x=((v.by-v.cy)*(it-v.cx)+(v.cx-v.bx)*(Xt-v.cy))/v.den,U=((v.cy-v.ay)*(it-v.cx)+(v.ax-v.cx)*(Xt-v.cy))/v.den;x>=-1e-7&&U>=-1e-7&&x+U<=1.0000001&&(mt=Math.max(mt,x*v.az+U*v.bz+(1-x-U)*v.cz))}return mt}let Gt=Math.floor(.6/yt),ye=Math.ceil(($+G.bightStartLength+.15)/yt),jt=[],Me=.05,ne=.006;for(let Mt=Gt;Mt<=ye;Mt++){let it=[];for(let x=0;x<=20;x++)it.push(new _().fromBufferAttribute(E,Mt*Et+x));let Xt=it[20/2].clone(),mt=it[20].clone().sub(it[0]),Rt=new _(-mt.y,mt.x,0).normalize(),v=Math.atan2(mt.z,Math.hypot(mt.x,mt.y));jt.push({row:Mt,points:it,centre:Xt,axis:Rt,angle:v,flatten:0,drop:0})}function ae(Mt,it,Xt=!1){let mt=0,Rt=1/0;for(let v=0;v<=20;v++){let x=Mt.points[v].clone().sub(Mt.centre).applyAxisAngle(Mt.axis,Mt.angle*it).add(Mt.centre);Rt=Math.min(Rt,x.z);let U=ee(zt,x.x,x.y);U>-1/0&&ee(Ut,x.x,x.y)<=x.z+.002&&(mt=Math.max(mt,x.z-U+ne)),Xt&&E.setXYZ(Mt.row*Et+v,x.x,x.y,x.z)}return{required:Math.max(0,mt),available:Math.max(0,Rt-Me)}}for(let Mt of jt){let it=ae(Mt,0);if(it.required>it.available){let Xt=0,mt=1;for(let Rt=0;Rt<12;Rt++){let v=(Xt+mt)/2,x=ae(Mt,v);x.required<=x.available?mt=v:Xt=v}Mt.flatten=Math.min(1,mt+.015)}}let P=yt/.1;for(let Mt=1;Mt<jt.length;Mt++)jt[Mt].flatten=Math.max(jt[Mt].flatten,jt[Mt-1].flatten-P);for(let Mt=jt.length-2;Mt>=0;Mt--)jt[Mt].flatten=Math.max(jt[Mt].flatten,jt[Mt+1].flatten-P);let ce=1-o(.06,.08,at);for(let Mt of jt){let it=ae(Mt,Mt.flatten*ce,!0);Mt.drop=it.required,Mt.available=it.available}let ie=yt*.8;for(let Mt=1;Mt<jt.length;Mt++)jt[Mt].drop=Math.max(jt[Mt].drop,jt[Mt-1].drop-ie);for(let Mt=jt.length-2;Mt>=0;Mt--)jt[Mt].drop=Math.max(jt[Mt].drop,jt[Mt+1].drop-ie);for(let Mt of jt){let it=Math.min(Mt.drop,Mt.available)*ce;if(!(it<=0))for(let Xt=0;Xt<=20;Xt++){let mt=Mt.row*Et+Xt;E.setZ(mt,E.getZ(mt)-it)}}}function Jt(at=0,Et=16){if(V)return;let yt=a(at);if(yt===z&&Et===tt)return;z=yt,tt=Et;let pt=o(.02,.46,yt),zt=o(.48,.7,yt);G=yt===0?y:g(pt,zt,o(0,.08,yt)),$=p-G.length,ut=c(G.bightStartLength,G.releaseLength,o(.34,.67,yt)),j=yt===0?null:Dt(Math.max(0,$+ut),ut,yt);let Ut=(p+Et)*o(_t,1,yt);for(let ee=0;ee<=1280;ee++){let Gt=ee/1280,ye=Gt*p-Ut,{roll:jt,fold:Me}=gt(ye-$);hg(C,L,B,yt),B.applyAxisAngle(L,jt),H.crossVectors(L,B).normalize(),k[0]=0,Q[0]=0;for(let ne=1;ne<=20;ne++){let ae=(ne-.5)/20,P=.12*Math.sin(ae*Math.PI*2+ye*.65)*(1-Me),ce=.86*Me*Math.sin(ae*Math.PI*4+.4)+P+.07*(ae-.5);k[ne]=k[ne-1]+Math.cos(ce)*.235/20,Q[ne]=Q[ne-1]+Math.sin(ce)*.235/20}for(let ne=0;ne<=20;ne++){let ae=ne/20,ce=45e-5*Math.pow(Math.abs(ae*2-1),8)*(Math.sin(ye*48+ae*5)+.4*Math.sin(ye*97));w.copy(C).addScaledVector(B,k[ne]-k[20/2]).addScaledVector(H,Q[ne]-Q[20/2]+ce),E.setXYZ(ee*21+ne,w.x,w.y,w.z)}}ct(yt),E.needsUpdate=!0,b.computeVertexNormals(),A.visible=yt<.9999,A.userData.ribbonMetrics={progress:yt,materialLength:p,width:.235,meshCount:1,freeEnds:2,pull:ut+Ut,tailDistance:p-Ut,guideLength:p,anchoredUntil:_t,bowReleased:ut>=G.releaseLength-1e-4,heldUntil:_t,bightStart:$+Math.max(ut,G.bightStartLength)+Ut,bightEnd:$+G.releaseLength+Ut,bightLength:Math.max(0,G.releaseLength-Math.max(ut,G.bightStartLength)),freeTailLength:Math.max(0,$+ut),contraction:pt,relaxation:zt,connectorLength:j?.connectorLength||0,throatLength:j?.throatLength||0,drawnMaterialEnd:Ut+(j?.drawnLength||0),throatIn:j?.throatIn,throatOut:j?.throatOut}}return Jt(0),{group:A,update:Jt,dispose(){V||(V=!0,b.dispose(),A.clear())}}}return{createRibbonStrips:T}})(),{createRibbonContact:fg}=(()=>{function n(t,e,i,s){let a=new Ce(1536,1536),o=new Ce(1536,1536),c=new Ce(1536,1536,{depthBuffer:!1});for(let p of[a,o,c])p.texture.generateMipmaps=!1;let l=new mn,h=new Ve({uniforms:{castPass:{value:0}},vertexShader:`
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
      }`,side:Xe}),f=new Pi,u=new Ve({uniforms:{source:{value:a.texture},direction:{value:new qt(1/1536,0)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D source;uniform vec2 direction;varying vec2 vUv;void main(){vec4 c=texture2D(source,vUv)*.227027;c+=texture2D(source,vUv+direction*1.384615)*.316216;c+=texture2D(source,vUv-direction*1.384615)*.316216;c+=texture2D(source,vUv+direction*3.230769)*.070270;c+=texture2D(source,vUv-direction*3.230769)*.070270;gl_FragColor=c;}",depthTest:!1,depthWrite:!1}),d=new fe(new si(2,2),u);f.add(d);let g=[o,a].map((p,m)=>{let T=new Xi({map:p.texture,transparent:!0,depthWrite:!1,toneMapped:!1}),R=new fe(new si(6.8,4.4),T);return R.position.z=.001+m*2e-4,R.renderOrder=m,i.add(R),R});function y(p,m,T){h.uniforms.castPass.value=m,e.overrideMaterial=h,t.setRenderTarget(p),t.render(e,l),e.overrideMaterial=null,u.uniforms.source.value=p.texture,u.uniforms.direction.value.set(T/1536,0),t.setRenderTarget(c),t.render(f,l),u.uniforms.source.value=c.texture,u.uniforms.direction.value.set(0,T/1536),t.setRenderTarget(p),t.render(f,l)}return{update(){let p=t.getRenderTarget(),m=e.overrideMaterial;for(let T of g)T.visible=!1;s.visible=!1;try{y(a,0,1.5),y(o,1,5.5)}finally{e.overrideMaterial=m;for(let T of g)T.visible=!0;s.visible=!0,t.setRenderTarget(p)}},dispose(){a.dispose(),o.dispose(),c.dispose(),h.dispose(),u.dispose(),d.geometry.dispose();for(let p of g)p.geometry.dispose(),p.material.dispose(),i.remove(p)}}}return{createRibbonContact:n}})(),{createVellum:pg}=(()=>{let i=a=>Math.max(0,Math.min(1,a)),s=(a,o,c)=>{let l=i((c-a)/(o-a));return l*l*(3-2*l)};function r({bumpMap:a=null,map:o=null,inkMap:c=null}={}){let l=new si(4.08,6.28,30,54),h=l.getAttribute("position"),f=new Float32Array(h.array);h.setUsage(Xa);let u=new Ve({uniforms:{tScene:{value:null},uResolution:{value:new qt(1,1)},uHasScene:{value:0},uPaperMap:{value:o},uBump:{value:a},uInkMap:{value:c},uHasPaperMap:{value:o?1:0},uHasBump:{value:a?1:0},uHasInkMap:{value:c?1:0},uPaperColor:{value:new kt(16776437)},uPeel:{value:0}},vertexShader:`
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
    `,transparent:!1,side:Xe,depthTest:!0,depthWrite:!0}),d=new fe(l,u);d.name="vellum-sheet",d.position.z=.016,d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!1;let g=[];for(let H=0;H<h.count;H++){let w=f[H*3],k=f[H*3+1];(Math.abs(Math.abs(w)-4.08/2)<1e-4||Math.abs(Math.abs(k)-6.28/2)<1e-4)&&g.push(H)}g.sort((H,w)=>Math.atan2(f[H*3+1],f[H*3])-Math.atan2(f[w*3+1],f[w*3]));let y=new ni,p=new ke(new Float32Array(g.length*3),3);y.setAttribute("position",p);let m=new Gn({color:11970699,transparent:!0,opacity:.2,depthWrite:!1}),T=new Ss(y,m);T.frustumCulled=!1,d.add(T);let R=Math.cos(Math.PI/8),A=Math.sin(Math.PI/8),b=-A,E=R,M=4.08*.5*R+6.28*.5*A,S=-1,O=!1;function C(H=0,w=0){if(O)return;let k=i(Number.isFinite(H)?H:0);if(k===S)return;S=k,u.uniforms.uPeel.value=k;let Q=s(.015,.87,k),z=s(.49,.97,k),tt=M-(M*2+.12)*Q,V=.82+.2*s(.25,.85,k),G=2.55,$=V*G;for(let ft=0;ft<h.count;ft++){let _t=ft*3,j=f[_t],ut=f[_t+1],vt=j*R+ut*A,Dt=j*b+ut*E,gt=Math.max(0,vt-tt);if(gt===0){h.setXYZ(ft,j,ut,0);continue}let ct=Math.min(gt,$),Jt=ct/V,at=gt-ct,Et=tt+V*Math.sin(Jt)+at*Math.cos(G),yt=V*(1-Math.cos(Jt))+at*Math.sin(G);h.setXYZ(ft,R*Et+b*Dt,A*Et+E*Dt,yt)}h.needsUpdate=!0,g.forEach((ft,_t)=>p.setXYZ(_t,h.getX(ft),h.getY(ft),h.getZ(ft)+.001)),p.needsUpdate=!0,l.computeVertexNormals(),d.position.set(5.6*z,6.6*z,.016+1.15*z),d.rotation.set(-.07*z,.1*z,-.1*z),d.visible=k<.995}function L(H,w,k){O||(u.uniforms.tScene.value=H,u.uniforms.uHasScene.value=H?1:0,u.uniforms.uResolution.value.set(Math.max(1,w),Math.max(1,k)))}function B(){O||(O=!0,l.dispose(),u.dispose(),y.dispose(),m.dispose())}return C(0,0),{mesh:d,update:C,setBackground:L,dispose:B}}return{createVellum:r}})(),{createVellumMaterials:mg}=(()=>{function t(l){return()=>{l|=0,l=l+1831565813|0;let h=Math.imul(l^l>>>15,1|l);return h=h+Math.imul(h^h>>>7,61|h)^h,((h^h>>>14)>>>0)/4294967296}}function e(l,h){let f=document.createElement("canvas");return f.width=l,f.height=h,{canvas:f,context:f.getContext("2d",{alpha:!0})}}async function i(){let l=await fetch(ss.logo);if(!l.ok)throw new Error(`Le Invite logo failed to load (${l.status}).`);let h=(await l.text()).replace(/width="100%"/,'width="165.43" height="45.9"').replaceAll("currentColor","#000000"),f=URL.createObjectURL(new Blob([h],{type:"image/svg+xml"}));try{let u=new Image;return u.src=f,await u.decode(),u}finally{URL.revokeObjectURL(f)}}function s(l,h){let{canvas:f,context:u}=e(660,Math.round(205.39632153860518));return u.drawImage(l,0,0,f.width,f.height),u.globalCompositeOperation="source-in",u.fillStyle=h,u.fillRect(0,0,f.width,f.height),f}function r(l,h,f,u,d){l.drawImage(h,f,u,d,d/3.2133)}function a(){let{canvas:l,context:h}=e(800,1240),f=t(67),u=h.createImageData(800,1240);for(let d=0;d<u.data.length;d+=4){let g=f()*4;u.data[d]=250+g,u.data[d+1]=247+g,u.data[d+2]=234+g,u.data[d+3]=255}h.putImageData(u,0,0);for(let d=0;d<3800;d++){let g=f()*800,y=f()*1240;h.strokeStyle=f()>.5?"rgba(255,255,249,.16)":"rgba(206,192,158,.085)",h.lineWidth=.4+f()*.65,h.beginPath(),h.moveTo(g,y),h.quadraticCurveTo(g+4,y+1,g+1+f()*11,y+(f()-.5)*7),h.stroke()}return l}function o(l,h){let{canvas:f,context:u}=e(1200,1860);return u.scale(3,3),r(u,s(l,"#2b2a26"),70,250,260),u.textAlign="center",u.textBaseline="alphabetic",u.font=`500 21px ${h}`,u.fillStyle="#2b2a26",u.fillText("Jak kao hirur\u0161ki \u010Delik.",200,380),f}async function c(l="Arial, sans-serif"){let[,h,f]=await Promise.all([document.fonts.load(`400 24px ${l}`),i(),(async()=>{let g=new Image;return g.crossOrigin="anonymous",g.src=ss.paperBump,await g.decode(),g})()]),u=[],d=(g,y=!1)=>{let p=new dn(g);return p.colorSpace=y?gi:Te,p.wrapS=p.wrapT=ei,p.magFilter=Pe,p.minFilter=di,p.generateMipmaps=!0,p.anisotropy=8,u.push(p),p};return{paperBump:d(f,!0),vellumMap:d(a()),vellumInkMap:d(o(h,l)),dispose(){u.forEach(g=>g.dispose())}}}return{createVellumMaterials:c}})(),{createVellumOverlay:gg}=(()=>{async function n(e){await document.fonts.ready;let i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],r=[i,...i.querySelectorAll("*")],a=(d,g,y)=>{let p=getComputedStyle(d,y),m=["display","position","width","height","top","right","bottom","left","box-sizing","margin","padding","border","border-top","border-right","border-bottom","border-left","border-radius","box-shadow","background","background-size","background-repeat","background-position","opacity","mix-blend-mode","z-index","overflow","font-family","font-size","font-weight","font-style","font-kerning","line-height","letter-spacing","color","text-align","text-shadow","text-transform","text-wrap","white-space","flex-direction","justify-content","align-items","gap","max-width","min-width","transform","transform-origin"];for(let T of m)g.style.setProperty(T,p.getPropertyValue(T));return p};s.forEach((d,g)=>{let y=r[g];a(d,y);for(let p of["::before","::after"]){let m=getComputedStyle(d,p);if(m.content==="none"||m.content==="normal")continue;let T=document.createElement("span");a(d,T,p),p==="::before"?y.prepend(T):y.append(T)}}),Object.assign(i.style,{position:"absolute",left:"0px",top:"0px",transform:"none",margin:"0",boxShadow:"none",willChange:"auto"});let o=[];for(let d of document.styleSheets)try{for(let g of d.cssRules)g.type===CSSRule.FONT_FACE_RULE&&o.push(g.cssText)}catch{}let c=new XMLSerializer().serializeToString(i),l=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1860" viewBox="0 0 400 620"><foreignObject width="400" height="620"><div xmlns="http://www.w3.org/1999/xhtml"><style>${o.join(`
`)}</style>${c}</div></foreignObject></svg>`,h=new Image;h.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(l),await h.decode();let f=document.createElement("canvas");f.width=1200,f.height=1860,f.getContext("2d").drawImage(h,0,0);let u=new dn(f);return u.colorSpace=Te,u.anisotropy=8,u}async function t(e){let i=e.querySelector(".li-stage"),s=e.querySelector(".li-card"),[r,a]=await Promise.all([mg(getComputedStyle(e).fontFamily),n(s)]),o;try{o=new Ks({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(C){throw r.dispose(),a.dispose(),C}o.setPixelRatio(Math.min(devicePixelRatio,2)),o.outputColorSpace=Te,o.toneMapping=js,o.toneMappingExposure=1.1,o.setClearColor(0,0);let c=o.domElement;c.className="li-webgl-vellum",c.setAttribute("aria-hidden","true"),Object.assign(c.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"2"}),s.after(c);let l=new Pi,h=new Ki(-8,8,4.5,-4.5,.1,60);h.position.z=22;let f=new hi;l.add(f);let u=new Xi({map:a,toneMapped:!1}),d=new fe(new si(4,6.2),u);f.add(d);let g=new Ve({uniforms:{peel:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float peel;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*vec2(4.,6.2);float t=smoothstep(.015,.87,peel);float edge=3.09-(6.18+.12)*t;float d=dot(p,vec2(.92388,.38268))-edge;float a=exp(-d*d/.22)*.18*sin(peel*3.14159265);gl_FragColor=vec4(.22,.17,.10,a);}",transparent:!0,depthWrite:!1}),y=new fe(new si(4,6.2),g);y.position.z=.007,f.add(y);let p=pg({bumpMap:r.paperBump,map:r.vellumMap,inkMap:r.vellumInkMap});f.add(p.mesh);let m=new Ce(1,1,{depthBuffer:!0}),T=0,R=0,A=null,b=!1;function E(C,L){T=C,R=L,h.left=-C/200,h.right=C/200,h.top=L/200,h.bottom=-L/200,h.updateProjectionMatrix(),o.setSize(C,L,!1);let B=o.getDrawingBufferSize(new qt);m.setSize(B.x,B.y),p.setBackground(m.texture,B.x,B.y),A?.dispose();let H=document.createElement("canvas");H.width=C,H.height=L;let w=H.getContext("2d");w.save(),w.translate(C*.5,L*.4),w.scale(C,L);let k=w.createRadialGradient(0,0,0,0,0,.6),Q=getComputedStyle(i);k.addColorStop(0,Q.getPropertyValue("--li-stage-center").trim()||"#faf9f0"),k.addColorStop(.7,Q.getPropertyValue("--li-stage-edge").trim()||"#f5f3e8"),w.fillStyle=k,w.fillRect(-.5,-.4,1,1),w.restore(),A=new dn(H),A.colorSpace=Te}function M(C){if(b)return;(C.width!==T||C.height!==R)&&E(C.width,C.height),f.position.set(C.cardX/100,(-R*.06-C.cardY)/100,0),f.rotation.z=-C.angle*Math.PI/180,f.scale.setScalar(C.cardScale),c.style.zIndex=String(C.zIndex),p.update(C.peel,0),g.uniforms.peel.value=C.peel;let L=p.mesh.visible;c.style.visibility=L?"visible":"hidden",L&&(p.mesh.visible=!1,d.visible=!0,l.background=A,o.setRenderTarget(m),o.render(l,h),o.setRenderTarget(null),d.visible=!1,l.background=null,p.mesh.visible=!0,o.render(l,h),e.dataset.vellum="ready")}function S(C){C.preventDefault(),O(),e.dataset.vellum="unavailable"}c.addEventListener("webglcontextlost",S);function O(){b||(b=!0,c.removeEventListener("webglcontextlost",S),p.dispose(),r.dispose(),a.dispose(),A?.dispose(),d.geometry.dispose(),u.dispose(),y.geometry.dispose(),g.dispose(),m.dispose(),o.dispose(),c.remove())}return{render:M,dispose:O}}return{createVellumOverlay:t}})(),{createRibbonOverlay:Mg}=(()=>{function n(e,i){let s=new Ps,r=l=>(l.wrapS=l.wrapT=jn,l.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),l),a=r(s.load(ss.silkNormal,i)),o=r(s.load(ss.silkRoughness,i)),c=r(s.load(ss.silkColor,i));return c.colorSpace=Te,a.repeat.set(.35,.35),o.repeat.copy(a.repeat),c.repeat.copy(a.repeat),{normal:a,rough:o,color:c,dispose(){a.dispose(),o.dispose(),c.dispose()}}}function t(e){let i=e.querySelector(".li-stage"),s=new Ks({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.outputColorSpace=Te,s.toneMapping=Bs,s.toneMappingExposure=.94,s.shadowMap.enabled=!0,s.shadowMap.type=sa,s.setClearColor(0,0);let r=s.domElement;r.className="li-ribbon-canvas",r.setAttribute("aria-hidden","true"),i.append(r);let a=new Pi,o=new hi;a.add(o);let c=new Ki(-8,8,4.5,-4.5,.1,80);c.position.set(0,0,24);let l=new Ja,h=new es(s),f=h.fromScene(l,.04);a.environment=f.texture,a.environmentIntensity=.38,a.environmentRotation.set(.1,.85,-.52),l.dispose(),h.dispose();let u=new Qn(16774633,1.36);u.position.set(-4.5,6,4.2),a.add(u),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),Object.assign(u.shadow.camera,{left:-4,right:4,top:3,bottom:-3,near:.1,far:24}),u.shadow.camera.updateProjectionMatrix(),u.shadow.bias=-1e-5,u.shadow.normalBias=.0015,u.shadow.radius=2;let d=new Qn(16054015,.17);d.position.set(4,-2,6),a.add(d);let g,y=!1,p=n(s,()=>{g&&!y&&S(g)}),m=new Cs({color:12887398,map:p.color,normalMap:p.normal,normalScale:new qt(.32,.32),roughnessMap:p.rough,roughness:.35,metalness:0,sheen:.48,sheenColor:new kt(14261885),sheenRoughness:.46,anisotropy:.88,anisotropyRotation:Math.PI/2,specularIntensity:.66,side:Xe});m.onBeforeCompile=L=>{L.vertexShader=`varying vec2 silkUV;
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
`)};let T=dg(m);T.group.position.y=0,o.add(T.group);let R=new fe(new si(6.8,4.4),new Xi({colorWrite:!1}));R.renderOrder=-1,o.add(R);let A=fg(s,a,o,R),b=0,E=0,M=-1;function S(L){if(y)return;g=L;let{width:B,height:H,scale:w,angle:k,y:Q,progress:z}=L,tt=z<1;r.style.visibility=tt?"visible":"hidden",tt&&((B!==b||H!==E)&&(b=B,E=H,s.setSize(B,H,!1),c.left=-B/200,c.right=B/200,c.top=H/200,c.bottom=-H/200,c.updateProjectionMatrix()),T.update(z,Math.max(16,B/(100*w)+4)),z!==M&&(o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.setScalar(1),A.update(),M=z),o.position.set(0,(-E*.06-Q)/100,0),o.rotation.z=-k*Math.PI/180,o.scale.setScalar(w),s.render(a,c),e.dataset.ribbon="ready")}function O(){y||(y=!0,T.dispose(),p.dispose(),m.dispose(),A.dispose(),R.geometry.dispose(),R.material.dispose(),f.dispose(),u.shadow.dispose(),s.dispose(),r.remove())}function C(L){L.preventDefault(),O(),e.dataset.ribbon="unavailable"}return r.addEventListener("webglcontextlost",C),{update:S,dispose(){r.removeEventListener("webglcontextlost",C),O()}}}return{createRibbonOverlay:t}})(),{mountEnvelope:xg}=(()=>{function n(t){let e=t.querySelector(".li-stage"),i=[...t.querySelectorAll(".li-envelope")],s=t.querySelector(".li-flap-layer"),r=t.querySelector(".li-flap"),a=t.querySelector(".li-card"),o=null,c=!1;gg(t).then(z=>{c?z.dispose():(o=z,L())}).catch(z=>{t.dataset.vellum="unavailable",console.error("Vellum could not start",z)});let l=t.querySelector(".li-table-shadow"),h=t.querySelector(".li-scroll-cue"),f=t.querySelector(".li-stage-heading p"),u=t.querySelector(".li-skip"),d=t.querySelector(".li-replay"),g=matchMedia("(prefers-reduced-motion: reduce)"),y=null;try{y=Mg(t)}catch(z){console.error("Ribbon could not start",z)}let p=t.querySelector(".li-sub"),m=()=>g.matches?0:window.innerHeight*1.3,T=0,R=0,A=0,b=0,E=1,M=(z,tt=0,V=1)=>Math.min(V,Math.max(tt,z)),S=(z,tt,V)=>{let G=M((V-z)/(tt-z));return G*G*(3-2*G)},O=(z,tt,V)=>z+(tt-z)*V;function C(){T=0;let z=g.matches?1:M(cg((window.scrollY-b)/E/.94)),tt=S(.012,.245,z),V=M((z-.19)/.81),G=S(.08,.28,V),$=S(.28,.48,V),ft=S(.48,.65,V),_t=S(.72,.91,V),j=Math.min(.88,R*(R<700?.88:.7)/680,A/820),ut=Math.min(1.04,(R-32)/400,(A-142)/620),vt=b+E*.94*(.9514+Al),Dt=b+E*(1+Al)+m(),gt=M((window.scrollY-vt)/(Dt-vt)),ct=S(0,.1,gt),Jt=S(.1,1,gt),at=Math.min(2.6,(R-40)/400),Et=Math.max(0,38-(A*.56-560*j))*G,yt=Et+(390*$+380*ft)*j,pt=0,zt=`translate(-50%,-50%) translateY(${yt}px) rotate(${pt}deg) scale(${j})`,Ut=1-S(.48,.65,V);i.forEach(ce=>{ce.style.transform=zt,ce.style.opacity=Ut}),y?.update({width:R,height:A,scale:j,angle:pt,y:yt,progress:tt}),r.style.transform=`rotateX(${-178*G}deg)`,p&&(p.style.opacity=String(1-S(0,.3,V)),p.style.top=`${A*.56-220*j-20}px`),s.style.zIndex=G<.505?"6":"1",s.style.filter=`drop-shadow(0 0 .7px #7d6840) drop-shadow(0 ${3+7*Math.sin(Math.PI*G)}px ${2+6*Math.sin(Math.PI*G)}px #716245${G<.6?"25":"08"})`;let ee=O(90+pt,0,ft),Gt=ee*Math.PI/180,ye=Math.abs(Math.sin(Gt))*400+Math.abs(Math.cos(Gt))*620,jt=Math.abs(Math.cos(Gt))*400+Math.abs(Math.sin(Gt))*620,Me=Math.min(O(j,ut,ft),(A-124)/ye,(R-30)/jt),ne=Et-145*j*$,ae=O(ne,-A*.06,ft),P=O(-Math.sin(pt*Math.PI/180)*(-145*j*$),0,ft);if(a.style.transform=`translate(-50%,-50%) translate(${P}px,${ae}px) rotate(${ee}deg) scale(${Me})`,V>=.94){let ce=O(Me,Math.max(Me,at),ct),ie=620*ce,Mt=ie<=A-40?A/2:O(20+ie/2,A-20-ie/2,Jt);a.style.left=`${(R-400)/2}px`,a.style.top=`${(A-620)/2+(Mt-A/2)}px`,a.style.transform=`scale(${ce})`}else a.style.left="50%",a.style.top="56%";a.style.zIndex=$>.85?"7":"2",o?.render({width:R,height:A,cardScale:Me,cardX:P,cardY:ae,angle:ee,peel:_t,zIndex:$>.85?7:2}),l.style.transform=`translate(-50%,-50%) translateY(${yt+20*j}px) rotate(${pt}deg) scale(${j})`,l.style.opacity=Ut*(1-.35*$),h.style.opacity=1-S(.08,.23,V),f.style.opacity=1-S(.1,.3,V),t.dataset.complete=String(V>=.94),t.dataset.progress=V.toFixed(4),t.dataset.stageProgress=z.toFixed(4),t.dataset.ribbonProgress=tt.toFixed(4),h.firstChild&&(h.firstChild.textContent=(z<.245,"Skroluj polako da otvori\u0161"))}function L(){T||(T=requestAnimationFrame(C))}function B(){R=e.clientWidth,A=e.clientHeight,b=t.getBoundingClientRect().top+window.scrollY,E=Math.max(1,(t.offsetHeight-m()-A)/(1+Al)),L()}function H(z){window.scrollTo({top:b+E*ug(z),behavior:g.matches?"instant":"smooth"})}let w=()=>H(.965),k=()=>H(0);u.addEventListener("click",w),d.addEventListener("click",k),window.addEventListener("scroll",L,{passive:!0}),window.addEventListener("resize",B,{passive:!0}),g.addEventListener("change",B);let Q=new ResizeObserver(B);return Q.observe(t),Q.observe(e),B(),()=>{c=!0,o?.dispose(),y?.dispose(),cancelAnimationFrame(T),Q.disconnect(),window.removeEventListener("scroll",L),window.removeEventListener("resize",B),g.removeEventListener("change",B),u.removeEventListener("click",w),d.removeEventListener("click",k)}}return{mountEnvelope:n}})();function Tu({id:n="the-opening",className:t="",theme:e="auto",fontFamily:i="Arial, sans-serif"}){let s=bl(null),[r,a]=Nl(e==="dark"?"dark":"light");return $a(()=>{if(e!=="auto"){a(e);return}let o=matchMedia("(prefers-color-scheme: dark)"),c=()=>{let h=s.current?.parentElement?.closest('.dark, .light, [data-theme="dark"], [data-theme="light"]'),f=h?h.classList.contains("dark")||h.getAttribute("data-theme")==="dark"?"dark":"light":o.matches?"dark":"light";a(f)},l=new MutationObserver(c);return l.observe(document.documentElement,{attributes:!0,subtree:!0,attributeFilter:["class","data-theme"]}),o.addEventListener("change",c),c(),()=>{l.disconnect(),o.removeEventListener("change",c)}},[e]),$a(()=>{let o=s.current;if(!o)return;let c=!1,l,h=0;return o.dataset.liReady="false",(async()=>{let f=getComputedStyle(o).fontFamily,[u]=await Promise.all([lg(),document.fonts.load(`400 24px ${f}`)]);await document.fonts.ready,!c&&(o.style.setProperty("--li-paper-surface",`url("${u}")`),l=xg(o),h=requestAnimationFrame(()=>{c||(o.dataset.liReady="true")}))})().catch(f=>{c||console.error("Le Invite could not initialise",f)}),()=>{c=!0,cancelAnimationFrame(h),l?.()}},[i,r]),React.createElement("section",{ref:s,className:`li-opening ${t}`.trim(),id:n,"aria-label":"Otvori kovertu","data-li-theme":r,"data-li-ready":"false",style:{"--li-font-family":i}},React.createElement("style",null,ag),React.createElement("div",{className:"li-stage"},React.createElement("div",{className:"li-sub"},React.createElement("span",{className:"a"},"Jak kao"),React.createElement("span",{className:"b"},"hirur\u0161ki \u010Delik")),React.createElement("div",{className:"li-stage-heading"},React.createElement("span",null,"Mnjauprrrrr"),React.createElement("p",null,"Malo i\u0161\u010Dekivanja.")),React.createElement("div",{className:"li-table-shadow","aria-hidden":"true"}),React.createElement("div",{className:"li-envelope li-back","aria-hidden":"true"},React.createElement("div",{className:"li-envelope-paper li-paper"}),React.createElement("div",{className:"li-liner li-paper"}),React.createElement("div",{className:"li-mouth"})),React.createElement("div",{className:"li-envelope li-flap-layer","aria-hidden":"true"},React.createElement("div",{className:"li-flap"},React.createElement("div",{className:"li-flap-face li-flap-front li-paper"}),React.createElement("div",{className:"li-flap-face li-flap-inside li-paper"}),React.createElement("svg",{className:"li-flap-edge",viewBox:"0 0 680 340","aria-hidden":"true"},React.createElement("path",{d:"M0 1 L320 326 Q333 334 340 334 Q347 334 360 326 L680 1",fill:"none",stroke:"rgba(70,48,18,.30)",strokeWidth:"7",style:{filter:"blur(3px)"},transform:"translate(0 4)"}),React.createElement("path",{d:"M0 1 L320 326 Q333 334 340 334 Q347 334 360 326 L680 1",fill:"none",stroke:"#9b835a",strokeWidth:"1.7",strokeLinejoin:"round"})),React.createElement("img",{className:"li-seal",src:"/assets/li/seal.png",alt:""}))),React.createElement("article",{className:"li-card","aria-label":"Hirur\u0161ki \u010Delik"},React.createElement("div",{className:"li-card-stock li-paper"}),React.createElement("img",{className:"li-card-photo",src:"data:image/jpeg;base64,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gIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgL5zVEFNH5lRNHEzeuqRwaN/tX0VU84Wy3Xgce2u72+luFDUZhSsmpauJssUrfh6ns5jgQR+BCsFmxXCgmkEcNdTSPPo1krST+wFelQSq4a4cdRyCo4wwuKMNJdI2z08RYB7h4YC3X1BGlzOD6ieXEL9TQXGpuVgo79VUtgrKiZ05loWhmg2VxJkY2UzRtcSdtY3uUwWTPVUtKGmpqYYer08x4bv8AVtfH7Vtf/wApUf8A5Zv/ALVVvJeP2DJvEJxpa8ksltvFC6lvDzS3GmZURFwjp9HoeCNj2OlJf7i/Dv8A3p8H/wDMVL/7tMiJq+WKOEyySMZGBsvcQAB+tef7Vtf/AMpUf/lm/wDtX8V9ls91sUlkulpoa62SsEUlDUwNlgewa00xuBaQNDtr2VdZdgXA+FYhV5FeuK8LFNTgBsUOP0r5aiRxDWRRt8vbpHuIa1o9SQkVZkFZR1Li2mqoJiBsiN4dr/Uv6nqqWlDTU1MMPV6eY8N3+rarDhvi6hw2O55dWY1ZrHkN/LZKi32qmjhgt0Df71SsEYAcWju9+vneSfQN15+SrBYsl8QvGlryKy2670LqW8PNLcKZlREXCOn0eh4I2PrpM5RasNbRVD+inq4JXevTHIHH/qX3VdXriDhOnsdRVXLAcQtFNCwyPuEFFDQPpgPz2zxhroyP0g4aXo4Vrr3cuC7DWX+qq6uqeyYRVVYCJqimE8jaeWTfcufCInEnuS7fumKm09bR0zwypq4IXEbAkkDSR+1fNtztr3hrbjSOcToATNJJ/wBaqa9YlimW+L2pp8rxmzX2GDD6d8Ud0oo6psbjWzglokaQDr3CmNNxBxLR1kVXScXYZT1ELxJFNFZKZj43A7DmkM2CCAQQmREzXk+1bXvX2lSb/wA83/2r1qhuDuK+ML14e8Xul444xG4V1RSl81VV2enllld5ju7nuYS4/iSkir4a5r2B7HBzSNgg7BX6qhynjmm4+sdZm3EVIyw3C2Ruq6ixUbjHb7tEwdT4XwD5GSFod0SsAcHEb23YVn2K8UWQ4vbb/bnF9HcaWKsgc4aJjkYHtP8AqcEwe18kcYHmPa3qIaOo62T6D9a/pUnyJj03MfI9Zh1JcJaKhxKjFaKyJxHl3qVhNIe3r5Ee5SPrNGrE47yx2acc2++VNOKS4EOprjR+9LWROMc8R/yZGuA+o0fdMEme9kbOqR7Wt7Dbjod+y/pVZ4jaOK4eG2/UE7ntiqJ6CF5jd0uAdXQA6Pse/qvTx5kd4tV/n4szmsdU3+3w+fbrpJ2+26EHpbN/nmbDJW/XTh2eNM41NWR5jBKIutvWR1Bu+5H11+0L+lWld/PFsP8AU25f26hVlqK/mSSOGIySyNjY3uXOOgP2rzfatr/+UqP/AMs3/wBqXS1Wu92ie1Xq20lxoKhvTNSVkLZopRvenMcCCNgeoVb5dgXA+FYhV5FeuK8LFNTgBsUOP0r5aiRxDWRRt8vbpHuIa1o9SQrBZkFZR1Li2mqoJiBsiN4dr/Uvuqr4b4uocNjueXVmNWax5Dfy2Sot9qpo4YLdA3+9UrBGAHFo7vfr53kn0DdTLOsrp8J48uuTTwuqHUkP5ClZ96pncQyGFv8AjPkcxg/FyZzwJAySOQu6Htd0npd0nej9D+K/pUZgWP3Dh/kO0W68Vz6qLOIHSXOqc4lgv7Q6aRw32a2aMyAD/wDpmD3V5pZgL+TIxsjY3PaHu30tJ7nXrpf0qzy/+c1xl/oV5/d0ykFmL+WSRytLo5GvAJaS070R6hVrkWQ3bOcoq+PsDuElHT0j/KyHI6cjdDsAmkpj6GqcCNu9ImnZ+YtCm1qtVhwvDorZa6WG22i2wHpjZvpjY0FznE+pJ7kuOySSTslXB1HvZFG6SR7WMaNlzjoAfrX8U9VTVcPm0lTFPHvXXE8OG/1hU9huHUfLdipOR+TqP7XhuzRWWjHaw9dDbqN3eHqg+5LM9ha973g6LulugO/bvPCeIshfcuP6GlwXJIm9VJc7DA2lb1juGzwsAZPGT2cx7T29CDohkRZaimWZJdbRS09xx6nt96jgkPxtsbUMjqpYz23Tve8M62nv0P0HDt1NI7uNstnzbjWgv1dRsorj1S0lwpGHbYKqCV0M7Bvv0iSN2t+2l46niDh4marq+L8IJO5JZpbJS/rLnEs/WSSnXY6OJ327Xa3vrMhittsmqZOqltkVQ2Weni12bM9ri10h9SGfK3fSC/XUZI97I2dcj2sbsDbjodzoKhuPeO8Gy7k2DlCx4Lj1ixu0ufFjgoLZDSyXGQ/K+veWNBMfq2Fp9RuTXdmphz5/IfUf0xZv/rrSq5zgstfz1s83yutvXrq6d99fXS/pVoz+eHN/U1n9tesxVlouLfLnkFBdLLBZca+1qarrPJuFR8YyD4CHocfO6XDcnzAN6W9++12kBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFU3Ototl+h4+tF5ooq2hqcxpGTU8w2148ioOiP1gK2VwMtwvHc4tdLb8jpamaGkqm1tO6lrZ6OSKZrXNa9skL2PBAe4evurLlKjFTwHw1WUzqep46sckbvVph//AN9l5eMJpLXyJm+BUFxqq/H7C6h+ANTO6ofRumie6Sk81xLnNYGRuAcSWiUDegNe88LYMRp8mWyNPqyTLrs9p/WDVaKlmO4zj+JWNlnxq0UtsoWuMnk07OkOe77z3H1c4+7jsn3KuorLlHGLBlviB4ztOS2mmudD8NeJfh6hvU3qEdPo6/DZUmouFeKLdcqe4UOB2aCqppWzQysh05j2kFrh+IIBXUy3j3Fc3rLdV5DS1z6m2+aKSehuVVQyRCQNDx1U8jCQehvYk+i4n9xLA/8AumXf+l93/wDzpN4E/nngpaWWqqZo4YImGSSWRwa1jQNlxJ7AAd9qrMVgn5TzSm5Ju0MjMXtznfxVoJmlvxDiC11ykafdwJbCD91hL/V41O73iFgyPAp8MvVLPV2Wop20k0DquZr5Ixr5XSteJDvQ2erbu+ydlRaPg7AIomxRHLGMYA1rW5ddgGgegA+K9FJgsVU9yhjVhyvxBcZ2rI7VTXKi+GvEnkVDepvUI6fR19e5U4xnjzG8Ruktwsz74ZpYjC77QvtdXs6SQezKiZ7QdtHzAb9RvRK/rLOPsXzWtt1bf6avdVW3zRSVFDc6qgkiEoaJB108jCQehvYk+iS5RHqvgDhqtiayfj60AtPUySJropI3ezmvaQ5p/EEFf1w7d6+42DI7dVXWou9JZcgqrVQXKpf5klTTxhhHXJ/zjmOfJEX+p8rZ2dlfR3CmAyNLKluTVUR7Ohq8puk8bx9HMfUlrh+BCmtptFrsNkprPZLdS2+30rPLgpaWMRxxt+jWjsEtFRZBhWKZp4vp6fKrDR3aKmw+nfCyqZ1BhNbOCR/qU2svEnGmOX2nvVjwu1UFwpyTDUwRaewkFp0f1Ej9q+mTcX4dluTR5DeKW6NubKUUQqbfeKygcYQ9zwxwp5WBw6nOPcH1XOj4WwWKZkrJMs6mODh1ZbdnDY+oNTo/qKuiwVWfh7/my4f/AKEf3j1ZirWk4G43oKNlHb6fJaOmj2GU9NlV1ijYN701jakADv6AKRXQ5VzCnxnBqm30gFbkd4ifQWW0xkGasqHtLW6b7Mbvqe89mtBJPov6jnoOHvDzSfacpqKbGLJDTOMf3qh0MLY2tYPdz3BrQPq4L34xxxhWHXCa42CxRQ3Cdnly3ColkqqqRnr0meZzpC3ffXVpdW+47ZslpKWlvlH8XBS1cNdFEZHtb50Tw+Nzg0jrDXAO6XbbsAkdgnCKm46snOWLYa6Osx7BKi6XKqmutxqJrzVRyS1E7us9TW0rg3pb0RgBxAbG0AnW1/eGz5bhnPtwtmY26y2+gzYOrqFlprZamFlwgjaJ2kyRRlrpYQ1+tHZhkO9kq6ly73jlmyIW/wC2KP4g26tjuNI4SPjdDPHvpeC0g+hcCPQgkEEEhNMQfn/+QG6/6bbv7fTru8h4R/HOwQOt9b9l5Fa5vjbNdmt26kqANdx+dG8bY9no5pI9dEdzIMftGU2CWyX2k+LoJXxyPh8x0e3RyNkYdtIPZ7Gn1760ey6aaqhMKzf+OXintMdxovsvI7XiVyorzaXO26kqBW0J+U/nRPGnsf6OaR7ggX2uIMQxtvIf8em2mFuQmgNrdXtLg91MZGyeW4A9LvmY0gkbHcAgEg9tLUj5zzwUtLLVVM0cMETDJJLI4NaxoGy4k9gAO+1VmKwT8p5pTck3aGRmL25zv4q0EzS34hxBa65SNPu4EthB+6wl/q8asHJsasuY4jX4xkVK+qtdfH5NTAyeSEyM2CW9cbmuAOu+iNjYPYlRCPg7AIomxRHLGMYA1rW5ddgGgegA+K9EmCxVS/IU2V5jzfZMZw2hs1wpMSdHfLvHdauSmhfUyNe2jj6o45CXM0+YtI1/ejsdtz/GePMbxG6S3CzPvhmliMLvtC+11ezpJB7MqJntB20fMBv1G9Erq2jHbNYqu6VVro/JnutWa6tldI+R00xY1nUS4nQDWMaGjTQBoAJLgqzP7DzbmWDz2plhwOjrYZYq6grIb3VOkpqqF4kikaDSAE9TQCCQCCQToqxcDyynzjjq1ZRTwup3VkO56Z33qadpLJYXf4zJGvYfxapEuXZccs2Om4/Y1H8KLjWyXGqaJHua+eTXW8BxIb1EAkN0NknWySW8DqKk+YbZkd6514ztONXttknqae7x1FxazrmgpzHT+YYfYSkaDXHYbvq0dAK7FzKzH7RX5PbMhq6TzLla2TR0c/mOHlNmDRIOkHpdsMb6g61213SXFVRUYtHwLWnKcLoamTCpg3+MdoY588lOWtDftKLe3OeA0ecO5e0dfdzTu16mO35Th00NNWRz0F0o3MZU07g9r45WaD2kdiCHbBXTIBBBAIPqCuRjeMWPEbKbRjtF8DQedJO2mbK98cTnuLnCNriRGzZJDG6aNnQCaIXwpf2zcdUWDXYx0uUYrTxWi6W9x09piaI2TtB7uila1r2vHY9WvUECY5XlliwrFKrIsirmUlFTt9T3fK8/djjb6ve49mtHck6C8WU8eYbmdTT1eQ2Vk9bTAtp6+nlkpaqFp9Wsnic2Ro/AO0vBZeJMDsd/gvsNpqbhdKffkV15uFTc5oD9Y3VMjzGfxbpOEfHh2x3aycVwSX+lNHd7rW1l6rKUnZp5KuokqPKP4sEgafxaVxMqnn5UzWp42tU0jMXtr2/xpr4XFvxDiA5ttjcPdwIdMR91hDPV51a6rSl4F41oWysoKXJKNksz6h8dLlN0ia6R7i57ultSBskkk+5KS/RY8EEFLSx01NDHDDEwMjijaGtY0DQAA7AAdtKvudaOrq+BL3JQ00tTLQyUl0MMQ6nvZS1cNS8NHuemF2h7r127iHDLVd6W50kmUGoppWzR+flF0nZ1NOx1RvqC142O7XAg+hBU6TpXktd0t96stLd7TWQ1lDVxNngqIXdTJGOGw4H6EKu7FPFfvFXkt1tzxNRWWxUtlqJ2Hbfi3zyzviB9C5jPKLh7GQAr2z8JcdS1k89LbLna2VDzJPS2e81tvppXE7JdBBMyPue5+Xv7qX2DHbHitggsmOWqltlvg35dPTMDGgk7JP1JPck9ye5ThHT2BrZ9UXFvmJ2DI7pZbjeaD4mpstX8dQP817PJm6Szq00gO7OPZ2x+C7SiiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKu+TsN5Kyua2O4/5UfhLadsoqmttcdb8UXdPQfncOnp0709er8FYiJLgz5/cf8R3/AIUUv/oxT/8A3aqqvrfEOPEjbeJMU57qMmrY2CpvlWyx00ENph20/Ofm6nlp+727uYN7J6b1585eq+P7HQ4phlN9qcgZG74WzW+MB5jLj0moeD2DW99b7Ejv2a4jqcHcQUfEuBvp6qp+08nusnxt8u7yXPqqh2yR1HuWNLnAb9duce7it7k2s4gXilqamny3hltPUSxCTNKRjxG8t6h1s7HXqFosua0bc4D27lZX8a9wudpt/GN0slI2rudJk0dRSU7gSJZmAOYwgEE7cAPX3UgovChj2VUbb1zXkN8zPKKlvmVMrq58FNSvPcx08bNdLG+g9jrem70mTJq/WiUWUJ6XIvCpyxjFPR5LdL5xXk1c21yUV1l82Sz1D/uOjfr7nq7QA21rwQSA5WJ4h+S8mxG245g/HwjGZ5jW/Z9unlALKRgLRJOQQR8vW3WxobLu/Toz1/DV1FzQQC4An0BPqv1Z0ovBtxrWUAqs6u2S5ZkUo6qi9VlylZIZPcsaD2G/QO6j+JXNxSvy3gDxEWLii/5LcMlwXK2yNsFbc3+ZU2+oZrcDn/nNO2N12HztIDdOBZPhrTq/A5pcWhwJHqN+izTyNesz5j8SNVwViGR1mMY5ZKRlZk12oHdNTOZA1zaeN35uw9o/Hb9ghvSemPBrxHR0omsVTlFmvTBuO+Ud2kFU1/6f6O99zpo/YmT6a0IixzwzLnFP/CJZBj2f3SK63ay4q6g+0o2eX8bCJoJIpnN9A8slaHa9wfU7J2MpZhLovwkAgEgE+g+qjmeY/fMowGusWOZXVYvcKnoay60sTZJIW9YL+kHWiW9QBBBBIIPZVF/wN+HaqmMl+/jLfLq8bfd6+7yuqXO/S2CG7337tKST6NAos38CXHJcJ59zjgO95FW5BbLNTQ3Sy1te/rnjp39G4nO9wPNYPoC12gAQBF/ErNmDPGBxRTYHVxUl+q6Sso6WpmZ1sp/ODonzFvv0Me949e7R2Por684a1uSAQCRs+g+q/Vnk+Dfi240hqMqueVZBfpBua+1l0k+IdJ7uaPujv6Ah2vqV5+Ar1lmIc35pwBld/qshgslPHc7Lcqx3VOaR/RuN7j3OvNjA+hDwO3SAyfDVichcsOwTlnjzChYRXjMKuopTVmp8r4PyvK+bo6D1783023XT77VlLEfOfA3Gtr8THFNsorTVx0+XXeuN4aa2Vxm06Bw6SXHy+8r/ALuvX8AtNcb8KcecT1lwqsItVTRS17GR1BmrJajqDCS3Qe46+8fRLJkJrz03E1RT+Jqt5cOb3mSGpoG0YsDj/wAWj0xrdg9X3fl6unp++4nfsrKWb7Y93/30i8s6j0/xJadb7f36FTvkjhmo5QzGnmv3IOR0WKw0wY/HLVKKZlRN1OJkllb8zmlpaOkjsRsEb0ln6LUBB3og67HXsv1Zb5B8LGGYTx5ds04iuF8xHJ7LSSXCnqaW4yvbUeU0vMcgeTsODSOxA2e4I2DdHC2b1fI3AeL5ncGMbW3CjBqfLGmmZjnRyOA9gXMcQPbalnGw1V/B1TUzeMLniGWolkiirKARsc8lrNtm9B7LRizdwV/PJ59/0y3/AO7MvBWsyDxLc35TixyS52HjTEan7Nq4bXL5M15rASHtdIPSNpB7dxrpOtu23Vm1JWnw5rt9JB0dHRX6s43nwlYzj1rfeeFb1e8LyylYZaSphuEksNS8dxHOyQu2x3ofbv3Dh2NhcDcmVPKvDFHkN0pG0l6pppLddado0GVURAfoewILXa9urXfW1mz7F1ZiAg+hBWEuCsAyblqvzzFrllV1suB0GT1lVVwWqbyZ7nUylrRE6TvqJjImkjXcyD8C28uSr1b/AAxeGKjsXHNuklrZ6z7LsdNUvM5FTUPfIXuJ+9r5yAexPSPQq3x5w1fRc1uupwG+3cr9WbbL4Q8YvluZeeZ8gv2a5VUt8yrqJrhJHBA89yyFrSCGt3obOu3ZrR2FQeKHj3JuGuF3WnGsrul1wC81kVO613aYzy2upaTKwwSevluEb2lp7A69Sdizxluaa3BkFqdfcSulkZcKq3ur6SWlFZSO6ZqcvYW+Yw+zm72D9QFF+JOO5uLeLqXD58nuGRPglkl+OrR0u+d2+lrep3S0fTZ7kn30u1kRP9y67Hff7Km/clVP4OHOf4N8Wc5xcfNre5O//jcqnw+pbw7xNUcT2i9UM+bXnKDcq91aJbme8II1ofMduPq53bqOuwVlEgDZOgs4eEx7nT8tdTi7WbVoGzvXooZheMWTxIcy8hHlzIrlVOsN5lt1uw+KudSxU1PG4tExjaQ5xJGi4a7g73toFs5umthAggEEEH3Czn4pampp8t4ZbT1EsQkzSkY8RvLeodbOx16hSTFPDPhOA59bclwS95RYYKaRzqi0QXOSSkrWlpAbI1+ydOId6kdvT3EW8Vf/ACv4V/rtSf77E8c3gvTSKKl+ZOcjht4o+O8At7Mk5Iu/5OhtUZ2ylBaT51Qd/K0NBd0kjYBJIb3XR4d4c/iA2synK7s/JM+vP5S63uc9Wt6PkwA/ciboDsBvQ7ABrW5zjaa9uCcTVGF8uZlm8ub3m8MySbzm2yrP5Kj+Yu035j1a30t7N6WjXf1Ve8n1NTH/AAgXDNNHUSshko7iXxteQ12oJNbHoV8+C3ud4x+fGlxIFZb9An0+WZRPxN/xud4v+JqfBKqGkyCppqqkpauaPzG03m7jfMW+/Qx73+/dvofRbk5T412SAQCRs+g+q/Vnk+Dfi240hqMqueVZBfpBua+1l0k+IdJ7uaPujv6Ah2vqV5+Ar1lmIc35pwBld/qshgslPHc7Lcqx3VOaR/RuN7j3OvNjA+hDwO3SBnJ8XWjkRZt8TWR3R/I3HHGU2V1eI4xk1VOLtd6WbyJHtjDOmASn7gcXaPt87d7AIMk2rWkeoFxaCNj1C/Vn5/g44UFK2azQZBabjrqZdqG7zCoDv0wXFzd+/wB1R/nnErtxjiXH3LtmuVzvl1wKaKmulZVyl9RcaGQhkpkd7nbiPwErjvsrkvVTWoUXktVzob3YqK82uobUUNbAypp5mekkb2hzXD9YIKz1h0h5c8aeRZ7LJ5mL4BE6x2ok/k5a5wPxEo9j0gubv6GIqSGtIL8a5rhtrgR9QVk3GbRe/FvkN5yvJ8iu9p4voa19BaLDbZjAbkWa6pp3Adwdjt30SQC3pJd28j8K9DhVmnyfgK/33FMpoWGeCmbWvnpq8tG/KlY/e+rWhsluz3afa+s6tNaHyC1OvuJXSyMuFVb3V9JLSispHdM1OXsLfMYfZzd7B+oCi/EfHc3FvF9LiE+T1+RPglkl+NrR0u+d2+lrep3S0fTZ7kn30uJxPyezlzw3R5i+mbS176aemr6dm+mKojaQ/W/QHs4D2DgPZQvwdVM0PgwtlUyJ9TLHPXPbGDt0hEzyGj9fomXBockNbtxAH1K/VjThHjjD/EniFZyFy7kVxynIJq2ZklmFxkggtLA7TGMhjcC0Edwd60R22CTeXHvAOM8XZwb1h2Q5PTWt9M+F+Pz3B01EXkt6ZA13fqADh3J9fbXdZISvfyFyw7BOWePMKFhFeMwq6ilNWanyvg/K8r5ujoPXvzfTbddPvtWUsR858Dca2vxMcU2yitNXHT5dd643hprZXGbToHDpJcfL7yv+7r1/ALTXG/CnHnE9ZcKrCLVU0UtexkdQZqyWo6gwkt0HuOvvH0SyZCasL0GyvwEEAggg+4VGXfwzWfN8sud75TzbJ8thnqnyUVqdVGko6KEuPRGI4iNuA0C4Fu9bI33VZck4DT+Fi641yVxXeLtRWGa7w269Y7UVb56aeGTqPW0PJIcA1w2SSC5pGtEFJLxprYKLOviittxxWfEee8ehkfX4dXNbcIozo1Fvmd0SNP6i4j8BK4+yv+1XOhvdiorza6htRQ1sDKmnmZ6SRvaHNcP1ggqZxpr1r8JDWkuIAHuVm/EPM5i8aGR5x5zzjeBQusNoe3RZJXvB8+Zu9tJaC4fTRiK98XhOxTIHvuPLeWZNn94lcXvmrK59NBHs+kUMZHQB9N6+gHorknZrQSLJz8bqfDR4lcCtWG366z4NmdU+11Nir6gzspJ/lDJIi77veRn46a4EnY1rFSzCUXHy1zm4BfHNJDhb6ggjsR+TcuwuNl38n19/o6o/dOUiqk8HtRPVeDzF5qmeSaV0tZt8ji5x/wCNy+5V5ghw20gj6hYa8MvEV25e4Ft7c9ya7U+DW2eemttgtc5pm1rzK6SWeocO7wHSOY0dtdB9O/VKeVeE4PD7hknLvB15u9kqbLLFLX2earfPSV8BkaxzXNcdnXUCdk9t60QCulkt7Zl4asyC1OvuJXSyMuFVb3V9JLSispHdM1OXsLfMYfZzd7B+oCi/EfHc3FvF9LiE+T1+RPglkl+NrR0u+d2+lrep3S0fTZ7kn30vZUXyDJuCZclpGOjgudhNdE0nZa2Wn6wP9Tgq18HDnP8ABviznOLj5tb3J3/8blWc4X6vdAQSQCO3qsR2TGsyz/xo8v4NZ8nr8dx2qrKarvlfbn9FU+OJjmx08T/zPMMziTr0j9/Q6Eo+LcU4k8PWZWHEGVraapoq2tmfV1BmkfKaboLi4/gxvol8cJVsIqT8IznP8GmFuc4uJZV9yd//ABydPFy5zPBpmjmuLSGUncHX/wAcgUznDeNXYigVqJ/4MFE7Z3/FaM7/APoQLK3hu4ku/NHAlrZn2T3ilwi1ST0ltsdsqDAK55mfLLPUO79QDpSxo9ug+nfqs8fpra17s9FkWOVdmrzP8LVxGN7qeZ0MjQfdj2EOa4eoIOwqNbxrz9URs47uHJ1D/Ehk3zX+B0jcgnpAO1O52ugO/NMwPUQN+5afF4kLvcOKfD/h+G4XeKnGrTV3Kjx6a9NeXSW+iEZBcH+od0sHzb3prvc7XppPB9wVXWmGtiZeq+slYJG31t5lfPKSP74HNPQSfXYbpWcQXJeqCms3FFzt1vErIKW1zRxdcrpHgNidol7iXOP1cSST3JVW+D2onqvB5i81TPJNK6Ws2+Rxc4/8bl9ypnbMNdgXAd1xl2SXrIBBRVjmV14n86csc15awu+jW6aP1e29KpfDdnOMcdeACw5VltzjoLdTPrdud3fK81c3THG31c867Afr9ASmcDTar7mTjGflnjpmLwZbcsZcysjq/i6AbLwwOHlvb1N209W/Xs5rT31pVLiGL5T4kMnoeTeT6SW14BTPFTjeIud2rB+bV1evvAg7a30IPb5SfM6PjY/I+EevEX5MNuFIAGdtDr9FJOZDeGgbdSGgtFJQmpnqjTwshM9Q7qkl6WgdTj7uOtk/Ur0r4UX/AGtp/wDNN/2BfdZUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFC+VOTMf4l40rcvyCTqZEPLpaRjtSVc5B6Imfiddz7AE+ymiqnmDgHFOarjZqzJr9ktvdaA/4Zloqo4mhzy0l5D43/MOgaI0rM3kqL8B8Z5BJfK7nHlWPzc5yBu6elkbptnpCPkhY0/ccW637gdj3L938s+f8Eqwf9+LmD/0hZ/7lP+CVYP8Avxcwf+kLP/crVy/UiM+Na8/xcoeMch+HdU/ZuTx1vkNGzJ5YD+kfr6dLSuOZHZMtxaiyPHbjBcLZWxCWCohdsOB9j9CPQg9wQQe4UZzXinHs8qcQnvdbdGuxa5Q3Sj8iRg86WItIE3Ux3U09I2B0k9+4UDu3hTwaW91dxxDKM0wVtY8yVNFjF1NLTSOPqfLLXdP6gQB7BTizDlFPFVcqbOMs4/4Qx+RtZkFbf4LnVxwnrNDTRseC+TX3flkc/wCvSw/Ub9PiZdLhvMfE3MVXTyy2CxXGWjusjGF/w0c4a1spA9gPM/aGj1IVo8Y8G8f8TPqqvGqGpqbtWdqq83Ob4ismG9kF+gACdEhoAJAJ3oKdXe0Wu/2Oqs17t9PcLfVxmKelqYw+OVp9iD6q+0nRj60FfQ3S2U9yttZBWUdRGJYaiB4fHKwjYc1w7EEe4WaOWbjTckeNTi3A8YkbWz4nWSXy9TwnqZRtaY3NjeR6OJjAI+sjAu47wiYXRyTQYxn/ACNjFqmcXPtFovZZTd/UAOY4/wCslWZxtxLgvE9iltuGWcUzqhwfVVszzLU1Th6GSQ9z6nQGgNnQGypxOjmqPkvdJwf488iu2ZvFBi2f0cBorxN2hhqoWtaY5H+jRvr7n062E9tkaSrsnxu2486/XC/2yltbWeYa6apY2Hp9d9ZOtftUF5NzPhj7dpOL+Vau0g3anNVFT3ePVOQHdLT5rvlY/fV0nYPY9xsbhVP4avCzY3fxnlsdoFFH+VEldeZZKRo9dkPlLXN/B2wrxexXfDeb0nIn8JRluV2qKoFnqMbfFbpZ4TGaiCOSmj81oIBLXPZIQfodHuCFshZe4SqKHkPxk51yji1M1uH2y0w4zbamOLy4p3NMTnGIaA6W+Uda/Nez6rUKnn2RSPipzzJMB4KhqsWuH2XW3W609qfdNbNDFIHufKPodM6d+3VsaOivlR+FPi6Shifeq3Kr/WuaDLca2/VPmTu13ceh4Hf17BW1leJ49nGIVuL5TbIblaqxnRNTy7G9HYII0WuBAIIIII2FT1N4V7HR0jbTS8r8qw2Bo6RY48gLaYM/7noM2Gfhv9qS8FituB7Rhdg/hCuQLJgU75rRR4+IOt9U+p/LCSmErfMeSXadtvc9iCPQKY8pgH+EL4V2N/8AE7j+4lVj4TwTgXHnJM+ZYlT1dvlltTLOLex7DSxxNc1/UB09ZkJYCXOedkknuV1L/wAXY/kXMmL8l1tZco7tjkU8VHBDIwQSCVjmu8xpYXEgOOtOH7VfabpibrNuOf4UrLv6lR/vqVaSUIouLsfoOfLjy5DWXJ17uFrbaZad8jDTNiDo3dTW9HUHbib3LiO57fTMuFVF4iZI6bxSeHyqncI4W3msiMjuzQ55pQ0b+pK0ooXybxZiHLWHtx3LqSZ8UUoqKaqpZPKnpZQCOuN+jo6JGiCD7jsFweOuD7Zx7lT8iOdZxk9f8K6jiOQ3Y1LIInOa4tYwNaPVjfXfp20rssPqAWz/AApd5/qS39/CvHkrblzB41L7xRkOU3izYpjtphrI7Xaqs0j7rJI2NznyPb8zmN83p0PTpGtbJNzQcXY/T8+VPLjKy5G91FrFofTmRnwwiDmu6g3o6uvbB36tevZcvkng3CuTb1Q5BcZbtZcioG9FLfbFVmkrIm9z09eiCNk62CRs6I2VfaamKt5V8PXBmFcLZNkldFdqT4W3TmGWe+VTg6YsIjaGuk04ueWgNI0d/RTPwk/zNsK/zVT/AGuZfxR+GPEZak1WYZfm+b1DInx0rsluxq2UTnNLfMij6Q0PAOwXB2jo62FYvHeCWjjPjO14PYamtqLfbWyNhlrntfM4PkdIeota0Hu8+gHbSW8YsnKluCv55PPv+mW//dmVZcecVcfz+J7kjjvkmW7UN+qLrJdbKYbnNRsuFJK5zx0BjgHvAIJ9T94D7jtanxPi7H8O5Ly/OLZWXKW4ZVLDLXRVMjHQxmIODfKDWAgfOd9Rd7ei+PJnDeA8tW6ngy+0ufVUp3SXKkkMNVTH1+SQe2+/Sdt331tPblMQqq8L/D1DQzVtbU5HTU0LDJLNNkVUxkbQNlznGTQAHuVNOIME48wPjttNxi7rsFzm+02TNq3VLZnPYxvW15J7Fsbe34KvGeEjDqt8UGU8gcj5Ta4nBzbTd74X0xAOwHNaxp/1EK9LRaLXYLHS2ay0FPQW+kjENPS07AxkTB6AAKW/6sjPXg6A/ijyOdd/47V3f/oRLp+LjGb7deILTlmOUTq6txG8wX19K0bMsMYd16HvrbXH/Fa5WRxrxdj/ABZbb1RY/WXKpjvF0lu9Qa+Rjy2WQNDms6GN0z5RoHZ9e67WZZdY8Dwa45bklQ+ntdvjEk8jIzI4AuDQA0dySSAm/wAthnDm8f8AJ2F8mYjTZBil8paqKWMPlpjI0T0rtd2Ss3trh3/A+oJGisu+OLlHHbrxxTcd43cI7rcIq+Ouuj6LU0VDEwOY1sr27DHukezQ3v5TvXUN2UeFvCly7McrtNBYq19SfNlks9yfTBxPc9cMb2hjvXe2h31Vb852Hi+DE7B4dOF7baxesgvVO+thtb/iH08MfUXSVEu3O2Ng6eSQ1rj2Hrrxk1LuNYZH/Jbdv6Km/clVN4Nv5muLf52t/tcyu6vt8FxslVapS9kFRA+ncYyA5rXNLTre++iobxzi+F8R8cR4FZsh8yhsgkmlfc6uIzwtle6YmUtDA0fOdEtHbXr6rO8YqqvCV/f+W/671v8AtCmWYcFcK8v3OTJ56CCS6iV0T71Yq0xTeZGegh7oz0ue0jR6gSNa9lC/B48XHHOR8jpQXW66ZjWT0cxGhKwhp6h+HzD/AK/ou7dfChx3JkFTe8QveX4JV1Li+b+LF1dSxvce5PS4O0O/o3QHsFb/AGSdIBldszPw2cgYLNjPKGQ5Pj9/vcVonxvIpxVy9DyAXwv0C3p3+aBpxZvqBIXu8aUV7np+LoMZqI6e9yZREy3zSa6Y6ggCJx2CNB/Se4P6irIwvw5YNiOaQZjcLpkuYZDTDVNcsouBrZKb8YxoNB+hIJHsQpRyBxdj/I9yxetvlZcqeTHLpHd6MUUjGCSVhBDZOpjts7DYGj+Ke02UxQWQ+FS6Ylg9HnvH+R3K4cuWioddZ7vUzOd9ryEbkhLHEgAjYbv72y1xIdtt4cMctWjmDjaK/wBHH8Hc6d3w11tbzqSiqR95pB79J7lp9x+IIFiKvLbw3jFk50r+U7DXXa1XK5w+VcrdSyxihrj3/KSRlhd170eprm9xv853VPbZyuZ0rHgr+eTz7/plv/3Zl+cpgH+EL4V2N/8AE7j+4lVt4nxdj+Hcl5fnFsrLlLcMqlhlroqmRjoYzEHBvlBrAQPnO+ou9vRL/wAXY/kXMmL8l1tZco7tjkU8VHBDIwQSCVjmu8xpYXEgOOtOH7Vdm6Ym6zbjn+FKy7+pUf76lWklCKLi7H6Dny48uQ1lyde7ha22mWnfIw0zYg6N3U1vR1B24m9y4jue30zLhU3URzjF+PM+pIsKzqhtV0NQ11TT2+pkDZ9M7Oli0Q9uuoAubrXVrfdS5Vzybwfx9yxPSV2UW+qjutEzopLrb6h1PUwN2XaDh2I2SQHA6JOtbKRarS8eF+24ZYK688W8p5lg89HA+ojiNzMtvb0tLvykbgCW9u5LiAO+ipXwjktbzn4S6Srz6kjmlu1PU22vcxgY2qYHPiMgA7NJA767BwOtdgON/wAE3Ga1jaPJOT+UMitII3abnfy+nkA/Nc1rASP1EK8LJZLTjeO0dhsVvgoLbRRCGnpYG9LI2D0A/wDb6k9ytW8JIx/ivL904a8Nme8Y3modJmWG1pstlbr56tlSXfCyMb6u6R1v1+g1g9wtB8OcYR8d+Hi2YROemvlpXy3Odp259VMNynfv0k9IP0YF58o8PvH+Xc72flm7MrxerX5RbTxSMFNUPiJMb5Wlhc5zSRrTh9xoO9K1E8vL8JGZ/B3e4LHgd44ZvpZQZZi9zqGz0Eh6XzQvf1CZgP3m7JGxvt0H0cFe2c5rYOPMCuOW5LWx01DRRF56nAOlfo9MbB7vcewCifJXAnH/AChdqa+Xenr7Xf6YBsN8stR8LWMA9AX6Idr26gSPbWyotaPChgEORUt6zDIcvzyakd108GUXP4uCM+3yBo6v1OJafcKXLdOXL8K2NXaweEOqrrzTOpZ79UVl5ZA9vSWRyMDWHXsHNjDh+Dgvt4L5I4fB1ZpZXtjjZVVjnPcdBoE79kn2Ct3Kcpxiz8e3+5VN6t0NHbaWZlS5s7NQuaw/kyAezvbp9d6GlUvhDsrZvBVZbfeaFstJcTW9dPOzbZoXzyNIcD6tcN/rB/FW3ZaOrkHhu4T5EuAzS1U0ttrq3dQ29YvcDB5xd38xvTuMknv1BuyT3JUItUuc8JeKrC+NW8jXfNsZymGo/wCI3x4nrLf5bC4SCX16djt6NIDxrYBUmf4ScHt9dNPhGacgYRFK4ufSY/e3RQ7Pr2c1zv8A1lL+OuBcG44yKfJqOS8X3I54/Kkvl/rDWVfQfVodoBu/qACR23pNn6mK68RMkdN4pPD5VTuEcLbzWRGR3Zoc80oaN/UlaUUL5N4sxDlrD247l1JM+KKUVFNVUsnlT0soBHXG/R0dEjRBB9x2C4PHXB9s49yp+RHOs4yev+FdRxHIbsalkETnNcWsYGtHqxvrv07aU2WL9Uxw1iMHiSsl85F5TyW/1sxu01HT49R3KWkpbZGwNLWeXGQevTvUnuACdnZUN8V/E3EvGXHNkdjwrqfIa27RCCnqLrPUl0LWu8x/lyPcAASwdWt7cB7laDyDw04dcs3rstxfJsvwW63BxkrpMWuZpI6p5Oy57C1w2SdnWhvZ1skrwV3hM41u2N1NDebtld0ulVNFLPkVwuLam4yCMktj8yRjmtZs7Ia0b0NnsFqeU3dTFzX+yW7JcWuOO3eAT0FxppKSojP5zHtLXfqOj6rIOK8v3Thrw2Z7xjeah0mZYbWmy2Vuvnq2VJd8LIxvq7pHW/X6DWD3C2eqryjw+8f5dzvZ+WbsyvF6tflFtPFIwU1Q+IkxvlaWFznNJGtOH3Gg70s+Nn1bHiwPFZ+CPCBNBTUjau9Wqz1N3rGH5via3ynSvaSO7vmAYD9GhVvw5xBYuZuIrZyXydlmSZTebz5k8jW3aanpqTUjm+VHHE5ob09Pcem96AWqHsZJG5j2hzXDRa4bBH0Koubws4jQ3isrcHzjP8Ep6yQyz27Grwaamc4+pDC13Sfp30PQABWeRiluVOPOMuN/FPwtZ8NdVsvE2QQz1lPUXGarMcPnwiNxEj3dGyH61rfSfoFtS43O22igdW3a4UtBTNIaZ6qVsTASdAdTiBsnsqgo/C9xrQ3bH7vTzX03az3Vl5dc56xs9TcZ2EdPxMkjHFzR0/db0a2fckrk+MOwUeT+Himsbmyvu1ZfqCms7GP6Q6rkkMYDh+cPLfN2+uj7JbuROl/ggjYOwfdcbLv5Pr7/AEdUfunL12W2RWTGrfZoJHyRUNNHSsfIduc1jA0E/joL63Ghiudmq7bUOe2KqhfA9zCA4Nc0tJG999FYaUf4NQB4NcW0PWWt/tcq7/id/mj51/R//wBsYpbxpx5ZeK+M7fg+PVVfU26hdK6KWvex8x8yR0juosa0erzrQHbS9ed4ba+QuOrthl6nq4KC5w+RNJRua2VreoH5S5rgD2HqCtb/AC1PiIYN/Mrxv+pNL/YGqMeDb+Zri3+drf7XMratOJW2z8YUOCU09U+3UdrjtEcsjmmYxMiEQcSGhvX0je+kDft7LwcaceWXivjO34Pj1VX1NuoXSuilr3sfMfMkdI7qLGtHq860B20m8CmuCgP+GVz4dd/jLf3/AOjMr6yy3T3fAb5aaUbnrLfUU8Y+rnxuaP8ArK4GJ8XY/h3JeX5xbKy5S3DKpYZa6KpkY6GMxBwb5QawED5zvqLvb0U3Ut5JGfvBnf7fcvCpaLDDM0XKx1FVR19K46kge6oklb1N9QC147/UOHsV4PGxmVnsfhhuOL1FXH9q36aCGlpQ7byyOdkz5On16QI9b+rgpNmPhhwDKM4qcytF1yXDb9Vkuqq3GK/4Q1Didlz2lrhsnuenWz3OzteWLwn8Z/xPvlouFdkl1uN6hZT1WQ3KubUXBsbZGyBsb3sLGAlg3pmyOxPotbN1OcxN7V/Neof6rR/2QKB+DUAeDXFtD1lrd/8A1XKrip8doqbA4sSZLUGiioBbhI5w8zyxH5eyda6te+tb9lyeNOPLLxXxnb8Hx6qr6m3ULpXRS172PmPmSOkd1FjWj1edaA7aU3jFe3Lrfht/srcWzWG1VdFdn+RHQ3BzQKl4BcGsBOy8BpcOnuNbHoqcqPCPh1rllq+N80zbA6okvjbabq90DXf4zH7c4fh1jas7knifBuWbFT2vNbQaxtK90lLURSuimpnkAFzHtPbehsHYOhsHQVZjwn2J0Bt9Ry5yxUWgjpNrkyD8g5v6BAj+7rtr/rSXPpXm4P5AyzN+Ac/oMxuUF5rsdqq+zsvUDA1lexkWw/t2J7+o9QW777Jpzw1eHmDljhW237k+91lwxmBlXS2Cx007oWUpdK/zahxbrb/M6tA79B1bGmjYuPce4niXGxwXGLW21WYwyQ+XAdvPWCHPLnbLnnf3nb9vovlxpx5ZeK+M7fg+PVVfU26hdK6KWvex8x8yR0juosa0erzrQHbSvt3hn6pPhTL7/wAT8jnw5cnVhl8tvXiV7l+VlfS9+mAk+j2gaaPbRZ7M6vf43P5pFw/pGk/eKz+UuJMU5cx2jtmSGupZ6GpbV0NztsrYaujkBB3HIWuA3obBB9AfUAj85E4osvJ/EzMAym8Xp9IHQvkroJImVUr4vRzj5ZZsnudMA+gCbNlM4xNaL/tbT/5pv+wL7r+Io2xQMiaSWsaGjfr2X9rCiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIODlmE4jnVmFqzDHLdeqQElkdZCHmM/VjvVh/FpBVXReELw8RXAVbePmlwPUI33KrdHv/ACTLo/qPZXeisthjwWWyWfHLHT2awWuktlup29MNJSRNijjHr2a0a9e/4le9EUBERAREQEREBERAREQEREBERAREQF/E0MNRTyU9REyWKRpY+ORoc1zSNEEH1B+i/tEFOX3wq8BZDcX11bx1RQTvPU74Cono2f8Ak4ntYP8AUpbgfEHGvGQlOD4jQWmaVvRJUt6pZ3t/RMshc/p2Adb0psiu0wVXZt4dOHORMuflGW4bHW3aUNE1THVzwGYNaGt6xG9oOgAN63oDurRRJc6HNx/HrJiuN0mP45a6a2WykZ0QUtMzpYwb2e3uSSSSe5JJPcrpIigIiICIiAiIgIiICIiAiIgIiICIiCor54YeDMkzSoyq8YJBPc6qd1TUPbV1Ecc0jj1Fzo2yBhJJJPbvvvtWtRUVHbbbT2+30sNLSU8bYYaeBgYyJjRprWtHYAAAABfdFdtMERFAREQEREBERAREQF/EkMU3R5sTJOhwe3qaD0uHoR9D+K/tEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF86h8sdJLJBB58rWFzIuoN63Adm7PYb9Nr6Lh5fl+O4Jh1blOVXOK3Wujb1SzybPcnQa0Du5xJAAHckoK8g8SXG0GMXiuyarqcau9mlNPXY7cmBtwbLv5GxxNJ84P7FrmEtIOyQNqxsUvVdkWI0V7uGP11hlqmeYLfXlvnxNP3fMDSQ1xHfp3sb0dHYGb5eU7znWQ0nIeMeESsyOGmDX0GQ3aWnpKx0bSSx8TXxucR3JaWuPr2Vv8AFPNOO8qfaVtp7dcrDkdpcG3Kw3aLyqmmJ7B2vzm79+xHbYGxvViSrKRU3nniApMez5/H+CYdds+y6Fgkqrda3COGiada8+cghh7j2Ot9yCQDw6fxJ3fGr9RUHNXE154+o66UQQXk1bLhRNkPo2WWNoEe9fj9ToAkT1pq9LrXttVhrrm6MytpaeScsB0XdLS7W/b0UT4i5Ig5Z4gtmeU1qktcVe6ZopJJRK5nlyvj+8AN76N+nuu9lj2ycdXx7HBzXW2chzTsEeU7uFUPg2/ma4t/na3+1zK5xp9S7h3l+n5ftF6r4MUvNgFrr3URZc2dJlIG9j6OH5zfzTrudr7U3K1NUeJqs4dFllbUU1mF4Nx84dDgXsb5fRre/n3vft6L+OHuV28s2jI65tiNp+xr3PZyw1Pn+d5TWHzN9DenfX93vrXqq1tn+FLvP9SW/v4UzmmtIoofyVyZinFWDzZNlld5UIPRT00WnT1cuu0UTPznH/UB3JA7r68d5Jk2W4LTX/KcOdilTVflIrbLWfETNiP3XS/k2dDj69Hcga3o7AmfVStVrgnMFPnHLmZYJFil5tr8Zm8l1fVs1FU/MW7b+jvXU316m9+3orKVcYhyu3K+dc443FiNI7FhTk1xqesVXms6vudA6Nen3jv8EiLHRV5ypzHjHFNDQx3KCuu17ub/ACrZYrXF51XWv2B8rfZoJGyf1AE9lXdV4heUcfojfc08NuSWvHWDzJq2iucVbPBH7vfAGNLQB3OyNe5SeNprQ6LiYlluPZ1htDlOLXKO4WqtZ1wzsBHodFpB7tcCCCD3BC7aiq1puYKep8TVbw6MUvLJqWgbWm8OZ/xZ+2Ndof4vzdPVv74Lde6spVxTcrtqPFHWcN/YRa6msgvH2p8TsO29jPL8ro7ff31dXt6Lq8mcoYjxNhT8ly+tfFAX+VT00Deueql0SI42bGz29SQB7kK2ImSru98rU1l8R2M8Svsss099oJq5twEwDYRG2Q9JZrZ35R77Hqq7g8QPL9VSi8weF/KHWIjrExuLG1hZ+kKUx9ROvzd/tUIo+R8Y5Q8f/FeR4vUTGJtjr6eppalnl1FHM2Op6opWfmvGx9QdggkKzx/TWv0UN5L5PxPijDTkeWVcjI3vENNSU7PMqKuUjYjiZ22469yAPchVWefeYWUX23J4YMmFi11mUXOM1gZ+l8J5fXvX5v8A1qTxtNaGRRHjjkrFOVMJjyfEq181MXmGeCZnRNSygAuilZ+a4bH1B2CCR3VdXnxCXusy2547xbw9k+bT2upfR1la9wttGyZh0+MSytO3Aggggfhsd0ymrzXjute21WGuubozK2lp5JywHRd0tLtb9vRUpjfiNrGckWzBeWONLvx7dbs/yrbPU1LaykqpNgBgma1oDiS0AAEbIBI2N29l38n19/o6o/dOTM7XXA4h5Hg5Z4htmeU1qktcVe6ZopJJRK5nlyvj+8AN76N+nupwqE8HT2xeC/GJHdXS19c49LS46FXN6Adz+oL4t8RuXZVJJPxLwVk2WWpjixt2rqllpgn0dExeY0l4/wBR+oCt8ebia0Cipjj3xAw5PySeOM4wi7YHl74TPTW+4SCaKrYASTDMA0PIDXH00Q06JIIE/wCR8xHH3FN9zV1uNwFppXVXwgl8rzda+Xr07p9fXRUy9LqUIs8U3igrMpttvj4t4rvWbXWSgp6u4x0lS2Gjtss0TZPh31TmadI3q0R0j0PuCB0cS8R76nkug4/5R47u/Hl9uZ6bd8bO2ppax3p0MmDWjqJOhoEbIG9kA31qbF7IijmcXzI8dwuouuKYhLld0jexsdqiq2UrpQXAOPmPBA6QSfTvpZVI0VC/3Yue/wDwWrj/AOlFL/7te7g3nq8cyZHkNuqeOZcepbI7yJ68XNtZE+oDtGFpbG0OIALttLhrX6QJvrU1diKm8154qrNyBW4JgnGeTZvkNAGGtZSx/C0lN1tDmh9Q8EAlpBHYg79fVR0eJi/Ypf7fR8z8PXjA7dXzCnhvIro7hSsefQSvY1oZ7+5OgTrQOr601oZF+NcHNDmkEEbBHuv1ZURUVk/iRYM8rcK4p4/vHI15tzui4PoJBT0dI/ZHQ+oc1w6tgj01saBJBA81s8TFRZ8socf5m4zvPHD7hJ5VJcqmdtZQSP8A0XTta0NPp9QPUkDutetTYv5Fw8vy6w4Lg9xy3Ja0Ulqt8XmzS66j6gNa0D1c5xDQPckKlqTn7lrIKCO+Yf4ab/cLBM0S09XXXiCimnjPcPELmE6I7jRIPsVJLTWhUUG4x5FqORbFXVdbhWQ4pW0FT8JU0V6g8s+Z0h35M/nt05vfQ9VFM88QFJj2fP4/wTDrtn2XQsElVbrW4Rw0TTrXnzkEMPcex1vuQSAWXo1ciEgAknQHuVn+n8Sd3xq/UVBzVxNeePqOulEEF5NWy4UTZD6NlljaBHvX4/U6AJHT8SWWZlaOHsgtmN8eTZHaLlj9eyvvEVyjgbbYzA5pkMbgTKA1zn6aRvp17p601dgIcNtIIPuFAOZuUqfh3iqozaqs8t2jhqIoPhYphET1u1vqIPp+pUd4eOSOWKPhPCbDbuCK24WJsbKdt/F8gia6IykOm8ks6tDZPTvvrt6qT+Nz+aRcP6RpP3ivrzlN4Xrer22y4TcMjdQ1VY2iopK00lKzrmmDIy/oY33cdaA9yQo3xJyTDyvxdS5nBYLhZWTyyRfC1o275Ha6mu0Opp+uh3BHspX8T8HjXxfR1+TTeZ071vTN63+xQ3hfk5vL/ENDnLLKbOKqaaL4M1HxHT5byzfX0t3vW/RT4PLw7y/T8v2i9V8GKXmwC117qIsubOkykDex9HD85v5p13O1ZSrDizlyo5TxTK7pbsYFHVWK7VNphpZK7rFXJExrmuL/ACx5YcXAejtevdezhnlei5f46fkcVqks9dTVktBX2uWXzX0k0Z+6XdLd7aWn7o9SPZLCVYaLi5fk9swrA7vll4k6KG10slVLo6Lg0bDR/jOOgB7khV+7mevpfCa/mq6YW6jf8ELhHZTXdTnROkDYyZfLGuprmv8AunsQmaq2kXFw/IBlnHlhykUhpBdrdT3AU5f1+V5sTZOjq0OrXVrehvXoFEuaOWGcQYdab8+xG8C4XiC0+SKn4fy/NbI7zN9Dt68v00N79Uz4LHXjute21WGuubozK2lp5JywHRd0tLtb9vRexcbLv5Pr7/R1R+6coOBxDyPByzxDbM8prVJa4q90zRSSSiVzPLlfH94Ab30b9PdThUP4Nv5muLf52t/tcy72Xc4QW3lqg4vwTHH5llUp66+nhqxT09qh95Kibof0nuPl0T3HuWh2rObIm8LaRQ7kfk3E+KcHdk+ZVpp4OoRQ08A8yaplI2I4m9upx0fXQA7kgKp2eIHmGpo/tmi8L2Ty2QjrbLJcmR1bmfpCm8rr3r80b/WpPG01olQDKOWbFhHIlvxzMaOrs1vubemhyGoLfgJJveB8m9xP9SOsBpA7H2X04t5bxHlzGZrrjM1RFUUknk19srY/KqaKTv8ALIzZ+h0QSDo+4IFdZhnXKl6Nyxu5+FI5LYxUOjaay/UjoapjH/JJ5b4zreg4A9wrJzyasPDeVrNyBmV1teIW+tuVmtZ8qfI29IoZZ/eGF29ykepc0dI+vcbnqyvF4hcwwHJMY42d4aP4vTXWTybZa6K+05Ab1DqcI4oSGtBcSSdA6cd9iRcPNvK7eGuMG5g+xG8g1sVH8KKn4f8AvnV83V0O9On00l8eTVjoirjkPlhmBcncf4e6xGvOX1stGKoVPlfCdHlfN09B69+b6bb6fisyaqx0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFmXxHU8WU+JHhTj69Drx6tuNRXVdM/+91UkQYWMcPca6m6+khWmlUvPXEtw5Nxa1XDF7my1ZjjdYLlZK6T7jZQQTG/sdNd0NO9Hu1u9jYOvG5Uq2Wta1oa0ANA0APQLwVcNNbae5Xijt8Hxr4S+SRkYD5yxp6A5w7u16DfptULReIvkKy0TbVnfh3z/APjBE3oe6wUPxtHUPHq5kgOgD66Bfr6lTniW98w5PX3nIeRsdoMXstSWCz2MnzK2Fo31PmkBA79vlLd79mgfM9bDWdvC/neb2PievvVo4VvmW1t8uk9bX5BTV9PH8XJ1a0Q8hw6T1dvTbnEeqsvP825IzzjG+YfcvDLkcsNyo5KcebdKTTHkfI/1Oi13S4H2IBXMo7Fyb4aMzvX8SsLq864zvFW6vZbLY7dfaJna6msZomRhAAAAPZrdlp2Xdmr555TzCnFn4u4Iy2iuk/yfaeX0vwFHSfV57/lNd/lBB/A+h1ebsT/Em4tt+X2jwWUVnzuhnor7Q2arpJoJ3tc9jI/NZFsgkf3oR+65Xg2/ma4t/na3+1zK3L9DcKjja5wTxMlr5LZKx8dKHOa6UxEEMB7kdXp7+irLwn2O9Y54TsbtGQ2evtNxhkqzLR19O+CZnVVSub1MeARsEEbHcEFTeKqL+Dr/AJIcjf12rv8AciUH5E5OtHE/8IRfMmulFWXCWXEIqKgt9HGXS1lU+aMxxDQPTvpPc+w7AnQNleFLHcgx3Fs+iyCxXK0yVWYVlTTsr6V8BmicyLpkYHgdTDo6cOx0V5I8Kr63+EoqssuWLVk9npsXb8HdZqN5po6oPY3TJSOnzAx0nYHeiVdm1PiteL6u65J40XVHiVtM9vyySjjq8QtdUWmhpmkuc5sbQSDKAG62d9TX9XzhutqKsOceH6HlzAmUsFT9m5La5PjLJd2EtfSVA0QOodwxxaAdemg4d2hOD81zTLMBdRcjYndrDlNok+DrnVdE+GCuLdgTwPI6Htdo76CQD3Hylu83mas4Wes3cP8A8+/nL/Jt37paRWbuH/59/OX+Tbv3SePVKhDcqyWn/hC+Qb5RcbXLN6yzUNNbqGKlqooTbYnRsc548z9Ml/cdx1u9nK2zzHysQQfDXlBB9QbpSf8AtXM5S48z7GOaoedeH6Knut2fSChv2OzyCMXSnbrpdG49hI0Nb/8ASN0D3a75f8JbLKil+CoPDhyc++66fhaigMVM1/41BHZu/wA4tWu+k6fx4X8bzbGL3yLDfsHrMQx64XVlzs1sqJ45RD5nmCVjeg6AAbD20Ndh31taIUT44qeQKzj+mq+TKC12/IJpJJJKS2vL44Iy4ljCSSC9rSASCR29VLFjyu1YzdbP8KXef6kt/fwryZbSQZd/CY4pZL+0TW6wY4+60FJL3jdUmR48zR9xph/XE36Lu2/HcgZ/CRXbJn2K5Nsj8PbTMuZpXimdL50R8sS66S/QJ6d77Fe3nTizLrxluO8ucWS07c5xkOjZSVLg2K5Up6uqBxJAB+d4GyBqR3cHRG95ReSyXf7Fa7N/C04hU22kZTyXSwTV9X0DQkm8msiL9fUtiZv6kE+6lkHiVzL4QW+q8N3JTch10mlioiaQv/0kjszf53TpQTFsH5hk8d+HclciWefzblQ1j6iOggfLRWWIU8scNM+cbZ199nv3c/tvakmbpbr0cu369D+ELxaGnwitzJlhx811BZ6eeOLpme+QOqB5nykt0z8dsaR3Cs/+7Jyv/wCDZlP/AJ0pP/avzm/i7LLzlmPcs8Wz00Wc40HRx0tW7phuVK7fVTvJ1o/M/WyB87u4OnDjQeJbLoKYUN48OHJsV9A6TT0dvM9M531E+h8u/wA7pIV7kHP4Vs3IEHixzfLbhxpcMKxfIrcyeSmqKqGVr66N0Y69RnsXB87j29STvvpSep8QrrrlV0sPFfGeQ539lTupq240T4qWiZMD8zGzSHT3D30PxGwdqZcV3fk+/WCvu/JuN23HZKmp67ba6aYzTU9P0gBs7vul+wT2169wPRUVxhdc08M1BduO8o4sy3JbH9pTVlsyDFqL44Txya0JmAgsd8vud+2iAHGdiK+KPO+Qr/xVZf4y8L3LEo6O/U1TT3eoulPU+XIGyAMDY/mG9nv6dvrpbDy7+T6+/wBHVH7pyyP4hrny/wA08bUj7BxTk1lxihuUE/wtfRuddLhKepod8NH1GKKNpcSXepLfoda7yiGWowa9U9PE+WWSgnYyNjS5znGNwAAHqSfZL1FimPB9UQUngqxuqqpmQwQurpJJZHBrWNFXMSST6AAb2vrQeIm7ZZ51TxTw1lGXWSGR0DLuZYbfTTlp0TD5p25oPb0B/ALx+H/BL1UeAqHAMhoLhYLhcKK50EsVdTPgmpxPLO0OLHAOHZ4cPqNKOcX8j5nwnxxQcY59wrnVbUWYPp6a54tbhcaWtjL3Oa4ODm9Lj1encn1IadgWzbURjlHMM1yHxJcIVeT8VV2FTQZEIIauouENUalkkkIfGPK9AB9f0jr3V+eJD+ahnn9FSf7QqPzz+7ByZzvxPmNbxxebFi1tyOH4eglgdNVxs8yN0lXViMFsDNNa1rXHtp5J79765+tlyvPhmzS12e31Vwrqi2PjgpaSJ0ssrtj5WsaCXH8AEvw/Xj8N1gt2PeFbCKe3U7IhVWuGvmLRoySzNEj3OPudu1+oAeyr7xuwxQeHu25DEwNuNpv1LUUlQ3s+N2ng6PqAex/W0fRW7w1QV1r8O+DW250VRRVtNYqOGemqYzHJE9sLQ5rmuALXAggg9wq38Y+O5Bk/hokteNWK5XmuN0ppPhbdSvqJekdW3dDATob9dKT+y3poBEUG5fy7JcJ4iul8w7Frhkl9AENFQ0NM+od5jzoSOYwFxY37x166123sYnKq55wzzIcjy2m4B4squjKLvF13m6R7LbLQHXW9xHpI5p7D104a0XtKtnj/AAPHuNOPLdh2M0vk0NEzRe7XXPIe75Xn3c49z/qGgAFlzhPO6ri/GKyqvXBXNN6zG9zGsvt6ONuJqJiSehhLgfLbs67DZJOhvQv/AI75dqOQMkqLRLxbyFiohpjU/GZJaDRwSae1vltf1Hbz1b19GuPst+Us4ZlcjKOeqS3cj12BYFg19zrIaBrX3GO1BkVPRkjs2Wd56Q/Xto+hG9ggVH4ic/5JyPw1ZNa8k4Cullt744XvudReKWdtKWzxkP6GfMe4A7fX6bXZtrs28PfOufXWp45yHMcRy+5G7w3LG6cVdTSSOL3Oikh2D0gyEAkgaAI3sgc/mvMuUuZ+Eb9YcF4my2y2UQtmraq+0Jhra0Me1zaelpWFz3Fzg0l/oGtcPfvZOYVofiyeWq4KwqqneXyy2Ghke4nZc407CT/rXl5jvVxx3w+5pfLS98ddSWaqlglZ96N4idp4/Fv3v2L2cYUlXb+D8NoK+lmpaqnsVFDNTzsLJIntp2BzXNPdrgQQQe4IUgutsob3Ya2zXOBtRRV1PJS1ELvSSN7S1zT+sEhY+tKm8LOOWjHvCnibrXFGJLlS/aNXM0fNNNISXFx9yBpn6mAKQ87Y5aMp8OOZW29QxvgjtNRVxveP7zLFG6SOQH2Ic0H9Wx7qmcTquWPDJFPg9ZgV75CwCOeSaz3SwM8+to43uLjDLCPXRJO+wBJ0SD0t+mX5Ty94h7M/j7D+N7/geM3AiO75DlEPw0pp9/NHDD6uLgNdid70ekbK1nOs7xj74/iF856/g2LFjktyFPeKmhY2nqakkte6lqC2MSEbOnNiALu5G999aPutnN3L+CWamtfJ3AGR1PwUTYpLtirmV8UoaNeZ5TfuDQ3ov/1eism/27K+NODrZZeHMWor7U2dkFNFbq6p8ky0zBqQh/YGUge5A24nvrpMFh8TF+hi+Fu3h15XguutfD0lq+IhLvwm23Y/ENTsWDgnMOG8n4Tcr/hNbJVS29rhU0FREYqink6SWskYfTfSdEbB0dHYOsy+F/O83sfE9ferRwrfMtrb5dJ62vyCmr6eP4uTq1oh5Dh0nq7em3OI9Vb3AeEZjDyVn3LmaY/HjFRls0PwthbIHyU8UYI65S3t1u2CfQ76iQN6UZo7Fyb4aMzvX8SsLq864zvFW6vZbLY7dfaJna6msZomRhAAAAPZrdlp2XWZzD/XTz/NuSM84xvmH3Lwy5HLDcqOSnHm3Sk0x5HyP9Totd0uB9iAV7LPb8vtH8GzebPndDPRX2hxG60k0E72uexkcU7ItkEj+9CP3Xxq+eeU8wpxZ+LuCMtorpP8n2nl9L8BR0n1ee/5TXf5QQfwPobmyvH6zLeI73itZNBBWXe0T2+WWLZjZJLC6Mlu+/SC4ke+lLwsQnwyfzSMF/o7/wC2PUO8bn80i4f0jSfvFGOKuUeQeKeLbdxZkfA+e3O/2frpKaotVGJaGqZ1uc1xqN9LRp2iR1DtvtvQmvi8sWQZV4WKu3Y7j90ulwkraWQUNDTOqJwA/bvkjDide5GwmZ5J8XPW/wDIep/0F37sqkvBX/NAsf8ApdZ+/crur2ubhVU1wIcKF4IPqPyZVI+Cv+aBY/8AS6z9+5Sf1V4PB1/yQ5G/rtXf7kS+VEP7jXjyqaE/kMX5OgNRD7MiukXdw/W/qJ/F0zfouv4UsdyDHcWz6LILFcrTJVZhWVNOyvpXwGaJzIumRgeB1MOjpw7HRXf8SnH1wzzhGonxyOU5Rj87L1Zn07dy+fCeosYB3Jc3qAHu4M+itv8AJPiJ+Iuon5D5Fwnw92uV4Zeqlt3yB0Z0YrdA7q6Sfbrc12v8ZjPqpZ4mKeGl8HOaUtLCyKCG3MjjjjGmsaJIwAB7AAKNeHDHMwveUZdzbyXYaqzZLkEzaGkt1XA+F9FRQhoDQx4DmhzgPUDflh35yuXOsTpM640vuHV0phgutFLSGVo2Yi5pDXge5adHX4JblkVyuHSD4dcBIOx/Fy3f2WNVD41XNHDuINJALsxodD6/kp1x8C5M5V4Tw2k435E4ay7IW2ZnwlvveLUxrYamBvaMO1oNIboDZB0BtoIO4fzhSc28yWzHcql46vNhx+2XqnZRY/5D6m41BeSX1c8bBuJjAwNAI7dZ79wVZ486m8NtrjZd/J9ff6OqP3Tl2VycohlqMGvVPTxPllkoJ2MjY0uc5xjcAAB6kn2XONMI8Wcv58/woWvibg7Ha+65dTU9bVXW4xRhrLZC6ole0Rl+g6ZzSOn19dNDndm6E8IcPH7+BIbliQkkvtQ/WSz1h6qx9cO7xIT36Nklg9NHZ+YuXs8IuIVWH+F20Ut2xuosd6qaipmr4aykdTVD3ee9rHSNcA7+9hmt+2tKO8jYRlfEPNkfN3E1hrrxQXWVtPleL22F0r6prnf9kwxtHd4JJOhsO7+jnrpbLbGZ+vlltNDl38Jdidiv7RNbcfxx92oaSXvG+pMjh5mj6kaYf1xD6LTaojmPjnKMru2Kc08UEU2bWGLqhornG6nFfSvBLqaVr+kxv+d407p11vBLTojnM8S+YxUYoa3w3cljIAOk0sFEX0jn/hUa+7v87pIUs3MXpzbhTQ4l/CfWMWFop2ZXjcz7vBH2bI+PzS2Uj02TBGN/UH6lXVydyRj/ABVxtXZhkUhMUA6KemYdSVc530QsHu4kfsAJPYFVrw5xrm9Xyrd+ceXYqakyi5UwobdZad4kZaaTYPQXDYLzoeh7bcT3cQ2pL9mGV5P4pn5dyHwnyjdMZxmR0eNWi24/LNC6YO0auYu6Q5x6Q5oGx93v8vzXNqdLg4L44yB96r+a+U4xJnOQM/IUjx8tmoz9ynjafuu1rq9x6HuXl3D8cH815p9heqQk/T767TfEtWOeG/8AB75qGzrZxs6H/rqZ85caf3WuDb1hcNRHTVs7WTUU8m+lk8bg9nVr806LSe+g4nR0p15S0+cLEWbPEQ5v/Cj8PrNjq+2qs6/DdMvnjvP3J+J49S41yPwJn1dkNHG2mdXWGi+Mpq5zRoSdbflBOtnpLhvv23oQvIbDzRnHie4r5NyvDK61Wxt18mnstLE+qdaaZhY4z1crB0sfIXHsdaDAD3BSeOXkt1stFVnL/IPIOD3nEaXB+OqnLILrXGnuMsLXn4OMFgG+kEM6g5563fKOg79e1prONCIigIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIKx5HyzmTGslphgPFlDmdmkpfyr/tiOhnhn6ndiJOxZ09PoCdk+mlHuBON81x/Jc05K5Kjo6XJ8uqo5X22jkErKGGMODGdYJBd82uxI0xvfZKu9Fd4xMERFFEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQUFnWV+JeafIcUxrh201FPVvmprbkTb5E2OKB22tkkheQ7rDTsjsN+gPvPeEuOHcUcGWLB56uOrq6ON8lVPHvofNI90j+nffpBd0g6Gw0HQVgIrvGJgiIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICjeUZtbsTmpoq605JXGoa5zTZ7JVXEN1r75gjcGHv2B1vvr0UkRBFsR5Bx/Na650Noiu1PV2zyvi6W6Wyeglj80OLD0TMaSCGnuApSqzwz+cryh/mLP+4mUszjKqXCePbrlFVE6cUUBdFTs+9UTOIbFC3/Ge9zGD8XBWzlH8WrPMVvXIF6wq23Vk97srI311KGOHliRocNOI07QLd9JPT1AHWwpGqGr8TreLuPsX5GqHfEXyxVEtdlM8Q2aynrXh1ee3q2N/RK0ezacBXvHJHLE2WJ7XxvAc17TsOB9CD7hLPwjmNyK0uzeTEm1DvtaOhbcXQ9DtCB0jow7q1r7zHDW99l9L9frRjGOVd+v1fFQ26kj8yaeU9mj0AAHckkgADZJIABJVa3S9WnHPFLer7fa+Ggt1HhFPNUVM7tNjaK2fuf9gA7kkAd158Cqo+aruzka8Etsdpr5YLLjsw6X01RC8sdVVrD6VHbbIz2ja4O7udsXDVt0NWy4Wynroop4mTxtlbHUROikaCNgOY7Rae/cEbHoV6ERZVyrdkVpumR3ixUVQ6Sus74o62Msc0RuljErNEjTttcD23pdVVngf8v3LH+m2z+wRqzFaPFeLrQ2HHa++XOUxUVBTSVdRIGlxbHG0ucdDudAHsF9aCtp7laqa40jy+nqYmzROII21wDgdH07EKMcr/yB5x/V+v8A7M9dPCv5NMd/oym/dNT4I3Ny/YIKiSF2L8gOLHFpdHiFyc06OtgiDRH4hfxR8z4jV5Zacclt2WW+4XaV0NEy5Y5XUjZnNb1O06WJo0GgknfYdypdkuR2fEcUrsjv1W2lt9FEZZZCNn6BrQO7nOJDQ0dySAO5UP4/xy8XC+VHJ2b0hp8guMPk0Ntediy0JPU2nH/jX6D5Xe7tNHZgThEkzDNbHg1qpK++fHuZWVbKGmhoKKWsmmmc1zmsbHE1zidMd6D2UcdzTikLTJXWTOaGAfeqKrEbnHGz8XO8jQH4lefl7/tpxt/XOk/s9SrMTgc2w5DY8psMF6xy7Ul0t8+/LqaWQSMOuxGx6EHsQe4PYr4ZXlNnwvEavJb9LNFb6UsEjoIHzv2+RsbQ1jAXOJc9o0B7qB3OggwnxJ43cLHG2lpc0NVQXakjAbHNUw076mGq6R6SdMUsbnfnBzd/dC9PP/8AIDdf9Nt39vp0zkeg8z4tGC+rsOeUcI+9PUYhdGMYPq4/D9h+KmVhyCyZRYYL3j10pblb5wTHU00ge12jojt6EHYIPcEEFdJVZxz8K7nTlGWx9Bsjqmga8wa8k3IQv+KLdduvp+FD9fnA777QdbOM0s9GKzGK23562WSIarsesVfP5ZPdro54InN6gdbGyPZwIJCr+1cqRYyanJ+Sr1nNVT0cPkxPZhNztlFFHsAzTtLHNfM4624kMb6Ma3Z3fvoNlVLQb5jzuK+S/PgFgqibbH+Ze66N2jUn9KnhcCI/Z7wX+jW7swWrS1DKyhhq4myNZNG2RrZWFjgCNgOae7T37g9wufjeRWnLcVosjsVQ6ot1azzIJXMcwubsj7rgCO4Pquqqz8Pf82XD/wDQj+8ep8VZir258x41aJawV2P5yyOjLxNUNxS4uhAZvqeJBD0lnYnqB1rvvSsJR7Pf5Kcn/omq/cuSDq2m6UV7sFDerbKZaOup46qCQtLS6N7Q5p0e42COxXmt2RWm6ZHeLFRVDpK6zvijrYyxzRG6WMSs0SNO21wPbelyeL/5DcM/oKh/s7FHsD/l+5Y/022f2CNMRNaXJrPWZnccUhqXC7W+nhqp6d8bm/kpS4Mewkae3cbwS3eiNHS66qvlUfxQyvGeXIPkgtU32VfCPzrbUva0vd9RDMIpPwb5imWd5ZT4RxzdsomhNQ6jg3BTN+9UzuIZFC38XyOYwfi5MV7LTklovl2vFutlQ6eW0VIo6xwjcGMmMbZOgOI04hr2b1vROj37LrKJca4pPhvG1BabjM2pu8vXW3WqH/xitmcZZ379x1ucB9Gho9l08YtmQWq11MGR5L9v1MlZNNFUfBspfKhc8mOHpYdO6G6b1HufUpR2kRFAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAUJvfK2G4rllRYsxuH8W+ljJKavu2oKOtaW7PlTk9Bc07aWOId7gEEFTZfjmte3pe0OH0I2gq3i2qZknI+fZ/bWSusV1noqS21UkbmCsbTQFr5ow4AmMvkc1rvR3QSOy8OfWyblDmG14BR3m42q3Yy2LIbnW20xiUVZcRRQjzGPb26ZZSC0/djPYkFXCiupiuaviq5V9BPQ1nLmez008bopYpHW4texw05pHwfcEEhfHhqqqrTZLnxhd6qWpuWHTtoIp5yC+poHt66OY67EmP8AJkj8+F6sxE0xS15xCzZP42qarvcclVFasUp6uCkc8+Q+cVswZJIz0eWdy3fYE79QCOzmVgu2G5dNylg9DLWPka1uR2GnHe6QNGhPC30+KiHp/wB0aCw9+nVoImmOfYr5acmxuiv9iroq63VsQmp6iI7a9p/6wfYg9wQQe4XQRFFVngf8v3LH+m2z+wRqzERKIhyv/IHnH9X6/wDsz108K/k0x3+jKb901dxEGcBy9xbnvLDrrk/IWN27GcYrCy1Wysr4433CuZ2dWysJ7RxnbYgfU9Un6CtW3c08R3e70tqtfJOL1ldVStgp6aC4xPfLI46a1rQdkkkABTpFbYip+dLva7DDx9eL1cKa32+lzClknqqmQRxxN+Hqe7nHsAuo7nrhnpPlcl43Uv8AaKkrGzyO/BrGbc4/gAVYiJqqtsUd25F5Xtue1lorrRjVhgnZZYLhCYKmvqJm9ElU+J3zRRtjDmMa4BzvMc4gDQP9eIeCOq8Ot6pZuvy5am3xu6HljtGvgB04EEH8QdhWgibyir71wPh12xyutkV3zOlkqYHxMqf41XOYwuI0HhklQWO0e+nAg+69nEFzpo8Slwios9BY77jThRXG20EQigJI6mVMLR/zUw28H131tPdpViImriiuX+TsVnzmPiC4ZvbMYpZYG1ORXCqrW00jaV33aSAkg+bMPvOH3I9n7zmqU0HNfA9qtVNbLbyXhlLR0sTYYKeG5QtZExo01rQHdgAANKzETYj4UNdR3O101yt1VFVUdVE2eCeFwcyWNwDmuaR2IIIIP4qg+EeY+KLD4f8AGLPeuRcat9wpqUxz0tTcIo5IneY7s5pOwVoNE1UVsvIuHZXabpWYTfrflMlti8yams9VHPJstcWM+8AHP6HBvUQNj1UDy/m3j678WXq22e8fFZJXUE1FTYz5bm3M1MkZY2F1MR5jD1OAJI6R3O9d1cy/OlvX19I6ta3rvpNiOLhtoqMf44x+w1ZaZ7fbaakkLTsF0cTWHX7Qodgf8v3LH+m2z+wRqzETVeG82i33/Ha+xXanbUUFfTyUtRC70fG9pa4ftBKoDBKi+ZlnVj4tyNs839zOYz3qplaQ2vnZtlrdv36oiag/47GLRqJLgLi4zllgzG11Nxx2vNZTU1XNQyv8p8fTNE4skbp4BOiNbHY+xXaQAD0GlAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBF85p4aaB01RNHFG3u58jg1o/WSvjR3K3XFjn2+vpatrfvGCVsgH69FB6kREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERcDMM2xbAbAy95feIrXb3zspmzysc4GR2+lumgnvo/6kHfREQEREBERAREQERcDIc2xbFbxZLVkF4ioay+VPwduhexzjUzbaOgdIIB25vrod0HfREQEREBF56+uo7Xaqm53GqipaOlidPPUTODWRRtBc5zifQAAkn8FzMUy/Gc5xmLIcSvNNdrZK5zG1NOTrqadFpB0QR9CEHbREQEREBFwLNm2LZDld7xmzXiKrutjexlypWscHUzngloJIAO+k+hPou+gIiICLz19dR2u1VNzuNVFS0dLE6eeomcGsijaC5znE+gABJP4LmYpl+M5zjMWQ4leaa7WyVzmNqacnXU06LSDogj6EIO2iIgIuBiObYtnlnqLriV4iulHT1L6OWaNjmhkzAC5nzAHYDm/h3XfQEREBERARRy557htlzu2YXdcjoaS/3RhkorfK/UkzdkbA9tlrgN62QQN6TKM9w3Cqu1UuV5HQ2ma7T/AA1Cypf0meTtsD8B1N2ToDqGz3CYJGiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi4OX5pjGA4xJkWX3eK12yORsTqmVrnAOcdNGmgnufwXVrLjQ2+zVF2rquKmoaeF1RNUSu6WRxtb1Oe4n0AAJJQelFxMUy/Gc5xmLIcSvNNdrZK5zG1NOTrqadFpB0QR9CF20BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVc828r0PD3E9TlE1N8dcJZG0dsoNndTUvB6W9u/SAC4676aQO5CsZZm8SoZP4kOAaK46+y5L/M97XH5HTNfTeUHD09TofrKvjNqV88c8NN15Ip4cv8R+S3e/XeqAmZjtPVOp6G3Nd3EQawg9Q3o9JA3vu77x6148HPF8cXx3HdVfcEvsI6qa5Wu5TyFj/bqbI8kj8GuafxWh0V9qZFCcG8o5jLnd64U5c8k5pYoxPT3GIBsd2pO2pR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Cw+Ks5R5vu1oIdYKnKXCifH/AHt7w6YyFntoh8Z/UQvTccJ8WecW9+OZRnuDYxZ5x5VXWY1BUSVksZ+8G+YAG7HuHNKt7COPrPxhxXDh2C00cLKWF5hfVnZnnI35kzmjZJdrZA7DsAAAFOodq7515JyAXeg4X4tkEud5CzUlSw/LZqM/fqZHD7rtb6fceo79IdYXF/G2P8U8bUOIY/GXRwjzKmqeNSVc7tdcz/xJHp7AADsAs+4Lw94pcCyjIcnortxPdb9f5/OrrrdZK+Wdw9omlsTQyMezQPoPRrQLMsMPiwGU245LV8RusoqY/jxbxX/EGDqHmeV1t6evp3rfbetq2cZKkRblL/CGcK/6Hcf3Eq0iqkzPi7IMi8U/HvJdFWW2O045T1cVZBNI8TyGWN7W+W0MLSAXDe3D9q9HL+Jct5NecRn4xzemxyloK4zXeObqHxUW2dOtNd16DZB0HQd1jZ7KXnFWmiIsqIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAuHmOI2PO8HuOJZJTSVFruEflTxxyujcQCHAhzSCCCAf2d9jsu4iDPFN4feVMXhFBx94kcjttpZ8sNFeLdFczCz2a173DQA9g0LsYZ4dYrbyNScg8kZ5eOQslof+wJriwQ01Ef0ooAXBrge476B762ARd6LXtUwREWVEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBER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G49hI0Nb/wDSN0D3a75f8JbLKil+CoPDhyc++66fhaigMVM1/wCNQR2bv84tWhUV39TET44qeQKzj+mq+TKC12/IJpJJJKS2vL44Iy4ljCSSC9rSASCR29VLERZUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFnbxtOczwlXBzHFp+0aTuDr/nFZNuFaILmtG3EAfUr9WbrH4bqHk6w0uZ873i85Df7nE2r+zo6x9PRWtrx1NghjYRrpBAJJ7kE/UmsstoOTfDny9bOM+J8mq62x51EKS0QXmTz/sep81jHyM7a01rwfTRDvmDiwE2eMvEqa26SAQCRs+g+q/Vndvg24xuFAajL7vlORZDK3qnv1Vc5BOZPdzB3a0b9AQ7XuSvn4e75lmMcv5zwLl1+qcgbjjYa20XKrd1TOpJA09D3E7OhJFr6EvHoGgMnw1oxfgc0uIBBI9Rv0WceQ7tlnMPiMqeDMWyKtxrG7JRx1uT3S3O6KmcyBrmUsT/AM3bXN2ff59g9PS70Vfg44wpbeajC7hkmLZFGOqnvtHc5XTNk9nPBdpw36hvST7EJk+mtDoqc8PnImS5bj+QYjnvlOzHELgbXc54gAyqb38qcAAa6g13oNHp323oURYcbzPPfGny/hFmymuxzHKqsp6q+V1ud0Vb442ubHTxP/M6zK8k69Ge/cF6mtsggkgEbHqPov1ZuvXg048gs01ZgN0yHGsqiYZKS8xXOVz/ADgNgybPoT69PSVMPDNyPeuS+Baa55Oeq+2yrltNwl0B5ssXSesgdgSx7N67dW9aHZLONhrr4JxNUYXy5mWby5vebwzJJvObbKs/kqP5i7TfmPVrfS3s3paNd/VWUs4cPvcfHZzi0uJaG27QJ7D8kp1yRwzUcoZjTzX7kHI6LFYaYMfjlqlFMyom6nEySyt+ZzS0tHSR2I2CN6Sznki1AQd6IOux17L9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uGWOmtFtY4yeTBsl7jrbnucS57tADbiToAeykCIgIiICIiAiIg/iaGGop5KeoiZLFI0sfHI0Oa5pGiCD6g/RU/ffCrwFkNxfXVvHVFBO89TvgKiejZ/5OJ7WD/UrjRWWzoQnA+IONeMhKcHxGgtM0reiSpb1Szvb+iZZC5/TsA63pTZEU3QREQEREBERAREQVvmnAPD3INykuWVYHbaqukO5KuAvpZpD9Xvhc0vP4uJXjw/w3cJ4Le4rxjuB0TLhC4PiqauWWrdE4ejmec9wa4exABCtRFdqYIiKKIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICLw3i4utFjqbm23Vtw+HZ5hpqFgkmeB69DSR1EDZ0Ds60AToHgY3yRiuZXc0WJVj71DHD5tTXUbQaelcddMMryRqY99xgFzdfOG7G2CWoiICIiAiIgIuRkuRUuLWJ15uFJXTUUTx8TLSReaaaM+sz2g9RY31d0hxA760CR48Yzew5lUVbsYmfc7bTab9r0/S6jnkPqyKQH8oW9uotBaCddXUCAEjREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAUE5Jvt2slwwaO11jqdtxyenoKsBrT5sDoZ3OYdg62WNOxo9lO1U3O1HXV8HH1HbbtLaquTMKQR1sMTJXwnyKjuGyAtP07g+qs7KtlQSwX27VniDzfHqmsdJbbfa7TPS05a0CJ8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M5gPv5Ya7104KeWWy2rHMeo7FY6CGgt1FE2CnpoW6bGwDsB/7T3PqV70TRWbsD5LoaWezY9yz5FmkLhE+6Wn464UjHHfTHUmZodremulje4ADZdpTTFcateG4VbMWsrJG0Fup208Pmu6nuAHdzj7uJ2SfckrsImiM2HEfsTP8syb7Q8/+ME1NN8P5XT8P5NO2HXV1Hq309XoNb139V7Ku2ZBNnVtulLkvw1lp6eaOrs/wbH/ABcjuny5POJ6mdGnfKOx33XaRTQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEUH5h5Al4t4UvmeQ2tlzfbGxOFI+byhJ1zMi+8Ada69+nskmicIuTit5dkeCWXIX04p3XKggrTCHdQjMkbX9O9DeurW9LrICIiAiIgIqXzvkTKbF4v8AjPAbdWRR2O+01ZJXwOha50jo4nuZp5G26LR6FXQrZgIiKAiIgIqX4b5EynMeaeXMdv1ZFPb8bu8VJbY2QtYYo3GbYJA27+9t7n6K6FbMBERQEREBERARFS+d8iZTYvF/xngNurIo7Hfaaskr4HQtc6R0cT3M08jbdFo9CrJouhERQEREBERAREQEREBFTnid5AyfjLw+VmVYhWRUlzirKeFsssLZQGvfpw6XAj0VvUz3S0UMjztzmNcf1kK5xpr6oirXKZOaG8+4vHilPZncfmE/bUlQW+e2Tb962er7vl9PSPXq6u2lJBZSIoLzPk13w3gLK8psE7ILnbqB89PK+MSBrxrRLT2P7Uk0TpFEeLL9cso4PxHJLzK2a43Kz0tZUyNYGB0j4mucQ0dh3J7BS5AREQEVL+HLkTKeRcdzKryqsiqZbXk9VbKUxwti6IGNjLWnpA2fmPc91dCtmcEERFAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVKeLn+Zpmv+bpf7ZCrrVKeLn+Zpmv8Am6X+2Qq+PcS9JbidJea/wx47RY7d2Wi7TY3SMpLg+Bs4p5DTM6XmN3Z2j7H1UCfx14nI43Pf4kra1rRsudidIAB9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Pclce4cbUmJ8kYxl/GeJWq3lkz7be6K2QQ0baihmAPmuA6Q50MjI3j1cWmQDZICuyotFVpwH/IfT/wBMXn/661SstQbiLH7vi/FcNnvtJ8LWtuVzqDF5jX/JNcKiaM7aSO7JGHW9jejoghT4r1cr/wAgecf1fr/7M9RLEMk5cbx7YWwcW2WSIW6nDHuyfpLh5TdEj4Y6/VtTnkK11984iyqy2uDz66us9XS00PU1vmSPhe1rduIA2SBskBQ3H8v5BtOJWu1T8HZW+WkpIqd7mXO09LnMYGkjdZ6dlZ0iw7DVXqtsUVRkNop7TcHF3mUlPV/FMYASBqToZvY0fujW9Lz2bE7Bj99vd5tNB8PW3uobVXCXzXv86RrAxrtOJDflAGmgBfLF79fL5DUvvWE3XGHROaI2XCppJjODvZb8PNIBrQ+9r17bX1s1zyCtv17pbvjX2XRUdQ2O31nxjJvtCMsBdJ0NG4tOJb0u7nW1FdpERQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFSXiY5Jv8AhHHlsx3CXEZflteyz2t4OnQl5AfKPxHU1oPsXg+ysm3CpHnvP3EfGle635ZmVHBcG/eoKZr6mdv+UyMOLP8ApaUcxzxa8DZLdGW6DNmW+okIawXSmlpWH/5xzegftcF1+JOAsH4ssUL2W6nvGSyjzK+/10YlqJ5j3eWudssbvegP2knZUyzDAMMz6yS2nMMbt92ppGlv/GIgXx/ix4+Zh/FpBV/inKQxSxzwMmhkZJG9ocx7DsOB7ggj1C/tZf4fqr3wp4lKvw83i61Nzxm5UjrrilRVO6pIWDqL6cn6AMk7D3j6gB1lW3yxzPifEdrozeWVlxu9xf5Vtsltj82qrH7A+Vvs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VuqsVwrH7LUPBDp7fb4oJCPoXNaDr8NqSqe2dGfrPPEfiPw8YfSYdyndIsMzSyQsobjRXs/DNldG0NErHu00hwAdre9k62NExjm7k+g5xtzOCeGKluQ114niN3u9MxzqO3UrJGvLnS60dlrfu7GttBLiAtGZJgeEZi6N2WYhYr2+MajfcaGKocwfRpc0kfsXssGMY3ituNBjGP2uy0pPUYLdSsp2E/UhgAJ/FNnZl6VnznaKXH/BPlNhoer4W34+KOHq9eiNrWN3+wBSHgv+bHx9/V6h/cMU2uVstt5tM9rvFvpbhQ1DDHPS1cTZYpW/ouY4EOH4EL+qCgobXa6e22yip6Kipo2wwU1NGI44mNGmta1oAa0AAADsFN4wxnbxkf8AIfjz+u1D+7mWkVzbzjuP5HBTwZDYrbdoqadtTAyvpWTthlbsNkYHg9Lxs6cO42V0kt4wZtzb/Cbcaf1brP8AdqVamRcx4Pi3Mlh4wu9ZUx3++RiWlYyAujAc5zWdb/YucxwHr6d9AhSyfHcfqcnpskqbFbZrzSxmGnuUlKx1TCw72xkpHU1p6nbAOu5+q/irxnHLhktFkVfYbbU3ega5lJcJqZj56cO9QyQjqaDs+h9yrspjqoiLKiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD+HxRyFpkjY4tOwXDev1L+0RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFXfLnM+GcN4n9rZNVmWsnBFDaqcg1FY8ezW+zR2289h+JIBSaLDc5rGF73BrWjZJOgAqxuvP/GlHfX2Gy3Osyy8s+9bsXo5LlI369TogWN179ThpVbY8A5X8QsjMj5qr63E8KlIfR4RbJXQSVLPUGrf2do9vlPc+oEfvonGcTxrDLBFZMUsdDaLfH92CjiEYJ+rtd3O+rjsn3K1kidoDU82VdvpHV1z4Z5OpaBo6nVIttPP0N93OjiqHSAD/ACVL8G5DwzknHPtzC79TXWka7ok8vbZIXfoyRuAcx34EBSdYs5Pq28F/whuLZPj2qK0ZhHFFeaSP5YpXPmMUjy0dtjccv+UHfpHaTTptNEXEv+WWTHJaamuFS99dVkikt9LE6epqSPXoiYC4gbG3a6W724gd1lXbRU5ffEfieG5/bsV5AxnKMQdcv+w7jdYad1JL3A7yQTSdOiW72Pl2C7pCuMEEbB2FbMBEXLyDI7BililvWS3mhtNvi+/VVszYmA+w2T3J9h6lQdRFX2D848U8kZBUWPCsypLpcYGGR9MIpYXloOi5nmMb1gbGy3elYKWYCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiJ6DZQV3zRy9YeGeMajJ7vqoq37ht1vDtPq5yNhv4NHq53sPqSAaY4B4cvma5M3xBc37uWRXDpqLPbKhmoqCH1jk8s9gdHbG/mg9R287bX9o34r/AB01NfXf8awDDtmCA94p2NfpgPsfOkBed+sbOn2C3WAANAaC3f4zPrPYi5GQ5XjGI25lflWR2qyUr3+Wye5VcdOx7tb6QXkA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ttGHdXQ4gkebI4B8mjodMbNnyw4vLjIRM0RFzaEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAWZeSvCZPyt4i3Z7lmeyS2ECFjLPHSakZDGBuBsnXprXO63F3Tv5z291ppFZbOks1/EUUUFOyCCNkcUbQxjGDQaANAAewX9oiiuLlmJ47nOH1uLZXbI7laa1obPTSOc0O04OBDmkOaQQCCCCCF5MI4/w7jjGhYMJsNNaKDrMjo4i5zpHka6nvcS550ANuJ7ABSVE0EREFSeIjheDmziV9igqIqS9UUvxdsqpd9DZQCDG/XfoeDo69CGnR1o8Hi/lc4dx1bcQ5pttfh+QWinZRSVldTPNFXMjaGNmjqmAxElob1AuB3vXZXys95Fd8z5z5XvXHmF3+rxnBcem+DyC/wBvPTV19VrbqOnf+YG+j3Dvv12CA7U5mVKmmReIrhXGLZDW3HkK0Tee3qhgt7zWTSD0Go4g5w2fQkAKLz+IHLL5b5qvj3hLKa2jijdK67ZI+Oy0bWAbModISXMAG+wB7KeYJwxxnxtAz+KWJUFLVAfNcJmefVPPuTM/bu/roED8As1+JLmO88n5nF4duGybhVVs3w93rqZ3yO13dAHj0jbomR3p26f0gbJLeEqvMDsuaeMjxFVOZZTcH2Ky2GGJrZrS0gQFrtxxQGTfzuPXIXEHWvQbaFuXBuM8Q48pqgY7bnmuqz1Vt1rZXVNbWu/SlneS5311vQ9gF4+IeMLNxFxRb8Ns+pXRDzayrLel1VUOA65D/qAA9mtaO+lOlPLy3rpZBERZUREQERRvkDNbRx1xpeM0vb9UdtpzMWA6Mr/Rkbf8Zzi1o/EoMleM/M7hmnI2K+H7FJfMq6mrhnr2tPbzpT0QRu16BrXOkdvtpzD7LYOKY3bsPwa0YraWdNFa6SOjh7aJaxob1H8TrZP1JWGfB5Ybryn4m8l5nyn/AIxJQF8wkI+U1dR1NaG7/NZGHgD83bPwW/lvz4/izOeRERYaEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBUJgd4j4Ox284nl2NZNI77Yra+nutqtE9whuUc8pkY8vga7okDSGOa/p+52JHdX2isoyhnec+IDmwyYdxNgN8wnHqj8nV5JkUZoJ5Iz2Plg/Mxp+rA55/xe6tDgnw+Ypwhjz/AIF32nkNWwNrrxMzpc8evlxt79Ee++tkkgEk6GrfRW+XGRMERFlRERAREQFUPPnCVbzjjFux/wDjvPj1vpJzUywxUQqBUya00v8Ayjfugu0Pq4k70NW8isuciCcRcU49w5xpT4hj75Z2iR1RVVkwAkqpnaBe4DsOwa0D2DR6nZM7RFLdBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k=",alt:"Hirur\u0161ki \u010Delik"})),React.createElement("div",{className:"li-envelope li-front","aria-hidden":"true"},React.createElement("div",{className:"li-side li-left li-paper"}),React.createElement("div",{className:"li-side li-right li-paper"}),React.createElement("div",{className:"li-pocket-shadow"}),React.createElement("div",{className:"li-pocket li-paper"}),React.createElement("svg",{className:"li-seams",viewBox:"0 0 680 440",fill:"none"},React.createElement("path",{d:"M1 438 309 218Q340 199 371 218L679 438",stroke:"#fffdf7",strokeOpacity:".8"}),React.createElement("path",{d:"M1 435 309 215Q340 196 371 215L679 435",stroke:"#87745b",strokeOpacity:".16"})),React.createElement("div",{className:"li-envelope-imprint"},"Jak kao hirur\u0161ki \u010Delik")),React.createElement("div",{className:"li-stage-footer"},React.createElement("span",{className:"li-scroll-cue"},"Skroluj polako da otvori\u0161",React.createElement("span",{className:"li-cue-line","aria-hidden":"true"},React.createElement("i",null))),React.createElement("button",{className:"li-skip",type:"button"},"Presko\u010Di"),React.createElement("button",{className:"li-replay",type:"button"},"Otvori ponovo"),React.createElement("a",{className:"li-shop",href:"/nakit/prsten-riznica/"},"Pogledaj prsten"))))}window.MJKoverta={mount(n){let t=window.ReactDOM.createRoot(n);return t.render(window.React.createElement(Tu,{theme:"light",fontFamily:"Montserrat, Arial, sans-serif"})),t}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
