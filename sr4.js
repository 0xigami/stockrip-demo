(()=>{var Eu=Object.defineProperty;var Bu=(i,t)=>{for(var e in t)Eu(i,e,{get:t[e],enumerable:!0})};var ye={};Bu(ye,{AdditiveBlending:()=>$r,AmbientLight:()=>Fo,BackSide:()=>ze,Box3:()=>tn,BoxGeometry:()=>ki,BufferAttribute:()=>je,BufferGeometry:()=>Qe,CanvasTexture:()=>Cs,CircleGeometry:()=>yo,Color:()=>$t,Curve:()=>sn,CustomBlending:()=>Xc,CylinderGeometry:()=>_o,DirectionalLight:()=>Uo,DoubleSide:()=>Bn,Euler:()=>hn,ExtrudeGeometry:()=>Eo,FrontSide:()=>Un,Group:()=>pi,InstancedMesh:()=>fo,LatheGeometry:()=>vo,LinearFilter:()=>gn,MathUtils:()=>Zn,Matrix4:()=>ue,Mesh:()=>Ne,MeshBasicMaterial:()=>_s,MeshLambertMaterial:()=>Do,MeshPhysicalMaterial:()=>Io,MeshStandardMaterial:()=>ur,NearestFilter:()=>Ze,NeutralToneMapping:()=>Kn,OneFactor:()=>qc,OneMinusSrcAlphaFactor:()=>ir,OrthographicCamera:()=>yi,PMREMGenerator:()=>Bs,PerspectiveCamera:()=>Te,PlaneGeometry:()=>vi,Quaternion:()=>Ve,Ray:()=>wi,RingGeometry:()=>Bo,SRGBColorSpace:()=>Ee,Scene:()=>qn,ShaderMaterial:()=>nn,Shape:()=>Ss,ShapeGeometry:()=>Co,SphereGeometry:()=>So,TorusGeometry:()=>bo,TubeGeometry:()=>To,UnsignedByteType:()=>Sn,Vector2:()=>pt,Vector3:()=>R,Vector4:()=>Ae,WebGLRenderTarget:()=>bn,WebGLRenderer:()=>Fn});var Jc="170";var Cu=0,xl=1,Su=2;var Ch=1,bu=2,Wn=3,Un=0,ze=1,Bn=2,Ai=0,ps=1,$r=2,wl=3,Ml=4,Xc=5,Pi=100,Tu=101,Iu=102,Du=103,Ru=104,Pu=200,qc=201,Uu=202,Fu=203,Ca=204,ir=205,Lu=206,Qu=207,Nu=208,Ou=209,ku=210,Gu=211,zu=212,Vu=213,Hu=214,Sa=0,ba=1,Ta=2,xs=3,Ia=4,Da=5,Ra=6,Pa=7,Kc=0,Wu=1,Yu=2,mi=0,Ju=1,Xu=2,qu=3,Ku=4,Zu=5,ju=6,Kn=7;var Sh=300,ws=301,Ms=302,Ua=303,Fa=304,Lo=306,La=1e3,Li=1001,Qa=1002,Ze=1003,$u=1004;var yr=1005;var gn=1006,Xo=1007;var Qi=1008;var Sn=1009,bh=1010,Th=1011,sr=1012,Zc=1013,Ni=1014,Pn=1015,fr=1016,jc=1017,$c=1018,vs=1020,Ih=35902,Dh=1021,Rh=1022,Cn=1023,Ph=1024,Uh=1025,As=1026,ys=1027,tl=1028,el=1029,Fh=1030,nl=1031;var il=1033,Xr=33776,qr=33777,Kr=33778,Zr=33779,Na=35840,Oa=35841,ka=35842,Ga=35843,za=36196,Va=37492,Ha=37496,Wa=37808,Ya=37809,Ja=37810,Xa=37811,qa=37812,Ka=37813,Za=37814,ja=37815,$a=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,jr=36492,rc=36494,oc=36495,Lh=36283,ac=36284,cc=36285,lc=36286;var to=2300,hc=2301,qo=2302,vl=2400,yl=2401,_l=2402;var tf=3200,ef=3201;var sl=0,nf=1,di="",Ee="srgb",Ts="srgb-linear",Qo="linear",de="srgb";var Ki=7680;var El=519,sf=512,rf=513,of=514,Qh=515,af=516,cf=517,lf=518,hf=519,Bl=35044;var Cl="300 es",Jn=2e3,eo=2001,xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sl=1234567,js=Math.PI/180,rr=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function rl(i,t){return(i%t+t)%t}function uf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ff(i,t,e){return i!==t?(e-i)/(t-i):0}function $s(i,t,e){return(1-e)*i+e*t}function df(i,t,e,n){return $s(i,t,1-Math.exp(-e*n))}function pf(i,t=1){return t-Math.abs(rl(i,t*2)-t)}function Af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xf(i,t){return i+Math.random()*(t-i)}function wf(i){return i*(.5-Math.random())}function Mf(i){i!==void 0&&(Sl=i);let t=Sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vf(i){return i*js}function yf(i){return i*rr}function _f(i){return(i&i-1)===0&&i!==0}function Ef(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Zn={DEG2RAD:js,RAD2DEG:rr,generateUUID:Hi,clamp:be,euclideanModulo:rl,mapLinear:uf,inverseLerp:ff,lerp:$s,damp:df,pingpong:pf,smoothstep:Af,smootherstep:mf,randInt:gf,randFloat:xf,randFloatSpread:wf,seededRandom:Mf,degToRad:vf,radToDeg:yf,isPowerOfTwo:_f,ceilPowerOfTwo:Ef,floorPowerOfTwo:Bf,setQuaternionFromProperEuler:Cf,normalize:qe,denormalize:us},pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],m=n[8],g=s[0],A=s[3],d=s[6],w=s[1],M=s[4],x=s[7],D=s[2],B=s[5],b=s[8];return r[0]=o*g+a*w+c*D,r[3]=o*A+a*M+c*B,r[6]=o*d+a*x+c*b,r[1]=l*g+u*w+h*D,r[4]=l*A+u*M+h*B,r[7]=l*d+u*x+h*b,r[2]=f*g+p*w+m*D,r[5]=f*A+p*M+m*B,r[8]=f*d+p*x+m*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,m=e*h+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=h*g,t[1]=(s*l-u*n)*g,t[2]=(a*n-s*o)*g,t[3]=f*g,t[4]=(u*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ko=new Kt;function Nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sf(){let i=no("canvas");return i.style.display="block",i}var bl={};function Ks(i){i in bl||(bl[i]=!0,console.warn(i))}function bf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Tf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function If(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var oe={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Qo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Tl=[.64,.33,.3,.6,.15,.06],Il=[.2126,.7152,.0722],Dl=[.3127,.329],Rl=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Ts]:{primaries:Tl,whitePoint:Dl,transfer:Qo,toXYZ:Rl,fromXYZ:Pl,luminanceCoefficients:Il,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:Tl,whitePoint:Dl,transfer:de,toXYZ:Rl,fromXYZ:Pl,luminanceCoefficients:Il,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});var Zi,uc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=no("canvas")),Zi.width=t.width,Zi.height=t.height;let n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Df=0,io=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zo(s[o].image)):r.push(Zo(s[o]))}else r=Zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rf=0,$e=class i extends xi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Li,s=Li,r=gn,o=Qi,a=Cn,c=Sn,l=i.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Hi(),this.name="",this.source=new io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case La:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case La:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Sh;$e.DEFAULT_ANISOTROPY=1;var Ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],m=c[9],g=c[2],A=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-A)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+A)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,x=(p+1)/2,D=(d+1)/2,B=(u+f)/4,b=(h+g)/4,I=(m+A)/4;return M>x&&M>D?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=B/n,r=b/n):x>D?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=B/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=b/r,s=I/r),this.set(n,s,r,e),this}let w=Math.sqrt((A-m)*(A-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(A-m)/w,this.y=(h-g)/w,this.z=(f-u)/w,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fc=class extends xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new io(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends fc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},so=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var dc=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],m=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=g;return}if(h!==g||c!==f||l!==p||u!==m){let A=1-a,d=c*f+l*p+u*m+h*g,w=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let D=Math.sqrt(M),B=Math.atan2(D,d*w);A=Math.sin(A*B)/D,a=Math.sin(a*B)/D}let x=a*w;if(c=c*A+f*x,l=l*A+p*x,u=u*A+m*x,h=h*A+g*x,A===1-a){let D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+u*h+c*p-l*f,t[e+1]=c*m+u*f+l*h-a*p,t[e+2]=l*m+u*p+a*f-c*h,t[e+3]=u*m-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*m,this._y=l*p*h-f*u*m,this._z=l*u*m+f*p*h,this._w=l*u*h-f*p*m;break;case"YXZ":this._x=f*u*h+l*p*m,this._y=l*p*h-f*u*m,this._z=l*u*m-f*p*h,this._w=l*u*h+f*p*m;break;case"ZXY":this._x=f*u*h-l*p*m,this._y=l*p*h+f*u*m,this._z=l*u*m+f*p*h,this._w=l*u*h-f*p*m;break;case"ZYX":this._x=f*u*h-l*p*m,this._y=l*p*h+f*u*m,this._z=l*u*m-f*p*h,this._w=l*u*h+f*p*m;break;case"YZX":this._x=f*u*h+l*p*m,this._y=l*p*h+f*u*m,this._z=l*u*m-f*p*h,this._w=l*u*h-f*p*m;break;case"XZY":this._x=f*u*h-l*p*m,this._y=l*p*h-f*u*m,this._z=l*u*m+f*p*h,this._w=l*u*h+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jo.copy(this).projectOnVector(t),this.sub(jo)}reflect(t){return this.sub(jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jo=new R,Ul=new Ve,tn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Er.subVectors(this.max,Hs),ji.subVectors(t.a,Hs),$i.subVectors(t.b,Hs),ts.subVectors(t.c,Hs),ai.subVectors($i,ji),ci.subVectors(ts,$i),Ci.subVectors(ji,ts);let e=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-Ci.z,Ci.y,ai.z,0,-ai.x,ci.z,0,-ci.x,Ci.z,0,-Ci.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-Ci.y,Ci.x,0];return!$o(e,ji,$i,ts,Er)||(e=[1,0,0,0,1,0,0,0,1],!$o(e,ji,$i,ts,Er))?!1:(Br.crossVectors(ai,ci),e=[Br.x,Br.y,Br.z],$o(e,ji,$i,ts,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},kn=[new R,new R,new R,new R,new R,new R,new R,new R],yn=new R,_r=new tn,ji=new R,$i=new R,ts=new R,ai=new R,ci=new R,Ci=new R,Hs=new R,Er=new R,Br=new R,Si=new R;function $o(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);let a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Pf=new tn,Ws=new R,ta=new R,Oi=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(ta)),this.expandByPoint(Ws.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new R,ea=new R,Cr=new R,li=new R,na=new R,Sr=new R,ia=new R,wi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(ea);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=li.dot(this.direction),c=-li.dot(Cr),l=li.lengthSq(),u=Math.abs(1-o*o),h,f,p,m;if(u>0)if(h=o*c-a,f=o*a-c,m=r*u,h>=0)if(f>=-m)if(f<=m){let g=1/u;h*=g,f*=g,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ea).addScaledVector(Cr,f),p}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){na.subVectors(e,t),Sr.subVectors(n,t),ia.crossVectors(na,Sr);let o=this.direction.dot(ia),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);let c=a*this.direction.dot(Sr.crossVectors(li,Sr));if(c<0)return null;let l=a*this.direction.dot(na.cross(li));if(l<0||c+l>o)return null;let u=-a*li.dot(ia);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,c,l,u,h,f,p,m,g,A){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,p,m,g,A)}set(t,e,n,s,r,o,a,c,l,u,h,f,p,m,g,A){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=m,d[11]=g,d[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,p=o*h,m=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+m*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,p=c*h,m=l*u,g=l*h;e[0]=f+g*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-m,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,p=c*h,m=l*u,g=l*h;e[0]=f-g*a,e[4]=-o*h,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,p=o*h,m=a*u,g=a*h;e[0]=c*u,e[4]=m*l-p,e[8]=f*l+g,e[1]=c*h,e[5]=g*l+f,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,m=a*c,g=a*l;e[0]=c*u,e[4]=g-f*h,e[8]=m*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+m,e[10]=f-g*h}else if(t.order==="XZY"){let f=o*c,p=o*l,m=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+g,e[5]=o*u,e[9]=p*h-m,e[2]=m*h-p,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uf,t,Ff)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),hi.crossVectors(n,cn),hi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),hi.crossVectors(n,cn)),hi.normalize(),br.crossVectors(cn,hi),s[0]=hi.x,s[4]=br.x,s[8]=cn.x,s[1]=hi.y,s[5]=br.y,s[9]=cn.y,s[2]=hi.z,s[6]=br.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],m=n[2],g=n[6],A=n[10],d=n[14],w=n[3],M=n[7],x=n[11],D=n[15],B=s[0],b=s[4],I=s[8],_=s[12],y=s[1],S=s[5],N=s[9],U=s[13],Q=s[2],X=s[6],G=s[10],nt=s[14],V=s[3],at=s[7],ut=s[11],gt=s[15];return r[0]=o*B+a*y+c*Q+l*V,r[4]=o*b+a*S+c*X+l*at,r[8]=o*I+a*N+c*G+l*ut,r[12]=o*_+a*U+c*nt+l*gt,r[1]=u*B+h*y+f*Q+p*V,r[5]=u*b+h*S+f*X+p*at,r[9]=u*I+h*N+f*G+p*ut,r[13]=u*_+h*U+f*nt+p*gt,r[2]=m*B+g*y+A*Q+d*V,r[6]=m*b+g*S+A*X+d*at,r[10]=m*I+g*N+A*G+d*ut,r[14]=m*_+g*U+A*nt+d*gt,r[3]=w*B+M*y+x*Q+D*V,r[7]=w*b+M*S+x*X+D*at,r[11]=w*I+M*N+x*G+D*ut,r[15]=w*_+M*U+x*nt+D*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],m=t[3],g=t[7],A=t[11],d=t[15];return m*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*p-n*c*p)+g*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+A*(+e*l*h-e*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+d*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],m=t[12],g=t[13],A=t[14],d=t[15],w=h*A*l-g*f*l+g*c*p-a*A*p-h*c*d+a*f*d,M=m*f*l-u*A*l-m*c*p+o*A*p+u*c*d-o*f*d,x=u*g*l-m*h*l+m*a*p-o*g*p-u*a*d+o*h*d,D=m*h*c-u*g*c-m*a*f+o*g*f+u*a*A-o*h*A,B=e*w+n*M+s*x+r*D;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/B;return t[0]=w*b,t[1]=(g*f*r-h*A*r-g*s*p+n*A*p+h*s*d-n*f*d)*b,t[2]=(a*A*r-g*c*r+g*s*l-n*A*l-a*s*d+n*c*d)*b,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*p-n*c*p)*b,t[4]=M*b,t[5]=(u*A*r-m*f*r+m*s*p-e*A*p-u*s*d+e*f*d)*b,t[6]=(m*c*r-o*A*r-m*s*l+e*A*l+o*s*d-e*c*d)*b,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*p+e*c*p)*b,t[8]=x*b,t[9]=(m*h*r-u*g*r-m*n*p+e*g*p+u*n*d-e*h*d)*b,t[10]=(o*g*r-m*a*r+m*n*l-e*g*l-o*n*d+e*a*d)*b,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*p-e*a*p)*b,t[12]=D*b,t[13]=(u*g*s-m*h*s+m*n*f-e*g*f-u*n*A+e*h*A)*b,t[14]=(m*a*s-o*g*s-m*n*c+e*g*c+o*n*A-e*a*A)*b,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,m=r*h,g=o*u,A=o*h,d=a*h,w=c*l,M=c*u,x=c*h,D=n.x,B=n.y,b=n.z;return s[0]=(1-(g+d))*D,s[1]=(p+x)*D,s[2]=(m-M)*D,s[3]=0,s[4]=(p-x)*B,s[5]=(1-(f+d))*B,s[6]=(A+w)*B,s[7]=0,s[8]=(m+M)*b,s[9]=(A-w)*b,s[10]=(1-(f+g))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=es.set(s[0],s[1],s[2]).length(),o=es.set(s[4],s[5],s[6]).length(),a=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);let l=1/r,u=1/o,h=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){let c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),p,m;if(a===Jn)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===eo)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){let c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*l,p=(n+s)*u,m,g;if(a===Jn)m=(o+r)*h,g=-2*h;else if(a===eo)m=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},es=new R,_n=new ue,Uf=new R(0,0,0),Ff=new R(1,1,1),hi=new R,br=new R,cn=new R,Fl=new ue,Ll=new Ve,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lf=0,Ql=new R,ns=new Ve,zn=new ue,Tr=new R,Ys=new R,Qf=new R,Nf=new Ve,Nl=new R(1,0,0),Ol=new R(0,1,0),kl=new R(0,0,1),Gl={type:"added"},Of={type:"removed"},is={type:"childadded",child:null},sa={type:"childremoved",child:null},en=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new hn,n=new Ve,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Kt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Nl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ys,Tr,this.up):zn.lookAt(Tr,Ys,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(zn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gl),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Of),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gl),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,Qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};en.DEFAULT_UP=new R(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new R,Vn=new R,ra=new R,Hn=new R,ss=new R,rs=new R,zl=new R,oa=new R,aa=new R,ca=new R,la=new Ae,ha=new Ae,ua=new Ae,Ui=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),Vn.subVectors(n,e),ra.subVectors(t,e);let o=En.dot(En),a=En.dot(Vn),c=En.dot(ra),l=Vn.dot(Vn),u=Vn.dot(ra),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(l*c-a*u)*f,m=(o*u-a*c)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return la.setScalar(0),ha.setScalar(0),ua.setScalar(0),la.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(la,r.x),o.addScaledVector(ha,r.y),o.addScaledVector(ua,r.z),o}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),Vn.subVectors(t,e),En.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),En.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ss.subVectors(s,n),rs.subVectors(r,n),oa.subVectors(t,n);let c=ss.dot(oa),l=rs.dot(oa);if(c<=0&&l<=0)return e.copy(n);aa.subVectors(t,s);let u=ss.dot(aa),h=rs.dot(aa);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ss,o);ca.subVectors(t,r);let p=ss.dot(ca),m=rs.dot(ca);if(m>=0&&p<=m)return e.copy(r);let g=p*l-c*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(rs,a);let A=u*m-p*h;if(A<=0&&h-u>=0&&p-m>=0)return zl.subVectors(r,s),a=(h-u)/(h-u+(p-m)),e.copy(s).addScaledVector(zl,a);let d=1/(A+g+f);return o=g*d,a=f*d,e.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=rl(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fa(o,r,t+1/3),this.g=fa(o,r,t),this.b=fa(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return oe.fromWorkingColorSpace(Ge.copy(this),t),Math.round(be(Ge.r*255,0,255))*65536+Math.round(be(Ge.g*255,0,255))*256+Math.round(be(Ge.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Ee){oe.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Ir);let n=$s(ui.h,Ir.h,e),s=$s(ui.s,Ir.s,e),r=$s(ui.l,Ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new $t;$t.NAMES=Oh;var kf=0,Mi=class extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Hi(),this.name="",this.blending=ps,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=ir,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ir&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_s=class extends Mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new R,Dr=new pt,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bl,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bl&&(t.usage=this.usage),t}};var oo=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ao=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gf=0,mn=new ue,da=new en,os=new R,ln=new tn,Js=new tn,Le=new R,Qe=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?ao:oo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(ln.min,Js.min),ln.expandByPoint(Le),Le.addVectors(ln.max,Js.max),ln.expandByPoint(Le)):(ln.expandByPoint(Js.min),ln.expandByPoint(Js.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Le.fromBufferAttribute(a,l),c&&(os.fromBufferAttribute(t,l),Le.add(os)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new R,c[I]=new R;let l=new R,u=new R,h=new R,f=new pt,p=new pt,m=new pt,g=new R,A=new R;function d(I,_,y){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,_),m.fromBufferAttribute(r,y),u.sub(l),h.sub(l),p.sub(f),m.sub(f);let S=1/(p.x*m.y-m.x*p.y);isFinite(S)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(S),A.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(S),a[I].add(g),a[_].add(g),a[y].add(g),c[I].add(A),c[_].add(A),c[y].add(A))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,_=w.length;I<_;++I){let y=w[I],S=y.start,N=y.count;for(let U=S,Q=S+N;U<Q;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let M=new R,x=new R,D=new R,B=new R;function b(I){D.fromBufferAttribute(s,I),B.copy(D);let _=a[I];M.copy(_),M.sub(D.multiplyScalar(D.dot(_))).normalize(),x.crossVectors(B,_);let S=x.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,S)}for(let I=0,_=w.length;I<_;++I){let y=w[I],S=y.start,N=y.count;for(let U=S,Q=S+N;U<Q;U+=3)b(t.getX(U+0)),b(t.getX(U+1)),b(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,h=new R;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),g=t.getX(f+1),A=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,A),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(A,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),p=0,m=0;for(let g=0,A=c.length;g<A;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let d=0;d<u;d++)f[m++]=l[p++]}return new je(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vl=new ue,bi=new wi,Rr=new Oi,Hl=new R,Pr=new R,Ur=new R,Fr=new R,pa=new R,Lr=new R,Wl=new R,Qr=new R,Ne=class extends en{constructor(t=new Qe,e=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(pa.fromBufferAttribute(h,t),o?Lr.addScaledVector(pa,u):Lr.addScaledVector(pa.sub(e),u))}e.add(Lr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Rr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Rr,Hl)===null||bi.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(Vl.copy(r).invert(),bi.copy(t.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let A=f[m],d=o[A.materialIndex],w=Math.max(A.start,p.start),M=Math.min(a.count,Math.min(A.start+A.count,p.start+p.count));for(let x=w,D=M;x<D;x+=3){let B=a.getX(x),b=a.getX(x+1),I=a.getX(x+2);s=Nr(this,d,t,n,l,u,h,B,b,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let A=m,d=g;A<d;A+=3){let w=a.getX(A),M=a.getX(A+1),x=a.getX(A+2);s=Nr(this,o,t,n,l,u,h,w,M,x),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let A=f[m],d=o[A.materialIndex],w=Math.max(A.start,p.start),M=Math.min(c.count,Math.min(A.start+A.count,p.start+p.count));for(let x=w,D=M;x<D;x+=3){let B=x,b=x+1,I=x+2;s=Nr(this,d,t,n,l,u,h,B,b,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let A=m,d=g;A<d;A+=3){let w=A,M=A+1,x=A+2;s=Nr(this,o,t,n,l,u,h,w,M,x),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}}};function zf(i,t,e,n,s,r,o,a){let c;if(t.side===ze?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Un,a),c===null)return null;Qr.copy(a),Qr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Qr);return l<e.near||l>e.far?null:{distance:l,point:Qr.clone(),object:i}}function Nr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Pr),i.getVertexPosition(c,Ur),i.getVertexPosition(l,Fr);let u=zf(i,t,e,n,Pr,Ur,Fr,Wl);if(u){let h=new R;Ui.getBarycoord(Wl,Pr,Ur,Fr,h),s&&(u.uv=Ui.getInterpolatedAttribute(s,a,c,l,h,new pt)),r&&(u.uv1=Ui.getInterpolatedAttribute(r,a,c,l,h,new pt)),o&&(u.normal=Ui.getInterpolatedAttribute(o,a,c,l,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new R,materialIndex:0};Ui.getNormal(Pr,Ur,Fr,f.normal),u.face=f,u.barycoord=h}return u}var ki=class i extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(h,2));function m(g,A,d,w,M,x,D,B,b,I,_){let y=x/b,S=D/I,N=x/2,U=D/2,Q=B/2,X=b+1,G=I+1,nt=0,V=0,at=new R;for(let ut=0;ut<G;ut++){let gt=ut*S-U;for(let kt=0;kt<X;kt++){let Mt=kt*y-N;at[g]=Mt*w,at[A]=gt*M,at[d]=Q,l.push(at.x,at.y,at.z),at[g]=0,at[A]=0,at[d]=B>0?1:-1,u.push(at.x,at.y,at.z),h.push(kt/b),h.push(1-ut/I),nt+=1}}for(let ut=0;ut<I;ut++)for(let gt=0;gt<b;gt++){let kt=f+gt+X*ut,Mt=f+gt+X*(ut+1),Y=f+(gt+1)+X*(ut+1),it=f+(gt+1)+X*ut;c.push(kt,Mt,it),c.push(Mt,Y,it),V+=6}a.addGroup(p,V,_),p+=V,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=Es(i[e]);for(let s in n)t[s]=n[s]}return t}function Vf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Hf={clone:Es,merge:Ke},Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},co=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fi=new R,Yl=new pt,Jl=new pt,Te=class extends co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,Yl,Jl),e.subVectors(Jl,Yl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},as=-90,cs=1,pc=class extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Te(as,cs,t,e);s.layers=this.layers,this.add(s);let r=new Te(as,cs,t,e);r.layers=this.layers,this.add(r);let o=new Te(as,cs,t,e);o.layers=this.layers,this.add(o);let a=new Te(as,cs,t,e);a.layers=this.layers,this.add(a);let c=new Te(as,cs,t,e);c.layers=this.layers,this.add(c);let l=new Te(as,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},lo=class extends $e{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ac=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ki(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Ai});r.uniforms.tEquirect.value=e;let o=new Ne(s,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=gn),new pc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Aa=new R,Jf=new R,Xf=new Kt,Yn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Aa.subVectors(n,e).cross(Jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xf.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new Oi,Or=new R,or=class{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],p=s[8],m=s[9],g=s[10],A=s[11],d=s[12],w=s[13],M=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,A-p,x-d).normalize(),n[1].setComponents(c+r,f+l,A+p,x+d).normalize(),n[2].setComponents(c+o,f+u,A+m,x+w).normalize(),n[3].setComponents(c-o,f-u,A-m,x-w).normalize(),n[4].setComponents(c-a,f-h,A-g,x-M).normalize(),e===Jn)n[5].setComponents(c+a,f+h,A+g,x+M).normalize();else if(e===eo)n[5].setComponents(a,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qf(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<h.length;p++){let m=h[f],g=h[p];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,h[f]=g)}h.length=f+1;for(let p=0,m=h.length;p<m;p++){let g=h[p];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var vi=class i extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,p=[],m=[],g=[],A=[];for(let d=0;d<u;d++){let w=d*f-o;for(let M=0;M<l;M++){let x=M*h-r;m.push(x,-w,0),g.push(0,0,1),A.push(M/a),A.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<a;w++){let M=w+l*d,x=w+l*(d+1),D=w+1+l*(d+1),B=w+1+l*d;p.push(M,x,B),p.push(x,D,B)}this.setIndex(p),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nd=`#ifdef USE_AOMAP
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
#endif`,id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ld=`#ifdef USE_IRIDESCENCE
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
#endif`,hd=`#ifdef USE_BUMPMAP
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
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
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
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
}`,Nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Xd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rp=`#if defined( USE_POINTS_UV )
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
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`#include <common>
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
}`,nA=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iA=`#define DISTANCE
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
}`,sA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
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
}`,cA=`uniform vec3 diffuse;
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
}`,lA=`#include <common>
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
}`,hA=`uniform vec3 diffuse;
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
}`,uA=`#define LAMBERT
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
}`,fA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,dA=`#define MATCAP
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
}`,pA=`#define MATCAP
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
}`,AA=`#define NORMAL
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
}`,mA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gA=`#define PHONG
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
}`,xA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wA=`#define STANDARD
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
}`,MA=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,vA=`#define TOON
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
}`,yA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_A=`uniform float size;
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
}`,EA=`uniform vec3 diffuse;
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
}`,BA=`#include <common>
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
}`,CA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,SA=`uniform float rotation;
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
}`,bA=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Kf,alphahash_pars_fragment:Zf,alphamap_fragment:jf,alphamap_pars_fragment:$f,alphatest_fragment:td,alphatest_pars_fragment:ed,aomap_fragment:nd,aomap_pars_fragment:id,batching_pars_vertex:sd,batching_vertex:rd,begin_vertex:od,beginnormal_vertex:ad,bsdfs:cd,iridescence_fragment:ld,bumpmap_pars_fragment:hd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:dd,clipping_planes_vertex:pd,color_fragment:Ad,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:xd,common:wd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:vd,displacementmap_pars_vertex:yd,displacementmap_vertex:_d,emissivemap_fragment:Ed,emissivemap_pars_fragment:Bd,colorspace_fragment:Cd,colorspace_pars_fragment:Sd,envmap_fragment:bd,envmap_common_pars_fragment:Td,envmap_pars_fragment:Id,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:zd,envmap_vertex:Rd,fog_vertex:Pd,fog_pars_vertex:Ud,fog_fragment:Fd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:Nd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:kd,lights_pars_begin:Gd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Hd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Yd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Xd,lights_fragment_begin:qd,lights_fragment_maps:Kd,lights_fragment_end:Zd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:ep,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:sp,map_particle_pars_fragment:rp,metalnessmap_fragment:op,metalnessmap_pars_fragment:ap,morphinstance_vertex:cp,morphcolor_vertex:lp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:fp,normal_fragment_begin:dp,normal_fragment_maps:pp,normal_pars_fragment:Ap,normal_pars_vertex:mp,normal_vertex:gp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:yp,opaque_fragment:_p,packing:Ep,premultiplied_alpha_fragment:Bp,project_vertex:Cp,dithering_fragment:Sp,dithering_pars_fragment:bp,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Rp,shadowmap_vertex:Pp,shadowmask_pars_fragment:Up,skinbase_vertex:Fp,skinning_pars_vertex:Lp,skinning_vertex:Qp,skinnormal_vertex:Np,specularmap_fragment:Op,specularmap_pars_fragment:kp,tonemapping_fragment:Gp,tonemapping_pars_fragment:zp,transmission_fragment:Vp,transmission_pars_fragment:Hp,uv_pars_fragment:Wp,uv_pars_vertex:Yp,uv_vertex:Jp,worldpos_vertex:Xp,background_vert:qp,background_frag:Kp,backgroundCube_vert:Zp,backgroundCube_frag:jp,cube_vert:$p,cube_frag:tA,depth_vert:eA,depth_frag:nA,distanceRGBA_vert:iA,distanceRGBA_frag:sA,equirect_vert:rA,equirect_frag:oA,linedashed_vert:aA,linedashed_frag:cA,meshbasic_vert:lA,meshbasic_frag:hA,meshlambert_vert:uA,meshlambert_frag:fA,meshmatcap_vert:dA,meshmatcap_frag:pA,meshnormal_vert:AA,meshnormal_frag:mA,meshphong_vert:gA,meshphong_frag:xA,meshphysical_vert:wA,meshphysical_frag:MA,meshtoon_vert:vA,meshtoon_frag:yA,points_vert:_A,points_frag:EA,shadow_vert:BA,shadow_frag:CA,sprite_vert:SA,sprite_frag:bA},St={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Rn={basic:{uniforms:Ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ke([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ke([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ke([St.points,St.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ke([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ke([St.common,St.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ke([St.sprite,St.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ke([St.common,St.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ke([St.lights,St.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Rn.physical={uniforms:Ke([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var kr={r:0,b:0,g:0},Ii=new hn,TA=new ue;function IA(i,t,e,n,s,r,o){let a=new $t(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function m(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function g(w){let M=!1,x=m(w);x===null?d(a,c):x&&x.isColor&&(d(x,1),M=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(w,M){let x=m(M);x&&(x.isCubeTexture||x.mapping===Lo)?(u===void 0&&(u=new Ne(new ki(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Es(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,B,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ii.copy(M.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(TA.makeRotationFromEuler(Ii)),u.material.toneMapped=oe.getTransfer(x.colorSpace)!==de,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ne(new vi(2,2),new nn({name:"BackgroundMaterial",uniforms:Es(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function d(w,M){w.getRGB(kr,kh(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(a,c)},render:g,addToRenderList:A}}function DA(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,S,N,U,Q){let X=!1,G=h(U,N,S);r!==G&&(r=G,l(r.object)),X=p(y,U,N,Q),X&&m(y,U,N,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(y,S,N,U),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,S,N){let U=N.wireframe===!0,Q=n[y.id];Q===void 0&&(Q={},n[y.id]=Q);let X=Q[S.id];X===void 0&&(X={},Q[S.id]=X);let G=X[U];return G===void 0&&(G=f(c()),X[U]=G),G}function f(y){let S=[],N=[],U=[];for(let Q=0;Q<e;Q++)S[Q]=0,N[Q]=0,U[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:U,object:y,attributes:{},index:null}}function p(y,S,N,U){let Q=r.attributes,X=S.attributes,G=0,nt=N.getAttributes();for(let V in nt)if(nt[V].location>=0){let ut=Q[V],gt=X[V];if(gt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),ut===void 0||ut.attribute!==gt||gt&&ut.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function m(y,S,N,U){let Q={},X=S.attributes,G=0,nt=N.getAttributes();for(let V in nt)if(nt[V].location>=0){let ut=X[V];ut===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));let gt={};gt.attribute=ut,ut&&ut.data&&(gt.data=ut.data),Q[V]=gt,G++}r.attributes=Q,r.attributesNum=G,r.index=U}function g(){let y=r.newAttributes;for(let S=0,N=y.length;S<N;S++)y[S]=0}function A(y){d(y,0)}function d(y,S){let N=r.newAttributes,U=r.enabledAttributes,Q=r.attributeDivisors;N[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),Q[y]!==S&&(i.vertexAttribDivisor(y,S),Q[y]=S)}function w(){let y=r.newAttributes,S=r.enabledAttributes;for(let N=0,U=S.length;N<U;N++)S[N]!==y[N]&&(i.disableVertexAttribArray(N),S[N]=0)}function M(y,S,N,U,Q,X,G){G===!0?i.vertexAttribIPointer(y,S,N,Q,X):i.vertexAttribPointer(y,S,N,U,Q,X)}function x(y,S,N,U){g();let Q=U.attributes,X=N.getAttributes(),G=S.defaultAttributeValues;for(let nt in X){let V=X[nt];if(V.location>=0){let at=Q[nt];if(at===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){let ut=at.normalized,gt=at.itemSize,kt=t.get(at);if(kt===void 0)continue;let Mt=kt.buffer,Y=kt.type,it=kt.bytesPerElement,It=Y===i.INT||Y===i.UNSIGNED_INT||at.gpuType===Zc;if(at.isInterleavedBufferAttribute){let $=at.data,Et=$.stride,wt=at.offset;if($.isInstancedInterleavedBuffer){for(let Bt=0;Bt<V.locationSize;Bt++)d(V.location+Bt,$.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Bt=0;Bt<V.locationSize;Bt++)A(V.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Bt=0;Bt<V.locationSize;Bt++)M(V.location+Bt,gt/V.locationSize,Y,ut,Et*it,(wt+gt/V.locationSize*Bt)*it,It)}else{if(at.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)d(V.location+$,at.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let $=0;$<V.locationSize;$++)A(V.location+$);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let $=0;$<V.locationSize;$++)M(V.location+$,gt/V.locationSize,Y,ut,gt*it,gt/V.locationSize*$*it,It)}}else if(G!==void 0){let ut=G[nt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(V.location,ut);break;case 3:i.vertexAttrib3fv(V.location,ut);break;case 4:i.vertexAttrib4fv(V.location,ut);break;default:i.vertexAttrib1fv(V.location,ut)}}}}w()}function D(){I();for(let y in n){let S=n[y];for(let N in S){let U=S[N];for(let Q in U)u(U[Q].object),delete U[Q];delete S[N]}delete n[y]}}function B(y){if(n[y.id]===void 0)return;let S=n[y.id];for(let N in S){let U=S[N];for(let Q in U)u(U[Q].object),delete U[Q];delete S[N]}delete n[y.id]}function b(y){for(let S in n){let N=n[S];if(N[y.id]===void 0)continue;let U=N[y.id];for(let Q in U)u(U[Q].object),delete U[Q];delete N[y.id]}}function I(){_(),o=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:_,dispose:D,releaseStatesOfGeometry:B,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:A,disableUnusedAttributes:w}}function RA(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];e.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g]*f[g];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function PA(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Cn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let I=b===fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Sn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Pn&&!I)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:A,maxAttributes:d,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:D,maxSamples:B}}function UA(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Yn,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let m=h.clippingPlanes,g=h.clipIntersection,A=h.clipShadows,d=i.get(h);if(!s||m===null||m.length===0||r&&!A)r?u(null):l();else{let w=r?0:n,M=w*4,x=d.clippingState||null;c.value=x,x=u(m,f,M,p);for(let D=0;D!==M;++D)x[D]=e[D];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,m){let g=h!==null?h.length:0,A=null;if(g!==0){if(A=c.value,m!==!0||A===null){let d=p+g*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(A===null||A.length<d)&&(A=new Float32Array(d));for(let M=0,x=p;M!==g;++M,x+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(A,x),A[x+3]=o.constant}c.value=A,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,A}}function FA(i){let t=new WeakMap;function e(o,a){return a===Ua?o.mapping=ws:a===Fa&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ua||a===Fa)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ac(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var yi=class extends co{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fs=4,Xl=[.125,.215,.35,.446,.526,.582],Fi=20,ma=new yi,ql=new $t,ga=null,xa=0,wa=0,Ma=!1,Ri=(1+Math.sqrt(5))/2,ls=1/Ri,Kl=[new R(-Ri,ls,0),new R(Ri,ls,0),new R(-ls,0,Ri),new R(ls,0,Ri),new R(0,Ri,-ls),new R(0,Ri,ls),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ga=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,xa,wa),this._renderer.xr.enabled=Ma,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:fr,format:Cn,colorSpace:Ts,depthBuffer:!1},s=Zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LA(r)),this._blurMaterial=QA(r,t,e)}return s}_compileMaterial(t){let e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,n,s){let a=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ql),u.toneMapping=mi,u.autoClear=!1;let p=new _s({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),m=new Ne(new ki,p),g=!1,A=t.background;A?A.isColor&&(p.color.copy(A),t.background=null,g=!0):(p.color.copy(ql),g=!0);for(let d=0;d<6;d++){let w=d%3;w===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):w===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let M=this._cubeSize;Gr(s,w*M,d>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ws||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Gr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ma)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kl[(s-r-1)%Kl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ne(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),g=r/m,A=isFinite(r)?1+Math.floor(u*g):Fi;A>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${Fi}`);let d=[],w=0;for(let b=0;b<Fi;++b){let I=b/g,_=Math.exp(-I*I/2);d.push(_),b===0?w+=_:b<A&&(w+=2*_)}for(let b=0;b<d.length;b++)d[b]=d[b]/w;f.envMap.value=t.texture,f.samples.value=A,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;let x=this._sizeLods[s],D=3*x*(s>M-fs?s-M+fs:0),B=4*(this._cubeSize-x);Gr(e,D,B,3*x,2*x),c.setRenderTarget(e),c.render(h,ma)}};function LA(i){let t=[],e=[],n=[],s=i,r=i-fs+1+Xl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-fs?c=Xl[o-i+fs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,g=3,A=2,d=1,w=new Float32Array(g*m*p),M=new Float32Array(A*m*p),x=new Float32Array(d*m*p);for(let B=0;B<p;B++){let b=B%3*2/3-1,I=B>2?0:-1,_=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];w.set(_,g*m*B),M.set(f,A*m*B);let y=[B,B,B,B,B,B];x.set(y,d*m*B)}let D=new Qe;D.setAttribute("position",new je(w,g)),D.setAttribute("uv",new je(M,A)),D.setAttribute("faceIndex",new je(x,d)),t.push(D),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zl(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function QA(i,t,e){let n=new Float32Array(Fi),s=new R(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function jl(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function $l(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NA(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ua||c===Fa,u=c===ws||c===Ms;if(l||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Bs(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Bs(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function OA(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kA(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let g=f.morphAttributes[m];for(let A=0,d=g.length;A<d;A++)t.remove(g[A])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let m in p){let g=p[m];for(let A=0,d=g.length;A<d;A++)t.update(g[A],i.ARRAY_BUFFER)}}function l(h){let f=[],p=h.index,m=h.attributes.position,g=0;if(p!==null){let w=p.array;g=p.version;for(let M=0,x=w.length;M<x;M+=3){let D=w[M+0],B=w[M+1],b=w[M+2];f.push(D,B,B,b,b,D)}}else if(m!==void 0){let w=m.array;g=m.version;for(let M=0,x=w.length/3-1;M<x;M+=3){let D=M+0,B=M+1,b=M+2;f.push(D,B,B,b,b,D)}}else return;let A=new(Nh(f)?ao:oo)(f,1);A.version=g;let d=r.get(h);d&&t.remove(d),r.set(h,A)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function GA(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,f*o,m),e.update(p,n,m))}function u(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let A=0;for(let d=0;d<m;d++)A+=p[d];e.update(A,n,1)}function h(f,p,m,g){if(m===0)return;let A=t.get("WEBGL_multi_draw");if(A===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],g[d]);else{A.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,g,0,m);let d=0;for(let w=0;w<m;w++)d+=p[w]*g[w];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zA(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function VA(i,t,e){let n=new WeakMap,s=new Ae;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let _=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,A=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),g===!0&&(M=3);let x=a.attributes.position.count*M,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let B=new Float32Array(x*D*4*h),b=new so(B,x,D,h);b.type=Pn,b.needsUpdate=!0;let I=M*4;for(let y=0;y<h;y++){let S=A[y],N=d[y],U=w[y],Q=x*D*4*y;for(let X=0;X<S.count;X++){let G=X*I;p===!0&&(s.fromBufferAttribute(S,X),B[Q+G+0]=s.x,B[Q+G+1]=s.y,B[Q+G+2]=s.z,B[Q+G+3]=0),m===!0&&(s.fromBufferAttribute(N,X),B[Q+G+4]=s.x,B[Q+G+5]=s.y,B[Q+G+6]=s.z,B[Q+G+7]=0),g===!0&&(s.fromBufferAttribute(U,X),B[Q+G+8]=s.x,B[Q+G+9]=s.y,B[Q+G+10]=s.z,B[Q+G+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:b,size:new pt(x,D)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function HA(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ho=class extends $e{constructor(t,e,n,s,r,o,a,c,l,u=As){if(u!==As&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===As&&(n=Ni),n===void 0&&u===ys&&(n=vs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zh=new $e,th=new ho(1,1),Vh=new so,Hh=new dc,Wh=new lo,eh=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function Is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=eh[s];if(r===void 0&&(r=new Float32Array(s),eh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function No(i,t){let e=nh[t];e===void 0&&(e=new Int32Array(t),nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function WA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function YA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function JA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function XA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function qA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),De(e,n)}}function KA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;sh.set(n),i.uniformMatrix3fv(this.addr,!1,sh),De(e,n)}}function ZA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),De(e,n)}}function jA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $A(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(th.compareFunction=Qh,r=th):r=zh,e.setTexture2D(t||r,s)}function am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hh,s)}function cm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wh,s)}function lm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vh,s)}function hm(i){switch(i){case 5126:return WA;case 35664:return YA;case 35665:return JA;case 35666:return XA;case 35674:return qA;case 35675:return KA;case 35676:return ZA;case 5124:case 35670:return jA;case 35667:case 35671:return $A;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return lm}}function um(i,t){i.uniform1fv(this.addr,t)}function fm(i,t){let e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function dm(i,t){let e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function pm(i,t){let e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function Am(i,t){let e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mm(i,t){let e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gm(i,t){let e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xm(i,t){i.uniform1iv(this.addr,t)}function wm(i,t){i.uniform2iv(this.addr,t)}function Mm(i,t){i.uniform3iv(this.addr,t)}function vm(i,t){i.uniform4iv(this.addr,t)}function ym(i,t){i.uniform1uiv(this.addr,t)}function _m(i,t){i.uniform2uiv(this.addr,t)}function Em(i,t){i.uniform3uiv(this.addr,t)}function Bm(i,t){i.uniform4uiv(this.addr,t)}function Cm(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zh,r[o])}function Sm(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hh,r[o])}function bm(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Wh,r[o])}function Tm(i,t,e){let n=this.cache,s=t.length,r=No(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vh,r[o])}function Im(i){switch(i){case 5126:return um;case 35664:return fm;case 35665:return dm;case 35666:return pm;case 35674:return Am;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return xm;case 35667:case 35671:return wm;case 35668:case 35672:return Mm;case 35669:case 35673:return vm;case 5125:return ym;case 36294:return _m;case 36295:return Em;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Tm}}var mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hm(e.type)}},gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Im(e.type)}},xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},va=/(\w+)(\])?(\[|\.)?/g;function oh(i,t){i.seq.push(t),i.map[t.id]=t}function Dm(i,t,e){let n=i.name,s=n.length;for(va.lastIndex=0;;){let r=va.exec(n),o=va.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){oh(e,l===void 0?new mc(a,i,t):new gc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new xc(a),oh(e,h)),e=h}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Dm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ah(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rm=37297,Pm=0;function Um(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ch=new Kt;function Fm(i){oe._getMatrix(ch,oe.workingColorSpace,i);let t=`mat3( ${ch.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Qo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Um(i.getShaderSource(t),o)}else return s}function Lm(i,t){let e=Fm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qm(i,t){let e;switch(t){case Ju:e="Linear";break;case Xu:e="Reinhard";break;case qu:e="Cineon";break;case Ku:e="ACESFilmic";break;case ju:e="AgX";break;case Kn:e="Neutral";break;case Zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zr=new R;function Nm(){oe.getLuminanceCoefficients(zr);let i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function km(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zs(i){return i!==""}function hh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(zm,Hm)}var Vm=new Map;function Hm(i,t){let e=jt[t];if(e===void 0){let n=Vm.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}var Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(Wm,Ym)}function Ym(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Jm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Xm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Ms:t="ENVMAP_TYPE_CUBE";break;case Lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function Km(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kc:t="ENVMAP_BLENDING_MULTIPLY";break;case Wu:t="ENVMAP_BLENDING_MIX";break;case Yu:t="ENVMAP_BLENDING_ADD";break}return t}function Zm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Jm(e),l=Xm(e),u=qm(e),h=Km(e),f=Zm(e),p=Om(e),m=km(r),g=s.createProgram(),A,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),A.length>0&&(A+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),d.length>0&&(d+=`
`)):(A=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),d=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?jt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Lm("linearToOutputTexel",e.outputColorSpace),Nm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=wc(o),o=hh(o,e),o=uh(o,e),a=wc(a),a=hh(a,e),a=uh(a,e),o=fh(o),a=fh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,A=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,d=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=w+A+o,x=w+d+a,D=ah(s,s.VERTEX_SHADER,M),B=ah(s,s.FRAGMENT_SHADER,x);s.attachShader(g,D),s.attachShader(g,B),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(S){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g).trim(),U=s.getShaderInfoLog(D).trim(),Q=s.getShaderInfoLog(B).trim(),X=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,D,B);else{let nt=lh(s,D,"vertex"),V=lh(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+nt+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||Q==="")&&(G=!1);G&&(S.diagnostics={runnable:X,programLog:N,vertexShader:{log:U,prefix:A},fragmentShader:{log:Q,prefix:d}})}s.deleteShader(D),s.deleteShader(B),I=new gs(s,g),_=Gm(s,g)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,Rm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=B,this}var $m=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vc(t),e.set(t,n)),n}},vc=class{constructor(t){this.id=$m++,this.code=t,this.usedTimes=0}};function tg(i,t,e,n,s,r,o){let a=new ro,c=new Mc,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function A(_,y,S,N,U){let Q=N.fog,X=U.geometry,G=_.isMeshStandardMaterial?N.environment:null,nt=(_.isMeshStandardMaterial?e:t).get(_.envMap||G),V=nt&&nt.mapping===Lo?nt.image.height:null,at=m[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=ut!==void 0?ut.length:0,kt=0;X.morphAttributes.position!==void 0&&(kt=1),X.morphAttributes.normal!==void 0&&(kt=2),X.morphAttributes.color!==void 0&&(kt=3);let Mt,Y,it,It;if(at){let se=Rn[at];Mt=se.vertexShader,Y=se.fragmentShader}else Mt=_.vertexShader,Y=_.fragmentShader,c.update(_),it=c.getVertexShaderID(_),It=c.getFragmentShaderID(_);let $=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),wt=U.isInstancedMesh===!0,Bt=U.isBatchedMesh===!0,zt=!!_.map,K=!!_.matcap,j=!!nt,T=!!_.aoMap,Dt=!!_.lightMap,st=!!_.bumpMap,vt=!!_.normalMap,ft=!!_.displacementMap,Nt=!!_.emissiveMap,At=!!_.metalnessMap,C=!!_.roughnessMap,v=_.anisotropy>0,O=_.clearcoat>0,Z=_.dispersion>0,z=_.iridescence>0,q=_.sheen>0,xt=_.transmission>0,ct=v&&!!_.anisotropyMap,yt=O&&!!_.clearcoatMap,Zt=O&&!!_.clearcoatNormalMap,lt=O&&!!_.clearcoatRoughnessMap,Rt=z&&!!_.iridescenceMap,Ot=z&&!!_.iridescenceThicknessMap,rt=q&&!!_.sheenColorMap,ht=q&&!!_.sheenRoughnessMap,bt=!!_.specularMap,Gt=!!_.specularColorMap,Xt=!!_.specularIntensityMap,P=xt&&!!_.transmissionMap,Ct=xt&&!!_.thicknessMap,J=!!_.gradientMap,et=!!_.alphaMap,_t=_.alphaTest>0,mt=!!_.alphaHash,Yt=!!_.extensions,le=mi;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(le=i.toneMapping);let we={shaderID:at,shaderType:_.type,shaderName:_.name,vertexShader:Mt,fragmentShader:Y,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:It,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&U._colorsTexture!==null,instancing:wt,instancingColor:wt&&U.instanceColor!==null,instancingMorph:wt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ts,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:K,envMap:j,envMapMode:j&&nt.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:Dt,bumpMap:st,normalMap:vt,displacementMap:f&&ft,emissiveMap:Nt,normalMapObjectSpace:vt&&_.normalMapType===nf,normalMapTangentSpace:vt&&_.normalMapType===sl,metalnessMap:At,roughnessMap:C,anisotropy:v,anisotropyMap:ct,clearcoat:O,clearcoatMap:yt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:lt,dispersion:Z,iridescence:z,iridescenceMap:Rt,iridescenceThicknessMap:Ot,sheen:q,sheenColorMap:rt,sheenRoughnessMap:ht,specularMap:bt,specularColorMap:Gt,specularIntensityMap:Xt,transmission:xt,transmissionMap:P,thicknessMap:Ct,gradientMap:J,opaque:_.transparent===!1&&_.blending===ps&&_.alphaToCoverage===!1,alphaMap:et,alphaTest:_t,alphaHash:mt,combine:_.combine,mapUv:zt&&g(_.map.channel),aoMapUv:T&&g(_.aoMap.channel),lightMapUv:Dt&&g(_.lightMap.channel),bumpMapUv:st&&g(_.bumpMap.channel),normalMapUv:vt&&g(_.normalMap.channel),displacementMapUv:ft&&g(_.displacementMap.channel),emissiveMapUv:Nt&&g(_.emissiveMap.channel),metalnessMapUv:At&&g(_.metalnessMap.channel),roughnessMapUv:C&&g(_.roughnessMap.channel),anisotropyMapUv:ct&&g(_.anisotropyMap.channel),clearcoatMapUv:yt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ht&&g(_.sheenRoughnessMap.channel),specularMapUv:bt&&g(_.specularMap.channel),specularColorMapUv:Gt&&g(_.specularColorMap.channel),specularIntensityMapUv:Xt&&g(_.specularIntensityMap.channel),transmissionMapUv:P&&g(_.transmissionMap.channel),thicknessMapUv:Ct&&g(_.thicknessMap.channel),alphaMapUv:et&&g(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(vt||v),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(zt||et),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Et,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Bn,flipSided:_.side===ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function d(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let S in _.defines)y.push(S),y.push(_.defines[S]);return _.isRawShaderMaterial===!1&&(w(y,_),M(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function w(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function M(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),_.push(a.mask)}function x(_){let y=m[_.type],S;if(y){let N=Rn[y];S=Hf.clone(N.uniforms)}else S=_.uniforms;return S}function D(_,y){let S;for(let N=0,U=u.length;N<U;N++){let Q=u[N];if(Q.cacheKey===y){S=Q,++S.usedTimes;break}}return S===void 0&&(S=new jm(i,y,_,r),u.push(S)),S}function B(_){if(--_.usedTimes===0){let y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function b(_){c.remove(_)}function I(){c.dispose()}return{getParameters:A,getProgramCacheKey:d,getUniforms:x,acquireProgram:D,releaseProgram:B,releaseShaderCache:b,programs:u,dispose:I}}function eg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ng(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ph(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ah(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,p,m,g,A){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:m,renderOrder:h.renderOrder,z:g,group:A},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=g,d.group=A),t++,d}function a(h,f,p,m,g,A){let d=o(h,f,p,m,g,A);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(h,f,p,m,g,A){let d=o(h,f,p,m,g,A);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||ng),n.length>1&&n.sort(f||ph),s.length>1&&s.sort(f||ph)}function u(){for(let h=t,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function ig(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ah,i.set(n,[o])):s>=r.length?(o=new Ah,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function sg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new $t};break;case"SpotLight":e={position:new R,direction:new R,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function rg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var og=0;function ag(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cg(i){let t=new sg,e=rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new ue,o=new ue;function a(l){let u=0,h=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,m=0,g=0,A=0,d=0,w=0,M=0,x=0,D=0,B=0,b=0;l.sort(ag);for(let _=0,y=l.length;_<y;_++){let S=l[_],N=S.color,U=S.intensity,Q=S.distance,X=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=N.r*U,h+=N.g*U,f+=N.b*U;else if(S.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(S.sh.coefficients[G],U);b++}else if(S.isDirectionalLight){let G=t.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let nt=S.shadow,V=e.get(S);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=S.shadow.matrix,w++}n.directional[p]=G,p++}else if(S.isSpotLight){let G=t.get(S);G.position.setFromMatrixPosition(S.matrixWorld),G.color.copy(N).multiplyScalar(U),G.distance=Q,G.coneCos=Math.cos(S.angle),G.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),G.decay=S.decay,n.spot[g]=G;let nt=S.shadow;if(S.map&&(n.spotLightMap[D]=S.map,D++,nt.updateMatrices(S),S.castShadow&&B++),n.spotLightMatrix[g]=nt.matrix,S.castShadow){let V=e.get(S);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=X,x++}g++}else if(S.isRectAreaLight){let G=t.get(S);G.color.copy(N).multiplyScalar(U),G.halfWidth.set(S.width*.5,0,0),G.halfHeight.set(0,S.height*.5,0),n.rectArea[A]=G,A++}else if(S.isPointLight){let G=t.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),G.distance=S.distance,G.decay=S.decay,S.castShadow){let nt=S.shadow,V=e.get(S);V.shadowIntensity=nt.intensity,V.shadowBias=nt.bias,V.shadowNormalBias=nt.normalBias,V.shadowRadius=nt.radius,V.shadowMapSize=nt.mapSize,V.shadowCameraNear=nt.camera.near,V.shadowCameraFar=nt.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=S.shadow.matrix,M++}n.point[m]=G,m++}else if(S.isHemisphereLight){let G=t.get(S);G.skyColor.copy(S.color).multiplyScalar(U),G.groundColor.copy(S.groundColor).multiplyScalar(U),n.hemi[d]=G,d++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==g||I.rectAreaLength!==A||I.hemiLength!==d||I.numDirectionalShadows!==w||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==D||I.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=A,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+D-B,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=b,I.directionalLength=p,I.pointLength=m,I.spotLength=g,I.rectAreaLength=A,I.hemiLength=d,I.numDirectionalShadows=w,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=D,I.numLightProbes=b,n.version=og++)}function c(l,u){let h=0,f=0,p=0,m=0,g=0,A=u.matrixWorldInverse;for(let d=0,w=l.length;d<w;d++){let M=l[d];if(M.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(A),h++}else if(M.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(A),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(A),p++}else if(M.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(A),o.identity(),r.copy(M.matrixWorld),r.premultiply(A),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(A),f++}else if(M.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(A),g++}}}return{setup:a,setupView:c,state:n}}function mh(i){let t=new cg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function lg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mh(i),t.set(s,[a])):r>=o.length?(a=new mh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var yc=class extends Mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_c=class extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fg(i,t,e){let n=new or,s=new pt,r=new pt,o=new Ae,a=new yc({depthPacking:ef}),c=new _c,l={},u=e.maxTextureSize,h={[Un]:ze,[ze]:Un,[Bn]:Bn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:hg,fragmentShader:ug}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Qe;m.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ne(m,f),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let d=this.type;this.render=function(B,b,I){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||B.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ai),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=d!==Wn&&this.type===Wn,Q=d===Wn&&this.type!==Wn;for(let X=0,G=B.length;X<G;X++){let nt=B[X],V=nt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let at=V.getFrameExtents();if(s.multiply(at),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,V.mapSize.y=r.y)),V.map===null||U===!0||Q===!0){let gt=this.type!==Wn?{minFilter:Ze,magFilter:Ze}:{};V.map!==null&&V.map.dispose(),V.map=new bn(s.x,s.y,gt),V.map.texture.name=nt.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ut=V.getViewportCount();for(let gt=0;gt<ut;gt++){let kt=V.getViewport(gt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),N.viewport(o),V.updateMatrices(nt,gt),n=V.getFrustum(),x(b,I,V.camera,nt,this.type)}V.isPointLightShadow!==!0&&this.type===Wn&&w(V,I),V.needsUpdate=!1}d=this.type,A.needsUpdate=!1,i.setRenderTarget(_,y,S)};function w(B,b){let I=t.update(g);f.defines.VSM_SAMPLES!==B.blurSamples&&(f.defines.VSM_SAMPLES=B.blurSamples,p.defines.VSM_SAMPLES=B.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new bn(s.x,s.y)),f.uniforms.shadow_pass.value=B.map.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(b,null,I,f,g,null),p.uniforms.shadow_pass.value=B.mapPass.texture,p.uniforms.resolution.value=B.mapSize,p.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(b,null,I,p,g,null)}function M(B,b,I,_){let y=null,S=I.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(S!==void 0)y=S;else if(y=I.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let N=y.uuid,U=b.uuid,Q=l[N];Q===void 0&&(Q={},l[N]=Q);let X=Q[U];X===void 0&&(X=y.clone(),Q[U]=X,b.addEventListener("dispose",D)),y=X}if(y.visible=b.visible,y.wireframe=b.wireframe,_===Wn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=i.properties.get(y);N.light=I}return y}function x(B,b,I,_,y){if(B.visible===!1)return;if(B.layers.test(b.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&y===Wn)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,B.matrixWorld);let U=t.update(B),Q=B.material;if(Array.isArray(Q)){let X=U.groups;for(let G=0,nt=X.length;G<nt;G++){let V=X[G],at=Q[V.materialIndex];if(at&&at.visible){let ut=M(B,at,_,y);B.onBeforeShadow(i,B,b,I,U,ut,V),i.renderBufferDirect(I,null,U,ut,B,V),B.onAfterShadow(i,B,b,I,U,ut,V)}}}else if(Q.visible){let X=M(B,Q,_,y);B.onBeforeShadow(i,B,b,I,U,X,null),i.renderBufferDirect(I,null,U,X,B,null),B.onAfterShadow(i,B,b,I,U,X,null)}}let N=B.children;for(let U=0,Q=N.length;U<Q;U++)x(N[U],b,I,_,y)}function D(B){B.target.removeEventListener("dispose",D);for(let I in l){let _=l[I],y=B.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var dg={[Sa]:ba,[Ta]:Ra,[Ia]:Pa,[xs]:Da,[ba]:Sa,[Ra]:Ta,[Pa]:Ia,[Da]:xs};function pg(i,t){function e(){let P=!1,Ct=new Ae,J=null,et=new Ae(0,0,0,0);return{setMask:function(_t){J!==_t&&!P&&(i.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){P=_t},setClear:function(_t,mt,Yt,le,we){we===!0&&(_t*=le,mt*=le,Yt*=le),Ct.set(_t,mt,Yt,le),et.equals(Ct)===!1&&(i.clearColor(_t,mt,Yt,le),et.copy(Ct))},reset:function(){P=!1,J=null,et.set(-1,0,0,0)}}}function n(){let P=!1,Ct=!1,J=null,et=null,_t=null;return{setReversed:function(mt){if(Ct!==mt){let Yt=t.get("EXT_clip_control");Ct?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let le=_t;_t=null,this.setClear(le)}Ct=mt},getReversed:function(){return Ct},setTest:function(mt){mt?$(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(mt){J!==mt&&!P&&(i.depthMask(mt),J=mt)},setFunc:function(mt){if(Ct&&(mt=dg[mt]),et!==mt){switch(mt){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=mt}},setLocked:function(mt){P=mt},setClear:function(mt){_t!==mt&&(Ct&&(mt=1-mt),i.clearDepth(mt),_t=mt)},reset:function(){P=!1,J=null,et=null,_t=null,Ct=!1}}}function s(){let P=!1,Ct=null,J=null,et=null,_t=null,mt=null,Yt=null,le=null,we=null;return{setTest:function(se){P||(se?$(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(se){Ct!==se&&!P&&(i.stencilMask(se),Ct=se)},setFunc:function(se,Be,rn){(J!==se||et!==Be||_t!==rn)&&(i.stencilFunc(se,Be,rn),J=se,et=Be,_t=rn)},setOp:function(se,Be,rn){(mt!==se||Yt!==Be||le!==rn)&&(i.stencilOp(se,Be,rn),mt=se,Yt=Be,le=rn)},setLocked:function(se){P=se},setClear:function(se){we!==se&&(i.clearStencil(se),we=se)},reset:function(){P=!1,Ct=null,J=null,et=null,_t=null,mt=null,Yt=null,le=null,we=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],m=null,g=!1,A=null,d=null,w=null,M=null,x=null,D=null,B=null,b=new $t(0,0,0),I=0,_=!1,y=null,S=null,N=null,U=null,Q=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=nt>=1):V.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=nt>=2);let at=null,ut={},gt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Mt=new Ae().fromArray(gt),Y=new Ae().fromArray(kt);function it(P,Ct,J,et){let _t=new Uint8Array(4),mt=i.createTexture();i.bindTexture(P,mt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<J;Yt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(Ct+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return mt}let It={};It[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(xs),st(!1),vt(xl),$(i.CULL_FACE),T(Ai);function $(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Et(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function wt(P,Ct){return h[P]!==Ct?(i.bindFramebuffer(P,Ct),h[P]=Ct,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ct),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Bt(P,Ct){let J=p,et=!1;if(P){J=f.get(Ct),J===void 0&&(J=[],f.set(Ct,J));let _t=P.textures;if(J.length!==_t.length||J[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Yt=_t.length;mt<Yt;mt++)J[mt]=i.COLOR_ATTACHMENT0+mt;J.length=_t.length,et=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,et=!0);et&&i.drawBuffers(J)}function zt(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let K={[Pi]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};K[Du]=i.MIN,K[Ru]=i.MAX;let j={[Pu]:i.ZERO,[qc]:i.ONE,[Uu]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[ku]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Lu]:i.DST_ALPHA,[Fu]:i.ONE_MINUS_SRC_COLOR,[ir]:i.ONE_MINUS_SRC_ALPHA,[Ou]:i.ONE_MINUS_DST_COLOR,[Qu]:i.ONE_MINUS_DST_ALPHA,[Gu]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[Vu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function T(P,Ct,J,et,_t,mt,Yt,le,we,se){if(P===Ai){g===!0&&(Et(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),P!==Xc){if(P!==A||se!==_){if((d!==Pi||x!==Pi)&&(i.blendEquation(i.FUNC_ADD),d=Pi,x=Pi),se)switch(P){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $r:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $r:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,M=null,D=null,B=null,b.set(0,0,0),I=0,A=P,_=se}return}_t=_t||Ct,mt=mt||J,Yt=Yt||et,(Ct!==d||_t!==x)&&(i.blendEquationSeparate(K[Ct],K[_t]),d=Ct,x=_t),(J!==w||et!==M||mt!==D||Yt!==B)&&(i.blendFuncSeparate(j[J],j[et],j[mt],j[Yt]),w=J,M=et,D=mt,B=Yt),(le.equals(b)===!1||we!==I)&&(i.blendColor(le.r,le.g,le.b,we),b.copy(le),I=we),A=P,_=!1}function Dt(P,Ct){P.side===Bn?Et(i.CULL_FACE):$(i.CULL_FACE);let J=P.side===ze;Ct&&(J=!J),st(J),P.blending===ps&&P.transparent===!1?T(Ai):T(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let et=P.stencilWrite;a.setTest(et),et&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Nt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function vt(P){P!==Cu?($(i.CULL_FACE),P!==S&&(P===xl?i.cullFace(i.BACK):P===Su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),S=P}function ft(P){P!==N&&(G&&i.lineWidth(P),N=P)}function Nt(P,Ct,J){P?($(i.POLYGON_OFFSET_FILL),(U!==Ct||Q!==J)&&(i.polygonOffset(Ct,J),U=Ct,Q=J)):Et(i.POLYGON_OFFSET_FILL)}function At(P){P?$(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function C(P){P===void 0&&(P=i.TEXTURE0+X-1),at!==P&&(i.activeTexture(P),at=P)}function v(P,Ct,J){J===void 0&&(at===null?J=i.TEXTURE0+X-1:J=at);let et=ut[J];et===void 0&&(et={type:void 0,texture:void 0},ut[J]=et),(et.type!==P||et.texture!==Ct)&&(at!==J&&(i.activeTexture(J),at=J),i.bindTexture(P,Ct||It[P]),et.type=P,et.texture=Ct)}function O(){let P=ut[at];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(P){Mt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Mt.copy(P))}function ht(P){Y.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function bt(P,Ct){let J=l.get(Ct);J===void 0&&(J=new WeakMap,l.set(Ct,J));let et=J.get(P);et===void 0&&(et=i.getUniformBlockIndex(Ct,P.name),J.set(P,et))}function Gt(P,Ct){let et=l.get(Ct).get(P);c.get(Ct)!==et&&(i.uniformBlockBinding(Ct,et,P.__bindingPointIndex),c.set(Ct,et))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},at=null,ut={},h={},f=new WeakMap,p=[],m=null,g=!1,A=null,d=null,w=null,M=null,x=null,D=null,B=null,b=new $t(0,0,0),I=0,_=!1,y=null,S=null,N=null,U=null,Q=null,Mt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:Et,bindFramebuffer:wt,drawBuffers:Bt,useProgram:zt,setBlending:T,setMaterial:Dt,setFlipSided:st,setCullFace:vt,setLineWidth:ft,setPolygonOffset:Nt,setScissorTest:At,activeTexture:C,bindTexture:v,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:z,texImage2D:Rt,texImage3D:Ot,updateUBOMapping:bt,uniformBlockBinding:Gt,texStorage2D:Zt,texStorage3D:lt,texSubImage2D:q,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:yt,scissor:rt,viewport:ht,reset:Xt}}function gh(i,t,e,n){let s=Ag(n);switch(e){case Dh:return i*t;case Ph:return i*t;case Uh:return i*t*2;case tl:return i*t/s.components*s.byteLength;case el:return i*t/s.components*s.byteLength;case Fh:return i*t*2/s.components*s.byteLength;case nl:return i*t*2/s.components*s.byteLength;case Rh:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case il:return i*t*4/s.components*s.byteLength;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case Ga:return Math.max(i,16)*Math.max(t,8)/4;case Na:case ka:return Math.max(i,8)*Math.max(t,8)/2;case za:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jr:case rc:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lh:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(i){switch(i){case Sn:case bh:return{byteLength:1,components:1};case sr:case Th:case fr:return{byteLength:2,components:1};case jc:case $c:return{byteLength:2,components:4};case Ni:case Zc:case Pn:return{byteLength:4,components:1};case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,v){return p?new OffscreenCanvas(C,v):no("canvas")}function g(C,v,O){let Z=1,z=At(C);if((z.width>O||z.height>O)&&(Z=O/Math.max(z.width,z.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let q=Math.floor(Z*z.width),xt=Math.floor(Z*z.height);h===void 0&&(h=m(q,xt));let ct=v?m(q,xt):h;return ct.width=q,ct.height=xt,ct.getContext("2d").drawImage(C,0,0,q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+q+"x"+xt+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),C;return C}function A(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,v,O,Z,z=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=v;if(v===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),v===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){let xt=z?Qo:oe.getTransfer(Z);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=xt===de?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(C,v){let O;return C?v===null||v===Ni||v===vs?O=i.DEPTH24_STENCIL8:v===Pn?O=i.DEPTH32F_STENCIL8:v===sr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ni||v===vs?O=i.DEPTH_COMPONENT24:v===Pn?O=i.DEPTH_COMPONENT32F:v===sr&&(O=i.DEPTH_COMPONENT16),O}function D(C,v){return A(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ze&&C.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function B(C){let v=C.target;v.removeEventListener("dispose",B),I(v),v.isVideoTexture&&u.delete(v)}function b(C){let v=C.target;v.removeEventListener("dispose",b),y(v)}function I(C){let v=n.get(C);if(v.__webglInit===void 0)return;let O=C.source,Z=f.get(O);if(Z){let z=Z[v.__cacheKey];z.usedTimes--,z.usedTimes===0&&_(C),Object.keys(Z).length===0&&f.delete(O)}n.remove(C)}function _(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let O=C.source,Z=f.get(O);delete Z[v.__cacheKey],o.memory.textures--}function y(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let z=0;z<v.__webglFramebuffer[Z].length;z++)i.deleteFramebuffer(v.__webglFramebuffer[Z][z]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=C.textures;for(let Z=0,z=O.length;Z<z;Z++){let q=n.get(O[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[Z])}n.remove(C)}let S=0;function N(){S=0}function U(){let C=S;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),S+=1,C}function Q(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function X(C,v){let O=n.get(C);if(C.isVideoTexture&&ft(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,C,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function G(C,v){let O=n.get(C);if(C.version>0&&O.__version!==C.version){Y(O,C,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function nt(C,v){let O=n.get(C);if(C.version>0&&O.__version!==C.version){Y(O,C,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function V(C,v){let O=n.get(C);if(C.version>0&&O.__version!==C.version){it(O,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let at={[La]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},ut={[Ze]:i.NEAREST,[$u]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},gt={[sf]:i.NEVER,[hf]:i.ALWAYS,[rf]:i.LESS,[Qh]:i.LEQUAL,[of]:i.EQUAL,[lf]:i.GEQUAL,[af]:i.GREATER,[cf]:i.NOTEQUAL};function kt(C,v){if(v.type===Pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===Xo||v.magFilter===yr||v.magFilter===Qi||v.minFilter===gn||v.minFilter===Xo||v.minFilter===yr||v.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,at[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,at[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,at[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ut[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,gt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ze||v.minFilter!==yr&&v.minFilter!==Qi||v.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Mt(C,v){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",B));let Z=v.source,z=f.get(Z);z===void 0&&(z={},f.set(Z,z));let q=Q(v);if(q!==C.__cacheKey){z[q]===void 0&&(z[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),z[q].usedTimes++;let xt=z[C.__cacheKey];xt!==void 0&&(z[C.__cacheKey].usedTimes--,xt.usedTimes===0&&_(v)),C.__cacheKey=q,C.__webglTexture=z[q].texture}return O}function Y(C,v,O){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);let z=Mt(C,v),q=v.source;e.bindTexture(Z,C.__webglTexture,i.TEXTURE0+O);let xt=n.get(q);if(q.version!==xt.__version||z===!0){e.activeTexture(i.TEXTURE0+O);let ct=oe.getPrimaries(oe.workingColorSpace),yt=v.colorSpace===di?null:oe.getPrimaries(v.colorSpace),Zt=v.colorSpace===di||ct===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let lt=g(v.image,!1,s.maxTextureSize);lt=Nt(v,lt);let Rt=r.convert(v.format,v.colorSpace),Ot=r.convert(v.type),rt=M(v.internalFormat,Rt,Ot,v.colorSpace,v.isVideoTexture);kt(Z,v);let ht,bt=v.mipmaps,Gt=v.isVideoTexture!==!0,Xt=xt.__version===void 0||z===!0,P=q.dataReady,Ct=D(v,lt);if(v.isDepthTexture)rt=x(v.format===ys,v.type),Xt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,rt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,rt,lt.width,lt.height,0,Rt,Ot,null));else if(v.isDataTexture)if(bt.length>0){Gt&&Xt&&e.texStorage2D(i.TEXTURE_2D,Ct,rt,bt[0].width,bt[0].height);for(let J=0,et=bt.length;J<et;J++)ht=bt[J],Gt?P&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ht.width,ht.height,Rt,Ot,ht.data):e.texImage2D(i.TEXTURE_2D,J,rt,ht.width,ht.height,0,Rt,Ot,ht.data);v.generateMipmaps=!1}else Gt?(Xt&&e.texStorage2D(i.TEXTURE_2D,Ct,rt,lt.width,lt.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Rt,Ot,lt.data)):e.texImage2D(i.TEXTURE_2D,0,rt,lt.width,lt.height,0,Rt,Ot,lt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Gt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,rt,bt[0].width,bt[0].height,lt.depth);for(let J=0,et=bt.length;J<et;J++)if(ht=bt[J],v.format!==Cn)if(Rt!==null)if(Gt){if(P)if(v.layerUpdates.size>0){let _t=gh(ht.width,ht.height,v.format,v.type);for(let mt of v.layerUpdates){let Yt=ht.data.subarray(mt*_t/ht.data.BYTES_PER_ELEMENT,(mt+1)*_t/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,mt,ht.width,ht.height,1,Rt,Yt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,lt.depth,Rt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,rt,ht.width,ht.height,lt.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,lt.depth,Rt,Ot,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,rt,ht.width,ht.height,lt.depth,0,Rt,Ot,ht.data)}else{Gt&&Xt&&e.texStorage2D(i.TEXTURE_2D,Ct,rt,bt[0].width,bt[0].height);for(let J=0,et=bt.length;J<et;J++)ht=bt[J],v.format!==Cn?Rt!==null?Gt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ht.width,ht.height,Rt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,J,rt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?P&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ht.width,ht.height,Rt,Ot,ht.data):e.texImage2D(i.TEXTURE_2D,J,rt,ht.width,ht.height,0,Rt,Ot,ht.data)}else if(v.isDataArrayTexture)if(Gt){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,rt,lt.width,lt.height,lt.depth),P)if(v.layerUpdates.size>0){let J=gh(lt.width,lt.height,v.format,v.type);for(let et of v.layerUpdates){let _t=lt.data.subarray(et*J/lt.data.BYTES_PER_ELEMENT,(et+1)*J/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,lt.width,lt.height,1,Rt,Ot,_t)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Rt,Ot,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,lt.width,lt.height,lt.depth,0,Rt,Ot,lt.data);else if(v.isData3DTexture)Gt?(Xt&&e.texStorage3D(i.TEXTURE_3D,Ct,rt,lt.width,lt.height,lt.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Rt,Ot,lt.data)):e.texImage3D(i.TEXTURE_3D,0,rt,lt.width,lt.height,lt.depth,0,Rt,Ot,lt.data);else if(v.isFramebufferTexture){if(Xt)if(Gt)e.texStorage2D(i.TEXTURE_2D,Ct,rt,lt.width,lt.height);else{let J=lt.width,et=lt.height;for(let _t=0;_t<Ct;_t++)e.texImage2D(i.TEXTURE_2D,_t,rt,J,et,0,Rt,Ot,null),J>>=1,et>>=1}}else if(bt.length>0){if(Gt&&Xt){let J=At(bt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,rt,J.width,J.height)}for(let J=0,et=bt.length;J<et;J++)ht=bt[J],Gt?P&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt,Ot,ht):e.texImage2D(i.TEXTURE_2D,J,rt,Rt,Ot,ht);v.generateMipmaps=!1}else if(Gt){if(Xt){let J=At(lt);e.texStorage2D(i.TEXTURE_2D,Ct,rt,J.width,J.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Ot,lt)}else e.texImage2D(i.TEXTURE_2D,0,rt,Rt,Ot,lt);A(v)&&d(Z),xt.__version=q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function it(C,v,O){if(v.image.length!==6)return;let Z=Mt(C,v),z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);let q=n.get(z);if(z.version!==q.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);let xt=oe.getPrimaries(oe.workingColorSpace),ct=v.colorSpace===di?null:oe.getPrimaries(v.colorSpace),yt=v.colorSpace===di||xt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Zt=v.isCompressedTexture||v.image[0].isCompressedTexture,lt=v.image[0]&&v.image[0].isDataTexture,Rt=[];for(let et=0;et<6;et++)!Zt&&!lt?Rt[et]=g(v.image[et],!0,s.maxCubemapSize):Rt[et]=lt?v.image[et].image:v.image[et],Rt[et]=Nt(v,Rt[et]);let Ot=Rt[0],rt=r.convert(v.format,v.colorSpace),ht=r.convert(v.type),bt=M(v.internalFormat,rt,ht,v.colorSpace),Gt=v.isVideoTexture!==!0,Xt=q.__version===void 0||Z===!0,P=z.dataReady,Ct=D(v,Ot);kt(i.TEXTURE_CUBE_MAP,v);let J;if(Zt){Gt&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,bt,Ot.width,Ot.height);for(let et=0;et<6;et++){J=Rt[et].mipmaps;for(let _t=0;_t<J.length;_t++){let mt=J[_t];v.format!==Cn?rt!==null?Gt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,0,0,mt.width,mt.height,rt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,bt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,0,0,mt.width,mt.height,rt,ht,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,bt,mt.width,mt.height,0,rt,ht,mt.data)}}}else{if(J=v.mipmaps,Gt&&Xt){J.length>0&&Ct++;let et=At(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,bt,et.width,et.height)}for(let et=0;et<6;et++)if(lt){Gt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Rt[et].width,Rt[et].height,rt,ht,Rt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,bt,Rt[et].width,Rt[et].height,0,rt,ht,Rt[et].data);for(let _t=0;_t<J.length;_t++){let Yt=J[_t].image[et].image;Gt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,0,0,Yt.width,Yt.height,rt,ht,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,bt,Yt.width,Yt.height,0,rt,ht,Yt.data)}}else{Gt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,rt,ht,Rt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,bt,rt,ht,Rt[et]);for(let _t=0;_t<J.length;_t++){let mt=J[_t];Gt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,0,0,rt,ht,mt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,bt,rt,ht,mt.image[et])}}}A(v)&&d(i.TEXTURE_CUBE_MAP),q.__version=z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function It(C,v,O,Z,z,q){let xt=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),yt=M(O.internalFormat,xt,ct,O.colorSpace),Zt=n.get(v),lt=n.get(O);if(lt.__renderTarget=v,!Zt.__hasExternalTextures){let Rt=Math.max(1,v.width>>q),Ot=Math.max(1,v.height>>q);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?e.texImage3D(z,q,yt,Rt,Ot,v.depth,0,xt,ct,null):e.texImage2D(z,q,yt,Rt,Ot,0,xt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,z,lt.__webglTexture,0,st(v)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,z,lt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(C,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let Z=v.depthTexture,z=Z&&Z.isDepthTexture?Z.type:null,q=x(v.stencilBuffer,z),xt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=st(v);vt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,q,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,C)}else{let Z=v.textures;for(let z=0;z<Z.length;z++){let q=Z[z],xt=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),yt=M(q.internalFormat,xt,ct,q.colorSpace),Zt=st(v);O&&vt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,yt,v.width,v.height):vt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,yt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,yt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let z=Z.__webglTexture,q=st(v);if(v.depthTexture.format===As)vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(v.depthTexture.format===ys)vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function wt(C){let v=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",z)};Z.addEventListener("dispose",z),v.__depthDisposeCallback=z}v.__boundDepthTexture=Z}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Et(v.__webglFramebuffer,C)}else if(O){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),$(v.__webglDepthbuffer[Z],C,!1);else{let z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),$(v.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(C,v,O){let Z=n.get(C);v!==void 0&&It(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&wt(C)}function zt(C){let v=C.texture,O=n.get(C),Z=n.get(v);C.addEventListener("dispose",b);let z=C.textures,q=C.isWebGLCubeRenderTarget===!0,xt=z.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let yt=0;yt<v.mipmaps.length;yt++)O.__webglFramebuffer[ct][yt]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ct=0,yt=z.length;ct<yt;ct++){let Zt=n.get(z[ct]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&vt(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<z.length;ct++){let yt=z[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);let Zt=r.convert(yt.format,yt.colorSpace),lt=r.convert(yt.type),Rt=M(yt.internalFormat,Zt,lt,yt.colorSpace,C.isXRRenderTarget===!0),Ot=st(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Rt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),$(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),kt(i.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)It(O.__webglFramebuffer[ct][yt],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt);else It(O.__webglFramebuffer[ct],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);A(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ct=0,yt=z.length;ct<yt;ct++){let Zt=z[ct],lt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),kt(i.TEXTURE_2D,Zt),It(O.__webglFramebuffer,C,Zt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),A(Zt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),kt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)It(O.__webglFramebuffer[yt],C,v,i.COLOR_ATTACHMENT0,ct,yt);else It(O.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,ct,0);A(v)&&d(ct),e.unbindTexture()}C.depthBuffer&&wt(C)}function K(C){let v=C.textures;for(let O=0,Z=v.length;O<Z;O++){let z=v[O];if(A(z)){let q=w(C),xt=n.get(z).__webglTexture;e.bindTexture(q,xt),d(q),e.unbindTexture()}}}let j=[],T=[];function Dt(C){if(C.samples>0){if(vt(C)===!1){let v=C.textures,O=C.width,Z=C.height,z=i.COLOR_BUFFER_BIT,q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(C),ct=v.length>1;if(ct)for(let yt=0;yt<v.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let yt=0;yt<v.length;yt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Zt=n.get(v[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,O,Z,0,0,O,Z,z,i.NEAREST),c===!0&&(j.length=0,T.length=0,j.push(i.COLOR_ATTACHMENT0+yt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(j.push(q),T.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let yt=0;yt<v.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Zt=n.get(v[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function st(C){return Math.min(s.maxSamples,C.samples)}function vt(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Nt(C,v){let O=C.colorSpace,Z=C.format,z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ts&&O!==di&&(oe.getTransfer(O)===de?(Z!==Cn||z!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function At(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=V,this.rebindTextures=Bt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=vt}function gg(i,t){function e(n,s=di){let r,o=oe.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return i.BYTE;if(n===Th)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Zc)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===fr)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Rh)return i.RGB;if(n===Cn)return i.RGBA;if(n===Ph)return i.LUMINANCE;if(n===Uh)return i.LUMINANCE_ALPHA;if(n===As)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===tl)return i.RED;if(n===el)return i.RED_INTEGER;if(n===Fh)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===Xr||n===qr||n===Kr||n===Zr)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Oa||n===ka||n===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Va||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===Va)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Ya||n===Ja||n===Xa||n===qa||n===Ka||n===Za||n===ja||n===$a||n===tc||n===ec||n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jr||n===rc||n===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jr)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lh||n===ac||n===cc||n===lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ec=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pi=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},xg={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let A=e.getJointPose(g,n),d=this._getHandJoint(l,g);A!==null&&(d.matrix.fromArray(A.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=A.radius),d.visible=A!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mg=`
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

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new $e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new nn({vertexShader:wg,fragmentShader:Mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cc=class extends xi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,m=null,g=new Bc,A=e.getContextAttributes(),d=null,w=null,M=[],x=[],D=new pt,B=null,b=new Te;b.viewport=new Ae;let I=new Te;I.viewport=new Ae;let _=[b,I],y=new Ec,S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=M[Y];return it===void 0&&(it=new tr,M[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=M[Y];return it===void 0&&(it=new tr,M[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=M[Y];return it===void 0&&(it=new tr,M[Y]=it),it.getHandSpace()};function U(Y){let it=x.indexOf(Y.inputSource);if(it===-1)return;let It=M[it];It!==void 0&&(It.update(Y.inputSource,Y.frame,l||o),It.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Q(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",X);for(let Y=0;Y<M.length;Y++){let it=x[Y];it!==null&&(x[Y]=null,M[Y].disconnect(it))}S=null,N=null,g.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,w=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",X),A.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let it={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new bn(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil})}else{let it=null,It=null,$=null;A.depth&&($=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=A.stencil?ys:As,It=A.stencil?vs:Ni);let Et={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new bn(f.textureWidth,f.textureHeight,{format:Cn,type:Sn,depthTexture:new ho(f.textureWidth,f.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(Y){for(let it=0;it<Y.removed.length;it++){let It=Y.removed[it],$=x.indexOf(It);$>=0&&(x[$]=null,M[$].disconnect(It))}for(let it=0;it<Y.added.length;it++){let It=Y.added[it],$=x.indexOf(It);if($===-1){for(let wt=0;wt<M.length;wt++)if(wt>=x.length){x.push(It),$=wt;break}else if(x[wt]===null){x[wt]=It,$=wt;break}if($===-1)break}let Et=M[$];Et&&Et.connect(It)}}let G=new R,nt=new R;function V(Y,it,It){G.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(It.matrixWorld);let $=G.distanceTo(nt),Et=it.projectionMatrix.elements,wt=It.projectionMatrix.elements,Bt=Et[14]/(Et[10]-1),zt=Et[14]/(Et[10]+1),K=(Et[9]+1)/Et[5],j=(Et[9]-1)/Et[5],T=(Et[8]-1)/Et[0],Dt=(wt[8]+1)/wt[0],st=Bt*T,vt=Bt*Dt,ft=$/(-T+Dt),Nt=ft*-T;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Nt),Y.translateZ(ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let At=Bt+ft,C=zt+ft,v=st-Nt,O=vt+($-Nt),Z=K*zt/C*At,z=j*zt/C*At;Y.projectionMatrix.makePerspective(v,O,Z,z,At,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function at(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,It=Y.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(It=g.depthFar)),y.near=I.near=b.near=it,y.far=I.far=b.far=It,(S!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,N=y.far),b.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,y.layers.mask=b.layers.mask|I.layers.mask;let $=Y.parent,Et=y.cameras;at(y,$);for(let wt=0;wt<Et.length;wt++)at(Et[wt],$);Et.length===2?V(y,b,I):y.projectionMatrix.copy(b.projectionMatrix),ut(Y,y,$)};function ut(Y,it,It){It===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(It.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let gt=null;function kt(Y,it){if(u=it.getViewerPose(l||o),m=it,u!==null){let It=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let $=!1;It.length!==y.cameras.length&&(y.cameras.length=0,$=!0);for(let wt=0;wt<It.length;wt++){let Bt=It[wt],zt=null;if(p!==null)zt=p.getViewport(Bt);else{let j=h.getViewSubImage(f,Bt);zt=j.viewport,wt===0&&(t.setRenderTargetTextures(w,j.colorTexture,f.ignoreDepthValues?void 0:j.depthStencilTexture),t.setRenderTarget(w))}let K=_[wt];K===void 0&&(K=new Te,K.layers.enable(wt),K.viewport=new Ae,_[wt]=K),K.matrix.fromArray(Bt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Bt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(zt.x,zt.y,zt.width,zt.height),wt===0&&(y.matrix.copy(K.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),$===!0&&y.cameras.push(K)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let wt=h.getDepthInformation(It[0]);wt&&wt.isValid&&wt.texture&&g.init(t,wt,s.renderState)}}for(let It=0;It<M.length;It++){let $=x[It],Et=M[It];$!==null&&Et!==void 0&&Et.update($,it,l||o)}gt&&gt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let Mt=new Gh;Mt.setAnimationLoop(kt),this.setAnimationLoop=function(Y){gt=Y},this.dispose=function(){}}},Di=new hn,vg=new ue;function yg(i,t){function e(A,d){A.matrixAutoUpdate===!0&&A.updateMatrix(),d.value.copy(A.matrix)}function n(A,d){d.color.getRGB(A.fogColor.value,kh(i)),d.isFog?(A.fogNear.value=d.near,A.fogFar.value=d.far):d.isFogExp2&&(A.fogDensity.value=d.density)}function s(A,d,w,M,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(A,d):d.isMeshToonMaterial?(r(A,d),h(A,d)):d.isMeshPhongMaterial?(r(A,d),u(A,d)):d.isMeshStandardMaterial?(r(A,d),f(A,d),d.isMeshPhysicalMaterial&&p(A,d,x)):d.isMeshMatcapMaterial?(r(A,d),m(A,d)):d.isMeshDepthMaterial?r(A,d):d.isMeshDistanceMaterial?(r(A,d),g(A,d)):d.isMeshNormalMaterial?r(A,d):d.isLineBasicMaterial?(o(A,d),d.isLineDashedMaterial&&a(A,d)):d.isPointsMaterial?c(A,d,w,M):d.isSpriteMaterial?l(A,d):d.isShadowMaterial?(A.color.value.copy(d.color),A.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(A,d){A.opacity.value=d.opacity,d.color&&A.diffuse.value.copy(d.color),d.emissive&&A.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(A.map.value=d.map,e(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.bumpMap&&(A.bumpMap.value=d.bumpMap,e(d.bumpMap,A.bumpMapTransform),A.bumpScale.value=d.bumpScale,d.side===ze&&(A.bumpScale.value*=-1)),d.normalMap&&(A.normalMap.value=d.normalMap,e(d.normalMap,A.normalMapTransform),A.normalScale.value.copy(d.normalScale),d.side===ze&&A.normalScale.value.negate()),d.displacementMap&&(A.displacementMap.value=d.displacementMap,e(d.displacementMap,A.displacementMapTransform),A.displacementScale.value=d.displacementScale,A.displacementBias.value=d.displacementBias),d.emissiveMap&&(A.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,A.emissiveMapTransform)),d.specularMap&&(A.specularMap.value=d.specularMap,e(d.specularMap,A.specularMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest);let w=t.get(d),M=w.envMap,x=w.envMapRotation;M&&(A.envMap.value=M,Di.copy(x),Di.x*=-1,Di.y*=-1,Di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),A.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Di)),A.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=d.reflectivity,A.ior.value=d.ior,A.refractionRatio.value=d.refractionRatio),d.lightMap&&(A.lightMap.value=d.lightMap,A.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,A.lightMapTransform)),d.aoMap&&(A.aoMap.value=d.aoMap,A.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,A.aoMapTransform))}function o(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,d.map&&(A.map.value=d.map,e(d.map,A.mapTransform))}function a(A,d){A.dashSize.value=d.dashSize,A.totalSize.value=d.dashSize+d.gapSize,A.scale.value=d.scale}function c(A,d,w,M){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.size.value=d.size*w,A.scale.value=M*.5,d.map&&(A.map.value=d.map,e(d.map,A.uvTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function l(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.rotation.value=d.rotation,d.map&&(A.map.value=d.map,e(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,e(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function u(A,d){A.specular.value.copy(d.specular),A.shininess.value=Math.max(d.shininess,1e-4)}function h(A,d){d.gradientMap&&(A.gradientMap.value=d.gradientMap)}function f(A,d){A.metalness.value=d.metalness,d.metalnessMap&&(A.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,A.metalnessMapTransform)),A.roughness.value=d.roughness,d.roughnessMap&&(A.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,A.roughnessMapTransform)),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)}function p(A,d,w){A.ior.value=d.ior,d.sheen>0&&(A.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),A.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(A.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,A.sheenColorMapTransform)),d.sheenRoughnessMap&&(A.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,A.sheenRoughnessMapTransform))),d.clearcoat>0&&(A.clearcoat.value=d.clearcoat,A.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(A.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,A.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(A.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ze&&A.clearcoatNormalScale.value.negate())),d.dispersion>0&&(A.dispersion.value=d.dispersion),d.iridescence>0&&(A.iridescence.value=d.iridescence,A.iridescenceIOR.value=d.iridescenceIOR,A.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(A.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,A.iridescenceMapTransform)),d.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),d.transmission>0&&(A.transmission.value=d.transmission,A.transmissionSamplerMap.value=w.texture,A.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(A.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,A.transmissionMapTransform)),A.thickness.value=d.thickness,d.thicknessMap&&(A.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=d.attenuationDistance,A.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(A.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(A.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=d.specularIntensity,A.specularColor.value.copy(d.specularColor),d.specularColorMap&&(A.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,A.specularColorMapTransform)),d.specularIntensityMap&&(A.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,A.specularIntensityMapTransform))}function m(A,d){d.matcap&&(A.matcap.value=d.matcap)}function g(A,d){let w=t.get(d).light;A.referencePosition.value.setFromMatrixPosition(w.matrixWorld),A.nearDistance.value=w.shadow.camera.near,A.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _g(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){let x=M.program;n.uniformBlockBinding(w,x)}function l(w,M){let x=s[w.id];x===void 0&&(m(w),x=u(w),s[w.id]=x,w.addEventListener("dispose",A));let D=M.program;n.updateUBOMapping(w,D);let B=t.render.frame;r[w.id]!==B&&(f(w),r[w.id]=B)}function u(w){let M=h();w.__bindingPointIndex=M;let x=i.createBuffer(),D=w.__size,B=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,D,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let M=s[w.id],x=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let B=0,b=x.length;B<b;B++){let I=Array.isArray(x[B])?x[B]:[x[B]];for(let _=0,y=I.length;_<y;_++){let S=I[_];if(p(S,B,_,D)===!0){let N=S.__offset,U=Array.isArray(S.value)?S.value:[S.value],Q=0;for(let X=0;X<U.length;X++){let G=U[X],nt=g(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+Q,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,Q),Q+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,M,x,D){let B=w.value,b=M+"_"+x;if(D[b]===void 0)return typeof B=="number"||typeof B=="boolean"?D[b]=B:D[b]=B.clone(),!0;{let I=D[b];if(typeof B=="number"||typeof B=="boolean"){if(I!==B)return D[b]=B,!0}else if(I.equals(B)===!1)return I.copy(B),!0}return!1}function m(w){let M=w.uniforms,x=0,D=16;for(let b=0,I=M.length;b<I;b++){let _=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,S=_.length;y<S;y++){let N=_[y],U=Array.isArray(N.value)?N.value:[N.value];for(let Q=0,X=U.length;Q<X;Q++){let G=U[Q],nt=g(G),V=x%D,at=V%nt.boundary,ut=V+at;x+=at,ut!==0&&D-ut<nt.storage&&(x+=D-ut),N.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=nt.storage}}}let B=x%D;return B>0&&(x+=D-B),w.__size=x,w.__cache={},this}function g(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function A(w){let M=w.target;M.removeEventListener("dispose",A);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Fn=class{constructor(t={}){let{canvas:e=Sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),g=new Int32Array(4),A=null,d=null,w=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=mi,this.toneMappingExposure=1;let x=this,D=!1,B=0,b=0,I=null,_=-1,y=null,S=new Ae,N=new Ae,U=null,Q=new $t(0),X=0,G=e.width,nt=e.height,V=1,at=null,ut=null,gt=new Ae(0,0,G,nt),kt=new Ae(0,0,G,nt),Mt=!1,Y=new or,it=!1,It=!1,$=new ue,Et=new ue,wt=new R,Bt=new Ae,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function j(){return I===null?V:1}let T=n;function Dt(E,L){return e.getContext(E,L)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jc}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),T===null){let L="webgl2";if(T=Dt(L,E),T===null)throw Dt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,vt,ft,Nt,At,C,v,O,Z,z,q,xt,ct,yt,Zt,lt,Rt,Ot,rt,ht,bt,Gt,Xt,P;function Ct(){st=new OA(T),st.init(),Gt=new gg(T,st),vt=new PA(T,st,t,Gt),ft=new pg(T,st),vt.reverseDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),Nt=new zA(T),At=new eg,C=new mg(T,st,ft,At,vt,Gt,Nt),v=new FA(x),O=new NA(x),Z=new qf(T),Xt=new DA(T,Z),z=new kA(T,Z,Nt,Xt),q=new HA(T,z,Z,Nt),rt=new VA(T,vt,C),lt=new UA(At),xt=new tg(x,v,O,st,vt,Xt,lt),ct=new yg(x,At),yt=new ig,Zt=new lg(st),Ot=new IA(x,v,O,ft,q,p,c),Rt=new fg(x,q,vt),P=new _g(T,Nt,vt,ft),ht=new RA(T,st,Nt),bt=new GA(T,st,Nt),Nt.programs=xt.programs,x.capabilities=vt,x.extensions=st,x.properties=At,x.renderLists=yt,x.shadowMap=Rt,x.state=ft,x.info=Nt}Ct();let J=new Cc(x,T);this.xr=J,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,nt,!1))},this.getSize=function(E){return E.set(G,nt)},this.setSize=function(E,L,k=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,nt=L,e.width=Math.floor(E*V),e.height=Math.floor(L*V),k===!0&&(e.style.width=E+"px",e.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(G*V,nt*V).floor()},this.setDrawingBufferSize=function(E,L,k){G=E,nt=L,V=k,e.width=Math.floor(E*k),e.height=Math.floor(L*k),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,L,k,H){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,L,k,H),ft.viewport(S.copy(gt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(kt)},this.setScissor=function(E,L,k,H){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,L,k,H),ft.scissor(N.copy(kt).multiplyScalar(V).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(E){ft.setScissorTest(Mt=E)},this.setOpaqueSort=function(E){at=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(E=!0,L=!0,k=!0){let H=0;if(E){let F=!1;if(I!==null){let dt=I.texture.format;F=dt===il||dt===nl||dt===el}if(F){let dt=I.texture.type,Tt=dt===Sn||dt===Ni||dt===sr||dt===vs||dt===jc||dt===$c,Ut=Ot.getClearColor(),Pt=Ot.getClearAlpha(),Ht=Ut.r,Jt=Ut.g,Ft=Ut.b;Tt?(m[0]=Ht,m[1]=Jt,m[2]=Ft,m[3]=Pt,T.clearBufferuiv(T.COLOR,0,m)):(g[0]=Ht,g[1]=Jt,g[2]=Ft,g[3]=Pt,T.clearBufferiv(T.COLOR,0,g))}else H|=T.COLOR_BUFFER_BIT}L&&(H|=T.DEPTH_BUFFER_BIT),k&&(H|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),yt.dispose(),Zt.dispose(),At.dispose(),v.dispose(),O.dispose(),q.dispose(),Xt.dispose(),P.dispose(),xt.dispose(),J.dispose(),J.removeEventListener("sessionstart",Fs),J.removeEventListener("sessionend",Ls),Dn.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let E=Nt.autoReset,L=Rt.enabled,k=Rt.autoUpdate,H=Rt.needsUpdate,F=Rt.type;Ct(),Nt.autoReset=E,Rt.enabled=L,Rt.autoUpdate=k,Rt.needsUpdate=H,Rt.type=F}function mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){let L=E.target;L.removeEventListener("dispose",Yt),le(L)}function le(E){we(E),At.remove(E)}function we(E){let L=At.get(E).programs;L!==void 0&&(L.forEach(function(k){xt.releaseProgram(k)}),E.isShaderMaterial&&xt.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,k,H,F,dt){L===null&&(L=zt);let Tt=F.isMesh&&F.matrixWorld.determinant()<0,Ut=Os(E,L,k,H,F);ft.setMaterial(H,Tt);let Pt=k.index,Ht=1;if(H.wireframe===!0){if(Pt=z.getWireframeAttribute(k),Pt===void 0)return;Ht=2}let Jt=k.drawRange,Ft=k.attributes.position,te=Jt.start*Ht,ae=(Jt.start+Jt.count)*Ht;dt!==null&&(te=Math.max(te,dt.start*Ht),ae=Math.min(ae,(dt.start+dt.count)*Ht)),Pt!==null?(te=Math.max(te,0),ae=Math.min(ae,Pt.count)):Ft!=null&&(te=Math.max(te,0),ae=Math.min(ae,Ft.count));let ce=ae-te;if(ce<0||ce===1/0)return;Xt.setup(F,H,Ut,k,Pt);let Re,Lt=ht;if(Pt!==null&&(Re=Z.get(Pt),Lt=bt,Lt.setIndex(Re)),F.isMesh)H.wireframe===!0?(ft.setLineWidth(H.wireframeLinewidth*j()),Lt.setMode(T.LINES)):Lt.setMode(T.TRIANGLES);else if(F.isLine){let Qt=H.linewidth;Qt===void 0&&(Qt=1),ft.setLineWidth(Qt*j()),F.isLineSegments?Lt.setMode(T.LINES):F.isLineLoop?Lt.setMode(T.LINE_LOOP):Lt.setMode(T.LINE_STRIP)}else F.isPoints?Lt.setMode(T.POINTS):F.isSprite&&Lt.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Lt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Lt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Qt=F._multiDrawStarts,fn=F._multiDrawCounts,ie=F._multiDrawCount,We=Pt?Z.get(Pt).bytesPerElement:1,Qn=At.get(H).currentProgram.getUniforms();for(let Pe=0;Pe<ie;Pe++)Qn.setValue(T,"_gl_DrawID",Pe),Lt.render(Qt[Pe]/We,fn[Pe])}else if(F.isInstancedMesh)Lt.renderInstances(te,ce,F.count);else if(k.isInstancedBufferGeometry){let Qt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,fn=Math.min(k.instanceCount,Qt);Lt.renderInstances(te,ce,fn)}else Lt.render(te,ce)};function se(E,L,k){E.transparent===!0&&E.side===Bn&&E.forceSinglePass===!1?(E.side=ze,E.needsUpdate=!0,ii(E,L,k),E.side=Un,E.needsUpdate=!0,ii(E,L,k),E.side=Bn):ii(E,L,k)}this.compile=function(E,L,k=null){k===null&&(k=E),d=Zt.get(k),d.init(L),M.push(d),k.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),E!==k&&E.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();let H=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let dt=F.material;if(dt)if(Array.isArray(dt))for(let Tt=0;Tt<dt.length;Tt++){let Ut=dt[Tt];se(Ut,k,F),H.add(Ut)}else se(dt,k,F),H.add(dt)}),M.pop(),d=null,H},this.compileAsync=function(E,L,k=null){let H=this.compile(E,L,k);return new Promise(F=>{function dt(){if(H.forEach(function(Tt){At.get(Tt).currentProgram.isReady()&&H.delete(Tt)}),H.size===0){F(E);return}setTimeout(dt,10)}st.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Be=null;function rn(E){Be&&Be(E)}function Fs(){Dn.stop()}function Ls(){Dn.start()}let Dn=new Gh;Dn.setAnimationLoop(rn),typeof self!="undefined"&&Dn.setContext(self),this.setAnimationLoop=function(E){Be=E,J.setAnimationLoop(E),E===null?Dn.stop():Dn.start()},J.addEventListener("sessionstart",Fs),J.addEventListener("sessionend",Ls),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(L),L=J.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,L,I),d=Zt.get(E,M.length),d.init(L),M.push(d),Et.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(Et),It=this.localClippingEnabled,it=lt.init(this.clippingPlanes,It),A=yt.get(E,w.length),A.init(),w.push(A),J.enabled===!0&&J.isPresenting===!0){let dt=x.xr.getDepthSensingMesh();dt!==null&&on(dt,L,-1/0,x.sortObjects)}on(E,L,0,x.sortObjects),A.finish(),x.sortObjects===!0&&A.sort(at,ut),K=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,K&&Ot.addToRenderList(A,E),this.info.render.frame++,it===!0&&lt.beginShadows();let k=d.state.shadowsArray;Rt.render(k,E,L),it===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=A.opaque,F=A.transmissive;if(d.setupLights(),L.isArrayCamera){let dt=L.cameras;if(F.length>0)for(let Tt=0,Ut=dt.length;Tt<Ut;Tt++){let Pt=dt[Tt];xr(H,F,E,Pt)}K&&Ot.render(E);for(let Tt=0,Ut=dt.length;Tt<Ut;Tt++){let Pt=dt[Tt];gr(A,E,Pt,Pt.viewport)}}else F.length>0&&xr(H,F,E,L),K&&Ot.render(E),gr(A,E,L);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,L),Xt.resetDefaultState(),_=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],it===!0&&lt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?A=w[w.length-1]:A=null};function on(E,L,k,H){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){H&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Et);let Tt=q.update(E),Ut=E.material;Ut.visible&&A.push(E,Tt,Ut,k,Bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){let Tt=q.update(E),Ut=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Bt.copy(Tt.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(Et)),Array.isArray(Ut)){let Pt=Tt.groups;for(let Ht=0,Jt=Pt.length;Ht<Jt;Ht++){let Ft=Pt[Ht],te=Ut[Ft.materialIndex];te&&te.visible&&A.push(E,Tt,te,k,Bt.z,Ft)}}else Ut.visible&&A.push(E,Tt,Ut,k,Bt.z,null)}}let dt=E.children;for(let Tt=0,Ut=dt.length;Tt<Ut;Tt++)on(dt[Tt],L,k,H)}function gr(E,L,k,H){let F=E.opaque,dt=E.transmissive,Tt=E.transparent;d.setupLightsView(k),it===!0&&lt.setGlobalState(x.clippingPlanes,k),H&&ft.viewport(S.copy(H)),F.length>0&&ni(F,L,k),dt.length>0&&ni(dt,L,k),Tt.length>0&&ni(Tt,L,k),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function xr(E,L,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new bn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?fr:Sn,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let dt=d.state.transmissionRenderTarget[H.id],Tt=H.viewport||S;dt.setSize(Tt.z,Tt.w);let Ut=x.getRenderTarget();x.setRenderTarget(dt),x.getClearColor(Q),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),K&&Ot.render(k);let Pt=x.toneMapping;x.toneMapping=mi;let Ht=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),it===!0&&lt.setGlobalState(x.clippingPlanes,H),ni(E,k,H),C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt),st.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ft=0,te=L.length;Ft<te;Ft++){let ae=L[Ft],ce=ae.object,Re=ae.geometry,Lt=ae.material,Qt=ae.group;if(Lt.side===Bn&&ce.layers.test(H.layers)){let fn=Lt.side;Lt.side=ze,Lt.needsUpdate=!0,Qs(ce,k,H,Re,Lt,Qt),Lt.side=fn,Lt.needsUpdate=!0,Jt=!0}}Jt===!0&&(C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt))}x.setRenderTarget(Ut),x.setClearColor(Q,X),Ht!==void 0&&(H.viewport=Ht),x.toneMapping=Pt}function ni(E,L,k){let H=L.isScene===!0?L.overrideMaterial:null;for(let F=0,dt=E.length;F<dt;F++){let Tt=E[F],Ut=Tt.object,Pt=Tt.geometry,Ht=H===null?Tt.material:H,Jt=Tt.group;Ut.layers.test(k.layers)&&Qs(Ut,L,k,Pt,Ht,Jt)}}function Qs(E,L,k,H,F,dt){E.onBeforeRender(x,L,k,H,F,dt),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,L,k,H,E,dt),F.transparent===!0&&F.side===Bn&&F.forceSinglePass===!1?(F.side=ze,F.needsUpdate=!0,x.renderBufferDirect(k,L,H,F,E,dt),F.side=Un,F.needsUpdate=!0,x.renderBufferDirect(k,L,H,F,E,dt),F.side=Bn):x.renderBufferDirect(k,L,H,F,E,dt),E.onAfterRender(x,L,k,H,F,dt)}function ii(E,L,k){L.isScene!==!0&&(L=zt);let H=At.get(E),F=d.state.lights,dt=d.state.shadowsArray,Tt=F.state.version,Ut=xt.getParameters(E,F.state,dt,L,k),Pt=xt.getProgramCacheKey(Ut),Ht=H.programs;H.environment=E.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(E.isMeshStandardMaterial?O:v).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Ht===void 0&&(E.addEventListener("dispose",Yt),Ht=new Map,H.programs=Ht);let Jt=Ht.get(Pt);if(Jt!==void 0){if(H.currentProgram===Jt&&H.lightsStateVersion===Tt)return qi(E,Ut),Jt}else Ut.uniforms=xt.getUniforms(E),E.onBeforeCompile(Ut,x),Jt=xt.acquireProgram(Ut,Pt),Ht.set(Pt,Jt),H.uniforms=Ut.uniforms;let Ft=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=lt.uniform),qi(E,Ut),H.needsLights=Mr(E),H.lightsStateVersion=Tt,H.needsLights&&(Ft.ambientLightColor.value=F.state.ambient,Ft.lightProbe.value=F.state.probe,Ft.directionalLights.value=F.state.directional,Ft.directionalLightShadows.value=F.state.directionalShadow,Ft.spotLights.value=F.state.spot,Ft.spotLightShadows.value=F.state.spotShadow,Ft.rectAreaLights.value=F.state.rectArea,Ft.ltc_1.value=F.state.rectAreaLTC1,Ft.ltc_2.value=F.state.rectAreaLTC2,Ft.pointLights.value=F.state.point,Ft.pointLightShadows.value=F.state.pointShadow,Ft.hemisphereLights.value=F.state.hemi,Ft.directionalShadowMap.value=F.state.directionalShadowMap,Ft.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ft.spotShadowMap.value=F.state.spotShadowMap,Ft.spotLightMatrix.value=F.state.spotLightMatrix,Ft.spotLightMap.value=F.state.spotLightMap,Ft.pointShadowMap.value=F.state.pointShadowMap,Ft.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Jt,H.uniformsList=null,Jt}function Ns(E){if(E.uniformsList===null){let L=E.currentProgram.getUniforms();E.uniformsList=gs.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function qi(E,L){let k=At.get(E);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function Os(E,L,k,H,F){L.isScene!==!0&&(L=zt),C.resetTextureUnits();let dt=L.fog,Tt=H.isMeshStandardMaterial?L.environment:null,Ut=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ts,Pt=(H.isMeshStandardMaterial?O:v).get(H.envMap||Tt),Ht=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Jt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ft=!!k.morphAttributes.position,te=!!k.morphAttributes.normal,ae=!!k.morphAttributes.color,ce=mi;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ce=x.toneMapping);let Re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Lt=Re!==void 0?Re.length:0,Qt=At.get(H),fn=d.state.lights;if(it===!0&&(It===!0||E!==y)){let Je=E===y&&H.id===_;lt.setState(H,E,Je)}let ie=!1;H.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==fn.state.version||Qt.outputColorSpace!==Ut||F.isBatchedMesh&&Qt.batching===!1||!F.isBatchedMesh&&Qt.batching===!0||F.isBatchedMesh&&Qt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Qt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Qt.instancing===!1||!F.isInstancedMesh&&Qt.instancing===!0||F.isSkinnedMesh&&Qt.skinning===!1||!F.isSkinnedMesh&&Qt.skinning===!0||F.isInstancedMesh&&Qt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Qt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Qt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Qt.instancingMorph===!1&&F.morphTexture!==null||Qt.envMap!==Pt||H.fog===!0&&Qt.fog!==dt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==lt.numPlanes||Qt.numIntersection!==lt.numIntersection)||Qt.vertexAlphas!==Ht||Qt.vertexTangents!==Jt||Qt.morphTargets!==Ft||Qt.morphNormals!==te||Qt.morphColors!==ae||Qt.toneMapping!==ce||Qt.morphTargetsCount!==Lt)&&(ie=!0):(ie=!0,Qt.__version=H.version);let We=Qt.currentProgram;ie===!0&&(We=ii(H,L,F));let Qn=!1,Pe=!1,Nn=!1,fe=We.getUniforms(),Ye=Qt.uniforms;if(ft.useProgram(We.program)&&(Qn=!0,Pe=!0,Nn=!0),H.id!==_&&(_=H.id,Pe=!0),Qn||y!==E){ft.buffers.depth.getReversed()?($.copy(E.projectionMatrix),Tf($),If($),fe.setValue(T,"projectionMatrix",$)):fe.setValue(T,"projectionMatrix",E.projectionMatrix),fe.setValue(T,"viewMatrix",E.matrixWorldInverse);let dn=fe.map.cameraPosition;dn!==void 0&&dn.setValue(T,wt.setFromMatrixPosition(E.matrixWorld)),vt.logarithmicDepthBuffer&&fe.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&fe.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Pe=!0,Nn=!0)}if(F.isSkinnedMesh){fe.setOptional(T,F,"bindMatrix"),fe.setOptional(T,F,"bindMatrixInverse");let Je=F.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),fe.setValue(T,"boneTexture",Je.boneTexture,C))}F.isBatchedMesh&&(fe.setOptional(T,F,"batchingTexture"),fe.setValue(T,"batchingTexture",F._matricesTexture,C),fe.setOptional(T,F,"batchingIdTexture"),fe.setValue(T,"batchingIdTexture",F._indirectTexture,C),fe.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&fe.setValue(T,"batchingColorTexture",F._colorsTexture,C));let xn=k.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&rt.update(F,k,We),(Pe||Qt.receiveShadow!==F.receiveShadow)&&(Qt.receiveShadow=F.receiveShadow,fe.setValue(T,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ye.envMap.value=Pt,Ye.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(Ye.envMapIntensity.value=L.environmentIntensity),Pe&&(fe.setValue(T,"toneMappingExposure",x.toneMappingExposure),Qt.needsLights&&wr(Ye,Nn),dt&&H.fog===!0&&ct.refreshFogUniforms(Ye,dt),ct.refreshMaterialUniforms(Ye,H,V,nt,d.state.transmissionRenderTarget[E.id]),gs.upload(T,Ns(Qt),Ye,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gs.upload(T,Ns(Qt),Ye,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&fe.setValue(T,"center",F.center),fe.setValue(T,"modelViewMatrix",F.modelViewMatrix),fe.setValue(T,"normalMatrix",F.normalMatrix),fe.setValue(T,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Je=H.uniformsGroups;for(let dn=0,wn=Je.length;dn<wn;dn++){let ks=Je[dn];P.update(ks,We),P.bind(ks,We)}}return We}function wr(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function Mr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,L,k){At.get(E.texture).__webglTexture=L,At.get(E.depthTexture).__webglTexture=k;let H=At.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){let k=At.get(E);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,k=0){I=E,B=L,b=k;let H=!0,F=null,dt=!1,Tt=!1;if(E){let Pt=At.get(E);if(Pt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(T.FRAMEBUFFER,null),H=!1;else if(Pt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Pt.__hasExternalTextures)C.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ft=E.depthTexture;if(Pt.__boundDepthTexture!==Ft){if(Ft!==null&&At.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Tt=!0);let Jt=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Jt[L])?F=Jt[L][k]:F=Jt[L],dt=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=At.get(E).__webglMultisampledFramebuffer:Array.isArray(Jt)?F=Jt[k]:F=Jt,S.copy(E.viewport),N.copy(E.scissor),U=E.scissorTest}else S.copy(gt).multiplyScalar(V).floor(),N.copy(kt).multiplyScalar(V).floor(),U=Mt;if(ft.bindFramebuffer(T.FRAMEBUFFER,F)&&H&&ft.drawBuffers(E,F),ft.viewport(S),ft.scissor(N),ft.setScissorTest(U),dt){let Pt=At.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+L,Pt.__webglTexture,k)}else if(Tt){let Pt=At.get(E.texture),Ht=L||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Pt.__webglTexture,k||0,Ht)}_=-1},this.readRenderTargetPixels=function(E,L,k,H,F,dt,Tt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){ft.bindFramebuffer(T.FRAMEBUFFER,Ut);try{let Pt=E.texture,Ht=Pt.format,Jt=Pt.type;if(!vt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-H&&k>=0&&k<=E.height-F&&T.readPixels(L,k,H,F,Gt.convert(Ht),Gt.convert(Jt),dt)}finally{let Pt=I!==null?At.get(I).__webglFramebuffer:null;ft.bindFramebuffer(T.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(E,L,k,H,F,dt,Tt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){let Pt=E.texture,Ht=Pt.format,Jt=Pt.type;if(!vt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-H&&k>=0&&k<=E.height-F){ft.bindFramebuffer(T.FRAMEBUFFER,Ut);let Ft=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ft),T.bufferData(T.PIXEL_PACK_BUFFER,dt.byteLength,T.STREAM_READ),T.readPixels(L,k,H,F,Gt.convert(Ht),Gt.convert(Jt),0);let te=I!==null?At.get(I).__webglFramebuffer:null;ft.bindFramebuffer(T.FRAMEBUFFER,te);let ae=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await bf(T,ae,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ft),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,dt),T.deleteBuffer(Ft),T.deleteSync(ae),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,L=null,k=0){E.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);let H=Math.pow(2,-k),F=Math.floor(E.image.width*H),dt=Math.floor(E.image.height*H),Tt=L!==null?L.x:0,Ut=L!==null?L.y:0;C.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,Tt,Ut,F,dt),ft.unbindTexture()},this.copyTextureToTexture=function(E,L,k=null,H=null,F=0){E.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],L=arguments[2],F=arguments[3]||0,k=null);let dt,Tt,Ut,Pt,Ht,Jt,Ft,te,ae,ce=E.isCompressedTexture?E.mipmaps[F]:E.image;k!==null?(dt=k.max.x-k.min.x,Tt=k.max.y-k.min.y,Ut=k.isBox3?k.max.z-k.min.z:1,Pt=k.min.x,Ht=k.min.y,Jt=k.isBox3?k.min.z:0):(dt=ce.width,Tt=ce.height,Ut=ce.depth||1,Pt=0,Ht=0,Jt=0),H!==null?(Ft=H.x,te=H.y,ae=H.z):(Ft=0,te=0,ae=0);let Re=Gt.convert(L.format),Lt=Gt.convert(L.type),Qt;L.isData3DTexture?(C.setTexture3D(L,0),Qt=T.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(C.setTexture2DArray(L,0),Qt=T.TEXTURE_2D_ARRAY):(C.setTexture2D(L,0),Qt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,L.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,L.unpackAlignment);let fn=T.getParameter(T.UNPACK_ROW_LENGTH),ie=T.getParameter(T.UNPACK_IMAGE_HEIGHT),We=T.getParameter(T.UNPACK_SKIP_PIXELS),Qn=T.getParameter(T.UNPACK_SKIP_ROWS),Pe=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ce.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ce.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ht),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Jt);let Nn=E.isDataArrayTexture||E.isData3DTexture,fe=L.isDataArrayTexture||L.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Ye=At.get(E),xn=At.get(L),Je=At.get(Ye.__renderTarget),dn=At.get(xn.__renderTarget);ft.bindFramebuffer(T.READ_FRAMEBUFFER,Je.__webglFramebuffer),ft.bindFramebuffer(T.DRAW_FRAMEBUFFER,dn.__webglFramebuffer);for(let wn=0;wn<Ut;wn++)Nn&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.get(E).__webglTexture,F,Jt+wn),E.isDepthTexture?(fe&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.get(L).__webglTexture,F,ae+wn),T.blitFramebuffer(Pt,Ht,dt,Tt,Ft,te,dt,Tt,T.DEPTH_BUFFER_BIT,T.NEAREST)):fe?T.copyTexSubImage3D(Qt,F,Ft,te,ae+wn,Pt,Ht,dt,Tt):T.copyTexSubImage2D(Qt,F,Ft,te,ae+wn,Pt,Ht,dt,Tt);ft.bindFramebuffer(T.READ_FRAMEBUFFER,null),ft.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else fe?E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Qt,F,Ft,te,ae,dt,Tt,Ut,Re,Lt,ce.data):L.isCompressedArrayTexture?T.compressedTexSubImage3D(Qt,F,Ft,te,ae,dt,Tt,Ut,Re,ce.data):T.texSubImage3D(Qt,F,Ft,te,ae,dt,Tt,Ut,Re,Lt,ce):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,F,Ft,te,dt,Tt,Re,Lt,ce.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,F,Ft,te,ce.width,ce.height,Re,ce.data):T.texSubImage2D(T.TEXTURE_2D,F,Ft,te,dt,Tt,Re,Lt,ce);T.pixelStorei(T.UNPACK_ROW_LENGTH,fn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ie),T.pixelStorei(T.UNPACK_SKIP_PIXELS,We),T.pixelStorei(T.UNPACK_SKIP_ROWS,Qn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Pe),F===0&&L.generateMipmaps&&T.generateMipmap(Qt),ft.unbindTexture()},this.copyTextureToTexture3D=function(E,L,k=null,H=null,F=0){return E.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,E=arguments[2],L=arguments[3],F=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,L,k,H,F)},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),ft.unbindTexture()},this.resetState=function(){B=0,b=0,I=null,ft.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var qn=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Sc=class extends $e{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ze,u=Ze,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uo=class extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new ue,xh=new ue,Vr=[],wh=new tn,Eg=new ue,Xs=new Ne,qs=new Oi,fo=class extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Eg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),wh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(wh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),qs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),xh.multiplyMatrices(n,hs),Xs.matrixWorld=xh,Xs.raycast(t,Vr);for(let o=0,a=Vr.length;o<a;o++){let c=Vr[o];c.instanceId=r,c.object=this,e.push(c)}Vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sc(new Float32Array(s*this.count),s,this.count,tl,Pn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Cs=class extends $e{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,c=new ue;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(be(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(be(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ar=class extends sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bc=class extends ar{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function al(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Hr=new R,ya=new al,_a=new al,Ea=new al,Tc=class extends sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Hr.subVectors(s[0],s[1]).add(s[0]),l=Hr);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Hr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p),A=Math.pow(f.distanceToSquared(u),p);g<1e-4&&(g=1),m<1e-4&&(m=g),A<1e-4&&(A=g),ya.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,m,g,A),_a.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,m,g,A),Ea.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,m,g,A)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),_a.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ea.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ya.calc(c),_a.calc(c),Ea.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Bg(i,t){let e=1-i;return e*e*t}function Cg(i,t){return 2*(1-i)*i*t}function Sg(i,t){return i*i*t}function er(i,t,e,n){return Bg(i,t)+Cg(i,e)+Sg(i,n)}function bg(i,t){let e=1-i;return e*e*e*t}function Tg(i,t){let e=1-i;return 3*e*e*i*t}function Ig(i,t){return 3*(1-i)*i*i*t}function Dg(i,t){return i*i*i*t}function nr(i,t,e,n,s){return bg(i,t)+Tg(i,e)+Ig(i,n)+Dg(i,s)}var po=class extends sn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ic=class extends sn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y),nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ao=class extends sn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dc=class extends sn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends sn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends sn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y),er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Mh(a,c.x,l.x,u.x,h.x),Mh(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},wo=Object.freeze({__proto__:null,ArcCurve:bc,CatmullRomCurve3:Tc,CubicBezierCurve:po,CubicBezierCurve3:Ic,EllipseCurve:ar,LineCurve:Ao,LineCurve3:Dc,QuadraticBezierCurve:mo,QuadraticBezierCurve3:go,SplineCurve:xo}),Rc=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new wo[s.type]().fromJSON(s))}return this}},Mo=class extends Rc{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ao(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new mo(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new po(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new ar(t,e,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vo=class i extends Qe{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new R,f=new pt,p=new R,m=new R,g=new R,A=0,d=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:A=t[w+1].x-t[w].x,d=t[w+1].y-t[w].y,p.x=d*1,p.y=-A,p.z=d*0,g.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:A=t[w+1].x-t[w].x,d=t[w+1].y-t[w].y,p.x=d*1,p.y=-A,p.z=d*0,m.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),c.push(p.x,p.y,p.z),g.copy(m)}for(let w=0;w<=e;w++){let M=n+w*u*s,x=Math.sin(M),D=Math.cos(M);for(let B=0;B<=t.length-1;B++){h.x=t[B].x*x,h.y=t[B].y,h.z=t[B].x*D,o.push(h.x,h.y,h.z),f.x=w/e,f.y=B/(t.length-1),a.push(f.x,f.y);let b=c[3*B+0]*x,I=c[3*B+1],_=c[3*B+0]*D;l.push(b,I,_)}}for(let w=0;w<e;w++)for(let M=0;M<t.length-1;M++){let x=M+w*t.length,D=x,B=x+t.length,b=x+t.length+1,I=x+1;r.push(D,B,I),r.push(b,I,B)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var yo=class i extends Qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new R,u=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_o=class i extends Qe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],m=0,g=[],A=n/2,d=0;w(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ne(h,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(p,2));function w(){let x=new R,D=new R,B=0,b=(e-t)/n;for(let I=0;I<=r;I++){let _=[],y=I/r,S=y*(e-t)+t;for(let N=0;N<=s;N++){let U=N/s,Q=U*c+a,X=Math.sin(Q),G=Math.cos(Q);D.x=S*X,D.y=-y*n+A,D.z=S*G,h.push(D.x,D.y,D.z),x.set(X,b,G).normalize(),f.push(x.x,x.y,x.z),p.push(U,1-y),_.push(m++)}g.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let y=g[_][I],S=g[_+1][I],N=g[_+1][I+1],U=g[_][I+1];(t>0||_!==0)&&(u.push(y,S,U),B+=3),(e>0||_!==r-1)&&(u.push(S,N,U),B+=3)}l.addGroup(d,B,0),d+=B}function M(x){let D=m,B=new pt,b=new R,I=0,_=x===!0?t:e,y=x===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,A*y,0),f.push(0,y,0),p.push(.5,.5),m++;let S=m;for(let N=0;N<=s;N++){let Q=N/s*c+a,X=Math.cos(Q),G=Math.sin(Q);b.x=_*G,b.y=A*y,b.z=_*X,h.push(b.x,b.y,b.z),f.push(0,y,0),B.x=X*.5+.5,B.y=G*.5*y+.5,p.push(B.x,B.y),m++}for(let N=0;N<s;N++){let U=D+N,Q=S+N;x===!0?u.push(Q,Q+1,U):u.push(Q+1,Q,U),I+=3}l.addGroup(d,I,x===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ss=class extends Mo{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Mo().fromJSON(s))}return this}},Rg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Yh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,p;if(n&&(r=Qg(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let m=e;m<s;m+=e)h=i[m],f=i[m+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return cr(r,o,e,a,c,p,0),o}};function Yh(i,t,e,n,s){let r,o;if(s===Xg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=vh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=vh(r,i[r],i[r+1],o);return o&&Oo(o,o.next)&&(hr(o),o=o.next),o}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Oo(e,e.next)||ve(e.prev,e,e.next)===0)){if(hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&zg(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Ug(i,n,s,r):Pg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),hr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Fg(Gi(i),t,e),cr(i,t,e,n,s,r,2)):o===2&&Lg(i,t,e,n,s,r):cr(Gi(i),t,e,n,s,r,1);break}}}function Pg(i){let t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=p&&ds(s,a,r,c,o,l,m.x,m.y)&&ve(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ug(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,p=a<c?a<l?a:l:c<l?c:l,m=u<h?u<f?u:f:h<f?h:f,g=a>c?a>l?a:l:c>l?c:l,A=u>h?u>f?u:f:h>f?h:f,d=Pc(p,m,t,e,n),w=Pc(g,A,t,e,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=d&&x&&x.z<=w;){if(M.x>=p&&M.x<=g&&M.y>=m&&M.y<=A&&M!==s&&M!==o&&ds(a,u,c,h,l,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=p&&x.x<=g&&x.y>=m&&x.y<=A&&x!==s&&x!==o&&ds(a,u,c,h,l,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=d;){if(M.x>=p&&M.x<=g&&M.y>=m&&M.y<=A&&M!==s&&M!==o&&ds(a,u,c,h,l,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=w;){if(x.x>=p&&x.x<=g&&x.y>=m&&x.y<=A&&x!==s&&x!==o&&ds(a,u,c,h,l,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Fg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Oo(s,r)&&Jh(s,n,n.next,r)&&lr(s,r)&&lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),hr(n),hr(n.next),n=i=r),n=n.next}while(n!==i);return Gi(n)}function Lg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wg(o,a)){let c=Xh(o,a);o=Gi(o,o.next),c=Gi(c,c.next),cr(o,t,e,n,s,r,0),cr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Qg(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Yh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Hg(l));for(s.sort(Ng),r=0;r<s.length;r++)e=Og(s[r],e);return e}function Ng(i,t){return i.x-t.x}function Og(i,t){let e=kg(i,t);if(!e)return t;let n=Xh(e,i);return Gi(n,n.next),Gi(e,e.next)}function kg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ds(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),lr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Gg(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Gg(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function zg(i,t,e,n){let s=i;do s.z===0&&(s.z=Pc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vg(s)}function Vg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Pc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ds(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Wg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Yg(i,t)&&(lr(i,t)&&lr(t,i)&&Jg(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Oo(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Oo(i,t){return i.x===t.x&&i.y===t.y}function Jh(i,t,e,n){let s=Yr(ve(i,t,e)),r=Yr(ve(i,t,n)),o=Yr(ve(e,n,i)),a=Yr(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&Wr(i,e,t)||r===0&&Wr(i,n,t)||o===0&&Wr(e,i,n)||a===0&&Wr(e,t,n))}function Wr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yr(i){return i>0?1:i<0?-1:0}function Yg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Jh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lr(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Jg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xh(i,t){let e=new Uc(i.i,i.x,i.y),n=new Uc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vh(i,t,e,n){let s=new Uc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];yh(t),_h(n,t);let o=t.length;e.forEach(yh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,_h(n,e[c]);let a=Rg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function yh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _h(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Eo=class i extends Qe{constructor(t=new Ss([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,A=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:qg,M,x=!1,D,B,b,I;d&&(M=d.getSpacedPoints(u),x=!0,f=!1,D=d.computeFrenetFrames(u,!1),B=new R,b=new R,I=new R),f||(A=0,p=0,m=0,g=0);let _=a.extractPoints(l),y=_.shape,S=_.holes;if(!gi.isClockWise(y)){y=y.reverse();for(let K=0,j=S.length;K<j;K++){let T=S[K];gi.isClockWise(T)&&(S[K]=T.reverse())}}let U=gi.triangulateShape(y,S),Q=y;for(let K=0,j=S.length;K<j;K++){let T=S[K];y=y.concat(T)}function X(K,j,T){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(j,T)}let G=y.length,nt=U.length;function V(K,j,T){let Dt,st,vt,ft=K.x-j.x,Nt=K.y-j.y,At=T.x-K.x,C=T.y-K.y,v=ft*ft+Nt*Nt,O=ft*C-Nt*At;if(Math.abs(O)>Number.EPSILON){let Z=Math.sqrt(v),z=Math.sqrt(At*At+C*C),q=j.x-Nt/Z,xt=j.y+ft/Z,ct=T.x-C/z,yt=T.y+At/z,Zt=((ct-q)*C-(yt-xt)*At)/(ft*C-Nt*At);Dt=q+ft*Zt-K.x,st=xt+Nt*Zt-K.y;let lt=Dt*Dt+st*st;if(lt<=2)return new pt(Dt,st);vt=Math.sqrt(lt/2)}else{let Z=!1;ft>Number.EPSILON?At>Number.EPSILON&&(Z=!0):ft<-Number.EPSILON?At<-Number.EPSILON&&(Z=!0):Math.sign(Nt)===Math.sign(C)&&(Z=!0),Z?(Dt=-Nt,st=ft,vt=Math.sqrt(v)):(Dt=ft,st=Nt,vt=Math.sqrt(v/2))}return new pt(Dt/vt,st/vt)}let at=[];for(let K=0,j=Q.length,T=j-1,Dt=K+1;K<j;K++,T++,Dt++)T===j&&(T=0),Dt===j&&(Dt=0),at[K]=V(Q[K],Q[T],Q[Dt]);let ut=[],gt,kt=at.concat();for(let K=0,j=S.length;K<j;K++){let T=S[K];gt=[];for(let Dt=0,st=T.length,vt=st-1,ft=Dt+1;Dt<st;Dt++,vt++,ft++)vt===st&&(vt=0),ft===st&&(ft=0),gt[Dt]=V(T[Dt],T[vt],T[ft]);ut.push(gt),kt=kt.concat(gt)}for(let K=0;K<A;K++){let j=K/A,T=p*Math.cos(j*Math.PI/2),Dt=m*Math.sin(j*Math.PI/2)+g;for(let st=0,vt=Q.length;st<vt;st++){let ft=X(Q[st],at[st],Dt);$(ft.x,ft.y,-T)}for(let st=0,vt=S.length;st<vt;st++){let ft=S[st];gt=ut[st];for(let Nt=0,At=ft.length;Nt<At;Nt++){let C=X(ft[Nt],gt[Nt],Dt);$(C.x,C.y,-T)}}}let Mt=m+g;for(let K=0;K<G;K++){let j=f?X(y[K],kt[K],Mt):y[K];x?(b.copy(D.normals[0]).multiplyScalar(j.x),B.copy(D.binormals[0]).multiplyScalar(j.y),I.copy(M[0]).add(b).add(B),$(I.x,I.y,I.z)):$(j.x,j.y,0)}for(let K=1;K<=u;K++)for(let j=0;j<G;j++){let T=f?X(y[j],kt[j],Mt):y[j];x?(b.copy(D.normals[K]).multiplyScalar(T.x),B.copy(D.binormals[K]).multiplyScalar(T.y),I.copy(M[K]).add(b).add(B),$(I.x,I.y,I.z)):$(T.x,T.y,h/u*K)}for(let K=A-1;K>=0;K--){let j=K/A,T=p*Math.cos(j*Math.PI/2),Dt=m*Math.sin(j*Math.PI/2)+g;for(let st=0,vt=Q.length;st<vt;st++){let ft=X(Q[st],at[st],Dt);$(ft.x,ft.y,h+T)}for(let st=0,vt=S.length;st<vt;st++){let ft=S[st];gt=ut[st];for(let Nt=0,At=ft.length;Nt<At;Nt++){let C=X(ft[Nt],gt[Nt],Dt);x?$(C.x,C.y+M[u-1].y,M[u-1].x+T):$(C.x,C.y,h+T)}}}Y(),it();function Y(){let K=s.length/3;if(f){let j=0,T=G*j;for(let Dt=0;Dt<nt;Dt++){let st=U[Dt];Et(st[2]+T,st[1]+T,st[0]+T)}j=u+A*2,T=G*j;for(let Dt=0;Dt<nt;Dt++){let st=U[Dt];Et(st[0]+T,st[1]+T,st[2]+T)}}else{for(let j=0;j<nt;j++){let T=U[j];Et(T[2],T[1],T[0])}for(let j=0;j<nt;j++){let T=U[j];Et(T[0]+G*u,T[1]+G*u,T[2]+G*u)}}n.addGroup(K,s.length/3-K,0)}function it(){let K=s.length/3,j=0;It(Q,j),j+=Q.length;for(let T=0,Dt=S.length;T<Dt;T++){let st=S[T];It(st,j),j+=st.length}n.addGroup(K,s.length/3-K,1)}function It(K,j){let T=K.length;for(;--T>=0;){let Dt=T,st=T-1;st<0&&(st=K.length-1);for(let vt=0,ft=u+A*2;vt<ft;vt++){let Nt=G*vt,At=G*(vt+1),C=j+Dt+Nt,v=j+st+Nt,O=j+st+At,Z=j+Dt+At;wt(C,v,O,Z)}}}function $(K,j,T){c.push(K),c.push(j),c.push(T)}function Et(K,j,T){Bt(K),Bt(j),Bt(T);let Dt=s.length/3,st=w.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);zt(st[0]),zt(st[1]),zt(st[2])}function wt(K,j,T,Dt){Bt(K),Bt(j),Bt(Dt),Bt(j),Bt(T),Bt(Dt);let st=s.length/3,vt=w.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);zt(vt[0]),zt(vt[1]),zt(vt[3]),zt(vt[1]),zt(vt[2]),zt(vt[3])}function Bt(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function zt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wo[s.type]().fromJSON(s)),new i(n,t.options)}},qg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new pt(r,o),new pt(a,c),new pt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],p=t[s*3+1],m=t[s*3+2],g=t[r*3],A=t[r*3+1],d=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new pt(o,1-c),new pt(l,1-h),new pt(f,1-m),new pt(g,1-d)]:[new pt(a,1-c),new pt(u,1-h),new pt(p,1-m),new pt(A,1-d)]}};function Kg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bo=class i extends Qe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=t,f=(e-t)/s,p=new R,m=new pt;for(let g=0;g<=s;g++){for(let A=0;A<=n;A++){let d=r+A/n*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let g=0;g<s;g++){let A=g*(n+1);for(let d=0;d<n;d++){let w=d+A,M=w,x=w+n+1,D=w+n+2,B=w+1;a.push(M,x,B),a.push(x,D,B)}}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Co=class i extends Qe{constructor(t=new Ss([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function l(u){let h=s.length/3,f=u.extractPoints(e),p=f.shape,m=f.holes;gi.isClockWise(p)===!1&&(p=p.reverse());for(let A=0,d=m.length;A<d;A++){let w=m[A];gi.isClockWise(w)===!0&&(m[A]=w.reverse())}let g=gi.triangulateShape(p,m);for(let A=0,d=m.length;A<d;A++){let w=m[A];p=p.concat(w)}for(let A=0,d=p.length;A<d;A++){let w=p[A];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let A=0,d=g.length;A<d;A++){let w=g[A],M=w[0]+h,x=w[1]+h,D=w[2]+h;n.push(M,x,D),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Zg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Zg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var So=class i extends Qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new R,f=new R,p=[],m=[],g=[],A=[];for(let d=0;d<=n;d++){let w=[],M=d/n,x=0;d===0&&o===0?x=.5/e:d===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){let B=D/e;h.x=-t*Math.cos(s+B*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+B*r)*Math.sin(o+M*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),A.push(B+x,1-M),w.push(l++)}u.push(w)}for(let d=0;d<n;d++)for(let w=0;w<e;w++){let M=u[d][w+1],x=u[d][w],D=u[d+1][w],B=u[d+1][w+1];(d!==0||o>0)&&p.push(M,x,B),(d!==n-1||c<Math.PI)&&p.push(x,D,B)}this.setIndex(p),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bo=class i extends Qe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new R,h=new R,f=new R;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let g=m/s*r,A=p/n*Math.PI*2;h.x=(t+e*Math.cos(A))*Math.cos(g),h.y=(t+e*Math.cos(A))*Math.sin(g),h.z=e*Math.sin(A),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let g=(s+1)*p+m-1,A=(s+1)*(p-1)+m-1,d=(s+1)*(p-1)+m,w=(s+1)*p+m;o.push(g,A,w),o.push(A,d,w)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var To=class i extends Qe{constructor(t=new go(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,c=new R,l=new pt,u=new R,h=[],f=[],p=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new ne(h,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(p,2));function g(){for(let M=0;M<e;M++)A(M);A(r===!1?e:0),w(),d()}function A(M){u=t.getPointAt(M/e,u);let x=o.normals[M],D=o.binormals[M];for(let B=0;B<=s;B++){let b=B/s*Math.PI*2,I=Math.sin(b),_=-Math.cos(b);c.x=_*x.x+I*D.x,c.y=_*x.y+I*D.y,c.z=_*x.z+I*D.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function d(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){let D=(s+1)*(M-1)+(x-1),B=(s+1)*M+(x-1),b=(s+1)*M+x,I=(s+1)*(M-1)+x;m.push(D,B,I),m.push(B,b,I)}}function w(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)l.x=M/e,l.y=x/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new wo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ur=class extends Mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Io=class extends ur{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Do=class extends Mi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function jg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fc=class extends bs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yl:r=t,a=2*e-n;break;case _l:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yl:o=t,c=2*n-e;break;case _l:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),g=m*m,A=g*m,d=-f*A+2*f*g-f*m,w=(1+f)*A+(-1.5-2*f)*g+(-.5+f)*m+1,M=(-1-p)*A+(1.5+p)*g+.5*m,x=p*A-p*g;for(let D=0;D!==a;++D)r[D]=d*o[u+D]+w*o[l+D]+M*o[c+D]+x*o[h+D];return r}},Lc=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Qc=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case hc:e=this.InterpolantFactoryMethodLinear;break;case qo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return hc;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&jg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,f=h-n,p=h+n;for(let m=0;m!==n;++m){let g=e[h+m];if(g!==e[f+m]||g!==e[p+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=hc;var zi=class extends Tn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=to;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends Tn{};Nc.prototype.ValueTypeName="color";var Oc=class extends Tn{};Oc.prototype.ValueTypeName="number";var kc=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)Ve.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ro=class extends Tn{InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}};Ro.prototype.ValueTypeName="quaternion";Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=to;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Tn{};Gc.prototype.ValueTypeName="vector";var zc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],m=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}},$g=new zc,Vc=class{constructor(t){this.manager=t!==void 0?t:$g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Po=class extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ba=new ue,Eh=new R,Bh=new R,Hc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),Bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bh),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Wc=class extends Hc{constructor(){super(new yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends Po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Fo=class extends Po{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var cl="\\[\\]\\.:\\/",t0=new RegExp("["+cl+"]","g"),ll="[^"+cl+"]",e0="[^"+cl.replace("\\.","")+"]",n0=/((?:WC+[\/:])*)/.source.replace("WC",ll),i0=/(WCOD+)?/.source.replace("WCOD",e0),s0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ll),r0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ll),o0=new RegExp("^"+n0+i0+s0+r0+"$"),a0=["material","materials","bones","map"],Yc=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t0,"")}static parseTrackName(t){let e=o0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);a0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Yc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R0=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);function dr(i){let t=i>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ko(i,t,e){let n=Math.imul(i|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,2147483647)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var qh=i=>i*i*(3-2*i);function Wi(i,t,e=0){let n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=ko(n,s,e),c=ko(n+1,s,e),l=ko(n,s+1,e),u=ko(n+1,s+1,e),h=qh(r),f=qh(o);return(a+(c-a)*h+(l-a)*f+(a-c-l+u)*h*f)*2-1}function Ln(i,t,e=4,n=0){let s=0,r=1,o=.5,a=0;for(let c=0;c<e;c++)s+=o*Wi(i*r,t*r,n+c*17),a+=o,r*=2.03,o*=.5;return s/a}var me=(i,t,e)=>Math.max(t,Math.min(e,i)),_i=(i,t,e)=>{let n=me((e-i)/(t-i),0,1);return n*n*(3-2*n)};var un={l:i=>i,io:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,o:i=>1-Math.pow(1-i,3),i:i=>i*i*i,o5:i=>1-Math.pow(1-i,5),back:i=>1+(1.5+1)*Math.pow(i-1,3)+1.5*Math.pow(i-1,2)},jn=["M52 0h22v30h-22z","M52 200h22v30h-22z","M0 141V38A10 10 0 0 1 10 28H116A10 10 0 0 1 126 38V62L68 121L46 101Z","M0 169L45 129L68 150L126 90V192A10 10 0 0 1 116 202H10A10 10 0 0 1 0 192Z"];function Oe(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var xe={W:2,H:3.06,CB:.075,CT:.083,A:.25,SEAL:.0055,LOGO_V:.514,LOGO_H:.262};function Kh(i){let{W:t,H:e,CB:n,CT:s,A:r,SEAL:o}=xe,a=dr(i),c=[],l=(A,d,w,M,x,D)=>c.push({x0:(A-.5)*t,y0:(d-.5)*e,dx:Math.cos(w),dy:Math.sin(w),len:M,amp:x,wid:D});for(let A=0;A<15;A++){let d=.06+a()*.88;l(d,1-s,-Math.PI/2+(d-.5)*1.4+(a()-.5)*.5,.25+a()*.55,(a()<.5?-1:1)*(.008+a()*.016),.03+a()*.05)}for(let A=0;A<13;A++){let d=.06+a()*.88;l(d,n,Math.PI/2-(d-.5)*1.3+(a()-.5)*.5,.22+a()*.5,(a()<.5?-1:1)*(.008+a()*.015),.03+a()*.05)}[[.04,1-s,-.9],[.96,1-s,-2.24],[.04,n,.85],[.96,n,2.3]].forEach(([A,d,w])=>{l(A,d,w+(a()-.5)*.2,.7+a()*.5,-.02,.07),l(A+(A<.5?.05:-.05),d,w+(A<.5?.25:-.25),.45,.014,.05)});for(let A=0;A<8;A++){let d=A%2===0;l(d?.015:.985,n+.08+a()*(1-n-s-.16),(d?0:Math.PI)+(a()-.5)*1.2,.18+a()*.25,(a()<.5?-1:1)*.012,.035)}let u=a()*10,h=A=>(A-n)/(1-s-n),f=A=>Math.pow(Math.max(0,1-Math.pow(Math.abs(2*A-1),2.3)),.52),p=A=>Math.pow(Math.max(0,1-Math.pow(Math.abs(2*A-1),5.5)),.4);function m(A,d,w){if(d<=n||d>=1-s)return 0;let M=h(d),x=f(A),D=p(M),B=r*x*D,b=(A-.5)*t,I=(d-.5)*e,_=Math.exp(-(1-s-d)/.03),y=Math.exp(-(d-n)/.027),S=Math.sin(2*Math.PI*(A*8.5+.22*Math.sin(A*6.3+u)))*.7+Math.sin(2*Math.PI*(A*3.2+u))*.3;if(B+=.03*(_+y)*S*Math.min(1,x*1.4),!w)for(let U=0;U<c.length;U++){let Q=c[U],X=b-Q.x0,G=I-Q.y0,nt=X*Q.dx+G*Q.dy,V=me(nt,0,Q.len),at=X-Q.dx*V,ut=G-Q.dy*V,gt=at*at+ut*ut,kt=Q.wid*Q.wid;if(gt>kt*9)continue;let Mt=Math.pow(1-V/Q.len,1.4);B+=Q.amp*Mt*Math.exp(-gt/kt)*Math.min(1,x*2)*Math.min(1,D*3)}let N=Math.exp(-Math.min(A,1-A)/.05);return B+=.01*N*Math.sin(d*Math.PI*9+u+(w?1.3:0))*D,B*=1+.1*Ln(A*2+(w?7:0),d*2.4,2,i),B+=.018*Math.sin(A*5.2+d*3.1+u)*Math.sin(d*4.4-A*1.7)*x*D,B}function g(A,d,w){let M=me(h(d),0,1),x=d>n&&d<1-s,B=1-.05*(x?Math.exp(-(d-n)/.07)+Math.exp(-(1-s-d)/.07):0)*Math.pow(Math.abs(2*A-1),3)-(x?.006:0),b=(A-.5)*t*B,I=(d-.5)*e,_=Math.min(1,Math.min(A,1-A)/.006),y=w*(o*_+m(A,d,w<0));return[b,I,y]}return{P:g,pu:f,ps:p,bodyS:h}}function Yi(i){let{CT:t}=xe,e=n=>Math.abs((n%1+1)%1-.5)*2;return 1-t-.018+.006*(e(i*31)-.5)+.003*Wi(i*40,3.7)}function Ds(i,t,e,n,s,r,o,a){let c=new Float32Array((n+1)*(s+1)*3),l=new Float32Array(c.length),u=new Float32Array((n+1)*(s+1)*2),h=new Float32Array((n+1)*(s+1)),f=1e-4,p=0;for(let A=0;A<=s;A++)for(let d=0;d<=n;d++){let w=d/n,M=r(w),x=o(w),D=M+(x-M)*(A/s),B=t.P(w,D,e),b=t.P(Math.min(1,w+f),D,e),I=t.P(Math.max(0,w-f),D,e),_=t.P(w,Math.min(1,D+f),e),y=t.P(w,Math.max(0,D-f),e),S=b[0]-I[0],N=b[1]-I[1],U=b[2]-I[2],Q=_[0]-y[0],X=_[1]-y[1],G=_[2]-y[2],nt=N*G-U*X,V=U*Q-S*G,at=S*X-N*Q,ut=Math.hypot(nt,V,at)||1;nt/=ut,V/=ut,at/=ut,e<0&&(nt=-nt,V=-V,at=-at),c.set(B,p*3),l.set([nt,V,at],p*3),u[p*2]=e>0?w:1-w,u[p*2+1]=D,h[p]=a?e*a(w,D):0,p++}let m=[];for(let A=0;A<s;A++)for(let d=0;d<n;d++){let w=A*(n+1)+d,M=w+1,x=w+n+1,D=x+1;e>0?m.push(w,M,D,w,D,x):m.push(w,D,M,w,x,D)}let g=new i.BufferGeometry;return g.setAttribute("position",new i.BufferAttribute(c,3)),g.setAttribute("normal",new i.BufferAttribute(l,3)),g.setAttribute("uv",new i.BufferAttribute(u,2)),g.setAttribute("aMouth",new i.BufferAttribute(h,1)),g.setIndex(m),g}function c0(i,t,e){let{CB:n,CT:s}=xe,r=new Float32Array(i*t);for(let o=0;o<t;o++){let a=1-(o+.5)/t;for(let c=0;c<i;c++){let l=(c+.5)/i,u;if(a<n||a>1-s){let h=Math.pow(.5+.5*Math.cos(l*Math.PI*2*24),1.6),f=a<n?n-a:a-(1-s),p=a<n?a:1-a;u=.3*h*(.85+.15*Wi(l*6,a*9,e))-.2*Math.exp(-f/.006)-.12*Math.exp(-p/.005)}else{let h=1+1.8*(Math.exp(-(a-n)/.12)+Math.exp(-(1-s-a)/.12)),f=1-Math.abs(Wi(l*14,a*22/h,e+5)),p=1-Math.abs(Wi(l*37+3.1,a*55/h,e+9));u=.012*f*f+.006*p*p+.018*Wi(l*4.5,a*6.5/h,e+13)}r[o*i+c]=u}}return r}function l0(i,t,e,n){let s=Oe(t,e),r=s.getContext("2d"),o=r.createImageData(t,e),a=o.data;for(let c=0;c<e;c++)for(let l=0;l<t;l++){let u=i[c*t+Math.max(0,l-1)],h=i[c*t+Math.min(t-1,l+1)],f=i[Math.max(0,c-1)*t+l],p=i[Math.min(e-1,c+1)*t+l],m=(u-h)*n,g=(p-f)*n,A=1,d=Math.hypot(m,g,A);m/=d,g/=d,A/=d;let w=(c*t+l)*4;a[w]=(m*.5+.5)*255,a[w+1]=(g*.5+.5)*255,a[w+2]=(A*.5+.5)*255,a[w+3]=255}return r.putImageData(o,0,0),s}function h0(i,t,e,n){let s=n/230;i.save(),i.translate(t-63*s,e-115*s),i.scale(s,s),jn.forEach(r=>i.fill(new Path2D(r))),i.restore()}var u0='Inter, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif';function f0(i,t,e,n){if(!t)return;let s=Math.round(n*.047),r=s*.2;i.font="800 "+s+"px "+u0,i.textBaseline="alphabetic";let o=[...String(t)],a=o.map(h=>i.measureText(h).width),c=a.reduce((h,f)=>h+f,0)+r*(o.length-1),l=e/2-c/2,u=n*.694;o.forEach((h,f)=>{i.fillText(h,l,u),l+=a[f]+r})}function d0(i,t,e,n){let{LOGO_V:s,LOGO_H:r,CB:o,CT:a}=xe,c=i/2,l=(1-s)*t,u=r*t,h=(g,A)=>{g.fillStyle=A,g.fillRect(0,0,i,a*t),g.fillRect(0,(1-o)*t,i,o*t)},f=(g,A)=>{g.fillStyle=A,h0(g,c,l,u),f0(g,m.label,i,t)},p={color:g=>{g.fillStyle=e,g.fillRect(0,0,i,t),f(g,"#a6f357")},orm:g=>{g.fillStyle="rgb(0,56,255)",g.fillRect(0,0,i,t),h(g,"rgb(0,84,255)"),f(g,"rgb(0,215,0)")},emissive:g=>{g.fillStyle="#505050",g.fillRect(0,0,i,t),h(g,"#7a7a7a"),f(g,"#fff")},coat:g=>{g.fillStyle="rgb(200,0,0)",g.fillRect(0,0,i,t),h(g,"rgb(255,0,0)"),f(g,"rgb(18,0,0)")}},m={label:n||null};for(let g in p)m[g]=Oe(i,t);return m.draw=g=>{m.label=g||null;for(let A in p)p[A](m[A].getContext("2d"))},m.draw(n),m}function $n(i,t={}){var n,s;let e={uHoloAmt:{value:(n=t.amt)!=null?n:.1},uHoloShift:{value:0},uMouth:{value:0},uHoloBase:{value:(s=t.base)!=null?s:0}};return i.userData.holo=e,i.onBeforeCompile=r=>{Object.assign(r.uniforms,e),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aMouth;
uniform float uMouth;
varying vec2 vHUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+(t.mouth?`transformed.z += uMouth * aMouth;
`:"")+"vHUv = uv;"),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHoloAmt;
uniform float uHoloShift;
uniform float uHoloBase;
varying vec2 vHUv;`).replace("#include <opaque_fragment>",["{","  vec3 vdir = normalize(vViewPosition);","  float ndv = clamp(abs(dot(normal, vdir)), 0.0, 1.0);","  float ph = uHoloShift + normal.x * 1.7 - normal.y * 1.2 + vHUv.x * 2.6 + vHUv.y * 3.4;","  vec3 spec = 0.5 + 0.5 * cos(6.28318 * (ph + vec3(0.0, 0.33, 0.67)));","  float lum = dot(outgoingLight, vec3(0.299, 0.587, 0.114));","  float m = uHoloAmt * (0.3 + 0.7 * pow(1.0 - ndv, 1.6)) * (0.2 + smoothstep(0.04, 0.7, lum)) * max(metalnessFactor, uHoloBase);","  outgoingLight += spec * m;","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"holo"+(t.mouth?"m":""),e}function Zh(i,t=.3){let e=Kh(7),n=Math.round(110*t),s=Math.round(170*t),r=()=>0,o=()=>1;return[Ds(i,e,1,n,s,r,o,null),Ds(i,e,-1,n,s,r,o,null)]}function Rs(i,t={}){var gt,kt;let{W:e,H:n}=xe,s=(gt=t.quality)!=null?gt:1,r=Kh((kt=t.seed)!=null?kt:7),o=Math.round(110*s),a=Math.round(170*s),c=Math.round(18*s),l=(Mt,Y)=>{let it=Yi(Mt),It=me((Y-(it-.26))/.26,0,1);return .15*Math.pow(r.pu(Mt),.8)*It*It},u=Ds(i,r,1,o,a,()=>0,Yi,l),h=Ds(i,r,-1,o,a,()=>0,Yi,l),f=Ds(i,r,1,o,c,Yi,()=>1,null),p=Ds(i,r,-1,o,c,Yi,()=>1,null),m=Math.round(384*s),g=Math.round(576*s),A=new i.CanvasTexture(l0(c0(m,g,5),m,g,2.8));A.anisotropy=8;let d=d0(512,768,t.metal||"#b4f25e",t.label),w=(Mt,Y)=>{let it=new i.CanvasTexture(Mt);return Y&&(it.colorSpace=i.SRGBColorSpace),it.anisotropy=4,it},M=w(d.color,!0),x=w(d.orm),D=w(d.emissive,!0),B=w(d.coat),b=Mt=>{let Y=new i.MeshPhysicalMaterial({color:16777215,map:Mt?M:null,metalness:1,roughness:1,roughnessMap:x,metalnessMap:x,normalMap:A,normalScale:new i.Vector2(.85,.85),clearcoat:1,clearcoatRoughness:.07,clearcoatMap:B,iridescence:.32,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],iridescenceMap:B,emissive:new i.Color("#a6f357"),emissiveMap:Mt?D:null,emissiveIntensity:Mt?.85:.075,envMapIntensity:1.25,side:i.DoubleSide});return Mt||(Y.color=new i.Color(t.metal||"#b4f25e"),Y.metalnessMap=null,Y.roughnessMap=null,Y.roughness=.24,Y.clearcoatMap=null,Y.iridescenceMap=null),Y},I=b(!0),_=b(!1),y=I.clone(),S=_.clone(),N=[$n(I,{mouth:!0,amt:.08}),$n(_,{mouth:!0,amt:.06}),$n(y,{amt:.08}),$n(S,{amt:.06})],U=new i.Group,Q=new i.Group,X=new i.Group,G=new i.Group;Q.add(new i.Mesh(u,I),new i.Mesh(h,_));let nt=new i.Mesh(f,y),V=new i.Mesh(p,S),at=new i.Vector3(e/2,(Yi(1)-.5)*n,0);G.position.copy(at),nt.position.sub(at),V.position.sub(at),X.add(nt,V),G.add(X),U.add(Q,G),U.traverse(Mt=>{Mt.isMesh&&(Mt.castShadow=!1,Mt.frustumCulled=!1)});let ut={group:U,body:Q,top:G,dims:{W:e,H:n,tearY:(Yi(.5)-.5)*n},materials:[I,_,y,S],setTear(Mt){let Y=_i(0,.35,Mt),it=_i(.25,1,Mt);G.rotation.z=Y*.22+it*.9,G.position.set(at.x+it*1.6,at.y+Y*.05+it*2.6,it*.6),G.visible=Mt<.995,nt.material.opacity=V.material.opacity=1},setMouth(Mt){N.forEach(Y=>{Y.uMouth.value=Mt})},setHolo(Mt,Y){N.forEach((it,It)=>{it.uHoloShift.value=Mt,Y!=null&&(it.uHoloAmt.value=Y*(It%2?.8:1))})},textures:[M,x,D,B,A],setLabel(Mt){(Mt||null)!==d.label&&(d.draw(Mt),[M,x,D,B].forEach(Y=>{Y.needsUpdate=!0}))},setEmissive(Mt){I.emissiveIntensity=y.emissiveIntensity=Mt},dispose(){U.traverse(Mt=>{Mt.geometry&&Mt.geometry.dispose()}),[M,x,D,B,A].forEach(Mt=>Mt.dispose()),ut.materials.forEach(Mt=>Mt.dispose())}};return ut.setTear(0),ut}var jh={G:"M12.17 16.44C14.41 16.44 16.02 15.04 16.02 12.71V11.56H12.27V13.08H14.02C14 14.03 13.34 14.62 12.19 14.62C10.87 14.62 10.1 13.64 10.1 11.94C10.1 10.26 10.91 9.29 12.18 9.29C13.05 9.29 13.63 9.72 13.83 10.44H15.92C15.71 8.7 14.15 7.47 12.15 7.47C9.82 7.47 7.98 9.12 7.98 11.97C7.98 14.73 9.68 16.44 12.17 16.44Z"},hl={TSLA:{name:"Tesla",acc:"#A259FF",glow:"#8B4BF5",lf:"#fff",ink:1,lvb:"0 -0.005 39.017 24.01",wvb:"-0.005 -0.005 24.01 24.01",d:"M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z"},SPCX:{name:"SpaceX",acc:"#8EBBFF",glow:"#8EBBFF",lf:"#fff",ink:1.625,lvb:"0 4.615 24 14.769",wvb:"0 0 24 24",d:"M24 7.417C8.882 8.287 1.89 14.75.321 16.28L0 16.583h2.797C10.356 9.005 21.222 7.663 24 7.417zm-17.046 6.35c-.472.321-.945.68-1.398 1.02l2.457 1.796h2.778zM2.948 10.8H.189l3.25 2.381c.473-.321 1.02-.661 1.512-.945Z"},GME:{name:"GameStop",acc:"#E5489B",glow:"#D63A8A",lf:"#fff",ink:1,lvb:"0 0 24 24",wvb:"0 0 24 24",initial:"G"},META:{name:"Meta Platforms",acc:"#1E8BF5",glow:"#1E8BF5",lf:"#fff",ink:1.06,lvb:"0 0.675 36.806 22.65",wvb:"0 0 24 24",d:"M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"},AMZN:{name:"Amazon",acc:"#FF9900",glow:"#3B4D63",lf:"#FF9900",ink:1.012,lvb:"0 0.148 38.519 23.704",wvb:"0 0.001 24 24",d:"M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z"},AAPL:{name:"Apple",acc:"#DDE2E8",glow:"#DDE2E8",lf:"#E9EAEC",ink:.717,lvb:"2.225 -1.643 44.339 27.285",wvb:"-1.643 -1.643 27.285 27.285",d:"M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"},NVDA:{name:"NVIDIA",acc:"#76B900",glow:"#6FB300",lf:"#fff",ink:.997,lvb:"0 -0.037 39.12 24.074",wvb:"-0.037 -0.037 24.074 24.074",d:"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"}};function p0(i){for(var t=2166136261,e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function A0(i){return function(){i=i+1831565813|0;var t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Go={};function $h(i,t,e){var n=i+":"+(t||56)+":"+(e||100);if(Go[n])return Go[n];t=t||56,e=e||100;for(var s=A0(p0(i)),r=0,o=[],a=0;a<t;a++)r+=s()-.5+Math.sin(a/5+s())*.18,o.push(r);for(var c=Math.min.apply(null,o),l=Math.max.apply(null,o),u=l-c||1,h=o.map(function(d,w){return[w*250/(t-1),e*.08+(1-(d-c)/u)*e*.84]}),f="M"+h[0][0].toFixed(1)+","+h[0][1].toFixed(1),p=1;p<t;p++){var m=h[p-1],g=h[p],A=((m[0]+g[0])/2).toFixed(1);f+=" C"+A+","+m[1].toFixed(1)+" "+A+","+g[1].toFixed(1)+" "+g[0].toFixed(1)+","+g[1].toFixed(1)}return Go[n]={line:f,area:f+" L250,"+e+" L0,"+e+" Z"},Go[n]}var He={W:1.5,H:2.25,R:.107},zo='-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, Arial, sans-serif';function m0(i){return i.split(/\s+/).map(Number)}function pr(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function tu(i,t,e,n,s){let r=e;for(let o of t)i.fillText(o,r,n),r+=i.measureText(o).width+s;return r-e-s}function eu(i,t,e,n,s,r,o,a){let[c,l,u,h]=m0(o),f=Math.max(s/u,r/h);i.save(),i.beginPath(),i.rect(e,n,s,r),i.clip(),i.translate(e-c*f+(s-u*f)*0,n-l*f+(r-h*f)/2),i.scale(f,f),i.fillStyle=a,i.strokeStyle=a,t.initial?(i.lineWidth=1.8,i.beginPath(),i.arc(12,12,10.6,0,Math.PI*2),i.stroke(),i.fill(new Path2D(jh[t.initial]),"evenodd")):i.fill(new Path2D(t.d),"evenodd"),i.restore()}function Ji(i,t){let e=parseInt(i.slice(1),16);return"rgba("+(e>>16&255)+","+(e>>8&255)+","+(e&255)+","+t+")"}var ul="#A6F357";function Ar(i,t,e=512,n={}){let s=Math.round(e*1.5),r=e/100,[o,a,c]=i,l=n.power?Object.assign({},hl[o],{acc:ul,glow:ul}):hl[o],u=Oe(e,s),h=u.getContext("2d"),f=e*12/168,p=t==="orm",m=t==="glow";if(h.save(),pr(h,0,0,e,s,f),h.clip(),h.fillStyle=p?"rgb(0,96,0)":"#0c0e0d",h.fillRect(0,0,e,s),m&&(h.fillStyle="#000",h.fillRect(0,0,e,s)),!p){if(!m){h.save(),h.translate(.22*e,.1*s),h.scale(1.1*e,.7*s);let S=h.createRadialGradient(0,0,0,0,0,1);S.addColorStop(0,Ji(l.glow,.3)),S.addColorStop(.6,Ji(l.glow,0)),h.fillStyle=S,h.fillRect(-1,-1,2,2),h.restore()}eu(h,l,e+34*r-118*r,s+8*r-118*r,118*r,118*r,l.wvb,Ji(l.acc,m?.07:.13))}let g=S=>p?"rgb(0,58,235)":m?"rgba(255,255,255,"+S*.7+")":"rgba(255,255,255,"+S+")",A=$h(o),d=s-33*r-.22*s,w=.22*s;if(h.save(),h.translate(0,d),h.scale(e/250,w/100),!p){let S=h.createLinearGradient(0,0,0,100);S.addColorStop(0,Ji(l.acc,m?.22:.26)),S.addColorStop(1,Ji(l.acc,0)),h.fillStyle=S,h.fill(new Path2D(A.area))}h.restore(),h.save(),h.translate(0,d);let M=new Path2D,x=new DOMMatrix().scale(e/250,w/100);M.addPath(new Path2D(A.line),x),h.lineWidth=2*e/168,h.lineJoin="round",h.strokeStyle=p?"rgb(0,40,200)":m?"#fff":l.acc,h.stroke(M),h.restore();let D=10*r,B=10*r*l.ink;eu(h,l,6.4*r,6.4*r,B,D,l.lvb,p?"rgb(0,58,235)":m?"#fff":l.lf),h.fillStyle=g(1),h.textBaseline="middle",h.font="800 "+7.6*r+"px "+zo,tu(h,o,6.4*r+B+2.4*r,6.4*r+D/2,-.01*7.6*r);let b="$"+a.toLocaleString("en-US"),I=(b.length>=8?18.5:22)*r;h.font="400 "+I+"px "+zo,h.textBaseline="alphabetic",tu(h,b,6.4*r,22*r+I*.8,-.04*I),h.font="600 "+5.2*r+"px "+zo,h.fillStyle=p?"rgb(0,96,0)":g(.75),h.textBaseline="top",h.fillText(l.name,6.4*r,45.6*r);let _=s-7.6*r;h.font="400 "+5.2*r+"px "+zo,h.fillStyle=p?"rgb(0,96,0)":g(.72),h.textBaseline="alphabetic",h.fillText((+c).toFixed(2)+" shares",6.4*r,_);let y=i[3];if(y!=null){let S=Math.max(0,Math.floor(+y)),N=S<365?S+(S===1?" day":" days"):x0(S),U=1.3*r,Q=e-6.4*r-U,X=h.measureText("0").actualBoundingBoxAscent||5.2*r*.72,G=_-X/2;h.textAlign="right",h.fillText(N,Q-U-2.4*r,_),h.textAlign="left",h.beginPath(),h.arc(Q,G,U,0,Math.PI*2),h.fillStyle=p?"rgb(0,96,0)":g(.3),h.fill(),u.live=[Q/e,G/s]}if(h.restore(),h.save(),pr(h,1.5,1.5,e-3,s-3,f-1.5),p)h.strokeStyle="rgb(0,30,255)";else{let S=h.createConicGradient(-34*Math.PI/180-Math.PI/2,e/2,s/2);S.addColorStop(0,"#ffffff"),S.addColorStop(.12,l.acc),S.addColorStop(.3,Ji(l.acc,.35)),S.addColorStop(.5,"#ffffff"),S.addColorStop(.7,Ji(l.acc,.35)),S.addColorStop(.91,l.acc),S.addColorStop(1,"#ffffff"),h.strokeStyle=S}return h.lineWidth=p?6:3,h.stroke(),h.restore(),u}function fl(i=512){let t=Math.round(i*1.5),e=Oe(i,t),n=e.getContext("2d"),s=i*12/168;pr(n,0,0,i,t,s),n.clip();let r=n.createRadialGradient(i/2,0,0,i/2,0,t*.9);r.addColorStop(0,"#20261a"),r.addColorStop(.7,"#0a0c08"),n.fillStyle=r,n.fillRect(0,0,i,t),n.save(),pr(n,i*.04,i*.04,i*.92,t-i*.08,s*.6),n.clip(),n.strokeStyle="rgba(166,243,87,0.06)",n.lineWidth=1.5;for(let c=-t;c<i+t;c+=i*.036)n.beginPath(),n.moveTo(c,0),n.lineTo(c+t,t),n.stroke();n.restore(),pr(n,i*.04,i*.04,i*.92,t-i*.08,s*.6),n.strokeStyle="rgba(166,243,87,0.35)",n.lineWidth=2,n.stroke();let o=t*.3,a=o/230;return n.save(),n.translate(i/2-63*a,t/2-115*a),n.scale(a,a),n.shadowColor="rgba(166,243,87,0.5)",n.shadowBlur=40/a,n.fillStyle="#a6f357",jn.forEach(c=>n.fill(new Path2D(c))),n.restore(),e}function g0(i,t,e,n){let s=new i.Shape,r=-t/2,o=-e/2;return s.moveTo(r+n,o),s.lineTo(r+t-n,o),s.quadraticCurveTo(r+t,o,r+t,o+n),s.lineTo(r+t,o+e-n),s.quadraticCurveTo(r+t,o+e,r+t-n,o+e),s.lineTo(r+n,o+e),s.quadraticCurveTo(r,o+e,r,o+e-n),s.lineTo(r,o+n),s.quadraticCurveTo(r,o,r+n,o),s}function nu(i,t,e,n,s){let r=new i.ShapeGeometry(t,10),o=r.attributes.position,a=r.attributes.uv;for(let c=0;c<o.count;c++)a.setXY(c,s?.5-o.getX(c)/e:o.getX(c)/e+.5,o.getY(c)/n+.5);return r}function Vo(i,t,e={}){let{W:n,H:s,R:r}=He,o=.012,a=g0(i,n,s,r),c=(rt,ht)=>{let bt=new i.CanvasTexture(rt);return ht&&(bt.colorSpace=i.SRGBColorSpace),bt.anisotropy=8,bt},l=c(Ar(t,"face"),!0),u=c(Ar(t,"orm")),h=e.power?c(Ar(t,"face",512,{power:!0}),!0):l,f=e.backTex||c(fl(),!0),p=new i.MeshPhysicalMaterial({map:l,roughnessMap:u,metalnessMap:u,roughness:1,metalness:1,clearcoat:1,clearcoatRoughness:.03,iridescence:.18,iridescenceIOR:1.3,iridescenceThicknessRange:[200,700],emissive:new i.Color(16777215),emissiveMap:l,emissiveIntensity:.62,envMapIntensity:.34,transparent:!0}),m=$n(p,{amt:.1,base:.07}),g={uPow:{value:0},tFaceOn:{value:h}},A=p.onBeforeCompile;p.onBeforeCompile=(rt,ht)=>{A(rt,ht),Object.assign(rt.uniforms,g),rt.fragmentShader=rt.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPow;
uniform sampler2D tFaceOn;`).replace("#include <map_fragment>",`#ifdef USE_MAP
  diffuseColor *= mix(texture2D(map, vMapUv), texture2D(tFaceOn, vMapUv), uPow);
#endif`).replace("#include <emissivemap_fragment>",`#ifdef USE_EMISSIVEMAP
  totalEmissiveRadiance *= mix(texture2D(emissiveMap, vEmissiveMapUv), texture2D(tFaceOn, vEmissiveMapUv), uPow).rgb;
#endif`)},p.customProgramCacheKey=()=>"holo-card";let d=new i.MeshPhysicalMaterial({map:f,roughness:.4,metalness:.1,clearcoat:1,clearcoatRoughness:.05,emissive:new i.Color(16777215),emissiveMap:f,emissiveIntensity:.32,transparent:!0}),w=new i.MeshStandardMaterial({color:1382415,roughness:.5,metalness:.6,transparent:!0}),M=new i.Group,x=new i.Mesh(nu(i,a,n,s,!1),p);x.position.z=o/2;let D=new i.Mesh(nu(i,a,n,s,!0),d);D.position.z=-o/2,D.rotation.y=Math.PI;let B=new i.ExtrudeGeometry(a,{depth:o,bevelEnabled:!1,curveSegments:10});B.translate(0,0,-o/2);let b=new i.Mesh(B,[new i.MeshBasicMaterial({visible:!1}),w]);M.add(b,x,D);let I=.255,_=.155,y=_/2-.0115,S=new i.Group;S.position.set(n/2-.096-I/2,s/2-.171,o/2+8e-4);let N=new i.Shape;N.absarc(-I/2+_/2,0,_/2,Math.PI/2,Math.PI*1.5,!1),N.absarc(I/2-_/2,0,_/2,-Math.PI/2,Math.PI/2,!1);let U=(rt,ht)=>new i.MeshBasicMaterial({color:rt,transparent:!0,opacity:ht!=null?ht:1,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Q=new i.Color("#3a3a3d"),X=new i.Color(ul),G=U(Q.clone()),nt=U(0,.28),V=U(16777215),at=new i.Mesh(new i.ShapeGeometry(N,24),G),ut=new i.Mesh(new i.CircleGeometry(y+.008,40),nt);ut.position.z=3e-4;let gt=new i.Mesh(new i.CircleGeometry(y,40),V);gt.position.z=6e-4;let kt=Oe(64,117),Mt=kt.getContext("2d");Mt.scale(64/126,117/230),Mt.fillStyle="#fff",jn.forEach(rt=>Mt.fill(new Path2D(rt)));let Y=new i.CanvasTexture(kt);Y.colorSpace=i.SRGBColorSpace;let it=new i.Color("#bcbcbc"),It=new i.Color("#86c93f"),$=new i.MeshBasicMaterial({map:Y,color:it.clone(),transparent:!0,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Et=y*1.08,wt=new i.Mesh(new i.PlaneGeometry(Et*126/230,Et),$);wt.position.z=9e-4,S.add(at,ut,gt,wt),[at,ut,gt,wt].forEach((rt,ht)=>{rt.renderOrder=10+ht}),M.add(S);let Bt=[G,nt,V,$],zt=[1,.28,1,1],K=rt=>{let ht=-I/2+_/2+(I-_)*rt,bt=Math.sin(Math.PI*Math.min(1,Math.max(0,rt)));gt.position.x=ut.position.x=wt.position.x=ht,gt.scale.set(1+.22*bt,1,1),ut.scale.set(1+.22*bt,1,1),ut.position.y=-.006;let Gt=Math.min(1,Math.max(0,rt));G.color.copy(Q).lerp(X,Gt),$.color.copy(it).lerp(It,Gt)};K(0);let j=l.image,[T,Dt]=j.live||[.5,.5],st=new i.Group;st.position.set((T-.5)*n,(.5-Dt)*s,o/2+.0012),st.userData.has=!!j.live;let vt=Oe(128,128),ft=vt.getContext("2d"),Nt=ft.createRadialGradient(64,64,0,64,64,64);Nt.addColorStop(0,"rgba(255,255,255,1)"),Nt.addColorStop(.18,"rgba(255,255,255,0.55)"),Nt.addColorStop(.45,"rgba(255,255,255,0.14)"),Nt.addColorStop(1,"rgba(255,255,255,0)"),ft.fillStyle=Nt,ft.fillRect(0,0,128,128);let At=new i.CanvasTexture(vt);At.colorSpace=i.SRGBColorSpace;let C=(rt,ht)=>new i.MeshBasicMaterial({color:rt,map:ht||null,transparent:!0,opacity:0,toneMapped:!1,depthWrite:!1,blending:i.AdditiveBlending,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),v=C(X,At),O=C(X),Z=C(X),z=C(new i.Color("#f1ffe0")),q=new i.Mesh(new i.PlaneGeometry(.2,.2),v),xt=new i.Mesh(new i.RingGeometry(.8,1,48),O);xt.position.z=2e-4;let ct=new i.Mesh(new i.CircleGeometry(.019,32),Z);ct.position.z=4e-4;let yt=new i.Mesh(new i.CircleGeometry(.008,24),z);yt.position.z=6e-4,st.add(q,xt,ct,yt),[q,xt,ct,yt].forEach((rt,ht)=>{rt.renderOrder=20+ht}),M.add(st);let Zt=[v,O,Z,z],lt=1,Rt=(rt,ht)=>{if(rt=Math.min(1,Math.max(0,rt))*lt,st.visible=st.userData.has&&rt>.003,!st.visible)return;let bt=ht/1.6%1,Gt=Math.exp(-bt*7);Z.opacity=rt*(.78+.22*Gt),z.opacity=rt*(.55+.45*Gt),v.opacity=rt*(.32+.6*Gt),q.scale.setScalar(.85+.3*Gt);let Xt=.021+bt*.07;xt.scale.setScalar(Xt),O.opacity=rt*Math.pow(1-bt,2)*.75};Rt(0,0),M.traverse(rt=>{rt.isMesh&&(rt.frustumCulled=!1)});let Ot=[p,d,w];return{group:M,row:t,setOn(rt){p.emissiveIntensity=.62+rt*.5,m.uHoloAmt.value=.1+rt*.14},setHolo(rt){m.uHoloShift.value=rt},setOpacity(rt){lt=rt,Ot.forEach(ht=>{ht.opacity=rt,ht.depthWrite=rt>.98}),Bt.forEach((ht,bt)=>{ht.opacity=rt*zt[bt]}),M.visible=rt>.003},setToggle:K,setPower(rt){g.uPow.value=Math.min(1,Math.max(0,rt))},setLive:Rt,textures:[l,u,f,h,At],dispose(){[l,u,h,Y,At].forEach(rt=>rt.dispose()),Ot.forEach(rt=>rt.dispose()),Bt.forEach(rt=>rt.dispose()),Zt.forEach(rt=>rt.dispose())}}}function x0(i){let t=Math.floor(i/365),e=i%365,n=Math.min(11,Math.floor(e/30)),s=e-n*30;return t+"y "+n+"m "+s+"d"}function Ei(i,t){let e=new i.Scene;e.background=new i.Color(.055,.058,.05);let n=(a,c,l,u,h,f,p)=>{let m=new i.Mesh(new i.PlaneGeometry(a,c),new i.MeshBasicMaterial({color:new i.Color(p||16777215).multiplyScalar(f),side:i.DoubleSide}));return m.position.set(l,u,h),m.lookAt(0,0,0),e.add(m),m},s=(a,c,l,u,h)=>{let f=new i.Mesh(new i.SphereGeometry(a,16,12),new i.MeshBasicMaterial({color:new i.Color(16777215).multiplyScalar(h)}));f.position.set(c,l,u),e.add(f)};n(9,2.6,0,7,5.5,2.4),n(12,5,0,3,9,.62),n(12,4.5,0,-2,9,.26),n(.5,7,-2.2,.5,8.6,2.6),n(.35,7,2.6,0,8.6,1.8),n(5,2.2,-1.5,-4.5,7,1.4),n(1.6,9,-7,.8,3.5,3.2),n(1.3,8,6.5,-.5,3,2.4),n(7,1,0,5.5,-6,1.6),n(3,3,-4,-5,4,.7,15662048),n(16,16,0,-9,0,.16),n(16,9,0,0,-9,.1),n(9,6,-9,0,-2,.32),n(9,6,9,.5,-1,.28),s(.42,-2.6,3.6,5.4,14),s(.3,3.2,-2.1,5,10),s(.22,1.2,4.4,4.6,12),s(.26,-4.2,-.6,4.4,11),s(.2,4.6,2.2,4.2,12),s(.18,-.8,-3.6,5.2,9);let r=new i.PMREMGenerator(t),o=r.fromScene(e,.035);return r.dispose(),e.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose()}),o.texture}var w0=" .'`,:;-~^\"!i|+<>=?*/\\tlfjrcxzvunoeasYJCLQ0OZmwqpdbkhaB8&%#@$";function M0(i,t,e,n){let s=Math.round(t*n),r=Math.round(e*n),o=Math.round(r*.86)+'px ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Roboto Mono", monospace',a=Oe(s,r),c=a.getContext("2d",{willReadFrequently:!0});c.font=o,c.textAlign="center",c.textBaseline="middle";let l=[];for(let A of w0){c.clearRect(0,0,s,r),c.fillStyle="#fff",c.fillText(A,s/2,r/2+r*.04);let d=c.getImageData(0,0,s,r).data,w=0;for(let M=3;M<d.length;M+=4)w+=d[M];l.push([A,w])}l.sort((A,d)=>A[1]-d[1]);let u=l[l.length-1][1]||1,h=24,f=[" "];for(let A=1;A<h;A++){let d=Math.pow(A/(h-1),1.15)*u,w=l[1];for(let M of l)Math.abs(M[1]-d)<Math.abs(w[1]-d)&&f.indexOf(M[0])<0&&(w=M);f.push(w[0])}let p=Oe(s*h,r),m=p.getContext("2d");m.font=o,m.textAlign="center",m.textBaseline="middle",m.fillStyle="#fff",f.forEach((A,d)=>m.fillText(A,d*s+s/2,r/2+r*.04));let g=new i.CanvasTexture(p);return g.minFilter=g.magFilter=i.NearestFilter,g.generateMipmaps=!1,{tex:g,N:h,gw:s,gh:r}}function ti(i,t={}){var a,c,l,u;let e=new i.MeshLambertMaterial({color:(a=t.color)!=null?a:16777215,map:t.map||null,emissive:(c=t.emissive)!=null?c:0,side:(l=t.side)!=null?l:i.FrontSide}),n=t.uniforms||{uReveal:{value:0},uTint:{value:(u=t.tint)!=null?u:0}},s=!!n.uFadeY,r=!!n.uDimY,o=s||r;return e.userData.u=n,e.onBeforeCompile=h=>{var f;Object.assign(h.uniforms,n),o&&(h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <project_vertex>",`#include <project_vertex>
vWY = (modelMatrix * vec4(transformed, 1.0)).y;`)),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
uniform float uReveal;
uniform float uTint;`+(s?`
uniform vec2 uFadeY;`:"")+(r?`
uniform vec3 uDimY;`:"")+(o?`
varying float vWY;`:"")).replace("#include <dithering_fragment>",["#include <dithering_fragment>","float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));","float rim = pow(1.0 - clamp(abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0), 3.0);","lum = clamp(lum + rim * "+((f=t.rim)!=null?f:.35).toFixed(3)+", 0.0, 1.0);",t.lum||"",r?"lum *= mix(1.0, uDimY.z, smoothstep(uDimY.x, uDimY.y, vWY));":"","float rv = uReveal"+(s?t.fadeBelow?" * smoothstep(uFadeY.x, uFadeY.y, vWY)":" * (1.0 - smoothstep(uFadeY.x, uFadeY.y, vWY))":"")+";","gl_FragColor = vec4(lum, rv, uTint, 1.0);"].join(`
`))},e.customProgramCacheKey=()=>{var h;return"lum"+((h=t.rim)!=null?h:.35)+(s?t.fadeBelow?"b":"f":"")+(r?"d":"")+(t.lum||"")},e}function iu(i,t){let e=new i.Scene;e.add(new i.AmbientLight(16777215,.45));let n=new i.DirectionalLight(16777215,3);n.position.set(-3,5,6),e.add(n);let s=new i.DirectionalLight(16777215,.8);s.position.set(5,-1,4),e.add(s);let r=new i.WebGLRenderTarget(64,64,{type:i.UnsignedByteType,minFilter:i.NearestFilter,magFilter:i.NearestFilter,depthBuffer:!0}),o=null,a={tWorld:{value:r.texture},tAtlas:{value:null},uN:{value:24},uGrid:{value:new i.Vector2(64,64)},uCell:{value:new i.Vector2(6,10)},uRes:{value:new i.Vector2(1,1)},uTime:{value:0},uPack:{value:new i.Vector3(.5,.5,.3)},uGlow:{value:1},uFade:{value:1},uQuiet:{value:new i.Vector3(0,1,0)},uBurn:{value:0}},c=new i.Mesh(new i.PlaneGeometry(2,2),new i.ShaderMaterial({uniforms:a,transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:["precision highp float;","uniform sampler2D tWorld; uniform sampler2D tAtlas; uniform float uN; uniform vec2 uGrid; uniform vec2 uCell; uniform vec2 uRes;","uniform float uTime; uniform vec3 uPack; uniform float uGlow; uniform float uFade; uniform vec3 uQuiet; uniform float uBurn;","float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }","float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1.0, 0.0)), f.x), mix(h(i + vec2(0.0, 1.0)), h(i + vec2(1.0, 1.0)), f.x), f.y); }","void main(){","  vec2 fc = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);","  vec2 cell = floor(fc / uCell);","  vec2 uv = (cell + 0.5) / uGrid; uv.y = 1.0 - uv.y;","  vec4 w = texture2D(tWorld, uv);","  float n = h(cell);","  float vis = smoothstep(n - 0.04, n + 0.04, w.g * 1.06);","  float lum = w.r;","  float tick = floor(uTime * 1.6 + n * 9.0);","  float sh = h(cell + tick * 7.13);","  float j = sh > 0.93 ? 1.0 : (sh < 0.07 ? -1.0 : 0.0);","  lum = smoothstep(0.04, 0.92, lum);","  float fire = 0.0;","  if (uBurn > 0.001) {","    float rb = uGrid.y - cell.y - 0.5, fb = rb / uGrid.y;","    if (fb < 0.55) {","      float y = fb / (0.36 * uBurn);","      float n1 = vn(vec2(cell.x * 0.13, rb * 0.08 - uTime * 1.1)), n2 = vn(vec2(cell.x * 0.29, rb * 0.2 - uTime * 2.1));","      float f = n1 * 0.65 + n2 * 0.35;","      fire = clamp((f - y * 0.8) * 2.2 - 0.3, 0.0, 1.0) * (0.6 + 0.4 * n2) * 0.8;","      float ec = h(vec2(cell.x, 7.0));","      if (ec > 0.95) { float ph = fract(uTime * (0.09 + ec * 0.08) + h(vec2(cell.x, 3.0))); if (abs(rb - ph * 0.38 * uGrid.y) < 0.5) fire = max(fire, 0.6 * (1.0 - ph) * uBurn); }","    }","  }","  lum = max(lum, fire); vis = max(vis, step(0.03, fire));","  float idx = clamp(floor(pow(lum, 0.8) * (uN - 1.0) + 0.5) + (lum > 0.03 ? j : 0.0), 0.0, uN - 1.0);","  vec2 local = fract(fc / uCell);","  float a = texture2D(tAtlas, vec2((idx + local.x) / uN, 1.0 - local.y)).a;","  vec2 sp = vec2(fc.x / uRes.x, fc.y / uRes.y);","  vec2 d = (sp - uPack.xy) * vec2(uRes.x / uRes.y, 1.0);","  float near = exp(-dot(d, d) / (uPack.z * uPack.z)) * uGlow;","  float ang = atan(d.y, d.x);","  vec3 film = 0.5 + 0.5 * cos(6.28318 * (ang * 0.32 + uTime * 0.05 + vec3(0.0, 0.33, 0.67)));","  vec3 base = mix(vec3(0.43, 0.43, 0.44), vec3(0.52, 0.38, 0.33), max(smoothstep(0.7, 0.95, w.b) * vis, fire * 0.8));","  base = mix(base, vec3(0.56, 0.86, 0.3), (1.0 - smoothstep(0.08, 0.2, abs(w.b - 0.5))) * vis * 0.9);","  vec3 col = mix(base, vec3(0.52, 0.72, 0.30), clamp(near * 0.6, 0.0, 0.5));","  col = mix(col, film * 0.6, near * 0.1);","  float quiet = 1.0 - uQuiet.z * (1.0 - smoothstep(uQuiet.x - uQuiet.y, uQuiet.x, fc.y));","  float alpha = a * vis * (0.13 + 0.5 * lum + near * 0.12) * uFade * quiet;","  gl_FragColor = vec4(col * alpha, alpha);","}"].join(`
`),blending:i.CustomBlending,blendSrc:i.OneFactor,blendDst:i.OneMinusSrcAlphaFactor})),l=new i.Scene;l.add(c);let u=new i.OrthographicCamera(-1,1,1,-1,0,1);return c.frustumCulled=!1,{scene:e,setSize(h,f,p,m,g){let A=Math.ceil(h/m),d=Math.ceil(f/g);r.setSize(A,d),a.uGrid.value.set(A,d),a.uCell.value.set(m*p,g*p),a.uRes.value.set(h*p,f*p),o&&o.tex.dispose(),o=M0(i,m,g,p),a.tAtlas.value=o.tex,a.uN.value=o.N},render(h,f,p){a.uTime.value=f,p&&a.uPack.value.set(p.x,p.y,p.r);let m=t.getRenderTarget();t.setRenderTarget(r),t.setClearColor(0,0),t.clear(!0,!0,!1),t.render(e,h),t.setRenderTarget(m),t.render(l,u)},uniforms:a,rt:r,dispose(){r.dispose(),o&&o.tex.dispose(),c.geometry.dispose(),c.material.dispose()}}}var su={G:{p:"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",i:"AAABAAIAAgABAAMABAACAAUABQACAAMAAwABAAYABgABAAcABQADAAgACAADAAYACQAKAAsACwAKAAwADQALAA4ADgALAAwADwAQABEAEQAQABIAEQATABQAFAATABUAFgAXABgAFwAWABQAGQAaABsAGwAaABMAHAAdAB4AHgAdAB8AIAAhACIAIgAhACMAJAAlACYAJgAlACcAGwATABIAEgATABEAKAApACoAKgApACsAGgAZACwALAAZAC0ALgAvADAALwAuADEAMgAzADQAMwAyADUANgA0ADcANAA2ADIAOAA5ADcANwA5ADYAOgA7ADgAOAA7ADkAPAA9AD4APgA9AD8AQABBAEIAQgBBAEMAKgAFACgAKAAFAAgABwABAB4AHgABABwACQAtAAoACgAtABkADQAOABAAEAAOABIAGQAbAAoACgAbAAwAEgAOABsAGwAOAAwARAAaAEUARQAaACwAGgBEABMAEwBEABUAOABGADoAOgBGAEcASABJAEoASgBJAEMASwBMAE0ATABLAE4ATwBQAFEAUQBQAFIADwAUABYAFAAPABEAUQAfAE8ATwAfAB0AKwBOAEsATgArACkAUwBUAFUAVQBUAFYAVwBYAFkAWQBYAFoAWQBWAFcAVwBWAFQAWwBcAF0AXABeAF8AYABhAGIAYgBhAGMAZABlAGYAZgBlAGcAaABpAGoAagBpAGsAbABoAG0AbQBoAGoAbgBvAHAAcABvAHEAcgBzAHQAdABzAHUAbwBzAHEAcQBzAHIAdgB3AHgAeAB3AHkAdgB4AHoAegB4AHsAfAB9AHQAdAB9AHIAfgB/AIAAgAB/AIEAcACCAG4AbgCCAIMAhACFAIYAhgCFAIcAhACIAIUAhQCIAIkAagBrAIoAigBrAIsAdQBzAIwAjABzAI0AcwBvAI0AjQBvAI4AbwBuAI4AjgBuAI8AgwCQAG4AbgCQAI8AagCKAG0AbQCKAJEAkgCTAJQAlACTAJUAkwCSAJYAlgCSAJcAmACZAJoAmgCZAJsAmgCbAJwAnACbAJ0AngCfAKAAoACfAKEAngCZAJ8AnwCZAJgAogCjAKQApACjAKUApgCnAKMAowCnAKUAqACpAKoAqgCpAKsArACtAKkAqQCtAKsArgCvAKwArACvAK0AsACxAK4ArgCxAK8AsgCiALMAswCiAKQAhwChAIYAhgChAJ8AnACJAJoAmgCJAIgAnwCYAIYAhgCYAIQAmgCIAJgAmACIAIQAdgCSAHcAdwCSAJQAkgB2AJcAlwB2AHoAgQC0AIAAgAC0ALUAcQByALYAtgByAH0AtwC4ALkAuQC4ALoAcAC7AIIAggC7ALwAaQBoAL0AvQBoAL4AbAC/AGgAaAC/AL4AcQC2AHAAcAC2ALsAtAC3ALUAtQC3ALkAwADBAMIAwgDBAMMAwwDBAMQAxADBAMUAvgDBAL0AvQDBAMAAxQDBAL8AvwDBAL4AtACBALYAtgCBALsAtgB9ALQAtAB9ALcAfQB8ALcAtwB8ALgAvAC7AH8AfwC7AIEAxgDFAMcAxwDFAL8AyADJAMAAwADJAL0AygDLAMwAzADLAM0AzgDKAM8AzwDKAMwA0ADRANIA0gDRANMAygDUAMsAywDUANUAygDOANQA1ADOANYA0gDXANAA0ADXANgA2QDaANsA2wDaANwA3QDZAN4A3gDZANsA3wDgAOEA4QDgAOIA4wDkANgA2ADkAOUA5gDnAOgA6ADnAOkA6gDrAOwA7ADrAO0A6gDuAOsA6wDuAO8A5wDmAPAA8ADmAOAA4ADfAPAA8ADfAPEA8gDRAPMA8wDRAPQA0QDQAPQA9ADQAPUA2ADlANAA0ADlAPUA9gD3AOIA4gD3APgA+QD6APsA+wD6APwA+gD5AP0A/QD5AP4A6ADpAP8A/wDpAAABzQABAcwAzAABAQIBAwEBAQQBBAEBAc0A8wD0AAUBBQH0AAYB9AD1AAYBBgH1AAcB9QDlAAcBBwHlAAgB5QDkAAgBCAHkAAkBzAACAc8AzwACAQoB7QAAAewA7AAAAekA7wDuAPEA8QDuAPAA6QDnAOwA7ADnAOoA8ADuAOcA5wDuAOoA2QD5ANoA2gD5APsA/gD5AN0A3QD5ANkAAgEBAQsBCwEBAQwBAQEDAQwBDAEDAQ0BBQEGAQ4BDgEGAQ8BDwEGARABEAEGAQcBEAEHAREBEQEHAQgBEQEIARIBEgEIAQkBCgECARMBEwECAQsB4wDYABQBFAHYANcA1wDSABUBFQHSAPcAFgEXAfoA+gAXAfwAGAHTAPIA8gDTANEA1AAZAdUA1QAZARoBGwEZAdYA1gAZAdQAFgEcARkBGQEcARoBFwEWARsBGwEWARkBHQEeAR8BHwEeARUB4QDiACABIAHiAPgA9wD2ABUBFQH2AB8B0wD4ANIA0gD4APcAGAEgAdMA0wAgAfgAFQEeAdcA1wAeARQBIQEXASIBIgEXARsB4ADmAOIA4gDmAPYA+gD9ABYBFgH9ABwB/wAdAegA6AAdAR8B5gDoAPYA9gDoAB8BIwEkASUBJQEkASYBIwElAScBJwElASgBKQEqASsBKwEqASwBLQEuAS8BLwEuATABLQExAS4BLgExATIBKwEzASkBKQEzATQBNQE2ATMBMwE2ATcBOAE5AToBOgE5ATsBOQE4ATwBPAE4AT0BPgE1ASsBKwE1ATMBPgErAT8BPwErASwBNwE2AUABQAE2AUEBQgFDAUQBRAFDAUUBRgFHAUgBSAFHAUkBQwFKAUUBRQFKAUsBMAFBAS8BLwFBATYBMgExAT8BPwExAT4BNgE1AS8BLwE1AS0BPgExATUBNQExAS0BIwE4ASQBJAE4AToBPQE4AScBJwE4ASMBTAFNAU4BTgFNAU8BUAFMAVEBUQFMAU4BUgFTAVQBVAFTAVUBVgFXAVgBWAFXAVkBWgFWAVsBWwFWAVgBTwFNAVwBXAFNAV0BQgFeAUMBQwFeAV8BYAFhAUIBQgFhAV4BYgFjAWQBZAFjAWUBYgFmAWMBYwFmAWcBZgFHAWcBZwFHAWgBRwFGAWgBaAFGAWkBSgFDAWoBagFDAV8BawFsAW0BbQFsAW4BNAFsASkBKQFsAW8BcAFxAXIBcgFxAXMBdAFwAXUBdQFwAXIBcQFwAXYBdgFwAXcBcAF0AXcBdwF0AXgBeQF6AXsBewF6AW4BbwF8ASkBKQF8ASoBewFuATQBNAFuAWwBbwFsAX0BfQFsAWsBfAFvAX4BfgFvAX0BbQFuAX8BfwFuAXoBgAGBAV4BXgGBAV8BYQGCAV4BXgGCAYABgwGEAWMBYwGEAWUBhQGDAWcBZwGDAWMBhgGFAWgBaAGFAWcBhwGGAWkBaQGGAWgBgQGIAV8BXwGIAWoBdgF3ATwBPAF3ATkBOwE5AXgBeAE5AXcBewE3AXkBeQE3AUABewE0ATcBNwE0ATMBiQGKAYsBiwGKAYwBjQGJAY4BjgGJAYsBjwGQAZEBkQGQAZIBjwGRAZMBkwGRAZQBlQGWAZcBlwGWAZgBmQGaAZsBmwGaAZwBmQGdAZoBmgGdAZ4BnwGgAaEBoQGgAaIBowGkAaUBpQGkAaYBpwGoAaABoAGoAakBqgGrAawBrAGrAa0BrQGrAa4BrgGrAa8BsAGnAZ8BnwGnAaABsAGfAbEBsQGfAbIBqAGzAakBqQGzAbQBtQG2AbcBtwG2AbgBmwGcAagBqAGcAbMBngGdAbEBsQGdAbABqAGnAZsBmwGnAZkBsAGdAacBpwGdAZkBqwGqAY8BjwGqAZABqwGPAa8BrwGPAZMBuQG6AbsBuwG6AbwBvQGyAaEBoQGyAZ8BvgG/Aa0BrQG/AawBwAHBAcIBwgHBAcMBrgHEAa0BrQHEAb4BqQG0AcUBxQG0AcYBoAGpAaIBogGpAcUBxwHIAckByQHIAcoByAHLAcoBygHLAcwByAHHAc0BzQHHAc4BzwHQAdEB0QHQAdIB0wHUAdUB1QHUAdYB1AHTAdcB1wHTAdgB2QHTAdoB2gHTAdUB2wHcAd0B3QHcAd4B3wHgAeEB4QHgAeIBUAHjAUwBTAHjAeQB5QHmAeMB4wHmAeQB5wHoAekB6QHoAeoB6gHrAewB7AHrAe0B7gFNAeQB5AFNAUwBXQFNAe8B7wFNAe4BXQHwAfEB8QHwAfIB8wFWAfQB9AFWAVoBVwFWAfUB9QFWAfMBUgFXAfYB9gFXAfUBUwFSAfcB9wFSAfYB+AH5AfoB+gH5AfsB+wH5AfwB/AH5Af0B3wH+AeAB4AH+Af8BAAIBAv4B/gEBAgICAwLfAQQCBALfAeEBBQIGAgcCBwIGAggCCQIKAgsCCwIKAgwCDQIJAg4CDgIJAgsCDwJnABACEAJnAGUAEQJgABICEgJgAGIAEwIPAhQCFAIPAhACZgBnABUCFQJnABYCZwAPAhYCFgIPAhECDwITAhECEQITAmAAWQBaABcCFwJaABgCGQIaAhsCGwIaAhwCGgIZAlwAXAAZAh0CHgIcAh8CHwIcAhoCFAIgAhMCEwIgAiECYQBgACECIQJgABMCXABbABoCGgJbAB8CNwAiAjgAOAAiAkYAGAA0ADMANAAYABcAPQBSAD8APwBSAFAANAAXADcANwAXACICTQAwAC8AMABNAEwAFQAiAhQAFAAiAhcARQBHAEQARABHAEYAIgIVAEYARgAVAEQAIwIkAiUCJQIkAiYCJQImAmMAYwAmAmIAJwIoAikCKQIoAioCKwIsAi0CLQIsAi4CLwIwAjECMQIwAjICKwIzAjQCNAIzAjUCNgI3AjgCOAI3AjkCOAI6AjYCNgI6AjsCPAI9Aj4CPgI9Aj8CPgJAAjwCPAJAAkECQAJCAkECQQJCAkMCKgJEAkUCRQJEAkYCRwJIAkkCSQJIAkoCSwJHAkwCTAJHAkkCTAJNAksCSwJNAk4CTwJQAlECUQJQAlICUwJPAlQCVAJPAlECLQJVAisCKwJVAjMCVgJGAlcCVwJGAkQCWAJZAgQABABZAgIAWgIAAFkCWQIAAAIAWwJcAl0CXQJcAl4CXwJgAmECYQJgAmICAABaAlsCWwJaAlwCYwIkAGQCZAIkACYAZQJmAmcCZwJmAmgCXQJeAmkCaQJeAmoCHQJrAmwCbAJrAm0CbgJvAnACcAJvAnECcgJhAnMCcwJhAmICdALuAXUCdQLuAeQBdgJ3AngCeAJ3AnkCegJ7AuoB6gF7AusBfAJ6AugB6AF6AuoBfQJ+An8CfwJ+AoACgQLyAYICggLyAfAB9QHzAYMCgwLzAYQChQJkAIYChgJkAGYAhwKIAokCiQKIAooCiwKHAowCjAKHAokCjQKLAo4CjgKLAowCjwKQApECkQKQApICkwKQApQClAKQApUCkAKPApUClQKPApYClwKWApgCmAKWAo8CmQKaApUClQKaApQCmwKZApYClgKZApUCnAKbApcClwKbApYCIwAhAJ0CnQIhAJ4CQgBDAJ8CnwJDAEkAoAIiAKECoQIiACMAQQCiAkMAQwCiAkoAagJyAmkCaQJyAnMCowJIAKECoQJIAEoAoQIjAKMCowIjAJ0CWACkAqUCpQJaAFgApQKmAloAWgCmAhgCFwKnAlkAWQCnAlYAoQJKAKACoAJKAKICqAKpAiEAIQCpAp4CIACqAiEAIQCqAqgCqwI0AqQCpAI0AqUCNAI1AqUCpQI1AqYCFQKsAmYAZgCsAoYCEgJiAK0CrQJiACYCrQImAq4CrgImAiQCEgKvAhECEQKvAhYCrQKwAhICEgKwAq8CsAKtArECsQKtAq4CFQIWArICsgIWAq8CsAKzAq8CrwKzArICswKwArQCtAKwArECtQKyArYCtgKyArMCtgKzArcCtwKzArQCuAK5Ag0CDQK5AgkCugK7ArwCvAK7Ar0CvgK/AsACwAK/AsECwgLDAr4CvgLDAr8CxALFAsYCxgLFAscCyALJAsICwgLJAsMCuwLKAr0CvQLKAssCzAK+As0CzQK+AsACvgLMAsICwgLMAs4CzwI5AtAC0AI5AjcCuwK6AtEC0QK6AtICygK7AtMC0wK7AtECMQIyAtQC1AIyAtUC1gLXAtgC2ALXAtkC1wLaAtkC2QLaAtsC0QLSAtwC3ALSAt0C0wLRAt4C3gLRAtwC3wLVAuAC4ALVAjIC4ALhAt8C3wLhAuIC4wLkAl4AXgBsAuMC2ALZAuUC5QLZAuYC5wLmAtsC2wLmAtkC6ALpAuoC6gLpAusC7ALtAu4C7gLtAu8C8ALxAu8C7wLxAu4C8gLzAvQC9ALzAvUCXwD2AvcC9wL2AvgC+QLkAvoC+gLkAuMC6gLrAvkC+QLrAuQC8gL7AtwC3AL7At4C8ALvAvwC/ALvAv0C/gL9Au0C7QL9Au8C/QL+Av8C/wL+AgAD/AL9AgEDAQP9Av8CAgMDA94B3gEDA90BBAMFA9YB1gEFA9UByQEGA8cBxwEGAwcD1gEIAwQDBAMIAwkDCgMCAwsDCwMCA94BDAMNAw4DDgMNAw8DEAMRAxIDEgMRAxMDFAMVAxYDFgMVAxcDFQMUAwMCAwIUA98BGAMZA8kByQEZAwYD0QEaA88BzwEaAxsDHAMdA9EB0QEdAxoDHgMfAyADIAMfAyEDGgMiAxsDGwMiAyMDHQMkAxoDGgMkAyIDDwMeAyUDJQMeAyADDgMPAyYDJgMPAyUDJwMoAyUDJQMoAyYDEQMpAxMDEwMpAyoDEwMqAysDKwMqAywDEgMTAy0DLQMTAysDLgMvAzADMAMvAzED+wH8ATADMAP8AS4DMgMYA8oBygEYA8kBygHMATIDMgPMATMDNAOaAjUDNQOaApkCNgM1A5sCmwI1A5kCNwM2A5wCnAI2A5sCsgI4AxUCFQI4A6wCsgK1AjgDOAO1AjkDNwM6AzYDNgM6AzsDPAPUAT0DPQPUAdcB1AE8A9YB1gE8AwgDfgJ9Aj4DPgN9Aj8DQAN+AkEDQQN+Aj4DxgLHAkIDQgPHAkMDRAO5AkIDQgO5AsYCRQMJAkQDRAMJArkCCQJFAwoCCgJFA0YDRwN9AkgDSAN9An8CSQNKA0sDSwNKA0wDTQPpAewB7AHpAeoB7AHtAU4DTgPtAU8D7QFJA08DTwNJA0sD6wFQA+0B7QFQA0kDAAIUAwUCBQIUAxYD/gECAv8B/wECAlED/gHfAQACAALfARQDBQIHAgACAAIHAgECBgIFAlIDUgMFAhYDUwNUAz8DPwNUAz4DVQNWA0MDQwNWA0IDQgNWA0QDRANWA1cDRANXA0UDRQNXA1gDRQNYA0YDRgNYA1kDWgNTA1sDWwNTAz8DTwFcA04BTgFcA10DXgNfA1UBVQFfA1QBXwNgA1QBVAFgA1kBYANhA1kBWQFhA1gBYQNiA1gBWAFiA1sBXANPAWMDYwNPAVwBZAO5AWUDZQO5AWYDuQG7AWYDZgO7AWcDaANpA2oDagNpA2sDawNpA2wDbANpA20DbANtA24DbgNtA28DbgNvA3ADcANvA3EDcgNkA3MDcwNkA2UD7AFOA00DTQNOA3QDMQB1A3YDdQMxAC4ANQB3A3gDdwM1ADIAMgB5A3cDeQMyADYANgB6A3kDegM2ADkAegM5AHsDewM5ADsAfAM8AH0DfQM8AD4AQgB+A0AAQAB+A38DfQM+AIADgAM+AGACfgNCAIEDgQNCAJ8CgANgAoIDggNgAl8CgwOEA4UDhQOEA3YChgOHA3MDcwOHA4gDiQNlA4UDhQNlA2YDeAKJA3YCdgKJA4UDeAKKA4kDiQOKA4YDiQOGA2UDZQOGA3MDiwNuA4wDjANuA3AD+wGLA/oB+gGLA4wDjQOOA48DjwOOAzEDagNrA40DjQNrA44DbAOQA2sDawOQA44DkAMwA44DjgMwAzEDkANsA4sDiwNsA24DMAOQA/sB+wGQA4sDkQOSA4wBjAGSA4sBkgOTA4sBiwGTA44BkgORA5QDlAORA5UDkwOSA5YDlgOSA5QDlwOYA5kDmQOYA5oDlwObA5gDmAObA5wDnQOeA58DnwOeA6ADnQOfA7cBtwGfA5gBngOdA6EDoQOdA6IDtwG4AZ0DnQO4AaIDtwGYAbUBtQGYAZYBngOjA6ADoAOjA6QDpQOVA6YDpgOVA5EDowOeA6cDpwOeA6EDwAHCAaQBpAHCAaYBowGlAagDqAOlAakDqgOcA6sDqwOcA5sDrAO6AWQDZAO6AbkBaAOtA2kDaQOtA64DrgOvA2kDaQOvA20DbQOvA28DbwOvA7ADbwOwA3EDcQOwA7EDsgOsA3IDcgOsA2QDXQOAAbMDswOAAYIBtAO1A2sBawG1A30BtQO2A30BfQG2A34BcgFzAbcDtwNzAbgDdQFyAbkDuQNyAbcDugO0A20BbQG0A2sBfwG7A20BbQG7A7oDtQO0A7wDvAO0A70DvAO+A7UDtQO+A7YDRAFFAbgDuANFAbcDRQFLAbcDtwNLAbkDvQO0A0kBSQG0A7oDugO7A0kBSQG7A0gBvQNJAWYBZgFJAUcBvgO8A2QBZAG8A2IBvAO9A2IBYgG9A2YBvwPAA6UApQDAA6QApwDBA6UApQDBA78DwgPDA6sAqwDDA6oArQDEA6sAqwDEA8IDrwDFA60ArQDFA8QDxQOvAMYDxgOvALEAwAPHA6QApADHA7MApQGmAcgDyAOmAckDyAPKA6UBpQHKA6kDiQGXA4oBigGXA5kDiQGNAZcDlwONAZsDyQOmAZcBlwGmAcIByQOXAZ8DnwOXAZgBoAOkA8gDyAOkA8oDyAPJA6ADoAPJA58DwgHDAZcBlwHDAZUBigCLAKIAogCLAKMAiwDLA6MAowDLA6YAjACNAKgAqACNAKkAjQCOAKkAqQCOAKwArACOAK4ArgCOAI8ArgCPALAAsACPAJAAkQCKALIAsgCKAKIAmQC1AJsAmwC1ALkAwgDDAJYAlgDDAJMAkwDDAJUAlQDDAMQAmwC5AJ0AnQC5ALoAoAB+AJ4AngB+AIAAngCAAJkAmQCAALUAzAPNAwwBDAHNAwsBzgPMAw0BDQHMAwwBzwPQAw8BDwHQAw4B0QPPAxABEAHPAw8B0gPRAxEBEQHRAxAB0wPSAxIBEgHSAxEBzQPUAwsBCwHUAxMB2wG/AtwB3AG/AsMCvwLbAcECwQLbAdUDKwO6Ai0DLQO6ArwCLAPSAisDKwPSAroC3QLSAtYD1gPSAiwDKgPXAywDLAPXA9YD3AHYA94B3gHYAwsD2QPaA9sD2wPaA9wD2gPdA9wD3APdA94D3QPfA94D3gPfA+AD3wPhA+AD4APhA+ID4wPkA+UD5QPkA+YD5wPoA+MD4wPoA+QD6QPoA+oD6gPoA+cD6wPsA+0D7QPsA+4D7wPwA/ED8QPwA/ID8wP0A/UD9QP0A/YD9wP4A9wD3AP4A9sD+QP3A94D3gP3A9wD+gP5A+AD4AP5A94D+wP6A+ID4gP6A+AD5QP8A+MD4wP8A/0D/QP+A+MD4wP+A+cD/gP/A+cD5wP/A+oD4gPqA/sD+wPqA/8D7QPuAwAEAATuAwEE8QMCBO8D7wMCBAME9QMEBPMD8wMEBAUE8wMFBAYEBgQFBAcECAQJBAoECgQJBAsEDAQNBCMCIwINBCQC+AP3AwwEDAT3Aw0EDQQOBCQCJAIOBK4C9wP5Aw0EDQT5Aw4E+QP6Aw4EDgT6Aw8EDgQPBK4CrgIPBLEC+gP7Aw8EDwT7AxAEDwQQBLECsQIQBLQCHwMRBCEDIQMRBBIEEQT9AxIEEgT9A/wDEwQRBBQEFAQRBB8D/gP9AxMEEwT9AxEEFQQTBLcCtwITBBQE/wP+AxUEFQT+AxMEtwK0AhUEFQS0AhAE+wP/AxAEEAT/AxUE+AL2AhYEFgT2AhcEAAQBBBcEFwQBBBYE6AIYBOkC6QIYBBkEGAQDBBkEGQQDBAIE7gIaBOwC7AIaBBsEGgQFBBsEGwQFBAQE8QIcBO4C7gIcBBoEBQQaBAcEBwQaBBwE8wIdBPUC9QIdBB4ECgQfBAgECAQfBCAEHwTWAyAEIATWA9cDIQQiBCMEIwQiBCQEJQR2A3UDdgMlBCYEfgMkBH8DfwMkBCIEJAR+AycEJwR+A4EDKAQpBCoEKgQpBCsEKQQsBCsEKwQsBC0ELAQuBC0ELQQuBC8ELgQwBC8ELwQwBDEEMgQzBDQENAQzBDUELAR3A3kDdwMsBCkELgR5A3oDeQMuBCwEMAR6A3sDegMwBC4EMwR8A30DfAMzBDIEKQR4A3cDeAMpBCgEKgQrBDYENgQrBDcEKwQtBDcENwQtBDgELQQvBDgEOAQvBDkELwQxBDkEOQQxBDoENAQ1BDsEOwQ1BDwEPQQhBFUAVQAhBCMEIwQkBD4EPgQkBCcEPwRABEEEQQRABEIEQwQqBEQERAQqBDYEJQRFBCYEJgRFBEYEwgLOAsgCyALOAkcESARJBEoESgRJBEsESQRMBEsESwRMBE0ETgRPBFAEUARPBFEETwRSBFEEUQRSBFMEUgRUBFMEUwRUBFUEVgRXBFgEWARXBFkENwI2AkgESAQ2AkkETARJBDsCOwJJBDYCPQI8Ak4ETgQ8Ak8EUgRPBEECQQJPBDwCVARSBEMCQwJSBEECVwQoAlkEWQQoAicCVwJEAlYEVgREAlcESARaBDcCNwJaBNAC2AJbBNYC1gJbBFwEKgIoAkQCRAIoAlcE4QLgAl0EXQTgAl4ESAJHAi8CLwJHAjACUAJPAlwEXARPAtYCTwJTAtYC1gJTAtcCVQItAl8EXwQtAmAELQIuAmAEYAQuAmEEMAJeBDICMgJeBOACXQReBE4CTgJeBEsCYARhBGIEYgRhBGMEZARiBFYCVgJiBEYCXwRgBGQEZARgBGIESQJKAkACQAJKAkICTAJJAj4CPgJJAkACTQJMAj8CPwJMAj4CUQJSAjgCOAJSAjoCOAI5AlECUQI5AlQCRQJGAmMEYwRGAmIEgQKCAmUEZQSCAmYEzQLAAssCywLAAr0C9AFnBPMB8wFnBIQCPgRTACMEIwRTAFUAaARrAGkEaQRrAGkAyADAAGoEagTAAMIAvwBsAMcAxwBsAGsElgCXAGwEbASXAG0EbABtAGsEawRtAG4EywOLAGgEaASLAGsAbQCRAG4EbgSRAG8EcASUAHEEcQSUAJUAlwB6AG0EbQR6AHsAcgSyAHMEcwSyALMAeQB3AHAEcAR3AJQAaQRpAMkAyQBpAL0AxADFAHQEdATFAMYABAHNAHUEdQTNAMsA/QD+AHYEdgT+AHcEywDVAHUEdQTVAHgEeQTWAHoEegTWAM4AegTOAHsEewTOAM8AfAT7AH0EfQT7APwA/gDdAHcEdwTdAN4AzwAKAXsEewQKAX4E3ADaAHwEfATaAPsAfgQKAX8EfwQKARMB1QAaAXgEeAQaAYAE/AAXAX0EfQQXASEBgAQaAYEEgQQaARwBIgEbAXkEeQQbAdYAHAH9AIEEgQT9AHYEggQ7AYMEgwQ7AXgBPAE9AYQEhAQ9AYUEdQG5A4YEhgS5A4cERAGIBEIBQgGIBGABiQQ6AYIEggQ6ATsBPQEnAYUEhQQnASgBJgEkAYkEiQQkAToBXAFdAYoEigRdAfEBiwRKAYwEjARKAWoBjQRzAY4EjgRzAXEBgwR4AY8EjwR4AXQBjgRxAZAEkARxAXYBjwR0AYYEhgR0AXUBdgE8AZAEkAQ8AYQEigGRBIwBjAGRBJIErgGvAZMEkwSvAZQEqwObA5UElQSbA40BlgSqAZcElwSqAawBrwGTAZQElASTAZQBmASOAZkEmQSOAZMDkgGQAZYElgSQAaoBcgOaBLIDsgOaBJsEnASZA50EnQSZA5oDvwGeBKwBrAGeBJcExAGuAZ8EnwSuAZMEKAOgBCYDJgOgBNkBGwMjA80BzQEjA6EEzwEbA84BzgEbA80BywHIAaEEoQTIAc0B0AHPAaIEogTPAc4BxwEHA84BzgEHA6IEJgPZAQ4DDgPZAdoB0wHZAdgB2AHZAaAEowQSA9UD1QMSAy0D1QPbAaMEowTbAd0BhAOkBHYCdgKkBKUESgNJA6YEpgRJA1ADRgSOAkEEQQSOAqcEUwKoBNcC1wKoBNoCqARTAqkEqQRTAlQCNQSqBDwEPASqBKsErASAAkADQAOAAn4C8AGtBIICggKtBK4ErwSwBLEEkwKSApACRQSNAkYERgSNAo4CkQKSArIEswSwBLQEmAKFApcClwKFAoYCrAKcAoYChgKcApcCtQS2BKoEqgS2BKsE9AL1ArcEtwT1ArgEuQS6BLsEuwS6BB4E9AK3BLwEvQTwAvwCvgQQA6MEowQQAxIDAwO+BN0B3QG+BKMEvwQMA9oB2gEMAw4DBQO/BNUB1QG/BNoBnAKsAjcDNwOsAjgDOAM5AzcDNwM5AzoDRwPABFsDWwPABMEEVAPCBD4DPgPCBEEDwQTDBFsDWwPDBFoDXQOzA04BTgGzA1EBigTEBFwBXAHEBGMDmgRyA4gDiANyA3MDhQNmA4MDgwNmA2cDigPFBIYDhgPFBIcDpgORA5IEkgSRA4wBmQSTA8YExgSTA5YDYwPEBIgBiAHEBMcEhwS5A8gEyAS5A0sByQS4A40EjQS4A3MBiAREAckEyQREAbgDyARLAYsEiwRLAUoBkQSKAZwEnASKAZkDlQSNAZgEmASNAY4BbwSRAHIEcgSRALIAxAB0BJUAlQB0BHEEwgCWAGoEagSWAGwEwQLVA7wCvALVAy0DygTLBMwEzATLBM0EzAS5BMoEygS5BLsE9QIeBLgEuAQeBLoENgQ3BGQAZAA3BGUANwQ4BGUAZQA4BBACOAQ5BBACEAI5BBQCOQQ6BBQCFAI6BCACOwQ8BB4CHgI8BBwCtgTOBKsEqwTOBBsCpwI9BFYAVgA9BFUAcQKnBIwCjAKnBI4CRAQ2BIUChQI2BGQAzwRaBEoEzwRKBNAEqQRUAs8CzwJUAjkCwALBAr0CvQLBArwC0QSRAtIE0gSRArIERATRBEMEQwTRBNIE0QREBJgCmAJEBIUCkQLRBI8CjwLRBJgC0wTUBE0ETQTUBEsESgRLBNAE0ARLBNQE1QTWBFMEUwTWBFEEUARRBNcE1wRRBNYE2ATVBFUEVQTVBFME2QTaBCkCKQLaBCcC2gTbBCcCJwLbBFkE2gTZBHkCeQLZBNwE1QTYBHsCewLYBN0E1gTVBHoCegLVBHsC1wTWBHwCfALWBHoCWARZBN4E3gRZBNsE2wTaBHcCdwLaBHkC0ATUBIACgALUBH8C1ATTBH8CfwLTBEgD3gTbBN8E3wTbBHcCZwTgBIQChALgBOEE4gTjBMQCxALjBMUCzwTQBKwErATQBIACyQLIAuIE4gTIAuMEBALkBAMCAwLkBOUE5AQJA+UE5QQJAwgDDgLmBA0CDQLmBOcE5gQKA+cE5wQKAwsD/AH9AegE6AT9AekEMwPqBDIDMgPqBOsE6wTqBC4DLgPqBC8D6ATrBPwB/AHrBC4DGAMyA+gE6AQyA+sE7AQ8A+0E7QQ8Az0DPAPsBAgDCAPsBOUEAwLlBBUDFQPlBOwE7gS4AucE5wS4Ag0C4QTvBIQChALvBIMC6ATpBBgDGAPpBBkDFQPsBBcDFwPsBO0EmgI0A+EE4QQ0A+8E2APuBAsDCwPuBOcE4ASUAuEE4QSUApoCRwTjBMgCSgRaBEgElALgBJMCsQRlBGYE7wHuAfAE8ATuAXQC8AR0AvEE8QR0AvIE8QTzBPAE8ATzBPQE8gR0AvUE9QR0AnUC9gT3BPgE+AT3BPkE+gT7BPwE/AT7BP0E+wT+BP0E/QT+BP8E8gT1BAAFAAX1BAEFAgUDBfYE9gQDBfcErwRmBAQFZgSvBLEEZgSCAgUFBQWCAq4ELAIrAqsCqwIrAjQCBgUHBQIFAgUHBQMFAQX6BAAFAAX6BPwECAUJBf4E/gQJBf8EiAL2BIoCigL2BPgECgUGBQsFBgUKBQkF/AT9BPEE8QT9BPME8QTyBPwE/ATyBAAFBgWIAgsFCwWIAgwF+QQNBfgE+AQNBYoCDgVlAg8FDwVlAmcCJQBYAicAJwBYAgQAZgJjAmgCaAJjAmQCQAQQBUIEQgQQBREFzgQSBRsCGwISBRkCEgVrAhkCGQJrAh0CDwVnAjEAMQBnAi8AJgAnACsAKwAnACoAHABbAh0AHQBbAl0CJwAEACoAKgAEAAUAYgJgAj8APwBgAj4AAQAAABwAHAAAAFsCPASrBBwCHAKrBBsCZwJoAi8ALwBoAk0AUABPAHMCcwJPAGkCgAMTBX0DfQMTBTMETwAdAGkCaQIdAF0CJgArAGQCZAIrAEsAXAAdAl4AXgAdAmwCJgRGBEIEQgRGBEEEcAJxAokCiQJxAowCPwBQAGICYgJQAHMCTQBoAksASwBoAmQC1ALVAm0CbQLVAmwC1QLfAmwCbALfAuMC8wLyAt0C3QLyAtwCFAUdBBUFFQUdBBYF+gLjAuIC4gLjAt8C+wLyArwEvATyAvQC/wIAA+UC5QIAAxcF5QLmAv8C/wLmAgED5gLnAgEDAQPnAhgFDwURBQ4FDgURBRAFDwV2AxEFdgMPBTEAFQUZBRQFFAUZBRoFygS7BBoFGgW7BBQF3QIWBfMC8wIWBR0EuwQeBBQFFAUeBB0EJgQRBXYDEQUmBEIEMwQTBTUENQQTBaoEggMbBYADgAMbBRMFGwW1BBMFEwW1BKoEHAU/BKcEpwQ/BEEE/AIBA70EvQQBAxgFbwIcBXECcQIcBacEDQVwAooCigJwAokCWwTYAhcFFwXYAuUCXAOBAV0DXQOBAYABhAGDAV4DXgODAV8DgwGFAV8DXwOFAWADhQGGAWADYAOGAWEDhgGHAWEDYQOHAWIDYwOIAVwDXAOIAYEBugGsA5UDlQOsA5QDpQO8AZUDlQO8AboBrgOtA6EDoQOtA6cDrwOuA6IDogOuA6EDuAGwA6IDogOwA68DsQOwA7YBtgGwA7gBsgObBJYDlgObBMYElAOsA5YDlgOsA7IDwAO/A08DTwO/A04DTgO/A3QDdAO/A8EDCALDAwcCBwLDA8IDBwLCAwECAQLCA8QDAQLEAwICAgLEA8UDAgLFA1EDUQPFA8YDHQXHA0wDTAPHA0sDxwPAA0sDSwPAA08DzQPMA1MDUwPMA1QDzAPOA1QDVAPOA8IE0APPA1UDVQPPA1YDVgPPA1cDVwPPA9EDVwPRA1gDWAPRA9IDWAPSA1kDWQPSA9MDwwQeBVoDWgMeBdQD1APNA1oDWgPNA1MDiAHHBGoBagHHBIwExwMdBbMAswAdBXME1AMeBRMBEwEeBX8EHQMcAxQEFAQcA7cC7wGtBF0BXQGtBPAB9ATzBB8FHwXzBCAF/QT/BPME8wT/BCAFCgUgBQkFCQUgBf8ECAUHBQkFCQUHBQYFRwJLAjACMAJLAl4EXwBdAFwAXQBfAPcCxAGfBJoDmgOfBJ0ExAGaA74BvgGaA5gDvwG+AZwDnAO+AZgDngS/AaoDqgO/AZwDxQHGAcABwAHGAcEBpAGiAcABwAGiAcUBoQGiAaMBowGiAaQBowGoA6EBoQGoA70BtwIcA7YCtgIcAyEFHwMkAxQEFAQkAx0D1wMqAyIFIgUqAykD3AHDAtgD2APDAskC4gTuBMkCyQLuBNgDuALuBMQCxALuBOIExALGArgCuALGArkCXgDkAl8AXwDkAusCXwDrAvYC9gLrAukC9gLpAhcEFwTpAhkEAgQABBkEGQQABBcEAgTxAwAEAATxA+0D8QPyA+0D7QPyA+sDVwFSAVkBWQFSAVQBgwIjBfUB9QEjBfYB7wQkBYMCgwIkBSMFJAXvBCUFJQXvBDQDNQMmBTQDNAMmBSUFJgU1AzsDOwM1AzYD0gEhBdEB0QEhBRwDdQLkAScFJwXkAeYBfQJHAz8DPwNHA1sD3wR3AqUEpQR3AnYCigN4AtwE3AR4AnkCdQInBfUE9QQnBSgF9QQoBQEFAQUoBSkFKgX6BCkFKQX6BAEFUAPrAd0E3QTrAXsCKwX7BCoFKgX7BPoELAX+BCsFKwX+BPsELQUIBSwFLAUIBf4ELgUHBS0FLQUHBQgFBwUuBQMFAwUuBS8FAwUvBfcE9wQvBTAF9wQwBfkE+QQwBTEFMQUyBfkE+QQyBQ0FcAINBW4CbgINBTIFKgRDBCgEKARDBDMFNAUzBdIE0gQzBUME0gSyBDQFjQKzBIsChwKLArQEtASLArMErwQEBQwFDAUEBQsFCgUfBSAFHwUKBTUFrQTvAfQE9ATvAfAErQT0BK4ErgT0BB8FNQUFBR8FHwUFBa4ENQULBQQFCwU1BQoFZgQFBQQFBAUFBTUFtAQMBYcChwIMBYgCDAW0BK8ErwS0BLAEiAIGBfYE9gQGBQIFJQMgAycDJwMgAyIF1wMiBSEDIQMiBSADIQMSBNcD1wMSBCAEEgT8AyAEIAT8AwgECQQIBOUD5QMIBPwD5QPmAwkECQTmAzYFDQM3BQ8DDwM3BR4DHwMeAyQDJAMeAzcFFgXdAh8EHwTdAtYDFQUWBQoECgQWBR8ECgQLBBUFFQULBBkF4QPpA+ID4gPpA+oD9APzAzgFOAXzAwYEOQULBDYFNgULBAkEOgUaBTsFOwUaBRkFywTKBDoFOgXKBBoFOwUZBTkFOQUZBQsEPAU9BT4FPgU9BT8FPQVABT8FPwVABUEFQAVCBUEFQgVDBUEFQwVEBUEFQQVEBUUFRAVGBUUFRQVGBUcFRgVIBUcFSAVJBUcFRwVJBUoFSQVLBUoFSwVMBUoFTAVNBUoFSgVNBU4FTQVPBU4F9gH5AfcB9wH5AfgB+QH2Af0B/QH2ASMF/QEjBekE6QQjBSQF4gGPA+EB4QGPAzEDBALhAS8DLwPhATEDLwPqBAQCBALqBOQEDAJSAwsCCwJSAxYDDgILAhcDFwMLAhYDFwPtBA4CDgLtBOYEigPmAcUExQTmAeUB5gGKAycFJwWKA9wEJwXcBCgFKAXcBNkEKAXZBCkFKQXZBCkCpASmBKUEpQSmBFAD3QTfBFADUAPfBKUE2ATeBN0E3QTeBN8EVQRYBNgE2ARYBN4ERwPoAcAEwAToAecBSAN8AkcDRwN8AugB0wTXBEgDSAPXBHwCTQRQBNME0wRQBNcECQPkBDMDMwPkBOoEBAMJA8wBzAEJAzMDCgPmBD0DPQPmBO0EAgMKA9cB1wEKAz0D6QQkBRkDGQMkBSUFGQMlBQYDBgMlBSYFBgMmBQcDBwMmBTsDBwM7A6IEogQ7AzoDOQPQAToDOgPQAaIE0AE5A9IB0gE5A7UCtgIhBbUCtQIhBdIBBQMEA8sBywEEA8wBoQS/BMsBywG/BAUDIwMMA6EEoQQMA78EIgMNAyMDIwMNAwwDJAM3BSIDIgM3BQ0DAwMCA9gB2AECA9cBvgQDA6AEoAQDA9gBoAQoA74EvgQoAxADEQMQAycDJwMQAygDIgUpAycDJwMpAxEDTAROBE0ETQROBFAEOwI9AkwETAQ9Ak4EPQI7Aj8CPwI7AjoCUgJNAjoCOgJNAj8CTQJSAk4CTgJSAlACXARdBFACUAJdBE4CWwThAlwEXAThAl0E4QJbBOIC4gJbBBcFAAP6AhcFFwX6AuIC/gL5AgADAAP5AvoC7QLqAv4C/gLqAvkC7QLsAuoC6gLsAugCGAToAhsEGwToAuwCGwQEBBgEGAQEBAME7wMDBPUD9QMDBAQE9QP2A+8D7wP2A/ADRQIrBSoCKgIrBSoFYwQsBUUCRQIsBSsFYQQtBWMEYwQtBSwFLgIuBWEEYQQuBS0FLgUuAi8FLwUuAiwCLwUsAjAFMAUsAqsCMAWrAjEFMQWrAqQCMgUxBVgAWAAxBaQCbgIyBVcAVwAyBVgAbwJuAlQAVABuAlcAHAVvAlMAUwBvAlQAPwQcBT4EPgQcBVMAQAQ/BCcEJwQ/BD4EJwSBA0AEQASBAxAFDgUQBZ8CnwIQBYEDZQIOBUkASQAOBZ8CSQBIAGUCZQJIAGYCSACjAmYCZgKjAmMCJABjAp0CnQJjAqMCJQAkAJ4CngIkAJ0CngKpAiUAJQCpAlgCqAJZAqkCqQJZAlgCqgJaAqgCqAJaAlkCWgKqAlwCXAKqAiAAXAIgAF4CXgIgACIAXgIiAGoCagIiAKACcgJqAqICogJqAqACYQJyAkEAQQByAqICQQBAAGECYQJAAF8CggNfAn8DfwNfAkAAzgS2BKcCpwK2BD0EawIYAm0CbQIYAqYCMQIzAi8CLwIzAlUCVARWBFUEVQRWBFgEQwJXAlQEVARXAlYEQgJWAkMCQwJWAlcCSgJkBEICQgJkBFYCSAJfBEoCSgJfBGQELwJVAkgCSAJVAl8EMwIxAjUCNQIxAtQCbQKmAtQC1AKmAjUCFwIYAhIFEgUYAmsCpwIXAs4EzgQXAhIFIQQ9BLUEtQQ9BLYEIgQhBBsFGwUhBLUEfwMiBIIDggMiBBsFKQUpAioFKgUpAioC",min:[-.5843,-2.77557,-2.2175],max:[2.6298,.47075,.74772],reach:[2.44722,-2.30952,-.40889]},T:{p:"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",i:"AAABAAIAAQADAAIABAAFAAEABQADAAEAAwAGAAIABgAHAAIABQAIAAMACAAGAAMACQAKAAsACgAMAAsADQAOAAoADgAMAAoADwAQABEAEAASABEAEAATABQAEwAVABQAFgAXABgAGAATABYAGQAaABsAGgAUABsAHAAdAB4AHQAfAB4AIAAhACIAIQAjACIAJAAlACYAJQAnACYAGgASABQAEgAQABQAKAApACoAKQArACoAGwAsABkALAAtABkALgAvADAAMAAxAC4AMgAzADQANAA1ADIANgA3ADMAMwAyADYAOAA3ADkANwA2ADkAOgA4ADsAOAA5ADsAPAA9AD4APQA/AD4AQABBAEIAQQBDAEIAKQAoAAUAKAAIAAUABwAdAAIAHQAcAAIACQALAC0ACwAZAC0ADQARAA4AEQASAA4AGQALABoACwAMABoAEgAaAA4AGgAMAA4ARABFABsARQAsABsAGwAUAEQAFAAVAEQAOAA6AEYAOgBHAEYASABJAEoASQBDAEoASwBMAE0ATQBOAEsATwBQAFEAUABSAFEADwAWABMAEwAQAA8AUABPAB8ATwAeAB8AKwBLAE4ATgAqACsAUwBUAFUAVABWAFUAVwBYAFkAWABaAFkAWABXAFYAVwBVAFYAWwBcAF0AXQBeAF8AYABhAGIAYQBjAGIAZABlAGYAZQBnAGYAaABpAGoAaQBrAGoAbABtAGgAbQBpAGgAbgBvAHAAbwBxAHAAcgBzAHQAcwB1AHQAcABxAHQAcQByAHQAdgB3AHgAdwB5AHgAdgB6AHcAegB7AHcAfABzAH0AcwByAH0AfgB/AIAAfwCBAIAAbwBuAIIAbgCDAIIAhACFAIYAhQCHAIYAhACGAIgAhgCJAIgAaQCKAGsAigCLAGsAdQCMAHQAjACNAHQAdACNAHAAjQCOAHAAcACOAG4AjgCPAG4AgwBuAJAAbgCPAJAAaQBtAIoAbQCRAIoAkgCTAJQAkwCVAJQAlACWAJIAlgCXAJIAmACZAJoAmQCbAJoAmQCcAJsAnACdAJsAngCfAKAAnwChAKAAngCgAJoAoACYAJoAogCjAKQAowClAKQApgCkAKcApAClAKcAqACpAKoAqQCrAKoArACqAK0AqgCrAK0ArgCsAK8ArACtAK8AsACuALEArgCvALEAsgCzAKIAswCjAKIAhwCFAKEAhQCgAKEAnACZAIkAmQCIAIkAoACFAJgAhQCEAJgAmQCYAIgAmACEAIgAdgB4AJIAeACTAJIAkgCXAHYAlwB6AHYAgQB/ALQAfwC1ALQAcQC2AHIAtgB9AHIAtwC4ALkAuAC6ALkAbwCCALsAggC8ALsAagC9AGgAvQC+AGgAbABoAL8AaAC+AL8AcQBvALYAbwC7ALYAtAC1ALcAtQC4ALcAwADBAMIAwQDDAMIAwwDEAMIAxADFAMIAvgC9AMIAvQDAAMIAxQC/AMIAvwC+AMIAtAC2AIEAtgC7AIEAtgC0AH0AtAC3AH0AfQC3AHwAtwC5AHwAvACAALsAgACBALsAxgDHAMUAxwC/AMUAyADAAMkAwAC9AMkAygDLAMwAywDNAMwAzgDPAMoAzwDLAMoA0ADRANIA0QDTANIAygDMANQAzADVANQAygDUAM4A1ADWAM4A0QDQANcA0ADYANcA2QDaANsA2gDcANsA3QDeANkA3gDaANkA3wDgAOEA4ADiAOEA4wDYAOQA2ADlAOQA5gDnAOgA5wDpAOgA6gDrAOwA6wDtAOwA6gDsAO4A7ADvAO4A6ADwAOYA8ADhAOYA4QDwAN8A8ADxAN8A8gDzANIA8wD0ANIA0gD0ANAA9AD1ANAA2ADQAOUA0AD1AOUA9gDiAPcA4gD4APcA+QD6APsA+gD8APsA+wD9APkA/QD+APkA5wD/AOkA/wAAAekAzQDLAAEBywACAQEBAwEEAQEBBAHNAAEB8wAFAfQABQEGAfQA9AAGAfUABgEHAfUA9QAHAeUABwEIAeUA5QAIAeQACAEJAeQAywDPAAIBzwAKAQIB7QDrAAAB6wDpAAAB7wDxAO4A8QDwAO4A6QDrAOgA6wDqAOgA8ADoAO4A6ADqAO4A2QDbAPkA2wD6APkA/gDdAPkA3QDZAPkAAgELAQEBCwEMAQEBAQEMAQMBDAENAQMBBQEOAQYBDgEPAQYBDwEQAQYBEAEHAQYBEAERAQcBEQEIAQcBEQESAQgBEgEJAQgBCgETAQIBEwELAQIB4wAUAdgAFAHXANgA1wAVAdEAFQH3ANEAFgH7ABcB+wD8ABcBGAHyANMA8gDSANMA1ADVABkB1QAaARkBGwHWABkB1gDUABkBFgEZARwBGQEaARwBFwEbARYBGwEZARYBHQEeAR8BHgEVAR8B4AAgAeIAIAH4AOIA9wAVAfYAFQEeAfYA0wDRAPgA0QD3APgAGAHTACAB0wD4ACABFQHXAB8B1wAUAR8BIQEiARcBIgEbARcB4QDiAOYA4gD2AOYA+wAWAf0AFgEcAf0A/wDnAB0B5wAeAR0B5gD2AOcA9gAeAecAIwEkASUBJAEmASUBIwEnASQBJwEoASQBKQEqASsBKgEsASsBLQEuAS8BLgEwAS8BLQEvATEBLwEyATEBKgEpATMBKQE0ATMBNQEzATYBMwE3ATYBOAE5AToBOQE7AToBOgE8ATgBPAE9ATgBPgEqATUBKgEzATUBPgE/ASoBPwEsASoBNwFAATYBQAFBATYBQgFDAUQBQwFFAUQBRgFHAUgBRwFJAUgBRAFFAUoBRQFLAUoBMAEuAUEBLgE2AUEBMgE/ATEBPwE+ATEBNgEuATUBLgEtATUBPgE1ATEBNQEtATEBIwElATgBJQE5ATgBPQEnATgBJwEjATgBTAFNAU4BTQFPAU4BUAFRAUwBUQFNAUwBUgFTAVQBUwFVAVQBVgFXAVgBVwFZAVgBWgFbAVYBWwFXAVYBTwFcAU4BXAFdAU4BQgFEAV4BRAFfAV4BYAFCAWEBQgFeAWEBYgFjAWQBYwFlAWQBYgFkAWYBZAFnAWYBZgFnAUgBZwFoAUgBSAFoAUYBaAFpAUYBSgFqAUQBagFfAUQBawFsAW0BbAFuAW0BNAEpAW0BKQFvAW0BcAFxAXIBcQFzAXIBdAF1AXABdQFxAXABcgF2AXABdgF3AXABcAF3AXQBdwF4AXQBeQF6AXsBegFuAXsBbwEpAXwBKQErAXwBegE0AW4BNAFtAW4BbwF9AW0BfQFrAW0BfAF+AW8BfgF9AW8BbAF/AW4BfwF7AW4BgAFeAYEBXgFfAYEBYQFeAYIBXgGAAYIBgwFkAYQBZAFlAYQBhQFnAYMBZwFkAYMBhgFoAYUBaAFnAYUBhwFpAYYBaQFoAYYBgQFfAYgBXwFqAYgBdgE8AXcBPAE6AXcBOwF4AToBeAF3AToBegF5ATcBeQFAATcBegE3ATQBNwEzATQBiQGKAYsBigGMAYsBjQGOAYkBjgGKAYkBjwGQAZEBkAGSAZEBjwGTAZABkwGUAZABlQGWAZcBlgGYAZcBmQGaAZsBmgGcAZsBmQGbAZ0BmwGeAZ0BnwGgAaEBoAGiAaEBowGkAaUBpAGmAaUBpwGhAagBoQGpAagBqgGrAawBqwGtAawBrQGuAawBrgGvAawBsAGfAacBnwGhAacBsAGxAZ8BsQGyAZ8BqAGpAbMBqQG0AbMBtQG2AbcBtgG4AbcBmgGoAZwBqAGzAZwBngGxAZ0BsQGwAZ0BqAGaAacBmgGZAacBsAGnAZ0BpwGZAZ0BrAGPAaoBjwGRAaoBrAGvAY8BrwGTAY8BuQG6AbsBugG8AbsBvQGgAbIBoAGfAbIBvgGtAb8BrQGrAb8BwAHBAcIBwQHDAcIBrgGtAcQBrQG+AcQBqQHFAbQBxQHGAbQBoQGiAakBogHFAakBxwHIAckByAHKAckByQHKAcsBygHMAcsByQHNAccBzQHOAccBzwHQAdEB0AHSAdEB0wHUAdUB1AHWAdUB1QHXAdMB1wHYAdMB2QHaAdMB2gHUAdMB2wHcAd0B3AHeAd0B3wHgAeEB4AHiAeEBUAFMAeMBTAHkAeMB5QHjAeYB4wHkAeYB5wHoAekB6AHqAekB6gHrAewB6wHtAewB7gHkAU4B5AFMAU4BXQHvAU4B7wHuAU4BXQHwAfEB8AHyAfEB8wH0AVYB9AFaAVYBWAH1AVYB9QHzAVYBUgH2AVgB9gH1AVgBVAH3AVIB9wH2AVIB+AH5AfoB+QH7AfoB+wH8AfoB/AH9AfoB3wHhAf4B4QH/Af4BAAL+AQEC/gECAgECAwIEAt8BBALgAd8BBQIGAgcCBgIIAgcCCQIKAgsCCgIMAgsCDQIOAgkCDgIKAgkCDwIQAmcAEAJmAGcAEQISAmAAEgJhAGAAEwIUAg8CFAIQAg8CZQAVAmcAFQIWAmcAZwAWAg8CFgIRAg8CDwIRAhMCEQJgABMCWAAXAloAFwIYAloAGQIaAhsCGgIcAhsCGwJdABkCXQAdAhkCHgIfAhwCHwIbAhwCFAITAiACEwIhAiACYgAhAmAAIQITAmAAXQAbAlsAGwIfAlsANwA4ACICOABGACICFwA0ADMAMwAYABcAPgA/AFIAPwBRAFIAMwA3ABgANwAiAhgATAAwAC8ALwBNAEwAFQATACICEwAYACICRQBEAEcARABGAEcAIgJGABUARgBEABUAIwIkAiUCJAImAiUCJAJjACYCYwBhACYCJwIoAikCKAIqAikCKwIsAi0CLAIuAi0CLwIwAjECMAIyAjECKwIzAjQCMwI1AjQCNgI3AjgCNwI5AjgCNwI2AjoCNgI7AjoCPAI9Aj4CPQI/Aj4CPQI8AkACPAJBAkACQAJBAkICQQJDAkICKgJEAkUCRAJGAkUCRwJIAkkCSAJKAkkCSwJMAkcCTAJIAkcCTAJLAk0CSwJOAk0CTwJQAlECUAJSAlECUwJUAk8CVAJQAk8CLAIrAlUCKwI0AlUCVgJXAkYCVwJFAkYCWAIEAFkCBAABAFkCWgJZAgAAWQIBAAAAWwJcAl0CXAJeAl0CXwJgAmECYAJiAmECAABbAloCWwJdAloCYwJkAiQAZAIlACQAZQJmAmcCZgJoAmcCXAJpAl4CaQJqAl4CHQJrAmwCawJtAmwCbgJvAnACbwJxAnACcgJzAmACcwJiAmACdAJ1Au4BdQLkAe4BdgJ3AngCdwJ5AngCegLqAXsC6gHsAXsCfALpAXoC6QHqAXoCfQJ+An8CfgKAAn8CgQKCAvIBggLxAfIB9QGDAvMBgwKEAvMBhQKGAmQAhgJlAGQAhwKIAokCiAKKAokCiwKMAocCjAKIAocCjQKOAosCjgKMAosCjwKQApECkAKSApECkwKUApEClAKVApECkQKVAo8ClQKWAo8ClwKYApYCmAKPApYCmQKVApoClQKUApoCmwKWApkClgKVApkCnAKXApsClwKWApsCIwCdAiIAnQKeAiIAQQCfAkMAnwJKAEMAoAKhAiEAoQIjACEAQgBDAKICQwBJAKICagJpAnICaQJzAnICowKhAkgAoQJJAEgAoQKjAiMAowKdAiMAWQCkAqUCpAJZAFoApAJaAKYCWgAYAqYCFwJYAKcCWABWAKcCoQKgAkkAoAKiAkkAqAIiAKkCIgCeAqkCIAAiAKoCIgCoAqoCqwKlAjMCpQKkAjMCMwKkAjUCpAKmAjUCFQJlAKwCZQCGAqwCEgKtAmEArQImAmEArQKuAiYCrgIlAiYCEgIRAq8CEQIWAq8CrQISArACEgKvArACsAKxAq0CsQKuAq0CFQKyAhYCsgKvAhYCsAKvArMCrwKyArMCswK0ArACtAKxArACtQK2ArICtgKzArICtgK3ArMCtwK0ArMCuAINArkCDQIJArkCugK7ArwCuwK9ArwCvgK/AsACvwLBAsACwgK+AsMCvgLAAsMCxALFAsYCxQLHAsYCyALCAskCwgLDAskCvAK9AsoCvQLLAsoCzALNAr4CzQK/Ar4CvgLCAswCwgLOAswCzwLQAjkC0AI4AjkCvALRAroC0QLSAroCygLTArwC0wLRArwCMALUAjIC1ALVAjIC1gLXAtgC1wLZAtgC2ALZAtoC2QLbAtoC0QLcAtIC3ALdAtIC0wLeAtEC3gLcAtEC3wLgAtUC4AIyAtUC4ALfAuEC3wLiAuEC4wJfAOQCXwDjAmsC1wLlAtkC5QLmAtkC5wLbAuYC2wLZAuYC6ALpAuoC6QLrAuoC7ALtAu4C7QLvAu4C8ALvAvEC7wLtAvEC8gLzAvQC8wL1AvQCXgD2AvcC9gL4AvcC+QL6AuQC+gLjAuQC6QL5AusC+QLkAusC8gLcAvsC3ALeAvsC8AL8Au8C/AL9Au8C/gLuAv0C7gLvAv0C/QL/Av4C/wIAA/4C/AIBA/0CAQP/Av0CAgPeAQMD3gHcAQMDBAPWAQUD1gHUAQUDyAHHAQYDxwEHAwYD1gEEAwgDBAMJAwgDCgMLAwIDCwPeAQIDDAMNAw4DDQMPAw4DEAMRAxIDEQMTAxIDFAMVAxYDFQMXAxYDFgMDAhQDAwLfARQDGAPIARkDyAEGAxkD0AHPARoDzwEbAxoDHAPQAR0D0AEaAx0DHgMfAyADHwMhAyADGgMbAyIDGwMjAyIDHQMaAyQDGgMiAyQDDwMlAx4DJQMfAx4DDQMmAw8DJgMlAw8DJwMlAygDJQMmAygDEgMTAykDEwMqAykDEwMrAyoDKwMsAyoDEQMtAxMDLQMrAxMDLgMvAzADLwMxAzAD+wEvA/wBLwMuA/wBMgPKARgDygHIARgDygEyA8wBMgMzA8wBNAM1A5oCNQOZApoCNgObAjUDmwKZAjUDNwOcAjYDnAKbAjYDsgIVAjgDFQKsAjgDsgI4A7UCOAM5A7UCNwM2AzoDNgM7AzoDPAM9A9UBPQPXAdUB1QHWATwD1gEIAzwDfwI+A30CPgM/A30CQANBA38CQQM+A38CxQJCA8cCQgNDA8cCRANCA7kCQgPFArkCRQNEAwkCRAO5AgkCCQILAkUDCwJGA0UDRwNIA30CSAN+An0CSQNKA0sDSgNMA0sDTQPrAegB6wHqAegB6wFOA+0BTgNPA+0B7QFPA0kDTwNKA0kD7AHtAVAD7QFJA1ADAAIFAhQDBQIVAxQD/gH/AQIC/wFRAwIC/gEAAt8BAAIUA98BBQIAAgYCAAIBAgYCBwJSAwUCUgMVAwUCUwM/A1QDPwM+A1QDVQNDA1YDQwNCA1YDQgNEA1YDRANXA1YDRANFA1cDRQNYA1cDRQNGA1gDRgNZA1gDWgNbA1MDWwM/A1MDTwFNAVwDTQFdA1wDXgNVAV8DVQFTAV8DXwNTAWADUwFZAWADYANZAWEDWQFXAWEDYQNXAWIDVwFbAWIDXANjA08BYwNcAU8BZANlA7kBZQNmA7kBuQFmA7oBZgNnA7oBaANpA2oDaQNrA2oDawNsA2oDbANtA2oDbANuA20DbgNvA20DbgNwA28DcANxA28DcgNzA2QDcwNlA2QD6wFNA04DTQN0A04DMQB1A3YDdgMuADEANQB3A3gDeAMyADUAMgB4A3kDeQM2ADIANgB5A3oDegM5ADYAegN7AzkAewM7ADkAfAN9AzwAfQM9ADwAQQBAAH4DQAB/A34DfQOAAz0AgANhAj0AfgOBA0EAgQOfAkEAgAOCA2ECggNfAmECgwOEA4UDhAN2AoUDhgNzA4cDcwOIA4cDiQOEA2UDhANmA2UDdwJ2AokDdgKEA4kDdwKJA4oDiQOGA4oDiQNlA4YDZQNzA4YDiwOMA24DjANwA24D+wH5AYsD+QGMA4sDjQOOA48DjgMxA48DaQONA2sDjQOPA2sDbANrA5ADawOPA5ADkAOPAy8DjwMxAy8DkAOLA2wDiwNuA2wDLwP7AZAD+wGLA5ADkQOMAZIDjAGKAZIDkgOKAZMDigGOAZMDkgOUA5EDlAOVA5EDkwOWA5IDlgOUA5IDlwOYA5kDmAOaA5kDlwOZA5sDmQOcA5sDnQOeA58DngOgA58DnQO2AZ4DtgGYAZ4DnwOhA50DoQOiA50DtgGdA7gBnQOiA7gBtgG1AZgBtQGXAZgBnwOgA6MDoAOkA6MDpQOmA5UDpgORA5UDowOnA58DpwOhA58DwAGlAcEBpQGmAcEBowGoA6QBqAOpA6QBqgOrA5wDqwObA5wDrANkA7sBZAO5AbsBaANqA60DagOuA60DrgNqA68DagNtA68DbQNvA68DbwOwA68DbwNxA7ADcQOxA7ADsgNyA6wDcgNkA6wDXQOzA4ABswOCAYABtANrAbUDawF9AbUDtQN9AbYDfQF+AbYDcQG3A3MBtwO4A3MBdQG5A3EBuQO3A3EBugNsAbQDbAFrAbQDfwFsAbsDbAG6A7sDtQO8A7QDvAO9A7QDvAO1A74DtQO2A74DQwG4A0UBuAO3A0UBRQG3A0sBtwO5A0sBvQNJAbQDSQG6A7QDugNJAbsDSQFHAbsDvQNmAUkBZgFIAUkBvgNjAbwDYwFiAbwDvANiAb0DYgFmAb0DvwOlAMADpQCjAMADpwClAMEDpQC/A8EDwgOrAMMDqwCpAMMDrQCrAMQDqwDCA8QDrwCtAMUDrQDEA8UDxQPGA68AxgOxAK8AwAOjAMcDowCzAMcDpAHIA6YByAPJA6YByAOkAcoDpAGpA8oDiQGLAZcDiwGYA5cDiQGXA40BlwObA40ByQOWAaYBlgHBAaYByQOeA5YBngOYAZYBoAPIA6QDyAPKA6QDyAOgA8kDoAOeA8kDwQGWAcMBlgGVAcMBigCiAIsAogCkAIsAiwCkAMsDpACmAMsDjACoAI0AqACqAI0AjQCqAI4AqgCsAI4ArACuAI4ArgCPAI4ArgCwAI8AsACQAI8AkQCyAIoAsgCiAIoAmgCbALUAmwC4ALUAwQCWAMMAlgCUAMMAlACVAMMAlQDEAMMAmwCdALgAnQC6ALgAnwCeAH4AngB/AH4AngCaAH8AmgC1AH8AzAMMAc0DDAELAc0DzgMNAcwDDQEMAcwDzwMPAdADDwEOAdAD0QMQAc8DEAEPAc8D0gMRAdEDEQEQAdED0wMSAdIDEgERAdIDzQMLAdQDCwETAdQD2wHdAcAC3QHDAsACwALBAtsBwQLVA9sBKwMtA7oCLQO7AroCLAMrA9ICKwO6AtIC3QLWA9IC1gMsA9ICKgMsA9cDLAPWA9cD3QHeAdgD3gELA9gD2QPaA9sD2gPcA9sD2wPcA90D3APeA90D3QPeA98D3gPgA98D3wPgA+ED4APiA+ED4wPkA+UD5APmA+UD5wPjA+gD4wPlA+gD6QPqA+gD6gPnA+gD6wPsA+0D7APuA+0D7wPwA/ED8APyA/ED8wP0A/UD9AP2A/UD9wPcA/gD3APaA/gD+QPeA/cD3gPcA/cD+gPgA/kD4APeA/kD+wPiA/oD4gPgA/oD5APjA/wD4wP9A/wD/QPjA/4D4wPnA/4D/gPnA/8D5wPqA/8D4gP7A+oD+wP/A+oD7AMABO4DAAQBBO4D8APvAwIE7wMDBAIE9APzAwQE8wMFBAQE8wMGBAUEBgQHBAUECAQJBAoECQQLBAoEDAQjAg0EIwIlAg0E+AMMBPcDDAQNBPcDDQQlAg4EJQKuAg4E9wMNBPkDDQQOBPkD+QMOBPoDDgQPBPoDDgSuAg8ErgKxAg8E+gMPBPsDDwQQBPsDDwSxAhAEsQK0AhAEIAMhAxEEIQMSBBEEEQQSBP0DEgT8A/0DEwQUBBEEFAQgAxEE/gMTBP0DEwQRBP0DFQS3AhMEtwIUBBME/wMVBP4DFQQTBP4DtwIVBLQCFQQQBLQC+wMQBP8DEAQVBP8D+AIWBPcCFgQXBPcCAAQXBAEEFwQWBAEE6ALqAhgE6gIZBBgEGAQZBAMEGQQCBAME7QLsAhoE7AIbBBoEGgQbBAUEGwQEBAUE8QLtAhwE7QIaBBwEBQQHBBoEBwQcBBoE9AL1Ah0E9QIeBB0ECQQIBB8ECAQgBB8EHwQgBNYDIATXA9YDIQQiBCMEIgQkBCMEJQR2A3UDdQMmBCUEfgN/AyQEfwMjBCQEJAQnBH4DJwSBA34DKAQpBCoEKQQrBCoEKgQrBCwEKwQtBCwELAQtBC4ELQQvBC4ELgQvBDAELwQxBDAEMgQzBDQEMwQ1BDQELAR5A3gDeAMqBCwELgR6A3kDeQMsBC4EMAR7A3oDegMuBDAENAR9A3wDfAMyBDQEKgR4A3cDdwMoBCoEKQQ2BCsENgQ3BCsEKwQ3BC0ENwQ4BC0ELQQ4BC8EOAQ5BC8ELwQ5BDEEOQQ6BDEEMwQ7BDUEOwQ8BDUEPQRUACEEVAAiBCEEIgQ+BCQEPgQnBCQEPwRABEEEQARCBEEEQwREBCkERAQ2BCkEJQQmBEUEJgRGBEUEwgLIAs4CyAJHBM4CSARJBEoESQRLBEoESgRLBEwESwRNBEwETgRPBFAETwRRBFAEUARRBFIEUQRTBFIEUgRTBFQEUwRVBFQEVgRXBFgEVwRZBFgEOAJIBDYCSARKBDYCTAQ7AkoEOwI2AkoEPgJOBDwCTgRQBDwCUgRBAlAEQQI8AlAEVARDAlIEQwJBAlIEWARZBCkCWQQnAikCVwJWBEUCVgRYBEUCSAQ4AloEOALQAloE1wLWAlsE1gJcBFsEKgJFAikCRQJYBCkC4QJdBOACXQReBOACSQIvAkcCLwIxAkcCUQJcBE8CXATWAk8CTwLWAlMC1gLYAlMCVQJfBCwCXwRgBCwCLAJgBC4CYARhBC4CMQIyAl4EMgLgAl4EXQROAl4ETgJLAl4EYARiBGEEYgRjBGEEZARWAmIEVgJGAmIEXwRkBGAEZARiBGAESAJAAkoCQAJCAkoCTAI9AkgCPQJAAkgCTQI/AkwCPwI9AkwCUAI3AlICNwI6AlICNwJQAjkCUAJUAjkCRAJjBEYCYwRiBEYCgQJlBIICZQRmBIICzQLLAr8CywK9Ar8C9AHzAWcE8wGEAmcEPgQiBFMAIgRUAFMAaARpBGsAaQRqAGsAyABqBMAAagTBAMAAvwDHAGwAxwBrBGwAlgBsBJcAbARtBJcAbABrBG0AawRuBG0AywNoBIsAaARrAIsAbQBuBJEAbgRvBJEAcARxBJMAcQSVAJMAlwBtBHoAbQR7AHoAcgRzBLIAcwSzALIAeQBwBHgAcASTAHgAaQTJAGoAyQC9AGoAxAB0BMUAdATGAMUABAF1BM0AdQTMAM0A/QB2BP4AdgR3BP4AzAB1BNUAdQR4BNUAeQR6BNYAegTOANYAegR7BM4AewTPAM4AfAR9BPoAfQT8APoA/gB3BN0AdwTeAN0AzwB7BAoBewR+BAoB3AB8BNsAfAT6ANsAfgR/BAoBfwQTAQoB1QB4BBoBeASABBoB/AB9BBcBfQQhARcBgASBBBoBgQQcARoBIgF5BBsBeQTWABsBHAGBBP0AgQR2BP0AggSDBDsBgwR4ATsBPAGEBD0BhASFBD0BdQGGBLkDhgSHBLkDQwFCAYgEQgFgAYgEiQSCBDkBggQ7ATkBPQGFBCcBhQQoAScBJgGJBCUBiQQ5ASUBXAGKBF0BigTwAV0BiwSMBEoBjARqAUoBjQSOBHMBjgRyAXMBgwSPBHgBjwR0AXgBjgSQBHIBkAR2AXIBjwSGBHQBhgR1AXQBdgGQBDwBkASEBDwBiwGMAZEEjAGSBJEErgGTBK8BkwSUBK8BqwOVBJsDlQSNAZsDlgSXBKoBlwSrAaoBrwGUBJMBlASUAZMBmASZBI4BmQSTA44BkgGWBJEBlgSqAZEBcgOyA5oEsgObBJoEnASdBJgDnQSaA5gDvwGrAZ4EqwGXBJ4ExAGfBK4BnwSTBK4BKAMmA6AEJgPZAaAEGwPNASMDzQGhBCMDzwHOARsDzgHNARsDywGhBMkBoQTNAckB0QGiBM8BogTOAc8BxwHOAQcDzgGiBAcDJgMNA9kBDQPaAdkB0wHYAdkB2AGgBNkBowTVAxED1QMtAxED1QOjBNsBowTcAdsBhQN2AqQEdgKlBKQESwOmBEkDpgRQA0kDRgRABI4CQASnBI4CUwLYAqgE2ALaAqgEqASpBFMCqQRUAlMCNQQ8BKoEPASrBKoErARAA4ACQAN/AoAC8QGCAq0EggKuBK0ErwSwBLEEkwKRApICRQRGBI0CRgSOAo0CkAKyBJICswS0BLEEmAKXAoUClwKGAoUCrAKGApwChgKXApwCtQSqBLYEqgSrBLYE8wK3BPUCtwS4BPUCuQS6BLsEugQeBLsE8wK8BLcEvQT8AvACvgSjBBADowQRAxADAwPcAb4E3AGjBL4EvwTaAQwD2gENAwwDBQPUAb8E1AHaAb8EnAI3A6wCNwM4A6wCOAM3AzkDNwM6AzkDRwNbA8AEWwPBBMAEVAM+A8IEPgNBA8IEwQRbA8MEWwNaA8MEXQNNAbMDTQFRAbMDigRcAcQEXAFjA8QEmgSIA3IDiANzA3IDhAODA2YDgwNnA2YDigOGA8UEhgOHA8UEpgOSBJEDkgSMAZEDmQTGBJMDxgSWA5MDYwOIAcQEiAHHBMQEhwTIBLkDyARLAbkDyQSNBLgDjQRzAbgDiATJBEMByQS4A0MByASLBEsBiwRKAUsBkQScBIsBnASYA4sBlQSYBI0BmASOAY0BbwRyBJEAcgSyAJEAxACVAHQElQBxBHQEwQBqBJYAagRsBJYAwQK7AtUDuwItA9UDygTLBMwEywTNBMwEywTKBLkEygS6BLkE9QK4BB4EuAS7BB4ENgRkADcEZABmADcENwRmADgEZgAQAjgEOAQQAjkEEAIUAjkEOQQUAjoEFAIgAjoEOwQeAjwEHgIcAjwEtgSrBM4EqwQaAs4EpwJWAD0EVgBUAD0EcQKMAqcEjAKOAqcERASFAjYEhQJkADYEzwRJBFoEzwTQBEkEqQTPAlQCzwI5AlQCvwK9AsECvQK7AsEC0QTSBJAC0gSyBJACRARDBNEEQwTSBNEE0QSYAkQEmAKFAkQEkAKPAtEEjwKYAtEE0wRNBNQETQRLBNQESQTQBEsE0ATUBEsE1QRTBNYEUwRRBNYETwTXBFEE1wTWBFEE2ARVBNUEVQRTBNUE2QQoAtoEKAInAtoE2gQnAtsEJwJZBNsE2gR5AtkEeQLcBNkE1QR7AtgEewLdBNgE1gR6AtUEegJ7AtUE1wR8AtYEfAJ6AtYEVwTeBFkE3gTbBFkE2wR4AtoEeAJ5AtoE0ASAAtQEgAJ+AtQE1AR+AtMEfgJIA9ME3gTfBNsE3wR4AtsEZwSEAuAEhALhBOAE4gTEAuMExALGAuMEzwSsBNAErASAAtAEyQLiBMgC4gTjBMgCBAIDAuQEAwLlBOQE5ATlBAkD5QQIAwkDDgINAuYEDQLnBOYE5gTnBAoD5wQLAwoD/AHoBP0B6ATpBP0BMwMyA+oEMgPrBOoE6wQuA+oELgMwA+oE6AT8AesE/AEuA+sEGAPoBDID6ATrBDID7ATtBDwD7QQ9AzwDPAMIA+wECAPlBOwEAwIWA+UEFgPsBOUE7gTnBLgC5wQNArgC4QSEAu8EhAKDAu8E6AQYA+kEGAMZA+kEFgMXA+wEFwPtBOwEmgLhBDQD4QTvBDQD2AMLA+4ECwPnBO4E4AThBJQC4QSaApQCRwTIAuMESQRIBFoElAKTAuAEsARmBGUE7wHwBO4B8AR0Au4B8ATxBHQC8QTyBHQC8QTwBPME8AT0BPME8gT1BHQC9QR1AnQC9gT3BPgE9wT5BPgE+gT7BPwE+wT9BPwE/AT9BP4E/QT/BP4E8gQABfUEAAUBBfUEAgX2BAMF9gT4BAMFrwQEBWYEZgSwBK8EZgQFBYICBQWuBIICLQKrAisCqwIzAisCBgUCBQcFAgUDBQcFAQUABfoEAAX7BPoECAX+BAkF/gT/BAkFiQKKAvYEigL3BPYECgULBQYFBgUJBQoF+wTxBP0E8QTzBP0E8QT7BPIE+wQABfIEBgULBYkCCwUMBYkC+QT3BA0F9wSKAg0FDgUPBWUCDwVmAmUCJgAnAFgCJwAEAFgCZwJoAmMCaAJkAmMCQQRCBBAFQgQRBRAFzgQaAhIFGgIZAhIFEgUZAmwCGQIdAmwCDwUxAGYCMQAwAGYCJQArACcAKwApACcAHAAeAFsCHgBcAlsCJwApAAQAKQAFAAQAYgI/AGECPwA9AGECAgAcAAAAHABbAgAAPAQcAqsEHAIaAqsEZgIwAGgCMABMAGgCUQBzAk8AcwJpAk8AgAN9AxMFfQM0BBMFTwBpAh4AaQJcAh4AJQBkAisAZAJLACsAXQBfAB0CXwBrAh0CJgRCBEYEQgRABEYEbwKIAnECiAKMAnECPwBiAlEAYgJzAlEATABLAGgCSwBkAmgC1AJtAtUCbQJrAtUC1QJrAt8CawLjAt8C9ALdAvIC3QLcAvICFAUVBR0EFQUWBR0E+gLiAuMC4gLfAuMC+wK8BPICvATzAvIC/wLlAgAD5QIXBQAD5QL/AuYC/wIBA+YC5gIBA+cCAQMYBecCDwUOBREFDgUQBREFDwURBXUDdQMxAA8FFQUUBRkFFAUaBRkFygQaBboEGgUUBboE3QL0AhYF9AIdBBYFugQUBR4EFAUdBB4EJgR1AxEFEQVCBCYENAQ1BBMFNQSqBBMFggOAAxsFgAMTBRsFGwUTBbUEEwWqBLUEHAWnBD8EpwRABD8E/AK9BAEDvQQYBQEDcAJxAhwFcQKnBBwFDQWKAm8CigKIAm8CWwQXBdcCFwXlAtcCXANdA4EBXQOAAYEBhAFeA4MBXgNfA4MBgwFfA4UBXwNgA4UBhQFgA4YBYANhA4YBhgFhA4cBYQNiA4cBYwNcA4gBXAOBAYgBuwGVA6wDlQOUA6wDpQOVA7wBlQO7AbwBrgOhA60DoQOnA60DrwOiA64DogOhA64DuAGiA7ADogOvA7ADsQO3AbADtwG4AbADsgOWA5sElgPGBJsElAOWA6wDlgOyA6wDwANPA78DTwNOA78DTgN0A78DdAPBA78DCAIGAsMDBgLCA8MDBgIBAsIDAQLEA8IDAQICAsQDAgLFA8QDAgJRA8UDUQPGA8UDHQVMA8cDTANKA8cDxwNKA8ADSgNPA8ADzQNTA8wDUwNUA8wDzANUA84DVAPCBM4D0ANVA88DVQNWA88DVgNXA88DVwPRA88DVwNYA9EDWAPSA9EDWANZA9IDWQPTA9IDwwRaAx4FWgPUAx4F1ANaA80DWgNTA80DiAFqAccEagGMBMcExwOzAB0FswBzBB0F1AMTAR4FEwF/BB4FHQMUBBwDFAS3AhwD7wFdAa0EXQHxAa0E9AQfBfMEHwUgBfME/QTzBP8E8wQgBf8ECgUJBSAFCQX/BCAFCAUJBQcFCQUGBQcFRwIxAksCMQJeBEsCXgBdAFwAXAD2Al4AxAGaA58EmgOdBJ8ExAG+AZoDvgGZA5oDvwGcA74BnAOZA74BngSqA78BqgOcA78BxQHAAcYBwAHCAcYBpQHAAaIBwAHFAaIBoAGjAaIBowGlAaIBowGgAagDoAG9AagDtwK2AhwDtgIhBRwDIAMUBCQDFAQdAyQD1wMiBSoDIgUpAyoD3QHYA8MC2APJAsMC4gTJAu4EyQLYA+4EuALEAu4ExALiBO4ExAK4AsUCuAK5AsUCXwBeAOQCXgDrAuQCXgD3AusC9wLqAusC9wIXBOoCFwQZBOoCAgQZBAAEGQQXBAAEAgQABPADAATsA/AD8APsA/ID7APrA/IDWAFZAVIBWQFTAVIBgwL1ASMF9QH2ASMF7wSDAiQFgwIjBSQFJAUlBe8EJQU0A+8ENQM0AyYFNAMlBSYFJgU7AzUDOwM2AzUD0gHQASEF0AEcAyEFdQInBeQBJwXmAeQBfQI/A0cDPwNbA0cD3wSlBHgCpQR2AngCigPcBHcC3AR5AncCdQL1BCcF9QQoBScF9QQBBSgFAQUpBSgFKgUpBfoEKQUBBfoEUAPdBOwB3QR7AuwBKwUqBfwEKgX6BPwELAUrBf4EKwX8BP4ELQUsBQgFLAX+BAgFLgUtBQcFLQUIBQcFBwUDBS4FAwUvBS4FAwX4BC8F+AQwBS8F+AT5BDAF+QQxBTAFMQX5BDIF+QQNBTIFbwJuAg0FbgIyBQ0FKQQoBEMEKAQzBUMENAXSBDMF0gRDBDMF0gQ0BbIEjQKLArMEhwK0BIsCtASzBIsCrwQMBQQFDAULBQQFCgUgBR8FHwU1BQoFrQT0BO8B9ATwBO8BrQSuBPQErgQfBfQENQUfBQUFHwWuBAUFNQUEBQsFCwUKBTUFZgQEBQUFBAU1BQUFtASHAgwFhwKJAgwFDAWvBLQErwSxBLQEiQL2BAYF9gQCBQYFJQMnAx8DJwMiBR8D1wMhAyIFIQMfAyIFIQPXAxIE1wMgBBIEEgQgBPwDIAQIBPwDCgTkAwgE5AP8AwgE5AMKBOYDCgQ2BeYDDgMPAzcFDwMeAzcFIAMkAx4DJAM3BR4DFgUfBN0CHwTWA90CFQUJBBYFCQQfBBYFCQQVBQsEFQUZBQsE4QPiA+kD4gPqA+kD9QM4BfMDOAUGBPMDOQU2BQsENgUKBAsEOgU7BRoFOwUZBRoFzAQ6BcoEOgUaBcoEOwU5BRkFOQULBBkFPAU9BT4FPQU/BT4FPgU/BUAFPwVBBUAFQAVBBUIFQgVBBUMFQwVBBUQFQQVFBUQFRAVFBUYFRQVHBUYFRgVHBUgFSAVHBUkFRwVKBUkFSQVKBUsFSwVKBUwFTAVKBU0FSgVOBU0FTQVOBU8F9gH3AfoB9wH4AfoB+gH9AfYB/QEjBfYB/QHpBCMF6QQkBSMF4gHgAY4D4AExA44DBAIwA+ABMAMxA+ABMAMEAuoEBALkBOoEDAIKAlIDCgIVA1IDDgIXAwoCFwMVAwoCFwMOAu0EDgLmBO0EigPFBOYBxQTlAeYB5gEnBYoDJwXcBIoDJwUoBdwEKAXZBNwEKAUpBdkEKQUoAtkEpASlBKYEpQRQA6YE3QRQA98EUAOlBN8E2ATdBN4E3QTfBN4EVQTYBFcE2ATeBFcERwPABOkBwATnAekBSANHA3wCRwPpAXwC0wRIA9cESAN8AtcETQTTBE8E0wTXBE8ECQMzA+QEMwPqBOQEBAPMAQkDzAEzAwkDCgM9A+YEPQPtBOYEAgPXAQoD1wE9AwoD6QQZAyQFGQMlBSQFGQMGAyUFBgMmBSUFBgMHAyYFBwM7AyYFBwOiBDsDogQ6AzsDOQM6A9EBOgOiBNEB0QHSATkD0gG1AjkDtgK1AiEFtQLSASEFBQPLAQQDywHMAQQDoQTLAb8EywEFA78EIwOhBAwDoQS/BAwDIgMjAw4DIwMMAw4DJAMiAzcFIgMOAzcFAwPYAQID2AHXAQIDvgSgBAMDoATYAQMDoAS+BCgDvgQQAygDEgMnAxADJwMoAxADIgUnAykDJwMSAykDTARNBE4ETQRPBE4EOwJMBD4CTAROBD4CPgI/AjsCPwI6AjsCUgI6Ak0COgI/Ak0CTQJOAlICTgJRAlICXARRAl0EUQJOAl0EWwRcBOECXARdBOEC4QLiAlsE4gIXBVsEAAMXBfoCFwXiAvoC/gIAA/kCAAP6AvkC7gL+AukC/gL5AukC7gLpAuwC6QLoAuwCGAQbBOgCGwTsAugCGwQYBAQEGAQDBAQE7wP0AwME9AMEBAME9APvA/YD7wPxA/YDRAIqAisFKgIqBSsFYwREAiwFRAIrBSwFYQRjBC0FYwQsBS0FLgJhBC4FYQQtBS4FLgUvBS4CLwUtAi4CLwUwBS0CMAWrAi0CMAUxBasCMQWlAqsCMgVZADEFWQClAjEFbgJXADIFVwBZADIFcAJVAG4CVQBXAG4CHAVTAHACUwBVAHACPwQ+BBwFPgRTABwFQQQnBD8EJwQ+BD8EJwRBBIEDQQQQBYEDDgWfAhAFnwKBAxAFZQJKAA4FSgCfAg4FSgBlAkgAZQJnAkgASABnAqMCZwJjAqMCJACdAmMCnQKjAmMCJgCeAiQAngKdAiQAngImAKkCJgBYAqkCqAKpAlkCqQJYAlkCqgKoAloCqAJZAloCWgJdAqoCXQIgAKoCXQJeAiAAXgIhACAAXgJqAiEAagKgAiEAcgKiAmoCogKgAmoCYAJCAHICQgCiAnICQgBgAkAAYAJfAkAAggN/A18CfwNAAF8CzgSnArYEpwI9BLYEbAJtAhgCbQKmAhgCMAIvAjQCLwJVAjQCVARVBFYEVQRXBFYEQwJUBFcCVARWBFcCQgJDAlYCQwJXAlYCSgJCAmQEQgJWAmQESQJKAl8ESgJkBF8ELwJJAlUCSQJfBFUCNAI1AjACNQLUAjACbQLUAqYC1AI1AqYCFwISBRgCEgVsAhgCpwLOBBcCzgQSBRcCIQS1BD0EtQS2BD0EIwQbBSEEGwW1BCEEfwOCAyMEggMbBSMEKQUqBSgCKgUqAigC",min:[-3.22326,-.45438,-.95648],max:[.55512,2.19452,1.9681],reach:[-2.36385,1.45877,.03362]}};var ei={w:1024,h:512,r:"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AgIX1gQFAQFABxT//7ACF9kEAkEIFf//sAIWmwULFP//sAIWmQUJGP//rAICAReYBQkZ//+sAgICFZcFCxn//60CAQETmQULGv//rAIBAROaBQsa//+rAhWaBQsb//+qAhabBQEBBxz//6kCF58FAx7//60CFZsFASL//60CGLsF//+sAhm7Bf//qgIBAQIBFbwF//+pAhq9Bf//qQIBAQEBFL8F//+pAheEAwG7Av//qgICARKFAwO5Av//qwIBARLBBf//qgIBARHDBf//rAIQxAX//6sCEMUF//+sAg/FBf//rgINGgIBA6UF//+rAgECDhgCAQOmBf//rQIQwwX//64CCgIBxQX//68CBQECAQXDBf//sQICAQICBsIF//+vAgMBAwQFwQX//7ECAQECBAfABf//tQIBAQECCFUC5wT//7UCEVMB5gT//7cCAQEEAQO/Bf//ugIBAQLCBf//gAj//4AI//+ACP//gAj//4AI//+ACP//gAj//4AI//+ACP//gAj//4AI//+ACP//gAj//4AI//+ACP//gAj//4AI//+ACP//2QIBpgX//4AI//+ACP//gAj//9oCBKIF///XAgOmBf//zgIBBAYBA6MF///KAgIFBKsF///OAgWtBf//ygIGsAX//8oCBs4DAuAB///IAgfIAgaEAQQYBr0B///FAgkCAcECDn8NDwotCwMDff//xAIGAwHBAhNhBwINAhcIDhwECRxz//+9AgIEBcMCAQQQWFATDwYpZ///vAIDAQe9AgIFHUdVAw0BRmX//7wCAQUEvQIEAQEBMS+wAQIEYP//wQIFtQJLHb8BXv//wgIFsQJPGcQBBgFV///BAgqTAgMSUxnPAQEDAwNI//+zAgYIC5ECBQ9VF98BRP//sQIBAgYDEQEBjgIGDVMW6wE7//+qAgEJBwIS3gECLg8EVQ0BBPABOf//qQICCgcCEbQBAUYCD2UP+gE3//+3AgYCEaYBAhABDAgGDgMCBwIFAQ5yBwEB/AEDAzD//6cCBwkGAxGZAQYHAhEtBQoIdgj/AQIQI///sgIMAhKRAQMEBRPBAQiUAiH//6wCEgIRjAEKAxQBwgEKmAIBARv//+IBAQMDBAE8BQcIAw+RAd8BCZ0CGv//4wENRAkFEY0B3wEHngIc///8AQE0CAgSiQHjAQOhAh3//9oBAx8CAgUkAxMVhAHmAQOhAh7//5YBA0MsAwIMBgkEChqCAYoEJP//lgEFBwE5AwYtBwwFAwIkfoQEAQIo//+aAQUEBgICBgIFAiNzcgER/wMr//+jAQQSBAUEGnJzAQkCA4IEKv//fwEUCggWBgQdbX2CBDH//3xIImWAAYMEMv//cdoBgAGBBDT//2bhAXSUBDH//1oBBeABdJsEMf//WAYC2gFzogQx//9eAQLEAYMBpwQx//8+AgMFDgECAQfGAXytBAoBJf//PhQI1QFwsgQICB///z7cAQQSSAcdtwQt//9B0gEBDFQPF7oEAQICASb//0TOAQUNGAUwEha/BAECJf//LgYTzgEiBjQTF7EENP//LQsYyQEDAhYHAwMvFRYCDZ8EN///MgkdzwEOBAcELBYlnQQ4//9aywEeAgwFFxg3jAQ4//9U1AEmCBEYKZ0EO///WNIBCwIRAgMJEA4orQQ3//9P7wFRugQ3//8vBBCBAkXBBDb//0n/AT/HBDL//0n8ASgQCMwEL///TIMCExoEzwQCBSr//0mGAg/9BCX//xYJIpECCIUFIf//IBkEqgcZ//8rxwcO//8t0QcC//8AFxjRB///ADARvwf//wCACP//AIAI//8AgAj//wCACP//AIAI//8AgAj//wCACP//AIAI//8AgAj//wCACP//AIAI//8AgAj//wCACP//AIAI//8="};function Xi(){return{uReveal:{value:0},uTint:{value:0}}}function au(i,t,e){if(e)return v0(i,t);let n=Xi();n.uFadeY={value:new i.Vector2(.95,1.7)};let s=new i.Group,r=(f,p)=>ti(i,Object.assign({color:f,uniforms:n},p||{})),o=(f,p,m,g,A,d,w,M)=>{let x=new i.Mesh(new i.BoxGeometry(f,p,m),r(w,M));return x.position.set(g,A,d),s.add(x),x},a=2.75,c=[-2,-1,0,1,2],l=-1.95;o(16,4.6,.1,0,-.5,-1.7,2763306),o(15,.08,2,0,l,-.65,10132122),o(15,.32,.06,0,l-.12,.38,14211288),c.forEach(f=>o(.62,.2,.04,f*a-.7,l-.12,.42,4210752));let u=new i.Curve;u.getPoint=(f,p=new i.Vector3)=>{let m=f*Math.PI*2*3.5;return p.set(Math.cos(m)*1.08,Math.sin(m)*.5,-1.55+f*1.85)};let h=new i.TubeGeometry(u,140,.035,5,!1);return c.forEach(f=>{let p=new i.Mesh(h,r(15263976,{rim:.6}));p.position.set(f*a,-1.35,0),s.add(p)}),t&&c.forEach(f=>{if(f===0)return;let p=new i.Group;t.forEach(m=>p.add(new i.Mesh(m,r(12105912,{rim:.5,side:i.DoubleSide})))),p.position.set(f*a,0,-.35),p.scale.setScalar(.94),p.rotation.y=f*.04,s.add(p)}),o(16,2.6,.3,0,l-1.62,.42,9211020),o(7.2,1.25,.1,0,l-1.75,.62,2500134),o(2.2,.12,.06,0,l-1.25,.7,14737632,{rim:.6}),{group:s,u:n}}function v0(i,t){let e=Xi();e.uDimY={value:new i.Vector3(2,2.06,.45)};let n=new i.Group,s=(A,d)=>ti(i,Object.assign({color:A,uniforms:e},d||{})),r=(A,d,w,M,x,D,B,b)=>{let I=new i.Mesh(new i.BoxGeometry(A,d,w),s(B,b));return I.position.set(M,x,D),n.add(I),I},o=2.75,a=4.4,c=[-3,-2,-1,0,1,2,3],l=[2,1,0,-1,-2];r(22,24,.1,0,0,-1.7,2763306);let u=new i.Curve;u.getPoint=(A,d=new i.Vector3)=>{let w=A*Math.PI*2*3.5;return d.set(Math.cos(w)*1.08,Math.sin(w)*.5,-1.55+A*1.85)};let h=new i.TubeGeometry(u,140,.035,5,!1),f=s(15263976,{rim:.6}),p=s(12105912,{rim:.5,side:i.DoubleSide});l.forEach(A=>{let d=A*a-1.95;r(21,.08,2,0,d,-.65,10132122),r(21,.32,.06,0,d-.12,.38,14211288),c.forEach(w=>{r(.62,.2,.04,w*o-.7,d-.12,.42,4210752);let M=new i.Mesh(h,f);if(M.position.set(w*o,A*a-1.35,0),n.add(M),!t||A===0&&w===0)return;let x=new i.Group;t.forEach(D=>x.add(new i.Mesh(D,p))),x.position.set(w*o,A*a,-.35),x.scale.setScalar(.94),x.rotation.y=w*.04+(A%2?.03:-.02),n.add(x)})});let m=3.5*o+.25;r(.5,24,.6,-m,0,.3,8026746,{rim:.6}),r(.5,24,.6,m,0,.3,8026746,{rim:.6}),r(.08,24,.08,-m+.32,0,.66,16777215,{rim:.8}),r(.08,24,.08,m-.32,0,.66,16777215,{rim:.8}),r(2*m,.5,.6,0,2.5*a+.4,.3,8026746,{rim:.6}),r(2*m-1,.16,.16,0,2.5*a+.05,.4,16777215,{emissive:16777215});let g=m+1.9;r(3.2,24,.5,g,0,.2,5921370,{rim:.5}),r(2.2,1,.08,g,2.6,.5,1973790),r(1.9,.14,.04,g,2.6,.56,13619151,{emissive:6316128});for(let A=0;A<12;A++)r(.52,.42,.12,g-.62+A%3*.62,1.5-Math.floor(A/3)*.56,.52,14211288,{rim:.7});return r(.16,.9,.1,g,-1.4,.5,1052688),r(.5,1.2,.08,g,-1.4,.47,10132122,{rim:.6}),{group:n,u:e}}function y0(){let i=atob(ei.r),t=i.length,e=new Uint8Array(ei.w*ei.h),n=0,s=0,r=0,o=0;for(;n<t&&s<ei.h;){if(i.charCodeAt(n)===255&&i.charCodeAt(n+1)===255){n+=2,s++,r=0,o=0;continue}let c=0,l=0,u;do u=i.charCodeAt(n++),c|=(u&127)<<l,l+=7;while(u&128);o&&e.fill(1,s*ei.w+r,s*ei.w+r+c),r+=c,o^=1}return e}function _0(){let i=ei.w,t=ei.h,e=y0(),n=new Float32Array(i*t),s=new Float32Array(i*t),r=6;for(let m=0;m<t;m++){let g=0;for(let A=-r;A<=r;A++)g+=e[m*i+(A+i)%i];for(let A=0;A<i;A++)s[m*i+A]=g/(2*r+1),g+=e[m*i+(A+r+1)%i]-e[m*i+(A-r+i)%i]}for(let m=0;m<i;m++){let g=0;for(let A=-r;A<=r;A++)g+=s[Math.min(t-1,Math.max(0,A))*i+m];for(let A=0;A<t;A++)n[A*i+m]=g/(2*r+1),g+=s[Math.min(t-1,A+r+1)*i+m]-s[Math.max(0,A-r)*i+m]}let o=Oe(i,t),a=o.getContext("2d"),c=a.createImageData(i,t),l=c.data,u=(m,g,A)=>{let d=g<.88?0:(g-.88)/.12,w=d*d*(3-2*d);return w?m(g,A)*(1-w)+m(g-1,A)*w:m(g,A)},h=(m,g)=>Ln(m*40,g*20,3,4),f=(m,g)=>Ln(m*14,g*7,2,2),p=(m,g)=>Ln(m*22+1.4*Ln(m*6,g*6,3,6),g*15+1*Ln(m*6+7,g*6,3,7),5,9);for(let m=0;m<t;m++){let g=m/t,A=(.5-g)*180,d=Math.abs(A),w=Math.exp(-Math.pow((d-23)/8,2)),M=Math.exp(-Math.pow((d-50)/12,2)),x=Math.exp(-Math.pow(A/7,2));for(let D=0;D<i;D++){let B=D/i,b=m*i+D,I=n[b],_;e[b]?_=.44+.2*u(h,B,g)+.12*w-.05*(1-I):_=.16+.05*u(f,B,g)+.14*I*I,d>66&&(_=Math.max(_,.55+.35*Math.min(1,(d-66)/6)));let y=u(p,B,g)+.14*x+.1*M-.16*w,S=Math.min(1,Math.max(0,(y-.16)/.24));_+=(.97-_)*S*S*(3-2*S)*.82;let N=Math.max(0,Math.min(255,_*255));l[b*4]=l[b*4+1]=l[b*4+2]=N,l[b*4+3]=255}}return a.putImageData(c,0,0),o}function cu(i){let t=Xi(),e=new i.CanvasTexture(_0());e.anisotropy=4;let n=10,s=new i.Mesh(new i.SphereGeometry(n,160,96),ti(i,{map:e,uniforms:t,rim:.35})),r=new i.Mesh(new i.SphereGeometry(n*1.035,128,64),ti(i,{uniforms:t,side:i.BackSide,lum:"lum = pow(smoothstep(0.0, 0.27, abs(dot(normalize(normal), normalize(vViewPosition)))), 1.6) * 0.62;"})),o=new i.Group;o.add(s);let a=new i.Group;return a.add(o,r),{group:a,u:t,planet:s,tilt:o,R:n,textures:[e]}}function E0(i,t){let e=Oe(i,t),n=e.getContext("2d"),s=n.createImageData(i,t),r=s.data,o=dr(11),a=[];for(let c=0;c<70;c++)a.push([o(),.15+o()*.7,.008+Math.pow(o(),3)*.06]);for(let c=0;c<t;c++)for(let l=0;l<i;l++){let u=l/i,h=c/t,f=.55+.25*Ln(u*6,h*4,4,3)+.12*Ln(u*22,h*14,3,8);for(let[g,A,d]of a){let w=u-g;w-=Math.round(w);let M=(h-A)*.5,x=Math.sqrt(w*w+M*M)/d;x<1.35&&(f+=x<1?-.22*(1-x*x):.18*Math.exp(-Math.pow((x-1.08)/.12,2)))}h<.07&&(f=.95);let p=(c*i+l)*4,m=Math.max(0,Math.min(255,f*235));r[p]=r[p+1]=r[p+2]=m,r[p+3]=255}return n.putImageData(s,0,0),e}function lu(i){let t=Xi();t.uTint.value=1;let e=new i.CanvasTexture(E0(512,256)),n=new i.Mesh(new i.SphereGeometry(10,96,64),ti(i,{map:e,uniforms:t,rim:.3,emissive:1579032})),s=new i.Group;return s.add(n),n.rotation.z=.35,{group:s,u:t,planet:n}}var ru=6;function hu(i,t){let e=Xi(),n=new i.Group,s=(f,p)=>ti(i,Object.assign({color:f,uniforms:e},p||{})),r=4.7,o=4.6,a=new i.Mesh(new i.BoxGeometry(r*2+.7,o+.5,.18),s(6974058,{rim:.55}));a.position.z=-.12,n.add(a);let c=[];[-1,1].forEach(f=>{let p=new i.Mesh(new i.BoxGeometry(r,o,.05),s(10132122));p.position.set(f*(r/2+.18),0,.02),n.add(p);for(let m=0;m<2;m++)for(let g=0;g<3;g++){let A=f*(r/2+.18)+(g-1)*1.5,d=(.5-m)*2.12,w=new i.Mesh(new i.BoxGeometry(1.38,2.02,.03),s(16777215,{rim:.7}));w.position.set(A,d,.06),n.add(w),c.push(new i.Vector3(A,d,.1))}}),[-1.1,1.1].forEach(f=>{let p=new i.Mesh(new i.TorusGeometry(.32,.06,8,24),s(15790320,{rim:.7}));p.position.set(0,f,.12),p.rotation.y=Math.PI/2,n.add(p)});let l=t.map(f=>{let p=new i.CanvasTexture(Ar(f,"face",256));return p.colorSpace=i.SRGBColorSpace,p}),u=new i.PlaneGeometry(1.26,1.89),h=0;return c.forEach((f,p)=>{if(p===ru)return;let m=new i.Mesh(u,s(16777215,{map:l[h++%l.length],rim:.2,emissive:5263440}));m.position.copy(f),m.position.z=.09,n.add(m)}),{group:n,u:e,pockets:c,slot:c[ru],size:new i.Vector2(r*2+.7,o+.5),textures:l}}function ou(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Uint16Array(e.buffer)}function uu(i){let t=Xi(),e=new i.Group,n={};return["G","T"].forEach(s=>{let r=su[s],o=ou(r.p),a=new Float32Array(o.length);for(let h=0;h<o.length;h++){let f=h%3;a[h]=r.min[f]+o[h]/65535*(r.max[f]-r.min[f])}let c=new i.BufferGeometry;c.setAttribute("position",new i.BufferAttribute(a,3)),c.setIndex(new i.BufferAttribute(ou(r.i),1)),c.computeVertexNormals();let l=new i.Mesh(c,ti(i,{color:15921906,uniforms:t,rim:.45,side:i.DoubleSide}));l.frustumCulled=!1;let u=new i.Group;u.add(l),e.add(u),u.userData.reach=new i.Vector3().fromArray(r.reach),n[s]=u}),{group:e,u:t,hands:n}}function fu(i,t){let e=Xi();e.uFadeY={value:new i.Vector2(0,1)};let n=Oe(128,128),s=n.getContext("2d");s.fillStyle="#8a8a8a",s.fillRect(0,0,128,128),s.beginPath(),s.arc(64,64,52,0,Math.PI*2),s.lineWidth=5,s.strokeStyle="#ffffff",s.stroke();let r=72/230;s.save(),s.translate(64-63*r,64-115*r),s.scale(r,r),s.fillStyle="#ffffff",jn.forEach(f=>s.fill(new Path2D(f))),s.restore();let o=new i.CanvasTexture(n),a=new i.CylinderGeometry(.5,.5,.08,28,1);a.rotateX(Math.PI/2);let c=ti(i,{map:o,uniforms:e,rim:.45,fadeBelow:!0}),l=new i.Group,u=[],h=dr(7);for(let f=0;f<t;f++){let p=new i.Mesh(a,c);p.frustumCulled=!1,l.add(p),u.push({m:p,x:(f+.2+h()*.6)/t,z:-3-h()*6,ph:h(),sp:.7+h()*.5,wx:(h()-.5)*.8,wy:.6+h()*1.4,s:1.5+h()*.9})}return{group:l,u:e,coins:u,tex:o,geo:a,mat:c,textures:[o]}}var Ps=1,In=.15,Us=.8;function B0(i){let t=s=>{let r=Oe(i,i);return s(r.getContext("2d")),r},e=(s,r)=>{let o=i*.6,a=o/230;s.save(),s.translate(i/2-63*a,i/2-115*a),s.scale(a,a),s.fillStyle=r,jn.forEach(c=>s.fill(new Path2D(c))),s.restore()},n=(s,r)=>{s.beginPath(),s.arc(i/2,i/2,i*.455,0,Math.PI*2),s.lineWidth=i*.012,s.strokeStyle=r,s.stroke()};return{color:t(s=>{s.fillStyle="#b4f25e",s.fillRect(0,0,i,i),n(s,"#a6f357"),e(s,"#a6f357")}),orm:t(s=>{s.fillStyle="rgb(0,40,255)",s.fillRect(0,0,i,i),n(s,"rgb(0,200,0)"),e(s,"rgb(0,215,0)")}),emissive:t(s=>{s.fillStyle="#505050",s.fillRect(0,0,i,i),n(s,"#c8c8c8"),e(s,"#ffffff")}),coat:t(s=>{s.fillStyle="rgb(210,0,0)",s.fillRect(0,0,i,i),n(s,"rgb(30,0,0)"),e(s,"rgb(18,0,0)")})}}function C0(i){let t=new i.RingGeometry(5e-4,Us,96,14),e=t.attributes.position;for(let n=0;n<e.count;n++){let s=Math.hypot(e.getX(n),e.getY(n))/Us;e.setZ(n,In/2-.02+.016*(1-s*s))}return t.computeVertexNormals(),t}function Ho(i,t){let e=new i.Scene;e.environment=t;let n=new i.PerspectiveCamera(16,1,.1,400),s=B0(512),r=(B,b)=>{let I=new i.CanvasTexture(B);return b&&(I.colorSpace=i.SRGBColorSpace),I.anisotropy=8,I},o=r(s.color,!0),a=r(s.orm),c=r(s.emissive,!0),l=r(s.coat),u=new i.Color("#a6f357"),h=new i.MeshPhysicalMaterial({map:o,roughness:1,metalness:1,roughnessMap:a,metalnessMap:a,clearcoat:1,clearcoatRoughness:.06,clearcoatMap:l,iridescence:.3,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],iridescenceMap:l,emissive:u,emissiveMap:c,emissiveIntensity:.85,envMapIntensity:1.3,transparent:!0}),f=new i.MeshPhysicalMaterial({color:new i.Color("#b4f25e"),roughness:.17,metalness:1,clearcoat:1,clearcoatRoughness:.06,iridescence:.3,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],emissive:u,emissiveIntensity:.075,envMapIntensity:1.3,transparent:!0}),p=[$n(h,{amt:.06}),$n(f,{amt:.05})],m=[[Us-.01,In/2-.02],[Us+.05,In/2],[Ps-.06,In/2],[Ps-.012,In/2-.014],[Ps,In/2-.04],[Ps,-In/2+.04],[Ps-.012,-In/2+.014],[Ps-.06,-In/2],[Us+.05,-In/2],[Us-.01,-In/2+.02]],g=new i.LatheGeometry(m.reverse().map(([B,b])=>new i.Vector2(B,b)),128);g.rotateX(Math.PI/2);let A=C0(i),d=A.clone();d.rotateY(Math.PI);let w=new i.Group,M=new i.Group;M.add(new i.Mesh(g,f),new i.Mesh(A,h),new i.Mesh(d,h)),w.add(M),e.add(w),w.traverse(B=>{B.isMesh&&(B.frustumCulled=!1)});let x=-1,D=0;return{scene:e,camera:n,group:w,update(B,b,I,_,y){let S=me(b.o,0,1);if(S<=.005)return x=-1,!1;x<0&&(x=B),D=B,n.aspect=I/_,n.fov=16;let N=_/(Math.max(4,b.size)*Math.tan(i.MathUtils.degToRad(8)));n.position.set(0,0,N),n.near=N*.5,n.far=N*2,n.lookAt(0,0,0),n.setViewOffset(I,_,I/2-b.x,_/2-b.y,I,_),n.updateProjectionMatrix();let U=4.6,Q=2.5,X=B-x,G=Math.floor(X/U),nt=X-G*U,V=nt<Q?0:un.io((nt-Q)/(U-Q));return M.rotation.set(Math.sin(B*.9)*.07,(G+V)*Math.PI*2+(y||0),Math.sin(B*.7)*.025),e.environmentRotation.set(0,Math.sin(B*.23)*.5+M.rotation.y*.15,0),p.forEach(at=>{at.uHoloShift.value=B*.05+M.rotation.y*.4}),h.opacity=f.opacity=S,h.depthWrite=f.depthWrite=!0,!0},textures:[o,a,c,l],dispose(){[o,a,c,l].forEach(B=>B.dispose()),[g,A,d].forEach(B=>B.dispose()),h.dispose(),f.dispose()}}}function du(){let i={},t=n=>i[n]||(i[n]={k:{},c:{}}),e={T:i,init(n,s){let r=t(n);for(let o in s)r.c[o]=s[o],r.k[o]=[[-1,s[o],"l"]];return e},tw(n,s,r,o,a){return[].concat(n).forEach(c=>{let l=t(c);for(let u in o){let h=u in l.c?l.c[u]:0;(l.k[u]||(l.k[u]=[])).push([s,h,"l"],[r,o[u],a||"io"]),l.c[u]=o[u]}}),e},set(n,s,r){return e.tw(n,s,s+1e-4,r,"step")},done(){return Object.values(i).forEach(n=>Object.values(n.k).forEach(s=>s.sort((r,o)=>r[0]-o[0]))),e},v(n,s,r,o=0){let a=i[n],c=a&&a.k[s];if(!c)return o;if(r<=c[0][0])return c[0][1];for(let l=1;l<c.length;l++){let u=c[l];if(r<=u[0]){let h=c[l-1],f=u[0]-h[0],p=f>0?(r-h[0])/f:1,m=u[2]==="step"?p>=1?1:0:(un[u[2]]||un.io)(p);return h[1]+(u[1]-h[1])*m}}return c[c.length-1][1]},all(n,s){let r=i[n],o={};if(!r)return o;for(let a in r.k)o[a]=e.v(n,a,s);return o}};return e}function pu(i){if(i<=0)return 0;if(i>=1)return 1;let t=[[0,.05],[.13,.17],[.24,.26],[.36,.42],[.5,1.01]];for(let[e,n]of t)if(i>=e&&i<n)return i>.5?Math.min(1,.55+(i-.5)*2):.75;return .04}var mr={home:7,gifts:3},xu=mr.home,Au=-1.25,mu=.55,S0=1.38;function wu(i){let t=du();return t.init("pack",{x:0,y:0,z:0,rx:0,ry:0,rz:0,s:i?S0:1,o:1,tear:0,mouth:0,spin:0}),t.init("c0",{x:0,y:-.4,z:0,rz:0,ry:0,s:.92,o:0,on:0,slot:0,tog:0,pow:0}),t.init("c1",{x:0,y:-.4,z:-.02,rz:0,s:.92,o:0}),t.init("c2",{x:0,y:-.4,z:-.04,rz:0,s:.92,o:0}),t.init("machine",{r:0}),t.init("mars",{r:0,y:-.9}),t.init("hands",{r:0,spread:1}),t.init("binder",{r:0,y:-10}),t.init("glow",{k:1}),t.init("sky",{r:0,y:0}),t.init("burn",{r:0}),t.init("gpack",{k:0}),t.init("c0",{into:0}),t}function gu(i,t){let e=wu(i),n=i?.88:.96,s=i?.8:.76;return e.tw("machine",.12,.82,{r:1},"l"),i&&e.tw("pack",.08,.8,{s:1.1},"io"),e.tw("pack",1.1,1.85,i?{z:.85,y:.2,s:1.25}:{z:.85,y:.16},"io"),e.tw("machine",1.08,1.5,{r:0},"l"),e.tw("pack",2.08,2.55,{tear:1},"l"),e.tw("pack",2.15,2.45,{mouth:1},"o"),e.set(["c0","c1","c2"],2.16,{o:1}),e.tw("pack",2.3,2.88,i?{y:-1.12,z:.55,s:.82}:{y:-.92,z:.55,s:.7},"io"),e.tw("c0",2.3,2.86,{y:1.12,z:.14,s:i?1:.9},"o"),e.tw("c1",2.34,2.9,{x:-n,y:s,z:.04,rz:.2,s:i?1:.92},"o"),e.tw("c2",2.36,2.92,{x:n,y:s,z:0,rz:-.2,s:i?1:.92},"o"),e.tw("c1",3.08,3.5,{x:-3.6,rz:.55,o:0},"i"),e.tw("c2",3.1,3.52,{x:3.6,rz:-.55,o:0},"i"),e.tw("pack",3.08,3.48,{y:-6,o:0},"i"),e.tw("c0",3.14,3.74,{y:i?.22:.26,z:1.3,s:i?1.6:1.38},"io"),e.tw("c0",3.44,3.62,{tog:1},"io"),e.tw("c0",3.58,3.88,{on:1,pow:1},"l"),e.tw("mars",3.3,3.92,{r:1},"l"),e.tw("mars",3.2,3.95,{y:0},"o"),e.tw("mars",4.06,4.5,{r:0},"l"),e.tw("binder",4.1,4.72,{y:0},"o"),e.tw("binder",4.16,4.66,{r:1},"l"),e.tw("c0",4.2,4.86,{slot:1},"io"),e.tw("c0",4.22,4.4,{tog:0},"io"),e.tw("c0",4.28,4.56,{on:0,pow:0},"l"),e.tw("binder",5.06,5.44,{r:0},"l"),e.tw("c0",5.08,5.46,{o:0},"l"),e.tw("glow",5.04,5.5,{k:0},"l"),t&&e.tw("burn",5.25,5.85,{r:1},"l"),e.done()}function b0(i){let t=wu(i);t.init("hands",{r:1,spread:0}),t.init("pack",{y:i?0:.05,z:.3,s:i?.95:.82}),["c0","c1","c2"].forEach((s,r)=>t.init(s,{y:-.25,z:.28-r*.02,s:.8})),t.tw("hands",.04,.42,{r:0,spread:.35},"l"),t.tw("pack",.1,.36,{tear:1},"l"),t.tw("pack",.14,.38,{mouth:1},"o"),t.set(["c0","c1","c2"],.15,{o:1}),t.tw(["c0","c1","c2"],.2,.46,{y:1.35,z:.4,s:.86},"o"),t.tw("pack",.38,.72,{y:-6,o:0},"i");let e=i?1:1.2,n=i?1.1:.98;return t.tw("c0",.46,.88,{y:i?.35:.42,z:.5,s:i?1.2:1.05},"io"),t.tw("c1",.48,.9,{x:-e,y:i?0:.08,z:.3,rz:.2,s:n},"io"),t.tw("c2",.5,.92,{x:e,y:i?0:.08,z:.26,rz:-.2,s:n},"io"),t.tw("c0",.66,.8,{tog:1},"io"),t.tw("c0",.76,.96,{on:1,pow:1},"l"),t.tw("mars",.45,.95,{r:1},"l"),t.tw("mars",.4,.98,{y:0},"o"),t.tw("mars",1.06,1.45,{r:0},"l"),t.tw("c1",1.06,1.42,{x:-3.6,rz:.55,o:0},"i"),t.tw("c2",1.08,1.44,{x:3.6,rz:-.55,o:0},"i"),t.tw("c0",1.1,1.86,{into:1},"l"),t.tw("gpack",1.42,1.74,{k:1},"l"),t.tw("glow",1.3,1.7,{k:0},"l"),t.tw("hands",1.3,1.95,{r:1,spread:0},"o"),t.done()}var Wo=()=>({off:new R,vel:new R,q:new Ve,w:new R,held:!1,lift:0}),T0=new Ve;function Mu(i,t={}){var ks,dl;let e=t.root||i.parentNode,n=!!t.reduce,s=t.world==="big",r=t.page==="gifts"?"gifts":"home",o=mr[r]-1,a=Math.min(window.devicePixelRatio||1,2),c=i.__srGL;c&&(c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,!1),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1));let l=new Fn({canvas:i,context:c||void 0,antialias:a<2,alpha:!1,powerPreference:"high-performance"});i.__srGL=l.getContext(),l.toneMapping=Kn,l.toneMappingExposure=1,l.outputColorSpace=Ee,l.autoClear=!1,l.setClearColor(1184274,1);let u=new qn,h=Ei(ye,l);u.environment=h;let f=new Te(30,1,.1,200),p={uRes:{value:new pt(1,1)},uP:{value:new Ae(.5,.5,.3,.4)},uK:{value:1}},m=new Ne(new vi(2,2),new nn({uniforms:p,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:["precision highp float; uniform vec2 uRes; uniform vec4 uP; uniform float uK;","void main(){","  vec2 p = gl_FragCoord.xy / uRes; p.y = 1.0 - p.y; float asp = uRes.x / uRes.y;","  vec2 d = (p - uP.xy) * vec2(asp, 1.0);","  float spill = exp(-dot(d, d) / (uP.z * uP.z * 2.2));","  vec2 e = (p - vec2(uP.x, uP.y + uP.w)) * vec2(asp * 0.55, 2.4);","  float under = exp(-dot(e, e) / (uP.z * uP.z * 0.5));","  vec3 c = vec3(0.0706) + vec3(0.36, 0.62, 0.1) * (spill * 0.055 + under * 0.05) * uK;","  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);","  gl_FragColor = vec4(c + (n - 0.5) / 255.0, 1.0);","}"].join(`
`)})),g=new qn;g.add(m),m.frustumCulled=!1;let A=new yi(-1,1,1,-1,0,1),d=Rs(ye,{quality:(ks=t.quality)!=null?ks:1});u.add(d.group);let w=new Cs(fl());w.colorSpace=Ee;let x=[["SPCX",10130,"67.8926",482],["TSLA",1583,"4.1674",97],["NVDA",1452,"7.8912",184]].map((W,tt)=>Vo(ye,W,{backTex:w,power:tt===0}));x.forEach(W=>u.add(W.group));let D=Ho(ye,h),B=iu(ye,l),b=au(ye,Zh(ye,.3),s);b.group.position.set(0,0,-.4);let I=s?cu(ye):lu(ye),_=hu(ye,[["TSLA",1583,"4.1674",97],["NVDA",1452,"7.8912",184],["AAPL",507,"1.8093",731],["AMZN",667,"2.1361",276],["META",1583,"2.4315",31],["GME",3994,"157.4985",1096],["SPCX",405,"1.0744",14]]),y=uu(ye);B.scene.add(b.group,I.group,_.group,y.group);let S=null,N=s?fu(ye,18):null,U=null;U&&B.scene.add(U.group);let Q=-7,X=-1,G=new Ve;S&&B.scene.add(S.group),N&&B.scene.add(N.group);let nt=-40,V=!1,at=null,ut=null,gt=-1,kt=new R,Mt={x:0,y:0,z:.3,s:1},Y=()=>{let W=ut;if(!W)return Bt.all("pack",0);let tt=Mt.z,ot=2*(f.position.z-tt)*Math.tan(Zn.degToRad(15))/wt;return Mt.x=(W.x-Et/2)*ot,Mt.y=K+(wt/2-W.y)*ot,Mt.s=(W.h+($?22:30))*ot/xe.H,Mt},it=()=>{let W=at||{x:Et/2,y:wt*.42,size:60},tt=1.8,ot=2*(f.position.z-tt)*Math.tan(Zn.degToRad(15))/wt;return kt.set((W.x-Et/2)*ot,K+(wt/2-W.y)*ot,tt),{p:kt,s:W.size*ot/xe.H}},It=W=>r==="gifts"?b0(W):gu(W,s),$=!1,Et=1,wt=1,Bt=It(!1),zt=7.4,K=0,j=12,T=a,Dt={s:1,x:0,y:0},st=!1,vt=[],ft=-11.7,Nt=1,At={z:-34,rise:1,spin:0,last:-1},C=()=>r==="gifts"?1:4,v=()=>{if(s)return O();let W=Bt.all("c0",r==="gifts"?1:4),Wt=.5-(W.y-He.H/2*W.s-K)/(zt*(j-W.z)/j)-($?.03:.025);ft=K+(.5-Wt)*(zt*(j+7)/j)-10},O=()=>{let W=.42,tt=1.29;if($){let Ue=gu(!0,!0).all("c0",4),On=zt*(j-Ue.z)/j,pn=.5-(Ue.y+He.H/2*Ue.s-K)/On,An=.5-(Ue.y-He.H/2*Ue.s-K)/On;W=pn+(An-pn)/3,tt=W+.53}let ot=zt/j,Wt=Math.atan((.5-W)*ot),Vt=Math.atan((.5-tt)*ot),ee=$?44:50,re=ee*Math.sin(Wt-Vt);Nt=re/I.R,At.z=j-ee*Math.cos(Vt),ft=K+ee*Math.sin(Vt),At.rise=ee*ot*.11/.9,I.tilt.rotation.set(Vt-.49,0,-.1),f.far=Math.max(f.far,ee+re+5),f.updateProjectionMatrix()},Z=()=>{Et=Math.max(1,e.clientWidth),wt=Math.max(1,e.clientHeight),l.setPixelRatio(T),l.setSize(Et,wt,!1);let W=Et/wt,tt=$;$=Et<760||W<.85,tt!==$&&(Bt=It($)),zt=$?Math.max(7,4.6/W):6.5,K=(($?.53:.585)-.5)*zt,j=zt/2/Math.tan(Zn.degToRad(15)),f.fov=30,f.aspect=W,f.near=.1,f.far=j+(s?110:60),f.position.set(0,K,j),f.lookAt(0,K,0),f.updateProjectionMatrix(),p.uRes.value.set(Et*T,wt*T),B.setSize(Et,wt,T,$?5:6,$?8.5:10);let Wt=zt*(j-Au)/j,Vt=$?.34:.36,ee=s?$?.37:.42:$?.3:.32;Dt.s=ee*Wt/2.12,Dt.y=K+(.5-Vt)*Wt-_.size.y/2*Dt.s,Dt.x=$||s?-_.slot.x*Dt.s:0;let re=$?1.1:1;if(b.group.scale.setScalar(re),b.u.uFadeY&&b.u.uFadeY.value.set(.95*re,1.7*re),b.u.uDimY&&b.u.uDimY.value.set(2*re,2.06*re,.45),S){let Ue=$?2.3:1.6;S.base={y:K-Ue,z:j},S.group.position.set(0,S.base.y,j),S.group.scale.set($?.58:1,1,1)}_.group.scale.setScalar(Dt.s),_.group.position.set(Dt.x,Dt.y,Au),v(),st&&We()},z=(dl=t.start)!=null?dl:0,q=0,xt=z,ct=null,yt=0,Zt=.82,lt=2.4,Rt=()=>{ct={m0:me(Math.round(xt),0,o),drive:xt}},Ot=W=>{if(!ct)return;let{m0:tt}=ct,ot=ct.drive-tt,Wt=tt;(Math.abs(ot)>.08||Math.abs(W||0)>.6)&&(Wt=tt+Math.sign(Math.abs(ot)>.08?ot:W)),xt=me(Wt,0,o),ct=null},rt=W=>{ct||Rt(),ct.drive=me(ct.drive+W,Math.max(0,ct.m0-1),Math.min(o,ct.m0+1)),xt=ct.drive},ht=()=>!!(t.isBlocked&&t.isBlocked()),bt=null,Gt=W=>{if(W.preventDefault(),ht()||bt)return;let tt=W.deltaY;W.deltaMode===1?tt*=32:W.deltaMode===2&&(tt*=wt);let ot=performance.now();ct&&ot-yt>260&&Ot(0),yt=ot,rt(tt/760)},Xt=null,P=W=>{if(bt||W.touches.length!==1||ht())return;let tt=W.touches[0].clientY;Xt={y:tt,y0:tt,t:performance.now(),vy:0},Rt()},Ct=W=>{if(W.cancelable&&W.preventDefault(),!Xt||bt||k&&(dt(W.touches[0].clientX,W.touches[0].clientY),k||bt))return;let tt=W.touches[0].clientY,ot=performance.now(),Wt=Xt.y-tt;Xt.vy=.8*Xt.vy+.2*(Wt/Math.max(1,ot-Xt.t)),Xt.y=tt,Xt.t=ot,rt(Wt/(wt*.5))},J=()=>{if(!Xt)return;let W=Xt.vy*1e3/(wt*.5);Xt=null,Ot(W)},et=W=>{let tt=W.key;ht()||W.target&&/^(INPUT|TEXTAREA|SELECT|BUTTON|A)$/.test(W.target.tagName)&&tt===" "||(/^(ArrowDown|PageDown|ArrowRight| )$/.test(tt)?(W.preventDefault(),_t(Math.round(xt)+1)):/^(ArrowUp|PageUp|ArrowLeft)$/.test(tt)?(W.preventDefault(),_t(Math.round(xt)-1)):tt==="Home"?_t(0):tt==="End"&&_t(o))},_t=W=>{ct=null,xt=me(Math.round(W),0,o)},mt={pack:Wo(),c0:Wo(),c1:Wo(),c2:Wo()},Yt=W=>W==="pack"?d.group:x[+W[1]].group,le=0,we=0,se=!1,Be=null,rn=new wi,Fs=new wi,Ls=new ue,Dn=new R,on=new R,gr=new tn(new R(-xe.W/2,-xe.H/2,-.4),new R(xe.W/2,xe.H/2,.4)),xr=new tn(new R(-He.W/2,-He.H/2,-.06),new R(He.W/2,He.H/2,.06)),ni={pack:1,c0:0,c1:0,c2:0},Qs=(W,tt)=>{if(Be&&Be.o>.5&&Math.hypot(W-Be.x,tt-Be.y)<Be.size*.7)return"coin";rn.origin.copy(f.position),rn.direction.set(W/Et*2-1,1-tt/wt*2,.5).unproject(f).sub(f.position).normalize();let ot=null,Wt=1/0;for(let Vt in mt){if(ni[Vt]<.5)continue;let ee=Yt(Vt);if(!ee.visible||(ee.updateMatrixWorld(),Ls.copy(ee.matrixWorld).invert(),Fs.copy(rn).applyMatrix4(Ls),!Fs.intersectBox(Vt==="pack"?gr:xr,Dn)))continue;let re=Dn.applyMatrix4(ee.matrixWorld).distanceTo(f.position);re<Wt&&(Wt=re,ot=Vt)}return ot},ii=W=>{let tt=e.getBoundingClientRect();return[W.clientX-tt.left,W.clientY-tt.top]},Ns=W=>W.target&&W.target.closest&&W.target.closest('button, a, input, [role="dialog"]'),qi=0,Os=0,wr=0,Mr=0,E=220,L=8,k=null,H=(W,tt,ot,Wt)=>{if(bt={key:W,id:tt,x:ot,y:Wt,t:performance.now()},W==="coin")se=!0,we=0;else{let Vt=mt[W];Vt.held=!0,Vt.vel.set(0,0,0),Vt.w.set(0,0,0)}ct=null,Xt=null;try{e.setPointerCapture(tt)}catch{}e.style.cursor="grabbing"},F=()=>{k&&(clearTimeout(k.timer),k=null)},dt=(W,tt)=>{if(!k)return;let[ot,Wt]=ii({clientX:W,clientY:tt}),Vt=ot-k.x,ee=Wt-k.y;if(Math.hypot(Vt,ee)<L)return;let re=k;F(),!(Math.abs(ee)>Math.abs(Vt)*1.15)&&H(re.key,re.id,re.x,re.y)},Tt=W=>{if(bt||ht()||Ns(W)||W.pointerType==="mouse"&&W.button!==0)return;let[tt,ot]=ii(W),Wt=Qs(tt,ot);if(Wt){if(W.pointerType==="touch"){F(),k={key:Wt,id:W.pointerId,x:tt,y:ot},k.timer=setTimeout(()=>{let Vt=k;Vt&&(F(),!bt&&!ht()&&H(Vt.key,Vt.id,Vt.x,Vt.y))},E);return}H(Wt,W.pointerId,tt,ot)}},Ut=W=>{let[tt,ot]=ii(W);if(k&&W.pointerId===k.id&&dt(W.clientX,W.clientY),bt&&W.pointerId===bt.id){let Wt=performance.now(),Vt=tt-bt.x,ee=ot-bt.y,re=Math.max(8,Wt-bt.t)/1e3;if(bt.x=tt,bt.y=ot,bt.t=Wt,bt.key==="coin"){le+=Vt*.012,we+=(Vt*.012/re-we)*.4;return}let Ue=mt[bt.key];Yt(bt.key).getWorldPosition(on);let pn=2*Math.max(1,f.position.z-on.z)*Math.tan(Zn.degToRad(15))/wt;on.set(Vt*pn,-ee*pn,0),Ue.off.add(on),Ue.vel.lerp(on.divideScalar(re),.4);let An=Math.hypot(Vt,ee);An>0&&(on.set(ee/An,Vt/An,0),Ue.q.premultiply(new Ve().setFromAxisAngle(on,An*.0055)),Ue.w.lerp(on.multiplyScalar(An*.0055/re),.4));return}W.pointerType==="mouse"&&(wr=tt/Et*2-1,Mr=ot/wt*2-1,ht()||(e.style.cursor=!Ns(W)&&Qs(tt,ot)?"grab":""))},Pt=W=>{if(k&&W.pointerId===k.id&&F(),!bt||W.pointerId!==bt.id)return;let tt=performance.now()-bt.t>90;if(bt.key==="coin")se=!1,tt&&(we=0);else{let ot=mt[bt.key];ot.held=!1,tt&&(ot.vel.set(0,0,0),ot.w.set(0,0,0))}bt=null,e.style.cursor=""};e.addEventListener("wheel",Gt,{passive:!1}),e.addEventListener("pointerdown",Tt),e.addEventListener("pointermove",Ut),e.addEventListener("pointerup",Pt),e.addEventListener("pointercancel",Pt),e.addEventListener("touchstart",P,{passive:!0}),e.addEventListener("touchmove",Ct,{passive:!1}),e.addEventListener("touchend",J),e.addEventListener("touchcancel",J),window.addEventListener("keydown",et);let Ht=()=>Z();window.addEventListener("resize",Ht);let Jt=W=>{for(let tt in mt){let ot=mt[tt];if(ot.lift+=((ot.held?1:0)-ot.lift)*(1-Math.exp(-W*(ot.held?16:6))),ot.held)continue;ot.vel.addScaledVector(ot.off,-15*W).multiplyScalar(Math.exp(-5.8*W)),ot.off.addScaledVector(ot.vel,W);let ee=ot.w.length();ee>1e-4&&(ot.q.premultiply(new Ve().setFromAxisAngle(on.copy(ot.w).divideScalar(ee),ee*W)),ot.w.multiplyScalar(Math.exp(-W*2.4))),ot.q.slerp(T0,1-Math.exp(-W*2.2)),ot.off.lengthSq()<1e-7&&ot.vel.lengthSq()<1e-7&&(ot.off.set(0,0,0),ot.vel.set(0,0,0))}if(!se&&(we*=Math.exp(-W*1.6),le+=we*W,Math.abs(we)<1.2)){let tt=Math.round(le/(Math.PI*2))*Math.PI*2;le+=(tt-le)*(1-Math.exp(-W*3))}},Ft=(W,tt)=>{let ot=mt[W];tt.position.add(ot.off),tt.quaternion.premultiply(ot.q),ot.lift>.001&&tt.scale.multiplyScalar(1+.045*ot.lift)},te=new R,ae=new R,ce=new R,Re=(W,tt,ot)=>{W.updateMatrixWorld(),te.set(0,0,0).applyMatrix4(W.matrixWorld).project(f),ae.set(tt,ot,0).applyMatrix4(W.matrixWorld).project(f);let Wt=(te.x*.5+.5)*Et,Vt=(.5-te.y*.5)*wt;return{x:Wt,y:Vt,w:Math.abs(ae.x-te.x)*Et,h:Math.abs(ae.y-te.y)*wt}},Lt=0,Qt=W=>{let tt=Bt.all("pack",z),ot=Math.sin(Lt*.75)*.05,Wt=Math.sin(Lt*.31)*.16,Vt=Math.sin(Lt*.43+1)*.045,ee=bt&&bt.key==="pack",re=$||ee?0:qi*.22,Ue=$||ee?0:Os*.12;d.group.position.set(tt.x,tt.y+ot,tt.z),d.group.rotation.set(tt.rx+Vt+Ue,tt.ry+Wt+re+tt.spin*Math.PI*2,tt.rz),d.group.scale.setScalar(tt.s),d.group.visible=tt.o>.01;let On=Bt.v("gpack","k",z),pn=it();if(On>.001){gt<0&&(gt=Lt);let pe=Lt-gt,Ce=4.6,ge=2.5,_e=Math.floor(pe/Ce),he=pe-_e*Ce,qt=he<ge?0:un.io((he-ge)/(Ce-ge));d.group.position.copy(pn.p),d.group.scale.setScalar(pn.s*Math.max(1e-4,un.back(On))),d.group.rotation.set(Math.sin(Lt*.9)*.05,(_e+qt)*Math.PI*2,Math.sin(Lt*.7)*.02),d.group.visible=!0,tt.tear=0,tt.mouth=0,tt.o=1}else gt=-1;let An=Re(d.group,xe.W/2,xe.H/2);W||Ft("pack",d.group),d.setTear(tt.tear),d.setMouth(tt.mouth),d.setHolo(z*.45+Lt*.035+d.group.rotation.y*.9),u.environmentRotation.set(0,Math.sin(Lt*.11)*.45+Math.sin(z*.9)*.2,0),ni={pack:tt.o};let si=r==="home";x.forEach((pe,Ce)=>{let ge=Bt.all("c"+Ce,z),_e=ge.x,he=ge.y,qt=ge.z,Xe=ge.s,Mn=ge.rz,an=Ce===0&&ge.slot||0;if(an>0){_.group.position.y=Dt.y+Bt.v("binder","y",z),_.group.updateMatrixWorld(),ce.copy(_.slot).applyMatrix4(_.group.matrixWorld);let Fe=(f.position.z-mu)/(f.position.z-ce.z),oi=f.position.x+(ce.x-f.position.x)*Fe,Bi=f.position.y+(ce.y-f.position.y)*Fe,Jo=(s?1.94:1.32*1.89)*Dt.s*Fe/He.H;_e+=(oi-_e)*an,he+=(Bi-he)*an,qt+=(mu-qt)*an,Xe+=(Jo-Xe)*an,Mn*=1-an}let vn=Ce===0&&!si&&ge.into||0;if(vn>0){let Fe=it(),oi=Fe.s*xe.H*.74/He.H,Bi=un.io(me(vn/.72,0,1)),Jo=un.io(me((vn-.72)/.28,0,1)),gl=Fe.p.y+xe.H*Fe.s*.5+He.H*oi*.55,_u=gl+(Fe.p.y-gl)*Jo;_e+=(Fe.p.x-_e)*Bi,he+=(_u-he)*Bi,qt+=(Fe.p.z-.06-qt)*Bi,Xe+=(oi-Xe)*Bi,Mn*=1-Bi,vn>.985&&(ge.o=0)}let Vs=Ce===0&&(si?z>3.1&&z<5.6?1-an*.5:0:z>.5&&z<1.4?1-vn:0);if(pe.group.position.set(_e,he+(Ce===0?ot*.6:0),qt),pe.group.rotation.set(Vs*(Vt+Ue)*.8,(ge.ry||0)+Vs*(Wt*.7+re),Mn),pe.group.scale.setScalar(Xe),W||Ft("c"+Ce,pe.group),pe.setOpacity(ge.o),ni["c"+Ce]=ge.o,pe.setHolo(z*.5+Lt*.04+pe.group.rotation.y+Ce*.3),Ce===0){let Fe=ge.on,oi=Fe>0&&Fe<.6?Math.sin(Fe*46)>.1?1:.45:1;pe.setOn(Fe*oi),pe.setPower(ge.pow*oi),pe.setToggle(ge.tog),pe.setLive(ge.pow*oi,Lt)}});let ri=s&&!V?un.o(_i(.15,1.7,Lt)):1,vr=pu(Bt.v("machine","r",z));if(b.u.uReveal.value=vr,S){let pe=Bt.v("sky","r",z)*ri;S.u.uReveal.value=pe,S.group.visible=pe>.001,S.base&&(S.group.position.z=S.base.z-Bt.v("sky","y",z)*9-(1-ri)*2.5),(pe>.001||V)&&S.update(Lt)}if(N){let pe=Bt.v("burn","r",z);N.u.uReveal.value=pe,N.group.visible=pe>.001,B.uniforms.uBurn.value=si?pe:0;let Ce=Et/wt;if(U){let ge=!si&&pe>.001;if(U.group.visible=ge,!ge)U.landed.count&&U.reset(),X=-1,N.coins.forEach(_e=>{_e.fy=void 0});else{let _e=zt*(j-Q)/j,he=me(_e*Ce/13,.45,1);U.group.scale.setScalar(he),U.group.position.set(0,K-_e/2-.3,Q)}}if(pe>.001&&si){let _e=zt*(j- -6)/j;N.u.uFadeY.value.set(K+(.5-.56)*_e,K+(.5-.32)*_e),N.coins.forEach((he,qt)=>{let Xe=zt*(j-he.z)/j,Mn=K+Xe/2+.8,an=Xe*.6+1.6,vn=Mn-(Lt*he.sp*.9+he.ph*an)%an;he.m.visible=!0,he.m.position.set((he.x-.5)*Xe*Ce*.96,vn,he.z),he.m.rotation.set(Math.sin(Lt*he.wx+qt)*.5,Lt*he.wy*(qt%2?1:-1)+qt*.7,Math.sin(Lt*.4+qt)*.3),he.m.scale.setScalar(he.s*me(Xe*Ce/13,.45,1))})}else if(pe>.001){N.u.uFadeY.value.set(-1e5,-99999);let ge=X<0?0:me(Lt-X,0,.1);X=Lt;let _e=U.group,he=_e.scale.x;N.coins.forEach((qt,Xe)=>{let Mn=zt*(j-qt.z)/j,an=K+Mn/2+.8,vn=qt.s*me(Mn*Ce/13,.45,1);qt.fy===void 0&&(qt.fy=an-qt.ph*Mn*.75,qt.gx=(qt.x-.5)*Mn*Ce*.96),qt.fy-=ge*qt.sp*.9;let Vs=qt.gx/he,Fe=_e.position.y+U.surface(Vs)*he;qt.m.visible=!U.full()||qt.fy>Fe+2,qt.m.position.set(qt.gx,qt.fy,qt.z),qt.m.rotation.set(Math.sin(Lt*qt.wx+Xe)*.5,Lt*qt.wy*(Xe%2?1:-1)+Xe*.7,Math.sin(Lt*.4+Xe)*.3),qt.m.scale.setScalar(vn),qt.fy<=Fe+.15*vn&&(G.setFromEuler(qt.m.rotation),U.land(Vs,(qt.fy-_e.position.y)/he,(qt.z-_e.position.z)/he,G,vn/he)&&(qt.fy=an+.5+Math.random()*2.5,qt.x=Math.random(),qt.gx=(qt.x-.5)*Mn*Ce*.96))})}}if(I.u.uReveal.value=Bt.v("mars","r",z),s){I.group.position.set(0,ft+Bt.v("mars","y",z)*At.rise,At.z),I.group.scale.setScalar(Nt);let pe=At.last<0?0:me(Lt-At.last,0,.1);At.last=Lt,At.spin=I.u.uReveal.value>.001?At.spin+pe:0,I.planet.rotation.y=-1.92+At.spin*.028+(z-C())*.2}else I.group.position.set(0,ft+Bt.v("mars","y",z),-7),I.planet.rotation.y=Lt*.028+(z-C())*.15;let Gs=Bt.v("hands","r",z),Yo=Bt.v("hands","spread",z);y.u.uReveal.value=Gs*ri,I0(y.hands,Yo,$,r==="gifts"&&z>1?Y():tt,s),_.u.uReveal.value=Bt.v("binder","r",z),_.group.position.y=Dt.y+Bt.v("binder","y",z);let pl=Bt.v("glow","k",z);b.group.visible=vr>.001,I.group.visible=I.u.uReveal.value>.001,_.group.visible=_.u.uReveal.value>.001,y.group.visible=Gs>.001;let Al=si?z>3&&z<5.6:z>.3&&z<1.7,zs=Al?Re(x[0].group,He.W/2,He.H/2):Re(d.group,xe.W/2,xe.H/2),ml=Al?Bt.v("c0","o",z):tt.o;return p.uP.value.set(zs.x/Et,zs.y/wt,Math.max(.12,zs.h/wt*.5),zs.h/wt*.55),p.uK.value=pl*ml,{P:tt,packScreen:An,so:zs,vk:ml,glowK:pl}},fn=new R,ie=(W,tt,ot,Wt)=>{W.updateMatrixWorld(!0);let Vt=1/0;for(let ee=0;ee<8;ee++)fn.set(ee&1?tt:-tt,ee&2?ot:-ot,ee&4?Wt:-Wt).applyMatrix4(W.matrixWorld).project(f),Vt=Math.min(Vt,(.5-fn.y*.5)*wt);return Vt},We=()=>{let W=z;vt=[];for(let tt=0;tt<=o;tt++){z=tt,Qt(!0);let ot=1/0;Bt.v("pack","o",tt)>.5&&(ot=Math.min(ot,ie(d.group,xe.W/2,xe.H/2,.3))),x.forEach((Wt,Vt)=>{Bt.v("c"+Vt,"o",tt)>.5&&(ot=Math.min(ot,ie(Wt.group,He.W/2,He.H/2,.01)))}),Bt.v("binder","r",tt)>.5&&(ot=Math.min(ot,ie(_.group,_.size.x/2,_.size.y/2,.1))),vt.push(isFinite(ot)?Math.round(ot):null)}z=W},Qn=W=>{var Ue,On;let{P:tt,packScreen:ot,so:Wt,vk:Vt,glowK:ee}=Qt(!1),re=!W&&t.onFrame?t.onFrame(z,{phone:$,page:r,pack:ot,packVisible:tt.o,target:xt,W:Et,H:wt,tops:vt}):null;if(Be=re&&re.coin?re.coin:W?{x:Et/2,y:wt/2,size:80,o:1}:null,re&&re.pack&&(at=re.pack),re&&re.cta&&(ut=re.cta),l.setRenderTarget(null),l.clear(!0,!0,!0),l.render(g,A),B.uniforms.uGlow.value=.9*ee*Vt,s&&vt.length){let pn=me(Math.floor(z),0,o),An=me(pn+1,0,o),si=z-pn,ri=(Ue=vt[pn])!=null?Ue:vt[An],vr=(On=vt[An])!=null?On:ri,Gs=ri==null?0:(ri+(vr-ri)*si)*T,Yo=r==="home"?me(b.u.uReveal.value,0,1):0;B.uniforms.uQuiet.value.set(Gs,70*T,Gs>0?.4*(1-Yo):0)}B.render(f,Lt,{x:Wt.x/Et,y:Wt.y/wt,r:Math.max(.1,Wt.h/wt*.55)}),l.clearDepth(),l.render(u,f),Be&&D.update(Lt,Be,Et,wt,le)&&(l.clearDepth(),l.render(D.scene,D.camera))},Pe=performance.now(),Nn=0,fe=!0,Ye=16.7,xn=0,Je=0,dn=W=>{if(!fe)return;Nn=requestAnimationFrame(dn);let tt=W-Pe,ot=Math.min(.05,tt/1e3);Pe=W,Lt+=ot,Je+=ot,Je>2.5&&tt<120&&T>1&&(Ye+=(tt-Ye)*.05,xn=Ye>23?xn+ot:Math.max(0,xn-ot*.5),xn>1.2&&(T=Math.max(1,T-.5),xn=0,Ye=16.7,Z())),ct&&W-yt>260&&!Xt&&yt&&(Ot(0),yt=0);let Wt=xt-z;if(n)z=Math.round(xt),q=0;else{let Vt=Math.abs(Wt)>1.05&&!ct?lt:Zt,ee=me(Wt*3.4,-Vt,Vt);q+=(ee-q)*Math.min(1,ot*6.5),z+=q*ot,Math.abs(Wt)<8e-4&&Math.abs(q)<.004&&(z=xt,q=0)}z=me(z,0,o),qi+=(wr-qi)*Math.min(1,ot*3),Os+=(Mr-Os)*Math.min(1,ot*3),Jt(ot),Qn(!1)},wn=()=>{let W=z;[d.textures,x.flatMap(tt=>tt.textures),D.textures,_.textures,I.textures||[],N?N.textures:[],S?S.textures:[]].flat().forEach(tt=>l.initTexture(tt)),V=!0;for(let tt=0;tt<=o;tt++)z=tt,Qn(!0);V=!1,z=W};Z();try{wn()}catch{}return st=!0,We(),Nn=requestAnimationFrame(dn),{go:_t,step:W=>_t(Math.round(xt)+W),get t(){return z},get page(){return r},setPage(W){if(W=W==="gifts"?"gifts":"home",W!==r){r=W,o=mr[W]-1,Bt=It($),v(),We(),z=xt=0,q=0,ct=null;for(let tt in mt){let ot=mt[tt];ot.off.set(0,0,0),ot.vel.set(0,0,0),ot.q.identity(),ot.w.set(0,0,0)}wn()}},renderNow(){Pe=performance.now(),dn(Pe)},seek(W){z=xt=W,q=0,ct=null},resize:Z,_dbg:{ascii:B,mars:I,binder:_,machine:b,hands:y,renderer:l,camera:f,scene:u,grabs:mt,get dpr(){return T},setTime(W){Lt=W}},destroy(){fe=!1,cancelAnimationFrame(Nn),e.removeEventListener("wheel",Gt),e.removeEventListener("pointerdown",Tt),e.removeEventListener("pointermove",Ut),e.removeEventListener("pointerup",Pt),e.removeEventListener("pointercancel",Pt),e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",Ct),e.removeEventListener("touchend",J),e.removeEventListener("touchcancel",J),window.removeEventListener("keydown",et),window.removeEventListener("resize",Ht),F(),d.dispose(),x.forEach(W=>W.dispose()),D.dispose(),B.dispose(),l.dispose()}}}function I0(i,t,e,n,s){let r=s?e?.9:1.35:e?.75:1.1,o=s?1.5:1,a=i.G,c=i.T,l=a.userData.reach,u=c.userData.reach,h=xe.H/2*n.s,f=xe.W/2*n.s;a.scale.setScalar(r),c.scale.setScalar(r),a.position.set(n.x-.55*f-l.x*r-t*3.9*o,n.y+h-l.y*r+t*2.3*o,n.z-l.z*r),c.position.set(n.x+f-u.x*r+t*4.1*o,n.y-h-.04-u.y*r-t*1.7*o,n.z-u.z*r-.4)}function vu(i,t={}){let e=new Fn({canvas:i,antialias:!0,alpha:!0,premultipliedAlpha:!0});e.toneMapping=Kn,e.outputColorSpace=Ee,e.setClearColor(0,0);let n=new qn;n.environment=Ei(ye,e);let s=new Te(18,1,.1,100),r=Rs(ye,{quality:.8});n.add(r.group);let o=1,a=1,c=t.box||{x:195,y:441,h:416},l=-1,u=0,h=!0,f=!1,p=()=>{o=Math.max(1,i.clientWidth),a=Math.max(1,i.clientHeight),e.setPixelRatio(Math.min(2,(window.devicePixelRatio||1)*(t.scale||1))),e.setSize(o,a,!1);let g=xe.H/(c.h/a),A=g/2/Math.tan(Zn.degToRad(9));s.aspect=o/a,s.position.set(0,0,A),s.updateProjectionMatrix();let d=g/a;s.setViewOffset(o,a,o/2-c.x,a/2-c.y,o,a)},m=g=>{if(!h||(u=requestAnimationFrame(m),!f))return;let A=l<0?0:g-l,d=A<650?Math.sin(A/650*Math.PI*7)*(1-A/650)*.06:0,w=_i(650,1180,A),M=_i(700,1050,A),x=un.i(me((A-1900)/660,0,1));r.group.rotation.set(Math.sin(g/900)*.04,Math.sin(g/1400)*.12,d+x*.25),r.group.position.set(0,-x*xe.H*1.4,0),r.setTear(w),r.setMouth(M),r.setHolo(g/3e3+A/900),n.environmentRotation.set(0,g/5e3,0),e.clear(),e.render(n,s)};return p(),u=requestAnimationFrame(m),window.addEventListener("resize",p),{play(g,A){g&&(c=g),A!==void 0&&r.setLabel(A),p(),l=performance.now(),f=!0,i.style.opacity="1"},reset(){f=!1,l=-1,r.setTear(0),r.setMouth(0),e.clear(),i.style.opacity="0"},destroy(){h=!1,cancelAnimationFrame(u),window.removeEventListener("resize",p),r.dispose(),e.dispose()}}}function yu(i){let t=Math.min(window.devicePixelRatio||1,2),e=new Fn({canvas:i,antialias:!0,alpha:!0,premultipliedAlpha:!0});e.toneMapping=Kn,e.toneMappingExposure=1,e.outputColorSpace=Ee,e.setClearColor(0,0),e.setPixelRatio(t);let n=Ei(ye,e),s=Ho(ye,n);s.textures.forEach(g=>e.initTexture(g));let r=0,o=0,a=0,c=!0,l=performance.now(),u=()=>{let g=Math.max(1,Math.round(i.clientWidth)),A=Math.max(1,Math.round(i.clientHeight));(g!==o||A!==a)&&(o=g,a=A,e.setSize(o,a,!1))},h=g=>{u(),e.clear(),s.update(g,{x:o/2,y:a/2,size:Math.min(o,a)*.92,o:1},o,a,0)&&e.render(s.scene,s.camera)},f=!0,p=window.IntersectionObserver?new IntersectionObserver(g=>{f=g[g.length-1].isIntersecting}):null;p&&p.observe(i);let m=g=>{c&&(r=requestAnimationFrame(m),f&&h((g-l)/1e3))};return r=requestAnimationFrame(m),{renderAt(g){h(g)},destroy(){c=!1,cancelAnimationFrame(r),p&&p.disconnect(),s.dispose(),n.dispose&&n.dispose(),e.dispose()}}}window.SR4={THREE:ye,createHome:Mu,createRip:vu,createCoinView:yu,MILESTONES:xu,PAGES:mr,createPack:Rs,createCard:Vo,studioEnv:Ei,version:"4.2.0"};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
