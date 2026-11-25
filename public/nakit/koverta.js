(()=>{var wu=window.React;var{useEffect:$a,useRef:Sl,useState:bl,useMemo:xg,useCallback:yg,createElement:Ag,Fragment:Rg}=wu;var sc=0,zo=1,rc=2;var Us=1,sa=2,Zn=3,$i=0,_e=1,Xe=2,gn=0,Jn=1,Uo=2,Bo=3,jo=4,ac=5;var Mn=100,oc=101,lc=102,cc=103,uc=104,hc=200,dc=201,fc=202,pc=203,Fo=204,Ho=205,mc=206,gc=207,Mc=208,Ec=209,xc=210,yc=211,Ac=212,Rc=213,Ic=214,br=0,Nr=1,wr=2,Bn=3,Lr=4,Cr=5,Dr=6,Pr=7,ra=0,vc=1,Tc=2,Ri=0,Vo=1,ko=2,Go=3,Bs=4,Wo=5,Xo=6,js=7;var Qo=300,En=301,Kn=302,aa=303,oa=304,jn=1e3,ei=1001,_r=1002,we=1003,Sc=1004;var Fs=1005;var Pe=1006,la=1007;var di=1008;var Qe=1009,qo=1010,Yo=1011,$n=1012,ca=1013,fi=1014,ri=1015,pi=1016,ua=1017,ha=1018,xn=1020,Zo=35902,Jo=35899,Ko=1021,$o=1022,mi=1023,Di=1026,zi=1027,da=1028,fa=1029,tn=1030,pa=1031;var ma=1033,Hs=33776,Vs=33777,ks=33778,Gs=33779,ga=35840,Ma=35841,Ea=35842,xa=35843,ya=36196,Aa=37492,Ra=37496,Ia=37488,va=37489,Ws=37490,Ta=37491,Sa=37808,ba=37809,Na=37810,wa=37811,La=37812,Ca=37813,Da=37814,Pa=37815,_a=37816,Oa=37817,za=37818,Ua=37819,Ba=37820,ja=37821,Fa=36492,Ha=36494,Va=36495,ka=36283,Ga=36284,Xs=36285,Wa=36286;var ps=2300,Or=2301,vr=2302,No=2303,wo=2400,Lo=2401,Co=2402;var bc=3200;var Qs=0,Nc=1,gi="",ve="srgb",ms="srgb-linear",gs="linear",le="srgb";var Tr=7680;var wc=519,Lc=512,Cc=513,Dc=514,tl=515,Pc=516,_c=517,el=518,il=519,Oc=35044,Xa=35048;var nl="300 es",ii=2e3,Fn=2001;function Lu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Cu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Hn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zc(){let n=Hn("canvas");return n.style.display="block",n}var Nl={},Vn=null;function sl(...n){let t="THREE."+n.shift();Vn?Vn("log",t,...n):console.log(t,...n)}function Uc(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ut(...n){n=Uc(n);let t="THREE."+n.shift();if(Vn)Vn("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Bt(...n){n=Uc(n);let t="THREE."+n.shift();if(Vn)Vn("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function hn(...n){let t=n.join(" ");t in Nl||(Nl[t]=!0,Ut(...n))}function Bc(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var jc={[br]:br,[wr]:Dr,[Lr]:Lr,[Bn]:Cr,[Nr]:Nr,[Dr]:wr,[Pr]:Pr,[Cr]:Bn},Ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var to=Math.PI/180,zr=180/Math.PI;function qs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Jt(n,t,e){return Math.max(t,Math.min(e,n))}function Du(n,t){return(n%t+t)%t}function eo(n,t,e){return(1-e)*n+e*t}function Fc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pu(n,t){if(t.constructor===Float32Array)return n;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function _u(n,t){if(t.constructor===Float32Array)return n;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Xt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],M=r[a+2],y=r[a+3];if(f!==y||c!==u||l!==d||h!==M){let p=c*u+l*d+h*M+f*y;p<0&&(u=-u,d=-d,M=-M,y=-y,p=-p);let m=1-o;if(p<.9995){let v=Math.acos(p),S=Math.sin(v);m=Math.sin(m*v)/S,o=Math.sin(o*v)/S,c=c*m+u*o,l=l*m+d*o,h=h*m+M*o,f=f*m+y*o}else{c=c*m+u*o,l=l*m+d*o,h=h*m+M*o,f=f*m+y*o;let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],M=r[a+3];return t[e]=o*M+h*f+c*d-l*u,t[e+1]=c*M+h*u+l*f-o*d,t[e+2]=l*M+h*d+o*u-c*f,t[e+3]=h*M-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),u=c(i/2),d=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*M,this._y=l*d*f-u*h*M,this._z=l*h*M+u*d*f,this._w=l*h*f-u*d*M;break;case"YXZ":this._x=u*h*f+l*d*M,this._y=l*d*f-u*h*M,this._z=l*h*M-u*d*f,this._w=l*h*f+u*d*M;break;case"ZXY":this._x=u*h*f-l*d*M,this._y=l*d*f+u*h*M,this._z=l*h*M+u*d*f,this._w=l*h*f-u*d*M;break;case"ZYX":this._x=u*h*f-l*d*M,this._y=l*d*f+u*h*M,this._z=l*h*M-u*d*f,this._w=l*h*f+u*d*M;break;case"YZX":this._x=u*h*f+l*d*M,this._y=l*d*f+u*h*M,this._z=l*h*M-u*d*f,this._w=l*h*f-u*d*M;break;case"XZY":this._x=u*h*f-l*d*M,this._y=l*d*f-u*h*M,this._z=l*h*M+u*d*f,this._w=l*h*f+u*d*M;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new _,wl=new We,Ft=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],M=i[8],y=s[0],p=s[3],m=s[6],v=s[1],S=s[4],I=s[7],b=s[2],R=s[5],g=s[8];return r[0]=a*y+o*v+c*b,r[3]=a*p+o*S+c*R,r[6]=a*m+o*I+c*g,r[1]=l*y+h*v+f*b,r[4]=l*p+h*S+f*R,r[7]=l*m+h*I+f*g,r[2]=u*y+d*v+M*b,r[5]=u*p+d*S+M*R,r[8]=u*m+d*I+M*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,M=e*f+i*u+s*d;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/M;return t[0]=f*y,t[1]=(s*l-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return hn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(no.makeScale(t,e)),this}rotate(t){return hn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(no.makeRotation(-t)),this}translate(t,e){return hn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},no=new Ft,Ll=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ou(){let n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:t,whitePoint:i,transfer:gs,toXYZ:Ll,fromXYZ:Cl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Ll,fromXYZ:Cl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}}),n}var te=Ou();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Un(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rn,Ur=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Rn===void 0&&(Rn=Hn("canvas")),Rn.width=t.width,Rn.height=t.height;let s=Rn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Rn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hn("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zu=0,kn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function so(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ur.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var Uu=0,ro=new _,je=class n extends Ei{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ei,s=ei,r=Pe,a=di,o=mi,c=Qe,l=n.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=qs(),this.name="",this.source=new kn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Qo;je.DEFAULT_ANISOTROPY=1;var Ee=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],M=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(M-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(M+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,I=(d+1)/2,b=(m+1)/2,R=(h+u)/4,g=(f+y)/4,T=(M+p)/4;return S>I&&S>b?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=g/i):I>b?I<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),i=R/s,r=T/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=g/r,s=T/r),this.set(i,s,r,e),this}let v=Math.sqrt((p-M)*(p-M)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-M)/v,this.y=(f-y)/v,this.z=(u-h)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Br=class extends Ei{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new je({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new kn(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends Br{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ms=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jr=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ce=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,c,l,h,f,u,d,M,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,f,u,d,M,y,p)}set(t,e,i,s,r,a,o,c,l,h,f,u,d,M,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=M,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/In.setFromMatrixColumn(t,0).length(),r=1/In.setFromMatrixColumn(t,1).length(),a=1/In.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,M=o*h,y=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+M*l,e[5]=u-y*l,e[9]=-o*c,e[2]=y-u*l,e[6]=M+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,M=l*h,y=l*f;e[0]=u+y*o,e[4]=M*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-M,e[6]=y+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,M=l*h,y=l*f;e[0]=u-y*o,e[4]=-a*f,e[8]=M+d*o,e[1]=d+M*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,M=o*h,y=o*f;e[0]=c*h,e[4]=M*l-d,e[8]=u*l+y,e[1]=c*f,e[5]=y*l+u,e[9]=d*l-M,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,M=o*c,y=o*l;e[0]=c*h,e[4]=y-u*f,e[8]=M*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+M,e[10]=u-y*f}else if(t.order==="XZY"){let u=a*c,d=a*l,M=o*c,y=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+y,e[5]=a*h,e[9]=d*f-M,e[2]=M*f-d,e[6]=o*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bu,t,ju)}lookAt(t,e,i){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Fi.crossVectors(i,Ze),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Fi.crossVectors(i,Ze)),Fi.normalize(),er.crossVectors(Ze,Fi),s[0]=Fi.x,s[4]=er.x,s[8]=Ze.x,s[1]=Fi.y,s[5]=er.y,s[9]=Ze.y,s[2]=Fi.z,s[6]=er.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],M=i[2],y=i[6],p=i[10],m=i[14],v=i[3],S=i[7],I=i[11],b=i[15],R=s[0],g=s[4],T=s[8],z=s[12],w=s[1],C=s[5],U=s[9],H=s[13],L=s[2],F=s[6],V=s[10],B=s[14],$=s[3],G=s[7],X=s[11],tt=s[15];return r[0]=a*R+o*w+c*L+l*$,r[4]=a*g+o*C+c*F+l*G,r[8]=a*T+o*U+c*V+l*X,r[12]=a*z+o*H+c*B+l*tt,r[1]=h*R+f*w+u*L+d*$,r[5]=h*g+f*C+u*F+d*G,r[9]=h*T+f*U+u*V+d*X,r[13]=h*z+f*H+u*B+d*tt,r[2]=M*R+y*w+p*L+m*$,r[6]=M*g+y*C+p*F+m*G,r[10]=M*T+y*U+p*V+m*X,r[14]=M*z+y*H+p*B+m*tt,r[3]=v*R+S*w+I*L+b*$,r[7]=v*g+S*C+I*F+b*G,r[11]=v*T+S*U+I*V+b*X,r[15]=v*z+S*H+I*B+b*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],M=t[3],y=t[7],p=t[11],m=t[15],v=c*d-l*u,S=o*d-l*f,I=o*u-c*f,b=a*d-l*h,R=a*u-c*h,g=a*f-o*h;return e*(y*v-p*S+m*I)-i*(M*v-p*b+m*R)+s*(M*S-y*b+m*g)-r*(M*I-y*R+p*g)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],M=t[12],y=t[13],p=t[14],m=t[15],v=e*o-i*a,S=e*c-s*a,I=e*l-r*a,b=i*c-s*o,R=i*l-r*o,g=s*l-r*c,T=h*y-f*M,z=h*p-u*M,w=h*m-d*M,C=f*p-u*y,U=f*m-d*y,H=u*m-d*p,L=v*H-S*U+I*C+b*w-R*z+g*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=(o*H-c*U+l*C)*F,t[1]=(s*U-i*H-r*C)*F,t[2]=(y*g-p*R+m*b)*F,t[3]=(u*R-f*g-d*b)*F,t[4]=(c*w-a*H-l*z)*F,t[5]=(e*H-s*w+r*z)*F,t[6]=(p*I-M*g-m*S)*F,t[7]=(h*g-u*I+d*S)*F,t[8]=(a*U-o*w+l*T)*F,t[9]=(i*w-e*U-r*T)*F,t[10]=(M*R-y*I+m*v)*F,t[11]=(f*I-h*R-d*v)*F,t[12]=(o*z-a*C-c*T)*F,t[13]=(e*C-i*z+s*T)*F,t[14]=(y*S-M*b-p*v)*F,t[15]=(h*b-f*S+u*v)*F,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,M=r*f,y=a*h,p=a*f,m=o*f,v=c*l,S=c*h,I=c*f,b=i.x,R=i.y,g=i.z;return s[0]=(1-(y+m))*b,s[1]=(d+I)*b,s[2]=(M-S)*b,s[3]=0,s[4]=(d-I)*R,s[5]=(1-(u+m))*R,s[6]=(p+v)*R,s[7]=0,s[8]=(M+S)*g,s[9]=(p-v)*g,s[10]=(1-(u+y))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=In.set(s[0],s[1],s[2]).length(),o=In.set(s[4],s[5],s[6]).length(),c=In.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let l=1/a,h=1/o,f=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=ii,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),M,y;if(c)M=r/(a-r),y=a*r/(a-r);else if(o===ii)M=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Fn)M=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ii,c=!1){let l=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),M,y;if(c)M=1/(a-r),y=a/(a-r);else if(o===ii)M=-2/(a-r),y=-(a+r)/(a-r);else if(o===Fn)M=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=M,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},In=new _,oi=new ce,Bu=new _(0,0,0),ju=new _(1,1,1),Fi=new _,er=new _,Ze=new _,Dl=new ce,Pl=new We,xi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fu=0,_l=new _,vn=new We,Si=new ce,ir=new _,os=new _,Hu=new _,Vu=new We,Ol=new _(1,0,0),zl=new _(0,1,0),Ul=new _(0,0,1),Bl={type:"added"},ku={type:"removed"},Tn={type:"childadded",child:null},ao={type:"childremoved",child:null},Ce=class n extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new _,e=new xi,i=new We,s=new _(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ft}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vn.setFromAxisAngle(t,e),this.quaternion.multiply(vn),this}rotateOnWorldAxis(t,e){return vn.setFromAxisAngle(t,e),this.quaternion.premultiply(vn),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ir.copy(t):ir.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(os,ir,this.up):Si.lookAt(ir,os,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),vn.setFromRotationMatrix(Si),this.quaternion.premultiply(vn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),Tn.child=t,this.dispatchEvent(Tn),Tn.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ku),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),Tn.child=t,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),M=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),M.length>0&&(i.nodes=M)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new _(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gu={type:"move"},Gn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,M=.005;l.inputState.pinching&&u>d+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},nr={h:0,s:0,l:0};function oo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Vt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Du(t,1),e=Jt(e,0,1),i=Jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=oo(a,r,t+1/3),this.g=oo(a,r,t),this.b=oo(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=ve){function i(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let i=Hc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return te.workingToColorSpace(Be.copy(this),t),Math.round(Jt(Be.r*255,0,255))*65536+Math.round(Jt(Be.g*255,0,255))*256+Math.round(Jt(Be.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Be.copy(this),e);let i=Be.r,s=Be.g,r=Be.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=ve){te.workingToColorSpace(Be.copy(this),t);let e=Be.r,i=Be.g,s=Be.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(nr);let i=eo(Hi.h,nr.h,e),s=eo(Hi.s,nr.s,e),r=eo(Hi.l,nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Vt;Vt.NAMES=Hc;var Pi=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new _,bi=new _,lo=new _,Ni=new _,Sn=new _,bn=new _,jl=new _,co=new _,uo=new _,ho=new _,fo=new Ee,po=new Ee,mo=new Ee,Wi=class n{constructor(t=new _,e=new _,i=new _){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),bi.subVectors(i,e),lo.subVectors(t,e);let a=li.dot(li),o=li.dot(bi),c=li.dot(lo),l=bi.dot(bi),h=bi.dot(lo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,M=(a*h-o*c)*u;return r.set(1-d-M,M,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(a,Ni.y),c.addScaledVector(o,Ni.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,i),mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),bi.subVectors(t,e),li.cross(bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),li.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Sn.subVectors(s,i),bn.subVectors(r,i),co.subVectors(t,i);let c=Sn.dot(co),l=bn.dot(co);if(c<=0&&l<=0)return e.copy(i);uo.subVectors(t,s);let h=Sn.dot(uo),f=bn.dot(uo);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(Sn,a);ho.subVectors(t,r);let d=Sn.dot(ho),M=bn.dot(ho);if(M>=0&&d<=M)return e.copy(r);let y=d*l-c*M;if(y<=0&&l>=0&&M<=0)return o=l/(l-M),e.copy(i).addScaledVector(bn,o);let p=h*M-d*f;if(p<=0&&f-h>=0&&d-M>=0)return jl.subVectors(r,s),o=(f-h)/(f-h+(d-M)),e.copy(s).addScaledVector(jl,o);let m=1/(p+y+u);return a=y*m,o=u*m,e.copy(i).addScaledVector(Sn,a).addScaledVector(bn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yi=class{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),rr.subVectors(this.max,ls),Nn.subVectors(t.a,ls),wn.subVectors(t.b,ls),Ln.subVectors(t.c,ls),Vi.subVectors(wn,Nn),ki.subVectors(Ln,wn),on.subVectors(Nn,Ln);let e=[0,-Vi.z,Vi.y,0,-ki.z,ki.y,0,-on.z,on.y,Vi.z,0,-Vi.x,ki.z,0,-ki.x,on.z,0,-on.x,-Vi.y,Vi.x,0,-ki.y,ki.x,0,-on.y,on.x,0];return!go(e,Nn,wn,Ln,rr)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Nn,wn,Ln,rr))?!1:(ar.crossVectors(Vi,ki),e=[ar.x,ar.y,ar.z],go(e,Nn,wn,Ln,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new _,new _,new _,new _,new _,new _,new _,new _],ci=new _,sr=new yi,Nn=new _,wn=new _,Ln=new _,Vi=new _,ki=new _,on=new _,ls=new _,rr=new _,ar=new _,ln=new _;function go(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ln.fromArray(n,r);let o=s.x*Math.abs(ln.x)+s.y*Math.abs(ln.y)+s.z*Math.abs(ln.z),c=t.dot(ln),l=e.dot(ln),h=i.dot(ln);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ie=new _,or=new Xt,Wu=0,Ve=class extends Ei{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=t!==void 0?rl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_u(t,this.array)}};var xs=class extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ys=class extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ke=class extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xu=new yi,cs=new _,Mo=new _,_i=class{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Xu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(cs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Mo)),this.expandByPoint(cs.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qu=0,ti=new ce,Eo=new Ce,Cn=new _,Je=new yi,us=new yi,Ne=new _,ni=class n extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lu(t)?ys:xs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(Je.min,us.min),Je.expandByPoint(Ne),Ne.addVectors(Je.max,us.max),Je.expandByPoint(Ne)):(Je.expandByPoint(us.min),Je.expandByPoint(us.max))}Je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(Cn.fromBufferAttribute(t,l),Ne.add(Cn)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ve(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let z=0;z<i.count;z++)o[z]=new _,c[z]=new _;let h=new _,f=new _,u=new _,d=new Xt,M=new Xt,y=new Xt,p=new _,m=new _;function v(z,w,C){l[z]=l[w]=l[C]=1,h.fromBufferAttribute(i,z),f.fromBufferAttribute(i,w),u.fromBufferAttribute(i,C),d.fromBufferAttribute(r,z),M.fromBufferAttribute(r,w),y.fromBufferAttribute(r,C),f.sub(h),u.sub(h),M.sub(d),y.sub(d);let U=1/(M.x*y.y-y.x*M.y);isFinite(U)&&(p.copy(f).multiplyScalar(y.y).addScaledVector(u,-M.y).multiplyScalar(U),m.copy(u).multiplyScalar(M.x).addScaledVector(f,-y.x).multiplyScalar(U),o[z].add(p),o[w].add(p),o[C].add(p),c[z].add(m),c[w].add(m),c[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let z=0,w=S.length;z<w;++z){let C=S[z],U=C.start,H=C.count;for(let L=U,F=U+H;L<F;L+=3)v(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let I=new _,b=new _,R=new _,g=new _;function T(z){R.fromBufferAttribute(s,z),g.copy(R);let w=o[z];I.copy(w),I.sub(R.multiplyScalar(R.dot(w))).normalize(),b.crossVectors(g,w);let U=b.dot(c[z])<0?-1:1;a.setXYZW(z,I.x,I.y,I.z,U)}for(let z=0,w=i.count;z<w;++z)l[z]&&T(z);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new _,r=new _,a=new _,o=new _,c=new _,l=new _,h=new _,f=new _;if(t)for(let u=0,d=t.count;u<d;u+=3){let M=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,M),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,M=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?d=c[y]*o.data.stride+o.offset:d=c[y]*h;for(let m=0;m<h;m++)u[M++]=l[d++]}return new Ve(u,h,f)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xo=new _,qu=new _,Yu=new Ft,ui=class{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=xo.subVectors(i,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(xo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(xo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zu=0,Ai=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Jn,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Ho,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Bn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Li=new _,yo=new _,lr=new _,cr=new _,As=class{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yo.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(yo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=cr.dot(this.direction),c=-cr.dot(lr),l=cr.lengthSq(),h=Math.abs(1-a*a),f,u,d,M;if(h>0)if(f=a*c-o,u=a*o-c,M=r*h,f>=0)if(u>=-M)if(u<=M){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-M?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=M?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yo).addScaledVector(lr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,M=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=i.x-a.x,v=i.y-a.y,S=i.z-a.z,I=Math.abs(c),b=Math.abs(l),R=Math.abs(h),g,T,z,w,C,U,H,L,F,V,B,$;if(I>=b&&I>=R?(z=c,U=f,F=M,$=m,c>=0?(g=l,T=h,w=u,C=d,H=y,L=p,V=v,B=S):(g=h,T=l,w=d,C=u,H=p,L=y,V=S,B=v)):b>=R?(z=l,U=u,F=y,$=v,l>=0?(g=h,T=c,w=d,C=f,H=p,L=M,V=S,B=m):(g=c,T=h,w=f,C=d,H=M,L=p,V=m,B=S)):(z=h,U=d,F=p,$=S,h>=0?(g=c,T=l,w=f,C=u,H=M,L=y,V=m,B=v):(g=l,T=c,w=u,C=f,H=y,L=M,V=v,B=m)),z===0)return null;let G=g/z,X=T/z,tt=1/z,ft=w-G*U,St=C-X*U,W=H-G*F,ut=L-X*F,It=V-G*$,Pt=B-X*$,gt=It*ut-Pt*W,ct=ft*Pt-St*It,Zt=W*St-ut*ft;if(s){if(gt<0||ct<0||Zt<0)return null}else if((gt<0||ct<0||Zt<0)&&(gt>0||ct>0||Zt>0))return null;let st=gt+ct+Zt;if(st===0)return null;let yt=tt*(gt*U+ct*F+Zt*$);return(st>0?yt<0:yt>0)?null:this.at(yt/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xi=class extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fl=new ce,cn=new As,ur=new _i,Hl=new _,hr=new _,dr=new _,fr=new _,Ao=new _,pr=new _,Vl=new _,mr=new _,de=class extends Ce{constructor(t=new ni,e=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Ao.fromBufferAttribute(f,t),a?pr.addScaledVector(Ao,h):pr.addScaledVector(Ao.sub(e),h))}e.add(pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),cn.copy(t.ray).recast(t.near),!(ur.containsPoint(cn.origin)===!1&&(cn.intersectSphere(ur,Hl)===null||cn.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(Fl.copy(r).invert(),cn.copy(t.ray).applyMatrix4(Fl),!(i.boundingBox!==null&&cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cn)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,y=u.length;M<y;M++){let p=u[M],m=a[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let I=v,b=S;I<b;I+=3){let R=o.getX(I),g=o.getX(I+1),T=o.getX(I+2);s=gr(this,m,t,i,l,h,f,R,g,T),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let M=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=M,m=y;p<m;p+=3){let v=o.getX(p),S=o.getX(p+1),I=o.getX(p+2);s=gr(this,a,t,i,l,h,f,v,S,I),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,y=u.length;M<y;M++){let p=u[M],m=a[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let I=v,b=S;I<b;I+=3){let R=I,g=I+1,T=I+2;s=gr(this,m,t,i,l,h,f,R,g,T),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let M=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=M,m=y;p<m;p+=3){let v=p,S=p+1,I=p+2;s=gr(this,a,t,i,l,h,f,v,S,I),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ju(n,t,e,i,s,r,a,o){let c;if(t.side===_e?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===$i,o),c===null)return null;mr.copy(o),mr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(mr);return l<e.near||l>e.far?null:{distance:l,point:mr.clone(),object:n}}function gr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,hr),n.getVertexPosition(c,dr),n.getVertexPosition(l,fr);let h=Ju(n,t,e,i,hr,dr,fr,Vl);if(h){let f=new _;Wi.getBarycoord(Vl,hr,dr,fr,f),s&&(h.uv=Wi.getInterpolatedAttribute(s,o,c,l,f,new Xt)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,o,c,l,f,new Xt)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,c,l,f,new _),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new _,materialIndex:0};Wi.getNormal(hr,dr,fr,u.normal),h.face=u,h.barycoord=f}return h}var Rs=class extends je{constructor(t=null,e=1,i=1,s,r,a,o,c,l=we,h=we,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Is=class extends Ve{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Dn=new ce,kl=new ce,Mr=[],Gl=new yi,Ku=new ce,hs=new de,ds=new _i,vs=class extends de{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ku)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),Gl.copy(t.boundingBox).applyMatrix4(Dn),this.boundingBox.union(Gl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),ds.copy(t.boundingSphere).applyMatrix4(Dn),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(i),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dn),kl.multiplyMatrices(i,Dn),hs.matrixWorld=kl,hs.raycast(t,Mr);for(let a=0,o=Mr.length;a<o;a++){let c=Mr[a];c.instanceId=r,c.object=this,e.push(c)}Mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(s*this.count),s,this.count,da,ri));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},un=new _i,$u=new Xt(.5,.5),Er=new _,Qi=class{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],M=r[8],y=r[9],p=r[10],m=r[11],v=r[12],S=r[13],I=r[14],b=r[15];if(s[0].setComponents(l-a,d-h,m-M,b-v).normalize(),s[1].setComponents(l+a,d+h,m+M,b+v).normalize(),s[2].setComponents(l+o,d+f,m+y,b+S).normalize(),s[3].setComponents(l-o,d-f,m-y,b-S).normalize(),i)s[4].setComponents(c,u,p,I).normalize(),s[5].setComponents(l-c,d-u,m-p,b-I).normalize();else if(s[4].setComponents(l-c,d-u,m-p,b-I).normalize(),e===ii)s[5].setComponents(l+c,d+u,m+p,b+I).normalize();else if(e===Fn)s[5].setComponents(c,u,p,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(t){un.center.set(0,0,0);let e=$u.distanceTo(t.center);return un.radius=.7071067811865476+e,un.applyMatrix4(t.matrixWorld),this.intersectsSphere(un)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wl=new ce,Fr=class n{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Wl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Qi),i[s].setFromProjectionMatrix(Wl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Qi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Wn=class extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Hr=new _,Vr=new _,Xl=new ce,fs=new As,xr=new _i,Ro=new _,Ql=new _,kr=class extends Ce{constructor(t=new ni,e=new Wn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),Vr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Hr.distanceTo(Vr);t.setAttribute("lineDistance",new Ke(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;Xl.copy(s).invert(),fs.copy(t.ray).applyMatrix4(Xl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),M=Math.min(h.count,a.start+a.count);for(let y=d,p=M-1;y<p;y+=l){let m=h.getX(y),v=h.getX(y+1),S=yr(this,t,fs,c,m,v,y);S&&e.push(S)}if(this.isLineLoop){let y=h.getX(M-1),p=h.getX(d),m=yr(this,t,fs,c,y,p,M-1);m&&e.push(m)}}else{let d=Math.max(0,a.start),M=Math.min(u.count,a.start+a.count);for(let y=d,p=M-1;y<p;y+=l){let m=yr(this,t,fs,c,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=yr(this,t,fs,c,M-1,d,M-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yr(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),Vr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Vr,Ro,Ql)>i)return;Ro.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ro);if(!(l<t.near||l>t.far))return{distance:l,point:Ql.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ts=class extends kr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Ss=class extends je{constructor(t=[],e=En,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dn=class extends je{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends je{constructor(t,e,i=fi,s,r,a,o=we,c=we,l,h=Di,f=1){if(h!==Di&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},bs=class extends Oi{constructor(t,e=fi,i=En,s,r,a=we,o=we,c,l=Di){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ns=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qi=class n extends ni{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;M("z","y","x",-1,-1,i,e,t,a,r,0),M("z","y","x",1,-1,i,e,-t,a,r,1),M("x","z","y",1,1,t,i,e,s,a,2),M("x","z","y",1,-1,t,i,-e,s,a,3),M("x","y","z",1,-1,t,e,i,s,r,4),M("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(f,2));function M(y,p,m,v,S,I,b,R,g,T,z){let w=I/g,C=b/T,U=I/2,H=b/2,L=R/2,F=g+1,V=T+1,B=0,$=0,G=new _;for(let X=0;X<V;X++){let tt=X*C-H;for(let ft=0;ft<F;ft++){let St=ft*w-U;G[y]=St*v,G[p]=tt*S,G[m]=L,l.push(G.x,G.y,G.z),G[y]=0,G[p]=0,G[m]=R>0?1:-1,h.push(G.x,G.y,G.z),f.push(ft/g),f.push(1-X/T),B+=1}}for(let X=0;X<T;X++)for(let tt=0;tt<g;tt++){let ft=u+tt+F*X,St=u+tt+F*(X+1),W=u+(tt+1)+F*(X+1),ut=u+(tt+1)+F*X;c.push(ft,St,ut),c.push(St,W,ut),$+=6}o.addGroup(d,$,z),d+=$,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Xt:new _);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new _,s=[],r=[],a=[],o=new _,c=new ce;for(let d=0;d<=t;d++){let M=d/t;s[d]=this.getTangentAt(M,new _)}r[0]=new _,a[0]=new _;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let M=Math.acos(Jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,M))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let M=1;M<=t;M++)r[M].applyMatrix4(c.makeRotationAxis(s[M],d*M)),a[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function al(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var ql=new _,Yl=new _,Io=new al,vo=new al,To=new al,ws=class extends fn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new _){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Yl.subVectors(s[0],s[1]).add(s[0]),l=Yl);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ql.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ql),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,M=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),M<1e-4&&(M=y),p<1e-4&&(p=y),Io.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,M,y,p),vo.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,M,y,p),To.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,M,y,p)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),vo.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),To.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(Io.calc(c),vo.calc(c),To.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new _().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function th(n,t){let e=1-n;return e*e*e*t}function eh(n,t){let e=1-n;return 3*e*e*n*t}function ih(n,t){return 3*(1-n)*n*n*t}function nh(n,t){return n*n*n*t}function So(n,t,e,i,s){return th(n,t)+eh(n,e)+ih(n,i)+nh(n,s)}var Xn=class extends fn{constructor(t=new _,e=new _,i=new _,s=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(So(t,s.x,r.x,a.x,o.x),So(t,s.y,r.y,a.y,o.y),So(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}};var si=class n extends ni{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],M=[],y=[],p=[];for(let m=0;m<h;m++){let v=m*u-a;for(let S=0;S<l;S++){let I=S*f-r;M.push(I,-v,0),y.push(0,0,1),p.push(S/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){let S=v+l*m,I=v+l*(m+1),b=v+1+l*(m+1),R=v+1+l*m;d.push(S,I,R),d.push(I,b,R)}this.setIndex(d),this.setAttribute("position",new Ke(M,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function yn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Zl(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Zl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Fe(n){let t={};for(let e=0;e<n.length;e++){let i=yn(n[e]);for(let s in i)t[s]=i[s]}return t}function Zl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sh(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ol(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Vc={clone:yn,merge:Fe},rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yn(t.uniforms),this.uniformsGroups=sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new _().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ce().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gr=class extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ls=class extends pn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){hn('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Cs=class extends Ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=ra,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wr=class extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xr=class extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pn(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ar(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Yi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lo:r=t,o=2*e-i;break;case Co:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Lo:a=t,c=2*i-e;break;case Co:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,M=(i-e)/(s-e),y=M*M,p=y*M,m=-u*p+2*u*y-u*M,v=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*M+1,S=(-1-d)*p+(1.5+d)*y+.5*M,I=d*p-d*y;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+v*a[l+b]+S*a[c+b]+I*a[f+b];return r}},qr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},Yr=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zr=class extends Yi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let M=(i-e)/(s-e),y=1-M;for(let p=0;p!==o;++p)r[p]=a[l+p]*y+a[c+p]*M;return r}let u=o*2,d=t-1;for(let M=0;M!==o;++M){let y=a[l+M],p=a[c+M],m=d*u+M*2,v=f[m],S=f[m+1],I=t*u+M*2,b=h[I],R=h[I+1],g=lh(i,e,v,b,s);r[M]=kc(g,y,S,R,p)}return r}};function kc(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function oh(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function lh(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=kc(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=oh(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var $e=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pn(e,this.TimeBufferType),this.values=Pn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pn(t.times,Array),values:Pn(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ar(t.settings)&&(i.settings={inTangents:Pn(t.settings.inTangents,Array),outTangents:Pn(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ps:e=this.InterpolantFactoryMethodDiscrete;break;case Or:e=this.InterpolantFactoryMethodLinear;break;case vr:e=this.InterpolantFactoryMethodSmooth;break;case No:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ut("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return vr;case this.InterpolantFactoryMethodBezier:return No}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Ar(this.settings)&&(Jl(this.settings.inTangents,t),Jl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ar(this.settings)&&(Kl(this.settings.inTangents,t),Kl(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Bt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Bt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Cu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===vr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*i,u=f-i,d=f+i;for(let M=0;M!==i;++M){let y=e[f+M];if(y!==e[u+M]||y!==e[d+M]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ar(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Jl(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Kl(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=Or;var Zi=class extends $e{constructor(t,e,i){super(t,e,i)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ps;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Jr.prototype.ValueTypeName="color";var Kr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Kr.prototype.ValueTypeName="number";var $r=class extends Yi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)We.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ds=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends $e{constructor(t,e,i){super(t,e,i)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ps;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};ta.prototype.ValueTypeName="vector";var Sr={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&($l(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!$l(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function $l(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ea=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],M=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gc=new ea,Qn=class{constructor(t){this.manager=t!==void 0?t:Gc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var _n=new WeakMap,ia=class extends Qn{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Sr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=_n.get(a);f===void 0&&(f=[],_n.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=Hn("img");function c(){h(),e&&e(this);let f=_n.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}_n.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),Sr.remove(`image:${t}`);let u=_n.get(this)||[];for(let d=0;d<u.length;d++){let M=u[d];M.onError&&M.onError(f)}_n.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Sr.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Ps=class extends Qn{constructor(t){super(t)}load(t,e,i,s){let r=new je,a=new ia(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},_s=class extends Ce{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var bo=new ce,tc=new _,ec=new _,Os=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(tc),ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ec),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(bo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Fn||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rr=new _,Ir=new We,Mi=new _,mn=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Rr,Ir,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Ir,Mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Rr,Ir,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Ir,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new _,ic=new Xt,nc=new Xt,Ge=class extends mn{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,ic,nc),e.subVectors(nc,ic)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Do=class extends Os{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0}},zs=class extends _s{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Do}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ki=class extends mn{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Po=class extends Os{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qn=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Po}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var On=-90,zn=1,Yn=class extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(On,zn,t,e);s.layers=this.layers,this.add(s);let r=new Ge(On,zn,t,e);r.layers=this.layers,this.add(r);let a=new Ge(On,zn,t,e);a.layers=this.layers,this.add(a);let o=new Ge(On,zn,t,e);o.layers=this.layers,this.add(o);let c=new Ge(On,zn,t,e);c.layers=this.layers,this.add(c);let l=new Ge(On,zn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}},na=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ll="\\[\\]\\.:\\/",ch=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",uh="[^"+ll.replace("\\.","")+"]",hh=/((?:WC+[\/:])*)/.source.replace("WC",cl),dh=/(WCOD+)?/.source.replace("WCOD",uh),fh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),ph=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),mh=new RegExp("^"+hh+dh+fh+ph+"$"),gh=["material","materials","bones","map"],_o=class{constructor(t,e,i){let s=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ch,"")}static parseTrackName(t){let e=mh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);gh.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=_o;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vg=new Float32Array(1);var Oo=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function ul(n,t,e,i){let s=Mh(i);switch(e){case Ko:return n*t;case da:return n*t/s.components*s.byteLength;case fa:return n*t/s.components*s.byteLength;case tn:return n*t*2/s.components*s.byteLength;case pa:return n*t*2/s.components*s.byteLength;case $o:return n*t*3/s.components*s.byteLength;case mi:return n*t*4/s.components*s.byteLength;case ma:return n*t*4/s.components*s.byteLength;case Hs:case Vs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ks:case Gs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ma:case xa:return Math.max(n,16)*Math.max(t,8)/4;case ga:case Ea:return Math.max(n,8)*Math.max(t,8)/2;case ya:case Aa:case Ia:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ra:case Ws:case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Ha:case Va:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ka:case Ga:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xs:case Wa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mh(n){switch(n){case Qe:case qo:return{byteLength:1,components:1};case $n:case Yo:case pi:return{byteLength:2,components:1};case ua:case ha:return{byteLength:2,components:4};case fi:case ca:case ri:return{byteLength:4,components:1};case Zo:case Jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function du(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function xh(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,M)=>d.start-M.start);let u=0;for(let d=1;d<f.length;d++){let M=f[u],y=f[d];y.start<=M.start+M.count+1?M.count=Math.max(M.count,y.start+y.count-M.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,M=f.length;d<M;d++){let y=f[d];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var yh=`#ifdef USE_ALPHAHASH
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
#endif`,Rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Th=`#ifdef USE_ALPHATEST
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
#endif`,Lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ch=`vec3 objectNormal = vec3( normal );
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
#endif`,Vh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
} // validated`,Gh=`vec3 transformedNormal = objectNormal;
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
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
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
}`,Ed=`
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
#endif`,Rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
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
#endif`,Ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
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
#endif`,Vd=`#ifdef USE_NORMALMAP
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
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
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
#endif`,Qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`uniform float backgroundBlurriness;
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
}`,Tf=`uniform samplerCube tCube;
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
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
}`,Vf=`#define PHONG
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
}`,Gf=`#define STANDARD
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
}`,Wf=`#define STANDARD
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
}`,Qf=`#define TOON
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
}`,qf=`uniform float size;
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
}`,qt={alphahash_fragment:yh,alphahash_pars_fragment:Ah,alphamap_fragment:Rh,alphamap_pars_fragment:Ih,alphatest_fragment:vh,alphatest_pars_fragment:Th,aomap_fragment:Sh,aomap_pars_fragment:bh,batching_pars_vertex:Nh,batching_vertex:wh,begin_vertex:Lh,beginnormal_vertex:Ch,bsdfs:Dh,iridescence_fragment:Ph,bumpmap_pars_fragment:_h,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:zh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Bh,color_fragment:jh,color_pars_fragment:Fh,color_pars_vertex:Hh,color_vertex:Vh,common:kh,defaultnormal_vertex:Gh,displacementmap_pars_vertex:Wh,displacementmap_vertex:Xh,emissivemap_fragment:Qh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:Zh,envmap_fragment:Jh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:$h,envmap_pars_vertex:td,envmap_physical_pars_fragment:hd,envmap_vertex:ed,fog_vertex:id,fog_pars_vertex:nd,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:ud,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:Md,lights_fragment_begin:Ed,lights_fragment_maps:xd,lights_fragment_end:yd,lightprobes_pars_fragment:Ad,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:Td,map_fragment:Sd,map_pars_fragment:bd,map_particle_fragment:Nd,map_particle_pars_fragment:wd,metalnessmap_fragment:Ld,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Dd,morphcolor_vertex:Pd,morphnormal_vertex:_d,morphtarget_pars_vertex:Od,morphtarget_vertex:zd,normal_fragment_begin:Ud,normal_fragment_maps:Bd,normal_pars_fragment:jd,normal_pars_vertex:Fd,normal_vertex:Hd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:Qd,packing:qd,premultiplied_alpha_fragment:Yd,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:Kd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:uf,specularmap_pars_fragment:hf,tonemapping_fragment:df,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:Mf,uv_vertex:Ef,worldpos_vertex:xf,background_vert:yf,background_frag:Af,backgroundCube_vert:Rf,backgroundCube_frag:If,cube_vert:vf,cube_frag:Tf,depth_vert:Sf,depth_frag:bf,distance_vert:Nf,distance_frag:wf,equirect_vert:Lf,equirect_frag:Cf,linedashed_vert:Df,linedashed_frag:Pf,meshbasic_vert:_f,meshbasic_frag:Of,meshlambert_vert:zf,meshlambert_frag:Uf,meshmatcap_vert:Bf,meshmatcap_frag:jf,meshnormal_vert:Ff,meshnormal_frag:Hf,meshphong_vert:Vf,meshphong_frag:kf,meshphysical_vert:Gf,meshphysical_frag:Wf,meshtoon_vert:Xf,meshtoon_frag:Qf,points_vert:qf,points_frag:Yf,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:Kf,sprite_frag:$f},vt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},vi={basic:{uniforms:Fe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Fe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Fe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Fe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Fe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Fe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Fe([vt.points,vt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Fe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Fe([vt.common,vt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Fe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Fe([vt.sprite,vt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Fe([vt.common,vt.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Fe([vt.lights,vt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};vi.physical={uniforms:Fe([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Qa={r:0,b:0,g:0},tp=new ce,fu=new Ft;fu.set(-1,0,0,0,1,0,0,0,1);function ep(n,t,e,i,s,r){let a=new Vt(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let I=v.backgroundBlurriness>0;S=t.get(S,I)}return S}function M(v){let S=!1,I=d(v);I===null?p(a,o):I&&I.isColor&&(p(I,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,S){let I=d(S);I&&I.isCubeTexture?(l===void 0&&(l=new de(new qi(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:yn(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:_e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,R,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=I,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(S.backgroundRotation)).transpose(),I.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fu),l.material.toneMapped=te.getTransfer(I.colorSpace)!==le,(h!==I||f!==I.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=I,f=I.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new de(new si(2,2),new ke({name:"BackgroundMaterial",uniforms:yn(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=te.getTransfer(I.colorSpace)!==le,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||f!==I.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,f=I.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,S){v.getRGB(Qa,ol(n)),e.buffers.color.setClear(Qa.r,Qa.g,Qa.b,S,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:M,addToRenderList:y,dispose:m}}function ip(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(C,U,H,L,F){let V=!1,B=f(C,L,H,U);r!==B&&(r=B,l(r.object)),V=d(C,L,H,F),V&&M(C,L,H,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,I(C,U,H,L),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function f(C,U,H,L){let F=L.wireframe===!0,V=i[U.id];V===void 0&&(V={},i[U.id]=V);let B=C.isInstancedMesh===!0?C.id:0,$=V[B];$===void 0&&($={},V[B]=$);let G=$[H.id];G===void 0&&(G={},$[H.id]=G);let X=G[F];return X===void 0&&(X=u(c()),G[F]=X),X}function u(C){let U=[],H=[],L=[];for(let F=0;F<e;F++)U[F]=0,H[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:L,object:C,attributes:{},index:null}}function d(C,U,H,L){let F=r.attributes,V=U.attributes,B=0,$=H.getAttributes();for(let G in $)if($[G].location>=0){let tt=F[G],ft=V[G];if(ft===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor)),tt===void 0||tt.attribute!==ft||ft&&tt.data!==ft.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function M(C,U,H,L){let F={},V=U.attributes,B=0,$=H.getAttributes();for(let G in $)if($[G].location>=0){let tt=V[G];tt===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor));let ft={};ft.attribute=tt,tt&&tt.data&&(ft.data=tt.data),F[G]=ft,B++}r.attributes=F,r.attributesNum=B,r.index=L}function y(){let C=r.newAttributes;for(let U=0,H=C.length;U<H;U++)C[U]=0}function p(C){m(C,0)}function m(C,U){let H=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;H[C]=1,L[C]===0&&(n.enableVertexAttribArray(C),L[C]=1),F[C]!==U&&(n.vertexAttribDivisor(C,U),F[C]=U)}function v(){let C=r.newAttributes,U=r.enabledAttributes;for(let H=0,L=U.length;H<L;H++)U[H]!==C[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function S(C,U,H,L,F,V,B){B===!0?n.vertexAttribIPointer(C,U,H,F,V):n.vertexAttribPointer(C,U,H,L,F,V)}function I(C,U,H,L){y();let F=L.attributes,V=H.getAttributes(),B=U.defaultAttributeValues;for(let $ in V){let G=V[$];if(G.location>=0){let X=F[$];if(X===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),X!==void 0){let tt=X.normalized,ft=X.itemSize,St=t.get(X);if(St===void 0)continue;let W=St.buffer,ut=St.type,It=St.bytesPerElement,Pt=ut===n.INT||ut===n.UNSIGNED_INT||X.gpuType===ca;if(X.isInterleavedBufferAttribute){let gt=X.data,ct=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Zt=X.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)m(G.location+st,gt.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let st=0;st<G.locationSize;st++)p(G.location+st);n.bindBuffer(n.ARRAY_BUFFER,W);for(let st=0;st<G.locationSize;st++)S(G.location+st,ft/G.locationSize,ut,tt,ct*It,(Zt+ft/G.locationSize*st)*It,Pt)}else{if(X.isInstancedBufferAttribute){for(let gt=0;gt<G.locationSize;gt++)m(G.location+gt,X.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let gt=0;gt<G.locationSize;gt++)p(G.location+gt);n.bindBuffer(n.ARRAY_BUFFER,W);for(let gt=0;gt<G.locationSize;gt++)S(G.location+gt,ft/G.locationSize,ut,tt,ft*It,ft/G.locationSize*gt*It,Pt)}}else if(B!==void 0){let tt=B[$];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(G.location,tt);break;case 3:n.vertexAttrib3fv(G.location,tt);break;case 4:n.vertexAttrib4fv(G.location,tt);break;default:n.vertexAttrib1fv(G.location,tt)}}}}v()}function b(){z();for(let C in i){let U=i[C];for(let H in U){let L=U[H];for(let F in L){let V=L[F];for(let B in V)h(V[B].object),delete V[B];delete L[F]}}delete i[C]}}function R(C){if(i[C.id]===void 0)return;let U=i[C.id];for(let H in U){let L=U[H];for(let F in L){let V=L[F];for(let B in V)h(V[B].object),delete V[B];delete L[F]}}delete i[C.id]}function g(C){for(let U in i){let H=i[U];for(let L in H){let F=H[L];if(F[C.id]===void 0)continue;let V=F[C.id];for(let B in V)h(V[B].object),delete V[B];delete F[C.id]}}}function T(C){for(let U in i){let H=i[U],L=C.isInstancedMesh===!0?C.id:0,F=H[L];if(F!==void 0){for(let V in F){let B=F[V];for(let $ in B)h(B[$].object),delete B[$];delete F[V]}delete H[L],Object.keys(H).length===0&&delete i[U]}}}function z(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfObject:T,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:p,disableUnusedAttributes:v}}function np(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==mi&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let T=g===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Qe&&g!==ri&&!T&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ut("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),I=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:M,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:I,maxSamples:b,samples:R}}function rp(n){let t=this,e=null,i=0,s=!1,r=!1,a=new ui,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let M=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||M===null||M.length===0||r&&!p)r?h(null):l();else{let v=r?0:i,S=v*4,I=m.clippingState||null;c.value=I,I=h(M,u,S,d);for(let b=0;b!==S;++b)I[b]=e[b];m.clippingState=I,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,M){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=c.value,M!==!0||p===null){let m=d+y*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,I=d;S!==y;++S,I+=4)a.copy(f[S]).applyMatrix4(v,o),a.normal.toArray(p,I),p[I+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Js=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ss(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qi(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_e,blending:gn});r.uniforms.tEquirect.value=e;let a=new de(s,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=Pe),new Yn(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Wc=256,ap=3,op=20,pu=256,mu=16,lp=3,cp=new _,up=new Vt,es=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yn(1,10,null),this._boxMesh=new de(new qi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=cp}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,M=c.autoClearStencil,y=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(t.background=c.getClearColor(up));let p=new Yn(i,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=M,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Wc,Fc(t))}_fromTexture(t,e){t.mapping===En||t.mapping===Kn?this._setSize(t.image.length===0?Wc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Xc(t,!1,!1),i=Math.log2(t)-ap;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Xc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===En||t.mapping===Kn?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=hp(),this._integrationMaterial=dp());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/mu);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-lp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(pu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=fp());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Xc(n,t,e){return new Js(n,{minFilter:di,generateMipmaps:t,type:pi,colorSpace:ms,depthBuffer:e})}function $s(n,t,e){return new ke({name:n,uniforms:t,vertexShader:qt.cube_vert,fragmentShader:e,side:_e,blending:gn,depthTest:!1,depthWrite:!1})}function hp(){return $s("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function qc(){return $s("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function pp(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===aa||d===oa)if(t.has(u)){let M=t.get(u).texture;return o(M,u.mapping)}else{let M=u.image;if(M&&M.height>0){let y=new Js(M.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,M=d===aa||d===oa,y=d===En||d===Kn;if(M||y){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new es(n)),p=M?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return M&&v&&v.height>0||y&&v&&c(v)?(i===null&&(i=new es(n)),p=M?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===aa?u.mapping=En:d===oa&&(u.mapping=Kn),u}function c(u){let d=0,M=6;for(let y=0;y<M;y++)u[y]!==void 0&&d++;return d===M}function l(u){let d=u.target;d.removeEventListener("dispose",l);let M=t.get(d);M!==void 0&&(t.delete(d),M.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let M=e.get(d);M!==void 0&&(e.delete(d),M.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function mp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&hn("WebGLRenderer: "+i+" extension not supported."),s}}}function gp(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(M=>delete s[M]);function o(M){c(M.target)}function c(M){M.index!==null&&t.remove(M.index);for(let p in M.attributes)t.remove(M.attributes[p]);M.removeEventListener("dispose",o),delete s[M.id],a.unregister(M);let y=r.get(M);y&&(t.remove(y),r.delete(M)),i.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,e.memory.geometries--}function l(M,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(M){let y=M.attributes;for(let p in y)t.update(y[p],n.ARRAY_BUFFER)}function f(M){let y=M.index,p=M.attributes.position,m=0;if(p===void 0)return;let v=y!==null?y.array.length:p.array.length/3-1,S=p.count>=65535?ys:xs,I=new S(Math.ceil(v/3)*6,1),b=I.array;if(y!==null){let g=y.array;m=y.version;for(let T=0,z=0;T<v;T+=3){let w=g[T+0],C=g[T+1],U=g[T+2];b[z++]=w,b[z++]=C,b[z++]=C,b[z++]=U,b[z++]=U,b[z++]=w}}else{m=p.version;for(let g=0,T=0;g<v;g+=3){let z=g+0,w=g+1,C=g+2;b[T++]=z,b[T++]=w,b[T++]=w,b[T++]=C,b[T++]=C,b[T++]=z}}I.version=m;let R=r.get(M);R&&t.remove(R),r.set(M,I)}function u(M){let y=r.get(M);if(y){let p=M.index;p!==null&&y.version<p.version&&f(M)}else f(M);return r.get(M)}function d(){for(let M in s){let y=s[M].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function Mp(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=u[p];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ep(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xp(n,t,e){let i=new WeakMap,s=new Ee;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let z=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",z)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;d===!0&&(S=1),M===!0&&(S=2),y===!0&&(S=3);let I=o.attributes.position.count*S,b=1;I>t.maxTextureSize&&(b=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);let R=new Float32Array(I*b*4*f),g=new Ms(R,I,b,f);g.type=ri,g.needsUpdate=!0;let T=S*4;for(let w=0;w<f;w++){let C=p[w],U=m[w],H=v[w],L=I*b*4*w;for(let F=0;F<C.count;F++){let V=F*T;d===!0&&(s.fromBufferAttribute(C,F),R[L+V+0]=s.x,R[L+V+1]=s.y,R[L+V+2]=s.z,R[L+V+3]=0),M===!0&&(s.fromBufferAttribute(U,F),R[L+V+4]=s.x,R[L+V+5]=s.y,R[L+V+6]=s.z,R[L+V+7]=0),y===!0&&(s.fromBufferAttribute(H,F),R[L+V+8]=s.x,R[L+V+9]=s.y,R[L+V+10]=s.z,R[L+V+11]=H.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new Xt(I,b)},i.set(o,u),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let M=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function yp(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ap={[Vo]:"LINEAR_TONE_MAPPING",[ko]:"REINHARD_TONE_MAPPING",[Go]:"CINEON_TONE_MAPPING",[Bs]:"ACES_FILMIC_TONE_MAPPING",[Xo]:"AGX_TONE_MAPPING",[js]:"NEUTRAL_TONE_MAPPING",[Wo]:"CUSTOM_TONE_MAPPING"};function Rp(n,t,e,i,s,r){let a=new Le(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new ni;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let f=new Gr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new de(h,f),d=new Ki(-1,1,1,-1,0,1),M=null,y=null,p=!1,m,v=null,S=[],I=!1;this.setSize=function(b,R){a.setSize(b,R),o!==null&&o.setSize(b,R),c!==null&&c.setSize(b,R);for(let g=0;g<S.length;g++){let T=S[g];T.setSize&&T.setSize(b,R)}},this.setEffects=function(b){S=b,I=S.length>0&&S[0].isRenderPass===!0;let R=a.width,g=a.height;S.length>0&&o===null&&(o=new Le(R,g,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Le(R,g,{type:pi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&S.some(z=>z.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&l===null&&(l=new Oi(R,g),r===!0&&(l.format=zi,l.type=xn)),a.dispose(),a.depthTexture=T?l:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let z=0;z<S.length;z++){let w=S[z];w.setSize&&w.setSize(R,g),T&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(l)}},this.begin=function(b,R){if(p||b.toneMapping===Ri&&S.length===0)return!1;if(v=R,R!==null){let g=R.width,T=R.height;(a.width!==g||a.height!==T)&&this.setSize(g,T)}return I===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Ri,!0},this.hasRenderPass=function(){return I},this.end=function(b,R){b.toneMapping=m,p=!0;let g=a,T=o;for(let z=0;z<S.length;z++){let w=S[z];w.enabled!==!1&&(w.render(b,T,g,R),w.needsSwap!==!1&&(g=T,T=T===o?c:o))}if(M!==b.outputColorSpace||y!==b.toneMapping){M=b.outputColorSpace,y=b.toneMapping,f.defines={},te.getTransfer(M)===le&&(f.defines.SRGB_TRANSFER="");let z=Ap[y];z&&(f.defines[z]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,b.setRenderTarget(v),b.render(u,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var gu=new je,Mu=new Oi(1,1),Eu=new bs(1),xu=new Ms,yu=new jr,Au=new Ss,Yc=[],Zc=[],Jc=new Float32Array(16),Kc=new Float32Array(9),$c=new Float32Array(4);function is(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Yc[s];if(r===void 0&&(r=new Float32Array(s),Yc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ya(n,t){let e=Zc[t];e===void 0&&(e=new Int32Array(t),Zc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ip(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function Tp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function Sp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function bp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Te(e,i))return;$c.set(i),n.uniformMatrix2fv(this.addr,!1,$c),Se(e,i)}}function Np(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Te(e,i))return;Kc.set(i),n.uniformMatrix3fv(this.addr,!1,Kc),Se(e,i)}}function wp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Te(e,i))return;Jc.set(i),n.uniformMatrix4fv(this.addr,!1,Jc),Se(e,i)}}function Lp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Cp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function Dp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function Pp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function _p(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Op(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function zp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function Up(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function Za(n){return n.version===0&&(n.compareFunction=il,n.needsUpdate=!0),n}function Bp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Za(Mu):r=gu,e.setTexture2D(t||r,s)}function jp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||yu,s)}function Fp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Za(Eu):r=Au,e.setTextureCube(t||r,s)}function Hp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xu,s)}function Vp(n){switch(n){case 5126:return Ip;case 35664:return vp;case 35665:return Tp;case 35666:return Sp;case 35674:return bp;case 35675:return Np;case 35676:return wp;case 5124:case 35670:return Lp;case 35667:case 35671:return Cp;case 35668:case 35672:return Dp;case 35669:case 35673:return Pp;case 5125:return _p;case 36294:return Op;case 36295:return zp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Hp}}function kp(n,t){n.uniform1fv(this.addr,t)}function Gp(n,t){let e=is(t,this.size,2);n.uniform2fv(this.addr,e)}function Wp(n,t){let e=is(t,this.size,3);n.uniform3fv(this.addr,e)}function Xp(n,t){let e=is(t,this.size,4);n.uniform4fv(this.addr,e)}function Qp(n,t){let e=is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qp(n,t){let e=is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Yp(n,t){let e=is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zp(n,t){n.uniform1iv(this.addr,t)}function Jp(n,t){n.uniform2iv(this.addr,t)}function Kp(n,t){n.uniform3iv(this.addr,t)}function $p(n,t){n.uniform4iv(this.addr,t)}function tm(n,t){n.uniform1uiv(this.addr,t)}function em(n,t){n.uniform2uiv(this.addr,t)}function im(n,t){n.uniform3uiv(this.addr,t)}function nm(n,t){n.uniform4uiv(this.addr,t)}function sm(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Za(Mu):a=gu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function rm(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yu,r[a])}function am(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Za(Eu):a=Au;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function om(n,t,e){let i=this.cache,s=t.length,r=Ya(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Se(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xu,r[a])}function lm(n){switch(n){case 5126:return kp;case 35664:return Gp;case 35665:return Wp;case 35666:return Xp;case 35674:return Qp;case 35675:return qp;case 35676:return Yp;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return $p;case 5125:return tm;case 36294:return em;case 36295:return im;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}var fl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Vp(e.type)}},pl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}},ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},hl=/(\w+)(\])?(\[|\.)?/g;function tu(n,t){n.seq.push(t),n.map[t.id]=t}function cm(n,t,e){let i=n.name,s=i.length;for(hl.lastIndex=0;;){let r=hl.exec(i),a=hl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){tu(e,l===void 0?new fl(o,n,t):new pl(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new ml(o),tu(e,f)),e=f}}}var ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);cm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function eu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var um=37297,hm=0;function dm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var iu=new Ft;function fm(n){te._getMatrix(iu,te.workingColorSpace,n);let t=`mat3( ${iu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case gs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dm(n.getShaderSource(t),o)}else return r}function pm(n,t){let e=fm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var mm={[Vo]:"Linear",[ko]:"Reinhard",[Go]:"Cineon",[Bs]:"ACESFilmic",[Xo]:"AgX",[js]:"Neutral",[Wo]:"Custom"};function gm(n,t){let e=mm[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qa=new _;function Mm(){te.getLuminanceCoefficients(qa);let n=qa.x.toFixed(4),t=qa.y.toFixed(4),e=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Em(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function xm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ym(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Zs(n){return n!==""}function su(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ru(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(Am,Rm)}function Rm(n,t){let e=qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return gl(e)}var Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(n){return n.replace(Im,vm)}function vm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ou(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Tm={[Us]:"SHADOWMAP_TYPE_PCF",[Zn]:"SHADOWMAP_TYPE_VSM"};function Sm(n){return Tm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bm={[Kn]:"ENVMAP_MODE_REFRACTION"};function Nm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":bm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wm={[ra]:"ENVMAP_BLENDING_MULTIPLY",[vc]:"ENVMAP_BLENDING_MIX",[Tc]:"ENVMAP_BLENDING_ADD"};function Lm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wm[n.combine]||"ENVMAP_BLENDING_NONE"}function Cm(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Sm(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Nm(e),f=Lm(e),u=Em(e),d=xm(r),M=s.createProgram(),y,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Zs).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(y=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?qt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,pm("linearToOutputTexel",e.outputColorSpace),Mm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),a=gl(a),a=su(a,e),a=ru(a,e),o=gl(o),o=su(o,e),o=ru(o,e),a=au(a),o=au(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+y+a,S=m+p+o,I=eu(s,s.VERTEX_SHADER,v),b=eu(s,s.FRAGMENT_SHADER,S);s.attachShader(M,I),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(w){if(n.debug.checkShaderErrors){let C=s.getProgramInfoLog(M)||"",U=s.getShaderInfoLog(I)||"",H=s.getShaderInfoLog(b)||"",L=C.trim(),F=U.trim(),V=H.trim(),B=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,I,b);else{let G=nu(s,I,"vertex"),X=nu(s,b,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+G+`
`+X)}else L!==""?Ut("WebGLProgram: Program Info Log:",L):(F===""||V==="")&&($=!1);$&&(w.diagnostics={runnable:B,programLog:L,vertexShader:{log:F,prefix:y},fragmentShader:{log:V,prefix:p}})}s.deleteShader(I),s.deleteShader(b),g=new ts(s,M),T=ym(s,M)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(M,um)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=b,this}var Dm=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new El(t),e.set(t,i)),i}},El=class{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}};function Pm(n){return n===tn||n===Ws||n===Xs}function _m(n,t,e,i,s,r){let a=new Es,o=new Ml,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return c.add(g),g===0?"uv":`uv${g}`}function M(g,T,z,w,C,U){let H=w.fog,L=C.geometry,F=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?w.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=t.get(g.envMap||F,V),$=u[g.type],G=i.precision;g.precision!==null&&(G=i.getMaxPrecision(g.precision),G!==g.precision&&Ut("WebGLProgram.getParameters:",g.precision,"not supported, using",G,"instead."));let X=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,tt=X!==void 0?X.length:0,ft=0;L.morphAttributes.position!==void 0&&(ft=1),L.morphAttributes.normal!==void 0&&(ft=2),L.morphAttributes.color!==void 0&&(ft=3);let St,W,ut,It;if($){let At=vi[$];St=At.vertexShader,W=At.fragmentShader}else{St=g.vertexShader,W=g.fragmentShader;let At=o.getVertexShaderStage(g),re=o.getFragmentShaderStage(g);o.update(g,At,re),ut=At.id,It=re.id}let Pt=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),ct=C.isInstancedMesh===!0,Zt=C.isBatchedMesh===!0,st=!!g.map,yt=!!g.matcap,Rt=!!B,mt=Rt&&B.isPMREMTexture===!0,Ot=!!g.aoMap,zt=!!g.lightMap,ne=!!g.bumpMap&&g.wireframe===!1,Qt=!!g.normalMap,me=!!g.displacementMap,jt=!!g.emissiveMap,ye=!!g.metalnessMap,ee=!!g.roughnessMap,ie=g.anisotropy>0,P=g.clearcoat>0,ge=g.diffuseRoughness>0,ae=g.dispersion>0,xt=g.retroreflectivity>0,it=g.iridescence>0,Wt=g.sheen>0,pt=g.transmission>0,bt=ie&&!!g.anisotropyMap,A=P&&!!g.clearcoatMap,E=P&&!!g.clearcoatNormalMap,O=P&&!!g.clearcoatRoughnessMap,et=ge&&!!g.diffuseRoughnessMap,Z=it&&!!g.iridescenceMap,rt=it&&!!g.iridescenceThicknessMap,lt=Wt&&!!g.sheenColorMap,Y=Wt&&!!g.sheenRoughnessMap,J=!!g.specularMap,dt=!!g.specularColorMap,N=!!g.specularIntensityMap,K=pt&&!!g.transmissionMap,q=pt&&!!g.thicknessMap,ot=!!g.gradientMap,at=!!g.alphaMap,ht=g.alphaTest>0,wt=!!g.alphaHash,Ht=!!g.extensions,nt=Ri;g.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(nt=n.toneMapping);let Lt=mt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,kt={shaderID:$,shaderType:g.type,shaderName:g.name,vertexShader:St,fragmentShader:W,defines:g.defines,customVertexShaderID:ut,customFragmentShaderID:It,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:G,batching:Zt,batchingColor:Zt&&C._colorsTexture!==null,instancing:ct,instancingColor:ct&&C.instanceColor!==null,instancingMorph:ct&&C.morphTexture!==null,outputColorSpace:Pt===null?n.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:st,matcap:yt,envMap:Rt,envMapMode:Rt&&B.mapping,envMapPMREM:mt,envMapMaxLod:mt?Lt.length-1:null,envMapSize:mt?Lt[0].width:null,aoMap:Ot,lightMap:zt,bumpMap:ne,normalMap:Qt,displacementMap:me,emissiveMap:jt,normalMapObjectSpace:Qt&&g.normalMapType===Nc,normalMapTangentSpace:Qt&&g.normalMapType===Qs,packedNormalMap:Qt&&g.normalMapType===Qs&&Pm(g.normalMap.format),metalnessMap:ye,roughnessMap:ee,anisotropy:ie,anisotropyMap:bt,clearcoat:P,clearcoatMap:A,clearcoatNormalMap:E,clearcoatRoughnessMap:O,diffuseRoughness:ge,diffuseRoughnessMap:et,dispersion:ae,retroreflection:xt,iridescence:it,iridescenceMap:Z,iridescenceThicknessMap:rt,sheen:Wt,sheenColorMap:lt,sheenRoughnessMap:Y,specularMap:J,specularColorMap:dt,specularIntensityMap:N,transmission:pt,transmissionMap:K,thicknessMap:q,gradientMap:ot,opaque:g.transparent===!1&&g.blending===Jn&&g.alphaToCoverage===!1,alphaMap:at,alphaTest:ht,alphaHash:wt,combine:g.combine,mapUv:st&&d(g.map.channel),aoMapUv:Ot&&d(g.aoMap.channel),lightMapUv:zt&&d(g.lightMap.channel),bumpMapUv:ne&&d(g.bumpMap.channel),normalMapUv:Qt&&d(g.normalMap.channel),displacementMapUv:me&&d(g.displacementMap.channel),emissiveMapUv:jt&&d(g.emissiveMap.channel),metalnessMapUv:ye&&d(g.metalnessMap.channel),roughnessMapUv:ee&&d(g.roughnessMap.channel),anisotropyMapUv:bt&&d(g.anisotropyMap.channel),clearcoatMapUv:A&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:Z&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(g.sheenRoughnessMap.channel),specularMapUv:J&&d(g.specularMap.channel),specularColorMapUv:dt&&d(g.specularColorMap.channel),specularIntensityMapUv:N&&d(g.specularIntensityMap.channel),transmissionMapUv:K&&d(g.transmissionMap.channel),thicknessMapUv:q&&d(g.thicknessMap.channel),alphaMapUv:at&&d(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Qt||ie),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(st||at),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&Qt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ft,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:st&&g.map.isVideoTexture===!0&&te.getTransfer(g.map.colorSpace)===le,decodeVideoTextureEmissive:jt&&g.emissiveMap.isVideoTexture===!0&&te.getTransfer(g.emissiveMap.colorSpace)===le,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Xe,flipSided:g.side===_e,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ht&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&g.extensions.multiDraw===!0||Zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function y(g){let T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(let z in g.defines)T.push(z),T.push(g.defines[z]);return g.isRawShaderMaterial===!1&&(p(T,g),m(T,g),T.push(n.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function p(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapPMREM),g.push(T.envMapMaxLod),g.push(T.envMapSize),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.diffuseRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.numSunLights),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numSunLightShadows),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.numLightProbeGrids),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function m(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){let T=u[g.type],z;if(T){let w=vi[T];z=Vc.clone(w.uniforms)}else z=g.uniforms;return z}function S(g,T){let z=h.get(T);return z!==void 0?++z.usedTimes:(z=new Cm(n,T,g,s),l.push(z),h.set(T,z)),z}function I(g){if(--g.usedTimes===0){let T=l.indexOf(g);l[T]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function b(g){o.remove(g)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:v,acquireProgram:S,releaseProgram:I,releaseShaderCache:b,programs:l,dispose:R}}function Om(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function zm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function lu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,M,y,p,m){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:M,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},n[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=M,v.materialVariant=a(u),v.groupOrder=y,v.renderOrder=u.renderOrder,v.z=p,v.group=m),t++,v}function c(u,d,M,y,p,m,v){v.reversedDepth===!0&&(p=-p);let S=o(u,d,M,y,p,m);M.transmission>0?i.push(S):M.transparent===!0?s.push(S):e.push(S)}function l(u,d,M,y,p,m){let v=o(u,d,M,y,p,m);M.transmission>0?i.unshift(v):M.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||zm),i.length>1&&i.sort(d||lu),s.length>1&&s.sort(d||lu)}function f(){for(let u=t,d=n.length;u<d;u++){let M=n[u];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Um(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new cu,n.set(i,[a])):s>=r.length?(a=new cu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Bm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new _,color:new Vt};break;case"SpotLight":e={position:new _,direction:new _,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new _,halfWidth:new _,halfHeight:new _};break}return n[t.id]=e,e}}}function jm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Fm=0;function Hm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Vm(n){let t=new Bm,e=jm(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new _);let s=new _,r=new ce,a=new ce;function o(l){let h=0,f=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,M=0,y=0,p=0,m=0,v=0,S=0,I=0,b=0,R=0,g=0,T=0,z=0,w=0;l.sort(Hm);for(let U=0,H=l.length;U<H;U++){let L=l[U],F=L.color,V=L.intensity,B=L.distance,$=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===tn?$=L.shadow.map.texture:$=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*V,f+=F.g*V,u+=F.b*V;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],V);w++}else if(L.isSunLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let X=L.shadow,tt=e.get(L);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[M]=tt,i.sunShadowMap[M]=$;let ft=X.getViewportCount();for(let St=0;St<ft;St++)i.sunShadowMatrix[y+St]=X.getMatrix(St),i.sunShadowCascade[y+St]=X._cascadeData[St];y+=ft,M++}i.sun[d]=G,d++}else if(L.isDirectionalLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let X=L.shadow,tt=e.get(L);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,i.directionalShadow[p]=tt,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=L.shadow.matrix,b++}i.directional[p]=G,p++}else if(L.isSpotLight){let G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(F).multiplyScalar(V),G.distance=B,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[v]=G;let X=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,X.updateMatrices(L),L.castShadow&&z++),i.spotLightMatrix[v]=X.matrix,L.castShadow){let tt=e.get(L);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,i.spotShadow[v]=tt,i.spotShadowMap[v]=$,g++}v++}else if(L.isRectAreaLight){let G=t.get(L);G.color.copy(F).multiplyScalar(V),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=G,S++}else if(L.isPointLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let X=L.shadow,tt=e.get(L);tt.shadowIntensity=X.intensity,tt.shadowBias=X.bias,tt.shadowNormalBias=X.normalBias,tt.shadowRadius=X.radius,tt.shadowMapSize=X.mapSize,tt.shadowCameraNear=X.camera.near,tt.shadowCameraFar=X.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=G,m++}else if(L.isHemisphereLight){let G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(V),G.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[I]=G,I++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let C=i.hash;(C.sunLength!==d||C.directionalLength!==p||C.pointLength!==m||C.spotLength!==v||C.rectAreaLength!==S||C.hemiLength!==I||C.numSunShadows!==M||C.numDirectionalShadows!==b||C.numPointShadows!==R||C.numSpotShadows!==g||C.numSpotMaps!==T||C.numLightProbes!==w)&&(i.sun.length=d,i.directional.length=p,i.spot.length=v,i.rectArea.length=S,i.point.length=m,i.hemi.length=I,i.sunShadow.length=M,i.sunShadowMap.length=M,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+T-z,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=w,C.sunLength=d,C.directionalLength=p,C.pointLength=m,C.spotLength=v,C.rectAreaLength=S,C.hemiLength=I,C.numSunShadows=M,C.numDirectionalShadows=b,C.numPointShadows=R,C.numSpotShadows=g,C.numSpotMaps=T,C.numLightProbes=w,i.version=Fm++)}function c(l,h){let f=0,u=0,d=0,M=0,y=0,p=0,m=h.matrixWorldInverse;for(let v=0,S=l.length;v<S;v++){let I=l[v];if(I.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(I.matrixWorld),b.direction.transformDirection(m),f++}else if(I.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(I.isSpotLight){let b=i.spot[M];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),M++}else if(I.isRectAreaLight){let b=i.rectArea[y];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(I.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(I.width*.5,0,0),b.halfHeight.set(0,I.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(I.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(m),d++}else if(I.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(I.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function uu(n){let t=new Vm(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function c(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function km(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new uu(n),t.set(s,[o])):r>=a.length?(o=new uu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`,Xm=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)],Qm=[new _(0,-1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1),new _(0,-1,0),new _(0,-1,0)],hu=new ce,Ys=new _,dl=new _;function qm(n,t,e){let i=new Qi,s=new Xt,r=new Xt,a=new Ee,o=new Wr,c=new Xr,l={},h=e.maxTextureSize,f={[$i]:_e,[_e]:$i,[Xe]:Xe},u=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Gm,fragmentShader:Wm}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let M=new ni;M.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new de(M,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let m=this.type;this.render=function(R,g,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===sa&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let z=n.getRenderTarget(),w=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(gn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=m!==this.type;H&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=R.length;L<F;L++){let V=R[L],B=V.shadow;if(B===void 0){Ut("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let $=B.getFrameExtents();s.multiply($),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,B.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=G,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Zn){if(V.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Le(s.x,s.y,{format:tn,type:pi,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new Oi(s.x,s.y,ri),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=Di,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=we,B.map.depthTexture.magFilter=we}else V.isPointLight?(B.map=new Js(s.x),B.map.depthTexture=new bs(s.x,fi)):(B.map=new Le(s.x,s.y),B.map.depthTexture=new Oi(s.x,s.y,fi)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=Di,this.type===Us?(B.map.depthTexture.compareFunction=G?el:tl,B.map.depthTexture.minFilter=Pe,B.map.depthTexture.magFilter=Pe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=we,B.map.depthTexture.magFilter=we);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let X=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();V.isPointLight!==!0&&B.updateMatrices(V,T);let tt=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:T.layers;for(let ft=0;ft<X;ft++){let St=B.getCamera(ft);if(V.isPointLight){let W=B.camera,ut=B.matrix,It=V.distance||W.far;It!==W.far&&(W.far=It,W.updateProjectionMatrix()),Ys.setFromMatrixPosition(V.matrixWorld),W.position.copy(Ys),dl.copy(W.position),dl.add(Xm[ft]),W.up.copy(Qm[ft]),W.lookAt(dl),W.updateMatrixWorld(),ut.makeTranslation(-Ys.x,-Ys.y,-Ys.z),hu.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),B._frustum.setFromProjectionMatrix(hu,W.coordinateSystem,W.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,ft),n.clear();else{ft===0&&(n.setRenderTarget(B.map),n.clear());let W=B.getViewport(ft);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),U.viewport(a)}i=B.getFrustum(ft),I(g,T,St,V,tt,this.type)}B.isPointLightShadow!==!0&&this.type===Zn&&v(B,T),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(z,w,C)};function v(R,g){let T=t.update(y);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null?R.mapPass=new Le(s.x,s.y,{format:tn,type:pi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(g,null,T,u,y,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(g,null,T,d,y,null)}function S(R,g,T,z){let w=null,C=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)w=C;else if(w=T.isPointLight===!0?c:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let U=w.uuid,H=g.uuid,L=l[U];L===void 0&&(L={},l[U]=L);let F=L[H];F===void 0&&(F=w.clone(),L[H]=F,g.addEventListener("dispose",b)),w=F}if(w.visible=g.visible,w.wireframe=g.wireframe,z===Zn?w.side=g.shadowSide!==null?g.shadowSide:g.side:w.side=g.shadowSide!==null?g.shadowSide:f[g.side],w.alphaMap=g.alphaMap,w.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,w.map=g.map,w.clipShadows=g.clipShadows,w.clippingPlanes=g.clippingPlanes,w.clipIntersection=g.clipIntersection,w.displacementMap=g.displacementMap,w.displacementScale=g.displacementScale,w.displacementBias=g.displacementBias,w.wireframeLinewidth=g.wireframeLinewidth,w.linewidth=g.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let U=n.properties.get(w);U.light=T}return w}function I(R,g,T,z,w,C){if(R.visible===!1)return;if(R.layers.test(w)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&C===Zn)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);let L=t.update(R),F=R.material;if(Array.isArray(F)){let V=L.groups;for(let B=0,$=V.length;B<$;B++){let G=V[B],X=F[G.materialIndex];if(X&&X.visible){let tt=S(R,X,z,C);R.onBeforeShadow(n,R,g,T,L,tt,G),n.renderBufferDirect(T,null,L,tt,R,G),R.onAfterShadow(n,R,g,T,L,tt,G)}}}else if(F.visible){let V=S(R,F,z,C);R.onBeforeShadow(n,R,g,T,L,V,null),n.renderBufferDirect(T,null,L,V,R,null),R.onAfterShadow(n,R,g,T,L,V,null)}}let H=R.children;for(let L=0,F=H.length;L<F;L++)I(H[L],g,T,z,w,C)}function b(R){R.target.removeEventListener("dispose",b);for(let T in l){let z=l[T],w=R.target.uuid;w in z&&(z[w].dispose(),delete z[w])}}}function Ym(n,t){function e(){let N=!1,K=new Ee,q=null,ot=new Ee(0,0,0,0);return{setMask:function(at){q!==at&&!N&&(n.colorMask(at,at,at,at),q=at)},setLocked:function(at){N=at},setClear:function(at,ht,wt,Ht,nt){nt===!0&&(at*=Ht,ht*=Ht,wt*=Ht),K.set(at,ht,wt,Ht),ot.equals(K)===!1&&(n.clearColor(at,ht,wt,Ht),ot.copy(K))},reset:function(){N=!1,q=null,ot.set(-1,0,0,0)}}}function i(){let N=!1,K=!1,q=null,ot=null,at=null;return{setReversed:function(ht){if(K!==ht){let wt=t.get("EXT_clip_control");ht?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),K=ht;let Ht=at;at=null,this.setClear(Ht)}},getReversed:function(){return K},setTest:function(ht){ht?gt(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(ht){q!==ht&&!N&&(n.depthMask(ht),q=ht)},setFunc:function(ht){if(K&&(ht=jc[ht]),ot!==ht){switch(ht){case br:n.depthFunc(n.NEVER);break;case Nr:n.depthFunc(n.ALWAYS);break;case wr:n.depthFunc(n.LESS);break;case Bn:n.depthFunc(n.LEQUAL);break;case Lr:n.depthFunc(n.EQUAL);break;case Cr:n.depthFunc(n.GEQUAL);break;case Dr:n.depthFunc(n.GREATER);break;case Pr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=ht}},setLocked:function(ht){N=ht},setClear:function(ht){at!==ht&&(at=ht,K&&(ht=1-ht),n.clearDepth(ht))},reset:function(){N=!1,q=null,ot=null,at=null,K=!1}}}function s(){let N=!1,K=null,q=null,ot=null,at=null,ht=null,wt=null,Ht=null,nt=null;return{setTest:function(Lt){N||(Lt?gt(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(Lt){K!==Lt&&!N&&(n.stencilMask(Lt),K=Lt)},setFunc:function(Lt,kt,At){(q!==Lt||ot!==kt||at!==At)&&(n.stencilFunc(Lt,kt,At),q=Lt,ot=kt,at=At)},setOp:function(Lt,kt,At){(ht!==Lt||wt!==kt||Ht!==At)&&(n.stencilOp(Lt,kt,At),ht=Lt,wt=kt,Ht=At)},setLocked:function(Lt){N=Lt},setClear:function(Lt){nt!==Lt&&(n.clearStencil(Lt),nt=Lt)},reset:function(){N=!1,K=null,q=null,ot=null,at=null,ht=null,wt=null,Ht=null,nt=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,M=[],y=null,p=!1,m=null,v=null,S=null,I=null,b=null,R=null,g=null,T=new Vt(0,0,0),z=0,w=!1,C=null,U=null,H=null,L=null,F=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,$=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=$>=2);let X=null,tt={},ft=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),W=new Ee().fromArray(ft),ut=new Ee().fromArray(St);function It(N,K,q,ot){let at=new Uint8Array(4),ht=n.createTexture();n.bindTexture(N,ht),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<q;wt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,at):n.texImage2D(K+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,at);return ht}let Pt={};Pt[n.TEXTURE_2D]=It(n.TEXTURE_2D,n.TEXTURE_2D,1),Pt[n.TEXTURE_CUBE_MAP]=It(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[n.TEXTURE_2D_ARRAY]=It(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pt[n.TEXTURE_3D]=It(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),a.setFunc(Bn),ne(!1),Qt(zo),gt(n.CULL_FACE),Ot(gn);function gt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function ct(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Zt(N,K){return u[N]!==K?(n.bindFramebuffer(N,K),u[N]=K,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=K),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=K),!0):!1}function st(N,K){let q=M,ot=!1;if(N){q=d.get(K),q===void 0&&(q=[],d.set(K,q));let at=N.textures;if(q.length!==at.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,wt=at.length;ht<wt;ht++)q[ht]=n.COLOR_ATTACHMENT0+ht;q.length=at.length,ot=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ot=!0);ot&&n.drawBuffers(q)}function yt(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let Rt={[Mn]:n.FUNC_ADD,[oc]:n.FUNC_SUBTRACT,[lc]:n.FUNC_REVERSE_SUBTRACT};Rt[cc]=n.MIN,Rt[uc]=n.MAX;let mt={[hc]:n.ZERO,[dc]:n.ONE,[fc]:n.SRC_COLOR,[Fo]:n.SRC_ALPHA,[xc]:n.SRC_ALPHA_SATURATE,[Mc]:n.DST_COLOR,[mc]:n.DST_ALPHA,[pc]:n.ONE_MINUS_SRC_COLOR,[Ho]:n.ONE_MINUS_SRC_ALPHA,[Ec]:n.ONE_MINUS_DST_COLOR,[gc]:n.ONE_MINUS_DST_ALPHA,[yc]:n.CONSTANT_COLOR,[Ac]:n.ONE_MINUS_CONSTANT_COLOR,[Rc]:n.CONSTANT_ALPHA,[Ic]:n.ONE_MINUS_CONSTANT_ALPHA};function Ot(N,K,q,ot,at,ht,wt,Ht,nt,Lt){if(N===gn){p===!0&&(ct(n.BLEND),p=!1);return}if(p===!1&&(gt(n.BLEND),p=!0),N!==ac){if(N!==m||Lt!==w){if((v!==Mn||b!==Mn)&&(n.blendEquation(n.FUNC_ADD),v=Mn,b=Mn),Lt)switch(N){case Jn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFunc(n.ONE,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",N);break}else switch(N){case Jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bo:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",N);break}S=null,I=null,R=null,g=null,T.set(0,0,0),z=0,m=N,w=Lt}return}at=at||K,ht=ht||q,wt=wt||ot,(K!==v||at!==b)&&(n.blendEquationSeparate(Rt[K],Rt[at]),v=K,b=at),(q!==S||ot!==I||ht!==R||wt!==g)&&(n.blendFuncSeparate(mt[q],mt[ot],mt[ht],mt[wt]),S=q,I=ot,R=ht,g=wt),(Ht.equals(T)===!1||nt!==z)&&(n.blendColor(Ht.r,Ht.g,Ht.b,nt),T.copy(Ht),z=nt),m=N,w=!1}function zt(N,K){N.side===Xe?ct(n.CULL_FACE):gt(n.CULL_FACE);let q=N.side===_e;K&&(q=!q),ne(q),N.blending===Jn&&N.transparent===!1?Ot(gn):Ot(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ot=N.stencilWrite;o.setTest(ot),ot&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),jt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(N){C!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),C=N)}function Qt(N){N!==sc?(gt(n.CULL_FACE),N!==U&&(N===zo?n.cullFace(n.BACK):N===rc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),U=N}function me(N){N!==H&&(B&&n.lineWidth(N),H=N)}function jt(N,K,q){N?(gt(n.POLYGON_OFFSET_FILL),(L!==K||F!==q)&&(L=K,F=q,a.getReversed()&&(K=-K,q=-q),n.polygonOffset(K,q))):ct(n.POLYGON_OFFSET_FILL)}function ye(N){N?gt(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function ee(N){N===void 0&&(N=n.TEXTURE0+V-1),X!==N&&(n.activeTexture(N),X=N)}function ie(N,K,q){q===void 0&&(X===null?q=n.TEXTURE0+V-1:q=X);let ot=tt[q];ot===void 0&&(ot={type:void 0,texture:void 0},tt[q]=ot),(ot.type!==N||ot.texture!==K)&&(X!==q&&(n.activeTexture(q),X=q),n.bindTexture(N,K||Pt[N]),ot.type=N,ot.texture=K)}function P(){let N=tt[X];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ge(){try{n.compressedTexImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function ae(){try{n.compressedTexImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function xt(){try{n.texSubImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function it(){try{n.texSubImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function Wt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function pt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function bt(){try{n.texStorage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function A(){try{n.texStorage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function E(){try{n.texImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function O(){try{n.texImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function et(N){return f[N]!==void 0?f[N]:n.getParameter(N)}function Z(N,K){f[N]!==K&&(n.pixelStorei(N,K),f[N]=K)}function rt(N){W.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),W.copy(N))}function lt(N){ut.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ut.copy(N))}function Y(N,K){let q=l.get(K);q===void 0&&(q=new WeakMap,l.set(K,q));let ot=q.get(N);ot===void 0&&(ot=n.getUniformBlockIndex(K,N.name),n.uniformBlockBinding(K,ot,ot),q.set(N,ot))}function J(N,K,q){let at=l.get(K).get(N);c[at]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,at,q),c[at]=q)}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},X=null,tt={},u={},c={},d=new WeakMap,M=[],y=null,p=!1,m=null,v=null,S=null,I=null,b=null,R=null,g=null,T=new Vt(0,0,0),z=0,w=!1,C=null,U=null,H=null,L=null,F=null,W.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:ct,bindFramebuffer:Zt,drawBuffers:st,useProgram:yt,setBlending:Ot,setMaterial:zt,setFlipSided:ne,setCullFace:Qt,setLineWidth:me,setPolygonOffset:jt,setScissorTest:ye,activeTexture:ee,bindTexture:ie,unbindTexture:P,compressedTexImage2D:ge,compressedTexImage3D:ae,texImage2D:E,texImage3D:O,pixelStorei:Z,getParameter:et,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:bt,texStorage3D:A,texSubImage2D:xt,texSubImage3D:it,compressedTexSubImage2D:Wt,compressedTexSubImage3D:pt,scissor:rt,viewport:lt,reset:dt}}function Zm(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,h=new WeakMap,f=new Set,u,d=new WeakMap,M=new Set,y=new FinalizationRegistry(A=>M.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,E){return p?new OffscreenCanvas(A,E):Hn("canvas")}function v(A,E,O){let et=1,Z=bt(A);if((Z.width>O||Z.height>O)&&(et=O/Math.max(Z.width,Z.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let rt=Math.floor(et*Z.width),lt=Math.floor(et*Z.height);u===void 0&&(u=m(rt,lt));let Y=E?m(rt,lt):u;return Y.width=rt,Y.height=lt,Y.getContext("2d").drawImage(A,0,0,rt,lt),Ut("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+lt+")."),Y}else return"data"in A&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function S(A){return A.generateMipmaps}function I(A){n.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(A,E,O,et,Z,rt=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt;et&&(lt=t.get("EXT_texture_norm16"),lt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=E;if(E===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8),O===n.UNSIGNED_SHORT&&lt&&(Y=lt.R16_EXT),O===n.SHORT&&lt&&(Y=lt.R16_SNORM_EXT)),E===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),E===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8),O===n.UNSIGNED_SHORT&&lt&&(Y=lt.RG16_EXT),O===n.SHORT&&lt&&(Y=lt.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),E===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),E===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),E===n.RGB&&(O===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGB16_EXT),O===n.SHORT&&lt&&(Y=lt.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),E===n.RGBA){let J=rt?gs:te.getTransfer(Z);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=J===le?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGBA16_EXT),O===n.SHORT&&lt&&(Y=lt.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function g(A,E){let O;return A?E===null||E===fi||E===xn?O=n.DEPTH24_STENCIL8:E===ri?O=n.DEPTH32F_STENCIL8:E===$n&&(O=n.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fi||E===xn?O=n.DEPTH_COMPONENT24:E===ri?O=n.DEPTH_COMPONENT32F:E===$n&&(O=n.DEPTH_COMPONENT16),O}function T(A,E){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==we&&A.minFilter!==Pe?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function z(A){let E=new WeakRef(A);i.get(A).__ref=E,M.add(E),y.register(A,E,E)}function w(A){let E=i.get(A).__ref;E!==void 0&&(M.delete(E),y.unregister(E))}function C(A){H(A.target)}function U(A){L(A.target)}function H(A){A.removeEventListener("dispose",C),w(A),V(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function L(A){A.removeEventListener("dispose",U),w(A),$(A)}function F(){for(let A of M){let E=A.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):H(E))}M.clear(),f.clear()}function V(A){let E=i.get(A);if(E.__webglInit===void 0)return;let O=A.source,et=d.get(O);if(et){let Z=et[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&B(A),Object.keys(et).length===0&&d.delete(O)}i.remove(A)}function B(A){let E=i.get(A);n.deleteTexture(E.__webglTexture);let O=A.source,et=d.get(O);delete et[E.__cacheKey],a.memory.textures--}function $(A){let E=i.get(A);E.__depthDisposeCallback&&E.__depthDisposeCallback();let O=A.depthTexture;if(O&&O.renderTarget===A&&H(O),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let rt=0;rt<E.__webglFramebuffer[Z].length;rt++)n.deleteFramebuffer(E.__webglFramebuffer[Z][rt]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let et=A.textures;for(let Z=0,rt=et.length;Z<rt;Z++){let lt=i.get(et[Z]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),a.memory.textures--),i.remove(et[Z])}i.remove(A)}let G=0;function X(){G=0}function tt(){return G}function ft(A){G=A}function St(){let A=G;return A>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,A}function W(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.mipmapsAutoUpdate),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function ut(A,E){let O=i.get(A);if(A.isVideoTexture&&Wt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let et=A.image;if(et===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(O,A,E);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+E)}function It(A,E){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){zt(O,A,E);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+E)}function Pt(A,E){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){zt(O,A,E);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+E)}function gt(A,E){let O=i.get(A);if(A.version>0&&O.__version!==A.version){ne(O,A,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+E)}let ct={[jn]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[_r]:n.MIRRORED_REPEAT},Zt={[we]:n.NEAREST,[Sc]:n.NEAREST_MIPMAP_NEAREST,[Fs]:n.NEAREST_MIPMAP_LINEAR,[Pe]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},st={[Lc]:n.NEVER,[il]:n.ALWAYS,[Cc]:n.LESS,[tl]:n.LEQUAL,[Dc]:n.EQUAL,[el]:n.GEQUAL,[Pc]:n.GREATER,[_c]:n.NOTEQUAL};function yt(A,E){if(E.type===ri&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Pe||E.magFilter===la||E.magFilter===Fs||E.magFilter===di||E.minFilter===Pe||E.minFilter===la||E.minFilter===Fs||E.minFilter===di)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ct[E.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ct[E.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ct[E.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Zt[E.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Zt[E.minFilter]),E.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,st[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===we||E.minFilter!==Fs&&E.minFilter!==di||E.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(A,E){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",C),z(E));let et=E.source,Z=d.get(et);Z===void 0&&(Z={},d.set(et,Z));let rt=W(E);if(rt!==A.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[rt].usedTimes++;let lt=Z[A.__cacheKey];lt!==void 0&&(Z[A.__cacheKey].usedTimes--,lt.usedTimes===0&&B(E)),A.__cacheKey=rt,A.__webglTexture=Z[rt].texture}return O}function mt(A,E,O){return Math.floor(Math.floor(A/O)/E)}function Ot(A,E,O,et){let rt=A.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,O,et,E.data);else{rt.sort((N,K)=>N.start-K.start);let lt=0;for(let N=1;N<rt.length;N++){let K=rt[lt],q=rt[N],ot=K.start+K.count,at=mt(q.start,E.width,4),ht=mt(K.start,E.width,4);q.start<=ot+1&&at===ht&&mt(q.start+q.count-1,E.width,4)===at?K.count=Math.max(K.count,q.start+q.count-K.start):(++lt,rt[lt]=q)}rt.length=lt+1;let Y=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let N=0,K=rt.length;N<K;N++){let q=rt[N],ot=Math.floor(q.start/4),at=Math.ceil(q.count/4),ht=ot%E.width,wt=Math.floor(ot/E.width),Ht=at,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,wt),e.texSubImage2D(n.TEXTURE_2D,0,ht,wt,Ht,nt,O,et,E.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function zt(A,E,O){let et=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=n.TEXTURE_3D);let Z=Rt(A,E),rt=E.source;e.bindTexture(et,A.__webglTexture,n.TEXTURE0+O);let lt=i.get(rt);if(rt.version!==lt.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let nt=te.getPrimaries(te.workingColorSpace),Lt=E.colorSpace===gi?null:te.getPrimaries(E.colorSpace),kt=E.colorSpace===gi||nt===Lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let J=v(E.image,!1,s.maxTextureSize);J=pt(E,J);let dt=r.convert(E.format,E.colorSpace),N=r.convert(E.type),K=R(E.internalFormat,dt,N,E.normalized,E.colorSpace,E.isVideoTexture);yt(et,E);let q,ot=E.mipmaps,at=E.isVideoTexture!==!0,ht=lt.__version===void 0||Z===!0,wt=rt.dataReady,Ht=T(E,J);if(E.isDepthTexture)K=g(E.format===zi,E.type),ht&&(at?e.texStorage2D(n.TEXTURE_2D,1,K,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,dt,N,null));else if(E.isDataTexture)if(ot.length>0){at&&ht&&e.texStorage2D(n.TEXTURE_2D,Ht,K,ot[0].width,ot[0].height);for(let nt=0,Lt=ot.length;nt<Lt;nt++)q=ot[nt],at?wt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,N,q.data):e.texImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,dt,N,q.data);E.generateMipmaps=!1}else at?(ht&&e.texStorage2D(n.TEXTURE_2D,Ht,K,J.width,J.height),wt&&Ot(E,J,dt,N)):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,dt,N,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,K,ot[0].width,ot[0].height,J.depth);for(let nt=0,Lt=ot.length;nt<Lt;nt++)if(q=ot[nt],E.format!==mi)if(dt!==null)if(at){if(wt)if(E.layerUpdates.size>0){let kt=ul(q.width,q.height,E.format,E.type);for(let At of E.layerUpdates){let re=q.data.subarray(At*kt/q.data.BYTES_PER_ELEMENT,(At+1)*kt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,At,q.width,q.height,1,dt,re)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,J.depth,dt,q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,K,q.width,q.height,J.depth,0,q.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?wt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,J.depth,dt,N,q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,K,q.width,q.height,J.depth,0,dt,N,q.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{at&&ht&&e.texStorage2D(n.TEXTURE_2D,Ht,K,ot[0].width,ot[0].height);for(let nt=0,Lt=ot.length;nt<Lt;nt++)q=ot[nt],E.format!==mi?dt!==null?at?wt&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,q.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,q.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?wt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,q.width,q.height,dt,N,q.data):e.texImage2D(n.TEXTURE_2D,nt,K,q.width,q.height,0,dt,N,q.data)}else if(E.isDataArrayTexture)if(at){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,K,J.width,J.height,J.depth),wt)if(E.layerUpdates.size>0){let nt=ul(J.width,J.height,E.format,E.type);for(let Lt of E.layerUpdates){let kt=J.data.subarray(Lt*nt/J.data.BYTES_PER_ELEMENT,(Lt+1)*nt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Lt,J.width,J.height,1,dt,N,kt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,dt,N,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,dt,N,J.data);else if(E.isData3DTexture)at?(ht&&e.texStorage3D(n.TEXTURE_3D,Ht,K,J.width,J.height,J.depth),wt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,dt,N,J.data)):e.texImage3D(n.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,dt,N,J.data);else if(E.isFramebufferTexture){if(ht)if(at)e.texStorage2D(n.TEXTURE_2D,Ht,K,J.width,J.height);else{let nt=J.width,Lt=J.height;for(let kt=0;kt<Ht;kt++)e.texImage2D(n.TEXTURE_2D,kt,K,nt,Lt,0,dt,N,null),nt>>=1,Lt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),J.parentNode!==nt){nt.appendChild(J),f.add(E),nt.onpaint=Lt=>{let kt=Lt.changedElements;for(let At of f)kt.includes(At.image)&&(At.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let kt=n.RGBA,At=n.RGBA,re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,kt,At,re,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ot.length>0){if(at&&ht){let nt=bt(ot[0]);e.texStorage2D(n.TEXTURE_2D,Ht,K,nt.width,nt.height)}for(let nt=0,Lt=ot.length;nt<Lt;nt++)q=ot[nt],at?wt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,dt,N,q):e.texImage2D(n.TEXTURE_2D,nt,K,dt,N,q);E.generateMipmaps=!1}else if(at){if(ht){let nt=bt(J);e.texStorage2D(n.TEXTURE_2D,Ht,K,nt.width,nt.height)}wt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,N,J)}else e.texImage2D(n.TEXTURE_2D,0,K,dt,N,J);S(E)&&E.mipmapsAutoUpdate===!0&&I(et),lt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ne(A,E,O){if(E.image.length!==6)return;let et=Rt(A,E),Z=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);let rt=i.get(Z);if(Z.version!==rt.__version||et===!0){e.activeTexture(n.TEXTURE0+O);let lt=te.getPrimaries(te.workingColorSpace),Y=E.colorSpace===gi?null:te.getPrimaries(E.colorSpace),J=E.colorSpace===gi||lt===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let dt=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,K=[];for(let At=0;At<6;At++)!dt&&!N?K[At]=v(E.image[At],!0,s.maxCubemapSize):K[At]=N?E.image[At].image:E.image[At],K[At]=pt(E,K[At]);let q=K[0],ot=r.convert(E.format,E.colorSpace),at=r.convert(E.type),ht=R(E.internalFormat,ot,at,E.normalized,E.colorSpace),wt=E.isVideoTexture!==!0,Ht=rt.__version===void 0||et===!0,nt=Z.dataReady,Lt=T(E,q);yt(n.TEXTURE_CUBE_MAP,E);let kt;if(E.isDepthTexture){if(ht=g(E.format===zi,E.type),Ht)if(wt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,ht,q.width,q.height);else for(let At=0;At<6;At++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,q.width,q.height,0,ot,at,null)}else if(dt){wt&&Ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,ht,q.width,q.height);for(let At=0;At<6;At++){kt=K[At].mipmaps;for(let re=0;re<kt.length;re++){let ue=kt[re];E.format!==mi?ot!==null?wt?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,0,0,ue.width,ue.height,ot,ue.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,ht,ue.width,ue.height,0,ue.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,0,0,ue.width,ue.height,ot,at,ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re,ht,ue.width,ue.height,0,ot,at,ue.data)}}}else{if(kt=E.mipmaps,wt&&Ht){kt.length>0&&Lt++;let At=bt(K[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,ht,At.width,At.height)}for(let At=0;At<6;At++)if(N){wt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,K[At].width,K[At].height,ot,at,K[At].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,K[At].width,K[At].height,0,ot,at,K[At].data);for(let re=0;re<kt.length;re++){let qe=kt[re].image[At].image;wt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,0,0,qe.width,qe.height,ot,at,qe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,ht,qe.width,qe.height,0,ot,at,qe.data)}}else{wt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ot,at,K[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,ht,ot,at,K[At]);for(let re=0;re<kt.length;re++){let ue=kt[re];wt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,0,0,ot,at,ue.image[At]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,re+1,ht,ot,at,ue.image[At])}}}S(E)&&E.mipmapsAutoUpdate===!0&&I(n.TEXTURE_CUBE_MAP),rt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Qt(A,E,O,et,Z,rt){let lt=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),J=R(O.internalFormat,lt,Y,O.normalized,O.colorSpace),dt=i.get(E),N=i.get(O);if(N.__renderTarget=E,!dt.__hasExternalTextures){let K=Math.max(1,E.width>>rt),q=Math.max(1,E.height>>rt);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,rt,J,K,q,E.depth,0,lt,Y,null):e.texImage2D(Z,rt,J,K,q,0,lt,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),it(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Z,N.__webglTexture,0,xt(E)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Z,N.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function me(A,E,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),E.depthBuffer){let et=E.depthTexture,Z=et&&et.isDepthTexture?et.type:null,rt=g(E.stencilBuffer,Z),lt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;it(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(E),rt,E.width,E.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(E),rt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,rt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,A)}else{let et=E.textures;for(let Z=0;Z<et.length;Z++){let rt=et[Z],lt=r.convert(rt.format,rt.colorSpace),Y=r.convert(rt.type),J=R(rt.internalFormat,lt,Y,rt.normalized,rt.colorSpace);it(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(E),J,E.width,E.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(E),J,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,J,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(A,E,O){let et=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(E.depthTexture);Z.__renderTarget=E;let rt=et?E.depthTexture.image[0]:E.depthTexture.image;(!Z.__webglTexture||rt.width!==E.width||rt.height!==E.height)&&(rt.width=E.width,rt.height=E.height,E.depthTexture.needsUpdate=!0),et?gt(E.depthTexture,0):ut(E.depthTexture,0);let lt=Z.__webglTexture,Y=xt(E),J=et?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,dt=E.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Di)it(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,J,lt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,dt,J,lt,0);else if(E.depthTexture.format===zi)it(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,J,lt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,dt,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(A){let E=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let et=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){let Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",Z)};et.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=et}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(O)for(let et=0;et<6;et++)jt(E.__webglFramebuffer[et],A,et);else A.texture.mipmaps.length>0?jt(E.__webglFramebuffer[0],A,0):jt(E.__webglFramebuffer,A,0);else if(O){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=n.createRenderbuffer(),me(E.__webglDepthbuffer[et],A,!1);else{let Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),me(E.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(A,E,O){let et=i.get(A);E!==void 0&&Qt(et.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ye(A)}function ie(A){let E=A.texture,O=i.get(A),et=i.get(E);A.addEventListener("dispose",U),z(A);let Z=A.textures,rt=A.isWebGLCubeRenderTarget===!0,lt=Z.length>1;if(lt||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=E.version,a.memory.textures++),rt){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(E.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let J=0;J<E.mipmaps.length;J++)O.__webglFramebuffer[Y][J]=n.createFramebuffer()}else O.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(E.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<E.mipmaps.length;Y++)O.__webglFramebuffer[Y]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(lt)for(let Y=0,J=Z.length;Y<J;Y++){let dt=i.get(Z[Y]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&it(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<Z.length;Y++){let J=Z[Y];O.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let dt=r.convert(J.format,J.colorSpace),N=r.convert(J.type),K=R(J.internalFormat,dt,N,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),q=xt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,K,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),me(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),yt(n.TEXTURE_CUBE_MAP,E);for(let Y=0;Y<6;Y++)if(E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)Qt(O.__webglFramebuffer[Y][J],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Qt(O.__webglFramebuffer[Y],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);S(E)?I(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(lt){for(let Y=0,J=Z.length;Y<J;Y++){let dt=Z[Y],N=i.get(dt),K=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,N.__webglTexture),yt(K,dt),Qt(O.__webglFramebuffer,A,dt,n.COLOR_ATTACHMENT0+Y,K,0),S(dt)&&I(K)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,et.__webglTexture),yt(Y,E),E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)Qt(O.__webglFramebuffer[J],A,E,n.COLOR_ATTACHMENT0,Y,J);else Qt(O.__webglFramebuffer,A,E,n.COLOR_ATTACHMENT0,Y,0);S(E)?I(Y):E.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ye(A)}function P(A){let E=A.textures;for(let O=0,et=E.length;O<et;O++){let Z=E[O];if(S(Z)&&Z.mipmapsAutoUpdate===!0){let rt=b(A),lt=i.get(Z).__webglTexture;e.bindTexture(rt,lt),I(rt),e.unbindTexture()}}}let ge=[];function ae(A){if(A.samples>0){if(it(A)===!1){let E=A.textures,O=A.width,et=A.height,Z=n.COLOR_BUFFER_BIT,rt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(A),Y=E.length>1;if(Y)for(let dt=0;dt<E.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let dt=0;dt<E.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);let N=i.get(E[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,O,et,0,0,O,et,Z,n.NEAREST),c===!0&&(ge.length=0,ge.push(n.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ge.push(rt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let dt=0;dt<E.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[dt]);let N=i.get(E[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,N,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let E=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function xt(A){return Math.min(s.maxSamples,A.samples)}function it(A){let E=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Wt(A){let E=a.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function pt(A,E){let O=A.colorSpace,et=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ms&&O!==gi&&(te.getTransfer(O)===le?(et!==mi||Z!==Qe)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",O)),E}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=St,this.resetTextureUnits=X,this.getTextureUnits=tt,this.setTextureUnits=ft,this.setTexture2D=ut,this.setTexture2DArray=It,this.setTexture3D=Pt,this.setTextureCube=gt,this.rebindTextures=ee,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=it,this.dispose=F}function Jm(n,t){function e(i,s=gi){let r,a=te.getTransfer(s);if(i===Qe)return n.UNSIGNED_BYTE;if(i===ua)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jo)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qo)return n.BYTE;if(i===Yo)return n.SHORT;if(i===$n)return n.UNSIGNED_SHORT;if(i===ca)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Ko)return n.ALPHA;if(i===$o)return n.RGB;if(i===mi)return n.RGBA;if(i===Di)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===da)return n.RED;if(i===fa)return n.RED_INTEGER;if(i===tn)return n.RG;if(i===pa)return n.RG_INTEGER;if(i===ma)return n.RGBA_INTEGER;if(i===Hs||i===Vs||i===ks||i===Gs)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===Ma||i===Ea||i===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===Aa||i===Ra||i===Ia||i===va||i===Ws||i===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===Aa)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ra)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ia)return r.COMPRESSED_R11_EAC;if(i===va)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ws)return r.COMPRESSED_RG11_EAC;if(i===Ta)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sa||i===ba||i===Na||i===wa||i===La||i===Ca||i===Da||i===Pa||i===_a||i===Oa||i===za||i===Ua||i===Ba||i===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===La)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ca)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ua)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===Ha||i===Va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Fa)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ka||i===Ga||i===Xs||i===Wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Km=`
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

}`,xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ns(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ke({vertexShader:Km,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends Ei{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,M=null,y=typeof XRWebGLBinding<"u",p=new xl,m={},v=e.getContextAttributes(),S=null,I=null,b=[],R=[],g=new Xt,T=null,z=null,w=new Ge;w.viewport=new Ee;let C=new Ge;C.viewport=new Ee;let U=[w,C],H=new na,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ut=b[W];return ut===void 0&&(ut=new Gn,b[W]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(W){let ut=b[W];return ut===void 0&&(ut=new Gn,b[W]=ut),ut.getGripSpace()},this.getHand=function(W){let ut=b[W];return ut===void 0&&(ut=new Gn,b[W]=ut),ut.getHandSpace()};function V(W){let ut=R.indexOf(W.inputSource);if(ut===-1)return;let It=b[ut];It!==void 0&&(It.update(W.inputSource,W.frame,l||a),It.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",$);for(let W=0;W<b.length;W++){let ut=R[W];ut!==null&&(R[W]=null,b[W].disconnect(ut))}L=null,F=null,p.reset();for(let W in m)delete m[W];if(t.setRenderTarget(S),d=null,u=null,f=null,s=null,I=null,St.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(g.width,g.height,!1),z!==null){let W=z.camera;W.fov=z.fov,W.zoom=z.zoom,W.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",B),s.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,Pt=null,gt=null;v.depth&&(gt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=v.stencil?zi:Di,Pt=v.stencil?xn:fi);let ct={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),I=new Le(u.textureWidth,u.textureHeight,{format:mi,type:Qe,depthTexture:new Oi(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let It={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,It),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),I=new Le(d.framebufferWidth,d.framebufferHeight,{format:mi,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),St.setContext(s),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(W){for(let ut=0;ut<W.removed.length;ut++){let It=W.removed[ut],Pt=R.indexOf(It);Pt>=0&&(R[Pt]=null,b[Pt].disconnect(It))}for(let ut=0;ut<W.added.length;ut++){let It=W.added[ut],Pt=R.indexOf(It);if(Pt===-1){for(let ct=0;ct<b.length;ct++)if(ct>=R.length){R.push(It),Pt=ct;break}else if(R[ct]===null){R[ct]=It,Pt=ct;break}if(Pt===-1)break}let gt=b[Pt];gt&&gt.connect(It)}}function G(W,ut){ut===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ut.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ut=W.near,It=W.far;p.texture!==null&&(p.depthNear>0&&(ut=p.depthNear),p.depthFar>0&&(It=p.depthFar)),H.near=C.near=w.near=ut,H.far=C.far=w.far=It,(L!==H.near||F!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,F=H.far),H.layers.mask=W.layers.mask|6,w.layers.mask=H.layers.mask&-5,C.layers.mask=H.layers.mask&-3;let Pt=W.parent,gt=H.cameras;G(H,Pt);for(let ct=0;ct<gt.length;ct++)G(gt[ct],Pt);H.projectionMatrix.copy(w.projectionMatrix),H.projectionMatrixInverse.copy(w.projectionMatrixInverse),z===null&&W.isPerspectiveCamera&&(z={camera:W,fov:W.fov,zoom:W.zoom}),X(W,H,Pt)};function X(W,ut,It){It===null?W.matrix.copy(ut.matrixWorld):(W.matrix.copy(It.matrixWorld),W.matrix.invert(),W.matrix.multiply(ut.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ut.projectionMatrix),W.projectionMatrixInverse.copy(ut.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=zr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(W){return m[W]};let tt=null;function ft(W,ut){if(h=ut.getViewerPose(l||a),M=ut,h!==null){let It=h.views;d!==null&&(t.setRenderTargetFramebuffer(I,d.framebuffer),t.setRenderTarget(I));let Pt=!1;It.length!==H.cameras.length&&(H.cameras.length=0,Pt=!0);for(let st=0;st<It.length;st++){let yt=It[st],Rt=null;if(d!==null)Rt=d.getViewport(yt);else{let Ot=f.getViewSubImage(u,yt);Rt=Ot.viewport,st===0&&(t.setRenderTargetTextures(I,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(I))}let mt=U[st];mt===void 0&&(mt=new Ge,mt.layers.enable(st),mt.viewport=new Ee,U[st]=mt),mt.matrix.fromArray(yt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(yt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),st===0&&(H.matrix.copy(mt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Pt===!0&&H.cameras.push(mt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let st=f.getDepthInformation(It[0]);st&&st.isValid&&st.texture&&p.init(st,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let st=0;st<It.length;st++){let yt=It[st].camera;if(yt){let Rt=m[yt];Rt||(Rt=new Ns,m[yt]=Rt);let mt=f.getCameraImage(yt);Rt.sourceTexture=mt}}}}for(let It=0;It<b.length;It++){let Pt=R[It],gt=b[It];Pt!==null&&gt!==void 0&&gt.update(Pt,ut,l||a)}tt&&tt(W,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),M=null}let St=new du;St.setAnimationLoop(ft),this.setAnimationLoop=function(W){tt=W},this.dispose=function(){}}},tg=new ce,Ru=new Ft;Ru.set(-1,0,0,0,1,0,0,0,1);function eg(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ol(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,S,I){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,I)):m.isMeshMatcapMaterial?(r(p,m),M(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,v,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),S=v.envMap,I=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(I)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ru),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_e&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ig(n,t,e,i){let s={},r={};function a(v,S){let I=S.program;i.uniformBlockBinding(v,I,s[v.id])}function o(v,S){let I=s[v.id];I===void 0&&(M(v),I=c(v),s[v.id]=I,v.addEventListener("dispose",p));let b=S.program;i.updateUBOMapping(v,b);let R=t.render.frame;r[v.id]!==R&&(l(v),r[v.id]=R)}function c(v){let S=n.createBuffer(),I=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,b),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function l(v){let S=s[v.id],I=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,g=I.length;R<g;R++){let T=I[R];if(Array.isArray(T))for(let z=0,w=T.length;z<w;z++)h(T[z],R,z,b);else h(T,R,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,S,I,b){if(u(v,S,I,b)===!0){let R=v.__offset,g=v.value;if(Array.isArray(g)){let T=0;for(let z=0;z<g.length;z++){let w=g[z],C=y(w,!0);f(w,v.__data,T),T+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,v.__data)}}function f(v,S,I){typeof v=="number"||typeof v=="boolean"?S[I]=v:v.isMatrix3?(S[I]=v.elements[0],S[I+1]=v.elements[1],S[I+2]=v.elements[2],S[I+3]=0,S[I+4]=v.elements[3],S[I+5]=v.elements[4],S[I+6]=v.elements[5],S[I+7]=0,S[I+8]=v.elements[6],S[I+9]=v.elements[7],S[I+10]=v.elements[8],S[I+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-I),I):v.toArray(S,I)}function u(v,S,I,b){let R=v.value,g=S+"_"+I;if(Array.isArray(R)){b[g]===void 0&&(b[g]=[]);let T=b[g],z=!1;for(let w=0;w<R.length;w++)d(R[w],T,w)===!0&&(z=!0);return z}return d(R,b,g)}function d(v,S,I){if(S[I]===void 0)return typeof v=="number"||typeof v=="boolean"?S[I]=v:ArrayBuffer.isView(v)?S[I]=v.slice():S[I]=v.clone(),!0;{let b=S[I];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return S[I]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function M(v){let S=v.uniforms,I=0,b=16;for(let g=0,T=S.length;g<T;g++){let z=Array.isArray(S[g])?S[g]:[S[g]];for(let w=0,C=z.length;w<C;w++){let U=z[w],H=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(S[g])||Array.isArray(U.value),F=I;for(let B=0,$=H.length;B<$;B++){let G=H[B],X=y(G,L),tt=I%b,ft=tt%X.boundary,St=tt+ft;I+=ft,St!==0&&b-St<X.storage&&(I+=b-St),B===0&&(F=I),I+=X.storage}let V=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new V((I-F)/Float32Array.BYTES_PER_ELEMENT),U.__offset=F}}let R=I%b;return R>0&&(I+=b-R),v.__size=I,v.__cache={},this}function y(v,S){let I={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(I.boundary=4,I.storage=4):v.isVector2?(I.boundary=8,I.storage=8):v.isVector3||v.isColor?(I.boundary=16,I.storage=12):v.isVector4?(I.boundary=16,I.storage=16):v.isMatrix3?(I.boundary=16,I.storage=48):v.isMatrix4?(I.boundary=16,I.storage=64):v.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(I.boundary=16,I.storage=v.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(I.boundary=16,I.storage=Math.ceil(I.storage/16)*16),I}function p(v){let S=v.target;S.removeEventListener("dispose",p),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function sg(){return Ii===null&&(Ii=new Rs(ng,16,16,tn,pi),Ii.name="DFG_LUT",Ii.minFilter=Pe,Ii.magFilter=Pe,Ii.wrapS=ei,Ii.wrapT=ei,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var Ks=class{constructor(t={}){let{canvas:e=zc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Qe}=t;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=a;let y=d,p=new Set([ma,pa,fa]),m=new Set([Qe,fi,$n,xn,ua,ha]),v=new Uint32Array(4),S=new Int32Array(4),I={textures:[],min:[],max:[],resolution:[]},b=null,R=null,g=[],T=[],z=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,C=!1,U=null,H=null,L=null,F=null;this._outputColorSpace=ve;let V=0,B=0,$=null,G=-1,X=null,tt=new Ee,ft=new Ee,St=null,W=new Vt(0),ut=0,It=e.width,Pt=e.height,gt=1,ct=null,Zt=null,st=new Ee(0,0,It,Pt),yt=new Ee(0,0,It,Pt),Rt=!1,mt=new Qi,Ot=new Fr,zt=!1,ne=!1,Qt=new ce,me=new _,jt=new Ee,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function ie(){return $===null?gt:1}let P=i;function ge(x,D){return e.getContext(x,D)}let ae,xt,it,Wt,pt,bt,A,E,O,et,Z,rt,lt,Y,J,dt,N,K,q,ot,at,ht,wt;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",At,!1),P===null){let D="webgl2";if(P=ge(D,x),P===null)throw ge(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(x){throw e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Bt("WebGLRenderer: "+x.message),x}function Ht(){ae=new mp(P),ae.init(),at=new Jm(P,ae),xt=new sp(P,ae,t,at),it=new Ym(P,ae),xt.reversedDepthBuffer&&u&&it.buffers.depth.setReversed(!0),H=P.createFramebuffer(),L=P.createFramebuffer(),F=P.createFramebuffer(),Wt=new Ep(P),pt=new Om,bt=new Zm(P,ae,it,pt,xt,at,Wt),A=new pp(w),E=new xh(P),ht=new ip(P,E),O=new gp(P,E,Wt,ht),et=new yp(P,O,E,ht,Wt),K=new xp(P,xt,bt),J=new rp(pt),Z=new _m(w,A,ae,xt,ht,J),rt=new eg(w,pt),lt=new Um,Y=new km(ae),N=new ep(w,A,it,et,M,c),dt=new qm(w,et,xt),wt=new ig(P,Wt,xt,it),q=new np(P,ae,Wt),ot=new Mp(P,ae,Wt),Wt.programs=Z.programs,w.capabilities=xt,w.extensions=ae,w.properties=pt,w.renderLists=lt,w.shadowMap=dt,w.state=it,w.info=Wt}y!==Qe&&(z=new Rp(y,e.width,e.height,o,s,r));let nt=new yl(w,P);this.xr=nt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let x=ae.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ae.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(x){x!==void 0&&(gt=x,this.setSize(It,Pt,!1))},this.getSize=function(x){return x.set(It,Pt)},this.setSize=function(x,D,Q=!0){if(nt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}It=x,Pt=D,e.width=Math.floor(x*gt),e.height=Math.floor(D*gt),Q===!0&&(e.style.width=x+"px",e.style.height=D+"px"),z!==null&&z.setSize(e.width,e.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(It*gt,Pt*gt).floor()},this.setDrawingBufferSize=function(x,D,Q){It=x,Pt=D,gt=Q,e.width=Math.floor(x*Q),e.height=Math.floor(D*Q),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(y===Qe){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(tt)},this.getViewport=function(x){return x.copy(st)},this.setViewport=function(x,D,Q,j){x.isVector4?st.set(x.x,x.y,x.z,x.w):st.set(x,D,Q,j),it.viewport(tt.copy(st).multiplyScalar(ie()).round())},this.getScissor=function(x){return x.copy(yt)},this.setScissor=function(x,D,Q,j){x.isVector4?yt.set(x.x,x.y,x.z,x.w):yt.set(x,D,Q,j),it.scissor(ft.copy(yt).multiplyScalar(ie()).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(x){it.setScissorTest(Rt=x)},this.setOpaqueSort=function(x){ct=x},this.setTransparentSort=function(x){Zt=x},this.getClearColor=function(x){return x.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,Q=!0){let j=0;if(x){let k=!1;if($!==null){let Et=$.texture.format;k=p.has(Et)}if(k){let Et=$.texture.type,Nt=m.has(Et),Mt=N.getClearColor(),Tt=N.getClearAlpha(),_t=Mt.r,Gt=Mt.g,Kt=Mt.b;Nt?(v[0]=_t,v[1]=Gt,v[2]=Kt,v[3]=Tt,P.clearBufferuiv(P.COLOR,0,v)):(S[0]=_t,S[1]=Gt,S[2]=Kt,S[3]=Tt,P.clearBufferiv(P.COLOR,0,S))}else j|=P.COLOR_BUFFER_BIT}D&&(j|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),N.dispose(),lt.dispose(),Y.dispose(),bt.dispose(),pt.dispose(),A.dispose(),et.dispose(),O.dispose(),ht.dispose(),wt.dispose(),Z.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",nn),nt.removeEventListener("sessionend",Yt),he.stop()};function Lt(x){x.preventDefault(),sl("WebGLRenderer: Context Lost."),C=!0}function kt(){sl("WebGLRenderer: Context Restored."),C=!1;let x=Wt.autoReset,D=dt.enabled,Q=dt.autoUpdate,j=dt.needsUpdate,k=dt.type;Ht(),Wt.autoReset=x,dt.enabled=D,dt.autoUpdate=Q,dt.needsUpdate=j,dt.type=k}function At(x){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function re(x){let D=x.target;D.removeEventListener("dispose",re),ue(D)}function ue(x){qe(x),pt.remove(x)}function qe(x){let D=pt.get(x).programs;D!==void 0&&(D.forEach(function(Q){Z.releaseProgram(Q)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,Q,j,k,Et){D===null&&(D=ye);let Nt=k.isMesh&&k.matrixWorld.determinantAffine()<0,Mt=Su(x,D,Q,j,k);it.setMaterial(j,Nt);let Tt=Q.index,_t=1;if(j.wireframe===!0){if(Tt=O.getWireframeAttribute(Q),Tt===void 0)return;_t=2}let Gt=Q.drawRange,Kt=Q.attributes.position,Ct=Gt.start*_t,$t=(Gt.start+Gt.count)*_t;Et!==null&&(Ct=Math.max(Ct,Et.start*_t),$t=Math.min($t,(Et.start+Et.count)*_t)),Tt!==null?(Ct=Math.max(Ct,0),$t=Math.min($t,Tt.count)):Kt!=null&&(Ct=Math.max(Ct,0),$t=Math.min($t,Kt.count));let Re=$t-Ct;if(Re<0||Re===1/0)return;ht.setup(k,j,Mt,Q,Tt);let pe,fe=q;if(Tt!==null&&(pe=E.get(Tt),fe=ot,fe.setIndex(pe)),k.isMesh)j.wireframe===!0?(it.setLineWidth(j.wireframeLinewidth*ie()),fe.setMode(P.LINES)):fe.setMode(P.TRIANGLES);else if(k.isLine){let Oe=j.linewidth;Oe===void 0&&(Oe=1),it.setLineWidth(Oe*ie()),k.isLineSegments?fe.setMode(P.LINES):k.isLineLoop?fe.setMode(P.LINE_LOOP):fe.setMode(P.LINE_STRIP)}else k.isPoints?fe.setMode(P.POINTS):k.isSprite&&fe.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))fe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Oe=k._multiDrawStarts,Dt=k._multiDrawCounts,He=k._multiDrawCount,oe=Tt?E.get(Tt).bytesPerElement:1,rn=pt.get(j).currentProgram.getUniforms();for(let ze=0;ze<He;ze++)rn.setValue(P,"_gl_DrawID",ze),fe.render(Oe[ze]/oe,Dt[ze])}else if(k.isInstancedMesh)fe.renderInstances(Ct,Re,k.count);else if(Q.isInstancedBufferGeometry){let Oe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Dt=Math.min(Q.instanceCount,Oe);fe.renderInstances(Ct,Re,Dt)}else fe.render(Ct,Re)};function Ui(x,D,Q,j){U!==null&&x.isNodeMaterial&&U.setObject(j,x),zt===!0&&J.setState(x,Q,!1),x.transparent===!0&&x.side===Xe&&x.forceSinglePass===!1?(x.side=_e,x.needsUpdate=!0,as(x,D,j),x.side=$i,x.needsUpdate=!0,as(x,D,j),x.side=Xe):as(x,D,j)}this.compile=function(x,D,Q=null){Q===null&&(Q=x),U!==null&&U.renderStart(x,D,Q),R=Y.get(Q),R.init(D),T.push(R),Q.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(R.pushLight(k),k.castShadow&&R.pushShadow(k))}),x!==Q&&x.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(R.pushLight(k),k.castShadow&&R.pushShadow(k))}),R.setupLights(),U!==null&&U.updateLights(R.state.lightsArray),ne=this.localClippingEnabled,zt=J.init(this.clippingPlanes,ne),zt===!0&&J.setGlobalState(this.clippingPlanes,D),U!==null&&dt.render(R.state.shadowsArray,Q,D);let j=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let Et=k.material;if(Et)if(Array.isArray(Et))for(let Nt=0;Nt<Et.length;Nt++){let Mt=Et[Nt];Ui(Mt,Q,D,k),j.add(Mt)}else Ui(Et,Q,D,k),j.add(Et)}),R=T.pop(),U!==null&&U.renderEnd(),j},this.compileAsync=function(x,D,Q=null){let j=this.compile(x,D,Q);return new Promise(k=>{function Et(){if(j.forEach(function(Nt){let Tt=pt.get(Nt).currentProgram;(Tt===void 0||Tt.isReady())&&j.delete(Nt)}),j.size===0){k(x);return}setTimeout(Et,10)}ae.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let rs=null;function en(x){rs&&rs(x)}function nn(){he.stop()}function Yt(){he.start()}let he=new du;he.setAnimationLoop(en),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(x){rs=x,nt.setAnimationLoop(x),x===null?he.stop():he.start()},nt.addEventListener("sessionstart",nn),nt.addEventListener("sessionend",Yt),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(x,D);let Q=nt.enabled===!0&&nt.isPresenting===!0,j=z!==null&&($===null||Q)&&z.begin(w,$);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(D),D=nt.getCamera()),x.isScene===!0&&x.onBeforeRender(w,x,D,$),R=Y.get(x,T.length),R.init(D),R.state.textureUnits=bt.getTextureUnits(),T.push(R),Qt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Ot.setFromArrayCamera(D):mt.setFromProjectionMatrix(Qt,ii,D.reversedDepth),ne=this.localClippingEnabled,zt=J.init(this.clippingPlanes,ne),b=lt.get(x,g.length),b.init(),g.push(b),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let Nt=w.xr.getDepthSensingMesh();Nt!==null&&Ae(Nt,D,-1/0,w.sortObjects)}Ae(x,D,0,w.sortObjects),b.finish(),U!==null&&U.updateLights(R.state.lightsArray),w.sortObjects===!0&&b.sort(ct,Zt),ee=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ee&&N.addToRenderList(b,x),this.info.autoReset===!0&&this.info.reset(),zt===!0&&J.beginShadows();let k=R.state.shadowsArray;if(dt.render(k,x,D),zt===!0&&J.endShadows(),(j&&z.hasRenderPass())===!1){let Nt=b.opaque,Mt=b.transmissive;if(R.setupLights(),D.isArrayCamera){let Tt=D.cameras;if(Mt.length>0)for(let _t=0,Gt=Tt.length;_t<Gt;_t++){let Kt=Tt[_t];sn(Nt,Mt,x,Kt)}ee&&N.render(x);for(let _t=0,Gt=Tt.length;_t<Gt;_t++){let Kt=Tt[_t];Ye(b,x,Kt,Kt.viewport)}}else Mt.length>0&&sn(Nt,Mt,x,D),ee&&N.render(x),Ye(b,x,D)}$!==null&&B===0&&(bt.updateMultisampleRenderTarget($),bt.updateRenderTargetMipmap($)),j&&z.end(w),x.isScene===!0&&x.onAfterRender(w,x,D),ht.resetDefaultState(),G=-1,X=null,T.pop(),T.length>0?(R=T[T.length-1],bt.setTextureUnits(R.state.textureUnits),zt===!0&&J.setGlobalState(w.clippingPlanes,R.state.camera)):R=null,g.pop(),g.length>0?b=g[g.length-1]:b=null,U!==null&&U.renderEnd()};function Ae(x,D,Q,j){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)Q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)R.pushLight(x),x.castShadow&&R.pushShadow(x);else if(x.isSprite){let Nt=D.isArrayCamera?Ot:mt;if(!x.frustumCulled||x.intersectsFrustum(Nt)){j&&jt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Qt);let Mt=et.update(x),Tt=x.material;Tt.visible&&b.push(x,Mt,Tt,Q,jt.z,null,D)}}else if(x.isMesh||x.isLine||x.isPoints){let Nt=D.isArrayCamera?Ot:mt;if(!x.frustumCulled||x.intersectsFrustum(Nt)){let Mt=et.update(x),Tt=x.material;if(j&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),jt.copy(x.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),jt.copy(Mt.boundingSphere.center)),jt.applyMatrix4(x.matrixWorld).applyMatrix4(Qt)),Array.isArray(Tt)){let _t=Mt.groups;for(let Gt=0,Kt=_t.length;Gt<Kt;Gt++){let Ct=_t[Gt],$t=Tt[Ct.materialIndex];$t&&$t.visible&&b.push(x,Mt,$t,Q,jt.z,Ct,D)}}else Tt.visible&&b.push(x,Mt,Tt,Q,jt.z,null,D)}}}let Et=x.children;for(let Nt=0,Mt=Et.length;Nt<Mt;Nt++)Ae(Et[Nt],D,Q,j)}function Ye(x,D,Q,j){let{opaque:k,transmissive:Et,transparent:Nt}=x;R.setupLightsView(Q),zt===!0&&J.setGlobalState(w.clippingPlanes,Q),j&&it.viewport(tt.copy(j)),k.length>0&&Bi(k,D,Q),Et.length>0&&Bi(Et,D,Q),Nt.length>0&&Bi(Nt,D,Q),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function sn(x,D,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[j.id]===void 0){let Ct=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[j.id]=new Le(1,1,{generateMipmaps:!0,type:Ct?pi:Qe,minFilter:di,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let Et=R.state.transmissionRenderTarget[j.id],Nt=j.viewport||tt;Et.setSize(Nt.z*w.transmissionResolutionScale,Nt.w*w.transmissionResolutionScale);let Mt=w.getRenderTarget(),Tt=w.getActiveCubeFace(),_t=w.getActiveMipmapLevel();w.setRenderTarget(Et),w.getClearColor(W),ut=w.getClearAlpha(),ut<1&&w.setClearColor(16777215,.5),w.clear(),ee&&N.render(Q);let Gt=w.toneMapping;w.toneMapping=Ri;let Kt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),R.setupLightsView(j),zt===!0&&J.setGlobalState(w.clippingPlanes,j),Bi(x,Q,j),bt.updateMultisampleRenderTarget(Et),bt.updateRenderTargetMipmap(Et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let $t=0,Re=D.length;$t<Re;$t++){let pe=D[$t],{object:fe,geometry:Oe,material:Dt,group:He}=pe;if(Dt.side===Xe&&fe.layers.test(j.layers)){let oe=Dt.side;Dt.side=_e,Dt.needsUpdate=!0,An(fe,Q,j,Oe,Dt,He),Dt.side=oe,Dt.needsUpdate=!0,Ct=!0}}Ct===!0&&(bt.updateMultisampleRenderTarget(Et),bt.updateRenderTargetMipmap(Et))}w.setRenderTarget(Mt,Tt,_t),w.setClearColor(W,ut),Kt!==void 0&&(j.viewport=Kt),w.toneMapping=Gt}function Bi(x,D,Q){let j=D.isScene===!0?D.overrideMaterial:null;for(let k=0,Et=x.length;k<Et;k++){let Nt=x[k],{object:Mt,geometry:Tt,group:_t}=Nt,Gt=Nt.material;Gt.allowOverride===!0&&j!==null&&(Gt=j),Mt.layers.test(Q.layers)&&An(Mt,D,Q,Tt,Gt,_t)}}function An(x,D,Q,j,k,Et){U!==null&&k.isNodeMaterial&&U.setObject(x,k),x.onBeforeRender(w,D,Q,j,k,Et),x.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(w,D,Q,j,x,Et),k.transparent===!0&&k.side===Xe&&k.forceSinglePass===!1?(k.side=_e,k.needsUpdate=!0,w.renderBufferDirect(Q,D,j,k,x,Et),k.side=$i,k.needsUpdate=!0,w.renderBufferDirect(Q,D,j,k,x,Et),k.side=Xe):w.renderBufferDirect(Q,D,j,k,x,Et),x.onAfterRender(w,D,Q,j,k,Et)}function Al(x){let D=0;for(let Q of x)Q.texture!==null&&D++;return D}function as(x,D,Q){D.isScene!==!0&&(D=ye);let j=pt.get(x),k=R.state.lights,Et=R.state.shadowsArray,Nt=k.state.version,Mt=Z.getParameters(x,k.state,Et,D,Q,R.state.lightProbeGridArray),Tt=Z.getProgramCacheKey(Mt),_t=j.programs;j.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,j.fog=D.fog;let Gt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;j.envMap=A.get(x.envMap||j.environment,Gt),j.envMapRotation=j.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,_t===void 0&&(x.addEventListener("dispose",re),_t=new Map,j.programs=_t,j.programVariants=new Map);let Kt=_t.get(Tt);if(Kt!==void 0){if(j.currentProgram===Kt&&j.lightsStateVersion===Nt)return Il(x,Mt),Kt}else Mt.uniforms=Z.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,Q,Mt),x.onBeforeCompile(Mt,w),Kt=Z.acquireProgram(Mt,Tt),_t.set(Tt,Kt),j.uniforms=Mt.uniforms;let Ct=j.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ct.clippingPlanes=J.uniform),Il(x,Mt),j.needsLights=Nu(x),j.lightsStateVersion=Nt,j.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.sunLights.value=k.state.sun,Ct.sunLightShadows.value=k.state.sunShadow,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.sunShadowMatrix.value=k.state.sunShadowMatrix,Ct.sunShadowCascade.value=k.state.sunShadowCascade,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),j.numLightProbeGrids=Al(R.state.lightProbeGridArray),j.currentProgram=Kt,j.uniformsList=null,Kt}function Tu(x,D,Q,j,k){let Et=pt.get(x),Nt=Et.currentProgram.id+","+j+","+k,Mt=Et.programVariants.get(Nt);return Mt===void 0?(Mt=as(x,D,Q),Et.programVariants.set(Nt,Mt)):(Et.currentProgram=Mt,Et.uniformsList=null,Et.outputColorSpace=j,Et.toneMapping=k),Mt}function Rl(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=ts.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Il(x,D){let Q=pt.get(x);Q.outputColorSpace=D.outputColorSpace,Q.batching=D.batching,Q.batchingColor=D.batchingColor,Q.instancing=D.instancing,Q.instancingColor=D.instancingColor,Q.instancingMorph=D.instancingMorph,Q.skinning=D.skinning,Q.morphTargets=D.morphTargets,Q.morphNormals=D.morphNormals,Q.morphColors=D.morphColors,Q.morphTargetsCount=D.morphTargetsCount,Q.numClippingPlanes=D.numClippingPlanes,Q.numIntersection=D.numClipIntersection,Q.vertexAlphas=D.vertexAlphas,Q.vertexTangents=D.vertexTangents,Q.toneMapping=D.toneMapping}function Su(x,D,Q,j,k){D.isScene!==!0&&(D=ye),bt.resetTextureUnits();let Et=D.fog,Nt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?D.environment:null,Mt=$===null?w.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:te.workingColorSpace,Tt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,_t=A.get(j.envMap||Nt,Tt),Gt=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Kt=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ct=!!Q.morphAttributes.position,$t=!!Q.morphAttributes.normal,Re=!!Q.morphAttributes.color,pe=Ri;j.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(pe=w.toneMapping);let fe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Oe=fe!==void 0?fe.length:0,Dt=pt.get(j),He=R.state.lights;if(zt===!0&&(ne===!0||x!==X)){let xe=x===X&&j.id===G;J.setState(j,x,xe)}let oe=!1,rn=!1;j.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==He.state.version||k.isBatchedMesh&&Dt.batching===!1||!k.isBatchedMesh&&Dt.batching===!0||k.isBatchedMesh&&Dt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Dt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Dt.instancing===!1||!k.isInstancedMesh&&Dt.instancing===!0||k.isSkinnedMesh&&Dt.skinning===!1||!k.isSkinnedMesh&&Dt.skinning===!0||k.isInstancedMesh&&Dt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Dt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Dt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Dt.instancingMorph===!1&&k.morphTexture!==null||Dt.envMap!==_t||j.fog===!0&&Dt.fog!==Et||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==J.numPlanes||Dt.numIntersection!==J.numIntersection)||Dt.vertexAlphas!==Gt||Dt.vertexTangents!==Kt||Dt.morphTargets!==Ct||Dt.morphNormals!==$t||Dt.morphColors!==Re||Dt.morphTargetsCount!==Oe||Dt.numLightProbeGrids!==Al(R.state.lightProbeGridArray)?oe=!0:(Dt.outputColorSpace!==Mt||Dt.toneMapping!==pe)&&(rn=!0):(oe=!0,Dt.__version=j.version);let ze=Dt.currentProgram;(oe===!0||rn===!0)&&(ze=rn===!0?Tu(j,D,k,Mt,pe):as(j,D,k),U&&j.isNodeMaterial&&U.onUpdateProgram(j,ze,Dt));let tr=!1,ji=!1,an=!1,se=ze.getUniforms(),De=Dt.uniforms;if(it.useProgram(ze.program)&&(tr=!0,ji=!0,an=!0),j.id!==G&&(G=j.id,ji=!0),tr||X!==x){it.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),se.setValue(P,"projectionMatrix",x.projectionMatrix),se.setValue(P,"viewMatrix",x.matrixWorldInverse);let be=se.map.cameraPosition;be!==void 0&&be.setValue(P,me.setFromMatrixPosition(x.matrixWorld)),xt.logarithmicDepthBuffer&&se.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&se.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),X!==x&&(X=x,ji=!0,an=!0)}if(Dt.needsLights&&(He.state.sunShadowMap.length>0&&se.setValue(P,"sunShadowMap",He.state.sunShadowMap,bt),He.state.directionalShadowMap.length>0&&se.setValue(P,"directionalShadowMap",He.state.directionalShadowMap,bt),He.state.spotShadowMap.length>0&&se.setValue(P,"spotShadowMap",He.state.spotShadowMap,bt),He.state.pointShadowMap.length>0&&se.setValue(P,"pointShadowMap",He.state.pointShadowMap,bt)),k.isSkinnedMesh){se.setOptional(P,k,"bindMatrix"),se.setOptional(P,k,"bindMatrixInverse");let xe=k.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),se.setValue(P,"boneTexture",xe.boneTexture,bt))}k.isBatchedMesh&&(se.setOptional(P,k,"batchingTexture"),se.setValue(P,"batchingTexture",k._matricesTexture,bt),se.setOptional(P,k,"batchingIdTexture"),se.setValue(P,"batchingIdTexture",k._indirectTexture,bt),se.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&se.setValue(P,"batchingColorTexture",k._colorsTexture,bt));let ai=Q.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&K.update(k,Q,ze),(ji||Dt.receiveShadow!==k.receiveShadow)&&(Dt.receiveShadow=k.receiveShadow,se.setValue(P,"receiveShadow",k.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&D.environment!==null&&(De.envMapIntensity.value=D.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=sg()),ji){if(se.setValue(P,"toneMappingExposure",w.toneMappingExposure),Dt.needsLights&&bu(De,an),Et&&j.fog===!0&&rt.refreshFogUniforms(De,Et),rt.refreshMaterialUniforms(De,j,gt,Pt,R.state.transmissionRenderTarget[x.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let xe=I,be=0;for(let Ti of R.state.lightProbeGridArray)Ti.texture!==null&&(xe.textures[be]=Ti.texture,xe.min[be]=Ti.boundingBox.min,xe.max[be]=Ti.boundingBox.max,xe.resolution[be]=Ti.resolution,be++);for(let Ti in xe)xe[Ti].length=be;De.probesSH.value=xe.textures,De.probesMin.value=xe.min,De.probesMax.value=xe.max,De.probesResolution.value=xe.resolution}ts.upload(P,Rl(Dt),De,bt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ts.upload(P,Rl(Dt),De,bt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&se.setValue(P,"center",k.center),se.setValue(P,"modelViewMatrix",k.modelViewMatrix),se.setValue(P,"normalMatrix",k.normalMatrix),se.setValue(P,"modelMatrix",k.matrixWorld),j.uniformsGroups!==void 0){let xe=j.uniformsGroups;for(let be=0,Ti=xe.length;be<Ti;be++){let Tl=xe[be];wt.update(Tl,ze),wt.bind(Tl,ze)}}return ze}function bu(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.sunLights.needsUpdate=D,x.sunLightShadows.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Nu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(x,D,Q){let j=pt.get(x);j.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),pt.get(x.texture).__webglTexture=D,pt.get(x.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let Q=pt.get(x);Q.__webglFramebuffer=D,Q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,Q=0){$=x,V=D,B=Q;let j=null,k=!1,Et=!1;if(x){let Mt=pt.get(x);if(Mt.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(P.FRAMEBUFFER,Mt.__webglFramebuffer),tt.copy(x.viewport),ft.copy(x.scissor),St=x.scissorTest,it.viewport(tt),it.scissor(ft),it.setScissorTest(St),G=-1;return}else if(Mt.__webglFramebuffer===void 0)bt.setupRenderTarget(x);else if(Mt.__hasExternalTextures)bt.rebindTextures(x,pt.get(x.texture).__webglTexture,pt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Gt=x.depthTexture;if(Mt.__boundDepthTexture!==Gt){if(Gt!==null&&pt.has(Gt)&&(x.width!==Gt.image.width||x.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");bt.setupDepthRenderbuffer(x)}}let Tt=x.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(Et=!0);let _t=pt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(_t[D])?j=_t[D][Q]:j=_t[D],k=!0):x.samples>0&&bt.useMultisampledRTT(x)===!1?j=pt.get(x).__webglMultisampledFramebuffer:Array.isArray(_t)?j=_t[Q]:j=_t,tt.copy(x.viewport),ft.copy(x.scissor),St=x.scissorTest}else tt.copy(st).multiplyScalar(gt).floor(),ft.copy(yt).multiplyScalar(gt).floor(),St=Rt;if(Q!==0&&(j=H),it.bindFramebuffer(P.FRAMEBUFFER,j)&&it.drawBuffers(x,j),it.viewport(tt),it.scissor(ft),it.setScissorTest(St),k){let Mt=pt.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,Q)}else if(Et){let Mt=D;for(let Tt=0;Tt<x.textures.length;Tt++){let _t=pt.get(x.textures[Tt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Tt,_t.__webglTexture,Q,Mt)}}else if(x!==null&&Q!==0){let Mt=pt.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mt.__webglTexture,Q)}G=-1};function vl(x){let D=pt.get(x);return(D.__readFormat!==x.format||D.__readType!==x.type)&&(D.__readFormat=x.format,D.__readType=x.type,D.__formatReadable=xt.textureFormatReadable(x.format),D.__typeReadable=xt.textureTypeReadable(x.type)),D}this.readRenderTargetPixels=function(x,D,Q,j,k,Et,Nt,Mt=0){if(!(x&&x.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=pt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Nt!==void 0&&(Tt=Tt[Nt],Array.isArray(Tt)&&(Tt=Tt[0])),Tt){it.bindFramebuffer(P.FRAMEBUFFER,Tt);try{let _t=x.textures[Mt],Gt=_t.format,Kt=_t.type;x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Mt);let Ct=vl(_t);if(Ct.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-j&&Q>=0&&Q<=x.height-k&&P.readPixels(D,Q,j,k,at.convert(Gt),at.convert(Kt),Et)}finally{let _t=$!==null?pt.get($).__webglFramebuffer:null;it.bindFramebuffer(P.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(x,D,Q,j,k,Et,Nt,Mt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=pt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Nt!==void 0&&(Tt=Tt[Nt],Array.isArray(Tt)&&(Tt=Tt[0])),Tt)if(D>=0&&D<=x.width-j&&Q>=0&&Q<=x.height-k){it.bindFramebuffer(P.FRAMEBUFFER,Tt);let _t=x.textures[Mt],Gt=_t.format,Kt=_t.type;x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Mt);let Ct=vl(_t);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.bufferData(P.PIXEL_PACK_BUFFER,Et.byteLength,P.STREAM_READ),P.readPixels(D,Q,j,k,at.convert(Gt),at.convert(Kt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Re=$!==null?pt.get($).__webglFramebuffer:null;it.bindFramebuffer(P.FRAMEBUFFER,Re);let pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bc(P,pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Et),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer($t),P.deleteSync(pe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,Q=0){let j=Math.pow(2,-Q),k=Math.floor(x.image.width*j),Et=Math.floor(x.image.height*j),Nt=D!==null?D.x:0,Mt=D!==null?D.y:0;bt.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,Q,0,0,Nt,Mt,k,Et),it.unbindTexture()},this.copyTextureToTexture=function(x,D,Q=null,j=null,k=0,Et=0){let Nt,Mt,Tt,_t,Gt,Kt,Ct,$t,Re,pe=x.isCompressedTexture?x.mipmaps[Et]:x.image;if(Q!==null)Nt=Q.max.x-Q.min.x,Mt=Q.max.y-Q.min.y,Tt=Q.isBox3?Q.max.z-Q.min.z:1,_t=Q.min.x,Gt=Q.min.y,Kt=Q.isBox3?Q.min.z:0;else{let se=Math.pow(2,-k);Nt=Math.floor(pe.width*se),Mt=Math.floor(pe.height*se),x.isDataArrayTexture?Tt=pe.depth:x.isData3DTexture?Tt=Math.floor(pe.depth*se):Tt=1,_t=0,Gt=0,Kt=0}j!==null?(Ct=j.x,$t=j.y,Re=j.z):(Ct=0,$t=0,Re=0);let fe=at.convert(D.format),Oe=at.convert(D.type),Dt;D.isData3DTexture?(bt.setTexture3D(D,0),Dt=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(bt.setTexture2DArray(D,0),Dt=P.TEXTURE_2D_ARRAY):(bt.setTexture2D(D,0),Dt=P.TEXTURE_2D),it.activeTexture(P.TEXTURE0),it.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),it.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),it.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let He=it.getParameter(P.UNPACK_ROW_LENGTH),oe=it.getParameter(P.UNPACK_IMAGE_HEIGHT),rn=it.getParameter(P.UNPACK_SKIP_PIXELS),ze=it.getParameter(P.UNPACK_SKIP_ROWS),tr=it.getParameter(P.UNPACK_SKIP_IMAGES);it.pixelStorei(P.UNPACK_ROW_LENGTH,pe.width),it.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pe.height),it.pixelStorei(P.UNPACK_SKIP_PIXELS,_t),it.pixelStorei(P.UNPACK_SKIP_ROWS,Gt),it.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt);let ji=x.isDataArrayTexture||x.isData3DTexture,an=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let se=pt.get(x),De=pt.get(D),ai=pt.get(se.__renderTarget),xe=pt.get(De.__renderTarget);it.bindFramebuffer(P.READ_FRAMEBUFFER,ai.__webglFramebuffer),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let be=0;be<Tt;be++)ji&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pt.get(x).__webglTexture,k,Kt+be),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pt.get(D).__webglTexture,Et,Re+be)),P.blitFramebuffer(_t,Gt,_t+Nt,Gt+Mt,Ct,$t,Ct+Nt,$t+Mt,P.DEPTH_BUFFER_BIT,P.NEAREST);it.bindFramebuffer(P.READ_FRAMEBUFFER,null),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||pt.has(x)){let se=pt.get(x),De=pt.get(D);it.bindFramebuffer(P.READ_FRAMEBUFFER,L),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,F);for(let ai=0;ai<Tt;ai++)ji?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,se.__webglTexture,k,Kt+ai):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,se.__webglTexture,k),an?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.__webglTexture,Et,Re+ai):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,De.__webglTexture,Et),k!==0?P.blitFramebuffer(_t,Gt,_t+Nt,Gt+Mt,Ct,$t,Ct+Nt,$t+Mt,P.COLOR_BUFFER_BIT,P.NEAREST):an?P.copyTexSubImage3D(Dt,Et,Ct,$t,Re+ai,_t,Gt,Nt,Mt):P.copyTexSubImage2D(Dt,Et,Ct,$t,_t,Gt,Nt,Mt);it.bindFramebuffer(P.READ_FRAMEBUFFER,null),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else an?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(Dt,Et,Ct,$t,Re,Nt,Mt,Tt,fe,Oe,pe.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Dt,Et,Ct,$t,Re,Nt,Mt,Tt,fe,pe.data):P.texSubImage3D(Dt,Et,Ct,$t,Re,Nt,Mt,Tt,fe,Oe,pe):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Et,Ct,$t,Nt,Mt,fe,Oe,pe.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Et,Ct,$t,pe.width,pe.height,fe,pe.data):P.texSubImage2D(P.TEXTURE_2D,Et,Ct,$t,Nt,Mt,fe,Oe,pe);it.pixelStorei(P.UNPACK_ROW_LENGTH,He),it.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),it.pixelStorei(P.UNPACK_SKIP_PIXELS,rn),it.pixelStorei(P.UNPACK_SKIP_ROWS,ze),it.pixelStorei(P.UNPACK_SKIP_IMAGES,tr),Et===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&P.generateMipmap(Dt),it.unbindTexture()},this.initRenderTarget=function(x){pt.get(x).__webglFramebuffer===void 0&&bt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?bt.setTextureCube(x,0):x.isData3DTexture?bt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?bt.setTexture2DArray(x,0):bt.setTexture2D(x,0),it.unbindTexture()},this.resetState=function(){V=0,B=0,$=null,it.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ja=class extends Pi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new qi;t.deleteAttribute("uv");let e=new pn({side:_e}),i=new pn,s=new zs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new de(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new vs(t,i,6),o=new Ce;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new de(t,ns(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new de(t,ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new de(t,ns(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new de(t,ns(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new de(t,ns(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new de(t,ns(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ns(n){return new Cs({color:0,emissive:16777215,emissiveIntensity:n})}var ss={silkNormal:"/assets/li/silkNormal.jpg",silkRoughness:"/assets/li/silkRoughness.jpg",silkColor:"/assets/li/silkColor.jpg",paperColor:"/assets/li/paperColor.jpg",paperBump:"/assets/li/paperBump.jpg",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTIyLjQiIGhlaWdodD0iMTQwNy40IiB2aWV3Qm94PSItMTE4LjIgLTk1Mi4yIDQ1MjIuNCAxNDA3LjQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTM2NSAxMTVRMTM1MCAxMTMgMTMyNC4wIDEwNy41UTEyOTggMTAyIDEyNzEuMCA4Ni4wUTEyNDQgNzAgMTIyNS4wIDM3LjVRMTIwNiA1IDEyMDYgLTQ5UTEyMDYgLTExMSAxMjMxLjUgLTE4NS41UTEyNTcgLTI2MCAxMjk0LjAgLTM0MS4wUTEzMzEgLTQyMiAxMzY1IC01MDFRMTM5MiAtNTY0IDEzOTIgLTU5N1ExMzkyIC02MzAgMTM2NyAtNjMwUTEzMzkgLTYzMCAxMjgzLjUgLTU4NS41UTEyMjggLTU0MSAxMTU1IC00NTFRMTEzNiAtNDI3IDExMDYuMCAtMzg0LjVRMTA3NiAtMzQyIDEwNDIuMCAtMjkwLjVRMTAwOCAtMjM5IDk3NS41IC0xODYuNVE5NDMgLTEzNCA5MTguNSAtOTAuMFE4OTQgLTQ2IDg4MyAtMjBRODcwIDExIDg1My4wIDIyLjVRODM2IDM0IDgyMSAzNFE4MDggMzQgNzk5IDI3UTc4OSAyMCA3ODkgMTBRNzg5IDQgNzkyIDBRNzk4IC0xMiA4MjIuMCAtNTUuMFE4NDYgLTk4IDg3OC4wIC0xNjkuMFE5MTAgLTI0MCA5MzkgLTMzNFE5NDggLTM2MyA5NTcuNSAtNDAxLjBROTY3IC00MzkgOTc1LjAgLTQ3OS41UTk4MyAtNTIwIDk4OC41IC01NTUuNVE5OTQgLTU5MSA5OTQgLTYxM1E5OTQgLTY0OCA5ODIuMCAtNjY0LjVROTcwIC02ODEgOTUwIC02ODFROTI4IC02ODEgOTAwLjAgLTY2Mi4wUTg3MiAtNjQzIDg0MyAtNjA3UTc5MyAtNTQ0IDc1NS4wIC00OTAuNVE3MTcgLTQzNyA2ODUuNSAtMzg0LjBRNjU0IC0zMzEgNjIzLjUgLTI3MS4wUTU5MyAtMjExIDU1OS4wIC0xMzYuNVE1MjUgLTYyIDQ4MSAzNlE0NzQgNTIgNDU3LjUgNTkuMFE0NDEgNjYgNDI3IDY2UTQxMyA2NiA0MDQuMCA2MC4wUTM5NSA1NCAzOTggNDNRNDIwIDggNDQ3LjAgLTQ0LjVRNDc0IC05NyA1MDIuMCAtMTYxLjBRNTMwIC0yMjUgNTU2LjAgLTI5NC4wUTU4MiAtMzYzIDYwMi41IC00MjkuMFE2MjMgLTQ5NSA2MzUuMCAtNTUzLjBRNjQ3IC02MTEgNjQ3IC02NTJRNjQ3IC03MjkgNjE0LjUgLTc2Mi4wUTU4MiAtNzk1IDUzMSAtNzk1UTQ4NiAtNzk1IDQzMi4wIC03NzMuMFEzNzggLTc1MSAzMjMuNSAtNzEzLjBRMjY5IC02NzUgMjIxIC02MjdRMTUyIC01NTggMTEyLjUgLTQ3Ny4wUTczIC0zOTYgNzMgLTMxM1E3MyAtMjU3IDk0LjAgLTIxOC4wUTExNSAtMTc5IDE0OS41IC0xNTkuMFExODQgLTEzOSAyMjYgLTEzOVEyNjkgLTEzOSAzMDYuNSAtMTYwLjVRMzQ0IC0xODIgMzcyLjUgLTIxNi41UTQwMSAtMjUxIDQxNy4wIC0yODkuNVE0MzMgLTMyOCA0MzMgLTM2MlE0MzMgLTM5MSA0MTcuMCAtNDEwLjBRNDAxIC00MjkgMzY2IC00MjlRMzYyIC00MjkgMzU3LjUgLTQyOC41UTM1MyAtNDI4IDM0OCAtNDI4SDM0NVEzMzggLTQyOCAzMzIuMCAtNDMwLjVRMzI2IC00MzMgMzI2IC00MzdRMzI2IC00NDEgMzM2LjUgLTQ0Ni4wUTM0NyAtNDUxIDM3NSAtNDUxUTQyMCAtNDUxIDQ0Mi41IC00MjQuNVE0NjUgLTM5OCA0NjUgLTM1N1E0NjUgLTMxNyA0NDQuNSAtMjc1LjBRNDI0IC0yMzMgMzg5LjAgLTE5Ny4wUTM1NCAtMTYxIDMxMC41IC0xMzkuMFEyNjcgLTExNyAyMjEgLTExN1ExNjcgLTExNyAxMjAuNSAtMTQyLjBRNzQgLTE2NyA0Ni4wIC0yMTQuNVExOCAtMjYyIDE4IC0zMjhRMTggLTM5MSA0NC4wIC00NTIuNVE3MCAtNTE0IDExMS41IC01NjguNVExNTMgLTYyMyAyMDAgLTY2NVEyNTIgLTcxMiAzMTAuMCAtNzQ1LjVRMzY4IC03NzkgNDI1LjUgLTc5Ny41UTQ4MyAtODE2IDUzMyAtODE2UTYwNyAtODE2IDY1NS41IC03NzIuMFE3MDQgLTcyOCA3MDQgLTYzMFE3MDQgLTU5MCA2OTMuMCAtNTM4LjVRNjgyIC00ODcgNjY3LjAgLTQzNS41UTY1MiAtMzg0IDYzOCAtMzQ0SDY0MFE2NzYgLTQwOSA3MDQuNSAtNDU1LjVRNzMzIC01MDIgNzYyLjAgLTU0Mi4wUTc5MSAtNTgyIDgyNyAtNjI2UTg1OCAtNjYzIDg5OC4wIC02ODUuMFE5MzggLTcwNyA5NzUgLTcwN1ExMDA4IC03MDcgMTAzMS4wIC02ODUuMFExMDU0IC02NjMgMTA1NCAtNjEwUTEwNTQgLTYwNCAxMDU0LjAgLTYwMC4wUTEwNTQgLTU5NiAxMDUzIC01ODhRMTA0NCAtNDkyIDEwMTUuMCAtMzk5LjVROTg2IC0zMDcgOTU1IC0yMTNROTg2IC0yNjEgMTAzOS4wIC0zMzUuMFExMDkyIC00MDkgMTE1NSAtNDg4UTEyMzIgLTU4NCAxMjk4LjAgLTYzMi4wUTEzNjQgLTY4MCAxNDA3IC02ODBRMTQ2MSAtNjgwIDE0NjEgLTYxNFExNDYxIC01ODkgMTQ1MS41IC01NTQuMFExNDQyIC01MTkgMTQyMiAtNDgwUTE0MDAgLTQzNiAxMzczLjUgLTM3OC41UTEzNDcgLTMyMSAxMzIzLjAgLTI1OC4wUTEyOTkgLTE5NSAxMjgzLjUgLTEzNC41UTEyNjggLTc0IDEyNjggLTIzUTEyNjggMzIgMTI5My41IDY1LjVRMTMxOSA5OSAxMzgyIDk5SDEzODhRMTQwMyA5OSAxNDAzIDEwNVExNDAzIDEwOSAxMzkzLjAgMTEzLjBRMTM4MyAxMTcgMTM2NSAxMTVaTTEyOTkgOFExMzM1IC02NSAxMzY4LjAgLTEzNi41UTE0MDEgLTIwOCAxNDM2IC0yNzNRMTQ1NiAtMzA5IDE0NzAuMCAtMzIzLjVRMTQ4NCAtMzM4IDE1MDcgLTMzOFExNTE1IC0zMzggMTUyNC4wIC0zMzUuNVExNTMzIC0zMzMgMTU0MiAtMzMzUTE1NDggLTMzMyAxNTUxIC0zMzRRMTUzNyAtMzI2IDE1MTQuNSAtMjk0LjVRMTQ5MiAtMjYzIDE0NjkuMCAtMjIyLjBRMTQ0NiAtMTgxIDE0MjggLTE0NVExNDQ3IC0xNjggMTQ2OC4wIC0xOTEuMFExNDg5IC0yMTQgMTUxNCAtMjM1UTE1MzggLTI1NiAxNTcxLjUgLTI3OC41UTE2MDUgLTMwMSAxNjM3LjAgLTMxNi4wUTE2NjkgLTMzMSAxNjg4IC0zMzFRMTY5NSAtMzMxIDE2OTggLTMzMFExNjk4IC0zMzAgMTY4Ny4wIC0zMTAuNVExNjc2IC0yOTEgMTY1OS41IC0yNTkuNVExNjQzIC0yMjggMTYyNi4wIC0xOTIuNVExNjA5IC0xNTcgMTU5NS41IC0xMjQuNVExNTgyIC05MiAxNTc4IC03MFExNTc1IC01NyAxNTc1IC00NlExNTc1IC0zMCAxNTgxLjAgLTI1LjBRMTU4NyAtMjAgMTU5NCAtMjBRMTYxMyAtMjAgMTYzMy4wIC0zNy4wUTE2NTMgLTU0IDE2NzEuNSAtODAuNVExNjkwIC0xMDcgMTcwNi4wIC0xMzcuMFExNzIyIC0xNjcgMTczMyAtMTkzUTE3NDUgLTE5MyAxNzQ1IC0xODRRMTczNCAtMTU3IDE3MTcuNSAtMTI0LjVRMTcwMSAtOTIgMTY4MC41IC02My4wUTE2NjAgLTM0IDE2MzUuMCAtMTUuMFExNjEwIDQgMTU4MSA0UTE1NjEgNCAxNTM5LjUgLTEwLjBRMTUxOCAtMjQgMTUxOCAtNjJRMTUxOCAtNzMgMTUyMC4wIC04NS41UTE1MjIgLTk4IDE1MjcgLTExM1ExNTM1IC0xMzMgMTU0Ni4wIC0xNTYuMFExNTU3IC0xNzkgMTU4MiAtMjE5UTE1ODkgLTIzMCAxNTkwLjUgLTIzNi4wUTE1OTIgLTI0MiAxNTkyIC0yNDZRMTU5MiAtMjU4IDE1ODEgLTI1OFExNTcyIC0yNTggMTU1NC41IC0yNDguMFExNTM3IC0yMzggMTUxMSAtMjEzUTE0ODYgLTE4OSAxNDUxLjUgLTE0NS4wUTE0MTcgLTEwMSAxMzcyIC0xNVExMzY1IC0yIDEzNTYuNSAtMS4wUTEzNDggMCAxMzMzIDFRMTMyMyAyIDEzMTQuMCAyLjVRMTMwNSAzIDEyOTkgOFpNMTM3MiAzMTlRMTMyMCAzMTkgMTI5OC41IDI5OC41UTEyNzcgMjc4IDEyNzcgMjUwUTEyNzcgMjIzIDEyOTIgMTk2UTEzMDYgMTY3IDEzMzEuMCAxNDYuNVExMzU2IDEyNiAxMzg2IDExMlExNDM3IDg4IDE1MDMuNSA3My4wUTE1NzAgNTggMTYzMSA0MFExNjM5IDI2IDE2NDcuNSAxMS4wUTE2NTYgLTQgMTY2MyAtMThRMTY4MyAtNTggMTcwMC4wIC05Ny41UTE3MTcgLTEzNyAxNzQyIC0xODNRMTczMyAtMTgzIDE3MzMgLTE5M0wxNzc3IC0yOTRRMTc3OCAtMjk2IDE3NzkuMCAtMjk5LjVRMTc4MCAtMzAzIDE3ODAgLTMwN1ExNzgwIC0zMTggMTc3NS4wIC0zMjUuNVExNzcwIC0zMzMgMTc2OCAtMzM2TDE4MjMgLTMzOEgxODI4UTE4NTAgLTMzOCAxODUwIC0zMjRRMTg1MCAtMzE3IDE4NDQgLTMwMkwxNzY0IC0xMTRRMTc1MCAtODEgMTczNC4wIC00OC4wUTE3MTggLTE1IDE3MDEgMTlRMTc3MSAtOCAxODEyLjUgLTQ3LjVRMTg1NCAtODcgMTg3Ni41IC0xMjYuNVExODk5IC0xNjYgMTkxMSAtMTkzUTE5MjMgLTE5MyAxOTIzIC0xODRRMTkxMyAtMTYyIDE4OTcuMCAtMTMxLjVRMTg4MSAtMTAxIDE4NTUuMCAtNjcuNVExODI5IC0zNCAxNzg4LjAgLTMuMFExNzQ3IDI4IDE2ODUgNTFRMTY2MSA5NCAxNjMwLjAgMTQwLjVRMTU5OSAxODcgMTU2MC4wIDIyNy41UTE1MjEgMjY4IDE0NzQuNSAyOTMuNVExNDI4IDMxOSAxMzcyIDMxOVpNMTM0OCAyOTlRMTM4MSAyOTkgMTQxNi41IDI3OS4wUTE0NTIgMjU5IDE0ODUuMCAyMjguNVExNTE4IDE5OCAxNTQ1LjUgMTY2LjBRMTU3MyAxMzQgMTU5MCAxMTBRMTU5NiAxMDIgMTYwMS4wIDkyLjBRMTYwNiA4MiAxNjExIDcyUTE1NjMgODUgMTUwNS4wIDEwMC41UTE0NDcgMTE2IDE0MDMgMTM1UTEzNTUgMTU1IDEzMjguMCAxOTEuNVExMzAxIDIyOCAxMzAxIDI1N1ExMzAxIDI3NiAxMzEyLjUgMjg3LjVRMTMyNCAyOTkgMTM0OCAyOTlaTTE4NTIgLTQwMFExODM5IC00MDAgMTgyOS41IC00MTAuMFExODIwIC00MjAgMTgyMCAtNDM0UTE4MjAgLTQ1MSAxODM0LjAgLTQ2NC41UTE4NDggLTQ3OCAxODY1IC00NzhRMTg3OSAtNDc4IDE4ODkuMCAtNDY5LjBRMTg5OSAtNDYwIDE4OTkgLTQ0NlExODk5IC00MjggMTg4NS4wIC00MTQuMFExODcxIC00MDAgMTg1MiAtNDAwWk0yMTI4IDNRMjEwNSAzIDIwODcuNSAtMTAuMFEyMDcwIC0yMyAyMDcwIC02M1EyMDcwIC04MCAyMDcyLjUgLTk1LjBRMjA3NSAtMTEwIDIwNzkgLTEyN1EyMDcwIC0xMTIgMjA1NC4wIC05MC4wUTIwMzggLTY4IDIwMTguNSAtNDcuMFExOTk5IC0yNiAxOTc4LjUgLTEyLjBRMTk1OCAyIDE5NDAgMlExOTE0IDIgMTg5OC4wIC0yMS41UTE4ODIgLTQ1IDE4ODIgLTgzUTE4ODIgLTEyNCAxOTAxLjAgLTE3MS4wUTE5MjAgLTIxOCAxOTUzLjAgLTI2MS4wUTE5ODYgLTMwNCAyMDI5LjAgLTMzMS4wUTIwNzIgLTM1OCAyMTE5IC0zNThRMjE0MiAtMzU4IDIxNjMuMCAtMzUwLjVRMjE4NCAtMzQzIDIyMDAgLTMyNlEyMjA3IC0zMTkgMjIwNyAtMzEwUTIyMDcgLTMwNCAyMjAyLjAgLTMwMC4wUTIxOTcgLTI5NiAyMTg5IC0yOThRMjE3OCAtMzMzIDIxNDIgLTMzM1EyMTI1IC0zMzMgMjEwMyAtMzIyUTIwNzYgLTMwOCAyMDQ1LjUgLTI3Ny41UTIwMTUgLTI0NyAxOTg4LjUgLTIwOC41UTE5NjIgLTE3MCAxOTQ1LjAgLTEzMS4wUTE5MjggLTkyIDE5MjggLTYwUTE5MjggLTI3IDE5NTMgLTI3UTE5NzUgLTI3IDE5OTguNSAtNDguMFEyMDIyIC02OSAyMDQzLjUgLTEwMC41UTIwNjUgLTEzMiAyMDgzLjAgLTE2My4wUTIxMDEgLTE5NCAyMTExIC0yMTNRMjEyNiAtMjQwIDIxMzkuMCAtMjU4LjBRMjE1MiAtMjc2IDIxNzYgLTI3NlEyMTg3IC0yNzYgMjE5OC4wIC0yNzMuMFEyMjA5IC0yNzAgMjIyMSAtMjcyUTIxOTEgLTI0MiAyMTY4LjUgLTIwMS4wUTIxNDYgLTE2MCAyMTM0LjAgLTEyMC41UTIxMjIgLTgxIDIxMjIgLTU0UTIxMjIgLTI0IDIxNDIgLTI0UTIxNTggLTI0IDIxNzYuNSAtNDIuMFEyMTk1IC02MCAyMjEyLjUgLTg3LjVRMjIzMCAtMTE1IDIyNDUuMCAtMTQzLjVRMjI2MCAtMTcyIDIyNjkgLTE5M1EyMjc0IC0xOTMgMjI3Ny41IC0xOTIuMFEyMjgxIC0xOTEgMjI4MSAtMTg0UTIyODAgLTE4MCAyMjc3LjUgLTE3NS41UTIyNzUgLTE3MSAyMjcwIC0xNjBRMjI2MiAtMTQ0IDIyNDguMCAtMTE3LjBRMjIzNCAtOTAgMjIxNS4wIC02Mi41UTIxOTYgLTM1IDIxNzQuMCAtMTYuMFEyMTUyIDMgMjEyOCAzWk0yMjk4IDBRMjI4NyAwIDIyNzEuNSAtNS4wUTIyNTYgLTEwIDIyNDQuNSAtMjMuNVEyMjMzIC0zNyAyMjMzIC02NFEyMjMzIC05MCAyMjUwLjAgLTEyNC4wUTIyNjcgLTE1OCAyMjgwIC0xODRRMjI2OSAtMTg0IDIyNjkgLTE5M1EyMjcwIC0xOTYgMjI3OC4wIC0yMTIuMFEyMjg2IC0yMjggMjI5Ny4wIC0yNTAuMFEyMzA4IC0yNzIgMjMxOC41IC0yOTIuNVEyMzI5IC0zMTMgMjMzNSAtMzI0UTIzNDcgLTM0NiAyMzczIC0zNDZIMjQzNVEyNDE4IC0zMzMgMjQwNC41IC0zMTcuNVEyMzkxIC0zMDIgMjM3MSAtMjYxUTIzNzEgLTI2MSAyMzY0LjAgLTI0Ny4wUTIzNTcgLTIzMyAyMzQ2LjUgLTIxMS41UTIzMzYgLTE5MCAyMzI1LjUgLTE2OC4wUTIzMTUgLTE0NiAyMzA4IC0xMzFRMjI5NSAtMTAzIDIyOTEuMCAtODYuNVEyMjg3IC03MCAyMjg3IC01NlEyMjg3IC0yMyAyMzA5IC0yM1EyMzMzIC0yMyAyMzY3IC02MlEyMzk1IC05NSAyNDIyLjAgLTE0MS4wUTI0NDkgLTE4NyAyNDczLjUgLTIzNi4wUTI0OTggLTI4NSAyNTE3IC0zMjRRMjUyOCAtMzQ2IDI1NTYgLTM0NkgyNjExUTI1ODkgLTMyOCAyNTY2LjUgLTI5Mi4wUTI1NDQgLTI1NiAyNTE3IC0yMDBRMjUxMCAtMTg1IDI0OTkuMCAtMTYyLjBRMjQ4OCAtMTM5IDI0NzkuNSAtMTEzLjBRMjQ3MSAtODcgMjQ3MSAtNjFRMjQ3MSAtMjYgMjQ5NiAtMjZRMjUzMCAtMjYgMjU2Mi4wIC03My4wUTI1OTQgLTEyMCAyNjI1IC0xOTNRMjYzMyAtMTkzIDI2MzQuNSAtMTkyLjBRMjYzNiAtMTkxIDI2MzcgLTE4NFEyNjI2IC0xNTcgMjYxMC41IC0xMjUuNVEyNTk1IC05NCAyNTc1LjUgLTY1LjBRMjU1NiAtMzYgMjUzMi41IC0xOC4wUTI1MDkgMCAyNDgxIDBRMjQ1NiAwIDI0NDAuMCAtMTguNVEyNDI0IC0zNyAyNDI0IC03MVEyNDI0IC05OCAyNDM0IC0xMjlRMjQxNyAtOTkgMjM5NS4wIC02OS4wUTIzNzMgLTM5IDIzNDguMCAtMTkuNVEyMzIzIDAgMjI5OCAwWk0yNDY4IDI3M1EyNDU2IDI3MyAyNDQzLjUgMjY5LjVRMjQzMSAyNjYgMjQxOCAyNjhRMjQyNCAyNjIgMjQ0MS4wIDIzMy41UTI0NTggMjA1IDI0ODEuMCAxNjIuNVEyNTA0IDEyMCAyNTI4LjUgNzAuNVEyNTUzIDIxIDI1NzYuMCAtMjcuNVEyNTk5IC03NiAyNjE1LjUgLTExNy41UTI2MzIgLTE1OSAyNjM3IC0xODRRMjYzMiAtMTg0IDI2MjguMCAtMTg2LjBRMjYyNCAtMTg4IDI2MjUgLTE5M1EyNjI1IC0xOTMgMjYzMS4wIC0yMTEuMFEyNjM3IC0yMjkgMjY0My4wIC0yNTQuNVEyNjQ5IC0yODAgMjY0OSAtMzAxUTI2NDkgLTMxNSAyNjQ2LjAgLTMyNS4wUTI2NDMgLTMzNSAyNjM1IC0zMzZMMjY4NSAtMzQ0UTI2OTEgLTM0NSAyNjk2LjAgLTM0NS41UTI3MDEgLTM0NiAyNzA1IC0zNDZRMjcxNCAtMzQ2IDI3MTcuNSAtMzM5LjVRMjcyMSAtMzMzIDI3MjEgLTMxM1EyNzIxIC0yODggMjcxMi41IC0yNDkuNVEyNzA0IC0yMTEgMjY5MyAtMTgyUTI3MDQgLTIwMCAyNzIxLjUgLTIyOC4wUTI3MzkgLTI1NiAyNzYyLjAgLTI4NS4wUTI3ODUgLTMxNCAyODEwLjAgLTMzMy41UTI4MzUgLTM1MyAyODU5IC0zNTNRMjg2NCAtMzUzIDI4NzIgLTM1MVEyOTAwIC0zNDQgMjkxMS41IC0zMjMuNVEyOTIzIC0zMDMgMjkyMyAtMjc1UTI5MjMgLTI0NSAyOTExLjUgLTIwOS4wUTI5MDAgLTE3MyAyODgxLjAgLTEzOC41UTI4NjIgLTEwNCAyODM5IC03NlEyODExIC00MSAyNzcyLjAgLTIwLjBRMjczMyAxIDI2OTIgMVEyNjU1IDEgMjYyMyAtMThMMjUyOCAyMjFRMjUxNCAyNTEgMjUwMS4wIDI2Mi4wUTI0ODggMjczIDI0NjggMjczWk0yNjYwIC0yMFEyNjg4IC0yMCAyNzIzLjAgLTQ2LjBRMjc1OCAtNzIgMjc5MC41IC0xMTIuNVEyODIzIC0xNTMgMjg0NSAtMTk0UTI4NjAgLTIyMiAyODY3LjAgLTI0NS41UTI4NzQgLTI2OSAyODc0IC0yODZRMjg3NCAtMzI1IDI4NDYgLTMyNVEyODMzIC0zMjUgMjgxMi41IC0zMTEuMFEyNzkyIC0yOTcgMjc2NSAtMjYwUTI3MzYgLTIyMCAyNzAxLjUgLTE1OS41UTI2NjcgLTk5IDI2MzEgLTMyUTI2NDMgLTIwIDI2NjAgLTIwWk0yOTYyIC0xOTZRMjk3MCAtMjEzIDI5ODMuMCAtMjUwLjVRMjk5NiAtMjg4IDMwMTAuMCAtMzM0LjBRMzAyNCAtMzgwIDMwMzEgLTQyMVEzMDM0IC00MzcgMzA0Mi4wIC00NDQuNVEzMDUwIC00NTIgMzA1OSAtNDUyUTMwNzIgLTQ1MiAzMDgzLjAgLTQzOS41UTMwOTQgLTQyNyAzMDk0IC00MDRRMzA5NCAtMzc2IDMwNzcuNSAtMzU2LjBRMzA2MSAtMzM2IDMwMzcgLTMxOFEzMDQ3IC0zMTcgMzA1OC4wIC0zMTYuNVEzMDY5IC0zMTYgMzA4MiAtMzE2UTMxMjkgLTMxNiAzMTc1IC0zMjJRMzE3NyAtMzE2IDMxNzcgLTMxM1EzMTc3IC0zMDAgMzE2OS41IC0yODAuMFEzMTYyIC0yNjAgMzE1NCAtMjQ0UTMxNTAgLTIzNSAzMTM4LjAgLTIxMS41UTMxMjYgLTE4OCAzMTEyLjAgLTE1OC41UTMwOTggLTEyOSAzMDg4LjUgLTEwMC41UTMwNzkgLTcyIDMwNzkgLTUyUTMwNzkgLTI2IDMwOTkgLTI2UTMxMTggLTI2IDMxNTIuMCAtNzAuNVEzMTg2IC0xMTUgMzIyMCAtMTkzUTMyMzIgLTE5MyAzMjMyIC0xODRRMzIyMSAtMTU3IDMyMDQuNSAtMTI1LjBRMzE4OCAtOTMgMzE2OC4wIC02NC41UTMxNDggLTM2IDMxMjUuMCAtMTcuNVEzMTAyIDEgMzA3NyAxUTMwNTggMSAzMDM5LjAgLTE0LjVRMzAyMCAtMzAgMzAyMCAtNjVRMzAyMCAtOTYgMzAzMi4wIC0xMjUuNVEzMDQ0IC0xNTUgMzA1OS4wIC0xODEuMFEzMDc0IC0yMDcgMzA4Ni4wIC0yMjcuMFEzMDk4IC0yNDcgMzA5OCAtMjU5UTMwOTggLTI3NyAzMDc1LjUgLTI4NS4wUTMwNTMgLTI5MyAzMDE3IC0yOTRRMjk5OSAtMjQ4IDI5OTAuMCAtMjI2LjBRMjk4MSAtMjA0IDI5NzMgLTE4NFEyOTU3IC0xODQgMjk2MiAtMTk2Wk0zMjIxIC0xOTZRMzIyOSAtMjEzIDMyNDIuMCAtMjUwLjVRMzI1NSAtMjg4IDMyNjkuMCAtMzM0LjBRMzI4MyAtMzgwIDMyOTAgLTQyMVEzMjkzIC00MzcgMzMwMS4wIC00NDQuNVEzMzA5IC00NTIgMzMxOCAtNDUyUTMzMzEgLTQ1MiAzMzQyLjAgLTQzOS41UTMzNTMgLTQyNyAzMzUzIC00MDRRMzM1MyAtMzc2IDMzMzYuNSAtMzU2LjBRMzMyMCAtMzM2IDMyOTYgLTMxOFEzMzA2IC0zMTcgMzMxNy4wIC0zMTYuNVEzMzI4IC0zMTYgMzM0MSAtMzE2UTMzODggLTMxNiAzNDM0IC0zMjJRMzQzNiAtMzE2IDM0MzYgLTMxM1EzNDM2IC0zMDAgMzQyOC41IC0yODAuMFEzNDIxIC0yNjAgMzQxMyAtMjQ0UTM0MDkgLTIzNSAzMzk3LjAgLTIxMS41UTMzODUgLTE4OCAzMzcxLjAgLTE1OC41UTMzNTcgLTEyOSAzMzQ3LjUgLTEwMC41UTMzMzggLTcyIDMzMzggLTUyUTMzMzggLTI2IDMzNTggLTI2UTMzNzcgLTI2IDM0MTEuMCAtNzAuNVEzNDQ1IC0xMTUgMzQ3OSAtMTkzUTM0OTEgLTE5MyAzNDkxIC0xODRRMzQ4MCAtMTU3IDM0NjMuNSAtMTI1LjBRMzQ0NyAtOTMgMzQyNy4wIC02NC41UTM0MDcgLTM2IDMzODQuMCAtMTcuNVEzMzYxIDEgMzMzNiAxUTMzMTcgMSAzMjk4LjAgLTE0LjVRMzI3OSAtMzAgMzI3OSAtNjVRMzI3OSAtOTYgMzI5MS4wIC0xMjUuNVEzMzAzIC0xNTUgMzMxOC4wIC0xODEuMFEzMzMzIC0yMDcgMzM0NS4wIC0yMjcuMFEzMzU3IC0yNDcgMzM1NyAtMjU5UTMzNTcgLTI3NyAzMzM0LjUgLTI4NS4wUTMzMTIgLTI5MyAzMjc2IC0yOTRRMzI1OCAtMjQ4IDMyNDkuMCAtMjI2LjBRMzI0MCAtMjA0IDMyMzIgLTE4NFEzMjE2IC0xODQgMzIyMSAtMTk2Wk0zNDgwIC0xOTZRMzQ4OCAtMjEzIDM1MDEuMCAtMjUwLjVRMzUxNCAtMjg4IDM1MjguMCAtMzM0LjBRMzU0MiAtMzgwIDM1NDkgLTQyMVEzNTUyIC00MzcgMzU2MC4wIC00NDQuNVEzNTY4IC00NTIgMzU3NyAtNDUyUTM1OTAgLTQ1MiAzNjAxLjAgLTQzOS41UTM2MTIgLTQyNyAzNjEyIC00MDRRMzYxMiAtMzc2IDM1OTUuNSAtMzU2LjBRMzU3OSAtMzM2IDM1NTUgLTMxOFEzNTY1IC0zMTcgMzU3Ni4wIC0zMTYuNVEzNTg3IC0zMTYgMzYwMCAtMzE2UTM2NDcgLTMxNiAzNjkzIC0zMjJRMzY5NSAtMzE2IDM2OTUgLTMxM1EzNjk1IC0zMDAgMzY4Ny41IC0yODAuMFEzNjgwIC0yNjAgMzY3MiAtMjQ0UTM2NjggLTIzNSAzNjU2LjAgLTIxMS41UTM2NDQgLTE4OCAzNjMwLjAgLTE1OC41UTM2MTYgLTEyOSAzNjA2LjUgLTEwMC41UTM1OTcgLTcyIDM1OTcgLTUyUTM1OTcgLTI2IDM2MTcgLTI2UTM2MzYgLTI2IDM2NzAuMCAtNzAuNVEzNzA0IC0xMTUgMzczOCAtMTkzUTM3NTAgLTE5MyAzNzUwIC0xODRRMzczOSAtMTU3IDM3MjIuNSAtMTI1LjBRMzcwNiAtOTMgMzY4Ni4wIC02NC41UTM2NjYgLTM2IDM2NDMuMCAtMTcuNVEzNjIwIDEgMzU5NSAxUTM1NzYgMSAzNTU3LjAgLTE0LjVRMzUzOCAtMzAgMzUzOCAtNjVRMzUzOCAtOTYgMzU1MC4wIC0xMjUuNVEzNTYyIC0xNTUgMzU3Ny4wIC0xODEuMFEzNTkyIC0yMDcgMzYwNC4wIC0yMjcuMFEzNjE2IC0yNDcgMzYxNiAtMjU5UTM2MTYgLTI3NyAzNTkzLjUgLTI4NS4wUTM1NzEgLTI5MyAzNTM1IC0yOTRRMzUxNyAtMjQ4IDM1MDguMCAtMjI2LjBRMzQ5OSAtMjA0IDM0OTEgLTE4NFEzNDc1IC0xODQgMzQ4MCAtMTk2Wk0zNzM5IC0xOTZRMzc0NyAtMjEzIDM3NjAuMCAtMjUwLjVRMzc3MyAtMjg4IDM3ODcuMCAtMzM0LjBRMzgwMSAtMzgwIDM4MDggLTQyMVEzODExIC00MzcgMzgxOS4wIC00NDQuNVEzODI3IC00NTIgMzgzNiAtNDUyUTM4NDkgLTQ1MiAzODYwLjAgLTQzOS41UTM4NzEgLTQyNyAzODcxIC00MDRRMzg3MSAtMzc2IDM4NTQuNSAtMzU2LjBRMzgzOCAtMzM2IDM4MTQgLTMxOFEzODI0IC0zMTcgMzgzNS4wIC0zMTYuNVEzODQ2IC0zMTYgMzg1OSAtMzE2UTM5MDYgLTMxNiAzOTUyIC0zMjJRMzk1NCAtMzE2IDM5NTQgLTMxM1EzOTU0IC0zMDAgMzk0Ni41IC0yODAuMFEzOTM5IC0yNjAgMzkzMSAtMjQ0UTM5MjcgLTIzNSAzOTE1LjAgLTIxMS41UTM5MDMgLTE4OCAzODg5LjAgLTE1OC41UTM4NzUgLTEyOSAzODY1LjUgLTEwMC41UTM4NTYgLTcyIDM4NTYgLTUyUTM4NTYgLTI2IDM4NzYgLTI2UTM4OTUgLTI2IDM5MjkuMCAtNzAuNVEzOTYzIC0xMTUgMzk5NyAtMTkzUTQwMDkgLTE5MyA0MDA5IC0xODRRMzk5OCAtMTU3IDM5ODEuNSAtMTI1LjBRMzk2NSAtOTMgMzk0NS4wIC02NC41UTM5MjUgLTM2IDM5MDIuMCAtMTcuNVEzODc5IDEgMzg1NCAxUTM4MzUgMSAzODE2LjAgLTE0LjVRMzc5NyAtMzAgMzc5NyAtNjVRMzc5NyAtOTYgMzgwOS4wIC0xMjUuNVEzODIxIC0xNTUgMzgzNi4wIC0xODEuMFEzODUxIC0yMDcgMzg2My4wIC0yMjcuMFEzODc1IC0yNDcgMzg3NSAtMjU5UTM4NzUgLTI3NyAzODUyLjUgLTI4NS4wUTM4MzAgLTI5MyAzNzk0IC0yOTRRMzc3NiAtMjQ4IDM3NjcuMCAtMjI2LjBRMzc1OCAtMjA0IDM3NTAgLTE4NFEzNzM0IC0xODQgMzczOSAtMTk2Wk0zOTk4IC0xOTZRNDAwNiAtMjEzIDQwMTkuMCAtMjUwLjVRNDAzMiAtMjg4IDQwNDYuMCAtMzM0LjBRNDA2MCAtMzgwIDQwNjcgLTQyMVE0MDcwIC00MzcgNDA3OC4wIC00NDQuNVE0MDg2IC00NTIgNDA5NSAtNDUyUTQxMDggLTQ1MiA0MTE5LjAgLTQzOS41UTQxMzAgLTQyNyA0MTMwIC00MDRRNDEzMCAtMzc2IDQxMTMuNSAtMzU2LjBRNDA5NyAtMzM2IDQwNzMgLTMxOFE0MDgzIC0zMTcgNDA5NC4wIC0zMTYuNVE0MTA1IC0zMTYgNDExOCAtMzE2UTQxNjUgLTMxNiA0MjExIC0zMjJRNDIxMyAtMzE2IDQyMTMgLTMxM1E0MjEzIC0zMDAgNDIwNS41IC0yODAuMFE0MTk4IC0yNjAgNDE5MCAtMjQ0UTQxODYgLTIzNSA0MTc0LjAgLTIxMS41UTQxNjIgLTE4OCA0MTQ4LjAgLTE1OC41UTQxMzQgLTEyOSA0MTI0LjUgLTEwMC41UTQxMTUgLTcyIDQxMTUgLTUyUTQxMTUgLTI2IDQxMzUgLTI2UTQxNTQgLTI2IDQxODguMCAtNzAuNVE0MjIyIC0xMTUgNDI1NiAtMTkzUTQyNjggLTE5MyA0MjY4IC0xODRRNDI1NyAtMTU3IDQyNDAuNSAtMTI1LjBRNDIyNCAtOTMgNDIwNC4wIC02NC41UTQxODQgLTM2IDQxNjEuMCAtMTcuNVE0MTM4IDEgNDExMyAxUTQwOTQgMSA0MDc1LjAgLTE0LjVRNDA1NiAtMzAgNDA1NiAtNjVRNDA1NiAtOTYgNDA2OC4wIC0xMjUuNVE0MDgwIC0xNTUgNDA5NS4wIC0xODEuMFE0MTEwIC0yMDcgNDEyMi4wIC0yMjcuMFE0MTM0IC0yNDcgNDEzNCAtMjU5UTQxMzQgLTI3NyA0MTExLjUgLTI4NS4wUTQwODkgLTI5MyA0MDUzIC0yOTRRNDAzNSAtMjQ4IDQwMjYuMCAtMjI2LjBRNDAxNyAtMjA0IDQwMDkgLTE4NFEzOTkzIC0xODQgMzk5OCAtMTk2WiIvPjwvc3ZnPg==",emboss:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMTguMiAtOTUyLjIgNDUyMi40IDE0MDcuNCI+PGRlZnM+PGZpbHRlciBpZD0icGFwZXItcmVsaWVmIiB4PSItMTAlIiB5PSItMjUlIiB3aWR0aD0iMTIwJSIgaGVpZ2h0PSIxNjAlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249Ii4zMiIgcmVzdWx0PSJzb2Z0Ii8+CjxmZU9mZnNldCBpbj0ic29mdCIgZHg9Ii41IiBkeT0iLjg1IiByZXN1bHQ9ImNhc3QiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiM4ZTgwNjYiIGZsb29kLW9wYWNpdHk9Ii41NSIgcmVzdWx0PSJzaGFkZSIvPgo8ZmVDb21wb3NpdGUgaW49InNoYWRlIiBpbjI9ImNhc3QiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJzaGFkb3ciLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii40NSIgZHk9Ii42NSIgcmVzdWx0PSJkb3duIi8+CjxmZUNvbXBvc2l0ZSBpbj0iU291cmNlQWxwaGEiIGluMj0iZG93biIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJ1cHBlckVkZ2UiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiNmZmZlZjciIGZsb29kLW9wYWNpdHk9IjEiIHJlc3VsdD0ibGlnaHQiLz4KPGZlQ29tcG9zaXRlIGluPSJsaWdodCIgaW4yPSJ1cHBlckVkZ2UiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJoaWdobGlnaHQiLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii0uNCIgZHk9Ii0uNiIgcmVzdWx0PSJ1cCIvPgo8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUFscGhhIiBpbjI9InVwIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9Imxvd2VyRWRnZSIvPgo8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2IyYTU4YiIgZmxvb2Qtb3BhY2l0eT0iLjY1IiByZXN1bHQ9Imxvd2VyU2hhZGUiLz4KPGZlQ29tcG9zaXRlIGluPSJsb3dlclNoYWRlIiBpbjI9Imxvd2VyRWRnZSIgb3BlcmF0b3I9ImluIiByZXN1bHQ9Imxvd2VyIi8+CjxmZU1lcmdlPjxmZU1lcmdlTm9kZSBpbj0ic2hhZG93Ii8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PGZlTWVyZ2VOb2RlIGluPSJoaWdobGlnaHQiLz48ZmVNZXJnZU5vZGUgaW49Imxvd2VyIi8+PC9mZU1lcmdlPgo8L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0iI2U4ZTFjZiIgZmlsdGVyPSJ1cmwoI3BhcGVyLXJlbGllZikiPjxwYXRoIGQ9Ik0xMzY1IDExNVExMzUwIDExMyAxMzI0LjAgMTA3LjVRMTI5OCAxMDIgMTI3MS4wIDg2LjBRMTI0NCA3MCAxMjI1LjAgMzcuNVExMjA2IDUgMTIwNiAtNDlRMTIwNiAtMTExIDEyMzEuNSAtMTg1LjVRMTI1NyAtMjYwIDEyOTQuMCAtMzQxLjBRMTMzMSAtNDIyIDEzNjUgLTUwMVExMzkyIC01NjQgMTM5MiAtNTk3UTEzOTIgLTYzMCAxMzY3IC02MzBRMTMzOSAtNjMwIDEyODMuNSAtNTg1LjVRMTIyOCAtNTQxIDExNTUgLTQ1MVExMTM2IC00MjcgMTEwNi4wIC0zODQuNVExMDc2IC0zNDIgMTA0Mi4wIC0yOTAuNVExMDA4IC0yMzkgOTc1LjUgLTE4Ni41UTk0MyAtMTM0IDkxOC41IC05MC4wUTg5NCAtNDYgODgzIC0yMFE4NzAgMTEgODUzLjAgMjIuNVE4MzYgMzQgODIxIDM0UTgwOCAzNCA3OTkgMjdRNzg5IDIwIDc4OSAxMFE3ODkgNCA3OTIgMFE3OTggLTEyIDgyMi4wIC01NS4wUTg0NiAtOTggODc4LjAgLTE2OS4wUTkxMCAtMjQwIDkzOSAtMzM0UTk0OCAtMzYzIDk1Ny41IC00MDEuMFE5NjcgLTQzOSA5NzUuMCAtNDc5LjVROTgzIC01MjAgOTg4LjUgLTU1NS41UTk5NCAtNTkxIDk5NCAtNjEzUTk5NCAtNjQ4IDk4Mi4wIC02NjQuNVE5NzAgLTY4MSA5NTAgLTY4MVE5MjggLTY4MSA5MDAuMCAtNjYyLjBRODcyIC02NDMgODQzIC02MDdRNzkzIC01NDQgNzU1LjAgLTQ5MC41UTcxNyAtNDM3IDY4NS41IC0zODQuMFE2NTQgLTMzMSA2MjMuNSAtMjcxLjBRNTkzIC0yMTEgNTU5LjAgLTEzNi41UTUyNSAtNjIgNDgxIDM2UTQ3NCA1MiA0NTcuNSA1OS4wUTQ0MSA2NiA0MjcgNjZRNDEzIDY2IDQwNC4wIDYwLjBRMzk1IDU0IDM5OCA0M1E0MjAgOCA0NDcuMCAtNDQuNVE0NzQgLTk3IDUwMi4wIC0xNjEuMFE1MzAgLTIyNSA1NTYuMCAtMjk0LjBRNTgyIC0zNjMgNjAyLjUgLTQyOS4wUTYyMyAtNDk1IDYzNS4wIC01NTMuMFE2NDcgLTYxMSA2NDcgLTY1MlE2NDcgLTcyOSA2MTQuNSAtNzYyLjBRNTgyIC03OTUgNTMxIC03OTVRNDg2IC03OTUgNDMyLjAgLTc3My4wUTM3OCAtNzUxIDMyMy41IC03MTMuMFEyNjkgLTY3NSAyMjEgLTYyN1ExNTIgLTU1OCAxMTIuNSAtNDc3LjBRNzMgLTM5NiA3MyAtMzEzUTczIC0yNTcgOTQuMCAtMjE4LjBRMTE1IC0xNzkgMTQ5LjUgLTE1OS4wUTE4NCAtMTM5IDIyNiAtMTM5UTI2OSAtMTM5IDMwNi41IC0xNjAuNVEzNDQgLTE4MiAzNzIuNSAtMjE2LjVRNDAxIC0yNTEgNDE3LjAgLTI4OS41UTQzMyAtMzI4IDQzMyAtMzYyUTQzMyAtMzkxIDQxNy4wIC00MTAuMFE0MDEgLTQyOSAzNjYgLTQyOVEzNjIgLTQyOSAzNTcuNSAtNDI4LjVRMzUzIC00MjggMzQ4IC00MjhIMzQ1UTMzOCAtNDI4IDMzMi4wIC00MzAuNVEzMjYgLTQzMyAzMjYgLTQzN1EzMjYgLTQ0MSAzMzYuNSAtNDQ2LjBRMzQ3IC00NTEgMzc1IC00NTFRNDIwIC00NTEgNDQyLjUgLTQyNC41UTQ2NSAtMzk4IDQ2NSAtMzU3UTQ2NSAtMzE3IDQ0NC41IC0yNzUuMFE0MjQgLTIzMyAzODkuMCAtMTk3LjBRMzU0IC0xNjEgMzEwLjUgLTEzOS4wUTI2NyAtMTE3IDIyMSAtMTE3UTE2NyAtMTE3IDEyMC41IC0xNDIuMFE3NCAtMTY3IDQ2LjAgLTIxNC41UTE4IC0yNjIgMTggLTMyOFExOCAtMzkxIDQ0LjAgLTQ1Mi41UTcwIC01MTQgMTExLjUgLTU2OC41UTE1MyAtNjIzIDIwMCAtNjY1UTI1MiAtNzEyIDMxMC4wIC03NDUuNVEzNjggLTc3OSA0MjUuNSAtNzk3LjVRNDgzIC04MTYgNTMzIC04MTZRNjA3IC04MTYgNjU1LjUgLTc3Mi4wUTcwNCAtNzI4IDcwNCAtNjMwUTcwNCAtNTkwIDY5My4wIC01MzguNVE2ODIgLTQ4NyA2NjcuMCAtNDM1LjVRNjUyIC0zODQgNjM4IC0zNDRINjQwUTY3NiAtNDA5IDcwNC41IC00NTUuNVE3MzMgLTUwMiA3NjIuMCAtNTQyLjBRNzkxIC01ODIgODI3IC02MjZRODU4IC02NjMgODk4LjAgLTY4NS4wUTkzOCAtNzA3IDk3NSAtNzA3UTEwMDggLTcwNyAxMDMxLjAgLTY4NS4wUTEwNTQgLTY2MyAxMDU0IC02MTBRMTA1NCAtNjA0IDEwNTQuMCAtNjAwLjBRMTA1NCAtNTk2IDEwNTMgLTU4OFExMDQ0IC00OTIgMTAxNS4wIC0zOTkuNVE5ODYgLTMwNyA5NTUgLTIxM1E5ODYgLTI2MSAxMDM5LjAgLTMzNS4wUTEwOTIgLTQwOSAxMTU1IC00ODhRMTIzMiAtNTg0IDEyOTguMCAtNjMyLjBRMTM2NCAtNjgwIDE0MDcgLTY4MFExNDYxIC02ODAgMTQ2MSAtNjE0UTE0NjEgLTU4OSAxNDUxLjUgLTU1NC4wUTE0NDIgLTUxOSAxNDIyIC00ODBRMTQwMCAtNDM2IDEzNzMuNSAtMzc4LjVRMTM0NyAtMzIxIDEzMjMuMCAtMjU4LjBRMTI5OSAtMTk1IDEyODMuNSAtMTM0LjVRMTI2OCAtNzQgMTI2OCAtMjNRMTI2OCAzMiAxMjkzLjUgNjUuNVExMzE5IDk5IDEzODIgOTlIMTM4OFExNDAzIDk5IDE0MDMgMTA1UTE0MDMgMTA5IDEzOTMuMCAxMTMuMFExMzgzIDExNyAxMzY1IDExNVpNMTI5OSA4UTEzMzUgLTY1IDEzNjguMCAtMTM2LjVRMTQwMSAtMjA4IDE0MzYgLTI3M1ExNDU2IC0zMDkgMTQ3MC4wIC0zMjMuNVExNDg0IC0zMzggMTUwNyAtMzM4UTE1MTUgLTMzOCAxNTI0LjAgLTMzNS41UTE1MzMgLTMzMyAxNTQyIC0zMzNRMTU0OCAtMzMzIDE1NTEgLTMzNFExNTM3IC0zMjYgMTUxNC41IC0yOTQuNVExNDkyIC0yNjMgMTQ2OS4wIC0yMjIuMFExNDQ2IC0xODEgMTQyOCAtMTQ1UTE0NDcgLTE2OCAxNDY4LjAgLTE5MS4wUTE0ODkgLTIxNCAxNTE0IC0yMzVRMTUzOCAtMjU2IDE1NzEuNSAtMjc4LjVRMTYwNSAtMzAxIDE2MzcuMCAtMzE2LjBRMTY2OSAtMzMxIDE2ODggLTMzMVExNjk1IC0zMzEgMTY5OCAtMzMwUTE2OTggLTMzMCAxNjg3LjAgLTMxMC41UTE2NzYgLTI5MSAxNjU5LjUgLTI1OS41UTE2NDMgLTIyOCAxNjI2LjAgLTE5Mi41UTE2MDkgLTE1NyAxNTk1LjUgLTEyNC41UTE1ODIgLTkyIDE1NzggLTcwUTE1NzUgLTU3IDE1NzUgLTQ2UTE1NzUgLTMwIDE1ODEuMCAtMjUuMFExNTg3IC0yMCAxNTk0IC0yMFExNjEzIC0yMCAxNjMzLjAgLTM3LjBRMTY1MyAtNTQgMTY3MS41IC04MC41UTE2OTAgLTEwNyAxNzA2LjAgLTEzNy4wUTE3MjIgLTE2NyAxNzMzIC0xOTNRMTc0NSAtMTkzIDE3NDUgLTE4NFExNzM0IC0xNTcgMTcxNy41IC0xMjQuNVExNzAxIC05MiAxNjgwLjUgLTYzLjBRMTY2MCAtMzQgMTYzNS4wIC0xNS4wUTE2MTAgNCAxNTgxIDRRMTU2MSA0IDE1MzkuNSAtMTAuMFExNTE4IC0yNCAxNTE4IC02MlExNTE4IC03MyAxNTIwLjAgLTg1LjVRMTUyMiAtOTggMTUyNyAtMTEzUTE1MzUgLTEzMyAxNTQ2LjAgLTE1Ni4wUTE1NTcgLTE3OSAxNTgyIC0yMTlRMTU4OSAtMjMwIDE1OTAuNSAtMjM2LjBRMTU5MiAtMjQyIDE1OTIgLTI0NlExNTkyIC0yNTggMTU4MSAtMjU4UTE1NzIgLTI1OCAxNTU0LjUgLTI0OC4wUTE1MzcgLTIzOCAxNTExIC0yMTNRMTQ4NiAtMTg5IDE0NTEuNSAtMTQ1LjBRMTQxNyAtMTAxIDEzNzIgLTE1UTEzNjUgLTIgMTM1Ni41IC0xLjBRMTM0OCAwIDEzMzMgMVExMzIzIDIgMTMxNC4wIDIuNVExMzA1IDMgMTI5OSA4Wk0xMzcyIDMxOVExMzIwIDMxOSAxMjk4LjUgMjk4LjVRMTI3NyAyNzggMTI3NyAyNTBRMTI3NyAyMjMgMTI5MiAxOTZRMTMwNiAxNjcgMTMzMS4wIDE0Ni41UTEzNTYgMTI2IDEzODYgMTEyUTE0MzcgODggMTUwMy41IDczLjBRMTU3MCA1OCAxNjMxIDQwUTE2MzkgMjYgMTY0Ny41IDExLjBRMTY1NiAtNCAxNjYzIC0xOFExNjgzIC01OCAxNzAwLjAgLTk3LjVRMTcxNyAtMTM3IDE3NDIgLTE4M1ExNzMzIC0xODMgMTczMyAtMTkzTDE3NzcgLTI5NFExNzc4IC0yOTYgMTc3OS4wIC0yOTkuNVExNzgwIC0zMDMgMTc4MCAtMzA3UTE3ODAgLTMxOCAxNzc1LjAgLTMyNS41UTE3NzAgLTMzMyAxNzY4IC0zMzZMMTgyMyAtMzM4SDE4MjhRMTg1MCAtMzM4IDE4NTAgLTMyNFExODUwIC0zMTcgMTg0NCAtMzAyTDE3NjQgLTExNFExNzUwIC04MSAxNzM0LjAgLTQ4LjBRMTcxOCAtMTUgMTcwMSAxOVExNzcxIC04IDE4MTIuNSAtNDcuNVExODU0IC04NyAxODc2LjUgLTEyNi41UTE4OTkgLTE2NiAxOTExIC0xOTNRMTkyMyAtMTkzIDE5MjMgLTE4NFExOTEzIC0xNjIgMTg5Ny4wIC0xMzEuNVExODgxIC0xMDEgMTg1NS4wIC02Ny41UTE4MjkgLTM0IDE3ODguMCAtMy4wUTE3NDcgMjggMTY4NSA1MVExNjYxIDk0IDE2MzAuMCAxNDAuNVExNTk5IDE4NyAxNTYwLjAgMjI3LjVRMTUyMSAyNjggMTQ3NC41IDI5My41UTE0MjggMzE5IDEzNzIgMzE5Wk0xMzQ4IDI5OVExMzgxIDI5OSAxNDE2LjUgMjc5LjBRMTQ1MiAyNTkgMTQ4NS4wIDIyOC41UTE1MTggMTk4IDE1NDUuNSAxNjYuMFExNTczIDEzNCAxNTkwIDExMFExNTk2IDEwMiAxNjAxLjAgOTIuMFExNjA2IDgyIDE2MTEgNzJRMTU2MyA4NSAxNTA1LjAgMTAwLjVRMTQ0NyAxMTYgMTQwMyAxMzVRMTM1NSAxNTUgMTMyOC4wIDE5MS41UTEzMDEgMjI4IDEzMDEgMjU3UTEzMDEgMjc2IDEzMTIuNSAyODcuNVExMzI0IDI5OSAxMzQ4IDI5OVpNMTg1MiAtNDAwUTE4MzkgLTQwMCAxODI5LjUgLTQxMC4wUTE4MjAgLTQyMCAxODIwIC00MzRRMTgyMCAtNDUxIDE4MzQuMCAtNDY0LjVRMTg0OCAtNDc4IDE4NjUgLTQ3OFExODc5IC00NzggMTg4OS4wIC00NjkuMFExODk5IC00NjAgMTg5OSAtNDQ2UTE4OTkgLTQyOCAxODg1LjAgLTQxNC4wUTE4NzEgLTQwMCAxODUyIC00MDBaTTIxMjggM1EyMTA1IDMgMjA4Ny41IC0xMC4wUTIwNzAgLTIzIDIwNzAgLTYzUTIwNzAgLTgwIDIwNzIuNSAtOTUuMFEyMDc1IC0xMTAgMjA3OSAtMTI3UTIwNzAgLTExMiAyMDU0LjAgLTkwLjBRMjAzOCAtNjggMjAxOC41IC00Ny4wUTE5OTkgLTI2IDE5NzguNSAtMTIuMFExOTU4IDIgMTk0MCAyUTE5MTQgMiAxODk4LjAgLTIxLjVRMTg4MiAtNDUgMTg4MiAtODNRMTg4MiAtMTI0IDE5MDEuMCAtMTcxLjBRMTkyMCAtMjE4IDE5NTMuMCAtMjYxLjBRMTk4NiAtMzA0IDIwMjkuMCAtMzMxLjBRMjA3MiAtMzU4IDIxMTkgLTM1OFEyMTQyIC0zNTggMjE2My4wIC0zNTAuNVEyMTg0IC0zNDMgMjIwMCAtMzI2UTIyMDcgLTMxOSAyMjA3IC0zMTBRMjIwNyAtMzA0IDIyMDIuMCAtMzAwLjBRMjE5NyAtMjk2IDIxODkgLTI5OFEyMTc4IC0zMzMgMjE0MiAtMzMzUTIxMjUgLTMzMyAyMTAzIC0zMjJRMjA3NiAtMzA4IDIwNDUuNSAtMjc3LjVRMjAxNSAtMjQ3IDE5ODguNSAtMjA4LjVRMTk2MiAtMTcwIDE5NDUuMCAtMTMxLjBRMTkyOCAtOTIgMTkyOCAtNjBRMTkyOCAtMjcgMTk1MyAtMjdRMTk3NSAtMjcgMTk5OC41IC00OC4wUTIwMjIgLTY5IDIwNDMuNSAtMTAwLjVRMjA2NSAtMTMyIDIwODMuMCAtMTYzLjBRMjEwMSAtMTk0IDIxMTEgLTIxM1EyMTI2IC0yNDAgMjEzOS4wIC0yNTguMFEyMTUyIC0yNzYgMjE3NiAtMjc2UTIxODcgLTI3NiAyMTk4LjAgLTI3My4wUTIyMDkgLTI3MCAyMjIxIC0yNzJRMjE5MSAtMjQyIDIxNjguNSAtMjAxLjBRMjE0NiAtMTYwIDIxMzQuMCAtMTIwLjVRMjEyMiAtODEgMjEyMiAtNTRRMjEyMiAtMjQgMjE0MiAtMjRRMjE1OCAtMjQgMjE3Ni41IC00Mi4wUTIxOTUgLTYwIDIyMTIuNSAtODcuNVEyMjMwIC0xMTUgMjI0NS4wIC0xNDMuNVEyMjYwIC0xNzIgMjI2OSAtMTkzUTIyNzQgLTE5MyAyMjc3LjUgLTE5Mi4wUTIyODEgLTE5MSAyMjgxIC0xODRRMjI4MCAtMTgwIDIyNzcuNSAtMTc1LjVRMjI3NSAtMTcxIDIyNzAgLTE2MFEyMjYyIC0xNDQgMjI0OC4wIC0xMTcuMFEyMjM0IC05MCAyMjE1LjAgLTYyLjVRMjE5NiAtMzUgMjE3NC4wIC0xNi4wUTIxNTIgMyAyMTI4IDNaTTIyOTggMFEyMjg3IDAgMjI3MS41IC01LjBRMjI1NiAtMTAgMjI0NC41IC0yMy41UTIyMzMgLTM3IDIyMzMgLTY0UTIyMzMgLTkwIDIyNTAuMCAtMTI0LjBRMjI2NyAtMTU4IDIyODAgLTE4NFEyMjY5IC0xODQgMjI2OSAtMTkzUTIyNzAgLTE5NiAyMjc4LjAgLTIxMi4wUTIyODYgLTIyOCAyMjk3LjAgLTI1MC4wUTIzMDggLTI3MiAyMzE4LjUgLTI5Mi41UTIzMjkgLTMxMyAyMzM1IC0zMjRRMjM0NyAtMzQ2IDIzNzMgLTM0NkgyNDM1UTI0MTggLTMzMyAyNDA0LjUgLTMxNy41UTIzOTEgLTMwMiAyMzcxIC0yNjFRMjM3MSAtMjYxIDIzNjQuMCAtMjQ3LjBRMjM1NyAtMjMzIDIzNDYuNSAtMjExLjVRMjMzNiAtMTkwIDIzMjUuNSAtMTY4LjBRMjMxNSAtMTQ2IDIzMDggLTEzMVEyMjk1IC0xMDMgMjI5MS4wIC04Ni41UTIyODcgLTcwIDIyODcgLTU2UTIyODcgLTIzIDIzMDkgLTIzUTIzMzMgLTIzIDIzNjcgLTYyUTIzOTUgLTk1IDI0MjIuMCAtMTQxLjBRMjQ0OSAtMTg3IDI0NzMuNSAtMjM2LjBRMjQ5OCAtMjg1IDI1MTcgLTMyNFEyNTI4IC0zNDYgMjU1NiAtMzQ2SDI2MTFRMjU4OSAtMzI4IDI1NjYuNSAtMjkyLjBRMjU0NCAtMjU2IDI1MTcgLTIwMFEyNTEwIC0xODUgMjQ5OS4wIC0xNjIuMFEyNDg4IC0xMzkgMjQ3OS41IC0xMTMuMFEyNDcxIC04NyAyNDcxIC02MVEyNDcxIC0yNiAyNDk2IC0yNlEyNTMwIC0yNiAyNTYyLjAgLTczLjBRMjU5NCAtMTIwIDI2MjUgLTE5M1EyNjMzIC0xOTMgMjYzNC41IC0xOTIuMFEyNjM2IC0xOTEgMjYzNyAtMTg0UTI2MjYgLTE1NyAyNjEwLjUgLTEyNS41UTI1OTUgLTk0IDI1NzUuNSAtNjUuMFEyNTU2IC0zNiAyNTMyLjUgLTE4LjBRMjUwOSAwIDI0ODEgMFEyNDU2IDAgMjQ0MC4wIC0xOC41UTI0MjQgLTM3IDI0MjQgLTcxUTI0MjQgLTk4IDI0MzQgLTEyOVEyNDE3IC05OSAyMzk1LjAgLTY5LjBRMjM3MyAtMzkgMjM0OC4wIC0xOS41UTIzMjMgMCAyMjk4IDBaTTI0NjggMjczUTI0NTYgMjczIDI0NDMuNSAyNjkuNVEyNDMxIDI2NiAyNDE4IDI2OFEyNDI0IDI2MiAyNDQxLjAgMjMzLjVRMjQ1OCAyMDUgMjQ4MS4wIDE2Mi41UTI1MDQgMTIwIDI1MjguNSA3MC41UTI1NTMgMjEgMjU3Ni4wIC0yNy41UTI1OTkgLTc2IDI2MTUuNSAtMTE3LjVRMjYzMiAtMTU5IDI2MzcgLTE4NFEyNjMyIC0xODQgMjYyOC4wIC0xODYuMFEyNjI0IC0xODggMjYyNSAtMTkzUTI2MjUgLTE5MyAyNjMxLjAgLTIxMS4wUTI2MzcgLTIyOSAyNjQzLjAgLTI1NC41UTI2NDkgLTI4MCAyNjQ5IC0zMDFRMjY0OSAtMzE1IDI2NDYuMCAtMzI1LjBRMjY0MyAtMzM1IDI2MzUgLTMzNkwyNjg1IC0zNDRRMjY5MSAtMzQ1IDI2OTYuMCAtMzQ1LjVRMjcwMSAtMzQ2IDI3MDUgLTM0NlEyNzE0IC0zNDYgMjcxNy41IC0zMzkuNVEyNzIxIC0zMzMgMjcyMSAtMzEzUTI3MjEgLTI4OCAyNzEyLjUgLTI0OS41UTI3MDQgLTIxMSAyNjkzIC0xODJRMjcwNCAtMjAwIDI3MjEuNSAtMjI4LjBRMjczOSAtMjU2IDI3NjIuMCAtMjg1LjBRMjc4NSAtMzE0IDI4MTAuMCAtMzMzLjVRMjgzNSAtMzUzIDI4NTkgLTM1M1EyODY0IC0zNTMgMjg3MiAtMzUxUTI5MDAgLTM0NCAyOTExLjUgLTMyMy41UTI5MjMgLTMwMyAyOTIzIC0yNzVRMjkyMyAtMjQ1IDI5MTEuNSAtMjA5LjBRMjkwMCAtMTczIDI4ODEuMCAtMTM4LjVRMjg2MiAtMTA0IDI4MzkgLTc2UTI4MTEgLTQxIDI3NzIuMCAtMjAuMFEyNzMzIDEgMjY5MiAxUTI2NTUgMSAyNjIzIC0xOEwyNTI4IDIyMVEyNTE0IDI1MSAyNTAxLjAgMjYyLjBRMjQ4OCAyNzMgMjQ2OCAyNzNaTTI2NjAgLTIwUTI2ODggLTIwIDI3MjMuMCAtNDYuMFEyNzU4IC03MiAyNzkwLjUgLTExMi41UTI4MjMgLTE1MyAyODQ1IC0xOTRRMjg2MCAtMjIyIDI4NjcuMCAtMjQ1LjVRMjg3NCAtMjY5IDI4NzQgLTI4NlEyODc0IC0zMjUgMjg0NiAtMzI1UTI4MzMgLTMyNSAyODEyLjUgLTMxMS4wUTI3OTIgLTI5NyAyNzY1IC0yNjBRMjczNiAtMjIwIDI3MDEuNSAtMTU5LjVRMjY2NyAtOTkgMjYzMSAtMzJRMjY0MyAtMjAgMjY2MCAtMjBaTTI5NjIgLTE5NlEyOTcwIC0yMTMgMjk4My4wIC0yNTAuNVEyOTk2IC0yODggMzAxMC4wIC0zMzQuMFEzMDI0IC0zODAgMzAzMSAtNDIxUTMwMzQgLTQzNyAzMDQyLjAgLTQ0NC41UTMwNTAgLTQ1MiAzMDU5IC00NTJRMzA3MiAtNDUyIDMwODMuMCAtNDM5LjVRMzA5NCAtNDI3IDMwOTQgLTQwNFEzMDk0IC0zNzYgMzA3Ny41IC0zNTYuMFEzMDYxIC0zMzYgMzAzNyAtMzE4UTMwNDcgLTMxNyAzMDU4LjAgLTMxNi41UTMwNjkgLTMxNiAzMDgyIC0zMTZRMzEyOSAtMzE2IDMxNzUgLTMyMlEzMTc3IC0zMTYgMzE3NyAtMzEzUTMxNzcgLTMwMCAzMTY5LjUgLTI4MC4wUTMxNjIgLTI2MCAzMTU0IC0yNDRRMzE1MCAtMjM1IDMxMzguMCAtMjExLjVRMzEyNiAtMTg4IDMxMTIuMCAtMTU4LjVRMzA5OCAtMTI5IDMwODguNSAtMTAwLjVRMzA3OSAtNzIgMzA3OSAtNTJRMzA3OSAtMjYgMzA5OSAtMjZRMzExOCAtMjYgMzE1Mi4wIC03MC41UTMxODYgLTExNSAzMjIwIC0xOTNRMzIzMiAtMTkzIDMyMzIgLTE4NFEzMjIxIC0xNTcgMzIwNC41IC0xMjUuMFEzMTg4IC05MyAzMTY4LjAgLTY0LjVRMzE0OCAtMzYgMzEyNS4wIC0xNy41UTMxMDIgMSAzMDc3IDFRMzA1OCAxIDMwMzkuMCAtMTQuNVEzMDIwIC0zMCAzMDIwIC02NVEzMDIwIC05NiAzMDMyLjAgLTEyNS41UTMwNDQgLTE1NSAzMDU5LjAgLTE4MS4wUTMwNzQgLTIwNyAzMDg2LjAgLTIyNy4wUTMwOTggLTI0NyAzMDk4IC0yNTlRMzA5OCAtMjc3IDMwNzUuNSAtMjg1LjBRMzA1MyAtMjkzIDMwMTcgLTI5NFEyOTk5IC0yNDggMjk5MC4wIC0yMjYuMFEyOTgxIC0yMDQgMjk3MyAtMTg0UTI5NTcgLTE4NCAyOTYyIC0xOTZaTTMyMjEgLTE5NlEzMjI5IC0yMTMgMzI0Mi4wIC0yNTAuNVEzMjU1IC0yODggMzI2OS4wIC0zMzQuMFEzMjgzIC0zODAgMzI5MCAtNDIxUTMyOTMgLTQzNyAzMzAxLjAgLTQ0NC41UTMzMDkgLTQ1MiAzMzE4IC00NTJRMzMzMSAtNDUyIDMzNDIuMCAtNDM5LjVRMzM1MyAtNDI3IDMzNTMgLTQwNFEzMzUzIC0zNzYgMzMzNi41IC0zNTYuMFEzMzIwIC0zMzYgMzI5NiAtMzE4UTMzMDYgLTMxNyAzMzE3LjAgLTMxNi41UTMzMjggLTMxNiAzMzQxIC0zMTZRMzM4OCAtMzE2IDM0MzQgLTMyMlEzNDM2IC0zMTYgMzQzNiAtMzEzUTM0MzYgLTMwMCAzNDI4LjUgLTI4MC4wUTM0MjEgLTI2MCAzNDEzIC0yNDRRMzQwOSAtMjM1IDMzOTcuMCAtMjExLjVRMzM4NSAtMTg4IDMzNzEuMCAtMTU4LjVRMzM1NyAtMTI5IDMzNDcuNSAtMTAwLjVRMzMzOCAtNzIgMzMzOCAtNTJRMzMzOCAtMjYgMzM1OCAtMjZRMzM3NyAtMjYgMzQxMS4wIC03MC41UTM0NDUgLTExNSAzNDc5IC0xOTNRMzQ5MSAtMTkzIDM0OTEgLTE4NFEzNDgwIC0xNTcgMzQ2My41IC0xMjUuMFEzNDQ3IC05MyAzNDI3LjAgLTY0LjVRMzQwNyAtMzYgMzM4NC4wIC0xNy41UTMzNjEgMSAzMzM2IDFRMzMxNyAxIDMyOTguMCAtMTQuNVEzMjc5IC0zMCAzMjc5IC02NVEzMjc5IC05NiAzMjkxLjAgLTEyNS41UTMzMDMgLTE1NSAzMzE4LjAgLTE4MS4wUTMzMzMgLTIwNyAzMzQ1LjAgLTIyNy4wUTMzNTcgLTI0NyAzMzU3IC0yNTlRMzM1NyAtMjc3IDMzMzQuNSAtMjg1LjBRMzMxMiAtMjkzIDMyNzYgLTI5NFEzMjU4IC0yNDggMzI0OS4wIC0yMjYuMFEzMjQwIC0yMDQgMzIzMiAtMTg0UTMyMTYgLTE4NCAzMjIxIC0xOTZaTTM0ODAgLTE5NlEzNDg4IC0yMTMgMzUwMS4wIC0yNTAuNVEzNTE0IC0yODggMzUyOC4wIC0zMzQuMFEzNTQyIC0zODAgMzU0OSAtNDIxUTM1NTIgLTQzNyAzNTYwLjAgLTQ0NC41UTM1NjggLTQ1MiAzNTc3IC00NTJRMzU5MCAtNDUyIDM2MDEuMCAtNDM5LjVRMzYxMiAtNDI3IDM2MTIgLTQwNFEzNjEyIC0zNzYgMzU5NS41IC0zNTYuMFEzNTc5IC0zMzYgMzU1NSAtMzE4UTM1NjUgLTMxNyAzNTc2LjAgLTMxNi41UTM1ODcgLTMxNiAzNjAwIC0zMTZRMzY0NyAtMzE2IDM2OTMgLTMyMlEzNjk1IC0zMTYgMzY5NSAtMzEzUTM2OTUgLTMwMCAzNjg3LjUgLTI4MC4wUTM2ODAgLTI2MCAzNjcyIC0yNDRRMzY2OCAtMjM1IDM2NTYuMCAtMjExLjVRMzY0NCAtMTg4IDM2MzAuMCAtMTU4LjVRMzYxNiAtMTI5IDM2MDYuNSAtMTAwLjVRMzU5NyAtNzIgMzU5NyAtNTJRMzU5NyAtMjYgMzYxNyAtMjZRMzYzNiAtMjYgMzY3MC4wIC03MC41UTM3MDQgLTExNSAzNzM4IC0xOTNRMzc1MCAtMTkzIDM3NTAgLTE4NFEzNzM5IC0xNTcgMzcyMi41IC0xMjUuMFEzNzA2IC05MyAzNjg2LjAgLTY0LjVRMzY2NiAtMzYgMzY0My4wIC0xNy41UTM2MjAgMSAzNTk1IDFRMzU3NiAxIDM1NTcuMCAtMTQuNVEzNTM4IC0zMCAzNTM4IC02NVEzNTM4IC05NiAzNTUwLjAgLTEyNS41UTM1NjIgLTE1NSAzNTc3LjAgLTE4MS4wUTM1OTIgLTIwNyAzNjA0LjAgLTIyNy4wUTM2MTYgLTI0NyAzNjE2IC0yNTlRMzYxNiAtMjc3IDM1OTMuNSAtMjg1LjBRMzU3MSAtMjkzIDM1MzUgLTI5NFEzNTE3IC0yNDggMzUwOC4wIC0yMjYuMFEzNDk5IC0yMDQgMzQ5MSAtMTg0UTM0NzUgLTE4NCAzNDgwIC0xOTZaTTM3MzkgLTE5NlEzNzQ3IC0yMTMgMzc2MC4wIC0yNTAuNVEzNzczIC0yODggMzc4Ny4wIC0zMzQuMFEzODAxIC0zODAgMzgwOCAtNDIxUTM4MTEgLTQzNyAzODE5LjAgLTQ0NC41UTM4MjcgLTQ1MiAzODM2IC00NTJRMzg0OSAtNDUyIDM4NjAuMCAtNDM5LjVRMzg3MSAtNDI3IDM4NzEgLTQwNFEzODcxIC0zNzYgMzg1NC41IC0zNTYuMFEzODM4IC0zMzYgMzgxNCAtMzE4UTM4MjQgLTMxNyAzODM1LjAgLTMxNi41UTM4NDYgLTMxNiAzODU5IC0zMTZRMzkwNiAtMzE2IDM5NTIgLTMyMlEzOTU0IC0zMTYgMzk1NCAtMzEzUTM5NTQgLTMwMCAzOTQ2LjUgLTI4MC4wUTM5MzkgLTI2MCAzOTMxIC0yNDRRMzkyNyAtMjM1IDM5MTUuMCAtMjExLjVRMzkwMyAtMTg4IDM4ODkuMCAtMTU4LjVRMzg3NSAtMTI5IDM4NjUuNSAtMTAwLjVRMzg1NiAtNzIgMzg1NiAtNTJRMzg1NiAtMjYgMzg3NiAtMjZRMzg5NSAtMjYgMzkyOS4wIC03MC41UTM5NjMgLTExNSAzOTk3IC0xOTNRNDAwOSAtMTkzIDQwMDkgLTE4NFEzOTk4IC0xNTcgMzk4MS41IC0xMjUuMFEzOTY1IC05MyAzOTQ1LjAgLTY0LjVRMzkyNSAtMzYgMzkwMi4wIC0xNy41UTM4NzkgMSAzODU0IDFRMzgzNSAxIDM4MTYuMCAtMTQuNVEzNzk3IC0zMCAzNzk3IC02NVEzNzk3IC05NiAzODA5LjAgLTEyNS41UTM4MjEgLTE1NSAzODM2LjAgLTE4MS4wUTM4NTEgLTIwNyAzODYzLjAgLTIyNy4wUTM4NzUgLTI0NyAzODc1IC0yNTlRMzg3NSAtMjc3IDM4NTIuNSAtMjg1LjBRMzgzMCAtMjkzIDM3OTQgLTI5NFEzNzc2IC0yNDggMzc2Ny4wIC0yMjYuMFEzNzU4IC0yMDQgMzc1MCAtMTg0UTM3MzQgLTE4NCAzNzM5IC0xOTZaTTM5OTggLTE5NlE0MDA2IC0yMTMgNDAxOS4wIC0yNTAuNVE0MDMyIC0yODggNDA0Ni4wIC0zMzQuMFE0MDYwIC0zODAgNDA2NyAtNDIxUTQwNzAgLTQzNyA0MDc4LjAgLTQ0NC41UTQwODYgLTQ1MiA0MDk1IC00NTJRNDEwOCAtNDUyIDQxMTkuMCAtNDM5LjVRNDEzMCAtNDI3IDQxMzAgLTQwNFE0MTMwIC0zNzYgNDExMy41IC0zNTYuMFE0MDk3IC0zMzYgNDA3MyAtMzE4UTQwODMgLTMxNyA0MDk0LjAgLTMxNi41UTQxMDUgLTMxNiA0MTE4IC0zMTZRNDE2NSAtMzE2IDQyMTEgLTMyMlE0MjEzIC0zMTYgNDIxMyAtMzEzUTQyMTMgLTMwMCA0MjA1LjUgLTI4MC4wUTQxOTggLTI2MCA0MTkwIC0yNDRRNDE4NiAtMjM1IDQxNzQuMCAtMjExLjVRNDE2MiAtMTg4IDQxNDguMCAtMTU4LjVRNDEzNCAtMTI5IDQxMjQuNSAtMTAwLjVRNDExNSAtNzIgNDExNSAtNTJRNDExNSAtMjYgNDEzNSAtMjZRNDE1NCAtMjYgNDE4OC4wIC03MC41UTQyMjIgLTExNSA0MjU2IC0xOTNRNDI2OCAtMTkzIDQyNjggLTE4NFE0MjU3IC0xNTcgNDI0MC41IC0xMjUuMFE0MjI0IC05MyA0MjA0LjAgLTY0LjVRNDE4NCAtMzYgNDE2MS4wIC0xNy41UTQxMzggMSA0MTEzIDFRNDA5NCAxIDQwNzUuMCAtMTQuNVE0MDU2IC0zMCA0MDU2IC02NVE0MDU2IC05NiA0MDY4LjAgLTEyNS41UTQwODAgLTE1NSA0MDk1LjAgLTE4MS4wUTQxMTAgLTIwNyA0MTIyLjAgLTIyNy4wUTQxMzQgLTI0NyA0MTM0IC0yNTlRNDEzNCAtMjc3IDQxMTEuNSAtMjg1LjBRNDA4OSAtMjkzIDQwNTMgLTI5NFE0MDM1IC0yNDggNDAyNi4wIC0yMjYuMFE0MDE3IC0yMDQgNDAwOSAtMTg0UTM5OTMgLTE4NCAzOTk4IC0xOTZaIi8+PC9nPjwvc3ZnPg=="},ag=`
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
`,og='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2048" height="1201" viewBox="0 0 2048 1201"><defs><filter id="grain" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="2.4" intercept="-1.37"/><feFuncG type="linear" slope="2.4" intercept="-1.37"/><feFuncB type="linear" slope="2.4" intercept="-1.37"/></feComponentTransfer></filter></defs><image width="2048" height="1201" filter="url(#grain)" xlink:href="__PAPER_JPEG__"/></svg>',Ka;function lg(){return Ka||(Ka=(async()=>{let n=await fetch(ss.paperColor,{mode:"cors"});if(!n.ok)throw new Error(`Paper texture failed to load (${n.status}).`);let t=await n.arrayBuffer(),e=await new Promise((r,a)=>{let o=new FileReader;o.onload=()=>r(String(o.result)),o.onerror=()=>a(o.error||new Error("Paper texture could not be read.")),o.readAsDataURL(new Blob([t],{type:"image/jpeg"}))}),i=og.replace("__PAPER_JPEG__",e),s=URL.createObjectURL(new Blob([i],{type:"image/svg+xml"}));try{let r=new Image;return r.src=s,await r.decode(),s}catch(r){throw URL.revokeObjectURL(s),r}})().catch(n=>{throw Ka=void 0,n})),Ka}var{SCROLL_EXTENSION:Iu,authoredClock:cg,scrollClock:ug}=(()=>{let t=.1637489716078054,e=.245,i=e-t,s=i+.035;function r(o){if(o<=t)return o;if(o>=e+.035)return o-.035;let c=(o-t)/s;return t+i*c+.035*c*(1-c)*(1-2*c)}function a(o){if(o<=t)return o;if(o>=e)return o+.035;let c=t,l=e+.035;for(let h=0;h<32;h++){let f=(c+l)/2;r(f)<o?c=f:l=f}return(c+l)/2}return{SCROLL_EXTENSION:.035,authoredClock:r,scrollClock:a}})(),{applyRibbonWithdrawal:hg}=(()=>{let n=h=>Math.max(0,Math.min(1,h)),t=(h,f,u)=>{let d=n((u-h)/(f-h));return d*d*(3-2*d)},e=new _,i=new _,s=new _,r=new _,a=new _,o=new We;function c(h,f,u){let d=h.x,M=h.y,y=h.z;if(u.set(0,0,0),f<=.72)return u;let p=n((d+1.38)/4.8);if(p<=0||p>=1)return u;let m=t(-.1,.025,y),v=1-t(.18,.45,Math.abs(M+.2)),S=t(.72,.88,f),I=-1.38+4.8*t(.725,.875,f),b=.35+.65*t(d-.85,d+.85,I),R=Math.pow(Math.sin(Math.PI*p),2)*m*v*S*b;return u.set(-.055*R,-.42*R,.46*R),u}function l(h,f,u,d){d<=.72||(e.copy(f),s.copy(h).addScaledVector(e,5e-4),r.copy(h).addScaledVector(e,-5e-4),c(s,d,s),c(r,d,r),i.copy(e).addScaledVector(s.sub(r),1e3).normalize(),c(h,d,a),h.add(a),o.setFromUnitVectors(e,i),u.applyQuaternion(o).normalize(),f.copy(i))}return{applyRibbonWithdrawal:l}})(),{createRibbonStrips:dg}=(()=>{let a=S=>Math.max(0,Math.min(1,S)),o=(S,I,b)=>{let R=a((b-S)/(I-S));return R*R*(3-2*R)},c=(S,I,b)=>S+(I-S)*b,l=[0,0,1],h=[0,0,-1],f=[];function u(S,I,b,R=0,g=0,T=l){f.push({p:new _(S,I,b),roll:R,fold:g,n:new _(...T)})}function d(S,I,b,R=0,g=0){u(-1.7+S,-.2+I,b,R,g)}d(-.43,-.95,.065,-.25),d(-.37,-.74,.065,-.15),d(-.24,-.48,.18,.15,.12),d(-.08,-.15,.19,.5,.6),d(.08,-.08,.15,.55,.65),d(.38,-.09,.14,.24,.12),d(.7,-.02,.2,.4),d(.84,.18,.3,1.15),d(.79,.37,.24,2.45),d(.56,.39,.18,2),d(.32,.24,.18,1.1,.12),d(.03,.01,.16,.5,.6),d(.04,-.015,.09,.15,.3),d(.32,0,.045),u(2.8,-.2,.043),u(3.25,-.2,.043),u(3.39,-.2,.043),u(3.411,-.2,.005,0,0,[.7,0,.7]),u(3.416,-.2,-.045,0,0,[1,0,0]),u(3.408,-.2,-.105,0,0,[.6,0,-.8]),u(3.28,-.2,-.13,0,0,h),u(2.9,-.2,-.13,0,0,h),u(1.8,.55,-.13,0,0,h),u(-.7,1.65,-.13,0,0,h),u(-1.7,1.94,-.13,0,0,h),u(-1.7,2.16,-.13,0,0,h),u(-1.7,2.208,-.1,0,0,[0,.6,-.8]),u(-1.7,2.216,-.045,0,0,[0,1,0]),u(-1.7,2.211,.015,0,0,[0,.6,.8]),u(-1.7,2.19,.036),u(-1.7,1.93,.036),u(-1.7,1.2,.036),u(-1.7,-.2,.036),u(-1.7,-1.4,.036),u(-1.7,-2.1,.036),u(-1.7,-2.19,.036),u(-1.7,-2.211,.015,0,0,[0,-.6,.8]),u(-1.7,-2.216,-.045,0,0,[0,-1,0]),u(-1.7,-2.208,-.1,0,0,[0,-.6,-.8]),u(-1.7,-2.16,-.13,0,0,h),u(-1.7,-1.93,-.13,0,0,h),u(-2.65,-1.05,-.13,0,0,h),u(-3.14,-.2,-.13,0,0,h),u(-3.32,-.2,-.13,0,0,h),u(-3.408,-.2,-.105,0,0,[-.6,0,-.8]),u(-3.416,-.2,-.045,0,0,[-1,0,0]),u(-3.411,-.2,.005,0,0,[-.7,0,.7]),u(-3.39,-.2,.043),u(-3.15,-.2,.043),u(-1.7-.4,-.2,.043),u(-1.7-.12,-.2-.01,.08,.2,.2),d(-.06,-.12,.1,.05,.3),d(-.04,-.16,.18,.05,.25),d(.015,-.11,.3,.06,.25),d(.025,.09,.3,.06,.22),d(-.01,.145,.2,.05,.2),d(-.045,.11,.085,.15,.35),d(-.12,0,.1,.35,.5),d(-.38,-.09,.22,.35,.1),d(-.68,-.04,.27,.75),d(-.86,.14,.25,1.6),d(-.79,.33,.18,2.55),d(-.58,.35,.14,2.85),d(-.31,.2,.12,2.95,.1),d(-.06,.02,.11,2.55,.55),d(.05,-.15,.15,1,.55),d(.19,-.37,.15,.2,.12),d(.38,-.69,.09,-.25),d(.46,-.92,.095,-.6);function M(S=0,I=0,b=0){let R=f.map(ct=>({...ct,p:ct.p.clone(),n:ct.n.clone()}));R[4].p.z=c(R[4].p.z,.12,b);for(let ct=5;ct<=10;ct++){let Zt=[.72,1,1,1,1,.75][ct-5],st=S*Zt;R[ct].p.x=-1.7+.12+(R[ct].p.x- -1.7-.12)*(1-.34*st),R[ct].p.y=-.2+.025+(R[ct].p.y- -.2-.025)*(1-.25*st),R[ct].p.z=.11+(R[ct].p.z-.11)*(1-.2*st),R[ct].fold*=1-.35*S}for(let ct=51;ct<=57;ct++){let Zt=Math.sin((ct-50)/8*Math.PI);R[ct].p.z+=.075*I*Zt,R[ct].p.y+=.045*I*Zt*(ct<54?-1:1),R[ct].fold*=1-.7*I}for(let ct=58;ct<=64;ct++){let Zt=Math.sin((ct-57)/8*Math.PI),st=I*Zt;R[ct].p.x=-1.7-.1+(R[ct].p.x- -1.7+.1)*(1-.21*st),R[ct].p.y=-.2+.015+(R[ct].p.y- -.2-.015)*(1-.3*st),R[ct].p.z=.065+(R[ct].p.z-.065)*(1-.55*st),R[ct].roll*=1-.25*st,R[ct].fold*=1-.55*st}let g=new ws(R.map(ct=>ct.p),!1,"centripetal");g.arcLengthDivisions=6e3;let T=g.getLength(),z=[],w=[],C=[],U=[],H=[],L=new _,F=new _,V=new We,B=new _;for(let ct=0;ct<=3600;ct++){let Zt=ct/3600,st=g.getUtoTmapping(Zt),yt=g.getPoint(st),Rt=g.getTangent(st).normalize(),mt=st*(f.length-1),Ot=Math.min(f.length-2,Math.floor(mt)),zt=mt-Ot,ne=R[Ot].n.clone().lerp(R[Ot+1].n,zt).normalize(),Qt=new _().crossVectors(ne,Rt);ct&&(V.setFromUnitVectors(F,Rt),B.copy(L).applyQuaternion(V)),Qt.lengthSq()<.015&&Qt.copy(ct?B:new _(1,0,0)),Qt.normalize(),ct&&Qt.dot(B)<0&&Qt.negate(),L.copy(Qt),F.copy(Rt),z.push(yt),w.push(Qt),H.push(Rt),C.push(c(R[Ot].roll,R[Ot+1].roll,zt)),U.push(c(R[Ot].fold,R[Ot+1].fold,zt))}let $=z[0],G=H[0].clone().negate(),X=$.clone().addScaledVector(G,2);X.z=Math.max($.z,X.z);let tt=new Xn($.clone(),X,new _(-9,-5,.2),new _(-T-64,-14,.26));tt.arcLengthDivisions=4e3;let ft=g.getLengths(),St=ft[Math.round(g.arcLengthDivisions*13/(f.length-1))],W=ft[Math.round(g.arcLengthDivisions*4/(f.length-1))],ut=ft[Math.round(g.arcLengthDivisions*51/(f.length-1))],It=ft[Math.round(g.arcLengthDivisions*57/(f.length-1))],Pt=ft[Math.round(g.arcLengthDivisions*57/(f.length-1))],gt=ft[Math.round(g.arcLengthDivisions*65/(f.length-1))];return{length:T,points:z,sides:w,rolls:C,folds:U,tangents:H,releaseLength:St,bightStartLength:W,collarStartLength:ut,collarEndLength:It,leftLoopStartLength:Pt,leftLoopEndLength:gt,exitCurve:tt,exitLength:tt.getLength()}}let y=M(),p=y.length;class m extends fn{constructor(I){super(),this.controls=I}getPoint(I,b=new _){let R=1-I,g=this.controls;return b.set(0,0,0).addScaledVector(g[0],R*R*R*R).addScaledVector(g[1],4*R*R*R*I).addScaledVector(g[2],6*R*R*I*I).addScaledVector(g[3],4*R*I*I*I).addScaledVector(g[4],I*I*I*I)}}function v(S){let I=new hi;I.name="one-continuous-cross-wrap";let b=new ni,R=new Ve(new Float32Array(1281*21*3),3),g=new Ve(new Float32Array(1281*21*2),2);R.setUsage(Xa),b.setAttribute("position",R),b.setAttribute("uv",g);let T=[];for(let st=0;st<1280;st++)for(let yt=0;yt<20;yt++){let Rt=st*21+yt,mt=Rt+20+1;T.push(Rt,mt,Rt+1,Rt+1,mt,mt+1)}b.setIndex(T);for(let st=0;st<=1280;st++)for(let yt=0;yt<=20;yt++)g.setXY(st*21+yt,st/1280*p,yt/20*.235);let z=new de(b,S);z.name="single-material-ribbon",z.castShadow=!0,z.receiveShadow=!0,z.frustumCulled=!1,I.add(z);let w=new _,C=new _,U=new _,H=new _,L=new _,F=new Float64Array(21),V=new Float64Array(21),B=-1,$=-1,G=!1,X=y,tt=0,ft=new _(-.9,-.435,0).normalize(),St=.72,W=null,ut=0;function It(st,yt=X){let Rt=a(st/yt.length)*3600,mt=Math.min(3599,Math.floor(Rt)),Ot=Rt-mt;return{p:yt.points[mt].clone().lerp(yt.points[mt+1],Ot),t:yt.tangents[mt].clone().lerp(yt.tangents[mt+1],Ot).normalize(),s:yt.sides[mt].clone().lerp(yt.sides[mt+1],Ot).normalize(),roll:c(yt.rolls[mt],yt.rolls[mt+1],Ot),fold:c(yt.folds[mt],yt.folds[mt+1],Ot)}}function Pt(st,yt,Rt){if(st<1e-7)return null;let mt=It(yt),Ot=It(X.bightStartLength),zt=new _(-1.7-.03,-.2-.1,.11),ne=new _(-1.7-.15,-.2-.23,.12),Qt=new _(-.93,-.37,0).normalize(),me=new _(-.45,-.89,0).normalize(),jt=mt.p.distanceTo(zt),ye=zt.clone().sub(mt.p).normalize(),ee=o(-.1,.8,mt.t.dot(ye)),ie=Math.max(Math.min(.18,jt*.28),.24*ee);Rt>.535&&mt.t.z<0&&(ie=Math.min(ie,.04/-mt.t.z));let P=mt.p.clone().addScaledVector(mt.t,-ie);P.z=Math.max(.07,P.z);let ge=mt.p.clone().lerp(zt,.42);ge.z+=(.5-.25*o(.535,.565,Rt))*ee;let ae=new m([mt.p.clone(),P,ge,zt.clone().addScaledVector(Qt,-ie),zt.clone()]);ae.arcLengthDivisions=500;let xt=zt.clone().addScaledVector(Qt,.05);xt.z=.1;let it=ne.clone().addScaledVector(me,-.045);it.z=.1;let Wt=new Xn(zt.clone(),xt,it,ne.clone());Wt.arcLengthDivisions=300;let pt=jt<.003?0:ae.getLength(),bt=Wt.getLength(),A=Math.max(.001,st-pt-bt),E=X.points[0].clone();E.z+=.14*o(.02,.28,Rt);let O=mt.p.clone().sub(E),et=O.dot(ft),Z=Math.max(0,O.lengthSq()-et*et),lt=Math.max(0,et+Math.sqrt(Math.max(0,st*st-Z)))*(.82+.12*o(.5,.66,Rt)),Y=E.clone().addScaledVector(ft,lt),J=Math.min(.36,A*.2),dt=ne.clone().lerp(Y,.45);function N(Yt){let he=ne.clone().addScaledVector(me,J*Yt),Ae=Y.clone().addScaledVector(ft,-J*Yt),Ye=dt.clone();Ye.z+=Math.min(.18,A*.12)*Yt;let sn=new m([ne.clone(),he,Ye,Ae,Y.clone()]);return sn.arcLengthDivisions=180,sn}let K=Math.max(A,N(.12).getLength()),q=.12,ot=1,at;for(;N(ot).getLength()<K&&ot<8;)ot*=1.5;for(let Yt=0;Yt<20;Yt++){let he=(q+ot)/2;at=N(he),at.getLength()<K?q=he:ot=he}at=N((q+ot)/2),at.arcLengthDivisions=800,at.updateArcLengths();let ht=at.getLength(),wt=pt+bt+ht,Ht=[],nt=[],Lt=[],kt=new We,At=mt.t.clone(),re=mt.s.clone().applyAxisAngle(mt.t,mt.roll),ue=640;for(let Yt=0;Yt<=ue;Yt++){let he=Yt/ue*wt,Ae,Ye;he<pt?(Ae=ae,Ye=he/pt):he<pt+bt?(Ae=Wt,Ye=(he-pt)/bt):(Ae=at,Ye=(he-pt-bt)/ht);let sn=Ae.getPointAt(a(Ye)),Bi=Ae.getTangentAt(a(Ye)).negate().normalize(),An=re.clone();Yt&&(kt.setFromUnitVectors(At,Bi),An.applyQuaternion(kt).normalize()),Ht.push(sn),nt.push(An),Lt.push(Bi),re=An,At=Bi}let qe=null,Ui=new _,rs=new _;for(let Yt=0;Yt<=ue;Yt++){if(Ui.crossVectors(new _(0,0,1),Lt[Yt]),Ui.lengthSq()<1e-6)continue;Ui.normalize();let he=Math.atan2(Lt[Yt].dot(rs.crossVectors(nt[Yt],Ui)),nt[Yt].dot(Ui));if(qe!==null){for(;he-qe>Math.PI;)he-=Math.PI*2;for(;he-qe<-Math.PI;)he+=Math.PI*2}qe=he;let Ae=Yt/ue*wt;nt[Yt].applyAxisAngle(Lt[Yt],he*o(0,Math.max(.02,pt*(.85-.25*o(.535,.565,Rt))),Ae))}let en=o(0,.08,Rt),nn=[];for(let Yt=0;Yt<=ue;Yt++){let he=Yt/ue*wt;if(nn[Yt]=mt.fold*(1-o(0,Math.max(.02,pt*.8),he)),en<1){let Ae=It(y.bightStartLength*(1-Yt/ue),y);Ht[Yt].lerp(Ae.p,1-en),Lt[Yt].lerp(Ae.t,1-en).normalize();let Ye=Ae.s.applyAxisAngle(Ae.t,Ae.roll);nt[Yt].lerp(Ye,1-en),nt[Yt].addScaledVector(Lt[Yt],-nt[Yt].dot(Lt[Yt])).normalize(),nn[Yt]=c(Ae.fold,nn[Yt],en)}}return{points:Ht,sides:nt,tangents:Lt,folds:nn,N:ue,length:st,fold:mt.fold,head:Ht[ue].clone(),connectorLength:pt,throatLength:bt,drawnLength:ht/wt*st,actualLength:wt,throatIn:zt.toArray(),throatOut:ne.toArray()}}function gt(st){if(st<-tt){let Rt=W?W.head:X.points[0];return w.copy(Rt).addScaledVector(ft,-tt-st),C.copy(ft).negate(),U.copy(W?W.sides[W.N]:X.sides[0]),{roll:0,fold:0}}if(W&&st<ut){let Rt=ut-st,mt=a(Rt/W.length)*W.N,Ot=Math.min(W.N-1,Math.floor(mt)),zt=mt-Ot;return w.copy(W.points[Ot]).lerp(W.points[Ot+1],zt),C.copy(W.tangents[Ot]).lerp(W.tangents[Ot+1],zt).normalize(),U.copy(W.sides[Ot]).lerp(W.sides[Ot+1],zt).normalize(),{roll:0,fold:c(W.folds[Ot],W.folds[Ot+1],zt)}}let yt=It(st);return w.copy(yt.p),C.copy(yt.t),U.copy(yt.s),{roll:yt.roll,fold:yt.fold}}function ct(st){if(st>=.08)return;let yt=21,Rt=p/1280;function mt(xt,it){let Wt=[],pt=Math.max(0,Math.floor((tt+xt)/Rt)),bt=Math.min(1280,Math.ceil((tt+it)/Rt));function A(et,Z,rt){let lt=R.getX(et),Y=R.getY(et),J=R.getZ(et),dt=R.getX(Z),N=R.getY(Z),K=R.getZ(Z),q=R.getX(rt),ot=R.getY(rt),at=R.getZ(rt),ht=(N-ot)*(lt-q)+(q-dt)*(Y-ot);Math.abs(ht)<1e-10||Wt.push({ax:lt,ay:Y,az:J,bx:dt,by:N,bz:K,cx:q,cy:ot,cz:at,den:ht,x0:Math.min(lt,dt,q),x1:Math.max(lt,dt,q),y0:Math.min(Y,N,ot),y1:Math.max(Y,N,ot)})}for(let et=pt;et<bt;et++)for(let Z=0;Z<20;Z++){let rt=et*yt+Z,lt=rt+yt;A(rt,lt,rt+1),A(rt+1,lt,lt+1)}let E=new Map,O=.12;for(let et of Wt)for(let Z=Math.floor(et.x0/O);Z<=Math.floor(et.x1/O);Z++)for(let rt=Math.floor(et.y0/O);rt<=Math.floor(et.y1/O);rt++){let lt=Z+","+rt,Y=E.get(lt);Y||(Y=[],E.set(lt,Y)),Y.push(et)}return E}let Ot=mt(X.leftLoopStartLength,X.leftLoopEndLength),zt=mt(X.collarStartLength,X.collarEndLength);function ne(xt,it,Wt){let pt=-1/0,bt=xt.get(Math.floor(it/.12)+","+Math.floor(Wt/.12))||[];for(let A of bt){if(it<A.x0||it>A.x1||Wt<A.y0||Wt>A.y1)continue;let E=((A.by-A.cy)*(it-A.cx)+(A.cx-A.bx)*(Wt-A.cy))/A.den,O=((A.cy-A.ay)*(it-A.cx)+(A.ax-A.cx)*(Wt-A.cy))/A.den;E>=-1e-7&&O>=-1e-7&&E+O<=1.0000001&&(pt=Math.max(pt,E*A.az+O*A.bz+(1-E-O)*A.cz))}return pt}let Qt=Math.floor(.6/Rt),me=Math.ceil((tt+X.bightStartLength+.15)/Rt),jt=[],ye=.05,ee=.006;for(let xt=Qt;xt<=me;xt++){let it=[];for(let E=0;E<=20;E++)it.push(new _().fromBufferAttribute(R,xt*yt+E));let Wt=it[20/2].clone(),pt=it[20].clone().sub(it[0]),bt=new _(-pt.y,pt.x,0).normalize(),A=Math.atan2(pt.z,Math.hypot(pt.x,pt.y));jt.push({row:xt,points:it,centre:Wt,axis:bt,angle:A,flatten:0,drop:0})}function ie(xt,it,Wt=!1){let pt=0,bt=1/0;for(let A=0;A<=20;A++){let E=xt.points[A].clone().sub(xt.centre).applyAxisAngle(xt.axis,xt.angle*it).add(xt.centre);bt=Math.min(bt,E.z);let O=ne(Ot,E.x,E.y);O>-1/0&&ne(zt,E.x,E.y)<=E.z+.002&&(pt=Math.max(pt,E.z-O+ee)),Wt&&R.setXYZ(xt.row*yt+A,E.x,E.y,E.z)}return{required:Math.max(0,pt),available:Math.max(0,bt-ye)}}for(let xt of jt){let it=ie(xt,0);if(it.required>it.available){let Wt=0,pt=1;for(let bt=0;bt<12;bt++){let A=(Wt+pt)/2,E=ie(xt,A);E.required<=E.available?pt=A:Wt=A}xt.flatten=Math.min(1,pt+.015)}}let P=Rt/.1;for(let xt=1;xt<jt.length;xt++)jt[xt].flatten=Math.max(jt[xt].flatten,jt[xt-1].flatten-P);for(let xt=jt.length-2;xt>=0;xt--)jt[xt].flatten=Math.max(jt[xt].flatten,jt[xt+1].flatten-P);let ge=1-o(.06,.08,st);for(let xt of jt){let it=ie(xt,xt.flatten*ge,!0);xt.drop=it.required,xt.available=it.available}let ae=Rt*.8;for(let xt=1;xt<jt.length;xt++)jt[xt].drop=Math.max(jt[xt].drop,jt[xt-1].drop-ae);for(let xt=jt.length-2;xt>=0;xt--)jt[xt].drop=Math.max(jt[xt].drop,jt[xt+1].drop-ae);for(let xt of jt){let it=Math.min(xt.drop,xt.available)*ge;if(!(it<=0))for(let Wt=0;Wt<=20;Wt++){let pt=xt.row*yt+Wt;R.setZ(pt,R.getZ(pt)-it)}}}function Zt(st=0,yt=16){if(G)return;let Rt=a(st);if(Rt===B&&yt===$)return;B=Rt,$=yt;let mt=o(.02,.46,Rt),Ot=o(.48,.7,Rt);X=Rt===0?y:M(mt,Ot,o(0,.08,Rt)),tt=p-X.length,ut=c(X.bightStartLength,X.releaseLength,o(.34,.67,Rt)),W=Rt===0?null:Pt(Math.max(0,tt+ut),ut,Rt);let zt=(p+yt)*o(St,1,Rt);for(let ne=0;ne<=1280;ne++){let Qt=ne/1280,me=Qt*p-zt,{roll:jt,fold:ye}=gt(me-tt);hg(w,C,U,Rt),U.applyAxisAngle(C,jt),H.crossVectors(C,U).normalize(),F[0]=0,V[0]=0;for(let ee=1;ee<=20;ee++){let ie=(ee-.5)/20,P=.12*Math.sin(ie*Math.PI*2+me*.65)*(1-ye),ge=.86*ye*Math.sin(ie*Math.PI*4+.4)+P+.07*(ie-.5);F[ee]=F[ee-1]+Math.cos(ge)*.235/20,V[ee]=V[ee-1]+Math.sin(ge)*.235/20}for(let ee=0;ee<=20;ee++){let ie=ee/20,ge=45e-5*Math.pow(Math.abs(ie*2-1),8)*(Math.sin(me*48+ie*5)+.4*Math.sin(me*97));L.copy(w).addScaledVector(U,F[ee]-F[20/2]).addScaledVector(H,V[ee]-V[20/2]+ge),R.setXYZ(ne*21+ee,L.x,L.y,L.z)}}ct(Rt),R.needsUpdate=!0,b.computeVertexNormals(),I.visible=Rt<.9999,I.userData.ribbonMetrics={progress:Rt,materialLength:p,width:.235,meshCount:1,freeEnds:2,pull:ut+zt,tailDistance:p-zt,guideLength:p,anchoredUntil:St,bowReleased:ut>=X.releaseLength-1e-4,heldUntil:St,bightStart:tt+Math.max(ut,X.bightStartLength)+zt,bightEnd:tt+X.releaseLength+zt,bightLength:Math.max(0,X.releaseLength-Math.max(ut,X.bightStartLength)),freeTailLength:Math.max(0,tt+ut),contraction:mt,relaxation:Ot,connectorLength:W?.connectorLength||0,throatLength:W?.throatLength||0,drawnMaterialEnd:zt+(W?.drawnLength||0),throatIn:W?.throatIn,throatOut:W?.throatOut}}return Zt(0),{group:I,update:Zt,dispose(){G||(G=!0,b.dispose(),I.clear())}}}return{createRibbonStrips:v}})(),{createRibbonContact:fg}=(()=>{function n(t,e,i,s){let a=new Le(1536,1536),o=new Le(1536,1536),c=new Le(1536,1536,{depthBuffer:!1});for(let p of[a,o,c])p.texture.generateMipmaps=!1;let l=new mn,h=new ke({uniforms:{castPass:{value:0}},vertexShader:`
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
      }`,side:Xe}),f=new Pi,u=new ke({uniforms:{source:{value:a.texture},direction:{value:new Xt(1/1536,0)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D source;uniform vec2 direction;varying vec2 vUv;void main(){vec4 c=texture2D(source,vUv)*.227027;c+=texture2D(source,vUv+direction*1.384615)*.316216;c+=texture2D(source,vUv-direction*1.384615)*.316216;c+=texture2D(source,vUv+direction*3.230769)*.070270;c+=texture2D(source,vUv-direction*3.230769)*.070270;gl_FragColor=c;}",depthTest:!1,depthWrite:!1}),d=new de(new si(2,2),u);f.add(d);let M=[o,a].map((p,m)=>{let v=new Xi({map:p.texture,transparent:!0,depthWrite:!1,toneMapped:!1}),S=new de(new si(6.8,4.4),v);return S.position.z=.001+m*2e-4,S.renderOrder=m,i.add(S),S});function y(p,m,v){h.uniforms.castPass.value=m,e.overrideMaterial=h,t.setRenderTarget(p),t.render(e,l),e.overrideMaterial=null,u.uniforms.source.value=p.texture,u.uniforms.direction.value.set(v/1536,0),t.setRenderTarget(c),t.render(f,l),u.uniforms.source.value=c.texture,u.uniforms.direction.value.set(0,v/1536),t.setRenderTarget(p),t.render(f,l)}return{update(){let p=t.getRenderTarget(),m=e.overrideMaterial;for(let v of M)v.visible=!1;s.visible=!1;try{y(a,0,1.5),y(o,1,5.5)}finally{e.overrideMaterial=m;for(let v of M)v.visible=!0;s.visible=!0,t.setRenderTarget(p)}},dispose(){a.dispose(),o.dispose(),c.dispose(),h.dispose(),u.dispose(),d.geometry.dispose();for(let p of M)p.geometry.dispose(),p.material.dispose(),i.remove(p)}}}return{createRibbonContact:n}})(),{createVellum:pg}=(()=>{let i=a=>Math.max(0,Math.min(1,a)),s=(a,o,c)=>{let l=i((c-a)/(o-a));return l*l*(3-2*l)};function r({bumpMap:a=null,map:o=null,inkMap:c=null}={}){let l=new si(4.08,6.28,30,54),h=l.getAttribute("position"),f=new Float32Array(h.array);h.setUsage(Xa);let u=new ke({uniforms:{tScene:{value:null},uResolution:{value:new Xt(1,1)},uHasScene:{value:0},uPaperMap:{value:o},uBump:{value:a},uInkMap:{value:c},uHasPaperMap:{value:o?1:0},uHasBump:{value:a?1:0},uHasInkMap:{value:c?1:0},uPaperColor:{value:new Vt(16776437)},uPeel:{value:0}},vertexShader:`
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
    `,transparent:!1,side:Xe,depthTest:!0,depthWrite:!0}),d=new de(l,u);d.name="vellum-sheet",d.position.z=.016,d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!1;let M=[];for(let H=0;H<h.count;H++){let L=f[H*3],F=f[H*3+1];(Math.abs(Math.abs(L)-4.08/2)<1e-4||Math.abs(Math.abs(F)-6.28/2)<1e-4)&&M.push(H)}M.sort((H,L)=>Math.atan2(f[H*3+1],f[H*3])-Math.atan2(f[L*3+1],f[L*3]));let y=new ni,p=new Ve(new Float32Array(M.length*3),3);y.setAttribute("position",p);let m=new Wn({color:11970699,transparent:!0,opacity:.2,depthWrite:!1}),v=new Ts(y,m);v.frustumCulled=!1,d.add(v);let S=Math.cos(Math.PI/8),I=Math.sin(Math.PI/8),b=-I,R=S,g=4.08*.5*S+6.28*.5*I,T=-1,z=!1;function w(H=0,L=0){if(z)return;let F=i(Number.isFinite(H)?H:0);if(F===T)return;T=F,u.uniforms.uPeel.value=F;let V=s(.015,.87,F),B=s(.49,.97,F),$=g-(g*2+.12)*V,G=.82+.2*s(.25,.85,F),X=2.55,tt=G*X;for(let ft=0;ft<h.count;ft++){let St=ft*3,W=f[St],ut=f[St+1],It=W*S+ut*I,Pt=W*b+ut*R,gt=Math.max(0,It-$);if(gt===0){h.setXYZ(ft,W,ut,0);continue}let ct=Math.min(gt,tt),Zt=ct/G,st=gt-ct,yt=$+G*Math.sin(Zt)+st*Math.cos(X),Rt=G*(1-Math.cos(Zt))+st*Math.sin(X);h.setXYZ(ft,S*yt+b*Pt,I*yt+R*Pt,Rt)}h.needsUpdate=!0,M.forEach((ft,St)=>p.setXYZ(St,h.getX(ft),h.getY(ft),h.getZ(ft)+.001)),p.needsUpdate=!0,l.computeVertexNormals(),d.position.set(5.6*B,6.6*B,.016+1.15*B),d.rotation.set(-.07*B,.1*B,-.1*B),d.visible=F<.995}function C(H,L,F){z||(u.uniforms.tScene.value=H,u.uniforms.uHasScene.value=H?1:0,u.uniforms.uResolution.value.set(Math.max(1,L),Math.max(1,F)))}function U(){z||(z=!0,l.dispose(),u.dispose(),y.dispose(),m.dispose())}return w(0,0),{mesh:d,update:w,setBackground:C,dispose:U}}return{createVellum:r}})(),{createVellumMaterials:mg}=(()=>{function t(l){return()=>{l|=0,l=l+1831565813|0;let h=Math.imul(l^l>>>15,1|l);return h=h+Math.imul(h^h>>>7,61|h)^h,((h^h>>>14)>>>0)/4294967296}}function e(l,h){let f=document.createElement("canvas");return f.width=l,f.height=h,{canvas:f,context:f.getContext("2d",{alpha:!0})}}async function i(){let l=await fetch(ss.logo);if(!l.ok)throw new Error(`Le Invite logo failed to load (${l.status}).`);let h=(await l.text()).replace(/width="100%"/,'width="165.43" height="45.9"').replaceAll("currentColor","#000000"),f=URL.createObjectURL(new Blob([h],{type:"image/svg+xml"}));try{let u=new Image;return u.src=f,await u.decode(),u}finally{URL.revokeObjectURL(f)}}function s(l,h){let{canvas:f,context:u}=e(660,Math.round(205.39632153860518));return u.drawImage(l,0,0,f.width,f.height),u.globalCompositeOperation="source-in",u.fillStyle=h,u.fillRect(0,0,f.width,f.height),f}function r(l,h,f,u,d){l.drawImage(h,f,u,d,d/3.2133)}function a(){let{canvas:l,context:h}=e(800,1240),f=t(67),u=h.createImageData(800,1240);for(let d=0;d<u.data.length;d+=4){let M=f()*4;u.data[d]=250+M,u.data[d+1]=247+M,u.data[d+2]=234+M,u.data[d+3]=255}h.putImageData(u,0,0);for(let d=0;d<3800;d++){let M=f()*800,y=f()*1240;h.strokeStyle=f()>.5?"rgba(255,255,249,.16)":"rgba(206,192,158,.085)",h.lineWidth=.4+f()*.65,h.beginPath(),h.moveTo(M,y),h.quadraticCurveTo(M+4,y+1,M+1+f()*11,y+(f()-.5)*7),h.stroke()}return l}function o(l,h){let{canvas:f,context:u}=e(1200,1860);return u.scale(3,3),r(u,s(l,"#2b2a26"),70,250,260),u.textAlign="center",u.textBaseline="alphabetic",u.font=`500 21px ${h}`,u.fillStyle="#2b2a26",u.fillText("Jak kao hirur\u0161ki \u010Delik.",200,380),f}async function c(l="Arial, sans-serif"){let[,h,f]=await Promise.all([document.fonts.load(`400 24px ${l}`),i(),(async()=>{let M=new Image;return M.crossOrigin="anonymous",M.src=ss.paperBump,await M.decode(),M})()]),u=[],d=(M,y=!1)=>{let p=new dn(M);return p.colorSpace=y?gi:ve,p.wrapS=p.wrapT=ei,p.magFilter=Pe,p.minFilter=di,p.generateMipmaps=!0,p.anisotropy=8,u.push(p),p};return{paperBump:d(f,!0),vellumMap:d(a()),vellumInkMap:d(o(h,l)),dispose(){u.forEach(M=>M.dispose())}}}return{createVellumMaterials:c}})(),{createVellumOverlay:gg}=(()=>{async function n(e){await document.fonts.ready;let i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],r=[i,...i.querySelectorAll("*")],a=(d,M,y)=>{let p=getComputedStyle(d,y),m=["display","position","width","height","top","right","bottom","left","box-sizing","margin","padding","border","border-top","border-right","border-bottom","border-left","border-radius","box-shadow","background","background-size","background-repeat","background-position","opacity","mix-blend-mode","z-index","overflow","font-family","font-size","font-weight","font-style","font-kerning","line-height","letter-spacing","color","text-align","text-shadow","text-transform","text-wrap","white-space","flex-direction","justify-content","align-items","gap","max-width","min-width","transform","transform-origin"];for(let v of m)M.style.setProperty(v,p.getPropertyValue(v));return p};s.forEach((d,M)=>{let y=r[M];a(d,y);for(let p of["::before","::after"]){let m=getComputedStyle(d,p);if(m.content==="none"||m.content==="normal")continue;let v=document.createElement("span");a(d,v,p),p==="::before"?y.prepend(v):y.append(v)}}),Object.assign(i.style,{position:"absolute",left:"0px",top:"0px",transform:"none",margin:"0",boxShadow:"none",willChange:"auto"});let o=[];for(let d of document.styleSheets)try{for(let M of d.cssRules)M.type===CSSRule.FONT_FACE_RULE&&o.push(M.cssText)}catch{}let c=new XMLSerializer().serializeToString(i),l=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1860" viewBox="0 0 400 620"><foreignObject width="400" height="620"><div xmlns="http://www.w3.org/1999/xhtml"><style>${o.join(`
`)}</style>${c}</div></foreignObject></svg>`,h=new Image;h.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(l),await h.decode();let f=document.createElement("canvas");f.width=1200,f.height=1860,f.getContext("2d").drawImage(h,0,0);let u=new dn(f);return u.colorSpace=ve,u.anisotropy=8,u}async function t(e){let i=e.querySelector(".li-stage"),s=e.querySelector(".li-card"),[r,a]=await Promise.all([mg(getComputedStyle(e).fontFamily),n(s)]),o;try{o=new Ks({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(w){throw r.dispose(),a.dispose(),w}o.setPixelRatio(Math.min(devicePixelRatio,2)),o.outputColorSpace=ve,o.toneMapping=js,o.toneMappingExposure=1.1,o.setClearColor(0,0);let c=o.domElement;c.className="li-webgl-vellum",c.setAttribute("aria-hidden","true"),Object.assign(c.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"2"}),s.after(c);let l=new Pi,h=new Ki(-8,8,4.5,-4.5,.1,60);h.position.z=22;let f=new hi;l.add(f);let u=new Xi({map:a,toneMapped:!1}),d=new de(new si(4,6.2),u);f.add(d);let M=new ke({uniforms:{peel:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float peel;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*vec2(4.,6.2);float t=smoothstep(.015,.87,peel);float edge=3.09-(6.18+.12)*t;float d=dot(p,vec2(.92388,.38268))-edge;float a=exp(-d*d/.22)*.18*sin(peel*3.14159265);gl_FragColor=vec4(.22,.17,.10,a);}",transparent:!0,depthWrite:!1}),y=new de(new si(4,6.2),M);y.position.z=.007,f.add(y);let p=pg({bumpMap:r.paperBump,map:r.vellumMap,inkMap:r.vellumInkMap});f.add(p.mesh);let m=new Le(1,1,{depthBuffer:!0}),v=0,S=0,I=null,b=!1;function R(w,C){v=w,S=C,h.left=-w/200,h.right=w/200,h.top=C/200,h.bottom=-C/200,h.updateProjectionMatrix(),o.setSize(w,C,!1);let U=o.getDrawingBufferSize(new Xt);m.setSize(U.x,U.y),p.setBackground(m.texture,U.x,U.y),I?.dispose();let H=document.createElement("canvas");H.width=w,H.height=C;let L=H.getContext("2d");L.save(),L.translate(w*.5,C*.4),L.scale(w,C);let F=L.createRadialGradient(0,0,0,0,0,.6),V=getComputedStyle(i);F.addColorStop(0,V.getPropertyValue("--li-stage-center").trim()||"#faf9f0"),F.addColorStop(.7,V.getPropertyValue("--li-stage-edge").trim()||"#f5f3e8"),L.fillStyle=F,L.fillRect(-.5,-.4,1,1),L.restore(),I=new dn(H),I.colorSpace=ve}function g(w){if(b)return;(w.width!==v||w.height!==S)&&R(w.width,w.height),f.position.set(w.cardX/100,(-S*.06-w.cardY)/100,0),f.rotation.z=-w.angle*Math.PI/180,f.scale.setScalar(w.cardScale),c.style.zIndex=String(w.zIndex),p.update(w.peel,0),M.uniforms.peel.value=w.peel;let C=p.mesh.visible;c.style.visibility=C?"visible":"hidden",C&&(p.mesh.visible=!1,d.visible=!0,l.background=I,o.setRenderTarget(m),o.render(l,h),o.setRenderTarget(null),d.visible=!1,l.background=null,p.mesh.visible=!0,o.render(l,h),e.dataset.vellum="ready")}function T(w){w.preventDefault(),z(),e.dataset.vellum="unavailable"}c.addEventListener("webglcontextlost",T);function z(){b||(b=!0,c.removeEventListener("webglcontextlost",T),p.dispose(),r.dispose(),a.dispose(),I?.dispose(),d.geometry.dispose(),u.dispose(),y.geometry.dispose(),M.dispose(),m.dispose(),o.dispose(),c.remove())}return{render:g,dispose:z}}return{createVellumOverlay:t}})(),{createRibbonOverlay:Mg}=(()=>{function n(e,i){let s=new Ps,r=l=>(l.wrapS=l.wrapT=jn,l.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),l),a=r(s.load(ss.silkNormal,i)),o=r(s.load(ss.silkRoughness,i)),c=r(s.load(ss.silkColor,i));return c.colorSpace=ve,a.repeat.set(.35,.35),o.repeat.copy(a.repeat),c.repeat.copy(a.repeat),{normal:a,rough:o,color:c,dispose(){a.dispose(),o.dispose(),c.dispose()}}}function t(e){let i=e.querySelector(".li-stage"),s=new Ks({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.outputColorSpace=ve,s.toneMapping=Bs,s.toneMappingExposure=.94,s.shadowMap.enabled=!0,s.shadowMap.type=sa,s.setClearColor(0,0);let r=s.domElement;r.className="li-ribbon-canvas",r.setAttribute("aria-hidden","true"),i.append(r);let a=new Pi,o=new hi;a.add(o);let c=new Ki(-8,8,4.5,-4.5,.1,80);c.position.set(0,0,24);let l=new Ja,h=new es(s),f=h.fromScene(l,.04);a.environment=f.texture,a.environmentIntensity=.38,a.environmentRotation.set(.1,.85,-.52),l.dispose(),h.dispose();let u=new qn(16774633,1.36);u.position.set(-4.5,6,4.2),a.add(u),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),Object.assign(u.shadow.camera,{left:-4,right:4,top:3,bottom:-3,near:.1,far:24}),u.shadow.camera.updateProjectionMatrix(),u.shadow.bias=-1e-5,u.shadow.normalBias=.0015,u.shadow.radius=2;let d=new qn(16054015,.17);d.position.set(4,-2,6),a.add(d);let M,y=!1,p=n(s,()=>{M&&!y&&T(M)}),m=new Ls({color:12887398,map:p.color,normalMap:p.normal,normalScale:new Xt(.32,.32),roughnessMap:p.rough,roughness:.35,metalness:0,sheen:.48,sheenColor:new Vt(14261885),sheenRoughness:.46,anisotropy:.88,anisotropyRotation:Math.PI/2,specularIntensity:.66,side:Xe});m.onBeforeCompile=C=>{C.vertexShader=`varying vec2 silkUV;
`+C.vertexShader,C.vertexShader=C.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
silkUV=uv;`),C.fragmentShader=`varying vec2 silkUV;
`+C.fragmentShader,C.fragmentShader=C.fragmentShader.replace("#include <map_fragment>",`
#ifdef USE_MAP
vec4 sampledDiffuseColor=texture2D(map,vMapUv);
float fibreLuminance=dot(sampledDiffuseColor.rgb,vec3(.2126,.7152,.0722));
diffuseColor.rgb*=clamp(.91+fibreLuminance*.18+(fibreLuminance-.36)*.60,.90,1.06);
#endif
`),C.fragmentShader=C.fragmentShader.replace("#include <roughnessmap_fragment>",`
float roughnessFactor=roughness;
#ifdef USE_ROUGHNESSMAP
roughnessFactor=.34+.14*texture2D(roughnessMap,vRoughnessMapUv).g;
#endif
`)};let v=dg(m);v.group.position.y=0,o.add(v.group);let S=new de(new si(6.8,4.4),new Xi({colorWrite:!1}));S.renderOrder=-1,o.add(S);let I=fg(s,a,o,S),b=0,R=0,g=-1;function T(C){if(y)return;M=C;let{width:U,height:H,scale:L,angle:F,y:V,progress:B}=C,$=B<1;r.style.visibility=$?"visible":"hidden",$&&((U!==b||H!==R)&&(b=U,R=H,s.setSize(U,H,!1),c.left=-U/200,c.right=U/200,c.top=H/200,c.bottom=-H/200,c.updateProjectionMatrix()),v.update(B,Math.max(16,U/(100*L)+4)),B!==g&&(o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.setScalar(1),I.update(),g=B),o.position.set(0,(-R*.06-V)/100,0),o.rotation.z=-F*Math.PI/180,o.scale.setScalar(L),s.render(a,c),e.dataset.ribbon="ready")}function z(){y||(y=!0,v.dispose(),p.dispose(),m.dispose(),I.dispose(),S.geometry.dispose(),S.material.dispose(),f.dispose(),u.shadow.dispose(),s.dispose(),r.remove())}function w(C){C.preventDefault(),z(),e.dataset.ribbon="unavailable"}return r.addEventListener("webglcontextlost",w),{update:T,dispose(){r.removeEventListener("webglcontextlost",w),z()}}}return{createRibbonOverlay:t}})(),{mountEnvelope:Eg}=(()=>{function n(t){let e=t.querySelector(".li-stage"),i=[...t.querySelectorAll(".li-envelope")],s=t.querySelector(".li-flap-layer"),r=t.querySelector(".li-flap"),a=t.querySelector(".li-card"),o=null,c=!1;gg(t).then(V=>{c?V.dispose():(o=V,w())}).catch(V=>{t.dataset.vellum="unavailable",console.error("Vellum could not start",V)});let l=t.querySelector(".li-table-shadow"),h=t.querySelector(".li-scroll-cue"),f=t.querySelector(".li-stage-heading p"),u=t.querySelector(".li-skip"),d=t.querySelector(".li-replay"),M=matchMedia("(prefers-reduced-motion: reduce)"),y=null;try{y=Mg(t)}catch(V){console.error("Ribbon could not start",V)}let p=()=>M.matches?0:window.innerHeight*1.6,m=0,v=0,S=0,I=0,b=1,R=(V,B=0,$=1)=>Math.min($,Math.max(B,V)),g=(V,B,$)=>{let G=R(($-V)/(B-V));return G*G*(3-2*G)},T=(V,B,$)=>V+(B-V)*$;function z(){m=0;let V=M.matches?1:R(cg((window.scrollY-I)/b/.94)),B=g(.012,.245,V),$=R((V-.19)/.81),G=g(.08,.28,$),X=g(.28,.48,$),tt=g(.48,.65,$),ft=g(.72,.91,$),St=Math.min(.88,v*(v<700?.88:.7)/680,S/820),W=Math.min(1.04,(v-32)/400,(S-142)/620),ut=I+b*(1+Iu),It=R((window.scrollY-ut)/p()),Pt=g(0,.3,It),gt=g(.3,1,It),ct=Math.min(2.6,(v-40)/400),Zt=Math.max(0,38-(S*.56-560*St))*G,st=Zt+(390*X+380*tt)*St,yt=T(-5,-1.5,G),Rt=`translate(-50%,-50%) translateY(${st}px) rotate(${yt}deg) scale(${St})`,mt=1-g(.48,.65,$);i.forEach(ie=>{ie.style.transform=Rt,ie.style.opacity=mt}),y?.update({width:v,height:S,scale:St,angle:yt,y:st,progress:B}),r.style.transform=`rotateX(${-178*G}deg)`,s.style.zIndex=G<.505?"6":"1",s.style.filter=`drop-shadow(0 0 .7px #7d6840) drop-shadow(0 ${3+7*Math.sin(Math.PI*G)}px ${2+6*Math.sin(Math.PI*G)}px #716245${G<.6?"25":"08"})`;let Ot=T(90+yt,0,tt),zt=Ot*Math.PI/180,ne=Math.abs(Math.sin(zt))*400+Math.abs(Math.cos(zt))*620,Qt=Math.abs(Math.cos(zt))*400+Math.abs(Math.sin(zt))*620,me=Math.min(T(St,W,tt),(S-124)/ne,(v-30)/Qt),jt=Zt-145*St*X,ye=T(jt,-S*.06,tt),ee=T(-Math.sin(yt*Math.PI/180)*(-145*St*X),0,tt);if(a.style.transform=`translate(-50%,-50%) translate(${ee}px,${ye}px) rotate(${Ot}deg) scale(${me})`,$>=.94){let ie=T(me,Math.max(me,ct),Pt),P=620*ie,ge=P<=S-40?S/2:T(20+P/2,S-20-P/2,gt);a.style.left=`${(v-400)/2}px`,a.style.top=`${(S-620)/2+(ge-S/2)}px`,a.style.transform=`scale(${ie})`}else a.style.left="50%",a.style.top="56%";a.style.zIndex=X>.85?"7":"2",o?.render({width:v,height:S,cardScale:me,cardX:ee,cardY:ye,angle:Ot,peel:ft,zIndex:X>.85?7:2}),l.style.transform=`translate(-50%,-50%) translateY(${st+20*St}px) rotate(${yt}deg) scale(${St})`,l.style.opacity=mt*(1-.35*X),h.style.opacity=1-g(.08,.23,$),f.style.opacity=1-g(.1,.3,$),t.dataset.complete=String($>=.94),t.dataset.progress=$.toFixed(4),t.dataset.stageProgress=V.toFixed(4),t.dataset.ribbonProgress=B.toFixed(4),h.firstChild&&(h.firstChild.textContent=(V<.245,"Skroluj polako da otvori\u0161"))}function w(){m||(m=requestAnimationFrame(z))}function C(){v=e.clientWidth,S=e.clientHeight,I=t.getBoundingClientRect().top+window.scrollY,b=Math.max(1,(t.offsetHeight-p()-S)/(1+Iu)),w()}function U(V){window.scrollTo({top:I+b*ug(V),behavior:M.matches?"instant":"smooth"})}let H=()=>U(.965),L=()=>U(0);u.addEventListener("click",H),d.addEventListener("click",L),window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",C,{passive:!0}),M.addEventListener("change",C);let F=new ResizeObserver(C);return F.observe(t),F.observe(e),C(),()=>{c=!0,o?.dispose(),y?.dispose(),cancelAnimationFrame(m),F.disconnect(),window.removeEventListener("scroll",w),window.removeEventListener("resize",C),M.removeEventListener("change",C),u.removeEventListener("click",H),d.removeEventListener("click",L)}}return{mountEnvelope:n}})();function vu({id:n="the-opening",className:t="",theme:e="auto",fontFamily:i="Arial, sans-serif"}){let s=Sl(null),[r,a]=bl(e==="dark"?"dark":"light");return $a(()=>{if(e!=="auto"){a(e);return}let o=matchMedia("(prefers-color-scheme: dark)"),c=()=>{let h=s.current?.parentElement?.closest('.dark, .light, [data-theme="dark"], [data-theme="light"]'),f=h?h.classList.contains("dark")||h.getAttribute("data-theme")==="dark"?"dark":"light":o.matches?"dark":"light";a(f)},l=new MutationObserver(c);return l.observe(document.documentElement,{attributes:!0,subtree:!0,attributeFilter:["class","data-theme"]}),o.addEventListener("change",c),c(),()=>{l.disconnect(),o.removeEventListener("change",c)}},[e]),$a(()=>{let o=s.current;if(!o)return;let c=!1,l,h=0;return o.dataset.liReady="false",(async()=>{let f=getComputedStyle(o).fontFamily,[u]=await Promise.all([lg(),document.fonts.load(`400 24px ${f}`)]);await document.fonts.ready,!c&&(o.style.setProperty("--li-paper-surface",`url("${u}")`),l=Eg(o),h=requestAnimationFrame(()=>{c||(o.dataset.liReady="true")}))})().catch(f=>{c||console.error("Le Invite could not initialise",f)}),()=>{c=!0,cancelAnimationFrame(h),l?.()}},[i,r]),React.createElement("section",{ref:s,className:`li-opening ${t}`.trim(),id:n,"aria-label":"Otvori kovertu","data-li-theme":r,"data-li-ready":"false",style:{"--li-font-family":i}},React.createElement("style",null,ag),React.createElement("div",{className:"li-stage"},React.createElement("div",{className:"li-stage-heading"},React.createElement("span",null,"Mnjauprrrrr"),React.createElement("p",null,"Malo i\u0161\u010Dekivanja.")),React.createElement("div",{className:"li-table-shadow","aria-hidden":"true"}),React.createElement("div",{className:"li-envelope li-back","aria-hidden":"true"},React.createElement("div",{className:"li-envelope-paper li-paper"}),React.createElement("div",{className:"li-liner li-paper"}),React.createElement("div",{className:"li-mouth"})),React.createElement("div",{className:"li-envelope li-flap-layer","aria-hidden":"true"},React.createElement("div",{className:"li-flap"},React.createElement("div",{className:"li-flap-face li-flap-front li-paper"}),React.createElement("div",{className:"li-flap-face li-flap-inside li-paper"}),React.createElement("svg",{className:"li-flap-edge",viewBox:"0 0 680 340","aria-hidden":"true"},React.createElement("path",{d:"M0 1 L320 326 Q333 334 340 334 Q347 334 360 326 L680 1",fill:"none",stroke:"rgba(70,48,18,.30)",strokeWidth:"7",style:{filter:"blur(3px)"},transform:"translate(0 4)"}),React.createElement("path",{d:"M0 1 L320 326 Q333 334 340 334 Q347 334 360 326 L680 1",fill:"none",stroke:"#9b835a",strokeWidth:"1.7",strokeLinejoin:"round"})),React.createElement("img",{className:"li-seal",src:"/assets/li/seal.png",alt:""}))),React.createElement("article",{className:"li-card","aria-label":"Hirur\u0161ki \u010Delik"},React.createElement("div",{className:"li-card-stock li-paper"}),React.createElement("img",{className:"li-card-photo",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wAARCAYOA+gDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAYHBQgCAwQJAf/EAGoQAAEDBAECBAMDBQoJBQoEFwEAAgMEBQYRBxIhCBMxQRQiURUyYSNCUnGBCRYXNzhidpGytDM5U3J0dYKhsyRDc5LDGDVVV2ODk5WWsSUmNDZUVqK10dPUKGajwdIZJ1ikwtXh8ERklP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJBEBAQEAAgMBAAMBAQEBAQAAAAERAiESMUFRAyJhcTJCE7H/2gAMAwEAAhEDEQA/AN6ERF43YREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEUP5J5Pw7ijDJMlzK5CmpweiCCMB89VJ+hEzY6nf1AepIHdPYmCLUHGfHzid6z6lstzwS42q11VQ2Bly+NZM6Pqd0h0kQYNN799OcQN6BW3yt42e0l0REUUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEX45zWMLnODWgbJJ0AEH6i105Q8ZfFeATzWyxyyZfd49tMNskaKZjvo+oOx/1A/wDHS1sufi+8Q3Jd9Nk47tMVtkl/wdLY7ea2pLf5z3h//WDW6/BbnC1Lyj6PLH19+sdr39p3m30WvX4mpZHr/rELQy3eG3xW8lgVWf53V2mmk7mC7XiWoeAf0YYi5jf1EtU1sv7ntjsYa7JOSLrWOPd7bfRR0/8AUXuk/r0njJ7qbfxs/NytxdTkio5JxCIj1El4p26/revI/mrhyMEu5Ywjt7C+UpP9tVNbfA1wZQ9PxUORXLXr8Vcenf8A6JjFKqDwl+Hu36MXHVNK4e9TW1U2/wBjpSP9yn9V7Zuv8RXBtuhfLPyhjkgYCSKaqE5P6gze1pBHzfhHI/iSreR+XqC7Xe0W38ljeJUdOJw/bvk8wOcGHWg5w38znDsWt6VY3ikxDAKHJMO4Q4vwXHbdkl/rIpamspqGMTQQl/RG0ya6g1zupzu47Rd+xW3uE8dYdx/jtDacZsFuo/hadlOaqKmYyafpaAXyPA25ztbJJ7krXXGandao0fGefeJfn6yci5fg5wTCLMyKOloqpnRVVkUbzIGdJAdpxPdxDWhvZvUdk7sIixbqyYIiKK66iogpKSWqqpo4IImGSSWR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dgr9QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBfjnNYwve4NaBsknQAX6tefELV3TMOUuPuB6G5VFttuUy1FVe56Z3RJJSU7Oswtd7B4a8H8Q31GwbJpVhT898LU97Npm5QxdtUHdBHx8ZY0/Qv30j9pVgU9RBV0kdVSzxzwStD45YnBzXtI2CCOxBHuoRS8K8SUWLtx2DjjGfs4R+WY5LfHI5w1rbnuBc5384nf4qq+HYajizxS5XwVRVlRUYpJbG5HY4KiQyOoGukaySBrj36C5xIB/Q36ucTcl9IuLLeUOOsEqGU2YZpZbPUSN62U9VVNbK5v6Qj31a/HWl6sV5AwfOIXyYfllnvfljcjKGqZK+Mfzmg7b+0Baq4HkPG/GfK+dU3iHsQpMsud+nqaO/wB5tjqunq6M68psEvS4MaNHtoDRaCfl6W7DYDaeEbvkUud8aUmJT3E05pZq6x+UHBjnBxbI2PsHEsHdw6tDXolmEqXZLluL4bZ/tXK8gttlo99Inr6hsLXO/Rb1H5j+A7rFYlylxzndVJS4fmlmvFTGOp1NS1LTKG/pdB+bX460tVMc5J4Vy3njMs55zyO3y1Ntuktpxyx3Onknp6OkiOvPEYY5he899nZBa78NezmTOPDFfcJqMi4/y2y2LPLMw11luNooZaWZ80Y6hC4tjAe1+i3TuwLvpvd8Piav7m7l6ycVcc3SsdfLTTZIaGSotVBXEn4qRvYAMBBcNkDsQvPxhzxgWc4xi1JPmdgflt0t8ElTaqWbT21JhD5Y2sJJHS7r7EkjXqolyRX2nknwC12fXex26a41WLfGNklp2vdTSmMOd5bnAlung6I+gUz4QxXF4OBOPbxDjdojuJx23ymsZRxiYvdSs6ndYG9nZ2d99lMmL9QvKv8AGT4H/RSr/tyqa8uYbxhmN6wuDkO7Poqymuoks0TKvyDVVG2/kta+bem+mj9CNlQrKv8AGT4H/RSr/typ4jf44eC/6XM//gT7ET3m/GuOMu4yjsXKF4da7NPXw+VUNqhTuNR36GhxBBJHUNEH+sAiUxX3FbFfrTgf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7k4kwflHErNNe63Crsa2otlONy1FLIGibywNkuAY3sAexJ760sfh9l5C5I8VFv5byzCKnC7Jj9plt9uoq+dklVVzSlwe9zW/caGvPr9G63s62IVtyw9qEZ4wOHKy3tjs89/ul+kHTHjtNaKg1rpf8n93o6t9uzyFFfCo/JpububKvMKGOgvdTX2+qqqON4kFMZG1EjYuoepY1zWk/Vp9fVbRiOMSmQMaHkaLtdyP1rkpszIYrm08x2K7eI69cNxWm6xXa1ULa99ZLGBTytIjJDTvq/55ncjRIcPYbsZQOxYJW0XP2Wci3WpppxcaKjtlrjjLi+mp4g58ofsAbfK4nQ32aPdTxS58UREUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEWvvjEyC8YzwRarvY6qrhq4sioyG00zonTACQ+WS07IdoAhWTbhWwSKgabw73jMKCO+crco5pU5FVNEstNZLl8FQ29x7+XBE1p7N9Oo76tbI7rp4evWZ4R4hch4HzDJqzKKOC2Mvliu1wPVVfDl4jdFK71eQ53Yn9B3oCALn4mthEWveX3jMeX/ABAXbiLEMorsVxnGqeGbIrxa3dFZUTTDqjpoZP8Amx07JcPdrgd60eF98Pl/wyyzZLw5yVmVNkdEwzsoLvcXV1Hci0bMUsbh6u1oO9ifT3DP01sOihXEnIVLynw3Y84pqcUzq+E+fTg78mZjiyRg/APa7RPqNFZ7Ksjt+IYPd8qupcKK10ctZN0feLY2lxA+pOtD8SFM+Ky6LWHCeOsz59xuDkrlTOsls9tuw+ItGL49WmjgpqYn8m6VwG5Hubp2/XRB336W8Mjhy7wu32zZLS5rfMp40rq2O33W3X6f4motRk30zwy6B6Ad7boD0HcuDm3x+JraFFrzz/lV7k5g494rizKqwmwZIamS432jlEE7/KaCynimPaMuJA367ez19He9/hkt9A1tbh3K/I9iujSHNq/tl1UyQ/8A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bXTPNVc7pN3lr6p/d8rye/c9gCToAep2Tis28PPD/IuXyZRmWIm5XaSNkTqn7RqodtaNNHTHK1o0PwUe/wC5C8PH/i/f/wCuK/8A+3pszDtifGL/ABKY9/Su3/8AaK7Mly7F8NtUVzyy/wBvs1HLM2njnrp2xMdI7emgk+ugT+oE+gXgyTjrDcuxK3YxkNn+MtVumhqKWn+Ilj8t8I1Gepjg46B9CSD77XHPeOML5NsFPZc4skd1oqepbVxROlfH0yNBAPUxwOtOII3ogps9CVAggEEEH0IRcWMZHG2ONoaxoDWtaNAAewXJZUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF4JrJZqi7R3SotFBLXR66KqSnY6VuvTTyNj+te9EBERAREQEREBERAREQeesoaK40pprhR09XAe5injEjT+wjS6rdZ7TaInRWm10VAxx25lLA2IH9YaAvaiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICxV6yK04/Na4rpUOiddK5lupAGOd1zva5zWnQ7dmO7nt2WV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Rkle1pGt6b/yj5ifYDZPoAVZ3GeM4NivGdtoOOKZsGNzs+NowyeWYPbL8/WHSuLu+96J7fgoTZvCpwFYr1HdKLj2llnid1Rtraqoqomne/8AByyOYf2gq42taxgYxoa1o0ABoAKWrI/URFlRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF5q630FzozSXKhpqyncdmGoibIwn9TgQvSiDppaSloaNlJRU0NNTxjTIoWBjGj6ADsF3IiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiqLxF8nXjibi23ZRZ30rC+9U1HUuqITKBTvDzIQ0EHq03srJvQt1Fr9RZB4mOSaFuT4dS4jhGO1LRLbaa/RS1NfUxHu2SUM22MOGiGjuN+/qcpx7y/l8fKv8EnMtgoLNlcsDqq2XC1vc6hu0Td9XldW3NeAHHR+h7N7A3xTV2otfeXucsr478ROP4VZbC2/RXezulpbZCzpnqa10ro42+aTpkY11OJHYNJUktTfEWzjnLbjk1VhoyF9I2awUFohlkjglaHufFMZNdRd+TaCCQDsp4mreRQHhjkWLlPhSyZgWsirZ4vJr4GDXk1UZ6ZW6PcDqHUAfzXNWF5W5EyGy8i4Lxzg/wAI7IMjrzJUyVERlbSW+IEzSloI+Y/m77EtcFM7w1bCKm+TOX8it3I1JxTxRj1LkGb1FP8AF1Dq2QsorVT+0tQWkE72NNBB7j1JaDHrncvFjgttfk1yhwXN7fTN82ttFqinpqsRju7yHOGnEAHsQSfZpKviau7K7xJjuBXzIIYWTSW63z1jInnQeY43PDSR7Hp0sHxNmtVyNwvj+bVtDDRT3SnMz6eFxcyM9bm6BPc/dWCrM8sHJfhMv+Z41M6SgrrBWuDJBqSF4geHxvHs5rgQfb3GwQVRnAmZcxZZwHjeK8Q2eyWy32am+GuGS5GJHRyTlxeYqaJndxaHN253bZI7aBLx6N7bhqO53e77jnHF3vmM47LkN3pIDJTWuJ/S6ods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dBWL4lMGynP+L7NaMRtf2jWU+QUddLF58cPTDH19btyOaDrY7A7+gV3uH6tq2W2gs1mpLTa6WKkoaSFsFPBE3pbHG0ANaB9AAFrLjWHWF/7qRl11db4TLS49FcYR0DTKmQQxOlA/SLS/v9Xk+q2kVN2HBspovG/lXIFTa+jHa7HYKGmrfPjPmTNfGXM6A7rGg09y0Dt6rMvtasDkO2UV54kye1XGBk9LU2upjkjeNggxO/3j1B9iFW3hivsUHgkxO+XutbDTUVBUmaomd8sUMM8zdk/RrGD9gVtZHSVFfh12oaSPzKioopoombA6nOYQBs9h3Puqm4k4tvNJ4I6TifNqZ9ouNTba+31bGSxzOgE802nBzHFrj0yNd2P4H3Sej689l5xzXLbRHdeMOBr1e8aO46S41l1pLU2drT09UcUhLujt2P8A7vRQbE7xlVw/dH6auyfBDhdfW4Y9k1F9ow1xqmNqD0zOfF2/MDdHuPLHsQpFg1y8QvGGDW/j2p4ZostitEIo6K9WzIKejhnhZ2Z1xyjraQ3Wzrv9F14hx5zC/wAZNFylntNQSUk+PS0jxbp2GC2OMp8ukaHOEkh187pOnpLpHAdgtdTUbHoq6vFx5fj8Rdit1nsVpm45koXuudwkkAqI59P0GjrB9RFoBhBDnbI9rFXNoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQR3OsQpM8wKvxatudztsVWG/wDLLXUGCeFzXB7XNcPoWjsdgqp4uOvEvZIRbrLzvabpRNHTFPe7Ex1SxvsC9pPmEfpOOyr6RWXExUvGvCk2J51XciZvmFZmmbVsHwpudRA2nipYN78qCFpIYN+pH7ANu3bSIluqIiKAiIgIiICo+7cN8l2bL7pkHFfM9xtENzqX1lTZb7StuVKJHnbjE5x6om79gD+vXZXgisuDXuu4K5N5FqKaj5r5XiuuOQTNnkx6xW8UUVW5p2BLLvqLdgfLo/UFp7rYCCCGmpo6eniZFDE0MZGwaa1oGgAPYALsRLdMERFAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEUE5Jvt2slwwaO11jqdtxyenoKsBrT5sDoZ3OYdg62WNOxo9kgnaIoJYL7dqzxB5vj1TWOkttvtdpnpactaBE+Z1YJHAgbPV5UfqT93trugnaKCck327WS4YNHa6x1O245PT0FWA1p82B0M7nMOwdbLGnY0eynaAio3i/HsxzniKx5bdOZM4p624wGaSKkbbWxMPW4aaHUbjrsPUlSW23fMML5RsuHZXfm5Na8gZO223WWmjp6uCohjMroZxEGxva6Nr3Ne1rSCwgg7BVxNWaigvMF9u2N8UzXayVjqSsbc7ZAJWta4hktwp4pBpwI7se9v7e3dTpRRFBW327HxLyYyax32UMYZXim6W6881TmF+9b+6ANb0urmq83iw8JXW5WG5zW24Cejhjq4Gsc+ISVcMbi0Pa5u+l7h3B9VcE/RV2eNspiBfSc3Z42YfdNRFa5Wb/nN+DGx+0frXp4/yfIK2/5FhOXmknvmPvgc6voozFFXU07XOhm8sk+W/ccjXN2QHMJB0QAwS28XF1osdTc226tuHw7PMNNQsEkzwPXoaSOogbOgdnWgCdA4DG+SMVzK7mixKsfeoY4fNqa6jaDT0rjrphleSNTHvuMAubr5w3Y3gsjuuUZJzE/jrHchdjVJQ2qK63G5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RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQV5yfxjXZ8bVcrFnd+xC+Wh0jqOutr+uI9YAc2aAkNlb8o7Ej+rsoRJgPiiqoDbZ+dbBBTOHQ64U+PMFV0+5DdhgP6iNeyvpFZyxMQXiriuxcT4dLZrTU1dwrKyodW3K61z+uorqh33pHn/3D2/EkkzpEUt1RERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEWIgynHKrM6vEae80kl9pIG1M9uEg86OJ2tPLfXp+Zvf8Qgy6IsFSZpilc2+Oo7/QztsT3x3R0cgIo3MBLmyH80gNJI9tIM6vPUV9DSVEEFVW08EtQ7ohjlkDXSu+jQT8x/UopdOW+MrLjFBkV1zqxUdsuDPMoqiWra0VLd6JjG9vA/AFVb4gf5QvA39IZ/7MSsiWthUUAu3OPD9jv77LduScbpa+N/lyQvrWHyne7XkHTSPoSNKcUVbR3G3w19vq4KuknYJIqinkEkcjT6Oa4diD9Qpiu9FiaTKMer8tuGL0d4pJ7zbmMlrKBjwZYGvALC5vsCCCP1rJTzw0tJLU1EjYoYmGSR7joNaBsk/sQdiLG2DIbJlWO01/xy6U1ztlT1GCrpn9ccnS4tdo++nNI/WFg5OU+OIcQdlU2b2OGyid1N8dLVsZGZW/ejBJ7uH0HdMEuRRLEuUeOs7qpKXD80s14qY29b6elqWula39Lo+9r8daUre9kcbpJHNYxo25zjoAfUoOS4SyxwQPmmkZHGxpc97zoNA7kkn0Cryfn7hSmu5ts3KOLtqGu6TqvYWA/QvB6R/Wspn9woLpwBldwtlbT1tJNYa18VRTSNkjkHkP7tc0kEfqVw1LKWqpa2kZVUVTDUwSDbJYXh7HD6gjsV3KpPDB/JFwb/AEA/8V6n9bmWK27MqHEq2/UMV9rmGSmtpkBnlaN7cGDv09j39Ox+hSzvBl5Kqliq4qWWpiZPNsxROeA6TXc9I9Tr30u1VflWG8YZB4js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QI3x+Yzcg30vAcPQ+oCs3YfFpYjwVxjimLR2o4jaLvVPZutud1pI6qprpT3fJLJICSXOJOt6G+wVYcdWWi4s8d2ScdYuw0eL37HWZAy1sJ8qlqWzCImMH7oIEh0Pq0ejQBsutep/8Z9S/wBAD/fHLMu6teHkykk5i8Xtp4WutTOzDrLZ/wB8N3ooZHR/aMvmBkcTyO/QOqM6/F3voi17nwnxJdsWfjtXxzjYoHR+WGQUEcL4+2tsewBzXfzgQfxVccu2LKsB56s/P+H2GqyCkitzrNkdooW9VS+k6+ts8Tfzy09Ox/Mb7FxHdUeMPhp9s1Yqu93u+PHTDYKO01Hxb5P8n8zAwHfY6cfw2r3cw/66/DZc7zY8k5A4Wu9znucGFXCJlrq6l3VKaKdrnxRuPv0Bo/V1aHYADYFa/cSWTIeOsF5C5t5Ltk8WQZC997rLRRtEstJSwMeYqcDfd4a53qe3yg6IKtPjHkC3co8W2vOLVb66gpbgHllPWtDZG9D3MPoSCCWkgj1Gv1KcvekS5ERZUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFxZHHG0tjY1gJ3po13XJEBERAREQcfLj83zfLb1611a76/WuSIgIiICIiAiIg4mOMyCQsaXgaDtdx+1ckRAREQFxbHG2Rz2xta533nAaJ/WuSIC4ujje5rnsa4tO2kjej+C5IgIiICIiAiIgLiI42ymQRtD3di4Duf2rkiAvxrQ1oa0AAdgB7L9RAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERQ2/VnK8V+mjxjHcNrLWA3yprleqmmnd8o6uqNlJI0fNsDTjsaPb0QTJFT+IZ3zLmmKsv9rwrBYaZ9TU0oZU5DVtf1QVElO86bREaLonEd/Qjej2Fh5LfarGuMrxk1RRwzVVstc1e+mjlPQ98UReWB5bvRLddXTvXfXsrhrOoqxteRc3XSxUd3gwrAnQVUDKlkRySra/pe0OAP/ISAdH9SzuIZ2/IL5cMZvtiqMeyW3xsqJ7bPK2ZksLyQyeCVvaWMlrm701zSNOaO22GpiiKtsX5aiyPmC64g6zPpbcwzx2i7ulDmXSSlc1lYxrdfL5cjw0dz1dLz26UwWSiKtciyHmSx267XaLEsGnt1DHNUtLr/VNmfEwFw234IgPLR6dRG/f3Uk0WUixGK3p2SYHZMifTindcqCCtMId1CMyRtf070N66tb0oZb+X7fN4hr1xXc7dJQTUohFuuLn7ir5HU7Z5IfQdEjWv2G7PU0OI10kK4LKReW5VZoLLWV4j8w08D5ugnXV0tJ1v9ixeEZE/L+Mccyx9IKR14tdNcTTtf1iIzRNk6A7Q3rq1vQ3pQZ5FDcv5Aix290eM2Wy1mR5RWxGeC0Ub2x+XCDozzyuPTDFvt1HZcezWuOwMRJkfNVuh+PuHG2N3ClA6n0dmyF76xg9+kTU0ccjvw627PurgslFgsRy6y5tjEd8sc0roS98E0FRGYp6WZh0+GaM92SNPYtP6+4IJwuU5zdKDMqfC8Pxxl+yGWk+PmbU1fwlLQ05eWNkml6Hu25zXBrGMcT0OPYDaYJuig1rvnKNPfaSjyfBbNJQ1EnQ6vsN4M/wu/wA6SKeKIlv4sLj3+6sxlFRnMDaX95Vox64OJd8SLxcZqMM9Ono8uCXq38299OtD132YJCip+gzvmW45/e8QgwrBW1tnpqSqqJH5DViJ7akzBgYRRbJHkP3sD1brffVl47Lk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XqFs22ONjnOYxrS47cQNb/WuSbMyGNe5fFHwVdbYbXyVS12OV7R/yiyZNY5pHsd6EabG9pH9RP0HosHwDa7dcvExmGfcbY1WY9xtWWqKkiZJSuo4LhWiRrvPghIGmNaHt2ABtx7DZA2efHHJrzI2v6TsdQ3orkmz4Y168Ov8dfO39Kz/ANosPyDkVHw/456Xk3MoaunxG84ubL9rw075oqWobOJOmQMBI2GN12O+r8DrZ1fjmtewse0OaexBGwU8uzFV13I+KcneHHOr7htZU1tthtlfSiqlpZadsrhTFxLBI1pc35tb16grp8MH8kXBv9AP/FeraADWhrQAB2AHsv1TesMERFFEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERa9+MbJLpifAlsvlpq6qnmp8ho3u+HndCZWASOLC5vfpOgCrJtwrYRFr7QeH/Ic6t8eR8wclZe+/VjRM62WK4GhobZsbEUUbQeot9C8nuR7+p8OOXXNuDOfbBxnleV3DLsLysSRWS6XV3mVtDUsAPkSyfntO2gb93DQADgbn4mtkEVXZ9xVknIWaNkreUsjseKR07Giy4+8Ucs023dbpKgbc5hHT8mvr6e9Q8qYFe/Drhg5Z41z3K56e01UH2pYr3cXVlLWwSStiOg4fK/qe35u5AJI0R3Saa2vRRLO7gZeCslutBNJEX2GqqIZWEte3dO5zSCPQjsVrjwdx3mfNHBdhvvInImU0NijhNNbbTZq51O6obG8tdUVUp26Rznh2m+gaAQe6Sdaa27Rac51/Cp4beQLFYOPMrueV2bMy+126gyaoNS621xcxrHtfr7u5AenWjp3UD2Ksf/uYDcbf8fknMnJFZlD29b7tTXY08cUvr+ShA0xgPo3fp6EJ4z9NX+ipHw6Zpl13pcv4+z24i65Bhl0+zpLp09Jr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U1vnyHzIWkFrOgu6BotHcNB7eqzdZSU9fb56Grj8ynqI3RSs2R1NcNEbHcdj7JakUh4VK+itfgexO5XKrhpKOlp62aeoneGMiY2rnLnOcewAAJJKuOwZBZMpx6mv2OXWkulsqQTDV0sgkjfolp0R9CCCPYghYi1ccYXZeKTxrbrGyPFjTzUptz5pJQYpXOdI3re4v7l7jvq2N9taC9mHYbjeAYZR4piVtbbrTRh3k07Xuk0XOLnEucS5xJcTskpbL2RnURFFEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAXRVUVHXRNiraSCpja4PDJow8Bw9CAff8V3ogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAuhlFRx18laykgbUyNDXztjAe8D0Bd6kLvRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFickyfHsPxye/ZReaO022AbkqauQMaD7AfVx9mjZPsEGWX4SACSQAO5JWpV58WWX8h5TLh/hwwGovtUOz71coyyGJp7dfQSAxv0dK5v06SsxbPDHm2dFty8QXLV7v736e6w2ic01Cw/Q6ADv9ljD29SteOe038Xjc+UuMrLO6C8ciYpQStOjHVXanjcD+pzwV67Fn+CZRP5GNZpj15l/ydvuMNQ7+pjiVEbL4cuDLDStp6Li/HZmtGuq4UwrXH9bpusqPZ34TeG8xtUgtuNwYrdWjqprlY2/DmF49CYm6Y4b1vsD9CPVP6na8UWjfHnO/IHA/OEnDPN90fd7OyZkFPe53F8lOx/+Cm8w93wkEbDtuZ37/KWreQEEbB2D7qcuOEuiIiiiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIqP8SHiDtnCeGNp6Hya3LbjGfs+hedtib6GeUD8wH0H5xGh2DiLJvUHt528ROI8JWIRVRbdclqY+qjs0MmnEe0kru/lx79/V3oAdEjWLBeJ+WPFllMPIfLl6rLbiDXk0lPE3y/OZvuyliOwxnbRldsnX5x2Q8OPh7vPMeVSczcxyVVwtlROainp6wnrusgP33/AEgbrQaNB2tDTRo7+wwxU9PHBBEyKKNoYyNjQ1rWgaAAHoAt2zj1PbPv2weH4ViuAYtBjuIWSltVuh9IoG93u93Pce73H3c4klZ9EXNoREQaGfuhdjp4MqwfJI4wJ6ulqqKV4HctifG9gP8A6d62c8NWV1GZeFfDrzWSmWqZRmime47c50D3Q7J9yRGDv8Vrf+6H18bqrj+1tcPMYyvqHj6Bxga3+y5XF4KY5WeEKzuk30vraxzP1ec4f+8Fdb/4jM9thVAOUOYsL4ls0NTklXLNcKs9FBZ6Fnm1da/egI4/pvQ6job7b2QDx5k5YsnD3GVTk10Aqax58i225rtPrKgj5WD3DR6uPsB7kgGv+CuHbxHeJeZ+Xz9p8hXgebFFUN2yzQkfLDG0/cf0nR/RHyj84uxJ1tW1jLhe/GHnFpfd8UxvEsConN8ynobvMZ7hI326tsdG0n9FzWke6qDj/wAZfIuKcqOwznG3UslPHVmiraplO2nqKB4d0lzgz5HsB7nQB13BPod818tfGZBTQeMTIzTta10kFHJKGjXz/DRjf9QC3wzl1Yl67fUlrmvYHNcHNI2CDsEL9US4tqait4Lwusqy4zz2GhlkLvUudTsJ3+OypauTQi8d2u1ssNjqrzea+noLfSRmaepqHhjImD1JJ9FqrdeReXfEtearHeEjPiWBwyGCszCqa6Oar16tg1pw/wA1unenU5m+lWTUtXrmvOXEvHla6iy/OrXQVjfv0jC6onZ/nRRBzm/tAWWwXkzA+TLVNccGyajvMMDg2YRdTJIifTrjeA9u9HWwN6OvRaUc6+D3GuMuAbjntqy683K6218LqwVwjEVQJJmREsaG9THdUgd3c7eiPVQ7wOXOvovFVDQ0sjxT11sqYqlgPZzWgSNJH4OY3v8AifqunhLx2Jt19M0RFyaEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREER5O5DsvFvF10zW+u3BRR/kqcO06pmPaOJv4uOu/sNn0BXz44ewbJPFV4lrhlucyyzWenlbV3aVhLWdO/wAlRxfogga7dwxrjvet57xxcoz5Vy7TcbWqZz7bj+jURx9xNWyN7+nr0MLWj6F0gW43h84tg4k4JtOO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nDKyKfMquPpklYQ4WqNw++7/AMqQflb7fePbQdSfhA8PdZmOTw8vZ1Svks1LMZrbDVbc64VIdvznb+9Gx2zs/eePo0g8OB/CPk+f39mfcxsrqO0zS/FfA1bnCtubieoul380bCe5J+d3trYcvoHRUVJbrdT2+30sNLSU8bYYYIWBjI2NGmta0dgAAAAFq2cZkSTe670RFzaEREBERAREQEREBaUeO3mAU1spOHrJVflqnorryWH7sYO4YT+sjzCPo1ns5boVzq1tsqHW2OCSsEbjAyoeWRuk18oe4AkN3rZAJ17FfPjIvBlz5mXKFffMmvmMTTXKqdUVdzZVyOYOo9+lhjDtAdmt0AAANgLf8ebtZ5f4yvgF45+Oyy+cn18G4bcz7MoHOHYzyAOlcPxbH0t/VKVvyolxlx7ZeLeL7XhNh6n09FH+UneAH1Erjt8rvxc4k69hoegClqnLlt1ZMgiIsqIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIChWecU4VyOaSoyO3StuNDv4K60FQ+lrKXfr0SxkO16/Kdj8FNUQa73rwd4NkkzTknIPJl5hY7qbT3G+NqGN/V1xEj+tTfAfDtw/xtVx1+NYdSm5R923Cuc6qnafq10hIYfxYGq0UV8qmQREUUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==",alt:"Hirur\u0161ki \u010Delik"})),React.createElement("div",{className:"li-envelope li-front","aria-hidden":"true"},React.createElement("div",{className:"li-side li-left li-paper"}),React.createElement("div",{className:"li-side li-right li-paper"}),React.createElement("div",{className:"li-pocket-shadow"}),React.createElement("div",{className:"li-pocket li-paper"}),React.createElement("svg",{className:"li-seams",viewBox:"0 0 680 440",fill:"none"},React.createElement("path",{d:"M1 438 309 218Q340 199 371 218L679 438",stroke:"#fffdf7",strokeOpacity:".8"}),React.createElement("path",{d:"M1 435 309 215Q340 196 371 215L679 435",stroke:"#87745b",strokeOpacity:".16"})),React.createElement("div",{className:"li-envelope-imprint"},"Jak kao hirur\u0161ki \u010Delik")),React.createElement("div",{className:"li-stage-footer"},React.createElement("span",{className:"li-scroll-cue"},"Skroluj polako da otvori\u0161",React.createElement("span",{className:"li-cue-line","aria-hidden":"true"},React.createElement("i",null))),React.createElement("button",{className:"li-skip",type:"button"},"Presko\u010Di"),React.createElement("button",{className:"li-replay",type:"button"},"Otvori ponovo"),React.createElement("a",{className:"li-shop",href:"/nakit/prsten-riznica/"},"Pogledaj prsten"))))}window.MJKoverta={mount(n){let t=window.ReactDOM.createRoot(n);return t.render(window.React.createElement(vu,{theme:"light",fontFamily:"Montserrat, Arial, sans-serif"})),t}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
