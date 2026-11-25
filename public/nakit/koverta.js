(()=>{var wu=window.React;var{useEffect:$a,useRef:Rl,useState:Nl,useMemo:Ig,useCallback:yg,createElement:Ag,Fragment:Eg}=wu;var rc=0,Oo=1,ac=2;var Us=1,sa=2,Zn=3,$i=0,_e=1,Xe=2,gn=0,Jn=1,Uo=2,Fo=3,Bo=4,oc=5;var Mn=100,lc=101,cc=102,uc=103,hc=104,dc=200,fc=201,pc=202,mc=203,jo=204,Ho=205,gc=206,Mc=207,xc=208,Ic=209,yc=210,Ac=211,Ec=212,vc=213,Tc=214,Rr=0,Nr=1,wr=2,Fn=3,Cr=4,Lr=5,Dr=6,Pr=7,ra=0,Sc=1,bc=2,Ei=0,ko=1,Vo=2,Wo=3,Fs=4,Go=5,Xo=6,Bs=7;var qo=300,xn=301,Kn=302,aa=303,oa=304,Bn=1e3,ei=1001,_r=1002,we=1003,Rc=1004;var js=1005;var Pe=1006,la=1007;var di=1008;var qe=1009,Qo=1010,Yo=1011,$n=1012,ca=1013,fi=1014,ri=1015,pi=1016,ua=1017,ha=1018,In=1020,Zo=35902,Jo=35899,Ko=1021,$o=1022,mi=1023,Di=1026,Oi=1027,da=1028,fa=1029,tn=1030,pa=1031;var ma=1033,Hs=33776,ks=33777,Vs=33778,Ws=33779,ga=35840,Ma=35841,xa=35842,Ia=35843,ya=36196,Aa=37492,Ea=37496,va=37488,Ta=37489,Gs=37490,Sa=37491,ba=37808,Ra=37809,Na=37810,wa=37811,Ca=37812,La=37813,Da=37814,Pa=37815,_a=37816,za=37817,Oa=37818,Ua=37819,Fa=37820,Ba=37821,ja=36492,Ha=36494,ka=36495,Va=36283,Wa=36284,Xs=36285,Ga=36286;var ps=2300,zr=2301,Tr=2302,No=2303,wo=2400,Co=2401,Lo=2402;var Nc=3200;var qs=0,wc=1,gi="",Te="srgb",ms="srgb-linear",gs="linear",le="srgb";var Sr=7680;var Cc=519,Lc=512,Dc=513,Pc=514,tl=515,_c=516,zc=517,el=518,il=519,Oc=35044,Xa=35048;var nl="300 es",ii=2e3,jn=2001;function Cu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Lu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Hn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uc(){let n=Hn("canvas");return n.style.display="block",n}var wl={},kn=null;function sl(...n){let t="THREE."+n.shift();kn?kn("log",t,...n):console.log(t,...n)}function Fc(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=Fc(n);let t="THREE."+n.shift();if(kn)kn("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ft(...n){n=Fc(n);let t="THREE."+n.shift();if(kn)kn("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function hn(...n){let t=n.join(" ");t in wl||(wl[t]=!0,zt(...n))}function Bc(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var jc={[Rr]:Rr,[wr]:Dr,[Cr]:Cr,[Fn]:Lr,[Nr]:Nr,[Dr]:wr,[Pr]:Pr,[Lr]:Fn},xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var to=Math.PI/180,Or=180/Math.PI;function Qs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function Du(n,t){return(n%t+t)%t}function eo(n,t,e){return(1-e)*n+e*t}function Hc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pu(n,t){if(t.constructor===Float32Array)return n;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function _u(n,t){if(t.constructor===Float32Array)return n;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var qt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||c!==u||l!==d||h!==g){let p=c*u+l*d+h*g+f*y;p<0&&(u=-u,d=-d,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let T=Math.acos(p),b=Math.sin(T);m=Math.sin(m*T)/b,o=Math.sin(o*T)/b,c=c*m+u*o,l=l*m+d*o,h=h*m+g*o,f=f*m+y*o}else{c=c*m+u*o,l=l*m+d*o,h=h*m+g*o,f=f*m+y*o;let T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-o*d,t[e+2]=l*g+h*d+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new _,Cl=new Ge,jt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],y=s[0],p=s[3],m=s[6],T=s[1],b=s[4],A=s[7],R=s[2],E=s[5],M=s[8];return r[0]=a*y+o*T+c*R,r[3]=a*p+o*b+c*E,r[6]=a*m+o*A+c*M,r[1]=l*y+h*T+f*R,r[4]=l*p+h*b+f*E,r[7]=l*m+h*A+f*M,r[2]=u*y+d*T+g*R,r[5]=u*p+d*b+g*E,r[8]=u*m+d*A+g*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*l-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return hn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(no.makeScale(t,e)),this}rotate(t){return hn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(no.makeRotation(-t)),this}translate(t,e){return hn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},no=new jt,Ll=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){let n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:t,whitePoint:i,transfer:gs,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),n}var te=zu();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Un(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var En,Ur=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{En===void 0&&(En=Hn("canvas")),En.width=t.width,En.height=t.height;let s=En.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=En}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hn("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ou=0,Vn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function so(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ur.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Uu=0,ro=new _,Be=class n extends xi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ei,s=ei,r=Pe,a=di,o=mi,c=qe,l=n.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Qs(),this.name="",this.source=new Vn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bn:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bn:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=qo;Be.DEFAULT_ANISOTROPY=1;var xe=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,A=(d+1)/2,R=(m+1)/2,E=(h+u)/4,M=(f+y)/4,S=(g+p)/4;return b>A&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=M/i):A>R?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=E/s,r=S/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=M/r,s=S/r),this.set(i,s,r,e),this}let T=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-y)/T,this.z=(u-h)/T,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fr=class extends xi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Be({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vn(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ce=class extends Fr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ms=class extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Br=class extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,c,l,h,f,u,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,f,u,d,g,y,p)}set(t,e,i,s,r,a,o,c,l,h,f,u,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/vn.setFromMatrixColumn(t,0).length(),r=1/vn.setFromMatrixColumn(t,1).length(),a=1/vn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,y=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-y*l,e[9]=-o*c,e[2]=y-u*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=l*h,y=l*f;e[0]=u+y*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=y+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=l*h,y=l*f;e[0]=u-y*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,y=o*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+y,e[1]=c*f,e[5]=y*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=y-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-y*f}else if(t.order==="XZY"){let u=a*c,d=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+y,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fu,t,Bu)}lookAt(t,e,i){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ji.crossVectors(i,Ze),ji.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ji.crossVectors(i,Ze)),ji.normalize(),er.crossVectors(Ze,ji),s[0]=ji.x,s[4]=er.x,s[8]=Ze.x,s[1]=ji.y,s[5]=er.y,s[9]=Ze.y,s[2]=ji.z,s[6]=er.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],y=i[6],p=i[10],m=i[14],T=i[3],b=i[7],A=i[11],R=i[15],E=s[0],M=s[4],S=s[8],z=s[12],C=s[1],L=s[5],F=s[9],H=s[13],w=s[2],k=s[6],Q=s[10],O=s[14],tt=s[3],V=s[7],G=s[11],$=s[15];return r[0]=a*E+o*C+c*w+l*tt,r[4]=a*M+o*L+c*k+l*V,r[8]=a*S+o*F+c*Q+l*G,r[12]=a*z+o*H+c*O+l*$,r[1]=h*E+f*C+u*w+d*tt,r[5]=h*M+f*L+u*k+d*V,r[9]=h*S+f*F+u*Q+d*G,r[13]=h*z+f*H+u*O+d*$,r[2]=g*E+y*C+p*w+m*tt,r[6]=g*M+y*L+p*k+m*V,r[10]=g*S+y*F+p*Q+m*G,r[14]=g*z+y*H+p*O+m*$,r[3]=T*E+b*C+A*w+R*tt,r[7]=T*M+b*L+A*k+R*V,r[11]=T*S+b*F+A*Q+R*G,r[15]=T*z+b*H+A*O+R*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],T=c*d-l*u,b=o*d-l*f,A=o*u-c*f,R=a*d-l*h,E=a*u-c*h,M=a*f-o*h;return e*(y*T-p*b+m*A)-i*(g*T-p*R+m*E)+s*(g*b-y*R+m*M)-r*(g*A-y*E+p*M)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],T=e*o-i*a,b=e*c-s*a,A=e*l-r*a,R=i*c-s*o,E=i*l-r*o,M=s*l-r*c,S=h*y-f*g,z=h*p-u*g,C=h*m-d*g,L=f*p-u*y,F=f*m-d*y,H=u*m-d*p,w=T*H-b*F+A*L+R*C-E*z+M*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/w;return t[0]=(o*H-c*F+l*L)*k,t[1]=(s*F-i*H-r*L)*k,t[2]=(y*M-p*E+m*R)*k,t[3]=(u*E-f*M-d*R)*k,t[4]=(c*C-a*H-l*z)*k,t[5]=(e*H-s*C+r*z)*k,t[6]=(p*A-g*M-m*b)*k,t[7]=(h*M-u*A+d*b)*k,t[8]=(a*F-o*C+l*S)*k,t[9]=(i*C-e*F-r*S)*k,t[10]=(g*E-y*A+m*T)*k,t[11]=(f*A-h*E-d*T)*k,t[12]=(o*z-a*L-c*S)*k,t[13]=(e*L-i*z+s*S)*k,t[14]=(y*b-g*R-p*T)*k,t[15]=(h*R-f*b+u*T)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,g=r*f,y=a*h,p=a*f,m=o*f,T=c*l,b=c*h,A=c*f,R=i.x,E=i.y,M=i.z;return s[0]=(1-(y+m))*R,s[1]=(d+A)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(d-A)*E,s[5]=(1-(u+m))*E,s[6]=(p+T)*E,s[7]=0,s[8]=(g+b)*M,s[9]=(p-T)*M,s[10]=(1-(u+y))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=vn.set(s[0],s[1],s[2]).length(),o=vn.set(s[4],s[5],s[6]).length(),c=vn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let l=1/a,h=1/o,f=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=ii,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===ii)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===jn)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ii,c=!1){let l=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===ii)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===jn)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},vn=new _,oi=new ue,Fu=new _(0,0,0),Bu=new _(1,1,1),ji=new _,er=new _,Ze=new _,Pl=new ue,_l=new Ge,Ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ju=0,zl=new _,Tn=new Ge,bi=new ue,ir=new _,os=new _,Hu=new _,ku=new Ge,Ol=new _(1,0,0),Ul=new _(0,1,0),Fl=new _(0,0,1),Bl={type:"added"},Vu={type:"removed"},Sn={type:"childadded",child:null},ao={type:"childremoved",child:null},Le=class n extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new _,e=new Ii,i=new Ge,s=new _(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new jt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Tn.setFromAxisAngle(t,e),this.quaternion.multiply(Tn),this}rotateOnWorldAxis(t,e){return Tn.setFromAxisAngle(t,e),this.quaternion.premultiply(Tn),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(os,ir,this.up):bi.lookAt(ir,os,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Tn.setFromRotationMatrix(bi),this.quaternion.premultiply(Tn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vu),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new _(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wu={type:"move"},Wn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},nr={h:0,s:0,l:0};function oo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Du(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=oo(a,r,t+1/3),this.g=oo(a,r,t),this.b=oo(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let i=kc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.workingToColorSpace(Fe.copy(this),t),Math.round(Zt(Fe.r*255,0,255))*65536+Math.round(Zt(Fe.g*255,0,255))*256+Math.round(Zt(Fe.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Fe.copy(this),e);let i=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Te){te.workingToColorSpace(Fe.copy(this),t);let e=Fe.r,i=Fe.g,s=Fe.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(nr);let i=eo(Hi.h,nr.h,e),s=eo(Hi.s,nr.s,e),r=eo(Hi.l,nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new kt;kt.NAMES=kc;var Pi=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new _,Ri=new _,lo=new _,Ni=new _,bn=new _,Rn=new _,jl=new _,co=new _,uo=new _,ho=new _,fo=new xe,po=new xe,mo=new xe,Gi=class n{constructor(t=new _,e=new _,i=new _){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),Ri.subVectors(i,e),lo.subVectors(t,e);let a=li.dot(li),o=li.dot(Ri),c=li.dot(lo),l=Ri.dot(Ri),h=Ri.dot(lo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(a,Ni.y),c.addScaledVector(o,Ni.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,i),mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),Ri.subVectors(t,e),li.cross(Ri).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),li.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;bn.subVectors(s,i),Rn.subVectors(r,i),co.subVectors(t,i);let c=bn.dot(co),l=Rn.dot(co);if(c<=0&&l<=0)return e.copy(i);uo.subVectors(t,s);let h=bn.dot(uo),f=Rn.dot(uo);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(bn,a);ho.subVectors(t,r);let d=bn.dot(ho),g=Rn.dot(ho);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Rn,o);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return jl.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(jl,o);let m=1/(p+y+u);return a=y*m,o=u*m,e.copy(i).addScaledVector(bn,a).addScaledVector(Rn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yi=class{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),rr.subVectors(this.max,ls),Nn.subVectors(t.a,ls),wn.subVectors(t.b,ls),Cn.subVectors(t.c,ls),ki.subVectors(wn,Nn),Vi.subVectors(Cn,wn),on.subVectors(Nn,Cn);let e=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-on.z,on.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,on.z,0,-on.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-on.y,on.x,0];return!go(e,Nn,wn,Cn,rr)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Nn,wn,Cn,rr))?!1:(ar.crossVectors(ki,Vi),e=[ar.x,ar.y,ar.z],go(e,Nn,wn,Cn,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new _,new _,new _,new _,new _,new _,new _,new _],ci=new _,sr=new yi,Nn=new _,wn=new _,Cn=new _,ki=new _,Vi=new _,on=new _,ls=new _,rr=new _,ar=new _,ln=new _;function go(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ln.fromArray(n,r);let o=s.x*Math.abs(ln.x)+s.y*Math.abs(ln.y)+s.z*Math.abs(ln.z),c=t.dot(ln),l=e.dot(ln),h=i.dot(ln);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ve=new _,or=new qt,Gu=0,ke=class extends xi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=t!==void 0?rl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_u(t,this.array)}};var Is=class extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ys=class extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ke=class extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xu=new yi,cs=new _,Mo=new _,_i=class{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Xu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(cs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Mo)),this.expandByPoint(cs.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qu=0,ti=new ue,xo=new Le,Ln=new _,Je=new yi,us=new yi,Ne=new _,ni=class n extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?ys:Is)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(Je.min,us.min),Je.expandByPoint(Ne),Ne.addVectors(Je.max,us.max),Je.expandByPoint(Ne)):(Je.expandByPoint(us.min),Je.expandByPoint(us.max))}Je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(Ln.fromBufferAttribute(t,l),Ne.add(Ln)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let z=0;z<i.count;z++)o[z]=new _,c[z]=new _;let h=new _,f=new _,u=new _,d=new qt,g=new qt,y=new qt,p=new _,m=new _;function T(z,C,L){l[z]=l[C]=l[L]=1,h.fromBufferAttribute(i,z),f.fromBufferAttribute(i,C),u.fromBufferAttribute(i,L),d.fromBufferAttribute(r,z),g.fromBufferAttribute(r,C),y.fromBufferAttribute(r,L),f.sub(h),u.sub(h),g.sub(d),y.sub(d);let F=1/(g.x*y.y-y.x*g.y);isFinite(F)&&(p.copy(f).multiplyScalar(y.y).addScaledVector(u,-g.y).multiplyScalar(F),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(F),o[z].add(p),o[C].add(p),o[L].add(p),c[z].add(m),c[C].add(m),c[L].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let z=0,C=b.length;z<C;++z){let L=b[z],F=L.start,H=L.count;for(let w=F,k=F+H;w<k;w+=3)T(t.getX(w+0),t.getX(w+1),t.getX(w+2))}let A=new _,R=new _,E=new _,M=new _;function S(z){E.fromBufferAttribute(s,z),M.copy(E);let C=o[z];A.copy(C),A.sub(E.multiplyScalar(E.dot(C))).normalize(),R.crossVectors(M,C);let F=R.dot(c[z])<0?-1:1;a.setXYZW(z,A.x,A.y,A.z,F)}for(let z=0,C=i.count;z<C;++z)l[z]&&S(z);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new _,r=new _,a=new _,o=new _,c=new _,l=new _,h=new _,f=new _;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?d=c[y]*o.data.stride+o.offset:d=c[y]*h;for(let m=0;m<h;m++)u[g++]=l[d++]}return new ke(u,h,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=new _,Qu=new _,Yu=new jt,ui=class{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Io.subVectors(i,e).cross(Qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zu=0,Ai=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Jn,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Ho,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Fn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ci=new _,yo=new _,lr=new _,cr=new _,As=class{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yo.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(yo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=cr.dot(this.direction),c=-cr.dot(lr),l=cr.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yo).addScaledVector(lr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Ci.subVectors(t.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=i.x-a.x,T=i.y-a.y,b=i.z-a.z,A=Math.abs(c),R=Math.abs(l),E=Math.abs(h),M,S,z,C,L,F,H,w,k,Q,O,tt;if(A>=R&&A>=E?(z=c,F=f,k=g,tt=m,c>=0?(M=l,S=h,C=u,L=d,H=y,w=p,Q=T,O=b):(M=h,S=l,C=d,L=u,H=p,w=y,Q=b,O=T)):R>=E?(z=l,F=u,k=y,tt=T,l>=0?(M=h,S=c,C=d,L=f,H=p,w=g,Q=b,O=m):(M=c,S=h,C=f,L=d,H=g,w=p,Q=m,O=b)):(z=h,F=d,k=p,tt=b,h>=0?(M=c,S=l,C=f,L=u,H=g,w=y,Q=m,O=T):(M=l,S=c,C=u,L=f,H=y,w=g,Q=T,O=m)),z===0)return null;let V=M/z,G=S/z,$=1/z,ft=C-V*F,_t=L-G*F,B=H-V*k,ut=w-G*k,vt=Q-V*tt,Dt=O-G*tt,gt=vt*ut-Dt*B,ct=ft*Dt-_t*vt,Jt=B*_t-ut*ft;if(s){if(gt<0||ct<0||Jt<0)return null}else if((gt<0||ct<0||Jt<0)&&(gt>0||ct>0||Jt>0))return null;let at=gt+ct+Jt;if(at===0)return null;let Et=$*(gt*F+ct*k+Jt*tt);return(at>0?Et<0:Et>0)?null:this.at(Et/at,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xi=class extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hl=new ue,cn=new As,ur=new _i,kl=new _,hr=new _,dr=new _,fr=new _,Ao=new _,pr=new _,Vl=new _,mr=new _,fe=class extends Le{constructor(t=new ni,e=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Ao.fromBufferAttribute(f,t),a?pr.addScaledVector(Ao,h):pr.addScaledVector(Ao.sub(e),h))}e.add(pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),cn.copy(t.ray).recast(t.near),!(ur.containsPoint(cn.origin)===!1&&(cn.intersectSphere(ur,kl)===null||cn.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),cn.copy(t.ray).applyMatrix4(Hl),!(i.boundingBox!==null&&cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),b=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let A=T,R=b;A<R;A+=3){let E=o.getX(A),M=o.getX(A+1),S=o.getX(A+2);s=gr(this,m,t,i,l,h,f,E,M,S),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let T=o.getX(p),b=o.getX(p+1),A=o.getX(p+2);s=gr(this,a,t,i,l,h,f,T,b,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),b=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let A=T,R=b;A<R;A+=3){let E=A,M=A+1,S=A+2;s=gr(this,m,t,i,l,h,f,E,M,S),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let T=p,b=p+1,A=p+2;s=gr(this,a,t,i,l,h,f,T,b,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ju(n,t,e,i,s,r,a,o){let c;if(t.side===_e?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===$i,o),c===null)return null;mr.copy(o),mr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(mr);return l<e.near||l>e.far?null:{distance:l,point:mr.clone(),object:n}}function gr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,hr),n.getVertexPosition(c,dr),n.getVertexPosition(l,fr);let h=Ju(n,t,e,i,hr,dr,fr,Vl);if(h){let f=new _;Gi.getBarycoord(Vl,hr,dr,fr,f),s&&(h.uv=Gi.getInterpolatedAttribute(s,o,c,l,f,new qt)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,o,c,l,f,new qt)),a&&(h.normal=Gi.getInterpolatedAttribute(a,o,c,l,f,new _),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new _,materialIndex:0};Gi.getNormal(hr,dr,fr,u.normal),h.face=u,h.barycoord=f}return h}var Es=class extends Be{constructor(t=null,e=1,i=1,s,r,a,o,c,l=we,h=we,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends ke{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Dn=new ue,Wl=new ue,Mr=[],Gl=new yi,Ku=new ue,hs=new fe,ds=new _i,Ts=class extends fe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ku)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),Gl.copy(t.boundingBox).applyMatrix4(Dn),this.boundingBox.union(Gl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),ds.copy(t.boundingSphere).applyMatrix4(Dn),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(i),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dn),Wl.multiplyMatrices(i,Dn),hs.matrixWorld=Wl,hs.raycast(t,Mr);for(let a=0,o=Mr.length;a<o;a++){let c=Mr[a];c.instanceId=r,c.object=this,e.push(c)}Mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Es(new Float32Array(s*this.count),s,this.count,da,ri));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},un=new _i,$u=new qt(.5,.5),xr=new _,qi=class{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],T=r[12],b=r[13],A=r[14],R=r[15];if(s[0].setComponents(l-a,d-h,m-g,R-T).normalize(),s[1].setComponents(l+a,d+h,m+g,R+T).normalize(),s[2].setComponents(l+o,d+f,m+y,R+b).normalize(),s[3].setComponents(l-o,d-f,m-y,R-b).normalize(),i)s[4].setComponents(c,u,p,A).normalize(),s[5].setComponents(l-c,d-u,m-p,R-A).normalize();else if(s[4].setComponents(l-c,d-u,m-p,R-A).normalize(),e===ii)s[5].setComponents(l+c,d+u,m+p,R+A).normalize();else if(e===jn)s[5].setComponents(c,u,p,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(t){un.center.set(0,0,0);let e=$u.distanceTo(t.center);return un.radius=.7071067811865476+e,un.applyMatrix4(t.matrixWorld),this.intersectsSphere(un)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xl=new ue,jr=class n{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new qi),i[s].setFromProjectionMatrix(Xl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new qi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Gn=class extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Hr=new _,kr=new _,ql=new ue,fs=new As,Ir=new _i,Eo=new _,Ql=new _,Vr=class extends Le{constructor(t=new ni,e=new Gn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),kr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Hr.distanceTo(kr);t.setAttribute("lineDistance",new Ke(i,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;ql.copy(s).invert(),fs.copy(t.ray).applyMatrix4(ql);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=d,p=g-1;y<p;y+=l){let m=h.getX(y),T=h.getX(y+1),b=yr(this,t,fs,c,m,T,y);b&&e.push(b)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(d),m=yr(this,t,fs,c,y,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=d,p=g-1;y<p;y+=l){let m=yr(this,t,fs,c,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=yr(this,t,fs,c,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yr(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),kr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,kr,Eo,Ql)>i)return;Eo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Eo);if(!(l<t.near||l>t.far))return{distance:l,point:Ql.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ss=class extends Vr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var bs=class extends Be{constructor(t=[],e=xn,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dn=class extends Be{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zi=class extends Be{constructor(t,e,i=fi,s,r,a,o=we,c=we,l,h=Di,f=1){if(h!==Di&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Rs=class extends zi{constructor(t,e=fi,i=xn,s,r,a=we,o=we,c,l=Di){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ns=class extends Be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qi=class n extends ni{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(f,2));function g(y,p,m,T,b,A,R,E,M,S,z){let C=A/M,L=R/S,F=A/2,H=R/2,w=E/2,k=M+1,Q=S+1,O=0,tt=0,V=new _;for(let G=0;G<Q;G++){let $=G*L-H;for(let ft=0;ft<k;ft++){let _t=ft*C-F;V[y]=_t*T,V[p]=$*b,V[m]=w,l.push(V.x,V.y,V.z),V[y]=0,V[p]=0,V[m]=E>0?1:-1,h.push(V.x,V.y,V.z),f.push(ft/M),f.push(1-G/S),O+=1}}for(let G=0;G<S;G++)for(let $=0;$<M;$++){let ft=u+$+k*G,_t=u+$+k*(G+1),B=u+($+1)+k*(G+1),ut=u+($+1)+k*G;c.push(ft,_t,ut),c.push(_t,B,ut),tt+=6}o.addGroup(d,tt,z),d+=tt,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new qt:new _);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new _,s=[],r=[],a=[],o=new _,c=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new _)}r[0]=new _,a[0]=new _;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Zt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Zt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function al(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Yl=new _,Zl=new _,vo=new al,To=new al,So=new al,ws=class extends fn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new _){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Zl.subVectors(s[0],s[1]).add(s[0]),l=Zl);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),vo.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,y,p),To.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,y,p),So.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),To.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),So.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(vo.calc(c),To.calc(c),So.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new _().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function th(n,t){let e=1-n;return e*e*e*t}function eh(n,t){let e=1-n;return 3*e*e*n*t}function ih(n,t){return 3*(1-n)*n*n*t}function nh(n,t){return n*n*n*t}function bo(n,t,e,i,s){return th(n,t)+eh(n,e)+ih(n,i)+nh(n,s)}var Xn=class extends fn{constructor(t=new _,e=new _,i=new _,s=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(bo(t,s.x,r.x,a.x,o.x),bo(t,s.y,r.y,a.y,o.y),bo(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}};var si=class n extends ni{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let T=m*u-a;for(let b=0;b<l;b++){let A=b*f-r;g.push(A,-T,0),y.push(0,0,1),p.push(b/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<o;T++){let b=T+l*m,A=T+l*(m+1),R=T+1+l*(m+1),E=T+1+l*m;d.push(b,A,E),d.push(A,R,E)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function yn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Jl(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Jl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function je(n){let t={};for(let e=0;e<n.length;e++){let i=yn(n[e]);for(let s in i)t[s]=i[s]}return t}function Jl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sh(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ol(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Vc={clone:yn,merge:je},rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yn(t.uniforms),this.uniformsGroups=sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new _().fromArray(s.value);break;case"v4":this.uniforms[i].value=new xe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ue().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wr=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cs=class extends pn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ls=class extends Ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=ra,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gr=class extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xr=class extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pn(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ar(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Yi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Co:r=t,o=2*e-i;break;case Lo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Co:a=t,c=2*i-e;break;case Lo:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-u*p+2*u*y-u*g,T=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,b=(-1-d)*p+(1.5+d)*y+.5*g,A=d*p-d*y;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+T*a[l+R]+b*a[c+R]+A*a[f+R];return r}},Qr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},Yr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zr=class extends Yi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-e)/(s-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*y+a[c+p]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[l+g],p=a[c+g],m=d*u+g*2,T=f[m],b=f[m+1],A=t*u+g*2,R=h[A],E=h[A+1],M=lh(i,e,T,R,s);r[g]=Wc(M,y,b,E,p)}return r}};function Wc(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function oh(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function lh(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Wc(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=oh(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var $e=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pn(e,this.TimeBufferType),this.values=Pn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pn(t.times,Array),values:Pn(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ar(t.settings)&&(i.settings={inTangents:Pn(t.settings.inTangents,Array),outTangents:Pn(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ps:e=this.InterpolantFactoryMethodDiscrete;break;case zr:e=this.InterpolantFactoryMethodLinear;break;case Tr:e=this.InterpolantFactoryMethodSmooth;break;case No:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Tr;case this.InterpolantFactoryMethodBezier:return No}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Ar(this.settings)&&(Kl(this.settings.inTangents,t),Kl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ar(this.settings)&&($l(this.settings.inTangents,t),$l(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ft("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ft("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Lu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ft("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let y=e[f+g];if(y!==e[u+g]||y!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ar(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kl(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function $l(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=zr;var Zi=class extends $e{constructor(t,e,i){super(t,e,i)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ps;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Jr.prototype.ValueTypeName="color";var Kr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Kr.prototype.ValueTypeName="number";var $r=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Ge.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ds=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends $e{constructor(t,e,i){super(t,e,i)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ps;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};ta.prototype.ValueTypeName="vector";var br={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(tc(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!tc(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function tc(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ea=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gc=new ea,qn=class{constructor(t){this.manager=t!==void 0?t:Gc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var _n=new WeakMap,ia=class extends qn{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=br.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=_n.get(a);f===void 0&&(f=[],_n.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=Hn("img");function c(){h(),e&&e(this);let f=_n.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}_n.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),br.remove(`image:${t}`);let u=_n.get(this)||[];for(let d=0;d<u.length;d++){let g=u[d];g.onError&&g.onError(f)}_n.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),br.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Ps=class extends qn{constructor(t){super(t)}load(t,e,i,s){let r=new Be,a=new ia(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},_s=class extends Le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Ro=new ue,ec=new _,ic=new _,zs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(ec),ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ic),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ro,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===jn||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Er=new _,vr=new Ge,Mi=new _,mn=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Er,vr,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Er,vr,Mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Er,vr,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Er,vr,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new _,nc=new qt,sc=new qt,We=class extends mn{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,nc,sc),e.subVectors(sc,nc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Do=class extends zs{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}},Os=class extends _s{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Do}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ki=class extends mn{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Po=class extends zs{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qn=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Po}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zn=-90,On=1,Yn=class extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(zn,On,t,e);s.layers=this.layers,this.add(s);let r=new We(zn,On,t,e);r.layers=this.layers,this.add(r);let a=new We(zn,On,t,e);a.layers=this.layers,this.add(a);let o=new We(zn,On,t,e);o.layers=this.layers,this.add(o);let c=new We(zn,On,t,e);c.layers=this.layers,this.add(c);let l=new We(zn,On,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===jn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},na=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ll="\\[\\]\\.:\\/",ch=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",uh="[^"+ll.replace("\\.","")+"]",hh=/((?:WC+[\/:])*)/.source.replace("WC",cl),dh=/(WCOD+)?/.source.replace("WCOD",uh),fh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),ph=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),mh=new RegExp("^"+hh+dh+fh+ph+"$"),gh=["material","materials","bones","map"],_o=class{constructor(t,e,i){let s=i||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ge=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ch,"")}static parseTrackName(t){let e=mh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);gh.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Ft("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=_o;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tg=new Float32Array(1);var zo=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function ul(n,t,e,i){let s=Mh(i);switch(e){case Ko:return n*t;case da:return n*t/s.components*s.byteLength;case fa:return n*t/s.components*s.byteLength;case tn:return n*t*2/s.components*s.byteLength;case pa:return n*t*2/s.components*s.byteLength;case $o:return n*t*3/s.components*s.byteLength;case mi:return n*t*4/s.components*s.byteLength;case ma:return n*t*4/s.components*s.byteLength;case Hs:case ks:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Ws:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ma:case Ia:return Math.max(n,16)*Math.max(t,8)/4;case ga:case xa:return Math.max(n,8)*Math.max(t,8)/2;case ya:case Aa:case va:case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Gs:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ja:case Ha:case ka:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Va:case Wa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xs:case Ga:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mh(n){switch(n){case qe:case Qo:return{byteLength:1,components:1};case $n:case Yo:case pi:return{byteLength:2,components:1};case ua:case ha:return{byteLength:2,components:4};case fi:case ca:case ri:return{byteLength:4,components:1};case Zo:case Jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function fu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ih(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let y=f[d];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var yh=`#ifdef USE_ALPHAHASH
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
#endif`,bh=`#ifdef USE_AOMAP
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
#endif`,Rh=`#ifdef USE_AOMAP
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
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
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
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rd=`#ifdef USE_MAP
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
vec3 nonPerturbedNormal = normal;`,Fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
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
}`,bf=`#include <common>
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
}`,Rf=`#if DEPTH_PACKING == 3200
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
}`,Ff=`#define MATCAP
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
}`,Bf=`#define MATCAP
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
}`,jf=`#define NORMAL
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
}`,Qt={alphahash_fragment:yh,alphahash_pars_fragment:Ah,alphamap_fragment:Eh,alphamap_pars_fragment:vh,alphatest_fragment:Th,alphatest_pars_fragment:Sh,aomap_fragment:bh,aomap_pars_fragment:Rh,batching_pars_vertex:Nh,batching_vertex:wh,begin_vertex:Ch,beginnormal_vertex:Lh,bsdfs:Dh,iridescence_fragment:Ph,bumpmap_pars_fragment:_h,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Fh,color_fragment:Bh,color_pars_fragment:jh,color_pars_vertex:Hh,color_vertex:kh,common:Vh,defaultnormal_vertex:Wh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Xh,emissivemap_fragment:qh,emissivemap_pars_fragment:Qh,colorspace_fragment:Yh,colorspace_pars_fragment:Zh,envmap_fragment:Jh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:$h,envmap_pars_vertex:td,envmap_physical_pars_fragment:hd,envmap_vertex:ed,fog_vertex:id,fog_pars_vertex:nd,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:ud,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:Md,lights_fragment_begin:xd,lights_fragment_maps:Id,lights_fragment_end:yd,lightprobes_pars_fragment:Ad,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Sd,map_fragment:bd,map_pars_fragment:Rd,map_particle_fragment:Nd,map_particle_pars_fragment:wd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Dd,morphcolor_vertex:Pd,morphnormal_vertex:_d,morphtarget_pars_vertex:zd,morphtarget_vertex:Od,normal_fragment_begin:Ud,normal_fragment_maps:Fd,normal_pars_fragment:Bd,normal_pars_vertex:jd,normal_vertex:Hd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Qd,premultiplied_alpha_fragment:Yd,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:Kd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:uf,specularmap_pars_fragment:hf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:Mf,uv_vertex:xf,worldpos_vertex:If,background_vert:yf,background_frag:Af,backgroundCube_vert:Ef,backgroundCube_frag:vf,cube_vert:Tf,cube_frag:Sf,depth_vert:bf,depth_frag:Rf,distance_vert:Nf,distance_frag:wf,equirect_vert:Cf,equirect_frag:Lf,linedashed_vert:Df,linedashed_frag:Pf,meshbasic_vert:_f,meshbasic_frag:zf,meshlambert_vert:Of,meshlambert_frag:Uf,meshmatcap_vert:Ff,meshmatcap_frag:Bf,meshnormal_vert:jf,meshnormal_frag:Hf,meshphong_vert:kf,meshphong_frag:Vf,meshphysical_vert:Wf,meshphysical_frag:Gf,meshtoon_vert:Xf,meshtoon_frag:qf,points_vert:Qf,points_frag:Yf,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:Kf,sprite_frag:$f},Tt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Ti={basic:{uniforms:je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:je([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:je([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:je([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:je([Tt.points,Tt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:je([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:je([Tt.common,Tt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:je([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:je([Tt.sprite,Tt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:je([Tt.common,Tt.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:je([Tt.lights,Tt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Ti.physical={uniforms:je([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var qa={r:0,b:0,g:0},tp=new ue,pu=new jt;pu.set(-1,0,0,0,1,0,0,0,1);function ep(n,t,e,i,s,r){let a=new kt(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(T){let b=T.isScene===!0?T.background:null;if(b&&b.isTexture){let A=T.backgroundBlurriness>0;b=t.get(b,A)}return b}function g(T){let b=!1,A=d(T);A===null?p(a,o):A&&A.isColor&&(p(A,1),b=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,b){let A=d(b);A&&A.isCubeTexture?(l===void 0&&(l=new fe(new Qi(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:yn(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:_e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,E,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=A,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(b.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pu),l.material.toneMapped=te.getTransfer(A.colorSpace)!==le,(h!==A||f!==A.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new fe(new si(2,2),new Ve({name:"BackgroundMaterial",uniforms:yn(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=te.getTransfer(A.colorSpace)!==le,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,b){T.getRGB(qa,ol(n)),e.buffers.color.setClear(qa.r,qa.g,qa.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:g,addToRenderList:y,dispose:m}}function ip(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,F,H,w,k){let Q=!1,O=f(L,w,H,F);r!==O&&(r=O,l(r.object)),Q=d(L,w,H,k),Q&&g(L,w,H,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,A(L,F,H,w),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function f(L,F,H,w){let k=w.wireframe===!0,Q=i[F.id];Q===void 0&&(Q={},i[F.id]=Q);let O=L.isInstancedMesh===!0?L.id:0,tt=Q[O];tt===void 0&&(tt={},Q[O]=tt);let V=tt[H.id];V===void 0&&(V={},tt[H.id]=V);let G=V[k];return G===void 0&&(G=u(c()),V[k]=G),G}function u(L){let F=[],H=[],w=[];for(let k=0;k<e;k++)F[k]=0,H[k]=0,w[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:w,object:L,attributes:{},index:null}}function d(L,F,H,w){let k=r.attributes,Q=F.attributes,O=0,tt=H.getAttributes();for(let V in tt)if(tt[V].location>=0){let $=k[V],ft=Q[V];if(ft===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),$===void 0||$.attribute!==ft||ft&&$.data!==ft.data)return!0;O++}return r.attributesNum!==O||r.index!==w}function g(L,F,H,w){let k={},Q=F.attributes,O=0,tt=H.getAttributes();for(let V in tt)if(tt[V].location>=0){let $=Q[V];$===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let ft={};ft.attribute=$,$&&$.data&&(ft.data=$.data),k[V]=ft,O++}r.attributes=k,r.attributesNum=O,r.index=w}function y(){let L=r.newAttributes;for(let F=0,H=L.length;F<H;F++)L[F]=0}function p(L){m(L,0)}function m(L,F){let H=r.newAttributes,w=r.enabledAttributes,k=r.attributeDivisors;H[L]=1,w[L]===0&&(n.enableVertexAttribArray(L),w[L]=1),k[L]!==F&&(n.vertexAttribDivisor(L,F),k[L]=F)}function T(){let L=r.newAttributes,F=r.enabledAttributes;for(let H=0,w=F.length;H<w;H++)F[H]!==L[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function b(L,F,H,w,k,Q,O){O===!0?n.vertexAttribIPointer(L,F,H,k,Q):n.vertexAttribPointer(L,F,H,w,k,Q)}function A(L,F,H,w){y();let k=w.attributes,Q=H.getAttributes(),O=F.defaultAttributeValues;for(let tt in Q){let V=Q[tt];if(V.location>=0){let G=k[tt];if(G===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let $=G.normalized,ft=G.itemSize,_t=t.get(G);if(_t===void 0)continue;let B=_t.buffer,ut=_t.type,vt=_t.bytesPerElement,Dt=ut===n.INT||ut===n.UNSIGNED_INT||G.gpuType===ca;if(G.isInterleavedBufferAttribute){let gt=G.data,ct=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Jt=G.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)m(V.location+at,gt.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let at=0;at<V.locationSize;at++)p(V.location+at);n.bindBuffer(n.ARRAY_BUFFER,B);for(let at=0;at<V.locationSize;at++)b(V.location+at,ft/V.locationSize,ut,$,ct*vt,(Jt+ft/V.locationSize*at)*vt,Dt)}else{if(G.isInstancedBufferAttribute){for(let gt=0;gt<V.locationSize;gt++)m(V.location+gt,G.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let gt=0;gt<V.locationSize;gt++)p(V.location+gt);n.bindBuffer(n.ARRAY_BUFFER,B);for(let gt=0;gt<V.locationSize;gt++)b(V.location+gt,ft/V.locationSize,ut,$,ft*vt,ft/V.locationSize*gt*vt,Dt)}}else if(O!==void 0){let $=O[tt];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(V.location,$);break;case 3:n.vertexAttrib3fv(V.location,$);break;case 4:n.vertexAttrib4fv(V.location,$);break;default:n.vertexAttrib1fv(V.location,$)}}}}T()}function R(){z();for(let L in i){let F=i[L];for(let H in F){let w=F[H];for(let k in w){let Q=w[k];for(let O in Q)h(Q[O].object),delete Q[O];delete w[k]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let F=i[L.id];for(let H in F){let w=F[H];for(let k in w){let Q=w[k];for(let O in Q)h(Q[O].object),delete Q[O];delete w[k]}}delete i[L.id]}function M(L){for(let F in i){let H=i[F];for(let w in H){let k=H[w];if(k[L.id]===void 0)continue;let Q=k[L.id];for(let O in Q)h(Q[O].object),delete Q[O];delete k[L.id]}}}function S(L){for(let F in i){let H=i[F],w=L.isInstancedMesh===!0?L.id:0,k=H[w];if(k!==void 0){for(let Q in k){let O=k[Q];for(let tt in O)h(O[tt].object),delete O[tt];delete k[Q]}delete H[w],Object.keys(H).length===0&&delete i[F]}}}function z(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:M,initAttributes:y,enableAttribute:p,disableUnusedAttributes:T}}function np(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==mi&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let S=M===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==qe&&M!==ri&&!S&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:A,maxSamples:R,samples:E}}function rp(n){let t=this,e=null,i=0,s=!1,r=!1,a=new ui,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let T=r?0:i,b=T*4,A=m.clippingState||null;c.value=A,A=h(g,u,b,d);for(let R=0;R!==b;++R)A[R]=e[R];m.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=d+y*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,A=d;b!==y;++b,A+=4)a.copy(f[b]).applyMatrix4(T,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Js=class extends Ce{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
	`)}function pp(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===aa||d===oa)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Js(g.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===aa||d===oa,y=d===xn||d===Kn;if(g||y){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new es(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let T=u.image;return g&&T&&T.height>0||y&&T&&c(T)?(i===null&&(i=new es(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===aa?u.mapping=xn:d===oa&&(u.mapping=Kn),u}function c(u){let d=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&d++;return d===g}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function mp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&hn("WebGLRenderer: "+i+" extension not supported."),s}}}function gp(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)t.update(y[p],n.ARRAY_BUFFER)}function f(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let T=y!==null?y.array.length:p.array.length/3-1,b=p.count>=65535?ys:Is,A=new b(Math.ceil(T/3)*6,1),R=A.array;if(y!==null){let M=y.array;m=y.version;for(let S=0,z=0;S<T;S+=3){let C=M[S+0],L=M[S+1],F=M[S+2];R[z++]=C,R[z++]=L,R[z++]=L,R[z++]=F,R[z++]=F,R[z++]=C}}else{m=p.version;for(let M=0,S=0;M<T;M+=3){let z=M+0,C=M+1,L=M+2;R[S++]=z,R[S++]=C,R[S++]=C,R[S++]=L,R[S++]=L,R[S++]=z}}A.version=m;let E=r.get(g);E&&t.remove(E),r.set(g,A)}function u(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&f(g)}else f(g);return r.get(g)}function d(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function Mp(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=u[p];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function xp(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Ft("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ip(n,t,e){let i=new WeakMap,s=new xe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let z=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",z)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let A=o.attributes.position.count*b,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let E=new Float32Array(A*R*4*f),M=new Ms(E,A,R,f);M.type=ri,M.needsUpdate=!0;let S=b*4;for(let C=0;C<f;C++){let L=p[C],F=m[C],H=T[C],w=A*R*4*C;for(let k=0;k<L.count;k++){let Q=k*S;d===!0&&(s.fromBufferAttribute(L,k),E[w+Q+0]=s.x,E[w+Q+1]=s.y,E[w+Q+2]=s.z,E[w+Q+3]=0),g===!0&&(s.fromBufferAttribute(F,k),E[w+Q+4]=s.x,E[w+Q+5]=s.y,E[w+Q+6]=s.z,E[w+Q+7]=0),y===!0&&(s.fromBufferAttribute(H,k),E[w+Q+8]=s.x,E[w+Q+9]=s.y,E[w+Q+10]=s.z,E[w+Q+11]=H.itemSize===4?s.w:1)}}u={count:f,texture:M,size:new qt(A,R)},i.set(o,u),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function yp(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ap={[ko]:"LINEAR_TONE_MAPPING",[Vo]:"REINHARD_TONE_MAPPING",[Wo]:"CINEON_TONE_MAPPING",[Fs]:"ACES_FILMIC_TONE_MAPPING",[Xo]:"AGX_TONE_MAPPING",[Bs]:"NEUTRAL_TONE_MAPPING",[Go]:"CUSTOM_TONE_MAPPING"};function Ep(n,t,e,i,s,r){let a=new Ce(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new ni;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let f=new Wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new fe(h,f),d=new Ki(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,T=null,b=[],A=!1;this.setSize=function(R,E){a.setSize(R,E),o!==null&&o.setSize(R,E),c!==null&&c.setSize(R,E);for(let M=0;M<b.length;M++){let S=b[M];S.setSize&&S.setSize(R,E)}},this.setEffects=function(R){b=R,A=b.length>0&&b[0].isRenderPass===!0;let E=a.width,M=a.height;b.length>0&&o===null&&(o=new Ce(E,M,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Ce(E,M,{type:pi,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(z=>z.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new zi(E,M),r===!0&&(l.format=Oi,l.type=In)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let z=0;z<b.length;z++){let C=b[z];C.setSize&&C.setSize(E,M),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(R,E){if(p||R.toneMapping===Ei&&b.length===0)return!1;if(T=E,E!==null){let M=E.width,S=E.height;(a.width!==M||a.height!==S)&&this.setSize(M,S)}return A===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=Ei,!0},this.hasRenderPass=function(){return A},this.end=function(R,E){R.toneMapping=m,p=!0;let M=a,S=o;for(let z=0;z<b.length;z++){let C=b[z];C.enabled!==!1&&(C.render(R,S,M,E),C.needsSwap!==!1&&(M=S,S=S===o?c:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,f.defines={},te.getTransfer(g)===le&&(f.defines.SRGB_TRANSFER="");let z=Ap[y];z&&(f.defines[z]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=M.texture,R.setRenderTarget(T),R.render(u,d),T=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Mu=new Be,xu=new zi(1,1),Iu=new Rs(1),yu=new Ms,Au=new Br,Eu=new bs,Zc=[],Jc=[],Kc=new Float32Array(16),$c=new Float32Array(9),tu=new Float32Array(4);function is(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ya(n,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function Sp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function bp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function Rp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),be(e,i)}}function Np(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,i))return;$c.set(i),n.uniformMatrix3fv(this.addr,!1,$c),be(e,i)}}function wp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,i))return;Kc.set(i),n.uniformMatrix4fv(this.addr,!1,Kc),be(e,i)}}function Cp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Lp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function Dp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function Pp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function _p(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function Op(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function Up(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function Za(n){return n.version===0&&(n.compareFunction=il,n.needsUpdate=!0),n}function Fp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Za(xu):r=Mu,e.setTexture2D(t||r,s)}function Bp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Au,s)}function jp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Za(Iu):r=Eu,e.setTextureCube(t||r,s)}function Hp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||yu,s)}function kp(n){switch(n){case 5126:return vp;case 35664:return Tp;case 35665:return Sp;case 35666:return bp;case 35674:return Rp;case 35675:return Np;case 35676:return wp;case 5124:case 35670:return Cp;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Pp;case 5125:return _p;case 36294:return zp;case 36295:return Op;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Hp}}function Vp(n,t){n.uniform1fv(this.addr,t)}function Wp(n,t){let e=is(t,this.size,2);n.uniform2fv(this.addr,e)}function Gp(n,t){let e=is(t,this.size,3);n.uniform3fv(this.addr,e)}function Xp(n,t){let e=is(t,this.size,4);n.uniform4fv(this.addr,e)}function qp(n,t){let e=is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qp(n,t){let e=is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Yp(n,t){let e=is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zp(n,t){n.uniform1iv(this.addr,t)}function Jp(n,t){n.uniform2iv(this.addr,t)}function Kp(n,t){n.uniform3iv(this.addr,t)}function $p(n,t){n.uniform4iv(this.addr,t)}function tm(n,t){n.uniform1uiv(this.addr,t)}function em(n,t){n.uniform2uiv(this.addr,t)}function im(n,t){n.uniform3uiv(this.addr,t)}function nm(n,t){n.uniform4uiv(this.addr,t)}function sm(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),be(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Za(xu):a=Mu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function rm(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Au,r[a])}function am(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),be(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Za(Iu):a=Eu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function om(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yu,r[a])}function lm(n){switch(n){case 5126:return Vp;case 35664:return Wp;case 35665:return Gp;case 35666:return Xp;case 35674:return qp;case 35675:return Qp;case 35676:return Yp;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return $p;case 5125:return tm;case 36294:return em;case 36295:return im;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}var fl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kp(e.type)}},pl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}},ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},hl=/(\w+)(\])?(\[|\.)?/g;function eu(n,t){n.seq.push(t),n.map[t.id]=t}function cm(n,t,e){let i=n.name,s=i.length;for(hl.lastIndex=0;;){let r=hl.exec(i),a=hl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){eu(e,l===void 0?new fl(o,n,t):new pl(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new ml(o),eu(e,f)),e=f}}}var ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);cm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function iu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var um=37297,hm=0;function dm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var nu=new jt;function fm(n){te._getMatrix(nu,te.workingColorSpace,n);let t=`mat3( ${nu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case gs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function su(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dm(n.getShaderSource(t),o)}else return r}function pm(n,t){let e=fm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var mm={[ko]:"Linear",[Vo]:"Reinhard",[Wo]:"Cineon",[Fs]:"ACESFilmic",[Xo]:"AgX",[Bs]:"Neutral",[Go]:"Custom"};function gm(n,t){let e=mm[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qa=new _;function Mm(){te.getLuminanceCoefficients(Qa);let n=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
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
#define LOW_PRECISION`),t}var Sm={[Us]:"SHADOWMAP_TYPE_PCF",[Zn]:"SHADOWMAP_TYPE_VSM"};function bm(n){return Sm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rm={[Kn]:"ENVMAP_MODE_REFRACTION"};function Nm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Rm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wm={[ra]:"ENVMAP_BLENDING_MULTIPLY",[Sc]:"ENVMAP_BLENDING_MIX",[bc]:"ENVMAP_BLENDING_ADD"};function Cm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wm[n.combine]||"ENVMAP_BLENDING_NONE"}function Lm(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=bm(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Nm(e),f=Cm(e),u=xm(e),d=Im(r),g=s.createProgram(),y,p,m=e.glslVersion?"#version "+e.glslVersion+`
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
`+p);let T=m+y+a,b=m+p+o,A=iu(s,s.VERTEX_SHADER,T),R=iu(s,s.FRAGMENT_SHADER,b);s.attachShader(g,A),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(C){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(A)||"",H=s.getShaderInfoLog(R)||"",w=L.trim(),k=F.trim(),Q=H.trim(),O=!0,tt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,A,R);else{let V=su(s,A,"vertex"),G=su(s,R,"fragment");Ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+w+`
`+V+`
`+G)}else w!==""?zt("WebGLProgram: Program Info Log:",w):(k===""||Q==="")&&(tt=!1);tt&&(C.diagnostics={runnable:O,programLog:w,vertexShader:{log:k,prefix:y},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(A),s.deleteShader(R),M=new ts(s,g),S=ym(s,g)}let M;this.getUniforms=function(){return M===void 0&&E(this),M};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(g,um)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}var Dm=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xl(t),e.set(t,i)),i}},xl=class{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}};function Pm(n){return n===tn||n===Gs||n===Xs}function _m(n,t,e,i,s,r){let a=new xs,o=new Ml,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,z,C,L,F){let H=C.fog,w=L.geometry,k=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?C.environment:null,Q=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,O=t.get(M.envMap||k,Q),tt=u[M.type],V=i.precision;M.precision!==null&&(V=i.getMaxPrecision(M.precision),V!==M.precision&&zt("WebGLProgram.getParameters:",M.precision,"not supported, using",V,"instead."));let G=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,$=G!==void 0?G.length:0,ft=0;w.morphAttributes.position!==void 0&&(ft=1),w.morphAttributes.normal!==void 0&&(ft=2),w.morphAttributes.color!==void 0&&(ft=3);let _t,B,ut,vt;if(tt){let At=Ti[tt];_t=At.vertexShader,B=At.fragmentShader}else{_t=M.vertexShader,B=M.fragmentShader;let At=o.getVertexShaderStage(M),re=o.getFragmentShaderStage(M);o.update(M,At,re),ut=At.id,vt=re.id}let Dt=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),ct=L.isInstancedMesh===!0,Jt=L.isBatchedMesh===!0,at=!!M.map,Et=!!M.matcap,yt=!!O,pt=yt&&O.isPMREMTexture===!0,Ot=!!M.aoMap,Ut=!!M.lightMap,ee=!!M.bumpMap&&M.wireframe===!1,Gt=!!M.normalMap,ye=!!M.displacementMap,Bt=!!M.emissiveMap,Me=!!M.metalnessMap,ne=!!M.roughnessMap,ae=M.anisotropy>0,P=M.clearcoat>0,ce=M.diffuseRoughness>0,ie=M.dispersion>0,Mt=M.retroreflectivity>0,it=M.iridescence>0,Xt=M.sheen>0,mt=M.transmission>0,bt=ae&&!!M.anisotropyMap,v=P&&!!M.clearcoatMap,x=P&&!!M.clearcoatNormalMap,U=P&&!!M.clearcoatRoughnessMap,et=ce&&!!M.diffuseRoughnessMap,Z=it&&!!M.iridescenceMap,st=it&&!!M.iridescenceThicknessMap,lt=Xt&&!!M.sheenColorMap,Y=Xt&&!!M.sheenRoughnessMap,J=!!M.specularMap,dt=!!M.specularColorMap,N=!!M.specularIntensityMap,K=mt&&!!M.transmissionMap,q=mt&&!!M.thicknessMap,ot=!!M.gradientMap,rt=!!M.alphaMap,ht=M.alphaTest>0,Nt=!!M.alphaHash,Ht=!!M.extensions,nt=Ei;M.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(nt=n.toneMapping);let wt=pt?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Vt={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:_t,fragmentShader:B,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:V,batching:Jt,batchingColor:Jt&&L._colorsTexture!==null,instancing:ct,instancingColor:ct&&L.instanceColor!==null,instancingMorph:ct&&L.morphTexture!==null,outputColorSpace:Dt===null?n.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:Et,envMap:yt,envMapMode:yt&&O.mapping,envMapPMREM:pt,envMapMaxLod:pt?wt.length-1:null,envMapSize:pt?wt[0].width:null,aoMap:Ot,lightMap:Ut,bumpMap:ee,normalMap:Gt,displacementMap:ye,emissiveMap:Bt,normalMapObjectSpace:Gt&&M.normalMapType===wc,normalMapTangentSpace:Gt&&M.normalMapType===qs,packedNormalMap:Gt&&M.normalMapType===qs&&Pm(M.normalMap.format),metalnessMap:Me,roughnessMap:ne,anisotropy:ae,anisotropyMap:bt,clearcoat:P,clearcoatMap:v,clearcoatNormalMap:x,clearcoatRoughnessMap:U,diffuseRoughness:ce,diffuseRoughnessMap:et,dispersion:ie,retroreflection:Mt,iridescence:it,iridescenceMap:Z,iridescenceThicknessMap:st,sheen:Xt,sheenColorMap:lt,sheenRoughnessMap:Y,specularMap:J,specularColorMap:dt,specularIntensityMap:N,transmission:mt,transmissionMap:K,thicknessMap:q,gradientMap:ot,opaque:M.transparent===!1&&M.blending===Jn&&M.alphaToCoverage===!1,alphaMap:rt,alphaTest:ht,alphaHash:Nt,combine:M.combine,mapUv:at&&d(M.map.channel),aoMapUv:Ot&&d(M.aoMap.channel),lightMapUv:Ut&&d(M.lightMap.channel),bumpMapUv:ee&&d(M.bumpMap.channel),normalMapUv:Gt&&d(M.normalMap.channel),displacementMapUv:ye&&d(M.displacementMap.channel),emissiveMapUv:Bt&&d(M.emissiveMap.channel),metalnessMapUv:Me&&d(M.metalnessMap.channel),roughnessMapUv:ne&&d(M.roughnessMap.channel),anisotropyMapUv:bt&&d(M.anisotropyMap.channel),clearcoatMapUv:v&&d(M.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&d(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&d(M.diffuseRoughnessMap.channel),iridescenceMapUv:Z&&d(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&d(M.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&d(M.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(M.sheenRoughnessMap.channel),specularMapUv:J&&d(M.specularMap.channel),specularColorMapUv:dt&&d(M.specularColorMap.channel),specularIntensityMapUv:N&&d(M.specularIntensityMap.channel),transmissionMapUv:K&&d(M.transmissionMap.channel),thicknessMapUv:q&&d(M.thicknessMap.channel),alphaMapUv:rt&&d(M.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(Gt||ae),vertexNormals:!!w.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!w.attributes.uv&&(at||rt),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||w.attributes.normal===void 0&&Gt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ft,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===le,decodeVideoTextureEmissive:Bt&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xe,flipSided:M.side===_e,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ht&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&M.extensions.multiDraw===!0||Jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function y(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let z in M.defines)S.push(z),S.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(p(S,M),m(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function p(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapPMREM),M.push(S.envMapMaxLod),M.push(S.envMapSize),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.diffuseRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.numSunLights),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numSunLightShadows),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.numLightProbeGrids),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function m(M,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function T(M){let S=u[M.type],z;if(S){let C=Ti[S];z=Vc.clone(C.uniforms)}else z=M.uniforms;return z}function b(M,S){let z=h.get(S);return z!==void 0?++z.usedTimes:(z=new Lm(n,S,M,s),l.push(z),h.set(S,z)),z}function A(M){if(--M.usedTimes===0){let S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function R(M){o.remove(M)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:T,acquireProgram:b,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:E}}function zm(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Om(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function uu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,y,p,m){let T=n[t];return T===void 0?(T={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},n[t]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=g,T.materialVariant=a(u),T.groupOrder=y,T.renderOrder=u.renderOrder,T.z=p,T.group=m),t++,T}function c(u,d,g,y,p,m,T){T.reversedDepth===!0&&(p=-p);let b=o(u,d,g,y,p,m);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):e.push(b)}function l(u,d,g,y,p,m){let T=o(u,d,g,y,p,m);g.transmission>0?i.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,d){e.length>1&&e.sort(u||Om),i.length>1&&i.sort(d||cu),s.length>1&&s.sort(d||cu)}function f(){for(let u=t,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Um(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new uu,n.set(i,[a])):s>=r.length?(a=new uu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Fm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new _,color:new kt};break;case"SpotLight":e={position:new _,direction:new _,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new _,halfWidth:new _,halfHeight:new _};break}return n[t.id]=e,e}}}function Bm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var jm=0;function Hm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function km(n){let t=new Fm,e=Bm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new _);let s=new _,r=new ue,a=new ue;function o(l){let h=0,f=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,T=0,b=0,A=0,R=0,E=0,M=0,S=0,z=0,C=0;l.sort(Hm);for(let F=0,H=l.length;F<H;F++){let w=l[F],k=w.color,Q=w.intensity,O=w.distance,tt=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===tn?tt=w.shadow.map.texture:tt=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=k.r*Q,f+=k.g*Q,u+=k.b*Q;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],Q);C++}else if(w.isSunLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let G=w.shadow,$=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[g]=$,i.sunShadowMap[g]=tt;let ft=G.getViewportCount();for(let _t=0;_t<ft;_t++)i.sunShadowMatrix[y+_t]=G.getMatrix(_t),i.sunShadowCascade[y+_t]=G._cascadeData[_t];y+=ft,g++}i.sun[d]=V,d++}else if(w.isDirectionalLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let G=w.shadow,$=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=tt,i.directionalShadowMatrix[p]=w.shadow.matrix,R++}i.directional[p]=V,p++}else if(w.isSpotLight){let V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(k).multiplyScalar(Q),V.distance=O,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[T]=V;let G=w.shadow;if(w.map&&(i.spotLightMap[S]=w.map,S++,G.updateMatrices(w),w.castShadow&&z++),i.spotLightMatrix[T]=G.matrix,w.castShadow){let $=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.spotShadow[T]=$,i.spotShadowMap[T]=tt,M++}T++}else if(w.isRectAreaLight){let V=t.get(w);V.color.copy(k).multiplyScalar(Q),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[b]=V,b++}else if(w.isPointLight){let V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){let G=w.shadow,$=e.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=tt,i.pointShadowMatrix[m]=w.shadow.matrix,E++}i.point[m]=V,m++}else if(w.isHemisphereLight){let V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(Q),V.groundColor.copy(w.groundColor).multiplyScalar(Q),i.hemi[A]=V,A++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let L=i.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==T||L.rectAreaLength!==b||L.hemiLength!==A||L.numSunShadows!==g||L.numDirectionalShadows!==R||L.numPointShadows!==E||L.numSpotShadows!==M||L.numSpotMaps!==S||L.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=p,i.spot.length=T,i.rectArea.length=b,i.point.length=m,i.hemi.length=A,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.spotLightMatrix.length=M+S-z,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=C,L.sunLength=d,L.directionalLength=p,L.pointLength=m,L.spotLength=T,L.rectAreaLength=b,L.hemiLength=A,L.numSunShadows=g,L.numDirectionalShadows=R,L.numPointShadows=E,L.numSpotShadows=M,L.numSpotMaps=S,L.numLightProbes=C,i.version=jm++)}function c(l,h){let f=0,u=0,d=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let T=0,b=l.length;T<b;T++){let A=l[T];if(A.isSunLight){let R=i.sun[f];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(m),f++}else if(A.isDirectionalLight){let R=i.directional[u];R.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),u++}else if(A.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),g++}else if(A.isRectAreaLight){let R=i.rectArea[y];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(A.isPointLight){let R=i.point[d];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){let R=i.hemi[p];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function hu(n){let t=new km(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function c(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Vm(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new hu(n),t.set(s,[o])):r>=a.length?(o=new hu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Wm=`void main() {
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
}`,Xm=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)],qm=[new _(0,-1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1),new _(0,-1,0),new _(0,-1,0)],du=new ue,Ys=new _,dl=new _;function Qm(n,t,e){let i=new qi,s=new qt,r=new qt,a=new xe,o=new Gr,c=new Xr,l={},h=e.maxTextureSize,f={[$i]:_e,[_e]:$i,[Xe]:Xe},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Wm,fragmentShader:Gm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new ni;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new fe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let m=this.type;this.render=function(E,M,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===sa&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let z=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(gn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=m!==this.type;H&&M.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(k=>k.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,k=E.length;w<k;w++){let Q=E[w],O=Q.shadow;if(O===void 0){zt("WebGLShadowMap:",Q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let tt=O.getFrameExtents();s.multiply(tt),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,O.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Zn){if(Q.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ce(s.x,s.y,{format:tn,type:pi,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),O.map.texture.name=Q.name+".shadowMap",O.map.depthTexture=new zi(s.x,s.y,ri),O.map.depthTexture.name=Q.name+".shadowMapDepth",O.map.depthTexture.format=Di,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=we,O.map.depthTexture.magFilter=we}else Q.isPointLight?(O.map=new Js(s.x),O.map.depthTexture=new Rs(s.x,fi)):(O.map=new Ce(s.x,s.y),O.map.depthTexture=new zi(s.x,s.y,fi)),O.map.depthTexture.name=Q.name+".shadowMap",O.map.depthTexture.format=Di,this.type===Us?(O.map.depthTexture.compareFunction=V?el:tl,O.map.depthTexture.minFilter=Pe,O.map.depthTexture.magFilter=Pe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=we,O.map.depthTexture.magFilter=we);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();Q.isPointLight!==!0&&O.updateMatrices(Q,S);let $=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let ft=0;ft<G;ft++){let _t=O.getCamera(ft);if(Q.isPointLight){let B=O.camera,ut=O.matrix,vt=Q.distance||B.far;vt!==B.far&&(B.far=vt,B.updateProjectionMatrix()),Ys.setFromMatrixPosition(Q.matrixWorld),B.position.copy(Ys),dl.copy(B.position),dl.add(Xm[ft]),B.up.copy(qm[ft]),B.lookAt(dl),B.updateMatrixWorld(),ut.makeTranslation(-Ys.x,-Ys.y,-Ys.z),du.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),O._frustum.setFromProjectionMatrix(du,B.coordinateSystem,B.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ft),n.clear();else{ft===0&&(n.setRenderTarget(O.map),n.clear());let B=O.getViewport(ft);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),F.viewport(a)}i=O.getFrustum(ft),A(M,S,_t,Q,$,this.type)}O.isPointLightShadow!==!0&&this.type===Zn&&T(O,S),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(z,C,L)};function T(E,M){let S=t.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ce(s.x,s.y,{format:tn,type:pi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(M,null,S,u,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(M,null,S,d,y,null)}function b(E,M,S,z){let C=null,L=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)C=L;else if(C=S.isPointLight===!0?c:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let F=C.uuid,H=M.uuid,w=l[F];w===void 0&&(w={},l[F]=w);let k=w[H];k===void 0&&(k=C.clone(),w[H]=k,M.addEventListener("dispose",R)),C=k}if(C.visible=M.visible,C.wireframe=M.wireframe,z===Zn?C.side=M.shadowSide!==null?M.shadowSide:M.side:C.side=M.shadowSide!==null?M.shadowSide:f[M.side],C.alphaMap=M.alphaMap,C.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,C.map=M.map,C.clipShadows=M.clipShadows,C.clippingPlanes=M.clippingPlanes,C.clipIntersection=M.clipIntersection,C.displacementMap=M.displacementMap,C.displacementScale=M.displacementScale,C.displacementBias=M.displacementBias,C.wireframeLinewidth=M.wireframeLinewidth,C.linewidth=M.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=n.properties.get(C);F.light=S}return C}function A(E,M,S,z,C,L){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Zn)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let w=t.update(E),k=E.material;if(Array.isArray(k)){let Q=w.groups;for(let O=0,tt=Q.length;O<tt;O++){let V=Q[O],G=k[V.materialIndex];if(G&&G.visible){let $=b(E,G,z,L);E.onBeforeShadow(n,E,M,S,w,$,V),n.renderBufferDirect(S,null,w,$,E,V),E.onAfterShadow(n,E,M,S,w,$,V)}}}else if(k.visible){let Q=b(E,k,z,L);E.onBeforeShadow(n,E,M,S,w,Q,null),n.renderBufferDirect(S,null,w,Q,E,null),E.onAfterShadow(n,E,M,S,w,Q,null)}}let H=E.children;for(let w=0,k=H.length;w<k;w++)A(H[w],M,S,z,C,L)}function R(E){E.target.removeEventListener("dispose",R);for(let S in l){let z=l[S],C=E.target.uuid;C in z&&(z[C].dispose(),delete z[C])}}}function Ym(n,t){function e(){let N=!1,K=new xe,q=null,ot=new xe(0,0,0,0);return{setMask:function(rt){q!==rt&&!N&&(n.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){N=rt},setClear:function(rt,ht,Nt,Ht,nt){nt===!0&&(rt*=Ht,ht*=Ht,Nt*=Ht),K.set(rt,ht,Nt,Ht),ot.equals(K)===!1&&(n.clearColor(rt,ht,Nt,Ht),ot.copy(K))},reset:function(){N=!1,q=null,ot.set(-1,0,0,0)}}}function i(){let N=!1,K=!1,q=null,ot=null,rt=null;return{setReversed:function(ht){if(K!==ht){let Nt=t.get("EXT_clip_control");ht?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),K=ht;let Ht=rt;rt=null,this.setClear(Ht)}},getReversed:function(){return K},setTest:function(ht){ht?gt(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(ht){q!==ht&&!N&&(n.depthMask(ht),q=ht)},setFunc:function(ht){if(K&&(ht=jc[ht]),ot!==ht){switch(ht){case Rr:n.depthFunc(n.NEVER);break;case Nr:n.depthFunc(n.ALWAYS);break;case wr:n.depthFunc(n.LESS);break;case Fn:n.depthFunc(n.LEQUAL);break;case Cr:n.depthFunc(n.EQUAL);break;case Lr:n.depthFunc(n.GEQUAL);break;case Dr:n.depthFunc(n.GREATER);break;case Pr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=ht}},setLocked:function(ht){N=ht},setClear:function(ht){rt!==ht&&(rt=ht,K&&(ht=1-ht),n.clearDepth(ht))},reset:function(){N=!1,q=null,ot=null,rt=null,K=!1}}}function s(){let N=!1,K=null,q=null,ot=null,rt=null,ht=null,Nt=null,Ht=null,nt=null;return{setTest:function(wt){N||(wt?gt(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(wt){K!==wt&&!N&&(n.stencilMask(wt),K=wt)},setFunc:function(wt,Vt,At){(q!==wt||ot!==Vt||rt!==At)&&(n.stencilFunc(wt,Vt,At),q=wt,ot=Vt,rt=At)},setOp:function(wt,Vt,At){(ht!==wt||Nt!==Vt||Ht!==At)&&(n.stencilOp(wt,Vt,At),ht=wt,Nt=Vt,Ht=At)},setLocked:function(wt){N=wt},setClear:function(wt){nt!==wt&&(n.clearStencil(wt),nt=wt)},reset:function(){N=!1,K=null,q=null,ot=null,rt=null,ht=null,Nt=null,Ht=null,nt=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],y=null,p=!1,m=null,T=null,b=null,A=null,R=null,E=null,M=null,S=new kt(0,0,0),z=0,C=!1,L=null,F=null,H=null,w=null,k=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,tt=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=tt>=2);let G=null,$={},ft=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),B=new xe().fromArray(ft),ut=new xe().fromArray(_t);function vt(N,K,q,ot){let rt=new Uint8Array(4),ht=n.createTexture();n.bindTexture(N,ht),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<q;Nt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(K+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return ht}let Dt={};Dt[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),a.setFunc(Fn),ee(!1),Gt(Oo),gt(n.CULL_FACE),Ot(gn);function gt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function ct(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Jt(N,K){return u[N]!==K?(n.bindFramebuffer(N,K),u[N]=K,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=K),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=K),!0):!1}function at(N,K){let q=g,ot=!1;if(N){q=d.get(K),q===void 0&&(q=[],d.set(K,q));let rt=N.textures;if(q.length!==rt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Nt=rt.length;ht<Nt;ht++)q[ht]=n.COLOR_ATTACHMENT0+ht;q.length=rt.length,ot=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ot=!0);ot&&n.drawBuffers(q)}function Et(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let yt={[Mn]:n.FUNC_ADD,[lc]:n.FUNC_SUBTRACT,[cc]:n.FUNC_REVERSE_SUBTRACT};yt[uc]=n.MIN,yt[hc]=n.MAX;let pt={[dc]:n.ZERO,[fc]:n.ONE,[pc]:n.SRC_COLOR,[jo]:n.SRC_ALPHA,[yc]:n.SRC_ALPHA_SATURATE,[xc]:n.DST_COLOR,[gc]:n.DST_ALPHA,[mc]:n.ONE_MINUS_SRC_COLOR,[Ho]:n.ONE_MINUS_SRC_ALPHA,[Ic]:n.ONE_MINUS_DST_COLOR,[Mc]:n.ONE_MINUS_DST_ALPHA,[Ac]:n.CONSTANT_COLOR,[Ec]:n.ONE_MINUS_CONSTANT_COLOR,[vc]:n.CONSTANT_ALPHA,[Tc]:n.ONE_MINUS_CONSTANT_ALPHA};function Ot(N,K,q,ot,rt,ht,Nt,Ht,nt,wt){if(N===gn){p===!0&&(ct(n.BLEND),p=!1);return}if(p===!1&&(gt(n.BLEND),p=!0),N!==oc){if(N!==m||wt!==C){if((T!==Mn||R!==Mn)&&(n.blendEquation(n.FUNC_ADD),T=Mn,R=Mn),wt)switch(N){case Jn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFunc(n.ONE,n.ONE);break;case Fo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ft("WebGLState: Invalid blending: ",N);break}else switch(N){case Jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fo:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bo:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",N);break}b=null,A=null,E=null,M=null,S.set(0,0,0),z=0,m=N,C=wt}return}rt=rt||K,ht=ht||q,Nt=Nt||ot,(K!==T||rt!==R)&&(n.blendEquationSeparate(yt[K],yt[rt]),T=K,R=rt),(q!==b||ot!==A||ht!==E||Nt!==M)&&(n.blendFuncSeparate(pt[q],pt[ot],pt[ht],pt[Nt]),b=q,A=ot,E=ht,M=Nt),(Ht.equals(S)===!1||nt!==z)&&(n.blendColor(Ht.r,Ht.g,Ht.b,nt),S.copy(Ht),z=nt),m=N,C=!1}function Ut(N,K){N.side===Xe?ct(n.CULL_FACE):gt(n.CULL_FACE);let q=N.side===_e;K&&(q=!q),ee(q),N.blending===Jn&&N.transparent===!1?Ot(gn):Ot(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ot=N.stencilWrite;o.setTest(ot),ot&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function Gt(N){N!==rc?(gt(n.CULL_FACE),N!==F&&(N===Oo?n.cullFace(n.BACK):N===ac?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),F=N}function ye(N){N!==H&&(O&&n.lineWidth(N),H=N)}function Bt(N,K,q){N?(gt(n.POLYGON_OFFSET_FILL),(w!==K||k!==q)&&(w=K,k=q,a.getReversed()&&(K=-K,q=-q),n.polygonOffset(K,q))):ct(n.POLYGON_OFFSET_FILL)}function Me(N){N?gt(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function ne(N){N===void 0&&(N=n.TEXTURE0+Q-1),G!==N&&(n.activeTexture(N),G=N)}function ae(N,K,q){q===void 0&&(G===null?q=n.TEXTURE0+Q-1:q=G);let ot=$[q];ot===void 0&&(ot={type:void 0,texture:void 0},$[q]=ot),(ot.type!==N||ot.texture!==K)&&(G!==q&&(n.activeTexture(q),G=q),n.bindTexture(N,K||Dt[N]),ot.type=N,ot.texture=K)}function P(){let N=$[G];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ce(){try{n.compressedTexImage2D(...arguments)}catch(N){Ft("WebGLState:",N)}}function ie(){try{n.compressedTexImage3D(...arguments)}catch(N){Ft("WebGLState:",N)}}function Mt(){try{n.texSubImage2D(...arguments)}catch(N){Ft("WebGLState:",N)}}function it(){try{n.texSubImage3D(...arguments)}catch(N){Ft("WebGLState:",N)}}function Xt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ft("WebGLState:",N)}}function mt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ft("WebGLState:",N)}}function bt(){try{n.texStorage2D(...arguments)}catch(N){Ft("WebGLState:",N)}}function v(){try{n.texStorage3D(...arguments)}catch(N){Ft("WebGLState:",N)}}function x(){try{n.texImage2D(...arguments)}catch(N){Ft("WebGLState:",N)}}function U(){try{n.texImage3D(...arguments)}catch(N){Ft("WebGLState:",N)}}function et(N){return f[N]!==void 0?f[N]:n.getParameter(N)}function Z(N,K){f[N]!==K&&(n.pixelStorei(N,K),f[N]=K)}function st(N){B.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),B.copy(N))}function lt(N){ut.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ut.copy(N))}function Y(N,K){let q=l.get(K);q===void 0&&(q=new WeakMap,l.set(K,q));let ot=q.get(N);ot===void 0&&(ot=n.getUniformBlockIndex(K,N.name),n.uniformBlockBinding(K,ot,ot),q.set(N,ot))}function J(N,K,q){let rt=l.get(K).get(N);c[rt]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,rt,q),c[rt]=q)}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},G=null,$={},u={},c={},d=new WeakMap,g=[],y=null,p=!1,m=null,T=null,b=null,A=null,R=null,E=null,M=null,S=new kt(0,0,0),z=0,C=!1,L=null,F=null,H=null,w=null,k=null,B.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:ct,bindFramebuffer:Jt,drawBuffers:at,useProgram:Et,setBlending:Ot,setMaterial:Ut,setFlipSided:ee,setCullFace:Gt,setLineWidth:ye,setPolygonOffset:Bt,setScissorTest:Me,activeTexture:ne,bindTexture:ae,unbindTexture:P,compressedTexImage2D:ce,compressedTexImage3D:ie,texImage2D:x,texImage3D:U,pixelStorei:Z,getParameter:et,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:bt,texStorage3D:v,texSubImage2D:Mt,texSubImage3D:it,compressedTexSubImage2D:Xt,compressedTexSubImage3D:mt,scissor:st,viewport:lt,reset:dt}}function Zm(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=new Set,y=new FinalizationRegistry(v=>g.delete(v)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(v,x){return p?new OffscreenCanvas(v,x):Hn("canvas")}function T(v,x,U){let et=1,Z=bt(v);if((Z.width>U||Z.height>U)&&(et=U/Math.max(Z.width,Z.height)),et<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){let st=Math.floor(et*Z.width),lt=Math.floor(et*Z.height);u===void 0&&(u=m(st,lt));let Y=x?m(st,lt):u;return Y.width=st,Y.height=lt,Y.getContext("2d").drawImage(v,0,0,st,lt),zt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+st+"x"+lt+")."),Y}else return"data"in v&&zt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),v;return v}function b(v){return v.generateMipmaps}function A(v){n.generateMipmap(v)}function R(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(v,x,U,et,Z,st=!1){if(v!==null){if(n[v]!==void 0)return n[v];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let lt;et&&(lt=t.get("EXT_texture_norm16"),lt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8),U===n.UNSIGNED_SHORT&&lt&&(Y=lt.R16_EXT),U===n.SHORT&&lt&&(Y=lt.R16_SNORM_EXT)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),x===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8),U===n.UNSIGNED_SHORT&&lt&&(Y=lt.RG16_EXT),U===n.SHORT&&lt&&(Y=lt.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),U===n.UNSIGNED_INT&&(Y=n.RGB32UI),U===n.BYTE&&(Y=n.RGB8I),U===n.SHORT&&(Y=n.RGB16I),U===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),U===n.UNSIGNED_INT&&(Y=n.RGBA32UI),U===n.BYTE&&(Y=n.RGBA8I),U===n.SHORT&&(Y=n.RGBA16I),U===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGB16_EXT),U===n.SHORT&&lt&&(Y=lt.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){let J=st?gs:te.getTransfer(Z);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=J===le?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGBA16_EXT),U===n.SHORT&&lt&&(Y=lt.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(v,x){let U;return v?x===null||x===fi||x===In?U=n.DEPTH24_STENCIL8:x===ri?U=n.DEPTH32F_STENCIL8:x===$n&&(U=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fi||x===In?U=n.DEPTH_COMPONENT24:x===ri?U=n.DEPTH_COMPONENT32F:x===$n&&(U=n.DEPTH_COMPONENT16),U}function S(v,x){return b(v)===!0||v.isFramebufferTexture&&v.minFilter!==we&&v.minFilter!==Pe?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function z(v){let x=new WeakRef(v);i.get(v).__ref=x,g.add(x),y.register(v,x,x)}function C(v){let x=i.get(v).__ref;x!==void 0&&(g.delete(x),y.unregister(x))}function L(v){H(v.target)}function F(v){w(v.target)}function H(v){v.removeEventListener("dispose",L),C(v),Q(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function w(v){v.removeEventListener("dispose",F),C(v),tt(v)}function k(){for(let v of g){let x=v.deref();x!==void 0&&(x.isRenderTarget===!0?w(x):H(x))}g.clear(),f.clear()}function Q(v){let x=i.get(v);if(x.__webglInit===void 0)return;let U=v.source,et=d.get(U);if(et){let Z=et[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&O(v),Object.keys(et).length===0&&d.delete(U)}i.remove(v)}function O(v){let x=i.get(v);n.deleteTexture(x.__webglTexture);let U=v.source,et=d.get(U);delete et[x.__cacheKey],a.memory.textures--}function tt(v){let x=i.get(v);x.__depthDisposeCallback&&x.__depthDisposeCallback();let U=v.depthTexture;if(U&&U.renderTarget===v&&H(U),v.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let st=0;st<x.__webglFramebuffer[Z].length;st++)n.deleteFramebuffer(x.__webglFramebuffer[Z][st]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let et=v.textures;for(let Z=0,st=et.length;Z<st;Z++){let lt=i.get(et[Z]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),a.memory.textures--),i.remove(et[Z])}i.remove(v)}let V=0;function G(){V=0}function $(){return V}function ft(v){V=v}function _t(){let v=V;return v>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(v+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,v}function B(v){let x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.wrapR||0),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.mipmapsAutoUpdate),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.colorSpace),x.join()}function ut(v,x){let U=i.get(v);if(v.isVideoTexture&&Xt(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&U.__version!==v.version){let et=v.image;if(et===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(U,v,x);return}}else v.isExternalTexture&&(U.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function vt(v,x){let U=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){Ut(U,v,x);return}else v.isExternalTexture&&(U.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function Dt(v,x){let U=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){Ut(U,v,x);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function gt(v,x){let U=i.get(v);if(v.version>0&&U.__version!==v.version){ee(U,v,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}let ct={[Bn]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[_r]:n.MIRRORED_REPEAT},Jt={[we]:n.NEAREST,[Rc]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[Pe]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},at={[Lc]:n.NEVER,[il]:n.ALWAYS,[Dc]:n.LESS,[tl]:n.LEQUAL,[Pc]:n.EQUAL,[el]:n.GEQUAL,[_c]:n.GREATER,[zc]:n.NOTEQUAL};function Et(v,x){if(x.type===ri&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Pe||x.magFilter===la||x.magFilter===js||x.magFilter===di||x.minFilter===Pe||x.minFilter===la||x.minFilter===js||x.minFilter===di)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,ct[x.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ct[x.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ct[x.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,Jt[x.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,Jt[x.minFilter]),x.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===we||x.minFilter!==js&&x.minFilter!==di||x.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(v,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function yt(v,x){let U=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",L),z(x));let et=x.source,Z=d.get(et);Z===void 0&&(Z={},d.set(et,Z));let st=B(x);if(st!==v.__cacheKey){Z[st]===void 0&&(Z[st]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[st].usedTimes++;let lt=Z[v.__cacheKey];lt!==void 0&&(Z[v.__cacheKey].usedTimes--,lt.usedTimes===0&&O(x)),v.__cacheKey=st,v.__webglTexture=Z[st].texture}return U}function pt(v,x,U){return Math.floor(Math.floor(v/U)/x)}function Ot(v,x,U,et){let st=v.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,et,x.data);else{st.sort((N,K)=>N.start-K.start);let lt=0;for(let N=1;N<st.length;N++){let K=st[lt],q=st[N],ot=K.start+K.count,rt=pt(q.start,x.width,4),ht=pt(K.start,x.width,4);q.start<=ot+1&&rt===ht&&pt(q.start+q.count-1,x.width,4)===rt?K.count=Math.max(K.count,q.start+q.count-K.start):(++lt,st[lt]=q)}st.length=lt+1;let Y=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let N=0,K=st.length;N<K;N++){let q=st[N],ot=Math.floor(q.start/4),rt=Math.ceil(q.count/4),ht=ot%x.width,Nt=Math.floor(ot/x.width),Ht=rt,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Nt),e.texSubImage2D(n.TEXTURE_2D,0,ht,Nt,Ht,nt,U,et,x.data)}v.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function Ut(v,x,U){let et=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=n.TEXTURE_3D);let Z=yt(v,x),st=x.source;e.bindTexture(et,v.__webglTexture,n.TEXTURE0+U);let lt=i.get(st);if(st.version!==lt.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let nt=te.getPrimaries(te.workingColorSpace),wt=x.colorSpace===gi?null:te.getPrimaries(x.colorSpace),Vt=x.colorSpace===gi||nt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let J=T(x.image,!1,s.maxTextureSize);J=mt(x,J);let dt=r.convert(x.format,x.colorSpace),N=r.convert(x.type),K=E(x.internalFormat,dt,N,x.normalized,x.colorSpace,x.isVideoTexture);Et(et,x);let q,ot=x.mipmaps,rt=x.isVideoTexture!==!0,ht=lt.__version===void 0||Z===!0,Nt=st.dataReady,Ht=S(x,J);if(x.isDepthTexture)K=M(x.format===Oi,x.type),ht&&(rt?e.texStorage2D(n.TEXTURE_2D,1,K,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,dt,N,null));else if(x.isDataTexture)if(ot.length>0){rt&&ht&&e.texStorage2D(n.TEXTURE_2D,Ht,K,ot[0].width,ot[0].height);for(let nt=0,wt=ot.length;nt<wt;nt++)q=ot[nt],rt?Nt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,N,q.data):e.texImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,dt,N,q.data);x.generateMipmaps=!1}else rt?(ht&&e.texStorage2D(n.TEXTURE_2D,Ht,K,J.width,J.height),Nt&&Ot(x,J,dt,N)):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,dt,N,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){rt&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,K,ot[0].width,ot[0].height,J.depth);for(let nt=0,wt=ot.length;nt<wt;nt++)if(q=ot[nt],x.format!==mi)if(dt!==null)if(rt){if(Nt)if(x.layerUpdates.size>0){let Vt=ul(q.width,q.height,x.format,x.type);for(let At of x.layerUpdates){let re=q.data.subarray(At*Vt/q.data.BYTES_PER_ELEMENT,(At+1)*Vt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,At,q.width,q.height,1,dt,re)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,J.depth,dt,q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,K,q.width,q.height,J.depth,0,q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Nt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,J.depth,dt,N,q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,K,q.width,q.height,J.depth,0,dt,N,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{rt&&ht&&e.texStorage2D(n.TEXTURE_2D,Ht,K,ot[0].width,ot[0].height);for(let nt=0,wt=ot.length;nt<wt;nt++)q=ot[nt],x.format!==mi?dt!==null?rt?Nt&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,q.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Nt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,N,q.data):e.texImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,dt,N,q.data)}else if(x.isDataArrayTexture)if(rt){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,K,J.width,J.height,J.depth),Nt)if(x.layerUpdates.size>0){let nt=ul(J.width,J.height,x.format,x.type);for(let wt of x.layerUpdates){let Vt=J.data.subarray(wt*nt/J.data.BYTES_PER_ELEMENT,(wt+1)*nt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,wt,J.width,J.height,1,dt,N,Vt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,N,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,dt,N,J.data);else if(x.isData3DTexture)rt?(ht&&e.texStorage3D(n.TEXTURE_3D,Ht,K,J.width,J.height,J.depth),Nt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,N,J.data)):e.texImage3D(n.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,dt,N,J.data);else if(x.isFramebufferTexture){if(ht)if(rt)e.texStorage2D(n.TEXTURE_2D,Ht,K,J.width,J.height);else{let nt=J.width,wt=J.height;for(let Vt=0;Vt<Ht;Vt++)e.texImage2D(n.TEXTURE_2D,Vt,K,nt,wt,0,dt,N,null),nt>>=1,wt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),J.parentNode!==nt){nt.appendChild(J),f.add(x),nt.onpaint=wt=>{let Vt=wt.changedElements;for(let At of f)Vt.includes(At.image)&&(At.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let Vt=n.RGBA,At=n.RGBA,re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Vt,At,re,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ot.length>0){if(rt&&ht){let nt=bt(ot[0]);e.texStorage2D(n.TEXTURE_2D,Ht,K,nt.width,nt.height)}for(let nt=0,wt=ot.length;nt<wt;nt++)q=ot[nt],rt?Nt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,dt,N,q):e.texImage2D(n.TEXTURE_2D,nt,K,dt,N,q);x.generateMipmaps=!1}else if(rt){if(ht){let nt=bt(J);e.texStorage2D(n.TEXTURE_2D,Ht,K,nt.width,nt.height)}Nt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,N,J)}else e.texImage2D(n.TEXTURE_2D,0,K,dt,N,J);b(x)&&x.mipmapsAutoUpdate===!0&&A(et),lt.__version=st.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function ee(v,x,U){if(x.image.length!==6)return;let et=yt(v,x),Z=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+U);let st=i.get(Z);if(Z.version!==st.__version||et===!0){e.activeTexture(n.TEXTURE0+U);let lt=te.getPrimaries(te.workingColorSpace),Y=x.colorSpace===gi?null:te.getPrimaries(x.colorSpace),J=x.colorSpace===gi||lt===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let dt=x.isCompressedTexture||x.image[0].isCompressedTexture,N=x.image[0]&&x.image[0].isDataTexture,K=[];for(let At=0;At<6;At++)!dt&&!N?K[At]=T(x.image[At],!0,s.maxCubemapSize):K[At]=N?x.image[At].image:x.image[At],K[At]=mt(x,K[At]);let q=K[0],ot=r.convert(x.format,x.colorSpace),rt=r.convert(x.type),ht=E(x.internalFormat,ot,rt,x.normalized,x.colorSpace),Nt=x.isVideoTexture!==!0,Ht=st.__version===void 0||et===!0,nt=Z.dataReady,wt=S(x,q);Et(n.TEXTURE_CUBE_MAP,x);let Vt;if(x.isDepthTexture){if(ht=M(x.format===Oi,x.type),Ht)if(Nt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ht,q.width,q.height);else for(let At=0;At<6;At++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,q.width,q.height,0,ot,rt,null)}else if(dt){Nt&&Ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,ht,q.width,q.height);for(let At=0;At<6;At++){Vt=K[At].mipmaps;for(let re=0;re<Vt.length;re++){let he=Vt[re];x.format!==mi?ot!==null?Nt?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,0,0,he.width,he.height,ot,he.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,ht,he.width,he.height,0,he.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,0,0,he.width,he.height,ot,rt,he.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,ht,he.width,he.height,0,ot,rt,he.data)}}}else{if(Vt=x.mipmaps,Nt&&Ht){Vt.length>0&&wt++;let At=bt(K[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,ht,At.width,At.height)}for(let At=0;At<6;At++)if(N){Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,K[At].width,K[At].height,ot,rt,K[At].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,K[At].width,K[At].height,0,ot,rt,K[At].data);for(let re=0;re<Vt.length;re++){let Qe=Vt[re].image[At].image;Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,0,0,Qe.width,Qe.height,ot,rt,Qe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,ht,Qe.width,Qe.height,0,ot,rt,Qe.data)}}else{Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ot,rt,K[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,ot,rt,K[At]);for(let re=0;re<Vt.length;re++){let he=Vt[re];Nt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,0,0,ot,rt,he.image[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,ht,ot,rt,he.image[At])}}}b(x)&&x.mipmapsAutoUpdate===!0&&A(n.TEXTURE_CUBE_MAP),st.__version=Z.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function Gt(v,x,U,et,Z,st){let lt=r.convert(U.format,U.colorSpace),Y=r.convert(U.type),J=E(U.internalFormat,lt,Y,U.normalized,U.colorSpace),dt=i.get(x),N=i.get(U);if(N.__renderTarget=x,!dt.__hasExternalTextures){let K=Math.max(1,x.width>>st),q=Math.max(1,x.height>>st);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,st,J,K,q,x.depth,0,lt,Y,null):e.texImage2D(Z,st,J,K,q,0,lt,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,v),it(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Z,N.__webglTexture,0,Mt(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Z,N.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(v,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,v),x.depthBuffer){let et=x.depthTexture,Z=et&&et.isDepthTexture?et.type:null,st=M(x.stencilBuffer,Z),lt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;it(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(x),st,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(x),st,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,st,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,v)}else{let et=x.textures;for(let Z=0;Z<et.length;Z++){let st=et[Z],lt=r.convert(st.format,st.colorSpace),Y=r.convert(st.type),J=E(st.internalFormat,lt,Y,st.normalized,st.colorSpace);it(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(x),J,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(x),J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(v,x,U){let et=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(x.depthTexture);Z.__renderTarget=x;let st=et?x.depthTexture.image[0]:x.depthTexture.image;(!Z.__webglTexture||st.width!==x.width||st.height!==x.height)&&(st.width=x.width,st.height=x.height,x.depthTexture.needsUpdate=!0),et?gt(x.depthTexture,0):ut(x.depthTexture,0);let lt=Z.__webglTexture,Y=Mt(x),J=et?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,dt=x.depthTexture.format===Oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Di)it(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,J,lt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,dt,J,lt,0);else if(x.depthTexture.format===Oi)it(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,J,lt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,dt,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(v){let x=i.get(v),U=v.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==v.depthTexture){let et=v.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",Z)};et.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=et}if(v.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let et=0;et<6;et++)Bt(x.__webglFramebuffer[et],v,et);else v.texture.mipmaps.length>0?Bt(x.__webglFramebuffer[0],v,0):Bt(x.__webglFramebuffer,v,0);else if(U){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=n.createRenderbuffer(),ye(x.__webglDepthbuffer[et],v,!1);else{let Z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,st)}}else if(v.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ye(x.__webglDepthbuffer,v,!1);else{let Z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(v,x,U){let et=i.get(v);x!==void 0&&Gt(et.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Me(v)}function ae(v){let x=v.texture,U=i.get(v),et=i.get(x);v.addEventListener("dispose",F),z(v);let Z=v.textures,st=v.isWebGLCubeRenderTarget===!0,lt=Z.length>1;if(lt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=x.version,a.memory.textures++),st){U.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){U.__webglFramebuffer[Y]=[];for(let J=0;J<x.mipmaps.length;J++)U.__webglFramebuffer[Y][J]=n.createFramebuffer()}else U.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(x.mipmaps.length>0){U.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)U.__webglFramebuffer[Y]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(lt)for(let Y=0,J=Z.length;Y<J;Y++){let dt=i.get(Z[Y]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(v.samples>0&&it(v)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<Z.length;Y++){let J=Z[Y];U.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);let dt=r.convert(J.format,J.colorSpace),N=r.convert(J.type),K=E(J.internalFormat,dt,N,J.normalized,J.colorSpace,v.isXRRenderTarget===!0),q=Mt(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(U.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),Et(n.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Gt(U.__webglFramebuffer[Y][J],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Gt(U.__webglFramebuffer[Y],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);b(x)?A(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(lt){for(let Y=0,J=Z.length;Y<J;Y++){let dt=Z[Y],N=i.get(dt),K=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(K=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,N.__webglTexture),Et(K,dt),Gt(U.__webglFramebuffer,v,dt,n.COLOR_ATTACHMENT0+Y,K,0),b(dt)&&A(K)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(Y=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,et.__webglTexture),Et(Y,x),x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Gt(U.__webglFramebuffer[J],v,x,n.COLOR_ATTACHMENT0,Y,J);else Gt(U.__webglFramebuffer,v,x,n.COLOR_ATTACHMENT0,Y,0);b(x)?A(Y):x.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}v.depthBuffer&&Me(v)}function P(v){let x=v.textures;for(let U=0,et=x.length;U<et;U++){let Z=x[U];if(b(Z)&&Z.mipmapsAutoUpdate===!0){let st=R(v),lt=i.get(Z).__webglTexture;e.bindTexture(st,lt),A(st),e.unbindTexture()}}}let ce=[];function ie(v){if(v.samples>0){if(it(v)===!1){let x=v.textures,U=v.width,et=v.height,Z=n.COLOR_BUFFER_BIT,st=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(v),Y=x.length>1;if(Y)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),v.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);let N=i.get(x[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,U,et,0,0,U,et,Z,n.NEAREST),c===!0&&(ce.length=0,ce.push(n.COLOR_ATTACHMENT0+dt),v.depthBuffer&&v.storeMultisampledDepthBuffer===!1&&ce.push(st),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);let N=i.get(x[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.storeMultisampledDepthBuffer===!1&&c){let x=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Mt(v){return Math.min(s.maxSamples,v.samples)}function it(v){let x=i.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xt(v){let x=a.render.frame;h.get(v)!==x&&(h.set(v,x),v.update())}function mt(v,x){let U=v.colorSpace,et=v.format,Z=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||U!==ms&&U!==gi&&(te.getTransfer(U)===le?(et!==mi||Z!==qe)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",U)),x}function bt(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=_t,this.resetTextureUnits=G,this.getTextureUnits=$,this.setTextureUnits=ft,this.setTexture2D=ut,this.setTexture2DArray=vt,this.setTexture3D=Dt,this.setTextureCube=gt,this.rebindTextures=ne,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=it,this.dispose=k}function Jm(n,t){function e(i,s=gi){let r,a=te.getTransfer(s);if(i===qe)return n.UNSIGNED_BYTE;if(i===ua)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jo)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qo)return n.BYTE;if(i===Yo)return n.SHORT;if(i===$n)return n.UNSIGNED_SHORT;if(i===ca)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Ko)return n.ALPHA;if(i===$o)return n.RGB;if(i===mi)return n.RGBA;if(i===Di)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===da)return n.RED;if(i===fa)return n.RED_INTEGER;if(i===tn)return n.RG;if(i===pa)return n.RG_INTEGER;if(i===ma)return n.RGBA_INTEGER;if(i===Hs||i===ks||i===Vs||i===Ws)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===Ma||i===xa||i===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===Aa||i===Ea||i===va||i===Ta||i===Gs||i===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===Aa)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ea)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===va)return r.COMPRESSED_R11_EAC;if(i===Ta)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gs)return r.COMPRESSED_RG11_EAC;if(i===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ba||i===Ra||i===Na||i===wa||i===Ca||i===La||i===Da||i===Pa||i===_a||i===za||i===Oa||i===Ua||i===Fa||i===Ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ra)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ca)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===La)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ua)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===Ha||i===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ja)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Va||i===Wa||i===Xs||i===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===In?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Km=`
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

}`,Il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ns(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ve({vertexShader:Km,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends xi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new Il,m={},T=e.getContextAttributes(),b=null,A=null,R=[],E=[],M=new qt,S=null,z=null,C=new We;C.viewport=new xe;let L=new We;L.viewport=new xe;let F=[C,L],H=new na,w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let ut=R[B];return ut===void 0&&(ut=new Wn,R[B]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(B){let ut=R[B];return ut===void 0&&(ut=new Wn,R[B]=ut),ut.getGripSpace()},this.getHand=function(B){let ut=R[B];return ut===void 0&&(ut=new Wn,R[B]=ut),ut.getHandSpace()};function Q(B){let ut=E.indexOf(B.inputSource);if(ut===-1)return;let vt=R[ut];vt!==void 0&&(vt.update(B.inputSource,B.frame,l||a),vt.dispatchEvent({type:B.type,data:B.inputSource}))}function O(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",tt);for(let B=0;B<R.length;B++){let ut=E[B];ut!==null&&(E[B]=null,R[B].disconnect(ut))}w=null,k=null,p.reset();for(let B in m)delete m[B];if(t.setRenderTarget(b),d=null,u=null,f=null,s=null,A=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(M.width,M.height,!1),z!==null){let B=z.camera;B.fov=z.fov,B.zoom=z.zoom,B.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",O),s.addEventListener("inputsourceschange",tt),T.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(M),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Dt=null,gt=null;T.depth&&(gt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=T.stencil?Oi:Di,Dt=T.stencil?In:fi);let ct={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new Ce(u.textureWidth,u.textureHeight,{format:mi,type:qe,depthTexture:new zi(u.textureWidth,u.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Ce(d.framebufferWidth,d.framebufferHeight,{format:mi,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(B){for(let ut=0;ut<B.removed.length;ut++){let vt=B.removed[ut],Dt=E.indexOf(vt);Dt>=0&&(E[Dt]=null,R[Dt].disconnect(vt))}for(let ut=0;ut<B.added.length;ut++){let vt=B.added[ut],Dt=E.indexOf(vt);if(Dt===-1){for(let ct=0;ct<R.length;ct++)if(ct>=E.length){E.push(vt),Dt=ct;break}else if(E[ct]===null){E[ct]=vt,Dt=ct;break}if(Dt===-1)break}let gt=R[Dt];gt&&gt.connect(vt)}}function V(B,ut){ut===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ut.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let ut=B.near,vt=B.far;p.texture!==null&&(p.depthNear>0&&(ut=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),H.near=L.near=C.near=ut,H.far=L.far=C.far=vt,(w!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),w=H.near,k=H.far),H.layers.mask=B.layers.mask|6,C.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let Dt=B.parent,gt=H.cameras;V(H,Dt);for(let ct=0;ct<gt.length;ct++)V(gt[ct],Dt);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),z===null&&B.isPerspectiveCamera&&(z={camera:B,fov:B.fov,zoom:B.zoom}),G(B,H,Dt)};function G(B,ut,vt){vt===null?B.matrix.copy(ut.matrixWorld):(B.matrix.copy(vt.matrixWorld),B.matrix.invert(),B.matrix.multiply(ut.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(ut.projectionMatrix),B.projectionMatrixInverse.copy(ut.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Or*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(B){return m[B]};let $=null;function ft(B,ut){if(h=ut.getViewerPose(l||a),g=ut,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(A,d.framebuffer),t.setRenderTarget(A));let Dt=!1;vt.length!==H.cameras.length&&(H.cameras.length=0,Dt=!0);for(let at=0;at<vt.length;at++){let Et=vt[at],yt=null;if(d!==null)yt=d.getViewport(Et);else{let Ot=f.getViewSubImage(u,Et);yt=Ot.viewport,at===0&&(t.setRenderTargetTextures(A,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(A))}let pt=F[at];pt===void 0&&(pt=new We,pt.layers.enable(at),pt.viewport=new xe,F[at]=pt),pt.matrix.fromArray(Et.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Et.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(yt.x,yt.y,yt.width,yt.height),at===0&&(H.matrix.copy(pt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Dt===!0&&H.cameras.push(pt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let at=f.getDepthInformation(vt[0]);at&&at.isValid&&at.texture&&p.init(at,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let at=0;at<vt.length;at++){let Et=vt[at].camera;if(Et){let yt=m[Et];yt||(yt=new Ns,m[Et]=yt);let pt=f.getCameraImage(Et);yt.sourceTexture=pt}}}}for(let vt=0;vt<R.length;vt++){let Dt=E[vt],gt=R[vt];Dt!==null&&gt!==void 0&&gt.update(Dt,ut,l||a)}$&&$(B,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}let _t=new fu;_t.setAnimationLoop(ft),this.setAnimationLoop=function(B){$=B},this.dispose=function(){}}},tg=new ue,vu=new jt;vu.set(-1,0,0,0,1,0,0,0,1);function eg(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ol(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,b,A){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,A)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,T,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=t.get(m),b=T.envMap,A=T.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(A)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(vu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,T,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_e&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ig(n,t,e,i){let s={},r={};function a(T,b){let A=b.program;i.uniformBlockBinding(T,A,s[T.id])}function o(T,b){let A=s[T.id];A===void 0&&(g(T),A=c(T),s[T.id]=A,T.addEventListener("dispose",p));let R=b.program;i.updateUBOMapping(T,R);let E=t.render.frame;r[T.id]!==E&&(l(T),r[T.id]=E)}function c(T){let b=n.createBuffer(),A=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function l(T){let b=s[T.id],A=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,M=A.length;E<M;E++){let S=A[E];if(Array.isArray(S))for(let z=0,C=S.length;z<C;z++)h(S[z],E,z,R);else h(S,E,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,b,A,R){if(u(T,b,A,R)===!0){let E=T.__offset,M=T.value;if(Array.isArray(M)){let S=0;for(let z=0;z<M.length;z++){let C=M[z],L=y(C,!0);f(C,T.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(M,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,T.__data)}}function f(T,b,A){typeof T=="number"||typeof T=="boolean"?b[A]=T:T.isMatrix3?(b[A]=T.elements[0],b[A+1]=T.elements[1],b[A+2]=T.elements[2],b[A+3]=0,b[A+4]=T.elements[3],b[A+5]=T.elements[4],b[A+6]=T.elements[5],b[A+7]=0,b[A+8]=T.elements[6],b[A+9]=T.elements[7],b[A+10]=T.elements[8],b[A+11]=0):ArrayBuffer.isView(T)?b.set(T.subarray(0,b.length-A),A):T.toArray(b,A)}function u(T,b,A,R){let E=T.value,M=b+"_"+A;if(Array.isArray(E)){R[M]===void 0&&(R[M]=[]);let S=R[M],z=!1;for(let C=0;C<E.length;C++)d(E[C],S,C)===!0&&(z=!0);return z}return d(E,R,M)}function d(T,b,A){if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:ArrayBuffer.isView(T)?b[A]=T.slice():b[A]=T.clone(),!0;{let R=b[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return b[A]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(R.equals(T)===!1)return R.copy(T),!0}}return!1}function g(T){let b=T.uniforms,A=0,R=16;for(let M=0,S=b.length;M<S;M++){let z=Array.isArray(b[M])?b[M]:[b[M]];for(let C=0,L=z.length;C<L;C++){let F=z[C],H=Array.isArray(F.value)?F.value:[F.value],w=Array.isArray(b[M])||Array.isArray(F.value),k=A;for(let O=0,tt=H.length;O<tt;O++){let V=H[O],G=y(V,w),$=A%R,ft=$%G.boundary,_t=$+ft;A+=ft,_t!==0&&R-_t<G.storage&&(A+=R-_t),O===0&&(k=A),A+=G.storage}let Q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Q((A-k)/Float32Array.BYTES_PER_ELEMENT),F.__offset=k}}let E=A%R;return E>0&&(A+=R-E),T.__size=A,T.__cache={},this}function y(T,b){let A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=16,A.storage=48):T.isMatrix4?(A.boundary=16,A.storage=64):T.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(A.boundary=16,A.storage=T.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",T),b===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function p(T){let b=T.target;b.removeEventListener("dispose",p),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let T in s)n.deleteBuffer(s[T]);s={},r={}}return{bind:a,update:o,dispose:m}}var ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function sg(){return vi===null&&(vi=new Es(ng,16,16,tn,pi),vi.name="DFG_LUT",vi.minFilter=Pe,vi.magFilter=Pe,vi.wrapS=ei,vi.wrapT=ei,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Ks=class{constructor(t={}){let{canvas:e=Uc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=qe}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=d,p=new Set([ma,pa,fa]),m=new Set([qe,fi,$n,In,ua,ha]),T=new Uint32Array(4),b=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},R=null,E=null,M=[],S=[],z=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,F=null,H=null,w=null,k=null;this._outputColorSpace=Te;let Q=0,O=0,tt=null,V=-1,G=null,$=new xe,ft=new xe,_t=null,B=new kt(0),ut=0,vt=e.width,Dt=e.height,gt=1,ct=null,Jt=null,at=new xe(0,0,vt,Dt),Et=new xe(0,0,vt,Dt),yt=!1,pt=new qi,Ot=new jr,Ut=!1,ee=!1,Gt=new ue,ye=new _,Bt=new xe,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function ae(){return tt===null?gt:1}let P=i;function ce(I,D){return e.getContext(I,D)}let ie,Mt,it,Xt,mt,bt,v,x,U,et,Z,st,lt,Y,J,dt,N,K,q,ot,rt,ht,Nt;try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",At,!1),P===null){let D="webgl2";if(P=ce(D,I),P===null)throw ce(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(I){throw e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Ft("WebGLRenderer: "+I.message),I}function Ht(){ie=new mp(P),ie.init(),rt=new Jm(P,ie),Mt=new sp(P,ie,t,rt),it=new Ym(P,ie),Mt.reversedDepthBuffer&&u&&it.buffers.depth.setReversed(!0),H=P.createFramebuffer(),w=P.createFramebuffer(),k=P.createFramebuffer(),Xt=new xp(P),mt=new zm,bt=new Zm(P,ie,it,mt,Mt,rt,Xt),v=new pp(C),x=new Ih(P),ht=new ip(P,x),U=new gp(P,x,Xt,ht),et=new yp(P,U,x,ht,Xt),K=new Ip(P,Mt,bt),J=new rp(mt),Z=new _m(C,v,ie,Mt,ht,J),st=new eg(C,mt),lt=new Um,Y=new Vm(ie),N=new ep(C,v,it,et,g,c),dt=new Qm(C,et,Mt),Nt=new ig(P,Xt,Mt,it),q=new np(P,ie,Xt),ot=new Mp(P,ie,Xt),Xt.programs=Z.programs,C.capabilities=Mt,C.extensions=ie,C.properties=mt,C.renderLists=lt,C.shadowMap=dt,C.state=it,C.info=Xt}y!==qe&&(z=new Ep(y,e.width,e.height,o,s,r));let nt=new yl(C,P);this.xr=nt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let I=ie.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ie.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(I){I!==void 0&&(gt=I,this.setSize(vt,Dt,!1))},this.getSize=function(I){return I.set(vt,Dt)},this.setSize=function(I,D,X=!0){if(nt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=I,Dt=D,e.width=Math.floor(I*gt),e.height=Math.floor(D*gt),X===!0&&(e.style.width=I+"px",e.style.height=D+"px"),z!==null&&z.setSize(e.width,e.height),this.setViewport(0,0,I,D)},this.getDrawingBufferSize=function(I){return I.set(vt*gt,Dt*gt).floor()},this.setDrawingBufferSize=function(I,D,X){vt=I,Dt=D,gt=X,e.width=Math.floor(I*X),e.height=Math.floor(D*X),this.setViewport(0,0,I,D)},this.setEffects=function(I){if(y===qe){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let D=0;D<I.length;D++)if(I[D].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy($)},this.getViewport=function(I){return I.copy(at)},this.setViewport=function(I,D,X,j){I.isVector4?at.set(I.x,I.y,I.z,I.w):at.set(I,D,X,j),it.viewport($.copy(at).multiplyScalar(ae()).round())},this.getScissor=function(I){return I.copy(Et)},this.setScissor=function(I,D,X,j){I.isVector4?Et.set(I.x,I.y,I.z,I.w):Et.set(I,D,X,j),it.scissor(ft.copy(Et).multiplyScalar(ae()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(I){it.setScissorTest(yt=I)},this.setOpaqueSort=function(I){ct=I},this.setTransparentSort=function(I){Jt=I},this.getClearColor=function(I){return I.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(I=!0,D=!0,X=!0){let j=0;if(I){let W=!1;if(tt!==null){let It=tt.texture.format;W=p.has(It)}if(W){let It=tt.texture.type,Rt=m.has(It),xt=N.getClearColor(),St=N.getClearAlpha(),Pt=xt.r,Wt=xt.g,Kt=xt.b;Rt?(T[0]=Pt,T[1]=Wt,T[2]=Kt,T[3]=St,P.clearBufferuiv(P.COLOR,0,T)):(b[0]=Pt,b[1]=Wt,b[2]=Kt,b[3]=St,P.clearBufferiv(P.COLOR,0,b))}else j|=P.COLOR_BUFFER_BIT}D&&(j|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),F=I},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),N.dispose(),lt.dispose(),Y.dispose(),bt.dispose(),mt.dispose(),v.dispose(),et.dispose(),U.dispose(),ht.dispose(),Nt.dispose(),Z.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",nn),nt.removeEventListener("sessionend",Yt),de.stop()};function wt(I){I.preventDefault(),sl("WebGLRenderer: Context Lost."),L=!0}function Vt(){sl("WebGLRenderer: Context Restored."),L=!1;let I=Xt.autoReset,D=dt.enabled,X=dt.autoUpdate,j=dt.needsUpdate,W=dt.type;Ht(),Xt.autoReset=I,dt.enabled=D,dt.autoUpdate=X,dt.needsUpdate=j,dt.type=W}function At(I){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function re(I){let D=I.target;D.removeEventListener("dispose",re),he(D)}function he(I){Qe(I),mt.remove(I)}function Qe(I){let D=mt.get(I).programs;D!==void 0&&(D.forEach(function(X){Z.releaseProgram(X)}),I.isShaderMaterial&&Z.releaseShaderCache(I))}this.renderBufferDirect=function(I,D,X,j,W,It){D===null&&(D=Me);let Rt=W.isMesh&&W.matrixWorld.determinantAffine()<0,xt=bu(I,D,X,j,W);it.setMaterial(j,Rt);let St=X.index,Pt=1;if(j.wireframe===!0){if(St=U.getWireframeAttribute(X),St===void 0)return;Pt=2}let Wt=X.drawRange,Kt=X.attributes.position,Ct=Wt.start*Pt,$t=(Wt.start+Wt.count)*Pt;It!==null&&(Ct=Math.max(Ct,It.start*Pt),$t=Math.min($t,(It.start+It.count)*Pt)),St!==null?(Ct=Math.max(Ct,0),$t=Math.min($t,St.count)):Kt!=null&&(Ct=Math.max(Ct,0),$t=Math.min($t,Kt.count));let Ee=$t-Ct;if(Ee<0||Ee===1/0)return;ht.setup(W,j,xt,X,St);let me,pe=q;if(St!==null&&(me=x.get(St),pe=ot,pe.setIndex(me)),W.isMesh)j.wireframe===!0?(it.setLineWidth(j.wireframeLinewidth*ae()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(W.isLine){let ze=j.linewidth;ze===void 0&&(ze=1),it.setLineWidth(ze*ae()),W.isLineSegments?pe.setMode(P.LINES):W.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else W.isPoints?pe.setMode(P.POINTS):W.isSprite&&pe.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))pe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ze=W._multiDrawStarts,Lt=W._multiDrawCounts,He=W._multiDrawCount,oe=St?x.get(St).bytesPerElement:1,rn=mt.get(j).currentProgram.getUniforms();for(let Oe=0;Oe<He;Oe++)rn.setValue(P,"_gl_DrawID",Oe),pe.render(ze[Oe]/oe,Lt[Oe])}else if(W.isInstancedMesh)pe.renderInstances(Ct,Ee,W.count);else if(X.isInstancedBufferGeometry){let ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Lt=Math.min(X.instanceCount,ze);pe.renderInstances(Ct,Ee,Lt)}else pe.render(Ct,Ee)};function Ui(I,D,X,j){F!==null&&I.isNodeMaterial&&F.setObject(j,I),Ut===!0&&J.setState(I,X,!1),I.transparent===!0&&I.side===Xe&&I.forceSinglePass===!1?(I.side=_e,I.needsUpdate=!0,as(I,D,j),I.side=$i,I.needsUpdate=!0,as(I,D,j),I.side=Xe):as(I,D,j)}this.compile=function(I,D,X=null){X===null&&(X=I),F!==null&&F.renderStart(I,D,X),E=Y.get(X),E.init(D),S.push(E),X.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),I!==X&&I.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),ee=this.localClippingEnabled,Ut=J.init(this.clippingPlanes,ee),Ut===!0&&J.setGlobalState(this.clippingPlanes,D),F!==null&&dt.render(E.state.shadowsArray,X,D);let j=new Set;return I.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let It=W.material;if(It)if(Array.isArray(It))for(let Rt=0;Rt<It.length;Rt++){let xt=It[Rt];Ui(xt,X,D,W),j.add(xt)}else Ui(It,X,D,W),j.add(It)}),E=S.pop(),F!==null&&F.renderEnd(),j},this.compileAsync=function(I,D,X=null){let j=this.compile(I,D,X);return new Promise(W=>{function It(){if(j.forEach(function(Rt){let St=mt.get(Rt).currentProgram;(St===void 0||St.isReady())&&j.delete(Rt)}),j.size===0){W(I);return}setTimeout(It,10)}ie.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let rs=null;function en(I){rs&&rs(I)}function nn(){de.stop()}function Yt(){de.start()}let de=new fu;de.setAnimationLoop(en),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(I){rs=I,nt.setAnimationLoop(I),I===null?de.stop():de.start()},nt.addEventListener("sessionstart",nn),nt.addEventListener("sessionend",Yt),this.render=function(I,D){if(D!==void 0&&D.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(I,D);let X=nt.enabled===!0&&nt.isPresenting===!0,j=z!==null&&(tt===null||X)&&z.begin(C,tt);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(D),D=nt.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,D,tt),E=Y.get(I,S.length),E.init(D),E.state.textureUnits=bt.getTextureUnits(),S.push(E),Gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Ot.setFromArrayCamera(D):pt.setFromProjectionMatrix(Gt,ii,D.reversedDepth),ee=this.localClippingEnabled,Ut=J.init(this.clippingPlanes,ee),R=lt.get(I,M.length),R.init(),M.push(R),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let Rt=C.xr.getDepthSensingMesh();Rt!==null&&Ae(Rt,D,-1/0,C.sortObjects)}Ae(I,D,0,C.sortObjects),R.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&R.sort(ct,Jt),ne=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ne&&N.addToRenderList(R,I),this.info.autoReset===!0&&this.info.reset(),Ut===!0&&J.beginShadows();let W=E.state.shadowsArray;if(dt.render(W,I,D),Ut===!0&&J.endShadows(),(j&&z.hasRenderPass())===!1){let Rt=R.opaque,xt=R.transmissive;if(E.setupLights(),D.isArrayCamera){let St=D.cameras;if(xt.length>0)for(let Pt=0,Wt=St.length;Pt<Wt;Pt++){let Kt=St[Pt];sn(Rt,xt,I,Kt)}ne&&N.render(I);for(let Pt=0,Wt=St.length;Pt<Wt;Pt++){let Kt=St[Pt];Ye(R,I,Kt,Kt.viewport)}}else xt.length>0&&sn(Rt,xt,I,D),ne&&N.render(I),Ye(R,I,D)}tt!==null&&O===0&&(bt.updateMultisampleRenderTarget(tt),bt.updateRenderTargetMipmap(tt)),j&&z.end(C),I.isScene===!0&&I.onAfterRender(C,I,D),ht.resetDefaultState(),V=-1,G=null,S.pop(),S.length>0?(E=S[S.length-1],bt.setTextureUnits(E.state.textureUnits),Ut===!0&&J.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,M.pop(),M.length>0?R=M[M.length-1]:R=null,F!==null&&F.renderEnd()};function Ae(I,D,X,j){if(I.visible===!1)return;if(I.layers.test(D.layers)){if(I.isGroup)X=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(D);else if(I.isLight)E.pushLight(I),I.castShadow&&E.pushShadow(I);else if(I.isSprite){let Rt=D.isArrayCamera?Ot:pt;if(!I.frustumCulled||I.intersectsFrustum(Rt)){j&&Bt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Gt);let xt=et.update(I),St=I.material;St.visible&&R.push(I,xt,St,X,Bt.z,null,D)}}else if(I.isMesh||I.isLine||I.isPoints){let Rt=D.isArrayCamera?Ot:pt;if(!I.frustumCulled||I.intersectsFrustum(Rt)){let xt=et.update(I),St=I.material;if(j&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Bt.copy(I.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Bt.copy(xt.boundingSphere.center)),Bt.applyMatrix4(I.matrixWorld).applyMatrix4(Gt)),Array.isArray(St)){let Pt=xt.groups;for(let Wt=0,Kt=Pt.length;Wt<Kt;Wt++){let Ct=Pt[Wt],$t=St[Ct.materialIndex];$t&&$t.visible&&R.push(I,xt,$t,X,Bt.z,Ct,D)}}else St.visible&&R.push(I,xt,St,X,Bt.z,null,D)}}}let It=I.children;for(let Rt=0,xt=It.length;Rt<xt;Rt++)Ae(It[Rt],D,X,j)}function Ye(I,D,X,j){let{opaque:W,transmissive:It,transparent:Rt}=I;E.setupLightsView(X),Ut===!0&&J.setGlobalState(C.clippingPlanes,X),j&&it.viewport($.copy(j)),W.length>0&&Fi(W,D,X),It.length>0&&Fi(It,D,X),Rt.length>0&&Fi(Rt,D,X),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function sn(I,D,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[j.id]===void 0){let Ct=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[j.id]=new Ce(1,1,{generateMipmaps:!0,type:Ct?pi:qe,minFilter:di,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let It=E.state.transmissionRenderTarget[j.id],Rt=j.viewport||$;It.setSize(Rt.z*C.transmissionResolutionScale,Rt.w*C.transmissionResolutionScale);let xt=C.getRenderTarget(),St=C.getActiveCubeFace(),Pt=C.getActiveMipmapLevel();C.setRenderTarget(It),C.getClearColor(B),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear(),ne&&N.render(X);let Wt=C.toneMapping;C.toneMapping=Ei;let Kt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),E.setupLightsView(j),Ut===!0&&J.setGlobalState(C.clippingPlanes,j),Fi(I,X,j),bt.updateMultisampleRenderTarget(It),bt.updateRenderTargetMipmap(It),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let $t=0,Ee=D.length;$t<Ee;$t++){let me=D[$t],{object:pe,geometry:ze,material:Lt,group:He}=me;if(Lt.side===Xe&&pe.layers.test(j.layers)){let oe=Lt.side;Lt.side=_e,Lt.needsUpdate=!0,An(pe,X,j,ze,Lt,He),Lt.side=oe,Lt.needsUpdate=!0,Ct=!0}}Ct===!0&&(bt.updateMultisampleRenderTarget(It),bt.updateRenderTargetMipmap(It))}C.setRenderTarget(xt,St,Pt),C.setClearColor(B,ut),Kt!==void 0&&(j.viewport=Kt),C.toneMapping=Wt}function Fi(I,D,X){let j=D.isScene===!0?D.overrideMaterial:null;for(let W=0,It=I.length;W<It;W++){let Rt=I[W],{object:xt,geometry:St,group:Pt}=Rt,Wt=Rt.material;Wt.allowOverride===!0&&j!==null&&(Wt=j),xt.layers.test(X.layers)&&An(xt,D,X,St,Wt,Pt)}}function An(I,D,X,j,W,It){F!==null&&W.isNodeMaterial&&F.setObject(I,W),I.onBeforeRender(C,D,X,j,W,It),I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),W.onBeforeRender(C,D,X,j,I,It),W.transparent===!0&&W.side===Xe&&W.forceSinglePass===!1?(W.side=_e,W.needsUpdate=!0,C.renderBufferDirect(X,D,j,W,I,It),W.side=$i,W.needsUpdate=!0,C.renderBufferDirect(X,D,j,W,I,It),W.side=Xe):C.renderBufferDirect(X,D,j,W,I,It),I.onAfterRender(C,D,X,j,W,It)}function El(I){let D=0;for(let X of I)X.texture!==null&&D++;return D}function as(I,D,X){D.isScene!==!0&&(D=Me);let j=mt.get(I),W=E.state.lights,It=E.state.shadowsArray,Rt=W.state.version,xt=Z.getParameters(I,W.state,It,D,X,E.state.lightProbeGridArray),St=Z.getProgramCacheKey(xt),Pt=j.programs;j.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?D.environment:null,j.fog=D.fog;let Wt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;j.envMap=v.get(I.envMap||j.environment,Wt),j.envMapRotation=j.environment!==null&&I.envMap===null?D.environmentRotation:I.envMapRotation,Pt===void 0&&(I.addEventListener("dispose",re),Pt=new Map,j.programs=Pt,j.programVariants=new Map);let Kt=Pt.get(St);if(Kt!==void 0){if(j.currentProgram===Kt&&j.lightsStateVersion===Rt)return Tl(I,xt),Kt}else xt.uniforms=Z.getUniforms(I),F!==null&&I.isNodeMaterial&&F.build(I,X,xt),I.onBeforeCompile(xt,C),Kt=Z.acquireProgram(xt,St),Pt.set(St,Kt),j.uniforms=xt.uniforms;let Ct=j.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ct.clippingPlanes=J.uniform),Tl(I,xt),j.needsLights=Nu(I),j.lightsStateVersion=Rt,j.needsLights&&(Ct.ambientLightColor.value=W.state.ambient,Ct.lightProbe.value=W.state.probe,Ct.sunLights.value=W.state.sun,Ct.sunLightShadows.value=W.state.sunShadow,Ct.directionalLights.value=W.state.directional,Ct.directionalLightShadows.value=W.state.directionalShadow,Ct.spotLights.value=W.state.spot,Ct.spotLightShadows.value=W.state.spotShadow,Ct.rectAreaLights.value=W.state.rectArea,Ct.ltc_1.value=W.state.rectAreaLTC1,Ct.ltc_2.value=W.state.rectAreaLTC2,Ct.pointLights.value=W.state.point,Ct.pointLightShadows.value=W.state.pointShadow,Ct.hemisphereLights.value=W.state.hemi,Ct.sunShadowMatrix.value=W.state.sunShadowMatrix,Ct.sunShadowCascade.value=W.state.sunShadowCascade,Ct.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ct.spotLightMatrix.value=W.state.spotLightMatrix,Ct.spotLightMap.value=W.state.spotLightMap,Ct.pointShadowMatrix.value=W.state.pointShadowMatrix),j.numLightProbeGrids=El(E.state.lightProbeGridArray),j.currentProgram=Kt,j.uniformsList=null,Kt}function Su(I,D,X,j,W){let It=mt.get(I),Rt=It.currentProgram.id+","+j+","+W,xt=It.programVariants.get(Rt);return xt===void 0?(xt=as(I,D,X),It.programVariants.set(Rt,xt)):(It.currentProgram=xt,It.uniformsList=null,It.outputColorSpace=j,It.toneMapping=W),xt}function vl(I){if(I.uniformsList===null){let D=I.currentProgram.getUniforms();I.uniformsList=ts.seqWithValue(D.seq,I.uniforms)}return I.uniformsList}function Tl(I,D){let X=mt.get(I);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function bu(I,D,X,j,W){D.isScene!==!0&&(D=Me),bt.resetTextureUnits();let It=D.fog,Rt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?D.environment:null,xt=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:te.workingColorSpace,St=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Pt=v.get(j.envMap||Rt,St),Wt=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ct=!!X.morphAttributes.position,$t=!!X.morphAttributes.normal,Ee=!!X.morphAttributes.color,me=Ei;j.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(me=C.toneMapping);let pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ze=pe!==void 0?pe.length:0,Lt=mt.get(j),He=E.state.lights;if(Ut===!0&&(ee===!0||I!==G)){let Ie=I===G&&j.id===V;J.setState(j,I,Ie)}let oe=!1,rn=!1;j.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==He.state.version||W.isBatchedMesh&&Lt.batching===!1||!W.isBatchedMesh&&Lt.batching===!0||W.isBatchedMesh&&Lt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Lt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Lt.instancing===!1||!W.isInstancedMesh&&Lt.instancing===!0||W.isSkinnedMesh&&Lt.skinning===!1||!W.isSkinnedMesh&&Lt.skinning===!0||W.isInstancedMesh&&Lt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Lt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Lt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Lt.instancingMorph===!1&&W.morphTexture!==null||Lt.envMap!==Pt||j.fog===!0&&Lt.fog!==It||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==J.numPlanes||Lt.numIntersection!==J.numIntersection)||Lt.vertexAlphas!==Wt||Lt.vertexTangents!==Kt||Lt.morphTargets!==Ct||Lt.morphNormals!==$t||Lt.morphColors!==Ee||Lt.morphTargetsCount!==ze||Lt.numLightProbeGrids!==El(E.state.lightProbeGridArray)?oe=!0:(Lt.outputColorSpace!==xt||Lt.toneMapping!==me)&&(rn=!0):(oe=!0,Lt.__version=j.version);let Oe=Lt.currentProgram;(oe===!0||rn===!0)&&(Oe=rn===!0?Su(j,D,W,xt,me):as(j,D,W),F&&j.isNodeMaterial&&F.onUpdateProgram(j,Oe,Lt));let tr=!1,Bi=!1,an=!1,se=Oe.getUniforms(),De=Lt.uniforms;if(it.useProgram(Oe.program)&&(tr=!0,Bi=!0,an=!0),j.id!==V&&(V=j.id,Bi=!0),tr||G!==I){it.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),se.setValue(P,"projectionMatrix",I.projectionMatrix),se.setValue(P,"viewMatrix",I.matrixWorldInverse);let Re=se.map.cameraPosition;Re!==void 0&&Re.setValue(P,ye.setFromMatrixPosition(I.matrixWorld)),Mt.logarithmicDepthBuffer&&se.setValue(P,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&se.setValue(P,"isOrthographic",I.isOrthographicCamera===!0),G!==I&&(G=I,Bi=!0,an=!0)}if(Lt.needsLights&&(He.state.sunShadowMap.length>0&&se.setValue(P,"sunShadowMap",He.state.sunShadowMap,bt),He.state.directionalShadowMap.length>0&&se.setValue(P,"directionalShadowMap",He.state.directionalShadowMap,bt),He.state.spotShadowMap.length>0&&se.setValue(P,"spotShadowMap",He.state.spotShadowMap,bt),He.state.pointShadowMap.length>0&&se.setValue(P,"pointShadowMap",He.state.pointShadowMap,bt)),W.isSkinnedMesh){se.setOptional(P,W,"bindMatrix"),se.setOptional(P,W,"bindMatrixInverse");let Ie=W.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),se.setValue(P,"boneTexture",Ie.boneTexture,bt))}W.isBatchedMesh&&(se.setOptional(P,W,"batchingTexture"),se.setValue(P,"batchingTexture",W._matricesTexture,bt),se.setOptional(P,W,"batchingIdTexture"),se.setValue(P,"batchingIdTexture",W._indirectTexture,bt),se.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&se.setValue(P,"batchingColorTexture",W._colorsTexture,bt));let ai=X.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&K.update(W,X,Oe),(Bi||Lt.receiveShadow!==W.receiveShadow)&&(Lt.receiveShadow=W.receiveShadow,se.setValue(P,"receiveShadow",W.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&D.environment!==null&&(De.envMapIntensity.value=D.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=sg()),Bi){if(se.setValue(P,"toneMappingExposure",C.toneMappingExposure),Lt.needsLights&&Ru(De,an),It&&j.fog===!0&&st.refreshFogUniforms(De,It),st.refreshMaterialUniforms(De,j,gt,Dt,E.state.transmissionRenderTarget[I.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let Ie=A,Re=0;for(let Si of E.state.lightProbeGridArray)Si.texture!==null&&(Ie.textures[Re]=Si.texture,Ie.min[Re]=Si.boundingBox.min,Ie.max[Re]=Si.boundingBox.max,Ie.resolution[Re]=Si.resolution,Re++);for(let Si in Ie)Ie[Si].length=Re;De.probesSH.value=Ie.textures,De.probesMin.value=Ie.min,De.probesMax.value=Ie.max,De.probesResolution.value=Ie.resolution}ts.upload(P,vl(Lt),De,bt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ts.upload(P,vl(Lt),De,bt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&se.setValue(P,"center",W.center),se.setValue(P,"modelViewMatrix",W.modelViewMatrix),se.setValue(P,"normalMatrix",W.normalMatrix),se.setValue(P,"modelMatrix",W.matrixWorld),j.uniformsGroups!==void 0){let Ie=j.uniformsGroups;for(let Re=0,Si=Ie.length;Re<Si;Re++){let bl=Ie[Re];Nt.update(bl,Oe),Nt.bind(bl,Oe)}}return Oe}function Ru(I,D){I.ambientLightColor.needsUpdate=D,I.lightProbe.needsUpdate=D,I.sunLights.needsUpdate=D,I.sunLightShadows.needsUpdate=D,I.directionalLights.needsUpdate=D,I.directionalLightShadows.needsUpdate=D,I.pointLights.needsUpdate=D,I.pointLightShadows.needsUpdate=D,I.spotLights.needsUpdate=D,I.spotLightShadows.needsUpdate=D,I.rectAreaLights.needsUpdate=D,I.hemisphereLights.needsUpdate=D}function Nu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(I,D,X){let j=mt.get(I);j.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),mt.get(I.texture).__webglTexture=D,mt.get(I.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:X,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,D){let X=mt.get(I);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(I,D=0,X=0){tt=I,Q=D,O=X;let j=null,W=!1,It=!1;if(I){let xt=mt.get(I);if(xt.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(P.FRAMEBUFFER,xt.__webglFramebuffer),$.copy(I.viewport),ft.copy(I.scissor),_t=I.scissorTest,it.viewport($),it.scissor(ft),it.setScissorTest(_t),V=-1;return}else if(xt.__webglFramebuffer===void 0)bt.setupRenderTarget(I);else if(xt.__hasExternalTextures)bt.rebindTextures(I,mt.get(I.texture).__webglTexture,mt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Wt=I.depthTexture;if(xt.__boundDepthTexture!==Wt){if(Wt!==null&&mt.has(Wt)&&(I.width!==Wt.image.width||I.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");bt.setupDepthRenderbuffer(I)}}let St=I.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(It=!0);let Pt=mt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?j=Pt[D][X]:j=Pt[D],W=!0):I.samples>0&&bt.useMultisampledRTT(I)===!1?j=mt.get(I).__webglMultisampledFramebuffer:Array.isArray(Pt)?j=Pt[X]:j=Pt,$.copy(I.viewport),ft.copy(I.scissor),_t=I.scissorTest}else $.copy(at).multiplyScalar(gt).floor(),ft.copy(Et).multiplyScalar(gt).floor(),_t=yt;if(X!==0&&(j=H),it.bindFramebuffer(P.FRAMEBUFFER,j)&&it.drawBuffers(I,j),it.viewport($),it.scissor(ft),it.setScissorTest(_t),W){let xt=mt.get(I.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,X)}else if(It){let xt=D;for(let St=0;St<I.textures.length;St++){let Pt=mt.get(I.textures[St]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+St,Pt.__webglTexture,X,xt)}}else if(I!==null&&X!==0){let xt=mt.get(I.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xt.__webglTexture,X)}V=-1};function Sl(I){let D=mt.get(I);return(D.__readFormat!==I.format||D.__readType!==I.type)&&(D.__readFormat=I.format,D.__readType=I.type,D.__formatReadable=Mt.textureFormatReadable(I.format),D.__typeReadable=Mt.textureTypeReadable(I.type)),D}this.readRenderTargetPixels=function(I,D,X,j,W,It,Rt,xt=0){if(!(I&&I.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=mt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Rt!==void 0&&(St=St[Rt],Array.isArray(St)&&(St=St[0])),St){it.bindFramebuffer(P.FRAMEBUFFER,St);try{let Pt=I.textures[xt],Wt=Pt.format,Kt=Pt.type;I.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt);let Ct=Sl(Pt);if(Ct.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=I.width-j&&X>=0&&X<=I.height-W&&P.readPixels(D,X,j,W,rt.convert(Wt),rt.convert(Kt),It)}finally{let Pt=tt!==null?mt.get(tt).__webglFramebuffer:null;it.bindFramebuffer(P.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(I,D,X,j,W,It,Rt,xt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=mt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Rt!==void 0&&(St=St[Rt],Array.isArray(St)&&(St=St[0])),St)if(D>=0&&D<=I.width-j&&X>=0&&X<=I.height-W){it.bindFramebuffer(P.FRAMEBUFFER,St);let Pt=I.textures[xt],Wt=Pt.format,Kt=Pt.type;I.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt);let Ct=Sl(Pt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.bufferData(P.PIXEL_PACK_BUFFER,It.byteLength,P.STREAM_READ),P.readPixels(D,X,j,W,rt.convert(Wt),rt.convert(Kt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ee=tt!==null?mt.get(tt).__webglFramebuffer:null;it.bindFramebuffer(P.FRAMEBUFFER,Ee);let me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bc(P,me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,It),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer($t),P.deleteSync(me),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,D=null,X=0){let j=Math.pow(2,-X),W=Math.floor(I.image.width*j),It=Math.floor(I.image.height*j),Rt=D!==null?D.x:0,xt=D!==null?D.y:0;bt.setTexture2D(I,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,Rt,xt,W,It),it.unbindTexture()},this.copyTextureToTexture=function(I,D,X=null,j=null,W=0,It=0){let Rt,xt,St,Pt,Wt,Kt,Ct,$t,Ee,me=I.isCompressedTexture?I.mipmaps[It]:I.image;if(X!==null)Rt=X.max.x-X.min.x,xt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Pt=X.min.x,Wt=X.min.y,Kt=X.isBox3?X.min.z:0;else{let se=Math.pow(2,-W);Rt=Math.floor(me.width*se),xt=Math.floor(me.height*se),I.isDataArrayTexture?St=me.depth:I.isData3DTexture?St=Math.floor(me.depth*se):St=1,Pt=0,Wt=0,Kt=0}j!==null?(Ct=j.x,$t=j.y,Ee=j.z):(Ct=0,$t=0,Ee=0);let pe=rt.convert(D.format),ze=rt.convert(D.type),Lt;D.isData3DTexture?(bt.setTexture3D(D,0),Lt=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(bt.setTexture2DArray(D,0),Lt=P.TEXTURE_2D_ARRAY):(bt.setTexture2D(D,0),Lt=P.TEXTURE_2D),it.activeTexture(P.TEXTURE0),it.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),it.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),it.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let He=it.getParameter(P.UNPACK_ROW_LENGTH),oe=it.getParameter(P.UNPACK_IMAGE_HEIGHT),rn=it.getParameter(P.UNPACK_SKIP_PIXELS),Oe=it.getParameter(P.UNPACK_SKIP_ROWS),tr=it.getParameter(P.UNPACK_SKIP_IMAGES);it.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),it.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),it.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),it.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),it.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt);let Bi=I.isDataArrayTexture||I.isData3DTexture,an=D.isDataArrayTexture||D.isData3DTexture;if(I.isDepthTexture){let se=mt.get(I),De=mt.get(D),ai=mt.get(se.__renderTarget),Ie=mt.get(De.__renderTarget);it.bindFramebuffer(P.READ_FRAMEBUFFER,ai.__webglFramebuffer),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Re=0;Re<St;Re++)Bi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.get(I).__webglTexture,W,Kt+Re),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.get(D).__webglTexture,It,Ee+Re)),P.blitFramebuffer(Pt,Wt,Pt+Rt,Wt+xt,Ct,$t,Ct+Rt,$t+xt,P.DEPTH_BUFFER_BIT,P.NEAREST);it.bindFramebuffer(P.READ_FRAMEBUFFER,null),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||I.isRenderTargetTexture||mt.has(I)){let se=mt.get(I),De=mt.get(D);it.bindFramebuffer(P.READ_FRAMEBUFFER,w),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let ai=0;ai<St;ai++)Bi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,se.__webglTexture,W,Kt+ai):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,se.__webglTexture,W),an?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.__webglTexture,It,Ee+ai):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,De.__webglTexture,It),W!==0?P.blitFramebuffer(Pt,Wt,Pt+Rt,Wt+xt,Ct,$t,Ct+Rt,$t+xt,P.COLOR_BUFFER_BIT,P.NEAREST):an?P.copyTexSubImage3D(Lt,It,Ct,$t,Ee+ai,Pt,Wt,Rt,xt):P.copyTexSubImage2D(Lt,It,Ct,$t,Pt,Wt,Rt,xt);it.bindFramebuffer(P.READ_FRAMEBUFFER,null),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else an?I.isDataTexture||I.isData3DTexture?P.texSubImage3D(Lt,It,Ct,$t,Ee,Rt,xt,St,pe,ze,me.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,It,Ct,$t,Ee,Rt,xt,St,pe,me.data):P.texSubImage3D(Lt,It,Ct,$t,Ee,Rt,xt,St,pe,ze,me):I.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,It,Ct,$t,Rt,xt,pe,ze,me.data):I.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,It,Ct,$t,me.width,me.height,pe,me.data):P.texSubImage2D(P.TEXTURE_2D,It,Ct,$t,Rt,xt,pe,ze,me);it.pixelStorei(P.UNPACK_ROW_LENGTH,He),it.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),it.pixelStorei(P.UNPACK_SKIP_PIXELS,rn),it.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),it.pixelStorei(P.UNPACK_SKIP_IMAGES,tr),It===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&P.generateMipmap(Lt),it.unbindTexture()},this.initRenderTarget=function(I){mt.get(I).__webglFramebuffer===void 0&&bt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?bt.setTextureCube(I,0):I.isData3DTexture?bt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?bt.setTexture2DArray(I,0):bt.setTexture2D(I,0),it.unbindTexture()},this.resetState=function(){Q=0,O=0,tt=null,it.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ja=class extends Pi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Qi;t.deleteAttribute("uv");let e=new pn({side:_e}),i=new pn,s=new Os(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ts(t,i,6),o=new Le;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new fe(t,ns(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new fe(t,ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new fe(t,ns(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new fe(t,ns(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new fe(t,ns(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new fe(t,ns(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ns(n){return new Ls({color:0,emissive:16777215,emissiveIntensity:n})}var ss={silkNormal:"/assets/li/silkNormal.jpg",silkRoughness:"/assets/li/silkRoughness.jpg",silkColor:"/assets/li/silkColor.jpg",paperColor:"/assets/li/paperColor.jpg",paperBump:"/assets/li/paperBump.jpg",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTIyLjQiIGhlaWdodD0iMTQwNy40IiB2aWV3Qm94PSItMTE4LjIgLTk1Mi4yIDQ1MjIuNCAxNDA3LjQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTM2NSAxMTVRMTM1MCAxMTMgMTMyNC4wIDEwNy41UTEyOTggMTAyIDEyNzEuMCA4Ni4wUTEyNDQgNzAgMTIyNS4wIDM3LjVRMTIwNiA1IDEyMDYgLTQ5UTEyMDYgLTExMSAxMjMxLjUgLTE4NS41UTEyNTcgLTI2MCAxMjk0LjAgLTM0MS4wUTEzMzEgLTQyMiAxMzY1IC01MDFRMTM5MiAtNTY0IDEzOTIgLTU5N1ExMzkyIC02MzAgMTM2NyAtNjMwUTEzMzkgLTYzMCAxMjgzLjUgLTU4NS41UTEyMjggLTU0MSAxMTU1IC00NTFRMTEzNiAtNDI3IDExMDYuMCAtMzg0LjVRMTA3NiAtMzQyIDEwNDIuMCAtMjkwLjVRMTAwOCAtMjM5IDk3NS41IC0xODYuNVE5NDMgLTEzNCA5MTguNSAtOTAuMFE4OTQgLTQ2IDg4MyAtMjBRODcwIDExIDg1My4wIDIyLjVRODM2IDM0IDgyMSAzNFE4MDggMzQgNzk5IDI3UTc4OSAyMCA3ODkgMTBRNzg5IDQgNzkyIDBRNzk4IC0xMiA4MjIuMCAtNTUuMFE4NDYgLTk4IDg3OC4wIC0xNjkuMFE5MTAgLTI0MCA5MzkgLTMzNFE5NDggLTM2MyA5NTcuNSAtNDAxLjBROTY3IC00MzkgOTc1LjAgLTQ3OS41UTk4MyAtNTIwIDk4OC41IC01NTUuNVE5OTQgLTU5MSA5OTQgLTYxM1E5OTQgLTY0OCA5ODIuMCAtNjY0LjVROTcwIC02ODEgOTUwIC02ODFROTI4IC02ODEgOTAwLjAgLTY2Mi4wUTg3MiAtNjQzIDg0MyAtNjA3UTc5MyAtNTQ0IDc1NS4wIC00OTAuNVE3MTcgLTQzNyA2ODUuNSAtMzg0LjBRNjU0IC0zMzEgNjIzLjUgLTI3MS4wUTU5MyAtMjExIDU1OS4wIC0xMzYuNVE1MjUgLTYyIDQ4MSAzNlE0NzQgNTIgNDU3LjUgNTkuMFE0NDEgNjYgNDI3IDY2UTQxMyA2NiA0MDQuMCA2MC4wUTM5NSA1NCAzOTggNDNRNDIwIDggNDQ3LjAgLTQ0LjVRNDc0IC05NyA1MDIuMCAtMTYxLjBRNTMwIC0yMjUgNTU2LjAgLTI5NC4wUTU4MiAtMzYzIDYwMi41IC00MjkuMFE2MjMgLTQ5NSA2MzUuMCAtNTUzLjBRNjQ3IC02MTEgNjQ3IC02NTJRNjQ3IC03MjkgNjE0LjUgLTc2Mi4wUTU4MiAtNzk1IDUzMSAtNzk1UTQ4NiAtNzk1IDQzMi4wIC03NzMuMFEzNzggLTc1MSAzMjMuNSAtNzEzLjBRMjY5IC02NzUgMjIxIC02MjdRMTUyIC01NTggMTEyLjUgLTQ3Ny4wUTczIC0zOTYgNzMgLTMxM1E3MyAtMjU3IDk0LjAgLTIxOC4wUTExNSAtMTc5IDE0OS41IC0xNTkuMFExODQgLTEzOSAyMjYgLTEzOVEyNjkgLTEzOSAzMDYuNSAtMTYwLjVRMzQ0IC0xODIgMzcyLjUgLTIxNi41UTQwMSAtMjUxIDQxNy4wIC0yODkuNVE0MzMgLTMyOCA0MzMgLTM2MlE0MzMgLTM5MSA0MTcuMCAtNDEwLjBRNDAxIC00MjkgMzY2IC00MjlRMzYyIC00MjkgMzU3LjUgLTQyOC41UTM1MyAtNDI4IDM0OCAtNDI4SDM0NVEzMzggLTQyOCAzMzIuMCAtNDMwLjVRMzI2IC00MzMgMzI2IC00MzdRMzI2IC00NDEgMzM2LjUgLTQ0Ni4wUTM0NyAtNDUxIDM3NSAtNDUxUTQyMCAtNDUxIDQ0Mi41IC00MjQuNVE0NjUgLTM5OCA0NjUgLTM1N1E0NjUgLTMxNyA0NDQuNSAtMjc1LjBRNDI0IC0yMzMgMzg5LjAgLTE5Ny4wUTM1NCAtMTYxIDMxMC41IC0xMzkuMFEyNjcgLTExNyAyMjEgLTExN1ExNjcgLTExNyAxMjAuNSAtMTQyLjBRNzQgLTE2NyA0Ni4wIC0yMTQuNVExOCAtMjYyIDE4IC0zMjhRMTggLTM5MSA0NC4wIC00NTIuNVE3MCAtNTE0IDExMS41IC01NjguNVExNTMgLTYyMyAyMDAgLTY2NVEyNTIgLTcxMiAzMTAuMCAtNzQ1LjVRMzY4IC03NzkgNDI1LjUgLTc5Ny41UTQ4MyAtODE2IDUzMyAtODE2UTYwNyAtODE2IDY1NS41IC03NzIuMFE3MDQgLTcyOCA3MDQgLTYzMFE3MDQgLTU5MCA2OTMuMCAtNTM4LjVRNjgyIC00ODcgNjY3LjAgLTQzNS41UTY1MiAtMzg0IDYzOCAtMzQ0SDY0MFE2NzYgLTQwOSA3MDQuNSAtNDU1LjVRNzMzIC01MDIgNzYyLjAgLTU0Mi4wUTc5MSAtNTgyIDgyNyAtNjI2UTg1OCAtNjYzIDg5OC4wIC02ODUuMFE5MzggLTcwNyA5NzUgLTcwN1ExMDA4IC03MDcgMTAzMS4wIC02ODUuMFExMDU0IC02NjMgMTA1NCAtNjEwUTEwNTQgLTYwNCAxMDU0LjAgLTYwMC4wUTEwNTQgLTU5NiAxMDUzIC01ODhRMTA0NCAtNDkyIDEwMTUuMCAtMzk5LjVROTg2IC0zMDcgOTU1IC0yMTNROTg2IC0yNjEgMTAzOS4wIC0zMzUuMFExMDkyIC00MDkgMTE1NSAtNDg4UTEyMzIgLTU4NCAxMjk4LjAgLTYzMi4wUTEzNjQgLTY4MCAxNDA3IC02ODBRMTQ2MSAtNjgwIDE0NjEgLTYxNFExNDYxIC01ODkgMTQ1MS41IC01NTQuMFExNDQyIC01MTkgMTQyMiAtNDgwUTE0MDAgLTQzNiAxMzczLjUgLTM3OC41UTEzNDcgLTMyMSAxMzIzLjAgLTI1OC4wUTEyOTkgLTE5NSAxMjgzLjUgLTEzNC41UTEyNjggLTc0IDEyNjggLTIzUTEyNjggMzIgMTI5My41IDY1LjVRMTMxOSA5OSAxMzgyIDk5SDEzODhRMTQwMyA5OSAxNDAzIDEwNVExNDAzIDEwOSAxMzkzLjAgMTEzLjBRMTM4MyAxMTcgMTM2NSAxMTVaTTEyOTkgOFExMzM1IC02NSAxMzY4LjAgLTEzNi41UTE0MDEgLTIwOCAxNDM2IC0yNzNRMTQ1NiAtMzA5IDE0NzAuMCAtMzIzLjVRMTQ4NCAtMzM4IDE1MDcgLTMzOFExNTE1IC0zMzggMTUyNC4wIC0zMzUuNVExNTMzIC0zMzMgMTU0MiAtMzMzUTE1NDggLTMzMyAxNTUxIC0zMzRRMTUzNyAtMzI2IDE1MTQuNSAtMjk0LjVRMTQ5MiAtMjYzIDE0NjkuMCAtMjIyLjBRMTQ0NiAtMTgxIDE0MjggLTE0NVExNDQ3IC0xNjggMTQ2OC4wIC0xOTEuMFExNDg5IC0yMTQgMTUxNCAtMjM1UTE1MzggLTI1NiAxNTcxLjUgLTI3OC41UTE2MDUgLTMwMSAxNjM3LjAgLTMxNi4wUTE2NjkgLTMzMSAxNjg4IC0zMzFRMTY5NSAtMzMxIDE2OTggLTMzMFExNjk4IC0zMzAgMTY4Ny4wIC0zMTAuNVExNjc2IC0yOTEgMTY1OS41IC0yNTkuNVExNjQzIC0yMjggMTYyNi4wIC0xOTIuNVExNjA5IC0xNTcgMTU5NS41IC0xMjQuNVExNTgyIC05MiAxNTc4IC03MFExNTc1IC01NyAxNTc1IC00NlExNTc1IC0zMCAxNTgxLjAgLTI1LjBRMTU4NyAtMjAgMTU5NCAtMjBRMTYxMyAtMjAgMTYzMy4wIC0zNy4wUTE2NTMgLTU0IDE2NzEuNSAtODAuNVExNjkwIC0xMDcgMTcwNi4wIC0xMzcuMFExNzIyIC0xNjcgMTczMyAtMTkzUTE3NDUgLTE5MyAxNzQ1IC0xODRRMTczNCAtMTU3IDE3MTcuNSAtMTI0LjVRMTcwMSAtOTIgMTY4MC41IC02My4wUTE2NjAgLTM0IDE2MzUuMCAtMTUuMFExNjEwIDQgMTU4MSA0UTE1NjEgNCAxNTM5LjUgLTEwLjBRMTUxOCAtMjQgMTUxOCAtNjJRMTUxOCAtNzMgMTUyMC4wIC04NS41UTE1MjIgLTk4IDE1MjcgLTExM1ExNTM1IC0xMzMgMTU0Ni4wIC0xNTYuMFExNTU3IC0xNzkgMTU4MiAtMjE5UTE1ODkgLTIzMCAxNTkwLjUgLTIzNi4wUTE1OTIgLTI0MiAxNTkyIC0yNDZRMTU5MiAtMjU4IDE1ODEgLTI1OFExNTcyIC0yNTggMTU1NC41IC0yNDguMFExNTM3IC0yMzggMTUxMSAtMjEzUTE0ODYgLTE4OSAxNDUxLjUgLTE0NS4wUTE0MTcgLTEwMSAxMzcyIC0xNVExMzY1IC0yIDEzNTYuNSAtMS4wUTEzNDggMCAxMzMzIDFRMTMyMyAyIDEzMTQuMCAyLjVRMTMwNSAzIDEyOTkgOFpNMTM3MiAzMTlRMTMyMCAzMTkgMTI5OC41IDI5OC41UTEyNzcgMjc4IDEyNzcgMjUwUTEyNzcgMjIzIDEyOTIgMTk2UTEzMDYgMTY3IDEzMzEuMCAxNDYuNVExMzU2IDEyNiAxMzg2IDExMlExNDM3IDg4IDE1MDMuNSA3My4wUTE1NzAgNTggMTYzMSA0MFExNjM5IDI2IDE2NDcuNSAxMS4wUTE2NTYgLTQgMTY2MyAtMThRMTY4MyAtNTggMTcwMC4wIC05Ny41UTE3MTcgLTEzNyAxNzQyIC0xODNRMTczMyAtMTgzIDE3MzMgLTE5M0wxNzc3IC0yOTRRMTc3OCAtMjk2IDE3NzkuMCAtMjk5LjVRMTc4MCAtMzAzIDE3ODAgLTMwN1ExNzgwIC0zMTggMTc3NS4wIC0zMjUuNVExNzcwIC0zMzMgMTc2OCAtMzM2TDE4MjMgLTMzOEgxODI4UTE4NTAgLTMzOCAxODUwIC0zMjRRMTg1MCAtMzE3IDE4NDQgLTMwMkwxNzY0IC0xMTRRMTc1MCAtODEgMTczNC4wIC00OC4wUTE3MTggLTE1IDE3MDEgMTlRMTc3MSAtOCAxODEyLjUgLTQ3LjVRMTg1NCAtODcgMTg3Ni41IC0xMjYuNVExODk5IC0xNjYgMTkxMSAtMTkzUTE5MjMgLTE5MyAxOTIzIC0xODRRMTkxMyAtMTYyIDE4OTcuMCAtMTMxLjVRMTg4MSAtMTAxIDE4NTUuMCAtNjcuNVExODI5IC0zNCAxNzg4LjAgLTMuMFExNzQ3IDI4IDE2ODUgNTFRMTY2MSA5NCAxNjMwLjAgMTQwLjVRMTU5OSAxODcgMTU2MC4wIDIyNy41UTE1MjEgMjY4IDE0NzQuNSAyOTMuNVExNDI4IDMxOSAxMzcyIDMxOVpNMTM0OCAyOTlRMTM4MSAyOTkgMTQxNi41IDI3OS4wUTE0NTIgMjU5IDE0ODUuMCAyMjguNVExNTE4IDE5OCAxNTQ1LjUgMTY2LjBRMTU3MyAxMzQgMTU5MCAxMTBRMTU5NiAxMDIgMTYwMS4wIDkyLjBRMTYwNiA4MiAxNjExIDcyUTE1NjMgODUgMTUwNS4wIDEwMC41UTE0NDcgMTE2IDE0MDMgMTM1UTEzNTUgMTU1IDEzMjguMCAxOTEuNVExMzAxIDIyOCAxMzAxIDI1N1ExMzAxIDI3NiAxMzEyLjUgMjg3LjVRMTMyNCAyOTkgMTM0OCAyOTlaTTE4NTIgLTQwMFExODM5IC00MDAgMTgyOS41IC00MTAuMFExODIwIC00MjAgMTgyMCAtNDM0UTE4MjAgLTQ1MSAxODM0LjAgLTQ2NC41UTE4NDggLTQ3OCAxODY1IC00NzhRMTg3OSAtNDc4IDE4ODkuMCAtNDY5LjBRMTg5OSAtNDYwIDE4OTkgLTQ0NlExODk5IC00MjggMTg4NS4wIC00MTQuMFExODcxIC00MDAgMTg1MiAtNDAwWk0yMTI4IDNRMjEwNSAzIDIwODcuNSAtMTAuMFEyMDcwIC0yMyAyMDcwIC02M1EyMDcwIC04MCAyMDcyLjUgLTk1LjBRMjA3NSAtMTEwIDIwNzkgLTEyN1EyMDcwIC0xMTIgMjA1NC4wIC05MC4wUTIwMzggLTY4IDIwMTguNSAtNDcuMFExOTk5IC0yNiAxOTc4LjUgLTEyLjBRMTk1OCAyIDE5NDAgMlExOTE0IDIgMTg5OC4wIC0yMS41UTE4ODIgLTQ1IDE4ODIgLTgzUTE4ODIgLTEyNCAxOTAxLjAgLTE3MS4wUTE5MjAgLTIxOCAxOTUzLjAgLTI2MS4wUTE5ODYgLTMwNCAyMDI5LjAgLTMzMS4wUTIwNzIgLTM1OCAyMTE5IC0zNThRMjE0MiAtMzU4IDIxNjMuMCAtMzUwLjVRMjE4NCAtMzQzIDIyMDAgLTMyNlEyMjA3IC0zMTkgMjIwNyAtMzEwUTIyMDcgLTMwNCAyMjAyLjAgLTMwMC4wUTIxOTcgLTI5NiAyMTg5IC0yOThRMjE3OCAtMzMzIDIxNDIgLTMzM1EyMTI1IC0zMzMgMjEwMyAtMzIyUTIwNzYgLTMwOCAyMDQ1LjUgLTI3Ny41UTIwMTUgLTI0NyAxOTg4LjUgLTIwOC41UTE5NjIgLTE3MCAxOTQ1LjAgLTEzMS4wUTE5MjggLTkyIDE5MjggLTYwUTE5MjggLTI3IDE5NTMgLTI3UTE5NzUgLTI3IDE5OTguNSAtNDguMFEyMDIyIC02OSAyMDQzLjUgLTEwMC41UTIwNjUgLTEzMiAyMDgzLjAgLTE2My4wUTIxMDEgLTE5NCAyMTExIC0yMTNRMjEyNiAtMjQwIDIxMzkuMCAtMjU4LjBRMjE1MiAtMjc2IDIxNzYgLTI3NlEyMTg3IC0yNzYgMjE5OC4wIC0yNzMuMFEyMjA5IC0yNzAgMjIyMSAtMjcyUTIxOTEgLTI0MiAyMTY4LjUgLTIwMS4wUTIxNDYgLTE2MCAyMTM0LjAgLTEyMC41UTIxMjIgLTgxIDIxMjIgLTU0UTIxMjIgLTI0IDIxNDIgLTI0UTIxNTggLTI0IDIxNzYuNSAtNDIuMFEyMTk1IC02MCAyMjEyLjUgLTg3LjVRMjIzMCAtMTE1IDIyNDUuMCAtMTQzLjVRMjI2MCAtMTcyIDIyNjkgLTE5M1EyMjc0IC0xOTMgMjI3Ny41IC0xOTIuMFEyMjgxIC0xOTEgMjI4MSAtMTg0UTIyODAgLTE4MCAyMjc3LjUgLTE3NS41UTIyNzUgLTE3MSAyMjcwIC0xNjBRMjI2MiAtMTQ0IDIyNDguMCAtMTE3LjBRMjIzNCAtOTAgMjIxNS4wIC02Mi41UTIxOTYgLTM1IDIxNzQuMCAtMTYuMFEyMTUyIDMgMjEyOCAzWk0yMjk4IDBRMjI4NyAwIDIyNzEuNSAtNS4wUTIyNTYgLTEwIDIyNDQuNSAtMjMuNVEyMjMzIC0zNyAyMjMzIC02NFEyMjMzIC05MCAyMjUwLjAgLTEyNC4wUTIyNjcgLTE1OCAyMjgwIC0xODRRMjI2OSAtMTg0IDIyNjkgLTE5M1EyMjcwIC0xOTYgMjI3OC4wIC0yMTIuMFEyMjg2IC0yMjggMjI5Ny4wIC0yNTAuMFEyMzA4IC0yNzIgMjMxOC41IC0yOTIuNVEyMzI5IC0zMTMgMjMzNSAtMzI0UTIzNDcgLTM0NiAyMzczIC0zNDZIMjQzNVEyNDE4IC0zMzMgMjQwNC41IC0zMTcuNVEyMzkxIC0zMDIgMjM3MSAtMjYxUTIzNzEgLTI2MSAyMzY0LjAgLTI0Ny4wUTIzNTcgLTIzMyAyMzQ2LjUgLTIxMS41UTIzMzYgLTE5MCAyMzI1LjUgLTE2OC4wUTIzMTUgLTE0NiAyMzA4IC0xMzFRMjI5NSAtMTAzIDIyOTEuMCAtODYuNVEyMjg3IC03MCAyMjg3IC01NlEyMjg3IC0yMyAyMzA5IC0yM1EyMzMzIC0yMyAyMzY3IC02MlEyMzk1IC05NSAyNDIyLjAgLTE0MS4wUTI0NDkgLTE4NyAyNDczLjUgLTIzNi4wUTI0OTggLTI4NSAyNTE3IC0zMjRRMjUyOCAtMzQ2IDI1NTYgLTM0NkgyNjExUTI1ODkgLTMyOCAyNTY2LjUgLTI5Mi4wUTI1NDQgLTI1NiAyNTE3IC0yMDBRMjUxMCAtMTg1IDI0OTkuMCAtMTYyLjBRMjQ4OCAtMTM5IDI0NzkuNSAtMTEzLjBRMjQ3MSAtODcgMjQ3MSAtNjFRMjQ3MSAtMjYgMjQ5NiAtMjZRMjUzMCAtMjYgMjU2Mi4wIC03My4wUTI1OTQgLTEyMCAyNjI1IC0xOTNRMjYzMyAtMTkzIDI2MzQuNSAtMTkyLjBRMjYzNiAtMTkxIDI2MzcgLTE4NFEyNjI2IC0xNTcgMjYxMC41IC0xMjUuNVEyNTk1IC05NCAyNTc1LjUgLTY1LjBRMjU1NiAtMzYgMjUzMi41IC0xOC4wUTI1MDkgMCAyNDgxIDBRMjQ1NiAwIDI0NDAuMCAtMTguNVEyNDI0IC0zNyAyNDI0IC03MVEyNDI0IC05OCAyNDM0IC0xMjlRMjQxNyAtOTkgMjM5NS4wIC02OS4wUTIzNzMgLTM5IDIzNDguMCAtMTkuNVEyMzIzIDAgMjI5OCAwWk0yNDY4IDI3M1EyNDU2IDI3MyAyNDQzLjUgMjY5LjVRMjQzMSAyNjYgMjQxOCAyNjhRMjQyNCAyNjIgMjQ0MS4wIDIzMy41UTI0NTggMjA1IDI0ODEuMCAxNjIuNVEyNTA0IDEyMCAyNTI4LjUgNzAuNVEyNTUzIDIxIDI1NzYuMCAtMjcuNVEyNTk5IC03NiAyNjE1LjUgLTExNy41UTI2MzIgLTE1OSAyNjM3IC0xODRRMjYzMiAtMTg0IDI2MjguMCAtMTg2LjBRMjYyNCAtMTg4IDI2MjUgLTE5M1EyNjI1IC0xOTMgMjYzMS4wIC0yMTEuMFEyNjM3IC0yMjkgMjY0My4wIC0yNTQuNVEyNjQ5IC0yODAgMjY0OSAtMzAxUTI2NDkgLTMxNSAyNjQ2LjAgLTMyNS4wUTI2NDMgLTMzNSAyNjM1IC0zMzZMMjY4NSAtMzQ0UTI2OTEgLTM0NSAyNjk2LjAgLTM0NS41UTI3MDEgLTM0NiAyNzA1IC0zNDZRMjcxNCAtMzQ2IDI3MTcuNSAtMzM5LjVRMjcyMSAtMzMzIDI3MjEgLTMxM1EyNzIxIC0yODggMjcxMi41IC0yNDkuNVEyNzA0IC0yMTEgMjY5MyAtMTgyUTI3MDQgLTIwMCAyNzIxLjUgLTIyOC4wUTI3MzkgLTI1NiAyNzYyLjAgLTI4NS4wUTI3ODUgLTMxNCAyODEwLjAgLTMzMy41UTI4MzUgLTM1MyAyODU5IC0zNTNRMjg2NCAtMzUzIDI4NzIgLTM1MVEyOTAwIC0zNDQgMjkxMS41IC0zMjMuNVEyOTIzIC0zMDMgMjkyMyAtMjc1UTI5MjMgLTI0NSAyOTExLjUgLTIwOS4wUTI5MDAgLTE3MyAyODgxLjAgLTEzOC41UTI4NjIgLTEwNCAyODM5IC03NlEyODExIC00MSAyNzcyLjAgLTIwLjBRMjczMyAxIDI2OTIgMVEyNjU1IDEgMjYyMyAtMThMMjUyOCAyMjFRMjUxNCAyNTEgMjUwMS4wIDI2Mi4wUTI0ODggMjczIDI0NjggMjczWk0yNjYwIC0yMFEyNjg4IC0yMCAyNzIzLjAgLTQ2LjBRMjc1OCAtNzIgMjc5MC41IC0xMTIuNVEyODIzIC0xNTMgMjg0NSAtMTk0UTI4NjAgLTIyMiAyODY3LjAgLTI0NS41UTI4NzQgLTI2OSAyODc0IC0yODZRMjg3NCAtMzI1IDI4NDYgLTMyNVEyODMzIC0zMjUgMjgxMi41IC0zMTEuMFEyNzkyIC0yOTcgMjc2NSAtMjYwUTI3MzYgLTIyMCAyNzAxLjUgLTE1OS41UTI2NjcgLTk5IDI2MzEgLTMyUTI2NDMgLTIwIDI2NjAgLTIwWk0yOTYyIC0xOTZRMjk3MCAtMjEzIDI5ODMuMCAtMjUwLjVRMjk5NiAtMjg4IDMwMTAuMCAtMzM0LjBRMzAyNCAtMzgwIDMwMzEgLTQyMVEzMDM0IC00MzcgMzA0Mi4wIC00NDQuNVEzMDUwIC00NTIgMzA1OSAtNDUyUTMwNzIgLTQ1MiAzMDgzLjAgLTQzOS41UTMwOTQgLTQyNyAzMDk0IC00MDRRMzA5NCAtMzc2IDMwNzcuNSAtMzU2LjBRMzA2MSAtMzM2IDMwMzcgLTMxOFEzMDQ3IC0zMTcgMzA1OC4wIC0zMTYuNVEzMDY5IC0zMTYgMzA4MiAtMzE2UTMxMjkgLTMxNiAzMTc1IC0zMjJRMzE3NyAtMzE2IDMxNzcgLTMxM1EzMTc3IC0zMDAgMzE2OS41IC0yODAuMFEzMTYyIC0yNjAgMzE1NCAtMjQ0UTMxNTAgLTIzNSAzMTM4LjAgLTIxMS41UTMxMjYgLTE4OCAzMTEyLjAgLTE1OC41UTMwOTggLTEyOSAzMDg4LjUgLTEwMC41UTMwNzkgLTcyIDMwNzkgLTUyUTMwNzkgLTI2IDMwOTkgLTI2UTMxMTggLTI2IDMxNTIuMCAtNzAuNVEzMTg2IC0xMTUgMzIyMCAtMTkzUTMyMzIgLTE5MyAzMjMyIC0xODRRMzIyMSAtMTU3IDMyMDQuNSAtMTI1LjBRMzE4OCAtOTMgMzE2OC4wIC02NC41UTMxNDggLTM2IDMxMjUuMCAtMTcuNVEzMTAyIDEgMzA3NyAxUTMwNTggMSAzMDM5LjAgLTE0LjVRMzAyMCAtMzAgMzAyMCAtNjVRMzAyMCAtOTYgMzAzMi4wIC0xMjUuNVEzMDQ0IC0xNTUgMzA1OS4wIC0xODEuMFEzMDc0IC0yMDcgMzA4Ni4wIC0yMjcuMFEzMDk4IC0yNDcgMzA5OCAtMjU5UTMwOTggLTI3NyAzMDc1LjUgLTI4NS4wUTMwNTMgLTI5MyAzMDE3IC0yOTRRMjk5OSAtMjQ4IDI5OTAuMCAtMjI2LjBRMjk4MSAtMjA0IDI5NzMgLTE4NFEyOTU3IC0xODQgMjk2MiAtMTk2Wk0zMjIxIC0xOTZRMzIyOSAtMjEzIDMyNDIuMCAtMjUwLjVRMzI1NSAtMjg4IDMyNjkuMCAtMzM0LjBRMzI4MyAtMzgwIDMyOTAgLTQyMVEzMjkzIC00MzcgMzMwMS4wIC00NDQuNVEzMzA5IC00NTIgMzMxOCAtNDUyUTMzMzEgLTQ1MiAzMzQyLjAgLTQzOS41UTMzNTMgLTQyNyAzMzUzIC00MDRRMzM1MyAtMzc2IDMzMzYuNSAtMzU2LjBRMzMyMCAtMzM2IDMyOTYgLTMxOFEzMzA2IC0zMTcgMzMxNy4wIC0zMTYuNVEzMzI4IC0zMTYgMzM0MSAtMzE2UTMzODggLTMxNiAzNDM0IC0zMjJRMzQzNiAtMzE2IDM0MzYgLTMxM1EzNDM2IC0zMDAgMzQyOC41IC0yODAuMFEzNDIxIC0yNjAgMzQxMyAtMjQ0UTM0MDkgLTIzNSAzMzk3LjAgLTIxMS41UTMzODUgLTE4OCAzMzcxLjAgLTE1OC41UTMzNTcgLTEyOSAzMzQ3LjUgLTEwMC41UTMzMzggLTcyIDMzMzggLTUyUTMzMzggLTI2IDMzNTggLTI2UTMzNzcgLTI2IDM0MTEuMCAtNzAuNVEzNDQ1IC0xMTUgMzQ3OSAtMTkzUTM0OTEgLTE5MyAzNDkxIC0xODRRMzQ4MCAtMTU3IDM0NjMuNSAtMTI1LjBRMzQ0NyAtOTMgMzQyNy4wIC02NC41UTM0MDcgLTM2IDMzODQuMCAtMTcuNVEzMzYxIDEgMzMzNiAxUTMzMTcgMSAzMjk4LjAgLTE0LjVRMzI3OSAtMzAgMzI3OSAtNjVRMzI3OSAtOTYgMzI5MS4wIC0xMjUuNVEzMzAzIC0xNTUgMzMxOC4wIC0xODEuMFEzMzMzIC0yMDcgMzM0NS4wIC0yMjcuMFEzMzU3IC0yNDcgMzM1NyAtMjU5UTMzNTcgLTI3NyAzMzM0LjUgLTI4NS4wUTMzMTIgLTI5MyAzMjc2IC0yOTRRMzI1OCAtMjQ4IDMyNDkuMCAtMjI2LjBRMzI0MCAtMjA0IDMyMzIgLTE4NFEzMjE2IC0xODQgMzIyMSAtMTk2Wk0zNDgwIC0xOTZRMzQ4OCAtMjEzIDM1MDEuMCAtMjUwLjVRMzUxNCAtMjg4IDM1MjguMCAtMzM0LjBRMzU0MiAtMzgwIDM1NDkgLTQyMVEzNTUyIC00MzcgMzU2MC4wIC00NDQuNVEzNTY4IC00NTIgMzU3NyAtNDUyUTM1OTAgLTQ1MiAzNjAxLjAgLTQzOS41UTM2MTIgLTQyNyAzNjEyIC00MDRRMzYxMiAtMzc2IDM1OTUuNSAtMzU2LjBRMzU3OSAtMzM2IDM1NTUgLTMxOFEzNTY1IC0zMTcgMzU3Ni4wIC0zMTYuNVEzNTg3IC0zMTYgMzYwMCAtMzE2UTM2NDcgLTMxNiAzNjkzIC0zMjJRMzY5NSAtMzE2IDM2OTUgLTMxM1EzNjk1IC0zMDAgMzY4Ny41IC0yODAuMFEzNjgwIC0yNjAgMzY3MiAtMjQ0UTM2NjggLTIzNSAzNjU2LjAgLTIxMS41UTM2NDQgLTE4OCAzNjMwLjAgLTE1OC41UTM2MTYgLTEyOSAzNjA2LjUgLTEwMC41UTM1OTcgLTcyIDM1OTcgLTUyUTM1OTcgLTI2IDM2MTcgLTI2UTM2MzYgLTI2IDM2NzAuMCAtNzAuNVEzNzA0IC0xMTUgMzczOCAtMTkzUTM3NTAgLTE5MyAzNzUwIC0xODRRMzczOSAtMTU3IDM3MjIuNSAtMTI1LjBRMzcwNiAtOTMgMzY4Ni4wIC02NC41UTM2NjYgLTM2IDM2NDMuMCAtMTcuNVEzNjIwIDEgMzU5NSAxUTM1NzYgMSAzNTU3LjAgLTE0LjVRMzUzOCAtMzAgMzUzOCAtNjVRMzUzOCAtOTYgMzU1MC4wIC0xMjUuNVEzNTYyIC0xNTUgMzU3Ny4wIC0xODEuMFEzNTkyIC0yMDcgMzYwNC4wIC0yMjcuMFEzNjE2IC0yNDcgMzYxNiAtMjU5UTM2MTYgLTI3NyAzNTkzLjUgLTI4NS4wUTM1NzEgLTI5MyAzNTM1IC0yOTRRMzUxNyAtMjQ4IDM1MDguMCAtMjI2LjBRMzQ5OSAtMjA0IDM0OTEgLTE4NFEzNDc1IC0xODQgMzQ4MCAtMTk2Wk0zNzM5IC0xOTZRMzc0NyAtMjEzIDM3NjAuMCAtMjUwLjVRMzc3MyAtMjg4IDM3ODcuMCAtMzM0LjBRMzgwMSAtMzgwIDM4MDggLTQyMVEzODExIC00MzcgMzgxOS4wIC00NDQuNVEzODI3IC00NTIgMzgzNiAtNDUyUTM4NDkgLTQ1MiAzODYwLjAgLTQzOS41UTM4NzEgLTQyNyAzODcxIC00MDRRMzg3MSAtMzc2IDM4NTQuNSAtMzU2LjBRMzgzOCAtMzM2IDM4MTQgLTMxOFEzODI0IC0zMTcgMzgzNS4wIC0zMTYuNVEzODQ2IC0zMTYgMzg1OSAtMzE2UTM5MDYgLTMxNiAzOTUyIC0zMjJRMzk1NCAtMzE2IDM5NTQgLTMxM1EzOTU0IC0zMDAgMzk0Ni41IC0yODAuMFEzOTM5IC0yNjAgMzkzMSAtMjQ0UTM5MjcgLTIzNSAzOTE1LjAgLTIxMS41UTM5MDMgLTE4OCAzODg5LjAgLTE1OC41UTM4NzUgLTEyOSAzODY1LjUgLTEwMC41UTM4NTYgLTcyIDM4NTYgLTUyUTM4NTYgLTI2IDM4NzYgLTI2UTM4OTUgLTI2IDM5MjkuMCAtNzAuNVEzOTYzIC0xMTUgMzk5NyAtMTkzUTQwMDkgLTE5MyA0MDA5IC0xODRRMzk5OCAtMTU3IDM5ODEuNSAtMTI1LjBRMzk2NSAtOTMgMzk0NS4wIC02NC41UTM5MjUgLTM2IDM5MDIuMCAtMTcuNVEzODc5IDEgMzg1NCAxUTM4MzUgMSAzODE2LjAgLTE0LjVRMzc5NyAtMzAgMzc5NyAtNjVRMzc5NyAtOTYgMzgwOS4wIC0xMjUuNVEzODIxIC0xNTUgMzgzNi4wIC0xODEuMFEzODUxIC0yMDcgMzg2My4wIC0yMjcuMFEzODc1IC0yNDcgMzg3NSAtMjU5UTM4NzUgLTI3NyAzODUyLjUgLTI4NS4wUTM4MzAgLTI5MyAzNzk0IC0yOTRRMzc3NiAtMjQ4IDM3NjcuMCAtMjI2LjBRMzc1OCAtMjA0IDM3NTAgLTE4NFEzNzM0IC0xODQgMzczOSAtMTk2Wk0zOTk4IC0xOTZRNDAwNiAtMjEzIDQwMTkuMCAtMjUwLjVRNDAzMiAtMjg4IDQwNDYuMCAtMzM0LjBRNDA2MCAtMzgwIDQwNjcgLTQyMVE0MDcwIC00MzcgNDA3OC4wIC00NDQuNVE0MDg2IC00NTIgNDA5NSAtNDUyUTQxMDggLTQ1MiA0MTE5LjAgLTQzOS41UTQxMzAgLTQyNyA0MTMwIC00MDRRNDEzMCAtMzc2IDQxMTMuNSAtMzU2LjBRNDA5NyAtMzM2IDQwNzMgLTMxOFE0MDgzIC0zMTcgNDA5NC4wIC0zMTYuNVE0MTA1IC0zMTYgNDExOCAtMzE2UTQxNjUgLTMxNiA0MjExIC0zMjJRNDIxMyAtMzE2IDQyMTMgLTMxM1E0MjEzIC0zMDAgNDIwNS41IC0yODAuMFE0MTk4IC0yNjAgNDE5MCAtMjQ0UTQxODYgLTIzNSA0MTc0LjAgLTIxMS41UTQxNjIgLTE4OCA0MTQ4LjAgLTE1OC41UTQxMzQgLTEyOSA0MTI0LjUgLTEwMC41UTQxMTUgLTcyIDQxMTUgLTUyUTQxMTUgLTI2IDQxMzUgLTI2UTQxNTQgLTI2IDQxODguMCAtNzAuNVE0MjIyIC0xMTUgNDI1NiAtMTkzUTQyNjggLTE5MyA0MjY4IC0xODRRNDI1NyAtMTU3IDQyNDAuNSAtMTI1LjBRNDIyNCAtOTMgNDIwNC4wIC02NC41UTQxODQgLTM2IDQxNjEuMCAtMTcuNVE0MTM4IDEgNDExMyAxUTQwOTQgMSA0MDc1LjAgLTE0LjVRNDA1NiAtMzAgNDA1NiAtNjVRNDA1NiAtOTYgNDA2OC4wIC0xMjUuNVE0MDgwIC0xNTUgNDA5NS4wIC0xODEuMFE0MTEwIC0yMDcgNDEyMi4wIC0yMjcuMFE0MTM0IC0yNDcgNDEzNCAtMjU5UTQxMzQgLTI3NyA0MTExLjUgLTI4NS4wUTQwODkgLTI5MyA0MDUzIC0yOTRRNDAzNSAtMjQ4IDQwMjYuMCAtMjI2LjBRNDAxNyAtMjA0IDQwMDkgLTE4NFEzOTkzIC0xODQgMzk5OCAtMTk2WiIvPjwvc3ZnPg==",emboss:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMTguMiAtOTUyLjIgNDUyMi40IDE0MDcuNCI+PGRlZnM+PGZpbHRlciBpZD0icGFwZXItcmVsaWVmIiB4PSItMTAlIiB5PSItMjUlIiB3aWR0aD0iMTIwJSIgaGVpZ2h0PSIxNjAlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249Ii4zMiIgcmVzdWx0PSJzb2Z0Ii8+CjxmZU9mZnNldCBpbj0ic29mdCIgZHg9Ii41IiBkeT0iLjg1IiByZXN1bHQ9ImNhc3QiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiM4ZTgwNjYiIGZsb29kLW9wYWNpdHk9Ii41NSIgcmVzdWx0PSJzaGFkZSIvPgo8ZmVDb21wb3NpdGUgaW49InNoYWRlIiBpbjI9ImNhc3QiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJzaGFkb3ciLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii40NSIgZHk9Ii42NSIgcmVzdWx0PSJkb3duIi8+CjxmZUNvbXBvc2l0ZSBpbj0iU291cmNlQWxwaGEiIGluMj0iZG93biIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJ1cHBlckVkZ2UiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiNmZmZlZjciIGZsb29kLW9wYWNpdHk9IjEiIHJlc3VsdD0ibGlnaHQiLz4KPGZlQ29tcG9zaXRlIGluPSJsaWdodCIgaW4yPSJ1cHBlckVkZ2UiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJoaWdobGlnaHQiLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii0uNCIgZHk9Ii0uNiIgcmVzdWx0PSJ1cCIvPgo8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUFscGhhIiBpbjI9InVwIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9Imxvd2VyRWRnZSIvPgo8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2IyYTU4YiIgZmxvb2Qtb3BhY2l0eT0iLjY1IiByZXN1bHQ9Imxvd2VyU2hhZGUiLz4KPGZlQ29tcG9zaXRlIGluPSJsb3dlclNoYWRlIiBpbjI9Imxvd2VyRWRnZSIgb3BlcmF0b3I9ImluIiByZXN1bHQ9Imxvd2VyIi8+CjxmZU1lcmdlPjxmZU1lcmdlTm9kZSBpbj0ic2hhZG93Ii8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PGZlTWVyZ2VOb2RlIGluPSJoaWdobGlnaHQiLz48ZmVNZXJnZU5vZGUgaW49Imxvd2VyIi8+PC9mZU1lcmdlPgo8L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0iI2U4ZTFjZiIgZmlsdGVyPSJ1cmwoI3BhcGVyLXJlbGllZikiPjxwYXRoIGQ9Ik0xMzY1IDExNVExMzUwIDExMyAxMzI0LjAgMTA3LjVRMTI5OCAxMDIgMTI3MS4wIDg2LjBRMTI0NCA3MCAxMjI1LjAgMzcuNVExMjA2IDUgMTIwNiAtNDlRMTIwNiAtMTExIDEyMzEuNSAtMTg1LjVRMTI1NyAtMjYwIDEyOTQuMCAtMzQxLjBRMTMzMSAtNDIyIDEzNjUgLTUwMVExMzkyIC01NjQgMTM5MiAtNTk3UTEzOTIgLTYzMCAxMzY3IC02MzBRMTMzOSAtNjMwIDEyODMuNSAtNTg1LjVRMTIyOCAtNTQxIDExNTUgLTQ1MVExMTM2IC00MjcgMTEwNi4wIC0zODQuNVExMDc2IC0zNDIgMTA0Mi4wIC0yOTAuNVExMDA4IC0yMzkgOTc1LjUgLTE4Ni41UTk0MyAtMTM0IDkxOC41IC05MC4wUTg5NCAtNDYgODgzIC0yMFE4NzAgMTEgODUzLjAgMjIuNVE4MzYgMzQgODIxIDM0UTgwOCAzNCA3OTkgMjdRNzg5IDIwIDc4OSAxMFE3ODkgNCA3OTIgMFE3OTggLTEyIDgyMi4wIC01NS4wUTg0NiAtOTggODc4LjAgLTE2OS4wUTkxMCAtMjQwIDkzOSAtMzM0UTk0OCAtMzYzIDk1Ny41IC00MDEuMFE5NjcgLTQzOSA5NzUuMCAtNDc5LjVROTgzIC01MjAgOTg4LjUgLTU1NS41UTk5NCAtNTkxIDk5NCAtNjEzUTk5NCAtNjQ4IDk4Mi4wIC02NjQuNVE5NzAgLTY4MSA5NTAgLTY4MVE5MjggLTY4MSA5MDAuMCAtNjYyLjBRODcyIC02NDMgODQzIC02MDdRNzkzIC01NDQgNzU1LjAgLTQ5MC41UTcxNyAtNDM3IDY4NS41IC0zODQuMFE2NTQgLTMzMSA2MjMuNSAtMjcxLjBRNTkzIC0yMTEgNTU5LjAgLTEzNi41UTUyNSAtNjIgNDgxIDM2UTQ3NCA1MiA0NTcuNSA1OS4wUTQ0MSA2NiA0MjcgNjZRNDEzIDY2IDQwNC4wIDYwLjBRMzk1IDU0IDM5OCA0M1E0MjAgOCA0NDcuMCAtNDQuNVE0NzQgLTk3IDUwMi4wIC0xNjEuMFE1MzAgLTIyNSA1NTYuMCAtMjk0LjBRNTgyIC0zNjMgNjAyLjUgLTQyOS4wUTYyMyAtNDk1IDYzNS4wIC01NTMuMFE2NDcgLTYxMSA2NDcgLTY1MlE2NDcgLTcyOSA2MTQuNSAtNzYyLjBRNTgyIC03OTUgNTMxIC03OTVRNDg2IC03OTUgNDMyLjAgLTc3My4wUTM3OCAtNzUxIDMyMy41IC03MTMuMFEyNjkgLTY3NSAyMjEgLTYyN1ExNTIgLTU1OCAxMTIuNSAtNDc3LjBRNzMgLTM5NiA3MyAtMzEzUTczIC0yNTcgOTQuMCAtMjE4LjBRMTE1IC0xNzkgMTQ5LjUgLTE1OS4wUTE4NCAtMTM5IDIyNiAtMTM5UTI2OSAtMTM5IDMwNi41IC0xNjAuNVEzNDQgLTE4MiAzNzIuNSAtMjE2LjVRNDAxIC0yNTEgNDE3LjAgLTI4OS41UTQzMyAtMzI4IDQzMyAtMzYyUTQzMyAtMzkxIDQxNy4wIC00MTAuMFE0MDEgLTQyOSAzNjYgLTQyOVEzNjIgLTQyOSAzNTcuNSAtNDI4LjVRMzUzIC00MjggMzQ4IC00MjhIMzQ1UTMzOCAtNDI4IDMzMi4wIC00MzAuNVEzMjYgLTQzMyAzMjYgLTQzN1EzMjYgLTQ0MSAzMzYuNSAtNDQ2LjBRMzQ3IC00NTEgMzc1IC00NTFRNDIwIC00NTEgNDQyLjUgLTQyNC41UTQ2NSAtMzk4IDQ2NSAtMzU3UTQ2NSAtMzE3IDQ0NC41IC0yNzUuMFE0MjQgLTIzMyAzODkuMCAtMTk3LjBRMzU0IC0xNjEgMzEwLjUgLTEzOS4wUTI2NyAtMTE3IDIyMSAtMTE3UTE2NyAtMTE3IDEyMC41IC0xNDIuMFE3NCAtMTY3IDQ2LjAgLTIxNC41UTE4IC0yNjIgMTggLTMyOFExOCAtMzkxIDQ0LjAgLTQ1Mi41UTcwIC01MTQgMTExLjUgLTU2OC41UTE1MyAtNjIzIDIwMCAtNjY1UTI1MiAtNzEyIDMxMC4wIC03NDUuNVEzNjggLTc3OSA0MjUuNSAtNzk3LjVRNDgzIC04MTYgNTMzIC04MTZRNjA3IC04MTYgNjU1LjUgLTc3Mi4wUTcwNCAtNzI4IDcwNCAtNjMwUTcwNCAtNTkwIDY5My4wIC01MzguNVE2ODIgLTQ4NyA2NjcuMCAtNDM1LjVRNjUyIC0zODQgNjM4IC0zNDRINjQwUTY3NiAtNDA5IDcwNC41IC00NTUuNVE3MzMgLTUwMiA3NjIuMCAtNTQyLjBRNzkxIC01ODIgODI3IC02MjZRODU4IC02NjMgODk4LjAgLTY4NS4wUTkzOCAtNzA3IDk3NSAtNzA3UTEwMDggLTcwNyAxMDMxLjAgLTY4NS4wUTEwNTQgLTY2MyAxMDU0IC02MTBRMTA1NCAtNjA0IDEwNTQuMCAtNjAwLjBRMTA1NCAtNTk2IDEwNTMgLTU4OFExMDQ0IC00OTIgMTAxNS4wIC0zOTkuNVE5ODYgLTMwNyA5NTUgLTIxM1E5ODYgLTI2MSAxMDM5LjAgLTMzNS4wUTEwOTIgLTQwOSAxMTU1IC00ODhRMTIzMiAtNTg0IDEyOTguMCAtNjMyLjBRMTM2NCAtNjgwIDE0MDcgLTY4MFExNDYxIC02ODAgMTQ2MSAtNjE0UTE0NjEgLTU4OSAxNDUxLjUgLTU1NC4wUTE0NDIgLTUxOSAxNDIyIC00ODBRMTQwMCAtNDM2IDEzNzMuNSAtMzc4LjVRMTM0NyAtMzIxIDEzMjMuMCAtMjU4LjBRMTI5OSAtMTk1IDEyODMuNSAtMTM0LjVRMTI2OCAtNzQgMTI2OCAtMjNRMTI2OCAzMiAxMjkzLjUgNjUuNVExMzE5IDk5IDEzODIgOTlIMTM4OFExNDAzIDk5IDE0MDMgMTA1UTE0MDMgMTA5IDEzOTMuMCAxMTMuMFExMzgzIDExNyAxMzY1IDExNVpNMTI5OSA4UTEzMzUgLTY1IDEzNjguMCAtMTM2LjVRMTQwMSAtMjA4IDE0MzYgLTI3M1ExNDU2IC0zMDkgMTQ3MC4wIC0zMjMuNVExNDg0IC0zMzggMTUwNyAtMzM4UTE1MTUgLTMzOCAxNTI0LjAgLTMzNS41UTE1MzMgLTMzMyAxNTQyIC0zMzNRMTU0OCAtMzMzIDE1NTEgLTMzNFExNTM3IC0zMjYgMTUxNC41IC0yOTQuNVExNDkyIC0yNjMgMTQ2OS4wIC0yMjIuMFExNDQ2IC0xODEgMTQyOCAtMTQ1UTE0NDcgLTE2OCAxNDY4LjAgLTE5MS4wUTE0ODkgLTIxNCAxNTE0IC0yMzVRMTUzOCAtMjU2IDE1NzEuNSAtMjc4LjVRMTYwNSAtMzAxIDE2MzcuMCAtMzE2LjBRMTY2OSAtMzMxIDE2ODggLTMzMVExNjk1IC0zMzEgMTY5OCAtMzMwUTE2OTggLTMzMCAxNjg3LjAgLTMxMC41UTE2NzYgLTI5MSAxNjU5LjUgLTI1OS41UTE2NDMgLTIyOCAxNjI2LjAgLTE5Mi41UTE2MDkgLTE1NyAxNTk1LjUgLTEyNC41UTE1ODIgLTkyIDE1NzggLTcwUTE1NzUgLTU3IDE1NzUgLTQ2UTE1NzUgLTMwIDE1ODEuMCAtMjUuMFExNTg3IC0yMCAxNTk0IC0yMFExNjEzIC0yMCAxNjMzLjAgLTM3LjBRMTY1MyAtNTQgMTY3MS41IC04MC41UTE2OTAgLTEwNyAxNzA2LjAgLTEzNy4wUTE3MjIgLTE2NyAxNzMzIC0xOTNRMTc0NSAtMTkzIDE3NDUgLTE4NFExNzM0IC0xNTcgMTcxNy41IC0xMjQuNVExNzAxIC05MiAxNjgwLjUgLTYzLjBRMTY2MCAtMzQgMTYzNS4wIC0xNS4wUTE2MTAgNCAxNTgxIDRRMTU2MSA0IDE1MzkuNSAtMTAuMFExNTE4IC0yNCAxNTE4IC02MlExNTE4IC03MyAxNTIwLjAgLTg1LjVRMTUyMiAtOTggMTUyNyAtMTEzUTE1MzUgLTEzMyAxNTQ2LjAgLTE1Ni4wUTE1NTcgLTE3OSAxNTgyIC0yMTlRMTU4OSAtMjMwIDE1OTAuNSAtMjM2LjBRMTU5MiAtMjQyIDE1OTIgLTI0NlExNTkyIC0yNTggMTU4MSAtMjU4UTE1NzIgLTI1OCAxNTU0LjUgLTI0OC4wUTE1MzcgLTIzOCAxNTExIC0yMTNRMTQ4NiAtMTg5IDE0NTEuNSAtMTQ1LjBRMTQxNyAtMTAxIDEzNzIgLTE1UTEzNjUgLTIgMTM1Ni41IC0xLjBRMTM0OCAwIDEzMzMgMVExMzIzIDIgMTMxNC4wIDIuNVExMzA1IDMgMTI5OSA4Wk0xMzcyIDMxOVExMzIwIDMxOSAxMjk4LjUgMjk4LjVRMTI3NyAyNzggMTI3NyAyNTBRMTI3NyAyMjMgMTI5MiAxOTZRMTMwNiAxNjcgMTMzMS4wIDE0Ni41UTEzNTYgMTI2IDEzODYgMTEyUTE0MzcgODggMTUwMy41IDczLjBRMTU3MCA1OCAxNjMxIDQwUTE2MzkgMjYgMTY0Ny41IDExLjBRMTY1NiAtNCAxNjYzIC0xOFExNjgzIC01OCAxNzAwLjAgLTk3LjVRMTcxNyAtMTM3IDE3NDIgLTE4M1ExNzMzIC0xODMgMTczMyAtMTkzTDE3NzcgLTI5NFExNzc4IC0yOTYgMTc3OS4wIC0yOTkuNVExNzgwIC0zMDMgMTc4MCAtMzA3UTE3ODAgLTMxOCAxNzc1LjAgLTMyNS41UTE3NzAgLTMzMyAxNzY4IC0zMzZMMTgyMyAtMzM4SDE4MjhRMTg1MCAtMzM4IDE4NTAgLTMyNFExODUwIC0zMTcgMTg0NCAtMzAyTDE3NjQgLTExNFExNzUwIC04MSAxNzM0LjAgLTQ4LjBRMTcxOCAtMTUgMTcwMSAxOVExNzcxIC04IDE4MTIuNSAtNDcuNVExODU0IC04NyAxODc2LjUgLTEyNi41UTE4OTkgLTE2NiAxOTExIC0xOTNRMTkyMyAtMTkzIDE5MjMgLTE4NFExOTEzIC0xNjIgMTg5Ny4wIC0xMzEuNVExODgxIC0xMDEgMTg1NS4wIC02Ny41UTE4MjkgLTM0IDE3ODguMCAtMy4wUTE3NDcgMjggMTY4NSA1MVExNjYxIDk0IDE2MzAuMCAxNDAuNVExNTk5IDE4NyAxNTYwLjAgMjI3LjVRMTUyMSAyNjggMTQ3NC41IDI5My41UTE0MjggMzE5IDEzNzIgMzE5Wk0xMzQ4IDI5OVExMzgxIDI5OSAxNDE2LjUgMjc5LjBRMTQ1MiAyNTkgMTQ4NS4wIDIyOC41UTE1MTggMTk4IDE1NDUuNSAxNjYuMFExNTczIDEzNCAxNTkwIDExMFExNTk2IDEwMiAxNjAxLjAgOTIuMFExNjA2IDgyIDE2MTEgNzJRMTU2MyA4NSAxNTA1LjAgMTAwLjVRMTQ0NyAxMTYgMTQwMyAxMzVRMTM1NSAxNTUgMTMyOC4wIDE5MS41UTEzMDEgMjI4IDEzMDEgMjU3UTEzMDEgMjc2IDEzMTIuNSAyODcuNVExMzI0IDI5OSAxMzQ4IDI5OVpNMTg1MiAtNDAwUTE4MzkgLTQwMCAxODI5LjUgLTQxMC4wUTE4MjAgLTQyMCAxODIwIC00MzRRMTgyMCAtNDUxIDE4MzQuMCAtNDY0LjVRMTg0OCAtNDc4IDE4NjUgLTQ3OFExODc5IC00NzggMTg4OS4wIC00NjkuMFExODk5IC00NjAgMTg5OSAtNDQ2UTE4OTkgLTQyOCAxODg1LjAgLTQxNC4wUTE4NzEgLTQwMCAxODUyIC00MDBaTTIxMjggM1EyMTA1IDMgMjA4Ny41IC0xMC4wUTIwNzAgLTIzIDIwNzAgLTYzUTIwNzAgLTgwIDIwNzIuNSAtOTUuMFEyMDc1IC0xMTAgMjA3OSAtMTI3UTIwNzAgLTExMiAyMDU0LjAgLTkwLjBRMjAzOCAtNjggMjAxOC41IC00Ny4wUTE5OTkgLTI2IDE5NzguNSAtMTIuMFExOTU4IDIgMTk0MCAyUTE5MTQgMiAxODk4LjAgLTIxLjVRMTg4MiAtNDUgMTg4MiAtODNRMTg4MiAtMTI0IDE5MDEuMCAtMTcxLjBRMTkyMCAtMjE4IDE5NTMuMCAtMjYxLjBRMTk4NiAtMzA0IDIwMjkuMCAtMzMxLjBRMjA3MiAtMzU4IDIxMTkgLTM1OFEyMTQyIC0zNTggMjE2My4wIC0zNTAuNVEyMTg0IC0zNDMgMjIwMCAtMzI2UTIyMDcgLTMxOSAyMjA3IC0zMTBRMjIwNyAtMzA0IDIyMDIuMCAtMzAwLjBRMjE5NyAtMjk2IDIxODkgLTI5OFEyMTc4IC0zMzMgMjE0MiAtMzMzUTIxMjUgLTMzMyAyMTAzIC0zMjJRMjA3NiAtMzA4IDIwNDUuNSAtMjc3LjVRMjAxNSAtMjQ3IDE5ODguNSAtMjA4LjVRMTk2MiAtMTcwIDE5NDUuMCAtMTMxLjBRMTkyOCAtOTIgMTkyOCAtNjBRMTkyOCAtMjcgMTk1MyAtMjdRMTk3NSAtMjcgMTk5OC41IC00OC4wUTIwMjIgLTY5IDIwNDMuNSAtMTAwLjVRMjA2NSAtMTMyIDIwODMuMCAtMTYzLjBRMjEwMSAtMTk0IDIxMTEgLTIxM1EyMTI2IC0yNDAgMjEzOS4wIC0yNTguMFEyMTUyIC0yNzYgMjE3NiAtMjc2UTIxODcgLTI3NiAyMTk4LjAgLTI3My4wUTIyMDkgLTI3MCAyMjIxIC0yNzJRMjE5MSAtMjQyIDIxNjguNSAtMjAxLjBRMjE0NiAtMTYwIDIxMzQuMCAtMTIwLjVRMjEyMiAtODEgMjEyMiAtNTRRMjEyMiAtMjQgMjE0MiAtMjRRMjE1OCAtMjQgMjE3Ni41IC00Mi4wUTIxOTUgLTYwIDIyMTIuNSAtODcuNVEyMjMwIC0xMTUgMjI0NS4wIC0xNDMuNVEyMjYwIC0xNzIgMjI2OSAtMTkzUTIyNzQgLTE5MyAyMjc3LjUgLTE5Mi4wUTIyODEgLTE5MSAyMjgxIC0xODRRMjI4MCAtMTgwIDIyNzcuNSAtMTc1LjVRMjI3NSAtMTcxIDIyNzAgLTE2MFEyMjYyIC0xNDQgMjI0OC4wIC0xMTcuMFEyMjM0IC05MCAyMjE1LjAgLTYyLjVRMjE5NiAtMzUgMjE3NC4wIC0xNi4wUTIxNTIgMyAyMTI4IDNaTTIyOTggMFEyMjg3IDAgMjI3MS41IC01LjBRMjI1NiAtMTAgMjI0NC41IC0yMy41UTIyMzMgLTM3IDIyMzMgLTY0UTIyMzMgLTkwIDIyNTAuMCAtMTI0LjBRMjI2NyAtMTU4IDIyODAgLTE4NFEyMjY5IC0xODQgMjI2OSAtMTkzUTIyNzAgLTE5NiAyMjc4LjAgLTIxMi4wUTIyODYgLTIyOCAyMjk3LjAgLTI1MC4wUTIzMDggLTI3MiAyMzE4LjUgLTI5Mi41UTIzMjkgLTMxMyAyMzM1IC0zMjRRMjM0NyAtMzQ2IDIzNzMgLTM0NkgyNDM1UTI0MTggLTMzMyAyNDA0LjUgLTMxNy41UTIzOTEgLTMwMiAyMzcxIC0yNjFRMjM3MSAtMjYxIDIzNjQuMCAtMjQ3LjBRMjM1NyAtMjMzIDIzNDYuNSAtMjExLjVRMjMzNiAtMTkwIDIzMjUuNSAtMTY4LjBRMjMxNSAtMTQ2IDIzMDggLTEzMVEyMjk1IC0xMDMgMjI5MS4wIC04Ni41UTIyODcgLTcwIDIyODcgLTU2UTIyODcgLTIzIDIzMDkgLTIzUTIzMzMgLTIzIDIzNjcgLTYyUTIzOTUgLTk1IDI0MjIuMCAtMTQxLjBRMjQ0OSAtMTg3IDI0NzMuNSAtMjM2LjBRMjQ5OCAtMjg1IDI1MTcgLTMyNFEyNTI4IC0zNDYgMjU1NiAtMzQ2SDI2MTFRMjU4OSAtMzI4IDI1NjYuNSAtMjkyLjBRMjU0NCAtMjU2IDI1MTcgLTIwMFEyNTEwIC0xODUgMjQ5OS4wIC0xNjIuMFEyNDg4IC0xMzkgMjQ3OS41IC0xMTMuMFEyNDcxIC04NyAyNDcxIC02MVEyNDcxIC0yNiAyNDk2IC0yNlEyNTMwIC0yNiAyNTYyLjAgLTczLjBRMjU5NCAtMTIwIDI2MjUgLTE5M1EyNjMzIC0xOTMgMjYzNC41IC0xOTIuMFEyNjM2IC0xOTEgMjYzNyAtMTg0UTI2MjYgLTE1NyAyNjEwLjUgLTEyNS41UTI1OTUgLTk0IDI1NzUuNSAtNjUuMFEyNTU2IC0zNiAyNTMyLjUgLTE4LjBRMjUwOSAwIDI0ODEgMFEyNDU2IDAgMjQ0MC4wIC0xOC41UTI0MjQgLTM3IDI0MjQgLTcxUTI0MjQgLTk4IDI0MzQgLTEyOVEyNDE3IC05OSAyMzk1LjAgLTY5LjBRMjM3MyAtMzkgMjM0OC4wIC0xOS41UTIzMjMgMCAyMjk4IDBaTTI0NjggMjczUTI0NTYgMjczIDI0NDMuNSAyNjkuNVEyNDMxIDI2NiAyNDE4IDI2OFEyNDI0IDI2MiAyNDQxLjAgMjMzLjVRMjQ1OCAyMDUgMjQ4MS4wIDE2Mi41UTI1MDQgMTIwIDI1MjguNSA3MC41UTI1NTMgMjEgMjU3Ni4wIC0yNy41UTI1OTkgLTc2IDI2MTUuNSAtMTE3LjVRMjYzMiAtMTU5IDI2MzcgLTE4NFEyNjMyIC0xODQgMjYyOC4wIC0xODYuMFEyNjI0IC0xODggMjYyNSAtMTkzUTI2MjUgLTE5MyAyNjMxLjAgLTIxMS4wUTI2MzcgLTIyOSAyNjQzLjAgLTI1NC41UTI2NDkgLTI4MCAyNjQ5IC0zMDFRMjY0OSAtMzE1IDI2NDYuMCAtMzI1LjBRMjY0MyAtMzM1IDI2MzUgLTMzNkwyNjg1IC0zNDRRMjY5MSAtMzQ1IDI2OTYuMCAtMzQ1LjVRMjcwMSAtMzQ2IDI3MDUgLTM0NlEyNzE0IC0zNDYgMjcxNy41IC0zMzkuNVEyNzIxIC0zMzMgMjcyMSAtMzEzUTI3MjEgLTI4OCAyNzEyLjUgLTI0OS41UTI3MDQgLTIxMSAyNjkzIC0xODJRMjcwNCAtMjAwIDI3MjEuNSAtMjI4LjBRMjczOSAtMjU2IDI3NjIuMCAtMjg1LjBRMjc4NSAtMzE0IDI4MTAuMCAtMzMzLjVRMjgzNSAtMzUzIDI4NTkgLTM1M1EyODY0IC0zNTMgMjg3MiAtMzUxUTI5MDAgLTM0NCAyOTExLjUgLTMyMy41UTI5MjMgLTMwMyAyOTIzIC0yNzVRMjkyMyAtMjQ1IDI5MTEuNSAtMjA5LjBRMjkwMCAtMTczIDI4ODEuMCAtMTM4LjVRMjg2MiAtMTA0IDI4MzkgLTc2UTI4MTEgLTQxIDI3NzIuMCAtMjAuMFEyNzMzIDEgMjY5MiAxUTI2NTUgMSAyNjIzIC0xOEwyNTI4IDIyMVEyNTE0IDI1MSAyNTAxLjAgMjYyLjBRMjQ4OCAyNzMgMjQ2OCAyNzNaTTI2NjAgLTIwUTI2ODggLTIwIDI3MjMuMCAtNDYuMFEyNzU4IC03MiAyNzkwLjUgLTExMi41UTI4MjMgLTE1MyAyODQ1IC0xOTRRMjg2MCAtMjIyIDI4NjcuMCAtMjQ1LjVRMjg3NCAtMjY5IDI4NzQgLTI4NlEyODc0IC0zMjUgMjg0NiAtMzI1UTI4MzMgLTMyNSAyODEyLjUgLTMxMS4wUTI3OTIgLTI5NyAyNzY1IC0yNjBRMjczNiAtMjIwIDI3MDEuNSAtMTU5LjVRMjY2NyAtOTkgMjYzMSAtMzJRMjY0MyAtMjAgMjY2MCAtMjBaTTI5NjIgLTE5NlEyOTcwIC0yMTMgMjk4My4wIC0yNTAuNVEyOTk2IC0yODggMzAxMC4wIC0zMzQuMFEzMDI0IC0zODAgMzAzMSAtNDIxUTMwMzQgLTQzNyAzMDQyLjAgLTQ0NC41UTMwNTAgLTQ1MiAzMDU5IC00NTJRMzA3MiAtNDUyIDMwODMuMCAtNDM5LjVRMzA5NCAtNDI3IDMwOTQgLTQwNFEzMDk0IC0zNzYgMzA3Ny41IC0zNTYuMFEzMDYxIC0zMzYgMzAzNyAtMzE4UTMwNDcgLTMxNyAzMDU4LjAgLTMxNi41UTMwNjkgLTMxNiAzMDgyIC0zMTZRMzEyOSAtMzE2IDMxNzUgLTMyMlEzMTc3IC0zMTYgMzE3NyAtMzEzUTMxNzcgLTMwMCAzMTY5LjUgLTI4MC4wUTMxNjIgLTI2MCAzMTU0IC0yNDRRMzE1MCAtMjM1IDMxMzguMCAtMjExLjVRMzEyNiAtMTg4IDMxMTIuMCAtMTU4LjVRMzA5OCAtMTI5IDMwODguNSAtMTAwLjVRMzA3OSAtNzIgMzA3OSAtNTJRMzA3OSAtMjYgMzA5OSAtMjZRMzExOCAtMjYgMzE1Mi4wIC03MC41UTMxODYgLTExNSAzMjIwIC0xOTNRMzIzMiAtMTkzIDMyMzIgLTE4NFEzMjIxIC0xNTcgMzIwNC41IC0xMjUuMFEzMTg4IC05MyAzMTY4LjAgLTY0LjVRMzE0OCAtMzYgMzEyNS4wIC0xNy41UTMxMDIgMSAzMDc3IDFRMzA1OCAxIDMwMzkuMCAtMTQuNVEzMDIwIC0zMCAzMDIwIC02NVEzMDIwIC05NiAzMDMyLjAgLTEyNS41UTMwNDQgLTE1NSAzMDU5LjAgLTE4MS4wUTMwNzQgLTIwNyAzMDg2LjAgLTIyNy4wUTMwOTggLTI0NyAzMDk4IC0yNTlRMzA5OCAtMjc3IDMwNzUuNSAtMjg1LjBRMzA1MyAtMjkzIDMwMTcgLTI5NFEyOTk5IC0yNDggMjk5MC4wIC0yMjYuMFEyOTgxIC0yMDQgMjk3MyAtMTg0UTI5NTcgLTE4NCAyOTYyIC0xOTZaTTMyMjEgLTE5NlEzMjI5IC0yMTMgMzI0Mi4wIC0yNTAuNVEzMjU1IC0yODggMzI2OS4wIC0zMzQuMFEzMjgzIC0zODAgMzI5MCAtNDIxUTMyOTMgLTQzNyAzMzAxLjAgLTQ0NC41UTMzMDkgLTQ1MiAzMzE4IC00NTJRMzMzMSAtNDUyIDMzNDIuMCAtNDM5LjVRMzM1MyAtNDI3IDMzNTMgLTQwNFEzMzUzIC0zNzYgMzMzNi41IC0zNTYuMFEzMzIwIC0zMzYgMzI5NiAtMzE4UTMzMDYgLTMxNyAzMzE3LjAgLTMxNi41UTMzMjggLTMxNiAzMzQxIC0zMTZRMzM4OCAtMzE2IDM0MzQgLTMyMlEzNDM2IC0zMTYgMzQzNiAtMzEzUTM0MzYgLTMwMCAzNDI4LjUgLTI4MC4wUTM0MjEgLTI2MCAzNDEzIC0yNDRRMzQwOSAtMjM1IDMzOTcuMCAtMjExLjVRMzM4NSAtMTg4IDMzNzEuMCAtMTU4LjVRMzM1NyAtMTI5IDMzNDcuNSAtMTAwLjVRMzMzOCAtNzIgMzMzOCAtNTJRMzMzOCAtMjYgMzM1OCAtMjZRMzM3NyAtMjYgMzQxMS4wIC03MC41UTM0NDUgLTExNSAzNDc5IC0xOTNRMzQ5MSAtMTkzIDM0OTEgLTE4NFEzNDgwIC0xNTcgMzQ2My41IC0xMjUuMFEzNDQ3IC05MyAzNDI3LjAgLTY0LjVRMzQwNyAtMzYgMzM4NC4wIC0xNy41UTMzNjEgMSAzMzM2IDFRMzMxNyAxIDMyOTguMCAtMTQuNVEzMjc5IC0zMCAzMjc5IC02NVEzMjc5IC05NiAzMjkxLjAgLTEyNS41UTMzMDMgLTE1NSAzMzE4LjAgLTE4MS4wUTMzMzMgLTIwNyAzMzQ1LjAgLTIyNy4wUTMzNTcgLTI0NyAzMzU3IC0yNTlRMzM1NyAtMjc3IDMzMzQuNSAtMjg1LjBRMzMxMiAtMjkzIDMyNzYgLTI5NFEzMjU4IC0yNDggMzI0OS4wIC0yMjYuMFEzMjQwIC0yMDQgMzIzMiAtMTg0UTMyMTYgLTE4NCAzMjIxIC0xOTZaTTM0ODAgLTE5NlEzNDg4IC0yMTMgMzUwMS4wIC0yNTAuNVEzNTE0IC0yODggMzUyOC4wIC0zMzQuMFEzNTQyIC0zODAgMzU0OSAtNDIxUTM1NTIgLTQzNyAzNTYwLjAgLTQ0NC41UTM1NjggLTQ1MiAzNTc3IC00NTJRMzU5MCAtNDUyIDM2MDEuMCAtNDM5LjVRMzYxMiAtNDI3IDM2MTIgLTQwNFEzNjEyIC0zNzYgMzU5NS41IC0zNTYuMFEzNTc5IC0zMzYgMzU1NSAtMzE4UTM1NjUgLTMxNyAzNTc2LjAgLTMxNi41UTM1ODcgLTMxNiAzNjAwIC0zMTZRMzY0NyAtMzE2IDM2OTMgLTMyMlEzNjk1IC0zMTYgMzY5NSAtMzEzUTM2OTUgLTMwMCAzNjg3LjUgLTI4MC4wUTM2ODAgLTI2MCAzNjcyIC0yNDRRMzY2OCAtMjM1IDM2NTYuMCAtMjExLjVRMzY0NCAtMTg4IDM2MzAuMCAtMTU4LjVRMzYxNiAtMTI5IDM2MDYuNSAtMTAwLjVRMzU5NyAtNzIgMzU5NyAtNTJRMzU5NyAtMjYgMzYxNyAtMjZRMzYzNiAtMjYgMzY3MC4wIC03MC41UTM3MDQgLTExNSAzNzM4IC0xOTNRMzc1MCAtMTkzIDM3NTAgLTE4NFEzNzM5IC0xNTcgMzcyMi41IC0xMjUuMFEzNzA2IC05MyAzNjg2LjAgLTY0LjVRMzY2NiAtMzYgMzY0My4wIC0xNy41UTM2MjAgMSAzNTk1IDFRMzU3NiAxIDM1NTcuMCAtMTQuNVEzNTM4IC0zMCAzNTM4IC02NVEzNTM4IC05NiAzNTUwLjAgLTEyNS41UTM1NjIgLTE1NSAzNTc3LjAgLTE4MS4wUTM1OTIgLTIwNyAzNjA0LjAgLTIyNy4wUTM2MTYgLTI0NyAzNjE2IC0yNTlRMzYxNiAtMjc3IDM1OTMuNSAtMjg1LjBRMzU3MSAtMjkzIDM1MzUgLTI5NFEzNTE3IC0yNDggMzUwOC4wIC0yMjYuMFEzNDk5IC0yMDQgMzQ5MSAtMTg0UTM0NzUgLTE4NCAzNDgwIC0xOTZaTTM3MzkgLTE5NlEzNzQ3IC0yMTMgMzc2MC4wIC0yNTAuNVEzNzczIC0yODggMzc4Ny4wIC0zMzQuMFEzODAxIC0zODAgMzgwOCAtNDIxUTM4MTEgLTQzNyAzODE5LjAgLTQ0NC41UTM4MjcgLTQ1MiAzODM2IC00NTJRMzg0OSAtNDUyIDM4NjAuMCAtNDM5LjVRMzg3MSAtNDI3IDM4NzEgLTQwNFEzODcxIC0zNzYgMzg1NC41IC0zNTYuMFEzODM4IC0zMzYgMzgxNCAtMzE4UTM4MjQgLTMxNyAzODM1LjAgLTMxNi41UTM4NDYgLTMxNiAzODU5IC0zMTZRMzkwNiAtMzE2IDM5NTIgLTMyMlEzOTU0IC0zMTYgMzk1NCAtMzEzUTM5NTQgLTMwMCAzOTQ2LjUgLTI4MC4wUTM5MzkgLTI2MCAzOTMxIC0yNDRRMzkyNyAtMjM1IDM5MTUuMCAtMjExLjVRMzkwMyAtMTg4IDM4ODkuMCAtMTU4LjVRMzg3NSAtMTI5IDM4NjUuNSAtMTAwLjVRMzg1NiAtNzIgMzg1NiAtNTJRMzg1NiAtMjYgMzg3NiAtMjZRMzg5NSAtMjYgMzkyOS4wIC03MC41UTM5NjMgLTExNSAzOTk3IC0xOTNRNDAwOSAtMTkzIDQwMDkgLTE4NFEzOTk4IC0xNTcgMzk4MS41IC0xMjUuMFEzOTY1IC05MyAzOTQ1LjAgLTY0LjVRMzkyNSAtMzYgMzkwMi4wIC0xNy41UTM4NzkgMSAzODU0IDFRMzgzNSAxIDM4MTYuMCAtMTQuNVEzNzk3IC0zMCAzNzk3IC02NVEzNzk3IC05NiAzODA5LjAgLTEyNS41UTM4MjEgLTE1NSAzODM2LjAgLTE4MS4wUTM4NTEgLTIwNyAzODYzLjAgLTIyNy4wUTM4NzUgLTI0NyAzODc1IC0yNTlRMzg3NSAtMjc3IDM4NTIuNSAtMjg1LjBRMzgzMCAtMjkzIDM3OTQgLTI5NFEzNzc2IC0yNDggMzc2Ny4wIC0yMjYuMFEzNzU4IC0yMDQgMzc1MCAtMTg0UTM3MzQgLTE4NCAzNzM5IC0xOTZaTTM5OTggLTE5NlE0MDA2IC0yMTMgNDAxOS4wIC0yNTAuNVE0MDMyIC0yODggNDA0Ni4wIC0zMzQuMFE0MDYwIC0zODAgNDA2NyAtNDIxUTQwNzAgLTQzNyA0MDc4LjAgLTQ0NC41UTQwODYgLTQ1MiA0MDk1IC00NTJRNDEwOCAtNDUyIDQxMTkuMCAtNDM5LjVRNDEzMCAtNDI3IDQxMzAgLTQwNFE0MTMwIC0zNzYgNDExMy41IC0zNTYuMFE0MDk3IC0zMzYgNDA3MyAtMzE4UTQwODMgLTMxNyA0MDk0LjAgLTMxNi41UTQxMDUgLTMxNiA0MTE4IC0zMTZRNDE2NSAtMzE2IDQyMTEgLTMyMlE0MjEzIC0zMTYgNDIxMyAtMzEzUTQyMTMgLTMwMCA0MjA1LjUgLTI4MC4wUTQxOTggLTI2MCA0MTkwIC0yNDRRNDE4NiAtMjM1IDQxNzQuMCAtMjExLjVRNDE2MiAtMTg4IDQxNDguMCAtMTU4LjVRNDEzNCAtMTI5IDQxMjQuNSAtMTAwLjVRNDExNSAtNzIgNDExNSAtNTJRNDExNSAtMjYgNDEzNSAtMjZRNDE1NCAtMjYgNDE4OC4wIC03MC41UTQyMjIgLTExNSA0MjU2IC0xOTNRNDI2OCAtMTkzIDQyNjggLTE4NFE0MjU3IC0xNTcgNDI0MC41IC0xMjUuMFE0MjI0IC05MyA0MjA0LjAgLTY0LjVRNDE4NCAtMzYgNDE2MS4wIC0xNy41UTQxMzggMSA0MTEzIDFRNDA5NCAxIDQwNzUuMCAtMTQuNVE0MDU2IC0zMCA0MDU2IC02NVE0MDU2IC05NiA0MDY4LjAgLTEyNS41UTQwODAgLTE1NSA0MDk1LjAgLTE4MS4wUTQxMTAgLTIwNyA0MTIyLjAgLTIyNy4wUTQxMzQgLTI0NyA0MTM0IC0yNTlRNDEzNCAtMjc3IDQxMTEuNSAtMjg1LjBRNDA4OSAtMjkzIDQwNTMgLTI5NFE0MDM1IC0yNDggNDAyNi4wIC0yMjYuMFE0MDE3IC0yMDQgNDAwOSAtMTg0UTM5OTMgLTE4NCAzOTk4IC0xOTZaIi8+PC9nPjwvc3ZnPg=="},ag=`
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
.li-sub{position:absolute;left:0;right:0;top:20px;text-align:center;z-index:12;pointer-events:none;font-family:Montserrat,ui-sans-serif,system-ui,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.03em;line-height:1.14;color:#5A3E22;font-size:clamp(22px,2.4vw,34px);transform:translateY(-100%);will-change:opacity}
@media(max-width:860px){.li-sub{font-size:clamp(20px,6.4vw,28px)}}
.li-seal{width:96px;height:96px;top:262px}
.li-envelope-paper,.li-left,.li-right,.li-pocket,.li-flap-front,.li-liner,.li-flap-inside{-webkit-mask:radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 100%/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-y,radial-gradient(circle,#000 13.4px,transparent 14px) 100% 0/27px 27px repeat-y,linear-gradient(#000,#000) 50% 50%/calc(100% - 22px) calc(100% - 22px) no-repeat;mask:radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 100%/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-y,radial-gradient(circle,#000 13.4px,transparent 14px) 100% 0/27px 27px repeat-y,linear-gradient(#000,#000) 50% 50%/calc(100% - 22px) calc(100% - 22px) no-repeat}
`,og='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2048" height="1201" viewBox="0 0 2048 1201"><defs><filter id="grain" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="2.4" intercept="-1.37"/><feFuncG type="linear" slope="2.4" intercept="-1.37"/><feFuncB type="linear" slope="2.4" intercept="-1.37"/></feComponentTransfer></filter></defs><image width="2048" height="1201" filter="url(#grain)" xlink:href="__PAPER_JPEG__"/></svg>',Ka;function lg(){return Ka||(Ka=(async()=>{let n=await fetch(ss.paperColor,{mode:"cors"});if(!n.ok)throw new Error(`Paper texture failed to load (${n.status}).`);let t=await n.arrayBuffer(),e=await new Promise((r,a)=>{let o=new FileReader;o.onload=()=>r(String(o.result)),o.onerror=()=>a(o.error||new Error("Paper texture could not be read.")),o.readAsDataURL(new Blob([t],{type:"image/jpeg"}))}),i=og.replace("__PAPER_JPEG__",e),s=URL.createObjectURL(new Blob([i],{type:"image/svg+xml"}));try{let r=new Image;return r.src=s,await r.decode(),s}catch(r){throw URL.revokeObjectURL(s),r}})().catch(n=>{throw Ka=void 0,n})),Ka}var{SCROLL_EXTENSION:Al,authoredClock:cg,scrollClock:ug}=(()=>{let t=.1637489716078054,e=.245,i=e-t,s=i+.035;function r(o){if(o<=t)return o;if(o>=e+.035)return o-.035;let c=(o-t)/s;return t+i*c+.035*c*(1-c)*(1-2*c)}function a(o){if(o<=t)return o;if(o>=e)return o+.035;let c=t,l=e+.035;for(let h=0;h<32;h++){let f=(c+l)/2;r(f)<o?c=f:l=f}return(c+l)/2}return{SCROLL_EXTENSION:.035,authoredClock:r,scrollClock:a}})(),{applyRibbonWithdrawal:hg}=(()=>{let n=h=>Math.max(0,Math.min(1,h)),t=(h,f,u)=>{let d=n((u-h)/(f-h));return d*d*(3-2*d)},e=new _,i=new _,s=new _,r=new _,a=new _,o=new Ge;function c(h,f,u){let d=h.x,g=h.y,y=h.z;if(u.set(0,0,0),f<=.72)return u;let p=n((d+1.38)/4.8);if(p<=0||p>=1)return u;let m=t(-.1,.025,y),T=1-t(.18,.45,Math.abs(g+.2)),b=t(.72,.88,f),A=-1.38+4.8*t(.725,.875,f),R=.35+.65*t(d-.85,d+.85,A),E=Math.pow(Math.sin(Math.PI*p),2)*m*T*b*R;return u.set(-.055*E,-.42*E,.46*E),u}function l(h,f,u,d){d<=.72||(e.copy(f),s.copy(h).addScaledVector(e,5e-4),r.copy(h).addScaledVector(e,-5e-4),c(s,d,s),c(r,d,r),i.copy(e).addScaledVector(s.sub(r),1e3).normalize(),c(h,d,a),h.add(a),o.setFromUnitVectors(e,i),u.applyQuaternion(o).normalize(),f.copy(i))}return{applyRibbonWithdrawal:l}})(),{createRibbonStrips:dg}=(()=>{let a=b=>Math.max(0,Math.min(1,b)),o=(b,A,R)=>{let E=a((R-b)/(A-b));return E*E*(3-2*E)},c=(b,A,R)=>b+(A-b)*R,l=[0,0,1],h=[0,0,-1],f=[];function u(b,A,R,E=0,M=0,S=l){f.push({p:new _(b,A,R),roll:E,fold:M,n:new _(...S)})}function d(b,A,R,E=0,M=0){u(-1.7+b,-.2+A,R,E,M)}d(-.43,-.95,.065,-.25),d(-.37,-.74,.065,-.15),d(-.24,-.48,.18,.15,.12),d(-.08,-.15,.19,.5,.6),d(.08,-.08,.15,.55,.65),d(.38,-.09,.14,.24,.12),d(.7,-.02,.2,.4),d(.84,.18,.3,1.15),d(.79,.37,.24,2.45),d(.56,.39,.18,2),d(.32,.24,.18,1.1,.12),d(.03,.01,.16,.5,.6),d(.04,-.015,.09,.15,.3),d(.32,0,.045),u(2.8,-.2,.043),u(3.25,-.2,.043),u(3.39,-.2,.043),u(3.411,-.2,.005,0,0,[.7,0,.7]),u(3.416,-.2,-.045,0,0,[1,0,0]),u(3.408,-.2,-.105,0,0,[.6,0,-.8]),u(3.28,-.2,-.13,0,0,h),u(2.9,-.2,-.13,0,0,h),u(1.8,.55,-.13,0,0,h),u(-.7,1.65,-.13,0,0,h),u(-1.7,1.94,-.13,0,0,h),u(-1.7,2.16,-.13,0,0,h),u(-1.7,2.208,-.1,0,0,[0,.6,-.8]),u(-1.7,2.216,-.045,0,0,[0,1,0]),u(-1.7,2.211,.015,0,0,[0,.6,.8]),u(-1.7,2.19,.036),u(-1.7,1.93,.036),u(-1.7,1.2,.036),u(-1.7,-.2,.036),u(-1.7,-1.4,.036),u(-1.7,-2.1,.036),u(-1.7,-2.19,.036),u(-1.7,-2.211,.015,0,0,[0,-.6,.8]),u(-1.7,-2.216,-.045,0,0,[0,-1,0]),u(-1.7,-2.208,-.1,0,0,[0,-.6,-.8]),u(-1.7,-2.16,-.13,0,0,h),u(-1.7,-1.93,-.13,0,0,h),u(-2.65,-1.05,-.13,0,0,h),u(-3.14,-.2,-.13,0,0,h),u(-3.32,-.2,-.13,0,0,h),u(-3.408,-.2,-.105,0,0,[-.6,0,-.8]),u(-3.416,-.2,-.045,0,0,[-1,0,0]),u(-3.411,-.2,.005,0,0,[-.7,0,.7]),u(-3.39,-.2,.043),u(-3.15,-.2,.043),u(-1.7-.4,-.2,.043),u(-1.7-.12,-.2-.01,.08,.2,.2),d(-.06,-.12,.1,.05,.3),d(-.04,-.16,.18,.05,.25),d(.015,-.11,.3,.06,.25),d(.025,.09,.3,.06,.22),d(-.01,.145,.2,.05,.2),d(-.045,.11,.085,.15,.35),d(-.12,0,.1,.35,.5),d(-.38,-.09,.22,.35,.1),d(-.68,-.04,.27,.75),d(-.86,.14,.25,1.6),d(-.79,.33,.18,2.55),d(-.58,.35,.14,2.85),d(-.31,.2,.12,2.95,.1),d(-.06,.02,.11,2.55,.55),d(.05,-.15,.15,1,.55),d(.19,-.37,.15,.2,.12),d(.38,-.69,.09,-.25),d(.46,-.92,.095,-.6);function g(b=0,A=0,R=0){let E=f.map(ct=>({...ct,p:ct.p.clone(),n:ct.n.clone()}));E[4].p.z=c(E[4].p.z,.12,R);for(let ct=5;ct<=10;ct++){let Jt=[.72,1,1,1,1,.75][ct-5],at=b*Jt;E[ct].p.x=-1.7+.12+(E[ct].p.x- -1.7-.12)*(1-.34*at),E[ct].p.y=-.2+.025+(E[ct].p.y- -.2-.025)*(1-.25*at),E[ct].p.z=.11+(E[ct].p.z-.11)*(1-.2*at),E[ct].fold*=1-.35*b}for(let ct=51;ct<=57;ct++){let Jt=Math.sin((ct-50)/8*Math.PI);E[ct].p.z+=.075*A*Jt,E[ct].p.y+=.045*A*Jt*(ct<54?-1:1),E[ct].fold*=1-.7*A}for(let ct=58;ct<=64;ct++){let Jt=Math.sin((ct-57)/8*Math.PI),at=A*Jt;E[ct].p.x=-1.7-.1+(E[ct].p.x- -1.7+.1)*(1-.21*at),E[ct].p.y=-.2+.015+(E[ct].p.y- -.2-.015)*(1-.3*at),E[ct].p.z=.065+(E[ct].p.z-.065)*(1-.55*at),E[ct].roll*=1-.25*at,E[ct].fold*=1-.55*at}let M=new ws(E.map(ct=>ct.p),!1,"centripetal");M.arcLengthDivisions=6e3;let S=M.getLength(),z=[],C=[],L=[],F=[],H=[],w=new _,k=new _,Q=new Ge,O=new _;for(let ct=0;ct<=3600;ct++){let Jt=ct/3600,at=M.getUtoTmapping(Jt),Et=M.getPoint(at),yt=M.getTangent(at).normalize(),pt=at*(f.length-1),Ot=Math.min(f.length-2,Math.floor(pt)),Ut=pt-Ot,ee=E[Ot].n.clone().lerp(E[Ot+1].n,Ut).normalize(),Gt=new _().crossVectors(ee,yt);ct&&(Q.setFromUnitVectors(k,yt),O.copy(w).applyQuaternion(Q)),Gt.lengthSq()<.015&&Gt.copy(ct?O:new _(1,0,0)),Gt.normalize(),ct&&Gt.dot(O)<0&&Gt.negate(),w.copy(Gt),k.copy(yt),z.push(Et),C.push(Gt),H.push(yt),L.push(c(E[Ot].roll,E[Ot+1].roll,Ut)),F.push(c(E[Ot].fold,E[Ot+1].fold,Ut))}let tt=z[0],V=H[0].clone().negate(),G=tt.clone().addScaledVector(V,2);G.z=Math.max(tt.z,G.z);let $=new Xn(tt.clone(),G,new _(-9,-5,.2),new _(-S-64,-14,.26));$.arcLengthDivisions=4e3;let ft=M.getLengths(),_t=ft[Math.round(M.arcLengthDivisions*13/(f.length-1))],B=ft[Math.round(M.arcLengthDivisions*4/(f.length-1))],ut=ft[Math.round(M.arcLengthDivisions*51/(f.length-1))],vt=ft[Math.round(M.arcLengthDivisions*57/(f.length-1))],Dt=ft[Math.round(M.arcLengthDivisions*57/(f.length-1))],gt=ft[Math.round(M.arcLengthDivisions*65/(f.length-1))];return{length:S,points:z,sides:C,rolls:L,folds:F,tangents:H,releaseLength:_t,bightStartLength:B,collarStartLength:ut,collarEndLength:vt,leftLoopStartLength:Dt,leftLoopEndLength:gt,exitCurve:$,exitLength:$.getLength()}}let y=g(),p=y.length;class m extends fn{constructor(A){super(),this.controls=A}getPoint(A,R=new _){let E=1-A,M=this.controls;return R.set(0,0,0).addScaledVector(M[0],E*E*E*E).addScaledVector(M[1],4*E*E*E*A).addScaledVector(M[2],6*E*E*A*A).addScaledVector(M[3],4*E*A*A*A).addScaledVector(M[4],A*A*A*A)}}function T(b){let A=new hi;A.name="one-continuous-cross-wrap";let R=new ni,E=new ke(new Float32Array(1281*21*3),3),M=new ke(new Float32Array(1281*21*2),2);E.setUsage(Xa),R.setAttribute("position",E),R.setAttribute("uv",M);let S=[];for(let at=0;at<1280;at++)for(let Et=0;Et<20;Et++){let yt=at*21+Et,pt=yt+20+1;S.push(yt,pt,yt+1,yt+1,pt,pt+1)}R.setIndex(S);for(let at=0;at<=1280;at++)for(let Et=0;Et<=20;Et++)M.setXY(at*21+Et,at/1280*p,Et/20*.235);let z=new fe(R,b);z.name="single-material-ribbon",z.castShadow=!0,z.receiveShadow=!0,z.frustumCulled=!1,A.add(z);let C=new _,L=new _,F=new _,H=new _,w=new _,k=new Float64Array(21),Q=new Float64Array(21),O=-1,tt=-1,V=!1,G=y,$=0,ft=new _(-.9,-.435,0).normalize(),_t=.72,B=null,ut=0;function vt(at,Et=G){let yt=a(at/Et.length)*3600,pt=Math.min(3599,Math.floor(yt)),Ot=yt-pt;return{p:Et.points[pt].clone().lerp(Et.points[pt+1],Ot),t:Et.tangents[pt].clone().lerp(Et.tangents[pt+1],Ot).normalize(),s:Et.sides[pt].clone().lerp(Et.sides[pt+1],Ot).normalize(),roll:c(Et.rolls[pt],Et.rolls[pt+1],Ot),fold:c(Et.folds[pt],Et.folds[pt+1],Ot)}}function Dt(at,Et,yt){if(at<1e-7)return null;let pt=vt(Et),Ot=vt(G.bightStartLength),Ut=new _(-1.7-.03,-.2-.1,.11),ee=new _(-1.7-.15,-.2-.23,.12),Gt=new _(-.93,-.37,0).normalize(),ye=new _(-.45,-.89,0).normalize(),Bt=pt.p.distanceTo(Ut),Me=Ut.clone().sub(pt.p).normalize(),ne=o(-.1,.8,pt.t.dot(Me)),ae=Math.max(Math.min(.18,Bt*.28),.24*ne);yt>.535&&pt.t.z<0&&(ae=Math.min(ae,.04/-pt.t.z));let P=pt.p.clone().addScaledVector(pt.t,-ae);P.z=Math.max(.07,P.z);let ce=pt.p.clone().lerp(Ut,.42);ce.z+=(.5-.25*o(.535,.565,yt))*ne;let ie=new m([pt.p.clone(),P,ce,Ut.clone().addScaledVector(Gt,-ae),Ut.clone()]);ie.arcLengthDivisions=500;let Mt=Ut.clone().addScaledVector(Gt,.05);Mt.z=.1;let it=ee.clone().addScaledVector(ye,-.045);it.z=.1;let Xt=new Xn(Ut.clone(),Mt,it,ee.clone());Xt.arcLengthDivisions=300;let mt=Bt<.003?0:ie.getLength(),bt=Xt.getLength(),v=Math.max(.001,at-mt-bt),x=G.points[0].clone();x.z+=.14*o(.02,.28,yt);let U=pt.p.clone().sub(x),et=U.dot(ft),Z=Math.max(0,U.lengthSq()-et*et),lt=Math.max(0,et+Math.sqrt(Math.max(0,at*at-Z)))*(.82+.12*o(.5,.66,yt)),Y=x.clone().addScaledVector(ft,lt),J=Math.min(.36,v*.2),dt=ee.clone().lerp(Y,.45);function N(Yt){let de=ee.clone().addScaledVector(ye,J*Yt),Ae=Y.clone().addScaledVector(ft,-J*Yt),Ye=dt.clone();Ye.z+=Math.min(.18,v*.12)*Yt;let sn=new m([ee.clone(),de,Ye,Ae,Y.clone()]);return sn.arcLengthDivisions=180,sn}let K=Math.max(v,N(.12).getLength()),q=.12,ot=1,rt;for(;N(ot).getLength()<K&&ot<8;)ot*=1.5;for(let Yt=0;Yt<20;Yt++){let de=(q+ot)/2;rt=N(de),rt.getLength()<K?q=de:ot=de}rt=N((q+ot)/2),rt.arcLengthDivisions=800,rt.updateArcLengths();let ht=rt.getLength(),Nt=mt+bt+ht,Ht=[],nt=[],wt=[],Vt=new Ge,At=pt.t.clone(),re=pt.s.clone().applyAxisAngle(pt.t,pt.roll),he=640;for(let Yt=0;Yt<=he;Yt++){let de=Yt/he*Nt,Ae,Ye;de<mt?(Ae=ie,Ye=de/mt):de<mt+bt?(Ae=Xt,Ye=(de-mt)/bt):(Ae=rt,Ye=(de-mt-bt)/ht);let sn=Ae.getPointAt(a(Ye)),Fi=Ae.getTangentAt(a(Ye)).negate().normalize(),An=re.clone();Yt&&(Vt.setFromUnitVectors(At,Fi),An.applyQuaternion(Vt).normalize()),Ht.push(sn),nt.push(An),wt.push(Fi),re=An,At=Fi}let Qe=null,Ui=new _,rs=new _;for(let Yt=0;Yt<=he;Yt++){if(Ui.crossVectors(new _(0,0,1),wt[Yt]),Ui.lengthSq()<1e-6)continue;Ui.normalize();let de=Math.atan2(wt[Yt].dot(rs.crossVectors(nt[Yt],Ui)),nt[Yt].dot(Ui));if(Qe!==null){for(;de-Qe>Math.PI;)de-=Math.PI*2;for(;de-Qe<-Math.PI;)de+=Math.PI*2}Qe=de;let Ae=Yt/he*Nt;nt[Yt].applyAxisAngle(wt[Yt],de*o(0,Math.max(.02,mt*(.85-.25*o(.535,.565,yt))),Ae))}let en=o(0,.08,yt),nn=[];for(let Yt=0;Yt<=he;Yt++){let de=Yt/he*Nt;if(nn[Yt]=pt.fold*(1-o(0,Math.max(.02,mt*.8),de)),en<1){let Ae=vt(y.bightStartLength*(1-Yt/he),y);Ht[Yt].lerp(Ae.p,1-en),wt[Yt].lerp(Ae.t,1-en).normalize();let Ye=Ae.s.applyAxisAngle(Ae.t,Ae.roll);nt[Yt].lerp(Ye,1-en),nt[Yt].addScaledVector(wt[Yt],-nt[Yt].dot(wt[Yt])).normalize(),nn[Yt]=c(Ae.fold,nn[Yt],en)}}return{points:Ht,sides:nt,tangents:wt,folds:nn,N:he,length:at,fold:pt.fold,head:Ht[he].clone(),connectorLength:mt,throatLength:bt,drawnLength:ht/Nt*at,actualLength:Nt,throatIn:Ut.toArray(),throatOut:ee.toArray()}}function gt(at){if(at<-$){let yt=B?B.head:G.points[0];return C.copy(yt).addScaledVector(ft,-$-at),L.copy(ft).negate(),F.copy(B?B.sides[B.N]:G.sides[0]),{roll:0,fold:0}}if(B&&at<ut){let yt=ut-at,pt=a(yt/B.length)*B.N,Ot=Math.min(B.N-1,Math.floor(pt)),Ut=pt-Ot;return C.copy(B.points[Ot]).lerp(B.points[Ot+1],Ut),L.copy(B.tangents[Ot]).lerp(B.tangents[Ot+1],Ut).normalize(),F.copy(B.sides[Ot]).lerp(B.sides[Ot+1],Ut).normalize(),{roll:0,fold:c(B.folds[Ot],B.folds[Ot+1],Ut)}}let Et=vt(at);return C.copy(Et.p),L.copy(Et.t),F.copy(Et.s),{roll:Et.roll,fold:Et.fold}}function ct(at){if(at>=.08)return;let Et=21,yt=p/1280;function pt(Mt,it){let Xt=[],mt=Math.max(0,Math.floor(($+Mt)/yt)),bt=Math.min(1280,Math.ceil(($+it)/yt));function v(et,Z,st){let lt=E.getX(et),Y=E.getY(et),J=E.getZ(et),dt=E.getX(Z),N=E.getY(Z),K=E.getZ(Z),q=E.getX(st),ot=E.getY(st),rt=E.getZ(st),ht=(N-ot)*(lt-q)+(q-dt)*(Y-ot);Math.abs(ht)<1e-10||Xt.push({ax:lt,ay:Y,az:J,bx:dt,by:N,bz:K,cx:q,cy:ot,cz:rt,den:ht,x0:Math.min(lt,dt,q),x1:Math.max(lt,dt,q),y0:Math.min(Y,N,ot),y1:Math.max(Y,N,ot)})}for(let et=mt;et<bt;et++)for(let Z=0;Z<20;Z++){let st=et*Et+Z,lt=st+Et;v(st,lt,st+1),v(st+1,lt,lt+1)}let x=new Map,U=.12;for(let et of Xt)for(let Z=Math.floor(et.x0/U);Z<=Math.floor(et.x1/U);Z++)for(let st=Math.floor(et.y0/U);st<=Math.floor(et.y1/U);st++){let lt=Z+","+st,Y=x.get(lt);Y||(Y=[],x.set(lt,Y)),Y.push(et)}return x}let Ot=pt(G.leftLoopStartLength,G.leftLoopEndLength),Ut=pt(G.collarStartLength,G.collarEndLength);function ee(Mt,it,Xt){let mt=-1/0,bt=Mt.get(Math.floor(it/.12)+","+Math.floor(Xt/.12))||[];for(let v of bt){if(it<v.x0||it>v.x1||Xt<v.y0||Xt>v.y1)continue;let x=((v.by-v.cy)*(it-v.cx)+(v.cx-v.bx)*(Xt-v.cy))/v.den,U=((v.cy-v.ay)*(it-v.cx)+(v.ax-v.cx)*(Xt-v.cy))/v.den;x>=-1e-7&&U>=-1e-7&&x+U<=1.0000001&&(mt=Math.max(mt,x*v.az+U*v.bz+(1-x-U)*v.cz))}return mt}let Gt=Math.floor(.6/yt),ye=Math.ceil(($+G.bightStartLength+.15)/yt),Bt=[],Me=.05,ne=.006;for(let Mt=Gt;Mt<=ye;Mt++){let it=[];for(let x=0;x<=20;x++)it.push(new _().fromBufferAttribute(E,Mt*Et+x));let Xt=it[20/2].clone(),mt=it[20].clone().sub(it[0]),bt=new _(-mt.y,mt.x,0).normalize(),v=Math.atan2(mt.z,Math.hypot(mt.x,mt.y));Bt.push({row:Mt,points:it,centre:Xt,axis:bt,angle:v,flatten:0,drop:0})}function ae(Mt,it,Xt=!1){let mt=0,bt=1/0;for(let v=0;v<=20;v++){let x=Mt.points[v].clone().sub(Mt.centre).applyAxisAngle(Mt.axis,Mt.angle*it).add(Mt.centre);bt=Math.min(bt,x.z);let U=ee(Ot,x.x,x.y);U>-1/0&&ee(Ut,x.x,x.y)<=x.z+.002&&(mt=Math.max(mt,x.z-U+ne)),Xt&&E.setXYZ(Mt.row*Et+v,x.x,x.y,x.z)}return{required:Math.max(0,mt),available:Math.max(0,bt-Me)}}for(let Mt of Bt){let it=ae(Mt,0);if(it.required>it.available){let Xt=0,mt=1;for(let bt=0;bt<12;bt++){let v=(Xt+mt)/2,x=ae(Mt,v);x.required<=x.available?mt=v:Xt=v}Mt.flatten=Math.min(1,mt+.015)}}let P=yt/.1;for(let Mt=1;Mt<Bt.length;Mt++)Bt[Mt].flatten=Math.max(Bt[Mt].flatten,Bt[Mt-1].flatten-P);for(let Mt=Bt.length-2;Mt>=0;Mt--)Bt[Mt].flatten=Math.max(Bt[Mt].flatten,Bt[Mt+1].flatten-P);let ce=1-o(.06,.08,at);for(let Mt of Bt){let it=ae(Mt,Mt.flatten*ce,!0);Mt.drop=it.required,Mt.available=it.available}let ie=yt*.8;for(let Mt=1;Mt<Bt.length;Mt++)Bt[Mt].drop=Math.max(Bt[Mt].drop,Bt[Mt-1].drop-ie);for(let Mt=Bt.length-2;Mt>=0;Mt--)Bt[Mt].drop=Math.max(Bt[Mt].drop,Bt[Mt+1].drop-ie);for(let Mt of Bt){let it=Math.min(Mt.drop,Mt.available)*ce;if(!(it<=0))for(let Xt=0;Xt<=20;Xt++){let mt=Mt.row*Et+Xt;E.setZ(mt,E.getZ(mt)-it)}}}function Jt(at=0,Et=16){if(V)return;let yt=a(at);if(yt===O&&Et===tt)return;O=yt,tt=Et;let pt=o(.02,.46,yt),Ot=o(.48,.7,yt);G=yt===0?y:g(pt,Ot,o(0,.08,yt)),$=p-G.length,ut=c(G.bightStartLength,G.releaseLength,o(.34,.67,yt)),B=yt===0?null:Dt(Math.max(0,$+ut),ut,yt);let Ut=(p+Et)*o(_t,1,yt);for(let ee=0;ee<=1280;ee++){let Gt=ee/1280,ye=Gt*p-Ut,{roll:Bt,fold:Me}=gt(ye-$);hg(C,L,F,yt),F.applyAxisAngle(L,Bt),H.crossVectors(L,F).normalize(),k[0]=0,Q[0]=0;for(let ne=1;ne<=20;ne++){let ae=(ne-.5)/20,P=.12*Math.sin(ae*Math.PI*2+ye*.65)*(1-Me),ce=.86*Me*Math.sin(ae*Math.PI*4+.4)+P+.07*(ae-.5);k[ne]=k[ne-1]+Math.cos(ce)*.235/20,Q[ne]=Q[ne-1]+Math.sin(ce)*.235/20}for(let ne=0;ne<=20;ne++){let ae=ne/20,ce=45e-5*Math.pow(Math.abs(ae*2-1),8)*(Math.sin(ye*48+ae*5)+.4*Math.sin(ye*97));w.copy(C).addScaledVector(F,k[ne]-k[20/2]).addScaledVector(H,Q[ne]-Q[20/2]+ce),E.setXYZ(ee*21+ne,w.x,w.y,w.z)}}ct(yt),E.needsUpdate=!0,R.computeVertexNormals(),A.visible=yt<.9999,A.userData.ribbonMetrics={progress:yt,materialLength:p,width:.235,meshCount:1,freeEnds:2,pull:ut+Ut,tailDistance:p-Ut,guideLength:p,anchoredUntil:_t,bowReleased:ut>=G.releaseLength-1e-4,heldUntil:_t,bightStart:$+Math.max(ut,G.bightStartLength)+Ut,bightEnd:$+G.releaseLength+Ut,bightLength:Math.max(0,G.releaseLength-Math.max(ut,G.bightStartLength)),freeTailLength:Math.max(0,$+ut),contraction:pt,relaxation:Ot,connectorLength:B?.connectorLength||0,throatLength:B?.throatLength||0,drawnMaterialEnd:Ut+(B?.drawnLength||0),throatIn:B?.throatIn,throatOut:B?.throatOut}}return Jt(0),{group:A,update:Jt,dispose(){V||(V=!0,R.dispose(),A.clear())}}}return{createRibbonStrips:T}})(),{createRibbonContact:fg}=(()=>{function n(t,e,i,s){let a=new Ce(1536,1536),o=new Ce(1536,1536),c=new Ce(1536,1536,{depthBuffer:!1});for(let p of[a,o,c])p.texture.generateMipmaps=!1;let l=new mn,h=new Ve({uniforms:{castPass:{value:0}},vertexShader:`
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
      }`,side:Xe}),f=new Pi,u=new Ve({uniforms:{source:{value:a.texture},direction:{value:new qt(1/1536,0)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D source;uniform vec2 direction;varying vec2 vUv;void main(){vec4 c=texture2D(source,vUv)*.227027;c+=texture2D(source,vUv+direction*1.384615)*.316216;c+=texture2D(source,vUv-direction*1.384615)*.316216;c+=texture2D(source,vUv+direction*3.230769)*.070270;c+=texture2D(source,vUv-direction*3.230769)*.070270;gl_FragColor=c;}",depthTest:!1,depthWrite:!1}),d=new fe(new si(2,2),u);f.add(d);let g=[o,a].map((p,m)=>{let T=new Xi({map:p.texture,transparent:!0,depthWrite:!1,toneMapped:!1}),b=new fe(new si(6.8,4.4),T);return b.position.z=.001+m*2e-4,b.renderOrder=m,i.add(b),b});function y(p,m,T){h.uniforms.castPass.value=m,e.overrideMaterial=h,t.setRenderTarget(p),t.render(e,l),e.overrideMaterial=null,u.uniforms.source.value=p.texture,u.uniforms.direction.value.set(T/1536,0),t.setRenderTarget(c),t.render(f,l),u.uniforms.source.value=c.texture,u.uniforms.direction.value.set(0,T/1536),t.setRenderTarget(p),t.render(f,l)}return{update(){let p=t.getRenderTarget(),m=e.overrideMaterial;for(let T of g)T.visible=!1;s.visible=!1;try{y(a,0,1.5),y(o,1,5.5)}finally{e.overrideMaterial=m;for(let T of g)T.visible=!0;s.visible=!0,t.setRenderTarget(p)}},dispose(){a.dispose(),o.dispose(),c.dispose(),h.dispose(),u.dispose(),d.geometry.dispose();for(let p of g)p.geometry.dispose(),p.material.dispose(),i.remove(p)}}}return{createRibbonContact:n}})(),{createVellum:pg}=(()=>{let i=a=>Math.max(0,Math.min(1,a)),s=(a,o,c)=>{let l=i((c-a)/(o-a));return l*l*(3-2*l)};function r({bumpMap:a=null,map:o=null,inkMap:c=null}={}){let l=new si(4.08,6.28,30,54),h=l.getAttribute("position"),f=new Float32Array(h.array);h.setUsage(Xa);let u=new Ve({uniforms:{tScene:{value:null},uResolution:{value:new qt(1,1)},uHasScene:{value:0},uPaperMap:{value:o},uBump:{value:a},uInkMap:{value:c},uHasPaperMap:{value:o?1:0},uHasBump:{value:a?1:0},uHasInkMap:{value:c?1:0},uPaperColor:{value:new kt(16776437)},uPeel:{value:0}},vertexShader:`
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
    `,transparent:!1,side:Xe,depthTest:!0,depthWrite:!0}),d=new fe(l,u);d.name="vellum-sheet",d.position.z=.016,d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!1;let g=[];for(let H=0;H<h.count;H++){let w=f[H*3],k=f[H*3+1];(Math.abs(Math.abs(w)-4.08/2)<1e-4||Math.abs(Math.abs(k)-6.28/2)<1e-4)&&g.push(H)}g.sort((H,w)=>Math.atan2(f[H*3+1],f[H*3])-Math.atan2(f[w*3+1],f[w*3]));let y=new ni,p=new ke(new Float32Array(g.length*3),3);y.setAttribute("position",p);let m=new Gn({color:11970699,transparent:!0,opacity:.2,depthWrite:!1}),T=new Ss(y,m);T.frustumCulled=!1,d.add(T);let b=Math.cos(Math.PI/8),A=Math.sin(Math.PI/8),R=-A,E=b,M=4.08*.5*b+6.28*.5*A,S=-1,z=!1;function C(H=0,w=0){if(z)return;let k=i(Number.isFinite(H)?H:0);if(k===S)return;S=k,u.uniforms.uPeel.value=k;let Q=s(.015,.87,k),O=s(.49,.97,k),tt=M-(M*2+.12)*Q,V=.82+.2*s(.25,.85,k),G=2.55,$=V*G;for(let ft=0;ft<h.count;ft++){let _t=ft*3,B=f[_t],ut=f[_t+1],vt=B*b+ut*A,Dt=B*R+ut*E,gt=Math.max(0,vt-tt);if(gt===0){h.setXYZ(ft,B,ut,0);continue}let ct=Math.min(gt,$),Jt=ct/V,at=gt-ct,Et=tt+V*Math.sin(Jt)+at*Math.cos(G),yt=V*(1-Math.cos(Jt))+at*Math.sin(G);h.setXYZ(ft,b*Et+R*Dt,A*Et+E*Dt,yt)}h.needsUpdate=!0,g.forEach((ft,_t)=>p.setXYZ(_t,h.getX(ft),h.getY(ft),h.getZ(ft)+.001)),p.needsUpdate=!0,l.computeVertexNormals(),d.position.set(5.6*O,6.6*O,.016+1.15*O),d.rotation.set(-.07*O,.1*O,-.1*O),d.visible=k<.995}function L(H,w,k){z||(u.uniforms.tScene.value=H,u.uniforms.uHasScene.value=H?1:0,u.uniforms.uResolution.value.set(Math.max(1,w),Math.max(1,k)))}function F(){z||(z=!0,l.dispose(),u.dispose(),y.dispose(),m.dispose())}return C(0,0),{mesh:d,update:C,setBackground:L,dispose:F}}return{createVellum:r}})(),{createVellumMaterials:mg}=(()=>{function t(l){return()=>{l|=0,l=l+1831565813|0;let h=Math.imul(l^l>>>15,1|l);return h=h+Math.imul(h^h>>>7,61|h)^h,((h^h>>>14)>>>0)/4294967296}}function e(l,h){let f=document.createElement("canvas");return f.width=l,f.height=h,{canvas:f,context:f.getContext("2d",{alpha:!0})}}async function i(){let l=await fetch(ss.logo);if(!l.ok)throw new Error(`Le Invite logo failed to load (${l.status}).`);let h=(await l.text()).replace(/width="100%"/,'width="165.43" height="45.9"').replaceAll("currentColor","#000000"),f=URL.createObjectURL(new Blob([h],{type:"image/svg+xml"}));try{let u=new Image;return u.src=f,await u.decode(),u}finally{URL.revokeObjectURL(f)}}function s(l,h){let{canvas:f,context:u}=e(660,Math.round(205.39632153860518));return u.drawImage(l,0,0,f.width,f.height),u.globalCompositeOperation="source-in",u.fillStyle=h,u.fillRect(0,0,f.width,f.height),f}function r(l,h,f,u,d){l.drawImage(h,f,u,d,d/3.2133)}function a(){let{canvas:l,context:h}=e(800,1240),f=t(67),u=h.createImageData(800,1240);for(let d=0;d<u.data.length;d+=4){let g=f()*4;u.data[d]=250+g,u.data[d+1]=247+g,u.data[d+2]=234+g,u.data[d+3]=255}h.putImageData(u,0,0);for(let d=0;d<3800;d++){let g=f()*800,y=f()*1240;h.strokeStyle=f()>.5?"rgba(255,255,249,.16)":"rgba(206,192,158,.085)",h.lineWidth=.4+f()*.65,h.beginPath(),h.moveTo(g,y),h.quadraticCurveTo(g+4,y+1,g+1+f()*11,y+(f()-.5)*7),h.stroke()}return l}function o(l,h){let{canvas:f,context:u}=e(1200,1860);return u.scale(3,3),r(u,s(l,"#2b2a26"),70,250,260),u.textAlign="center",u.textBaseline="alphabetic",u.font=`500 21px ${h}`,u.fillStyle="#2b2a26",u.fillText("Jak kao hirur\u0161ki \u010Delik.",200,380),f}async function c(l="Arial, sans-serif"){let[,h,f]=await Promise.all([document.fonts.load(`400 24px ${l}`),i(),(async()=>{let g=new Image;return g.crossOrigin="anonymous",g.src=ss.paperBump,await g.decode(),g})()]),u=[],d=(g,y=!1)=>{let p=new dn(g);return p.colorSpace=y?gi:Te,p.wrapS=p.wrapT=ei,p.magFilter=Pe,p.minFilter=di,p.generateMipmaps=!0,p.anisotropy=8,u.push(p),p};return{paperBump:d(f,!0),vellumMap:d(a()),vellumInkMap:d(o(h,l)),dispose(){u.forEach(g=>g.dispose())}}}return{createVellumMaterials:c}})(),{createVellumOverlay:gg}=(()=>{async function n(e){await document.fonts.ready;let i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],r=[i,...i.querySelectorAll("*")],a=(d,g,y)=>{let p=getComputedStyle(d,y),m=["display","position","width","height","top","right","bottom","left","box-sizing","margin","padding","border","border-top","border-right","border-bottom","border-left","border-radius","box-shadow","background","background-size","background-repeat","background-position","opacity","mix-blend-mode","z-index","overflow","font-family","font-size","font-weight","font-style","font-kerning","line-height","letter-spacing","color","text-align","text-shadow","text-transform","text-wrap","white-space","flex-direction","justify-content","align-items","gap","max-width","min-width","transform","transform-origin"];for(let T of m)g.style.setProperty(T,p.getPropertyValue(T));return p};s.forEach((d,g)=>{let y=r[g];a(d,y);for(let p of["::before","::after"]){let m=getComputedStyle(d,p);if(m.content==="none"||m.content==="normal")continue;let T=document.createElement("span");a(d,T,p),p==="::before"?y.prepend(T):y.append(T)}}),Object.assign(i.style,{position:"absolute",left:"0px",top:"0px",transform:"none",margin:"0",boxShadow:"none",willChange:"auto"});let o=[];for(let d of document.styleSheets)try{for(let g of d.cssRules)g.type===CSSRule.FONT_FACE_RULE&&o.push(g.cssText)}catch{}let c=new XMLSerializer().serializeToString(i),l=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1860" viewBox="0 0 400 620"><foreignObject width="400" height="620"><div xmlns="http://www.w3.org/1999/xhtml"><style>${o.join(`
`)}</style>${c}</div></foreignObject></svg>`,h=new Image;h.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(l),await h.decode();let f=document.createElement("canvas");f.width=1200,f.height=1860,f.getContext("2d").drawImage(h,0,0);let u=new dn(f);return u.colorSpace=Te,u.anisotropy=8,u}async function t(e){let i=e.querySelector(".li-stage"),s=e.querySelector(".li-card"),[r,a]=await Promise.all([mg(getComputedStyle(e).fontFamily),n(s)]),o;try{o=new Ks({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(C){throw r.dispose(),a.dispose(),C}o.setPixelRatio(Math.min(devicePixelRatio,2)),o.outputColorSpace=Te,o.toneMapping=Bs,o.toneMappingExposure=1.1,o.setClearColor(0,0);let c=o.domElement;c.className="li-webgl-vellum",c.setAttribute("aria-hidden","true"),Object.assign(c.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"2"}),s.after(c);let l=new Pi,h=new Ki(-8,8,4.5,-4.5,.1,60);h.position.z=22;let f=new hi;l.add(f);let u=new Xi({map:a,toneMapped:!1}),d=new fe(new si(4,6.2),u);f.add(d);let g=new Ve({uniforms:{peel:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float peel;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*vec2(4.,6.2);float t=smoothstep(.015,.87,peel);float edge=3.09-(6.18+.12)*t;float d=dot(p,vec2(.92388,.38268))-edge;float a=exp(-d*d/.22)*.18*sin(peel*3.14159265);gl_FragColor=vec4(.22,.17,.10,a);}",transparent:!0,depthWrite:!1}),y=new fe(new si(4,6.2),g);y.position.z=.007,f.add(y);let p=pg({bumpMap:r.paperBump,map:r.vellumMap,inkMap:r.vellumInkMap});f.add(p.mesh);let m=new Ce(1,1,{depthBuffer:!0}),T=0,b=0,A=null,R=!1;function E(C,L){T=C,b=L,h.left=-C/200,h.right=C/200,h.top=L/200,h.bottom=-L/200,h.updateProjectionMatrix(),o.setSize(C,L,!1);let F=o.getDrawingBufferSize(new qt);m.setSize(F.x,F.y),p.setBackground(m.texture,F.x,F.y),A?.dispose();let H=document.createElement("canvas");H.width=C,H.height=L;let w=H.getContext("2d");w.save(),w.translate(C*.5,L*.4),w.scale(C,L);let k=w.createRadialGradient(0,0,0,0,0,.6),Q=getComputedStyle(i);k.addColorStop(0,Q.getPropertyValue("--li-stage-center").trim()||"#faf9f0"),k.addColorStop(.7,Q.getPropertyValue("--li-stage-edge").trim()||"#f5f3e8"),w.fillStyle=k,w.fillRect(-.5,-.4,1,1),w.restore(),A=new dn(H),A.colorSpace=Te}function M(C){if(R)return;(C.width!==T||C.height!==b)&&E(C.width,C.height),f.position.set(C.cardX/100,(-b*.06-C.cardY)/100,0),f.rotation.z=-C.angle*Math.PI/180,f.scale.setScalar(C.cardScale),c.style.zIndex=String(C.zIndex),p.update(C.peel,0),g.uniforms.peel.value=C.peel;let L=p.mesh.visible;c.style.visibility=L?"visible":"hidden",L&&(p.mesh.visible=!1,d.visible=!0,l.background=A,o.setRenderTarget(m),o.render(l,h),o.setRenderTarget(null),d.visible=!1,l.background=null,p.mesh.visible=!0,o.render(l,h),e.dataset.vellum="ready")}function S(C){C.preventDefault(),z(),e.dataset.vellum="unavailable"}c.addEventListener("webglcontextlost",S);function z(){R||(R=!0,c.removeEventListener("webglcontextlost",S),p.dispose(),r.dispose(),a.dispose(),A?.dispose(),d.geometry.dispose(),u.dispose(),y.geometry.dispose(),g.dispose(),m.dispose(),o.dispose(),c.remove())}return{render:M,dispose:z}}return{createVellumOverlay:t}})(),{createRibbonOverlay:Mg}=(()=>{function n(e,i){let s=new Ps,r=l=>(l.wrapS=l.wrapT=Bn,l.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),l),a=r(s.load(ss.silkNormal,i)),o=r(s.load(ss.silkRoughness,i)),c=r(s.load(ss.silkColor,i));return c.colorSpace=Te,a.repeat.set(.35,.35),o.repeat.copy(a.repeat),c.repeat.copy(a.repeat),{normal:a,rough:o,color:c,dispose(){a.dispose(),o.dispose(),c.dispose()}}}function t(e){let i=e.querySelector(".li-stage"),s=new Ks({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.outputColorSpace=Te,s.toneMapping=Fs,s.toneMappingExposure=.94,s.shadowMap.enabled=!0,s.shadowMap.type=sa,s.setClearColor(0,0);let r=s.domElement;r.className="li-ribbon-canvas",r.setAttribute("aria-hidden","true"),i.append(r);let a=new Pi,o=new hi;a.add(o);let c=new Ki(-8,8,4.5,-4.5,.1,80);c.position.set(0,0,24);let l=new Ja,h=new es(s),f=h.fromScene(l,.04);a.environment=f.texture,a.environmentIntensity=.38,a.environmentRotation.set(.1,.85,-.52),l.dispose(),h.dispose();let u=new Qn(16774633,1.36);u.position.set(-4.5,6,4.2),a.add(u),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),Object.assign(u.shadow.camera,{left:-4,right:4,top:3,bottom:-3,near:.1,far:24}),u.shadow.camera.updateProjectionMatrix(),u.shadow.bias=-1e-5,u.shadow.normalBias=.0015,u.shadow.radius=2;let d=new Qn(16054015,.17);d.position.set(4,-2,6),a.add(d);let g,y=!1,p=n(s,()=>{g&&!y&&S(g)}),m=new Cs({color:12887398,map:p.color,normalMap:p.normal,normalScale:new qt(.32,.32),roughnessMap:p.rough,roughness:.35,metalness:0,sheen:.48,sheenColor:new kt(14261885),sheenRoughness:.46,anisotropy:.88,anisotropyRotation:Math.PI/2,specularIntensity:.66,side:Xe});m.onBeforeCompile=L=>{L.vertexShader=`varying vec2 silkUV;
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
`)};let T=dg(m);T.group.position.y=0,o.add(T.group);let b=new fe(new si(6.8,4.4),new Xi({colorWrite:!1}));b.renderOrder=-1,o.add(b);let A=fg(s,a,o,b),R=0,E=0,M=-1;function S(L){if(y)return;g=L;let{width:F,height:H,scale:w,angle:k,y:Q,progress:O}=L,tt=O<1;r.style.visibility=tt?"visible":"hidden",tt&&((F!==R||H!==E)&&(R=F,E=H,s.setSize(F,H,!1),c.left=-F/200,c.right=F/200,c.top=H/200,c.bottom=-H/200,c.updateProjectionMatrix()),T.update(O,Math.max(16,F/(100*w)+4)),O!==M&&(o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.setScalar(1),A.update(),M=O),o.position.set(0,(-E*.06-Q)/100,0),o.rotation.z=-k*Math.PI/180,o.scale.setScalar(w),s.render(a,c),e.dataset.ribbon="ready")}function z(){y||(y=!0,T.dispose(),p.dispose(),m.dispose(),A.dispose(),b.geometry.dispose(),b.material.dispose(),f.dispose(),u.shadow.dispose(),s.dispose(),r.remove())}function C(L){L.preventDefault(),z(),e.dataset.ribbon="unavailable"}return r.addEventListener("webglcontextlost",C),{update:S,dispose(){r.removeEventListener("webglcontextlost",C),z()}}}return{createRibbonOverlay:t}})(),{mountEnvelope:xg}=(()=>{function n(t){let e=t.querySelector(".li-stage"),i=[...t.querySelectorAll(".li-envelope")],s=t.querySelector(".li-flap-layer"),r=t.querySelector(".li-flap"),a=t.querySelector(".li-card"),o=null,c=!1;gg(t).then(O=>{c?O.dispose():(o=O,L())}).catch(O=>{t.dataset.vellum="unavailable",console.error("Vellum could not start",O)});let l=t.querySelector(".li-table-shadow"),h=t.querySelector(".li-scroll-cue"),f=t.querySelector(".li-stage-heading p"),u=t.querySelector(".li-skip"),d=t.querySelector(".li-replay"),g=matchMedia("(prefers-reduced-motion: reduce)"),y=null;try{y=Mg(t)}catch(O){console.error("Ribbon could not start",O)}let p=t.querySelector(".li-sub"),m=()=>g.matches?0:window.innerHeight*1.3,T=0,b=0,A=0,R=0,E=1,M=(O,tt=0,V=1)=>Math.min(V,Math.max(tt,O)),S=(O,tt,V)=>{let G=M((V-O)/(tt-O));return G*G*(3-2*G)},z=(O,tt,V)=>O+(tt-O)*V;function C(){T=0;let O=g.matches?1:M(cg((window.scrollY-R)/E/.94)),tt=S(.012,.245,O),V=M((O-.19)/.81),G=S(.08,.28,V),$=S(.28,.48,V),ft=S(.48,.65,V),_t=S(.72,.91,V),B=Math.min(.88,b*(b<700?.88:.7)/680,A/820),ut=Math.min(1.04,(b-32)/400,(A-142)/620),vt=R+E*.94*(.9514+Al),Dt=R+E*(1+Al)+m(),gt=M((window.scrollY-vt)/(Dt-vt)),ct=S(0,.1,gt),Jt=S(.1,1,gt),at=Math.min(2.6,(b-40)/400),Et=Math.max(0,38-(A*.56-560*B))*G,yt=Et+(390*$+380*ft)*B,pt=0,Ot=`translate(-50%,-50%) translateY(${yt}px) rotate(${pt}deg) scale(${B})`,Ut=1-S(.48,.65,V);i.forEach(ce=>{ce.style.transform=Ot,ce.style.opacity=Ut}),y?.update({width:b,height:A,scale:B,angle:pt,y:yt,progress:tt}),r.style.transform=`rotateX(${-178*G}deg)`,p&&(p.style.opacity=String(1-S(0,.3,V)),p.style.top=`${A*.56-220*B-26}px`),s.style.zIndex=G<.505?"6":"1",s.style.filter=`drop-shadow(0 0 .7px #7d6840) drop-shadow(0 ${3+7*Math.sin(Math.PI*G)}px ${2+6*Math.sin(Math.PI*G)}px #716245${G<.6?"25":"08"})`;let ee=z(90+pt,0,ft),Gt=ee*Math.PI/180,ye=Math.abs(Math.sin(Gt))*400+Math.abs(Math.cos(Gt))*620,Bt=Math.abs(Math.cos(Gt))*400+Math.abs(Math.sin(Gt))*620,Me=Math.min(z(B,ut,ft),(A-124)/ye,(b-30)/Bt),ne=Et-145*B*$,ae=z(ne,-A*.06,ft),P=z(-Math.sin(pt*Math.PI/180)*(-145*B*$),0,ft);if(a.style.transform=`translate(-50%,-50%) translate(${P}px,${ae}px) rotate(${ee}deg) scale(${Me})`,V>=.94){let ce=z(Me,Math.max(Me,at),ct),ie=620*ce,Mt=ie<=A-40?A/2:z(20+ie/2,A-20-ie/2,Jt);a.style.left=`${(b-400)/2}px`,a.style.top=`${(A-620)/2+(Mt-A/2)}px`,a.style.transform=`scale(${ce})`}else a.style.left="50%",a.style.top="56%";a.style.zIndex=$>.85?"7":"2",o?.render({width:b,height:A,cardScale:Me,cardX:P,cardY:ae,angle:ee,peel:_t,zIndex:$>.85?7:2}),l.style.transform=`translate(-50%,-50%) translateY(${yt+20*B}px) rotate(${pt}deg) scale(${B})`,l.style.opacity=Ut*(1-.35*$),h.style.opacity=1-S(.08,.23,V),f.style.opacity=1-S(.1,.3,V),t.dataset.complete=String(V>=.94),t.dataset.progress=V.toFixed(4),t.dataset.stageProgress=O.toFixed(4),t.dataset.ribbonProgress=tt.toFixed(4),h.firstChild&&(h.firstChild.textContent=(O<.245,"Skroluj polako da otvori\u0161"))}function L(){T||(T=requestAnimationFrame(C))}function F(){b=e.clientWidth,A=e.clientHeight,R=t.getBoundingClientRect().top+window.scrollY,E=Math.max(1,(t.offsetHeight-m()-A)/(1+Al)),L()}function H(O){window.scrollTo({top:R+E*ug(O),behavior:g.matches?"instant":"smooth"})}let w=()=>H(.965),k=()=>H(0);u.addEventListener("click",w),d.addEventListener("click",k),window.addEventListener("scroll",L,{passive:!0}),window.addEventListener("resize",F,{passive:!0}),g.addEventListener("change",F);let Q=new ResizeObserver(F);return Q.observe(t),Q.observe(e),F(),()=>{c=!0,o?.dispose(),y?.dispose(),cancelAnimationFrame(T),Q.disconnect(),window.removeEventListener("scroll",L),window.removeEventListener("resize",F),g.removeEventListener("change",F),u.removeEventListener("click",w),d.removeEventListener("click",k)}}return{mountEnvelope:n}})();function Tu({id:n="the-opening",className:t="",theme:e="auto",fontFamily:i="Arial, sans-serif"}){let s=Rl(null),[r,a]=Nl(e==="dark"?"dark":"light");return $a(()=>{if(e!=="auto"){a(e);return}let o=matchMedia("(prefers-color-scheme: dark)"),c=()=>{let h=s.current?.parentElement?.closest('.dark, .light, [data-theme="dark"], [data-theme="light"]'),f=h?h.classList.contains("dark")||h.getAttribute("data-theme")==="dark"?"dark":"light":o.matches?"dark":"light";a(f)},l=new MutationObserver(c);return l.observe(document.documentElement,{attributes:!0,subtree:!0,attributeFilter:["class","data-theme"]}),o.addEventListener("change",c),c(),()=>{l.disconnect(),o.removeEventListener("change",c)}},[e]),$a(()=>{let o=s.current;if(!o)return;let c=!1,l,h=0;return o.dataset.liReady="false",(async()=>{let f=getComputedStyle(o).fontFamily,[u]=await Promise.all([lg(),document.fonts.load(`400 24px ${f}`)]);await document.fonts.ready,!c&&(o.style.setProperty("--li-paper-surface",`url("${u}")`),l=xg(o),h=requestAnimationFrame(()=>{c||(o.dataset.liReady="true")}))})().catch(f=>{c||console.error("Le Invite could not initialise",f)}),()=>{c=!0,cancelAnimationFrame(h),l?.()}},[i,r]),React.createElement("section",{ref:s,className:`li-opening ${t}`.trim(),id:n,"aria-label":"Otvori kovertu","data-li-theme":r,"data-li-ready":"false",style:{"--li-font-family":i}},React.createElement("style",null,ag),React.createElement("div",{className:"li-stage"},React.createElement("div",{className:"li-sub"},"Jak kao hirur\u0161ki \u010Delik"),React.createElement("div",{className:"li-stage-heading"},React.createElement("span",null,"Mnjauprrrrr"),React.createElement("p",null,"Malo i\u0161\u010Dekivanja.")),React.createElement("div",{className:"li-table-shadow","aria-hidden":"true"}),React.createElement("div",{className:"li-envelope li-back","aria-hidden":"true"},React.createElement("div",{className:"li-envelope-paper li-paper"}),React.createElement("div",{className:"li-liner li-paper"}),React.createElement("div",{className:"li-mouth"})),React.createElement("div",{className:"li-envelope li-flap-layer","aria-hidden":"true"},React.createElement("div",{className:"li-flap"},React.createElement("div",{className:"li-flap-face li-flap-front li-paper"}),React.createElement("div",{className:"li-flap-face li-flap-inside li-paper"}),React.createElement("svg",{className:"li-flap-edge",viewBox:"0 0 680 340","aria-hidden":"true"},React.createElement("path",{d:"M0 1 L320 326 Q333 334 340 334 Q347 334 360 326 L680 1",fill:"none",stroke:"rgba(70,48,18,.30)",strokeWidth:"7",style:{filter:"blur(3px)"},transform:"translate(0 4)"}),React.createElement("path",{d:"M0 1 L320 326 Q333 334 340 334 Q347 334 360 326 L680 1",fill:"none",stroke:"#9b835a",strokeWidth:"1.7",strokeLinejoin:"round"})),React.createElement("img",{className:"li-seal",src:"/assets/li/seal.png",alt:""}))),React.createElement("article",{className:"li-card","aria-label":"Hirur\u0161ki \u010Delik"},React.createElement("div",{className:"li-card-stock li-paper"}),React.createElement("img",{className:"li-card-photo",src:"data:image/jpeg;base64,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7XaJ7rcq6npKGnjMs1VPIGRxsA2XOcewH4qrOY/Djx5zVPT3DIo6233imj8qO5217WSuj2SGPDmua9oJJGxsbOiNrgYt4TsHssVHT5JlGXZjQUTmuprRe7iX2+It+7qnaA06+h238E8rPLkksdfCPiOWuUouWqymmhxW0RyUmJ09QwsdVOk+Wa4uae4Dmjy4we/R1O0OoK5V+Y444omxRMaxjAGtY0aDQPQAewX6WbdaERFAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBZY8S/hOj5NuEudYA+nocqLQaqklPlw3HpGg7q/Ql0ANns7tvXqtTorLZdiWa/zMs/iJ8SPBNe3FctgqKmOAdMdDlFM+RwaO245gWvc300etzforEofyh10jpwLlxXR1Euu7qe7uhaT+wwv/AN63DdrLZr9bnW++2mhudI/71PWwMmjd+1rgQqxuvhf4DvEzpavjO1RucdkUb5aQfuET2gLft43uJl+MyXH8oXkcsRFp40tdK/2dVXGSoH+xrGf71VmXeMbnXLYn0sGQU2P08nYxWOm8l37pHF0g/c4LcNN4S/DzSSB8XHFM4g7/AJavq5R/sdKQp7jXF/HGHyNlxfBrBapm+k9NQxtl/wDkmuo/7VfbxnUMr/NPBfDbzdy9ePtaotFbQ01S7zJr3kT3xCTf6Q6wZJSfqAR9SFuXhXwt8f8AD5iu5YcgyYN73atjAEJ9/Ij7iP8Absu9fm0dK80WfLztWeMgiIsKIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg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DZ5TUigfam10U9RsdMr2uka12gCOlwcNF31O/AOI/EMBoeKef/5TqT/1ivlE9qYifHuPZjjOLTUGb56/NLi+pdKy4utsdAWRFrQIvLjcQdFrj1b2erXsq6zbw7OufJtTyNxpn914+yataG18tFC2opq3Wu8kJc0Fx0N9yCe+t7JvFFNpjPMvhovmWUlVJy5y1dc2qhSzRW6CWiZS0NDNJG5jag07Halezq2Nlv8AuIsTEuMJcV8N0PFMGTVJlitk9uZeqaHyJWGTr1KxnU7pc3r2Pm9R6qwkT2piAcNccVvFXFNLh9wyqrySaGaSb42pYWaDzsMY0ucWtH06j3JPbelP0RS3VEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEUbyi25zXTUzsQyuz2SNjXCdtwsz68yHtotLaiLp137aO9+yCSIq54+v+ZVHI2Y4jl92tV1fZW0MkFXb7e6iDxPHI5wcx00vp0DR6vqrGSgiqLEOVb1feXJaG40VHDiN5kqqbGK6MO8yployGz+YSdESalfHoDbIXHvsK3VbMBFDosouT/EDVYUWU/wBmxY9DdGu6T5nmvqZYiN7109LB21677r8ZvmtTZqykxbFqOK65fc2F1HQvcRFTRA6dVVLh3ZAw/ve7TG9z2YJoi89DHWRWyniuFTHU1bY2iaeOPymyP18zms2ekE70NnX1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tinrqmWIH/RukLSPwII/BW+60202B1jZRQw24wGl+Fgb5TGxFvT0NDddI12Gta9l7EVtt7MUd/yPfDn/AODv/wDC9d/69e+x+FfgbG8mt+Q2XBPhrlbqmOrpZ/tStf5csbg5jul0xadEA6II+quJE9r+pkRvK8BxLN6yy1WT2n46WyVzLjb3efLF5FQwgtfpjh1aIHZ2x+C8mbcXYJyLXWaszPH4bpNZpzU0LpJHs8p5LSd9Lh1NJYzbXbB6R2UvRNUREUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERV3yrXVtFcuPW0dZUU4qMtpYJhDIWebGYKgljtfeaSAdHt2CQWIiKu8brq2bxMcgW+WsqJKSntFlkhp3SExxOe6u6y1voC7pbsj16Rv0CCxEVd8q11bRXLj1tHWVFOKjLaWCYQyFnmxmCoJY7X3mkgHR7dgrEQEVCcPca45lvB+O5Jf6/LKq6V1OZaioblN0i63dbhsNZUBo9B2AAUlpY7vxvy/jWNwZDdr1jeTfE00dNeKl1XPb6mGF07XRzv3I+N8ccgLXlxDg0g6JCuJq1kVd8311bbuG56q31lRSTi7WlglgkMbg11zpmuGx30Wuc0j3BI91YiiiKvG11b/ysJbb8ZP8EMSZOKbzD5fmfGOb19Pp1a7b9dL5c9T1NPwHd30lZVUkj6ihi86k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nXap8+SPzHl3lMdoajbvTW+wUV2kREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF4b1ebVjuPVl9vlfDQ26iidPUVMx02NjRsk//AFPU+y9yzR4sZKrJsh4v4eZUyQW/LL5u5GJ2nOggdHtv/wB9Lh+LG/RWTalKPmvm3lypmn4L4+tlDjLJHRR5Llj3sZUkHRdFEwh2u3qA/wDHR7D71mS+L7A4Ddr/AIjhGd2yIddRTY7LNDVtaPXoDwOo/gGOP4LQ1ut1BaLPS2q10kNJRUkTYIKeFvSyJjRprWgegAAC9SvtPwxBeKeWcT5fwv7fxiaVkkL/ACa231I6Z6OXX3Ht/wBzh2Pf3BAnSy9dKGLjH8pDj1VYmiltnIFtnjudLH2Y6piD3+aG+myWx9/Xb5D+kV3uI8lyLE/EtnXC+ZX25XVsjhfscq7lUvnkfSP7OhD3kkhnygD6slKXx+w1oNFGuQcyt3HvGF8zS6kGmtdI+foJ15r/AEZGD9XPLWj8XBUZjXIeRcOeDH+M7km5XO/5LfpjXUtBWVD36lqO9PTRhxPlxhjestAGvnAGwApJprTCLNlm4U5lz21x5LyjzflmP3OsaJm2PFZ/gYLeD3Ebi0/O5vYHtsEH5neq89JlPJfh95WsGK8kZXJmmB5JUiht9/q4+ist9SfuxzO2epp2O5J7bcNdJab6/lNabREWVERcnKJpqbBrzUU8r4po6Gd7JGHTmuEbiCCPQgoOsixbwLFzfzrw3b4bjybe8Yxy1vmpprrSTOlul5qDK6QkzvPVHHGyRjBonZaR318vZz6i5U8MDbdyFbOTMizvDhWR014s+RzfETRsedB8crj279hrp04t2HAnW/XnNTWuUWZscwXl3nHHqbP8z5VyLCLbdGCqteO4rN8Kaemd3jdNMO8jnNIdog+o9Put+ePX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+h6JGnSkVz464/vWRNv94wfHLhdWEFtfVW2GWcEeh63NJ7e3fspKiKzwP/H9yx/rts/uEan814tFPfaayT3SjiudVG+anonzNbNMxmutzGE7cBsbIHba+lPbbdS3Crr6WgpoKqsc11VPFE1r5y1oa0vcBtxDQAN70BpfOaz2movtNe57XRy3OljfDT1r4WumhY/XW1jyNtB0NgHvpFe1ERQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAReKe8WilvFLaaq60UFwqw409JJO1sswaNksYTt2gDvQ7L2oCIiAiIgIvFRXi0XKtrKO3XWiq6mieI6qGnnbI+ncd6bI0HbT2PY69CvagIiICIiAiIgIi8U94tFLeKW01V1ooLhVhxp6SSdrZZg0bJYwnbtAHeh2Qe1ERAREQEREBERAREQEXjul3tNjtzq+9XSjttI0hpqKydsMYJ9B1OIGyvWCHNDmkEHuCPdB/UReWa522nulPbai4UsVbUhzoKZ8rWyShvdxa0nbte+vRB6kRfCtrqK22+WvuNZBSUsLeuWeokEccbfq5x7AftQfdF8aWrpa+hhraGphqaadgkinheHskaRsOa4diCPcL7ICIiAi8VtvFovMc0loutFcGQSmCZ1JO2URyD1Y4tJ04bHY9+69qAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKnvFNdLnZfCRmFzs9xq7fWwx0xiqqSZ0Use6uEHpc0gjYJHb2JVwqlPFz+Zpmv8Ao6X++Qq+PcS9J5g93gpeB8Zvl+ukcMTbFSVFXXV04a0fyDC6SSRx/aSSV8v44eJP/ClhX/nym/8Ar1+cEtduvfh2xa0XehgrqCqx6jhnpqhgfHKw07AWuaexB+ihPIPH/hy4048uOY5NxpicNDRs2GNtsXXPIfuxMGu7nHsP9p0ASrxosezci8fZFdmWvH87xq7VzwXMpaC6QTyuAGyQxjiSAO57LuXC42+026W4XSupqGkiHVJUVMrYo2D6lziAFnHwz8LxWu7V/NWSYzQWG930F1rsdHCIorRRuADWhoA1I9oGzrevXRc4Lh2XHGeKHxCZhcs6qaqfAsNuLrTa7DDM6KGrqGFwfNL0kE+m/Y6e0b00hz1mmtGWTknjvJrn9m45nmNXet7/APNqC5wzyHX81jiV16K/WO43iutNvvNvq6+3lorKSnqGSS0pcCWiRgO2bAOtgb0qxv8A4Y+Fb3Zfg6XCqKx1UenU1yswNLU00g7tka9vq4Hv82wqm8JEORUvPvNNvyy5Pud4oqqioqive3pdVGE1ETZSPq5rGu+p337pkzYak3KX+UM4V/1O4/2Eq0iSACSQAPUlZu5S/wAoZwr/AKncf7CVeXn7I35lzxjXAc2VMxnHKuiddsirhVNp31EALmspWvcQB1dB2O+w4HRDSDbNw1do5V4wdevsdvI2Jm4dXR8ILvT+b1fq9PXvf4eql3qNhUM/iXwnPxj7C+ycDFP0dHnNr4xU/t8/r8zf49S4fh3yWXGuYsv4FGVsyizWanjulguPxLaiSKkd0B1O97SQegyRgDtrvoAFoEz8NaMr7hb7VbpbhdK6moaSEdUlRUytijYPq5ziAP3rhWLkbj7KLkbdjWdY3eKwAk09vuUNRJoep6WOJ0s52vHx4ofEXl1Xm1TUy8fYVXm1W6xQzOjirappc180paQT6E+x09g3oODrPyXwwcOXyxGlteJ0uNXKEddFd7IDS1NLKO7ZA5pHUQfZ2/3HRDJOzUQ8Of5yXiA/rBB/xVK0BeshsGN2/wCPyK+W20Uu9efcKllPHv8AznkBZc8Grb9HyRzRTZTWtrr3T3inpq+qaABNNG6pY9/b6lpP71auW8J8O13I1dyLyS9lznqQyOCLILh/zKjDWgFsUbiGgOILiDsbJ0Ar5TnknSf4/n2DZbUPp8WzPH73MwdT4rbcIalzR9SGOJAUhWOPEHiHBti4tn5A4pvGLY7mePzQ1dBLj1fDE+b+Va1zDEx2ndnE+m/l16Eg6sw29yZLxxj+RzMbHJc7bTVrmN9GmSJryB/5Sln0le+6XW12O0TXW9XKjttBAAZqusmbDFGCQAXPcQB3IHc+6+1JV0lfb4K6gqYaqlqI2ywzwPD2SscNtc1w7EEEEEdivFkdgtuVYhc8avEPnUFypZKSoZ7lj2lp19D32D7HSo/wrX65W7GMh4YyebqvuC17qJpd2M9G9xdDIN+rfvAfRvl/VTONF919fQWq2T3K51tPRUdOwyTVNTI2OOJg7lznOIDQPqVz6rLcVoMXiyWuyaz01lmDXRXOatjZTSB33S2Uu6Tv20e6pDxM3Csy+6YhwBYqh8dbl1a2e6SRH5qe2wO65HH6dRaSPr5bh7rxeMu30dp8GE1qt1Oyno6SroaeCFg02ONjg1rR+AAAVnj0avy65bitjulHbL1ktot1dXPbFSUtXWRxS1D3O6WtjY4gvJJ0AAe6oblL/KGcK/6ncf7CVSDjPw+YjR0luzvPKD+E2f1jorpW3e4PdIYak6eGws30sbGdBuhv5R6DQFZ+Jyy33JPF/wATWDHLzUWaur6aqpjcKY6lp4X7EzmH2d5Rk0fXetEeqvjJpemk7nydxtZby60XnkHFrfcGu6XUlXdYIpWn6FjnggqTQTwVVNHU000c0MjQ5kkbg5rgfQgjsQqnt3hh4Kt2OCznju11jSzpkqqwOlqZD7uMpPUHH1+Uj8NKvuBKar4w8UWe8D0lwqavGKeijv1niqZC91Ix5jD42k+25gP+xv1c7cyZwa0ZPf7FS5FS4/U3q3Q3arY6Smt8lSxtRO1oJc5kZPU4ANJJA7aP0XRWbs//AMpVxL/Qlw/salaRUswc6C/2KqyOqx+mvVumu9IxslTb46ljqiBrgC1z4wepoIc0gkd9j6r+1F+sdHkFHYqu82+C61rXPpaCWoY2eoDQS4xxk9TwACToHQBWfcB/ylvLP9CUH9jTKLeJi0X7IPGDxNYcbvM9mr7hSVlIbhT9paeGQObO5h9neUZNH2Ou49Vr15w1pG58ncbWW8utF55Bxa33Brul1JV3WCKVp+hY54IKk0E8FVTR1NNNHNDI0OZJG4Oa4H0II7EKp7d4YeCrdjgs547tdY0s6ZKqsDpamQ+7jKT1Bx9flI/DSr7gSmq+MPFFnvA9JcKmrxinoo79Z4qmQvdSMeYw+NpPtuYD/sb9XO3MmcGtJ3G522z22W43a4UtBRxDclRVStijYPqXOIAUetHJ/GuQXJtusXIOLXOsceltPRXWCaRx/BrXklZz5zqMXrfGvilk5pqn0/HjbM6ot8dTI6Ohmr+twJmcNDsNb2dD5N9nHdn1HAvhwz/HCy04ji01OW/JW4+9kT2H2cJID3P7dj8CmSdmo743PzSLh/SNJ/aLQdF/0bT/AOib/uCzt40qaCi8HdVR0zOiGGtooo2bJ6WtfoDZ/ALq8zeISj49basBw2OmvPIV4MFJRUL5AIqN8vS1kk7iQBsuGmkjfqdDubmyYm8rmnyfG6XJ6fG6nIbVDeqhnmQWySrjbUyt7/M2InqcPld3A9j9FA8t464vvniJxLNchvDafMbfAY7VQG4siNUxhe/YhPzSdBe87br+dsBefhzheLj1tZlOUXN2SZ/ef5S7X2f5js6Pkw7+5ENAdgN6HYANa2D8pf5QzhX/AFO4/wBhKpJzwrSKq3xIfmoZ5/RUn+8K0lVviQ/NQzz+ipP94U8e4tdLgv8ANj4+/q9Q/wBgxS+z3+xZFSS1WP3q3XWCGZ1PLLQVLJ2RyNALmOLCQHDY2D3GwohwX+bHx9/V6h/sGKrvBb/iey/+uNf/AGUCtndRourq6Sgt89fX1MNLS08bppp53hkcTGjbnOcewaACST2AC+VsulsvVpgulnuNJcaGdvVDVUkzZopBvW2vaSCNg+hUW5h/N2z7+rlx/u0ii3hd/NDwb/UXf2z1M40+oX4Ov+qHI39dq7/giWg7vebPj9pkut+u1Da6CLQkq66dsETNnQ29xAGyQPVZX8OmeYvxvw1yjlWXXNlDb6fNa4d+75nmOLpjjb6ueddgPxJ0ASPfgNhvPijv1HyvyM1kHH9HUPOO4kyQPZUPjeWGoq9dnEFrh0n17jQbvzNeU51JWm4rra57Iy8wXKjktr4hO2tZM0wujI2Hh4PSW6773pRuk5Z4sr7mLdQ8lYjU1hPSKeG8U73k/QND9kqifFfU0LM+4usmcz1dHxhVV03206mL2RPka1vkslLO4b6+nt1kd27E9oOHPDHnOOfC2DFMJulI5mvPs74/MA+vmwu6wf37UyZtXVvXK6WyzWia63e40lvoIG9ctXVzNiijG9bc9xAA7j1K+tJV0lfb4K+gqYaqlqI2zQzwPD45WOG2ua4di0gggjsQVSXPGN2rD/Ajk2L2SKSO3W20x00DZHl7ulsjB3cfUn1JU/4e/N2wH+rlu/u0amcaJHeL/Ysdo4qvIL1brVTzTNp4pa+pZAySRwJaxpeQC46OgO50V8r9lGM4rRxVeT5FabLTyv8ALjmuVXHTMe7W+kF5AJ0CdfgqD8an+JvEf640P9lOr2yjDMTzW3w0GXY5bb3SwSedFDXwNmax+iOoBw7HRI3+KZ9HH/jh4k/8KWFf+fKb/wCvXcsGW4rlcU8uL5NZ73HAQ2Z9srY6kRE70HFjjonR9fos786Y3w7gFiocbxDiDErrn2RP+EsltZbIXFrj2NRINaDGevfsSPoHEWfwNw1auFeK4cfp3sqbtVEVF1rmj/Dz61pu/wBBo+Vo/afVxVsmaan1PkePVddcqKkv1snqbXr7QhiqmOfR7BI85oO49hriOrXofouPb+UONLteW2i1ch4rXXBzuhtJTXaCSVzvoGNeST+CyhjfG38aXjg5cx++XGsjw6Ctpq2622mlMX2jKxpFPFI5uneWOqZxAPchvvoi88p8LPCmRYdUWWkwi22WpMRbTXG3RmKenk18r+oH59H2dsFLJOzaudeC73uzY/bH3K/XegtdEw6dU11QyCNp/FzyAFTHhSzi9ZP4cj/CytdU3DHbhUWaorJXFzpGwhr2ucfchkjW79T07PclV/xPhdJ4m77dOaOVmTXOyNrpaPG8cklc2lpYGEAyPa0/M4nQO+xLXEgjpDXr+mtKY/n+C5bUvp8WzPH73MwbdFbbhDUPaPqQxxICkSojkLwt8d3rHJK7AbLBhuW0LTParrZSaUxzNG2h4aQC0kAE66h6g+u+/wCHHku48qcB26/3trReqWWS23Etb0h88Wvn17FzXMcQOwJOuyWTNhq2ERFlRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFSni5/M0zX/R0v98hV1riZdiOPZ3hlbimV2/7QtFcGCopvNfF1hr2vb80bmuGnNaexHorLl0rkce1lJbvD9ilwr6mKmpKfHqSaaeZwayNjaZhc5xPYAAEkqjcXafEzzHHyHkGoeMcZqXMx62VB6Rdqpp06rlYfVjSOwP4N9pAdC3HCcYu3G7sBr7Z5uPOo2W80XnyN3A1oa1nWHB/o0DfVv8AFVb/AMj3w5/+Dv8A/C9d/wCvVliWLsZVU0jwyOoie4+jWvBKynjmSQeGTxD5jYs+ino8IzG4uvFnvzYnPggneSXwSloOj3A+oDGk9nbFu4b4b+F+P8zpMsxHDfs68UYeIKn7Rq5ujrY5jvlklc07a5w7j3+q5vIHOHF2Pch1PGvKloqKK3zwRyQ193t3n22uLhtzAelwPT2BJGt7Gxrun5CujkXiQ4Wx6wuuIz6z3iUj+QoLNUsramd5+6xscZJDie3zaHfuQqa8IdZfrlz1zVdcntc1qutdWUdZPQTO2+l819TI2I/i1rmjR7jWiAeymrM88IHHUL8pslTx9T1kTS+N1lpoZqvf6rBGC5pPp7D66C/nhcsl/rps85fyG1T2qTOLq2roqKoGpGUkfX5TiPx80gfUNDvQhXqVPrycpf5QzhX/AFO4/wBhKo34iMaxzGPFDifLOf4zBfMDraL7Eu5np/PbQTdTzFO5v0+ZvsezXe5aDpG64DiV65Dsuc3O0+ff7IySO31nnyt8hsjS146GuDHbDj94HW+y7dwt9BdrXPbbpRU9bRVDDHNTVMYkjlafVrmnsQfoU9ulxUlBxV4ZLpYG3y3YlgNVbHM6xWRNhdF0/UuB0F6+IqLgWsvV6vHD9nsDKm3SG11lfa6XoDthsha2TWnsJDe7SQS1cuo8I3h7qbsbg/j2Jry7qMUVfVRxb/zGyhoH4Aa/BWzj+OWDFMfgseNWejtVugGo6WjiEbG/U6HqT7k9z7qWmMzcX5Hb+CvEzn3G2eVMdot2T3N1+sF0qndFPOJHHqiMh7BwBa3vruxw/SbvQeYck4PgmKTZFk+SW+joo4y9v8s10k/bs2JgO3uPsAvRmWB4dyFYPsXNMeorzRB3WxlSz5o3enUx405h1220gqB4x4XuCsRv8V6s+A0rq2FwfE+tqJqtsZHcFrJXubsHuDrY+qWy805VN4MrnWXzkXmi/V9tmttRc7xT3B9HMCHwec+qlDCD32A8L+YJj+H8peLrlGDmKKnvF8tFx+EsVlukh8qKgBd0vihJ0/qaI3HsddW/0trSuPYHimK5NkGQWC1fCXLIZ2VN0n8+ST4iRvV0u6XuLWa63dmgDuuFn/CXFvJ9ZFW5riNLcK2JoYysZJJTzho9AZInNc4D2BJA2VfaamKE8VOMcDYFwXdrda8Nxehy2vYxluht9HG2qZqRrny/KOpjAxrtuPb291oriT83/Bf6vUH92jUctHhv4VseNXSxW7BaVlNdYfh62R9RM+eaPqDi3znPMjQS0EhrgDoKyLRaqCxY/Q2S1QfD0FBTx0tND1Of5cUbQ1jduJJ0ABskn6qW8Ysj2LNXMuuIvE/hnOMJEFju+sayZ47Nax/eGd/+b0gk/SFo91pVcPMMOxrPsOq8Vy61suVoq+nzqZz3x9Ra4OaQ5hDmkFoOwQpLhVHeH2KTkrlrNvEHcI3mluE5seOCQa6KCF2nSAH063Ab+jhIPdfvxufmkXD+kaT+0V641jVjw/EqDGcbt7KC1UEQhpqZjnODG+vq4kk7JJJJJJJJXhzfBMU5HxGTGMztX2napJGSvp/Pkh25p209Ubmu7H8VfbnTOHcov+jaf/RN/wBwWdeUv8oZwr/qdx/sJVo9jGxxNjYNNaA0D6AKO3XAcSvXIdlzm52nz7/ZGSR2+s8+VvkNkaWvHQ1wY7YcfvA632U8bgkizbjn+VKy7+pUf9tSrSSjdNgOJUnKdZyPT2noyasohbp6/wA+U9cALHBnll3QO8bO4bvt69ykuFUPz7cIuPvFlxLy1emvZjkAqrPXVgaS2ldLG9rHP16DUrnfsjcr+qs3wyixk5FVZXZYrSI/N+OdWx+SW/UP3o/uXtvthsuTWCpseQ2qkuduqW9M1LVxCSN4/EH3B7g+oPcKp6LwmeH2gvjbrDx3TPlY7rbFUVlTNCDv3ifIWkfgQR+Cuy9irPD3mMOf+OvlDMKOnnhoa+1wGi8+Mxulp2GGOOXpPcB7WB4/BylfKX+UM4V/1O4/2Equu2cfYfZuQrjnFrszKa+3GlioqmqZLJ0vhjDWsYI+roaAGNHytHov1dcBxK9ch2XObnafPv8AZGSR2+s8+VvkNkaWvHQ1wY7YcfvA632V9pumJIs245/lSsu/qVH/AG1KtJKN02A4lScp1nI9PaejJqyiFunr/PlPXACxwZ5Zd0DvGzuG77evcrMuFcPJ8n4dyLKqnjDM7jjNdc4o455LPdxGfvglpaJBov13009QBB7bCornThThPjrjG7cgYjXyYJk9FAZ7bUWq6SROqZx3ZE2MvOw49vkA16+gKv8AzriDjTkrofm2HW66zsb0NqnNdFO1v6oljLX6/DelFMc8LXA2LXqK7Wzj+kkq4ndcbq6pnq2sI9CGSvc3Y9jra1LIWKm8Q92v99/Js2S85TGWXmsjtk9X1M6C6R2iXFv6JPqR7E6UppfCHgtVwVV4/dKiWvzC4gVs2X1IMlW2s1sOa4nqEezos38w7k9WiLuzfBMU5GxGTGMztX2lapJGSup/Pkh25h209Ubmu7H8VIWMbHE2Ng01oDQPoAp7ccGKK4A5VvtzqrhxDyiPheQsbHlyukPa6U4101DD+kdFvUfcEO9yG8XlL/KGcK/6ncf7CVXJfeM8IyTP7Nm93snmZDZu1DcYKmanljG99LvLe0SN7n5X9Q05w1px36brgOJXrkOy5zc7T59/sjJI7fWefK3yGyNLXjoa4MdsOP3gdb7Js3TEkVW+JD81DPP6Kk/3hWkuXkmOWbLsTr8ayGj+MtdfEYKmn8x8fmMPqOphDh+0EKS5VRPgv82Pj7+r1D/YMVMeGLJLPgGX8h8NZVXQWq/U+S1FxpI6x4i+MglaxrXRF2urtG1+vUteDrsdaXsVkteNYxb8eslL8LbbdTspKWDrc/y4mNDWt6nEuOgANkkqK5/w1xlyg6KTOcRo7pPC3ojqup8E7W+vT5sbmuLd99E67nsrLOdTEH8S3KmM4xwXkeOU9yp6/Ir1bp7fR2ukeJZyJI3NklLG7LWMYXuLj2+XS6vhd/NDwb/UXf2z178U8PPDmFW640eO4TS0/wBpUslFVTyTSzTvhkaWvYJXvL2Ag6PQQpvi2L2LC8QocXxqh+BtNAwx01P5r5fLaSXa6nkuPcn1JS2ZkM5Y38NPCmO5/nGZ5pmb3Xe2WnJ62norBUjrpPiCWufPJGfleS0xtA1r5e+9DUuDarwlc07HnP4cyyr7+rhYa13/ANLIH7S0e5j+bRuHYDiWAUdypcRtP2dFcq6S41bfPlm82oeAHP3I52tho7DQ7ei92T4xYMzxOtxnJ7ZDcrVXR+XUU0uwHjexoggtIIBDgQQQCCCFb5bf4mI7lmccUxXWjwjNr7jxkvNN8TBQXUsdDVRdWgdvHQdn7oJ27R1vRVUcj+Hnw60WIV+WsbTYTU00D54L1abi+m8l4aS0sZ19DjvXytbs+g7lWjW8J8W3TAbdhl1w+juNntsZioo66SSolpmb30xzvcZWj20HdgAPQAKJW3wk+Hy1XVlfBx7BNIx3U2OrramoiH7Y3yFrh+DgVJZFqD4r/Dzlr8mbXw334q4ZBWWuqbTSSgmatbDK4xE+7nOEYaD+l2JJ3tTzw38mYnl3h5xeipLzRx3Oz2yC219BLM1k0EkEYjLnMJ30u6eoH07/AFBAuOnp4KSkipaWCOCCJgjjiiaGtY0DQaAOwAHbSqvLvDRwjnF/lvl/wSldcJndc1RRzzUhlcfVzmxPa1xPuSNn6psvZii/GFyfj2QSYngONV0V2lor/TV9zqKNwlio3APjiie9u2h7uuQ9O9jo7rTvJvI+PcVca1+ZZJNqnpm9MNO0gSVUx30RM+riR+4Ak9gVx28CcQswWmw6HCaOCzU9bHcWU8E0sTnVEYIZI+Rrw+QgOI+ZxXW5C4rwPlS10duz2xfa1NRymeCP4qaDoeR0k7ie0nt9dps4hyrLgvBrpUX2u5v5Tmp35vf2f82o3uHTZaI/cp2NP3XEa6vceh7l+77jmhm35MrJNevQ4HSpH/ke+HP/AMHf/wCF67/16nPHfEHHXFDLi3AMe+yBcjGasfFz1HmeX1dH+Fe7Wut3pre+/snlZSKm4K/PJ59/1y3/APDMtIqN2LAcSxrMr/ldktPwt3yB8clzqfPlf8Q6MEMPS5xazXU77oHr3UkUt0kZo8HNNFWcM57STAmKbMbjG8D6GCnB/wB65/hly2g4tN48PnIVbBZr/Z7hLLbZKx4iiuVNKepronOOi4nbuneyHDQ212tB4XgOJceWmutmH2n7Npa6tkuNRH58s3mTvDWufuRziNhjew0O3ovJnfFvH/Jtvio85xaivDYd+TLIHMli36hkrCHtB9wDo6C1fKW0xy+VOZML4rwasvV4vFHJXCJ3wNsjma6esl18jGsB3onW3egHcqBeHe0N4W8Jn27yTWR2R1ZUy3u4uq/l+G84sYxrh69Ra2P5db6ndOtqVYd4bOFMEv0V7x3BaRlxhd1xVNZNLVuicPRzBK9wa4exAB/FTzLcSx7OsMrsUyq3MuFormhs9M5zmdXS4OaQ5pBBDmtIIIIIU2dD1WO92jJMdo79YbhBX22siE1PVQO2yRp9x/8AU9R6LoLlY3jdkxDE6DGccoGUNqoIhDTUzCXBjR+LiSTskkkkkkkrqrKiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAvFdLRab5bn2+9WuiuVI/u6nrIGzRu/a1wIK9qIIbbuIuKrRc23G18a4lRVbHdTJ6e0U7HsP1aQzbf3KZIiaCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKG37i/Eskv014ujshFVMGh/weRXCkj+VoaNRQztY3sB6NGz3PckqZIgoPiLjLGsn4rhvF9rstq611yudOZf4VXRnyQ3CohjGm1IHZkbBvWzrZ2SSrN5GMlp4Ey11uqKinkpLBWGCZszjLGWUz+lweT1dQ0D1b3vvva4fAf+I+n/AKYvP/z1ql3OV/8AEHnH9X6/+7PWr2k6RXF+H8Pr8Hs1xqKzL/i6ihgmknZlt1aet0bSXACp0O5PtpezFKm+YnzPPxtcL7XX61VVodebXVXJ4kqqXy5mQzQSS6BlbuWJzHO+YbcCXaBXgxS582t44sgo8MwSRgtsHlPlyOqa5w8pvSS0UOgT27dXb6+6/fDzKrK6it5OyetjlyiaM2aotcMJhjsQhkJkow0uLnP6yHOkJ+ceWWgN6U/9FqVNTT0VFNWVczIaeBjpZZZDprGtGy4n2AAJVDYff8poM5s3Jl/udecd5Aqn0UdsqXnyrU0jdsc1h+4ZY2PD/Tck8YPopDzvdLpXWW08bY9Zqu9V+ST/APP6KinihlFqic01bg+RzWN6g5kPzEf4U62RpfDNqvMMx41ueJO4WyWjZU0/RTTRXO1g0srCHQysAquxY9rHD8WhJCrkVU5zxViUOHZJf4J8pir2UVVWMkjyi5sayUMc8EMFR0gA/oga9taUl4xy+ozLjChu92pxRXmDrorvRuI3S1sLjHOw6OgOtpI+rS0+hXu5BkZFxHlMsjwxjLRVuc4nQAEL9lScUfPjeoqKvhnEaurnknnmstHJJLK4ue9xgYS5xPckk7JKqCszDLcN8Ref5TUV1VccGoKi30l2tx6pDbI30cbxWwt9mNcT5rQO7XdffoVucZMfFwlh0cjS17bHRNc0+oIp2dlG8Iijm535bhmjbJG+rtrXseNhwNvjBBHuFZ9E5vFWyXCa+uoalr2PoZJYZ4X7BBjJa5rh+4ghcHiGqqq/w9YHXV1TNU1U+O2+WaeZ5e+R7qaMuc5x7kkkkk+qgYkk4hqa3ALhI84ZeIZ241WSHYt85Y5xtr3H9E93Qk+wdH36W7m3C35tfHn9Wbb/AHWNLOBx7tX5HyHyXdcLx6+VWP49YfLjvN0oOkVdXUyMEgpIHkERNbG5jnyAdW3ta3p7leiThXH4IfOsWTZvZ7mBttyiySsqXl31fHUSSRSDfqHMIXm46qI7Dy9yHhdxcIq+suoyOi6+3xdJPBDGXM/W8uWJ7HfT5PqFaSW4IHx1lN9uNZfMNzE078lx2WOOoqqZnlxV9PK0ugqms2ejrDXtczZDXxv120uLkhqsy8QB48r8gudoslFY4rsaW2Vb6Oe6SSTyROBmjIkEUQjbtrHNJMo6joAH6YTURZN4hs5y+2uElppKKixyKpZ3ZU1ED55py0+4Yahke/1mvHspdlmCYnnEVOzIrY2oqKNxfS1kEz6eqpHOHcxTRubJHvQ3pw3ob2nVHKtfFtox++0lzxzIMrtohk6pqN95qK2mqm+7Xx1LpAN/rM6XfiuxlGFWLMW0rb2bsBSlxj+z7tV0H3tb6vh5Wdf3Rrq3rvrWyq+ySmyviGgpMltub3bIcfbcKSjrbNkBZUzCOedkHXT1Ia2TraZGu6ZC8OAI2CriUv6KDsHGWNVvP2a43U12WvtltttqqKSn/hVdB5T5jV+aeoVPUeryo+xJA6e2tndz47jlsxayi1Wg1xpg90g+Nr562TZ9f5Sd736/Deh7KE4t+dPyP/Q9i/4q9WWlpBUrQYhas4585IZkVbkMkduqLfFSQ0d+rqKOFr6KN7gGQTMb3cSd63sq6lRtqrOQqbxFcotw2wY5cqc1NtMz7tdZqJzHfAR6DRHTyhw17kj96Qr25vYajiLDqrkDDsjyI0tn6am4WS63Se5U1ZShwErWmoe98UgaS5rmOA2NEEFWlkd/tuK4fdMlvEpioLZSyVlQ8DZDI2lx0Pc6HYe5UBueJ8i8gxQ2jPpMbs2N+dHPWW2yTzVs1wDHB7YXzyxxCOIuaOoNYS4DXUASuzzHj1xyrgXK7DZ4vOuFTbpPhof+/SNHW2P/ALRaG/vV/wDRH7Jg2QZ/a4cl5Pvl8pXVzBPBi9ouM1vprfE4bZHK+BzJJ5QCOtzndPVsNaAO/wA8gxDIONbPPlnHF7vlfTW9hqKzFrvcJbhDWwNG5GwSTufJDN07LdOLCQAW99iwsRyi05phVuyeyziWjroRK0fpRu9HRvHs9rttcD3BBC+Gc5XbMJ4+umSXVwMNLA4xw+rqiU9o4WD9J73FrQB6khNuj3W+vteWYbS3OhnfNbLtRtnhlje6Nz4ZWAghzSHNJa4dwQQoXPwzx5TUslTU1GUwwxNL5JJMwuzWsaBskk1WgAPddfijHK7EeDMRxm6dq632mmp6hu99MjYx1N37gHY/covkUknLWcVOA0D3fwNtEwbktXGdC4TjThbWOH6I7OmI9i2P9J2p/wCDkcQYnT3HN6vkm0VWR0eLOhNJYqCvvVbVivZv5q+RlRK/Qf6RN0Pk+cjbm9Mr5Vrq2iuXHraOsqKcVGW0sEwhkLPNjMFQSx2vvNJAOj27BWFHHHDCyKJjY42ANaxo0GgegA9gq15e/wClONv650n93qVd2izERc6/3y24zityyK8TiCgt1NJV1Eh/RYxpcdfU6HYe6yqq+Txlmc50MJwS/VVpqcdoft6pqqaUsbJWnqFDSSkesbi2V8jT6tazfqrGwnKaTNuPrTlNHE6FldAHvp3/AHqeUEtkid/OY9rmH8WlVRxjeOR7PjNbebzwxkM97yCuku1fNHcrcG/PpsMTQ+oDw2OFsUYDgD8p2ASV7eNrzeLDzVkOK33E7hjNvyRz7/Z6euqKebdQOltbG10EjwNudHMGkg7fKdaC1Yib37i/Eskv014ujshFVMGh/wAHkVwpI/laGjUUM7WN7AejRs9z3JKrXiLjLGsn4rhvF9rstq611yudOZf4VXRnyQ3CohjGm1IHZkbBvWzrZ2SSr8VacB/4j6f+mLz/APPWqTbhjucjGS08CZa63VFRTyUlgrDBM2ZxljLKZ/S4PJ6uoaB6t7333tRXF+HsLuOD2a4Vk+WyVNTQwTSv/hZdR1PdG0k6FTodyfRSrlf/ABB5x/V+v/uz1EsQ4ltk3HthmdmfIDC+3U7i2PJqtrRuJp0AH6A/BJ0LAxjEbNiFBNR2U3MxTSea/wCPudTXu6ta7OqJHuaO3oCAv1Zsi+2b9e7Z9h3mg+yqhtP8VXU3lQ1nUwP66d2z5jBvpJ7aIIXosNlix+xRWqCvuVcyIuInuVW+qmdsk/NI8lx1vQ2ew0F0llRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBw8RxW34XirLBa5qmamZU1NUH1Lmuf1T1Ek7xtoA0HSuA7egG9nufVkNlpclxG647XSTR0tzo5qKZ8BAe1kjCxxaSCAdOOtgjfsV0kQeS12+G02OitVM6R0NJAynjdIQXFrGhoJ0AN6H0XKo8Ptlv5EuGY0E9XTVVypo4K6ljc34epdH9yZzenfmtb8nUCNt0CD0t1IEQcGlxK3UvI1xzV09VUXKto4beBM5pjpoI3Od0RANBHU55c7ZOyG+gAC7yIgjNHglio7zlNYGzTU+TdDrjbpi11M54i8l72s6dgyMDA/ZIPQOwO9xWXhK31VqGPVud5pV4r2YcdnrYnU74h/3F03lfEOi126DKdjsdjsrQRXaY/LGMiibHGxrGNAa1rRoAD0AC4toxW3WbL8hyOlmqX1V9lglqmSuaWMMMLYW9AABALWgnZPf6ei7iKDiZfidiznCrhimSUYq7bXxGKVno5vuHtP6LmkBwPsQCvtjGP0eJ4PZsWt0s8tHaaGC3wSVDg6R0cUbY2l5AALiGjegBv2C6qII3l2C47mtPSi8088dXRPMtDcaKd9NV0byNF0UzCHN2PUb07WiCFG5OJaquh+CvnKuf3W2EdL6B9ZTUwlb7tfLTwRzEH0PzjY9dqyEV0eGzWa049YaWyWO3U9vt1JGIoKWmYGMjaPYAf7fxJ2o5kfHFqvuRfwiobxfMcvjomwyXKyVQhfMxu+lssb2vil1s6L2OI3oEBTFFNEBouLKd1+obvleYZLl01vmFTRw3eWBlPBMPuyiGniiY57dnpc8OLT3Gj3U+RE0cOgxW327P73l8E1S6uvFNSUtRG9zTE1tMZSwsAGwT5797J9G61333ERAXDtGK26zZfkOR0s1S+qvssEtUyVzSxhhhbC3oAAIBa0E7J7/T0XcRAREQQG5cUWmTIau/YvkGQYdca6Tzqx9iqI2w1Un/fJKeaOSEvPu8MDj7kr9Wnim0U2SUmQ5Hfb9l91oneZR1F+qGPjpH611xQRMjhY/wDn9HUPYqeIrtMeeupnVtrqaNlXUUjp4nRCppiBLCXAjrYSCA4b2NgjY9Cqwx/hKoxXHaexY/y9yBRUFP1eXCw2x3dzi5zi51ES5xcSS4kkkkklWuiaIbYcHvNmv0Nxq+UMyvcMYcHUFy+A8iTbSB1eVSxv7b2NOHcDex2XpzrBqXOrZbKae93azz2y4R3OlrLW6ISxzMY9g/wscjSNSO7Fv0UpRNFefxZ5D/4beRP9lr/+wV3b/hNFlGGUGM326XKspKaalmqJHOja+4GB7Xhs+mBpa9zGl4YG79BoHSkyJoLg5JiVtyetsdbVz1VNV2W4MuNHU0jmte14a5jmElp3G9j3sc33B7EEAjvIoC4eI4rb8LxVlgtc1TNTMqamqD6lzXP6p6iSd420AaDpXAdvQDez3PcRBzchstLkuI3XHa6SaOludHNRTPgID2skYWOLSQQDpx1sEb9ioPR8UXmgt1PQUfNHIcVPTxthijH2YelrRoDvRb7ABWUiujgYvjlfjsNTHX5nf8kMzmlr7x8NuHW+zPIhiGjvv1b9BrS+tmx37Gv17uf25ea/7VqG1Hw1dU+bDR9LAzop26HlsOuojvskldpFAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARF4b1ebVjuPVl9vlfDQ26iidPUVMx02NjRsk/8A1PU+yD3Is0UfNfNvLlTNPwXx9bKHGWSOijyXLHvYypIOi6KJhDtdvUB/46PYfesyXxfYHAbtf8RwjO7ZEOuopsdlmhq2tHr0B4HUfwDHH8Fr1qa0gigvFPLOJ8v4X9v4xNKySF/k1tvqR0z0cuvuPb/ucOx7+4IE6WbMURFQuM5VkdV+UNzTEai91stipMagqYLa6UmGKUmn29rfQE9Tu/4lWTRfSIigIiICIiAiIgIioXh3KsjvPip5psV1vdbWW21VVEygpJpS6OlDmy9QY0/d3ob19FZDV9IiKAiIgIqF8R+VZHjWT8TQWC91ttjuWXU1HWsppSwVELntBjfr1adnsrQ5JsuW5FxZeLLg2Qsx/IKmJraO5PBIhIe0u9ASOpoc3qAJb1bHcK4mpUij+DWvI7LxzZrTl17be75TUrY6y4Nb0ieQep9Bv6bIBOtnuVUvhZyrI8qxjO58kvdbdJKPLqyjpn1cpkMMLWRlsbd+jRs9vxTDV9IiKKIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICKtabEeT4/E1W5fPnsUmBy0DYYMd8s9UcoY0E+mvvBz+vfV83TrQ2rKSgiIgIiICKhcZyrI6r8obmmI1F7rZbFSY1BUwW10pMMUpNPt7W+gJ6nd/xKvpWzAREUBERAREQEREBERARcrJ55qXCLzU08ropoqGeSORp0WuEbiCPxBVX+FbIr7lfhVxy+5Ldqu63KeSrEtXVyGSR4bVStbtx9dAAfuVzjRcqIigIiICKheRcqyO2+OHibGaC91tPZ7lS1762gjlLYqgshkLS9vodEAj9imHKuI8n5PeMTn47z2LGKa315mu0T4y74yLbNAaB6tAPHQdNd19z8oVxNWUirrnm73SweGzMrzZa+eguFLbXywVVO8skicCNFpHoV7+HrlcLz4fMJu11rJqyuq7HRz1FTM7qfLI6Fpc5xPqSSTtM41U2REUBERAREQEREBERAREQEREBFHc+q6q38T5RX0M8lPVU9pq5oZozp0b2wuLXA+xBAKhHhnv16yfwq4lfchulTcrnUx1Bmq6p5kkkIqZWjqJ9dBoH7lc40WyirXh3EeT8StF6g5OzyLLKmpr3T0UsbC3yItencDWz36BtrddidqylKCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAs0eLGSqybIeL+HmVMkFvyy+buRidpzoIHR7b/APfS4fixv0Wl1nPxZWW9UNqwvmCwUT66owS7CvqaZnq+le5hlP7AYmAn2a5x9lrx7S9NBW63UFos9LarXSQ0lFSRNggp4W9LImNGmtaB6AAAL1Lh4fl+PZ3hlDlOL3GKuttbGJI5GHu0+7Hj9F7T2LT3BC7b3sjjdJI5rWNG3OcdAD6lZVl+6UMXGP5SHHqqxNFLbOQLbPHc6WPsx1TEHv8ANDfTZLY+/rt8h/SK7vK3I2f5LzbT8D8O1tParuKUV1+yGeMSfZlOekhrGn1eQ5vt/wB0YAR3c2O4/c4ucfHvDmGPO+JxDj+gko2XFneKrrZQ9p8t36Q+cnY7aiB9HDfqwGrgxf8AKPcl2S+OENXklupK20yy9viI4429TGE+pGn9v/Eu+i6Mur/yduRrXS/aePeJLPnZBGOtrrtP8VQyvHs6ncSA0nt6u0D6H0MC4ByDKsi8fecVGcWmC2ZFSY22guENO4mJ0sUtMzzI9/oPADx+DlsRZM4mvlryL8p3yrc7PVsqqT7GZTCaM7a58PwcMmj7gPjcN/gpLspWs0RFhoWWvEVn3ImIeKDjW34FUVNVUXGkqqeOzvqnx0lTUSAxRSTsB05sbnh/f2Z6j1WpVmzlRjX/AJQrhUPaCPhLidH6iGQj/wBK14dpXsd4eOSLvSm5ZH4ks9Zf5B1uNom+EoYnn2bA0gFoPb9HYHoPRevgfP8AOv4x8t4V5RrobpkeNNjqaW7xMDPj6R+ulzgBrqHXH39fn0e7STfizbjnb8qVl4HvhUZP4/y1KrLsunTq8nZ7nmWc2RcF8R3KGzXCKkFfkGRyxCU22B2ulkTD2Mjg5p/7bdEd3N8lX4eeSbRQG64b4jM9fkUY8xjb7V/F0M7x+i6E7DWk9t/Nr6FV4cPuNb+UOz6wT8i5FhdXe6GnuFsmtUjI/tGNsbA5nzg9RYWv0B+o/wCit/8AiIzD/wCERyT/APJ4P/Vq9I7XBfKdfyXhdwhyS2stWW2Ctfar3QR/cZOw662dz8rtH3Oi1w2QATX/AAV+eTz7/rlv/wCGZT/iLhq38X3vKL5T5jeslrcjmikram6SMe7zIjINgtA77kcDv06QO2lmimxbkfPfGNzDg2HXoWDH7lW0xyO7Rj+Xjp2scGwxHf3pOt4P4N7kDYdJl3C/FuZpynlfLOeVPEnA9d8PHTO6MhzWP5obczejHTuH35TogEH2PSRovbOOQMztvh68PBulVWXXIKmla2jojdKt9RU3Crfvp65HEnuQ5x12DWkNHYBU7hAm8I/Mf8X98qZKjjLLKrzrVfKkNDqGsLWsMdQ9oA7hrQToDQa4aAeBJvGXBPTcZ4flZp5Km22DKaOuuEbBvUPzDqP4bIb+14VybJ8H8s3CnMue2uPJeUeb8sx+51jRM2x4rP8AAwW8HuI3Fp+dzewPbYIPzO9V56TKeS/D7ytYMV5IyuTNMDySpFDb7/Vx9FZb6k/djmds9TTsdyT224a6S06St9wobtaKW6Wyqiq6KqibPBUQu6mSscNtc0+4IIKzd4yqmG8YfhPHVucJsjveSUz6KnZ3exrA9rpfwAMjRv8AE/QqS7cpZj0+Kv8A638K/wBdqT/jYrK59ulysnhnzS7We4VNvr6a2vkgqqWV0UsTgR8zXNIIP4hVr4q/+t/Cv9dqT/jYp/4kPzUM8/oqT/eEnxf12+G7hXXXw8YPc7pWT1tbVWKjmnqaiQySSvdC0uc5x7kkkkkqoPCFUU9JgvJdVVTxwQQ5pXySSyuDWsaI4iXOJ7AAdySrW4L/ADY+Pv6vUP8AYMWQOHONs75frc4wqS/TWLjSPKauqu0tCQ2quNQS0Cna47AY1rGOOxrbhsOOulJ2n4uirznNPEXncmM8UXe4Y1x5a6gNu2Y0hMNRcHtO/Io3erR6bf8ATue2mvm3NPJ1Tw/x/Y7HilDNe8svdQy02GjrJnzull+Vpkle93U8N6m7Jdsuc3ZA2RXnCd+ufBXJR8OOeys+zJ5JKnEL2WBjKyN7y50Dj6CTqcTo9+olvcOj36vEbURYx4lOE8+vR6Meo7jUUNVUv7R0skoYGPcfQD7zt/SM/RXOcPj3Ufh55PvVC265v4jM6iv8o8x8VgqjSUVO8/otjboOA9N6bv6BfrA885E4351ouFeX7xFkUF4hfNjmUNiET6no2XQztHbq0PXudloJd1gjRIIc0OaQQe4I91mbnephyTxgcJYdZnCe72y5SXitEfc01MDG/wCb6dQhf6/QfUKS7xSzGmkRFhoWWvETnvImJeKDjW24DU1NRUXKlqqeO0PqXx0dTPIDFFJOwHTmxueJO/6nqPValWbOVGNf+UK4VDgCPhLie/1EMhC14dpXrl8O3JN1ozc7z4lM8jyJ7esvts3w9BHIe+m0zXAFoPb1bsew9FXuK8o+IXLMtrPDu2uoaHL7TVTC65oYGvEVvZ0BsjItAOleXtAdobDm9gep42Us2cYMZ/8AxFeZ39I6hQW4A/tgh3/uCsu9pY/l84A5XsFiqL/gviFzuvyWmjM8dJear4ijrHtG/L8pxLWb9BsOA/8ASrJ4F5Pk5c4MtWX1lNHTXIl9LXwxAhjZ4zpxbv0Dh0uA9urWzrastZl8G1PJV+GzJ6OGTyny5FcImP8A1CYogD+7abs5Xqvnb7xyR4lsuvU2I5vXYLxpaKx1vhrrSOmvvEzNdb2yb3HGNggj2IBDjvp/WV4LzBwdYKjP8D5SyPN7Za2GpumOZZP8W6enb3kdFN6sc1u3aAHoTs/ddX3he46vOR8W3GyU3MWaYpdrFdJ6O42C3zRMZSv6uzulzSQHEO7+nU130V0XDgHI6q0VVNcfEPyMaOWF8c4fUwNaYy0h2z0dhrfdW5LiOfy/zrcIOAMNyTjSpgpK3N66mt9FcK5gLLeJQS97wdt62EdJB2AQ499d/o3w3Zc+nFXUeJHlE3jW3Tx3Dopev8Kfeg3f6PUpTQ+HvBG+HOh4Zvwq73ZKJ8kkFRUvDKiOR0skgexzAOlzTI4DQ9Ng7BIUPbwFy1iMGuMfENkMMEI1T23Jadlxi0PRnW77jfb5WfsUlnwWpicGQYHxNLLyVmjMhqbZHPU1V4NK2nHw7OpwJY33EbQSe53vufVUjilByv4k6OTO7hyBfOPcGnmeyzWjHn+RW1MTXFvnTTjuNkEa7g6OgBou9thznMebPCTyfjt6tdPBmNojr7FUst+zDVzMiOvLGzouO262RvuNA6EZ8PfHlyzrw9Y/drDz3ndujhiNJPbKKeER0MrCQ6IAsJaNaIBP3XNPurJm0dnKIOVPDQynzaPPr3yFx+yeOG826/O8+uoo3uDRPFMe7tEgdPYdwCDvqbbfLXL9l4x4Ql5AawXMVDY2WqnjOhWTSt3EAf1dbcffpadd9BQfIPDfdchxypsmR8+8g1lsqw2KenqKiAMlBcNNPyd9nQ17+iivigxg4T4d+NHU5qrlZsKvVtFY6QBz308UZiEj9aGyQ1v7XpxbDp1rNwtzNnttjyXlHm/LMeudW0TNseKT/AwUAPcRuLT87m9ge3Yg/M71Ux4zxbmvB+QqmwZNmEGa4Q+lMtLdrifLuNNNvQicBvzRre3OP4gjXSbZt9wobtaaW6Wyqiq6KqibPBUQu6mSscNtc0+4IIK/fxdJ9ofAfFQ/FGPzvh+seZ0b11dPr077b9NrPtVxQ9vyTIZPyj92xZ98uLrHHiDaplsNQ80zZfOiHmCPfSHaJG9b7lX8s3Wz/Kl3n+pLf7eFaRTyIIiLKs98rcjZ/kvNtPwPw7W09qu4pRXX7IZ4xJ9mU56SGsafV5Dm+3/dGAEd3N/H/J25GtdL9p494ks+dkEY62uu0/xVDK8ezqdxIDSe3q7QPofQ8rAauDF/yj3JdkvjhDV5JbqSttMsvb4iOONvUxhPqRp/b/xLvotOLdudJOWO+AcgyrIvH3nFRnFpgtmRUmNtoLhDTuJidLFLTM8yPf6DwA8fg5WJypyNnmRc00/BPD1XT229fCiuvuQzxiUWqnOtBjT2MhDm+36bNa2XNhnE18teRflO+VbnZ6tlVSfYzKYTRnbXPh+Dhk0fcB8bhv8ABdjAqmHFvyjvJVlvrhDVZLbqSttMsvb4iOONoexhPqRp/b/xLvore9R0ZvDlyLRURuFg8SnIP8IGDrbJcqkz0Ujx7OpySA0n8Xa36H0Ml4I5Xv8Amj8gwbkGhgoM7xWdtNcmU41FVMO+iojH0druB27tI0HAC5VmXiiphyv8oJytmFicJrLRW2ms8tVH3ZNUgRA6PoekwSN7ewH1Cm7Lq9NNIiLCixxQZRzVlXi35Q4vwrK6i30klXBK+71z3VTLJSxtcHtpoXHpEkjpWAa19wntrqbsdZs4LY0+M3nx5aOoVdAAfoC2Xf8AuC14/Ur+3nw+cq2WzzXvBvEPnlXkkDDNFTXqr+Io6p4G/LMbj0sB9BsOA+isPgHlGflzhGgym4UrKW7RSyUNygjBDG1EeuotB7gOBa7Xt1a762rPWbfBd/inzYewzWvAH0/kadN2cnVfTIss5F5o5svvGfGOSuxHGMZc2C/ZJBGH1U1Sd/8AN6fZHTotcC4aILSd60Hfy8cJ8u4La5Ml4v5vzC+3ejaZ3WXK6n46muAHcxDevLc7uAfXZA6m/eFbcQYDd7pzry1h7uVsrw69Ut+mrzb7XLGxtZTyvcW1GntJPZzNkegez6q7P4iMv/8AhEck/wDyeD/1a1eOE7dnDeS6Hlnww1eZUdMaSaa3VUNZRk7NNUMjc2Rn7N9x79LhvR7KFeFC92jG/ApYb7frjT2+20fx0tRVVD+lkbRVy9yf/Rr1J0ApVg/FNp4h4EyqxWfILje4LgKu6Oq697Xvc+Sna06c0AEHyw7fuSVl3gfhXNudOALZasuyeosXHtr+JbaKO3Bvm11U6V7nTzb2HMY9zmgHW+kgdPdxSTL+HK7MdvfIHiPzqG/2i5XvC+KLZOTTy0c76OuyGRp0T1tIcyD1HY/h3d/g5NzfyllOP5LjnE/F1PTz51kocYJ6v54rdTN31VDwd9RHS8jYI+RxIPZruH4d8/u9huc3h45JjiosrxqERWyZo6YrpQMbqN8R7bLWAfiWjZG2v1zssqYcT/KY4ne784Q26/42+1UFVL2Y2pEjz5ez7nbR+2Vo90+nx0meG/kCaj+OrfEvyL9vkdRngqSyja/8Kbq0W79uob/BdHhzkzNoOUrvwhy8+lqMrtlOK2gvFKwMju1JsDrLQAA8bHoBvTu22km+FmW41MOV/lQLELE4TtxXG5mXeaPu2N0nmhsTj6bBnjOvxP0Kku9r09PKX+UM4V/1O4/2Eq6fiUyTIbBlPEcNivlxtsdwy+lpaxlHUPiFTEXtBjkDSOpp2dg9lzOUv8oZwr/qdx/sJU8Vf/W/hX+u1J/xsVncS/U/8SH5qGef0VJ/vC8OAZtjPHngvwrKstucVvttLjlD1Pf3dI4wN0xjfVzz7NH/ANVe7xIfmoZ5/RUn+8LNGIeHbkDnXw92i9Z5lj7XHRWWGmw+z0wHw8bGRtDJ6kd9mUNGyPm0QfQBikks5L2uXjdvJ3MucU/KeU3C84fhMHzWHF6OqfTy17N7FRWFhBc06BDD2P8Am7Mn05U5GzzIuaafgnh6rp7bevhRXX3IZ4xKLVTnWgxp7GQhzfb9NmtbLm9ngDl6tzuzV2GZtTfZnIONO+Fu9BIAwzBvyioYB2LXdt9PYEgj5XN3C8CqYcW/KO8lWW+uENVktupK20yy9viI442h7GE+pGn9v/Eu+ifaOjN4cuRaKiNwsHiU5B/hAwdbZLlUmeikePZ1OSQGk/i7W/Q+hkvBHK9/zR+QYNyDQwUGd4rO2muTKcaiqmHfRURj6O13A7d2kaDgBcqzLxRUw5X+UE5WzCxOE1lorbTWeWqj7smqQIgdH0PSYJG9vYD6hN2XV6aaREWFCQBsrLFuv3KPiby+8zYXmtXgfGdpq3UMVwtrf+fXaVuupzX7BY3RBBBAAc0EOO+nT9fTGttVTRiQxmaJ8QePVvUCN/8ApWb/AAaXqktnF104nu3RQ5XjNzqY623ynpkcxz9iVoP3m7JbsfRvs4b149WpXureIuYuNqF+S8a8w5LllTSNMs2O5dN8ZFcGgbdGyTYMTzo616nQJA2ng9zi+8g8aZdkN8ulxrTJk9T8KyuqXVDqWB0UL2wtLj2a3qOgND17K88oyex4biNfk2SXCKgtlDEZZppTrsPYD3cT2DR3JIAWZfA86S8+HnNHxBlLJW5DVFoj7NiL6aDWvwG//Qru+N0+vfSZFyb4lc4vcOCZlU4NxrZat1B9rW5n/PrvO3RcY37BjYAQQQR2c3YcSQ305DxPzRxZZZsx4y5jyfK5bew1FTj2Vymtjro2jb2xuJ212gdAAE+zgfX7+Cq40sPAdbhNQ0U1+x271NNc6J/aSNznlzXEfT7zd/WN30Wgr9fLXjWMV+QXqrZS2+ggfU1EzzoMY0bP7/oPcpblxJNRDj/lrHM74Hp+UWP+BtwpJaiujkPUaR0IPnNJ9w3pcQfcaOu6pPE4OYPE1HPm82fXjjrAZJ5IrPbrE7yq2sjY4tMskwOx3BHuNggNAHU7kcI4rfrn+TgzinpKOWOfIBday20oB6nRuiDGsaP5zonAfXf4q3/CzkVoyHwo4l9lTRufb6X7Pq4mn5opozpwcPYkaf8AseD7peNw7VpyTh/LvC3F9+vdk5EvPIGJyUE9NdbRkj/Oq6aKRhZ8RDP6no6gS3QGgfX1bYnhJ/M2wr/RVP8Ae5lIfEFfLXYPC/ndTdatlPHUWSqoYeo93zTROijYB7kueP3bPso94SfzNsK/0VT/AHuZLd8T65fhUyTIckxbPZshvlxuslLl9ZS0766ofMYYmsjLY2FxPS0bOgO3dQfkPN+W6fx41WA8d3aXzLtj0UFPHXTPfQ2xxe2SStMPdpe1kb2jt3LwO/oZL4Ov+qHI39dq7/giX5tzGu/Km3cuaCW4U0tP0PnRD/cSr9p8eqr8OPIjqN9wpPEvyF/CEDrbLJUEUTn+ujTB2gzfts6+hUh8OnJuTZ1jN/xvPYoW5hidxdarnJA0NZUaJDJQAAASWPB12PTsaB0LoWbfD328VfiEA9PtehOv/upTdl1eqluacccv53yDXNfy5UYlhkYYKKjxuHyq6f5R1ulnPdhDuoDpJBGuwPrWnI2J8qeHnFTyfh/LuU5barZNEbrYsqqfjBPC97WEsefunbm+gBAJO+xB7Ntu3I3O3Ned2W18g1+D4niFwNpEFmij+MrZ2lzXyPleCWN2x2gBogjtsEmM+IniW44n4a8mvdx5w5AusUccTW26618b6eqc6ZgDHNDAXeu9A+2/QFWd5UrV1ju1Lf8AGLbfaLq+GuFLFVw9Xr0SMD27/cQveodxJ+b/AIL/AFeoP7tGpiubQiKF5/gNbnH2d8HyBlmKfB+Z1fwfqmQfE9fRrzOpjt9PQda1rqcgmiKl/wCIO9//AAgOWP8AzpD/AOpXaxPiK6YvmFHfanmDkK/xU/X1W2718UtNN1Mcz52tjBOurqHf1aFcn6izkRFFEREBERAREQEREBERAREQEREBERAREQEREBfiWKKeB8E8bJYpGlj43tDmuBGiCD6gr9ogz5cvC5FZskqr9wxyPfeN56t/mVFDRt+JoJHfXyHOaB+wkgewA7LyVXhv5HzBnwPKfiFyK+WZ3aa12uijtzJ2/qvc1xDgfoWlaORa9qmRwcOwzGcBxCmxjEbRBbLZTD5IYh3c4+r3uPdzj7uJJKi3LPC+K8t26iddJq21Xu2P822Xy2yeVVUb9g9ne7dgHR+mwQe6sdFNvas8ngTmO50v2Jk3iZyCssBHlywUNqipKqaP0LTUB5d3HYk9W/cKR8deHrHuMOaKzM8WrmU1rmskdniszabvGWvje6Z05eS9ziwk7aO7vXsrjRX2qYIiLKirbKeJ/wCEviGwrlH7f+F/gzDUxfZ3wvX8V5zHM35nWOjXVv7rt69lZKKy4Cra3cT/AGf4pbvzJ9v+Z9o2Rtn+yvhdeXp8TvM83r7/AOC109A+969u9koporvlbhrFOWrXRi8PrLbd7a/zbbe7bL5VVRP2DtrvcbA2D9NjR7qvv4jOcail+yK/xQ3x9n10EU9miiq3M+nxAk6wf52z+xaFRWeViYi3HnH9g4ywKmxLG/i3UcLnyulrJjNLNI89T5HuPbZPfsAPwUfwXif+BXMufZ79v/Hfwtmp5fgvhfK+E8oPGuvrPmb6/wBVute6slE1cRfkLAcd5M48uGHZPS+dRVjNB7deZBIPuSxn2c09x+8HYJC5GC8c11j4WbxznmRQ5vSNgdRefU0Pw5lpSNNikb5j+otGwHbB10+42Z+ib8MZ1pvDhnmGOmoOIueL5i9ge9z47PX0Edyjpuo7IidI4dI2T21v3JJ7qV8bcA2rC81mz3KMmuub5rKwxC93bt8Owggtgi2RGCCR6nQJA0CQbfRX2qYrblXif+M28YVXfb/2X/Bm9w3no+F8/wCK8twPl7629G9fe+b9ikHJGHfxg8T37CvtH7O+1qR1L8X5PneVvXzdHU3q9PTYUpRTaqP4LjH8CuMcfxD47477Ht0FB8V5Xled5UYZ19Gz071vWzr6lRbhzif+Kaz5HQ/b/wBsfbV7nvPX8L8P5PmtYPL11u6tdH3u29+gVkomivuYeJLFzDx+7H7pO+groJBUW27Qs6pqCcej29xsH0LdjY9wQCPXNx3Bk3DEeAcn1sGXddO2CrrvhjSGoc0/LKGh7iyQaB6g77wJGgdKbIm0xnSj8PfLWNUQsWDeJK+23HmDy4KO4WqKump4/ZjJnPB0B2AaGgeynnFPCGOcXVVwvYuNxyLKrp/0jkN2k8ypnGwekfqM2AddydDZOhqz0S+VqYIiKKKtsp4n/hL4hsK5R+3/AIX+DMNTF9nfC9fxXnMczfmdY6NdW/uu3r2VkorLgKtsY4n/AIN+InNOU/t/4n+E0FNB9nfC9Hw3kxsZvzOs9e+jf3W637qyUU0FW3CfE/8AE7gNfjX2/wDbXxd0muXxHwvw3R5jWDo6et+9dHrvvv0VkomimeQfD3bsnz08g4Tlt2wLMXt8ue6WodcdW3toTwkgP9B7jeu+9DUen8Ouf5g1lv5a57vuTWEOBltFuoI7WypAOw2V0bj1t9NjW/oQe60Oi17VMVzyTw/a+Qscs1vgyPIMZrLG/wAy119mrHRvgd0BnzA/f+Ua2T1dzpw2dwT+JbnuSA2yo8UV0NsI6SYsegZUlv0Ewf1A/wA7e1oFFJ5WGIbxjxljXE+CMxfGW1D43Suqamrq3+ZPVzu11SyO0AXEADsANAKu8l8N5jzuuzTiTkG78c3e4uMlfDRRCpoqt+yet1O5zR1Ek+5HfYAJO72RPamKDoPDvk19yO3XbmDmS+5tDbqhlXTWqnpm2yk85h2172ROPWQe4I6T+Otg3fd7RbL/AGGssl6oYa631kToKimmb1MlY4aLSF7US21cZ2pfDhnWGSS0PEPPF8xawPe57LPX0EdzjpuokkROkcOkbJ7a39ST3Uu404IoMHzKpzvJcqu2a5nUw/DuvV0PT5MXuyGIEiMH9p0Ow0Cd22ivtUxW1NxP8N4pqzmT7f6vibILN9lfC66dPY/zPN6+/wBzXT0e/qrJRFm3VEREFccs8L4ry3bqJ10mrbVe7Y/zbZfLbJ5VVRv2D2d7t2AdH6bBB7qAHgTmO50v2Jk3iZyCssBHlywUNqipKqaP0LTUB5d3HYk9W/cLQyKzysTFOcdeHrHuMOaKzM8WrmU1rmskdniszabvGWvje6Z05eS9ziwk7aO7vXsu/wAr8NYry1bKL7WlrbZeba/zbZe7bJ5VVRP2DtrvcbAOj9Ngg91YiJt3TGdp+A+aLrRGx3/xOX6osTh5ckVJaIqaqlj9C01AkLu47Ene/cd1cHHvHeK8X4NT4ph9v+EoIiZHue7rknkIHVJI79Jx0O/oAAAAAAJSiXytMERFFFW2C8T/AMCuZc+z37f+O/hbNTy/BfC+V8J5QeNdfWfM31/qt1r3Vkomgq24X4n/AIoMTvdl+3/tn7Uvc94874X4fyvNZG3y9db+rXl76tje/QaVkomiquU+Ccf5IvdFlVFeLniuYW9vRSZDZ5OiZre/ySDY629z7g9yN6JBhs/AXL2Q0ps+b+JS/XCxPHRNSWy0w0E08fu10zXE6I2CCHArQ6K+1TEct2F2ix8WMwOwtfR22C3ut9P1udM6NhYWgkuO3eu/X/YuNw1xt/FJw1asC+2vtj4B0zvjfhvh/M8yZ8n3Ot2tdevvHetqeImqq7mHhai5SFmu9uvkuMZZY6ltRbMgpoBNJCA7bo3M6m9bD66JGj+BcHdfPOLMf5T41hxXkBja+aNrZBcKJnw0kNQG6M0IJd5fcn5SXDR0epTpE2mM7s4H5upqMWSj8UN+ZZAOhrZbRHJWNZ+r8SZOvev0tj9isviviLEuI8bntuOR1NRV1snn3C610nm1NdL3+aR34bOgNAbJ9SSZ6iXytTFbZTxP/CXxDYVyj9v/AAv8GYamL7O+F6/ivOY5m/M6x0a6t/ddvXsnKvE/8Zt4wqu+3/sv+DN7hvPR8L5/xXluB8vfW3o3r73zfsVkom1cRbkjDv4weJ79hX2j9nfa1I6l+L8nzvK3r5ujqb1enpsL04LjH8CuMcfxD47477Ht0FB8V5Xled5UYZ19Gz071vWzr6lSBFN+CpuQeE25Tytj/J2I5L/BPLbU7omrWUfxMdwp9a8maPzGdQ126ureiR7NLepytwzi3LVqoheJay23q2v8223y2SeVVUcmwdtd7t2AdH6bBB7qxUV2pjO0/AfNF1ojY7/4nL9UWJw8uSKktEVNVSx+haagSF3cdiTvfuO6uDj3jvFeL8Gp8Uw+3/CUERMj3Pd1yTyEDqkkd+k46Hf0AAAAAAEpRL5WmCIiiipTNeJuHeaM1rLjSXuSgzGyS/C1V0xqvbT11M8AabLoHZA0NkbGi0EaIV1qn848NHF+bZTJlIprnjmQSuL5LtjtWaOaRx9XOGiwuPqXdOz7kqy4lR0+HjjrEo3ZvyjneW5lR2Vpq2/wuupqaSm6R97y9DqPtokg9hpefwZ0NZ/EVecmqqZ9PHkeR1l1pmvGj5LgyMf/ADUb16ovCPg1ZXQTZlmvIGZ00Dw9lBfr0ZYNj02Gta7/AGOCvihoaK12yntttpIaSjpo2wwU8DAxkTGjTWtaOwAAAAC1bxhIqDkDw90OS5+eQsGy+64DmL2eXUXO1tEkVY3Q0J4SQH/dHuN67g6Go9L4bMuzKspo+Z+bL3mVlgkbL9iUlEy2U85b6eb5bj1D9wI9nBaIRT2pjz0NDR2u101tt1LFS0dNE2GCCFoayJjRprWgegAAACo3IvDbLTZ7XZpw/wAiXXjq6XF3mV9NSwNqqKqfsnrMDnAA7JPuBvsBs7vpFJbFxn1nhpueSzyXHl3lO651XxQSst0M9IyloaKV7C0T/DMdp7272Dtvp+zVm8Scf/xW8NWTAvtb7W+zGSt+N+H8jzeuZ8n3Op3Trr194+m1NUS21MVtw5xP/FNZ8joft/7Y+2r3Peev4X4fyfNaweXrrd1a6Pvdt79AlNxP8N4pqzmT7f6vibILN9lfC66dPY/zPN6+/wBzXT0e/qrJRNq4KtuPeJ/4B8rchZp9v/aH8MKuCq+E+F8r4PyvN+Xr63eZvzfXTddPvvtZKKaKSyjgK6fxoXHkPinki4YFfLqAbnGyjjrqOtcPR7oXkAP7nv37kkAEknhZL4Zsj5Exqtp+UOYrlktydCWW1wtsdLRW+Q+s3wsTwJZA3bQ5zhrqPvrWikWvapkcfErD/Bbj+xYx8V8X9lW+noPiOjy/N8qNrOvp2enfTvWzrfqV2ERZUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEUNzPkzHMEybFbFfG1pqsnrxbqA08Qe0SktHzkkdI29vcb90EyRQvk7lLEuIsMiyfMZ6qKhlqmUcYpoTK98jg5wAA/msedk+310FLKCupbnaqW5UUnm01VEyeF+iOpjgHNOj3HYj1TB6EREBERARQ6+cmY5j/LeN8c17a03jIY5paIxxB0QETXOd1u3sdmnXYqYpgIiICIiAiIgIiICIiAiIgIiICIiAiKO51m1h464+uWZ5NNNFa7exrpnQxmR5LntY0NaPUlzmj6d+5AQSJFxcRyqz5xg9syzH5pJbbcoBPA6RhY7pPbRafQggj9y7SAiKB4hzBhOcck5Ng1grKqW745KYa5ktO5jC5ryx3Q4/e6XgtPp+Gx3TBPEREBERAREQEUeznMrPx7x9c8yv7al1ut0YknFMwPk0XBo6QSN93D3XQsF6o8jxO15DbhIKO5UkVbAJW9L/AC5GB7eod9HThsIOiiIgIiICL51E3w9JLUeVJL5bC/y4m9T3aG9NHufoFDLPy7x3esBuOZU+S01ParY58dxdWh1PJQyNOjHNE8B7H77BpGz21vYTBN0XGxXJrdmOJUeSWiKtZQVrPMpzWU76d8jPZ/Q8BwafUEgbGj6ELsoCIiAiIgIiICIiAih185MxzH+W8b45r21pvGQxzS0RjiDogImuc7rdvY7NOuxUxTAREQEREBERARQPkXmDCeLbnj1Bl1ZVQTX6pNNRiCndKNtLA5z9ejQZGfU/N2B0dTxMBERAREQEREBEUVq+RMVt3J1LgNzrpKC9VsPn0LKqF0cVaB6thlI6HvG+7Aer8NIJUiitp5FxW/ch3PC7JXSXG5WpgdcH00Ln09I4nQjfNroEnY/Jsu7Ht2OpUgIiICIiAiKBwcwYTU881XEEVZVHJqamFTJGad3laLGydIf6dXQ9rvpo+u+yYJ4iIgIiICIiAiKG8l8mY5xRhsWTZQ2tdRSVcdG0UcQkf1vBLexI7fKe+07EyREQEREBEUNzPkzHMEybFbFfG1pqsnrxbqA08Qe0SktHzkkdI29vcb90EyRQvk7lLEuIsMiyfMZ6qKhlqmUcYpoTK98jg5wAA/msedk+310FLKCupbnaqW5UUnm01VEyeF+iOpjgHNOj3HYj1TB6EREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBeK73e12Cx1V5vdwprfb6SMyz1VTIGRxNHuXHsF7VmbxNMlzPmPibh2rqJYrDfbjLWXWON5Z8THAGubGSPbXmfvLT6gKybSusfGBx/VVE0mO4byFkdsheWvu1qsnmUw16nbntdr9rQVBuWOR8O5P5H4CyDDLxHcKQZc2OVnSWS08nXBtkjHaLXft9fUbHdazt9uoLTaqe2WuigoqKmjEUFNTxiOOJgGg1rR2AH0WQ/EJhFgx/xscL5XaKOOkq7/fY23BkLQ1k0kFRT9MpA9XkTEE+/SPxW/HNZutC8zZnhGBcVz5FyDYXXuyR1EUb6NtJFVEvc7THdEpDex7732U0q7hTW/Hp7rIx/wAPT07qhzGAdXQ1vVoD03oKgfG5+aRcP6RpP7RXVkP+Ku6/0VN/YlZziL9VVL4teKI8CseSRi+1VTe2SyUVhpaNs1wcyOZ8Jc6Nry1oLo3a2/uPT0OrVpMys0nGdLnV1fJYrXNQx3CX7W1A+lY9od0yjZDXDeiNnv27qgfA7hNmtHh2gzNlJG+73qpnElW9u3shjldG2Jp9m9THO0PUu7+g14fF3kdKc+4xwO+091q8YuFfJcLvQ2yF001ayEs6IgxpBcPmfsD6gju0K+s3Im8albvF3gk5lqrHhHIt+s0TiH3q2WMvpND1d1Oe12h+LQVa+Acj4bydijchwu9Q3Gj6uiRoBZJA/wDUkYdOY79o7juNjuq3pPElgtBQQ0NDx9yHTUsDBHFBDi8zGRtA0GtaOwAHbQVb4NkdNUePSjvnHuGZbZceye2yw5A24WeSjpjVRsklZNo9g49DQT27vd6l7k9f4alPKX+UM4V/1O4/2Eq0Pc7nb7NZ6m7XatgoqGljdNPU1DwyOJgGy5zj2ACzJzrkdkxHxxcR5Jkdygt1robfcpaiqmOmsb5MgH4kkkAAdySANkqCVPIzfEp4jbDhWb/a2J8aVUbq2z26ojfTnJJGPAYJJOw6XaeQGkgdPSD1kOF9dkNxoO3eITHr1xtcs8seFZxdLHSVYpIJ6O2Ne+4kvLS+nj8zrdG33c4N16eoIFEcOeJOrtubclSX/GOUskgqshmnoKSmoH1rrVAZJOmnkY6X+QcBodA7DpI9lsyhoKK12yntttpIaSjpo2ww08DAxkTGjQa1o7AADWlnbwv/AONTnj+u1V/bTKTMpyvS2ZTS3LjqHMXW250FNJRGudR10AiqomhpcWPj38r9D036+6qp3iw4q/gHY8igF9q6u9tlkobBSUYnuL2Ryvic50bHlrQXRu1t42PT0OrZy7/F9ff6OqP7Jyz34HcKsto8OkOZR0cTrve6mfzatzQZGwxymNsQPs3bHO17l3f0GpJM1UvxbxTcdZBmlJid4tmT4bdq1wZSQZPb/hBUOJ0GtcHOAJPYdWtnQHcq7lR3i4xu1X7wo5JWV1LG+rtLI66iqCPngkbI0EtPttpc0/gf2Li8sci5BaPyddLmdHWTR3q62G2tNW06ex9SyISPBHo7pe/RHoSCmb0bnbvZR4peOLBl1Ti9kocjzS7UpLamnxag+MEDgdEOeXNaSPQ9JOj2PfYXX468Q3HXJGRyYzQzXKx5EwFxsl+pfhKpwA2ekbLXHXfQcTrvrXddjhnj6w8bcM2PH7HRwxuNJFPWVDGjrqp3MBfI8+p2SdfQaA7AKufF7iVDVcF1HItDqhynFJoK623SHTJo/wCWY1zOr16fm6gP1mj8VeLcOe2hEXDwy9y5Nxvj2RzRiOS522mrnsHo0yxNeR/80u4sKp/LfEHbMQzSvxyfjLky6yUbwx1babF8RTS7aHbjk8wdQ769PUFRW8eMXCseomVl/wCNuULVTSSCJk1dY2QMc8gkNDnzAE6BOvXsVoC53Kgs1mqrtdayGjoaSJ09RUTO6WRMaNuc4+wABWbsEttf4juXoeX8po5oeP7DO6PErRUN0K2VrtOrZWn17j5R9QB+iercz6l1fVzzfHLBx43NcmrhYrT8PHUyPuI8t8IeAQxzRs9eyB0jZ32G1T7/ABc4VNG6ssvH/Jd8tLe5u1vsJdTFv6wc57Tr9oCuLNqrD6HBLhW58bYMega2WrNzY18GmvDm9TXAhx6g3Q0STrQ3pVbT+KHBqumZNYMN5DvFvI1DWW3G5nwSN9iwnXb9ykn8KsLjnk/DOVcUOQYXdhW07H+VPE9hjmp3630SMPdp/H0PsSvNx1ynjvJbr/BZ6W5UFdYbg+23CguUbI5oZG++mPcOkkOAO+5a7sqA4GyO23fx6cky45Y7tYLXdLNDXzW250Zo5fiGuhBkMR9OoyyO2fXrJ91IcpH8TfjmsuYx/wAjjPIsQtFz12ZFcGaEMh9gXfIP+1KVfXnDWlXOaxhe9wa0DZJOgAqmg5r4/wAv4IynP5bFc6/ErVJPTVDKukie24Mj0HOijc8h8Z2NdXTvR7dlz/E9mdxx3hkYtje35PmFSywWyJh07cx6ZHj6AMJbv2L2leHk3C7dx5+T+yDC7WAae14+6AyAa81/YySEfVzy5x/FykhVsYffbDeeMLLktlpm2yx1duirKaGVjIBTwOjDmhzWktZ0tI2AdDSqaq8WOBS3Kpp8SxPPM1p6Z5jlr8bsxqKYOHqA9z27/brR9QdL34xjdwzH8n9Z8VtNU2mrrphUNJBK8kND30gADiPRpJ0T9CVXPGfO9BwvxhZuPOWeOMpw+ps0ApXXCK3GehqNE7lEjD3LjsnpDgSSdqyJq6+Mua8J5WqbhQ44bpS3O3Na6ttt0on009OHHTere299HsHE9l+sJzXBcg5dzrGscx99DfrJNAy81po4ohWOeHdBEjHF0mg13d4Gt9l08D5F485IpKi9YJkFuuxDWMqXQAsnYO5YJGOAe0d3a6h+tr3VPcFfnk8+/wCuW/8A4ZlM7XWkURRDlTJavDuEMsym36+Mt1qqKinJGwJWxnoJHuA7RWVRLP8AxH8c4Dln8E3fa+SZE0bks+OUnxk8X4P7hrT/ADd9QHcjuF5cN8TnHGWZjDiVwp7/AIhfaggU9Bk9D8G+cnsAx3U5uyewBIJPYAleTwp4Rasc8PVoyURtqb9ksX2rdLnL881Q+Rxc1rnnuQ0Edt+vUfUldzxE4DY888PuRxXSliNbbKCe426sIAkpZ4mGQFrvUB3T0u+oP7FvjcTlaqo/JfFTxtZMuqMYsNBkubXSlJbUxYtb/jGwkHRBeXNB16fKSAe3rtQHJeWcml/Jd0+citnbfq63x2x9aHESFxqPhpJd+oc5jXnY93bV4cMcfWHjbhmx4/Y6OGJxpIp6yoY0ddVO5gL5Hn1OyTr6DQHYBTJOzdUjy/ztgXJ/hU5AsloluNrv1LQxyT2O9UxpaxjfPi+boJIcO430k67b1sK++JPzf8F/q9Qf3aNU542cIsF58NdxzOoo423qwyU7qWsY0CQxyzshfE53qWES9Wvq0firj4k/N/wX+r1B/do1bmcH1MVCuUuT8e4jwUZZk1NcaihNVHSdFBGySTrfvR05zRrsd91NVm7xv/mvs/puk/8Ax1nxm3C9NIqFZlyhj2D51h+J3emuMtbldVJSUD6aNjo43s6NmUlwLR/KN9A73U1WbfEQR/yoPD6N9/tur/30yeM2laHul1ttjs1Td7xX09BQUsZlnqqmQRxxNHqXOPYBZCyXkbwz5lyW/OYeIM3zGemkYZ7zZ7TK6hndF918sZlY2Qjfq9npoHYACmPiZE2ZcwcT8OVVTLDYb/cZay7RxvLPiY4OlzYiR7EeZ+8tPqAtHW63UFotVPbLVRU9FRU0YigpqeMRxxMHYNa0dgB9FZxydopxvyrg3K2PSXXCrw2rZTuEdTSyMMU9K4702SM9270dH0OjonRXF5I564/4yvNPYbtPcLrkFSA6Gx2SmNXWOafQlgIDd+3UQT7b7qUxYpiOL3u/ZvbMdoqa718PmV9ZBEGy1IjaSAT+7vr1OidlZE8N3LmK2OyX3PMpxTMr3meRXGaetu9BZJKuMRbHTDFK30YNHbRr2Ho1urJLyavXGfFBx7fMupcXv1ryfCbrWHppIcqt3wQqHb0A1/U5oJ9B1EbPYdyArevF4tdgsNXe71XwUNvo4nTVFTO7pZGwDZJKzPy7yzx1yhxDecUuXHPIlTPNTPfQyOxmbrp6kNJikY4/dIdrfcbBIPYlfusxzkXmb8mzR2OaCsiy6SlYx9LcAYJao0tUQGvL9ac9kTXAu7FxBJ77S+Kakf8AytsLq+upx7j/AJLyK1NcR9rWqwl9M4A6JDnPadftAUmt/iGwe+cWV+c4zbMnv8FvqmUdXbLda3vrYZXa+UxOLQdAgkhxACguN+KfDsSx6247yZhGU8e1tFBHSvjqrU91G3paGjynMBcWdu3y+n19VeOG5Zhua2F9/wAJvFuulFPLuWooiNmTpA1IOxD+kN7OAOtfglmfFjJvDniTq7bm3JUl/wAY5SySCqyGaegpKagfWutUBkk6aeRjpf5BwGh0DsOkj2WqX8iY1Q8VQchZHNPjVnkp2VMgvMfkTQB3ox8YJIk2QOkbJPYbVM+F/wDxqc8f12qv7aZXlm1Vh9Dglwrc+NsGPQNbLVm5sa+DTXhzeprgQ49QboaJJ1ob0nlmk6U6/wAXOFTRurLLx/yXfLS3ubtb7CXUxb+sHOe06/aArS455PwzlXFDkGF3YVtOx/lTxPYY5qd+t9EjD3afx9D7EqvafxQ4NV0zJrBhvId4t5Goay243M+CRvsWE67fuVc8DZHbbv49OSZccsd2sFrulmhr5rbc6M0cvxDXQgyGI+nUZZHbPr1k+6evHSak3KX+UM4V/wBTuP8AYSrQ10uttsdlqbveK+noKCljMs9VUyCOOJo9S5x7ALPPKX+UM4V/1O4/2Eq+PiZE2Y8v8T8N1NTLDYb/AHGWsu0cbyz4mODpc2IkexHX+8tPqAmbiupJ4v8Aj+onmfjmHcg5NbYHlsl2tFl8ymGvU9T3td/taFZ3G/K+C8r2CS64VemVggIZU0sjTFUUzj6CSM9xvR0e4OjonRUst9uoLTaqe2WuigoqKmjEUFNTxiOOJgGg1rR2AH0WaeVrbS8aeNTi/OsXjbQy5dWSWO908A6GVgc6NrZHtHq4GQEn6xsP1U4vEOYuLkvmLBuKKWjOU187q6ucW0VroITUVVUQdfJGPbZA2SBvtvar7/lb4NQzRuyvB+RsToXuDRcb3YnRQDfpsse53+wFcTlm25hgXi3s3OFHg1xzTHo7KbVUU9rYJqu3O63OMscfqdh3qO3zPBLexMosfio4Oyms+wLteZrFVzjy32/JKF1MO/Yte5wMY/YXK5wmon4rOaJrDw9esbxq25tRXKqpaKrpcnttK+Gjga6ojcQ6pa8OY5zGluterwD6qUcWeIGiypmMYw/j/kmGrqqSKJ93uNn6aRzhDsyOn8w7a7R07XfY+q/XjAc1/grzJzXBzSKEgg7BHx1OrTwT/FXjP9FUv9i1OPVfqOcn5rguIXbDqfM8ffdZ7veYqC1PbRxVHwtU4gNk3I4Fmtj5m7P4Kw1m7xV/9b+Ff67Un/GxaRWbOICgWW8vYhhPJtiwnIpKmlqbxS1NbHXODG0tPFTxukkdK9zwW/Kw600+3op6sm+IjErbnPjX4dxi8xedb6mKpfUQn0ljj3K6M/g4M6T+BKvjNvJUwqvF/wAftMtVZ8P5Bv1niJDr1bbIXUmh6uDnvaddvcBWvx9yPh3KGIMyTC7uy4UReYpB0lkkEgAJZIw92u7g/iCCNg7Unp6enpKSKlpYI4IImCOOKJoa1jQNBoA7AAdtBZp42oKXEfyjXJGL2KJtHabpYYbzLSRDpjbOHwtLgPbZmld/2ynFnByvDPuR8M4xxV2Q5re4bbR76Iw4F8k7/wBSNjduef2Dt6nQ7qox4wsChZHW3XB+RbTZpCA29Vtk6aTR9HdTZCddx6An8FxbLbablL8odltTlMba63YFQ08Fot846oo55Wtc6bpPYuB6zvX/AHs/ohacqKeCqpZaWqhjnglYY5IpWhzXtI0QQexBHsnE7O3gx7IrHlmNUmQY3dKa52yrZ1wVVM/qY8f/AECD2IPcEEHRVH848mcJXStk4xyvGr5nd2pntqX2rGqN9RU0Txotd5jHM8t3fv0u3o6I0e/H4QpWcd+Mfk3iGyOczGXUsN/oaPe2Ub3iIPYwewPnAa+kbVwMTv8Af/DXydn8ec8d5Fd7JkN7lutNlVkpRVhzHuJayfuOnp2TonYJfoEEFWTKmprw3y9w3Z6y28VY5huUYJWVUjjSW2/WqSGSrkPdzjJ1PLnaH3nu9ABvsArY5C5Lwvi7F/t7Nb1Fb6ZzvLhj0XzVD/1I4293H9nYepIHdRzBOeeHeUbxBb8ayejqLxGXPhoK6F1PUtd0kO8tsjR1HpLt9BPbfttUFfM/x935QXJbrnVgyG/0mJUcNHY6K2W19cyllexj3zuY37rtl/S4j6e7Gpm01ZrPF3gdPJDUZDhXIeOWmZway83axmOkO/Q9TXudo/g0q9bXdLbe7NTXez19PXUFVGJYKmnkD45WH0c1w7EKlq7xH4Hc7bPbrjx7yFV0lRGYpqefF5nskYRotc09iCPYqN+Eaqr6R/IOK01lyG2YlQ3ZtXj0d7pJKeRkE5k6o2h/s0xtOt+ryTouKXx41dT24+I/jGyXjMrffq+stT8UqIKSrfUwgiqlma9zGUzWOc+Q6jdvbRr19NkRb/lg8fUlRC+/4dyFj9smeGMu90svl0p36HbXudr9jSVDeJMKsuQflCOW8ou1HFVzWKog+CZK0ObFNK0/yoB/Sa2NwB9uon10tUXmz2zIcfrLHeqKGtt9bC6Cop5m9TZGOGiCEuQ5r92u6W69WWlu9orYK2gq4mz09TA8PZKxw2HNI9QQoOM1waPxMuwNuPubmMlm+PddhRxAOpQ/p8szdXmHuN9Otfiq18FlVVf8n67WKeofNDY8krbbTF59IwI5Nf8AlSvP7183/wCVKj/qR/8ATyp682GrK5H5y474ur6e15Fc6iovVS0Pp7NbKd1TVytO9EMb2aDo6LiN6Ot6UJg8W/H8F2paTLMTzzDKeqeI4bhkVm+Hp3E+m3Ne4j9utD1JUw5D5M4q4zy+irslbFLldbTfD0kFvoTV3GaAOceloYC4R9XUe5AJ3rZCrHlPnPDsw4VyjHrlxfyS+Crtk7WyVeNSMiikEZLJS4nTelwa7q9tbVk/ha0xDNDU00dRTysmhkaHxyRuDmvaRsEEdiCPdftU/wCFm4VVz8IOD1NZK6WRtHJThzjs9EU8kbB+5rGj9yuBZsyrBfOeeGmpZKmpmjhhiaXySyODWsaBskk9gAPdfRZ28Yl2ujeJMfwu11slF/Cy/wBNZ6qoYdagd1Fzf2FwZv6gEHsUk24V7a/xc8ci+VVuxTHs0zVtI7onrMbtPxMDCPX5nPbsfiBo+oJCq/xKcv4Nyt4XY5cUuMvxdFkVGyttlbEYKqkOpe0kZ9u2tjY3sb2CtZ4pitgwnEKHGMZt0NBbKKMRRQxN1vXq5x/ScT3Lj3JJJWU/HdhFgjxXGeQqejjgvTrxFaqieJoaamF8ckjfMI+8WmEa37OP4Lfjms3WwpZYoKd888rIoo2l75HuDWtaBskk+gCoi5eLbjmO+VVtxSwZlm4pHdE9XjNq+JgYR6/O57dj8QCD7EheLxg3m6xcSWHDLTWyUJy2/U1mqqhh0WwP6i5u/wASGA/UdQPYq7sUxWwYTiFDjGM26GgtlFGIooYm63r1c4/pOJ7lx7kkkrOSTaqJcZc4cfcruqaXGLlPDdaTvVWi4wmnq4BvRJjPqAexLSQCQDranN3u9rsFjqrze7hTW+30kZlnqqmQMjiaPcuPYLNviwttLhFwwvnPHo20WSWq+QUdTNCOh1bSyNd1RSa+92YW/wCa9w+i+3iaZLmfMfE3DtXUSxWG+3GWsuscbyz4mOANc2Mke2vM/eWn1AV9ZTXWPjA4/qqiaTHcN5CyO2QvLX3a1WTzKYa9Ttz2u1+1oKg3LHI+Hcn8j8BZBhl4juFIMubHKzpLJaeTrg2yRjtFrv2+vqNjutZ2+3UFptVPbLXRQUVFTRiKCmp4xHHEwDQa1o7AD6LIfiEwiwY/42OF8rtFHHSVd/vsbbgyFoayaSCop+mUgeryJiCffpH4q+Oal1oXmbM8IwLiufIuQbC692SOoijfRtpIqol7naY7olIb2Pfe+ymlXcKa349PdZGP+Hp6d1Q5jAOroa3q0B6b0FQPjc/NIuH9I0n9orqyH/FXdf6Km/sSs5xF+qql8WvFEeBWPJIxfaqpvbJZKKw0tG2a4OZHM+EudG15a0F0btbf3Hp6HUryTnXj7DePbHlWW11VZze6aOporTUU5dXv62td0eSzZDh1AHv0g9tqq/A7hNmtHh2gzNlJG+73qpnElW9u3shjldG2Jp9m9THO0PUu7+g1b/JmccY8ei1ZLn8tEyvje+K07pfiasvf0h7adrQXgnTASND02e4Vsm5CdK8k8XmEUJjqb/gXJNhtT3Bou9zsXl0w2exJbIXa/YCfwV6Wa82rIsfo75Y6+Cvt1ZEJqepgd1MkYfQg/wD76VL3DxE4bebPU2yv4s5Nr7fVxOhmifi0r45o3DRBBPcEFcLwP10lX4Z6ql65/hqG/VdNSsm+9HEWxydJHseqRxP4kpZxpK0miIsKIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICo/xGcbZTlNvxrPePGskzHDa019DSvIArIyWmSH1Hc9DTonuOofpK8EVly6Vna2+MviqO2+TmlNf8UyCIBtTZK22zPlZJ7taWt0Rv0Luk/UBVByDlOZcj+Jnh3OrnjVbjmJDJYKKw0lzb5dXU7mifLUvj/Qa7UYA33DdjfqtyuiifI2R8bHPb91xaCR+wr9qzyk6iYzr43PzSLh/SNJ/aK6sh/xV3X+ipv7EqQIppih/Bt+Zri3+lrf73Mvb4heOMpymixrPOPRE/MsOrTX0FNKQG1kbunzYCdju4MbrZGx1Dt1bF1or7c6ZxjO9u8ZHFlPQ/D53S3/AA2/Qt1U2i422Z72PHqGuY07G/QuDT+AU64s5XufKV2u1bSYFebNikDIxbrvdQIX3B+z19MJ7hgHTp2yPXej2Flviike1z42Oc07aXAEj9i/als/DllbnrF7Hmfjj4dxzJKFldbKimrHzUzyemXy2ula131b1Mbse42PdW5zPw5Z+WONG2JjmWu720ioslygHQ6gnaB06Le4YdAED2AI7tGrNRX26MUpwDy5c8worhx/yBB9nciYyfh7pSyaaatg0G1LAOxDtt3rtsgjs9qqvD+Q7F4dvEPyraOVWV9noMkvT75abq2jlngqGSPkeWgxtJ2PMaOwOiHA60N6/X5kjjlb0yxteN704b7psMQalzWz8hcDXPK7BHXMt9XQVYh+NpnQPcGte3q6Xd+l2tg+4I9DsCBeDb8zXFv9LW/3uZXwim8YqpfE7+aPnX9H/wD0xi59uwCk5R8BWNYNVzinFxxK2tiqC3fkysp4nxvI9wHtbse42PdXUibwmMuYR4i28U41R8eeIOzXfG73aIm0cV3bSSVNHcomDpZIx8YJLukDegQSCdgktHNzvObr4qqem4x4ptF2gw6oqYpb/lldTGCHyWPD/KhDu73dQadHR20dg3blrOSOOWMslY17T6tcNgr+gBrQ1oAA7AD2V9p3hjzW230lps1JaqCIRUtJCynhjH6LGNDWj9wAXqRFlWLfERzTiOU84QcM5PkdRj2DWqVs+R1UUE0ktylb0ubSMEbS4M7jbjobBP6Leq0bf4ufDVabTTWu2Za6koqWJsEFPDZ6trImNGmtaBF2AAAWgUWtmYmM+eJqy3XlLwu2q9YHRTX2mZWUV/8As+Jjg+40fluPQGEdRJEjH9Ot/L6b7L0UHi94NfZYmfat0o7mGiMWD7IqDVMeB/gg1rCzft2dr8Qr7X48qLzvO8tnma11676/amzMpjJfCt6yLJPyg+a5DkmPT4/PXYvHNT2yp158FP5tO2LzQPuyOa0OLf0S7Xsrr5945PKHA16xylYftWJgrrXI06cyqi25nSfYu+Zm/YPKsxEvlzpjIPAd7vviF5xoOTspoZIaDB7PFbKaKUfLNdJWf84nA9Adb7e24j6hXZ4kPzUM8/oqT/eFaSJfLnTFRcfXy5414JsSvtmxysyKvo8XopYbVRuDZal3ks+VpO/rvsCdA6BOgY3SeMfhgU7oMqnvuLXJg1NbLtaZ/NYfcHy2uH19dfuWgV+HxRSOaZImPLTtpc0HX7FNn0Zb4bo4838Yd85fwfE63HMHdZfs81E9L8ILvUl7XGVkXbY03u76sG+7iB1uCvzyeff9ct//AAzLSKK3yMFy8ksNBlOG3XGbo1zqK50ctFOG+vRIwsdr8dHsuoiyrJvH/KNy8NNmHFXNloukVmt0r22TLKKldPS1VMXFzWP6dlrhvsBsgEAgaDnejPuc6jnLGazi/gGzXW8z3lho7hkNRSvpqK30z+0hLngHqLdjRA7Ht1HQWqXNa9ha9oc09iCNgr+MYyOMMjY1jR6NaNALXtO8TFU3ng6z3HwlnhGmrOiCO2x0sFa9n/5xG4SNmc0fWVvUQPYkKssF8R8fFmNUfHniDs13xq+WiJtHHdRSPqaS4xMHSyRj4wSXdIGyAQSCdgktGpV+ZI45YyyWNr2n9Fw2El/TGKvELy7dOauDL5Q8aWC5twm3xsrbxklyp3U8VUI5GmOnp2u7vJk6HE9tdPoB66m4k/N/wX+r1B/do1MQAAABoD2RLeMJBVT4juOLjyl4d71jFlDXXZpjrKFjnBoklicHdGz6FzepoPYbI2dbVrIpLnKs1Y34xcCt+OQWzlOlvmK5dSRNhr7dU22ZxklA050fS0/K4jYDta3rvrZrbMswyjkbxa8N5nVY3X2HEnXh1JY4bmzy6qq0Y3TVDo/0GO3GG9+4Zv3W3HRRvc1z42uLTtpI3o/gv0rPKTqJikvETxrlGWW/Gs6498t+ZYdW/aFBTSEBtZGS0yQkkjuehutnRAcO3VscSg8ZPFlPbvIzmlv+IZBC3VTZa+2zPkZJ7ta5rdEb9C7pP1AWiF+XRRve1742uc37riNkfsTflMVfxPyXk3KNZe7pVYBV2DEG9DLRWXQmOqrxo9bjBogM+jt676+bvqnsYvt58JN8u+H5dj92ufGNZWvrrNkNuhM/2eH66oKho9AO3f1JDiA7qIbrNE0xnmv8XOE3iIWziWx37Pcjn02noKOhlgjY4/pTSSNHQwe5APp6gdxaOf5vfMJ42jyijwO7ZFVNfCKq02tzZJ4GO7yPGt9fR37NHc69BtwmUcUULemKNkbd700aC/amwZ+HjF4EqbdJDd7rdKGpI6ZLVX2eczb/AFHBrXM3+HUuX4ZMern8mckckW7FKvEsPyKop/se1VUPw7pBGHdU/lfoNJdsa7fOQOwWkjFE6USuiYXt9HFo2P3r9q7M4MZAw/kOxeHbxD8q2jlVlfZ6DJL0++Wm6to5Z4Khkj5HloMbSdjzGjsDohwOtDco57krOc/CTQZPx1Z7ndKWmu8Vzfa56Z8M1wpoXSRva2Mjbg7bXgDZIHYb7LSskccremWNrxvenDfdfpPbnTFCUHi94NfZYmfat0o7mGiMWD7IqDVMeB/gg1rCzft2dr8QoHwresiyT8oPmuQ5Jj0+Pz12LxzU9sqdefBT+bTti80D7sjmtDi39Eu17LWnlRed53ls8zWuvXfX7V+02fDGbuUv8oZwr/qdx/sJVJPETxrlGV27G8749Eb8yw6t+0KCmkIDayMlpkhJJHc9DdbPcBze3VsXaie3RjO1B4yuK6e2+Tm9Nf8AEsghb01NlrrbM6Vknu1rmt0Rvei7pP1AXKxajynxB+Iqw8q3nHLhjuA4m2R9hpbmzy6i41L9bnLP0WjTDvuPkaATt2tNuiie9r3xMc5vdri0Et/Yv2mz4Yp7kDn+g4v5Cks+Z4Rk9PjpgjfBk9JTfE0j3kEvY4N7s6ew9yTv5QNE1VzDzvw/zBxVc8Hwez1+eZNcYDBbqams83XSTO+7N1yMb0Bh77b9NHsSVrZfiOKKIERRsYCdkNAGyksnwxQGfcZZfW/k7n8bBjrhktLY6Jj4Y3eY6SSnkildEw/pHURY366H1Xk4x8UvGNZiuJYdUuvUOWGOltU9lbbJnywzANic4kN6egEFxO9hv6O+y0avyI4xKZRG0PI0XAdyP2pv6Yzh4q/+t/Cv9dqT/jYtIoilvGKLN3KX+UM4V/1O4/2Eq0iiS4Czbjn+VKy7+pUf9tSrSSJLhWauSrHl/EHiOl56w/HqzJMfu9Gyiyi00DeqpiDA0MqYm/paDGb7dtO2QH9TffUeM7hx9sAsRyG9Xp46YbHS2uUVL5PZhJHTvfY6J99ArQy/AiibK6VsTA93YvDRs/tKuz6mKJ4AwHMI8syvmbkqiFuyjLXsEVq3s26jYAI43H9YgMBB7gMbvRJA+J8WWHY9eqqzcpYtlGB1sM744zcKF88M7A4hr2SRA9WwAToEfRzvVX+vy9jJGFkjGvafVrhsFN28mMd5xkmMeIjmTAP4mbBW1tdZr3DcblmAt76SKmpoyC6MyPa1ziSNhpHq0Ab6jqacj2XMeIfEVUc7YbjtXk2P3mjZRZRZ6EdVTF5Ya1lTE39LTWt2NdtO3oO6m6Ra1rGhrGhrR2AA0Av6nsYz4fGbwnJQA0NXf626O7Ms0FpmNU5/6ncBnV7feVr8cZLkeX8f01/yjD6nFK2okkLLZVSh8rIuo+W5/YFri3W2kAg7UpEUTZTKI2CRw0XgDZ/ev2pbPgzdwV+eTz7/AK5b/wDhmWkURLdJMZt8F3+KjN/661/9jTr+v/ypUf8AUj/6eVafJnJFx46ZbKqm46ynLKKqdI2pkx6nFTJR9Ib0l0ewSHbPfYA6Ts+iqzii15lyB4rb3zjkOHXTErJHZm2W1UN3j8qrn+drzI+M92gaf+Hzt0Tola/an8cfK7xHwt44r3yhntnuE2I5BaIKKjv1NTOqWWuRjY2vjeGglgcY3O7DZ6hoH5tdXkHxH4tnHGl/xjhyC4Zfd6y3VEMtRFQzQUluhdE7zJp5JWNA6WkkNG9u0PdaUIBGiNhfmOOOJnRFG1jf1WjQU9ouKX8JP5muFf6Kp/vcy6/CvN1r5poL/UW/HrlZn2au+DkirtdT9gkHt913ynqb+j27natNVvwtgV1wTCrqcjdSvyC+3qsvdydSvL4/MmlPS1riASAxrPYd9psu0WQqp8Q3Flbyxw3LZ7JVNpb/AG6qjulpmc7pHxEYcA0u9uprnDfsS0n0VrIpLnKs24/4u8UstrZZeabVecKy2kZ5dZTT26WSGd47GSEsBPS71Gxob7Fw7mmfE3yHkvMHH1uv9jxu42nju03SAxV91iMEt2q5OpjXRRn/ALmxhk+b36/r2G9ZIopdebGx/SdjqaDo/VftanlJdxMVX4g+LKvljhyWzWaqbSX631Md0tM7j0gVMYdppPsHBzm79iQfZQOw+LjFrFbGWXmu03rCstpGeXWU89vlkhqHt7GSF0YdtjvUb7d+xcO50gvxJFFMAJYmSAHYDmg6KkvGUxlO5V978V/JONU1nx66WrirH69l0q7pc4fJdd52fcjiYfVmi4b9g9xOj0tM/wDEZxtlOU2/Gs948ayTMcNrTX0NK8gCsjJaZIfUdz0NOie46h+krwRPb8MZ2tvjL4qjtvk5pTX/ABTIIgG1NkrbbM+Vknu1pa3RG/Qu6T9QFUHIOU5lyP4meHc6ueNVuOYkMlgorDSXNvl1dTuaJ8tS+P8AQa7UYA33DdjfqtyuiifI2R8bHPb91xaCR+wr9pPKTqGM6+Nz80i4f0jSf2iurIf8Vd1/oqb+xKkCKaYofwbfma4t/pa3+9zKO84iuwTxX4PzVebBX3nDrdbJbbVvooDO62TOMpFQWewIkaOr+YffpB00ivtzpnCiKvxV8d3mk+zuLBc85yeob00dqoLdURjrPYOmkkY1scYPdzt9gCVwPBDHVxcCZBFXlhqm5TWNmLPul4ig6tfhva0myKKLq8uNjOo7PSNbK/abMyGCIiyoiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiobn3OszpeQMD4lwW9w45X5dPM2e+yRCR1LDGAS2Jp7F7tnXodhoBHVsWTSr5RZ+k8OGYU0Pxdm8SPJ8V2A2Ja+v+Kpi78YDoEfhtWzTUOdUHEDaA3y33TM4rcWC41VP5dNNV9B050bNaZ1a9Ndu+vZLIiUIs+Q+H7km/wBOK/PPEXnIusg6nRYzUC20kLv1WsaPmA+umk/QLx8bZLyJxz4mjwbyBlU2XW252110sN6qmaqgGl3VFKe/V2ZJ3JJ+VpHZ2hfX8prR6Is+cmZLkXFviwwvK6q+3KTBcoabDX0M1S91LRVZ15UzWE9LC7TdkD0ZKT6qSataDRFnfirNrnm/KvJHMFyyOvg49sofarTSfEPFI9kDeuorDGD0uOmgh2t6eR+ikmjRCLLGLR8u+JmOfNXZ5d+OeP3zyQ2e32M+VXVrGOLTNLMDtvcEa2RsEADXU79ZbjnMvh5tD8/xjki98g4vQEPu9hyaTz52wb06SKfuQWg77AAa2Q4bCvr8TWpUUFuvLGK2zgCTl4zSTWEW1lxiAAEknWAGRa9A8vc1mj6OKpXEcE5p5ysNPyBnvKuQYRbLmwVFsx3FZTSuhp3d43SSg7cXDTtODjog7H3RJP01afiNvl4xvwvZfe7Bcqm3XGlpo3QVdM8skjJmjBLSPTsSP3qUcZ11Zc+E8PuVxqZKmsqrJRTzzyu6nyyOgY5znH3JJJJWUfEHY+XOJuCb5aK/NK3kDB7zGyjfUXcf+yFpm8xrmPMvcyxuLOk79CRoD9LQmP5laOPfBxjuaX1zxQWzFqGeRrPvSH4eMNY3f6TnFrRv3IWrODeVposvYpg/NHOlhgz7OuUr/g1pubBUWvHcVlNK+Knd3jdLN6uLhp2iD2IPy/dHxyCu5V8MNxt+R3nOLnyHxrUVLKW5C7jzLha+s6bK2XZMg/adE/LoEhynr801qdFWnOt8rLf4XMvyDHrrPS1DLU6opK6imMb270WvY9p2Ox9QqZ4wxjmTnTiawZFlHKeQ4dYGUENLRUlimLK64GJgjkq6ipPzEyPY5wb37EH8XJ48aa1iix1m2TcreE3JLdcK7MLtyThN4bLTx096kLqulqgwmNvnHZIJ16diA8dIIaTOLfwly/nNsiyPkjnPLbDeKtgmFnxWf4Klt++4iPSf5Qt7Ak9977u+8Xr901o1FnPijLuQ8H8RVdwNyZkJydktu+1bBfpY+ieeIEh0cvrs/K/uSSDGe5DhrRilmEuq+5kxfkTLuOmWrjLMo8WvIrI5n1kgcBJCA7qj6mgluyWu2B36dHsSpxboauntFJBX1Yq6uOFjJqgMDPNeGgOf0jsNnZ17bVIeL/Ir/i3hhrrtjV7uFnr211MxtXQVD4JQ0v0QHNIOirypHOdb4HOJLjG0kn37J8Pr7KheHcqyO8+KnmmxXW91tZbbVVUTKCkmlLo6UObL1BjT93ehvX0V9LN3BX55PPv+uW//AIZlZ1SrHpsR5Pj8TVbl8+exSYHLQNhgx3yz1RyhjQT6a+8HP699XzdOtDanV8t092x2sttLdau1TzxFkddRlvmwO9nt6gQSD7EEH0VI2/JMhk/KP3bFn3y4usceINqmWw1DzTNl86IeYI99Idokb1vuV0eceVcqsOU49xTxfTU0+d5N1Ohnqh1Q26mb1dVQ8d966XkAgj5HbB7NLLo5barxR1ULOOprXaaOVs/lTckRyxOZJSAb8xlFvYqCO2iOgO36DThe9so32+z01DJXVNc+GNsbqqqcDLMQO73kADZ9ToAfQBUDH4cOQJqP4+v8S/Ihv5HUZqepMdG1/roU3Vot37dQ3+CsjiSDleixOrtnLVRaq64UdU6GjulA7Tq6nAHTLJGAAxx/D19wNbcv8IsBFijh+785cs3PM8ItefXCx2W3ZDVTV2STPdV1gjeQyKipes/ybR5T3EgjXWNfR0yzfifl3ijDq7kDj3nHML/VWeF1bV2fJ6g1sFXCwdUgaCdNPSCdAbPoHA6KevzTWpUUU4zzel5H4jsGb0kHw7LpSNmfBvflSAlsjN+4a9rhv30qIpMi5N8SucXuHBMyqcG41stW6g+1rcz/AJ9d526LjG/YMbACCCCOzm7DiSGyQ1qJFmbIeJ+aOLLLNmPGXMeT5XLb2GoqceyuU1sddG0be2NxO2u0DoAAn2cD62BbOfcVr/Cw/m6WGSOggpDJUUQcDIypa7yzAD9TIQ0E+oc09tq+v4atlFl3E+P+aubLDTZ7yDyxkGFW+5sFTbsdxSU0hgp3d2GSXeySNHTg49xsj7o4nL1FzZwLxFe7hbeSLvmWK1dOaOSouUhZdLNNJ8kVRHUNO3t6y1p3rXUNDuSHr801r1FCeHLhXXXw84Pc7nWT1lbVWKjmnqaiQySSvdA0uc5x7kkkkk+qmVREZ6SWASviMjCzzIzpzdjWwfqFlVSZjJzThOeS5BhdvPIOOXEFs2O1FTDR1FtmAOpIJ3AB0Tj2cx2yDrXb0kfGNo5EprTVXzk2/sqr1c3CX7Io2tbR2lntDGQOqRw/Se4nZ9O3d0BPhuvABJ8RXMAA7km+/wD/ACqx4dsOZZf4l6qvxXmDkG9ccYvMIqmvu92fNHd6xuyYYgNNdENt2SDsD+e3W82Mr+5VxHk/J7xic/HeexYxTW+vM12ifGXfGRbZoDQPVoB46DpruvuflCspUD4lMkyGwZTxHDYr5cbbHcMvpaWsZR1D4hUxF7QY5A0jqadnYPZfLkzJci4t8WGF5XVX25SYLlDTYa+hmqXupaKrOvKmawnpYXabsgejJSfVTNi60GiLO/FWbXPN+VeSOYLlkdfBx7ZQ+1Wmk+IeKR7IG9dRWGMHpcdNBDtb08j9FSTVaIRZYxaPl3xMxz5q7PLvxzx++eSGz2+xnyq6tYxxaZpZgdt7gjWyNggAa6nfrLcc5l8PNofn+MckXvkHF6Ah93sOTSefO2DenSRT9yC0HfYADWyHDYV9fia1KoPxRylYeYOPGZjjlFcaSidUSUwiuDGMl6ma2dMc4a7/AFXNvtmpecOMceveM5/lWL0NUxlwhqrBV/CzSsez/BynR9N92+zgsyeFfhu5ZtwAy+0/L3IOMxuuE8Qt9huZp6cdPT83To/Mfc/sSSZya3KioLxbXzIMO8KtTX43kF0ttwhq6SEV9JUvhnI6tHb2kHv7/Vcy0cdcu8x2aDNc35YyTCaS5MFTb8bxWb4U0cDh1RiaYd5JC0guBHY/T0CePGmtIIswWa9clcEeIfGOP80zatzbDMuc+mttyuY3WUdU3WmPfsl4Jcwdzo9WxrpINv8AM/KVv4g4krswrKY1lSHNpaCiB0ampfvoZv2HZzj79LTrZ0EviasBFmyzcKcy57a48l5R5vyzH7nWNEzbHis/wMFvB7iNxafnc3sD22CD8zvVeekynkvw+8rWDFeSMrkzTA8kqRQ2+/1cfRWW+pP3Y5nbPU07Hck9tuGuktL1/Ka02io3nHlLL7TmePcQ8VQ0zs4yNrphWVTQ6K2Uo6g6dwIIJ+R5GwR8juxJAPKp/DfnhphX13iW5HdfSOozwVRZSB/4UxcQW7/R6gP2Jn6a0Oix7bs45kt3jg484u5Avcj30kVY+WrtsroKW+0z6aV0M0sAIb1tdE8Ea0HN7emzsJSzCXRFS/iS5JyXj7ALLR4dPS0d7yO8Q2anuNW0OiofM3uUgggkaHqCO5OjrS4zfDdlz6cVdR4keUTeNbdPHcOil6/wp96Dd/o9Sufaa0CoPgXKVh5DyDLrRZqK4082L3WS0VjqtjGtllY5zS6Ppc4lu2HuQD6dly4OOc1unCTcMy7lW+PvYqC92SWNrbfUmNshLG/KDrbQA713s9z6rM3BPDdyyfkDliih5e5Bsn2Rk89E+e1XMwyV7mySgzVB188h1snt3J+qSTKa2pkFJdK/ErpQ2O4i23OopJYqOucwSCmmcwhknSfvdLiDr30ovxHjmd4rxfS2fkbK2ZLfY5ZHSVzOojoLttZ1OAc/Q9yAe+vYL3yW2qxbhqptjb3c7lU2+1Ssbc66YvqpnNiOpHv7bfsb39VAfCjfr3kvhQxu85Fd667XGaSrEtZXTumlf01UrW7e4knQAA/ABPg5vhZyrI8qxjO58kvdbdJKPLqyjpn1cpkMMLWRlsbd+jRs9vxV9LN3g6/6ocjf12rv+CJSzNOOOX875Brmv5cqMSwyMMFFR43D5VdP8o63Sznuwh3UB0kgjXYH1eU5J0uVFk/kbE+VPDzip5Pw/l3KcttVsmiN1sWVVPxgnhe9rCWPP3TtzfQAgEnfYg6hsd2pb/jFtvtF1fDXCliq4er16JGB7d/uIUs+mveiIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICgfKPEWGcu2KktuWU9S2ailM9DcKGbyamkedbdG/R9dN2CCOwOtgETxVdyjw1/GFkFtye0Z3kuIZFbYHU9NXWqoPlmNzuotkhJAcCdb0RvQB2ANWdlQKt4i57wW1T3Dj3n24XplLG6RloyukZUiYNG+g1BJcN612A/aAvbReIqsrPAxV84GxwsutNA6F9EC4w/E+eKdrh335fU5ryN7A2N9tr8VPBXNN/t8ljy7xL3assczTFUU9usVPRTzxns5pma4kbGwd9W991Z9HxRg9Fwn/FRDaAcYNI6jdTOeS54cS5zy716y4l/V+t3Glq2fWcVfivE/JeZYZbMozDn7Mqe43OljrXUuPuho6anEjQ8RtAYerQIHV23pV/TYrLh35Sfj+0VOfZBl1SbJVyvlvdS2aWmBhqdMBaAADretb779wrDtPBPMGI2yPHcJ8RtyoMbhHl01JcbDTV09NEOwY2Z7gdAdhoAD2AXrxfwzW/Fuc8f5OhzO5XO50ENSLlLc4/PqLpNNG6PzHS9YEbWtcA1gYQA3W+5Ku/0xe6r3m/jqLlPgu+4iGN+Okh+It8h7eXVR/NGd+wJHST9HFWEi5y40yXcefrnefAnQS0DpZM/vEzcOFKDqcV51HI8j1DjGQ8H2dI0Kz7rxY/FfA9d+L8aZ51ZBjlRTt8od6qpdG50hA+sjy7Q/nALmWzww2G2+Kafl5t+kkojUy3GDHTTaigrZWBr5xJ16JJDn66Ad9Pf5Qr4W7Z8ST9U54WcitGQ+FLEvsqWMvt1L9n1cLT80M8ZIcHD2JGn/ALHg+6kPOuRWjGPDjmdyvU0bIJLTUUjGPP8AhpZY3Rxxj6lznAfs2fZQrJPDhJDntdmvEXId146u1xd5lwgpIG1VFVv2T1ugc4AOJJ+o77ABJ35rf4arhf8AKqG/c18n3bkT7Pk86ktUtK2ioGSfrOhY4h5/8nfodjsnG6cq3yTDshi/JIUNpfTzGtpqGG6SwaPV5Bq/P7j26Y3hx+nStO8Z5HaMs4fxvILFNHJQ1VvhLBGd+WQwNdGfoWuBaR7EFSiWGGemfTzRMkhe0sfG9oLXNI0QQexGvZZ7f4Z77iV+ra7hHl28YFQ1shmmsr6Rtwo2vPqY2SOAZ6D1Dj7b1oBsvZmPr40b5a7Z4RL9bK2rZFV3WekpqOEn5pXsqY5naH0DI3En9n1XA5gs1xvf5MK3w2yN8slNj1orJI2DZdFG2Bzz+xrQXH/NXTufhR/hVjt4lz/ku7ZXllbSGjo7zcKUeRbGlwLjBSteGtJAIJ6vftrvu88Wx2PHOObLiU07a+O222C3OlfF0icRxNjLizZ0HdO9bPrrZTZMxM1z+M8jtGWcP43kFimjkoaq3wlgjO/LIYGujP0LXAtI9iCqx8YV9tlr8KN9tNW5sldepKehoKUd3zy+ex/yt9TprHO/aB9V5JvDTe8Uv1bX8I8tXfAaKtkM01ldSMuFE159THHI4BnoPXqPtsDQHUw/w6so+QqTPuT87uvImSUPegkr4xBS0Tt76ooGucA4HuDvW++tgEJkurz0/HKdrrbH+T5utkuW/jKHFIaWfZ3/ACjImNd/6QVMuCWNZ4YuPw0AD+D9Ee31MDSV2OSMO/jB4nv2FfaP2d9rUjqX4vyfO8revm6OpvV6emwvTguMfwK4xx/EPjvjvse3QUHxXleV53lRhnX0bPTvW9bOvqVN4PqjPGWxkmCcete0OBzWhaQfcGObYWk1W3MnE/8AG3Y8dt32/wDY/wBj3uC8+Z8L8R53lNe3y9dbenfX97vrXoVZKlvEGbc17flN+Nde+N1gP4/LUrSSra98T/bHibxnl77f8n7Ets1v+y/herz/ADBKOvzesdOvN9Ok7169+1kpb0RnXxufmkXD+kaT+0Wg6L/o2n/0Tf8AcFAebuK/45OJKjCPt37F86oiqPjPhfieny3b10dbPX67VhQx+TTRw9XV0NDd61vQTeD6/azdwV+eTz7/AK5b/wDhmWkVW2C8T/wK5lz7Pft/47+Fs1PL8F8L5XwnlB4119Z8zfX+q3WvdJeKVW9s/wAqXef6kt/t4V5csqYcT/KY4ne784Q26/42+1UFVL2Y2pEjz5ez7nbR+2Vo91aVNxP8N4pqzmT7f6vibILN9lfC66dPY/zPN6+/3NdPR7+q7HJfGGI8sYW/GsuonywB/m09TA7onpZQCBJE/wBnDfuCD7grWzTExXxp6ukqzKKWqhn8mQwy+U8O8t49Wu16OGx2PdZ+j4H5spaT7FofFBf2WQDoa2a0Ry1jWfq/EmTr3r9LY/YrO4t4pxjiXE5rNjxq6mermNVX3Kuk82prZj6vkd/uA7DZ9ySc2T9FS+DljRinJDw0dRzWtBP1AZFr/eVeWfAHijJwRsfZNV/YuUX4c4n/AIprPkdD9v8A2x9tXue89fwvw/k+a1g8vXW7q10fe7b36BTm/wBr+3MUudl8/wAj46klpfN6ery+thb1a2N63vWwrbzpOlLeE+CWs8DGLUsUpjklguEbZP1SayoAP7lxvBVcaWHgOtwmoaKa/Y7d6mmudE/tJG5zy5riPp95u/rG76K2uH+O/wCKjhey4B9sfa/2Z5//AD34f4fzfMnkl+51O1rzNfeO9b99KIcgeHuhyXPzyFg2X3XAcxezy6i52tokirG6GhPCSA/7o9xvXcHQ1dl2C179fLXjWMV+QXqrZS2+ggfU1EzzoMY0bP7/AKD3Kw7jWD5FffyWmVuoKCYSV93lvtHRtaep1NHNF1AD11qGRw+uhr1V1S+GzLsyrKaPmfmy95lZYJGy/YlJRMtlPOW+nm+W49Q/cCPZwV9MjtOO422ONtLbbVbqbQaNRxU8Mbf9jWtaP2ABJc6M1FuIs3sHIHDVgyHH6qGWF9HFFNDG4F1NM1gD4nj2LT2/EaI7EFVt4x8xseO+Fq+WWuq6f7TvflUtDRvO3ykTMe94b66a1pPV6A9I9SF8neHTivMa05/xZm2Q4kLmPNfU4XdRBTVG+5PSAek/zWloB322oHzfxbxtw34f8mvNVc7vkma32nbaaG5ZDW/GV0rnuaHNh7DpAYXEkDeu2++ikmpdxoLgz82Tj7+rtD/d2KfqK8Y2OqxnhTEMdr2FlXbrLR0k7T7SMhY14/8AKBUjrYqie21EFJVfC1EkTmxT9Af5TiCA7pPY6Ojr30s3tqM/c0Zhf+Q89Z4eOMq10FdVxiTKL1F3baqI66owR/3R4IGvo4D9Ilt14Zh9gwHBrdiWM0TaS2UEQiiZ6ucfVz3H3c4kuJ9ySs+4h4YeVsDkukuK+I2Whnu1SauvqH4rBPLUyn9J8kkznH1J1vW3E+pO5vYeMOdbdlNur7z4kZrvbqepjlqrccVpYBVRNcC6LzGyEs6gCOoDY3taudSsxFvFX/1v4V/rtSf8bFZ/N/HUXKfBd9xEMb8dJD8Rb5D28uqj+aM79gSOkn6OK+HKvE/8Zt4wqu+3/sv+DN7hvPR8L5/xXluB8vfW3o3r73zfsVkqbxFxku48/XO8+BOgloHSyZ/eJm4cKUHU4rzqOR5HqHGMh4Ps6RoVn3Xix+K+B678X40zzqyDHKinb5Q71VS6NzpCB9ZHl2h/OAXMtnhhsNt8U0/Lzb9JJRGpluMGOmm1FBWysDXziTr0SSHP10A76e/yhXwrbPhJ+qc8LORWjIfCliX2VLGX26l+z6uFp+aGeMkODh7EjT/2PB91IedcitGMeHHM7lepo2QSWmopGMef8NLLG6OOMfUuc4D9mz7KFZJ4cJIc9rs14i5DuvHV2uLvMuEFJA2qoqt+yet0DnABxJP1HfYAJO/Nb/DVcL/lVDfua+T7tyJ9nyedSWqWlbRUDJP1nQscQ8/+Tv0Ox2TjdOUp8M9muNh8J2EW66xvjqfgTUFjxpzWyyvlYCPb5Ht7KCeBsj/kpRN33bdqoOH0PyditJAADQGgPZZ3Z4b8xxTJrzPxDzRcMLsd4qnVdTZ3WqKuZFI77xhc9w6PYDQ2AAC46Cm7pj8+Nz80i4f0jSf2i0Fb2NjtNKxjQ1rYWAAew6Qqv5N4YquSvDxS8Y1ua1bKiL4YyXyrpRUyzuh1tz2B7AXO13O/9qtWGPyaaOHq6uhobvWt6ClvGH1nDxP9uWOByPX+GtMN/wDx0KeMuCopuM8Pyt1PJU22wZTSV1wiYN6h+ZvUR+0hv7XhWTyhxP8AxkZZgd6+3/sz+Cd7ivHk/C+d8X0PY7y99bejfRrq0719FPLxaLZf7DWWS9UMNdb6yF0FRTTN6mSscNFpC1PLMMfS33Chu1opbpbKqKroqqJs8FRC7qZKxw21zT7gggrN3jKqYbxh+E8dW5wmyO95JTPoqdnd7GsD2ul/AAyNG/xP0K6FN4cM8wx01BxFzxfMXsD3ufHZ6+gjuUdN1HZETpHDpGye2t+5JPdSvjbgG1YXms2e5Rk11zfNZWGIXu7dvh2EEFsEWyIwQSPU6BIGgSCmTk7V/wAgXCm46/KH4lnGTPFNj1+sL7JHcpu0VNUh7ndLnejQdxjZ/XJ9AStPAhzQ5pBB7gj3UK5KoeM8isVLhXJklpfTXqYxUdLXzCJ8szWk7hdsFrwD2LSD82vfRq+Hwk2Olg+y6LlvlKmsHp9jQ3zpgDf1NBmun21revdTi9iDZZmNjyf8qjx9brHV09Z9i0FRR1c8J6tTmCqe6PqHY9Ic309HFwPcFa/WRLTimGUHj8wXC+M7bTw2rCLPWVV1NMevommjfHqV52XSbfDskk99e2hrtXz+ERXkLjzE+UMImxTMbd8ZQSvErOl5ZJDI3fTJG4d2uGz+0Eg7BIVQt4C5axGDXGPiGyGGCEap7bktOy4xaHozrd9xvt8rP2KyOVOKaLlC121jsmv+OXK1TuqbfcbNVGF8Mjm9JLm+jhrt7EbOiNndffxLc9yQG2VHiiuhthHSTFj0DKkt+gmD+oH+dvakv9Kkfh95SyDkvDb3BmFupKPI8du0tnuBoifImfHr52bJ17gjZHbY0DoQvwvkfxr88M38wzWpJHvozTaKuDjHjLGuJ8EZi+MtqHxuldU1NXVv8yerndrqlkdoAuIAHYAaAVc5J4fMig5YvHIHEvKlbglffOl11pfs6Ovp6l4/7oGPcA13cnuD3c7RGyFdnIt/Lv8AF9ff6OqP7JyqDwbfma4t/pa3+9zKycdw+8WvieTEr/mNdkdwmgnimvNbC1r3mUuO+hp0Gt6tBuzoADeta8XDXG38UnDVqwL7a+2PgHTO+N+G+H8zzJnyfc63a116+8d62pvGCqvB1/1Q5G/rtXf8ES+Ntu3I3O3Ned2W18g1+D4niFwNpEFmij+MrZ2lzXyPleCWN2x2gBogjtsEmzuHOJ/4prPkdD9v/bH21e57z1/C/D+T5rWDy9dburXR97tvfoFG8o4Cun8aFx5D4p5IuGBXy6gG5xso466jrXD0e6F5AD+579+5JABJJuzamKv8RPEtxxPw15Ne7jzhyBdYo44mtt11r4309U50zAGOaGAu9d6B9t+gK0ZxJ+b/AIL/AFeoP7tGqmyXwzZHyJjVbT8ocxXLJbk6EstrhbY6Wit8h9ZvhYngSyBu2hznDXUffWrDyPi2qvfhlZxNRZXVWueO1UttbeaWItf/ACIjHV0B++l4j05vV6OI2lvGasWOijfH+LVGE8Y2TE6u91V7mttK2nfcKoafOR7kbOh7AbOgANlSRYUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBfGqpaWuoZqKtpoammnY6KWCZgeyRhGi1zT2IIOiCvsiCha7wk8cMu89yw6+5jg0s7uqSPGrs6nicf81zXaH4AgD2XTw/wxcd4vmdPl1zrMhzC/UpD6avyevNY6BwOw5jelrdg9wSCQe40e6udFr2qZBERZUREQEREBERAREQEREBERAREQEREER5A4xwblHH22fOLBT3OCMl0EjiWSwOI7mORpDm+g2AdHQ2CqqHhJx2GL4Og5Y5WorYe32dBfgIQ39UDy/T9u1oNFZ5WJiE8bcTYLxNYZrZhdnFL8Q4PqquZ5lqKpw3oySHudbOgNAbOgNlTZEU7UREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBF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pW3LyGfFtpHOfCJekdfQXAEt6t6JAOtdgqtzXiK65JzNQX233OjpsXuPwz8ptsnV5le6jeZaQsABaduIbJ1EbYxo7+it1ElwwUNxzE7lScn5Rmt/npZqu4GKhtrIHOeKWgibtrCXNGnvlfK9wGx9wbPSpkig/MkccsTopWNex4LXNcNhwPqCPoohxri12wnC34rX1VPU0FBVzR2d8b3OeygLuqGKXqaNPjDjH22C1jTvZIExRBEMZxW42bk/N8jqpqZ9LfaijlpWROcXsENKyF3WCAAS5pI0T2+novPyhx83kDEPh6GvNpyChLp7Rd4xt1JMWlpB/Wje0lj2Hs5p9Ngam6K6InhuL3PHuDcfwuouLae526xU1rfXUWniOaOnbEZI/Mb8wDm7HU3v22PZRG8WTnHIMPrMJuFVhkNNWwOoqnJqaaoFQ6F46HvZRGLobKWk6/li0E7/AAVtImmPJa7bS2exUVooWFlLRwMpoWk76WMaGtH+wBVq7HuU8e5ZzDIsWtWIXO3X+WkmYLndqmkmiMNMyEgtZSyNOy0kHq9NK1UTRBrZXcxyXmmZecWwant5kAqJaO/VU0rGe5Yx1E0Od9AXAfiF38p/hb9gt/gV9jfafxEPV9r+Z5Pk9Y83Xl/N19HV0+29bXaRQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERRTkrPbZxhxddc6vFHV1dFbWxulgpA0yu65WRjp6iB6vB7n0BQStFnem8VprKOGrpOBuW6inmYJIporJ1skaRsOa4O0QQQQQvTReLrjuK7wW7NcczTBpJndLJsitLoYif85pcR+0gAe5WvWpsX+i89BX0N0tkFytlZT1lHUMEsNRTyCSOVhGw5rh2IP1C9CyoiIgIiICIiAiKqaTlO71HjEr+IHW6iFrpsfF3bWDq88yGRjek9+np08+2+ysmi1kVa8q5tyLiN4xOmwTjyXKqe515guczHuHwUW2aJ193Yc89bvlb0d/UKylMBERAREQEREBERARVrgmbci5By5mWPZRx5LYrBapui1Xdz3EV7eogOG+zupoD/l+7vpPdWUlmAiIgIiICIiAiIgIiICIiAiIgIvBer5Zscsc96yG7UVqtsHT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F/0bT/6Jv+4Li53i8WbcYZBiE03ktu1vnohLrfll7C0P176JB/cu+xjY4mxsGmtAaB9AF+idDayrL3BPNNj4+xGn4Y5jq4sQyjGwaOOS5nyqatpw4+XJHMfl106HcgOABBOyB2uZuf8AD63jq9YRxndYcyyu82+ekp6exSioZTMfGWvqJJm7YxrGku7n1A3obI/kvOPh45DranHOU7RQWa7W+eSE23NLa1j4wHEB7XvaWt6gAddQPf8AeeHnfLPBGB8Y3jGOGKTHLjlN9pn2+ht+J0jJHzSytLA6R8TdEN6t6JJOgAPcdM56Z1LPBv8AmaYr/pK3++TKt/DdiGA8sDK8m5Xt9DknIn2xPDX0N4d5r6GJpAZGyBx01gJcAddtdP6OlfnBODVvG/h3xbDrkGtr6OlMlU1pDgyaWR0z2bHr0ukLd/gvLm3h64e5CyB1+yjC6aa6P0X1tLPLSSSH028xPb1nXbbtlT2m0xmnxeWfhPEcRtWM4Zi+OUOWPucNRMLTSxslpaZocHGUsHyhznMAa719fZbkVWweHLhWmweTEafA6OK1S1EdVKyOonbLLJHvoL5g/wAxwGzoF2u57K0lLdmLI42Xf4vr7/R1R/ZOVQeDb8zXFv8AS1v97mV5VlJT19vnoauPzKeojdFKzZHU1w0Rsdx2PsuPhuGY1x/hlLimIW37OtFIXuhpvOkm6C95e75pHOcducT3PupvGK7yIigIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDm2fHrBjsNTFj9jttqjqp3VNQygpmQCaV2uqR4YB1POhtx7nQXSREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAXNqsesFdkNFfq2x22pu1CHNpK+amY+emDgQ4RyEdTAQSDoje10kQEREBERAREQEREBERAREQEREBERAREQEREBERBxMgw3EMsjYzKcVst7awaYLlRRVPT+zradLzY7x9geI1DqjFsLx+yzuHS6a32+KB7h9C5rQSpIiaCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIih/JvJeM8Uce1OXZTPIKaNwihp4QHTVUzt9MUbSRtx0T9AASewTsTB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d7LmNp+za+ov1VWxQmoim6ontjDXdUbnAbLT23vt6JOqfV3Iqt4Tq+bquz3081222UVW2vItwoXRnqh13+44jo3rpLvmPffsrSWbMUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFUlHxdf6fxn3Dl19ZbTZKjHRaGU4kf8SJRJG7qLejp6NMPfq36dlbaKy4CIigIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAqk5q4uv8AyRfePa2x1ltp48cyKC71YrZHtMkTHNJbH0sdt/Y6B0PxVtorLgIiKAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgI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MepbxRsf5kbZS5j4nem2PYQ5h12PSRtSdEHExfD8bwyzm2Y1aoqGncQ55DnSSSkANBfI8l7yAAAXEkAAegXYmhhqaaSnqImSwyNLHxyNDmvaRogg9iCPZftEFf4pwjxXhF+kvOL4dSW+rfKZxqWWSOKQjXXHG9xZG7RI2wA6JHorAREt0V9duD+Kb3n0maXLDKOW9ytLZ6lkkkbagH1EsbXBku9DfW0799qfxxxxRNiiY1kbAGtY0aDQPQAewX6RNBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVGeHllqtFpzervtbTQZfVZNXTX5tTI1ssepXCEHZ2IvK6XMP3dPOvVXmoxk3G/H+aVLKnLMLsN6qGN6WT11DHLI1v0DyOoD8Nqyopbl/wAVtix2U4bxNEM2zaqPkwRW5pqaemefdxZvzHD9Ru/T5iPQ8nw+eG292nMJOYeZ6k3XNqt5qIKWd4l+Ce7/ALpIR2MuuzQ35WD0766dD43g2F4dG9mJ4nZbIHjTzbqKOAv/AM4tAJ/eu+r7ZMhn6IiLKiIiAiIgKh/FRjfLOccURYVxhZGVkVwlBusxrIqd3ktILYm+Y5u+p2i479G679R1fCKy5dKo/wAL/CNTwtxVPS3x0D8ju0wqbg6B3U2INGo4Q79LpBcSf1nu1saKvBES3bpBERQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==",alt:"Hirur\u0161ki \u010Delik"})),React.createElement("div",{className:"li-envelope li-front","aria-hidden":"true"},React.createElement("div",{className:"li-side li-left li-paper"}),React.createElement("div",{className:"li-side li-right li-paper"}),React.createElement("div",{className:"li-pocket-shadow"}),React.createElement("div",{className:"li-pocket li-paper"}),React.createElement("svg",{className:"li-seams",viewBox:"0 0 680 440",fill:"none"},React.createElement("path",{d:"M1 438 309 218Q340 199 371 218L679 438",stroke:"#fffdf7",strokeOpacity:".8"}),React.createElement("path",{d:"M1 435 309 215Q340 196 371 215L679 435",stroke:"#87745b",strokeOpacity:".16"})),React.createElement("div",{className:"li-envelope-imprint"},"Jak kao hirur\u0161ki \u010Delik")),React.createElement("div",{className:"li-stage-footer"},React.createElement("span",{className:"li-scroll-cue"},"Skroluj polako da otvori\u0161",React.createElement("span",{className:"li-cue-line","aria-hidden":"true"},React.createElement("i",null))),React.createElement("button",{className:"li-skip",type:"button"},"Presko\u010Di"),React.createElement("button",{className:"li-replay",type:"button"},"Otvori ponovo"),React.createElement("a",{className:"li-shop",href:"/nakit/prsten-riznica/"},"Pogledaj prsten"))))}window.MJKoverta={mount(n){let t=window.ReactDOM.createRoot(n);return t.render(window.React.createElement(Tu,{theme:"light",fontFamily:"Montserrat, Arial, sans-serif"})),t}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
