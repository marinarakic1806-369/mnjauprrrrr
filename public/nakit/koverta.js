(()=>{var wu=window.React;var{useEffect:$a,useRef:Sl,useState:bl,useMemo:xg,useCallback:yg,createElement:Ag,Fragment:Eg}=wu;var sc=0,Oo=1,rc=2;var Us=1,sa=2,Zn=3,$i=0,Pe=1,Xe=2,gn=0,Jn=1,Uo=2,Fo=3,Bo=4,ac=5;var Mn=100,oc=101,lc=102,cc=103,uc=104,hc=200,dc=201,fc=202,pc=203,jo=204,Vo=205,mc=206,gc=207,Mc=208,Ic=209,xc=210,yc=211,Ac=212,Ec=213,Tc=214,br=0,Nr=1,wr=2,Fn=3,Cr=4,Lr=5,Dr=6,_r=7,ra=0,vc=1,Rc=2,Ei=0,Ho=1,ko=2,Wo=3,Fs=4,Go=5,Xo=6,Bs=7;var qo=300,In=301,Kn=302,aa=303,oa=304,Bn=1e3,ei=1001,Pr=1002,we=1003,Sc=1004;var js=1005;var _e=1006,la=1007;var di=1008;var qe=1009,Yo=1010,Qo=1011,$n=1012,ca=1013,fi=1014,ri=1015,pi=1016,ua=1017,ha=1018,xn=1020,Zo=35902,Jo=35899,Ko=1021,$o=1022,mi=1023,Di=1026,Oi=1027,da=1028,fa=1029,tn=1030,pa=1031;var ma=1033,Vs=33776,Hs=33777,ks=33778,Ws=33779,ga=35840,Ma=35841,Ia=35842,xa=35843,ya=36196,Aa=37492,Ea=37496,Ta=37488,va=37489,Gs=37490,Ra=37491,Sa=37808,ba=37809,Na=37810,wa=37811,Ca=37812,La=37813,Da=37814,_a=37815,Pa=37816,za=37817,Oa=37818,Ua=37819,Fa=37820,Ba=37821,ja=36492,Va=36494,Ha=36495,ka=36283,Wa=36284,Xs=36285,Ga=36286;var ps=2300,zr=2301,vr=2302,No=2303,wo=2400,Co=2401,Lo=2402;var bc=3200;var qs=0,Nc=1,gi="",ve="srgb",ms="srgb-linear",gs="linear",le="srgb";var Rr=7680;var wc=519,Cc=512,Lc=513,Dc=514,tl=515,_c=516,Pc=517,el=518,il=519,zc=35044,Xa=35048;var nl="300 es",ii=2e3,jn=2001;function Cu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Lu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Oc(){let n=Vn("canvas");return n.style.display="block",n}var Nl={},Hn=null;function sl(...n){let t="THREE."+n.shift();Hn?Hn("log",t,...n):console.log(t,...n)}function Uc(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ut(...n){n=Uc(n);let t="THREE."+n.shift();if(Hn)Hn("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ft(...n){n=Uc(n);let t="THREE."+n.shift();if(Hn)Hn("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function hn(...n){let t=n.join(" ");t in Nl||(Nl[t]=!0,Ut(...n))}function Fc(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Bc={[br]:br,[wr]:Dr,[Cr]:Cr,[Fn]:Lr,[Nr]:Nr,[Dr]:wr,[_r]:_r,[Lr]:Fn},Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var to=Math.PI/180,Or=180/Math.PI;function Ys(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Jt(n,t,e){return Math.max(t,Math.min(e,n))}function Du(n,t){return(n%t+t)%t}function eo(n,t,e){return(1-e)*n+e*t}function jc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _u(n,t){if(t.constructor===Float32Array)return n;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Pu(n,t){if(t.constructor===Float32Array)return n;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Xt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],M=r[a+2],y=r[a+3];if(f!==y||c!==u||l!==d||h!==M){let p=c*u+l*d+h*M+f*y;p<0&&(u=-u,d=-d,M=-M,y=-y,p=-p);let m=1-o;if(p<.9995){let v=Math.acos(p),S=Math.sin(v);m=Math.sin(m*v)/S,o=Math.sin(o*v)/S,c=c*m+u*o,l=l*m+d*o,h=h*m+M*o,f=f*m+y*o}else{c=c*m+u*o,l=l*m+d*o,h=h*m+M*o,f=f*m+y*o;let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],M=r[a+3];return t[e]=o*M+h*f+c*d-l*u,t[e+1]=c*M+h*u+l*f-o*d,t[e+2]=l*M+h*d+o*u-c*f,t[e+3]=h*M-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),u=c(i/2),d=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*M,this._y=l*d*f-u*h*M,this._z=l*h*M+u*d*f,this._w=l*h*f-u*d*M;break;case"YXZ":this._x=u*h*f+l*d*M,this._y=l*d*f-u*h*M,this._z=l*h*M-u*d*f,this._w=l*h*f+u*d*M;break;case"ZXY":this._x=u*h*f-l*d*M,this._y=l*d*f+u*h*M,this._z=l*h*M+u*d*f,this._w=l*h*f-u*d*M;break;case"ZYX":this._x=u*h*f-l*d*M,this._y=l*d*f+u*h*M,this._z=l*h*M-u*d*f,this._w=l*h*f+u*d*M;break;case"YZX":this._x=u*h*f+l*d*M,this._y=l*d*f+u*h*M,this._z=l*h*M-u*d*f,this._w=l*h*f-u*d*M;break;case"XZY":this._x=u*h*f-l*d*M,this._y=l*d*f-u*h*M,this._z=l*h*M+u*d*f,this._w=l*h*f+u*d*M;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new P,wl=new Ge,jt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],M=i[8],y=s[0],p=s[3],m=s[6],v=s[1],S=s[4],T=s[7],b=s[2],E=s[5],g=s[8];return r[0]=a*y+o*v+c*b,r[3]=a*p+o*S+c*E,r[6]=a*m+o*T+c*g,r[1]=l*y+h*v+f*b,r[4]=l*p+h*S+f*E,r[7]=l*m+h*T+f*g,r[2]=u*y+d*v+M*b,r[5]=u*p+d*S+M*E,r[8]=u*m+d*T+M*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,M=e*f+i*u+s*d;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/M;return t[0]=f*y,t[1]=(s*l-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return hn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(no.makeScale(t,e)),this}rotate(t){return hn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(no.makeRotation(-t)),this}translate(t,e){return hn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},no=new jt,Cl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zu(){let n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:t,whitePoint:i,transfer:gs,toXYZ:Cl,fromXYZ:Ll,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Cl,fromXYZ:Ll,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}}),n}var te=zu();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Un(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var En,Ur=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{En===void 0&&(En=Vn("canvas")),En.width=t.width,En.height=t.height;let s=En.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=En}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vn("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ou=0,kn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function so(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ur.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var Uu=0,ro=new P,Be=class n extends Ii{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ei,s=ei,r=_e,a=di,o=mi,c=qe,l=n.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Ys(),this.name="",this.source=new kn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bn:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bn:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=qo;Be.DEFAULT_ANISOTROPY=1;var Ie=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],M=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(M-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(M+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,T=(d+1)/2,b=(m+1)/2,E=(h+u)/4,g=(f+y)/4,R=(M+p)/4;return S>T&&S>b?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=E/i,r=g/i):T>b?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=E/s,r=R/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=g/r,s=R/r),this.set(i,s,r,e),this}let v=Math.sqrt((p-M)*(p-M)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-M)/v,this.y=(f-y)/v,this.z=(u-h)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fr=class extends Ii{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Be({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:_e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new kn(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ce=class extends Fr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ms=class extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Br=class extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ce=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,c,l,h,f,u,d,M,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,f,u,d,M,y,p)}set(t,e,i,s,r,a,o,c,l,h,f,u,d,M,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=M,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Tn.setFromMatrixColumn(t,0).length(),r=1/Tn.setFromMatrixColumn(t,1).length(),a=1/Tn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,M=o*h,y=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+M*l,e[5]=u-y*l,e[9]=-o*c,e[2]=y-u*l,e[6]=M+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,M=l*h,y=l*f;e[0]=u+y*o,e[4]=M*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-M,e[6]=y+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,M=l*h,y=l*f;e[0]=u-y*o,e[4]=-a*f,e[8]=M+d*o,e[1]=d+M*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,M=o*h,y=o*f;e[0]=c*h,e[4]=M*l-d,e[8]=u*l+y,e[1]=c*f,e[5]=y*l+u,e[9]=d*l-M,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,M=o*c,y=o*l;e[0]=c*h,e[4]=y-u*f,e[8]=M*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+M,e[10]=u-y*f}else if(t.order==="XZY"){let u=a*c,d=a*l,M=o*c,y=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+y,e[5]=a*h,e[9]=d*f-M,e[2]=M*f-d,e[6]=o*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fu,t,Bu)}lookAt(t,e,i){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),ji.crossVectors(i,Ze),ji.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),ji.crossVectors(i,Ze)),ji.normalize(),er.crossVectors(Ze,ji),s[0]=ji.x,s[4]=er.x,s[8]=Ze.x,s[1]=ji.y,s[5]=er.y,s[9]=Ze.y,s[2]=ji.z,s[6]=er.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],M=i[2],y=i[6],p=i[10],m=i[14],v=i[3],S=i[7],T=i[11],b=i[15],E=s[0],g=s[4],R=s[8],O=s[12],w=s[1],L=s[5],U=s[9],V=s[13],C=s[2],j=s[6],H=s[10],F=s[14],$=s[3],W=s[7],X=s[11],tt=s[15];return r[0]=a*E+o*w+c*C+l*$,r[4]=a*g+o*L+c*j+l*W,r[8]=a*R+o*U+c*H+l*X,r[12]=a*O+o*V+c*F+l*tt,r[1]=h*E+f*w+u*C+d*$,r[5]=h*g+f*L+u*j+d*W,r[9]=h*R+f*U+u*H+d*X,r[13]=h*O+f*V+u*F+d*tt,r[2]=M*E+y*w+p*C+m*$,r[6]=M*g+y*L+p*j+m*W,r[10]=M*R+y*U+p*H+m*X,r[14]=M*O+y*V+p*F+m*tt,r[3]=v*E+S*w+T*C+b*$,r[7]=v*g+S*L+T*j+b*W,r[11]=v*R+S*U+T*H+b*X,r[15]=v*O+S*V+T*F+b*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],M=t[3],y=t[7],p=t[11],m=t[15],v=c*d-l*u,S=o*d-l*f,T=o*u-c*f,b=a*d-l*h,E=a*u-c*h,g=a*f-o*h;return e*(y*v-p*S+m*T)-i*(M*v-p*b+m*E)+s*(M*S-y*b+m*g)-r*(M*T-y*E+p*g)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],M=t[12],y=t[13],p=t[14],m=t[15],v=e*o-i*a,S=e*c-s*a,T=e*l-r*a,b=i*c-s*o,E=i*l-r*o,g=s*l-r*c,R=h*y-f*M,O=h*p-u*M,w=h*m-d*M,L=f*p-u*y,U=f*m-d*y,V=u*m-d*p,C=v*V-S*U+T*L+b*w-E*O+g*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/C;return t[0]=(o*V-c*U+l*L)*j,t[1]=(s*U-i*V-r*L)*j,t[2]=(y*g-p*E+m*b)*j,t[3]=(u*E-f*g-d*b)*j,t[4]=(c*w-a*V-l*O)*j,t[5]=(e*V-s*w+r*O)*j,t[6]=(p*T-M*g-m*S)*j,t[7]=(h*g-u*T+d*S)*j,t[8]=(a*U-o*w+l*R)*j,t[9]=(i*w-e*U-r*R)*j,t[10]=(M*E-y*T+m*v)*j,t[11]=(f*T-h*E-d*v)*j,t[12]=(o*O-a*L-c*R)*j,t[13]=(e*L-i*O+s*R)*j,t[14]=(y*S-M*b-p*v)*j,t[15]=(h*b-f*S+u*v)*j,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,M=r*f,y=a*h,p=a*f,m=o*f,v=c*l,S=c*h,T=c*f,b=i.x,E=i.y,g=i.z;return s[0]=(1-(y+m))*b,s[1]=(d+T)*b,s[2]=(M-S)*b,s[3]=0,s[4]=(d-T)*E,s[5]=(1-(u+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(M+S)*g,s[9]=(p-v)*g,s[10]=(1-(u+y))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Tn.set(s[0],s[1],s[2]).length(),o=Tn.set(s[4],s[5],s[6]).length(),c=Tn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let l=1/a,h=1/o,f=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=ii,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),M,y;if(c)M=r/(a-r),y=a*r/(a-r);else if(o===ii)M=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===jn)M=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ii,c=!1){let l=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),M,y;if(c)M=1/(a-r),y=a/(a-r);else if(o===ii)M=-2/(a-r),y=-(a+r)/(a-r);else if(o===jn)M=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=M,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Tn=new P,oi=new ce,Fu=new P(0,0,0),Bu=new P(1,1,1),ji=new P,er=new P,Ze=new P,Dl=new ce,_l=new Ge,xi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ju=0,Pl=new P,vn=new Ge,Si=new ce,ir=new P,os=new P,Vu=new P,Hu=new Ge,zl=new P(1,0,0),Ol=new P(0,1,0),Ul=new P(0,0,1),Fl={type:"added"},ku={type:"removed"},Rn={type:"childadded",child:null},ao={type:"childremoved",child:null},Le=class n extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new xi,i=new Ge,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new jt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vn.setFromAxisAngle(t,e),this.quaternion.multiply(vn),this}rotateOnWorldAxis(t,e){return vn.setFromAxisAngle(t,e),this.quaternion.premultiply(vn),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(os,ir,this.up):Si.lookAt(ir,os,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),vn.setFromRotationMatrix(Si),this.quaternion.premultiply(vn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fl),Rn.child=t,this.dispatchEvent(Rn),Rn.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ku),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fl),Rn.child=t,this.dispatchEvent(Rn),Rn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),M=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),M.length>0&&(i.nodes=M)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wu={type:"move"},Wn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,M=.005;l.inputState.pinching&&u>d+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},nr={h:0,s:0,l:0};function oo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Du(t,1),e=Jt(e,0,1),i=Jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=oo(a,r,t+1/3),this.g=oo(a,r,t),this.b=oo(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=ve){function i(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let i=Vc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return te.workingToColorSpace(Fe.copy(this),t),Math.round(Jt(Fe.r*255,0,255))*65536+Math.round(Jt(Fe.g*255,0,255))*256+Math.round(Jt(Fe.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Fe.copy(this),e);let i=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=ve){te.workingToColorSpace(Fe.copy(this),t);let e=Fe.r,i=Fe.g,s=Fe.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(nr);let i=eo(Vi.h,nr.h,e),s=eo(Vi.s,nr.s,e),r=eo(Vi.l,nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new Ht;Ht.NAMES=Vc;var _i=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new P,bi=new P,lo=new P,Ni=new P,Sn=new P,bn=new P,Bl=new P,co=new P,uo=new P,ho=new P,fo=new Ie,po=new Ie,mo=new Ie,Gi=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),bi.subVectors(i,e),lo.subVectors(t,e);let a=li.dot(li),o=li.dot(bi),c=li.dot(lo),l=bi.dot(bi),h=bi.dot(lo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,M=(a*h-o*c)*u;return r.set(1-d-M,M,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(a,Ni.y),c.addScaledVector(o,Ni.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,i),mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),bi.subVectors(t,e),li.cross(bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),li.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Sn.subVectors(s,i),bn.subVectors(r,i),co.subVectors(t,i);let c=Sn.dot(co),l=bn.dot(co);if(c<=0&&l<=0)return e.copy(i);uo.subVectors(t,s);let h=Sn.dot(uo),f=bn.dot(uo);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(Sn,a);ho.subVectors(t,r);let d=Sn.dot(ho),M=bn.dot(ho);if(M>=0&&d<=M)return e.copy(r);let y=d*l-c*M;if(y<=0&&l>=0&&M<=0)return o=l/(l-M),e.copy(i).addScaledVector(bn,o);let p=h*M-d*f;if(p<=0&&f-h>=0&&d-M>=0)return Bl.subVectors(r,s),o=(f-h)/(f-h+(d-M)),e.copy(s).addScaledVector(Bl,o);let m=1/(p+y+u);return a=y*m,o=u*m,e.copy(i).addScaledVector(Sn,a).addScaledVector(bn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),rr.subVectors(this.max,ls),Nn.subVectors(t.a,ls),wn.subVectors(t.b,ls),Cn.subVectors(t.c,ls),Hi.subVectors(wn,Nn),ki.subVectors(Cn,wn),on.subVectors(Nn,Cn);let e=[0,-Hi.z,Hi.y,0,-ki.z,ki.y,0,-on.z,on.y,Hi.z,0,-Hi.x,ki.z,0,-ki.x,on.z,0,-on.x,-Hi.y,Hi.x,0,-ki.y,ki.x,0,-on.y,on.x,0];return!go(e,Nn,wn,Cn,rr)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Nn,wn,Cn,rr))?!1:(ar.crossVectors(Hi,ki),e=[ar.x,ar.y,ar.z],go(e,Nn,wn,Cn,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new P,new P,new P,new P,new P,new P,new P,new P],ci=new P,sr=new yi,Nn=new P,wn=new P,Cn=new P,Hi=new P,ki=new P,on=new P,ls=new P,rr=new P,ar=new P,ln=new P;function go(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ln.fromArray(n,r);let o=s.x*Math.abs(ln.x)+s.y*Math.abs(ln.y)+s.z*Math.abs(ln.z),c=t.dot(ln),l=e.dot(ln),h=i.dot(ln);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Te=new P,or=new Xt,Gu=0,He=class extends Ii{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=t!==void 0?rl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):_u(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Pu(t,this.array)}};var xs=class extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ys=class extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ke=class extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xu=new yi,cs=new P,Mo=new P,Pi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Xu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(cs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Mo)),this.expandByPoint(cs.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qu=0,ti=new ce,Io=new Le,Ln=new P,Je=new yi,us=new yi,Ne=new P,ni=class n extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cu(t)?ys:xs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(Je.min,us.min),Je.expandByPoint(Ne),Ne.addVectors(Je.max,us.max),Je.expandByPoint(Ne)):(Je.expandByPoint(us.min),Je.expandByPoint(us.max))}Je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(Ln.fromBufferAttribute(t,l),Ne.add(Ln)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new He(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new P,c[O]=new P;let h=new P,f=new P,u=new P,d=new Xt,M=new Xt,y=new Xt,p=new P,m=new P;function v(O,w,L){l[O]=l[w]=l[L]=1,h.fromBufferAttribute(i,O),f.fromBufferAttribute(i,w),u.fromBufferAttribute(i,L),d.fromBufferAttribute(r,O),M.fromBufferAttribute(r,w),y.fromBufferAttribute(r,L),f.sub(h),u.sub(h),M.sub(d),y.sub(d);let U=1/(M.x*y.y-y.x*M.y);isFinite(U)&&(p.copy(f).multiplyScalar(y.y).addScaledVector(u,-M.y).multiplyScalar(U),m.copy(u).multiplyScalar(M.x).addScaledVector(f,-y.x).multiplyScalar(U),o[O].add(p),o[w].add(p),o[L].add(p),c[O].add(m),c[w].add(m),c[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let O=0,w=S.length;O<w;++O){let L=S[O],U=L.start,V=L.count;for(let C=U,j=U+V;C<j;C+=3)v(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let T=new P,b=new P,E=new P,g=new P;function R(O){E.fromBufferAttribute(s,O),g.copy(E);let w=o[O];T.copy(w),T.sub(E.multiplyScalar(E.dot(w))).normalize(),b.crossVectors(g,w);let U=b.dot(c[O])<0?-1:1;a.setXYZW(O,T.x,T.y,T.z,U)}for(let O=0,w=i.count;O<w;++O)l[O]&&R(O);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){let M=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,M),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,M=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?d=c[y]*o.data.stride+o.offset:d=c[y]*h;for(let m=0;m<h;m++)u[M++]=l[d++]}return new He(u,h,f)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xo=new P,Yu=new P,Qu=new jt,ui=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=xo.subVectors(i,e).cross(Yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(xo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Qu.getNormalMatrix(t),s=this.coplanarPoint(xo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zu=0,Ai=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Jn,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Vo,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Fn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ci=new P,yo=new P,lr=new P,cr=new P,As=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yo.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(yo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=cr.dot(this.direction),c=-cr.dot(lr),l=cr.lengthSq(),h=Math.abs(1-a*a),f,u,d,M;if(h>0)if(f=a*c-o,u=a*o-c,M=r*h,f>=0)if(u>=-M)if(u<=M){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-M?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=M?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yo).addScaledVector(lr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Ci.subVectors(t.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,M=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=i.x-a.x,v=i.y-a.y,S=i.z-a.z,T=Math.abs(c),b=Math.abs(l),E=Math.abs(h),g,R,O,w,L,U,V,C,j,H,F,$;if(T>=b&&T>=E?(O=c,U=f,j=M,$=m,c>=0?(g=l,R=h,w=u,L=d,V=y,C=p,H=v,F=S):(g=h,R=l,w=d,L=u,V=p,C=y,H=S,F=v)):b>=E?(O=l,U=u,j=y,$=v,l>=0?(g=h,R=c,w=d,L=f,V=p,C=M,H=S,F=m):(g=c,R=h,w=f,L=d,V=M,C=p,H=m,F=S)):(O=h,U=d,j=p,$=S,h>=0?(g=c,R=l,w=f,L=u,V=M,C=y,H=m,F=v):(g=l,R=c,w=u,L=f,V=y,C=M,H=v,F=m)),O===0)return null;let W=g/O,X=R/O,tt=1/O,ft=w-W*U,St=L-X*U,G=V-W*j,ut=C-X*j,Tt=H-W*$,_t=F-X*$,gt=Tt*ut-_t*G,ct=ft*_t-St*Tt,Zt=G*St-ut*ft;if(s){if(gt<0||ct<0||Zt<0)return null}else if((gt<0||ct<0||Zt<0)&&(gt>0||ct>0||Zt>0))return null;let st=gt+ct+Zt;if(st===0)return null;let yt=tt*(gt*U+ct*j+Zt*$);return(st>0?yt<0:yt>0)?null:this.at(yt/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xi=class extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jl=new ce,cn=new As,ur=new Pi,Vl=new P,hr=new P,dr=new P,fr=new P,Ao=new P,pr=new P,Hl=new P,mr=new P,de=class extends Le{constructor(t=new ni,e=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Ao.fromBufferAttribute(f,t),a?pr.addScaledVector(Ao,h):pr.addScaledVector(Ao.sub(e),h))}e.add(pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),cn.copy(t.ray).recast(t.near),!(ur.containsPoint(cn.origin)===!1&&(cn.intersectSphere(ur,Vl)===null||cn.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(jl.copy(r).invert(),cn.copy(t.ray).applyMatrix4(jl),!(i.boundingBox!==null&&cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,y=u.length;M<y;M++){let p=u[M],m=a[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let T=v,b=S;T<b;T+=3){let E=o.getX(T),g=o.getX(T+1),R=o.getX(T+2);s=gr(this,m,t,i,l,h,f,E,g,R),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let M=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=M,m=y;p<m;p+=3){let v=o.getX(p),S=o.getX(p+1),T=o.getX(p+2);s=gr(this,a,t,i,l,h,f,v,S,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,y=u.length;M<y;M++){let p=u[M],m=a[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let T=v,b=S;T<b;T+=3){let E=T,g=T+1,R=T+2;s=gr(this,m,t,i,l,h,f,E,g,R),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let M=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=M,m=y;p<m;p+=3){let v=p,S=p+1,T=p+2;s=gr(this,a,t,i,l,h,f,v,S,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ju(n,t,e,i,s,r,a,o){let c;if(t.side===Pe?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===$i,o),c===null)return null;mr.copy(o),mr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(mr);return l<e.near||l>e.far?null:{distance:l,point:mr.clone(),object:n}}function gr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,hr),n.getVertexPosition(c,dr),n.getVertexPosition(l,fr);let h=Ju(n,t,e,i,hr,dr,fr,Hl);if(h){let f=new P;Gi.getBarycoord(Hl,hr,dr,fr,f),s&&(h.uv=Gi.getInterpolatedAttribute(s,o,c,l,f,new Xt)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,o,c,l,f,new Xt)),a&&(h.normal=Gi.getInterpolatedAttribute(a,o,c,l,f,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};Gi.getNormal(hr,dr,fr,u.normal),h.face=u,h.barycoord=f}return h}var Es=class extends Be{constructor(t=null,e=1,i=1,s,r,a,o,c,l=we,h=we,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ts=class extends He{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Dn=new ce,kl=new ce,Mr=[],Wl=new yi,Ku=new ce,hs=new de,ds=new Pi,vs=class extends de{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ku)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),Wl.copy(t.boundingBox).applyMatrix4(Dn),this.boundingBox.union(Wl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),ds.copy(t.boundingSphere).applyMatrix4(Dn),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(i),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dn),kl.multiplyMatrices(i,Dn),hs.matrixWorld=kl,hs.raycast(t,Mr);for(let a=0,o=Mr.length;a<o;a++){let c=Mr[a];c.instanceId=r,c.object=this,e.push(c)}Mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Es(new Float32Array(s*this.count),s,this.count,da,ri));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},un=new Pi,$u=new Xt(.5,.5),Ir=new P,qi=class{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],M=r[8],y=r[9],p=r[10],m=r[11],v=r[12],S=r[13],T=r[14],b=r[15];if(s[0].setComponents(l-a,d-h,m-M,b-v).normalize(),s[1].setComponents(l+a,d+h,m+M,b+v).normalize(),s[2].setComponents(l+o,d+f,m+y,b+S).normalize(),s[3].setComponents(l-o,d-f,m-y,b-S).normalize(),i)s[4].setComponents(c,u,p,T).normalize(),s[5].setComponents(l-c,d-u,m-p,b-T).normalize();else if(s[4].setComponents(l-c,d-u,m-p,b-T).normalize(),e===ii)s[5].setComponents(l+c,d+u,m+p,b+T).normalize();else if(e===jn)s[5].setComponents(c,u,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(t){un.center.set(0,0,0);let e=$u.distanceTo(t.center);return un.radius=.7071067811865476+e,un.applyMatrix4(t.matrixWorld),this.intersectsSphere(un)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gl=new ce,jr=class n{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Gl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new qi),i[s].setFromProjectionMatrix(Gl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new qi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Gn=class extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Vr=new P,Hr=new P,Xl=new ce,fs=new As,xr=new Pi,Eo=new P,ql=new P,kr=class extends Le{constructor(t=new ni,e=new Gn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Vr.fromBufferAttribute(e,s-1),Hr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Vr.distanceTo(Hr);t.setAttribute("lineDistance",new Ke(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;Xl.copy(s).invert(),fs.copy(t.ray).applyMatrix4(Xl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),M=Math.min(h.count,a.start+a.count);for(let y=d,p=M-1;y<p;y+=l){let m=h.getX(y),v=h.getX(y+1),S=yr(this,t,fs,c,m,v,y);S&&e.push(S)}if(this.isLineLoop){let y=h.getX(M-1),p=h.getX(d),m=yr(this,t,fs,c,y,p,M-1);m&&e.push(m)}}else{let d=Math.max(0,a.start),M=Math.min(u.count,a.start+a.count);for(let y=d,p=M-1;y<p;y+=l){let m=yr(this,t,fs,c,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=yr(this,t,fs,c,M-1,d,M-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yr(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Vr.fromBufferAttribute(o,s),Hr.fromBufferAttribute(o,r),e.distanceSqToSegment(Vr,Hr,Eo,ql)>i)return;Eo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Eo);if(!(l<t.near||l>t.far))return{distance:l,point:ql.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Rs=class extends kr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Ss=class extends Be{constructor(t=[],e=In,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dn=class extends Be{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zi=class extends Be{constructor(t,e,i=fi,s,r,a,o=we,c=we,l,h=Di,f=1){if(h!==Di&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},bs=class extends zi{constructor(t,e=fi,i=In,s,r,a=we,o=we,c,l=Di){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ns=class extends Be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yi=class n extends ni{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;M("z","y","x",-1,-1,i,e,t,a,r,0),M("z","y","x",1,-1,i,e,-t,a,r,1),M("x","z","y",1,1,t,i,e,s,a,2),M("x","z","y",1,-1,t,i,-e,s,a,3),M("x","y","z",1,-1,t,e,i,s,r,4),M("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(f,2));function M(y,p,m,v,S,T,b,E,g,R,O){let w=T/g,L=b/R,U=T/2,V=b/2,C=E/2,j=g+1,H=R+1,F=0,$=0,W=new P;for(let X=0;X<H;X++){let tt=X*L-V;for(let ft=0;ft<j;ft++){let St=ft*w-U;W[y]=St*v,W[p]=tt*S,W[m]=C,l.push(W.x,W.y,W.z),W[y]=0,W[p]=0,W[m]=E>0?1:-1,h.push(W.x,W.y,W.z),f.push(ft/g),f.push(1-X/R),F+=1}}for(let X=0;X<R;X++)for(let tt=0;tt<g;tt++){let ft=u+tt+j*X,St=u+tt+j*(X+1),G=u+(tt+1)+j*(X+1),ut=u+(tt+1)+j*X;c.push(ft,St,ut),c.push(St,G,ut),$+=6}o.addGroup(d,$,O),d+=$,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Xt:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,s=[],r=[],a=[],o=new P,c=new ce;for(let d=0;d<=t;d++){let M=d/t;s[d]=this.getTangentAt(M,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let M=Math.acos(Jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,M))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let M=1;M<=t;M++)r[M].applyMatrix4(c.makeRotationAxis(s[M],d*M)),a[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function al(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Yl=new P,Ql=new P,To=new al,vo=new al,Ro=new al,ws=class extends fn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ql.subVectors(s[0],s[1]).add(s[0]),l=Ql);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,M=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),M<1e-4&&(M=y),p<1e-4&&(p=y),To.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,M,y,p),vo.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,M,y,p),Ro.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,M,y,p)}else this.curveType==="catmullrom"&&(To.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),vo.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Ro.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(To.calc(c),vo.calc(c),Ro.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function th(n,t){let e=1-n;return e*e*e*t}function eh(n,t){let e=1-n;return 3*e*e*n*t}function ih(n,t){return 3*(1-n)*n*n*t}function nh(n,t){return n*n*n*t}function So(n,t,e,i,s){return th(n,t)+eh(n,e)+ih(n,i)+nh(n,s)}var Xn=class extends fn{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(So(t,s.x,r.x,a.x,o.x),So(t,s.y,r.y,a.y,o.y),So(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}};var si=class n extends ni{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],M=[],y=[],p=[];for(let m=0;m<h;m++){let v=m*u-a;for(let S=0;S<l;S++){let T=S*f-r;M.push(T,-v,0),y.push(0,0,1),p.push(S/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){let S=v+l*m,T=v+l*(m+1),b=v+1+l*(m+1),E=v+1+l*m;d.push(S,T,E),d.push(T,b,E)}this.setIndex(d),this.setAttribute("position",new Ke(M,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function yn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Zl(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Zl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function je(n){let t={};for(let e=0;e<n.length;e++){let i=yn(n[e]);for(let s in i)t[s]=i[s]}return t}function Zl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sh(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ol(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Hc={clone:yn,merge:je},rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yn(t.uniforms),this.uniformsGroups=sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ce().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wr=class extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cs=class extends pn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ls=class extends Ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=ra,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gr=class extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xr=class extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _n(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ar(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Qi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qr=class extends Qi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Co:r=t,o=2*e-i;break;case Lo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Co:a=t,c=2*i-e;break;case Lo:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,M=(i-e)/(s-e),y=M*M,p=y*M,m=-u*p+2*u*y-u*M,v=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*M+1,S=(-1-d)*p+(1.5+d)*y+.5*M,T=d*p-d*y;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+v*a[l+b]+S*a[c+b]+T*a[f+b];return r}},Yr=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},Qr=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zr=class extends Qi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let M=(i-e)/(s-e),y=1-M;for(let p=0;p!==o;++p)r[p]=a[l+p]*y+a[c+p]*M;return r}let u=o*2,d=t-1;for(let M=0;M!==o;++M){let y=a[l+M],p=a[c+M],m=d*u+M*2,v=f[m],S=f[m+1],T=t*u+M*2,b=h[T],E=h[T+1],g=lh(i,e,v,b,s);r[M]=kc(g,y,S,E,p)}return r}};function kc(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function oh(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function lh(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=kc(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=oh(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var $e=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_n(e,this.TimeBufferType),this.values=_n(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:_n(t.times,Array),values:_n(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ar(t.settings)&&(i.settings={inTangents:_n(t.settings.inTangents,Array),outTangents:_n(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ps:e=this.InterpolantFactoryMethodDiscrete;break;case zr:e=this.InterpolantFactoryMethodLinear;break;case vr:e=this.InterpolantFactoryMethodSmooth;break;case No:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ut("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return vr;case this.InterpolantFactoryMethodBezier:return No}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Ar(this.settings)&&(Jl(this.settings.inTangents,t),Jl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ar(this.settings)&&(Kl(this.settings.inTangents,t),Kl(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ft("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ft("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Lu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ft("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===vr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*i,u=f-i,d=f+i;for(let M=0;M!==i;++M){let y=e[f+M];if(y!==e[u+M]||y!==e[d+M]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ar(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Jl(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Kl(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=zr;var Zi=class extends $e{constructor(t,e,i){super(t,e,i)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ps;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Jr.prototype.ValueTypeName="color";var Kr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Kr.prototype.ValueTypeName="number";var $r=class extends Qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Ge.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ds=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends $e{constructor(t,e,i){super(t,e,i)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ps;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};ta.prototype.ValueTypeName="vector";var Sr={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&($l(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!$l(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function $l(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ea=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],M=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wc=new ea,qn=class{constructor(t){this.manager=t!==void 0?t:Wc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pn=new WeakMap,ia=class extends qn{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Sr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=Pn.get(a);f===void 0&&(f=[],Pn.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=Vn("img");function c(){h(),e&&e(this);let f=Pn.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}Pn.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),Sr.remove(`image:${t}`);let u=Pn.get(this)||[];for(let d=0;d<u.length;d++){let M=u[d];M.onError&&M.onError(f)}Pn.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Sr.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var _s=class extends qn{constructor(t){super(t)}load(t,e,i,s){let r=new Be,a=new ia(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},Ps=class extends Le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var bo=new ce,tc=new P,ec=new P,zs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(tc),ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ec),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(bo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===jn||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Er=new P,Tr=new Ge,Mi=new P,mn=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Er,Tr,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Er,Tr,Mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Er,Tr,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Er,Tr,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new P,ic=new Xt,nc=new Xt,We=class extends mn{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,ic,nc),e.subVectors(nc,ic)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Do=class extends zs{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}},Os=class extends Ps{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Do}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ki=class extends mn{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_o=class extends zs{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yn=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new _o}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var zn=-90,On=1,Qn=class extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(zn,On,t,e);s.layers=this.layers,this.add(s);let r=new We(zn,On,t,e);r.layers=this.layers,this.add(r);let a=new We(zn,On,t,e);a.layers=this.layers,this.add(a);let o=new We(zn,On,t,e);o.layers=this.layers,this.add(o);let c=new We(zn,On,t,e);c.layers=this.layers,this.add(c);let l=new We(zn,On,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===jn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}},na=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ll="\\[\\]\\.:\\/",ch=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",uh="[^"+ll.replace("\\.","")+"]",hh=/((?:WC+[\/:])*)/.source.replace("WC",cl),dh=/(WCOD+)?/.source.replace("WCOD",uh),fh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),ph=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),mh=new RegExp("^"+hh+dh+fh+ph+"$"),gh=["material","materials","bones","map"],Po=class{constructor(t,e,i){let s=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ch,"")}static parseTrackName(t){let e=mh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);gh.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Ft("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Po;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vg=new Float32Array(1);var zo=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function ul(n,t,e,i){let s=Mh(i);switch(e){case Ko:return n*t;case da:return n*t/s.components*s.byteLength;case fa:return n*t/s.components*s.byteLength;case tn:return n*t*2/s.components*s.byteLength;case pa:return n*t*2/s.components*s.byteLength;case $o:return n*t*3/s.components*s.byteLength;case mi:return n*t*4/s.components*s.byteLength;case ma:return n*t*4/s.components*s.byteLength;case Vs:case Hs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ks:case Ws:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ma:case xa:return Math.max(n,16)*Math.max(t,8)/4;case ga:case Ia:return Math.max(n,8)*Math.max(t,8)/2;case ya:case Aa:case Ta:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Gs:case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ja:case Va:case Ha:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ka:case Wa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xs:case Ga:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mh(n){switch(n){case qe:case Yo:return{byteLength:1,components:1};case $n:case Qo:case pi:return{byteLength:2,components:1};case ua:case ha:return{byteLength:2,components:4};case fi:case ca:case ri:return{byteLength:4,components:1};case Zo:case Jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function du(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function xh(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,M)=>d.start-M.start);let u=0;for(let d=1;d<f.length;d++){let M=f[u],y=f[d];y.start<=M.start+M.count+1?M.count=Math.max(M.count,y.start+y.count-M.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,M=f.length;d<M;d++){let y=f[d];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var yh=`#ifdef USE_ALPHAHASH
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
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
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
} // validated`,_h=`#ifdef USE_IRIDESCENCE
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
#endif`,Ph=`#ifdef USE_BUMPMAP
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
#endif`,Vh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kh=`#define PI 3.141592653589793
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
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`vec4 LinearTransferOETF( in vec4 value ) {
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
}`,Id=`
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Td=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
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
#endif`,_d=`#if defined( USE_MORPHCOLORS )
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
#endif`,Pd=`#ifdef USE_MORPHNORMALS
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
#endif`,Vd=`#ifndef FLAT_SHADED
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
#endif`,kd=`#ifdef USE_CLEARCOAT
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,Tf=`uniform float backgroundBlurriness;
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`#include <common>
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
}`,_f=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Vf=`#define NORMAL
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
}`,kf=`#define PHONG
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
}`,Yf=`uniform float size;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:yh,alphahash_pars_fragment:Ah,alphamap_fragment:Eh,alphamap_pars_fragment:Th,alphatest_fragment:vh,alphatest_pars_fragment:Rh,aomap_fragment:Sh,aomap_pars_fragment:bh,batching_pars_vertex:Nh,batching_vertex:wh,begin_vertex:Ch,beginnormal_vertex:Lh,bsdfs:Dh,iridescence_fragment:_h,bumpmap_pars_fragment:Ph,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Fh,color_fragment:Bh,color_pars_fragment:jh,color_pars_vertex:Vh,color_vertex:Hh,common:kh,defaultnormal_vertex:Wh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Xh,emissivemap_fragment:qh,emissivemap_pars_fragment:Yh,colorspace_fragment:Qh,colorspace_pars_fragment:Zh,envmap_fragment:Jh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:$h,envmap_pars_vertex:td,envmap_physical_pars_fragment:hd,envmap_vertex:ed,fog_vertex:id,fog_pars_vertex:nd,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:ud,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:Md,lights_fragment_begin:Id,lights_fragment_maps:xd,lights_fragment_end:yd,lightprobes_pars_fragment:Ad,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:Rd,map_fragment:Sd,map_pars_fragment:bd,map_particle_fragment:Nd,map_particle_pars_fragment:wd,metalnessmap_fragment:Cd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Dd,morphcolor_vertex:_d,morphnormal_vertex:Pd,morphtarget_pars_vertex:zd,morphtarget_vertex:Od,normal_fragment_begin:Ud,normal_fragment_maps:Fd,normal_pars_fragment:Bd,normal_pars_vertex:jd,normal_vertex:Vd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:Yd,premultiplied_alpha_fragment:Qd,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:Kd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:uf,specularmap_pars_fragment:hf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:Mf,uv_vertex:If,worldpos_vertex:xf,background_vert:yf,background_frag:Af,backgroundCube_vert:Ef,backgroundCube_frag:Tf,cube_vert:vf,cube_frag:Rf,depth_vert:Sf,depth_frag:bf,distance_vert:Nf,distance_frag:wf,equirect_vert:Cf,equirect_frag:Lf,linedashed_vert:Df,linedashed_frag:_f,meshbasic_vert:Pf,meshbasic_frag:zf,meshlambert_vert:Of,meshlambert_frag:Uf,meshmatcap_vert:Ff,meshmatcap_frag:Bf,meshnormal_vert:jf,meshnormal_frag:Vf,meshphong_vert:Hf,meshphong_frag:kf,meshphysical_vert:Wf,meshphysical_frag:Gf,meshtoon_vert:Xf,meshtoon_frag:qf,points_vert:Yf,points_frag:Qf,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:Kf,sprite_frag:$f},vt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},vi={basic:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:je([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:je([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:je([vt.points,vt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:je([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:je([vt.common,vt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:je([vt.sprite,vt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:je([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:je([vt.lights,vt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};vi.physical={uniforms:je([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var qa={r:0,b:0,g:0},tp=new ce,fu=new jt;fu.set(-1,0,0,0,1,0,0,0,1);function ep(n,t,e,i,s,r){let a=new Ht(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let T=v.backgroundBlurriness>0;S=t.get(S,T)}return S}function M(v){let S=!1,T=d(v);T===null?p(a,o):T&&T.isColor&&(p(T,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,S){let T=d(S);T&&T.isCubeTexture?(l===void 0&&(l=new de(new Yi(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:yn(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(S.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fu),l.material.toneMapped=te.getTransfer(T.colorSpace)!==le,(h!==T||f!==T.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new de(new si(2,2),new ke({name:"BackgroundMaterial",uniforms:yn(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=te.getTransfer(T.colorSpace)!==le,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,S){v.getRGB(qa,ol(n)),e.buffers.color.setClear(qa.r,qa.g,qa.b,S,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:M,addToRenderList:y,dispose:m}}function ip(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,U,V,C,j){let H=!1,F=f(L,C,V,U);r!==F&&(r=F,l(r.object)),H=d(L,C,V,j),H&&M(L,C,V,j),j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,T(L,U,V,C),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function f(L,U,V,C){let j=C.wireframe===!0,H=i[U.id];H===void 0&&(H={},i[U.id]=H);let F=L.isInstancedMesh===!0?L.id:0,$=H[F];$===void 0&&($={},H[F]=$);let W=$[V.id];W===void 0&&(W={},$[V.id]=W);let X=W[j];return X===void 0&&(X=u(c()),W[j]=X),X}function u(L){let U=[],V=[],C=[];for(let j=0;j<e;j++)U[j]=0,V[j]=0,C[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:C,object:L,attributes:{},index:null}}function d(L,U,V,C){let j=r.attributes,H=U.attributes,F=0,$=V.getAttributes();for(let W in $)if($[W].location>=0){let tt=j[W],ft=H[W];if(ft===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),tt===void 0||tt.attribute!==ft||ft&&tt.data!==ft.data)return!0;F++}return r.attributesNum!==F||r.index!==C}function M(L,U,V,C){let j={},H=U.attributes,F=0,$=V.getAttributes();for(let W in $)if($[W].location>=0){let tt=H[W];tt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));let ft={};ft.attribute=tt,tt&&tt.data&&(ft.data=tt.data),j[W]=ft,F++}r.attributes=j,r.attributesNum=F,r.index=C}function y(){let L=r.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function p(L){m(L,0)}function m(L,U){let V=r.newAttributes,C=r.enabledAttributes,j=r.attributeDivisors;V[L]=1,C[L]===0&&(n.enableVertexAttribArray(L),C[L]=1),j[L]!==U&&(n.vertexAttribDivisor(L,U),j[L]=U)}function v(){let L=r.newAttributes,U=r.enabledAttributes;for(let V=0,C=U.length;V<C;V++)U[V]!==L[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function S(L,U,V,C,j,H,F){F===!0?n.vertexAttribIPointer(L,U,V,j,H):n.vertexAttribPointer(L,U,V,C,j,H)}function T(L,U,V,C){y();let j=C.attributes,H=V.getAttributes(),F=U.defaultAttributeValues;for(let $ in H){let W=H[$];if(W.location>=0){let X=j[$];if(X===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let tt=X.normalized,ft=X.itemSize,St=t.get(X);if(St===void 0)continue;let G=St.buffer,ut=St.type,Tt=St.bytesPerElement,_t=ut===n.INT||ut===n.UNSIGNED_INT||X.gpuType===ca;if(X.isInterleavedBufferAttribute){let gt=X.data,ct=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Zt=X.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)m(W.location+st,gt.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let st=0;st<W.locationSize;st++)p(W.location+st);n.bindBuffer(n.ARRAY_BUFFER,G);for(let st=0;st<W.locationSize;st++)S(W.location+st,ft/W.locationSize,ut,tt,ct*Tt,(Zt+ft/W.locationSize*st)*Tt,_t)}else{if(X.isInstancedBufferAttribute){for(let gt=0;gt<W.locationSize;gt++)m(W.location+gt,X.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let gt=0;gt<W.locationSize;gt++)p(W.location+gt);n.bindBuffer(n.ARRAY_BUFFER,G);for(let gt=0;gt<W.locationSize;gt++)S(W.location+gt,ft/W.locationSize,ut,tt,ft*Tt,ft/W.locationSize*gt*Tt,_t)}}else if(F!==void 0){let tt=F[$];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(W.location,tt);break;case 3:n.vertexAttrib3fv(W.location,tt);break;case 4:n.vertexAttrib4fv(W.location,tt);break;default:n.vertexAttrib1fv(W.location,tt)}}}}v()}function b(){O();for(let L in i){let U=i[L];for(let V in U){let C=U[V];for(let j in C){let H=C[j];for(let F in H)h(H[F].object),delete H[F];delete C[j]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let U=i[L.id];for(let V in U){let C=U[V];for(let j in C){let H=C[j];for(let F in H)h(H[F].object),delete H[F];delete C[j]}}delete i[L.id]}function g(L){for(let U in i){let V=i[U];for(let C in V){let j=V[C];if(j[L.id]===void 0)continue;let H=j[L.id];for(let F in H)h(H[F].object),delete H[F];delete j[L.id]}}}function R(L){for(let U in i){let V=i[U],C=L.isInstancedMesh===!0?L.id:0,j=V[C];if(j!==void 0){for(let H in j){let F=j[H];for(let $ in F)h(F[$].object),delete F[$];delete j[H]}delete V[C],Object.keys(V).length===0&&delete i[U]}}}function O(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:R,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:p,disableUnusedAttributes:v}}function np(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==mi&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let R=g===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==qe&&g!==ri&&!R&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ut("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:M,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:T,maxSamples:b,samples:E}}function rp(n){let t=this,e=null,i=0,s=!1,r=!1,a=new ui,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let M=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||M===null||M.length===0||r&&!p)r?h(null):l();else{let v=r?0:i,S=v*4,T=m.clippingState||null;c.value=T,T=h(M,u,S,d);for(let b=0;b!==S;++b)T[b]=e[b];m.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,M){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=c.value,M!==!0||p===null){let m=d+y*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,T=d;S!==y;++S,T+=4)a.copy(f[S]).applyMatrix4(v,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Js=class extends Ce{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ss(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yi(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:gn});r.uniforms.tEquirect.value=e;let a=new de(s,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=_e),new Qn(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Gc=256,ap=3,op=20,pu=256,mu=16,lp=3,cp=new P,up=new Ht,es=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qn(1,10,null),this._boxMesh=new de(new Yi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=cp}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,M=c.autoClearStencil,y=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(t.background=c.getClearColor(up));let p=new Qn(i,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=M,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gc,jc(t))}_fromTexture(t,e){t.mapping===In||t.mapping===Kn?this._setSize(t.image.length===0?Gc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Xc(t,!1,!1),i=Math.log2(t)-ap;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Xc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===In||t.mapping===Kn?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=hp(),this._integrationMaterial=dp());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/mu);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-lp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(pu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=fp());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Xc(n,t,e){return new Js(n,{minFilter:di,generateMipmaps:t,type:pi,colorSpace:ms,depthBuffer:e})}function $s(n,t,e){return new ke({name:n,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:Pe,blending:gn,depthTest:!1,depthWrite:!1})}function hp(){return $s("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pu}u

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
	`)}function dp(){return $s("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mu}},`

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
	`)}function qc(){return $s("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function pp(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===aa||d===oa)if(t.has(u)){let M=t.get(u).texture;return o(M,u.mapping)}else{let M=u.image;if(M&&M.height>0){let y=new Js(M.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,M=d===aa||d===oa,y=d===In||d===Kn;if(M||y){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new es(n)),p=M?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return M&&v&&v.height>0||y&&v&&c(v)?(i===null&&(i=new es(n)),p=M?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===aa?u.mapping=In:d===oa&&(u.mapping=Kn),u}function c(u){let d=0,M=6;for(let y=0;y<M;y++)u[y]!==void 0&&d++;return d===M}function l(u){let d=u.target;d.removeEventListener("dispose",l);let M=t.get(d);M!==void 0&&(t.delete(d),M.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let M=e.get(d);M!==void 0&&(e.delete(d),M.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function mp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&hn("WebGLRenderer: "+i+" extension not supported."),s}}}function gp(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(M=>delete s[M]);function o(M){c(M.target)}function c(M){M.index!==null&&t.remove(M.index);for(let p in M.attributes)t.remove(M.attributes[p]);M.removeEventListener("dispose",o),delete s[M.id],a.unregister(M);let y=r.get(M);y&&(t.remove(y),r.delete(M)),i.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,e.memory.geometries--}function l(M,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(M){let y=M.attributes;for(let p in y)t.update(y[p],n.ARRAY_BUFFER)}function f(M){let y=M.index,p=M.attributes.position,m=0;if(p===void 0)return;let v=y!==null?y.array.length:p.array.length/3-1,S=p.count>=65535?ys:xs,T=new S(Math.ceil(v/3)*6,1),b=T.array;if(y!==null){let g=y.array;m=y.version;for(let R=0,O=0;R<v;R+=3){let w=g[R+0],L=g[R+1],U=g[R+2];b[O++]=w,b[O++]=L,b[O++]=L,b[O++]=U,b[O++]=U,b[O++]=w}}else{m=p.version;for(let g=0,R=0;g<v;g+=3){let O=g+0,w=g+1,L=g+2;b[R++]=O,b[R++]=w,b[R++]=w,b[R++]=L,b[R++]=L,b[R++]=O}}T.version=m;let E=r.get(M);E&&t.remove(E),r.set(M,T)}function u(M){let y=r.get(M);if(y){let p=M.index;p!==null&&y.version<p.version&&f(M)}else f(M);return r.get(M)}function d(){for(let M in s){let y=s[M].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function Mp(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=u[p];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ip(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Ft("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xp(n,t,e){let i=new WeakMap,s=new Ie;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let O=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;d===!0&&(S=1),M===!0&&(S=2),y===!0&&(S=3);let T=o.attributes.position.count*S,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let E=new Float32Array(T*b*4*f),g=new Ms(E,T,b,f);g.type=ri,g.needsUpdate=!0;let R=S*4;for(let w=0;w<f;w++){let L=p[w],U=m[w],V=v[w],C=T*b*4*w;for(let j=0;j<L.count;j++){let H=j*R;d===!0&&(s.fromBufferAttribute(L,j),E[C+H+0]=s.x,E[C+H+1]=s.y,E[C+H+2]=s.z,E[C+H+3]=0),M===!0&&(s.fromBufferAttribute(U,j),E[C+H+4]=s.x,E[C+H+5]=s.y,E[C+H+6]=s.z,E[C+H+7]=0),y===!0&&(s.fromBufferAttribute(V,j),E[C+H+8]=s.x,E[C+H+9]=s.y,E[C+H+10]=s.z,E[C+H+11]=V.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new Xt(T,b)},i.set(o,u),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let M=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function yp(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ap={[Ho]:"LINEAR_TONE_MAPPING",[ko]:"REINHARD_TONE_MAPPING",[Wo]:"CINEON_TONE_MAPPING",[Fs]:"ACES_FILMIC_TONE_MAPPING",[Xo]:"AGX_TONE_MAPPING",[Bs]:"NEUTRAL_TONE_MAPPING",[Go]:"CUSTOM_TONE_MAPPING"};function Ep(n,t,e,i,s,r){let a=new Ce(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new ni;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let f=new Wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new de(h,f),d=new Ki(-1,1,1,-1,0,1),M=null,y=null,p=!1,m,v=null,S=[],T=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),c!==null&&c.setSize(b,E);for(let g=0;g<S.length;g++){let R=S[g];R.setSize&&R.setSize(b,E)}},this.setEffects=function(b){S=b,T=S.length>0&&S[0].isRenderPass===!0;let E=a.width,g=a.height;S.length>0&&o===null&&(o=new Ce(E,g,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Ce(E,g,{type:pi,depthBuffer:!1,stencilBuffer:!1}));let R=s===!0&&S.some(O=>O.needsDepthTexture===!0);R!==(a.depthTexture!==null)&&(R===!0&&l===null&&(l=new zi(E,g),r===!0&&(l.format=Oi,l.type=xn)),a.dispose(),a.depthTexture=R?l:null,a.resolveDepthBuffer=R,a.storeMultisampledDepthBuffer=R);for(let O=0;O<S.length;O++){let w=S[O];w.setSize&&w.setSize(E,g),R&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(l)}},this.begin=function(b,E){if(p||b.toneMapping===Ei&&S.length===0)return!1;if(v=E,E!==null){let g=E.width,R=E.height;(a.width!==g||a.height!==R)&&this.setSize(g,R)}return T===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Ei,!0},this.hasRenderPass=function(){return T},this.end=function(b,E){b.toneMapping=m,p=!0;let g=a,R=o;for(let O=0;O<S.length;O++){let w=S[O];w.enabled!==!1&&(w.render(b,R,g,E),w.needsSwap!==!1&&(g=R,R=R===o?c:o))}if(M!==b.outputColorSpace||y!==b.toneMapping){M=b.outputColorSpace,y=b.toneMapping,f.defines={},te.getTransfer(M)===le&&(f.defines.SRGB_TRANSFER="");let O=Ap[y];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,b.setRenderTarget(v),b.render(u,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var gu=new Be,Mu=new zi(1,1),Iu=new bs(1),xu=new Ms,yu=new Br,Au=new Ss,Qc=[],Zc=[],Jc=new Float32Array(16),Kc=new Float32Array(9),$c=new Float32Array(4);function is(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Qc[s];if(r===void 0&&(r=new Float32Array(s),Qc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Qa(n,t){let e=Zc[t];e===void 0&&(e=new Int32Array(t),Zc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Tp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function Rp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function Sp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function bp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Re(e,i))return;$c.set(i),n.uniformMatrix2fv(this.addr,!1,$c),Se(e,i)}}function Np(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Re(e,i))return;Kc.set(i),n.uniformMatrix3fv(this.addr,!1,Kc),Se(e,i)}}function wp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Re(e,i))return;Jc.set(i),n.uniformMatrix4fv(this.addr,!1,Jc),Se(e,i)}}function Cp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Lp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function Dp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function _p(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function Pp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function Op(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function Up(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function Za(n){return n.version===0&&(n.compareFunction=il,n.needsUpdate=!0),n}function Fp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Za(Mu):r=gu,e.setTexture2D(t||r,s)}function Bp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||yu,s)}function jp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Za(Iu):r=Au,e.setTextureCube(t||r,s)}function Vp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xu,s)}function Hp(n){switch(n){case 5126:return Tp;case 35664:return vp;case 35665:return Rp;case 35666:return Sp;case 35674:return bp;case 35675:return Np;case 35676:return wp;case 5124:case 35670:return Cp;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return _p;case 5125:return Pp;case 36294:return zp;case 36295:return Op;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Vp}}function kp(n,t){n.uniform1fv(this.addr,t)}function Wp(n,t){let e=is(t,this.size,2);n.uniform2fv(this.addr,e)}function Gp(n,t){let e=is(t,this.size,3);n.uniform3fv(this.addr,e)}function Xp(n,t){let e=is(t,this.size,4);n.uniform4fv(this.addr,e)}function qp(n,t){let e=is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Yp(n,t){let e=is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Qp(n,t){let e=is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zp(n,t){n.uniform1iv(this.addr,t)}function Jp(n,t){n.uniform2iv(this.addr,t)}function Kp(n,t){n.uniform3iv(this.addr,t)}function $p(n,t){n.uniform4iv(this.addr,t)}function tm(n,t){n.uniform1uiv(this.addr,t)}function em(n,t){n.uniform2uiv(this.addr,t)}function im(n,t){n.uniform3uiv(this.addr,t)}function nm(n,t){n.uniform4uiv(this.addr,t)}function sm(n,t,e){let i=this.cache,s=t.length,r=Qa(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Za(Mu):a=gu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function rm(n,t,e){let i=this.cache,s=t.length,r=Qa(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yu,r[a])}function am(n,t,e){let i=this.cache,s=t.length,r=Qa(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Za(Iu):a=Au;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function om(n,t,e){let i=this.cache,s=t.length,r=Qa(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xu,r[a])}function lm(n){switch(n){case 5126:return kp;case 35664:return Wp;case 35665:return Gp;case 35666:return Xp;case 35674:return qp;case 35675:return Yp;case 35676:return Qp;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return $p;case 5125:return tm;case 36294:return em;case 36295:return im;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}var fl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Hp(e.type)}},pl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}},ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},hl=/(\w+)(\])?(\[|\.)?/g;function tu(n,t){n.seq.push(t),n.map[t.id]=t}function cm(n,t,e){let i=n.name,s=i.length;for(hl.lastIndex=0;;){let r=hl.exec(i),a=hl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){tu(e,l===void 0?new fl(o,n,t):new pl(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new ml(o),tu(e,f)),e=f}}}var ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);cm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function eu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var um=37297,hm=0;function dm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var iu=new jt;function fm(n){te._getMatrix(iu,te.workingColorSpace,n);let t=`mat3( ${iu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case gs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dm(n.getShaderSource(t),o)}else return r}function pm(n,t){let e=fm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var mm={[Ho]:"Linear",[ko]:"Reinhard",[Wo]:"Cineon",[Fs]:"ACESFilmic",[Xo]:"AgX",[Bs]:"Neutral",[Go]:"Custom"};function gm(n,t){let e=mm[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ya=new P;function Mm(){te.getLuminanceCoefficients(Ya);let n=Ya.x.toFixed(4),t=Ya.y.toFixed(4),e=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function xm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ym(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Zs(n){return n!==""}function su(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ru(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(Am,Em)}function Em(n,t){let e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return gl(e)}var Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(n){return n.replace(Tm,vm)}function vm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ou(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Rm={[Us]:"SHADOWMAP_TYPE_PCF",[Zn]:"SHADOWMAP_TYPE_VSM"};function Sm(n){return Rm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bm={[Kn]:"ENVMAP_MODE_REFRACTION"};function Nm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":bm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wm={[ra]:"ENVMAP_BLENDING_MULTIPLY",[vc]:"ENVMAP_BLENDING_MIX",[Rc]:"ENVMAP_BLENDING_ADD"};function Cm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wm[n.combine]||"ENVMAP_BLENDING_NONE"}function Lm(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Sm(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Nm(e),f=Cm(e),u=Im(e),d=xm(r),M=s.createProgram(),y,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Zs).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(y=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Ei?gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,pm("linearToOutputTexel",e.outputColorSpace),Mm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),a=gl(a),a=su(a,e),a=ru(a,e),o=gl(o),o=su(o,e),o=ru(o,e),a=au(a),o=au(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+y+a,S=m+p+o,T=eu(s,s.VERTEX_SHADER,v),b=eu(s,s.FRAGMENT_SHADER,S);s.attachShader(M,T),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function E(w){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(M)||"",U=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(b)||"",C=L.trim(),j=U.trim(),H=V.trim(),F=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,T,b);else{let W=nu(s,T,"vertex"),X=nu(s,b,"fragment");Ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+C+`
`+W+`
`+X)}else C!==""?Ut("WebGLProgram: Program Info Log:",C):(j===""||H==="")&&($=!1);$&&(w.diagnostics={runnable:F,programLog:C,vertexShader:{log:j,prefix:y},fragmentShader:{log:H,prefix:p}})}s.deleteShader(T),s.deleteShader(b),g=new ts(s,M),R=ym(s,M)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let R;this.getAttributes=function(){return R===void 0&&E(this),R};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(M,um)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=b,this}var Dm=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Il(t),e.set(t,i)),i}},Il=class{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}};function _m(n){return n===tn||n===Gs||n===Xs}function Pm(n,t,e,i,s,r){let a=new Is,o=new Ml,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return c.add(g),g===0?"uv":`uv${g}`}function M(g,R,O,w,L,U){let V=w.fog,C=L.geometry,j=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?w.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,F=t.get(g.envMap||j,H),$=u[g.type],W=i.precision;g.precision!==null&&(W=i.getMaxPrecision(g.precision),W!==g.precision&&Ut("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));let X=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,tt=X!==void 0?X.length:0,ft=0;C.morphAttributes.position!==void 0&&(ft=1),C.morphAttributes.normal!==void 0&&(ft=2),C.morphAttributes.color!==void 0&&(ft=3);let St,G,ut,Tt;if($){let At=vi[$];St=At.vertexShader,G=At.fragmentShader}else{St=g.vertexShader,G=g.fragmentShader;let At=o.getVertexShaderStage(g),re=o.getFragmentShaderStage(g);o.update(g,At,re),ut=At.id,Tt=re.id}let _t=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),ct=L.isInstancedMesh===!0,Zt=L.isBatchedMesh===!0,st=!!g.map,yt=!!g.matcap,Et=!!F,mt=Et&&F.isPMREMTexture===!0,zt=!!g.aoMap,Ot=!!g.lightMap,ne=!!g.bumpMap&&g.wireframe===!1,qt=!!g.normalMap,me=!!g.displacementMap,Bt=!!g.emissiveMap,ye=!!g.metalnessMap,ee=!!g.roughnessMap,ie=g.anisotropy>0,_=g.clearcoat>0,ge=g.diffuseRoughness>0,ae=g.dispersion>0,xt=g.retroreflectivity>0,it=g.iridescence>0,Gt=g.sheen>0,pt=g.transmission>0,bt=ie&&!!g.anisotropyMap,A=_&&!!g.clearcoatMap,I=_&&!!g.clearcoatNormalMap,z=_&&!!g.clearcoatRoughnessMap,et=ge&&!!g.diffuseRoughnessMap,Z=it&&!!g.iridescenceMap,rt=it&&!!g.iridescenceThicknessMap,lt=Gt&&!!g.sheenColorMap,Q=Gt&&!!g.sheenRoughnessMap,J=!!g.specularMap,dt=!!g.specularColorMap,N=!!g.specularIntensityMap,K=pt&&!!g.transmissionMap,Y=pt&&!!g.thicknessMap,ot=!!g.gradientMap,at=!!g.alphaMap,ht=g.alphaTest>0,wt=!!g.alphaHash,Vt=!!g.extensions,nt=Ei;g.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(nt=n.toneMapping);let Ct=mt?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,kt={shaderID:$,shaderType:g.type,shaderName:g.name,vertexShader:St,fragmentShader:G,defines:g.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:Zt,batchingColor:Zt&&L._colorsTexture!==null,instancing:ct,instancingColor:ct&&L.instanceColor!==null,instancingMorph:ct&&L.morphTexture!==null,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:st,matcap:yt,envMap:Et,envMapMode:Et&&F.mapping,envMapPMREM:mt,envMapMaxLod:mt?Ct.length-1:null,envMapSize:mt?Ct[0].width:null,aoMap:zt,lightMap:Ot,bumpMap:ne,normalMap:qt,displacementMap:me,emissiveMap:Bt,normalMapObjectSpace:qt&&g.normalMapType===Nc,normalMapTangentSpace:qt&&g.normalMapType===qs,packedNormalMap:qt&&g.normalMapType===qs&&_m(g.normalMap.format),metalnessMap:ye,roughnessMap:ee,anisotropy:ie,anisotropyMap:bt,clearcoat:_,clearcoatMap:A,clearcoatNormalMap:I,clearcoatRoughnessMap:z,diffuseRoughness:ge,diffuseRoughnessMap:et,dispersion:ae,retroreflection:xt,iridescence:it,iridescenceMap:Z,iridescenceThicknessMap:rt,sheen:Gt,sheenColorMap:lt,sheenRoughnessMap:Q,specularMap:J,specularColorMap:dt,specularIntensityMap:N,transmission:pt,transmissionMap:K,thicknessMap:Y,gradientMap:ot,opaque:g.transparent===!1&&g.blending===Jn&&g.alphaToCoverage===!1,alphaMap:at,alphaTest:ht,alphaHash:wt,combine:g.combine,mapUv:st&&d(g.map.channel),aoMapUv:zt&&d(g.aoMap.channel),lightMapUv:Ot&&d(g.lightMap.channel),bumpMapUv:ne&&d(g.bumpMap.channel),normalMapUv:qt&&d(g.normalMap.channel),displacementMapUv:me&&d(g.displacementMap.channel),emissiveMapUv:Bt&&d(g.emissiveMap.channel),metalnessMapUv:ye&&d(g.metalnessMap.channel),roughnessMapUv:ee&&d(g.roughnessMap.channel),anisotropyMapUv:bt&&d(g.anisotropyMap.channel),clearcoatMapUv:A&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:I&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:Z&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:Q&&d(g.sheenRoughnessMap.channel),specularMapUv:J&&d(g.specularMap.channel),specularColorMapUv:dt&&d(g.specularColorMap.channel),specularIntensityMapUv:N&&d(g.specularIntensityMap.channel),transmissionMapUv:K&&d(g.transmissionMap.channel),thicknessMapUv:Y&&d(g.thicknessMap.channel),alphaMapUv:at&&d(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(qt||ie),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(st||at),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&qt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ft,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:U.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:st&&g.map.isVideoTexture===!0&&te.getTransfer(g.map.colorSpace)===le,decodeVideoTextureEmissive:Bt&&g.emissiveMap.isVideoTexture===!0&&te.getTransfer(g.emissiveMap.colorSpace)===le,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Xe,flipSided:g.side===Pe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Vt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&g.extensions.multiDraw===!0||Zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function y(g){let R=[];if(g.shaderID?R.push(g.shaderID):(R.push(g.customVertexShaderID),R.push(g.customFragmentShaderID)),g.defines!==void 0)for(let O in g.defines)R.push(O),R.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(p(R,g),m(R,g),R.push(n.outputColorSpace)),R.push(g.customProgramCacheKey),R.join()}function p(g,R){g.push(R.precision),g.push(R.outputColorSpace),g.push(R.envMapMode),g.push(R.envMapPMREM),g.push(R.envMapMaxLod),g.push(R.envMapSize),g.push(R.mapUv),g.push(R.alphaMapUv),g.push(R.lightMapUv),g.push(R.aoMapUv),g.push(R.bumpMapUv),g.push(R.normalMapUv),g.push(R.displacementMapUv),g.push(R.emissiveMapUv),g.push(R.metalnessMapUv),g.push(R.roughnessMapUv),g.push(R.anisotropyMapUv),g.push(R.clearcoatMapUv),g.push(R.clearcoatNormalMapUv),g.push(R.clearcoatRoughnessMapUv),g.push(R.diffuseRoughnessMapUv),g.push(R.iridescenceMapUv),g.push(R.iridescenceThicknessMapUv),g.push(R.sheenColorMapUv),g.push(R.sheenRoughnessMapUv),g.push(R.specularMapUv),g.push(R.specularColorMapUv),g.push(R.specularIntensityMapUv),g.push(R.transmissionMapUv),g.push(R.thicknessMapUv),g.push(R.combine),g.push(R.fogExp2),g.push(R.sizeAttenuation),g.push(R.morphTargetsCount),g.push(R.numSunLights),g.push(R.numDirLights),g.push(R.numPointLights),g.push(R.numSpotLights),g.push(R.numSpotLightMaps),g.push(R.numHemiLights),g.push(R.numRectAreaLights),g.push(R.numSunLightShadows),g.push(R.numDirLightShadows),g.push(R.numPointLightShadows),g.push(R.numSpotLightShadows),g.push(R.numSpotLightShadowsWithMaps),g.push(R.numLightProbes),g.push(R.numLightProbeGrids),g.push(R.shadowMapType),g.push(R.toneMapping),g.push(R.numClippingPlanes),g.push(R.numClipIntersection),g.push(R.depthPacking)}function m(g,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.diffuseRoughness&&a.enable(25),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){let R=u[g.type],O;if(R){let w=vi[R];O=Hc.clone(w.uniforms)}else O=g.uniforms;return O}function S(g,R){let O=h.get(R);return O!==void 0?++O.usedTimes:(O=new Lm(n,R,g,s),l.push(O),h.set(R,O)),O}function T(g){if(--g.usedTimes===0){let R=l.indexOf(g);l[R]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function b(g){o.remove(g)}function E(){o.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:v,acquireProgram:S,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:E}}function zm(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Om(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function lu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,M,y,p,m){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:M,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},n[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=M,v.materialVariant=a(u),v.groupOrder=y,v.renderOrder=u.renderOrder,v.z=p,v.group=m),t++,v}function c(u,d,M,y,p,m,v){v.reversedDepth===!0&&(p=-p);let S=o(u,d,M,y,p,m);M.transmission>0?i.push(S):M.transparent===!0?s.push(S):e.push(S)}function l(u,d,M,y,p,m){let v=o(u,d,M,y,p,m);M.transmission>0?i.unshift(v):M.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||Om),i.length>1&&i.sort(d||lu),s.length>1&&s.sort(d||lu)}function f(){for(let u=t,d=n.length;u<d;u++){let M=n[u];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Um(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new cu,n.set(i,[a])):s>=r.length?(a=new cu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Fm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ht};break;case"SpotLight":e={position:new P,direction:new P,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Bm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var jm=0;function Vm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Hm(n){let t=new Fm,e=Bm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let s=new P,r=new ce,a=new ce;function o(l){let h=0,f=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,M=0,y=0,p=0,m=0,v=0,S=0,T=0,b=0,E=0,g=0,R=0,O=0,w=0;l.sort(Vm);for(let U=0,V=l.length;U<V;U++){let C=l[U],j=C.color,H=C.intensity,F=C.distance,$=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===tn?$=C.shadow.map.texture:$=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=j.r*H,f+=j.g*H,u+=j.b*H;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],H);w++}else if(C.isSunLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,tt=e.get(C);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[M]=tt,i.sunShadowMap[M]=$;let ft=X.getViewportCount();for(let St=0;St<ft;St++)i.sunShadowMatrix[y+St]=X.getMatrix(St),i.sunShadowCascade[y+St]=X._cascadeData[St];y+=ft,M++}i.sun[d]=W,d++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,tt=e.get(C);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,i.directionalShadow[p]=tt,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=C.shadow.matrix,b++}i.directional[p]=W,p++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(j).multiplyScalar(H),W.distance=F,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[v]=W;let X=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,X.updateMatrices(C),C.castShadow&&O++),i.spotLightMatrix[v]=X.matrix,C.castShadow){let tt=e.get(C);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,i.spotShadow[v]=tt,i.spotShadowMap[v]=$,g++}v++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(j).multiplyScalar(H),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[S]=W,S++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let X=C.shadow,tt=e.get(C);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,tt.shadowCameraNear=X.camera.near,tt.shadowCameraFar=X.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=C.shadow.matrix,E++}i.point[m]=W,m++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(H),W.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[T]=W,T++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let L=i.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==S||L.hemiLength!==T||L.numSunShadows!==M||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==g||L.numSpotMaps!==R||L.numLightProbes!==w)&&(i.sun.length=d,i.directional.length=p,i.spot.length=v,i.rectArea.length=S,i.point.length=m,i.hemi.length=T,i.sunShadow.length=M,i.sunShadowMap.length=M,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+R-O,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=w,L.sunLength=d,L.directionalLength=p,L.pointLength=m,L.spotLength=v,L.rectAreaLength=S,L.hemiLength=T,L.numSunShadows=M,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=g,L.numSpotMaps=R,L.numLightProbes=w,i.version=jm++)}function c(l,h){let f=0,u=0,d=0,M=0,y=0,p=0,m=h.matrixWorldInverse;for(let v=0,S=l.length;v<S;v++){let T=l[v];if(T.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(m),f++}else if(T.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(T.isSpotLight){let b=i.spot[M];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),M++}else if(T.isRectAreaLight){let b=i.rectArea[y];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function uu(n){let t=new Hm(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function c(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function km(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new uu(n),t.set(s,[o])):r>=a.length?(o=new uu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Wm=`void main() {
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
}`,Xm=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],qm=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],hu=new ce,Qs=new P,dl=new P;function Ym(n,t,e){let i=new qi,s=new Xt,r=new Xt,a=new Ie,o=new Gr,c=new Xr,l={},h=e.maxTextureSize,f={[$i]:Pe,[Pe]:$i,[Xe]:Xe},u=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Wm,fragmentShader:Gm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let M=new ni;M.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new de(M,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let m=this.type;this.render=function(E,g,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===sa&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let O=n.getRenderTarget(),w=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(gn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=m!==this.type;V&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(j=>j.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,j=E.length;C<j;C++){let H=E[C],F=H.shadow;if(F===void 0){Ut("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let $=F.getFrameExtents();s.multiply($),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,F.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=W,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Zn){if(H.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ce(s.x,s.y,{format:tn,type:pi,minFilter:_e,magFilter:_e,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new zi(s.x,s.y,ri),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=Di,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=we,F.map.depthTexture.magFilter=we}else H.isPointLight?(F.map=new Js(s.x),F.map.depthTexture=new bs(s.x,fi)):(F.map=new Ce(s.x,s.y),F.map.depthTexture=new zi(s.x,s.y,fi)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=Di,this.type===Us?(F.map.depthTexture.compareFunction=W?el:tl,F.map.depthTexture.minFilter=_e,F.map.depthTexture.magFilter=_e):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=we,F.map.depthTexture.magFilter=we);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let X=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,R);let tt=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:R.layers;for(let ft=0;ft<X;ft++){let St=F.getCamera(ft);if(H.isPointLight){let G=F.camera,ut=F.matrix,Tt=H.distance||G.far;Tt!==G.far&&(G.far=Tt,G.updateProjectionMatrix()),Qs.setFromMatrixPosition(H.matrixWorld),G.position.copy(Qs),dl.copy(G.position),dl.add(Xm[ft]),G.up.copy(qm[ft]),G.lookAt(dl),G.updateMatrixWorld(),ut.makeTranslation(-Qs.x,-Qs.y,-Qs.z),hu.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),F._frustum.setFromProjectionMatrix(hu,G.coordinateSystem,G.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ft),n.clear();else{ft===0&&(n.setRenderTarget(F.map),n.clear());let G=F.getViewport(ft);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),U.viewport(a)}i=F.getFrustum(ft),T(g,R,St,H,tt,this.type)}F.isPointLightShadow!==!0&&this.type===Zn&&v(F,R),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(O,w,L)};function v(E,g){let R=t.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ce(s.x,s.y,{format:tn,type:pi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(g,null,R,u,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(g,null,R,d,y,null)}function S(E,g,R,O){let w=null,L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)w=L;else if(w=R.isPointLight===!0?c:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let U=w.uuid,V=g.uuid,C=l[U];C===void 0&&(C={},l[U]=C);let j=C[V];j===void 0&&(j=w.clone(),C[V]=j,g.addEventListener("dispose",b)),w=j}if(w.visible=g.visible,w.wireframe=g.wireframe,O===Zn?w.side=g.shadowSide!==null?g.shadowSide:g.side:w.side=g.shadowSide!==null?g.shadowSide:f[g.side],w.alphaMap=g.alphaMap,w.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,w.map=g.map,w.clipShadows=g.clipShadows,w.clippingPlanes=g.clippingPlanes,w.clipIntersection=g.clipIntersection,w.displacementMap=g.displacementMap,w.displacementScale=g.displacementScale,w.displacementBias=g.displacementBias,w.wireframeLinewidth=g.wireframeLinewidth,w.linewidth=g.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let U=n.properties.get(w);U.light=R}return w}function T(E,g,R,O,w,L){if(E.visible===!1)return;if(E.layers.test(w)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Zn)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let C=t.update(E),j=E.material;if(Array.isArray(j)){let H=C.groups;for(let F=0,$=H.length;F<$;F++){let W=H[F],X=j[W.materialIndex];if(X&&X.visible){let tt=S(E,X,O,L);E.onBeforeShadow(n,E,g,R,C,tt,W),n.renderBufferDirect(R,null,C,tt,E,W),E.onAfterShadow(n,E,g,R,C,tt,W)}}}else if(j.visible){let H=S(E,j,O,L);E.onBeforeShadow(n,E,g,R,C,H,null),n.renderBufferDirect(R,null,C,H,E,null),E.onAfterShadow(n,E,g,R,C,H,null)}}let V=E.children;for(let C=0,j=V.length;C<j;C++)T(V[C],g,R,O,w,L)}function b(E){E.target.removeEventListener("dispose",b);for(let R in l){let O=l[R],w=E.target.uuid;w in O&&(O[w].dispose(),delete O[w])}}}function Qm(n,t){function e(){let N=!1,K=new Ie,Y=null,ot=new Ie(0,0,0,0);return{setMask:function(at){Y!==at&&!N&&(n.colorMask(at,at,at,at),Y=at)},setLocked:function(at){N=at},setClear:function(at,ht,wt,Vt,nt){nt===!0&&(at*=Vt,ht*=Vt,wt*=Vt),K.set(at,ht,wt,Vt),ot.equals(K)===!1&&(n.clearColor(at,ht,wt,Vt),ot.copy(K))},reset:function(){N=!1,Y=null,ot.set(-1,0,0,0)}}}function i(){let N=!1,K=!1,Y=null,ot=null,at=null;return{setReversed:function(ht){if(K!==ht){let wt=t.get("EXT_clip_control");ht?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),K=ht;let Vt=at;at=null,this.setClear(Vt)}},getReversed:function(){return K},setTest:function(ht){ht?gt(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!N&&(n.depthMask(ht),Y=ht)},setFunc:function(ht){if(K&&(ht=Bc[ht]),ot!==ht){switch(ht){case br:n.depthFunc(n.NEVER);break;case Nr:n.depthFunc(n.ALWAYS);break;case wr:n.depthFunc(n.LESS);break;case Fn:n.depthFunc(n.LEQUAL);break;case Cr:n.depthFunc(n.EQUAL);break;case Lr:n.depthFunc(n.GEQUAL);break;case Dr:n.depthFunc(n.GREATER);break;case _r:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=ht}},setLocked:function(ht){N=ht},setClear:function(ht){at!==ht&&(at=ht,K&&(ht=1-ht),n.clearDepth(ht))},reset:function(){N=!1,Y=null,ot=null,at=null,K=!1}}}function s(){let N=!1,K=null,Y=null,ot=null,at=null,ht=null,wt=null,Vt=null,nt=null;return{setTest:function(Ct){N||(Ct?gt(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(Ct){K!==Ct&&!N&&(n.stencilMask(Ct),K=Ct)},setFunc:function(Ct,kt,At){(Y!==Ct||ot!==kt||at!==At)&&(n.stencilFunc(Ct,kt,At),Y=Ct,ot=kt,at=At)},setOp:function(Ct,kt,At){(ht!==Ct||wt!==kt||Vt!==At)&&(n.stencilOp(Ct,kt,At),ht=Ct,wt=kt,Vt=At)},setLocked:function(Ct){N=Ct},setClear:function(Ct){nt!==Ct&&(n.clearStencil(Ct),nt=Ct)},reset:function(){N=!1,K=null,Y=null,ot=null,at=null,ht=null,wt=null,Vt=null,nt=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,M=[],y=null,p=!1,m=null,v=null,S=null,T=null,b=null,E=null,g=null,R=new Ht(0,0,0),O=0,w=!1,L=null,U=null,V=null,C=null,j=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,$=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=$>=2);let X=null,tt={},ft=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),G=new Ie().fromArray(ft),ut=new Ie().fromArray(St);function Tt(N,K,Y,ot){let at=new Uint8Array(4),ht=n.createTexture();n.bindTexture(N,ht),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<Y;wt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,at):n.texImage2D(K+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,at);return ht}let _t={};_t[n.TEXTURE_2D]=Tt(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=Tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=Tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=Tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),a.setFunc(Fn),ne(!1),qt(Oo),gt(n.CULL_FACE),zt(gn);function gt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function ct(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Zt(N,K){return u[N]!==K?(n.bindFramebuffer(N,K),u[N]=K,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=K),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=K),!0):!1}function st(N,K){let Y=M,ot=!1;if(N){Y=d.get(K),Y===void 0&&(Y=[],d.set(K,Y));let at=N.textures;if(Y.length!==at.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,wt=at.length;ht<wt;ht++)Y[ht]=n.COLOR_ATTACHMENT0+ht;Y.length=at.length,ot=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ot=!0);ot&&n.drawBuffers(Y)}function yt(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let Et={[Mn]:n.FUNC_ADD,[oc]:n.FUNC_SUBTRACT,[lc]:n.FUNC_REVERSE_SUBTRACT};Et[cc]=n.MIN,Et[uc]=n.MAX;let mt={[hc]:n.ZERO,[dc]:n.ONE,[fc]:n.SRC_COLOR,[jo]:n.SRC_ALPHA,[xc]:n.SRC_ALPHA_SATURATE,[Mc]:n.DST_COLOR,[mc]:n.DST_ALPHA,[pc]:n.ONE_MINUS_SRC_COLOR,[Vo]:n.ONE_MINUS_SRC_ALPHA,[Ic]:n.ONE_MINUS_DST_COLOR,[gc]:n.ONE_MINUS_DST_ALPHA,[yc]:n.CONSTANT_COLOR,[Ac]:n.ONE_MINUS_CONSTANT_COLOR,[Ec]:n.CONSTANT_ALPHA,[Tc]:n.ONE_MINUS_CONSTANT_ALPHA};function zt(N,K,Y,ot,at,ht,wt,Vt,nt,Ct){if(N===gn){p===!0&&(ct(n.BLEND),p=!1);return}if(p===!1&&(gt(n.BLEND),p=!0),N!==ac){if(N!==m||Ct!==w){if((v!==Mn||b!==Mn)&&(n.blendEquation(n.FUNC_ADD),v=Mn,b=Mn),Ct)switch(N){case Jn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFunc(n.ONE,n.ONE);break;case Fo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ft("WebGLState: Invalid blending: ",N);break}else switch(N){case Jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fo:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bo:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",N);break}S=null,T=null,E=null,g=null,R.set(0,0,0),O=0,m=N,w=Ct}return}at=at||K,ht=ht||Y,wt=wt||ot,(K!==v||at!==b)&&(n.blendEquationSeparate(Et[K],Et[at]),v=K,b=at),(Y!==S||ot!==T||ht!==E||wt!==g)&&(n.blendFuncSeparate(mt[Y],mt[ot],mt[ht],mt[wt]),S=Y,T=ot,E=ht,g=wt),(Vt.equals(R)===!1||nt!==O)&&(n.blendColor(Vt.r,Vt.g,Vt.b,nt),R.copy(Vt),O=nt),m=N,w=!1}function Ot(N,K){N.side===Xe?ct(n.CULL_FACE):gt(n.CULL_FACE);let Y=N.side===Pe;K&&(Y=!Y),ne(Y),N.blending===Jn&&N.transparent===!1?zt(gn):zt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ot=N.stencilWrite;o.setTest(ot),ot&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function qt(N){N!==sc?(gt(n.CULL_FACE),N!==U&&(N===Oo?n.cullFace(n.BACK):N===rc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),U=N}function me(N){N!==V&&(F&&n.lineWidth(N),V=N)}function Bt(N,K,Y){N?(gt(n.POLYGON_OFFSET_FILL),(C!==K||j!==Y)&&(C=K,j=Y,a.getReversed()&&(K=-K,Y=-Y),n.polygonOffset(K,Y))):ct(n.POLYGON_OFFSET_FILL)}function ye(N){N?gt(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function ee(N){N===void 0&&(N=n.TEXTURE0+H-1),X!==N&&(n.activeTexture(N),X=N)}function ie(N,K,Y){Y===void 0&&(X===null?Y=n.TEXTURE0+H-1:Y=X);let ot=tt[Y];ot===void 0&&(ot={type:void 0,texture:void 0},tt[Y]=ot),(ot.type!==N||ot.texture!==K)&&(X!==Y&&(n.activeTexture(Y),X=Y),n.bindTexture(N,K||_t[N]),ot.type=N,ot.texture=K)}function _(){let N=tt[X];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ge(){try{n.compressedTexImage2D(...arguments)}catch(N){Ft("WebGLState:",N)}}function ae(){try{n.compressedTexImage3D(...arguments)}catch(N){Ft("WebGLState:",N)}}function xt(){try{n.texSubImage2D(...arguments)}catch(N){Ft("WebGLState:",N)}}function it(){try{n.texSubImage3D(...arguments)}catch(N){Ft("WebGLState:",N)}}function Gt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ft("WebGLState:",N)}}function pt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ft("WebGLState:",N)}}function bt(){try{n.texStorage2D(...arguments)}catch(N){Ft("WebGLState:",N)}}function A(){try{n.texStorage3D(...arguments)}catch(N){Ft("WebGLState:",N)}}function I(){try{n.texImage2D(...arguments)}catch(N){Ft("WebGLState:",N)}}function z(){try{n.texImage3D(...arguments)}catch(N){Ft("WebGLState:",N)}}function et(N){return f[N]!==void 0?f[N]:n.getParameter(N)}function Z(N,K){f[N]!==K&&(n.pixelStorei(N,K),f[N]=K)}function rt(N){G.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),G.copy(N))}function lt(N){ut.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ut.copy(N))}function Q(N,K){let Y=l.get(K);Y===void 0&&(Y=new WeakMap,l.set(K,Y));let ot=Y.get(N);ot===void 0&&(ot=n.getUniformBlockIndex(K,N.name),n.uniformBlockBinding(K,ot,ot),Y.set(N,ot))}function J(N,K,Y){let at=l.get(K).get(N);c[at]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,at,Y),c[at]=Y)}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},X=null,tt={},u={},c={},d=new WeakMap,M=[],y=null,p=!1,m=null,v=null,S=null,T=null,b=null,E=null,g=null,R=new Ht(0,0,0),O=0,w=!1,L=null,U=null,V=null,C=null,j=null,G.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:ct,bindFramebuffer:Zt,drawBuffers:st,useProgram:yt,setBlending:zt,setMaterial:Ot,setFlipSided:ne,setCullFace:qt,setLineWidth:me,setPolygonOffset:Bt,setScissorTest:ye,activeTexture:ee,bindTexture:ie,unbindTexture:_,compressedTexImage2D:ge,compressedTexImage3D:ae,texImage2D:I,texImage3D:z,pixelStorei:Z,getParameter:et,updateUBOMapping:Q,uniformBlockBinding:J,texStorage2D:bt,texStorage3D:A,texSubImage2D:xt,texSubImage3D:it,compressedTexSubImage2D:Gt,compressedTexSubImage3D:pt,scissor:rt,viewport:lt,reset:dt}}function Zm(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,h=new WeakMap,f=new Set,u,d=new WeakMap,M=new Set,y=new FinalizationRegistry(A=>M.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,I){return p?new OffscreenCanvas(A,I):Vn("canvas")}function v(A,I,z){let et=1,Z=bt(A);if((Z.width>z||Z.height>z)&&(et=z/Math.max(Z.width,Z.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let rt=Math.floor(et*Z.width),lt=Math.floor(et*Z.height);u===void 0&&(u=m(rt,lt));let Q=I?m(rt,lt):u;return Q.width=rt,Q.height=lt,Q.getContext("2d").drawImage(A,0,0,rt,lt),Ut("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+lt+")."),Q}else return"data"in A&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function S(A){return A.generateMipmaps}function T(A){n.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,I,z,et,Z,rt=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt;et&&(lt=t.get("EXT_texture_norm16"),lt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=I;if(I===n.RED&&(z===n.FLOAT&&(Q=n.R32F),z===n.HALF_FLOAT&&(Q=n.R16F),z===n.UNSIGNED_BYTE&&(Q=n.R8),z===n.UNSIGNED_SHORT&&lt&&(Q=lt.R16_EXT),z===n.SHORT&&lt&&(Q=lt.R16_SNORM_EXT)),I===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.R8UI),z===n.UNSIGNED_SHORT&&(Q=n.R16UI),z===n.UNSIGNED_INT&&(Q=n.R32UI),z===n.BYTE&&(Q=n.R8I),z===n.SHORT&&(Q=n.R16I),z===n.INT&&(Q=n.R32I)),I===n.RG&&(z===n.FLOAT&&(Q=n.RG32F),z===n.HALF_FLOAT&&(Q=n.RG16F),z===n.UNSIGNED_BYTE&&(Q=n.RG8),z===n.UNSIGNED_SHORT&&lt&&(Q=lt.RG16_EXT),z===n.SHORT&&lt&&(Q=lt.RG16_SNORM_EXT)),I===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RG8UI),z===n.UNSIGNED_SHORT&&(Q=n.RG16UI),z===n.UNSIGNED_INT&&(Q=n.RG32UI),z===n.BYTE&&(Q=n.RG8I),z===n.SHORT&&(Q=n.RG16I),z===n.INT&&(Q=n.RG32I)),I===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),z===n.UNSIGNED_INT&&(Q=n.RGB32UI),z===n.BYTE&&(Q=n.RGB8I),z===n.SHORT&&(Q=n.RGB16I),z===n.INT&&(Q=n.RGB32I)),I===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),z===n.UNSIGNED_INT&&(Q=n.RGBA32UI),z===n.BYTE&&(Q=n.RGBA8I),z===n.SHORT&&(Q=n.RGBA16I),z===n.INT&&(Q=n.RGBA32I)),I===n.RGB&&(z===n.UNSIGNED_SHORT&&lt&&(Q=lt.RGB16_EXT),z===n.SHORT&&lt&&(Q=lt.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),I===n.RGBA){let J=rt?gs:te.getTransfer(Z);z===n.FLOAT&&(Q=n.RGBA32F),z===n.HALF_FLOAT&&(Q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Q=J===le?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&lt&&(Q=lt.RGBA16_EXT),z===n.SHORT&&lt&&(Q=lt.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function g(A,I){let z;return A?I===null||I===fi||I===xn?z=n.DEPTH24_STENCIL8:I===ri?z=n.DEPTH32F_STENCIL8:I===$n&&(z=n.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===fi||I===xn?z=n.DEPTH_COMPONENT24:I===ri?z=n.DEPTH_COMPONENT32F:I===$n&&(z=n.DEPTH_COMPONENT16),z}function R(A,I){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==we&&A.minFilter!==_e?Math.log2(Math.max(I.width,I.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?I.mipmaps.length:1}function O(A){let I=new WeakRef(A);i.get(A).__ref=I,M.add(I),y.register(A,I,I)}function w(A){let I=i.get(A).__ref;I!==void 0&&(M.delete(I),y.unregister(I))}function L(A){V(A.target)}function U(A){C(A.target)}function V(A){A.removeEventListener("dispose",L),w(A),H(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function C(A){A.removeEventListener("dispose",U),w(A),$(A)}function j(){for(let A of M){let I=A.deref();I!==void 0&&(I.isRenderTarget===!0?C(I):V(I))}M.clear(),f.clear()}function H(A){let I=i.get(A);if(I.__webglInit===void 0)return;let z=A.source,et=d.get(z);if(et){let Z=et[I.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(A),Object.keys(et).length===0&&d.delete(z)}i.remove(A)}function F(A){let I=i.get(A);n.deleteTexture(I.__webglTexture);let z=A.source,et=d.get(z);delete et[I.__cacheKey],a.memory.textures--}function $(A){let I=i.get(A);I.__depthDisposeCallback&&I.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&V(z),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(I.__webglFramebuffer[Z]))for(let rt=0;rt<I.__webglFramebuffer[Z].length;rt++)n.deleteFramebuffer(I.__webglFramebuffer[Z][rt]);else n.deleteFramebuffer(I.__webglFramebuffer[Z]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[Z])}else{if(Array.isArray(I.__webglFramebuffer))for(let Z=0;Z<I.__webglFramebuffer.length;Z++)n.deleteFramebuffer(I.__webglFramebuffer[Z]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Z=0;Z<I.__webglColorRenderbuffer.length;Z++)I.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[Z]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let et=A.textures;for(let Z=0,rt=et.length;Z<rt;Z++){let lt=i.get(et[Z]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),a.memory.textures--),i.remove(et[Z])}i.remove(A)}let W=0;function X(){W=0}function tt(){return W}function ft(A){W=A}function St(){let A=W;return A>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function G(A){let I=[];return I.push(A.wrapS),I.push(A.wrapT),I.push(A.wrapR||0),I.push(A.magFilter),I.push(A.minFilter),I.push(A.anisotropy),I.push(A.internalFormat),I.push(A.format),I.push(A.type),I.push(A.generateMipmaps),I.push(A.mipmapsAutoUpdate),I.push(A.premultiplyAlpha),I.push(A.flipY),I.push(A.unpackAlignment),I.push(A.colorSpace),I.join()}function ut(A,I){let z=i.get(A);if(A.isVideoTexture&&Gt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let et=A.image;if(et===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(z,A,I);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+I)}function Tt(A,I){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ot(z,A,I);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+I)}function _t(A,I){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ot(z,A,I);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+I)}function gt(A,I){let z=i.get(A);if(A.version>0&&z.__version!==A.version){ne(z,A,I);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+I)}let ct={[Bn]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[Pr]:n.MIRRORED_REPEAT},Zt={[we]:n.NEAREST,[Sc]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[_e]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},st={[Cc]:n.NEVER,[il]:n.ALWAYS,[Lc]:n.LESS,[tl]:n.LEQUAL,[Dc]:n.EQUAL,[el]:n.GEQUAL,[_c]:n.GREATER,[Pc]:n.NOTEQUAL};function yt(A,I){if(I.type===ri&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===_e||I.magFilter===la||I.magFilter===js||I.magFilter===di||I.minFilter===_e||I.minFilter===la||I.minFilter===js||I.minFilter===di)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ct[I.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ct[I.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ct[I.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Zt[I.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Zt[I.minFilter]),I.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,st[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===we||I.minFilter!==js&&I.minFilter!==di||I.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function Et(A,I){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,I.addEventListener("dispose",L),O(I));let et=I.source,Z=d.get(et);Z===void 0&&(Z={},d.set(et,Z));let rt=G(I);if(rt!==A.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[rt].usedTimes++;let lt=Z[A.__cacheKey];lt!==void 0&&(Z[A.__cacheKey].usedTimes--,lt.usedTimes===0&&F(I)),A.__cacheKey=rt,A.__webglTexture=Z[rt].texture}return z}function mt(A,I,z){return Math.floor(Math.floor(A/z)/I)}function zt(A,I,z,et){let rt=A.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,z,et,I.data);else{rt.sort((N,K)=>N.start-K.start);let lt=0;for(let N=1;N<rt.length;N++){let K=rt[lt],Y=rt[N],ot=K.start+K.count,at=mt(Y.start,I.width,4),ht=mt(K.start,I.width,4);Y.start<=ot+1&&at===ht&&mt(Y.start+Y.count-1,I.width,4)===at?K.count=Math.max(K.count,Y.start+Y.count-K.start):(++lt,rt[lt]=Y)}rt.length=lt+1;let Q=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,I.width);for(let N=0,K=rt.length;N<K;N++){let Y=rt[N],ot=Math.floor(Y.start/4),at=Math.ceil(Y.count/4),ht=ot%I.width,wt=Math.floor(ot/I.width),Vt=at,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,wt),e.texSubImage2D(n.TEXTURE_2D,0,ht,wt,Vt,nt,z,et,I.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function Ot(A,I,z){let et=n.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),I.isData3DTexture&&(et=n.TEXTURE_3D);let Z=Et(A,I),rt=I.source;e.bindTexture(et,A.__webglTexture,n.TEXTURE0+z);let lt=i.get(rt);if(rt.version!==lt.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let nt=te.getPrimaries(te.workingColorSpace),Ct=I.colorSpace===gi?null:te.getPrimaries(I.colorSpace),kt=I.colorSpace===gi||nt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment);let J=v(I.image,!1,s.maxTextureSize);J=pt(I,J);let dt=r.convert(I.format,I.colorSpace),N=r.convert(I.type),K=E(I.internalFormat,dt,N,I.normalized,I.colorSpace,I.isVideoTexture);yt(et,I);let Y,ot=I.mipmaps,at=I.isVideoTexture!==!0,ht=lt.__version===void 0||Z===!0,wt=rt.dataReady,Vt=R(I,J);if(I.isDepthTexture)K=g(I.format===Oi,I.type),ht&&(at?e.texStorage2D(n.TEXTURE_2D,1,K,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,dt,N,null));else if(I.isDataTexture)if(ot.length>0){at&&ht&&e.texStorage2D(n.TEXTURE_2D,Vt,K,ot[0].width,ot[0].height);for(let nt=0,Ct=ot.length;nt<Ct;nt++)Y=ot[nt],at?wt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Y.width,Y.height,dt,N,Y.data):e.texImage2D(n.TEXTURE_2D,nt,K,Y.width,Y.height,0,dt,N,Y.data);I.generateMipmaps=!1}else at?(ht&&e.texStorage2D(n.TEXTURE_2D,Vt,K,J.width,J.height),wt&&zt(I,J,dt,N)):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,dt,N,J.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){at&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Vt,K,ot[0].width,ot[0].height,J.depth);for(let nt=0,Ct=ot.length;nt<Ct;nt++)if(Y=ot[nt],I.format!==mi)if(dt!==null)if(at){if(wt)if(I.layerUpdates.size>0){let kt=ul(Y.width,Y.height,I.format,I.type);for(let At of I.layerUpdates){let re=Y.data.subarray(At*kt/Y.data.BYTES_PER_ELEMENT,(At+1)*kt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,At,Y.width,Y.height,1,dt,re)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,Y.width,Y.height,J.depth,dt,Y.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,K,Y.width,Y.height,J.depth,0,Y.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?wt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,Y.width,Y.height,J.depth,dt,N,Y.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,K,Y.width,Y.height,J.depth,0,dt,N,Y.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{at&&ht&&e.texStorage2D(n.TEXTURE_2D,Vt,K,ot[0].width,ot[0].height);for(let nt=0,Ct=ot.length;nt<Ct;nt++)Y=ot[nt],I.format!==mi?dt!==null?at?wt&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,Y.width,Y.height,dt,Y.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,K,Y.width,Y.height,0,Y.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?wt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Y.width,Y.height,dt,N,Y.data):e.texImage2D(n.TEXTURE_2D,nt,K,Y.width,Y.height,0,dt,N,Y.data)}else if(I.isDataArrayTexture)if(at){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Vt,K,J.width,J.height,J.depth),wt)if(I.layerUpdates.size>0){let nt=ul(J.width,J.height,I.format,I.type);for(let Ct of I.layerUpdates){let kt=J.data.subarray(Ct*nt/J.data.BYTES_PER_ELEMENT,(Ct+1)*nt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ct,J.width,J.height,1,dt,N,kt)}I.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,N,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,dt,N,J.data);else if(I.isData3DTexture)at?(ht&&e.texStorage3D(n.TEXTURE_3D,Vt,K,J.width,J.height,J.depth),wt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,N,J.data)):e.texImage3D(n.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,dt,N,J.data);else if(I.isFramebufferTexture){if(ht)if(at)e.texStorage2D(n.TEXTURE_2D,Vt,K,J.width,J.height);else{let nt=J.width,Ct=J.height;for(let kt=0;kt<Vt;kt++)e.texImage2D(n.TEXTURE_2D,kt,K,nt,Ct,0,dt,N,null),nt>>=1,Ct>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),J.parentNode!==nt){nt.appendChild(J),f.add(I),nt.onpaint=Ct=>{let kt=Ct.changedElements;for(let At of f)kt.includes(At.image)&&(At.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let kt=n.RGBA,At=n.RGBA,re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,kt,At,re,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ot.length>0){if(at&&ht){let nt=bt(ot[0]);e.texStorage2D(n.TEXTURE_2D,Vt,K,nt.width,nt.height)}for(let nt=0,Ct=ot.length;nt<Ct;nt++)Y=ot[nt],at?wt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,dt,N,Y):e.texImage2D(n.TEXTURE_2D,nt,K,dt,N,Y);I.generateMipmaps=!1}else if(at){if(ht){let nt=bt(J);e.texStorage2D(n.TEXTURE_2D,Vt,K,nt.width,nt.height)}wt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,N,J)}else e.texImage2D(n.TEXTURE_2D,0,K,dt,N,J);S(I)&&I.mipmapsAutoUpdate===!0&&T(et),lt.__version=rt.version,I.onUpdate&&I.onUpdate(I)}A.__version=I.version}function ne(A,I,z){if(I.image.length!==6)return;let et=Et(A,I),Z=I.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);let rt=i.get(Z);if(Z.version!==rt.__version||et===!0){e.activeTexture(n.TEXTURE0+z);let lt=te.getPrimaries(te.workingColorSpace),Q=I.colorSpace===gi?null:te.getPrimaries(I.colorSpace),J=I.colorSpace===gi||lt===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let dt=I.isCompressedTexture||I.image[0].isCompressedTexture,N=I.image[0]&&I.image[0].isDataTexture,K=[];for(let At=0;At<6;At++)!dt&&!N?K[At]=v(I.image[At],!0,s.maxCubemapSize):K[At]=N?I.image[At].image:I.image[At],K[At]=pt(I,K[At]);let Y=K[0],ot=r.convert(I.format,I.colorSpace),at=r.convert(I.type),ht=E(I.internalFormat,ot,at,I.normalized,I.colorSpace),wt=I.isVideoTexture!==!0,Vt=rt.__version===void 0||et===!0,nt=Z.dataReady,Ct=R(I,Y);yt(n.TEXTURE_CUBE_MAP,I);let kt;if(I.isDepthTexture){if(ht=g(I.format===Oi,I.type),Vt)if(wt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ht,Y.width,Y.height);else for(let At=0;At<6;At++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,Y.width,Y.height,0,ot,at,null)}else if(dt){wt&&Vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,ht,Y.width,Y.height);for(let At=0;At<6;At++){kt=K[At].mipmaps;for(let re=0;re<kt.length;re++){let ue=kt[re];I.format!==mi?ot!==null?wt?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,0,0,ue.width,ue.height,ot,ue.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,ht,ue.width,ue.height,0,ue.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,0,0,ue.width,ue.height,ot,at,ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,ht,ue.width,ue.height,0,ot,at,ue.data)}}}else{if(kt=I.mipmaps,wt&&Vt){kt.length>0&&Ct++;let At=bt(K[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,ht,At.width,At.height)}for(let At=0;At<6;At++)if(N){wt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,K[At].width,K[At].height,ot,at,K[At].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,K[At].width,K[At].height,0,ot,at,K[At].data);for(let re=0;re<kt.length;re++){let Ye=kt[re].image[At].image;wt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,0,0,Ye.width,Ye.height,ot,at,Ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,ht,Ye.width,Ye.height,0,ot,at,Ye.data)}}else{wt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ot,at,K[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,ot,at,K[At]);for(let re=0;re<kt.length;re++){let ue=kt[re];wt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,0,0,ot,at,ue.image[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,ht,ot,at,ue.image[At])}}}S(I)&&I.mipmapsAutoUpdate===!0&&T(n.TEXTURE_CUBE_MAP),rt.__version=Z.version,I.onUpdate&&I.onUpdate(I)}A.__version=I.version}function qt(A,I,z,et,Z,rt){let lt=r.convert(z.format,z.colorSpace),Q=r.convert(z.type),J=E(z.internalFormat,lt,Q,z.normalized,z.colorSpace),dt=i.get(I),N=i.get(z);if(N.__renderTarget=I,!dt.__hasExternalTextures){let K=Math.max(1,I.width>>rt),Y=Math.max(1,I.height>>rt);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,rt,J,K,Y,I.depth,0,lt,Q,null):e.texImage2D(Z,rt,J,K,Y,0,lt,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),it(I)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Z,N.__webglTexture,0,xt(I)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Z,N.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function me(A,I,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),I.depthBuffer){let et=I.depthTexture,Z=et&&et.isDepthTexture?et.type:null,rt=g(I.stencilBuffer,Z),lt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;it(I)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(I),rt,I.width,I.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(I),rt,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,rt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,A)}else{let et=I.textures;for(let Z=0;Z<et.length;Z++){let rt=et[Z],lt=r.convert(rt.format,rt.colorSpace),Q=r.convert(rt.type),J=E(rt.internalFormat,lt,Q,rt.normalized,rt.colorSpace);it(I)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(I),J,I.width,I.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(I),J,I.width,I.height):n.renderbufferStorage(n.RENDERBUFFER,J,I.width,I.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(A,I,z){let et=I.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(I.depthTexture);Z.__renderTarget=I;let rt=et?I.depthTexture.image[0]:I.depthTexture.image;(!Z.__webglTexture||rt.width!==I.width||rt.height!==I.height)&&(rt.width=I.width,rt.height=I.height,I.depthTexture.needsUpdate=!0),et?gt(I.depthTexture,0):ut(I.depthTexture,0);let lt=Z.__webglTexture,Q=xt(I),J=et?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,dt=I.depthTexture.format===Oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(I.depthTexture.format===Di)it(I)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,J,lt,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,dt,J,lt,0);else if(I.depthTexture.format===Oi)it(I)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,J,lt,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,dt,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(A){let I=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==A.depthTexture){let et=A.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),et){let Z=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,et.removeEventListener("dispose",Z)};et.addEventListener("dispose",Z),I.__depthDisposeCallback=Z}I.__boundDepthTexture=et}if(A.depthTexture&&!I.__autoAllocateDepthBuffer)if(z)for(let et=0;et<6;et++)Bt(I.__webglFramebuffer[et],A,et);else A.texture.mipmaps.length>0?Bt(I.__webglFramebuffer[0],A,0):Bt(I.__webglFramebuffer,A,0);else if(z){I.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[et]),I.__webglDepthbuffer[et]===void 0)I.__webglDepthbuffer[et]=n.createRenderbuffer(),me(I.__webglDepthbuffer[et],A,!1);else{let Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=I.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=n.createRenderbuffer(),me(I.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=I.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(A,I,z){let et=i.get(A);I!==void 0&&qt(et.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ye(A)}function ie(A){let I=A.texture,z=i.get(A),et=i.get(I);A.addEventListener("dispose",U),O(A);let Z=A.textures,rt=A.isWebGLCubeRenderTarget===!0,lt=Z.length>1;if(lt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=I.version,a.memory.textures++),rt){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(I.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let J=0;J<I.mipmaps.length;J++)z.__webglFramebuffer[Q][J]=n.createFramebuffer()}else z.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(I.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<I.mipmaps.length;Q++)z.__webglFramebuffer[Q]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(lt)for(let Q=0,J=Z.length;Q<J;Q++){let dt=i.get(Z[Q]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&it(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){let J=Z[Q];z.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let dt=r.convert(J.format,J.colorSpace),N=r.convert(J.type),K=E(J.internalFormat,dt,N,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),Y=xt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,K,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),me(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),yt(n.TEXTURE_CUBE_MAP,I);for(let Q=0;Q<6;Q++)if(I.mipmaps.length>0)for(let J=0;J<I.mipmaps.length;J++)qt(z.__webglFramebuffer[Q][J],A,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,J);else qt(z.__webglFramebuffer[Q],A,I,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);S(I)?T(n.TEXTURE_CUBE_MAP):I.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),e.unbindTexture()}else if(lt){for(let Q=0,J=Z.length;Q<J;Q++){let dt=Z[Q],N=i.get(dt),K=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,N.__webglTexture),yt(K,dt),qt(z.__webglFramebuffer,A,dt,n.COLOR_ATTACHMENT0+Q,K,0),S(dt)&&T(K)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,et.__webglTexture),yt(Q,I),I.mipmaps.length>0)for(let J=0;J<I.mipmaps.length;J++)qt(z.__webglFramebuffer[J],A,I,n.COLOR_ATTACHMENT0,Q,J);else qt(z.__webglFramebuffer,A,I,n.COLOR_ATTACHMENT0,Q,0);S(I)?T(Q):I.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,I.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ye(A)}function _(A){let I=A.textures;for(let z=0,et=I.length;z<et;z++){let Z=I[z];if(S(Z)&&Z.mipmapsAutoUpdate===!0){let rt=b(A),lt=i.get(Z).__webglTexture;e.bindTexture(rt,lt),T(rt),e.unbindTexture()}}}let ge=[];function ae(A){if(A.samples>0){if(it(A)===!1){let I=A.textures,z=A.width,et=A.height,Z=n.COLOR_BUFFER_BIT,rt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(A),Q=I.length>1;if(Q)for(let dt=0;dt<I.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let dt=0;dt<I.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);let N=i.get(I[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,z,et,0,0,z,et,Z,n.NEAREST),c===!0&&(ge.length=0,ge.push(n.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ge.push(rt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let dt=0;dt<I.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);let N=i.get(I[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let I=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[I])}}}function xt(A){return Math.min(s.maxSamples,A.samples)}function it(A){let I=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Gt(A){let I=a.render.frame;h.get(A)!==I&&(h.set(A,I),A.update())}function pt(A,I){let z=A.colorSpace,et=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ms&&z!==gi&&(te.getTransfer(z)===le?(et!==mi||Z!==qe)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",z)),I}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=St,this.resetTextureUnits=X,this.getTextureUnits=tt,this.setTextureUnits=ft,this.setTexture2D=ut,this.setTexture2DArray=Tt,this.setTexture3D=_t,this.setTextureCube=gt,this.rebindTextures=ee,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=_,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=qt,this.useMultisampledRTT=it,this.dispose=j}function Jm(n,t){function e(i,s=gi){let r,a=te.getTransfer(s);if(i===qe)return n.UNSIGNED_BYTE;if(i===ua)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jo)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yo)return n.BYTE;if(i===Qo)return n.SHORT;if(i===$n)return n.UNSIGNED_SHORT;if(i===ca)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Ko)return n.ALPHA;if(i===$o)return n.RGB;if(i===mi)return n.RGBA;if(i===Di)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===da)return n.RED;if(i===fa)return n.RED_INTEGER;if(i===tn)return n.RG;if(i===pa)return n.RG_INTEGER;if(i===ma)return n.RGBA_INTEGER;if(i===Vs||i===Hs||i===ks||i===Ws)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===Ma||i===Ia||i===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===Aa||i===Ea||i===Ta||i===va||i===Gs||i===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===Aa)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ea)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ta)return r.COMPRESSED_R11_EAC;if(i===va)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gs)return r.COMPRESSED_RG11_EAC;if(i===Ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sa||i===ba||i===Na||i===wa||i===Ca||i===La||i===Da||i===_a||i===Pa||i===za||i===Oa||i===Ua||i===Fa||i===Ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ca)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===La)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ua)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===Va||i===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ja)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ka||i===Wa||i===Xs||i===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Km=`
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

}`,xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ns(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ke({vertexShader:Km,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends Ii{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,M=null,y=typeof XRWebGLBinding<"u",p=new xl,m={},v=e.getContextAttributes(),S=null,T=null,b=[],E=[],g=new Xt,R=null,O=null,w=new We;w.viewport=new Ie;let L=new We;L.viewport=new Ie;let U=[w,L],V=new na,C=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ut=b[G];return ut===void 0&&(ut=new Wn,b[G]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(G){let ut=b[G];return ut===void 0&&(ut=new Wn,b[G]=ut),ut.getGripSpace()},this.getHand=function(G){let ut=b[G];return ut===void 0&&(ut=new Wn,b[G]=ut),ut.getHandSpace()};function H(G){let ut=E.indexOf(G.inputSource);if(ut===-1)return;let Tt=b[ut];Tt!==void 0&&(Tt.update(G.inputSource,G.frame,l||a),Tt.dispatchEvent({type:G.type,data:G.inputSource}))}function F(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",$);for(let G=0;G<b.length;G++){let ut=E[G];ut!==null&&(E[G]=null,b[G].disconnect(ut))}C=null,j=null,p.reset();for(let G in m)delete m[G];if(t.setRenderTarget(S),d=null,u=null,f=null,s=null,T=null,St.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(g.width,g.height,!1),O!==null){let G=O.camera;G.fov=O.fov,G.zoom=O.zoom,G.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",F),s.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,_t=null,gt=null;v.depth&&(gt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=v.stencil?Oi:Di,_t=v.stencil?xn:fi);let ct={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new Ce(u.textureWidth,u.textureHeight,{format:mi,type:qe,depthTexture:new zi(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Ce(d.framebufferWidth,d.framebufferHeight,{format:mi,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),St.setContext(s),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(G){for(let ut=0;ut<G.removed.length;ut++){let Tt=G.removed[ut],_t=E.indexOf(Tt);_t>=0&&(E[_t]=null,b[_t].disconnect(Tt))}for(let ut=0;ut<G.added.length;ut++){let Tt=G.added[ut],_t=E.indexOf(Tt);if(_t===-1){for(let ct=0;ct<b.length;ct++)if(ct>=E.length){E.push(Tt),_t=ct;break}else if(E[ct]===null){E[ct]=Tt,_t=ct;break}if(_t===-1)break}let gt=b[_t];gt&&gt.connect(Tt)}}function W(G,ut){ut===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ut.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let ut=G.near,Tt=G.far;p.texture!==null&&(p.depthNear>0&&(ut=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),V.near=L.near=w.near=ut,V.far=L.far=w.far=Tt,(C!==V.near||j!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),C=V.near,j=V.far),V.layers.mask=G.layers.mask|6,w.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let _t=G.parent,gt=V.cameras;W(V,_t);for(let ct=0;ct<gt.length;ct++)W(gt[ct],_t);V.projectionMatrix.copy(w.projectionMatrix),V.projectionMatrixInverse.copy(w.projectionMatrixInverse),O===null&&G.isPerspectiveCamera&&(O={camera:G,fov:G.fov,zoom:G.zoom}),X(G,V,_t)};function X(G,ut,Tt){Tt===null?G.matrix.copy(ut.matrixWorld):(G.matrix.copy(Tt.matrixWorld),G.matrix.invert(),G.matrix.multiply(ut.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ut.projectionMatrix),G.projectionMatrixInverse.copy(ut.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Or*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(G){return m[G]};let tt=null;function ft(G,ut){if(h=ut.getViewerPose(l||a),M=ut,h!==null){let Tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let _t=!1;Tt.length!==V.cameras.length&&(V.cameras.length=0,_t=!0);for(let st=0;st<Tt.length;st++){let yt=Tt[st],Et=null;if(d!==null)Et=d.getViewport(yt);else{let zt=f.getViewSubImage(u,yt);Et=zt.viewport,st===0&&(t.setRenderTargetTextures(T,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(T))}let mt=U[st];mt===void 0&&(mt=new We,mt.layers.enable(st),mt.viewport=new Ie,U[st]=mt),mt.matrix.fromArray(yt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(yt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Et.x,Et.y,Et.width,Et.height),st===0&&(V.matrix.copy(mt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),_t===!0&&V.cameras.push(mt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let st=f.getDepthInformation(Tt[0]);st&&st.isValid&&st.texture&&p.init(st,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let st=0;st<Tt.length;st++){let yt=Tt[st].camera;if(yt){let Et=m[yt];Et||(Et=new Ns,m[yt]=Et);let mt=f.getCameraImage(yt);Et.sourceTexture=mt}}}}for(let Tt=0;Tt<b.length;Tt++){let _t=E[Tt],gt=b[Tt];_t!==null&&gt!==void 0&&gt.update(_t,ut,l||a)}tt&&tt(G,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),M=null}let St=new du;St.setAnimationLoop(ft),this.setAnimationLoop=function(G){tt=G},this.dispose=function(){}}},tg=new ce,Eu=new jt;Eu.set(-1,0,0,0,1,0,0,0,1);function eg(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ol(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,S,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),M(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,v,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),S=v.envMap,T=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(T)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Eu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ig(n,t,e,i){let s={},r={};function a(v,S){let T=S.program;i.uniformBlockBinding(v,T,s[v.id])}function o(v,S){let T=s[v.id];T===void 0&&(M(v),T=c(v),s[v.id]=T,v.addEventListener("dispose",p));let b=S.program;i.updateUBOMapping(v,b);let E=t.render.frame;r[v.id]!==E&&(l(v),r[v.id]=E)}function c(v){let S=n.createBuffer(),T=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function l(v){let S=s[v.id],T=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,g=T.length;E<g;E++){let R=T[E];if(Array.isArray(R))for(let O=0,w=R.length;O<w;O++)h(R[O],E,O,b);else h(R,E,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,S,T,b){if(u(v,S,T,b)===!0){let E=v.__offset,g=v.value;if(Array.isArray(g)){let R=0;for(let O=0;O<g.length;O++){let w=g[O],L=y(w,!0);f(w,v.__data,R),R+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,v.__data)}}function f(v,S,T){typeof v=="number"||typeof v=="boolean"?S[T]=v:v.isMatrix3?(S[T]=v.elements[0],S[T+1]=v.elements[1],S[T+2]=v.elements[2],S[T+3]=0,S[T+4]=v.elements[3],S[T+5]=v.elements[4],S[T+6]=v.elements[5],S[T+7]=0,S[T+8]=v.elements[6],S[T+9]=v.elements[7],S[T+10]=v.elements[8],S[T+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-T),T):v.toArray(S,T)}function u(v,S,T,b){let E=v.value,g=S+"_"+T;if(Array.isArray(E)){b[g]===void 0&&(b[g]=[]);let R=b[g],O=!1;for(let w=0;w<E.length;w++)d(E[w],R,w)===!0&&(O=!0);return O}return d(E,b,g)}function d(v,S,T){if(S[T]===void 0)return typeof v=="number"||typeof v=="boolean"?S[T]=v:ArrayBuffer.isView(v)?S[T]=v.slice():S[T]=v.clone(),!0;{let b=S[T];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return S[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function M(v){let S=v.uniforms,T=0,b=16;for(let g=0,R=S.length;g<R;g++){let O=Array.isArray(S[g])?S[g]:[S[g]];for(let w=0,L=O.length;w<L;w++){let U=O[w],V=Array.isArray(U.value)?U.value:[U.value],C=Array.isArray(S[g])||Array.isArray(U.value),j=T;for(let F=0,$=V.length;F<$;F++){let W=V[F],X=y(W,C),tt=T%b,ft=tt%X.boundary,St=tt+ft;T+=ft,St!==0&&b-St<X.storage&&(T+=b-St),F===0&&(j=T),T+=X.storage}let H=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new H((T-j)/Float32Array.BYTES_PER_ELEMENT),U.__offset=j}}let E=T%b;return E>0&&(T+=b-E),v.__size=T,v.__cache={},this}function y(v,S){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=16,T.storage=48):v.isMatrix4?(T.boundary=16,T.storage=64):v.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function p(v){let S=v.target;S.removeEventListener("dispose",p),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function sg(){return Ti===null&&(Ti=new Es(ng,16,16,tn,pi),Ti.name="DFG_LUT",Ti.minFilter=_e,Ti.magFilter=_e,Ti.wrapS=ei,Ti.wrapT=ei,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var Ks=class{constructor(t={}){let{canvas:e=Oc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=qe}=t;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=a;let y=d,p=new Set([ma,pa,fa]),m=new Set([qe,fi,$n,xn,ua,ha]),v=new Uint32Array(4),S=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},b=null,E=null,g=[],R=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,L=!1,U=null,V=null,C=null,j=null;this._outputColorSpace=ve;let H=0,F=0,$=null,W=-1,X=null,tt=new Ie,ft=new Ie,St=null,G=new Ht(0),ut=0,Tt=e.width,_t=e.height,gt=1,ct=null,Zt=null,st=new Ie(0,0,Tt,_t),yt=new Ie(0,0,Tt,_t),Et=!1,mt=new qi,zt=new jr,Ot=!1,ne=!1,qt=new ce,me=new P,Bt=new Ie,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function ie(){return $===null?gt:1}let _=i;function ge(x,D){return e.getContext(x,D)}let ae,xt,it,Gt,pt,bt,A,I,z,et,Z,rt,lt,Q,J,dt,N,K,Y,ot,at,ht,wt;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",At,!1),_===null){let D="webgl2";if(_=ge(D,x),_===null)throw ge(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(x){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Ft("WebGLRenderer: "+x.message),x}function Vt(){ae=new mp(_),ae.init(),at=new Jm(_,ae),xt=new sp(_,ae,t,at),it=new Qm(_,ae),xt.reversedDepthBuffer&&u&&it.buffers.depth.setReversed(!0),V=_.createFramebuffer(),C=_.createFramebuffer(),j=_.createFramebuffer(),Gt=new Ip(_),pt=new zm,bt=new Zm(_,ae,it,pt,xt,at,Gt),A=new pp(w),I=new xh(_),ht=new ip(_,I),z=new gp(_,I,Gt,ht),et=new yp(_,z,I,ht,Gt),K=new xp(_,xt,bt),J=new rp(pt),Z=new Pm(w,A,ae,xt,ht,J),rt=new eg(w,pt),lt=new Um,Q=new km(ae),N=new ep(w,A,it,et,M,c),dt=new Ym(w,et,xt),wt=new ig(_,Gt,xt,it),Y=new np(_,ae,Gt),ot=new Mp(_,ae,Gt),Gt.programs=Z.programs,w.capabilities=xt,w.extensions=ae,w.properties=pt,w.renderLists=lt,w.shadowMap=dt,w.state=it,w.info=Gt}y!==qe&&(O=new Ep(y,e.width,e.height,o,s,r));let nt=new yl(w,_);this.xr=nt,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){let x=ae.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ae.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(x){x!==void 0&&(gt=x,this.setSize(Tt,_t,!1))},this.getSize=function(x){return x.set(Tt,_t)},this.setSize=function(x,D,q=!0){if(nt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=x,_t=D,e.width=Math.floor(x*gt),e.height=Math.floor(D*gt),q===!0&&(e.style.width=x+"px",e.style.height=D+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Tt*gt,_t*gt).floor()},this.setDrawingBufferSize=function(x,D,q){Tt=x,_t=D,gt=q,e.width=Math.floor(x*q),e.height=Math.floor(D*q),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(y===qe){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(tt)},this.getViewport=function(x){return x.copy(st)},this.setViewport=function(x,D,q,B){x.isVector4?st.set(x.x,x.y,x.z,x.w):st.set(x,D,q,B),it.viewport(tt.copy(st).multiplyScalar(ie()).round())},this.getScissor=function(x){return x.copy(yt)},this.setScissor=function(x,D,q,B){x.isVector4?yt.set(x.x,x.y,x.z,x.w):yt.set(x,D,q,B),it.scissor(ft.copy(yt).multiplyScalar(ie()).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(x){it.setScissorTest(Et=x)},this.setOpaqueSort=function(x){ct=x},this.setTransparentSort=function(x){Zt=x},this.getClearColor=function(x){return x.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,q=!0){let B=0;if(x){let k=!1;if($!==null){let It=$.texture.format;k=p.has(It)}if(k){let It=$.texture.type,Nt=m.has(It),Mt=N.getClearColor(),Rt=N.getClearAlpha(),Pt=Mt.r,Wt=Mt.g,Kt=Mt.b;Nt?(v[0]=Pt,v[1]=Wt,v[2]=Kt,v[3]=Rt,_.clearBufferuiv(_.COLOR,0,v)):(S[0]=Pt,S[1]=Wt,S[2]=Kt,S[3]=Rt,_.clearBufferiv(_.COLOR,0,S))}else B|=_.COLOR_BUFFER_BIT}D&&(B|=_.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&_.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),N.dispose(),lt.dispose(),Q.dispose(),bt.dispose(),pt.dispose(),A.dispose(),et.dispose(),z.dispose(),ht.dispose(),wt.dispose(),Z.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",nn),nt.removeEventListener("sessionend",Qt),he.stop()};function Ct(x){x.preventDefault(),sl("WebGLRenderer: Context Lost."),L=!0}function kt(){sl("WebGLRenderer: Context Restored."),L=!1;let x=Gt.autoReset,D=dt.enabled,q=dt.autoUpdate,B=dt.needsUpdate,k=dt.type;Vt(),Gt.autoReset=x,dt.enabled=D,dt.autoUpdate=q,dt.needsUpdate=B,dt.type=k}function At(x){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function re(x){let D=x.target;D.removeEventListener("dispose",re),ue(D)}function ue(x){Ye(x),pt.remove(x)}function Ye(x){let D=pt.get(x).programs;D!==void 0&&(D.forEach(function(q){Z.releaseProgram(q)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,q,B,k,It){D===null&&(D=ye);let Nt=k.isMesh&&k.matrixWorld.determinantAffine()<0,Mt=Su(x,D,q,B,k);it.setMaterial(B,Nt);let Rt=q.index,Pt=1;if(B.wireframe===!0){if(Rt=z.getWireframeAttribute(q),Rt===void 0)return;Pt=2}let Wt=q.drawRange,Kt=q.attributes.position,Lt=Wt.start*Pt,$t=(Wt.start+Wt.count)*Pt;It!==null&&(Lt=Math.max(Lt,It.start*Pt),$t=Math.min($t,(It.start+It.count)*Pt)),Rt!==null?(Lt=Math.max(Lt,0),$t=Math.min($t,Rt.count)):Kt!=null&&(Lt=Math.max(Lt,0),$t=Math.min($t,Kt.count));let Ee=$t-Lt;if(Ee<0||Ee===1/0)return;ht.setup(k,B,Mt,q,Rt);let pe,fe=Y;if(Rt!==null&&(pe=I.get(Rt),fe=ot,fe.setIndex(pe)),k.isMesh)B.wireframe===!0?(it.setLineWidth(B.wireframeLinewidth*ie()),fe.setMode(_.LINES)):fe.setMode(_.TRIANGLES);else if(k.isLine){let ze=B.linewidth;ze===void 0&&(ze=1),it.setLineWidth(ze*ie()),k.isLineSegments?fe.setMode(_.LINES):k.isLineLoop?fe.setMode(_.LINE_LOOP):fe.setMode(_.LINE_STRIP)}else k.isPoints?fe.setMode(_.POINTS):k.isSprite&&fe.setMode(_.TRIANGLES);if(k.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))fe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let ze=k._multiDrawStarts,Dt=k._multiDrawCounts,Ve=k._multiDrawCount,oe=Rt?I.get(Rt).bytesPerElement:1,rn=pt.get(B).currentProgram.getUniforms();for(let Oe=0;Oe<Ve;Oe++)rn.setValue(_,"_gl_DrawID",Oe),fe.render(ze[Oe]/oe,Dt[Oe])}else if(k.isInstancedMesh)fe.renderInstances(Lt,Ee,k.count);else if(q.isInstancedBufferGeometry){let ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Dt=Math.min(q.instanceCount,ze);fe.renderInstances(Lt,Ee,Dt)}else fe.render(Lt,Ee)};function Ui(x,D,q,B){U!==null&&x.isNodeMaterial&&U.setObject(B,x),Ot===!0&&J.setState(x,q,!1),x.transparent===!0&&x.side===Xe&&x.forceSinglePass===!1?(x.side=Pe,x.needsUpdate=!0,as(x,D,B),x.side=$i,x.needsUpdate=!0,as(x,D,B),x.side=Xe):as(x,D,B)}this.compile=function(x,D,q=null){q===null&&(q=x),U!==null&&U.renderStart(x,D,q),E=Q.get(q),E.init(D),R.push(E),q.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),x!==q&&x.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),ne=this.localClippingEnabled,Ot=J.init(this.clippingPlanes,ne),Ot===!0&&J.setGlobalState(this.clippingPlanes,D),U!==null&&dt.render(E.state.shadowsArray,q,D);let B=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let It=k.material;if(It)if(Array.isArray(It))for(let Nt=0;Nt<It.length;Nt++){let Mt=It[Nt];Ui(Mt,q,D,k),B.add(Mt)}else Ui(It,q,D,k),B.add(It)}),E=R.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(x,D,q=null){let B=this.compile(x,D,q);return new Promise(k=>{function It(){if(B.forEach(function(Nt){let Rt=pt.get(Nt).currentProgram;(Rt===void 0||Rt.isReady())&&B.delete(Nt)}),B.size===0){k(x);return}setTimeout(It,10)}ae.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let rs=null;function en(x){rs&&rs(x)}function nn(){he.stop()}function Qt(){he.start()}let he=new du;he.setAnimationLoop(en),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(x){rs=x,nt.setAnimationLoop(x),x===null?he.stop():he.start()},nt.addEventListener("sessionstart",nn),nt.addEventListener("sessionend",Qt),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(x,D);let q=nt.enabled===!0&&nt.isPresenting===!0,B=O!==null&&($===null||q)&&O.begin(w,$);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(D),D=nt.getCamera()),x.isScene===!0&&x.onBeforeRender(w,x,D,$),E=Q.get(x,R.length),E.init(D),E.state.textureUnits=bt.getTextureUnits(),R.push(E),qt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?zt.setFromArrayCamera(D):mt.setFromProjectionMatrix(qt,ii,D.reversedDepth),ne=this.localClippingEnabled,Ot=J.init(this.clippingPlanes,ne),b=lt.get(x,g.length),b.init(),g.push(b),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let Nt=w.xr.getDepthSensingMesh();Nt!==null&&Ae(Nt,D,-1/0,w.sortObjects)}Ae(x,D,0,w.sortObjects),b.finish(),U!==null&&U.updateLights(E.state.lightsArray),w.sortObjects===!0&&b.sort(ct,Zt),ee=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ee&&N.addToRenderList(b,x),this.info.autoReset===!0&&this.info.reset(),Ot===!0&&J.beginShadows();let k=E.state.shadowsArray;if(dt.render(k,x,D),Ot===!0&&J.endShadows(),(B&&O.hasRenderPass())===!1){let Nt=b.opaque,Mt=b.transmissive;if(E.setupLights(),D.isArrayCamera){let Rt=D.cameras;if(Mt.length>0)for(let Pt=0,Wt=Rt.length;Pt<Wt;Pt++){let Kt=Rt[Pt];sn(Nt,Mt,x,Kt)}ee&&N.render(x);for(let Pt=0,Wt=Rt.length;Pt<Wt;Pt++){let Kt=Rt[Pt];Qe(b,x,Kt,Kt.viewport)}}else Mt.length>0&&sn(Nt,Mt,x,D),ee&&N.render(x),Qe(b,x,D)}$!==null&&F===0&&(bt.updateMultisampleRenderTarget($),bt.updateRenderTargetMipmap($)),B&&O.end(w),x.isScene===!0&&x.onAfterRender(w,x,D),ht.resetDefaultState(),W=-1,X=null,R.pop(),R.length>0?(E=R[R.length-1],bt.setTextureUnits(E.state.textureUnits),Ot===!0&&J.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?b=g[g.length-1]:b=null,U!==null&&U.renderEnd()};function Ae(x,D,q,B){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){let Nt=D.isArrayCamera?zt:mt;if(!x.frustumCulled||x.intersectsFrustum(Nt)){B&&Bt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(qt);let Mt=et.update(x),Rt=x.material;Rt.visible&&b.push(x,Mt,Rt,q,Bt.z,null,D)}}else if(x.isMesh||x.isLine||x.isPoints){let Nt=D.isArrayCamera?zt:mt;if(!x.frustumCulled||x.intersectsFrustum(Nt)){let Mt=et.update(x),Rt=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Bt.copy(x.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Bt.copy(Mt.boundingSphere.center)),Bt.applyMatrix4(x.matrixWorld).applyMatrix4(qt)),Array.isArray(Rt)){let Pt=Mt.groups;for(let Wt=0,Kt=Pt.length;Wt<Kt;Wt++){let Lt=Pt[Wt],$t=Rt[Lt.materialIndex];$t&&$t.visible&&b.push(x,Mt,$t,q,Bt.z,Lt,D)}}else Rt.visible&&b.push(x,Mt,Rt,q,Bt.z,null,D)}}}let It=x.children;for(let Nt=0,Mt=It.length;Nt<Mt;Nt++)Ae(It[Nt],D,q,B)}function Qe(x,D,q,B){let{opaque:k,transmissive:It,transparent:Nt}=x;E.setupLightsView(q),Ot===!0&&J.setGlobalState(w.clippingPlanes,q),B&&it.viewport(tt.copy(B)),k.length>0&&Fi(k,D,q),It.length>0&&Fi(It,D,q),Nt.length>0&&Fi(Nt,D,q),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function sn(x,D,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Lt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new Ce(1,1,{generateMipmaps:!0,type:Lt?pi:qe,minFilter:di,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let It=E.state.transmissionRenderTarget[B.id],Nt=B.viewport||tt;It.setSize(Nt.z*w.transmissionResolutionScale,Nt.w*w.transmissionResolutionScale);let Mt=w.getRenderTarget(),Rt=w.getActiveCubeFace(),Pt=w.getActiveMipmapLevel();w.setRenderTarget(It),w.getClearColor(G),ut=w.getClearAlpha(),ut<1&&w.setClearColor(16777215,.5),w.clear(),ee&&N.render(q);let Wt=w.toneMapping;w.toneMapping=Ei;let Kt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Ot===!0&&J.setGlobalState(w.clippingPlanes,B),Fi(x,q,B),bt.updateMultisampleRenderTarget(It),bt.updateRenderTargetMipmap(It),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let $t=0,Ee=D.length;$t<Ee;$t++){let pe=D[$t],{object:fe,geometry:ze,material:Dt,group:Ve}=pe;if(Dt.side===Xe&&fe.layers.test(B.layers)){let oe=Dt.side;Dt.side=Pe,Dt.needsUpdate=!0,An(fe,q,B,ze,Dt,Ve),Dt.side=oe,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(bt.updateMultisampleRenderTarget(It),bt.updateRenderTargetMipmap(It))}w.setRenderTarget(Mt,Rt,Pt),w.setClearColor(G,ut),Kt!==void 0&&(B.viewport=Kt),w.toneMapping=Wt}function Fi(x,D,q){let B=D.isScene===!0?D.overrideMaterial:null;for(let k=0,It=x.length;k<It;k++){let Nt=x[k],{object:Mt,geometry:Rt,group:Pt}=Nt,Wt=Nt.material;Wt.allowOverride===!0&&B!==null&&(Wt=B),Mt.layers.test(q.layers)&&An(Mt,D,q,Rt,Wt,Pt)}}function An(x,D,q,B,k,It){U!==null&&k.isNodeMaterial&&U.setObject(x,k),x.onBeforeRender(w,D,q,B,k,It),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(w,D,q,B,x,It),k.transparent===!0&&k.side===Xe&&k.forceSinglePass===!1?(k.side=Pe,k.needsUpdate=!0,w.renderBufferDirect(q,D,B,k,x,It),k.side=$i,k.needsUpdate=!0,w.renderBufferDirect(q,D,B,k,x,It),k.side=Xe):w.renderBufferDirect(q,D,B,k,x,It),x.onAfterRender(w,D,q,B,k,It)}function Al(x){let D=0;for(let q of x)q.texture!==null&&D++;return D}function as(x,D,q){D.isScene!==!0&&(D=ye);let B=pt.get(x),k=E.state.lights,It=E.state.shadowsArray,Nt=k.state.version,Mt=Z.getParameters(x,k.state,It,D,q,E.state.lightProbeGridArray),Rt=Z.getProgramCacheKey(Mt),Pt=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Wt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=A.get(x.envMap||B.environment,Wt),B.envMapRotation=B.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Pt===void 0&&(x.addEventListener("dispose",re),Pt=new Map,B.programs=Pt,B.programVariants=new Map);let Kt=Pt.get(Rt);if(Kt!==void 0){if(B.currentProgram===Kt&&B.lightsStateVersion===Nt)return Tl(x,Mt),Kt}else Mt.uniforms=Z.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,q,Mt),x.onBeforeCompile(Mt,w),Kt=Z.acquireProgram(Mt,Rt),Pt.set(Rt,Kt),B.uniforms=Mt.uniforms;let Lt=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Lt.clippingPlanes=J.uniform),Tl(x,Mt),B.needsLights=Nu(x),B.lightsStateVersion=Nt,B.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.sunLights.value=k.state.sun,Lt.sunLightShadows.value=k.state.sunShadow,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.sunShadowMatrix.value=k.state.sunShadowMatrix,Lt.sunShadowCascade.value=k.state.sunShadowCascade,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=Al(E.state.lightProbeGridArray),B.currentProgram=Kt,B.uniformsList=null,Kt}function Ru(x,D,q,B,k){let It=pt.get(x),Nt=It.currentProgram.id+","+B+","+k,Mt=It.programVariants.get(Nt);return Mt===void 0?(Mt=as(x,D,q),It.programVariants.set(Nt,Mt)):(It.currentProgram=Mt,It.uniformsList=null,It.outputColorSpace=B,It.toneMapping=k),Mt}function El(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=ts.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Tl(x,D){let q=pt.get(x);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function Su(x,D,q,B,k){D.isScene!==!0&&(D=ye),bt.resetTextureUnits();let It=D.fog,Nt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,Mt=$===null?w.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:te.workingColorSpace,Rt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Pt=A.get(B.envMap||Nt,Rt),Wt=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Kt=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Lt=!!q.morphAttributes.position,$t=!!q.morphAttributes.normal,Ee=!!q.morphAttributes.color,pe=Ei;B.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(pe=w.toneMapping);let fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ze=fe!==void 0?fe.length:0,Dt=pt.get(B),Ve=E.state.lights;if(Ot===!0&&(ne===!0||x!==X)){let xe=x===X&&B.id===W;J.setState(B,x,xe)}let oe=!1,rn=!1;B.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==Ve.state.version||k.isBatchedMesh&&Dt.batching===!1||!k.isBatchedMesh&&Dt.batching===!0||k.isBatchedMesh&&Dt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Dt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Dt.instancing===!1||!k.isInstancedMesh&&Dt.instancing===!0||k.isSkinnedMesh&&Dt.skinning===!1||!k.isSkinnedMesh&&Dt.skinning===!0||k.isInstancedMesh&&Dt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Dt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Dt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Dt.instancingMorph===!1&&k.morphTexture!==null||Dt.envMap!==Pt||B.fog===!0&&Dt.fog!==It||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==J.numPlanes||Dt.numIntersection!==J.numIntersection)||Dt.vertexAlphas!==Wt||Dt.vertexTangents!==Kt||Dt.morphTargets!==Lt||Dt.morphNormals!==$t||Dt.morphColors!==Ee||Dt.morphTargetsCount!==ze||Dt.numLightProbeGrids!==Al(E.state.lightProbeGridArray)?oe=!0:(Dt.outputColorSpace!==Mt||Dt.toneMapping!==pe)&&(rn=!0):(oe=!0,Dt.__version=B.version);let Oe=Dt.currentProgram;(oe===!0||rn===!0)&&(Oe=rn===!0?Ru(B,D,k,Mt,pe):as(B,D,k),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Oe,Dt));let tr=!1,Bi=!1,an=!1,se=Oe.getUniforms(),De=Dt.uniforms;if(it.useProgram(Oe.program)&&(tr=!0,Bi=!0,an=!0),B.id!==W&&(W=B.id,Bi=!0),tr||X!==x){it.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),se.setValue(_,"projectionMatrix",x.projectionMatrix),se.setValue(_,"viewMatrix",x.matrixWorldInverse);let be=se.map.cameraPosition;be!==void 0&&be.setValue(_,me.setFromMatrixPosition(x.matrixWorld)),xt.logarithmicDepthBuffer&&se.setValue(_,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&se.setValue(_,"isOrthographic",x.isOrthographicCamera===!0),X!==x&&(X=x,Bi=!0,an=!0)}if(Dt.needsLights&&(Ve.state.sunShadowMap.length>0&&se.setValue(_,"sunShadowMap",Ve.state.sunShadowMap,bt),Ve.state.directionalShadowMap.length>0&&se.setValue(_,"directionalShadowMap",Ve.state.directionalShadowMap,bt),Ve.state.spotShadowMap.length>0&&se.setValue(_,"spotShadowMap",Ve.state.spotShadowMap,bt),Ve.state.pointShadowMap.length>0&&se.setValue(_,"pointShadowMap",Ve.state.pointShadowMap,bt)),k.isSkinnedMesh){se.setOptional(_,k,"bindMatrix"),se.setOptional(_,k,"bindMatrixInverse");let xe=k.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),se.setValue(_,"boneTexture",xe.boneTexture,bt))}k.isBatchedMesh&&(se.setOptional(_,k,"batchingTexture"),se.setValue(_,"batchingTexture",k._matricesTexture,bt),se.setOptional(_,k,"batchingIdTexture"),se.setValue(_,"batchingIdTexture",k._indirectTexture,bt),se.setOptional(_,k,"batchingColorTexture"),k._colorsTexture!==null&&se.setValue(_,"batchingColorTexture",k._colorsTexture,bt));let ai=q.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&K.update(k,q,Oe),(Bi||Dt.receiveShadow!==k.receiveShadow)&&(Dt.receiveShadow=k.receiveShadow,se.setValue(_,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(De.envMapIntensity.value=D.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=sg()),Bi){if(se.setValue(_,"toneMappingExposure",w.toneMappingExposure),Dt.needsLights&&bu(De,an),It&&B.fog===!0&&rt.refreshFogUniforms(De,It),rt.refreshMaterialUniforms(De,B,gt,_t,E.state.transmissionRenderTarget[x.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let xe=T,be=0;for(let Ri of E.state.lightProbeGridArray)Ri.texture!==null&&(xe.textures[be]=Ri.texture,xe.min[be]=Ri.boundingBox.min,xe.max[be]=Ri.boundingBox.max,xe.resolution[be]=Ri.resolution,be++);for(let Ri in xe)xe[Ri].length=be;De.probesSH.value=xe.textures,De.probesMin.value=xe.min,De.probesMax.value=xe.max,De.probesResolution.value=xe.resolution}ts.upload(_,El(Dt),De,bt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ts.upload(_,El(Dt),De,bt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&se.setValue(_,"center",k.center),se.setValue(_,"modelViewMatrix",k.modelViewMatrix),se.setValue(_,"normalMatrix",k.normalMatrix),se.setValue(_,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let xe=B.uniformsGroups;for(let be=0,Ri=xe.length;be<Ri;be++){let Rl=xe[be];wt.update(Rl,Oe),wt.bind(Rl,Oe)}}return Oe}function bu(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.sunLights.needsUpdate=D,x.sunLightShadows.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Nu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(x,D,q){let B=pt.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),pt.get(x.texture).__webglTexture=D,pt.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let q=pt.get(x);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,q=0){$=x,H=D,F=q;let B=null,k=!1,It=!1;if(x){let Mt=pt.get(x);if(Mt.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(_.FRAMEBUFFER,Mt.__webglFramebuffer),tt.copy(x.viewport),ft.copy(x.scissor),St=x.scissorTest,it.viewport(tt),it.scissor(ft),it.setScissorTest(St),W=-1;return}else if(Mt.__webglFramebuffer===void 0)bt.setupRenderTarget(x);else if(Mt.__hasExternalTextures)bt.rebindTextures(x,pt.get(x.texture).__webglTexture,pt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Wt=x.depthTexture;if(Mt.__boundDepthTexture!==Wt){if(Wt!==null&&pt.has(Wt)&&(x.width!==Wt.image.width||x.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");bt.setupDepthRenderbuffer(x)}}let Rt=x.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(It=!0);let Pt=pt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?B=Pt[D][q]:B=Pt[D],k=!0):x.samples>0&&bt.useMultisampledRTT(x)===!1?B=pt.get(x).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[q]:B=Pt,tt.copy(x.viewport),ft.copy(x.scissor),St=x.scissorTest}else tt.copy(st).multiplyScalar(gt).floor(),ft.copy(yt).multiplyScalar(gt).floor(),St=Et;if(q!==0&&(B=V),it.bindFramebuffer(_.FRAMEBUFFER,B)&&it.drawBuffers(x,B),it.viewport(tt),it.scissor(ft),it.setScissorTest(St),k){let Mt=pt.get(x.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,q)}else if(It){let Mt=D;for(let Rt=0;Rt<x.textures.length;Rt++){let Pt=pt.get(x.textures[Rt]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+Rt,Pt.__webglTexture,q,Mt)}}else if(x!==null&&q!==0){let Mt=pt.get(x.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Mt.__webglTexture,q)}W=-1};function vl(x){let D=pt.get(x);return(D.__readFormat!==x.format||D.__readType!==x.type)&&(D.__readFormat=x.format,D.__readType=x.type,D.__formatReadable=xt.textureFormatReadable(x.format),D.__typeReadable=xt.textureTypeReadable(x.type)),D}this.readRenderTargetPixels=function(x,D,q,B,k,It,Nt,Mt=0){if(!(x&&x.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=pt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Nt!==void 0&&(Rt=Rt[Nt],Array.isArray(Rt)&&(Rt=Rt[0])),Rt){it.bindFramebuffer(_.FRAMEBUFFER,Rt);try{let Pt=x.textures[Mt],Wt=Pt.format,Kt=Pt.type;x.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Mt);let Lt=vl(Pt);if(Lt.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-B&&q>=0&&q<=x.height-k&&_.readPixels(D,q,B,k,at.convert(Wt),at.convert(Kt),It)}finally{let Pt=$!==null?pt.get($).__webglFramebuffer:null;it.bindFramebuffer(_.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(x,D,q,B,k,It,Nt,Mt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=pt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Nt!==void 0&&(Rt=Rt[Nt],Array.isArray(Rt)&&(Rt=Rt[0])),Rt)if(D>=0&&D<=x.width-B&&q>=0&&q<=x.height-k){it.bindFramebuffer(_.FRAMEBUFFER,Rt);let Pt=x.textures[Mt],Wt=Pt.format,Kt=Pt.type;x.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Mt);let Lt=vl(Pt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,$t),_.bufferData(_.PIXEL_PACK_BUFFER,It.byteLength,_.STREAM_READ),_.readPixels(D,q,B,k,at.convert(Wt),at.convert(Kt),0),_.bindBuffer(_.PIXEL_PACK_BUFFER,null);let Ee=$!==null?pt.get($).__webglFramebuffer:null;it.bindFramebuffer(_.FRAMEBUFFER,Ee);let pe=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Fc(_,pe,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,$t),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,It),_.bindBuffer(_.PIXEL_PACK_BUFFER,null),_.deleteBuffer($t),_.deleteSync(pe),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,q=0){let B=Math.pow(2,-q),k=Math.floor(x.image.width*B),It=Math.floor(x.image.height*B),Nt=D!==null?D.x:0,Mt=D!==null?D.y:0;bt.setTexture2D(x,0),_.copyTexSubImage2D(_.TEXTURE_2D,q,0,0,Nt,Mt,k,It),it.unbindTexture()},this.copyTextureToTexture=function(x,D,q=null,B=null,k=0,It=0){let Nt,Mt,Rt,Pt,Wt,Kt,Lt,$t,Ee,pe=x.isCompressedTexture?x.mipmaps[It]:x.image;if(q!==null)Nt=q.max.x-q.min.x,Mt=q.max.y-q.min.y,Rt=q.isBox3?q.max.z-q.min.z:1,Pt=q.min.x,Wt=q.min.y,Kt=q.isBox3?q.min.z:0;else{let se=Math.pow(2,-k);Nt=Math.floor(pe.width*se),Mt=Math.floor(pe.height*se),x.isDataArrayTexture?Rt=pe.depth:x.isData3DTexture?Rt=Math.floor(pe.depth*se):Rt=1,Pt=0,Wt=0,Kt=0}B!==null?(Lt=B.x,$t=B.y,Ee=B.z):(Lt=0,$t=0,Ee=0);let fe=at.convert(D.format),ze=at.convert(D.type),Dt;D.isData3DTexture?(bt.setTexture3D(D,0),Dt=_.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(bt.setTexture2DArray(D,0),Dt=_.TEXTURE_2D_ARRAY):(bt.setTexture2D(D,0),Dt=_.TEXTURE_2D),it.activeTexture(_.TEXTURE0),it.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,D.flipY),it.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),it.pixelStorei(_.UNPACK_ALIGNMENT,D.unpackAlignment);let Ve=it.getParameter(_.UNPACK_ROW_LENGTH),oe=it.getParameter(_.UNPACK_IMAGE_HEIGHT),rn=it.getParameter(_.UNPACK_SKIP_PIXELS),Oe=it.getParameter(_.UNPACK_SKIP_ROWS),tr=it.getParameter(_.UNPACK_SKIP_IMAGES);it.pixelStorei(_.UNPACK_ROW_LENGTH,pe.width),it.pixelStorei(_.UNPACK_IMAGE_HEIGHT,pe.height),it.pixelStorei(_.UNPACK_SKIP_PIXELS,Pt),it.pixelStorei(_.UNPACK_SKIP_ROWS,Wt),it.pixelStorei(_.UNPACK_SKIP_IMAGES,Kt);let Bi=x.isDataArrayTexture||x.isData3DTexture,an=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let se=pt.get(x),De=pt.get(D),ai=pt.get(se.__renderTarget),xe=pt.get(De.__renderTarget);it.bindFramebuffer(_.READ_FRAMEBUFFER,ai.__webglFramebuffer),it.bindFramebuffer(_.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let be=0;be<Rt;be++)Bi&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,pt.get(x).__webglTexture,k,Kt+be),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,pt.get(D).__webglTexture,It,Ee+be)),_.blitFramebuffer(Pt,Wt,Pt+Nt,Wt+Mt,Lt,$t,Lt+Nt,$t+Mt,_.DEPTH_BUFFER_BIT,_.NEAREST);it.bindFramebuffer(_.READ_FRAMEBUFFER,null),it.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||pt.has(x)){let se=pt.get(x),De=pt.get(D);it.bindFramebuffer(_.READ_FRAMEBUFFER,C),it.bindFramebuffer(_.DRAW_FRAMEBUFFER,j);for(let ai=0;ai<Rt;ai++)Bi?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,se.__webglTexture,k,Kt+ai):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,se.__webglTexture,k),an?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,De.__webglTexture,It,Ee+ai):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,De.__webglTexture,It),k!==0?_.blitFramebuffer(Pt,Wt,Pt+Nt,Wt+Mt,Lt,$t,Lt+Nt,$t+Mt,_.COLOR_BUFFER_BIT,_.NEAREST):an?_.copyTexSubImage3D(Dt,It,Lt,$t,Ee+ai,Pt,Wt,Nt,Mt):_.copyTexSubImage2D(Dt,It,Lt,$t,Pt,Wt,Nt,Mt);it.bindFramebuffer(_.READ_FRAMEBUFFER,null),it.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else an?x.isDataTexture||x.isData3DTexture?_.texSubImage3D(Dt,It,Lt,$t,Ee,Nt,Mt,Rt,fe,ze,pe.data):D.isCompressedArrayTexture?_.compressedTexSubImage3D(Dt,It,Lt,$t,Ee,Nt,Mt,Rt,fe,pe.data):_.texSubImage3D(Dt,It,Lt,$t,Ee,Nt,Mt,Rt,fe,ze,pe):x.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,It,Lt,$t,Nt,Mt,fe,ze,pe.data):x.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,It,Lt,$t,pe.width,pe.height,fe,pe.data):_.texSubImage2D(_.TEXTURE_2D,It,Lt,$t,Nt,Mt,fe,ze,pe);it.pixelStorei(_.UNPACK_ROW_LENGTH,Ve),it.pixelStorei(_.UNPACK_IMAGE_HEIGHT,oe),it.pixelStorei(_.UNPACK_SKIP_PIXELS,rn),it.pixelStorei(_.UNPACK_SKIP_ROWS,Oe),it.pixelStorei(_.UNPACK_SKIP_IMAGES,tr),It===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&_.generateMipmap(Dt),it.unbindTexture()},this.initRenderTarget=function(x){pt.get(x).__webglFramebuffer===void 0&&bt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?bt.setTextureCube(x,0):x.isData3DTexture?bt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?bt.setTexture2DArray(x,0):bt.setTexture2D(x,0),it.unbindTexture()},this.resetState=function(){H=0,F=0,$=null,it.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ja=class extends _i{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Yi;t.deleteAttribute("uv");let e=new pn({side:Pe}),i=new pn,s=new Os(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new de(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new vs(t,i,6),o=new Le;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new de(t,ns(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new de(t,ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new de(t,ns(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new de(t,ns(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new de(t,ns(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new de(t,ns(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ns(n){return new Ls({color:0,emissive:16777215,emissiveIntensity:n})}var ss={silkNormal:"/assets/li/silkNormal.jpg",silkRoughness:"/assets/li/silkRoughness.jpg",silkColor:"/assets/li/silkColor.jpg",paperColor:"/assets/li/paperColor.jpg",paperBump:"/assets/li/paperBump.jpg",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTIyLjQiIGhlaWdodD0iMTQwNy40IiB2aWV3Qm94PSItMTE4LjIgLTk1Mi4yIDQ1MjIuNCAxNDA3LjQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTM2NSAxMTVRMTM1MCAxMTMgMTMyNC4wIDEwNy41UTEyOTggMTAyIDEyNzEuMCA4Ni4wUTEyNDQgNzAgMTIyNS4wIDM3LjVRMTIwNiA1IDEyMDYgLTQ5UTEyMDYgLTExMSAxMjMxLjUgLTE4NS41UTEyNTcgLTI2MCAxMjk0LjAgLTM0MS4wUTEzMzEgLTQyMiAxMzY1IC01MDFRMTM5MiAtNTY0IDEzOTIgLTU5N1ExMzkyIC02MzAgMTM2NyAtNjMwUTEzMzkgLTYzMCAxMjgzLjUgLTU4NS41UTEyMjggLTU0MSAxMTU1IC00NTFRMTEzNiAtNDI3IDExMDYuMCAtMzg0LjVRMTA3NiAtMzQyIDEwNDIuMCAtMjkwLjVRMTAwOCAtMjM5IDk3NS41IC0xODYuNVE5NDMgLTEzNCA5MTguNSAtOTAuMFE4OTQgLTQ2IDg4MyAtMjBRODcwIDExIDg1My4wIDIyLjVRODM2IDM0IDgyMSAzNFE4MDggMzQgNzk5IDI3UTc4OSAyMCA3ODkgMTBRNzg5IDQgNzkyIDBRNzk4IC0xMiA4MjIuMCAtNTUuMFE4NDYgLTk4IDg3OC4wIC0xNjkuMFE5MTAgLTI0MCA5MzkgLTMzNFE5NDggLTM2MyA5NTcuNSAtNDAxLjBROTY3IC00MzkgOTc1LjAgLTQ3OS41UTk4MyAtNTIwIDk4OC41IC01NTUuNVE5OTQgLTU5MSA5OTQgLTYxM1E5OTQgLTY0OCA5ODIuMCAtNjY0LjVROTcwIC02ODEgOTUwIC02ODFROTI4IC02ODEgOTAwLjAgLTY2Mi4wUTg3MiAtNjQzIDg0MyAtNjA3UTc5MyAtNTQ0IDc1NS4wIC00OTAuNVE3MTcgLTQzNyA2ODUuNSAtMzg0LjBRNjU0IC0zMzEgNjIzLjUgLTI3MS4wUTU5MyAtMjExIDU1OS4wIC0xMzYuNVE1MjUgLTYyIDQ4MSAzNlE0NzQgNTIgNDU3LjUgNTkuMFE0NDEgNjYgNDI3IDY2UTQxMyA2NiA0MDQuMCA2MC4wUTM5NSA1NCAzOTggNDNRNDIwIDggNDQ3LjAgLTQ0LjVRNDc0IC05NyA1MDIuMCAtMTYxLjBRNTMwIC0yMjUgNTU2LjAgLTI5NC4wUTU4MiAtMzYzIDYwMi41IC00MjkuMFE2MjMgLTQ5NSA2MzUuMCAtNTUzLjBRNjQ3IC02MTEgNjQ3IC02NTJRNjQ3IC03MjkgNjE0LjUgLTc2Mi4wUTU4MiAtNzk1IDUzMSAtNzk1UTQ4NiAtNzk1IDQzMi4wIC03NzMuMFEzNzggLTc1MSAzMjMuNSAtNzEzLjBRMjY5IC02NzUgMjIxIC02MjdRMTUyIC01NTggMTEyLjUgLTQ3Ny4wUTczIC0zOTYgNzMgLTMxM1E3MyAtMjU3IDk0LjAgLTIxOC4wUTExNSAtMTc5IDE0OS41IC0xNTkuMFExODQgLTEzOSAyMjYgLTEzOVEyNjkgLTEzOSAzMDYuNSAtMTYwLjVRMzQ0IC0xODIgMzcyLjUgLTIxNi41UTQwMSAtMjUxIDQxNy4wIC0yODkuNVE0MzMgLTMyOCA0MzMgLTM2MlE0MzMgLTM5MSA0MTcuMCAtNDEwLjBRNDAxIC00MjkgMzY2IC00MjlRMzYyIC00MjkgMzU3LjUgLTQyOC41UTM1MyAtNDI4IDM0OCAtNDI4SDM0NVEzMzggLTQyOCAzMzIuMCAtNDMwLjVRMzI2IC00MzMgMzI2IC00MzdRMzI2IC00NDEgMzM2LjUgLTQ0Ni4wUTM0NyAtNDUxIDM3NSAtNDUxUTQyMCAtNDUxIDQ0Mi41IC00MjQuNVE0NjUgLTM5OCA0NjUgLTM1N1E0NjUgLTMxNyA0NDQuNSAtMjc1LjBRNDI0IC0yMzMgMzg5LjAgLTE5Ny4wUTM1NCAtMTYxIDMxMC41IC0xMzkuMFEyNjcgLTExNyAyMjEgLTExN1ExNjcgLTExNyAxMjAuNSAtMTQyLjBRNzQgLTE2NyA0Ni4wIC0yMTQuNVExOCAtMjYyIDE4IC0zMjhRMTggLTM5MSA0NC4wIC00NTIuNVE3MCAtNTE0IDExMS41IC01NjguNVExNTMgLTYyMyAyMDAgLTY2NVEyNTIgLTcxMiAzMTAuMCAtNzQ1LjVRMzY4IC03NzkgNDI1LjUgLTc5Ny41UTQ4MyAtODE2IDUzMyAtODE2UTYwNyAtODE2IDY1NS41IC03NzIuMFE3MDQgLTcyOCA3MDQgLTYzMFE3MDQgLTU5MCA2OTMuMCAtNTM4LjVRNjgyIC00ODcgNjY3LjAgLTQzNS41UTY1MiAtMzg0IDYzOCAtMzQ0SDY0MFE2NzYgLTQwOSA3MDQuNSAtNDU1LjVRNzMzIC01MDIgNzYyLjAgLTU0Mi4wUTc5MSAtNTgyIDgyNyAtNjI2UTg1OCAtNjYzIDg5OC4wIC02ODUuMFE5MzggLTcwNyA5NzUgLTcwN1ExMDA4IC03MDcgMTAzMS4wIC02ODUuMFExMDU0IC02NjMgMTA1NCAtNjEwUTEwNTQgLTYwNCAxMDU0LjAgLTYwMC4wUTEwNTQgLTU5NiAxMDUzIC01ODhRMTA0NCAtNDkyIDEwMTUuMCAtMzk5LjVROTg2IC0zMDcgOTU1IC0yMTNROTg2IC0yNjEgMTAzOS4wIC0zMzUuMFExMDkyIC00MDkgMTE1NSAtNDg4UTEyMzIgLTU4NCAxMjk4LjAgLTYzMi4wUTEzNjQgLTY4MCAxNDA3IC02ODBRMTQ2MSAtNjgwIDE0NjEgLTYxNFExNDYxIC01ODkgMTQ1MS41IC01NTQuMFExNDQyIC01MTkgMTQyMiAtNDgwUTE0MDAgLTQzNiAxMzczLjUgLTM3OC41UTEzNDcgLTMyMSAxMzIzLjAgLTI1OC4wUTEyOTkgLTE5NSAxMjgzLjUgLTEzNC41UTEyNjggLTc0IDEyNjggLTIzUTEyNjggMzIgMTI5My41IDY1LjVRMTMxOSA5OSAxMzgyIDk5SDEzODhRMTQwMyA5OSAxNDAzIDEwNVExNDAzIDEwOSAxMzkzLjAgMTEzLjBRMTM4MyAxMTcgMTM2NSAxMTVaTTEyOTkgOFExMzM1IC02NSAxMzY4LjAgLTEzNi41UTE0MDEgLTIwOCAxNDM2IC0yNzNRMTQ1NiAtMzA5IDE0NzAuMCAtMzIzLjVRMTQ4NCAtMzM4IDE1MDcgLTMzOFExNTE1IC0zMzggMTUyNC4wIC0zMzUuNVExNTMzIC0zMzMgMTU0MiAtMzMzUTE1NDggLTMzMyAxNTUxIC0zMzRRMTUzNyAtMzI2IDE1MTQuNSAtMjk0LjVRMTQ5MiAtMjYzIDE0NjkuMCAtMjIyLjBRMTQ0NiAtMTgxIDE0MjggLTE0NVExNDQ3IC0xNjggMTQ2OC4wIC0xOTEuMFExNDg5IC0yMTQgMTUxNCAtMjM1UTE1MzggLTI1NiAxNTcxLjUgLTI3OC41UTE2MDUgLTMwMSAxNjM3LjAgLTMxNi4wUTE2NjkgLTMzMSAxNjg4IC0zMzFRMTY5NSAtMzMxIDE2OTggLTMzMFExNjk4IC0zMzAgMTY4Ny4wIC0zMTAuNVExNjc2IC0yOTEgMTY1OS41IC0yNTkuNVExNjQzIC0yMjggMTYyNi4wIC0xOTIuNVExNjA5IC0xNTcgMTU5NS41IC0xMjQuNVExNTgyIC05MiAxNTc4IC03MFExNTc1IC01NyAxNTc1IC00NlExNTc1IC0zMCAxNTgxLjAgLTI1LjBRMTU4NyAtMjAgMTU5NCAtMjBRMTYxMyAtMjAgMTYzMy4wIC0zNy4wUTE2NTMgLTU0IDE2NzEuNSAtODAuNVExNjkwIC0xMDcgMTcwNi4wIC0xMzcuMFExNzIyIC0xNjcgMTczMyAtMTkzUTE3NDUgLTE5MyAxNzQ1IC0xODRRMTczNCAtMTU3IDE3MTcuNSAtMTI0LjVRMTcwMSAtOTIgMTY4MC41IC02My4wUTE2NjAgLTM0IDE2MzUuMCAtMTUuMFExNjEwIDQgMTU4MSA0UTE1NjEgNCAxNTM5LjUgLTEwLjBRMTUxOCAtMjQgMTUxOCAtNjJRMTUxOCAtNzMgMTUyMC4wIC04NS41UTE1MjIgLTk4IDE1MjcgLTExM1ExNTM1IC0xMzMgMTU0Ni4wIC0xNTYuMFExNTU3IC0xNzkgMTU4MiAtMjE5UTE1ODkgLTIzMCAxNTkwLjUgLTIzNi4wUTE1OTIgLTI0MiAxNTkyIC0yNDZRMTU5MiAtMjU4IDE1ODEgLTI1OFExNTcyIC0yNTggMTU1NC41IC0yNDguMFExNTM3IC0yMzggMTUxMSAtMjEzUTE0ODYgLTE4OSAxNDUxLjUgLTE0NS4wUTE0MTcgLTEwMSAxMzcyIC0xNVExMzY1IC0yIDEzNTYuNSAtMS4wUTEzNDggMCAxMzMzIDFRMTMyMyAyIDEzMTQuMCAyLjVRMTMwNSAzIDEyOTkgOFpNMTM3MiAzMTlRMTMyMCAzMTkgMTI5OC41IDI5OC41UTEyNzcgMjc4IDEyNzcgMjUwUTEyNzcgMjIzIDEyOTIgMTk2UTEzMDYgMTY3IDEzMzEuMCAxNDYuNVExMzU2IDEyNiAxMzg2IDExMlExNDM3IDg4IDE1MDMuNSA3My4wUTE1NzAgNTggMTYzMSA0MFExNjM5IDI2IDE2NDcuNSAxMS4wUTE2NTYgLTQgMTY2MyAtMThRMTY4MyAtNTggMTcwMC4wIC05Ny41UTE3MTcgLTEzNyAxNzQyIC0xODNRMTczMyAtMTgzIDE3MzMgLTE5M0wxNzc3IC0yOTRRMTc3OCAtMjk2IDE3NzkuMCAtMjk5LjVRMTc4MCAtMzAzIDE3ODAgLTMwN1ExNzgwIC0zMTggMTc3NS4wIC0zMjUuNVExNzcwIC0zMzMgMTc2OCAtMzM2TDE4MjMgLTMzOEgxODI4UTE4NTAgLTMzOCAxODUwIC0zMjRRMTg1MCAtMzE3IDE4NDQgLTMwMkwxNzY0IC0xMTRRMTc1MCAtODEgMTczNC4wIC00OC4wUTE3MTggLTE1IDE3MDEgMTlRMTc3MSAtOCAxODEyLjUgLTQ3LjVRMTg1NCAtODcgMTg3Ni41IC0xMjYuNVExODk5IC0xNjYgMTkxMSAtMTkzUTE5MjMgLTE5MyAxOTIzIC0xODRRMTkxMyAtMTYyIDE4OTcuMCAtMTMxLjVRMTg4MSAtMTAxIDE4NTUuMCAtNjcuNVExODI5IC0zNCAxNzg4LjAgLTMuMFExNzQ3IDI4IDE2ODUgNTFRMTY2MSA5NCAxNjMwLjAgMTQwLjVRMTU5OSAxODcgMTU2MC4wIDIyNy41UTE1MjEgMjY4IDE0NzQuNSAyOTMuNVExNDI4IDMxOSAxMzcyIDMxOVpNMTM0OCAyOTlRMTM4MSAyOTkgMTQxNi41IDI3OS4wUTE0NTIgMjU5IDE0ODUuMCAyMjguNVExNTE4IDE5OCAxNTQ1LjUgMTY2LjBRMTU3MyAxMzQgMTU5MCAxMTBRMTU5NiAxMDIgMTYwMS4wIDkyLjBRMTYwNiA4MiAxNjExIDcyUTE1NjMgODUgMTUwNS4wIDEwMC41UTE0NDcgMTE2IDE0MDMgMTM1UTEzNTUgMTU1IDEzMjguMCAxOTEuNVExMzAxIDIyOCAxMzAxIDI1N1ExMzAxIDI3NiAxMzEyLjUgMjg3LjVRMTMyNCAyOTkgMTM0OCAyOTlaTTE4NTIgLTQwMFExODM5IC00MDAgMTgyOS41IC00MTAuMFExODIwIC00MjAgMTgyMCAtNDM0UTE4MjAgLTQ1MSAxODM0LjAgLTQ2NC41UTE4NDggLTQ3OCAxODY1IC00NzhRMTg3OSAtNDc4IDE4ODkuMCAtNDY5LjBRMTg5OSAtNDYwIDE4OTkgLTQ0NlExODk5IC00MjggMTg4NS4wIC00MTQuMFExODcxIC00MDAgMTg1MiAtNDAwWk0yMTI4IDNRMjEwNSAzIDIwODcuNSAtMTAuMFEyMDcwIC0yMyAyMDcwIC02M1EyMDcwIC04MCAyMDcyLjUgLTk1LjBRMjA3NSAtMTEwIDIwNzkgLTEyN1EyMDcwIC0xMTIgMjA1NC4wIC05MC4wUTIwMzggLTY4IDIwMTguNSAtNDcuMFExOTk5IC0yNiAxOTc4LjUgLTEyLjBRMTk1OCAyIDE5NDAgMlExOTE0IDIgMTg5OC4wIC0yMS41UTE4ODIgLTQ1IDE4ODIgLTgzUTE4ODIgLTEyNCAxOTAxLjAgLTE3MS4wUTE5MjAgLTIxOCAxOTUzLjAgLTI2MS4wUTE5ODYgLTMwNCAyMDI5LjAgLTMzMS4wUTIwNzIgLTM1OCAyMTE5IC0zNThRMjE0MiAtMzU4IDIxNjMuMCAtMzUwLjVRMjE4NCAtMzQzIDIyMDAgLTMyNlEyMjA3IC0zMTkgMjIwNyAtMzEwUTIyMDcgLTMwNCAyMjAyLjAgLTMwMC4wUTIxOTcgLTI5NiAyMTg5IC0yOThRMjE3OCAtMzMzIDIxNDIgLTMzM1EyMTI1IC0zMzMgMjEwMyAtMzIyUTIwNzYgLTMwOCAyMDQ1LjUgLTI3Ny41UTIwMTUgLTI0NyAxOTg4LjUgLTIwOC41UTE5NjIgLTE3MCAxOTQ1LjAgLTEzMS4wUTE5MjggLTkyIDE5MjggLTYwUTE5MjggLTI3IDE5NTMgLTI3UTE5NzUgLTI3IDE5OTguNSAtNDguMFEyMDIyIC02OSAyMDQzLjUgLTEwMC41UTIwNjUgLTEzMiAyMDgzLjAgLTE2My4wUTIxMDEgLTE5NCAyMTExIC0yMTNRMjEyNiAtMjQwIDIxMzkuMCAtMjU4LjBRMjE1MiAtMjc2IDIxNzYgLTI3NlEyMTg3IC0yNzYgMjE5OC4wIC0yNzMuMFEyMjA5IC0yNzAgMjIyMSAtMjcyUTIxOTEgLTI0MiAyMTY4LjUgLTIwMS4wUTIxNDYgLTE2MCAyMTM0LjAgLTEyMC41UTIxMjIgLTgxIDIxMjIgLTU0UTIxMjIgLTI0IDIxNDIgLTI0UTIxNTggLTI0IDIxNzYuNSAtNDIuMFEyMTk1IC02MCAyMjEyLjUgLTg3LjVRMjIzMCAtMTE1IDIyNDUuMCAtMTQzLjVRMjI2MCAtMTcyIDIyNjkgLTE5M1EyMjc0IC0xOTMgMjI3Ny41IC0xOTIuMFEyMjgxIC0xOTEgMjI4MSAtMTg0UTIyODAgLTE4MCAyMjc3LjUgLTE3NS41UTIyNzUgLTE3MSAyMjcwIC0xNjBRMjI2MiAtMTQ0IDIyNDguMCAtMTE3LjBRMjIzNCAtOTAgMjIxNS4wIC02Mi41UTIxOTYgLTM1IDIxNzQuMCAtMTYuMFEyMTUyIDMgMjEyOCAzWk0yMjk4IDBRMjI4NyAwIDIyNzEuNSAtNS4wUTIyNTYgLTEwIDIyNDQuNSAtMjMuNVEyMjMzIC0zNyAyMjMzIC02NFEyMjMzIC05MCAyMjUwLjAgLTEyNC4wUTIyNjcgLTE1OCAyMjgwIC0xODRRMjI2OSAtMTg0IDIyNjkgLTE5M1EyMjcwIC0xOTYgMjI3OC4wIC0yMTIuMFEyMjg2IC0yMjggMjI5Ny4wIC0yNTAuMFEyMzA4IC0yNzIgMjMxOC41IC0yOTIuNVEyMzI5IC0zMTMgMjMzNSAtMzI0UTIzNDcgLTM0NiAyMzczIC0zNDZIMjQzNVEyNDE4IC0zMzMgMjQwNC41IC0zMTcuNVEyMzkxIC0zMDIgMjM3MSAtMjYxUTIzNzEgLTI2MSAyMzY0LjAgLTI0Ny4wUTIzNTcgLTIzMyAyMzQ2LjUgLTIxMS41UTIzMzYgLTE5MCAyMzI1LjUgLTE2OC4wUTIzMTUgLTE0NiAyMzA4IC0xMzFRMjI5NSAtMTAzIDIyOTEuMCAtODYuNVEyMjg3IC03MCAyMjg3IC01NlEyMjg3IC0yMyAyMzA5IC0yM1EyMzMzIC0yMyAyMzY3IC02MlEyMzk1IC05NSAyNDIyLjAgLTE0MS4wUTI0NDkgLTE4NyAyNDczLjUgLTIzNi4wUTI0OTggLTI4NSAyNTE3IC0zMjRRMjUyOCAtMzQ2IDI1NTYgLTM0NkgyNjExUTI1ODkgLTMyOCAyNTY2LjUgLTI5Mi4wUTI1NDQgLTI1NiAyNTE3IC0yMDBRMjUxMCAtMTg1IDI0OTkuMCAtMTYyLjBRMjQ4OCAtMTM5IDI0NzkuNSAtMTEzLjBRMjQ3MSAtODcgMjQ3MSAtNjFRMjQ3MSAtMjYgMjQ5NiAtMjZRMjUzMCAtMjYgMjU2Mi4wIC03My4wUTI1OTQgLTEyMCAyNjI1IC0xOTNRMjYzMyAtMTkzIDI2MzQuNSAtMTkyLjBRMjYzNiAtMTkxIDI2MzcgLTE4NFEyNjI2IC0xNTcgMjYxMC41IC0xMjUuNVEyNTk1IC05NCAyNTc1LjUgLTY1LjBRMjU1NiAtMzYgMjUzMi41IC0xOC4wUTI1MDkgMCAyNDgxIDBRMjQ1NiAwIDI0NDAuMCAtMTguNVEyNDI0IC0zNyAyNDI0IC03MVEyNDI0IC05OCAyNDM0IC0xMjlRMjQxNyAtOTkgMjM5NS4wIC02OS4wUTIzNzMgLTM5IDIzNDguMCAtMTkuNVEyMzIzIDAgMjI5OCAwWk0yNDY4IDI3M1EyNDU2IDI3MyAyNDQzLjUgMjY5LjVRMjQzMSAyNjYgMjQxOCAyNjhRMjQyNCAyNjIgMjQ0MS4wIDIzMy41UTI0NTggMjA1IDI0ODEuMCAxNjIuNVEyNTA0IDEyMCAyNTI4LjUgNzAuNVEyNTUzIDIxIDI1NzYuMCAtMjcuNVEyNTk5IC03NiAyNjE1LjUgLTExNy41UTI2MzIgLTE1OSAyNjM3IC0xODRRMjYzMiAtMTg0IDI2MjguMCAtMTg2LjBRMjYyNCAtMTg4IDI2MjUgLTE5M1EyNjI1IC0xOTMgMjYzMS4wIC0yMTEuMFEyNjM3IC0yMjkgMjY0My4wIC0yNTQuNVEyNjQ5IC0yODAgMjY0OSAtMzAxUTI2NDkgLTMxNSAyNjQ2LjAgLTMyNS4wUTI2NDMgLTMzNSAyNjM1IC0zMzZMMjY4NSAtMzQ0UTI2OTEgLTM0NSAyNjk2LjAgLTM0NS41UTI3MDEgLTM0NiAyNzA1IC0zNDZRMjcxNCAtMzQ2IDI3MTcuNSAtMzM5LjVRMjcyMSAtMzMzIDI3MjEgLTMxM1EyNzIxIC0yODggMjcxMi41IC0yNDkuNVEyNzA0IC0yMTEgMjY5MyAtMTgyUTI3MDQgLTIwMCAyNzIxLjUgLTIyOC4wUTI3MzkgLTI1NiAyNzYyLjAgLTI4NS4wUTI3ODUgLTMxNCAyODEwLjAgLTMzMy41UTI4MzUgLTM1MyAyODU5IC0zNTNRMjg2NCAtMzUzIDI4NzIgLTM1MVEyOTAwIC0zNDQgMjkxMS41IC0zMjMuNVEyOTIzIC0zMDMgMjkyMyAtMjc1UTI5MjMgLTI0NSAyOTExLjUgLTIwOS4wUTI5MDAgLTE3MyAyODgxLjAgLTEzOC41UTI4NjIgLTEwNCAyODM5IC03NlEyODExIC00MSAyNzcyLjAgLTIwLjBRMjczMyAxIDI2OTIgMVEyNjU1IDEgMjYyMyAtMThMMjUyOCAyMjFRMjUxNCAyNTEgMjUwMS4wIDI2Mi4wUTI0ODggMjczIDI0NjggMjczWk0yNjYwIC0yMFEyNjg4IC0yMCAyNzIzLjAgLTQ2LjBRMjc1OCAtNzIgMjc5MC41IC0xMTIuNVEyODIzIC0xNTMgMjg0NSAtMTk0UTI4NjAgLTIyMiAyODY3LjAgLTI0NS41UTI4NzQgLTI2OSAyODc0IC0yODZRMjg3NCAtMzI1IDI4NDYgLTMyNVEyODMzIC0zMjUgMjgxMi41IC0zMTEuMFEyNzkyIC0yOTcgMjc2NSAtMjYwUTI3MzYgLTIyMCAyNzAxLjUgLTE1OS41UTI2NjcgLTk5IDI2MzEgLTMyUTI2NDMgLTIwIDI2NjAgLTIwWk0yOTYyIC0xOTZRMjk3MCAtMjEzIDI5ODMuMCAtMjUwLjVRMjk5NiAtMjg4IDMwMTAuMCAtMzM0LjBRMzAyNCAtMzgwIDMwMzEgLTQyMVEzMDM0IC00MzcgMzA0Mi4wIC00NDQuNVEzMDUwIC00NTIgMzA1OSAtNDUyUTMwNzIgLTQ1MiAzMDgzLjAgLTQzOS41UTMwOTQgLTQyNyAzMDk0IC00MDRRMzA5NCAtMzc2IDMwNzcuNSAtMzU2LjBRMzA2MSAtMzM2IDMwMzcgLTMxOFEzMDQ3IC0zMTcgMzA1OC4wIC0zMTYuNVEzMDY5IC0zMTYgMzA4MiAtMzE2UTMxMjkgLTMxNiAzMTc1IC0zMjJRMzE3NyAtMzE2IDMxNzcgLTMxM1EzMTc3IC0zMDAgMzE2OS41IC0yODAuMFEzMTYyIC0yNjAgMzE1NCAtMjQ0UTMxNTAgLTIzNSAzMTM4LjAgLTIxMS41UTMxMjYgLTE4OCAzMTEyLjAgLTE1OC41UTMwOTggLTEyOSAzMDg4LjUgLTEwMC41UTMwNzkgLTcyIDMwNzkgLTUyUTMwNzkgLTI2IDMwOTkgLTI2UTMxMTggLTI2IDMxNTIuMCAtNzAuNVEzMTg2IC0xMTUgMzIyMCAtMTkzUTMyMzIgLTE5MyAzMjMyIC0xODRRMzIyMSAtMTU3IDMyMDQuNSAtMTI1LjBRMzE4OCAtOTMgMzE2OC4wIC02NC41UTMxNDggLTM2IDMxMjUuMCAtMTcuNVEzMTAyIDEgMzA3NyAxUTMwNTggMSAzMDM5LjAgLTE0LjVRMzAyMCAtMzAgMzAyMCAtNjVRMzAyMCAtOTYgMzAzMi4wIC0xMjUuNVEzMDQ0IC0xNTUgMzA1OS4wIC0xODEuMFEzMDc0IC0yMDcgMzA4Ni4wIC0yMjcuMFEzMDk4IC0yNDcgMzA5OCAtMjU5UTMwOTggLTI3NyAzMDc1LjUgLTI4NS4wUTMwNTMgLTI5MyAzMDE3IC0yOTRRMjk5OSAtMjQ4IDI5OTAuMCAtMjI2LjBRMjk4MSAtMjA0IDI5NzMgLTE4NFEyOTU3IC0xODQgMjk2MiAtMTk2Wk0zMjIxIC0xOTZRMzIyOSAtMjEzIDMyNDIuMCAtMjUwLjVRMzI1NSAtMjg4IDMyNjkuMCAtMzM0LjBRMzI4MyAtMzgwIDMyOTAgLTQyMVEzMjkzIC00MzcgMzMwMS4wIC00NDQuNVEzMzA5IC00NTIgMzMxOCAtNDUyUTMzMzEgLTQ1MiAzMzQyLjAgLTQzOS41UTMzNTMgLTQyNyAzMzUzIC00MDRRMzM1MyAtMzc2IDMzMzYuNSAtMzU2LjBRMzMyMCAtMzM2IDMyOTYgLTMxOFEzMzA2IC0zMTcgMzMxNy4wIC0zMTYuNVEzMzI4IC0zMTYgMzM0MSAtMzE2UTMzODggLTMxNiAzNDM0IC0zMjJRMzQzNiAtMzE2IDM0MzYgLTMxM1EzNDM2IC0zMDAgMzQyOC41IC0yODAuMFEzNDIxIC0yNjAgMzQxMyAtMjQ0UTM0MDkgLTIzNSAzMzk3LjAgLTIxMS41UTMzODUgLTE4OCAzMzcxLjAgLTE1OC41UTMzNTcgLTEyOSAzMzQ3LjUgLTEwMC41UTMzMzggLTcyIDMzMzggLTUyUTMzMzggLTI2IDMzNTggLTI2UTMzNzcgLTI2IDM0MTEuMCAtNzAuNVEzNDQ1IC0xMTUgMzQ3OSAtMTkzUTM0OTEgLTE5MyAzNDkxIC0xODRRMzQ4MCAtMTU3IDM0NjMuNSAtMTI1LjBRMzQ0NyAtOTMgMzQyNy4wIC02NC41UTM0MDcgLTM2IDMzODQuMCAtMTcuNVEzMzYxIDEgMzMzNiAxUTMzMTcgMSAzMjk4LjAgLTE0LjVRMzI3OSAtMzAgMzI3OSAtNjVRMzI3OSAtOTYgMzI5MS4wIC0xMjUuNVEzMzAzIC0xNTUgMzMxOC4wIC0xODEuMFEzMzMzIC0yMDcgMzM0NS4wIC0yMjcuMFEzMzU3IC0yNDcgMzM1NyAtMjU5UTMzNTcgLTI3NyAzMzM0LjUgLTI4NS4wUTMzMTIgLTI5MyAzMjc2IC0yOTRRMzI1OCAtMjQ4IDMyNDkuMCAtMjI2LjBRMzI0MCAtMjA0IDMyMzIgLTE4NFEzMjE2IC0xODQgMzIyMSAtMTk2Wk0zNDgwIC0xOTZRMzQ4OCAtMjEzIDM1MDEuMCAtMjUwLjVRMzUxNCAtMjg4IDM1MjguMCAtMzM0LjBRMzU0MiAtMzgwIDM1NDkgLTQyMVEzNTUyIC00MzcgMzU2MC4wIC00NDQuNVEzNTY4IC00NTIgMzU3NyAtNDUyUTM1OTAgLTQ1MiAzNjAxLjAgLTQzOS41UTM2MTIgLTQyNyAzNjEyIC00MDRRMzYxMiAtMzc2IDM1OTUuNSAtMzU2LjBRMzU3OSAtMzM2IDM1NTUgLTMxOFEzNTY1IC0zMTcgMzU3Ni4wIC0zMTYuNVEzNTg3IC0zMTYgMzYwMCAtMzE2UTM2NDcgLTMxNiAzNjkzIC0zMjJRMzY5NSAtMzE2IDM2OTUgLTMxM1EzNjk1IC0zMDAgMzY4Ny41IC0yODAuMFEzNjgwIC0yNjAgMzY3MiAtMjQ0UTM2NjggLTIzNSAzNjU2LjAgLTIxMS41UTM2NDQgLTE4OCAzNjMwLjAgLTE1OC41UTM2MTYgLTEyOSAzNjA2LjUgLTEwMC41UTM1OTcgLTcyIDM1OTcgLTUyUTM1OTcgLTI2IDM2MTcgLTI2UTM2MzYgLTI2IDM2NzAuMCAtNzAuNVEzNzA0IC0xMTUgMzczOCAtMTkzUTM3NTAgLTE5MyAzNzUwIC0xODRRMzczOSAtMTU3IDM3MjIuNSAtMTI1LjBRMzcwNiAtOTMgMzY4Ni4wIC02NC41UTM2NjYgLTM2IDM2NDMuMCAtMTcuNVEzNjIwIDEgMzU5NSAxUTM1NzYgMSAzNTU3LjAgLTE0LjVRMzUzOCAtMzAgMzUzOCAtNjVRMzUzOCAtOTYgMzU1MC4wIC0xMjUuNVEzNTYyIC0xNTUgMzU3Ny4wIC0xODEuMFEzNTkyIC0yMDcgMzYwNC4wIC0yMjcuMFEzNjE2IC0yNDcgMzYxNiAtMjU5UTM2MTYgLTI3NyAzNTkzLjUgLTI4NS4wUTM1NzEgLTI5MyAzNTM1IC0yOTRRMzUxNyAtMjQ4IDM1MDguMCAtMjI2LjBRMzQ5OSAtMjA0IDM0OTEgLTE4NFEzNDc1IC0xODQgMzQ4MCAtMTk2Wk0zNzM5IC0xOTZRMzc0NyAtMjEzIDM3NjAuMCAtMjUwLjVRMzc3MyAtMjg4IDM3ODcuMCAtMzM0LjBRMzgwMSAtMzgwIDM4MDggLTQyMVEzODExIC00MzcgMzgxOS4wIC00NDQuNVEzODI3IC00NTIgMzgzNiAtNDUyUTM4NDkgLTQ1MiAzODYwLjAgLTQzOS41UTM4NzEgLTQyNyAzODcxIC00MDRRMzg3MSAtMzc2IDM4NTQuNSAtMzU2LjBRMzgzOCAtMzM2IDM4MTQgLTMxOFEzODI0IC0zMTcgMzgzNS4wIC0zMTYuNVEzODQ2IC0zMTYgMzg1OSAtMzE2UTM5MDYgLTMxNiAzOTUyIC0zMjJRMzk1NCAtMzE2IDM5NTQgLTMxM1EzOTU0IC0zMDAgMzk0Ni41IC0yODAuMFEzOTM5IC0yNjAgMzkzMSAtMjQ0UTM5MjcgLTIzNSAzOTE1LjAgLTIxMS41UTM5MDMgLTE4OCAzODg5LjAgLTE1OC41UTM4NzUgLTEyOSAzODY1LjUgLTEwMC41UTM4NTYgLTcyIDM4NTYgLTUyUTM4NTYgLTI2IDM4NzYgLTI2UTM4OTUgLTI2IDM5MjkuMCAtNzAuNVEzOTYzIC0xMTUgMzk5NyAtMTkzUTQwMDkgLTE5MyA0MDA5IC0xODRRMzk5OCAtMTU3IDM5ODEuNSAtMTI1LjBRMzk2NSAtOTMgMzk0NS4wIC02NC41UTM5MjUgLTM2IDM5MDIuMCAtMTcuNVEzODc5IDEgMzg1NCAxUTM4MzUgMSAzODE2LjAgLTE0LjVRMzc5NyAtMzAgMzc5NyAtNjVRMzc5NyAtOTYgMzgwOS4wIC0xMjUuNVEzODIxIC0xNTUgMzgzNi4wIC0xODEuMFEzODUxIC0yMDcgMzg2My4wIC0yMjcuMFEzODc1IC0yNDcgMzg3NSAtMjU5UTM4NzUgLTI3NyAzODUyLjUgLTI4NS4wUTM4MzAgLTI5MyAzNzk0IC0yOTRRMzc3NiAtMjQ4IDM3NjcuMCAtMjI2LjBRMzc1OCAtMjA0IDM3NTAgLTE4NFEzNzM0IC0xODQgMzczOSAtMTk2Wk0zOTk4IC0xOTZRNDAwNiAtMjEzIDQwMTkuMCAtMjUwLjVRNDAzMiAtMjg4IDQwNDYuMCAtMzM0LjBRNDA2MCAtMzgwIDQwNjcgLTQyMVE0MDcwIC00MzcgNDA3OC4wIC00NDQuNVE0MDg2IC00NTIgNDA5NSAtNDUyUTQxMDggLTQ1MiA0MTE5LjAgLTQzOS41UTQxMzAgLTQyNyA0MTMwIC00MDRRNDEzMCAtMzc2IDQxMTMuNSAtMzU2LjBRNDA5NyAtMzM2IDQwNzMgLTMxOFE0MDgzIC0zMTcgNDA5NC4wIC0zMTYuNVE0MTA1IC0zMTYgNDExOCAtMzE2UTQxNjUgLTMxNiA0MjExIC0zMjJRNDIxMyAtMzE2IDQyMTMgLTMxM1E0MjEzIC0zMDAgNDIwNS41IC0yODAuMFE0MTk4IC0yNjAgNDE5MCAtMjQ0UTQxODYgLTIzNSA0MTc0LjAgLTIxMS41UTQxNjIgLTE4OCA0MTQ4LjAgLTE1OC41UTQxMzQgLTEyOSA0MTI0LjUgLTEwMC41UTQxMTUgLTcyIDQxMTUgLTUyUTQxMTUgLTI2IDQxMzUgLTI2UTQxNTQgLTI2IDQxODguMCAtNzAuNVE0MjIyIC0xMTUgNDI1NiAtMTkzUTQyNjggLTE5MyA0MjY4IC0xODRRNDI1NyAtMTU3IDQyNDAuNSAtMTI1LjBRNDIyNCAtOTMgNDIwNC4wIC02NC41UTQxODQgLTM2IDQxNjEuMCAtMTcuNVE0MTM4IDEgNDExMyAxUTQwOTQgMSA0MDc1LjAgLTE0LjVRNDA1NiAtMzAgNDA1NiAtNjVRNDA1NiAtOTYgNDA2OC4wIC0xMjUuNVE0MDgwIC0xNTUgNDA5NS4wIC0xODEuMFE0MTEwIC0yMDcgNDEyMi4wIC0yMjcuMFE0MTM0IC0yNDcgNDEzNCAtMjU5UTQxMzQgLTI3NyA0MTExLjUgLTI4NS4wUTQwODkgLTI5MyA0MDUzIC0yOTRRNDAzNSAtMjQ4IDQwMjYuMCAtMjI2LjBRNDAxNyAtMjA0IDQwMDkgLTE4NFEzOTkzIC0xODQgMzk5OCAtMTk2WiIvPjwvc3ZnPg==",emboss:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMTguMiAtOTUyLjIgNDUyMi40IDE0MDcuNCI+PGRlZnM+PGZpbHRlciBpZD0icGFwZXItcmVsaWVmIiB4PSItMTAlIiB5PSItMjUlIiB3aWR0aD0iMTIwJSIgaGVpZ2h0PSIxNjAlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249Ii4zMiIgcmVzdWx0PSJzb2Z0Ii8+CjxmZU9mZnNldCBpbj0ic29mdCIgZHg9Ii41IiBkeT0iLjg1IiByZXN1bHQ9ImNhc3QiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiM4ZTgwNjYiIGZsb29kLW9wYWNpdHk9Ii41NSIgcmVzdWx0PSJzaGFkZSIvPgo8ZmVDb21wb3NpdGUgaW49InNoYWRlIiBpbjI9ImNhc3QiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJzaGFkb3ciLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii40NSIgZHk9Ii42NSIgcmVzdWx0PSJkb3duIi8+CjxmZUNvbXBvc2l0ZSBpbj0iU291cmNlQWxwaGEiIGluMj0iZG93biIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJ1cHBlckVkZ2UiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiNmZmZlZjciIGZsb29kLW9wYWNpdHk9IjEiIHJlc3VsdD0ibGlnaHQiLz4KPGZlQ29tcG9zaXRlIGluPSJsaWdodCIgaW4yPSJ1cHBlckVkZ2UiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJoaWdobGlnaHQiLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii0uNCIgZHk9Ii0uNiIgcmVzdWx0PSJ1cCIvPgo8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUFscGhhIiBpbjI9InVwIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9Imxvd2VyRWRnZSIvPgo8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2IyYTU4YiIgZmxvb2Qtb3BhY2l0eT0iLjY1IiByZXN1bHQ9Imxvd2VyU2hhZGUiLz4KPGZlQ29tcG9zaXRlIGluPSJsb3dlclNoYWRlIiBpbjI9Imxvd2VyRWRnZSIgb3BlcmF0b3I9ImluIiByZXN1bHQ9Imxvd2VyIi8+CjxmZU1lcmdlPjxmZU1lcmdlTm9kZSBpbj0ic2hhZG93Ii8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PGZlTWVyZ2VOb2RlIGluPSJoaWdobGlnaHQiLz48ZmVNZXJnZU5vZGUgaW49Imxvd2VyIi8+PC9mZU1lcmdlPgo8L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0iI2U4ZTFjZiIgZmlsdGVyPSJ1cmwoI3BhcGVyLXJlbGllZikiPjxwYXRoIGQ9Ik0xMzY1IDExNVExMzUwIDExMyAxMzI0LjAgMTA3LjVRMTI5OCAxMDIgMTI3MS4wIDg2LjBRMTI0NCA3MCAxMjI1LjAgMzcuNVExMjA2IDUgMTIwNiAtNDlRMTIwNiAtMTExIDEyMzEuNSAtMTg1LjVRMTI1NyAtMjYwIDEyOTQuMCAtMzQxLjBRMTMzMSAtNDIyIDEzNjUgLTUwMVExMzkyIC01NjQgMTM5MiAtNTk3UTEzOTIgLTYzMCAxMzY3IC02MzBRMTMzOSAtNjMwIDEyODMuNSAtNTg1LjVRMTIyOCAtNTQxIDExNTUgLTQ1MVExMTM2IC00MjcgMTEwNi4wIC0zODQuNVExMDc2IC0zNDIgMTA0Mi4wIC0yOTAuNVExMDA4IC0yMzkgOTc1LjUgLTE4Ni41UTk0MyAtMTM0IDkxOC41IC05MC4wUTg5NCAtNDYgODgzIC0yMFE4NzAgMTEgODUzLjAgMjIuNVE4MzYgMzQgODIxIDM0UTgwOCAzNCA3OTkgMjdRNzg5IDIwIDc4OSAxMFE3ODkgNCA3OTIgMFE3OTggLTEyIDgyMi4wIC01NS4wUTg0NiAtOTggODc4LjAgLTE2OS4wUTkxMCAtMjQwIDkzOSAtMzM0UTk0OCAtMzYzIDk1Ny41IC00MDEuMFE5NjcgLTQzOSA5NzUuMCAtNDc5LjVROTgzIC01MjAgOTg4LjUgLTU1NS41UTk5NCAtNTkxIDk5NCAtNjEzUTk5NCAtNjQ4IDk4Mi4wIC02NjQuNVE5NzAgLTY4MSA5NTAgLTY4MVE5MjggLTY4MSA5MDAuMCAtNjYyLjBRODcyIC02NDMgODQzIC02MDdRNzkzIC01NDQgNzU1LjAgLTQ5MC41UTcxNyAtNDM3IDY4NS41IC0zODQuMFE2NTQgLTMzMSA2MjMuNSAtMjcxLjBRNTkzIC0yMTEgNTU5LjAgLTEzNi41UTUyNSAtNjIgNDgxIDM2UTQ3NCA1MiA0NTcuNSA1OS4wUTQ0MSA2NiA0MjcgNjZRNDEzIDY2IDQwNC4wIDYwLjBRMzk1IDU0IDM5OCA0M1E0MjAgOCA0NDcuMCAtNDQuNVE0NzQgLTk3IDUwMi4wIC0xNjEuMFE1MzAgLTIyNSA1NTYuMCAtMjk0LjBRNTgyIC0zNjMgNjAyLjUgLTQyOS4wUTYyMyAtNDk1IDYzNS4wIC01NTMuMFE2NDcgLTYxMSA2NDcgLTY1MlE2NDcgLTcyOSA2MTQuNSAtNzYyLjBRNTgyIC03OTUgNTMxIC03OTVRNDg2IC03OTUgNDMyLjAgLTc3My4wUTM3OCAtNzUxIDMyMy41IC03MTMuMFEyNjkgLTY3NSAyMjEgLTYyN1ExNTIgLTU1OCAxMTIuNSAtNDc3LjBRNzMgLTM5NiA3MyAtMzEzUTczIC0yNTcgOTQuMCAtMjE4LjBRMTE1IC0xNzkgMTQ5LjUgLTE1OS4wUTE4NCAtMTM5IDIyNiAtMTM5UTI2OSAtMTM5IDMwNi41IC0xNjAuNVEzNDQgLTE4MiAzNzIuNSAtMjE2LjVRNDAxIC0yNTEgNDE3LjAgLTI4OS41UTQzMyAtMzI4IDQzMyAtMzYyUTQzMyAtMzkxIDQxNy4wIC00MTAuMFE0MDEgLTQyOSAzNjYgLTQyOVEzNjIgLTQyOSAzNTcuNSAtNDI4LjVRMzUzIC00MjggMzQ4IC00MjhIMzQ1UTMzOCAtNDI4IDMzMi4wIC00MzAuNVEzMjYgLTQzMyAzMjYgLTQzN1EzMjYgLTQ0MSAzMzYuNSAtNDQ2LjBRMzQ3IC00NTEgMzc1IC00NTFRNDIwIC00NTEgNDQyLjUgLTQyNC41UTQ2NSAtMzk4IDQ2NSAtMzU3UTQ2NSAtMzE3IDQ0NC41IC0yNzUuMFE0MjQgLTIzMyAzODkuMCAtMTk3LjBRMzU0IC0xNjEgMzEwLjUgLTEzOS4wUTI2NyAtMTE3IDIyMSAtMTE3UTE2NyAtMTE3IDEyMC41IC0xNDIuMFE3NCAtMTY3IDQ2LjAgLTIxNC41UTE4IC0yNjIgMTggLTMyOFExOCAtMzkxIDQ0LjAgLTQ1Mi41UTcwIC01MTQgMTExLjUgLTU2OC41UTE1MyAtNjIzIDIwMCAtNjY1UTI1MiAtNzEyIDMxMC4wIC03NDUuNVEzNjggLTc3OSA0MjUuNSAtNzk3LjVRNDgzIC04MTYgNTMzIC04MTZRNjA3IC04MTYgNjU1LjUgLTc3Mi4wUTcwNCAtNzI4IDcwNCAtNjMwUTcwNCAtNTkwIDY5My4wIC01MzguNVE2ODIgLTQ4NyA2NjcuMCAtNDM1LjVRNjUyIC0zODQgNjM4IC0zNDRINjQwUTY3NiAtNDA5IDcwNC41IC00NTUuNVE3MzMgLTUwMiA3NjIuMCAtNTQyLjBRNzkxIC01ODIgODI3IC02MjZRODU4IC02NjMgODk4LjAgLTY4NS4wUTkzOCAtNzA3IDk3NSAtNzA3UTEwMDggLTcwNyAxMDMxLjAgLTY4NS4wUTEwNTQgLTY2MyAxMDU0IC02MTBRMTA1NCAtNjA0IDEwNTQuMCAtNjAwLjBRMTA1NCAtNTk2IDEwNTMgLTU4OFExMDQ0IC00OTIgMTAxNS4wIC0zOTkuNVE5ODYgLTMwNyA5NTUgLTIxM1E5ODYgLTI2MSAxMDM5LjAgLTMzNS4wUTEwOTIgLTQwOSAxMTU1IC00ODhRMTIzMiAtNTg0IDEyOTguMCAtNjMyLjBRMTM2NCAtNjgwIDE0MDcgLTY4MFExNDYxIC02ODAgMTQ2MSAtNjE0UTE0NjEgLTU4OSAxNDUxLjUgLTU1NC4wUTE0NDIgLTUxOSAxNDIyIC00ODBRMTQwMCAtNDM2IDEzNzMuNSAtMzc4LjVRMTM0NyAtMzIxIDEzMjMuMCAtMjU4LjBRMTI5OSAtMTk1IDEyODMuNSAtMTM0LjVRMTI2OCAtNzQgMTI2OCAtMjNRMTI2OCAzMiAxMjkzLjUgNjUuNVExMzE5IDk5IDEzODIgOTlIMTM4OFExNDAzIDk5IDE0MDMgMTA1UTE0MDMgMTA5IDEzOTMuMCAxMTMuMFExMzgzIDExNyAxMzY1IDExNVpNMTI5OSA4UTEzMzUgLTY1IDEzNjguMCAtMTM2LjVRMTQwMSAtMjA4IDE0MzYgLTI3M1ExNDU2IC0zMDkgMTQ3MC4wIC0zMjMuNVExNDg0IC0zMzggMTUwNyAtMzM4UTE1MTUgLTMzOCAxNTI0LjAgLTMzNS41UTE1MzMgLTMzMyAxNTQyIC0zMzNRMTU0OCAtMzMzIDE1NTEgLTMzNFExNTM3IC0zMjYgMTUxNC41IC0yOTQuNVExNDkyIC0yNjMgMTQ2OS4wIC0yMjIuMFExNDQ2IC0xODEgMTQyOCAtMTQ1UTE0NDcgLTE2OCAxNDY4LjAgLTE5MS4wUTE0ODkgLTIxNCAxNTE0IC0yMzVRMTUzOCAtMjU2IDE1NzEuNSAtMjc4LjVRMTYwNSAtMzAxIDE2MzcuMCAtMzE2LjBRMTY2OSAtMzMxIDE2ODggLTMzMVExNjk1IC0zMzEgMTY5OCAtMzMwUTE2OTggLTMzMCAxNjg3LjAgLTMxMC41UTE2NzYgLTI5MSAxNjU5LjUgLTI1OS41UTE2NDMgLTIyOCAxNjI2LjAgLTE5Mi41UTE2MDkgLTE1NyAxNTk1LjUgLTEyNC41UTE1ODIgLTkyIDE1NzggLTcwUTE1NzUgLTU3IDE1NzUgLTQ2UTE1NzUgLTMwIDE1ODEuMCAtMjUuMFExNTg3IC0yMCAxNTk0IC0yMFExNjEzIC0yMCAxNjMzLjAgLTM3LjBRMTY1MyAtNTQgMTY3MS41IC04MC41UTE2OTAgLTEwNyAxNzA2LjAgLTEzNy4wUTE3MjIgLTE2NyAxNzMzIC0xOTNRMTc0NSAtMTkzIDE3NDUgLTE4NFExNzM0IC0xNTcgMTcxNy41IC0xMjQuNVExNzAxIC05MiAxNjgwLjUgLTYzLjBRMTY2MCAtMzQgMTYzNS4wIC0xNS4wUTE2MTAgNCAxNTgxIDRRMTU2MSA0IDE1MzkuNSAtMTAuMFExNTE4IC0yNCAxNTE4IC02MlExNTE4IC03MyAxNTIwLjAgLTg1LjVRMTUyMiAtOTggMTUyNyAtMTEzUTE1MzUgLTEzMyAxNTQ2LjAgLTE1Ni4wUTE1NTcgLTE3OSAxNTgyIC0yMTlRMTU4OSAtMjMwIDE1OTAuNSAtMjM2LjBRMTU5MiAtMjQyIDE1OTIgLTI0NlExNTkyIC0yNTggMTU4MSAtMjU4UTE1NzIgLTI1OCAxNTU0LjUgLTI0OC4wUTE1MzcgLTIzOCAxNTExIC0yMTNRMTQ4NiAtMTg5IDE0NTEuNSAtMTQ1LjBRMTQxNyAtMTAxIDEzNzIgLTE1UTEzNjUgLTIgMTM1Ni41IC0xLjBRMTM0OCAwIDEzMzMgMVExMzIzIDIgMTMxNC4wIDIuNVExMzA1IDMgMTI5OSA4Wk0xMzcyIDMxOVExMzIwIDMxOSAxMjk4LjUgMjk4LjVRMTI3NyAyNzggMTI3NyAyNTBRMTI3NyAyMjMgMTI5MiAxOTZRMTMwNiAxNjcgMTMzMS4wIDE0Ni41UTEzNTYgMTI2IDEzODYgMTEyUTE0MzcgODggMTUwMy41IDczLjBRMTU3MCA1OCAxNjMxIDQwUTE2MzkgMjYgMTY0Ny41IDExLjBRMTY1NiAtNCAxNjYzIC0xOFExNjgzIC01OCAxNzAwLjAgLTk3LjVRMTcxNyAtMTM3IDE3NDIgLTE4M1ExNzMzIC0xODMgMTczMyAtMTkzTDE3NzcgLTI5NFExNzc4IC0yOTYgMTc3OS4wIC0yOTkuNVExNzgwIC0zMDMgMTc4MCAtMzA3UTE3ODAgLTMxOCAxNzc1LjAgLTMyNS41UTE3NzAgLTMzMyAxNzY4IC0zMzZMMTgyMyAtMzM4SDE4MjhRMTg1MCAtMzM4IDE4NTAgLTMyNFExODUwIC0zMTcgMTg0NCAtMzAyTDE3NjQgLTExNFExNzUwIC04MSAxNzM0LjAgLTQ4LjBRMTcxOCAtMTUgMTcwMSAxOVExNzcxIC04IDE4MTIuNSAtNDcuNVExODU0IC04NyAxODc2LjUgLTEyNi41UTE4OTkgLTE2NiAxOTExIC0xOTNRMTkyMyAtMTkzIDE5MjMgLTE4NFExOTEzIC0xNjIgMTg5Ny4wIC0xMzEuNVExODgxIC0xMDEgMTg1NS4wIC02Ny41UTE4MjkgLTM0IDE3ODguMCAtMy4wUTE3NDcgMjggMTY4NSA1MVExNjYxIDk0IDE2MzAuMCAxNDAuNVExNTk5IDE4NyAxNTYwLjAgMjI3LjVRMTUyMSAyNjggMTQ3NC41IDI5My41UTE0MjggMzE5IDEzNzIgMzE5Wk0xMzQ4IDI5OVExMzgxIDI5OSAxNDE2LjUgMjc5LjBRMTQ1MiAyNTkgMTQ4NS4wIDIyOC41UTE1MTggMTk4IDE1NDUuNSAxNjYuMFExNTczIDEzNCAxNTkwIDExMFExNTk2IDEwMiAxNjAxLjAgOTIuMFExNjA2IDgyIDE2MTEgNzJRMTU2MyA4NSAxNTA1LjAgMTAwLjVRMTQ0NyAxMTYgMTQwMyAxMzVRMTM1NSAxNTUgMTMyOC4wIDE5MS41UTEzMDEgMjI4IDEzMDEgMjU3UTEzMDEgMjc2IDEzMTIuNSAyODcuNVExMzI0IDI5OSAxMzQ4IDI5OVpNMTg1MiAtNDAwUTE4MzkgLTQwMCAxODI5LjUgLTQxMC4wUTE4MjAgLTQyMCAxODIwIC00MzRRMTgyMCAtNDUxIDE4MzQuMCAtNDY0LjVRMTg0OCAtNDc4IDE4NjUgLTQ3OFExODc5IC00NzggMTg4OS4wIC00NjkuMFExODk5IC00NjAgMTg5OSAtNDQ2UTE4OTkgLTQyOCAxODg1LjAgLTQxNC4wUTE4NzEgLTQwMCAxODUyIC00MDBaTTIxMjggM1EyMTA1IDMgMjA4Ny41IC0xMC4wUTIwNzAgLTIzIDIwNzAgLTYzUTIwNzAgLTgwIDIwNzIuNSAtOTUuMFEyMDc1IC0xMTAgMjA3OSAtMTI3UTIwNzAgLTExMiAyMDU0LjAgLTkwLjBRMjAzOCAtNjggMjAxOC41IC00Ny4wUTE5OTkgLTI2IDE5NzguNSAtMTIuMFExOTU4IDIgMTk0MCAyUTE5MTQgMiAxODk4LjAgLTIxLjVRMTg4MiAtNDUgMTg4MiAtODNRMTg4MiAtMTI0IDE5MDEuMCAtMTcxLjBRMTkyMCAtMjE4IDE5NTMuMCAtMjYxLjBRMTk4NiAtMzA0IDIwMjkuMCAtMzMxLjBRMjA3MiAtMzU4IDIxMTkgLTM1OFEyMTQyIC0zNTggMjE2My4wIC0zNTAuNVEyMTg0IC0zNDMgMjIwMCAtMzI2UTIyMDcgLTMxOSAyMjA3IC0zMTBRMjIwNyAtMzA0IDIyMDIuMCAtMzAwLjBRMjE5NyAtMjk2IDIxODkgLTI5OFEyMTc4IC0zMzMgMjE0MiAtMzMzUTIxMjUgLTMzMyAyMTAzIC0zMjJRMjA3NiAtMzA4IDIwNDUuNSAtMjc3LjVRMjAxNSAtMjQ3IDE5ODguNSAtMjA4LjVRMTk2MiAtMTcwIDE5NDUuMCAtMTMxLjBRMTkyOCAtOTIgMTkyOCAtNjBRMTkyOCAtMjcgMTk1MyAtMjdRMTk3NSAtMjcgMTk5OC41IC00OC4wUTIwMjIgLTY5IDIwNDMuNSAtMTAwLjVRMjA2NSAtMTMyIDIwODMuMCAtMTYzLjBRMjEwMSAtMTk0IDIxMTEgLTIxM1EyMTI2IC0yNDAgMjEzOS4wIC0yNTguMFEyMTUyIC0yNzYgMjE3NiAtMjc2UTIxODcgLTI3NiAyMTk4LjAgLTI3My4wUTIyMDkgLTI3MCAyMjIxIC0yNzJRMjE5MSAtMjQyIDIxNjguNSAtMjAxLjBRMjE0NiAtMTYwIDIxMzQuMCAtMTIwLjVRMjEyMiAtODEgMjEyMiAtNTRRMjEyMiAtMjQgMjE0MiAtMjRRMjE1OCAtMjQgMjE3Ni41IC00Mi4wUTIxOTUgLTYwIDIyMTIuNSAtODcuNVEyMjMwIC0xMTUgMjI0NS4wIC0xNDMuNVEyMjYwIC0xNzIgMjI2OSAtMTkzUTIyNzQgLTE5MyAyMjc3LjUgLTE5Mi4wUTIyODEgLTE5MSAyMjgxIC0xODRRMjI4MCAtMTgwIDIyNzcuNSAtMTc1LjVRMjI3NSAtMTcxIDIyNzAgLTE2MFEyMjYyIC0xNDQgMjI0OC4wIC0xMTcuMFEyMjM0IC05MCAyMjE1LjAgLTYyLjVRMjE5NiAtMzUgMjE3NC4wIC0xNi4wUTIxNTIgMyAyMTI4IDNaTTIyOTggMFEyMjg3IDAgMjI3MS41IC01LjBRMjI1NiAtMTAgMjI0NC41IC0yMy41UTIyMzMgLTM3IDIyMzMgLTY0UTIyMzMgLTkwIDIyNTAuMCAtMTI0LjBRMjI2NyAtMTU4IDIyODAgLTE4NFEyMjY5IC0xODQgMjI2OSAtMTkzUTIyNzAgLTE5NiAyMjc4LjAgLTIxMi4wUTIyODYgLTIyOCAyMjk3LjAgLTI1MC4wUTIzMDggLTI3MiAyMzE4LjUgLTI5Mi41UTIzMjkgLTMxMyAyMzM1IC0zMjRRMjM0NyAtMzQ2IDIzNzMgLTM0NkgyNDM1UTI0MTggLTMzMyAyNDA0LjUgLTMxNy41UTIzOTEgLTMwMiAyMzcxIC0yNjFRMjM3MSAtMjYxIDIzNjQuMCAtMjQ3LjBRMjM1NyAtMjMzIDIzNDYuNSAtMjExLjVRMjMzNiAtMTkwIDIzMjUuNSAtMTY4LjBRMjMxNSAtMTQ2IDIzMDggLTEzMVEyMjk1IC0xMDMgMjI5MS4wIC04Ni41UTIyODcgLTcwIDIyODcgLTU2UTIyODcgLTIzIDIzMDkgLTIzUTIzMzMgLTIzIDIzNjcgLTYyUTIzOTUgLTk1IDI0MjIuMCAtMTQxLjBRMjQ0OSAtMTg3IDI0NzMuNSAtMjM2LjBRMjQ5OCAtMjg1IDI1MTcgLTMyNFEyNTI4IC0zNDYgMjU1NiAtMzQ2SDI2MTFRMjU4OSAtMzI4IDI1NjYuNSAtMjkyLjBRMjU0NCAtMjU2IDI1MTcgLTIwMFEyNTEwIC0xODUgMjQ5OS4wIC0xNjIuMFEyNDg4IC0xMzkgMjQ3OS41IC0xMTMuMFEyNDcxIC04NyAyNDcxIC02MVEyNDcxIC0yNiAyNDk2IC0yNlEyNTMwIC0yNiAyNTYyLjAgLTczLjBRMjU5NCAtMTIwIDI2MjUgLTE5M1EyNjMzIC0xOTMgMjYzNC41IC0xOTIuMFEyNjM2IC0xOTEgMjYzNyAtMTg0UTI2MjYgLTE1NyAyNjEwLjUgLTEyNS41UTI1OTUgLTk0IDI1NzUuNSAtNjUuMFEyNTU2IC0zNiAyNTMyLjUgLTE4LjBRMjUwOSAwIDI0ODEgMFEyNDU2IDAgMjQ0MC4wIC0xOC41UTI0MjQgLTM3IDI0MjQgLTcxUTI0MjQgLTk4IDI0MzQgLTEyOVEyNDE3IC05OSAyMzk1LjAgLTY5LjBRMjM3MyAtMzkgMjM0OC4wIC0xOS41UTIzMjMgMCAyMjk4IDBaTTI0NjggMjczUTI0NTYgMjczIDI0NDMuNSAyNjkuNVEyNDMxIDI2NiAyNDE4IDI2OFEyNDI0IDI2MiAyNDQxLjAgMjMzLjVRMjQ1OCAyMDUgMjQ4MS4wIDE2Mi41UTI1MDQgMTIwIDI1MjguNSA3MC41UTI1NTMgMjEgMjU3Ni4wIC0yNy41UTI1OTkgLTc2IDI2MTUuNSAtMTE3LjVRMjYzMiAtMTU5IDI2MzcgLTE4NFEyNjMyIC0xODQgMjYyOC4wIC0xODYuMFEyNjI0IC0xODggMjYyNSAtMTkzUTI2MjUgLTE5MyAyNjMxLjAgLTIxMS4wUTI2MzcgLTIyOSAyNjQzLjAgLTI1NC41UTI2NDkgLTI4MCAyNjQ5IC0zMDFRMjY0OSAtMzE1IDI2NDYuMCAtMzI1LjBRMjY0MyAtMzM1IDI2MzUgLTMzNkwyNjg1IC0zNDRRMjY5MSAtMzQ1IDI2OTYuMCAtMzQ1LjVRMjcwMSAtMzQ2IDI3MDUgLTM0NlEyNzE0IC0zNDYgMjcxNy41IC0zMzkuNVEyNzIxIC0zMzMgMjcyMSAtMzEzUTI3MjEgLTI4OCAyNzEyLjUgLTI0OS41UTI3MDQgLTIxMSAyNjkzIC0xODJRMjcwNCAtMjAwIDI3MjEuNSAtMjI4LjBRMjczOSAtMjU2IDI3NjIuMCAtMjg1LjBRMjc4NSAtMzE0IDI4MTAuMCAtMzMzLjVRMjgzNSAtMzUzIDI4NTkgLTM1M1EyODY0IC0zNTMgMjg3MiAtMzUxUTI5MDAgLTM0NCAyOTExLjUgLTMyMy41UTI5MjMgLTMwMyAyOTIzIC0yNzVRMjkyMyAtMjQ1IDI5MTEuNSAtMjA5LjBRMjkwMCAtMTczIDI4ODEuMCAtMTM4LjVRMjg2MiAtMTA0IDI4MzkgLTc2UTI4MTEgLTQxIDI3NzIuMCAtMjAuMFEyNzMzIDEgMjY5MiAxUTI2NTUgMSAyNjIzIC0xOEwyNTI4IDIyMVEyNTE0IDI1MSAyNTAxLjAgMjYyLjBRMjQ4OCAyNzMgMjQ2OCAyNzNaTTI2NjAgLTIwUTI2ODggLTIwIDI3MjMuMCAtNDYuMFEyNzU4IC03MiAyNzkwLjUgLTExMi41UTI4MjMgLTE1MyAyODQ1IC0xOTRRMjg2MCAtMjIyIDI4NjcuMCAtMjQ1LjVRMjg3NCAtMjY5IDI4NzQgLTI4NlEyODc0IC0zMjUgMjg0NiAtMzI1UTI4MzMgLTMyNSAyODEyLjUgLTMxMS4wUTI3OTIgLTI5NyAyNzY1IC0yNjBRMjczNiAtMjIwIDI3MDEuNSAtMTU5LjVRMjY2NyAtOTkgMjYzMSAtMzJRMjY0MyAtMjAgMjY2MCAtMjBaTTI5NjIgLTE5NlEyOTcwIC0yMTMgMjk4My4wIC0yNTAuNVEyOTk2IC0yODggMzAxMC4wIC0zMzQuMFEzMDI0IC0zODAgMzAzMSAtNDIxUTMwMzQgLTQzNyAzMDQyLjAgLTQ0NC41UTMwNTAgLTQ1MiAzMDU5IC00NTJRMzA3MiAtNDUyIDMwODMuMCAtNDM5LjVRMzA5NCAtNDI3IDMwOTQgLTQwNFEzMDk0IC0zNzYgMzA3Ny41IC0zNTYuMFEzMDYxIC0zMzYgMzAzNyAtMzE4UTMwNDcgLTMxNyAzMDU4LjAgLTMxNi41UTMwNjkgLTMxNiAzMDgyIC0zMTZRMzEyOSAtMzE2IDMxNzUgLTMyMlEzMTc3IC0zMTYgMzE3NyAtMzEzUTMxNzcgLTMwMCAzMTY5LjUgLTI4MC4wUTMxNjIgLTI2MCAzMTU0IC0yNDRRMzE1MCAtMjM1IDMxMzguMCAtMjExLjVRMzEyNiAtMTg4IDMxMTIuMCAtMTU4LjVRMzA5OCAtMTI5IDMwODguNSAtMTAwLjVRMzA3OSAtNzIgMzA3OSAtNTJRMzA3OSAtMjYgMzA5OSAtMjZRMzExOCAtMjYgMzE1Mi4wIC03MC41UTMxODYgLTExNSAzMjIwIC0xOTNRMzIzMiAtMTkzIDMyMzIgLTE4NFEzMjIxIC0xNTcgMzIwNC41IC0xMjUuMFEzMTg4IC05MyAzMTY4LjAgLTY0LjVRMzE0OCAtMzYgMzEyNS4wIC0xNy41UTMxMDIgMSAzMDc3IDFRMzA1OCAxIDMwMzkuMCAtMTQuNVEzMDIwIC0zMCAzMDIwIC02NVEzMDIwIC05NiAzMDMyLjAgLTEyNS41UTMwNDQgLTE1NSAzMDU5LjAgLTE4MS4wUTMwNzQgLTIwNyAzMDg2LjAgLTIyNy4wUTMwOTggLTI0NyAzMDk4IC0yNTlRMzA5OCAtMjc3IDMwNzUuNSAtMjg1LjBRMzA1MyAtMjkzIDMwMTcgLTI5NFEyOTk5IC0yNDggMjk5MC4wIC0yMjYuMFEyOTgxIC0yMDQgMjk3MyAtMTg0UTI5NTcgLTE4NCAyOTYyIC0xOTZaTTMyMjEgLTE5NlEzMjI5IC0yMTMgMzI0Mi4wIC0yNTAuNVEzMjU1IC0yODggMzI2OS4wIC0zMzQuMFEzMjgzIC0zODAgMzI5MCAtNDIxUTMyOTMgLTQzNyAzMzAxLjAgLTQ0NC41UTMzMDkgLTQ1MiAzMzE4IC00NTJRMzMzMSAtNDUyIDMzNDIuMCAtNDM5LjVRMzM1MyAtNDI3IDMzNTMgLTQwNFEzMzUzIC0zNzYgMzMzNi41IC0zNTYuMFEzMzIwIC0zMzYgMzI5NiAtMzE4UTMzMDYgLTMxNyAzMzE3LjAgLTMxNi41UTMzMjggLTMxNiAzMzQxIC0zMTZRMzM4OCAtMzE2IDM0MzQgLTMyMlEzNDM2IC0zMTYgMzQzNiAtMzEzUTM0MzYgLTMwMCAzNDI4LjUgLTI4MC4wUTM0MjEgLTI2MCAzNDEzIC0yNDRRMzQwOSAtMjM1IDMzOTcuMCAtMjExLjVRMzM4NSAtMTg4IDMzNzEuMCAtMTU4LjVRMzM1NyAtMTI5IDMzNDcuNSAtMTAwLjVRMzMzOCAtNzIgMzMzOCAtNTJRMzMzOCAtMjYgMzM1OCAtMjZRMzM3NyAtMjYgMzQxMS4wIC03MC41UTM0NDUgLTExNSAzNDc5IC0xOTNRMzQ5MSAtMTkzIDM0OTEgLTE4NFEzNDgwIC0xNTcgMzQ2My41IC0xMjUuMFEzNDQ3IC05MyAzNDI3LjAgLTY0LjVRMzQwNyAtMzYgMzM4NC4wIC0xNy41UTMzNjEgMSAzMzM2IDFRMzMxNyAxIDMyOTguMCAtMTQuNVEzMjc5IC0zMCAzMjc5IC02NVEzMjc5IC05NiAzMjkxLjAgLTEyNS41UTMzMDMgLTE1NSAzMzE4LjAgLTE4MS4wUTMzMzMgLTIwNyAzMzQ1LjAgLTIyNy4wUTMzNTcgLTI0NyAzMzU3IC0yNTlRMzM1NyAtMjc3IDMzMzQuNSAtMjg1LjBRMzMxMiAtMjkzIDMyNzYgLTI5NFEzMjU4IC0yNDggMzI0OS4wIC0yMjYuMFEzMjQwIC0yMDQgMzIzMiAtMTg0UTMyMTYgLTE4NCAzMjIxIC0xOTZaTTM0ODAgLTE5NlEzNDg4IC0yMTMgMzUwMS4wIC0yNTAuNVEzNTE0IC0yODggMzUyOC4wIC0zMzQuMFEzNTQyIC0zODAgMzU0OSAtNDIxUTM1NTIgLTQzNyAzNTYwLjAgLTQ0NC41UTM1NjggLTQ1MiAzNTc3IC00NTJRMzU5MCAtNDUyIDM2MDEuMCAtNDM5LjVRMzYxMiAtNDI3IDM2MTIgLTQwNFEzNjEyIC0zNzYgMzU5NS41IC0zNTYuMFEzNTc5IC0zMzYgMzU1NSAtMzE4UTM1NjUgLTMxNyAzNTc2LjAgLTMxNi41UTM1ODcgLTMxNiAzNjAwIC0zMTZRMzY0NyAtMzE2IDM2OTMgLTMyMlEzNjk1IC0zMTYgMzY5NSAtMzEzUTM2OTUgLTMwMCAzNjg3LjUgLTI4MC4wUTM2ODAgLTI2MCAzNjcyIC0yNDRRMzY2OCAtMjM1IDM2NTYuMCAtMjExLjVRMzY0NCAtMTg4IDM2MzAuMCAtMTU4LjVRMzYxNiAtMTI5IDM2MDYuNSAtMTAwLjVRMzU5NyAtNzIgMzU5NyAtNTJRMzU5NyAtMjYgMzYxNyAtMjZRMzYzNiAtMjYgMzY3MC4wIC03MC41UTM3MDQgLTExNSAzNzM4IC0xOTNRMzc1MCAtMTkzIDM3NTAgLTE4NFEzNzM5IC0xNTcgMzcyMi41IC0xMjUuMFEzNzA2IC05MyAzNjg2LjAgLTY0LjVRMzY2NiAtMzYgMzY0My4wIC0xNy41UTM2MjAgMSAzNTk1IDFRMzU3NiAxIDM1NTcuMCAtMTQuNVEzNTM4IC0zMCAzNTM4IC02NVEzNTM4IC05NiAzNTUwLjAgLTEyNS41UTM1NjIgLTE1NSAzNTc3LjAgLTE4MS4wUTM1OTIgLTIwNyAzNjA0LjAgLTIyNy4wUTM2MTYgLTI0NyAzNjE2IC0yNTlRMzYxNiAtMjc3IDM1OTMuNSAtMjg1LjBRMzU3MSAtMjkzIDM1MzUgLTI5NFEzNTE3IC0yNDggMzUwOC4wIC0yMjYuMFEzNDk5IC0yMDQgMzQ5MSAtMTg0UTM0NzUgLTE4NCAzNDgwIC0xOTZaTTM3MzkgLTE5NlEzNzQ3IC0yMTMgMzc2MC4wIC0yNTAuNVEzNzczIC0yODggMzc4Ny4wIC0zMzQuMFEzODAxIC0zODAgMzgwOCAtNDIxUTM4MTEgLTQzNyAzODE5LjAgLTQ0NC41UTM4MjcgLTQ1MiAzODM2IC00NTJRMzg0OSAtNDUyIDM4NjAuMCAtNDM5LjVRMzg3MSAtNDI3IDM4NzEgLTQwNFEzODcxIC0zNzYgMzg1NC41IC0zNTYuMFEzODM4IC0zMzYgMzgxNCAtMzE4UTM4MjQgLTMxNyAzODM1LjAgLTMxNi41UTM4NDYgLTMxNiAzODU5IC0zMTZRMzkwNiAtMzE2IDM5NTIgLTMyMlEzOTU0IC0zMTYgMzk1NCAtMzEzUTM5NTQgLTMwMCAzOTQ2LjUgLTI4MC4wUTM5MzkgLTI2MCAzOTMxIC0yNDRRMzkyNyAtMjM1IDM5MTUuMCAtMjExLjVRMzkwMyAtMTg4IDM4ODkuMCAtMTU4LjVRMzg3NSAtMTI5IDM4NjUuNSAtMTAwLjVRMzg1NiAtNzIgMzg1NiAtNTJRMzg1NiAtMjYgMzg3NiAtMjZRMzg5NSAtMjYgMzkyOS4wIC03MC41UTM5NjMgLTExNSAzOTk3IC0xOTNRNDAwOSAtMTkzIDQwMDkgLTE4NFEzOTk4IC0xNTcgMzk4MS41IC0xMjUuMFEzOTY1IC05MyAzOTQ1LjAgLTY0LjVRMzkyNSAtMzYgMzkwMi4wIC0xNy41UTM4NzkgMSAzODU0IDFRMzgzNSAxIDM4MTYuMCAtMTQuNVEzNzk3IC0zMCAzNzk3IC02NVEzNzk3IC05NiAzODA5LjAgLTEyNS41UTM4MjEgLTE1NSAzODM2LjAgLTE4MS4wUTM4NTEgLTIwNyAzODYzLjAgLTIyNy4wUTM4NzUgLTI0NyAzODc1IC0yNTlRMzg3NSAtMjc3IDM4NTIuNSAtMjg1LjBRMzgzMCAtMjkzIDM3OTQgLTI5NFEzNzc2IC0yNDggMzc2Ny4wIC0yMjYuMFEzNzU4IC0yMDQgMzc1MCAtMTg0UTM3MzQgLTE4NCAzNzM5IC0xOTZaTTM5OTggLTE5NlE0MDA2IC0yMTMgNDAxOS4wIC0yNTAuNVE0MDMyIC0yODggNDA0Ni4wIC0zMzQuMFE0MDYwIC0zODAgNDA2NyAtNDIxUTQwNzAgLTQzNyA0MDc4LjAgLTQ0NC41UTQwODYgLTQ1MiA0MDk1IC00NTJRNDEwOCAtNDUyIDQxMTkuMCAtNDM5LjVRNDEzMCAtNDI3IDQxMzAgLTQwNFE0MTMwIC0zNzYgNDExMy41IC0zNTYuMFE0MDk3IC0zMzYgNDA3MyAtMzE4UTQwODMgLTMxNyA0MDk0LjAgLTMxNi41UTQxMDUgLTMxNiA0MTE4IC0zMTZRNDE2NSAtMzE2IDQyMTEgLTMyMlE0MjEzIC0zMTYgNDIxMyAtMzEzUTQyMTMgLTMwMCA0MjA1LjUgLTI4MC4wUTQxOTggLTI2MCA0MTkwIC0yNDRRNDE4NiAtMjM1IDQxNzQuMCAtMjExLjVRNDE2MiAtMTg4IDQxNDguMCAtMTU4LjVRNDEzNCAtMTI5IDQxMjQuNSAtMTAwLjVRNDExNSAtNzIgNDExNSAtNTJRNDExNSAtMjYgNDEzNSAtMjZRNDE1NCAtMjYgNDE4OC4wIC03MC41UTQyMjIgLTExNSA0MjU2IC0xOTNRNDI2OCAtMTkzIDQyNjggLTE4NFE0MjU3IC0xNTcgNDI0MC41IC0xMjUuMFE0MjI0IC05MyA0MjA0LjAgLTY0LjVRNDE4NCAtMzYgNDE2MS4wIC0xNy41UTQxMzggMSA0MTEzIDFRNDA5NCAxIDQwNzUuMCAtMTQuNVE0MDU2IC0zMCA0MDU2IC02NVE0MDU2IC05NiA0MDY4LjAgLTEyNS41UTQwODAgLTE1NSA0MDk1LjAgLTE4MS4wUTQxMTAgLTIwNyA0MTIyLjAgLTIyNy4wUTQxMzQgLTI0NyA0MTM0IC0yNTlRNDEzNCAtMjc3IDQxMTEuNSAtMjg1LjBRNDA4OSAtMjkzIDQwNTMgLTI5NFE0MDM1IC0yNDggNDAyNi4wIC0yMjYuMFE0MDE3IC0yMDQgNDAwOSAtMTg0UTM5OTMgLTE4NCAzOTk4IC0xOTZaIi8+PC9nPjwvc3ZnPg=="},ag=`
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
@media(prefers-reduced-motion:no-preference){.li-opening{height:calc(576.1svh + 160svh)}}
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
.li-seal{width:96px;height:96px;top:262px}
.li-envelope-paper,.li-left,.li-right,.li-pocket,.li-flap-front,.li-liner,.li-flap-inside{-webkit-mask:radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 100%/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-y,radial-gradient(circle,#000 13.4px,transparent 14px) 100% 0/27px 27px repeat-y,linear-gradient(#000,#000) 50% 50%/calc(100% - 22px) calc(100% - 22px) no-repeat;mask:radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 100%/27px 27px repeat-x,radial-gradient(circle,#000 13.4px,transparent 14px) 0 0/27px 27px repeat-y,radial-gradient(circle,#000 13.4px,transparent 14px) 100% 0/27px 27px repeat-y,linear-gradient(#000,#000) 50% 50%/calc(100% - 22px) calc(100% - 22px) no-repeat}
`,og='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2048" height="1201" viewBox="0 0 2048 1201"><defs><filter id="grain" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="2.4" intercept="-1.37"/><feFuncG type="linear" slope="2.4" intercept="-1.37"/><feFuncB type="linear" slope="2.4" intercept="-1.37"/></feComponentTransfer></filter></defs><image width="2048" height="1201" filter="url(#grain)" xlink:href="__PAPER_JPEG__"/></svg>',Ka;function lg(){return Ka||(Ka=(async()=>{let n=await fetch(ss.paperColor,{mode:"cors"});if(!n.ok)throw new Error(`Paper texture failed to load (${n.status}).`);let t=await n.arrayBuffer(),e=await new Promise((r,a)=>{let o=new FileReader;o.onload=()=>r(String(o.result)),o.onerror=()=>a(o.error||new Error("Paper texture could not be read.")),o.readAsDataURL(new Blob([t],{type:"image/jpeg"}))}),i=og.replace("__PAPER_JPEG__",e),s=URL.createObjectURL(new Blob([i],{type:"image/svg+xml"}));try{let r=new Image;return r.src=s,await r.decode(),s}catch(r){throw URL.revokeObjectURL(s),r}})().catch(n=>{throw Ka=void 0,n})),Ka}var{SCROLL_EXTENSION:Tu,authoredClock:cg,scrollClock:ug}=(()=>{let t=.1637489716078054,e=.245,i=e-t,s=i+.035;function r(o){if(o<=t)return o;if(o>=e+.035)return o-.035;let c=(o-t)/s;return t+i*c+.035*c*(1-c)*(1-2*c)}function a(o){if(o<=t)return o;if(o>=e)return o+.035;let c=t,l=e+.035;for(let h=0;h<32;h++){let f=(c+l)/2;r(f)<o?c=f:l=f}return(c+l)/2}return{SCROLL_EXTENSION:.035,authoredClock:r,scrollClock:a}})(),{applyRibbonWithdrawal:hg}=(()=>{let n=h=>Math.max(0,Math.min(1,h)),t=(h,f,u)=>{let d=n((u-h)/(f-h));return d*d*(3-2*d)},e=new P,i=new P,s=new P,r=new P,a=new P,o=new Ge;function c(h,f,u){let d=h.x,M=h.y,y=h.z;if(u.set(0,0,0),f<=.72)return u;let p=n((d+1.38)/4.8);if(p<=0||p>=1)return u;let m=t(-.1,.025,y),v=1-t(.18,.45,Math.abs(M+.2)),S=t(.72,.88,f),T=-1.38+4.8*t(.725,.875,f),b=.35+.65*t(d-.85,d+.85,T),E=Math.pow(Math.sin(Math.PI*p),2)*m*v*S*b;return u.set(-.055*E,-.42*E,.46*E),u}function l(h,f,u,d){d<=.72||(e.copy(f),s.copy(h).addScaledVector(e,5e-4),r.copy(h).addScaledVector(e,-5e-4),c(s,d,s),c(r,d,r),i.copy(e).addScaledVector(s.sub(r),1e3).normalize(),c(h,d,a),h.add(a),o.setFromUnitVectors(e,i),u.applyQuaternion(o).normalize(),f.copy(i))}return{applyRibbonWithdrawal:l}})(),{createRibbonStrips:dg}=(()=>{let a=S=>Math.max(0,Math.min(1,S)),o=(S,T,b)=>{let E=a((b-S)/(T-S));return E*E*(3-2*E)},c=(S,T,b)=>S+(T-S)*b,l=[0,0,1],h=[0,0,-1],f=[];function u(S,T,b,E=0,g=0,R=l){f.push({p:new P(S,T,b),roll:E,fold:g,n:new P(...R)})}function d(S,T,b,E=0,g=0){u(-1.7+S,-.2+T,b,E,g)}d(-.43,-.95,.065,-.25),d(-.37,-.74,.065,-.15),d(-.24,-.48,.18,.15,.12),d(-.08,-.15,.19,.5,.6),d(.08,-.08,.15,.55,.65),d(.38,-.09,.14,.24,.12),d(.7,-.02,.2,.4),d(.84,.18,.3,1.15),d(.79,.37,.24,2.45),d(.56,.39,.18,2),d(.32,.24,.18,1.1,.12),d(.03,.01,.16,.5,.6),d(.04,-.015,.09,.15,.3),d(.32,0,.045),u(2.8,-.2,.043),u(3.25,-.2,.043),u(3.39,-.2,.043),u(3.411,-.2,.005,0,0,[.7,0,.7]),u(3.416,-.2,-.045,0,0,[1,0,0]),u(3.408,-.2,-.105,0,0,[.6,0,-.8]),u(3.28,-.2,-.13,0,0,h),u(2.9,-.2,-.13,0,0,h),u(1.8,.55,-.13,0,0,h),u(-.7,1.65,-.13,0,0,h),u(-1.7,1.94,-.13,0,0,h),u(-1.7,2.16,-.13,0,0,h),u(-1.7,2.208,-.1,0,0,[0,.6,-.8]),u(-1.7,2.216,-.045,0,0,[0,1,0]),u(-1.7,2.211,.015,0,0,[0,.6,.8]),u(-1.7,2.19,.036),u(-1.7,1.93,.036),u(-1.7,1.2,.036),u(-1.7,-.2,.036),u(-1.7,-1.4,.036),u(-1.7,-2.1,.036),u(-1.7,-2.19,.036),u(-1.7,-2.211,.015,0,0,[0,-.6,.8]),u(-1.7,-2.216,-.045,0,0,[0,-1,0]),u(-1.7,-2.208,-.1,0,0,[0,-.6,-.8]),u(-1.7,-2.16,-.13,0,0,h),u(-1.7,-1.93,-.13,0,0,h),u(-2.65,-1.05,-.13,0,0,h),u(-3.14,-.2,-.13,0,0,h),u(-3.32,-.2,-.13,0,0,h),u(-3.408,-.2,-.105,0,0,[-.6,0,-.8]),u(-3.416,-.2,-.045,0,0,[-1,0,0]),u(-3.411,-.2,.005,0,0,[-.7,0,.7]),u(-3.39,-.2,.043),u(-3.15,-.2,.043),u(-1.7-.4,-.2,.043),u(-1.7-.12,-.2-.01,.08,.2,.2),d(-.06,-.12,.1,.05,.3),d(-.04,-.16,.18,.05,.25),d(.015,-.11,.3,.06,.25),d(.025,.09,.3,.06,.22),d(-.01,.145,.2,.05,.2),d(-.045,.11,.085,.15,.35),d(-.12,0,.1,.35,.5),d(-.38,-.09,.22,.35,.1),d(-.68,-.04,.27,.75),d(-.86,.14,.25,1.6),d(-.79,.33,.18,2.55),d(-.58,.35,.14,2.85),d(-.31,.2,.12,2.95,.1),d(-.06,.02,.11,2.55,.55),d(.05,-.15,.15,1,.55),d(.19,-.37,.15,.2,.12),d(.38,-.69,.09,-.25),d(.46,-.92,.095,-.6);function M(S=0,T=0,b=0){let E=f.map(ct=>({...ct,p:ct.p.clone(),n:ct.n.clone()}));E[4].p.z=c(E[4].p.z,.12,b);for(let ct=5;ct<=10;ct++){let Zt=[.72,1,1,1,1,.75][ct-5],st=S*Zt;E[ct].p.x=-1.7+.12+(E[ct].p.x- -1.7-.12)*(1-.34*st),E[ct].p.y=-.2+.025+(E[ct].p.y- -.2-.025)*(1-.25*st),E[ct].p.z=.11+(E[ct].p.z-.11)*(1-.2*st),E[ct].fold*=1-.35*S}for(let ct=51;ct<=57;ct++){let Zt=Math.sin((ct-50)/8*Math.PI);E[ct].p.z+=.075*T*Zt,E[ct].p.y+=.045*T*Zt*(ct<54?-1:1),E[ct].fold*=1-.7*T}for(let ct=58;ct<=64;ct++){let Zt=Math.sin((ct-57)/8*Math.PI),st=T*Zt;E[ct].p.x=-1.7-.1+(E[ct].p.x- -1.7+.1)*(1-.21*st),E[ct].p.y=-.2+.015+(E[ct].p.y- -.2-.015)*(1-.3*st),E[ct].p.z=.065+(E[ct].p.z-.065)*(1-.55*st),E[ct].roll*=1-.25*st,E[ct].fold*=1-.55*st}let g=new ws(E.map(ct=>ct.p),!1,"centripetal");g.arcLengthDivisions=6e3;let R=g.getLength(),O=[],w=[],L=[],U=[],V=[],C=new P,j=new P,H=new Ge,F=new P;for(let ct=0;ct<=3600;ct++){let Zt=ct/3600,st=g.getUtoTmapping(Zt),yt=g.getPoint(st),Et=g.getTangent(st).normalize(),mt=st*(f.length-1),zt=Math.min(f.length-2,Math.floor(mt)),Ot=mt-zt,ne=E[zt].n.clone().lerp(E[zt+1].n,Ot).normalize(),qt=new P().crossVectors(ne,Et);ct&&(H.setFromUnitVectors(j,Et),F.copy(C).applyQuaternion(H)),qt.lengthSq()<.015&&qt.copy(ct?F:new P(1,0,0)),qt.normalize(),ct&&qt.dot(F)<0&&qt.negate(),C.copy(qt),j.copy(Et),O.push(yt),w.push(qt),V.push(Et),L.push(c(E[zt].roll,E[zt+1].roll,Ot)),U.push(c(E[zt].fold,E[zt+1].fold,Ot))}let $=O[0],W=V[0].clone().negate(),X=$.clone().addScaledVector(W,2);X.z=Math.max($.z,X.z);let tt=new Xn($.clone(),X,new P(-9,-5,.2),new P(-R-64,-14,.26));tt.arcLengthDivisions=4e3;let ft=g.getLengths(),St=ft[Math.round(g.arcLengthDivisions*13/(f.length-1))],G=ft[Math.round(g.arcLengthDivisions*4/(f.length-1))],ut=ft[Math.round(g.arcLengthDivisions*51/(f.length-1))],Tt=ft[Math.round(g.arcLengthDivisions*57/(f.length-1))],_t=ft[Math.round(g.arcLengthDivisions*57/(f.length-1))],gt=ft[Math.round(g.arcLengthDivisions*65/(f.length-1))];return{length:R,points:O,sides:w,rolls:L,folds:U,tangents:V,releaseLength:St,bightStartLength:G,collarStartLength:ut,collarEndLength:Tt,leftLoopStartLength:_t,leftLoopEndLength:gt,exitCurve:tt,exitLength:tt.getLength()}}let y=M(),p=y.length;class m extends fn{constructor(T){super(),this.controls=T}getPoint(T,b=new P){let E=1-T,g=this.controls;return b.set(0,0,0).addScaledVector(g[0],E*E*E*E).addScaledVector(g[1],4*E*E*E*T).addScaledVector(g[2],6*E*E*T*T).addScaledVector(g[3],4*E*T*T*T).addScaledVector(g[4],T*T*T*T)}}function v(S){let T=new hi;T.name="one-continuous-cross-wrap";let b=new ni,E=new He(new Float32Array(1281*21*3),3),g=new He(new Float32Array(1281*21*2),2);E.setUsage(Xa),b.setAttribute("position",E),b.setAttribute("uv",g);let R=[];for(let st=0;st<1280;st++)for(let yt=0;yt<20;yt++){let Et=st*21+yt,mt=Et+20+1;R.push(Et,mt,Et+1,Et+1,mt,mt+1)}b.setIndex(R);for(let st=0;st<=1280;st++)for(let yt=0;yt<=20;yt++)g.setXY(st*21+yt,st/1280*p,yt/20*.235);let O=new de(b,S);O.name="single-material-ribbon",O.castShadow=!0,O.receiveShadow=!0,O.frustumCulled=!1,T.add(O);let w=new P,L=new P,U=new P,V=new P,C=new P,j=new Float64Array(21),H=new Float64Array(21),F=-1,$=-1,W=!1,X=y,tt=0,ft=new P(-.9,-.435,0).normalize(),St=.72,G=null,ut=0;function Tt(st,yt=X){let Et=a(st/yt.length)*3600,mt=Math.min(3599,Math.floor(Et)),zt=Et-mt;return{p:yt.points[mt].clone().lerp(yt.points[mt+1],zt),t:yt.tangents[mt].clone().lerp(yt.tangents[mt+1],zt).normalize(),s:yt.sides[mt].clone().lerp(yt.sides[mt+1],zt).normalize(),roll:c(yt.rolls[mt],yt.rolls[mt+1],zt),fold:c(yt.folds[mt],yt.folds[mt+1],zt)}}function _t(st,yt,Et){if(st<1e-7)return null;let mt=Tt(yt),zt=Tt(X.bightStartLength),Ot=new P(-1.7-.03,-.2-.1,.11),ne=new P(-1.7-.15,-.2-.23,.12),qt=new P(-.93,-.37,0).normalize(),me=new P(-.45,-.89,0).normalize(),Bt=mt.p.distanceTo(Ot),ye=Ot.clone().sub(mt.p).normalize(),ee=o(-.1,.8,mt.t.dot(ye)),ie=Math.max(Math.min(.18,Bt*.28),.24*ee);Et>.535&&mt.t.z<0&&(ie=Math.min(ie,.04/-mt.t.z));let _=mt.p.clone().addScaledVector(mt.t,-ie);_.z=Math.max(.07,_.z);let ge=mt.p.clone().lerp(Ot,.42);ge.z+=(.5-.25*o(.535,.565,Et))*ee;let ae=new m([mt.p.clone(),_,ge,Ot.clone().addScaledVector(qt,-ie),Ot.clone()]);ae.arcLengthDivisions=500;let xt=Ot.clone().addScaledVector(qt,.05);xt.z=.1;let it=ne.clone().addScaledVector(me,-.045);it.z=.1;let Gt=new Xn(Ot.clone(),xt,it,ne.clone());Gt.arcLengthDivisions=300;let pt=Bt<.003?0:ae.getLength(),bt=Gt.getLength(),A=Math.max(.001,st-pt-bt),I=X.points[0].clone();I.z+=.14*o(.02,.28,Et);let z=mt.p.clone().sub(I),et=z.dot(ft),Z=Math.max(0,z.lengthSq()-et*et),lt=Math.max(0,et+Math.sqrt(Math.max(0,st*st-Z)))*(.82+.12*o(.5,.66,Et)),Q=I.clone().addScaledVector(ft,lt),J=Math.min(.36,A*.2),dt=ne.clone().lerp(Q,.45);function N(Qt){let he=ne.clone().addScaledVector(me,J*Qt),Ae=Q.clone().addScaledVector(ft,-J*Qt),Qe=dt.clone();Qe.z+=Math.min(.18,A*.12)*Qt;let sn=new m([ne.clone(),he,Qe,Ae,Q.clone()]);return sn.arcLengthDivisions=180,sn}let K=Math.max(A,N(.12).getLength()),Y=.12,ot=1,at;for(;N(ot).getLength()<K&&ot<8;)ot*=1.5;for(let Qt=0;Qt<20;Qt++){let he=(Y+ot)/2;at=N(he),at.getLength()<K?Y=he:ot=he}at=N((Y+ot)/2),at.arcLengthDivisions=800,at.updateArcLengths();let ht=at.getLength(),wt=pt+bt+ht,Vt=[],nt=[],Ct=[],kt=new Ge,At=mt.t.clone(),re=mt.s.clone().applyAxisAngle(mt.t,mt.roll),ue=640;for(let Qt=0;Qt<=ue;Qt++){let he=Qt/ue*wt,Ae,Qe;he<pt?(Ae=ae,Qe=he/pt):he<pt+bt?(Ae=Gt,Qe=(he-pt)/bt):(Ae=at,Qe=(he-pt-bt)/ht);let sn=Ae.getPointAt(a(Qe)),Fi=Ae.getTangentAt(a(Qe)).negate().normalize(),An=re.clone();Qt&&(kt.setFromUnitVectors(At,Fi),An.applyQuaternion(kt).normalize()),Vt.push(sn),nt.push(An),Ct.push(Fi),re=An,At=Fi}let Ye=null,Ui=new P,rs=new P;for(let Qt=0;Qt<=ue;Qt++){if(Ui.crossVectors(new P(0,0,1),Ct[Qt]),Ui.lengthSq()<1e-6)continue;Ui.normalize();let he=Math.atan2(Ct[Qt].dot(rs.crossVectors(nt[Qt],Ui)),nt[Qt].dot(Ui));if(Ye!==null){for(;he-Ye>Math.PI;)he-=Math.PI*2;for(;he-Ye<-Math.PI;)he+=Math.PI*2}Ye=he;let Ae=Qt/ue*wt;nt[Qt].applyAxisAngle(Ct[Qt],he*o(0,Math.max(.02,pt*(.85-.25*o(.535,.565,Et))),Ae))}let en=o(0,.08,Et),nn=[];for(let Qt=0;Qt<=ue;Qt++){let he=Qt/ue*wt;if(nn[Qt]=mt.fold*(1-o(0,Math.max(.02,pt*.8),he)),en<1){let Ae=Tt(y.bightStartLength*(1-Qt/ue),y);Vt[Qt].lerp(Ae.p,1-en),Ct[Qt].lerp(Ae.t,1-en).normalize();let Qe=Ae.s.applyAxisAngle(Ae.t,Ae.roll);nt[Qt].lerp(Qe,1-en),nt[Qt].addScaledVector(Ct[Qt],-nt[Qt].dot(Ct[Qt])).normalize(),nn[Qt]=c(Ae.fold,nn[Qt],en)}}return{points:Vt,sides:nt,tangents:Ct,folds:nn,N:ue,length:st,fold:mt.fold,head:Vt[ue].clone(),connectorLength:pt,throatLength:bt,drawnLength:ht/wt*st,actualLength:wt,throatIn:Ot.toArray(),throatOut:ne.toArray()}}function gt(st){if(st<-tt){let Et=G?G.head:X.points[0];return w.copy(Et).addScaledVector(ft,-tt-st),L.copy(ft).negate(),U.copy(G?G.sides[G.N]:X.sides[0]),{roll:0,fold:0}}if(G&&st<ut){let Et=ut-st,mt=a(Et/G.length)*G.N,zt=Math.min(G.N-1,Math.floor(mt)),Ot=mt-zt;return w.copy(G.points[zt]).lerp(G.points[zt+1],Ot),L.copy(G.tangents[zt]).lerp(G.tangents[zt+1],Ot).normalize(),U.copy(G.sides[zt]).lerp(G.sides[zt+1],Ot).normalize(),{roll:0,fold:c(G.folds[zt],G.folds[zt+1],Ot)}}let yt=Tt(st);return w.copy(yt.p),L.copy(yt.t),U.copy(yt.s),{roll:yt.roll,fold:yt.fold}}function ct(st){if(st>=.08)return;let yt=21,Et=p/1280;function mt(xt,it){let Gt=[],pt=Math.max(0,Math.floor((tt+xt)/Et)),bt=Math.min(1280,Math.ceil((tt+it)/Et));function A(et,Z,rt){let lt=E.getX(et),Q=E.getY(et),J=E.getZ(et),dt=E.getX(Z),N=E.getY(Z),K=E.getZ(Z),Y=E.getX(rt),ot=E.getY(rt),at=E.getZ(rt),ht=(N-ot)*(lt-Y)+(Y-dt)*(Q-ot);Math.abs(ht)<1e-10||Gt.push({ax:lt,ay:Q,az:J,bx:dt,by:N,bz:K,cx:Y,cy:ot,cz:at,den:ht,x0:Math.min(lt,dt,Y),x1:Math.max(lt,dt,Y),y0:Math.min(Q,N,ot),y1:Math.max(Q,N,ot)})}for(let et=pt;et<bt;et++)for(let Z=0;Z<20;Z++){let rt=et*yt+Z,lt=rt+yt;A(rt,lt,rt+1),A(rt+1,lt,lt+1)}let I=new Map,z=.12;for(let et of Gt)for(let Z=Math.floor(et.x0/z);Z<=Math.floor(et.x1/z);Z++)for(let rt=Math.floor(et.y0/z);rt<=Math.floor(et.y1/z);rt++){let lt=Z+","+rt,Q=I.get(lt);Q||(Q=[],I.set(lt,Q)),Q.push(et)}return I}let zt=mt(X.leftLoopStartLength,X.leftLoopEndLength),Ot=mt(X.collarStartLength,X.collarEndLength);function ne(xt,it,Gt){let pt=-1/0,bt=xt.get(Math.floor(it/.12)+","+Math.floor(Gt/.12))||[];for(let A of bt){if(it<A.x0||it>A.x1||Gt<A.y0||Gt>A.y1)continue;let I=((A.by-A.cy)*(it-A.cx)+(A.cx-A.bx)*(Gt-A.cy))/A.den,z=((A.cy-A.ay)*(it-A.cx)+(A.ax-A.cx)*(Gt-A.cy))/A.den;I>=-1e-7&&z>=-1e-7&&I+z<=1.0000001&&(pt=Math.max(pt,I*A.az+z*A.bz+(1-I-z)*A.cz))}return pt}let qt=Math.floor(.6/Et),me=Math.ceil((tt+X.bightStartLength+.15)/Et),Bt=[],ye=.05,ee=.006;for(let xt=qt;xt<=me;xt++){let it=[];for(let I=0;I<=20;I++)it.push(new P().fromBufferAttribute(E,xt*yt+I));let Gt=it[20/2].clone(),pt=it[20].clone().sub(it[0]),bt=new P(-pt.y,pt.x,0).normalize(),A=Math.atan2(pt.z,Math.hypot(pt.x,pt.y));Bt.push({row:xt,points:it,centre:Gt,axis:bt,angle:A,flatten:0,drop:0})}function ie(xt,it,Gt=!1){let pt=0,bt=1/0;for(let A=0;A<=20;A++){let I=xt.points[A].clone().sub(xt.centre).applyAxisAngle(xt.axis,xt.angle*it).add(xt.centre);bt=Math.min(bt,I.z);let z=ne(zt,I.x,I.y);z>-1/0&&ne(Ot,I.x,I.y)<=I.z+.002&&(pt=Math.max(pt,I.z-z+ee)),Gt&&E.setXYZ(xt.row*yt+A,I.x,I.y,I.z)}return{required:Math.max(0,pt),available:Math.max(0,bt-ye)}}for(let xt of Bt){let it=ie(xt,0);if(it.required>it.available){let Gt=0,pt=1;for(let bt=0;bt<12;bt++){let A=(Gt+pt)/2,I=ie(xt,A);I.required<=I.available?pt=A:Gt=A}xt.flatten=Math.min(1,pt+.015)}}let _=Et/.1;for(let xt=1;xt<Bt.length;xt++)Bt[xt].flatten=Math.max(Bt[xt].flatten,Bt[xt-1].flatten-_);for(let xt=Bt.length-2;xt>=0;xt--)Bt[xt].flatten=Math.max(Bt[xt].flatten,Bt[xt+1].flatten-_);let ge=1-o(.06,.08,st);for(let xt of Bt){let it=ie(xt,xt.flatten*ge,!0);xt.drop=it.required,xt.available=it.available}let ae=Et*.8;for(let xt=1;xt<Bt.length;xt++)Bt[xt].drop=Math.max(Bt[xt].drop,Bt[xt-1].drop-ae);for(let xt=Bt.length-2;xt>=0;xt--)Bt[xt].drop=Math.max(Bt[xt].drop,Bt[xt+1].drop-ae);for(let xt of Bt){let it=Math.min(xt.drop,xt.available)*ge;if(!(it<=0))for(let Gt=0;Gt<=20;Gt++){let pt=xt.row*yt+Gt;E.setZ(pt,E.getZ(pt)-it)}}}function Zt(st=0,yt=16){if(W)return;let Et=a(st);if(Et===F&&yt===$)return;F=Et,$=yt;let mt=o(.02,.46,Et),zt=o(.48,.7,Et);X=Et===0?y:M(mt,zt,o(0,.08,Et)),tt=p-X.length,ut=c(X.bightStartLength,X.releaseLength,o(.34,.67,Et)),G=Et===0?null:_t(Math.max(0,tt+ut),ut,Et);let Ot=(p+yt)*o(St,1,Et);for(let ne=0;ne<=1280;ne++){let qt=ne/1280,me=qt*p-Ot,{roll:Bt,fold:ye}=gt(me-tt);hg(w,L,U,Et),U.applyAxisAngle(L,Bt),V.crossVectors(L,U).normalize(),j[0]=0,H[0]=0;for(let ee=1;ee<=20;ee++){let ie=(ee-.5)/20,_=.12*Math.sin(ie*Math.PI*2+me*.65)*(1-ye),ge=.86*ye*Math.sin(ie*Math.PI*4+.4)+_+.07*(ie-.5);j[ee]=j[ee-1]+Math.cos(ge)*.235/20,H[ee]=H[ee-1]+Math.sin(ge)*.235/20}for(let ee=0;ee<=20;ee++){let ie=ee/20,ge=45e-5*Math.pow(Math.abs(ie*2-1),8)*(Math.sin(me*48+ie*5)+.4*Math.sin(me*97));C.copy(w).addScaledVector(U,j[ee]-j[20/2]).addScaledVector(V,H[ee]-H[20/2]+ge),E.setXYZ(ne*21+ee,C.x,C.y,C.z)}}ct(Et),E.needsUpdate=!0,b.computeVertexNormals(),T.visible=Et<.9999,T.userData.ribbonMetrics={progress:Et,materialLength:p,width:.235,meshCount:1,freeEnds:2,pull:ut+Ot,tailDistance:p-Ot,guideLength:p,anchoredUntil:St,bowReleased:ut>=X.releaseLength-1e-4,heldUntil:St,bightStart:tt+Math.max(ut,X.bightStartLength)+Ot,bightEnd:tt+X.releaseLength+Ot,bightLength:Math.max(0,X.releaseLength-Math.max(ut,X.bightStartLength)),freeTailLength:Math.max(0,tt+ut),contraction:mt,relaxation:zt,connectorLength:G?.connectorLength||0,throatLength:G?.throatLength||0,drawnMaterialEnd:Ot+(G?.drawnLength||0),throatIn:G?.throatIn,throatOut:G?.throatOut}}return Zt(0),{group:T,update:Zt,dispose(){W||(W=!0,b.dispose(),T.clear())}}}return{createRibbonStrips:v}})(),{createRibbonContact:fg}=(()=>{function n(t,e,i,s){let a=new Ce(1536,1536),o=new Ce(1536,1536),c=new Ce(1536,1536,{depthBuffer:!1});for(let p of[a,o,c])p.texture.generateMipmaps=!1;let l=new mn,h=new ke({uniforms:{castPass:{value:0}},vertexShader:`
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
      }`,side:Xe}),f=new _i,u=new ke({uniforms:{source:{value:a.texture},direction:{value:new Xt(1/1536,0)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D source;uniform vec2 direction;varying vec2 vUv;void main(){vec4 c=texture2D(source,vUv)*.227027;c+=texture2D(source,vUv+direction*1.384615)*.316216;c+=texture2D(source,vUv-direction*1.384615)*.316216;c+=texture2D(source,vUv+direction*3.230769)*.070270;c+=texture2D(source,vUv-direction*3.230769)*.070270;gl_FragColor=c;}",depthTest:!1,depthWrite:!1}),d=new de(new si(2,2),u);f.add(d);let M=[o,a].map((p,m)=>{let v=new Xi({map:p.texture,transparent:!0,depthWrite:!1,toneMapped:!1}),S=new de(new si(6.8,4.4),v);return S.position.z=.001+m*2e-4,S.renderOrder=m,i.add(S),S});function y(p,m,v){h.uniforms.castPass.value=m,e.overrideMaterial=h,t.setRenderTarget(p),t.render(e,l),e.overrideMaterial=null,u.uniforms.source.value=p.texture,u.uniforms.direction.value.set(v/1536,0),t.setRenderTarget(c),t.render(f,l),u.uniforms.source.value=c.texture,u.uniforms.direction.value.set(0,v/1536),t.setRenderTarget(p),t.render(f,l)}return{update(){let p=t.getRenderTarget(),m=e.overrideMaterial;for(let v of M)v.visible=!1;s.visible=!1;try{y(a,0,1.5),y(o,1,5.5)}finally{e.overrideMaterial=m;for(let v of M)v.visible=!0;s.visible=!0,t.setRenderTarget(p)}},dispose(){a.dispose(),o.dispose(),c.dispose(),h.dispose(),u.dispose(),d.geometry.dispose();for(let p of M)p.geometry.dispose(),p.material.dispose(),i.remove(p)}}}return{createRibbonContact:n}})(),{createVellum:pg}=(()=>{let i=a=>Math.max(0,Math.min(1,a)),s=(a,o,c)=>{let l=i((c-a)/(o-a));return l*l*(3-2*l)};function r({bumpMap:a=null,map:o=null,inkMap:c=null}={}){let l=new si(4.08,6.28,30,54),h=l.getAttribute("position"),f=new Float32Array(h.array);h.setUsage(Xa);let u=new ke({uniforms:{tScene:{value:null},uResolution:{value:new Xt(1,1)},uHasScene:{value:0},uPaperMap:{value:o},uBump:{value:a},uInkMap:{value:c},uHasPaperMap:{value:o?1:0},uHasBump:{value:a?1:0},uHasInkMap:{value:c?1:0},uPaperColor:{value:new Ht(16776437)},uPeel:{value:0}},vertexShader:`
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
    `,transparent:!1,side:Xe,depthTest:!0,depthWrite:!0}),d=new de(l,u);d.name="vellum-sheet",d.position.z=.016,d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!1;let M=[];for(let V=0;V<h.count;V++){let C=f[V*3],j=f[V*3+1];(Math.abs(Math.abs(C)-4.08/2)<1e-4||Math.abs(Math.abs(j)-6.28/2)<1e-4)&&M.push(V)}M.sort((V,C)=>Math.atan2(f[V*3+1],f[V*3])-Math.atan2(f[C*3+1],f[C*3]));let y=new ni,p=new He(new Float32Array(M.length*3),3);y.setAttribute("position",p);let m=new Gn({color:11970699,transparent:!0,opacity:.2,depthWrite:!1}),v=new Rs(y,m);v.frustumCulled=!1,d.add(v);let S=Math.cos(Math.PI/8),T=Math.sin(Math.PI/8),b=-T,E=S,g=4.08*.5*S+6.28*.5*T,R=-1,O=!1;function w(V=0,C=0){if(O)return;let j=i(Number.isFinite(V)?V:0);if(j===R)return;R=j,u.uniforms.uPeel.value=j;let H=s(.015,.87,j),F=s(.49,.97,j),$=g-(g*2+.12)*H,W=.82+.2*s(.25,.85,j),X=2.55,tt=W*X;for(let ft=0;ft<h.count;ft++){let St=ft*3,G=f[St],ut=f[St+1],Tt=G*S+ut*T,_t=G*b+ut*E,gt=Math.max(0,Tt-$);if(gt===0){h.setXYZ(ft,G,ut,0);continue}let ct=Math.min(gt,tt),Zt=ct/W,st=gt-ct,yt=$+W*Math.sin(Zt)+st*Math.cos(X),Et=W*(1-Math.cos(Zt))+st*Math.sin(X);h.setXYZ(ft,S*yt+b*_t,T*yt+E*_t,Et)}h.needsUpdate=!0,M.forEach((ft,St)=>p.setXYZ(St,h.getX(ft),h.getY(ft),h.getZ(ft)+.001)),p.needsUpdate=!0,l.computeVertexNormals(),d.position.set(5.6*F,6.6*F,.016+1.15*F),d.rotation.set(-.07*F,.1*F,-.1*F),d.visible=j<.995}function L(V,C,j){O||(u.uniforms.tScene.value=V,u.uniforms.uHasScene.value=V?1:0,u.uniforms.uResolution.value.set(Math.max(1,C),Math.max(1,j)))}function U(){O||(O=!0,l.dispose(),u.dispose(),y.dispose(),m.dispose())}return w(0,0),{mesh:d,update:w,setBackground:L,dispose:U}}return{createVellum:r}})(),{createVellumMaterials:mg}=(()=>{function t(l){return()=>{l|=0,l=l+1831565813|0;let h=Math.imul(l^l>>>15,1|l);return h=h+Math.imul(h^h>>>7,61|h)^h,((h^h>>>14)>>>0)/4294967296}}function e(l,h){let f=document.createElement("canvas");return f.width=l,f.height=h,{canvas:f,context:f.getContext("2d",{alpha:!0})}}async function i(){let l=await fetch(ss.logo);if(!l.ok)throw new Error(`Le Invite logo failed to load (${l.status}).`);let h=(await l.text()).replace(/width="100%"/,'width="165.43" height="45.9"').replaceAll("currentColor","#000000"),f=URL.createObjectURL(new Blob([h],{type:"image/svg+xml"}));try{let u=new Image;return u.src=f,await u.decode(),u}finally{URL.revokeObjectURL(f)}}function s(l,h){let{canvas:f,context:u}=e(660,Math.round(205.39632153860518));return u.drawImage(l,0,0,f.width,f.height),u.globalCompositeOperation="source-in",u.fillStyle=h,u.fillRect(0,0,f.width,f.height),f}function r(l,h,f,u,d){l.drawImage(h,f,u,d,d/3.2133)}function a(){let{canvas:l,context:h}=e(800,1240),f=t(67),u=h.createImageData(800,1240);for(let d=0;d<u.data.length;d+=4){let M=f()*4;u.data[d]=250+M,u.data[d+1]=247+M,u.data[d+2]=234+M,u.data[d+3]=255}h.putImageData(u,0,0);for(let d=0;d<3800;d++){let M=f()*800,y=f()*1240;h.strokeStyle=f()>.5?"rgba(255,255,249,.16)":"rgba(206,192,158,.085)",h.lineWidth=.4+f()*.65,h.beginPath(),h.moveTo(M,y),h.quadraticCurveTo(M+4,y+1,M+1+f()*11,y+(f()-.5)*7),h.stroke()}return l}function o(l,h){let{canvas:f,context:u}=e(1200,1860);return u.scale(3,3),r(u,s(l,"#2b2a26"),70,250,260),u.textAlign="center",u.textBaseline="alphabetic",u.font=`500 21px ${h}`,u.fillStyle="#2b2a26",u.fillText("Jak kao hirur\u0161ki \u010Delik.",200,380),f}async function c(l="Arial, sans-serif"){let[,h,f]=await Promise.all([document.fonts.load(`400 24px ${l}`),i(),(async()=>{let M=new Image;return M.crossOrigin="anonymous",M.src=ss.paperBump,await M.decode(),M})()]),u=[],d=(M,y=!1)=>{let p=new dn(M);return p.colorSpace=y?gi:ve,p.wrapS=p.wrapT=ei,p.magFilter=_e,p.minFilter=di,p.generateMipmaps=!0,p.anisotropy=8,u.push(p),p};return{paperBump:d(f,!0),vellumMap:d(a()),vellumInkMap:d(o(h,l)),dispose(){u.forEach(M=>M.dispose())}}}return{createVellumMaterials:c}})(),{createVellumOverlay:gg}=(()=>{async function n(e){await document.fonts.ready;let i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],r=[i,...i.querySelectorAll("*")],a=(d,M,y)=>{let p=getComputedStyle(d,y),m=["display","position","width","height","top","right","bottom","left","box-sizing","margin","padding","border","border-top","border-right","border-bottom","border-left","border-radius","box-shadow","background","background-size","background-repeat","background-position","opacity","mix-blend-mode","z-index","overflow","font-family","font-size","font-weight","font-style","font-kerning","line-height","letter-spacing","color","text-align","text-shadow","text-transform","text-wrap","white-space","flex-direction","justify-content","align-items","gap","max-width","min-width","transform","transform-origin"];for(let v of m)M.style.setProperty(v,p.getPropertyValue(v));return p};s.forEach((d,M)=>{let y=r[M];a(d,y);for(let p of["::before","::after"]){let m=getComputedStyle(d,p);if(m.content==="none"||m.content==="normal")continue;let v=document.createElement("span");a(d,v,p),p==="::before"?y.prepend(v):y.append(v)}}),Object.assign(i.style,{position:"absolute",left:"0px",top:"0px",transform:"none",margin:"0",boxShadow:"none",willChange:"auto"});let o=[];for(let d of document.styleSheets)try{for(let M of d.cssRules)M.type===CSSRule.FONT_FACE_RULE&&o.push(M.cssText)}catch{}let c=new XMLSerializer().serializeToString(i),l=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1860" viewBox="0 0 400 620"><foreignObject width="400" height="620"><div xmlns="http://www.w3.org/1999/xhtml"><style>${o.join(`
`)}</style>${c}</div></foreignObject></svg>`,h=new Image;h.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(l),await h.decode();let f=document.createElement("canvas");f.width=1200,f.height=1860,f.getContext("2d").drawImage(h,0,0);let u=new dn(f);return u.colorSpace=ve,u.anisotropy=8,u}async function t(e){let i=e.querySelector(".li-stage"),s=e.querySelector(".li-card"),[r,a]=await Promise.all([mg(getComputedStyle(e).fontFamily),n(s)]),o;try{o=new Ks({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(w){throw r.dispose(),a.dispose(),w}o.setPixelRatio(Math.min(devicePixelRatio,2)),o.outputColorSpace=ve,o.toneMapping=Bs,o.toneMappingExposure=1.1,o.setClearColor(0,0);let c=o.domElement;c.className="li-webgl-vellum",c.setAttribute("aria-hidden","true"),Object.assign(c.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"2"}),s.after(c);let l=new _i,h=new Ki(-8,8,4.5,-4.5,.1,60);h.position.z=22;let f=new hi;l.add(f);let u=new Xi({map:a,toneMapped:!1}),d=new de(new si(4,6.2),u);f.add(d);let M=new ke({uniforms:{peel:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float peel;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*vec2(4.,6.2);float t=smoothstep(.015,.87,peel);float edge=3.09-(6.18+.12)*t;float d=dot(p,vec2(.92388,.38268))-edge;float a=exp(-d*d/.22)*.18*sin(peel*3.14159265);gl_FragColor=vec4(.22,.17,.10,a);}",transparent:!0,depthWrite:!1}),y=new de(new si(4,6.2),M);y.position.z=.007,f.add(y);let p=pg({bumpMap:r.paperBump,map:r.vellumMap,inkMap:r.vellumInkMap});f.add(p.mesh);let m=new Ce(1,1,{depthBuffer:!0}),v=0,S=0,T=null,b=!1;function E(w,L){v=w,S=L,h.left=-w/200,h.right=w/200,h.top=L/200,h.bottom=-L/200,h.updateProjectionMatrix(),o.setSize(w,L,!1);let U=o.getDrawingBufferSize(new Xt);m.setSize(U.x,U.y),p.setBackground(m.texture,U.x,U.y),T?.dispose();let V=document.createElement("canvas");V.width=w,V.height=L;let C=V.getContext("2d");C.save(),C.translate(w*.5,L*.4),C.scale(w,L);let j=C.createRadialGradient(0,0,0,0,0,.6),H=getComputedStyle(i);j.addColorStop(0,H.getPropertyValue("--li-stage-center").trim()||"#faf9f0"),j.addColorStop(.7,H.getPropertyValue("--li-stage-edge").trim()||"#f5f3e8"),C.fillStyle=j,C.fillRect(-.5,-.4,1,1),C.restore(),T=new dn(V),T.colorSpace=ve}function g(w){if(b)return;(w.width!==v||w.height!==S)&&E(w.width,w.height),f.position.set(w.cardX/100,(-S*.06-w.cardY)/100,0),f.rotation.z=-w.angle*Math.PI/180,f.scale.setScalar(w.cardScale),c.style.zIndex=String(w.zIndex),p.update(w.peel,0),M.uniforms.peel.value=w.peel;let L=p.mesh.visible;c.style.visibility=L?"visible":"hidden",L&&(p.mesh.visible=!1,d.visible=!0,l.background=T,o.setRenderTarget(m),o.render(l,h),o.setRenderTarget(null),d.visible=!1,l.background=null,p.mesh.visible=!0,o.render(l,h),e.dataset.vellum="ready")}function R(w){w.preventDefault(),O(),e.dataset.vellum="unavailable"}c.addEventListener("webglcontextlost",R);function O(){b||(b=!0,c.removeEventListener("webglcontextlost",R),p.dispose(),r.dispose(),a.dispose(),T?.dispose(),d.geometry.dispose(),u.dispose(),y.geometry.dispose(),M.dispose(),m.dispose(),o.dispose(),c.remove())}return{render:g,dispose:O}}return{createVellumOverlay:t}})(),{createRibbonOverlay:Mg}=(()=>{function n(e,i){let s=new _s,r=l=>(l.wrapS=l.wrapT=Bn,l.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),l),a=r(s.load(ss.silkNormal,i)),o=r(s.load(ss.silkRoughness,i)),c=r(s.load(ss.silkColor,i));return c.colorSpace=ve,a.repeat.set(.35,.35),o.repeat.copy(a.repeat),c.repeat.copy(a.repeat),{normal:a,rough:o,color:c,dispose(){a.dispose(),o.dispose(),c.dispose()}}}function t(e){let i=e.querySelector(".li-stage"),s=new Ks({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.outputColorSpace=ve,s.toneMapping=Fs,s.toneMappingExposure=.94,s.shadowMap.enabled=!0,s.shadowMap.type=sa,s.setClearColor(0,0);let r=s.domElement;r.className="li-ribbon-canvas",r.setAttribute("aria-hidden","true"),i.append(r);let a=new _i,o=new hi;a.add(o);let c=new Ki(-8,8,4.5,-4.5,.1,80);c.position.set(0,0,24);let l=new Ja,h=new es(s),f=h.fromScene(l,.04);a.environment=f.texture,a.environmentIntensity=.38,a.environmentRotation.set(.1,.85,-.52),l.dispose(),h.dispose();let u=new Yn(16774633,1.36);u.position.set(-4.5,6,4.2),a.add(u),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),Object.assign(u.shadow.camera,{left:-4,right:4,top:3,bottom:-3,near:.1,far:24}),u.shadow.camera.updateProjectionMatrix(),u.shadow.bias=-1e-5,u.shadow.normalBias=.0015,u.shadow.radius=2;let d=new Yn(16054015,.17);d.position.set(4,-2,6),a.add(d);let M,y=!1,p=n(s,()=>{M&&!y&&R(M)}),m=new Cs({color:12887398,map:p.color,normalMap:p.normal,normalScale:new Xt(.32,.32),roughnessMap:p.rough,roughness:.35,metalness:0,sheen:.48,sheenColor:new Ht(14261885),sheenRoughness:.46,anisotropy:.88,anisotropyRotation:Math.PI/2,specularIntensity:.66,side:Xe});m.onBeforeCompile=L=>{L.vertexShader=`varying vec2 silkUV;
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
`)};let v=dg(m);v.group.position.y=0,o.add(v.group);let S=new de(new si(6.8,4.4),new Xi({colorWrite:!1}));S.renderOrder=-1,o.add(S);let T=fg(s,a,o,S),b=0,E=0,g=-1;function R(L){if(y)return;M=L;let{width:U,height:V,scale:C,angle:j,y:H,progress:F}=L,$=F<1;r.style.visibility=$?"visible":"hidden",$&&((U!==b||V!==E)&&(b=U,E=V,s.setSize(U,V,!1),c.left=-U/200,c.right=U/200,c.top=V/200,c.bottom=-V/200,c.updateProjectionMatrix()),v.update(F,Math.max(16,U/(100*C)+4)),F!==g&&(o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.setScalar(1),T.update(),g=F),o.position.set(0,(-E*.06-H)/100,0),o.rotation.z=-j*Math.PI/180,o.scale.setScalar(C),s.render(a,c),e.dataset.ribbon="ready")}function O(){y||(y=!0,v.dispose(),p.dispose(),m.dispose(),T.dispose(),S.geometry.dispose(),S.material.dispose(),f.dispose(),u.shadow.dispose(),s.dispose(),r.remove())}function w(L){L.preventDefault(),O(),e.dataset.ribbon="unavailable"}return r.addEventListener("webglcontextlost",w),{update:R,dispose(){r.removeEventListener("webglcontextlost",w),O()}}}return{createRibbonOverlay:t}})(),{mountEnvelope:Ig}=(()=>{function n(t){let e=t.querySelector(".li-stage"),i=[...t.querySelectorAll(".li-envelope")],s=t.querySelector(".li-flap-layer"),r=t.querySelector(".li-flap"),a=t.querySelector(".li-card"),o=null,c=!1;gg(t).then(H=>{c?H.dispose():(o=H,w())}).catch(H=>{t.dataset.vellum="unavailable",console.error("Vellum could not start",H)});let l=t.querySelector(".li-table-shadow"),h=t.querySelector(".li-scroll-cue"),f=t.querySelector(".li-stage-heading p"),u=t.querySelector(".li-skip"),d=t.querySelector(".li-replay"),M=matchMedia("(prefers-reduced-motion: reduce)"),y=null;try{y=Mg(t)}catch(H){console.error("Ribbon could not start",H)}let p=()=>M.matches?0:window.innerHeight*1.6,m=0,v=0,S=0,T=0,b=1,E=(H,F=0,$=1)=>Math.min($,Math.max(F,H)),g=(H,F,$)=>{let W=E(($-H)/(F-H));return W*W*(3-2*W)},R=(H,F,$)=>H+(F-H)*$;function O(){m=0;let H=M.matches?1:E(cg((window.scrollY-T)/b/.94)),F=g(.012,.245,H),$=E((H-.19)/.81),W=g(.08,.28,$),X=g(.28,.48,$),tt=g(.48,.65,$),ft=g(.72,.91,$),St=Math.min(.88,v*(v<700?.88:.7)/680,S/820),G=Math.min(1.04,(v-32)/400,(S-142)/620),ut=T+b*(1+Tu),Tt=E((window.scrollY-ut)/p()),_t=g(0,.06,Tt),gt=g(.06,1,Tt),ct=Math.min(2.6,(v-40)/400),Zt=Math.max(0,38-(S*.56-560*St))*W,st=Zt+(390*X+380*tt)*St,yt=R(-5,-1.5,W),Et=`translate(-50%,-50%) translateY(${st}px) rotate(${yt}deg) scale(${St})`,mt=1-g(.48,.65,$);i.forEach(ie=>{ie.style.transform=Et,ie.style.opacity=mt}),y?.update({width:v,height:S,scale:St,angle:yt,y:st,progress:F}),r.style.transform=`rotateX(${-178*W}deg)`,s.style.zIndex=W<.505?"6":"1",s.style.filter=`drop-shadow(0 0 .7px #7d6840) drop-shadow(0 ${3+7*Math.sin(Math.PI*W)}px ${2+6*Math.sin(Math.PI*W)}px #716245${W<.6?"25":"08"})`;let zt=R(90+yt,0,tt),Ot=zt*Math.PI/180,ne=Math.abs(Math.sin(Ot))*400+Math.abs(Math.cos(Ot))*620,qt=Math.abs(Math.cos(Ot))*400+Math.abs(Math.sin(Ot))*620,me=Math.min(R(St,G,tt),(S-124)/ne,(v-30)/qt),Bt=Zt-145*St*X,ye=R(Bt,-S*.06,tt),ee=R(-Math.sin(yt*Math.PI/180)*(-145*St*X),0,tt);if(a.style.transform=`translate(-50%,-50%) translate(${ee}px,${ye}px) rotate(${zt}deg) scale(${me})`,$>=.94){let ie=R(me,Math.max(me,ct),_t),_=620*ie,ge=_<=S-40?S/2:R(20+_/2,S-20-_/2,gt);a.style.left=`${(v-400)/2}px`,a.style.top=`${(S-620)/2+(ge-S/2)}px`,a.style.transform=`scale(${ie})`}else a.style.left="50%",a.style.top="56%";a.style.zIndex=X>.85?"7":"2",o?.render({width:v,height:S,cardScale:me,cardX:ee,cardY:ye,angle:zt,peel:ft,zIndex:X>.85?7:2}),l.style.transform=`translate(-50%,-50%) translateY(${st+20*St}px) rotate(${yt}deg) scale(${St})`,l.style.opacity=mt*(1-.35*X),h.style.opacity=1-g(.08,.23,$),f.style.opacity=1-g(.1,.3,$),t.dataset.complete=String($>=.94),t.dataset.progress=$.toFixed(4),t.dataset.stageProgress=H.toFixed(4),t.dataset.ribbonProgress=F.toFixed(4),h.firstChild&&(h.firstChild.textContent=(H<.245,"Skroluj polako da otvori\u0161"))}function w(){m||(m=requestAnimationFrame(O))}function L(){v=e.clientWidth,S=e.clientHeight,T=t.getBoundingClientRect().top+window.scrollY,b=Math.max(1,(t.offsetHeight-p()-S)/(1+Tu)),w()}function U(H){window.scrollTo({top:T+b*ug(H),behavior:M.matches?"instant":"smooth"})}let V=()=>U(.965),C=()=>U(0);u.addEventListener("click",V),d.addEventListener("click",C),window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",L,{passive:!0}),M.addEventListener("change",L);let j=new ResizeObserver(L);return j.observe(t),j.observe(e),L(),()=>{c=!0,o?.dispose(),y?.dispose(),cancelAnimationFrame(m),j.disconnect(),window.removeEventListener("scroll",w),window.removeEventListener("resize",L),M.removeEventListener("change",L),u.removeEventListener("click",V),d.removeEventListener("click",C)}}return{mountEnvelope:n}})();function vu({id:n="the-opening",className:t="",theme:e="auto",fontFamily:i="Arial, sans-serif"}){let s=Sl(null),[r,a]=bl(e==="dark"?"dark":"light");return $a(()=>{if(e!=="auto"){a(e);return}let o=matchMedia("(prefers-color-scheme: dark)"),c=()=>{let h=s.current?.parentElement?.closest('.dark, .light, [data-theme="dark"], [data-theme="light"]'),f=h?h.classList.contains("dark")||h.getAttribute("data-theme")==="dark"?"dark":"light":o.matches?"dark":"light";a(f)},l=new MutationObserver(c);return l.observe(document.documentElement,{attributes:!0,subtree:!0,attributeFilter:["class","data-theme"]}),o.addEventListener("change",c),c(),()=>{l.disconnect(),o.removeEventListener("change",c)}},[e]),$a(()=>{let o=s.current;if(!o)return;let c=!1,l,h=0;return o.dataset.liReady="false",(async()=>{let f=getComputedStyle(o).fontFamily,[u]=await Promise.all([lg(),document.fonts.load(`400 24px ${f}`)]);await document.fonts.ready,!c&&(o.style.setProperty("--li-paper-surface",`url("${u}")`),l=Ig(o),h=requestAnimationFrame(()=>{c||(o.dataset.liReady="true")}))})().catch(f=>{c||console.error("Le Invite could not initialise",f)}),()=>{c=!0,cancelAnimationFrame(h),l?.()}},[i,r]),React.createElement("section",{ref:s,className:`li-opening ${t}`.trim(),id:n,"aria-label":"Otvori kovertu","data-li-theme":r,"data-li-ready":"false",style:{"--li-font-family":i}},React.createElement("style",null,ag),React.createElement("div",{className:"li-stage"},React.createElement("div",{className:"li-stage-heading"},React.createElement("span",null,"Mnjauprrrrr"),React.createElement("p",null,"Malo i\u0161\u010Dekivanja.")),React.createElement("div",{className:"li-table-shadow","aria-hidden":"true"}),React.createElement("div",{className:"li-envelope li-back","aria-hidden":"true"},React.createElement("div",{className:"li-envelope-paper li-paper"}),React.createElement("div",{className:"li-liner li-paper"}),React.createElement("div",{className:"li-mouth"})),React.createElement("div",{className:"li-envelope li-flap-layer","aria-hidden":"true"},React.createElement("div",{className:"li-flap"},React.createElement("div",{className:"li-flap-face li-flap-front li-paper"}),React.createElement("div",{className:"li-flap-face li-flap-inside li-paper"}),React.createElement("svg",{className:"li-flap-edge",viewBox:"0 0 680 340","aria-hidden":"true"},React.createElement("path",{d:"M0 1 L320 326 Q333 334 340 334 Q347 334 360 326 L680 1",fill:"none",stroke:"rgba(70,48,18,.30)",strokeWidth:"7",style:{filter:"blur(3px)"},transform:"translate(0 4)"}),React.createElement("path",{d:"M0 1 L320 326 Q333 334 340 334 Q347 334 360 326 L680 1",fill:"none",stroke:"#9b835a",strokeWidth:"1.7",strokeLinejoin:"round"})),React.createElement("img",{className:"li-seal",src:"/assets/li/seal.png",alt:""}))),React.createElement("article",{className:"li-card","aria-label":"Hirur\u0161ki \u010Delik"},React.createElement("div",{className:"li-card-stock li-paper"}),React.createElement("img",{className:"li-card-photo",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCAYOA+gDASIAAhEBAxEB/8QAHQABAAIDAQEBAQAAAAAAAAAAAAYHBAUIAwIBCf/EAGsQAAEDBAECBAQCAwoICAcEGwEAAgMEBQYRBxIhCBMxQRQiUWEVMkJxgQkWIzhSYnaRsrQXMzc5cnR1syRDU1dzgqGxGDWVwcPS0yUmJzQ2Y4SSlJa10dQZVVaTolSDo8LV8ERFRlil4fH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACMRAQEBAAIDAQACAwEBAAAAAAABESExAhJBUSJhMkJxA2L/2gAMAwEAAhEDEQA/AO6ERF43YREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEUC5C5p4y4uh/9+eV0dFVFvUygj3NUvHsREwFwB/lEAfdJNE9Rcd3jx52+vuwtPGvGF7yCqkPTF8VIInuP1bFE2Rzh+0FZVHyj42crAksfDVis1M/0fco3QSMH3E1Q0/8A4i16X6mx10i5jo7V447jp1Rk3HdoB7lskReR+rpieP8AtXrkNo8TmM4NdcoyvnvG7TQW2lfVTyUGPRVDuljSdNEjWguPoB7kgJ6/2anHLnLd5xzI7bxvxrZ4L/yDeIzLBTTO1T2+AetTUHY03sdDY3r9QdXfAHKPMd38SeW8W8kXmy5HFZ6IzyXG0xMEVPN1RARNexjOoake0hzeoOjPfsVE+IfDpkPKOOR8v8lcmZXS3XKoPNqqa0yNo31FNsCJsj2jRY5rGODA0ADp9wuo8A40wni/GzY8JsUFspnuD5ntJfLUO/lSSOJc89zrZ0N6GgrckxObyliIiw0+JpoaamkqKiVkMMbS98kjg1rGgbJJPYAD3UOxnlrj7NMqqcexDIor7V0reupkt0Mk9PCO+uqoa3ygTo6HVs6OvQrkfxg8zXnLs8p+BOPpJZw6ojp7mKV3zVlU9wDKUEfotJHV9XHR10HfU/CXFNr4e4ht+KUTY5K3p+IuVY0d6mpcB1u/0RoNaPZrR77Wr45NqbtWKiIsqIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiI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+wJX9I6+5W+12ie63Kup6Shp4zLNVTyBkcbANlznHsB91VnMfhx485qnp7hkUdbb7xTR+VHc7a9rJXR7JDHhzXNe0EkjY2NnRG1oMW8J2D2WKjp8kyjLsxoKJzXU1ovdxL7fEW/l1TtAadfQ7b9k8rPLkksbfCPiOWuUouWqymmhxW0RyUmJ09QwsdVOk+Wa4uae4Dmjy4we/R1O0OoK5V8xxxxRNiiY1jGANaxo0GgegA9gvpZt1oREUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFyx4l/CdHybcJc6wB9PQ5UWg1VJKfLhuPSNB3V+hLoAbPZ3bevVdTorLZdiWa/mZZ/ET4keCa9uK5bBUVMcA6Y6HKKZ8jg0dtxzAte5vpo9bm/RWJQ/uh10jpwLlxXR1Euu7qe7uhaT+owv/713DdrLZr9bnW++2mhudI/81PWwMmjd+trgQqxuvhf4DvEzpavjO1RucdkUb5aQfsET2gLft43uJl+OZLj+6F5HLERaeNLXSv9nVVxkqB/U1jP+9VZl3jG51y2J9LBkFNj9PJ2MVjpvJd+yRxdIP2OC7hpvCX4eaSQPi44pnEHf8NX1co/qdKQp7jXF/HGHyNlxfBrBapm+k9NQxtl/wDwmuo/1q+3jOoZX808F8NvN3L14/Fqi0VtDTVLvMmveRPfEJN/pDrBklJ+oBH1IXcvCvhb4/4fMV3LDkGTBve7VsYAhPv5EfcR/r2XevzaOleaLPl52rPGQREWFEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFp8kyrGsPtDLplV9oLNRPlEDaiumbEwvIJDQXHWyGk6+xW4VVc3XG32l3HdxutdTUNHDmNI6WpqpWxRxj4epG3OcQAO/urJpW3i5x4cmmbEzlHEg5x0Ou6QtBP02XaU6gnhqaaOoppo5oZGh7JI3BzXtPcEEdiD9VDLhyvxEy2zfiXI2GOpS0iRkt2pnNcPp09ff9XutPwdQOosOvs1FRT0GO1t9qazH6SWN0XlULwzp6I3aMcbpBNIxpA017ew2mIl+UZ3hmEMpX5flFqsbasuFObhUth80t11dPURvXU3f6wo5/h64V/wCdTEv/ACnF/wCstPyPfLJj3iI4zuN/vFBaqP4W8M+IrqhkEfUY6fQ6nkDZ+imNNyfxrWVsNHR8h4rUVEz2xxQxXane+R7joNa0P2SSQAArg3Nzv1ls2OS5BdrrSUVqhjEslbPKGRMYdacXHsAdjv8AdQ3/AA9cK/8AOpiX/lOL/wBZWGozneZ0mEYt+IvpZbhcKmVtHbLXAQJa+qf/AIuFm/TeiS70a0OcewKkV+YxyNgWa1s9HiOYWW91FOwS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w+8cXzijgW14RkVVb6q4Uk1RJJLb3vfERJK540XtafRw329VY9w+O/Car8L+H+O8l/w/xO/K8zpPT1679O9b130p5c0nSmea+QMgqL7Q8K8Xzg5tfoy6prm922Sh9H1MhH5XEdmD12djuWg2Jxzx/j/GPHVBh+NwFlLSt3JM/wDxlTKfzyyH3c4/1DQHYAKgcA4r8UXH93v97pKriK73y/VXxVwu91luMlRL/JjBYxrWxt76aANb+w1beEnxC/vsZ/hHbxkLF5b+v97xrjVeZr5decOjp36+61ZxkIjTuWeS875DyPHOG8Wx2SgxysNur77ktXLHDLVN/PFFHC0uPSR3cTo9vTY3VviBPNjaDj2fkaLAI7fHmtu+Hkx19W6pE2pNb85ob0dIdvXfYb91ZJ4t5a465IyTIOG71itXZskrXXOuseTNmYKeqf8A4ySGWEE/MfYgADQ76BWizng/mjk6qxy/ZlmGMi4We801ZDZrYJ4bfBAxxdK8Pc10k07tMDeoNa0dWvzKzJUrphERc2hERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAUYz3EarNcS/B6HLL5jFS2dlRHcLNMI5Q5u9NdsHqYd929t6HdSdEFVcecH0GF55WZ5fcsvmY5XU0wohdLw9p+Hg3vy4mNGmAn19ffWtu3aqIrboIiKAiIgIiICIiAhGxpEQarG8bsmIYtSY5jlAygtlG0tgp2Oc4MBcXHu4kklziSSSdlbVEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREEJ5FwO6ZxRW8WfP8jxCroZHSMns8jQ2bqABbKxwPWBrsNjRJ9e2tdxdw7ZuM6q8Xj8au2RZHe5GyXK93eUSTzdI01g0NNYN+nf276AAsdFduYYIiKAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIixbnc7dZbRU3W711PQ0NNGZZ6mpkEccTR6uc49gEGUioqXxe8HR1bw2+3SahY/y33OK01LqZp3r8/Rv+oK4sfyGx5VjtNfscutLdLbVN64aqlk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ADjnJf8AR6g/sxKTYNyHylyByTDURca1mIYJBBJ582TxmG41cp/IIoQ7+DAI7l3UCCdHelqcSsF9pvHzyFkNRZbjDaKqxUUNPcZKZ7aeZ7RH1NZIR0ucNHYB2NFZnG6rX5x/nGOLv9g3H+xKnO38argH/alx/wB3Amcf5xji7/YNx/sSrfeITActyW24tmvH8MNVlOHXMXOkoZnBrayM6EsOyQAXdLfUjsCPUhWdxFzrnngog+Kzn8gg/wDunbh2/wCinWTH4i8ur6QWy1+HbksZK9vSKatoRT0LJPT5qtx10b/SLRtanwyYhn+L8s8u1XIFFUCvudZQ1RrxTSRUtVI5s75RTvcNPYx0gZsegA9N6TMl1frpNFVlo5YvNw8V994hq8OlpKG32ll0p7w6bfxDSY276OnQaXPc0EEncbvvq01mzFERFAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBVLyvx5kWY8tcW5FZm0posau0lbXmaXocI3BgHQNfMflPZW0isuAiIoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAohg+CQYZX5RcDcHXCtyG8zXaed8XllgcGtjhHc7axjAAffudDal6ICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAoxns2f0+JefxvR2OsvTJ2E095kkjikh79Ya5ncP9Nb7eu/oZOiCiMI485OyHxCw8v8sx2O1zWy2vttostomdOI+snrllkcNEkOcND12PTp+a90RW3QREUEQsmCQWjlzKc+muDqurvkNJSxwui6RRwwMI6Gu2erqe5zydD2HttS9EQEREBERAREQEREBERAREQEREBERAREQEREBEXlUVVLSRtkqqmKBjnBgdK8NBcfQDfug9UWFXXe02x8bbldKKjdJ2YKidsZf+rZG1mNc17A9jg5pGwQdghB+ovxzmsYXOcGtA2SToALDobxaLm+RltulFWOj/OKedshZ+vpJ0gzUREBFjV1xt9sp/iLlX01HFvXmVErY27+myQvSmqaaspWVNJURVELxtssTw9rh9iOxQeqL8JDWlziAB3JPssGivdmuNQ+C33egq5Wfmjp6hkjm/rAPZBnoqy5w5epOHeL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BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFg3ipuVHY6mqtFsZc62JnXFRunEHnEerQ8ggEjet9t6BIHcR7F85my67OjtuLXqit0EeqqsvFM+heyft/ARxPb1SlvfqePkHbpc/vpgl6IiAiIgIiICLyqXVDKOV9JFHLUBhMUcshja92uwLgCWgn30dfQqGWHkC4ZBf4LLT4Te6GrgJ/F3XKJ1PBQa2A2OYtLapzjot8olvT3c5h00sE4REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEUbs2eYtkGd3/DrTcnT3mweULlTGCRgg81pcz5nNDXbAP5Sde6CSIiICIiAiKC3Lk2gtviBsvFMlsqX1l1tktzZWte3y42sLgWkeuz0H+tME6REQEREBFBeSOTaDjeoxWKutlTWnIr3BZIjC9rfJfKTp7t+rRr0HdTpMBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBV3yrXVtFcuPW0dZUU4qMtpYJhDIWebGYKgljtfmaSAdHt2CsRVNztbI7zBx9a5auupGT5hSNM9DUOp5mfwFQdskYQ5p7eoKs7SrZVd43XVs3iY5At8tZUSUlPaLLJDTukJjic91d1lrfQF3S3ZHr0jfoF+/4H7V/9+3In/wBNNZ/66j/GePQYz4keSLdT3O8XBhtVkl867V0lZKCTXDQfISent6enc/VUb/lWuraK5ceto6yopxUZbSwTCGQs82MwVBLHa/M0kA6PbsFYirPl7/xpxt/TOk/u9SrMU+KoTh7jXHMt4Px3JL/X5ZVXSupzLUVDcpukXW7rcNhrKgNHoOwACktLHd+N+X8axuDIbtesbyb4mmjprxUuq57fUwwuna6Od+5HxvjjkBa8uIcGkHRIUU4PuHLkfh+xiKyYnhlTbxTOEE9Zf6mCV7fMdovjbRPDT9g4/rW+48/G845Orsj5Amo6PIMUmmt1PjdC13lUHnAf8LMr/mnM0QHQ/pY0NL29PV1a1fqN/wA311bbuG56q31lRSTi7WlglgkMbg11zpmuGx30Wuc0j3BI91YirTn5rm8AXesDHOjoaqguM3SNlsNPXQTyu/YyNx/YrIiljngZNDI2SN7Q5j2HYcD3BB9ws/FV+2urf/Cwltvxk/wQxJk4pvMPl+Z8Y5vX0+nVrtv10vLnqepp+A7u+krKqkkfUUMXnUk74JA19bAxwa9hDm7a4jYIOivOge2v8Xt6mpT5kdrxWkpKpzfSOWaqmlaw/wA7oYHa+jm/VefiHNQ3w63p1IyN9QKm3mJsri1rnfHwaDiASBv1Oj+pX7EZh4UwtgLqSuzOkmH5ZocuuvUw/UdVQQf2ghfnHV1v1LmmV8eZBdpb0+w/CVNHdahrWzz0tS2QsZN0gNdIx0MrS8AdQ6SRve8S9X/nugxyurqHj7B6qpp4Hyx00GRVUskzmjfQxpomAuPoAXN2fcLM4it9HVYzUZ8b+y/XTKTHWVdfHB8PG0Mb0R08cRJMbYtOb0uJd1dZcdkgPnI1uSGqzLxAHjyvyC52iyUVjiuxpbZVvo57pJJPJE4GaMiQRRCNu2sc0kyjqOgAd7a+LbRj99pLnjmQZXbRDJ1TUb7zUVtNVN92vjqXSAb/AJTOl33W1yzBMTziKnZkVsbUVFG4vpayCZ9PVUjnDuYpo3Nkj3ob04b0N7UBySmyviGgpMltub3bIcfbcKSjrbNkBZUzCOedkHXT1Ia2TraZGu6ZC8OAI2CnfAm/J9TUUfCGZVdJPLT1ENjrZIponFj43CneQ5pHcEEAghYjMyteJcK2XIshqZ5OqgpWMjjBmqK2d8beiKJnrJK93YD39T2BK9+V/wDIHnH9H6/+7PVSWXjnkPJsIxbk2rusNJmFmpYKnHrCZOu300HkdD4Jjr55ZmOIdMPyHoDezT1JOBaeE2XKKi51GaZvUywXWujEdPY4KgupbTT72I9A9Ms57F8pHr8rdNHfCyuurYPEXx1Qw1lRHS1FJd3TwMkIZKWR0/SXNHZ2tnW/TZUgwfNLdnOLC60UM1HUwyOpa+21I6Z6CpZ2kglb7Oaff0IIcNggqL5f/Ga4y/1K8/7umT6LMREWVVbd6/JOQ+TLrhWO32qx7HbD5cd5utB0irq6mRgkFJA9wIia2NzHPkA6tva1vT3KyX8LY/TwmaxZNm1nugG23KPI62peXfV8dRJJFIN+ocwj9SxuOqmOw8v8h4XcXCKvrLqMjouvt8XSTwQxlzP5XlyxPY76fJ9QrSWrc6Ri2yGuprLSU9zrmV1bHCxk9UyHyRNIAA54Zs9Ozs62dbVLYHgVjzeozG75JXZNUVUeV3OljMGR3GlZHFHOQxjY4p2saAO3YK8gQ5oc0gg9wR7qheN+PaHIp84uc+TZfQvfmF1b5FsvlRSQjU5GxHG4NB+p90hVnY5xti+K3n8UtDr8ajyzF/w6/wBfWx9J1v8Ag55ns329dbC1HKtdW0Vy49bR1lRTioy2lgmEMhZ5sZgqCWO1+ZpIB0e3YKQ4vh1JislS+mvmR3L4gNBF4us1aGdO/wAgkcene++vXQ+ii3L3/jTjb+mdJ/d6lSdizERFFV3wRXVty8OmKV1xrKisqpaQuknqJDI958x3cuPcpDXVp8WVbbTWVBom4lTzim8w+WJDWTNL+n06tADfroBY/h7/AIsuH/6kf949RPM6PMrv4uX2DE6xlpirsQgZcb0HAzUUArZt+QwjRmfvpa49md3aJAB19qfEtyK/3fOcnq+P8Fr5aKlpHeVkGSU570Wxs0lM70NU4Hu7uIgdn5y0Kw6Gigt1sp7fS+Z5NPG2JnmSOkd0tGh1OcS5x+pJJPqVUWHwf4DsipuPK9734Xdqp7rBdpz1PpaqV7pH0VS8/mL3Oc6KR3d2ywkkN3cqlIKu8lrq2HxL8f0EVZUR0lRab0+anbIRHK5hougub6Et6naJ9Oo69VYirLNHtovElxjcak+XTTU93tjZHdm+fLHTysZv6ubTS6HvpItWaq84lrq2ugzQ1tZPUmHLbjBF50hf5cbXt6WN36NHsB2CsNVnwk9tZi2TXunPXRXTKrpV0ko9JYviDGHt+rXGMkH3BCfBZiwbxaaO+2OotNwNSKaob0SfDVMtNJre/lkic17T29WkFZyKCrL5xdxbjWN1t/vlwyiit1DC6eoqJcvuwaxjRsn/AOM9z9AO5OgO6x+FcLrrU26ZpcHX6gZe+k2+w3O61VabdSN/IZPPkeRPJ+d43puwwejif2k/+GTPI7o/5+P8fq90TP0L5Xxu155/lU8LgQz2fIC7uGN3bS1b8TFd5XXVsHiL46oYayojpaiku7p4GSEMlLI6fpLmjs7WzrfpsqxFWeX/AMZrjL/Urz/u6ZWYpVFz5V5RkP795+cIrzWDCqC6jHnW4SH4aS3B5hmuHT6Fzasg9f8AyMR9ip9zVk17sHF81txGnlqsqv0gtNmp4XtZIZpGuLpGlxDR5cTZJNuIG2DZG1pqOovdHxpFgUfAuRusUdu/CzSvulrIfB5fllrv+FdyW72fcklWJVvKtss4pxGpoL3fXy5Myukinqi6DJrnCxsnS522xsqAxo36NAAHoBpefB1+vFbx2/FcppqmkyTF5Raq6Crex8zow0Op5nFjnNcXwujJcCQXB/fsp1kn/wAhl3/1Kb/dlTqr2qjirjDF7xw3hOT3OryqpulZZaGvqJ35Rc9STPgY9ziwVHTouJPTrXtrXZZ/Pn755LFhtDh+RTWK7VeUU0MVWzZZvyKhwbK0H54y5repp7EKR8L/AMW3j3+jVt/usa1fL3/jTjb+mdJ/d6lXeU+N7x7m4zPH5xX0JteQ2yb4K82l7tuo6kDZ0f0o3Ah7H+jmuB9dgarG66tm8THIFvlrKiSkp7RZZIad0hMcTnurustb6Au6W7I9ekb9AvHkLHLxacgg5TwajfU323w+Rc7XF2/GqEHqMP8A07Nl8Tvrth7P7anjLI7PlvPucZJYKxlXbq6w2GaGVvbY6q/YI9WuBBBae4IIPcJ80S7kjL7hi1hoKTH6OCtyO91rLXaaeoJEXnOa57pZdd/LjjZJI7XchmhokLTU/DVuroBUZpl2X5HdXDqkqvxuqt8TXe/lU9LJHHG36DROtbcfVePLUzMfyzj/AD6u7WiyXeSG4yn8tNFVU0lO2dx9mtkfGHH2DyfQFWg1wc0OaQQRsEe6nUFUGXIOJ8ystJW5Dccgwq91jLY192l8+stNXJsQ/wAOfmmhkd/B/wAJtzXOZ8xBIFi3+wW7JrFJaLqa0Usjmud8HWzUcm2nY1JC9jx3HoHd/dQDmioiutLjHH1E4SXe932hnZEzu+GmpKmOqnqD9GtbCG793SNHurR2OoN2NnuAlFLVuI2vB/EDxzFjtbkEcNxkuMdXDWX2urY5mspHObtk8z29nd9gK6lWWc/N4ieKmDu4SXWQj36RR6J/VtzR+0KzUpBU9kGP0eX+KiayXqtvX4dTYpBVRU1Dd6uhYJXVkzS8iCRnUekAd9+gVwqlr/i1NlHi+nhqLvfbcIMOgcHWi4y0Tn7rZuzjGR1Dt2BSFbHKeMbRjeF3W/4tlmV45cbfSS1cVbLkFZWQNMbC8edDUyyRvZ27gt3reiPVTrDr5VX3jCwZLdqdtDU19rp66phPyiB8kTXvb39A0kjv9FB79wNZL7RNimzPNnPjcJYmV14kuFMXtO2mSmqOuKUA67Oaf1j1W2wi83Hkrw/MqriaenuFfTVlunlpgREZY5JaZ0rB3IY4xl4GzoEdyrehHsdt965ntzcyv9/vVoxKscXWWxWirkoH1FNshtTVTxlspdKB1Nja5rWtLd9RJI2Fx4suWO0b7pxZlV8tl0gHmR2273SouVvrSO/lysqHvdH1a11xuaW+vfWjncIXiG58G2C3OjFPcrHSR2S50R7PpKqmYIpI3D27t6h9WuaR2Km91utusdjq7zd62GioKOJ09RUzO6WRMaNlxP0AS26NTguW0uc8e2zKKWmkpPi4yJqWU7fTTMcY5YnH3LJGPaT79Khec8VYlDh2SX+CfKYq9lFVVjJI8oubGslDHPBDBUdIAP6IGvbWln8IUlZT8Qsu1xpZKF96uNffW0sw6XU8VVVSzxtcPY+W9hI9iSFJOQZGRcR5TLI8MYy0VbnOJ0ABC/ZU6vB8efG9RUVfDOI1dXPJPPNZaOSSWVxc97jAwlzie5JJ2SVosJrq2o5x5Po6isqJaelq7c2nhkkLmQh1DG5wY09m7JJOvUna3XGTHxcJYdHI0te2x0TXNPqCKdnZR3A/8v3LH+u2z+4Rp+iZVeRfCZ1bcZ/A7zP8dTzVH4nDTdVHT+X0/JLJv5Xu6vlGjvRW6RFFFztw9/Hg53/0rV/uHLolc7cPfx4Od/8AStX+4crOql7TDJso5/ostrqXFuLMeulnjk1S1tTfRBJMzQ7uZ0npO99lBX87czW/mzHONbzxVYG3S7uEr46G9fEOpKUOAfPIAzTWgdRG/XpIHfStblzlC28VYA68z07rhdquQUdotMOzLX1T+zI2gd9bIJI9B9SQDouEuL7liFFcc1zqoZceQclcKm71nYinb6spYvpGwaGh2JA9Q1utTM2wbXlfmCx8WW+3wTW6tvuQ3aUwWmw25vVUVj+29evSwbG3aPr2BUKZyd4jqCm/Gb14fKaS1geZJR22/RTV0TPXYZrUjh/Jbon07LVzmnj/AHUCmOQ9Pz4YW2Iy+nm+cfMDP53R8Rv7b+y6OU4h2pvibnu3ct8o5PYLFb+i0WmjpKmCskLmzPfKzckUkZHyOjeHMI2e7So9lX+cnwP+ilX/AG5VqOEX2STx1c4ux8xGj3Rhxi/L5/T/AA/7fO8zf32tvlX+cnwP+ilX/blVzLwiacm8yRYTklvwvGMZrcwza5xmalsdFI2Ly4gdedPK4ERR7BGyO+vYd1EK/mnmDAoG3zlXhqOlxgOHxV0x+5trX29pOuuWHW3NG+7gQB/UDBcck5Vf43uYpsJpMMnusfwETv3zT1Mb2UnlbYIPJa7bTphdvXfo+pVn1sXihuNsqLfXWThyopamJ0M0MlZcS2RjgQ5pHlehBITJDVqHKMeGEfvxN4pfwH4P4/8AEev+C8jp6/M39OnuqRt3OXLfILZLvxFwyK/GA9zae8X+5NofjgDouiiPfp2Dp2yProghV5ydhGb8W/uZNThOQXCkq6mirIo6ia2yPkjbSvrA9rQ57Wu7Oc0a1rXb0XXFhp7TSYrbKWwtibaoqWJlGIfyCEMAZ0/bp1pTJF7chcucqVOY5bxdieV4jX4fmFtzm2VFTaKuRszJYXPc0TwTN+WWPq7Ej0Pbv6rqjPMudhGEVOQR47eMgljfHFFbrRB508r3uDGgD2GyNn2H1VEeKynsx5O4Pq5SwXkZfTxwDenOpzLCZe3uA4Q/q6vure5e5QpOKMCivklqnvFwrq2K2Wy2QPDHVdVLvoZ1EHpGmuJOj6emyFbzJggc/JPiXZRuvLPD9bBQtb5ht374o31pZ69tN6erX6OifbW1YvFfJti5Z46hyuxRVFMPNfS1dFVDUtJUM11xP+42CD7hwPb0EOjqvFbVRNqG2jiSgDx1Cmqauvlkj/mucxnSSPt2UT8JX4syv5dgvYomXBma1fxUdv6vhmzb/hPK6vm6Oodt99AbSzgdJIiLCiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAtHkeK27J6ixzV81TG6zXOO604gc0B8rGPYGv2DtupHbA0ew7reIgLR0GK2+3Z/esvgmqXV14paSkqI3uaYmtpjMWFgA2CfPfvZPo3Wu+94iDR5Hituyeosc1fNUxus1zjutOIHNAfKxj2Br9g7bqR2wNHsO63iIg0eG4rbsIwW24paZqmait8XlRSVTmukcNk/MWhoJ7+wC86vD7ZU8i0GbRT1dJdKWmkopTTuaGVkDj1COcFp6gx3ztIILST305wMgRNHnPBBVUstNUwxzQSsMckUjQ5r2kaIIPYgjtpVzT8P/AITT/h+K8kZtjtnHaO1UdTTTwwN/kROqIJJI2j2a1+gOwAVlIro0GJYbY8Ks0tvssM5dUTOqaurqpnT1FZM7QdLNK4lz3HQGz6AADQAC+8wxW3ZriFRjl1mqYaWeWGVz6VzWvBimZM3RcCNF0YB7em/T1W8RTQUfx/D7ZjF7vlfaZ6uOG8VIrZqAuaaeGcjUkkTenbTJ2c8bILhsAEuJkCIIdkfHFqvuRfviobxfMcvjomwyXKyVQhfMxu+lssb2vil1s6L2OI3oEBYVFxZTuv1Dd8rzDJcumt8wqaOG7ywMp4Jh+WUQ08UTHPbs9Lnhxae40e6nyK7RrchstLkuI3XHa6SaOludHNRTPgID2skYWOLSQQDpx1sEb9ive12+G02OitVM6R0NJAynjdIQXFrGhoJ0AN6H0WWigjjcKtUHJj84oZ6yhuFRS/C18NO9oguDW/4t0zC07fH3DXtLTolpJGgPe5YrbrpnViyuomqW1tliqoqeONzRG8VAYH9YIJJHlt1oj1O9reImgiIgjWX4JjubU1ILzTzx1lC8y0Nyop301XRPI0XRTMIc3Y9RvTtdwVHJOJaquhNFfeVM+u1sI6X0ElZTUzZW+7Xy08EczgfQ/ONj12rIRXTGLbbdQWez0tptdJFSUNJE2Cnp4W9LIo2jTWtHsAAAq+h4gmoLndamxco5xZoLncJ7nLR0bqB0TJpnl7+jzaR7gNnsC4qy0TRD7BhF4sl9juFZydmF8iY1wNDc/gfJfsa2fJpY37HqNOHcd9r3zrBqXOrZbKae93azz2y4R3OlrLW6ISxzMY9g/wAbHI0jUjuxb9FKUTRXn+DPIf8Ant5E/qtf/wBgqd0FNJRWqlo5q2orpIImROqqnp82ctABe/oa1vUdbPS0DZOgB2WQimjR4bituwjBbbilpmqZqK3xeVFJVOa6Rw2T8xaGgnv7AIzFbczkqbNxNU/iEtsZanRFzfJETJXyhwGt9XU8je9a1291vETRrMhx+z5Xi9bj1/oY623VsZingk9x7EEdw4EAhw7ggEaIX3YrW+yY3RWiS63C6upYhF8bcXtfUTAdgZHNa0OdrQ3rZ1s7OytgiAtNlOK2PMscksmQUZqKVz2yscyR0UkMjDtkscjSHMe09w5pBC3KIK1l4jqa6lNtvHKmf3K0OHRJbpaynhErPdj5oYGTuaR2P8Jsj1JVgW222+zWeltNqo4aOhpImwU9NA0NZExo01rQPQABZSK6C0uXY5Fl+D3PGJ7rcrXDcYDTyVdskbHURsd+boc5rgCRsb0exOtHut0igrK3cRXO0WiltVr5iz6koqSJsEFPCy1NZExo01rQKHsAAApJjOIXTH7pLV13IeU5HG+Ixilu/wAH5bDsHrHkU8bursR3JGie29ESlFdEOzPj2HML/ZL5FlF/x+5WdtQymqbQ6nDi2cMDw4TwyA9o260B7rW/4M8h3/lt5D/qtf8A9gqw0TRoavErdXci23MqueqlrLZRzUlHTuc3yITMWmSUN6d+YQwM31aDdgDuSt8iKDQxYlbYOS6jN6eeqhr6q3st1TAxzRBUMZIXxve3p2ZGdcjQ7Y+V5BB7a29dSR19sqaGZzmx1ETonlh0QHAg6+/de6INVjFgo8UwizYtbpZ5aO00MFvgkqHB0jo4o2xtLyAAXENG9ADfsF4ZHituyeosc1fNUxus1zjutOIHNAfKxj2Br9g7bqR2wNHsO63iICh+LcZ4thmfZVluP081LV5O6CWvpw4eQJIvM+djQNtc4zOLu5BPfQJO5giDxq6Slr6CehrqaGppZ43RTQTMD2SMcNFrmnsQQdEFV5BxA20RfB4hyLmuM2wdmWyjqqepghb/ACYvioZXRt+jWuAHsArJRNEUxPjzH8Qrqu6Uprrleq1oZV3m61DqqrnaDsML3flYPZjA1o+i9suwi2Zg2hnqK25Wu5257pKG62ufyammLgA8NJBa5rgAHMe1zTobHYakqK6IXjXHFJY8sflV2yO+ZPffhjRxV94ki3TQucHOZFHDHHGzqLWlxDeo9I2dDSmiIoCg2R8ai+8gNzG35rk2OXL8PbbJDaTSFksLZHyDqE9PL36nnuCPZTlE0V3NxZcK6B1Ld+WuQLhRvHTLTGpo6USN9wZKamjkAP8ANeFNrNZrXj2P0djslDDQ26iibBT00I02NjRoAf8A791nIrohWQ8YWS95K/JrdcrxjN/kY2Ka6WKpEElQxv5WzMc10U2vYvY4gdgQFr4+IbbXXCnqs1yvJc0bTSNmho73PC2kbI07a809PFFHIQe48xrtHuFYqJtMeFdRUlytlTbrhTx1NJUxOgnglHU2RjgWuaR7ggkKtpeErfVWoY9W53mlXivZhx2etidTviH/ABLpvK+IdFrt0GU7HY7HZWgiS4PljGRRNjjY1jGgNa1o0AB6ABaW0YrbrNl+Q5HSzVL6q+ywS1TJXNLGGGFsLegAAgFrQTsnv9PRbxFBpavHfi86tuTfjl5g+Bp5qf8ADYanpo6jzOn55YtfM9vT8p2NbK3SIgKqcC4yv2LeIzkrPrhV26S25QaI0UUEjzNH5MZa7zQWBo2T26XO/YrWRNHNWW8V+IC5eJqXlC01fG1zpaCN1LYKK/y1pbb4zrcgZEwATO77d1O9e3o3Utoz4tvxKn/EGcL/AAnmN8/yHXPzPL383Tsa6tb1vttXQi17JiuOWeLMU5QpbXR3S6T2XIqKV1TZbvQTiKspZG6LjH7ub+Uub9gdg6KhrOJOfa6m/Bb74kKl1nI8uSW3WCCmrpY/TQnBJjd/OGyp5yXxBh3KtLQfviZX0twtr3SW+62ypdTVVG52tmN42O/SOxBHYKBSeHTKKqA22u8RPJk9qcOh9OKtjZns92mbWzseux3SXjsqK+GvGMfsfiY5gZhcJbjdu/DrTBKXmTzZ44SJyX/pP8xr3OP1f91aN641vty8XGM8pQVdubZ7XZJ7bPA+R4qHSPc8gtaGdJb842S4H17KWYDx9ivGeFQYth9tFFQROMjtuL5JpDrqkkee7nHQ7/QADQACk6Xy50kVFydw3csizih5J46yf96edUMPw3xjohLTXCDe/JqY/cfR3cj6HTS2P1Fg8WuTUTrHecu44xehlHlz3bH6ermrek9iY2y6Y0kb77aQe40r9RT2MR+rxC2XfjR2EZJJPfKCahFBVS1zgZapvQGl73NA+c66uoAaPcaVK2TjrxI8W0AxjjfMcMyXF4Pkt8WXxVDKqij/AEY+uDs9rfTZP6mtHYdFIkpjmC/eHHkbLcwxPkDL83tl5yy23+irahg8ymoaK3wvL309IxrXFz3O6T1P1vpHcdybc5k4vZytgEFogvElmu1urorrarlGzr+Gqot9Di39JunOBH3B9tKw0V9qYpGK3eK64UQs1xv3GVpicPKkvtvgq56oN9OuOB4EfX+s9O/QLM4D4eu/EEOY0VxusFyprten11FOJnyzuhLdAzlzGjzTrbunY2T3VxIppgiIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiLTXjK8cx+82m03m701FW3iY09vglJDqmQa21v37j+tBuUREBERAREQEREBEWPXV1JbLXU3KvnZT0lLE6eaZ/wCWNjQXOcfsACUGQi11hv1nyfHKS/WC4Q3C21bPMgqoTtkjdkbH7QVsUBFpLjmOK2nLbbi9zyC30l5uYc6ioJpmtlqA316WnufQ/r0dei3aAi014yvHMfvNptN5u9NRVt4mNPb4JSQ6pkGttb9+4/rW5QEREBFpqjK8cpc3pMPqLvTR32sp3VVPQOJ8ySJuw54H0HSf6luUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFFoeQsZm5cqeNfiposigoW3L4eWFzGywEhvXG89naJ0QO40foVKVz94lbfWYnWYlz1Y6d8ldh9c2O5RxD5qi2znolafr0l3b2HW4+ysm8JXQKhlo5Sw++2vK7na6yeeixaeemuVSIHeWJIWl0rYzr+E6QP0d+o+q0fMvKFPhPh4rczsM7ausuMEdPYvJ+Y1NRUDUJYP0tA+Zr3DStPZePo+MPBLdcScQ+uix2tnuE2+oy1UkD3yuLvf5iQD9GhJDXvefE9w1Y8cs92rMllkdd6cVVHQ01JJLVPiJIDnRtBLAdHXVreu21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MnYD9QHA6P39VtUQVvbPD/wpaLqy5UHGWOsqWO6mPkpRKGH2Ia/YB+4CsgAAAAaA9giJugiIgIiICIiAiIgIiICIiAiIgIiINBlGD4dm1Eyky7F7Te4mb8sV9KyYx792Fw20/caUfx3g/iLE7xHdsf48sFHXRO64qkUofJE76sc7ZafuNKfortBERQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFG8o5BwbCZqaHL8ts9jkqmudA24VTITKG6BLeojetj+tSREEfxfOsNzaKpkxDKLVfGUpa2d1vqWzCIu30h3STrejr9RWRkmV4zh1nbdcrv1vs1C6UQtqa6dsLC8gkN6nHWyGk6+xULwz+Mryh/0Fn/ANxMsbm+42+0Hjy5XavpqCigzGkdLU1UrYo4x8PUjbnOIAH61c5Rsv8AD1wr/wA6mJf+U4v/AFlOLXdLbe7NTXez11PXUFVGJYKmneHxysPo5rh2IUb/AMK/Fv8AzlYh/wCWab/11Lmua9gexwc0jYIOwQlVD79yzxli1+msmSZ7j1quUIaZaSsro4pGBzQ5u2k7GwQf1FZGO8l8d5dXfBYvnOPXiq0T8NRXCKWXQ9+hrurX30o5gf8Al+5Y/wBdtn9wjUqy3BcWze1GhyO0Q1Jbp0FU0eXUUrx3bJDM3T43g9w5pBThEiWFS3m01t4r7TR3Klnr7f5YrKWOUOkp/Mb1M62ju3qb3G/UKHcS3y83LFrrYsjrDX3bGrtPZKiv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6VIaLw5WF9XTfvuz/kDNaCmkbJHacivHn0bnNO2mSNrG+YQR+kSPqFNeMuN7HxTx/Fh+O1VwqaGKeWobJXvY+XqkcXOG2MaNbPbsrbxhIqjwkua3G+TaZzgJo8+uRfGfVoLYQNj9bT/UVJfFV/E9zf8A1WL+8RLzyLw24td89ueW2HMM2wytu7uu6R4zdfhIq1/u97el3zHZ2R22SdbJKmWScY2HKOEJeLbhXXVtnko4aE1LKgPquiMtLSZJGuBd8g2SDvuls3T+mx4//wAkmLf7IpP9yxSNYVntlPZMdoLNSPkfBQ00dLG6UgvLWNDQXEADeh30As1YUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFp8mxTGszsD7Jldjobxb3uDzTVsIkaHD0cN+jhs6I79ytwiCM4dx3g3H9JPTYXi1ssrKggzGkhDXy69Op35na2dAntsqTIiAiIgIiIChGU8PcXZtf23zKsFst0uQDWmqnpx5jw0aAeRrrAHYdW+3ZTdE0eFFQ0VttsFvt1JBR0lOwRQ09PGI44mAaDWtHYAD2C90RAREQEREBaimxbHaPMq3LKWz0sV7roWU9VXtbqWaNmulrj7gaH9S26ICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICgvK3JtBxTiFDf7jbKm4RVdzgtjYqd7Wua6Xq04k+w6VOlz14xf8AIpj39K7f/wCkV8ZtSuhUWmyvLMewjEazJspukFttdGzrlnlP9TWj1c4nsGjZJ7BRPirPcp5DsdXld3xJuNY7O7qs7auYmsqoPaeVmg2JpGiBsk736aLmfVWKioF3Pea5xfq+j4L4y/fVaqCY08+R3KubRUUkjfVsOxuUD+UD+zRBOyxTna8RcjUPHvL+Bz4NfrlsWupFU2robi4erGTNGmv7jTDv1A2CWg31qauxFWvN/Kj+IMAoMnFugrY6i7U9vmE8pjbFHJ1F0mwD+UN3pQ0cw805bTfjvGHCTK3Gnjro66+XWOimuEftJHCdFjXDu0uPcEFSeN7NX4i53t/i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IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiKu+XOZ8M4bxP8WyarMtZOCKG1U5BqKx49mt9mjtt57D7kgFJosNzmsYXvcGtaNkk6ACrG68/8aUd9fYbLc6zLLyz81uxejkuUjfr1OiBY3Xv1OGlVtjwDlfxCyMyPmqvrcTwqUh9HhFsldBJUs9Qat/Z2j2+U9z6gR+/ROM4njWGWCKyYpY6G0W+P8sFHEIwT9Xa7ud9XHZPuVrJE7QGp5sq7fSOrrnwzydS0DR1OqRbaefob7udHFUOkAH+ipfg3IeGck45+OYXfqa60jXdEnl7bJC7+TJG4BzHfYgKTrizk+rbwX+6G4tk+PaorRmEcUV5pI/lilc+YxSPLR22Nxy/6Qd/KO0mnTtNEWkv+WWTHJaamuFS99dVkikt9LE6epqSPXoiYC4gbG3a6W724gd1lW7RU5ffEfieG5/bsV5AxnKMQdcv/idxusNO6kl7gd5IJpOnRLd7Hy7Bd0hXGCCNg7CtmAiLV5BkdgxSxS3rJbzQ2m3xfnqq2ZsTAfYbJ7k+w9SoNoir7B+ceKeSMgqLHhWZUl0uMDDI+mEUsLy0HRczzGN6wNjZbvSsFLMBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARE9BsoK75o5esPDPGNRk931UVb9w263h2n1c5Gw37NHq53sPqSAaY4B4cvma5M3xBc37uWRXDpqLPbKhmoqCH1jk8s9gdHbG/og9R287bX9o34r/HTU19d/wrAMO2YID3inY1+mA+x86QF536xs6fYLusAAaA0Fu/xmfWexFqMhyvGMRtzK/KsjtVkpXv8tk9yq46dj3a30gvIBOvYL6sGT41lVuNfjGQWu9UjXdLp7dVR1DAfoXMJAP2WGm1XCHjLqHXjxb8bYxRkuqWQ0xAb6h81YWtH6/4MH9oXd6/n7BW0vJ37qfW3qpqI22TGaqSolnkcBHBFb4u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CIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k=",alt:"Hirur\u0161ki \u010Delik"})),React.createElement("div",{className:"li-envelope li-front","aria-hidden":"true"},React.createElement("div",{className:"li-side li-left li-paper"}),React.createElement("div",{className:"li-side li-right li-paper"}),React.createElement("div",{className:"li-pocket-shadow"}),React.createElement("div",{className:"li-pocket li-paper"}),React.createElement("svg",{className:"li-seams",viewBox:"0 0 680 440",fill:"none"},React.createElement("path",{d:"M1 438 309 218Q340 199 371 218L679 438",stroke:"#fffdf7",strokeOpacity:".8"}),React.createElement("path",{d:"M1 435 309 215Q340 196 371 215L679 435",stroke:"#87745b",strokeOpacity:".16"})),React.createElement("div",{className:"li-envelope-imprint"},"Jak kao hirur\u0161ki \u010Delik")),React.createElement("div",{className:"li-stage-footer"},React.createElement("span",{className:"li-scroll-cue"},"Skroluj polako da otvori\u0161",React.createElement("span",{className:"li-cue-line","aria-hidden":"true"},React.createElement("i",null))),React.createElement("button",{className:"li-skip",type:"button"},"Presko\u010Di"),React.createElement("button",{className:"li-replay",type:"button"},"Otvori ponovo"),React.createElement("a",{className:"li-shop",href:"/nakit/prsten-riznica/"},"Pogledaj prsten"))))}window.MJKoverta={mount(n){let t=window.ReactDOM.createRoot(n);return t.render(window.React.createElement(vu,{theme:"light",fontFamily:"Montserrat, Arial, sans-serif"})),t}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
