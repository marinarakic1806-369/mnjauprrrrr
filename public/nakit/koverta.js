(()=>{var Cu=window.React;var{useEffect:$a,useRef:Rl,useState:bl,useMemo:xm,useCallback:Am,createElement:ym,Fragment:Im}=Cu;var sc=0,Po=1,rc=2;var zs=1,sa=2,Ki=3,ti=0,Ue=1,Ge=2,mi=0,Zi=1,zo=2,Bo=3,Fo=4,ac=5;var Mi=100,oc=101,lc=102,cc=103,uc=104,hc=200,dc=201,fc=202,pc=203,Vo=204,Ho=205,gc=206,mc=207,Mc=208,Ec=209,xc=210,Ac=211,yc=212,Ic=213,Tc=214,br=0,Cr=1,wr=2,Fi=3,_r=4,Nr=5,Dr=6,Lr=7,ra=0,vc=1,Sc=2,Tn=0,ko=1,jo=2,Qo=3,Bs=4,qo=5,Go=6,Fs=7;var Wo=300,Ei=301,$i=302,aa=303,oa=304,Vi=1e3,en=1001,Ur=1002,we=1003,Rc=1004;var Vs=1005;var Le=1006,la=1007;var fn=1008;var We=1009,Yo=1010,Xo=1011,ts=1012,ca=1013,pn=1014,an=1015,gn=1016,ua=1017,ha=1018,xi=1020,Jo=35902,Ko=35899,Zo=1021,$o=1022,mn=1023,Ln=1026,zn=1027,da=1028,fa=1029,ei=1030,pa=1031;var ga=1033,Hs=33776,ks=33777,js=33778,Qs=33779,ma=35840,Ma=35841,Ea=35842,xa=35843,Aa=36196,ya=37492,Ia=37496,Ta=37488,va=37489,qs=37490,Sa=37491,Ra=37808,ba=37809,Ca=37810,wa=37811,_a=37812,Na=37813,Da=37814,La=37815,Ua=37816,Oa=37817,Pa=37818,za=37819,Ba=37820,Fa=37821,Va=36492,Ha=36494,ka=36495,ja=36283,Qa=36284,Gs=36285,qa=36286;var ps=2300,Or=2301,vr=2302,Co=2303,wo=2400,_o=2401,No=2402;var bc=3200;var Ws=0,Cc=1,Mn="",Te="srgb",gs="srgb-linear",ms="linear",oe="srgb";var Sr=7680;var wc=519,_c=512,Nc=513,Dc=514,tl=515,Lc=516,Uc=517,el=518,nl=519,Oc=35044,Ga=35048;var il="300 es",nn=2e3,Hi=2001;function wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _u(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pc(){let i=ki("canvas");return i.style.display="block",i}var Cl={},ji=null;function sl(...i){let t="THREE."+i.shift();ji?ji("log",t,...i):console.log(t,...i)}function zc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=zc(i);let t="THREE."+i.shift();if(ji)ji("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=zc(i);let t="THREE."+i.shift();if(ji)ji("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function hi(...i){let t=i.join(" ");t in Cl||(Cl[t]=!0,Ot(...i))}function Bc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fc={[br]:br,[wr]:Dr,[_r]:_r,[Fi]:Nr,[Cr]:Cr,[Dr]:wr,[Lr]:Lr,[Nr]:Fi},xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var to=Math.PI/180,Pr=180/Math.PI;function Ys(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Nu(i,t){return(i%t+t)%t}function eo(i,t,e){return(1-e)*i+e*t}function Vc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Du(i,t){if(t.constructor===Float32Array)return i;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Lu(i,t){if(t.constructor===Float32Array)return i;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Gt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],M=r[a+2],A=r[a+3];if(f!==A||c!==u||l!==d||h!==M){let p=c*u+l*d+h*M+f*A;p<0&&(u=-u,d=-d,M=-M,A=-A,p=-p);let g=1-o;if(p<.9995){let T=Math.acos(p),R=Math.sin(T);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R,c=c*g+u*o,l=l*g+d*o,h=h*g+M*o,f=f*g+A*o}else{c=c*g+u*o,l=l*g+d*o,h=h*g+M*o,f=f*g+A*o;let T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],M=r[a+3];return t[e]=o*M+h*f+c*d-l*u,t[e+1]=c*M+h*u+l*f-o*d,t[e+2]=l*M+h*d+o*u-c*f,t[e+3]=h*M-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),d=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*M,this._y=l*d*f-u*h*M,this._z=l*h*M+u*d*f,this._w=l*h*f-u*d*M;break;case"YXZ":this._x=u*h*f+l*d*M,this._y=l*d*f-u*h*M,this._z=l*h*M-u*d*f,this._w=l*h*f+u*d*M;break;case"ZXY":this._x=u*h*f-l*d*M,this._y=l*d*f+u*h*M,this._z=l*h*M+u*d*f,this._w=l*h*f-u*d*M;break;case"ZYX":this._x=u*h*f-l*d*M,this._y=l*d*f+u*h*M,this._z=l*h*M-u*d*f,this._w=l*h*f+u*d*M;break;case"YZX":this._x=u*h*f+l*d*M,this._y=l*d*f+u*h*M,this._z=l*h*M-u*d*f,this._w=l*h*f-u*d*M;break;case"XZY":this._x=u*h*f-l*d*M,this._y=l*d*f-u*h*M,this._z=l*h*M+u*d*f,this._w=l*h*f+u*d*M;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},no=new U,wl=new qe,Ft=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],M=n[8],A=s[0],p=s[3],g=s[6],T=s[1],R=s[4],v=s[7],b=s[2],y=s[5],m=s[8];return r[0]=a*A+o*T+c*b,r[3]=a*p+o*R+c*y,r[6]=a*g+o*v+c*m,r[1]=l*A+h*T+f*b,r[4]=l*p+h*R+f*y,r[7]=l*g+h*v+f*m,r[2]=u*A+d*T+M*b,r[5]=u*p+d*R+M*y,r[8]=u*g+d*v+M*m,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,M=e*f+n*u+s*d;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/M;return t[0]=f*A,t[1]=(s*l-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=u*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-o*e)*A,t[6]=d*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(io.makeScale(t,e)),this}rotate(t){return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(io.makeRotation(-t)),this}translate(t,e){return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},io=new Ft,_l=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uu(){let i={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mn?ms:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gs]:{primaries:t,whitePoint:n,transfer:ms,toXYZ:_l,fromXYZ:Nl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:_l,fromXYZ:Nl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}var te=Uu();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ti,zr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ti===void 0&&(Ti=ki("canvas")),Ti.width=t.width,Ti.height=t.height;let s=Ti.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ti}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ki("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ou=0,Qi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Pu=0,ro=new U,Fe=class i extends xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=en,s=en,r=Le,a=fn,o=mn,c=We,l=i.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Ys(),this.name="",this.source=new Qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vi:t.x=t.x-Math.floor(t.x);break;case en:t.x=t.x<0?0:1;break;case Ur:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vi:t.y=t.y-Math.floor(t.y);break;case en:t.y=t.y<0?0:1;break;case Ur:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Wo;Fe.DEFAULT_ANISOTROPY=1;var me=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],M=c[9],A=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-A)<.01&&Math.abs(M-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+A)<.1&&Math.abs(M+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,v=(d+1)/2,b=(g+1)/2,y=(h+u)/4,m=(f+A)/4,S=(M+p)/4;return R>v&&R>b?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=y/n,r=m/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=y/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=m/r,s=S/r),this.set(n,s,r,e),this}let T=Math.sqrt((p-M)*(p-M)+(f-A)*(f-A)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(p-M)/T,this.y=(f-A)/T,this.z=(u-h)/T,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Br=class extends xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Fe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_e=class extends Br{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ms=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fr=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var le=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,h,f,u,d,M,A,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,u,d,M,A,p)}set(t,e,n,s,r,a,o,c,l,h,f,u,d,M,A,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=M,g[11]=A,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),a=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,M=o*h,A=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+M*l,e[5]=u-A*l,e[9]=-o*c,e[2]=A-u*l,e[6]=M+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,M=l*h,A=l*f;e[0]=u+A*o,e[4]=M*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-M,e[6]=A+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,M=l*h,A=l*f;e[0]=u-A*o,e[4]=-a*f,e[8]=M+d*o,e[1]=d+M*o,e[5]=a*h,e[9]=A-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,M=o*h,A=o*f;e[0]=c*h,e[4]=M*l-d,e[8]=u*l+A,e[1]=c*f,e[5]=A*l+u,e[9]=d*l-M,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,M=o*c,A=o*l;e[0]=c*h,e[4]=A-u*f,e[8]=M*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+M,e[10]=u-A*f}else if(t.order==="XZY"){let u=a*c,d=a*l,M=o*c,A=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+A,e[5]=a*h,e[9]=d*f-M,e[2]=M*f-d,e[6]=o*h,e[10]=A*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zu,t,Bu)}lookAt(t,e,n){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Hn.crossVectors(n,Je),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Hn.crossVectors(n,Je)),Hn.normalize(),er.crossVectors(Je,Hn),s[0]=Hn.x,s[4]=er.x,s[8]=Je.x,s[1]=Hn.y,s[5]=er.y,s[9]=Je.y,s[2]=Hn.z,s[6]=er.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],M=n[2],A=n[6],p=n[10],g=n[14],T=n[3],R=n[7],v=n[11],b=n[15],y=s[0],m=s[4],S=s[8],P=s[12],w=s[1],N=s[5],F=s[9],H=s[13],_=s[2],O=s[6],q=s[10],B=s[14],tt=s[3],Q=s[7],W=s[11],$=s[15];return r[0]=a*y+o*w+c*_+l*tt,r[4]=a*m+o*N+c*O+l*Q,r[8]=a*S+o*F+c*q+l*W,r[12]=a*P+o*H+c*B+l*$,r[1]=h*y+f*w+u*_+d*tt,r[5]=h*m+f*N+u*O+d*Q,r[9]=h*S+f*F+u*q+d*W,r[13]=h*P+f*H+u*B+d*$,r[2]=M*y+A*w+p*_+g*tt,r[6]=M*m+A*N+p*O+g*Q,r[10]=M*S+A*F+p*q+g*W,r[14]=M*P+A*H+p*B+g*$,r[3]=T*y+R*w+v*_+b*tt,r[7]=T*m+R*N+v*O+b*Q,r[11]=T*S+R*F+v*q+b*W,r[15]=T*P+R*H+v*B+b*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],M=t[3],A=t[7],p=t[11],g=t[15],T=c*d-l*u,R=o*d-l*f,v=o*u-c*f,b=a*d-l*h,y=a*u-c*h,m=a*f-o*h;return e*(A*T-p*R+g*v)-n*(M*T-p*b+g*y)+s*(M*R-A*b+g*m)-r*(M*v-A*y+p*m)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],M=t[12],A=t[13],p=t[14],g=t[15],T=e*o-n*a,R=e*c-s*a,v=e*l-r*a,b=n*c-s*o,y=n*l-r*o,m=s*l-r*c,S=h*A-f*M,P=h*p-u*M,w=h*g-d*M,N=f*p-u*A,F=f*g-d*A,H=u*g-d*p,_=T*H-R*F+v*N+b*w-y*P+m*S;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/_;return t[0]=(o*H-c*F+l*N)*O,t[1]=(s*F-n*H-r*N)*O,t[2]=(A*m-p*y+g*b)*O,t[3]=(u*y-f*m-d*b)*O,t[4]=(c*w-a*H-l*P)*O,t[5]=(e*H-s*w+r*P)*O,t[6]=(p*v-M*m-g*R)*O,t[7]=(h*m-u*v+d*R)*O,t[8]=(a*F-o*w+l*S)*O,t[9]=(n*w-e*F-r*S)*O,t[10]=(M*y-A*v+g*T)*O,t[11]=(f*v-h*y-d*T)*O,t[12]=(o*P-a*N-c*S)*O,t[13]=(e*N-n*P+s*S)*O,t[14]=(A*R-M*b-p*T)*O,t[15]=(h*b-f*R+u*T)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,M=r*f,A=a*h,p=a*f,g=o*f,T=c*l,R=c*h,v=c*f,b=n.x,y=n.y,m=n.z;return s[0]=(1-(A+g))*b,s[1]=(d+v)*b,s[2]=(M-R)*b,s[3]=0,s[4]=(d-v)*y,s[5]=(1-(u+g))*y,s[6]=(p+T)*y,s[7]=0,s[8]=(M+R)*m,s[9]=(p-T)*m,s[10]=(1-(u+A))*m,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=vi.set(s[0],s[1],s[2]).length(),o=vi.set(s[4],s[5],s[6]).length(),c=vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ln.copy(this);let l=1/a,h=1/o,f=1/c;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,e.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=nn,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),M,A;if(c)M=r/(a-r),A=a*r/(a-r);else if(o===nn)M=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===Hi)M=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=nn,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),M,A;if(c)M=1/(a-r),A=a/(a-r);else if(o===nn)M=-2/(a-r),A=-(a+r)/(a-r);else if(o===Hi)M=-1/(a-r),A=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=M,l[14]=A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vi=new U,ln=new le,zu=new U(0,0,0),Bu=new U(1,1,1),Hn=new U,er=new U,Je=new U,Dl=new le,Ll=new qe,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fu=0,Ul=new U,Si=new qe,bn=new le,nr=new U,os=new U,Vu=new U,Hu=new qe,Ol=new U(1,0,0),Pl=new U(0,1,0),zl=new U(0,0,1),Bl={type:"added"},ku={type:"removed"},Ri={type:"childadded",child:null},ao={type:"childremoved",child:null},Ne=class i extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new An,n=new qe,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ft}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(zl,t)}translateOnAxis(t,e){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(os,nr,this.up):bn.lookAt(nr,os,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(bn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ku),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),M=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),M.length>0&&(n.nodes=M)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new U(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},ju={type:"move"},qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let p=e.getJointPose(A,n),g=this._getHandJoint(l,A);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,M=.005;l.inputState.pinching&&u>d+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ju)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Nu(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oo(a,r,t+1/3),this.g=oo(a,r,t),this.b=oo(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=Hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.workingToColorSpace(Be.copy(this),t),Math.round(Kt(Be.r*255,0,255))*65536+Math.round(Kt(Be.g*255,0,255))*256+Math.round(Kt(Be.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Be.copy(this),e);let n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Te){te.workingToColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,s=Be.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(ir);let n=eo(kn.h,ir.h,e),s=eo(kn.s,ir.s,e),r=eo(kn.l,ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Ht;Ht.NAMES=Hc;var Un=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},cn=new U,Cn=new U,lo=new U,wn=new U,bi=new U,Ci=new U,Fl=new U,co=new U,uo=new U,ho=new U,fo=new me,po=new me,go=new me,Gn=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Cn.subVectors(n,e),lo.subVectors(t,e);let a=cn.dot(cn),o=cn.dot(Cn),c=cn.dot(lo),l=Cn.dot(Cn),h=Cn.dot(lo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,M=(a*h-o*c)*u;return r.set(1-d-M,M,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return fo.setScalar(0),po.setScalar(0),go.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,n),go.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(go,r.z),a}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Cn.subVectors(t,e),cn.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),cn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;bi.subVectors(s,n),Ci.subVectors(r,n),co.subVectors(t,n);let c=bi.dot(co),l=Ci.dot(co);if(c<=0&&l<=0)return e.copy(n);uo.subVectors(t,s);let h=bi.dot(uo),f=Ci.dot(uo);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(bi,a);ho.subVectors(t,r);let d=bi.dot(ho),M=Ci.dot(ho);if(M>=0&&d<=M)return e.copy(r);let A=d*l-c*M;if(A<=0&&l>=0&&M<=0)return o=l/(l-M),e.copy(n).addScaledVector(Ci,o);let p=h*M-d*f;if(p<=0&&f-h>=0&&d-M>=0)return Fl.subVectors(r,s),o=(f-h)/(f-h+(d-M)),e.copy(s).addScaledVector(Fl,o);let g=1/(p+A+u);return a=A*g,o=u*g,e.copy(n).addScaledVector(bi,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),rr.subVectors(this.max,ls),wi.subVectors(t.a,ls),_i.subVectors(t.b,ls),Ni.subVectors(t.c,ls),jn.subVectors(_i,wi),Qn.subVectors(Ni,_i),oi.subVectors(wi,Ni);let e=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-oi.z,oi.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,oi.z,0,-oi.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-oi.y,oi.x,0];return!mo(e,wi,_i,Ni,rr)||(e=[1,0,0,0,1,0,0,0,1],!mo(e,wi,_i,Ni,rr))?!1:(ar.crossVectors(jn,Qn),e=[ar.x,ar.y,ar.z],mo(e,wi,_i,Ni,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_n=[new U,new U,new U,new U,new U,new U,new U,new U],un=new U,sr=new yn,wi=new U,_i=new U,Ni=new U,jn=new U,Qn=new U,oi=new U,ls=new U,rr=new U,ar=new U,li=new U;function mo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);let o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),c=t.dot(li),l=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ie=new U,or=new Gt,Qu=0,ke=class extends xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=an,this.version=0,this._normalizationScale=t!==void 0?rl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)or.fromBufferAttribute(this,e),or.applyMatrix3(t),this.setXY(e,or.x,or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Du(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Lu(t,this.array)}};var xs=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var As=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ze=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},qu=new yn,cs=new U,Mo=new U,On=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Mo)),this.expandByPoint(cs.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gu=0,tn=new le,Eo=new Ne,Di=new U,Ke=new yn,us=new yn,Ce=new U,sn=class i extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?As:xs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Ke.min,us.min),Ke.expandByPoint(Ce),Ce.addVectors(Ke.max,us.max),Ke.expandByPoint(Ce)):(Ke.expandByPoint(us.min),Ke.expandByPoint(us.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ce.fromBufferAttribute(o,l),c&&(Di.fromBufferAttribute(t,l),Ce.add(Di)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new U,c[P]=new U;let h=new U,f=new U,u=new U,d=new Gt,M=new Gt,A=new Gt,p=new U,g=new U;function T(P,w,N){l[P]=l[w]=l[N]=1,h.fromBufferAttribute(n,P),f.fromBufferAttribute(n,w),u.fromBufferAttribute(n,N),d.fromBufferAttribute(r,P),M.fromBufferAttribute(r,w),A.fromBufferAttribute(r,N),f.sub(h),u.sub(h),M.sub(d),A.sub(d);let F=1/(M.x*A.y-A.x*M.y);isFinite(F)&&(p.copy(f).multiplyScalar(A.y).addScaledVector(u,-M.y).multiplyScalar(F),g.copy(u).multiplyScalar(M.x).addScaledVector(f,-A.x).multiplyScalar(F),o[P].add(p),o[w].add(p),o[N].add(p),c[P].add(g),c[w].add(g),c[N].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let P=0,w=R.length;P<w;++P){let N=R[P],F=N.start,H=N.count;for(let _=F,O=F+H;_<O;_+=3)T(t.getX(_+0),t.getX(_+1),t.getX(_+2))}let v=new U,b=new U,y=new U,m=new U;function S(P){y.fromBufferAttribute(s,P),m.copy(y);let w=o[P];v.copy(w),v.sub(y.multiplyScalar(y.dot(w))).normalize(),b.crossVectors(m,w);let F=b.dot(c[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,F)}for(let P=0,w=n.count;P<w;++P)l[P]&&S(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){let M=t.getX(u+0),A=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,M),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(M,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,M=0;for(let A=0,p=c.length;A<p;A++){o.isInterleavedBufferAttribute?d=c[A]*o.data.stride+o.offset:d=c[A]*h;for(let g=0;g<h;g++)u[M++]=l[d++]}return new ke(u,h,f)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xo=new U,Wu=new U,Yu=new Ft,hn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=xo.subVectors(n,e).cross(Wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(xo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(xo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xu=0,In=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Zi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Ho,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Nn=new U,Ao=new U,lr=new U,cr=new U,ys=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ao.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(Ao);let r=t.distanceTo(e)*.5,a=-this.direction.dot(lr),o=cr.dot(this.direction),c=-cr.dot(lr),l=cr.lengthSq(),h=Math.abs(1-a*a),f,u,d,M;if(h>0)if(f=a*c-o,u=a*o-c,M=r*h,f>=0)if(u>=-M)if(u<=M){let A=1/h;f*=A,u*=A,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-M?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=M?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ao).addScaledVector(lr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,M=e.x-a.x,A=e.y-a.y,p=e.z-a.z,g=n.x-a.x,T=n.y-a.y,R=n.z-a.z,v=Math.abs(c),b=Math.abs(l),y=Math.abs(h),m,S,P,w,N,F,H,_,O,q,B,tt;if(v>=b&&v>=y?(P=c,F=f,O=M,tt=g,c>=0?(m=l,S=h,w=u,N=d,H=A,_=p,q=T,B=R):(m=h,S=l,w=d,N=u,H=p,_=A,q=R,B=T)):b>=y?(P=l,F=u,O=A,tt=T,l>=0?(m=h,S=c,w=d,N=f,H=p,_=M,q=R,B=g):(m=c,S=h,w=f,N=d,H=M,_=p,q=g,B=R)):(P=h,F=d,O=p,tt=R,h>=0?(m=c,S=l,w=f,N=u,H=M,_=A,q=g,B=T):(m=l,S=c,w=u,N=f,H=A,_=M,q=T,B=g)),P===0)return null;let Q=m/P,W=S/P,$=1/P,ht=w-Q*F,Ut=N-W*F,j=H-Q*O,ct=_-W*O,yt=q-Q*tt,Dt=B-W*tt,gt=yt*ct-Dt*j,ot=ht*Dt-Ut*yt,Wt=j*Ut-ct*ht;if(s){if(gt<0||ot<0||Wt<0)return null}else if((gt<0||ot<0||Wt<0)&&(gt>0||ot>0||Wt>0))return null;let at=gt+ot+Wt;if(at===0)return null;let Tt=$*(gt*F+ot*O+Wt*tt);return(at>0?Tt<0:Tt>0)?null:this.at(Tt/at,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wn=class extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vl=new le,ci=new ys,ur=new On,Hl=new U,hr=new U,dr=new U,fr=new U,yo=new U,pr=new U,kl=new U,gr=new U,de=class extends Ne{constructor(t=new sn,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(yo.fromBufferAttribute(f,t),a?pr.addScaledVector(yo,h):pr.addScaledVector(yo.sub(e),h))}e.add(pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(ur.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ur,Hl)===null||ci.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(Vl.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,A=u.length;M<A;M++){let p=u[M],g=a[p.materialIndex],T=Math.max(p.start,d.start),R=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=T,b=R;v<b;v+=3){let y=o.getX(v),m=o.getX(v+1),S=o.getX(v+2);s=mr(this,g,t,n,l,h,f,y,m,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let M=Math.max(0,d.start),A=Math.min(o.count,d.start+d.count);for(let p=M,g=A;p<g;p+=3){let T=o.getX(p),R=o.getX(p+1),v=o.getX(p+2);s=mr(this,a,t,n,l,h,f,T,R,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,A=u.length;M<A;M++){let p=u[M],g=a[p.materialIndex],T=Math.max(p.start,d.start),R=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=T,b=R;v<b;v+=3){let y=v,m=v+1,S=v+2;s=mr(this,g,t,n,l,h,f,y,m,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let M=Math.max(0,d.start),A=Math.min(c.count,d.start+d.count);for(let p=M,g=A;p<g;p+=3){let T=p,R=p+1,v=p+2;s=mr(this,a,t,n,l,h,f,T,R,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ju(i,t,e,n,s,r,a,o){let c;if(t.side===Ue?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ti,o),c===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(gr);return l<e.near||l>e.far?null:{distance:l,point:gr.clone(),object:i}}function mr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,hr),i.getVertexPosition(c,dr),i.getVertexPosition(l,fr);let h=Ju(i,t,e,n,hr,dr,fr,kl);if(h){let f=new U;Gn.getBarycoord(kl,hr,dr,fr,f),s&&(h.uv=Gn.getInterpolatedAttribute(s,o,c,l,f,new Gt)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,o,c,l,f,new Gt)),a&&(h.normal=Gn.getInterpolatedAttribute(a,o,c,l,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new U,materialIndex:0};Gn.getNormal(hr,dr,fr,u.normal),h.face=u,h.barycoord=f}return h}var Is=class extends Fe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=we,h=we,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ts=class extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Li=new le,jl=new le,Mr=[],Ql=new yn,Ku=new le,hs=new de,ds=new On,vs=class extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ku)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),Ql.copy(t.boundingBox).applyMatrix4(Li),this.boundingBox.union(Ql)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),ds.copy(t.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),t.ray.intersectsSphere(ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Li),jl.multiplyMatrices(n,Li),hs.matrixWorld=jl,hs.raycast(t,Mr);for(let a=0,o=Mr.length;a<o;a++){let c=Mr[a];c.instanceId=r,c.object=this,e.push(c)}Mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Is(new Float32Array(s*this.count),s,this.count,da,an));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ui=new On,Zu=new Gt(.5,.5),Er=new U,Yn=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],M=r[8],A=r[9],p=r[10],g=r[11],T=r[12],R=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-a,d-h,g-M,b-T).normalize(),s[1].setComponents(l+a,d+h,g+M,b+T).normalize(),s[2].setComponents(l+o,d+f,g+A,b+R).normalize(),s[3].setComponents(l-o,d-f,g-A,b-R).normalize(),n)s[4].setComponents(c,u,p,v).normalize(),s[5].setComponents(l-c,d-u,g-p,b-v).normalize();else if(s[4].setComponents(l-c,d-u,g-p,b-v).normalize(),e===nn)s[5].setComponents(l+c,d+u,g+p,b+v).normalize();else if(e===Hi)s[5].setComponents(c,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){ui.center.set(0,0,0);let e=Zu.distanceTo(t.center);return ui.radius=.7071067811865476+e,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ql=new le,Vr=class i{constructor(){this.coordinateSystem=nn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ql.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Yn),n[s].setFromProjectionMatrix(ql,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Yn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Gi=class extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Hr=new U,kr=new U,Gl=new le,fs=new ys,xr=new On,Io=new U,Wl=new U,jr=class extends Ne{constructor(t=new sn,e=new Gi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Hr.distanceTo(kr);t.setAttribute("lineDistance",new Ze(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;Gl.copy(s).invert(),fs.copy(t.ray).applyMatrix4(Gl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),M=Math.min(h.count,a.start+a.count);for(let A=d,p=M-1;A<p;A+=l){let g=h.getX(A),T=h.getX(A+1),R=Ar(this,t,fs,c,g,T,A);R&&e.push(R)}if(this.isLineLoop){let A=h.getX(M-1),p=h.getX(d),g=Ar(this,t,fs,c,A,p,M-1);g&&e.push(g)}}else{let d=Math.max(0,a.start),M=Math.min(u.count,a.start+a.count);for(let A=d,p=M-1;A<p;A+=l){let g=Ar(this,t,fs,c,A,A+1,A);g&&e.push(g)}if(this.isLineLoop){let A=Ar(this,t,fs,c,M-1,d,M-1);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ar(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),kr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,kr,Io,Wl)>n)return;Io.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Io);if(!(l<t.near||l>t.far))return{distance:l,point:Wl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ss=class extends jr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var Rs=class extends Fe{constructor(t=[],e=Ei,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},di=class extends Fe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pn=class extends Fe{constructor(t,e,n=pn,s,r,a,o=we,c=we,l,h=Ln,f=1){if(h!==Ln&&h!==zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},bs=class extends Pn{constructor(t,e=pn,n=Ei,s,r,a=we,o=we,c,l=Ln){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Cs=class extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xn=class i extends sn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;M("z","y","x",-1,-1,n,e,t,a,r,0),M("z","y","x",1,-1,n,e,-t,a,r,1),M("x","z","y",1,1,t,n,e,s,a,2),M("x","z","y",1,-1,t,n,-e,s,a,3),M("x","y","z",1,-1,t,e,n,s,r,4),M("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2));function M(A,p,g,T,R,v,b,y,m,S,P){let w=v/m,N=b/S,F=v/2,H=b/2,_=y/2,O=m+1,q=S+1,B=0,tt=0,Q=new U;for(let W=0;W<q;W++){let $=W*N-H;for(let ht=0;ht<O;ht++){let Ut=ht*w-F;Q[A]=Ut*T,Q[p]=$*R,Q[g]=_,l.push(Q.x,Q.y,Q.z),Q[A]=0,Q[p]=0,Q[g]=y>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(ht/m),f.push(1-W/S),B+=1}}for(let W=0;W<S;W++)for(let $=0;$<m;$++){let ht=u+$+O*W,Ut=u+$+O*(W+1),j=u+($+1)+O*(W+1),ct=u+($+1)+O*W;c.push(ht,Ut,ct),c.push(Ut,j,ct),tt+=6}o.addGroup(d,tt,P),d+=tt,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Gt:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,c=new le;for(let d=0;d<=t;d++){let M=d/t;s[d]=this.getTangentAt(M,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let M=Math.acos(Kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,M))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Kt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let M=1;M<=t;M++)r[M].applyMatrix4(c.makeRotationAxis(s[M],d*M)),a[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function al(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Yl=new U,Xl=new U,To=new al,vo=new al,So=new al,ws=class extends fi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Xl.subVectors(s[0],s[1]).add(s[0]),l=Xl);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,M=Math.pow(l.distanceToSquared(f),d),A=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);A<1e-4&&(A=1),M<1e-4&&(M=A),p<1e-4&&(p=A),To.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,M,A,p),vo.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,M,A,p),So.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,M,A,p)}else this.curveType==="catmullrom"&&(To.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),vo.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),So.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(To.calc(c),vo.calc(c),So.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $u(i,t){let e=1-i;return e*e*e*t}function th(i,t){let e=1-i;return 3*e*e*i*t}function eh(i,t){return 3*(1-i)*i*i*t}function nh(i,t){return i*i*i*t}function Ro(i,t,e,n,s){return $u(i,t)+th(i,e)+eh(i,n)+nh(i,s)}var Wi=class extends fi{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ro(t,s.x,r.x,a.x,o.x),Ro(t,s.y,r.y,a.y,o.y),Ro(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}};var rn=class i extends sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],M=[],A=[],p=[];for(let g=0;g<h;g++){let T=g*u-a;for(let R=0;R<l;R++){let v=R*f-r;M.push(v,-T,0),A.push(0,0,1),p.push(R/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let T=0;T<o;T++){let R=T+l*g,v=T+l*(g+1),b=T+1+l*(g+1),y=T+1+l*g;d.push(R,v,y),d.push(v,b,y)}this.setIndex(d),this.setAttribute("position",new Ze(M,3)),this.setAttribute("normal",new Ze(A,3)),this.setAttribute("uv",new Ze(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ai(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Jl(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Jl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=Ai(i[e]);for(let s in n)t[s]=n[s]}return t}function Jl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ih(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ol(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var kc={clone:Ai,merge:Ve},sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sh,this.fragmentShader=rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=ih(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qr=class extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pi=class extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ws,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_s=class extends pi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Gt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ns=class extends In{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ws,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ra,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qr=class extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gr=class extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ui(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Jn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wr=class extends Jn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _o:r=t,o=2*e-n;break;case No:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _o:a=t,c=2*n-e;break;case No:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,M=(n-e)/(s-e),A=M*M,p=A*M,g=-u*p+2*u*A-u*M,T=(1+u)*p+(-1.5-2*u)*A+(-.5+u)*M+1,R=(-1-d)*p+(1.5+d)*A+.5*M,v=d*p-d*A;for(let b=0;b!==o;++b)r[b]=g*a[h+b]+T*a[l+b]+R*a[c+b]+v*a[f+b];return r}},Yr=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},Xr=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jr=class extends Jn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let M=(n-e)/(s-e),A=1-M;for(let p=0;p!==o;++p)r[p]=a[l+p]*A+a[c+p]*M;return r}let u=o*2,d=t-1;for(let M=0;M!==o;++M){let A=a[l+M],p=a[c+M],g=d*u+M*2,T=f[g],R=f[g+1],v=t*u+M*2,b=h[v],y=h[v+1],m=oh(n,e,T,b,s);r[M]=jc(m,A,R,y,p)}return r}};function jc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ah(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function oh(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=jc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=ah(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var $e=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ui(e,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ui(t.times,Array),values:Ui(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),yr(t.settings)&&(n.settings={inTangents:Ui(t.settings.inTangents,Array),outTangents:Ui(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ps:e=this.InterpolantFactoryMethodDiscrete;break;case Or:e=this.InterpolantFactoryMethodLinear;break;case vr:e=this.InterpolantFactoryMethodSmooth;break;case Co:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return vr;case this.InterpolantFactoryMethodBezier:return Co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;yr(this.settings)&&(Kl(this.settings.inTangents,t),Kl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;yr(this.settings)&&(Zl(this.settings.inTangents,t),Zl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Bt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Bt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&_u(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,u=f-n,d=f+n;for(let M=0;M!==n;++M){let A=e[f+M];if(A!==e[u+M]||A!==e[d+M]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,yr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Zl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=Or;var Kn=class extends $e{constructor(t,e,n){super(t,e,n)}};Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=ps;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};Kr.prototype.ValueTypeName="color";var Zr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};Zr.prototype.ValueTypeName="number";var $r=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)qe.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ds=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends $e{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=ps;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};ta.prototype.ValueTypeName="vector";var Rr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&($l(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!$l(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function $l(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ea=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],M=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qc=new ea,Yi=class{constructor(t){this.manager=t!==void 0?t:Qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi=new WeakMap,na=class extends Yi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Rr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=Oi.get(a);f===void 0&&(f=[],Oi.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=ki("img");function c(){h(),e&&e(this);let f=Oi.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}Oi.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),Rr.remove(`image:${t}`);let u=Oi.get(this)||[];for(let d=0;d<u.length;d++){let M=u[d];M.onError&&M.onError(f)}Oi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Rr.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Ls=class extends Yi{constructor(t){super(t)}load(t,e,n,s){let r=new Fe,a=new na(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Us=class extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var bo=new le,tc=new U,ec=new U,Os=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=We,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yn,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(tc),ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ec),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(bo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Hi||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ir=new U,Tr=new qe,En=new U,gi=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ir,Tr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Tr,En.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ir,Tr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Tr,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qn=new U,nc=new Gt,ic=new Gt,Qe=class extends gi{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,nc,ic),e.subVectors(ic,nc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Do=class extends Os{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}},Ps=class extends Us{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Do}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},$n=class extends gi{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Lo=class extends Os{constructor(){super(new $n(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xi=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Lo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Pi=-90,zi=1,Ji=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(Pi,zi,t,e);s.layers=this.layers,this.add(s);let r=new Qe(Pi,zi,t,e);r.layers=this.layers,this.add(r);let a=new Qe(Pi,zi,t,e);a.layers=this.layers,this.add(a);let o=new Qe(Pi,zi,t,e);o.layers=this.layers,this.add(o);let c=new Qe(Pi,zi,t,e);c.layers=this.layers,this.add(c);let l=new Qe(Pi,zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Hi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=A,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},ia=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ll="\\[\\]\\.:\\/",lh=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",ch="[^"+ll.replace("\\.","")+"]",uh=/((?:WC+[\/:])*)/.source.replace("WC",cl),hh=/(WCOD+)?/.source.replace("WCOD",ch),dh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),fh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),ph=new RegExp("^"+uh+hh+dh+fh+"$"),gh=["material","materials","bones","map"],Uo=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lh,"")}static parseTrackName(t){let e=ph.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Uo;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vm=new Float32Array(1);var Oo=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function ul(i,t,e,n){let s=mh(n);switch(e){case Zo:return i*t;case da:return i*t/s.components*s.byteLength;case fa:return i*t/s.components*s.byteLength;case ei:return i*t*2/s.components*s.byteLength;case pa:return i*t*2/s.components*s.byteLength;case $o:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case ga:return i*t*4/s.components*s.byteLength;case Hs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:case xa:return Math.max(i,16)*Math.max(t,8)/4;case ma:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case Aa:case ya:case Ta:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:case qs:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Va:case Ha:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gs:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mh(i){switch(i){case We:case Yo:return{byteLength:1,components:1};case ts:case Xo:case gn:return{byteLength:2,components:1};case ua:case ha:return{byteLength:2,components:4};case pn:case ca:case an:return{byteLength:4,components:1};case Jo:case Ko:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function du(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Eh(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,M)=>d.start-M.start);let u=0;for(let d=1;d<f.length;d++){let M=f[u],A=f[d];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++u,f[u]=A)}f.length=u+1;for(let d=0,M=f.length;d<M;d++){let A=f[d];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var xh=`#ifdef USE_ALPHAHASH
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
#endif`,yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
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
#endif`,Rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
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
#endif`,Ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dh=`#ifdef USE_IRIDESCENCE
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
#endif`,Lh=`#ifdef USE_BUMPMAP
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
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
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
} // validated`,jh=`vec3 transformedNormal = objectNormal;
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
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
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
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ud=`#ifdef USE_ENVMAP
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
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
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
#endif`,md=`uniform sampler2D dfgLUT;
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
}`,Md=`
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cd=`#if defined( USE_POINTS_UV )
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
#endif`,wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
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
#endif`,Pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fd=`#ifndef FLAT_SHADED
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
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
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
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sf=`float getShadowMask() {
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
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lf=`#ifdef USE_SKINNING
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
#endif`,cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,df=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ff=`#ifdef USE_TRANSMISSION
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
#endif`,pf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xf=`varying vec2 vUv;
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
}`,yf=`varying vec3 vWorldDirection;
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
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
}`,bf=`#define DISTANCE
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
}`,Cf=`#define DISTANCE
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`uniform float scale;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Pf=`#define LAMBERT
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
}`,zf=`#define MATCAP
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
}`,jf=`#define STANDARD
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
}`,Qf=`#define STANDARD
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
}`,qf=`#define TOON
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
}`,Gf=`#define TOON
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
}`,Wf=`uniform float size;
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
}`,Xf=`#include <common>
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:xh,alphahash_pars_fragment:Ah,alphamap_fragment:yh,alphamap_pars_fragment:Ih,alphatest_fragment:Th,alphatest_pars_fragment:vh,aomap_fragment:Sh,aomap_pars_fragment:Rh,batching_pars_vertex:bh,batching_vertex:Ch,begin_vertex:wh,beginnormal_vertex:_h,bsdfs:Nh,iridescence_fragment:Dh,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Uh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:zh,color_fragment:Bh,color_pars_fragment:Fh,color_pars_vertex:Vh,color_vertex:Hh,common:kh,defaultnormal_vertex:jh,displacementmap_pars_vertex:Qh,displacementmap_vertex:qh,emissivemap_fragment:Gh,emissivemap_pars_fragment:Wh,colorspace_fragment:Yh,colorspace_pars_fragment:Xh,envmap_fragment:Jh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:Zh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:ud,envmap_vertex:td,fog_vertex:ed,fog_pars_vertex:nd,fog_fragment:id,fog_pars_fragment:sd,gradientmap_pars_fragment:rd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:ld,lights_pars_begin:cd,lights_toon_fragment:hd,lights_toon_pars_fragment:dd,lights_phong_fragment:fd,lights_phong_pars_fragment:pd,lights_physical_fragment:gd,lights_physical_pars_fragment:md,lights_fragment_begin:Md,lights_fragment_maps:Ed,lights_fragment_end:xd,lightprobes_pars_fragment:Ad,logdepthbuf_fragment:yd,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:vd,map_fragment:Sd,map_pars_fragment:Rd,map_particle_fragment:bd,map_particle_pars_fragment:Cd,metalnessmap_fragment:wd,metalnessmap_pars_fragment:_d,morphinstance_vertex:Nd,morphcolor_vertex:Dd,morphnormal_vertex:Ld,morphtarget_pars_vertex:Ud,morphtarget_vertex:Od,normal_fragment_begin:Pd,normal_fragment_maps:zd,normal_pars_fragment:Bd,normal_pars_vertex:Fd,normal_vertex:Vd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:Qd,iridescence_pars_fragment:qd,opaque_fragment:Gd,packing:Wd,premultiplied_alpha_fragment:Yd,project_vertex:Xd,dithering_fragment:Jd,dithering_pars_fragment:Kd,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:$d,shadowmap_pars_fragment:tf,shadowmap_pars_vertex:ef,shadowmap_vertex:nf,shadowmask_pars_fragment:sf,skinbase_vertex:rf,skinning_pars_vertex:af,skinning_vertex:of,skinnormal_vertex:lf,specularmap_fragment:cf,specularmap_pars_fragment:uf,tonemapping_fragment:hf,tonemapping_pars_fragment:df,transmission_fragment:ff,transmission_pars_fragment:pf,uv_pars_fragment:gf,uv_pars_vertex:mf,uv_vertex:Mf,worldpos_vertex:Ef,background_vert:xf,background_frag:Af,backgroundCube_vert:yf,backgroundCube_frag:If,cube_vert:Tf,cube_frag:vf,depth_vert:Sf,depth_frag:Rf,distance_vert:bf,distance_frag:Cf,equirect_vert:wf,equirect_frag:_f,linedashed_vert:Nf,linedashed_frag:Df,meshbasic_vert:Lf,meshbasic_frag:Uf,meshlambert_vert:Of,meshlambert_frag:Pf,meshmatcap_vert:zf,meshmatcap_frag:Bf,meshnormal_vert:Ff,meshnormal_frag:Vf,meshphong_vert:Hf,meshphong_frag:kf,meshphysical_vert:jf,meshphysical_frag:Qf,meshtoon_vert:qf,meshtoon_frag:Gf,points_vert:Wf,points_frag:Yf,shadow_vert:Xf,shadow_frag:Jf,sprite_vert:Kf,sprite_frag:Zf},vt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Sn={basic:{uniforms:Ve([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ve([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ve([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ve([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ve([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ve([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ve([vt.points,vt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ve([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ve([vt.common,vt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ve([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ve([vt.sprite,vt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Ve([vt.common,vt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Ve([vt.lights,vt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Sn.physical={uniforms:Ve([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Wa={r:0,b:0,g:0},$f=new le,fu=new Ft;fu.set(-1,0,0,0,1,0,0,0,1);function tp(i,t,e,n,s,r){let a=new Ht(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let v=T.backgroundBlurriness>0;R=t.get(R,v)}return R}function M(T){let R=!1,v=d(T);v===null?p(a,o):v&&v.isColor&&(p(v,1),R=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(T,R){let v=d(R);v&&v.isCubeTexture?(l===void 0&&(l=new de(new Xn(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Ai(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,y,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($f.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fu),l.material.toneMapped=te.getTransfer(v.colorSpace)!==oe,(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new de(new rn(2,2),new je({name:"BackgroundMaterial",uniforms:Ai(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=te.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,R){T.getRGB(Wa,ol(i)),e.buffers.color.setClear(Wa.r,Wa.g,Wa.b,R,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,R=1){a.set(T),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:M,addToRenderList:A,dispose:g}}function ep(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,F,H,_,O){let q=!1,B=f(N,_,H,F);r!==B&&(r=B,l(r.object)),q=d(N,_,H,O),q&&M(N,_,H,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(N,F,H,_),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,F,H,_){let O=_.wireframe===!0,q=n[F.id];q===void 0&&(q={},n[F.id]=q);let B=N.isInstancedMesh===!0?N.id:0,tt=q[B];tt===void 0&&(tt={},q[B]=tt);let Q=tt[H.id];Q===void 0&&(Q={},tt[H.id]=Q);let W=Q[O];return W===void 0&&(W=u(c()),Q[O]=W),W}function u(N){let F=[],H=[],_=[];for(let O=0;O<e;O++)F[O]=0,H[O]=0,_[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:_,object:N,attributes:{},index:null}}function d(N,F,H,_){let O=r.attributes,q=F.attributes,B=0,tt=H.getAttributes();for(let Q in tt)if(tt[Q].location>=0){let $=O[Q],ht=q[Q];if(ht===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(ht=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(ht=N.instanceColor)),$===void 0||$.attribute!==ht||ht&&$.data!==ht.data)return!0;B++}return r.attributesNum!==B||r.index!==_}function M(N,F,H,_){let O={},q=F.attributes,B=0,tt=H.getAttributes();for(let Q in tt)if(tt[Q].location>=0){let $=q[Q];$===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&($=N.instanceColor));let ht={};ht.attribute=$,$&&$.data&&(ht.data=$.data),O[Q]=ht,B++}r.attributes=O,r.attributesNum=B,r.index=_}function A(){let N=r.newAttributes;for(let F=0,H=N.length;F<H;F++)N[F]=0}function p(N){g(N,0)}function g(N,F){let H=r.newAttributes,_=r.enabledAttributes,O=r.attributeDivisors;H[N]=1,_[N]===0&&(i.enableVertexAttribArray(N),_[N]=1),O[N]!==F&&(i.vertexAttribDivisor(N,F),O[N]=F)}function T(){let N=r.newAttributes,F=r.enabledAttributes;for(let H=0,_=F.length;H<_;H++)F[H]!==N[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function R(N,F,H,_,O,q,B){B===!0?i.vertexAttribIPointer(N,F,H,O,q):i.vertexAttribPointer(N,F,H,_,O,q)}function v(N,F,H,_){A();let O=_.attributes,q=H.getAttributes(),B=F.defaultAttributeValues;for(let tt in q){let Q=q[tt];if(Q.location>=0){let W=O[tt];if(W===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(W=N.instanceColor)),W!==void 0){let $=W.normalized,ht=W.itemSize,Ut=t.get(W);if(Ut===void 0)continue;let j=Ut.buffer,ct=Ut.type,yt=Ut.bytesPerElement,Dt=ct===i.INT||ct===i.UNSIGNED_INT||W.gpuType===ca;if(W.isInterleavedBufferAttribute){let gt=W.data,ot=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Wt=W.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let at=0;at<Q.locationSize;at++)g(Q.location+at,gt.meshPerAttribute);N.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let at=0;at<Q.locationSize;at++)p(Q.location+at);i.bindBuffer(i.ARRAY_BUFFER,j);for(let at=0;at<Q.locationSize;at++)R(Q.location+at,ht/Q.locationSize,ct,$,ot*yt,(Wt+ht/Q.locationSize*at)*yt,Dt)}else{if(W.isInstancedBufferAttribute){for(let gt=0;gt<Q.locationSize;gt++)g(Q.location+gt,W.meshPerAttribute);N.isInstancedMesh!==!0&&_._maxInstanceCount===void 0&&(_._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let gt=0;gt<Q.locationSize;gt++)p(Q.location+gt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let gt=0;gt<Q.locationSize;gt++)R(Q.location+gt,ht/Q.locationSize,ct,$,ht*yt,ht/Q.locationSize*gt*yt,Dt)}}else if(B!==void 0){let $=B[tt];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(Q.location,$);break;case 3:i.vertexAttrib3fv(Q.location,$);break;case 4:i.vertexAttrib4fv(Q.location,$);break;default:i.vertexAttrib1fv(Q.location,$)}}}}T()}function b(){P();for(let N in n){let F=n[N];for(let H in F){let _=F[H];for(let O in _){let q=_[O];for(let B in q)h(q[B].object),delete q[B];delete _[O]}}delete n[N]}}function y(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let H in F){let _=F[H];for(let O in _){let q=_[O];for(let B in q)h(q[B].object),delete q[B];delete _[O]}}delete n[N.id]}function m(N){for(let F in n){let H=n[F];for(let _ in H){let O=H[_];if(O[N.id]===void 0)continue;let q=O[N.id];for(let B in q)h(q[B].object),delete q[B];delete O[N.id]}}}function S(N){for(let F in n){let H=n[F],_=N.isInstancedMesh===!0?N.id:0,O=H[_];if(O!==void 0){for(let q in O){let B=O[q];for(let tt in B)h(B[tt].object),delete B[tt];delete O[q]}delete H[_],Object.keys(H).length===0&&delete n[F]}}}function P(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:S,releaseStatesOfProgram:m,initAttributes:A,enableAttribute:p,disableUnusedAttributes:T}}function np(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ip(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let m=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){return!(m!==mn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let S=m===gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(m!==We&&m!==an&&!S&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ot("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:v,maxSamples:b,samples:y}}function sp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let M=f.clippingPlanes,A=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!s||M===null||M.length===0||r&&!p)r?h(null):l();else{let T=r?0:n,R=T*4,v=g.clippingState||null;c.value=v,v=h(M,u,R,d);for(let b=0;b!==R;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,M){let A=f!==null?f.length:0,p=null;if(A!==0){if(p=c.value,M!==!0||p===null){let g=d+A*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<g)&&(p=new Float32Array(g));for(let R=0,v=d;R!==A;++R,v+=4)a.copy(f[R]).applyMatrix4(T,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}var Ks=class extends _e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:mi});r.uniforms.tEquirect.value=e;let a=new de(s,r),o=e.minFilter;return e.minFilter===fn&&(e.minFilter=Le),new Ji(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},qc=256,rp=3,ap=20,pu=256,gu=16,op=3,lp=new U,cp=new Ht,ns=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ji(1,10,null),this._boxMesh=new de(new Xn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=lp}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,M=c.autoClearStencil,A=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,A===null&&(t.background=c.getClearColor(cp));let p=new Ji(n,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=M,t.background=A,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(qc,Vc(t))}_fromTexture(t,e){t.mapping===Ei||t.mapping===$i?this._setSize(t.image.length===0?qc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Gc(t,!1,!1),n=Math.log2(t)-rp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Gc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ei||t.mapping===$i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=up(),this._integrationMaterial=hp());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/gu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-op)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(pu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=dp());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Gc(i,t,e){return new Ks(i,{minFilter:fn,generateMipmaps:t,type:gn,colorSpace:gs,depthBuffer:e})}function $s(i,t,e){return new je({name:i,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:Ue,blending:mi,depthTest:!1,depthWrite:!1})}function up(){return $s("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function hp(){return $s("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gu}},`

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
	`)}function dp(){return $s("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ap}
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
	`)}function Wc(){return $s("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function fp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===aa||d===oa)if(t.has(u)){let M=t.get(u).texture;return o(M,u.mapping)}else{let M=u.image;if(M&&M.height>0){let A=new Ks(M.height);return A.fromEquirectangularTexture(i,u),t.set(u,A),u.addEventListener("dispose",l),o(A.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,M=d===aa||d===oa,A=d===Ei||d===$i;if(M||A){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new ns(i)),p=M?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let T=u.image;return M&&T&&T.height>0||A&&T&&c(T)?(n===null&&(n=new ns(i)),p=M?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===aa?u.mapping=Ei:d===oa&&(u.mapping=$i),u}function c(u){let d=0,M=6;for(let A=0;A<M;A++)u[A]!==void 0&&d++;return d===M}function l(u){let d=u.target;d.removeEventListener("dispose",l);let M=t.get(d);M!==void 0&&(t.delete(d),M.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let M=e.get(d);M!==void 0&&(e.delete(d),M.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function pp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&hi("WebGLRenderer: "+n+" extension not supported."),s}}}function gp(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(M=>delete s[M]);function o(M){c(M.target)}function c(M){M.index!==null&&t.remove(M.index);for(let p in M.attributes)t.remove(M.attributes[p]);M.removeEventListener("dispose",o),delete s[M.id],a.unregister(M);let A=r.get(M);A&&(t.remove(A),r.delete(M)),n.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,e.memory.geometries--}function l(M,A){return s[A.id]!==void 0||(A.addEventListener("dispose",o),s[A.id]=new WeakRef(A),a.register(A,A.id,A),e.memory.geometries++),A}function h(M){let A=M.attributes;for(let p in A)t.update(A[p],i.ARRAY_BUFFER)}function f(M){let A=M.index,p=M.attributes.position,g=0;if(p===void 0)return;let T=A!==null?A.array.length:p.array.length/3-1,R=p.count>=65535?As:xs,v=new R(Math.ceil(T/3)*6,1),b=v.array;if(A!==null){let m=A.array;g=A.version;for(let S=0,P=0;S<T;S+=3){let w=m[S+0],N=m[S+1],F=m[S+2];b[P++]=w,b[P++]=N,b[P++]=N,b[P++]=F,b[P++]=F,b[P++]=w}}else{g=p.version;for(let m=0,S=0;m<T;m+=3){let P=m+0,w=m+1,N=m+2;b[S++]=P,b[S++]=w,b[S++]=w,b[S++]=N,b[S++]=N,b[S++]=P}}v.version=g;let y=r.get(M);y&&t.remove(y),r.set(M,v)}function u(M){let A=r.get(M);if(A){let p=M.index;p!==null&&A.version<p.version&&f(M)}else f(M);return r.get(M)}function d(){for(let M in s){let A=s[M].deref();A!==void 0&&c(A)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function mp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function l(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let A=0;for(let p=0;p<d;p++)A+=u[p];e.update(A,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Mp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ep(i,t,e){let n=new WeakMap,s=new me;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let P=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],R=0;d===!0&&(R=1),M===!0&&(R=2),A===!0&&(R=3);let v=o.attributes.position.count*R,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let y=new Float32Array(v*b*4*f),m=new Ms(y,v,b,f);m.type=an,m.needsUpdate=!0;let S=R*4;for(let w=0;w<f;w++){let N=p[w],F=g[w],H=T[w],_=v*b*4*w;for(let O=0;O<N.count;O++){let q=O*S;d===!0&&(s.fromBufferAttribute(N,O),y[_+q+0]=s.x,y[_+q+1]=s.y,y[_+q+2]=s.z,y[_+q+3]=0),M===!0&&(s.fromBufferAttribute(F,O),y[_+q+4]=s.x,y[_+q+5]=s.y,y[_+q+6]=s.z,y[_+q+7]=0),A===!0&&(s.fromBufferAttribute(H,O),y[_+q+8]=s.x,y[_+q+9]=s.y,y[_+q+10]=s.z,y[_+q+11]=H.itemSize===4?s.w:1)}}u={count:f,texture:m,size:new Gt(v,b)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let A=0;A<l.length;A++)d+=l[A];let M=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function xp(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ap={[ko]:"LINEAR_TONE_MAPPING",[jo]:"REINHARD_TONE_MAPPING",[Qo]:"CINEON_TONE_MAPPING",[Bs]:"ACES_FILMIC_TONE_MAPPING",[Go]:"AGX_TONE_MAPPING",[Fs]:"NEUTRAL_TONE_MAPPING",[qo]:"CUSTOM_TONE_MAPPING"};function yp(i,t,e,n,s,r){let a=new _e(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new sn;h.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let f=new Qr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new de(h,f),d=new $n(-1,1,1,-1,0,1),M=null,A=null,p=!1,g,T=null,R=[],v=!1;this.setSize=function(b,y){a.setSize(b,y),o!==null&&o.setSize(b,y),c!==null&&c.setSize(b,y);for(let m=0;m<R.length;m++){let S=R[m];S.setSize&&S.setSize(b,y)}},this.setEffects=function(b){R=b,v=R.length>0&&R[0].isRenderPass===!0;let y=a.width,m=a.height;R.length>0&&o===null&&(o=new _e(y,m,{type:gn,depthBuffer:!1,stencilBuffer:!1}),c=new _e(y,m,{type:gn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&R.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new Pn(y,m),r===!0&&(l.format=zn,l.type=xi)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<R.length;P++){let w=R[P];w.setSize&&w.setSize(y,m),S&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(l)}},this.begin=function(b,y){if(p||b.toneMapping===Tn&&R.length===0)return!1;if(T=y,y!==null){let m=y.width,S=y.height;(a.width!==m||a.height!==S)&&this.setSize(m,S)}return v===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Tn,!0},this.hasRenderPass=function(){return v},this.end=function(b,y){b.toneMapping=g,p=!0;let m=a,S=o;for(let P=0;P<R.length;P++){let w=R[P];w.enabled!==!1&&(w.render(b,S,m,y),w.needsSwap!==!1&&(m=S,S=S===o?c:o))}if(M!==b.outputColorSpace||A!==b.toneMapping){M=b.outputColorSpace,A=b.toneMapping,f.defines={},te.getTransfer(M)===oe&&(f.defines.SRGB_TRANSFER="");let P=Ap[A];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=m.texture,b.setRenderTarget(T),b.render(u,d),T=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var mu=new Fe,Mu=new Pn(1,1),Eu=new bs(1),xu=new Ms,Au=new Fr,yu=new Rs,Xc=[],Jc=[],Kc=new Float32Array(16),Zc=new Float32Array(9),$c=new Float32Array(4);function is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xa(i,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ip(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Sp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Rp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Se(e,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),Re(e,n)}}function bp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Se(e,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),Re(e,n)}}function Cp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Se(e,n))return;Kc.set(n),i.uniformMatrix4fv(this.addr,!1,Kc),Re(e,n)}}function wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Lp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Ja(i){return i.version===0&&(i.compareFunction=nl,i.needsUpdate=!0),i}function zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ja(Mu):r=mu,e.setTexture2D(t||r,s)}function Bp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Au,s)}function Fp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ja(Eu):r=yu,e.setTextureCube(t||r,s)}function Vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xu,s)}function Hp(i){switch(i){case 5126:return Ip;case 35664:return Tp;case 35665:return vp;case 35666:return Sp;case 35674:return Rp;case 35675:return bp;case 35676:return Cp;case 5124:case 35670:return wp;case 35667:case 35671:return _p;case 35668:case 35672:return Np;case 35669:case 35673:return Dp;case 5125:return Lp;case 36294:return Up;case 36295:return Op;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Vp}}function kp(i,t){i.uniform1fv(this.addr,t)}function jp(i,t){let e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function Qp(i,t){let e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function qp(i,t){let e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function Gp(i,t){let e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wp(i,t){let e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yp(i,t){let e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xp(i,t){i.uniform1iv(this.addr,t)}function Jp(i,t){i.uniform2iv(this.addr,t)}function Kp(i,t){i.uniform3iv(this.addr,t)}function Zp(i,t){i.uniform4iv(this.addr,t)}function $p(i,t){i.uniform1uiv(this.addr,t)}function tg(i,t){i.uniform2uiv(this.addr,t)}function eg(i,t){i.uniform3uiv(this.addr,t)}function ng(i,t){i.uniform4uiv(this.addr,t)}function ig(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ja(Mu):a=mu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function sg(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Au,r[a])}function rg(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ja(Eu):a=yu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function ag(i,t,e){let n=this.cache,s=t.length,r=Xa(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xu,r[a])}function og(i){switch(i){case 5126:return kp;case 35664:return jp;case 35665:return Qp;case 35666:return qp;case 35674:return Gp;case 35675:return Wp;case 35676:return Yp;case 5124:case 35670:return Xp;case 35667:case 35671:return Jp;case 35668:case 35672:return Kp;case 35669:case 35673:return Zp;case 5125:return $p;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}var fl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hp(e.type)}},pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}},gl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},hl=/(\w+)(\])?(\[|\.)?/g;function tu(i,t){i.seq.push(t),i.map[t.id]=t}function lg(i,t,e){let n=i.name,s=n.length;for(hl.lastIndex=0;;){let r=hl.exec(n),a=hl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){tu(e,l===void 0?new fl(o,i,t):new pl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new gl(o),tu(e,f)),e=f}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);lg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function eu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var cg=37297,ug=0;function hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var nu=new Ft;function dg(i){te._getMatrix(nu,te.workingColorSpace,i);let t=`mat3( ${nu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case ms:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function iu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+hg(i.getShaderSource(t),o)}else return r}function fg(i,t){let e=dg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var pg={[ko]:"Linear",[jo]:"Reinhard",[Qo]:"Cineon",[Bs]:"ACESFilmic",[Go]:"AgX",[Fs]:"Neutral",[qo]:"Custom"};function gg(i,t){let e=pg[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ya=new U;function mg(){te.getLuminanceCoefficients(Ya);let i=Ya.x.toFixed(4),t=Ya.y.toFixed(4),e=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Eg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Js(i){return i!==""}function su(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ru(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(i){return i.replace(Ag,yg)}function yg(i,t){let e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ml(e)}var Ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(i){return i.replace(Ig,Tg)}function Tg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ou(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var vg={[zs]:"SHADOWMAP_TYPE_PCF",[Ki]:"SHADOWMAP_TYPE_VSM"};function Sg(i){return vg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rg={[$i]:"ENVMAP_MODE_REFRACTION"};function bg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cg={[ra]:"ENVMAP_BLENDING_MULTIPLY",[vc]:"ENVMAP_BLENDING_MIX",[Sc]:"ENVMAP_BLENDING_ADD"};function wg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cg[i.combine]||"ENVMAP_BLENDING_NONE"}function _g(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Sg(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=bg(e),f=wg(e),u=Mg(e),d=Eg(r),M=s.createProgram(),A,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Js).join(`
`),A.length>0&&(A+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Js).join(`
`),p.length>0&&(p+=`
`)):(A=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),p=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,fg("linearToOutputTexel",e.outputColorSpace),mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),a=ml(a),a=su(a,e),a=ru(a,e),o=ml(o),o=su(o,e),o=ru(o,e),a=au(a),o=au(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,A=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,p=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=g+A+a,R=g+p+o,v=eu(s,s.VERTEX_SHADER,T),b=eu(s,s.FRAGMENT_SHADER,R);s.attachShader(M,v),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function y(w){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(M)||"",F=s.getShaderInfoLog(v)||"",H=s.getShaderInfoLog(b)||"",_=N.trim(),O=F.trim(),q=H.trim(),B=!0,tt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,v,b);else{let Q=iu(s,v,"vertex"),W=iu(s,b,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+_+`
`+Q+`
`+W)}else _!==""?Ot("WebGLProgram: Program Info Log:",_):(O===""||q==="")&&(tt=!1);tt&&(w.diagnostics={runnable:B,programLog:_,vertexShader:{log:O,prefix:A},fragmentShader:{log:q,prefix:p}})}s.deleteShader(v),s.deleteShader(b),m=new es(s,M),S=xg(s,M)}let m;this.getUniforms=function(){return m===void 0&&y(this),m};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,cg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ug++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=v,this.fragmentShader=b,this}var Ng=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new El(t),e.set(t,n)),n}},El=class{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}};function Dg(i){return i===ei||i===qs||i===Gs}function Lg(i,t,e,n,s,r){let a=new Es,o=new Ml,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(m){return c.add(m),m===0?"uv":`uv${m}`}function M(m,S,P,w,N,F){let H=w.fog,_=N.geometry,O=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?w.environment:null,q=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,B=t.get(m.envMap||O,q),tt=u[m.type],Q=n.precision;m.precision!==null&&(Q=n.getMaxPrecision(m.precision),Q!==m.precision&&Ot("WebGLProgram.getParameters:",m.precision,"not supported, using",Q,"instead."));let W=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,$=W!==void 0?W.length:0,ht=0;_.morphAttributes.position!==void 0&&(ht=1),_.morphAttributes.normal!==void 0&&(ht=2),_.morphAttributes.color!==void 0&&(ht=3);let Ut,j,ct,yt;if(tt){let It=Sn[tt];Ut=It.vertexShader,j=It.fragmentShader}else{Ut=m.vertexShader,j=m.fragmentShader;let It=o.getVertexShaderStage(m),se=o.getFragmentShaderStage(m);o.update(m,It,se),ct=It.id,yt=se.id}let Dt=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),ot=N.isInstancedMesh===!0,Wt=N.isBatchedMesh===!0,at=!!m.map,Tt=!!m.matcap,At=!!B,mt=At&&B.isPMREMTexture===!0,Pt=!!m.aoMap,zt=!!m.lightMap,ee=!!m.bumpMap&&m.wireframe===!1,Jt=!!m.normalMap,xe=!!m.displacementMap,kt=!!m.emissiveMap,ve=!!m.metalnessMap,ie=!!m.roughnessMap,ce=m.anisotropy>0,L=m.clearcoat>0,Me=m.diffuseRoughness>0,re=m.dispersion>0,xt=m.retroreflectivity>0,nt=m.iridescence>0,qt=m.sheen>0,pt=m.transmission>0,Rt=ce&&!!m.anisotropyMap,I=L&&!!m.clearcoatMap,E=L&&!!m.clearcoatNormalMap,z=L&&!!m.clearcoatRoughnessMap,et=Me&&!!m.diffuseRoughnessMap,J=nt&&!!m.iridescenceMap,st=nt&&!!m.iridescenceThicknessMap,ut=qt&&!!m.sheenColorMap,X=qt&&!!m.sheenRoughnessMap,K=!!m.specularMap,ft=!!m.specularColorMap,C=!!m.specularIntensityMap,Z=pt&&!!m.transmissionMap,Y=pt&&!!m.thicknessMap,lt=!!m.gradientMap,rt=!!m.alphaMap,dt=m.alphaTest>0,Ct=!!m.alphaHash,Vt=!!m.extensions,it=Tn;m.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(it=i.toneMapping);let wt=mt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,jt={shaderID:tt,shaderType:m.type,shaderName:m.name,vertexShader:Ut,fragmentShader:j,defines:m.defines,customVertexShaderID:ct,customFragmentShaderID:yt,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:Q,batching:Wt,batchingColor:Wt&&N._colorsTexture!==null,instancing:ot,instancingColor:ot&&N.instanceColor!==null,instancingMorph:ot&&N.morphTexture!==null,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:at,matcap:Tt,envMap:At,envMapMode:At&&B.mapping,envMapPMREM:mt,envMapMaxLod:mt?wt.length-1:null,envMapSize:mt?wt[0].width:null,aoMap:Pt,lightMap:zt,bumpMap:ee,normalMap:Jt,displacementMap:xe,emissiveMap:kt,normalMapObjectSpace:Jt&&m.normalMapType===Cc,normalMapTangentSpace:Jt&&m.normalMapType===Ws,packedNormalMap:Jt&&m.normalMapType===Ws&&Dg(m.normalMap.format),metalnessMap:ve,roughnessMap:ie,anisotropy:ce,anisotropyMap:Rt,clearcoat:L,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:z,diffuseRoughness:Me,diffuseRoughnessMap:et,dispersion:re,retroreflection:xt,iridescence:nt,iridescenceMap:J,iridescenceThicknessMap:st,sheen:qt,sheenColorMap:ut,sheenRoughnessMap:X,specularMap:K,specularColorMap:ft,specularIntensityMap:C,transmission:pt,transmissionMap:Z,thicknessMap:Y,gradientMap:lt,opaque:m.transparent===!1&&m.blending===Zi&&m.alphaToCoverage===!1,alphaMap:rt,alphaTest:dt,alphaHash:Ct,combine:m.combine,mapUv:at&&d(m.map.channel),aoMapUv:Pt&&d(m.aoMap.channel),lightMapUv:zt&&d(m.lightMap.channel),bumpMapUv:ee&&d(m.bumpMap.channel),normalMapUv:Jt&&d(m.normalMap.channel),displacementMapUv:xe&&d(m.displacementMap.channel),emissiveMapUv:kt&&d(m.emissiveMap.channel),metalnessMapUv:ve&&d(m.metalnessMap.channel),roughnessMapUv:ie&&d(m.roughnessMap.channel),anisotropyMapUv:Rt&&d(m.anisotropyMap.channel),clearcoatMapUv:I&&d(m.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&d(m.diffuseRoughnessMap.channel),iridescenceMapUv:J&&d(m.iridescenceMap.channel),iridescenceThicknessMapUv:st&&d(m.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&d(m.sheenColorMap.channel),sheenRoughnessMapUv:X&&d(m.sheenRoughnessMap.channel),specularMapUv:K&&d(m.specularMap.channel),specularColorMapUv:ft&&d(m.specularColorMap.channel),specularIntensityMapUv:C&&d(m.specularIntensityMap.channel),transmissionMapUv:Z&&d(m.transmissionMap.channel),thicknessMapUv:Y&&d(m.thicknessMap.channel),alphaMapUv:rt&&d(m.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(Jt||ce),vertexNormals:!!_.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!_.attributes.uv&&(at||rt),fog:!!H,useFog:m.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||_.attributes.normal===void 0&&Jt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ht,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:at&&m.map.isVideoTexture===!0&&te.getTransfer(m.map.colorSpace)===oe,decodeVideoTextureEmissive:kt&&m.emissiveMap.isVideoTexture===!0&&te.getTransfer(m.emissiveMap.colorSpace)===oe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Ge,flipSided:m.side===Ue,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Vt&&m.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&m.extensions.multiDraw===!0||Wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function A(m){let S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(let P in m.defines)S.push(P),S.push(m.defines[P]);return m.isRawShaderMaterial===!1&&(p(S,m),g(S,m),S.push(i.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function p(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapPMREM),m.push(S.envMapMaxLod),m.push(S.envMapSize),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.diffuseRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.numLightProbeGrids),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function g(m,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function T(m){let S=u[m.type],P;if(S){let w=Sn[S];P=kc.clone(w.uniforms)}else P=m.uniforms;return P}function R(m,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new _g(i,S,m,s),l.push(P),h.set(S,P)),P}function v(m){if(--m.usedTimes===0){let S=l.indexOf(m);l[S]=l[l.length-1],l.pop(),h.delete(m.cacheKey),m.destroy()}}function b(m){o.remove(m)}function y(){o.dispose()}return{getParameters:M,getProgramCacheKey:A,getUniforms:T,acquireProgram:R,releaseProgram:v,releaseShaderCache:b,programs:l,dispose:y}}function Ug(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Og(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function lu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,M,A,p,g){let T=i[t];return T===void 0?(T={id:u.id,object:u,geometry:d,material:M,materialVariant:a(u),groupOrder:A,renderOrder:u.renderOrder,z:p,group:g},i[t]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=M,T.materialVariant=a(u),T.groupOrder=A,T.renderOrder=u.renderOrder,T.z=p,T.group=g),t++,T}function c(u,d,M,A,p,g,T){T.reversedDepth===!0&&(p=-p);let R=o(u,d,M,A,p,g);M.transmission>0?n.push(R):M.transparent===!0?s.push(R):e.push(R)}function l(u,d,M,A,p,g){let T=o(u,d,M,A,p,g);M.transmission>0?n.unshift(T):M.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,d){e.length>1&&e.sort(u||Og),n.length>1&&n.sort(d||lu),s.length>1&&s.sort(d||lu)}function f(){for(let u=t,d=i.length;u<d;u++){let M=i[u];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Pg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new cu,i.set(n,[a])):s>=r.length?(a=new cu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Bg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Fg=0;function Vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hg(i){let t=new zg,e=Bg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new le,a=new le;function o(l){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,M=0,A=0,p=0,g=0,T=0,R=0,v=0,b=0,y=0,m=0,S=0,P=0,w=0;l.sort(Vg);for(let F=0,H=l.length;F<H;F++){let _=l[F],O=_.color,q=_.intensity,B=_.distance,tt=null;if(_.shadow&&_.shadow.map&&(_.shadow.map.texture.format===ei?tt=_.shadow.map.texture:tt=_.shadow.map.depthTexture||_.shadow.map.texture),_.isAmbientLight)h+=O.r*q,f+=O.g*q,u+=O.b*q;else if(_.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(_.sh.coefficients[Q],q);w++}else if(_.isSunLight){let Q=t.get(_);if(Q.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){let W=_.shadow,$=e.get(_);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[M]=$,n.sunShadowMap[M]=tt;let ht=W.getViewportCount();for(let Ut=0;Ut<ht;Ut++)n.sunShadowMatrix[A+Ut]=W.getMatrix(Ut),n.sunShadowCascade[A+Ut]=W._cascadeData[Ut];A+=ht,M++}n.sun[d]=Q,d++}else if(_.isDirectionalLight){let Q=t.get(_);if(Q.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){let W=_.shadow,$=e.get(_);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=_.shadow.matrix,b++}n.directional[p]=Q,p++}else if(_.isSpotLight){let Q=t.get(_);Q.position.setFromMatrixPosition(_.matrixWorld),Q.color.copy(O).multiplyScalar(q),Q.distance=B,Q.coneCos=Math.cos(_.angle),Q.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),Q.decay=_.decay,n.spot[T]=Q;let W=_.shadow;if(_.map&&(n.spotLightMap[S]=_.map,S++,W.updateMatrices(_),_.castShadow&&P++),n.spotLightMatrix[T]=W.matrix,_.castShadow){let $=e.get(_);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,n.spotShadow[T]=$,n.spotShadowMap[T]=tt,m++}T++}else if(_.isRectAreaLight){let Q=t.get(_);Q.color.copy(O).multiplyScalar(q),Q.halfWidth.set(_.width*.5,0,0),Q.halfHeight.set(0,_.height*.5,0),n.rectArea[R]=Q,R++}else if(_.isPointLight){let Q=t.get(_);if(Q.color.copy(_.color).multiplyScalar(_.intensity),Q.distance=_.distance,Q.decay=_.decay,_.castShadow){let W=_.shadow,$=e.get(_);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,$.shadowCameraNear=W.camera.near,$.shadowCameraFar=W.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=_.shadow.matrix,y++}n.point[g]=Q,g++}else if(_.isHemisphereLight){let Q=t.get(_);Q.skyColor.copy(_.color).multiplyScalar(q),Q.groundColor.copy(_.groundColor).multiplyScalar(q),n.hemi[v]=Q,v++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==T||N.rectAreaLength!==R||N.hemiLength!==v||N.numSunShadows!==M||N.numDirectionalShadows!==b||N.numPointShadows!==y||N.numSpotShadows!==m||N.numSpotMaps!==S||N.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=p,n.spot.length=T,n.rectArea.length=R,n.point.length=g,n.hemi.length=v,n.sunShadow.length=M,n.sunShadowMap.length=M,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,N.sunLength=d,N.directionalLength=p,N.pointLength=g,N.spotLength=T,N.rectAreaLength=R,N.hemiLength=v,N.numSunShadows=M,N.numDirectionalShadows=b,N.numPointShadows=y,N.numSpotShadows=m,N.numSpotMaps=S,N.numLightProbes=w,n.version=Fg++)}function c(l,h){let f=0,u=0,d=0,M=0,A=0,p=0,g=h.matrixWorldInverse;for(let T=0,R=l.length;T<R;T++){let v=l[T];if(v.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),f++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(v.isSpotLight){let b=n.spot[M];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),M++}else if(v.isRectAreaLight){let b=n.rectArea[A];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),A++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function uu(i){let t=new Hg(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function c(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function kg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new uu(i),t.set(s,[o])):r>=a.length?(o=new uu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
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
}`,qg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Gg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],hu=new le,Xs=new U,dl=new U;function Wg(i,t,e){let n=new Yn,s=new Gt,r=new Gt,a=new me,o=new qr,c=new Gr,l={},h=e.maxTextureSize,f={[ti]:Ue,[Ue]:ti,[Ge]:Ge},u=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:jg,fragmentShader:Qg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let M=new sn;M.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new de(M,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let g=this.type;this.render=function(y,m,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===sa&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);let P=i.getRenderTarget(),w=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(mi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=g!==this.type;H&&m.traverse(function(_){_.material&&(Array.isArray(_.material)?_.material.forEach(O=>O.needsUpdate=!0):_.material.needsUpdate=!0)});for(let _=0,O=y.length;_<O;_++){let q=y[_],B=q.shadow;if(B===void 0){Ot("WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let tt=B.getFrameExtents();s.multiply(tt),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,B.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Q,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ki){if(q.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new _e(s.x,s.y,{format:ei,type:gn,minFilter:Le,magFilter:Le,generateMipmaps:!1}),B.map.texture.name=q.name+".shadowMap",B.map.depthTexture=new Pn(s.x,s.y,an),B.map.depthTexture.name=q.name+".shadowMapDepth",B.map.depthTexture.format=Ln,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=we,B.map.depthTexture.magFilter=we}else q.isPointLight?(B.map=new Ks(s.x),B.map.depthTexture=new bs(s.x,pn)):(B.map=new _e(s.x,s.y),B.map.depthTexture=new Pn(s.x,s.y,pn)),B.map.depthTexture.name=q.name+".shadowMap",B.map.depthTexture.format=Ln,this.type===zs?(B.map.depthTexture.compareFunction=Q?el:tl,B.map.depthTexture.minFilter=Le,B.map.depthTexture.magFilter=Le):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=we,B.map.depthTexture.magFilter=we);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let W=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();q.isPointLight!==!0&&B.updateMatrices(q,S);let $=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let ht=0;ht<W;ht++){let Ut=B.getCamera(ht);if(q.isPointLight){let j=B.camera,ct=B.matrix,yt=q.distance||j.far;yt!==j.far&&(j.far=yt,j.updateProjectionMatrix()),Xs.setFromMatrixPosition(q.matrixWorld),j.position.copy(Xs),dl.copy(j.position),dl.add(qg[ht]),j.up.copy(Gg[ht]),j.lookAt(dl),j.updateMatrixWorld(),ct.makeTranslation(-Xs.x,-Xs.y,-Xs.z),hu.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),B._frustum.setFromProjectionMatrix(hu,j.coordinateSystem,j.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,ht),i.clear();else{ht===0&&(i.setRenderTarget(B.map),i.clear());let j=B.getViewport(ht);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),F.viewport(a)}n=B.getFrustum(ht),v(m,S,Ut,q,$,this.type)}B.isPointLightShadow!==!0&&this.type===Ki&&T(B,S),B.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(P,w,N)};function T(y,m){let S=t.update(A);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new _e(s.x,s.y,{format:ei,type:gn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(m,null,S,u,A,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(m,null,S,d,A,null)}function R(y,m,S,P){let w=null,N=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N!==void 0)w=N;else if(w=S.isPointLight===!0?c:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let F=w.uuid,H=m.uuid,_=l[F];_===void 0&&(_={},l[F]=_);let O=_[H];O===void 0&&(O=w.clone(),_[H]=O,m.addEventListener("dispose",b)),w=O}if(w.visible=m.visible,w.wireframe=m.wireframe,P===Ki?w.side=m.shadowSide!==null?m.shadowSide:m.side:w.side=m.shadowSide!==null?m.shadowSide:f[m.side],w.alphaMap=m.alphaMap,w.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,w.map=m.map,w.clipShadows=m.clipShadows,w.clippingPlanes=m.clippingPlanes,w.clipIntersection=m.clipIntersection,w.displacementMap=m.displacementMap,w.displacementScale=m.displacementScale,w.displacementBias=m.displacementBias,w.wireframeLinewidth=m.wireframeLinewidth,w.linewidth=m.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let F=i.properties.get(w);F.light=S}return w}function v(y,m,S,P,w,N){if(y.visible===!1)return;if(y.layers.test(w)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&N===Ki)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);let _=t.update(y),O=y.material;if(Array.isArray(O)){let q=_.groups;for(let B=0,tt=q.length;B<tt;B++){let Q=q[B],W=O[Q.materialIndex];if(W&&W.visible){let $=R(y,W,P,N);y.onBeforeShadow(i,y,m,S,_,$,Q),i.renderBufferDirect(S,null,_,$,y,Q),y.onAfterShadow(i,y,m,S,_,$,Q)}}}else if(O.visible){let q=R(y,O,P,N);y.onBeforeShadow(i,y,m,S,_,q,null),i.renderBufferDirect(S,null,_,q,y,null),y.onAfterShadow(i,y,m,S,_,q,null)}}let H=y.children;for(let _=0,O=H.length;_<O;_++)v(H[_],m,S,P,w,N)}function b(y){y.target.removeEventListener("dispose",b);for(let S in l){let P=l[S],w=y.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}function Yg(i,t){function e(){let C=!1,Z=new me,Y=null,lt=new me(0,0,0,0);return{setMask:function(rt){Y!==rt&&!C&&(i.colorMask(rt,rt,rt,rt),Y=rt)},setLocked:function(rt){C=rt},setClear:function(rt,dt,Ct,Vt,it){it===!0&&(rt*=Vt,dt*=Vt,Ct*=Vt),Z.set(rt,dt,Ct,Vt),lt.equals(Z)===!1&&(i.clearColor(rt,dt,Ct,Vt),lt.copy(Z))},reset:function(){C=!1,Y=null,lt.set(-1,0,0,0)}}}function n(){let C=!1,Z=!1,Y=null,lt=null,rt=null;return{setReversed:function(dt){if(Z!==dt){let Ct=t.get("EXT_clip_control");dt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Z=dt;let Vt=rt;rt=null,this.setClear(Vt)}},getReversed:function(){return Z},setTest:function(dt){dt?gt(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(dt){Y!==dt&&!C&&(i.depthMask(dt),Y=dt)},setFunc:function(dt){if(Z&&(dt=Fc[dt]),lt!==dt){switch(dt){case br:i.depthFunc(i.NEVER);break;case Cr:i.depthFunc(i.ALWAYS);break;case wr:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case _r:i.depthFunc(i.EQUAL);break;case Nr:i.depthFunc(i.GEQUAL);break;case Dr:i.depthFunc(i.GREATER);break;case Lr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=dt}},setLocked:function(dt){C=dt},setClear:function(dt){rt!==dt&&(rt=dt,Z&&(dt=1-dt),i.clearDepth(dt))},reset:function(){C=!1,Y=null,lt=null,rt=null,Z=!1}}}function s(){let C=!1,Z=null,Y=null,lt=null,rt=null,dt=null,Ct=null,Vt=null,it=null;return{setTest:function(wt){C||(wt?gt(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(wt){Z!==wt&&!C&&(i.stencilMask(wt),Z=wt)},setFunc:function(wt,jt,It){(Y!==wt||lt!==jt||rt!==It)&&(i.stencilFunc(wt,jt,It),Y=wt,lt=jt,rt=It)},setOp:function(wt,jt,It){(dt!==wt||Ct!==jt||Vt!==It)&&(i.stencilOp(wt,jt,It),dt=wt,Ct=jt,Vt=It)},setLocked:function(wt){C=wt},setClear:function(wt){it!==wt&&(i.clearStencil(wt),it=wt)},reset:function(){C=!1,Z=null,Y=null,lt=null,rt=null,dt=null,Ct=null,Vt=null,it=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,M=[],A=null,p=!1,g=null,T=null,R=null,v=null,b=null,y=null,m=null,S=new Ht(0,0,0),P=0,w=!1,N=null,F=null,H=null,_=null,O=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,tt=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=tt>=1):Q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=tt>=2);let W=null,$={},ht=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),j=new me().fromArray(ht),ct=new me().fromArray(Ut);function yt(C,Z,Y,lt){let rt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(C,dt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<Y;Ct++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(Z+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return dt}let Dt={};Dt[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),a.setFunc(Fi),ee(!1),Jt(Po),gt(i.CULL_FACE),Pt(mi);function gt(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function ot(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Wt(C,Z){return u[C]!==Z?(i.bindFramebuffer(C,Z),u[C]=Z,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Z),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function at(C,Z){let Y=M,lt=!1;if(C){Y=d.get(Z),Y===void 0&&(Y=[],d.set(Z,Y));let rt=C.textures;if(Y.length!==rt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ct=rt.length;dt<Ct;dt++)Y[dt]=i.COLOR_ATTACHMENT0+dt;Y.length=rt.length,lt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,lt=!0);lt&&i.drawBuffers(Y)}function Tt(C){return A!==C?(i.useProgram(C),A=C,!0):!1}let At={[Mi]:i.FUNC_ADD,[oc]:i.FUNC_SUBTRACT,[lc]:i.FUNC_REVERSE_SUBTRACT};At[cc]=i.MIN,At[uc]=i.MAX;let mt={[hc]:i.ZERO,[dc]:i.ONE,[fc]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[xc]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[gc]:i.DST_ALPHA,[pc]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[Ec]:i.ONE_MINUS_DST_COLOR,[mc]:i.ONE_MINUS_DST_ALPHA,[Ac]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[Ic]:i.CONSTANT_ALPHA,[Tc]:i.ONE_MINUS_CONSTANT_ALPHA};function Pt(C,Z,Y,lt,rt,dt,Ct,Vt,it,wt){if(C===mi){p===!0&&(ot(i.BLEND),p=!1);return}if(p===!1&&(gt(i.BLEND),p=!0),C!==ac){if(C!==g||wt!==w){if((T!==Mi||b!==Mi)&&(i.blendEquation(i.FUNC_ADD),T=Mi,b=Mi),wt)switch(C){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.ONE,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",C);break}else switch(C){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bo:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fo:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",C);break}R=null,v=null,y=null,m=null,S.set(0,0,0),P=0,g=C,w=wt}return}rt=rt||Z,dt=dt||Y,Ct=Ct||lt,(Z!==T||rt!==b)&&(i.blendEquationSeparate(At[Z],At[rt]),T=Z,b=rt),(Y!==R||lt!==v||dt!==y||Ct!==m)&&(i.blendFuncSeparate(mt[Y],mt[lt],mt[dt],mt[Ct]),R=Y,v=lt,y=dt,m=Ct),(Vt.equals(S)===!1||it!==P)&&(i.blendColor(Vt.r,Vt.g,Vt.b,it),S.copy(Vt),P=it),g=C,w=!1}function zt(C,Z){C.side===Ge?ot(i.CULL_FACE):gt(i.CULL_FACE);let Y=C.side===Ue;Z&&(Y=!Y),ee(Y),C.blending===Zi&&C.transparent===!1?Pt(mi):Pt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let lt=C.stencilWrite;o.setTest(lt),lt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),kt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(C){N!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),N=C)}function Jt(C){C!==sc?(gt(i.CULL_FACE),C!==F&&(C===Po?i.cullFace(i.BACK):C===rc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),F=C}function xe(C){C!==H&&(B&&i.lineWidth(C),H=C)}function kt(C,Z,Y){C?(gt(i.POLYGON_OFFSET_FILL),(_!==Z||O!==Y)&&(_=Z,O=Y,a.getReversed()&&(Z=-Z,Y=-Y),i.polygonOffset(Z,Y))):ot(i.POLYGON_OFFSET_FILL)}function ve(C){C?gt(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function ie(C){C===void 0&&(C=i.TEXTURE0+q-1),W!==C&&(i.activeTexture(C),W=C)}function ce(C,Z,Y){Y===void 0&&(W===null?Y=i.TEXTURE0+q-1:Y=W);let lt=$[Y];lt===void 0&&(lt={type:void 0,texture:void 0},$[Y]=lt),(lt.type!==C||lt.texture!==Z)&&(W!==Y&&(i.activeTexture(Y),W=Y),i.bindTexture(C,Z||Dt[C]),lt.type=C,lt.texture=Z)}function L(){let C=$[W];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Me(){try{i.compressedTexImage2D(...arguments)}catch(C){Bt("WebGLState:",C)}}function re(){try{i.compressedTexImage3D(...arguments)}catch(C){Bt("WebGLState:",C)}}function xt(){try{i.texSubImage2D(...arguments)}catch(C){Bt("WebGLState:",C)}}function nt(){try{i.texSubImage3D(...arguments)}catch(C){Bt("WebGLState:",C)}}function qt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Bt("WebGLState:",C)}}function pt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Bt("WebGLState:",C)}}function Rt(){try{i.texStorage2D(...arguments)}catch(C){Bt("WebGLState:",C)}}function I(){try{i.texStorage3D(...arguments)}catch(C){Bt("WebGLState:",C)}}function E(){try{i.texImage2D(...arguments)}catch(C){Bt("WebGLState:",C)}}function z(){try{i.texImage3D(...arguments)}catch(C){Bt("WebGLState:",C)}}function et(C){return f[C]!==void 0?f[C]:i.getParameter(C)}function J(C,Z){f[C]!==Z&&(i.pixelStorei(C,Z),f[C]=Z)}function st(C){j.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),j.copy(C))}function ut(C){ct.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ct.copy(C))}function X(C,Z){let Y=l.get(Z);Y===void 0&&(Y=new WeakMap,l.set(Z,Y));let lt=Y.get(C);lt===void 0&&(lt=i.getUniformBlockIndex(Z,C.name),i.uniformBlockBinding(Z,lt,lt),Y.set(C,lt))}function K(C,Z,Y){let rt=l.get(Z).get(C);c[rt]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,Y),c[rt]=Y)}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},W=null,$={},u={},c={},d=new WeakMap,M=[],A=null,p=!1,g=null,T=null,R=null,v=null,b=null,y=null,m=null,S=new Ht(0,0,0),P=0,w=!1,N=null,F=null,H=null,_=null,O=null,j.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:ot,bindFramebuffer:Wt,drawBuffers:at,useProgram:Tt,setBlending:Pt,setMaterial:zt,setFlipSided:ee,setCullFace:Jt,setLineWidth:xe,setPolygonOffset:kt,setScissorTest:ve,activeTexture:ie,bindTexture:ce,unbindTexture:L,compressedTexImage2D:Me,compressedTexImage3D:re,texImage2D:E,texImage3D:z,pixelStorei:J,getParameter:et,updateUBOMapping:X,uniformBlockBinding:K,texStorage2D:Rt,texStorage3D:I,texSubImage2D:xt,texSubImage3D:nt,compressedTexSubImage2D:qt,compressedTexSubImage3D:pt,scissor:st,viewport:ut,reset:ft}}function Xg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Gt,h=new WeakMap,f=new Set,u,d=new WeakMap,M=new Set,A=new FinalizationRegistry(I=>M.delete(I)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return p?new OffscreenCanvas(I,E):ki("canvas")}function T(I,E,z){let et=1,J=Rt(I);if((J.width>z||J.height>z)&&(et=z/Math.max(J.width,J.height)),et<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let st=Math.floor(et*J.width),ut=Math.floor(et*J.height);u===void 0&&(u=g(st,ut));let X=E?g(st,ut):u;return X.width=st,X.height=ut,X.getContext("2d").drawImage(I,0,0,st,ut),Ot("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+st+"x"+ut+")."),X}else return"data"in I&&Ot("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),I;return I}function R(I){return I.generateMipmaps}function v(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,E,z,et,J,st=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ut;et&&(ut=t.get("EXT_texture_norm16"),ut||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=E;if(E===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8),z===i.UNSIGNED_SHORT&&ut&&(X=ut.R16_EXT),z===i.SHORT&&ut&&(X=ut.R16_SNORM_EXT)),E===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),E===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8),z===i.UNSIGNED_SHORT&&ut&&(X=ut.RG16_EXT),z===i.SHORT&&ut&&(X=ut.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),E===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),E===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),E===i.RGB&&(z===i.UNSIGNED_SHORT&&ut&&(X=ut.RGB16_EXT),z===i.SHORT&&ut&&(X=ut.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),E===i.RGBA){let K=st?ms:te.getTransfer(J);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=K===oe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ut&&(X=ut.RGBA16_EXT),z===i.SHORT&&ut&&(X=ut.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function m(I,E){let z;return I?E===null||E===pn||E===xi?z=i.DEPTH24_STENCIL8:E===an?z=i.DEPTH32F_STENCIL8:E===ts&&(z=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pn||E===xi?z=i.DEPTH_COMPONENT24:E===an?z=i.DEPTH_COMPONENT32F:E===ts&&(z=i.DEPTH_COMPONENT16),z}function S(I,E){return R(I)===!0||I.isFramebufferTexture&&I.minFilter!==we&&I.minFilter!==Le?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function P(I){let E=new WeakRef(I);n.get(I).__ref=E,M.add(E),A.register(I,E,E)}function w(I){let E=n.get(I).__ref;E!==void 0&&(M.delete(E),A.unregister(E))}function N(I){H(I.target)}function F(I){_(I.target)}function H(I){I.removeEventListener("dispose",N),w(I),q(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&f.delete(I)}function _(I){I.removeEventListener("dispose",F),w(I),tt(I)}function O(){for(let I of M){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?_(E):H(E))}M.clear(),f.clear()}function q(I){let E=n.get(I);if(E.__webglInit===void 0)return;let z=I.source,et=d.get(z);if(et){let J=et[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&B(I),Object.keys(et).length===0&&d.delete(z)}n.remove(I)}function B(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let z=I.source,et=d.get(z);delete et[E.__cacheKey],a.memory.textures--}function tt(I){let E=n.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let z=I.depthTexture;if(z&&z.renderTarget===I&&H(z),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let st=0;st<E.__webglFramebuffer[J].length;st++)i.deleteFramebuffer(E.__webglFramebuffer[J][st]);else i.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)i.deleteFramebuffer(E.__webglFramebuffer[J]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let et=I.textures;for(let J=0,st=et.length;J<st;J++){let ut=n.get(et[J]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(et[J])}n.remove(I)}let Q=0;function W(){Q=0}function $(){return Q}function ht(I){Q=I}function Ut(){let I=Q;return I>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),Q+=1,I}function j(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ct(I,E){let z=n.get(I);if(I.isVideoTexture&&qt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){let et=I.image;if(et===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(z,I,E);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+E)}function yt(I,E){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){zt(z,I,E);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+E)}function Dt(I,E){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){zt(z,I,E);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+E)}function gt(I,E){let z=n.get(I);if(I.version>0&&z.__version!==I.version){ee(z,I,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+E)}let ot={[Vi]:i.REPEAT,[en]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},Wt={[we]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[fn]:i.LINEAR_MIPMAP_LINEAR},at={[_c]:i.NEVER,[nl]:i.ALWAYS,[Nc]:i.LESS,[tl]:i.LEQUAL,[Dc]:i.EQUAL,[el]:i.GEQUAL,[Lc]:i.GREATER,[Uc]:i.NOTEQUAL};function Tt(I,E){if(E.type===an&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Le||E.magFilter===la||E.magFilter===Vs||E.magFilter===fn||E.minFilter===Le||E.minFilter===la||E.minFilter===Vs||E.minFilter===fn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ot[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ot[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ot[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Wt[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Wt[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===we||E.minFilter!==Vs&&E.minFilter!==fn||E.type===an&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function At(I,E){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",N),P(E));let et=E.source,J=d.get(et);J===void 0&&(J={},d.set(et,J));let st=j(E);if(st!==I.__cacheKey){J[st]===void 0&&(J[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[st].usedTimes++;let ut=J[I.__cacheKey];ut!==void 0&&(J[I.__cacheKey].usedTimes--,ut.usedTimes===0&&B(E)),I.__cacheKey=st,I.__webglTexture=J[st].texture}return z}function mt(I,E,z){return Math.floor(Math.floor(I/z)/E)}function Pt(I,E,z,et){let st=I.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,z,et,E.data);else{st.sort((C,Z)=>C.start-Z.start);let ut=0;for(let C=1;C<st.length;C++){let Z=st[ut],Y=st[C],lt=Z.start+Z.count,rt=mt(Y.start,E.width,4),dt=mt(Z.start,E.width,4);Y.start<=lt+1&&rt===dt&&mt(Y.start+Y.count-1,E.width,4)===rt?Z.count=Math.max(Z.count,Y.start+Y.count-Z.start):(++ut,st[ut]=Y)}st.length=ut+1;let X=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let C=0,Z=st.length;C<Z;C++){let Y=st[C],lt=Math.floor(Y.start/4),rt=Math.ceil(Y.count/4),dt=lt%E.width,Ct=Math.floor(lt/E.width),Vt=rt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct),e.texSubImage2D(i.TEXTURE_2D,0,dt,Ct,Vt,it,z,et,E.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,X),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function zt(I,E,z){let et=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=i.TEXTURE_3D);let J=At(I,E),st=E.source;e.bindTexture(et,I.__webglTexture,i.TEXTURE0+z);let ut=n.get(st);if(st.version!==ut.__version||J===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let it=te.getPrimaries(te.workingColorSpace),wt=E.colorSpace===Mn?null:te.getPrimaries(E.colorSpace),jt=E.colorSpace===Mn||it===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let K=T(E.image,!1,s.maxTextureSize);K=pt(E,K);let ft=r.convert(E.format,E.colorSpace),C=r.convert(E.type),Z=y(E.internalFormat,ft,C,E.normalized,E.colorSpace,E.isVideoTexture);Tt(et,E);let Y,lt=E.mipmaps,rt=E.isVideoTexture!==!0,dt=ut.__version===void 0||J===!0,Ct=st.dataReady,Vt=S(E,K);if(E.isDepthTexture)Z=m(E.format===zn,E.type),dt&&(rt?e.texStorage2D(i.TEXTURE_2D,1,Z,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,ft,C,null));else if(E.isDataTexture)if(lt.length>0){rt&&dt&&e.texStorage2D(i.TEXTURE_2D,Vt,Z,lt[0].width,lt[0].height);for(let it=0,wt=lt.length;it<wt;it++)Y=lt[it],rt?Ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Y.width,Y.height,ft,C,Y.data):e.texImage2D(i.TEXTURE_2D,it,Z,Y.width,Y.height,0,ft,C,Y.data);E.generateMipmaps=!1}else rt?(dt&&e.texStorage2D(i.TEXTURE_2D,Vt,Z,K.width,K.height),Ct&&Pt(E,K,ft,C)):e.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,ft,C,K.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,Z,lt[0].width,lt[0].height,K.depth);for(let it=0,wt=lt.length;it<wt;it++)if(Y=lt[it],E.format!==mn)if(ft!==null)if(rt){if(Ct)if(E.layerUpdates.size>0){let jt=ul(Y.width,Y.height,E.format,E.type);for(let It of E.layerUpdates){let se=Y.data.subarray(It*jt/Y.data.BYTES_PER_ELEMENT,(It+1)*jt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,It,Y.width,Y.height,1,ft,se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Y.width,Y.height,K.depth,ft,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Z,Y.width,Y.height,K.depth,0,Y.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Y.width,Y.height,K.depth,ft,C,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Z,Y.width,Y.height,K.depth,0,ft,C,Y.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{rt&&dt&&e.texStorage2D(i.TEXTURE_2D,Vt,Z,lt[0].width,lt[0].height);for(let it=0,wt=lt.length;it<wt;it++)Y=lt[it],E.format!==mn?ft!==null?rt?Ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Y.width,Y.height,ft,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Z,Y.width,Y.height,0,Y.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Y.width,Y.height,ft,C,Y.data):e.texImage2D(i.TEXTURE_2D,it,Z,Y.width,Y.height,0,ft,C,Y.data)}else if(E.isDataArrayTexture)if(rt){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,Z,K.width,K.height,K.depth),Ct)if(E.layerUpdates.size>0){let it=ul(K.width,K.height,E.format,E.type);for(let wt of E.layerUpdates){let jt=K.data.subarray(wt*it/K.data.BYTES_PER_ELEMENT,(wt+1)*it/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,K.width,K.height,1,ft,C,jt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ft,C,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,K.width,K.height,K.depth,0,ft,C,K.data);else if(E.isData3DTexture)rt?(dt&&e.texStorage3D(i.TEXTURE_3D,Vt,Z,K.width,K.height,K.depth),Ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ft,C,K.data)):e.texImage3D(i.TEXTURE_3D,0,Z,K.width,K.height,K.depth,0,ft,C,K.data);else if(E.isFramebufferTexture){if(dt)if(rt)e.texStorage2D(i.TEXTURE_2D,Vt,Z,K.width,K.height);else{let it=K.width,wt=K.height;for(let jt=0;jt<Vt;jt++)e.texImage2D(i.TEXTURE_2D,jt,Z,it,wt,0,ft,C,null),it>>=1,wt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),K.parentNode!==it){it.appendChild(K),f.add(E),it.onpaint=wt=>{let jt=wt.changedElements;for(let It of f)jt.includes(It.image)&&(It.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let jt=i.RGBA,It=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,jt,It,se,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(lt.length>0){if(rt&&dt){let it=Rt(lt[0]);e.texStorage2D(i.TEXTURE_2D,Vt,Z,it.width,it.height)}for(let it=0,wt=lt.length;it<wt;it++)Y=lt[it],rt?Ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ft,C,Y):e.texImage2D(i.TEXTURE_2D,it,Z,ft,C,Y);E.generateMipmaps=!1}else if(rt){if(dt){let it=Rt(K);e.texStorage2D(i.TEXTURE_2D,Vt,Z,it.width,it.height)}Ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,C,K)}else e.texImage2D(i.TEXTURE_2D,0,Z,ft,C,K);R(E)&&E.mipmapsAutoUpdate===!0&&v(et),ut.__version=st.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ee(I,E,z){if(E.image.length!==6)return;let et=At(I,E),J=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+z);let st=n.get(J);if(J.version!==st.__version||et===!0){e.activeTexture(i.TEXTURE0+z);let ut=te.getPrimaries(te.workingColorSpace),X=E.colorSpace===Mn?null:te.getPrimaries(E.colorSpace),K=E.colorSpace===Mn||ut===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ft=E.isCompressedTexture||E.image[0].isCompressedTexture,C=E.image[0]&&E.image[0].isDataTexture,Z=[];for(let It=0;It<6;It++)!ft&&!C?Z[It]=T(E.image[It],!0,s.maxCubemapSize):Z[It]=C?E.image[It].image:E.image[It],Z[It]=pt(E,Z[It]);let Y=Z[0],lt=r.convert(E.format,E.colorSpace),rt=r.convert(E.type),dt=y(E.internalFormat,lt,rt,E.normalized,E.colorSpace),Ct=E.isVideoTexture!==!0,Vt=st.__version===void 0||et===!0,it=J.dataReady,wt=S(E,Y);Tt(i.TEXTURE_CUBE_MAP,E);let jt;if(E.isDepthTexture){if(dt=m(E.format===zn,E.type),Vt)if(Ct)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,dt,Y.width,Y.height);else for(let It=0;It<6;It++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,dt,Y.width,Y.height,0,lt,rt,null)}else if(ft){Ct&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,dt,Y.width,Y.height);for(let It=0;It<6;It++){jt=Z[It].mipmaps;for(let se=0;se<jt.length;se++){let ue=jt[se];E.format!==mn?lt!==null?Ct?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,se,0,0,ue.width,ue.height,lt,ue.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,se,dt,ue.width,ue.height,0,ue.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,se,0,0,ue.width,ue.height,lt,rt,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,se,dt,ue.width,ue.height,0,lt,rt,ue.data)}}}else{if(jt=E.mipmaps,Ct&&Vt){jt.length>0&&wt++;let It=Rt(Z[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,dt,It.width,It.height)}for(let It=0;It<6;It++)if(C){Ct?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,Z[It].width,Z[It].height,lt,rt,Z[It].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,dt,Z[It].width,Z[It].height,0,lt,rt,Z[It].data);for(let se=0;se<jt.length;se++){let Ye=jt[se].image[It].image;Ct?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,se+1,0,0,Ye.width,Ye.height,lt,rt,Ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,se+1,dt,Ye.width,Ye.height,0,lt,rt,Ye.data)}}else{Ct?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,lt,rt,Z[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,dt,lt,rt,Z[It]);for(let se=0;se<jt.length;se++){let ue=jt[se];Ct?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,se+1,0,0,lt,rt,ue.image[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,se+1,dt,lt,rt,ue.image[It])}}}R(E)&&E.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),st.__version=J.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Jt(I,E,z,et,J,st){let ut=r.convert(z.format,z.colorSpace),X=r.convert(z.type),K=y(z.internalFormat,ut,X,z.normalized,z.colorSpace),ft=n.get(E),C=n.get(z);if(C.__renderTarget=E,!ft.__hasExternalTextures){let Z=Math.max(1,E.width>>st),Y=Math.max(1,E.height>>st);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,st,K,Z,Y,E.depth,0,ut,X,null):e.texImage2D(J,st,K,Z,Y,0,ut,X,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),nt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,J,C.__webglTexture,0,xt(E)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,J,C.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(I,E,z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let et=E.depthTexture,J=et&&et.isDepthTexture?et.type:null,st=m(E.stencilBuffer,J),ut=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;nt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(E),st,E.width,E.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(E),st,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,st,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,I)}else{let et=E.textures;for(let J=0;J<et.length;J++){let st=et[J],ut=r.convert(st.format,st.colorSpace),X=r.convert(st.type),K=y(st.internalFormat,ut,X,st.normalized,st.colorSpace);nt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(E),K,E.width,E.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(E),K,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,K,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(I,E,z){let et=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(E.depthTexture);J.__renderTarget=E;let st=et?E.depthTexture.image[0]:E.depthTexture.image;(!J.__webglTexture||st.width!==E.width||st.height!==E.height)&&(st.width=E.width,st.height=E.height,E.depthTexture.needsUpdate=!0),et?gt(E.depthTexture,0):ct(E.depthTexture,0);let ut=J.__webglTexture,X=xt(E),K=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ft=E.depthTexture.format===zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ln)nt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,K,ut,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,ft,K,ut,0);else if(E.depthTexture.format===zn)nt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,K,ut,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,ft,K,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(I){let E=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let et=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){let J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",J)};et.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=et}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let et=0;et<6;et++)kt(E.__webglFramebuffer[et],I,et);else I.texture.mipmaps.length>0?kt(E.__webglFramebuffer[0],I,0):kt(E.__webglFramebuffer,I,0);else if(z){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=i.createRenderbuffer(),xe(E.__webglDepthbuffer[et],I,!1);else{let J=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,st)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),xe(E.__webglDepthbuffer,I,!1);else{let J=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(I,E,z){let et=n.get(I);E!==void 0&&Jt(et.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ve(I)}function ce(I){let E=I.texture,z=n.get(I),et=n.get(E);I.addEventListener("dispose",F),P(I);let J=I.textures,st=I.isWebGLCubeRenderTarget===!0,ut=J.length>1;if(ut||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=E.version,a.memory.textures++),st){z.__webglFramebuffer=[];for(let X=0;X<6;X++)if(E.mipmaps.length>0){z.__webglFramebuffer[X]=[];for(let K=0;K<E.mipmaps.length;K++)z.__webglFramebuffer[X][K]=i.createFramebuffer()}else z.__webglFramebuffer[X]=i.createFramebuffer()}else{if(E.mipmaps.length>0){z.__webglFramebuffer=[];for(let X=0;X<E.mipmaps.length;X++)z.__webglFramebuffer[X]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ut)for(let X=0,K=J.length;X<K;X++){let ft=n.get(J[X]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&nt(I)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let X=0;X<J.length;X++){let K=J[X];z.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[X]);let ft=r.convert(K.format,K.colorSpace),C=r.convert(K.type),Z=y(K.internalFormat,ft,C,K.normalized,K.colorSpace,I.isXRRenderTarget===!0),Y=xt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,Z,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,z.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,E);for(let X=0;X<6;X++)if(E.mipmaps.length>0)for(let K=0;K<E.mipmaps.length;K++)Jt(z.__webglFramebuffer[X][K],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else Jt(z.__webglFramebuffer[X],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);R(E)?v(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let X=0,K=J.length;X<K;X++){let ft=J[X],C=n.get(ft),Z=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Z=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,C.__webglTexture),Tt(Z,ft),Jt(z.__webglFramebuffer,I,ft,i.COLOR_ATTACHMENT0+X,Z,0),R(ft)&&v(Z)}e.unbindTexture()}else{let X=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(X=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,et.__webglTexture),Tt(X,E),E.mipmaps.length>0)for(let K=0;K<E.mipmaps.length;K++)Jt(z.__webglFramebuffer[K],I,E,i.COLOR_ATTACHMENT0,X,K);else Jt(z.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,X,0);R(E)?v(X):E.mipmaps.length>0&&i.texParameteri(X,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&ve(I)}function L(I){let E=I.textures;for(let z=0,et=E.length;z<et;z++){let J=E[z];if(R(J)&&J.mipmapsAutoUpdate===!0){let st=b(I),ut=n.get(J).__webglTexture;e.bindTexture(st,ut),v(st),e.unbindTexture()}}}let Me=[];function re(I){if(I.samples>0){if(nt(I)===!1){let E=I.textures,z=I.width,et=I.height,J=i.COLOR_BUFFER_BIT,st=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(I),X=E.length>1;if(X)for(let ft=0;ft<E.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let C=n.get(E[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,z,et,0,0,z,et,J,i.NEAREST),c===!0&&(Me.length=0,Me.push(i.COLOR_ATTACHMENT0+ft),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Me.push(st),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ft=0;ft<E.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let C=n.get(E[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function xt(I){return Math.min(s.maxSamples,I.samples)}function nt(I){let E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qt(I){let E=a.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function pt(I,E){let z=I.colorSpace,et=I.format,J=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==gs&&z!==Mn&&(te.getTransfer(z)===oe?(et!==mn||J!==We)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",z)),E}function Rt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=Ut,this.resetTextureUnits=W,this.getTextureUnits=$,this.setTextureUnits=ht,this.setTexture2D=ct,this.setTexture2DArray=yt,this.setTexture3D=Dt,this.setTextureCube=gt,this.rebindTextures=ie,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Jt,this.useMultisampledRTT=nt,this.dispose=O}function Jg(i,t){function e(n,s=Mn){let r,a=te.getTransfer(s);if(n===We)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ko)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yo)return i.BYTE;if(n===Xo)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===ca)return i.INT;if(n===pn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===Zo)return i.ALPHA;if(n===$o)return i.RGB;if(n===mn)return i.RGBA;if(n===Ln)return i.DEPTH_COMPONENT;if(n===zn)return i.DEPTH_STENCIL;if(n===da)return i.RED;if(n===fa)return i.RED_INTEGER;if(n===ei)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===Hs||n===ks||n===js||n===Qs)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===Ma||n===Ea||n===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===ya||n===Ia||n===Ta||n===va||n===qs||n===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===ya)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ta)return r.COMPRESSED_R11_EAC;if(n===va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return r.COMPRESSED_RG11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ra||n===ba||n===Ca||n===wa||n===_a||n===Na||n===Da||n===La||n===Ua||n===Oa||n===Pa||n===za||n===Ba||n===Fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Ha||n===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ja||n===Qa||n===Gs||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zg=`
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

}`,xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Cs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:Kg,fragmentShader:Zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends xn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,M=null,A=typeof XRWebGLBinding<"u",p=new xl,g={},T=e.getContextAttributes(),R=null,v=null,b=[],y=[],m=new Gt,S=null,P=null,w=new Qe;w.viewport=new me;let N=new Qe;N.viewport=new me;let F=[w,N],H=new ia,_=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ct=b[j];return ct===void 0&&(ct=new qi,b[j]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(j){let ct=b[j];return ct===void 0&&(ct=new qi,b[j]=ct),ct.getGripSpace()},this.getHand=function(j){let ct=b[j];return ct===void 0&&(ct=new qi,b[j]=ct),ct.getHandSpace()};function q(j){let ct=y.indexOf(j.inputSource);if(ct===-1)return;let yt=b[ct];yt!==void 0&&(yt.update(j.inputSource,j.frame,l||a),yt.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",tt);for(let j=0;j<b.length;j++){let ct=y[j];ct!==null&&(y[j]=null,b[j].disconnect(ct))}_=null,O=null,p.reset();for(let j in g)delete g[j];if(t.setRenderTarget(R),d=null,u=null,f=null,s=null,v=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(m.width,m.height,!1),P!==null){let j=P.camera;j.fov=P.fov,j.zoom=P.zoom,j.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&A&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",B),s.addEventListener("inputsourceschange",tt),T.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(m),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Dt=null,gt=null;T.depth&&(gt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=T.stencil?zn:Ln,Dt=T.stencil?xi:pn);let ot={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new _e(u.textureWidth,u.textureHeight,{format:mn,type:We,depthTexture:new Pn(u.textureWidth,u.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new _e(d.framebufferWidth,d.framebufferHeight,{format:mn,type:We,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(j){for(let ct=0;ct<j.removed.length;ct++){let yt=j.removed[ct],Dt=y.indexOf(yt);Dt>=0&&(y[Dt]=null,b[Dt].disconnect(yt))}for(let ct=0;ct<j.added.length;ct++){let yt=j.added[ct],Dt=y.indexOf(yt);if(Dt===-1){for(let ot=0;ot<b.length;ot++)if(ot>=y.length){y.push(yt),Dt=ot;break}else if(y[ot]===null){y[ot]=yt,Dt=ot;break}if(Dt===-1)break}let gt=b[Dt];gt&&gt.connect(yt)}}function Q(j,ct){ct===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ct.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ct=j.near,yt=j.far;p.texture!==null&&(p.depthNear>0&&(ct=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),H.near=N.near=w.near=ct,H.far=N.far=w.far=yt,(_!==H.near||O!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),_=H.near,O=H.far),H.layers.mask=j.layers.mask|6,w.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Dt=j.parent,gt=H.cameras;Q(H,Dt);for(let ot=0;ot<gt.length;ot++)Q(gt[ot],Dt);H.projectionMatrix.copy(w.projectionMatrix),H.projectionMatrixInverse.copy(w.projectionMatrixInverse),P===null&&j.isPerspectiveCamera&&(P={camera:j,fov:j.fov,zoom:j.zoom}),W(j,H,Dt)};function W(j,ct,yt){yt===null?j.matrix.copy(ct.matrixWorld):(j.matrix.copy(yt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ct.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(j){return g[j]};let $=null;function ht(j,ct){if(h=ct.getViewerPose(l||a),M=ct,h!==null){let yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Dt=!1;yt.length!==H.cameras.length&&(H.cameras.length=0,Dt=!0);for(let at=0;at<yt.length;at++){let Tt=yt[at],At=null;if(d!==null)At=d.getViewport(Tt);else{let Pt=f.getViewSubImage(u,Tt);At=Pt.viewport,at===0&&(t.setRenderTargetTextures(v,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(v))}let mt=F[at];mt===void 0&&(mt=new Qe,mt.layers.enable(at),mt.viewport=new me,F[at]=mt),mt.matrix.fromArray(Tt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Tt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(At.x,At.y,At.width,At.height),at===0&&(H.matrix.copy(mt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Dt===!0&&H.cameras.push(mt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){f=n.getBinding();let at=f.getDepthInformation(yt[0]);at&&at.isValid&&at.texture&&p.init(at,s.renderState)}if(gt&&gt.includes("camera-access")&&A){t.state.unbindTexture(),f=n.getBinding();for(let at=0;at<yt.length;at++){let Tt=yt[at].camera;if(Tt){let At=g[Tt];At||(At=new Cs,g[Tt]=At);let mt=f.getCameraImage(Tt);At.sourceTexture=mt}}}}for(let yt=0;yt<b.length;yt++){let Dt=y[yt],gt=b[yt];Dt!==null&&gt!==void 0&&gt.update(Dt,ct,l||a)}$&&$(j,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),M=null}let Ut=new du;Ut.setAnimationLoop(ht),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}},$g=new le,Iu=new Ft;Iu.set(-1,0,0,0,1,0,0,0,1);function tm(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,ol(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,T,R,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),M(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),A(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,T,R):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ue&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ue&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let T=t.get(g),R=T.envMap,v=T.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Iu),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,T,R){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*T,p.scale.value=R*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,T){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ue&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,g){g.matcap&&(p.matcap.value=g.matcap)}function A(p,g){let T=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function em(i,t,e,n){let s={},r={};function a(T,R){let v=R.program;n.uniformBlockBinding(T,v,s[T.id])}function o(T,R){let v=s[T.id];v===void 0&&(M(T),v=c(T),s[T.id]=v,T.addEventListener("dispose",p));let b=R.program;n.updateUBOMapping(T,b);let y=t.render.frame;r[T.id]!==y&&(l(T),r[T.id]=y)}function c(T){let R=i.createBuffer(),v=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,v,b),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function l(T){let R=s[T.id],v=T.uniforms,b=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let y=0,m=v.length;y<m;y++){let S=v[y];if(Array.isArray(S))for(let P=0,w=S.length;P<w;P++)h(S[P],y,P,b);else h(S,y,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(T,R,v,b){if(u(T,R,v,b)===!0){let y=T.__offset,m=T.value;if(Array.isArray(m)){let S=0;for(let P=0;P<m.length;P++){let w=m[P],N=A(w,!0);f(w,T.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(m,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,T.__data)}}function f(T,R,v){typeof T=="number"||typeof T=="boolean"?R[v]=T:T.isMatrix3?(R[v]=T.elements[0],R[v+1]=T.elements[1],R[v+2]=T.elements[2],R[v+3]=0,R[v+4]=T.elements[3],R[v+5]=T.elements[4],R[v+6]=T.elements[5],R[v+7]=0,R[v+8]=T.elements[6],R[v+9]=T.elements[7],R[v+10]=T.elements[8],R[v+11]=0):ArrayBuffer.isView(T)?R.set(T.subarray(0,R.length-v),v):T.toArray(R,v)}function u(T,R,v,b){let y=T.value,m=R+"_"+v;if(Array.isArray(y)){b[m]===void 0&&(b[m]=[]);let S=b[m],P=!1;for(let w=0;w<y.length;w++)d(y[w],S,w)===!0&&(P=!0);return P}return d(y,b,m)}function d(T,R,v){if(R[v]===void 0)return typeof T=="number"||typeof T=="boolean"?R[v]=T:ArrayBuffer.isView(T)?R[v]=T.slice():R[v]=T.clone(),!0;{let b=R[v];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return R[v]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(b.equals(T)===!1)return b.copy(T),!0}}return!1}function M(T){let R=T.uniforms,v=0,b=16;for(let m=0,S=R.length;m<S;m++){let P=Array.isArray(R[m])?R[m]:[R[m]];for(let w=0,N=P.length;w<N;w++){let F=P[w],H=Array.isArray(F.value)?F.value:[F.value],_=Array.isArray(R[m])||Array.isArray(F.value),O=v;for(let B=0,tt=H.length;B<tt;B++){let Q=H[B],W=A(Q,_),$=v%b,ht=$%W.boundary,Ut=$+ht;v+=ht,Ut!==0&&b-Ut<W.storage&&(v+=b-Ut),B===0&&(O=v),v+=W.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((v-O)/Float32Array.BYTES_PER_ELEMENT),F.__offset=O}}let y=v%b;return y>0&&(v+=b-y),T.__size=v,T.__cache={},this}function A(T,R){let v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=16,v.storage=48):T.isMatrix4?(v.boundary=16,v.storage=64):T.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(v.boundary=16,v.storage=T.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",T),R===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(T){let R=T.target;R.removeEventListener("dispose",p),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function g(){for(let T in s)i.deleteBuffer(s[T]);s={},r={}}return{bind:a,update:o,dispose:g}}var nm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vn=null;function im(){return vn===null&&(vn=new Is(nm,16,16,ei,gn),vn.name="DFG_LUT",vn.minFilter=Le,vn.magFilter=Le,vn.wrapS=en,vn.wrapT=en,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}var Zs=class{constructor(t={}){let{canvas:e=Pc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=We}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=a;let A=d,p=new Set([ga,pa,fa]),g=new Set([We,pn,ts,xi,ua,ha]),T=new Uint32Array(4),R=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},b=null,y=null,m=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,N=!1,F=null,H=null,_=null,O=null;this._outputColorSpace=Te;let q=0,B=0,tt=null,Q=-1,W=null,$=new me,ht=new me,Ut=null,j=new Ht(0),ct=0,yt=e.width,Dt=e.height,gt=1,ot=null,Wt=null,at=new me(0,0,yt,Dt),Tt=new me(0,0,yt,Dt),At=!1,mt=new Yn,Pt=new Vr,zt=!1,ee=!1,Jt=new le,xe=new U,kt=new me,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function ce(){return tt===null?gt:1}let L=n;function Me(x,D){return e.getContext(x,D)}let re,xt,nt,qt,pt,Rt,I,E,z,et,J,st,ut,X,K,ft,C,Z,Y,lt,rt,dt,Ct;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",It,!1),L===null){let D="webgl2";if(L=Me(D,x),L===null)throw Me(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(x){throw e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Bt("WebGLRenderer: "+x.message),x}function Vt(){re=new pp(L),re.init(),rt=new Jg(L,re),xt=new ip(L,re,t,rt),nt=new Yg(L,re),xt.reversedDepthBuffer&&u&&nt.buffers.depth.setReversed(!0),H=L.createFramebuffer(),_=L.createFramebuffer(),O=L.createFramebuffer(),qt=new Mp(L),pt=new Ug,Rt=new Xg(L,re,nt,pt,xt,rt,qt),I=new fp(w),E=new Eh(L),dt=new ep(L,E),z=new gp(L,E,qt,dt),et=new xp(L,z,E,dt,qt),Z=new Ep(L,xt,Rt),K=new sp(pt),J=new Lg(w,I,re,xt,dt,K),st=new tm(w,pt),ut=new Pg,X=new kg(re),C=new tp(w,I,nt,et,M,c),ft=new Wg(w,et,xt),Ct=new em(L,qt,xt,nt),Y=new np(L,re,qt),lt=new mp(L,re,qt),qt.programs=J.programs,w.capabilities=xt,w.extensions=re,w.properties=pt,w.renderLists=ut,w.shadowMap=ft,w.state=nt,w.info=qt}A!==We&&(P=new yp(A,e.width,e.height,o,s,r));let it=new Al(w,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let x=re.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=re.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(x){x!==void 0&&(gt=x,this.setSize(yt,Dt,!1))},this.getSize=function(x){return x.set(yt,Dt)},this.setSize=function(x,D,G=!0){if(it.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=x,Dt=D,e.width=Math.floor(x*gt),e.height=Math.floor(D*gt),G===!0&&(e.style.width=x+"px",e.style.height=D+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(yt*gt,Dt*gt).floor()},this.setDrawingBufferSize=function(x,D,G){yt=x,Dt=D,gt=G,e.width=Math.floor(x*G),e.height=Math.floor(D*G),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(A===We){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy($)},this.getViewport=function(x){return x.copy(at)},this.setViewport=function(x,D,G,V){x.isVector4?at.set(x.x,x.y,x.z,x.w):at.set(x,D,G,V),nt.viewport($.copy(at).multiplyScalar(ce()).round())},this.getScissor=function(x){return x.copy(Tt)},this.setScissor=function(x,D,G,V){x.isVector4?Tt.set(x.x,x.y,x.z,x.w):Tt.set(x,D,G,V),nt.scissor(ht.copy(Tt).multiplyScalar(ce()).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(x){nt.setScissorTest(At=x)},this.setOpaqueSort=function(x){ot=x},this.setTransparentSort=function(x){Wt=x},this.getClearColor=function(x){return x.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,G=!0){let V=0;if(x){let k=!1;if(tt!==null){let Et=tt.texture.format;k=p.has(Et)}if(k){let Et=tt.texture.type,bt=g.has(Et),Mt=C.getClearColor(),St=C.getClearAlpha(),Lt=Mt.r,Qt=Mt.g,Zt=Mt.b;bt?(T[0]=Lt,T[1]=Qt,T[2]=Zt,T[3]=St,L.clearBufferuiv(L.COLOR,0,T)):(R[0]=Lt,R[1]=Qt,R[2]=Zt,R[3]=St,L.clearBufferiv(L.COLOR,0,R))}else V|=L.COLOR_BUFFER_BIT}D&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),F=x},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",It,!1),C.dispose(),ut.dispose(),X.dispose(),Rt.dispose(),pt.dispose(),I.dispose(),et.dispose(),z.dispose(),dt.dispose(),Ct.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",ii),it.removeEventListener("sessionend",Xt),he.stop()};function wt(x){x.preventDefault(),sl("WebGLRenderer: Context Lost."),N=!0}function jt(){sl("WebGLRenderer: Context Restored."),N=!1;let x=qt.autoReset,D=ft.enabled,G=ft.autoUpdate,V=ft.needsUpdate,k=ft.type;Vt(),qt.autoReset=x,ft.enabled=D,ft.autoUpdate=G,ft.needsUpdate=V,ft.type=k}function It(x){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function se(x){let D=x.target;D.removeEventListener("dispose",se),ue(D)}function ue(x){Ye(x),pt.remove(x)}function Ye(x){let D=pt.get(x).programs;D!==void 0&&(D.forEach(function(G){J.releaseProgram(G)}),x.isShaderMaterial&&J.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,G,V,k,Et){D===null&&(D=ve);let bt=k.isMesh&&k.matrixWorld.determinantAffine()<0,Mt=Su(x,D,G,V,k);nt.setMaterial(V,bt);let St=G.index,Lt=1;if(V.wireframe===!0){if(St=z.getWireframeAttribute(G),St===void 0)return;Lt=2}let Qt=G.drawRange,Zt=G.attributes.position,_t=Qt.start*Lt,$t=(Qt.start+Qt.count)*Lt;Et!==null&&(_t=Math.max(_t,Et.start*Lt),$t=Math.min($t,(Et.start+Et.count)*Lt)),St!==null?(_t=Math.max(_t,0),$t=Math.min($t,St.count)):Zt!=null&&(_t=Math.max(_t,0),$t=Math.min($t,Zt.count));let ye=$t-_t;if(ye<0||ye===1/0)return;dt.setup(k,V,Mt,G,St);let pe,fe=Y;if(St!==null&&(pe=E.get(St),fe=lt,fe.setIndex(pe)),k.isMesh)V.wireframe===!0?(nt.setLineWidth(V.wireframeLinewidth*ce()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(k.isLine){let Oe=V.linewidth;Oe===void 0&&(Oe=1),nt.setLineWidth(Oe*ce()),k.isLineSegments?fe.setMode(L.LINES):k.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else k.isPoints?fe.setMode(L.POINTS):k.isSprite&&fe.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(re.get("WEBGL_multi_draw"))fe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Oe=k._multiDrawStarts,Nt=k._multiDrawCounts,He=k._multiDrawCount,ae=St?E.get(St).bytesPerElement:1,ri=pt.get(V).currentProgram.getUniforms();for(let Pe=0;Pe<He;Pe++)ri.setValue(L,"_gl_DrawID",Pe),fe.render(Oe[Pe]/ae,Nt[Pe])}else if(k.isInstancedMesh)fe.renderInstances(_t,ye,k.count);else if(G.isInstancedBufferGeometry){let Oe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Nt=Math.min(G.instanceCount,Oe);fe.renderInstances(_t,ye,Nt)}else fe.render(_t,ye)};function Bn(x,D,G,V){F!==null&&x.isNodeMaterial&&F.setObject(V,x),zt===!0&&K.setState(x,G,!1),x.transparent===!0&&x.side===Ge&&x.forceSinglePass===!1?(x.side=Ue,x.needsUpdate=!0,as(x,D,V),x.side=ti,x.needsUpdate=!0,as(x,D,V),x.side=Ge):as(x,D,V)}this.compile=function(x,D,G=null){G===null&&(G=x),F!==null&&F.renderStart(x,D,G),y=X.get(G),y.init(D),S.push(y),G.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(y.pushLight(k),k.castShadow&&y.pushShadow(k))}),x!==G&&x.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(y.pushLight(k),k.castShadow&&y.pushShadow(k))}),y.setupLights(),F!==null&&F.updateLights(y.state.lightsArray),ee=this.localClippingEnabled,zt=K.init(this.clippingPlanes,ee),zt===!0&&K.setGlobalState(this.clippingPlanes,D),F!==null&&ft.render(y.state.shadowsArray,G,D);let V=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let Et=k.material;if(Et)if(Array.isArray(Et))for(let bt=0;bt<Et.length;bt++){let Mt=Et[bt];Bn(Mt,G,D,k),V.add(Mt)}else Bn(Et,G,D,k),V.add(Et)}),y=S.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(x,D,G=null){let V=this.compile(x,D,G);return new Promise(k=>{function Et(){if(V.forEach(function(bt){let St=pt.get(bt).currentProgram;(St===void 0||St.isReady())&&V.delete(bt)}),V.size===0){k(x);return}setTimeout(Et,10)}re.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let rs=null;function ni(x){rs&&rs(x)}function ii(){he.stop()}function Xt(){he.start()}let he=new du;he.setAnimationLoop(ni),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(x){rs=x,it.setAnimationLoop(x),x===null?he.stop():he.start()},it.addEventListener("sessionstart",ii),it.addEventListener("sessionend",Xt),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(x,D);let G=it.enabled===!0&&it.isPresenting===!0,V=P!==null&&(tt===null||G)&&P.begin(w,tt);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(D),D=it.getCamera()),x.isScene===!0&&x.onBeforeRender(w,x,D,tt),y=X.get(x,S.length),y.init(D),y.state.textureUnits=Rt.getTextureUnits(),S.push(y),Jt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Pt.setFromArrayCamera(D):mt.setFromProjectionMatrix(Jt,nn,D.reversedDepth),ee=this.localClippingEnabled,zt=K.init(this.clippingPlanes,ee),b=ut.get(x,m.length),b.init(),m.push(b),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let bt=w.xr.getDepthSensingMesh();bt!==null&&Ae(bt,D,-1/0,w.sortObjects)}Ae(x,D,0,w.sortObjects),b.finish(),F!==null&&F.updateLights(y.state.lightsArray),w.sortObjects===!0&&b.sort(ot,Wt),ie=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ie&&C.addToRenderList(b,x),this.info.autoReset===!0&&this.info.reset(),zt===!0&&K.beginShadows();let k=y.state.shadowsArray;if(ft.render(k,x,D),zt===!0&&K.endShadows(),(V&&P.hasRenderPass())===!1){let bt=b.opaque,Mt=b.transmissive;if(y.setupLights(),D.isArrayCamera){let St=D.cameras;if(Mt.length>0)for(let Lt=0,Qt=St.length;Lt<Qt;Lt++){let Zt=St[Lt];si(bt,Mt,x,Zt)}ie&&C.render(x);for(let Lt=0,Qt=St.length;Lt<Qt;Lt++){let Zt=St[Lt];Xe(b,x,Zt,Zt.viewport)}}else Mt.length>0&&si(bt,Mt,x,D),ie&&C.render(x),Xe(b,x,D)}tt!==null&&B===0&&(Rt.updateMultisampleRenderTarget(tt),Rt.updateRenderTargetMipmap(tt)),V&&P.end(w),x.isScene===!0&&x.onAfterRender(w,x,D),dt.resetDefaultState(),Q=-1,W=null,S.pop(),S.length>0?(y=S[S.length-1],Rt.setTextureUnits(y.state.textureUnits),zt===!0&&K.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,m.pop(),m.length>0?b=m[m.length-1]:b=null,F!==null&&F.renderEnd()};function Ae(x,D,G,V){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){let bt=D.isArrayCamera?Pt:mt;if(!x.frustumCulled||x.intersectsFrustum(bt)){V&&kt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Jt);let Mt=et.update(x),St=x.material;St.visible&&b.push(x,Mt,St,G,kt.z,null,D)}}else if(x.isMesh||x.isLine||x.isPoints){let bt=D.isArrayCamera?Pt:mt;if(!x.frustumCulled||x.intersectsFrustum(bt)){let Mt=et.update(x),St=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),kt.copy(x.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),kt.copy(Mt.boundingSphere.center)),kt.applyMatrix4(x.matrixWorld).applyMatrix4(Jt)),Array.isArray(St)){let Lt=Mt.groups;for(let Qt=0,Zt=Lt.length;Qt<Zt;Qt++){let _t=Lt[Qt],$t=St[_t.materialIndex];$t&&$t.visible&&b.push(x,Mt,$t,G,kt.z,_t,D)}}else St.visible&&b.push(x,Mt,St,G,kt.z,null,D)}}}let Et=x.children;for(let bt=0,Mt=Et.length;bt<Mt;bt++)Ae(Et[bt],D,G,V)}function Xe(x,D,G,V){let{opaque:k,transmissive:Et,transparent:bt}=x;y.setupLightsView(G),zt===!0&&K.setGlobalState(w.clippingPlanes,G),V&&nt.viewport($.copy(V)),k.length>0&&Fn(k,D,G),Et.length>0&&Fn(Et,D,G),bt.length>0&&Fn(bt,D,G),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function si(x,D,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[V.id]===void 0){let _t=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[V.id]=new _e(1,1,{generateMipmaps:!0,type:_t?gn:We,minFilter:fn,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let Et=y.state.transmissionRenderTarget[V.id],bt=V.viewport||$;Et.setSize(bt.z*w.transmissionResolutionScale,bt.w*w.transmissionResolutionScale);let Mt=w.getRenderTarget(),St=w.getActiveCubeFace(),Lt=w.getActiveMipmapLevel();w.setRenderTarget(Et),w.getClearColor(j),ct=w.getClearAlpha(),ct<1&&w.setClearColor(16777215,.5),w.clear(),ie&&C.render(G);let Qt=w.toneMapping;w.toneMapping=Tn;let Zt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),y.setupLightsView(V),zt===!0&&K.setGlobalState(w.clippingPlanes,V),Fn(x,G,V),Rt.updateMultisampleRenderTarget(Et),Rt.updateRenderTargetMipmap(Et),re.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let $t=0,ye=D.length;$t<ye;$t++){let pe=D[$t],{object:fe,geometry:Oe,material:Nt,group:He}=pe;if(Nt.side===Ge&&fe.layers.test(V.layers)){let ae=Nt.side;Nt.side=Ue,Nt.needsUpdate=!0,Ii(fe,G,V,Oe,Nt,He),Nt.side=ae,Nt.needsUpdate=!0,_t=!0}}_t===!0&&(Rt.updateMultisampleRenderTarget(Et),Rt.updateRenderTargetMipmap(Et))}w.setRenderTarget(Mt,St,Lt),w.setClearColor(j,ct),Zt!==void 0&&(V.viewport=Zt),w.toneMapping=Qt}function Fn(x,D,G){let V=D.isScene===!0?D.overrideMaterial:null;for(let k=0,Et=x.length;k<Et;k++){let bt=x[k],{object:Mt,geometry:St,group:Lt}=bt,Qt=bt.material;Qt.allowOverride===!0&&V!==null&&(Qt=V),Mt.layers.test(G.layers)&&Ii(Mt,D,G,St,Qt,Lt)}}function Ii(x,D,G,V,k,Et){F!==null&&k.isNodeMaterial&&F.setObject(x,k),x.onBeforeRender(w,D,G,V,k,Et),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(w,D,G,V,x,Et),k.transparent===!0&&k.side===Ge&&k.forceSinglePass===!1?(k.side=Ue,k.needsUpdate=!0,w.renderBufferDirect(G,D,V,k,x,Et),k.side=ti,k.needsUpdate=!0,w.renderBufferDirect(G,D,V,k,x,Et),k.side=Ge):w.renderBufferDirect(G,D,V,k,x,Et),x.onAfterRender(w,D,G,V,k,Et)}function yl(x){let D=0;for(let G of x)G.texture!==null&&D++;return D}function as(x,D,G){D.isScene!==!0&&(D=ve);let V=pt.get(x),k=y.state.lights,Et=y.state.shadowsArray,bt=k.state.version,Mt=J.getParameters(x,k.state,Et,D,G,y.state.lightProbeGridArray),St=J.getProgramCacheKey(Mt),Lt=V.programs;V.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,V.fog=D.fog;let Qt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;V.envMap=I.get(x.envMap||V.environment,Qt),V.envMapRotation=V.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Lt===void 0&&(x.addEventListener("dispose",se),Lt=new Map,V.programs=Lt,V.programVariants=new Map);let Zt=Lt.get(St);if(Zt!==void 0){if(V.currentProgram===Zt&&V.lightsStateVersion===bt)return Tl(x,Mt),Zt}else Mt.uniforms=J.getUniforms(x),F!==null&&x.isNodeMaterial&&F.build(x,G,Mt),x.onBeforeCompile(Mt,w),Zt=J.acquireProgram(Mt,St),Lt.set(St,Zt),V.uniforms=Mt.uniforms;let _t=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(_t.clippingPlanes=K.uniform),Tl(x,Mt),V.needsLights=bu(x),V.lightsStateVersion=bt,V.needsLights&&(_t.ambientLightColor.value=k.state.ambient,_t.lightProbe.value=k.state.probe,_t.sunLights.value=k.state.sun,_t.sunLightShadows.value=k.state.sunShadow,_t.directionalLights.value=k.state.directional,_t.directionalLightShadows.value=k.state.directionalShadow,_t.spotLights.value=k.state.spot,_t.spotLightShadows.value=k.state.spotShadow,_t.rectAreaLights.value=k.state.rectArea,_t.ltc_1.value=k.state.rectAreaLTC1,_t.ltc_2.value=k.state.rectAreaLTC2,_t.pointLights.value=k.state.point,_t.pointLightShadows.value=k.state.pointShadow,_t.hemisphereLights.value=k.state.hemi,_t.sunShadowMatrix.value=k.state.sunShadowMatrix,_t.sunShadowCascade.value=k.state.sunShadowCascade,_t.directionalShadowMatrix.value=k.state.directionalShadowMatrix,_t.spotLightMatrix.value=k.state.spotLightMatrix,_t.spotLightMap.value=k.state.spotLightMap,_t.pointShadowMatrix.value=k.state.pointShadowMatrix),V.numLightProbeGrids=yl(y.state.lightProbeGridArray),V.currentProgram=Zt,V.uniformsList=null,Zt}function vu(x,D,G,V,k){let Et=pt.get(x),bt=Et.currentProgram.id+","+V+","+k,Mt=Et.programVariants.get(bt);return Mt===void 0?(Mt=as(x,D,G),Et.programVariants.set(bt,Mt)):(Et.currentProgram=Mt,Et.uniformsList=null,Et.outputColorSpace=V,Et.toneMapping=k),Mt}function Il(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=es.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Tl(x,D){let G=pt.get(x);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Su(x,D,G,V,k){D.isScene!==!0&&(D=ve),Rt.resetTextureUnits();let Et=D.fog,bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,Mt=tt===null?w.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:te.workingColorSpace,St=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Lt=I.get(V.envMap||bt,St),Qt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Zt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),_t=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,ye=!!G.morphAttributes.color,pe=Tn;V.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(pe=w.toneMapping);let fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Oe=fe!==void 0?fe.length:0,Nt=pt.get(V),He=y.state.lights;if(zt===!0&&(ee===!0||x!==W)){let Ee=x===W&&V.id===Q;K.setState(V,x,Ee)}let ae=!1,ri=!1;V.version===Nt.__version?Nt.needsLights&&Nt.lightsStateVersion!==He.state.version||k.isBatchedMesh&&Nt.batching===!1||!k.isBatchedMesh&&Nt.batching===!0||k.isBatchedMesh&&Nt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Nt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Nt.instancing===!1||!k.isInstancedMesh&&Nt.instancing===!0||k.isSkinnedMesh&&Nt.skinning===!1||!k.isSkinnedMesh&&Nt.skinning===!0||k.isInstancedMesh&&Nt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Nt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Nt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Nt.instancingMorph===!1&&k.morphTexture!==null||Nt.envMap!==Lt||V.fog===!0&&Nt.fog!==Et||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==K.numPlanes||Nt.numIntersection!==K.numIntersection)||Nt.vertexAlphas!==Qt||Nt.vertexTangents!==Zt||Nt.morphTargets!==_t||Nt.morphNormals!==$t||Nt.morphColors!==ye||Nt.morphTargetsCount!==Oe||Nt.numLightProbeGrids!==yl(y.state.lightProbeGridArray)?ae=!0:(Nt.outputColorSpace!==Mt||Nt.toneMapping!==pe)&&(ri=!0):(ae=!0,Nt.__version=V.version);let Pe=Nt.currentProgram;(ae===!0||ri===!0)&&(Pe=ri===!0?vu(V,D,k,Mt,pe):as(V,D,k),F&&V.isNodeMaterial&&F.onUpdateProgram(V,Pe,Nt));let tr=!1,Vn=!1,ai=!1,ne=Pe.getUniforms(),De=Nt.uniforms;if(nt.useProgram(Pe.program)&&(tr=!0,Vn=!0,ai=!0),V.id!==Q&&(Q=V.id,Vn=!0),tr||W!==x){nt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ne.setValue(L,"projectionMatrix",x.projectionMatrix),ne.setValue(L,"viewMatrix",x.matrixWorldInverse);let be=ne.map.cameraPosition;be!==void 0&&be.setValue(L,xe.setFromMatrixPosition(x.matrixWorld)),xt.logarithmicDepthBuffer&&ne.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ne.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),W!==x&&(W=x,Vn=!0,ai=!0)}if(Nt.needsLights&&(He.state.sunShadowMap.length>0&&ne.setValue(L,"sunShadowMap",He.state.sunShadowMap,Rt),He.state.directionalShadowMap.length>0&&ne.setValue(L,"directionalShadowMap",He.state.directionalShadowMap,Rt),He.state.spotShadowMap.length>0&&ne.setValue(L,"spotShadowMap",He.state.spotShadowMap,Rt),He.state.pointShadowMap.length>0&&ne.setValue(L,"pointShadowMap",He.state.pointShadowMap,Rt)),k.isSkinnedMesh){ne.setOptional(L,k,"bindMatrix"),ne.setOptional(L,k,"bindMatrixInverse");let Ee=k.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ne.setValue(L,"boneTexture",Ee.boneTexture,Rt))}k.isBatchedMesh&&(ne.setOptional(L,k,"batchingTexture"),ne.setValue(L,"batchingTexture",k._matricesTexture,Rt),ne.setOptional(L,k,"batchingIdTexture"),ne.setValue(L,"batchingIdTexture",k._indirectTexture,Rt),ne.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&ne.setValue(L,"batchingColorTexture",k._colorsTexture,Rt));let on=G.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Z.update(k,G,Pe),(Vn||Nt.receiveShadow!==k.receiveShadow)&&(Nt.receiveShadow=k.receiveShadow,ne.setValue(L,"receiveShadow",k.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&D.environment!==null&&(De.envMapIntensity.value=D.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=im()),Vn){if(ne.setValue(L,"toneMappingExposure",w.toneMappingExposure),Nt.needsLights&&Ru(De,ai),Et&&V.fog===!0&&st.refreshFogUniforms(De,Et),st.refreshMaterialUniforms(De,V,gt,Dt,y.state.transmissionRenderTarget[x.id]),Nt.needsLights&&Nt.numLightProbeGrids>0){let Ee=v,be=0;for(let Rn of y.state.lightProbeGridArray)Rn.texture!==null&&(Ee.textures[be]=Rn.texture,Ee.min[be]=Rn.boundingBox.min,Ee.max[be]=Rn.boundingBox.max,Ee.resolution[be]=Rn.resolution,be++);for(let Rn in Ee)Ee[Rn].length=be;De.probesSH.value=Ee.textures,De.probesMin.value=Ee.min,De.probesMax.value=Ee.max,De.probesResolution.value=Ee.resolution}es.upload(L,Il(Nt),De,Rt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(es.upload(L,Il(Nt),De,Rt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ne.setValue(L,"center",k.center),ne.setValue(L,"modelViewMatrix",k.modelViewMatrix),ne.setValue(L,"normalMatrix",k.normalMatrix),ne.setValue(L,"modelMatrix",k.matrixWorld),V.uniformsGroups!==void 0){let Ee=V.uniformsGroups;for(let be=0,Rn=Ee.length;be<Rn;be++){let Sl=Ee[be];Ct.update(Sl,Pe),Ct.bind(Sl,Pe)}}return Pe}function Ru(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.sunLights.needsUpdate=D,x.sunLightShadows.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function bu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(x,D,G){let V=pt.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),pt.get(x.texture).__webglTexture=D,pt.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let G=pt.get(x);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,G=0){tt=x,q=D,B=G;let V=null,k=!1,Et=!1;if(x){let Mt=pt.get(x);if(Mt.__useDefaultFramebuffer!==void 0){nt.bindFramebuffer(L.FRAMEBUFFER,Mt.__webglFramebuffer),$.copy(x.viewport),ht.copy(x.scissor),Ut=x.scissorTest,nt.viewport($),nt.scissor(ht),nt.setScissorTest(Ut),Q=-1;return}else if(Mt.__webglFramebuffer===void 0)Rt.setupRenderTarget(x);else if(Mt.__hasExternalTextures)Rt.rebindTextures(x,pt.get(x.texture).__webglTexture,pt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Qt=x.depthTexture;if(Mt.__boundDepthTexture!==Qt){if(Qt!==null&&pt.has(Qt)&&(x.width!==Qt.image.width||x.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(x)}}let St=x.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(Et=!0);let Lt=pt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?V=Lt[D][G]:V=Lt[D],k=!0):x.samples>0&&Rt.useMultisampledRTT(x)===!1?V=pt.get(x).__webglMultisampledFramebuffer:Array.isArray(Lt)?V=Lt[G]:V=Lt,$.copy(x.viewport),ht.copy(x.scissor),Ut=x.scissorTest}else $.copy(at).multiplyScalar(gt).floor(),ht.copy(Tt).multiplyScalar(gt).floor(),Ut=At;if(G!==0&&(V=H),nt.bindFramebuffer(L.FRAMEBUFFER,V)&&nt.drawBuffers(x,V),nt.viewport($),nt.scissor(ht),nt.setScissorTest(Ut),k){let Mt=pt.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,G)}else if(Et){let Mt=D;for(let St=0;St<x.textures.length;St++){let Lt=pt.get(x.textures[St]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+St,Lt.__webglTexture,G,Mt)}}else if(x!==null&&G!==0){let Mt=pt.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,G)}Q=-1};function vl(x){let D=pt.get(x);return(D.__readFormat!==x.format||D.__readType!==x.type)&&(D.__readFormat=x.format,D.__readType=x.type,D.__formatReadable=xt.textureFormatReadable(x.format),D.__typeReadable=xt.textureTypeReadable(x.type)),D}this.readRenderTargetPixels=function(x,D,G,V,k,Et,bt,Mt=0){if(!(x&&x.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=pt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&bt!==void 0&&(St=St[bt],Array.isArray(St)&&(St=St[0])),St){nt.bindFramebuffer(L.FRAMEBUFFER,St);try{let Lt=x.textures[Mt],Qt=Lt.format,Zt=Lt.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt);let _t=vl(Lt);if(_t.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_t.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-V&&G>=0&&G<=x.height-k&&L.readPixels(D,G,V,k,rt.convert(Qt),rt.convert(Zt),Et)}finally{let Lt=tt!==null?pt.get(tt).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(x,D,G,V,k,Et,bt,Mt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=pt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&bt!==void 0&&(St=St[bt],Array.isArray(St)&&(St=St[0])),St)if(D>=0&&D<=x.width-V&&G>=0&&G<=x.height-k){nt.bindFramebuffer(L.FRAMEBUFFER,St);let Lt=x.textures[Mt],Qt=Lt.format,Zt=Lt.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt);let _t=vl(Lt);if(_t.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_t.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.bufferData(L.PIXEL_PACK_BUFFER,Et.byteLength,L.STREAM_READ),L.readPixels(D,G,V,k,rt.convert(Qt),rt.convert(Zt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let ye=tt!==null?pt.get(tt).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,ye);let pe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bc(L,pe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$t),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Et),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer($t),L.deleteSync(pe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,G=0){let V=Math.pow(2,-G),k=Math.floor(x.image.width*V),Et=Math.floor(x.image.height*V),bt=D!==null?D.x:0,Mt=D!==null?D.y:0;Rt.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,bt,Mt,k,Et),nt.unbindTexture()},this.copyTextureToTexture=function(x,D,G=null,V=null,k=0,Et=0){let bt,Mt,St,Lt,Qt,Zt,_t,$t,ye,pe=x.isCompressedTexture?x.mipmaps[Et]:x.image;if(G!==null)bt=G.max.x-G.min.x,Mt=G.max.y-G.min.y,St=G.isBox3?G.max.z-G.min.z:1,Lt=G.min.x,Qt=G.min.y,Zt=G.isBox3?G.min.z:0;else{let ne=Math.pow(2,-k);bt=Math.floor(pe.width*ne),Mt=Math.floor(pe.height*ne),x.isDataArrayTexture?St=pe.depth:x.isData3DTexture?St=Math.floor(pe.depth*ne):St=1,Lt=0,Qt=0,Zt=0}V!==null?(_t=V.x,$t=V.y,ye=V.z):(_t=0,$t=0,ye=0);let fe=rt.convert(D.format),Oe=rt.convert(D.type),Nt;D.isData3DTexture?(Rt.setTexture3D(D,0),Nt=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Rt.setTexture2DArray(D,0),Nt=L.TEXTURE_2D_ARRAY):(Rt.setTexture2D(D,0),Nt=L.TEXTURE_2D),nt.activeTexture(L.TEXTURE0),nt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),nt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),nt.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);let He=nt.getParameter(L.UNPACK_ROW_LENGTH),ae=nt.getParameter(L.UNPACK_IMAGE_HEIGHT),ri=nt.getParameter(L.UNPACK_SKIP_PIXELS),Pe=nt.getParameter(L.UNPACK_SKIP_ROWS),tr=nt.getParameter(L.UNPACK_SKIP_IMAGES);nt.pixelStorei(L.UNPACK_ROW_LENGTH,pe.width),nt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe.height),nt.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),nt.pixelStorei(L.UNPACK_SKIP_ROWS,Qt),nt.pixelStorei(L.UNPACK_SKIP_IMAGES,Zt);let Vn=x.isDataArrayTexture||x.isData3DTexture,ai=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let ne=pt.get(x),De=pt.get(D),on=pt.get(ne.__renderTarget),Ee=pt.get(De.__renderTarget);nt.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let be=0;be<St;be++)Vn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.get(x).__webglTexture,k,Zt+be),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.get(D).__webglTexture,Et,ye+be)),L.blitFramebuffer(Lt,Qt,Lt+bt,Qt+Mt,_t,$t,_t+bt,$t+Mt,L.DEPTH_BUFFER_BIT,L.NEAREST);nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||pt.has(x)){let ne=pt.get(x),De=pt.get(D);nt.bindFramebuffer(L.READ_FRAMEBUFFER,_),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let on=0;on<St;on++)Vn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ne.__webglTexture,k,Zt+on):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ne.__webglTexture,k),ai?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,Et,ye+on):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,Et),k!==0?L.blitFramebuffer(Lt,Qt,Lt+bt,Qt+Mt,_t,$t,_t+bt,$t+Mt,L.COLOR_BUFFER_BIT,L.NEAREST):ai?L.copyTexSubImage3D(Nt,Et,_t,$t,ye+on,Lt,Qt,bt,Mt):L.copyTexSubImage2D(Nt,Et,_t,$t,Lt,Qt,bt,Mt);nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ai?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(Nt,Et,_t,$t,ye,bt,Mt,St,fe,Oe,pe.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Nt,Et,_t,$t,ye,bt,Mt,St,fe,pe.data):L.texSubImage3D(Nt,Et,_t,$t,ye,bt,Mt,St,fe,Oe,pe):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Et,_t,$t,bt,Mt,fe,Oe,pe.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Et,_t,$t,pe.width,pe.height,fe,pe.data):L.texSubImage2D(L.TEXTURE_2D,Et,_t,$t,bt,Mt,fe,Oe,pe);nt.pixelStorei(L.UNPACK_ROW_LENGTH,He),nt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ae),nt.pixelStorei(L.UNPACK_SKIP_PIXELS,ri),nt.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),nt.pixelStorei(L.UNPACK_SKIP_IMAGES,tr),Et===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&L.generateMipmap(Nt),nt.unbindTexture()},this.initRenderTarget=function(x){pt.get(x).__webglFramebuffer===void 0&&Rt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Rt.setTextureCube(x,0):x.isData3DTexture?Rt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Rt.setTexture2DArray(x,0):Rt.setTexture2D(x,0),nt.unbindTexture()},this.resetState=function(){q=0,B=0,tt=null,nt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ka=class extends Un{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Xn;t.deleteAttribute("uv");let e=new pi({side:Ue}),n=new pi,s=new Ps(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new de(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new vs(t,n,6),o=new Ne;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new de(t,ss(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new de(t,ss(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new de(t,ss(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new de(t,ss(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new de(t,ss(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new de(t,ss(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ss(i){return new Ns({color:0,emissive:16777215,emissiveIntensity:i})}var yi={silkNormal:"/assets/li/silkNormal.jpg",silkRoughness:"/assets/li/silkRoughness.jpg",silkColor:"/assets/li/silkColor.jpg",paperColor:"/assets/li/paperColor.jpg",paperBump:"/assets/li/paperBump.jpg",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NTIyLjQiIGhlaWdodD0iMTQwNy40IiB2aWV3Qm94PSItMTE4LjIgLTk1Mi4yIDQ1MjIuNCAxNDA3LjQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTM2NSAxMTVRMTM1MCAxMTMgMTMyNC4wIDEwNy41UTEyOTggMTAyIDEyNzEuMCA4Ni4wUTEyNDQgNzAgMTIyNS4wIDM3LjVRMTIwNiA1IDEyMDYgLTQ5UTEyMDYgLTExMSAxMjMxLjUgLTE4NS41UTEyNTcgLTI2MCAxMjk0LjAgLTM0MS4wUTEzMzEgLTQyMiAxMzY1IC01MDFRMTM5MiAtNTY0IDEzOTIgLTU5N1ExMzkyIC02MzAgMTM2NyAtNjMwUTEzMzkgLTYzMCAxMjgzLjUgLTU4NS41UTEyMjggLTU0MSAxMTU1IC00NTFRMTEzNiAtNDI3IDExMDYuMCAtMzg0LjVRMTA3NiAtMzQyIDEwNDIuMCAtMjkwLjVRMTAwOCAtMjM5IDk3NS41IC0xODYuNVE5NDMgLTEzNCA5MTguNSAtOTAuMFE4OTQgLTQ2IDg4MyAtMjBRODcwIDExIDg1My4wIDIyLjVRODM2IDM0IDgyMSAzNFE4MDggMzQgNzk5IDI3UTc4OSAyMCA3ODkgMTBRNzg5IDQgNzkyIDBRNzk4IC0xMiA4MjIuMCAtNTUuMFE4NDYgLTk4IDg3OC4wIC0xNjkuMFE5MTAgLTI0MCA5MzkgLTMzNFE5NDggLTM2MyA5NTcuNSAtNDAxLjBROTY3IC00MzkgOTc1LjAgLTQ3OS41UTk4MyAtNTIwIDk4OC41IC01NTUuNVE5OTQgLTU5MSA5OTQgLTYxM1E5OTQgLTY0OCA5ODIuMCAtNjY0LjVROTcwIC02ODEgOTUwIC02ODFROTI4IC02ODEgOTAwLjAgLTY2Mi4wUTg3MiAtNjQzIDg0MyAtNjA3UTc5MyAtNTQ0IDc1NS4wIC00OTAuNVE3MTcgLTQzNyA2ODUuNSAtMzg0LjBRNjU0IC0zMzEgNjIzLjUgLTI3MS4wUTU5MyAtMjExIDU1OS4wIC0xMzYuNVE1MjUgLTYyIDQ4MSAzNlE0NzQgNTIgNDU3LjUgNTkuMFE0NDEgNjYgNDI3IDY2UTQxMyA2NiA0MDQuMCA2MC4wUTM5NSA1NCAzOTggNDNRNDIwIDggNDQ3LjAgLTQ0LjVRNDc0IC05NyA1MDIuMCAtMTYxLjBRNTMwIC0yMjUgNTU2LjAgLTI5NC4wUTU4MiAtMzYzIDYwMi41IC00MjkuMFE2MjMgLTQ5NSA2MzUuMCAtNTUzLjBRNjQ3IC02MTEgNjQ3IC02NTJRNjQ3IC03MjkgNjE0LjUgLTc2Mi4wUTU4MiAtNzk1IDUzMSAtNzk1UTQ4NiAtNzk1IDQzMi4wIC03NzMuMFEzNzggLTc1MSAzMjMuNSAtNzEzLjBRMjY5IC02NzUgMjIxIC02MjdRMTUyIC01NTggMTEyLjUgLTQ3Ny4wUTczIC0zOTYgNzMgLTMxM1E3MyAtMjU3IDk0LjAgLTIxOC4wUTExNSAtMTc5IDE0OS41IC0xNTkuMFExODQgLTEzOSAyMjYgLTEzOVEyNjkgLTEzOSAzMDYuNSAtMTYwLjVRMzQ0IC0xODIgMzcyLjUgLTIxNi41UTQwMSAtMjUxIDQxNy4wIC0yODkuNVE0MzMgLTMyOCA0MzMgLTM2MlE0MzMgLTM5MSA0MTcuMCAtNDEwLjBRNDAxIC00MjkgMzY2IC00MjlRMzYyIC00MjkgMzU3LjUgLTQyOC41UTM1MyAtNDI4IDM0OCAtNDI4SDM0NVEzMzggLTQyOCAzMzIuMCAtNDMwLjVRMzI2IC00MzMgMzI2IC00MzdRMzI2IC00NDEgMzM2LjUgLTQ0Ni4wUTM0NyAtNDUxIDM3NSAtNDUxUTQyMCAtNDUxIDQ0Mi41IC00MjQuNVE0NjUgLTM5OCA0NjUgLTM1N1E0NjUgLTMxNyA0NDQuNSAtMjc1LjBRNDI0IC0yMzMgMzg5LjAgLTE5Ny4wUTM1NCAtMTYxIDMxMC41IC0xMzkuMFEyNjcgLTExNyAyMjEgLTExN1ExNjcgLTExNyAxMjAuNSAtMTQyLjBRNzQgLTE2NyA0Ni4wIC0yMTQuNVExOCAtMjYyIDE4IC0zMjhRMTggLTM5MSA0NC4wIC00NTIuNVE3MCAtNTE0IDExMS41IC01NjguNVExNTMgLTYyMyAyMDAgLTY2NVEyNTIgLTcxMiAzMTAuMCAtNzQ1LjVRMzY4IC03NzkgNDI1LjUgLTc5Ny41UTQ4MyAtODE2IDUzMyAtODE2UTYwNyAtODE2IDY1NS41IC03NzIuMFE3MDQgLTcyOCA3MDQgLTYzMFE3MDQgLTU5MCA2OTMuMCAtNTM4LjVRNjgyIC00ODcgNjY3LjAgLTQzNS41UTY1MiAtMzg0IDYzOCAtMzQ0SDY0MFE2NzYgLTQwOSA3MDQuNSAtNDU1LjVRNzMzIC01MDIgNzYyLjAgLTU0Mi4wUTc5MSAtNTgyIDgyNyAtNjI2UTg1OCAtNjYzIDg5OC4wIC02ODUuMFE5MzggLTcwNyA5NzUgLTcwN1ExMDA4IC03MDcgMTAzMS4wIC02ODUuMFExMDU0IC02NjMgMTA1NCAtNjEwUTEwNTQgLTYwNCAxMDU0LjAgLTYwMC4wUTEwNTQgLTU5NiAxMDUzIC01ODhRMTA0NCAtNDkyIDEwMTUuMCAtMzk5LjVROTg2IC0zMDcgOTU1IC0yMTNROTg2IC0yNjEgMTAzOS4wIC0zMzUuMFExMDkyIC00MDkgMTE1NSAtNDg4UTEyMzIgLTU4NCAxMjk4LjAgLTYzMi4wUTEzNjQgLTY4MCAxNDA3IC02ODBRMTQ2MSAtNjgwIDE0NjEgLTYxNFExNDYxIC01ODkgMTQ1MS41IC01NTQuMFExNDQyIC01MTkgMTQyMiAtNDgwUTE0MDAgLTQzNiAxMzczLjUgLTM3OC41UTEzNDcgLTMyMSAxMzIzLjAgLTI1OC4wUTEyOTkgLTE5NSAxMjgzLjUgLTEzNC41UTEyNjggLTc0IDEyNjggLTIzUTEyNjggMzIgMTI5My41IDY1LjVRMTMxOSA5OSAxMzgyIDk5SDEzODhRMTQwMyA5OSAxNDAzIDEwNVExNDAzIDEwOSAxMzkzLjAgMTEzLjBRMTM4MyAxMTcgMTM2NSAxMTVaTTEyOTkgOFExMzM1IC02NSAxMzY4LjAgLTEzNi41UTE0MDEgLTIwOCAxNDM2IC0yNzNRMTQ1NiAtMzA5IDE0NzAuMCAtMzIzLjVRMTQ4NCAtMzM4IDE1MDcgLTMzOFExNTE1IC0zMzggMTUyNC4wIC0zMzUuNVExNTMzIC0zMzMgMTU0MiAtMzMzUTE1NDggLTMzMyAxNTUxIC0zMzRRMTUzNyAtMzI2IDE1MTQuNSAtMjk0LjVRMTQ5MiAtMjYzIDE0NjkuMCAtMjIyLjBRMTQ0NiAtMTgxIDE0MjggLTE0NVExNDQ3IC0xNjggMTQ2OC4wIC0xOTEuMFExNDg5IC0yMTQgMTUxNCAtMjM1UTE1MzggLTI1NiAxNTcxLjUgLTI3OC41UTE2MDUgLTMwMSAxNjM3LjAgLTMxNi4wUTE2NjkgLTMzMSAxNjg4IC0zMzFRMTY5NSAtMzMxIDE2OTggLTMzMFExNjk4IC0zMzAgMTY4Ny4wIC0zMTAuNVExNjc2IC0yOTEgMTY1OS41IC0yNTkuNVExNjQzIC0yMjggMTYyNi4wIC0xOTIuNVExNjA5IC0xNTcgMTU5NS41IC0xMjQuNVExNTgyIC05MiAxNTc4IC03MFExNTc1IC01NyAxNTc1IC00NlExNTc1IC0zMCAxNTgxLjAgLTI1LjBRMTU4NyAtMjAgMTU5NCAtMjBRMTYxMyAtMjAgMTYzMy4wIC0zNy4wUTE2NTMgLTU0IDE2NzEuNSAtODAuNVExNjkwIC0xMDcgMTcwNi4wIC0xMzcuMFExNzIyIC0xNjcgMTczMyAtMTkzUTE3NDUgLTE5MyAxNzQ1IC0xODRRMTczNCAtMTU3IDE3MTcuNSAtMTI0LjVRMTcwMSAtOTIgMTY4MC41IC02My4wUTE2NjAgLTM0IDE2MzUuMCAtMTUuMFExNjEwIDQgMTU4MSA0UTE1NjEgNCAxNTM5LjUgLTEwLjBRMTUxOCAtMjQgMTUxOCAtNjJRMTUxOCAtNzMgMTUyMC4wIC04NS41UTE1MjIgLTk4IDE1MjcgLTExM1ExNTM1IC0xMzMgMTU0Ni4wIC0xNTYuMFExNTU3IC0xNzkgMTU4MiAtMjE5UTE1ODkgLTIzMCAxNTkwLjUgLTIzNi4wUTE1OTIgLTI0MiAxNTkyIC0yNDZRMTU5MiAtMjU4IDE1ODEgLTI1OFExNTcyIC0yNTggMTU1NC41IC0yNDguMFExNTM3IC0yMzggMTUxMSAtMjEzUTE0ODYgLTE4OSAxNDUxLjUgLTE0NS4wUTE0MTcgLTEwMSAxMzcyIC0xNVExMzY1IC0yIDEzNTYuNSAtMS4wUTEzNDggMCAxMzMzIDFRMTMyMyAyIDEzMTQuMCAyLjVRMTMwNSAzIDEyOTkgOFpNMTM3MiAzMTlRMTMyMCAzMTkgMTI5OC41IDI5OC41UTEyNzcgMjc4IDEyNzcgMjUwUTEyNzcgMjIzIDEyOTIgMTk2UTEzMDYgMTY3IDEzMzEuMCAxNDYuNVExMzU2IDEyNiAxMzg2IDExMlExNDM3IDg4IDE1MDMuNSA3My4wUTE1NzAgNTggMTYzMSA0MFExNjM5IDI2IDE2NDcuNSAxMS4wUTE2NTYgLTQgMTY2MyAtMThRMTY4MyAtNTggMTcwMC4wIC05Ny41UTE3MTcgLTEzNyAxNzQyIC0xODNRMTczMyAtMTgzIDE3MzMgLTE5M0wxNzc3IC0yOTRRMTc3OCAtMjk2IDE3NzkuMCAtMjk5LjVRMTc4MCAtMzAzIDE3ODAgLTMwN1ExNzgwIC0zMTggMTc3NS4wIC0zMjUuNVExNzcwIC0zMzMgMTc2OCAtMzM2TDE4MjMgLTMzOEgxODI4UTE4NTAgLTMzOCAxODUwIC0zMjRRMTg1MCAtMzE3IDE4NDQgLTMwMkwxNzY0IC0xMTRRMTc1MCAtODEgMTczNC4wIC00OC4wUTE3MTggLTE1IDE3MDEgMTlRMTc3MSAtOCAxODEyLjUgLTQ3LjVRMTg1NCAtODcgMTg3Ni41IC0xMjYuNVExODk5IC0xNjYgMTkxMSAtMTkzUTE5MjMgLTE5MyAxOTIzIC0xODRRMTkxMyAtMTYyIDE4OTcuMCAtMTMxLjVRMTg4MSAtMTAxIDE4NTUuMCAtNjcuNVExODI5IC0zNCAxNzg4LjAgLTMuMFExNzQ3IDI4IDE2ODUgNTFRMTY2MSA5NCAxNjMwLjAgMTQwLjVRMTU5OSAxODcgMTU2MC4wIDIyNy41UTE1MjEgMjY4IDE0NzQuNSAyOTMuNVExNDI4IDMxOSAxMzcyIDMxOVpNMTM0OCAyOTlRMTM4MSAyOTkgMTQxNi41IDI3OS4wUTE0NTIgMjU5IDE0ODUuMCAyMjguNVExNTE4IDE5OCAxNTQ1LjUgMTY2LjBRMTU3MyAxMzQgMTU5MCAxMTBRMTU5NiAxMDIgMTYwMS4wIDkyLjBRMTYwNiA4MiAxNjExIDcyUTE1NjMgODUgMTUwNS4wIDEwMC41UTE0NDcgMTE2IDE0MDMgMTM1UTEzNTUgMTU1IDEzMjguMCAxOTEuNVExMzAxIDIyOCAxMzAxIDI1N1ExMzAxIDI3NiAxMzEyLjUgMjg3LjVRMTMyNCAyOTkgMTM0OCAyOTlaTTE4NTIgLTQwMFExODM5IC00MDAgMTgyOS41IC00MTAuMFExODIwIC00MjAgMTgyMCAtNDM0UTE4MjAgLTQ1MSAxODM0LjAgLTQ2NC41UTE4NDggLTQ3OCAxODY1IC00NzhRMTg3OSAtNDc4IDE4ODkuMCAtNDY5LjBRMTg5OSAtNDYwIDE4OTkgLTQ0NlExODk5IC00MjggMTg4NS4wIC00MTQuMFExODcxIC00MDAgMTg1MiAtNDAwWk0yMTI4IDNRMjEwNSAzIDIwODcuNSAtMTAuMFEyMDcwIC0yMyAyMDcwIC02M1EyMDcwIC04MCAyMDcyLjUgLTk1LjBRMjA3NSAtMTEwIDIwNzkgLTEyN1EyMDcwIC0xMTIgMjA1NC4wIC05MC4wUTIwMzggLTY4IDIwMTguNSAtNDcuMFExOTk5IC0yNiAxOTc4LjUgLTEyLjBRMTk1OCAyIDE5NDAgMlExOTE0IDIgMTg5OC4wIC0yMS41UTE4ODIgLTQ1IDE4ODIgLTgzUTE4ODIgLTEyNCAxOTAxLjAgLTE3MS4wUTE5MjAgLTIxOCAxOTUzLjAgLTI2MS4wUTE5ODYgLTMwNCAyMDI5LjAgLTMzMS4wUTIwNzIgLTM1OCAyMTE5IC0zNThRMjE0MiAtMzU4IDIxNjMuMCAtMzUwLjVRMjE4NCAtMzQzIDIyMDAgLTMyNlEyMjA3IC0zMTkgMjIwNyAtMzEwUTIyMDcgLTMwNCAyMjAyLjAgLTMwMC4wUTIxOTcgLTI5NiAyMTg5IC0yOThRMjE3OCAtMzMzIDIxNDIgLTMzM1EyMTI1IC0zMzMgMjEwMyAtMzIyUTIwNzYgLTMwOCAyMDQ1LjUgLTI3Ny41UTIwMTUgLTI0NyAxOTg4LjUgLTIwOC41UTE5NjIgLTE3MCAxOTQ1LjAgLTEzMS4wUTE5MjggLTkyIDE5MjggLTYwUTE5MjggLTI3IDE5NTMgLTI3UTE5NzUgLTI3IDE5OTguNSAtNDguMFEyMDIyIC02OSAyMDQzLjUgLTEwMC41UTIwNjUgLTEzMiAyMDgzLjAgLTE2My4wUTIxMDEgLTE5NCAyMTExIC0yMTNRMjEyNiAtMjQwIDIxMzkuMCAtMjU4LjBRMjE1MiAtMjc2IDIxNzYgLTI3NlEyMTg3IC0yNzYgMjE5OC4wIC0yNzMuMFEyMjA5IC0yNzAgMjIyMSAtMjcyUTIxOTEgLTI0MiAyMTY4LjUgLTIwMS4wUTIxNDYgLTE2MCAyMTM0LjAgLTEyMC41UTIxMjIgLTgxIDIxMjIgLTU0UTIxMjIgLTI0IDIxNDIgLTI0UTIxNTggLTI0IDIxNzYuNSAtNDIuMFEyMTk1IC02MCAyMjEyLjUgLTg3LjVRMjIzMCAtMTE1IDIyNDUuMCAtMTQzLjVRMjI2MCAtMTcyIDIyNjkgLTE5M1EyMjc0IC0xOTMgMjI3Ny41IC0xOTIuMFEyMjgxIC0xOTEgMjI4MSAtMTg0UTIyODAgLTE4MCAyMjc3LjUgLTE3NS41UTIyNzUgLTE3MSAyMjcwIC0xNjBRMjI2MiAtMTQ0IDIyNDguMCAtMTE3LjBRMjIzNCAtOTAgMjIxNS4wIC02Mi41UTIxOTYgLTM1IDIxNzQuMCAtMTYuMFEyMTUyIDMgMjEyOCAzWk0yMjk4IDBRMjI4NyAwIDIyNzEuNSAtNS4wUTIyNTYgLTEwIDIyNDQuNSAtMjMuNVEyMjMzIC0zNyAyMjMzIC02NFEyMjMzIC05MCAyMjUwLjAgLTEyNC4wUTIyNjcgLTE1OCAyMjgwIC0xODRRMjI2OSAtMTg0IDIyNjkgLTE5M1EyMjcwIC0xOTYgMjI3OC4wIC0yMTIuMFEyMjg2IC0yMjggMjI5Ny4wIC0yNTAuMFEyMzA4IC0yNzIgMjMxOC41IC0yOTIuNVEyMzI5IC0zMTMgMjMzNSAtMzI0UTIzNDcgLTM0NiAyMzczIC0zNDZIMjQzNVEyNDE4IC0zMzMgMjQwNC41IC0zMTcuNVEyMzkxIC0zMDIgMjM3MSAtMjYxUTIzNzEgLTI2MSAyMzY0LjAgLTI0Ny4wUTIzNTcgLTIzMyAyMzQ2LjUgLTIxMS41UTIzMzYgLTE5MCAyMzI1LjUgLTE2OC4wUTIzMTUgLTE0NiAyMzA4IC0xMzFRMjI5NSAtMTAzIDIyOTEuMCAtODYuNVEyMjg3IC03MCAyMjg3IC01NlEyMjg3IC0yMyAyMzA5IC0yM1EyMzMzIC0yMyAyMzY3IC02MlEyMzk1IC05NSAyNDIyLjAgLTE0MS4wUTI0NDkgLTE4NyAyNDczLjUgLTIzNi4wUTI0OTggLTI4NSAyNTE3IC0zMjRRMjUyOCAtMzQ2IDI1NTYgLTM0NkgyNjExUTI1ODkgLTMyOCAyNTY2LjUgLTI5Mi4wUTI1NDQgLTI1NiAyNTE3IC0yMDBRMjUxMCAtMTg1IDI0OTkuMCAtMTYyLjBRMjQ4OCAtMTM5IDI0NzkuNSAtMTEzLjBRMjQ3MSAtODcgMjQ3MSAtNjFRMjQ3MSAtMjYgMjQ5NiAtMjZRMjUzMCAtMjYgMjU2Mi4wIC03My4wUTI1OTQgLTEyMCAyNjI1IC0xOTNRMjYzMyAtMTkzIDI2MzQuNSAtMTkyLjBRMjYzNiAtMTkxIDI2MzcgLTE4NFEyNjI2IC0xNTcgMjYxMC41IC0xMjUuNVEyNTk1IC05NCAyNTc1LjUgLTY1LjBRMjU1NiAtMzYgMjUzMi41IC0xOC4wUTI1MDkgMCAyNDgxIDBRMjQ1NiAwIDI0NDAuMCAtMTguNVEyNDI0IC0zNyAyNDI0IC03MVEyNDI0IC05OCAyNDM0IC0xMjlRMjQxNyAtOTkgMjM5NS4wIC02OS4wUTIzNzMgLTM5IDIzNDguMCAtMTkuNVEyMzIzIDAgMjI5OCAwWk0yNDY4IDI3M1EyNDU2IDI3MyAyNDQzLjUgMjY5LjVRMjQzMSAyNjYgMjQxOCAyNjhRMjQyNCAyNjIgMjQ0MS4wIDIzMy41UTI0NTggMjA1IDI0ODEuMCAxNjIuNVEyNTA0IDEyMCAyNTI4LjUgNzAuNVEyNTUzIDIxIDI1NzYuMCAtMjcuNVEyNTk5IC03NiAyNjE1LjUgLTExNy41UTI2MzIgLTE1OSAyNjM3IC0xODRRMjYzMiAtMTg0IDI2MjguMCAtMTg2LjBRMjYyNCAtMTg4IDI2MjUgLTE5M1EyNjI1IC0xOTMgMjYzMS4wIC0yMTEuMFEyNjM3IC0yMjkgMjY0My4wIC0yNTQuNVEyNjQ5IC0yODAgMjY0OSAtMzAxUTI2NDkgLTMxNSAyNjQ2LjAgLTMyNS4wUTI2NDMgLTMzNSAyNjM1IC0zMzZMMjY4NSAtMzQ0UTI2OTEgLTM0NSAyNjk2LjAgLTM0NS41UTI3MDEgLTM0NiAyNzA1IC0zNDZRMjcxNCAtMzQ2IDI3MTcuNSAtMzM5LjVRMjcyMSAtMzMzIDI3MjEgLTMxM1EyNzIxIC0yODggMjcxMi41IC0yNDkuNVEyNzA0IC0yMTEgMjY5MyAtMTgyUTI3MDQgLTIwMCAyNzIxLjUgLTIyOC4wUTI3MzkgLTI1NiAyNzYyLjAgLTI4NS4wUTI3ODUgLTMxNCAyODEwLjAgLTMzMy41UTI4MzUgLTM1MyAyODU5IC0zNTNRMjg2NCAtMzUzIDI4NzIgLTM1MVEyOTAwIC0zNDQgMjkxMS41IC0zMjMuNVEyOTIzIC0zMDMgMjkyMyAtMjc1UTI5MjMgLTI0NSAyOTExLjUgLTIwOS4wUTI5MDAgLTE3MyAyODgxLjAgLTEzOC41UTI4NjIgLTEwNCAyODM5IC03NlEyODExIC00MSAyNzcyLjAgLTIwLjBRMjczMyAxIDI2OTIgMVEyNjU1IDEgMjYyMyAtMThMMjUyOCAyMjFRMjUxNCAyNTEgMjUwMS4wIDI2Mi4wUTI0ODggMjczIDI0NjggMjczWk0yNjYwIC0yMFEyNjg4IC0yMCAyNzIzLjAgLTQ2LjBRMjc1OCAtNzIgMjc5MC41IC0xMTIuNVEyODIzIC0xNTMgMjg0NSAtMTk0UTI4NjAgLTIyMiAyODY3LjAgLTI0NS41UTI4NzQgLTI2OSAyODc0IC0yODZRMjg3NCAtMzI1IDI4NDYgLTMyNVEyODMzIC0zMjUgMjgxMi41IC0zMTEuMFEyNzkyIC0yOTcgMjc2NSAtMjYwUTI3MzYgLTIyMCAyNzAxLjUgLTE1OS41UTI2NjcgLTk5IDI2MzEgLTMyUTI2NDMgLTIwIDI2NjAgLTIwWk0yOTYyIC0xOTZRMjk3MCAtMjEzIDI5ODMuMCAtMjUwLjVRMjk5NiAtMjg4IDMwMTAuMCAtMzM0LjBRMzAyNCAtMzgwIDMwMzEgLTQyMVEzMDM0IC00MzcgMzA0Mi4wIC00NDQuNVEzMDUwIC00NTIgMzA1OSAtNDUyUTMwNzIgLTQ1MiAzMDgzLjAgLTQzOS41UTMwOTQgLTQyNyAzMDk0IC00MDRRMzA5NCAtMzc2IDMwNzcuNSAtMzU2LjBRMzA2MSAtMzM2IDMwMzcgLTMxOFEzMDQ3IC0zMTcgMzA1OC4wIC0zMTYuNVEzMDY5IC0zMTYgMzA4MiAtMzE2UTMxMjkgLTMxNiAzMTc1IC0zMjJRMzE3NyAtMzE2IDMxNzcgLTMxM1EzMTc3IC0zMDAgMzE2OS41IC0yODAuMFEzMTYyIC0yNjAgMzE1NCAtMjQ0UTMxNTAgLTIzNSAzMTM4LjAgLTIxMS41UTMxMjYgLTE4OCAzMTEyLjAgLTE1OC41UTMwOTggLTEyOSAzMDg4LjUgLTEwMC41UTMwNzkgLTcyIDMwNzkgLTUyUTMwNzkgLTI2IDMwOTkgLTI2UTMxMTggLTI2IDMxNTIuMCAtNzAuNVEzMTg2IC0xMTUgMzIyMCAtMTkzUTMyMzIgLTE5MyAzMjMyIC0xODRRMzIyMSAtMTU3IDMyMDQuNSAtMTI1LjBRMzE4OCAtOTMgMzE2OC4wIC02NC41UTMxNDggLTM2IDMxMjUuMCAtMTcuNVEzMTAyIDEgMzA3NyAxUTMwNTggMSAzMDM5LjAgLTE0LjVRMzAyMCAtMzAgMzAyMCAtNjVRMzAyMCAtOTYgMzAzMi4wIC0xMjUuNVEzMDQ0IC0xNTUgMzA1OS4wIC0xODEuMFEzMDc0IC0yMDcgMzA4Ni4wIC0yMjcuMFEzMDk4IC0yNDcgMzA5OCAtMjU5UTMwOTggLTI3NyAzMDc1LjUgLTI4NS4wUTMwNTMgLTI5MyAzMDE3IC0yOTRRMjk5OSAtMjQ4IDI5OTAuMCAtMjI2LjBRMjk4MSAtMjA0IDI5NzMgLTE4NFEyOTU3IC0xODQgMjk2MiAtMTk2Wk0zMjIxIC0xOTZRMzIyOSAtMjEzIDMyNDIuMCAtMjUwLjVRMzI1NSAtMjg4IDMyNjkuMCAtMzM0LjBRMzI4MyAtMzgwIDMyOTAgLTQyMVEzMjkzIC00MzcgMzMwMS4wIC00NDQuNVEzMzA5IC00NTIgMzMxOCAtNDUyUTMzMzEgLTQ1MiAzMzQyLjAgLTQzOS41UTMzNTMgLTQyNyAzMzUzIC00MDRRMzM1MyAtMzc2IDMzMzYuNSAtMzU2LjBRMzMyMCAtMzM2IDMyOTYgLTMxOFEzMzA2IC0zMTcgMzMxNy4wIC0zMTYuNVEzMzI4IC0zMTYgMzM0MSAtMzE2UTMzODggLTMxNiAzNDM0IC0zMjJRMzQzNiAtMzE2IDM0MzYgLTMxM1EzNDM2IC0zMDAgMzQyOC41IC0yODAuMFEzNDIxIC0yNjAgMzQxMyAtMjQ0UTM0MDkgLTIzNSAzMzk3LjAgLTIxMS41UTMzODUgLTE4OCAzMzcxLjAgLTE1OC41UTMzNTcgLTEyOSAzMzQ3LjUgLTEwMC41UTMzMzggLTcyIDMzMzggLTUyUTMzMzggLTI2IDMzNTggLTI2UTMzNzcgLTI2IDM0MTEuMCAtNzAuNVEzNDQ1IC0xMTUgMzQ3OSAtMTkzUTM0OTEgLTE5MyAzNDkxIC0xODRRMzQ4MCAtMTU3IDM0NjMuNSAtMTI1LjBRMzQ0NyAtOTMgMzQyNy4wIC02NC41UTM0MDcgLTM2IDMzODQuMCAtMTcuNVEzMzYxIDEgMzMzNiAxUTMzMTcgMSAzMjk4LjAgLTE0LjVRMzI3OSAtMzAgMzI3OSAtNjVRMzI3OSAtOTYgMzI5MS4wIC0xMjUuNVEzMzAzIC0xNTUgMzMxOC4wIC0xODEuMFEzMzMzIC0yMDcgMzM0NS4wIC0yMjcuMFEzMzU3IC0yNDcgMzM1NyAtMjU5UTMzNTcgLTI3NyAzMzM0LjUgLTI4NS4wUTMzMTIgLTI5MyAzMjc2IC0yOTRRMzI1OCAtMjQ4IDMyNDkuMCAtMjI2LjBRMzI0MCAtMjA0IDMyMzIgLTE4NFEzMjE2IC0xODQgMzIyMSAtMTk2Wk0zNDgwIC0xOTZRMzQ4OCAtMjEzIDM1MDEuMCAtMjUwLjVRMzUxNCAtMjg4IDM1MjguMCAtMzM0LjBRMzU0MiAtMzgwIDM1NDkgLTQyMVEzNTUyIC00MzcgMzU2MC4wIC00NDQuNVEzNTY4IC00NTIgMzU3NyAtNDUyUTM1OTAgLTQ1MiAzNjAxLjAgLTQzOS41UTM2MTIgLTQyNyAzNjEyIC00MDRRMzYxMiAtMzc2IDM1OTUuNSAtMzU2LjBRMzU3OSAtMzM2IDM1NTUgLTMxOFEzNTY1IC0zMTcgMzU3Ni4wIC0zMTYuNVEzNTg3IC0zMTYgMzYwMCAtMzE2UTM2NDcgLTMxNiAzNjkzIC0zMjJRMzY5NSAtMzE2IDM2OTUgLTMxM1EzNjk1IC0zMDAgMzY4Ny41IC0yODAuMFEzNjgwIC0yNjAgMzY3MiAtMjQ0UTM2NjggLTIzNSAzNjU2LjAgLTIxMS41UTM2NDQgLTE4OCAzNjMwLjAgLTE1OC41UTM2MTYgLTEyOSAzNjA2LjUgLTEwMC41UTM1OTcgLTcyIDM1OTcgLTUyUTM1OTcgLTI2IDM2MTcgLTI2UTM2MzYgLTI2IDM2NzAuMCAtNzAuNVEzNzA0IC0xMTUgMzczOCAtMTkzUTM3NTAgLTE5MyAzNzUwIC0xODRRMzczOSAtMTU3IDM3MjIuNSAtMTI1LjBRMzcwNiAtOTMgMzY4Ni4wIC02NC41UTM2NjYgLTM2IDM2NDMuMCAtMTcuNVEzNjIwIDEgMzU5NSAxUTM1NzYgMSAzNTU3LjAgLTE0LjVRMzUzOCAtMzAgMzUzOCAtNjVRMzUzOCAtOTYgMzU1MC4wIC0xMjUuNVEzNTYyIC0xNTUgMzU3Ny4wIC0xODEuMFEzNTkyIC0yMDcgMzYwNC4wIC0yMjcuMFEzNjE2IC0yNDcgMzYxNiAtMjU5UTM2MTYgLTI3NyAzNTkzLjUgLTI4NS4wUTM1NzEgLTI5MyAzNTM1IC0yOTRRMzUxNyAtMjQ4IDM1MDguMCAtMjI2LjBRMzQ5OSAtMjA0IDM0OTEgLTE4NFEzNDc1IC0xODQgMzQ4MCAtMTk2Wk0zNzM5IC0xOTZRMzc0NyAtMjEzIDM3NjAuMCAtMjUwLjVRMzc3MyAtMjg4IDM3ODcuMCAtMzM0LjBRMzgwMSAtMzgwIDM4MDggLTQyMVEzODExIC00MzcgMzgxOS4wIC00NDQuNVEzODI3IC00NTIgMzgzNiAtNDUyUTM4NDkgLTQ1MiAzODYwLjAgLTQzOS41UTM4NzEgLTQyNyAzODcxIC00MDRRMzg3MSAtMzc2IDM4NTQuNSAtMzU2LjBRMzgzOCAtMzM2IDM4MTQgLTMxOFEzODI0IC0zMTcgMzgzNS4wIC0zMTYuNVEzODQ2IC0zMTYgMzg1OSAtMzE2UTM5MDYgLTMxNiAzOTUyIC0zMjJRMzk1NCAtMzE2IDM5NTQgLTMxM1EzOTU0IC0zMDAgMzk0Ni41IC0yODAuMFEzOTM5IC0yNjAgMzkzMSAtMjQ0UTM5MjcgLTIzNSAzOTE1LjAgLTIxMS41UTM5MDMgLTE4OCAzODg5LjAgLTE1OC41UTM4NzUgLTEyOSAzODY1LjUgLTEwMC41UTM4NTYgLTcyIDM4NTYgLTUyUTM4NTYgLTI2IDM4NzYgLTI2UTM4OTUgLTI2IDM5MjkuMCAtNzAuNVEzOTYzIC0xMTUgMzk5NyAtMTkzUTQwMDkgLTE5MyA0MDA5IC0xODRRMzk5OCAtMTU3IDM5ODEuNSAtMTI1LjBRMzk2NSAtOTMgMzk0NS4wIC02NC41UTM5MjUgLTM2IDM5MDIuMCAtMTcuNVEzODc5IDEgMzg1NCAxUTM4MzUgMSAzODE2LjAgLTE0LjVRMzc5NyAtMzAgMzc5NyAtNjVRMzc5NyAtOTYgMzgwOS4wIC0xMjUuNVEzODIxIC0xNTUgMzgzNi4wIC0xODEuMFEzODUxIC0yMDcgMzg2My4wIC0yMjcuMFEzODc1IC0yNDcgMzg3NSAtMjU5UTM4NzUgLTI3NyAzODUyLjUgLTI4NS4wUTM4MzAgLTI5MyAzNzk0IC0yOTRRMzc3NiAtMjQ4IDM3NjcuMCAtMjI2LjBRMzc1OCAtMjA0IDM3NTAgLTE4NFEzNzM0IC0xODQgMzczOSAtMTk2Wk0zOTk4IC0xOTZRNDAwNiAtMjEzIDQwMTkuMCAtMjUwLjVRNDAzMiAtMjg4IDQwNDYuMCAtMzM0LjBRNDA2MCAtMzgwIDQwNjcgLTQyMVE0MDcwIC00MzcgNDA3OC4wIC00NDQuNVE0MDg2IC00NTIgNDA5NSAtNDUyUTQxMDggLTQ1MiA0MTE5LjAgLTQzOS41UTQxMzAgLTQyNyA0MTMwIC00MDRRNDEzMCAtMzc2IDQxMTMuNSAtMzU2LjBRNDA5NyAtMzM2IDQwNzMgLTMxOFE0MDgzIC0zMTcgNDA5NC4wIC0zMTYuNVE0MTA1IC0zMTYgNDExOCAtMzE2UTQxNjUgLTMxNiA0MjExIC0zMjJRNDIxMyAtMzE2IDQyMTMgLTMxM1E0MjEzIC0zMDAgNDIwNS41IC0yODAuMFE0MTk4IC0yNjAgNDE5MCAtMjQ0UTQxODYgLTIzNSA0MTc0LjAgLTIxMS41UTQxNjIgLTE4OCA0MTQ4LjAgLTE1OC41UTQxMzQgLTEyOSA0MTI0LjUgLTEwMC41UTQxMTUgLTcyIDQxMTUgLTUyUTQxMTUgLTI2IDQxMzUgLTI2UTQxNTQgLTI2IDQxODguMCAtNzAuNVE0MjIyIC0xMTUgNDI1NiAtMTkzUTQyNjggLTE5MyA0MjY4IC0xODRRNDI1NyAtMTU3IDQyNDAuNSAtMTI1LjBRNDIyNCAtOTMgNDIwNC4wIC02NC41UTQxODQgLTM2IDQxNjEuMCAtMTcuNVE0MTM4IDEgNDExMyAxUTQwOTQgMSA0MDc1LjAgLTE0LjVRNDA1NiAtMzAgNDA1NiAtNjVRNDA1NiAtOTYgNDA2OC4wIC0xMjUuNVE0MDgwIC0xNTUgNDA5NS4wIC0xODEuMFE0MTEwIC0yMDcgNDEyMi4wIC0yMjcuMFE0MTM0IC0yNDcgNDEzNCAtMjU5UTQxMzQgLTI3NyA0MTExLjUgLTI4NS4wUTQwODkgLTI5MyA0MDUzIC0yOTRRNDAzNSAtMjQ4IDQwMjYuMCAtMjI2LjBRNDAxNyAtMjA0IDQwMDkgLTE4NFEzOTkzIC0xODQgMzk5OCAtMTk2WiIvPjwvc3ZnPg==",emboss:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMTguMiAtOTUyLjIgNDUyMi40IDE0MDcuNCI+PGRlZnM+PGZpbHRlciBpZD0icGFwZXItcmVsaWVmIiB4PSItMTAlIiB5PSItMjUlIiB3aWR0aD0iMTIwJSIgaGVpZ2h0PSIxNjAlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249Ii4zMiIgcmVzdWx0PSJzb2Z0Ii8+CjxmZU9mZnNldCBpbj0ic29mdCIgZHg9Ii41IiBkeT0iLjg1IiByZXN1bHQ9ImNhc3QiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiM4ZTgwNjYiIGZsb29kLW9wYWNpdHk9Ii41NSIgcmVzdWx0PSJzaGFkZSIvPgo8ZmVDb21wb3NpdGUgaW49InNoYWRlIiBpbjI9ImNhc3QiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJzaGFkb3ciLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii40NSIgZHk9Ii42NSIgcmVzdWx0PSJkb3duIi8+CjxmZUNvbXBvc2l0ZSBpbj0iU291cmNlQWxwaGEiIGluMj0iZG93biIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJ1cHBlckVkZ2UiLz4KPGZlRmxvb2QgZmxvb2QtY29sb3I9IiNmZmZlZjciIGZsb29kLW9wYWNpdHk9IjEiIHJlc3VsdD0ibGlnaHQiLz4KPGZlQ29tcG9zaXRlIGluPSJsaWdodCIgaW4yPSJ1cHBlckVkZ2UiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJoaWdobGlnaHQiLz4KPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgZHg9Ii0uNCIgZHk9Ii0uNiIgcmVzdWx0PSJ1cCIvPgo8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUFscGhhIiBpbjI9InVwIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9Imxvd2VyRWRnZSIvPgo8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2IyYTU4YiIgZmxvb2Qtb3BhY2l0eT0iLjY1IiByZXN1bHQ9Imxvd2VyU2hhZGUiLz4KPGZlQ29tcG9zaXRlIGluPSJsb3dlclNoYWRlIiBpbjI9Imxvd2VyRWRnZSIgb3BlcmF0b3I9ImluIiByZXN1bHQ9Imxvd2VyIi8+CjxmZU1lcmdlPjxmZU1lcmdlTm9kZSBpbj0ic2hhZG93Ii8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PGZlTWVyZ2VOb2RlIGluPSJoaWdobGlnaHQiLz48ZmVNZXJnZU5vZGUgaW49Imxvd2VyIi8+PC9mZU1lcmdlPgo8L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0iI2U4ZTFjZiIgZmlsdGVyPSJ1cmwoI3BhcGVyLXJlbGllZikiPjxwYXRoIGQ9Ik0xMzY1IDExNVExMzUwIDExMyAxMzI0LjAgMTA3LjVRMTI5OCAxMDIgMTI3MS4wIDg2LjBRMTI0NCA3MCAxMjI1LjAgMzcuNVExMjA2IDUgMTIwNiAtNDlRMTIwNiAtMTExIDEyMzEuNSAtMTg1LjVRMTI1NyAtMjYwIDEyOTQuMCAtMzQxLjBRMTMzMSAtNDIyIDEzNjUgLTUwMVExMzkyIC01NjQgMTM5MiAtNTk3UTEzOTIgLTYzMCAxMzY3IC02MzBRMTMzOSAtNjMwIDEyODMuNSAtNTg1LjVRMTIyOCAtNTQxIDExNTUgLTQ1MVExMTM2IC00MjcgMTEwNi4wIC0zODQuNVExMDc2IC0zNDIgMTA0Mi4wIC0yOTAuNVExMDA4IC0yMzkgOTc1LjUgLTE4Ni41UTk0MyAtMTM0IDkxOC41IC05MC4wUTg5NCAtNDYgODgzIC0yMFE4NzAgMTEgODUzLjAgMjIuNVE4MzYgMzQgODIxIDM0UTgwOCAzNCA3OTkgMjdRNzg5IDIwIDc4OSAxMFE3ODkgNCA3OTIgMFE3OTggLTEyIDgyMi4wIC01NS4wUTg0NiAtOTggODc4LjAgLTE2OS4wUTkxMCAtMjQwIDkzOSAtMzM0UTk0OCAtMzYzIDk1Ny41IC00MDEuMFE5NjcgLTQzOSA5NzUuMCAtNDc5LjVROTgzIC01MjAgOTg4LjUgLTU1NS41UTk5NCAtNTkxIDk5NCAtNjEzUTk5NCAtNjQ4IDk4Mi4wIC02NjQuNVE5NzAgLTY4MSA5NTAgLTY4MVE5MjggLTY4MSA5MDAuMCAtNjYyLjBRODcyIC02NDMgODQzIC02MDdRNzkzIC01NDQgNzU1LjAgLTQ5MC41UTcxNyAtNDM3IDY4NS41IC0zODQuMFE2NTQgLTMzMSA2MjMuNSAtMjcxLjBRNTkzIC0yMTEgNTU5LjAgLTEzNi41UTUyNSAtNjIgNDgxIDM2UTQ3NCA1MiA0NTcuNSA1OS4wUTQ0MSA2NiA0MjcgNjZRNDEzIDY2IDQwNC4wIDYwLjBRMzk1IDU0IDM5OCA0M1E0MjAgOCA0NDcuMCAtNDQuNVE0NzQgLTk3IDUwMi4wIC0xNjEuMFE1MzAgLTIyNSA1NTYuMCAtMjk0LjBRNTgyIC0zNjMgNjAyLjUgLTQyOS4wUTYyMyAtNDk1IDYzNS4wIC01NTMuMFE2NDcgLTYxMSA2NDcgLTY1MlE2NDcgLTcyOSA2MTQuNSAtNzYyLjBRNTgyIC03OTUgNTMxIC03OTVRNDg2IC03OTUgNDMyLjAgLTc3My4wUTM3OCAtNzUxIDMyMy41IC03MTMuMFEyNjkgLTY3NSAyMjEgLTYyN1ExNTIgLTU1OCAxMTIuNSAtNDc3LjBRNzMgLTM5NiA3MyAtMzEzUTczIC0yNTcgOTQuMCAtMjE4LjBRMTE1IC0xNzkgMTQ5LjUgLTE1OS4wUTE4NCAtMTM5IDIyNiAtMTM5UTI2OSAtMTM5IDMwNi41IC0xNjAuNVEzNDQgLTE4MiAzNzIuNSAtMjE2LjVRNDAxIC0yNTEgNDE3LjAgLTI4OS41UTQzMyAtMzI4IDQzMyAtMzYyUTQzMyAtMzkxIDQxNy4wIC00MTAuMFE0MDEgLTQyOSAzNjYgLTQyOVEzNjIgLTQyOSAzNTcuNSAtNDI4LjVRMzUzIC00MjggMzQ4IC00MjhIMzQ1UTMzOCAtNDI4IDMzMi4wIC00MzAuNVEzMjYgLTQzMyAzMjYgLTQzN1EzMjYgLTQ0MSAzMzYuNSAtNDQ2LjBRMzQ3IC00NTEgMzc1IC00NTFRNDIwIC00NTEgNDQyLjUgLTQyNC41UTQ2NSAtMzk4IDQ2NSAtMzU3UTQ2NSAtMzE3IDQ0NC41IC0yNzUuMFE0MjQgLTIzMyAzODkuMCAtMTk3LjBRMzU0IC0xNjEgMzEwLjUgLTEzOS4wUTI2NyAtMTE3IDIyMSAtMTE3UTE2NyAtMTE3IDEyMC41IC0xNDIuMFE3NCAtMTY3IDQ2LjAgLTIxNC41UTE4IC0yNjIgMTggLTMyOFExOCAtMzkxIDQ0LjAgLTQ1Mi41UTcwIC01MTQgMTExLjUgLTU2OC41UTE1MyAtNjIzIDIwMCAtNjY1UTI1MiAtNzEyIDMxMC4wIC03NDUuNVEzNjggLTc3OSA0MjUuNSAtNzk3LjVRNDgzIC04MTYgNTMzIC04MTZRNjA3IC04MTYgNjU1LjUgLTc3Mi4wUTcwNCAtNzI4IDcwNCAtNjMwUTcwNCAtNTkwIDY5My4wIC01MzguNVE2ODIgLTQ4NyA2NjcuMCAtNDM1LjVRNjUyIC0zODQgNjM4IC0zNDRINjQwUTY3NiAtNDA5IDcwNC41IC00NTUuNVE3MzMgLTUwMiA3NjIuMCAtNTQyLjBRNzkxIC01ODIgODI3IC02MjZRODU4IC02NjMgODk4LjAgLTY4NS4wUTkzOCAtNzA3IDk3NSAtNzA3UTEwMDggLTcwNyAxMDMxLjAgLTY4NS4wUTEwNTQgLTY2MyAxMDU0IC02MTBRMTA1NCAtNjA0IDEwNTQuMCAtNjAwLjBRMTA1NCAtNTk2IDEwNTMgLTU4OFExMDQ0IC00OTIgMTAxNS4wIC0zOTkuNVE5ODYgLTMwNyA5NTUgLTIxM1E5ODYgLTI2MSAxMDM5LjAgLTMzNS4wUTEwOTIgLTQwOSAxMTU1IC00ODhRMTIzMiAtNTg0IDEyOTguMCAtNjMyLjBRMTM2NCAtNjgwIDE0MDcgLTY4MFExNDYxIC02ODAgMTQ2MSAtNjE0UTE0NjEgLTU4OSAxNDUxLjUgLTU1NC4wUTE0NDIgLTUxOSAxNDIyIC00ODBRMTQwMCAtNDM2IDEzNzMuNSAtMzc4LjVRMTM0NyAtMzIxIDEzMjMuMCAtMjU4LjBRMTI5OSAtMTk1IDEyODMuNSAtMTM0LjVRMTI2OCAtNzQgMTI2OCAtMjNRMTI2OCAzMiAxMjkzLjUgNjUuNVExMzE5IDk5IDEzODIgOTlIMTM4OFExNDAzIDk5IDE0MDMgMTA1UTE0MDMgMTA5IDEzOTMuMCAxMTMuMFExMzgzIDExNyAxMzY1IDExNVpNMTI5OSA4UTEzMzUgLTY1IDEzNjguMCAtMTM2LjVRMTQwMSAtMjA4IDE0MzYgLTI3M1ExNDU2IC0zMDkgMTQ3MC4wIC0zMjMuNVExNDg0IC0zMzggMTUwNyAtMzM4UTE1MTUgLTMzOCAxNTI0LjAgLTMzNS41UTE1MzMgLTMzMyAxNTQyIC0zMzNRMTU0OCAtMzMzIDE1NTEgLTMzNFExNTM3IC0zMjYgMTUxNC41IC0yOTQuNVExNDkyIC0yNjMgMTQ2OS4wIC0yMjIuMFExNDQ2IC0xODEgMTQyOCAtMTQ1UTE0NDcgLTE2OCAxNDY4LjAgLTE5MS4wUTE0ODkgLTIxNCAxNTE0IC0yMzVRMTUzOCAtMjU2IDE1NzEuNSAtMjc4LjVRMTYwNSAtMzAxIDE2MzcuMCAtMzE2LjBRMTY2OSAtMzMxIDE2ODggLTMzMVExNjk1IC0zMzEgMTY5OCAtMzMwUTE2OTggLTMzMCAxNjg3LjAgLTMxMC41UTE2NzYgLTI5MSAxNjU5LjUgLTI1OS41UTE2NDMgLTIyOCAxNjI2LjAgLTE5Mi41UTE2MDkgLTE1NyAxNTk1LjUgLTEyNC41UTE1ODIgLTkyIDE1NzggLTcwUTE1NzUgLTU3IDE1NzUgLTQ2UTE1NzUgLTMwIDE1ODEuMCAtMjUuMFExNTg3IC0yMCAxNTk0IC0yMFExNjEzIC0yMCAxNjMzLjAgLTM3LjBRMTY1MyAtNTQgMTY3MS41IC04MC41UTE2OTAgLTEwNyAxNzA2LjAgLTEzNy4wUTE3MjIgLTE2NyAxNzMzIC0xOTNRMTc0NSAtMTkzIDE3NDUgLTE4NFExNzM0IC0xNTcgMTcxNy41IC0xMjQuNVExNzAxIC05MiAxNjgwLjUgLTYzLjBRMTY2MCAtMzQgMTYzNS4wIC0xNS4wUTE2MTAgNCAxNTgxIDRRMTU2MSA0IDE1MzkuNSAtMTAuMFExNTE4IC0yNCAxNTE4IC02MlExNTE4IC03MyAxNTIwLjAgLTg1LjVRMTUyMiAtOTggMTUyNyAtMTEzUTE1MzUgLTEzMyAxNTQ2LjAgLTE1Ni4wUTE1NTcgLTE3OSAxNTgyIC0yMTlRMTU4OSAtMjMwIDE1OTAuNSAtMjM2LjBRMTU5MiAtMjQyIDE1OTIgLTI0NlExNTkyIC0yNTggMTU4MSAtMjU4UTE1NzIgLTI1OCAxNTU0LjUgLTI0OC4wUTE1MzcgLTIzOCAxNTExIC0yMTNRMTQ4NiAtMTg5IDE0NTEuNSAtMTQ1LjBRMTQxNyAtMTAxIDEzNzIgLTE1UTEzNjUgLTIgMTM1Ni41IC0xLjBRMTM0OCAwIDEzMzMgMVExMzIzIDIgMTMxNC4wIDIuNVExMzA1IDMgMTI5OSA4Wk0xMzcyIDMxOVExMzIwIDMxOSAxMjk4LjUgMjk4LjVRMTI3NyAyNzggMTI3NyAyNTBRMTI3NyAyMjMgMTI5MiAxOTZRMTMwNiAxNjcgMTMzMS4wIDE0Ni41UTEzNTYgMTI2IDEzODYgMTEyUTE0MzcgODggMTUwMy41IDczLjBRMTU3MCA1OCAxNjMxIDQwUTE2MzkgMjYgMTY0Ny41IDExLjBRMTY1NiAtNCAxNjYzIC0xOFExNjgzIC01OCAxNzAwLjAgLTk3LjVRMTcxNyAtMTM3IDE3NDIgLTE4M1ExNzMzIC0xODMgMTczMyAtMTkzTDE3NzcgLTI5NFExNzc4IC0yOTYgMTc3OS4wIC0yOTkuNVExNzgwIC0zMDMgMTc4MCAtMzA3UTE3ODAgLTMxOCAxNzc1LjAgLTMyNS41UTE3NzAgLTMzMyAxNzY4IC0zMzZMMTgyMyAtMzM4SDE4MjhRMTg1MCAtMzM4IDE4NTAgLTMyNFExODUwIC0zMTcgMTg0NCAtMzAyTDE3NjQgLTExNFExNzUwIC04MSAxNzM0LjAgLTQ4LjBRMTcxOCAtMTUgMTcwMSAxOVExNzcxIC04IDE4MTIuNSAtNDcuNVExODU0IC04NyAxODc2LjUgLTEyNi41UTE4OTkgLTE2NiAxOTExIC0xOTNRMTkyMyAtMTkzIDE5MjMgLTE4NFExOTEzIC0xNjIgMTg5Ny4wIC0xMzEuNVExODgxIC0xMDEgMTg1NS4wIC02Ny41UTE4MjkgLTM0IDE3ODguMCAtMy4wUTE3NDcgMjggMTY4NSA1MVExNjYxIDk0IDE2MzAuMCAxNDAuNVExNTk5IDE4NyAxNTYwLjAgMjI3LjVRMTUyMSAyNjggMTQ3NC41IDI5My41UTE0MjggMzE5IDEzNzIgMzE5Wk0xMzQ4IDI5OVExMzgxIDI5OSAxNDE2LjUgMjc5LjBRMTQ1MiAyNTkgMTQ4NS4wIDIyOC41UTE1MTggMTk4IDE1NDUuNSAxNjYuMFExNTczIDEzNCAxNTkwIDExMFExNTk2IDEwMiAxNjAxLjAgOTIuMFExNjA2IDgyIDE2MTEgNzJRMTU2MyA4NSAxNTA1LjAgMTAwLjVRMTQ0NyAxMTYgMTQwMyAxMzVRMTM1NSAxNTUgMTMyOC4wIDE5MS41UTEzMDEgMjI4IDEzMDEgMjU3UTEzMDEgMjc2IDEzMTIuNSAyODcuNVExMzI0IDI5OSAxMzQ4IDI5OVpNMTg1MiAtNDAwUTE4MzkgLTQwMCAxODI5LjUgLTQxMC4wUTE4MjAgLTQyMCAxODIwIC00MzRRMTgyMCAtNDUxIDE4MzQuMCAtNDY0LjVRMTg0OCAtNDc4IDE4NjUgLTQ3OFExODc5IC00NzggMTg4OS4wIC00NjkuMFExODk5IC00NjAgMTg5OSAtNDQ2UTE4OTkgLTQyOCAxODg1LjAgLTQxNC4wUTE4NzEgLTQwMCAxODUyIC00MDBaTTIxMjggM1EyMTA1IDMgMjA4Ny41IC0xMC4wUTIwNzAgLTIzIDIwNzAgLTYzUTIwNzAgLTgwIDIwNzIuNSAtOTUuMFEyMDc1IC0xMTAgMjA3OSAtMTI3UTIwNzAgLTExMiAyMDU0LjAgLTkwLjBRMjAzOCAtNjggMjAxOC41IC00Ny4wUTE5OTkgLTI2IDE5NzguNSAtMTIuMFExOTU4IDIgMTk0MCAyUTE5MTQgMiAxODk4LjAgLTIxLjVRMTg4MiAtNDUgMTg4MiAtODNRMTg4MiAtMTI0IDE5MDEuMCAtMTcxLjBRMTkyMCAtMjE4IDE5NTMuMCAtMjYxLjBRMTk4NiAtMzA0IDIwMjkuMCAtMzMxLjBRMjA3MiAtMzU4IDIxMTkgLTM1OFEyMTQyIC0zNTggMjE2My4wIC0zNTAuNVEyMTg0IC0zNDMgMjIwMCAtMzI2UTIyMDcgLTMxOSAyMjA3IC0zMTBRMjIwNyAtMzA0IDIyMDIuMCAtMzAwLjBRMjE5NyAtMjk2IDIxODkgLTI5OFEyMTc4IC0zMzMgMjE0MiAtMzMzUTIxMjUgLTMzMyAyMTAzIC0zMjJRMjA3NiAtMzA4IDIwNDUuNSAtMjc3LjVRMjAxNSAtMjQ3IDE5ODguNSAtMjA4LjVRMTk2MiAtMTcwIDE5NDUuMCAtMTMxLjBRMTkyOCAtOTIgMTkyOCAtNjBRMTkyOCAtMjcgMTk1MyAtMjdRMTk3NSAtMjcgMTk5OC41IC00OC4wUTIwMjIgLTY5IDIwNDMuNSAtMTAwLjVRMjA2NSAtMTMyIDIwODMuMCAtMTYzLjBRMjEwMSAtMTk0IDIxMTEgLTIxM1EyMTI2IC0yNDAgMjEzOS4wIC0yNTguMFEyMTUyIC0yNzYgMjE3NiAtMjc2UTIxODcgLTI3NiAyMTk4LjAgLTI3My4wUTIyMDkgLTI3MCAyMjIxIC0yNzJRMjE5MSAtMjQyIDIxNjguNSAtMjAxLjBRMjE0NiAtMTYwIDIxMzQuMCAtMTIwLjVRMjEyMiAtODEgMjEyMiAtNTRRMjEyMiAtMjQgMjE0MiAtMjRRMjE1OCAtMjQgMjE3Ni41IC00Mi4wUTIxOTUgLTYwIDIyMTIuNSAtODcuNVEyMjMwIC0xMTUgMjI0NS4wIC0xNDMuNVEyMjYwIC0xNzIgMjI2OSAtMTkzUTIyNzQgLTE5MyAyMjc3LjUgLTE5Mi4wUTIyODEgLTE5MSAyMjgxIC0xODRRMjI4MCAtMTgwIDIyNzcuNSAtMTc1LjVRMjI3NSAtMTcxIDIyNzAgLTE2MFEyMjYyIC0xNDQgMjI0OC4wIC0xMTcuMFEyMjM0IC05MCAyMjE1LjAgLTYyLjVRMjE5NiAtMzUgMjE3NC4wIC0xNi4wUTIxNTIgMyAyMTI4IDNaTTIyOTggMFEyMjg3IDAgMjI3MS41IC01LjBRMjI1NiAtMTAgMjI0NC41IC0yMy41UTIyMzMgLTM3IDIyMzMgLTY0UTIyMzMgLTkwIDIyNTAuMCAtMTI0LjBRMjI2NyAtMTU4IDIyODAgLTE4NFEyMjY5IC0xODQgMjI2OSAtMTkzUTIyNzAgLTE5NiAyMjc4LjAgLTIxMi4wUTIyODYgLTIyOCAyMjk3LjAgLTI1MC4wUTIzMDggLTI3MiAyMzE4LjUgLTI5Mi41UTIzMjkgLTMxMyAyMzM1IC0zMjRRMjM0NyAtMzQ2IDIzNzMgLTM0NkgyNDM1UTI0MTggLTMzMyAyNDA0LjUgLTMxNy41UTIzOTEgLTMwMiAyMzcxIC0yNjFRMjM3MSAtMjYxIDIzNjQuMCAtMjQ3LjBRMjM1NyAtMjMzIDIzNDYuNSAtMjExLjVRMjMzNiAtMTkwIDIzMjUuNSAtMTY4LjBRMjMxNSAtMTQ2IDIzMDggLTEzMVEyMjk1IC0xMDMgMjI5MS4wIC04Ni41UTIyODcgLTcwIDIyODcgLTU2UTIyODcgLTIzIDIzMDkgLTIzUTIzMzMgLTIzIDIzNjcgLTYyUTIzOTUgLTk1IDI0MjIuMCAtMTQxLjBRMjQ0OSAtMTg3IDI0NzMuNSAtMjM2LjBRMjQ5OCAtMjg1IDI1MTcgLTMyNFEyNTI4IC0zNDYgMjU1NiAtMzQ2SDI2MTFRMjU4OSAtMzI4IDI1NjYuNSAtMjkyLjBRMjU0NCAtMjU2IDI1MTcgLTIwMFEyNTEwIC0xODUgMjQ5OS4wIC0xNjIuMFEyNDg4IC0xMzkgMjQ3OS41IC0xMTMuMFEyNDcxIC04NyAyNDcxIC02MVEyNDcxIC0yNiAyNDk2IC0yNlEyNTMwIC0yNiAyNTYyLjAgLTczLjBRMjU5NCAtMTIwIDI2MjUgLTE5M1EyNjMzIC0xOTMgMjYzNC41IC0xOTIuMFEyNjM2IC0xOTEgMjYzNyAtMTg0UTI2MjYgLTE1NyAyNjEwLjUgLTEyNS41UTI1OTUgLTk0IDI1NzUuNSAtNjUuMFEyNTU2IC0zNiAyNTMyLjUgLTE4LjBRMjUwOSAwIDI0ODEgMFEyNDU2IDAgMjQ0MC4wIC0xOC41UTI0MjQgLTM3IDI0MjQgLTcxUTI0MjQgLTk4IDI0MzQgLTEyOVEyNDE3IC05OSAyMzk1LjAgLTY5LjBRMjM3MyAtMzkgMjM0OC4wIC0xOS41UTIzMjMgMCAyMjk4IDBaTTI0NjggMjczUTI0NTYgMjczIDI0NDMuNSAyNjkuNVEyNDMxIDI2NiAyNDE4IDI2OFEyNDI0IDI2MiAyNDQxLjAgMjMzLjVRMjQ1OCAyMDUgMjQ4MS4wIDE2Mi41UTI1MDQgMTIwIDI1MjguNSA3MC41UTI1NTMgMjEgMjU3Ni4wIC0yNy41UTI1OTkgLTc2IDI2MTUuNSAtMTE3LjVRMjYzMiAtMTU5IDI2MzcgLTE4NFEyNjMyIC0xODQgMjYyOC4wIC0xODYuMFEyNjI0IC0xODggMjYyNSAtMTkzUTI2MjUgLTE5MyAyNjMxLjAgLTIxMS4wUTI2MzcgLTIyOSAyNjQzLjAgLTI1NC41UTI2NDkgLTI4MCAyNjQ5IC0zMDFRMjY0OSAtMzE1IDI2NDYuMCAtMzI1LjBRMjY0MyAtMzM1IDI2MzUgLTMzNkwyNjg1IC0zNDRRMjY5MSAtMzQ1IDI2OTYuMCAtMzQ1LjVRMjcwMSAtMzQ2IDI3MDUgLTM0NlEyNzE0IC0zNDYgMjcxNy41IC0zMzkuNVEyNzIxIC0zMzMgMjcyMSAtMzEzUTI3MjEgLTI4OCAyNzEyLjUgLTI0OS41UTI3MDQgLTIxMSAyNjkzIC0xODJRMjcwNCAtMjAwIDI3MjEuNSAtMjI4LjBRMjczOSAtMjU2IDI3NjIuMCAtMjg1LjBRMjc4NSAtMzE0IDI4MTAuMCAtMzMzLjVRMjgzNSAtMzUzIDI4NTkgLTM1M1EyODY0IC0zNTMgMjg3MiAtMzUxUTI5MDAgLTM0NCAyOTExLjUgLTMyMy41UTI5MjMgLTMwMyAyOTIzIC0yNzVRMjkyMyAtMjQ1IDI5MTEuNSAtMjA5LjBRMjkwMCAtMTczIDI4ODEuMCAtMTM4LjVRMjg2MiAtMTA0IDI4MzkgLTc2UTI4MTEgLTQxIDI3NzIuMCAtMjAuMFEyNzMzIDEgMjY5MiAxUTI2NTUgMSAyNjIzIC0xOEwyNTI4IDIyMVEyNTE0IDI1MSAyNTAxLjAgMjYyLjBRMjQ4OCAyNzMgMjQ2OCAyNzNaTTI2NjAgLTIwUTI2ODggLTIwIDI3MjMuMCAtNDYuMFEyNzU4IC03MiAyNzkwLjUgLTExMi41UTI4MjMgLTE1MyAyODQ1IC0xOTRRMjg2MCAtMjIyIDI4NjcuMCAtMjQ1LjVRMjg3NCAtMjY5IDI4NzQgLTI4NlEyODc0IC0zMjUgMjg0NiAtMzI1UTI4MzMgLTMyNSAyODEyLjUgLTMxMS4wUTI3OTIgLTI5NyAyNzY1IC0yNjBRMjczNiAtMjIwIDI3MDEuNSAtMTU5LjVRMjY2NyAtOTkgMjYzMSAtMzJRMjY0MyAtMjAgMjY2MCAtMjBaTTI5NjIgLTE5NlEyOTcwIC0yMTMgMjk4My4wIC0yNTAuNVEyOTk2IC0yODggMzAxMC4wIC0zMzQuMFEzMDI0IC0zODAgMzAzMSAtNDIxUTMwMzQgLTQzNyAzMDQyLjAgLTQ0NC41UTMwNTAgLTQ1MiAzMDU5IC00NTJRMzA3MiAtNDUyIDMwODMuMCAtNDM5LjVRMzA5NCAtNDI3IDMwOTQgLTQwNFEzMDk0IC0zNzYgMzA3Ny41IC0zNTYuMFEzMDYxIC0zMzYgMzAzNyAtMzE4UTMwNDcgLTMxNyAzMDU4LjAgLTMxNi41UTMwNjkgLTMxNiAzMDgyIC0zMTZRMzEyOSAtMzE2IDMxNzUgLTMyMlEzMTc3IC0zMTYgMzE3NyAtMzEzUTMxNzcgLTMwMCAzMTY5LjUgLTI4MC4wUTMxNjIgLTI2MCAzMTU0IC0yNDRRMzE1MCAtMjM1IDMxMzguMCAtMjExLjVRMzEyNiAtMTg4IDMxMTIuMCAtMTU4LjVRMzA5OCAtMTI5IDMwODguNSAtMTAwLjVRMzA3OSAtNzIgMzA3OSAtNTJRMzA3OSAtMjYgMzA5OSAtMjZRMzExOCAtMjYgMzE1Mi4wIC03MC41UTMxODYgLTExNSAzMjIwIC0xOTNRMzIzMiAtMTkzIDMyMzIgLTE4NFEzMjIxIC0xNTcgMzIwNC41IC0xMjUuMFEzMTg4IC05MyAzMTY4LjAgLTY0LjVRMzE0OCAtMzYgMzEyNS4wIC0xNy41UTMxMDIgMSAzMDc3IDFRMzA1OCAxIDMwMzkuMCAtMTQuNVEzMDIwIC0zMCAzMDIwIC02NVEzMDIwIC05NiAzMDMyLjAgLTEyNS41UTMwNDQgLTE1NSAzMDU5LjAgLTE4MS4wUTMwNzQgLTIwNyAzMDg2LjAgLTIyNy4wUTMwOTggLTI0NyAzMDk4IC0yNTlRMzA5OCAtMjc3IDMwNzUuNSAtMjg1LjBRMzA1MyAtMjkzIDMwMTcgLTI5NFEyOTk5IC0yNDggMjk5MC4wIC0yMjYuMFEyOTgxIC0yMDQgMjk3MyAtMTg0UTI5NTcgLTE4NCAyOTYyIC0xOTZaTTMyMjEgLTE5NlEzMjI5IC0yMTMgMzI0Mi4wIC0yNTAuNVEzMjU1IC0yODggMzI2OS4wIC0zMzQuMFEzMjgzIC0zODAgMzI5MCAtNDIxUTMyOTMgLTQzNyAzMzAxLjAgLTQ0NC41UTMzMDkgLTQ1MiAzMzE4IC00NTJRMzMzMSAtNDUyIDMzNDIuMCAtNDM5LjVRMzM1MyAtNDI3IDMzNTMgLTQwNFEzMzUzIC0zNzYgMzMzNi41IC0zNTYuMFEzMzIwIC0zMzYgMzI5NiAtMzE4UTMzMDYgLTMxNyAzMzE3LjAgLTMxNi41UTMzMjggLTMxNiAzMzQxIC0zMTZRMzM4OCAtMzE2IDM0MzQgLTMyMlEzNDM2IC0zMTYgMzQzNiAtMzEzUTM0MzYgLTMwMCAzNDI4LjUgLTI4MC4wUTM0MjEgLTI2MCAzNDEzIC0yNDRRMzQwOSAtMjM1IDMzOTcuMCAtMjExLjVRMzM4NSAtMTg4IDMzNzEuMCAtMTU4LjVRMzM1NyAtMTI5IDMzNDcuNSAtMTAwLjVRMzMzOCAtNzIgMzMzOCAtNTJRMzMzOCAtMjYgMzM1OCAtMjZRMzM3NyAtMjYgMzQxMS4wIC03MC41UTM0NDUgLTExNSAzNDc5IC0xOTNRMzQ5MSAtMTkzIDM0OTEgLTE4NFEzNDgwIC0xNTcgMzQ2My41IC0xMjUuMFEzNDQ3IC05MyAzNDI3LjAgLTY0LjVRMzQwNyAtMzYgMzM4NC4wIC0xNy41UTMzNjEgMSAzMzM2IDFRMzMxNyAxIDMyOTguMCAtMTQuNVEzMjc5IC0zMCAzMjc5IC02NVEzMjc5IC05NiAzMjkxLjAgLTEyNS41UTMzMDMgLTE1NSAzMzE4LjAgLTE4MS4wUTMzMzMgLTIwNyAzMzQ1LjAgLTIyNy4wUTMzNTcgLTI0NyAzMzU3IC0yNTlRMzM1NyAtMjc3IDMzMzQuNSAtMjg1LjBRMzMxMiAtMjkzIDMyNzYgLTI5NFEzMjU4IC0yNDggMzI0OS4wIC0yMjYuMFEzMjQwIC0yMDQgMzIzMiAtMTg0UTMyMTYgLTE4NCAzMjIxIC0xOTZaTTM0ODAgLTE5NlEzNDg4IC0yMTMgMzUwMS4wIC0yNTAuNVEzNTE0IC0yODggMzUyOC4wIC0zMzQuMFEzNTQyIC0zODAgMzU0OSAtNDIxUTM1NTIgLTQzNyAzNTYwLjAgLTQ0NC41UTM1NjggLTQ1MiAzNTc3IC00NTJRMzU5MCAtNDUyIDM2MDEuMCAtNDM5LjVRMzYxMiAtNDI3IDM2MTIgLTQwNFEzNjEyIC0zNzYgMzU5NS41IC0zNTYuMFEzNTc5IC0zMzYgMzU1NSAtMzE4UTM1NjUgLTMxNyAzNTc2LjAgLTMxNi41UTM1ODcgLTMxNiAzNjAwIC0zMTZRMzY0NyAtMzE2IDM2OTMgLTMyMlEzNjk1IC0zMTYgMzY5NSAtMzEzUTM2OTUgLTMwMCAzNjg3LjUgLTI4MC4wUTM2ODAgLTI2MCAzNjcyIC0yNDRRMzY2OCAtMjM1IDM2NTYuMCAtMjExLjVRMzY0NCAtMTg4IDM2MzAuMCAtMTU4LjVRMzYxNiAtMTI5IDM2MDYuNSAtMTAwLjVRMzU5NyAtNzIgMzU5NyAtNTJRMzU5NyAtMjYgMzYxNyAtMjZRMzYzNiAtMjYgMzY3MC4wIC03MC41UTM3MDQgLTExNSAzNzM4IC0xOTNRMzc1MCAtMTkzIDM3NTAgLTE4NFEzNzM5IC0xNTcgMzcyMi41IC0xMjUuMFEzNzA2IC05MyAzNjg2LjAgLTY0LjVRMzY2NiAtMzYgMzY0My4wIC0xNy41UTM2MjAgMSAzNTk1IDFRMzU3NiAxIDM1NTcuMCAtMTQuNVEzNTM4IC0zMCAzNTM4IC02NVEzNTM4IC05NiAzNTUwLjAgLTEyNS41UTM1NjIgLTE1NSAzNTc3LjAgLTE4MS4wUTM1OTIgLTIwNyAzNjA0LjAgLTIyNy4wUTM2MTYgLTI0NyAzNjE2IC0yNTlRMzYxNiAtMjc3IDM1OTMuNSAtMjg1LjBRMzU3MSAtMjkzIDM1MzUgLTI5NFEzNTE3IC0yNDggMzUwOC4wIC0yMjYuMFEzNDk5IC0yMDQgMzQ5MSAtMTg0UTM0NzUgLTE4NCAzNDgwIC0xOTZaTTM3MzkgLTE5NlEzNzQ3IC0yMTMgMzc2MC4wIC0yNTAuNVEzNzczIC0yODggMzc4Ny4wIC0zMzQuMFEzODAxIC0zODAgMzgwOCAtNDIxUTM4MTEgLTQzNyAzODE5LjAgLTQ0NC41UTM4MjcgLTQ1MiAzODM2IC00NTJRMzg0OSAtNDUyIDM4NjAuMCAtNDM5LjVRMzg3MSAtNDI3IDM4NzEgLTQwNFEzODcxIC0zNzYgMzg1NC41IC0zNTYuMFEzODM4IC0zMzYgMzgxNCAtMzE4UTM4MjQgLTMxNyAzODM1LjAgLTMxNi41UTM4NDYgLTMxNiAzODU5IC0zMTZRMzkwNiAtMzE2IDM5NTIgLTMyMlEzOTU0IC0zMTYgMzk1NCAtMzEzUTM5NTQgLTMwMCAzOTQ2LjUgLTI4MC4wUTM5MzkgLTI2MCAzOTMxIC0yNDRRMzkyNyAtMjM1IDM5MTUuMCAtMjExLjVRMzkwMyAtMTg4IDM4ODkuMCAtMTU4LjVRMzg3NSAtMTI5IDM4NjUuNSAtMTAwLjVRMzg1NiAtNzIgMzg1NiAtNTJRMzg1NiAtMjYgMzg3NiAtMjZRMzg5NSAtMjYgMzkyOS4wIC03MC41UTM5NjMgLTExNSAzOTk3IC0xOTNRNDAwOSAtMTkzIDQwMDkgLTE4NFEzOTk4IC0xNTcgMzk4MS41IC0xMjUuMFEzOTY1IC05MyAzOTQ1LjAgLTY0LjVRMzkyNSAtMzYgMzkwMi4wIC0xNy41UTM4NzkgMSAzODU0IDFRMzgzNSAxIDM4MTYuMCAtMTQuNVEzNzk3IC0zMCAzNzk3IC02NVEzNzk3IC05NiAzODA5LjAgLTEyNS41UTM4MjEgLTE1NSAzODM2LjAgLTE4MS4wUTM4NTEgLTIwNyAzODYzLjAgLTIyNy4wUTM4NzUgLTI0NyAzODc1IC0yNTlRMzg3NSAtMjc3IDM4NTIuNSAtMjg1LjBRMzgzMCAtMjkzIDM3OTQgLTI5NFEzNzc2IC0yNDggMzc2Ny4wIC0yMjYuMFEzNzU4IC0yMDQgMzc1MCAtMTg0UTM3MzQgLTE4NCAzNzM5IC0xOTZaTTM5OTggLTE5NlE0MDA2IC0yMTMgNDAxOS4wIC0yNTAuNVE0MDMyIC0yODggNDA0Ni4wIC0zMzQuMFE0MDYwIC0zODAgNDA2NyAtNDIxUTQwNzAgLTQzNyA0MDc4LjAgLTQ0NC41UTQwODYgLTQ1MiA0MDk1IC00NTJRNDEwOCAtNDUyIDQxMTkuMCAtNDM5LjVRNDEzMCAtNDI3IDQxMzAgLTQwNFE0MTMwIC0zNzYgNDExMy41IC0zNTYuMFE0MDk3IC0zMzYgNDA3MyAtMzE4UTQwODMgLTMxNyA0MDk0LjAgLTMxNi41UTQxMDUgLTMxNiA0MTE4IC0zMTZRNDE2NSAtMzE2IDQyMTEgLTMyMlE0MjEzIC0zMTYgNDIxMyAtMzEzUTQyMTMgLTMwMCA0MjA1LjUgLTI4MC4wUTQxOTggLTI2MCA0MTkwIC0yNDRRNDE4NiAtMjM1IDQxNzQuMCAtMjExLjVRNDE2MiAtMTg4IDQxNDguMCAtMTU4LjVRNDEzNCAtMTI5IDQxMjQuNSAtMTAwLjVRNDExNSAtNzIgNDExNSAtNTJRNDExNSAtMjYgNDEzNSAtMjZRNDE1NCAtMjYgNDE4OC4wIC03MC41UTQyMjIgLTExNSA0MjU2IC0xOTNRNDI2OCAtMTkzIDQyNjggLTE4NFE0MjU3IC0xNTcgNDI0MC41IC0xMjUuMFE0MjI0IC05MyA0MjA0LjAgLTY0LjVRNDE4NCAtMzYgNDE2MS4wIC0xNy41UTQxMzggMSA0MTEzIDFRNDA5NCAxIDQwNzUuMCAtMTQuNVE0MDU2IC0zMCA0MDU2IC02NVE0MDU2IC05NiA0MDY4LjAgLTEyNS41UTQwODAgLTE1NSA0MDk1LjAgLTE4MS4wUTQxMTAgLTIwNyA0MTIyLjAgLTIyNy4wUTQxMzQgLTI0NyA0MTM0IC0yNTlRNDEzNCAtMjc3IDQxMTEuNSAtMjg1LjBRNDA4OSAtMjkzIDQwNTMgLTI5NFE0MDM1IC0yNDggNDAyNi4wIC0yMjYuMFE0MDE3IC0yMDQgNDAwOSAtMTg0UTM5OTMgLTE4NCAzOTk4IC0xOTZaIi8+PC9nPjwvc3ZnPg=="},rm=`
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
.li-back{z-index:1;filter:drop-shadow(1px 3px 2px #50433024) drop-shadow(16px 25px 22px #53442b18)}
.li-envelope-paper{position:absolute;inset:0;background:linear-gradient(120deg,#e4ddca,#d8cdb6 100%);border-radius:3px;box-shadow:inset 0 1px 1px #fff9e6,inset 0 -1px 2px #93816944}
.li-liner{position:absolute;inset:5px 5px 1px;background:repeating-linear-gradient(90deg,transparent 0 3px,#877d6810 3px 4px),linear-gradient(120deg,#c8c1a9,#d7d0ba 64%,#c0b69d);border-radius:2px;box-shadow:inset 0 4px 7px #59493421}
.li-mouth{height:3px;position:absolute;top:1px;left:3px;right:3px;background:linear-gradient(#998d7170,#e8dfc9);border-radius:2px}
.li-flap-layer{z-index:6;perspective:1300px;filter:drop-shadow(0 3px 2px #71624523)}
.li-flap{width:680px;height:275px;position:absolute;top:0;left:0;transform-origin:50% 0;transform-style:preserve-3d;will-change:transform;transform:rotateX(0deg)}
.li-flap-face{position:absolute;inset:0;clip-path:polygon(0 0,100% 0,53% 96%,51% 98.3%,49% 98.3%,47% 96%);backface-visibility:hidden;-webkit-backface-visibility:hidden}
.li-flap-front{background:linear-gradient(160deg,#f0ebdc 1%,#e9e1d0 46%,#e3d8c2 100%);border-top:1px solid #fdf8eb}
.li-flap-inside{transform:rotateY(180deg);background:linear-gradient(180deg,#c5baa1,#e8dfc9 68%);box-shadow:inset 0 2px 4px #56493030}
.li-emboss{position:absolute;left:50%;top:79px;width:176px;transform:translateX(-50%);z-index:1}
.li-emboss img{display:block;width:100%;height:auto;overflow:visible}
.li-front{z-index:4;overflow:hidden;border-radius:3px;filter:drop-shadow(0 1px 1px #604c2c23)}
.li-side{position:absolute;inset:0}
.li-left{clip-path:polygon(0 0,55% 60%,0 100%);background:linear-gradient(100deg,#e7dfcd,#d4c8ae)}
.li-right{clip-path:polygon(100% 0,45% 60%,100% 100%);background:linear-gradient(260deg,#ede5d3,#d9ceb8)}
.li-pocket{position:absolute;inset:0;clip-path:polygon(0 100%,0 99%,45.4% 49.5%,47% 48%,49% 47.2%,51% 47.2%,53% 48%,54.6% 49.5%,100% 99%,100% 100%);background:linear-gradient(160deg,#f1e9d8,#e6dcc6 70%,#e0d4bb);box-shadow:inset 0 -2px 2px #9c8a6759}
.li-pocket-shadow{position:absolute;inset:0;clip-path:polygon(0 100%,0 97.5%,45.4% 48%,47% 46.5%,49% 45.7%,51% 45.7%,53% 46.5%,54.6% 48%,100% 97.5%,100% 100%);background:#85765b;opacity:.16}
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
.li-front{filter:drop-shadow(0 1px .5px #604c2c17)}
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
.li-opening .li-stage{background:#F4EDE2 url("/assets/kamen/print.jpg?v=3") 0 0/1100px auto repeat!important}
.li-opening .li-stage:after{display:none}
.li-opening{background:#F4EDE2!important}
.li-stage-heading>span{font-family:"Great Vibes",cursive;font-size:30px;letter-spacing:0;color:#8A6A28}
.li-envelope-paper{background:linear-gradient(120deg,#ead9bd,#dcc8a4 100%)!important}
.li-flap-front{background:linear-gradient(160deg,#f3e7d0 1%,#ecdcc0 46%,#e4d1b0 100%)!important}
.li-left{background:linear-gradient(100deg,#eadbc0,#d8c4a0)!important}
.li-right{background:linear-gradient(260deg,#f0e3cb,#ddcaa7)!important}
.li-pocket{background:linear-gradient(160deg,#f4e8d2,#e8d8bb 70%)!important}

`,am='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2048" height="1201" viewBox="0 0 2048 1201"><defs><filter id="grain" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="2.4" intercept="-1.37"/><feFuncG type="linear" slope="2.4" intercept="-1.37"/><feFuncB type="linear" slope="2.4" intercept="-1.37"/></feComponentTransfer></filter></defs><image width="2048" height="1201" filter="url(#grain)" xlink:href="__PAPER_JPEG__"/></svg>',Za;function om(){return Za||(Za=(async()=>{let i=await fetch(yi.paperColor,{mode:"cors"});if(!i.ok)throw new Error(`Paper texture failed to load (${i.status}).`);let t=await i.arrayBuffer(),e=await new Promise((r,a)=>{let o=new FileReader;o.onload=()=>r(String(o.result)),o.onerror=()=>a(o.error||new Error("Paper texture could not be read.")),o.readAsDataURL(new Blob([t],{type:"image/jpeg"}))}),n=am.replace("__PAPER_JPEG__",e),s=URL.createObjectURL(new Blob([n],{type:"image/svg+xml"}));try{let r=new Image;return r.src=s,await r.decode(),s}catch(r){throw URL.revokeObjectURL(s),r}})().catch(i=>{throw Za=void 0,i})),Za}var{SCROLL_EXTENSION:lm,authoredClock:cm,scrollClock:um}=(()=>{let t=.1637489716078054,e=.245,n=e-t,s=n+.035;function r(o){if(o<=t)return o;if(o>=e+.035)return o-.035;let c=(o-t)/s;return t+n*c+.035*c*(1-c)*(1-2*c)}function a(o){if(o<=t)return o;if(o>=e)return o+.035;let c=t,l=e+.035;for(let h=0;h<32;h++){let f=(c+l)/2;r(f)<o?c=f:l=f}return(c+l)/2}return{SCROLL_EXTENSION:.035,authoredClock:r,scrollClock:a}})(),{applyRibbonWithdrawal:hm}=(()=>{let i=h=>Math.max(0,Math.min(1,h)),t=(h,f,u)=>{let d=i((u-h)/(f-h));return d*d*(3-2*d)},e=new U,n=new U,s=new U,r=new U,a=new U,o=new qe;function c(h,f,u){let d=h.x,M=h.y,A=h.z;if(u.set(0,0,0),f<=.72)return u;let p=i((d+1.38)/4.8);if(p<=0||p>=1)return u;let g=t(-.1,.025,A),T=1-t(.18,.45,Math.abs(M+.2)),R=t(.72,.88,f),v=-1.38+4.8*t(.725,.875,f),b=.35+.65*t(d-.85,d+.85,v),y=Math.pow(Math.sin(Math.PI*p),2)*g*T*R*b;return u.set(-.055*y,-.42*y,.46*y),u}function l(h,f,u,d){d<=.72||(e.copy(f),s.copy(h).addScaledVector(e,5e-4),r.copy(h).addScaledVector(e,-5e-4),c(s,d,s),c(r,d,r),n.copy(e).addScaledVector(s.sub(r),1e3).normalize(),c(h,d,a),h.add(a),o.setFromUnitVectors(e,n),u.applyQuaternion(o).normalize(),f.copy(n))}return{applyRibbonWithdrawal:l}})(),{createRibbonStrips:dm}=(()=>{let a=R=>Math.max(0,Math.min(1,R)),o=(R,v,b)=>{let y=a((b-R)/(v-R));return y*y*(3-2*y)},c=(R,v,b)=>R+(v-R)*b,l=[0,0,1],h=[0,0,-1],f=[];function u(R,v,b,y=0,m=0,S=l){f.push({p:new U(R,v,b),roll:y,fold:m,n:new U(...S)})}function d(R,v,b,y=0,m=0){u(-1.7+R,-.2+v,b,y,m)}d(-.43,-.95,.065,-.25),d(-.37,-.74,.065,-.15),d(-.24,-.48,.18,.15,.12),d(-.08,-.15,.19,.5,.6),d(.08,-.08,.15,.55,.65),d(.38,-.09,.14,.24,.12),d(.7,-.02,.2,.4),d(.84,.18,.3,1.15),d(.79,.37,.24,2.45),d(.56,.39,.18,2),d(.32,.24,.18,1.1,.12),d(.03,.01,.16,.5,.6),d(.04,-.015,.09,.15,.3),d(.32,0,.045),u(2.8,-.2,.043),u(3.25,-.2,.043),u(3.39,-.2,.043),u(3.411,-.2,.005,0,0,[.7,0,.7]),u(3.416,-.2,-.045,0,0,[1,0,0]),u(3.408,-.2,-.105,0,0,[.6,0,-.8]),u(3.28,-.2,-.13,0,0,h),u(2.9,-.2,-.13,0,0,h),u(1.8,.55,-.13,0,0,h),u(-.7,1.65,-.13,0,0,h),u(-1.7,1.94,-.13,0,0,h),u(-1.7,2.16,-.13,0,0,h),u(-1.7,2.208,-.1,0,0,[0,.6,-.8]),u(-1.7,2.216,-.045,0,0,[0,1,0]),u(-1.7,2.211,.015,0,0,[0,.6,.8]),u(-1.7,2.19,.036),u(-1.7,1.93,.036),u(-1.7,1.2,.036),u(-1.7,-.2,.036),u(-1.7,-1.4,.036),u(-1.7,-2.1,.036),u(-1.7,-2.19,.036),u(-1.7,-2.211,.015,0,0,[0,-.6,.8]),u(-1.7,-2.216,-.045,0,0,[0,-1,0]),u(-1.7,-2.208,-.1,0,0,[0,-.6,-.8]),u(-1.7,-2.16,-.13,0,0,h),u(-1.7,-1.93,-.13,0,0,h),u(-2.65,-1.05,-.13,0,0,h),u(-3.14,-.2,-.13,0,0,h),u(-3.32,-.2,-.13,0,0,h),u(-3.408,-.2,-.105,0,0,[-.6,0,-.8]),u(-3.416,-.2,-.045,0,0,[-1,0,0]),u(-3.411,-.2,.005,0,0,[-.7,0,.7]),u(-3.39,-.2,.043),u(-3.15,-.2,.043),u(-1.7-.4,-.2,.043),u(-1.7-.12,-.2-.01,.08,.2,.2),d(-.06,-.12,.1,.05,.3),d(-.04,-.16,.18,.05,.25),d(.015,-.11,.3,.06,.25),d(.025,.09,.3,.06,.22),d(-.01,.145,.2,.05,.2),d(-.045,.11,.085,.15,.35),d(-.12,0,.1,.35,.5),d(-.38,-.09,.22,.35,.1),d(-.68,-.04,.27,.75),d(-.86,.14,.25,1.6),d(-.79,.33,.18,2.55),d(-.58,.35,.14,2.85),d(-.31,.2,.12,2.95,.1),d(-.06,.02,.11,2.55,.55),d(.05,-.15,.15,1,.55),d(.19,-.37,.15,.2,.12),d(.38,-.69,.09,-.25),d(.46,-.92,.095,-.6);function M(R=0,v=0,b=0){let y=f.map(ot=>({...ot,p:ot.p.clone(),n:ot.n.clone()}));y[4].p.z=c(y[4].p.z,.12,b);for(let ot=5;ot<=10;ot++){let Wt=[.72,1,1,1,1,.75][ot-5],at=R*Wt;y[ot].p.x=-1.7+.12+(y[ot].p.x- -1.7-.12)*(1-.34*at),y[ot].p.y=-.2+.025+(y[ot].p.y- -.2-.025)*(1-.25*at),y[ot].p.z=.11+(y[ot].p.z-.11)*(1-.2*at),y[ot].fold*=1-.35*R}for(let ot=51;ot<=57;ot++){let Wt=Math.sin((ot-50)/8*Math.PI);y[ot].p.z+=.075*v*Wt,y[ot].p.y+=.045*v*Wt*(ot<54?-1:1),y[ot].fold*=1-.7*v}for(let ot=58;ot<=64;ot++){let Wt=Math.sin((ot-57)/8*Math.PI),at=v*Wt;y[ot].p.x=-1.7-.1+(y[ot].p.x- -1.7+.1)*(1-.21*at),y[ot].p.y=-.2+.015+(y[ot].p.y- -.2-.015)*(1-.3*at),y[ot].p.z=.065+(y[ot].p.z-.065)*(1-.55*at),y[ot].roll*=1-.25*at,y[ot].fold*=1-.55*at}let m=new ws(y.map(ot=>ot.p),!1,"centripetal");m.arcLengthDivisions=6e3;let S=m.getLength(),P=[],w=[],N=[],F=[],H=[],_=new U,O=new U,q=new qe,B=new U;for(let ot=0;ot<=3600;ot++){let Wt=ot/3600,at=m.getUtoTmapping(Wt),Tt=m.getPoint(at),At=m.getTangent(at).normalize(),mt=at*(f.length-1),Pt=Math.min(f.length-2,Math.floor(mt)),zt=mt-Pt,ee=y[Pt].n.clone().lerp(y[Pt+1].n,zt).normalize(),Jt=new U().crossVectors(ee,At);ot&&(q.setFromUnitVectors(O,At),B.copy(_).applyQuaternion(q)),Jt.lengthSq()<.015&&Jt.copy(ot?B:new U(1,0,0)),Jt.normalize(),ot&&Jt.dot(B)<0&&Jt.negate(),_.copy(Jt),O.copy(At),P.push(Tt),w.push(Jt),H.push(At),N.push(c(y[Pt].roll,y[Pt+1].roll,zt)),F.push(c(y[Pt].fold,y[Pt+1].fold,zt))}let tt=P[0],Q=H[0].clone().negate(),W=tt.clone().addScaledVector(Q,2);W.z=Math.max(tt.z,W.z);let $=new Wi(tt.clone(),W,new U(-9,-5,.2),new U(-S-64,-14,.26));$.arcLengthDivisions=4e3;let ht=m.getLengths(),Ut=ht[Math.round(m.arcLengthDivisions*13/(f.length-1))],j=ht[Math.round(m.arcLengthDivisions*4/(f.length-1))],ct=ht[Math.round(m.arcLengthDivisions*51/(f.length-1))],yt=ht[Math.round(m.arcLengthDivisions*57/(f.length-1))],Dt=ht[Math.round(m.arcLengthDivisions*57/(f.length-1))],gt=ht[Math.round(m.arcLengthDivisions*65/(f.length-1))];return{length:S,points:P,sides:w,rolls:N,folds:F,tangents:H,releaseLength:Ut,bightStartLength:j,collarStartLength:ct,collarEndLength:yt,leftLoopStartLength:Dt,leftLoopEndLength:gt,exitCurve:$,exitLength:$.getLength()}}let A=M(),p=A.length;class g extends fi{constructor(v){super(),this.controls=v}getPoint(v,b=new U){let y=1-v,m=this.controls;return b.set(0,0,0).addScaledVector(m[0],y*y*y*y).addScaledVector(m[1],4*y*y*y*v).addScaledVector(m[2],6*y*y*v*v).addScaledVector(m[3],4*y*v*v*v).addScaledVector(m[4],v*v*v*v)}}function T(R){let v=new dn;v.name="one-continuous-cross-wrap";let b=new sn,y=new ke(new Float32Array(1281*21*3),3),m=new ke(new Float32Array(1281*21*2),2);y.setUsage(Ga),b.setAttribute("position",y),b.setAttribute("uv",m);let S=[];for(let at=0;at<1280;at++)for(let Tt=0;Tt<20;Tt++){let At=at*21+Tt,mt=At+20+1;S.push(At,mt,At+1,At+1,mt,mt+1)}b.setIndex(S);for(let at=0;at<=1280;at++)for(let Tt=0;Tt<=20;Tt++)m.setXY(at*21+Tt,at/1280*p,Tt/20*.235);let P=new de(b,R);P.name="single-material-ribbon",P.castShadow=!0,P.receiveShadow=!0,P.frustumCulled=!1,v.add(P);let w=new U,N=new U,F=new U,H=new U,_=new U,O=new Float64Array(21),q=new Float64Array(21),B=-1,tt=-1,Q=!1,W=A,$=0,ht=new U(-.9,-.435,0).normalize(),Ut=.72,j=null,ct=0;function yt(at,Tt=W){let At=a(at/Tt.length)*3600,mt=Math.min(3599,Math.floor(At)),Pt=At-mt;return{p:Tt.points[mt].clone().lerp(Tt.points[mt+1],Pt),t:Tt.tangents[mt].clone().lerp(Tt.tangents[mt+1],Pt).normalize(),s:Tt.sides[mt].clone().lerp(Tt.sides[mt+1],Pt).normalize(),roll:c(Tt.rolls[mt],Tt.rolls[mt+1],Pt),fold:c(Tt.folds[mt],Tt.folds[mt+1],Pt)}}function Dt(at,Tt,At){if(at<1e-7)return null;let mt=yt(Tt),Pt=yt(W.bightStartLength),zt=new U(-1.7-.03,-.2-.1,.11),ee=new U(-1.7-.15,-.2-.23,.12),Jt=new U(-.93,-.37,0).normalize(),xe=new U(-.45,-.89,0).normalize(),kt=mt.p.distanceTo(zt),ve=zt.clone().sub(mt.p).normalize(),ie=o(-.1,.8,mt.t.dot(ve)),ce=Math.max(Math.min(.18,kt*.28),.24*ie);At>.535&&mt.t.z<0&&(ce=Math.min(ce,.04/-mt.t.z));let L=mt.p.clone().addScaledVector(mt.t,-ce);L.z=Math.max(.07,L.z);let Me=mt.p.clone().lerp(zt,.42);Me.z+=(.5-.25*o(.535,.565,At))*ie;let re=new g([mt.p.clone(),L,Me,zt.clone().addScaledVector(Jt,-ce),zt.clone()]);re.arcLengthDivisions=500;let xt=zt.clone().addScaledVector(Jt,.05);xt.z=.1;let nt=ee.clone().addScaledVector(xe,-.045);nt.z=.1;let qt=new Wi(zt.clone(),xt,nt,ee.clone());qt.arcLengthDivisions=300;let pt=kt<.003?0:re.getLength(),Rt=qt.getLength(),I=Math.max(.001,at-pt-Rt),E=W.points[0].clone();E.z+=.14*o(.02,.28,At);let z=mt.p.clone().sub(E),et=z.dot(ht),J=Math.max(0,z.lengthSq()-et*et),ut=Math.max(0,et+Math.sqrt(Math.max(0,at*at-J)))*(.82+.12*o(.5,.66,At)),X=E.clone().addScaledVector(ht,ut),K=Math.min(.36,I*.2),ft=ee.clone().lerp(X,.45);function C(Xt){let he=ee.clone().addScaledVector(xe,K*Xt),Ae=X.clone().addScaledVector(ht,-K*Xt),Xe=ft.clone();Xe.z+=Math.min(.18,I*.12)*Xt;let si=new g([ee.clone(),he,Xe,Ae,X.clone()]);return si.arcLengthDivisions=180,si}let Z=Math.max(I,C(.12).getLength()),Y=.12,lt=1,rt;for(;C(lt).getLength()<Z&&lt<8;)lt*=1.5;for(let Xt=0;Xt<20;Xt++){let he=(Y+lt)/2;rt=C(he),rt.getLength()<Z?Y=he:lt=he}rt=C((Y+lt)/2),rt.arcLengthDivisions=800,rt.updateArcLengths();let dt=rt.getLength(),Ct=pt+Rt+dt,Vt=[],it=[],wt=[],jt=new qe,It=mt.t.clone(),se=mt.s.clone().applyAxisAngle(mt.t,mt.roll),ue=640;for(let Xt=0;Xt<=ue;Xt++){let he=Xt/ue*Ct,Ae,Xe;he<pt?(Ae=re,Xe=he/pt):he<pt+Rt?(Ae=qt,Xe=(he-pt)/Rt):(Ae=rt,Xe=(he-pt-Rt)/dt);let si=Ae.getPointAt(a(Xe)),Fn=Ae.getTangentAt(a(Xe)).negate().normalize(),Ii=se.clone();Xt&&(jt.setFromUnitVectors(It,Fn),Ii.applyQuaternion(jt).normalize()),Vt.push(si),it.push(Ii),wt.push(Fn),se=Ii,It=Fn}let Ye=null,Bn=new U,rs=new U;for(let Xt=0;Xt<=ue;Xt++){if(Bn.crossVectors(new U(0,0,1),wt[Xt]),Bn.lengthSq()<1e-6)continue;Bn.normalize();let he=Math.atan2(wt[Xt].dot(rs.crossVectors(it[Xt],Bn)),it[Xt].dot(Bn));if(Ye!==null){for(;he-Ye>Math.PI;)he-=Math.PI*2;for(;he-Ye<-Math.PI;)he+=Math.PI*2}Ye=he;let Ae=Xt/ue*Ct;it[Xt].applyAxisAngle(wt[Xt],he*o(0,Math.max(.02,pt*(.85-.25*o(.535,.565,At))),Ae))}let ni=o(0,.08,At),ii=[];for(let Xt=0;Xt<=ue;Xt++){let he=Xt/ue*Ct;if(ii[Xt]=mt.fold*(1-o(0,Math.max(.02,pt*.8),he)),ni<1){let Ae=yt(A.bightStartLength*(1-Xt/ue),A);Vt[Xt].lerp(Ae.p,1-ni),wt[Xt].lerp(Ae.t,1-ni).normalize();let Xe=Ae.s.applyAxisAngle(Ae.t,Ae.roll);it[Xt].lerp(Xe,1-ni),it[Xt].addScaledVector(wt[Xt],-it[Xt].dot(wt[Xt])).normalize(),ii[Xt]=c(Ae.fold,ii[Xt],ni)}}return{points:Vt,sides:it,tangents:wt,folds:ii,N:ue,length:at,fold:mt.fold,head:Vt[ue].clone(),connectorLength:pt,throatLength:Rt,drawnLength:dt/Ct*at,actualLength:Ct,throatIn:zt.toArray(),throatOut:ee.toArray()}}function gt(at){if(at<-$){let At=j?j.head:W.points[0];return w.copy(At).addScaledVector(ht,-$-at),N.copy(ht).negate(),F.copy(j?j.sides[j.N]:W.sides[0]),{roll:0,fold:0}}if(j&&at<ct){let At=ct-at,mt=a(At/j.length)*j.N,Pt=Math.min(j.N-1,Math.floor(mt)),zt=mt-Pt;return w.copy(j.points[Pt]).lerp(j.points[Pt+1],zt),N.copy(j.tangents[Pt]).lerp(j.tangents[Pt+1],zt).normalize(),F.copy(j.sides[Pt]).lerp(j.sides[Pt+1],zt).normalize(),{roll:0,fold:c(j.folds[Pt],j.folds[Pt+1],zt)}}let Tt=yt(at);return w.copy(Tt.p),N.copy(Tt.t),F.copy(Tt.s),{roll:Tt.roll,fold:Tt.fold}}function ot(at){if(at>=.08)return;let Tt=21,At=p/1280;function mt(xt,nt){let qt=[],pt=Math.max(0,Math.floor(($+xt)/At)),Rt=Math.min(1280,Math.ceil(($+nt)/At));function I(et,J,st){let ut=y.getX(et),X=y.getY(et),K=y.getZ(et),ft=y.getX(J),C=y.getY(J),Z=y.getZ(J),Y=y.getX(st),lt=y.getY(st),rt=y.getZ(st),dt=(C-lt)*(ut-Y)+(Y-ft)*(X-lt);Math.abs(dt)<1e-10||qt.push({ax:ut,ay:X,az:K,bx:ft,by:C,bz:Z,cx:Y,cy:lt,cz:rt,den:dt,x0:Math.min(ut,ft,Y),x1:Math.max(ut,ft,Y),y0:Math.min(X,C,lt),y1:Math.max(X,C,lt)})}for(let et=pt;et<Rt;et++)for(let J=0;J<20;J++){let st=et*Tt+J,ut=st+Tt;I(st,ut,st+1),I(st+1,ut,ut+1)}let E=new Map,z=.12;for(let et of qt)for(let J=Math.floor(et.x0/z);J<=Math.floor(et.x1/z);J++)for(let st=Math.floor(et.y0/z);st<=Math.floor(et.y1/z);st++){let ut=J+","+st,X=E.get(ut);X||(X=[],E.set(ut,X)),X.push(et)}return E}let Pt=mt(W.leftLoopStartLength,W.leftLoopEndLength),zt=mt(W.collarStartLength,W.collarEndLength);function ee(xt,nt,qt){let pt=-1/0,Rt=xt.get(Math.floor(nt/.12)+","+Math.floor(qt/.12))||[];for(let I of Rt){if(nt<I.x0||nt>I.x1||qt<I.y0||qt>I.y1)continue;let E=((I.by-I.cy)*(nt-I.cx)+(I.cx-I.bx)*(qt-I.cy))/I.den,z=((I.cy-I.ay)*(nt-I.cx)+(I.ax-I.cx)*(qt-I.cy))/I.den;E>=-1e-7&&z>=-1e-7&&E+z<=1.0000001&&(pt=Math.max(pt,E*I.az+z*I.bz+(1-E-z)*I.cz))}return pt}let Jt=Math.floor(.6/At),xe=Math.ceil(($+W.bightStartLength+.15)/At),kt=[],ve=.05,ie=.006;for(let xt=Jt;xt<=xe;xt++){let nt=[];for(let E=0;E<=20;E++)nt.push(new U().fromBufferAttribute(y,xt*Tt+E));let qt=nt[20/2].clone(),pt=nt[20].clone().sub(nt[0]),Rt=new U(-pt.y,pt.x,0).normalize(),I=Math.atan2(pt.z,Math.hypot(pt.x,pt.y));kt.push({row:xt,points:nt,centre:qt,axis:Rt,angle:I,flatten:0,drop:0})}function ce(xt,nt,qt=!1){let pt=0,Rt=1/0;for(let I=0;I<=20;I++){let E=xt.points[I].clone().sub(xt.centre).applyAxisAngle(xt.axis,xt.angle*nt).add(xt.centre);Rt=Math.min(Rt,E.z);let z=ee(Pt,E.x,E.y);z>-1/0&&ee(zt,E.x,E.y)<=E.z+.002&&(pt=Math.max(pt,E.z-z+ie)),qt&&y.setXYZ(xt.row*Tt+I,E.x,E.y,E.z)}return{required:Math.max(0,pt),available:Math.max(0,Rt-ve)}}for(let xt of kt){let nt=ce(xt,0);if(nt.required>nt.available){let qt=0,pt=1;for(let Rt=0;Rt<12;Rt++){let I=(qt+pt)/2,E=ce(xt,I);E.required<=E.available?pt=I:qt=I}xt.flatten=Math.min(1,pt+.015)}}let L=At/.1;for(let xt=1;xt<kt.length;xt++)kt[xt].flatten=Math.max(kt[xt].flatten,kt[xt-1].flatten-L);for(let xt=kt.length-2;xt>=0;xt--)kt[xt].flatten=Math.max(kt[xt].flatten,kt[xt+1].flatten-L);let Me=1-o(.06,.08,at);for(let xt of kt){let nt=ce(xt,xt.flatten*Me,!0);xt.drop=nt.required,xt.available=nt.available}let re=At*.8;for(let xt=1;xt<kt.length;xt++)kt[xt].drop=Math.max(kt[xt].drop,kt[xt-1].drop-re);for(let xt=kt.length-2;xt>=0;xt--)kt[xt].drop=Math.max(kt[xt].drop,kt[xt+1].drop-re);for(let xt of kt){let nt=Math.min(xt.drop,xt.available)*Me;if(!(nt<=0))for(let qt=0;qt<=20;qt++){let pt=xt.row*Tt+qt;y.setZ(pt,y.getZ(pt)-nt)}}}function Wt(at=0,Tt=16){if(Q)return;let At=a(at);if(At===B&&Tt===tt)return;B=At,tt=Tt;let mt=o(.02,.46,At),Pt=o(.48,.7,At);W=At===0?A:M(mt,Pt,o(0,.08,At)),$=p-W.length,ct=c(W.bightStartLength,W.releaseLength,o(.34,.67,At)),j=At===0?null:Dt(Math.max(0,$+ct),ct,At);let zt=(p+Tt)*o(Ut,1,At);for(let ee=0;ee<=1280;ee++){let Jt=ee/1280,xe=Jt*p-zt,{roll:kt,fold:ve}=gt(xe-$);hm(w,N,F,At),F.applyAxisAngle(N,kt),H.crossVectors(N,F).normalize(),O[0]=0,q[0]=0;for(let ie=1;ie<=20;ie++){let ce=(ie-.5)/20,L=.12*Math.sin(ce*Math.PI*2+xe*.65)*(1-ve),Me=.86*ve*Math.sin(ce*Math.PI*4+.4)+L+.07*(ce-.5);O[ie]=O[ie-1]+Math.cos(Me)*.235/20,q[ie]=q[ie-1]+Math.sin(Me)*.235/20}for(let ie=0;ie<=20;ie++){let ce=ie/20,Me=45e-5*Math.pow(Math.abs(ce*2-1),8)*(Math.sin(xe*48+ce*5)+.4*Math.sin(xe*97));_.copy(w).addScaledVector(F,O[ie]-O[20/2]).addScaledVector(H,q[ie]-q[20/2]+Me),y.setXYZ(ee*21+ie,_.x,_.y,_.z)}}ot(At),y.needsUpdate=!0,b.computeVertexNormals(),v.visible=At<.9999,v.userData.ribbonMetrics={progress:At,materialLength:p,width:.235,meshCount:1,freeEnds:2,pull:ct+zt,tailDistance:p-zt,guideLength:p,anchoredUntil:Ut,bowReleased:ct>=W.releaseLength-1e-4,heldUntil:Ut,bightStart:$+Math.max(ct,W.bightStartLength)+zt,bightEnd:$+W.releaseLength+zt,bightLength:Math.max(0,W.releaseLength-Math.max(ct,W.bightStartLength)),freeTailLength:Math.max(0,$+ct),contraction:mt,relaxation:Pt,connectorLength:j?.connectorLength||0,throatLength:j?.throatLength||0,drawnMaterialEnd:zt+(j?.drawnLength||0),throatIn:j?.throatIn,throatOut:j?.throatOut}}return Wt(0),{group:v,update:Wt,dispose(){Q||(Q=!0,b.dispose(),v.clear())}}}return{createRibbonStrips:T}})(),{createRibbonContact:fm}=(()=>{function i(t,e,n,s){let a=new _e(1536,1536),o=new _e(1536,1536),c=new _e(1536,1536,{depthBuffer:!1});for(let p of[a,o,c])p.texture.generateMipmaps=!1;let l=new gi,h=new je({uniforms:{castPass:{value:0}},vertexShader:`
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
      }`,side:Ge}),f=new Un,u=new je({uniforms:{source:{value:a.texture},direction:{value:new Gt(1/1536,0)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"uniform sampler2D source;uniform vec2 direction;varying vec2 vUv;void main(){vec4 c=texture2D(source,vUv)*.227027;c+=texture2D(source,vUv+direction*1.384615)*.316216;c+=texture2D(source,vUv-direction*1.384615)*.316216;c+=texture2D(source,vUv+direction*3.230769)*.070270;c+=texture2D(source,vUv-direction*3.230769)*.070270;gl_FragColor=c;}",depthTest:!1,depthWrite:!1}),d=new de(new rn(2,2),u);f.add(d);let M=[o,a].map((p,g)=>{let T=new Wn({map:p.texture,transparent:!0,depthWrite:!1,toneMapped:!1}),R=new de(new rn(6.8,4.4),T);return R.position.z=.001+g*2e-4,R.renderOrder=g,n.add(R),R});function A(p,g,T){h.uniforms.castPass.value=g,e.overrideMaterial=h,t.setRenderTarget(p),t.render(e,l),e.overrideMaterial=null,u.uniforms.source.value=p.texture,u.uniforms.direction.value.set(T/1536,0),t.setRenderTarget(c),t.render(f,l),u.uniforms.source.value=c.texture,u.uniforms.direction.value.set(0,T/1536),t.setRenderTarget(p),t.render(f,l)}return{update(){let p=t.getRenderTarget(),g=e.overrideMaterial;for(let T of M)T.visible=!1;s.visible=!1;try{A(a,0,1.5),A(o,1,5.5)}finally{e.overrideMaterial=g;for(let T of M)T.visible=!0;s.visible=!0,t.setRenderTarget(p)}},dispose(){a.dispose(),o.dispose(),c.dispose(),h.dispose(),u.dispose(),d.geometry.dispose();for(let p of M)p.geometry.dispose(),p.material.dispose(),n.remove(p)}}}return{createRibbonContact:i}})(),{createVellum:pm}=(()=>{let n=a=>Math.max(0,Math.min(1,a)),s=(a,o,c)=>{let l=n((c-a)/(o-a));return l*l*(3-2*l)};function r({bumpMap:a=null,map:o=null,inkMap:c=null}={}){let l=new rn(4.08,6.28,30,54),h=l.getAttribute("position"),f=new Float32Array(h.array);h.setUsage(Ga);let u=new je({uniforms:{tScene:{value:null},uResolution:{value:new Gt(1,1)},uHasScene:{value:0},uPaperMap:{value:o},uBump:{value:a},uInkMap:{value:c},uHasPaperMap:{value:o?1:0},uHasBump:{value:a?1:0},uHasInkMap:{value:c?1:0},uPaperColor:{value:new Ht(16776437)},uPeel:{value:0}},vertexShader:`
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
    `,transparent:!1,side:Ge,depthTest:!0,depthWrite:!0}),d=new de(l,u);d.name="vellum-sheet",d.position.z=.016,d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!1;let M=[];for(let H=0;H<h.count;H++){let _=f[H*3],O=f[H*3+1];(Math.abs(Math.abs(_)-4.08/2)<1e-4||Math.abs(Math.abs(O)-6.28/2)<1e-4)&&M.push(H)}M.sort((H,_)=>Math.atan2(f[H*3+1],f[H*3])-Math.atan2(f[_*3+1],f[_*3]));let A=new sn,p=new ke(new Float32Array(M.length*3),3);A.setAttribute("position",p);let g=new Gi({color:11970699,transparent:!0,opacity:.2,depthWrite:!1}),T=new Ss(A,g);T.frustumCulled=!1,d.add(T);let R=Math.cos(Math.PI/8),v=Math.sin(Math.PI/8),b=-v,y=R,m=4.08*.5*R+6.28*.5*v,S=-1,P=!1;function w(H=0,_=0){if(P)return;let O=n(Number.isFinite(H)?H:0);if(O===S)return;S=O,u.uniforms.uPeel.value=O;let q=s(.015,.87,O),B=s(.49,.97,O),tt=m-(m*2+.12)*q,Q=.82+.2*s(.25,.85,O),W=2.55,$=Q*W;for(let ht=0;ht<h.count;ht++){let Ut=ht*3,j=f[Ut],ct=f[Ut+1],yt=j*R+ct*v,Dt=j*b+ct*y,gt=Math.max(0,yt-tt);if(gt===0){h.setXYZ(ht,j,ct,0);continue}let ot=Math.min(gt,$),Wt=ot/Q,at=gt-ot,Tt=tt+Q*Math.sin(Wt)+at*Math.cos(W),At=Q*(1-Math.cos(Wt))+at*Math.sin(W);h.setXYZ(ht,R*Tt+b*Dt,v*Tt+y*Dt,At)}h.needsUpdate=!0,M.forEach((ht,Ut)=>p.setXYZ(Ut,h.getX(ht),h.getY(ht),h.getZ(ht)+.001)),p.needsUpdate=!0,l.computeVertexNormals(),d.position.set(5.6*B,6.6*B,.016+1.15*B),d.rotation.set(-.07*B,.1*B,-.1*B),d.visible=O<.995}function N(H,_,O){P||(u.uniforms.tScene.value=H,u.uniforms.uHasScene.value=H?1:0,u.uniforms.uResolution.value.set(Math.max(1,_),Math.max(1,O)))}function F(){P||(P=!0,l.dispose(),u.dispose(),A.dispose(),g.dispose())}return w(0,0),{mesh:d,update:w,setBackground:N,dispose:F}}return{createVellum:r}})(),{createVellumMaterials:gm}=(()=>{function t(l){return()=>{l|=0,l=l+1831565813|0;let h=Math.imul(l^l>>>15,1|l);return h=h+Math.imul(h^h>>>7,61|h)^h,((h^h>>>14)>>>0)/4294967296}}function e(l,h){let f=document.createElement("canvas");return f.width=l,f.height=h,{canvas:f,context:f.getContext("2d",{alpha:!0})}}async function n(){let l=await fetch(yi.logo);if(!l.ok)throw new Error(`Le Invite logo failed to load (${l.status}).`);let h=(await l.text()).replace(/width="100%"/,'width="165.43" height="45.9"').replaceAll("currentColor","#000000"),f=URL.createObjectURL(new Blob([h],{type:"image/svg+xml"}));try{let u=new Image;return u.src=f,await u.decode(),u}finally{URL.revokeObjectURL(f)}}function s(l,h){let{canvas:f,context:u}=e(660,Math.round(205.39632153860518));return u.drawImage(l,0,0,f.width,f.height),u.globalCompositeOperation="source-in",u.fillStyle=h,u.fillRect(0,0,f.width,f.height),f}function r(l,h,f,u,d){l.drawImage(h,f,u,d,d/3.2133)}function a(){let{canvas:l,context:h}=e(800,1240),f=t(67),u=h.createImageData(800,1240);for(let d=0;d<u.data.length;d+=4){let M=f()*4;u.data[d]=250+M,u.data[d+1]=247+M,u.data[d+2]=234+M,u.data[d+3]=255}h.putImageData(u,0,0);for(let d=0;d<3800;d++){let M=f()*800,A=f()*1240;h.strokeStyle=f()>.5?"rgba(255,255,249,.16)":"rgba(206,192,158,.085)",h.lineWidth=.4+f()*.65,h.beginPath(),h.moveTo(M,A),h.quadraticCurveTo(M+4,A+1,M+1+f()*11,A+(f()-.5)*7),h.stroke()}return l}function o(l,h){let{canvas:f,context:u}=e(1200,1860);return u.scale(3,3),r(u,s(l,"#3c3b36"),142,298,116),u.textAlign="center",u.textBaseline="alphabetic",u.font=`400 10.5px ${h}`,u.fillStyle="#555249",u.fillText("Samo za tebe.",200,351),f}async function c(l="Arial, sans-serif"){let[,h,f]=await Promise.all([document.fonts.load(`400 24px ${l}`),n(),(async()=>{let M=new Image;return M.crossOrigin="anonymous",M.src=yi.paperBump,await M.decode(),M})()]),u=[],d=(M,A=!1)=>{let p=new di(M);return p.colorSpace=A?Mn:Te,p.wrapS=p.wrapT=en,p.magFilter=Le,p.minFilter=fn,p.generateMipmaps=!0,p.anisotropy=8,u.push(p),p};return{paperBump:d(f,!0),vellumMap:d(a()),vellumInkMap:d(o(h,l)),dispose(){u.forEach(M=>M.dispose())}}}return{createVellumMaterials:c}})(),{createVellumOverlay:mm}=(()=>{async function i(e){await document.fonts.ready;let n=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],r=[n,...n.querySelectorAll("*")],a=(d,M,A)=>{let p=getComputedStyle(d,A),g=["display","position","width","height","top","right","bottom","left","box-sizing","margin","padding","border","border-top","border-right","border-bottom","border-left","border-radius","box-shadow","background","background-size","background-repeat","background-position","opacity","mix-blend-mode","z-index","overflow","font-family","font-size","font-weight","font-style","font-kerning","line-height","letter-spacing","color","text-align","text-shadow","text-transform","text-wrap","white-space","flex-direction","justify-content","align-items","gap","max-width","min-width","transform","transform-origin"];for(let T of g)M.style.setProperty(T,p.getPropertyValue(T));return p};s.forEach((d,M)=>{let A=r[M];a(d,A);for(let p of["::before","::after"]){let g=getComputedStyle(d,p);if(g.content==="none"||g.content==="normal")continue;let T=document.createElement("span");a(d,T,p),p==="::before"?A.prepend(T):A.append(T)}}),Object.assign(n.style,{position:"absolute",left:"0px",top:"0px",transform:"none",margin:"0",boxShadow:"none",willChange:"auto"});let o=[];for(let d of document.styleSheets)try{for(let M of d.cssRules)M.type===CSSRule.FONT_FACE_RULE&&o.push(M.cssText)}catch{}let c=new XMLSerializer().serializeToString(n),l=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1860" viewBox="0 0 400 620"><foreignObject width="400" height="620"><div xmlns="http://www.w3.org/1999/xhtml"><style>${o.join(`
`)}</style>${c}</div></foreignObject></svg>`,h=new Image;h.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(l),await h.decode();let f=document.createElement("canvas");f.width=1200,f.height=1860,f.getContext("2d").drawImage(h,0,0);let u=new di(f);return u.colorSpace=Te,u.anisotropy=8,u}async function t(e){let n=e.querySelector(".li-stage"),s=e.querySelector(".li-card"),[r,a]=await Promise.all([gm(getComputedStyle(e).fontFamily),i(s)]),o;try{o=new Zs({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(w){throw r.dispose(),a.dispose(),w}o.setPixelRatio(Math.min(devicePixelRatio,2)),o.outputColorSpace=Te,o.toneMapping=Fs,o.toneMappingExposure=1.1,o.setClearColor(0,0);let c=o.domElement;c.className="li-webgl-vellum",c.setAttribute("aria-hidden","true"),Object.assign(c.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"2"}),s.after(c);let l=new Un,h=new $n(-8,8,4.5,-4.5,.1,60);h.position.z=22;let f=new dn;l.add(f);let u=new Wn({map:a,toneMapped:!1}),d=new de(new rn(4,6.2),u);f.add(d);let M=new je({uniforms:{peel:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float peel;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*vec2(4.,6.2);float t=smoothstep(.015,.87,peel);float edge=3.09-(6.18+.12)*t;float d=dot(p,vec2(.92388,.38268))-edge;float a=exp(-d*d/.22)*.18*sin(peel*3.14159265);gl_FragColor=vec4(.22,.17,.10,a);}",transparent:!0,depthWrite:!1}),A=new de(new rn(4,6.2),M);A.position.z=.007,f.add(A);let p=pm({bumpMap:r.paperBump,map:r.vellumMap,inkMap:r.vellumInkMap});f.add(p.mesh);let g=new _e(1,1,{depthBuffer:!0}),T=0,R=0,v=null,b=!1;function y(w,N){T=w,R=N,h.left=-w/200,h.right=w/200,h.top=N/200,h.bottom=-N/200,h.updateProjectionMatrix(),o.setSize(w,N,!1);let F=o.getDrawingBufferSize(new Gt);g.setSize(F.x,F.y),p.setBackground(g.texture,F.x,F.y),v?.dispose();let H=document.createElement("canvas");H.width=w,H.height=N;let _=H.getContext("2d");_.save(),_.translate(w*.5,N*.4),_.scale(w,N);let O=_.createRadialGradient(0,0,0,0,0,.6),q=getComputedStyle(n);O.addColorStop(0,q.getPropertyValue("--li-stage-center").trim()||"#faf9f0"),O.addColorStop(.7,q.getPropertyValue("--li-stage-edge").trim()||"#f5f3e8"),_.fillStyle=O,_.fillRect(-.5,-.4,1,1),_.restore(),v=new di(H),v.colorSpace=Te}function m(w){if(b)return;(w.width!==T||w.height!==R)&&y(w.width,w.height),f.position.set(w.cardX/100,(-R*.06-w.cardY)/100,0),f.rotation.z=-w.angle*Math.PI/180,f.scale.setScalar(w.cardScale),c.style.zIndex=String(w.zIndex),p.update(w.peel,0),M.uniforms.peel.value=w.peel;let N=p.mesh.visible;c.style.visibility=N?"visible":"hidden",N&&(p.mesh.visible=!1,d.visible=!0,l.background=v,o.setRenderTarget(g),o.render(l,h),o.setRenderTarget(null),d.visible=!1,l.background=null,p.mesh.visible=!0,o.render(l,h),e.dataset.vellum="ready")}function S(w){w.preventDefault(),P(),e.dataset.vellum="unavailable"}c.addEventListener("webglcontextlost",S);function P(){b||(b=!0,c.removeEventListener("webglcontextlost",S),p.dispose(),r.dispose(),a.dispose(),v?.dispose(),d.geometry.dispose(),u.dispose(),A.geometry.dispose(),M.dispose(),g.dispose(),o.dispose(),c.remove())}return{render:m,dispose:P}}return{createVellumOverlay:t}})(),{createRibbonOverlay:Mm}=(()=>{function i(e,n){let s=new Ls,r=l=>(l.wrapS=l.wrapT=Vi,l.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),l),a=r(s.load(yi.silkNormal,n)),o=r(s.load(yi.silkRoughness,n)),c=r(s.load(yi.silkColor,n));return c.colorSpace=Te,a.repeat.set(.35,.35),o.repeat.copy(a.repeat),c.repeat.copy(a.repeat),{normal:a,rough:o,color:c,dispose(){a.dispose(),o.dispose(),c.dispose()}}}function t(e){let n=e.querySelector(".li-stage"),s=new Zs({alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.outputColorSpace=Te,s.toneMapping=Bs,s.toneMappingExposure=.94,s.shadowMap.enabled=!0,s.shadowMap.type=sa,s.setClearColor(0,0);let r=s.domElement;r.className="li-ribbon-canvas",r.setAttribute("aria-hidden","true"),n.append(r);let a=new Un,o=new dn;a.add(o);let c=new $n(-8,8,4.5,-4.5,.1,80);c.position.set(0,0,24);let l=new Ka,h=new ns(s),f=h.fromScene(l,.04);a.environment=f.texture,a.environmentIntensity=.38,a.environmentRotation.set(.1,.85,-.52),l.dispose(),h.dispose();let u=new Xi(16774633,1.36);u.position.set(-4.5,6,4.2),a.add(u),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),Object.assign(u.shadow.camera,{left:-4,right:4,top:3,bottom:-3,near:.1,far:24}),u.shadow.camera.updateProjectionMatrix(),u.shadow.bias=-1e-5,u.shadow.normalBias=.0015,u.shadow.radius=2;let d=new Xi(16054015,.17);d.position.set(4,-2,6),a.add(d);let M,A=!1,p=i(s,()=>{M&&!A&&S(M)}),g=new _s({color:12887398,map:p.color,normalMap:p.normal,normalScale:new Gt(.32,.32),roughnessMap:p.rough,roughness:.35,metalness:0,sheen:.48,sheenColor:new Ht(14261885),sheenRoughness:.46,anisotropy:.88,anisotropyRotation:Math.PI/2,specularIntensity:.66,side:Ge});g.onBeforeCompile=N=>{N.vertexShader=`varying vec2 silkUV;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
silkUV=uv;`),N.fragmentShader=`varying vec2 silkUV;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <map_fragment>",`
#ifdef USE_MAP
vec4 sampledDiffuseColor=texture2D(map,vMapUv);
float fibreLuminance=dot(sampledDiffuseColor.rgb,vec3(.2126,.7152,.0722));
diffuseColor.rgb*=clamp(.91+fibreLuminance*.18+(fibreLuminance-.36)*.60,.90,1.06);
#endif
`),N.fragmentShader=N.fragmentShader.replace("#include <roughnessmap_fragment>",`
float roughnessFactor=roughness;
#ifdef USE_ROUGHNESSMAP
roughnessFactor=.34+.14*texture2D(roughnessMap,vRoughnessMapUv).g;
#endif
`)};let T=dm(g);o.add(T.group);let R=new de(new rn(6.8,4.4),new Wn({colorWrite:!1}));R.renderOrder=-1,o.add(R);let v=fm(s,a,o,R),b=0,y=0,m=-1;function S(N){if(A)return;M=N;let{width:F,height:H,scale:_,angle:O,y:q,progress:B}=N,tt=B<1;r.style.visibility=tt?"visible":"hidden",tt&&((F!==b||H!==y)&&(b=F,y=H,s.setSize(F,H,!1),c.left=-F/200,c.right=F/200,c.top=H/200,c.bottom=-H/200,c.updateProjectionMatrix()),T.update(B,Math.max(16,F/(100*_)+4)),B!==m&&(o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.setScalar(1),v.update(),m=B),o.position.set(0,(-y*.06-q)/100,0),o.rotation.z=-O*Math.PI/180,o.scale.setScalar(_),s.render(a,c),e.dataset.ribbon="ready")}function P(){A||(A=!0,T.dispose(),p.dispose(),g.dispose(),v.dispose(),R.geometry.dispose(),R.material.dispose(),f.dispose(),u.shadow.dispose(),s.dispose(),r.remove())}function w(N){N.preventDefault(),P(),e.dataset.ribbon="unavailable"}return r.addEventListener("webglcontextlost",w),{update:S,dispose(){r.removeEventListener("webglcontextlost",w),P()}}}return{createRibbonOverlay:t}})(),{mountEnvelope:Em}=(()=>{function i(t){let e=t.querySelector(".li-stage"),n=[...t.querySelectorAll(".li-envelope")],s=t.querySelector(".li-flap-layer"),r=t.querySelector(".li-flap"),a=t.querySelector(".li-card"),o=null,c=!1;mm(t).then(O=>{c?O.dispose():(o=O,P())}).catch(O=>{t.dataset.vellum="unavailable",console.error("Vellum could not start",O)});let l=t.querySelector(".li-table-shadow"),h=t.querySelector(".li-scroll-cue"),f=t.querySelector(".li-stage-heading p"),u=t.querySelector(".li-skip"),d=t.querySelector(".li-replay"),M=matchMedia("(prefers-reduced-motion: reduce)"),A=null;try{A=Mm(t)}catch(O){console.error("Ribbon could not start",O)}let p=0,g=0,T=0,R=0,v=1,b=(O,q=0,B=1)=>Math.min(B,Math.max(q,O)),y=(O,q,B)=>{let tt=b((B-O)/(q-O));return tt*tt*(3-2*tt)},m=(O,q,B)=>O+(q-O)*B;function S(){p=0;let O=M.matches?1:b(cm((window.scrollY-R)/v)),q=y(.012,.245,O),B=b((O-.19)/.81),tt=y(.08,.28,B),Q=y(.28,.48,B),W=y(.48,.65,B),$=y(.72,.91,B),ht=Math.min(.88,g*(g<700?.88:.7)/680,T/820),Ut=Math.min(1.04,(g-32)/400,(T-142)/620),j=Math.max(0,38-(T*.56-495*ht))*tt,ct=j+(390*Q+380*W)*ht,yt=m(-5,-1.5,tt),Dt=`translate(-50%,-50%) translateY(${ct}px) rotate(${yt}deg) scale(${ht})`,gt=1-y(.48,.65,B);n.forEach(ee=>{ee.style.transform=Dt,ee.style.opacity=gt}),A?.update({width:g,height:T,scale:ht,angle:yt,y:ct,progress:q}),r.style.transform=`rotateX(${-178*tt}deg)`,s.style.zIndex=tt<.505?"6":"1",s.style.filter=`drop-shadow(0 ${3+7*Math.sin(Math.PI*tt)}px ${2+6*Math.sin(Math.PI*tt)}px #716245${tt<.6?"25":"08"})`;let ot=m(90+yt,0,W),Wt=ot*Math.PI/180,at=Math.abs(Math.sin(Wt))*400+Math.abs(Math.cos(Wt))*620,Tt=Math.abs(Math.cos(Wt))*400+Math.abs(Math.sin(Wt))*620,At=Math.min(m(ht,Ut,W),(T-124)/at,(g-30)/Tt),mt=j-145*ht*Q,Pt=m(mt,-T*.06,W),zt=m(-Math.sin(yt*Math.PI/180)*(-145*ht*Q),0,W);a.style.transform=`translate(-50%,-50%) translate(${zt}px,${Pt}px) rotate(${ot}deg) scale(${At})`,B>=.94?(a.style.left=`${(g-400)/2}px`,a.style.top=`${(T-620)/2}px`,a.style.transform=`scale(${At})`):(a.style.left="50%",a.style.top="56%"),a.style.zIndex=Q>.85?"7":"2",o?.render({width:g,height:T,cardScale:At,cardX:zt,cardY:Pt,angle:ot,peel:$,zIndex:Q>.85?7:2}),l.style.transform=`translate(-50%,-50%) translateY(${ct+20*ht}px) rotate(${yt}deg) scale(${ht})`,l.style.opacity=gt*(1-.35*Q),h.style.opacity=1-y(.08,.23,B),f.style.opacity=1-y(.1,.3,B),t.dataset.complete=String(B>=.94),t.dataset.progress=B.toFixed(4),t.dataset.stageProgress=O.toFixed(4),t.dataset.ribbonProgress=q.toFixed(4),h.firstChild&&(h.firstChild.textContent=(O<.245,"Skroluj polako da otvori\u0161"))}function P(){p||(p=requestAnimationFrame(S))}function w(){g=e.clientWidth,T=e.clientHeight,R=t.getBoundingClientRect().top+window.scrollY,v=Math.max(1,(t.offsetHeight-T)/(1+lm)),P()}function N(O){window.scrollTo({top:R+v*um(O),behavior:M.matches?"instant":"smooth"})}let F=()=>N(.965),H=()=>N(0);u.addEventListener("click",F),d.addEventListener("click",H),window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("resize",w,{passive:!0}),M.addEventListener("change",w);let _=new ResizeObserver(w);return _.observe(t),_.observe(e),w(),()=>{c=!0,o?.dispose(),A?.dispose(),cancelAnimationFrame(p),_.disconnect(),window.removeEventListener("scroll",P),window.removeEventListener("resize",w),M.removeEventListener("change",w),u.removeEventListener("click",F),d.removeEventListener("click",H)}}return{mountEnvelope:i}})();function Tu({id:i="the-opening",className:t="",theme:e="auto",fontFamily:n="Arial, sans-serif"}){let s=Rl(null),[r,a]=bl(e==="dark"?"dark":"light");return $a(()=>{if(e!=="auto"){a(e);return}let o=matchMedia("(prefers-color-scheme: dark)"),c=()=>{let h=s.current?.parentElement?.closest('.dark, .light, [data-theme="dark"], [data-theme="light"]'),f=h?h.classList.contains("dark")||h.getAttribute("data-theme")==="dark"?"dark":"light":o.matches?"dark":"light";a(f)},l=new MutationObserver(c);return l.observe(document.documentElement,{attributes:!0,subtree:!0,attributeFilter:["class","data-theme"]}),o.addEventListener("change",c),c(),()=>{l.disconnect(),o.removeEventListener("change",c)}},[e]),$a(()=>{let o=s.current;if(!o)return;let c=!1,l,h=0;return o.dataset.liReady="false",(async()=>{let f=getComputedStyle(o).fontFamily,[u]=await Promise.all([om(),document.fonts.load(`400 24px ${f}`)]);await document.fonts.ready,!c&&(o.style.setProperty("--li-paper-surface",`url("${u}")`),l=Em(o),h=requestAnimationFrame(()=>{c||(o.dataset.liReady="true")}))})().catch(f=>{c||console.error("Le Invite could not initialise",f)}),()=>{c=!0,cancelAnimationFrame(h),l?.()}},[n,r]),React.createElement("section",{ref:s,className:`li-opening ${t}`.trim(),id:i,"aria-label":"Otvori kovertu","data-li-theme":r,"data-li-ready":"false",style:{"--li-font-family":n}},React.createElement("style",null,rm),React.createElement("div",{className:"li-stage"},React.createElement("div",{className:"li-stage-heading"},React.createElement("span",null,"Mnjauprrrrr"),React.createElement("p",null,"Malo i\u0161\u010Dekivanja.")),React.createElement("div",{className:"li-table-shadow","aria-hidden":"true"}),React.createElement("div",{className:"li-envelope li-back","aria-hidden":"true"},React.createElement("div",{className:"li-envelope-paper li-paper"}),React.createElement("div",{className:"li-liner li-paper"}),React.createElement("div",{className:"li-mouth"})),React.createElement("div",{className:"li-envelope li-flap-layer","aria-hidden":"true"},React.createElement("div",{className:"li-flap"},React.createElement("div",{className:"li-flap-face li-flap-front li-paper"},React.createElement("span",{className:"li-emboss"},React.createElement("img",{src:yi.emboss,alt:""}))),React.createElement("div",{className:"li-flap-face li-flap-inside li-paper"}))),React.createElement("article",{className:"li-card","aria-label":"Prsten Mese\u010Deva riznica"},React.createElement("div",{className:"li-card-stock li-paper"}),React.createElement("img",{className:"li-card-photo",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUEBAQEAwUEBAQGBQUGCA0ICAcHCBALDAkNExAUExIQEhIUFx0ZFBYcFhISGiMaHB4fISEhFBkkJyQgJh0gISD/2wBDAQUGBggHCA8ICA8gFRIVICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAYOA+gDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAECBQYDBAcICf/EAF8QAAEDAwIDAwULCQUEBwYBDQEAAhEDBCEFMQYSQSJRYQcTFHGBFjJCRFR0kZOxwdEVNFJVZXWh0uEjM2KjpFZygrIkQ1OSovDxCCU2N0ZjFzhzs8ImZJRXg4SV4sP/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQMEAgUG/8QANhEBAAICAQIDBwMCBwADAQEAAAECAxExEiEEE1IyM0FRkaHRFCKBYXEFI0KxweHwJNLxFTT/2gAMAwEAAhEDEQA/APrpERcrUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQda8vKdlSZUqU6lTneGNbTEkk/wDout+Vv2bf/U/1TVviHzun96yS895le2mN/K37Nv8A6n+qflb9m3/1P9VkkV1PzNwxv5W/Zt/9T/VPyt+zb/6n+qySJqfmbhjfyt+zb/6n+qflb9m3/wBT/VZJE1PzNwxv5W/Zt/8AU/1T8rfs2/8Aqf6rJImp+ZuGN/K37Nv/AKn+qflb9m3/ANT/AFWSRNT8zcMb+Vv2bf8A1P8AVPyt+zb/AOp/qskian5m4Y38rfs2/wDqf6p+Vv2bf/U/1WSRNT8zcMb+Vv2bf/U/1T8rfs2/+p/qskian5m4Y38rfs2/+p/qn5W/Zt/9T/VZJE1PzNwxv5W/Zt/9T/VPyt+zb/6n+qySJqfmbhjfyt+zb/6n+qflb9m3/wBT/VZJE1PzNwxv5W/Zt/8AU/1T8rfs2/8Aqf6rJImp+ZuGN/K37Nv/AKn+qflb9m3/ANT/AFWSRNT8zcMb+Vv2bf8A1P8AVPyt+zb/AOp/qskian5m4Y38rfs2/wDqf6p+Vv2bf/U/1WSRNT8zcMb+Vv2bf/U/1T8rfs2/+p/qskian5m4Y38rfs2/+p/qn5W/Zt/9T/VZJE1PzNwxv5W/Zt/9T/VPyt+zb/6n+qySJqfmbhjfyt+zb/6n+qflb9m3/wBT/VZJE1PzNwxv5W/Zt/8AU/1T8rfs2/8Aqf6rJImp+ZuGN/K37Nv/AKn+qflb9m3/ANT/AFWSRNT8zcMb+Vv2bf8A1P8AVPyt+zb/AOp/qskian5m4Y38rfs2/wDqf6p+Vv2bf/U/1WSRNT8zcMb+Vv2bf/U/1T8rfs2/+p/qskian5m4Y38rfs2/+p/qn5W/Zt/9T/VZJE1PzNwxv5W/Zt/9T/VPyt+zb/6n+qySJqfmbhjfyt+zb/6n+qflb9m3/wBT/VZJE1PzNwxv5W/Zt/8AU/1T8rfs2/8Aqf6rJImp+ZuGN/K37Nv/AKn+qflb9m3/ANT/AFWSRNT8zcMb+Vv2bf8A1P8AVPyt+zb/AOp/qskian5m4Y38rfs2/wDqf6p+Vv2bf/U/1WSRNT8zcMb+Vv2bf/U/1T8rfs2/+p/qskian5m4Y38rfs2/+p/qn5W/Zt/9T/VZJE1PzNwxv5W/Zt/9T/VPyt+zb/6n+qySJqfmbhjfyt+zb/6n+qflb9m3/wBT/VZJE1PzNwxv5W/Zt/8AU/1T8rfs2/8Aqf6rJImp+ZuGN/K37Nv/AKn+qflb9m3/ANT/AFWSRNT8zcMb+Vv2bf8A1P8AVPyt+zb/AOp/qskian5m4Y38rfs2/wDqf6p+Vv2bf/U/1WSRNT8zcMb+Vv2bf/U/1T8rfs2/+p/qskian5m4Y38rfs2/+p/qn5W/Zt/9T/VZJE1PzNwxv5W/Zt/9T/VPyt+zb/6n+qySJqfmbhjfyt+zb/6n+qflb9m3/wBT/VZJE1PzNwxv5W/Zt/8AU/1T8rfs2/8Aqf6rJImp+ZuGN/K37Nv/AKn+qflb9m3/ANT/AFWSRNT8zcMb+Vv2bf8A1P8AVPyt+zb/AOp/qskian5m4Y38rfs2/wDqf6p+Vv2bf/U/1WSRNT8zcMb+Vv2bf/U/1T8rfs2/+p/qskian5m4Y38rfs2/+p/qn5W/Zt/9T/VZJE1PzNwxv5W/Zt/9T/VPyt+zb/6n+qySJqfmbhjfyt+zb/6n+qflb9m3/wBT/VZJE1PzNwxv5W/Zt/8AU/1T8rfs2/8Aqf6rJImp+ZuGN/K37Nv/AKn+qflb9m3/ANT/AFWSRNT8zcMb+Vv2bf8A1P8AVPyt+zb/AOp/qskian5m4Y38rfs2/wDqf6p+Vv2bf/U/1WSRNT8zcMb+Vv2bf/U/1T8rfs2/+p/qskian5m4Y38rfs2/+p/qn5W/Zt/9T/VZJE1PzNw61neU72k+pTp1KfI8sc2oIII/9V2VjdJ+P/O6n3LJJE7gnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGN0n4/87qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDG6T8f+d1PuWSWN0n4/8AO6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQY3Sfj/wA7qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiICLpajqdjpNs241Cv5mk54YHcpdJgmMA9xWL92nDX6y/yan8qytmx0nVrRE/3e4pa0biGwote92nDX6y/yan8qe7Thr9Zf5NT+Vef1GH1x9YXyr+mfo2FFr3u04a/WX+TU/lT3acNfrL/Jqfyp+ow+uPrB5V/TP0bCi173acNfrL/Jqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/wAmp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8AJqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/yan8qfqMPrj6weVf0z9Gwote92nDX6y/yan8qe7Thr9Zf5NT+VP1GH1x9YPKv6Z+jYUWve7Thr9Zf5NT+VPdpw1+sv8mp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8mp/Knu04a/WX+TU/lT9Rh9cfWDyr+mfo2FFr3u04a/WX+TU/lT3acNfrL/Jqfyp+ow+uPrB5V/TP0bCi173acNfrL/Jqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/wAmp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8AJqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/yan8qfqMPrj6weVf0z9Gwote92nDX6y/yan8qe7Thr9Zf5NT+VP1GH1x9YPKv6Z+jYUWve7Thr9Zf5NT+VPdpw1+sv8mp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8mp/Knu04a/WX+TU/lT9Rh9cfWDyr+mfo2FFr3u04a/WX+TU/lT3acNfrL/Jqfyp+ow+uPrB5V/TP0bCi173acNfrL/Jqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/wAmp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8AJqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/yan8qfqMPrj6weVf0z9Gwote92nDX6y/yan8qe7Thr9Zf5NT+VP1GH1x9YPKv6Z+jYUWve7Thr9Zf5NT+VPdpw1+sv8mp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8mp/Knu04a/WX+TU/lT9Rh9cfWDyr+mfo2FFr3u04a/WX+TU/lT3acNfrL/Jqfyp+ow+uPrB5V/TP0bCi173acNfrL/Jqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/wAmp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8AJqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/yan8qfqMPrj6weVf0z9Gwote92nDX6y/yan8qe7Thr9Zf5NT+VP1GH1x9YPKv6Z+jYUWve7Thr9Zf5NT+VPdpw1+sv8mp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8mp/Knu04a/WX+TU/lT9Rh9cfWDyr+mfo2FFr3u04a/WX+TU/lT3acNfrL/Jqfyp+ow+uPrB5V/TP0bCi173acNfrL/Jqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/wAmp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8AJqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/yan8qfqMPrj6weVf0z9Gwote92nDX6y/yan8qe7Thr9Zf5NT+VP1GH1x9YPKv6Z+jYUWve7Thr9Zf5NT+VPdpw1+sv8mp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8mp/Knu04a/WX+TU/lT9Rh9cfWDyr+mfo2FFr3u04a/WX+TU/lT3acNfrL/Jqfyp+ow+uPrB5V/TP0bCi173acNfrL/Jqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/wAmp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8AJqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRa97tOGv1l/k1P5U92nDX6y/yan8qfqMPrj6weVf0z9Gwote92nDX6y/yan8qe7Thr9Zf5NT+VP1GH1x9YPKv6Z+jYUWve7Thr9Zf5NT+VPdpw1+sv8mp/Kn6jD64+sHlX9M/RsKLXvdpw1+sv8mp/Knu04a/WX+TU/lT9Rh9cfWDyr+mfo2FFr3u04a/WX+TU/lT3acNfrL/Jqfyp+ow+uPrB5V/TP0bCi173acNfrL/Jqfyp7tOGv1l/k1P5U/UYfXH1g8q/pn6NhRdLTtTsdWtnXGn1/PUmvLC7lLYMAxkDvC7q2i0WjcT2eJiYnUiIiqCIiDG6T8f+d1PuWSWN0n4/87qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGt8Xfm+kfvKj9jl2Mrr8Xf3GkfvKj9jl2Fjj95f+Gs+zAkIonwXQzSoSfBEAKYIyox0Ug5ygiQpCkieijb1ICKRBzKicxCBHcpUT4KM7oJkDCblQMnKEEbIJMKJLcIJVolA3Cg4Qy0pHMN0ETlMyhEBRKC0BICgeCkhBUkjdDtIVoxCqBhAAUwoUoIhSoRBKdFCSUEwIUDGFM4Q4QR1UnZR4qcwghMoZUZG6CQhU9MKv8EA4UyqtOcqSIKCZSe9VkSnegkjqFMy2CVUE+xTAOUEiEgqqncboJIzKBVJIMKRlAO6mZVZzCbboGCmIU4TA3QVz0VoQqJygTmAiYnG6ICSVCZlBYboYUZlMoIhSPUoU8yCeqJg7JlBB3SFMFVMgoJkzlDCj1p1hBIiFCDEogSgn2IrAIKwoII8QrEZQYQJxsiTlPWgIkIdkAjqFXKAyYKdUEzhAcp4KOqCcyhyIQmcKJgoG26GJTPdhRkIILZON0yNwm5kJ2pygAmfBSR1CBEEOGxUGISSrIONwwFElX5SoLSgqCDhNt05U9aCpRSRlCvQjHtXG7cqdnKHCcheQGVBQSFMiFRz8G/mWqfvGr9jVs61jg38y1T941fsatnXLg93D3l9uRERbsxERBjdJ+P8Azup9yySxuk/H/ndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIg1vi7+40j95Ufscuwuvxd/caR+8qP2OXYWOP3l/4az7MClRlJXQzIUKVOO5BXHRSI7lMCMIMIIzOE8CpPggPegqY2CtkBCBuFHrQRzSdlMqICICSrHZVG6CVMxsoQAoJid1Utg4VlAPegYIUR4IRnCA96BspmUKgIJKrJ2ViqHwQWUkYVQrTKCuyHOyt73ZN+iCoCHCkbqTCCjTnKkmUIypaAggHCkHwUkDoowgguGygGd1JAmYUObiQgnuyhbPVVykulBIE46qZ6EKDO4QPk5CBAJU/4SocMyFIz60FeUjogKtJ6qrmzkboEiYhDjZNxndA7l3CCJB3QEjZW5QchUggoJ8VbmBGVWchWwgmQhjqq8vip8CgnsqDAbKQIQSD4IIiWyMFVaSDlXBHP3BCCCSNkESCSgQ5ypGyBjeVGApwhiEESFJgbqC0EYKDtNg9EEwOiZ7lHcrAyIKBlVMqcjxQnoUEBCAnKNwUnoUETHSUnwViIEqnsQJE7q4Piq8oQSJQTzCcp6gpwRB3UDBhBAKZnKkpugkKD3QpPghVFSMYUDfOFfISJGQgqMOncI4SZCmIVTM4UEj6FXHXCmFPLIz0VEJugPQoBlBX3uytIITcwoOFBKhBtlCgjbxTcbKQJRBGYwVGeqsonOUD2KhGVydVU4KChBUblchVDjZBUgHZVhX9SgjMqivsUQrhQqOXg78z1T941fsatmWs8Hfmeq/vGr9jVsy5MHu4e8vtyIiLdmIiIMbpPx/53U+5ZJY3Sfj/AM7qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGt8Xfm+kfvKj9jl2Acrr8Xf3GkfvKj9jl2Fjj95f+Gs+zCcKESF0MxTuFGVWXNKC+yk5CjfKSgZCKR4qCEEQJTrCJEoJ6wVCb7ogFMIohBaQpyqqyCFCsoO6CM4QjKHCjm8EA4TohPgoyEElRCetEEDCtuhyMKsmYBQTJBSSCpgkSo65QT4hI6hBiVPqQVG+VMZUlRE7oCQEiMKPUglDIyoyoyOsoLbqPAoHZypOEFQIO6h2+ymcqZHVBWCNsoN5CkEbIBCCw3yoMtOFBncK0yMoKwDnqknMiQhhJKAIjCHZREFJQM9ymFaMKIQRGN1Pr2UZ7kCugIHRSogqVAgEZ3U7hVKs3AVFSFXmOxVjuoIyoIUhTCjZAAgyFPRIwiB1U7quVMoEeKg+KSp3CCNjIUmHCeqhpg96k4QQD0KYnCjE5Ux1CCemFEmMqREJIQRupSJTwQIzupwqygCuhKKEmFRKEmVEp1CAUCndFBBHcoG8Eq09yjcoIIygwVKiJQRAmdioE5lTmUKgqQVLThTKAGUA5yFUzCnModkEZSVI2UAd6AkK3qUSgrCjlPcrJzEoKAdChbAkKdyomDBTYrEqYwrQDkKDsqJ4O/NNV/eNX7GrZlrPB/5pqv7xq/Y1bMuXB7uHvL7ciIi3ZiIiDG6T8f+d1PuWSWN0n4/87qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGt8Xf3GkfvKj9jl2V1uLf7jSP3lR+xy7UFY4/eX/AIaz7MI6opIhRK6GZhDkp1UIAMFSROQohAYKCU6qdxKqgnCnoqqQUESECSJ2TbZBBKkbZVTlWPvUExOyAg9VLfeyqDcoLRlQd1AJOEcUEndJCiVBEZQTKndQIKkBBBCQpJhRKAIURmUI7kbnBQBIPgpLZyh3hBOyCIKbKehUdUFuihVBzClAJUAqZlQMqiSUKkBCMKCJ8FLlHgU8EEtjqoIwogqfHogqApG6b7KQEAqBspKgbK6A9FIUdFCaE/CU47lDRlSdk0IypkhRBUwmhKqd1ZR0VEQVIUqDuvIhJyoKKiSpO6rMBW+DKghMKOiboJBRRCkSgiIKKSCoQECIQUDZWMKp2UjG6CHCduiAQpkKswYQEAypjCgAygsiZRXQjqp3TZNiqKmQdkMxspIJKdYQQFKsQAFUiEAKcd6hIB3QTGVBnuT1boD0KCJ8E9SEwU32QEUKcnZQTACj1Jkbp4hNAQowpgwq7IJjuQkqRAChQRGJVcq52VUCCo2Oyt0Ubbq6EZ8EIkKUOE0KAQhzsrESMKBgIHB/5rqv7xq/Y1bMta4P/NdW/eNb7GrZVy4Pdw95fbkREW7MREQY3Sfj/wA7qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiINb4t/uNI/eVH7HLtDddXi3+40j95Ufscu1hY4/eX/AIaz7MIKKCm+66GYSU6qYTpCCJjCEYSEz3oAMKSJEhSVAMIIGyZ3VneCjYCUEDOUnpCHvQESgcoOUfkAKTIUdUEZA3Vh73CgiVAwECcY3Ugg7pB3UHdAwoypUTCCeikTGFAzlThAMKN0jIUnJQQZUR3KQe9TtsggdrwKjqpOMhTAcJG6CNlGxBUjxUEczt0FTk4UxDVEQVYkQgqBKkBSEVDOybdUhRGcqCQZT1oRGyjdA2OUPhspJTBCCITwSD0U9MqwI2UwozPgpKAhUBSU2ISUQHKbAlJRFRMqZVVPrU2I64UjO6hJIBUDcwgiVAMlWwEEASMJPKcqJ5Sp986UCDMqB1V5EKg3JQT1KepRhBMoJyonOykDKOwggwUOFEdQgM4KC0c2xhVg5UgeKSYQQGypiEEkKwBlBVPBWOyhXQj2opjCiFRKnChMFBZVPcVZVcJ2U2KwZUnESUB791JBhA8UKR3p6lRGDsokDdDg4UntNCAYKNwU6QoKCUQZE9VEIJUFJ6IQgkKEUqCIU9IRVQNigam+6jqoJhQQkqV6ET3qHRCk4KGCEFcjZPfDxSICmMBBHB/5rq37xrfY1bKta4Q/NtW/eVb7GrZVyYPdw95fbkREW7MREQY3Sfj/AM7qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiINb4u/uNI/eVH7HLnMhcHFv9xpH7yo/Y5dkwVjj95f+Gs+zA3aUKbBJldDNAPRCihBKIPFMIHtUnaIUYlTgIK74UxiOqT1ASdjsgHtAKCI6qxHUKpgoEkHOQrDvVSFJwEDIKDxUZ8VY53QVSMIYGEOyCJQ5UQpyCgeCeCnEJ0QBISZOFHNBynvTKCZBT2qBBPchx1QOsSoBLcqRB6p4O2KC0hwnqqR2kIDThSO9BOwVcFST0TlAE9UERHVJ6J0ym4wgKdyoB702PegkmFAOdkJyhyZQWVY7irJEBBWDuCkk4KkbYwowT3IExhSCocCIAKj2qiSkoVA3UEqIVuqY2QVnlUgyoOHQdkEdMK7E7KDKn2pBUCU6KpwVIMboJ2UqOqgkoBCNHeUG2UQSd4UbFJRAiSpG8KRhRGZQROVPNOCEj6VEicoHgpgKDE4MqY+lBEKDhTkIYI8UDMKQqglJQWlQDKTITCuxKSntVSmxKnbZQmU2JlJUZUwoIOcoCSDKbJvursEBA3SEMJsDAOE2QQAhIjCBOU5cTKgHOUyHKhMbKQJCb5CiSED1qdsIRIUDZBJKieqg7qQgeKFThQZ71BESozMQp8QgcHH1IIhTPRTKghNgVWFJMpAjKojp3puBCb4UxBwgrwh+a6t+8q32NWyrWuEPzbVv3lW+xq2VcmD3cPeX25ERFuzEREGN0n4/87qfcsksbpPx/wCd1PuWSUrws8iIiqCIiAiIgIiIMbq3xD53T+9ZJY3VviHzun96ySkcys8CIiqCIiDW+LvzfSP3lR+xy7Gwwuvxd/caR+8qP2OXYgzPRY4/eX/hrPswk5CqcNyrNOcoG8xwuhmoN8qxHcocIKsBhA6KMJEpjqgkQoJEoo9aCygpKSggYCQAU3KkhAQRKSBhSeUHAQQd1XqpO6mMoEBVzMK0y6AgImCgg7pBKTyuz1UGQUA7ITjKkjEqDvlABB3QwNlBgKAYQWMdE5SRIQKZjPRBAAQ4wVYw4YKgEFuUFShKRHVIQSATlJ6KMhWjEoI2weqgADKmJVY8UE5UDmVgpIMSEECDhRsfBC3KGNggknOFJICpsVMhAOdlPighSggiVBb1UnGUAnMoKSrBDvgKRBGQggmUxCNIgg7KYEGAggOkZVTgydlIgCCgHfsgEECQjXA7odkwRjdAc3qoHaKlrvguQtgyEE9oHZQSpDpEDdIKCPWh8FKj1oAHZ8VICgzEhAeiCeqtOMKMBJ6hBBdnG6nBVYHNhTjqEAthE6bqQJGEET0KiRspDuiObAkIIAgzCgwTKkGW5UtCCAAoO/gpjMBDEwUERndD61MYwoaJKCVKoZBjqpG0IByk5VmtEKIQOiKDsfBGmd0FgCExKgyOqTPrQSYVNuittuo8VQwQpjCiATjCiCMFUWB5cdFOHbKs5gqSIMjZBAwgIVjDhMKhQSTCHwScQU9SCISVaJUEQgYggKgbJVpUnvCgqDBgq3MCYUESoIxhQTsokSgmcqcOcYXoQd8KQYdBTdJEqCnCH5tq37yrfY1bKta4Q/NtW/eVb7GrZVy+H93D3l9uRERbsxERBjdJ+P8Azup9yySxuk/H/ndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIg1vi7830j95UfscuwM9V1+Lv7jSP3lR+xy7AwVjj95f+Gs+zCCYKAkbIIlSMFdDNMS2TuoJxGysBuqboAKEKYTpCCJVoVTHqUSYyEFsJyqoJOymSgnlhSfWomTlDGyAeXdPfIRChxaBhA65U4MwUaQWyUEAlBAwZSROU6ogg5Mocq0KCMIIcZapgGIQdZVAYKCxEmNlEAGFfBEhVGTlAjuUjOCoy0qfFAAAKkAET0VTkQoJIO+EEkAmFIaAMqvWQp5smUAkbKOfpGFIg5RrQSZQBkSFBnog7JIOynqgCFBJ9isRjxVcoJkwoAgyrT4Igr1TCjmjdTsgeGyHET9KjfKk9psIIJJEBGtc3ZSzOEBLTHRBPiUBG6AzIKiIkIIkdytkepVaBBlTMjKAQOqhpzBViZCiAgtAGdwqkRkKZ6FOUEboKkTkBWaQ4QcKB2UMYIQVILXSFZrp3UyDg4TlHQoIJyhgiEJjogMoA2gqIDSpzOEIxlBAnuwpkbbKA6DBVi1pEoIIIyFAIIykkHlOymACgboJBQwCpmUEFsZCThTsqnAwgR3JkDIUTAkKRJ3QN8goWzkqcNGOqrOUEgDvQDlydlA3UkzghBMAiTuq9YU7KIEoGQpJnIKY2VDgoLk+Cjs96AyogSgvHWUPhgquxxsrHOQqKz+kmRspdBGyq05gqi0A+tB3OUkYkKBlAgE5TIxOFMgjZR4dEDbbZTuJCjbc4UjqQUFRkwhwcIe9WwQgjpITfBUSQYUu2kIILYKggtcAdlIJcM4KCXAAoEgbKOshWgTBSI2QQdlUAjIVxsnRAbEQd1UtjO6H3yExAXkU4Q/NdW/eVb7GrZVrXCH5tq37yrfY1bKubw/u4e8vtyIiLdmIiIMbpPx/53U+5ZJY3Sfj/AM7qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGt8W/3GkfvKj9jl2iJyei6vFv8AcaR+8qP2OXb5u8ZWWP3l/wCGs+xCh3gBWEQm4wFAXSySAO9UBzCmSEAG/VFWjGN1EEgSoa48ykjmyCvIqQScqJMwrDtYVuUAT1QQBAVSUBMqYQR4qZBCrKn1ILAgiHKphp2lPfEThT4FADp6KDjEYQyMgKZlBGFElDl0qT9qCQZSMKo33VkEd6ASFBE7KZ7MIImFYQ5UGRndMjPcgmZOU6qZDxjdQ3eCgFRBlTuVKAACkdSFByfUp23KCuIxurTIUYlTHcgiO9RsVcqkSqLSVGVElTmFAJVZ7knopjCCZAGRKgnwQjHegdzYIQB3hCZiFOx8FDhmQqJcOUAoCHCVYGW5VcTCAR1VhtlVgqS6BEKCswSRspwW7ZSMT0UgSgq05g7Js5CEHa3QSYISCDhRA71JnoqEzgqCIym6ZCgkFIjZRvkKJJO6CZPUJEiYU52KqZB8EBSHY2Q7YCDbZAgO9arzFroUwZVo5hEIEAtnqoDgRlBLTHRC0ESCgQHD1KgkGCrAnpgqTO5QBkZSAo3Q+CAZ6BSD4KATCZhBJzCrGVIJA71MSEEHYKYwoOMKZwggjOUhTPfupwgoT4KcEZUuGJVZnGyCsRspBnHVWI2QgSgjZT0kJIJgoRnCoeISJEqASDsp97lUQDBjorQHKuQZAUz1H0IHWFEmVbEKsoLSI2URJlQrZjCCswUMDIViMKoQJUdVMZKQERMT61E926T3IROeqKE96ttuq74UnuQITKc0BQSSgj4SEjmyp6eKgDOUFOEPzbVv3lW+xq2Va1wh+bat+8q32NWyrkwe7h7y+3IiIt2YiIgxuk/H/ndT7lkljdJ+P/O6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERBrfF39xpH7yo/Y5dqe9dXi3+40j95Ufscu1AIyssfvL/wANZ9iDIyFJOFUOIwU5jOy6WQSe5ARCEzspJxsiokZhVEyhOICDAXkckiJCoTIUNB78K0A46oI5cSgcSIViex6lUthnMEFTMwgBBVjlgPVQ3vKCxAdtuo3wUE9EOdt1YA9ygkdFaZHiFXfKSIiT4jorAy3xCgkRPVIgSFAidlMwo5RuCgdOCgGFAUE8uFIQTIDtk6kd6iJKAoIggyFZsOwd0lQf8KBs6FPRGuGx3QDKCO9EcSDgICCMoEh2FIUcohBgqiSYKn2KCT0CA5UEEqAYwVcxCgQDlBScqzp5RhABzZUkwfBBVpl0I5mJCktzLVIdIgqwKNJ3KuCCoaN0AyqIOCI2R4BIPVScYhNt0EhxAiFBJ6pkGeik5UECfYk5QEypIxCgiVGxSPFSCdiEE7IDhIzlIzCCuZwpknBQghyAjZyCACEInIQiMg4TfZBEEGVJM7pmEHigkDEqB1VicQOiqCTIQDKgyckqfWiA3IjqnKW9ZSDyyFAdBygRJwpkgQUcPhNSSR2kEHvSE26qcwgj1KCSrEYVPWgkFTB71G+ylAMEKJPwcqziAyBuoEjMIIgqYU9reFG4QMqN1boqgBBOZgqXDMpOFWVQP8VLTGCm6fBgqiTEpsqtk4O6mSMIHVRsZU4I8UGTBQAZMqOVScGApbPegrkbhS3uKEqJwgsSojKbhVHNOUFiMKEGyiJGEE7KZyqAE7qRvlBaB3p0VTM4KZQTKnJGyiJQyMIEpEpGEjuQcfCH5tq37yrfY1bKta4Q/NtW/eVb7GrZVyYPdw95fbkREW7MREQY3Sfj/wA7qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiINb4t/uNI/eVH7HLtTIwurxd+b6R+8qP2OXYbgwVlj95f+Gs+zCZnIR0xgKB2XHxVh3rpZqtgnuKmY3CR1CkEndERvkBRM9FaIMhMHbdBAwqwZkKxE+tSiqntNico3mjllJhymcygqw8pLSrFpacbKHwQCjXGMoG2yAye5B2TnZCJy1SQO+EmVEZgokAc9E29SSTgoO4qiDg+CGYwmQY6IRGygSDvunLlQRGQrbgAqBCHZSN+UqpHKUATmUnuUyFPiEEDaeqTKHPrVTLTIXoSDDlBGCe9SRzjm6qGnoV5EtRxypAQCd0FQcKYHVPemUI5shA2GCoBzlWbjdVjtFWByYjZUce5O0EnGySDTgqSJyFEQZCmZyEgQHSYOE9SObIkbqASPfJIGSQFDpJhWHaMqQQSQd1BUGBBU+J2RzeY+pQJ2KCZzjZTn2KM7DZQPEqieu6bFREkQrZ2UCcbJ9qZAQIIElyRKnqVXMGEEzGDsoIPepgxJSZVEjbdPWqxCsDiFAyFXc+KsJAVSJPMNwgb7qPYrAAqpkHbCC0kDGVEgt7ipbMSCoPaPcUBvMRylAejlIJG6OgtKCjmwFPcFIwJVonKCrpiFXPVW3KRJQAMIqmRgK0kYCCPWE3U7bpONkEgnl8FG2Qknbop3EIEGJKpCv4KI6IIBjCjMqR75SYOAgrmVIJCO6EKRkKgQHZCg9oeKbJs7mHVUVBIMK2ZBUOzkID0KCfhKDkyFOC0FV9SkiebwUt2yqzO6nJUE5Vc9VYRBCrsglOspE+tA47EIBzlqQH+tTJAkbKD2Tz9F6A93cgmVIf2phD76SgbYKjMqesqfUgqRlJjZTlRCDj4Q/NtW/eVb7GrZVrXCH5tq37yrfY1bKuTB7uHvL7ciIi3ZiIiDG6T8f+d1PuWSWN0n4/8AO6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERBrfF39xpH7yo/Y5dg5K6/F35vpH7yo/Y5dh0mCN1jj95f+Gs+zBmcjCOkiAUyRBG6ZbgjC6mYJDYSSDBOEzKlzSUE5G2Qm6q1xb2XK3L1REAFIJ3QT0KkTtsgqQEUEAOSB0KKKSo8CpgwggmRCiYUwOqEe1AmRKeCBDMycoIMgpPMpJJHioEHbBQCDGUb3FWBJwVBZhBPLA3VY6ypDpaRCAiI6qCOaRnCDLoKnkDmzOUa2QZKAWgJJb6kk7FJGxygRnmCnl5myoJ5c7hBPRURlrcK0BwnqnNGCJSCASERWVPipgOGMFUgqKmTMdCgw7dWEER1VS2EEkIBPrUB8bqSIEt3VASDCGQoDhscFTB71JDbKqeyZCB04UkZyVBYCRzTCGHAg7qu2xUyDnqggNAGCnvclSJ5pjCOHMgASZCDeCoB5cFWMckqipkGBkKIHMFcbQq8pBKgsYkQm3VVjMqeWd0E5IUA5hTymMFQYBzuggwDup6EBQYKjIwEFogTKZJwFJEDdMnbCCI70gIQQO9AR7VRBkBACcgwrkYUAQN1BSIdurn3sFVMEpJI5SrAjlLdlJMjIUtd0KjlJwEkRkBJxjqrRAglRAiQoIggb4U5jdQRzNCk4ACCeXEyoIlCD3qRhBUCAnMJgDKknuUEHmwgEGRKkg96iDMqIJOUEzhTLVWFJgBBbESqj3xBQSUjCCsZKlkB0FSNyFUNJ6qi2xLeiRBSQ71hRImCqBHVB6lM/QoLkECeZS4A+CSZyo3O6CsxhWGxKqWy5TMCECObKloPfhS33mMQgEqSAGSFGxUwRmd1SIKgsZlTzYUxIVAMoJmAoBOx2VoE5UGJwgkboRKgbqZ7l6E4KQO9VhCYCCSimO9Qg4uEPzbVv3lW+xq2Va1wh+bat+8q32NWyrkwe7h7y+3IiIt2YiIgxuk/H/ndT7lkljdJ+P8Azup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQa3xd+b6R+8qP2OXPK4OLvzfSP3lR+xy5ztAWWP3l/wCGlvZqnpIQknogMYTI32XS8InvV5d1VCOoUgmYlBLsuCguLTB2VoG05VcxByiLYBlqEh2xhUHZPeFMYlFCFA8UlD3oEjqoJKdVJwUEEKR2RnKOyEBwgmA7ZRkNUxIkFO+TlBEfCCjEbQU8dlOHesIKyQZXIDIhU5uh3UGQZCBkPQ7yArHwOUBBH2oI6SD7EkkSN1MtnCgggygkkGJUHfld12KtyhwxlVGcO6IES2AoZgQSZUgOYZ3Ctg+BQQQY2QEgw4bqzSWiCqkZmUDqYU7jG6iMbqWugwQgpB51YuIkEKrpLsKeYxBQTyzmd1UywgbqwGMod1BBhwxukEhWMdFV0giCgmARhQ4H4SnBEgqMuBlBGyGSJBQZEFOvKEFoJ8EEynXKgETCgktDjMpkCEb75TgnxQRuVEnmUCQ/KsCC4ghBYkbAqhkJA5pUzlABMZCHtHCSSJQBAwDHVSPemVDffqSgqQd1LT3qSDGCgb3oJnGFXfwUuxkKsTlBMkCIlN9ypyBAUbnKCDnZNx4hTsmAEFffDuKsDiOqE42QZAKCCO8oRAwpdA3SAQOiCMwCdlBEqzs4SIQQARKJMISIygjMqYMFRBiVMgYJQIiMocESYUTOFJg7oIJzA3QYJynXZRAJlABVwcZCgCAJhQ53RBBPQBSBA3UCQp9aCsRsm+6sY5cKo2QAcoUScIHRRtupU4CogQN1BBJkIrA4gKiJxypBAgboApB71JEREAlS4TKrknwCSSoLA4hQBGSpIgKII991QSSO9QkBCgb7Kwgbqk5VolegwdlGBgpGE3CCSolNsKIJyvIpwh+bat+8q32NWyrWuEPzbVv3lW+xq2Vc3h/dw95fbkREW7MREQY3Sfj/AM7qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiINb4u/N9I/eVH7HLnI2IK4OLv7jSP3lR+xy7ERtsssfvL/w1n2YVcJIOymYPKRjvUy04O6AS6CF0syIOMhRDgZU80SCozsgkRv1USZgpEHKmBO6BABg7KMg94UzIIP0qB60CQoyTnZCM4TdBIHcm8noFABa0xmUOAB3oAMypAxJUFse9UtcIIKBMO8FPWU5QRIUR2d0CTvCgCSSN1LZG2QhbPabhBEz77BSPoTDxHUKYjEoImDITE4KnBxCqG9QgnlG4Uwe/CrvgqwgGCcFEB2cgqS3mykT73KnBxKKq1wGHK3KCZaqlo5sqMsdAOEEz+kh7wpEEGVHKIwURA38VaOYSTsqbb5Vum+6ioaclCTO0qTjHVRJEqCYxMoIOJUDIlSAqIxsgzgqYb7VEScIAAnCdVOyRndQQMmITDTJQdYUCSe0EEg8xUkCVHWAFPrQJAMISC7ATAKmQOiogQD3pALlIBJmMJgFQT2dlGJ2Uw3cIXYwEFSTEDdCD3oCN+qkifUgDCnbcJMYCCTkoBHcgG89ElROSgT4KsTsrgQFPsQQOUZKrAMqTg7SmPUgQIVZGxwrQfYhAcEER2UAHek9lAMSgmAVBJnZTgIMjuQRjvUzjKEAdVX3xhBBM4QDElWDeUqM+xA7REDCiBORlTJ70MBwJ6IIiNlOIghRMnCnHUqh4KvqVuirttlQRBcfUp7PTdWGAqiBkBAkQpwVB2lTiN0DokJ0USgkxCqR7FM96bjZBAiFOw2URAUghWACRhAh2VBoMIBMhADE7BJA2UFc5ynIcZU+xWEEIKOOU5pOVJg4hA0DKgmQomN03MdE5QQZKADzFTsoA7kIxEoGIwiYGApAQREpMCFbZUO+UFOEPzXVv3jW+xq2Va1wh+bat+8q32NWyrm8P7uHvL7ciIi3ZiIiDG6T8f8AndT7lkljdJ+P/O6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERBrfFv9xpH7yo/Y5dmD3rrcXfm+kfvKj9jl2fYssfvL/w1n2YTytO26NMiOqjAIhQTGRkrpZnwoIlRzSY6qwIcJ2Khwk8w3QRM4cpgTEqJnplSRImMhBBwVOImIVSZIVsQUFQJmCgbyie9WgcuFBIBgFBOzR60EP9igjMnIQNzOyCTLHZ2VTE5TnmQVLhBBGyCocWO8FyABwkFULTzcwyE96ZBQWIxhAezlSAHCQq80YInxQQMAuCmQcndRkRGys6EFZBHio2OFMCJSUAmRMZQEEbK04wJVRugAxsVaBEqBCklrdsoBgqARGd0Ha8FPKAgqN4CElpTPNhSBzZQ0hvLOUGCVMCMIcCVBHid0jGEAkhXwAoKiAVM/QqzG6SgmE2CgAkqY79kAHIwoAcXGFaM9lJLSgABozuVUySpku3CiBOEAb4VpHtUe9OBKGegQWlsKCMgQkAASJVjBKojtTthRyjcJ8JIJdPRACkDswkCUgzhNSbQGiFPUAbK3KBhCfNt5n9lve7C8zOuViJng5YdPRRmcLp19Z0m2nz+p27I3HNP2LH1eMeHKQ/Py//APN0nH+KznNjj4w9RjvPwlnSCXYCsKfeFqz+P+HmESbo/wD9H+qf/iBw2Muq12T302/zLz+oxep6nFf5NnLYKgytbbx/wo8hh1LlP+KmPxK71Dibh+5IFDV7ZxPRziPuXqM2OZ1Foeei3yZcAwhaIyopVKdZnNReyoO9jg5S6A6CYPctNx83nUwgkx4KpHZwrO9SEGAFdSiu42TpCkgmIUQBtlBIaNygh09wUF8Y5U74CCHQBIyk9VJGMCVDhABQG9ozKgqeYNSTyEoKl2YAVoBMlQCGgdUETMoInJAUjlHiUw4xCHlCuwIUHeArbmFU4x1TQCB1lR1wFMAJJ7lBBOYQgRup6KNkEBT60jCgAHqqLYVSYMKQYGUkHdNB0lTgNlQcDZQO0IGEEvIEQpxGVDQ0HtZUOBJ7gpsSTzDlCSG4TwCkRsmxBOEAMSUzOQpQRAAlSIPqRJHQIIRQSomYgIJJ5cIG9Ud2SDuU3zsgkQBkIDnCDwyonOyCTumD608VE+CDj4Q/NtW/eVb7GrZVrXCH5tq37yrfY1bKubw/u4e8vtyIiLdmIiIMbpPx/wCd1PuWSWN0n4/87qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGt8W/3GkfvKj9jl2DIK6/Fv8AcaR+8qP2OXZc7wWWP3l/4aT7NU4I8VUYJnKkEnogJByF0vCPEbKcAYKg++xso6wgAnuV55hjBUdMKJI2CCemd1HMADKsehKoWwZOyBygmQd1Dmid1ae5QMkg7oIzCnECSkEJIOIQ2OAdAxPRA7l7LgkAqTvBQ2bHs7KSMzGFTLcjIV88vrQVHZMgqTDxI3CrPKYOVYAR3IK83ZgjKsyYIO3eowcEZVgIYSUNqYG3VSIjZGxGVbYII67YUOBGyF0bKpLidkExzeBVpLRkSgyMJMoIOdlZu0lVzMBTk74QCcqAY2U+CmAgiMFVyRBUk5hSMqbEDAhTyk5UwJyhJ6IIwcIPAJupwB4qCM7od4QzKgbqiYPRRMYG6AZ3T4WE0E/SpAAIJKiFM5iFAzzYGFJ5pxsog82FPaAQRu5WI6IBIlXaCTtJ7hukbNqcuJ6KzQujqWsadppDbmsHVulKmOZ5/D1rTdU44ezmbSeyzp9zO1UPrO30LkzeMxYu29y3x4L5OOze7u6trKkH3VdlFp2DjDvYOqwF5xZa0A70e2Lw3d9Y+bb9G5+hea1eIr27rFtkxwqEZqVO27+Oy7FjwjxHrrxWdTqGmfh1zDSvkZf8Qy39iNQ7q+Gx1jeRm9Q46un/ANky85C7ZlrTgn1HJ/gsDce6DUP7X0SuKJ3rXtwKbf8AxEE/Qt60nydNtGl13fvHNHMy37APtOVl323C2iGalOl57x/tHmfWuO3mX9qWkXxVn9kPNbHhuvdZrapSEfBs7d1U/wDeMBZenwZbAdujql0evnbgUgfYAVstxxexh5bHTKz2/Bc4QJWMq8RaxcVX0xWo25b77Ax9KkY5PMljzwtaUnZ4ZtnDvrVnVD9oXJS0+1oN/s+HtHDe4UCT9q4quo1HMPpGqOqO7UkGIwutV1G2c1zvOve0DDQcrSMcpN98u48WwbD+HtIe3ePR/wCq4ieHRLbzgqwcevIHN+9cFve2UNoOe8uLYDT07yVkPSdLewvaXVBjkjZ4G5W9aTDOZiXRLeA2w4WWoaVUnsus7pw5T4Thdm2va9POh+UJ1U7i31m35mn/AI27LuNo6Jc1ny57reoPOU6lMZZjIKyFDgHRNRc41LmrTfgshrfenIh3Xdb0696r+Gc9MR3Vo8Ta1ZCda4d89Qbj0zSKor048WDtD6FmdN4h0TWXcmmajRq1R76g48tRvracrFVfJ3qlj/aaNrJJaMMqktLvbstU1vRtaa8+6Dh41vN+9vKLYcP+Nq6PNz4u943DxFcd+JepgEOM9N1EZXlmm8RcQ6Oxot7h2uWjfi12eWuwf4anX1FbvoXF2i8QONtZ132980dqzuB5uoPxXVi8Vjyf0ljfDevf4M27dDJGFaO8JBGei7GCuSMocQpJPcqmYB6KA4GZAwoLnRgKXc2/RCTIwgSCACFXlBdCmATkpJDldCZgQ1QAeUk5UHtbYU4FOAZKaCYxGUiGyeqAgNk7qBLvUFQyN1IJhBnPRMnZTQYVZB3ViqlqaCMoR1SOUSpd0AQQBOSpMEDooy0p784GEEDtb7BSN8bI4R2VAwFBaQMFSTiFGAIO6kRElBTljJKtzAGIUEc3aOGo2AJ3CC3SVHshQJeZ6I52YQTKiEbMyoJkxsgn1qs8pwrFoEZUADmCugDSXShyYIVj74QoJyoI2wkeCkZykoGyg5MpOVB3QU4Q/NtW/eVb7GrZVrXCH5tq37yrfY1bKubw/u4e8vtyIiLdmIiIMbpPx/53U+5ZJY3Sfj/zup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQa3xb/AHGkfvKj9jl2P+sK6/Fv9xpH7yo/Y5dh2CICyx+8v/DS3s1SYDlEkdk7KZEnvULpeAHopmMRlR1VgRMIbQIJPeoG2VJzgBA4OwcIIB706HCEFud1OOWRuhtUbDvUnbxTuUjJ8URXMZTHch5gTlBgeKCTEKeneokjopBQMAZ6p0iMKTsoJJKCnwsDCtKd5jKAy3IygExBPVM822EI+hQCYIRdLRjIwoB6R6lHM4tiFImMoiwbiSquk7qTPUyFE8+IRdoB5RCgCHTKl2GgKPhBBffbCicwVJ7xuoAQ2n1KpGZKtEKCCRKCMSpwCgaAJAyoMznCmhaSqknqpzHggd0hAbtshBiVJMbKPWVBBk7opk7EYT1IIUwSMBN8KxkENV2I5dgSoPVWiXFADynCmxLdlYN5lUDEHHceoWD1PiS1sarra3LK1dp7bvgUvEnqfBZ3y1xx1Weq1m3sszdXFCyoeduKrabTtOS71AZJWkcQcZ+gsdTa91qx2AwGar/aPe+xatrnGr/SKlO1ebq8eCHVCZDfb8EeG6wFhoWq6jeelXj6j7m4xSpsbzPd/ujoPFfEz+Lvk4nUPo4sEUjdncr6ne39U07dhpB+eVmXu/3j+K7WlcE6trdf+ya4057T5LaQ/wCLcnwC9G4X8nYtqYr644c/vvRqbuy3xcdyfDZbbcapQtSLOxpMc5okubAp0x/56LGPDzNfMydo+5bP36cfdgNF4E0bRLdlW+eys5oyXwymD4N6+0rLXOrMbTLNKs33JbgPI5GD1E/ctY1biCjRqCpWrtuq4bgHbJ6Babq/F13ck0m3JDaZHZYez/GFn5kT+ysJGK097zttuo6xWfdebv8AUZpjLqNvgADoXeuFhjrum25dTtKDKlX/AKx7nGGeMnfdaBdalWqufUq3IYxp5Q1nvnA96xlbVqjyadq4MbSElo+ElMc77tdxENs1TiW/qVni1rctICDSaILe6O71LWhqN8WsDqju2CDLjJO4ldSpe1G20VWFtRjw8mck+Ko29e6mDTdJG8bhdMV0z2zVO+dVYCemyu68qVYqYHNtGViqNdr2PiASPg7oHmnApuM7kEKjMCu5hLnEkgb++gRlctK/dio18QQWt6NyDv02WINyAwNYMjMd6MrCnUeHtDWuqcwa3cO/9ENM/T1OtQp+ap1IDm82MAA7tJ69+VsthxPd0KdJ1Kt2ae1N20SYjwWhGvzsph/vWgT2hnPULtNrv5mjlJqFsBo6N6R4L1E67pMPX9N4/wCd7WXFMNk5BK3Kx1iyvafM2qGzvnC+dG3TqdWg4ySRAnvK2Cw1K4sTTd5wj/e+F4Lox571n5sL4qz3h7DqvCmi6uC91sKNYjs16ENcPHuK854j8nt/SmqGC/o0jzMrUiW3FI9+PuKy2m8YXFq1ocBUpNPKWH4J8Pp/it60zWrXUKbXNcBU5dpW1qYc09+0vFbZcfHeHlGk8WatolMUdZFbVtOpzNw1s3FAf4h8MDr19a9Asb+x1Swp3unXVK5t6gxUpmR6j3HwXb1rhey1RxuKJFpdj/rWDDv94dfWvMNQ0biDhTV/T9HdTs67s1aD/wA2vB3Hx9WQcleerL4f2u9fm9fszez2l6WR2ozI38FVwPQrD8P8RWev0HimHWl5RAFe0q5dSJ6j9JvcQs3sTIjwld9LxevVVz2iazqVCCCMqpnpsrdUOV6RSCThMl8K0xKiSTgK7RWDJhSB0G3VIcMlASMDqqIIl09EBgEDAVj3KIlBHwVJmApIgBRkvjogj17BBL9tlLmgAmVXmlo5QpsSSAQ0CSpIPUwVBEGeqe+3TYEcvvsqJj3phT47oQOaQoImMnKn3vtUDdSZQJQnEooMygnDhnAUZOBgKHd6Tgd6CZIEBIbyyd0Ag8xKiJJQTPYwhA5No8UdHKAFGYAKojJGcqxEjZR6gpIPemxEQpUTG6nqCVBGQcIVJKgnsoIhAEGVII6K6HHwh+bat+8q32NWyrWuEPzbVv3lW+xq2Vcvh/dw95fbkREW7MREQY3Sfj/zup9yySxuk/H/AJ3U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiINb4t/uNI/eVH7HLsmZXW4t/uNI/eVH7HLsmehWWP3l/4aW9moO1vgpykKD2myMICQOU7rpeExCsIOQoBHXdU5i10jZE0kEhxCq4kOyMFXcZHNCg9sAHoi7SR2d1AwhBAzkKC0nZEWgjIUQSkEQCpjxQV8HK3qVT3HJTMSOiC0EpsgdIjZSQQggh0hBIM/wQhxUE58UAk7zCgOIz3qYnJwk9EISSYjoqzOygk9TIUmXNho9qKAmMq0yPWqgQ2OqvAgIK8sGZlTkbKDhIIGSgEc2FDmkuBGAFIAiVLhkDoggTMhWIUbFWIJRNK7DvQAnKHsoD3KbVfMKjxLZ6qxwqjeDsqKieWFZoiQVMD2KD60CADKGOigN6qSQBELyHwEAIGQg97lBLsBBIEkBqkzsN1BMNgb96n4PrQSFZrTykyABku6AeKoSKbXPc4NY0S5x2aOp9i0/Wdd9NY+hQqeasgCS4mPO+JP6I3A8fBZZM0Y47tKY5vKde4jc5lS30+saVDZ9fYvHUNPRvjuvKNS1W4vw6lpzjTtg7ldcR74z71g6nxWZvjU1kES5mmg9kDD7oj4IHcuTSNKuNV1puk2LWi4pNHnKrMssaXr2LyNvuhfCy5LZLbmX0a1rSOzocI8N1tX1Y2ljSD3sM1q1TtMof7x+E/wDwr3Sw0vReEtOc+rWc6s8Avr1c1Kp8O4eAwFpGqcZ8N8B6M7ROF6dK7vaclzgQ5rXdXPd8J/WP4ry/VeM9V1K4bXu7nmqunEyJ9W0D1Ba4+nHG9bn/AGc89WSe89nqfFHlCrFvmbIijSJggOyf94/gvO7rizVOasBfPb50R2Dvnb7crT9QuazqLmVC57nOHXeep8F12Nq0QXFjuR7YDzmBsfUZ+xZTSb97ztrERWNVd2+1rUqz3g3JIiD346BdJl3cuYymHPIYfOF25x0XDytrPptaQ0nZx7tpK7FvQNFzqYBHnMe+yI6rSKxHEEzLtMfzSKgLw9ozG3j9IXWFOoxpbVDTznl5oy2VkKTHVaho0y2AJlvT1rsPsWspsc4Ecre1OysIx7gXsDmNJc5wnmPTvSnbODXVGcxAJJkeK5/S7SnWFJjfPPGORoLj7eULYbPRuI7+zLrXRq7aRaBz1Gim2J7yU2sMJbU6h5Q9khpMicrJBlAs5DcOaNpOJPcuzU4Y1KtVLLrVtIt3tOzKwqO9sLk/IGl0mclzxtpFNwOWEguB8BzEypuDUuk22tntIfILRMg75wu43T7R9In0iSXSfODocQuo7TNAo1Ifx3p1Izjna5o+kmF3KPCWoXjy/SOJ9LvZg8lK5DpHdAJQ7rU9JrDkY1gJbmdwQq1qdWiJhxaDLYGxO4UV9B430lhDLV72DMUqgcPaDBWOqcVXVGuKGsaf5p4wSZpE/wDex9CRGxz0qjC1rS3DSXjM5nZZXz7yecgZGeq6VvSsr+3fc6TXa8h3O+2cIqtnf1j1K7XvplzQAPA9FdJ3ZW1q1GHtnBA8ZWesdQqWjvOUHlr2j3oK1enWYWgEkY26ld63rcp7MgR1XuOzzMbeoaVxVUYRTuf7Ru+MOW01KVhrenllVra9F4mDgtP3HxXitKuWu5gTy4Mytw0PW6tqfftcDu0/CC68eb/Tfhz2p8asPxPwhf6LdU9X0+8qMfSdNC8aO1RP6L/0mnaOqzfDPE7Ndovtruk211ag2a9u3Ic39On3tP0hb3Qr2mqWJMNqU6jSx7HZGdwQvJuNOFLzRLylq+iVn0jSfNCr8Ki/9Bx6td4qXxzgnzMfer1W/m/tvy3+BJjvSO5YThbiCjxFpPpHmzQu6B5Lq2O9N3eP8J6fR0WbMjr4rtx3jJSLwwtWa26ZUgx3Kwad+iglDODK0eR2yqCfUrAYkqCCR2VQIJbPVQARJJUyAOXqhDmmd0FSC8TJClxaIaOnVSZLe5QeUAdSghwGBKnAwEjEkyq7ryJzMuTBOyFBMwEEZL4GyntSp7QwoIxuggwDjdSJJklVIwIU9yAe9TBUEZTfKAQeownqGFOTvsog+sIBHfsrQAJCgAwZ2SZaqIMkICTup+DEKokH1oLb7KpB3KtjYHJRwJUFSMKSCYCgifUh6NaUBx6QoAkQVY7QUkEQEFYdsNlYAAQSmQICgCDlUcfCH5tq37yrfY1bKta4R/N9W/eVb7GrZVy4Pdw95fbkREW7MREQY3Sfj/zup9yySxuk/H/ndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIg1vi7+40j95UfscuyIHtXW4u/uNI/eVH7HLtYgTgrLH7y/8NLezVXlO8wpnmE9Qhncqo2MLpeNpAJzCSC2OqAksPQhTHghtDTHZcrOECVXBMFTMMgiURWS2OoPerxse9VIAaADKknYIo4GFDTmChk5OyiAcAoi5EGRkJ4tyjTAwcFQRkcqCC3M7KQSRjKHbKiCBjCCSTtsoAPMcK0Qc5VQTJhAO+TlQSZgBWwR4qG4JzlCDlxlVl3QqxBJlRgbboqQIE9VHqQT1Q4GCoGDhTBG6qeiuBjJTYASIVjgAyoEHqmOQg/SmxDo3UkxClrezBVH1aNInzlRjQOpKk2iOVjul5mIyUGDBXUra5pFtmpdMB7hlY244v0KmQXXRA71lObHHxe4x2n4M6T2Sg2XQ07U7DVKT6lhd067WGHcjpLZ2kLJREA79VrW0WjcM57TqUDbKqWZklCQHwSrZcIV2KxjdRGcKwaQpDfFQQRIQD2KS0zPRSD3IHLiFIBwMd8T/Af+cKM9fpWp8Wa76O38k21Qio7+/c0wWNOzAehPVZ5ckY6zaXulZvOodPiLXvTarrKzqH0OmYfUbgViD/yj+MFameXU6Pply5zdFo1I7ODeVJgNH+Gfp9QUupVNSu6WmsqtoMcPOXNWYFGiBk+33oHVY/Utcp3+pNo6cz0bTLBvmqbRgNAxA7j3+EjqV8DLebz1S+jSnTGoZWrc3FYi1tqVOndOYSRIDLZg8dgANzstZ1ri/wBCtX8N8LVuWi8/9Lv4h1yIy1vUM/j6lrOs8SVrtz9N06uWUKxBqFgjzpHef0QdguvStgy25yctEByVjS27uvXeKdOoA2ZBJHUz1PeVxW/nG3YqEtca2zXbtxuV0HvLIc6SXS0wOs4XZoyaD6xdDmdkme0CenqW8V1DOZdm7uW1+Wi+n2weUx8Lx9S6fnrlzG0W1C8POKbdycfilC2JuoY6IbJcBkDxWdtNO80fOVYY1vvSTBPWf4L12hNujZ29R1yATzBhyWjqPBZx9uaTfSbmo2lQ964HqVldD0q71Z1Rum0qYoNH9re1xyUqY65+EeuFi9X414U4du3UOHadPizXqHZde3dT/otqe5rR74+DV5nvw9R/VldN0XWNQtnVrOybY2jYd6ZeEU2Ad4ByR4xCxeoa1wFozKxvtYueLLugDz0rMinbUj3F5Ib/ABled8Q6lxrxpU89xLrVSjp7Jc2zot5QPHkGB6zlX0LyeXF84VLJjWU2ERcVxzfQDhe4xz8zs7V/5ZuKLh5teB+GbPTGDDXW1u65qj2gb/SsRRvvLNqN627vGajWqHAbqFQU6Y6zyS1e26ede4esqNnWqUdQtWUw2GUW0ahjG439q868pnlLt7GuzSNEFRl6WgXlwIm2n/q2dDUzvsJ71rEfCIeWl8R6l5QrCh/764psbFzx2bWg5pqO9jGkj/iIWucL6LxHxFxJa2Vpd0W3Vd5eazmyabRl1QnwC4raxur9r7x1IupudJqVD2nHxJ3XqHkqpW+lXmo6reuDH1Ay1ouI5hEy7PthebW7doe6x33Mtnp+TXjyk0m08pVN1L4PnrBj59YIK5X8KeUW2oxc1OD+IGbxc2VS1qHxDqXLBXoTNUp03Cnc061vUjao0tB6Lo6hfVHUnPJHmx+g7f2rjjJb/VX7OnprPEvFKHlI1zhzUqtDUG6vpFqXEMp07n0qlTPUBzxJb4T7Vudj5VaepVPRL2jZa5avA5K3K23qmRs5jyWiMiebJW43nku0niDSKNVlQ2ty+m01A8c9N5jqOme5aJdeRTRLxztLufSOGtbpsLqVxZu85bXrB8LzZ2cJHMG9II3K6KRGTtwwv+2NtttrHhrULykLKpc6BqZHNSo3DHUnmf0WuxUHiwlU1N+r6MD+WrRlxbsMem2xnkHe4dPavPqml+VPyYWj3VTT4h4ZH966i30q2j/HSd2qZjqtt0jjy3uNApatp7m6hprRy3NrRr+cq2k9wf2w3wdIPReb47U/s8xMWZe2IvGNqWly2szlkNacx3ru0qppw3mEHcSutR02x1KzdrXB95RDnZfRyKb3dQ5u7HLrUNQbqFxUsbugbS+pmHU34ew9J7wehCkWiSathoV4BY4y3qPwXep1nU4dTMjpJ2Wt2NZwq+ae4yx4bkRJ7lmKVQzyn9IyFpDKYblo2v17StAdHNgjfPd6jC9Bs7qz17SCX02up1G8lai7Md7SvF6RcKjam2eh+kLZ9B12rYV2PZ/dAxUaeo6n1rqw5Jj9tuGGSu+8csRxDpepcD8St1nTeatS5e3T6XFEbtP+Js4/qvQLC+tdT02jf2VQVLeuwPaQdgeh8VmNTsLTX9FNOQW1AH0n78ruhXkvDt9X4S4qfoGof2enX9UikDtb1+o9TtwvO/02Tt7MvUT51e/MPSC3qVUiCMrmdjBjG47lxlhJkFfS25kCT1hSTAgFRyQ6SVBIIgJsCJO+VMwO9ccGZViMeKbCZGVQzM7hXDTyzOVABaDCbCIbM5TJbtBUEeO6DGFBMTgJHKd8qQeUZUY5pCB2skoMZ6JmfBRKAe9O5MnwUgIJ7yU3VYlw7lJcJ7kE/BIKgmBy9FGSZBwnwYOFRPTlP0qNlfHKAcoRLZMYQVgxI6psMpPZjvQjsgH6UEERGVMwMqeUAbyqic5UEyYgbKDiE3GcBMCCMjxQQ332VJaQfBDk5VkETlSIOZyoIjKqJnZUU4R/N9X/AHlW+xq2Ra1wj+b6v+8q32NWyrlwe7h7y+3IiIt2YiIgxuk/H/ndT7lkljdJ+P8Azup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQa3xb/caR+8qP2OXZIDhjoutxb/caR+8qP2OXZmTgQssfvL/w0t7NUGJidlBEmZUkDmlRPgulmnEb5SebAVenirDJ7kCCRlJIapInEqs4gIoWGR3KSAFJMESoOxJKIkjG8quHCRhRMCeikAR1QSANhhTkGNlAI3CmZHaQSZKqQCMlTsN0IBOEDA3UdqcK0SIKieUR1UENENJKqCDnqVIycpgoq0jACghoO6AgDxUGI8VQmZkpBUgCJ7lBLp8FBJ5QM7KJHsUmAkBx7lBLQMzsq16tO1t3Vapho2Hee5crRBkLAcT1KnmrenTdyub2h3E+Kxz5PLxzZ7xU6raUr6ldV38tM+ap9A3dahxBqz6NV9vQqipWAktmS319y7tHiGyoXDaOoVBa1dm8+Gu9RWo65wfeVtbfqegaoKtrdVfO3Fs93ba47upu+EPBfAyZbXjvL6laRWe8Oq221LUKh89qQt27lrRJ+lcNxw5pNKX3l5dXTjvL4CnXa35KumNYx1J7wGgPEH+K2qnpLq2nUX1mZewEritaY+DqiIdHgC20zTOMKD9L85TbcNdSqs5iQ4byvaOy5xj/ANV5Nw/pDbDiuzuC/kpNcSSdtl6SNUsGOIN3TJG4Blfd/wAOy/5U9UvmeLp+6OmHbqsJIICEhsSunV4g0qmwzcB3qCwlzxnpNMkcxwdgV32z46/FzRivPwbRzCFMiIWmu43teWWWtRw7yCoo8VapdO/6FodesDsWsMFZT4zFHMvX6e7dQDG2FAgFa/TveNKrJp8OED/G9rftK6F7qvGto1z6nD3ZaJJFRhH2q28TSI3MPMYpmdRLPaxqjdK0414BrPJZSafhPOx9QXkupXIpc91cuNV0lzicmo4n+JJWbvtTvNXu6dW6IHK3lYxmw6n6fuWo61r9loFlecT3LWVaWnONrp1B2Rc3kdp3i2n396+X4jNOW2vg7cePojfxW1u/q6bQp8MWz517UQLnUKjRPolIjDf96MAdMnqvNNe1l76rdF0zs2bIY91P/rD+jPcuI6pd2+nPr1rh9XWtZPn7is45Y09PX18Nl1LKxqCsGUwKj3dpzv8Az1WVY77lrafkyOkWlck1XsPNu7ub+AXdu7/zdHzY5iCDyMByfGeivWrW9rbPtbUlz8c3cVr1Zz6lQtLy6o52YP8ABbVjbKZd6hRF5dNp0bgMLscz8Q79ELsP0Z7Kxt6HN6XGwy2e9xXZ0rTXXN63zZLn0XcnMQIn+i2Ou6hptOnb2jala5qnkpsptJqVHE4a0bkk7AKzPfSS6tLTrPRrEOqVGlwHbe74R7vp6KdXvdK4S0unrnHVV1vRqAOs9Fp5urvqHPEyxvr/AKLCcU8bafwOCaQttT4ppgw8kPtdJO2BtVrD/utPVaPw5wfq3G2uO4m46q3dxSru84y3rOJqV5zzVHfBb/hEEz0GVvjw9XezO19cMje8WcceVS3dQtuXQeFKTiPM0JbTfGzAd6ru8e9HcsxpHDFhpVrTFrRIdy5q1M1B3ieg8BC9MbbaLa6Qy2r17CypsYGMYatOnyAdGgnC1qrc2VrVdbU9QtL6jVd/ZVaFwx7vURMiFpauvZK2dvhvRm3GqC6qUWG1tAYYRIc87eGBKz1XSrOlV5rW4rWgGeRrpYfGCunZa9p9nbNs7Zj3PY0AsnM9Z9ZzK6Op6lql0H0rayaKLhDqxf72NwAMH6VnM6e47uHiPW62i6RVuG3VO7fHm6IacecOB95K8AudIr3mp1qt08vbPM985fJn2ZK3bjLV2ek0LS3a3lpCoYAhoeDyuJ9UQtbvjcUbOnToMNRzy3nqHuPVZWtPVqG9Ijp3Llt6rnUmWlOGsaY2X0V5F+CW6jc0dYu6AdpemECgHtxcXO5Pi1k/T6l4fwToF/xXxbZ6Fp8NuLlxDqmCKFIZfUPqEx3mAvufSrHSeHdI0/QrJ1O2tqLBbW1NzgHVCBJjvcdyuvHWIjbky3niWUNClcUjTuWNrt/RqtDh9BWr6/5P9C1mg8W9I6bdH3ta1ER627EfQttpic7DdcGq1/RNLuKzf7xrIb/vHA/itZr1V7uaLTW3ZoHD9J9CLC8NPzlHsNqMMU6oGOYeJ7iunxlZ0ho1W8bLbizitRcB2hUGA0eLuYt8Z8FkqLGmrBA5W7Ajcf8AqtE8oeqalYVtCZQcatJ9w576VU4qOAHKJ6RzEjxK45rEey74nc92X0rVqdanSuBLaddkkH4OI5T1wcQvPuPvItpmuOdr/BlOhpWutBf6PAZb3neIGKbz3iAeo6rUdS8oFHQtU1h9erVpgXr3ULZsF5aQCR3DIOSeqxtH/wBo+9ubmpQp2ltplqxvZqNoG6rVj3ZLWt/iuqk7r3jcMLR022vwhxTQsatbSNVpO4d4is6nmRXrghrnf9jctPvmdzhlsyDC3ahrOi8e0C22rN0/iPTw5rAxwfIG/Kf+spEjPUYK+feO/KBqPGmo0b/UbO09LoTTbfUqPmq9Wn0ZVgkOjp16ZCrwzqFzc1nXmn3QoapZEVaZpdk1AOgHf4bFcN/D9O7V4dFcm40+hNN4go6i6pa1mej65SPm6tu4SQ5p+/cHZyyFLVA+oe04mABI6TH0rE3VvU4r0Oyv6fmLbiIW7bi3urfFK8Z1ae8ThzTlju5V0K5bxBZl7h5nUKDiy4oPw7mBgg/4gfpGeqzpaJjSWrru3C3uzzEkAgRjuWVtrl0t2EScbFaxYXAa+rRq5cBn2LL0nta5rBUAB7+oW0Syl6XwfrTKdX8m13HzdU9gkzynu9RXH5R+GqWpaU6/aOUwGVS33zcjlePFphaXbVS2jVe2tL+UFgGC2HD/AM+xeu6VeUdb0OK4FTmb5usO/G/tXXTWbHOKfhwwt/l36oafwdrVbWdAb6YR6dZONtcgfpNO/qO62MjO+V5rbC44R8odShWefRbs+j1Sdi7/AKp/tbhemObExkAxK9eEyTak1tzC5qxFotHxUwCqT4K5EqsCF1sA+vKiQpicqDnEIKk5mVJjGVYN7JlVIiCgoB2iTsrCD7FBnpsVJaAJ2QI7WdlBM7DCZJid1JHLgZ9SCBO5wEjOUgk7oCZ7/BA3EkQpBIJHcnvxBMI5wpnOxVFh2Wl26GHjwCq48tOGmUa3mbgwUFWuaJHRSQ4NycdEIieYfQrNILcmUFW4b2hhSBgume5QAeuQp5QCSD7EDDmyd+5ObpujY3IgJDQCZUFYIz0UiOhUjaDGVAESqGBucKQ3EA4UQIypnlE7qCIO6NzmVPNMgDCc7WiIyVQ3ODsgOYQQZcU5jy7BUcXCP5vq/wC8q32NWyLWuEPzbVv3lW+xq2VcmD3cPeX25ERFuzEREGN0n4/87qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiINb4t/udI/eVH7HLsElsrr8W/3GkfvKj9jl2BJkzhZY/eX/hpb2apxyyCq4OxiFIjvlJZO0ldLMhIlOsAKCejt0CYCkyIKnkEAkqSSTAEoqpdie9CAB3ynZnvTEGAiK/BhWgDPRVAaBMociYwirS1SW9ZwqCCQrdYCIRBU7CeqiSTA3R0NHeUCSXZQxzkFWEGJ3VeWHEypKwDlEklGjEqIE53U7YnZQNnRCfCkjCSEJlURIhJlqgeKtIAUEAAiVyNgthcYI3j2K4IcCIQW2ErV+JKhNwwDo1bRjliFqnEDv8Apj29zQPauPxnu3Rg9trF1Z2eo0HW17bsr0z0eOvfPRYKnwq/TqvnNLv7mlSJ94Kkkfis8XQcFclGuHGHHIX5q+47Q+xGvihlDWKlg1tatpWrW+wpXTRTeD4A9fFczeIKdswUNS0a6sgwRz0/7Rg+hRWoW9zScyvTa9rsGcH2LXKuj3FrUc/StXurM/8AZucKlM+x2wXmJ3yalmdXuLbVuH7pug6laXF68AMpVqoomJzk7FaRa6VxpS5vSbZ9jT3LmHzoI75C7eoXWq21F1TVOHbLWWNHafbu808jvgyuhpGpWOq3LaWi6bxRplwc8tBrnM9smCta7isxXs8zrfdknUm29Dn1DUanjzO5VkdNtbPztOs1gf8ACHMZlcztH1G5txS1HXrao3cUNZ00k/8AeaDH0rs2ui8Q2oA0+w0LUGfoWWoch9Qa7ISMeTmZ2lslOOGfuXG6pt5AymIwGthbJoWmamaNOrR1F7KY/wCrOAVprL3WrMhuocE63RaNzRa24b/4SFtOm+UfhiwtG0L6jqenuG5ubCoB/AFfTw0pMx1TpwZZn4RtvD69Wnb8lZtRjti8DmBXm3HN75q7pWzNQq1qlUecLA8hrGbCQO9bM3ylcEOpvFLiC2e4NLhThzXOxtBG68hutQrarqNfUK8ecuHl8fotxys9QED2LXxt6xERE7efDUtNtzGnLVdcv9H02xf5u8v3ijSedqQ3fUPg1ocQfADqvFuONbttc4vbbaf2eHtDb6Hp1Kf71wPbrO7+YyVu/FnEbtK4WvdRtqn/AE/VufSrAzBp0BBr1R6yA2fArynTrSk5rQ9wZSDSCWtkx1HtXHXtG3VMbl2LY1q73XFZrnuJAa0fBHeVstiPQbKo+o0Oe4DDf0umV0LOlRfc4jkHWIgLLV6TKrzzkeZpwGg49qte8lu0aY8Hkt3OBJrVDgHpOypZ2da4vWUqYFV73QeUSA7x9S4316bXPqVXwBs89Oo+hbrwtpfolA6xeNNNzpNKlsBO7j4n7FrPaGXLK2tnQ4e0nld2qr+rcl5PQDvJ6Lznyg8bnharW07Tq0a+9hZdXjXT+T2OH9zSPSqR753TbdbdxXxE7hfhKpxNVcG6hcvNvpLH7tdHbrgd7Rhp7z4L51ZptfUtM1HiK7qTSoYtxUOatV7oDjO+TM9VrgrEzuzzeezW6+s3npbLm2qmm+i6WOIy1w+FnYrkoapq93Ufc3mpXVcE7VKpMnvKpVttOp3IbQc64psI5idnnqFsB1vRq9nyXGgNFZjeVppOAEevf+K+vEft1WHDbnlSxv6khpZSaXAwXMmV269Z1WS8l0/+eix1nXtKty7zNr5gAS0ecLpXefBHd6k8uZTzG98D8d2+j1KdjxPotPiHRwRAf2bq1nBdSqjMf4DjuyvW+JqmgUuDbzi3gjXbqnpdrSLxTc/z4NTYNeH5pkmBC+W31ajLnsvLQRgLtUtc1DT7C7tbeqXULxgZXp/9qwGQD0MESJEg7FYZMM8taZJmXPb3la4o1LOq59So+r5w5nmByT9JkraNMs6Gs6P6JplSpSv7YF5qEy2v/hPctJsdVdZu1BlC3bW9NtPMsrOJ5qALpL2wffdMrY9KuRpttQrUXAPLeZzdw6dwe78QuS1Jju7a33Gm2eSrj3VeA+PKjjQt6npdL0Oqy7Dh5s8wc2CMtBIH8F9K0fLHw1ePtncScO3VjXtXF9G6ptFw2i6I5mx2hI718kahcWWsUjcOby3jB2XT/ef4Xdx7it+0jXbbWOEya9GpcarZ/wBlVt6LZfUA2q+DSNz3ypbJMaeYxVtvb670Hj3g7iKBpHEVlcOdvRNTkqN8OUrscT3P9lbW4jJNZ+dw3A/iQvhK6r1LpxfVAMEQOjPD1r1HySarrun6VqWoVrmrc2NzUZSoU7mo6pzebBDnNJJ5RmMbrWuT9swynDq0PoS1a0huN8SeoWp8f2ttU0Vl5VeG/k+u2vzETAILSI9o+hTYcZWDnFl5bVbVxMc0c7Pp3+1Ybyna3YM4btmtuqVSg9zrio8Z7LRj2kuwD3LK0x0toiep8veVq0rPv7a5bV8625qVCTtgAQHR3brD8EcHX/EV+6yt6LaVOmA+tcPHZotOBPeT0C2m+1S24m1S20/UqBNHTKYt6Xo/KxwdUeHOLjHbIA3PfmVtvkI1EU+OKvCeoV/OWupczaBqSWiuz3jo/wAQwnXbo6a8pakdXVLj1XyP0dOsGXnDuqNvb9jRz2l4xrRWHUMI2PgV5zxLpVK3pU9R03S62h6zZAekWzsecA+E3wyvs/jDhEWOnt1OwbIouAr0gN2mBIHeDA/9F4/x1pVO54Xu6r7Zxu9ODajC5p52CYc3OQ0tJ36rlrlyVnV4etVnvV5hwxxrqun2FF9i8vt2XIuatufgVYhxHcHDfv3Xp+q0/SHW3lB4VDnNqiL+3YMjlwakfpN2cOrYK8I80dG1OhWpNPot2zmIO3Kdx+C988nWt29zoraTvNsqUS2hXAENq0zinVI7x7x/ePNnqvGSOm24aRG4du5v6FxQocQWzg6nUa1r+UyM4k+B+8LLWddtWmyZiJ9WFhKDKPDvEtxoT6YOmXjXV7emcN5SYeweo/aFkbdws7uvZVX84YQWudu4ESCtYljaNM/b3HIwB74jYrd+DdXNvqNNj3g0ao82/PXoYXnBqc0Nblo7unesnptx5i6pua6WBoLh3Fa47zWdwztXcPRPKVovpektvqYiq3+yc/uzLHewrn4Z1P8ALPDFjfu/vSzzdUdz24M/Qtkoea1rhzkrQ/z1I03+uF5lwLWqafr2ucPVyQfOG5YD0cTDwPaCV1W1TPFo4sxr+7HNJ5hvxHVVAGQpnuyCFGCu1ig5EKpkBWkAxKiN5KggdpuU3EIIjCk8vLtlBTIIkKSZKmMbqDtkoJIDtuipJGVdrgCAeqiO0RuCgHMFu6iCe00ZG6gCHROFYTMKiojfcoYLwXCR3JkHBk9ycwEg5lAgB5zhT8LsmFA99lNiSoJ5uhygbLTCgNkkqQQBlAbhu+UzMoQAZ2UgyMIAOMhIhswpAUmCYGUFMOz3KRnfZThuUmWzCCpAPsRwxIU4jbKAB2QYKogPAaMZQtB7RCE8vwZUBxPaj2KCeXt5VOdpdykbbK4IG+6qIc7aFRx8Ifm2rfvKt9jVsq1rhH831b95VvsatlXLg93D3l9uRERbsxERBjdJ+P8Azup9yySxuk/H/ndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIg1vi7+40j95Ufscuwuvxb/caR+8qP2OXOTDsLLH7y/8ADS3s1Tjoo5owApkTCgEZXSzSdpmAFQAESVJz6lJBxiAipkholCZkD6VG74OynmwWt9qBAJAjZDMw1RBwJVjDG9nKCIa0HmMlVmcbKYnLlA7R5hsgluNgpHWVEgjCkHG0oBJA7IlOYDcEqsEneFbbAQA4822/8FOFHNAwJKHaVJEHdTIQE4CRlQQTkYU+xQJx3KTPVBAGVYwPFAQqk7wgN99CvEHIwqt7+qecd1GEHK0zgLSteqzqNf1rdGukiAtB1Z/PdVnf4yFweOnVHV4aP3MS9wmFwWXnXML6m/MVyOzK5aI5S1gExu5fnbcvrQ7TMtGVibwH0rlO0rLg9noY7ljqhFSpzcuykQbQ2l5ymWGM9+VsGgnzUNYXACRBMfYsJTIaCTuMrYdAb52gHxuF044ZZJbFSrvgMFR09xM/avnvyicY3VfXLugz0ejZUqr6dFlCk2m48uCXPGTle/VOVvmQTADwXHwnK+PdduvSdTqVawLud1WoR+iS8rprG50wlNvxhxBa3HNZa7qVq4n4Ny8tI9RKy1byk8fUafKziy8dOwqw8fxC0iQKhkgmOi7jnMrUWFxgd/gtLVj4vMNy0bjLi3Xhf/lbUadezpMDeVtuxrqlQnAmJEDK3qhaXNw220y2dFe6IotqOOKYI7Tz4NbzH6Fq/C+ji20HS6Valy1bp5vKzeufej6FmOLdU/IPBuv63ReW3HJ+SbQjrVqAeccPENwuPUWvqHR7NNy8n491+21vjOvS0txfpGmU26fYN3mmzBf63OLnSu1RbFtRowAesBafoFuKt2xhdyMotL6lTeduVv2rfbS3846G/C38V1ZNROoZU4257Rj+V1JsBp/h/wCcru3jG07Zo5pMRynou/Z2LKFJgLRz9Ad1yutRULWAB0k/+i8x2Wzo6FoJv9SY+7bzULPle5vwXPd71pHWNyt38z+UdQZYvqejWdIGrcVTtSpNy5x8Y+0KKVGhpmn07WgSO0ajnEb/AKRKxXlHvvc75NfyXa1A3VuIHigwTDuU5jwAEE+tO95iIZ8Q8R474mf5ROO7i+ax9vodjFra02CRToNMNaB+k7Lysz5aLXQNF4V4V0bh63qC3f5y4fcvz6QYEEkYJB6DA2WycG8IWFroFStVt6V1Di1r6gnmcB2nDwnbwC1Hy0133Gj8ODskUX1mYxySJgDuMSvoY9TkrWPgyv2rLyOgf7KR71xJELst5S4icwsabg0LdjW++IXB52pPPznmX1o7Q+bM7lmLeuLe7a8+9OCAswL+2c0dot9bZWq2tZvniKsh7veuOxHcsoyIXpHerVqL+V7XzymMhZHTbu3t/OOqUBV5wAZAwsNSa1z+Uu5QcBx2lduhTcKlSm88jgwmO+MrxaNw91nUsro9lR1Cw1Ona2jDcWlT0lrwD5x1IDtNHSJzssdzcx5W1DyxLS3Zw713uHDVbrznWtapQqtolzalM5BB+zoVslKvp1vQqm+4a024vG81QVu2x9wCZIEYDmzv3L5mTtL6GOdwwGjafVNw2pcVPR6YILnnoO4nx6LM3FzUstQ/KeiXtW3rkQ6pRdymPwjoZWNoalTqak83NsadlXMGnzEmmOhnqR3rb7Rmg2tVtQOdesyPNnsxHU/gubJMw6KRE/F0rHVLfWqtPTtQoNs7is8N9KpENpyd3OadiBJ9a9ybqGg6ZpdCw09wfa21MUqbKeYaPHvJkn1ryq+0jS9St2v0W6ozVH9qwjlc3OcLvXdw3QNIq3dV4pFuKTHZ53RAHqPXwXmLvXS2DWvKBo2jlrLltQ1n9oW9OC6PE9AVo3EnlCGsaJV9I06nb2tGp5+mGv5qr3AEDmOMZGMrzG4qX9/qjqtU1K9xcVJe7dziT3dPUsjq2nudoPn4l9N/M5oPvWiRnxWmoi0M54lr+ma3qFvdV7ikZuKjnPJiTJEY+n+C7Fhqt3Y3lK8p3FRlek/nBa8tIcOsjIXY4XpaZbcXWNfWbP8AKWm06zalzbUnQ6tT+EAehjbxXsZ0Xya6tqtbSbC2F9Q53Czu6odTqVKREta47lzds7wt8mSlZ4c8Ra0Nk4C8t/EGq6roukcS3rry0pXTKxLh23ACOUkDtAcwd3yOq9W8rGs6ZfadqNazDXMo2j6Dq4Eeee4YHiBPXvXjmkaTwdwPVq3RDhdOHY5nmvWDeoaDsNsrh4w4os9S4OuadS5fY3NyTTtbEZIYI/tqpHrPKBsRnMLktk6v2Vjs1rj6e7ULvT6Gq8H2Ytniq5lEQ4CCyoDkHuXX4N4nttIuf/eQd6PPLXYNy2Q18eIEO9bGrSKb9b064LrTUqzJdM03ESRtzN+5YzUNUu3X1SvdMDXVT/aBjOQOOxlvjufFe5w9f7dvUZNRMy+rOKaQ1HQLl1pcekajoFQXFOqByuq0i0HmjeH0yf8AiauC5v8A0vhrTtatixzqPK2u6cebdgfQtD4C1W+fouicUekm7tm1jomo0nGQ1rQXUp8C3mjxbHVb7w9Y0LLUdT4ZqHzlvTcaTWu603jmpz6lyUi1Zmlvg93jdYmGesOarZU6o5S9gI5f0h+K71vziowud70SDOQN4Wv6Jd+b57KqSa1B5pvnvGPuWeDuTIAMgwtoYS9l4KvmXFrXtg8Esh4+hanxJTGieU621BrQ2ldPaCR3uEZ9oK6/AmoVLfiCjTqPPLVlhlZjyr2zvyXa3zAS6k7Md7SCPtcuu09eCLemWNf25f7tmOHERhUkAqLSs260+3um5bVpMfHrCt3SOq7qzusT82E9pmAQfWoOMnZSCJIOCo+DlekQHjlwMoYAyFBknAiFbEZQVJBHcoI7KnBwm2CEFTsO5A4DbIUkgCN0MSMYQQ47ECR4KCO0cnKNPaIOxVnEteJGCgo0Fxx0QwHZUk8hlvVS7tEEEcvVWBAPLg5apw7ZRIHiCo2dAKosMSoiRJwpHvTmSpBJGQpIhucFBBJA6JzjaIHehII7KgsJCRyme9UJdyhX7UCUAE82QoMTjdSSdyoLg10wqisOHaO/chJAkdVM9uUMnooqQ7qRIUPdgcoUtJdIkIcYAXpFIyCUwDOylwI6IACO0vKuLhD821b95VvsatlWtcI/m+rfvKt9jVsq5vD+7h7y+3IiIt2YiIgxuk/H/ndT7lkljdJ+P/O6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERBrfF35vpH7yo/Y5dj4JzK63F35vpH7yo/Y5dgDsnKyx+8v/AA1n2YQN1O4hR4IIldLNMABSNs4UAyCCocf+6gsRAndQXCMDdQXYiFGdl5FzEBRM+pVk9yncIBIAzspwdiQFBgNwowRB3QTAB7wgicYVZIAAVu1uRhBMjukqfYogd6iXTnZBbqgaeYqc+xRKCcAQRlR70eKEgeJVYJGTlBPM4dE5ubGygk4ymMwUFgI3MoZnsqge0YG6rziSg5TMbgKC5oG64XVBjK4PPHmI6FFd/nDWufOwJXnd4+XuJ2JW6Vap9HqhpyWGFolR4qBpGxC+X4+2oh2eEjl1xJfHRdhoIK42MPP4LsjZfBl9NV5IaSBldGoCKwaNoWQzJXSuR2mu6gwkCrsW78xLYwtq0JhpWNPmYdui1cDDmnqt00kBtlTEbLqxQxu7V3UDLd9YtgUmGo4nENAJJ/gvjjVg6nf1WVJNQuFQU+U/3TpIOSevRfXHFNRtHhLVHOHM4W1RzGB8c7gwmPV0PgvkLVRVq39e/dAD3so0gDG7eYwN4G09666csJYSp74lpxPXrhZPTrQ39ez09gh93WbSx0DiAT7AZWLJgPbvDytw8nVBl1xxZveJFtSq1yO4gcrf4uXq/asyle8w9Oe+nR1W4rlvLQt6fK0dzWhebeVrVa7LvRuGmONOnpds25rAH391WHnHE+oFej3dNh9HtnHN5eUqDye57u19AXzzxNr1XirjLU9UaXFt/dVHsbH/AFYMN9nKAsPDV3My2zT8GQ4atqjaxqsMNqHneT713cCOucr0vSqVOkznLGy7dxCwPDmn06doyq7sMaASAN5xH8FtdJ3nS4wGtGzo3S89U7SsdkViAXOB96IaB19a7WmUTUuRJkNbLs4/9V1a7YqANkl7e8QFmdMoNNNrQ0t6e3vSHmWa0W1p3+tNFw1gtWdqqXnDWNyQ71wvIeLtfp8Y+UGvqdo/ntLI+g6fzD3ziZfUj1kgeAC9T4ru2cL+Sq/1J7Sy51V7qNKN6gGA31c2V45wjpTrjXdPt8DzANWo4jAI3/jOVtSNd3iO8PSra19E06naUHQWtIM7cxBkketfPfH+oM1Si5rHuqG1qcz6k4Lj2SAvedb1TTK2k1NL0p9U69dPNF9V1QNp0mH4Yd17oH6S8k17hz8kXdzT1i2h9xSLaVNpkOke/wDpW2O8VttLVmY08Te13nDz7jCtMDK7uo2VS2rvo1GFr2HlcD9oXRptc93m2tLndwX2623Xb5dq6lV4B6LLabVfWHm3tJjAeevgqUtNhwdXIb15G/esnTY1rGtY0Bo6BWJh51Lu07XlA5sDfHVZBjabw0ECW4Hh6ljqFapik6TuGECSfBc7KmB1jEDPsHikzHBqWX4TotZq1095bzUaRpnaMlbFdBj3QWCoB8IZAWi2FO4dqdSjRpOe59XIZPM50+9gZMLb7nRL/Sq9arqtpeae+pD6VKtSqUSQRJcGuGW7bL5maJ3t9DDMTCLOix2oEUW2rnPb2RdO5GT/AL0YKztHhjSLu5pmlrlKzuCP7Wy52lzT+i0/fJ9S1IXUlrKjIkxzEg56SFavSbUe1ot2PqE4hpBb/ix4rltXffbprbXwc+rur6Veuo+Y80Wu5mdsv5RsO0u4NUudU02o68ped5W+bc6sSA4DO3rWOuL+5IFrTq1bmDEVCCJ+36VlbUVy0tfa0ufEOkwP4wnT2Xr7uxo2lfkbT26rXNRlzqRdb2r3U4DWfCqAnPgIid1i7qyq2lm8W1LmpjDWjPKPvW01q9fU7KjYanduovokGzqE/wBnRI2D/wDAdpG3csfc6Zq1neG0ubNzKjRB5DzsGATDm4jYzMfSrFJ5Zzd52yxb6RLHFr2yYaIIU6szUrR1NxxUID2Vg4tn/E0jBPT7l6UzSberTa2vah7t3PHZI8FwcY6Npp4PrGzoPo3duPOtpjLSDg8vdhbRMbjbLc/B59ovEGsmo9lGoyuSeYVKzOctP6QB38JkDcALaLHTdV1EOrClWq+cPPVrvBLXT+k4++OFheD9KuKvFGnWz6vofPWDQ8tnLQTBBjGw9q+mLKzt+JuI9H4e1PUqWl0mnmeKVMUw7l+Dynbm2nxWHib9M/thtij9u5aPw9oVhYWFO5NoLm4qAE1a9OYj9CRH0ZXf1Th3QOJ9Kr6frdqwXfv7W4DYLnf9mSN5nHd7F7zxjpmiUNNseGrKvSF/dVGNtKLiCQ6cEke9b0mPUvH+JbDU7HUq2n39J1veWx5RIG3TlI3EdV8a1cvXN9/y7ceSl46eIl41wNcnhnV+JuCtQqPFnqtsatuTnkr0Tz03DxlpaT3Er00ao9mt8Paiey7UrB1CoT1q0u02fW1aDx9QbbVaHEjQKN1a1G1JHww5wY9p9hWU9Oq1+GNIeypzNsL2lVb4B+HZ7l2eZN5rmn49p/vDK1IrE1+j0u/Z5nWjXpnlbfsbUyd3AQQP/PVZWhXHK3HN2YcCctWIv6vn+H6Fy5vbs6oJjuIg/YFe0uOZgY1uH5PtW8T8XLw3PQ7gUrulWach4ILTlen8dUPTuBLurTHNytbWE90R968b00kQQS3OAF7bWab/AMnbm5LqlhH0N/ou3BG6WrPyc1+14lh+Drg3XBenVCZLGGl7GxCzBJgetap5OKhPBjKJM+aquEev/wBFthno1dHhp3ir/SHjJH7plEwYIUEwdkno4Jnmnp3LoZoOW7JBAgKS4bhVkjPVBGJQTtt4qT2godsAUA9xyhJEKJg4CEndAMHEKA/shuyk5HMqvE7boJO/KDJUDAIKN/S6qYG5QSHNa3tN9ShreftHEdE5iTkY6IS7YFBaewSGxKhogEkqBMQSm+AECJz3KBDm4EKSOQxMkoDAMbBBEkNIGykGRuqtLiJ6KwMGEFuYx2hKglp99hQXkpzYlwkqicHZQTmAk4whB5cKAY7sqDjMoT3D2qwjkl2UFRMEzgqwgASqkCRGAolzzt2QqOPhH831f95VvsatlWtcI/m+rfvKt9jVsq5cHu4e8vtyIiLdmIiIMbpPx/53U+5ZJY3Sfj/zup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQa1xd+b6RH6yo/Y5c8d5grh4u/N9I/eVH7HLncGuGTlY4/eX/hrPswjA3yVEtBy0oCThsAJJBg5C6Ga042wqneQMKA6DvhXcZAQVzEqQe9RAnsn6VMHpugDxQboeaZlRMdcoLECdlDgQQRum+ZhQQRsUEh07thQ90iAUlwzuowcjBQA2WiN1Id2uVVJBEAwQocBySTB70HNOYVZyqsJFPtZ8Ua5pHNMoLczRhR2dzuuE1ADMLjfWETKK5iYdJKo6oG5BXUdWzuuJ9dxGFJkiHZdcCCuM3BLTC6ocTMpzR0Xnb1pyms93UhS2T74rg5iTgKzXO6qbNOw4gZWoalbv068JI5rOqYa4f9W79E+HitpLsKBTpVabqVWmH03CC0iQQsM+KMtdNcV5pLVGwQC0gtPUZH0qeaDC5NQ0K9sHuuNHPpFB2XWrz2h/urHWuo0Ll5olxp1xvRqdlw9h3X57Nhvin90dn1cd63jfxd+Tzg9F1qwLmv5m4Gy7LZjJwO8QuJ8O2lYw9OKiA97PFbhZPLaLRAHKM+K1OnTio0DAWy6a5+CS2BIJI6LsxdoY3dPjSqylwRrjq0ACg2nLjuHPaN18q6jSNKxZcVHRUfWfTpMA3Y0QX+GcQvo3ym1q1l5Ob027C1vnKNJnnIeJdVbykg757186a+1lte07GhcOuBSEvc79M7geC6KsrNWrODS5hMAFek+Sai513rF5VYRyW9Km1xEe+cXH/kXndYVPOVX0nlhMtJjIC9X8kll5rhrVah3rXrWierWs/qvWaf8uYTH7Tuce3ztI0S0rsdFQGtUZH6Qpnl/ivD9Dsi3V6Vu0zy0uQnviPwXrnleufNaRY0TE4HsLp+xedaHTd7oGueQT6PTqOMRl2f/wBZZ4txjaX73ejWlFpo0KTWFwbDz4lZKjTJJc8ST0XDbyCGswABK7zcObP0BZRwsuE0SXxyjcLZ7Kh/ZMFNhL3wxoA3d3LC02jz46hw3W68M0PSeKdKpE8rBVFVxOwawF5P8APat8UdVoqxvOoar5aXmvrnD3Bltc0KNOxtKlSo64qCk0uDcy47EzA8V55pNvqlGwvbyxDWveDQquABe1vUA9Qs3xxaXPFXF9fW6RbVFa2FcO3AY5xAnuwJWs6fd3OlXTrZ024BPNiQ38Vaz1TMrEarDqVLC9rAho296Dg+tcFXTqjHNr3lZ1yWNAl0ugD4K2Ft3xHqoNTR9FbdN5uX0q4mlRb3wTl3swsNxTpvEui6dSvK2qUL26e/lq21C3htAEYLdye4ytIj4Ryf3Xt+HuCNbuBS4purfTKnYfb3tUkUxB7VGs1ufNuHwxlpyvIuNdEqcL8X3lOztqNDTqtQutHULsXVJ9PpyVR74evPetrsNbsra3qUrjh+2uq9TLqjzyvPr5vsWGvKNlc1Kpp2jLKhUz5lnbhdeHJevaYYZKUnvEtZbeU7hrWhwD4yNgu3SDgJnH0fxXHqGmWjbkMZbGmCOZlWjUJa8bbOkgzvlWt9LbUfTpO1GoGudHKWQR7Zhdc3rpzxS22y8J6ppuna8DqFJha9gYytv5hxOD7ep6KOO7zSW6syno1WbwuLq5oiaZd0IPV/XGF3bThvQLXTW3VOvXuLzzzWubcNFPkBmSGDfIiSfYsZq+nUhqLhUbDxTAbjHLmIWMZI697aTSYrqYfRH/smcG0K7dW42vmN/wCi/wDQbV5AMPIDqr+7Ahs+BXrPl4s9E1TyYUtUu69N9W3rsqWVWlD3VpkPY0jpyy7/AIQvIfIX5RLvhvgPU9Ap6FTvhSuH3DKz6nLTbzs7QeIPNnoO9aJq+uatrrQ65ufNWZ5n0bKkOS3tg/3wps2aMBdEzFq9LCN1nbSdSdpoLha+fLZkB7Yx3yP/AFW06Nc6LU0XT6lrY1KN8yk/0u6rvDvOVOY7DZrQ2AB7VqOoWtW3qMt6bxUqujkbsT3exep+TLgnTdRsmu4g5m0azSLWjUqGi2s52eYvBlozgbHquK+GI7Q6qZpsvZ6Pa3FpT1C8oGs2s3mpgNEkAwSfuHtWVtLG383Uq2mjULSmdvNt5mmNwXdfWtg1Pg2x4U0G/wBWp8RuutM0tgfzVGCoXHAbQY4RzEnG207rBUdX1i14esNX1AUrc34n0QSzzLZkQJ7p3+9eYprs9Tbc7dJnBtxf0blujWtV9ywF7beQ8VRueQdI8FqT9QvdNfTradcBk4qWteS10YPqIOJC2231+nTuS+3dVY7IbUbLT7CPuhct/YUdb0bUdbNazf6G8CtTaQyu/mGHhmxd4t7s969613eXUudasbzTLS69EbRL6RoVHty9tRpBPONueDuNxnoVrlxf2LhWbVrOql7HMx3EbFcNrc2NJ1xodp6W91zTFRvn2iBVZkBrBkDlDhMnJXRvKVGtDqbzTDiS4kAcx7wB06LxPd6jsxlVlrctFXTqz2PbyupgCcgzC5q2o8SVbmnWbSvL4sM83IXAj1jY/gvP759xp2s3Fvb3DqbWPlpYYwcraOHeNtQ0a29Gvqzri1e/naHOPZKXxTrfKxeJej6RfcWCtSvbum+3r03tfTfWqSWBvwe9eqcRcS3PEdK31rVDQpClQDIaCGtAy5xJySZ/8yvD6PHekVmOdTruaQJ5GslxXYPGlW+0KlptpaVLivSD3+ZcOyyCTzO7+/u8CvlZqZJjWnTSa72wHlE4gdqDbWxZSNC3e4vZTd77kGxd6913uGro1uEa9J7p5GAT3kGQtB1a4uLzVXXN1V87VqBri7p7B0Hgto4UvBSs3WpZzeeeWz+iA2SVvfFFcURB17tL3i0d5/Rr2iSCTR5gD8KDIH8FOixc0PPtHZOc+vI9ix2l1idGNckAvt2CBucDKyOiipToBpI5d56O8QlYYzy2a3OWM5SG9T3GV7joTvOcEUQR/wBRUbA8JC8Lo1CBzA846g4wvbuF6zTwRTeCCAyoce1d3hp7z/Zy5Y7NS8nw83o93TDcc7Xf8wW4RB71pvk5c6po9y8medwM/wDE5bmZB2WvhZ/yoM/tz/CHYKpJ5ldxMQqxidl0sAmQcKBMbKJI8ZVS4r0Jk7RB71I5tnZQSQFEO5o70E7DOSqumJCEOGAMFDLesoAkiGqCRvsQrDmySI8FQHmBcRjuQSyMyoMF3gjpJHcpaSZ6oDi7MNmVVo5BBMkrlgtaQNyquHZxkoKBpJJJV2nEM371HvmgHBVtm8oQRBmCM96jlPXZJMQ4qBzTk+pBLxyAcpwoBHLlTLp7QkFOUcwPRBDQd+iCRJQuJfAEDuVjM8rfpQUM7qeku+hDIwCoILiAECS5sN2VgQxkO38EbDSQ3MJnm5jkoK5qRIgKxdy9kKDzF22E96Cdyg4uEPzbVv3lW+xq2Va1whm21Y/tKt9jVsq5vD+7h7y+3IiIt2YiIgxuk/H/AJ3U+5ZJY3Sfj/zup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQa3xd/caR+8qP2OXNu6cBcPF35vpH7yo/Y5cvXIWOP3l/4az7MIcJdjBQF3LDhJViSRn2KM966GaeXwUj1DwUGcZUA5AQW8CAqwRMbq0hRAJkEoHaHiqlsbbqwkElHbAhBxF0uichXkx3FUI7YOxUkHmGfWgsC4GO9HGIjdS/YEHZVwRJUVHYB5uqnDjLtlxuJBwquqOAjCbVNZwMNaYauE1AcNkAKjzvK4XuIGFJk05H1cLhdUxuuJzjGSuImTMqK5TByCuMl3eqgmVDpOJhRYXBcFacZK4xzAQp7lFSTnCtJgQVAbOy5BTOEFAXk5XOxrowFy0qBMLtta1sDl9qqOsLdzgCRC6OocPaZqx/6XbjzoGK7MPYfWsuSS8YTHRY5KxbtMPdbTXhpNbh7X9Mn0So3Vrb9EmKrR7d10WX1rUqmjVDrW4G9KqOU/xXozg4iB/HouvdWFnfM83fWtO5b/APcbJHqPRfOv4Ks96S6659ctMl1MSwcwju2XZstQY14ZVBI7jgLtXPBlKnLtG1KtZO381W/taf4hYG+0/X7FpNzpguqYyalm8OHr5dwuacWTHzDaL1vw6vlOuqtXgltO2DKjql/QEvy0Bsvz4dnovm+4Yyrel9OsSXOJMtjlM/YvctTo6br1i7TLytVpt5g9gk03UnjZzSeu49q0jWPJ7rFNr62n3dvqVPlgUi0UqhHr96T9q9UyxxKWpZ53VpVWh9VzCWOeQ1x2dG69d8mDeXgVlTP9rd1zn/gC8e1AX2mVH2d9b17c8/M6nXaWkHvXsnkyBd5OdPIAH9vX2P8AiaveX2N728U7WaP5Z7kDUtPtnGJYKgI7oha5orPO8W3fK4OZRbSpD/hYAs15XqVSrxtpVAiR6OIBWD4NoV62p39yztNNyWE90AZWle2JJn971ShTgtGZjMBc9QNY8NacwuOhTrtptDnSRiQd1yVBLuYiYwuVq7dowu83zbztK2/TLgaZbazq7hJsdJuHsbO7ncrG/wAStOt6jvPsDRlokLZb4c3AfG7sh9PSWwZ2DqgJH/hXRh+cfBhfvMQ8Ys9Tr3gZXtrpzKdra0LR5aYaSxjucHwBKxmr31WrRZXquFC3dmmSO1cEGfon6VhNK1ahZVPQL0PfZCq6rcsYYcacSQJ3J2Wc0DTf/wASuLRcXl5TtLSm11R9tTMOp0mmPNUgdzgdobDPVSsb1EcN9a7vR7HiHVOMPMUdFpeh2lNjReai+mCy3wOxSbs5/hs3eei2e44eoegsp2jC19EEDndLqk78x+ETuCfsWasLC1s7C3sbG3Za21u3lpUqYgNHh3z1J3OVkTaTSAAz3ALS1Y4eYl4hxNZWfoJdW0ihXe+aZe+mA6ifGIz/AAWgaVwFr3FWvOsNEtuaiyDXuqpLaNqP8buvg3c9y+hdcp8MUL20HE2rW+kULt5pNr1nhvPjYzgDpzHAlbvo2m2Wn6VQ07TLSlZ2bG87KVIYyJ5ifhE783qXukzSOzxb9zzK18g/Br+FPyLctuKl4Sah1YGKrXxu1vveT/D175Xg/HXk34l4Cuo1Ok2vYOfFvqVATQqHoD1Y/wDwmPAlfbdG05YIkAZ9verXtha3thWsL21pXVrVZyPo12h7HjuIK90yTvu8TSPg+J7ZtLUra3rSWNcA8Z6jf2ggrra2aIubdldpFZvYJBkPY7LXD6F6D5SuCrfgLVLX8iWjm6Nfh5tw55d5ioDLqU7xnmb63dy0u10y6vbOtqVQ8zXnzMfBhuftWO+i2/g6NddW58Aa3oOl6WNO1C7pWDnVHVmVngxVDtwY964DGcEdVrOp3+kUr+5bYVHVrZ1VzaAYC41ATgMbuQTMY2grD3Gn1KVI03PDRHL2Dv3BW8nll+UeJqtvRoy+nTL3ASXBjSXPz0nlaPau7Hl7OC+Pctis+E61tdO1Xie3fa3Go2/9ixrwTZskDmdE5iTGIXszdEsbik2ppd9RvLUUw2n5l3LyMA95ynbA6rzetUr31Q3FRxdUdORtB/p9iyfCVS0r8V6bZ31R3odW5p0Kvm3lji0yDBHcYVi3VOnromsbXp2TNdrVra6uRRsLKr5425eeWtGzntxiOg8VrfEl5X1W/eG1f7GeTtzDPEzvMDGNgvoLWvJLpWki9oaXe3TquqBwp+e5SKT2ARzOOXNgkR4r5+1fhu8bdtfMNFQg0WCDjAc2fffaFnfdbdMlNWjbH6zd6HZMFtb6zWvOeC99vTiRtBJOM90ppWoWw0+6oUbZoqUabn+dqy5zJw6DtJnZa8NCdcX7GULjzhc0PfUfgNZ1cR09m6zxp2+naf6NZsFbzh/tDVOXd7vDwhWdx8Xp0LDXL78qW9Vzx5miDyBwHNT5RIIIExjaVrGraiaVYlr3EVRzMaccoOY9hW41bHzGhardBpf5i0kBp2c8hjRjun24WhXtoKRpenTVqskmmcRPSV5qS0u6p3Lq9SoJrlxlz2/epZQr+bLqh22BW0mxvNRIcWst7YD3+GN+nqsuzQ9Lo0uS0um3rwwFz2iBJ6Cd/Xst7ZoiGUYtywXBdPhutxDRo8TX19Z2VZ3m3VrVjXBk7F0mYnctBgdCvWrWnpum8Aa9SsW280bqrTfUo1A8Px2Tz/CBBEdPBeMXlO9s9QdTfHmyZbjsuHRZfQK93y3emWdcNfe0wz0d5AZWIMwJ2d1Hfss8kdcdUS9456Z1LH3hHpkCSA1o/gtr4OpG6o3NCnyteeZ4cTEDl71ql413ptYua5pDoIcIcIxkdCto4TYW2d1UmJpuj6Y+lc2XtRtSe8vYNJ5vc25wA5/N0zB/3Qtj0yqHWzZwYEif4rq0bUW2k+Zc1op8ob4iAPwVbKsKTOaOy0RttnquXqetNla0+daB74wAfWvVbG8/JnkvqPDs8lVoDeuD+C8osq1SvWfUfghgxHvQt51G6NPyfm2pnLafIzxL3R9i2raYiZhlNYmYiWS8n9It4cJGCW05+gn71tp7PVYHg6iaegGBAdVIHiAAFnnNM5K7/CxrFH9mGX25UkyO5Q7B3QtMDKRjK6WACJmFPSYVZLeikEnJVEH/AAlVDnNBn1K2+VLuUe+VFctbyg5UhpiXKAC4TsoqAugTCCTNQ5PKAoOBDRMKuYDRM96sJkQgqAeaTKmSD2QrevdVkgEoEuBmZCPDpD27qNsAqeWRzHEdEEyAJIyqMJgk4HRSdubYK0teyNkERBlxkKSAdigbIjuVBieiCWh3IS7pshBcO5IdBC5KY7EOQcZwzlBnxU7M5QTKinDargdkBPOXu9gQHdlondWbgc38FBI5pcZCq+X9tm42QS0ES7YlA0nMoJc2Cpw1sAIEmICAe3vUN2KmCDIP9UHDwj+b6v8AvKt9jVsq1vhHNvq/7yrfY1bIubw/u4e8vtyIiLdmIiIMbpPx/wCd1PuWSWN0n4/87qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGtcXfm+k/vKj9jl2M9y6/F35vpP7yo/Y5c8+Kxx+8v/DWfZgIlS1sdFAHerCV0M1cZzlWhVIyDCY7ygGd906YxKiCOshOozsgiMRCObAEZXJMDZViQfFBxw6ebcKXkOaRCe8byqS6RBRVBBpwdgqEmIaUcYaQFxEnlnZRVqjiBkrhc6QlRwiHOhcRMDBx4rzKoc8EQFwczuqu+T4LhJMkIDiDuuJ0gYCkyme9RVQT1CmTOMoVDcOlBcE9VcZOEAnouRjDOyguymRBXZa2RkKGNIZlcg7TQAMhUcokDCgVOXBypEiDie5QeUPh25UmSIXbD5LU5YnwXGB2uw5SQ4uknK8cva7HDqrSJXGI2CuMBQWjm9i672Nc/fIyuTO85UjA2ypoY6502zvZbfWlK5B61Gjm/wC9v/FYG84K095LrC6ubJ3Rp/taf0HP8Vt0Y8VUBrhnos7YaXjvDSuS1eJeX6jwXq7qRo1tOs9atujGkT7GO2+ldXRNNt9G01unW+n1NPpNqvf6NUBaWEkZg9DC9ZIgyQHdVpXFYc3VbZ5P95Rgkydjtk43XFmwVx06olvjzTadS+evLXTA4o0smC11oQDMZ5tpWK8npDNJuqzXOLxVeS2NwANlsflotD/7n1BrWu82X04dsObqta8njQ+0uaU8oLi4Ce8LOLbxbetfv7vQ7a8pVqFOtRI5XtBE4hXe8mY2K6FhTD6FFpIJ5cx1yVlgwBoHLhZae3PpLS66JfjIieojZbzRsPTOGuObflnm0YEDqYDzH8AtJ04+brPOCA6Q1eo8HMoajqGsWlJwa/UNMe3zRM8hHZPs7Q/iurw8bnTDLOu74guWWrOKq1jcOnmDJA2diYPtWwUal3p9WjeabV9Gu7V7alCowRyOH/6sYI6jda1xBYXLeLrl9NpNaieYtG7oJBhbTZvbdWNO4pEODhC8TPTWrp5mXvvAnGFlxbZGk1jbfV6AmvZh2/e+nO7fD4OOm2J4z8rWk6CKmm6K6nquqg8rnNM29senM4e/P+Ee0nZeb8H8N09RurrULs1m2dNrrdhpVDTc9zhDocMiAenUjuWscU8J33Ddcb19McYo3TWw0dzXgYa7+B9eFvXptOmNqzHd09S1zUNcubnUNVvX3V9UJD6jsY7gNmt/wjC3Xye+U7WOCTQt6zX6pw8/39m539pbn9Ki47D/AAHB6QcrzTzLm3DnwQ2oJM9Fm9B0HWuJ6jdG0WyNzcB0uqE8tOg39Ko7Zvq3PQLbUQzju+19C4i0bijRWaxoV/Su7N2C4HldSd1bUacscO7PrKm41BvabQHO7q9wwF57wFwFpvBNlVLLp97qd21rbu5MtY/lyAxn6IPUyT4bLdCJyM/+e5eJ1M9ljbFcQaBYcVaQ/TNXD3sceenWae3QePeub4jbxBIXiGp6De8MMtuH9QbTqcrjcmvRMsrsmGuHcT1HRfRNFpJgSSei8b421jS9a4puadjVo3JtKDbWnUDpa6oT2i2MGNgfHrC5s8RFIdGGe8vOLu3NUctNnMdxyiVXh3SbzQL7UNZa91J1TlZTDXlruUg80gdJGy3WnTbTLQ0BjW4nl3C5mUqNavdWtYNYH0A+k8jZ0x9EkFe4trszmvd0KL7O54d9Lq3RtuWjVPOGl3K8AwI6yYHtWnWVTUNPpi6N9ZuiKjYqhzmmceo42W40tPudPFenamlWoVWOfVoPdAMDtObj2mFpN5Y+auXg6FUa3n82K9NvMSR0MYnx6q11Ft7LRuNPo9vlp4J4s4Zp6drH5UtNQ821z30aIcGVAILmmcjfHitf03TdG4s4kZp9rxBRbVrONcVKrXMLoEQwE5f1ifp2XiFvw1rVfUGUNPpNp13AvAqEMLNpJMwBlehcQ33DVKwta1pqFO51u0psFzTsmu8y54EF4eYgjbs9e5aZM25jsypj1E6nTh4w4afo/ENwywq06tvUruY8tZydpowY746bLXtToWtHSqRceVrCSH9YiTHes/oGv3XEjLjTdWuPP31G1Nejd1BlzmdHDZxjqN+5ajxe/wBEvm6fSDRVaGur1XOnlJaDyn1DIAHrW0Rt4ns5LO987Y6hasDBSr2juf8ATbyjzjT65aPUtAp3lGpVrXV3bCY5qdNxJknvXPrOpVtO4cr3FOu7zt5NvScd/wDGfDsyPatZo6syvRFK7Ip1GgBr+hV8udbTr02bUNSqa3e06pADGtDWUx72kGiA1s9AMyc7leueT/yG6/xTwfccRO1ClptO4p8+n0qzSTdQY539WNOQDud9lpXkd4GPHvHttpNQFum27TdX9QDHmQfezsC4w31B3cvvdlG1t7enToUxTpUminTpUxhrQIAHsGFzeIt010nX37Pz/wCIOHLzQ9Wr6Pr+mG1uafvqFYbjo5h2c09CP4KOHeBuHNZuKtrdXOoWl04h1s+g9sgDcQRkjcRBX1f5ddP0658mNze3VpTqXlnWpC1rOb26Zc6CGnuI3Gy+XaJayoDTdycp5mlpyI2IKwrkt0/tnu3rqZ7wwHH/AAxqWi64K15fnU2XTQGXhp+bdV5cQ9vR4xP0rn4as6TrzT9OrXAt+d0hzhLTUblrTGwJxPRd7ie/ur+nZUbq4qVwXvdD3TAjJ/gsnwJYzxF6XcUg9tCmZ7MkOdkeHtXnzJtGrNZpEd4erXUspCkA3nJ5Z39o9qrTteVgGC47n4SmkA1vO887yc4kk967bKbnQXQ143IXhI7OeyYZ5genK5vgturzVtLC3d2ml3nXj9HlC1qjSMt5PfFwx3rZKDHPbTAmanLSaOsTH4r134eIjvtv2h0Tb6HaUzglnOfaSfwWQdvlQWtpAUxsxoaPZAR0lq+3jr00iHDedzMqkmfBQ49nG6jmPLCjphe3lPP3qCZ2VZIG0qQcTCImcZTDhvMKZLhMKAACvSIPM4DMIAZBJmEIJE7QmTiUCCSY6pkbKQMbyFADRnZAMjdJABnMpBc6eig5dkIJaIMnKObzOBJQ4GT9CjmDTsgkjmERGFLAOWFXtNaXkYOyiZEhBPKWyAggDOSgjlmZKjlDRPUoLeO4Rru1OYQNABgqJ5WOzKCd3lVbsS7orAAGZzCpu3JxKA0blTAJhpQe+5RsrckHuKAcGAVB98nKBuUEEQEFTyuOeinlIMuOFZoDXbY8VEAuMlBw8I/m+rfvKt9jVsq1vhH831f95VvsatkXN4f3cPeX25ERFuzEREGN0n4/87qfcsksbpPx/wCd1PuWSUrws8iIiqCIiAiIgIiIMbq3xD53T+9ZJY3VviHzun96ySkcys8CIiqCIiDWuL/zbSf3lR+xy5WuBMQfoXHxd+b6R+8qP2OXMDGHRnqscfvL/wANZ9mEyFGTsVHvTyDLRlSGkmdguhmg+tTy4lHMHvp370PO3CB4jbuSQHTChrpBcAR3hRugkmQcqQCIUbD7VBnlkHCCrjzP9So4mVMknPRQ4CMlR6UdBGVw1GggDMLlOBG64yezDTKDhLS7BEjxUOZAjf2q5GMgqjsDYrzKw4nNMxK4XsJkgrnMnMFVLSckx6kV1ojdQRkRhczqfNnr3qOUgwSCUHGWkbmVIx0VjyjPVSAXA5hTQs2cdF2WtMTK6o7Lc5XNTdIlB2mOdEQuQDrsVxsyN1YQey45Oyoky3cq/IHgEnKq6WRmUnmODBXkhPLyugYPerbZOQhPakGcKWvmA4QV509bVIAIMxKntSR0RwhxBMqkiY5iFFMiTurNJOQoy1pgyoHMW5MKDkP2oAA7Crs0SZU4hWIQIk7rU+LbcmjZXMHs1HMJH+ISP+Vba0CJO6xXElDzvD1cjLqTm1PVmD/ArLNSLY5e8c6tDxLylaO3U+EoYJqMY5zJ/SHaH2Ly7gOowatUZM+cote1o6GYK9x4gJdw/VLACabw8T1EwvANMA0jj91LIp1HPYB0bOQvi4Z3NsX8voXj/U9C0um5tzc0iCOSoTJ+CCcBZ6m0uaCTg7eK1+1phmqV/Oe9qEPaSNjj6VtLnNAENwRiF63t5lFGjyVXEAiczC3Pgi6bY8faU9x5fSGPoSTEy3mA+loWlUqrhAPiDnZZmycWVLO+Yf7SxuKdzJ6tDhzD6F04bavEsr16o183kflE4doaD5datCs0vsbu8qU3jbla/wB79srVtZ0zUOFdYuKRb5+jUlwaBArNPwm9x6x0K+gPL3wo7U+KdP1Kk4xqFtz0nNHva1NuAO+QZ9i1W3paZxpwn6PqdI9poqMfTjnoucMlpI+kbFYZJ1knHPwdGOd44v8ANltFtLGvwppxsWtbZvoMfTc3x98fXzTPiuHzTHitZ3dJlVjjyVKVUS147iF5vrl3xfpFjb2em61c0rvTGeYi3P8AZXlHdj+Q4FVuxHwhHcujwz5ROJ6utMfqNO31ZjABUFakKT2DwcBj1EFaRTt1bOrc603ej5G7K71+jU/KdSz0mOf0YNmr/utfsG905C9d0fR9M0XTaem6VY07O1ZMUmCZPe4nLnHvK1nSuKtI1p7aVtcm3vAARb3B5Xj1HZw+hZu44j0fTLd1zqur2diwGHGtVEh3dAkrWturtDO1dd5hnA3knmd65O/r9Si9vbPSrCve6leUrWzoN5qlaoYDfDxPhuV5jq3lp4YtJGkULvV6u3MxvmKU/wC86SfoXBp3GNjxHZee4xsadpWbULrW3cOagB0LQ6SH+Lp8IGF63NXmI2wnF3lQudYNSw0sVNP0cmHOnlr3DevOfgMPRoyeq6Vvomj+b0e+p8QWY1F1m1lxamqwG1q5Md8lsCPFdXjvX9ArsOl6JpGnOqH+/vaVFp5B0a0xl3ef/VaZpOjafXrCu+uXtBjle3s8x7+sLntk3HdvGOY4es+j3Vrbk3QbVt2iW3FEyw+srBjUmO1WiXs85Tpk9ktklp3IHd19YC4RXo2lIPtTV0+sOyH2lWWOj1b+ohdw6lZ3FChUZZUm3jGO88+3aGi4G4dyjAcNj3+tZ1yxM6l6vimrJvt6zBWbcXzb6yugKlJ23/EDuMSCN1qGs2Gp6Xe0n2OsVKlLalSLgA2Nx498rp1uJ7yldPp2lJlSi885pPBLXfQRB7yIKx+ta3pt1WpXF3TqW1Om0U3MI5msP6TXjOeoK7KOWeW1WVjrGqaaK9d9SnTrtBqg4DnScAbnpPTKxtbR7mhaF7KAdzucGUaTO04jaAtm4H4t0H0F9Kvq1Bt9RBZTa5wb54HIhx97kme8QrcQXradOrcX91a6SytShr7S4ZJaMwIJMnvXmerq7PWo13YujS0Thnh6y1F+qtfr3pLC6kxvYpg5NId4Hwu87YWualUbfapf6zf3dLzdV7q9StHMxrQYER0iB7AFquu6/YVXA+kPunUhDG0m9hv/ABHc9SV1bPi3h5mlV7DUdIrtq1xFS5o1BUkZ+CRgeorsx0msOa9omWvaxrFvxFrsNrehafRY5tv5wcwEZlwGxcRv0wuhXsa9vRpvrUjTZVaXMJ2cO8LHXfo9veVKVrXFxQmGVAI5m7ifELIs1KtcWNG0uHedp0ARSJw5nqPVdlo7bc8TEzpuXks414q4H167v+HL5tCnUpClcUa1MVKVbMtDmnukmRkT4r3vSf8A2muK6T+TUuH9IvG7TRL6Lj/CF4Rp1pa2uh2/o7uYPZzudHvifwwPYrhjnV2sb75xjC4Msxady2ij3bjXysu8oHD9HTaGjO0xlCuK9bmrCoKpA7IEZEHOV5c+kaTyGZBzHUBc1sKVtaii0jABJ7z1K6d9est7Z1Uy57iW02jdzjsPV1Xz47T2dcViKjLQ6hXoVHRDXuBdv2RgD2kz7Fv/AAPYBlhXuwzFeoQwdzQYC1Whp9e20ehSOatw5tEcvQnLiPUJ/gvTNJtqdlZ0aDQew0N5Qs477l6ntpk202wTGx3XNTAByZJVHQJbImFy2zA58kZXp5ZixtfP1qWM7wto0e29I4iojlilbjzm3dgfasPpuKRe1uI5Z+1bfw5bBtpcXzoL67+Vpn4Df6krfDTryRHwZ2t01Z3JmeqsI6nCplGnBBX2nBCCIJ7lEc3WFYyMDZQc5CJsDIG4KocNUmT3qCIaPWiJacEHopaQTjCkw4YhRBDgAPoXoSBjOwURmRshBLoCOcGmDv3IJjGMKN8ObjvUQCJOCpkERKCTAwTAVeXMgyrEAnKADoYQR/FVMA95ViBHM0qkEnAygnlDh2nFBhsJyCZdurdkDJCCvLymSVJzg4UGOaTkJlxmZCA0HzZgzKiA0RM96lvvTybqD0MetBBJLA6FOwAAmUcZYQ0g+CluIg5OEEkAkZiFIhu5JUEAZKjmndBaBEqA4NMp0BKhxa7cIJaC989EBAJkSpBI7IMAqHEDACDi4R/N9X/eVb7GrZFrXCH5tq37yrfY1bKubw/u4e8vtyIiLdmIiIMbpPx/53U+5ZJY3Sfj/wA7qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGtcXZt9IH7So/Y5c0Ccri4u/N9I/eVH7HLlgmYWOP3l/4az7MIcHMBeDIUgGGuJhAR5vG/cpMSO17F0MwGZacqRzAd6q0FpIIweqsZExkIIBOQDCBrwJwVXsndyiSOzMA9UEmXAlQ89kBS6abJYC7K4y4udKCME4KhwEdSpjMhQZ3JUelCREbLjLYOSuWC4zGFxvDQcmCoKEkHbCoXE5BlXEiecYVXFoMNGVJWHEXmCCIK4oPwiuV7XOEkQqhgjJyiqh2OUbd64nAAxMq5hphVJ70FAwAZcgG8OQ8sSJJVYjOyDlaMLlYSPUuBtQxsuRjzB5tkHYZUGVyAzglcALS3C5BA3QcwaI7RKsIDvfKnnGRDinNDhyiQvI5cEgyquIgEnKgmfB3cqwREiVFW525wrBsD1qoAdIOJVsOaIOJXldpAAxzZCEjqd1TcENBlAeUZEKm18DxCTuQQfBUccSPoVA4zMQVUcp6AGCVFdguLSpbEA+daaZnxEBVL5G4VmuDhAUnv2WOdvKLih5yjWtKwMdpjh/BeN8U6T5ql+WaQm5sKoNQDqAfwXv8AxFa+i69Ueewy4/tm+3f+K0bWbG3F1V56U07lkOYRhy/M5t4cnVD7GPWSmmAZVp1mWt9QksuKIqAA+ox9KzlFj6lIPcdwtS06hU06wpWHMHGwqubTc470yZE+qSPYtpt7nzkS3piNl0dtbhjr5uSHNPJIlZezqCm0VXtJaB2wduXqsbTMvDnEA75WVt303tLHRJbnuP8A6heqy82jcN81e2q8R+Sa3vLVor6poNTz1NoyX+b982P8TJC8R0yzOl8XVNPtHE6fcg3lo4zm3qjmj2EkeC9m4D1YWHEZ0y5e0W+oU2+bJODUbiPWdl5hx9pN5wrxLWo0WO8zp1R1xajrUsqriXsH+48n6Fr4uNdGePj2l48PM98U/wB2r8SUGHW6rqdMVGkMBAOOYjrB7h/Fa9dWYOlVLq0rUrVxdL/OUuZ48C7r/H1raadv58ahcUGOc6jcNuKT3f3dVhaOvj/CVwa3pr6NlcXloG06N6z+1pOzyE7kFZzr4tqzMS0g2zzQ87c3Drhjc/2Jgx3Rgj2CVgdVNBwY+nTNOo34Jb2iDsZdnpvJWw1CfPOtyyA33rh1Hh4eK6Q4X1HiXX/RtPDDVbblwNV0MBBO5+iPEpjiKTuJaXtNo1LHaVo2u3tF+oWlk59K3BeajnjpmANyfBWrUL+6vG+m1aj3iAOd/MT7Bsu2OFOLdHtqlj+TNR9HqEOqi3f51j3D/dnIXJothrJ1QW1OzuWCCannaDuVsZ9cre1rz3hnWKwuaVa2ItfNc9s4tcG8nbc44BxkkzAC9etvIpxBT4ctbr8o0mau/wDtXaZUHK1jXbMFX/tPWOXpIWxeTTh3TdTqWuq6gylS1eypclrZVt25M13Tu84AA96B3leuOreZ/sdQpksifOdB6ivOLDNq7umTN02/Y+U77hy90WtVOs29fTnBpDhUpwXjuBGHHuglYWpqNCwrUmhgFOq3nYZ5eV0xuNvUZEr2DyyOfqGkWWpsL3WOn3BpkHoyoOUPd3ZHswvGeINNbQ0Wy1K3cKlEMLKnNtvsf4+0LmtTpvFJnl00ydVOp0tSq23pVWo172O5S+tSqACB1cPvhahqmsUq/wDZW4mlEFx6reuHqOn6lQYKjBWpsa4upVndph/RB3IIwfArzjW9Lfo+u3ektdzNoulhO/KcgHxGxXT4eYm3RPMOXPE66odGjdMpPaX2rKtKQXU3bVIOWkjMEepUrVbOrcPq0bOjbhzi7kpiWtzgCcgeBJXA9oa0kEqtpUa+4ZQrPLGPMecaJ5fWOoX04rHwcU20ybabLk8jhy4jKr+RbJ0cz3jmGD3+KzugDQbK9cby6dWf71lQ0nBnhM+9Hit5Gj2t9yW76LKjHkZ28ZB6FZ2taJ7PcVraO7wnU9MNpXaSfPUyffTHs8Ftul+T+91jSm65odwb3T3uLHsYznrWr4ksqMGR3hzZBGcbL0W58n2nVHPpefc62c1wFKs3LHEdkyO47q3kqNhwvq2rUq1xUsw8RVD3Hl7B2H+Kf4LW2afL7sopEW7NHDaWg21Kyr3Rrdow1w5Xs78HMLv6U22vajrm2rioKYhrdiPEjos95RuJ9M4grtFfTqJoUZFHzjAKrz0LiMn1bBeTCp5qtUqWZdSnEsdAK5Yjrry2mdS3/VdbstLpE1KrXP8A0AftP4ZWL0i5utRqDVLpxBqO83btI2bPaMfQAta0vRa+sajD3uFGnNSvWJnkZ4H7PFetU9AtRp2k6fatqOv68VjTDYbRpbNaT3mP+bvWOWKUr0xzLSnVM7ltvClg++r+m12E06ADaU9TOTHqz7Ft7SGuexkyD77oV0dOottLSnZW7RLR23MOP/P4LMUqNOmwdklzuncuOO0aaz3lFPla8EmcdVkbWngkjcwI7zgLoU2cxnxgLYtGoxW888/2dEScTzHoPv8AYvW3lkhTewUbOll5hsAfCK9AoUWWtvStaYhtJobPq6/TK1fh60N1qNW/e3mbQMNJ6vO30DK2vIOdv/Mr6fhKTETafi5M9v8ATCzh/i2UQCJBVscwlVDmkmOi7nOicZUQDsVJ3IG6hoIlyPJzBo3QxEk4QtdyTEhTy9nw+1BQDMqwLi7ZRIgRsjTNTs7dVdh1gblRHaAduruB+CPWoAAyTJVCO1LuiYOQEkOzCR3GAEEhvjlVPLsZlAeYyDshk9Md6CcDqq84BkDwhQcetCAY7MOCC0tc6Mz1SQBkYVYzMQ1He9gbIALCDCszGwwo5YLeWJ3UAmTymfBBLXhzti1S+AIdsSqt7YkntKzgeUcw6oININbLTkqI5XAK8CMGVBH6OR1QSYKrA7kkqx2E4KCp2QDEqcA56oTBiFdAOpQAjxUiPak4TQ4OEfzfV/3lW+xq2Va1wj+b6v8AvKt9jVsq5fD+7h7y+3IiIt2YiIgxuk/H/ndT7lkljdJ+P/O6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERBrfF35vpH7yo/Y5c3vdlwcXfm+k/vKj9jl2D7zCxx+8v/DWfZgLJy0qAGnsl2VIE5mFQDmeQ6BC6GaxDhgRCgBsRMFVJEQJlTjqgktJMBC0bE7qJLB2sT1VvEGUEOB5YB5QuMju3Vw5r8ZEJ2Dt0QcLhjCmIAJViGkYVXgxAKj0rMnsnC43N+lcgAyCqwDMqDjMB8E/QuMkMMAErmgSROVVzW/CcUVxFzjjf7lxPbIgmSuwWgNhrlx8mJmSobdQy3cT0UbD3syudzJOVxxOAYCDiAAAhykzOVbzcEHcKpiSCCEVE+Cu0wJ3VYAyE5+XZBztqDlkFSHF4xBPcuv5wdRlWa/pCmxziOWHiPUr8waQGkrhDgWhW5iDA98oObnMCFyAgNBdJJ/guvzF0Bw5fUrhxU0rlLhMSrD30LikdVMhpHaVTa5dymOqo5/QtnxUSJMmfFUJIJ7lNG1+YSQ1x9SBwInMhU5mgSAp5mxkwiriow5DdlbmcchoyuEvDiRyxGxVg54AACnxGC4utzW0qjeU2Hmtn9qOrHY/gcrQNSpG808hn97SMtlevPp07ik+hWHNRqNLHjwK8suaD9M1Wpa3B5nUX8j/APEO8esQV8jx+LcdTv8AC312aobNjqxeKeXDlee//wA/euWha+YbyFkjp4LM17UUqtSkIggua7oQVDG06gA5Incr5uG861LqyR32xw52uBy7xGF2qVwxtTJ8SQu2LcQXGPUVwVramSJEA5MLp2xmOzt1DUuKTK1pU5bii7zlF3UOAz9Oy33U6VLyi8DW2uWdux+t6WXB1CoI5nRD6Z7g4CR4rzi1FW3fLjLJ37x0Wx8P6xW4a11mqUQ91pcxTvKTc8wmQ8f4h+K7MNq5InFk9mXPkrMavXmHiF3e1eC+JnvosqVtD1AeeNsTLm/pcvc4EGR6ws7pepWOo2NS2Y817Zrz5t3TlIkNPd6ui9C8tXA1C40c8W6G1lbTazhcVvMiTbvOPOtH6JxzDoc9SV820NS1DQb57rRwD24qUjllQb5HX17+xcU0vjt5V/hx/b4OyLVvTzKtl1209Br+foM/sScNA974Lb/JR+Tq9fUqLqv/ALzAZDT1oEklw78gT7FqNnxhpN+3zNeg6nVe2PNVCC0GOhWMtq19w/xRYapo58w+nT56RcSWggnmY7vaQQCO4z0Ws6jl5ruZ1D6E1LSPMXXpjGRzt+CYAd3+0Lr1binp2kXOo3DnOo0GlxBJkx+JgLZ9H1fTeJuFKep29I05cGVqD96NQb0z6tweoWncbMu7mxo6LpVDz3ORVuBzgFrB7wDv5jJ+grWJjp/oneZ1LQ7HiW7sL3nqOqVS9/nXAnlfReTPYcM42XuvBfFFbjC3uNPvKLLt1Giyr51wg1O0Byub+kJ98F8/XujXlB9KvWoVqD6Lp5nNIBHdO38V7D5HKtGtreo16Jlps2SQebPnAvWCZm8RPxTNWIpttus8Fs1TR7ywZVa6hd0nUqlOsMCRuD0jB+lfI3GVreaHWtNAuba4piyY7z1aS6lc1C4/2jCMEREY6lfcWtU6t3pNxZ2jyyvUaYc3ckZ5faMSvGeINFbfaVT1J9uypTonzdak9stLDtv1aZC7M2GJmJ+TmwZZjnh4PwdQYy+N3y81Jk0qg6GRv/VYHjixqHVNS1Om3mp0L003VRgQ/LR4lezUtE0/T6JpWlAUabn+cLAZa7vz3Lxbia/a3hzWqNBw8zXuWPLdyHB5LHg+rC4qY58yLQ67Wjo6WI4X4aqcZ6/T0S1rU7e8q06lRjjAa4NaXEGdv6z0Wu0bdtJx5iHOMiQZGDBjvyN1yB7qLhc29V7H/BfTcWuAII3Gdp+lcdk8sc6nUAa0HBmB7V9SvaXzZdou5BHTqt38nmt1Wa/S0e45qlKu1zaB60XRP/dgH2rVrbStQ1CrTZaW7y15nzjmwxoHWevsW76HpdroN3Qq0walYOAqVj1noO4LzbS1iYeh1iIgAZGxXn9/p13R4puBb2r61veB1zScGyGuAl4cOkFbxUfzNOJ8FsPCj7G30Li3WL1zRTstOcHPf0aWkkeskwsbW1DWOXylqupVtQuPPv7IfmB/52Xd4f0LUuINYtdG0m1fcXd08MYxo+mT0AHVcWh8O6vxHqljpWkWdS7vrotZTpNHWB9DQNydgF9b8IeT6h5PeGq9SwuKPphoEapxFVE0qNP4TLf9LlznqfBec+WuOuo5Skbt3aKeENL4b046RQLK1tp9RtXUb9u13cx2KFPvAP4rKaLp76PntQq0WtvLsyR/2TIEN+hUNVmsahRdRoPt9BsTFhZOyXn/ALaoerjuJWzWlMBhY5oLjsHbj1/avlxue8uxFnalvM5xjm6xv6u5dsvp+cLaRJG0kKXjEBoJ6lTQpEvBDcHYKppkLOzdVc1gGXdVnjS8zSp2ltTl7iGho+E4mAE02j6PbitUHaiQti4esXVq51auJa0kUAf0ur/UujFj65iGV7RWNs3YWrLCwpWlOHcg5nO/Scdz/wCei7UjqEgNiM9J7/FWHL1X26xqNPnzO1RynZOzykR7VMtmAFUyADHVV52gkgiR7VPZJg4ChwJO+FAg4cERYmOyVBweZp9iOHdlM8sd6CBMTyo330jCRywpEc8g57kEGSezg9SkGQ2Ffsz2XKodJMHOy9ABDsDZQ4mBAU7O7W6Zjs/xQVMgcyNcC0uAnwUOHaaJkIQeYlroICBE+voqzD4OEY7mkFsEKSS45CACOcjMEZVscuFQYE9FaezA3KCS8CIE9PUqlvbDtj3qYHP3EdFILWsLiNzsgiWwZ3+1S6TBIwOiq0CZdurF3a3kIAdOxwFIgiR1VTuYCmSBgIIiDhSTkSM+COPXqqgmCcygt0kiUP8Ah2Rrg5sDBCsrsQCANkx1TGfAKGycnbqmxxcI/m+r/vKt9jVsi1vhH831eP1lW+xq2Rcvh/dw95fbkREW7MREQY3Sfj/zup9yySxuk/H/AJ3U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiINa4u/N9J/eVH7HLnyG4Erg4u/N9J/eVH7HLnBETErHH7y/8NZ9mFm+9xuNwqktOzTzKSROMSp2yuhm4sASRnvV4ETOVHLBkGR9ijlyc+rxQRM45SgONgFMjl2Mqu+xQSCCJ7uiYAlTAInqq7nuQQ6Ilv0KjiSc4VyIBgqHCYlR6RHWJVd3EKZgRBUEN3BJlNChABB6qMuycBWjlwc/cqnFSOWUEAczT3qjgM965MB2xhcbvfGFBxuae+Fx8gzurco6vJPqUluQJx3qDiLM4VHNI6LnDA3BeqOaJRXDzN6t+hcThJkYXO4CSNwuLkzPToiqDmgkhA/tZHsV3dnZcZMnZQcgqZgGArCoAMifWuEFvwxCnmaBvhQ05zUgjBLesdFcVu2BBMjqus2oCdiArF7Q8SMDxTau1LjElTBOZXV87OP4qS8u+AQfXum007AqCSBkdVYVM946LrNccyQpaRvKbNOzgmSFVpBBMQuLmJMB2FfmHV2VBfsuy5Obl2z61xF4DQXGVx8znEGOUIruNqNe2AC3vlajxtppqUGapTb2qQ5KoAzy/BPs2PhC2cPhmSq1BTq0306jeenUBDweoO6yyU666e6T02280tyLyxdReP7Sl3d3euoxwZUdTdghdvUrOvw/rZYA59ICWE/Dpn7+nsV69Blw0VKLhkczXd/gvzOWk4rvr1tFquMFpPMSJ6ZUOc0uLS0H71LA1wbIAJGRGyuGAHvC1ids5cDRykBpIH6JXbY6G8rM9ImIRga47D2rn83QDck8xzgLWs6eZjbO8McUUtH5tM1dzX6Lck03B4kW5PUj9AyQ7uleMeWryR33DNzV4i4fp+e0F7+dnm+06yLs8ru+mfglehV+zSLRlpBBB29vgs1wpxZU0WmdH1qkbvQKo82DVHObYHBaRu6n9nqX0KZK5oiuTmOJc01tjnrp/MPjJ0SG16RpVCJk7OE7heo6Pbtd5N7jUNTIrUtP1OiaVQODiWVGOFSnO8jlaYK9H8ovkSttOo1uIOGqf5U4ZrTWr2DDNS0B3qUHdR1Le7dfPutaNqfDznVrSq+705xa8uYDFRvTmb3xC481NW8q/aZduG0WjzKPV+EOLLt3GdahYN8xRr0XCpTcJBaxs0zH6QPXuW7F1UVn3XOTUceYvOeYryryY2lzca1U1Vts91mbZ1Klckdh7yZLQZkuAmYC9caKwLWUrG5uS7rTYOVv+8TsrSs1r0l7RNup36F2K9IQAe9rs/amm6i/Q9XrahpdC2p1KtMUqo82IqAHmEgbbLF3NvdUabHVHCzrvqBjGtaajSd4J6YBPrWa07TKVdzX1gfMTAbPvvFe+rpns86i0alsltxyys1oqWBo1XOALxULqYHV0b4WftrChdU7mpfFrqNYOD5AAIIyf4yPUtGutKFs4VKHapdAdx3g+Cx2tcYXWk8MPsrRofUFRlOlWcf7qZMeqRhdFM8/6nPbDH+lrPHQZo+iX9DTya16+g4Uh8INOC9w6HlnG5XzLxFWLNIt6L2OYK9UO5XCCABJnv3Xt91Xq3YdXFR1aqSXve6XOLvtndde94ToarwvdWeoW7xXuXmv59wzQf8GCdg0Y8eq9Yb7sZI1DwvhnTmaveVaDr5tGnTbzupRNRw27IW/23C2hUSxw05r3s6vdzSfErRKAdwtxo2hqTSx1rVHnX2rxUa9jhlzejgQQY3xC9HsdV0/UW1PQbtlw2mYgNIcB38u4XTkmYYUiJ5ds1PNu5RhsRA2C6tck5BjIP8VStdUthUaSOg/Bczn2dvSFXU7n0WkRgcs1Kngxu5P/AKrxE9l1uW0B8gbwACTErmHDXFHGVhV4N4Wpcv5U81W1O5qgihaWzTLA47lzznlGS2Fl+BPJvxVxw5l7d235H0ZpBp0agLn1R0NV3URnlbv3xhe9itoHkz4dda+m1tQupdU805wL3vdkmBho7+4LPf8AqntHzSZ1Ooa1wj5NuEvJbw5Wvr6uGQ3/AKZqNzDat13tAHvGT8EZMZWgcccUVuN72jbUKdS14etz/YWw7Irnvc0dFxcSa7qvGurU6+tVCLKm6aNpTkNPcSP/ACV2LW0qNc+rc0Wshv8AZMbnlXzsmpmdfVvjrMd5daysfMZLZqGDHcOiyYZjILnHqOi5qVJzWwRk5kLs06fM0gN6R61nv4NnQY176h5oI2EdFmrKwPn6VNo5nO7Tv8I7yr2liAQ4sl/QQs4WCg0WVnT89eVyGhjd3nu8AtK128TKbag7U79um0CW0m5qvB960fit6YxlKlSo0W8tOm3lawfBCx2kabT0uyFKWuuHnnrVR8J3h4CcLJAwvs+Hx9EbnmXDlv1T2SZme9CWhysSO5UO8wulisC3MBJwo3CrzAbhE0A7tR3vTJgDYqDBO2UDd0NAJ5VaZEgKuNsoRytMFEQXHEKzBLifBUExkQe9XYCHTjIQHdhnvfYqzIkAqzyHAjKcstGdlYFWnm3bgKSQ6A3BUEGclQT0VFuXlIER6lEc1SNvEqZDt1AJGHtkdCEFXAOeJwR1Rsh3K7BO3irjvHaaeqq4RjfxQC3BEADuVXbjuV2mAeY+oqOU83N0H8UEkgdrdVzhxHZGwRpJcXER3K7ve75QV5gYg+tHBsgg+xVnoPagc3YAyg5JadhCjJOMKJlsqA53N73CCXZG+VMxsqTkQJI3XIIc4FuCggNAP+JS0OzLsyrAHlLcBwVGmXcpGQgQXbAetR2g4AgR3qQ5uQQRCgQ6SZyg4+EfzfV/3lW+xq2Ra1wh+bat+8q32NWyrm8P7uHvL7ciIi3ZiIiDG6T8f+d1PuWSWN0n4/8AO6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERBrXF35vpH7yo/Y5c3LymRMFcPF35vpH7yo/Y5cwJMyscfvL/w1n2YTIGI36qQ4jpKgQW8r9+hTHKYXQzBvJwPBUMye4bKzCCCT06KWk8pJAA8UFCZALT6wUIDsjdTg5hSJAJAlBXMeKSQ3JyrgD3xUOABmEFCQRAwqEu6ZhXJPQCUDxIRVDzRzAQoydvauQuKADJBhFUBM+9x1VD4KTvupEQpIqeYCYkLhOB+K5i4t237lRzefwUHF2uXIEoJIyOyrFpbgH2qpkjLoKDjeBERlceTjZcsS2N1UtOxKgo4QuOD1C5hvCoQC4yUVxOicLgfvELskQJIkLicznPcEVwlxAyJ9arzEgnZcrmCIBK4ml7H8rj2e+FFA54PbyDtjKlzoMEYVH1HjLMyVJcSPewvIg1SHgxLT0XIKxad5HTwXX7ZJJwSpDokOb6j3ortNcHHpnuUl/KY6dy6hHK2Rg+HVQ2o4RG3ioO9z7Q0AlSH82cLpGp15s9xVGvdMjEY9abNO9MEz02UuHM0S5dTm7IHMSVZtRzZ6+tNq7TZaB2ZjvVuf/yF0zWcdirCo4N5pTaacWu6XT1jT/NCBcUjz0Xn4R/RPcPwXn1jWfaXFSyuWFokgc2OVw+CvSjXBaDMTv4rXOIdG/KTfTbRoN20HmaP+uA6+sd64fFYIyR2dGHJNZ1LGPpFr5OCN46qKrYbzBdfT7oXINvUfy1mDBdjnXeAB5mvaSW7t6jx9S+HETSemX0J1aNw6tEgmS1c4ggQA371LmwOxt0IVGF8cp6dStol50gsB5muEg7yo8y0gbiOp3K5Rl0RPepaHOlxOBthWJmOHmYdvQ9d1jhep/0T/pWnuk1LV5wO9zT8H7M7LTeNODBqpuOIfJ2w3NtUmpe6EB/bWrjlxpMO7SZJaOpnMwNszyjvHVYyvQqC5bc2z6lvcUyHMrUXcr2xtldE5a5K+XljcfdnWs0v1451L5ttbLW366w8L0L2nfUKnObS3Lmuov6lrccru8EZ6yva9E8oVRtIW2r03XbqQ5KjmUjSuqRG/nKDt/W3+K2vUaOm8QU2nizRhfXNPFPV9MPo19TPeSMO+9ajrnk71PXKvn9E4ltOKHU2tYyjfv8AQr6mB0DsNcR3ylq37TSdx92tclJ31xqfs3CnqFrqdm280+6ZcWtXAqUyQPUR0I6gwVkrF1eg1uJaTMHp6l41p9vx9wRq7K+o8O6tbUKj2suG3VDztCo2dzUZsQMyBK9ioa/pN3TLrI3NeB0t3Y+kLzO49rsbj4ObVLmo+k2jJZTOXRnmwtK4isql3oN7bsZz1KjByDvcCHAfw/FbD+ULzUrt1tp+h3VarQcKb21qlOgB3E8xGFieKeA/KDxBotewsr7SLCjXkVTbPJruYfgF7o5R3kb5UjJXerL3iHh3EXF9a0FPR+GbgGrSPPdX9I++qDPI0kbNOCcjuWialqPEV+8jVteuKjd+V9cn+EgL2aw/9nfjKrNJl3p9FjDyg1KwIjw5Zwtgs/8A2VK1er53WOLrWnT3cLei58f96AuvHnx14cmSLTy+UC0tqFtMDs5BG5M+Cz/Dl3xfbaxQ9zNvXdqcctL0ejz1IJmOWDInvC+xdJ/9n/yU6E0O1K8vNXqNzyOqBjXetrVulvrHBnBNiafDvD1np7P0qTGgn1uyZWtvGV+MMYpM+y8k4G4B8vXENr5ziXXrLhiwqjLjpls+7eDuQAzsnxJBXovDvkc4J4Q1L8qarVde3Ryat8/z9zXd3x8EeDR7V1NV8qN4976NtXqOqOgRZ0+Z3/f2CxbtX4k1CkQx/wCTadQ9pzDz1nn/ABPOZ9QXJObqnevw2rS0cy9D4k45o6dp4trJzbKhHI1jAPPOHc1o96vLr11/qzy6sHW1Gp0JmpU8XHddihYULKp52q51asckuMk+srlc6tdOcXNIDsexeb5bW72nf9Pg1pjrXiGMoWjW3DaNCnzuyXuJnl9qytOiC9tNvvY69F2qVu2jRFMDtuySPsXbpUhTpl8Z2jvWHf4vbHBrjVc0dNyQsjbW7i5oIyMyuxb2gDSHQ57ncxH3LvENtWtEF9V5hrQJJJ2AA3WkQ8yEss6YdBfVqENY1okuPcO9bJoukfk5rrm75X31YQ7uotPwQftKaVpJtHtvryH3sQ1pyKA6j/e8VlXkHHRfTwYNfulyZcm+0Lvkg+J3UNJb4qjXEDGQpDgDhwIPRd+3M5JnZCMbz4KkknAACsI3O5VRE9wQZwRlOzBKT4wgmYMKXGAOsqJHcoccFwwUE80CFDoIT4M9VIEiDgoiB2vfbdFMFkEQ6VHg4QB171AAkwgkudEkJJxGCVMzjqkgj1KogwSQ7BHVQTEQJUg7tImUAMj+ComQBHLuoa7lluSCoDg4nBBCmYyMlAhzDLILO5MESNlAJ5ZYcd3crNMiQCgoMkNg4yrO97g+xTtzOiD0C4yevVBYuwJCoTzKQSVBAduCI6oE82OWCOqkHmPKcQkZgqHAk7oL7jARzII7WApBhu3sQPAAjdBQEMeS7AcrA5EESOis0Dn53CSVSo0hxLME9UFt8xlC2Yj2qrHOae0J9Ss1xLnFux70FO/E9ylpJxHtVo/tJBwd0E8xgYQcPCP5vq/7yrfY1bItb4R/N9X/AHlW+xq2Rc3h/dw95fbkREW7MREQY3Sfj/zup9yySxuk/H/ndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIg1vi7830j95UfscuX4UQuLi7+40j95UfscubJM7HwWOP3l/wCGs+zCJdBAH0pLpwIUBxDiHH2IJ5jGV0MzBfPwx0US4HMEDdqs7lOThwT4MEZB370Ek5kCB3KW7IciVAIAQC2ZnAUO2kZlOYhsSoAG5QQGxGJCiADPKBPVchyIaVXpG6CgcQSoeeoMK4aSNlUgnYIqD2jMCFWS0wFaCN/oVXAg46qSqHAF0woj2KW7gSocHc4jIUFeUTJBKryjaFyGYyqcpPeSgpyQU5A4EjK5Q1xJ5ThVcOVsxBOEHARjAiVxlg6brnAI3MwquZ1GJQcZEdMFcZaObA9S5oMZyuMtIOcSorhImQ7B6LhggHmEhdtzA4LhEDEIOi9rwez72VRgqzLjgnCyBaCYA33XE9j2e8A5O5eXpwO3zhcD+bnLm9OhXZLOYE5wuMiMHZR6cReVxlz5JPsV3h0zEjwUFxLYxK8jh84S6Crf2hxykY71AMEw3Kg1KuW4cP0u5BfzjsA7BSKwIgyuGXOHaMgdVPnKb+kQoOdryTE4XIXy2AV0Q/tnlMrkBc8AEEqLDsFwwC4NHirtq8o7+7x8CuqakQAeY/4guRjgwy5/9FNmmD17Qn3NR2p6cCy7b2nsGOc9/gftWJ07VG3lR1KqRRu6eCDif/PULdH1Wco7edwtZ1jQmapV9MtT6PetMtqjAee49x8VweI8NF43DpxZZry7TGB5I5CHjBaNgjqYgwFhdP1irb3P5N1dhoXdPDHHDX+PdlbGyo1xBIkHrC+XqaTqzrmervDolpbBLdlfzw5Ziei7zrcPBgQCuu62LRgFenmJddrjJnqrBocCC0Z6lVLak5CjnLB2huo9JLSBvPdIXRutOpXb/wC1pjeQ4YI9oXcdUc5vLGFZmXBowkWJiHDaXHE2mU209N4huWU6fvaVYl7fUu17q+KA+b7QtN1Vrd3GmyXeyJXIJBHN3dArMLQ+XDHgtoy3hl5dXSuuK7SrVY6/8nTX4/tH0JYRO2x/gsfW4t0ei+KXBGpSG839nc1XN5SOnajCz/NSe0yBzBxA8DP8VxGjT5iZxMqTeJ5iDoj5y1ynxU6pSa624c1USAAO0APpK7Q1jW62KehVxO3pFxAWcYxgmoGzjMqzXnkJ5Yd3GITqj4QvS1etbcWXwc195QsKZ+BRZzu+k4XSbwbSqVRW1K6ub6rM89d8wfAbBbpzPc7sjCpUbWqEgOgdwCkzMrrTD22mWNjR5adFrGg7Ad67TfP1HhrW+aYB74DMdy7HmHyPOQWjC7XIZABhoCveSXVZYtAl/anqVdtAhvKAABsSu2ASMCPvV203F2Gn7k0m3HTtyHcxAx71W5MyRjuK7gbTpUy5xHrJ2VbazutVqBtAeYoDeu8YHg0dfWvda9XDzM67y47d9apcC1taHna7z2QOg7yei2nTtKp2H9tVf568Ig1Iwwfot7h49Vy6fYW+n2xpWzCA7L3Oy958T9y7Dn5I5oIX08OGKxuzkvkm06hyEu9qqXmMhcYqViZcAWRuFHNzOmDAXZtjpcHlcM+xXaBzcw3XFJeZ6jZWZIOVXlyB5k4GOisC4mSBCpDXHcg96sJGH+xekW2CQJ7kZ3nZWwQqKzlCD/QqcxzCIUjtGR77qgq05kfQmHu3gjorEAbb9ykgEAxB7wgrLveuUQd4lXw6PguHVV7UQRBOZ70QLZAIEjqojMq3MQe49yq50nIgr0hJ6hJg8uzT1TmJ8EIEQ7AQSRPXtd6jfBwe9S2SMmCNlV0uaEABwIcPar82ZBwopk8oa7JHcg5ZICCpOd1Uknw8UMdxQbIJBJMEQFPTvChWbIGUDptlQJMjqmZlM56IJJ2YB2kY3tEuMqBgkTLkgtBBmSgF/aMYHchmJQQBO5TM838EDM9ykiN8FV5juAkk+KCWu5TBEqZPNIyFUA5+1WEgGIg7oOHhHNvq5/aVb7GrZVrXCH5tq37yrfY1bKubw/u4e8vtyIiLdmIiIMbpPx/53U+5ZJY3Sfj/AM7qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGt8Xfm+kfvKj9jlzZcT0jouDi7830n95UfscuWY3kj+IWOP3l/4az7MLTzGHCHDr3qDjbCsROfoKiZET7V0M1CZEER4q4kABwUZmHCR3qctxMg96AWkZGyqHDorCQMZUOb1hAII6KObBEKe1OTKZQWESquBDZjCt60Bhw7+iCjZDgQeyVYuDiYMR0UFvaJaOU7qocMhwglBPanmkSuMlzgSYwuTl5fFOUl3gpI4g07gQqw4DfELsDbKggDBEHuRYdeDHepDXHYQuUjldHwuiAO5pcT7FFcPMGAtLTPenK8jtEQuV3amN+9RGFRwubIwFxBpbJJwuyW9QFRwBEdDuoOF2+BgqpB5c5HeuXkGwEhVDCZx7EHA4cskCQqRzAdmF2SzGyqWKDq+bcDiQoG5kLsFh9vTKqWFTSuqaXN7zbquvVpvaYGV3yHN6pyh2DuenUqaXbEuaeXJgrh82QDD5WYqUQZluF1KtuwU+xIkqaXbocj4OcrihzjynDe4Lvmi4COXK4X0S0zleVdUsdy9R3KhBad+0F2ILmwQR4rgdTcWEh0A7lR6hDcjeZwYO6tkMOQ3uXC0ObJ2A3AG6vI5YiB4qSLtLhuRPeji7/tIB7guEYYSHgDxOEDg3PNzE/C6FRYWcGHDw5w/jKuKjQNo7xH/AJwuBwc8QAY7gVUtrfpCB39VJVXUNPstToCld02v5TzNeDD6Z/wn8Vh51DRWkVS69s27VWjttHiOizDgAJNMz+kuCpUfB81zDEYx/Fc2XFS8d2lLzC1jq1rdUw+3rNeD0nKyDazahIG4wR3LUrnSrWrVdXt67rK46vpbT/ibsVNLVNU0ykfTbX0ugzBuKJmB4jcL5eTBfHPbvDsi9bNuNKRMLhdbNeZj2ro2GvWGoMb6LeNn9Fxz6ll/OnlBI7J/RWXV83rU/B06lozoMrj8wGCBuu9zB3dHio825zj3KxMJ3dUMJaArhkQI9a7Ioxgo6jIA5uWO4SvWnnbrCjJ6DqnmCXSSYXYbTJJmT4rmZSMZORsU0bdR1sXDGAOh6qgYWmJnvK7/AJpzu/1qvo5nf2r1o26TqYDgYPsKsxgBn6F2hRbPa27lY0mt7TnZ6K6SZcAo9T1zAXIyhLeYkgeKsKrQCR06lYq61m2pVDTFcVH/AKDTKv8AZ5hlS2m3JElcBruNQU6TZJ27ljBdVbgEtwO5ZeytqtUCARzDPeFtTFNp7vM2iHYo2gLwbkiu4Z5Pgg/es7bdoCQI6DYD1BdSjZCn2jJEYhdynT2LXHC76UrRz2tMu35wioKRcQTmUkecyJhUkvAJjnGAe9S4jkHMC0O3IXRvbJyho99TcQf4Krpw6Yd39FDZB7JlqljXTO57jsvSSe+Ad18FJmJGT3KWAyYkE79y5GtLSZAXp5AXFnQ/cpyT2lAMO2XIMheoRQAt2OFcOccYhVdMbqWkkQqjkAEbYUe9EgKoqDDQYKkOiYVEkcxgmD3qAeyBGVQyB2e0EMgjM9x70FicbKCZbAKqSc4hRjCIuSXEJHfuqgnmMFWJPXC9Ig7ZGVEuIg/xSJ3VnAkZQJOxyq8xDiNwOiOBODspZPL2t0CSSXtMShjpgoMANBx3IQO7KCpkDvUAEDdSHy2Dko6e5BInvU5VGg96BxB70FxMqDJICiSdlIJ2lAw07S77VMEOLjlxVYh0jKncycIDpmQpkkSAqO7WFJBIHLj70E5mIgqQQBjChsyR1QgBkAlA7TpPTuVmbZ3PRSx3Yg5hRkP5+kYCDh4R/N9X/eVb7GrZVrXCGbbVj+0q32NWyrm8P7uHvL7ciIi3ZiIiDG6T8f8AndT7lkljdJ+P/O6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERBrfF2LfSD+0qP2OXIdyehXFxf+baT+8qP2OXLnY4WOP3l/4az7MAxsZSD77orAGYkKOVzWlp2K6GaQCMkyEGG4yFDZaI3Ct0kdeiCsgbIN8nBUOE7CFMeKCREKDhREOncKZA2PMEESqk82DhWGCSXYPRRHMe0YPegBxiHbhTPWAojeR/VRyukOGI6ILtImd53CscneR3dyqG82MetQ6esiOqC27SBuq7tnuwq8vUTlWnwhBPK7YwW9CqcrmkgGe9WPhPqUEERB9nego6AMdVEDoVySJ71HLOUWHH7ZVYzPeubkHqUcoMwUVwx3KwbA8VYthTjuQcQbJVSzJlckHoY8VGeWCPavI44AyVTcnC5uXvhSQCMCE0Oq5pOxVfRw6DMkHC7PLOAoLHAhTQ4jk8lQeowuKqxrCMSV2+UnDsrgfTdkbt/iFNK6zqfhnquN9AOmN12mteO0RzN6FHUmuEgkFTS7YypazsMdQuJ9oGgAHHcsv5oyAQqvoDc7KTCxLBeYdkgdVxPt3OyBzBZt9BpPd4qBbCeYER3d686ettddavDiIDg3I8FBplx5sQs7UteYHEFdd1kdwIHcvOl2wzqTi0nskB26o4O5SGPLR3tO6ytXTy/wDSHc0bLo19Pqua4GebvC8zCxLGPJDoa7/xwuo4P84Sawmdi6V3n6NUJkh3N18F16mkVAIa0nxIWcxL3GnEW/Ccxh8ThderXb0ruGILWmAu0dMa2niQ7uldV1lVEwOz3ELOXuGEuqNhXJqPogVDs+n/AGZHiY39q6B1nVtOcG2WpuqMb8Cu3m/isvc2NRwMbLD1dIqPJPNA6LlyY625htS0xxLJWvlCq0XAappwgf8AWUjPthbHZcccO3EH09tJ5+DVHKvO6vD9Zz+oHeunccLuce1zDxhc0+G17MtfMieXtVLXdPrt7NzRcPB65hqFu/3tRrvavnurwjeNf/ZVqzYyA15C5aPDmvTNLWLxp7hUJU8m/wA06qvoIXlEHMexWdf0R70iV4DU0fitnLy69fyMcoelPh/iWsYfrmouDhmakQrGLJ84Oqr3WpqlJkl9RjPXhY+44q0q1bNXUrWn3zVE/avJaPAGoXUVri7uqgd1fUcVm7DyZtbVZ5235ubIeWytIwWnmXmb1hslbyj6C2qWW1epd1B8GjTJH0nC4DxpqF3LLHTG0Qfh3Dsj2ALv2Pk9ZTMPYGAAkOb+C2Oz4TtaRALS4iDstq+GlnOWGlhmt6i7kubqo7m+C3stH0dFn9N4Xe0h3mvNiIOIDvUtztdHo0zzCkPoWUp0RHabnu7l018PplOVhbLRKNNh5h2gspRaxjQ1rQDthdltNoJdyH6VdrGtBhokZXTGPTGb7cBktDJyfBSyhUA2K7DXu6QD3wrS4jJXvoeZs4yyCBULWqwDWPgEPlHNDwAeiFpacBeul52h7OZn9m+O1srnuOCkAgEYIUY5smSVYg2sSWu5sQrAh4Ocqpbid/BV7LD2DM9O5XSLkgxMgqS7In6VE83WCqmQTkZ6Ko5OYxJHZUyQMNVGlwYYg+Chrp7Id/RUXLjHaEg7FOaBO47+5Ru2D3qOQjPMIQcoA5ZaZHeqFvNsYJ6d6rzFpHLkHouQFpaeUggdT0RFQcRP9FECd1bl5xLffD+IVB1P8O5ekXkDrCnJzGFTGxweisCQEAdo+pST0hVMbHKbCD170BwkTOeiq0uDjO6l0yMYVgO2eYTj2D1oERsMqCSTOxUnpH8VBzlA+EcQVBHM0A4hTuPFDnqgAmMqCEBExKOOcHogNjMbocKBBIzkhWIIEb+KCGmUJwq5aJKuBzDOyBgkKYMyNgoAA3OFbZpI2QOYQSBB2UdB1UTiDspiOuEFs8pRriWlsdlQDAPipEwUHDwh+batH6yrfY1bKta4Q/NtW/eVb7GrZVzeH93D3l9uRERbsxERBjdJ+P8Azup9yySxuk/H/ndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIg1ri/wDNtJ/eVH7HLm5ht0XDxf8Am2k/vKj9jleO4yVjj95f+Gs+zC+xh2SeqscDJmVWSMEyDspB5uwffLoZqgcoIHVST1ByomDnpsoOPagEnefoQQTlRgCAMqd4xkIJEdxA7lADSVYmRCr4kwUBzAO0FXJAPVW5xtupwAMxKCAT3j1K0SYDThRAa6dvFWJHNJ370Ede5R1hxH0Kes7jvQwW8x2QDvAHtUF3LjdN4aVMDY7oI7soWjfqoJzKZOJQU/6wRM/b61ae0R3GIVxI6jKjBME4lBBHd13SRtAVyIx8FV5MyDy+PcgiPVBUlsYOYQOHNDgQft8VdwBQcMCZVHNnlJ2XNymTCiMZRVeQDMj6FUtI64KvJ2UgS2CvKqBgjeFXll2yuQBgpJDojCDiIA6me5QAInouYsa7IlVIGxQcXvTIEhQaTXdoHK5w0RAiPFOXlyI9iDh5Q4QWwqmiBg5adlzw0mTKECMbBRYdQ0AD2hITzTWY6FdojEKvm5lQ26b6RLgCBy9PBR5ksMbhd3k5gBEqopkdMJo26brUF0hsyq+i9okNgLIhsZHVSKWCZyppdsY62b8JolUNkz3vL4LJs5XSC0A+KFsD3oOdwnSbYV+nW7nlpp5Gy679OoOBihEFZ80mOdMkFULD6ivM0h66tNZdols+SaRlcZ0C1gjze62nzbd+qFgPRefLheuWqfkC3LY83sF1zw/Tl39hI8VuRpiD39FHLzMIiHBPKg65ajT4ZokBr6Ug7rsN4aoMMtpMA9S2nk7O2ysWEt3gdykYanXLXmaDQDM02cvqVhodvTdPm2/Qs+BsCMQp5AQAF78qDrljKGmUmOnkb6oXcbaNEhwBnaF2feq4yCT3KxSHnqlxCmwQQMDChzf7SWiBC5HEBwBwSkc0Q6HfavWnnYDIzujY5ezjvCgNBJkweoUxtHvUFjEJyjocqAO9SICqqn32N1IkYcZUGZSJk7ILABxVjPKQVVhxkKSenRElUT1UkCAdimYz7FLiAIO6IE7R77vUEkmSYI/ihIjwUgAhUVMN2G+6nlByNx1UY5uXY9Cp5cQSWn7UBvLynKk4GB7RujQA3mCsMgkCJQAeh2UgSI3HiqYBnb1rkaZQQRnaCgb2g4ZPUd6u73uVEQJnBwURPQ8p9ncoLZOD2v4KIgmFbmBbkr0ipOe49ynmzBKkiTKo5vVBIxOcqHER2lBMR3qRLs8qCTkb57lLZjBjwUODQ/xjClsz2hnvQQceKicRMDuVn7czQqsaH++wUEwA043UOOcBXMABo6KIkZMIIjmGVHJlSDBhTk4BQV5RKTGTsphpw7BQycII5Qe0DgqYBGUGNwrGJ2QMRkoIOY9iqQkgQTgoLcsHIlVc4ThWkCTJKoS3clAnPiVYPEFpMKGgEA+KFrS4yYKCnCH5rq37yrfY1bKta4Q/NtW/eVb7GrZVzeH93D3l9uRERbsxERBjdJ+P/O6n3LJLG6T8f+d1PuWSUrws8iIiqCIiAiIgIiIMbq3xD53T+9ZJY3VviHzun96ySkcys8CIiqCIiDWuL/zbSf3lR+xy5geX3pHqXDxfm20kftKj9jly8sbGfuWOP3l/4az7MJDnTtvuoIExuO9WECJyUmDkYXQzU5m7DfvUmIHeEOTgShES5Ab4qTvl26iBAyoiXHMFBYDuIVXHqVb2ZUEAiT0QVgbkxOys0kuA6qMGCSoAAdM46IOV0A5/gqjIxCAwYKkwCI3QVaRkFWAbybqDDTnZMEdYQDET070kRtJ6wkSeXv6qHNjs7Ed3VAIDh2foUzADXHlPQ9PagiJ2HehAduMHogcxiCCgjcDPih7JAyB3qT4fSgrIJ3ypMxkSoPiIPRQ0OmTsguYI5Zn7lIMYP0qogAd6lxaRkIIcTuMlVM7nZSIBAk+BUxJQUmDjKsCInvUS2CpjMyiodgbz4qoJ5tyrQMdyt2RnKKrIgmCqkgiS1WJByOn8VMjfqcwoiA1sSDnuUAyY2Vx4tQgAKKqQQcZCqeX4JyrNdnwRwBGEBoPU5TBMEZ71AJnvUgtPSEAtcPV3qriDAdg/pDZWcYdgyFEgiPpCCOy3Z3MO8qR2wS0z4qvLyjOykQMsMIKnJgjI6IQ2Ozg7wrEcxnqoBEkxlBRwkbIIVsdFBaG5/ggggRDT7VXEHaVyM5XCRjwVYzMZ7u5R6cbmqQwl09FyDJ2VuXG8IOIt7IzkJ78ieivjqMqvL2y2ZlBRwLZJBOYV2tAbjKsRDu1kJgDBhUVc0cwIPRA3eN1YASICg++IhEVAGxEnuVuWTjZRHNEj2rk5Y27kRXlxKqDHRcmQ2QZCo4tIkmAUWFQTEzhWPve4qIJPMfoU7ISkxAwoOQYSRE9EHKTjdEQw47SvInBmVUjOVIMHCAceMqhd8HeFcuzIG/RQYLQeqCMRBSSBA2QCSQBM9FDmua8Abd/cgsZJ2lCCQSJjvU7EZgq0TlBVpk5OVbcADCch3jCnwIQcYyTIyFYEbBJJM7jvUuAMEboL8zXNgiCoA7JHwe5CSCJ6qWkEOaD/AARDcKOXqB7EAI5VOYXpDxlQe+VDjJwmJx3IHK05mQrUwB1UCIBhWcWtIx7EDBe7EqJgFvvgUiXYMA9VEcpwMevdBM5gZHehgKHCD2FMgt8UA7Ccfep3EbKHYAjMKObmjMNQVMl0fxUtg4n2qRGxGVMDqEEEcxy3lPTxQdrLjBCt2jvso3OfYgTPRQ453UxJM4UbdIQSCRmJUYd1QFp3n2KYIEhAIxGyoRDYhXGRtnuVXt2ygq1/KA0iO5cm25VRGARMICZhBXhD821b95VvsatlWtcIfm2rfvKt9jVsq5vD+7h7y+3IiIt2YiIgxuk/H/ndT7lkljdJ+P8Azup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQa3xcYt9IP7So/Y5cvvthC4eLvzfSJ/WVH7HLnExIPqWOP3l/4az7MIdED+CgmYBViZ3GFUHEtC6Ga0j4J2USNuqrPayrmYiZ9iBgmFBAxjKA9SEjuAgoBaTmcpBIgCPWgABg7oZB6kdyBykYESjmuidlIeCY5SFMk+++lBxcwBA3KvOe9Ry78u6sMCIz1QIEd6jmIgdEMg9kY6qZkQcoIJgx0SQdxnvCiCCOrVYTAA973oKuktjopwQBzZV+WQqmoPekRGEFpluRK4g8c0HZcgOIHRVIDhhAdiJQmBnZSMbhQcnuQQDORG6mZMbeKqcOwE5iDkexBblncoJ5gCQCpJOMiOoCgw8SR7UFi1o6KroDsDCsHdrlduqOIBiJQJEqe7OFGJUu2hFRImdwpkE7KuJgBXEboiNio3HcpdgqpIiIyo9IOHDCkbJkjaFLiA4AZxuoIjwQgHorB2QFDgScEIKO7HiqxmR1V56KDLSJEoLA8wghSWTJEexRncb9Qol4gjZBBMGFUuaDB3ViOcyMKvmyTByECQMxKmOaTEqzWCYGys0BqDiyNgoPMMkb9QuaJJM4VSBy7KCrWkAqQQcQQfFSZ5o2HeoLT12VFXNgeKggc4Ozu5XkyGO99v61Ygd4IKDiJMkEfSpJDQIyrFnKYPTqqg7iMII5siAVJ2MHKCeaWqQCAT3oIEcsFOm6q6ObCvAwgpME9AnIH0uYDYqYBJBGCrMBbE9ECOz4qBvlHYd3qAScEQgPBbmZCgAF0AZTLRDgpAIG+UEyB74IezkCZ2UOlwghQCWHld707HuQTIwYyowGzGO9Wc0bjYqmQ7BQWByCOvVTBMicfaoABkd/RSAQYOyCCJH3rka0EQSqua6IbnwRs96AHw8tJ9Skg7lTDXkyI6qnMWb7IJloxt4KxjuUNPeParHMzuV6QIPMMCUPvvFPuQHqRM7IiAMY3CiSpmSI9qkw44EIKwOWFLhgQE5XAwArbb7oKkkRIkKYBMgyVUAzzAwfpQSHetALukZ7lMjIgk93UKxicGFUvLpa4DulBJcG7gwdoUS0mIIUggiHBCcyRIQVcAQXCQVGCyAIXJLdnYCh9MhoO6CGmTBCmREFcYceqBwJjljxQcwJ2OyjByqgFuTlWxucyggmD3+tD2jB3VsHZQRiQM96CnKWug7KzeUg9nZTvjdQ4ER3IHUkdFGCJQiMtGCpb3xhAiRjv7k298EkgmCd1AkjKCnCH5tq37yrfY1bKta4Q/NtW/eVb7GrZVzeH93D3l9uRERbsxERBjdJ+P8Azup9yySxuk/H/ndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIg1vi7830j95UfscuYjG64OL/AM20n95UfscucSdwscfvL/w1n2YQM74hVdhpjKue/ookEGBMldDNAHeZVsYEEqowNlYbgHJ9aCslg71IOM4lIhxKbgyMoHcVMgZzKqYJ7k5jGIcUFiCRIgqQRy+IVJO8QnMTEILDtA9FGR4lMypMygiZwMJzGIKgASrOiOiCObA7PrUiQ2OiqDPdCtmUDnIMQqmT0R5dzHGAgMiNkExvJKgFwdJEBSHd+yOyMoLFwjGVG/guPLdyrcxgRugsDMSMqJE5EeKc56jKjmkxyoIwDMfQrYAMyfAKpJBgQQe9SNiSgmZwR6kEkGVWScqZMwgjI9906qQ4DJyCrugtPeqgPjmZ9HegmI2VZ5cEEk93RSHDPNg9ygyGS2TKggRBIBJTtQXGPBSDDcE+1Q50Nloz4qKkTyz/AOShBNPoD1CsC3zYIO/ekkjx+1U2o0Fw5uncpJO0AgK8gNH2qronpKKqHMO0oXcphwkdFWI+DPtST3fSoLAgjG6hhPNjOfoUNG5U8pg9O6EB5Af2RIUg53QDEECQqkAILtI55UuwcZHcqgDlEbpkD70VyNDTLh0GxVZGyqHk4cPahOZHcgkmTBUb9cKCTAhRPhCIGMTtuCjXS44yFJILR9irlrpGyDkdkRsVxEkDb1q/MYAI9qh7SWgtQUG8jZWmASoDZggZG6sHGT4oKgZ7UAhXfEg7EdVxuycNAHcVILwJ980IJBDhnEpJByJUEGAQPYgMe+agAk7qZBaQ7CrJ5u9TmIICByhrfDxTqCUE9MqHOIPZAP2oJmTjfuUkgiIn7FAJJmIIUjPSD3IImHf4T07lL2YBG6naMTO/ggw+CcIKzgCMhWa4OEHdC0GYMHvKoZBhBJBlWaSSIHqVeYYEyrQNx16KiQZaehCkgVGAHBVZ7WwjuVg7siRMnZVEbYjwAVlMAzOJ271GQJAkIipJJ3UEmRy++7u9SXSYER4KYgxsO9A2BI37kGfAqDl2THipCCxd2lU59amQPWqmS6O5A+1JkwpEHx8VE9ogAQglsTyke1QSGuiJaeoVhnIKhwIkxg/wQQDJUxJgHCBoG6kiQIwQgt75pa4KvNiIkKXAlpI3QQQJwgqWD3xOFGe5Wc4tw0SN0HLyggyT07kEfBQbRupJIHL/ABCgSB4oJzy4GVXmJEISXCMgpmEFh70qHAwIKgOcAoJcQAgQQDymE2gg56qVMAIAIAmELhOOqjAnO6fB/ogpwh+bat+8q32NWyrWuEPzXVv3jW+xq2Vc3h/dw95fbkREW7MREQY3Sfj/AM7qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiINa4u/N9J/eVH7HLsEkQQF1+L/zbSf3lR+xy5yQAMLHH7y/8NZ9mAnmEEbqGiJ6AKZkyFGSIOx3XQzJicINpO8KvaAhp9ikB052QSHEjJlMxlWmNh9CrzAoBEnuUkGNxIUcxkDorE4jvQccmSNjG6kQY7+pVgRGd1AiEEjJQQVWROFYCe0d0EH+Cjp4Ie5DgDCAAQMGR3ID2ipGchQ0TJJBygtyiM79VQCTB6K5EieipnmgIAEBxOe5A50BILd+qgNIJKCSRzAwpJGTshBkFPDvQAOySTM9VEy0N/iomAgHTr1QAZxEfepHNzGR7EbzBWlw2IQV5SOsBWG3aQEuEnCRMHr3ILEAhV2HcVJnuTMZQQctPNgdyAwwcoiUPf3qAehwoJMbRBhVI6K0yZUyBndNK43SAABKkOkZ3Ch0nIwrNJOIQ0Ey2BuojwSJKdqc7IqM96GTkDZDJwSgJPZO46qCGk83MFftA74VevirgY2yggnEqWuBGQoyHYyVENkjZ3cgHHTBTmIIB27lILgcgOCEAHbdF2lpmQRuogZaFJE4VQQMc0/egCQVJyMtUEeBCAkDcwiIEDcYUGebGysDG6gx8FBDt5AUtJwDsFAJmAMoT1nKDkDRkz7VQ+qFAJc6Z5T4qxdiHdEFBzE5AIVg0TtHgqCebGyvMuyMoAYwEkEjwQt5uuVQktJcTjaFacSCJQRB2EByE9+CpJLhJCg5ADs90IKgGMjPgrSThwHN3pkwWmOVWMPHO0Z7kFdi2B0Uky4Yh32qDlu5lQTzEc3vhsgvOJAydwhI2I/ooYZcQffDYqcl+ffdfFUQ0wYOQeqioCQO8DdWhuxGEkg9r2FNJtw9rEjs9yu3mEQQQru52yWRPVVZhvaCG0jOdpVhhoH8VJGACMKswd5jqqiwBGxlh6dQpA5RzA4PRQAeadwpLiBzNxPegggjuA6jvUhvMJQScbQocXgyNu5Ae2O13dFBIjspUdzU4b75Q0FtPJlyCDJgDLlZoMmclVYHDO6tzEHOJQQC6fFDzDYjCkyAFbuQUaZBnDkBcabubEKSzmd3IRHZJgoImRnHgrAZmVQgh5LsepTJAxlBYyTM5HRBvlQcjmOO5TkgIHXCrDmukDP2qXH4MJkILOLTjbvCpMAycKzmDmBG6h3K7sgb7hBEmYjKEQ3lCs5vJBJwcKpJPZHsKBBMKak8sAKgJzlXALgM5CCG56qSD3KsGZBz3KWzE5mUEk9jbKh5PKOUbK5DifBRyu5ThBxcIZttWJ/WVb7GrZVrXCH5tq37yrfY1bKubw/u4e8vtyIiLdmIiIMbpPx/53U+5ZJY3Sfj/wA7qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGtcX4ttJ/eVH7HLlyQPFcXF+bbSR+0qP2OV4MYMFvRY4/eX/hrPswtnng4PRWx13VcO365JUgGI3K6GYMvwpAMSVAECZg9ySYwfZ3IGUE7SowBgqW+CCNyFYqDv9iS6YgBBAxmVJyZJ9iEwpycwgoTOThTuJ2AU4cZEGFOw9fRBBBcJQEtd2shCe0AhbzGJIQTDgebodlAc3ICloJaWHdVDQT3FAPMO1PhCqAQQZ3U7O70IzhBBDgQSZCuSAPWoAIHLud4VTg824KC0HvwozjKkGRPTuUQIkIGRg5yrDeQFABB7wp6mDt3IBa5Q7AgqQSOqhzgXQgAEkHYdFJBgyMBAXYxLe5Wa4RCCrTIlTLiNsKTGWHEqgBAI3QCfBOsofAqoJDszAygkGHKTPcqjBOPFSCTseaco9K5GCrgeKq7JgiFHWBJhQXM9QokqAXbk470J75A70EOnEhSPfdyGTEnbuUjtEjqEEnxUyOhVBPXMKZkBAM7qC4xO4Ku3uESkgdABsoKDA5Tkd6tHZwMIAPegSO9TMCAfYgiTLQVUjoe9WBDgRs4JgsAiT1QDMOIyFDcYPVCSaYDTGUPZiRPqQQZmCo9SOMu74UiIEBBRwJbEwmT2TghcoBa6d5VXNPMCcSrpNqgDI2d0UtOIepIggFsnv7lXlPKCMhFBgnlPsVp5hgQe9QRmZ5fFAQTBMHp4qBIiKgVeXlAG7TsrEl3Zfg9Co7bMOMhBABEgGIwpcOzlRnfokObtkd/cqLASBGI3VTh3M36FO3qUidjgJoQ6CeYDP8ABCJeHDCObA72qxbhon2poQRLu5SfFVe4mB3Kd3AHEoJyTPwlLQBvt1UZkiPYp5icx4Kos3Yt6j+IVDIJxg7KO07IMEK4MjPXdEASRAyqyAf0XKoDwfarGDh3XqgkBzXDOCEJO0y1QHQOR3sKnpyhBA5gQ3m7K5Ce/dUCgyT3IL8kS5SXBwHSFXmcBE4UHs9oGfBBDiSDJ69EA2BQOBPMBgq04KCN8KzSIz6lXBbChoJ7JOEFyYdLcwqg87pQDJASCT2cRuglrvgkYChw67KWgPBEZPVOUxyxMdUFBzEGVMHlkK28BUEtmPaEFu6VMSIUANidwpmMAygkTMo4S0kYd0UHbdV6YygqC81C45EQQruaAIacd6jmj1KpkgEygkTG6s2RnvVRJGSQO+EMkNBdmceKCzt5OAnTl6Kg5icuEjvVwc9o5QWG3SVJJA8FQyXDcHYHvUyZwJQcXCObfVj+0q32NWyrWuEfzfV/3lW+xq2Vc3h/dw95fbkREW7MREQY3Sfj/wA7qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiINb4u/N9I/eVH7HK5jmJA9qpxd+b6R+8qP2OXJEOKxx+8v/DWfZgbI3UxBlphMTE7KIgT1XQzWicTlQQYSDIM5TmMSHSCggMEYwgaRkAQVJk9ZCAAIHTlBVQCDvsrR16qvQzhBIhxJj+quwAdT6lxjskFWDx5xBUQKh3Cs7LgT0VqgBDXbqpDgc7IAJFQc3chjmkoTkHeUcYAQSQHCRgo3tNBOHQqg9qZVnNJG/aGQgrk9VBzjuV+UOHNsYyFTB2KAB9KCJndSZiB7U5QcNwdygiImMIInGEbA2UDvOyC24yUMRkJyjeZUHwKCBG0kyp5SNhPrVhykYdlRykGJlBUAyCOnRXaM9xURmZhWgl3ZiesoJJncbKpHanorHONlQ4IQQTMQojt+pSJOUzuEE8sT9Kpzbnb1INzJ3SG82CUVZuGzzYKiADgypHKWmTsojt9kYKG1tsjIUczWjaW9ynaQ0we5Rg5aBHUKGxwmC047lDJLjnKkANdI2KET2m4IVNnL2/FRHMQ5WaSTzHcbhHYDiOohDaGul5gH1q0kDtdpVbLGhspmc5KmlVcHkhzDy/euQPc5riGgEKkwcqw/SG6CTJE48VQCBuoJAyBJ7kmeuO5QTEZBygPdukQfBWDZ2V0m1IMkhIjAV4gRKDs++bPcmjY0ub1B8EcQ90Ecrh071DhnG6gh2HEZHVVFnTzbqo7MkZB3CB05O6CWkkZB3U0u0ERgmWqC2RnPcpdIOMtTIAcPe9QmjYCCIdkhQ9xEB2R4KeWM7A9UjAnLehTRtUghwkRPUKwBDQJkK2w5TsUgACCqbVADWkdPsTpjZS7EZiUcHARywENocexv2VXtADOFJALY3aUIIa0Qin/mVaYEFRgYQyGoGcGfUgMyScqTGEhoyiDW5luO9TjnB2PU96nHLJOTtCgkcoDgCiD2SJadlVmWkOyuRh+CVVzeUEhAyMcoj7E39fejXAuLTuP4qJBMCUEmRuokA9rZPDqhAOSgkgx76QoG0KQ3Eg4Ubz3hAEAoSRhOXrOUDZ3KCYkeKZHco5d5Oyr12yg5BPRRByQcj+CNd02KgEcxA9qCWkESBDuqcwcY5shRBPaByN1PLjnG6CzZIBJzGVAgzO/RRBjnbuNwk82RghBEQd48FaMlVBnJ3Uh25QGgxESqgDzgaCW+CkOEmCVJjDuoQQQQDmTKgAhsAQVJJIklI6lAY3ln7EMF0ifUgGdzzqRJdJwUEQ0jbtDqq8siAcz1XIR2oGyjlaN9kEevdXBIUBgSBt1QcXCP5vq/7yrfY1bKta4Q/NtW/eVb7GrZVzeH93D3l9uRERbsxERBjdJ+P/O6n3LJLG6T8f8AndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIg1ri7820n95UfscuU4O+/8Vx8Xf3GkfvKj9jlywHE/wAFjj95f+Gs+zCA0TJ2CESZ+Ep8EZluTldDNXldu7foFA5gdsLlBkQcqjiRj/yUBvKNsqcEb4VAR0V+mDkoA9eFBAgzspAAGVBHZkoKjJjokZ8OqDCkZHcg5GACMy1HCXRuFRpg+CsDE+KCBAdyHKktxjtfcq4c7P0qxMHdBUAAq3MQIO6kQczso+F4oKe+MzyuCCC7aCrFoIPeogEx1QRPajlI8VIIc6AUnshoMKcAYQSWgeBVHYEHqrFxiVXxlBMARyuEKpiciVblAOBI70iDvIQQciFaDO+U5WuPvsKC1xl1MyR0KCMEwXIB1BVQ5rzyuHLU7u9WaCCQRhBPMeuVVxJ8FLmGCW5lJjc5HRAjG/tCZAkDCqDlz2zHUK4fzU+yNuiCACSCInxU80ucCMt3hRIczuTbDTnqgguB2A5SkcsA5BUxHRJ7MoBDhLt1MNLg4FRzHl2yqtETOEFngxmI71UAkDKvHZx2gq4juCCrgQ7nnPeuQGY7iqOgROxCqAQZ37kF3ZcgaS7cT4qp38VPKDmcoqeWCTIKt74TICqeUiDuFGJiUNoiTk5UgBsNQt6jJTds/C7lBcnKj2oNuY4UOPQKosSN5Ve/KqMiVYAnwQRMYKsDHvnYOygNypjvQQ8AHm6qRBEjdREDtKYLTzASgkAAyhDXKC0ES0wqiXZGCEEjmY7liWFSRyYnBUtc14g4OxCEwQ12WnYoBaQJGWn+CqGDtcu4UtdHZJgKCQSeUx3oLNLXCevco2G8g7quwI6lIDQACglwBaQMiVEjChwiXDZWnEnZFRADxndWIkTEhR2ZBBlX96PBBxiA6clqsXQ0uABHcpMnLVBxGAAd0RAJDJDZnopERgTjKkjMt6qC0gczTkdO9A5A4c0+1WaQ5pYffd3eqgjJHtCESQ8dEFCOV0AyO7qFZuQrEB7A5plw+lUGTBEO7kFtjnKGBG4QyMjISQB3oJIjY/QqnxUyIlVJE+CCXRCjbHQjdT2YCmAXiUFYhu0hOYcoI2Vp5ebBIVByxJEILfDAKr8I9/epmGTv4qcEH1ILN2gOCg4yB6woAkBwClplxBEDvQTAA5mukFQ4cgDh1/gpBIHKRgqoczZ5wEAtA7SgkEYOFeBktOFWAQgqIwrkY3C4+blB5hEKwyA7p3ILGHBrR7VAHac0EFGxz82wP8FZggvgTPVBSDIEK5/RGVAwR1IQTzEwgkASp7M5/iomTnZT07wgcoJMFVJIHvZCsACSdlVxIxv96Dj4Q/NtW/eVb7GrZVrXB/5rq37xrfY1bKubw/u4e8vtyIiLdmIiIMbpPx/53U+5ZJY3Sfj/AM7qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGtcYfmuk/vGj9jlysgNBOSuLi7830n95UfscuV0gSNljj95f+Gs+zC0gvI/iodg7b9yNOIOysIOF0M0fB/xKIBBBUPku7OCFYAEEnZBxg9rlKvDZlshIluduhUAxv8AQgkEQc5Qk8qYPaAICgvxtIQMEJOEEBs7ykAQUEgE9MqzmhwHQhVDh3FS0BwMygqB1CCCcqW78p9imAWkHdAjoFIiPFVkAcpU9k42KCAc8vwgolux371MA74IVXASJCA8wBhOXIBOSuSJBMbKgc3l/wAUoDpy0iCOqiREfTKsQXGTgBHBs823ggicYwO5VJBMxgdFYkcocRB7lDhzgEAg+KCzWAiWGPBCJ2dDh0CNGYd2XKrxyuDgMHqgksa50vI9qntcx5hjvRrqdQcrt1U/2T4cSWdPBBIADsEqoAJIGVJAJluVDQQUEhpYOyQR3IQ6OfbwCsC0bYKbSQfWggQ5p71AaDsYKjAdzjZWgEYygEtOM4wUIAEA4UTMEpLd27dUAgwM48EOB2shRInspzAIBEmGmVI7UtcIhVgH3uD1CgPOzsnwQS7DcifBCIMgYVgZzCGOQxugrAkxt4qJgCOqsXNxJhOz0yEEloOVUgb9VeMHlyqAtIwcoJmdx9CjE8ww5SMK0tgczYhBVrpfJVnBp7iobGYBjqge0TjCCAyXYdtupMc0Fw9inIILYM7pAmYhBTAKSAVbB3KAAbZCCpzJGR4qWkjM/SpIYThyR0PTqguAIP8AGFxnsugmMK/OGvBCh3KCTuDlBAHNDmj1lDklrtjt4KGkN6mCoLpiehQIBEdYVcbRBV+zJjqqg80yCEFgcGR6lUOE5CkbZ3+1W5HboIkdycva7wp5hHKU23QRyhroGQpceUDuQEZ6eCqDG+QeiC0gZ6KCBiUloPgUMHxQSHNG+EOXGDBVZzEYVhIJjKBA5iQcxsrMIiCYQnMhseKo6C0Z9qCSeSoTEtKlwEc4+nqjSHMDeoT3p7WyCvvhIHrCQIkD2KxhsVG7KTiXAIOORuCPEFWAHLO4VQA4yBDlJgeEbhBDh+iEBIeJGFaRgjZCWgyTgoI58uI2Uk9mcJ2SJBhVxEHogGOWeiNh5kH1qMd0gq7QG/4QglgLZEz4KjnAO5TKsOzkAlyNjJJIKAMtlziR4KvJiDkFSO5px1VgS0TuzqggCBCcoOJhJG/TomDmEFXDmlpEjvU8jgBAwpJaPfKC6Gy047kFjHNA3UAhtQgjIU4w8dVAku53exAaO04nBPRQ4gk4hCe1KRJBIQJkQVZpGyiAhgD1oJEScqDyjEyVB2VQROyCOEPzbVv3lW+xq2Va1wh+bat+8q32NWyrm8P7uHvL7ciIi3ZiIiDG6T8f+d1PuWSWN0n4/wDO6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERBrXF/5tpP7yo/Y5c0gQHDK4eL8W2kn9pUfscuYNgku67LHH7y/8NZ9mBwMdndQHFmHbqQ/lI5hnpCObzM6SuhmtIiOpXHzQ4g7lXY7PK8ZGxClsRkAnvQIDWy44VdzBHqKGo3n5DhDiMyCgk7DmcQe5ULgR2N+oUlzm7we5RE5iD4ILSSzst7SiZjm98EEgyVYgEyeqACe6Cpgd5Dj0UECYO3eomNzIQWO8xnokychU5s5whJBnogsd8qkkYwr4O6qPEILTDZiUEFhc47KGuEGUb72SMdyBLnMA2hIbygDDlPMCOTI8VWZJZtHVBYElpnoqGS1QcSpBmACge/bGxVsuHK53aGxUeIGQhdI5gIIQTJcAHjtDqo7QfynLVE8zZPvlLXMIIeIKCC0Acw2UtcC2DknvVfeEEdpvcpAa4/onogmGtwQQVEg5nKkSDD8+KGHetBHZPZeM9FIcWiOvVQDHZeN9inXlI9qAMHbCntNIJyD3KpMT1Cs5plhBkIIJGMQpgjopkTDxA6FTBbsZCCnK07FDPNMAgdOquS2cgBV3OTB6FBUcpM5/BSWsO0g+Cs4REEcw/iuMEh0HcoLDlAIklQSARBx3q3NBw2YVOYc0hvZ6hA5iHQ5oLe9WIEzGD3KOUtBjtN3ClpMQdiggkCBJH3pzNce2OXpIQCQQVIBa0sLp8UAgwB3bFXAMdHeKoJ2dn1KTEQ3soIIIET1VTIaez7VbmJwRsokZwgNcBDSN1LmP5+yZCkBsSRJUcsu5uYgdyCsTvhILT4IS9hk9pqkuBExAQRyh2NpUw6mO2ZAQAEwCpkwQXT0QC5hERujZDYIx0UcwDhICk8wfJy0hBHRzSMjZQDBjquQQ4CcELieIdAQWAkwd+igiJEwVaOZg7+9Qe1Ij2oIzLSVbmfJ7kMuiIwgHNmEEF0x2YhQ93ZEb9ykQTBEFWc13SMIKAF7QW571bJwlNoc4kDlI6K5w4hwk+CCkgjaFAAbsZU4MACCo2PK5uEB0iCrDLtj7FAPLIiQhJ5pa7HdCCTAfyyYVSRyw3op5wKkOHZ70kfBCCDzNYHj2rlMOpc0KsnljcdVBaOTsukIIDg1uRhW96MGQVAgN5XCQqsJMgiAgscgRhVdMyBhTMmFHeCSgSCJHtQuBIgYU5EEBIE8wEeCCC4f0UE9ysIPTdPBvVBVz+XYSVA7Rnc+Ks6AJmT3KWNkScFBEN9RQSJB+lCYMEe1JM5QRscoCZk/QpBA98kt3nKC2Ike0KOzOJBUugNDm7zkKJG+EEkkiC0QqQ0bAx1UmQ4ZwmwJ6lALg4BrR2VZ8EBUnaBCOIiQggb52VyRIjCpuMKwgAkiUEFxCSSJTxOymRMRhBBOYTszBUnEYmEBiJAQU4Q/NtW/eVb7GrZVrXCH5tq37yrfY1bKubw/u4e8vtyIiLdmIiIMbpPx/wCd1PuWSWN0n4/87qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGtcXYt9IP7So/Y5cocXOIdt0C4uLvzfSY/WVH7HK/vXEx61jj95f+Gs+zC5c73sAzsgaeqgOLRMKeQuhxf7F0M0OBnsHPirAtMn4Q6IXAAqpAkGe0gRztmAPFObtchGeivPM37kADhiIQUIG56KczIVSZJEELkkFoDpjwQRM7hQXQ7aVYjGMhU7QOEElw7sKNjnLe7uUxiVEt6jKBIAhwkKQ4ZBGOiiA3cYQxEEiEEtdyggiQeqkgg94VRLAQctPVWpnJacoIIa4z/BQZAx9CbPQnlwQggmYlSTPSFWCpGyBmEnExBUziAoG+d0AOPdlJJOVBJLvFAYMEZQWiMhJIPaEhIJbBMKsubgklBOJxhHAPMTB70kyhbG/0oJGByHPihc0bgyqgET1Cs09I9SAM9lwmVEwOUhSQ6DOD3qkEtAd06oLQTLSICbt99AHVGl4mRIRrtw5vqQSAAJLpb4qHsG4fhS0giHMUENMzLY6IADfhdeqjDcOEjorDB5XZHggwIOW9/cgqSIHNudiEEHB371chrcES0/wUEAZZlAEjs9O9TTDSXMOCqtPNJGHDCsIdg48UEUzygt6AqrXHmkCROyOLm1RH/qodLanNsCg5AJBIMFQ2C0yIIUcpBJOx2RpjcSgkDs7qC1x2KkukYbCS7bqgiXc0BslNzAaZQF0wR7VJc4iJQSHbCFDh2g7oeigSekFWnsw7HqQQXT2eXCoGw6Dt9qu4uaIHaCjJbIAJQRgE8wlvhugY2SQ+B3KWucDGMpygzG6CGMBaeb2FSA8ADmkAqGkj3wRsjrIndAzzyMqGjmDj1VxPPI2VQckeKCWbQd0b1wobhxlSwuJI6IKtOVaTHf6lXcwFJPLjdBMkDtbqJdPbJUFpLuYux3K2BkGUFXHlqgsByFaXVDjDuqOOwiFDmEODgcjuQWI5xJ7LgoIIgHteKsXEidiOi4w50z0QWGDuodiCDgq8sO43QvAHLyYQUnvHZ6hWDzIaxuFUucMgSFZrRynmwSgrzhr3QIJ6KRHIhAMh4z+l0UgQQPhDr3oA7TYyPFQCZ5XYKs50juVCSD3oG5ghTsYJnuT3wlQQ2DOe6EAuOAN0eSAHAZUCQTO6tzcoDiEFQ50SRurNIBlQAHEuJx3IxvM7OyC2CQA2CrRJglVBgEtEqAQ7OxQRhVJJ6LkGeirBQVG2R61YNiIIPd4IJ67KXcpaIwSgO5sYz18VQCCTMA9FaSeydwhECT0QSCIyEIBVCXHdoHdCty9ZQQSdgpONxlQTOBuknze2UEjeR9CgESUBMYUyf0QgrtvkKwMDbdG7ZUEkYGxQTzQfDvQQN8hVAABISZwUEcIfm2rfvKt9jVsq1rhD811b95VvsatlXN4f3cPeX25ERFuzEREGN0n4/wDO6n3LJLG6T8f+d1PuWSUrws8iIiqCIiAiIgIiIMbq3xD53T+9ZJY3VviHzun96ySkcys8CIiqCIiDW+LvzfSP3lR+xy5YJJIC4uLvzfSP3lR+xy5jk4O3RY4/eX/hrPswAk9lzcdVAlpgZCgc5cXDbqhI5eYHC6GZkkhSIgAboBA5typIMyEEAuJI5YKkPOxEHvUEuLeVp7SkgOp9oGRlBBp4B5so0uDIcNtkbgdSTspcNpMoI55MEZQA80HAUghmTsoIg8wyCgOPahplVEZLsQrFpHtVhEgHqgoDI99ISY98MIR5t0OHZ6FXDXEgxIQVa4lpa4dk7KGnHK7BGykc4eYIju7lGHAHZw696CcOBDsO6KgNTZ4wrEBxkmHeKtMjtCD9qCI5m9nBUE/BcI8VIaXjeHdyE4hwmEFYLT4KOaCjg7304+xSQdwJQCZyBlJM5jKiEIIKCT2hCAYiYSCYzCk8hEEwe9BHa2ClucFVLHuIDXbdVYAgwPfdQgnmIwDhRzO6CQVAgypENHZ2QR3w9QC6IwU3BOw6qWsIEtOCgkc4ahJLe0zHeFSCAWlys17ogkFu2EFSBHvzCSY5XjHQq3LzHtCO5Ww4cpGyCGuIEOCSRjoVHK6ROD9qk98SR0QRDQ7eWndTHKZb71QOXqPYpADn7w09EAtl3M0wpaQ4FrhyuVTzF/ZggKHZcHN3CC4kdmpnuKOaXtLQoa+Pf9U7TDzDLSgmm+GcjxkIAQ0hw9SOHMwvbhwUB4cM4PUoIzEbIA6IJ7PQq0OjBDmqm0ZkdEFjPJDsHvUDmaXQJUuMgNcI7lUczT77PRBPv46Hog5uvRTJIzBPgocIALgUEtdgxnKk83LLRhRADuZp3Ut5mOyZb1HcgqQcO6qW82SQpPM1/MILT0RpBecoDTIIPsXHyuYCPFXqDswFAPM0c3TqgmZARuOm6oR1BXIIdTaDugrI58qA3tSDhC1zfEJTY5s9qQevcglpPNEYjdRIByrMaeckjEKr4JiMd6CZwo5hPKcQqvBEBrlZjAPfmSgsQXZVS5wcAEYSx5DjIUvHMewcoJMl2B61JPWFWSQAcFS6RAfJHeEFXPcO6FHO7o2QrQAIDZB6qCC120oJEHsk8vgkgDlmW96q6mHOFXLYxhQyYcSOz3oOQSGwRIQwG5973qrXESdwVJgMmZYUEZ26HqrAEHtbwoIggES3oVJPR2e4oIaIEjfuUSSMDKk8wggyhl2QIKASTmMqJMdoYQmPe5UgycnPd3oIDWl2DhWcc8rMQonMNEeCZJPKM9UED32NkeSxhLRLhlT16QqulzwBgd6Cwc0t5wDBTMyBhVyDAHZKkc7HebPvUEwC6Rt3KIlnKd+iEtGWhT2g0eKCPgwenVSB2fBADHaKiScAoAc5uIlHAPzMd6kAtG2VSQXyDjqglxGC3onPzkYgdFcsBIIKrUHNAHYKCtRruXstUEvAbAiN1YyG+ba7P6SBtQdl9QEd6C0u2kSN03JKpEYgyeqnl5TEwSgkDmyNio5YGThWcHFg838E5A6qkPdkDA3CCOEPzXVo/WNb7GrZVrXCH5tq0frKt9jVsq5vD+7h7y+3IiIt2YiIgxuk/H/ndT7lkljdJ+P/ADup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQa3xd+b6R+8qP2OV4PPIXHxf+baT+8qP2OXJLmmQZBWOP3l/4az7MLQS3BjKo7myO5XluwVYLe2cg4XQzSCWjmBlvUKe0Mz2SpAAafFOkYLQgggRIOT1UgOGCVEA5acKCDgOOO8ILAuByMKCANlYF0R3KsOHvuqCZ6KrjEQpcYI7yoIMgE5QTIJ7W6FoJElHDHa3UAkAFByNEggiQq0yW1C159RUEmZKmoA4BkeMoIcA6oXMxG/io5eZxIxClriBB6KXAlxLdkESIkjKD3pnqnTPRN0AjGDBCOy3GHIQABPsQyBnKCJAZ4hVDY7QOe5WiRIUlzeWWjKCpPNtgoBJAO4TlPvxupDubtD33VBAAL4KkinVfynEdVBIFXIUOI5+4+CCaQMkNMgdCh5HVIDocEAgy333VVAD3zyw/qguMEzkqgEDmGQrAmSFGWuIDoQASZIEIDsBhTMiOiDwQQ4uaTMKI5mAjedkIaXF3XuUgANke1BLhIAdhSSTAOO4qsCoZB271Z0uHK7HcUAS4gu98NlVziDJw5S0QO06T0QyD2snogNIcCY5lJMEQ3dQIaO6UySJxCAQWyR7QqjOW48FyGJJ71ECd4KCPfN29iB3m4nIKkg4LSkxIeMFBBBY7maez3Iej2GR1CSWDGWqzWwSW5BQVjEtESo6RsrSSTBz3Jl2CBKAQXCHD2qOXk64Qdkw7AUuaYzkdEFCeUmAOUKwecO3VHQGgHIcrHlY0BuCgmAXzsjp9812UnvguKqQwieUyg5GHmycEbhQW9oOZjwQtkgtmQFVjw73wygBxko4NBlv0KTTJ7VP3wUN7WYjvQB71EyEAJaSgAHvVmsMEh0+CgN7MypDC3tg+xBVji2RzGEEtPayhE7HdWAwEA9HAYSRCsS7pt1UEAnmYNtwgqOYZw5TE9oCPBIAIIBE9FOQZagoWl2BiVI5wIBlSXES4qC2RLDugdo9UnJDtyoZv2t1Z0z2moAH9mWuMgrjZTDQQwxK5BMe9URKAMMjl33UNgtLWgYUSWOIfJCNDYPK2EFmuIck57XXoqjmJ5eaO6VZskZxCCBvBMgKSCBzMMJzQ6HAAnYhCI3yUAEOkkZ7lLSC6IUOGeZsg9VAPNluEB8h4OynnJEgKX/B6FUAyYE52QWdBhkSEDRzcw9SkYyceCO97B2QQ4EtImBPRWc3s9rPioAho5TnxViHECXY6hBxOw3so0Q2ShIOGhA13wtkFpMQOqgDld4qZ7lUxPMTKC8uOTsoA6tamS2RspeXYY3qgqTFQQYlHSXS44CckYOe5JIHa6IJb2cgSPFWcJZLQJXEZ5ZBwrs6ZgdUFXDAIJCn3wgGVcgiSYLFxGGkGnOd8IJDQ55JJACntTPN6lO882xUEOEQdkFOEM22rE/rKt9jVsq1rhD821b95VvsatlXN4f3cPeX25ERFuzEREGN0n4/87qfcsksbpPx/wCd1PuWSUrws8iIiqCIiAiIgIiIMbq3xD53T+9ZJY3VviHzun96ySkcys8CIiqCIiDWuLs2+kj9pUfscudowQRhcHF35vpH7yo/Y5c4BJkH2LHH7y/8NZ9mCm2BDsSoJw5vQI9vPjmghGuwWOEroZo2aOoRrRuPeoIMwYU5A6QgkNPLiFLRiJyoBAbzdFBO0YQHc0QUGIEypI7zKg7BAM9QoOXgdeikiXQJhACXQMR3oJyTBMEKsEnOCp5pdykZHVTEkIKzJiYKnAHaKQXGNoUETgnKAAPeg7qWggROVEDmB6qQCCYygmMTKg7dwTYTKiJEg+xALobvKDLYBlREnCS3bYhBYDlGT7EdJzCge9yUiOqBzA4cI7ij27HqoJBwR7UgtychBDXgkS2XdPFWJ5amQSPsQsD2yzsuChnMTBcOZBJ2x70qpY4CaZBhSQ4PIGUwX4MIIb2hzx7FaAffD1Kr2dsEOhTBBneEE5iOXK4nVBSy4EE4wuZr2kETD+49Vxu7Q7QyEBo5QSBv1VmiASPahdLBPRARy7oK8rSZD4PcrTIgnmUcnUQUlroBHKUEgBoOMFAMRMqQHDcyEwM9UFHhxaDIOd1HN28ZKuYLQdvBV5RzBwPsQW6qe8DdVHeVZ0AB0oIDswd1JaSZJUQHdVMFok5CCDygY2Rrgzb6FLQN+ijka48wPsQWPLE9/VRBmN/FVgmeg7lYu2YfpCCHEOwQVUl4EEYXIdocZCqezseYIJJZAAbhSQ0mAqgbQUw05OEEFpL+XmBHcgaY5T06qRHMXNzKOIDDIQW7gHZ2VXNLTICq1pJB6LkADXe+lBFNw2JR7cyw+xUqNlwLMFSx0iOqCWkuGRCcvVS4SJbgjogMsmPWEFSSMThWiGTKgg8sjKZxOEAhoA5uu3grZjJx3qeUObzOKgsIyDI7kEAhwicqcH4UFQeQdqY8E7M9pBYczXQchRgOkJMbHmVT2jDcFBd28xICryyJYYPcpZkb5CHsmZgoKjJOYcEGQZOeqHtHmj1wnLBmUBog4MK5JjIlVge1JgZQRDiJAkKAC0++AB6LkGcNMLjIk8p3QHdochwehVp5gASAQoafgkQe9VdBM7HqUFjMRy4UAYInKlxDmDkdsoA5hAw5BYO5hy7OCo8RUEYcoIM8+zh0XIDzQdnIKzznxG6mACZVXtIfMZQHmMdQgsO6VOCZO4UEnm2VRE7oD282WHZCWg9qQQo7PNl0H7UcJduglokSMI4OI3mFIAAjmSIgiZCABgSnKJkBQ7B559il7nOEAco70EvJHKJ+hBHXY9VV0S0DMdVPUAZQMtIDjI6FSSC6d0A5ZBVS0dHSgYBUO96SSBPRIPVCB1EnuQBJbgz4KzWnlwcjooGDOyRJJBQSJJwUAJceVAA6TzcpCNLXOMOLSgpwhi21b95VvsatlWtcI/m2rfvKt9jVsq5vD+7h7y+3IiIt2YiIgxuk/H/ndT7lkljdJ+P/ADup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQa3xd/caR0/95UfscuUiCS2ZG/iuHi7830mf1lR+xy5sj3myxx+8v/DWfZhDgXdoZlQ5sgOD4cOnerGaY5m7HcIADncHquhmCAA4tkdVBbzdpHGDLJx/FSJDBOxQQ0SO4Kx7IyZB2SADPROWBzdCgqRtBUkGPBABiMqSBy7yggCBIKkHtdxVcFuDlTIJg7oJM88yql4B9SYBykbmEAOLieiiJKc0dqIVgOYyDCCpPZE7qRueico6kKJkDoUBPe5OZ7lMAgoCAIAwgRkEbKDEmApbBYS3oqyQAYwUDYBTEqCRMhWI67lBEeMqw7iq+9Kc0HmQSREuBVdzzD+CsT2ZhQ0EdoZQTlkOBkdVAcOY5juUwDkb9xVXSAHOagCJPOJKlpJ7JMEIJI2nxUHtDn6hAIa4z8IdVb3zYIz3oA13bB9aDBMZlBDZ5YmYUEy3x7lGxMbqcOGcOQRGxaZHVWIyAduhSOTbPehMZJkHbwQROYUiZzAPchLSPsKgtzLign357inLJAcchNsO2U4OJjuQQ4tY4NcPoU82Cw+xQYEB+D3qHe+g+xAE9VcOdBHLKoeUkZMq0ieUEygq05PSOityCZaYVcFxnClojIKACM5lRzN2IkKTk4GFX3pg7d6CZkxsFblkQ0x6uqjAMSEABl20IBI2GE5ATBMhVwZJ3VjGIOUESGTCkyQNj4KroAM7o0jc7IJPZIVs7yqnOfgqzQQ05wUEiHH32VR4gyMIxjXOMFXME8qCOaWbZ8EJMAzB7wqguaSxw9qsAWjIlAMRyzLt1VxMCRKggGoJBBPVWdU5W8oOUCDyhSTHUpDok7FVPSUCRzd/rVnA9TKiAPFDzA94QOmN1PvgOXDgggneFDg5pDt0FoBPc4IcmHbqAA4czT2lI7WH++Qccmm+O9cgaXSQZCoSAS149RRruQQThBMTtuoJA3UxI5hhVIkZKCTuCMKQATMqp8FOAEEmTg9OqnmAMQqAzsU3QSG8jp6FS5uQ4GFZscsOXGD2vNuMDogl4Ls7IzIl2CFJBnllScgAnCCYL9iqcvmz96nAb3JMgN70BxggygaHCRhVDQeyVZonH2IKlg5ocM9FDgJgGSrAAmXbqCAJI3CCGwRJGVcRuSVUODiIKk4OUEubzNVOclpaQphxR8NaDCABDM4UgCMOhUdJG8pggSYQXOG5ckBwwQFBiMZUCBuEFjgZKq6o0NLgDjcqT2RJ2UH4JOyA2oJHLlX+HgQVBBJ5wAPUkgu7UygkjMux6kAOSSPUqx3z4KCIOxkoI4Q/NtW/eVb7GrZVrXCH5tq37yrfY1bKubw/u4e8vtyIiLdmIiIMbpPx/wCd1PuWSWN0n4/87qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREGtcX/AJtpP7yo/Y5cvaBEAlcXF/5tpP7yo/Y5c4ALZDsrHH7y/wDDWfZhAPbI3Cgk0xj3pOxUEncBXEOZDt10M0AEAxBVQXMkggg96kOg8nRSBAiEBpJbJG6o93KczCkuLXcoy0q5ptLMmUFeyGlygGACMyjg7zjWgYV3tDctQVcQXA8pChxkyBCkkOEzlARsSgHcBTEbqJAcD0R08yCJGyAlg7WxUgAOyhDS7lcfYgkEPB5Rsq4jxCqHNYSwGJV2gBhnc9UEYO0g9ycxyYwo3bA3HVTInaCEFmjs9nAKo6GkNQFxBLoRwDokQgkhTI3CqSADBkKIAbKAXE5hOYFsqYBG0EpywJIyOiCnOYw0wuRrTHM36Cn+IgBNsgoIgFx5pCmDPvpHihIeA0iD3o0gGCgg8wEtyrCHguGY7kLuUyM+ChwAHPTwOoQRlruYDsncK3KPfM6qW5BnYqgcPebdyAYLoGHBSOUuh2CmD2Tg96gcpceZBYRkBVLQwy3M7qRvnZS4EZaZHVBVrm+9iAe9WMDHRQeWMDJUSRghBMEHJBCgOJJBAI6KwA26KHAc2THdCCvNsHMwVaO0J9hSAcE5UOIB5SJB6oDuQHIMq3QFsetUEDsOEg9VIcGHk+hBJA5u1uVB7BjdHYwRv17lIdykDcd6CM4PwVJbJluw6FD2RO4QNlvM0oIAbzS0Z6qeYZVWul0REKTkYCBIiYQgOjoVLh2QRuEwchBHZLocJUcvjI8EbU7RBbhSMGQED3rcCVYZ2UOxlS0td0QVIAyMFXDqbgQd1BDYwCgFMQCIKCr+ZsZkKRnZ2E5pJbGFDW8kkoLEy0yZUEMLcifUqlg5uYOx3IIOx9iAXGQ3cLkdAaIEqpIDQQMqM7BBJ6YhObtidlVz8Boye5WcJiBjqgk8o3OD1USW4OWnqoEe9cICkHlPKctQQey+WnCsSCObu6qCAfwUExg7IDpcA7dCASARKgEtOPelT1icFBDXQIOFIEtMqCAW96s0jkmYIQV2dBClQRPVARsgYGAEB2EK0+CruZAwgsDmXbKHw7pjvTfP8EccZQDAAgyeqmRuq9kx0KE9oNO6CS5rh2mmFEgOjlkd4UnaIygPIJiYQJ5sRI8EBHPE8oUQT2m4KNbzO7ThKCxAOZVCdjGVZ0tcWkZKoSdigkQTjCtMHZQTLIAgqJcIOCUF4AzOe5D2hEKodMk7qZbySCZQceRMGYVgJAJUwCAQYQSR3II5m9Nu9WknAg+Ko4AbAepSx+T2UFo9pUhomVTrI3UnmLY6oLGB1UGHAdCjeaIfgqHGDEIJJ5XCTgoYECVHM4NgtlTIhBThD821b95VvsatlWtcIfm2rfvKt9jVsq5vD+7h7y+3IiIt2YiIgxuk/H/ndT7lkljdJ+P/ADup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQa1xd+b6T+8qP2OXIYaZGZ3VOLvzfSP3lR+xyuYJMrHH7y/8NZ9mFhIdgS0oCAZAQAQoDix8ESCuhmksLmlzTlQIcDJPN3Lk5o97sVxPZPbaUACcRHrVyGxyg5URLZDuZQBzZI2QSC2QJOEDgXkkRAx4qstggA83cgEN7W6CTyuEjfuUGImEw1vP3IHH30Y6hALgCMSChAkSVMsiQPYgLSZQDBOcKBBPeUJa4kEEEKQB8DfqgqJntAFWkNwBMqwaeioWnm7JQWA7O8BR2ZgIDkgquNupQT2dgYUgPEh0FvQqJMYTHKQZhBU4GRCmMDOE2aOo7kIBEhBJyQ49EJBydlGyGMc26CTgFwg+BUTzCXCPUpkEYQdyCsCZmFYuOxAUTG4TmJ22QNsjdTj/AHfBQ3BgDdTMDIlBLTygifYoe2QHRkKHtlocDlqu2S0T1QUaQ4yN+qkwROFHvHmBIVgGxMIKhucuwrQAP7NyEgIYQV7TZOCoc98csAT1UgBx7k7PfkIKdum2ffAdFfm58xhHjxkFA0bHZAMh2RI71A5QDOZ28FIa4HBlpVuVo3QU5pcGuEdxU45iCPap2JgjwUFwLe0IIQDJEbhWDRjuUAhwmIPcpl0QNkAiXdnI7lXPNDTy+CtyiOYmFWS7J3QVDiXcpC5CDEgxHRUBHP4q+TPRBSS5oIPaUkQ6ULSDjdOYygrgmeqnmMnsqZnICp2uYO/gguXAjIUMdDzAwEJ2ndT1wN0FuaRzAqHOlwxKggtkEFIjI64QGkgkEYPcrHkGHGQVDfekAoAyA12T3oBa3dqqWxlhz1QjlMg4UuZNOWlBWcRsVeeVodKhsOZDhlQJZh2WoBYC7mGHbypkvMDEbhSYDOZqhwJI70FyCWQSAei4xIHbUjtPh5gqX4gIImDPRS4j1qHCIKq0xugc0YiVYEN3G6g4yN1Owhw3QCIktOFVvLB6qwgmAqkgS1whBY5UD+KmMIDBQAOpOU3OymW9U5hsEEZBzsmHA9EkkqScQRCChkAGJKQHHmByFI7IiMo4cvvdygs4mAQMoJjvlV5sDqUJ5TzdUBwPN2XKHAc4Az3q7QD2hgqpaH7HPVBODu6e7wVQQ0lrhlWDWtZjJVIc6tzHu2QXIgDvSNpUQQcn2JmQgS0OiEJAxCkzONlByIQBEjOykxtsoEtCmSUFZ8FLSQ4nlVg4TsnNGXj6EFOvM0+xDh0lyl3K5styVRrWucOb6EHN2oz2lGJygaWmAVWpLXgnIjYIJJzH0KAQMkZUMdEAq2WjYFBThD821b95VvsatlWtcIfmurfvKt9jVsq5vD+7h7y+3IiIt2YiIgxuk/H/AJ3U+5ZJY3Sfj/zup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQa1xd+b6T+8qP2OXI3AdOSu3rmk1NYtLelSu/RKlCu2u2p5vnyAYxI7/wCCxnuc1z/af/RM/Fc+7UvaemZidca/5mG0amsRvX1dpsjcKveN/FcHue12I91H+iZ+Ke53Xf8Aaj/RM/FevNt6J+35Tpr6o+/4c4MbbIBAkGWrr+53XP8Aaf8A0TPxT3O65/tP/omfinm29E/b8nTX1R9/w7fYd70oYA3yuqOHddbtxR/omfinue13/aj/AETPxTzbeift+Tpr6o+/4cxBjmOCrSCBGV1vc7rh/wDqj/RM/FPc7rg/+p/9Ez8U823on7fk6a+qPv8Ah2njswFHvQAuv7n9e/2o/wBEz8U9zuuzPuoz8yZ+Kebb0T9vydNfVH3/AA5+8tClmWkxldY8Oa4TJ4n/ANEz8UHDmuAyOKI//smfinm29E/b8nTX1R9/w7AnqMo6QOzuuv7ndc/2o/0TPxU+57Xf9qP9Ez8U823on7fk6a+qPv8AhzA1B7VbsgnBXW9zuuTPuo/0TPxU+53Xf9qP9Ez8U823on7fk6a+qPv+HNE5CRiOp2K4Pc5rn+0/+iZ+KHhzXDvxP/omfinm29E/b8nTX1R9/wAOfIwpB6Lr+53XDvxR/omfinuc1z/af/RM/FPNt6J+35Omvqj7/hzuMtMYIUTkFq4fc7rkR7p/9Ez8VHub1v8A2n/0TPxTzbeift+Tpr6o+/4dgu5mmRBScicmFwe5zXP9p/8ARM/FPc5rn+0/+iZ+Kebb0T9vydNfVH3/AA7HNHRTz496usOHNcBkcT5+ZM/FPc7rn+1H+iZ+Kebb0T9vydNfVH3/AA7Di4EQJBUE9qR1XD7nddiPdRj5kz8VX3N63P8A8T/6Jn4p5tvRP2/J019Uff8ADsT3dVI5hgCQuv7nNc/2n/0TPxT3O65/tR/omfinm29E/b8nTX1R9/w5yD8EyOoRp5QYGFwe53XP9p/9Ez8U9zuuf7Uf6Jn4p5tvRP2/J019Uff8O4A008dVxSJ5YhcI4e10bcUf6Jn4qHcOa47fief/AOyZ+Kebb0T9vydNfVH3/DnEzBEp8IjaFwe53XP9qP8ARM/FPc7rh/8Aqj/RM/FPNt6J+35Omvqj7/h2JdzdqAFaaYK6vud1z/aj/RM/FDw5rhMnifPzJn4p5tvRP2/J019Uff8ADsFw5RjqocDzYOFwe53XP9p/9Ez8UPDmuEyeJ/8ARM/FPNt6J+35Omvqj7/h2mgbFQY+Ft0XX9zuuxHuo/0TPxT3Pa7/ALUf6Jn4p5tvRP2/J019Uff8OxLcQEkHcLr+53Xf9qP9Ez8U9z2u/wC1H+iZ+Kebb0T9vydNfVH3/DleSHSBhWBaWid1we53Xf8Aaj/RM/FV9zetj/6n/wBEz8U823on7fk6a+qPv+Hag7n3qrzS4kiB0XAeHdcO/FH+iZ+Ke5zXCI90/wDomfinm29E/b8nTX1R9/w7Akn3uFBdIPguH3O67/tR/omfio9zuuf7T/6Jn4p5tvRP2/J019Uff8OwJLQOqqWnmlcPud1z/af/AETPxT3Oa5M+6fPzJn4p5tvRP2/J019Uff8ADn7XPyxhI5SSBzFcA4c1wbcUf6Jn4qPc3rf+0/8Aomfinm29E/b8nTX1R9/w7BIxIiVEkOhcJ4c1w78T/wCiZ+KHh3XCIPFH+iZ+Kebb0T9vydNfVH3/AA7MmIOVQkg+C4Rw7rgEDijHzJn4p7nNbP8A9T7/AP7kz8U823on7fk6a+qPv+HYkQqtO7T7Fw+5zXMf/tPt/wDuTPxUnh3XTvxR/omfinm29E/b8nTX1R9/w5n9BCksAbzNd7F1/c7rn+1H+iZ+Ke53XIj3Uf6Jn4p5tvRP2/J019Uff8OZrx704KuSC0Arq+5vW5n3Tf6Jn4oeG9bdE8TzH/7kz8U823on7fk6a+qPv+HPDqZk5aVZxBEt6LgPD2ukQeKP9Ez8VA4c1sbcT/6Jn4p5tvRP2/J019Uff8OZ0kCBlSDyu7ey4Pc5rn+0/wDomfih4c1w78T/AOiZ+Kebb0T9vydNfVH3/DsE9uNwoPgF1xw3rYMjif8A0TPxU+5zXJn3T/6Jn4p5tvRP2/J019Uff8OWJwVJJmDkLhHDuuD/AOqP9Ez8U9zmuf7T/wCiZ+Kebb0T9vydNfVH3/DniXdrAC4i53NtLVX3Oa3/ALT/AOiZ+KgcN62NuJ/9Ez8U823on7fk6a+qPv8Ah2GDmp77J02XB7nNbiPdP/omfinuc1yI90+PmTPxTzbeift+Tpr6o+/4cvNBhwUkforhHDmuAQOJ/wDRM/FBw7rg24o/0TPxTzbeift+Tpr6o+/4c4cdoyFJPMIjK4Pc7rsz7qP9Ez8VB4c1w78T/wCiZ+Kebb0T9vydNfVH3/DlcTPiFIcSQCFwHhvWyZPE8n5kz8U9zmt/7T/6Jn4p5tvRP2/J019Uff8ADsHEwMqCSCMLh9zuuRHuo/0TPxT3Oa4DPunz8yZ+Kebb0T9vydNfVH3/AA5i4jLQgAeOZpjvXD7nNcH/ANT/AOiZ+Ke5zW/9p/8ARM/FPNt6J+35Omvqj7/hzAQDBVmloB+1db3N63/tP/omfinub1uI90/+iZ+Kebb0T9vydNfVH3/DnJ7BAyehVWvdPKRlcXub1sCPdP8A6Jn4qfc7rn+1H+iZ+Kebb0T9vydNfVH3/DshpmSVXPNJ2XB7ndc/2o/0TPxT3Oa5/tP/AKJn4p5tvRP2/J019Uff8OY52UtMArg9zmtzPun/ANEz8VHub1v/AGn/ANEz8U823on7fk6a+qPv+HODIJhOfmIhuy4Bw3rY24n/ANEz8U9zetj/AOp/9Ez8U823on7fk6a+qPv+HYPKHCN1UxzZwVxe5zW5n3T/AOiZ+Kj3N63/ALT/AOiZ+Kebb0T9vydNfVH3/DmBNPLTzSpJLjMLhHDmuDbif/RM/FPc7rn+1H+iZ+Kebb0T9vydNfVH3/DmEHcZT4UEFcPud1z/AGo/0TPxT3Oa5/tP/omfinm29E/b8nTX1R9/w5OEPzbVv3lW+xq2VYnQtIqaPaXFGrd+l1K9d1d1TzfJkgTiT3fxWWVw1mtIi3LzkmJtMwIiLV4EREGN0n4/87qfcsksbpPx/wCd1PuWSUrws8iIiqCIiAiIgIiIMbq3xD53T+9ZJY3VviHzun96ySkcys8CIiqCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgxuk/H/AJ3U+5ZJY3Sfj/zup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGN0n4/87qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDG6T8f+d1PuWSWN0n4/8AO6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQY3Sfj/wA7qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDG6T8f+d1PuWSWN0n4/wDO6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERAREQEREBERAREQEREBERARdPUNU03Srf0jU7+3s6X6daoGA+qd1pN95X+DrWr5m0qXep1JgNtaByfW7ln2LO+WlPanT1WlrcQ9CReajyn6hUHPbeT/AF6tS35/Mu29jSptvLFw76V6LrGn6jpFbr6RRkN9cdr+Cz/U4vm9+Vf5PSUXU0/UtP1aybeaZeUru3dtUpODh6vA+C7a6ImJ7wy4EREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGN0n4/87qfcsksbpPx/53U+5ZJSvCzyIiKoIiICIiAiIgxurfEPndP71kljdW+IfO6f3rJKRzKzwIiKoIiICIiA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rcRaHam9p3LWmvRp+/Y4ANkDqCANszKvjMF5xb5nff8A9/QwZKxfXEPUuC7VlnwHodBggCypOMd7mhx/iStY4rvavF3EFPgLSKp9HaRV1e5pnFKmDPmgf0if/O61LQLryu32j2/DVtp50u2osFH066oOpVKdMYAl28DA5Wz49V6rwtwvYcK6OLGzJq1XnnuLl/v67+rj9w6fSVvS05qxSImI+P4hnaIpM2mdyzNtb0LO0o2ltTbSoUWCnTY3ZrQIA+hcqIu5ziIiAiIgIiICIiDG6T8f+d1PuWSWN0n4/wDO6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERAREQEREBERAREQEREBERB4n5aKXE2oahYWVppl1X0mkzzgfQpueHVSSDzRsQNp7ysD5PfJtrN7xDaaprenVLPTbV4qltw3ldWcMtaGnMTBJIiF9FIuG3g63y+bad/0dEZ5inRECIi7nOIiIC0riHyY8L8Saq7U7yncW90+POOtqgaKsYkgg5juhbqi8XpW8atG3qtprO4litD4f0jhzThY6PZttqMy4jLnnvcTklZVEXqIisah5mZnvIiIqCIiDX+MeHKfFXCl3pDiGVnAPoPOzKgy0+rofAlfPPBWqVuCPKNR/K9N1q1rnWt214yxruvqBDT6gvqZapxZwHoPF1MPvqTqF60crLujAeB3Ho4eB9kLh8T4eb2jJj9qHRiyxWJpbiW1Nc1zQ5pDmkSCNipXmGm6H5S+EKAs9KvtP4g02ninRuiadRg7genq5iPBZrT+JOOK+o0bS94A9GpucBUuPyiwtY3q6ADPqBW9c3wtWYn+2/8AZnOP5TEt1REW7MREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBjdJ+P/O6n3LJLG6T8f8AndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMbpPx/wCd1PuWSWN0n4/87qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBjdJ+P/O6n3LJLG6T8f+d1PuWSUrws8iIiqCIiAiIgIiIMbq3xD53T+9ZJY3VviHzun96ySkcys8CIiqCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgxuk/H/ndT7lkljdJ+P/ADup9yySleFnkREVQREQEREBERBjdW+IfO6f3rJLG6t8Q+d0/vWSUjmVngREVQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGN0n4/8AO6n3LJLG6T8f+d1PuWSUrws8iIiqCIiAiIgIiIMbq3xD53T+9ZJY3VviHzun96ySkcys8CIiqCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi697ZW2o2dSzvKXnaFSOZvMRMEEZGdwFhvcXw1+rf8AOqfzLO85In9sRP8AOv8AiXqIr8Z/99Wwote9xfDX6t/zqn8ye4vhr9W/51T+ZeOrN6Y+s/8A1etU+c/T/tsKLXvcXw1+rf8AOqfzJ7i+Gv1b/nVP5k6s3pj6z/8AU1T5z9P+2wote9xfDX6t/wA6p/MnuL4a/Vv+dU/mTqzemPrP/wBTVPnP0/7bCi6WnaZY6TbOt9PoeZpOeXlvMXSYAnJPcF3VtG9d+Xidb7CIiqCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDG6T8f+d1PuWSWN0n4/87qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBjdJ+P/O6n3LJLG6T8f8AndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMbpPx/wCd1PuWSWN0n4/87qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEWF13iXTeHPRamreeo2txU816UGTSpOO3Ofgg98QqaPxVpGv6ld2mj1H3tK0gVLyk2bfmPwWvmHGM4keKm44XUs6iIqgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDG6T8f+d1PuWSWN0n4/8AO6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERAREQEREBERAREQEREBERAREQEREBERARE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/wDxv4C+V3f/APDOW/aVqdrrOkWuq2LnOtrqmKlMubyktPeF3UViJ+Mk6+DynyU//FvlC/e7v+eqqeXimK3Bmk0nEgP1Wm0keNOovWUXno/b0r1d9tO13yd8P6vwVT4Zt7ZllTtWzZ1aY7VB/wClO5n4Xf64KxfAHFmoPu6/BXFv9jxFpwhr3HF5SGz2nqY37xnvj0VFenvuE321IiIvSCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDG6T8f8AndT7lkljdJ+P/O6n3LJKV4WeRERVBERAREQEREGN1b4h87p/esksbq3xD53T+9ZJSOZWeBERVBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQY3Sfj/zup9yySxuk/H/ndT7lklK8LPIiIqgiIgIiICIiDG6t8Q+d0/vWSWN1b4h87p/eskpHMrPAiIqgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMbpPx/53U+5ZJY3Sfj/wA7qfcskpXhZ5ERFUEREBERAREQY3VviHzun96ySxurfEPndP71klI5lZ4ERFUEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARQSAJJgLE1OJdDp1nURftr1W7st2urEesMBXm1q19qdLETPDLosXaa/pF7dei0L1ouNxRqtdSefU1wBKyitbRbvWdkxMciIiqCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMbpPx/53U+5ZJY3Sfj/AM7qfcskpXhZ5ERFUEREBERAREQY3VviHzun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J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52PT7H5bQ+sH4p6fY/LaH1g/FPQLH5FQ+rH4J6BY/IqH1Y/BO52dXSHNe29exwc1108ggyCMLJrjpUaVFpZRpMptJmGNAE+xciRGoJERFUEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==",alt:"Prsten Mese\u010Deva riznica"})),React.createElement("div",{className:"li-envelope li-front","aria-hidden":"true"},React.createElement("div",{className:"li-side li-left li-paper"}),React.createElement("div",{className:"li-side li-right li-paper"}),React.createElement("div",{className:"li-pocket-shadow"}),React.createElement("div",{className:"li-pocket li-paper"}),React.createElement("svg",{className:"li-seams",viewBox:"0 0 680 440",fill:"none"},React.createElement("path",{d:"M1 438 309 218Q340 199 371 218L679 438",stroke:"#fffdf7",strokeOpacity:".8"}),React.createElement("path",{d:"M1 435 309 215Q340 196 371 215L679 435",stroke:"#87745b",strokeOpacity:".16"})),React.createElement("div",{className:"li-envelope-imprint"},"Samo za tebe")),React.createElement("div",{className:"li-stage-footer"},React.createElement("span",{className:"li-scroll-cue"},"Skroluj polako da otvori\u0161",React.createElement("span",{className:"li-cue-line","aria-hidden":"true"},React.createElement("i",null))),React.createElement("button",{className:"li-skip",type:"button"},"Presko\u010Di"),React.createElement("button",{className:"li-replay",type:"button"},"Otvori ponovo"),React.createElement("a",{className:"li-shop",href:"/nakit/prsten-riznica/"},"Pogledaj prsten"))))}window.MJKoverta={mount(i){let t=window.ReactDOM.createRoot(i);return t.render(window.React.createElement(Tu,{theme:"light",fontFamily:"Montserrat, Arial, sans-serif"})),t}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
